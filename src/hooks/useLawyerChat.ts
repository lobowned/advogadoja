import { useState, useRef, useEffect, useCallback } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Lawyer, lawyers, type DynamicLawyer } from '@/data/lawyers';
import { supabase } from '@/integrations/supabase/client';
import { NUDGE_CONFIG, detectUrgencyLevel } from '@/data/nudge-messages';
import { getSuggestionsByProblem } from '@/data/contextual-suggestions';

type Message = {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  lawyerId?: string;
};

type TransferMessage = {
  role: 'system';
  content: string;
  timestamp: Date;
  isTransfer: true;
  fromLawyer: Lawyer | DynamicLawyer;
  toLawyer: Lawyer | DynamicLawyer;
};

type QueueMessage = {
  role: 'system';
  content: string;
  timestamp: Date;
  isQueue: true;
  queuePosition?: number;
};

export const useLawyerChat = () => {
  const [messages, setMessages] = useState<(Message | TransferMessage | QueueMessage)[]>([]);
  const [currentLawyer, setCurrentLawyer] = useState<Lawyer | DynamicLawyer>(
    lawyers.find(l => l.id === 'carlos-silva')!
  );
  const [dynamicLawyer, setDynamicLawyer] = useState<DynamicLawyer | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isThinking, setIsThinking] = useState(false);
  const [isTransferring, setIsTransferring] = useState(false);
  const [isCollectingLead, setIsCollectingLead] = useState(false);
  const [leadQuestion, setLeadQuestion] = useState<string>('');
  const [leadStep, setLeadStep] = useState<'none' | 'name' | 'contact'>('none');
  const [queuePosition, setQueuePosition] = useState<number>(2);
  const [isInQueue, setIsInQueue] = useState<boolean>(false);
  const [hasJoinedQueue, setHasJoinedQueue] = useState<boolean>(false);
  const [peopleAhead, setPeopleAhead] = useState<number>(0);
  const [showRatingButton, setShowRatingButton] = useState(false);
  const [caseSummary, setCaseSummary] = useState<string | null>(null);
  
  // Sistema de nudges
  const [nudgeCount, setNudgeCount] = useState(0);
  const [lastUserActivity, setLastUserActivity] = useState<Date>(new Date());
  const nudgeTimerRef = useRef<NodeJS.Timeout | null>(null);
  const sessionStartRef = useRef<Date>(new Date());
  
  // Detecção de urgência e problema
  const [detectedProblem, setDetectedProblem] = useState<string | null>(null);
  const [urgencyLevel, setUrgencyLevel] = useState<string>('baixa');
  const [contextualSuggestions, setContextualSuggestions] = useState<string[]>([]);
  const [userName, setUserName] = useState<string | null>(null);
  
  // Sempre gera novo sessionId a cada refresh da página
  const [sessionId] = useState(() => {
    const newId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    console.log('🆕 New chat session created:', newId);
    return newId;
  });
  
  const { toast } = useToast();
  const abortControllerRef = useRef<AbortController | null>(null);

  // Reset da conversa ao montar o componente (page refresh)
  useEffect(() => {
    console.log('🔄 Resetting chat on page refresh');
    
    // Limpar sessionStorage de conversas antigas
    sessionStorage.removeItem('chat_session_id');
    sessionStorage.removeItem('chat_messages');
    sessionStorage.removeItem('current_lawyer');
    
    // Limpar qualquer transferência pendente no banco
    const clearPendingTransfer = async () => {
      try {
        const { data: existingLeads } = await supabase
          .from('leads')
          .select('id')
          .eq('session_id', sessionId)
          .maybeSingle();
        
        if (existingLeads) {
          await supabase
            .from('leads')
            .update({ 
              pending_transfer_lawyer: null,
              detected_problem: null 
            })
            .eq('id', existingLeads.id);
          
          console.log('✅ Cleared pending transfers for session');
        }
      } catch (error) {
        console.error('Error clearing pending transfers:', error);
      }
    };
    
    clearPendingTransfer();
    
    // Timeout de 30s para limpar transferências não confirmadas
    const transferTimeoutId = setTimeout(async () => {
      try {
        const { data: leadData } = await supabase
          .from('leads')
          .select('pending_transfer_lawyer')
          .eq('session_id', sessionId)
          .maybeSingle();
        
        if (leadData?.pending_transfer_lawyer) {
          console.log('⏱️ Clearing unconfirmed transfer after 30s timeout');
          await supabase
            .from('leads')
            .update({ pending_transfer_lawyer: null })
            .eq('session_id', sessionId);
        }
      } catch (error) {
        console.error('Error clearing transfer timeout:', error);
      }
    }, 30000); // 30 segundos
    
    return () => {
      clearTimeout(transferTimeoutId);
    };
  }, []); // Empty deps = só executa na montagem inicial

  // Track user message count
  const userMessageCount = messages.filter(m => m.role === 'user').length;

  // Sistema de nudges - enviar mensagens proativas quando usuário fica inativo
  const sendNudge = useCallback(() => {
    if (nudgeCount >= NUDGE_CONFIG.length || isLoading || isTyping) return;
    
    const config = NUDGE_CONFIG[nudgeCount];
    const nudgeMessage: Message = {
      role: 'assistant',
      content: config.getMessage(detectedProblem, userName),
      timestamp: new Date(),
      lawyerId: currentLawyer.id,
    };
    
    setMessages(prev => [...prev, nudgeMessage]);
    setNudgeCount(prev => prev + 1);
    
    // Atualizar no banco (campos novos podem não estar nos types ainda)
    (supabase.from('leads') as any)
      .update({ nudge_count: nudgeCount + 1, last_nudge_at: new Date().toISOString() })
      .eq('session_id', sessionId)
      .then(() => console.log('📢 Nudge sent:', nudgeCount + 1));
    
    // Agendar próximo nudge se houver
    if (nudgeCount + 1 < NUDGE_CONFIG.length) {
      nudgeTimerRef.current = setTimeout(sendNudge, NUDGE_CONFIG[nudgeCount + 1].delay);
    }
  }, [nudgeCount, detectedProblem, userName, currentLawyer.id, sessionId, isLoading, isTyping]);
  
  // Resetar timer de nudge quando usuário interage
  const resetNudgeTimer = useCallback(() => {
    if (nudgeTimerRef.current) {
      clearTimeout(nudgeTimerRef.current);
    }
    setLastUserActivity(new Date());
    
    if (nudgeCount < NUDGE_CONFIG.length && hasJoinedQueue) {
      nudgeTimerRef.current = setTimeout(sendNudge, NUDGE_CONFIG[nudgeCount]?.delay || 25000);
    }
  }, [nudgeCount, sendNudge, hasJoinedQueue]);
  
  // Iniciar timer de nudge quando entra no chat
  useEffect(() => {
    if (hasJoinedQueue && messages.length > 0 && nudgeCount === 0) {
      nudgeTimerRef.current = setTimeout(sendNudge, NUDGE_CONFIG[0].delay);
    }
    
    return () => {
      if (nudgeTimerRef.current) clearTimeout(nudgeTimerRef.current);
    };
  }, [hasJoinedQueue, messages.length]);

  // Função para tocar notificações sonoras
  const playNotificationSound = (type: 'position' | 'ready') => {
    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      if (type === 'position') {
        // Som suave de "ding" quando posição muda
        oscillator.frequency.value = 800;
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
      } else {
        // Som duplo de sucesso quando atendimento começa
        oscillator.frequency.value = 600;
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.15);
        
        // Segundo "ding" mais alto
        setTimeout(() => {
          const osc2 = audioContext.createOscillator();
          const gain2 = audioContext.createGain();
          osc2.connect(gain2);
          gain2.connect(audioContext.destination);
          osc2.frequency.value = 900;
          gain2.gain.setValueAtTime(0.3, audioContext.currentTime);
          gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
          osc2.start(audioContext.currentTime);
          osc2.stop(audioContext.currentTime + 0.2);
        }, 150);
      }
    } catch (error) {
      console.log('Audio notification not available:', error);
    }
  };

  // Função para entrar na fila
  const joinQueue = async () => {
    setHasJoinedQueue(true);
    setIsInQueue(true);
    setPeopleAhead(2);
    
    // Mensagem inicial: 2 pessoas na frente
    setMessages([
      {
        role: 'system',
        content: '🎫 Você entrou na fila de atendimento',
        timestamp: new Date(),
        isQueue: true,
        queuePosition: 2,
      } as QueueMessage,
    ]);

    // Após 8 segundos: 1 pessoa na frente
    await new Promise(resolve => setTimeout(resolve, 8000));
    playNotificationSound('position');
    setPeopleAhead(1);
    setQueuePosition(1);
    setMessages([
      {
        role: 'system',
        content: '🎫 Atualizando sua posição na fila',
        timestamp: new Date(),
        isQueue: true,
        queuePosition: 1,
      } as QueueMessage,
    ]);

    // Após mais 10 segundos: Você é o próximo
    await new Promise(resolve => setTimeout(resolve, 10000));
    playNotificationSound('position');
    setPeopleAhead(0);
    setMessages([
      {
        role: 'system',
        content: '🎫 Você é o próximo!',
        timestamp: new Date(),
        isQueue: true,
        queuePosition: 0,
      } as QueueMessage,
    ]);

    // Após 2 segundos: Atendimento iniciado
    await new Promise(resolve => setTimeout(resolve, 2000));
    playNotificationSound('ready');
    setIsInQueue(false);
    setMessages([
      {
        role: 'assistant',
        content: 'Olá! Sou o Dr. Carlos Silva. Em que posso ajudá-lo hoje?',
        timestamp: new Date(),
        lawyerId: 'carlos-silva',
      },
    ]);
  };

  const sendMessage = async (content: string, retryCount = 0) => {
    if (!content.trim() || isLoading) return;

    console.log('💬 [USER MESSAGE]', {
      content: content.trim(),
      currentLawyer: currentLawyer.id,
      isCollectingLead,
      leadStep,
      messageCount: messages.filter(m => m.role === 'user').length + 1,
      retryAttempt: retryCount,
      timestamp: new Date().toISOString()
    });

    // Handle lead collection responses
    if (isCollectingLead) {
      try {
        const trimmedContent = content.trim();
        
        if (leadStep === 'name') {
          // VALIDAÇÃO: Verificar se é um nome válido
          const invalidNames = ['não', 'nao', 'sim', 'talvez', 'ok', 'oi', 'olá', 'ola'];
          const isInvalidName = invalidNames.includes(trimmedContent.toLowerCase()) || 
                                trimmedContent.length < 2 ||
                                /^\d+$/.test(trimmedContent); // Só números
          
          if (isInvalidName) {
            // Add user message
            const userMessage: Message = {
              role: 'user',
              content: trimmedContent,
              timestamp: new Date(),
            };
            setMessages(prev => [...prev, userMessage]);
            
            // Ask again
            const retryMessage: Message = {
              role: 'assistant',
              content: 'Desculpe, não entendi. Poderia me informar seu nome completo?',
              timestamp: new Date(),
              lawyerId: currentLawyer.id,
            };
            setMessages(prev => [...prev, retryMessage]);
            return;
          }
          
          // Add user message
          const userMessage: Message = {
            role: 'user',
            content: trimmedContent,
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, userMessage]);
          
          // Save name to database
          await supabase
            .from('leads')
            .update({ name: trimmedContent })
            .eq('session_id', sessionId);
          
          setLeadStep('contact');
          setLeadQuestion('Qual o seu WhatsApp para contato?');
          
          // Add next question message
          const nextQuestion: Message = {
            role: 'assistant',
            content: 'Ótimo! E qual o seu WhatsApp para contato?',
            timestamp: new Date(),
            lawyerId: currentLawyer.id,
          };
          setMessages(prev => [...prev, nextQuestion]);
          return;
          
        } else if (leadStep === 'contact') {
          // Add user message
          const userMessage: Message = {
            role: 'user',
            content: trimmedContent,
            timestamp: new Date(),
          };
          setMessages(prev => [...prev, userMessage]);
          
          // Save contact to database and get lead data
          const isPhone = /^\d+$/.test(trimmedContent.replace(/\D/g, ''));
          const { data: updatedLead, error: updateError } = await supabase
            .from('leads')
            .update({ 
              [isPhone ? 'phone' : 'email']: trimmedContent,
              status: 'contacted'
            })
            .eq('session_id', sessionId)
            .select()
            .single();
          
          if (!updateError && updatedLead) {
            // Disparar notificação WhatsApp IMEDIATAMENTE
            try {
              console.log('Sending WhatsApp notification...');
              const { error: notificationError } = await supabase.functions.invoke(
                'send-whatsapp-notification',
                {
                  body: { leadData: updatedLead }
                }
              );
              
              if (notificationError) {
                console.error('Error sending WhatsApp notification:', notificationError);
              } else {
                console.log('WhatsApp notification sent successfully');
                
                // Marcar como notificado
                await supabase
                  .from('leads')
                  .update({
                    notification_sent: true,
                    notification_sent_at: new Date().toISOString()
                  })
                  .eq('session_id', sessionId);
              }
            } catch (error) {
              console.error('Failed to invoke WhatsApp notification:', error);
            }
          }
          
          setIsCollectingLead(false);
          setLeadStep('none');
          setLeadQuestion('');
          
          // Add confirmation message
          const confirmMessage: Message = {
            role: 'assistant',
            content: 'Perfeito! 📱 Vamos entrar em contato imediatamente pelo WhatsApp para dar seguimento ao seu atendimento. Fique atento às mensagens!',
            timestamp: new Date(),
            lawyerId: currentLawyer.id,
          };
          setMessages(prev => [...prev, confirmMessage]);
          return;
        }
      } catch (error) {
        console.error('Error saving lead data:', error);
      }
    }

    const userMessage: Message = {
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setIsThinking(true);

    abortControllerRef.current = new AbortController();

    try {
      // Tempo de leitura baseado no tamanho da mensagem do usuário
      const words = content.trim().split(/\s+/).length;
      const readingTime = words * 250; // 250ms por palavra
      const thinkingTime = 1500 + Math.random() * 3000; // 1.5-4.5 segundos
      const totalDelay = readingTime + thinkingTime;
      
      await new Promise(resolve => setTimeout(resolve, totalDelay));
      
      setIsThinking(false);
      setIsTyping(true);

      const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/lawyer-chat`;
      
      console.log('📡 [CALLING API]', {
        url: CHAT_URL,
        currentLawyer: currentLawyer.id,
        messageCount: userMessageCount + 1,
        sessionId
      });
      
      const response = await fetch(CHAT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role === 'system' ? 'assistant' : m.role,
            content: m.content,
          })),
          currentLawyerId: currentLawyer.id,
          sessionId: sessionId,
          messageCount: userMessageCount + 1,
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok) {
        let errorMessage = 'Falha ao conectar com o advogado';
        let shouldRetry = false;
        
        // Handle specific error codes
        if (response.status === 402) {
          errorMessage = 'O serviço está temporariamente indisponível devido ao limite de créditos. Por favor, tente novamente mais tarde.';
          toast({
            title: 'Serviço Indisponível',
            description: errorMessage,
            variant: 'destructive',
          });
        } else if (response.status === 429) {
          errorMessage = 'Muitas requisições. Por favor, aguarde um momento antes de tentar novamente.';
          toast({
            title: 'Limite de Requisições',
            description: errorMessage,
            variant: 'destructive',
          });
        } else if (response.status >= 500 && retryCount < 3) {
          // Retry on server errors (max 3 attempts)
          shouldRetry = true;
          errorMessage = `Erro no servidor. Tentando novamente (${retryCount + 1}/3)...`;
          console.warn(`⚠️ [RETRY] Attempt ${retryCount + 1} after server error ${response.status}`);
        } else if (!navigator.onLine) {
          errorMessage = 'Sem conexão com a internet. Verifique sua conexão e tente novamente.';
          toast({
            title: 'Sem Conexão',
            description: errorMessage,
            variant: 'destructive',
          });
        } else {
          errorMessage = `Erro de conexão (código ${response.status}). Tente novamente.`;
          toast({
            title: 'Erro de Conexão',
            description: errorMessage,
            variant: 'destructive',
          });
        }
        
        setIsLoading(false);
        setIsTyping(false);
        setIsThinking(false);
        
        if (shouldRetry) {
          // Wait 2 seconds before retry
          await new Promise(resolve => setTimeout(resolve, 2000));
          return sendMessage(content, retryCount + 1);
        }
        
        return;
      }
      
      if (!response.body) {
        throw new Error('Falha ao conectar com o advogado');
      }

      // Função para encontrar ponto de quebra natural
      const findSplitPoint = (text: string): number | null => {
        // Não quebrar mensagens curtas
        if (text.length < 40) return null;
        
        // 25% de chance de quebrar
        if (Math.random() > 0.25) return null;
        
        // Encontrar ponto natural de quebra
        const sentenceEnders = ['. ', '! ', '? '];
        
        for (const ender of sentenceEnders) {
          const index = text.indexOf(ender);
          // Quebrar após primeira frase se tiver tamanho adequado
          if (index >= 15 && index < text.length - 10) {
            return index + ender.length;
          }
        }
        
        return null;
      };

      // Função para digitar mensagem com humanização
      const typeMessage = async (text: string, forceNewMessage: boolean = false): Promise<string> => {
        let typedContent = '';
        let newMessageCreated = false;
        
        for (let i = 0; i < text.length; i++) {
          const char = text[i];
          const textLength = text.length;
          
          // Velocidade variável: mais lento no início/fim, rápido no meio
          let baseDelay = 60;
          const progress = i / textLength;
          
          if (progress < 0.15) {
            baseDelay = 90; // Início mais lento (pensando)
          } else if (progress > 0.85) {
            baseDelay = 75; // Final mais lento (revisando)
          } else {
            baseDelay = 45; // Meio mais rápido (fluindo)
          }
          
          // Alta variância (±50%) para naturalidade
          let delay = baseDelay * (0.5 + Math.random());
          
          // Pausas naturais após pontuação
          if (char === '.' || char === '!' || char === '?') {
            delay = 450 + Math.random() * 400; // 450-850ms
          } else if (char === ',') {
            delay = 150 + Math.random() * 150; // 150-300ms
          } else if (char === '\n') {
            delay = 250 + Math.random() * 250; // 250-500ms
          } else if (char === ' ' && Math.random() < 0.08) {
            // 8% chance de pausa extra entre palavras (pensando)
            delay = 200 + Math.random() * 350; // 200-550ms
          }
          
          // 3% chance de erro de digitação (apenas em letras)
          const shouldMakeTypo = Math.random() < 0.03 && 
                                char.match(/[a-záàâãéêíóôõúçA-ZÁÀÂÃÉÊÍÓÔÕÚÇ]/) && 
                                i < textLength - 3;
          
          if (shouldMakeTypo) {
            // Digitar letra errada
            const wrongChars = 'abcdefghijklmnopqrstuvwxyz';
            const wrongChar = wrongChars[Math.floor(Math.random() * wrongChars.length)];
            typedContent += wrongChar;
            
            const shouldCreateNewMessage1 = forceNewMessage && !newMessageCreated;
            
            setMessages(prev => {
              const last = prev[prev.length - 1];
              if (!shouldCreateNewMessage1 && last?.role === 'assistant' && !('isTransfer' in last) && last.lawyerId === currentLawyer.id) {
                return prev.map((m, idx) =>
                  idx === prev.length - 1
                    ? { ...m, content: typedContent }
                    : m
                );
              }
              return [
                ...prev,
                {
                  role: 'assistant',
                  content: typedContent,
                  timestamp: new Date(),
                  lawyerId: currentLawyer.id,
                },
              ];
            });
            
            if (shouldCreateNewMessage1) {
              newMessageCreated = true;
            }
            
            // Pausa ao digitar errado
            await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 80));
            
            // Pausa ao perceber o erro
            await new Promise(resolve => setTimeout(resolve, 180 + Math.random() * 220));
            
            // Apagar caractere errado
            typedContent = typedContent.slice(0, -1);
            
            const shouldCreateNewMessage2 = forceNewMessage && !newMessageCreated;
            
            setMessages(prev => {
              const last = prev[prev.length - 1];
              if (!shouldCreateNewMessage2 && last?.role === 'assistant' && !('isTransfer' in last) && last.lawyerId === currentLawyer.id) {
                return prev.map((m, idx) =>
                  idx === prev.length - 1
                    ? { ...m, content: typedContent }
                    : m
                );
              }
              return prev;
            });
            
            if (shouldCreateNewMessage2) {
              newMessageCreated = true;
            }
            
            // Pausa antes de corrigir
            await new Promise(resolve => setTimeout(resolve, 60 + Math.random() * 80));
          }
          
          // Digitar o caractere correto
          typedContent += char;
          
          const shouldCreateNewMessage = forceNewMessage && !newMessageCreated;
          
          setMessages(prev => {
            const last = prev[prev.length - 1];
            if (!shouldCreateNewMessage && last?.role === 'assistant' && !('isTransfer' in last) && last.lawyerId === currentLawyer.id) {
              return prev.map((m, idx) =>
                idx === prev.length - 1
                  ? { ...m, content: typedContent }
                  : m
              );
            }
            return [
              ...prev,
              {
                role: 'assistant',
                content: typedContent,
                timestamp: new Date(),
                lawyerId: currentLawyer.id,
              },
            ];
          });
          
          if (shouldCreateNewMessage) {
            newMessageCreated = true;
          }
          
          await new Promise(resolve => setTimeout(resolve, delay));
        }
        
        return typedContent;
      };

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = '';
      let streamDone = false;
      let fullResponseContent = '';
      let transferData: { newLawyerId: string } | null = null;

      // Primeiro, acumular todo o conteúdo da resposta
      while (!streamDone) {
        const { done, value } = await reader.read();
        if (done) break;
        
        textBuffer += decoder.decode(value, { stream: true });

        let newlineIndex: number;
        while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
          let line = textBuffer.slice(0, newlineIndex);
          textBuffer = textBuffer.slice(newlineIndex + 1);

          if (line.endsWith('\r')) line = line.slice(0, -1);
          if (line.startsWith(':') || line.trim() === '') continue;
          if (!line.startsWith('data: ')) continue;

          const jsonStr = line.slice(6).trim();
          if (jsonStr === '[DONE]') {
            streamDone = true;
            break;
          }

          try {
            const parsed = JSON.parse(jsonStr);
            
            // Verificar se há solicitação de coleta de lead
            if (parsed.collectLead && parsed.question) {
              setIsCollectingLead(true);
              setLeadQuestion(parsed.question);
              
              // Determine step based on question
              if (parsed.question.toLowerCase().includes('nome')) {
                setLeadStep('name');
              } else if (parsed.question.toLowerCase().includes('whatsapp') || parsed.question.toLowerCase().includes('contato')) {
                setLeadStep('contact');
              }
              continue;
            }
            
            // Verificar se há solicitação de avaliação
            const metadata = parsed.metadata;
            if (metadata?.showRatingButton) {
              console.log('⭐ [RATING REQUESTED]', {
                caseSummary: metadata.caseSummary?.substring(0, 100),
                timestamp: new Date().toISOString()
              });
              setShowRatingButton(true);
              setCaseSummary(metadata.caseSummary || null);
            }
            
            // Verificar se há transferência (novo formato com metadata)
            if (metadata?.action === 'confirm_transfer' && metadata?.newLawyerId) {
              console.log('🔄 [TRANSFER DETECTED via metadata]', {
                from: currentLawyer.id,
                to: metadata.newLawyerId,
                action: metadata.action,
                timestamp: new Date().toISOString()
              });
              transferData = { newLawyerId: metadata.newLawyerId };
              continue;
            }
            // Manter compatibilidade com formato antigo (se houver)
            else if (parsed.transfer && parsed.newLawyerId) {
              console.log('🔄 [TRANSFER DETECTED via legacy format]', {
                from: currentLawyer.id,
                to: parsed.newLawyerId,
                timestamp: new Date().toISOString()
              });
              transferData = { newLawyerId: parsed.newLawyerId };
              continue;
            }

            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              // Não validar respostas curtas (mensagens hardcoded são curtas)
              const isShortResponse = fullResponseContent.length < 150;
              
              // VALIDAÇÃO: Detectar resposta corrompida (ignorando emojis, permitindo português)
              const contentWithoutEmojis = content
                .replace(/[\u{1F300}-\u{1FAFF}]/gu, '')  // Todos os emojis (range completo)
                .replace(/[\u{2600}-\u{27BF}]/gu, '')     // Misc symbols, dingbats
                .replace(/[\u{FE00}-\u{FE0F}]/gu, '')     // Variation selectors
                .replace(/[\u{200D}]/gu, '')               // Zero-width joiner
                .trim();
              
              console.log('🔍 [VALIDATION CHECK]', {
                originalContent: content,
                withoutEmojis: contentWithoutEmojis,
                contentLength: fullResponseContent.length,
                isShortResponse,
                hasEmojis: content !== contentWithoutEmojis
              });
              
              if (!isShortResponse) {
                // Detectar apenas inglês excessivo (mais de 6 palavras em inglês)
                const englishWords = (contentWithoutEmojis.match(/\b(you|the|and|for|with|from|will|need|that|this|your|case|legal|help|can|are|have|been|what|when|where|how|why|client|attorney|should|would|could)\b/gi) || []);
                const hasExcessiveEnglish = englishWords.length > 6;
                
                // Detectar caracteres realmente problemáticos (árabe, chinês, cirílico, etc.)
                const hasTrulyForeignChars = /[\u0600-\u06FF\u4E00-\u9FFF\u0400-\u04FF\u3040-\u309F\u30A0-\u30FF]/.test(contentWithoutEmojis);
                
                if (hasExcessiveEnglish || hasTrulyForeignChars) {
                  console.warn('⚠️ [CORRUPTED RESPONSE]', {
                    englishWordsCount: englishWords.length,
                    englishWords,
                    hasTrulyForeignChars,
                    contentSample: contentWithoutEmojis.substring(0, 100)
                  });
                  fullResponseContent = "Olá! Sou o especialista. Vi seu caso e vou te ajudar. Pode me contar mais detalhes?";
                  break; // Parar de processar chunks
                }
              }
              
              fullResponseContent += content;
            }
          } catch {
            textBuffer = line + '\n' + textBuffer;
            break;
          }
        }
      }

      console.log('📨 [RESPONSE RECEIVED]', {
        contentLength: fullResponseContent.length,
        hasTransfer: !!transferData,
        contentPreview: fullResponseContent.substring(0, 100),
        timestamp: new Date().toISOString()
      });

      // Agora processar o conteúdo acumulado - verificar se deve quebrar
      const splitPoint = findSplitPoint(fullResponseContent);
      
      if (splitPoint !== null && fullResponseContent.length > 0) {
        // Dividir em duas partes
        const part1 = fullResponseContent.substring(0, splitPoint).trim();
        const part2 = fullResponseContent.substring(splitPoint).trim();
        
        // Digitar e enviar primeira parte
        await typeMessage(part1);
        
        // Pausa natural entre mensagens (simula "enviou antes de terminar")
        setIsTyping(false);
        await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));
        
        // Mostrar "digitando" novamente
        setIsTyping(true);
        await new Promise(resolve => setTimeout(resolve, 300 + Math.random() * 500));
        
        // Digitar segunda parte FORÇANDO nova mensagem
        await typeMessage(part2, true);
        
      } else if (fullResponseContent.length > 0) {
        // Comportamento normal - uma única mensagem
        await typeMessage(fullResponseContent);
      }

      // Processar transferência se detectada
      if (transferData && transferData.newLawyerId) {
        console.log('🔄 [PROCESSING TRANSFER]', {
          newLawyerId: transferData.newLawyerId,
          currentLawyerId: currentLawyer.id
        });
        
        // Verificar se há transferência
        const newLawyer = lawyers.find(l => l.id === transferData.newLawyerId);
        let dynamicLawyerData: DynamicLawyer | null = null;
        
        // Se não encontrou lawyer estático, verificar se é dinâmico
        if (!newLawyer && transferData.newLawyerId?.startsWith('dynamic-')) {
          try {
            const { data: leadData, error } = await supabase
              .from('leads')
              .select('dynamic_lawyer')
              .eq('session_id', sessionId)
              .maybeSingle();
            
            if (error) {
              console.error('❌ Error loading dynamic lawyer:', error);
            } else if (leadData?.dynamic_lawyer) {
              const dynamicData = leadData.dynamic_lawyer as any;
              
              // Validar estrutura do advogado dinâmico
              if (dynamicData.id && dynamicData.name && dynamicData.photo) {
                dynamicLawyerData = {
                  ...dynamicData,
                  keywords: dynamicData.keywords || [],
                  isVirtual: true
                } as DynamicLawyer;
                console.log('✨ [DYNAMIC LAWYER] Loaded and validated:', dynamicLawyerData.name);
              } else {
                console.error('⚠️ [DYNAMIC LAWYER] Invalid structure in database:', dynamicData);
              }
            } else {
              console.warn('⚠️ [DYNAMIC LAWYER] Not found in database for session:', sessionId);
            }
          } catch (error) {
            console.error('❌ Exception loading dynamic lawyer:', error);
          }
        }
        
        const targetLawyer = newLawyer || dynamicLawyerData;
        
        // Validar completamente que targetLawyer existe e tem as propriedades necessárias
        if (!targetLawyer) {
          console.error('❌ [TRANSFER] No target lawyer found for:', transferData.newLawyerId);
          return;
        }
        
        if (!targetLawyer.id || !targetLawyer.name) {
          console.error('❌ [TRANSFER] Invalid target lawyer structure:', targetLawyer);
          return;
        }
        
        if (targetLawyer.id === currentLawyer.id) {
          console.log('⚠️ [TRANSFER] Target lawyer is the same as current, skipping');
          return;
        }
        
        console.log('✅ [TRANSFER INITIATED]', {
          from: currentLawyer.name,
          to: targetLawyer.name,
          timestamp: new Date().toISOString()
        });
        
        // NOVO: Adicionar mensagem visual de transferência
        const transferMessage: TransferMessage = {
          role: 'system',
          content: `Transferindo para ${targetLawyer.name}...`,
          timestamp: new Date(),
          isTransfer: true,
          fromLawyer: currentLawyer,
          toLawyer: targetLawyer,
        };
        setMessages(prev => [...prev, transferMessage]);
        
        // Salvar advogado dinâmico se necessário
        if (dynamicLawyerData && dynamicLawyerData.id && dynamicLawyerData.name) {
          // Garantir que tem keywords para compatibilidade
          if (!dynamicLawyerData.keywords) {
            dynamicLawyerData.keywords = [];
          }
          setDynamicLawyer(dynamicLawyerData);
          console.log('✅ [DYNAMIC LAWYER] Set in state:', dynamicLawyerData.name);
        } else if (dynamicLawyerData) {
          console.error('⚠️ [DYNAMIC LAWYER] Invalid structure:', dynamicLawyerData);
        }
        
        setIsTransferring(true);
        setIsTyping(false);

        // Aumentar tempo de animação de transferência
        await new Promise(resolve => setTimeout(resolve, 3000));
        
        console.log('🔄 [SWITCHING LAWYER]', {
          newLawyerId: targetLawyer.id,
          newLawyerName: targetLawyer.name
        });
        
        setCurrentLawyer(targetLawyer);
        setIsTransferring(false);
        setIsTyping(true);

        // Gerar primeira mensagem do novo advogado via IA
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        try {
          const transferResponse = await fetch(CHAT_URL, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
              },
              body: JSON.stringify({
                messages: [
                  ...messages,
                  userMessage,
                  { role: 'assistant', content: fullResponseContent }
                ].map(m => ({
                  role: m.role === 'system' ? 'assistant' : m.role,
                  content: m.content,
                })),
                currentLawyerId: targetLawyer.id,
                sessionId: sessionId,
                messageCount: userMessageCount + 1,
                isTransfer: true, // Indica que é a primeira mensagem após transferência
              }),
            });

            console.log('📡 [TRANSFER RESPONSE]', {
              status: transferResponse.status,
              ok: transferResponse.ok,
              hasBody: !!transferResponse.body
            });

            if (transferResponse.ok && transferResponse.body) {
              const transferReader = transferResponse.body.getReader();
              const transferDecoder = new TextDecoder();
              let transferBuffer = '';
              let transferDone = false;
              let newLawyerContent = '';
              let hasReceivedContent = false;

              // Timeout de 10 segundos para receber conteúdo
              const timeoutId = setTimeout(() => {
                if (!hasReceivedContent) {
                  console.warn('⚠️ [TRANSFER TIMEOUT] No content received after 10s');
                }
              }, 10000);

              while (!transferDone) {
                const { done, value } = await transferReader.read();
                if (done) break;
                
                transferBuffer += transferDecoder.decode(value, { stream: true });

                let newlineIndex: number;
                while ((newlineIndex = transferBuffer.indexOf('\n')) !== -1) {
                  let line = transferBuffer.slice(0, newlineIndex);
                  transferBuffer = transferBuffer.slice(newlineIndex + 1);

                  if (line.endsWith('\r')) line = line.slice(0, -1);
                  if (line.startsWith(':') || line.trim() === '') continue;
                  if (!line.startsWith('data: ')) continue;

                  const jsonStr = line.slice(6).trim();
                  if (jsonStr === '[DONE]') {
                    transferDone = true;
                    break;
                  }

                  try {
                    const parsed = JSON.parse(jsonStr);
                    const content = parsed.choices?.[0]?.delta?.content as string | undefined;
                    
                    if (content) {
                      hasReceivedContent = true;
                      console.log('🔤 [TRANSFER CONTENT]', {
                        content: content.substring(0, 50),
                        totalLength: newLawyerContent.length + content.length
                      });
                      
                      for (let i = 0; i < content.length; i++) {
                        const char = content[i];
                        newLawyerContent += char;
                        
                        setMessages(prev => {
                          const last = prev[prev.length - 1];
                          if (last?.role === 'assistant' && !('isTransfer' in last) && last.lawyerId === targetLawyer.id) {
                            return prev.map((m, i) =>
                              i === prev.length - 1
                                ? { ...m, content: newLawyerContent }
                                : m
                            );
                          }
                          return [
                            ...prev,
                            {
                              role: 'assistant',
                              content: newLawyerContent,
                              timestamp: new Date(),
                              lawyerId: targetLawyer.id,
                            },
                          ];
                        });

                        let delay = 25 + Math.random() * 35;
                        if (char === '.' || char === '!' || char === '?') {
                          delay = 400 + Math.random() * 300;
                        } else if (char === ',' || char === ';') {
                          delay = 100 + Math.random() * 100;
                        } else if (char === '\n') {
                          delay = 200 + Math.random() * 200;
                        }
                        
                        await new Promise(resolve => setTimeout(resolve, delay));
                      }
                    }
                  } catch {
                    transferBuffer = line + '\n' + transferBuffer;
                    break;
                  }
                }
              }

              clearTimeout(timeoutId);

              console.log('✅ [TRANSFER COMPLETE]', {
                finalContent: newLawyerContent.substring(0, 100),
                contentLength: newLawyerContent.length,
                hasContent: newLawyerContent.length > 0
              });

              // Fallback se não recebeu conteúdo
              if (newLawyerContent.length === 0) {
                console.warn('⚠️ [TRANSFER] No content received, using fallback');
                const fallbackMessage = `Olá! Sou ${(targetLawyer.name.split(' ')[1] || targetLawyer.name.split(' ')[0])}, especialista em ${targetLawyer.subSpecialty}. Vi que você precisa de ajuda. Pode me dar mais detalhes?`;
                setMessages(prev => [
                  ...prev,
                  {
                    role: 'assistant',
                    content: fallbackMessage,
                    timestamp: new Date(),
                    lawyerId: targetLawyer.id,
                  },
                ]);
              }

              setIsTyping(false);
              console.log('✅ [TRANSFER TYPING DONE]');
            } else {
              console.error('❌ [TRANSFER RESPONSE ERROR]', {
                status: transferResponse.status,
                statusText: transferResponse.statusText
              });
              setIsTyping(false);
              
              // Fallback para resposta com erro
              const fallbackMessage = `Olá! Sou ${(targetLawyer.name.split(' ')[1] || targetLawyer.name.split(' ')[0])}, especialista em ${targetLawyer.subSpecialty}. Vi que você precisa de ajuda. Pode me dar mais detalhes?`;
              setMessages(prev => [
                ...prev,
                {
                  role: 'assistant',
                  content: fallbackMessage,
                  timestamp: new Date(),
                  lawyerId: targetLawyer.id,
                },
              ]);
            }
          } catch (error) {
            console.error('❌ [TRANSFER ERROR]', error);
            setIsTyping(false);
            // Fallback para mensagem estática em caso de erro
            const fallbackMessage = `Olá! Sou ${(targetLawyer.name.split(' ')[1] || targetLawyer.name.split(' ')[0])}, especialista em ${targetLawyer.subSpecialty}. Vi que você precisa de ajuda. Pode me dar mais detalhes?`;
            setMessages(prev => [
              ...prev,
              {
                role: 'assistant',
                content: fallbackMessage,
                timestamp: new Date(),
                lawyerId: targetLawyer.id,
              },
            ]);
          }
        }
      
      console.log('✅ [MESSAGE PROCESSED]', {
        hadTransfer: !!transferData,
        finalLawyer: currentLawyer.id,
        responseLength: fullResponseContent.length,
        timestamp: new Date().toISOString()
      });
      
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('⚠️ [REQUEST ABORTED]');
        return;
      }
      
      console.error('❌ [ERROR]', error);
      
      setIsLoading(false);
      setIsTyping(false);
      setIsThinking(false);

      // Check if it's a network error and retry
      const isNetworkError = error instanceof TypeError && error.message.includes('fetch');
      if (isNetworkError && retryCount < 3) {
        console.warn(`⚠️ [NETWORK RETRY] Attempt ${retryCount + 1} after network error`);
        toast({
          title: 'Reconectando...',
          description: `Tentativa ${retryCount + 1} de 3`,
        });
        
        // Wait 2 seconds before retry
        await new Promise(resolve => setTimeout(resolve, 2000));
        return sendMessage(content, retryCount + 1);
      }

      toast({
        title: 'Erro de Conexão',
        description: isNetworkError 
          ? 'Não foi possível conectar. Verifique sua internet e tente novamente.'
          : 'Não foi possível conectar com o advogado. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
      setIsTyping(false);
      setIsThinking(false);
    }
  };

  const stopGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsLoading(false);
    setIsTyping(false);
    setIsThinking(false);
  };

  const submitRating = async (rating: number) => {
    try {
      console.log('⭐ [SUBMITTING RATING]', { rating, sessionId });
      
      // Buscar dados do lead
      const { data: lead, error: leadError } = await supabase
        .from('leads')
        .select('*')
        .eq('session_id', sessionId)
        .single();
      
      if (leadError) {
        console.error('Error fetching lead:', leadError);
        toast({
          title: "Erro ao salvar avaliação",
          description: "Não foi possível processar sua avaliação.",
          variant: "destructive"
        });
        return;
      }
      
      if (lead) {
        // Converter mensagens para JSON serializado (sem Date objects)
        const messagesForDb = messages.map(m => ({
          role: m.role,
          content: m.content,
          timestamp: m.timestamp.toISOString(),
          ...(('lawyerId' in m) && { lawyerId: m.lawyerId }),
          ...(('isTransfer' in m) && { isTransfer: true }),
          ...(('isQueue' in m) && { isQueue: true, queuePosition: m.queuePosition })
        }));
        
        // Salvar histórico, resumo e avaliação
        const { error: updateError } = await supabase
          .from('leads')
          .update({
            conversation_history: messagesForDb,
            case_summary: caseSummary,
            status: 'completed',
            rating: rating,
            updated_at: new Date().toISOString()
          })
          .eq('session_id', sessionId);
        
        if (updateError) {
          console.error('Error updating lead:', updateError);
          toast({
            title: "Erro ao salvar avaliação",
            description: "Não foi possível processar sua avaliação.",
            variant: "destructive"
          });
          return;
        }
        
        // Disparar notificação WhatsApp com resumo
        console.log('📨 [INVOKING WHATSAPP NOTIFICATION]');
        try {
          const { error: notificationError } = await supabase.functions.invoke('send-whatsapp-notification', {
            body: { 
              leadData: {
                ...lead,
                case_summary: caseSummary,
                conversation_history: messagesForDb,
                rating: rating
              },
              isEndConversation: true
            }
          });
          
          if (notificationError) {
            console.error('Error sending WhatsApp notification:', notificationError);
          } else {
            console.log('✅ WhatsApp notification sent successfully');
          }
        } catch (notifError) {
          console.error('Failed to invoke WhatsApp notification:', notifError);
        }
      }
      
      setShowRatingButton(false);
      toast({ 
        title: "Obrigado pela avaliação! 🙏",
        description: "Sua opinião nos ajuda a melhorar nosso atendimento."
      });
    } catch (error) {
      console.error('Error submitting rating:', error);
      toast({
        title: "Erro ao salvar avaliação",
        description: "Não foi possível processar sua avaliação.",
        variant: "destructive"
      });
    }
  };

  return {
    messages,
    isLoading,
    isTyping,
    isThinking,
    isTransferring,
    isCollectingLead,
    leadQuestion,
    sendMessage,
    stopGeneration,
    submitRating,
    currentLawyer,
    allLawyers: lawyers,
    isInQueue,
    queuePosition,
    hasJoinedQueue,
    joinQueue,
    peopleAhead,
    showRatingButton,
    // Novos campos para sistema proativo
    detectedProblem,
    urgencyLevel,
    contextualSuggestions,
    resetNudgeTimer,
    nudgeCount,
  };
};

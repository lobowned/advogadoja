import { useState, useRef, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Lawyer, lawyers } from '@/data/lawyers';
import { supabase } from '@/integrations/supabase/client';

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
  fromLawyer: Lawyer;
  toLawyer: Lawyer;
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
  const [currentLawyer, setCurrentLawyer] = useState<Lawyer>(
    lawyers.find(l => l.id === 'carlos-silva')!
  );
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
  const [sessionId] = useState(() => {
    // Generate or retrieve session ID
    const stored = sessionStorage.getItem('chat_session_id');
    if (stored) return stored;
    const newId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    sessionStorage.setItem('chat_session_id', newId);
    return newId;
  });
  const { toast } = useToast();
  const abortControllerRef = useRef<AbortController | null>(null);

  // Track user message count
  const userMessageCount = messages.filter(m => m.role === 'user').length;

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

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

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
        
        // Handle specific error codes
        if (response.status === 402) {
          errorMessage = 'O serviço está temporariamente indisponível devido ao limite de créditos. Por favor, tente novamente mais tarde.';
          toast({
            title: 'Serviço Indisponível',
            description: errorMessage,
            variant: 'destructive',
          });
          setIsLoading(false);
          setIsTyping(false);
          setIsThinking(false);
          return;
        } else if (response.status === 429) {
          errorMessage = 'Muitas requisições. Por favor, aguarde um momento antes de tentar novamente.';
          toast({
            title: 'Limite de Requisições',
            description: errorMessage,
            variant: 'destructive',
          });
          setIsLoading(false);
          setIsTyping(false);
          setIsThinking(false);
          return;
        }
        
        throw new Error(errorMessage);
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
      const typeMessage = async (text: string): Promise<string> => {
        let typedContent = '';
        
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
            
            setMessages(prev => {
              const last = prev[prev.length - 1];
              if (last?.role === 'assistant' && !('isTransfer' in last)) {
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
            
            // Pausa ao digitar errado
            await new Promise(resolve => setTimeout(resolve, 50 + Math.random() * 80));
            
            // Pausa ao perceber o erro
            await new Promise(resolve => setTimeout(resolve, 180 + Math.random() * 220));
            
            // Apagar caractere errado
            typedContent = typedContent.slice(0, -1);
            
            setMessages(prev => {
              const last = prev[prev.length - 1];
              if (last?.role === 'assistant' && !('isTransfer' in last)) {
                return prev.map((m, idx) =>
                  idx === prev.length - 1
                    ? { ...m, content: typedContent }
                    : m
                );
              }
              return prev;
            });
            
            // Pausa antes de corrigir
            await new Promise(resolve => setTimeout(resolve, 60 + Math.random() * 80));
          }
          
          // Digitar o caractere correto
          typedContent += char;
          
          setMessages(prev => {
            const last = prev[prev.length - 1];
            if (last?.role === 'assistant' && !('isTransfer' in last)) {
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
            
            // Verificar se há transferência
            if (parsed.transfer && parsed.newLawyerId) {
              transferData = { newLawyerId: parsed.newLawyerId };
              continue;
            }

            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              // VALIDAÇÃO: Detectar resposta corrompida ou em inglês
              const hasNonLatinChars = /[^\x00-\x7F\u00C0-\u00FF\u0100-\u017F\u0180-\u024F\u2000-\u206F\u2070-\u209F\u20A0-\u20CF\u2100-\u214F\u2190-\u21FF\u2200-\u22FF]/.test(content);
              const hasEnglishWords = /\b(you|the|and|for|with|from|will|need|that|this|your|case|legal|issue|help|can|are|have|been|what|when|where|how|why|client|lawyer|attorney)\b/i.test(content);
              
              if (hasNonLatinChars || hasEnglishWords) {
                console.warn('⚠️ Corrupted or English response detected, using fallback');
                fullResponseContent = "Olá! Sou o especialista. Vi seu caso e vou te ajudar. Pode me contar mais detalhes?";
                break; // Parar de processar chunks
              }
              
              fullResponseContent += content;
            }
          } catch {
            textBuffer = line + '\n' + textBuffer;
            break;
          }
        }
      }

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
        
        // Digitar segunda parte como nova mensagem
        await typeMessage(part2);
        
      } else if (fullResponseContent.length > 0) {
        // Comportamento normal - uma única mensagem
        await typeMessage(fullResponseContent);
      }

      // Processar transferência se detectada
      if (transferData && transferData.newLawyerId) {
        const newLawyer = lawyers.find(l => l.id === transferData.newLawyerId);
        if (newLawyer && newLawyer.id !== currentLawyer.id) {
          setIsTransferring(true);
          setIsTyping(false);

          // Mostrar indicador visual de transferência (sem mensagem de texto)
          await new Promise(resolve => setTimeout(resolve, 2000));
          
          setCurrentLawyer(newLawyer);
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
                currentLawyerId: newLawyer.id,
                sessionId: sessionId,
                messageCount: userMessageCount + 1,
                isTransfer: true, // Indica que é a primeira mensagem após transferência
              }),
            });

            if (transferResponse.ok && transferResponse.body) {
              const transferReader = transferResponse.body.getReader();
              const transferDecoder = new TextDecoder();
              let transferBuffer = '';
              let transferDone = false;
              let newLawyerContent = '';

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
                      for (let i = 0; i < content.length; i++) {
                        const char = content[i];
                        newLawyerContent += char;
                        
                        setMessages(prev => {
                          const last = prev[prev.length - 1];
                          if (last?.role === 'assistant' && !('isTransfer' in last) && last.lawyerId === newLawyer.id) {
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
                              lawyerId: newLawyer.id,
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
            }
          } catch (error) {
            console.error('Error generating transfer message:', error);
            // Fallback para mensagem estática em caso de erro
            const fallbackMessage = `Olá! Sou ${newLawyer.name.split(' ')[1]}, especialista em ${newLawyer.subSpecialty}. Vi que você precisa de ajuda. Pode me dar mais detalhes?`;
            setMessages(prev => [
              ...prev,
              {
                role: 'assistant',
                content: fallbackMessage,
                timestamp: new Date(),
                lawyerId: newLawyer.id,
              },
            ]);
          }
        }
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('Request aborted');
        return;
      }
      console.error('Error sending message:', error);
      toast({
        title: 'Erro ao enviar mensagem',
        description: 'Não foi possível conectar com o advogado. Tente novamente.',
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
    currentLawyer,
    allLawyers: lawyers,
    isInQueue,
    queuePosition,
    hasJoinedQueue,
    joinQueue,
    peopleAhead,
  };
};

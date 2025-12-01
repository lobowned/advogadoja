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

export const useLawyerChat = () => {
  const [messages, setMessages] = useState<(Message | TransferMessage)[]>([
    {
      role: 'assistant',
      content: 'Olá! Sou o Dr. Carlos Silva. Em que posso ajudá-lo hoje?',
      timestamp: new Date(),
      lawyerId: 'carlos-silva',
    },
  ]);
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
          
          // Save contact to database
          const isPhone = /^\d+$/.test(trimmedContent.replace(/\D/g, ''));
          await supabase
            .from('leads')
            .update({ 
              [isPhone ? 'phone' : 'email']: trimmedContent,
              status: 'contacted'
            })
            .eq('session_id', sessionId);
          
          setIsCollectingLead(false);
          setLeadStep('none');
          setLeadQuestion('');
          
          // Add confirmation message
          const confirmMessage: Message = {
            role: 'assistant',
            content: 'Perfeito! Já salvei suas informações. Como posso continuar ajudando você?',
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
      // Simular tempo de leitura e pensamento do advogado (1.5-3 segundos)
      const thinkingDelay = 1500 + Math.random() * 1500;
      await new Promise(resolve => setTimeout(resolve, thinkingDelay));
      
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

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let textBuffer = '';
      let streamDone = false;
      let assistantContent = '';
      let transferData: { newLawyerId: string } | null = null;

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
              // Implementar digitação humana com velocidade variável
              for (let i = 0; i < content.length; i++) {
                const char = content[i];
                assistantContent += char;
                
                setMessages(prev => {
                  const last = prev[prev.length - 1];
                  if (last?.role === 'assistant' && !('isTransfer' in last)) {
                    return prev.map((m, i) =>
                      i === prev.length - 1
                        ? { ...m, content: assistantContent }
                        : m
                    );
                  }
                  return [
                    ...prev,
                    {
                      role: 'assistant',
                      content: assistantContent,
                      timestamp: new Date(),
                      lawyerId: currentLawyer.id,
                    },
                  ];
                });

                // Pausas variáveis para parecer digitação humana
                let delay = 25 + Math.random() * 35; // 25-60ms por caractere
                
                // Pausas maiores após pontuação
                if (char === '.' || char === '!' || char === '?') {
                  delay = 400 + Math.random() * 300; // 400-700ms
                } else if (char === ',' || char === ';') {
                  delay = 100 + Math.random() * 100; // 100-200ms
                } else if (char === '\n') {
                  delay = 200 + Math.random() * 200; // 200-400ms
                }
                
                await new Promise(resolve => setTimeout(resolve, delay));
              }
            }
          } catch {
            textBuffer = line + '\n' + textBuffer;
            break;
          }
        }
      }

      // Processar transferência se detectada
      if (transferData && transferData.newLawyerId) {
        const newLawyer = lawyers.find(l => l.id === transferData.newLawyerId);
        if (newLawyer && newLawyer.id !== currentLawyer.id) {
          setIsTransferring(true);
          setIsTyping(false);

          // Adicionar mensagem de transferência
          await new Promise(resolve => setTimeout(resolve, 1500));
          
          setMessages(prev => [
            ...prev,
            {
              role: 'system',
              content: `Transferindo para ${newLawyer.name}, especialista em ${newLawyer.subSpecialty}...`,
              timestamp: new Date(),
              isTransfer: true,
              fromLawyer: currentLawyer,
              toLawyer: newLawyer,
            } as TransferMessage,
          ]);

          await new Promise(resolve => setTimeout(resolve, 2000));
          
          setCurrentLawyer(newLawyer);
          setIsTransferring(false);
          setIsTyping(true);

          // Mensagem de boas-vindas do novo advogado
          await new Promise(resolve => setTimeout(resolve, 1000));
          
          const welcomeMessage = `Olá! Sou ${newLawyer.name.split(' ')[0]} ${newLawyer.name.split(' ')[newLawyer.name.split(' ').length - 1]}, especialista em ${newLawyer.subSpecialty}. ${currentLawyer.name.split(' ')[1]} me passou seu caso. Como posso ajudá-lo?`;
          
          setMessages(prev => [
            ...prev,
            {
              role: 'assistant',
              content: welcomeMessage,
              timestamp: new Date(),
              lawyerId: newLawyer.id,
            },
          ]);
        }
      }

      // Final flush - always update last assistant message if it exists
      if (textBuffer.trim()) {
        for (let raw of textBuffer.split('\n')) {
          if (!raw) continue;
          if (raw.endsWith('\r')) raw = raw.slice(0, -1);
          if (raw.startsWith(':') || raw.trim() === '') continue;
          if (!raw.startsWith('data: ')) continue;
          const jsonStr = raw.slice(6).trim();
          if (jsonStr === '[DONE]') continue;
          try {
            const parsed = JSON.parse(jsonStr);
            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
              setMessages(prev => {
                const last = prev[prev.length - 1];
                // Always update last assistant message if it exists and is not a transfer
                if (last?.role === 'assistant' && !('isTransfer' in last)) {
                  return prev.map((m, i) =>
                    i === prev.length - 1
                      ? { ...m, content: assistantContent }
                      : m
                  );
                }
                // Only create new message if last message is not assistant
                return [
                  ...prev,
                  {
                    role: 'assistant',
                    content: assistantContent,
                    timestamp: new Date(),
                    lawyerId: currentLawyer.id,
                  },
                ];
              });
            }
          } catch {}
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
  };
};

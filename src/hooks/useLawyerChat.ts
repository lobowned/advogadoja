import { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Lawyer, lawyers } from '@/data/lawyers';

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
  const [isTransferring, setIsTransferring] = useState(false);
  const { toast } = useToast();
  const abortControllerRef = useRef<AbortController | null>(null);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: content.trim(),
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setIsTyping(true);

    abortControllerRef.current = new AbortController();

    try {
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
        }),
        signal: abortControllerRef.current.signal,
      });

      if (!response.ok || !response.body) {
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
            
            // Verificar se há transferência
            if (parsed.transfer && parsed.newLawyerId) {
              transferData = { newLawyerId: parsed.newLawyerId };
              continue;
            }

            const content = parsed.choices?.[0]?.delta?.content as string | undefined;
            if (content) {
              assistantContent += content;
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

      // Final flush
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
                if (last?.role === 'assistant') {
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
    }
  };

  const stopGeneration = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setIsLoading(false);
    setIsTyping(false);
  };

  return {
    messages,
    isLoading,
    isTyping,
    isTransferring,
    sendMessage,
    stopGeneration,
    currentLawyer,
    allLawyers: lawyers,
  };
};

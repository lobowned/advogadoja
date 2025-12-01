import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLawyerChat } from '@/hooks/useLawyerChat';
import { Send, Loader2 } from 'lucide-react';

const LawyerChatSection = () => {
  const [inputValue, setInputValue] = useState('');
  const { messages, isLoading, isTyping, sendMessage } = useLawyerChat();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [onlineLawyers] = useState(Math.floor(Math.random() * 3) + 4); // 4-6 advogados

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fale com um Advogado Agora
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Advogados especializados prontos para atender você
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden">
          {/* Header com advogados online */}
          <div className="bg-card border-b border-border p-4">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="relative">
                      <Avatar className="h-10 w-10 border-2 border-background">
                        <AvatarImage src={`https://i.pravatar.cc/150?img=${i + 10}`} />
                        <AvatarFallback>A{i}</AvatarFallback>
                      </Avatar>
                      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {onlineLawyers} advogados online agora
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Tempo médio de resposta: 2 minutos
                  </p>
                </div>
              </div>
              <Badge variant="secondary" className="gap-1">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Online
              </Badge>
            </div>
          </div>

          {/* Chat area */}
          <ScrollArea className="h-[500px] p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-3 ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  {message.role === 'assistant' && (
                    <Avatar className="h-10 w-10 flex-shrink-0">
                      <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                      <AvatarFallback>CS</AvatarFallback>
                    </Avatar>
                  )}
                  
                  <div className={`flex flex-col ${message.role === 'user' ? 'items-end' : 'items-start'} max-w-[80%]`}>
                    {message.role === 'assistant' && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-semibold text-foreground">
                          Dr. Carlos Silva
                        </span>
                        <span className="text-xs text-muted-foreground">
                          Advogado
                        </span>
                      </div>
                    )}
                    
                    <div
                      className={`rounded-lg p-3 ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    
                    <span className="text-xs text-muted-foreground mt-1">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>

                  {message.role === 'user' && (
                    <Avatar className="h-10 w-10 flex-shrink-0">
                      <AvatarFallback>Você</AvatarFallback>
                    </Avatar>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <Avatar className="h-10 w-10 flex-shrink-0">
                    <AvatarImage src="https://i.pravatar.cc/150?img=12" />
                    <AvatarFallback>CS</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-semibold text-foreground">
                        Dr. Carlos Silva
                      </span>
                    </div>
                    <div className="rounded-lg p-3 bg-muted">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground mt-1">
                      digitando...
                    </span>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input area */}
          <div className="border-t border-border p-4 bg-card">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                disabled={isLoading}
                className="flex-1"
              />
              <Button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                size="icon"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Suas informações são confidenciais e protegidas
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LawyerChatSection;

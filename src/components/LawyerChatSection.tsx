import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLawyerChat } from '@/hooks/useLawyerChat';
import { Send, Loader2, Smile, Mic, ArrowLeft, Video, MoreVertical, Check } from 'lucide-react';

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
            Atendimento Jurídico Imediato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Converse agora com Dr. Carlos Silva — sem compromisso, 100% confidencial
          </p>
        </div>

        <Card className="max-w-4xl mx-auto overflow-hidden shadow-xl">
          {/* WhatsApp-style Header */}
          <div className="bg-whatsapp-header p-3 flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-10 w-10 text-white hover:bg-white/10"
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            
            <Avatar className="h-10 w-10 flex-shrink-0">
              <AvatarImage src="https://i.pravatar.cc/150?img=12" />
              <AvatarFallback>CS</AvatarFallback>
            </Avatar>
            
            <div className="flex-1 min-w-0">
              <p className="text-white font-medium text-sm">Dr. Carlos Silva</p>
              <p className="text-white/80 text-xs">online</p>
            </div>
            
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 text-white hover:bg-white/10"
              >
                <Video className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-10 w-10 text-white hover:bg-white/10"
              >
                <MoreVertical className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* WhatsApp-style Chat area */}
          <ScrollArea className="h-[500px] bg-whatsapp-bg p-4" ref={scrollRef}>
            <div className="space-y-2">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === 'user' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div className={`relative max-w-[75%] ${message.role === 'user' ? 'ml-auto' : 'mr-auto'}`}>
                    {/* WhatsApp message bubble */}
                    <div
                      className={`rounded-lg px-3 py-2 shadow-sm ${
                        message.role === 'user'
                          ? 'bg-whatsapp-bubble-sent'
                          : 'bg-whatsapp-bubble-received'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-wrap text-gray-800">{message.content}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] text-gray-500">
                          {formatTime(message.timestamp)}
                        </span>
                        {message.role === 'user' && (
                          <div className="flex">
                            <Check className="h-3 w-3 text-whatsapp-check" />
                            <Check className="h-3 w-3 text-whatsapp-check -ml-2" />
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* WhatsApp tail */}
                    <div
                      className={`absolute top-0 w-0 h-0 ${
                        message.role === 'user'
                          ? 'right-0 -mr-2 border-l-[10px] border-l-whatsapp-bubble-sent border-t-[10px] border-t-transparent'
                          : 'left-0 -ml-2 border-r-[10px] border-r-whatsapp-bubble-received border-t-[10px] border-t-transparent'
                      }`}
                    />
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="relative max-w-[75%]">
                    <div className="rounded-lg px-3 py-2 bg-whatsapp-bubble-received shadow-sm">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                    <div className="absolute top-0 left-0 -ml-2 w-0 h-0 border-r-[10px] border-r-whatsapp-bubble-received border-t-[10px] border-t-transparent" />
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* WhatsApp-style Input area */}
          <div className="border-t border-border p-3 bg-gray-50">
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                className="h-10 w-10 text-gray-500 hover:bg-transparent"
              >
                <Smile className="h-6 w-6" />
              </Button>
              
              <div className="flex-1 relative">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Descreva sua situação jurídica..."
                  disabled={isLoading}
                  className="rounded-full bg-white border-none shadow-sm pr-10"
                />
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute right-0 top-0 h-10 w-10 text-gray-500 hover:bg-transparent"
                >
                  <Mic className="h-5 w-5" />
                </Button>
              </div>
              
              <Button
                onClick={handleSend}
                disabled={isLoading || !inputValue.trim()}
                size="icon"
                className="h-11 w-11 rounded-full bg-whatsapp-send-btn hover:bg-whatsapp-send-btn/90 shadow-md"
              >
                {isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin text-white" />
                ) : (
                  <Send className="h-5 w-5 text-white" />
                )}
              </Button>
            </div>
            <p className="text-[10px] text-gray-500 mt-2 text-center">
              🔒 Conversa protegida por sigilo profissional (Art. 34, VII do Estatuto da OAB)
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LawyerChatSection;

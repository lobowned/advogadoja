import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Video, MoreVertical, Smile, Mic, Check, Shield, RefreshCw } from "lucide-react";
import { useLawyerChat } from "@/hooks/useLawyerChat";
import { useEffect, useRef, useState } from "react";

const LawyerChatSection = () => {
  const { messages, isLoading, isTyping, isTransferring, sendMessage, currentLawyer, allLawyers } = useLawyerChat();
  const [inputValue, setInputValue] = useState("");
  const [showResponseTime, setShowResponseTime] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (messages.length > 2 && !showResponseTime) {
      setShowResponseTime(true);
    }
  }, [messages, showResponseTime]);

  const handleSend = () => {
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Atendimento Jurídico Imediato
            </h2>
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="flex items-center gap-1.5 bg-whatsapp-send-btn/10 px-3 py-1.5 rounded-full">
                <div className="w-2 h-2 bg-whatsapp-send-btn rounded-full animate-pulse-dot" />
                <span className="text-xs font-medium text-whatsapp-send-btn">
                  30 advogados online agora
                </span>
              </div>
              {showResponseTime && (
                <div className="flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-full animate-fade-in">
                  <Check className="w-3 h-3 text-primary" />
                  <span className="text-xs font-medium text-primary">Resposta em menos de 1min</span>
                </div>
              )}
            </div>
            
            {/* Carrossel de Advogados */}
            <div className="flex items-center justify-center gap-1 mb-2 overflow-hidden">
              <div className="flex -space-x-2 animate-fade-in">
                {allLawyers.slice(0, 10).map((lawyer) => (
                  <Avatar key={lawyer.id} className="h-8 w-8 border-2 border-background">
                    <AvatarImage src={lawyer.photo} alt={lawyer.name} />
                    <AvatarFallback className="text-[10px]">
                      {lawyer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                ))}
                <div className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                  <span className="text-[10px] font-semibold text-muted-foreground">+20</span>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Mensagens criptografadas de ponta a ponta
            </p>
          </div>

          {/* Chat Container */}
          <div className="bg-card rounded-lg shadow-card overflow-hidden border border-border/50">
            {/* WhatsApp Style Header */}
            <div className="bg-whatsapp-header text-white px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="p-1 hover:bg-white/10 rounded-full transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <Avatar className="h-10 w-10 border-2 border-white/20">
                  <AvatarImage src={currentLawyer.photo} alt={currentLawyer.name} />
                  <AvatarFallback className="bg-white/20 text-white">
                    {currentLawyer.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-sm">{currentLawyer.name}</h3>
                    <span title={`${currentLawyer.oab} - ${currentLawyer.subSpecialty}`}>
                      <Shield className="w-3.5 h-3.5 text-white/80" />
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-whatsapp-send-btn rounded-full animate-pulse-dot" />
                    <p className="text-xs text-white/90">{currentLawyer.subSpecialty}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="bg-whatsapp-bg p-4 h-[400px] sm:h-[600px] overflow-y-auto space-y-3">
              {messages.map((message, index) => {
                // Mensagem de transferência
                if ('isTransfer' in message && message.isTransfer) {
                  return (
                    <div key={index} className="flex justify-center py-2">
                      <div className="bg-yellow-100 border border-yellow-300 rounded-lg px-4 py-3 max-w-[90%] flex items-center gap-3 animate-fade-in shadow-md">
                        <RefreshCw className="h-5 w-5 text-yellow-600 animate-spin" />
                        <div className="flex-1">
                          <p className="text-sm font-medium text-yellow-800">{message.content}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Avatar className="h-6 w-6 border border-yellow-300">
                              <AvatarImage src={message.fromLawyer.photo} alt={message.fromLawyer.name} />
                            </Avatar>
                            <span className="text-xs text-yellow-600">→</span>
                            <Avatar className="h-6 w-6 border border-yellow-300">
                              <AvatarImage src={message.toLawyer.photo} alt={message.toLawyer.name} />
                            </Avatar>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                // Mensagens normais
                const messageLawyer = 'lawyerId' in message 
                  ? allLawyers.find(l => l.id === message.lawyerId) 
                  : currentLawyer;

                return (
                  <div
                    key={index}
                    className={`flex ${message.role === "user" ? "justify-end" : "justify-start"} animate-message-slide`}
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    {message.role === "assistant" && messageLawyer && (
                      <Avatar className="h-8 w-8 mr-2 flex-shrink-0">
                        <AvatarImage src={messageLawyer.photo} alt={messageLawyer.name} />
                        <AvatarFallback className="bg-primary/10 text-primary text-xs">
                          {messageLawyer.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    )}

                    <div
                      className={`rounded-lg px-4 py-2 max-w-[85%] sm:max-w-[70%] shadow-sm relative ${
                        message.role === "user"
                          ? "bg-whatsapp-bubble-sent"
                          : "bg-whatsapp-bubble-received"
                      } ${message.role === "user" ? "rounded-tr-none" : "rounded-tl-none"}`}
                    >
                      {/* Message tail */}
                      <div
                        className={`absolute top-0 w-0 h-0 ${
                          message.role === "user"
                            ? "right-0 -mr-2 border-t-[8px] border-t-whatsapp-bubble-sent border-l-[8px] border-l-transparent"
                            : "left-0 -ml-2 border-t-[8px] border-t-whatsapp-bubble-received border-r-[8px] border-r-transparent"
                        }`}
                      />
                      
                      <p className="text-sm whitespace-pre-wrap text-gray-800">{message.content}</p>
                      <div className="flex items-center justify-end gap-1 mt-1">
                        <span className="text-[10px] text-gray-500">
                          {formatTime(message.timestamp)}
                        </span>
                        {message.role === "user" && (
                          <div className="flex -space-x-1">
                            <Check className="h-3 w-3 text-whatsapp-check" />
                            <Check className="h-3 w-3 text-whatsapp-check" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {(isTyping || isTransferring) && (
                <div className="flex justify-start animate-message-slide">
                  <Avatar className="h-8 w-8 mr-2 flex-shrink-0">
                    <AvatarImage src={currentLawyer.photo} alt={currentLawyer.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {currentLawyer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-whatsapp-bubble-received text-foreground rounded-lg rounded-tl-none px-4 py-3 max-w-[85%] sm:max-w-[70%] shadow-sm relative">
                    <div className="absolute -left-2 top-0 w-0 h-0 border-t-[8px] border-t-whatsapp-bubble-received border-r-[8px] border-r-transparent" />
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <div className="w-2.5 h-2.5 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "200ms" }} />
                      <div className="w-2.5 h-2.5 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "400ms" }} />
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="bg-whatsapp-input-bg p-3 sm:p-4 border-t border-border/30 sticky bottom-0">
              <div className="flex items-center gap-2 sm:gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 sm:h-10 sm:w-10 text-muted-foreground hover:text-foreground flex-shrink-0 transition-all hover:scale-110"
                >
                  <Smile className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
                
                <div className="flex-1 flex items-center gap-2 bg-background rounded-full px-4 py-2 border border-border/50 shadow-sm hover:shadow-md transition-shadow">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Digite uma mensagem"
                    disabled={isLoading}
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-sm"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-foreground flex-shrink-0 transition-all hover:scale-110"
                  >
                    <Mic className="h-5 w-5" />
                  </Button>
                </div>

                <Button
                  onClick={handleSend}
                  disabled={isLoading || !inputValue.trim()}
                  size="icon"
                  className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-whatsapp-send-btn hover:bg-whatsapp-send-btn/90 text-white flex-shrink-0 shadow-lg transition-all hover:scale-110 active:scale-95 disabled:scale-100"
                >
                  <Send className="h-5 w-5" />
                </Button>
              </div>
              <p className="text-[10px] text-muted-foreground mt-2 text-center">
                🔒 Conversa protegida por sigilo profissional (Art. 34, VII do Estatuto da OAB)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerChatSection;
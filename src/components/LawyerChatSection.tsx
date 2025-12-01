import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Video, MoreVertical, Smile, Mic, Check, Shield, RefreshCw, MessageSquare } from "lucide-react";
import { useLawyerChat } from "@/hooks/useLawyerChat";
import { useLawyerPresence } from "@/contexts/LawyerPresenceContext";
import { useEffect, useRef, useState } from "react";

const LawyerChatSection = () => {
  const { messages, isLoading, isTyping, isThinking, isTransferring, sendMessage, currentLawyer, allLawyers, isCollectingLead, leadQuestion, isInQueue, queuePosition, hasJoinedQueue, joinQueue, peopleAhead } = useLawyerChat();
  const { onlineLawyers, notification, onlineCount } = useLawyerPresence();
  const [inputValue, setInputValue] = useState("");
  const [showResponseTime, setShowResponseTime] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll apenas dentro do container do chat, sem afetar a página
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping, isThinking]);

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
            <div className="flex flex-col items-center gap-2 mb-3">
              <div className="flex items-center justify-center gap-2">
                <div className="flex items-center gap-1.5 bg-whatsapp-send-btn/10 px-3 py-1.5 rounded-full transition-all duration-300">
                  <div className="w-2 h-2 bg-whatsapp-send-btn rounded-full animate-pulse-dot" />
                  <span className="text-xs font-medium text-whatsapp-send-btn">
                    {onlineCount} advogados online
                  </span>
                </div>
                {showResponseTime && (
                  <div className="flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-full animate-fade-in">
                    <Check className="w-3 h-3 text-primary" />
                    <span className="text-xs font-medium text-primary">Resposta em menos de 1min</span>
                  </div>
                )}
              </div>
              
              {/* Notificação de entrada/saída */}
              {notification && (
                <div className="animate-fade-in text-xs text-muted-foreground px-3 py-1 bg-muted/50 rounded-full">
                  {notification.message}
                </div>
              )}
            </div>
            
            {/* Carrossel de Advogados Online */}
            <div className="flex items-center justify-center gap-1 mb-2 overflow-hidden">
              <div className="flex -space-x-2 animate-fade-in">
                {onlineLawyers.slice(0, 10).map((lawyer) => (
                  <Avatar key={lawyer.id} className="h-8 w-8 border-2 border-background transition-all duration-300">
                    <AvatarImage src={lawyer.photo} alt={lawyer.name} />
                    <AvatarFallback className="text-[10px]">
                      {lawyer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                ))}
                {onlineCount > 10 && (
                  <div className="h-8 w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-muted-foreground">+{onlineCount - 10}</span>
                  </div>
                )}
              </div>
            </div>
            
            <p className="text-xs text-muted-foreground">
              Mensagens criptografadas de ponta a ponta
            </p>
          </div>

          {/* Chat Container */}
          <div className="bg-card rounded-lg shadow-card overflow-hidden border border-border/50">
            {/* WhatsApp Style Header */}
            <div className="bg-whatsapp-header text-white px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <Avatar className="h-9 w-9 sm:h-10 sm:w-10 border-2 border-white/20 flex-shrink-0">
                  <AvatarImage src={currentLawyer.photo} alt={currentLawyer.name} />
                  <AvatarFallback className="bg-white/20 text-white text-xs">
                    {currentLawyer.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <h3 className="font-semibold text-sm truncate">{currentLawyer.name}</h3>
                    <span title={`${currentLawyer.oab} - ${currentLawyer.subSpecialty}`}>
                      <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white/80 flex-shrink-0" />
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-whatsapp-send-btn rounded-full animate-pulse-dot" />
                    <p className="text-xs text-white/90 truncate">{currentLawyer.subSpecialty}</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:flex gap-2">
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div 
              ref={chatContainerRef}
              className={`bg-whatsapp-bg p-3 sm:p-4 h-[450px] sm:h-[500px] space-y-3 ${
                hasJoinedQueue ? 'overflow-y-auto' : 'overflow-hidden'
              }`}
            >
              {!hasJoinedQueue ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center max-w-md px-4 animate-fade-in">
                    <div className="mb-4">
                      <div className="text-4xl mb-3">🏛️</div>
                      <h3 className="text-xl font-bold mb-2">Assistência Jurídica Online</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {onlineCount} advogados disponíveis para atender você agora mesmo
                      </p>
                    </div>
                    
                    <div className="space-y-2 mb-5 text-left">
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-whatsapp-send-btn flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Atendimento gratuito inicial</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Shield className="w-4 h-4 text-whatsapp-send-btn flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Sigilo profissional garantido</p>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-whatsapp-send-btn flex-shrink-0 mt-0.5" />
                        <p className="text-sm">Especialistas em diversas áreas</p>
                      </div>
                    </div>
                    
                    <Button
                      onClick={joinQueue}
                      className="w-full bg-whatsapp-send-btn hover:bg-whatsapp-send-btn/90 text-white font-medium py-4 text-base rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
                    >
                      <MessageSquare className="w-5 h-5" />
                      Iniciar Atendimento
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                {messages.map((message, index) => {
                // Mensagem de fila
                if ('isQueue' in message && message.isQueue) {
                  const isInitial = message.queuePosition === 2;
                  const isUpdating = message.queuePosition === 1;
                  const isNext = message.queuePosition === 0;
                  
                  return (
                    <div key={index} className="flex justify-center py-2">
                      <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl px-6 py-5 max-w-[90%] flex flex-col items-center gap-4 animate-fade-in shadow-lg">
                        <div className="text-center">
                          <p className="text-sm font-semibold text-primary mb-2">
                            {message.content}
                          </p>
                          
                          {/* Contador de pessoas com animação */}
                          {peopleAhead > 0 && (
                            <div className="flex items-center justify-center gap-3 my-3">
                              <div className="flex items-center gap-1 animate-scale-in">
                                {[...Array(peopleAhead)].map((_, i) => (
                                  <div 
                                    key={i} 
                                    className="w-10 h-10 rounded-full bg-muted border-2 border-primary/30 flex items-center justify-center animate-fade-in"
                                    style={{ animationDelay: `${i * 0.1}s` }}
                                  >
                                    <span className="text-xl">👤</span>
                                  </div>
                                ))}
                              </div>
                              <div className="text-2xl font-bold text-primary animate-pulse">
                                →
                              </div>
                              <div className="w-12 h-12 rounded-full bg-whatsapp-send-btn/20 border-3 border-whatsapp-send-btn flex items-center justify-center">
                                <span className="text-2xl">👤</span>
                              </div>
                            </div>
                          )}
                          
                          {peopleAhead > 0 && (
                            <p className="text-xs text-muted-foreground font-medium">
                              {peopleAhead === 2 ? '2 pessoas' : '1 pessoa'} na sua frente
                            </p>
                          )}
                          
                          {peopleAhead === 0 && isNext && (
                            <div className="text-4xl my-2 animate-bounce">
                              🎉
                            </div>
                          )}
                        </div>
                        
                        {/* Barra de progresso */}
                        <div className="w-full">
                          <div className="w-full bg-muted rounded-full h-2.5 overflow-hidden shadow-inner">
                            <div 
                              className="bg-gradient-to-r from-primary to-whatsapp-send-btn h-full transition-all duration-1000 ease-out rounded-full shadow-sm"
                              style={{ 
                                width: message.queuePosition === 2 ? '33%' : message.queuePosition === 1 ? '66%' : '100%' 
                              }}
                            />
                          </div>
                          <p className="text-[10px] text-muted-foreground text-center mt-1.5 font-medium">
                            {message.queuePosition === 2 && 'Estimativa: ~1 minuto'}
                            {message.queuePosition === 1 && 'Quase lá! ~30 segundos'}
                            {message.queuePosition === 0 && 'Conectando...'}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }

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
                      className={`rounded-lg px-3 sm:px-4 py-2 max-w-[85%] sm:max-w-[70%] shadow-sm relative ${
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

              {(isThinking || isTyping || isTransferring) && (
                <div className="flex justify-start animate-message-slide">
                  <Avatar className="h-8 w-8 mr-2 flex-shrink-0">
                    <AvatarImage src={currentLawyer.photo} alt={currentLawyer.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {currentLawyer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-whatsapp-bubble-received text-foreground rounded-lg rounded-tl-none px-4 py-3 max-w-[85%] sm:max-w-[70%] shadow-sm relative">
                    <div className="absolute -left-2 top-0 w-0 h-0 border-t-[8px] border-t-whatsapp-bubble-received border-r-[8px] border-r-transparent" />
                    {isThinking ? (
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground italic">Lendo sua mensagem</span>
                        <div className="flex gap-1">
                          <div className="w-1 h-1 bg-muted-foreground/60 rounded-full animate-pulse" style={{ animationDelay: "0ms" }} />
                          <div className="w-1 h-1 bg-muted-foreground/60 rounded-full animate-pulse" style={{ animationDelay: "200ms" }} />
                          <div className="w-1 h-1 bg-muted-foreground/60 rounded-full animate-pulse" style={{ animationDelay: "400ms" }} />
                        </div>
                      </div>
                    ) : (
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                        <div className="w-2.5 h-2.5 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "200ms" }} />
                        <div className="w-2.5 h-2.5 bg-muted-foreground/60 rounded-full animate-bounce" style={{ animationDelay: "400ms" }} />
                      </div>
                    )}
                  </div>
                </div>
              )}
              </>
              )}
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
                    placeholder={
                      isInQueue
                        ? "Aguarde na fila..."
                        : isCollectingLead && leadQuestion
                        ? leadQuestion
                        : "Digite uma mensagem"
                    }
                    disabled={isLoading || isInQueue}
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
                  disabled={isLoading || !inputValue.trim() || isInQueue}
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
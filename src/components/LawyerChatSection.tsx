import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Video, MoreVertical, Smile, Mic, Check, Shield, RefreshCw, MessageSquare } from "lucide-react";
import { useLawyerChat } from "@/hooks/useLawyerChat";
import { useLawyerPresence } from "@/contexts/LawyerPresenceContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useRef, useState } from "react";

const LawyerChatSection = () => {
  const isMobile = useIsMobile();
  const { messages, isLoading, isTyping, isThinking, isTransferring, sendMessage, currentLawyer, allLawyers, isCollectingLead, leadQuestion, isInQueue, queuePosition, hasJoinedQueue, joinQueue, peopleAhead, showRatingButton, submitRating } = useLawyerChat();
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
      
      // Feedback visual de mensagem enviada
      const messageLength = inputValue.trim().length;
      if (messageLength > 10) {
        // Só mostra toast para mensagens mais longas
        setTimeout(() => {
          // Toast sutil que desaparece rápido
          console.log('✅ Mensagem enviada');
        }, 100);
      }
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
    <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl">
          <div className="mb-4 sm:mb-6 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3">
              Atendimento Jurídico Imediato
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-3">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 bg-whatsapp-send-btn/10 px-3 py-1.5 rounded-full transition-all duration-300">
                  <div className="w-2 h-2 bg-whatsapp-send-btn rounded-full animate-pulse-dot" />
                  <span className="text-xs sm:text-sm font-medium text-whatsapp-send-btn">
                    {onlineCount} advogados online
                  </span>
                </div>
                {showResponseTime && (
                  <div className="flex items-center gap-1.5 bg-primary/10 px-3 py-1.5 rounded-full animate-fade-in">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-primary" />
                    <span className="text-xs sm:text-sm font-medium text-primary">Resposta em ~1min</span>
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
                {onlineLawyers.slice(0, isMobile ? 5 : 10).map((lawyer) => (
                  <Avatar key={lawyer.id} className="h-6 w-6 sm:h-8 sm:w-8 border-2 border-background transition-all duration-300">
                    <AvatarImage src={lawyer.photo} alt={lawyer.name} />
                    <AvatarFallback className="text-[10px]">
                      {lawyer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                ))}
                {onlineCount > (isMobile ? 5 : 10) && (
                  <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full bg-muted border-2 border-background flex items-center justify-center">
                    <span className="text-[10px] font-semibold text-muted-foreground">+{onlineCount - (isMobile ? 5 : 10)}</span>
                  </div>
                )}
              </div>
            </div>
            
            <p className="text-[10px] sm:text-xs text-muted-foreground">
              Mensagens criptografadas de ponta a ponta
            </p>
          </div>

          {/* Chat Container */}
          <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border/30">
            {/* WhatsApp Style Header */}
            <div className="bg-gradient-to-r from-whatsapp-header to-whatsapp-header/90 text-white px-2.5 sm:px-4 py-2 sm:py-3 flex items-center justify-between border-b border-white/10">
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
              className={`bg-whatsapp-bg p-1.5 sm:p-2 md:p-3 h-[520px] sm:h-[500px] md:h-[580px] space-y-2 ${
                hasJoinedQueue ? 'overflow-y-auto' : 'overflow-hidden'
              }`}
            >
              {!hasJoinedQueue ? (
                <div className="flex items-center justify-center h-full">
                <div className="text-center max-w-md px-3 animate-fade-in">
                  <div className="mb-3">
                    <div className="text-3xl sm:text-4xl mb-2">🏛️</div>
                    <h3 className="text-xl font-bold mb-2">Assistência Jurídica Online</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {onlineCount} advogados disponíveis para atender você agora mesmo
                    </p>
                  </div>
                  
                  <div className="space-y-1.5 mb-4 text-left">
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
                      className="w-full bg-whatsapp-send-btn hover:bg-whatsapp-send-btn/90 text-white font-medium py-4 sm:py-5 text-sm sm:text-base rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 min-h-[48px]"
                    >
                      <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
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
                      className={`rounded-lg px-2.5 sm:px-3 py-1.5 max-w-[85%] sm:max-w-[70%] shadow-sm relative ${
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
                          <div className="flex -space-x-1" title="Mensagem entregue">
                            <Check className="h-3 w-3 text-whatsapp-check" />
                            <Check className="h-3 w-3 text-whatsapp-check" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Animação dedicada de transferência */}
              {isTransferring && !isThinking && !isTyping && (
                <div className="flex justify-center py-4">
                  <div className="bg-gradient-to-r from-primary/20 to-yellow-500/20 border border-primary/30 rounded-xl px-6 py-4 flex items-center gap-4 animate-pulse shadow-lg">
                    <Avatar className="h-10 w-10 border-2 border-primary/20">
                      <AvatarImage src={currentLawyer.photo} />
                      <AvatarFallback className="bg-primary/10 text-primary text-xs">
                        {currentLawyer.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <RefreshCw className="h-6 w-6 text-primary animate-spin" />
                    <div className="text-sm font-medium text-primary">Conectando com especialista...</div>
                  </div>
                </div>
              )}

              {/* Botão de Avaliação */}
              {showRatingButton && (
                <div className="flex justify-center py-4">
                  <div className="bg-gradient-to-r from-yellow-100 to-amber-100 border border-yellow-300 rounded-xl px-6 py-4 max-w-[90%] animate-fade-in shadow-lg">
                    <p className="text-sm font-medium text-amber-800 mb-3 text-center">
                      Como foi seu atendimento?
                    </p>
                    <div className="flex justify-center gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          onClick={() => submitRating(star)}
                          className="text-3xl hover:scale-125 transition-transform duration-200 cursor-pointer"
                          aria-label={`Avaliar com ${star} estrela${star > 1 ? 's' : ''}`}
                        >
                          ⭐
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Indicadores com status do advogado */}
              {(isThinking || isTyping) && !isTransferring && (
                <div className="flex justify-start animate-message-slide">
                  <Avatar className="h-8 w-8 mr-2 flex-shrink-0">
                    <AvatarImage src={currentLawyer.photo} alt={currentLawyer.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {currentLawyer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="text-[10px] text-muted-foreground px-2">
                      {currentLawyer.name.split(' ')[0]} {isThinking ? 'lendo...' : 'digitando...'}
                    </div>
                    <div className="bg-whatsapp-bubble-received text-foreground rounded-lg rounded-tl-none px-4 py-3 max-w-[85%] sm:max-w-[70%] shadow-sm relative">
                      <div className="absolute -left-2 top-0 w-0 h-0 border-t-[8px] border-t-whatsapp-bubble-received border-r-[8px] border-r-transparent" />
                      {isThinking ? (
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground italic">Analisando...</span>
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
                </div>
              )}
              </>
              )}
            </div>

            {/* Quick Replies - Sugestões contextuais */}
            {hasJoinedQueue && !isInQueue && !isLoading && !isCollectingLead && messages.length > 1 && messages.length < 10 && (
              <div className="bg-muted/20 border-t border-border/20 px-2 sm:px-3 py-2 flex gap-2 overflow-x-auto scrollbar-hide">
                {messages[messages.length - 1]?.role === 'assistant' && (
                  <>
                    {messages[messages.length - 1]?.content.toLowerCase().includes('urgente') && (
                      <>
                        <button
                          onClick={() => setInputValue('É urgente sim')}
                          className="text-xs bg-background border border-border px-3 py-1.5 rounded-full hover:bg-muted transition-colors whitespace-nowrap shadow-sm"
                        >
                          É urgente
                        </button>
                        <button
                          onClick={() => setInputValue('Pode ser nos próximos dias')}
                          className="text-xs bg-background border border-border px-3 py-1.5 rounded-full hover:bg-muted transition-colors whitespace-nowrap shadow-sm"
                        >
                          Próximos dias
                        </button>
                      </>
                    )}
                    {(messages[messages.length - 1]?.content.toLowerCase().includes('documento') || 
                      messages[messages.length - 1]?.content.toLowerCase().includes('prova')) && (
                      <>
                        <button
                          onClick={() => setInputValue('Tenho fotos do local')}
                          className="text-xs bg-background border border-border px-3 py-1.5 rounded-full hover:bg-muted transition-colors whitespace-nowrap shadow-sm"
                        >
                          📸 Tenho fotos
                        </button>
                        <button
                          onClick={() => setInputValue('Tenho documentos')}
                          className="text-xs bg-background border border-border px-3 py-1.5 rounded-full hover:bg-muted transition-colors whitespace-nowrap shadow-sm"
                        >
                          📄 Tenho docs
                        </button>
                        <button
                          onClick={() => setInputValue('Não tenho provas ainda')}
                          className="text-xs bg-background border border-border px-3 py-1.5 rounded-full hover:bg-muted transition-colors whitespace-nowrap shadow-sm"
                        >
                          Sem provas
                        </button>
                      </>
                    )}
                    {messages[messages.length - 1]?.content.toLowerCase().includes('pode') && (
                      <>
                        <button
                          onClick={() => setInputValue('Sim, pode')}
                          className="text-xs bg-background border border-border px-3 py-1.5 rounded-full hover:bg-muted transition-colors whitespace-nowrap shadow-sm"
                        >
                          ✅ Sim
                        </button>
                        <button
                          onClick={() => setInputValue('Não, obrigado')}
                          className="text-xs bg-background border border-border px-3 py-1.5 rounded-full hover:bg-muted transition-colors whitespace-nowrap shadow-sm"
                        >
                          ❌ Não
                        </button>
                      </>
                    )}
                  </>
                )}
              </div>
            )}

            {/* Input Area */}
            <div className="bg-whatsapp-input-bg p-2 sm:p-3 md:p-4 border-t border-border/30 sticky bottom-0">
              <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 sm:h-11 sm:w-11 text-muted-foreground hover:text-foreground flex-shrink-0 transition-all hover:scale-110 min-h-[40px] min-w-[40px]"
                >
                  <Smile className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
                
                <div className="flex-1 flex items-center gap-2 bg-background rounded-full px-3 sm:px-4 py-2 sm:py-2.5 border border-border/50 shadow-sm hover:shadow-md transition-shadow min-h-[44px]">
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
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-sm sm:text-base"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 sm:h-9 sm:w-9 text-muted-foreground hover:text-foreground flex-shrink-0 transition-all hover:scale-110"
                  >
                    <Mic className="h-4 h-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>

                <Button
                  onClick={handleSend}
                  disabled={isLoading || !inputValue.trim() || isInQueue}
                  size="icon"
                  className="h-12 w-12 sm:h-13 sm:w-13 rounded-full bg-whatsapp-send-btn hover:bg-whatsapp-send-btn/90 text-white flex-shrink-0 shadow-lg transition-all hover:scale-110 active:scale-95 disabled:scale-100 min-h-[48px] min-w-[48px]"
                >
                  <Send className="h-5 w-5 sm:h-6 sm:w-6" />
                </Button>
              </div>
              <p className="text-[10px] sm:text-xs text-muted-foreground mt-2 text-center">
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
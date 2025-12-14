import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Phone, Video, MoreVertical, Smile, Mic, Check, Shield, RefreshCw, MessageSquare, ChevronLeft, Paperclip, Lock } from "lucide-react";
import { useLawyerChat } from "@/hooks/useLawyerChat";
import { useLawyerPresence } from "@/contexts/LawyerPresenceContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useRef, useState } from "react";
import TypingIndicator from "@/components/TypingIndicator";
import { QuickRepliesInline } from "@/components/QuickReplies";
import UrgencyBadge, { UrgencyAlert } from "@/components/UrgencyBadge";

// Tipo para rastrear status do "visto" com delay
type MessageSeenStatus = {
  [key: number]: 'sent' | 'delivered' | 'read';
};

const LawyerChatSection = () => {
  const isMobile = useIsMobile();
  const { 
    messages, isLoading, isTyping, isThinking, isTransferring, sendMessage, currentLawyer, allLawyers, 
    isCollectingLead, leadQuestion, isInQueue, queuePosition, hasJoinedQueue, joinQueue, peopleAhead, 
    showRatingButton, submitRating,
    detectedProblem, urgencyLevel, contextualSuggestions, resetNudgeTimer
  } = useLawyerChat();
  const { onlineLawyers, notification, onlineCount } = useLawyerPresence();
  const [inputValue, setInputValue] = useState("");
  const [showResponseTime, setShowResponseTime] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const lastMessageRef = useRef<HTMLDivElement>(null);
  const [newMessageIds, setNewMessageIds] = useState<Set<number>>(new Set());
  const previousMessagesLength = useRef(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [messageSeenStatus, setMessageSeenStatus] = useState<MessageSeenStatus>({});

  // Marcar que animação inicial completou
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);


  // Rastrear novas mensagens para animação e status de "visto" com delay
  useEffect(() => {
    if (messages.length > previousMessagesLength.current) {
      const newIds = new Set<number>();
      for (let i = previousMessagesLength.current; i < messages.length; i++) {
        newIds.add(i);
        
        // Se for mensagem do usuário, simular delay no "visto"
        const msg = messages[i];
        if (msg.role === 'user') {
          // Iniciar como "enviado"
          setMessageSeenStatus(prev => ({ ...prev, [i]: 'sent' }));
          
          // Após 500-1000ms, marcar como "entregue" (1 check)
          setTimeout(() => {
            setMessageSeenStatus(prev => ({ ...prev, [i]: 'delivered' }));
          }, 500 + Math.random() * 500);
          
          // Após mais 800-1500ms, marcar como "lido" (2 checks azuis)
          setTimeout(() => {
            setMessageSeenStatus(prev => ({ ...prev, [i]: 'read' }));
          }, 1300 + Math.random() * 700);
        }
      }
      setNewMessageIds(newIds);
      
      // Remover flag após animação
      const timer = setTimeout(() => {
        setNewMessageIds(new Set());
      }, 500);
      
      return () => clearTimeout(timer);
    }
    previousMessagesLength.current = messages.length;
  }, [messages]);

  useEffect(() => {
    if (messages.length > 2 && !showResponseTime) {
      setShowResponseTime(true);
    }
  }, [messages, showResponseTime]);

  const handleSend = () => {
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
      setInputValue("");
      resetNudgeTimer(); // Reset nudge timer on user interaction
    }
  };

  const handleQuickReply = (suggestion: string) => {
    setInputValue(suggestion);
    resetNudgeTimer();
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

          {/* Chat Container - Phone Frame Style */}
          <div className={`bg-card rounded-3xl shadow-2xl overflow-hidden border-2 border-border/20 ${!hasAnimated ? 'animate-chat-entrance' : ''}`}>
            {/* WhatsApp Style Header - Enhanced */}
            <div 
              className="whatsapp-header-gradient text-white px-2 sm:px-3 py-2.5 sm:py-3 flex items-center justify-between"
              style={{ 
                animation: !hasAnimated ? 'header-slide 0.5s ease-out 0.2s forwards' : 'none',
                opacity: !hasAnimated ? 0 : 1 
              }}
            >
              <div className="flex items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                {/* Back Arrow */}
                <button className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                
                <Avatar className="h-9 w-9 sm:h-10 sm:w-10 border-2 border-white/30 flex-shrink-0 ring-2 ring-white/10">
                  <AvatarImage src={currentLawyer.photo} alt={currentLawyer.name} />
                  <AvatarFallback className="bg-white/20 text-white text-xs">
                    {currentLawyer.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                <div className="flex-1 min-w-0 ml-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-sm sm:text-base truncate">{currentLawyer.name}</h3>
                    <span title={`${currentLawyer.oab} - ${currentLawyer.subSpecialty}`}>
                      <Shield className="w-3.5 h-3.5 text-emerald-300 flex-shrink-0" />
                    </span>
                    {(urgencyLevel === 'alta' || urgencyLevel === 'critica') && (
                      <UrgencyBadge level={urgencyLevel as 'alta' | 'critica'} showLabel={false} />
                    )}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-header-status" />
                    <p className="text-xs text-white/80 truncate">online</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-0.5 sm:gap-1">
                <button className="p-2 sm:p-2.5 hover:bg-white/10 rounded-full transition-colors">
                  <Video className="w-5 h-5" />
                </button>
                <button className="p-2 sm:p-2.5 hover:bg-white/10 rounded-full transition-colors">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button className="p-2 sm:p-2.5 hover:bg-white/10 rounded-full transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area with Doodle Background */}
            <div 
              ref={chatContainerRef}
              className={`whatsapp-doodle-bg p-2 sm:p-3 md:p-4 h-[520px] sm:h-[500px] md:h-[580px] space-y-2.5 ${
                hasJoinedQueue ? 'overflow-y-auto' : 'overflow-hidden'
              }`}
            >
              {!hasJoinedQueue ? (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center max-w-md px-3">
                    {/* Emoji e título com stagger */}
                    <div 
                      className="mb-3"
                      style={{ 
                        animation: !hasAnimated ? 'content-reveal 0.5s ease-out 0.3s forwards' : 'none',
                        opacity: !hasAnimated ? 0 : 1 
                      }}
                    >
                      <div className="text-3xl sm:text-4xl mb-2 animate-bounce">🏛️</div>
                      <h3 className="text-xl font-bold mb-2">Assistência Jurídica Online</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {onlineCount} advogados disponíveis para atender você agora mesmo
                      </p>
                    </div>
                    
                    {/* Lista de benefícios com delay */}
                    <div 
                      className="space-y-1.5 mb-4 text-left"
                      style={{ 
                        animation: !hasAnimated ? 'content-reveal 0.5s ease-out 0.45s forwards' : 'none',
                        opacity: !hasAnimated ? 0 : 1 
                      }}
                    >
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
                    
                    {/* Botão com animação e pulse após entrada */}
                    <div
                      style={{ 
                        animation: !hasAnimated ? 'content-reveal 0.5s ease-out 0.6s forwards' : 'none',
                        opacity: !hasAnimated ? 0 : 1 
                      }}
                    >
                      <Button
                        onClick={joinQueue}
                        className={`w-full bg-whatsapp-send-btn hover:bg-whatsapp-send-btn/90 text-white font-medium py-4 sm:py-5 text-sm sm:text-base rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 min-h-[48px] ${hasAnimated ? 'animate-button-pulse' : ''}`}
                      >
                        <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                        Iniciar Atendimento
                      </Button>
                    </div>
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

                const isLastMessage = index === messages.length - 1;
                const isNewMessage = newMessageIds.has(index);
                const isUser = message.role === "user";

                return (
                  <div
                    key={index}
                    ref={isLastMessage ? lastMessageRef : null}
                    className={`flex ${isUser ? "justify-end" : "justify-start"} ${
                      isNewMessage ? 'animate-bubble-pop' : ''
                    }`}
                  >
                    {!isUser && messageLawyer && (
                      <Avatar className="h-7 w-7 sm:h-8 sm:w-8 mr-1.5 flex-shrink-0 shadow-sm">
                        <AvatarImage src={messageLawyer.photo} alt={messageLawyer.name} />
                        <AvatarFallback className="bg-primary/10 text-primary text-xs">
                          {messageLawyer.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                    )}

                    <div
                      className={`rounded-lg px-3 py-2 max-w-[82%] sm:max-w-[68%] relative whatsapp-bubble-shadow ${
                        isUser
                          ? "bg-whatsapp-bubble-sent bubble-tail-sent rounded-tr-sm"
                          : "bg-whatsapp-bubble-received bubble-tail-received rounded-tl-sm"
                      }`}
                    >
                      <p className="text-[13px] sm:text-sm whitespace-pre-wrap text-foreground leading-relaxed">{message.content}</p>
                      <div className="flex items-center justify-end gap-1 mt-0.5 -mb-0.5">
                        <span className="text-[10px] text-whatsapp-time">
                          {formatTime(message.timestamp)}
                        </span>
                        {isUser && (
                          <div className="flex -space-x-1.5 ml-0.5" title={
                            messageSeenStatus[index] === 'read' ? 'Mensagem lida' :
                            messageSeenStatus[index] === 'delivered' ? 'Mensagem entregue' :
                            'Mensagem enviada'
                          }>
                            <Check className={`h-3.5 w-3.5 transition-colors duration-300 ${
                              messageSeenStatus[index] === 'read' ? 'text-whatsapp-check' : 
                              messageSeenStatus[index] === 'delivered' ? 'text-muted-foreground' : 
                              'text-muted-foreground/50'
                            }`} />
                            {(messageSeenStatus[index] === 'delivered' || messageSeenStatus[index] === 'read') && (
                              <Check className={`h-3.5 w-3.5 transition-colors duration-300 ${
                                messageSeenStatus[index] === 'read' ? 'text-whatsapp-check' : 'text-muted-foreground'
                              }`} />
                            )}
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
                <div className="flex justify-start animate-bubble-pop">
                  <Avatar className="h-7 w-7 sm:h-8 sm:w-8 mr-1.5 flex-shrink-0 shadow-sm ring-2 ring-emerald-400/30">
                    <AvatarImage src={currentLawyer.photo} alt={currentLawyer.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-xs">
                      {currentLawyer.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-1 text-[10px] text-muted-foreground px-1">
                      <span className="font-medium text-emerald-600">
                        {currentLawyer.name.split(' ')[0]}
                      </span>
                      <span>{isThinking ? 'está lendo...' : 'está digitando...'}</span>
                    </div>
                    <div className="bg-whatsapp-bubble-received rounded-lg rounded-tl-sm px-3 py-2.5 whatsapp-bubble-shadow bubble-tail-received min-w-[65px]">
                      {isThinking ? (
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">Analisando</span>
                          <TypingIndicator variant="wave" />
                        </div>
                      ) : (
                        <TypingIndicator variant="dots" />
                      )}
                    </div>
                  </div>
                </div>
              )}
              </>
              )}
            </div>

            {/* Alerta de urgência se detectado */}
            {urgencyLevel && (urgencyLevel === 'alta' || urgencyLevel === 'critica') && hasJoinedQueue && !isInQueue && (
              <div className="px-2 sm:px-3 pt-2">
                <UrgencyAlert level={urgencyLevel as 'alta' | 'critica'} />
              </div>
            )}

            {/* Quick Replies - Sugestões contextuais inteligentes */}
            {hasJoinedQueue && !isInQueue && !isLoading && !isCollectingLead && messages.length > 1 && messages.length < 12 && (
              <div className="bg-muted/20 border-t border-border/20 px-2 sm:px-3 py-2">
                {messages[messages.length - 1]?.role === 'assistant' && contextualSuggestions.length > 0 ? (
                  <QuickRepliesInline 
                    suggestions={contextualSuggestions} 
                    onSelect={handleQuickReply}
                    disabled={isLoading}
                  />
                ) : (
                  <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                    {messages[messages.length - 1]?.role === 'assistant' && (
                      <>
                        {messages[messages.length - 1]?.content.toLowerCase().includes('urgente') && (
                          <>
                            <button
                              onClick={() => handleQuickReply('É urgente sim')}
                              className="text-xs bg-background border border-border px-3 py-1.5 rounded-full hover:bg-muted transition-colors whitespace-nowrap shadow-sm"
                            >
                              É urgente
                            </button>
                            <button
                              onClick={() => handleQuickReply('Pode ser nos próximos dias')}
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
                              onClick={() => handleQuickReply('Tenho documentos')}
                              className="text-xs bg-background border border-border px-3 py-1.5 rounded-full hover:bg-muted transition-colors whitespace-nowrap shadow-sm"
                            >
                              📄 Tenho docs
                            </button>
                            <button
                              onClick={() => handleQuickReply('Não tenho provas ainda')}
                              className="text-xs bg-background border border-border px-3 py-1.5 rounded-full hover:bg-muted transition-colors whitespace-nowrap shadow-sm"
                            >
                              Sem provas
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Input Area - WhatsApp Style */}
            <div className="whatsapp-input-area px-2 sm:px-3 py-2 sm:py-2.5 border-t border-whatsapp-divider">
              {/* Encryption Notice */}
              <div className="flex items-center justify-center gap-1.5 mb-2">
                <Lock className="h-3 w-3 text-amber-600" />
                <span className="text-[10px] text-amber-700 font-medium">
                  Mensagens protegidas com criptografia de ponta-a-ponta
                </span>
              </div>
              
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Emoji Button */}
                <button className="p-2 text-whatsapp-time hover:text-foreground transition-colors rounded-full hover:bg-muted/50">
                  <Smile className="h-5 w-5 sm:h-6 sm:w-6" />
                </button>
                
                {/* Attachment Button */}
                <button className="p-2 text-whatsapp-time hover:text-foreground transition-colors rounded-full hover:bg-muted/50">
                  <Paperclip className="h-5 w-5 sm:h-6 sm:w-6 rotate-45" />
                </button>
                
                {/* Input Field */}
                <div className="flex-1 flex items-center bg-white rounded-3xl px-4 py-2 shadow-sm min-h-[42px] sm:min-h-[46px]">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder={
                      isInQueue
                        ? "Aguarde na fila..."
                        : isCollectingLead && leadQuestion
                        ? leadQuestion
                        : "Mensagem"
                    }
                    disabled={isLoading || isInQueue}
                    className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-sm sm:text-base placeholder:text-whatsapp-time"
                  />
                </div>

                {/* Mic or Send Button */}
                {inputValue.trim() ? (
                  <Button
                    onClick={handleSend}
                    disabled={isLoading || isInQueue}
                    size="icon"
                    className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-whatsapp-send-btn hover:bg-whatsapp-send-btn/90 text-white flex-shrink-0 shadow-lg transition-all hover:scale-105 active:scale-95 animate-mic-to-send"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                ) : (
                  <button
                    className="h-11 w-11 sm:h-12 sm:w-12 rounded-full bg-whatsapp-send-btn text-white flex items-center justify-center shadow-lg transition-all hover:scale-105 active:scale-95"
                    disabled={isLoading || isInQueue}
                  >
                    <Mic className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LawyerChatSection;
import { ArrowLeft, Phone, Video, MoreVertical, Check, CheckCheck, Play, Mic, Signal, Wifi, Battery } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Message {
  type: "sent" | "received" | "audio";
  text?: string;
  duration?: string;
  time: string;
  seen?: boolean;
  reaction?: string;
}

interface Testimonial {
  id: number;
  clientName: string;
  clientInitials: string;
  area: string;
  avatarUrl?: string;
  messages: Message[];
  audioTranscript?: string;
  date: string;
  batteryLevel: number;
  statusBarTime: string;
}

const whatsappTestimonials: Testimonial[] = [
  {
    id: 1,
    clientName: "Maria Aparecida",
    clientInitials: "MA",
    avatarUrl: "https://randomuser.me/api/portraits/women/45.jpg",
    area: "Trabalhista",
    date: "HOJE",
    batteryLevel: 92,
    statusBarTime: "09:38",
    messages: [
      {
        type: "sent",
        text: "Maria, seu processo foi julgado procedente! Você vai receber R$ 47.000,00 👏",
        time: "09:32",
        seen: true
      },
      {
        type: "received",
        text: "DOUTOR! Não acredito!! Muito obrigada mesmo! Vocês mudaram minha vida! 🙏❤️",
        time: "09:35",
        reaction: "❤️"
      },
      {
        type: "received",
        text: "Vou indicar pra todo mundo da minha família!",
        time: "09:36"
      },
      {
        type: "sent",
        text: "Que alegria Maria! Conte sempre conosco 🙏",
        time: "09:38",
        seen: true
      }
    ]
  },
  {
    id: 2,
    clientName: "José Carlos",
    clientInitials: "JC",
    avatarUrl: "https://randomuser.me/api/portraits/men/52.jpg",
    area: "Previdenciário",
    date: "HOJE",
    batteryLevel: 78,
    statusBarTime: "14:24",
    messages: [
      {
        type: "sent",
        text: "José, sua aposentadoria foi aprovada! Parabéns! 🎉",
        time: "14:18",
        seen: true,
        reaction: "🎉"
      },
      {
        type: "received",
        text: "Sério doutor?! Não acredito! 😭",
        time: "14:19"
      },
      {
        type: "audio",
        duration: "0:47",
        time: "14:20"
      },
      {
        type: "received",
        text: "Muito obrigado por tudo! Vocês são demais! 🙏",
        time: "14:21",
        reaction: "🙏"
      },
      {
        type: "sent",
        text: "Que bom José! Foi uma luta, mas valeu a pena! 💪",
        time: "14:22",
        seen: true
      }
    ],
    audioTranscript: "Doutor, muito obrigado! Depois de 3 anos lutando, finalmente consegui minha aposentadoria. Vocês são demais!"
  },
  {
    id: 3,
    clientName: "Ana Paula",
    clientInitials: "AP",
    avatarUrl: "https://randomuser.me/api/portraits/women/32.jpg",
    area: "Família",
    date: "ONTEM",
    batteryLevel: 65,
    statusBarTime: "16:50",
    messages: [
      {
        type: "sent",
        text: "Ana, a guarda compartilhada foi homologada! Tudo certo ✅",
        time: "16:45",
        seen: true
      },
      {
        type: "received",
        text: "Doutora, muito obrigada por tudo! Você foi um anjo na minha vida 😭🙏",
        time: "16:48",
        reaction: "🙏"
      },
      {
        type: "received",
        text: "Agora posso ficar tranquila com meus filhos",
        time: "16:48"
      },
      {
        type: "sent",
        text: "Fico muito feliz Ana! Você merece toda paz do mundo 💙",
        time: "16:50",
        seen: true
      }
    ]
  },
  {
    id: 4,
    clientName: "Roberto Lima",
    clientInitials: "RL",
    avatarUrl: "https://randomuser.me/api/portraits/men/35.jpg",
    area: "Consumidor",
    date: "12/12/2024",
    batteryLevel: 87,
    statusBarTime: "11:30",
    messages: [
      {
        type: "sent",
        text: "Roberto, ganhamos! Indenização de R$ 15.000 pelo produto defeituoso 💪",
        time: "11:20",
        seen: true,
        reaction: "💪"
      },
      {
        type: "received",
        text: "Caramba doutor! Eu já tinha desistido de correr atrás disso! Vocês são muito bons! 👏👏",
        time: "11:25"
      },
      {
        type: "sent",
        text: "Fico feliz Roberto! Qualquer coisa estamos aqui 👊",
        time: "11:27",
        seen: true
      }
    ]
  },
  {
    id: 5,
    clientName: "Francisca Souza",
    clientInitials: "FS",
    avatarUrl: "https://randomuser.me/api/portraits/women/68.jpg",
    area: "Previdenciário",
    date: "HOJE",
    batteryLevel: 43,
    statusBarTime: "10:27",
    messages: [
      {
        type: "sent",
        text: "Dona Francisca, o BPC/LOAS foi aprovado! A senhora vai receber todo mês agora 🙌",
        time: "10:15",
        seen: true
      },
      {
        type: "received",
        text: "Ai meu Deus! É verdade doutor?! 😭",
        time: "10:18"
      },
      {
        type: "audio",
        duration: "0:32",
        time: "10:22"
      },
      {
        type: "received",
        text: "Que Deus abençoe vocês! Muito obrigada! 🙏❤️",
        time: "10:23",
        reaction: "❤️"
      },
      {
        type: "sent",
        text: "A senhora merece dona Francisca! Deus abençoe 🙏",
        time: "10:25",
        seen: true
      }
    ],
    audioTranscript: "Meu Deus do céu! Graças a Deus e a vocês! Agora vou poder comprar meus remédios..."
  },
  {
    id: 6,
    clientName: "Carlos Eduardo",
    clientInitials: "CE",
    avatarUrl: "https://randomuser.me/api/portraits/men/22.jpg",
    area: "Trabalhista",
    date: "ONTEM",
    batteryLevel: 71,
    statusBarTime: "15:48",
    messages: [
      {
        type: "sent",
        text: "Carlos, as verbas rescisórias foram depositadas! R$ 23.500,00 na sua conta ✅",
        time: "15:40",
        seen: true
      },
      {
        type: "received",
        text: "Doutor, não tenho nem palavras! Achei que nunca ia ver esse dinheiro 😭",
        time: "15:45",
        reaction: "😭"
      },
      {
        type: "received",
        text: "Deus abençoe vocês! Profissionais de verdade! 🙏❤️",
        time: "15:46"
      },
      {
        type: "sent",
        text: "Merecido Carlos! Sucesso sempre! 🤝",
        time: "15:48",
        seen: true
      }
    ]
  }
];

// Phone Status Bar Component - Static
const PhoneStatusBar = ({ time, batteryLevel }: { time: string; batteryLevel: number }) => (
  <div className="flex items-center justify-between px-4 py-1.5 bg-[#075E54]">
    <span className="text-white text-xs font-medium">{time}</span>
    <div className="flex items-center gap-1">
      <Signal className="w-3.5 h-3.5 text-white" />
      <Wifi className="w-3.5 h-3.5 text-white" />
      <div className="flex items-center">
        <Battery className="w-4 h-4 text-white" />
        <span className="text-white text-[10px] ml-0.5">{batteryLevel}%</span>
      </div>
    </div>
  </div>
);

// Static Waveform - Always "paused" appearance
const StaticAudioWaveform = () => {
  const bars = [45, 65, 30, 80, 55, 40, 70, 35, 60, 45, 75, 50, 35, 65, 40, 55, 70, 45, 60, 35, 50, 75, 40, 65, 55, 45, 70, 35];
  
  return (
    <div className="flex items-center gap-[2px] h-5 flex-1">
      {bars.map((height, i) => (
        <div
          key={i}
          className="w-[3px] rounded-full bg-[#8696A0]"
          style={{ 
            height: `${Math.max(15, height * 0.6)}%`,
            opacity: 0.7
          }}
        />
      ))}
    </div>
  );
};

// Static Audio Message
const StaticAudioMessage = ({ message }: { message: Message }) => (
  <div className="flex justify-start">
    <div className="wa-bubble-received flex items-center gap-2 pl-2 pr-3 py-2 min-w-0 w-full max-w-[280px] sm:max-w-[320px]">
      {/* Play Button - Static */}
      <div className="w-9 h-9 rounded-full bg-[#00A884] flex items-center justify-center flex-shrink-0">
        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
      </div>
      
      {/* Mini Avatar */}
      <div className="w-6 h-6 rounded-full bg-[#DFE5E7] flex items-center justify-center flex-shrink-0">
        <Mic className="w-3 h-3 text-[#8696A0]" />
      </div>
      
      {/* Static Waveform */}
      <StaticAudioWaveform />
      
      {/* Duration + Time */}
      <div className="flex flex-col items-end gap-0.5 flex-shrink-0 ml-1">
        <span className="text-[11px] text-[#667781] font-medium">{message.duration}</span>
        <span className="text-[10px] text-[#667781]">{message.time}</span>
      </div>
    </div>
  </div>
);

// Static Emoji Reaction
const StaticEmojiReaction = ({ emoji }: { emoji: string }) => (
  <div className="absolute -bottom-3 right-2 bg-white rounded-full px-1.5 py-0.5 shadow-md border border-gray-100">
    <span className="text-sm">{emoji}</span>
  </div>
);

// Static Message Bubble
const StaticMessageBubble = ({ message, isFirst }: { message: Message; isFirst: boolean }) => {
  if (message.type === "audio") {
    return <StaticAudioMessage message={message} />;
  }

  const isSent = message.type === "sent";

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"}`}>
      <div className={`relative ${isSent ? "wa-bubble-sent" : "wa-bubble-received"} ${isFirst ? (isSent ? "wa-tail-sent" : "wa-tail-received") : ""}`}>
        <p className="text-[14.2px] text-[#111B21] leading-[19px] break-words">{message.text}</p>
        <div className={`flex items-center gap-1 mt-0.5 ${isSent ? "justify-end" : "justify-start"}`}>
          <span className="text-[11px] text-[#667781]">{message.time}</span>
          {isSent && message.seen && <CheckCheck className="w-4 h-4 text-[#53BDEB]" />}
          {isSent && !message.seen && <Check className="w-4 h-4 text-[#667781]" />}
        </div>
        {message.reaction && <StaticEmojiReaction emoji={message.reaction} />}
      </div>
    </div>
  );
};

// Static Date Divider
const DateDivider = ({ date }: { date: string }) => (
  <div className="flex justify-center my-3">
    <div className="bg-[#FFFFFF] px-3 py-1 rounded-lg shadow-sm">
      <span className="text-[12.5px] text-[#54656F] font-medium">{date}</span>
    </div>
  </div>
);

// Static WhatsApp Header - Always shows "online"
const StaticWhatsAppHeader = ({ 
  name, 
  initials, 
  avatarUrl 
}: { 
  name: string; 
  initials: string; 
  avatarUrl?: string; 
}) => {
  const [imgError, setImgError] = useState(false);
  
  return (
    <div className="wa-header-real flex items-center gap-3 px-2 py-2">
      {/* Back Arrow */}
      <div className="p-1">
        <ArrowLeft className="w-5 h-5 text-white" />
      </div>
      
      {/* Avatar */}
      <div className="w-10 h-10 rounded-full bg-[#DFE5E7] flex items-center justify-center flex-shrink-0 overflow-hidden">
        {avatarUrl && !imgError ? (
          <img 
            src={avatarUrl} 
            alt={name}
            className="w-full h-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span className="text-[#54656F] font-semibold text-sm">{initials}</span>
        )}
      </div>
      
      {/* Name & Status - Always "online" */}
      <div className="flex-1 min-w-0">
        <p className="font-medium text-white text-[16px] truncate leading-tight">{name}</p>
        <p className="text-[13px] text-white/80 leading-tight">online</p>
      </div>
      
      {/* Action Icons */}
      <div className="flex items-center gap-3">
        <div className="p-1.5">
          <Video className="w-5 h-5 text-white" />
        </div>
        <div className="p-1.5">
          <Phone className="w-5 h-5 text-white" />
        </div>
        <div className="p-1.5">
          <MoreVertical className="w-5 h-5 text-white" />
        </div>
      </div>
    </div>
  );
};

// Static Input Bar
const StaticWhatsAppInputBar = () => (
  <div className="flex items-center gap-2 px-2 py-2 bg-[#F0F2F5]">
    {/* Emoji */}
    <div className="p-2 text-[#54656F]">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm5.694 0c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22c-5.514 0-10-4.486-10-10S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm6-8.687c0 3.867-3.059 7-6.813 7h-.374C7.059 20.313 4 17.18 4 13.313v-.063c.139-2.998 2.551-5.411 5.543-5.563.139-.004.277.003.414.012a6.26 6.26 0 011.207.2c1.728.429 3.169 1.549 3.98 3.091a6.213 6.213 0 01.856 3.197v.126z"/>
      </svg>
    </div>
    
    {/* Input */}
    <div className="flex-1 bg-white rounded-full px-4 py-2.5">
      <span className="text-[15px] text-[#667781]">Mensagem</span>
    </div>
    
    {/* Attachment */}
    <div className="p-2 text-[#54656F]">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 003.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 01-2.829 1.171 3.975 3.975 0 01-2.83-1.173 3.973 3.973 0 01-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 00-.834.018l-7.205 7.207a5.577 5.577 0 00-1.645 3.971z"/>
      </svg>
    </div>
    
    {/* Camera */}
    <div className="p-2 text-[#54656F]">
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21.317 4.381H10.971L9.078 2.45c-.193-.199-.472-.301-.748-.301H5.084c-.276 0-.556.102-.748.301L2.443 4.381H2.683c-1.18 0-2.14.969-2.14 2.16v11.298c0 1.191.96 2.16 2.14 2.16h18.634c1.18 0 2.14-.969 2.14-2.16V6.541c0-1.191-.96-2.16-2.14-2.16zM12 17.07c-2.99 0-5.41-2.449-5.41-5.469 0-3.019 2.42-5.469 5.41-5.469s5.41 2.449 5.41 5.469c0 3.019-2.42 5.469-5.41 5.469zm0-9.188c-2.022 0-3.66 1.658-3.66 3.719 0 2.061 1.638 3.719 3.66 3.719s3.66-1.658 3.66-3.719c0-2.061-1.638-3.719-3.66-3.719z"/>
      </svg>
    </div>
    
    {/* Mic */}
    <div className="w-10 h-10 bg-[#00A884] rounded-full flex items-center justify-center">
      <Mic className="w-5 h-5 text-white" />
    </div>
  </div>
);

// Static WhatsApp Conversation - All messages visible immediately
const StaticWhatsAppConversation = ({ testimonial }: { testimonial: Testimonial }) => {
  const hasAudio = testimonial.messages.some(m => m.type === "audio");
  
  return (
    <div className="relative group">
      {/* Screenshot wrapper with photo-like effect */}
      <div className="wa-card overflow-hidden rounded-2xl shadow-lg">
        {/* Phone Status Bar */}
        <PhoneStatusBar time={testimonial.statusBarTime} batteryLevel={testimonial.batteryLevel} />
        
        {/* WhatsApp Header */}
        <StaticWhatsAppHeader 
          name={testimonial.clientName} 
          initials={testimonial.clientInitials}
          avatarUrl={testimonial.avatarUrl}
        />

        {/* Messages Area - All visible at once */}
        <div className="wa-chat-bg px-3 py-2 space-y-1 min-h-[180px]">
          <DateDivider date={testimonial.date} />
          
          {testimonial.messages.map((message, idx) => (
            <StaticMessageBubble 
              key={idx} 
              message={message} 
              isFirst={idx === 0 || testimonial.messages[idx - 1].type !== message.type}
            />
          ))}
        </div>

        {/* Audio Transcript - Always visible if exists */}
        {testimonial.audioTranscript && hasAudio && (
          <div className="px-4 py-3 bg-[#F0F2F5] border-t border-[#E9EDEF]">
            <div className="flex items-start gap-2">
              <div className="w-5 h-5 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0 mt-0.5">
                <Mic className="w-3 h-3 text-white" />
              </div>
              <div>
                <p className="text-[11px] text-[#667781] font-medium mb-1">Transcrição do áudio:</p>
                <p className="text-[13px] text-[#111B21] italic leading-relaxed">
                  "{testimonial.audioTranscript}"
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Input Bar */}
        <StaticWhatsAppInputBar />
      </div>
      
      {/* Subtle ring effect for photo-like appearance */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 pointer-events-none" />
    </div>
  );
};

const WhatsAppTestimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary/30">
            💬 Depoimentos Reais
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos clientes{" "}
            <span className="text-gradient-blue">dizem no WhatsApp</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mensagens reais de agradecimento de clientes que tiveram seus casos resolvidos com sucesso
          </p>
        </div>

        {/* Testimonials Grid - Static screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
          {whatsappTestimonials.map((testimonial) => (
            <StaticWhatsAppConversation key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground text-sm">
            Junte-se a milhares de clientes satisfeitos
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatsAppTestimonials;

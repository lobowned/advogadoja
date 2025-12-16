import { motion } from "framer-motion";
import { Play, Check, CheckCheck, Mic, Volume2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Message {
  type: "sent" | "received" | "audio";
  text?: string;
  duration?: string;
  time: string;
  seen?: boolean;
}

interface Testimonial {
  id: number;
  clientName: string;
  clientInitials: string;
  area: string;
  avatarColor: string;
  messages: Message[];
  audioTranscript?: string;
}

const whatsappTestimonials: Testimonial[] = [
  {
    id: 1,
    clientName: "Maria Aparecida",
    clientInitials: "MA",
    area: "Trabalhista",
    avatarColor: "bg-pink-500",
    messages: [
      {
        type: "received",
        text: "Maria, seu processo foi julgado procedente! Você vai receber R$ 47.000,00 👏",
        time: "09:32"
      },
      {
        type: "sent",
        text: "DOUTOR! Não acredito!! Muito obrigada mesmo! Vocês mudaram minha vida! 🙏❤️",
        time: "09:35",
        seen: true
      },
      {
        type: "sent",
        text: "Vou indicar pra todo mundo da minha família!",
        time: "09:36",
        seen: true
      }
    ]
  },
  {
    id: 2,
    clientName: "José Carlos",
    clientInitials: "JC",
    area: "Previdenciário",
    avatarColor: "bg-blue-600",
    messages: [
      {
        type: "received",
        text: "José, sua aposentadoria foi aprovada! Parabéns! 🎉",
        time: "14:18"
      },
      {
        type: "audio",
        duration: "0:47",
        time: "14:20",
        seen: true
      }
    ],
    audioTranscript: "Doutor, muito obrigado! Depois de 3 anos lutando, finalmente consegui minha aposentadoria. Vocês são demais!"
  },
  {
    id: 3,
    clientName: "Ana Paula",
    clientInitials: "AP",
    area: "Família",
    avatarColor: "bg-purple-500",
    messages: [
      {
        type: "received",
        text: "Ana, a guarda compartilhada foi homologada! Tudo certo ✅",
        time: "16:45"
      },
      {
        type: "sent",
        text: "Doutora, muito obrigada por tudo! Você foi um anjo na minha vida 😭🙏",
        time: "16:48",
        seen: true
      },
      {
        type: "sent",
        text: "Agora posso ficar tranquila com meus filhos",
        time: "16:48",
        seen: true
      }
    ]
  },
  {
    id: 4,
    clientName: "Roberto Lima",
    clientInitials: "RL",
    area: "Consumidor",
    avatarColor: "bg-green-600",
    messages: [
      {
        type: "received",
        text: "Roberto, ganhamos! Indenização de R$ 15.000 pelo produto defeituoso 💪",
        time: "11:20"
      },
      {
        type: "sent",
        text: "Caramba doutor! Eu já tinha desistido de correr atrás disso! Vocês são muito bons! 👏👏",
        time: "11:25",
        seen: true
      }
    ]
  },
  {
    id: 5,
    clientName: "Francisca Souza",
    clientInitials: "FS",
    area: "Previdenciário",
    avatarColor: "bg-orange-500",
    messages: [
      {
        type: "received",
        text: "Dona Francisca, o BPC/LOAS foi aprovado! A senhora vai receber todo mês agora 🙌",
        time: "10:15"
      },
      {
        type: "audio",
        duration: "0:32",
        time: "10:22",
        seen: true
      }
    ],
    audioTranscript: "Meu Deus do céu! Graças a Deus e a vocês! Agora vou poder comprar meus remédios..."
  },
  {
    id: 6,
    clientName: "Carlos Eduardo",
    clientInitials: "CE",
    area: "Trabalhista",
    avatarColor: "bg-cyan-600",
    messages: [
      {
        type: "received",
        text: "Carlos, as verbas rescisórias foram depositadas! R$ 23.500,00 na sua conta ✅",
        time: "15:40"
      },
      {
        type: "sent",
        text: "Doutor, não tenho nem palavras! Achei que nunca ia ver esse dinheiro 😭",
        time: "15:45",
        seen: true
      },
      {
        type: "sent",
        text: "Deus abençoe vocês! Profissionais de verdade! 🙏❤️",
        time: "15:46",
        seen: true
      }
    ]
  }
];

const MessageBubble = ({ message }: { message: Message }) => {
  if (message.type === "audio") {
    return (
      <div className="flex justify-end">
        <div className="whatsapp-bubble-sent flex items-center gap-2 px-3 py-2 max-w-[85%]">
          <button className="w-8 h-8 rounded-full bg-[#128C7E] flex items-center justify-center flex-shrink-0 hover:bg-[#075E54] transition-colors">
            <Play className="w-4 h-4 text-white fill-white ml-0.5" />
          </button>
          <div className="flex-1 flex items-center gap-2">
            <div className="flex-1 h-1 bg-[#128C7E]/30 rounded-full overflow-hidden">
              <div className="w-1/3 h-full bg-[#128C7E] rounded-full" />
            </div>
            <Volume2 className="w-4 h-4 text-[#128C7E]" />
          </div>
          <span className="text-[10px] text-gray-500 ml-1">{message.duration}</span>
          <div className="flex items-center gap-0.5 ml-1">
            <span className="text-[10px] text-gray-500">{message.time}</span>
            {message.seen && <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />}
          </div>
        </div>
      </div>
    );
  }

  const isSent = message.type === "sent";

  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"}`}>
      <div className={isSent ? "whatsapp-bubble-sent" : "whatsapp-bubble-received"}>
        <p className="text-sm text-gray-800 leading-relaxed">{message.text}</p>
        <div className={`flex items-center gap-1 mt-1 ${isSent ? "justify-end" : "justify-start"}`}>
          <span className="text-[10px] text-gray-500">{message.time}</span>
          {isSent && message.seen && <CheckCheck className="w-3.5 h-3.5 text-[#53bdeb]" />}
        </div>
      </div>
    </div>
  );
};

const WhatsAppConversation = ({ testimonial, index }: { testimonial: Testimonial; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 gradient-border-hover"
    >
      {/* WhatsApp Header */}
      <div className="whatsapp-header-gradient px-4 py-3 flex items-center gap-3">
        <Avatar className="w-10 h-10 border-2 border-white/30">
          <AvatarFallback className={`${testimonial.avatarColor} text-white text-sm font-semibold`}>
            {testimonial.clientInitials}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white truncate">{testimonial.clientName}</p>
          <p className="text-xs text-white/70">{testimonial.area}</p>
        </div>
        <Badge className="bg-white/20 text-white text-[10px] border-0 hover:bg-white/30">
          Caso Resolvido ✓
        </Badge>
      </div>

      {/* Messages Area */}
      <div className="whatsapp-doodle-bg p-4 space-y-2 min-h-[180px]">
        {testimonial.messages.map((message, idx) => (
          <MessageBubble key={idx} message={message} />
        ))}
      </div>

      {/* Audio Transcript (if exists) */}
      {testimonial.audioTranscript && (
        <div className="px-4 py-3 bg-muted/50 border-t border-border/50">
          <div className="flex items-start gap-2">
            <Mic className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
            <p className="text-xs text-muted-foreground italic leading-relaxed">
              "{testimonial.audioTranscript}"
            </p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const WhatsAppTestimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 dot-pattern opacity-30" />
      
      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
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
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatsappTestimonials.map((testimonial, index) => (
            <WhatsAppConversation key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground text-sm">
            Junte-se a milhares de clientes satisfeitos
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatsAppTestimonials;

import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle } from "lucide-react";
import { useLawyerPresence } from "@/contexts/LawyerPresenceContext";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  const { onlineLawyers, onlineCount } = useLawyerPresence();
  const displayLawyers = onlineLawyers.filter(l => l.specialty !== 'geral').slice(0, 5);

  return (
    <section className="relative overflow-hidden min-h-[70vh] sm:min-h-[80vh] flex items-center pt-16 md:pt-20">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      
      {/* Fallback Image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')",
          zIndex: -1
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
      
      <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-32 z-10">
        <div className="mx-auto max-w-3xl text-center">
          
          {/* Indicador Online */}
          <div className="mb-8 flex items-center justify-center gap-2 text-white/90 text-sm animate-fade-up">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span><span className="font-semibold">{onlineCount}</span> advogados online</span>
          </div>

          {/* Título Principal */}
          <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animated-gradient-text text-shadow-hero animate-fade-up">
            Fale Agora com um Advogado
          </h1>
          
          {/* Subtítulo */}
          <p className="mb-10 text-xl sm:text-2xl md:text-3xl text-white/90 font-medium text-shadow-hero animate-fade-up">
            Atendimento Imediato e Gratuito
          </p>

          {/* Avatares */}
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-up">
            <div className="flex -space-x-3">
              {displayLawyers.map((lawyer) => (
                <Avatar 
                  key={lawyer.id} 
                  className="w-11 h-11 border-2 border-white/80 shadow-lg"
                >
                  <AvatarImage src={lawyer.photo} alt={lawyer.name} />
                  <AvatarFallback>{lawyer.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg"
            className="h-14 px-10 text-lg font-semibold bg-secondary hover:bg-secondary/90 shadow-button transition-all hover:scale-105 animate-fade-up"
            onClick={onCtaClick}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Iniciar Conversa
          </Button>

          {/* Credenciais */}
          <div className="mt-10 text-white/50 text-xs animate-fade-up">
            <span>CNPJ 50.947.818/0001-94</span>
            <span className="mx-2">•</span>
            <span>OAB/BA 46.638</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MessageCircle, Shield, Lock, Star, CheckCircle } from "lucide-react";
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
      <div className="absolute inset-0 bg-black/60" />
      
      <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-32 z-10">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Social Proof Indicators */}
          <div className="mb-6 sm:mb-8 flex flex-wrap items-center justify-center gap-4 text-white/90 text-xs sm:text-sm animate-fade-up">
            <div className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">4.9</span>
              <span>Google</span>
            </div>
            <span className="text-white/50">•</span>
            <span><span className="font-semibold">+5.000</span> atendimentos</span>
            <span className="text-white/50">•</span>
            <div className="flex items-center gap-1.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
              </span>
              <span><span className="font-semibold">{onlineCount}</span> advogados online</span>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animated-gradient-text animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Fale Agora com um Advogado
          </h1>
          
          <p className="mb-3 sm:mb-4 text-xl sm:text-2xl md:text-3xl text-white font-semibold animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Atendimento Imediato e Gratuito
          </p>
          
          <p className="mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-white/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Tire suas dúvidas jurídicas com especialistas verificados.<br className="hidden sm:inline" />
            Sem compromisso, 100% confidencial.
          </p>

          {/* Stacked Avatars */}
          <div className="flex items-center justify-center gap-3 mb-6 sm:mb-8 animate-fade-up" style={{ animationDelay: "0.25s" }}>
            <div className="flex -space-x-3">
              {displayLawyers.map((lawyer) => (
                <Avatar 
                  key={lawyer.id} 
                  className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white shadow-lg"
                >
                  <AvatarImage src={lawyer.photo} alt={lawyer.name} />
                  <AvatarFallback>{lawyer.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
            <span className="text-white/90 text-sm sm:text-base font-medium">
              +{Math.max(0, onlineCount - 5)} disponíveis agora
            </span>
          </div>
          
          {/* CTA Button */}
          <Button 
            size="lg"
            className="h-14 sm:h-16 w-full sm:w-auto px-8 sm:px-10 text-base sm:text-lg font-semibold bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-button transition-all hover:scale-105 animate-fade-up mb-4"
            onClick={onCtaClick}
            style={{ animationDelay: "0.3s" }}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Falar com um Advogado agora
          </Button>

          {/* Micro-copy */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-white/80 text-xs sm:text-sm mb-6 sm:mb-8 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Resposta em 2 minutos</span>
            </div>
            <span className="text-white/50">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>100% Gratuito</span>
            </div>
            <span className="text-white/50">•</span>
            <div className="flex items-center gap-1.5">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Atendimento Sigiloso</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-4 py-2 text-xs sm:text-sm">
              <Shield className="w-4 h-4 mr-2" />
              OAB Verificado
            </Badge>
            <Badge variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 px-4 py-2 text-xs sm:text-sm">
              <Lock className="w-4 h-4 mr-2" />
              100% Confidencial
            </Badge>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

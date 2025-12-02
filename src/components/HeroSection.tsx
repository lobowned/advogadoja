import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, MessageSquare, CheckCircle2, Users } from "lucide-react";
import { useLawyerPresence } from "@/contexts/LawyerPresenceContext";
import logoAdvogadoOnline from "@/assets/logo-advogado-online.png";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  const { onlineCount } = useLawyerPresence();

  return (
    <section className="relative overflow-hidden min-h-screen w-full flex items-center justify-center">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-10 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-6 sm:mb-8 animate-fade-in animate-[float_3s_ease-in-out_infinite]">
            <img 
              src={logoAdvogadoOnline} 
              alt="Advogado Online" 
              className="h-56 sm:h-64 md:h-72 lg:h-96 mx-auto transition-transform hover:scale-105 duration-300"
            />
          </div>

          {/* Badge de Advogados Online */}
          <div className="mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Badge 
              variant="secondary" 
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-whatsapp-send-btn rounded-full animate-pulse-dot" />
                <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>{onlineCount} advogados online agora</span>
              </div>
            </Badge>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Atendimento Jurídico
            <br />
            <span className="bg-gradient-to-r from-[hsl(200,90%,55%)] to-[hsl(75,70%,55%)] bg-clip-text text-transparent">
              Gratuito e Imediato
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Fale agora com um advogado especializado.
            <br />
            <span className="text-sm sm:text-lg text-gray-300">Atendimento em menos de 1 minuto.</span>
          </p>

          {/* CTA Button */}
          <div className="mb-6 sm:mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button
              onClick={onCtaClick}
              size="lg"
              className="w-full sm:w-auto bg-whatsapp-send-btn hover:bg-whatsapp-send-btn/90 text-white text-base sm:text-lg px-8 sm:px-12 py-5 sm:py-7 rounded-xl shadow-2xl shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:shadow-[0_0_50px_rgba(34,197,94,0.7)] transition-all duration-300 transform hover:scale-105"
            >
              <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Iniciar Atendimento Agora
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-white/90 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-default">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-medium">OAB Verificado</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-default">
              <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-whatsapp-send-btn" />
              <span className="text-xs sm:text-sm font-medium">Sigilo Garantido</span>
            </div>
            <div className="flex items-center gap-2 hover:scale-105 transition-transform duration-200 cursor-default">
              <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
              <span className="text-xs sm:text-sm font-medium">Resposta Imediata</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

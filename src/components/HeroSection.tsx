import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Shield, Star, Clock, Lock, Zap, DollarSign, Users, TrendingUp } from "lucide-react";
import { useLawyerPresence } from "@/contexts/LawyerPresenceContext";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  const { onlineLawyers, onlineCount } = useLawyerPresence();
  const displayLawyers = onlineLawyers.filter(l => l.specialty !== 'geral').slice(0, 5);

  return (
    <section className="relative overflow-hidden min-h-[65vh] sm:min-h-[75vh] md:min-h-[85vh] flex items-center pt-16 md:pt-20">
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
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/75" />
      
      <div className="container relative mx-auto px-4 py-12 sm:py-16 md:py-32 z-10">
        <div className="mx-auto max-w-4xl text-center">
          
          {/* Indicador Online */}
          <div 
            className="mb-5 sm:mb-6 flex items-center justify-center gap-2 text-white/90 text-sm animate-fade-up"
            style={{ animationDelay: '0ms' }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span><span className="font-semibold">{onlineCount}</span> advogados online agora</span>
          </div>

          {/* Trust Badges */}
          <div 
            className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-7 animate-fade-up"
            style={{ animationDelay: '100ms' }}
          >
            <Badge className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white px-3 py-1.5 text-xs sm:text-sm">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
              OAB Verificado
            </Badge>
            <Badge className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white px-3 py-1.5 text-xs sm:text-sm">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 fill-secondary text-secondary" />
              4.9 • 2.500+ Avaliações
            </Badge>
            <Badge className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white px-3 py-1.5 text-xs sm:text-sm">
              <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5" />
              Resposta Imediata
            </Badge>
          </div>

          {/* Título Principal */}
          <h1 
            className="mb-4 sm:mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight animated-gradient-text text-shadow-hero animate-fade-up"
            style={{ animationDelay: '200ms' }}
          >
            Fale Agora com um Advogado
          </h1>
          
          {/* Subtítulo */}
          <p 
            className="mb-6 sm:mb-7 text-xl sm:text-2xl md:text-3xl text-white/95 font-medium text-shadow-hero animate-fade-up"
            style={{ animationDelay: '300ms' }}
          >
            Atendimento Imediato e 100% Gratuito
          </p>

          {/* Estatísticas Rápidas */}
          <div 
            className="grid grid-cols-3 gap-3 sm:gap-6 max-w-2xl mx-auto mb-7 sm:mb-8 animate-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">5K+</div>
              </div>
              <div className="text-xs sm:text-sm text-white/80">Clientes Atendidos</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1">
                <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">98%</div>
              </div>
              <div className="text-xs sm:text-sm text-white/80">Satisfação</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3 sm:p-4">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-secondary" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">&lt;2min</div>
              </div>
              <div className="text-xs sm:text-sm text-white/80">Tempo de Resposta</div>
            </div>
          </div>

          {/* Avatares dos Advogados */}
          <div 
            className="flex items-center justify-center gap-3 mb-7 sm:mb-8 animate-fade-up"
            style={{ animationDelay: '500ms' }}
          >
            <div className="flex -space-x-3">
              {displayLawyers.map((lawyer) => (
                <Avatar 
                  key={lawyer.id} 
                  className="w-10 h-10 sm:w-12 sm:h-12 border-2 border-white/90 shadow-lg ring-2 ring-white/20"
                >
                  <AvatarImage src={lawyer.photo} alt={lawyer.name} />
                  <AvatarFallback>{lawyer.name[0]}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
          
          {/* CTA Button com Badge Grátis */}
          <div 
            className="relative inline-block animate-fade-up"
            style={{ animationDelay: '600ms' }}
          >
            <Badge className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-secondary text-secondary-foreground border-none px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold shadow-lg z-10 animate-pulse-subtle">
              GRÁTIS
            </Badge>
            <Button 
              size="lg"
              className="h-13 sm:h-16 px-10 sm:px-12 text-base sm:text-xl font-bold bg-secondary hover:bg-secondary/90 shadow-button transition-all hover:scale-105 btn-cta-pulse"
              onClick={onCtaClick}
            >
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-2" />
              Falar com Advogado Agora
            </Button>
          </div>

          {/* Benefícios Visuais */}
          <div 
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-8 sm:mt-10 mb-6 sm:mb-8 animate-fade-up"
            style={{ animationDelay: '700ms' }}
          >
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <Lock className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-sm sm:text-base font-medium">Sigilo Total</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-sm sm:text-base font-medium">Atendimento Imediato</span>
            </div>
            <div className="flex items-center gap-2 text-white/90">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <DollarSign className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <span className="text-sm sm:text-base font-medium">100% Gratuito</span>
            </div>
          </div>

          {/* Mini Social Proof */}
          <div 
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 animate-fade-up"
            style={{ animationDelay: '800ms' }}
          >
            <Avatar className="w-8 h-8 sm:w-10 sm:h-10 border-2 border-white/50">
              <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100" alt="Maria S." />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>
            <div className="text-left">
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-white text-xs sm:text-sm">
                <span className="font-semibold">"Excelente atendimento!"</span>
                <span className="text-white/70 ml-1">— Maria S.</span>
              </p>
            </div>
          </div>

          {/* Credenciais */}
          <div 
            className="text-white/50 text-xs sm:text-sm animate-fade-up"
            style={{ animationDelay: '900ms' }}
          >
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

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { MessageSquare, Users, Star } from "lucide-react";
import { useLawyerPresence } from "@/contexts/LawyerPresenceContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { lawyers } from "@/data/lawyers";
import logoAdvogadoOnline from "@/assets/logo-advogado-online.png";

interface HeroSectionProps {
  onCtaClick: () => void;
}

const testimonials = [
  { text: "Recebi minha rescisão em 3 meses!", author: "Maria S." },
  { text: "Consegui minha pensão rapidamente", author: "João P." },
  { text: "Atendimento excelente e rápido", author: "Ana C." },
  { text: "Ganhei R$ 45.000 de horas extras!", author: "Carlos M." },
  { text: "Consegui minha aposentadoria!", author: "Rosa L." },
];

const HeroSection = ({ onCtaClick }: HeroSectionProps) => {
  const { onlineCount } = useLawyerPresence();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const isMobile = useIsMobile();
  
  // Advogados para exibir no carrossel (excluindo triagem geral)
  const displayLawyers = lawyers.filter(l => l.specialty !== 'geral');

  // Rotação automática de testemunhos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen w-full flex items-center justify-center">
      {/* Video Background - Hidden on mobile for performance */}
      {!isMobile && (
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
      )}
      
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
          {/* Logo - Smaller on mobile */}
          <div className="mb-4 sm:mb-6 md:mb-8 animate-fade-in animate-[float_3s_ease-in-out_infinite]">
            <img 
              src={logoAdvogadoOnline} 
              alt="Advogado Online" 
              className="h-32 xs:h-40 sm:h-56 md:h-72 lg:h-96 mx-auto transition-transform hover:scale-105 duration-300"
            />
          </div>

          {/* Badges de Social Proof */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {/* Badge de Advogados Online */}
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

            {/* Badge de Avaliações */}
            <Badge 
              className="bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-100 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium shadow-lg"
            >
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>4.9 • 2.500+ atendimentos</span>
              </div>
            </Badge>
          </div>

          {/* Testemunho Rotativo */}
          <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.12s' }}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 inline-flex items-center gap-2 transition-all duration-500">
              <span className="text-amber-400 text-lg">"</span>
              <p className="text-white/90 text-sm sm:text-base italic">
                {testimonials[currentTestimonial].text}
              </p>
              <span className="text-white/60 text-xs">
                - {testimonials[currentTestimonial].author}
              </span>
            </div>
          </div>

          {/* Carrossel de Avatares */}
          <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.15s' }}>
            <Carousel
              opts={{
                align: "center",
                loop: true,
                dragFree: true,
              }}
              plugins={[
                Autoplay({
                  delay: 2000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full max-w-md mx-auto"
            >
              <CarouselContent className="-ml-2">
                {displayLawyers.slice(0, 12).map((lawyer) => (
                  <CarouselItem 
                    key={lawyer.id} 
                    className="pl-2 basis-auto"
                  >
                    <div className="relative group">
                      <Avatar className="w-12 h-12 sm:w-14 sm:h-14 border-2 border-white/30 group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                        <AvatarImage src={lawyer.photo} alt={lawyer.name} />
                        <AvatarFallback className="bg-primary/20 text-white text-xs">
                          {lawyer.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      {/* Indicador online */}
                      <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-whatsapp-send-btn rounded-full border-2 border-black/50 animate-pulse" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <p className="text-xs text-white/60 mt-2">
              Advogados prontos para atender você
            </p>
          </div>

          {/* Título Principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Atendimento Jurídico
            <br />
            <span className="bg-gradient-to-r from-[hsl(200,90%,55%)] to-[hsl(75,70%,55%)] bg-clip-text text-transparent">
              Gratuito e Imediato
            </span>
          </h1>

          {/* CTA com Benefício */}
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button 
              onClick={onCtaClick}
              size="lg"
              className="bg-whatsapp-send-btn hover:bg-whatsapp-send-btn/90 text-white min-h-[56px] px-8 text-lg font-bold shadow-lg shadow-whatsapp-send-btn/30 hover:shadow-xl hover:shadow-whatsapp-send-btn/40 transition-all duration-300 hover:scale-105"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              Falar AGORA - Resposta em 2 min
            </Button>
            <p className="text-white/70 text-sm mt-3 flex items-center justify-center gap-4">
              <span className="flex items-center gap-1">
                <span className="text-whatsapp-send-btn">✓</span> Consulta 100% gratuita
              </span>
              <span className="flex items-center gap-1">
                <span className="text-whatsapp-send-btn">✓</span> Sem compromisso
              </span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;

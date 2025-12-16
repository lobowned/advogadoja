import { useState, useEffect } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Users, Star } from "lucide-react";
import { useLawyerPresence } from "@/contexts/LawyerPresenceContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { lawyers } from "@/data/lawyers";
import logoAdvogadoOnline from "@/assets/logo-advogado-online.png";

const testimonials = [
  { text: "Recebi minha rescisão em 3 meses!", author: "Maria S." },
  { text: "Consegui minha pensão rapidamente", author: "João P." },
  { text: "Atendimento excelente e rápido", author: "Ana C." },
  { text: "Ganhei R$ 45.000 de horas extras!", author: "Carlos M." },
  { text: "Consegui minha aposentadoria!", author: "Rosa L." },
];

const HeroSection = () => {
  const { onlineCount } = useLawyerPresence();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  
  const displayLawyers = lawyers.filter(l => l.specialty !== 'geral');

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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

      {/* Premium Gold/Bronze Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(25_25%_8%/0.75)] via-[hsl(30_30%_12%/0.65)] to-[hsl(25_25%_8%/0.85)]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(42_65%_48%/0.08)] via-transparent to-[hsl(30_55%_42%/0.1)]" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-6 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo with scale animation */}
          <m.div 
            className="mb-3 sm:mb-6 md:mb-8"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
          >
            <div className="relative">
              <m.img 
                src={logoAdvogadoOnline} 
                alt="Advogado Online" 
                className="h-56 xs:h-60 sm:h-64 md:h-72 lg:h-96 mx-auto drop-shadow-2xl"
                whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              />
              {/* Premium shine effect */}
              <div className="absolute inset-0 gold-shine pointer-events-none rounded-full" />
            </div>
          </m.div>

          {/* Badges - Simplified on mobile */}
          <m.div 
            className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-6"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <m.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <Badge 
                variant="secondary" 
                className="glass-dark border-primary/30 text-white px-2.5 sm:px-4 py-1 sm:py-2 text-[11px] sm:text-sm font-medium shadow-lg"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse-dot" />
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  <span>{onlineCount} online</span>
                </div>
              </Badge>
            </m.div>

            <m.div
              initial={shouldReduceMotion ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Badge 
                className="glass-dark border-primary/40 text-primary-foreground px-2.5 sm:px-4 py-1 sm:py-2 text-[11px] sm:text-sm font-medium shadow-lg"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 sm:w-4 sm:h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <span>4.9 • 2.500+</span>
                </div>
              </Badge>
            </m.div>
          </m.div>

          {/* Rotating Testimonial - Hidden on very small mobile */}
          <m.div 
            className="mb-4 sm:mb-6 hidden xs:block"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <m.div 
              key={currentTestimonial}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="glass-dark border-primary/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 inline-flex items-center gap-1.5 sm:gap-2"
            >
              <span className="text-primary text-base sm:text-lg font-serif">"</span>
              <p className="text-white/90 text-xs sm:text-base italic font-serif">
                {testimonials[currentTestimonial].text}
              </p>
              <span className="text-white/60 text-[10px] sm:text-xs">
                - {testimonials[currentTestimonial].author}
              </span>
            </m.div>
          </m.div>

          {/* Avatar Carousel - Compact on mobile */}
          <m.div 
            className="mb-3 sm:mb-6"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
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
              className="w-full max-w-[280px] sm:max-w-md mx-auto overflow-visible px-2"
            >
              <CarouselContent className="-ml-1 sm:-ml-2 py-1" overflowVisible>
                {displayLawyers.slice(0, 12).map((lawyer) => (
                  <CarouselItem 
                    key={lawyer.id} 
                    className="pl-1 sm:pl-2 basis-auto"
                  >
                    <div className="relative group p-1">
                      <Avatar className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-white/30 group-hover:border-primary transition-all duration-300 group-hover:scale-110">
                        <AvatarImage src={lawyer.photo} alt={lawyer.name} />
                        <AvatarFallback className="bg-primary/20 text-white text-[10px] sm:text-xs">
                          {lawyer.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute bottom-0.5 right-0.5 w-2 h-2 sm:w-3 sm:h-3 bg-whatsapp-send-btn rounded-full border-2 border-black/50 animate-pulse" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <p className="text-[10px] sm:text-xs text-white/60 mt-1.5 sm:mt-2">
              Advogados prontos para atender você
            </p>
          </m.div>

          {/* Main Title - Premium serif typography */}
          <m.h1 
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-6 leading-tight font-serif text-shadow-hero"
            initial={shouldReduceMotion ? false : { opacity: 0, filter: "blur(10px)", y: 30 }}
            animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
            transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
          >
            Atendimento Jurídico
            <br />
            <span className="text-gradient-gold">
              Gratuito e Imediato
            </span>
          </m.h1>


        </div>
      </div>
    </section>
  );
};

export default HeroSection;

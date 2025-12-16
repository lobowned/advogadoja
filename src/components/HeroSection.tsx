import { useState, useEffect } from "react";
import { m, useReducedMotion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Users, Star, Zap } from "lucide-react";
import { useLawyerPresence } from "@/contexts/LawyerPresenceContext";
import { useIsMobile } from "@/hooks/use-mobile";
import { lawyers } from "@/data/lawyers";
import logoAdvogadoOnline from "@/assets/logo-advogado-online.png";
import { heroReveal, heroTitle, heroStagger, heroBadge, heroAvatar } from "@/lib/motion-variants";

const testimonials = [
  { text: "Recebi minha rescisão em 3 meses!", author: "Maria S." },
  { text: "Consegui minha pensão rapidamente", author: "João P." },
  { text: "Atendimento excelente e rápido", author: "Ana C." },
  { text: "Ganhei R$ 45.000 de horas extras!", author: "Carlos M." },
  { text: "Consegui minha aposentadoria!", author: "Rosa L." },
];

// Floating Particles Component
const FloatingParticles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(20)].map((_, i) => (
      <m.div
        key={i}
        className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        initial={{ opacity: 0 }}
        animate={{
          y: [0, -120, 0],
          x: [0, Math.random() * 60 - 30, 0],
          opacity: [0.2, 0.7, 0.2],
          scale: [1, 1.8, 1],
        }}
        transition={{
          duration: 5 + Math.random() * 5,
          repeat: Infinity,
          delay: Math.random() * 3,
          ease: "easeInOut"
        }}
      />
    ))}
  </div>
);

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

      {/* Tech Blue Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(220_25%_8%/0.8)] via-[hsl(220_30%_12%/0.7)] to-[hsl(220_25%_8%/0.9)]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[hsl(220_90%_56%/0.1)] via-transparent to-[hsl(260_80%_60%/0.1)]" />

      {/* Floating Particles */}
      {!shouldReduceMotion && <FloatingParticles />}

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-6 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo with Dramatic Entrance + Glow */}
          <m.div 
            className="mb-3 sm:mb-6 md:mb-8 light-sweep-effect"
            variants={heroReveal}
            initial="hidden"
            animate="visible"
          >
            <m.img 
              src={logoAdvogadoOnline} 
              alt="Advogado Online" 
              className="h-56 xs:h-60 sm:h-64 md:h-72 lg:h-96 mx-auto drop-shadow-2xl logo-glow-breathe"
              animate={shouldReduceMotion ? undefined : { 
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              whileHover={shouldReduceMotion ? undefined : { scale: 1.05 }}
            />
          </m.div>

          {/* Badges with Pop-in Effect */}
          <m.div 
            className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-6"
            variants={heroStagger}
            initial="hidden"
            animate="visible"
          >
            <m.div variants={heroBadge}>
              <Badge 
                variant="secondary" 
                className="glass-dark border-primary/30 text-white px-2.5 sm:px-4 py-1 sm:py-2 text-[11px] sm:text-sm font-medium shadow-lg"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse-dot" />
                  <Users className="w-3 h-3 sm:w-4 sm:h-4 text-emerald-400" />
                  <span>{onlineCount} online</span>
                </div>
              </Badge>
            </m.div>

            <m.div variants={heroBadge}>
              <Badge 
                className="glass-dark border-cyan-400/40 text-white px-2.5 sm:px-4 py-1 sm:py-2 text-[11px] sm:text-sm font-medium shadow-lg"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-2.5 h-2.5 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span>4.9 • 2.500+</span>
                </div>
              </Badge>
            </m.div>
          </m.div>

          {/* Rotating Testimonial with AnimatePresence */}
          <m.div 
            className="mb-4 sm:mb-6 hidden xs:block h-10 sm:h-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <m.div 
                key={currentTestimonial}
                initial={{ opacity: 0, y: 15, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="glass-dark border-white/10 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 inline-flex items-center gap-1.5 sm:gap-2"
              >
                <Zap className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
                <p className="text-white/90 text-xs sm:text-base font-medium">
                  {testimonials[currentTestimonial].text}
                </p>
                <span className="text-white/60 text-[10px] sm:text-xs">
                  - {testimonials[currentTestimonial].author}
                </span>
              </m.div>
            </AnimatePresence>
          </m.div>

          {/* Avatar Carousel with Cascade Entry */}
          <m.div 
            className="mb-3 sm:mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
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
                {displayLawyers.slice(0, 12).map((lawyer, index) => (
                  <CarouselItem 
                    key={lawyer.id} 
                    className="pl-1 sm:pl-2 basis-auto"
                  >
                    <m.div 
                      className="relative group p-1"
                      custom={index}
                      variants={heroAvatar}
                      initial="hidden"
                      animate="visible"
                    >
                      <Avatar className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-white/30 group-hover:border-cyan-400 transition-all duration-300 group-hover:scale-110">
                        <AvatarImage src={lawyer.photo} alt={lawyer.name} />
                        <AvatarFallback className="bg-primary/20 text-white text-[10px] sm:text-xs">
                          {lawyer.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute bottom-0.5 right-0.5 w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full border-2 border-black/50 animate-pulse" />
                    </m.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            <m.p 
              className="text-[10px] sm:text-xs text-white/60 mt-1.5 sm:mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              Advogados prontos para atender você
            </m.p>
          </m.div>

          {/* Main Title with Clip-Path Reveal */}
          <m.h1 
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-6 leading-tight font-display text-shadow-hero"
            variants={heroTitle}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
          >
            Atendimento Jurídico
            <br />
            <m.span 
              className="text-gradient-blue inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Gratuito e Imediato
            </m.span>
          </m.h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

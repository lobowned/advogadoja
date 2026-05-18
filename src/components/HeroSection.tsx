import { useState, useEffect } from "react";
import { m, useReducedMotion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Autoplay from "embla-carousel-autoplay";
import { Users, Star, Zap, Scale } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { lawyers } from "@/data/lawyers";
import logoAdvogadoOnline from "@/assets/logo-advogado-online.png";
import { heroReveal, heroTitle, heroStagger, heroBadge } from "@/lib/motion-variants";

const testimonials = [
  { text: "Ganhei minhas verbas rescisórias!", author: "Roberto M. • Trabalhista" },
  { text: "Aposentadoria aprovada em 90 dias!", author: "Dona Lúcia • INSS" },
  { text: "Divórcio resolvido sem briga!", author: "Juliana F. • Família" },
  { text: "Voo cancelado: R$ 12.000 de indenização!", author: "Carlos A. • Consumidor" },
  { text: "Recuperei R$ 80 mil em ação cível!", author: "Marcos R. • Civil" },
  { text: "Absolvido por falta de provas!", author: "Pedro S. • Criminal" },
];

const areaBadges = [
  { label: "Trabalhista" },
  { label: "Família" },
  { label: "INSS" },
  { label: "Consumidor" },
  { label: "Civil" },
  { label: "Criminal" },
];

const heroSubtitles = [
  "Demitido sem justa causa? Buscamos suas verbas.",
  "INSS negou seu benefício? Entramos com recurso.",
  "Divórcio, pensão ou guarda? Resolvemos com discrição.",
  "Voo cancelado, nome sujo, plano negado? Indenização garantida.",
  "Inventário, contrato ou dívida? Estratégia jurídica completa.",
  "Acusado injustamente? Defesa criminal especializada.",
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
      {/* Video Background - Optimized for Core Web Vitals */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
        // @ts-expect-error fetchpriority is a valid attribute
        fetchpriority="low"
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
            className="mb-3 sm:mb-6 md:mb-8"
            variants={heroReveal}
            initial="hidden"
            animate="visible"
          >
            <m.img 
              src={logoAdvogadoOnline} 
              alt="Logo Advogado Já - Escritório de Advocacia Online" 
              className="h-56 xs:h-60 sm:h-64 md:h-72 lg:h-96 mx-auto drop-shadow-2xl logo-glow-breathe max-w-full object-contain"
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
                  <span>Advogados Online</span>
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

            <m.div variants={heroBadge}>
              <Badge 
                className="glass-dark border-blue-400/40 text-white px-2.5 sm:px-4 py-1 sm:py-2 text-[11px] sm:text-sm font-medium shadow-lg"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Scale className="w-3 h-3 sm:w-4 sm:h-4 text-blue-400" />
                  <span>Direito do Consumidor</span>
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            <TooltipProvider delayDuration={200}>
              <Carousel
                opts={{
                  align: "center",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 1500,
                    stopOnInteraction: false,
                  }),
                ]}
                className="w-full max-w-[260px] sm:max-w-md lg:max-w-xl mx-auto px-2"
              >
                <CarouselContent className="-ml-1 sm:-ml-2 py-1">
                  {[...displayLawyers, ...displayLawyers.slice(0, 12)].map((lawyer, index) => (
                    <CarouselItem 
                      key={`${lawyer.id}-${index}`} 
                      className="pl-1 sm:pl-2 basis-auto"
                    >
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className="relative group p-1 cursor-pointer">
                            <Avatar 
                              className="w-9 h-9 sm:w-12 sm:h-12 md:w-14 md:h-14 border-2 border-white/30 group-hover:border-cyan-400 transition-all duration-300 group-hover:scale-110 avatar-entrance"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <AvatarImage src={lawyer.photo} alt={`Advogado ${lawyer.name} especialista em ${lawyer.subSpecialty}`} />
                              <AvatarFallback className="bg-primary/20 text-white text-[10px] sm:text-xs">
                                {lawyer.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                              </AvatarFallback>
                            </Avatar>
                            <div className="absolute bottom-0.5 right-0.5 w-2 h-2 sm:w-3 sm:h-3 bg-emerald-400 rounded-full border-2 border-black/50 animate-pulse" />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent 
                          side="bottom" 
                          className="bg-black/90 backdrop-blur-sm border-cyan-500/30 text-white px-3 py-2"
                        >
                          <div className="text-center">
                            <p className="font-semibold text-sm">{lawyer.name}</p>
                            <p className="text-xs text-cyan-400">{lawyer.subSpecialty}</p>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </TooltipProvider>
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
            Advogado Direito do
            <br />
            <m.span 
              className="text-gradient-blue inline-block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              Consumidor
            </m.span>
          </m.h1>
          
          <m.p 
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Problema com Reclame Aqui, Procon ou Consumidor.gov? Voo cancelado, plano de saúde, nome sujo?
            <span className="text-primary font-semibold"> Fale com advogado especialista agora!</span>
          </m.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

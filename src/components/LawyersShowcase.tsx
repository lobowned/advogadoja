import { m, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { lawyers } from "@/data/lawyers";
import { useLawyerPresence } from "@/contexts/LawyerPresenceContext";
import { LawyerWithPresence } from "@/hooks/useLawyerPresence";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { Star, Clock, Briefcase } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import LawyerCredentialsPopup from "@/components/LawyerCredentialsPopup";
import { getPersonalityByLawyerId } from "@/data/lawyer-personalities";

// Componente de Card reutilizável com credenciais
const LawyerCard = ({ lawyer, index }: { lawyer: LawyerWithPresence; index: number }) => {
  const shouldReduceMotion = useReducedMotion();
  const personality = getPersonalityByLawyerId(lawyer.id);
  const casesWon = personality?.casesWon || 500;
  const avgRating = personality?.avgRating || 4.7;
  const isBusy = lawyer.status === 'busy';

  return (
    <LawyerCredentialsPopup lawyer={lawyer}>
      <m.div
        whileHover={shouldReduceMotion ? undefined : { 
          y: -8, 
          rotateY: 5,
          rotateX: 5,
          boxShadow: "0 20px 40px -15px rgba(0,0,0,0.2)"
        }}
        whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className={`group transition-all duration-500 overflow-hidden border-muted flex-shrink-0 w-full md:w-72 bg-card/80 backdrop-blur-sm border border-border/50 cursor-pointer ${
          isBusy ? 'opacity-80' : ''
        }`}>
          <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
            <div className="relative mx-auto mb-3 sm:mb-4">
              <Avatar className={`w-20 h-20 sm:w-24 sm:h-24 border-4 transition-colors ${
                isBusy 
                  ? 'border-orange-300/50 group-hover:border-orange-400/70' 
                  : 'border-primary/20 group-hover:border-primary/40'
              }`}>
                <AvatarImage src={lawyer.photo} alt={lawyer.name} />
                <AvatarFallback className="text-lg sm:text-xl font-bold bg-primary/10 text-primary">
                  {lawyer.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              {/* Status indicator with glow effect */}
              <m.div 
                className={`absolute -bottom-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 border-card ${
                  isBusy 
                    ? 'bg-orange-500' 
                    : 'bg-green-500'
                }`}
                animate={!isBusy && !shouldReduceMotion ? { 
                  scale: [1, 1.2, 1],
                  boxShadow: [
                    "0 0 0 0 rgba(34, 197, 94, 0.4)",
                    "0 0 0 8px rgba(34, 197, 94, 0)",
                    "0 0 0 0 rgba(34, 197, 94, 0)"
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <h3 className="font-bold text-base sm:text-lg leading-tight group-hover:text-primary transition-colors">
              {lawyer.name}
            </h3>
            
            {/* Status de ocupado */}
            {isBusy && lawyer.currentActivity && (
              <p className="text-xs text-orange-600 mt-1 flex items-center justify-center gap-1">
                <Clock className="w-3 h-3" />
                {lawyer.currentActivity}
              </p>
            )}
          </CardHeader>

          <CardContent className="space-y-2 sm:space-y-3 px-4 sm:px-6">
            <Badge variant="secondary" className="w-full justify-center font-medium text-xs sm:text-sm">
              {lawyer.subSpecialty}
            </Badge>

            {/* Estatísticas rápidas */}
            <div className="flex justify-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span>{avgRating}</span>
              </div>
              <div className="flex items-center gap-1">
                <Briefcase className="w-3 h-3" />
                <span>{casesWon.toLocaleString()}+ casos</span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {lawyer.bio}
            </p>

            <div className="pt-2 border-t border-border/50">
              <Badge variant="outline" className="w-full justify-center text-[10px] sm:text-xs">
                {lawyer.oab}
              </Badge>
            </div>
          </CardContent>
        </Card>
      </m.div>
    </LawyerCredentialsPopup>
  );
};

const LawyersShowcase = () => {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const { onlineLawyers, availableCount, busyCount } = useLawyerPresence();
  const displayLawyers = onlineLawyers.filter((l) => l.specialty !== "geral");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-10 sm:py-16 px-2 sm:px-4 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <m.div 
          className="text-center mb-8 sm:mb-12"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Nossa Equipe de Especialistas
          </h2>
          
          {/* Contador de status */}
          <m.div 
            className="flex justify-center gap-4 mt-3"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <m.div 
                className="w-2 h-2 bg-green-500 rounded-full"
                animate={shouldReduceMotion ? {} : { scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span>{availableCount} disponíveis</span>
            </div>
            {busyCount > 0 && (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                <span>{busyCount} em atendimento</span>
              </div>
            )}
          </m.div>
        </m.div>

        {/* Carrossel Responsivo */}
        {isMobile ? (
          /* Mobile: Embla Carousel com Swipe */
          <m.div
            ref={ref}
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: true,
                }),
              ]}
              className="w-full px-4"
            >
              <CarouselContent>
                {displayLawyers.map((lawyer, index) => (
                  <CarouselItem key={lawyer.id} className="basis-full">
                    <LawyerCard lawyer={lawyer} index={index} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0" />
              <CarouselNext className="right-0" />
            </Carousel>
          </m.div>
        ) : (
          /* Desktop: Marquee Infinito with cascade animation */
          <m.div 
            ref={ref}
            className="relative overflow-hidden py-4"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-6 animate-marquee hover:pause-marquee">
              {/* Cards originais */}
              {displayLawyers.map((lawyer, index) => (
                <LawyerCard key={lawyer.id} lawyer={lawyer} index={index} />
              ))}
              
              {/* Cards duplicados para loop infinito */}
              {displayLawyers.map((lawyer, index) => (
                <LawyerCard key={`duplicate-${lawyer.id}`} lawyer={lawyer} index={index} />
              ))}
            </div>
          </m.div>
        )}
      </div>
    </section>
  );
};

export default LawyersShowcase;

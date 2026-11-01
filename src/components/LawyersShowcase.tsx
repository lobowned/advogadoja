import { m, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { lawyers } from "@/data/lawyers";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { Bot, Zap } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

// Lawyer type for this component
interface LawyerDisplay {
  id: string;
  name: string;
  photo: string;
  specialty: string;
  subSpecialty: string;
  oab: string;
  bio: string;
}

// Componente de Card reutilizável
const LawyerCard = ({ lawyer, index: _index }: { lawyer: LawyerDisplay; index: number }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
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
      <Card className="group transition-all duration-500 overflow-hidden border-muted flex-shrink-0 w-full md:w-72 bg-card/80 backdrop-blur-sm border border-border/50">
        <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
          <div className="relative mx-auto mb-3 sm:mb-4">
            <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-4 transition-colors border-primary/20 group-hover:border-primary/40">
              <AvatarImage src={lawyer.photo} alt={`Advogado ${lawyer.name} especialista em ${lawyer.subSpecialty}`} />
              <AvatarFallback className="text-lg sm:text-xl font-bold bg-primary/10 text-primary">
                {lawyer.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            {/* Status indicator with glow effect */}
            <m.div 
              className="absolute -bottom-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full border-4 border-card bg-green-500"
              animate={!shouldReduceMotion ? { 
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
          <Badge variant="outline" className="mx-auto mt-1.5 text-[10px] px-2 py-0.5 border-primary/30 text-primary/80 font-normal gap-1">
            <Bot className="w-2.5 h-2.5" />
            Assistente Virtual
          </Badge>
        </CardHeader>

        <CardContent className="space-y-2 sm:space-y-3 px-4 sm:px-6">
          <Badge variant="secondary" className="w-full justify-center font-medium text-xs sm:text-sm">
            {lawyer.subSpecialty}
          </Badge>

          <div className="flex justify-center gap-2 text-[11px] text-muted-foreground">
            <div className="flex items-center gap-1">
              <Zap className="w-3 h-3 text-emerald-500" />
              <span>Resposta em segundos</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {lawyer.bio}
          </p>

          <div className="pt-2 border-t border-border/50">
            <p className="text-[10px] text-center text-muted-foreground/70 leading-tight">
              Triagem inicial automatizada.<br />
              Após qualificação, o Dr. Gilberto Riccio (OAB/BA 46.638) assume o caso.
            </p>
          </div>
        </CardContent>
      </Card>
    </m.div>
  );
};

const LawyersShowcase = () => {
  const isMobile = useIsMobile();
  const shouldReduceMotion = useReducedMotion();
  const displayLawyers = lawyers.filter((l) => l.specialty !== "geral");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="py-10 sm:py-16 px-2 sm:px-4 bg-gradient-to-b from-background via-muted/30 to-background overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <m.div 
          className="text-center mb-8 sm:mb-12"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Equipe de <span className="text-primary">Assistentes Virtuais</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-2xl mx-auto">
            Nossa triagem automatizada cobre {displayLawyers.length} subáreas do direito. Em segundos, o assistente certo analisa seu caso e, se for pertinente, encaminha pro Dr. Gilberto Riccio (OAB/BA 46.638).
          </p>

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
              <span>{displayLawyers.length} assistentes virtuais online 24/7</span>
            </div>
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
            className="relative overflow-hidden py-4 max-w-full"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-6 animate-marquee hover:pause-marquee will-change-transform">
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

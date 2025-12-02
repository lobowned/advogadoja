import { useState } from "react";
import { lawyers } from "@/data/lawyers";
import { useLawyerPresence } from "@/contexts/LawyerPresenceContext";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import Autoplay from "embla-carousel-autoplay";

// Componente de Card reutilizável
const LawyerCard = ({ lawyer }: { lawyer: typeof lawyers[0] }) => (
  <Card className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 overflow-hidden border-muted flex-shrink-0 w-full md:w-72 bg-card/80 backdrop-blur-sm border border-border/50">
    <CardHeader className="text-center pb-3 sm:pb-4 px-4 sm:px-6">
      <div className="relative mx-auto mb-3 sm:mb-4">
        <Avatar className="w-20 h-20 sm:w-24 sm:h-24 border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
          <AvatarImage src={lawyer.photo} alt={lawyer.name} />
          <AvatarFallback className="text-lg sm:text-xl font-bold bg-primary/10 text-primary">
            {lawyer.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-2 -right-2 w-5 h-5 sm:w-6 sm:h-6 bg-green-500 rounded-full border-4 border-card animate-pulse" />
      </div>
      <h3 className="font-bold text-base sm:text-lg leading-tight group-hover:text-primary transition-colors">
        {lawyer.name}
      </h3>
    </CardHeader>

    <CardContent className="space-y-2 sm:space-y-3 px-4 sm:px-6">
      <Badge variant="secondary" className="w-full justify-center font-medium text-xs sm:text-sm">
        {lawyer.subSpecialty}
      </Badge>

      <p className="text-xs sm:text-sm text-muted-foreground line-clamp-3 leading-relaxed">
        {lawyer.bio}
      </p>

      <div className="pt-2 border-t border-border/50">
        <Badge variant="outline" className="w-full justify-center text-[10px] sm:text-xs">
          {lawyer.oab}
        </Badge>
      </div>
    </CardContent>
  </Card>
);

const LawyersShowcase = () => {
  const isMobile = useIsMobile();
  const { onlineLawyers } = useLawyerPresence();
  const displayLawyers = onlineLawyers.filter((l) => l.specialty !== "geral");

  return (
    <section className="py-10 sm:py-16 px-2 sm:px-4 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Nossa Equipe de Especialistas
        </h2>
        {/* Carrossel Responsivo */}
        {isMobile ? (
          /* Mobile: Embla Carousel com Swipe */
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
              {displayLawyers.map((lawyer) => (
                <CarouselItem key={lawyer.id} className="basis-full">
                  <LawyerCard lawyer={lawyer} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        ) : (
          /* Desktop: Marquee Infinito */
          <div className="relative overflow-hidden py-4">
            <div className="flex gap-6 animate-marquee hover:pause-marquee">
              {/* Cards originais */}
              {displayLawyers.map((lawyer) => (
                <LawyerCard key={lawyer.id} lawyer={lawyer} />
              ))}
              
              {/* Cards duplicados para loop infinito */}
              {displayLawyers.map((lawyer) => (
                <LawyerCard key={`duplicate-${lawyer.id}`} lawyer={lawyer} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default LawyersShowcase;

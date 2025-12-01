import { useState } from "react";
import { lawyers } from "@/data/lawyers";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { Scale, Briefcase, Heart, Shield, Users, Home } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";

type SpecialtyFilter = "all" | "familia" | "trabalhista" | "civil" | "previdenciario" | "penal";

const specialtyFilters = [
  { value: "all" as SpecialtyFilter, label: "Todos", icon: Home },
  { value: "familia" as SpecialtyFilter, label: "Família", icon: Heart },
  { value: "trabalhista" as SpecialtyFilter, label: "Trabalhista", icon: Briefcase },
  { value: "civil" as SpecialtyFilter, label: "Civil", icon: Scale },
  { value: "previdenciario" as SpecialtyFilter, label: "Previdenciário", icon: Shield },
  { value: "penal" as SpecialtyFilter, label: "Penal", icon: Users },
];

// Componente de Card reutilizável
const LawyerCard = ({ lawyer }: { lawyer: typeof lawyers[0] }) => (
  <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border-muted flex-shrink-0 w-full md:w-72">
    <CardHeader className="text-center pb-4">
      <div className="relative mx-auto mb-4">
        <Avatar className="w-24 h-24 border-4 border-primary/20 group-hover:border-primary/40 transition-colors">
          <AvatarImage src={lawyer.photo} alt={lawyer.name} />
          <AvatarFallback className="text-xl font-bold bg-primary/10 text-primary">
            {lawyer.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
          </AvatarFallback>
        </Avatar>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-card animate-pulse" />
      </div>
      <h3 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">
        {lawyer.name}
      </h3>
    </CardHeader>

    <CardContent className="space-y-3">
      <Badge variant="secondary" className="w-full justify-center font-medium">
        {lawyer.subSpecialty}
      </Badge>

      <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
        {lawyer.bio}
      </p>

      <div className="pt-2 border-t border-border/50">
        <Badge variant="outline" className="w-full justify-center text-xs">
          {lawyer.oab}
        </Badge>
      </div>
    </CardContent>
  </Card>
);

const LawyersShowcase = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState<SpecialtyFilter>("all");
  const isMobile = useIsMobile();

  const filteredLawyers =
    selectedSpecialty === "all"
      ? lawyers.filter((l) => l.specialty !== "geral")
      : lawyers.filter((l) => l.specialty === selectedSpecialty);

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Nossa Equipe de Especialistas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            35 advogados altamente qualificados prontos para defender seus direitos
          </p>
        </div>

        {/* Filtros */}
        <div className="flex flex-wrap gap-2 justify-center mb-12 animate-fade-in">
          {specialtyFilters.map((filter) => {
            const Icon = filter.icon;
            return (
              <Button
                key={filter.value}
                variant={selectedSpecialty === filter.value ? "default" : "outline"}
                onClick={() => setSelectedSpecialty(filter.value)}
                className="transition-all duration-300 hover-scale"
              >
                <Icon className="w-4 h-4 mr-2" />
                {filter.label}
              </Button>
            );
          })}
        </div>

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
              {filteredLawyers.map((lawyer) => (
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
              {filteredLawyers.map((lawyer) => (
                <LawyerCard key={lawyer.id} lawyer={lawyer} />
              ))}
              
              {/* Cards duplicados para loop infinito */}
              {filteredLawyers.map((lawyer) => (
                <LawyerCard key={`duplicate-${lawyer.id}`} lawyer={lawyer} />
              ))}
            </div>
          </div>
        )}

        {/* Contador */}
        <div className="text-center mt-12 animate-fade-in">
          <p className="text-muted-foreground">
            Exibindo <span className="font-bold text-primary">{filteredLawyers.length}</span>{" "}
            {filteredLawyers.length === 1 ? "advogado" : "advogados"}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LawyersShowcase;

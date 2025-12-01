import { Play, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const VideoSection = () => {
  const benefits = [
    "Como evitar prejuízos, riscos e perdas irreversíveis",
    "A diferença entre 'achar que tem direitos' e provar juridicamente",
    "O método utilizado para proteger você, sua família ou sua empresa",
    "Por que a estratégia jurídica muda completamente o resultado final",
    "Como diminuir custos, desgastes emocionais e tempo perdido"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Antes de tomar qualquer decisão, entenda:
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground px-4">
            Seu caso pode ter uma solução muito mais rápida, segura e estratégica do que você imagina.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Benefits List - Primeiro em mobile */}
          <div className="space-y-3 sm:space-y-4 order-2 md:order-1">
            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4 sm:mb-6">
              No vídeo ao lado, você vai descobrir:
            </h3>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-2 sm:gap-3 items-start">
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-muted-foreground">{benefit}</p>
              </div>
            ))}
            <div className="pt-3 sm:pt-4">
              <Button size="lg" variant="outline" className="w-full h-11 sm:h-12 text-sm sm:text-base">
                Assista agora
              </Button>
            </div>
          </div>

          {/* Video Placeholder - Segundo em mobile */}
          <div className="relative aspect-video bg-gradient-to-br from-primary to-primary/80 rounded-lg overflow-hidden shadow-elegant group cursor-pointer order-1 md:order-2">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 sm:p-6 group-hover:scale-110 transition-transform">
                <Play className="h-10 w-10 sm:h-12 sm:w-12 text-white fill-white" />
              </div>
            </div>
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
              <p className="text-xs sm:text-sm font-medium">Assista ao vídeo explicativo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Antes de tomar qualquer decisão, entenda:
          </h2>
          <p className="text-lg text-muted-foreground">
            Seu caso pode ter uma solução muito mais rápida, segura e estratégica do que você imagina.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          {/* Video Placeholder */}
          <div className="relative aspect-video bg-gradient-to-br from-primary to-primary/80 rounded-lg overflow-hidden shadow-elegant group cursor-pointer">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform">
                <Play className="h-12 w-12 text-white fill-white" />
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <p className="text-sm font-medium">Assista ao vídeo explicativo</p>
            </div>
          </div>

          {/* Benefits List */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground mb-6">
              No vídeo acima, você vai descobrir:
            </h3>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-muted-foreground">{benefit}</p>
              </div>
            ))}
            <div className="pt-4">
              <Button size="lg" variant="outline" className="w-full md:w-auto">
                Assista agora
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const OfferBox = () => {
  const offerings = [
    "Avaliação completa do seu caso",
    "Plano jurídico estratégico personalizado",
    "Acompanhamento ativo e constante",
    "Orientações claras e objetivas",
    "Representação em órgãos judiciais e administrativos",
    "Negociação e busca por acordos vantajosos",
    "Sigilo absoluto e confidencialidade",
    "Suporte jurídico contínuo",
    "Defesa técnica fundamentada e atualizada"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              A Oferta Completa
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
              O que você recebe ao contratar o escritório
            </p>
          </div>

          <div className="bg-gradient-to-br from-card to-card/50 border-2 border-primary/20 rounded-lg p-6 sm:p-8 md:p-12 shadow-elegant">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {offerings.map((item, index) => (
                <div key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-border pt-6 sm:pt-8">
              <p className="text-base sm:text-lg text-center text-foreground font-semibold mb-4 sm:mb-6">
                Você não recebe "uma consulta".<br />
                <span className="text-primary">Você recebe um parceiro jurídico comprometido com seu resultado.</span>
              </p>
              
              <div className="text-center">
                <Button size="lg" className="h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 text-base sm:text-lg">
                  Quero garantir meu atendimento agora
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferBox;

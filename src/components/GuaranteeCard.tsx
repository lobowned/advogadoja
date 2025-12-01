import { ShieldCheck, CheckCircle2 } from "lucide-react";

const GuaranteeCard = () => {
  const guarantees = [
    "Atendimento transparente e honesto",
    "Estratégia clara e bem fundamentada",
    "Comunicação contínua durante todo o processo",
    "Definição realista de caminhos possíveis",
    "Defesa firme, ética e comprometida"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary rounded-lg p-6 sm:p-8 md:p-12 shadow-elegant">
            <div className="flex items-center justify-center mb-4 sm:mb-6">
              <div className="bg-primary text-primary-foreground rounded-full p-3 sm:p-4">
                <ShieldCheck className="h-10 w-10 sm:h-12 sm:w-12" />
              </div>
            </div>

            <div className="text-center mb-6 sm:mb-8">
              <div className="inline-block bg-primary text-primary-foreground px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold mb-3 sm:mb-4">
                GARANTIA DE COMPROMISSO
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 sm:mb-4">
                Embora a advocacia não permita garantia de resultado...
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-foreground">
                Oferecemos algo mais importante:
              </p>
            </div>

            <div className="bg-card rounded-lg p-5 sm:p-6 md:p-8 mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-primary text-center mb-4 sm:mb-6">
                Garantia de Ética, Compromisso e Dedicação Total
              </h3>
              
              <div className="space-y-3 sm:space-y-4">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-foreground font-medium">{guarantee}</span>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-center text-sm sm:text-base text-muted-foreground italic">
              Seu caso será tratado com a máxima responsabilidade e profissionalismo que ele merece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeCard;

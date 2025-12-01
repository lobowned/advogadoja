import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComparisonTable = () => {
  const withLawyer = [
    "Atendimento direto e personalizado",
    "Estratégia jurídica sob medida",
    "Sigilo absoluto garantido",
    "Suporte contínuo durante todo o processo",
    "Atuação em múltiplas áreas do direito",
    "Defesa técnica firme e fundamentada",
    "Experiência comprovada em casos similares",
    "Orientação preventiva para evitar problemas futuros"
  ];

  const withoutLawyer = [
    "Falta de orientação especializada",
    "Riscos jurídicos desnecessários",
    "Decisões precipitadas e mal fundamentadas",
    "Perda de prazos processuais importantes",
    "Insegurança constante sobre o que fazer",
    "Acordos desfavoráveis por falta de conhecimento",
    "Prejuízos financeiros e emocionais irreversíveis",
    "Desproteção legal da família e patrimônio"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Compare: Com vs Sem Assessoria Jurídica
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            A diferença é clara — veja o que está em jogo
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* With Lawyer */}
          <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 border-2 border-green-500/30 rounded-lg p-6 sm:p-8 shadow-elegant relative">
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                RECOMENDADO
              </div>
            </div>

            <div className="text-center mb-6 sm:mb-8 mt-3 sm:mt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Com o Escritório
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Proteção, estratégia e segurança
              </p>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {withLawyer.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-green-600/10 rounded-lg border border-green-600/20">
              <p className="text-xs sm:text-sm font-semibold text-green-700 text-center">
                ✓ Investimento que protege seu futuro
              </p>
            </div>
          </div>

          {/* Without Lawyer */}
          <div className="bg-gradient-to-br from-red-500/5 to-red-500/10 border-2 border-red-500/20 rounded-lg p-6 sm:p-8 relative opacity-90">
            <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-red-600 text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                RISCO ALTO
              </div>
            </div>

            <div className="text-center mb-6 sm:mb-8 mt-3 sm:mt-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">
                Sem o Escritório
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Riscos, incertezas e vulnerabilidade
              </p>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {withoutLawyer.map((item, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <X className="h-5 w-5 sm:h-6 sm:w-6 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-red-500/10 rounded-lg border border-red-500/20">
              <p className="text-xs sm:text-sm font-semibold text-red-700 text-center">
                ✗ Prejuízos podem ser irreversíveis
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-6 px-4">
            A escolha é clara. Proteja-se agora.
          </p>
          <Button size="lg" className="h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 text-base sm:text-lg">
            Sim, preciso de proteção jurídica
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;

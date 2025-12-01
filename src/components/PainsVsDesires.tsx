import { X, CheckCircle2 } from "lucide-react";

const PainsVsDesires = () => {
  const pains = [
    "Medo de perder direitos importantes",
    "Insegurança jurídica constante",
    "Falta de clareza sobre o que fazer",
    "Risco financeiro e patrimonial",
    "Pressão emocional e ansiedade",
    "Traumas de experiências anteriores com advogados"
  ];

  const desires = [
    "Resolver o problema de forma definitiva",
    "Recuperar a tranquilidade e segurança",
    "Ter alguém experiente ao seu lado",
    "Saber exatamente o que fazer",
    "Proteger a família e o patrimônio",
    "Sentir confiança no processo"
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Transforme Suas Dores em Conquistas
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Entendemos o que você está passando e sabemos exatamente como ajudar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Pains */}
          <div className="bg-gradient-to-br from-red-500/5 to-red-500/10 border-2 border-red-500/20 rounded-lg p-6 sm:p-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="bg-red-500/20 rounded-full p-2 sm:p-3">
                <X className="h-5 w-5 sm:h-6 sm:w-6 text-red-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Suas Dores Atuais
              </h3>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {pains.map((pain, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <X className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-muted-foreground">{pain}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-red-500/5 rounded-lg border border-red-500/20">
              <p className="text-xs sm:text-sm text-muted-foreground italic">
                Essas são preocupações reais que afetam sua vida diariamente
              </p>
            </div>
          </div>

          {/* Desires */}
          <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 border-2 border-green-500/20 rounded-lg p-6 sm:p-8">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="bg-green-500/20 rounded-full p-2 sm:p-3">
                <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Seus Objetivos
              </h3>
            </div>

            <ul className="space-y-3 sm:space-y-4">
              {desires.map((desire, index) => (
                <li key={index} className="flex items-start gap-2 sm:gap-3">
                  <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-foreground font-medium">{desire}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-green-500/5 rounded-lg border border-green-500/20">
              <p className="text-xs sm:text-sm font-semibold text-green-700">
                ✓ Tudo isso é possível com a estratégia jurídica correta
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <div className="inline-block bg-gradient-to-r from-red-500/10 to-green-500/10 border border-primary rounded-lg p-4 sm:p-6 max-w-2xl mx-4">
            <p className="text-base sm:text-lg font-semibold text-foreground">
              A diferença entre viver com essas dores e alcançar seus objetivos é ter o 
              <span className="text-primary"> suporte jurídico especializado</span> ao seu lado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainsVsDesires;

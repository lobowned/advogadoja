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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Transforme Suas Dores em Conquistas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Entendemos o que você está passando e sabemos exatamente como ajudar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Pains */}
          <div className="bg-gradient-to-br from-red-500/5 to-red-500/10 border-2 border-red-500/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-red-500/20 rounded-full p-3">
                <X className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Suas Dores Atuais
              </h3>
            </div>

            <ul className="space-y-4">
              {pains.map((pain, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground">{pain}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-red-500/5 rounded-lg border border-red-500/20">
              <p className="text-sm text-muted-foreground italic">
                Essas são preocupações reais que afetam sua vida diariamente
              </p>
            </div>
          </div>

          {/* Desires */}
          <div className="bg-gradient-to-br from-green-500/5 to-green-500/10 border-2 border-green-500/20 rounded-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-500/20 rounded-full p-3">
                <CheckCircle2 className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">
                Seus Objetivos
              </h3>
            </div>

            <ul className="space-y-4">
              {desires.map((desire, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{desire}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-green-500/5 rounded-lg border border-green-500/20">
              <p className="text-sm font-semibold text-green-700">
                ✓ Tudo isso é possível com a estratégia jurídica correta
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="inline-block bg-gradient-to-r from-red-500/10 to-green-500/10 border border-primary rounded-lg p-6 max-w-2xl">
            <p className="text-lg font-semibold text-foreground">
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

import { Search, Target, CheckCircle2 } from "lucide-react";

const ProcessSteps = () => {
  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Análise Técnica Aprofundada",
      description: "Examinamos cada detalhe, documentos, riscos e oportunidades.",
      subtitle: "Aqui definimos o cenário real — sem ilusões e sem promessas vazias."
    },
    {
      number: "2",
      icon: Target,
      title: "Estratégia Jurídica Personalizada",
      description: "Com base na legislação e jurisprudência atualizada, criamos o plano completo:",
      items: ["Melhor caminho", "Probabilidades", "Tempo estimado", "Ações imediatas", "Alternativas extrajudiciais e judiciais"]
    },
    {
      number: "3",
      icon: CheckCircle2,
      title: "Acompanhamento Contínuo",
      description: "Você recebe acompanhamento direto, atualizações constantes e segurança em cada passo."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Como Funciona na Prática
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ao entrar em contato, seu caso passa por um processo estruturado em 3 etapas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative bg-gradient-to-br from-card to-card/50 border border-border rounded-lg p-8 shadow-card hover:shadow-elegant transition-all group"
              >
                <div className="absolute -top-4 left-8 bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg shadow-button">
                  {step.number}
                </div>
                
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {step.description}
                </p>

                {step.subtitle && (
                  <p className="text-sm text-muted-foreground italic">
                    {step.subtitle}
                  </p>
                )}

                {step.items && (
                  <ul className="space-y-2 mt-4">
                    {step.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;

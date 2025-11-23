import { AlertCircle, Shield, Building2 } from "lucide-react";

const ForWhoSection = () => {
  const audiences = [
    {
      icon: AlertCircle,
      title: "Pessoas com Problemas Urgentes",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      items: [
        "Processos em andamento",
        "Separações e divórcios",
        "Ações trabalhistas",
        "Conflitos familiares",
        "Dívidas e cobranças",
        "Bloqueios, multas ou riscos imediatos"
      ]
    },
    {
      icon: Shield,
      title: "Pessoas que Buscam Prevenção",
      color: "text-primary",
      bgColor: "bg-primary/10",
      items: [
        "Contratos e acordos",
        "Negociações importantes",
        "Proteção patrimonial",
        "Orientação para decisões críticas",
        "Planejamento sucessório",
        "Consultas preventivas"
      ]
    },
    {
      icon: Building2,
      title: "Empresas e Empreendedores",
      color: "text-amber-500",
      bgColor: "bg-amber-500/10",
      items: [
        "Consultoria jurídica contínua",
        "Acompanhamento de demandas",
        "Gestão de riscos legais",
        "Estratégias para crescimento seguro",
        "Contratos empresariais",
        "Compliance e adequações"
      ]
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Para Quem É o Serviço?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Este escritório é ideal para diferentes perfis e necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 shadow-card hover:shadow-elegant transition-all"
              >
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-full ${audience.bgColor}`}>
                  <Icon className={`h-8 w-8 ${audience.color}`} />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-6">
                  {audience.title}
                </h3>

                <ul className="space-y-3">
                  {audience.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`h-1.5 w-1.5 rounded-full ${audience.color} mt-2 flex-shrink-0`} />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;

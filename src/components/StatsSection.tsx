import { TrendingUp, Target, Clock, DollarSign, Scale } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "70%",
      label: "dos litígios poderiam ser evitados com orientação correta"
    },
    {
      icon: Target,
      value: "90%",
      label: "dos casos são vencidos pela melhor estratégia, não pela emoção"
    },
    {
      icon: Clock,
      value: "Anos",
      label: "podem ser perdidos com decisões jurídicas erradas"
    },
    {
      icon: Scale,
      value: "100%",
      label: "da legislação muda constantemente — agir sem orientação aumenta o risco"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por Que Você Precisa de Assessoria Especializada?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Dados incontestáveis que provam a importância da orientação jurídica profissional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 shadow-card hover:shadow-elegant transition-all text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-primary/10 rounded-full p-4">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                </div>
                
                <div className="text-4xl font-bold text-primary mb-3">
                  {stat.value}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto bg-card border-2 border-primary/20 rounded-lg p-8 text-center shadow-elegant">
          <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Advogado Não É Gasto: É Investimento
          </h3>
          <p className="text-lg text-muted-foreground">
            Investir em proteção e estratégia jurídica evita prejuízos financeiros, emocionais e temporais muito maiores. 
            A prevenção e atuação especializada são sempre mais econômicas que a correção de erros.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

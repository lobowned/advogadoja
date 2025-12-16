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
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary/5 to-primary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Por Que Você Precisa de Assessoria Especializada?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            Dados incontestáveis que provam a importância da orientação jurídica profissional
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="gradient-border-hover border border-border rounded-lg p-4 sm:p-6 shadow-card text-center"
              >
                <div className="flex justify-center mb-3 sm:mb-4">
                  <div className="bg-primary/10 rounded-full p-3 sm:p-4">
                    <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                  </div>
                </div>
                
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-2 sm:mb-3">
                  {stat.value}
                </div>
                
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto bg-card border-2 border-primary/20 rounded-lg p-6 sm:p-8 text-center shadow-elegant">
          <DollarSign className="h-10 w-10 sm:h-12 sm:w-12 text-primary mx-auto mb-3 sm:mb-4" />
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">
            Advogado Não É Gasto: É Investimento
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground">
            Investir em proteção e estratégia jurídica evita prejuízos financeiros, emocionais e temporais muito maiores. 
            A prevenção e atuação especializada são sempre mais econômicas que a correção de erros.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

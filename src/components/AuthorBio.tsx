import { Award, BookOpen, Users, TrendingUp } from "lucide-react";

const AuthorBio = () => {
  const credentials = [
    {
      icon: Award,
      text: "Mais de 15 anos de experiência"
    },
    {
      icon: Users,
      text: "Centenas de casos resolvidos"
    },
    {
      icon: BookOpen,
      text: "Especialização contínua"
    },
    {
      icon: TrendingUp,
      text: "Alta taxa de sucesso"
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Image */}
            <div className="order-2 md:order-1">
              <div className="aspect-square sm:aspect-[3/4] bg-gradient-to-br from-primary to-primary/80 rounded-lg shadow-elegant relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white/30 text-7xl sm:text-8xl md:text-9xl font-bold">
                    Dr.
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 sm:p-6">
                  <p className="text-white font-semibold text-base sm:text-lg">Advogado Especializado</p>
                  <p className="text-white/80 text-xs sm:text-sm">OAB/XX 000.000</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Advogado Dedicado à Sua Proteção Jurídica
              </h2>
              
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
                Advogado com sólida experiência em diversas áreas do Direito, atuando em casos complexos, 
                negociações estratégicas e processos de alta responsabilidade.
              </p>

              <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Cada caso é tratado como único — com foco total na melhor solução possível. 
                A missão é transformar insegurança jurídica em clareza, estratégia e proteção real.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {credentials.map((credential, index) => {
                  const Icon = credential.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 sm:gap-3 bg-muted/50 rounded-lg p-3 sm:p-4"
                    >
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-foreground">
                        {credential.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 sm:p-6">
                <p className="text-sm sm:text-base text-foreground font-medium">
                  "Reputação baseada em ética, clareza e estratégia. 
                  Atuação em causas de grande impacto com estudo avançado da jurisprudência."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;

import { useNavigate } from "react-router-dom";
import { legalNiches } from "@/data/legal-niches";
import { Card } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

const NicheSelector = () => {
  const navigate = useNavigate();

  const handleNicheClick = (nicheId: string) => {
    navigate(`/selecionar-acao/${nicheId}`);
  };

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12 animate-fade-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 sm:mb-4">
            Qual área jurídica você precisa?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Selecione o nicho que melhor se aplica ao seu caso para começarmos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {legalNiches.map((niche, index) => {
            const Icon: LucideIcon = niche.icon;
            return (
              <Card
                key={niche.id}
                onClick={() => handleNicheClick(niche.id)}
                className="group cursor-pointer overflow-hidden border-2 border-border bg-card hover:border-primary hover:shadow-card-hover transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4">
                  <div className={`mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${niche.color}`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-base sm:text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {niche.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-3 line-clamp-2">
                      {niche.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 px-2.5 sm:px-3 py-1 rounded-full">
                      {niche.actions.length} {niche.actions.length === 1 ? 'ação' : 'ações'}
                    </div>
                  </div>

                  <div className="pt-2 text-xs sm:text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Selecionar →
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8 sm:mt-10 text-xs sm:text-sm text-muted-foreground px-4">
          <p>Não encontrou o que procura? Entre em contato conosco para orientação personalizada</p>
        </div>
      </div>
    </section>
  );
};

export default NicheSelector;

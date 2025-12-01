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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Qual área jurídica você precisa?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Selecione o nicho que melhor se aplica ao seu caso para começarmos
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {legalNiches.map((niche, index) => {
            const Icon: LucideIcon = niche.icon;
            return (
              <Card
                key={niche.id}
                onClick={() => handleNicheClick(niche.id)}
                className="group cursor-pointer overflow-hidden border-2 border-border bg-card hover:border-primary hover:shadow-card-hover transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6 text-center space-y-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${niche.color}`}>
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                      {niche.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                      {niche.description}
                    </p>
                    <div className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {niche.actions.length} {niche.actions.length === 1 ? 'ação' : 'ações'}
                    </div>
                  </div>

                  <div className="pt-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Selecionar →
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-10 text-sm text-muted-foreground">
          <p>Não encontrou o que procura? Entre em contato conosco para orientação personalizada</p>
        </div>
      </div>
    </section>
  );
};

export default NicheSelector;

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
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Selecione sua área
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {legalNiches.map((niche, index) => {
            const Icon: LucideIcon = niche.icon;
            return (
              <Card
                key={niche.id}
                onClick={() => handleNicheClick(niche.id)}
                className="cursor-pointer border-2 border-border bg-card hover:border-primary transition-colors"
              >
                <div className="p-4 sm:p-6 text-center space-y-3">
                  <div className={`mx-auto w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-muted/50 flex items-center justify-center ${niche.color}`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                  
                  <h3 className="font-bold text-base sm:text-lg text-foreground">
                    {niche.name}
                  </h3>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default NicheSelector;

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";
import { legalNiches } from "@/data/legal-niches";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

const SelectAction = () => {
  const navigate = useNavigate();
  const { nicheId } = useParams<{ nicheId: string }>();

  const niche = legalNiches.find((n) => n.id === nicheId);

  if (!niche) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Nicho não encontrado</h1>
          <button
            onClick={() => navigate("/selecionar-nicho")}
            className="text-primary hover:underline"
          >
            Voltar para seleção de nichos
          </button>
        </div>
      </div>
    );
  }

  const Icon = niche.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <BreadcrumbNav 
            items={[
              { label: "Início", href: "/" },
              { label: "Selecionar Nicho", href: "/selecionar-nicho" },
              { label: niche.name }
            ]}
            className="mb-3 sm:mb-4"
          />
          <div className="flex items-center gap-3 sm:gap-4">
            <div className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-lg bg-muted ${niche.color}`}>
              <Icon className="h-6 w-6 sm:h-7 sm:w-7" />
            </div>
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
                {niche.name}
              </h1>
              <p className="mt-1 text-xs sm:text-sm md:text-base text-muted-foreground">{niche.description}</p>
            </div>
          </div>
          <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-muted-foreground">
            Selecione a situação que melhor descreve o seu caso
          </p>
        </div>
      </header>

      {/* Action Cards */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {niche.actions.map((action) => (
            <Card
              key={action.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-card-hover min-h-[44px]"
              onClick={() => navigate(`/questionario/${nicheId}/${action.id}`)}
            >
              <div className="p-4 sm:p-6">
                <div className="mb-3 sm:mb-4 flex items-start justify-between gap-2">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {action.name}
                  </h3>
                  {action.commonCase && (
                    <Badge variant="secondary" className="shrink-0 text-xs">
                      Comum
                    </Badge>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {action.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Todas as informações fornecidas são sigilosas e protegidas</p>
        </div>
      </footer>
    </div>
  );
};

export default SelectAction;

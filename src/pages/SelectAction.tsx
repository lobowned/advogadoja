import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate, useParams } from "react-router-dom";
import { legalNiches } from "@/data/legal-niches";
import { ArrowLeft } from "lucide-react";

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
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={() => navigate("/selecionar-nicho")}
            className="mb-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para nichos
          </button>
          <div className="flex items-center gap-4">
            <div className={`flex h-14 w-14 items-center justify-center rounded-lg bg-muted ${niche.color}`}>
              <Icon className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                {niche.name}
              </h1>
              <p className="mt-1 text-muted-foreground">{niche.description}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            Selecione a situação que melhor descreve o seu caso
          </p>
        </div>
      </header>

      {/* Action Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {niche.actions.map((action) => (
            <Card
              key={action.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-card-hover"
              onClick={() => navigate(`/questionario/${nicheId}/${action.id}`)}
            >
              <div className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {action.name}
                  </h3>
                  {action.commonCase && (
                    <Badge variant="secondary" className="ml-2 shrink-0 text-xs">
                      Comum
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">
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

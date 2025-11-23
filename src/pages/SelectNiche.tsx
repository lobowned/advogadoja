import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { legalNiches } from "@/data/legal-niches";
import { ArrowLeft } from "lucide-react";

const SelectNiche = () => {
  const navigate = useNavigate();

  const handleNicheSelect = (nicheId: string) => {
    navigate(`/selecionar-acao/${nicheId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <button
            onClick={() => navigate("/")}
            className="mb-4 flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para página inicial
          </button>
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">
            Qual área jurídica você precisa?
          </h1>
          <p className="mt-2 text-muted-foreground">
            Selecione o nicho jurídico que melhor se aplica ao seu caso
          </p>
        </div>
      </header>

      {/* Niche Cards */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {legalNiches.map((niche) => {
            const Icon = niche.icon;
            return (
              <Card
                key={niche.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-card-hover"
                onClick={() => handleNicheSelect(niche.id)}
              >
                <div className="p-6">
                  <div className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-primary/10 ${niche.color}`}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <div className="mb-3">
                    <h3 className="mb-1 text-xl font-semibold text-foreground">
                      {niche.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {niche.description}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      {niche.actions.length} tipos de ação disponíveis
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
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

export default SelectNiche;

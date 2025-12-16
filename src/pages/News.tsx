import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Newspaper, Scale, Heart, Users, Shield, Gavel, RefreshCw } from "lucide-react";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { NewsCard } from "@/components/NewsCard";
import { useNews } from "@/hooks/useNews";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const nicheInfo: Record<string, { label: string; icon: React.ElementType; description: string }> = {
  trabalhista: {
    label: "Direito Trabalhista",
    icon: Users,
    description: "Notícias sobre demissão, CLT, FGTS, hora extra e direitos do trabalhador"
  },
  familia: {
    label: "Direito de Família",
    icon: Heart,
    description: "Notícias sobre divórcio, pensão alimentícia, guarda de filhos e herança"
  },
  civil: {
    label: "Direito Civil",
    icon: Scale,
    description: "Notícias sobre contratos, indenização, dano moral e direito do consumidor"
  },
  previdenciario: {
    label: "Direito Previdenciário",
    icon: Shield,
    description: "Notícias sobre INSS, aposentadoria, BPC e benefícios previdenciários"
  },
  penal: {
    label: "Direito Penal",
    icon: Gavel,
    description: "Notícias sobre crimes, processos penais e defesa criminal"
  }
};

const niches = Object.keys(nicheInfo);

export default function News() {
  const { nicheId } = useParams();
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  const { data: news, isLoading, refetch } = useNews({
    nicheId: nicheId,
    limit: 50
  });

  const handleRefresh = async () => {
    setIsRefreshing(true);
    try {
      const { data, error } = await supabase.functions.invoke('fetch-legal-news');
      
      if (error) throw error;
      
      toast.success(`Notícias atualizadas! ${data.stats?.inserted || 0} novas notícias.`);
      refetch();
    } catch (error) {
      console.error('Error refreshing news:', error);
      toast.error('Erro ao atualizar notícias. Tente novamente.');
    } finally {
      setIsRefreshing(false);
    }
  };

  const currentNiche = nicheId ? nicheInfo[nicheId] : null;
  const NicheIcon = currentNiche?.icon || Newspaper;

  const pageTitle = currentNiche 
    ? `Notícias de ${currentNiche.label} | Advogado Online`
    : "Notícias Jurídicas | Advogado Online";

  const pageDescription = currentNiche
    ? currentNiche.description
    : "Fique por dentro das principais notícias jurídicas do Brasil. Atualizações semanais de fontes oficiais como STF, STJ, TST e Conjur.";

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <link rel="canonical" href={`https://advogadoonline.com.br/noticias${nicheId ? `/${nicheId}` : ''}`} />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary text-primary-foreground py-8 sm:py-12">
          <div className="container mx-auto px-4">
            <BackButton 
              to={nicheId ? "/noticias" : "/"} 
              label={nicheId ? "Todas as notícias" : "Voltar ao início"} 
              variant="light"
              className="mb-4"
            />
            
            <div className="flex items-start sm:items-center gap-3 sm:gap-4">
              <NicheIcon className="h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0" />
              <div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                  {currentNiche ? `Notícias de ${currentNiche.label}` : 'Notícias Jurídicas'}
                </h1>
                <p className="text-primary-foreground/80 mt-1 sm:mt-2 max-w-2xl text-sm sm:text-base">
                  {pageDescription}
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <Link to="/noticias">
              <Badge 
                variant={!nicheId ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary/90 transition-colors px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm min-h-[36px] flex items-center"
              >
                Todas
              </Badge>
            </Link>
            {niches.map((niche) => {
              const info = nicheInfo[niche];
              const Icon = info.icon;
              return (
                <Link key={niche} to={`/noticias/${niche}`}>
                  <Badge 
                    variant={nicheId === niche ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/90 transition-colors px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1 text-xs sm:text-sm min-h-[36px]"
                  >
                    <Icon className="h-3 w-3" />
                    <span className="hidden xs:inline">{info.label}</span>
                    <span className="xs:hidden">{info.label.replace('Direito ', '')}</span>
                  </Badge>
                </Link>
              );
            })}
            
            <div className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">
              <Button 
                variant="outline" 
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="w-full sm:w-auto min-h-[44px]"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Atualizar
              </Button>
            </div>
          </div>

          {/* News Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-2/3" />
                </div>
              ))}
            </div>
          ) : news && news.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Newspaper className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">Nenhuma notícia encontrada</h2>
              <p className="text-muted-foreground mb-6">
                {nicheId 
                  ? `Ainda não temos notícias de ${currentNiche?.label}. Clique em "Atualizar" para buscar as últimas notícias.`
                  : 'Clique em "Atualizar" para buscar as últimas notícias jurídicas.'}
              </p>
              <Button onClick={handleRefresh} disabled={isRefreshing}>
                <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Buscar Notícias
              </Button>
            </div>
          )}

          {/* Back to articles */}
          <div className="mt-12 pt-8 border-t border-border">
            <BackButton to="/artigos" label="Ver Artigos do Blog" />
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-muted py-8 mt-12">
          <div className="container mx-auto px-4 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} Advogado Online. Todos os direitos reservados.</p>
            <p className="text-sm mt-2">
              Notícias atualizadas semanalmente de fontes oficiais.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Newspaper, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useNews } from "@/hooks/useNews";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

const nicheLabels: Record<string, string> = {
  trabalhista: "Trabalhista",
  familia: "Família",
  previdenciario: "Previdenciário",
  consumidor: "Consumidor",
  civil: "Civil",
  penal: "Penal",
};

const nicheColors: Record<string, string> = {
  trabalhista: "bg-blue-500/10 text-blue-600 border-blue-500/20",
  familia: "bg-pink-500/10 text-pink-600 border-pink-500/20",
  previdenciario: "bg-green-500/10 text-green-600 border-green-500/20",
  consumidor: "bg-orange-500/10 text-orange-600 border-orange-500/20",
  civil: "bg-purple-500/10 text-purple-600 border-purple-500/20",
  penal: "bg-red-500/10 text-red-600 border-red-500/20",
};

const decodeHtmlEntities = (text: string): string => {
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

interface NewsSectionProps {
  nicheId?: string;
  title?: string;
  subtitle?: string;
}

const NewsSection = ({ nicheId, title, subtitle }: NewsSectionProps = {}) => {
  const { data: news, isLoading } = useNews({ nicheId, limit: 6 });

  if (isLoading) {
    return (
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12 px-2">
            <Skeleton className="h-8 w-48 mx-auto mb-4" />
            <Skeleton className="h-10 w-80 mx-auto mb-3" />
            <Skeleton className="h-5 w-64 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-5 w-20" />
                  </div>
                  <Skeleton className="h-3 w-24 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!news || news.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 px-2">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Newspaper className="w-4 h-4" />
            Aconteceu Agora
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            {title ?? "O Que Mudou na Lei e Afeta Você"}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-2 sm:px-0">
            {subtitle ?? "Novas leis, decisões importantes e mudanças que podem impactar seu bolso, seu trabalho e sua família. Atualizado diariamente."}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {news.slice(0, 6).map((article) => (
            <a
              key={article.id}
              href={article.original_link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card group overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-1.5 mb-1.5">
                        <span className="text-xs bg-amber-500/10 text-amber-600 px-2 py-0.5 rounded-full font-medium">
                          📰 Notícia
                        </span>
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${nicheColors[article.niche_id] || "bg-muted text-muted-foreground"}`}
                        >
                          {nicheLabels[article.niche_id] || article.niche_id}
                        </Badge>
                      </div>
                      
                      {article.published_at && (
                        <p className="text-xs text-muted-foreground mb-1">
                          <span className="font-medium text-foreground/70">
                            {format(new Date(article.published_at), "dd 'de' MMM", { locale: ptBR })}
                          </span>
                          {" • "}
                          <span>{article.source}</span>
                        </p>
                      )}
                      
                      <h3 className="font-semibold text-foreground text-sm leading-tight line-clamp-2 group-hover:text-primary transition-colors">
                        {decodeHtmlEntities(article.title)}
                      </h3>
                    </div>
                    
                    <ExternalLink className="w-4 h-4 text-muted-foreground flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/noticias">
            <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
              Ver Mais Novidades
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
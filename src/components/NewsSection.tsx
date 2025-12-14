import { Link } from "react-router-dom";
import { ArrowRight, Newspaper, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useRecentNews } from "@/hooks/useNews";
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

const NewsSection = () => {
  const { data: news, isLoading } = useRecentNews(6);

  if (isLoading) {
    return (
      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <Skeleton className="h-8 w-48 mx-auto mb-4" />
            <Skeleton className="h-10 w-80 mx-auto mb-3" />
            <Skeleton className="h-5 w-64 mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="h-32">
                <CardContent className="p-4">
                  <Skeleton className="h-4 w-20 mb-3" />
                  <Skeleton className="h-5 w-full mb-2" />
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
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Newspaper className="w-4 h-4" />
            Aconteceu Agora
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            O Que Mudou na Lei e Afeta Você
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Novas leis, decisões importantes e mudanças que podem impactar seu bolso, seu trabalho e sua família. Atualizado diariamente.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {news.slice(0, 6).map((article) => (
            <a
              key={article.id}
              href={article.original_link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card group">
                <CardContent className="p-4 md:p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
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
                    <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {article.published_at && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                      <span className="font-medium text-foreground/70">
                        {format(new Date(article.published_at), "dd 'de' MMMM", { locale: ptBR })}
                      </span>
                      <span>•</span>
                      <span>{article.source}</span>
                    </div>
                  )}
                  
                  <h3 className="font-semibold text-foreground text-sm md:text-base leading-tight mb-2 line-clamp-2">
                    {decodeHtmlEntities(article.title)}
                  </h3>
                  
                  {article.excerpt && (
                    <p className="text-muted-foreground text-xs md:text-sm line-clamp-2">
                      {decodeHtmlEntities(article.excerpt)}
                    </p>
                  )}
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/noticias">
            <Button variant="outline" size="lg" className="gap-2">
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

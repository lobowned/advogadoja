import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { blogArticles } from "@/data/blog-articles";

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

const ArticlesSection = () => {
  // Get 4 featured articles from different niches
  const featuredArticles = blogArticles.slice(0, 4);

  return (
    <section className="py-12 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <BookOpen className="w-4 h-4" />
            Conteúdo Jurídico
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Artigos que Podem te Ajudar
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base">
            Guias práticos sobre seus direitos em diversas áreas do direito brasileiro
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredArticles.map((article) => (
            <Link key={article.slug} to={`/artigos/${article.slug}`}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 bg-card">
                <CardContent className="p-4 md:p-5">
                  <Badge 
                    variant="outline" 
                    className={`mb-3 text-xs ${nicheColors[article.nicheId] || "bg-muted text-muted-foreground"}`}
                  >
                    {nicheLabels[article.nicheId] || article.nicheId}
                  </Badge>
                  
                  <h3 className="font-semibold text-foreground text-sm md:text-base leading-tight mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-xs md:text-sm line-clamp-2 mb-3">
                    {article.excerpt}
                  </p>
                  
                  <span className="text-primary text-xs md:text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    Ler artigo
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/artigos">
            <Button variant="outline" size="lg" className="gap-2">
              Ver Todos os Artigos
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;

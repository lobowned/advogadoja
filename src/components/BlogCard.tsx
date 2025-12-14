import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock } from "lucide-react";
import { BlogArticle, getNicheInfo } from "@/data/blog-articles";

interface BlogCardProps {
  article: BlogArticle;
  variant?: "default" | "compact" | "featured";
}

const BlogCard = ({ article, variant = "default" }: BlogCardProps) => {
  const nicheInfo = getNicheInfo(article.nicheId);
  
  const nicheColors: Record<string, string> = {
    trabalhista: "bg-blue-500/10 text-blue-600 border-blue-200",
    familia: "bg-pink-500/10 text-pink-600 border-pink-200",
    civil: "bg-amber-500/10 text-amber-600 border-amber-200",
    previdenciario: "bg-green-500/10 text-green-600 border-green-200",
    penal: "bg-red-500/10 text-red-600 border-red-200",
  };

  if (variant === "compact") {
    return (
      <Link 
        to={`/artigos/${article.nicheId}/${article.slug}`}
        className="group block"
      >
        <Card className="h-full hover:shadow-md transition-all duration-300 border-border/50 hover:border-primary/30">
          <CardContent className="p-4">
            <Badge 
              variant="outline" 
              className={`mb-2 text-xs ${nicheColors[article.nicheId] || ""}`}
            >
              {nicheInfo?.name}
            </Badge>
            <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
          </CardContent>
        </Card>
      </Link>
    );
  }

  if (variant === "featured") {
    return (
      <Link 
        to={`/artigos/${article.nicheId}/${article.slug}`}
        className="group block"
      >
        <Card className="h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 overflow-hidden">
          <div className="h-2 bg-gradient-to-r from-primary to-primary/60" />
          <CardHeader className="pb-2">
            <Badge 
              variant="outline" 
              className={`w-fit text-xs ${nicheColors[article.nicheId] || ""}`}
            >
              {nicheInfo?.name}
            </Badge>
          </CardHeader>
          <CardContent className="space-y-3">
            <h3 className="font-bold text-xl line-clamp-2 group-hover:text-primary transition-colors">
              {article.title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3">
              {article.excerpt}
            </p>
          </CardContent>
          <CardFooter className="pt-0 flex items-center justify-between text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              5 min de leitura
            </span>
            <span className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
              Ler artigo
              <ArrowRight className="w-4 h-4" />
            </span>
          </CardFooter>
        </Card>
      </Link>
    );
  }

  return (
    <Link 
      to={`/artigos/${article.nicheId}/${article.slug}`}
      className="group block"
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-border/50 hover:border-primary/30">
        <CardHeader className="pb-2">
          <Badge 
            variant="outline" 
            className={`w-fit text-xs ${nicheColors[article.nicheId] || ""}`}
          >
            {nicheInfo?.name}
          </Badge>
        </CardHeader>
        <CardContent className="space-y-2">
          <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-muted-foreground text-sm line-clamp-2">
            {article.excerpt}
          </p>
        </CardContent>
        <CardFooter className="pt-0 flex items-center justify-between text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            5 min
          </span>
          <span className="flex items-center gap-1 text-primary font-medium group-hover:gap-2 transition-all">
            Ler
            <ArrowRight className="w-4 h-4" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlogCard;
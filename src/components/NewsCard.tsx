import { ExternalLink, Calendar, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import type { NewsArticle } from "@/hooks/useNews";

interface NewsCardProps {
  article: NewsArticle;
  variant?: "default" | "compact";
}

const nicheLabels: Record<string, string> = {
  trabalhista: "Trabalhista",
  familia: "Família",
  civil: "Civil",
  previdenciario: "Previdenciário",
  penal: "Penal"
};

const nicheColors: Record<string, string> = {
  trabalhista: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  familia: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
  civil: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  previdenciario: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200",
  penal: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
};

const sourceColors: Record<string, string> = {
  conjur: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  tst: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
  stf: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200",
  stj: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200"
};

export const NewsCard = ({ article, variant = "default" }: NewsCardProps) => {
  const formattedDate = article.published_at 
    ? format(new Date(article.published_at), "d 'de' MMMM, yyyy", { locale: ptBR })
    : null;

  if (variant === "compact") {
    return (
      <a
        href={article.original_link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 bg-card">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="outline" className={`text-xs ${nicheColors[article.niche_id] || ''}`}>
                    {nicheLabels[article.niche_id] || article.niche_id}
                  </Badge>
                  <Badge variant="outline" className={`text-xs ${sourceColors[article.source] || ''}`}>
                    {article.source.toUpperCase()}
                  </Badge>
                </div>
                <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                {formattedDate && (
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {formattedDate}
                  </p>
                )}
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 group-hover:text-primary transition-colors" />
            </div>
          </CardContent>
        </Card>
      </a>
    );
  }

  return (
    <a
      href={article.original_link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/50 bg-card">
        <CardContent className="p-5">
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="outline" className={nicheColors[article.niche_id] || ''}>
              {nicheLabels[article.niche_id] || article.niche_id}
            </Badge>
            <Badge variant="outline" className={sourceColors[article.source] || ''}>
              {article.source_url}
            </Badge>
          </div>
          
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {article.title}
          </h3>
          
          {article.excerpt && (
            <p className="text-muted-foreground text-sm line-clamp-3 mb-3">
              {article.excerpt}
            </p>
          )}
          
          <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              {formattedDate && (
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formattedDate}
                </span>
              )}
            </div>
            <span className="text-xs text-primary flex items-center gap-1 group-hover:underline">
              Ler mais <ExternalLink className="h-3 w-3" />
            </span>
          </div>
          
          {article.keywords && article.keywords.length > 0 && (
            <div className="flex items-center gap-1 mt-3 flex-wrap">
              <Tag className="h-3 w-3 text-muted-foreground" />
              {article.keywords.slice(0, 3).map((keyword, idx) => (
                <span key={idx} className="text-xs text-muted-foreground">
                  {keyword}{idx < Math.min(article.keywords!.length, 3) - 1 ? ',' : ''}
                </span>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </a>
  );
};

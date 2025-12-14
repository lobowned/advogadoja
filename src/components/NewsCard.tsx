import { ExternalLink, Calendar, Tag, Scale, Users, FileText, Building, Shield } from "lucide-react";
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

const nichePlaceholders: Record<string, { gradient: string; icon: React.ElementType }> = {
  trabalhista: { gradient: "from-blue-600 to-blue-800", icon: Scale },
  familia: { gradient: "from-pink-500 to-pink-700", icon: Users },
  civil: { gradient: "from-purple-600 to-purple-800", icon: FileText },
  previdenciario: { gradient: "from-amber-500 to-amber-700", icon: Building },
  penal: { gradient: "from-red-600 to-red-800", icon: Shield },
};

/**
 * Decode HTML entities in text
 */
const decodeHtmlEntities = (text: string): string => {
  if (typeof document === 'undefined') return text;
  const textarea = document.createElement("textarea");
  textarea.innerHTML = text;
  return textarea.value;
};

export const NewsCard = ({ article, variant = "default" }: NewsCardProps) => {
  const formattedDate = article.published_at 
    ? format(new Date(article.published_at), "d 'de' MMMM, yyyy", { locale: ptBR })
    : null;

  const shortDate = article.published_at 
    ? format(new Date(article.published_at), "dd 'de' MMM", { locale: ptBR })
    : null;

  // Decode HTML entities in title and excerpt
  const decodedTitle = decodeHtmlEntities(article.title);
  const decodedExcerpt = article.excerpt ? decodeHtmlEntities(article.excerpt) : null;
  
  const placeholder = nichePlaceholders[article.niche_id] || nichePlaceholders.civil;
  const PlaceholderIcon = placeholder.icon;

  if (variant === "compact") {
    return (
      <a
        href={article.original_link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        <Card className="h-full transition-all duration-200 hover:shadow-md hover:border-primary/50 bg-card">
          <CardContent className="p-0">
            <div className="flex gap-3 p-3">
              {/* Thumbnail */}
              <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                {article.image_url ? (
                  <img 
                    src={article.image_url} 
                    alt=""
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                ) : null}
                <div className={`w-full h-full bg-gradient-to-br ${placeholder.gradient} flex items-center justify-center ${article.image_url ? 'hidden' : ''}`}>
                  <PlaceholderIcon className="w-6 h-6 text-white/80" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <Badge variant="outline" className={`text-xs ${nicheColors[article.niche_id] || ''}`}>
                    {nicheLabels[article.niche_id] || article.niche_id}
                  </Badge>
                  <Badge variant="outline" className={`text-xs ${sourceColors[article.source] || ''}`}>
                    {article.source.toUpperCase()}
                  </Badge>
                </div>
                <h3 className="font-medium text-sm line-clamp-2 group-hover:text-primary transition-colors">
                  {decodedTitle}
                </h3>
                {shortDate && (
                  <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {shortDate}
                  </p>
                )}
              </div>
              <ExternalLink className="h-4 w-4 text-muted-foreground flex-shrink-0 hidden sm:block group-hover:text-primary transition-colors" />
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
      <Card className="h-full transition-all duration-200 hover:shadow-lg hover:border-primary/50 bg-card overflow-hidden">
        <CardContent className="p-0">
          <div className="flex gap-4 p-4 md:p-5">
            {/* Thumbnail */}
            <div className="flex-shrink-0 w-24 h-24 md:w-28 md:h-28 rounded-lg overflow-hidden">
              {article.image_url ? (
                <img 
                  src={article.image_url} 
                  alt=""
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
              ) : null}
              <div className={`w-full h-full bg-gradient-to-br ${placeholder.gradient} flex items-center justify-center ${article.image_url ? 'hidden' : ''}`}>
                <PlaceholderIcon className="w-10 h-10 md:w-12 md:h-12 text-white/80" />
              </div>
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="outline" className={nicheColors[article.niche_id] || ''}>
                  {nicheLabels[article.niche_id] || article.niche_id}
                </Badge>
                <Badge variant="outline" className={sourceColors[article.source] || ''}>
                  {article.source_url}
                </Badge>
              </div>
              
              <h3 className="font-semibold text-base md:text-lg mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                {decodedTitle}
              </h3>
              
              {decodedExcerpt && (
                <p className="text-muted-foreground text-sm line-clamp-2 mb-2 hidden md:block">
                  {decodedExcerpt}
                </p>
              )}
              
              <div className="flex items-center justify-between mt-auto pt-2">
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
                <div className="flex items-center gap-1 mt-2 flex-wrap hidden md:flex">
                  <Tag className="h-3 w-3 text-muted-foreground" />
                  {article.keywords.slice(0, 3).map((keyword, idx) => (
                    <span key={idx} className="text-xs text-muted-foreground">
                      {keyword}{idx < Math.min(article.keywords!.length, 3) - 1 ? ',' : ''}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </a>
  );
};

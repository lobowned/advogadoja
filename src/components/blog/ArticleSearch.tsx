import { useState, useMemo } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BlogArticle, blogArticles } from "@/data/blog-articles";
import { Link } from "react-router-dom";

interface ArticleSearchProps {
  onResultSelect?: () => void;
}

const ArticleSearch = ({ onResultSelect }: ArticleSearchProps) => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const results = useMemo(() => {
    if (query.length < 2) return [];
    
    const searchTerms = query.toLowerCase().split(" ").filter(Boolean);
    
    return blogArticles
      .filter((article) => {
        const searchableText = [
          article.title,
          article.excerpt,
          article.metaDescription,
          ...article.keywords,
        ]
          .join(" ")
          .toLowerCase();
        
        return searchTerms.every((term) => searchableText.includes(term));
      })
      .slice(0, 5);
  }, [query]);

  const handleSelect = () => {
    setQuery("");
    setIsOpen(false);
    onResultSelect?.();
  };

  const nicheColors: Record<string, string> = {
    trabalhista: "text-blue-600",
    familia: "text-pink-600",
    civil: "text-amber-600",
    previdenciario: "text-green-600",
    penal: "text-red-600",
  };

  return (
    <div className="relative w-full max-w-lg">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Buscar artigos..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          className="pl-9 pr-9"
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
            onClick={() => {
              setQuery("");
              setIsOpen(false);
            }}
          >
            <X className="w-4 h-4" />
          </Button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-lg shadow-lg z-50 overflow-hidden">
          {results.length > 0 ? (
            <ul className="divide-y">
              {results.map((article) => (
                <li key={article.id}>
                  <Link
                    to={`/artigos/${article.nicheId}/${article.slug}`}
                    onClick={handleSelect}
                    className="block p-3 hover:bg-muted transition-colors"
                  >
                    <span className={`text-xs font-medium ${nicheColors[article.nicheId]}`}>
                      {article.nicheId.charAt(0).toUpperCase() + article.nicheId.slice(1)}
                    </span>
                    <p className="font-medium text-sm line-clamp-1">{article.title}</p>
                    <p className="text-xs text-muted-foreground line-clamp-1">{article.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">
              Nenhum artigo encontrado para "{query}"
            </div>
          )}
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && query.length >= 2 && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default ArticleSearch;

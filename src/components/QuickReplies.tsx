import { Button } from "@/components/ui/button";
import { getSuggestionsByProblem } from "@/data/contextual-suggestions";
import { cn } from "@/lib/utils";

interface QuickRepliesProps {
  problem: string | null;
  onSelect: (suggestion: string) => void;
  className?: string;
  disabled?: boolean;
}

export const QuickReplies = ({ problem, onSelect, className, disabled }: QuickRepliesProps) => {
  const suggestions = getSuggestionsByProblem(problem);
  
  if (!suggestions || suggestions.length === 0) return null;
  
  return (
    <div className={cn(
      "flex flex-wrap gap-2 mt-2 animate-fade-in",
      className
    )}>
      {suggestions.map((suggestion, idx) => (
        <Button
          key={idx}
          variant="outline"
          size="sm"
          disabled={disabled}
          className={cn(
            "text-xs bg-white/90 hover:bg-primary/10 border-primary/30 transition-all duration-200",
            "hover:scale-105 hover:shadow-sm",
            disabled && "opacity-50 cursor-not-allowed"
          )}
          onClick={() => onSelect(suggestion)}
          style={{ 
            animationDelay: `${idx * 100}ms`,
            animation: 'fade-in 0.3s ease-out forwards'
          }}
        >
          {suggestion}
        </Button>
      ))}
    </div>
  );
};

// Versão compacta para usar dentro do chat
export const QuickRepliesInline = ({ 
  suggestions, 
  onSelect, 
  disabled 
}: { 
  suggestions: string[]; 
  onSelect: (s: string) => void; 
  disabled?: boolean;
}) => {
  return (
    <div className="flex flex-wrap gap-1.5 mt-1">
      {suggestions.slice(0, 3).map((suggestion, idx) => (
        <button
          key={idx}
          disabled={disabled}
          onClick={() => onSelect(suggestion)}
          className={cn(
            "text-[11px] px-2 py-1 rounded-full",
            "bg-primary/5 hover:bg-primary/15 text-primary/80",
            "border border-primary/20 hover:border-primary/40",
            "transition-all duration-200",
            disabled && "opacity-50 cursor-not-allowed"
          )}
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
};

export default QuickReplies;

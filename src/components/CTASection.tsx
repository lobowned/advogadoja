import { Button } from "@/components/ui/button";
import { Shield, CheckCircle2, Clock } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  showBadges?: boolean;
  variant?: "primary" | "secondary";
  onAction?: () => void;
}

const CTASection = ({ 
  title = "Cada Dia Sem Agir Pode Custar Seus Direitos",
  subtitle = "Muitos direitos trabalhistas, familiares e previdenciários têm prazo para serem cobrados. Não deixe prescrever — faça uma análise gratuita hoje.",
  buttonText = "Quero Descobrir Meus Direitos",
  showBadges = true,
  variant = "primary",
  onAction
}: CTASectionProps) => {
  const badges = [
    { icon: CheckCircle2, text: "✅ Análise Gratuita" },
    { icon: Clock, text: "⏰ Resposta em 24h" },
    { icon: Shield, text: "🔒 100% Sigiloso" }
  ];

  const bgClass = variant === "primary" 
    ? "bg-gradient-to-br from-primary via-primary to-primary/90"
    : "bg-gradient-to-br from-muted to-muted/50";

  const textClass = variant === "primary" ? "text-white" : "text-foreground";

  return (
    <section className={`py-12 sm:py-16 md:py-20 relative overflow-hidden ${bgClass}`}>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      )}
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold ${textClass} mb-4 sm:mb-6`}>
            {title}
          </h2>
          
          <p className={`text-base sm:text-lg md:text-xl ${variant === "primary" ? "text-white/90" : "text-muted-foreground"} mb-8 sm:mb-10 max-w-2xl mx-auto px-4`}>
            {subtitle}
          </p>
          
          <Button 
            size="lg"
            variant={variant === "primary" ? "secondary" : "default"}
            className="btn-shimmer h-12 sm:h-14 md:h-16 w-full sm:w-auto px-6 sm:px-8 md:px-10 text-base sm:text-lg font-bold shadow-button hover:scale-105 transition-all mb-6 sm:mb-8"
            onClick={onAction}
          >
            {buttonText}
          </Button>

          {showBadges && (
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-6 mt-6 sm:mt-8">
              {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Icon className={`h-4 w-4 sm:h-5 sm:w-5 ${variant === "primary" ? "text-white" : "text-primary"}`} />
                    <span className={`text-xs sm:text-sm font-medium ${variant === "primary" ? "text-white" : "text-foreground"}`}>
                      {badge.text}
                    </span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;

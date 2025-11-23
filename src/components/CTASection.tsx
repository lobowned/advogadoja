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
  title = "Pronto para Proteger Seus Direitos?",
  subtitle = "Não deixe seu caso sem a proteção que ele merece. Entre em contato agora e receba orientação especializada.",
  buttonText = "Quero orientação jurídica agora mesmo",
  showBadges = true,
  variant = "primary",
  onAction
}: CTASectionProps) => {
  const badges = [
    { icon: Shield, text: "100% Confidencial" },
    { icon: Clock, text: "Atendimento Imediato" },
    { icon: CheckCircle2, text: "Sem Compromisso Inicial" }
  ];

  const bgClass = variant === "primary" 
    ? "bg-gradient-to-br from-primary via-primary to-primary/90"
    : "bg-gradient-to-br from-muted to-muted/50";

  const textClass = variant === "primary" ? "text-white" : "text-foreground";

  return (
    <section className={`py-20 relative overflow-hidden ${bgClass}`}>
      {variant === "primary" && (
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      )}
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl md:text-5xl font-bold ${textClass} mb-6`}>
            {title}
          </h2>
          
          <p className={`text-lg md:text-xl ${variant === "primary" ? "text-white/90" : "text-muted-foreground"} mb-10 max-w-2xl mx-auto`}>
            {subtitle}
          </p>
          
          <Button 
            size="lg"
            variant={variant === "primary" ? "secondary" : "default"}
            className="h-16 px-10 text-lg font-bold shadow-button hover:scale-105 transition-all mb-8"
            onClick={onAction}
          >
            {buttonText}
          </Button>

          {showBadges && (
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {badges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Icon className={`h-5 w-5 ${variant === "primary" ? "text-white" : "text-primary"}`} />
                    <span className={`text-sm font-medium ${variant === "primary" ? "text-white" : "text-foreground"}`}>
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

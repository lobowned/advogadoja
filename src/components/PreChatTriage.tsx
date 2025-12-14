import { Button } from "@/components/ui/button";
import { useTriageFlow, TriageData } from "@/hooks/useTriageFlow";
import { Briefcase, Users, Shield, HelpCircle, AlertTriangle, Clock, Calendar, MessageSquare, RefreshCw, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, React.ElementType> = {
  Briefcase,
  Users,
  Shield,
  HelpCircle,
  AlertTriangle,
  Clock,
  Calendar,
  MessageSquare,
  RefreshCw
};

interface PreChatTriageProps {
  onComplete: (triageData: TriageData) => void;
  onlineCount?: number;
}

const PreChatTriage = ({ onComplete, onlineCount = 3 }: PreChatTriageProps) => {
  const {
    currentStep,
    totalSteps,
    triageData,
    isComplete,
    getCurrentStepData,
    submitStep,
    getEstimatedRights,
    getAreaLabel
  } = useTriageFlow();

  const stepData = getCurrentStepData();

  if (isComplete) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center max-w-md px-4 animate-fade-in">
          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20 shadow-lg">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <h3 className="text-lg font-bold text-primary">
                Baseado nas suas respostas...
              </h3>
            </div>
            
            <p className="text-3xl sm:text-4xl font-bold text-primary mt-2 animate-scale-in">
              Você pode ter direito a até
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-whatsapp-send-btn mt-1">
              {getEstimatedRights()}
            </p>
            
            <p className="text-sm text-muted-foreground mt-4">
              Um especialista em <span className="font-semibold text-foreground">{getAreaLabel()}</span> está pronto para analisar seu caso
            </p>
            
            <Button
              onClick={() => onComplete(triageData)}
              className="w-full mt-6 bg-whatsapp-send-btn hover:bg-whatsapp-send-btn/90 text-white font-medium py-5 text-base rounded-lg transition-all duration-200 flex items-center justify-center gap-2 animate-button-pulse"
            >
              <MessageSquare className="w-5 h-5" />
              Falar com Especialista Agora
              <ArrowRight className="w-4 h-4" />
            </Button>
            
            <p className="text-xs text-muted-foreground mt-3">
              ✓ Consulta 100% gratuita • ✓ Sem compromisso
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center max-w-md px-4">
        {/* Progress indicator */}
        <div className="flex justify-center gap-2 mb-6">
          {Array.from({ length: totalSteps }).map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-8 h-1.5 rounded-full transition-all duration-300",
                index <= currentStep ? "bg-primary" : "bg-muted"
              )}
            />
          ))}
        </div>

        {/* Header */}
        <div className="mb-6 animate-fade-in">
          <div className="text-3xl mb-2">🏛️</div>
          <h3 className="text-xl font-bold mb-1">
            {stepData?.question}
          </h3>
          <p className="text-sm text-muted-foreground">
            {onlineCount} advogados disponíveis agora
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {stepData?.options.map((option, index) => {
            const Icon = iconMap[option.icon] || HelpCircle;
            return (
              <button
                key={option.value}
                onClick={() => submitStep(option.value)}
                className={cn(
                  "w-full p-4 rounded-xl border-2 transition-all duration-200",
                  "hover:border-primary hover:bg-primary/5 hover:scale-[1.02]",
                  "border-border/50 bg-card",
                  "flex items-center gap-3 text-left",
                  "animate-fade-in"
                )}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-medium">{option.label}</span>
              </button>
            );
          })}
        </div>

        {/* Footer info */}
        <p className="text-xs text-muted-foreground mt-6">
          Passo {currentStep + 1} de {totalSteps} • Suas respostas são sigilosas
        </p>
      </div>
    </div>
  );
};

export default PreChatTriage;

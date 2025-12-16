import { Button } from "@/components/ui/button";
import { useTriageFlow, TriageData } from "@/hooks/useTriageFlow";
import { 
  Briefcase, Users, Shield, HelpCircle, AlertTriangle, Clock, Calendar, 
  MessageSquare, RefreshCw, ArrowRight, Sparkles, Heart, Scale,
  UserMinus, AlertOctagon, HeartCrack, Baby, Wallet, Award,
  Stethoscope, HandHeart, Frown, Receipt, FileText, Home, Lock,
  ShieldAlert, Building2, ShoppingBag, Building, Landmark, AlertCircle
} from "lucide-react";
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
  RefreshCw,
  Heart,
  Scale,
  UserMinus,
  AlertOctagon,
  HeartCrack,
  Baby,
  Wallet,
  Award,
  Stethoscope,
  HandHeart,
  Frown,
  Receipt,
  FileText,
  Home,
  Lock,
  ShieldAlert,
  Building2,
  ShoppingBag,
  Building,
  Landmark,
  AlertCircle
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
  const hasMoreThanFourOptions = stepData && stepData.options.length > 4;

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
      <div className="text-center max-w-md px-4 w-full">
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
        <div className="mb-5 animate-fade-in">
          <div className="text-3xl mb-2">🏛️</div>
          <h3 className="text-xl font-bold mb-1">
            {stepData?.question}
          </h3>
          <p className="text-sm text-muted-foreground">
            {onlineCount} advogados disponíveis agora
          </p>
        </div>

        {/* Options - Grid for many options, list for few */}
        <div className={cn(
          hasMoreThanFourOptions 
            ? "grid grid-cols-2 gap-2" 
            : "space-y-3"
        )}>
          {stepData?.options.map((option, index) => {
            const Icon = iconMap[option.icon] || HelpCircle;
            return (
              <button
                key={option.value}
                onClick={() => submitStep(option.value)}
                className={cn(
                  "w-full rounded-xl border-2 transition-all duration-200",
                  "hover:border-primary hover:bg-primary/5 active:scale-[0.98] sm:hover:scale-[1.02]",
                  "border-border/50 bg-card",
                  "flex items-center text-left",
                  "animate-fade-in touch-manipulation",
                  hasMoreThanFourOptions 
                    ? "p-3 gap-2 min-h-[48px] flex-col sm:flex-row justify-center sm:justify-start" 
                    : "p-4 gap-3 min-h-[56px]"
                )}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className={cn(
                  "rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0",
                  hasMoreThanFourOptions ? "w-8 h-8" : "w-11 h-11 sm:w-10 sm:h-10"
                )}>
                  <Icon className={cn(
                    "text-primary",
                    hasMoreThanFourOptions ? "w-4 h-4" : "w-5 h-5"
                  )} />
                </div>
                <span className={cn(
                  "font-medium",
                  hasMoreThanFourOptions 
                    ? "text-xs sm:text-sm text-center sm:text-left leading-tight" 
                    : "text-sm sm:text-base"
                )}>
                  {option.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Footer info */}
        <p className="text-xs text-muted-foreground mt-5">
          Passo {currentStep + 1} de {totalSteps} • Suas respostas são sigilosas
        </p>
      </div>
    </div>
  );
};

export default PreChatTriage;

import { Check, MessageSquare, User, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatProgressBarProps {
  currentStep: number; // 1, 2, or 3
  hasName: boolean;
  hasPhone: boolean;
}

const steps = [
  { id: 1, label: "Conte seu problema", icon: MessageSquare },
  { id: 2, label: "Seus dados", icon: User },
  { id: 3, label: "Advogado analisa", icon: Phone },
];

const ChatProgressBar = ({ currentStep, hasName, hasPhone }: ChatProgressBarProps) => {
  // Calculate actual step based on collected data
  const actualStep = hasPhone ? 3 : hasName ? 2 : currentStep;
  
  return (
    <div className="bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg px-3 py-2.5 mb-3">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const Icon = step.icon;
          const isCompleted = actualStep > step.id;
          const isCurrent = actualStep === step.id;
          
          return (
            <div key={step.id} className="flex items-center">
              {/* Step indicator */}
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all duration-300",
                    isCompleted
                      ? "bg-green-500 text-white"
                      : isCurrent
                      ? "bg-primary text-white ring-4 ring-primary/20"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Icon className="w-4 h-4" />
                  )}
                </div>
                <span
                  className={cn(
                    "text-[10px] mt-1 text-center max-w-[80px] leading-tight",
                    isCurrent ? "text-primary font-medium" : "text-muted-foreground"
                  )}
                >
                  {step.label}
                </span>
              </div>
              
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="flex-1 mx-2 h-0.5 rounded-full bg-muted overflow-hidden min-w-[30px] max-w-[60px]">
                  <div
                    className={cn(
                      "h-full bg-primary transition-all duration-500",
                      isCompleted ? "w-full" : "w-0"
                    )}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChatProgressBar;

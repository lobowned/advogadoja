import { AlertTriangle, AlertCircle, Clock, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface UrgencyBadgeProps {
  level: 'baixa' | 'media' | 'alta' | 'critica';
  className?: string;
  showLabel?: boolean;
}

const urgencyConfig = {
  critica: {
    color: 'bg-red-500 text-white',
    borderColor: 'border-red-500',
    icon: AlertTriangle,
    label: 'URGENTE',
    pulse: true
  },
  alta: {
    color: 'bg-orange-500 text-white',
    borderColor: 'border-orange-500',
    icon: AlertCircle,
    label: 'Prioridade',
    pulse: false
  },
  media: {
    color: 'bg-yellow-500 text-yellow-900',
    borderColor: 'border-yellow-500',
    icon: Clock,
    label: 'Normal',
    pulse: false
  },
  baixa: {
    color: 'bg-green-500 text-white',
    borderColor: 'border-green-500',
    icon: CheckCircle,
    label: '',
    pulse: false
  }
};

export const UrgencyBadge = ({ level, className, showLabel = true }: UrgencyBadgeProps) => {
  const config = urgencyConfig[level];
  const Icon = config.icon;
  
  // Não mostrar badge para urgência baixa
  if (level === 'baixa' || level === 'media') return null;
  
  return (
    <div 
      className={cn(
        "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium",
        config.color,
        config.pulse && "animate-pulse",
        className
      )}
    >
      <Icon className="w-3 h-3" />
      {showLabel && config.label && (
        <span>{config.label}</span>
      )}
    </div>
  );
};

// Componente de alerta maior para casos críticos
export const UrgencyAlert = ({ level, keywords }: { level: string; keywords?: string[] }) => {
  if (level !== 'critica' && level !== 'alta') return null;
  
  const isCritical = level === 'critica';
  
  return (
    <div className={cn(
      "flex items-center gap-2 px-3 py-2 rounded-lg text-sm mb-2",
      isCritical 
        ? "bg-red-100 border border-red-300 text-red-800 animate-pulse" 
        : "bg-orange-100 border border-orange-300 text-orange-800"
    )}>
      {isCritical ? (
        <AlertTriangle className="w-4 h-4 flex-shrink-0" />
      ) : (
        <AlertCircle className="w-4 h-4 flex-shrink-0" />
      )}
      <div>
        <span className="font-medium">
          {isCritical ? '🚨 Caso Urgente!' : '⚠️ Prioridade Alta'}
        </span>
        {keywords && keywords.length > 0 && (
          <span className="text-xs ml-1 opacity-75">
            ({keywords.slice(0, 2).join(', ')})
          </span>
        )}
      </div>
    </div>
  );
};

export default UrgencyBadge;

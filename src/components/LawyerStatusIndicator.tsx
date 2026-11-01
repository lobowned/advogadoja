import { Search, FileText, Scale, Clock, Brain, MessageSquare } from "lucide-react";
import { getPersonalityByLawyerId, getStatusMessages } from "@/data/lawyer-personalities";
import { useEffect, useState } from "react";

interface LawyerStatusIndicatorProps {
  lawyerId: string;
  lawyerName: string;
  isThinking?: boolean;
  isTyping?: boolean;
}

const LawyerStatusIndicator = ({ lawyerId, lawyerName, isThinking, isTyping }: LawyerStatusIndicatorProps) => {
  const personality = getPersonalityByLawyerId(lawyerId);
  const [statusMessage, setStatusMessage] = useState('');
  const [iconIndex, setIconIndex] = useState(0);

  const icons = [Search, FileText, Scale, Brain];
  const Icon = icons[iconIndex];

  useEffect(() => {
    if (isThinking && personality) {
      const messages = getStatusMessages(personality.tone);
      setStatusMessage(messages[Math.floor(Math.random() * messages.length)]);
      
      // Trocar mensagem a cada 2 segundos
      const interval = setInterval(() => {
        setStatusMessage(messages[Math.floor(Math.random() * messages.length)]);
        setIconIndex(prev => (prev + 1) % icons.length);
      }, 2500);

      return () => clearInterval(interval);
    }
  }, [isThinking, personality]);

  if (!isThinking && !isTyping) return null;

  const firstName = lawyerName.split(' ')[0];

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 bg-muted/50 rounded-full border border-border/50">
      {isThinking ? (
        <>
          <Icon className="w-3.5 h-3.5 text-primary animate-pulse" />
          <span className="text-xs text-muted-foreground">
            <span className="font-medium text-primary">{firstName}</span>
            {' '}{statusMessage || 'está analisando...'}
          </span>
        </>
      ) : (
        <>
          <MessageSquare className="w-3.5 h-3.5 text-primary" />
          <span className="text-xs text-muted-foreground">
            <span className="font-medium text-primary">{firstName}</span>
            {' '}está digitando...
          </span>
        </>
      )}
    </div>
  );
};

export default LawyerStatusIndicator;

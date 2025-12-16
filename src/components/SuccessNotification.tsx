import { useState, useEffect, useCallback } from 'react';
import { m, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, TrendingUp, Radio } from 'lucide-react';
import { successCases, areaLabels, areaColors, avatarColors, type SuccessCase } from '@/data/success-cases';

interface SuccessNotificationProps {
  disabled?: boolean;
}

const SuccessNotification = ({ disabled = false }: SuccessNotificationProps) => {
  const [currentCase, setCurrentCase] = useState<SuccessCase | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [usedIndices, setUsedIndices] = useState<Set<number>>(new Set());
  const [displayTime, setDisplayTime] = useState<string>('');

  // Atualizar tempo dinamicamente
  useEffect(() => {
    if (!currentCase) return;
    
    const updateTime = () => {
      const baseMinutes = currentCase.minutesAgo;
      const elapsed = Math.floor((Date.now() - (window as any).__notificationStartTime) / 60000);
      const totalMinutes = baseMinutes + elapsed;
      
      if (totalMinutes < 60) {
        setDisplayTime(`há ${totalMinutes} ${totalMinutes === 1 ? 'minuto' : 'minutos'}`);
      } else {
        const hours = Math.floor(totalMinutes / 60);
        setDisplayTime(`há ${hours} ${hours === 1 ? 'hora' : 'horas'}`);
      }
    };
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, [currentCase]);

  const showRandomCase = useCallback(() => {
    if (disabled) return;
    
    // Find available indices
    let availableIndices = successCases
      .map((_, i) => i)
      .filter(i => !usedIndices.has(i));
    
    // Reset if all used
    if (availableIndices.length === 0) {
      setUsedIndices(new Set());
      availableIndices = successCases.map((_, i) => i);
    }
    
    const randomIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)];
    setUsedIndices(prev => new Set([...prev, randomIndex]));
    
    const selectedCase = successCases[randomIndex];
    setCurrentCase(selectedCase);
    setDisplayTime(`há ${selectedCase.minutesAgo} minutos`);
    (window as any).__notificationStartTime = Date.now();
    
    setIsVisible(true);
    
    // Auto-hide after 7 seconds
    setTimeout(() => {
      setIsVisible(false);
    }, 7000);
  }, [disabled, usedIndices]);

  useEffect(() => {
    if (disabled) return;
    
    // Show first notification after 12 seconds
    const initialTimeout = setTimeout(() => {
      showRandomCase();
    }, 12000);
    
    // Show subsequent notifications every 40-60 seconds
    const interval = setInterval(() => {
      const randomDelay = Math.random() * 20000;
      setTimeout(showRandomCase, randomDelay);
    }, 50000);
    
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [disabled, showRandomCase]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value);
  };

  if (!currentCase) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          initial={{ opacity: 0, x: -100, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          exit={{ opacity: 0, x: -100, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className="fixed bottom-24 sm:bottom-20 left-4 z-50 max-w-[calc(100vw-2rem)] sm:max-w-sm"
        >
          <div className="bg-card border border-border rounded-xl shadow-elegant overflow-hidden">
            {/* Header com badge AO VIVO */}
            <div className="bg-gradient-to-r from-primary/10 to-emerald-500/10 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative">
                  <CheckCircle2 className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-medium text-primary">Caso Resolvido</span>
                {/* Badge AO VIVO pulsante */}
                <div className="flex items-center gap-1 bg-red-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full animate-pulse">
                  <Radio className="w-2.5 h-2.5" />
                  AO VIVO
                </div>
              </div>
              <button
                onClick={() => setIsVisible(false)}
                className="p-1 hover:bg-muted rounded-full transition-colors"
              >
                <X className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
            </div>
            
            {/* Content */}
            <div className="px-4 py-3">
              <div className="flex items-start gap-3">
                {/* Avatar com iniciais coloridas */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm ${avatarColors[currentCase.area]}`}>
                  {currentCase.initials}
                </div>
                
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    {currentCase.name} de {currentCase.city}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {currentCase.result}
                    {currentCase.value && (
                      <span className="font-semibold text-primary ml-1">
                        {formatCurrency(currentCase.value)}
                      </span>
                    )}
                  </p>
                  
                  {/* Citação opcional */}
                  {currentCase.quote && (
                    <p className="text-[11px] text-muted-foreground/80 italic mt-1.5 border-l-2 border-primary/30 pl-2">
                      "{currentCase.quote}"
                    </p>
                  )}
                  
                  <div className="flex items-center gap-2 mt-2">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full text-white ${areaColors[currentCase.area]}`}>
                      {areaLabels[currentCase.area]}
                    </span>
                    <span className="text-[10px] text-muted-foreground">
                      {displayTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer CTA */}
            <div className="px-4 py-2 bg-muted/30 border-t border-border">
              <a 
                href="#lawyer-chat"
                className="text-xs text-primary hover:underline flex items-center gap-1 font-medium"
                onClick={() => setIsVisible(false)}
              >
                <TrendingUp className="w-3 h-3" />
                Consulte seu caso gratuitamente
              </a>
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
};

export default SuccessNotification;

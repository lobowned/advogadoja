import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { MessageCircle, Share2, AlertTriangle } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ResultItem {
  label: string;
  value: number;
  description?: string;
}

interface CalculatorResultProps {
  total: number;
  items: ResultItem[];
  specialty: "trabalhista" | "familia";
  calculatorType: string;
}

const CalculatorResult = ({ total, items, specialty, calculatorType }: CalculatorResultProps) => {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();
  const [displayTotal, setDisplayTotal] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    setIsAnimating(true);
    const duration = 1500;
    const steps = 60;
    const increment = total / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= total) {
        setDisplayTotal(total);
        setIsAnimating(false);
        clearInterval(timer);
      } else {
        setDisplayTotal(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [total]);

  const handleContactLawyer = () => {
    const specialtyMap = {
      trabalhista: "trabalhista",
      familia: "familia"
    };
    navigate(`/?specialty=${specialtyMap[specialty]}&estimatedValue=${total}&source=${calculatorType}`);
  };

  const handleShare = async () => {
    const text = `Calculei meus direitos e descobri que posso ter até R$ ${total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}! Faça o seu cálculo também:`;
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({ title: "Calculadora de Direitos", text, url });
      } catch (err) {
        console.log("Share cancelled");
      }
    } else {
      navigator.clipboard.writeText(`${text} ${url}`);
    }
  };

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  const bgGradient = specialty === "trabalhista" 
    ? "from-amber-500/20 to-orange-500/10" 
    : "from-blue-500/20 to-indigo-500/10";

  const accentColor = specialty === "trabalhista" 
    ? "text-amber-600" 
    : "text-blue-600";

  return (
    <motion.div
      initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring" }}
    >
      <Card className={`p-6 bg-gradient-to-br ${bgGradient} border-2`}>
        <motion.div 
          className="text-center mb-6"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <p className="text-sm text-muted-foreground mb-2">Valor estimado dos seus direitos:</p>
          <motion.p 
            className={`text-4xl md:text-5xl font-bold ${accentColor}`}
            animate={isAnimating && !prefersReducedMotion ? { scale: [1, 1.02, 1] } : {}}
            transition={{ duration: 0.3, repeat: isAnimating ? Infinity : 0 }}
          >
            {formatCurrency(displayTotal)}
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-3 mb-6"
          initial={prefersReducedMotion ? {} : "hidden"}
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.4 }
            }
          }}
        >
          <p className="text-sm font-medium text-foreground">Detalhamento:</p>
          {items.filter(item => item.value > 0).map((item, index) => (
            <motion.div 
              key={index} 
              className="flex justify-between items-center py-2 border-b border-border/50"
              variants={prefersReducedMotion ? {} : {
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.4 }
                }
              }}
            >
              <div>
                <p className="text-sm font-medium">{item.label}</p>
                {item.description && (
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                )}
              </div>
              <p className="text-sm font-semibold">{formatCurrency(item.value)}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-3 mb-6"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-amber-800 dark:text-amber-200">
              <strong>Atenção:</strong> Este é um cálculo estimativo baseado nas informações fornecidas. 
              O valor final pode variar conforme análise detalhada do seu caso por um advogado.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-3"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <motion.div 
            className="flex-1"
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            <Button 
              onClick={handleContactLawyer}
              className="w-full gap-2"
              size="lg"
            >
              <MessageCircle className="w-4 h-4" />
              Falar com Advogado
            </Button>
          </motion.div>
          <motion.div
            whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
            whileTap={prefersReducedMotion ? {} : { scale: 0.98 }}
          >
            <Button 
              onClick={handleShare}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto gap-2"
            >
              <Share2 className="w-4 h-4" />
              Compartilhar
            </Button>
          </motion.div>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default CalculatorResult;

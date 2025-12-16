import { useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Star, ThumbsUp, Award } from "lucide-react";
import { credibilityStats } from "@/data/credibility-data";

const iconMap = {
  Users,
  Star,
  ThumbsUp,
  Award
};

interface AnimatedCounterProps {
  value: number;
  decimals?: number;
  suffix?: string;
  duration?: number;
  startAnimation: boolean;
}

const AnimatedCounter = ({ 
  value, 
  decimals = 0, 
  suffix = '', 
  duration = 2000,
  startAnimation 
}: AnimatedCounterProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let start = 0;
    const increment = value / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        setDisplayValue(decimals > 0 ? parseFloat(start.toFixed(decimals)) : Math.floor(start));
      }
    }, 16);
    
    return () => clearInterval(timer);
  }, [startAnimation, value, decimals, duration]);

  return (
    <span className="tabular-nums">
      {decimals > 0 ? displayValue.toFixed(decimals) : displayValue}
      {suffix}
    </span>
  );
};

const StatsCounter = () => {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <m.div 
      ref={ref} 
      className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6 lg:gap-8"
      initial={shouldReduceMotion ? false : "hidden"}
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.15 }
        }
      }}
    >
      {credibilityStats.map((stat, index) => {
        const Icon = iconMap[stat.icon as keyof typeof iconMap];
        
        return (
          <m.div
            key={index}
            variants={shouldReduceMotion ? {} : {
              hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
              visible: { 
                opacity: 1, 
                y: 0, 
                filter: "blur(0px)",
                transition: { duration: 0.5, ease: "easeOut" }
              }
            }}
            whileHover={shouldReduceMotion ? undefined : { 
              y: -5, 
              boxShadow: "0 10px 30px -10px hsl(var(--primary) / 0.3)",
              transition: { type: "spring", stiffness: 300 }
            }}
            className="
              group relative text-center p-4 sm:p-5 md:p-6 rounded-2xl
              bg-gradient-to-br from-primary/5 to-primary/10
              border border-primary/20 hover:border-primary/40
              transition-colors duration-300
            "
          >
            <m.div 
              className="flex justify-center mb-2 sm:mb-3"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="
                p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary
                group-hover:bg-primary group-hover:text-primary-foreground
                transition-all duration-300
              ">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
            </m.div>
            
            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1 sm:mb-2">
              <AnimatedCounter
                value={stat.value}
                decimals={stat.decimals}
                suffix={stat.suffix}
                startAnimation={inView}
              />
            </div>
            
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground font-medium leading-tight">
              {stat.label}
            </p>
          </m.div>
        );
      })}
    </m.div>
  );
};

export default StatsCounter;

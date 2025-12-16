import { useEffect, useState } from "react";
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
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6 lg:gap-8">
      {credibilityStats.map((stat, index) => {
        const Icon = iconMap[stat.icon as keyof typeof iconMap];
        
        return (
          <div
            key={index}
            className="
              group relative text-center p-4 sm:p-5 md:p-6 rounded-2xl
              bg-gradient-to-br from-primary/5 to-primary/10
              border border-primary/20 hover:border-primary/40
              transition-all duration-300 hover:shadow-lg hover:shadow-primary/10
            "
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-center mb-2 sm:mb-3">
              <div className="
                p-2.5 sm:p-3 rounded-xl bg-primary/10 text-primary
                group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground
                transition-all duration-300
              ">
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
            </div>
            
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
          </div>
        );
      })}
    </div>
  );
};

export default StatsCounter;

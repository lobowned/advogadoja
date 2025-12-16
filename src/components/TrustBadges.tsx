import { m, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Scale, Shield, Lock, Eye } from "lucide-react";
import { trustBadges } from "@/data/credibility-data";

const iconMap = {
  Scale,
  Shield,
  Lock,
  Eye
};

const colorMap = {
  blue: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-600',
  green: 'from-green-500/20 to-green-600/10 border-green-500/30 text-green-600',
  emerald: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-600',
  purple: 'from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-600'
};

const TrustBadges = () => {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <m.div 
      ref={ref}
      className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4 md:gap-6"
      initial={shouldReduceMotion ? false : "hidden"}
      animate={inView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: 0.1 }
        }
      }}
    >
      {trustBadges.map((badge) => {
        const Icon = iconMap[badge.icon as keyof typeof iconMap];
        const colors = colorMap[badge.color as keyof typeof colorMap];
        
        return (
          <m.div
            key={badge.id}
            variants={shouldReduceMotion ? {} : {
              hidden: { opacity: 0, scale: 0.8, y: 20 },
              visible: { 
                opacity: 1, 
                scale: 1, 
                y: 0,
                transition: { 
                  type: "spring", 
                  stiffness: 300, 
                  damping: 20 
                }
              }
            }}
            whileHover={shouldReduceMotion ? undefined : { 
              scale: 1.05, 
              rotate: 1,
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            className={`
              group relative p-3 sm:p-4 md:p-6 rounded-2xl border
              bg-gradient-to-br ${colors}
              transition-shadow duration-300
              hover:shadow-lg cursor-default touch-manipulation
            `}
          >
            <div className="flex flex-col items-center text-center space-y-1.5 sm:space-y-2 md:space-y-3">
              <m.div 
                className={`
                  p-2.5 sm:p-3 rounded-xl bg-background/50 backdrop-blur-sm
                  transition-transform duration-300
                `}
                whileHover={shouldReduceMotion ? undefined : { 
                  scale: 1.1, 
                  rotate: 5,
                  transition: { type: "spring", stiffness: 400 }
                }}
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </m.div>
              
              <div>
                <h3 className="font-semibold text-foreground text-xs sm:text-sm md:text-base leading-tight">
                  {badge.title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-0.5 sm:mt-1 leading-tight">
                  {badge.subtitle}
                </p>
              </div>
            </div>
            
            {/* Tooltip on hover - Desktop only */}
            <div className="
              absolute bottom-full left-1/2 -translate-x-1/2 mb-2
              px-3 py-2 rounded-lg bg-foreground text-background text-xs
              opacity-0 group-hover:opacity-100 transition-opacity duration-200
              pointer-events-none whitespace-nowrap z-10
              hidden md:block
            ">
              {badge.description}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
            </div>
          </m.div>
        );
      })}
    </m.div>
  );
};

export default TrustBadges;

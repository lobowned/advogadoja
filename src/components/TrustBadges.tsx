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
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      {trustBadges.map((badge) => {
        const Icon = iconMap[badge.icon as keyof typeof iconMap];
        const colors = colorMap[badge.color as keyof typeof colorMap];
        
        return (
          <div
            key={badge.id}
            className={`
              group relative p-4 md:p-6 rounded-2xl border
              bg-gradient-to-br ${colors}
              hover:scale-105 transition-all duration-300
              hover:shadow-lg cursor-default
            `}
          >
            <div className="flex flex-col items-center text-center space-y-2 md:space-y-3">
              <div className={`
                p-3 rounded-xl bg-background/50 backdrop-blur-sm
                group-hover:scale-110 transition-transform duration-300
              `}>
                <Icon className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground text-sm md:text-base">
                  {badge.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground mt-1">
                  {badge.subtitle}
                </p>
              </div>
            </div>
            
            {/* Tooltip on hover */}
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
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;

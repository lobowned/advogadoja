import { affiliations } from "@/data/credibility-data";
import { Building2 } from "lucide-react";

const PartnerLogos = () => {
  // Duplicate for seamless loop
  const duplicatedAffiliations = [...affiliations, ...affiliations];

  return (
    <div className="relative overflow-hidden py-6">
      {/* Gradient masks */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
      
      {/* Scrolling container */}
      <div className="flex animate-marquee hover:pause-animation">
        {duplicatedAffiliations.map((affiliation, index) => (
          <div
            key={`${affiliation.name}-${index}`}
            className="
              flex-shrink-0 mx-4 md:mx-8
              group cursor-default
            "
          >
            <div className="
              flex items-center gap-3 px-6 py-4 rounded-xl
              bg-muted/50 border border-border/50
              hover:bg-muted hover:border-primary/30
              transition-all duration-300
              grayscale hover:grayscale-0
            ">
              <div className="
                p-2 rounded-lg bg-primary/10 text-primary
                group-hover:bg-primary group-hover:text-primary-foreground
                transition-all duration-300
              ">
                <Building2 className="w-5 h-5" />
              </div>
              
              <div className="text-left">
                <p className="font-bold text-foreground text-sm md:text-base">
                  {affiliation.name}
                </p>
                <p className="text-xs text-muted-foreground hidden md:block">
                  {affiliation.fullName}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerLogos;

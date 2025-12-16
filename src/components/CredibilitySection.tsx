import { m, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, CheckCircle2 } from "lucide-react";
import TrustBadges from "./TrustBadges";
import StatsCounter from "./StatsCounter";
import PartnerLogos from "./PartnerLogos";
import { securityFeatures } from "@/data/credibility-data";

const CredibilitySection = () => {
  const shouldReduceMotion = useReducedMotion();
  const { ref: headerRef, inView: headerInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: securityRef, inView: securityInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        {/* Header with fade up animation */}
        <m.div 
          ref={headerRef}
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <m.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-4"
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
          >
            <Award className="w-4 h-4" />
            Credibilidade e Segurança
          </m.div>
          
          <m.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 font-display"
            initial={shouldReduceMotion ? false : { opacity: 0, filter: "blur(10px)" }}
            animate={headerInView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Por Que Confiar na{" "}
            <span className="text-gradient-blue">Nossa Equipe?</span>
          </m.h2>
          
          <m.p 
            className="text-lg text-muted-foreground"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Credenciados, certificados e comprometidos com a excelência no atendimento jurídico
          </m.p>
        </m.div>

        {/* Trust Badges */}
        <div className="mb-16 md:mb-20">
          <TrustBadges />
        </div>

        {/* Stats Counter */}
        <div className="mb-16 md:mb-20">
          <m.h3 
            className="text-center text-xl md:text-2xl font-semibold text-foreground mb-8"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Números que Falam por Si
          </m.h3>
          <StatsCounter />
        </div>

        {/* Security Features with slide in animation */}
        <m.div 
          ref={securityRef}
          className="mb-16 md:mb-20"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -50 }}
          animate={securityInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-4xl mx-auto">
            <div className="
              p-6 md:p-8 rounded-2xl
              bg-card
              border border-border
              shadow-elegant
              tech-card-hover
            ">
              <h3 className="text-center text-xl md:text-2xl font-semibold text-foreground mb-6 font-display">
                🔐 Sua Segurança é Nossa Prioridade
              </h3>
              
              <m.div 
                className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                initial={shouldReduceMotion ? false : "hidden"}
                animate={securityInView ? "visible" : "hidden"}
                variants={{
                  hidden: {},
                  visible: {
                    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
                  }
                }}
              >
                {securityFeatures.map((feature, index) => (
                  <m.div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-lg bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors"
                    variants={shouldReduceMotion ? {} : {
                      hidden: { opacity: 0, x: -20 },
                      visible: { 
                        opacity: 1, 
                        x: 0,
                        transition: { duration: 0.4, ease: "easeOut" }
                      }
                    }}
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium">{feature}</span>
                  </m.div>
                ))}
              </m.div>
            </div>
          </div>
        </m.div>

        {/* Partner Logos */}
        <div>
          <m.h3 
            className="text-center text-xl md:text-2xl font-semibold text-foreground mb-6"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Afiliações e Parcerias Profissionais
          </m.h3>
          <PartnerLogos />
          
          <m.p 
            className="text-center text-sm text-muted-foreground mt-6"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Membros ativos de associações e entidades reconhecidas nacionalmente
          </m.p>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;

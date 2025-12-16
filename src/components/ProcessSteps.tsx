import { m, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Search, Target, CheckCircle2 } from "lucide-react";

const ProcessSteps = () => {
  const shouldReduceMotion = useReducedMotion();
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  const steps = [
    {
      number: "1",
      icon: Search,
      title: "Análise Técnica Aprofundada",
      description: "Examinamos cada detalhe, documentos, riscos e oportunidades.",
      subtitle: "Aqui definimos o cenário real — sem ilusões e sem promessas vazias."
    },
    {
      number: "2",
      icon: Target,
      title: "Estratégia Jurídica Personalizada",
      description: "Com base na legislação e jurisprudência atualizada, criamos o plano completo:",
      items: ["Melhor caminho", "Probabilidades", "Tempo estimado", "Ações imediatas", "Alternativas extrajudiciais e judiciais"]
    },
    {
      number: "3",
      icon: CheckCircle2,
      title: "Acompanhamento Contínuo",
      description: "Você recebe acompanhamento direto, atualizações constantes e segurança em cada passo."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <m.div 
          className="text-center mb-10 sm:mb-12 md:mb-16"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Como Funciona na Prática
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Ao entrar em contato, seu caso passa por um processo estruturado em 3 etapas
          </p>
        </m.div>

        <m.div 
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto"
          initial={shouldReduceMotion ? false : "hidden"}
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 }
            }
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <m.div
                key={index}
                variants={shouldReduceMotion ? {} : {
                  hidden: { opacity: 0, y: 40, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1,
                    transition: { 
                      duration: 0.5, 
                      ease: "easeOut" 
                    }
                  }
                }}
                whileHover={shouldReduceMotion ? undefined : { 
                  y: -8, 
                  boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)",
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="relative bg-gradient-to-br from-card to-card/50 border border-border rounded-lg p-6 sm:p-8 shadow-card transition-colors group"
              >
                {/* Number badge with pop animation */}
                <m.div 
                  className="absolute -top-3 sm:-top-4 left-6 sm:left-8 bg-primary text-primary-foreground w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-bold text-base sm:text-lg shadow-button"
                  initial={shouldReduceMotion ? false : { scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ 
                    delay: 0.3 + index * 0.2, 
                    type: "spring", 
                    stiffness: 500, 
                    damping: 15 
                  }}
                >
                  {step.number}
                </m.div>
                
                {/* Icon with bounce on hover */}
                <m.div 
                  className="mb-4 sm:mb-6 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
                  whileHover={shouldReduceMotion ? undefined : { 
                    scale: 1.1, 
                    rotate: 5,
                    transition: { type: "spring", stiffness: 400 }
                  }}
                >
                  <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
                </m.div>

                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2 sm:mb-3">
                  {step.title}
                </h3>
                
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  {step.description}
                </p>

                {step.subtitle && (
                  <p className="text-xs sm:text-sm text-muted-foreground italic">
                    {step.subtitle}
                  </p>
                )}

                {step.items && (
                  <m.ul 
                    className="space-y-2 mt-3 sm:mt-4"
                    initial={shouldReduceMotion ? false : "hidden"}
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                      hidden: {},
                      visible: {
                        transition: { staggerChildren: 0.1, delayChildren: 0.5 + index * 0.2 }
                      }
                    }}
                  >
                    {step.items.map((item, i) => (
                      <m.li 
                        key={i} 
                        className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground"
                        variants={shouldReduceMotion ? {} : {
                          hidden: { opacity: 0, x: -10 },
                          visible: { opacity: 1, x: 0 }
                        }}
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </m.li>
                    ))}
                  </m.ul>
                )}
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
};

export default ProcessSteps;

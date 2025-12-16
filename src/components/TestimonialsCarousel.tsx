import { useCallback, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsCarousel = () => {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      text: "Fui atendido com clareza e pude entender exatamente o que precisava fazer. O escritório conduziu tudo com muita seriedade.",
      author: "Cliente da área Civil",
      area: "Direito Civil"
    },
    {
      text: "Meu processo de família era emocionalmente pesado, mas recebi acolhimento e estratégia. Consegui resolver meu caso com segurança.",
      author: "Cliente de Direito de Família",
      area: "Direito de Família"
    },
    {
      text: "Profissionalismo que faltava em outros profissionais. Soube exatamente o que fazer no meu processo trabalhista.",
      author: "Cliente Trabalhista",
      area: "Direito do Trabalho"
    }
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setCurrentIndex(prev => (prev - 1 + testimonials.length) % testimonials.length);
    }
  }, [emblaApi, testimonials.length]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }
  }, [emblaApi, testimonials.length]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary via-primary to-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      
      <div className="container mx-auto px-4 relative">
        <m.div 
          className="text-center mb-8 sm:mb-12"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-base sm:text-lg text-white/90">
            Depoimentos reais de pessoas que confiaram em nosso trabalho
          </p>
        </m.div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-2 sm:px-4">
                  <m.div 
                    className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 sm:p-8 md:p-12 overflow-hidden before:absolute before:inset-0 before:p-[1px] before:rounded-xl before:bg-gradient-to-r before:from-white/30 before:via-cyan-400/50 before:to-white/30 before:-z-10"
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Floating quote icon */}
                    <m.div
                      animate={shouldReduceMotion ? {} : { 
                        y: [0, -5, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{ 
                        duration: 3, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      }}
                    >
                      <Quote className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-white/40 mb-4 sm:mb-6" />
                    </m.div>
                    
                    <p className="text-base sm:text-lg md:text-xl text-white mb-6 sm:mb-8 leading-relaxed">
                      "{testimonial.text}"
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-3 sm:gap-0">
                      <div>
                        <p className="font-semibold text-white text-sm sm:text-base">
                          {testimonial.author}
                        </p>
                        <p className="text-xs sm:text-sm text-white/70">
                          {testimonial.area}
                        </p>
                      </div>
                      {/* Sparkle stars animation */}
                      <m.div 
                        className="flex gap-1"
                        initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        {[...Array(5)].map((_, i) => (
                          <m.div 
                            key={i} 
                            className="text-amber-400 text-sm sm:text-base"
                            animate={shouldReduceMotion ? {} : { 
                              scale: [1, 1.2, 1],
                              opacity: [1, 0.8, 1]
                            }}
                            transition={{ 
                              delay: i * 0.1, 
                              duration: 1.5, 
                              repeat: Infinity,
                              repeatDelay: 2
                            }}
                          >
                            ★
                          </m.div>
                        ))}
                      </m.div>
                    </div>
                  </m.div>
                </div>
              ))}
            </div>
          </div>

          <m.div 
            className="flex justify-center gap-3 sm:gap-4 mt-6 sm:mt-8"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <m.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            >
              <Button
                variant="secondary"
                size="icon"
                onClick={scrollPrev}
                className="rounded-full h-10 w-10 sm:h-12 sm:w-12"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </m.div>
            <m.div
              whileHover={shouldReduceMotion ? undefined : { scale: 1.1 }}
              whileTap={shouldReduceMotion ? undefined : { scale: 0.95 }}
            >
              <Button
                variant="secondary"
                size="icon"
                onClick={scrollNext}
                className="rounded-full h-10 w-10 sm:h-12 sm:w-12"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;

import { m, useReducedMotion } from "framer-motion";
import { MessageCircle, ArrowRight, Award, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import drGilbertoPhoto from "@/assets/dr-gilberto-riccio.jpg";

const WHATSAPP_URL =
  "https://wa.me/5571997092633?text=Ol%C3%A1!%20Preciso%20falar%20com%20um%20advogado.";

const practiceAreas = [
  "Trabalhista",
  "Família",
  "Previdenciário",
  "Consumidor",
  "Civil",
  "Criminal",
];

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative w-full bg-background border-b border-accent/40 overflow-hidden">
      {/* Video background — INTACTO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster=""
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>
      {/* Overlays — PRESERVADOS */}
      <div className="absolute inset-0 bg-primary/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/80 pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-14 sm:pb-16 lg:pb-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* ===== LEFT: copy + CTA ===== */}
          <m.div
            className="lg:col-span-7"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent" />
              <span className="text-[11px] sm:text-xs font-sans font-medium tracking-[0.25em] uppercase text-accent">
                Advocacia · Atendimento Online
              </span>
            </div>

            {/* Serif headline */}
            <h1 className="font-display text-[2.4rem] sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.02em] text-background">
              Advogados para{" "}
              <em className="not-italic text-accent">qualquer causa</em>, com a
              seriedade de sempre.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 sm:mt-7 max-w-xl text-base sm:text-lg text-background/80 font-sans leading-relaxed">
              Escritório generalista com advogados inscritos na OAB. Atendimento
              direto pelo WhatsApp, sigilo profissional e estratégia construída
              caso a caso — do trabalhista ao criminal.
            </p>

            {/* CTA + social proof */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8">
              <div>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#1FB855] text-white font-sans font-semibold rounded-full px-7 h-12 shadow-lg shadow-[#25D366]/25 transition-all hover:-translate-y-0.5"
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Falar com Advogado
                  </a>
                </Button>
                <p className="mt-3 text-background/50 text-[10px] uppercase tracking-[0.18em] font-semibold">
                  Resposta em até 5 min úteis
                </p>
              </div>

              <div className="flex flex-col gap-1.5 sm:border-l sm:border-background/15 sm:pl-8">
                <div className="flex gap-0.5 text-accent" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-accent" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-background font-medium text-sm tracking-tight">
                  +2.500 clientes atendidos
                </p>
                <p className="text-background/45 text-[10px] uppercase tracking-[0.18em]">
                  Atendimento em todo o Brasil
                </p>
              </div>
            </div>

            {/* Practice areas chips */}
            <div className="mt-9 sm:mt-11 flex flex-wrap gap-2">
              {practiceAreas.map((area) => (
                <span
                  key={area}
                  className="text-[11px] sm:text-xs font-sans font-medium tracking-wide uppercase text-background/70 border border-background/20 rounded-full px-3.5 py-1.5"
                >
                  {area}
                </span>
              ))}
            </div>
          </m.div>

          {/* ===== RIGHT: Authority card (desktop only) ===== */}
          <div className="hidden lg:flex lg:col-span-5 justify-end">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-4 border border-accent/20 rounded-2xl pointer-events-none" />
              <m.div
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative bg-primary/40 backdrop-blur-md p-8 rounded-2xl border border-background/10 shadow-2xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-full border-2 border-accent p-1.5 mb-6">
                    <img
                      src={drGilbertoPhoto}
                      alt="Foto do Dr. Gilberto Riccio"
                      loading="lazy"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  <h3 className="font-display text-xl text-background mb-1 leading-tight">
                    Dr. Gilberto Riccio
                  </h3>
                  <p className="text-accent text-xs font-bold uppercase tracking-[0.2em] mb-7">
                    Advogado · OAB/BA 46.638
                  </p>

                  <div className="w-full space-y-4 text-left">
                    <div className="flex items-center gap-4 text-background/75 text-sm">
                      <div className="w-10 h-10 rounded bg-background/5 flex items-center justify-center flex-shrink-0">
                        <Award className="w-5 h-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <span className="font-medium">Inscrito na OAB/BA 46.638</span>
                    </div>
                    <div className="flex items-center gap-4 text-background/75 text-sm">
                      <div className="w-10 h-10 rounded bg-background/5 flex items-center justify-center flex-shrink-0">
                        <ShieldCheck className="w-5 h-5 text-accent" strokeWidth={1.5} />
                      </div>
                      <span className="font-medium">Atuação em 6 áreas do direito</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-background/10 w-full">
                    <p className="text-background/45 text-[10px] uppercase tracking-[0.18em]">
                      Sigilo profissional total
                    </p>
                  </div>
                </div>
              </m.div>
            </div>
          </div>
        </div>
      </div>

      {/* Closing gold rule */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-accent/50" />
      </div>
    </section>
  );
};

export default HeroSection;

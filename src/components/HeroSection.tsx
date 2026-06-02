import { m, useReducedMotion } from "framer-motion";
import { Scale, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";


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
      {/* Video background */}
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
      {/* Dark emerald overlay for video visibility + text readability */}
      <div className="absolute inset-0 bg-primary/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/60 to-primary/80 pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Editorial column */}
          <m.div
            className="lg:col-span-7"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Kicker */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent" />
              <span className="text-[11px] sm:text-xs font-sans font-medium tracking-[0.25em] uppercase text-accent">
                Advocacia · Atendimento Online
              </span>
            </div>

            {/* Serif headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-background">
              Advogados para{" "}
              <em className="not-italic text-accent">qualquer causa</em>,
              <br className="hidden sm:block" /> com a seriedade de sempre.
            </h1>

            {/* Subtitle */}
            <p className="mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-background/80 font-sans leading-relaxed">
              Escritório generalista com advogados inscritos na OAB. Atendimento
              direto pelo WhatsApp, sigilo profissional e estratégia construída
              caso a caso — do trabalhista ao criminal.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-primary font-sans font-semibold rounded-sm px-7 h-12 shadow-button"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Falar com Advogado
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-background/60 bg-transparent text-background hover:bg-background/10 hover:text-background font-sans font-medium rounded-sm px-7 h-12"
              >
                <a href="#advogados">
                  Conhecer o escritório
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Quiet trust line */}
            <p className="mt-8 text-xs sm:text-sm text-background/70 font-sans">
              <span className="text-background font-medium">+2.500 clientes</span>
              <span className="mx-2 text-accent">·</span>
              OAB/BA 46.638
              <span className="mx-2 text-accent">·</span>
              Sigilo profissional garantido
            </p>
          </m.div>

          {/* Editorial card column */}
          <m.aside
            className="lg:col-span-5"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative bg-card border border-accent/50 shadow-elegant rounded-sm p-6 sm:p-8">
              {/* Corner accents */}
              <span className="absolute top-0 left-0 w-6 h-px bg-accent" />
              <span className="absolute top-0 left-0 w-px h-6 bg-accent" />
              <span className="absolute bottom-0 right-0 w-6 h-px bg-accent" />
              <span className="absolute bottom-0 right-0 w-px h-6 bg-accent" />

              <div className="flex flex-col items-center justify-center mb-6">
                <span className="font-display text-4xl sm:text-5xl text-primary leading-none">
                  Advogado <span className="text-accent">Já</span>
                </span>
                <span className="mt-2 text-[10px] font-sans tracking-[0.3em] uppercase text-muted-foreground">
                  Sociedade de Advogados
                </span>
              </div>

              <div className="flex items-center justify-center gap-3 text-foreground mb-6">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <span className="font-sans text-sm tracking-wide">
                  Advogados inscritos na OAB
                </span>
              </div>

              <div className="h-px w-full bg-accent/40 my-6" />

              <p className="text-center font-display text-xl text-foreground mb-5">
                Áreas de atuação
              </p>

              <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-sans text-sm text-foreground">
                {practiceAreas.map((area) => (
                  <li key={area} className="flex items-center gap-2">
                    <Scale className="w-3.5 h-3.5 text-accent shrink-0" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </m.aside>
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

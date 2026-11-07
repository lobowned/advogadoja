import { m, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowRight } from "lucide-react";
import { heroStagger, heroBadge, heroTitleSlide } from "@/lib/motion-variants";
import { trackWhatsAppConversion } from "@/lib/trackWhatsApp";

const WHATSAPP_NUMBER = "5571997036269";

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const handleWhatsApp = () => {
    trackWhatsAppConversion();
    const message = "Olá! Preciso falar com um advogado.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden min-h-screen w-full flex flex-col bg-foreground">
      {/* Video background — INTACTO */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/videos/hero-poster.jpg"
      >
        <source
          media="(max-width: 767px)"
          src="/videos/hero-background-mobile.mp4"
          type="video/mp4"
        />
        <source src="/videos/hero-background.mp4" type="video/mp4" />
      </video>

      {/* Subtle top gradient for navbar + badge legibility */}
      <div
        className="absolute inset-x-0 top-0 h-32 sm:h-40 bg-gradient-to-b from-foreground via-foreground/40 to-transparent"
        aria-hidden="true"
      />

      {/* Subtle bottom gradient for CTA legibility */}
      <div
        className="absolute inset-x-0 bottom-0 h-32 sm:h-40 bg-gradient-to-t from-foreground via-foreground/40 to-transparent"
        aria-hidden="true"
      />

      {/* Top — Trust badges (pt clears the floating Navbar) */}
      <div className="relative z-10 container mx-auto px-4 pt-20 md:pt-28">
        <m.div
          className="flex flex-row flex-wrap items-center justify-center gap-2 sm:gap-3"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          <m.div variants={heroBadge}>
            <Badge
              variant="outline"
              className="bg-background/5 backdrop-blur-sm border-background/30 text-background px-3 py-1.5 text-[11px] sm:text-xs font-normal tracking-wide"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-background/80 rounded-full animate-pulse-dot" />
                Atendimento Online
              </span>
            </Badge>
          </m.div>
          <m.div variants={heroBadge}>
            <Badge
              variant="outline"
              className="bg-background/5 backdrop-blur-sm border-background/30 text-background px-3 py-1.5 text-[11px] sm:text-xs font-normal tracking-wide"
            >
              OAB/BA 46.638
            </Badge>
          </m.div>
          <m.div variants={heroBadge}>
            <Badge
              variant="outline"
              className="bg-background/5 backdrop-blur-sm border-background/30 text-background px-3 py-1.5 text-[11px] sm:text-xs font-normal tracking-wide"
            >
              6 áreas do direito
            </Badge>
          </m.div>
        </m.div>
      </div>

      {/* Center — Wordmark */}
      <div className="relative z-10 flex-1 flex items-center justify-center container mx-auto px-4 py-10">
        <m.div
          className="relative flex flex-col items-center text-center"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
        >
          {/* Localized scrim so the wordmark stays readable over the video */}
          <div
            className="absolute -inset-x-24 sm:-inset-x-40 -inset-y-24 sm:-inset-y-32 bg-[radial-gradient(ellipse_60%_50%_at_center,rgba(0,0,0,0.6)_0%,rgba(0,0,0,0.34)_38%,rgba(0,0,0,0.12)_62%,rgba(0,0,0,0)_82%)]"
            aria-hidden="true"
          />
          <m.div variants={heroBadge} className="relative h-px w-12 sm:w-16 bg-accent/60 mb-6 sm:mb-8" />
          <m.h1
            variants={heroTitleSlide}
            className="relative font-display text-background text-[2.5rem] leading-[1.05] sm:text-6xl lg:text-7xl font-light tracking-[0.01em] drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]"
          >
            Riccio <span className="text-accent">Advocacia</span>
            <span className="block mt-4 font-roman text-[11px] sm:text-sm tracking-[0.3em] uppercase text-background/85">
              Advogado em Salvador e online
            </span>
          </m.h1>
          <m.div variants={heroBadge} className="relative h-px w-12 sm:w-16 bg-accent/60 mt-6 sm:mt-8" />
        </m.div>
      </div>

      {/* Bottom — CTAs */}
      <div className="relative z-10 container mx-auto px-4 pb-8 sm:pb-14 md:pb-16">
        <m.div
          className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4"
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          transition={shouldReduceMotion ? undefined : { delay: 0.2 }}
        >
          <button
            onClick={handleWhatsApp}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-background text-foreground px-6 sm:px-7 py-3 sm:py-3.5 text-sm tracking-wide hover:bg-background/90 transition-colors rounded-sm"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={1.5} />
            Falar com Advogado
          </button>
          <a
            href="#advogados"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-background border border-background/40 px-6 sm:px-7 py-3 sm:py-3.5 text-sm tracking-wide hover:bg-background hover:text-foreground transition-colors rounded-sm"
          >
            Conhecer o escritório
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </m.div>
      </div>
    </section>
  );
};

export default HeroSection;

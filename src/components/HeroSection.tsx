import { m, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowRight } from "lucide-react";
import { heroStagger, heroBadge } from "@/lib/motion-variants";
import { trackWhatsAppConversion } from "@/lib/trackWhatsApp";

const WHATSAPP_NUMBER = "5571997092633";

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
        preload="auto"
        poster=""
      >
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
      <div className="relative z-10 container mx-auto px-4 pt-20 sm:pt-24">
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

      {/* Spacer — lets the video breathe */}
      <div className="flex-1" />

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

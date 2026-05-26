import { useState, useEffect } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, ArrowRight } from "lucide-react";
import { heroStagger, heroBadge } from "@/lib/motion-variants";
import { trackWhatsAppConversion } from "@/lib/trackWhatsApp";

const WHATSAPP_NUMBER = "5571997036269";

const CriminalHeroSection = () => {
  const shouldReduceMotion = useReducedMotion();
  const [imageLoaded, setImageLoaded] = useState(false);

  // Preload the desktop hero to know when to fade in; mobile loads via CSS
  useEffect(() => {
    const img = new Image();
    img.src = "/hero-criminal.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  const handleWhatsApp = () => {
    trackWhatsAppConversion();
    const message = "Olá! Preciso falar com advogado criminalista.";
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <section className="relative overflow-hidden min-h-screen w-full flex flex-col bg-foreground">
      {/* Background image — portrait on mobile, landscape on desktop. Tailwind JIT needs literal class strings (no template-string interpolation). */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-700 bg-[url('/hero-criminal-mobile.png')] md:bg-[url('/hero-criminal.png')]"
        style={{ opacity: imageLoaded ? 1 : 0.6 }}
        aria-hidden="true"
      />

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
                Plantão 24h
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
        </m.div>
      </div>

      {/* Spacer — lets the image's center brand breathe */}
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
            Falar com o escritório
          </button>
          <a
            href="#areas"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-background border border-background/40 px-6 sm:px-7 py-3 sm:py-3.5 text-sm tracking-wide hover:bg-background hover:text-foreground transition-colors rounded-sm"
          >
            Conhecer as áreas
            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </m.div>
      </div>
    </section>
  );
};

export default CriminalHeroSection;

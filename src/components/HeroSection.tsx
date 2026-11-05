import { useEffect, useState } from "react";
import { m, useReducedMotion } from "framer-motion";
import { Scale, ShieldCheck, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";


const WHATSAPP_URL =
  "https://wa.me/5571997036269?text=Ol%C3%A1!%20Preciso%20falar%20com%20um%20advogado.";

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
  // Vídeo só depois do primeiro paint e só em conexão boa: o poster é o LCP.
  const [playVideo, setPlayVideo] = useState(false);
  useEffect(() => {
    if (shouldReduceMotion) return;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }).connection;
    if (conn?.saveData || /(^|-)2g$|^3g$/.test(conn?.effectiveType ?? "")) return;
    const id = window.setTimeout(() => setPlayVideo(true), 1200);
    return () => window.clearTimeout(id);
  }, [shouldReduceMotion]);

  return (
    <section className="relative w-full bg-black overflow-hidden">
      {/* Video background */}
      <img
        src="/videos/hero-poster.jpg"
        alt=""
        aria-hidden="true"
        {...{ fetchpriority: "high" }}
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
      />
      {playVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/videos/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
      )}
      {/* Véu preto: vídeo aparece em tons de cinza, texto fica legível */}
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_30%_50%,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.85)_75%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 lg:pt-40 pb-20 sm:pb-24 lg:pb-32">
        <div className="grid grid-cols-1 gap-10 lg:gap-16 items-center">
          <m.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Assinatura */}
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#d4af37]" />
              <h1 className="font-roman text-xs sm:text-sm tracking-[0.3em] uppercase text-[#d4af37]">
                Riccio Advocacia · Advogado em Salvador e online
              </h1>
            </div>

            <p className="font-display font-medium text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1] tracking-[-0.01em] text-[#f5efe0]">
              A defesa que o seu
              <br />
              <em className="italic font-normal bg-gradient-to-r from-[#b8892b] via-[#f3d98b] to-[#b8892b] bg-clip-text text-transparent">
                patrimônio merece.
              </em>
            </p>

            <p className="mt-8 max-w-lg text-base sm:text-lg text-[#f5efe0]/75 font-sans font-light leading-relaxed">
              Escritório generalista com advogados inscritos na OAB. Atendimento
              direto pelo WhatsApp, sigilo profissional e estratégia construída
              caso a caso — do trabalhista ao criminal.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-[#b8892b] via-[#e6c66e] to-[#b8892b] hover:brightness-110 text-black font-sans font-semibold tracking-wide rounded-none px-8 h-13 py-4 shadow-[0_8px_30px_-8px_rgba(212,175,55,0.6)]"
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
                className="border-[#d4af37]/60 bg-transparent text-[#f5efe0] hover:bg-[#d4af37]/10 hover:text-[#f5efe0] font-sans font-medium tracking-wide rounded-none px-8 h-13 py-4"
              >
                <a href="#advogados">
                  Conhecer o escritório
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>

            {/* Quiet trust line */}
            <p className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-2 font-roman text-[11px] sm:text-xs tracking-[0.25em] uppercase text-[#f5efe0]/60">
              <span className="whitespace-nowrap">OAB/BA 46.638</span>
              <span className="text-[#d4af37]">◆</span>
              <span className="whitespace-nowrap">Sigilo absoluto</span>
              <span className="text-[#d4af37]">◆</span>
              <span className="whitespace-nowrap">Todo o Brasil</span>
            </p>
          </m.div>

        </div>
      </div>

      {/* Closing gold rule */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/70 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;

import { motion } from "framer-motion";
import { ShieldCheck, MessageCircle, Clock, Heart } from "lucide-react";

import PrevWhatsappButton from "./PrevWhatsappButton";

/**
 * Hero da home /prev — versão POPULAR com foto REAL de casal de idosos.
 */
export default function PrevHero() {
  return (
    <section className="relative overflow-hidden bg-prev-navy text-prev-beige">
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
      {/* Dark navy overlay for video readability */}
      <div className="absolute inset-0 bg-prev-navy/80 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-prev-navy/60 via-prev-navy/80 to-prev-navy/95 pointer-events-none" />

      {/* Textura sutil de pontos */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F5F1EA 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Blobs grandes - movimento orgânico */}
      <div className="absolute -top-32 -right-20 w-[500px] h-[500px] rounded-full bg-prev-gold/12 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[600px] h-[600px] rounded-full bg-prev-salvia/15 blur-[140px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 pt-14 pb-20 lg:pt-24 lg:pb-28">
        <div className="max-w-3xl">
          {/* ===== Copy ===== */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-prev-gold/15 border border-prev-gold/30 text-xs uppercase tracking-[0.15em] text-prev-gold mb-7"
            >
              <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2} />
              Advogado especialista em INSS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-[2.5rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] tracking-tight mb-6"
            >
              Seu INSS{" "}
              <span className="relative inline-block">
                <span className="italic text-prev-gold">travou?</span>
                <svg
                  aria-hidden
                  className="absolute -bottom-2 left-0 w-full text-prev-gold/60"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9 Q 50 2, 100 6 T 198 4"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />A gente destrava.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-prev-beige/85 leading-relaxed mb-9 max-w-xl"
            >
              Aposentadoria, auxílio-doença, BPC, invalidez — você conta o que
              tá acontecendo, eu olho seu caso e te falo a real. Sem
              juridiquês, sem promessa furada.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-9"
            >
              <PrevWhatsappButton
                quizKey="home"
                className="group inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-7 py-4 rounded-full font-semibold text-base shadow-xl shadow-[#25D366]/30 transition-all hover:shadow-2xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                Falar pelo WhatsApp agora
              </PrevWhatsappButton>
              <a
                href="#calculadora-rapida"
                className="inline-flex items-center justify-center gap-2 text-prev-beige/90 hover:text-prev-gold px-5 py-4 rounded-full font-medium text-base transition-colors underline underline-offset-4 decoration-prev-gold/40 hover:decoration-prev-gold"
              >
                Ver quanto falta pra aposentar
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-2.5 text-sm text-prev-beige/70"
            >
              <span className="inline-flex items-center gap-2">
                <Clock className="w-4 h-4 text-prev-gold" strokeWidth={2} />
                Resposta em até 2h úteis
              </span>
              <span className="inline-flex items-center gap-2">
                <Heart className="w-4 h-4 text-prev-gold" strokeWidth={2} />
                Atendimento humano
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-prev-gold" strokeWidth={2} />
                Sigilo total
              </span>
            </motion.div>
          </div>

        </div>

        {/* ===== Divisor + calculadora ===== */}
      </div>
    </section>
  );
}

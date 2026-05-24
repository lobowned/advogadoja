import { motion } from "framer-motion";
import { ShieldCheck, MessageCircle, Phone, Clock } from "lucide-react";
import { PREV_IMAGES } from "@/lib/prev-images";
import { whatsappLink, WHATSAPP_MESSAGES } from "@/lib/prev-config";
import PrevQuickCalc from "./PrevQuickCalc";

export default function PrevHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-prev-navy via-prev-navy to-[#0F2438] text-prev-beige">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23F5F1EA\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
        }}
      />
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-prev-gold/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-prev-salvia/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 pt-12 pb-16 lg:pt-20 lg:pb-24">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-prev-gold/15 border border-prev-gold/25 text-xs uppercase tracking-wider text-prev-gold mb-6"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Advogado especialista em INSS
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] tracking-tight mb-6"
            >
              Sua aposentadoria <span className="italic text-prev-gold">enrolada</span> no INSS?
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-prev-beige/85 leading-relaxed mb-8 max-w-xl"
            >
              A gente te ajuda a entender o que você tem direito e o caminho mais rápido para conseguir — sem promessa furada, sem juridiquês.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 mb-8"
            >
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.home)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-7 py-4 rounded-full font-semibold text-base shadow-lg shadow-[#25D366]/30 transition-all hover:shadow-xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                Conversar agora pelo WhatsApp
              </a>
              <a
                href="#calculadora-rapida"
                className="inline-flex items-center justify-center gap-2 bg-prev-beige/10 hover:bg-prev-beige/15 text-prev-beige px-7 py-4 rounded-full font-medium text-base border border-prev-beige/15 transition-colors"
              >
                Fazer cálculo rápido
              </a>
            </motion.div>

            <div className="grid sm:grid-cols-3 gap-3 text-sm text-prev-beige/75 max-w-xl">
              <span className="inline-flex items-center gap-2"><Phone className="w-4 h-4 text-prev-gold" />Atendimento online</span>
              <span className="inline-flex items-center gap-2"><Clock className="w-4 h-4 text-prev-gold" />Resposta em horário útil</span>
              <span className="inline-flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-prev-gold" />Análise segura</span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
              <img
                src={PREV_IMAGES.heroSenior.src}
                alt={PREV_IMAGES.heroSenior.alt}
                loading="eager"
                className="w-full h-full object-cover"
              />
            </div>
            <div id="calculadora-rapida">
              <PrevQuickCalc />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ShieldCheck, Scale } from "lucide-react";
import PrevQuickCalc from "./PrevQuickCalc";

/**
 * Hero da home /prev.
 * Layout split: copy + assinatura à esquerda, calculadora à direita.
 * Background com gradiente sutil navy + textura tipográfica.
 */
export default function PrevHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-prev-navy via-prev-navy to-[#0F2438] text-prev-beige">
      {/* Texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F5F1EA' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Decorativos */}
      <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-prev-gold/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-prev-salvia/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-5 pt-16 pb-20 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Lado esquerdo: copy */}
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-prev-beige/10 border border-prev-beige/15 text-xs uppercase tracking-wider text-prev-beige/80 mb-7"
            >
              <Scale className="w-3.5 h-3.5" />
              Especialista em Direito Previdenciário
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6"
            >
              Aposentadoria sem{" "}
              <span className="italic text-prev-gold">surpresa</span>.
              <br className="hidden sm:block" /> Direito sem{" "}
              <span className="italic text-prev-gold">juridiquês</span>.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-prev-beige/80 leading-relaxed mb-8"
            >
              Análise técnica do seu CNIS, estratégia personalizada e
              acompanhamento próximo do início ao fim. Para você descobrir o que
              tem direito — e o melhor caminho para conquistar.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-prev-beige/70"
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-prev-gold" />
                Atendimento humanizado
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-prev-gold" />
                100% online
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-prev-gold" />
                Sigilo profissional
              </span>
            </motion.div>
          </div>

          {/* Lado direito: calculadora */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:justify-self-end w-full max-w-md mx-auto lg:mx-0"
          >
            <PrevQuickCalc />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

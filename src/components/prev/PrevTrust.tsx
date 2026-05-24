import { motion } from "framer-motion";
import { MessagesSquare, FileSearch, Lock, Heart } from "lucide-react";

const PILLARS = [
  {
    icon: Heart,
    title: "Atendimento humano",
    text: "Quem te atende sou eu — não call center. Você fala direto com advogado, no WhatsApp ou pessoalmente.",
  },
  {
    icon: MessagesSquare,
    title: "Sem juridiquês",
    text: "Cada etapa do seu processo eu explico de um jeito que dá pra entender. Você sabe sempre o que tá acontecendo.",
  },
  {
    icon: FileSearch,
    title: "Análise honesta",
    text: "Se seu caso não tem chance, eu falo. Não vendo ilusão. Se tem chance, mostro o caminho mais curto e seguro.",
  },
  {
    icon: Lock,
    title: "Sigilo total",
    text: "Tudo que você me contar fica entre nós. É garantia da profissão de advogado, protegida por lei.",
  },
];

export default function PrevTrust() {
  return (
    <section className="py-20 bg-prev-beige">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
            Como eu trabalho
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-4">
            Quatro coisas que{" "}
            <span className="italic">não são marketing</span>.
          </h2>
          <p className="text-prev-navy/70 text-lg leading-relaxed">
            Previdenciário envolve documento antigo, regra que muda toda
            hora e prazo apertado. A diferença tá nos detalhes — e em quem
            tá do seu lado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-prev-navy/8"
            >
              <div className="w-12 h-12 rounded-xl bg-prev-navy flex items-center justify-center mb-4">
                <p.icon className="w-6 h-6 text-prev-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg text-prev-navy mb-2">
                {p.title}
              </h3>
              <p className="text-prev-navy/70 leading-relaxed text-[15px]">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

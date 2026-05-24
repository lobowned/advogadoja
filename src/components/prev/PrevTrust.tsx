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
    <section className="py-24 md:py-32 bg-prev-beige">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-16">
          <span className="prev-eyebrow mb-4">Como eu trabalho</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-prev-navy leading-[1.05] mb-5 mt-3">
            Quatro coisas que{" "}
            <span className="italic text-prev-gold">não são marketing</span>.
          </h2>
          <p className="text-prev-navy/70 text-lg leading-[1.75]">
            Previdenciário envolve documento antigo, regra que muda toda
            hora e prazo apertado. A diferença tá nos detalhes — e em quem
            tá do seu lado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-prev-navy/10 border border-prev-navy/10">
          {PILLARS.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-prev-beige p-7 group hover:bg-white transition-colors duration-500"
            >
              <p.icon
                className="w-7 h-7 text-prev-gold mb-6 group-hover:scale-110 transition-transform duration-500"
                strokeWidth={1.2}
              />
              <h3 className="font-serif text-[1.35rem] text-prev-navy mb-3 leading-tight">
                {p.title}
              </h3>
              <div className="w-8 h-px bg-prev-gold/50 mb-4" />
              <p className="text-prev-navy/70 leading-[1.7] text-[15px]">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

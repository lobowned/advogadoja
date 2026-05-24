import { motion } from "framer-motion";
import { Scale, MessagesSquare, FileSearch, Lock } from "lucide-react";

const PILLARS = [
  {
    icon: Scale,
    title: "Atuação ética",
    text: "Inscrição ativa na OAB e atuação em estrita conformidade com o Estatuto da Advocacia e o Código de Ética da Profissão.",
  },
  {
    icon: MessagesSquare,
    title: "Sem juridiquês",
    text: "Cada etapa do seu processo explicada em linguagem clara — você sabe sempre o que está acontecendo e por quê.",
  },
  {
    icon: FileSearch,
    title: "Análise técnica",
    text: "Estudo completo do seu CNIS, vínculos, períodos especiais e regras de transição para indicar o melhor caminho.",
  },
  {
    icon: Lock,
    title: "Sigilo profissional",
    text: "Suas informações são protegidas pelo sigilo profissional do advogado, garantido por lei.",
  },
];

export default function PrevTrust() {
  return (
    <section className="py-20 bg-prev-beige">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
            Como trabalhamos
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-4">
            Quatro pilares que orientam{" "}
            <span className="italic">cada atendimento</span>.
          </h2>
          <p className="text-prev-navy/65 text-lg leading-relaxed">
            Direito previdenciário envolve documentos antigos, regras que mudam
            e prazos rigorosos. A diferença está nos detalhes — e em quem está
            do seu lado.
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
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-prev-navy/8"
            >
              <div className="w-11 h-11 rounded-lg bg-prev-navy flex items-center justify-center mb-4">
                <p.icon className="w-5 h-5 text-prev-gold" strokeWidth={1.5} />
              </div>
              <h3 className="font-serif text-lg text-prev-navy mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-prev-navy/65 leading-relaxed">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

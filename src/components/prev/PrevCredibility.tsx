import { motion } from "framer-motion";
import { Lock, FileSignature, Scale, MessagesSquare } from "lucide-react";

/**
 * "Defendemos seus direitos" — versão editorial /prev.
 * Eyebrow + H2 + stats + grid de garantias, no tema navy/gold.
 */
const GUARANTEES = [
  {
    icon: Lock,
    title: "Sigilo profissional total",
    text: "Tudo que você nos contar fica protegido pelo sigilo da advocacia — garantia da OAB, protegida por lei.",
  },
  {
    icon: Scale,
    title: "Advogado responsável",
    text: "Seu caso é conduzido pelo Dr. Gilberto Riccio, inscrito na OAB/BA sob o nº 46.638.",
  },
  {
    icon: FileSignature,
    title: "Contrato por escrito",
    text: "Os honorários dependem do tipo de caso e são combinados por escrito antes de qualquer ação. Sem letra miúda, sem surpresa.",
  },
  {
    icon: MessagesSquare,
    title: "Sem juridiquês",
    text: "Cada etapa do seu processo explicada num jeito que dá pra entender. Você sabe sempre o que tá acontecendo.",
  },
];

// Só dados verificáveis: sem número de clientes nem tempo de resposta (Provimento OAB 205/2021).
const STATS = [
  { num: "OAB", label: "Inscrição ativa · BA 46.638" },
  { num: "100%", label: "Atendimento online" },
  { num: "BR", label: "Atendimento Brasil todo" },
  { num: "CNIS", label: "Análise do histórico no INSS" },
];

export default function PrevCredibility() {
  return (
    <section className="relative py-24 md:py-32 bg-prev-navy text-prev-beige overflow-hidden">
      {/* Textura sutil de pontos */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #F5F1EA 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="absolute -top-32 -right-20 w-[480px] h-[480px] rounded-full bg-prev-gold/10 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-16">
          <span className="prev-eyebrow mb-4">Por que confiar</span>
          <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] mt-3">
            Defendemos seus{" "}
            <span className="italic text-prev-gold">direitos</span>.
          </h2>
          <p className="text-prev-beige/75 text-lg leading-[1.75] mt-5">
            Atendimento com seriedade, transparência e estratégia construída
            caso a caso, pelo Dr. Gilberto Riccio (OAB/BA 46.638).
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-prev-beige/10 border border-prev-beige/10 mb-20">
          {STATS.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-prev-navy p-7"
            >
              <p className="font-serif text-prev-gold text-4xl sm:text-5xl tnum leading-none mb-3">
                {s.num}
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-prev-beige/70 font-semibold">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Garantias */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-prev-beige/10 border border-prev-beige/10">
          {GUARANTEES.map((g, idx) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-prev-navy p-7 group hover:bg-prev-navy/60 transition-colors duration-500"
            >
              <g.icon
                className="w-7 h-7 text-prev-gold mb-6 group-hover:scale-[1.08] transition-transform duration-500"
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-[1.35rem] text-prev-beige mb-3 leading-tight">
                {g.title}
              </h3>
              <div className="w-8 h-px bg-prev-gold/50 mb-4" />
              <p className="text-prev-beige/75 leading-[1.7] text-[15px]">
                {g.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

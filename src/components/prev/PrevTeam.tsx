import { motion } from "framer-motion";
import { lawyers } from "@/data/lawyers";

/**
 * "Nossa equipe de especialistas em INSS" — versão editorial /prev.
 * Filtra os advogados previdenciaristas e mostra em grid sóbrio
 * navy/gold, sem efeitos 3D da versão da home principal.
 */
export default function PrevTeam() {
  const team = lawyers.filter((l) => l.specialty === "previdenciario");

  return (
    <section className="py-24 md:py-32 bg-prev-beige">
      <div className="max-w-6xl mx-auto px-5">
        <div className="max-w-2xl mb-16">
          <span className="prev-eyebrow mb-4">Quem cuida do seu caso</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-prev-navy leading-[1.05] mb-5 mt-3">
            Nossa equipe de{" "}
            <span className="italic text-prev-gold">especialistas em INSS</span>.
          </h2>
          <p className="text-prev-navy/70 text-lg leading-[1.75]">
            Advogados inscritos na OAB, dedicados exclusivamente ao Direito
            Previdenciário. Cada caso é conduzido por quem entende do tema.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-prev-navy/10 border border-prev-navy/10">
          {team.map((lawyer, idx) => (
            <motion.article
              key={lawyer.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className="bg-prev-beige p-7 hover:bg-white transition-colors duration-500 group"
            >
              <div className="flex items-start gap-4 mb-5">
                <div className="relative flex-shrink-0">
                  <img
                    src={lawyer.photo}
                    alt={`Foto de ${lawyer.name}`}
                    loading="lazy"
                    className="w-16 h-16 rounded-full object-cover ring-1 ring-prev-gold/40"
                  />
                  <span
                    aria-hidden
                    className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-prev-salvia border-2 border-prev-beige group-hover:border-white transition-colors"
                  />
                </div>
                <div className="min-w-0 pt-1">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-prev-gold font-semibold mb-1 tnum">
                    {lawyer.oab}
                  </p>
                  <h3 className="font-serif text-xl text-prev-navy leading-tight">
                    {lawyer.name}
                  </h3>
                </div>
              </div>

              <div className="w-8 h-px bg-prev-gold/50 mb-4" />

              <p className="text-xs uppercase tracking-[0.18em] text-prev-navy/60 font-semibold mb-3">
                {lawyer.subSpecialty}
              </p>
              <p className="text-prev-navy/72 leading-[1.7] text-[14.5px]">
                {lawyer.bio}
              </p>
            </motion.article>
          ))}
        </div>

        <p className="text-center text-xs text-prev-navy/50 mt-10 max-w-2xl mx-auto leading-relaxed">
          Conforme Provimento 205/2021 da OAB, advogados não podem captar
          clientela. As informações acima têm caráter exclusivamente
          informativo sobre nossa atuação técnica.
        </p>
      </div>
    </section>
  );
}

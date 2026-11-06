import { motion } from "framer-motion";
import drGilbertoPhoto from "@/assets/dr-gilberto-riccio.jpg";

/**
 * "Quem cuida do seu caso" — versão editorial /prev.
 *
 * Antes listava os assistentes virtuais do chat (nomes com "Dr./Dra." e fotos de banco
 * de imagens) sob o título "Advogados inscritos na OAB". Assistente virtual não é
 * advogado: agora mostra só o advogado responsável e diz com clareza o papel do chat.
 */
export default function PrevTeam() {
  return (
    <section className="py-24 md:py-32 bg-prev-beige">
      <div className="max-w-4xl mx-auto px-5">
        <div className="max-w-2xl mb-12">
          <span className="prev-eyebrow mb-4">Quem cuida do seu caso</span>
          <h2 className="font-serif text-4xl sm:text-5xl text-prev-navy leading-[1.05] mb-5 mt-3">
            Um advogado responsável,{" "}
            <span className="italic text-prev-gold">do começo ao fim</span>.
          </h2>
          <p className="text-prev-navy/70 text-lg leading-[1.75]">
            A análise do seu caso, os pedidos ao INSS e as ações na Justiça são conduzidos
            pelo Dr. Gilberto Riccio.
          </p>
        </div>

        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="bg-white border border-prev-navy/10 p-7 sm:p-9 flex flex-col sm:flex-row gap-6 sm:items-center"
        >
          <img
            src={drGilbertoPhoto}
            alt="Dr. Gilberto Riccio, advogado"
            loading="lazy"
            className="w-24 h-24 rounded-full object-cover ring-1 ring-prev-gold/40 flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="text-[11px] uppercase tracking-[0.2em] text-prev-gold font-semibold mb-1 tnum">
              OAB/BA 46.638
            </p>
            <h3 className="font-serif text-2xl text-prev-navy leading-tight mb-3">
              Dr. Gilberto Riccio
            </h3>
            <p className="text-prev-navy/72 leading-[1.7] text-[15px]">
              Atua em aposentadorias, auxílio-doença, BPC/LOAS, pensão por morte, revisões e
              benefícios negados pelo INSS, com atendimento online em todo o Brasil.
            </p>
          </div>
        </motion.article>

        <p className="text-center text-xs text-prev-navy/55 mt-8 max-w-2xl mx-auto leading-relaxed">
          No chat do site, a primeira orientação é feita por um assistente virtual, que organiza
          as informações do seu caso. Assistente virtual não é advogado: a análise jurídica é
          sempre feita pelo advogado responsável.
        </p>
      </div>
    </section>
  );
}

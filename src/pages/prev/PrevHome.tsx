import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { MessageCircle, Quote } from "lucide-react";

import PrevLayout from "@/components/prev/PrevLayout";
import PrevHero from "@/components/prev/PrevHero";
import PrevAreaCard from "@/components/prev/PrevAreaCard";
import PrevTrust from "@/components/prev/PrevTrust";
import PrevFaq from "@/components/prev/PrevFaq";
import { PREV_AREAS, WHATSAPP_MESSAGES, whatsappLink } from "@/lib/prev-config";
import { PREV_IMAGES } from "@/lib/prev-images";

const FAQ_HOME = [
  {
    q: "INSS negou meu pedido. O que posso fazer?",
    a: "É possível recorrer no próprio INSS ou levar o caso à Justiça. A melhor estratégia depende do motivo da negativa, dos documentos e da urgência do benefício.",
  },
  {
    q: "Preciso pagar algo antes?",
    a: "Cada caso é avaliado individualmente. As condições são explicadas antes de qualquer contratação, por escrito e sem surpresa.",
  },
  {
    q: "Atendem pessoas de outra cidade?",
    a: "Sim. A análise inicial e boa parte do acompanhamento podem ser feitos online, com envio de documentos e atendimento pelo WhatsApp.",
  },
  {
    q: "Tenho 15 anos pagando INSS. Já posso aposentar?",
    a: "Depende da sua idade, sexo, data de início das contribuições e possíveis regras de transição. Uma simulação do CNIS mostra o caminho mais seguro.",
  },
];

const CASES = [
  {
    name: "Dona M., 67 anos",
    location: "Salvador / BA",
    benefit: "Aposentadoria por idade rural",
    text: "Tinha pedidos negados por falta de documentos rurais. Com organização da prova, o novo pedido ficou mais forte.",
  },
  {
    name: "Sr. J., 54 anos",
    location: "Feira de Santana / BA",
    benefit: "Auxílio-doença",
    text: "Recebeu alta mesmo sem condições de trabalhar. A estratégia foi reunir laudos e discutir a perícia.",
  },
  {
    name: "Família R.",
    location: "Camaçari / BA",
    benefit: "BPC / LOAS",
    text: "O benefício foi negado por renda. A análise considerou gastos de saúde e vulnerabilidade familiar.",
  },
];

const STEPS = [
  "Você conta sua situação pelo WhatsApp.",
  "A gente confere documentos, CNIS e histórico do INSS.",
  "Você recebe orientação sobre o caminho administrativo ou judicial.",
];

export default function PrevHome() {
  return (
    <>
      <Helmet>
        <title>Advogado de INSS — Aposentadoria, Auxílio-Doença, BPC | Atendimento pelo WhatsApp</title>
        <meta
          name="description"
          content="Advogado especialista em INSS. Aposentadoria, auxílio-doença, aposentadoria por invalidez e BPC/LOAS. Atendimento direto pelo WhatsApp."
        />
        <link rel="canonical" href="https://advogadoja.lovable.app/prev" />
      </Helmet>

      <PrevLayout ctaMessage={WHATSAPP_MESSAGES.home}>
        <PrevHero />

        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
                Em quais casos ajudamos
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-4">
                Cada caso tem um <span className="italic">caminho diferente</span>.
              </h2>
              <p className="text-prev-navy/70 text-lg leading-relaxed">
                A primeira etapa é olhar seu histórico do INSS com calma para evitar pedido errado e perda de valor.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PREV_AREAS.map((area, idx) => {
                const img = PREV_IMAGES[area.imageKey as keyof typeof PREV_IMAGES];
                return (
                  <PrevAreaCard
                    key={area.slug}
                    slug={area.slug}
                    title={area.title}
                    short={area.short}
                    description={area.description}
                    imageUrl={img?.src}
                    imageAlt={img?.alt}
                    index={idx}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-prev-beige">
          <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
                Quem já passou por aqui
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-4">
                Casos reais com <span className="italic">identidade preservada</span>.
              </h2>
              <p className="text-prev-navy/70 text-lg leading-relaxed">
                Exemplos anônimos para respeitar o sigilo profissional.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {CASES.map((item, idx) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white p-7 rounded-2xl border border-prev-navy/8"
                >
                  <Quote className="w-8 h-8 text-prev-gold mb-4" strokeWidth={1.2} />
                  <p className="text-prev-navy/80 leading-relaxed text-[15px] mb-5">
                    {item.text}
                  </p>
                  <div className="pt-4 border-t border-prev-navy/10">
                    <p className="font-medium text-prev-navy text-sm">{item.name}</p>
                    <p className="text-xs text-prev-navy/55">{item.location}</p>
                    <p className="text-xs text-prev-gold mt-1.5 font-medium uppercase tracking-wider">
                      {item.benefit}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PrevTrust />

        <section className="py-20 bg-prev-navy text-prev-beige">
          <div className="max-w-5xl mx-auto px-5">
            <div className="max-w-2xl mb-14">
              <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
                Como funciona
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
                Três passos para entender seu direito.
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {STEPS.map((step, idx) => (
                <div key={step} className="border border-prev-beige/15 rounded-2xl p-6">
                  <span className="font-serif text-3xl text-prev-gold">0{idx + 1}</span>
                  <p className="mt-4 text-prev-beige/80 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <PrevFaq items={FAQ_HOME} />

        <section className="py-20 bg-prev-beige">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-5">
              Quer analisar seu caso agora?
            </h2>
            <p className="text-prev-navy/65 text-lg mb-8 leading-relaxed">
              Envie uma mensagem pelo WhatsApp e conte rapidamente sua situação.
            </p>
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.home)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
              Falar pelo WhatsApp
            </a>
          </div>
        </section>
      </PrevLayout>
    </>
  );
}

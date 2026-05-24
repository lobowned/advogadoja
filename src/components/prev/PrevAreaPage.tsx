import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import PrevLayout from "./PrevLayout";
import PrevFaq from "./PrevFaq";
import { whatsappLink } from "@/lib/prev-config";

interface FaqItem {
  q: string;
  a: string;
}

interface PrevAreaPageProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string; // ex: "/prev/auxilio-doenca"

  // Conteúdo
  breadcrumb: string; // ex: "Áreas / Auxílio-Doença"
  heroTitle: React.ReactNode; // pode incluir <span italic> p/ ênfase
  heroSubtitle: string;

  // Quem pode pedir
  whoSectionTitle: string;
  whoItems: string[];

  // Documentos necessários
  docsSectionTitle: string;
  docsItems: string[];

  // Estratégia (texto livre)
  strategyTitle: string;
  strategyText: string;

  // FAQ
  faq: FaqItem[];

  // WhatsApp
  whatsappMessage: string;
  whatsappButtonText?: string;
}

export default function PrevAreaPage({
  metaTitle,
  metaDescription,
  canonicalPath,
  breadcrumb,
  heroTitle,
  heroSubtitle,
  whoSectionTitle,
  whoItems,
  docsSectionTitle,
  docsItems,
  strategyTitle,
  strategyText,
  faq,
  whatsappMessage,
  whatsappButtonText = "Analisar meu caso pelo WhatsApp",
}: PrevAreaPageProps) {
  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://advogadoja.lovable.app${canonicalPath}`} />
      </Helmet>

      <PrevLayout ctaMessage={whatsappMessage}>
        {/* HERO */}
        <section className="bg-prev-navy text-prev-beige pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="max-w-4xl mx-auto px-5">
            <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-4">
              {breadcrumb}
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
              {heroTitle}
            </h1>
            <p className="text-lg text-prev-beige/80 leading-relaxed max-w-2xl mb-8">
              {heroSubtitle}
            </p>
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-prev-gold text-prev-navy px-7 py-3.5 rounded-full font-medium hover:bg-prev-gold/90 transition-colors"
            >
              {whatsappButtonText}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* QUEM PODE PEDIR */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
                  Quem se enquadra
                </p>
                <h2 className="font-serif text-3xl text-prev-navy leading-tight mb-6">
                  {whoSectionTitle}
                </h2>
              </div>
              <ul className="space-y-4">
                {whoItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-prev-gold flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                    <span className="text-prev-navy/80 leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* DOCUMENTOS */}
        <section className="py-20 bg-prev-beige">
          <div className="max-w-4xl mx-auto px-5">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
                  Documentação inicial
                </p>
                <h2 className="font-serif text-3xl text-prev-navy leading-tight mb-6">
                  {docsSectionTitle}
                </h2>
                <p className="text-prev-navy/65 leading-relaxed">
                  Esses são pontos de partida — outros documentos podem ser
                  pedidos conforme o caso. Não se preocupe se faltar algum:
                  ajudamos a localizar.
                </p>
              </div>
              <ul className="space-y-3">
                {docsItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start gap-3 bg-white rounded-xl px-4 py-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-prev-navy text-prev-beige text-xs flex items-center justify-center font-medium flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="text-prev-navy/80 text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ESTRATÉGIA */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5">
            <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
              Como agimos
            </p>
            <h2 className="font-serif text-3xl text-prev-navy leading-tight mb-6">
              {strategyTitle}
            </h2>
            <div className="prose prose-lg max-w-none text-prev-navy/75 leading-relaxed">
              {strategyText.split("\n\n").map((para, idx) => (
                <p key={idx} className="mb-4 last:mb-0">
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PrevFaq items={faq} />

        {/* CTA FINAL */}
        <section className="py-20 bg-prev-beige">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-5">
              Pronto para entender{" "}
              <span className="italic">seu caso</span>?
            </h2>
            <p className="text-prev-navy/65 text-lg mb-8 leading-relaxed">
              Mande seu caso pelo WhatsApp. Em poucas perguntas já indicamos os
              próximos passos.
            </p>
            <a
              href={whatsappLink(whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-prev-navy text-prev-beige px-7 py-3.5 rounded-full font-medium hover:bg-prev-navy/90 transition-colors"
            >
              Falar pelo WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>
      </PrevLayout>
    </>
  );
}

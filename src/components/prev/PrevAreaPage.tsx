import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle, AlertTriangle, BarChart3 } from "lucide-react";

import PrevLayout from "./PrevLayout";
import PrevFaq from "./PrevFaq";
import PrevWhatsappButton from "./PrevWhatsappButton";

interface FaqItem {
  q: string;
  a: string;
}

interface StatItem {
  number: string;
  label: string;
}

interface PrevAreaPageProps {
  // SEO
  metaTitle: string;
  metaDescription: string;
  canonicalPath: string;

  // Conteúdo
  breadcrumb: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  heroImage?: { src: string; alt: string };
  heroIllustration?: React.ReactNode;

  // Quiz
  /** Chave do quiz (corresponde ao slug). Se omitido, usa whatsappMessage diretamente. */
  quizKey?: string;
  /** Paleta do quiz modal */
  palette?: "default" | "rose";

  // Stats (faixa logo abaixo do hero)
  stats?: [StatItem, StatItem, StatItem];

  // Quem pode pedir
  whoSectionTitle: string;
  whoItems: string[];

  // Documentos
  docsSectionTitle: string;
  docsItems: string[];

  // Erros comuns
  commonMistakes?: string[];

  // Estratégia
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
  heroImage,
  heroIllustration,
  quizKey,
  palette = "default",
  stats,
  commonMistakes,
  whoSectionTitle,
  whoItems,
  docsSectionTitle,
  docsItems,
  strategyTitle,
  strategyText,
  faq,
  whatsappMessage,
  whatsappButtonText = "Conversar agora pelo WhatsApp",
}: PrevAreaPageProps) {
  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://advogadoja.lovable.app${canonicalPath}`} />
      </Helmet>

      <PrevLayout ctaMessage={whatsappMessage} quizKey={quizKey} palette={palette}>
        {/* HERO com ilustração SVG ou foto (legacy) */}
        <section className="bg-prev-navy text-prev-beige pt-14 pb-20 lg:pt-20 lg:pb-24 relative overflow-hidden">
          {/* Textura pontos */}
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #F5F1EA 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -top-24 -right-20 w-96 h-96 rounded-full bg-prev-gold/12 blur-[120px] pointer-events-none" />
          <div className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-prev-salvia/12 blur-[140px] pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-5">
            {heroIllustration || heroImage ? (
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-4 font-semibold">
                    {breadcrumb}
                  </p>
                  <h1 className="font-serif text-[2.2rem] sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight mb-6">
                    {heroTitle}
                  </h1>
                  <p className="text-lg text-prev-beige/85 leading-relaxed mb-8">
                    {heroSubtitle}
                  </p>
                  <PrevWhatsappButton
                    quizKey={quizKey || ""}
                    palette={palette}
                    className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-7 py-4 rounded-full font-semibold shadow-xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5 hover:shadow-2xl"
                  >
                    <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                    {whatsappButtonText}
                  </PrevWhatsappButton>
                </div>
                {heroIllustration ? (
                  <div className="relative max-w-md mx-auto lg:max-w-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-prev-gold/20 via-prev-salvia/15 to-transparent rounded-[40%_60%_50%_45%/45%_50%_60%_40%] blur-2xl" />
                    <div className="relative w-full max-w-[400px] mx-auto drop-shadow-2xl">
                      {heroIllustration}
                    </div>
                  </div>
                ) : heroImage ? (
                  <div className="aspect-[4/5] lg:aspect-[5/6] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                    <img
                      src={heroImage.src}
                      alt={heroImage.alt}
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : null}
              </div>
            ) : (
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-4 font-semibold">
                  {breadcrumb}
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
                  {heroTitle}
                </h1>
                <p className="text-lg text-prev-beige/85 leading-relaxed max-w-2xl mb-8">
                  {heroSubtitle}
                </p>
                <PrevWhatsappButton
                  quizKey={quizKey || ""}
                  palette={palette}
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-7 py-4 rounded-full font-semibold shadow-xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                  {whatsappButtonText}
                </PrevWhatsappButton>
              </div>
            )}
          </div>
        </section>

        {/* STATS — faixa de números */}
        {stats && (
          <section className="bg-prev-beige border-y border-prev-navy/8 py-8 sm:py-10">
            <div className="max-w-5xl mx-auto px-5">
              <div className="grid grid-cols-3 gap-3 sm:gap-8">
                {stats.map((s, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="font-serif text-2xl sm:text-4xl text-prev-navy leading-none mb-1.5">
                      {s.number}
                    </div>
                    <div className="text-[11px] sm:text-xs uppercase tracking-wider text-prev-navy/55 leading-tight">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* QUEM PODE PEDIR */}
        <section className="py-16 sm:py-20 bg-white">
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

        {/* ERROS COMUNS */}
        {commonMistakes && commonMistakes.length > 0 && (
          <section className="py-16 sm:py-20 bg-prev-navy text-prev-beige">
            <div className="max-w-4xl mx-auto px-5">
              <div className="max-w-2xl mb-10">
                <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3 font-semibold">
                  Erros que custam caro
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
                  O que faz o INSS{" "}
                  <span className="italic text-prev-gold">negar</span> (e como
                  evitar)
                </h2>
              </div>
              <ul className="space-y-3">
                {commonMistakes.map((mistake, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="flex items-start gap-3 bg-prev-beige/8 rounded-xl px-4 py-3.5 border border-prev-beige/10"
                  >
                    <AlertTriangle
                      className="w-5 h-5 text-prev-gold flex-shrink-0 mt-0.5"
                      strokeWidth={1.5}
                    />
                    <span className="text-prev-beige/85 leading-relaxed text-[15px]">
                      {mistake}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* FAQ */}
        <PrevFaq items={faq} />

        {/* CTA FINAL */}
        <section className="py-20 bg-prev-beige">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-5">
              Não deixe pra depois.
            </h2>
            <p className="text-prev-navy/70 text-lg mb-8 leading-relaxed">
              Manda mensagem agora — me conta sua situação que eu te falo o
              que dá pra fazer.
            </p>
            <PrevWhatsappButton
              quizKey={quizKey || ""}
              palette={palette}
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
              Falar agora pelo WhatsApp
            </PrevWhatsappButton>
            <p className="text-xs text-prev-navy/50 mt-4">
              Resposta em até 2 horas úteis · Sigilo profissional total
            </p>
          </div>
        </section>
      </PrevLayout>
    </>
  );
}

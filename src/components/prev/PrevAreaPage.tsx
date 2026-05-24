import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { CheckCircle2, MessageCircle } from "lucide-react";

import PrevLayout from "./PrevLayout";
import PrevFaq from "./PrevFaq";
import PrevTeam from "./PrevTeam";
import PrevCredibility from "./PrevCredibility";
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
          {/* Video background */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster=""
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          {/* Dark navy overlay for video readability */}
          <div className="absolute inset-0 bg-prev-navy/80 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-prev-navy/60 via-prev-navy/80 to-prev-navy/95 pointer-events-none" />

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
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-prev-gold mb-6 font-semibold flex items-center gap-3">
                    <span className="w-8 h-px bg-prev-gold" />
                    {breadcrumb}
                  </p>
                  <h1 className="font-serif text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] tracking-[-0.025em] mb-7">
                    {heroTitle}
                  </h1>
                  <p className="text-lg lg:text-xl text-prev-beige/85 leading-[1.65] mb-9 max-w-xl">
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
                  <div className="prev-frame aspect-[4/5] lg:aspect-[5/6] rounded-sm overflow-hidden shadow-2xl shadow-black/40">
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
                <p className="text-[11px] uppercase tracking-[0.22em] text-prev-gold mb-6 font-semibold flex items-center gap-3">
                  <span className="w-8 h-px bg-prev-gold" />
                  {breadcrumb}
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.02] tracking-[-0.025em] mb-7">
                  {heroTitle}
                </h1>
                <p className="text-lg lg:text-xl text-prev-beige/85 leading-[1.65] max-w-2xl mb-9">
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

        {/* STATS — faixa editorial */}
        {stats && (
          <section className="bg-prev-beige border-b border-prev-navy/8 py-12 sm:py-16">
            <div className="max-w-5xl mx-auto px-5">
              <div className="grid grid-cols-3 gap-3 sm:gap-8 divide-x divide-prev-navy/10">
                {stats.map((s, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="text-center px-2 sm:px-6"
                  >
                    <div className="font-serif text-3xl sm:text-5xl lg:text-6xl text-prev-navy leading-none mb-3 tnum">
                      {s.number}
                    </div>
                    <div className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-prev-navy/60 leading-tight">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* QUEM PODE PEDIR */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
              <div>
                <span className="prev-eyebrow mb-4">Quem se enquadra</span>
                <h2 className="font-serif text-4xl lg:text-5xl text-prev-navy leading-[1.05] mt-3">
                  {whoSectionTitle}
                </h2>
              </div>
              <ul className="space-y-5 pt-2">
                {whoItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="flex items-start gap-4 pb-5 border-b border-prev-navy/8 last:border-0"
                  >
                    <CheckCircle2 className="w-5 h-5 text-prev-gold flex-shrink-0 mt-1" strokeWidth={1.2} />
                    <span className="text-prev-navy/80 leading-[1.7] text-[16px]">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* DOCUMENTOS */}
        <section className="py-24 md:py-32 bg-prev-beige">
          <div className="max-w-5xl mx-auto px-5">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
              <div>
                <span className="prev-eyebrow mb-4">Documentação inicial</span>
                <h2 className="font-serif text-4xl lg:text-5xl text-prev-navy leading-[1.05] mb-6 mt-3">
                  {docsSectionTitle}
                </h2>
                <p className="text-prev-navy/65 leading-[1.7] text-[15.5px]">
                  Esses são pontos de partida — outros documentos podem ser
                  pedidos conforme o caso. Não se preocupe se faltar algum:
                  ajudamos a localizar.
                </p>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3 self-start">
                {docsItems.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex items-start gap-3 bg-white border border-prev-navy/8 px-4 py-3.5 hover:border-prev-gold/40 transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-prev-gold flex-shrink-0 mt-1" strokeWidth={1.4} />
                    <span className="text-prev-navy/80 text-[14.5px] leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ESTRATÉGIA — coluna estreita editorial com aspas decorativas */}
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
          <div
            aria-hidden
            className="absolute top-16 left-1/2 -translate-x-[24rem] prev-quote-mark hidden md:block"
          >
            "
          </div>
          <div className="max-w-2xl mx-auto px-5 relative">
            <span className="prev-eyebrow mb-4">Como agimos</span>
            <h2 className="font-serif text-4xl lg:text-5xl text-prev-navy leading-[1.05] mb-8 mt-3">
              {strategyTitle}
            </h2>
            <div className="text-prev-navy/78 leading-[1.85] text-[17px] space-y-5">
              {strategyText.split("\n\n").map((para, idx) => (
                <p key={idx} className={idx === 0 ? "prev-dropcap" : ""}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ERROS COMUNS — cards numerados editoriais */}
        {commonMistakes && commonMistakes.length > 0 && (
          <section className="py-24 md:py-32 bg-prev-navy text-prev-beige relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #F5F1EA 1px, transparent 0)",
                backgroundSize: "32px 32px",
              }}
            />
            <div className="max-w-5xl mx-auto px-5 relative">
              <div className="max-w-2xl mb-14">
                <span className="prev-eyebrow mb-4">Erros que custam caro</span>
                <h2 className="font-serif text-4xl sm:text-5xl leading-[1.05] mt-3">
                  O que faz o INSS{" "}
                  <span className="italic text-prev-gold">negar</span> (e como
                  evitar)
                </h2>
              </div>
              <ul className="grid md:grid-cols-2 gap-px bg-prev-beige/10">
                {commonMistakes.map((mistake, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="bg-prev-navy p-7 border-l-2 border-prev-gold flex gap-5"
                  >
                    <span className="font-serif text-prev-gold/80 text-3xl leading-none tnum flex-shrink-0">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-prev-beige/85 leading-[1.7] text-[15px]">
                      {mistake}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* NOSSA EQUIPE */}
        <PrevTeam />

        {/* DEFENDEMOS SEUS DIREITOS */}
        <PrevCredibility />

        {/* FAQ */}
        <PrevFaq items={faq} />

        {/* CTA FINAL editorial */}
        <section className="py-24 md:py-32 bg-prev-beige relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #0B1B2B 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="max-w-2xl mx-auto px-5 text-center relative">
            <span className="prev-eyebrow mb-4 justify-center">Próximo passo</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-prev-navy leading-[1.02] mb-6 mt-3">
              Não deixe pra <span className="italic text-prev-gold">depois</span>.
            </h2>
            <p className="text-prev-navy/72 text-lg mb-10 leading-[1.7] max-w-lg mx-auto">
              Manda mensagem agora — me conta sua situação que eu te falo o
              que dá pra fazer.
            </p>
            <PrevWhatsappButton
              quizKey={quizKey || ""}
              palette={palette}
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-9 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
              Falar agora pelo WhatsApp
            </PrevWhatsappButton>
            <p className="text-xs text-prev-navy/50 mt-5 tracking-wide">
              Resposta em até 2 horas úteis · Sigilo profissional total
            </p>
          </div>
        </section>
      </PrevLayout>
    </>
  );
}

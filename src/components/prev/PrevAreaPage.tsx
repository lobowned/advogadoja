import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

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
  canonicalPath: string;

  // Conteúdo
  breadcrumb: string;
  heroTitle: React.ReactNode;
  heroSubtitle: string;
  /** URL de foto opcional para o hero (foto contextual) */
  heroImage?: { src: string; alt: string };

  // Quem pode pedir
  whoSectionTitle: string;
  whoItems: string[];

  // Documentos necessários
  docsSectionTitle: string;
  docsItems: string[];

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

      <PrevLayout ctaMessage={whatsappMessage}>
        {/* HERO - com ou sem foto */}
        <section className="bg-prev-navy text-prev-beige pt-12 pb-16 lg:pt-20 lg:pb-24 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-prev-gold/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-5">
            {heroImage ? (
              <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-4">
                    {breadcrumb}
                  </p>
                  <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight mb-6">
                    {heroTitle}
                  </h1>
                  <p className="text-lg text-prev-beige/85 leading-relaxed mb-8">
                    {heroSubtitle}
                  </p>
                  <a
                    href={whatsappLink(whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-7 py-4 rounded-full font-semibold shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                    {whatsappButtonText}
                  </a>
                </div>
                <div className="aspect-[4/5] lg:aspect-[5/6] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                  <img
                    src={heroImage.src}
                    alt={heroImage.alt}
                    loading="eager"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ) : (
              <div className="max-w-3xl">
                <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-4">
                  {breadcrumb}
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
                  {heroTitle}
                </h1>
                <p className="text-lg text-prev-beige/85 leading-relaxed max-w-2xl mb-8">
                  {heroSubtitle}
                </p>
                <a
                  href={whatsappLink(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-7 py-4 rounded-full font-semibold shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                  {whatsappButtonText}
                </a>
              </div>
            )}
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
                    <span className="text-prev-navy/80 text-sm leading
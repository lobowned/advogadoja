import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Scale, Shield, MessageCircle } from "lucide-react";

import PrevLayout from "@/components/prev/PrevLayout";
import {
  LAWYER,
  WHATSAPP_MESSAGES,
  whatsappLink,
} from "@/lib/prev-config";

export default function PrevSobre() {
  const nameSet = !LAWYER.fullName.includes("{");
  const oabSet = !LAWYER.oabNumber.includes("{");

  return (
    <>
      <Helmet>
        <title>Sobre — {nameSet ? LAWYER.fullName : "Advogado(a) Previdenciário(a)"}</title>
        <meta
          name="description"
          content="Conheça a trajetória profissional e a forma de atuar do escritório especializado em direito previdenciário."
        />
        <link rel="canonical" href="https://advogadoja.lovable.app/prev/sobre" />
      </Helmet>

      <PrevLayout ctaMessage={WHATSAPP_MESSAGES.sobre}>
        {/* HERO */}
        <section className="bg-prev-navy text-prev-beige pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="max-w-4xl mx-auto px-5">
            <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-4">
              Sobre o escritório
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6">
              Direito previdenciário,{" "}
              <span className="italic text-prev-gold">de perto</span>.
            </h1>
            <p className="text-lg text-prev-beige/80 leading-relaxed max-w-2xl">
              Cada caso é único — e merece atenção individual. Aqui você não é
              número de processo. É história, contexto, e o objetivo concreto
              de conquistar (ou recuperar) o seu direito previdenciário.
            </p>
          </div>
        </section>

        {/* PERFIL */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-5">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="md:col-span-1">
                {/* Placeholder de foto — substituir por foto profissional */}
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-prev-navy via-[#0F2438] to-[#1A3A5C] flex items-center justify-center">
                  <div className="text-center text-prev-beige/40 px-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-prev-gold/15 flex items-center justify-center mb-3">
                      <span className="font-serif text-prev-gold text-3xl">
                        {nameSet ? LAWYER.shortName.charAt(0) : "P"}
                      </span>
                    </div>
                    <p className="text-xs text-prev-beige/50 leading-relaxed">
                      Espaço para sua foto profissional. Recomendamos foto em
                      fundo neutro, traje sóbrio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div>
                  <h2 className="font-serif text-3xl text-prev-navy mb-2">
                    {nameSet ? LAWYER.fullName : "Dr(a). [Seu Nome Completo]"}
                  </h2>
                  <p className="text-prev-navy/60 text-sm uppercase tracking-wider">
                    {oabSet
                      ? `OAB/${LAWYER.oabState} ${LAWYER.oabNumber}`
                      : "OAB/UF [seu número]"}{" "}
                    {LAWYER.yearsOfExperience > 0 &&
                      `· ${LAWYER.yearsOfExperience} anos de atuação`}
                  </p>
                </div>

                <p className="text-prev-navy/75 leading-relaxed text-lg">
                  [Espaço para sua biografia profissional. Sugestão de
                  estrutura: formação, principais atuações, posicionamento
                  pessoal sobre o que move sua advocacia previdenciária.]
                </p>

                <p className="text-prev-navy/75 leading-relaxed">
                  [Continue contando sua trajetória — pós-graduações,
                  associações, casos relevantes (sem identificar clientes),
                  filosofia de atendimento. Mantenha entre 2 e 4 parágrafos.
                  Linguagem em primeira pessoa funciona bem aqui.]
                </p>

                <div className="grid sm:grid-cols-2 gap-4 pt-4">
                  {[
                    {
                      icon: GraduationCap,
                      label: "Formação",
                      value: "[Faculdade / pós-graduação]",
                    },
                    {
                      icon: Scale,
                      label: "Especialização",
                      value: "Direito Previdenciário",
                    },
                    {
                      icon: MapPin,
                      label: "Atuação",
                      value: nameSet
                        ? `${LAWYER.city} · ${LAWYER.state} · Brasil (online)`
                        : "Sua cidade · UF · Brasil (online)",
                    },
                    {
                      icon: Shield,
                      label: "Filiação",
                      value: `Ordem dos Advogados do Brasil — Seccional ${LAWYER.oabState}`,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 bg-prev-beige/50 rounded-xl p-4"
                    >
                      <item.icon
                        className="w-5 h-5 text-prev-gold flex-shrink-0 mt-0.5"
                        strokeWidth={1.5}
                      />
                      <div>
                        <p className="text-[10px] uppercase tracking-wider text-prev-navy/50 mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-sm text-prev-navy">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VALORES */}
        <section className="py-20 bg-prev-beige">
          <div className="max-w-4xl mx-auto px-5">
            <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
              O que orienta a atuação
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-12">
              Três compromissos que não são{" "}
              <span className="italic">marketing</span>.
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Honestidade técnica",
                  text: "Se o seu caso não tem viabilidade jurídica, você ouve isso na primeira conversa. Não vamos vender ilusão.",
                },
                {
                  title: "Clareza de prazos",
                  text: "Processo previdenciário não é rápido. Mas você vai saber, etapa por etapa, o que está acontecendo e quando — sem surpresa.",
                },
                {
                  title: "Honorários transparentes",
                  text: "Antes de qualquer trabalho, valores e modalidade (fixo, êxito ou misto) são apresentados por escrito. Sem cobrança escondida.",
                },
              ].map((v, idx) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                >
                  <h3 className="font-serif text-xl text-prev-navy mb-3">
                    {v.title}
                  </h3>
                  <p className="text-prev-navy/70 leading-relaxed text-[15px]">
                    {v.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-5">
              Vamos conversar sobre{" "}
              <span className="italic">o seu caso</span>?
            </h2>
            <p className="text-prev-navy/65 text-lg mb-8 leading-relaxed">
              Mande uma mensagem pelo WhatsApp. Conto rapidamente como funciona
              uma primeira análise.
            </p>
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.sobre)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
              Falar agora pelo WhatsApp
      
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Scale, Shield, MessageCircle } from "lucide-react";

import PrevLayout from "@/components/prev/PrevLayout";
import PrevCredibility from "@/components/prev/PrevCredibility";
import PrevFaq from "@/components/prev/PrevFaq";
import { PREV_FAQ_GERAL } from "@/data/prev-faq-geral";
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
        <section className="bg-prev-navy text-prev-beige pt-20 pb-24 lg:pt-28 lg:pb-32 relative overflow-hidden">
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

          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #F5F1EA 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-prev-salvia/12 blur-[140px] pointer-events-none" />
          <div className="relative max-w-4xl mx-auto px-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-prev-gold mb-6 font-semibold flex items-center gap-3">
              <span className="w-8 h-px bg-prev-gold" />
              Sobre o escritório
            </p>
            <h1 className="font-serif text-[2.4rem] sm:text-5xl lg:text-[3.8rem] leading-[1.02] tracking-[-0.025em] mb-7">
              Direito previdenciário,{" "}
              <span className="italic text-prev-gold">de perto</span>.
            </h1>
            <p className="text-lg lg:text-xl text-prev-beige/85 leading-[1.65] max-w-2xl">
              Cada caso é único — e merece atenção individual. Aqui você não é
              número de processo. É história, contexto, e o objetivo concreto
              de conquistar (ou recuperar) o seu direito previdenciário.
            </p>
          </div>
        </section>

        {/* PERFIL — about boutique editorial */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
              <div className="md:col-span-1">
                {/* Placeholder de foto B&W editorial */}
                <div className="prev-frame aspect-[3/4] rounded-sm bg-gradient-to-br from-prev-navy via-[#0F2438] to-[#1A3A5C] flex items-center justify-center grayscale">
                  <div className="text-center text-prev-beige/40 px-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-prev-gold/15 flex items-center justify-center mb-3">
                      <span className="font-serif text-prev-gold text-3xl">
                        {nameSet ? LAWYER.shortName.charAt(0) : "P"}
                      </span>
                    </div>
                    <p className="text-xs text-prev-beige/50 leading-relaxed">
                      Espaço para sua foto profissional. Recomendamos fundo
                      neutro, traje sóbrio.
                    </p>
                  </div>
                </div>
              </div>

              <div className="md:col-span-1 space-y-8">
                <div>
                  <span className="prev-eyebrow mb-4">Quem te atende</span>
                  <h2 className="font-serif text-4xl lg:text-5xl text-prev-navy leading-[1.05] mb-3 mt-3">
                    {nameSet ? LAWYER.fullName : "Dr(a). [Seu Nome Completo]"}
                  </h2>
                  <p className="text-prev-navy/55 text-xs uppercase tracking-[0.22em] font-semibold">
                    {oabSet
                      ? `OAB/${LAWYER.oabState} ${LAWYER.oabNumber}`
                      : "OAB/UF [seu número]"}{" "}
                    {LAWYER.yearsOfExperience > 0 &&
                      `· ${LAWYER.yearsOfExperience} anos de atuação`}
                  </p>
                </div>

                <p className="text-prev-navy/80 leading-[1.75] text-lg prev-dropcap">
                  [Espaço para sua biografia profissional. Sugestão de
                  estrutura: formação, principais atuações, posicionamento
                  pessoal sobre o que move sua advocacia previdenciária.]
                </p>

                {/* Citação editorial intercalada */}
                <blockquote className="border-l-2 border-prev-gold pl-6 py-2 my-8">
                  <p className="font-serif italic text-prev-navy/85 text-xl leading-[1.5]">
                    "Direito previdenciário não é papel — é a vida de quem
                    trabalhou e merece descansar."
                  </p>
                </blockquote>

                <p className="text-prev-navy/75 leading-[1.75] text-[16.5px]">
                  [Continue contando sua trajetória — pós-graduações,
                  associações, casos relevantes (sem identificar clientes),
                  filosofia de atendimento. Mantenha entre 2 e 4 parágrafos.
                  Linguagem em primeira pessoa funciona bem aqui.]
                </p>

                {/* Credenciais em grid hairline */}
                <div className="grid sm:grid-cols-2 gap-px bg-prev-navy/10 border border-prev-navy/10 mt-8">
                  {[
                    { icon: GraduationCap, label: "Formação", value: "[Faculdade / pós-graduação]" },
                    { icon: Scale, label: "Especialização", value: "Direito Previdenciário" },
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
                      value: `OAB — Seccional ${LAWYER.oabState}`,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 bg-white p-5"
                    >
                      <item.icon
                        className="w-5 h-5 text-prev-gold flex-shrink-0 mt-0.5"
                        strokeWidth={1.2}
                      />
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.22em] text-prev-navy/55 mb-1 font-semibold">
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

        {/* VALORES — três compromissos editoriais */}
        <section className="py-24 md:py-32 bg-prev-beige">
          <div className="max-w-5xl mx-auto px-5">
            <div className="max-w-2xl mb-16">
              <span className="prev-eyebrow mb-4">O que orienta a atuação</span>
              <h2 className="font-serif text-4xl sm:text-5xl text-prev-navy leading-[1.05] mt-3">
                Três compromissos que{" "}
                <span className="italic text-prev-gold">não são marketing</span>.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-prev-navy/10 border border-prev-navy/10">
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
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-prev-beige p-8"
                >
                  <span className="font-serif text-prev-gold/80 text-3xl tnum block mb-4">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-[1.5rem] text-prev-navy mb-3 leading-tight">
                    {v.title}
                  </h3>
                  <div className="w-8 h-px bg-prev-gold/50 mb-4" />
                  <p className="text-prev-navy/72 leading-[1.7] text-[15px]">
                    {v.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* DEFENDEMOS SEUS DIREITOS */}
        <PrevCredibility />

        {/* FAQ */}
        <PrevFaq items={PREV_FAQ_GERAL} />

        {/* CTA editorial */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-2xl mx-auto px-5 text-center">
            <span className="prev-eyebrow mb-4 justify-center">Próximo passo</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-prev-navy leading-[1.02] mb-6 mt-3">
              Vamos conversar sobre{" "}
              <span className="italic text-prev-gold">o seu caso</span>?
            </h2>
            <p className="text-prev-navy/72 text-lg mb-10 leading-[1.7]">
              Mande uma mensagem pelo WhatsApp. Conto rapidamente como funciona
              uma primeira análise.
            </p>
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.sobre)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-9 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
              Falar agora pelo WhatsApp
            </a>
            <p className="text-xs text-prev-navy/50 mt-5 tracking-wide">
              Resposta em até 2 horas úteis · Sigilo profissional total
            </p>
          </div>
        </section>
      </PrevLayout>
    </>
  );
}

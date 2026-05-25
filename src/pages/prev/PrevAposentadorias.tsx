import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";

import PrevLayout from "@/components/prev/PrevLayout";
import PrevFaq from "@/components/prev/PrevFaq";
import PrevWhatsappButton from "@/components/prev/PrevWhatsappButton";

import {
  APOSENTADORIA_TYPES,
  WHATSAPP_MESSAGES,
} from "@/lib/prev-config";

const FAQ_APOSENTADORIAS = [
  {
    q: "Como sei qual aposentadoria pedir?",
    a: "Depende de várias coisas: quando você começou a contribuir, há quanto tempo paga INSS, sua idade, se trabalhou em ambiente insalubre ou na roça. A gente analisa seu CNIS e simula TODAS as regras possíveis pra escolher a que paga mais e demora menos. Pedir a errada pode te fazer perder centenas de reais todo mês — pelo resto da vida.",
  },
  {
    q: "O que mudou com a Reforma de 2019?",
    a: "A Reforma acabou com a aposentadoria por tempo de contribuição pura (aquela só pelo tempo, sem idade mínima) e criou uma regra com idade mínima: 65 anos pra homem, 62 pra mulher. Mas criou regras de transição (pedágio, pontos, idade progressiva) pra quem já contribuía antes. É comum a transição ser mais vantajosa que a regra nova.",
  },
  {
    q: "Vale continuar pagando INSS depois de cumprir o mínimo?",
    a: "Em alguns casos sim — pagar mais aumenta a média e o coeficiente do benefício. Em outros casos não compensa pelo custo. Faz parte da análise: comparar o ganho marginal do benefício futuro com o custo da contribuição agora.",
  },
  {
    q: "Quanto demora pra reconhecer atividade especial (insalubre)?",
    a: "Geralmente precisa de PPP atual, LTCAT, às vezes prova testemunhal ou perícia técnica. No INSS administrativo varia muito. Na Justiça costuma levar de 1 a 2 anos. A boa notícia: se reconhecida, pode aumentar seu tempo de INSS em 40% a 67% (15, 20 ou 25 anos viram bem mais).",
  },
];

export default function PrevAposentadorias() {
  return (
    <>
      <Helmet>
        <title>Tipos de Aposentadoria do INSS — Idade, Tempo, Especial, Rural, PCD</title>
        <meta
          name="description"
          content="Conheça os 5 tipos de aposentadoria do INSS após a Reforma. A gente analisa seu CNIS e indica qual paga mais e demora menos pro seu caso."
        />
        <link rel="canonical" href="https://advogadoja.lovable.app/prev/aposentadorias" />
      </Helmet>

      <PrevLayout ctaMessage={WHATSAPP_MESSAGES.aposentadorias} quizKey="aposentadorias">
        {/* HERO */}
        <section className="bg-prev-navy text-prev-beige pt-8 pb-12 lg:pt-24 lg:pb-28 relative overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-r from-prev-navy/85 via-prev-navy/65 to-prev-navy/25 pointer-events-none" />
          <div className="absolute inset-0 bg-prev-navy/20 pointer-events-none lg:hidden" />
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #F5F1EA 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-prev-gold/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-5">
            <div className="max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.22em] text-prev-gold mb-6 font-semibold flex items-center gap-3">
                <span className="w-8 h-px bg-prev-gold" />
                Aposentadorias
              </p>
              <h1 className="font-serif text-[2.4rem] sm:text-5xl lg:text-[3.6rem] leading-[1.02] tracking-[-0.025em] mb-7">
                Existem{" "}
                <span className="italic text-prev-gold">5 caminhos</span>{" "}
                pra aposentar.
                <br /> Qual é o seu?
              </h1>
              <p className="text-lg lg:text-xl text-prev-beige/85 leading-[1.65] mb-9 max-w-xl">
                Depois da Reforma de 2019, escolher errado pode te fazer
                perder muito dinheiro — todo mês, pelo resto da vida. A gente
                olha junto seu CNIS e mostra qual aposentadoria é a melhor
                pro seu caso.
              </p>
              <PrevWhatsappButton
                quizKey="aposentadorias"
                className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-7 py-4 rounded-full font-semibold shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                Analisar meu caso pelo WhatsApp
              </PrevWhatsappButton>
            </div>
          </div>
        </section>

        {/* TIPOS DE APOSENTADORIA — lista editorial numerada */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <div className="max-w-xl mb-14">
              <span className="prev-eyebrow mb-4">Os 5 caminhos</span>
              <h2 className="font-serif text-4xl sm:text-5xl text-prev-navy leading-[1.05] mt-3">
                Qual aposentadoria é a <span className="italic text-prev-gold">sua</span>?
              </h2>
            </div>
            <div className="divide-y divide-prev-navy/10 border-y border-prev-navy/10">
              {APOSENTADORIA_TYPES.map((type, idx) => (
                <motion.div
                  key={type.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <Link
                    to={`/prev/${type.slug}`}
                    className="group grid grid-cols-[auto_1fr_auto] gap-3 sm:gap-6 items-baseline py-5 sm:py-7 px-2 hover:bg-prev-beige/40 transition-colors"
                  >
                    <span className="font-serif text-prev-gold/80 text-2xl tnum w-12">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div className="flex items-baseline gap-3 mb-1.5 flex-wrap">
                        <h3 className="font-serif text-2xl sm:text-[1.7rem] text-prev-navy leading-tight group-hover:text-prev-gold transition-colors">
                          {type.title}
                        </h3>
                        <span className="text-[10px] uppercase tracking-[0.22em] text-prev-navy/55">
                          {type.short}
                        </span>
                      </div>
                      <p className="text-prev-navy/72 leading-[1.65] max-w-2xl">
                        {type.when}
                      </p>
                    </div>
                    <ArrowUpRight className="flex-shrink-0 w-5 h-5 text-prev-navy/30 group-hover:text-prev-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" strokeWidth={1.5} />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PrevFaq items={FAQ_APOSENTADORIAS} />

        {/* CTA */}
        <section className="py-24 md:py-32 bg-prev-beige">
          <div className="max-w-2xl mx-auto px-5 text-center">
            <span className="prev-eyebrow mb-4 justify-center">Próximo passo</span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-prev-navy leading-[1.02] mb-6 mt-3">
              Não pede a aposentadoria{" "}
              <span className="italic text-prev-gold">errada</span>.
            </h2>
            <p className="text-prev-navy/72 text-lg mb-10 leading-[1.7]">
              Conta sua situação pelo WhatsApp. Em algumas perguntas eu já
              indico qual o melhor caminho pro seu caso.
            </p>
            <PrevWhatsappButton
              quizKey="aposentadorias"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-9 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
              Falar pelo WhatsApp
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

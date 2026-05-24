import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";

import PrevLayout from "@/components/prev/PrevLayout";
import PrevFaq from "@/components/prev/PrevFaq";
import { PREV_IMAGES } from "@/lib/prev-images";
import {
  APOSENTADORIA_TYPES,
  WHATSAPP_MESSAGES,
  whatsappLink,
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

      <PrevLayout ctaMessage={WHATSAPP_MESSAGES.aposentadorias}>
        {/* HERO */}
        <section className="bg-prev-navy text-prev-beige pt-12 pb-16 lg:pt-20 lg:pb-24 relative overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-prev-gold/10 blur-3xl pointer-events-none" />
          <div className="relative max-w-6xl mx-auto px-5">
            <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-4">
                  Aposentadorias
                </p>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.05] tracking-tight mb-6">
                  Existem{" "}
                  <span className="italic text-prev-gold">5 caminhos</span>{" "}
                  pra aposentar.
                  <br /> Qual é o seu?
                </h1>
                <p className="text-lg text-prev-beige/85 leading-relaxed mb-8">
                  Depois da Reforma de 2019, escolher errado pode te fazer
                  perder muito dinheiro — todo mês, pelo resto da vida. A gente
                  olha junto seu CNIS e mostra qual aposentadoria é a melhor
                  pro seu caso.
                </p>
                <a
                  href={whatsappLink(WHATSAPP_MESSAGES.aposentadorias)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-7 py-4 rounded-full font-semibold shadow-lg shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
                  Analisar meu caso pelo WhatsApp
                </a>
              </div>
              <div className="aspect-[4/5] lg:aspect-[5/6] rounded-2xl overflow-hidden shadow-2xl shadow-black/40">
                <img
                  src={PREV_IMAGES.heroCouple.src}
                  alt={PREV_IMAGES.heroCouple.alt}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* TIPOS DE APOSENTADORIA */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-5">
            <div className="space-y-6">
              {APOSENTADORIA_TYPES.map((type, idx) => (
                <motion.div
                  key={type.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: idx * 0.06 }}
                >
                  <Link
                    to={`/prev/${type.slug}`}
                    className="group block border border-prev-navy/10 rounded-2xl p-7 hover:border-prev-gold/40 hover:bg-prev-beige/40 transition-all"
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3 mb-2 flex-wrap">
                          <h2 className="font-serif text-2xl text-prev-navy leading-tight">
                            {type.title}
                          </h2>
                          <span className="text-xs uppercase tracking-wider text-prev-navy/50">
                            {type.short}
                          </span>
                        </div>
                        <p className="text-prev-navy/75 leading-relaxed">
                          {type.when}
                        </p>
                      </div>
                      <ArrowUpRight className="flex-shrink-0 w-6 h-6 text-prev-navy/30 group-hover:text-prev-gold group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <PrevFaq items={FAQ_APOSENTADORIAS} />

        {/* CTA */}
        <section className="py-20 bg-prev-beige">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-5">
              Não pede a aposentadoria{" "}
              <span className="italic">errada</span>.
            </h2>
            <p className="text-prev-navy/70 text-lg mb-8 leading-relaxed">
              Conta sua situação pelo WhatsApp. Em algumas perguntas eu já
              indico qual o melhor caminho pro seu caso.
            </p>
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.aposentadorias)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#25D366] hover:bg-[#1FB855] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl shadow-[#25D366]/30 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" strokeWidth={2.2} />
              Falar pelo WhatsApp
            </a>
            <p className="text-xs text-prev-navy/50 mt-4">
              Resposta em até 2 horas úteis · Sigilo profissional total
            </p>
          </div>
        </section>
      </PrevLayout>
    </>
  );
}

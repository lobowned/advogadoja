import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

import PrevLayout from "@/components/prev/PrevLayout";
import PrevFaq from "@/components/prev/PrevFaq";
import {
  APOSENTADORIA_TYPES,
  WHATSAPP_MESSAGES,
  whatsappLink,
} from "@/lib/prev-config";

const FAQ_APOSENTADORIAS = [
  {
    q: "Como sei qual aposentadoria pedir?",
    a: "Depende de quando você começou a contribuir, há quanto tempo contribui, qual sua idade, se exerce ou exerceu atividade especial e várias outras variáveis. A única forma confiável é analisar seu CNIS contra todas as regras (permanente e de transição) e simular o valor de cada uma. Pedir a errada pode reduzir significativamente seu benefício.",
  },
  {
    q: "O que mudou com a Reforma de 2019?",
    a: "A Emenda Constitucional 103/2019 acabou com a aposentadoria por tempo de contribuição pura e criou uma idade mínima (65 anos para homem, 62 para mulher na regra permanente). Mas criou regras de transição — pedágio, pontos, idade progressiva — para quem já contribuía antes. É comum a regra de transição ser mais vantajosa que a permanente.",
  },
  {
    q: "Vale a pena continuar contribuindo depois de cumprir o requisito mínimo?",
    a: "Em alguns casos, sim — contribuições adicionais aumentam a média e o coeficiente do benefício. Em outros casos não compensa pelo custo. Faz parte da análise técnica: comparar o ganho marginal do benefício futuro versus o custo da contribuição hoje.",
  },
  {
    q: "Quanto tempo demora reconhecer atividade especial?",
    a: "Atividade especial (com exposição a agentes nocivos) costuma demandar PPP atual, LTCAT, prova testemunhal e às vezes perícia técnica. No INSS administrativo o tempo varia muito; em juízo, geralmente entre 1 e 2 anos. A boa notícia: se reconhecida, o ganho de tempo pode ser de 40% a 67%.",
  },
];

export default function PrevAposentadorias() {
  return (
    <>
      <Helmet>
        <title>Aposentadorias INSS — Idade, Tempo, Especial, Híbrida, PCD</title>
        <meta
          name="description"
          content="Conheça as 5 modalidades de aposentadoria no INSS após a Reforma. Análise do seu CNIS para identificar a mais vantajosa."
        />
        <link rel="canonical" href="https://advogadoja.lovable.app/prev/aposentadorias" />
      </Helmet>

      <PrevLayout ctaMessage={WHATSAPP_MESSAGES.aposentadorias}>
        {/* HERO */}
        <section className="bg-prev-navy text-prev-beige pt-16 pb-20 lg:pt-24 lg:pb-28">
          <div className="max-w-5xl mx-auto px-5">
            <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-4">
              Áreas / Aposentadorias
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-6 max-w-3xl">
              Cinco caminhos para a{" "}
              <span className="italic text-prev-gold">aposentadoria</span>.
              <br className="hidden sm:block" /> Saber qual é o seu faz toda
              diferença.
            </h1>
            <p className="text-lg text-prev-beige/80 leading-relaxed max-w-2xl mb-8">
              Depois da Reforma de 2019, conviver com regras permanentes e de
              transição virou regra do jogo. A escolha errada pode custar anos
              de espera — ou centenas de reais a menos por mês para o resto da
              vida.
            </p>
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.aposentadorias)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-prev-gold text-prev-navy px-7 py-3.5 rounded-full font-medium hover:bg-prev-gold/90 transition-colors"
            >
              Analisar meu caso pelo WhatsApp
              <ArrowRight className="w-4 h-4" />
            </a>
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
                        <p className="text-prev-navy/70 leading-relaxed">
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
              Cada CNIS conta uma{" "}
              <span className="italic">história diferente</span>.
            </h2>
            <p className="text-prev-navy/65 text-lg mb-8 leading-relaxed">
              Mande seu caso pelo WhatsApp. Em poucas perguntas já indicamos por
              onde começar.
            </p>
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.aposentadorias)}
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

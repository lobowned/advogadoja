import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import PrevLayout from "@/components/prev/PrevLayout";
import PrevHero from "@/components/prev/PrevHero";
import PrevAreaCard from "@/components/prev/PrevAreaCard";
import PrevTrust from "@/components/prev/PrevTrust";
import PrevFaq from "@/components/prev/PrevFaq";
import {
  LAWYER,
  PREV_AREAS,
  WHATSAPP_MESSAGES,
  whatsappLink,
} from "@/lib/prev-config";

const FAQ_HOME = [
  {
    q: "Posso me aposentar pelas regras antigas?",
    a: "Em alguns casos, sim. Pessoas que já contribuíam antes da Reforma da Previdência de 2019 podem se enquadrar em regras de transição — pedágio, sistema de pontos, idade progressiva. Cada regra tem requisitos diferentes e nem sempre a mais óbvia é a mais vantajosa. Por isso é fundamental fazer a simulação completa.",
  },
  {
    q: "O que é o CNIS e por que ele é importante?",
    a: "CNIS é o Cadastro Nacional de Informações Sociais — o histórico de todos os seus vínculos e contribuições reconhecidos pelo INSS. É a primeira coisa que analisamos: verificamos lacunas, períodos não reconhecidos, vínculos rurais, atividade especial. Erros no CNIS são uma das principais causas de aposentadoria menor do que a devida.",
  },
  {
    q: "Quanto tempo demora um processo previdenciário?",
    a: "Depende muito do caso. Pedidos administrativos no INSS podem levar de 45 dias (com prazo legal cumprido) a vários meses. Se houver necessidade de processo judicial, o prazo médio varia entre 6 meses e 2 anos, considerando a possibilidade de recursos. Em casos urgentes (saúde, idade avançada) é possível pedir tutela de urgência.",
  },
  {
    q: "Vocês cobram pela primeira conversa?",
    a: "A primeira conversa por WhatsApp para entender o seu caso e avaliar se há viabilidade jurídica não é cobrada. Caso seja indicado avançar com uma análise técnica do CNIS ou estudo aprofundado, os valores e a forma de honorários (fixo, êxito ou misto) são apresentados de forma clara e transparente antes de qualquer trabalho ser iniciado.",
  },
  {
    q: "Atendem em todo o Brasil?",
    a: "Sim. Processos previdenciários tramitam em justiça federal e podem ser conduzidos 100% de forma remota — desde a análise do CNIS até a propositura da ação e acompanhamento. Audiências por videoconferência são prática consolidada no INSS e no Judiciário.",
  },
];

export default function PrevHome() {
  return (
    <>
      <Helmet>
        <title>Advogado Previdenciário | Análise de aposentadoria, INSS e benefícios</title>
        <meta
          name="description"
          content={LAWYER.metaDescription}
        />
        <meta property="og:title" content="Advogado Previdenciário | Análise de CNIS e estratégia de aposentadoria" />
        <meta property="og:description" content={LAWYER.metaDescription} />
        <link rel="canonical" href="https://advogadoja.lovable.app/prev" />
      </Helmet>

      <PrevLayout ctaMessage={WHATSAPP_MESSAGES.home}>
        {/* HERO */}
        <PrevHero />

        {/* ÁREAS */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-2xl mb-14">
              <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
                Áreas de atuação
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-4">
                Cada benefício tem suas{" "}
                <span className="italic">regras próprias</span>.
              </h2>
              <p className="text-prev-navy/65 text-lg leading-relaxed">
                E pequenas diferenças podem significar anos a mais ou a menos —
                ou um valor de benefício significativamente maior.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PREV_AREAS.map((area, idx) => (
                <PrevAreaCard
                  key={area.slug}
                  slug={area.slug}
                  title={area.title}
                  short={area.short}
                  description={area.description}
                  icon={area.icon}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </section>

        {/* COMO TRABALHAMOS */}
        <PrevTrust />

        {/* PROCESSO DE 3 ETAPAS */}
        <section className="py-20 bg-prev-navy text-prev-beige">
          <div className="max-w-5xl mx-auto px-5">
            <div className="max-w-2xl mb-14">
              <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
                Como começamos
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
                Três passos até saber{" "}
                <span className="italic text-prev-gold">o que fazer</span>.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-10 mb-14">
              {[
                {
                  num: "01",
                  title: "Conversa inicial",
                  text: "Você manda mensagem pelo WhatsApp contando rapidamente sua situação. Já entendemos se há viabilidade e quais documentos serão necessários.",
                },
                {
                  num: "02",
                  title: "Análise do CNIS",
                  text: "Estudamos seu histórico completo de contribuições, identificamos vínculos não reconhecidos, períodos especiais e simulamos todas as regras possíveis.",
                },
                {
                  num: "03",
                  title: "Estratégia personalizada",
                  text: "Apresentamos o melhor caminho — administrativo ou judicial — com prazos, valores estimados e honorários transparentes antes de qualquer ação.",
                },
              ].map((step, idx) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="font-serif text-prev-gold text-4xl mb-4">
                    {step.num}
                  </div>
                  <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                  <p className="text-prev-beige/70 text-sm leading-relaxed">
                    {step.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="pt-8 border-t border-prev-beige/15">
              <a
                href={whatsappLink(WHATSAPP_MESSAGES.home)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-prev-gold text-prev-navy px-7 py-3.5 rounded-full font-medium hover:bg-prev-gold/90 transition-colors"
              >
                Começar pelo WhatsApp
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <PrevFaq items={FAQ_HOME} />

        {/* CTA FINAL */}
        <section className="py-20 bg-prev-beige">
          <div className="max-w-3xl mx-auto px-5 text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-5">
              Pronto para entender{" "}
              <span className="italic">o que tem direito</span>?
            </h2>
            <p className="text-prev-navy/65 text-lg mb-8 leading-relaxed">
              Conte rapidamente sua situação pelo WhatsApp. Em poucas perguntas
              já indicamos os próximos passos.
            </p>
            <a
              href={whatsappLink(WHATSAPP_MESSAGES.home)}
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

import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";

import LawyerChatSection from "@/components/LawyerChatSection";
import PrevLayout from "@/components/prev/PrevLayout";
import PrevHero from "@/components/prev/PrevHero";
import PrevAreaCard from "@/components/prev/PrevAreaCard";
import PrevFaq from "@/components/prev/PrevFaq";
import {
  PREV_AREAS,
  WHATSAPP_MESSAGES,
} from "@/lib/prev-config";

const FAQ_HOME = [
  {
    q: "INSS negou meu pedido. Dá pra reverter?",
    a: "De jeito nenhum. Mais de 1 em cada 3 benefícios são negados na primeira vez, muitas vezes por erro do INSS, falta de documento ou perícia mal feita. A gente analisa o seu caso e vê se vale a pena recorrer (pelo próprio INSS) ou ir direto pra Justiça — onde, em muitos casos, o juiz nomeia um perito novo e a chance melhora muito.",
  },
  {
    q: "Vocês cobram caro? Tenho que pagar na frente?",
    a: "Na maioria dos casos previdenciários a gente trabalha com honorários de êxito — quer dizer, você só paga uma porcentagem se a gente conseguir o benefício pra você. Em alguns casos pode ter uma parte fixa pequena. Tudo é combinado por escrito antes de começar — sem surpresa.",
  },
  {
    q: "Quanto tempo demora pra receber se ganhar na Justiça?",
    a: "Depende da Vara e do tipo de pedido. Casos comuns levam entre 8 meses e 2 anos. Em casos urgentes (idoso, doente grave, sem recursos) a gente pede tutela de urgência e em alguns casos o INSS começa a pagar em poucas semanas, enquanto o processo continua.",
  },
  {
    q: "Trabalhei na roça quando era novo mas não tinha carteira. Conta?",
    a: "Conta sim! É o que chamam de tempo rural. Pra provar, a gente reúne documentos da época (declaração do sindicato rural, notas de produtor, contratos) e em alguns casos faz prova com testemunha. Quando bem documentado, pode dar direito a aposentadoria mais cedo (60 anos pra homem, 55 pra mulher) ou somar ao tempo urbano (aposentadoria híbrida).",
  },
  {
    q: "Sou de outra cidade ou outro estado. Vocês atendem?",
    a: "Sim, atendemos o Brasil todo. Processo previdenciário tramita na Justiça Federal e pode ser feito 100% online — desde a análise do CNIS até as audiências por videoconferência. Você não precisa sair de casa em nenhuma etapa.",
  },
];

const CASES = [
  {
    name: "Dona M., 67 anos",
    location: "Salvador / BA",
    benefit: "Aposentadoria por idade rural",
    text: "Tentei sozinha 2 vezes e o INSS negou. No 3º pedido, com toda a documentação rural reunida, conseguimos na via administrativa em 4 meses.",
  },
  {
    name: "Sr. J., 54 anos",
    location: "Feira de Santana / BA",
    benefit: "Auxílio-doença",
    text: "Eu estava sem condições de trabalhar e o INSS deu alta na perícia. Entramos na Justiça com nova perícia e o juiz concedeu em 6 meses.",
  },
  {
    name: "Família R.",
    location: "Camaçari / BA",
    benefit: "BPC / LOAS para PCD",
    text: "Meu filho tem deficiência. O INSS negou alegando renda familiar. Provamos as despesas com saúde e conseguimos o BPC em 8 meses.",
  },
];

export default function PrevHome() {
  return (
    <>
      <Helmet>
        <title>Advogado de INSS — Aposentadoria, Auxílio-Doença, BPC | Atendimento pelo WhatsApp</title>
        <meta
          name="description"
          content="Advogado que atua em INSS. Aposentadoria, auxílio-doença, aposentadoria por invalidez e BPC/LOAS. Atendimento direto pelo WhatsApp, sem juridiquês."
        />
        <link rel="canonical" href="https://riccio-advocacia.lovable.app/prev" />
      </Helmet>

      <PrevLayout ctaMessage={WHATSAPP_MESSAGES.home} quizKey="home">
        {/* HERO com foto humana */}
        <PrevHero />

        {/* Chat de triagem virtual (Assistente Virtual previdenciário) */}
        <LawyerChatSection area="previdenciario" />

        {/* ÁREAS DE ATUAÇÃO */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-2xl mb-16">
              <span className="prev-eyebrow mb-4">Em quais casos eu ajudo</span>
              <h2 className="font-serif text-4xl sm:text-5xl text-prev-navy leading-[1.05] mb-5 mt-3">
                Cada caso tem um{" "}
                <span className="italic text-prev-gold">caminho diferente</span>.
              </h2>
              <p className="text-prev-navy/70 text-lg leading-[1.75]">
                Pedir a aposentadoria errada pode te fazer perder dinheiro
                todo mês — pelo resto da vida. Por isso a primeira coisa que
                a gente faz é olhar seu histórico do INSS com calma.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
              {PREV_AREAS.map((area, idx) => (
                <PrevAreaCard
                  key={area.slug}
                  slug={area.slug}
                  title={area.title}
                  short={area.short}
                  description={area.description}
                  index={idx + 1}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CASOS REAIS (anônimos, OAB-safe) */}
        <section className="py-24 md:py-32 bg-prev-beige">
          <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-2xl mb-16">
              <span className="prev-eyebrow mb-4">Quem já passou por aqui</span>
              <h2 className="font-serif text-4xl sm:text-5xl text-prev-navy leading-[1.05] mb-5 mt-3">
                Casos reais (com{" "}
                <span className="italic text-prev-gold">identidade preservada</span>).
              </h2>
              <p className="text-prev-navy/70 text-lg leading-[1.75]">
                Por respeito ao sigilo profissional, não exibimos nomes
                completos nem fotos. Mas cada caso abaixo aconteceu de verdade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-px bg-prev-navy/10 border border-prev-navy/10">
              {CASES.map((c, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="relative bg-prev-beige p-8 pt-12 hover:bg-white transition-colors duration-500 overflow-hidden"
                >
                  <span aria-hidden className="prev-quote-mark absolute -top-2 left-6 select-none">"</span>
                  <p className="relative text-prev-navy/85 leading-[1.7] text-[15.5px] mb-7 font-serif italic">
                    {c.text}
                  </p>
                  <div className="pt-5 border-t border-prev-navy/12">
                    <p className="font-medium text-prev-navy text-sm">{c.name}</p>
                    <p className="text-xs text-prev-navy/55">{c.location}</p>
                    <p className="text-[10px] text-prev-gold mt-2 font-semibold uppercase tracking-[0.22em]">
                      {c.benefit}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-xs text-prev-navy/45 mt-10 italic max-w-xl mx-auto">
              Resultados em direito previdenciário variam conforme cada caso.
              Não há promessa nem garantia de resultado.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <PrevFaq
          title="Dúvidas mais frequentes"
          subtitle="As perguntas que mais escuto no WhatsApp."
          items={FAQ_HOME}
        />

      </PrevLayout>
    </>
  );
}

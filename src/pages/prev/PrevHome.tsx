import { Helmet } from "react-helmet-async";

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
    a: "Muitas vezes dá. Há negativas por erro do INSS, falta de documento ou perícia mal feita. A gente analisa o seu caso e vê se vale a pena recorrer (pelo próprio INSS) ou ir direto pra Justiça — onde, em geral, o juiz nomeia um perito novo. O resultado depende de cada caso.",
  },
  {
    q: "Vocês cobram caro? Tenho que pagar na frente?",
    a: "Os honorários dependem do tipo de caso e são combinados por escrito antes de qualquer ação — sem surpresa.",
  },
  {
    q: "Quanto tempo demora pra receber se ganhar na Justiça?",
    a: "Depende da Vara e do tipo de pedido; casos comuns costumam levar de meses a alguns anos. Em casos urgentes (idoso, doente grave, sem recursos) a gente pede tutela de urgência: se o juiz conceder, o INSS pode ter que pagar enquanto o processo continua. Quem decide o prazo é o juiz.",
  },
  {
    q: "Trabalhei na roça quando era novo mas não tinha carteira. Conta?",
    a: "Conta sim! É o que chamam de tempo rural. Pra provar, a gente reúne documentos da época (declaração do sindicato rural, notas de produtor, contratos) e em alguns casos faz prova com testemunha. Quando bem documentado, pode dar direito a aposentadoria mais cedo (60 anos pra homem, 55 pra mulher) ou somar ao tempo urbano (aposentadoria híbrida).",
  },
  {
    q: "Sou de outra cidade ou outro estado. Vocês atendem?",
    a: "O atendimento é online e o processo previdenciário é eletrônico, do CNIS às audiências por videoconferência. A perícia médica, quando houver, é presencial, na sua cidade ou região. O Dr. Gilberto Riccio é inscrito na OAB/BA (nº 46.638); para casos de fora da Bahia, ele avalia no primeiro contato se pode atuar.",
  },
];

// A seção "Casos reais" (depoimentos de clientes) foi retirada: o Provimento OAB 205/2021
// não admite depoimentos nem resultados de casos como publicidade.

export default function PrevHome() {
  return (
    <>
      <Helmet>
        <title>Advogado de INSS — Aposentadoria, Auxílio-Doença, BPC | Atendimento pelo WhatsApp</title>
        <meta
          name="description"
          content="Advogado que atua em INSS. Aposentadoria, auxílio-doença, aposentadoria por invalidez e BPC/LOAS. Atendimento direto pelo WhatsApp, sem juridiquês."
        />
        <link rel="canonical" href="https://riccioadvocacia.online/prev" />
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

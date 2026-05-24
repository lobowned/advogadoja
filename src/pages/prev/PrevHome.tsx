import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Quote } from "lucide-react";

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
import { PREV_IMAGES } from "@/lib/prev-images";

const FAQ_HOME = [
  {
    q: "INSS negou meu pedido. Fudeu tudo?",
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
  {
    q: "Tenho 15 anos pagando INSS. Já posso aposentar?",
    a: "15 anos é o tempo mínimo de carência pra mulher pela regra nova. Mas só isso não basta — precisa também ter a idade mínima (62 anos pra mulher, 65 pra homem) ou se enquadrar numa regra de transição (pedágio, pontos, idade progressiva). Manda mensagem com seus dados que eu te falo qual é a melhor regra pro seu caso.",
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
          content="Advogado especialista em INSS. Aposentadoria, auxílio-doença, aposentadoria por invalidez e BPC/LOAS. Atendimento direto pelo WhatsApp, sem juridiquês."
        />
        <link rel="canonical" href="https://advogadoja.lovable.app/prev" />
      </Helmet>

      <PrevLayout ctaMessage={WHATSAPP_MESSAGES.home}>
        {/* HERO com foto humana */}
        <PrevHero />

        {/* ÁREAS DE ATUAÇÃO */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
                Em quais casos eu ajudo
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-4">
                Cada caso tem um{" "}
                <span className="italic">caminho diferente</span>.
              </h2>
              <p className="text-prev-navy/70 text-lg leading-relaxed">
                Pedir a aposentadoria errada pode te fazer perder dinheiro
                todo mês — pelo resto da vida. Por isso a primeira coisa que
                a gente faz é olhar seu histórico do INSS com calma.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PREV_AREAS.map((area, idx) => {
                const img = PREV_IMAGES[area.imageKey as keyof typeof PREV_IMAGES];
                return (
                  <PrevAreaCard
                    key={area.slug}
                    slug={area.slug}
                    title={area.title}
                    short={area.short}
                    description={area.description}
                    imageUrl={img?.src}
                    imageAlt={img?.alt}
                    index={idx}
                  />
                );
              })}
            </div>
          </div>
        </section>

        {/* CASOS REAIS (anônimos, OAB-safe) */}
        <section className="py-20 bg-prev-beige">
          <div className="max-w-6xl mx-auto px-5">
            <div className="max-w-2xl mb-12">
              <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
                Quem já passou por aqui
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl text-prev-navy leading-tight mb-4">
                Casos reais (com{" "}
                <span className="italic">identidade preservada</span>).
              </h2>
              <p className="text-prev-navy/70 text-lg leading-relaxed">
                Por respeito ao sigilo profissional, não exibimos nomes
                completos nem fotos. Mas cada caso abaixo aconteceu de verdade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {CASES.map((c, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="bg-white p-7 rounded-2xl border border-prev-navy/8"
                >
                  <Quote className="w-8 h-8 text-prev-gold mb-4" strokeWidth={1.2} />
                  <p className="text-prev-navy/80 leading-relaxed text-[15px] mb-5">
                    {c.text}
                  </p>
                  <div className="pt-4 border-t border-prev-navy/10">
                    <p className="font-medium text-prev-navy text-sm">{c.name}</p>
                    <p className="text-xs text-prev-navy/55">{c.location}</p>
                    <p className="text-xs text-prev-gold mt-1.5 font-medium uppercase tracking-wider">
                      {c.benefit}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <p className="text-center text-xs text-prev-navy/45 mt-8 italic">
              Resultados em direito previdenciário variam conforme cada caso.
              Não há promessa nem garantia de resultado.
            </p>
          </div>
        </section>

        {/* COMO TRABALHAMOS */}
        <PrevTrust />

        {/* COMO FUNCIONA - 3 PASSOS */}
        <section className="py-20 bg-prev-navy text-prev-beige">
          <div className="max-w-5xl mx-auto px-5">
            <div className="max-w-2xl mb-14">
              <p className="text-xs uppercase tracking-[0.18em] text-prev-gold mb-3">
                Co
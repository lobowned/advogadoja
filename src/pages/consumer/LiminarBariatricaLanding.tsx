import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const breadcrumbs = [
  { label: "Início", href: "/" },
  { label: "Liminar Cirurgia", href: "/liminar-cirurgia-negada" },
  { label: "Bariátrica" }
];

const faqItems = [
  {
    question: "Qual IMC dá direito à cirurgia bariátrica?",
    answer: "IMC acima de 40 (obesidade mórbida) ou IMC acima de 35 com comorbidades como diabetes, hipertensão ou apneia do sono. Em alguns casos, IMC acima de 30 com diabetes de difícil controle também pode indicar a cirurgia."
  },
  {
    question: "O plano pode exigir 2 anos de tratamento conservador?",
    answer: "A diretriz da ANS para a cirurgia (DUT) fala em falha do tratamento clínico por pelo menos 2 anos. A Justiça tem afastado essa exigência quando o relatório médico mostra que a cirurgia é necessária antes disso. Por isso, o relatório do médico é a peça principal do pedido."
  },
  {
    question: "Cirurgia bariátrica é considerada estética?",
    answer: "Absolutamente não. É tratamento de saúde reconhecido pelo CFM e ANS. A obesidade mórbida é doença grave com CID E66. Planos que negam alegando ser estético cometem prática abusiva."
  },
  {
    question: "E a cirurgia plástica pós-bariátrica?",
    answer: "O Tema 1069 do STJ determina que cirurgias reparadoras pós-bariátrica são cobertas quando há indicação médica (excesso de pele causando problemas de saúde, dermatites, dificuldade de higiene)."
  },
  {
    question: "Quanto tempo demora a liminar para bariátrica?",
    answer: "Não há prazo fixo. Em urgência, o pedido pode ser levado ao plantão judiciário, inclusive à noite e em fins de semana. Quem decide o prazo é o juiz."
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Advogado Liminar Cirurgia Bariátrica",
  "description": "Advogado que atua em liminares para cirurgias bariátricas negadas por planos de saúde. Gastroplastia, bypass gástrico, sleeve.",
  "serviceType": ["Liminar Cirurgia Bariátrica", "Direito à Saúde", "Direito do Consumidor"],
  "areaServed": {
    "@type": "Country",
    "name": "Brasil"
  },
  "provider": {
    "@type": "LegalService",
    "name": "Riccio Advocacia"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map((item) => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": { "@type": "Answer", "text": item.answer },
  })),
};

const LiminarBariatricaLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>Cirurgia Bariátrica Negada? Advogado</title>
          <meta name="description" content="Plano de saúde negou sua cirurgia bariátrica? Advogado para pedido de liminar. Gastroplastia, bypass, sleeve." />
          <meta name="keywords" content="cirurgia bariátrica negada, liminar gastroplastia, plano saúde obesidade, bypass gástrico negado, sleeve negado, advogado bariátrica" />
          <link rel="canonical" href="https://riccioadvocacia.online/liminar-cirurgia-bariatrica" />
          <meta property="og:title" content="Cirurgia bariátrica negada pelo plano?" />
          <meta property="og:description" content="Plano de saúde negou sua cirurgia bariátrica? Advogado para pedido de liminar. Gastroplastia, bypass, sleeve." />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
      }
      breadcrumbs={breadcrumbs}
      title="Cirurgia bariátrica negada pelo plano?"
      subtitle="Obesidade é doença, não estética. Com indicação médica, a negativa pode ser revertida na Justiça por liminar."
      whatsappText="Olá! Tive minha cirurgia bariátrica negada pelo plano de saúde e preciso de uma liminar urgente."
      rights={[
        "Pedido de liminar para autorizar a bariátrica indicada pelo médico",
        "Afastamento de exigências sem base legal, como prazo fixo de tratamento",
        "Cobertura de cirurgia reparadora pós-bariátrica (Tema 1069 do STJ)",
        "Indenização por danos morais, conforme o caso",
      ]}
      faqs={faqItems}
    />
  </PageTransition>
);

export default LiminarBariatricaLanding;

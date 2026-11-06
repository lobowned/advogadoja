import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const breadcrumbs = [
  { label: "Início", href: "/" },
  { label: "Liminar Cirurgia", href: "/liminar-cirurgia-negada" },
  { label: "Cardíaca" }
];

const faqItems = [
  {
    question: "Cirurgia cardíaca de emergência tem carência?",
    answer: "Não. A Lei 9.656/98 determina cobertura imediata para urgência e emergência, inclusive cardiológicas. Não há carência para procedimentos de risco de vida."
  },
  {
    question: "O plano pode negar stent farmacológico?",
    answer: "Não pode. Desde 2014 (RN 338/ANS), os planos são obrigados a cobrir stents farmacológicos quando indicados pelo médico. A negativa é ilegal."
  },
  {
    question: "Quanto tempo demora liminar cardíaca?",
    answer: "Casos cardíacos são prioridade máxima. Liminares podem sair em 6 a 24 horas, inclusive em plantão judicial durante a noite e finais de semana."
  },
  {
    question: "Posso escolher o cardiologista?",
    answer: "Dentro da rede credenciada, sim. Se seu cardiologista de confiança estiver fora, pode-se pleitear reembolso integral ou autorização excepcional."
  },
  {
    question: "Qual o valor de danos morais em negativas cardíacas?",
    answer: "Por envolver risco de vida, os tribunais costumam fixar valores mais altos: entre R$ 15 mil e R$ 50 mil, dependendo da gravidade."
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Advogado Liminar Cirurgia Cardíaca",
  "description": "Advogado que atua em liminares para cirurgias cardíacas negadas. Ponte de safena, stent, angioplastia, marca-passo.",
  "serviceType": ["Liminar Cirurgia Cardíaca", "Direito à Saúde", "Emergência Cardiológica"],
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

const LiminarCardiologicaLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>Cirurgia Cardíaca Negada? Ponte de Safena, Stent</title>
          <meta name="description" content="Plano negou ponte de safena, stent ou angioplastia? Advogado para pedido de liminar de urgência contra o plano de saúde." />
          <meta name="keywords" content="cirurgia cardíaca negada, stent negado plano saúde, ponte safena negada, liminar cardiologia, advogado coração" />
          <link rel="canonical" href="https://advogadoja.com/liminar-cirurgia-cardiaca" />
          <meta property="og:title" content="Cirurgia cardíaca negada pelo plano?" />
          <meta property="og:description" content="Plano negou ponte de safena, stent ou angioplastia? Advogado para pedido de liminar de urgência contra o plano de saúde." />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
      }
      breadcrumbs={breadcrumbs}
      title="Cirurgia cardíaca negada pelo plano?"
      subtitle="Ponte de safena, stent, angioplastia ou marca-passo negado pode ser liberado na Justiça com pedido de liminar de urgência."
      whatsappText="Olá! Meu plano de saúde negou minha cirurgia cardíaca e preciso de uma liminar urgente."
      rights={[
        "Pedido de liminar para autorizar a cirurgia indicada pelo cardiologista",
        "Cobertura de urgência e emergência sem carência (Lei 9.656/98)",
        "Cobertura do material indicado, como stent farmacológico",
        "Indenização por danos morais, conforme o caso",
      ]}
      faqs={faqItems}
    />
  </PageTransition>
);

export default LiminarCardiologicaLanding;

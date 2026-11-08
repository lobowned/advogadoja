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
    answer: "Para urgência e emergência, a carência máxima é de 24 horas depois da contratação (Lei 9.656/1998, art. 12, V, c; Súmula 597 do STJ). Passado esse prazo, o plano não pode negar o atendimento de emergência alegando carência."
  },
  {
    question: "O plano pode negar stent farmacológico?",
    answer: "Em regra, não. O stent é material ligado ao ato cirúrgico (Lei 9.656/1998, art. 10, VII) e a escolha do tipo cabe ao médico, com justificativa. Se o plano discordar, deve seguir o procedimento de junta médica da ANS, em vez de simplesmente negar."
  },
  {
    question: "Quanto tempo demora liminar cardíaca?",
    answer: "Não há prazo fixo. Em urgência, o pedido pode ser levado ao plantão judiciário, inclusive à noite e em fins de semana. Quem decide o prazo é o juiz."
  },
  {
    question: "Posso escolher o cardiologista?",
    answer: "Dentro da rede credenciada, sim. Fora da rede, o reembolso segue o contrato; ele só é integral quando o plano não oferece profissional ou hospital apto na rede nos prazos da ANS."
  },
  {
    question: "Qual o valor de danos morais em negativas cardíacas?",
    answer: "Depende do caso. Os tribunais consideram a gravidade, o risco à saúde e a conduta do plano. Não há valor fixo nem garantido."
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
          <link rel="canonical" href="https://riccioadvocacia.online/liminar-cirurgia-cardiaca" />
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

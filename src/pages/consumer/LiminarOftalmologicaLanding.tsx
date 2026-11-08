import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const breadcrumbs = [
  { label: "Início", href: "/" },
  { label: "Liminar Cirurgia", href: "/liminar-cirurgia-negada" },
  { label: "Oftalmológica" }
];

const faqItems = [
  {
    question: "Plano pode negar lente multifocal para catarata?",
    answer: "Depende. A cirurgia de catarata com implante de lente está no rol da ANS. A lente multifocal ou tórica é discutida: quando ela serve para corrigir grau, e não para tratar a doença, muitos planos negam e a Justiça nem sempre obriga. Com relatório médico explicando por que essa lente é necessária no seu caso, vale analisar."
  },
  {
    question: "Cirurgia de catarata é estética?",
    answer: "Absolutamente não. Catarata é doença que causa perda progressiva da visão. A cirurgia é tratamento médico obrigatório para os planos de saúde."
  },
  {
    question: "Quanto tempo demora liminar oftalmológica?",
    answer: "Não há prazo fixo. Em urgência, como risco de perda da visão, o pedido pode ser levado ao plantão judiciário, inclusive à noite e em fins de semana. Quem decide o prazo é o juiz."
  },
  {
    question: "Injeções intravítreas são cobertas?",
    answer: "Sim, nos casos previstos na diretriz da ANS: o tratamento ocular com antiangiogênico (como ranibizumabe e aflibercepte) para DMRI, edema macular e outras indicações da diretriz está no rol."
  },
  {
    question: "Posso escolher o oftalmologista?",
    answer: "Dentro da rede credenciada, sim. Para cirurgias de alta complexidade, se não há especialista equivalente na rede, pode-se pleitear atendimento fora da rede."
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Advogado Liminar Cirurgia Oftalmológica",
  "description": "Advogado que atua em liminares para cirurgias oftalmológicas negadas. Catarata, glaucoma, retina, transplante de córnea.",
  "serviceType": ["Liminar Cirurgia Olhos", "Direito à Saúde", "Catarata Negada"],
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

const LiminarOftalmologicaLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>Cirurgia de Olhos Negada? Catarata, Glaucoma, Retina</title>
          <meta name="description" content="Plano negou cirurgia de catarata, glaucoma ou retina? Advogado para pedido de liminar contra o plano de saúde." />
          <meta name="keywords" content="cirurgia catarata negada, lente multifocal plano saúde, glaucoma negado, liminar olhos, advogado oftalmologia" />
          <link rel="canonical" href="https://riccioadvocacia.online/liminar-cirurgia-olhos" />
          <meta property="og:title" content="Cirurgia nos olhos negada pelo plano?" />
          <meta property="og:description" content="Plano negou cirurgia de catarata, glaucoma ou retina? Advogado para pedido de liminar contra o plano de saúde." />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
      }
      breadcrumbs={breadcrumbs}
      title="Cirurgia nos olhos negada pelo plano?"
      subtitle="Catarata, glaucoma ou retina: com indicação médica, a negativa pode ser revertida na Justiça por liminar."
      whatsappText="Olá! Meu plano de saúde negou minha cirurgia nos olhos e preciso de uma liminar urgente."
      rights={[
        "Pedido de liminar para autorizar a cirurgia oftalmológica",
        "Cobertura da lente indicada pelo médico",
        "Cobertura de injeções intravítreas quando indicadas",
        "Indenização por danos morais, conforme o caso",
      ]}
      faqs={faqItems}
    />
  </PageTransition>
);

export default LiminarOftalmologicaLanding;

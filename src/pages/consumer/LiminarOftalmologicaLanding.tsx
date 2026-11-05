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
    answer: "Não pode. A RN 428/ANS determina cobertura da lente indicada pelo médico. Se há indicação de lente multifocal ou tórica, o plano deve cobrir integralmente."
  },
  {
    question: "Cirurgia de catarata é estética?",
    answer: "Absolutamente não. Catarata é doença que causa perda progressiva da visão. A cirurgia é tratamento médico obrigatório para os planos de saúde."
  },
  {
    question: "Quanto tempo demora liminar oftalmológica?",
    answer: "Casos com risco de cegueira (descolamento de retina, glaucoma agudo) são decididos em 6 a 24 horas. Cataratas e outros: 24 a 72 horas."
  },
  {
    question: "Injeções intravítreas são cobertas?",
    answer: "Sim. Medicamentos como Lucentis, Eylea e similares para DMRI e edema macular estão no rol e devem ser cobertos quando indicados."
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
  "description": "Advogado especialista em liminares para cirurgias oftalmológicas negadas. Catarata, glaucoma, retina, transplante de córnea.",
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
          <link rel="canonical" href="https://advogadoja.com/liminar-cirurgia-olhos" />
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

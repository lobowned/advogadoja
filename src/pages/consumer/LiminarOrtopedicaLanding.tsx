import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const breadcrumbs = [
  { label: "Início", href: "/" },
  { label: "Liminar Cirurgia", href: "/liminar-cirurgia-negada" },
  { label: "Ortopédica" }
];

const faqItems = [
  {
    question: "O plano pode escolher o tipo de prótese?",
    answer: "Não. A escolha do material ortopédico é prerrogativa do médico, não do plano de saúde. O plano deve fornecer a prótese indicada pelo cirurgião."
  },
  {
    question: "Cirurgia ortopédica eletiva pode ser negada?",
    answer: "A maioria das cirurgias ortopédicas, mesmo classificadas como eletivas, são necessárias. Se há indicação médica e o paciente sofre com dor ou limitação, o plano deve cobrir."
  },
  {
    question: "Prótese importada é coberta?",
    answer: "Sim. Se o médico indica prótese importada por razões técnicas (durabilidade, compatibilidade), o plano deve cobrir. A Lei 9.656/98 garante os materiais necessários ao procedimento."
  },
  {
    question: "Quanto tempo demora a liminar ortopédica?",
    answer: "Entre 24 e 72 horas na maioria dos casos. Situações de dor intensa ou risco de sequelas permanentes podem ser decididas em plantão judicial."
  },
  {
    question: "Posso escolher o hospital e médico?",
    answer: "Dentro da rede credenciada, sim. Se o especialista indicado estiver fora da rede, pode-se pleitear autorização excepcional, especialmente se não houver profissional equivalente na rede."
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Advogado Liminar Cirurgia Ortopédica",
  "description": "Advogado especialista em liminares para cirurgias ortopédicas negadas. Próteses, artroscopias, cirurgias de coluna.",
  "serviceType": ["Liminar Cirurgia Ortopédica", "Direito à Saúde", "Prótese Negada"],
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

const LiminarOrtopedicaLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>Cirurgia Ortopédica Negada? Prótese, Coluna, Joelho</title>
          <meta name="description" content="Plano negou prótese de quadril, joelho ou cirurgia de coluna? Advogado para pedido de liminar contra o plano de saúde." />
          <meta name="keywords" content="prótese negada plano saúde, cirurgia ortopédica negada, liminar prótese quadril, cirurgia coluna negada, advogado ortopedia" />
          <link rel="canonical" href="https://advogadoja.com/liminar-cirurgia-ortopedica" />
          <meta property="og:title" content="Cirurgia ortopédica negada pelo plano?" />
          <meta property="og:description" content="Plano negou prótese de quadril, joelho ou cirurgia de coluna? Advogado para pedido de liminar contra o plano de saúde." />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
      }
      breadcrumbs={breadcrumbs}
      title="Cirurgia ortopédica negada pelo plano?"
      subtitle="Prótese, joelho, quadril ou coluna: com indicação médica, a negativa pode ser revertida na Justiça por liminar."
      whatsappText="Olá! Meu plano de saúde negou minha cirurgia ortopédica e preciso de uma liminar urgente."
      rights={[
        "Pedido de liminar para autorizar a cirurgia ortopédica",
        "Cobertura da prótese e do material indicados pelo cirurgião",
        "Autorização excepcional fora da rede quando não houver especialista equivalente",
        "Indenização por danos morais, conforme o caso",
      ]}
      faqs={faqItems}
    />
  </PageTransition>
);

export default LiminarOrtopedicaLanding;

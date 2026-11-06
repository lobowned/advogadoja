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
    answer: "A indicação do material é do médico, que descreve as características e, pela regra do CFM, indica ao menos três marcas. Se o plano discordar, a ANS prevê junta médica para desempate (RN 424/2017). O plano não pode simplesmente negar o material sem esse procedimento."
  },
  {
    question: "Cirurgia ortopédica eletiva pode ser negada?",
    answer: "Eletiva não quer dizer opcional. Com indicação médica e passada a carência (até 180 dias para procedimentos eletivos), o plano deve cobrir a cirurgia prevista no rol da ANS."
  },
  {
    question: "Prótese importada é coberta?",
    answer: "Pode ser. Prótese ligada ao ato cirúrgico tem cobertura (Lei 9.656/1998, art. 10, VII). Se o médico justifica tecnicamente uma prótese importada com registro na Anvisa, a negativa pode ser discutida; havendo divergência, cabe a junta médica da ANS."
  },
  {
    question: "Quanto tempo demora a liminar ortopédica?",
    answer: "Não há prazo fixo. Em urgência, como dor intensa ou risco de sequela permanente, o pedido pode ser levado ao plantão judiciário, inclusive à noite e em fins de semana. Quem decide o prazo é o juiz."
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
  "description": "Advogado que atua em liminares para cirurgias ortopédicas negadas. Próteses, artroscopias, cirurgias de coluna.",
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

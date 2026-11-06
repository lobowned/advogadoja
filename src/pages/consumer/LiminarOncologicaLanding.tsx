import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const breadcrumbs = [
  { label: "Início", href: "/" },
  { label: "Liminar Cirurgia", href: "/liminar-cirurgia-negada" },
  { label: "Tratamento Câncer" }
];

const faqItems = [
  {
    question: "Plano de saúde pode negar quimioterapia?",
    answer: "Não pode. A Lei 9.656/98 garante cobertura para tratamento oncológico. A negativa configura prática abusiva e dá direito a liminar e indenização por danos morais."
  },
  {
    question: "E se o medicamento não estiver no rol da ANS?",
    answer: "O rol da ANS é exemplificativo (Lei 14.454/22). Medicamentos aprovados pela ANVISA com indicação médica devem ser cobertos, mesmo fora do rol."
  },
  {
    question: "Quanto tempo demora a liminar em casos de câncer?",
    answer: "Casos oncológicos são tratados como urgência máxima. Liminares podem sair em 12 a 48 horas, inclusive em plantão judicial."
  },
  {
    question: "O plano pode exigir que eu use medicamento genérico?",
    answer: "O plano não pode substituir o medicamento prescrito pelo médico. A escolha do tratamento é prerrogativa do profissional de saúde, não do plano."
  },
  {
    question: "Posso ser indenizado pela negativa?",
    answer: "Sim. Além da autorização do tratamento, é possível pleitear danos morais (R$ 10 mil a R$ 50 mil em média) pela angústia causada."
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Advogado Liminar Tratamento Câncer",
  "description": "Advogado que atua em liminares para tratamentos oncológicos negados. Quimioterapia, radioterapia, imunoterapia, cirurgias.",
  "serviceType": ["Liminar Tratamento Câncer", "Direito à Saúde", "Plano de Saúde"],
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

const LiminarOncologicaLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>Tratamento de Câncer Negado? Advogado Oncológico</title>
          <meta name="description" content="Plano negou quimioterapia, radioterapia ou imunoterapia? Advogado para pedido de liminar urgente em tratamento oncológico." />
          <meta name="keywords" content="quimioterapia negada, plano saúde câncer, liminar tratamento oncológico, imunoterapia negada, advogado câncer" />
          <link rel="canonical" href="https://advogadoja.com/liminar-tratamento-cancer" />
          <meta property="og:title" content="Tratamento de câncer negado pelo plano?" />
          <meta property="og:description" content="Plano negou quimioterapia, radioterapia ou imunoterapia? Advogado para pedido de liminar urgente em tratamento oncológico." />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
      }
      breadcrumbs={breadcrumbs}
      title="Tratamento de câncer negado pelo plano?"
      subtitle="Quimioterapia, radioterapia ou medicamento negado pode ser liberado na Justiça com pedido de liminar urgente."
      whatsappText="Olá! Meu plano de saúde negou meu tratamento de câncer e preciso de uma liminar urgente."
      rights={[
        "Pedido de liminar para liberar o tratamento oncológico prescrito",
        "Cobertura de medicamento aprovado pela ANVISA, mesmo fora do rol da ANS",
        "Manutenção do medicamento escolhido pelo seu médico",
        "Indenização por danos morais, conforme o caso",
      ]}
      faqs={faqItems}
    />
  </PageTransition>
);

export default LiminarOncologicaLanding;

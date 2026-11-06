import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const breadcrumbs = [
  { label: "Início", href: "/" },
  { label: "Liminar Cirurgia", href: "/liminar-cirurgia-negada" },
  { label: "Neurocirurgia" }
];

const faqItems = [
  {
    question: "Cirurgia de coluna pode ser negada por ser eletiva?",
    answer: "Se há compressão nervosa com risco de sequela permanente (paralisia, perda de força), a cirurgia é urgente. O plano não pode negar alegando que é eletiva."
  },
  {
    question: "Material de neurocirurgia é coberto?",
    answer: "Em regra, sim: material ligado ao ato cirúrgico (parafusos, cages, placas, derivações) tem cobertura (Lei 9.656/1998, art. 10, VII). Se o plano discordar do material indicado, deve abrir junta médica (RN 424/2017 da ANS) em vez de negar."
  },
  {
    question: "Quanto tempo demora liminar para tumor cerebral?",
    answer: "Não há prazo fixo. Em urgência, o pedido pode ser levado ao plantão judiciário, inclusive à noite e em fins de semana. Quem decide o prazo é o juiz."
  },
  {
    question: "O plano pode exigir que use hospital da rede?",
    answer: "Em neurocirurgias complexas, se não há profissional ou estrutura equivalente na rede, pode-se exigir atendimento fora da rede com cobertura integral."
  },
  {
    question: "Estimulador cerebral (DBS) para Parkinson é coberto?",
    answer: "O implante de eletrodos para estimulação cerebral profunda consta do rol da ANS, com diretriz de utilização que inclui a doença de Parkinson. Se o caso cumpre a diretriz e há indicação médica, a negativa pode ser questionada na Justiça com pedido de liminar."
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Advogado Liminar Neurocirurgia",
  "description": "Advogado que atua em liminares para neurocirurgias negadas. Cirurgia de coluna, tumor cerebral, aneurisma.",
  "serviceType": ["Liminar Neurocirurgia", "Direito à Saúde", "Cirurgia de Coluna"],
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

const LiminarNeurologicaLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>Neurocirurgia Negada? Coluna, Tumor, Aneurisma</title>
          <meta name="description" content="Plano negou cirurgia de coluna, tumor cerebral ou aneurisma? Advogado para pedido de liminar de urgência." />
          <meta name="keywords" content="cirurgia coluna negada, tumor cerebral plano saúde, neurocirurgia negada, liminar hérnia disco, advogado neurologia" />
          <link rel="canonical" href="https://advogadoja.com/liminar-neurocirurgia" />
          <meta property="og:title" content="Neurocirurgia negada pelo plano?" />
          <meta property="og:description" content="Plano negou cirurgia de coluna, tumor cerebral ou aneurisma? Advogado para pedido de liminar de urgência." />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
      }
      breadcrumbs={breadcrumbs}
      title="Neurocirurgia negada pelo plano?"
      subtitle="Cirurgia de coluna, tumor ou aneurisma negado pode ser liberado na Justiça com pedido de liminar de urgência."
      whatsappText="Olá! Meu plano de saúde negou minha neurocirurgia e preciso de uma liminar urgente."
      rights={[
        "Pedido de liminar para autorizar a neurocirurgia indicada",
        "Cobertura dos materiais indicados pelo neurocirurgião",
        "Atendimento fora da rede quando não houver estrutura equivalente",
        "Indenização por danos morais, conforme o caso",
      ]}
      faqs={faqItems}
    />
  </PageTransition>
);

export default LiminarNeurologicaLanding;

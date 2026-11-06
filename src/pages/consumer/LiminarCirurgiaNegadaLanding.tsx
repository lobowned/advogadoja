import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const faqItems = [
  {
    question: "Quanto tempo demora para conseguir a liminar?",
    answer: "Não há prazo fixo. Em urgência, o pedido pode ser levado ao plantão judiciário, inclusive à noite e em fins de semana. Quem decide o prazo é o juiz.",
  },
  {
    question: "Minha cirurgia foi negada por não estar no rol da ANS. Posso conseguir liminar?",
    answer: "Pode. Pela Lei 14.454/2022, o rol da ANS não é a lista final. Com prescrição médica, registro na Anvisa, comprovação científica de eficácia e sem alternativa equivalente no rol, o plano pode ser obrigado a cobrir (critérios fixados pelo STF na ADI 7.265, em 2025).",
  },
  {
    question: "O plano negou alegando carência. Tenho direito à liminar?",
    answer: "Em urgência e emergência, a carência máxima é de 24 horas depois da contratação (Lei 9.656/1998, art. 12, V, c; Súmula 597 do STJ). Se há risco à saúde, é possível pedir liminar.",
  },
  {
    question: "E se a liminar for negada?",
    answer: "É possível recorrer com agravo de instrumento, e o processo continua normalmente.",
  },
  {
    question: "Qual a multa se o plano não cumprir a liminar?",
    answer: "O juiz pode fixar multa diária (astreintes) por descumprimento, além de outras medidas para garantir o cumprimento da ordem.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Advogado Liminar Cirurgia Plano de Saúde",
  "description": "Advogado que atua em liminares para cirurgias negadas por planos de saúde.",
  "areaServed": "Brasil",
  "serviceType": [
    "Liminar Cirurgia Plano de Saúde",
    "Tutela de Urgência Saúde",
    "Cirurgia Bariátrica Negada",
    "Tratamento Oncológico Negado",
    "Cirurgia Ortopédica Negada",
  ],
  "provider": { "@type": "LegalService", "name": "Riccio Advocacia" },
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

const LiminarCirurgiaNegadaLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>Liminar Cirurgia Negada pelo Plano de Saúde | Riccio Advocacia</title>
          <meta name="description" content="Teve cirurgia negada pelo plano de saúde? Advogado para pedido de liminar judicial de urgência para o seu tratamento. Bariátrica, câncer, ortopedia e mais." />
          <meta name="keywords" content="liminar cirurgia plano saúde, cirurgia negada, tutela urgência saúde, bariátrica negada, quimioterapia negada, prótese negada, advogado plano saúde" />
          <link rel="canonical" href="https://riccio-advocacia.lovable.app/liminar-cirurgia-negada" />
          <meta property="og:title" content="Cirurgia Negada? Advogado para Liminar" />
          <meta property="og:description" content="Plano negou sua cirurgia? Peça autorização judicial urgente com advogado." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://riccio-advocacia.lovable.app/liminar-cirurgia-negada" />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>
      }
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Consumidor", href: "/advogado-consumidor" },
        { label: "Liminar Cirurgia Negada" },
      ]}
      title="Cirurgia negada pelo plano de saúde?"
      subtitle="Com indicação médica, a negativa pode ser revertida na Justiça com um pedido de liminar de urgência."
      whatsappText="Urgente: Minha cirurgia foi negada pelo plano e preciso de uma liminar."
      rights={[
        "Pedido de liminar para autorizar a cirurgia indicada pelo médico",
        "Cobertura mesmo fora do rol da ANS, quando há indicação e comprovação",
        "Afastamento de carência em urgência e emergência",
        "Reembolso do que você pagou e indenização, conforme o caso",
      ]}
      faqs={faqItems}
    />
  </PageTransition>
);

export default LiminarCirurgiaNegadaLanding;

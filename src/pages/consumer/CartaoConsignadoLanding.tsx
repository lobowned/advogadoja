import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const faqItems = [
  {
    question: "O que é RMC e RCC?",
    answer: "RMC (Reserva de Margem Consignável) é o valor reservado do seu benefício do INSS para pagamento de cartão de crédito consignado. RCC (Reserva de Cartão Consignado) é o desconto que aparece no seu extrato. Muitas vezes o aposentado nunca pediu esse cartão.",
  },
  {
    question: "Nunca pedi cartão consignado, posso cancelar?",
    answer: "Sim. Se você nunca solicitou o cartão, é possível pedir o cancelamento e a restituição em dobro dos valores descontados, além de indenização por danos morais, conforme o caso.",
  },
  {
    question: "Como saber se tenho desconto indevido de RMC/RCC?",
    answer: "Acesse o Meu INSS (site ou aplicativo) e consulte o extrato de empréstimo consignado ou o histórico de créditos. Lá constam todos os descontos ativos no seu benefício.",
  },
  {
    question: "Preciso ir ao banco para resolver?",
    answer: "Não. O atendimento é online, pelo WhatsApp. Você envia os documentos e acompanha o caso sem sair de casa.",
  },
  {
    question: "Quanto tempo demora o processo?",
    answer: "Depende do caso e da vara. É possível pedir liminar para suspender os descontos logo no início do processo.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "name": "Advogado Cartão Consignado - Desconto RMC RCC Indevido | Riccio Advocacia",
      "description": "Desconto indevido de cartão consignado no INSS? Advogado especialista em RMC e RCC. Restituição em dobro + indenização.",
      "url": "https://riccio-advocacia.lovable.app/advogado-cartao-consignado",
      "telephone": "+5571997036269",
      "areaServed": "BR",
      "serviceType": ["Direito do Consumidor", "Cartão Consignado Indevido", "RMC RCC INSS"],
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer },
      })),
    },
  ],
};

const CartaoConsignadoLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>{`Desconto Indevido INSS? Cartão Consignado RMC RCC | Riccio Advocacia`}</title>
          <meta
            name="description"
            content="Desconto de cartão consignado no INSS que você não autorizou? Advogado especialista em RMC e RCC. Restituição em dobro e indenização."
          />
          <link rel="canonical" href="https://riccio-advocacia.lovable.app/advogado-cartao-consignado" />
          <meta property="og:title" content="Desconto Indevido INSS? Cartão Consignado RMC RCC | Riccio Advocacia" />
          <meta property="og:description" content="Cartão consignado que você não pediu descontando do seu INSS? Restituição em dobro e indenização." />
          <meta property="og:url" content="https://riccio-advocacia.lovable.app/advogado-cartao-consignado" />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        </Helmet>
      }
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Consumidor", href: "/advogado-consumidor" },
        { label: "Cartão Consignado" },
      ]}
      title="Desconto de cartão consignado no seu INSS?"
      subtitle="Se você não pediu o cartão (RMC/RCC), o desconto pode ser cancelado e o valor devolvido em dobro."
      whatsappText="Olá! Estou com um desconto indevido de cartão consignado (RMC/RCC) no meu benefício do INSS e gostaria de orientação jurídica."
      rights={[
        "Cancelamento do cartão consignado que você não contratou",
        "Suspensão dos descontos no benefício, inclusive por liminar",
        "Devolução em dobro dos valores descontados (art. 42 do CDC)",
        "Indenização por danos morais, conforme o caso",
      ]}
      faqs={faqItems}
    />
  </PageTransition>
);

export default CartaoConsignadoLanding;

import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const faqItems = [
  {
    question: "Qual o prazo para entrar com ação por problemas com voo?",
    answer: "Voos nacionais: 5 anos (CDC). Voos internacionais: 2 anos para danos materiais (Convenção de Montreal); para danos morais, o STF aplica o CDC, com prazo de 5 anos (Tema 1.240). Mesmo assim, vale agir rápido para guardar as provas.",
  },
  {
    question: "Quais documentos preciso guardar?",
    answer: "Guarde cartão de embarque, comprovante de compra, e-mails da companhia, fotos de painéis mostrando atraso/cancelamento, e qualquer comunicação com a empresa.",
  },
  {
    question: "Quanto tempo demora o processo?",
    answer: "Casos simples costumam tramitar nos Juizados Especiais. O tempo varia conforme a cidade e a complexidade do caso.",
  },
  {
    question: "A companhia ofereceu voucher. Devo aceitar?",
    answer: "Cuidado: vouchers podem ter valor inferior ao que você tem direito e incluir cláusulas que limitam seus direitos. Consulte um advogado antes de aceitar.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "name": "Advogado para Problemas Aéreos | Riccio Advocacia",
      "description": "Indenização por voo cancelado, atrasado, overbooking, bagagem extraviada e outros problemas aéreos.",
      "url": "https://riccio-advocacia.lovable.app/advogado-problemas-voo",
      "telephone": "+5571997036269",
      "areaServed": "BR",
      "serviceType": ["Direito do Consumidor", "Direitos do Passageiro Aéreo", "Indenização Voo Cancelado"],
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

const ProblemasVooLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>{`Problemas com Voo? Conheça Seus Direitos | Riccio Advocacia`}</title>
          <meta
            name="description"
            content="Voo cancelado, atrasado, overbooking ou bagagem perdida? Advogado que atua em direitos do passageiro aéreo. Indenização por voo cancelado."
          />
          <link rel="canonical" href="https://riccio-advocacia.lovable.app/advogado-problemas-voo" />
          <meta property="og:title" content="Problemas com Voo? Conheça Seus Direitos | Riccio Advocacia" />
          <meta property="og:description" content="Voo cancelado, atrasado, overbooking ou bagagem perdida? Advogado que atua em direitos do passageiro aéreo." />
          <meta property="og:url" content="https://riccio-advocacia.lovable.app/advogado-problemas-voo" />
          <meta property="og:type" content="website" />
          <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        </Helmet>
      }
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Consumidor", href: "/advogado-consumidor" },
        { label: "Problemas com Voo" },
      ]}
      title="Problema com seu voo? Você tem direitos."
      subtitle="Cancelamento, atraso, overbooking ou bagagem extraviada podem gerar reembolso e indenização."
      whatsappText="Olá! Tive um problema com meu voo e gostaria de saber sobre meus direitos e possível indenização."
      rights={[
        "Assistência material da companhia: comunicação, alimentação e hospedagem",
        "Reembolso integral ou reacomodação em outro voo",
        "Indenização por bagagem extraviada ou danificada",
        "Indenização por danos morais e materiais, conforme o caso",
      ]}
      faqs={faqItems}
    />
  </PageTransition>
);

export default ProblemasVooLanding;

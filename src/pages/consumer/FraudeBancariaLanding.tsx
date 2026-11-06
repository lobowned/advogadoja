import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Advogado Fraude Bancária - Devolução de Valores",
  "description": "Advogado que atua em fraude bancária. PIX não autorizado, cartão clonado, empréstimo fraudulento. Pedido de devolução dos valores.",
  "areaServed": "Brasil",
  "serviceType": ["Fraude Bancária", "Golpe PIX", "Cartão Clonado", "Empréstimo Fraudulento"],
};

const FraudeBancariaLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>Fraude Bancária | Golpe PIX, Cartão Clonado - Devolução de Valores</title>
          <meta name="description" content="Vítima de fraude bancária? PIX não autorizado, cartão clonado, empréstimo fraudulento. Advogado para pedir a devolução e indenização, conforme o caso." />
          <meta name="keywords" content="fraude bancária, golpe PIX, cartão clonado, empréstimo fraudulento, recuperar dinheiro banco, advogado fraude" />
          <link rel="canonical" href="https://riccio-advocacia.lovable.app/fraude-bancaria" />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      }
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Consumidor", href: "/advogado-consumidor" },
        { label: "Fraude Bancária" },
      ]}
      title="Fraude bancária? O banco pode ter que devolver seu dinheiro."
      subtitle="PIX não autorizado, cartão clonado ou empréstimo que você não fez: o banco responde pela segurança da sua conta."
      whatsappText="Olá, fui vítima de fraude bancária e quero analisar meu caso."
      rights={[
        "Devolução dos valores de PIX, saques ou compras que você não autorizou",
        "Cancelamento de empréstimo contratado sem sua autorização",
        "Estorno de compras feitas com cartão clonado",
        "Indenização por danos morais, conforme o caso",
      ]}
    />
  </PageTransition>
);

export default FraudeBancariaLanding;

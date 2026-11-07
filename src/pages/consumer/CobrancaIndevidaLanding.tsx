import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Advogado Cobrança Indevida - Devolução em Dobro",
  "description": "Advogado que atua em cobrança indevida. Direito à devolução em dobro. Serviço não contratado, valor errado, cobrança duplicada.",
  "areaServed": "Brasil",
  "serviceType": ["Cobrança Indevida", "Devolução em Dobro", "Direito do Consumidor"],
};

const CobrancaIndevidaLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>Advogado para Cobrança Indevida | Devolução em Dobro</title>
          <meta name="description" content="Fale com um advogado que atua em cobrança indevida. Proteja-se contra abusos de bancos e empresas. Atendimento online pelo WhatsApp." />
          <meta name="keywords" content="cobrança indevida, devolução em dobro, restituição em dobro, serviço não contratado, cobrança duplicada, advogado consumidor, advogado cobrança indevida" />
          <link rel="canonical" href="https://riccioadvocacia.online/advogado-cobranca-indevida" />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      }
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Consumidor", href: "/advogado-consumidor" },
        { label: "Cobrança Indevida" },
      ]}
      title="Cobrança indevida? Você pode receber em dobro."
      subtitle="O art. 42 do Código de Defesa do Consumidor garante a devolução em dobro do que foi pago indevidamente, com juros e correção."
      whatsappText="Olá, tenho uma cobrança indevida e quero analisar meu caso."
      rights={[
        "Devolução em dobro do valor pago indevidamente (art. 42 do CDC)",
        "Cancelamento da cobrança de serviço não contratado ou já cancelado",
        "Correção de cobrança duplicada ou acima do contratado",
        "Indenização por danos morais, conforme o caso",
      ]}
    />
  </PageTransition>
);

export default CobrancaIndevidaLanding;

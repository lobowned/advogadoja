import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Advogado Plano de Saúde - Negativa de Cobertura",
  "description": "Advogado especialista em negativas de plano de saúde. Cirurgia negada, exame negado. Pedido de liminar.",
  "areaServed": "Brasil",
  "serviceType": ["Negativa Plano de Saúde", "Liminar de Saúde", "Direito do Consumidor"],
};

const PlanoSaudeNegouLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>Advogado para Problemas com Plano de Saúde | Cobertura Negada</title>
          <meta name="description" content="Plano de saúde negou seu tratamento ou cirurgia? Fale com um advogado especialista em direito da saúde e garanta seus direitos." />
          <meta name="keywords" content="plano saúde negou, negativa plano de saúde, liminar plano saúde, cirurgia negada, exame negado plano, advogado plano de saúde, cobertura negada" />
          <link rel="canonical" href="https://advogadoja.lovable.app/advogado-plano-saude-cobertura-negada" />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      }
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Consumidor", href: "/advogado-consumidor" },
        { label: "Plano de Saúde Negou" },
      ]}
      title="Plano de saúde negou cobertura?"
      subtitle="Cirurgia, exame, internação ou medicamento negado pode ser liberado na Justiça por meio de liminar."
      whatsappText="Olá, meu plano de saúde negou cobertura e quero analisar meu caso."
      rights={[
        "Pedido de liminar para liberar cirurgia, exame ou internação",
        "Cobertura de medicamento de alto custo e tratamento oncológico",
        "Contestação de negativas por carência, rol da ANS ou doença pré-existente",
        "Reembolso do que você pagou e indenização, conforme o caso",
      ]}
    />
  </PageTransition>
);

export default PlanoSaudeNegouLanding;

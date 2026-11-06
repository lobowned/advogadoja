import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Advogado Voo Cancelado - Indenização",
  "description": "Advogado que atua em indenização por voo cancelado, atrasado ou overbooking.",
  "areaServed": "Brasil",
  "serviceType": ["Indenização por Voo Cancelado", "Direito do Consumidor", "Danos Morais"],
};

const VooCanceladoLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>Advogado para Voo Cancelado ou Atrasado | Indenização Aérea</title>
          <meta name="description" content="Advogado que atua em direitos do passageiro aéreo. Obtenha indenização por voo cancelado, atrasado ou extravio de bagagem." />
          <meta name="keywords" content="voo cancelado indenização, atraso de voo indenização, overbooking direitos, indenização companhia aérea, voo atrasado o que fazer, advogado voo cancelado" />
          <link rel="canonical" href="https://riccio-advocacia.lovable.app/advogado-voo-cancelado-atrasado" />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      }
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Consumidor", href: "/advogado-consumidor" },
        { label: "Voo Cancelado" },
      ]}
      title="Voo cancelado ou atrasado? Você tem direitos."
      subtitle="Cancelamento, atraso longo ou overbooking podem gerar reembolso, reacomodação e indenização."
      whatsappText="Olá, tive problema com voo cancelado/atrasado e quero analisar meu caso."
      rights={[
        "Assistência material: comunicação após 1h, alimentação após 2h, hospedagem após 4h",
        "Reembolso integral da passagem",
        "Reacomodação em outro voo sem custo adicional",
        "Indenização por danos morais e materiais, conforme o caso",
      ]}
    />
  </PageTransition>
);

export default VooCanceladoLanding;

import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Advogado Negativação Indevida - Indenização Nome Sujo",
  "description": "Advogado especialista em negativação indevida. Nome sujo no SPC/Serasa sem dever? Saiba como limpar seu nome e pedir indenização.",
  "areaServed": "Brasil",
  "serviceType": ["Negativação Indevida", "Indenização Nome Sujo", "Danos Morais"],
};

const NegativacaoIndevidaLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>Advogado para Negativação Indevida | Limpe Seu Nome</title>
          <meta name="description" content="Seu nome foi negativado indevidamente? Consulte um advogado especialista e limpe seu nome. Indenização por danos morais." />
          <meta name="keywords" content="negativação indevida, nome sujo indevido, indenização SPC, indenização Serasa, tirar nome do SPC, dívida que não é minha, advogado negativação" />
          <link rel="canonical" href="https://riccio-advocacia.lovable.app/advogado-negativacao-indevida" />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      }
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Consumidor", href: "/advogado-consumidor" },
        { label: "Negativação Indevida" },
      ]}
      title="Nome negativado sem dever? Você tem direitos."
      subtitle="Inscrição indevida no SPC ou Serasa pode ser retirada na Justiça, com pedido de indenização por danos morais."
      whatsappText="Olá, meu nome foi negativado indevidamente e quero analisar meu caso."
      rights={[
        "Retirada do seu nome do SPC, Serasa e outros cadastros",
        "Cancelamento de dívida que você nunca contratou ou já pagou",
        "Indenização por danos morais pela negativação indevida",
        "Proteção quando seus dados foram usados em fraude",
      ]}
    />
  </PageTransition>
);

export default NegativacaoIndevidaLanding;

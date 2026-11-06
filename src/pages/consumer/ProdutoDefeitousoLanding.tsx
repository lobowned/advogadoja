import { Helmet } from "react-helmet-async";
import PageTransition from "@/components/motion/PageTransition";
import SimpleConsumerLanding from "@/components/consumer/SimpleConsumerLanding";

const faqItems = [
  {
    question: "Qual o prazo para reclamar de produto com defeito?",
    answer: "Para produtos não duráveis (alimentos, cosméticos), o prazo é de 30 dias. Para produtos duráveis (eletrodomésticos, eletrônicos, veículos), o prazo é de 90 dias. Esses prazos começam a contar da entrega do produto ou da descoberta do defeito (vício oculto).",
  },
  {
    question: "O que é vício oculto e qual o prazo para reclamar?",
    answer: "Vício oculto é o defeito que não é aparente no momento da compra, mas se manifesta depois com o uso normal do produto. Nesses casos, o prazo de 90 dias começa a contar a partir do momento em que o defeito se manifesta, e não da data da compra.",
  },
  {
    question: "Posso exigir troca imediata por produto novo?",
    answer: "Sim, em alguns casos. Se o defeito for essencial (compromete a função principal do produto), você pode exigir troca imediata, devolução do dinheiro ou abatimento proporcional. Nos demais casos, a empresa tem até 30 dias para reparar antes de você poder exigir outras soluções.",
  },
  {
    question: "E se a loja ou fabricante falir?",
    answer: "O Código de Defesa do Consumidor estabelece a responsabilidade solidária. Isso significa que você pode cobrar de qualquer empresa da cadeia de fornecimento: fabricante, importador, distribuidor ou lojista. Se a loja fechou, cobre do fabricante.",
  },
  {
    question: "Comprei pela internet, tenho os mesmos direitos?",
    answer: "Sim, os mesmos direitos se aplicam. Além disso, compras pela internet dão direito ao arrependimento em até 7 dias, sem precisar justificar. Nesse caso, você pode devolver o produto e receber o dinheiro de volta integralmente, incluindo o frete.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "Advogado para Produto Defeituoso - Troca e Indenização",
  "description": "Advogado que atua em direito do consumidor para casos de produto com defeito. Troca, reparo, devolução do dinheiro e indenização por danos morais.",
  "areaServed": "Brasil",
  "serviceType": ["Produto Defeituoso", "Vício de Produto", "Direito do Consumidor", "Indenização"],
};

const ProdutoDefeitousoLanding = () => (
  <PageTransition>
    <SimpleConsumerLanding
      seo={
        <Helmet>
          <title>Advogado para Produto Defeituoso | Troca e Indenização</title>
          <meta name="description" content="Comprou um produto com defeito e a empresa não resolve? Advogado que atua em direito do consumidor para troca e indenização. Consulta gratuita." />
          <meta name="keywords" content="produto defeituoso, garantia produto, vício oculto, vício aparente, troca produto defeituoso, advogado consumidor, indenização produto, CDC, direito do consumidor" />
          <link rel="canonical" href="https://riccio-advocacia.lovable.app/advogado-produto-defeituoso" />
          <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </Helmet>
      }
      breadcrumbs={[
        { label: "Início", href: "/" },
        { label: "Direito do Consumidor", href: "/advogado-consumidor" },
        { label: "Produto Defeituoso" },
      ]}
      title="Produto com defeito e a empresa não resolve?"
      subtitle="O Código de Defesa do Consumidor garante troca, conserto ou dinheiro de volta, e cobra de toda a cadeia de fornecedores."
      whatsappText="Olá! Comprei um produto com defeito e a empresa não resolve. Gostaria de analisar meu caso."
      rights={[
        "Troca por produto novo, devolução do dinheiro ou abatimento no preço",
        "Responsabilidade do fabricante, importador e lojista ao mesmo tempo",
        "Arrependimento em até 7 dias em compras pela internet",
        "Indenização por danos materiais e morais, conforme o caso",
      ]}
      faqs={faqItems}
    />
  </PageTransition>
);

export default ProdutoDefeitousoLanding;

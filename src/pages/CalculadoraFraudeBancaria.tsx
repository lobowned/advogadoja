import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageTransition from "@/components/motion/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, ShieldCheck, CreditCard, Smartphone, MessageCircle, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import FraudeBancariaCalculator from "@/components/calculators/FraudeBancariaCalculator";
import { BackButton } from "@/components/BackButton";
import RelatedContent from "@/components/RelatedContent";

const CalculadoraFraudeBancaria = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculadora de Indenização Fraude Bancária",
    "description": "Calcule online e grátis quanto você pode receber de indenização por fraude bancária, golpe do PIX, cartão clonado ou empréstimo não autorizado.",
    "url": "https://advogadoja.lovable.app/calculadora-fraude-bancaria",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "O banco é obrigado a devolver dinheiro de golpe do PIX?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em muitos casos, sim. O STJ entende que o banco tem responsabilidade objetiva pela segurança das transações. Se houve falha de segurança do banco, ele deve ressarcir o cliente."
        }
      },
      {
        "@type": "Question",
        "name": "Tive meu cartão clonado. De quem é a responsabilidade?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A responsabilidade é do banco e da administradora do cartão. Eles devem ter sistemas de segurança para detectar e bloquear compras suspeitas. O consumidor não deve arcar com prejuízos de fraude."
        }
      },
      {
        "@type": "Question",
        "name": "Fizeram um empréstimo em meu nome. O que fazer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Faça um BO, reclame no banco por escrito e guarde o protocolo. O banco deve cancelar o empréstimo fraudulento e você não precisa pagar. Se negativarem seu nome, cabe danos morais."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o prazo para reclamar de fraude bancária?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O prazo é de 5 anos para ações contra bancos (relação de consumo). Quanto antes você agir, melhor para reunir provas e aumentar as chances de recuperar o dinheiro."
        }
      }
    ]
  };

  return (
    <PageTransition variant="fade">
      <Helmet>
        <title>Calculadora de Indenização Fraude Bancária | PIX, Cartão Clonado 2025</title>
        <meta name="description" content="Sofreu golpe do PIX ou teve cartão clonado? Calcule grátis quanto você pode receber de indenização. Banco tem responsabilidade. Advogado especializado." />
        <meta name="keywords" content="golpe pix, cartão clonado, fraude bancária, empréstimo fraude, banco devolver dinheiro, indenização banco" />
        <link rel="canonical" href="https://advogadoja.lovable.app/calculadora-fraude-bancaria" />
        <meta property="og:title" content="Calculadora de Indenização Fraude Bancária | PIX, Cartão Clonado" />
        <meta property="og:description" content="Sofreu golpe do PIX ou teve cartão clonado? Calcule grátis quanto você pode receber de indenização." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advogadoja.lovable.app/calculadora-fraude-bancaria" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar onCtaClick={scrollToChat} />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-blue-500/10 to-background">
          <div className="container mx-auto px-4">
            <BackButton to="/calculadoras" label="Voltar às calculadoras" className="mb-6" />
            <div className="max-w-3xl mx-auto text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Shield className="w-4 h-4" />
                Responsabilidade do Banco
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Calculadora <span className="text-blue-500">Fraude Bancária</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Sofreu golpe do PIX, teve cartão clonado ou empréstimo não autorizado? 
                Calcule quanto você pode receber de indenização. <strong>O banco pode ser responsabilizado!</strong>
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Resultado Instantâneo</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Baseado no STJ</span>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <FraudeBancariaCalculator />
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Tipos de fraude mais comuns</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-green-500" />
                </div>
                <h3 className="font-semibold mb-2">Golpe do PIX</h3>
                <p className="text-sm text-muted-foreground">
                  Foi enganado e fez um PIX? Dependendo do caso, o banco pode ser responsabilizado 
                  por não ter mecanismos de segurança adequados.
                </p>
                <p className="text-xs text-green-500 mt-2 font-medium">Indenização: valor + danos morais</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                  <CreditCard className="w-6 h-6 text-purple-500" />
                </div>
                <h3 className="font-semibold mb-2">Cartão Clonado</h3>
                <p className="text-sm text-muted-foreground">
                  Compras não reconhecidas no cartão? O banco e a administradora têm responsabilidade 
                  objetiva e devem cancelar as cobranças.
                </p>
                <p className="text-xs text-purple-500 mt-2 font-medium">Indenização: valor + danos morais</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-semibold mb-2">Empréstimo Fraudulento</h3>
                <p className="text-sm text-muted-foreground">
                  Descobriu um empréstimo que não contratou? O banco deve cancelar a dívida e 
                  indenizá-lo, especialmente se houve negativação.
                </p>
                <p className="text-xs text-red-500 mt-2 font-medium">Indenização: R$ 8.000 a R$ 20.000+</p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">O banco é obrigado a devolver dinheiro de golpe?</h3>
                <p className="text-sm text-muted-foreground">
                  Em muitos casos, sim. O STJ entende que o banco tem responsabilidade objetiva pela 
                  segurança das transações. Se houve falha de segurança, ele deve ressarcir.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Cartão clonado: de quem é a responsabilidade?</h3>
                <p className="text-sm text-muted-foreground">
                  Do banco e da administradora do cartão. Eles devem ter sistemas para detectar e 
                  bloquear compras suspeitas. O consumidor não deve arcar com prejuízos de fraude.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Fizeram empréstimo em meu nome. O que fazer?</h3>
                <p className="text-sm text-muted-foreground">
                  Faça um BO, reclame no banco por escrito e guarde o protocolo. O banco deve 
                  cancelar o empréstimo fraudulento. Se negativarem seu nome, cabe danos morais.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Qual o prazo para reclamar?</h3>
                <p className="text-sm text-muted-foreground">
                  O prazo é de 5 anos para ações contra bancos (relação de consumo). Quanto antes 
                  você agir, melhor para reunir provas e aumentar as chances de recuperar o dinheiro.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-blue-500/10">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto p-8 text-center bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-500/20">
              <ShieldCheck className="w-12 h-12 text-blue-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Quer recuperar seu dinheiro?</h2>
              <p className="text-muted-foreground mb-6">
                Nossos advogados especializados em fraudes bancárias podem te ajudar a 
                responsabilizar o banco e recuperar seu prejuízo com danos morais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={scrollToChat} size="lg" className="gap-2 bg-blue-500 hover:bg-blue-600">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Advogado
                </Button>
                <Link to="/fraude-bancaria">
                  <Button variant="outline" size="lg" className="gap-2 w-full">
                    Conhecer Nossos Serviços
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>

        {/* Related Content */}
        <RelatedContent currentType="calculator" nicheId="consumidor" />
      </main>
    </PageTransition>
  );
};

export default CalculadoraFraudeBancaria;

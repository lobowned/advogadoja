import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageTransition from "@/components/motion/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Receipt, ShieldCheck, FileCheck, Scale, MessageCircle, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import DevolucaoEmDobroCalculator from "@/components/calculators/DevolucaoEmDobroCalculator";
import { BackButton } from "@/components/BackButton";
import RelatedContent from "@/components/RelatedContent";

const CalculadoraDevolucaoEmDobro = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculadora de Devolução em Dobro",
    "description": "Calcule online e grátis quanto você pode receber de volta por cobrança indevida. Art. 42 do CDC garante devolução em dobro.",
    "url": "https://advogadoja.lovable.app/calculadora-devolucao-dobro",
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
        "name": "O que é a devolução em dobro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A devolução em dobro é um direito previsto no Art. 42 do Código de Defesa do Consumidor. Quando o consumidor paga um valor cobrado indevidamente, tem direito a receber de volta o valor pago em dobro, com correção monetária e juros."
        }
      },
      {
        "@type": "Question",
        "name": "Quando tenho direito à devolução em dobro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Você tem direito quando: pagou por serviço não contratado, foi cobrado por valor maior que o correto, continuou sendo cobrado após cancelamento, pagou taxa indevida ou qualquer outra cobrança irregular."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso ter pago para ter direito?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim, para a devolução em dobro (Art. 42 CDC), é necessário ter efetivamente pago o valor indevido. Se apenas foi cobrado mas não pagou, você pode contestar a cobrança e pedir danos morais."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o prazo para pedir a devolução em dobro?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O prazo é de 5 anos a partir do pagamento indevido. É importante guardar todos os comprovantes de pagamento e faturas."
        }
      }
    ]
  };

  return (
    <PageTransition variant="fade">
      <Helmet>
        <title>Calculadora de Devolução em Dobro | Cobrança Indevida 2025</title>
        <meta name="description" content="Calcule grátis quanto você pode receber de volta por cobrança indevida. Art. 42 CDC garante devolução em dobro + danos morais. Calcule agora!" />
        <meta name="keywords" content="devolução em dobro, cobrança indevida, art 42 cdc, restituição em dobro, direito do consumidor, calculadora" />
        <link rel="canonical" href="https://advogadoja.lovable.app/calculadora-devolucao-dobro" />
        <meta property="og:title" content="Calculadora de Devolução em Dobro | Cobrança Indevida" />
        <meta property="og:description" content="Calcule grátis quanto você pode receber de volta por cobrança indevida. Art. 42 CDC garante devolução em dobro." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advogadoja.lovable.app/calculadora-devolucao-dobro" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar onCtaClick={scrollToChat} />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-orange-500/10 to-background">
          <div className="container mx-auto px-4">
            <BackButton to="/calculadoras" label="Voltar às calculadoras" className="mb-6" />
            <div className="max-w-3xl mx-auto text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 dark:text-orange-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Receipt className="w-4 h-4" />
                Art. 42 do CDC
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Calculadora de <span className="text-orange-500">Devolução em Dobro</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Pagou algo que não devia? Calcule quanto você pode receber de volta. 
                O Código de Defesa do Consumidor garante a <strong>devolução em dobro</strong> do valor pago indevidamente.
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
                <span>Baseado em Jurisprudência</span>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <DevolucaoEmDobroCalculator />
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Quando você tem direito?</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-6">
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-4">
                  <Receipt className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-semibold mb-2">Cobrança de Serviço Não Contratado</h3>
                <p className="text-sm text-muted-foreground">
                  Apareceu na fatura um serviço que você nunca pediu? Você tem direito à devolução em dobro 
                  do que pagou, mais danos morais.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-semibold mb-2">Valor Cobrado a Maior</h3>
                <p className="text-sm text-muted-foreground">
                  Pagou mais do que deveria? A diferença deve ser devolvida em dobro. 
                  Muito comum em contas de luz, telefone e cartão.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <FileCheck className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-semibold mb-2">Cobrança Após Cancelamento</h3>
                <p className="text-sm text-muted-foreground">
                  Cancelou o serviço e continuam cobrando? Além da devolução em dobro, 
                  pode haver danos morais pelo transtorno.
                </p>
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
                <h3 className="font-semibold mb-2">O que é a devolução em dobro?</h3>
                <p className="text-sm text-muted-foreground">
                  É um direito previsto no Art. 42 do CDC. Quando você paga um valor cobrado indevidamente, 
                  tem direito a receber de volta o valor pago em dobro, com correção monetária e juros.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Preciso ter pago para ter direito?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim, para a devolução em dobro é necessário ter efetivamente pago o valor indevido. 
                  Se apenas foi cobrado mas não pagou, você pode contestar a cobrança e pedir danos morais.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Qual o prazo para pedir?</h3>
                <p className="text-sm text-muted-foreground">
                  O prazo é de 5 anos a partir do pagamento indevido. Guarde todos os comprovantes 
                  de pagamento e faturas para comprovar seu direito.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Posso também pedir danos morais?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim! Além da devolução em dobro, se você passou por transtornos como corte de serviço, 
                  negativação indevida ou constrangimento, pode pedir indenização por danos morais.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-orange-500/10">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto p-8 text-center bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/20">
              <ShieldCheck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Quer recuperar seu dinheiro?</h2>
              <p className="text-muted-foreground mb-6">
                Nossos advogados especializados em Direito do Consumidor podem te ajudar a 
                receber a devolução em dobro e indenização por danos morais.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={scrollToChat} size="lg" className="gap-2 bg-orange-500 hover:bg-orange-600">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Advogado
                </Button>
                <Link to="/advogado-consumidor">
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

export default CalculadoraDevolucaoEmDobro;

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageTransition from "@/components/motion/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, MessageCircle, Shield, Clock, Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { BackButton } from "@/components/BackButton";
import NegativacaoCalculator from "@/components/calculators/NegativacaoCalculator";

const CalculadoraNegativacao = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculadora de Indenização por Negativação Indevida",
    "description": "Calcule gratuitamente quanto você pode receber de indenização por nome sujo indevido no SPC/Serasa. Valores de R$ 5.000 a R$ 30.000.",
    "url": "https://advogado.online/calculadora-negativacao",
    "applicationCategory": "LegalService",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    },
    "provider": {
      "@type": "LegalService",
      "name": "Advogado Online",
      "url": "https://advogado.online"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto posso ganhar de indenização por negativação indevida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A indenização por negativação indevida varia de R$ 5.000 a R$ 30.000, dependendo do tempo que seu nome ficou sujo, os prejuízos sofridos e se houve recusa de crédito ou constrangimento."
        }
      },
      {
        "@type": "Question",
        "name": "Meu nome foi negativado mas não devo. O que fazer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Primeiro, guarde provas da negativação indevida. Depois, entre em contato com a empresa responsável pedindo a exclusão. Se não resolver, procure um advogado para entrar com ação de indenização por danos morais."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o prazo para pedir indenização por nome sujo indevido?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O prazo para pedir indenização por negativação indevida é de 3 anos a partir do momento em que você tomou conhecimento do dano."
        }
      }
    ]
  };

  return (
    <PageTransition variant="fade">
      <Helmet>
        <title>Calculadora de Indenização por Negativação Indevida 2025 | Nome Sujo SPC Serasa</title>
        <meta name="description" content="Calcule sua indenização por negativação indevida no SPC/Serasa. Nome sujo sem dever? Valores de R$ 5.000 a R$ 30.000. Cálculo gratuito e instantâneo." />
        <meta name="keywords" content="calculadora negativação indevida, indenização nome sujo, SPC Serasa indevido, danos morais negativação, quanto ganho nome sujo, advogado negativação" />
        <link rel="canonical" href="https://advogado.online/calculadora-negativacao" />
        <meta property="og:title" content="Calculadora de Indenização por Negativação Indevida 2025" />
        <meta property="og:description" content="Calcule gratuitamente quanto você pode receber de indenização por nome sujo indevido. Valores atualizados 2025." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advogado.online/calculadora-negativacao" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar onCtaClick={scrollToChat} />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-red-500/10 to-background">
          <div className="container mx-auto px-4">
            <BackButton to="/calculadoras" label="Voltar às calculadoras" className="mb-6" />
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <AlertCircle className="w-4 h-4" />
                Calculadora Gratuita
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Calculadora de Indenização por <span className="text-red-500">Negativação Indevida</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Seu nome foi negativado indevidamente no SPC ou Serasa? Descubra quanto você pode 
                receber de indenização por danos morais.
              </p>
              
              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                  <Check className="w-4 h-4 text-green-500" />
                  <span className="text-sm">100% Gratuito</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                  <Clock className="w-4 h-4 text-blue-500" />
                  <span className="text-sm">Resultado Instantâneo</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border">
                  <Shield className="w-4 h-4 text-red-500" />
                  <span className="text-sm">Jurisprudência Atualizada</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <NegativacaoCalculator />
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Quando a Negativação é Indevida?
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                    <AlertCircle className="w-4 h-4 text-red-500" />
                  </div>
                  Dívida Inexistente
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Quando você nunca contratou o serviço ou produto que originou a suposta dívida. 
                  Comum em casos de fraude ou erro cadastral.
                </p>
                <p className="text-sm font-medium text-red-600">
                  Indenização: R$ 8.000 a R$ 20.000
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-yellow-600" />
                  </div>
                  Dívida Já Paga
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Quando a dívida já foi quitada mas a empresa não deu baixa na negativação. 
                  O prazo para exclusão é de até 5 dias úteis após o pagamento.
                </p>
                <p className="text-sm font-medium text-red-600">
                  Indenização: R$ 5.000 a R$ 15.000
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Shield className="w-4 h-4 text-purple-500" />
                  </div>
                  Sem Notificação Prévia
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  A empresa deve notificar o consumidor antes de negativar. Se você não recebeu 
                  aviso prévio, a negativação pode ser considerada abusiva.
                </p>
                <p className="text-sm font-medium text-red-600">
                  Indenização: R$ 5.000 a R$ 12.000
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h2>
              
              <div className="space-y-6">
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-2">Quanto posso ganhar de indenização por nome sujo indevido?</h3>
                  <p className="text-sm text-muted-foreground">
                    A indenização por negativação indevida varia de R$ 5.000 a R$ 30.000, dependendo 
                    do tempo que seu nome ficou sujo, os prejuízos sofridos e se houve recusa de crédito.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-2">Qual o prazo para pedir indenização?</h3>
                  <p className="text-sm text-muted-foreground">
                    O prazo para pedir indenização por negativação indevida é de 3 anos a partir 
                    do momento em que você tomou conhecimento do dano (quando descobriu a negativação).
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-2">Preciso comprovar os prejuízos?</h3>
                  <p className="text-sm text-muted-foreground">
                    Não! A negativação indevida gera dano moral presumido (in re ipsa). Isso significa 
                    que você não precisa provar que sofreu prejuízos, basta provar que a negativação foi indevida.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-2">Posso pedir liminar para tirar meu nome do SPC/Serasa?</h3>
                  <p className="text-sm text-muted-foreground">
                    Sim! É possível conseguir uma liminar (decisão urgente) para retirar seu nome dos 
                    órgãos de proteção ao crédito em poucos dias, antes mesmo do julgamento final.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-red-500/10 to-orange-500/10">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-8 text-center border-red-500/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Nome Sujo Indevidamente?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossos advogados especialistas em direito do consumidor podem conseguir a exclusão 
                do seu nome e garantir sua indenização. Análise gratuita!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={scrollToChat} size="lg" className="gap-2 bg-red-500 hover:bg-red-600">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Advogado Agora
                </Button>
                <Link to="/negativacao-indevida">
                  <Button variant="outline" size="lg" className="gap-2 w-full">
                    Saiba Mais Sobre Seus Direitos
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default CalculadoraNegativacao;

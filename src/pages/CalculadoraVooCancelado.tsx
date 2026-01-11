import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageTransition from "@/components/motion/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plane, MessageCircle, AlertTriangle, Clock, Check, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { BackButton } from "@/components/BackButton";
import FlightDelayCalculator from "@/components/calculators/FlightDelayCalculator";

const CalculadoraVooCancelado = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculadora de Indenização por Voo Cancelado",
    "description": "Calcule gratuitamente quanto você pode receber de indenização por voo cancelado, atrasado ou overbooking. Valores de R$ 3.000 a R$ 15.000.",
    "url": "https://advogado.online/calculadora-voo-cancelado",
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
        "name": "Quanto posso ganhar de indenização por voo cancelado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A indenização por voo cancelado varia de R$ 3.000 a R$ 15.000, dependendo do tempo de atraso, distância do voo e prejuízos sofridos. Cancelamentos com menos de 72h de aviso geralmente resultam em valores maiores."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o prazo para pedir indenização por voo cancelado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O prazo para pedir indenização por voo cancelado é de 5 anos para voos nacionais e 2 anos para voos internacionais, contados a partir da data do voo."
        }
      },
      {
        "@type": "Question",
        "name": "Preciso de advogado para pedir indenização por voo cancelado?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Para valores até 20 salários mínimos, você pode ir ao Juizado Especial sem advogado. No entanto, com advogado as chances de sucesso e os valores obtidos costumam ser significativamente maiores."
        }
      }
    ]
  };

  return (
    <PageTransition variant="fade">
      <Helmet>
        <title>Calculadora de Indenização por Voo Cancelado 2025 | Calcule Grátis</title>
        <meta name="description" content="Calcule sua indenização por voo cancelado, atrasado ou overbooking. Valores de R$ 3.000 a R$ 15.000. Resultado instantâneo e gratuito. Fale com advogado especialista." />
        <meta name="keywords" content="calculadora voo cancelado, indenização voo cancelado, voo atrasado indenização, overbooking indenização, quanto ganho voo cancelado, advogado voo cancelado" />
        <link rel="canonical" href="https://advogado.online/calculadora-voo-cancelado" />
        <meta property="og:title" content="Calculadora de Indenização por Voo Cancelado 2025" />
        <meta property="og:description" content="Calcule gratuitamente quanto você pode receber de indenização por voo cancelado. Valores atualizados 2025." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advogado.online/calculadora-voo-cancelado" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar onCtaClick={scrollToChat} />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-orange-500/10 to-background">
          <div className="container mx-auto px-4">
            <BackButton to="/calculadoras" label="Voltar às calculadoras" className="mb-6" />
            <div className="text-center max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 bg-orange-500/10 text-orange-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Plane className="w-4 h-4" />
                Calculadora Gratuita
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Calculadora de Indenização por <span className="text-orange-500">Voo Cancelado</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Descubra quanto você pode receber de indenização por voo cancelado, atrasado ou overbooking. 
                Cálculo instantâneo baseado em jurisprudência atualizada.
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
                  <AlertTriangle className="w-4 h-4 text-orange-500" />
                  <span className="text-sm">Valores Atualizados 2025</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <FlightDelayCalculator />
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Entenda Seus Direitos
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                    <AlertTriangle className="w-4 h-4 text-red-500" />
                  </div>
                  Voo Cancelado
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Se seu voo foi cancelado sem aviso prévio de 72h, você tem direito a indenização por danos morais além de reembolso integral ou reacomodação.
                </p>
                <p className="text-sm font-medium text-orange-600">
                  Indenização: R$ 5.000 a R$ 15.000
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-yellow-500/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-yellow-600" />
                  </div>
                  Voo Atrasado
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Atrasos acima de 4 horas geram direito a indenização. Quanto maior o atraso e os prejuízos causados, maior o valor da indenização.
                </p>
                <p className="text-sm font-medium text-orange-600">
                  Indenização: R$ 3.000 a R$ 10.000
                </p>
              </Card>
              
              <Card className="p-6">
                <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <Plane className="w-4 h-4 text-purple-500" />
                  </div>
                  Overbooking
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Impedido de embarcar por excesso de passageiros? Você tem direito a indenização imediata além de reacomodação ou reembolso.
                </p>
                <p className="text-sm font-medium text-orange-600">
                  Indenização: R$ 5.000 a R$ 15.000
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
                  <h3 className="font-semibold mb-2">Quanto posso ganhar de indenização por voo cancelado?</h3>
                  <p className="text-sm text-muted-foreground">
                    A indenização por voo cancelado varia de R$ 3.000 a R$ 15.000, dependendo do tempo de atraso, 
                    distância do voo e prejuízos sofridos. Cancelamentos com menos de 72h de aviso geralmente 
                    resultam em valores maiores.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-2">Qual o prazo para pedir indenização?</h3>
                  <p className="text-sm text-muted-foreground">
                    O prazo para pedir indenização por voo cancelado é de 5 anos para voos nacionais e 
                    2 anos para voos internacionais, contados a partir da data do voo.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-2">Preciso guardar algum documento?</h3>
                  <p className="text-sm text-muted-foreground">
                    Sim! Guarde o cartão de embarque, e-mails de confirmação, comprovante de compra, 
                    fotos do painel de voos e qualquer comunicação da companhia aérea.
                  </p>
                </div>
                
                <div className="bg-card rounded-lg p-6 border">
                  <h3 className="font-semibold mb-2">A companhia ofereceu voucher. Devo aceitar?</h3>
                  <p className="text-sm text-muted-foreground">
                    Cuidado! Ao aceitar voucher você pode estar abrindo mão do direito à indenização. 
                    Consulte um advogado antes de aceitar qualquer proposta da companhia aérea.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-orange-500/10 to-red-500/10">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-8 text-center border-orange-500/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Teve Problema com Voo?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossos advogados especialistas em direito do consumidor estão prontos para analisar 
                seu caso gratuitamente e garantir sua indenização.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={scrollToChat} size="lg" className="gap-2 bg-orange-500 hover:bg-orange-600">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Advogado Agora
                </Button>
                <Link to="/voo-cancelado">
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

export default CalculadoraVooCancelado;

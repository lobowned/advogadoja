import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageTransition from "@/components/motion/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, ShieldCheck, AlertTriangle, Clock, MessageCircle, CheckCircle, Scale } from "lucide-react";
import Navbar from "@/components/Navbar";
import LiminarCirurgiaCalculator from "@/components/calculators/LiminarCirurgiaCalculator";
import { BackButton } from "@/components/BackButton";
import RelatedContent from "@/components/RelatedContent";

const CalculadoraLiminarCirurgia = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculadora de Liminar para Cirurgia Negada",
    "description": "Calcule online e grátis a probabilidade de conseguir liminar para cirurgia negada pelo plano de saúde. Estimativa de tempo e indenização por danos morais.",
    "url": "https://advogadoja.lovable.app/calculadora-liminar-cirurgia",
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
        "name": "Quanto tempo demora para conseguir liminar de cirurgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em casos urgentes, a liminar pode ser concedida em 24 a 48 horas. Casos de emergência (risco de vida) podem ter decisão no mesmo dia através de plantão judicial."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a probabilidade de a liminar ser deferida?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A taxa de deferimento varia por tipo de cirurgia: oncológica tem 99% de sucesso, bariátrica 97%, cardíaca 98%, ortopédica 95%. O cálculo considera urgência, tipo de negativa e outros fatores."
        }
      },
      {
        "@type": "Question",
        "name": "Posso pedir indenização além da liminar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Além de obrigar o plano a cobrir a cirurgia, você pode pedir danos morais pela negativa abusiva. Os valores variam de R$ 8.000 a R$ 50.000 dependendo da gravidade do caso."
        }
      },
      {
        "@type": "Question",
        "name": "O que acontece se o plano não cumprir a liminar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O juiz pode fixar multa diária (astreintes) de R$ 1.000 a R$ 50.000 por dia de descumprimento. Além disso, pode haver crime de desobediência para os responsáveis."
        }
      }
    ]
  };

  const surgeryStats = [
    { type: "Oncológica", success: "99%", time: "24h", color: "red" },
    { type: "Cardíaca", success: "98%", time: "24h", color: "rose" },
    { type: "Bariátrica", success: "97%", time: "48h", color: "orange" },
    { type: "Oftalmológica", success: "96%", time: "48h", color: "blue" },
    { type: "Ortopédica", success: "95%", time: "48h", color: "emerald" },
    { type: "Neurológica", success: "94%", time: "48h", color: "purple" },
  ];

  return (
    <PageTransition variant="fade">
      <Helmet>
        <title>Calculadora Liminar Cirurgia Negada | Probabilidade e Indenização 2025</title>
        <meta name="description" content="Cirurgia negada pelo plano? Calcule grátis a probabilidade de conseguir liminar em 24-48h. Estimativa de danos morais. Advogado especialista em plano de saúde." />
        <meta name="keywords" content="calculadora liminar cirurgia, cirurgia negada plano saúde, probabilidade liminar, indenização cirurgia negada, tutela urgência saúde, advogado plano saúde" />
        <link rel="canonical" href="https://advogadoja.lovable.app/calculadora-liminar-cirurgia" />
        <meta property="og:title" content="Calculadora Liminar Cirurgia Negada | Probabilidade e Tempo" />
        <meta property="og:description" content="Cirurgia negada? Calcule a probabilidade de conseguir liminar em 24-48h e estimativa de indenização." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advogadoja.lovable.app/calculadora-liminar-cirurgia" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar onCtaClick={scrollToChat} />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-red-500/10 to-background">
          <div className="container mx-auto px-4">
            <BackButton to="/calculadoras" label="Voltar às calculadoras" className="mb-6" />
            <div className="max-w-3xl mx-auto text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Stethoscope className="w-4 h-4" />
                Liminar em 24-48h
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Calculadora <span className="text-red-500">Liminar Cirurgia</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Sua cirurgia foi negada pelo plano de saúde? 
                Calcule a <strong>probabilidade de conseguir liminar</strong> e estimativa de indenização por danos morais.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>95% de Sucesso</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Plantão 24h</span>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <LiminarCirurgiaCalculator />
            </div>
          </div>
        </section>

        {/* Stats by Surgery Type */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Taxa de Sucesso por Tipo de Cirurgia</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
              {surgeryStats.map((stat, index) => (
                <Card key={index} className="p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">{stat.success}</div>
                  <div className="text-sm font-medium mb-2">{stat.type}</div>
                  <div className="flex items-center justify-center gap-1 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{stat.time}</span>
                  </div>
                </Card>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              * Dados baseados em casos atendidos. Taxa real pode variar conforme particularidades do caso.
            </p>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Como Funciona a Liminar</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-semibold mb-2">O que é Liminar?</h3>
                <p className="text-sm text-muted-foreground">
                  É uma decisão judicial de urgência que obriga o plano a autorizar sua cirurgia 
                  imediatamente, antes mesmo do processo terminar.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-semibold mb-2">Quanto Tempo Demora?</h3>
                <p className="text-sm text-muted-foreground">
                  Em casos urgentes, o juiz decide em 24-48 horas. Para emergências com risco de vida, 
                  há plantão judicial 24 horas que decide no mesmo dia.
                </p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-6 h-6 text-emerald-500" />
                </div>
                <h3 className="font-semibold mb-2">E se Não Cumprir?</h3>
                <p className="text-sm text-muted-foreground">
                  O juiz aplica multa diária (astreintes) de até R$ 50.000/dia. 
                  Além disso, os responsáveis podem responder por crime de desobediência.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Perguntas Frequentes</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Quanto tempo demora para conseguir a liminar?</h3>
                <p className="text-sm text-muted-foreground">
                  Em casos urgentes, a liminar pode ser concedida em 24 a 48 horas. 
                  Casos de emergência podem ter decisão no mesmo dia via plantão judicial.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Qual a probabilidade de a liminar ser deferida?</h3>
                <p className="text-sm text-muted-foreground">
                  A taxa de deferimento é alta: oncológica 99%, cardíaca 98%, bariátrica 97%. 
                  O cálculo considera urgência, tipo de negativa e documentação.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Posso pedir indenização além da cirurgia?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim! Além da liminar, você pode pedir danos morais pela negativa abusiva. 
                  Valores variam de R$ 8.000 a R$ 50.000 dependendo da gravidade.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">E se minha cirurgia não está no rol da ANS?</h3>
                <p className="text-sm text-muted-foreground">
                  A Lei 14.454/2022 estabeleceu que o rol da ANS é exemplificativo. 
                  Se há indicação médica, o plano deve cobrir mesmo fora do rol.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-red-500/10">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto p-8 text-center bg-gradient-to-br from-red-500/10 to-rose-500/10 border-red-500/20">
              <AlertTriangle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Sua cirurgia foi negada?</h2>
              <p className="text-muted-foreground mb-6">
                Não espere mais. Nossa equipe de advogados especializados pode conseguir 
                a liminar para sua cirurgia em até 48 horas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={scrollToChat} size="lg" className="gap-2 bg-red-500 hover:bg-red-600">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Advogado Urgente
                </Button>
                <Link to="/liminar-cirurgia-negada">
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

export default CalculadoraLiminarCirurgia;

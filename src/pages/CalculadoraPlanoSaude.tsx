import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import PageTransition from "@/components/motion/PageTransition";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, HeartPulse, ShieldCheck, AlertTriangle, Clock, MessageCircle, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import PlanoSaudeCalculator from "@/components/calculators/PlanoSaudeCalculator";
import { BackButton } from "@/components/BackButton";
import RelatedContent from "@/components/RelatedContent";

const CalculadoraPlanoSaude = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Calculadora de Indenização Plano de Saúde",
    "description": "Calcule online e grátis quanto você pode receber de indenização quando o plano de saúde nega cobertura de procedimento, cirurgia ou internação.",
    "url": "https://advogadoja.lovable.app/calculadora-plano-saude",
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
        "name": "O plano de saúde pode negar um procedimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Na maioria dos casos, não. Se o procedimento foi solicitado pelo médico e está previsto no rol da ANS ou é necessário para tratar a doença, a negativa é abusiva e pode gerar indenização por danos morais."
        }
      },
      {
        "@type": "Question",
        "name": "O que é uma liminar contra plano de saúde?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "É uma decisão judicial de urgência que obriga o plano a autorizar o procedimento imediatamente, geralmente em 24 a 48 horas. É usada quando não há tempo para esperar o processo normal."
        }
      },
      {
        "@type": "Question",
        "name": "Qual o prazo do plano para autorizar procedimentos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Segundo a ANS: urgência e emergência devem ser imediatos; internação em até 21 dias úteis; exames em até 3 dias úteis; consultas em até 7 dias úteis."
        }
      },
      {
        "@type": "Question",
        "name": "Posso processar o plano mesmo se já fiz o procedimento?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! Se você pagou o procedimento do próprio bolso por causa da negativa indevida, pode pedir o reembolso integral mais danos morais."
        }
      }
    ]
  };

  return (
    <PageTransition variant="fade">
      <Helmet>
        <title>Calculadora de Indenização Plano de Saúde | Negativa de Cobertura 2025</title>
        <meta name="description" content="Plano de saúde negou seu procedimento? Calcule grátis sua indenização por negativa de cobertura. Saiba sobre liminar em 48h. Advogado especializado." />
        <meta name="keywords" content="plano saúde negou, negativa cobertura, liminar plano saúde, indenização plano saúde, calculadora, processo plano saúde" />
        <link rel="canonical" href="https://advogadoja.lovable.app/calculadora-plano-saude" />
        <meta property="og:title" content="Calculadora de Indenização Plano de Saúde | Negativa de Cobertura" />
        <meta property="og:description" content="Plano de saúde negou seu procedimento? Calcule grátis sua indenização. Saiba sobre liminar em 48h." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advogadoja.lovable.app/calculadora-plano-saude" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar onCtaClick={scrollToChat} />

      <main className="min-h-screen bg-background pt-20">
        {/* Hero */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-rose-500/10 to-background">
          <div className="container mx-auto px-4">
            <BackButton to="/calculadoras" label="Voltar às calculadoras" className="mb-6" />
            <div className="max-w-3xl mx-auto text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-rose-500/10 text-rose-600 dark:text-rose-400 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <HeartPulse className="w-4 h-4" />
                Direito à Saúde
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Calculadora <span className="text-rose-500">Plano de Saúde</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Seu plano de saúde negou um procedimento, cirurgia ou internação? 
                Calcule quanto você pode receber de indenização e saiba como conseguir uma <strong>liminar em até 48h</strong>.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>100% Gratuito</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Liminar em 48h</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span>Advogado Especializado</span>
              </div>
            </div>
          </div>
        </section>

        {/* Calculator */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <PlanoSaudeCalculator />
            </div>
          </div>
        </section>

        {/* Info Cards */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Negativas mais comuns</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <Card className="p-6">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4">
                  <HeartPulse className="w-6 h-6 text-rose-500" />
                </div>
                <h3 className="font-semibold mb-2">Cirurgia Negada</h3>
                <p className="text-sm text-muted-foreground">
                  Negaram sua cirurgia alegando que não está no rol da ANS? O STJ já decidiu que 
                  o rol é exemplificativo, não taxativo. Você pode ter direito!
                </p>
                <p className="text-xs text-rose-500 mt-2 font-medium">Indenização média: R$ 10.000 a R$ 30.000</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-semibold mb-2">Carência em Emergência</h3>
                <p className="text-sm text-muted-foreground">
                  Plano alegou carência para atendimento de emergência? Por lei, emergência e urgência 
                  devem ser atendidas após apenas 24 horas de contrato.
                </p>
                <p className="text-xs text-amber-500 mt-2 font-medium">Indenização média: R$ 8.000 a R$ 20.000</p>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-semibold mb-2">Medicamento/Home Care</h3>
                <p className="text-sm text-muted-foreground">
                  Negaram medicamento ou home care necessário ao tratamento? 
                  Se prescrito pelo médico, a negativa pode ser considerada abusiva.
                </p>
                <p className="text-xs text-red-500 mt-2 font-medium">Indenização média: R$ 10.000 a R$ 25.000</p>
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
                <h3 className="font-semibold mb-2">O plano pode negar um procedimento?</h3>
                <p className="text-sm text-muted-foreground">
                  Na maioria dos casos, não. Se o procedimento foi solicitado pelo médico e é necessário 
                  para tratar sua doença, a negativa é abusiva e pode gerar indenização por danos morais.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">O que é uma liminar contra plano de saúde?</h3>
                <p className="text-sm text-muted-foreground">
                  É uma decisão judicial de urgência que obriga o plano a autorizar o procedimento 
                  imediatamente, geralmente em 24 a 48 horas. É usada quando não há tempo para esperar.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Qual o prazo do plano para autorizar?</h3>
                <p className="text-sm text-muted-foreground">
                  Segundo a ANS: urgência e emergência devem ser imediatos; internação em até 21 dias úteis; 
                  exames em até 3 dias úteis; consultas em até 7 dias úteis.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Posso processar se já paguei particular?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim! Se você pagou o procedimento do próprio bolso por causa da negativa indevida, 
                  pode pedir o reembolso integral mais danos morais pelo transtorno.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 md:py-16 bg-gradient-to-b from-background to-rose-500/10">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto p-8 text-center bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-rose-500/20">
              <ShieldCheck className="w-12 h-12 text-rose-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Precisa de uma liminar urgente?</h2>
              <p className="text-muted-foreground mb-6">
                Nossos advogados especializados em Direito da Saúde podem conseguir uma liminar 
                em até 48h para obrigar o plano a cobrir seu procedimento.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={scrollToChat} size="lg" className="gap-2 bg-rose-500 hover:bg-rose-600">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Advogado Urgente
                </Button>
                <Link to="/plano-saude-negou">
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

export default CalculadoraPlanoSaude;

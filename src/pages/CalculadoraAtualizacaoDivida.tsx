import { Helmet } from "react-helmet-async";
import { MessageCircle, TrendingUp, Calculator, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import DebtUpdateCalculator from "@/components/calculators/DebtUpdateCalculator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getWebApplicationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/data/calculator-schemas";

const CalculadoraAtualizacaoDivida = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const webAppSchema = getWebApplicationSchema("atualizacao-divida");
  const faqSchema = getFAQPageSchema("atualizacao-divida");
  const breadcrumbSchema = getBreadcrumbSchema("atualizacao-divida");

  return (
    <>
      <Helmet>
        <title>Calculadora de Atualização de Dívida | Correção Monetária</title>
        <meta 
          name="description" 
          content="Calculadora gratuita para atualizar dívidas. Correção monetária por INPC, IPCA, IGP-M ou SELIC + juros de mora. Calcule o valor atualizado." 
        />
        <meta name="keywords" content="calculadora atualização dívida, correção monetária, INPC, IPCA, IGP-M, SELIC, juros mora" />
        <link rel="canonical" href="/calculadora-atualizacao-divida" />
        {webAppSchema && (
          <script type="application/ld+json">
            {JSON.stringify(webAppSchema)}
          </script>
        )}
        {faqSchema && (
          <script type="application/ld+json">
            {JSON.stringify(faqSchema)}
          </script>
        )}
        {breadcrumbSchema && (
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbSchema)}
          </script>
        )}
      </Helmet>

      <Navbar onCtaClick={scrollToChat} />

      <main className="min-h-screen bg-background pt-20">
        <section className="py-12 md:py-20 bg-gradient-to-b from-red-500/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-600 dark:text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <TrendingUp className="w-4 h-4" />
                Cobrança
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Calculadora de <span className="text-red-500">Atualização de Dívida</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Atualize o valor de dívidas em atraso com correção monetária e juros de mora 
                conforme a legislação.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              {[
                { icon: CheckCircle, text: "Múltiplos índices" },
                { icon: TrendingUp, text: "Juros + Multa" },
                { icon: Calculator, text: "100% gratuito" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-red-500" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <DebtUpdateCalculator />
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-8 text-center bg-gradient-to-br from-red-500/10 to-orange-500/5 border-red-500/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Precisa cobrar uma dívida?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossos advogados podem ajudar na cobrança judicial ou extrajudicial.
              </p>
              <Button onClick={scrollToChat} size="lg" className="gap-2 bg-red-600 hover:bg-red-700">
                <MessageCircle className="w-5 h-5" />
                Falar com Advogado
              </Button>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default CalculadoraAtualizacaoDivida;

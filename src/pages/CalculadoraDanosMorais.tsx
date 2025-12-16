import { Helmet } from "react-helmet-async";
import { MessageCircle, Scale, Calculator, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import MoralDamagesCalculator from "@/components/calculators/MoralDamagesCalculator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getWebApplicationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/data/calculator-schemas";

const CalculadoraDanosMorais = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const webAppSchema = getWebApplicationSchema("danos-morais");
  const faqSchema = getFAQPageSchema("danos-morais");
  const breadcrumbSchema = getBreadcrumbSchema("danos-morais");

  return (
    <>
      <Helmet>
        <title>Calculadora de Danos Morais | Estime sua Indenização</title>
        <meta 
          name="description" 
          content="Calculadora gratuita de danos morais. Estime o valor da indenização baseado em jurisprudência. Negativação indevida, ofensa à honra, discriminação e mais." 
        />
        <meta name="keywords" content="calculadora danos morais, indenização, negativação indevida, Serasa, SPC, ofensa honra, discriminação" />
        <link rel="canonical" href="/calculadora-danos-morais" />
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
        <section className="py-12 md:py-20 bg-gradient-to-b from-purple-500/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-purple-500/10 text-purple-600 dark:text-purple-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Scale className="w-4 h-4" />
                Direito Civil
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Calculadora de <span className="text-purple-500">Danos Morais</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Estime o valor da sua indenização por danos morais com base em 
                decisões judiciais recentes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              {[
                { icon: CheckCircle, text: "Baseado em jurisprudência" },
                { icon: Scale, text: "Valores atualizados" },
                { icon: Calculator, text: "100% gratuito" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-purple-500" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <MoralDamagesCalculator />
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-8 text-center bg-gradient-to-br from-purple-500/10 to-pink-500/5 border-purple-500/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Sofreu um dano e quer buscar indenização?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossos advogados podem avaliar seu caso gratuitamente e indicar o melhor caminho.
              </p>
              <Button onClick={scrollToChat} size="lg" className="gap-2 bg-purple-600 hover:bg-purple-700">
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

export default CalculadoraDanosMorais;

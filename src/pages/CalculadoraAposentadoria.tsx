import { Helmet } from "react-helmet-async";
import { MessageCircle, Clock, Calculator, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import RetirementCalculator from "@/components/calculators/RetirementCalculator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { getWebApplicationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/data/calculator-schemas";
import RelatedContent from "@/components/RelatedContent";

const CalculadoraAposentadoria = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const webAppSchema = getWebApplicationSchema("aposentadoria");
  const faqSchema = getFAQPageSchema("aposentadoria");
  const breadcrumbSchema = getBreadcrumbSchema("aposentadoria");

  return (
    <>
      <Helmet>
        <title>Calculadora de Aposentadoria INSS | Verifique Sua Elegibilidade</title>
        <meta 
          name="description" 
          content="Calculadora gratuita de aposentadoria INSS. Verifique se você atende aos requisitos e estime o valor do seu benefício. Regras atualizadas pós-reforma." 
        />
        <meta name="keywords" content="calculadora aposentadoria, INSS, reforma previdência, tempo contribuição, idade mínima, benefício INSS" />
        <link rel="canonical" href="/calculadora-aposentadoria" />
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
        <section className="py-12 md:py-20 bg-gradient-to-b from-emerald-500/10 to-background">
          <div className="container mx-auto px-4">
            <BreadcrumbNav 
              items={[
                { label: "Início", href: "/" },
                { label: "Calculadoras", href: "/calculadoras" },
                { label: "Aposentadoria" }
              ]}
              className="mb-8"
            />
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Calculator className="w-4 h-4" />
                Previdenciário
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Calculadora de <span className="text-emerald-500">Aposentadoria</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Verifique se você já pode se aposentar e estime o valor do seu benefício 
                com base nas regras atuais do INSS.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              {[
                { icon: CheckCircle, text: "Regras pós-reforma 2019" },
                { icon: Clock, text: "Resultado instantâneo" },
                { icon: Calculator, text: "100% gratuito" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-emerald-500" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <RetirementCalculator />
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-8 text-center bg-gradient-to-br from-emerald-500/10 to-teal-500/5 border-emerald-500/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Dúvidas sobre sua aposentadoria?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossos advogados previdenciários podem analisar seu caso e encontrar a melhor estratégia.
              </p>
              <Button onClick={scrollToChat} size="lg" className="gap-2 bg-emerald-600 hover:bg-emerald-700">
                <MessageCircle className="w-5 h-5" />
                Falar com Advogado Previdenciário
              </Button>
            </Card>
          </div>
        </section>

        {/* Related Content */}
        <RelatedContent currentType="calculator" nicheId="previdenciario" />
      </main>
    </>
  );
};

export default CalculadoraAposentadoria;

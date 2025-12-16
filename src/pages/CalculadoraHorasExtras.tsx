import { Helmet } from "react-helmet-async";
import { MessageCircle, Clock, Calculator, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import OvertimeCalculator from "@/components/calculators/OvertimeCalculator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getWebApplicationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/data/calculator-schemas";

const CalculadoraHorasExtras = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const webAppSchema = getWebApplicationSchema("horas-extras");
  const faqSchema = getFAQPageSchema("horas-extras");
  const breadcrumbSchema = getBreadcrumbSchema("horas-extras");

  return (
    <>
      <Helmet>
        <title>Calculadora de Horas Extras | Calcule seus Direitos Trabalhistas</title>
        <meta 
          name="description" 
          content="Calculadora gratuita de horas extras. Calcule o valor com adicional de 50%, 100% em feriados, reflexos em férias, 13º e DSR. Banco de horas irregular." 
        />
        <meta name="keywords" content="calculadora horas extras, direitos trabalhistas, adicional noturno, banco de horas, reflexos CLT" />
        <link rel="canonical" href="/calculadora-horas-extras" />
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
        <section className="py-12 md:py-20 bg-gradient-to-b from-amber-500/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Clock className="w-4 h-4" />
                Direito Trabalhista
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Calculadora de <span className="text-amber-500">Horas Extras</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Calcule quanto você tem direito a receber por horas extras não pagas, 
                incluindo todos os reflexos.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              {[
                { icon: CheckCircle, text: "50% + 100% feriados" },
                { icon: Clock, text: "Reflexos incluídos" },
                { icon: Calculator, text: "100% gratuito" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-amber-500" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <OvertimeCalculator />
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-8 text-center bg-gradient-to-br from-amber-500/10 to-orange-500/5 border-amber-500/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Trabalhou horas extras sem receber?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossos advogados trabalhistas podem analisar seu caso e buscar seus direitos.
              </p>
              <Button onClick={scrollToChat} size="lg" className="gap-2 bg-amber-600 hover:bg-amber-700">
                <MessageCircle className="w-5 h-5" />
                Falar com Advogado Trabalhista
              </Button>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default CalculadoraHorasExtras;

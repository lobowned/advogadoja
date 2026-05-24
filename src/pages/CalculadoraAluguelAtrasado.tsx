import { Helmet } from "react-helmet-async";
import { MessageCircle, Building2, Calculator, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import RentArrearsCalculator from "@/components/calculators/RentArrearsCalculator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { getWebApplicationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/data/calculator-schemas";
import RelatedContent from "@/components/RelatedContent";

const CalculadoraAluguelAtrasado = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const webAppSchema = getWebApplicationSchema("aluguel-atrasado");
  const faqSchema = getFAQPageSchema("aluguel-atrasado");
  const breadcrumbSchema = getBreadcrumbSchema("aluguel-atrasado");

  return (
    <>
      <Helmet>
        <title>Calculadora de Aluguel Atrasado | Calcule o Débito Total</title>
        <meta 
          name="description" 
          content="Calculadora gratuita de aluguel atrasado. Calcule multa, juros, correção e encargos. Ideal para locadores que precisam cobrar inquilinos inadimplentes." 
        />
        <meta name="keywords" content="calculadora aluguel atrasado, inquilino devedor, despejo, multa aluguel, cobrança aluguel" />
        <link rel="canonical" href="/calculadora-aluguel-atrasado" />
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
        <section className="py-12 md:py-20 bg-gradient-to-b from-yellow-500/10 to-background">
          <div className="container mx-auto px-4">
            <BreadcrumbNav 
              items={[
                { label: "Início", href: "/" },
                { label: "Calculadoras", href: "/calculadoras" },
                { label: "Aluguel Atrasado" }
              ]}
              className="mb-8"
            />
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Direito Imobiliário
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Calculadora de <span className="text-yellow-500">Aluguel Atrasado</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Calcule o valor total devido pelo inquilino, incluindo multa, juros e 
                encargos em atraso.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              {[
                { icon: CheckCircle, text: "Multa + Juros" },
                { icon: Building2, text: "IPTU e Condomínio" },
                { icon: Calculator, text: "100% gratuito" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-yellow-500" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <RentArrearsCalculator />
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-8 text-center bg-gradient-to-br from-yellow-500/10 to-amber-500/5 border-yellow-500/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Inquilino não paga o aluguel?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossos advogados podem ajudar com notificação extrajudicial ou ação de despejo.
              </p>
              <Button onClick={scrollToChat} size="lg" className="gap-2 bg-yellow-600 hover:bg-yellow-700">
                <MessageCircle className="w-5 h-5" />
                Falar com Advogado Imobiliário
              </Button>
            </Card>
          </div>
        </section>

        {/* Related Content */}
        <RelatedContent currentType="calculator" nicheId="civil" />
      </main>
    </>
  );
};

export default CalculadoraAluguelAtrasado;

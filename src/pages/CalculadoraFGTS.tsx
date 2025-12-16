import { Helmet } from "react-helmet-async";
import { Wallet } from "lucide-react";
import Navbar from "@/components/Navbar";
import FGTSCalculator from "@/components/calculators/FGTSCalculator";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { getWebApplicationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/data/calculator-schemas";

const CalculadoraFGTS = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const webAppSchema = getWebApplicationSchema("fgts");
  const faqSchema = getFAQPageSchema("fgts");
  const breadcrumbSchema = getBreadcrumbSchema("fgts");

  return (
    <>
      <Helmet>
        <title>Calculadora de FGTS 2024 | Simule Saldo e Multa Grátis</title>
        <meta 
          name="description" 
          content="Calcule seu saldo de FGTS, multa rescisória e compare saque-rescisão vs saque-aniversário. Simulador atualizado 2024." 
        />
        <meta name="keywords" content="calculadora fgts, calcular saldo fgts, multa 40 fgts, saque aniversário, saque rescisão fgts" />
        <link rel="canonical" href="/calculadora-fgts" />
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
        <section className="py-8 md:py-12 bg-gradient-to-b from-amber-500/10 to-background">
          <div className="container mx-auto px-4">
            <BreadcrumbNav 
              items={[
                { label: "Início", href: "/" },
                { label: "Calculadoras", href: "/calculadoras" },
                { label: "FGTS" }
              ]}
              className="mb-4"
            />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Wallet className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl font-bold">
                  Calculadora de FGTS
                </h1>
                <p className="text-muted-foreground">
                  Simule seu saldo, multa rescisória e opções de saque
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <FGTSCalculator />
          </div>
        </section>
      </main>
    </>
  );
};

export default CalculadoraFGTS;

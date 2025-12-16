import { Helmet } from "react-helmet-async";
import { Car } from "lucide-react";
import Navbar from "@/components/Navbar";
import DPVATCalculator from "@/components/calculators/DPVATCalculator";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { getWebApplicationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/data/calculator-schemas";

const CalculadoraDPVAT = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const webAppSchema = getWebApplicationSchema("dpvat");
  const faqSchema = getFAQPageSchema("dpvat");
  const breadcrumbSchema = getBreadcrumbSchema("dpvat");

  return (
    <>
      <Helmet>
        <title>Calculadora DPVAT/SPVAT 2024 | Calcule Indenização de Acidente</title>
        <meta 
          name="description" 
          content="Calcule a indenização do DPVAT/SPVAT por acidente de trânsito. Valores para morte, invalidez e despesas médicas." 
        />
        <meta name="keywords" content="calculadora dpvat, indenização dpvat, seguro dpvat, spvat, acidente de trânsito indenização" />
        <link rel="canonical" href="/calculadora-dpvat" />
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
        <section className="py-8 md:py-12 bg-gradient-to-b from-purple-500/10 to-background">
          <div className="container mx-auto px-4">
            <BreadcrumbNav 
              items={[
                { label: "Início", href: "/" },
                { label: "Calculadoras", href: "/calculadoras" },
                { label: "DPVAT/SPVAT" }
              ]}
              className="mb-4"
            />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Car className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl font-bold">
                  Calculadora DPVAT / SPVAT
                </h1>
                <p className="text-muted-foreground">
                  Calcule a indenização por acidente de trânsito
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <DPVATCalculator />
          </div>
        </section>
      </main>
    </>
  );
};

export default CalculadoraDPVAT;

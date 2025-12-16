import { Helmet } from "react-helmet-async";
import { Briefcase } from "lucide-react";
import Navbar from "@/components/Navbar";
import UnemploymentInsuranceCalculator from "@/components/calculators/UnemploymentInsuranceCalculator";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { getWebApplicationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/data/calculator-schemas";

const CalculadoraSeguroDesemprego = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const webAppSchema = getWebApplicationSchema("seguro-desemprego");
  const faqSchema = getFAQPageSchema("seguro-desemprego");
  const breadcrumbSchema = getBreadcrumbSchema("seguro-desemprego");

  return (
    <>
      <Helmet>
        <title>Calculadora de Seguro-Desemprego 2024 | Calcule Parcelas Grátis</title>
        <meta name="description" content="Calcule o valor e número de parcelas do seguro-desemprego. Simulador atualizado com as regras 2024. Descubra quanto você vai receber." />
        <meta name="keywords" content="calculadora seguro desemprego, calcular parcelas seguro desemprego, valor seguro desemprego 2024, quantas parcelas seguro desemprego" />
        <link rel="canonical" href="/calculadora-seguro-desemprego" />
        {webAppSchema && <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>}
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
        {breadcrumbSchema && <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>}
      </Helmet>

      <Navbar onCtaClick={scrollToChat} />

      <main className="min-h-screen bg-background pt-20">
        <section className="py-8 md:py-12 bg-gradient-to-b from-amber-500/10 to-background">
          <div className="container mx-auto px-4">
            <BreadcrumbNav 
              items={[
                { label: "Início", href: "/" },
                { label: "Calculadoras", href: "/calculadoras" },
                { label: "Seguro-Desemprego" }
              ]}
              className="mb-4"
            />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <Briefcase className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl font-bold">
                  Calculadora de Seguro-Desemprego
                </h1>
                <p className="text-muted-foreground">
                  Descubra o valor e quantas parcelas você pode receber
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <UnemploymentInsuranceCalculator />
          </div>
        </section>
      </main>
    </>
  );
};

export default CalculadoraSeguroDesemprego;

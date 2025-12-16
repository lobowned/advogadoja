import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import SicknessAidCalculator from "@/components/calculators/SicknessAidCalculator";
import { getWebApplicationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/data/calculator-schemas";

const CalculadoraAuxilioDoenca = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const webAppSchema = getWebApplicationSchema("auxilio-doenca");
  const faqSchema = getFAQPageSchema("auxilio-doenca");
  const breadcrumbSchema = getBreadcrumbSchema("auxilio-doenca");

  return (
    <>
      <Helmet>
        <title>Calculadora de Auxílio-Doença 2024 | Calcule Benefício INSS</title>
        <meta name="description" content="Calcule o valor do auxílio-doença do INSS. Simulador atualizado com regras 2024. Comum e acidentário." />
        <meta name="keywords" content="calculadora auxílio doença, auxílio doença inss, valor auxílio doença, benefício incapacidade inss" />
        <link rel="canonical" href="/calculadora-auxilio-doenca" />
        {webAppSchema && <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>}
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
        {breadcrumbSchema && <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>}
      </Helmet>

      <Navbar onCtaClick={scrollToChat} />

      <main className="min-h-screen bg-background pt-20">
        <section className="py-8 md:py-12 bg-gradient-to-b from-emerald-500/10 to-background">
          <div className="container mx-auto px-4">
            <Link to="/calculadoras">
              <Button variant="ghost" size="sm" className="mb-4 gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar para Calculadoras
              </Button>
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Stethoscope className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl font-bold">
                  Calculadora de Auxílio-Doença
                </h1>
                <p className="text-muted-foreground">
                  Estime o valor do benefício por incapacidade
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <SicknessAidCalculator />
          </div>
        </section>
      </main>
    </>
  );
};

export default CalculadoraAuxilioDoenca;

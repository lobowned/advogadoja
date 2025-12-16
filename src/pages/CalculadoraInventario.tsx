import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ScrollText } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import InventoryCalculator from "@/components/calculators/InventoryCalculator";
import { getWebApplicationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/data/calculator-schemas";

const CalculadoraInventario = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const webAppSchema = getWebApplicationSchema("inventario");
  const faqSchema = getFAQPageSchema("inventario");
  const breadcrumbSchema = getBreadcrumbSchema("inventario");

  return (
    <>
      <Helmet>
        <title>Calculadora de Inventário 2024 | Calcule ITCMD e Custos</title>
        <meta name="description" content="Calcule os custos do inventário: ITCMD, custas cartoriais e honorários. Simulador por estado com alíquotas atualizadas 2024." />
        <meta name="keywords" content="calculadora inventário, calcular itcmd, custos inventário, inventário extrajudicial, inventário judicial" />
        <link rel="canonical" href="/calculadora-inventario" />
        {webAppSchema && <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>}
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
        {breadcrumbSchema && <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>}
      </Helmet>

      <Navbar onCtaClick={scrollToChat} />

      <main className="min-h-screen bg-background pt-20">
        <section className="py-8 md:py-12 bg-gradient-to-b from-blue-500/10 to-background">
          <div className="container mx-auto px-4">
            <Link to="/calculadoras">
              <Button variant="ghost" size="sm" className="mb-4 gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar para Calculadoras
              </Button>
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center">
                <ScrollText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl font-bold">
                  Calculadora de Inventário
                </h1>
                <p className="text-muted-foreground">
                  Estime ITCMD, custas e honorários do inventário
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <InventoryCalculator />
          </div>
        </section>
      </main>
    </>
  );
};

export default CalculadoraInventario;

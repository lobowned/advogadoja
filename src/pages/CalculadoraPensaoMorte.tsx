import { Helmet } from "react-helmet-async";
import { Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import DeathPensionCalculator from "@/components/calculators/DeathPensionCalculator";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { getWebApplicationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/data/calculator-schemas";
import RelatedContent from "@/components/RelatedContent";

const CalculadoraPensaoMorte = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const webAppSchema = getWebApplicationSchema("pensao-morte");
  const faqSchema = getFAQPageSchema("pensao-morte");
  const breadcrumbSchema = getBreadcrumbSchema("pensao-morte");

  return (
    <>
      <Helmet>
        <title>Calculadora de Pensão por Morte 2024 | Calcule Benefício INSS</title>
        <meta name="description" content="Calcule o valor da pensão por morte do INSS. Simulador com regras pós-reforma 2019. Descubra quanto os dependentes podem receber." />
        <meta name="keywords" content="calculadora pensão por morte, pensão por morte inss, valor pensão morte, benefício dependentes inss" />
        <link rel="canonical" href="/calculadora-pensao-morte" />
        {webAppSchema && <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>}
        {faqSchema && <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>}
        {breadcrumbSchema && <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>}
      </Helmet>

      <Navbar onCtaClick={scrollToChat} />

      <main className="min-h-screen bg-background pt-20">
        <section className="py-8 md:py-12 bg-gradient-to-b from-emerald-500/10 to-background">
          <div className="container mx-auto px-4">
            <BreadcrumbNav 
              items={[
                { label: "Início", href: "/" },
                { label: "Calculadoras", href: "/calculadoras" },
                { label: "Pensão por Morte" }
              ]}
              className="mb-4"
            />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl font-bold">
                  Calculadora de Pensão por Morte
                </h1>
                <p className="text-muted-foreground">
                  Estime o valor do benefício para dependentes
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <DeathPensionCalculator />
          </div>
        </section>

        {/* Related Content */}
        <RelatedContent currentType="calculator" nicheId="previdenciario" />
      </main>
    </>
  );
};

export default CalculadoraPensaoMorte;

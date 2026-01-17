import { Helmet } from "react-helmet-async";
import { HandHeart } from "lucide-react";
import Navbar from "@/components/Navbar";
import BPCLOASCalculator from "@/components/calculators/BPCLOASCalculator";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { getWebApplicationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/data/calculator-schemas";
import RelatedContent from "@/components/RelatedContent";

const CalculadoraBPCLOAS = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  const webAppSchema = getWebApplicationSchema("bpc-loas");
  const faqSchema = getFAQPageSchema("bpc-loas");
  const breadcrumbSchema = getBreadcrumbSchema("bpc-loas");

  return (
    <>
      <Helmet>
        <title>Calculadora BPC/LOAS 2024 | Verifique Elegibilidade Grátis</title>
        <meta name="description" content="Verifique se você tem direito ao BPC/LOAS. Calculadora de renda per capita e elegibilidade para idosos e pessoas com deficiência." />
        <meta name="keywords" content="calculadora bpc loas, benefício assistencial, renda per capita bpc, bpc idoso, bpc deficiente" />
        <link rel="canonical" href="/calculadora-bpc-loas" />
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
                { label: "BPC/LOAS" }
              ]}
              className="mb-4"
            />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                <HandHeart className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl font-bold">
                  Calculadora BPC/LOAS
                </h1>
                <p className="text-muted-foreground">
                  Verifique sua elegibilidade ao benefício assistencial
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <BPCLOASCalculator />
          </div>
        </section>

        {/* Related Content */}
        <RelatedContent currentType="calculator" nicheId="previdenciario" />
      </main>
    </>
  );
};

export default CalculadoraBPCLOAS;

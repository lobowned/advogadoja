import { Helmet } from "react-helmet-async";
import { Briefcase, MessageCircle, CheckCircle } from "lucide-react";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import LaborCalculator from "@/components/calculators/LaborCalculator";
import { getWebApplicationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/data/calculator-schemas";
import RelatedContent from "@/components/RelatedContent";

const CalculadoraTrabalhista = () => {
  const scrollToChat = () => {
    window.location.href = "/?specialty=trabalhista#lawyer-chat";
  };

  const webAppSchema = getWebApplicationSchema("trabalhista");
  const faqSchema = getFAQPageSchema("trabalhista");
  const breadcrumbSchema = getBreadcrumbSchema("trabalhista");

  return (
    <>
      <Helmet>
        <title>Calculadora de Rescisão Trabalhista | Calcule suas Verbas Grátis</title>
        <meta 
          name="description" 
          content="Calcule grátis suas verbas rescisórias: aviso prévio, FGTS com multa 40%, 13º salário, férias proporcionais. Descubra quanto você tem a receber na demissão." 
        />
        <meta name="keywords" content="calculadora rescisão trabalhista, calcular verbas rescisórias, FGTS multa 40%, aviso prévio, demissão sem justa causa, 13º salário, férias proporcionais" />
        <link rel="canonical" href="/calculadora-trabalhista" />
        
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
        {/* Hero Section */}
        <section className="py-8 md:py-12 bg-gradient-to-b from-amber-500/10 to-background">
          <div className="container mx-auto px-4">
            <BreadcrumbNav 
              items={[
                { label: "Início", href: "/" },
                { label: "Calculadoras", href: "/calculadoras" },
                { label: "Rescisão Trabalhista" }
              ]}
              className="mb-6"
            />

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-6">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Calculadora de <span className="text-amber-600">Rescisão Trabalhista</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Descubra quanto você tem direito a receber. Cálculo instantâneo e gratuito 
                  de todas as verbas rescisórias.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {["Aviso Prévio", "FGTS + 40%", "13º Salário", "Férias + 1/3", "Multas CLT"].map((item) => (
                    <span 
                      key={item}
                      className="inline-flex items-center gap-1 text-sm bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-3 py-1 rounded-full"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <Card className="p-4 bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800 md:max-w-xs">
                <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-2">
                  Dica Importante
                </h3>
                <p className="text-sm text-amber-700 dark:text-amber-300">
                  Guarde todos os documentos: contracheques, carteira de trabalho, termo de rescisão 
                  e comprovantes de depósito do FGTS.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <LaborCalculator />
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Entenda suas Verbas Rescisórias</h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Aviso Prévio</h3>
                  <p className="text-sm text-muted-foreground">
                    Mínimo de 30 dias, acrescido de 3 dias por ano trabalhado (máximo 90 dias). 
                    Pode ser trabalhado ou indenizado.
                  </p>
                </Card>
                
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">FGTS + Multa 40%</h3>
                  <p className="text-sm text-muted-foreground">
                    8% do salário depositado mensalmente. Na demissão sem justa causa, 
                    você recebe o saldo + 40% de multa.
                  </p>
                </Card>
                
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">13º Proporcional</h3>
                  <p className="text-sm text-muted-foreground">
                    Calculado proporcionalmente aos meses trabalhados no ano da rescisão. 
                    Cada mês vale 1/12 do salário.
                  </p>
                </Card>
                
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Férias + 1/3</h3>
                  <p className="text-sm text-muted-foreground">
                    Férias proporcionais aos meses trabalhados desde as últimas férias, 
                    acrescidas de 1/3 constitucional.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-8 text-center bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-amber-200 dark:border-amber-800">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Precisa de ajuda com sua rescisão?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossos advogados trabalhistas estão prontos para analisar seu caso 
                e garantir que você receba tudo que tem direito.
              </p>
              <Button onClick={scrollToChat} size="lg" className="gap-2 bg-amber-600 hover:bg-amber-700">
                <MessageCircle className="w-5 h-5" />
                Falar com Advogado Trabalhista
              </Button>
            </Card>
          </div>
        </section>

        {/* Related Content */}
        <RelatedContent currentType="calculator" nicheId="trabalhista" />
      </main>
    </>
  );
};

export default CalculadoraTrabalhista;

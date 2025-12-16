import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Users, ArrowLeft, MessageCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import AlimonyCalculator from "@/components/calculators/AlimonyCalculator";
import { getWebApplicationSchema, getFAQPageSchema, getBreadcrumbSchema } from "@/data/calculator-schemas";

const CalculadoraPensao = () => {
  const scrollToChat = () => {
    window.location.href = "/?specialty=familia#lawyer-chat";
  };

  const webAppSchema = getWebApplicationSchema("pensao");
  const faqSchema = getFAQPageSchema("pensao");
  const breadcrumbSchema = getBreadcrumbSchema("pensao");

  return (
    <>
      <Helmet>
        <title>Calculadora de Pensão Alimentícia | Quanto Devo Receber?</title>
        <meta 
          name="description" 
          content="Calcule grátis o valor estimado de pensão alimentícia. Saiba quanto você ou seus filhos têm direito a receber baseado na renda do alimentante." 
        />
        <meta name="keywords" content="calculadora pensão alimentícia, calcular pensão filhos, valor pensão, direito família, alimentos" />
        <link rel="canonical" href="/calculadora-pensao" />
        
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
        <section className="py-8 md:py-12 bg-gradient-to-b from-blue-500/10 to-background">
          <div className="container mx-auto px-4">
            <Link 
              to="/calculadoras" 
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Calculadoras
            </Link>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                  Calculadora de <span className="text-blue-600">Pensão Alimentícia</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Descubra o valor estimado da pensão alimentícia baseado na renda 
                  e nas necessidades dos dependentes.
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {["% sobre Renda", "Múltiplos Filhos", "Custos Especiais", "13ª Pensão", "Valor Anual"].map((item) => (
                    <span 
                      key={item}
                      className="inline-flex items-center gap-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full"
                    >
                      <CheckCircle className="w-3 h-3" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <Card className="p-4 bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 md:max-w-xs">
                <h3 className="font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  Você Sabia?
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  A pensão alimentícia é um direito constitucional. Mesmo desempregado, 
                  o alimentante deve contribuir com base no salário mínimo.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Calculator Section */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <AlimonyCalculator />
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Seus Direitos sobre Pensão Alimentícia</h2>
              
              <div className="grid gap-4 md:grid-cols-2">
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Quem tem Direito?</h3>
                  <p className="text-sm text-muted-foreground">
                    Filhos menores de 18 anos têm direito automático. Maiores podem receber 
                    se estiverem estudando ou se tiverem necessidade comprovada.
                  </p>
                </Card>
                
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Como é Calculado?</h3>
                  <p className="text-sm text-muted-foreground">
                    O juiz considera as necessidades do alimentando e as possibilidades 
                    do alimentante. Em geral, varia de 30% a 50% da renda líquida.
                  </p>
                </Card>
                
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">Pode ser Alterado?</h3>
                  <p className="text-sm text-muted-foreground">
                    Sim! Se houver mudança na situação financeira de qualquer das partes, 
                    pode-se entrar com ação de revisão de alimentos.
                  </p>
                </Card>
                
                <Card className="p-5">
                  <h3 className="font-semibold mb-2">E se Não Pagar?</h3>
                  <p className="text-sm text-muted-foreground">
                    O devedor pode ter bens penhorados, nome negativado e até ser preso 
                    por até 3 meses por dívida alimentar.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-8 text-center bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-blue-200 dark:border-blue-800">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Precisa de ajuda com pensão alimentícia?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossos advogados de família estão prontos para analisar seu caso 
                e garantir o valor justo para você ou seus filhos.
              </p>
              <Button onClick={scrollToChat} size="lg" className="gap-2 bg-blue-600 hover:bg-blue-700">
                <MessageCircle className="w-5 h-5" />
                Falar com Advogado de Família
              </Button>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default CalculadoraPensao;

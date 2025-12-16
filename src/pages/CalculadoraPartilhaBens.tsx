import { Helmet } from "react-helmet-async";
import { MessageCircle, Home, Calculator, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import AssetDivisionCalculator from "@/components/calculators/AssetDivisionCalculator";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CalculadoraPartilhaBens = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  return (
    <>
      <Helmet>
        <title>Calculadora de Partilha de Bens | Divórcio e Separação</title>
        <meta 
          name="description" 
          content="Calculadora gratuita de partilha de bens para divórcio. Estime a divisão conforme seu regime de casamento: comunhão parcial, universal ou separação total." 
        />
        <meta name="keywords" content="calculadora partilha bens, divórcio, separação, comunhão parcial, comunhão universal, regime de bens" />
        <link rel="canonical" href="/calculadora-partilha-bens" />
      </Helmet>

      <Navbar onCtaClick={scrollToChat} />

      <main className="min-h-screen bg-background pt-20">
        <section className="py-12 md:py-20 bg-gradient-to-b from-blue-500/10 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Home className="w-4 h-4" />
                Direito de Família
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Calculadora de <span className="text-blue-500">Partilha de Bens</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Estime como seus bens serão divididos no divórcio, conforme o regime 
                de casamento escolhido.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto mb-12">
              {[
                { icon: CheckCircle, text: "Todos os regimes" },
                { icon: Home, text: "Bens e dívidas" },
                { icon: Calculator, text: "100% gratuito" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-blue-500" />
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <AssetDivisionCalculator />
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <Card className="max-w-3xl mx-auto p-8 text-center bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border-blue-500/20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Passando por um divórcio?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nossos advogados de família podem orientar sobre a melhor forma de conduzir a partilha.
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

export default CalculadoraPartilhaBens;

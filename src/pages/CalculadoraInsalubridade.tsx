import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import HazardPayCalculator from "@/components/calculators/HazardPayCalculator";

const CalculadoraInsalubridade = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  return (
    <>
      <Helmet>
        <title>Calculadora de Insalubridade e Periculosidade 2024 | Calcule Adicional</title>
        <meta 
          name="description" 
          content="Calcule o adicional de insalubridade ou periculosidade. Simulador com todos os graus e reflexos trabalhistas." 
        />
        <meta name="keywords" content="calculadora insalubridade, calculadora periculosidade, adicional insalubridade, adicional periculosidade, graus insalubridade" />
        <link rel="canonical" href="/calculadora-insalubridade" />
      </Helmet>

      <Navbar onCtaClick={scrollToChat} />

      <main className="min-h-screen bg-background pt-20">
        <section className="py-8 md:py-12 bg-gradient-to-b from-amber-500/10 to-background">
          <div className="container mx-auto px-4">
            <Link to="/calculadoras">
              <Button variant="ghost" size="sm" className="mb-4 gap-2">
                <ArrowLeft className="w-4 h-4" />
                Voltar para Calculadoras
              </Button>
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
                <ShieldAlert className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl font-bold">
                  Calculadora de Insalubridade/Periculosidade
                </h1>
                <p className="text-muted-foreground">
                  Calcule o adicional para trabalho em condições de risco
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4 max-w-3xl">
            <HazardPayCalculator />
          </div>
        </section>
      </main>
    </>
  );
};

export default CalculadoraInsalubridade;

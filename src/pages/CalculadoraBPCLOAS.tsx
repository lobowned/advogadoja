import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowLeft, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import BPCLOASCalculator from "@/components/calculators/BPCLOASCalculator";

const CalculadoraBPCLOAS = () => {
  const scrollToChat = () => {
    window.location.href = "/#lawyer-chat";
  };

  return (
    <>
      <Helmet>
        <title>Calculadora BPC/LOAS 2024 | Verifique Elegibilidade Grátis</title>
        <meta 
          name="description" 
          content="Verifique se você tem direito ao BPC/LOAS. Calculadora de renda per capita e elegibilidade para idosos e pessoas com deficiência." 
        />
        <meta name="keywords" content="calculadora bpc loas, benefício assistencial, renda per capita bpc, bpc idoso, bpc deficiente" />
        <link rel="canonical" href="/calculadora-bpc-loas" />
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
      </main>
    </>
  );
};

export default CalculadoraBPCLOAS;

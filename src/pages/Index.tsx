import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Scale } from "lucide-react";
import VideoSection from "@/components/VideoSection";
import ProcessSteps from "@/components/ProcessSteps";
import ForWhoSection from "@/components/ForWhoSection";
import OfferBox from "@/components/OfferBox";
import GuaranteeCard from "@/components/GuaranteeCard";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import AuthorBio from "@/components/AuthorBio";
import ObjecionsFAQ from "@/components/ObjecionsFAQ";
import StatsSection from "@/components/StatsSection";
import PainsVsDesires from "@/components/PainsVsDesires";
import ComparisonTable from "@/components/ComparisonTable";
import SupportChannels from "@/components/SupportChannels";
import CTASection from "@/components/CTASection";

const Index = () => {
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate("/selecionar-nicho");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Scale className="h-4 w-4" />
              <span>Especialistas em Todas as Áreas do Direito</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              Proteja seus Direitos com a Atuação de um Advogado Especializado
            </h1>
            
            <p className="mb-10 text-lg text-white/90 md:text-xl lg:text-2xl">
              Com estratégia, segurança e total dedicação ao seu caso. 
              Atendimento sigiloso e condução técnica voltada para resultados reais.
            </p>
            
            <Button 
              size="lg"
              variant="secondary"
              className="group h-14 px-8 text-lg font-semibold shadow-button transition-all hover:scale-105 hover:shadow-lg"
              onClick={handleCTA}
            >
              📌 Quero orientação jurídica imediata
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Process Steps */}
      <ProcessSteps />

      {/* For Who Section */}
      <ForWhoSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Offer Box */}
      <OfferBox />

      {/* Guarantee Card */}
      <GuaranteeCard />

      {/* Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* Author Bio */}
      <AuthorBio />

      {/* Pains vs Desires */}
      <PainsVsDesires />

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Objections and FAQ */}
      <ObjecionsFAQ />

      {/* Support Channels */}
      <SupportChannels />

      {/* Final CTA */}
      <CTASection onAction={handleCTA} />

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-foreground mb-4">Escritório de Advocacia</h3>
              <p className="text-sm text-muted-foreground">
                Atuação em todas as áreas do Direito com ética, dedicação e resultados comprovados.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Contato</h3>
              <p className="text-sm text-muted-foreground">contato@escritorio.com.br</p>
              <p className="text-sm text-muted-foreground">(XX) XXXXX-XXXX</p>
              <p className="text-sm text-muted-foreground mt-2">OAB/XX 000.000</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-4">Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Sobre o Escritório</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Áreas de Atuação</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 Escritório de Advocacia - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

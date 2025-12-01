import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Scale } from "lucide-react";
import NicheSelector from "@/components/NicheSelector";

const Index = () => {
  const navigate = useNavigate();

  const handleCTA = () => {
    const nicheSection = document.getElementById("niche-selector");
    if (nicheSection) {
      nicheSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden min-h-[70vh] sm:min-h-[80vh] flex items-center">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay para legibilidade */}
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Grid Pattern sutil */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
        
        <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-32 z-10">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4 sm:mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white backdrop-blur-sm">
              <Scale className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>⚖️ Especialistas em Todo Brasil • Atendimento Imediato</span>
            </div>
            
            <h1 className="mb-4 sm:mb-6 text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
              Seu Problema Jurídico Resolvido por Especialistas — Atendimento Imediato
            </h1>
            
            <p className="mb-8 sm:mb-10 text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed">
              Conte-nos seu problema e um advogado especialista entra em contato em minutos — 100% gratuito.
            </p>
            
            <Button 
              size="lg"
              variant="secondary"
              className="group h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 text-base sm:text-lg font-semibold shadow-button transition-all hover:scale-105 hover:shadow-lg"
              onClick={handleCTA}
            >
              ⚡ Falar com Especialista Agora
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Niche Selector */}
      <div id="niche-selector">
        <NicheSelector />
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 text-center md:text-left">
            <div>
              <h3 className="font-bold text-foreground mb-3 sm:mb-4">Escritório de Advocacia</h3>
              <p className="text-sm text-muted-foreground">
                Atuação em todas as áreas do Direito com ética, dedicação e resultados comprovados.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3 sm:mb-4">Contato</h3>
              <p className="text-sm text-muted-foreground">contato@escritorio.com.br</p>
              <p className="text-sm text-muted-foreground">(XX) XXXXX-XXXX</p>
              <p className="text-sm text-muted-foreground mt-2">OAB/XX 000.000</p>
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-3 sm:mb-4">Links</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Sobre o Escritório</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Áreas de Atuação</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
            <p>© 2025 Escritório de Advocacia - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

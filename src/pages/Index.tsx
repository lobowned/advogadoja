import { Button } from "@/components/ui/button";
import LawyerChatSection from "@/components/LawyerChatSection";

const Index = () => {
  const handleCTA = () => {
    const chatSection = document.getElementById("lawyer-chat");
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: "smooth", block: "start" });
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
        
        <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-32 z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-8 sm:mb-10 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight animated-gradient-text">
              Um advogado especialista entra em contato em minutos — 100% gratuito.
            </h1>
            
            <Button 
              size="lg"
              variant="secondary"
              className="h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 text-base sm:text-lg font-semibold shadow-button transition-all hover:scale-105 hover:shadow-lg"
              onClick={handleCTA}
            >
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>

      {/* Lawyer Chat */}
      <div id="lawyer-chat">
        <LawyerChatSection />
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-6">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm text-muted-foreground">
            Escritório de Advocacia • OAB/XX 000.000 • © 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

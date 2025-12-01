import { Button } from "@/components/ui/button";
import LawyerChatSection from "@/components/LawyerChatSection";
import LawyersShowcase from "@/components/LawyersShowcase";

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
        {/* Video Background with Fallback */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>
        
        {/* Fallback Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')",
            zIndex: -1
          }}
        />
        
        {/* Dark Overlay para legibilidade */}
        <div className="absolute inset-0 bg-black/60" />
        
        <div className="container relative mx-auto px-4 py-16 sm:py-20 md:py-32 z-10">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-4 sm:mb-6 text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold leading-tight animated-gradient-text animate-fade-up">
              Fale Agora com um Advogado — Atendimento Imediato e Gratuito
            </h1>
            
            <p className="mb-8 sm:mb-10 text-sm sm:text-base md:text-lg text-white/90 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              Tire suas dúvidas jurídicas com especialistas. Sem compromisso, 100% confidencial.
            </p>
            
            <Button 
              size="lg"
              variant="secondary"
              className="h-12 sm:h-14 w-full sm:w-auto px-6 sm:px-8 text-base sm:text-lg font-semibold shadow-button transition-all hover:scale-105 hover:shadow-lg animate-pulse-subtle animate-fade-up"
              onClick={handleCTA}
              style={{ animationDelay: "0.4s" }}
            >
              Iniciar Conversa Grátis
            </Button>
          </div>
        </div>
      </section>

      {/* Lawyers Showcase Section */}
      <LawyersShowcase />

      {/* Lawyer Chat */}
      <div id="lawyer-chat">
        <LawyerChatSection />
      </div>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8 sm:py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center md:text-left text-sm text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground mb-2">Silva & Associados Advocacia</p>
              <p>OAB/SP 123.456 • © 2025</p>
              <p className="mt-2">Atendimento: seg-sex 8h às 20h</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-4">
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-whatsapp-send-btn transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  WhatsApp
                </a>
                <a 
                  href="mailto:contato@silvaadvocacia.com.br"
                  className="hover:text-primary transition-colors flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  Email
                </a>
              </div>
              <div className="flex gap-4 text-xs">
                <a href="#" className="hover:text-foreground transition-colors">Política de Privacidade</a>
                <a href="#" className="hover:text-foreground transition-colors">Termos de Uso</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

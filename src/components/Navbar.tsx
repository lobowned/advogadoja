import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calculator } from "lucide-react";

const WHATSAPP_NUMBER = '5571997036269';
const DEFAULT_MESSAGE = 'Olá! Preciso de orientação jurídica.';

interface NavbarProps {
  onCtaClick?: () => void;
}

const Navbar = ({ onCtaClick }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCTA = () => {
    if (onCtaClick) {
      onCtaClick();
    } else {
      // Default: open WhatsApp
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
      window.open(url, '_blank');
    }
  };

  // Barra sempre escura: legível sobre o hero de vídeo e sobre páginas claras
  const linkClass = 'font-medium transition-colors text-[#f5efe0] hover:text-[#f3d98b] py-2';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
        isScrolled
          ? 'bg-black/90 border-b border-[#d4af37]/30'
          : 'bg-black/80'
      }`}
    >
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between h-14 md:h-20">

          {/* Links do site inteiro: os hubs que importam para quem lê e para o Google.
              Antes: "#"/"#advogados" (quebrados fora da home), Casos (resultados com valor,
              vedado pela OAB), Notícias (conteúdo de terceiros) e Mapa. */}
          <div className="flex items-center gap-3 sm:gap-5 md:gap-8">
            <Link to="/" className={`${linkClass} text-xs md:text-sm`}>
              Início
            </Link>
            <Link to="/guias" className={`${linkClass} text-xs md:text-sm`}>
              Guias
            </Link>
            <Link to="/artigos" className={`${linkClass} text-xs md:text-sm`}>
              Artigos
            </Link>
            <Link to="/calculadoras" className={`${linkClass} text-xs md:text-sm`}>
              <Calculator className="w-3.5 h-3.5 sm:w-4 sm:h-4 inline-block align-middle mr-1" />
              <span className="hidden sm:inline align-middle">Calculadoras</span>
            </Link>
          </div>

          {/* CTA Button with Icon - WhatsApp */}
          <Button 
            onClick={handleCTA}
            size="sm"
            className="h-9 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm md:px-6 font-semibold transition-all gap-1.5 bg-transparent border border-[#d4af37]/70 text-[#f3d98b] hover:bg-[#d4af37]/10 rounded-none"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">WhatsApp</span>
            <span className="xs:hidden">Falar</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

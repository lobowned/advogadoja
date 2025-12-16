import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Calculator } from "lucide-react";

interface NavbarProps {
  onCtaClick: () => void;
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

  const linkClass = `font-medium transition-colors hover:text-primary py-2 ${
    isScrolled ? 'text-foreground' : 'text-white'
  }`;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/80 backdrop-blur-xl shadow-elegant border-b border-border/50' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between h-14 md:h-20">

          {/* Navigation Links - Prioritized */}
          <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-8">
            <a href="#" className={`${linkClass} text-xs md:text-sm`}>
              Início
            </a>
            <a href="#advogados" className={`${linkClass} text-xs md:text-sm`}>
              Advogados
            </a>
            <a href="/artigos" className={`${linkClass} text-xs md:text-sm hidden xs:inline`}>
              Artigos
            </a>
            <a href="#lawyer-chat" className={`${linkClass} text-xs md:text-sm hidden sm:inline`}>
              Como Funciona
            </a>
            <a href="/noticias" className={`${linkClass} text-xs md:text-sm hidden sm:inline`}>
              Notícias
            </a>
            <a href="/calculadoras" className={`${linkClass} text-xs md:text-sm hidden md:inline-flex items-center gap-1`}>
              <Calculator className="w-3.5 h-3.5" />
              Calculadoras
            </a>
          </div>

          {/* CTA Button with Icon */}
          <Button 
            onClick={onCtaClick}
            size="sm"
            className={`btn-shimmer h-9 px-3 text-xs sm:h-10 sm:px-4 sm:text-sm md:px-6 font-semibold transition-all gap-1.5 ${
              isScrolled 
                ? 'btn-startup text-white' 
                : 'bg-white/90 text-primary hover:bg-white shadow-lg'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">Falar Agora</span>
            <span className="xs:hidden">Falar</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

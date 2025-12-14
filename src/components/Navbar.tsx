import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

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

  const linkClass = `font-medium transition-colors hover:text-primary ${
    isScrolled ? 'text-foreground' : 'text-white'
  }`;

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between h-12 md:h-20">

          {/* Navigation Links - Responsive */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-8">
            <a href="#" className={`${linkClass} text-[11px] sm:text-xs md:text-sm`}>
              Início
            </a>
            <a href="#lawyer-chat" className={`${linkClass} text-[11px] sm:text-xs md:text-sm hidden xs:inline`}>
              <span className="hidden sm:inline">Como Funciona</span>
              <span className="sm:hidden">Funciona</span>
            </a>
            <a href="#advogados" className={`${linkClass} text-[11px] sm:text-xs md:text-sm`}>
              <span className="hidden sm:inline">Advogados</span>
              <span className="sm:hidden">Adv.</span>
            </a>
            <a href="/artigos" className={`${linkClass} text-[11px] sm:text-xs md:text-sm`}>
              Artigos
            </a>
            <a href="/noticias" className={`${linkClass} text-[11px] sm:text-xs md:text-sm`}>
              Notícias
            </a>
          </div>

          {/* CTA Button */}
          <Button 
            onClick={onCtaClick}
            variant={isScrolled ? "default" : "secondary"}
            size="sm"
            className="h-7 px-2 text-[10px] sm:h-8 sm:px-3 sm:text-xs md:h-10 md:px-6 md:text-sm font-semibold shadow-button hover:scale-105 transition-transform"
          >
            <span className="hidden sm:inline">Falar Agora</span>
            <span className="sm:hidden">Falar</span>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

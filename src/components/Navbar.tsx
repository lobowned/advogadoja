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

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-md border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-2 md:px-4">
        <div className="flex items-center justify-between h-14 md:h-20">

          {/* Navigation Links - Always visible */}
          <div className="flex items-center gap-2 md:gap-8">
            <a 
              href="#" 
              className={`text-xs md:text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Início
            </a>
            <a 
              href="#lawyer-chat" 
              className={`text-xs md:text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Como Funciona
            </a>
            <a 
              href="#advogados" 
              className={`text-xs md:text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Advogados
            </a>
            <a 
              href="/artigos" 
              className={`text-xs md:text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Artigos
            </a>
            <a 
              href="/noticias" 
              className={`text-xs md:text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Notícias
            </a>
          </div>

          {/* CTA Button - Always visible */}
          <Button 
            onClick={onCtaClick}
            variant={isScrolled ? "default" : "secondary"}
            className="h-8 px-3 text-xs md:h-10 md:px-6 md:text-sm font-semibold shadow-button hover:scale-105 transition-transform whitespace-nowrap"
          >
            Falar Agora
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

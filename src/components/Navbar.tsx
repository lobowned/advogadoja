import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Scale, Menu } from "lucide-react";

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
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Scale className={`w-6 h-6 md:w-7 md:h-7 transition-colors ${
              isScrolled ? 'text-primary' : 'text-white'
            }`} />
            <span className={`text-lg md:text-xl font-bold transition-colors ${
              isScrolled ? 'text-foreground' : 'text-white'
            }`}>
              Advogado Online
            </span>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden md:flex items-center gap-8">
            <a 
              href="#" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Início
            </a>
            <a 
              href="#lawyer-chat" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Como Funciona
            </a>
            <a 
              href="#advogados" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Advogados
            </a>
            <a 
              href="/artigos" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Artigos
            </a>
            <a 
              href="/noticias" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              Notícias
            </a>
          </div>

          {/* Mobile Menu and CTA */}
          <div className="flex items-center gap-2">
            {/* CTA Button - Desktop */}
            <Button 
              onClick={onCtaClick}
              variant={isScrolled ? "default" : "secondary"}
              className="hidden md:flex h-10 px-6 text-sm font-semibold shadow-button hover:scale-105 transition-transform"
            >
              Falar Agora
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className={`md:hidden ${isScrolled ? 'text-foreground' : 'text-white'}`}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <nav className="flex flex-col gap-6 mt-8">
                  <a 
                    href="#"
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                  >
                    Início
                  </a>
                  <a 
                    href="#lawyer-chat"
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                  >
                    Como Funciona
                  </a>
                  <a 
                    href="#advogados"
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                  >
                    Advogados
                  </a>
                  <a 
                    href="/artigos"
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                  >
                    Artigos
                  </a>
                  <a 
                    href="/noticias"
                    className="text-base font-medium hover:text-primary transition-colors py-2"
                  >
                    Notícias
                  </a>
                  <Button 
                    onClick={onCtaClick}
                    className="w-full h-12 text-base font-semibold mt-4"
                  >
                    Falar Agora
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

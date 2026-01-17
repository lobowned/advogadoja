import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Home, Search, Calculator, MessageCircle, FileText, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageTransition from "@/components/motion/PageTransition";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <PageTransition variant="fade">
      <Helmet>
        <title>Página Não Encontrada | Advogado Já</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="A página que você procura não foi encontrada. Navegue para nossa página inicial ou explore nossos serviços jurídicos." />
      </Helmet>
      
      <div className="min-h-screen bg-background flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-full bg-primary/10">
              <Scale className="w-12 h-12 text-primary" />
            </div>
          </div>
          
          {/* Error Code */}
          <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
          
          {/* Message */}
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Página não encontrada
          </h2>
          <p className="text-muted-foreground mb-8">
            A página que você procura pode ter sido movida, removida ou nunca existiu.
            Não se preocupe, temos muitas outras opções para ajudá-lo.
          </p>
          
          {/* Navigation Options */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <Button asChild className="gap-2">
              <Link to="/">
                <Home className="w-4 h-4" />
                Início
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/calculadoras">
                <Calculator className="w-4 h-4" />
                Calculadoras
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/perguntas">
                <Search className="w-4 h-4" />
                FAQs
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/artigos">
                <FileText className="w-4 h-4" />
                Artigos
              </Link>
            </Button>
          </div>
          
          {/* CTA */}
          <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
            <p className="text-sm text-muted-foreground mb-3">
              Precisa de ajuda jurídica? Fale com um advogado agora mesmo.
            </p>
            <Button asChild size="lg" className="w-full gap-2">
              <Link to="/">
                <MessageCircle className="w-5 h-5" />
                Falar com Advogado
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;

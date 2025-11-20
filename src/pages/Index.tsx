import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Scale, Shield, Users } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-primary/90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
        
        <div className="container relative mx-auto px-4 py-20 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Scale className="h-4 w-4" />
              <span>Especialistas em Direito do Consumidor</span>
            </div>
            
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              Defenda seus Direitos como Consumidor com Apoio Jurídico Especializado
            </h1>
            
            <p className="mb-10 text-lg text-white/90 md:text-xl lg:text-2xl">
              Mais de 15 anos de experiência protegendo consumidores contra práticas abusivas. 
              Consulta gratuita e atendimento personalizado.
            </p>
            
            <Button 
              size="lg"
              variant="secondary"
              className="group h-14 px-8 text-lg font-semibold shadow-button transition-all hover:scale-105 hover:shadow-lg"
              onClick={() => navigate("/selecionar-problema")}
            >
              Iniciar Atendimento
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="border-b bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">100% Confidencial</h3>
              <p className="text-muted-foreground">
                Suas informações são protegidas com total sigilo profissional
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Scale className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">Especialização Focada</h3>
              <p className="text-muted-foreground">
                Atuação exclusiva em Direito do Consumidor há mais de 15 anos
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-foreground">+5.000 Casos Resolvidos</h3>
              <p className="text-muted-foreground">
                Milhares de consumidores tiveram seus direitos restaurados
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            Pronto para Resolver seu Problema?
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
            O processo é rápido, simples e totalmente confidencial
          </p>
          <Button 
            size="lg"
            onClick={() => navigate("/selecionar-problema")}
            className="h-12 px-8 text-base font-semibold"
          >
            Começar Agora
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© 2024 Escritório de Advocacia - Direito do Consumidor</p>
          <p className="mt-2">Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

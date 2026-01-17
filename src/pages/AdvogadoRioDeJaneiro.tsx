import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Scale, MapPin, Users, ShoppingBag, Briefcase, Shield, 
  HeartPulse, Gavel, CheckCircle, ArrowRight, MessageCircle, 
  Phone, Star, Building, Clock
} from "lucide-react";
import PageTransition from "@/components/motion/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const rjCities = [
  { name: "Rio de Janeiro", slug: "rio-de-janeiro", population: "6.7M", isCapital: true },
  { name: "São Gonçalo", slug: "sao-goncalo", population: "1.1M" },
  { name: "Duque de Caxias", slug: "duque-de-caxias", population: "924K" },
  { name: "Nova Iguaçu", slug: "nova-iguacu", population: "821K" },
  { name: "Niterói", slug: "niteroi", population: "515K" },
  { name: "Belford Roxo", slug: "belford-roxo", population: "513K" },
  { name: "Campos dos Goytacazes", slug: "campos-dos-goytacazes", population: "507K" },
  { name: "São João de Meriti", slug: "sao-joao-de-meriti", population: "472K" },
  { name: "Petrópolis", slug: "petropolis", population: "306K" },
  { name: "Volta Redonda", slug: "volta-redonda", population: "273K" },
];

const legalAreas = [
  { id: "consumidor", name: "Consumidor", icon: ShoppingBag, color: "text-emerald-600 bg-emerald-50" },
  { id: "trabalhista", name: "Trabalhista", icon: Briefcase, color: "text-blue-600 bg-blue-50" },
  { id: "previdenciario", name: "Previdenciário", icon: Shield, color: "text-purple-600 bg-purple-50" },
  { id: "familia", name: "Família", icon: Users, color: "text-pink-600 bg-pink-50" },
  { id: "civil", name: "Civil", icon: Scale, color: "text-amber-600 bg-amber-50" },
  { id: "penal", name: "Criminal", icon: Gavel, color: "text-red-600 bg-red-50" },
];

const localInfo = {
  procon: {
    address: "Av. Rio Branco, 25 - Centro, Rio de Janeiro",
    phone: "1512",
    hours: "Segunda a Sexta, 9h às 17h"
  },
  tjrj: {
    name: "Tribunal de Justiça do Rio de Janeiro",
    site: "tjrj.jus.br"
  },
  trt1: {
    name: "Tribunal Regional do Trabalho da 1ª Região",
    address: "Av. Presidente Antônio Carlos, 251 - Centro, Rio de Janeiro"
  },
  defensoria: {
    address: "Av. Marechal Câmara, 314 - Centro, Rio de Janeiro",
    site: "defensoria.rj.def.br"
  }
};

const stats = [
  { value: "8.200+", label: "Casos no RJ" },
  { value: "10", label: "Cidades atendidas" },
  { value: "97%", label: "Taxa de sucesso" },
  { value: "R$ 18M+", label: "Em indenizações" },
];

const AdvogadoRioDeJaneiro = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Advogado Rio de Janeiro" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Já no Rio de Janeiro",
    "description": "Advogado online para consulta jurídica no Rio de Janeiro. Atendemos capital, Baixada Fluminense, Niterói e todas as cidades fluminenses.",
    "url": "https://advogadoja.lovable.app/advogado-rio-de-janeiro",
    "areaServed": {
      "@type": "State",
      "name": "Rio de Janeiro",
      "containedInPlace": {
        "@type": "Country",
        "name": "Brasil"
      }
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://advogadoja.lovable.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Advogado Rio de Janeiro",
        "item": "https://advogadoja.lovable.app/advogado-rio-de-janeiro"
      }
    ]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Advogado Online no Rio de Janeiro | Capital, Niterói, Baixada | Consulta Grátis</title>
        <meta name="description" content="Advogado online no Rio de Janeiro: Capital, Niterói, Baixada Fluminense e todas as cidades. Direito do consumidor, trabalhista, previdenciário. Consulta gratuita." />
        <meta name="keywords" content="advogado rio de janeiro, advogado rj, advogado online rj, advogado niteroi, advogado baixada fluminense, advogado consumidor rj" />
        <link rel="canonical" href="https://advogadoja.lovable.app/advogado-rio-de-janeiro" />
        
        <meta property="og:title" content="Advogado Online no Rio de Janeiro | Consulta Jurídica Gratuita" />
        <meta property="og:description" content="Advogado online para todo o estado do Rio de Janeiro." />
        <meta property="og:url" content="https://advogadoja.lovable.app/advogado-rio-de-janeiro" />
        
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar onCtaClick={() => window.location.href = '/'} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 via-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <BreadcrumbNav items={breadcrumbs} className="mb-8" />
            
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                Cidade Maravilhosa
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Advogado Online no{" "}
                <span className="text-primary">Rio de Janeiro</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Atendemos Capital, Baixada Fluminense, Niterói e todas as cidades fluminenses. 
                Consulta jurídica gratuita e imediata.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link to="/">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar com Advogado Agora
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <a href="tel:08007112552">
                    <Phone className="w-5 h-5 mr-2" />
                    0800 071 2552
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Advogados em Todas as Cidades do RJ
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Atendimento online para todas as cidades fluminenses.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
              {rjCities.map((city) => (
                <Link 
                  key={city.slug}
                  to={`/advogado/${city.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 group-hover:bg-primary/5">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors text-sm">
                            {city.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">{city.population} hab.</p>
                        </div>
                        {city.isCapital && (
                          <Badge variant="secondary" className="text-[10px]">Capital</Badge>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Áreas de Atuação no Rio de Janeiro
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {legalAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <Link key={area.id} to={`/advogado-${area.id}`}>
                    <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${area.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="mb-2">Advogado {area.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mb-3">
                          Especialistas em {area.name} para todo o estado do RJ.
                        </p>
                        <div className="flex items-center text-sm text-primary">
                          <span>Saiba mais</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Local Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Informações Úteis - Rio de Janeiro
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                    PROCON-RJ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Endereço:</strong> {localInfo.procon.address}</p>
                  <p className="text-sm"><strong>Telefone:</strong> {localInfo.procon.phone}</p>
                  <p className="text-sm"><strong>Horário:</strong> {localInfo.procon.hours}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-primary" />
                    TJRJ
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Nome:</strong> {localInfo.tjrj.name}</p>
                  <p className="text-sm"><strong>Site:</strong> {localInfo.tjrj.site}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    TRT-1
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Nome:</strong> {localInfo.trt1.name}</p>
                  <p className="text-sm"><strong>Endereço:</strong> {localInfo.trt1.address}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Defensoria Pública
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Endereço:</strong> {localInfo.defensoria.address}</p>
                  <p className="text-sm"><strong>Site:</strong> {localInfo.defensoria.site}</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Precisa de Advogado no Rio de Janeiro?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Fale agora com um de nossos advogados especializados.
            </p>
            
            <Button asChild size="lg" variant="secondary">
              <Link to="/">
                <MessageCircle className="w-5 h-5 mr-2" />
                Iniciar Consulta Gratuita
              </Link>
            </Button>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Consulta gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>Resposta imediata</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>Advogados OAB/RJ</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-muted/50 border-t py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 AdvogadoJá - Todos os direitos reservados</p>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
};

export default AdvogadoRioDeJaneiro;

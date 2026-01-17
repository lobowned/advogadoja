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
import { programmaticFAQs } from "@/data/programmatic-faqs";

const spCities = [
  { name: "São Paulo", slug: "sao-paulo", population: "12.3M", isCapital: true },
  { name: "Guarulhos", slug: "guarulhos", population: "1.4M" },
  { name: "Campinas", slug: "campinas", population: "1.2M" },
  { name: "São Bernardo do Campo", slug: "sao-bernardo-do-campo", population: "844K" },
  { name: "Santo André", slug: "santo-andre", population: "721K" },
  { name: "Osasco", slug: "osasco", population: "699K" },
  { name: "Ribeirão Preto", slug: "ribeirao-preto", population: "711K" },
  { name: "Sorocaba", slug: "sorocaba", population: "687K" },
  { name: "Santos", slug: "santos", population: "433K" },
  { name: "São José dos Campos", slug: "sao-jose-dos-campos", population: "729K" },
  { name: "Mauá", slug: "maua", population: "477K" },
  { name: "São José do Rio Preto", slug: "sao-jose-do-rio-preto", population: "464K" },
  { name: "Piracicaba", slug: "piracicaba", population: "407K" },
  { name: "Jundiaí", slug: "jundiai", population: "423K" },
  { name: "Bauru", slug: "bauru", population: "379K" },
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
    address: "Rua Barra Funda, 930 - Barra Funda, São Paulo",
    phone: "151",
    hours: "Segunda a Sexta, 8h às 17h"
  },
  tjsp: {
    name: "Tribunal de Justiça de São Paulo",
    site: "tjsp.jus.br"
  },
  trt2: {
    name: "Tribunal Regional do Trabalho da 2ª Região",
    address: "Rua da Consolação, 1272 - Centro, São Paulo"
  },
  defensoria: {
    address: "Rua Boa Vista, 103 - Centro, São Paulo",
    site: "defensoria.sp.def.br"
  }
};

const stats = [
  { value: "12.500+", label: "Casos em SP" },
  { value: "15", label: "Cidades atendidas" },
  { value: "98%", label: "Taxa de sucesso" },
  { value: "R$ 25M+", label: "Em indenizações" },
];

const AdvogadoSaoPaulo = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Advogado São Paulo" }
  ];

  const spFaqs = programmaticFAQs
    .filter(faq => faq.id.includes('consumidor') || faq.id.includes('trabalhista'))
    .slice(0, 6);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Online em São Paulo",
    "description": "Advogado online para consulta jurídica em São Paulo. Atendemos capital, ABC Paulista, Campinas e todas as cidades paulistas.",
    "url": "https://advogadoja.lovable.app/advogado-sao-paulo",
    "areaServed": {
      "@type": "State",
      "name": "São Paulo",
      "containedInPlace": {
        "@type": "Country",
        "name": "Brasil"
      }
    },
    "serviceType": ["Direito do Consumidor", "Direito Trabalhista", "Direito Previdenciário", "Direito de Família"]
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
        "name": "Advogado São Paulo",
        "item": "https://advogadoja.lovable.app/advogado-sao-paulo"
      }
    ]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Advogado Online em São Paulo | Capital, ABC, Campinas | Consulta Grátis</title>
        <meta name="description" content="Advogado online em São Paulo: Capital, Guarulhos, Campinas, ABC Paulista e todas as cidades. Direito do consumidor, trabalhista, previdenciário. Consulta gratuita." />
        <meta name="keywords" content="advogado são paulo, advogado sp, advogado online sp, advogado consumidor sp, advogado trabalhista sp, advogado campinas, advogado abc paulista" />
        <link rel="canonical" href="https://advogadoja.lovable.app/advogado-sao-paulo" />
        
        <meta property="og:title" content="Advogado Online em São Paulo | Consulta Jurídica Gratuita" />
        <meta property="og:description" content="Advogado online para todo o estado de São Paulo. Atendemos capital, interior e litoral." />
        <meta property="og:url" content="https://advogadoja.lovable.app/advogado-sao-paulo" />
        
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
                Maior estado do Brasil
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Advogado Online em{" "}
                <span className="text-primary">São Paulo</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Atendemos Capital, ABC Paulista, Campinas, Santos e todas as cidades paulistas. 
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
              Advogados em Todas as Cidades de SP
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Atendimento online para todas as cidades paulistas. Clique na sua cidade para ver serviços específicos.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
              {spCities.map((city) => (
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
              Áreas de Atuação em São Paulo
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Advogados especialistas em todas as áreas do Direito. Atendimento online e presencial quando necessário.
            </p>

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
                          Especialistas em {area.name} para todo o estado de SP.
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
              Informações Úteis - São Paulo
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                    PROCON-SP
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
                    TJSP
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Nome:</strong> {localInfo.tjsp.name}</p>
                  <p className="text-sm"><strong>Site:</strong> {localInfo.tjsp.site}</p>
                  <p className="text-sm text-muted-foreground">Maior tribunal do mundo em volume</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    TRT-2
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Nome:</strong> {localInfo.trt2.name}</p>
                  <p className="text-sm"><strong>Endereço:</strong> {localInfo.trt2.address}</p>
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
              Precisa de Advogado em São Paulo?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Fale agora com um de nossos advogados especializados. 
              Atendimento imediato para todo o estado.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Iniciar Consulta Gratuita
                </Link>
              </Button>
            </div>

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
                <span>Advogados OAB/SP</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-muted/50 border-t py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 AdvogadoJá - Todos os direitos reservados</p>
            <p className="mt-2">Atendimento em todo o estado de São Paulo</p>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
};

export default AdvogadoSaoPaulo;

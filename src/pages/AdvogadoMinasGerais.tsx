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

const mgCities = [
  { name: "Belo Horizonte", slug: "belo-horizonte", population: "2.5M", isCapital: true },
  { name: "Uberlândia", slug: "uberlandia", population: "699K" },
  { name: "Contagem", slug: "contagem", population: "668K" },
  { name: "Juiz de Fora", slug: "juiz-de-fora", population: "577K" },
  { name: "Betim", slug: "betim", population: "444K" },
  { name: "Montes Claros", slug: "montes-claros", population: "413K" },
  { name: "Ribeirão das Neves", slug: "ribeirao-das-neves", population: "334K" },
  { name: "Uberaba", slug: "uberaba", population: "337K" },
  { name: "Governador Valadares", slug: "governador-valadares", population: "279K" },
  { name: "Ipatinga", slug: "ipatinga", population: "263K" },
  { name: "Sete Lagoas", slug: "sete-lagoas", population: "239K" },
  { name: "Divinópolis", slug: "divinopolis", population: "238K" },
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
    address: "Rua Rio de Janeiro, 471 - Centro, Belo Horizonte",
    phone: "151",
    hours: "Segunda a Sexta, 8h às 17h"
  },
  tjmg: {
    name: "Tribunal de Justiça de Minas Gerais",
    site: "tjmg.jus.br"
  },
  trt3: {
    name: "Tribunal Regional do Trabalho da 3ª Região",
    address: "Av. Augusto de Lima, 1234 - Barro Preto, Belo Horizonte"
  },
  defensoria: {
    address: "Rua Guajajaras, 1707 - Barro Preto, Belo Horizonte",
    site: "defensoria.mg.def.br"
  }
};

const stats = [
  { value: "6.800+", label: "Casos em MG" },
  { value: "12", label: "Cidades atendidas" },
  { value: "97%", label: "Taxa de sucesso" },
  { value: "R$ 15M+", label: "Em indenizações" },
];

const AdvogadoMinasGerais = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Advogado Minas Gerais" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Já em Minas Gerais",
    "description": "Advogado online para consulta jurídica em Minas Gerais. Atendemos BH, Uberlândia, Contagem e todas as cidades mineiras.",
    "url": "https://advogadoja.lovable.app/advogado-minas-gerais",
    "areaServed": {
      "@type": "State",
      "name": "Minas Gerais",
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
        "name": "Advogado Minas Gerais",
        "item": "https://advogadoja.lovable.app/advogado-minas-gerais"
      }
    ]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Advogado Online em Minas Gerais | BH, Uberlândia, Contagem | Consulta Grátis</title>
        <meta name="description" content="Advogado online em Minas Gerais: Belo Horizonte, Uberlândia, Contagem, Juiz de Fora e todas as cidades. Direito do consumidor, trabalhista, previdenciário. Consulta gratuita." />
        <meta name="keywords" content="advogado minas gerais, advogado mg, advogado belo horizonte, advogado bh, advogado uberlandia, advogado consumidor mg, advogado trabalhista mg" />
        <link rel="canonical" href="https://advogadoja.lovable.app/advogado-minas-gerais" />
        
        <meta property="og:title" content="Advogado Online em Minas Gerais | Consulta Jurídica Gratuita" />
        <meta property="og:description" content="Advogado online para todo o estado de Minas Gerais." />
        <meta property="og:url" content="https://advogadoja.lovable.app/advogado-minas-gerais" />
        
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
                Estado das Alterosas
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Advogado Online em{" "}
                <span className="text-primary">Minas Gerais</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Atendemos BH, Uberlândia, Contagem, Juiz de Fora e todas as cidades mineiras. 
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
              Advogados em Todas as Cidades de MG
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Atendimento online para todas as cidades mineiras.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {mgCities.map((city) => (
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
              Áreas de Atuação em Minas Gerais
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
                          Especialistas em {area.name} para todo o estado de MG.
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
              Informações Úteis - Minas Gerais
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                    PROCON-MG
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
                    TJMG
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Nome:</strong> {localInfo.tjmg.name}</p>
                  <p className="text-sm"><strong>Site:</strong> {localInfo.tjmg.site}</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    TRT-3
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Nome:</strong> {localInfo.trt3.name}</p>
                  <p className="text-sm"><strong>Endereço:</strong> {localInfo.trt3.address}</p>
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
              Precisa de Advogado em Minas Gerais?
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
                <span>Advogados OAB/MG</span>
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

export default AdvogadoMinasGerais;

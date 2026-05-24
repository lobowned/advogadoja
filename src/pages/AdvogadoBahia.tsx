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

// Bahia cities data
const bahiaCities = [
  { name: "Salvador", slug: "salvador", population: "2.9M", isCapital: true },
  { name: "Feira de Santana", slug: "feira-de-santana", population: "619K" },
  { name: "Vitória da Conquista", slug: "vitoria-da-conquista", population: "343K" },
  { name: "Camaçari", slug: "camacari", population: "304K" },
  { name: "Itabuna", slug: "itabuna", population: "213K" },
  { name: "Ilhéus", slug: "ilheus", population: "157K" },
  { name: "Juazeiro", slug: "juazeiro", population: "220K" },
  { name: "Lauro de Freitas", slug: "lauro-de-freitas", population: "204K" },
  { name: "Barreiras", slug: "barreiras", population: "158K" },
  { name: "Jequié", slug: "jequie", population: "155K" },
  { name: "Alagoinhas", slug: "alagoinhas", population: "155K" },
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
    address: "Av. Centenário, 2992 - Chame-Chame, Salvador",
    phone: "0800 071 2552",
    hours: "Segunda a Sexta, 8h às 17h"
  },
  tjba: {
    name: "Tribunal de Justiça da Bahia",
    site: "tjba.jus.br"
  },
  trt5: {
    name: "Tribunal Regional do Trabalho da 5ª Região",
    address: "Rua Bela Vista do Cabral, 121 - Nazaré, Salvador"
  },
  defensoria: {
    address: "Av. Luiz Viana Filho, 2490 - CAB, Salvador",
    site: "defensoria.ba.def.br"
  }
};

const stats = [
  { value: "3.500+", label: "Casos na Bahia" },
  { value: "11", label: "Cidades atendidas" },
  { value: "97%", label: "Taxa de sucesso" },
  { value: "R$ 8M+", label: "Em indenizações" },
];

const AdvogadoBahia = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Advogado Bahia" }
  ];

  // Get Bahia FAQs
  const bahiaFaqs = programmaticFAQs
    .filter(faq => faq.id.startsWith('bahia-'))
    .slice(0, 6);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Já na Bahia",
    "description": "Advogado online para consulta jurídica na Bahia. Atendemos Salvador, Feira de Santana, Vitória da Conquista e todas as cidades baianas.",
    "url": "https://advogadoja.lovable.app/advogado-bahia",
    "areaServed": {
      "@type": "State",
      "name": "Bahia",
      "containedInPlace": {
        "@type": "Country",
        "name": "Brasil"
      }
    },
    "serviceType": ["Direito do Consumidor", "Direito Trabalhista", "Direito Previdenciário", "Direito de Família"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Jurídicos na Bahia",
      "itemListElement": bahiaCities.map(city => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `Advogado em ${city.name}`,
          "areaServed": city.name
        }
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://advogadoja.lovable.app/" },
      { "@type": "ListItem", "position": 2, "name": "Advogado Bahia", "item": "https://advogadoja.lovable.app/advogado-bahia" }
    ]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Advogado Online na Bahia | Salvador, Feira de Santana e Mais | Consulta Grátis</title>
        <meta name="description" content="Advogado online na Bahia: Salvador, Feira de Santana, Vitória da Conquista e todas as cidades baianas. Direito do consumidor, trabalhista, previdenciário. Consulta gratuita." />
        <meta name="keywords" content="advogado bahia, advogado salvador, advogado feira de santana, advogado online bahia, advogado consumidor bahia, advogado trabalhista bahia, advogado INSS bahia" />
        <link rel="canonical" href="https://advogadoja.lovable.app/advogado-bahia" />
        
        <meta property="og:title" content="Advogado Online na Bahia | Consulta Jurídica Gratuita" />
        <meta property="og:description" content="Advogado online para toda a Bahia. Atendemos Salvador, Feira de Santana, Vitória da Conquista e mais 8 cidades." />
        <meta property="og:url" content="https://advogadoja.lovable.app/advogado-bahia" />
        <meta property="og:type" content="website" />
        
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
                Atendimento em toda a Bahia
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Advogado Online na{" "}
                <span className="text-primary">Bahia</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Atendemos Salvador, Feira de Santana, Vitória da Conquista e todas as cidades baianas. 
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
              Advogados em Todas as Cidades da Bahia
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Atendimento online para todas as cidades baianas. Clique na sua cidade para ver serviços específicos.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {bahiaCities.map((city) => (
                <Link 
                  key={city.slug}
                  to={`/advogado/${city.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 group-hover:bg-primary/5">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {city.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{city.population} hab.</p>
                        </div>
                        {city.isCapital && (
                          <Badge variant="secondary" className="text-xs">Capital</Badge>
                        )}
                      </div>
                      <div className="flex items-center mt-2 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                        <span>Ver advogados</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
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
              Áreas de Atuação na Bahia
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
                          Especialistas em {area.name} para toda a Bahia.
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
              Informações Úteis - Bahia
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                    PROCON-BA
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
                    TJBA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Nome:</strong> {localInfo.tjba.name}</p>
                  <p className="text-sm"><strong>Site:</strong> {localInfo.tjba.site}</p>
                  <p className="text-sm text-muted-foreground">Juizados Especiais em todas as comarcas</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    TRT-5
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Nome:</strong> {localInfo.trt5.name}</p>
                  <p className="text-sm"><strong>Endereço:</strong> {localInfo.trt5.address}</p>
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

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Perguntas Frequentes - Bahia
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Dúvidas comuns sobre questões jurídicas no estado da Bahia.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {bahiaFaqs.map((faq) => (
                <Link key={faq.id} to={`/perguntas/${faq.slug}`}>
                  <Card className="h-full hover:shadow-md transition-shadow hover:border-primary/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 line-clamp-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{faq.answer.substring(0, 150)}...</p>
                      <div className="flex items-center mt-3 text-sm text-primary">
                        <span>Ler resposta completa</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/perguntas">
                  Ver todas as perguntas
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Precisa de Advogado na Bahia?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Fale agora com um de nossos advogados especializados. 
              Atendimento imediato para toda a Bahia.
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
                <span>Advogados OAB/BA</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted/50 border-t py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Advogado Já - Todos os direitos reservados</p>
            <div className="flex justify-center gap-4 mt-4">
              <Link to="/privacidade" className="hover:underline">Privacidade</Link>
              <Link to="/termos-de-uso" className="hover:underline">Termos</Link>
              <Link to="/sitemap" className="hover:underline">Sitemap</Link>
            </div>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
};

export default AdvogadoBahia;
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  ShoppingCart, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle, 
  Scale, 
  Clock, 
  Award,
  Plane,
  Heart,
  CreditCard,
  AlertTriangle,
  Building,
  ChevronRight,
  Star,
  Users,
  TrendingUp,
  HeartPulse
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { consumerCityData, type ConsumerCityData } from "@/data/consumer-local-seo";
import { getCityBySlug } from "@/data/cities";
import { CityLocalGuide } from "@/components/CityLocalGuide";

// Create a lookup map for city data by slug
const cityDataMap: Record<string, ConsumerCityData> = {};
consumerCityData.forEach(city => {
  cityDataMap[city.citySlug] = city;
});

// Icon mapping for local problems
const getIconForProblem = (iconName: string) => {
  const icons: Record<string, React.ReactNode> = {
    "Plane": <Plane className="w-6 h-6" />,
    "HeartPulse": <HeartPulse className="w-6 h-6" />,
    "Heart": <Heart className="w-6 h-6" />,
    "CreditCard": <CreditCard className="w-6 h-6" />,
    "AlertTriangle": <AlertTriangle className="w-6 h-6" />,
    "ShoppingCart": <ShoppingCart className="w-6 h-6" />,
    "Building": <Building className="w-6 h-6" />,
  };
  return icons[iconName] || <Scale className="w-6 h-6" />;
};

const CityConsumerLanding = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  
  const cityData = citySlug ? cityDataMap[citySlug] : null;
  
  if (!cityData) {
    return <Navigate to="/advogado-consumidor" replace />;
  }

  const whatsappNumber = "5571997092633";
  const whatsappMessage = `Olá! Preciso de ajuda com um problema de consumidor em ${cityData.cityName}. Pode me ajudar?`;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  const baseUrl = "https://advogadoja.lovable.app";
  const pageUrl = `${baseUrl}/advogado-consumidor-${citySlug}`;

  // Schema.org structured data
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness", "ProfessionalService"],
    "@id": pageUrl,
    "name": `Advogado do Consumidor em ${cityData.cityName}`,
    "description": `Especialista em Direito do Consumidor em ${cityData.cityName}, ${cityData.stateCode}. Consulta gratuita. ${cityData.stats.casesWon} casos ganhos.`,
    "url": pageUrl,
    "telephone": "+55-11-99999-9999",
    "areaServed": {
      "@type": "City",
      "name": cityData.cityName,
      "containedInPlace": {
        "@type": "State",
        "name": cityData.state
      }
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": cityData.coordinates.latitude,
      "longitude": cityData.coordinates.longitude
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": cityData.cityName,
      "addressRegion": cityData.stateCode,
      "addressCountry": "BR"
    },
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": cityData.stats.casesWon,
      "bestRating": "5",
      "worstRating": "1"
    },
    "knowsAbout": [
      "Direito do Consumidor",
      "Voo Cancelado",
      "Negativação Indevida",
      "Plano de Saúde",
      "Fraude Bancária",
      "Cobrança Indevida"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Jurídicos de Consumidor",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Consultoria Gratuita"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ação de Indenização"
          }
        }
      ]
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": cityData.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": baseUrl
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Advogado Consumidor",
        "item": `${baseUrl}/advogado-consumidor`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": cityData.cityName,
        "item": pageUrl
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>{`Advogado Consumidor ${cityData.cityName} ${cityData.stateCode} | Indenização até R$15.000 - Consulta Grátis`}</title>
        <meta 
          name="description" 
          content={`Advogado especialista em Direito do Consumidor em ${cityData.cityName}. ${cityData.stats.casesWon} casos ganhos. Indenização média de ${cityData.stats.avgCompensation}. Consulta gratuita pelo WhatsApp.`} 
        />
        <meta 
          name="keywords" 
          content={`advogado consumidor ${cityData.cityName.toLowerCase()}, advogado direito do consumidor ${cityData.cityName.toLowerCase()}, especialista consumidor ${cityData.stateCode}, indenização consumidor ${cityData.cityName.toLowerCase()}, processar empresa ${cityData.cityName.toLowerCase()}`} 
        />
        <link rel="canonical" href={pageUrl} />
        
        {/* Geo Tags */}
        <meta name="geo.region" content={`BR-${cityData.stateCode}`} />
        <meta name="geo.placename" content={cityData.cityName} />
        <meta name="geo.position" content={`${cityData.coordinates.latitude};${cityData.coordinates.longitude}`} />
        <meta name="ICBM" content={`${cityData.coordinates.latitude}, ${cityData.coordinates.longitude}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`Advogado do Consumidor em ${cityData.cityName} - Consulta Gratuita`} />
        <meta property="og:description" content={`Especialista em Direito do Consumidor em ${cityData.cityName}. ${cityData.stats.casesWon} casos ganhos. Indenização média ${cityData.stats.avgCompensation}.`} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`Advogado Consumidor ${cityData.cityName}`} />
        <meta name="twitter:description" content={`Especialista em Direito do Consumidor. ${cityData.stats.casesWon} casos ganhos em ${cityData.cityName}.`} />
        
        {/* Schema.org JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(legalServiceSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      {/* Simple Navbar for Landing Page */}
      <nav className="bg-background/95 backdrop-blur-md border-b sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="font-bold text-xl text-primary">
              AdvogadoJá
            </Link>
            <Button size="sm" className="gap-2" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" />
                <span className="hidden sm:inline">Falar com Advogado</span>
                <span className="sm:hidden">WhatsApp</span>
              </a>
            </Button>
          </div>
        </div>
      </nav>
      
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <nav className="bg-muted/30 border-b" aria-label="Breadcrumb">
          <div className="container mx-auto px-4 py-3">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Início
                </Link>
              </li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <li>
                <Link to="/advogado-consumidor" className="text-muted-foreground hover:text-primary transition-colors">
                  Advogado Consumidor
                </Link>
              </li>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
              <li>
                <span className="text-foreground font-medium">{cityData.cityName}</span>
              </li>
            </ol>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badges */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <Badge variant="secondary" className="gap-1.5 px-3 py-1">
                  <ShoppingCart className="w-4 h-4" />
                  Direito do Consumidor
                </Badge>
                <Badge variant="outline" className="gap-1.5 px-3 py-1">
                  <MapPin className="w-4 h-4" />
                  {cityData.cityName}, {cityData.stateCode}
                </Badge>
              </div>

              {/* H1 */}
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                Advogado do Consumidor em{" "}
                <span className="text-primary">{cityData.cityName}</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                Consulta Online Gratuita • Indenização de até R$ 15.000
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                <Button size="lg" className="gap-2 text-lg px-8" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    Falar com Advogado
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 text-lg px-8" asChild>
                  <a href="tel:+5511999999999">
                    <Phone className="w-5 h-5" />
                    Ligar Agora
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto">
                <div className="text-center p-4 rounded-lg bg-card border">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Award className="w-5 h-5 text-primary" />
                    <span className="text-2xl md:text-3xl font-bold text-primary">
                      {cityData.stats.casesWon.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Casos Ganhos</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-card border">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    <span className="text-2xl md:text-3xl font-bold text-green-500">
                      {cityData.stats.avgCompensation}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Indenização Média</p>
                </div>
                <div className="text-center p-4 rounded-lg bg-card border">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Clock className="w-5 h-5 text-blue-500" />
                    <span className="text-2xl md:text-3xl font-bold text-blue-500">
                      {cityData.stats.avgResolutionDays}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">Dias em Média</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Local Problems Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Problemas Mais Comuns em {cityData.cityName}
            </h2>
            <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
              Nossos advogados são especialistas nos principais problemas de consumidor enfrentados pelos moradores de {cityData.cityName}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {cityData.localProblems.map((problem, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary">
                          {getIconForProblem(problem.icon)}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-2">{problem.title}</h3>
                        <p className="text-muted-foreground text-sm">{problem.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Local Context Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    Direito do Consumidor em {cityData.cityName}
                  </h2>
                  <p className="text-muted-foreground">
                    Contexto local e informações importantes
                  </p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="text-foreground leading-relaxed">
                  {cityData.localContext}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tribunal Info Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Onde Processar em {cityData.cityName}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Scale className="w-8 h-8 text-primary" />
                      <div>
                        <h3 className="font-bold text-lg">Juizado Especial Cível</h3>
                        <p className="text-sm text-muted-foreground">Tribunal de Justiça - {cityData.stateCode}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">{cityData.consumerTribunalInfo}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span>Causas de até 40 salários mínimos</span>
                    </div>
                  </CardContent>
                </Card>
                
                {cityData.proconAddress && (
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Building className="w-8 h-8 text-green-600" />
                        <div>
                          <h3 className="font-bold text-lg">PROCON {cityData.cityName}</h3>
                          <p className="text-sm text-muted-foreground">Proteção ao Consumidor</p>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{cityData.proconAddress}</p>
                    </CardContent>
                  </Card>
                )}
              </div>
            </div>
          </div>
        </section>

        {(() => {
          const baseCity = getCityBySlug(citySlug!);
          return baseCity ? (
            <CityLocalGuide
              city={baseCity}
              area="Direito do Consumidor"
              tribunalInfo={cityData.consumerTribunalInfo}
              proconAddress={cityData.proconAddress}
            />
          ) : null;
        })()}

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Perguntas Frequentes em {cityData.cityName}
              </h2>
              <p className="text-muted-foreground text-center mb-10">
                Dúvidas comuns dos consumidores de {cityData.cityName}
              </p>
              
              <Accordion type="single" collapsible className="w-full">
                {cityData.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Nearby Cities Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Atendemos Também em Cidades Próximas
              </h2>
              <p className="text-muted-foreground mb-8">
                Além de {cityData.cityName}, nossos advogados atendem consumidores em toda a região
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {cityData.nearbyConsumerCities.map((city, index) => {
                  const citySlugNearby = city.toLowerCase()
                    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
                    .replace(/\s+/g, '-');
                  const hasPage = cityDataMap[citySlugNearby];
                  
                  return hasPage ? (
                    <Link
                      key={index}
                      to={`/advogado-consumidor-${citySlugNearby}`}
                      className="px-4 py-2 rounded-full bg-card border hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {city}
                    </Link>
                  ) : (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-card border text-muted-foreground"
                    >
                      {city}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 md:py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Precisa de Ajuda com Problema de Consumidor em {cityData.cityName}?
            </h2>
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Fale agora com um advogado especialista. Consulta gratuita e sem compromisso.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2 text-lg px-8" asChild>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Falar com Advogado Especialista
                </a>
              </Button>
            </div>
            
            <div className="flex items-center justify-center gap-6 mt-8 text-sm opacity-80">
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Consulta Gratuita
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                Sem Compromisso
              </span>
              <span className="flex items-center gap-2">
                <Star className="w-4 h-4" />
                4.9 de Avaliação
              </span>
            </div>
          </div>
        </section>
      </main>

      <FloatingWhatsApp />
    </>
  );
};

export default CityConsumerLanding;

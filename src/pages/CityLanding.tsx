import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  MapPin, Scale, Phone, MessageCircle, CheckCircle, 
  Briefcase, Heart, Building, HeartPulse, Gavel, ShoppingBag,
  Clock, Shield, Award, ChevronRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/motion/PageTransition";
import { getCityBySlug, brazilianCities } from "@/data/cities";

const CityLanding = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = citySlug ? getCityBySlug(citySlug) : undefined;

  if (!city) {
    return <Navigate to="/" replace />;
  }

  const canonicalUrl = `https://advogadoja.lovable.app/advogado/${city.slug}`;

  const practiceAreas = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      name: "Direito Trabalhista",
      description: `Rescisão, horas extras, FGTS e direitos trabalhistas em ${city.name}`,
      color: "text-blue-600 bg-blue-100"
    },
    {
      icon: <Heart className="h-6 w-6" />,
      name: "Direito de Família",
      description: `Divórcio, pensão alimentícia, guarda de filhos em ${city.name}`,
      color: "text-pink-600 bg-pink-100"
    },
    {
      icon: <HeartPulse className="h-6 w-6" />,
      name: "Direito Previdenciário",
      description: `Aposentadoria, auxílio-doença, BPC/LOAS em ${city.name}`,
      color: "text-green-600 bg-green-100"
    },
    {
      icon: <Building className="h-6 w-6" />,
      name: "Direito Civil",
      description: `Contratos, indenizações, cobranças em ${city.name}`,
      color: "text-amber-600 bg-amber-100"
    },
    {
      icon: <ShoppingBag className="h-6 w-6" />,
      name: "Direito do Consumidor",
      description: `Defeitos, cobranças indevidas, negativação em ${city.name}`,
      color: "text-purple-600 bg-purple-100"
    },
    {
      icon: <Gavel className="h-6 w-6" />,
      name: "Direito Penal",
      description: `Defesa criminal, habeas corpus em ${city.name}`,
      color: "text-red-600 bg-red-100"
    }
  ];

  const benefits = [
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Atendimento Online",
      description: `Fale com advogados de ${city.name} sem sair de casa`
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Resposta Imediata",
      description: "Atendimento em minutos, não em dias"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Sigilo Garantido",
      description: "Suas informações protegidas por sigilo profissional"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Advogados OAB",
      description: `Profissionais registrados na OAB/${city.stateCode}`
    }
  ];

  // Schema.org LocalBusiness for city
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": `Advogado Online ${city.name}`,
    "description": `Advogados especialistas em ${city.name}, ${city.state}. Atendimento jurídico online gratuito em Direito Trabalhista, Família, Previdenciário, Civil e Criminal.`,
    "url": canonicalUrl,
    "telephone": "+55-71-99999-9999",
    "email": "contato@advogadoonline.com.br",
    "priceRange": "Consulta Gratuita",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.stateCode,
      "addressCountry": "BR"
    },
    "areaServed": {
      "@type": "City",
      "name": city.name,
      "containedInPlace": {
        "@type": "State",
        "name": city.state
      }
    },
    "serviceType": [
      "Direito Trabalhista",
      "Direito de Família",
      "Direito Previdenciário",
      "Direito Civil",
      "Direito do Consumidor",
      "Direito Penal"
    ],
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "08:00",
      "closes": "20:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "1247",
      "bestRating": "5"
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
        "item": "https://advogadoonline.com.br"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Cidades",
        "item": "https://advogadoonline.com.br/advogado"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `Advogado em ${city.name}`,
        "item": canonicalUrl
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": `Como encontrar um advogado em ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Você pode falar com um advogado em ${city.name} agora mesmo através do Advogado Online. Nosso atendimento é online, gratuito e imediato.`
        }
      },
      {
        "@type": "Question",
        "name": `Qual o valor de uma consulta com advogado em ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `No Advogado Online, a consulta inicial é gratuita. Você pode tirar suas dúvidas com advogados especialistas de ${city.name} sem custo.`
        }
      },
      {
        "@type": "Question",
        "name": `Quais áreas do direito são atendidas em ${city.name}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Atendemos todas as principais áreas: Direito Trabalhista, Família, Previdenciário, Civil, Consumidor e Penal em ${city.name} e região.`
        }
      }
    ]
  };

  const handleCTA = () => {
    window.location.href = "/?cidade=" + city.slug;
  };

  // Get nearby cities for internal linking
  const nearbyCities = brazilianCities
    .filter(c => c.region === city.region && c.slug !== city.slug)
    .slice(0, 4);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Advogado em {city.name} {city.stateCode} | Consulta Jurídica Online Gratuita</title>
          <meta 
            name="description" 
            content={`Advogado em ${city.name} online. Consulta jurídica gratuita com especialistas em Trabalhista, Família, Previdenciário e mais. Atendimento imediato para ${city.name} e região.`} 
          />
          <meta 
            name="keywords" 
            content={`advogado ${city.name}, advogado online ${city.name}, consulta jurídica ${city.name}, advogado trabalhista ${city.name}, advogado família ${city.name}, advogado ${city.stateCode}`} 
          />
          <link rel="canonical" href={canonicalUrl} />
          
          <meta property="og:title" content={`Advogado em ${city.name} | Consulta Gratuita`} />
          <meta property="og:description" content={`Fale agora com advogados especialistas em ${city.name}. Atendimento online gratuito e imediato.`} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="website" />
          
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`Advogado em ${city.name} | Consulta Gratuita`} />
          
          <meta name="geo.region" content={`BR-${city.stateCode}`} />
          <meta name="geo.placename" content={city.name} />
          
          <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>

        <Navbar onCtaClick={handleCTA} />

        <main>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
            <div className="container mx-auto px-4">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary">Início</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">Advogado em {city.name}</span>
              </nav>

              <div className="max-w-4xl">
                <Badge className="mb-4" variant="secondary">
                  <MapPin className="h-3 w-3 mr-1" />
                  {city.name}, {city.stateCode}
                </Badge>
                
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Advogado em {city.name}
                  <span className="text-primary block mt-2">Consulta Jurídica Online Gratuita</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                  Fale agora com advogados especialistas em {city.name}. 
                  Atendimento online, gratuito e imediato para resolver seu problema jurídico.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8" onClick={handleCTA}>
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Falar com Advogado Agora
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg" asChild>
                    <a href="tel:+5571997036269">
                      <Phone className="h-5 w-5 mr-2" />
                      Ligar Agora
                    </a>
                  </Button>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 mt-8 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Atendimento 24h
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Advogados OAB/{city.stateCode}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Consulta Gratuita
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* City Info */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Advocacia em {city.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{city.localContext}</p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 pt-4">
                    <div>
                      <h3 className="font-semibold mb-2">Tribunais Locais</h3>
                      <p className="text-sm text-muted-foreground">{city.courtInfo}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Destaques da Região</h3>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {city.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Practice Areas */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Áreas de Atuação em {city.name}
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Nossos advogados atendem todas as principais áreas do direito em {city.name} e região
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {practiceAreas.map((area, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardContent className="pt-6">
                      <div className={`w-12 h-12 rounded-lg ${area.color} flex items-center justify-center mb-4`}>
                        {area.icon}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{area.name}</h3>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits */}
          <section className="py-12 bg-primary/5">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Por que escolher o Advogado Online em {city.name}?
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary">
                      {benefit.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Perguntas Frequentes - Advogado em {city.name}
              </h2>

              <div className="max-w-3xl mx-auto space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Como encontrar um advogado em {city.name}?</h3>
                    <p className="text-muted-foreground">
                      Você pode falar com um advogado em {city.name} agora mesmo através do Advogado Online. 
                      Nosso atendimento é online, gratuito e imediato. Basta clicar no botão "Falar com Advogado" 
                      e você será atendido por um especialista.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">Qual o valor de uma consulta com advogado em {city.name}?</h3>
                    <p className="text-muted-foreground">
                      No Advogado Online, a consulta inicial é gratuita. Você pode tirar suas dúvidas com 
                      advogados especialistas de {city.name} sem custo. Após a análise do seu caso, você 
                      receberá um orçamento transparente se houver necessidade de ação judicial.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">O atendimento online tem validade em {city.name}?</h3>
                    <p className="text-muted-foreground">
                      Sim! O atendimento jurídico online é regulamentado pela OAB e tem a mesma validade 
                      do atendimento presencial. Nossos advogados são registrados na OAB/{city.stateCode} e podem 
                      atuar em processos no {city.courtInfo}.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-12 md:py-16 bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 text-center">
              <Scale className="h-12 w-12 mx-auto mb-6 opacity-80" />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Precisa de um advogado em {city.name}?
              </h2>
              <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                Fale agora com um especialista. Atendimento gratuito e imediato para 
                moradores de {city.name} e região metropolitana.
              </p>
              <Button 
                size="lg" 
                variant="secondary" 
                className="text-lg px-8"
                onClick={handleCTA}
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                Falar com Advogado Agora
              </Button>
            </div>
          </section>

          {/* Nearby Cities - Internal Linking */}
          {nearbyCities.length > 0 && (
            <section className="py-12">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-bold mb-6">
                  Advogados em outras cidades do {city.region}
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {nearbyCities.map((nearbyCity) => (
                    <Link
                      key={nearbyCity.slug}
                      to={`/advogado/${nearbyCity.slug}`}
                      className="flex items-center gap-2 p-4 rounded-lg border hover:bg-muted transition-colors"
                    >
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>Advogado em {nearbyCity.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Advogado Online | OAB/BA 46.638 | Atendendo {city.name}, {city.stateCode}</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default CityLanding;

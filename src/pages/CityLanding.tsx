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
import { getCityBySlug, brazilianCities, isCityIndexable } from "@/data/cities";
import { LOCAL_PAGE_ROUTES, LOCAL_NICHE_NAMES } from "@/data/local-page-keys";
import { cityFaq, cityPageMeta } from "@/data/city-page";
import { CityLocalGuide } from "@/components/CityLocalGuide";

const CityLanding = () => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const city = citySlug ? getCityBySlug(citySlug) : undefined;

  if (!city) {
    return <Navigate to="/" replace />;
  }

  const canonicalUrl = `https://riccio-advocacia.lovable.app/advogado/${city.slug}`;
  const indexable = isCityIndexable(city.slug);

  const meta = cityPageMeta(city);
  const faqItems = cityFaq(city);

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
      description: `Fale com o advogado pelo WhatsApp, de qualquer bairro de ${city.name}`
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Orientação clara",
      description: "Direitos, prazos e documentos explicados em linguagem simples"
    },
    {
      icon: <Shield className="h-5 w-5" />,
      title: "Sigilo Garantido",
      description: "Suas informações protegidas por sigilo profissional"
    },
    {
      icon: <Award className="h-5 w-5" />,
      title: "Inscrição na OAB",
      description: "Dr. Gilberto Riccio, OAB/BA 46.638"
    }
  ];

  // Schema.org LocalBusiness for city
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Riccio Advocacia",
    "description": `Atendimento jurídico online para quem mora em ${city.name}, ${city.state}: Direito Trabalhista, Família, Previdenciário, Civil, Consumidor e Criminal. Dr. Gilberto Riccio, OAB/BA 46.638.`,
    "url": canonicalUrl,
    "telephone": "+55-71-99703-6269",
    "priceRange": "$$",
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
    ]};

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://riccio-advocacia.lovable.app"
      },
      // A página da Bahia é o índice das cidades (não existe /advogado sozinho)
      ...(city.stateCode === "BA"
        ? [{ "@type": "ListItem", "position": 2, "name": "Bahia", "item": "https://riccio-advocacia.lovable.app/advogado-bahia" }]
        : []),
      {
        "@type": "ListItem",
        "position": city.stateCode === "BA" ? 3 : 2,
        "name": `Advogado em ${city.name}`,
        "item": canonicalUrl
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  };

  const handleCTA = () => {
    window.location.href = "/?cidade=" + city.slug;
  };

  // Get nearby cities for internal linking
  const cityAreaPages = LOCAL_PAGE_ROUTES.filter((r) => r.citySlug === city.slug).map((r) => ({
    href: `/advogado-${r.key}`,
    area: (LOCAL_NICHE_NAMES[r.nicheSlug] ?? r.nicheSlug).toLowerCase(),
  }));

  const nearbyCities = brazilianCities
    .filter(c => c.region === city.region && c.slug !== city.slug)
    .slice(0, 4);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
          <meta 
            name="keywords" 
            content={`advogado ${city.name}, advogado online ${city.name}, consulta jurídica ${city.name}, advogado trabalhista ${city.name}, advogado família ${city.name}, advogado ${city.stateCode}`} 
          />
          <link rel="canonical" href={canonicalUrl} />
          {!indexable && (
            <meta name="robots" content="noindex, follow" />
          )}
          
          <meta property="og:title" content={`Advogado em ${city.name} | Fale com advogado`} />
          <meta property="og:description" content={`Atendimento jurídico online para quem mora em ${city.name}. Dr. Gilberto Riccio, OAB/BA 46.638, pelo WhatsApp.`} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="website" />

          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`Advogado em ${city.name} | Fale com advogado`} />

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
                {city.stateCode === "BA" && (
                  <>
                    <Link to="/advogado-bahia" className="hover:text-primary">Bahia</Link>
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
                <span className="text-foreground">Advogado em {city.name}</span>
              </nav>

              <div className="max-w-4xl">
                <Badge className="mb-4" variant="secondary">
                  <MapPin className="h-3 w-3 mr-1" />
                  {city.name}, {city.stateCode}
                </Badge>
                
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Advogado em {city.name}
                  <span className="text-primary block mt-2">Atendimento Jurídico Online</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">{meta.intro}</p>

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
                    Atendimento online
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    OAB/BA 46.638
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Sigilo profissional
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

          <CityLocalGuide city={city} area="atendimento jurídico generalista" />


          {/* Practice Areas */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Áreas de Atuação em {city.name}
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Atendimento online nas principais áreas do direito para {city.name} e região
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
                Como funciona o atendimento em {city.name}
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
                {faqItems.map((f) => (
                  <Card key={f.q}>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold mb-2">{f.q}</h3>
                      <p className="text-muted-foreground">{f.a}</p>
                    </CardContent>
                  </Card>
                ))}
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
                Fale com o escritório pelo WhatsApp. Atendimento online para
                moradores de {city.name} e região.
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

          {/* Páginas por área desta cidade (as páginas locais com conteúdo próprio) */}
          {cityAreaPages.length > 0 && (
            <section className="py-12 border-b">
              <div className="container mx-auto px-4">
                <h2 className="text-xl font-bold mb-2">Atendimento por área em {city.name}</h2>
                <p className="text-muted-foreground mb-6">
                  Direitos, prazos e onde o caso tramita em {city.name}, área por área.
                </p>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cityAreaPages.map((p) => (
                    <Link
                      key={p.href}
                      to={p.href}
                      className="flex items-center gap-2 p-4 rounded-lg border hover:bg-muted transition-colors"
                    >
                      <Scale className="h-4 w-4 text-primary" />
                      <span>Advogado {p.area} em {city.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

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
            <p>© {new Date().getFullYear()} Riccio Advocacia | OAB/BA 46.638 | Atendendo {city.name}, {city.stateCode}</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default CityLanding;

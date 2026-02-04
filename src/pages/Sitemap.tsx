import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Home, Scale, Calculator, FileText, HelpCircle, 
  Newspaper, BookOpen, Shield, FileCheck, ChevronRight, MapPin,
  Briefcase, Heart, Building, HeartPulse, Gavel, ShoppingBag,
  Plane, AlertCircle, CreditCard, Syringe, Package
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/motion/PageTransition";
import { blogArticles, getNicheInfo } from "@/data/blog-articles";
import { blogPosts } from "@/data/blog-posts";
import { programmaticFAQs, areaLabels } from "@/data/programmatic-faqs";
import { brazilianCities } from "@/data/cities";
import { localSEOArticles } from "@/data/local-seo-articles";
import { getAllLegalAreas } from "@/pages/CityNicheLanding";

const Sitemap = () => {
  const canonicalUrl = "https://advogadoja.lovable.app/sitemap";

  // Group articles by niche
  const articlesByNiche = blogArticles.reduce((acc, article) => {
    if (!acc[article.nicheId]) {
      acc[article.nicheId] = [];
    }
    acc[article.nicheId].push(article);
    return acc;
  }, {} as Record<string, typeof blogArticles>);

  // Group FAQs by area
  const faqsByArea = programmaticFAQs.reduce((acc, faq) => {
    if (!acc[faq.area]) {
      acc[faq.area] = [];
    }
    acc[faq.area].push(faq);
    return acc;
  }, {} as Record<string, typeof programmaticFAQs>);

  // Consumer Landing Pages - NOVO
  const consumerLandings = [
    { name: "Voo Cancelado ou Atrasado", url: "/advogado-voo-cancelado-atrasado", icon: Plane, color: "text-blue-600" },
    { name: "Negativação Indevida (Nome Sujo)", url: "/advogado-negativacao-indevida", icon: AlertCircle, color: "text-red-600" },
    { name: "Plano de Saúde Negou Cobertura", url: "/advogado-plano-saude-cobertura-negada", icon: Heart, color: "text-pink-600" },
    { name: "Fraude Bancária / Golpe Pix", url: "/fraude-bancaria", icon: CreditCard, color: "text-orange-600" },
    { name: "Cobrança Indevida", url: "/advogado-cobranca-indevida", icon: ShoppingBag, color: "text-purple-600" },
    { name: "Produto Defeituoso", url: "/advogado-produto-defeituoso", icon: Package, color: "text-amber-600" },
  ];

  // Surgery Injunctions - NOVO
  const surgeryInjunctions = [
    { name: "Cirurgia Negada (Geral)", url: "/liminar-cirurgia-negada", color: "text-red-500" },
    { name: "Cirurgia Bariátrica", url: "/liminar-cirurgia-bariatrica", color: "text-green-600" },
    { name: "Tratamento de Câncer", url: "/liminar-tratamento-cancer", color: "text-purple-600" },
    { name: "Cirurgia Ortopédica", url: "/liminar-cirurgia-ortopedica", color: "text-blue-600" },
    { name: "Cirurgia Cardíaca", url: "/liminar-cirurgia-cardiaca", color: "text-red-600" },
    { name: "Neurocirurgia", url: "/liminar-neurocirurgia", color: "text-indigo-600" },
    { name: "Cirurgia Oftalmológica", url: "/liminar-cirurgia-olhos", color: "text-cyan-600" },
  ];

  // Regional Hubs - NOVO
  const regionalHubs = [
    { name: "Advogados na Bahia", url: "/advogado-bahia", state: "BA" },
    { name: "Advogados em São Paulo", url: "/advogado-sao-paulo", state: "SP" },
    { name: "Advogados no Rio de Janeiro", url: "/advogado-rio-de-janeiro", state: "RJ" },
    { name: "Advogados em Minas Gerais", url: "/advogado-minas-gerais", state: "MG" },
  ];

  // Consumer Cities - NOVO
  const consumerCities = [
    "sao-paulo", "rio-de-janeiro", "belo-horizonte", "salvador", "brasilia",
    "fortaleza", "curitiba", "recife", "porto-alegre", "goiania",
    "guarulhos", "campinas", "sao-bernardo-do-campo", "santo-andre", "osasco",
    "feira-de-santana", "vitoria-da-conquista", "camacari", "itabuna", "ilheus",
    "juazeiro", "lauro-de-freitas", "barreiras", "jequie", "alagoinhas"
  ];

  // All calculators - ATUALIZADO com todas as 22
  const calculators = [
    // Trabalhista
    { name: "Rescisão Trabalhista", url: "/calculadora-trabalhista", emoji: "💼", area: "trabalhista" },
    { name: "Horas Extras", url: "/calculadora-horas-extras", emoji: "⏰", area: "trabalhista" },
    { name: "FGTS", url: "/calculadora-fgts", emoji: "💰", area: "trabalhista" },
    { name: "Seguro Desemprego", url: "/calculadora-seguro-desemprego", emoji: "📋", area: "trabalhista" },
    { name: "Insalubridade", url: "/calculadora-insalubridade", emoji: "☣️", area: "trabalhista" },
    // Família
    { name: "Pensão Alimentícia", url: "/calculadora-pensao", emoji: "👨‍👩‍👧", area: "familia" },
    { name: "Partilha de Bens", url: "/calculadora-partilha-bens", emoji: "🏠", area: "familia" },
    { name: "Inventário", url: "/calculadora-inventario", emoji: "📜", area: "familia" },
    // Previdenciário
    { name: "Aposentadoria INSS", url: "/calculadora-aposentadoria", emoji: "🧓", area: "previdenciario" },
    { name: "Auxílio-Doença", url: "/calculadora-auxilio-doenca", emoji: "🏥", area: "previdenciario" },
    { name: "BPC/LOAS", url: "/calculadora-bpc-loas", emoji: "♿", area: "previdenciario" },
    { name: "Pensão por Morte", url: "/calculadora-pensao-morte", emoji: "🕯️", area: "previdenciario" },
    // Civil
    { name: "Danos Morais", url: "/calculadora-danos-morais", emoji: "⚖️", area: "civil" },
    { name: "Atualização de Dívida", url: "/calculadora-atualizacao-divida", emoji: "📊", area: "civil" },
    { name: "Aluguel Atrasado", url: "/calculadora-aluguel-atrasado", emoji: "🏢", area: "civil" },
    { name: "DPVAT", url: "/calculadora-dpvat", emoji: "🚗", area: "civil" },
    // Consumidor - NOVO
    { name: "Voo Cancelado", url: "/calculadora-voo-cancelado", emoji: "✈️", area: "consumidor" },
    { name: "Negativação Indevida", url: "/calculadora-negativacao", emoji: "🚫", area: "consumidor" },
    { name: "Devolução em Dobro", url: "/calculadora-devolucao-dobro", emoji: "💸", area: "consumidor" },
    { name: "Plano de Saúde", url: "/calculadora-plano-saude", emoji: "🏥", area: "consumidor" },
    { name: "Fraude Bancária", url: "/calculadora-fraude-bancaria", emoji: "🔒", area: "consumidor" },
    { name: "Liminar Cirurgia", url: "/calculadora-liminar-cirurgia", emoji: "💉", area: "consumidor" },
  ];

  const nicheIcons: Record<string, React.ReactNode> = {
    trabalhista: <Briefcase className="h-5 w-5" />,
    familia: <Heart className="h-5 w-5" />,
    civil: <Building className="h-5 w-5" />,
    previdenciario: <HeartPulse className="h-5 w-5" />,
    penal: <Gavel className="h-5 w-5" />,
    consumidor: <ShoppingBag className="h-5 w-5" />,
  };

  const areaIcons: Record<string, React.ReactNode> = {
    trabalhista: <Briefcase className="h-5 w-5" />,
    familia: <Heart className="h-5 w-5" />,
    civil: <Building className="h-5 w-5" />,
    previdenciario: <HeartPulse className="h-5 w-5" />,
    penal: <Gavel className="h-5 w-5" />,
    consumidor: <ShoppingBag className="h-5 w-5" />,
    geral: <Scale className="h-5 w-5" />,
  };

  // Calculate totals
  const totalPages = 
    10 + // Main pages
    6 + // Practice areas
    consumerLandings.length +
    surgeryInjunctions.length +
    regionalHubs.length +
    calculators.length +
    blogArticles.length +
    blogPosts.length +
    programmaticFAQs.length +
    brazilianCities.length +
    (brazilianCities.length * getAllLegalAreas().length) +
    consumerCities.length +
    localSEOArticles.length;

  // Schema.org for sitemap page
  const sitemapSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Mapa do Site - Advogado Já",
    "description": "Navegue por todas as páginas, artigos, FAQs e calculadoras do Advogado Já",
    "url": canonicalUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Advogado Já",
      "url": "https://advogadoja.lovable.app"
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
        "name": "Mapa do Site",
        "item": canonicalUrl
      }
    ]
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>{`Mapa do Site | Advogado Já - ${totalPages}+ Páginas`}</title>
          <meta name="description" content="Navegue por todas as páginas, artigos jurídicos, perguntas frequentes e calculadoras do Advogado Já. Encontre rapidamente o que você precisa." />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:title" content="Mapa do Site | Advogado Já" />
          <meta property="og:description" content="Navegue por todas as páginas do Advogado Já" />
          <meta property="og:url" content={canonicalUrl} />
          <script type="application/ld+json">{JSON.stringify(sitemapSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        </Helmet>

        <Navbar onCtaClick={() => {}} />

        <main className="container mx-auto px-4 py-8 md:py-12">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Início</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Mapa do Site</span>
          </nav>

          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Mapa do Site</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">
              Navegue por todas as páginas, artigos, perguntas frequentes e calculadoras disponíveis no Advogado Já.
            </p>
            <Badge variant="secondary" className="text-lg px-4 py-2">
              {totalPages}+ páginas indexadas
            </Badge>
          </header>

          <div className="grid gap-8">
            {/* Main Pages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  Páginas Principais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  <Link to="/" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Home className="h-4 w-4 text-primary" />
                    <span>Início</span>
                  </Link>
                  <Link to="/artigos" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <BookOpen className="h-4 w-4 text-primary" />
                    <span>Artigos Jurídicos</span>
                  </Link>
                  <Link to="/blog" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <FileText className="h-4 w-4 text-primary" />
                    <span>Blog</span>
                  </Link>
                  <Link to="/perguntas" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <HelpCircle className="h-4 w-4 text-primary" />
                    <span>Perguntas Frequentes</span>
                  </Link>
                  <Link to="/calculadoras" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Calculator className="h-4 w-4 text-primary" />
                    <span>Calculadoras</span>
                  </Link>
                  <Link to="/noticias" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Newspaper className="h-4 w-4 text-primary" />
                    <span>Notícias</span>
                  </Link>
                  <Link to="/casos-de-sucesso" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Scale className="h-4 w-4 text-primary" />
                    <span>Casos de Sucesso</span>
                  </Link>
                  <Link to="/privacidade" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Política de Privacidade</span>
                  </Link>
                  <Link to="/termos-de-uso" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <FileCheck className="h-4 w-4 text-primary" />
                    <span>Termos de Uso</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Consumer Landing Pages - NOVO */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Problemas do Consumidor
                  <Badge variant="secondary">{consumerLandings.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {consumerLandings.map((page) => (
                    <Link 
                      key={page.url} 
                      to={page.url} 
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <page.icon className={`h-4 w-4 ${page.color}`} />
                      <span className="text-sm">{page.name}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Surgery Injunctions - NOVO */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Syringe className="h-5 w-5 text-primary" />
                  Liminares de Cirurgia
                  <Badge variant="secondary">{surgeryInjunctions.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {surgeryInjunctions.map((page) => (
                    <Link 
                      key={page.url} 
                      to={page.url} 
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <Syringe className={`h-4 w-4 ${page.color}`} />
                      <span className="text-sm">{page.name}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Regional Hubs - NOVO */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Hubs Regionais (Estados)
                  <Badge variant="secondary">{regionalHubs.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {regionalHubs.map((hub) => (
                    <Link 
                      key={hub.url} 
                      to={hub.url} 
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">{hub.name}</span>
                      <Badge variant="outline" className="ml-auto text-xs">{hub.state}</Badge>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Niche Landing Pages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Áreas de Atuação
                  <Badge variant="secondary">6</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  <Link to="/advogado-consumidor" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <ShoppingBag className="h-4 w-4 text-emerald-600" />
                    <span>Consumidor</span>
                  </Link>
                  <Link to="/advogado-trabalhista" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Briefcase className="h-4 w-4 text-blue-600" />
                    <span>Trabalhista</span>
                  </Link>
                  <Link to="/advogado-familia" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Heart className="h-4 w-4 text-pink-600" />
                    <span>Família</span>
                  </Link>
                  <Link to="/advogado-civil" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Building className="h-4 w-4 text-amber-600" />
                    <span>Civil</span>
                  </Link>
                  <Link to="/advogado-previdenciario" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <HeartPulse className="h-4 w-4 text-green-600" />
                    <span>Previdenciário</span>
                  </Link>
                  <Link to="/advogado-criminal" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Gavel className="h-4 w-4 text-red-600" />
                    <span>Criminal</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Calculators - ATUALIZADO */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Calculadoras Jurídicas
                  <Badge variant="secondary">{calculators.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {['consumidor', 'trabalhista', 'familia', 'previdenciario', 'civil'].map((area) => {
                  const areaCalcs = calculators.filter(c => c.area === area);
                  return (
                    <div key={area}>
                      <h3 className="font-semibold flex items-center gap-2 mb-3 text-foreground capitalize">
                        {areaIcons[area]}
                        {area === 'familia' ? 'Família' : area === 'previdenciario' ? 'Previdenciário' : area.charAt(0).toUpperCase() + area.slice(1)} ({areaCalcs.length})
                      </h3>
                      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pl-7">
                        {areaCalcs.map((calc) => (
                          <Link 
                            key={calc.url} 
                            to={calc.url} 
                            className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors"
                          >
                            <span>{calc.emoji}</span>
                            <span className="text-sm">{calc.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Consumer + City Landing Pages - NOVO */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <ShoppingBag className="h-5 w-5 text-primary" />
                  Advogado Consumidor por Cidade
                  <Badge variant="secondary">{consumerCities.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
                  {consumerCities.map((city) => (
                    <Link 
                      key={city} 
                      to={`/advogado-consumidor-${city}`} 
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-muted transition-colors text-sm"
                    >
                      <MapPin className="h-3 w-3 text-primary" />
                      <span className="capitalize">{city.replace(/-/g, ' ')}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Local SEO Articles - NOVO */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Artigos SEO Local
                  <Badge variant="secondary">{localSEOArticles.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {localSEOArticles.map((article) => (
                    <Link 
                      key={article.slug} 
                      to={`/artigos/consumidor/${article.slug}`} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 line-clamp-1"
                    >
                      {article.title}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Blog Posts (New) - NOVO */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Blog Posts (Novos)
                  <Badge variant="secondary">{blogPosts.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {blogPosts.map((post) => (
                    <Link 
                      key={post.slug} 
                      to={`/blog/${post.slug}`} 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 line-clamp-1"
                    >
                      {post.title}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Blog Articles by Niche */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Artigos Jurídicos (Legado)
                  <Badge variant="secondary">{blogArticles.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(articlesByNiche).map(([nicheId, articles]) => {
                  const nicheInfo = getNicheInfo(nicheId);
                  return (
                    <div key={nicheId}>
                      <h3 className="font-semibold flex items-center gap-2 mb-3 text-foreground">
                        {nicheIcons[nicheId]}
                        {nicheInfo?.name || nicheId} ({articles.length})
                      </h3>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 pl-7">
                        {articles.map((article) => (
                          <Link
                            key={article.id}
                            to={`/artigos/${nicheId}/${article.slug}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 line-clamp-1"
                          >
                            {article.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* FAQs by Area */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  Perguntas Frequentes
                  <Badge variant="secondary">{programmaticFAQs.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(faqsByArea).map(([area, faqs]) => (
                  <div key={area}>
                    <h3 className="font-semibold flex items-center gap-2 mb-3 text-foreground">
                      {areaIcons[area]}
                      {areaLabels[area as keyof typeof areaLabels] || area} ({faqs.length})
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 pl-7">
                      {faqs.map((faq) => (
                        <Link
                          key={faq.id}
                          to={`/perguntas/${faq.slug}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 line-clamp-1"
                        >
                          {faq.question}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* City Landing Pages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Advogados por Cidade
                  <Badge variant="secondary">{brazilianCities.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {brazilianCities.map((city) => (
                    <Link
                      key={city.slug}
                      to={`/advogado/${city.slug}`}
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">Advogado em {city.name}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* City + Niche Landing Pages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Advogados por Cidade e Área
                  <Badge variant="secondary">{brazilianCities.length * getAllLegalAreas().length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {getAllLegalAreas().map((area) => (
                  <div key={area.slug}>
                    <h3 className="font-semibold flex items-center gap-2 mb-3 text-foreground">
                      <area.icon className={`h-5 w-5 ${area.color}`} />
                      Advogado {area.name} ({brazilianCities.length} cidades)
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pl-7">
                      {brazilianCities.map((city) => (
                        <Link
                          key={`${area.slug}-${city.slug}`}
                          to={`/advogado-${area.slug}-${city.slug}`}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 line-clamp-1"
                        >
                          {area.name} {city.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Stats */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p className="text-lg font-semibold text-foreground mb-2">
              Total: {totalPages}+ páginas indexadas
            </p>
            <p>
              Atualizado automaticamente | SEO otimizado para Google
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t py-6 mt-12">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Advogado Já | OAB/BA 46.638</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Sitemap;

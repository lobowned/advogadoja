import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Home, Scale, Calculator, FileText, HelpCircle, 
  Newspaper, BookOpen, Shield, FileCheck, ChevronRight,
  Briefcase, Heart, Building, HeartPulse, Gavel, ShoppingBag
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/motion/PageTransition";
import { blogArticles, getNicheInfo } from "@/data/blog-articles";
import { programmaticFAQs, areaLabels } from "@/data/programmatic-faqs";

const Sitemap = () => {
  const canonicalUrl = "https://advogadoonline.com.br/sitemap";

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

  const calculators = [
    { name: "Rescisão Trabalhista", url: "/calculadora-trabalhista", emoji: "💼" },
    { name: "Pensão Alimentícia", url: "/calculadora-pensao", emoji: "👨‍👩‍👧" },
    { name: "Aposentadoria INSS", url: "/calculadora-aposentadoria", emoji: "🧓" },
    { name: "Danos Morais", url: "/calculadora-danos-morais", emoji: "⚖️" },
    { name: "Atualização de Dívida", url: "/calculadora-atualizacao-divida", emoji: "📊" },
    { name: "Partilha de Bens", url: "/calculadora-partilha-bens", emoji: "🏠" },
    { name: "Aluguel Atrasado", url: "/calculadora-aluguel-atrasado", emoji: "🏢" },
    { name: "Horas Extras", url: "/calculadora-horas-extras", emoji: "⏰" },
    { name: "Seguro Desemprego", url: "/calculadora-seguro-desemprego", emoji: "📋" },
    { name: "FGTS", url: "/calculadora-fgts", emoji: "💰" },
    { name: "Pensão por Morte", url: "/calculadora-pensao-morte", emoji: "🕯️" },
    { name: "Auxílio-Doença", url: "/calculadora-auxilio-doenca", emoji: "🏥" },
    { name: "BPC/LOAS", url: "/calculadora-bpc-loas", emoji: "♿" },
    { name: "Inventário", url: "/calculadora-inventario", emoji: "📜" },
    { name: "Insalubridade", url: "/calculadora-insalubridade", emoji: "☣️" },
    { name: "DPVAT", url: "/calculadora-dpvat", emoji: "🚗" },
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
  };

  // Schema.org for sitemap page
  const sitemapSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Mapa do Site - Advogado Online",
    "description": "Navegue por todas as páginas, artigos, FAQs e calculadoras do Advogado Online",
    "url": canonicalUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Advogado Online",
      "url": "https://advogadoonline.com.br"
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
        "name": "Mapa do Site",
        "item": canonicalUrl
      }
    ]
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Mapa do Site | Advogado Online</title>
          <meta name="description" content="Navegue por todas as páginas, artigos jurídicos, perguntas frequentes e calculadoras do Advogado Online. Encontre rapidamente o que você precisa." />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:title" content="Mapa do Site | Advogado Online" />
          <meta property="og:description" content="Navegue por todas as páginas do Advogado Online" />
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navegue por todas as páginas, artigos, perguntas frequentes e calculadoras disponíveis no Advogado Online.
            </p>
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

            {/* Niche Landing Pages */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Áreas de Atuação
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                  <Link to="/advogado-trabalhista" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Briefcase className="h-4 w-4 text-blue-600" />
                    <span>Advogado Trabalhista</span>
                  </Link>
                  <Link to="/advogado-familia" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Heart className="h-4 w-4 text-pink-600" />
                    <span>Advogado de Família</span>
                  </Link>
                  <Link to="/advogado-civil" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Building className="h-4 w-4 text-amber-600" />
                    <span>Advogado Civil</span>
                  </Link>
                  <Link to="/advogado-previdenciario" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <HeartPulse className="h-4 w-4 text-green-600" />
                    <span>Advogado Previdenciário</span>
                  </Link>
                  <Link to="/advogado-criminal" className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                    <Gavel className="h-4 w-4 text-red-600" />
                    <span>Advogado Criminal</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Calculators */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Calculadoras Jurídicas ({calculators.length})
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {calculators.map((calc) => (
                    <Link 
                      key={calc.url} 
                      to={calc.url} 
                      className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors"
                    >
                      <span>{calc.emoji}</span>
                      <span className="text-sm">{calc.name}</span>
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
                  Artigos Jurídicos ({blogArticles.length})
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
                  Perguntas Frequentes ({programmaticFAQs.length})
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
          </div>

          {/* Stats */}
          <div className="mt-12 text-center text-sm text-muted-foreground">
            <p>
              Total: {8 + 5 + calculators.length + blogArticles.length + programmaticFAQs.length} páginas indexadas
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t py-6 mt-12">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Advogado Online | OAB/BA 46.638</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Sitemap;

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Home, Scale, Calculator, FileText, HelpCircle,
  BookOpen, Shield, FileCheck, ChevronRight, MapPin,
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
import { brazilianCities, isCityIndexable } from "@/data/cities";
import { localSEOArticles, isIndexableLocalSEOArticle } from "@/data/local-seo-articles";
import { redirectedPaths } from "@/data/article-redirects";
import { guias } from "@/data/guias";
import { LOCAL_PAGE_ROUTES, LOCAL_CITY_NAMES, LOCAL_NICHE_NAMES } from "@/data/local-page-keys";

/**
 * Mapa do site em HTML. Lista só páginas que existem e são indexáveis — as mesmas do sitemap.xml
 * (scripts/generate-sitemap.ts). Nada de combinar todas as cidades com todas as áreas: só 43
 * combinações têm página própria (LOCAL_PAGE_ROUTES).
 */
const Sitemap = () => {
  const canonicalUrl = "https://riccioadvocacia.online/sitemap";

  const articles = blogArticles.filter((a) => !redirectedPaths.has(`/artigos/${a.nicheId}/${a.slug}`));
  const posts = blogPosts.filter((p) => !redirectedPaths.has(`/blog/${p.slug}`));
  const localArticles = localSEOArticles.filter(isIndexableLocalSEOArticle);
  const cities = brazilianCities.filter((c) => isCityIndexable(c.slug));

  const articlesByNiche = articles.reduce((acc, article) => {
    (acc[article.nicheId] ??= []).push(article);
    return acc;
  }, {} as Record<string, typeof blogArticles>);

  const faqsByArea = programmaticFAQs.reduce((acc, faq) => {
    (acc[faq.area] ??= []).push(faq);
    return acc;
  }, {} as Record<string, typeof programmaticFAQs>);

  const localByNiche = LOCAL_PAGE_ROUTES.reduce((acc, r) => {
    (acc[r.nicheSlug] ??= []).push(r);
    return acc;
  }, {} as Record<string, (typeof LOCAL_PAGE_ROUTES)[number][]>);

  const consumerLandings = [
    { name: "Voo cancelado ou atrasado", url: "/advogado-problemas-voo", icon: Plane, color: "text-blue-600" },
    { name: "Negativação indevida (nome sujo)", url: "/advogado-negativacao-indevida", icon: AlertCircle, color: "text-red-600" },
    { name: "Plano de saúde negou cobertura", url: "/advogado-plano-saude-cobertura-negada", icon: Heart, color: "text-pink-600" },
    { name: "Fraude bancária e golpe do Pix", url: "/fraude-bancaria", icon: CreditCard, color: "text-orange-600" },
    { name: "Cobrança indevida", url: "/advogado-cobranca-indevida", icon: ShoppingBag, color: "text-purple-600" },
    { name: "Produto com defeito", url: "/advogado-produto-defeituoso", icon: Package, color: "text-amber-600" },
    { name: "Cartão consignado (RMC)", url: "/advogado-cartao-consignado", icon: CreditCard, color: "text-emerald-600" },
  ];

  const surgeryInjunctions = [
    { name: "Cirurgia negada (geral)", url: "/liminar-cirurgia-negada" },
    { name: "Cirurgia bariátrica", url: "/liminar-cirurgia-bariatrica" },
    { name: "Tratamento de câncer", url: "/liminar-tratamento-cancer" },
    { name: "Cirurgia ortopédica", url: "/liminar-cirurgia-ortopedica" },
    { name: "Cirurgia cardíaca", url: "/liminar-cirurgia-cardiaca" },
    { name: "Neurocirurgia", url: "/liminar-neurocirurgia" },
    { name: "Cirurgia nos olhos", url: "/liminar-cirurgia-olhos" },
  ];

  const calculators = [
    { name: "Rescisão trabalhista", url: "/calculadora-trabalhista", area: "trabalhista" },
    { name: "Horas extras", url: "/calculadora-horas-extras", area: "trabalhista" },
    { name: "FGTS", url: "/calculadora-fgts", area: "trabalhista" },
    { name: "Seguro-desemprego", url: "/calculadora-seguro-desemprego", area: "trabalhista" },
    { name: "Insalubridade e periculosidade", url: "/calculadora-insalubridade", area: "trabalhista" },
    { name: "Pensão alimentícia", url: "/calculadora-pensao", area: "familia" },
    { name: "Partilha de bens", url: "/calculadora-partilha-bens", area: "familia" },
    { name: "Aposentadoria INSS", url: "/calculadora-aposentadoria", area: "previdenciario" },
    { name: "Auxílio-doença", url: "/calculadora-auxilio-doenca", area: "previdenciario" },
    { name: "BPC/LOAS", url: "/calculadora-bpc-loas", area: "previdenciario" },
    { name: "Pensão por morte", url: "/calculadora-pensao-morte", area: "previdenciario" },
    { name: "Atualização de dívida", url: "/calculadora-atualizacao-divida", area: "civil" },
    { name: "Aluguel atrasado", url: "/calculadora-aluguel-atrasado", area: "civil" },
    { name: "Devolução em dobro", url: "/calculadora-devolucao-dobro", area: "consumidor" },
  ];
  const calculatorAreas: { id: string; name: string }[] = [
    { id: "trabalhista", name: "Trabalhista" },
    { id: "familia", name: "Família" },
    { id: "previdenciario", name: "Previdenciário" },
    { id: "civil", name: "Civil" },
    { id: "consumidor", name: "Consumidor" },
  ];

  const areaIcons: Record<string, React.ReactNode> = {
    trabalhista: <Briefcase className="h-5 w-5" />,
    familia: <Heart className="h-5 w-5" />,
    civil: <Building className="h-5 w-5" />,
    previdenciario: <HeartPulse className="h-5 w-5" />,
    penal: <Gavel className="h-5 w-5" />,
    criminal: <Gavel className="h-5 w-5" />,
    consumidor: <ShoppingBag className="h-5 w-5" />,
    geral: <Scale className="h-5 w-5" />,
  };

  const sitemapSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Mapa do Site - Riccio Advocacia",
    "description": "Todas as páginas, guias, artigos, perguntas e calculadoras do site da Riccio Advocacia.",
    "url": canonicalUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Riccio Advocacia",
      "url": "https://riccioadvocacia.online"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://riccioadvocacia.online" },
      { "@type": "ListItem", "position": 2, "name": "Mapa do Site", "item": canonicalUrl }
    ]
  };

  const linkBox = "flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors";
  const textLink = "text-sm text-muted-foreground hover:text-primary transition-colors py-1 line-clamp-1";

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Mapa do Site | Riccio Advocacia</title>
          <meta name="description" content="Todas as páginas do site da Riccio Advocacia: guias por área, artigos, perguntas frequentes, calculadoras e atendimento por cidade da Bahia." />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:title" content="Mapa do Site | Riccio Advocacia" />
          <meta property="og:description" content="Todas as páginas do site da Riccio Advocacia." />
          <meta property="og:url" content={canonicalUrl} />
          <script type="application/ld+json">{JSON.stringify(sitemapSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        </Helmet>

        <Navbar onCtaClick={() => {}} />

        <main className="container mx-auto px-4 py-8 md:py-12">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Início</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Mapa do Site</span>
          </nav>

          <header className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Mapa do Site</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Guias por área, artigos, perguntas frequentes, calculadoras e atendimento por cidade da Bahia.
            </p>
          </header>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Home className="h-5 w-5 text-primary" />
                  Páginas principais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  <Link to="/" className={linkBox}><Home className="h-4 w-4 text-primary" /><span>Início</span></Link>
                  <Link to="/guias" className={linkBox}><Scale className="h-4 w-4 text-primary" /><span>Guias por área</span></Link>
                  <Link to="/artigos" className={linkBox}><BookOpen className="h-4 w-4 text-primary" /><span>Artigos jurídicos</span></Link>
                  <Link to="/blog" className={linkBox}><FileText className="h-4 w-4 text-primary" /><span>Blog</span></Link>
                  <Link to="/perguntas" className={linkBox}><HelpCircle className="h-4 w-4 text-primary" /><span>Perguntas frequentes</span></Link>
                  <Link to="/calculadoras" className={linkBox}><Calculator className="h-4 w-4 text-primary" /><span>Calculadoras</span></Link>
                  <Link to="/privacidade" className={linkBox}><Shield className="h-4 w-4 text-primary" /><span>Política de privacidade</span></Link>
                  <Link to="/termos-de-uso" className={linkBox}><FileCheck className="h-4 w-4 text-primary" /><span>Termos de uso</span></Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Guias por área
                  <Badge variant="secondary">{guias.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {guias.map((g) => (
                    <Link key={g.slug} to={`/guia/${g.slug}`} className={textLink}>{g.h1}</Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Áreas de atuação
                  <Badge variant="secondary">6</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                  <Link to="/advogado-consumidor" className={linkBox}><ShoppingBag className="h-4 w-4 text-emerald-600" /><span>Consumidor</span></Link>
                  <Link to="/advogado-trabalhista" className={linkBox}><Briefcase className="h-4 w-4 text-blue-600" /><span>Trabalhista</span></Link>
                  <Link to="/advogado-familia" className={linkBox}><Heart className="h-4 w-4 text-pink-600" /><span>Família</span></Link>
                  <Link to="/advogado-civil" className={linkBox}><Building className="h-4 w-4 text-amber-600" /><span>Civil</span></Link>
                  <Link to="/advogado-previdenciario" className={linkBox}><HeartPulse className="h-4 w-4 text-green-600" /><span>Previdenciário</span></Link>
                  <Link to="/advogado-criminal" className={linkBox}><Gavel className="h-4 w-4 text-red-600" /><span>Criminal</span></Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Atendimento por cidade da Bahia
                  <Badge variant="secondary">{cities.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  <Link to="/advogado-bahia" className={linkBox}>
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm">Advogado na Bahia</span>
                  </Link>
                  {cities.map((city) => (
                    <Link key={city.slug} to={`/advogado/${city.slug}`} className={linkBox}>
                      <MapPin className="h-4 w-4 text-primary" />
                      <span className="text-sm">Advogado em {city.name}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="h-5 w-5 text-primary" />
                  Advogado por área e cidade
                  <Badge variant="secondary">{LOCAL_PAGE_ROUTES.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(localByNiche).map(([niche, routes]) => (
                  <div key={niche}>
                    <h3 className="font-semibold flex items-center gap-2 mb-3 text-foreground">
                      {areaIcons[niche]}
                      {LOCAL_NICHE_NAMES[niche] ?? niche}
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pl-7">
                      {routes.map((r) => (
                        <Link key={r.key} to={`/advogado-${r.key}`} className={textLink}>
                          {LOCAL_NICHE_NAMES[r.nicheSlug] ?? r.nicheSlug} em {LOCAL_CITY_NAMES[r.citySlug] ?? r.citySlug}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-primary" />
                  Problemas do consumidor
                  <Badge variant="secondary">{consumerLandings.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {consumerLandings.map((page) => (
                    <Link key={page.url} to={page.url} className={linkBox}>
                      <page.icon className={`h-4 w-4 ${page.color}`} />
                      <span className="text-sm">{page.name}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Syringe className="h-5 w-5 text-primary" />
                  Plano de saúde: cirurgia e tratamento negados
                  <Badge variant="secondary">{surgeryInjunctions.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {surgeryInjunctions.map((page) => (
                    <Link key={page.url} to={page.url} className={linkBox}>
                      <Syringe className="h-4 w-4 text-primary" />
                      <span className="text-sm">{page.name}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5 text-primary" />
                  Calculadoras
                  <Badge variant="secondary">{calculators.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {calculatorAreas.map((area) => (
                  <div key={area.id}>
                    <h3 className="font-semibold flex items-center gap-2 mb-3 text-foreground">
                      {areaIcons[area.id]}
                      {area.name}
                    </h3>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 pl-7">
                      {calculators.filter((c) => c.area === area.id).map((calc) => (
                        <Link key={calc.url} to={calc.url} className={textLink}>{calc.name}</Link>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Consumidor nas cidades da Bahia
                  <Badge variant="secondary">{localArticles.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {localArticles.map((article) => (
                    <Link key={article.slug} to={`/artigos/consumidor/${article.slug}`} className={textLink}>
                      {article.title}
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Blog
                  <Badge variant="secondary">{posts.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                  {posts.map((post) => (
                    <Link key={post.slug} to={`/blog/${post.slug}`} className={textLink}>{post.title}</Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary" />
                  Artigos jurídicos
                  <Badge variant="secondary">{articles.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {Object.entries(articlesByNiche).map(([nicheId, list]) => (
                  <div key={nicheId}>
                    <h3 className="font-semibold flex items-center gap-2 mb-3 text-foreground">
                      {areaIcons[nicheId]}
                      {getNicheInfo(nicheId)?.name || nicheId} ({list.length})
                    </h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 pl-7">
                      {list.map((article) => (
                        <Link key={article.id} to={`/artigos/${nicheId}/${article.slug}`} className={textLink}>
                          {article.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  Perguntas frequentes
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
                        <Link key={faq.id} to={`/perguntas/${faq.slug}`} className={textLink}>{faq.question}</Link>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </main>

        <footer className="border-t py-6 mt-12">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Riccio Advocacia | Dr. Gilberto Riccio, OAB/BA 46.638</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default Sitemap;

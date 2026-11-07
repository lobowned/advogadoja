import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  MapPin, 
  Clock, 
  CheckCircle, 
  Phone, 
  ChevronRight,
  Calculator,
  ArrowRight,
  Plane,
  CreditCard,
  Heart,
  AlertCircle,
  ShoppingBag,
  FileText
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// Navbar removed - using simple header instead
import CTASection from "@/components/CTASection";
import { 
  getLocalSEOArticleBySlug, 
  getRelatedLocalSEOArticles,
  LocalSEOArticle as LocalSEOArticleType,
  isIndexableLocalSEOArticle,
} from "@/data/local-seo-articles";
import { getArticleBySlug } from "@/data/blog-articles";
import { LOCAL_PAGE_KEYS } from "@/data/local-page-keys";
import BlogPost from "@/pages/BlogPost";

// Links internos só para páginas que existem: os dados apontavam para
// /advogado-consumidor-<cidade> sem página local e para /problemas/..., que davam 404.
const LOCAL_KEYS = new Set<string>(LOCAL_PAGE_KEYS);
const PROBLEM_PAGES: Record<string, string> = {
  "/problemas/voo-cancelado": "/advogado-problemas-voo",
  "/problemas/negativacao": "/advogado-negativacao-indevida",
  "/problemas/negativacao-indevida": "/advogado-negativacao-indevida",
  "/problemas/plano-saude": "/advogado-plano-saude-cobertura-negada",
  "/problemas/fraude-bancaria": "/fraude-bancaria",
  "/problemas/cobranca-indevida": "/advogado-cobranca-indevida",
  "/problemas/produto-defeituoso": "/advogado-produto-defeituoso",
};

const problemIcons: Record<string, React.ReactNode> = {
  "voo-cancelado": <Plane className="h-5 w-5" />,
  "plano-saude": <Heart className="h-5 w-5" />,
  "negativacao": <AlertCircle className="h-5 w-5" />,
  "fraude-bancaria": <CreditCard className="h-5 w-5" />,
  "produto-defeituoso": <ShoppingBag className="h-5 w-5" />,
  "cobranca-indevida": <FileText className="h-5 w-5" />
};

const LocalSEOArticle = () => {
  const { localSlug } = useParams<{ localSlug: string }>();
  
  const article = localSlug ? getLocalSEOArticleBySlug(localSlug) : undefined;
  
  if (!article) {
    // /artigos/consumidor/:slug também serve os artigos do blog do nicho consumidor
    // (esta rota ranqueia acima de /artigos/:nicheId/:slug no React Router v6).
    if (localSlug && getArticleBySlug("consumidor", localSlug)) {
      return <BlogPost nicheIdOverride="consumidor" slugOverride={localSlug} />;
    }
    return <Navigate to="/404" replace />;
  }
  
  const relatedArticles = getRelatedLocalSEOArticles(article.slug, 3);
  const hasLocalLanding = LOCAL_KEYS.has(article.relatedLandingPage.replace(/^\/advogado-/, ""));
  const landingHref = hasLocalLanding ? article.relatedLandingPage : "/advogado-consumidor";
  const landingLabel = hasLocalLanding
    ? `Advogado do Consumidor em ${article.cityName}`
    : "Advogado do Consumidor Online";
  const problemHref = PROBLEM_PAGES[article.relatedProblemPage] ?? "/guia/consumidor";
  const readingTime = Math.ceil(
    (article.content.intro.length + 
     article.content.localContext.length + 
     article.content.steps.reduce((acc, step) => acc + step.description.length, 0)) / 1000
  ) + 5;
  
  // Schema.org structured data
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "author": {
      "@type": "Person",
      "name": "Gilberto Riccio",
      "jobTitle": "Advogado OAB/BA 46.638"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Riccio Advocacia",
      "logo": {
        "@type": "ImageObject",
        "url": "https://riccioadvocacia.online/og-image.png"
      }
    },
    "datePublished": article.updatedAt,
    "dateModified": article.updatedAt,
    "about": {
      "@type": "City",
      "name": article.cityName,
      "containedIn": {
        "@type": "State",
        "name": article.state
      }
    },
    "keywords": article.keywords.join(", ")
  };
  
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.content.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
  
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Riccio Advocacia",
    "description": `Atendimento online em direito do consumidor para quem mora em ${article.cityName}, ${article.state}. Dr. Gilberto Riccio, OAB/BA 46.638.`,
    "url": `https://riccioadvocacia.online/artigos/consumidor/${article.slug}`,
    "telephone": "+55-71-99703-6269",
    // Escritório digital: só a cidade atendida, sem coordenadas nem endereço
    "areaServed": { "@type": "City", "name": article.cityName }
  };
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://riccioadvocacia.online"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Artigos",
        "item": "https://riccioadvocacia.online/artigos"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Consumidor",
        "item": "https://riccioadvocacia.online/artigos/consumidor"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": article.title,
        "item": `https://riccioadvocacia.online/artigos/consumidor/${article.slug}`
      }
    ]
  };

  const whatsappLink = `https://wa.me/5571997036269?text=${encodeURIComponent(`Olá! Vi o artigo sobre ${article.problemLabel} em ${article.cityName} e gostaria de falar com um advogado.`)}`;

  return (
    <>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.keywords.join(", ")} />
        {/* Fora da Bahia o escritório não atende presencialmente: página fica acessível, mas fora do índice. */}
        {!isIndexableLocalSEOArticle(article) && <meta name="robots" content="noindex,follow" />}
        <link rel="canonical" href={`https://riccioadvocacia.online/artigos/consumidor/${article.slug}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://riccioadvocacia.online/artigos/consumidor/${article.slug}`} />
        <meta property="og:locale" content="pt_BR" />
        
        {/* Article meta */}
        <meta property="article:published_time" content={article.updatedAt} />
        <meta property="article:modified_time" content={article.updatedAt} />
        <meta property="article:section" content="Direito do Consumidor" />
        {article.keywords.map((keyword, index) => (
          <meta key={index} property="article:tag" content={keyword} />
        ))}
        
        {/* Schema.org */}
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      {/* Simple header with logo */}
      <header className="bg-background border-b py-4">
        <div className="container mx-auto px-4">
          <Link to="/" className="text-2xl font-bold text-primary">Riccio Advocacia</Link>
        </div>
      </header>
      
      <main className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="bg-muted/30 border-b">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex items-center text-sm text-muted-foreground">
              <Link to="/" className="hover:text-primary transition-colors">Início</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <Link to="/artigos" className="hover:text-primary transition-colors">Artigos</Link>
              <ChevronRight className="h-4 w-4 mx-2" />
              <span className="text-foreground font-medium truncate max-w-[200px]">
                {article.problemLabel} em {article.cityName}
              </span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/5 to-background py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  <MapPin className="h-4 w-4" />
                  {article.cityName}, {article.stateCode}
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                  {problemIcons[article.problemType] || <FileText className="h-4 w-4" />}
                  {article.problemLabel}
                </span>
                {article.airportCode && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm">
                    <Plane className="h-4 w-4" />
                    Aeroporto {article.airportCode}
                  </span>
                )}
              </div>
              
              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                {article.title}
              </h1>
              
              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {readingTime} min de leitura
                </span>
                <span>Atualizado em {new Date(article.updatedAt.slice(0, 10) + "T12:00:00").toLocaleDateString('pt-BR')}</span>
              </div>
              
              {/* CTA Button */}
              <Button asChild size="lg" className="shadow-lg">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="h-5 w-5 mr-2" />
                  Falar com Advogado
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-lg font-semibold text-center mb-6">
                Em resumo: {article.problemLabel} em {article.cityName}
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {article.content.statistics.map((stat, index) => (
                  <Card key={index} className="text-center">
                    <CardContent className="pt-6">
                      <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <article className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {article.content.intro}
                </p>
              </div>

              {/* Local Context */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <MapPin className="h-6 w-6 text-primary" />
                  Contexto Local: {article.cityName}
                </h2>
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {article.content.localContext}
                    </p>
                  </CardContent>
                </Card>
              </section>

              {/* Steps */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">O Que Fazer: Passo a Passo</h2>
                <div className="space-y-4">
                  {article.content.steps.map((step, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="flex">
                          <div className="flex-shrink-0 w-16 bg-primary flex items-center justify-center">
                            <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                          </div>
                          <div className="p-4">
                            <h3 className="font-semibold text-lg mb-1">{step.title}</h3>
                            <p className="text-muted-foreground">{step.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>

              {/* Local Info */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Informações Úteis em {article.cityName}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-2 text-primary">PROCON</h3>
                      <p className="text-muted-foreground text-sm">{article.content.localInfo.procon}</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="pt-6">
                      <h3 className="font-semibold text-lg mb-2 text-primary">Tribunal / Juizado</h3>
                      <p className="text-muted-foreground text-sm">{article.content.localInfo.tribunal}</p>
                    </CardContent>
                  </Card>
                </div>
                {article.content.localInfo.additionalInfo && (
                  <Card className="mt-4 bg-muted/50">
                    <CardContent className="pt-6">
                      <p className="text-muted-foreground text-sm">
                        <strong>Dica:</strong> {article.content.localInfo.additionalInfo}
                      </p>
                    </CardContent>
                  </Card>
                )}
              </section>

              {/* FAQs */}
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Perguntas Frequentes sobre {article.problemLabel} em {article.cityName}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {article.content.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>

              {/* Calculator CTA */}
              {article.relatedCalculator && (
                <section className="mb-12">
                  <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
                    <CardContent className="pt-6">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-primary/20 rounded-full">
                            <Calculator className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">Faça a conta do seu caso</h3>
                            <p className="text-muted-foreground text-sm">
                              A calculadora estima o valor pela regra da lei. É uma estimativa, não uma garantia.
                            </p>
                          </div>
                        </div>
                        <Button asChild>
                          <Link to={article.relatedCalculator}>
                            Usar Calculadora
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </section>
              )}

              {/* Final CTA */}
              <section className="mb-12">
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="pt-6 pb-6 text-center">
                    <h2 className="text-2xl font-bold mb-2">
                      Teve Problema com {article.problemLabel} em {article.cityName}?
                    </h2>
                    <p className="mb-6 opacity-90">
                      Fale agora com um advogado e saiba seus direitos
                    </p>
                    <Button asChild size="lg" variant="secondary" className="shadow-lg">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        <Phone className="h-5 w-5 mr-2" />
                        Falar com Advogado
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </section>

              {/* Related Articles */}
              {relatedArticles.length > 0 && (
                <section className="mb-12">
                  <h2 className="text-2xl font-bold mb-6">Artigos Relacionados</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {relatedArticles.map((related) => (
                      <Card key={related.id} className="hover:shadow-md transition-shadow">
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                            <MapPin className="h-4 w-4" />
                            {related.cityName}, {related.stateCode}
                          </div>
                          <h3 className="font-semibold mb-2 line-clamp-2">
                            {related.problemLabel} em {related.cityName}
                          </h3>
                          <Link 
                            to={`/artigos/consumidor/${related.slug}`}
                            className="text-primary text-sm font-medium hover:underline inline-flex items-center"
                          >
                            Ler artigo
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              )}

              {/* Internal Links */}
              <section className="border-t pt-8">
                <h3 className="font-semibold mb-4">Veja também:</h3>
                <div className="flex flex-wrap gap-2">
                  <Link
                    to={landingHref}
                    className="text-sm px-3 py-1.5 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                  >
                    {landingLabel}
                  </Link>
                  <Link
                    to={problemHref}
                    className="text-sm px-3 py-1.5 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                  >
                    {article.problemLabel}: Seus Direitos
                  </Link>
                  {article.relatedCalculator && (
                    <Link 
                      to={article.relatedCalculator}
                      className="text-sm px-3 py-1.5 bg-muted rounded-full hover:bg-muted/80 transition-colors"
                    >
                      Calculadora
                    </Link>
                  )}
                </div>
              </section>
            </div>
          </div>
        </article>

        <CTASection />
      </main>
    </>
  );
};

export default LocalSEOArticle;

import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Share2, MessageCircle, ChevronRight, Scale, Tag, Calculator, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import { 
  getFAQBySlug, 
  getRelatedFAQs, 
  areaLabels, 
  areaColors,
  programmaticFAQs,
} from '@/data/programmatic-faqs';
import { getRelatedCalculatorsForFAQ, getRelatedArticlesForFAQ } from '@/data/faq-internal-links';
import PageTransition from '@/components/motion/PageTransition';

const FAQQuestion = () => {
  const { slug } = useParams<{ slug: string }>();
  const faq = slug ? getFAQBySlug(slug) : undefined;

  if (!faq) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar onCtaClick={() => {}} />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold mb-4">Pergunta não encontrada</h1>
          <Link to="/perguntas">
            <Button>Ver todas as perguntas</Button>
          </Link>
        </div>
      </div>
    );
  }

  const relatedFAQs = getRelatedFAQs(faq.id);
  const otherFAQs = programmaticFAQs
    .filter(f => f.area === faq.area && f.id !== faq.id)
    .slice(0, 4);
  
  // Get related calculators and articles
  const relatedCalculators = getRelatedCalculatorsForFAQ(faq);
  const relatedArticles = getRelatedArticlesForFAQ(faq);

  const canonicalUrl = `https://advogadoja.lovable.app/perguntas/${faq.slug}`;
  
  // Build related links for Schema.org
  const relatedLinks = [
    ...relatedCalculators.map(c => `https://advogadoja.lovable.app${c.url}`),
    ...relatedArticles.map(a => `https://advogadoja.lovable.app/artigos/${a.nicheId}/${a.slug}`)
  ];
  
  // Schema.org FAQPage - Enhanced for FAQ rich snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01",
    "author": {
      "@type": "Organization",
      "name": "Advogado Online",
      "url": "https://advogadoonline.com.br"
    },
    "mainEntity": [{
      "@type": "Question",
      "name": faq.question,
      "url": canonicalUrl,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer.replace(/\*\*/g, '').replace(/\n/g, ' '),
        "dateCreated": "2025-01-01"
      }
    }]
  };

  // Schema.org Article - Enhanced with more properties
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": faq.question,
    "description": faq.metaDescription || faq.answer.substring(0, 160),
    "datePublished": "2025-01-01",
    "dateModified": "2025-01-01",
    "author": {
      "@type": "Organization",
      "name": "Advogado Online",
      "url": "https://advogadoonline.com.br",
      "logo": {
        "@type": "ImageObject",
        "url": "https://advogadoonline.com.br/favicon.svg"
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": "Advogado Online",
      "url": "https://advogadoonline.com.br",
      "logo": {
        "@type": "ImageObject",
        "url": "https://advogadoonline.com.br/favicon.svg",
        "width": 60,
        "height": 60
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    },
    "keywords": faq.keywords.join(", "),
    "articleSection": areaLabels[faq.area],
    "inLanguage": "pt-BR",
    ...(relatedLinks.length > 0 && { "relatedLink": relatedLinks })
  };

  // Schema.org BreadcrumbList - For breadcrumb rich snippets
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
        "name": "Perguntas Frequentes",
        "item": "https://advogadoonline.com.br/perguntas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": areaLabels[faq.area],
        "item": `https://advogadoonline.com.br/perguntas?area=${faq.area}`
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": faq.question,
        "item": canonicalUrl
      }
    ]
  };

  // Schema.org WebPage - Additional context
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": faq.question,
    "description": faq.metaDescription || faq.answer.substring(0, 160),
    "url": canonicalUrl,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Advogado Online",
      "url": "https://advogadoonline.com.br"
    },
    "about": {
      "@type": "Thing",
      "name": areaLabels[faq.area]
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".prose"]
    }
  };

  const shareOnWhatsApp = () => {
    const text = `${faq.question}\n\nVeja a resposta completa: ${canonicalUrl}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  // Process markdown-like formatting
  const formatAnswer = (text: string) => {
    return text
      .split('\n\n')
      .map((paragraph, idx) => {
        // Headers
        if (paragraph.startsWith('**') && paragraph.endsWith(':**')) {
          return (
            <h3 key={idx} className="font-semibold text-lg mt-6 mb-3 text-foreground">
              {paragraph.replace(/\*\*/g, '').replace(':', '')}
            </h3>
          );
        }
        
        // Bold headers in the middle
        if (paragraph.includes(':**')) {
          const parts = paragraph.split(':**');
          if (parts.length === 2) {
            return (
              <div key={idx} className="mb-4">
                <h4 className="font-semibold text-foreground mb-2">
                  {parts[0].replace(/\*\*/g, '')}
                </h4>
                <p className="text-muted-foreground">{parts[1].trim()}</p>
              </div>
            );
          }
        }

        // Lists
        if (paragraph.includes('\n- ')) {
          const lines = paragraph.split('\n');
          const title = lines[0];
          const items = lines.slice(1).filter(l => l.startsWith('- '));
          return (
            <div key={idx} className="mb-4">
              {title && (
                <p className="font-medium text-foreground mb-2">
                  {title.replace(/\*\*/g, '')}
                </p>
              )}
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {items.map((item, i) => (
                  <li key={i}>{item.replace('- ', '').replace(/\*\*/g, '')}</li>
                ))}
              </ul>
            </div>
          );
        }

        // Regular paragraphs with bold
        const formattedText = paragraph.split(/(\*\*.*?\*\*)/).map((part, i) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={i} className="font-semibold text-foreground">{part.slice(2, -2)}</strong>;
          }
          return part;
        });

        return (
          <p key={idx} className="text-muted-foreground mb-4 leading-relaxed">
            {formattedText}
          </p>
        );
      });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>{faq.question} | Advogado Online</title>
          <meta name="description" content={faq.metaDescription || faq.answer.substring(0, 160)} />
          <meta name="keywords" content={faq.keywords.join(', ')} />
          <link rel="canonical" href={canonicalUrl} />
          
          {/* Open Graph */}
          <meta property="og:title" content={faq.question} />
          <meta property="og:description" content={faq.metaDescription || faq.answer.substring(0, 160)} />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="article" />
          
          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={faq.question} />
          <meta name="twitter:description" content={faq.metaDescription || faq.answer.substring(0, 160)} />
          
          {/* Schema.org */}
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(webPageSchema)}</script>
        </Helmet>

        <Navbar onCtaClick={() => {}} />

        <main className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Início</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/perguntas" className="hover:text-primary">Perguntas</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={`/perguntas?area=${faq.area}`} className="hover:text-primary">
              {areaLabels[faq.area]}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground truncate max-w-[200px]">{faq.question}</span>
          </nav>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <article className="lg:col-span-2 space-y-6">
              <Card>
                <CardContent className="p-6 lg:p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <Badge className={`${areaColors[faq.area]} text-white`}>
                      {areaLabels[faq.area]}
                    </Badge>
                    <Button variant="ghost" size="icon" onClick={shareOnWhatsApp}>
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>

                  <h1 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                    {faq.question}
                  </h1>

                  <Separator className="my-6" />

                  {/* Answer */}
                  <div className="prose prose-lg max-w-none">
                    {formatAnswer(faq.answer)}
                  </div>

                  {/* Keywords */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-muted-foreground">Palavras-chave:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {faq.keywords.map((keyword, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Related Calculators Section */}
              {relatedCalculators.length > 0 && (
                <Card className="border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Calculator className="h-5 w-5 text-primary" />
                      <h2 className="font-semibold text-foreground">
                        Calculadoras Úteis
                      </h2>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Use nossas calculadoras gratuitas para simular valores relacionados:
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {relatedCalculators.map((calc) => (
                        <Link
                          key={calc.type}
                          to={calc.url}
                          className="flex items-start gap-3 p-3 rounded-lg bg-background hover:bg-muted transition-colors border"
                        >
                          <span className="text-2xl">{calc.emoji}</span>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-sm text-foreground line-clamp-1">
                              {calc.title}
                            </p>
                            <p className="text-xs text-muted-foreground line-clamp-2">
                              {calc.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Related Articles Section */}
              {relatedArticles.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-5 w-5 text-primary" />
                      <h2 className="font-semibold text-foreground">
                        Artigos Relacionados
                      </h2>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Aprofunde seu conhecimento com nossos artigos completos:
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {relatedArticles.map((article) => (
                        <Link
                          key={article.id}
                          to={`/artigos/${article.nicheId}/${article.slug}`}
                          className="block p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <h3 className="font-medium text-sm text-foreground mb-2 line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {article.excerpt}
                          </p>
                        </Link>
                      ))}
                    </div>
                    <Link 
                      to="/artigos"
                      className="inline-flex items-center gap-1 mt-4 text-sm text-primary hover:underline"
                    >
                      Ver todos os artigos
                      <ChevronRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              )}

              {/* CTA */}
              <Card className="border-primary/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Scale className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">
                        Precisa de ajuda com seu caso?
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Fale com um advogado especializado e receba orientação personalizada para sua situação.
                      </p>
                      <Link to="/">
                        <Button className="w-full sm:w-auto">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Falar com Advogado
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Related Questions */}
              {relatedFAQs.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-semibold text-foreground mb-4">
                      Perguntas relacionadas
                    </h2>
                    <div className="space-y-3">
                      {relatedFAQs.map((related) => (
                        <Link
                          key={related.id}
                          to={`/perguntas/${related.slug}`}
                          className="block p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <p className="text-sm text-foreground line-clamp-2">
                            {related.question}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* More from same area */}
              {otherFAQs.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h2 className="font-semibold text-foreground mb-4">
                      Mais sobre {areaLabels[faq.area]}
                    </h2>
                    <div className="space-y-3">
                      {otherFAQs.map((other) => (
                        <Link
                          key={other.id}
                          to={`/perguntas/${other.slug}`}
                          className="block p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                        >
                          <p className="text-sm text-foreground line-clamp-2">
                            {other.question}
                          </p>
                        </Link>
                      ))}
                    </div>
                    <Link 
                      to={`/perguntas?area=${faq.area}`}
                      className="block mt-4 text-sm text-primary hover:underline"
                    >
                      Ver todas →
                    </Link>
                  </CardContent>
                </Card>
              )}

              {/* Share */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="font-semibold text-foreground mb-4">
                    Compartilhar
                  </h2>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={shareOnWhatsApp}
                  >
                    <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Compartilhar no WhatsApp
                  </Button>
                </CardContent>
              </Card>
            </aside>
          </div>

          {/* Back link */}
          <div className="mt-8">
            <Link to="/perguntas">
              <Button variant="ghost">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar para todas as perguntas
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default FAQQuestion;

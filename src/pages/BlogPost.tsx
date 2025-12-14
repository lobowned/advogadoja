import { Link, useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Scale, Clock, CheckCircle, FileText, AlertCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import BlogCard from "@/components/BlogCard";
import { getArticleBySlug, getNicheInfo, getRelatedArticles } from "@/data/blog-articles";

const BlogPost = () => {
  const { nicheId, slug } = useParams();
  
  if (!nicheId || !slug) {
    return <Navigate to="/artigos" replace />;
  }
  
  const article = getArticleBySlug(nicheId, slug);
  const nicheInfo = getNicheInfo(nicheId);
  
  if (!article || !nicheInfo) {
    return <Navigate to="/artigos" replace />;
  }
  
  const relatedArticles = getRelatedArticles(article);

  const nicheColors: Record<string, string> = {
    trabalhista: "bg-blue-500/10 text-blue-600 border-blue-200",
    familia: "bg-pink-500/10 text-pink-600 border-pink-200",
    civil: "bg-amber-500/10 text-amber-600 border-amber-200",
    previdenciario: "bg-green-500/10 text-green-600 border-green-200",
    penal: "bg-red-500/10 text-red-600 border-red-200",
  };

  // Schema.org Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "Advogado Online"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Advogado Online",
      "logo": {
        "@type": "ImageObject",
        "url": "https://advogadoonline.com.br/favicon.svg"
      }
    },
    "datePublished": article.updatedAt,
    "dateModified": article.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://advogadoonline.com.br/artigos/${nicheId}/${slug}`
    }
  };

  // Schema.org FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": article.content.faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{article.metaTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="keywords" content={article.keywords.join(", ")} />
        <link rel="canonical" href={`https://advogadoonline.com.br/artigos/${nicheId}/${slug}`} />
        
        <meta property="og:title" content={article.metaTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://advogadoonline.com.br/artigos/${nicheId}/${slug}`} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.metaTitle} />
        <meta name="twitter:description" content={article.metaDescription} />
        
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
                <Scale className="w-6 h-6" />
                <span className="font-bold text-lg">Advogado Online</span>
              </Link>
              <Button asChild variant="outline" size="sm">
                <Link to="/">Falar com Advogado</Link>
              </Button>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <nav className="border-b bg-muted/30">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground">Início</Link>
              <span>/</span>
              <Link to="/artigos" className="hover:text-foreground">Artigos</Link>
              <span>/</span>
              <Link to={`/artigos/${nicheId}`} className="hover:text-foreground">{nicheInfo.name}</Link>
              <span>/</span>
              <span className="text-foreground truncate max-w-[200px]">{article.title}</span>
            </div>
          </div>
        </nav>

        {/* Article Content */}
        <article className="container mx-auto px-4 py-8 md:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <header className="mb-8">
              <Link 
                to={`/artigos/${nicheId}`}
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Voltar para {nicheInfo.name}
              </Link>
              
              <Badge 
                variant="outline" 
                className={`mb-4 ${nicheColors[nicheId]}`}
              >
                {nicheInfo.name}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {article.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-4">
                {article.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  5 min de leitura
                </span>
                <span>Atualizado em {new Date(article.updatedAt).toLocaleDateString('pt-BR')}</span>
              </div>
            </header>

            {/* Introduction */}
            <section className="prose prose-lg max-w-none mb-8">
              <p className="text-lg leading-relaxed">{article.content.intro}</p>
            </section>

            {/* What Is Section */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                O que é?
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {article.content.whatIs}
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* When You Have Right */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6 text-green-600" />
                Quando você tem direito?
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-3">
                    {article.content.whenYouHaveRight.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Documents */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-blue-600" />
                Documentos Necessários
              </h2>
              <Card>
                <CardContent className="pt-6">
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {article.content.documents.map((doc, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 rounded-full bg-blue-600" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            {/* Deadlines */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-amber-600" />
                Prazos Importantes
              </h2>
              <Card className="border-amber-200 bg-amber-50/50">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {article.content.deadlines}
                  </p>
                </CardContent>
              </Card>
            </section>

            {/* FAQ */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <MessageCircle className="w-6 h-6 text-primary" />
                Perguntas Frequentes
              </h2>
              <Accordion type="single" collapsible className="w-full">
                {article.content.faq.map((item, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left font-medium">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* CTA */}
            <section className="mb-12">
              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-xl">Precisa de ajuda com seu caso?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Fale agora com um advogado especialista em {nicheInfo.name}. 
                    Atendimento gratuito e imediato.
                  </p>
                  <Button asChild size="lg">
                    <Link to="/">Falar com Advogado Agora</Link>
                  </Button>
                </CardContent>
              </Card>
            </section>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <section>
                <h2 className="text-xl font-bold mb-6">Artigos Relacionados</h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {relatedArticles.map((relatedArticle) => (
                    <BlogCard key={relatedArticle.id} article={relatedArticle} variant="compact" />
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>

        {/* Footer */}
        <footer className="border-t py-6 mt-12">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Advogado Online | OAB/BA 46.638</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default BlogPost;
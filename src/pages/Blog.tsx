import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Scale, Briefcase, Users, Shield, Gavel, Newspaper, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import BlogCard from "@/components/BlogCard";
import { NewsCard } from "@/components/NewsCard";
import ArticleSearch from "@/components/blog/ArticleSearch";
import FloatingCTA from "@/components/blog/FloatingCTA";
import NewsletterSignup from "@/components/blog/NewsletterSignup";
import { blogArticles, niches, getArticlesByNiche, getNicheInfo } from "@/data/blog-articles";
import { useRecentNews } from "@/hooks/useNews";
import { decodeHtmlEntities } from "@/utils/reading-time";

const nicheIcons: Record<string, React.ReactNode> = {
  trabalhista: <Briefcase className="w-5 h-5" />,
  familia: <Users className="w-5 h-5" />,
  civil: <Scale className="w-5 h-5" />,
  previdenciario: <Shield className="w-5 h-5" />,
  penal: <Gavel className="w-5 h-5" />,
};

const nicheColors: Record<string, string> = {
  trabalhista: "bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 border-blue-200",
  familia: "bg-pink-500/10 text-pink-600 hover:bg-pink-500/20 border-pink-200",
  civil: "bg-amber-500/10 text-amber-600 hover:bg-amber-500/20 border-amber-200",
  previdenciario: "bg-green-500/10 text-green-600 hover:bg-green-500/20 border-green-200",
  penal: "bg-red-500/10 text-red-600 hover:bg-red-500/20 border-red-200",
};

const Blog = () => {
  const { nicheId } = useParams();
  const selectedNiche = nicheId ? getNicheInfo(nicheId) : null;
  const articles = nicheId ? getArticlesByNiche(nicheId) : blogArticles;
  
  const { data: recentNews, isLoading: isLoadingNews } = useRecentNews(6);
  
  const featuredArticles = articles.slice(0, 3);
  const remainingArticles = articles.slice(3);

  const pageTitle = selectedNiche 
    ? `Artigos sobre ${selectedNiche.name} | Advogado Online`
    : "Artigos Jurídicos | Advogado Online";
  
  const pageDescription = selectedNiche
    ? `Leia artigos completos sobre ${selectedNiche.name}. ${selectedNiche.description}`
    : "Central de conhecimento jurídico. Artigos completos sobre Direito Trabalhista, Família, Civil, Previdenciário e Criminal.";

  // Decode HTML entities in news titles
  const processedNews = recentNews?.map(article => ({
    ...article,
    title: decodeHtmlEntities(article.title),
    excerpt: article.excerpt ? decodeHtmlEntities(article.excerpt) : null,
  }));

  // Schema.org WebSite with SearchAction
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Advogado Online",
    "url": "https://advogadoonline.com.br",
    "description": "Central de conhecimento jurídico com artigos sobre direitos trabalhistas, família, civil, previdenciário e criminal.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://advogadoonline.com.br/artigos?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  // Schema.org ItemList for article listings
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": selectedNiche ? `Artigos sobre ${selectedNiche.name}` : "Artigos Jurídicos",
    "description": pageDescription,
    "numberOfItems": articles.length,
    "itemListElement": articles.slice(0, 10).map((article, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "url": `https://advogadoonline.com.br/artigos/${article.nicheId}/${article.slug}`,
      "name": article.title
    }))
  };

  // Schema.org CollectionPage
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": pageTitle,
    "description": pageDescription,
    "url": `https://advogadoonline.com.br/artigos${nicheId ? `/${nicheId}` : ""}`,
    "mainEntity": {
      "@type": "ItemList",
      "numberOfItems": articles.length
    }
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <link rel="canonical" href={`https://advogadoonline.com.br/artigos${nicheId ? `/${nicheId}` : ""}`} />
        <script type="application/ld+json">
          {JSON.stringify(websiteSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(itemListSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(collectionPageSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between mb-6">
              <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
                <Scale className="w-6 h-6" />
                <span className="font-bold text-lg">Advogado Online</span>
              </Link>
              <Button asChild variant="outline" size="sm">
                <Link to="/">Falar com Advogado</Link>
              </Button>
            </div>
            
            {nicheId && (
              <Link 
                to="/artigos" 
                className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-4"
              >
                <ArrowLeft className="w-4 h-4" />
                Todos os artigos
              </Link>
            )}
            
            <div className="max-w-3xl">
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                {selectedNiche ? (
                  <span className="flex items-center gap-3">
                    {nicheIcons[nicheId!]}
                    {selectedNiche.name}
                  </span>
                ) : (
                  "Central de Conhecimento Jurídico"
                )}
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                {selectedNiche 
                  ? selectedNiche.description
                  : "Artigos completos e gratuitos sobre seus direitos. Escrito por advogados especialistas."}
              </p>
              
              {/* Search */}
              <ArticleSearch />
            </div>
          </div>
        </header>

        {/* Niche Filters */}
        {!nicheId && (
          <div className="border-b bg-muted/30">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-wrap gap-2">
                {niches.map((niche) => (
                  <Link key={niche.id} to={`/artigos/${niche.slug}`}>
                    <Badge 
                      variant="outline" 
                      className={`cursor-pointer transition-all text-sm py-1.5 px-3 ${nicheColors[niche.id]}`}
                    >
                      <span className="mr-1.5">{nicheIcons[niche.id]}</span>
                      {niche.name}
                    </Badge>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <main className="container mx-auto px-4 py-8 md:py-12">
          {/* Recent News Section */}
          {!nicheId && (
            <section className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <Newspaper className="w-5 h-5 text-primary" />
                  Notícias Recentes
                </h2>
                <Link to="/noticias" className="text-sm text-primary hover:underline flex items-center gap-1">
                  Ver todas <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              {isLoadingNews ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div key={i} className="space-y-2">
                      <Skeleton className="h-4 w-20" />
                      <Skeleton className="h-5 w-full" />
                      <Skeleton className="h-4 w-2/3" />
                    </div>
                  ))}
                </div>
              ) : processedNews && processedNews.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {processedNews.map((article) => (
                    <NewsCard key={article.id} article={article} variant="compact" />
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 bg-muted/30 rounded-lg">
                  <p className="text-muted-foreground">
                    Nenhuma notícia disponível. <Link to="/noticias" className="text-primary hover:underline">Clique aqui</Link> para atualizar.
                  </p>
                </div>
              )}
            </section>
          )}

          {/* Featured Articles */}
          {featuredArticles.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-6">
                {selectedNiche ? "Artigos em Destaque" : "Mais Lidos"}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredArticles.map((article) => (
                  <BlogCard key={article.id} article={article} variant="featured" />
                ))}
              </div>
            </section>
          )}

          {/* All Articles */}
          {remainingArticles.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-6">Todos os Artigos</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {remainingArticles.map((article) => (
                  <BlogCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          )}

          {/* Newsletter Signup */}
          <section className="mb-12 max-w-xl mx-auto">
            <NewsletterSignup nicheId={nicheId} />
          </section>

          {/* Empty State */}
          {articles.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                Nenhum artigo encontrado nesta categoria.
              </p>
              <Button asChild>
                <Link to="/artigos">Ver todos os artigos</Link>
              </Button>
            </div>
          )}
        </main>

        {/* CTA Section */}
        <section className="border-t bg-gradient-to-b from-primary/5 to-background py-12">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-3">Tem dúvidas sobre seu caso?</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Fale agora com um advogado especialista. Atendimento gratuito e imediato.
            </p>
            <Button asChild size="lg">
              <Link to="/">Falar com Advogado Agora</Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Advogado Online | OAB/BA 46.638</p>
            <div className="flex justify-center gap-4 mt-2">
              <Link to="/termos-de-uso" className="hover:text-foreground transition-colors">
                Termos de Uso
              </Link>
              <Link to="/privacidade" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </Link>
            </div>
          </div>
        </footer>

        {/* Floating CTA */}
        <FloatingCTA />
      </div>
    </>
  );
};

export default Blog;

import { useParams, Navigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { getPostBySlug, getAllPosts } from "@/data/blog-posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, Calendar, ArrowLeft, Share2, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import ReadingProgressBar from "@/components/blog/ReadingProgressBar";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const BlogArticle = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  
  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts
    .filter(p => p.id !== post.id)
    .slice(0, 3);

  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.metaDescription,
    "image": post.featuredImage || "https://advogado.online/og-image.png",
    "author": {
      "@type": "Organization",
      "name": post.author,
      "url": "https://advogado.online"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Advogado Já",
      "logo": {
        "@type": "ImageObject",
        "url": "https://advogado.online/logo.png"
      }
    },
    "datePublished": post.publishedAt,
    "dateModified": post.updatedAt,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://advogado.online/blog/${post.slug}`
    },
    "keywords": post.keywords.join(", ")
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": "https://advogado.online"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://advogado.online/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://advogado.online/blog/${post.slug}`
      }
    ]
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.metaDescription,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords.join(", ")} />
        <link rel="canonical" href={`https://advogado.online/blog/${post.slug}`} />
        
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:url" content={`https://advogado.online/blog/${post.slug}`} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.publishedAt} />
        <meta property="article:modified_time" content={post.updatedAt} />
        <meta property="article:section" content={post.category} />
        {post.keywords.map((keyword, index) => (
          <meta key={index} property="article:tag" content={keyword} />
        ))}
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={post.metaTitle} />
        <meta name="twitter:description" content={post.metaDescription} />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <ReadingProgressBar />
      <Navbar onCtaClick={() => {}} />
      
      <main className="min-h-screen bg-background pt-20">
        <article className="container mx-auto px-4 py-8 max-w-4xl">
          <BreadcrumbNav items={breadcrumbs} />
          
          <header className="mb-8">
            <Button variant="ghost" size="sm" asChild className="mb-4">
              <Link to="/blog" className="flex items-center gap-1">
                <ArrowLeft className="w-4 h-4" /> Voltar ao Blog
              </Link>
            </Button>
            
            <div className="flex items-center gap-3 mb-4">
              <Badge variant="secondary" className="text-sm">
                {post.category}
              </Badge>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                {post.readingTime} min de leitura
              </span>
              <span className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                  day: '2-digit',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between border-b border-border pb-4">
              <p className="text-muted-foreground">
                Por <span className="text-foreground font-medium">{post.author}</span>
              </p>
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="w-4 h-4 mr-2" /> Compartilhar
              </Button>
            </div>
          </header>

          <div 
            className="prose prose-lg max-w-none dark:prose-invert 
              prose-headings:text-foreground 
              prose-p:text-muted-foreground 
              prose-a:text-primary 
              prose-strong:text-foreground
              prose-ul:text-muted-foreground
              prose-ol:text-muted-foreground
              prose-li:text-muted-foreground"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <footer className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="text-sm text-muted-foreground mr-2">Tags:</span>
              {post.keywords.map((keyword, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {keyword}
                </Badge>
              ))}
            </div>

            {relatedPosts.length > 0 && (
              <section className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Artigos Relacionados
                </h2>
                <div className="grid gap-4 md:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <Badge variant="secondary" className="w-fit text-xs mb-2">
                          {relatedPost.category}
                        </Badge>
                        <CardTitle className="text-base line-clamp-2">
                          <Link 
                            to={`/blog/${relatedPost.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {relatedPost.title}
                          </Link>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Link 
                          to={`/blog/${relatedPost.slug}`}
                          className="text-sm text-primary flex items-center gap-1 hover:underline"
                        >
                          Ler artigo <ArrowRight className="w-3 h-3" />
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Precisa de Ajuda Jurídica?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Nossa equipe de advogados está pronta para analisar seu caso gratuitamente e orientar sobre os próximos passos.
              </p>
              <Button size="lg" asChild>
                <Link to="/">
                  Falar com Advogado Agora
                </Link>
              </Button>
            </section>
          </footer>
        </article>
      </main>

      <FloatingWhatsApp />
    </>
  );
};

export default BlogArticle;

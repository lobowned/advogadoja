import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { getAllPosts } from "@/data/blog-posts";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, ArrowRight, BookOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const BlogIndex = () => {
  const posts = getAllPosts();
  
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Blog" }
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Blog Advogado Já",
    "description": "Artigos sobre direitos do consumidor, trânsito, finanças e orientação jurídica gratuita.",
    "url": "https://advogadoja.lovable.app/blog",
    "publisher": {
      "@type": "Organization",
      "name": "Advogado Já",
      "logo": {
        "@type": "ImageObject",
        "url": "https://advogadoja.lovable.app/logo.png"
      }
    },
    "blogPost": posts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.metaDescription,
      "url": `https://advogadoja.lovable.app/blog/${post.slug}`,
      "datePublished": post.publishedAt,
      "dateModified": post.updatedAt,
      "author": {
        "@type": "Organization",
        "name": post.author
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Blog Advogado Já | Artigos sobre Direito do Consumidor, Trânsito e Finanças</title>
        <meta name="description" content="Artigos completos sobre direitos do consumidor, multas de trânsito, superendividamento e muito mais. Orientação jurídica gratuita." />
        <meta name="keywords" content="blog jurídico, direito do consumidor, multas de trânsito, superendividamento, orientação jurídica, advogado online" />
        <link rel="canonical" href="https://advogadoja.lovable.app/blog" />
        
        <meta property="og:title" content="Blog Advogado Já | Orientação Jurídica Gratuita" />
        <meta property="og:description" content="Artigos completos sobre direitos do consumidor, multas de trânsito, superendividamento e muito mais." />
        <meta property="og:url" content="https://advogadoja.lovable.app/blog" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <Navbar onCtaClick={() => {}} />
      
      <main className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-8">
          <BreadcrumbNav items={breadcrumbs} />
          
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Blog Advogado Já
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Artigos completos sobre seus direitos. Informação jurídica de qualidade para você tomar as melhores decisões.
            </p>
          </header>

          <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {posts.map((post) => (
              <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {post.readingTime} min
                    </span>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors line-clamp-2">
                    <Link to={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-end">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {new Date(post.publishedAt).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/blog/${post.slug}`} className="flex items-center gap-1">
                        Ler <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
            <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Não encontrou o que procurava?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Nossa equipe de advogados está pronta para esclarecer suas dúvidas e orientar sobre seu caso específico.
            </p>
            <Button size="lg" asChild>
              <Link to="/">
                Falar com Advogado Grátis
              </Link>
            </Button>
          </section>
        </div>
      </main>

      <FloatingWhatsApp />
    </>
  );
};

export default BlogIndex;

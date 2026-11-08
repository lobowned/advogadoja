import { Link, useParams, useLocation, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Scale, Briefcase, Users, Shield, Gavel, ShoppingBag,
  CheckCircle, ArrowRight, MessageCircle, Clock, 
  Star, Phone, FileText 
} from "lucide-react";
import PageTransition from "@/components/motion/PageTransition";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlogCard from "@/components/BlogCard";
import { niches, getArticlesByNiche, getArticleBySlug, getNicheInfo } from "@/data/blog-articles";
import { LOCAL_PAGE_ROUTES, LOCAL_CITY_NAMES } from "@/data/local-page-keys";
import { nicheData } from "@/data/niche-pages";

const nicheIcons: Record<string, React.ReactNode> = {
  consumidor: <ShoppingBag className="w-8 h-8" />,
  trabalhista: <Briefcase className="w-8 h-8" />,
  familia: <Users className="w-8 h-8" />,
  civil: <Scale className="w-8 h-8" />,
  previdenciario: <Shield className="w-8 h-8" />,
  penal: <Gavel className="w-8 h-8" />,
};

const NicheLanding = () => {
  // As rotas são fixas (/advogado-consumidor etc.), sem parâmetro: sem o pathname,
  // nicheSlug ficava vazio e as 6 páginas de área redirecionavam para a página inicial.
  const { nicheSlug: nicheParam } = useParams();
  const { pathname } = useLocation();
  const nicheSlug = nicheParam ?? pathname.replace(/^\/+|\/+$/g, "");

  // Map slug to niche ID
  const slugToId: Record<string, string> = {
    "advogado-consumidor": "consumidor",
    "advogado-trabalhista": "trabalhista",
    "advogado-familia": "familia",
    "advogado-civil": "civil",
    "advogado-previdenciario": "previdenciario",
    "advogado-criminal": "penal",
  };
  
  const nicheId = slugToId[nicheSlug || ""];
  const data = nicheId ? nicheData[nicheId] : null;
  const nicheInfo = nicheId ? getNicheInfo(nicheId) : null;
  // Destaques da área primeiro (artigos novos ou mais procurados), completando até 3 com os demais.
  const destacados = nicheId
    ? (data?.destaques ?? []).flatMap((s) => {
        const a = getArticleBySlug(nicheId, s);
        return a ? [a] : [];
      })
    : [];
  const articles = nicheId
    ? [...destacados, ...getArticlesByNiche(nicheId).filter((a) => !destacados.includes(a))].slice(0, 3)
    : [];
  
  if (!data || !nicheInfo) {
    return <Navigate to="/" replace />;
  }

  const whatsappUrl = `https://wa.me/5571997036269?text=${encodeURIComponent(data.whatsappText)}`;
  const localLinks = data.localNiche
    ? LOCAL_PAGE_ROUTES.filter((r) => r.nicheSlug === data.localNiche).map((r) => ({
        href: `/advogado-${r.key}`,
        city: LOCAL_CITY_NAMES[r.citySlug] ?? r.citySlug,
      }))
    : [];

  // Schema.org
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": `Riccio Advocacia · ${data.title}`,
    "description": data.heroDescription,
    "url": `https://riccioadvocacia.online/${data.slug}`,
    "areaServed": "Brasil",
    "serviceType": nicheInfo.name,
  };

  return (
    <PageTransition variant="slideUp">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="keywords" content={data.keywords.join(", ")} />
        <link rel="canonical" href={`https://riccioadvocacia.online/${data.slug}`} />
        
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={`https://riccioadvocacia.online/${data.slug}`} />
        
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
                <Scale className="w-6 h-6" />
                <span className="font-bold text-lg">Riccio Advocacia</span>
              </Link>
              <div className="flex items-center gap-2">
                <Button asChild variant="ghost" size="sm" className="hidden sm:flex">
                  <Link to="/artigos">Artigos</Link>
                </Button>
                <Button asChild size="sm">
                  <Link to="/">Falar Agora</Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <BackButton to="/" label="Voltar ao início" className="mb-6" />
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  {nicheIcons[nicheId]}
                </div>
              </div>
              
              <Badge variant="outline" className="mb-4">
                {data.subtitle}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {data.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {data.heroDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar com Advogado
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link to={`/artigos/${nicheId}`}>
                    <FileText className="w-5 h-5 mr-2" />
                    Ler Artigos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {data.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Como funciona o atendimento
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {data.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Cases */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Casos que Atendemos
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Atuamos em todas as questões de {nicheInfo.name}. Veja os casos mais comuns:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {data.commonCases.map((caseItem, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{caseItem.title}</h3>
                    <p className="text-sm text-muted-foreground">{caseItem.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        {articles.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Artigos sobre {nicheInfo.name}</h2>
                <Button asChild variant="ghost" size="sm">
                  <Link to={`/artigos/${nicheId}`}>
                    Ver todos
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <BlogCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Quer entender o seu caso?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Conte o que aconteceu pelo WhatsApp ou pelo chat. A primeira resposta indica quais
              documentos reunir e quais prazos observar em {nicheInfo.name}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Iniciar Conversa
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Guia da área e páginas por cidade (links internos) */}
        {(data.guideSlug || localLinks.length > 0) && (
          <section className="py-16 border-b">
            <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-8">
              {data.guideSlug && (
                <div>
                  <h2 className="text-xl font-bold mb-3">Guia completo</h2>
                  <p className="text-muted-foreground mb-4">
                    Direitos, prazos, documentos e perguntas frequentes de {nicheInfo.name}, explicados em linguagem simples.
                  </p>
                  <Link to={`/guia/${data.guideSlug}`} className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                    Ler o guia de {nicheInfo.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
              {localLinks.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-3">Atendimento na sua cidade</h2>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    {localLinks.map((l) => (
                      <li key={l.href}>
                        <Link to={l.href} className="hover:underline">{l.city}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Other Niches */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-center mb-8">
              Outras Áreas de Atuação
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {niches
                .filter(n => n.id !== nicheId)
                .map((niche) => (
                  <Link 
                    key={niche.id} 
                    to={`/${Object.entries(slugToId).find(([_, v]) => v === niche.id)?.[0] || ""}`}
                  >
                    <Badge 
                      variant="outline" 
                      className="cursor-pointer hover:bg-muted transition-colors py-2 px-4"
                    >
                      {niche.name}
                    </Badge>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Riccio Advocacia | OAB/BA 46.638</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default NicheLanding;
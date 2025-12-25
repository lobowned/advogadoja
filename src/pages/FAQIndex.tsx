import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Search, Scale, Users, Briefcase, Heart, Shield, Gavel, HelpCircle, ChevronRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import { 
  programmaticFAQs, 
  areaLabels, 
  areaColors,
  searchFAQs,
  getFAQsByArea
} from '@/data/programmatic-faqs';
import PageTransition from '@/components/motion/PageTransition';

const areaIcons: Record<string, React.ReactNode> = {
  trabalhista: <Briefcase className="h-5 w-5" />,
  familia: <Heart className="h-5 w-5" />,
  previdenciario: <Users className="h-5 w-5" />,
  civil: <Scale className="h-5 w-5" />,
  consumidor: <Shield className="h-5 w-5" />,
  penal: <Gavel className="h-5 w-5" />,
  geral: <HelpCircle className="h-5 w-5" />
};

const FAQIndex = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  const selectedArea = searchParams.get('area');

  const filteredFAQs = useMemo(() => {
    let faqs = programmaticFAQs;
    
    if (selectedArea) {
      faqs = getFAQsByArea(selectedArea);
    }
    
    if (searchQuery.trim()) {
      faqs = searchFAQs(searchQuery);
      if (selectedArea) {
        faqs = faqs.filter(f => f.area === selectedArea);
      }
    }
    
    return faqs;
  }, [searchQuery, selectedArea]);

  const areas = useMemo(() => {
    const counts: Record<string, number> = {};
    programmaticFAQs.forEach(faq => {
      counts[faq.area] = (counts[faq.area] || 0) + 1;
    });
    return Object.entries(areaLabels).map(([key, label]) => ({
      key,
      label,
      count: counts[key] || 0,
      icon: areaIcons[key]
    }));
  }, []);

  const canonicalUrl = 'https://advogadoonline.com.br/perguntas';

  // Schema.org for FAQ index
  const faqListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Perguntas Frequentes sobre Direito",
    "description": "Tire suas dúvidas jurídicas: trabalhista, família, previdenciário, civil, consumidor e penal. Respostas claras de advogados.",
    "url": canonicalUrl,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": filteredFAQs.slice(0, 10).map((faq, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${canonicalUrl}/${faq.slug}`,
        "name": faq.question
      }))
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
        "name": "Perguntas Frequentes",
        "item": canonicalUrl
      }
    ]
  };

  const handleAreaClick = (area: string | null) => {
    if (area) {
      setSearchParams({ area });
    } else {
      setSearchParams({});
    }
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Perguntas Frequentes sobre Direito | Advogado Online</title>
          <meta 
            name="description" 
            content="Tire suas dúvidas jurídicas: trabalhista, família, previdenciário, civil, consumidor e penal. Respostas claras e objetivas de advogados especializados." 
          />
          <meta 
            name="keywords" 
            content="perguntas frequentes direito, dúvidas jurídicas, FAQ advogado, direito trabalhista, direito família, previdenciário, consumidor" 
          />
          <link rel="canonical" href={canonicalUrl} />
          
          <meta property="og:title" content="Perguntas Frequentes sobre Direito" />
          <meta property="og:description" content="Tire suas dúvidas jurídicas com respostas claras de advogados especializados." />
          <meta property="og:url" content={canonicalUrl} />
          <meta property="og:type" content="website" />
          
          <script type="application/ld+json">{JSON.stringify(faqListSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        </Helmet>

        <Navbar onCtaClick={() => {}} />

        <main className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Início</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">Perguntas Frequentes</span>
          </nav>

          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Perguntas Frequentes sobre Direito
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Encontre respostas claras e objetivas para suas dúvidas jurídicas. 
              Conteúdo elaborado por advogados especializados.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar perguntas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          {/* Area filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            <Button
              variant={!selectedArea ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleAreaClick(null)}
            >
              Todas ({programmaticFAQs.length})
            </Button>
            {areas.map((area) => (
              <Button
                key={area.key}
                variant={selectedArea === area.key ? 'default' : 'outline'}
                size="sm"
                onClick={() => handleAreaClick(area.key)}
                className="gap-2"
              >
                {area.icon}
                {area.label} ({area.count})
              </Button>
            ))}
          </div>

          {/* Results count */}
          {(searchQuery || selectedArea) && (
            <p className="text-center text-muted-foreground mb-6">
              {filteredFAQs.length} pergunta{filteredFAQs.length !== 1 ? 's' : ''} encontrada{filteredFAQs.length !== 1 ? 's' : ''}
              {selectedArea && ` em ${areaLabels[selectedArea]}`}
            </p>
          )}

          {/* FAQ Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredFAQs.map((faq) => (
              <Link key={faq.id} to={`/perguntas/${faq.slug}`}>
                <Card className="h-full hover:shadow-md transition-shadow cursor-pointer group">
                  <CardContent className="p-5">
                    <Badge 
                      className={`${areaColors[faq.area]} text-white text-xs mb-3`}
                    >
                      {areaLabels[faq.area]}
                    </Badge>
                    <h2 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                      {faq.question}
                    </h2>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {faq.answer.replace(/\*\*/g, '').substring(0, 120)}...
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* No results */}
          {filteredFAQs.length === 0 && (
            <div className="text-center py-12">
              <HelpCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Nenhuma pergunta encontrada
              </h3>
              <p className="text-muted-foreground mb-4">
                Tente buscar com outras palavras ou remova os filtros.
              </p>
              <Button variant="outline" onClick={() => {
                setSearchQuery('');
                setSearchParams({});
              }}>
                Limpar filtros
              </Button>
            </div>
          )}

          {/* CTA */}
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  Não encontrou sua dúvida?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Fale diretamente com um advogado especializado e receba orientação personalizada para seu caso.
                </p>
                <Link to="/">
                  <Button size="lg">
                    Falar com Advogado
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </PageTransition>
  );
};

export default FAQIndex;

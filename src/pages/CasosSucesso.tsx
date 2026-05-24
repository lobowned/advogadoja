import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { m } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Clock, MapPin, TrendingUp, Filter, MessageCircle } from 'lucide-react';
import { BackButton } from '@/components/BackButton';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { successStories, areaLabels, areaColors, type SuccessStory } from '@/data/success-stories';
import PageTransition from "@/components/motion/PageTransition";

const CasosSucesso = () => {
  const [selectedArea, setSelectedArea] = useState<SuccessStory['area'] | 'all'>('all');
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const filteredStories = selectedArea === 'all' 
    ? successStories 
    : successStories.filter(s => s.area === selectedArea);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(value);
  };

  const areas = ['all', 'trabalhista', 'familia', 'previdenciario', 'civil', 'consumidor'] as const;

  return (
    <PageTransition variant="fade">
      <Helmet>
        <title>Casos de Sucesso | Advogado Já - Resultados Reais</title>
        <meta name="description" content="Conheça casos reais de sucesso. Veja como ajudamos milhares de clientes a conquistar seus direitos em ações trabalhistas, de família, previdenciárias e mais." />
        <link rel="canonical" href="https://advogadoja.lovable.app/casos-de-sucesso" />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-gradient-to-r from-primary to-primary/80 text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <BackButton to="/" label="Voltar ao início" variant="light" className="mb-6" />
            
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Trophy className="w-8 h-8 text-yellow-300" />
                <span className="text-yellow-300 font-semibold">Resultados Comprovados</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Casos de Sucesso
              </h1>
              <p className="text-lg md:text-xl text-white/90">
                Conheça histórias reais de clientes que conquistaram seus direitos. 
                Todos os casos são anonimizados para proteger a privacidade dos envolvidos.
              </p>
            </div>
          </div>
        </header>

        {/* Filters */}
        <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b z-40 py-4">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              <Filter className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              {areas.map(area => (
                <button
                  key={area}
                  onClick={() => setSelectedArea(area)}
                  className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    selectedArea === area
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                  }`}
                >
                  {area === 'all' ? 'Todos' : areaLabels[area]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Stories Grid */}
        <main className="container mx-auto px-4 py-12">
          <div 
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {filteredStories.map((story, index) => {
              const colors = areaColors[story.area];
              
              return (
                <m.div
                  key={story.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow border-border/50">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} ${colors.border} border`}>
                            {areaLabels[story.area]}
                          </span>
                          <h2 className="text-lg font-bold mt-3 text-foreground">
                            {story.title}
                          </h2>
                        </div>
                        {story.value && (
                          <div className="text-right flex-shrink-0">
                            <p className="text-xs text-muted-foreground">Resultado</p>
                            <p className="text-lg font-bold text-primary">
                              {formatCurrency(story.value)}
                            </p>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground mb-1">O Problema</h3>
                        <p className="text-sm text-foreground">{story.problem}</p>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-semibold text-muted-foreground mb-1">A Solução</h3>
                        <p className="text-sm text-foreground">{story.solution}</p>
                      </div>
                      
                      <div className="bg-primary/5 rounded-lg p-3 border border-primary/10">
                        <h3 className="text-sm font-semibold text-primary mb-1 flex items-center gap-1">
                          <TrendingUp className="w-4 h-4" />
                          Resultado
                        </h3>
                        <p className="text-sm text-foreground">{story.result}</p>
                      </div>
                      
                      <div className="flex items-center justify-between pt-2 border-t border-border/50 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {story.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" />
                          {story.city}/{story.state}
                        </div>
                        <span>{story.year}</span>
                      </div>
                    </CardContent>
                  </Card>
                </m.div>
              );
            })}
          </div>

          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Nenhum caso encontrado para esta área.</p>
            </div>
          )}
        </main>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16 border-t">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Seu caso também pode ser um sucesso
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cada caso é único, mas nossa experiência e dedicação são constantes. 
              Fale com um advogado especialista e descubra como podemos ajudar você.
            </p>
            <Button asChild size="lg" className="btn-startup text-white gap-2">
              <Link to="/#lawyer-chat">
                <MessageCircle className="w-5 h-5" />
                Consultar Meu Caso Gratuitamente
              </Link>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t bg-muted/30">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>
              * Todos os casos são reais e anonimizados para preservar a privacidade dos clientes.
              Os valores e resultados variam conforme as particularidades de cada situação.
            </p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default CasosSucesso;

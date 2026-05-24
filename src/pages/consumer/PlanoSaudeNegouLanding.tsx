import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  HeartPulse, Clock, DollarSign, CheckCircle, ArrowRight, 
  MessageCircle, Shield, AlertTriangle, Star, Phone, Stethoscope
} from "lucide-react";
import PageTransition from "@/components/motion/PageTransition";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const PlanoSaudeNegouLanding = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Consumidor", href: "/advogado-consumidor" },
    { label: "Plano de Saúde Negou" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Plano de Saúde - Negativa de Cobertura",
    "description": "Advogado especialista em negativas de plano de saúde. Cirurgia negada, exame negado. Liminar em 24-48h.",
    "areaServed": "Brasil",
    "serviceType": ["Negativa Plano de Saúde", "Liminar de Saúde", "Direito do Consumidor"],
  };

  const deniedProcedures = [
    { procedure: "Cirurgias (bariátrica, ortopédica, etc.)", solution: "Liminar em 24-48h" },
    { procedure: "Exames (ressonância, tomografia, PET-CT)", solution: "Autorização judicial urgente" },
    { procedure: "Internação hospitalar", solution: "Liminar em até 24h" },
    { procedure: "Medicamentos de alto custo", solution: "Ação judicial + liminar" },
    { procedure: "Home care / internação domiciliar", solution: "Ação com pedido urgente" },
    { procedure: "Tratamento oncológico", solution: "Liminar prioritária" },
    { procedure: "Próteses e órteses", solution: "Ação de obrigação de fazer" },
    { procedure: "Tratamento psiquiátrico", solution: "Liminar em 24-48h" },
  ];

  const commonExcuses = [
    "Carência não cumprida",
    "Procedimento não está no rol da ANS",
    "Falta de autorização prévia",
    "Doença pré-existente",
    "Hospital/médico fora da rede",
    "Limite de sessões atingido",
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Advogado para Problemas com Plano de Saúde | Cobertura Negada</title>
        <meta name="description" content="Plano de saúde negou seu tratamento ou cirurgia? Fale com um advogado especialista em direito da saúde e garanta seus direitos." />
        <meta name="keywords" content="plano saúde negou, negativa plano de saúde, liminar plano saúde, cirurgia negada, exame negado plano, advogado plano de saúde, cobertura negada" />
        <link rel="canonical" href="https://advogadoja.lovable.app/advogado-plano-saude-cobertura-negada" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Header */}
        <header className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <BackButton />
              <Link to="/" className="flex items-center gap-2">
                <span className="text-lg font-semibold">Advogado Já</span>
              </Link>
              <Button asChild size="sm" className="bg-red-600 hover:bg-red-700">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-1" />
                  URGENTE
                </a>
              </Button>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6">
          <BreadcrumbNav items={breadcrumbs} />
        </div>

        {/* Hero */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-100 animate-pulse">
              <AlertTriangle className="w-4 h-4 mr-1" />
              Urgente: Sua saúde não pode esperar!
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Plano de Saúde Negou?
              <span className="block text-red-600">Liminar em 24-48 Horas</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Cirurgia, exame, internação ou medicamento negado? 
              A maioria das negativas são ilegais. Conseguimos autorização judicial urgente.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg py-6 px-8">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Preciso de Liminar URGENTE
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg py-6 px-8">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Urgente
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-600" />
                <span>Atendimento urgente</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Liminar em 24-48h</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Advogados especialistas</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-red-600 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">3.000+</div>
                <div className="text-red-100">Liminares obtidas</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-red-100">Liminares deferidas</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24-48h</div>
                <div className="text-red-100">Tempo médio liminar</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24h</div>
                <div className="text-red-100">Atendimento</div>
              </div>
            </div>
          </div>
        </section>

        {/* Procedures Table */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            O Que Podemos Conseguir Para Você
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            A Justiça frequentemente obriga os planos a cobrir procedimentos negados.
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="bg-card rounded-xl border overflow-hidden">
              <div className="bg-red-600 text-white p-4">
                <div className="grid grid-cols-2 font-semibold">
                  <span>Procedimento Negado</span>
                  <span className="text-right">O Que Fazemos</span>
                </div>
              </div>
              {deniedProcedures.map((row, index) => (
                <div key={index} className={`p-4 grid grid-cols-2 ${index % 2 === 0 ? 'bg-muted/30' : ''}`}>
                  <span>{row.procedure}</span>
                  <span className="text-right font-semibold text-red-600">{row.solution}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Excuses */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Desculpas que os Planos Usam (e São Ilegais)
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Essas são as justificativas mais comuns para negar cobertura - e na maioria dos casos, são ilegais.
            </p>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {commonExcuses.map((excuse, index) => (
                <Card key={index} className="border-red-200">
                  <CardContent className="p-4 flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0" />
                    <span className="text-sm">{excuse}</span>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-lg font-semibold text-red-600 mb-4">
                Recebeu alguma dessas justificativas? A Justiça pode reverter!
              </p>
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Analisar Minha Negativa Grátis
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How Liminar Works */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Conseguimos Liminar em 24-48h
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Análise Urgente</h3>
                <p className="text-sm text-muted-foreground">
                  Avaliamos sua negativa e pedido médico imediatamente.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Petição Urgente</h3>
                <p className="text-sm text-muted-foreground">
                  Entramos com ação e pedido de liminar no mesmo dia.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Decisão do Juiz</h3>
                <p className="text-sm text-muted-foreground">
                  Em casos urgentes, juízes decidem em 24-48 horas.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">4</span>
                </div>
                <h3 className="font-semibold mb-2">Procedimento Autorizado</h3>
                <p className="text-sm text-muted-foreground">
                  Com a liminar, o plano é obrigado a autorizar imediatamente.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sua Saúde Não Pode Esperar
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              A cada dia de espera, sua situação pode piorar. 
              Não deixe o plano de saúde decidir sobre sua vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg py-6 px-8">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Preciso de Liminar Agora
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg py-6 px-8 border-white text-white hover:bg-white/10">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Urgente
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Advogado Já - Todos os direitos reservados</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default PlanoSaudeNegouLanding;

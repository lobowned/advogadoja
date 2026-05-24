import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  AlertTriangle, CheckCircle, ArrowRight, MessageCircle, 
  Shield, DollarSign, Star, Phone, FileX, Clock
} from "lucide-react";
import PageTransition from "@/components/motion/PageTransition";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const NegativacaoIndevidaLanding = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Consumidor", href: "/advogado-consumidor" },
    { label: "Negativação Indevida" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Negativação Indevida - Indenização Nome Sujo",
    "description": "Advogado especialista em negativação indevida. Nome sujo no SPC/Serasa sem dever? Indenização de até R$ 20.000.",
    "areaServed": "Brasil",
    "serviceType": ["Negativação Indevida", "Indenização Nome Sujo", "Danos Morais"],
  };

  const compensationTable = [
    { situation: "Negativação por dívida já paga", range: "R$ 5.000 - R$ 10.000" },
    { situation: "Negativação por dívida que nunca existiu", range: "R$ 8.000 - R$ 15.000" },
    { situation: "Negativação por fraude/golpe", range: "R$ 10.000 - R$ 20.000" },
    { situation: "Dívida prescrita (mais de 5 anos)", range: "R$ 3.000 - R$ 8.000" },
    { situation: "Cobrança em valor incorreto", range: "R$ 3.000 - R$ 8.000" },
    { situation: "Demora na exclusão após pagamento", range: "R$ 2.000 - R$ 5.000" },
  ];

  const situations = [
    {
      title: "Nunca Contratei",
      description: "Seu nome foi negativado por uma dívida de serviço que você nunca contratou.",
      icon: <FileX className="w-8 h-8 text-red-500" />
    },
    {
      title: "Já Paguei",
      description: "Você quitou a dívida, mas a empresa não retirou seu nome dos órgãos de proteção.",
      icon: <CheckCircle className="w-8 h-8 text-green-500" />
    },
    {
      title: "Fraude/Golpe",
      description: "Alguém usou seus dados para fazer compras ou contratar serviços.",
      icon: <AlertTriangle className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Dívida Prescrita",
      description: "A dívida tem mais de 5 anos e não pode mais ser cobrada.",
      icon: <Clock className="w-8 h-8 text-blue-500" />
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Advogado para Negativação Indevida | Limpe Seu Nome</title>
        <meta name="description" content="Seu nome foi negativado indevidamente? Consulte um advogado especialista e limpe seu nome. Indenização por danos morais." />
        <meta name="keywords" content="negativação indevida, nome sujo indevido, indenização SPC, indenização Serasa, tirar nome do SPC, dívida que não é minha, advogado negativação" />
        <link rel="canonical" href="https://advogadoja.lovable.app/advogado-negativacao-indevida" />
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
              <Button asChild size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                <a href="https://wa.me/5571997036269" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-1" />
                  WhatsApp
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
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-100">
              <FileX className="w-4 h-4 mr-1" />
              Nome sujo sem dever? Você tem direitos!
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Negativação Indevida?
              <span className="block text-emerald-600">Indenização de até R$ 20.000</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Se seu nome foi inscrito no SPC, Serasa ou outros órgãos de proteção ao crédito 
              de forma indevida, você tem direito a indenização por danos morais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg py-6 px-8">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consultar Meus Direitos Grátis
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg py-6 px-8">
                <Link to="/calculadora-negativacao">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Calcular Minha Indenização
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Retiramos seu nome do SPC/Serasa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Indenização garantida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Sem custo se não ganhar</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-emerald-600 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">R$ 4M+</div>
                <div className="text-emerald-100">Em indenizações</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">8.000+</div>
                <div className="text-emerald-100">Nomes limpos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">98%</div>
                <div className="text-emerald-100">Taxa de sucesso</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">72h</div>
                <div className="text-emerald-100">Para limpar o nome*</div>
              </div>
            </div>
          </div>
        </section>

        {/* Situations */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Qual é a Sua Situação?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Todas essas situações geram direito a indenização. Clique na que se aplica ao seu caso.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {situations.map((situation, index) => (
              <Link to="/selecionar-acao/consumidor" key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{situation.icon}</div>
                    <h3 className="font-semibold mb-2 group-hover:text-emerald-600 transition-colors">
                      {situation.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{situation.description}</p>
                    <ArrowRight className="w-5 h-5 mx-auto mt-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Compensation Table */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Quanto Posso Receber de Indenização?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Valores baseados em decisões judiciais recentes. O valor exato depende das circunstâncias.
            </p>

            <div className="max-w-3xl mx-auto">
              <div className="bg-card rounded-xl border overflow-hidden">
                <div className="bg-emerald-600 text-white p-4">
                  <div className="grid grid-cols-2 font-semibold">
                    <span>Situação</span>
                    <span className="text-right">Indenização Estimada</span>
                  </div>
                </div>
                {compensationTable.map((row, index) => (
                  <div key={index} className={`p-4 grid grid-cols-2 ${index % 2 === 0 ? 'bg-muted/30' : ''}`}>
                    <span>{row.situation}</span>
                    <span className="text-right font-semibold text-emerald-600">{row.range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Funciona?
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Conte Seu Caso</h3>
                <p className="text-sm text-muted-foreground">
                  Responda algumas perguntas sobre a negativação. Leva menos de 2 minutos.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Análise Gratuita</h3>
                <p className="text-sm text-muted-foreground">
                  Nosso advogado analisa seu caso e estima o valor da indenização.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Limpa Seu Nome</h3>
                <p className="text-sm text-muted-foreground">
                  Entramos com pedido urgente para retirar seu nome do SPC/Serasa.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">4</span>
                </div>
                <h3 className="font-semibold mb-2">Receba Indenização</h3>
                <p className="text-sm text-muted-foreground">
                  Além de limpar o nome, você recebe indenização por danos morais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cada Dia com Nome Sujo é Prejuízo
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Crédito negado, juros altos, constrangimento. 
              Não aceite isso. Limpe seu nome e receba indenização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg py-6 px-8">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consulta Gratuita Agora
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg py-6 px-8 border-white text-white hover:bg-white/10">
                <a href="https://wa.me/5571997036269" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Direto
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Advogado Já - Todos os direitos reservados</p>
            <p className="mt-2 text-xs">* O prazo de 72h para limpar o nome depende de decisão liminar judicial.</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default NegativacaoIndevidaLanding;

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Plane, Clock, DollarSign, CheckCircle, ArrowRight, 
  MessageCircle, Shield, AlertTriangle, Star, Phone 
} from "lucide-react";
import PageTransition from "@/components/motion/PageTransition";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const VooCanceladoLanding = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Consumidor", href: "/advogado-consumidor" },
    { label: "Voo Cancelado" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Voo Cancelado - Indenização",
    "description": "Advogado especialista em indenização por voo cancelado, atrasado ou overbooking. Indenização de até R$ 15.000.",
    "areaServed": "Brasil",
    "serviceType": ["Indenização por Voo Cancelado", "Direito do Consumidor", "Danos Morais"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "description": "Consulta gratuita"
    }
  };

  const compensationTable = [
    { problem: "Voo cancelado sem aviso prévio", range: "R$ 5.000 - R$ 10.000" },
    { problem: "Atraso superior a 4 horas", range: "R$ 3.000 - R$ 8.000" },
    { problem: "Overbooking (preterição)", range: "R$ 5.000 - R$ 15.000" },
    { problem: "Perda de conexão por culpa da cia", range: "R$ 4.000 - R$ 10.000" },
    { problem: "Perda de compromisso importante", range: "R$ 8.000 - R$ 15.000" },
    { problem: "Voo internacional cancelado", range: "R$ 10.000 - R$ 20.000" },
  ];

  const yourRights = [
    {
      title: "Assistência Material",
      description: "Após 1h: comunicação. Após 2h: alimentação. Após 4h: hospedagem e transporte.",
      icon: <Shield className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Reembolso Integral",
      description: "Direito ao reembolso total da passagem em até 7 dias.",
      icon: <DollarSign className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Reacomodação",
      description: "Direito a ser realocado em outro voo, de qualquer companhia, sem custo adicional.",
      icon: <Plane className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Indenização por Danos Morais",
      description: "Compensação pelo transtorno, estresse e prejuízos sofridos.",
      icon: <Star className="w-6 h-6 text-emerald-600" />
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Advogado para Voo Cancelado ou Atrasado | Indenização Aérea</title>
        <meta name="description" content="Advogado especialista em direitos do passageiro aéreo. Obtenha indenização por voo cancelado, atrasado ou extravio de bagagem." />
        <meta name="keywords" content="voo cancelado indenização, atraso de voo indenização, overbooking direitos, indenização companhia aérea, voo atrasado o que fazer, advogado voo cancelado" />
        <link rel="canonical" href="https://advogadoja.lovable.app/advogado-voo-cancelado-atrasado" />
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
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
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

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-100">
              <AlertTriangle className="w-4 h-4 mr-1" />
              Problema com voo? Você tem direitos!
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Voo Cancelado ou Atrasado?
              <span className="block text-emerald-600">Indenização de até R$ 15.000</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Não importa o motivo alegado pela companhia aérea. Se você teve seu voo cancelado, 
              atrasado ou sofreu overbooking, você tem direito a indenização.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg py-6 px-8">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consultar Meus Direitos Grátis
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg py-6 px-8">
                <Link to="/calculadora-voo-cancelado">
                  <DollarSign className="w-5 h-5 mr-2" />
                  Calcular Minha Indenização
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Sem custo se não ganhar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Atendimento imediato</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Advogados especializados OAB</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-emerald-600 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">R$ 3M+</div>
                <div className="text-emerald-100">Em indenizações obtidas</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">5.000+</div>
                <div className="text-emerald-100">Passageiros ajudados</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">97%</div>
                <div className="text-emerald-100">Taxa de sucesso</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">48h</div>
                <div className="text-emerald-100">Resposta inicial</div>
              </div>
            </div>
          </div>
        </section>

        {/* Compensation Table */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Quanto Posso Receber de Indenização?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Valores baseados em decisões judiciais recentes. O valor exato depende das circunstâncias do seu caso.
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
                  <span>{row.problem}</span>
                  <span className="text-right font-semibold text-emerald-600">{row.range}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Seus Direitos em Caso de Voo Cancelado
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              A ANAC e o Código de Defesa do Consumidor garantem esses direitos. A companhia aérea é obrigada a cumpri-los.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {yourRights.map((right, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4">{right.icon}</div>
                    <h3 className="font-semibold mb-2">{right.title}</h3>
                    <p className="text-sm text-muted-foreground">{right.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Funciona?
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">1</span>
                </div>
                <h3 className="font-semibold mb-2">Conte Seu Caso</h3>
                <p className="text-sm text-muted-foreground">
                  Responda algumas perguntas sobre o que aconteceu com seu voo. Leva menos de 2 minutos.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">2</span>
                </div>
                <h3 className="font-semibold mb-2">Análise Gratuita</h3>
                <p className="text-sm text-muted-foreground">
                  Nosso advogado especialista analisa seu caso e informa suas chances e valor estimado.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-emerald-600">3</span>
                </div>
                <h3 className="font-semibold mb-2">Receba Sua Indenização</h3>
                <p className="text-sm text-muted-foreground">
                  Cuidamos de tudo. Você só paga se ganhar. Sem burocracia e com total transparência.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Perguntas Frequentes
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Quanto tempo tenho para pedir indenização?</h3>
                  <p className="text-muted-foreground">
                    Você tem até 5 anos para voos nacionais e até 2 anos para voos internacionais, contados da data do problema.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">E se a companhia alegou "condições climáticas"?</h3>
                  <p className="text-muted-foreground">
                    Mesmo em casos de mau tempo, a companhia deve provar que era impossível voar. Se outras companhias operaram normalmente, você tem direito a indenização.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Preciso ter notas fiscais de gastos extras?</h3>
                  <p className="text-muted-foreground">
                    Comprovantes ajudam, mas não são obrigatórios para danos morais. O transtorno em si já gera direito a indenização.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não Deixe Seu Direito Prescrever
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Cada dia que passa pode dificultar a obtenção de provas. 
              Consulte um advogado agora e saiba exatamente o que você pode receber.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg py-6 px-8">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Iniciar Consulta Gratuita
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg py-6 px-8 border-white text-white hover:bg-white/10">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
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
            <div className="flex justify-center gap-4 mt-4">
              <Link to="/privacidade" className="hover:underline">Privacidade</Link>
              <Link to="/termos-de-uso" className="hover:underline">Termos</Link>
              <Link to="/perguntas-frequentes" className="hover:underline">FAQ</Link>
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default VooCanceladoLanding;

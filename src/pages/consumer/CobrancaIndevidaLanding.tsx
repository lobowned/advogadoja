import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Receipt, DollarSign, CheckCircle, ArrowRight, 
  MessageCircle, Shield, AlertTriangle, Phone, Calculator, RefreshCw
} from "lucide-react";
import PageTransition from "@/components/motion/PageTransition";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const CobrancaIndevidaLanding = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Consumidor", href: "/advogado-consumidor" },
    { label: "Cobrança Indevida" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Cobrança Indevida - Devolução em Dobro",
    "description": "Advogado especialista em cobrança indevida. Direito à devolução em dobro. Serviço não contratado, valor errado, cobrança duplicada.",
    "areaServed": "Brasil",
    "serviceType": ["Cobrança Indevida", "Devolução em Dobro", "Direito do Consumidor"],
  };

  const situations = [
    {
      title: "Serviço Não Contratado",
      description: "Cobraram por algo que você nunca pediu",
      icon: <Receipt className="w-8 h-8 text-red-500" />
    },
    {
      title: "Valor Maior que o Contratado",
      description: "O valor da fatura veio mais alto que deveria",
      icon: <DollarSign className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Cobrança em Duplicidade",
      description: "Cobraram duas vezes pelo mesmo serviço",
      icon: <RefreshCw className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Cobrança Após Cancelamento",
      description: "Cancelou mas continuam cobrando",
      icon: <AlertTriangle className="w-8 h-8 text-yellow-500" />
    },
  ];

  const examples = [
    { situation: "Você paga R$ 100 indevidamente", result: "Recebe R$ 200 de volta" },
    { situation: "Você paga R$ 500 indevidamente", result: "Recebe R$ 1.000 de volta" },
    { situation: "Você paga R$ 1.000 indevidamente", result: "Recebe R$ 2.000 de volta" },
    { situation: "+ Danos morais", result: "R$ 3.000 a R$ 10.000 adicionais" },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Advogado para Cobrança Indevida | Resolva Seu Problema Agora</title>
        <meta name="description" content="Fale com um advogado especialista em cobrança indevida. Proteja-se contra abusos de bancos e empresas. Consulta online gratuita." />
        <meta name="keywords" content="cobrança indevida, devolução em dobro, restituição em dobro, serviço não contratado, cobrança duplicada, advogado consumidor, advogado cobrança indevida" />
        <link rel="canonical" href="https://advogadoja.lovable.app/advogado-cobranca-indevida" />
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
            <Badge className="mb-4 bg-green-100 text-green-700 hover:bg-green-100">
              <DollarSign className="w-4 h-4 mr-1" />
              Pagou errado? Receba o dobro de volta!
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Cobrança Indevida?
              <span className="block text-emerald-600">Devolução em Dobro!</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              O Código de Defesa do Consumidor garante: se você pagou algo indevido, 
              tem direito a receber o dobro do valor, com juros e correção.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg py-6 px-8">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Quero Meu Dinheiro de Volta
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg py-6 px-8">
                <Link to="/calculadora-devolucao-dobro">
                  <Calculator className="w-5 h-5 mr-2" />
                  Calcular Quanto Vou Receber
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Devolução em dobro garantida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>+ Danos morais</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Sem custo se não ganhar</span>
              </div>
            </div>
          </div>
        </section>

        {/* How Double Return Works */}
        <section className="bg-emerald-600 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center text-white mb-8">
              Como Funciona a Devolução em Dobro
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white/10 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div className="font-semibold border-b border-white/20 pb-2">O que você pagou</div>
                  <div className="font-semibold border-b border-white/20 pb-2 text-right">O que você recebe</div>
                  {examples.map((example, index) => (
                    <>
                      <div key={`sit-${index}`} className="py-2 border-b border-white/10">{example.situation}</div>
                      <div key={`res-${index}`} className="py-2 border-b border-white/10 text-right font-semibold text-emerald-200">{example.result}</div>
                    </>
                  ))}
                </div>
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
            Todas essas situações dão direito à devolução em dobro.
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

        {/* Legal Basis */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Base Legal: Art. 42 do CDC
              </h2>
              
              <Card>
                <CardContent className="p-8">
                  <blockquote className="text-lg italic border-l-4 border-emerald-600 pl-4 mb-6">
                    "O consumidor cobrado em quantia indevida tem direito à repetição do indébito, 
                    por valor igual ao <strong>dobro</strong> do que pagou em excesso, acrescido de 
                    correção monetária e juros legais, salvo hipótese de engano justificável."
                  </blockquote>
                  <p className="text-muted-foreground text-right">
                    — Código de Defesa do Consumidor, Art. 42, Parágrafo único
                  </p>
                </CardContent>
              </Card>

              <div className="mt-8 text-center">
                <p className="text-lg mb-4">
                  Na prática, a empresa quase nunca consegue provar "engano justificável".
                </p>
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  <Link to="/selecionar-acao/consumidor">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Quero Minha Devolução em Dobro
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Common Companies */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Empresas que Mais Fazem Cobrança Indevida
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
            {["Operadoras de TV/Internet", "Bancos", "Financeiras", "Operadoras de Celular", 
              "Planos de Saúde", "Lojas de Varejo", "Academias", "Assinaturas Online"].map((company, index) => (
              <Card key={index}>
                <CardContent className="p-4">
                  <span className="text-sm font-medium">{company}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não Deixe Passarem a Perna em Você
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Empresas ganham milhões com cobranças indevidas porque a maioria das pessoas não reclama. 
              Seja diferente. Exija seus direitos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg py-6 px-8">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Analisar Meu Caso Grátis
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
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default CobrancaIndevidaLanding;

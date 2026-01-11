import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  CreditCard, Lock, DollarSign, CheckCircle, ArrowRight, 
  MessageCircle, Shield, AlertTriangle, Phone, Banknote, Smartphone
} from "lucide-react";
import PageTransition from "@/components/motion/PageTransition";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const FraudeBancariaLanding = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Consumidor", href: "/advogado-consumidor" },
    { label: "Fraude Bancária" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Fraude Bancária - Recuperar Dinheiro",
    "description": "Advogado especialista em fraude bancária. PIX não autorizado, cartão clonado, empréstimo fraudulento. Recupere seu dinheiro.",
    "areaServed": "Brasil",
    "serviceType": ["Fraude Bancária", "Golpe PIX", "Cartão Clonado", "Empréstimo Fraudulento"],
  };

  const fraudTypes = [
    {
      icon: <Smartphone className="w-8 h-8 text-red-500" />,
      title: "Golpe do PIX",
      description: "Transferência não autorizada ou via link falso",
      recovery: "Recuperação integral + danos morais"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-500" />,
      title: "Cartão Clonado",
      description: "Compras ou saques que você não fez",
      recovery: "Estorno total + indenização"
    },
    {
      icon: <Banknote className="w-8 h-8 text-blue-500" />,
      title: "Empréstimo Fraudulento",
      description: "Empréstimo contratado sem sua autorização",
      recovery: "Cancelamento + devolução + danos"
    },
    {
      icon: <Lock className="w-8 h-8 text-purple-500" />,
      title: "Conta Invadida",
      description: "Alguém acessou sua conta e fez movimentações",
      recovery: "Recuperação integral + indenização"
    },
  ];

  const steps = [
    "Registre Boletim de Ocorrência",
    "Conteste imediatamente no banco",
    "Reúna prints e comprovantes",
    "Anote protocolos de atendimento",
    "Entre em contato conosco",
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Fraude Bancária | Golpe PIX, Cartão Clonado - Recupere Seu Dinheiro</title>
        <meta name="description" content="Vítima de fraude bancária? PIX não autorizado, cartão clonado, empréstimo fraudulento. Advogado especialista. Recupere seu dinheiro e receba indenização." />
        <meta name="keywords" content="fraude bancária, golpe PIX, cartão clonado, empréstimo fraudulento, recuperar dinheiro banco, advogado fraude" />
        <link rel="canonical" href="https://advogado.online/fraude-bancaria" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Header */}
        <header className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <BackButton />
              <Link to="/" className="flex items-center gap-2">
                <span className="text-lg font-semibold">Advogado.Online</span>
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

        {/* Hero */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-100">
              <AlertTriangle className="w-4 h-4 mr-1" />
              Vítima de golpe? Você pode recuperar!
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Fraude Bancária?
              <span className="block text-emerald-600">Recupere Seu Dinheiro</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              PIX não autorizado, cartão clonado, empréstimo que você não fez? 
              O banco é responsável pela segurança da sua conta e deve devolver seu dinheiro.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg py-6 px-8">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Quero Recuperar Meu Dinheiro
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
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Recuperação integral</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>+ Indenização por danos</span>
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
                <div className="text-4xl font-bold mb-2">R$ 2M+</div>
                <div className="text-emerald-100">Recuperados para vítimas</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2.000+</div>
                <div className="text-emerald-100">Casos de fraude resolvidos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">92%</div>
                <div className="text-emerald-100">Taxa de recuperação</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">48h</div>
                <div className="text-emerald-100">Primeira análise</div>
              </div>
            </div>
          </div>
        </section>

        {/* Fraud Types */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Qual Foi Sua Situação?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Em todos esses casos, o banco pode ser responsabilizado pela falha de segurança.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {fraudTypes.map((fraud, index) => (
              <Link to="/selecionar-acao/consumidor" key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{fraud.icon}</div>
                    <h3 className="font-semibold mb-2 group-hover:text-emerald-600 transition-colors">
                      {fraud.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">{fraud.description}</p>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                      {fraud.recovery}
                    </Badge>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Bank is Responsible */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">
                Por Que o Banco Deve Devolver Seu Dinheiro?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-emerald-600" />
                      Responsabilidade Objetiva
                    </h3>
                    <p className="text-muted-foreground">
                      O Código de Defesa do Consumidor estabelece que o banco responde 
                      pelos danos causados por falhas nos seus serviços, independente de culpa do cliente.
                    </p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Lock className="w-5 h-5 text-emerald-600" />
                      Dever de Segurança
                    </h3>
                    <p className="text-muted-foreground">
                      O banco tem o dever de garantir a segurança das transações. 
                      Se houve fraude, significa que o sistema de segurança falhou.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* What To Do */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Sofreu Fraude? Faça Isso Agora
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-card rounded-lg border">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-bold text-emerald-600">{index + 1}</span>
                  </div>
                  <span className="font-medium">{step}</span>
                  {index === steps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-emerald-600 ml-auto" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Iniciar Recuperação Agora
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não Deixe o Banco Escapar da Responsabilidade
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Muitos bancos negam o estorno tentando culpar o cliente. 
              Não aceite isso. Você tem direito à devolução integral mais indenização.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg py-6 px-8">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Analisar Meu Caso Grátis
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
            <p>© 2025 Advogado.Online - Todos os direitos reservados</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default FraudeBancariaLanding;

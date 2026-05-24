import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Package, Clock, DollarSign, CheckCircle, ArrowRight, 
  MessageCircle, Shield, AlertTriangle, Star, Phone, RefreshCw, 
  Wrench, ShoppingBag, Zap, Car
} from "lucide-react";
import PageTransition from "@/components/motion/PageTransition";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProdutoDefeitousoLanding = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Direito do Consumidor", href: "/advogado-consumidor" },
    { label: "Produto Defeituoso" }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado para Produto Defeituoso - Troca e Indenização",
    "description": "Advogado especialista em direito do consumidor para casos de produto com defeito. Troca, reparo, devolução do dinheiro e indenização por danos morais.",
    "areaServed": "Brasil",
    "serviceType": ["Produto Defeituoso", "Vício de Produto", "Direito do Consumidor", "Indenização"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL",
      "description": "Consulta gratuita"
    }
  };

  const compensationTable = [
    { product: "Eletrodoméstico com defeito", range: "R$ 1.000 - R$ 3.000" },
    { product: "Celular/Eletrônico defeituoso", range: "R$ 2.000 - R$ 5.000" },
    { product: "Móveis com defeito de fabricação", range: "R$ 1.500 - R$ 4.000" },
    { product: "Veículo com defeito de fábrica", range: "R$ 5.000 - R$ 20.000" },
    { product: "Produto que causou acidente", range: "R$ 10.000 - R$ 50.000" },
    { product: "Perda de compromisso importante", range: "R$ 3.000 - R$ 10.000" },
  ];

  const productTypes = [
    {
      title: "Eletrodomésticos",
      description: "Geladeira, fogão, máquina de lavar, micro-ondas e outros aparelhos domésticos.",
      icon: <Zap className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Eletrônicos",
      description: "Celulares, notebooks, TVs, tablets e outros dispositivos eletrônicos.",
      icon: <Package className="w-8 h-8 text-purple-500" />
    },
    {
      title: "Móveis",
      description: "Sofás, camas, armários, mesas e outros móveis com defeitos de fabricação.",
      icon: <ShoppingBag className="w-8 h-8 text-orange-500" />
    },
    {
      title: "Veículos",
      description: "Carros, motos e outros veículos com problemas de fábrica.",
      icon: <Car className="w-8 h-8 text-red-500" />
    },
  ];

  const yourRights = [
    {
      title: "Reparo em 30 Dias",
      description: "A empresa tem até 30 dias para consertar o produto. Depois disso, você escolhe: troca, devolução ou abatimento.",
      icon: <Wrench className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Troca por Novo",
      description: "Direito a um produto novo, igual ou superior, quando o reparo não for possível ou demorar mais de 30 dias.",
      icon: <RefreshCw className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Devolução do Dinheiro",
      description: "Reembolso integral do valor pago, com correção monetária, quando preferir não trocar.",
      icon: <DollarSign className="w-6 h-6 text-emerald-600" />
    },
    {
      title: "Indenização por Danos",
      description: "Compensação por transtornos, perdas financeiras ou danos físicos causados pelo produto defeituoso.",
      icon: <Star className="w-6 h-6 text-emerald-600" />
    },
  ];

  const faqItems = [
    {
      question: "Qual o prazo para reclamar de produto com defeito?",
      answer: "Para produtos não duráveis (alimentos, cosméticos), o prazo é de 30 dias. Para produtos duráveis (eletrodomésticos, eletrônicos, veículos), o prazo é de 90 dias. Esses prazos começam a contar da entrega do produto ou da descoberta do defeito (vício oculto)."
    },
    {
      question: "O que é vício oculto e qual o prazo para reclamar?",
      answer: "Vício oculto é o defeito que não é aparente no momento da compra, mas se manifesta depois com o uso normal do produto. Nesses casos, o prazo de 90 dias começa a contar a partir do momento em que o defeito se manifesta, e não da data da compra."
    },
    {
      question: "Posso exigir troca imediata por produto novo?",
      answer: "Sim, em alguns casos. Se o defeito for essencial (compromete a função principal do produto), você pode exigir troca imediata, devolução do dinheiro ou abatimento proporcional. Nos demais casos, a empresa tem até 30 dias para reparar antes de você poder exigir outras soluções."
    },
    {
      question: "E se a loja ou fabricante falir?",
      answer: "O Código de Defesa do Consumidor estabelece a responsabilidade solidária. Isso significa que você pode cobrar de qualquer empresa da cadeia de fornecimento: fabricante, importador, distribuidor ou lojista. Se a loja fechou, cobre do fabricante."
    },
    {
      question: "Comprei pela internet, tenho os mesmos direitos?",
      answer: "Sim, os mesmos direitos se aplicam. Além disso, compras pela internet dão direito ao arrependimento em até 7 dias, sem precisar justificar. Nesse caso, você pode devolver o produto e receber o dinheiro de volta integralmente, incluindo o frete."
    },
    {
      question: "O produto causou um acidente. O que fazer?",
      answer: "Quando o produto defeituoso causa danos físicos, materiais ou morais, você tem direito a indenização. Guarde o produto, tire fotos, vá ao médico se necessário e procure um advogado imediatamente. Nesses casos, as indenizações costumam ser significativamente maiores."
    },
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Advogado para Produto Defeituoso | Troca e Indenização</title>
        <meta name="description" content="Comprou um produto com defeito e a empresa não resolve? Advogado especialista em direito do consumidor para troca e indenização. Consulta gratuita." />
        <meta name="keywords" content="produto defeituoso, garantia produto, vício oculto, vício aparente, troca produto defeituoso, advogado consumidor, indenização produto, CDC, direito do consumidor" />
        <link rel="canonical" href="https://advogadoja.lovable.app/advogado-produto-defeituoso" />
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
            <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-100">
              <Package className="w-4 h-4 mr-1" />
              Produto com defeito? Você tem direitos!
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Comprou um Produto com Defeito?
              <span className="block text-emerald-600">Conheça Seus Direitos</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              O Código de Defesa do Consumidor garante troca, reparo, devolução do dinheiro 
              e até indenização por danos morais. Não aceite prejuízo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg py-6 px-8">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consultar Meus Direitos Grátis
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg py-6 px-8">
                <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Falar com Advogado
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Troca ou devolução garantida</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Indenização por danos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>Consulta gratuita</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-emerald-600 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">R$ 2M+</div>
                <div className="text-emerald-100">Em indenizações obtidas</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">4.500+</div>
                <div className="text-emerald-100">Casos resolvidos</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">96%</div>
                <div className="text-emerald-100">Taxa de sucesso</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24h</div>
                <div className="text-emerald-100">Resposta inicial</div>
              </div>
            </div>
          </div>
        </section>

        {/* O Que É Produto Defeituoso */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              O Que É Considerado Produto Defeituoso?
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              O Código de Defesa do Consumidor diferencia dois tipos de problemas em produtos: 
              vícios aparentes e vícios ocultos.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-orange-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-6 h-6 text-orange-500" />
                    Vícios Aparentes
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    São defeitos visíveis ou facilmente identificáveis no momento da compra ou logo após a entrega:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Riscos, amassados ou manchas no produto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Produto não liga ou não funciona ao testar</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Peças faltando ou produto incompleto</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Produto diferente do anunciado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Shield className="w-6 h-6 text-blue-500" />
                    Vícios Ocultos
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    São defeitos que não são visíveis no momento da compra e só aparecem com o uso:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Defeito de fabricação que surge depois</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Problemas estruturais não aparentes</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Falhas em componentes internos</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <span>Durabilidade muito abaixo do esperado</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Seus Direitos */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Seus Direitos Segundo o Código de Defesa do Consumidor
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              O CDC garante proteção total ao consumidor em casos de produtos defeituosos. 
              Conheça seus direitos.
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

            <div className="mt-12 max-w-3xl mx-auto">
              <Card className="bg-emerald-50 border-emerald-200">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-4">
                    Prazos de Garantia Legal
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6 text-sm">
                    <div>
                      <p className="font-semibold text-emerald-700 mb-2">Produtos Não Duráveis</p>
                      <p className="text-muted-foreground">
                        <strong>30 dias</strong> para reclamar. Ex: alimentos, cosméticos, produtos de limpeza.
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-emerald-700 mb-2">Produtos Duráveis</p>
                      <p className="text-muted-foreground">
                        <strong>90 dias</strong> para reclamar. Ex: eletrodomésticos, eletrônicos, veículos, móveis.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tipos de Produtos */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Tipos de Produtos com Defeito que Atendemos
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Nossa equipe é especializada em diversos tipos de produtos defeituosos. 
            Clique no seu caso para iniciar a análise gratuita.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productTypes.map((product, index) => (
              <Link to="/selecionar-acao/consumidor" key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                  <CardContent className="p-6 text-center">
                    <div className="mb-4 flex justify-center">{product.icon}</div>
                    <h3 className="font-semibold mb-2 group-hover:text-emerald-600 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                    <ArrowRight className="w-5 h-5 mx-auto mt-4 text-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* O Que Fazer */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              O Que Fazer Quando a Empresa Não Resolve
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Se a empresa não resolveu seu problema dentro do prazo, você tem alternativas.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">1</span>
                  </div>
                  <h3 className="font-semibold mb-2">Reclamação Formal</h3>
                  <p className="text-sm text-muted-foreground">
                    Faça uma reclamação por escrito (e-mail ou carta) à empresa, guardando o protocolo. 
                    Isso serve como prova.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">2</span>
                  </div>
                  <h3 className="font-semibold mb-2">Procon e Reclame Aqui</h3>
                  <p className="text-sm text-muted-foreground">
                    Registre sua reclamação em órgãos de defesa do consumidor. 
                    Muitas empresas resolvem para evitar má reputação.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-emerald-600">3</span>
                  </div>
                  <h3 className="font-semibold mb-2">Ação Judicial</h3>
                  <p className="text-sm text-muted-foreground">
                    Se nada resolver, entre com ação judicial. Além da troca/devolução, 
                    você pode conseguir indenização por danos morais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Compensation Table */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Quando Posso Pedir Indenização por Danos Morais?
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Além da troca ou devolução do dinheiro, você pode ter direito a indenização por danos morais 
            em diversas situações. Valores baseados em decisões judiciais recentes.
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
                  <span>{row.product}</span>
                  <span className="text-right font-semibold text-emerald-600">{row.range}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Como Podemos Ajudar */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Como o Advogado Já Pode Ajudar
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Nossa equipe de advogados especializados em direito do consumidor cuida de todo o processo.
            </p>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Análise Gratuita do Seu Caso</h3>
                      <p className="text-sm text-muted-foreground">
                        Avaliamos sua situação e informamos suas chances de sucesso e valores estimados.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Notificação Extrajudicial</h3>
                      <p className="text-sm text-muted-foreground">
                        Enviamos notificação formal à empresa, muitas vezes resolvendo sem precisar ir à Justiça.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Ação Judicial Quando Necessário</h3>
                      <p className="text-sm text-muted-foreground">
                        Se a empresa não resolver, entramos com ação judicial buscando todos os seus direitos.
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Sem Custo se Não Ganhar</h3>
                      <p className="text-sm text-muted-foreground">
                        Você só paga honorários se ganhar a causa. Sem risco para você.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Tire suas dúvidas sobre produtos defeituosos e seus direitos como consumidor.
          </p>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-4">
                  <AccordionTrigger className="text-left font-semibold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Não Aceite Prejuízo por Produto Defeituoso
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Empresas contam com a desistência dos consumidores. Não seja mais um. 
              Exija seus direitos e seja compensado por todo o transtorno.
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

export default ProdutoDefeitousoLanding;
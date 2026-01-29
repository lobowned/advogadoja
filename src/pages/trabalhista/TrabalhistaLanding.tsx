import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  MessageCircle,
  Briefcase,
  Clock,
  AlertTriangle,
  Heart,
  DollarSign,
  FileText,
  CheckCircle,
  Users,
  Calculator,
  ArrowRight,
  Shield,
  Scale,
  Phone,
  Star,
  TrendingUp,
  Banknote,
  CalendarClock,
  BadgeCheck,
} from "lucide-react";
import logoAdvogado from "@/assets/logo-advogado-online.png";

const WHATSAPP_NUMBER = "5571997036269";

const createWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const problems = [
  {
    icon: Briefcase,
    title: "Demissão sem Justa Causa",
    value: "R$ 5.000 - R$ 30.000",
    message: "Fui demitido e não recebi todas as verbas",
    description: "Verbas rescisórias, FGTS + 40%, aviso prévio",
  },
  {
    icon: Clock,
    title: "Horas Extras Não Pagas",
    value: "R$ 10.000 - R$ 80.000",
    message: "Trabalhei horas extras que não foram pagas",
    description: "Últimos 5 anos podem ser cobrados",
  },
  {
    icon: AlertTriangle,
    title: "Assédio Moral",
    value: "R$ 10.000 - R$ 50.000",
    message: "Sofri assédio moral no trabalho",
    description: "Humilhações, cobranças abusivas, perseguição",
  },
  {
    icon: Heart,
    title: "Acidente de Trabalho",
    value: "R$ 20.000 - R$ 200.000",
    message: "Sofri acidente de trabalho",
    description: "Indenização por danos, estabilidade, pensão",
  },
  {
    icon: DollarSign,
    title: "FGTS Não Depositado",
    value: "Valor integral + multa",
    message: "Meu FGTS não foi depositado corretamente",
    description: "Recupere todos os depósitos não realizados",
  },
  {
    icon: FileText,
    title: "Verbas Rescisórias Atrasadas",
    value: "Valor + multa 477 CLT",
    message: "Minhas verbas rescisórias estão atrasadas",
    description: "Multa de 1 salário por mês de atraso",
  },
];

const indemnityTable = [
  { problem: "Demissão sem justa causa (5 anos)", value: "R$ 15.000 - R$ 50.000" },
  { problem: "Horas extras (últimos 5 anos)", value: "R$ 10.000 - R$ 100.000" },
  { problem: "Assédio moral comprovado", value: "R$ 10.000 - R$ 80.000" },
  { problem: "Acidente com sequelas", value: "R$ 50.000 - R$ 500.000" },
  { problem: "Multa 477 CLT (atraso)", value: "Salário integral por atraso" },
];

const rights = [
  { icon: Banknote, title: "FGTS + 40%", description: "Multa sobre todos os depósitos" },
  { icon: CalendarClock, title: "Aviso Prévio", description: "30 dias + 3 por ano trabalhado" },
  { icon: TrendingUp, title: "Férias + 1/3", description: "Vencidas e proporcionais" },
  { icon: BadgeCheck, title: "13º Salário", description: "Proporcional aos meses trabalhados" },
];

const steps = [
  { step: 1, title: "Envie seus documentos", description: "CTPS, holerites, contrato" },
  { step: 2, title: "Análise gratuita", description: "Advogado avalia seu caso" },
  { step: 3, title: "Entramos com a ação", description: "Sem custo inicial para você" },
  { step: 4, title: "Você recebe", description: "Só paga se ganhar a causa" },
];

const testimonials = [
  {
    name: "Carlos M.",
    case: "Demissão após 8 anos",
    value: "R$ 45.000",
    text: "Fui demitido após 8 anos e recebi R$ 45.000 que a empresa não queria pagar. O advogado foi fundamental.",
  },
  {
    name: "Fernanda S.",
    case: "Horas extras não pagas",
    value: "R$ 85.000",
    text: "Trabalhava 12h por dia sem receber hora extra. Ganhei R$ 85.000 após o processo.",
  },
  {
    name: "Roberto L.",
    case: "Assédio moral",
    value: "R$ 35.000",
    text: "Sofri assédio moral e consegui R$ 35.000 de indenização. Justiça foi feita.",
  },
];

const calculators = [
  { title: "Calculadora Trabalhista", path: "/calculadora-trabalhista", description: "Rescisão completa" },
  { title: "Horas Extras", path: "/calculadora-horas-extras", description: "Cálculo detalhado" },
  { title: "FGTS", path: "/calculadora-fgts", description: "Saldo e multa 40%" },
  { title: "Seguro Desemprego", path: "/calculadora-seguro-desemprego", description: "Valor das parcelas" },
];

const faqs = [
  {
    question: "Quanto tempo tenho para entrar com ação trabalhista?",
    answer: "Você tem até 2 anos após a demissão para entrar com a ação, podendo cobrar os últimos 5 anos de trabalho. Não deixe seu direito prescrever!",
  },
  {
    question: "Preciso pagar algo para iniciar a ação?",
    answer: "Não! Trabalhamos no modelo de honorários de êxito: você só paga se ganhar a causa. A consulta inicial é totalmente gratuita.",
  },
  {
    question: "Posso processar mesmo ainda trabalhando na empresa?",
    answer: "Sim, é possível entrar com ação trabalhista mesmo empregado. Porém, recomendamos avaliar os riscos e benefícios com nosso advogado antes.",
  },
  {
    question: "Quanto tempo demora um processo trabalhista?",
    answer: "Em média, um processo trabalhista demora de 8 meses a 2 anos. Com acordos, pode ser resolvido em até 3 meses.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://advogadoja.lovable.app/advogado-trabalhista-online#service",
      "name": "Advogado Trabalhista Online - AdvogadoJá",
      "description": "Advogado trabalhista especializado em demissão, horas extras, assédio moral e acidente de trabalho. Consulta gratuita e honorários só no êxito.",
      "url": "https://advogadoja.lovable.app/advogado-trabalhista-online",
      "telephone": "+55 71 99703-6269",
      "areaServed": {
        "@type": "Country",
        "name": "Brasil"
      },
      "serviceType": ["Direito Trabalhista", "Ação Trabalhista", "Reclamação Trabalhista"],
      "provider": {
        "@type": "LegalService",
        "name": "AdvogadoJá",
        "url": "https://advogadoja.lovable.app"
      },
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "BRL",
        "description": "Consulta gratuita - Honorários apenas no êxito"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://advogadoja.lovable.app/advogado-trabalhista-online#faq",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://advogadoja.lovable.app/advogado-trabalhista-online#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Início",
          "item": "https://advogadoja.lovable.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Advogado Trabalhista Online",
          "item": "https://advogadoja.lovable.app/advogado-trabalhista-online"
        }
      ]
    }
  ]
};

const TrabalhistaLanding = () => {
  return (
    <>
      <Helmet>
        <title>Advogado Trabalhista Online | Demissão, Horas Extras, Assédio | Consulta Grátis</title>
        <meta
          name="description"
          content="Advogado trabalhista online para demissão, horas extras não pagas, assédio moral e acidente de trabalho. Consulta gratuita. Só paga se ganhar. WhatsApp 24h."
        />
        <meta
          name="keywords"
          content="advogado trabalhista, demissão sem justa causa, horas extras, assédio moral, acidente trabalho, verbas rescisórias, advogado do trabalho online"
        />
        <link rel="canonical" href="https://advogadoja.lovable.app/advogado-trabalhista-online" />
        <meta property="og:title" content="Advogado Trabalhista Online | Demissão, Horas Extras | Consulta Grátis" />
        <meta property="og:description" content="Advogado trabalhista online. Demissão, horas extras, assédio moral. Consulta gratuita. Só paga se ganhar." />
        <meta property="og:url" content="https://advogadoja.lovable.app/advogado-trabalhista-online" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header Sticky */}
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoAdvogado} alt="AdvogadoJá" className="h-10 w-auto" />
            </Link>
            <Button
              asChild
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
            >
              <a href={createWhatsAppLink("Olá! Preciso de um advogado trabalhista urgente.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-4 w-4" />
                <span className="hidden sm:inline">WhatsApp</span> Urgente
              </a>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-orange-50 via-orange-100/50 to-background py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-500 text-white text-sm font-medium rounded-full">
                  <Clock className="h-4 w-4" />
                  Atendimento Imediato
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-600 text-white text-sm font-medium rounded-full">
                  <Shield className="h-4 w-4" />
                  Só Paga se Ganhar
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Demitido?{" "}
                <span className="text-orange-600">Não Recebeu Suas Verbas?</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Recuperamos seus Direitos Trabalhistas com consulta <strong>100% gratuita</strong>.
                Atendimento online para todo o Brasil.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white text-lg px-8 py-6 gap-2 shadow-lg"
                >
                  <a href={createWhatsAppLink("Olá! Preciso de orientação sobre meus direitos trabalhistas.")} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Falar com Advogado Agora
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="text-lg px-8 py-6 gap-2 border-orange-500 text-orange-600 hover:bg-orange-50"
                >
                  <Link to="/calculadora-trabalhista">
                    <Calculator className="h-5 w-5" />
                    Calcular Minha Rescisão
                  </Link>
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                WhatsApp: (71) 99703-6269 • Atendimento 24h
              </p>
            </div>
          </div>
        </section>

        {/* Stats Bar */}
        <section className="bg-orange-600 py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
              <div>
                <p className="text-3xl md:text-4xl font-bold">8.000+</p>
                <p className="text-orange-100 text-sm">Casos Resolvidos</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">95%</p>
                <p className="text-orange-100 text-sm">Taxa de Sucesso</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">R$ 15M+</p>
                <p className="text-orange-100 text-sm">Recuperados</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">24h</p>
                <p className="text-orange-100 text-sm">Atendimento</p>
              </div>
            </div>
          </div>
        </section>

        {/* Problems Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Qual é o Seu <span className="text-orange-600">Problema Trabalhista</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Clique no seu problema e fale diretamente com um advogado especialista
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {problems.map((problem, index) => (
                <a
                  key={index}
                  href={createWhatsAppLink(problem.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-orange-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                          <problem.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-foreground mb-1">
                            {problem.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {problem.description}
                          </p>
                          <p className="text-orange-600 font-bold">
                            {problem.value}
                          </p>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-end text-sm text-orange-600 group-hover:text-orange-700">
                        Falar sobre isso
                        <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
              >
                <a href={createWhatsAppLink("Olá! Tenho um problema trabalhista e preciso de orientação.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Outro Problema? Fale Conosco
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Indemnity Table */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Valores Estimados de <span className="text-orange-600">Indenização</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Veja quanto você pode receber em uma ação trabalhista
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-orange-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold">Tipo de Problema</th>
                        <th className="px-6 py-4 text-right font-semibold">Valor Estimado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {indemnityTable.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-orange-50"}>
                          <td className="px-6 py-4 text-foreground">{item.problem}</td>
                          <td className="px-6 py-4 text-right font-bold text-orange-600">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              <p className="text-center text-sm text-muted-foreground mt-4">
                *Valores estimados. Cada caso é analisado individualmente.
              </p>
            </div>

            <div className="text-center mt-10">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
              >
                <a href={createWhatsAppLink("Olá! Quero saber quanto posso receber no meu caso trabalhista.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Calcular Meu Caso Gratuitamente
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Your Rights */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Seus <span className="text-orange-600">Direitos</span> na Demissão
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Conheça tudo que você tem direito a receber
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {rights.map((right, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mx-auto w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                      <right.icon className="h-7 w-7 text-orange-600" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">{right.title}</h3>
                    <p className="text-sm text-muted-foreground">{right.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Como Funciona
              </h2>
              <p className="text-orange-100 text-lg max-w-2xl mx-auto">
                Processo simples e sem burocracia para você
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {steps.map((item, index) => (
                <div key={index} className="text-center relative">
                  <div className="mx-auto w-16 h-16 rounded-full bg-white text-orange-600 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-orange-100 text-sm">{item.description}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-8 -right-4 h-6 w-6 text-orange-300" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Casos de <span className="text-orange-600">Sucesso</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Veja o que nossos clientes conquistaram
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <div className="border-t pt-4">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.case}</p>
                      <p className="text-orange-600 font-bold text-lg mt-1">
                        Ganhou: {testimonial.value}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
              >
                <a href={createWhatsAppLink("Olá! Vi os casos de sucesso e quero avaliar minha situação trabalhista.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Quero Ser o Próximo Caso de Sucesso
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Calculators */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <span className="text-orange-600">Calculadoras</span> Trabalhistas
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Simule seus valores antes de falar com o advogado
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {calculators.map((calc, index) => (
                <Link key={index} to={calc.path} className="group">
                  <Card className="h-full hover:shadow-lg hover:border-orange-300 transition-all">
                    <CardContent className="p-6 text-center">
                      <Calculator className="h-10 w-10 mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform" />
                      <h3 className="font-semibold text-foreground mb-1">{calc.title}</h3>
                      <p className="text-sm text-muted-foreground">{calc.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perguntas <span className="text-orange-600">Frequentes</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-foreground hover:text-orange-600">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="text-center mt-10">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
              >
                <a href={createWhatsAppLink("Olá! Tenho dúvidas sobre processo trabalhista.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Tirar Outras Dúvidas
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Urgency Banner */}
        <section className="py-8 bg-red-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <AlertTriangle className="h-6 w-6" />
              <h3 className="text-xl font-bold">Atenção: Seu direito prescreve em 2 anos!</h3>
            </div>
            <p className="text-red-100">
              Após a demissão, você tem apenas 2 anos para entrar com a ação. Não perca seus direitos!
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <Scale className="h-16 w-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pronto para Recuperar Seus Direitos?
            </h2>
            <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
              Consulta gratuita. Só paga se ganhar. Atendimento 24 horas.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-10 py-6 gap-2 shadow-xl"
            >
              <a href={createWhatsAppLink("Olá! Quero falar com um advogado trabalhista agora.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-6 w-6" />
                Falar com Advogado Trabalhista
              </a>
            </Button>
            <p className="mt-6 text-orange-100 flex items-center justify-center gap-2">
              <Phone className="h-4 w-4" />
              (71) 99703-6269 • WhatsApp 24 horas
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-gray-300 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <img src={logoAdvogado} alt="AdvogadoJá" className="h-10 w-auto mb-4 brightness-0 invert" />
                <p className="text-sm">
                  Advocacia especializada em Direito Trabalhista. Atendimento online para todo o Brasil.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Contato</h4>
                <p className="text-sm mb-2">WhatsApp: (71) 99703-6269</p>
                <p className="text-sm">Atendimento 24 horas</p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Links Úteis</h4>
                <div className="flex flex-col gap-2 text-sm">
                  <Link to="/privacidade" className="hover:text-white transition-colors">
                    Política de Privacidade
                  </Link>
                  <Link to="/termos-de-uso" className="hover:text-white transition-colors">
                    Termos de Uso
                  </Link>
                  <Link to="/calculadoras" className="hover:text-white transition-colors">
                    Calculadoras Jurídicas
                  </Link>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
              <p>© {new Date().getFullYear()} AdvogadoJá. Todos os direitos reservados.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default TrabalhistaLanding;

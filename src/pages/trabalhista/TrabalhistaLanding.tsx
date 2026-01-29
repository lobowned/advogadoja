import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
  XCircle,
  FileCheck,
  UserX,
  Baby,
  Zap,
  Building2,
  Truck,
  HandMetal,
  MapPin,
} from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import PageTransition from "@/components/motion/PageTransition";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import BackButton from "@/components/BackButton";
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

const companyLies = [
  {
    lie: '"Você pediu demissão"',
    truth: "Coação é nula. Se foi pressionado a assinar, pode reverter.",
  },
  {
    lie: '"Era cargo de confiança"',
    truth: "Empresa precisa provar. Maioria das alegações é falsa.",
  },
  {
    lie: '"Tinha banco de horas"',
    truth: "Precisa de acordo formal. Sem documento, você recebe as horas.",
  },
  {
    lie: '"Você era PJ, não tem direitos"',
    truth: "Se tinha subordinação e horário fixo, vínculo é reconhecido.",
  },
  {
    lie: '"Era trabalho autônomo"',
    truth: "Autonomia é só no nome? Na prática era CLT? Tem direitos.",
  },
  {
    lie: '"Estágio não gera vínculo"',
    truth: "Estágio irregular = vínculo empregatício reconhecido.",
  },
  {
    lie: '"Você fez acordo, não pode reclamar"',
    truth: "Acordos sob coação ou com valores errados podem ser anulados.",
  },
  {
    lie: '"Passou o prazo"',
    truth: "Você tem 2 anos após sair para processar. Não desista antes de verificar!",
  },
];

const specialCases = [
  {
    icon: UserX,
    title: "Demissão Discriminatória",
    description: "Por doença, idade ou deficiência",
    message: "Fui demitido de forma discriminatória",
  },
  {
    icon: Baby,
    title: "Gestante Demitida",
    description: "Estabilidade até 5 meses após o parto",
    message: "Fui demitida grávida ou após o parto",
  },
  {
    icon: Zap,
    title: "Acidente com Sequelas",
    description: "Indenização vitalícia, pensão, danos",
    message: "Sofri acidente de trabalho com sequelas permanentes",
  },
  {
    icon: HandMetal,
    title: "Assédio Sexual",
    description: "Danos morais e rescisão indireta",
    message: "Sofri assédio sexual no trabalho",
  },
  {
    icon: Building2,
    title: "Pejotização Forçada",
    description: "PJ que na prática era CLT",
    message: "Trabalhei como PJ mas tinha subordinação de CLT",
  },
  {
    icon: Truck,
    title: "Horas de Motorista",
    description: "Jornada especial não respeitada",
    message: "Sou motorista e não recebi horas extras corretamente",
  },
];

const documents = [
  { name: "CTPS (física ou digital)", required: true },
  { name: "Últimos holerites/contracheques", required: true },
  { name: "Contrato de trabalho", required: false },
  { name: "Termo de rescisão (TRCT)", required: true },
  { name: "Extrato FGTS", required: false },
  { name: "Cartões de ponto (se tiver)", required: false },
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
  { step: 1, title: "Envie seus documentos", description: "CTPS, holerites, contrato", time: "5 min" },
  { step: 2, title: "Análise gratuita", description: "Advogado avalia seu caso", time: "24h" },
  { step: 3, title: "Entramos com a ação", description: "Sem custo inicial para você", time: "48h" },
  { step: 4, title: "Você recebe", description: "Só paga se ganhar a causa", time: "8-18 meses" },
];

const testimonials = [
  {
    name: "Carlos M.",
    city: "São Paulo, SP",
    case: "Demissão após 8 anos",
    value: "R$ 45.000",
    text: "Fui demitido após 8 anos e recebi R$ 45.000 que a empresa não queria pagar. O advogado foi fundamental.",
  },
  {
    name: "Fernanda S.",
    city: "Rio de Janeiro, RJ",
    case: "Horas extras não pagas",
    value: "R$ 85.000",
    text: "Trabalhava 12h por dia sem receber hora extra. Ganhei R$ 85.000 após o processo.",
  },
  {
    name: "Roberto L.",
    city: "Belo Horizonte, MG",
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

const breadcrumbs = [
  { label: "Início", href: "/" },
  { label: "Advogado Trabalhista" },
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

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const TrabalhistaLanding = () => {
  const prefersReducedMotion = useReducedMotion();

  const MotionSection = prefersReducedMotion ? 'section' : m.section;
  const MotionDiv = prefersReducedMotion ? 'div' : m.div;

  return (
    <PageTransition>
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
            <div className="flex items-center gap-4">
              <BackButton to="/" />
              <Link to="/" className="flex items-center gap-2">
                <img src={logoAdvogado} alt="AdvogadoJá" className="h-10 w-auto" />
              </Link>
            </div>
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

        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-3">
          <BreadcrumbNav items={breadcrumbs} />
        </div>

        {/* Hero Section */}
        <MotionSection 
          className="relative bg-gradient-to-br from-orange-50 via-orange-100/50 to-background py-16 md:py-24 overflow-hidden"
          {...(!prefersReducedMotion && {
            initial: "hidden",
            animate: "visible",
            variants: sectionVariants
          })}
        >
          <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Urgency Badge */}
              <MotionDiv 
                className="flex justify-center mb-6"
                {...(!prefersReducedMotion && {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { duration: 0.4 }
                })}
              >
                <Badge className="animate-pulse bg-red-100 text-red-700 border-red-200 px-4 py-2 text-sm font-medium">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Prazo de 2 anos! Não perca seus direitos
                </Badge>
              </MotionDiv>

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
        </MotionSection>

        {/* Stats Bar */}
        <MotionSection 
          className="bg-orange-600 py-6"
          {...(!prefersReducedMotion && {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
            variants: sectionVariants
          })}
        >
          <div className="container mx-auto px-4">
            <MotionDiv 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white"
              {...(!prefersReducedMotion && {
                variants: staggerContainer,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true }
              })}
            >
              {[
                { value: "8.000+", label: "Casos Resolvidos" },
                { value: "95%", label: "Taxa de Sucesso" },
                { value: "R$ 15M+", label: "Recuperados" },
                { value: "24h", label: "Atendimento" },
              ].map((stat, index) => (
                <MotionDiv 
                  key={index}
                  {...(!prefersReducedMotion && { variants: itemVariants })}
                >
                  <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
                  <p className="text-orange-100 text-sm">{stat.label}</p>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </MotionSection>

        {/* Problems Grid */}
        <MotionSection 
          className="py-16 bg-background"
          {...(!prefersReducedMotion && {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
            variants: sectionVariants
          })}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Qual é o Seu <span className="text-orange-600">Problema Trabalhista</span>?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Clique no seu problema e fale diretamente com um advogado especialista
              </p>
            </div>

            <MotionDiv 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              {...(!prefersReducedMotion && {
                variants: staggerContainer,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true }
              })}
            >
              {problems.map((problem, index) => (
                <MotionDiv key={index} {...(!prefersReducedMotion && { variants: itemVariants })}>
                  <a
                    href={createWhatsAppLink(problem.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-orange-300 hover:-translate-y-1 cursor-pointer border-l-4 border-l-orange-500">
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
                </MotionDiv>
              ))}
            </MotionDiv>

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
        </MotionSection>

        {/* Company Lies Section - NEW */}
        <MotionSection 
          className="py-16 bg-red-50"
          {...(!prefersReducedMotion && {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
            variants: sectionVariants
          })}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-red-100 text-red-700 border-red-200">
                <XCircle className="w-4 h-4 mr-1" />
                Não caia nessa!
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Mentiras que as <span className="text-red-600">Empresas Contam</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Conheça as desculpas mais comuns usadas para negar seus direitos
              </p>
            </div>

            <MotionDiv 
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto"
              {...(!prefersReducedMotion && {
                variants: staggerContainer,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true }
              })}
            >
              {companyLies.map((item, index) => (
                <MotionDiv key={index} {...(!prefersReducedMotion && { variants: itemVariants })}>
                  <Card className="h-full border-l-4 border-l-red-500 hover:shadow-lg transition-shadow">
                    <CardContent className="p-4">
                      <p className="font-bold text-red-600 mb-2 flex items-start gap-2">
                        <XCircle className="h-5 w-5 shrink-0 mt-0.5" />
                        {item.lie}
                      </p>
                      <p className="text-sm text-foreground flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 shrink-0 mt-0.5 text-green-600" />
                        {item.truth}
                      </p>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </MotionDiv>

            <div className="text-center mt-10">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
              >
                <a href={createWhatsAppLink("Olá! A empresa usou uma dessas desculpas comigo. Quero saber meus direitos.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  A Empresa Usou Isso Comigo
                </a>
              </Button>
            </div>
          </div>
        </MotionSection>

        {/* Indemnity Table */}
        <MotionSection 
          className="py-16 bg-orange-50"
          {...(!prefersReducedMotion && {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
            variants: sectionVariants
          })}
        >
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
        </MotionSection>

        {/* Your Rights */}
        <MotionSection 
          className="py-16 bg-background"
          {...(!prefersReducedMotion && {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
            variants: sectionVariants
          })}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Seus <span className="text-orange-600">Direitos</span> na Demissão
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Conheça tudo que você tem direito a receber
              </p>
            </div>

            <MotionDiv 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              {...(!prefersReducedMotion && {
                variants: staggerContainer,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true }
              })}
            >
              {rights.map((right, index) => (
                <MotionDiv key={index} {...(!prefersReducedMotion && { variants: itemVariants })}>
                  <Card className="text-center hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="mx-auto w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mb-4">
                        <right.icon className="h-7 w-7 text-orange-600" />
                      </div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{right.title}</h3>
                      <p className="text-sm text-muted-foreground">{right.description}</p>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </MotionSection>

        {/* Documents Section - NEW */}
        <MotionSection 
          className="py-16 bg-green-50"
          {...(!prefersReducedMotion && {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
            variants: sectionVariants
          })}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-green-100 text-green-700 border-green-200">
                <FileCheck className="w-4 h-4 mr-1" />
                Prepare-se
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Documentos <span className="text-green-600">Necessários</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Separe esses documentos para agilizar sua consulta
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {documents.map((doc, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className={`h-5 w-5 ${doc.required ? 'text-green-600' : 'text-muted-foreground'}`} />
                        <span className="text-foreground">{doc.name}</span>
                        {doc.required && (
                          <Badge variant="outline" className="text-xs ml-auto">Importante</Badge>
                        )}
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4 pt-4 border-t">
                    💡 Não tem todos? Não se preocupe! Nosso advogado orienta você.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-10">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
              >
                <a href={createWhatsAppLink("Olá! Quero enviar meus documentos trabalhistas para análise.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Enviar Meus Documentos
                </a>
              </Button>
            </div>
          </div>
        </MotionSection>

        {/* How It Works */}
        <MotionSection 
          className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white"
          {...(!prefersReducedMotion && {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
            variants: sectionVariants
          })}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Como Funciona
              </h2>
              <p className="text-orange-100 text-lg max-w-2xl mx-auto">
                Processo simples e sem burocracia para você
              </p>
            </div>

            <MotionDiv 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
              {...(!prefersReducedMotion && {
                variants: staggerContainer,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true }
              })}
            >
              {steps.map((item, index) => (
                <MotionDiv 
                  key={index} 
                  className="text-center relative"
                  {...(!prefersReducedMotion && { variants: itemVariants })}
                >
                  <Badge variant="outline" className="mb-3 bg-white/10 text-white border-white/30 text-xs">
                    {item.time}
                  </Badge>
                  <div className="mx-auto w-16 h-16 rounded-full bg-white text-orange-600 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-orange-100 text-sm">{item.description}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-12 -right-4 h-6 w-6 text-orange-300" />
                  )}
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </MotionSection>

        {/* Special Cases Section - NEW */}
        <MotionSection 
          className="py-16 bg-background"
          {...(!prefersReducedMotion && {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
            variants: sectionVariants
          })}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-orange-100 text-orange-700 border-orange-200">
                <Scale className="w-4 h-4 mr-1" />
                Casos Especiais
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Situações que Exigem <span className="text-orange-600">Atenção Especial</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Casos com maior complexidade e valores de indenização
              </p>
            </div>

            <MotionDiv 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              {...(!prefersReducedMotion && {
                variants: staggerContainer,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true }
              })}
            >
              {specialCases.map((item, index) => (
                <MotionDiv key={index} {...(!prefersReducedMotion && { variants: itemVariants })}>
                  <a
                    href={createWhatsAppLink(item.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    <Card className="h-full transition-all duration-300 hover:shadow-xl hover:border-orange-300 hover:-translate-y-1 cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                            <item.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-foreground mb-1">
                              {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
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
                </MotionDiv>
              ))}
            </MotionDiv>

            <div className="text-center mt-10">
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2"
              >
                <a href={createWhatsAppLink("Olá! Tenho um caso especial e preciso de orientação.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Tenho um Caso Especial
                </a>
              </Button>
            </div>
          </div>
        </MotionSection>

        {/* Testimonials */}
        <MotionSection 
          className="py-16 bg-orange-50"
          {...(!prefersReducedMotion && {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
            variants: sectionVariants
          })}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Casos de <span className="text-orange-600">Sucesso</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Veja o que nossos clientes conquistaram
              </p>
            </div>

            <MotionDiv 
              className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              {...(!prefersReducedMotion && {
                variants: staggerContainer,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true }
              })}
            >
              {testimonials.map((testimonial, index) => (
                <MotionDiv key={index} {...(!prefersReducedMotion && { variants: itemVariants })}>
                  <Card className="hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                      <div className="border-t pt-4">
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {testimonial.city}
                        </p>
                        <p className="text-sm text-muted-foreground">{testimonial.case}</p>
                        <p className="text-orange-600 font-bold text-lg mt-1">
                          Ganhou: {testimonial.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </MotionDiv>

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
        </MotionSection>

        {/* Calculators */}
        <MotionSection 
          className="py-16 bg-background"
          {...(!prefersReducedMotion && {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
            variants: sectionVariants
          })}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                <span className="text-orange-600">Calculadoras</span> Trabalhistas
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Simule seus valores antes de falar com o advogado
              </p>
            </div>

            <MotionDiv 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
              {...(!prefersReducedMotion && {
                variants: staggerContainer,
                initial: "hidden",
                whileInView: "visible",
                viewport: { once: true }
              })}
            >
              {calculators.map((calc, index) => (
                <MotionDiv key={index} {...(!prefersReducedMotion && { variants: itemVariants })}>
                  <Link to={calc.path} className="group block h-full">
                    <Card className="h-full hover:shadow-lg hover:border-orange-300 transition-all">
                      <CardContent className="p-6 text-center">
                        <Calculator className="h-10 w-10 mx-auto mb-4 text-orange-600 group-hover:scale-110 transition-transform" />
                        <h3 className="font-semibold text-foreground mb-1">{calc.title}</h3>
                        <p className="text-sm text-muted-foreground">{calc.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </MotionSection>

        {/* FAQ */}
        <MotionSection 
          className="py-16 bg-orange-50"
          {...(!prefersReducedMotion && {
            initial: "hidden",
            whileInView: "visible",
            viewport: { once: true, margin: "-50px" },
            variants: sectionVariants
          })}
        >
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
        </MotionSection>

        {/* Urgency Banner */}
        <section className="py-8 bg-red-600 text-white animate-pulse">
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
    </PageTransition>
  );
};

export default TrabalhistaLanding;

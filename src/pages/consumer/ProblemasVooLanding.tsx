import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Plane, 
  Clock, 
  UserX, 
  Package, 
  AlertTriangle, 
  ArrowLeftRight, 
  XCircle, 
  CalendarX, 
  Globe,
  MessageCircle,
  Calculator,
  ChevronLeft,
  Star,
  Shield,
  RefreshCw,
  Wallet,
  Scale,
  ChevronDown,
  Frown,
  Smile,
  AlertCircle,
  CheckCircle2,
  TimerReset
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PageTransition from "@/components/motion/PageTransition";
import AnimatedSection from "@/components/motion/AnimatedSection";
import StaggerContainer, { StaggerItem } from "@/components/motion/StaggerContainer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import logoAdvogado from "@/assets/logo-advogado-online.png";

const WHATSAPP_NUMBER = "5571997036269";
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

// 9 tipos de problemas com voos
const flightProblems = [
  {
    id: "cancelado",
    icon: Plane,
    title: "Voo Cancelado",
    description: "Cancelamento sem aviso ou com pouco aviso",
    minValue: 5000,
    maxValue: 15000,
    whatsappMessage: "Olá! Tive meu voo cancelado e gostaria de saber sobre meus direitos e possível indenização.",
  },
  {
    id: "atrasado",
    icon: Clock,
    title: "Voo Atrasado",
    description: "Atraso superior a 4 horas",
    minValue: 3000,
    maxValue: 10000,
    whatsappMessage: "Olá! Meu voo atrasou mais de 4 horas e gostaria de saber sobre indenização.",
  },
  {
    id: "overbooking",
    icon: UserX,
    title: "Overbooking",
    description: "Impedido de embarcar por excesso de passageiros",
    minValue: 6000,
    maxValue: 20000,
    whatsappMessage: "Olá! Fui impedido de embarcar por overbooking e preciso de orientação jurídica.",
  },
  {
    id: "bagagem-extraviada",
    icon: Package,
    title: "Bagagem Extraviada",
    description: "Mala perdida ou atrasada",
    minValue: 3000,
    maxValue: 8000,
    whatsappMessage: "Olá! Minha bagagem foi extraviada e gostaria de saber sobre indenização.",
  },
  {
    id: "bagagem-danificada",
    icon: AlertTriangle,
    title: "Bagagem Danificada",
    description: "Mala destruída ou danificada",
    minValue: 2000,
    maxValue: 6000,
    whatsappMessage: "Olá! Minha bagagem foi danificada e gostaria de orientação jurídica.",
  },
  {
    id: "conexao-perdida",
    icon: ArrowLeftRight,
    title: "Perda de Conexão",
    description: "Por culpa da companhia aérea",
    minValue: 4000,
    maxValue: 12000,
    whatsappMessage: "Olá! Perdi minha conexão por culpa da companhia aérea e preciso de ajuda.",
  },
  {
    id: "no-show",
    icon: XCircle,
    title: "No-Show Forçado",
    description: "Ida não usada = volta cancelada",
    minValue: 3000,
    maxValue: 8000,
    whatsappMessage: "Olá! Minha volta foi cancelada porque não usei a ida. Isso é legal? Preciso de orientação.",
  },
  {
    id: "alteracao",
    icon: CalendarX,
    title: "Alteração Unilateral",
    description: "Horário ou data alterados sem consentimento",
    minValue: 2500,
    maxValue: 7000,
    whatsappMessage: "Olá! A companhia alterou meu voo sem meu consentimento. Quais são meus direitos?",
  },
  {
    id: "internacional",
    icon: Globe,
    title: "Voo Internacional",
    description: "Problemas em voos internacionais",
    minValue: 10000,
    maxValue: 25000,
    whatsappMessage: "Olá! Tive problema com meu voo internacional e gostaria de orientação jurídica.",
  },
];

// Dados para tabela de indenizações
const indemnityData = [
  { problem: "Voo Cancelado", description: "Cancelamento sem aviso", min: "R$ 5.000", max: "R$ 15.000" },
  { problem: "Voo Atrasado", description: "Atraso > 4 horas", min: "R$ 3.000", max: "R$ 10.000" },
  { problem: "Overbooking", description: "Impedido de embarcar", min: "R$ 6.000", max: "R$ 20.000" },
  { problem: "Bagagem Extraviada", description: "Mala perdida/atrasada", min: "R$ 3.000", max: "R$ 8.000" },
  { problem: "Bagagem Danificada", description: "Danos materiais", min: "R$ 2.000", max: "R$ 6.000" },
  { problem: "Perda de Conexão", description: "Por culpa da cia. aérea", min: "R$ 4.000", max: "R$ 12.000" },
  { problem: "No-Show Forçado", description: "Volta cancelada", min: "R$ 3.000", max: "R$ 8.000" },
  { problem: "Alteração Unilateral", description: "Mudança sem aviso", min: "R$ 2.500", max: "R$ 7.000" },
  { problem: "Voo Internacional", description: "Problemas internacionais", min: "R$ 10.000", max: "R$ 25.000" },
];

// Seus direitos ANAC/CDC
const passengerRights = [
  {
    icon: Clock,
    title: "Assistência Material",
    description: "A partir de 1h: comunicação. 2h: alimentação. 4h: hospedagem e transporte.",
  },
  {
    icon: Wallet,
    title: "Reembolso Integral",
    description: "Direito a reembolso em até 7 dias para cancelamentos e atrasos superiores a 4h.",
  },
  {
    icon: RefreshCw,
    title: "Reacomodação",
    description: "Direito a ser reacomodado no próximo voo disponível, mesmo de outra companhia.",
  },
  {
    icon: Scale,
    title: "Danos Morais",
    description: "Indenização por transtornos, perda de compromissos e abalo emocional.",
  },
];

// Como funciona - 4 passos
const processSteps = [
  {
    step: 1,
    title: "Conte seu Caso",
    description: "Fale com nosso especialista via WhatsApp e explique o que aconteceu.",
  },
  {
    step: 2,
    title: "Análise Gratuita",
    description: "Avaliamos seu caso sem custo e informamos suas chances de sucesso.",
  },
  {
    step: 3,
    title: "Documentação",
    description: "Reunimos os documentos necessários e entramos com a ação.",
  },
  {
    step: 4,
    title: "Indenização",
    description: "Você recebe sua indenização. Só pagamos se você ganhar!",
  },
];

// Depoimentos expandidos (incluindo formato WhatsApp)
const testimonials = [
  {
    name: "Carlos M.",
    location: "São Paulo, SP",
    problem: "Voo Cancelado",
    amount: "R$ 12.000",
    text: "Meu voo foi cancelado em cima da hora e perdi uma reunião importante. O advogado resolveu tudo rapidamente e recebi uma indenização justa.",
    format: "card",
  },
  {
    name: "Ana P.",
    location: "Salvador, BA",
    problem: "Bagagem Extraviada",
    amount: "R$ 7.500",
    text: "Minha mala foi extraviada em uma viagem de lua de mel. Fiquei desesperada, mas o escritório me deu todo suporte e consegui indenização.",
    format: "card",
  },
  {
    name: "Roberto S.",
    location: "Rio de Janeiro, RJ",
    problem: "Overbooking",
    amount: "R$ 18.000",
    text: "Fui impedido de embarcar por overbooking mesmo tendo chegado com antecedência. Processo rápido e resultado excelente.",
    format: "card",
  },
  {
    name: "Fernanda L.",
    location: "Curitiba, PR",
    problem: "Voo Atrasado",
    amount: "R$ 8.500",
    text: "Meu voo atrasou 7 horas e perdi a festa de aniversário da minha filha. Consegui indenização sem sair de casa!",
    format: "whatsapp",
  },
  {
    name: "Marcos T.",
    location: "Belo Horizonte, MG",
    problem: "Perda de Conexão",
    amount: "R$ 11.000",
    text: "Perdi a conexão por atraso da GOL e fiquei preso no aeroporto por 12h. Recebi R$ 11 mil de indenização.",
    format: "whatsapp",
  },
  {
    name: "Juliana R.",
    location: "Brasília, DF",
    problem: "Bagagem Danificada",
    amount: "R$ 5.200",
    text: "Minha mala chegou completamente destruída. O escritório cuidou de tudo e recebi a indenização em 4 meses.",
    format: "whatsapp",
  },
  {
    name: "Pedro H.",
    location: "Recife, PE",
    problem: "Voo Internacional",
    amount: "R$ 22.000",
    text: "Tive meu voo internacional cancelado na Europa. Mesmo à distância, conseguiram resolver e recebi R$ 22 mil!",
    format: "card",
  },
];

// Companhias aéreas
const airlines = [
  "LATAM", "GOL", "Azul", "Avianca", "TAP", "American Airlines", "Emirates", "United"
];

// Antes vs Depois
const beforeAfter = {
  before: [
    "Sozinho contra a companhia aérea",
    "Sem saber quais são seus direitos",
    "Estressado e sem resposta",
    "Aceitando voucher desvalorizado",
  ],
  after: [
    "Advogado especialista ao seu lado",
    "Direitos garantidos pela ANAC/CDC",
    "Processo sem burocracia",
    "Indenização em dinheiro na conta",
  ],
};

// FAQ
const faqItems = [
  {
    question: "Qual o prazo para entrar com ação por problemas com voo?",
    answer: "Para voos nacionais, o prazo é de 5 anos. Para voos internacionais, o prazo é de 2 anos. É importante agir rápido para preservar provas e documentos.",
  },
  {
    question: "Preciso pagar algo adiantado?",
    answer: "Não! Trabalhamos no modelo \"só paga se ganhar\". Você só terá custos se houver sucesso na ação, e os honorários são cobrados sobre o valor recebido.",
  },
  {
    question: "Quais documentos preciso guardar?",
    answer: "Guarde cartão de embarque, comprovante de compra, e-mails da companhia, fotos de painéis mostrando atraso/cancelamento, e qualquer comunicação com a empresa.",
  },
  {
    question: "Quanto tempo demora o processo?",
    answer: "Casos simples podem ser resolvidos em 3-6 meses nos Juizados Especiais. Casos mais complexos podem levar 1-2 anos, mas muitas vezes conseguimos acordos mais rápidos.",
  },
  {
    question: "A companhia ofereceu voucher. Devo aceitar?",
    answer: "Cuidado! Vouchers geralmente têm valor inferior ao que você tem direito e podem incluir cláusulas que limitam seus direitos. Consulte-nos antes de aceitar qualquer oferta.",
  },
];

// Schema JSON-LD
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "name": "Advogado Especialista em Problemas Aéreos | Advogado Já",
      "description": "Indenização por voo cancelado, atrasado, overbooking, bagagem extraviada e outros problemas aéreos. Consulta gratuita. Só paga se ganhar. Advogado aviação.",
      "url": "https://advogadoja.lovable.app/advogado-problemas-voo",
      "telephone": "+5571997036269",
      "areaServed": "BR",
      "serviceType": ["Direito do Consumidor", "Direitos do Passageiro Aéreo", "Indenização Voo Cancelado"],
      "priceRange": "Consulta Gratuita",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "847",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": faqItems.map((item) => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer,
        },
      })),
    },
  ],
};

// WhatsApp-style testimonial bubble
const WhatsAppBubble = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
  <div className="bg-[#1A2C1A] rounded-xl rounded-tl-sm p-4 max-w-sm relative border border-[#25D366]/20">
    <div className="flex items-center gap-2 mb-2">
      <div className="w-8 h-8 rounded-full bg-[#25D366]/30 flex items-center justify-center text-[#25D366] text-xs font-bold">
        {testimonial.name.charAt(0)}
      </div>
      <span className="text-[#25D366] text-sm font-semibold">{testimonial.name}</span>
    </div>
    <p className="text-zinc-200 text-sm leading-relaxed">{testimonial.text}</p>
    <div className="flex justify-between items-center mt-2">
      <span className="text-[#D4AF37] font-bold text-sm">{testimonial.amount}</span>
      <span className="text-zinc-500 text-xs">✓✓</span>
    </div>
  </div>
);

const ProblemasVooLanding = () => {
  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`${WHATSAPP_BASE_URL}?text=${encodedMessage}`, "_blank");
  };

  const defaultWhatsAppMessage = "Olá! Tive um problema com meu voo e gostaria de saber sobre meus direitos e possível indenização.";

  return (
    <PageTransition>
      <Helmet>
        <title>{`Problemas com Voo? Indenização de até R$ 25.000 | Advogado Já`}</title>
        <meta
          name="description"
          content="Voo cancelado, atrasado, overbooking ou bagagem perdida? Advogado especialista em direitos do passageiro aéreo. Indenização voo cancelado. Consulta gratuita. Só paga se ganhar."
        />
        <link rel="canonical" href="https://advogadoja.lovable.app/advogado-problemas-voo" />
        <meta property="og:title" content="Problemas com Voo? Indenização de até R$ 25.000 | Advogado Já" />
        <meta property="og:description" content="Voo cancelado, atrasado, overbooking ou bagagem perdida? Advogado especialista em direitos do passageiro aéreo." />
        <meta property="og:url" content="https://advogadoja.lovable.app/advogado-problemas-voo" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Header Minimalista */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/30">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors active:scale-95">
                <ChevronLeft className="w-5 h-5 text-[#D4AF37]" />
              </Link>
              <img src={logoAdvogado} alt="Advogado Já" className="h-8" />
            </div>
            <div className="flex items-center gap-2">
              <Link to="/calculadora-voo-cancelado">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 active:scale-95 transition-transform hidden sm:flex"
                >
                  <Calculator className="w-4 h-4 mr-1" />
                  Calculadora
                </Button>
              </Link>
              <Button 
                size="sm" 
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white active:scale-95 transition-transform"
                onClick={() => handleWhatsAppClick(defaultWhatsAppMessage)}
              >
                <MessageCircle className="w-4 h-4 mr-1" />
                <span className="hidden sm:inline">WhatsApp</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section com Vídeo de Fundo */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-8">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster="/videos/hero-background.mp4"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
          
          {/* Glow Effect */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 container mx-auto px-4 text-center">
            {/* Badge de Urgência */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 mb-6">
              <Clock className="w-4 h-4 text-[#F5D86A]" />
              <span className="text-sm text-[#F5D86A] font-medium">Prazo de 5 anos para voos nacionais</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Problema com Voo?{" "}
              <span className="text-[#D4AF37]">Indenização de até R$ 25.000</span>
            </h1>
            
            <p className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-6">
              Voo cancelado, atrasado, overbooking ou bagagem extraviada? 
              Advogados especialistas em direitos do passageiro aéreo prontos para defender você.
            </p>

            {/* Prova Social no Hero */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {/* Micro-avatares */}
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {["C", "A", "R", "F", "M"].map((initial, i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-[#D4AF37]/30 border-2 border-black flex items-center justify-center text-[#D4AF37] text-xs font-bold"
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <div className="ml-3 text-left">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                    <span className="text-[#D4AF37] text-sm font-bold ml-1">4.9</span>
                  </div>
                  <p className="text-zinc-400 text-xs">847 passageiros já indenizados</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-[#D4AF37] hover:bg-[#B8860B] text-black font-bold px-8 py-6 text-lg active:scale-95 transition-transform"
                onClick={() => handleWhatsAppClick(defaultWhatsAppMessage)}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Falar com Especialista
              </Button>
              <Link to="/calculadora-voo-cancelado">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 px-8 py-6 text-lg active:scale-95 transition-transform w-full sm:w-auto"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calcular Indenização
                </Button>
              </Link>
            </div>

            <p className="text-zinc-500 text-sm mt-6">
              ✓ Consulta gratuita &nbsp; ✓ Só paga se ganhar &nbsp; ✓ Atendimento 24h
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <AnimatedSection>
          <section className="bg-zinc-950 border-y border-[#D4AF37]/20 py-6">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">5.000+</p>
                  <p className="text-zinc-400 text-sm">Casos Resolvidos</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">97%</p>
                  <p className="text-zinc-400 text-sm">Taxa de Sucesso</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">R$ 3M+</p>
                  <p className="text-zinc-400 text-sm">Indenizações</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">48h</p>
                  <p className="text-zinc-400 text-sm">Resposta Inicial</p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Companhias Aéreas - Logos */}
        <AnimatedSection>
          <section className="py-8 bg-black border-b border-zinc-800/50">
            <div className="container mx-auto px-4">
              <p className="text-zinc-500 text-sm text-center mb-5 uppercase tracking-wider">
                Já processamos todas as grandes companhias aéreas
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {airlines.map((airline) => (
                  <div
                    key={airline}
                    className="px-5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-sm font-medium hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all"
                  >
                    {airline}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Grid de Problemas */}
        <section className="py-12 sm:py-16 bg-black">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3">
                Selecione seu <span className="text-[#D4AF37]">Problema</span>
              </h2>
              <p className="text-zinc-400 text-center mb-8 max-w-xl mx-auto">
                Clique no seu problema para falar diretamente com um advogado especialista em direitos do passageiro aéreo
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {flightProblems.map((problem) => (
                <StaggerItem key={problem.id}>
                  <Card 
                    className="bg-zinc-900 border-l-4 border-l-[#D4AF37] border-t-0 border-r-0 border-b-0 p-4 cursor-pointer hover:bg-zinc-800 active:scale-[0.98] transition-all group"
                    onClick={() => handleWhatsAppClick(problem.whatsappMessage)}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-[#D4AF37]/10 group-hover:bg-[#D4AF37]/20 transition-colors">
                        <problem.icon className="w-6 h-6 text-[#D4AF37]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-white mb-1">{problem.title}</h3>
                        <p className="text-zinc-400 text-sm mb-2">{problem.description}</p>
                        <p className="text-[#D4AF37] text-sm font-semibold">
                          R$ {problem.minValue.toLocaleString()} - R$ {problem.maxValue.toLocaleString()}
                        </p>
                      </div>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <AnimatedSection delay={0.3}>
              <div className="text-center mt-8">
                <Button 
                  size="lg" 
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 active:scale-95 transition-transform"
                  onClick={() => handleWhatsAppClick(defaultWhatsAppMessage)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Outro Problema? Fale Conosco
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Tabela de Indenizações */}
        <AnimatedSection>
          <section className="py-12 sm:py-16 bg-zinc-950">
            <div className="container mx-auto px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3">
                Tabela de <span className="text-[#D4AF37]">Indenizações</span>
              </h2>
              <p className="text-zinc-400 text-center mb-8 max-w-xl mx-auto">
                Valores estimados com base em decisões judiciais recentes de indenização por voo cancelado e outros problemas
              </p>

              {/* Mobile: Cards empilhados */}
              <div className="sm:hidden space-y-3">
                {indemnityData.map((item, index) => (
                  <Card 
                    key={index} 
                    className="bg-zinc-900 border-l-4 border-l-[#D4AF37] border-t-0 border-r-0 border-b-0 p-4"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold text-white">{item.problem}</h3>
                      <span className="text-[#D4AF37] font-semibold text-sm">{item.max}</span>
                    </div>
                    <p className="text-zinc-400 text-sm mb-1">{item.description}</p>
                    <p className="text-zinc-500 text-xs">Mínimo: {item.min}</p>
                  </Card>
                ))}
              </div>

              {/* Desktop: Tabela */}
              <div className="hidden sm:block overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-[#D4AF37]/30 hover:bg-transparent">
                      <TableHead className="text-[#D4AF37] font-bold">Problema</TableHead>
                      <TableHead className="text-[#D4AF37] font-bold">Descrição</TableHead>
                      <TableHead className="text-[#D4AF37] font-bold text-right">Mínimo</TableHead>
                      <TableHead className="text-[#D4AF37] font-bold text-right">Máximo</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {indemnityData.map((item, index) => (
                      <TableRow key={index} className="border-zinc-800 hover:bg-zinc-900/50">
                        <TableCell className="font-medium text-white">{item.problem}</TableCell>
                        <TableCell className="text-zinc-400">{item.description}</TableCell>
                        <TableCell className="text-right text-zinc-300">{item.min}</TableCell>
                        <TableCell className="text-right text-[#D4AF37] font-semibold">{item.max}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <p className="text-zinc-500 text-xs text-center mt-4">
                * Valores estimados. Cada caso é único e o valor final depende das circunstâncias específicas.
              </p>

              <div className="text-center mt-8">
                <Button 
                  size="lg" 
                  className="bg-[#D4AF37] hover:bg-[#B8860B] text-black font-bold px-8 active:scale-95 transition-transform"
                  onClick={() => handleWhatsAppClick(defaultWhatsAppMessage)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consultar Meu Caso
                </Button>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Antes vs Depois */}
        <AnimatedSection>
          <section className="py-12 sm:py-16 bg-black">
            <div className="container mx-auto px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3">
                O Que Muda com um <span className="text-[#D4AF37]">Advogado Especialista</span>
              </h2>
              <p className="text-zinc-400 text-center mb-8 max-w-xl mx-auto">
                Pare de ser ignorado pela companhia aérea
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                {/* ANTES */}
                <div className="bg-red-950/20 border border-red-900/30 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <Frown className="w-6 h-6 text-red-400" />
                    <h3 className="text-lg font-bold text-red-400">SEM advogado</h3>
                  </div>
                  <ul className="space-y-3">
                    {beforeAfter.before.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-400/70 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* DEPOIS */}
                <div className="bg-[#D4AF37]/5 border border-[#D4AF37]/30 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <Smile className="w-6 h-6 text-[#D4AF37]" />
                    <h3 className="text-lg font-bold text-[#D4AF37]">COM Advogado Já</h3>
                  </div>
                  <ul className="space-y-3">
                    {beforeAfter.after.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-[#D4AF37]/80 mt-0.5 flex-shrink-0" />
                        <span className="text-zinc-200 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Seus Direitos ANAC/CDC */}
        <section className="py-12 sm:py-16 bg-zinc-950">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3">
                Conheça seus <span className="text-[#D4AF37]">Direitos</span>
              </h2>
              <p className="text-zinc-400 text-center mb-8 max-w-xl mx-auto">
                Garantidos pela ANAC e pelo Código de Defesa do Consumidor — seus direitos como passageiro aéreo
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {passengerRights.map((right, index) => (
                <StaggerItem key={index}>
                  <Card 
                    className="bg-zinc-900 border border-[#D4AF37]/20 p-5 text-center hover:border-[#D4AF37]/40 transition-colors"
                  >
                    <div className="inline-flex p-3 rounded-full bg-[#D4AF37]/10 mb-4">
                      <right.icon className="w-6 h-6 text-[#D4AF37]" />
                    </div>
                    <h3 className="font-bold text-white mb-2">{right.title}</h3>
                    <p className="text-zinc-400 text-sm">{right.description}</p>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Como Funciona */}
        <AnimatedSection>
          <section className="py-12 sm:py-16 bg-black">
            <div className="container mx-auto px-4">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3">
                Como <span className="text-[#D4AF37]">Funciona</span>
              </h2>
              <p className="text-zinc-400 text-center mb-8 max-w-xl mx-auto">
                Processo simples e transparente
              </p>

              {/* Mobile: Scroll horizontal */}
              <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-4 pb-4 sm:hidden">
                {processSteps.map((step) => (
                  <Card 
                    key={step.step} 
                    className="bg-zinc-900 border border-[#D4AF37]/20 p-5 min-w-[280px] snap-center flex-shrink-0"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black font-bold flex items-center justify-center mb-4">
                      {step.step}
                    </div>
                    <h3 className="font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-zinc-400 text-sm">{step.description}</p>
                  </Card>
                ))}
              </div>

              {/* Desktop: Grid */}
              <StaggerContainer className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {processSteps.map((step) => (
                  <StaggerItem key={step.step}>
                    <Card 
                      className="bg-zinc-900 border border-[#D4AF37]/20 p-5"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-black font-bold flex items-center justify-center mb-4">
                        {step.step}
                      </div>
                      <h3 className="font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-zinc-400 text-sm">{step.description}</p>
                    </Card>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </section>
        </AnimatedSection>

        {/* Depoimentos Expandidos */}
        <section className="py-12 sm:py-16 bg-zinc-950">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3">
                Casos de <span className="text-[#D4AF37]">Sucesso</span>
              </h2>
              <p className="text-zinc-400 text-center mb-8 max-w-xl mx-auto">
                Veja o que nossos clientes conquistaram com advogado especialista em aviação
              </p>
            </AnimatedSection>

            {/* Card testimonials */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              {testimonials.filter(t => t.format === "card").map((testimonial, index) => (
                <StaggerItem key={index}>
                  <Card className="bg-zinc-900 border border-[#D4AF37]/20 p-5 h-full">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                      ))}
                    </div>
                    <p className="text-zinc-300 text-sm mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex justify-between items-end mt-auto">
                      <div>
                        <p className="font-bold text-white text-sm">{testimonial.name}</p>
                        <p className="text-zinc-500 text-xs">{testimonial.location}</p>
                        <p className="text-zinc-400 text-xs">{testimonial.problem}</p>
                      </div>
                      <p className="text-[#D4AF37] font-bold">{testimonial.amount}</p>
                    </div>
                  </Card>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* WhatsApp-style testimonials */}
            <AnimatedSection delay={0.2}>
              <div className="max-w-2xl mx-auto">
                <p className="text-zinc-500 text-xs text-center mb-4 uppercase tracking-wider">
                  Mensagens reais de clientes
                </p>
                <div className="space-y-3">
                  {testimonials.filter(t => t.format === "whatsapp").map((testimonial, index) => (
                    <WhatsAppBubble key={index} testimonial={testimonial} />
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="text-center mt-8">
                <Button 
                  size="lg" 
                  className="bg-[#25D366] hover:bg-[#20BD5A] text-white font-bold px-8 active:scale-95 transition-transform"
                  onClick={() => handleWhatsAppClick(defaultWhatsAppMessage)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Quero Minha Indenização
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ + CTA Final com Urgência */}
        <section className="py-12 sm:py-16 bg-black">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3">
                Perguntas <span className="text-[#D4AF37]">Frequentes</span>
              </h2>
              <p className="text-zinc-400 text-center mb-8 max-w-xl mx-auto">
                Tire suas dúvidas sobre direitos do passageiro aéreo e indenização por voo cancelado
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <div className="max-w-2xl mx-auto">
                <Accordion type="single" collapsible className="space-y-3">
                  {faqItems.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`item-${index}`}
                      className="bg-zinc-900 border border-[#D4AF37]/20 rounded-lg px-4 overflow-hidden"
                    >
                      <AccordionTrigger className="text-left text-white hover:text-[#D4AF37] hover:no-underline min-h-[56px] py-4">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-zinc-400 pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>

            {/* CTA Final com Urgência */}
            <AnimatedSection delay={0.2}>
              <div className="mt-12 text-center bg-gradient-to-r from-[#D4AF37]/10 via-[#D4AF37]/20 to-[#D4AF37]/10 rounded-2xl p-8 border border-[#D4AF37]/30">
                <Shield className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Não deixe a companhia aérea sair impune
                </h3>
                
                {/* Urgency Timer */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <TimerReset className="w-5 h-5 text-red-400" />
                  <p className="text-red-400 text-sm font-medium">
                    Seu prazo está correndo — cada dia que passa pode reduzir sua indenização
                  </p>
                </div>

                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                  Você tem direitos garantidos por lei. Fale agora com um advogado especialista em aviação e descubra quanto pode receber.
                </p>
                <Button 
                  size="lg" 
                  className="bg-[#D4AF37] hover:bg-[#B8860B] text-black font-bold px-10 py-6 text-lg active:scale-95 transition-transform"
                  onClick={() => handleWhatsAppClick(defaultWhatsAppMessage)}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Consulta Gratuita no WhatsApp
                </Button>
                <p className="text-zinc-500 text-sm mt-4">
                  ⚡ Resposta em até 15 minutos durante horário comercial
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* SEO Hidden Keywords */}
        <div className="sr-only" aria-hidden="true">
          <p>indenização voo cancelado advogado aviação direitos passageiro aereo LATAM GOL Azul overbooking bagagem extraviada advogado especialista problemas voo</p>
        </div>

        {/* Footer Simples */}
        <footer className="py-8 bg-black border-t border-zinc-800">
          <div className="container mx-auto px-4 text-center">
            <img src={logoAdvogado} alt="Advogado Já" className="h-8 mx-auto mb-4" />
            <p className="text-zinc-500 text-sm mb-4">
              Advogados especializados em Direito do Consumidor e Direitos do Passageiro Aéreo
            </p>
            <div className="flex justify-center gap-4 text-sm text-zinc-600">
              <Link to="/privacidade" className="hover:text-[#D4AF37] transition-colors">
                Privacidade
              </Link>
              <Link to="/termos-de-uso" className="hover:text-[#D4AF37] transition-colors">
                Termos de Uso
              </Link>
            </div>
            <p className="text-zinc-700 text-xs mt-4">
              © {new Date().getFullYear()} Advogado Já. Todos os direitos reservados.
            </p>
          </div>
        </footer>

        {/* Botão Flutuante WhatsApp */}
        <FloatingWhatsApp />
      </div>
    </PageTransition>
  );
};

export default ProblemasVooLanding;

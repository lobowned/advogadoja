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
  Calculator,
  ArrowRight,
  Shield,
  Scale,
  Phone,
  Star,
  UserX,
  Baby,
  Zap,
  Building2,
  MapPin,
} from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import PageTransition from "@/components/motion/PageTransition";
import BackButton from "@/components/BackButton";
import logoAdvogado from "@/assets/logo-advogado-online.png";

const WHATSAPP_NUMBER = "5571997036269";

const createWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Problemas + Casos Especiais unificados (6 cards principais)
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
    icon: Heart,
    title: "Acidente de Trabalho",
    value: "R$ 20.000 - R$ 200.000",
    message: "Sofri acidente de trabalho",
    description: "Indenização por danos, estabilidade, pensão",
  },
  {
    icon: Building2,
    title: "Pejotização Forçada",
    value: "R$ 15.000 - R$ 100.000",
    message: "Trabalhei como PJ mas tinha subordinação de CLT",
    description: "PJ que na prática era CLT tem direitos",
  },
  {
    icon: Baby,
    title: "Gestante Demitida",
    value: "Salários + estabilidade",
    message: "Fui demitida grávida ou após o parto",
    description: "Estabilidade até 5 meses após o parto",
  },
  {
    icon: UserX,
    title: "Demissão Discriminatória",
    value: "R$ 20.000 - R$ 100.000",
    message: "Fui demitido de forma discriminatória",
    description: "Por doença, idade, deficiência ou gravidez",
  },
];

const indemnityTable = [
  { problem: "Demissão sem justa causa (5 anos)", value: "R$ 15.000 - R$ 50.000" },
  { problem: "Horas extras (últimos 5 anos)", value: "R$ 10.000 - R$ 100.000" },
  { problem: "Assédio moral comprovado", value: "R$ 10.000 - R$ 80.000" },
  { problem: "Acidente com sequelas", value: "R$ 50.000 - R$ 500.000" },
  { problem: "Pejotização irregular", value: "R$ 20.000 - R$ 150.000" },
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
    text: "Fui demitido após 8 anos e recebi R$ 45.000 que a empresa não queria pagar.",
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
    case: "Pejotização irregular",
    value: "R$ 65.000",
    text: "Era PJ mas trabalhava como CLT. Reconheceram o vínculo e ganhei R$ 65.000.",
  },
];

const faqs = [
  {
    question: "Quanto tempo tenho para entrar com ação trabalhista?",
    answer: "Você tem até 2 anos após a demissão para entrar com a ação, podendo cobrar os últimos 5 anos de trabalho.",
  },
  {
    question: "Preciso pagar algo para iniciar a ação?",
    answer: "Não! Trabalhamos no modelo de honorários de êxito: você só paga se ganhar a causa.",
  },
  {
    question: "Quanto tempo demora um processo trabalhista?",
    answer: "Em média, de 8 meses a 2 anos. Com acordos, pode ser resolvido em até 3 meses.",
  },
  {
    question: "Quais documentos preciso?",
    answer: "CTPS, holerites, contrato de trabalho e termo de rescisão. Não tem todos? Orientamos você.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "@id": "https://advogadoja.lovable.app/advogado-trabalhista-online#service",
      "name": "Advogado Trabalhista Online - AdvogadoJá",
      "description": "Advogado trabalhista especializado em demissão, horas extras, assédio moral e acidente de trabalho. Consulta gratuita.",
      "url": "https://advogadoja.lovable.app/advogado-trabalhista-online",
      "telephone": "+55 71 99703-6269",
      "areaServed": { "@type": "Country", "name": "Brasil" },
      "serviceType": ["Direito Trabalhista", "Ação Trabalhista"],
    },
    {
      "@type": "FAQPage",
      "@id": "https://advogadoja.lovable.app/advogado-trabalhista-online#faq",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
      }))
    },
  ]
};

const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

// Cores Gold
const GOLD = "#D4AF37";
const GOLD_DARK = "#B8860B";
const GOLD_LIGHT = "#F5D86A";

const TrabalhistaLanding = () => {
  const prefersReducedMotion = useReducedMotion();
  const MotionSection = prefersReducedMotion ? 'section' : m.section;
  const MotionDiv = prefersReducedMotion ? 'div' : m.div;

  return (
    <PageTransition>
      <Helmet>
        <title>Advogado Trabalhista Online | Demissão, Horas Extras | Consulta Grátis</title>
        <meta name="description" content="Advogado trabalhista online para demissão, horas extras, pejotização e acidente de trabalho. Consulta gratuita. Só paga se ganhar." />
        <link rel="canonical" href="https://advogadoja.lovable.app/advogado-trabalhista-online" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-black">
        {/* Header Minimalista - Preto com borda dourada */}
        <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#D4AF37]/30">
          <div className="container mx-auto px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <BackButton to="/" className="text-zinc-400 hover:text-[#D4AF37]" />
              <Link to="/" className="flex items-center gap-2">
                <img src={logoAdvogado} alt="AdvogadoJá" className="h-10 w-auto brightness-0 invert" />
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/calculadora-trabalhista" className="hidden sm:flex items-center gap-1 text-zinc-400 hover:text-[#D4AF37] text-sm transition-colors">
                <Calculator className="h-4 w-4" />
                Calculadora
              </Link>
              <Button asChild className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
                <a href={createWhatsAppLink("Olá! Preciso de um advogado trabalhista urgente.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden sm:inline">WhatsApp</span>
                </a>
              </Button>
            </div>
          </div>
        </header>

        {/* HERO - Fundo preto com destaques dourados */}
        <MotionSection 
          className="relative bg-black py-20 md:py-28 overflow-hidden"
          {...(!prefersReducedMotion && { initial: "hidden", animate: "visible", variants: sectionVariants })}
        >
          {/* Gradient overlay sutil */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-black to-zinc-950" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge estático elegante */}
              <MotionDiv 
                className="flex justify-center mb-8"
                {...(!prefersReducedMotion && { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.4 } })}
              >
                <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-4 py-2 text-sm font-medium">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Prazo de 2 anos para entrar com ação
                </Badge>
              </MotionDiv>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-900 text-zinc-300 text-sm font-medium rounded-full border border-zinc-800">
                  <Clock className="h-4 w-4 text-[#D4AF37]" />
                  Atendimento 24h
                </span>
                <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-zinc-900 text-zinc-300 text-sm font-medium rounded-full border border-zinc-800">
                  <Shield className="h-4 w-4 text-[#D4AF37]" />
                  Só Paga se Ganhar
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Demitido?{" "}
                <span className="text-[#D4AF37]">Recupere Seus Direitos</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-zinc-400 mb-10 max-w-2xl mx-auto">
                Advogado trabalhista online. Consulta <span className="text-white font-semibold">100% gratuita</span>.
                Atendimento para todo o Brasil.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#B8860B] text-black text-lg px-8 py-6 gap-2 shadow-lg font-semibold">
                  <a href={createWhatsAppLink("Olá! Preciso de orientação sobre meus direitos trabalhistas.")} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Falar com Advogado
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 gap-2 border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]">
                  <Link to="/calculadora-trabalhista">
                    <Calculator className="h-5 w-5" />
                    Calcular Rescisão
                  </Link>
                </Button>
              </div>

              <p className="mt-8 text-sm text-zinc-500 flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                WhatsApp: (71) 99703-6269
              </p>
            </div>
          </div>
        </MotionSection>

        {/* Stats Bar - Dourado elegante */}
        <MotionSection 
          className="py-8 bg-gradient-to-r from-[#D4AF37] via-[#F5D86A] to-[#D4AF37]"
          {...(!prefersReducedMotion && { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-50px" }, variants: sectionVariants })}
        >
          <div className="container mx-auto px-4">
            <MotionDiv 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
              {...(!prefersReducedMotion && { variants: staggerContainer, initial: "hidden", whileInView: "visible", viewport: { once: true } })}
            >
              {[
                { value: "8.000+", label: "Casos Resolvidos" },
                { value: "95%", label: "Taxa de Sucesso" },
                { value: "R$ 15M+", label: "Recuperados" },
                { value: "24h", label: "Atendimento" },
              ].map((stat, index) => (
                <MotionDiv key={index} {...(!prefersReducedMotion && { variants: itemVariants })}>
                  <p className="text-3xl md:text-4xl font-bold text-black">{stat.value}</p>
                  <p className="text-black/70 text-sm">{stat.label}</p>
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </MotionSection>

        {/* Problemas Grid - Cards escuros com bordas douradas */}
        <MotionSection 
          className="py-20 bg-zinc-950"
          {...(!prefersReducedMotion && { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-50px" }, variants: sectionVariants })}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Qual é o Seu <span className="text-[#D4AF37]">Problema?</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Clique no seu problema e fale diretamente com um advogado
              </p>
            </div>

            <MotionDiv 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
              {...(!prefersReducedMotion && { variants: staggerContainer, initial: "hidden", whileInView: "visible", viewport: { once: true } })}
            >
              {problems.map((problem, index) => (
                <MotionDiv key={index} {...(!prefersReducedMotion && { variants: itemVariants })}>
                  <a href={createWhatsAppLink(problem.message)} target="_blank" rel="noopener noreferrer" className="group block h-full">
                    <Card className="h-full bg-zinc-900 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10 hover:-translate-y-1 cursor-pointer border-l-4 border-l-[#D4AF37]">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                            <problem.icon className="h-6 w-6" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-lg text-white mb-1">{problem.title}</h3>
                            <p className="text-sm text-zinc-400 mb-2">{problem.description}</p>
                            <p className="text-[#D4AF37] font-bold">{problem.value}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex items-center justify-end text-sm text-[#D4AF37] group-hover:text-[#F5D86A]">
                          Falar sobre isso
                          <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </MotionDiv>
              ))}
            </MotionDiv>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
                <a href={createWhatsAppLink("Olá! Tenho um problema trabalhista e preciso de orientação.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Outro Problema? Fale Conosco
                </a>
              </Button>
            </div>
          </div>
        </MotionSection>

        {/* Tabela de Valores - Fundo preto com bordas douradas */}
        <MotionSection 
          className="py-20 bg-black"
          {...(!prefersReducedMotion && { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-50px" }, variants: sectionVariants })}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Valores de <span className="text-[#D4AF37]">Indenização</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Veja quanto você pode receber em uma ação trabalhista
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              <Card className="overflow-hidden bg-zinc-900 border-[#D4AF37]/30">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-[#D4AF37]">
                      <tr>
                        <th className="px-6 py-4 text-left font-semibold text-black">Tipo de Problema</th>
                        <th className="px-6 py-4 text-right font-semibold text-black">Valor Estimado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {indemnityTable.map((item, index) => (
                        <tr key={index} className={`border-b border-zinc-800 ${index % 2 === 0 ? "bg-zinc-900" : "bg-zinc-900/50"}`}>
                          <td className="px-6 py-4 text-zinc-300">{item.problem}</td>
                          <td className="px-6 py-4 text-right font-bold text-[#D4AF37]">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
              <p className="text-center text-sm text-zinc-500 mt-4">
                *Valores estimados. Cada caso é analisado individualmente.
              </p>
            </div>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
                <a href={createWhatsAppLink("Olá! Quero saber quanto posso receber no meu caso trabalhista.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Calcular Meu Caso
                </a>
              </Button>
            </div>
          </div>
        </MotionSection>

        {/* Como Funciona - Design minimalista escuro */}
        <MotionSection 
          className="py-20 bg-zinc-950"
          {...(!prefersReducedMotion && { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-50px" }, variants: sectionVariants })}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Como <span className="text-[#D4AF37]">Funciona</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Processo simples e sem burocracia
              </p>
            </div>

            <MotionDiv 
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
              {...(!prefersReducedMotion && { variants: staggerContainer, initial: "hidden", whileInView: "visible", viewport: { once: true } })}
            >
              {steps.map((item, index) => (
                <MotionDiv key={index} className="text-center relative" {...(!prefersReducedMotion && { variants: itemVariants })}>
                  <Badge className="mb-4 bg-zinc-800 text-[#D4AF37] border-[#D4AF37]/30 text-xs">
                    {item.time}
                  </Badge>
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#D4AF37] text-black flex items-center justify-center text-2xl font-bold mb-4 shadow-lg shadow-[#D4AF37]/20">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2">{item.title}</h3>
                  <p className="text-zinc-400 text-sm">{item.description}</p>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden lg:block absolute top-16 -right-4 h-6 w-6 text-[#D4AF37]/50" />
                  )}
                </MotionDiv>
              ))}
            </MotionDiv>
          </div>
        </MotionSection>

        {/* Depoimentos - Cards escuros elegantes */}
        <MotionSection 
          className="py-20 bg-black"
          {...(!prefersReducedMotion && { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-50px" }, variants: sectionVariants })}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Casos de <span className="text-[#D4AF37]">Sucesso</span>
              </h2>
              <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
                Veja o que nossos clientes conquistaram
              </p>
            </div>

            <MotionDiv 
              className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
              {...(!prefersReducedMotion && { variants: staggerContainer, initial: "hidden", whileInView: "visible", viewport: { once: true } })}
            >
              {testimonials.map((testimonial, index) => (
                <MotionDiv key={index} {...(!prefersReducedMotion && { variants: itemVariants })}>
                  <Card className="h-full bg-zinc-900 border-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-colors">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-[#D4AF37] text-[#D4AF37]" />
                        ))}
                      </div>
                      <p className="text-zinc-300 mb-4 italic">"{testimonial.text}"</p>
                      <div className="border-t border-zinc-800 pt-4">
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-zinc-500 flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {testimonial.city}
                        </p>
                        <p className="text-sm text-zinc-500">{testimonial.case}</p>
                        <p className="text-[#D4AF37] font-bold text-lg mt-2">
                          Ganhou: {testimonial.value}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </MotionDiv>

            <div className="text-center mt-12">
              <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-2">
                <a href={createWhatsAppLink("Olá! Vi os casos de sucesso e quero avaliar minha situação.")} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  Quero Ser o Próximo
                </a>
              </Button>
            </div>
          </div>
        </MotionSection>

        {/* FAQ + CTA Final combinados */}
        <MotionSection 
          className="py-20 bg-zinc-950"
          {...(!prefersReducedMotion && { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-50px" }, variants: sectionVariants })}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Dúvidas <span className="text-[#D4AF37]">Frequentes</span>
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full mb-12">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-zinc-800">
                    <AccordionTrigger className="text-left text-white hover:text-[#D4AF37] py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400 pb-4">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              {/* CTA Final integrado */}
              <div className="text-center p-10 rounded-2xl bg-gradient-to-br from-zinc-900 to-black border border-[#D4AF37]/30">
                <Scale className="h-12 w-12 mx-auto mb-6 text-[#D4AF37]" />
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Pronto para Recuperar Seus Direitos?
                </h3>
                <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
                  Consulta gratuita. Só paga se ganhar. Atendimento 24 horas.
                </p>
                <Button asChild size="lg" className="bg-[#D4AF37] hover:bg-[#B8860B] text-black text-lg px-10 py-6 gap-2 shadow-xl font-semibold">
                  <a href={createWhatsAppLink("Olá! Quero falar com um advogado trabalhista agora.")} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-6 w-6" />
                    Falar com Advogado Agora
                  </a>
                </Button>
                <p className="mt-6 text-zinc-500 flex items-center justify-center gap-2 text-sm">
                  <Phone className="h-4 w-4" />
                  (71) 99703-6269 • WhatsApp 24h
                </p>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Footer Simples - Preto */}
        <footer className="bg-black border-t border-zinc-900 py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img src={logoAdvogado} alt="AdvogadoJá" className="h-8 w-auto brightness-0 invert opacity-70" />
                <span className="text-zinc-500 text-sm">Advocacia Trabalhista Online</span>
              </div>
              <div className="flex items-center gap-6 text-sm text-zinc-500">
                <Link to="/privacidade" className="hover:text-[#D4AF37] transition-colors">Privacidade</Link>
                <Link to="/termos-de-uso" className="hover:text-[#D4AF37] transition-colors">Termos</Link>
                <Link to="/calculadoras" className="hover:text-[#D4AF37] transition-colors">Calculadoras</Link>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-zinc-900 text-center text-sm text-zinc-600">
              © {new Date().getFullYear()} AdvogadoJá. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default TrabalhistaLanding;

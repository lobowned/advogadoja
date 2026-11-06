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
  UserX,
  Baby,
  Building2,
} from "lucide-react";
import { m, useReducedMotion } from "framer-motion";
import PageTransition from "@/components/motion/PageTransition";
import BackButton from "@/components/BackButton";
import LawyerChatSection from "@/components/LawyerChatSection";
import logoAdvogado from "@/assets/logo-advogado-online.png";

const WHATSAPP_NUMBER = "5571997036269";

const createWhatsAppLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

// Problemas + Casos Especiais unificados (6 cards principais)
const problems = [
  {
    icon: Briefcase,
    title: "Demissão sem Justa Causa",
    description: "Verbas rescisórias, FGTS + 40%, aviso prévio",
  },
  {
    icon: Clock,
    title: "Horas Extras Não Pagas",
    description: "Últimos 5 anos podem ser cobrados",
  },
  {
    icon: Heart,
    title: "Acidente de Trabalho",
    description: "Indenização por danos, estabilidade, pensão",
  },
  {
    icon: Building2,
    title: "Pejotização Forçada",
    description: "PJ que na prática era CLT tem direitos",
  },
  {
    icon: Baby,
    title: "Gestante Demitida",
    description: "Estabilidade até 5 meses após o parto",
  },
  {
    icon: UserX,
    title: "Demissão Discriminatória",
    description: "Por doença, idade, deficiência ou gravidez",
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
      "@id": "https://riccio-advocacia.lovable.app/advogado-trabalhista-online#service",
      "name": "Advogado Trabalhista Online - AdvogadoJá",
      "description": "Advogado trabalhista especializado em demissão, horas extras, assédio moral e acidente de trabalho. Atendimento online.",
      "url": "https://riccio-advocacia.lovable.app/advogado-trabalhista-online",
      "telephone": "+55 71 99703-6269",
      "areaServed": { "@type": "Country", "name": "Brasil" },
      "serviceType": ["Direito Trabalhista", "Ação Trabalhista"],
    },
    {
      "@type": "FAQPage",
      "@id": "https://riccio-advocacia.lovable.app/advogado-trabalhista-online#faq",
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

const TrabalhistaLanding = () => {
  const prefersReducedMotion = useReducedMotion();
  const MotionSection = prefersReducedMotion ? 'section' : m.section;
  const MotionDiv = prefersReducedMotion ? 'div' : m.div;


  return (
    <PageTransition>
      <Helmet>
        <title>Advogado Trabalhista Online | Demissão, Horas Extras | Riccio Advocacia</title>
        <meta name="description" content="Advogado trabalhista online para demissão, horas extras, pejotização e acidente de trabalho. Atendimento online. Só paga se ganhar." />
        <link rel="canonical" href="https://riccio-advocacia.lovable.app/advogado-trabalhista-online" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-black safe-bottom">
        {/* Header Minimalista - Preto com borda dourada - Mobile Optimized */}
        <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#D4AF37]/30 safe-top">
          <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3 flex items-center justify-between">
            <div className="flex items-center gap-2 sm:gap-4">
              <BackButton to="/" className="text-zinc-400 hover:text-[#D4AF37] active:scale-95 transition-transform p-1" />
              <Link to="/" className="flex items-center gap-2" aria-label="Ir para página inicial">
                <img src={logoAdvogado} alt="AdvogadoJá" className="h-8 sm:h-10 w-auto brightness-0 invert" />
              </Link>
            </div>
              <Button 
                asChild 
                size="sm"
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white gap-1.5 sm:gap-2 px-3 sm:px-4 text-xs sm:text-sm active:scale-95 transition-transform"
              >
                <a 
                  href={createWhatsAppLink("Olá! Preciso de um advogado trabalhista urgente.")} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Falar pelo WhatsApp"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span className="hidden xs:inline sm:inline">WhatsApp</span>
                </a>
              </Button>
          </div>
        </header>

        {/* HERO - Mobile-First Responsive with Video Background */}
        <MotionSection 
          className="relative bg-black py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden min-h-[80vh] sm:min-h-[85vh] flex items-center"
          {...(!prefersReducedMotion && { initial: "hidden", animate: "visible", variants: sectionVariants })}
        >
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            poster="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop"
            // @ts-expect-error fetchpriority is a valid attribute
            fetchpriority="low"
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          
          {/* Fallback Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center -z-10"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')",
            }}
          />

          {/* Dark overlay with gold accent for brand consistency */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/5 via-transparent to-[#D4AF37]/5" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge estático elegante */}
              <MotionDiv 
                className="flex justify-center mb-4 sm:mb-6 md:mb-8"
                {...(!prefersReducedMotion && { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.4 } })}
              >
                <Badge className="bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30 px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium">
                  <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  Prazo de 2 anos para entrar com ação
                </Badge>
              </MotionDiv>

              
              {/* Título responsivo */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Demitido?{" "}
                <span className="text-[#D4AF37]">Recupere Seus Direitos</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-400 mb-6 sm:mb-8 md:mb-10 max-w-2xl mx-auto px-2">
                Advogado trabalhista online. Consulta <span className="text-white font-semibold">100% gratuita</span>.
                Atendimento para todo o Brasil.
              </p>

              {/* CTAs responsivos */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-[#D4AF37] hover:bg-[#B8860B] text-black text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 gap-2 shadow-lg font-semibold active:scale-95 transition-transform w-full sm:w-auto"
                >
                  <a href={createWhatsAppLink("Olá! Preciso de orientação sobre meus direitos trabalhistas.")} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-5 w-5" />
                    Falar com Advogado
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </MotionSection>

        {/* Chat de triagem virtual (Assistente Virtual trabalhista) */}
        <LawyerChatSection area="trabalhista" />


        {/* Problemas Grid - Mobile Cards */}
        <MotionSection 
          className="py-12 sm:py-16 md:py-20 bg-zinc-950"
          {...(!prefersReducedMotion && { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-50px" }, variants: sectionVariants })}
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                Qual é o Seu <span className="text-[#D4AF37]">Problema?</span>
              </h2>
              <p className="text-zinc-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                Atuamos nestas situações. Se a sua não está aqui, fale com a gente.
              </p>
            </div>

            <MotionDiv 
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto"
              {...(!prefersReducedMotion && { variants: staggerContainer, initial: "hidden", whileInView: "visible", viewport: { once: true } })}
            >
              {problems.map((problem, index) => (
                <MotionDiv key={index} {...(!prefersReducedMotion && { variants: itemVariants })}>
                  <div className="group block h-full">
                    <Card className="h-full bg-zinc-900 border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 hover:shadow-lg hover:shadow-[#D4AF37]/10 hover:-translate-y-1 active:scale-[0.98] border-l-4 border-l-[#D4AF37]">
                      <CardContent className="p-4 sm:p-6">
                        {/* Mobile: Layout vertical, Desktop: horizontal */}
                        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
                          <div className="flex justify-center sm:justify-start">
                            <div className="p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                              <problem.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                          </div>
                          <div className="flex-1 text-center sm:text-left">
                            <h3 className="font-semibold text-base sm:text-lg text-white mb-1">{problem.title}</h3>
                            <p className="text-xs sm:text-sm text-zinc-400 mb-2">{problem.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </MotionDiv>
              ))}
            </MotionDiv>

          </div>
        </MotionSection>


        {/* FAQ + CTA Final combinados - Touch-friendly */}
        <MotionSection 
          className="py-12 sm:py-16 md:py-20 bg-zinc-950"
          {...(!prefersReducedMotion && { initial: "hidden", whileInView: "visible", viewport: { once: true, margin: "-50px" }, variants: sectionVariants })}
        >
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8 sm:mb-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
                  Dúvidas <span className="text-[#D4AF37]">Frequentes</span>
                </h2>
              </div>

              <Accordion type="single" collapsible className="w-full mb-8 sm:mb-12">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-zinc-800">
                    <AccordionTrigger className="text-left text-white hover:text-[#D4AF37] py-4 sm:py-5 text-sm sm:text-base min-h-[56px] focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-zinc-400 pb-4 text-sm sm:text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

            </div>
          </div>
        </MotionSection>

        {/* Footer Simples - Responsivo */}
        <footer className="bg-black border-t border-zinc-900 py-6 sm:py-8 md:py-10 safe-bottom">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <img src={logoAdvogado} alt="AdvogadoJá" className="h-7 sm:h-8 w-auto brightness-0 invert opacity-70" />
                <span className="text-zinc-500 text-xs sm:text-sm">Advocacia Trabalhista Online</span>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-zinc-500">
                <Link to="/privacidade" className="hover:text-[#D4AF37] transition-colors active:scale-95">Privacidade</Link>
                <Link to="/termos-de-uso" className="hover:text-[#D4AF37] transition-colors active:scale-95">Termos</Link>
                <Link to="/calculadoras" className="hover:text-[#D4AF37] transition-colors active:scale-95">Calculadoras</Link>
              </div>
            </div>
            <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-zinc-900 text-center text-xs sm:text-sm text-zinc-600">
              © {new Date().getFullYear()} AdvogadoJá. Todos os direitos reservados.
            </div>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default TrabalhistaLanding;

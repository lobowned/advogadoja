import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useMemo } from "react";
import { m, useReducedMotion, LazyMotion, domAnimation } from "framer-motion";
import { 
  Stethoscope, Clock, DollarSign, CheckCircle, ArrowRight, ArrowLeft,
  MessageCircle, Shield, AlertTriangle, Star, Phone, HeartPulse,
  FileCheck, Syringe, Bone, Heart, Brain, Eye, Scale, Users, Calculator
} from "lucide-react";
import PageTransition from "@/components/motion/PageTransition";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
import logoAdvogado from "@/assets/logo-advogado-online.png";

const LiminarCirurgiaNegadaLanding = () => {
  const prefersReducedMotion = useReducedMotion();
  
  // WhatsApp centralizado
  const WHATSAPP_NUMBER = "5571997092633";
  const createWhatsAppLink = (message: string) => 
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  
  const whatsappUrgente = createWhatsAppLink("Urgente: Minha cirurgia foi negada pelo plano e preciso de uma liminar.");
  const whatsappDocs = createWhatsAppLink("Olá! Tenho os documentos da negativa e gostaria de enviar para análise.");

  const sectionVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: prefersReducedMotion ? 0 : 0.5 } }
  }), [prefersReducedMotion]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Liminar Cirurgia Plano de Saúde",
    "description": "Advogado especialista em liminares para cirurgias negadas por planos de saúde. Conseguimos autorização judicial em 24-48h para cirurgias urgentes.",
    "areaServed": "Brasil",
    "serviceType": [
      "Liminar Cirurgia Plano de Saúde",
      "Tutela de Urgência Saúde",
      "Cirurgia Bariátrica Negada",
      "Tratamento Oncológico Negado",
      "Cirurgia Ortopédica Negada"
    ],
    "provider": {
      "@type": "LegalService",
      "name": "Advogado Já"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Quanto tempo demora para conseguir liminar de cirurgia?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em casos urgentes, a liminar pode ser concedida em 24 a 48 horas. Casos de emergência (risco de vida) podem ter decisão no mesmo dia através de plantão judicial."
        }
      },
      {
        "@type": "Question",
        "name": "Minha cirurgia foi negada por não estar no rol da ANS. Posso conseguir liminar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sim! O STJ já decidiu que o rol da ANS é exemplificativo (Lei 14.454/2022). Se há indicação médica e comprovação científica da eficácia, o plano deve cobrir mesmo procedimentos fora do rol."
        }
      },
      {
        "@type": "Question",
        "name": "O plano negou alegando carência. Tenho direito à liminar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Em casos de urgência e emergência, a carência não pode ser oposta (Lei 9.656/98). Se há risco à saúde, você pode conseguir liminar mesmo sem ter cumprido a carência."
        }
      },
      {
        "@type": "Question",
        "name": "Qual a multa se o plano não cumprir a liminar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "O juiz pode fixar multa diária (astreintes) de R$ 1.000 a R$ 50.000 por dia de descumprimento. Além disso, pode haver crime de desobediência."
        }
      },
      {
        "@type": "Question",
        "name": "Quanto custa o serviço de liminar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A análise inicial é gratuita. Trabalhamos com honorários sob êxito em muitos casos, ou seja, você só paga se ganhar."
        }
      }
    ]
  };

  const surgeryTypes = [
    { name: "Bariátrica / Gastroplastia", icon: Stethoscope, success: "97%", time: "24-48h", link: "/liminar-cirurgia-bariatrica" },
    { name: "Tratamento Oncológico", icon: Syringe, success: "99%", time: "24h", link: "/liminar-tratamento-cancer" },
    { name: "Ortopédica / Próteses", icon: Bone, success: "95%", time: "48-72h", link: "/liminar-cirurgia-ortopedica" },
    { name: "Cardíaca / Ponte Safena", icon: Heart, success: "98%", time: "24h", link: "/liminar-cirurgia-cardiaca" },
    { name: "Neurológica / Coluna", icon: Brain, success: "94%", time: "48h", link: "/liminar-neurocirurgia" },
    { name: "Oftalmológica / Catarata", icon: Eye, success: "96%", time: "48-72h", link: "/liminar-cirurgia-olhos" },
  ];

  const illegalExcuses = [
    { excuse: "Não está no rol da ANS", reality: "Rol é exemplificativo (Lei 14.454/2022)" },
    { excuse: "Carência não cumprida", reality: "Emergência dispensa carência" },
    { excuse: "Médico fora da rede", reality: "Urgência permite atendimento fora" },
    { excuse: "Precisa de autorização prévia", reality: "Urgência não pode esperar" },
    { excuse: "Doença pré-existente", reality: "CPT tem regras específicas" },
    { excuse: "Procedimento experimental", reality: "Se tem indicação médica, não é" },
    { excuse: "Hospital não credenciado", reality: "Emergência em qualquer hospital" },
    { excuse: "Limite de cobertura atingido", reality: "Limite contratual é abusivo" },
  ];

  const indemnityTable = [
    { surgery: "Bariátrica", time: "24-48h", damages: "R$ 10.000 - R$ 30.000" },
    { surgery: "Oncológica", time: "24h (urgência)", damages: "R$ 20.000 - R$ 50.000" },
    { surgery: "Ortopédica", time: "48-72h", damages: "R$ 8.000 - R$ 25.000" },
    { surgery: "Cardíaca", time: "24h (urgência)", damages: "R$ 15.000 - R$ 40.000" },
    { surgery: "Neurológica", time: "48h", damages: "R$ 12.000 - R$ 35.000" },
    { surgery: "Oftalmológica", time: "48-72h", damages: "R$ 8.000 - R$ 20.000" },
  ];

  const steps = [
    {
      number: "1",
      title: "Envie a Negativa",
      description: "Compartilhe a negativa e documentos médicos pelo WhatsApp.",
      time: "5 min"
    },
    {
      number: "2", 
      title: "Análise Urgente",
      description: "Nossa equipe prepara a petição com pedido de liminar.",
      time: "2-4h"
    },
    {
      number: "3",
      title: "Ação Judicial",
      description: "Entramos com a ação e pedido de tutela urgente no mesmo dia.",
      time: "24h"
    },
    {
      number: "4",
      title: "Liminar Deferida",
      description: "Juiz defere a liminar e o plano autoriza sua cirurgia.",
      time: "24-48h"
    }
  ];

  const testimonials = [
    {
      name: "Maria S.",
      city: "São Paulo, SP",
      surgery: "Bariátrica",
      text: "Minha cirurgia bariátrica foi negada 3 vezes pelo plano. Em 48h eles conseguiram a liminar e operei na semana seguinte!",
      result: "Liminar em 48h"
    },
    {
      name: "José C.",
      city: "Rio de Janeiro, RJ", 
      surgery: "Ponte Safena",
      text: "Estava com 3 artérias entupidas e o plano alegou carência. Conseguiram liminar no plantão e fiz a cirurgia no dia seguinte.",
      result: "Liminar em 24h"
    },
    {
      name: "Ana Paula R.",
      city: "Belo Horizonte, MG",
      surgery: "Mastectomia",
      text: "Câncer de mama e o plano negou a reconstrução. Além da liminar, ganhei R$ 25 mil de danos morais.",
      result: "R$ 25.000"
    }
  ];

  const faqItems = [
    {
      question: "Quanto tempo demora para conseguir a liminar?",
      answer: "Em casos urgentes, a liminar pode ser concedida em 24 a 48 horas. Casos de emergência (risco de vida) podem ter decisão no mesmo dia através de plantão judicial."
    },
    {
      question: "E se a liminar for negada?",
      answer: "Podemos recorrer imediatamente com agravo de instrumento. Além disso, o processo continua e podemos conseguir a tutela antecipada posteriormente. A taxa de reversão é alta."
    },
    {
      question: "Posso pedir indenização além da cirurgia?",
      answer: "Sim! Além de obrigar o plano a cobrir a cirurgia, pedimos danos morais pela negativa abusiva. Os valores variam de R$ 8.000 a R$ 50.000 dependendo da gravidade."
    },
    {
      question: "Quanto custa o serviço?",
      answer: "A análise inicial é gratuita. Trabalhamos com honorários sob êxito em muitos casos, ou seja, você só paga se ganhar. Fale conosco para avaliar seu caso."
    },
    {
      question: "Qual a multa se o plano não cumprir a liminar?",
      answer: "O juiz pode fixar multa diária (astreintes) de R$ 1.000 a R$ 50.000 por dia de descumprimento. Além disso, pode haver crime de desobediência."
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Liminar Cirurgia Negada pelo Plano de Saúde | Autorização em 24-48h</title>
        <meta name="description" content="Teve cirurgia negada pelo plano de saúde? Obtenha liminar judicial em 24-48h para garantir seu tratamento. Especialistas em saúde, bariátrica e câncer. Atendimento 24h." />
        <meta name="keywords" content="liminar cirurgia plano saúde, cirurgia negada, tutela urgência saúde, bariátrica negada, quimioterapia negada, prótese negada, advogado plano saúde" />
        <link rel="canonical" href="https://advogadoja.lovable.app/liminar-cirurgia-negada" />
        <meta property="og:title" content="Cirurgia Negada? Liminar em 24-48h | Advogado Especialista" />
        <meta property="og:description" content="Plano negou sua cirurgia? Conseguimos autorização judicial urgente. 95% de sucesso. Consulta grátis!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advogadoja.lovable.app/liminar-cirurgia-negada" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <LazyMotion features={domAnimation}>
        <div className="min-h-screen bg-black overflow-x-hidden">
          {/* Header */}
          <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-[#D4AF37]/30 safe-top">
            <div className="container mx-auto px-4 py-3">
              <div className="flex items-center justify-between">
                <Link 
                  to="/" 
                  className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors active:scale-95"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="hidden sm:inline text-sm">Voltar</span>
                </Link>
                
                <Link to="/" className="flex items-center">
                  <img 
                    src={logoAdvogado} 
                    alt="Advogado Já" 
                    className="h-8 brightness-0 invert"
                  />
                </Link>
                
                <div className="flex items-center gap-2">
                  <Button 
                    asChild 
                    size="sm" 
                    variant="outline"
                    className="hidden sm:flex border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37]/10 active:scale-95"
                  >
                    <Link to="/calculadora-liminar-cirurgia">
                      <Calculator className="w-4 h-4 mr-1" />
                      Calculadora
                    </Link>
                  </Button>
                  <Button 
                    asChild 
                    size="sm" 
                    className="bg-red-600 hover:bg-red-700 text-white active:scale-95"
                  >
                    <a href={whatsappUrgente} target="_blank" rel="noopener noreferrer">
                      <Phone className="w-4 h-4 sm:mr-1" />
                      <span className="hidden sm:inline">URGENTE</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Hero with Video Background */}
          <section className="relative min-h-[85vh] flex items-center pt-20">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source src="/videos/hero-background.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
              <div className="absolute inset-0 bg-[#D4AF37]/5" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
              <m.div 
                className="max-w-4xl mx-auto text-center"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
              >
                {/* Urgency Badge */}
                <Badge className="mb-6 bg-red-600/20 text-red-400 border border-red-500/50 py-1.5 px-4 text-sm">
                  <HeartPulse className="w-4 h-4 mr-2 animate-pulse" />
                  Urgência Médica - Plantão 24h
                </Badge>
                
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
                  Cirurgia Negada pelo Plano?
                  <span className="block text-[#D4AF37] mt-2">Liminar em 24-48 Horas</span>
                </h1>
                
                <p className="text-lg sm:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto">
                  Seu plano de saúde negou sua cirurgia? A maioria das negativas são <strong className="text-white">ilegais</strong>. 
                  Conseguimos autorização judicial urgente para você operar o mais rápido possível.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-[#25D366] hover:bg-[#25D366]/90 text-white text-lg py-6 px-8 active:scale-95 transition-transform"
                  >
                    <a href={whatsappUrgente} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp Urgente
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    variant="outline" 
                    size="lg" 
                    className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10 text-lg py-6 px-8 active:scale-95 transition-transform"
                  >
                    <Link to="/calculadora-liminar-cirurgia">
                      <Scale className="w-5 h-5 mr-2" />
                      Calcular Indenização
                    </Link>
                  </Button>
                </div>

                <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm text-zinc-400">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#D4AF37]" />
                    <span>Liminar em 24-48h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-emerald-500" />
                    <span>95% de sucesso</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-[#D4AF37]" />
                    <span>Plantão 24 horas</span>
                  </div>
                </div>
              </m.div>
            </div>
          </section>

          {/* Stats Bar */}
          <section className="bg-gradient-to-r from-[#D4AF37] via-[#F5D86A] to-[#D4AF37] py-6">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center text-black">
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">3.500+</div>
                  <div className="text-xs sm:text-sm font-medium opacity-80">Liminares de cirurgia</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">95%</div>
                  <div className="text-xs sm:text-sm font-medium opacity-80">Taxa de deferimento</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">24-48h</div>
                  <div className="text-xs sm:text-sm font-medium opacity-80">Tempo médio</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">R$ 15mi+</div>
                  <div className="text-xs sm:text-sm font-medium opacity-80">Em indenizações</div>
                </div>
              </div>
            </div>
          </section>

          {/* Surgery Types Grid */}
          <section className="py-16 bg-zinc-950">
            <div className="container mx-auto px-4">
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                  Tipos de Cirurgias com <span className="text-[#D4AF37]">Alta Taxa de Sucesso</span>
                </h2>
                <p className="text-center text-zinc-400 mb-10 max-w-2xl mx-auto">
                  Temos experiência comprovada em liminares para os principais tipos de cirurgias negadas.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
                  {surgeryTypes.map((surgery, index) => (
                    <Link 
                      key={index} 
                      to={surgery.link}
                      className="group"
                    >
                      <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 sm:p-6 border-l-4 border-l-[#D4AF37] hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D4AF37]/10 transition-all active:scale-95">
                        <div className="flex items-start justify-between mb-3 sm:mb-4">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#D4AF37]/20 rounded-xl flex items-center justify-center">
                            <surgery.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#D4AF37]" />
                          </div>
                          <Badge className="bg-emerald-500/20 text-emerald-400 border-0 text-xs">
                            {surgery.success}
                          </Badge>
                        </div>
                        <h3 className="font-semibold text-sm sm:text-base text-white mb-1 group-hover:text-[#D4AF37] transition-colors">
                          {surgery.name}
                        </h3>
                        <p className="text-xs text-zinc-500">
                          Liminar em {surgery.time}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="text-center mt-10">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-[#25D366] hover:bg-[#25D366]/90 text-white active:scale-95 transition-transform"
                  >
                    <a href={whatsappUrgente} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Qual sua cirurgia? Fale Conosco
                    </a>
                  </Button>
                </div>
              </m.div>
            </div>
          </section>

          {/* Illegal Excuses - Horizontal Scroll Mobile */}
          <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                  8 Desculpas <span className="text-red-500">Ilegais</span> dos Planos
                </h2>
                <p className="text-center text-zinc-400 mb-10 max-w-2xl mx-auto">
                  Recebeu alguma dessas justificativas? Na maioria dos casos, a Justiça obriga o plano a cobrir.
                </p>

                {/* Mobile: Horizontal Scroll */}
                <div className="flex overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide gap-4 sm:hidden">
                  {illegalExcuses.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex-shrink-0 w-[280px] snap-center bg-zinc-900 border border-zinc-800 rounded-xl p-4 border-l-4 border-l-red-500"
                    >
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm line-through text-zinc-500">
                            "{item.excuse}"
                          </p>
                          <p className="text-sm text-emerald-400 font-medium mt-2">
                            ✓ {item.reality}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop: Grid */}
                <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
                  {illegalExcuses.map((item, index) => (
                    <div 
                      key={index} 
                      className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 border-l-4 border-l-red-500"
                    >
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <div>
                          <p className="font-medium text-sm line-through text-zinc-500">
                            "{item.excuse}"
                          </p>
                          <p className="text-sm text-emerald-400 font-medium mt-2">
                            ✓ {item.reality}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-10">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-[#D4AF37] hover:bg-[#B8860B] text-black active:scale-95 transition-transform"
                  >
                    <a href={whatsappUrgente} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Analisar Minha Negativa Grátis
                    </a>
                  </Button>
                </div>
              </m.div>
            </div>
          </section>

          {/* Indemnity Table */}
          <section className="py-16 bg-zinc-950">
            <div className="container mx-auto px-4">
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                  Tabela de <span className="text-[#D4AF37]">Indenizações</span> por Cirurgia
                </h2>
                <p className="text-center text-zinc-400 mb-10 max-w-2xl mx-auto">
                  Valores médios conquistados além da autorização da cirurgia.
                </p>

                {/* Mobile: Cards */}
                <div className="sm:hidden space-y-3">
                  {indemnityTable.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 border-l-4 border-l-[#D4AF37]"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-white">{item.surgery}</h3>
                        <Badge className="bg-[#D4AF37]/20 text-[#D4AF37] border-0 text-xs">
                          {item.time}
                        </Badge>
                      </div>
                      <p className="text-lg font-bold text-emerald-400">{item.damages}</p>
                      <p className="text-xs text-zinc-500 mt-1">Danos morais por negativa abusiva</p>
                    </div>
                  ))}
                </div>

                {/* Desktop: Table */}
                <div className="hidden sm:block max-w-4xl mx-auto">
                  <div className="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
                    <Table>
                      <TableHeader>
                        <TableRow className="border-zinc-800 bg-[#D4AF37]/10">
                          <TableHead className="text-[#D4AF37] font-semibold">Tipo de Cirurgia</TableHead>
                          <TableHead className="text-[#D4AF37] font-semibold">Tempo Liminar</TableHead>
                          <TableHead className="text-[#D4AF37] font-semibold">Danos Morais</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {indemnityTable.map((item, index) => (
                          <TableRow key={index} className="border-zinc-800 hover:bg-zinc-800/50">
                            <TableCell className="text-white font-medium">{item.surgery}</TableCell>
                            <TableCell className="text-zinc-400">{item.time}</TableCell>
                            <TableCell className="text-emerald-400 font-semibold">{item.damages}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <p className="text-xs text-zinc-500 text-center mt-4">
                    * Valores estimados com base em casos anteriores. Cada caso é analisado individualmente.
                  </p>
                </div>

                <div className="text-center mt-10">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-[#25D366] hover:bg-[#25D366]/90 text-white active:scale-95 transition-transform"
                  >
                    <a href={whatsappUrgente} target="_blank" rel="noopener noreferrer">
                      <DollarSign className="w-5 h-5 mr-2" />
                      Saber Minha Indenização
                    </a>
                  </Button>
                </div>
              </m.div>
            </div>
          </section>

          {/* How It Works - Horizontal Scroll Mobile */}
          <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                  Como Funciona em <span className="text-[#D4AF37]">24-48h</span>
                </h2>
                <p className="text-center text-zinc-400 mb-10 max-w-2xl mx-auto">
                  Processo ágil e eficiente para garantir sua cirurgia.
                </p>

                {/* Mobile: Horizontal Scroll */}
                <div className="flex overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide gap-4 sm:hidden">
                  {steps.map((step, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 w-[260px] snap-center bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center"
                    >
                      <div className="w-14 h-14 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl font-bold text-[#D4AF37]">{step.number}</span>
                      </div>
                      <Badge className="mb-3 bg-zinc-800 text-zinc-400 border-0 text-xs">{step.time}</Badge>
                      <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-zinc-400">{step.description}</p>
                    </div>
                  ))}
                </div>

                {/* Desktop: Grid */}
                <div className="hidden sm:grid sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
                  {steps.map((step, index) => (
                    <div key={index} className="text-center relative">
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-7 left-[60%] w-full h-0.5 bg-[#D4AF37]/30" />
                      )}
                      <div className="w-14 h-14 bg-[#D4AF37]/20 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10 border-2 border-[#D4AF37]/50">
                        <span className="text-2xl font-bold text-[#D4AF37]">{step.number}</span>
                      </div>
                      <Badge className="mb-3 bg-zinc-800 text-zinc-400 border-0 text-xs">{step.time}</Badge>
                      <h3 className="font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-sm text-zinc-400">{step.description}</p>
                    </div>
                  ))}
                </div>
              </m.div>
            </div>
          </section>

          {/* Testimonials - Horizontal Scroll Mobile */}
          <section className="py-16 bg-zinc-950">
            <div className="container mx-auto px-4">
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                  Casos <span className="text-[#D4AF37]">Reais</span> de Sucesso
                </h2>
                <p className="text-center text-zinc-400 mb-10 max-w-2xl mx-auto">
                  Veja como ajudamos pessoas que tiveram suas cirurgias negadas.
                </p>

                {/* Mobile: Horizontal Scroll */}
                <div className="flex overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide gap-4 sm:hidden">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="flex-shrink-0 w-[300px] snap-center bg-zinc-900 border border-zinc-800 rounded-xl p-5"
                    >
                      <div className="flex items-center gap-1 mb-4">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                        ))}
                      </div>
                      <p className="text-sm text-zinc-300 mb-4 italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                        <div>
                          <p className="font-semibold text-sm text-white">{testimonial.name}</p>
                          <p className="text-xs text-zinc-500">{testimonial.city}</p>
                        </div>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-0 text-xs">
                          {testimonial.result}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop: Grid */}
                <div className="hidden sm:grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
                  {testimonials.map((testimonial, index) => (
                    <div 
                      key={index}
                      className="bg-zinc-900 border border-zinc-800 rounded-xl p-6"
                    >
                      <div className="flex items-center gap-1 mb-4">
                        {[1,2,3,4,5].map((star) => (
                          <Star key={star} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                        ))}
                      </div>
                      <p className="text-sm text-zinc-300 mb-4 italic">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                        <div>
                          <p className="font-semibold text-sm text-white">{testimonial.name}</p>
                          <p className="text-xs text-zinc-500">{testimonial.city}</p>
                        </div>
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-0 text-xs">
                          {testimonial.result}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="text-center mt-10">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-[#25D366] hover:bg-[#25D366]/90 text-white active:scale-95 transition-transform"
                  >
                    <a href={whatsappUrgente} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Quero o Mesmo Resultado
                    </a>
                  </Button>
                </div>
              </m.div>
            </div>
          </section>

          {/* Documents Needed */}
          <section className="py-16 bg-black">
            <div className="container mx-auto px-4">
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 text-white">
                  Documentos para a <span className="text-[#D4AF37]">Liminar</span>
                </h2>
                <p className="text-center text-zinc-400 mb-10 max-w-2xl mx-auto">
                  Quanto mais completa a documentação, mais rápida a decisão do juiz.
                </p>

                <div className="max-w-3xl mx-auto grid sm:grid-cols-2 gap-6">
                  {/* Obrigatórios */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 border-l-4 border-l-red-500">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-white">
                      <FileCheck className="w-5 h-5 text-red-500" />
                      Obrigatórios
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-white">Laudo médico detalhado</span>
                          <p className="text-zinc-500 text-xs">Com CID e justificativa da urgência</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-white">Negativa do plano por escrito</span>
                          <p className="text-zinc-500 text-xs">E-mail, carta ou protocolo</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-white">Carteirinha do plano</span>
                          <p className="text-zinc-500 text-xs">Frente e verso</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-white">RG e CPF</span>
                          <p className="text-zinc-500 text-xs">Cópias legíveis</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* Recomendados */}
                  <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 border-l-4 border-l-[#D4AF37]">
                    <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-white">
                      <FileCheck className="w-5 h-5 text-[#D4AF37]" />
                      Recomendados
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-white">Exames recentes</span>
                          <p className="text-zinc-500 text-xs">Ressonância, tomografia, etc.</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-white">Prontuário médico</span>
                          <p className="text-zinc-500 text-xs">Histórico do tratamento</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-white">Protocolos de atendimento</span>
                          <p className="text-zinc-500 text-xs">Comprovando tentativas</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-[#D4AF37] mt-0.5 shrink-0" />
                        <div>
                          <span className="font-medium text-white">Orçamento particular</span>
                          <p className="text-zinc-500 text-xs">Se obteve valor da cirurgia</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="text-center mt-10">
                  <p className="text-zinc-400 mb-4">Já tem os documentos? Envie agora pelo WhatsApp:</p>
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-[#D4AF37] hover:bg-[#B8860B] text-black active:scale-95 transition-transform"
                  >
                    <a href={whatsappDocs} target="_blank" rel="noopener noreferrer">
                      <FileCheck className="w-5 h-5 mr-2" />
                      Enviar Documentos
                    </a>
                  </Button>
                </div>
              </m.div>
            </div>
          </section>

          {/* FAQ - Accordion */}
          <section className="py-16 bg-zinc-950">
            <div className="container mx-auto px-4">
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 text-white">
                  Perguntas <span className="text-[#D4AF37]">Frequentes</span>
                </h2>

                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="space-y-3">
                    {faqItems.map((item, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`item-${index}`}
                        className="bg-zinc-900 border border-zinc-800 rounded-xl px-6 data-[state=open]:border-[#D4AF37]/50"
                      >
                        <AccordionTrigger className="text-white hover:text-[#D4AF37] hover:no-underline min-h-[56px] text-left text-sm sm:text-base">
                          {item.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-zinc-400 text-sm">
                          {item.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </m.div>
            </div>
          </section>

          {/* Final CTA - Urgent Red */}
          <section className="py-16 bg-gradient-to-r from-red-900 via-red-800 to-red-900 safe-bottom">
            <div className="container mx-auto px-4 text-center">
              <m.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={sectionVariants}
              >
                <HeartPulse className="w-12 h-12 text-white mx-auto mb-4 animate-pulse" />
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">
                  Sua Cirurgia Não Pode Esperar
                </h2>
                <p className="text-lg text-red-100 mb-8 max-w-2xl mx-auto">
                  A cada dia de espera, sua situação pode piorar. 
                  Não deixe o plano de saúde decidir sobre sua vida.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    asChild 
                    size="lg" 
                    className="bg-[#25D366] hover:bg-[#25D366]/90 text-white text-lg py-6 px-8 active:scale-95 transition-transform"
                  >
                    <a href={whatsappUrgente} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Quero Minha Liminar Agora
                    </a>
                  </Button>
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline" 
                    className="border-white text-white hover:bg-white/10 text-lg py-6 px-8 active:scale-95 transition-transform"
                  >
                    <a href={`tel:+${WHATSAPP_NUMBER}`}>
                      <Phone className="w-5 h-5 mr-2" />
                      Ligar Agora
                    </a>
                  </Button>
                </div>
                
                <p className="text-sm text-red-200 mt-6">
                  Plantão 24 horas para casos de emergência
                </p>
              </m.div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-black border-t border-zinc-800 py-8">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-zinc-500">© 2025 Advogado Já - Todos os direitos reservados</p>
                <div className="flex items-center gap-4">
                  <a 
                    href={whatsappUrgente} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-[#25D366] hover:text-[#25D366]/80 font-medium"
                  >
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp: (71) 99703-6269
                  </a>
                  <a 
                    href={`tel:+${WHATSAPP_NUMBER}`}
                    className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
                  >
                    <Phone className="w-4 h-4" />
                    Ligar
                  </a>
                </div>
              </div>
              
              {/* Related Links */}
              <div className="mt-6 pt-6 border-t border-zinc-800">
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link to="/calculadora-liminar-cirurgia">
                    <Badge variant="outline" className="py-2 px-4 border-zinc-700 text-zinc-400 hover:border-[#D4AF37] hover:text-[#D4AF37] cursor-pointer">
                      Calculadora de Liminar
                    </Badge>
                  </Link>
                  <Link to="/plano-saude-negou">
                    <Badge variant="outline" className="py-2 px-4 border-zinc-700 text-zinc-400 hover:border-[#D4AF37] hover:text-[#D4AF37] cursor-pointer">
                      Plano de Saúde Negou
                    </Badge>
                  </Link>
                  <Link to="/calculadora-plano-saude">
                    <Badge variant="outline" className="py-2 px-4 border-zinc-700 text-zinc-400 hover:border-[#D4AF37] hover:text-[#D4AF37] cursor-pointer">
                      Calculadora Plano de Saúde
                    </Badge>
                  </Link>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </LazyMotion>
    </PageTransition>
  );
};

export default LiminarCirurgiaNegadaLanding;

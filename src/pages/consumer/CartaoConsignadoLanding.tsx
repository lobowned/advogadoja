import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  CreditCard,
  Phone,
  FileX,
  Percent,
  Ban,
  RefreshCw,
  AlertTriangle,
  MessageCircle,
  ChevronLeft,
  Star,
  Shield,
  Scale,
  Frown,
  Smile,
  AlertCircle,
  CheckCircle2,
  TimerReset,
  Landmark,
  BookOpen,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
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

const consignadoProblems = [
  {
    id: "cartao-nao-solicitado",
    icon: CreditCard,
    title: "Cartão Não Solicitado",
    description: "Banco enviou cartão consignado sem seu pedido",
    minValue: 5000,
    maxValue: 15000,
    whatsappMessage: "Olá! Recebi um cartão consignado que nunca solicitei e estão descontando do meu INSS. Preciso de ajuda.",
  },
  {
    id: "contratacao-telefone",
    icon: Phone,
    title: "Contratação por Telefone",
    description: "Ligaram oferecendo 'benefício' e contrataram sem autorização",
    minValue: 5000,
    maxValue: 15000,
    whatsappMessage: "Olá! Fui contatado por telefone e contrataram cartão consignado sem minha autorização. Preciso de orientação.",
  },
  {
    id: "desconto-sem-contrato",
    icon: FileX,
    title: "Desconto Sem Contrato",
    description: "Apareceu desconto misterioso no extrato do INSS",
    minValue: 5000,
    maxValue: 15000,
    whatsappMessage: "Olá! Apareceu um desconto de cartão consignado no meu benefício e nunca assinei nenhum contrato. Preciso de ajuda.",
  },
  {
    id: "taxa-abusiva",
    icon: Percent,
    title: "Taxa de Juros Abusiva",
    description: "Juros acima do teto permitido pelo governo",
    minValue: 3000,
    maxValue: 10000,
    whatsappMessage: "Olá! Meu cartão consignado tem juros muito altos e gostaria de saber se são abusivos. Preciso de orientação.",
  },
  {
    id: "cancelamento-negado",
    icon: Ban,
    title: "Cancelamento Negado",
    description: "Banco se recusa a cancelar o cartão consignado",
    minValue: 3000,
    maxValue: 10000,
    whatsappMessage: "Olá! Tentei cancelar meu cartão consignado e o banco se recusou. Preciso de ajuda jurídica.",
  },
  {
    id: "conversao-irregular",
    icon: RefreshCw,
    title: "Conversão Irregular",
    description: "Empréstimo pessoal convertido em cartão consignado sem aviso",
    minValue: 5000,
    maxValue: 15000,
    whatsappMessage: "Olá! Meu empréstimo pessoal foi convertido em cartão consignado sem meu consentimento. Preciso de orientação.",
  },
  {
    id: "desconto-apos-cancelamento",
    icon: AlertTriangle,
    title: "Desconto Após Cancelamento",
    description: "Continua descontando mesmo depois de cancelar",
    minValue: 5000,
    maxValue: 15000,
    whatsappMessage: "Olá! Cancelei meu cartão consignado mas os descontos continuam no meu benefício. Preciso de ajuda.",
  },
];

const indemnityData = [
  { problem: "Cartão Não Solicitado", description: "RMC/RCC sem pedido", min: "R$ 5.000", max: "R$ 15.000" },
  { problem: "Contratação por Telefone", description: "Sem autorização", min: "R$ 5.000", max: "R$ 15.000" },
  { problem: "Desconto Sem Contrato", description: "Sem assinatura", min: "R$ 5.000", max: "R$ 15.000" },
  { problem: "Taxa de Juros Abusiva", description: "Acima do teto", min: "R$ 3.000", max: "R$ 10.000" },
  { problem: "Cancelamento Negado", description: "Recusa do banco", min: "R$ 3.000", max: "R$ 10.000" },
  { problem: "Conversão Irregular", description: "Empréstimo → cartão", min: "R$ 5.000", max: "R$ 15.000" },
  { problem: "Desconto Após Cancelamento", description: "Cobranças indevidas", min: "R$ 5.000", max: "R$ 15.000" },
];

const retireeRights = [
  {
    icon: Scale,
    title: "Restituição em Dobro",
    description: "CDC Art. 42 garante devolução em dobro de todos os valores descontados indevidamente.",
  },
  {
    icon: Ban,
    title: "Cancelamento Imediato",
    description: "Direito ao cancelamento via Meu INSS (site ou app), sem depender do banco.",
  },
  {
    icon: Landmark,
    title: "Danos Morais",
    description: "Indenização de R$ 3.000 a R$ 15.000 por contratar sem sua autorização.",
  },
  {
    icon: BookOpen,
    title: "Sem Prescrição",
    description: "Descontos continuados (trato sucessivo) não prescrevem — ação a qualquer tempo.",
  },
];

const processSteps = [
  {
    step: 1,
    title: "Fale Conosco",
    description: "Envie seu extrato INSS ou HISCRE pelo WhatsApp e conte o que aconteceu.",
  },
  {
    step: 2,
    title: "Análise Gratuita",
    description: "Identificamos os descontos indevidos e calculamos quanto você pode recuperar.",
  },
  {
    step: 3,
    title: "Ação Judicial",
    description: "Entramos com a ação para cancelar os descontos e cobrar a indenização.",
  },
  {
    step: 4,
    title: "Receba seu Dinheiro",
    description: "Você recebe a restituição em dobro + danos morais. Só paga se ganhar!",
  },
];

const testimonials = [
  {
    name: "Dona Maria S.",
    location: "Salvador, BA",
    problem: "Cartão Não Solicitado",
    amount: "R$ 12.500",
    text: "Apareceu um desconto de cartão que nunca pedi. O advogado conseguiu cancelar e recebi tudo em dobro mais indenização.",
    format: "card",
  },
  {
    name: "Sr. José A.",
    location: "São Paulo, SP",
    problem: "Contratação por Telefone",
    amount: "R$ 9.800",
    text: "Me ligaram dizendo que era benefício do INSS e contrataram cartão consignado. Consegui a indenização sem sair de casa.",
    format: "card",
  },
  {
    name: "Dona Francisca L.",
    location: "Recife, PE",
    problem: "Taxa Abusiva",
    amount: "R$ 7.200",
    text: "Os juros do cartão consignado estavam muito acima do permitido. Revisaram o contrato e recebi a diferença de volta.",
    format: "card",
  },
  {
    name: "Sr. Antônio R.",
    location: "Belo Horizonte, MG",
    problem: "Desconto Sem Contrato",
    amount: "R$ 14.000",
    text: "Descontavam todo mês sem eu saber de onde vinha. Descobriram que era cartão consignado fraudulento. Recebi R$ 14 mil!",
    format: "whatsapp",
  },
  {
    name: "Dona Lúcia P.",
    location: "Rio de Janeiro, RJ",
    problem: "Cancelamento Negado",
    amount: "R$ 8.500",
    text: "O banco não queria cancelar de jeito nenhum. Com a ação judicial, cancelaram e ainda tive que receber indenização.",
    format: "whatsapp",
  },
  {
    name: "Sr. Pedro M.",
    location: "Fortaleza, CE",
    problem: "Conversão Irregular",
    amount: "R$ 11.000",
    text: "Meu empréstimo virou cartão consignado sem eu saber. Processo rápido e recebi R$ 11 mil de indenização.",
    format: "whatsapp",
  },
];

const banks = [
  "Banco do Brasil", "Caixa", "Bradesco", "Itaú", "Santander", "BMG", "Pan", "Mercantil"
];

const beforeAfter = {
  before: [
    "Desconto todo mês sem explicação",
    "Sem saber o que fazer nem a quem recorrer",
    "Ligando para o banco sem resposta",
    "Achando que não tem como cancelar",
    "Perdendo dinheiro do benefício todo mês",
  ],
  after: [
    "Desconto cancelado definitivamente",
    "Valores devolvidos em dobro",
    "Indenização por danos morais na conta",
    "Processo sem burocracia, tudo pelo WhatsApp",
    "Benefício integral de volta",
  ],
};

const faqItems = [
  {
    question: "O que é RMC e RCC?",
    answer: "RMC (Reserva de Margem Consignável) é o valor reservado do seu benefício INSS para pagamento de cartão de crédito consignado, comprometendo até 5% da margem. RCC (Reserva de Cartão Consignado) é o desconto efetivo que aparece no seu contracheque. Juntos, podem comprometer até 40% do seu benefício quando somados ao empréstimo consignado comum.",
  },
  {
    question: "Nunca pedi cartão consignado, posso cancelar?",
    answer: "Sim! Se você nunca solicitou o cartão consignado, pode cancelar imediatamente pelo Meu INSS (site ou aplicativo) e ainda tem direito a restituição em dobro de todos os valores descontados, além de indenização por danos morais que varia de R$ 3.000 a R$ 15.000.",
  },
  {
    question: "Como saber se tenho desconto indevido de RMC/RCC?",
    answer: "Acesse o Meu INSS (meu.inss.gov.br) e solicite o extrato de empréstimo consignado ou o HISCRE (Histórico de Créditos). Lá constam todos os descontos ativos no seu benefício. Se encontrar algo que não reconhece, entre em contato conosco imediatamente.",
  },
  {
    question: "Quanto posso receber de indenização?",
    answer: "Além da restituição em dobro de todos os valores descontados indevidamente (CDC Art. 42), você pode receber de R$ 3.000 a R$ 15.000 de danos morais. O valor exato depende do caso, tempo de desconto e jurisprudência do seu estado.",
  },
  {
    question: "Preciso ir ao banco para resolver?",
    answer: "Não! Nosso atendimento é 100% online via WhatsApp. Você não precisa ir ao banco nem a nenhum órgão presencialmente. Cuidamos de toda a documentação e processo judicial para você.",
  },
  {
    question: "Quanto tempo demora o processo?",
    answer: "Nos Juizados Especiais, casos de cartão consignado indevido costumam ser resolvidos em 3 a 8 meses. Conseguimos liminar para suspender os descontos em poucos dias, garantindo alívio imediato no seu benefício.",
  },
];

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LegalService",
      "name": "Advogado Cartão Consignado - Desconto RMC RCC Indevido | Advogado Já",
      "description": "Desconto indevido de cartão consignado no INSS? Advogado especialista em RMC e RCC. Restituição em dobro + indenização. Consulta gratuita.",
      "url": "https://advogadoja.lovable.app/advogado-cartao-consignado",
      "telephone": "+5571997036269",
      "areaServed": "BR",
      "serviceType": ["Direito do Consumidor", "Cartão Consignado Indevido", "RMC RCC INSS"],
      "priceRange": "Consulta Gratuita",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "523",
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

const CartaoConsignadoLanding = () => {
  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`${WHATSAPP_BASE_URL}?text=${encodedMessage}`, "_blank");
  };

  const defaultWhatsAppMessage = "Olá! Estou com um desconto indevido de cartão consignado (RMC/RCC) no meu benefício do INSS e gostaria de orientação jurídica.";

  return (
    <PageTransition>
      <Helmet>
        <title>{`Desconto Indevido INSS? Cartão Consignado RMC RCC | Advogado Já`}</title>
        <meta
          name="description"
          content="Desconto de cartão consignado no INSS que você não autorizou? Advogado especialista em RMC e RCC. Restituição em dobro + indenização de até R$ 15.000. Consulta gratuita."
        />
        <link rel="canonical" href="https://advogadoja.lovable.app/advogado-cartao-consignado" />
        <meta property="og:title" content="Desconto Indevido INSS? Cartão Consignado RMC RCC | Advogado Já" />
        <meta property="og:description" content="Cartão consignado que você não pediu descontando do seu INSS? Restituição em dobro + indenização. Consulta gratuita." />
        <meta property="og:url" content="https://advogadoja.lovable.app/advogado-cartao-consignado" />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
      </Helmet>

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/30">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/" className="p-2 hover:bg-zinc-800 rounded-lg transition-colors active:scale-95">
                <ChevronLeft className="w-5 h-5 text-[#D4AF37]" />
              </Link>
              <img src={logoAdvogado} alt="Advogado Já" className="h-8" />
            </div>
            <Button
              size="sm"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white active:scale-95 transition-transform"
              onClick={() => handleWhatsAppClick(defaultWhatsAppMessage)}
            >
              <MessageCircle className="w-4 h-4 mr-1" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-16 pb-8">
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#D4AF37]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 container mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 border border-red-500/40 mb-4">
              <AlertTriangle className="w-4 h-4 text-red-400" />
              <span className="text-sm text-red-300 font-medium">Denúncias cresceram 113% em 2025</span>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 mb-6 ml-2">
              <Shield className="w-4 h-4 text-[#F5D86A]" />
              <span className="text-sm text-[#F5D86A] font-medium">Consulta Gratuita</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Desconto no INSS que{" "}
              <span className="text-[#D4AF37]">Você Não Autorizou?</span>
            </h1>

            <p className="text-zinc-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto mb-3">
              Cartão de crédito consignado indevido — RMC e RCC descontando do seu benefício sem autorização.
            </p>
            <p className="text-[#D4AF37] text-base sm:text-lg font-semibold mb-6">
              Restituição em dobro + indenização de até R$ 15.000
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  {["M", "J", "F", "A", "L"].map((initial, i) => (
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
                  <p className="text-zinc-400 text-xs">523 aposentados já recuperaram seus valores</p>
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
            </div>

            <p className="text-zinc-500 text-sm mt-6">
              ✓ Consulta gratuita &nbsp; ✓ Só paga se ganhar &nbsp; ✓ Atendimento 100% online
            </p>
          </div>
        </section>

        {/* Stats Bar */}
        <AnimatedSection>
          <section className="bg-zinc-950 border-y border-[#D4AF37]/20 py-6">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">+113%</p>
                  <p className="text-zinc-400 text-sm">Denúncias em 2025</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">5%</p>
                  <p className="text-zinc-400 text-sm">Do Benefício Comprometido</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">R$ 15mil</p>
                  <p className="text-zinc-400 text-sm">Indenização por Danos Morais</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-bold text-[#D4AF37]">2x</p>
                  <p className="text-zinc-400 text-sm">Restituição em Dobro</p>
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* Bancos */}
        <AnimatedSection>
          <section className="py-8 bg-black border-b border-zinc-800/50">
            <div className="container mx-auto px-4">
              <p className="text-zinc-500 text-sm text-center mb-5 uppercase tracking-wider">
                Já processamos os principais bancos por cartão consignado indevido
              </p>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {banks.map((bank) => (
                  <div
                    key={bank}
                    className="px-5 py-2.5 rounded-lg bg-zinc-900/80 border border-zinc-800 text-zinc-300 text-sm font-medium hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all"
                  >
                    {bank}
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
                Qual é o seu <span className="text-[#D4AF37]">Problema?</span>
              </h2>
              <p className="text-zinc-400 text-center mb-8 max-w-xl mx-auto">
                Clique no seu problema para falar diretamente com um advogado especialista em cartão consignado
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {consignadoProblems.map((problem) => (
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
                Tabela de <span className="text-[#D4AF37]">Valores Recuperáveis</span>
              </h2>
              <p className="text-zinc-400 text-center mb-8 max-w-xl mx-auto">
                Valores estimados com base em decisões judiciais recentes (TJRJ, TJMT, TJDFT - 2025)
              </p>

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
                * Valores estimados incluem restituição em dobro + danos morais. Cada caso é analisado individualmente.
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
                Pare de perder dinheiro do seu benefício todo mês
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
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

        {/* Seus Direitos */}
        <section className="py-12 sm:py-16 bg-zinc-950">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3">
                Conheça seus <span className="text-[#D4AF37]">Direitos</span>
              </h2>
              <p className="text-zinc-400 text-center mb-8 max-w-xl mx-auto">
                Garantidos pelo CDC e legislação do INSS — você não precisa aceitar descontos que não autorizou
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {retireeRights.map((right, index) => (
                <StaggerItem key={index}>
                  <Card className="bg-zinc-900 border border-[#D4AF37]/20 p-5 text-center hover:border-[#D4AF37]/40 transition-colors">
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
                Processo simples, sem burocracia — tudo pelo celular
              </p>

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

              <StaggerContainer className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {processSteps.map((step) => (
                  <StaggerItem key={step.step}>
                    <Card className="bg-zinc-900 border border-[#D4AF37]/20 p-5">
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

        {/* Depoimentos */}
        <section className="py-12 sm:py-16 bg-zinc-950">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3">
                Casos de <span className="text-[#D4AF37]">Sucesso</span>
              </h2>
              <p className="text-zinc-400 text-center mb-8 max-w-xl mx-auto">
                Aposentados e pensionistas que recuperaram seus valores com nosso time
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
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
                  Quero Recuperar Meu Dinheiro
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ + CTA Final */}
        <section className="py-12 sm:py-16 bg-black">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3">
                Perguntas <span className="text-[#D4AF37]">Frequentes</span>
              </h2>
              <p className="text-zinc-400 text-center mb-8 max-w-xl mx-auto">
                Tire suas dúvidas sobre cartão consignado indevido, RMC e RCC
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
                  Cada mês que passa é mais dinheiro descontado
                </h3>

                <div className="flex items-center justify-center gap-2 mb-4">
                  <TimerReset className="w-5 h-5 text-red-400" />
                  <p className="text-red-400 text-sm font-medium">
                    Enquanto você espera, o banco continua descontando do seu benefício
                  </p>
                </div>

                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                  Você tem direito a receber de volta em dobro tudo que foi descontado indevidamente, além de indenização por danos morais. Não espere mais.
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

        {/* SEO Hidden */}
        <div className="sr-only" aria-hidden="true">
          <p>desconto indevido INSS cartão consignado RMC RCC advogado aposentado pensionista cancelar cartão consignado restituição dobro danos morais banco consignado indevido</p>
        </div>

        {/* Footer */}
        <footer className="py-8 bg-black border-t border-zinc-800">
          <div className="container mx-auto px-4 text-center">
            <img src={logoAdvogado} alt="Advogado Já" className="h-8 mx-auto mb-4" />
            <p className="text-zinc-500 text-sm mb-4">
              Advogados especializados em Direito do Consumidor e Cartão Consignado Indevido
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

        <FloatingWhatsApp />
      </div>
    </PageTransition>
  );
};

export default CartaoConsignadoLanding;

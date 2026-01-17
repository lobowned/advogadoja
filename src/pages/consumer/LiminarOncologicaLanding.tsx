import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Scale, 
  Clock, 
  CheckCircle2, 
  AlertTriangle,
  FileText,
  MessageCircle,
  Phone,
  Shield,
  Award,
  Heart,
  Pill,
  Syringe,
  Radiation
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useDetectedProblem } from "@/contexts/DetectedProblemContext";
import { useNavigate } from "react-router-dom";

const LiminarOncologicaLanding = () => {
  const { setDetectedProblem } = useDetectedProblem();
  const navigate = useNavigate();

  const handleCTAClick = () => {
    setDetectedProblem("Tratamento Oncológico Negado");
    navigate("/#chat");
  };

  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Meu plano de saúde negou meu tratamento de câncer e preciso de uma liminar urgente.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const treatmentTypes = [
    { name: "Quimioterapia", icon: Pill, desc: "Tratamento com medicamentos" },
    { name: "Radioterapia", icon: Radiation, desc: "Tratamento com radiação" },
    { name: "Imunoterapia", icon: Syringe, desc: "Estímulo do sistema imune" },
    { name: "Cirurgia Oncológica", icon: Heart, desc: "Remoção de tumores" },
    { name: "Terapia Alvo", icon: Pill, desc: "Medicamentos específicos" },
    { name: "Transplante", icon: Heart, desc: "Medula óssea e outros" },
  ];

  const illegalExcuses = [
    "Medicamento não consta no rol da ANS",
    "Tratamento experimental (quando já aprovado pela ANVISA)",
    "Falta de protocolo clínico específico",
    "Necessidade de junta médica do plano",
    "Carência não cumprida (ilegal em urgência/emergência)",
    "Hospital ou médico fora da rede credenciada",
  ];

  const requiredDocs = [
    { doc: "Laudo médico oncológico", tip: "Com CID, estadiamento e indicação do tratamento" },
    { doc: "Exames de imagem", tip: "PET-CT, tomografia, ressonância" },
    { doc: "Resultado de biópsia", tip: "Anatomopatológico confirmando o câncer" },
    { doc: "Prescrição do tratamento", tip: "Medicamento, dosagem, periodicidade" },
    { doc: "Negativa por escrito", tip: "E-mail, carta ou protocolo do plano" },
    { doc: "Carteirinha do plano", tip: "Frente e verso" },
  ];

  const testimonials = [
    {
      name: "Maria C.",
      city: "São Paulo, SP",
      text: "Minha quimioterapia foi negada por ser 'experimental'. A liminar saiu em 12 horas e salvou minha vida.",
      result: "Liminar em 12h"
    },
    {
      name: "João P.",
      city: "Curitiba, PR",
      text: "O plano negou o medicamento Keytruda. Com a liminar, recebi o tratamento e estou em remissão.",
      result: "Tratamento autorizado + R$ 30 mil danos morais"
    },
    {
      name: "Ana L.",
      city: "Brasília, DF",
      text: "Câncer de mama em estágio 3. O plano queria esperar. A liminar veio em 24h.",
      result: "Liminar em 24h"
    },
  ];

  const faqItems = [
    {
      question: "Plano de saúde pode negar quimioterapia?",
      answer: "Não pode. A Lei 9.656/98 garante cobertura para tratamento oncológico. A negativa configura prática abusiva e dá direito a liminar e indenização por danos morais."
    },
    {
      question: "E se o medicamento não estiver no rol da ANS?",
      answer: "O rol da ANS é exemplificativo (Lei 14.454/22). Medicamentos aprovados pela ANVISA com indicação médica devem ser cobertos, mesmo fora do rol."
    },
    {
      question: "Quanto tempo demora a liminar em casos de câncer?",
      answer: "Casos oncológicos são tratados como urgência máxima. Liminares podem sair em 12 a 48 horas, inclusive em plantão judicial."
    },
    {
      question: "O plano pode exigir que eu use medicamento genérico?",
      answer: "O plano não pode substituir o medicamento prescrito pelo médico. A escolha do tratamento é prerrogativa do profissional de saúde, não do plano."
    },
    {
      question: "Posso ser indenizado pela negativa?",
      answer: "Sim. Além da autorização do tratamento, é possível pleitear danos morais (R$ 10 mil a R$ 50 mil em média) pela angústia causada."
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Liminar Tratamento Câncer",
    "description": "Advogado especialista em liminares para tratamentos oncológicos negados. Quimioterapia, radioterapia, imunoterapia, cirurgias.",
    "serviceType": ["Liminar Tratamento Câncer", "Direito à Saúde", "Plano de Saúde"],
    "areaServed": {
      "@type": "Country",
      "name": "Brasil"
    },
    "provider": {
      "@type": "LegalService",
      "name": "Advogado Já"
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Tratamento de Câncer Negado? Liminar em 12-48h | Advogado Oncológico</title>
        <meta name="description" content="Plano negou quimioterapia, radioterapia ou imunoterapia? Liminares urgentes em 12-48h. 99% de sucesso em casos oncológicos. Consulta grátis 24h." />
        <meta name="keywords" content="quimioterapia negada, plano saúde câncer, liminar tratamento oncológico, imunoterapia negada, advogado câncer" />
        <link rel="canonical" href="https://advogadoja.com/liminar-tratamento-cancer" />
        <meta property="og:title" content="Tratamento de Câncer Negado? Liminar em 12-48h" />
        <meta property="og:description" content="Plano negou seu tratamento oncológico? 99% de sucesso. Liminar urgente." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-destructive/5" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-8">
              <Badge variant="destructive" className="mb-4 text-sm px-4 py-1 animate-pulse">
                <AlertTriangle className="w-4 h-4 mr-2" />
                URGÊNCIA ONCOLÓGICA - Atendimento Prioritário
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Tratamento de <span className="text-destructive">Câncer Negado</span>?
                <br />
                <span className="text-primary">Liminar em 12-48 Horas</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Seu plano <strong>não pode negar quimioterapia, radioterapia ou qualquer tratamento oncológico</strong>.
                Cada hora conta. Agimos imediatamente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-destructive hover:bg-destructive/90 text-white text-lg px-8 animate-pulse"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <Phone className="mr-2 h-5 w-5" />
                  URGENTE: Ligar Agora
                </Button>
                <Button 
                  size="lg" 
                  variant="default"
                  className="text-lg px-8"
                  onClick={handleCTAClick}
                >
                  <Scale className="mr-2 h-5 w-5" />
                  Avaliar Caso Grátis
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { value: "99%", label: "Liminares Deferidas" },
                { value: "12-48h", label: "Tempo Médio" },
                { value: "1.800+", label: "Tratamentos Autorizados" },
                { value: "R$ 25 mil", label: "Danos Morais Médios" },
              ].map((stat, i) => (
                <Card key={i} className="text-center p-4 bg-card/50 backdrop-blur">
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Treatment Types */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Tratamentos que Você <span className="text-primary">Tem Direito</span>
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Todos esses tratamentos são obrigatórios para os planos de saúde quando há indicação médica.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {treatmentTypes.map((item, i) => (
                <Card key={i} className="p-4 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Illegal Excuses */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Desculpas <span className="text-destructive">Ilegais</span> dos Planos
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Se recebeu alguma dessas negativas, você tem direito à liminar imediata.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {illegalExcuses.map((excuse, i) => (
                <Card key={i} className="p-4 border-destructive/30 bg-destructive/5">
                  <CardContent className="p-0 flex items-center gap-3">
                    <AlertTriangle className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-foreground">{excuse}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button size="lg" variant="destructive" onClick={handleCTAClick}>
                Recebi Uma Dessas Negativas
              </Button>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              <FileText className="inline-block w-8 h-8 mr-2 text-primary" />
              Documentos para Liminar Oncológica
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Reúna estes documentos para agilizar sua liminar. Não se preocupe se não tiver todos.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {requiredDocs.map((item, i) => (
                <Card key={i} className="p-4">
                  <CardContent className="p-0 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">{item.doc}</h3>
                      <p className="text-sm text-muted-foreground">{item.tip}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              <Award className="inline-block w-8 h-8 mr-2 text-primary" />
              Vidas Salvas
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((item, i) => (
                <Card key={i} className="p-6">
                  <CardContent className="p-0">
                    <Badge variant="secondary" className="mb-3">{item.result}</Badge>
                    <p className="text-muted-foreground mb-4 italic">"{item.text}"</p>
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="font-bold text-primary">{item.name[0]}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.city}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
              Perguntas Frequentes
            </h2>
            <div className="space-y-4">
              {faqItems.map((item, i) => (
                <Card key={i} className="p-6">
                  <h3 className="font-semibold text-lg text-foreground mb-2">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 px-4 bg-destructive text-destructive-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Cada Minuto Conta no Combate ao Câncer
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Não deixe o plano de saúde atrasar seu tratamento. 
              Ligue agora e fale com um advogado especialista.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora - Urgente
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 bg-white/10 border-white/30 hover:bg-white/20"
                onClick={handleCTAClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat Online 24h
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              <Clock className="inline-block w-4 h-4 mr-1" />
              Plantão Oncológico 24h • Liminares em Horas • Consulta Gratuita
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default LiminarOncologicaLanding;

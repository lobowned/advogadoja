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
  Eye,
  Glasses,
  Sun
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useDetectedProblem } from "@/contexts/DetectedProblemContext";
import { useNavigate } from "react-router-dom";

const LiminarOftalmologicaLanding = () => {
  const { setDetectedProblem } = useDetectedProblem();
  const navigate = useNavigate();

  const handleCTAClick = () => {
    setDetectedProblem("Cirurgia Oftalmológica Negada");
    navigate("/#chat");
  };

  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Meu plano de saúde negou minha cirurgia nos olhos e preciso de uma liminar urgente.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const procedureTypes = [
    { name: "Cirurgia de Catarata", icon: Eye, desc: "Com lente intraocular" },
    { name: "Glaucoma", icon: Eye, desc: "Trabeculectomia, implantes" },
    { name: "Descolamento de Retina", icon: Sun, desc: "Emergência oftalmológica" },
    { name: "Transplante de Córnea", icon: Eye, desc: "Ceratoplastia" },
    { name: "Cirurgia Refrativa", icon: Glasses, desc: "Quando há indicação médica" },
    { name: "Injeção Intravítrea", icon: Eye, desc: "DMRI, edema macular" },
  ];

  const illegalExcuses = [
    "Lente multifocal não coberta (ilegal)",
    "Cirurgia de catarata é estética",
    "Procedimento eletivo pode esperar",
    "Material fora da tabela de preços",
    "Não há urgência (risco de cegueira)",
    "Necessidade de mais exames prévios",
  ];

  const requiredDocs = [
    { doc: "Laudo oftalmológico", tip: "Com CID, acuidade visual e indicação cirúrgica" },
    { doc: "Exames de imagem", tip: "OCT, topografia, biometria" },
    { doc: "Campimetria", tip: "Para casos de glaucoma" },
    { doc: "Prescrição da lente/material", tip: "Especificação técnica" },
    { doc: "Negativa por escrito", tip: "E-mail, carta ou protocolo do plano" },
    { doc: "Histórico de tratamento", tip: "Colírios, procedimentos anteriores" },
  ];

  const testimonials = [
    {
      name: "Helena M.",
      city: "São Paulo, SP",
      text: "Catarata avançada, quase cega. O plano queria lente básica. A liminar garantiu a lente multifocal que meu médico indicou.",
      result: "Liminar em 48h"
    },
    {
      name: "Jorge P.",
      city: "Curitiba, PR",
      text: "Descolamento de retina, emergência total. O plano queria transferir para hospital público. Liminar em 6 horas.",
      result: "Cirurgia imediata + R$ 20 mil danos morais"
    },
    {
      name: "Vera L.",
      city: "Belo Horizonte, MG",
      text: "Glaucoma avançado, perdendo visão rapidamente. O plano negou o implante. A liminar veio em 24h.",
      result: "Liminar em 24h"
    },
  ];

  const faqItems = [
    {
      question: "Plano pode negar lente multifocal para catarata?",
      answer: "Não pode. A RN 428/ANS determina cobertura da lente indicada pelo médico. Se há indicação de lente multifocal ou tórica, o plano deve cobrir integralmente."
    },
    {
      question: "Cirurgia de catarata é estética?",
      answer: "Absolutamente não. Catarata é doença que causa perda progressiva da visão. A cirurgia é tratamento médico obrigatório para os planos de saúde."
    },
    {
      question: "Quanto tempo demora liminar oftalmológica?",
      answer: "Casos com risco de cegueira (descolamento de retina, glaucoma agudo) são decididos em 6 a 24 horas. Cataratas e outros: 24 a 72 horas."
    },
    {
      question: "Injeções intravítreas são cobertas?",
      answer: "Sim. Medicamentos como Lucentis, Eylea e similares para DMRI e edema macular estão no rol e devem ser cobertos quando indicados."
    },
    {
      question: "Posso escolher o oftalmologista?",
      answer: "Dentro da rede credenciada, sim. Para cirurgias de alta complexidade, se não há especialista equivalente na rede, pode-se pleitear atendimento fora da rede."
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Liminar Cirurgia Oftalmológica",
    "description": "Advogado especialista em liminares para cirurgias oftalmológicas negadas. Catarata, glaucoma, retina, transplante de córnea.",
    "serviceType": ["Liminar Cirurgia Olhos", "Direito à Saúde", "Catarata Negada"],
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
        <title>Cirurgia de Olhos Negada? Liminar em 24-72h | Catarata, Glaucoma, Retina</title>
        <meta name="description" content="Plano negou cirurgia de catarata, glaucoma ou retina? Liminares em 24-72h. 95% de sucesso. Advogado oftalmológico. Consulta grátis." />
        <meta name="keywords" content="cirurgia catarata negada, lente multifocal plano saúde, glaucoma negado, liminar olhos, advogado oftalmologia" />
        <link rel="canonical" href="https://advogadoja.com/liminar-cirurgia-olhos" />
        <meta property="og:title" content="Cirurgia de Olhos Negada? Liminar em 24-72h" />
        <meta property="og:description" content="Catarata, glaucoma ou retina negados? 95% de sucesso em liminares." />
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
              <Badge variant="destructive" className="mb-4 text-sm px-4 py-1">
                <Eye className="w-4 h-4 mr-2" />
                Risco de Perda de Visão - Ação Urgente
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Cirurgia de Olhos <span className="text-destructive">Negada</span>?
                <br />
                <span className="text-primary">Liminar em 24-72 Horas</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Catarata, glaucoma, descolamento de retina - 
                <strong> sua visão não pode esperar a burocracia do plano.</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-8"
                  onClick={() => window.open(whatsappLink, '_blank')}
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Urgente
                </Button>
                <Button 
                  size="lg" 
                  variant="default"
                  className="text-lg px-8"
                  onClick={handleCTAClick}
                >
                  <Scale className="mr-2 h-5 w-5" />
                  Avaliar Meu Caso Grátis
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { value: "95%", label: "Liminares Deferidas" },
                { value: "24-72h", label: "Tempo Médio" },
                { value: "1.200+", label: "Cirurgias Autorizadas" },
                { value: "R$ 15 mil", label: "Danos Morais Médios" },
              ].map((stat, i) => (
                <Card key={i} className="text-center p-4 bg-card/50 backdrop-blur">
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Procedure Types */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Procedimentos que Você <span className="text-primary">Tem Direito</span>
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Todas essas cirurgias são cobertas pelos planos de saúde quando há indicação médica.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {procedureTypes.map((item, i) => (
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
              Se o plano usou alguma dessas justificativas, você tem direito à liminar.
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
              <Button size="lg" onClick={handleCTAClick}>
                Meu Plano Usou Uma Dessas Desculpas
              </Button>
            </div>
          </div>
        </section>

        {/* Documents */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              <FileText className="inline-block w-8 h-8 mr-2 text-primary" />
              Documentos Necessários
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Reúna estes documentos para agilizar sua liminar oftalmológica.
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
              Visões Recuperadas
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
        <section className="py-16 px-4 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <Eye className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Não Perca Sua Visão
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              A visão é um bem precioso. Não deixe o plano de saúde 
              colocar sua qualidade de vida em risco.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 bg-white/10 border-white/30 hover:bg-white/20"
                onClick={handleCTAClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chat Online
              </Button>
            </div>
            <p className="mt-6 text-sm opacity-75">
              <Clock className="inline-block w-4 h-4 mr-1" />
              Atendimento 24h • Consulta Gratuita • Sem Compromisso
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default LiminarOftalmologicaLanding;

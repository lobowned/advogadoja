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
  TrendingUp,
  Heart,
  Activity,
  Stethoscope
} from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/motion/PageTransition";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const LiminarBariatricaLanding = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Liminar Cirurgia", href: "/liminar-cirurgia-negada" },
    { label: "Bariátrica" }
  ];

  const handleCTAClick = () => {
    window.location.href = "/#chat";
  };

  const whatsappNumber = "5571997036269";
  const whatsappMessage = encodeURIComponent("Olá! Tive minha cirurgia bariátrica negada pelo plano de saúde e preciso de uma liminar urgente.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const comorbidities = [
    { name: "Diabetes Tipo 2", icon: Activity, desc: "Controle glicêmico prejudicado" },
    { name: "Hipertensão Arterial", icon: Heart, desc: "Pressão elevada crônica" },
    { name: "Apneia do Sono", icon: Stethoscope, desc: "Pausas respiratórias noturnas" },
    { name: "Doenças Articulares", icon: Activity, desc: "Sobrecarga nas articulações" },
    { name: "Esteatose Hepática", icon: Heart, desc: "Gordura no fígado" },
    { name: "Síndrome Metabólica", icon: TrendingUp, desc: "Conjunto de fatores de risco" },
  ];

  const illegalExcuses = [
    "Procedimento estético (mentira - é tratamento de saúde)",
    "Falta de tentativa prévia de tratamento conservador",
    "Carência não cumprida (ilegal em casos de urgência)",
    "Fora do rol da ANS (rol é exemplificativo)",
    "Necessidade de mais exames (tática protelatória)",
    "IMC não atingiu o mínimo (critérios médicos prevalecem)",
  ];

  const requiredDocs = [
    { doc: "Laudo médico com IMC atual", tip: "Deve constar peso, altura e cálculo do IMC" },
    { doc: "Histórico de tratamentos anteriores", tip: "Dietas, medicamentos, acompanhamento nutricional" },
    { doc: "Laudos de comorbidades", tip: "Diabetes, hipertensão, apneia, etc." },
    { doc: "Avaliação multidisciplinar", tip: "Endócrino, psicólogo, nutricionista" },
    { doc: "Negativa por escrito do plano", tip: "E-mail, carta ou protocolo" },
    { doc: "Carteirinha e contrato do plano", tip: "Frente e verso" },
  ];

  const testimonials = [
    {
      name: "Patrícia M.",
      city: "São Paulo, SP",
      text: "Após 3 negativas do plano, consegui a liminar em 36 horas. Fiz minha gastroplastia e perdi 45kg!",
      result: "Liminar em 36h"
    },
    {
      name: "Roberto S.",
      city: "Rio de Janeiro, RJ",
      text: "O plano alegava que era estética. Com a liminar, provamos que era necessidade médica urgente.",
      result: "Cirurgia autorizada + R$ 15 mil de danos morais"
    },
    {
      name: "Fernanda L.",
      city: "Belo Horizonte, MG",
      text: "Tinha diabetes e apneia graves. A liminar saiu em 24h e salvou minha vida.",
      result: "Liminar em 24h"
    },
  ];

  const faqItems = [
    {
      question: "Qual IMC dá direito à cirurgia bariátrica?",
      answer: "IMC acima de 40 (obesidade mórbida) ou IMC acima de 35 com comorbidades como diabetes, hipertensão ou apneia do sono. Em alguns casos, IMC acima de 30 com diabetes de difícil controle também pode indicar a cirurgia."
    },
    {
      question: "O plano pode exigir 2 anos de tratamento conservador?",
      answer: "Não pode exigir prazo fixo. A indicação cirúrgica é decisão médica. Se o médico entende que o paciente já tentou tratamentos conservadores sem sucesso, tem direito à cirurgia independente do tempo."
    },
    {
      question: "Cirurgia bariátrica é considerada estética?",
      answer: "Absolutamente não. É tratamento de saúde reconhecido pelo CFM e ANS. A obesidade mórbida é doença grave com CID E66. Planos que negam alegando ser estético cometem prática abusiva."
    },
    {
      question: "E a cirurgia plástica pós-bariátrica?",
      answer: "O Tema 1069 do STJ determina que cirurgias reparadoras pós-bariátrica são cobertas quando há indicação médica (excesso de pele causando problemas de saúde, dermatites, dificuldade de higiene)."
    },
    {
      question: "Quanto tempo demora a liminar para bariátrica?",
      answer: "Em média 24 a 72 horas. Casos com comorbidades graves e risco de vida podem ser decididos em plantão judicial no mesmo dia."
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Liminar Cirurgia Bariátrica",
    "description": "Advogado especialista em liminares para cirurgias bariátricas negadas por planos de saúde. Gastroplastia, bypass gástrico, sleeve.",
    "serviceType": ["Liminar Cirurgia Bariátrica", "Direito à Saúde", "Direito do Consumidor"],
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
    <PageTransition>
      <Helmet>
        <title>Cirurgia Bariátrica Negada? Liminar em 24-72h | Advogado Especialista</title>
        <meta name="description" content="Plano de saúde negou sua cirurgia bariátrica? Conseguimos liminares em 24-72h. Gastroplastia, bypass, sleeve. 97% de sucesso. Consulta grátis." />
        <meta name="keywords" content="cirurgia bariátrica negada, liminar gastroplastia, plano saúde obesidade, bypass gástrico negado, sleeve negado, advogado bariátrica" />
        <link rel="canonical" href="https://advogadoja.com/liminar-cirurgia-bariatrica" />
        <meta property="og:title" content="Cirurgia Bariátrica Negada? Liminar em 24-72h" />
        <meta property="og:description" content="Plano negou sua bariátrica? 97% das liminares são deferidas. Consulta grátis." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
          {/* Breadcrumb */}
          <div className="container mx-auto max-w-6xl pt-4 px-4">
            <BreadcrumbNav items={breadcrumbs} />
          </div>
          
          {/* Hero Section */}
          <section className="relative pt-8 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-destructive/5" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-8">
              <Badge variant="destructive" className="mb-4 text-sm px-4 py-1">
                <AlertTriangle className="w-4 h-4 mr-2" />
                97% das Liminares São Deferidas
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Cirurgia Bariátrica <span className="text-destructive">Negada</span> pelo Plano?
                <br />
                <span className="text-primary">Liminar em 24-72 Horas</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Seu plano de saúde <strong>não pode negar gastroplastia, bypass ou sleeve</strong> quando há indicação médica.
                Conseguimos a autorização judicial rapidamente.
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
                { value: "97%", label: "Liminares Deferidas" },
                { value: "24-72h", label: "Tempo Médio" },
                { value: "2.100+", label: "Bariátricas Autorizadas" },
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

        {/* Comorbidades Section */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Tem Alguma Dessas <span className="text-primary">Comorbidades</span>?
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Se você tem IMC acima de 35 e alguma dessas condições, tem direito à cirurgia bariátrica pelo plano de saúde.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {comorbidities.map((item, i) => (
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
              Reúna estes documentos para agilizar sua liminar de cirurgia bariátrica.
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
              Casos de Sucesso
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
            <Shield className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Não Espere Sua Saúde Piorar
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Cada dia sem a cirurgia é um risco para sua saúde. 
              Fale com um advogado especialista agora e obtenha sua liminar.
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
    </PageTransition>
  );
};

export default LiminarBariatricaLanding;

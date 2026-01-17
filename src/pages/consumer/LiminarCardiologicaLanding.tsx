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
  Activity,
  Zap
} from "lucide-react";
import Navbar from "@/components/Navbar";
import { useDetectedProblem } from "@/contexts/DetectedProblemContext";
import { useNavigate } from "react-router-dom";

const LiminarCardiologicaLanding = () => {
  const { setDetectedProblem } = useDetectedProblem();
  const navigate = useNavigate();

  const handleCTAClick = () => {
    setDetectedProblem("Cirurgia Cardíaca Negada");
    navigate("/#chat");
  };

  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Meu plano de saúde negou minha cirurgia cardíaca e preciso de uma liminar urgente.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const procedureTypes = [
    { name: "Ponte de Safena", icon: Heart, desc: "Revascularização miocárdica" },
    { name: "Angioplastia", icon: Activity, desc: "Desobstrução de artérias" },
    { name: "Implante de Stent", icon: Zap, desc: "Stent farmacológico ou convencional" },
    { name: "Troca de Válvula", icon: Heart, desc: "Válvula aórtica, mitral" },
    { name: "Marca-passo", icon: Zap, desc: "Implante ou troca de dispositivo" },
    { name: "Cateterismo", icon: Activity, desc: "Diagnóstico e intervenção" },
  ];

  const illegalExcuses = [
    "Stent farmacológico não coberto (ilegal desde 2014)",
    "Procedimento pode esperar (risco de infarto)",
    "Marca-passo fora da tabela de preços",
    "Necessidade de reavaliação pelo plano",
    "Hospital cardiológico fora da rede",
    "Carência não cumprida (urgência não tem carência)",
  ];

  const requiredDocs = [
    { doc: "Laudo cardiológico", tip: "Com CID, diagnóstico e indicação do procedimento" },
    { doc: "Cateterismo/Angiografia", tip: "Mostrando as obstruções ou defeitos" },
    { doc: "Eletrocardiograma", tip: "ECG recente" },
    { doc: "Ecocardiograma", tip: "Função cardíaca e válvulas" },
    { doc: "Negativa por escrito", tip: "E-mail, carta ou protocolo do plano" },
    { doc: "Carteirinha do plano", tip: "Frente e verso" },
  ];

  const testimonials = [
    {
      name: "José M.",
      city: "São Paulo, SP",
      text: "Precisava de ponte de safena urgente. O plano queria esperar 30 dias. A liminar saiu em 6 horas e operou no dia seguinte.",
      result: "Liminar em 6h"
    },
    {
      name: "Maria A.",
      city: "Curitiba, PR",
      text: "Stent farmacológico negado. Disseram que só cobriam o convencional. A liminar garantiu o stent indicado pelo meu cardiologista.",
      result: "Stent autorizado + R$ 20 mil danos morais"
    },
    {
      name: "Antônio S.",
      city: "Brasília, DF",
      text: "Meu pai precisava de marca-passo com urgência. Em 12 horas conseguimos a liminar.",
      result: "Liminar em 12h"
    },
  ];

  const faqItems = [
    {
      question: "Cirurgia cardíaca de emergência tem carência?",
      answer: "Não. A Lei 9.656/98 determina cobertura imediata para urgência e emergência, inclusive cardiológicas. Não há carência para procedimentos de risco de vida."
    },
    {
      question: "O plano pode negar stent farmacológico?",
      answer: "Não pode. Desde 2014 (RN 338/ANS), os planos são obrigados a cobrir stents farmacológicos quando indicados pelo médico. A negativa é ilegal."
    },
    {
      question: "Quanto tempo demora liminar cardíaca?",
      answer: "Casos cardíacos são prioridade máxima. Liminares podem sair em 6 a 24 horas, inclusive em plantão judicial durante a noite e finais de semana."
    },
    {
      question: "Posso escolher o cardiologista?",
      answer: "Dentro da rede credenciada, sim. Se seu cardiologista de confiança estiver fora, pode-se pleitear reembolso integral ou autorização excepcional."
    },
    {
      question: "Qual o valor de danos morais em negativas cardíacas?",
      answer: "Por envolver risco de vida, os tribunais costumam fixar valores mais altos: entre R$ 15 mil e R$ 50 mil, dependendo da gravidade."
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Liminar Cirurgia Cardíaca",
    "description": "Advogado especialista em liminares para cirurgias cardíacas negadas. Ponte de safena, stent, angioplastia, marca-passo.",
    "serviceType": ["Liminar Cirurgia Cardíaca", "Direito à Saúde", "Emergência Cardiológica"],
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
        <title>Cirurgia Cardíaca Negada? Liminar em 6-24h | Ponte de Safena, Stent</title>
        <meta name="description" content="Plano negou ponte de safena, stent ou angioplastia? Liminares de emergência em 6-24h. 98% de sucesso. Advogado cardiológico 24h." />
        <meta name="keywords" content="cirurgia cardíaca negada, stent negado plano saúde, ponte safena negada, liminar cardiologia, advogado coração" />
        <link rel="canonical" href="https://advogadoja.com/liminar-cirurgia-cardiaca" />
        <meta property="og:title" content="Cirurgia Cardíaca Negada? Liminar em 6-24h" />
        <meta property="og:description" content="Emergência cardíaca negada? 98% de sucesso. Liminar em horas." />
        <meta property="og:type" content="website" />
        <script type="application/ld+json">{JSON.stringify(schemaData)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-16 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 via-transparent to-primary/5" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-8">
              <Badge variant="destructive" className="mb-4 text-sm px-4 py-1 animate-pulse">
                <Heart className="w-4 h-4 mr-2" />
                EMERGÊNCIA CARDÍACA - Risco de Vida
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Cirurgia Cardíaca <span className="text-destructive">Negada</span>?
                <br />
                <span className="text-primary">Liminar em 6-24 Horas</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Seu coração não pode esperar. 
                <strong> Ponte de safena, stent, angioplastia - conseguimos a autorização urgente.</strong>
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
                { value: "98%", label: "Liminares Deferidas" },
                { value: "6-24h", label: "Tempo Médio" },
                { value: "900+", label: "Cirurgias Cardíacas" },
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

        {/* Procedure Types */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Procedimentos que Você <span className="text-primary">Tem Direito</span>
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Emergências cardíacas não podem ser negadas. Ponto final.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {procedureTypes.map((item, i) => (
                <Card key={i} className="p-4 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 flex items-start gap-3">
                    <div className="p-2 rounded-full bg-destructive/10">
                      <item.icon className="w-5 h-5 text-destructive" />
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
              Se recebeu alguma dessas negativas, está em risco e tem direito à liminar imediata.
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
              Documentos para Liminar Cardíaca
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Reúna o que puder. Em emergências, entramos na justiça mesmo sem todos os documentos.
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
            <Heart className="w-16 h-16 mx-auto mb-6 opacity-90 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Seu Coração Não Pode Esperar
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Cada hora sem tratamento é um risco. 
              Ligue agora e proteja sua vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8"
                onClick={() => window.open(whatsappLink, '_blank')}
              >
                <Phone className="mr-2 h-5 w-5" />
                Ligar Agora - Emergência
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
              Plantão Cardiológico 24h • Liminares em Horas • Consulta Gratuita
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default LiminarCardiologicaLanding;

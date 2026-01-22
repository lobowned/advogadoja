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
  Brain,
  Activity,
  Zap
} from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/motion/PageTransition";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const LiminarNeurologicaLanding = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Liminar Cirurgia", href: "/liminar-cirurgia-negada" },
    { label: "Neurocirurgia" }
  ];

  const handleCTAClick = () => {
    window.location.href = "/#chat";
  };

  const whatsappNumber = "5571997036269";
  const whatsappMessage = encodeURIComponent("Olá! Meu plano de saúde negou minha neurocirurgia e preciso de uma liminar urgente.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const procedureTypes = [
    { name: "Cirurgia de Coluna", icon: Activity, desc: "Hérnia, estenose, artrodese" },
    { name: "Tumor Cerebral", icon: Brain, desc: "Ressecção e biópsia" },
    { name: "Aneurisma", icon: Zap, desc: "Clipagem e embolização" },
    { name: "Hidrocefalia", icon: Brain, desc: "Derivação ventriculoperitoneal" },
    { name: "Epilepsia", icon: Zap, desc: "Cirurgia de foco epiléptico" },
    { name: "Estimulador Cerebral", icon: Activity, desc: "DBS para Parkinson" },
  ];

  const illegalExcuses = [
    "Material de alto custo não coberto",
    "Procedimento experimental (quando aprovado)",
    "Necessidade de junta médica do plano",
    "Hospital neurocirúrgico fora da rede",
    "Cirurgia eletiva pode aguardar",
    "Próteses e implantes acima da tabela",
  ];

  const requiredDocs = [
    { doc: "Laudo neurocirúrgico", tip: "Com CID, diagnóstico e indicação da cirurgia" },
    { doc: "Ressonância magnética", tip: "Imagens da coluna ou crânio" },
    { doc: "Tomografia", tip: "Se aplicável ao caso" },
    { doc: "Laudos complementares", tip: "Eletroneuromiografia, angiografia" },
    { doc: "Negativa por escrito", tip: "E-mail, carta ou protocolo do plano" },
    { doc: "Histórico clínico", tip: "Prontuários, tratamentos anteriores" },
  ];

  const testimonials = [
    {
      name: "Marcos R.",
      city: "São Paulo, SP",
      text: "Hérnia de disco comprimindo nervos, perdendo força nas pernas. O plano queria esperar. Liminar em 24h, operei em 48h.",
      result: "Liminar em 24h"
    },
    {
      name: "Carla S.",
      city: "Rio de Janeiro, RJ",
      text: "Descobri um tumor cerebral. O plano negou a cirurgia alegando hospital fora da rede. A liminar veio em 12h.",
      result: "Cirurgia + R$ 35 mil danos morais"
    },
    {
      name: "Paulo M.",
      city: "Porto Alegre, RS",
      text: "Aneurisma cerebral rompido. O plano tentou transferir para hospital público. Conseguimos liminar em 6 horas.",
      result: "Liminar de emergência em 6h"
    },
  ];

  const faqItems = [
    {
      question: "Cirurgia de coluna pode ser negada por ser eletiva?",
      answer: "Se há compressão nervosa com risco de sequela permanente (paralisia, perda de força), a cirurgia é urgente. O plano não pode negar alegando que é eletiva."
    },
    {
      question: "Material de neurocirurgia é coberto?",
      answer: "Sim. Parafusos, cages, placas, derivações - todos os materiais indicados pelo neurocirurgião devem ser cobertos, independente do custo."
    },
    {
      question: "Quanto tempo demora liminar para tumor cerebral?",
      answer: "Tumores cerebrais são tratados como urgência máxima. Liminares podem sair em 6 a 24 horas, inclusive em plantão judicial."
    },
    {
      question: "O plano pode exigir que use hospital da rede?",
      answer: "Em neurocirurgias complexas, se não há profissional ou estrutura equivalente na rede, pode-se exigir atendimento fora da rede com cobertura integral."
    },
    {
      question: "Estimulador cerebral (DBS) para Parkinson é coberto?",
      answer: "Sim. O DBS está no rol da ANS e é indicado para Parkinson avançado. A negativa é ilegal e dá direito a liminar."
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Liminar Neurocirurgia",
    "description": "Advogado especialista em liminares para neurocirurgias negadas. Cirurgia de coluna, tumor cerebral, aneurisma.",
    "serviceType": ["Liminar Neurocirurgia", "Direito à Saúde", "Cirurgia de Coluna"],
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
        <title>Neurocirurgia Negada? Liminar em 6-24h | Coluna, Tumor, Aneurisma</title>
        <meta name="description" content="Plano negou cirurgia de coluna, tumor cerebral ou aneurisma? Liminares de emergência em 6-24h. 98% de sucesso. Advogado neurologista 24h." />
        <meta name="keywords" content="cirurgia coluna negada, tumor cerebral plano saúde, neurocirurgia negada, liminar hérnia disco, advogado neurologia" />
        <link rel="canonical" href="https://advogadoja.com/liminar-neurocirurgia" />
        <meta property="og:title" content="Neurocirurgia Negada? Liminar em 6-24h" />
        <meta property="og:description" content="Cirurgia de coluna ou cérebro negada? 98% de sucesso em liminares." />
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
              <Badge variant="destructive" className="mb-4 text-sm px-4 py-1 animate-pulse">
                <Brain className="w-4 h-4 mr-2" />
                URGÊNCIA NEUROLÓGICA - Risco de Sequelas
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Neurocirurgia <span className="text-destructive">Negada</span>?
                <br />
                <span className="text-primary">Liminar em 6-24 Horas</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Cirurgia de coluna, tumor cerebral, aneurisma - 
                <strong> seu cérebro e medula não podem esperar.</strong>
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
                { value: "800+", label: "Neurocirurgias" },
                { value: "R$ 30 mil", label: "Danos Morais Médios" },
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
              Neurocirurgias de urgência não podem ser negadas. Risco de sequelas irreversíveis.
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
              Se recebeu alguma dessas negativas, está em risco de sequelas permanentes.
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
              Documentos para Liminar Neurológica
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Reúna o que puder. Em emergências neurológicas, atuamos imediatamente.
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
              Vidas e Movimentos Salvos
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
            <Brain className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Não Arrisque Sequelas Permanentes
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Danos neurológicos podem ser irreversíveis. 
              Cada hora conta. Ligue agora.
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
              Plantão Neurológico 24h • Liminares em Horas • Consulta Gratuita
            </p>
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default LiminarNeurologicaLanding;

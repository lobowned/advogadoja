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
  Bone,
  Activity,
  CircleDot
} from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "@/components/motion/PageTransition";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const LiminarOrtopedicaLanding = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Liminar Cirurgia", href: "/liminar-cirurgia-negada" },
    { label: "Ortopédica" }
  ];

  const handleCTAClick = () => {
    window.location.href = "/#chat";
  };

  const whatsappNumber = "5511999999999";
  const whatsappMessage = encodeURIComponent("Olá! Meu plano de saúde negou minha cirurgia ortopédica e preciso de uma liminar urgente.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const surgeryTypes = [
    { name: "Prótese de Quadril", icon: Bone, desc: "Artroplastia total ou parcial" },
    { name: "Prótese de Joelho", icon: Bone, desc: "Substituição articular" },
    { name: "Artroscopia", icon: CircleDot, desc: "Cirurgia minimamente invasiva" },
    { name: "Cirurgia de Coluna", icon: Activity, desc: "Hérnia, artrodese, descompressão" },
    { name: "Fixação de Fraturas", icon: Bone, desc: "Placas, parafusos, hastes" },
    { name: "Reconstrução de Ligamentos", icon: Activity, desc: "LCA, LCP, menisco" },
  ];

  const illegalExcuses = [
    "Prótese importada não coberta pelo plano",
    "Material ortopédico acima do valor de tabela",
    "Cirurgia eletiva pode esperar",
    "Necessidade de segunda opinião médica",
    "Hospital escolhido fora da rede",
    "Tipo de prótese não autorizado",
  ];

  const requiredDocs = [
    { doc: "Laudo médico ortopédico", tip: "Com CID, descrição da lesão e indicação cirúrgica" },
    { doc: "Exames de imagem", tip: "Raio-X, ressonância, tomografia" },
    { doc: "Prescrição dos materiais", tip: "Tipo de prótese, materiais específicos" },
    { doc: "Orçamento cirúrgico", tip: "Valor do procedimento e materiais" },
    { doc: "Negativa por escrito", tip: "E-mail, carta ou protocolo do plano" },
    { doc: "Histórico de tratamentos", tip: "Fisioterapia, medicamentos anteriores" },
  ];

  const testimonials = [
    {
      name: "Carlos R.",
      city: "São Paulo, SP",
      text: "Precisava de prótese de quadril urgente. O plano queria substituir por uma mais barata. A liminar garantiu a prótese indicada pelo médico.",
      result: "Liminar em 48h"
    },
    {
      name: "Márcia S.",
      city: "Rio de Janeiro, RJ",
      text: "Rompi o LCA e o plano negou a cirurgia alegando ser eletiva. Em 36h conseguimos a liminar e fiz a artroscopia.",
      result: "Cirurgia + R$ 12 mil danos morais"
    },
    {
      name: "Pedro L.",
      city: "Belo Horizonte, MG",
      text: "Hérnia de disco com dor incapacitante. O plano queria esperar 6 meses. A liminar veio em 24h.",
      result: "Liminar em 24h"
    },
  ];

  const faqItems = [
    {
      question: "O plano pode escolher o tipo de prótese?",
      answer: "Não. A escolha do material ortopédico é prerrogativa do médico, não do plano de saúde. O plano deve fornecer a prótese indicada pelo cirurgião."
    },
    {
      question: "Cirurgia ortopédica eletiva pode ser negada?",
      answer: "A maioria das cirurgias ortopédicas, mesmo classificadas como eletivas, são necessárias. Se há indicação médica e o paciente sofre com dor ou limitação, o plano deve cobrir."
    },
    {
      question: "Prótese importada é coberta?",
      answer: "Sim. Se o médico indica prótese importada por razões técnicas (durabilidade, compatibilidade), o plano deve cobrir. A Lei 9.656/98 garante os materiais necessários ao procedimento."
    },
    {
      question: "Quanto tempo demora a liminar ortopédica?",
      answer: "Entre 24 e 72 horas na maioria dos casos. Situações de dor intensa ou risco de sequelas permanentes podem ser decididas em plantão judicial."
    },
    {
      question: "Posso escolher o hospital e médico?",
      answer: "Dentro da rede credenciada, sim. Se o especialista indicado estiver fora da rede, pode-se pleitear autorização excepcional, especialmente se não houver profissional equivalente na rede."
    },
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Advogado Liminar Cirurgia Ortopédica",
    "description": "Advogado especialista em liminares para cirurgias ortopédicas negadas. Próteses, artroscopias, cirurgias de coluna.",
    "serviceType": ["Liminar Cirurgia Ortopédica", "Direito à Saúde", "Prótese Negada"],
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
        <title>Cirurgia Ortopédica Negada? Liminar em 24-72h | Prótese, Coluna, Joelho</title>
        <meta name="description" content="Plano negou prótese de quadril, joelho ou cirurgia de coluna? Liminares em 24-72h. 96% de sucesso. Consulta grátis com advogado especialista." />
        <meta name="keywords" content="prótese negada plano saúde, cirurgia ortopédica negada, liminar prótese quadril, cirurgia coluna negada, advogado ortopedia" />
        <link rel="canonical" href="https://advogadoja.com/liminar-cirurgia-ortopedica" />
        <meta property="og:title" content="Cirurgia Ortopédica Negada? Liminar em 24-72h" />
        <meta property="og:description" content="Prótese ou cirurgia de coluna negada? 96% de sucesso em liminares." />
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
                96% das Liminares Ortopédicas Deferidas
              </Badge>
              <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                Cirurgia Ortopédica <span className="text-destructive">Negada</span>?
                <br />
                <span className="text-primary">Liminar em 24-72 Horas</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
                Prótese de quadril, joelho, cirurgia de coluna ou artroscopia negados?
                <strong> O plano não pode deixar você sentindo dor.</strong>
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
                { value: "96%", label: "Liminares Deferidas" },
                { value: "24-72h", label: "Tempo Médio" },
                { value: "1.500+", label: "Cirurgias Autorizadas" },
                { value: "R$ 12 mil", label: "Danos Morais Médios" },
              ].map((stat, i) => (
                <Card key={i} className="text-center p-4 bg-card/50 backdrop-blur">
                  <p className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Surgery Types */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Cirurgias que Você <span className="text-primary">Tem Direito</span>
            </h2>
            <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
              Se seu médico indicou, o plano tem que cobrir. Simples assim.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {surgeryTypes.map((item, i) => (
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
              Se o plano usou alguma dessas justificativas, está cometendo abuso.
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
              Reúna estes documentos para agilizar sua liminar ortopédica.
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
              Pare de Sentir Dor
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Você não precisa esperar enquanto sua qualidade de vida piora. 
              Fale com um advogado especialista agora.
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

export default LiminarOrtopedicaLanding;

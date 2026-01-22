import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Stethoscope, Clock, DollarSign, CheckCircle, ArrowRight, 
  MessageCircle, Shield, AlertTriangle, Star, Phone, HeartPulse,
  FileCheck, Syringe, Bone, Heart, Brain, Eye, Scale
} from "lucide-react";
import PageTransition from "@/components/motion/PageTransition";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BreadcrumbNav from "@/components/BreadcrumbNav";

const LiminarCirurgiaNegadaLanding = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Consumidor", href: "/advogado-consumidor" },
    { label: "Liminar Cirurgia Negada" }
  ];

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
      }
    ]
  };

  const surgeryTypes = [
    { name: "Bariátrica / Gastroplastia", icon: Stethoscope, success: "97%", link: "/liminar-cirurgia-bariatrica" },
    { name: "Tratamento Oncológico", icon: Syringe, success: "99%", link: "/liminar-tratamento-cancer" },
    { name: "Ortopédica / Próteses", icon: Bone, success: "95%", link: "/liminar-cirurgia-ortopedica" },
    { name: "Cardíaca / Ponte Safena", icon: Heart, success: "98%", link: "/liminar-cirurgia-cardiaca" },
    { name: "Neurológica / Coluna", icon: Brain, success: "94%", link: "/liminar-neurocirurgia" },
    { name: "Oftalmológica / Catarata", icon: Eye, success: "96%", link: "/liminar-cirurgia-olhos" },
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

  const steps = [
    {
      number: "1",
      title: "Envie sua Negativa",
      description: "Compartilhe a negativa do plano e os documentos médicos pelo chat ou WhatsApp.",
      time: "5 min"
    },
    {
      number: "2", 
      title: "Análise Urgente",
      description: "Nossa equipe analisa seu caso e prepara a petição com pedido de liminar.",
      time: "2-4h"
    },
    {
      number: "3",
      title: "Ação Judicial",
      description: "Entramos com a ação e pedido de tutela de urgência no mesmo dia.",
      time: "24h"
    },
    {
      number: "4",
      title: "Liminar Deferida",
      description: "Juiz defere a liminar e o plano é obrigado a autorizar sua cirurgia.",
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
      surgery: "Mastectomia + Reconstrução",
      text: "Câncer de mama e o plano negou a reconstrução. Além da liminar, ganhei R$ 25 mil de danos morais.",
      result: "R$ 25.000 indenização"
    }
  ];

  return (
    <PageTransition>
      <Helmet>
        <title>Liminar Cirurgia Negada pelo Plano de Saúde | Autorização em 24-48h</title>
        <meta name="description" content="Cirurgia negada pelo plano de saúde? Advogado especialista consegue liminar judicial em 24-48h. Bariátrica, oncológica, ortopédica. 95% de sucesso. Consulta grátis!" />
        <meta name="keywords" content="liminar cirurgia plano saúde, cirurgia negada, tutela urgência saúde, bariátrica negada, quimioterapia negada, prótese negada, advogado plano saúde" />
        <link rel="canonical" href="https://advogadoja.lovable.app/liminar-cirurgia-negada" />
        <meta property="og:title" content="Cirurgia Negada? Liminar em 24-48h | Advogado Especialista" />
        <meta property="og:description" content="Plano negou sua cirurgia? Conseguimos autorização judicial urgente. 95% de sucesso. Consulta grátis!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://advogadoja.lovable.app/liminar-cirurgia-negada" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Header */}
        <header className="bg-background/80 backdrop-blur-md border-b sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <BackButton />
              <Link to="/" className="flex items-center gap-2">
                <span className="text-lg font-semibold">Advogado Já</span>
              </Link>
              <Button asChild size="sm" className="bg-red-600 hover:bg-red-700">
                <a href="https://wa.me/5571997036269?text=Urgente:%20Minha%20cirurgia%20foi%20negada%20pelo%20plano" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-1" />
                  URGENTE
                </a>
              </Button>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6">
          <BreadcrumbNav items={breadcrumbs} />
        </div>

        {/* Hero */}
        <section className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-red-100 text-red-700 hover:bg-red-100 animate-pulse">
              <AlertTriangle className="w-4 h-4 mr-1" />
              Urgência Médica: Não espere mais!
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Cirurgia Negada pelo Plano?
              <span className="block text-red-600">Liminar em 24-48 Horas</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Seu plano de saúde negou sua cirurgia? A maioria das negativas são <strong>ilegais</strong>. 
              Conseguimos autorização judicial urgente para você operar o mais rápido possível.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-lg py-6 px-8">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Preciso de Liminar URGENTE
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg py-6 px-8">
                <Link to="/calculadora-liminar-cirurgia">
                  <Scale className="w-5 h-5 mr-2" />
                  Calcular Minha Indenização
                </Link>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-red-600" />
                <span>Liminar em 24-48h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
                <span>95% de sucesso</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Plantão 24 horas</span>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="bg-red-600 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
              <div>
                <div className="text-4xl font-bold mb-2">3.500+</div>
                <div className="text-red-100">Liminares de cirurgia</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-red-100">Taxa de deferimento</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">24-48h</div>
                <div className="text-red-100">Tempo médio</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">R$ 15mi+</div>
                <div className="text-red-100">Em indenizações</div>
              </div>
            </div>
          </div>
        </section>

        {/* Surgery Types */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Tipos de Cirurgias com Alta Taxa de Sucesso
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Temos experiência comprovada em liminares para os principais tipos de cirurgias negadas.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {surgeryTypes.map((surgery, index) => (
              <Link key={index} to={surgery.link}>
                <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer group border-l-4 border-l-red-500">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <surgery.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                      {surgery.success} sucesso
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-red-600 transition-colors">
                    {surgery.name}
                  </h3>
                  <p className="text-sm text-muted-foreground flex items-center gap-1">
                    Ver casos e como funciona
                    <ArrowRight className="w-4 h-4" />
                  </p>
                </Card>
              </Link>
            ))}
          </div>
        </section>

        {/* Illegal Excuses */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              8 Desculpas Ilegais que os Planos Usam
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Recebeu alguma dessas justificativas? Na maioria dos casos, a Justiça obriga o plano a cobrir.
            </p>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-4">
              {illegalExcuses.map((item, index) => (
                <Card key={index} className="p-4 border-l-4 border-l-red-400">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm line-through text-muted-foreground">
                        "{item.excuse}"
                      </p>
                      <p className="text-sm text-emerald-600 font-medium mt-1">
                        ✓ {item.reality}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Analisar Minha Negativa Grátis
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Como Conseguimos Liminar em 24-48h
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Processo ágil e eficiente para garantir sua cirurgia o mais rápido possível.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-[60%] w-full h-0.5 bg-red-200" />
                  )}
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-2xl font-bold text-red-600">{step.number}</span>
                  </div>
                  <Badge variant="outline" className="mb-2 text-xs">{step.time}</Badge>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-gradient-to-b from-background to-red-50/50 dark:to-red-950/10 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Casos Reais de Sucesso
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Veja como ajudamos pessoas que tiveram suas cirurgias negadas.
            </p>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[1,2,3,4,5].map((star) => (
                      <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="font-semibold text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.city}</p>
                    </div>
                    <Badge className="bg-emerald-100 text-emerald-700 text-xs">
                      {testimonial.result}
                    </Badge>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Documents Needed */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center mb-4">
            Documentos para a Liminar
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Quanto mais completa a documentação, mais rápida a decisão do juiz.
          </p>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="p-6 border-red-200">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-red-600" />
                Obrigatórios
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">Laudo médico detalhado</span>
                    <p className="text-muted-foreground text-xs">Com CID, descrição da doença e justificativa da urgência</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">Negativa do plano por escrito</span>
                    <p className="text-muted-foreground text-xs">E-mail, carta ou protocolo</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">Carteirinha do plano</span>
                    <p className="text-muted-foreground text-xs">Frente e verso</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">RG e CPF</span>
                    <p className="text-muted-foreground text-xs">Cópias legíveis</p>
                  </div>
                </li>
              </ul>
            </Card>

            <Card className="p-6 border-amber-200">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-amber-600" />
                Recomendados
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">Exames recentes</span>
                    <p className="text-muted-foreground text-xs">Ressonância, tomografia, etc.</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">Prontuário médico</span>
                    <p className="text-muted-foreground text-xs">Histórico do tratamento</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">Protocolos de atendimento</span>
                    <p className="text-muted-foreground text-xs">Comprovando tentativas de autorização</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                  <div>
                    <span className="font-medium">Orçamento particular</span>
                    <p className="text-muted-foreground text-xs">Se obteve valor da cirurgia</p>
                  </div>
                </li>
              </ul>
            </Card>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-muted/30 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Perguntas Frequentes
            </h2>

            <div className="max-w-3xl mx-auto space-y-4">
              <Card className="p-6">
                <h3 className="font-semibold mb-2">Quanto tempo demora para conseguir a liminar?</h3>
                <p className="text-sm text-muted-foreground">
                  Em casos urgentes, a liminar pode ser concedida em 24 a 48 horas. Casos de emergência 
                  (risco de vida) podem ter decisão no mesmo dia através de plantão judicial.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">E se a liminar for negada?</h3>
                <p className="text-sm text-muted-foreground">
                  Podemos recorrer imediatamente com agravo de instrumento. Além disso, o processo 
                  continua e podemos conseguir a tutela antecipada posteriormente. A taxa de reversão é alta.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Posso pedir indenização além da cirurgia?</h3>
                <p className="text-sm text-muted-foreground">
                  Sim! Além de obrigar o plano a cobrir a cirurgia, pedimos danos morais pela negativa 
                  abusiva. Os valores variam de R$ 8.000 a R$ 50.000 dependendo da gravidade.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold mb-2">Quanto custa o serviço?</h3>
                <p className="text-sm text-muted-foreground">
                  A análise inicial é gratuita. Trabalhamos com honorários sob êxito em muitos casos, 
                  ou seja, você só paga se ganhar. Fale conosco para avaliar seu caso.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-gradient-to-r from-red-600 to-red-700 py-16">
          <div className="container mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sua Cirurgia Não Pode Esperar
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              A cada dia de espera, sua situação pode piorar. 
              Não deixe o plano de saúde decidir sobre sua vida. Fale conosco agora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="text-lg py-6 px-8">
                <Link to="/selecionar-acao/consumidor">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Quero Minha Liminar Agora
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg py-6 px-8 border-white text-white hover:bg-white/10">
                <a href="https://wa.me/5511999999999?text=Urgente:%20Minha%20cirurgia%20foi%20negada%20pelo%20plano" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Urgente
                </a>
              </Button>
            </div>
            
            <p className="text-sm text-red-200 mt-6">
              Plantão 24 horas para casos de emergência
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-xl font-bold mb-6">Veja também</h2>
          <div className="flex flex-wrap gap-3">
            <Link to="/calculadora-liminar-cirurgia">
              <Badge variant="outline" className="py-2 px-4 hover:bg-muted cursor-pointer">
                Calculadora de Liminar
              </Badge>
            </Link>
            <Link to="/plano-saude-negou">
              <Badge variant="outline" className="py-2 px-4 hover:bg-muted cursor-pointer">
                Plano de Saúde Negou
              </Badge>
            </Link>
            <Link to="/calculadora-plano-saude">
              <Badge variant="outline" className="py-2 px-4 hover:bg-muted cursor-pointer">
                Calculadora Plano de Saúde
              </Badge>
            </Link>
            <Link to="/perguntas/quanto-tempo-liminar-cirurgia-plano-saude">
              <Badge variant="outline" className="py-2 px-4 hover:bg-muted cursor-pointer">
                Quanto tempo demora liminar?
              </Badge>
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-background border-t py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Advogado Já - Todos os direitos reservados</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default LiminarCirurgiaNegadaLanding;

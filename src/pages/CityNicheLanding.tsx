import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  MapPin, Scale, Phone, MessageCircle, CheckCircle, 
  Clock, Shield, Award, ChevronRight, FileText, Users,
  Briefcase, Heart, Building, HeartPulse, Gavel, ShoppingBag
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/motion/PageTransition";
import { getCityBySlug, brazilianCities } from "@/data/cities";

// Legal area configurations
const legalAreas = {
  trabalhista: {
    name: "Trabalhista",
    slug: "trabalhista",
    icon: Briefcase,
    color: "text-blue-600",
    bgColor: "bg-blue-100",
    description: "Especialistas em direitos trabalhistas, rescisões, horas extras, FGTS e ações contra empresas",
    services: [
      "Rescisão de contrato de trabalho",
      "Cálculo e cobrança de horas extras",
      "Adicional de insalubridade e periculosidade",
      "Assédio moral e sexual no trabalho",
      "Reversão de justa causa",
      "Reconhecimento de vínculo empregatício",
      "Acidente de trabalho e doenças ocupacionais",
      "Verbas rescisórias e FGTS"
    ],
    faq: [
      {
        q: "Quanto tempo tenho para entrar com ação trabalhista?",
        a: "Você tem até 2 anos após o término do contrato de trabalho para ajuizar a ação. O prazo para cobrar direitos é de 5 anos retroativos."
      },
      {
        q: "Posso processar a empresa sem advogado?",
        a: "Sim, é possível, mas não é recomendado. Um advogado trabalhista conhece todos os seus direitos e pode maximizar o valor da sua indenização."
      },
      {
        q: "Quanto custa um advogado trabalhista?",
        a: "No Advogado Já, a consulta inicial é gratuita. Os honorários são geralmente cobrados apenas em caso de êxito na ação."
      },
      {
        q: "Quais documentos preciso para a ação trabalhista?",
        a: "Carteira de trabalho, holerites, contrato de trabalho, termo de rescisão (TRCT), extratos de FGTS e qualquer prova do direito violado."
      }
    ]
  },
  familia: {
    name: "Família",
    slug: "familia",
    icon: Heart,
    color: "text-pink-600",
    bgColor: "bg-pink-100",
    description: "Especialistas em divórcio, pensão alimentícia, guarda de filhos, inventário e direito de família",
    services: [
      "Divórcio consensual e litigioso",
      "Pensão alimentícia (fixação e revisão)",
      "Guarda de filhos (compartilhada e unilateral)",
      "Regulamentação de visitas",
      "Reconhecimento e dissolução de união estável",
      "Investigação de paternidade",
      "Inventário e partilha de bens",
      "Alienação parental"
    ],
    faq: [
      {
        q: "Quanto tempo demora um divórcio?",
        a: "O divórcio consensual pode ser feito em cartório em poucos dias. O litigioso pode levar de 6 meses a 2 anos, dependendo da complexidade."
      },
      {
        q: "Como é calculada a pensão alimentícia?",
        a: "A pensão é calculada com base nas necessidades de quem recebe e nas possibilidades de quem paga. Geralmente varia entre 20% e 30% dos rendimentos."
      },
      {
        q: "O que é guarda compartilhada?",
        a: "Na guarda compartilhada, ambos os pais participam das decisões sobre a vida do filho, mesmo morando em casas diferentes."
      },
      {
        q: "Preciso de advogado para divórcio em cartório?",
        a: "Sim, mesmo o divórcio em cartório requer a presença de advogado. Nós podemos auxiliar em todo o processo."
      }
    ]
  },
  previdenciario: {
    name: "Previdenciário",
    slug: "previdenciario",
    icon: HeartPulse,
    color: "text-green-600",
    bgColor: "bg-green-100",
    description: "Especialistas em aposentadoria, auxílio-doença, BPC/LOAS e benefícios do INSS",
    services: [
      "Aposentadoria por idade e tempo de contribuição",
      "Aposentadoria especial (insalubridade)",
      "Aposentadoria por invalidez",
      "Auxílio-doença e auxílio-acidente",
      "BPC/LOAS para idosos e deficientes",
      "Pensão por morte",
      "Revisão de aposentadoria",
      "Salário-maternidade"
    ],
    faq: [
      {
        q: "Quando posso me aposentar?",
        a: "Depende da modalidade: por idade (65 anos homem, 62 mulher) ou por tempo de contribuição (regras de transição). Fazemos a análise do seu caso."
      },
      {
        q: "O INSS negou meu benefício. O que fazer?",
        a: "Você pode recorrer administrativamente ou entrar com ação judicial. Muitos benefícios negados são concedidos na Justiça."
      },
      {
        q: "O que é BPC/LOAS?",
        a: "É um benefício de um salário mínimo para idosos acima de 65 anos ou pessoas com deficiência de baixa renda que nunca contribuíram ao INSS."
      },
      {
        q: "Posso revisar minha aposentadoria?",
        a: "Sim, em até 10 anos após a concessão. Revisões podem aumentar significativamente o valor do benefício."
      }
    ]
  },
  civil: {
    name: "Civil",
    slug: "civil",
    icon: Building,
    color: "text-amber-600",
    bgColor: "bg-amber-100",
    description: "Especialistas em contratos, indenizações, cobranças, imóveis e responsabilidade civil",
    services: [
      "Ações de indenização por danos morais e materiais",
      "Cobranças e execuções de dívidas",
      "Contratos e distratos",
      "Ações possessórias (despejo, reintegração)",
      "Usucapião de imóveis",
      "Responsabilidade civil por acidentes",
      "Revisão de contratos bancários",
      "Negativação indevida (SPC/Serasa)"
    ],
    faq: [
      {
        q: "Quanto vale uma ação de danos morais?",
        a: "O valor varia conforme a gravidade. Casos simples ficam entre R$ 3.000 e R$ 15.000. Casos graves podem passar de R$ 50.000."
      },
      {
        q: "Posso processar por nome negativado indevidamente?",
        a: "Sim! A negativação indevida gera dano moral presumido. Você pode pedir indenização e a retirada imediata do nome."
      },
      {
        q: "O que é usucapião?",
        a: "É a aquisição de propriedade de um imóvel pela posse prolongada (5 a 15 anos, dependendo do caso)."
      },
      {
        q: "Como funciona uma ação de despejo?",
        a: "O proprietário pode pedir o despejo por falta de pagamento ou fim do contrato. O inquilino tem prazo para defesa e desocupação."
      }
    ]
  },
  consumidor: {
    name: "Consumidor",
    slug: "consumidor",
    icon: ShoppingBag,
    color: "text-purple-600",
    bgColor: "bg-purple-100",
    description: "Especialistas em direito do consumidor, cobranças indevidas, produtos defeituosos e planos de saúde",
    services: [
      "Cobrança indevida e restituição em dobro",
      "Produto com defeito (troca ou reembolso)",
      "Plano de saúde (negativa de cobertura)",
      "Cancelamento de contratos abusivos",
      "Propaganda enganosa",
      "Problemas com compras online",
      "Telefonia e internet (cobranças e serviços)",
      "Financiamentos e empréstimos abusivos"
    ],
    faq: [
      {
        q: "Cobrei algo que não comprei. O que fazer?",
        a: "Você tem direito à restituição em dobro do valor pago indevidamente, mais correção e juros."
      },
      {
        q: "O plano de saúde negou minha cirurgia. E agora?",
        a: "Muitas negativas são ilegais. Podemos conseguir uma liminar para forçar a cobertura e ainda pedir indenização."
      },
      {
        q: "Comprei online e não recebi. Tenho direitos?",
        a: "Sim! Você pode exigir a entrega, cancelar a compra com reembolso integral, ou pedir indenização por danos."
      },
      {
        q: "Prazo de garantia de produtos no Brasil?",
        a: "Garantia legal: 30 dias para produtos não duráveis e 90 dias para duráveis. A contratual pode ser maior."
      }
    ]
  },
  criminal: {
    name: "Criminal",
    slug: "criminal",
    icon: Gavel,
    color: "text-red-600",
    bgColor: "bg-red-100",
    description: "Especialistas em defesa criminal, habeas corpus, crimes contra honra e representação de vítimas",
    services: [
      "Defesa em inquéritos e processos criminais",
      "Habeas corpus (prisão ilegal)",
      "Crimes contra a honra (calúnia, difamação, injúria)",
      "Crimes de trânsito",
      "Violência doméstica (defesa e representação)",
      "Crimes econômicos e empresariais",
      "Execução penal e progressão de regime",
      "Revisão criminal"
    ],
    faq: [
      {
        q: "Fui preso em flagrante. O que fazer?",
        a: "Procure um advogado imediatamente. Você tem direito a audiência de custódia em 24h e pode ser solto com habeas corpus."
      },
      {
        q: "O que é habeas corpus?",
        a: "É um instrumento para garantir a liberdade de ir e vir quando há prisão ilegal ou ameaça de prisão."
      },
      {
        q: "Calúnia, difamação e injúria são crimes?",
        a: "Sim, são crimes contra a honra. A vítima pode processar o ofensor criminalmente e também pedir indenização."
      },
      {
        q: "Posso responder processo em liberdade?",
        a: "Na maioria dos casos, sim. A prisão preventiva é exceção e pode ser questionada via habeas corpus."
      }
    ]
  }
};

export type LegalAreaKey = keyof typeof legalAreas;

export const getLegalAreaBySlug = (slug: string) => {
  return Object.values(legalAreas).find(area => area.slug === slug);
};

export const getAllLegalAreas = () => Object.values(legalAreas);

const CityNicheLanding = () => {
  const { nicheSlug, citySlug } = useParams<{ nicheSlug: string; citySlug: string }>();
  
  const city = citySlug ? getCityBySlug(citySlug) : undefined;
  const area = nicheSlug ? getLegalAreaBySlug(nicheSlug) : undefined;

  if (!city || !area) {
    return <Navigate to="/" replace />;
  }

  const canonicalUrl = `https://advogadoja.lovable.app/advogado-${area.slug}-${city.slug}`;
  const Icon = area.icon;

  // Schema.org LegalService with LocalBusiness
  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    "name": `Advogado ${area.name} em ${city.name}`,
    "description": `Advogado especialista em ${area.name} em ${city.name}, ${city.state}. ${area.description}`,
    "url": canonicalUrl,
    "telephone": "+55-71-99999-9999",
    "email": "contato@advogadoja.com.br",
    "priceRange": "$$",
    "currenciesAccepted": "BRL",
    "paymentAccepted": "Cash, Credit Card, PIX",
    "openingHours": "Mo-Fr 08:00-18:00",
    "image": "https://advogadoja.lovable.app/og-image.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressRegion": city.stateCode,
      "addressCountry": "BR"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": city.name,
        "containedInPlace": {
          "@type": "State",
          "name": city.state
        }
      },
      {
        "@type": "State",
        "name": city.state
      }
    ],
    "serviceType": `Direito ${area.name}`,
    "knowsAbout": area.services,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Serviços de Direito ${area.name}`,
      "itemListElement": area.services.map((service, idx) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service,
          "description": `Serviço de ${service.toLowerCase()} em ${city.name}`
        },
        "position": idx + 1
      }))
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Cliente Satisfeito"
        },
        "reviewBody": `Excelente atendimento em ${area.name}. Profissionais competentes e atenciosos.`
      }
    ],
    "sameAs": [
      "https://www.instagram.com/advogadoja",
      "https://www.facebook.com/advogadoja"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://advogadoja.lovable.app" },
      { "@type": "ListItem", "position": 2, "name": `Advogado ${area.name}`, "item": `https://advogadoja.lovable.app/advogado-${area.slug}` },
      { "@type": "ListItem", "position": 3, "name": city.name, "item": `https://advogadoja.lovable.app/advogado/${city.slug}` },
      { "@type": "ListItem", "position": 4, "name": `Advogado ${area.name} ${city.name}`, "item": canonicalUrl }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": area.faq.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": { "@type": "Answer", "text": item.a }
    }))
  };

  const handleCTA = () => {
    window.location.href = `/?cidade=${city.slug}&area=${area.slug}`;
  };

  // Get other cities in same region for internal linking
  const nearbyCities = brazilianCities
    .filter(c => c.region === city.region && c.slug !== city.slug)
    .slice(0, 3);

  // Get other areas for internal linking
  const otherAreas = Object.values(legalAreas).filter(a => a.slug !== area.slug).slice(0, 3);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>{`Advogado ${area.name} em ${city.name} ${city.stateCode} | Consulta Gratuita`}</title>
          <meta 
            name="description" 
            content={`Advogado ${area.name.toLowerCase()} em ${city.name}. ${area.description} Consulta jurídica online gratuita e imediata.`} 
          />
          <meta 
            name="keywords" 
            content={`advogado ${area.slug} ${city.name}, ${area.slug} ${city.name}, advogado ${area.name.toLowerCase()} ${city.stateCode}, consulta ${area.slug} ${city.name}`} 
          />
          <link rel="canonical" href={canonicalUrl} />
          
          <meta property="og:title" content={`Advogado ${area.name} em ${city.name} | Consulta Gratuita`} />
          <meta property="og:description" content={`${area.description} Atendimento online em ${city.name}.`} />
          <meta property="og:url" content={canonicalUrl} />
          
          <meta name="geo.region" content={`BR-${city.stateCode}`} />
          <meta name="geo.placename" content={city.name} />
          
          <script type="application/ld+json">{JSON.stringify(legalServiceSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </Helmet>

        <Navbar onCtaClick={handleCTA} />

        <main>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-b from-primary/5 to-background py-12 md:py-20">
            <div className="container mx-auto px-4">
              {/* Breadcrumb */}
              <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-6">
                <Link to="/" className="hover:text-primary">Início</Link>
                <ChevronRight className="h-4 w-4" />
                <Link to={`/advogado/${city.slug}`} className="hover:text-primary">{city.name}</Link>
                <ChevronRight className="h-4 w-4" />
                <span className="text-foreground">Advogado {area.name}</span>
              </nav>

              <div className="max-w-4xl">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className={`${area.bgColor} ${area.color} border-0`}>
                    <Icon className="h-3 w-3 mr-1" />
                    {area.name}
                  </Badge>
                  <Badge variant="secondary">
                    <MapPin className="h-3 w-3 mr-1" />
                    {city.name}, {city.stateCode}
                  </Badge>
                </div>
                
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Advogado {area.name} em {city.name}
                  <span className="text-primary block mt-2">Consulta Online Gratuita</span>
                </h1>
                
                <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                  {area.description}. Atendimento especializado para {city.name} e região.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="text-lg px-8" onClick={handleCTA}>
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Falar com Advogado {area.name}
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="tel:+5571997036269">
                      <Phone className="h-5 w-5 mr-2" />
                      Ligar Agora
                    </a>
                  </Button>
                </div>

                <div className="flex flex-wrap gap-4 mt-8 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Especialistas OAB/{city.stateCode}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Consulta Gratuita
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Atendimento Imediato
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Serviços de Direito {area.name} em {city.name}
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Nossos advogados especialistas em {area.name.toLowerCase()} atendem os seguintes casos:
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {area.services.map((service, idx) => (
                  <Card key={idx} className="hover:shadow-md transition-shadow">
                    <CardContent className="pt-6 flex items-start gap-3">
                      <CheckCircle className={`h-5 w-5 ${area.color} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm">{service}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Why Us Section */}
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
                Por que escolher nossos advogados em {city.name}?
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {[
                  { icon: <Award className="h-6 w-6" />, title: "Especialização", desc: `Advogados focados em ${area.name}` },
                  { icon: <Clock className="h-6 w-6" />, title: "Rapidez", desc: "Atendimento em minutos" },
                  { icon: <Shield className="h-6 w-6" />, title: "Sigilo", desc: "Total confidencialidade" },
                  { icon: <Users className="h-6 w-6" />, title: "Experiência", desc: `+1.000 casos em ${city.name}` }
                ].map((item, idx) => (
                  <div key={idx} className="text-center">
                    <div className={`w-14 h-14 rounded-full ${area.bgColor} ${area.color} flex items-center justify-center mx-auto mb-4`}>
                      {item.icon}
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
                Dúvidas sobre Direito {area.name}
              </h2>
              <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
                Perguntas frequentes de clientes de {city.name}
              </p>

              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {area.faq.map((item, idx) => (
                    <AccordionItem key={idx} value={`faq-${idx}`}>
                      <AccordionTrigger className="text-left font-medium">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className={`py-12 md:py-16 ${area.bgColor}`}>
            <div className="container mx-auto px-4 text-center">
              <Icon className={`h-12 w-12 mx-auto mb-6 ${area.color}`} />
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Precisa de um Advogado {area.name} em {city.name}?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Fale agora com um especialista. Atendimento gratuito e imediato.
              </p>
              <Button size="lg" className="text-lg px-8" onClick={handleCTA}>
                <MessageCircle className="h-5 w-5 mr-2" />
                Iniciar Consulta Gratuita
              </Button>
            </div>
          </section>

          {/* Internal Links */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Same area, other cities */}
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Icon className={`h-5 w-5 ${area.color}`} />
                    Advogado {area.name} em outras cidades
                  </h3>
                  <div className="space-y-2">
                    {nearbyCities.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/advogado-${area.slug}-${c.slug}`}
                        className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors text-sm"
                      >
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        Advogado {area.name} em {c.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Same city, other areas */}
                <div>
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Outras áreas em {city.name}
                  </h3>
                  <div className="space-y-2">
                    {otherAreas.map((a) => {
                      const OtherIcon = a.icon;
                      return (
                        <Link
                          key={a.slug}
                          to={`/advogado-${a.slug}-${city.slug}`}
                          className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors text-sm"
                        >
                          <OtherIcon className={`h-4 w-4 ${a.color}`} />
                          Advogado {a.name} em {city.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Advogado Já | OAB/BA 46.638 | Direito {area.name} em {city.name}</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default CityNicheLanding;

import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Scale, MapPin, Users, ShoppingBag, Briefcase, Shield, 
  Gavel, CheckCircle, ArrowRight, MessageCircle, Star, Lock
} from "lucide-react";
import PageTransition from "@/components/motion/PageTransition";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import { programmaticFAQs } from "@/data/programmatic-faqs";
import { brazilianCities, isCityIndexable } from "@/data/cities";

// As mesmas cidades indexáveis do sitemap (cada uma tem /advogado/<cidade>)
const bahiaCities = brazilianCities.filter((c) => c.stateCode === "BA" && isCityIndexable(c.slug));

const WHATSAPP_URL = `https://wa.me/5571997036269?text=${encodeURIComponent("Olá, vim pelo site (página da Bahia) e quero falar sobre um caso.")}`;

const legalAreas = [
  { id: "consumidor", name: "Consumidor", icon: ShoppingBag, color: "text-emerald-600 bg-emerald-50", text: "Cobrança indevida, nome negativado, produto com defeito, voo e plano de saúde." },
  { id: "trabalhista", name: "Trabalhista", icon: Briefcase, color: "text-blue-600 bg-blue-50", text: "Rescisão, horas extras, FGTS, vínculo sem carteira e acidente de trabalho." },
  { id: "previdenciario", name: "Previdenciário", icon: Shield, color: "text-purple-600 bg-purple-50", text: "Aposentadoria, auxílio-doença, BPC/LOAS, pensão por morte e revisão." },
  { id: "familia", name: "Família", icon: Users, color: "text-pink-600 bg-pink-50", text: "Divórcio, pensão alimentícia, guarda, união estável e inventário." },
  { id: "civil", name: "Civil", icon: Scale, color: "text-amber-600 bg-amber-50", text: "Contratos, cobranças, indenizações, aluguel e imóveis." },
  { id: "criminal", name: "Criminal", icon: Gavel, color: "text-red-600 bg-red-50", text: "Prisão em flagrante, inquérito, audiência de custódia e defesa no processo." }];

const localInfo = {
  procon: {
    // procon.ba.gov.br saiu do ar; os postos do Procon-BA estão no portal da Secretaria de Justiça
    site: "ba.gov.br/justica"
  },
  tjba: {
    name: "Tribunal de Justiça da Bahia",
    site: "tjba.jus.br"
  },
  trt5: {
    name: "Tribunal Regional do Trabalho da 5ª Região",
    site: "trt5.jus.br"
  },
  defensoria: {
    site: "defensoria.ba.def.br"
  }
};

const stats = [
  { value: String(bahiaCities.length), label: "Cidades com página própria" },
  { value: "Online", label: "Atendimento em todo o estado" },
  { value: "TJBA", label: "Justiça estadual" },
  { value: "TRT5", label: "Justiça do Trabalho" }];

const AdvogadoBahia = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Advogado Bahia" }
  ];

  // Get Bahia FAQs
  const bahiaFaqs = programmaticFAQs
    .filter(faq => faq.id.startsWith('bahia-'))
    .slice(0, 6);

  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Riccio Advocacia",
    "description": "Atendimento jurídico online em toda a Bahia: Salvador, Feira de Santana, Vitória da Conquista e demais cidades baianas. Dr. Gilberto Riccio, OAB/BA 46.638.",
    "url": "https://riccio-advocacia.lovable.app/advogado-bahia",
    "telephone": "+55-71-99703-6269",
    "areaServed": {
      "@type": "State",
      "name": "Bahia",
      "containedInPlace": {
        "@type": "Country",
        "name": "Brasil"
      }
    },
    "serviceType": ["Direito do Consumidor", "Direito Trabalhista", "Direito Previdenciário", "Direito de Família", "Direito Civil", "Direito Criminal"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços Jurídicos na Bahia",
      "itemListElement": bahiaCities.map(city => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": `Advogado em ${city.name}`,
          "areaServed": city.name
        }
      }))
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": "https://riccio-advocacia.lovable.app/" },
      { "@type": "ListItem", "position": 2, "name": "Advogado Bahia", "item": "https://riccio-advocacia.lovable.app/advogado-bahia" }
    ]
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Advogado Online na Bahia | Salvador, Feira de Santana e Mais | Riccio</title>
        <meta name="description" content="Advogado online na Bahia: Salvador, Feira de Santana, Vitória da Conquista e todas as cidades baianas. Direito do consumidor, trabalhista, previdenciário. Atendimento online." />
        <meta name="keywords" content="advogado bahia, advogado salvador, advogado feira de santana, advogado online bahia, advogado consumidor bahia, advogado trabalhista bahia, advogado INSS bahia" />
        <link rel="canonical" href="https://riccio-advocacia.lovable.app/advogado-bahia" />
        
        <meta property="og:title" content="Advogado Online na Bahia | Riccio Advocacia" />
        <meta property="og:description" content="Atendimento jurídico online para toda a Bahia, com o Dr. Gilberto Riccio (OAB/BA 46.638)." />
        <meta property="og:url" content="https://riccio-advocacia.lovable.app/advogado-bahia" />
        <meta property="og:type" content="website" />
        
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar onCtaClick={() => window.location.href = '/'} />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 via-primary/5 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <BreadcrumbNav items={breadcrumbs} className="mb-8" />
            
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="secondary" className="mb-4">
                <MapPin className="w-4 h-4 mr-1" />
                Atendimento em toda a Bahia
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Advogado Online na{" "}
                <span className="text-primary">Bahia</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Atendimento online para Salvador, Feira de Santana, Vitória da Conquista e qualquer cidade
                baiana, com o Dr. Gilberto Riccio (OAB/BA 46.638).
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp (71) 99703-6269
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cities Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Atendimento online em toda a Bahia
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Escolha a sua cidade para ver onde o caso tramita e as áreas atendidas. Se a sua cidade não
              está na lista, o atendimento é o mesmo: online, pelo WhatsApp.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {bahiaCities.map((city) => (
                <Link 
                  key={city.slug}
                  to={`/advogado/${city.slug}`}
                  className="group"
                >
                  <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50 group-hover:bg-primary/5">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold group-hover:text-primary transition-colors">
                            {city.name}
                          </h3>
                        </div>
                        {city.slug === "salvador" && (
                          <Badge variant="secondary" className="text-xs">Capital</Badge>
                        )}
                      </div>
                      <div className="flex items-center mt-2 text-sm text-primary">
                        <span>Ver a página</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Legal Areas */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Áreas de Atuação na Bahia
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Atendimento online nas principais áreas do Direito, para qualquer cidade da Bahia.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {legalAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <Link key={area.id} to={`/advogado-${area.id}`}>
                    <Card className="h-full hover:shadow-lg transition-all hover:border-primary/50">
                      <CardHeader>
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${area.color}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardTitle className="mb-2">Advogado {area.name}</CardTitle>
                        <p className="text-sm text-muted-foreground mb-3">
                          {area.text}
                        </p>
                        <div className="flex items-center text-sm text-primary">
                          <span>Saiba mais</span>
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Local Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Informações Úteis - Bahia
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingBag className="w-5 h-5 text-primary" />
                    PROCON-BA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Site oficial:</strong> <a href={`https://www.${localInfo.procon.site}`} target="_blank" rel="noopener noreferrer" className="underline">{localInfo.procon.site}</a></p>
                  <p className="text-sm text-muted-foreground">Endereços, telefones e horários das unidades estão no site oficial.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-primary" />
                    TJBA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Nome:</strong> {localInfo.tjba.name}</p>
                  <p className="text-sm"><strong>Site oficial:</strong> <a href={`https://www.${localInfo.tjba.site}`} target="_blank" rel="noopener noreferrer" className="underline">{localInfo.tjba.site}</a></p>
                  <p className="text-sm text-muted-foreground">Juizados Especiais em todas as comarcas</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    TRT-5
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Nome:</strong> {localInfo.trt5.name}</p>
                  <p className="text-sm"><strong>Site oficial:</strong> <a href={`https://www.${localInfo.trt5.site}`} target="_blank" rel="noopener noreferrer" className="underline">{localInfo.trt5.site}</a></p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Defensoria Pública
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm"><strong>Site oficial:</strong> <a href={`https://www.${localInfo.defensoria.site}`} target="_blank" rel="noopener noreferrer" className="underline">{localInfo.defensoria.site}</a></p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-4">
              Perguntas Frequentes - Bahia
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Dúvidas comuns sobre questões jurídicas no estado da Bahia.
            </p>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {bahiaFaqs.map((faq) => (
                <Link key={faq.id} to={`/perguntas/${faq.slug}`}>
                  <Card className="h-full hover:shadow-md transition-shadow hover:border-primary/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 line-clamp-2">{faq.question}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{faq.answer.substring(0, 150)}...</p>
                      <div className="flex items-center mt-3 text-sm text-primary">
                        <span>Ler resposta completa</span>
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button asChild variant="outline">
                <Link to="/perguntas">
                  Ver todas as perguntas
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Precisa de Advogado na Bahia?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Fale com o Dr. Gilberto Riccio pelo WhatsApp. Conte o caso e receba a orientação sobre
              o caminho e os documentos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Falar com o advogado
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span>Atendimento online</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="w-5 h-5" />
                <span>Sigilo profissional</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5" />
                <span>OAB/BA 46.638</span>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-muted/50 border-t py-8">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Riccio Advocacia · Dr. Gilberto Riccio, OAB/BA 46.638</p>
            <div className="flex justify-center gap-4 mt-4">
              <Link to="/privacidade" className="hover:underline">Privacidade</Link>
              <Link to="/termos-de-uso" className="hover:underline">Termos</Link>
              <Link to="/sitemap" className="hover:underline">Sitemap</Link>
            </div>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
};

export default AdvogadoBahia;
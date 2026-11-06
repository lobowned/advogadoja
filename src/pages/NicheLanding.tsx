import { Link, useParams, useLocation, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { 
  Scale, Briefcase, Users, Shield, Gavel, ShoppingBag,
  CheckCircle, ArrowRight, MessageCircle, Clock, 
  Star, Phone, FileText 
} from "lucide-react";
import PageTransition from "@/components/motion/PageTransition";
import { BackButton } from "@/components/BackButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import BlogCard from "@/components/BlogCard";
import { niches, getArticlesByNiche, getNicheInfo } from "@/data/blog-articles";
import { LOCAL_PAGE_ROUTES, LOCAL_CITY_NAMES } from "@/data/local-page-keys";

interface NicheData {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroDescription: string;
  benefits: string[];
  commonCases: { title: string; description: string }[];
  /** Prazos e regras da lei (com a fonte) — nada de número de resultado ou de clientes. */
  stats: { value: string; label: string }[];
  /** Guia pilar da área (/guia/<slug>) */
  guideSlug?: string;
  /** Área das páginas locais (/advogado-<area>-<cidade>) */
  localNiche?: string;
  whatsappText: string;
}

// Conteúdo revisado em 06/11/2026: sem estatística inventada, sem "especialista",
// sem "consulta grátis" e sem promessa de resultado (Provimento OAB 205/2021).
const nicheData: Record<string, NicheData> = {
  consumidor: {
    id: "consumidor",
    slug: "advogado-consumidor",
    title: "Advogado do Consumidor Online",
    subtitle: "Atendimento online · OAB/BA 46.638",
    metaTitle: "Advogado do Consumidor Online | Riccio Advocacia",
    metaDescription:
      "Voo cancelado, nome negativado, plano de saúde que negou, fraude no Pix ou cobrança indevida: entenda seus direitos e fale com um advogado pelo WhatsApp.",
    keywords: ["advogado consumidor", "voo cancelado", "negativação indevida", "plano de saúde negou", "fraude bancária", "cobrança indevida", "direito do consumidor"],
    heroDescription:
      "Atuação em problemas de consumo: voo cancelado, negativação indevida, negativa de plano de saúde, fraudes bancárias e cobranças indevidas. Atendimento online, com análise dos documentos do seu caso.",
    benefits: [
      "Atendimento online pelo WhatsApp",
      "Análise dos documentos do seu caso",
      "Explicação clara de direitos, prazos e riscos",
      "Advogado inscrito na OAB/BA 46.638",
      "Sigilo profissional",
      "Honorários combinados por escrito",
    ],
    commonCases: [
      { title: "Voo Cancelado", description: "Cancelamento, atraso, overbooking e bagagem" },
      { title: "Negativação Indevida", description: "Nome no SPC/Serasa por dívida que não existe" },
      { title: "Plano de Saúde Negou", description: "Cirurgia, exame ou tratamento negado" },
      { title: "Fraude Bancária", description: "Pix, cartão clonado, empréstimo não contratado" },
    ],
    stats: [
      { value: "5 anos", label: "para pedir reparação por dano (CDC, art. 27)" },
      { value: "90 dias", label: "para reclamar de defeito em produto durável (CDC, art. 26)" },
      { value: "7 dias", label: "de arrependimento em compra fora da loja (CDC, art. 49)" },
    ],
    guideSlug: "consumidor",
    localNiche: "consumidor",
    whatsappText: "Olá, Dr. Gilberto. Tenho um problema de consumidor e gostaria de orientação.",
  },
  trabalhista: {
    id: "trabalhista",
    slug: "advogado-trabalhista",
    title: "Advogado Trabalhista Online",
    subtitle: "Atendimento online · OAB/BA 46.638",
    metaTitle: "Advogado Trabalhista Online | Riccio Advocacia",
    metaDescription:
      "Demissão, verbas rescisórias, horas extras, acidente de trabalho ou assédio moral: entenda seus direitos e fale com um advogado trabalhista pelo WhatsApp.",
    keywords: ["advogado trabalhista", "demissão sem justa causa", "horas extras", "verbas rescisórias", "direitos trabalhistas", "reclamação trabalhista"],
    heroDescription:
      "Atuação em demissão, verbas rescisórias, horas extras, acidente de trabalho, assédio moral e trabalho sem carteira assinada. Atendimento online, com conferência dos seus documentos e cálculos.",
    benefits: [
      "Atendimento online pelo WhatsApp",
      "Conferência do termo de rescisão e dos cálculos",
      "Explicação clara de direitos, prazos e riscos",
      "Advogado inscrito na OAB/BA 46.638",
      "Sigilo profissional",
      "Honorários combinados por escrito",
    ],
    commonCases: [
      { title: "Demissão sem Justa Causa", description: "Verbas rescisórias, FGTS, seguro-desemprego" },
      { title: "Horas Extras", description: "Cobrança de horas extras não pagas" },
      { title: "Acidente de Trabalho", description: "Estabilidade e indenização" },
      { title: "Assédio Moral", description: "Provas, rescisão indireta e indenização" },
    ],
    stats: [
      { value: "2 anos", label: "para entrar com a ação depois de sair do emprego (CF, art. 7º, XXIX)" },
      { value: "5 anos", label: "de direitos que podem ser cobrados (CF, art. 7º, XXIX)" },
      { value: "10 dias", label: "para a empresa pagar a rescisão (CLT, art. 477, § 6º)" },
    ],
    guideSlug: "trabalhista",
    localNiche: "trabalhista",
    whatsappText: "Olá, Dr. Gilberto. Preciso de orientação trabalhista.",
  },
  familia: {
    id: "familia",
    slug: "advogado-familia",
    title: "Advogado de Família Online",
    subtitle: "Atendimento online · OAB/BA 46.638",
    metaTitle: "Advogado de Família Online | Riccio Advocacia",
    metaDescription:
      "Divórcio, pensão alimentícia, guarda, união estável e inventário: entenda seus direitos e fale com um advogado de família pelo WhatsApp, com sigilo.",
    keywords: ["advogado família", "divórcio", "pensão alimentícia", "guarda de filhos", "união estável", "inventário"],
    heroDescription:
      "Atuação em divórcio, pensão alimentícia, guarda e convivência, união estável e inventário. Atendimento online e discreto, com orientação sobre acordo em cartório ou ação na Justiça.",
    benefits: [
      "Atendimento online pelo WhatsApp",
      "Sigilo profissional",
      "Orientação sobre acordo ou ação judicial",
      "Advogado inscrito na OAB/BA 46.638",
      "Divórcio e inventário em cartório quando a lei permite",
      "Honorários combinados por escrito",
    ],
    commonCases: [
      { title: "Divórcio Consensual", description: "Com acordo, em cartório ou na Justiça" },
      { title: "Pensão Alimentícia", description: "Fixação, revisão ou cobrança" },
      { title: "Guarda de Filhos", description: "Compartilhada ou unilateral, e convivência" },
      { title: "União Estável", description: "Reconhecimento ou dissolução" },
    ],
    stats: [
      { value: "Cartório", label: "divórcio com acordo pode ser feito por escritura (CPC, art. 733)" },
      { value: "3 meses", label: "prisão máxima por dívida de pensão (CPC, art. 528, § 3º)" },
      { value: "18 anos", label: "não encerra a pensão sozinho: precisa de decisão (Súmula 358 do STJ)" },
    ],
    guideSlug: "familia",
    localNiche: "familia",
    whatsappText: "Olá, Dr. Gilberto. Preciso de orientação em direito de família.",
  },
  civil: {
    id: "civil",
    slug: "advogado-civil",
    title: "Advogado Cível Online",
    subtitle: "Atendimento online · OAB/BA 46.638",
    metaTitle: "Advogado Cível Online | Riccio Advocacia",
    metaDescription:
      "Danos morais, contratos, cobrança, despejo e indenizações: entenda seus direitos e fale com um advogado pelo WhatsApp. Atendimento online.",
    keywords: ["advogado cível", "advogado civil", "danos morais", "contrato", "cobrança judicial", "despejo"],
    heroDescription:
      "Atuação em danos morais e materiais, contratos, cobranças, despejo e conflitos de vizinhança. Atendimento online, com análise de documentos e orientação sobre acordo ou ação.",
    benefits: [
      "Atendimento online pelo WhatsApp",
      "Análise de contratos e documentos",
      "Tentativa de acordo antes do processo, quando possível",
      "Advogado inscrito na OAB/BA 46.638",
      "Sigilo profissional",
      "Honorários combinados por escrito",
    ],
    commonCases: [
      { title: "Danos Morais", description: "Ofensas, constrangimento, negativação indevida" },
      { title: "Cobrança de Dívidas", description: "Cobrança e defesa em cobrança" },
      { title: "Contratos", description: "Análise, revisão e rescisão" },
      { title: "Despejo", description: "Falta de pagamento e fim do contrato" },
    ],
    stats: [
      { value: "3 anos", label: "para pedir indenização por dano (CC, art. 206, § 3º, V)" },
      { value: "40 SM", label: "limite de valor do Juizado Especial Cível (Lei 9.099, art. 3º)" },
      { value: "20 SM", label: "até esse valor, dá para ir ao Juizado sem advogado (Lei 9.099, art. 9º)" },
    ],
    whatsappText: "Olá, Dr. Gilberto. Preciso de orientação em uma questão cível.",
  },
  previdenciario: {
    id: "previdenciario",
    slug: "advogado-previdenciario",
    title: "Advogado Previdenciário Online",
    subtitle: "Atendimento online · OAB/BA 46.638",
    metaTitle: "Advogado Previdenciário Online | INSS | Riccio Advocacia",
    metaDescription:
      "Aposentadoria, auxílio-doença, BPC/LOAS, pensão por morte ou benefício negado pelo INSS: entenda seus direitos e fale com um advogado pelo WhatsApp.",
    keywords: ["advogado previdenciário", "advogado INSS", "aposentadoria", "auxílio-doença", "BPC LOAS", "benefício negado"],
    heroDescription:
      "Atuação em aposentadorias, auxílio-doença, BPC/LOAS, pensão por morte, revisões e benefícios negados pelo INSS. Atendimento online, com conferência do CNIS e dos prazos.",
    benefits: [
      "Atendimento online pelo WhatsApp",
      "Conferência do CNIS e do histórico de contribuições",
      "Recurso administrativo ou ação judicial, conforme o caso",
      "Advogado inscrito na OAB/BA 46.638",
      "Sigilo profissional",
      "Honorários combinados por escrito",
    ],
    commonCases: [
      { title: "Aposentadoria", description: "Por idade, tempo de contribuição ou especial" },
      { title: "Auxílio-Doença", description: "Negado ou cessado pelo INSS" },
      { title: "BPC/LOAS", description: "Benefício assistencial para idoso ou pessoa com deficiência" },
      { title: "Revisão de Benefício", description: "Erros de cálculo e tempo não contado" },
    ],
    stats: [
      { value: "30 dias", label: "para recorrer da decisão do INSS (Decreto 3.048/1999, art. 305)" },
      { value: "10 anos", label: "para pedir revisão do benefício (Lei 8.213/1991, art. 103)" },
      { value: "65 anos", label: "idade do BPC para a pessoa idosa (Lei 8.742/1993, art. 20)" },
    ],
    guideSlug: "previdenciario",
    localNiche: "previdenciario",
    whatsappText: "Olá, Dr. Gilberto. Preciso de orientação sobre benefício do INSS.",
  },
  penal: {
    id: "penal",
    slug: "advogado-criminal",
    title: "Advogado Criminal Online",
    subtitle: "Atendimento online · OAB/BA 46.638",
    metaTitle: "Advogado Criminal Online | Riccio Advocacia",
    metaDescription:
      "Prisão em flagrante, audiência de custódia, habeas corpus e defesa em inquérito ou processo: fale com um advogado criminal pelo WhatsApp, com sigilo.",
    keywords: ["advogado criminal", "advogado criminalista", "habeas corpus", "prisão em flagrante", "audiência de custódia", "defesa criminal"],
    heroDescription:
      "Atuação em prisão em flagrante, audiência de custódia, habeas corpus, inquérito policial e processo criminal, na defesa e na assistência à vítima. Atendimento online e sigiloso.",
    benefits: [
      "Atendimento online pelo WhatsApp",
      "Sigilo profissional",
      "Acompanhamento de inquérito e processo",
      "Advogado inscrito na OAB/BA 46.638",
      "Orientação sobre audiência de custódia e liberdade",
      "Honorários combinados por escrito",
    ],
    commonCases: [
      { title: "Prisão em Flagrante", description: "Audiência de custódia e liberdade" },
      { title: "Habeas Corpus", description: "Contra prisão ou ameaça ilegal" },
      { title: "Violência Doméstica", description: "Defesa ou proteção da vítima" },
      { title: "Crimes Patrimoniais", description: "Furto, roubo, estelionato" },
    ],
    stats: [
      { value: "24 horas", label: "prazo para a audiência de custódia após a prisão (CPP, art. 310)" },
      { value: "10 dias", label: "prazo da resposta à acusação (CPP, art. 396)" },
      { value: "Habeas corpus", label: "cabe contra prisão ou ameaça ilegal (CF, art. 5º, LXVIII)" },
    ],
    guideSlug: "criminal",
    localNiche: "criminal",
    whatsappText: "Olá, Dr. Gilberto. Preciso de orientação em uma questão criminal.",
  },
};

const nicheIcons: Record<string, React.ReactNode> = {
  consumidor: <ShoppingBag className="w-8 h-8" />,
  trabalhista: <Briefcase className="w-8 h-8" />,
  familia: <Users className="w-8 h-8" />,
  civil: <Scale className="w-8 h-8" />,
  previdenciario: <Shield className="w-8 h-8" />,
  penal: <Gavel className="w-8 h-8" />,
};

const NicheLanding = () => {
  // As rotas são fixas (/advogado-consumidor etc.), sem parâmetro: sem o pathname,
  // nicheSlug ficava vazio e as 6 páginas de área redirecionavam para a página inicial.
  const { nicheSlug: nicheParam } = useParams();
  const { pathname } = useLocation();
  const nicheSlug = nicheParam ?? pathname.replace(/^\/+|\/+$/g, "");

  // Map slug to niche ID
  const slugToId: Record<string, string> = {
    "advogado-consumidor": "consumidor",
    "advogado-trabalhista": "trabalhista",
    "advogado-familia": "familia",
    "advogado-civil": "civil",
    "advogado-previdenciario": "previdenciario",
    "advogado-criminal": "penal",
  };
  
  const nicheId = slugToId[nicheSlug || ""];
  const data = nicheId ? nicheData[nicheId] : null;
  const nicheInfo = nicheId ? getNicheInfo(nicheId) : null;
  const articles = nicheId ? getArticlesByNiche(nicheId).slice(0, 3) : [];
  
  if (!data || !nicheInfo) {
    return <Navigate to="/" replace />;
  }

  const whatsappUrl = `https://wa.me/5571997036269?text=${encodeURIComponent(data.whatsappText)}`;
  const localLinks = data.localNiche
    ? LOCAL_PAGE_ROUTES.filter((r) => r.nicheSlug === data.localNiche).map((r) => ({
        href: `/advogado-${r.key}`,
        city: LOCAL_CITY_NAMES[r.citySlug] ?? r.citySlug,
      }))
    : [];

  // Schema.org
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": `Riccio Advocacia · ${data.title}`,
    "description": data.heroDescription,
    "url": `https://riccio-advocacia.lovable.app/${data.slug}`,
    "areaServed": "Brasil",
    "serviceType": nicheInfo.name,
  };

  return (
    <PageTransition variant="slideUp">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="keywords" content={data.keywords.join(", ")} />
        <link rel="canonical" href={`https://riccio-advocacia.lovable.app/${data.slug}`} />
        
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={`https://riccio-advocacia.lovable.app/${data.slug}`} />
        
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
                <Scale className="w-6 h-6" />
                <span className="font-bold text-lg">Riccio Advocacia</span>
              </Link>
              <div className="flex items-center gap-2">
                <Button asChild variant="ghost" size="sm" className="hidden sm:flex">
                  <Link to="/artigos">Artigos</Link>
                </Button>
                <Button asChild size="sm">
                  <Link to="/">Falar Agora</Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <BackButton to="/" label="Voltar ao início" className="mb-6" />
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                  {nicheIcons[nicheId]}
                </div>
              </div>
              
              <Badge variant="outline" className="mb-4">
                {data.subtitle}
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {data.title}
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                {data.heroDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar com Advogado
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
                  <Link to={`/artigos/${nicheId}`}>
                    <FileText className="w-5 h-5 mr-2" />
                    Ler Artigos
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-8 border-b bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {data.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Como funciona o atendimento
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {data.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Cases */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
              Casos que Atendemos
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Atuamos em todas as questões de {nicheInfo.name}. Veja os casos mais comuns:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {data.commonCases.map((caseItem, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-2">{caseItem.title}</h3>
                    <p className="text-sm text-muted-foreground">{caseItem.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Articles */}
        {articles.length > 0 && (
          <section className="py-16">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Artigos sobre {nicheInfo.name}</h2>
                <Button asChild variant="ghost" size="sm">
                  <Link to={`/artigos/${nicheId}`}>
                    Ver todos
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <BlogCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Quer entender o seu caso?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Conte o que aconteceu pelo WhatsApp ou pelo chat. A primeira resposta indica quais
              documentos reunir e quais prazos observar em {nicheInfo.name}.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Iniciar Conversa
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Guia da área e páginas por cidade (links internos) */}
        {(data.guideSlug || localLinks.length > 0) && (
          <section className="py-16 border-b">
            <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-8">
              {data.guideSlug && (
                <div>
                  <h2 className="text-xl font-bold mb-3">Guia completo</h2>
                  <p className="text-muted-foreground mb-4">
                    Direitos, prazos, documentos e perguntas frequentes de {nicheInfo.name}, explicados em linguagem simples.
                  </p>
                  <Link to={`/guia/${data.guideSlug}`} className="inline-flex items-center gap-1 font-semibold text-primary hover:underline">
                    Ler o guia de {nicheInfo.name}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              )}
              {localLinks.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-3">Atendimento na sua cidade</h2>
                  <ul className="grid grid-cols-2 gap-2 text-sm">
                    {localLinks.map((l) => (
                      <li key={l.href}>
                        <Link to={l.href} className="hover:underline">{l.city}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </section>
        )}

        {/* Other Niches */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold text-center mb-8">
              Outras Áreas de Atuação
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {niches
                .filter(n => n.id !== nicheId)
                .map((niche) => (
                  <Link 
                    key={niche.id} 
                    to={`/${Object.entries(slugToId).find(([_, v]) => v === niche.id)?.[0] || ""}`}
                  >
                    <Badge 
                      variant="outline" 
                      className="cursor-pointer hover:bg-muted transition-colors py-2 px-4"
                    >
                      {niche.name}
                    </Badge>
                  </Link>
                ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Riccio Advocacia | OAB/BA 46.638</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default NicheLanding;
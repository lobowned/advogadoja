import { Link, useParams, Navigate } from "react-router-dom";
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
  stats: { value: string; label: string }[];
}

const nicheData: Record<string, NicheData> = {
  consumidor: {
    id: "consumidor",
    slug: "advogado-consumidor",
    title: "Advogado do Consumidor Online",
    subtitle: "Especialista em Direito do Consumidor",
    metaTitle: "Advogado do Consumidor Online | Voo Cancelado, Negativação, Plano de Saúde - Consulta Grátis",
    metaDescription: "Fale com advogado do consumidor online. Voo cancelado, nome negativado, plano de saúde negou, fraude bancária. Indenização de até R$ 15.000. Consulta gratuita.",
    keywords: ["advogado consumidor", "voo cancelado indenização", "negativação indevida", "plano de saúde negou", "fraude bancária", "cobrança indevida", "devolução em dobro", "direito do consumidor"],
    heroDescription: "Especialista em voos cancelados, negativação indevida, planos de saúde e fraudes bancárias. Indenização de até R$ 15.000. Atendimento imediato.",
    benefits: [
      "Indenização de até R$ 15.000",
      "Consulta gratuita imediata",
      "Devolução em dobro garantida",
      "Advogados especializados OAB",
      "Sem custo inicial",
      "Processo rápido e eficiente"
    ],
    commonCases: [
      { title: "Voo Cancelado", description: "Indenização por cancelamento, atraso ou overbooking" },
      { title: "Negativação Indevida", description: "Nome sujo no SPC/Serasa sem dever" },
      { title: "Plano de Saúde Negou", description: "Cirurgia, exame ou tratamento negado" },
      { title: "Fraude Bancária", description: "PIX, cartão clonado, empréstimo não contratado" },
    ],
    stats: [
      { value: "R$ 5M+", label: "Indenizações obtidas" },
      { value: "8.000+", label: "Consumidores atendidos" },
      { value: "97%", label: "Taxa de sucesso" },
    ]
  },
  trabalhista: {
    id: "trabalhista",
    slug: "advogado-trabalhista",
    title: "Advogado Trabalhista Online",
    subtitle: "Especialista em Direito do Trabalho",
    metaTitle: "Advogado Trabalhista Online | Consulta Grátis - Demissão, Horas Extras",
    metaDescription: "Fale agora com advogado trabalhista online. Demissão sem justa causa, horas extras, acidente de trabalho, assédio moral. Consulta gratuita e imediata.",
    keywords: ["advogado trabalhista", "demissão sem justa causa", "horas extras", "advogado do trabalho", "direitos trabalhistas", "reclamação trabalhista"],
    heroDescription: "Especialista em demissão, horas extras, acidente de trabalho, assédio moral e verbas rescisórias. Atendimento imediato e gratuito.",
    benefits: [
      "Análise gratuita do seu caso",
      "Cálculo de verbas rescisórias",
      "Atendimento imediato por chat",
      "Advogados especializados OAB",
      "Honorários sob medida",
      "Acompanhamento do processo"
    ],
    commonCases: [
      { title: "Demissão sem Justa Causa", description: "Verbas rescisórias, FGTS, seguro-desemprego" },
      { title: "Horas Extras", description: "Cobrança de horas extras não pagas" },
      { title: "Acidente de Trabalho", description: "Indenização e estabilidade" },
      { title: "Assédio Moral", description: "Indenização por danos morais" },
    ],
    stats: [
      { value: "5.000+", label: "Casos atendidos" },
      { value: "95%", label: "Taxa de sucesso" },
      { value: "24h", label: "Resposta inicial" },
    ]
  },
  familia: {
    id: "familia",
    slug: "advogado-familia",
    title: "Advogado de Família Online",
    subtitle: "Especialista em Direito de Família",
    metaTitle: "Advogado de Família Online | Divórcio, Pensão, Guarda - Consulta Grátis",
    metaDescription: "Fale com advogado de família online. Divórcio, pensão alimentícia, guarda de filhos, inventário. Atendimento gratuito e confidencial.",
    keywords: ["advogado família", "divórcio", "pensão alimentícia", "guarda de filhos", "advogado divórcio", "direito família"],
    heroDescription: "Especialista em divórcio, pensão alimentícia, guarda de filhos e questões familiares. Atendimento discreto e confidencial.",
    benefits: [
      "Consulta inicial gratuita",
      "Sigilo absoluto garantido",
      "Atendimento humanizado",
      "Advogados especializados OAB",
      "Divórcio consensual rápido",
      "Mediação familiar"
    ],
    commonCases: [
      { title: "Divórcio Consensual", description: "Rápido, simples e econômico" },
      { title: "Pensão Alimentícia", description: "Fixação, revisão ou cobrança" },
      { title: "Guarda de Filhos", description: "Compartilhada ou unilateral" },
      { title: "União Estável", description: "Reconhecimento ou dissolução" },
    ],
    stats: [
      { value: "3.000+", label: "Famílias atendidas" },
      { value: "98%", label: "Satisfação" },
      { value: "30 dias", label: "Divórcio em cartório" },
    ]
  },
  civil: {
    id: "civil",
    slug: "advogado-civil",
    title: "Advogado Civil Online",
    subtitle: "Especialista em Direito Civil",
    metaTitle: "Advogado Civil Online | Danos Morais, Contratos, Cobrança - Consulta Grátis",
    metaDescription: "Fale com advogado civil online. Danos morais, contratos, cobrança de dívidas, despejo, indenizações. Atendimento gratuito.",
    keywords: ["advogado civil", "danos morais", "advogado contrato", "cobrança judicial", "ação indenização", "direito civil"],
    heroDescription: "Especialista em danos morais, contratos, cobranças e relações civis. Resolva seu problema jurídico agora.",
    benefits: [
      "Análise gratuita do caso",
      "Cobrança judicial eficiente",
      "Indenizações justas",
      "Advogados especializados OAB",
      "Negociação e acordo",
      "Acompanhamento completo"
    ],
    commonCases: [
      { title: "Danos Morais", description: "Ofensas, negativação indevida" },
      { title: "Cobrança de Dívidas", description: "Recuperação de valores" },
      { title: "Contratos", description: "Análise e rescisão" },
      { title: "Despejo", description: "Ação de despejo de imóvel" },
    ],
    stats: [
      { value: "4.000+", label: "Casos resolvidos" },
      { value: "R$ 2M+", label: "Recuperados" },
      { value: "48h", label: "Primeira análise" },
    ]
  },
  previdenciario: {
    id: "previdenciario",
    slug: "advogado-previdenciario",
    title: "Advogado Previdenciário Online",
    subtitle: "Especialista em INSS",
    metaTitle: "Advogado Previdenciário Online | INSS, Aposentadoria, Auxílio - Consulta Grátis",
    metaDescription: "Fale com advogado previdenciário online. Aposentadoria, auxílio-doença, BPC/LOAS, revisão de benefício. INSS negou? Podemos ajudar.",
    keywords: ["advogado previdenciário", "advogado INSS", "aposentadoria", "auxílio-doença", "BPC LOAS", "benefício negado"],
    heroDescription: "Especialista em INSS: aposentadoria, auxílio-doença, BPC/LOAS. INSS negou seu benefício? Podemos reverter.",
    benefits: [
      "Análise gratuita do CNIS",
      "Recurso contra negativa",
      "Cálculo do melhor benefício",
      "Advogados especializados OAB",
      "Honorários só no êxito",
      "Acompanhamento do pedido"
    ],
    commonCases: [
      { title: "Aposentadoria", description: "Por idade, tempo, especial" },
      { title: "Auxílio-Doença", description: "Negado ou cessado pelo INSS" },
      { title: "BPC/LOAS", description: "Benefício assistencial" },
      { title: "Revisão de Benefício", description: "Aumento do valor" },
    ],
    stats: [
      { value: "6.000+", label: "Benefícios conquistados" },
      { value: "90%", label: "Taxa de aprovação" },
      { value: "0", label: "Custo inicial" },
    ]
  },
  penal: {
    id: "penal",
    slug: "advogado-criminal",
    title: "Advogado Criminal Online",
    subtitle: "Especialista em Direito Penal",
    metaTitle: "Advogado Criminal Online | Defesa, Habeas Corpus - Atendimento 24h",
    metaDescription: "Advogado criminal online para defesa em processos criminais, habeas corpus, prisão em flagrante. Atendimento urgente e sigiloso.",
    keywords: ["advogado criminal", "advogado penal", "habeas corpus", "defesa criminal", "prisão", "advogado criminalista"],
    heroDescription: "Defesa criminal especializada. Prisão em flagrante, habeas corpus, processos criminais. Atendimento urgente.",
    benefits: [
      "Atendimento urgente 24h",
      "Habeas corpus imediato",
      "Sigilo absoluto",
      "Advogados criminalistas OAB",
      "Defesa estratégica",
      "Acompanhamento em delegacia"
    ],
    commonCases: [
      { title: "Prisão em Flagrante", description: "Defesa e liberdade" },
      { title: "Habeas Corpus", description: "Pedido de liberdade" },
      { title: "Violência Doméstica", description: "Defesa ou proteção" },
      { title: "Crimes Patrimoniais", description: "Furto, roubo, estelionato" },
    ],
    stats: [
      { value: "1.000+", label: "Defesas realizadas" },
      { value: "85%", label: "Liberdades obtidas" },
      { value: "1h", label: "Resposta urgente" },
    ]
  }
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
  const { nicheSlug } = useParams();
  
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

  // Schema.org
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": data.title,
    "description": data.heroDescription,
    "url": `https://advogadoja.lovable.app/${data.slug}`,
    "areaServed": "Brasil",
    "serviceType": nicheInfo.name,
  };

  return (
    <PageTransition variant="slideUp">
      <Helmet>
        <title>{data.metaTitle}</title>
        <meta name="description" content={data.metaDescription} />
        <meta name="keywords" content={data.keywords.join(", ")} />
        <link rel="canonical" href={`https://advogadoja.lovable.app/${data.slug}`} />
        
        <meta property="og:title" content={data.metaTitle} />
        <meta property="og:description" content={data.metaDescription} />
        <meta property="og:url" content={`https://advogadoja.lovable.app/${data.slug}`} />
        
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
                <span className="font-bold text-lg">Advogado Já</span>
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
                  <Link to="/">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Falar com Advogado Agora
                  </Link>
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
              Por que escolher nosso escritório?
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
              Pronto para resolver seu problema?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Fale agora com um advogado especialista em {nicheInfo.name}. 
              Consulta inicial gratuita e sem compromisso.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link to="/">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Iniciar Conversa
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <a href="https://wa.me/5571997092633" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>

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
            <p>© 2025 Advogado Já | OAB/BA 46.638</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
};

export default NicheLanding;
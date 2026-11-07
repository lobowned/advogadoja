import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, ShieldCheck, Laptop, FileText, ArrowRight, BadgeCheck } from "lucide-react";
import PageTransition from "@/components/motion/PageTransition";
import Navbar from "@/components/Navbar";
import BreadcrumbNav from "@/components/BreadcrumbNav";
import SiteLinks from "@/components/SiteLinks";
import { Button } from "@/components/ui/button";
import foto from "@/assets/dr-gilberto-riccio.jpg";
import { AUTHOR_PATH, AUTHOR_URL, AUTHOR_OAB, OFFICE_CNPJ, authorSchema } from "@/data/author";

/**
 * Página do advogado responsável (autoria e confiança para o Google).
 * Só fatos verificáveis: inscrição na OAB, CNPJ, forma de atendimento. Nada de número,
 * resultado, depoimento ou valor (Provimento OAB 205/2021).
 */

const WHATSAPP_URL = `https://wa.me/5571997036269?text=${encodeURIComponent("Olá, vim pela página do Dr. Gilberto no site e quero falar sobre um caso.")}`;

const AREAS = [
  { href: "/advogado-trabalhista", nome: "Trabalhista", texto: "Rescisão, horas extras, FGTS, vínculo sem carteira e acidente de trabalho." },
  { href: "/advogado-previdenciario", nome: "Previdenciário (INSS)", texto: "Aposentadoria, auxílio por incapacidade, BPC/LOAS, pensão por morte e revisão." },
  { href: "/advogado-familia", nome: "Família", texto: "Divórcio, pensão alimentícia, guarda, união estável e inventário." },
  { href: "/advogado-consumidor", nome: "Consumidor", texto: "Cobrança indevida, nome negativado, produto com defeito, voo e plano de saúde." },
  { href: "/advogado-civil", nome: "Cível", texto: "Contratos, cobranças, indenizações, aluguel e imóveis." },
  { href: "/advogado-criminal", nome: "Criminal", texto: "Prisão em flagrante, inquérito, audiência de custódia e defesa no processo." },
];

const PASSOS = [
  "Você conta o caso pelo WhatsApp (71) 99703-6269.",
  "Envia os documentos por foto ou PDF, pelo próprio WhatsApp.",
  "Recebe a explicação do caminho possível, dos prazos e do que ainda falta reunir.",
  "Se decidir seguir, os honorários e a forma de pagamento são combinados por escrito, em contrato, antes de qualquer trabalho.",
  "O processo corre nos sistemas eletrônicos dos tribunais, e as novidades importantes chegam a você pelo WhatsApp.",
];

const PERGUNTAS = [
  { question: "Como confirmo que o Dr. Gilberto Riccio é advogado?", answer: "Pelo Cadastro Nacional dos Advogados (CNA), mantido pelo Conselho Federal da OAB, em cna.oab.org.br. Basta pesquisar pelo nome Gilberto Riccio ou pela inscrição 46.638 da seccional da Bahia." },
  { question: "O escritório atende presencialmente?", answer: "Não. A Riccio Advocacia é um escritório digital: o atendimento é feito pelo WhatsApp, a partir de Salvador, para pessoas de toda a Bahia." },
  { question: "Quem cuida do meu caso?", answer: "O próprio Dr. Gilberto Riccio, que conduz pessoalmente os casos do escritório, do primeiro contato até o fim." },
  { question: "Como são combinados os honorários?", answer: "Antes de qualquer trabalho, o valor e a forma de pagamento são apresentados por escrito, em contrato. O site não divulga valores." },
  { question: "Os textos do site substituem uma consulta?", answer: "Não. Os guias e as respostas explicam direitos em linguagem simples, com base na lei e em fontes oficiais, mas cada caso depende dos documentos e dos fatos." },
];

const AdvogadoGilbertoRiccio = () => {
  const breadcrumbs = [
    { label: "Início", href: "/" },
    { label: "Dr. Gilberto Riccio" },
  ];

  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": AUTHOR_URL,
    url: AUTHOR_URL,
    name: "Dr. Gilberto Riccio, advogado OAB/BA 46.638",
    inLanguage: "pt-BR",
    mainEntity: {
      ...authorSchema,
      image: `https://riccioadvocacia.online${foto}`,
      description:
        "Advogado inscrito na OAB/BA sob o nº 46.638, responsável pela Riccio Advocacia, escritório digital com atendimento online a partir de Salvador.",
      knowsAbout: ["Direito Trabalhista", "Direito Previdenciário", "Direito de Família", "Direito do Consumidor", "Direito Civil", "Direito Penal"],
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: "https://riccioadvocacia.online/" },
      { "@type": "ListItem", position: 2, name: "Dr. Gilberto Riccio", item: AUTHOR_URL },
    ],
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Dr. Gilberto Riccio, advogado OAB/BA 46.638 | Riccio Advocacia</title>
        <meta name="description" content="Gilberto Riccio é advogado inscrito na OAB/BA sob o nº 46.638 e responsável pela Riccio Advocacia, escritório digital com atendimento online a partir de Salvador." />
        <link rel="canonical" href={AUTHOR_URL} />
        <meta property="og:title" content="Dr. Gilberto Riccio, advogado OAB/BA 46.638" />
        <meta property="og:description" content="Advogado responsável pela Riccio Advocacia, escritório digital com atendimento online a partir de Salvador." />
        <meta property="og:url" content={AUTHOR_URL} />
        <meta property="og:type" content="profile" />
        <script type="application/ld+json">{JSON.stringify(profileSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <Navbar onCtaClick={() => window.open(WHATSAPP_URL, "_blank")} />

      <main className="min-h-screen bg-background">
        <section className="bg-gradient-to-b from-primary/10 via-primary/5 to-background py-12 md:py-20">
          <div className="container mx-auto px-4">
            <BreadcrumbNav items={breadcrumbs} className="mb-8" />
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
              <img
                src={foto}
                alt="Dr. Gilberto Riccio, advogado"
                width={176}
                height={176}
                loading="eager"
                className="h-44 w-44 shrink-0 rounded-full object-cover border-4 border-background shadow-lg"
              />
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3">Dr. Gilberto Riccio</h1>
                <p className="text-lg text-foreground/80 mb-4">
                  Advogado, {AUTHOR_OAB} · Riccio Advocacia · escritório digital em Salvador
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Gilberto Riccio é advogado inscrito na Ordem dos Advogados do Brasil, seccional da Bahia, sob o
                  nº 46.638. É o responsável pela Riccio Advocacia (CNPJ {OFFICE_CNPJ}) e conduz pessoalmente os
                  casos do escritório, do primeiro contato até o fim.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button asChild size="lg">
                    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" /> Falar pelo WhatsApp
                    </a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <a href="https://cna.oab.org.br/" target="_blank" rel="noopener noreferrer">
                      <BadgeCheck className="w-5 h-5 mr-2" /> Conferir inscrição na OAB
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <Laptop className="w-6 h-6 text-primary" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Como funciona o atendimento</h2>
            </div>
            <p className="text-foreground/80 mb-6">
              A Riccio Advocacia não tem endereço para atendimento presencial: é um escritório digital. Tudo é feito
              online, a partir de Salvador, para pessoas de toda a Bahia.
            </p>
            <ol className="space-y-3">
              {PASSOS.map((passo, i) => (
                <li key={passo} className="flex gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold">
                    {i + 1}
                  </span>
                  <span className="text-foreground/85 pt-0.5">{passo}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-primary" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Áreas de atuação</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {AREAS.map((a) => (
                <Link
                  key={a.href}
                  to={a.href}
                  className="group rounded-xl border border-border bg-background p-5 hover:border-primary transition-colors"
                >
                  <p className="font-semibold text-foreground mb-1 flex items-center justify-between">
                    {a.nome}
                    <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true" />
                  </p>
                  <p className="text-sm text-foreground/75">{a.texto}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-primary" aria-hidden="true" />
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Sobre os textos do site</h2>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Os guias, artigos e respostas publicados aqui são de responsabilidade do Dr. Gilberto Riccio. Explicam
              direitos em linguagem simples, com base na lei e em fontes oficiais, trazem a data da última atualização e
              não substituem a análise de um caso concreto.
            </p>
            <p className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-primary">
              <Link to="/artigos" className="hover:underline underline-offset-4">Artigos</Link>
              <Link to="/perguntas" className="hover:underline underline-offset-4">Perguntas e respostas</Link>
              <Link to="/calculadoras" className="hover:underline underline-offset-4">Calculadoras</Link>
              <Link to="/advogado-bahia" className="hover:underline underline-offset-4">Atendimento na Bahia</Link>
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-muted/40">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">Perguntas frequentes</h2>
            <div className="space-y-5">
              {PERGUNTAS.map((p) => (
                <div key={p.question}>
                  <h3 className="font-semibold text-foreground">{p.question}</h3>
                  <p className="text-foreground/80 mt-1">{p.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t py-10">
          <div className="container mx-auto px-4">
            <SiteLinks />
            <p className="mt-8 text-center text-sm text-muted-foreground">
              © {new Date().getFullYear()} Riccio Advocacia · Dr. Gilberto Riccio, {AUTHOR_OAB} ·{" "}
              <Link to={AUTHOR_PATH} className="hover:underline">Sobre o advogado</Link>
            </p>
          </div>
        </footer>
      </main>
    </PageTransition>
  );
};

export default AdvogadoGilbertoRiccio;

import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/motion/PageTransition";
import LawyerChatSection from "@/components/LawyerChatSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import NotFound from "@/pages/NotFound";
import { getGuia, ancora, contarPalavras } from "@/data/guias";
import { blogArticles } from "@/data/blog-articles";
import { trackWhatsAppConversion } from "@/lib/trackWhatsApp";
import GuiaFooter, { waLink } from "./GuiaFooter";

const SITE = "https://advogadoja.lovable.app";

const tituloDoArtigo = (url: string) => {
  const [, , nicheId, slug] = url.split("/");
  return blogArticles.find((a) => a.nicheId === nicheId && a.slug === slug)?.title;
};

const GuiaPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const guia = getGuia(slug);
  if (!guia) return <NotFound />;

  const canonical = `${SITE}/guia/${guia.slug}`;
  const artigos = guia.artigosRelacionados
    .map((href) => ({ href, titulo: tituloDoArtigo(href) }))
    .filter((a): a is { href: string; titulo: string } => Boolean(a.titulo));

  const autor = {
    "@type": "Person",
    name: "Gilberto Riccio",
    jobTitle: "Advogado",
    identifier: "OAB/BA 46.638",
    url: `${SITE}/riccioadvocacia`,
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guia.h1,
    description: guia.metaDescription,
    inLanguage: "pt-BR",
    mainEntityOfPage: canonical,
    url: canonical,
    dateModified: guia.atualizadoEm,
    datePublished: guia.atualizadoEm,
    wordCount: contarPalavras(guia),
    articleSection: guia.area,
    author: autor,
    publisher: { "@type": "LegalService", name: "Riccio Advocacia", url: SITE },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guia.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Início", item: SITE },
      { "@type": "ListItem", position: 2, name: "Guias", item: `${SITE}/guias` },
      { "@type": "ListItem", position: 3, name: guia.area, item: canonical },
    ],
  };

  const whatsapp = waLink(guia.whatsappText);

  return (
    <PageTransition>
      <Helmet>
        <title>{guia.title}</title>
        <meta name="description" content={guia.metaDescription} />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={guia.title} />
        <meta property="og:description" content={guia.metaDescription} />
        <meta property="og:url" content={canonical} />
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
        <script type="application/ld+json">{JSON.stringify(faqLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />

        {/* Cabeçalho editorial */}
        <header className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-14 sm:py-20 max-w-4xl">
            <nav aria-label="Trilha" className="text-xs text-primary-foreground/70 mb-6">
              <Link to="/" className="hover:text-accent">Início</Link>
              <span className="mx-2">/</span>
              <Link to="/guias" className="hover:text-accent">Guias</Link>
              <span className="mx-2">/</span>
              <span>{guia.area}</span>
            </nav>
            <p className="font-roman tracking-[0.25em] uppercase text-xs text-accent mb-4">Guia · {guia.area}</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">{guia.h1}</h1>
            <div className="h-px w-24 bg-accent my-6" />
            <p className="font-sans text-base sm:text-lg text-primary-foreground/85 leading-relaxed">{guia.intro}</p>
            <p className="mt-6 text-sm text-primary-foreground/70">
              Por Dr. Gilberto Riccio, OAB/BA 46.638 · Atualizado em{" "}
              {new Date(guia.atualizadoEm + "T12:00:00").toLocaleDateString("pt-BR")}
            </p>
          </div>
        </header>

        <div className="container mx-auto px-4 py-10 sm:py-14 max-w-6xl grid lg:grid-cols-[260px_1fr] gap-10">
          {/* Sumário */}
          <aside className="lg:sticky lg:top-24 self-start">
            <nav aria-label="Sumário" className="border border-border rounded p-5 bg-card">
              <p className="font-roman text-xs tracking-[0.2em] uppercase mb-3 text-foreground">Sumário</p>
              <ol className="space-y-2 text-sm list-decimal list-inside text-muted-foreground">
                {guia.secoes.map((s) => (
                  <li key={s.h2}>
                    <a href={`#${ancora(s.h2)}`} className="hover:text-foreground hover:underline">{s.h2}</a>
                  </li>
                ))}
                <li><a href="#perguntas-frequentes" className="hover:text-foreground hover:underline">Perguntas frequentes</a></li>
              </ol>
            </nav>
          </aside>

          <main className="min-w-0">
            <article className="font-sans text-[17px] leading-[1.8] text-foreground">
              {guia.secoes.map((s, i) => (
                <section key={s.h2} id={ancora(s.h2)} className="scroll-mt-24 mb-12">
                  <h2 className="font-display text-3xl sm:text-4xl leading-snug mb-4">
                    <span className="font-roman text-base text-muted-foreground mr-3 align-middle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {s.h2}
                  </h2>
                  {s.paragrafos.map((p, j) => (
                    <p key={j} className="mb-4">{p}</p>
                  ))}

                  {i === 2 && (
                    <div className="my-8 border-l-4 border-accent bg-card p-5 rounded-r">
                      <p className="font-display text-xl mb-2">Quer que alguém olhe o seu caso?</p>
                      <p className="text-base text-muted-foreground mb-4">
                        Conte o que aconteceu no chat ou pelo WhatsApp. A primeira análise indica quais direitos se aplicam e quais documentos faltam.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <a href="#chat" className="inline-flex items-center min-h-[44px] px-5 rounded bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90">
                          Conversar no chat
                        </a>
                        <a href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppConversion}
                          className="inline-flex items-center min-h-[44px] px-5 rounded border border-foreground text-foreground text-sm font-semibold hover:bg-foreground hover:text-background">
                          Falar no WhatsApp
                        </a>
                      </div>
                    </div>
                  )}
                </section>
              ))}

              <section id="perguntas-frequentes" className="scroll-mt-24 mb-12">
                <h2 className="font-display text-3xl sm:text-4xl leading-snug mb-4">Perguntas frequentes</h2>
                <Accordion type="multiple" className="border-t border-border">
                  {guia.faq.map((f, i) => (
                    <AccordionItem key={i} value={`faq-${i}`}>
                      <AccordionTrigger className="text-left font-sans text-base font-semibold">{f.q}</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed text-foreground">{f.a}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            </article>

            {/* Links do cluster */}
            <section className="grid md:grid-cols-2 gap-6 mb-12">
              {artigos.length > 0 && (
                <div className="border border-border rounded p-6 bg-card">
                  <h2 className="font-display text-2xl mb-4">Artigos sobre {guia.area.toLowerCase()}</h2>
                  <ul className="space-y-2 text-sm">
                    {artigos.map((a) => (
                      <li key={a.href}>
                        <Link to={a.href} className="text-foreground underline-offset-4 hover:underline">{a.titulo}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className="border border-border rounded p-6 bg-card">
                <h2 className="font-display text-2xl mb-4">Atendimento na sua cidade</h2>
                <ul className="space-y-2 text-sm">
                  {guia.paginasLocais.map((p) => (
                    <li key={p.href}>
                      <Link to={p.href} className="text-foreground underline-offset-4 hover:underline">{p.label}</Link>
                    </li>
                  ))}
                  <li><Link to="/guias" className="text-foreground underline-offset-4 hover:underline">Todos os guias</Link></li>
                </ul>
              </div>
            </section>

            <p className="text-xs text-muted-foreground mb-4">
              Este guia tem caráter informativo e não constitui consulta jurídica. Cada situação depende de documentos e fatos próprios.
            </p>
          </main>
        </div>

        <section id="chat" className="scroll-mt-20">
          <LawyerChatSection area={guia.chatArea} />
        </section>

        <GuiaFooter />
      </div>
    </PageTransition>
  );
};

export default GuiaPage;

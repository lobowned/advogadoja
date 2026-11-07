import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/motion/PageTransition";
import { guias } from "@/data/guias";
import GuiaFooter from "./GuiaFooter";

const SITE = "https://riccioadvocacia.online";

const GuiasIndex = () => {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Guias jurídicos — Riccio Advocacia",
    itemListElement: guias.map((g, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${SITE}/guia/${g.slug}`,
      name: g.h1,
    })),
  };

  return (
    <PageTransition>
      <Helmet>
        <title>Guias Jurídicos por Área | Riccio Advocacia</title>
        <meta
          name="description"
          content="Guias completos e gratuitos sobre direitos trabalhistas, INSS, família, consumidor e defesa criminal, com base legal e perguntas frequentes. OAB/BA 46.638."
        />
        <link rel="canonical" href={`${SITE}/guias`} />
        <script type="application/ld+json">{JSON.stringify(itemList)}</script>
      </Helmet>

      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />

        <header className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 py-14 sm:py-20 max-w-4xl">
            <p className="font-roman tracking-[0.25em] uppercase text-xs text-accent mb-4">Biblioteca</p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight">Guias jurídicos por área</h1>
            <div className="h-px w-24 bg-accent my-6" />
            <p className="font-sans text-base sm:text-lg text-primary-foreground/85 leading-relaxed">
              Explicações completas, em linguagem direta, sobre os temas que mais chegam ao escritório. Cada guia traz a base legal, os prazos e as perguntas que as pessoas mais fazem.
            </p>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12 max-w-5xl">
          <ul className="grid sm:grid-cols-2 gap-6">
            {guias.map((g) => (
              <li key={g.slug}>
                <Link
                  to={`/guia/${g.slug}`}
                  className="block h-full border border-border rounded p-6 bg-card hover:shadow-elegant transition-shadow"
                >
                  <p className="font-roman text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">{g.area}</p>
                  <h2 className="font-display text-2xl leading-snug mb-3">{g.h1}</h2>
                  <p className="font-sans text-sm text-muted-foreground leading-relaxed">{g.metaDescription}</p>
                  <span className="inline-block mt-4 text-sm font-semibold underline underline-offset-4">Ler o guia</span>
                </Link>
              </li>
            ))}
          </ul>
        </main>

        <GuiaFooter />
      </div>
    </PageTransition>
  );
};

export default GuiasIndex;

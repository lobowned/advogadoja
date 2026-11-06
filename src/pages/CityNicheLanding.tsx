import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { MessageCircle, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/motion/PageTransition";
import {
  getLocalPage, type LocalPageContent, LOCAL_PAGE_ROUTES, LOCAL_CITY_NAMES, LOCAL_NICHE_NAMES} from "@/data/local-pages";

const WHATSAPP_NUMBER = "5571997036269";

interface CityNicheLandingProps {
  nicheSlug?: string;
  citySlug?: string;
}

/**
 * Página "advogado <área> em <cidade>". Só existe para as combinações com texto próprio em
 * local-pages.ts (as 43 rotas de LOCAL_PAGE_ROUTES). Sem texto próprio, leva à página da cidade:
 * o modelo genérico antigo prometia consulta gratuita e falava em equipe de especialistas.
 */
const CityNicheLanding = (props: CityNicheLandingProps = {}) => {
  const params = useParams<{ nicheSlug: string; citySlug: string }>();
  const nicheSlug = props.nicheSlug ?? params.nicheSlug;
  const citySlug = props.citySlug ?? params.citySlug;
  const local = nicheSlug && citySlug ? getLocalPage(nicheSlug, citySlug) : undefined;

  if (!nicheSlug || !citySlug || !local) {
    return <Navigate to={citySlug ? `/advogado/${citySlug}` : "/"} replace />;
  }

  return (
    <LocalNichePage
      local={local}
      areaName={LOCAL_NICHE_NAMES[nicheSlug] ?? nicheSlug}
      areaSlug={nicheSlug}
      cityName={LOCAL_CITY_NAMES[citySlug] ?? citySlug}
      citySlug={citySlug}
    />
  );
};

function LocalNichePage({
  local, areaName, areaSlug, cityName, citySlug}: { local: LocalPageContent; areaName: string; areaSlug: string; cityName: string; citySlug: string }) {
  const base = "https://riccio-advocacia.lovable.app";
  const canonicalUrl = `${base}/advogado-${areaSlug}-${citySlug}`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(local.whatsappText)}`;

  const legalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Riccio Advocacia",
    "description": local.metaDescription,
    "url": canonicalUrl,
    "telephone": "+55-71-99703-6269",
    "serviceType": `Direito ${areaName}`,
    "areaServed": {
      "@type": "City",
      "name": cityName,
      "containedInPlace": { "@type": "State", "name": "Bahia" }},
    "employee": {
      "@type": "Person",
      "name": "Gilberto Riccio",
      "jobTitle": "Advogado",
      "identifier": "OAB/BA 46.638"}};
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": local.faq.map((f) => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }}))};
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Início", "item": base },
      { "@type": "ListItem", "position": 2, "name": local.areaLink.label, "item": `${base}${local.areaLink.href}` },
      { "@type": "ListItem", "position": 3, "name": local.h1, "item": canonicalUrl }]};

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>{local.title}</title>
          <meta name="description" content={local.metaDescription} />
          <link rel="canonical" href={canonicalUrl} />
          <meta property="og:title" content={local.title} />
          <meta property="og:description" content={local.metaDescription} />
          <meta property="og:url" content={canonicalUrl} />
          <script type="application/ld+json">{JSON.stringify(legalServiceSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
          <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
        </Helmet>

        <Navbar onCtaClick={() => { window.location.href = waUrl; }} />

        <main className="container mx-auto px-4 py-10 md:py-16 max-w-3xl">
          <nav className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Início</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={local.areaLink.href} className="hover:text-primary">{areaName}</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={`/advogado/${citySlug}`} className="hover:text-primary">{cityName}</Link>
          </nav>

          <h1 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">{local.h1}</h1>
          <p className="text-lg text-muted-foreground mb-10">{local.intro}</p>

          {local.sections.map((sec) => (
            <section key={sec.h2} className="mb-8">
              <h2 className="text-xl md:text-2xl font-semibold mb-3">{sec.h2}</h2>
              <p className="text-foreground/90 leading-relaxed">{sec.body}</p>
            </section>
          ))}

          <section className="my-10 rounded-xl border bg-muted/40 p-6 text-center">
            <p className="font-medium mb-4">Fale direto com o Dr. Gilberto Riccio, OAB/BA 46.638.</p>
            <Button size="lg" asChild>
              <a href={waUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5 mr-2" />
                Conversar pelo WhatsApp
              </a>
            </Button>
          </section>

          <section className="mb-10">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Perguntas frequentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {local.faq.map((item, idx) => (
                <AccordionItem key={idx} value={`faq-${idx}`}>
                  <AccordionTrigger className="text-left font-medium">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-3">Saiba mais</h2>
            <ul className="space-y-2">
              <li>
                <Link to={local.areaLink.href} className="flex items-center gap-2 text-primary hover:underline">
                  <ChevronRight className="h-4 w-4" />
                  {local.areaLink.label}
                </Link>
              </li>
              <li>
                <Link to={`/guia/${areaSlug}`} className="flex items-center gap-2 text-primary hover:underline">
                  <ChevronRight className="h-4 w-4" />
                  Guia completo: direito {areaName.toLowerCase()}
                </Link>
              </li>
              <li>
                <Link to={`/advogado/${citySlug}`} className="flex items-center gap-2 text-primary hover:underline">
                  <ChevronRight className="h-4 w-4" />
                  Advogado em {cityName}: todas as áreas
                </Link>
              </li>
              {LOCAL_PAGE_ROUTES.filter((r) => r.nicheSlug === areaSlug && r.citySlug !== citySlug).map((r) => (
                <li key={r.key}>
                  <Link to={`/advogado-${r.key}`} className="flex items-center gap-2 text-primary hover:underline">
                    <ChevronRight className="h-4 w-4" />
                    Advogado {areaName.toLowerCase()} em {LOCAL_CITY_NAMES[r.citySlug] ?? r.citySlug}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-base font-semibold mt-6 mb-2">Outras áreas em {cityName}</h3>
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {LOCAL_PAGE_ROUTES.filter((r) => r.citySlug === citySlug && r.nicheSlug !== areaSlug).map((r) => (
                <li key={r.key}>
                  <Link to={`/advogado-${r.key}`} className="text-primary hover:underline">
                    {LOCAL_NICHE_NAMES[r.nicheSlug] ?? r.nicheSlug}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </main>

        <footer className="border-t py-6">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>Riccio Advocacia | Dr. Gilberto Riccio, OAB/BA 46.638 | Atendimento online em toda a Bahia</p>
          </div>
        </footer>
      </div>
    </PageTransition>
  );
}

export default CityNicheLanding;

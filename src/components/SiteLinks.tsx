import { Link } from "react-router-dom";
import { LOCAL_CITY_NAMES } from "@/data/local-page-keys";

/**
 * Bloco de links internos para o rodapé: guias, áreas e cidades.
 * Ajuda o Google a achar e dar peso às páginas principais a partir da página inicial.
 */
const GUIDES = [
  { href: "/guia/trabalhista", label: "Direitos trabalhistas" },
  { href: "/guia/previdenciario", label: "INSS e aposentadoria" },
  { href: "/guia/familia", label: "Família" },
  { href: "/guia/consumidor", label: "Consumidor" },
  { href: "/guia/criminal", label: "Criminal" },
];

const AREAS = [
  { href: "/advogado-trabalhista", label: "Advogado trabalhista" },
  { href: "/advogado-previdenciario", label: "Advogado previdenciário" },
  { href: "/advogado-familia", label: "Advogado de família" },
  { href: "/advogado-consumidor", label: "Advogado do consumidor" },
  { href: "/advogado-civil", label: "Advogado cível" },
  { href: "/advogado-criminal", label: "Advogado criminal" },
];

const CITIES = Object.entries(LOCAL_CITY_NAMES).map(([slug, name]) => ({ href: `/advogado/${slug}`, label: name }));

const Column = ({ title, links }: { title: string; links: { href: string; label: string }[] }) => (
  <div>
    <p className="font-semibold text-foreground mb-3">{title}</p>
    <ul className="space-y-2">
      {links.map((l) => (
        <li key={l.href}>
          <Link to={l.href} className="hover:text-foreground hover:underline underline-offset-4">
            {l.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const SiteLinks = () => (
  <nav aria-label="Links do site" className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-muted-foreground text-left">
    <Column title="Guias" links={GUIDES} />
    <Column title="Áreas" links={AREAS} />
    <div className="col-span-2">
      <p className="font-semibold text-foreground mb-3">Cidades na Bahia</p>
      <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
        {CITIES.map((l) => (
          <li key={l.href}>
            <Link to={l.href} className="hover:text-foreground hover:underline underline-offset-4">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4">
        <Link to="/artigos" className="hover:text-foreground hover:underline underline-offset-4">Todos os artigos</Link>
        {" · "}
        <Link to="/calculadoras" className="hover:text-foreground hover:underline underline-offset-4">Calculadoras</Link>
        {" · "}
        <Link to="/perguntas" className="hover:text-foreground hover:underline underline-offset-4">Perguntas frequentes</Link>
        {" · "}
        <Link to="/advogado-bahia" className="hover:text-foreground hover:underline underline-offset-4">Todas as cidades da Bahia</Link>
        {" · "}
        <Link to="/advogado-gilberto-riccio" className="hover:text-foreground hover:underline underline-offset-4">Sobre o advogado</Link>
        {" · "}
        <Link to="/sitemap" className="hover:text-foreground hover:underline underline-offset-4">Mapa do site</Link>
      </p>
    </div>
  </nav>
);

export default SiteLinks;

/**
 * Plugin Vite (só no build): gera dist/<rota>/index.html com SEO por rota, em Node puro (sem browser).
 *
 * - Lê o dist/index.html gerado pelo Vite e, para cada rota pública, troca title/description/og/twitter,
 *   acrescenta canonical, og:url, JSON-LD e um HTML semântico simples dentro de <div id="root">.
 * - O React usa createRoot (src/main.tsx), então o conteúdo do #root é substituído ao montar.
 * - As tags injetadas levam data-rh="true": o react-helmet-async remove tags com esse atributo quando
 *   monta as dele, então não fica canonical/JSON-LD duplicado depois que a página carrega.
 * - Os arquivos de dados são carregados com ssrLoadModule num servidor Vite temporário (resolve o alias "@/"
 *   se algum dia aparecer). Se um arquivo falhar, loga aviso e segue sem aquelas rotas.
 */
import fs from "node:fs";
import path from "node:path";
import type { Plugin, ResolvedConfig } from "vite";

const SITE = "https://riccioadvocacia.online";
const OG_IMAGE = `${SITE}/og-image.png`;
const BRAND = "Riccio Advocacia";
const LAWYER = "Gilberto Riccio";
const OAB = "OAB/BA 46.638";
const WHATSAPP = "5571997036269";
/** Página do advogado (mesmo endereço de src/data/author.ts). */
const AUTHOR_ROUTE = "/advogado-gilberto-riccio";
const AUTHOR_PERSON = {
  "@type": "Person",
  "@id": `${SITE}${AUTHOR_ROUTE}#pessoa`,
  name: LAWYER,
  url: `${SITE}${AUTHOR_ROUTE}`,
  jobTitle: "Advogado",
  identifier: OAB,
};

type Faq = { q: string; a: string };
type Crumb = { name: string; path: string };
type Page = {
  route: string;
  title: string;
  description: string;
  h1: string;
  intro?: string;
  /** HTML já montado (resposta das perguntas, com listas e tabelas). Vai logo depois da introdução. */
  html?: string;
  sections?: { h2: string; paragraphs: string[]; list?: string[] }[];
  faq?: Faq[];
  /** Listas de links com título (índices: perguntas por área, artigos por área, cidades). */
  linkGroups?: { h2: string; links: { href: string; label: string }[] }[];
  links?: { href: string; label: string }[];
  jsonLd: object[];
  ogType?: "website" | "article";
  /** dist/index.html também é o fallback de rotas sem HTML próprio: sem canonical/og:url ali. */
  noCanonical?: boolean;
  /** Ex.: "noindex, follow" quando a página React também é noindex (não mandar sinal contrário). */
  robots?: string;
};

/**
 * Páginas cujo texto mora dentro do componente (landings de consumidor, liminares, INSS, criminal…).
 * O título, a descrição, a chamada e as perguntas são lidos do próprio arquivo no build, com
 * expressões simples; o que não casar fica de fora (a página continua funcionando como SPA).
 */
const COMPONENT_PAGES: { route: string; file: string; area: "consumidor" | "previdenciario" | "criminal" | "trabalhista" | "calc" | "institucional" }[] = [
  { route: "/criminal", file: "src/pages/criminal/CriminalLanding.tsx", area: "criminal" },
  { route: "/advogado-trabalhista-online", file: "src/pages/trabalhista/TrabalhistaLanding.tsx", area: "trabalhista" },
  { route: "/prev", file: "src/pages/prev/PrevHome.tsx", area: "previdenciario" },
  { route: "/prev/aposentadorias", file: "src/pages/prev/PrevAposentadorias.tsx", area: "previdenciario" },
  { route: "/prev/aposentadoria-por-idade", file: "src/pages/prev/PrevAposentadoriaIdade.tsx", area: "previdenciario" },
  { route: "/prev/auxilio-doenca", file: "src/pages/prev/PrevAuxilioDoenca.tsx", area: "previdenciario" },
  { route: "/prev/invalidez", file: "src/pages/prev/PrevInvalidez.tsx", area: "previdenciario" },
  { route: "/prev/bpc-loas", file: "src/pages/prev/PrevBpcLoas.tsx", area: "previdenciario" },
  { route: "/prev/salario-maternidade", file: "src/pages/prev/PrevSalarioMaternidade.tsx", area: "previdenciario" },
  { route: "/prev/sobre", file: "src/pages/prev/PrevSobre.tsx", area: "previdenciario" },
  { route: "/prev/contato", file: "src/pages/prev/PrevContato.tsx", area: "previdenciario" },
  { route: "/privacidade", file: "src/pages/PrivacyPolicy.tsx", area: "institucional" },
  { route: "/termos-de-uso", file: "src/pages/TermsOfUse.tsx", area: "institucional" },
  { route: AUTHOR_ROUTE, file: "src/pages/AdvogadoGilbertoRiccio.tsx", area: "institucional" },
  { route: "/calculadora-devolucao-dobro", file: "src/pages/CalculadoraDevolucaoEmDobro.tsx", area: "calc" },
  { route: "/advogado-problemas-voo", file: "src/pages/consumer/ProblemasVooLanding.tsx", area: "consumidor" },
  { route: "/advogado-negativacao-indevida", file: "src/pages/consumer/NegativacaoIndevidaLanding.tsx", area: "consumidor" },
  { route: "/advogado-plano-saude-cobertura-negada", file: "src/pages/consumer/PlanoSaudeNegouLanding.tsx", area: "consumidor" },
  { route: "/advogado-cobranca-indevida", file: "src/pages/consumer/CobrancaIndevidaLanding.tsx", area: "consumidor" },
  { route: "/advogado-produto-defeituoso", file: "src/pages/consumer/ProdutoDefeitousoLanding.tsx", area: "consumidor" },
  { route: "/fraude-bancaria", file: "src/pages/consumer/FraudeBancariaLanding.tsx", area: "consumidor" },
  { route: "/advogado-cartao-consignado", file: "src/pages/consumer/CartaoConsignadoLanding.tsx", area: "consumidor" },
  { route: "/liminar-cirurgia-negada", file: "src/pages/consumer/LiminarCirurgiaNegadaLanding.tsx", area: "consumidor" },
  { route: "/liminar-cirurgia-bariatrica", file: "src/pages/consumer/LiminarBariatricaLanding.tsx", area: "consumidor" },
  { route: "/liminar-tratamento-cancer", file: "src/pages/consumer/LiminarOncologicaLanding.tsx", area: "consumidor" },
  { route: "/liminar-cirurgia-ortopedica", file: "src/pages/consumer/LiminarOrtopedicaLanding.tsx", area: "consumidor" },
  { route: "/liminar-cirurgia-cardiaca", file: "src/pages/consumer/LiminarCardiologicaLanding.tsx", area: "consumidor" },
  { route: "/liminar-neurocirurgia", file: "src/pages/consumer/LiminarNeurologicaLanding.tsx", area: "consumidor" },
  { route: "/liminar-cirurgia-olhos", file: "src/pages/consumer/LiminarOftalmologicaLanding.tsx", area: "consumidor" },
];

const unq = (s: string) => s.replace(/\\"/g, '"').replace(/\\n/g, " ").replace(/\s+/g, " ").trim();

/** Lê título, descrição, chamada e perguntas de um componente de página. Devolve null se faltar título ou descrição. */
function extractComponentPage(src: string) {
  const pick = (...res: RegExp[]) => {
    for (const re of res) {
      const m = src.match(re);
      if (m?.[1]) return unq(m[1]);
    }
    return "";
  };
  const title = pick(/<title>\s*\{\s*`([^`$]+)`\s*\}\s*<\/title>/, /<title>([^<{}]+)<\/title>/, /metaTitle="([^"]+)"/);
  const description = pick(
    /name="description"\s+content="([^"]+)"/,
    /name="description"\s+content=\{\s*`([^`$]+)`\s*\}/,
    /metaDescription="([^"]+)"/,
  );
  if (!title || !description) return null;
  const isSimpleLanding = src.includes("<SimpleConsumerLanding");
  const h1 = (isSimpleLanding && pick(/<SimpleConsumerLanding[\s\S]*?\btitle="([^"]+)"/)) || title.split(/\s[|—–]\s/)[0].trim();
  const intro = pick(/\bsubtitle="([^"]+)"/, /\bheroSubtitle="([^"]+)"/) || description;
  const faq: Faq[] = [];
  const reFaq = /\b(?:question|q)\s*:\s*(?:"((?:[^"\\]|\\.)+)"|`([^`$]+)`)\s*,\s*(?:answer|a)\s*:\s*(?:"((?:[^"\\]|\\.)+)"|`([^`$]+)`)/g;
  for (const m of src.matchAll(reFaq)) {
    const q = unq(m[1] ?? m[2] ?? "");
    const a = unq(m[3] ?? m[4] ?? "");
    if (q && a && !faq.some((f) => f.q === q)) faq.push({ q, a });
  }
  const noindex = /name="robots"\s+content="noindex/.test(src);
  return { title, description, h1, intro, faq, noindex };
}

const AREA_LINKS: Record<string, { href: string; label: string }[]> = {
  consumidor: [
    { href: "/advogado-consumidor", label: "Advogado do consumidor" },
    { href: "/guia/consumidor", label: "Guia: direitos do consumidor" },
  ],
  previdenciario: [
    { href: "/advogado-previdenciario", label: "Advogado previdenciário (INSS)" },
    { href: "/guia/previdenciario", label: "Guia: INSS e aposentadoria" },
    { href: "/prev", label: "INSS: aposentadoria, auxílio e BPC" },
  ],
  criminal: [
    { href: "/advogado-criminal", label: "Advogado criminal" },
    { href: "/guia/criminal", label: "Guia: prisão, inquérito e defesa" },
  ],
  trabalhista: [
    { href: "/advogado-trabalhista", label: "Advogado trabalhista" },
    { href: "/guia/trabalhista", label: "Guia: direitos trabalhistas" },
  ],
  calc: [
    { href: "/calculadoras", label: "Todas as calculadoras" },
    { href: "/guia/consumidor", label: "Guia: direitos do consumidor" },
  ],
  institucional: [],
};

const esc = (s: unknown) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// JSON dentro de <script>: impede fechar a tag por engano.
const jsonForScript = (o: object) => JSON.stringify(o).replace(/</g, "\\u003c");

const abs = (p: string) => (p === "/" ? `${SITE}/` : `${SITE}${p}`);

/** Markdown simples → texto: remove marcações e devolve parágrafos. */
function mdParagraphs(md: string, max = 12): { h2: string; paragraphs: string[] }[] {
  const out: { h2: string; paragraphs: string[] }[] = [{ h2: "", paragraphs: [] }];
  for (const block of String(md || "").split(/\n\s*\n/)) {
    const t = block.trim();
    if (!t) continue;
    const h = t.match(/^#{1,6}\s+(.+)$/m);
    if (h && t.split("\n").length === 1) {
      out.push({ h2: clean(h[1]), paragraphs: [] });
      continue;
    }
    const text = clean(t.replace(/^#{1,6}\s+.*$/gm, "").replace(/^\s*[-*+]\s+/gm, "").replace(/^\s*\d+\.\s+/gm, ""));
    if (text) out[out.length - 1].paragraphs.push(text);
  }
  return out.filter((s) => s.h2 || s.paragraphs.length).slice(0, max);
}
/**
 * Markdown das respostas das perguntas → HTML, linha a linha (mesma regra de formatAnswer em
 * src/pages/FAQQuestion.tsx): "**Título:**" sozinho vira h2, "- " vira ul, "1. " vira ol,
 * linhas com "|" viram tabela e **negrito** no meio do texto vira <strong>.
 */
function mdToHtml(text: string): string {
  const out: string[] = [];
  const st: { list: { type: "ul" | "ol"; items: string[] } | null; table: string[][] | null } = { list: null, table: null };
  const inline = (s: string) => esc(s).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
  const flushList = () => {
    if (!st.list) return;
    const { type, items } = st.list;
    out.push(`<${type}>${items.map((i) => `<li>${inline(i)}</li>`).join("")}</${type}>`);
    st.list = null;
  };
  const flushTable = () => {
    const rows = st.table;
    st.table = null;
    if (!rows?.length) return;
    const [head, ...body] = rows;
    out.push(
      `<table><thead><tr>${head.map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>` +
        body.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("") +
        `</tbody></table>`,
    );
  };
  for (const raw of String(text || "").split("\n")) {
    const line = raw.trim();
    if (!line) {
      flushList();
      flushTable();
      continue;
    }
    const bullet = line.match(/^[-•]\s+(.*)$/);
    const numbered = line.match(/^\d+[.)]\s+(.*)$/);
    if (bullet || numbered) {
      flushTable();
      const type = bullet ? "ul" : "ol";
      if (!st.list || st.list.type !== type) {
        flushList();
        st.list = { type, items: [] };
      }
      st.list.items.push((bullet ?? numbered)![1]);
      continue;
    }
    if (line.startsWith("|")) {
      flushList();
      if (/^\|[\s:|-]+\|?$/.test(line)) continue;
      (st.table ??= []).push(line.replace(/^\||\|$/g, "").split("|").map((c) => c.trim()));
      continue;
    }
    flushList();
    flushTable();
    const heading = line.match(/^\*\*([^*]+?)\*\*:?$/);
    out.push(heading ? `<h2>${esc(heading[1].replace(/:$/, ""))}</h2>` : `<p>${inline(line)}</p>`);
  }
  flushList();
  flushTable();
  return out.join("\n");
}

function clean(s: string) {
  return s
    .replace(/!\[[^\]]*\]\([^)]*\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*_`>|]+/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

const org = {
  "@type": "LegalService",
  name: BRAND,
  url: `${SITE}/`,
  telephone: `+${WHATSAPP}`,
  image: OG_IMAGE,
};

function breadcrumb(items: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({ "@type": "ListItem", position: i + 1, name: c.name, item: abs(c.path) })),
  };
}
function faqLd(faq: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
}
function articleLd(p: { route: string; title: string; description: string; date?: string; published?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.title.slice(0, 110),
    description: p.description,
    mainEntityOfPage: abs(p.route),
    image: OG_IMAGE,
    ...(p.published ? { datePublished: p.published } : p.date ? { datePublished: p.date } : {}),
    ...(p.date ? { dateModified: p.date } : {}),
    author: AUTHOR_PERSON,
    publisher: { "@type": "Organization", name: BRAND, logo: { "@type": "ImageObject", url: OG_IMAGE } },
  };
}
const articleBundle = (p: Parameters<typeof articleLd>[0], faq: Faq[], crumbs: Crumb[]) =>
  [articleLd(p), ...(faq.length ? [faqLd(faq)] : []), breadcrumb(crumbs)];

function renderBody(p: Page): string {
  const parts: string[] = [`<main>`, `<h1>${esc(p.h1)}</h1>`];
  if (p.intro) parts.push(`<p>${esc(p.intro)}</p>`);
  if (p.html) parts.push(p.html);
  for (const s of p.sections || []) {
    if (s.h2) parts.push(`<h2>${esc(s.h2)}</h2>`);
    for (const para of s.paragraphs) parts.push(`<p>${esc(para)}</p>`);
    if (s.list?.length) parts.push(`<ul>${s.list.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`);
  }
  if (p.faq?.length) {
    parts.push(`<h2>Perguntas frequentes</h2>`);
    for (const f of p.faq) parts.push(`<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`);
  }
  for (const g of p.linkGroups || []) {
    if (!g.links.length) continue;
    parts.push(`<h2>${esc(g.h2)}</h2>`, `<ul>`);
    for (const l of g.links) parts.push(`<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`);
    parts.push(`</ul>`);
  }
  if (p.links?.length) {
    parts.push(`<nav aria-label="Links relacionados"><ul>`);
    for (const l of p.links) parts.push(`<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`);
    parts.push(`</ul></nav>`);
  }
  parts.push(
    `<p>${esc(BRAND)} · Dr. ${esc(LAWYER)} · ${esc(OAB)} · <a href="https://wa.me/${WHATSAPP}">WhatsApp</a></p>`,
    `</main>`,
  );
  return parts.join("\n");
}

function renderHtml(base: string, p: Page): string {
  const url = abs(p.route);
  let html = base
    .replace(/<title>[\s\S]*?<\/title>/i, "")
    .replace(/<meta\s+(?:name|property)="(?:title|description|og:title|og:description|og:url|og:type|twitter:title|twitter:description|twitter:url)"[^>]*>\s*/gi, "")
    .replace(/<link\s+rel="canonical"[^>]*>\s*/gi, "");
  // O poster do vídeo só aparece na home; nas outras páginas a pré-carga com prioridade alta
  // só disputava a banda do celular com o que importa (texto, CSS, JS).
  if (p.route !== "/") {
    html = html.replace(/\s*<!-- Preload do poster do hero[^>]*-->\s*<link rel="preload" as="image" href="\/videos\/hero-poster\.jpg"[^>]*>/i, "");
  }
  const head = [
    `<title>${esc(p.title)}</title>`,
    `<meta data-rh="true" name="description" content="${esc(p.description)}" />`,
    ...(p.robots ? [`<meta data-rh="true" name="robots" content="${esc(p.robots)}" />`] : []),
    ...(p.noCanonical ? [] : [`<link data-rh="true" rel="canonical" href="${esc(url)}" />`]),
    `<meta data-rh="true" property="og:type" content="${p.ogType || "website"}" />`,
    `<meta data-rh="true" property="og:title" content="${esc(p.title)}" />`,
    `<meta data-rh="true" property="og:description" content="${esc(p.description)}" />`,
    ...(p.noCanonical ? [] : [`<meta data-rh="true" property="og:url" content="${esc(url)}" />`]),
    `<meta data-rh="true" property="og:image" content="${OG_IMAGE}" />`,
    ...(p.noCanonical ? [] : [`<meta data-rh="true" name="twitter:url" content="${esc(url)}" />`]),
    `<meta data-rh="true" name="twitter:title" content="${esc(p.title)}" />`,
    `<meta data-rh="true" name="twitter:description" content="${esc(p.description)}" />`,
    ...p.jsonLd.map((o) => `<script data-rh="true" type="application/ld+json">${jsonForScript(o)}</script>`),
  ].join("\n    ");
  // og:image do base é removido para não duplicar
  html = html.replace(/<meta\s+property="og:image"\s+content="[^"]*"\s*\/?>\s*/i, "");
  html = html.replace(/<\/head>/i, `    ${head}\n  </head>`);
  html = html.replace(/<div id="root">\s*<\/div>/i, `<div id="root">${renderBody(p)}</div>`);
  return html;
}

async function loadData(root: string) {
  const { createServer } = await import("vite");
  const server = await createServer({
    root,
    configFile: false,
    logLevel: "error",
    appType: "custom",
    server: { middlewareMode: true, hmr: false, watch: null },
    optimizeDeps: { noDiscovery: true, include: [] },
    resolve: { alias: { "@": path.resolve(root, "src") } },
  });
  const load = async (rel: string) => {
    try {
      return await server.ssrLoadModule(path.resolve(root, rel));
    } catch (e) {
      console.warn(`[static-seo] aviso: não carregou ${rel}; rotas dele ficam sem HTML estático.`, (e as Error)?.message);
      return null;
    }
  };
  try {
    return {
      guias: await load("src/data/guias.ts"),
      local: await load("src/data/local-pages.ts"),
      niches: await load("src/data/niche-pages.ts"),
      articles: await load("src/data/blog-articles.ts"),
      posts: await load("src/data/blog-posts.ts"),
      faqs: await load("src/data/programmatic-faqs.ts"),
      localArticles: await load("src/data/local-seo-articles.ts"),
      cities: await load("src/data/cities.ts"),
      cityPage: await load("src/data/city-page.ts"),
      calcInfo: await load("src/data/calculator-config.ts"),
      calcSchemas: await load("src/data/calculator-schemas.ts"),
      redirects: await load("src/data/article-redirects.ts"),
      routeRedirects: await load("src/data/route-redirects.ts"),
      componentSources: Object.fromEntries(
        COMPONENT_PAGES.map((c) => {
          try {
            return [c.route, fs.readFileSync(path.resolve(root, c.file), "utf8")];
          } catch {
            console.warn(`[static-seo] aviso: não li ${c.file}; ${c.route} fica sem HTML estático.`);
            return [c.route, ""];
          }
        }),
      ) as Record<string, string>,
    };
  } finally {
    await server.close();
  }
}

function buildPages(d: Awaited<ReturnType<typeof loadData>>, baseTitle: string, baseDesc: string): Page[] {
  const pages: Page[] = [];
  const home: Crumb = { name: "Início", path: "/" };
  const guias: any[] = d.guias?.guias || [];
  const localPages: Record<string, any> = d.local?.localPages || {};
  const localRoutes: { key: string; nicheSlug: string; citySlug: string }[] = d.local?.LOCAL_PAGE_ROUTES || [];
  const cityNames: Record<string, string> = d.local?.LOCAL_CITY_NAMES || {};

  // Home: title/description do index.html (fallback), só com navegação para os conteúdos existentes.
  pages.push({
    route: "/",
    noCanonical: true,
    title: baseTitle,
    description: baseDesc,
    h1: baseTitle,
    links: [
      { href: "/guias", label: "Guias jurídicos por área" },
      ...guias.map((g) => ({ href: `/guia/${g.slug}`, label: g.h1 })),
      ...Object.values(d.niches?.nicheData || {}).map((n: any) => ({ href: `/${n.slug}`, label: n.title })),
      ...localRoutes.map((r) => ({ href: `/advogado-${r.key}`, label: localPages[r.key]?.h1 || r.key })),
    ],
    jsonLd: [{ "@context": "https://schema.org", ...org }],
  });

  // /guias
  if (guias.length) {
    pages.push({
      route: "/guias",
      title: `Guias Jurídicos por Área | ${BRAND}`,
      description:
        "Guias completos e gratuitos sobre direitos trabalhistas, INSS, família, consumidor e defesa criminal, com base legal e perguntas frequentes. OAB/BA 46.638.",
      h1: "Guias jurídicos por área",
      sections: guias.map((g) => ({ h2: g.h1, paragraphs: [g.metaDescription] })),
      links: guias.map((g) => ({ href: `/guia/${g.slug}`, label: g.h1 })),
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: guias.map((g, i) => ({ "@type": "ListItem", position: i + 1, url: abs(`/guia/${g.slug}`), name: g.h1 })),
        },
        breadcrumb([home, { name: "Guias", path: "/guias" }]),
      ],
    });
  }

  for (const g of guias) {
    const route = `/guia/${g.slug}`;
    const faq: Faq[] = g.faq || [];
    pages.push({
      route,
      ogType: "article",
      title: g.title,
      description: g.metaDescription,
      h1: g.h1,
      intro: g.intro,
      sections: (g.secoes || []).map((s: any) => ({ h2: s.h2, paragraphs: s.paragrafos || [] })),
      faq,
      links: [
        ...(g.artigosRelacionados || []).map((href: string) => ({ href, label: href.split("/").pop()!.replace(/-/g, " ") })),
        ...(g.paginasLocais || []),
      ],
      jsonLd: articleBundle({ route, title: g.h1, description: g.metaDescription, date: g.atualizadoEm }, faq, [
        home,
        { name: "Guias", path: "/guias" },
        { name: g.area || g.h1, path: route },
      ]),
    });
  }

  for (const r of localRoutes) {
    const p = localPages[r.key];
    if (!p) continue;
    const route = `/advogado-${r.key}`;
    const faq: Faq[] = p.faq || [];
    const city = cityNames[r.citySlug] || r.citySlug;
    pages.push({
      route,
      title: p.title,
      description: p.metaDescription,
      h1: p.h1,
      intro: p.intro,
      sections: (p.sections || []).map((s: any) => ({ h2: s.h2, paragraphs: [s.body] })),
      faq,
      links: [p.areaLink, { href: "/guias", label: "Guias jurídicos por área" }].filter(Boolean),
      jsonLd: [
        {
          "@context": "https://schema.org",
          ...org,
          "@id": `${abs(route)}#legalservice`,
          description: p.metaDescription,
          // Atendimento online, sem escritório físico: só a área atendida, sem PostalAddress
          areaServed: { "@type": "City", name: city },
        },
        ...(faq.length ? [faqLd(faq)] : []),
        breadcrumb([home, { name: p.h1, path: route }]),
      ],
    });
  }

  // Páginas de área (/advogado-<area>): prazos da lei, casos e links para guia e cidades
  const nicheDataMap: Record<string, any> = d.niches?.nicheData || {};
  for (const n of Object.values(nicheDataMap)) {
    const route = `/${n.slug}`;
    const cityLinks = n.localNiche
      ? localRoutes
          .filter((r) => r.nicheSlug === n.localNiche)
          .map((r) => ({ href: `/advogado-${r.key}`, label: `${n.title.replace(" Online", "")} em ${cityNames[r.citySlug] || r.citySlug}` }))
      : [];
    pages.push({
      route,
      title: n.metaTitle,
      description: n.metaDescription,
      h1: n.title,
      intro: n.heroDescription,
      sections: [
        { h2: "Prazos que você precisa conhecer", paragraphs: [], list: (n.stats || []).map((s: any) => `${s.value}: ${s.label}`) },
        { h2: "Casos atendidos", paragraphs: [], list: (n.commonCases || []).map((c: any) => `${c.title}: ${c.description}`) },
        { h2: "Como funciona o atendimento", paragraphs: [], list: n.benefits || [] },
      ],
      links: [
        ...(n.guideSlug ? [{ href: `/guia/${n.guideSlug}`, label: "Guia completo da área" }] : []),
        ...cityLinks,
        { href: "/guias", label: "Guias jurídicos por área" },
      ],
      jsonLd: [
        {
          "@context": "https://schema.org",
          ...org,
          "@id": `${abs(route)}#legalservice`,
          description: n.metaDescription,
          areaServed: { "@type": "State", name: "Bahia" },
        },
        breadcrumb([home, { name: n.title, path: route }]),
      ],
    });
  }

  const articles: any[] = d.articles?.blogArticles || [];
  const niches: any[] = d.articles?.niches || [];
  for (const a of articles) {
    const route = `/artigos/${a.nicheId}/${a.slug}`;
    const c = a.content || {};
    const faq: Faq[] = (c.faq || []).map((f: any) => ({ q: f.question, a: f.answer }));
    const sections = [
      c.whatIs && { h2: "O que é", paragraphs: [c.whatIs] },
      // Seções de texto corrido (e as expansões juntadas em blog-articles.ts), na mesma ordem
      // da página React. Antes ficavam de fora e o HTML estático perdia a maior parte do texto.
      ...((c.sections || []) as { title: string; paragraphs: string[] }[])
        .filter((s) => s?.title && s.paragraphs?.length)
        .map((s) => ({ h2: s.title, paragraphs: s.paragraphs })),
      c.whenYouHaveRight?.length && { h2: "Quando você tem direito", paragraphs: [], list: c.whenYouHaveRight },
      c.documents?.length && { h2: "Documentos necessários", paragraphs: [], list: c.documents },
      c.deadlines && { h2: "Prazos", paragraphs: [c.deadlines] },
    ].filter(Boolean) as Page["sections"];
    const niche = niches.find((n) => n.id === a.nicheId);
    // Mesmos relacionados da página React (por assunto em comum), também no HTML estático
    const relacionados: any[] = d.articles?.getRelatedArticles?.(a, 4) || [];
    pages.push({
      route,
      ogType: "article",
      title: a.metaTitle || a.title,
      description: a.metaDescription || a.excerpt,
      h1: a.title,
      intro: c.intro || a.excerpt,
      sections,
      faq,
      links: [
        ...relacionados.map((r) => ({ href: `/artigos/${r.nicheId}/${r.slug}`, label: r.title })),
        { href: `/artigos/${a.nicheId}`, label: niche?.name || "Artigos" },
        { href: "/guias", label: "Guias jurídicos por área" },
      ],
      jsonLd: articleBundle({ route, title: a.title, description: a.metaDescription || a.excerpt, date: a.updatedAt }, faq, [
        home,
        { name: "Artigos", path: "/artigos" },
        { name: niche?.name || a.nicheId, path: `/artigos/${a.nicheId}` },
        { name: a.title, path: route },
      ]),
    });
  }

  const posts: any[] = d.posts?.blogPosts || [];
  for (const p of posts) {
    const route = `/blog/${p.slug}`;
    pages.push({
      route,
      ogType: "article",
      title: p.metaTitle || p.title,
      description: p.metaDescription || p.excerpt,
      h1: p.title,
      intro: p.excerpt,
      sections: mdParagraphs(p.content),
      links: [{ href: "/blog", label: "Blog" }, { href: "/guias", label: "Guias jurídicos por área" }],
      jsonLd: articleBundle(
        { route, title: p.title, description: p.metaDescription || p.excerpt, date: p.updatedAt, published: p.publishedAt },
        [],
        [home, { name: "Blog", path: "/blog" }, { name: p.title, path: route }],
      ),
    });
  }

  const redirected: Set<string> = d.redirects?.redirectedPaths || new Set();
  const guideSlugs = new Set(guias.map((g) => g.slug));

  // Índices de artigos (/artigos e /artigos/<área>) e do blog
  const liveArticles = articles.filter((a) => !redirected.has(`/artigos/${a.nicheId}/${a.slug}`));
  if (liveArticles.length) {
    pages.push({
      route: "/artigos",
      title: `Artigos Jurídicos | ${BRAND}`,
      description:
        "Central de conhecimento jurídico. Artigos completos sobre Direito Trabalhista, Família, Civil, Previdenciário e Criminal.",
      h1: "Artigos jurídicos",
      linkGroups: niches.map((n) => ({
        h2: n.name,
        links: liveArticles.filter((a) => a.nicheId === n.id).map((a) => ({ href: `/artigos/${a.nicheId}/${a.slug}`, label: a.title })),
      })),
      jsonLd: [breadcrumb([home, { name: "Artigos", path: "/artigos" }])],
    });
    for (const n of niches) {
      const list = liveArticles.filter((a) => a.nicheId === n.id);
      if (!list.length) continue;
      const route = `/artigos/${n.id}`;
      pages.push({
        route,
        title: `Artigos sobre ${n.name} | ${BRAND}`,
        description: `Leia artigos completos sobre ${n.name}. ${n.description}`,
        h1: `Artigos sobre ${n.name}`,
        intro: n.description,
        linkGroups: [{ h2: "Artigos", links: list.map((a) => ({ href: `/artigos/${a.nicheId}/${a.slug}`, label: a.title })) }],
        links: [{ href: "/artigos", label: "Todos os artigos" }, { href: "/guias", label: "Guias jurídicos por área" }],
        jsonLd: [breadcrumb([home, { name: "Artigos", path: "/artigos" }, { name: n.name, path: route }])],
      });
    }
  }
  const livePosts = posts.filter((p) => !redirected.has(`/blog/${p.slug}`));
  if (livePosts.length) {
    pages.push({
      route: "/blog",
      title: `Blog ${BRAND} | Artigos sobre Direito do Consumidor, Trânsito e Finanças`,
      description: "Artigos sobre direitos do consumidor, multas de trânsito, superendividamento e outros temas, em linguagem simples e com base na lei.",
      h1: `Blog ${BRAND}`,
      linkGroups: [{ h2: "Artigos do blog", links: livePosts.map((p) => ({ href: `/blog/${p.slug}`, label: p.title })) }],
      jsonLd: [breadcrumb([home, { name: "Blog", path: "/blog" }])],
    });
  }

  // Perguntas frequentes: uma página por pergunta + o índice por área
  const faqs: any[] = d.faqs?.programmaticFAQs || [];
  const areaLabels: Record<string, string> = d.faqs?.areaLabels || {};
  const faqPublished: string | undefined = d.faqs?.FAQS_PUBLICADAS_EM;
  const faqReviewed: string | undefined = d.faqs?.FAQS_REVISADAS_EM;
  const faqById = new Map(faqs.map((f) => [f.id, f]));
  const faqText = (s: string) => clean(String(s || "").replace(/^\s*(?:[-•]|\d+[.)])\s+/gm, ""));
  for (const f of faqs) {
    const route = `/perguntas/${f.slug}`;
    const description = f.metaDescription || faqText(f.answer).slice(0, 158);
    const seen = new Set<string>([f.slug]);
    const related = [
      ...(f.relatedQuestions || []).map((id: string) => faqById.get(id)).filter(Boolean),
      ...faqs.filter((o) => o.area === f.area && o.id !== f.id),
    ]
      .filter((o: any) => !seen.has(o.slug) && seen.add(o.slug))
      .slice(0, 6);
    pages.push({
      route,
      ogType: "article",
      title: `${f.question} | ${BRAND}`,
      description,
      h1: f.question,
      html: mdToHtml(f.answer),
      linkGroups: [{ h2: "Perguntas relacionadas", links: related.map((o: any) => ({ href: `/perguntas/${o.slug}`, label: o.question })) }],
      links: [{ href: "/perguntas", label: "Todas as perguntas" }, { href: "/guias", label: "Guias jurídicos por área" }],
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [{ "@type": "Question", name: f.question, acceptedAnswer: { "@type": "Answer", text: faqText(f.answer) } }],
        },
        articleLd({ route, title: f.question, description, date: faqReviewed, published: faqPublished }),
        breadcrumb([home, { name: "Perguntas Frequentes", path: "/perguntas" }, { name: f.question, path: route }]),
      ],
    });
  }
  if (faqs.length) {
    const areas = [...new Set(faqs.map((f) => f.area))];
    pages.push({
      route: "/perguntas",
      title: `Perguntas Frequentes sobre Direito | ${BRAND}`,
      description:
        "Dúvidas jurídicas respondidas em linguagem simples, com a base legal: trabalhista, família, previdenciário, civil, consumidor e penal.",
      h1: "Perguntas Frequentes sobre Direito",
      linkGroups: areas.map((a) => ({
        h2: areaLabels[a] || a,
        links: faqs.filter((f) => f.area === a).map((f) => ({ href: `/perguntas/${f.slug}`, label: f.question })),
      })),
      jsonLd: [breadcrumb([home, { name: "Perguntas Frequentes", path: "/perguntas" }])],
    });
  }

  // Cidades da Bahia (/advogado/<cidade>) e a página da Bahia
  const allCities: any[] = d.cities?.brazilianCities || [];
  const isIndexable: (slug: string) => boolean = d.cities?.isCityIndexable || (() => false);
  const indexedCities = allCities.filter((c) => isIndexable(c.slug));
  const cityMeta = d.cityPage?.cityPageMeta;
  const cityFaqOf = d.cityPage?.cityFaq;
  const nichePages = Object.values(d.niches?.nicheData || {}) as any[];
  if (cityMeta && cityFaqOf) {
    for (const c of indexedCities) {
      const route = `/advogado/${c.slug}`;
      const meta = cityMeta(c);
      const faq: Faq[] = cityFaqOf(c);
      const isBA = c.stateCode === "BA";
      pages.push({
        route,
        title: meta.title,
        description: meta.description,
        h1: `Advogado em ${c.name}: atendimento jurídico online`,
        intro: meta.intro,
        sections: [
          { h2: `Advocacia em ${c.name}`, paragraphs: [c.localContext].filter(Boolean) },
          { h2: "Onde os processos tramitam", paragraphs: [c.courtInfo].filter(Boolean) },
          { h2: "Destaques da região", paragraphs: [], list: c.highlights || [] },
        ],
        faq,
        linkGroups: [
          {
            h2: `Atendimento por área em ${c.name}`,
            links: localRoutes
              .filter((r) => r.citySlug === c.slug)
              .map((r) => ({ href: `/advogado-${r.key}`, label: localPages[r.key]?.h1 || `Advogado ${r.nicheSlug} em ${c.name}` })),
          },
        ],
        links: [
          ...(isBA ? [{ href: "/advogado-bahia", label: "Advogado na Bahia: todas as cidades" }] : []),
          { href: "/guias", label: "Guias jurídicos por área" },
        ],
        jsonLd: [
          {
            "@context": "https://schema.org",
            ...org,
            "@id": `${abs(route)}#legalservice`,
            description: meta.description,
            areaServed: { "@type": "City", name: c.name },
          },
          faqLd(faq),
          breadcrumb([home, ...(isBA ? [{ name: "Bahia", path: "/advogado-bahia" }] : []), { name: `Advogado em ${c.name}`, path: route }]),
        ],
      });
    }
  }
  const bahiaCities = indexedCities.filter((c) => c.stateCode === "BA");
  if (bahiaCities.length) {
    pages.push({
      route: "/advogado-bahia",
      title: "Advogado Online na Bahia | Salvador, Feira de Santana e Mais | Riccio",
      description:
        "Advogado online na Bahia: Salvador, Feira de Santana, Vitória da Conquista e todas as cidades baianas. Direito do consumidor, trabalhista, previdenciário. Atendimento online.",
      h1: "Advogado Online na Bahia",
      intro:
        "Atendimento online para Salvador, Feira de Santana, Vitória da Conquista e qualquer cidade baiana, com o Dr. Gilberto Riccio (OAB/BA 46.638).",
      linkGroups: [
        { h2: "Atendimento por cidade", links: bahiaCities.map((c) => ({ href: `/advogado/${c.slug}`, label: `Advogado em ${c.name}` })) },
        { h2: "Áreas de atuação", links: nichePages.map((n) => ({ href: `/${n.slug}`, label: n.title })) },
      ],
      jsonLd: [
        {
          "@context": "https://schema.org",
          ...org,
          "@id": `${abs("/advogado-bahia")}#legalservice`,
          areaServed: { "@type": "State", name: "Bahia" },
        },
        breadcrumb([home, { name: "Advogado Bahia", path: "/advogado-bahia" }]),
      ],
    });
  }

  // Artigos de consumidor por cidade (só Bahia: os de fora ficam noindex e sem HTML próprio)
  const localArticles: any[] = (d.localArticles?.localSEOArticles || []).filter((a: any) => a.stateCode === "BA");
  const localBySlug = new Map(localArticles.map((a) => [a.slug, a]));
  for (const a of localArticles) {
    const route = `/artigos/consumidor/${a.slug}`;
    const c = a.content || {};
    const faq: Faq[] = (c.faqs || []).map((f: any) => ({ q: f.question, a: f.answer }));
    const consumerKey = `consumidor-${a.citySlug}`;
    pages.push({
      route,
      ogType: "article",
      title: a.metaTitle || a.title,
      description: a.metaDescription || a.excerpt,
      h1: a.title,
      intro: c.intro,
      sections: [
        { h2: `Em resumo: ${a.problemLabel} em ${a.cityName}`, paragraphs: [], list: (c.statistics || []).map((s: any) => `${s.value}: ${s.label}`) },
        { h2: `Contexto local: ${a.cityName}`, paragraphs: [c.localContext].filter(Boolean) },
        { h2: "O que fazer: passo a passo", paragraphs: [], list: (c.steps || []).map((s: any) => `${s.title}: ${s.description}`) },
        {
          h2: `Informações úteis em ${a.cityName}`,
          paragraphs: [c.localInfo?.procon, c.localInfo?.tribunal, c.localInfo?.additionalInfo].filter(Boolean),
        },
      ],
      faq,
      linkGroups: [
        {
          h2: "Artigos relacionados",
          links: (a.relatedArticles || [])
            .map((s: string) => localBySlug.get(s))
            .filter(Boolean)
            .map((o: any) => ({ href: `/artigos/consumidor/${o.slug}`, label: o.title })),
        },
      ],
      links: [
        ...(localPages[consumerKey] ? [{ href: `/advogado-${consumerKey}`, label: localPages[consumerKey].h1 }] : []),
        { href: "/advogado-consumidor", label: "Advogado do consumidor" },
        ...(isIndexable(a.citySlug) ? [{ href: `/advogado/${a.citySlug}`, label: `Advogado em ${a.cityName}` }] : []),
      ],
      jsonLd: articleBundle({ route, title: a.title, description: a.metaDescription || a.excerpt, date: a.updatedAt }, faq, [
        home,
        { name: "Artigos", path: "/artigos" },
        { name: "Consumidor", path: "/artigos/consumidor" },
        { name: a.title, path: route },
      ]),
    });
  }

  // Calculadoras ativas (as de calculator-config.ts) com a descrição, itens e perguntas de calculator-schemas.ts
  const calcInfo: Record<string, any> = d.calcInfo?.calculatorInfo || {};
  const calcSchemas: any[] = Object.values(d.calcSchemas?.calculatorSchemas || {});
  const calcRoutes = Object.values(calcInfo).map((c: any) => c.url as string);
  for (const route of calcRoutes) {
    const info = Object.values(calcInfo).find((c: any) => c.url === route) as any;
    const s = calcSchemas.find((x) => x.url === abs(route));
    if (!s) continue;
    const faq: Faq[] = (s.faqs || []).map((f: any) => ({ q: f.question, a: f.answer }));
    const area = s.category || info?.area;
    pages.push({
      route,
      title: `${s.name} | ${BRAND}`,
      description: s.description,
      h1: s.name,
      intro: s.description,
      sections: [{ h2: "O que a calculadora considera", paragraphs: [], list: s.features || [] }],
      faq,
      links: [
        ...(guideSlugs.has(area) ? [{ href: `/guia/${area}`, label: "Guia completo da área" }] : []),
        { href: "/calculadoras", label: "Todas as calculadoras" },
      ],
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: s.name,
          url: abs(route),
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Any",
          inLanguage: "pt-BR",
          offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
        },
        ...(faq.length ? [faqLd(faq)] : []),
        breadcrumb([home, { name: "Calculadoras", path: "/calculadoras" }, { name: s.name, path: route }]),
      ],
    });
  }
  if (calcRoutes.length) {
    pages.push({
      route: "/calculadoras",
      title: "Calculadoras de Direitos | Calcule Grátis suas Verbas",
      description:
        "Calculadoras gratuitas de rescisão, horas extras, FGTS, seguro-desemprego, pensão, aposentadoria e outras, com os valores do ano e a regra da lei.",
      h1: "Calculadoras de direitos",
      linkGroups: [
        {
          h2: "Calculadoras",
          links: Object.values(calcInfo).map((c: any) => ({ href: c.url, label: calcSchemas.find((x) => x.url === abs(c.url))?.name || c.title })),
        },
      ],
      jsonLd: [breadcrumb([home, { name: "Calculadoras", path: "/calculadoras" }])],
    });
  }

  // Páginas com o texto dentro do componente (lido do arquivo no build)
  const builtRoutes = new Set(pages.map((p) => p.route));
  for (const c of COMPONENT_PAGES) {
    if (builtRoutes.has(c.route)) continue;
    const info = extractComponentPage(d.componentSources?.[c.route] || "");
    if (!info) {
      console.warn(`[static-seo] aviso: ${c.route} sem título/descrição legíveis em ${c.file}; fica sem HTML estático.`);
      continue;
    }
    const isService = c.area !== "institucional" && c.area !== "calc";
    pages.push({
      route: c.route,
      title: info.title,
      description: info.description,
      h1: info.h1,
      intro: info.intro !== info.h1 ? info.intro : undefined,
      faq: info.faq,
      links: AREA_LINKS[c.area] || [],
      robots: info.noindex ? "noindex, follow" : undefined,
      jsonLd: [
        ...(isService
          ? [{ "@context": "https://schema.org", ...org, "@id": `${abs(c.route)}#legalservice`, description: info.description, areaServed: { "@type": "State", name: "Bahia" } }]
          : []),
        ...(c.route === AUTHOR_ROUTE
          ? [{
              "@context": "https://schema.org",
              "@type": "ProfilePage",
              "@id": abs(c.route),
              url: abs(c.route),
              name: info.title,
              inLanguage: "pt-BR",
              mainEntity: {
                ...AUTHOR_PERSON,
                description: info.description,
                worksFor: { "@type": "LegalService", "@id": `${SITE}/#legalservice`, name: BRAND, url: `${SITE}/` },
              },
            }]
          : []),
        ...(info.faq.length ? [faqLd(info.faq)] : []),
        breadcrumb([home, { name: info.h1, path: c.route }]),
      ],
    });
  }

  return pages.filter((p) => p.title && p.h1);
}

/** Endereços que só redirecionam (artigos fundidos + rotas antigas): HTML mínimo com canonical e refresh. */
function buildRedirects(d: Awaited<ReturnType<typeof loadData>>): { from: string; to: string }[] {
  const list: { from: string; to: string }[] = [
    ...(d.redirects?.articleRedirects || []),
    ...(d.routeRedirects?.routeRedirects || []),
  ];
  return list.filter((r) => r.from && r.to && r.from !== r.to && r.from !== "/");
}

function renderRedirect(r: { from: string; to: string }): string {
  const to = abs(r.to);
  return [
    `<!doctype html>`,
    `<html lang="pt-BR">`,
    `<head>`,
    `<meta charset="utf-8" />`,
    `<title>Página movida | ${esc(BRAND)}</title>`,
    `<link rel="canonical" href="${esc(to)}" />`,
    `<meta http-equiv="refresh" content="0; url=${esc(r.to)}" />`,
    `</head>`,
    `<body><p>Esta página mudou de endereço: <a href="${esc(r.to)}">${esc(to)}</a></p></body>`,
    `</html>`,
  ].join("\n");
}

export default function staticSeo(): Plugin {
  let config: ResolvedConfig;
  return {
    name: "static-seo",
    apply: "build",
    configResolved(c) {
      config = c;
    },
    async closeBundle() {
      if (config.build.ssr) return;
      const outDir = path.resolve(config.root, config.build.outDir);
      const indexPath = path.join(outDir, "index.html");
      if (!fs.existsSync(indexPath)) return;
      try {
        const base = fs.readFileSync(indexPath, "utf8");
        const unent = (s: string) => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
        const baseTitle = unent(base.match(/<title>([\s\S]*?)<\/title>/i)?.[1]?.trim() || BRAND);
        const baseDesc = unent(base.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] || "");
        const data = await loadData(config.root);
        const pages = buildPages(data, baseTitle, baseDesc);
        let n = 0;
        for (const p of pages) {
          try {
            const file = p.route === "/" ? indexPath : path.join(outDir, p.route.replace(/^\//, ""), "index.html");
            fs.mkdirSync(path.dirname(file), { recursive: true });
            fs.writeFileSync(file, renderHtml(base, p), "utf8");
            n++;
          } catch (e) {
            console.warn(`[static-seo] aviso: falhou ${p.route}:`, (e as Error)?.message);
          }
        }
        const built = new Set(pages.map((p) => p.route));
        let nr = 0;
        for (const r of buildRedirects(data)) {
          if (built.has(r.from)) continue; // nunca sobrescreve uma página de verdade
          try {
            const file = path.join(outDir, r.from.replace(/^\//, ""), "index.html");
            fs.mkdirSync(path.dirname(file), { recursive: true });
            fs.writeFileSync(file, renderRedirect(r), "utf8");
            nr++;
          } catch (e) {
            console.warn(`[static-seo] aviso: falhou redirecionamento ${r.from}:`, (e as Error)?.message);
          }
        }
        console.log(`[static-seo] ${n} páginas HTML geradas, ${nr} redirecionamentos.`);
      } catch (e) {
        console.warn("[static-seo] aviso: geração estática falhou, build segue com SPA puro.", e);
      }
    },
  };
}

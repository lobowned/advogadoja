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

const SITE = "https://riccio-advocacia.lovable.app";
const OG_IMAGE = `${SITE}/og-image.png`;
const BRAND = "Riccio Advocacia";
const LAWYER = "Gilberto Riccio";
const OAB = "OAB/BA 46.638";
const WHATSAPP = "5571997036269";

type Faq = { q: string; a: string };
type Crumb = { name: string; path: string };
type Page = {
  route: string;
  title: string;
  description: string;
  h1: string;
  intro?: string;
  sections?: { h2: string; paragraphs: string[]; list?: string[] }[];
  faq?: Faq[];
  links?: { href: string; label: string }[];
  jsonLd: object[];
  ogType?: "website" | "article";
  /** dist/index.html também é o fallback de rotas sem HTML próprio: sem canonical/og:url ali. */
  noCanonical?: boolean;
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
    author: { "@type": "Person", name: LAWYER, jobTitle: `Advogado ${OAB}` },
    publisher: { "@type": "Organization", name: BRAND, logo: { "@type": "ImageObject", url: OG_IMAGE } },
  };
}
const articleBundle = (p: Parameters<typeof articleLd>[0], faq: Faq[], crumbs: Crumb[]) =>
  [articleLd(p), ...(faq.length ? [faqLd(faq)] : []), breadcrumb(crumbs)];

function renderBody(p: Page): string {
  const parts: string[] = [`<main>`, `<h1>${esc(p.h1)}</h1>`];
  if (p.intro) parts.push(`<p>${esc(p.intro)}</p>`);
  for (const s of p.sections || []) {
    if (s.h2) parts.push(`<h2>${esc(s.h2)}</h2>`);
    for (const para of s.paragraphs) parts.push(`<p>${esc(para)}</p>`);
    if (s.list?.length) parts.push(`<ul>${s.list.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`);
  }
  if (p.faq?.length) {
    parts.push(`<h2>Perguntas frequentes</h2>`);
    for (const f of p.faq) parts.push(`<h3>${esc(f.q)}</h3><p>${esc(f.a)}</p>`);
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
  const head = [
    `<title>${esc(p.title)}</title>`,
    `<meta data-rh="true" name="description" content="${esc(p.description)}" />`,
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
      c.whenYouHaveRight?.length && { h2: "Quando você tem direito", paragraphs: [], list: c.whenYouHaveRight },
      c.documents?.length && { h2: "Documentos necessários", paragraphs: [], list: c.documents },
      c.deadlines && { h2: "Prazos", paragraphs: [c.deadlines] },
    ].filter(Boolean) as Page["sections"];
    const niche = niches.find((n) => n.id === a.nicheId);
    pages.push({
      route,
      ogType: "article",
      title: a.metaTitle || a.title,
      description: a.metaDescription || a.excerpt,
      h1: a.title,
      intro: c.intro || a.excerpt,
      sections,
      faq,
      links: [{ href: `/artigos/${a.nicheId}`, label: niche?.name || "Artigos" }, { href: "/guias", label: "Guias jurídicos por área" }],
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
  return pages.filter((p) => p.title && p.h1);
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
        console.log(`[static-seo] ${n} páginas HTML geradas.`);
      } catch (e) {
        console.warn("[static-seo] aviso: geração estática falhou, build segue com SPA puro.", e);
      }
    },
  };
}

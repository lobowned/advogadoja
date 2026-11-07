/**
 * Gera public/rss.xml com os artigos mais recentes do site.
 * O RSS ajuda o Google a descobrir novos artigos rapidamente.
 *
 * Para executar: npx tsx scripts/generate-rss.ts
 */
import { blogArticles } from "../src/data/blog-articles";
import { blogPosts } from "../src/data/blog-posts";
import { redirectedPaths } from "../src/data/article-redirects";
import * as fs from "fs";
import * as path from "path";

const SITE = "https://riccioadvocacia.online";
const MAX_ITEMS = 50;

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function pubDate(dateStr: string | undefined): string {
  const iso = (dateStr || "2026-01-01").slice(0, 10);
  const d = new Date(iso + "T12:00:00Z");
  return d.toUTCString();
}

interface Item {
  url: string;
  title: string;
  description: string;
  pubDate: string;
  niche: string;
}

const items: Item[] = [];

for (const a of blogArticles) {
  const path = `/artigos/${a.nicheId === "penal" ? "penal" : a.nicheId}/${a.slug}`;
  if (redirectedPaths.has(path)) continue;
  items.push({
    url: `${SITE}${path}`,
    title: a.metaTitle || a.title,
    description: a.metaDescription || a.excerpt,
    pubDate: pubDate(a.updatedAt),
    niche: a.nicheId,
  });
}

for (const p of blogPosts) {
  const url = `/blog/${p.slug}`;
  if (redirectedPaths.has(url)) continue;
  items.push({
    url: `${SITE}${url}`,
    title: (p as { metaTitle?: string; title: string }).metaTitle || p.title,
    description: (p as { metaDescription?: string; excerpt?: string }).metaDescription || (p as { excerpt?: string }).excerpt || p.title,
    pubDate: pubDate((p as { updatedAt?: string; publishedAt?: string }).updatedAt || (p as { publishedAt?: string }).publishedAt),
    niche: "blog",
  });
}

// mais recentes primeiro
items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
const top = items.slice(0, MAX_ITEMS);

const now = new Date().toUTCString();
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>Riccio Advocacia · Artigos</title>
    <link>${SITE}</link>
    <description>Artigos jurídicos práticos sobre direito trabalhista, previdenciário, de família, do consumidor, cível e criminal, por Dr. Gilberto Riccio (OAB/BA 46.638).</description>
    <language>pt-BR</language>
    <lastBuildDate>${now}</lastBuildDate>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${SITE}/og-image.png</url>
      <title>Riccio Advocacia</title>
      <link>${SITE}</link>
    </image>
${top
  .map(
    (i) => `    <item>
      <title>${esc(i.title)}</title>
      <link>${i.url}</link>
      <guid isPermaLink="true">${i.url}</guid>
      <pubDate>${i.pubDate}</pubDate>
      <category>${esc(i.niche)}</category>
      <dc:creator>Dr. Gilberto Riccio, OAB/BA 46.638</dc:creator>
      <description>${esc(i.description)}</description>
    </item>`,
  )
  .join("\n")}
  </channel>
</rss>
`;

const out = path.resolve(process.cwd(), "public/rss.xml");
fs.writeFileSync(out, xml, "utf8");
console.log(`✅ RSS gerado: ${out}`);
console.log(`📰 ${top.length} itens.`);

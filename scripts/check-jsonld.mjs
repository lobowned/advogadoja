// Confere os dados estruturados (JSON-LD) do HTML gerado em dist/.
// Uso: node scripts/check-jsonld.mjs   (depois de `npx vite build`)
// Aponta JSON inválido, campos que o Google exige faltando, imagem SVG e tipos repetidos na mesma página.
import fs from "node:fs";
import path from "node:path";

const DIST = path.resolve("dist");
const files = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === "index.html") files.push(p);
  }
})(DIST);

const problems = new Map(); // problema -> [rotas]
const typeCount = new Map();
const add = (msg, route) => {
  if (!problems.has(msg)) problems.set(msg, []);
  problems.get(msg).push(route);
};

const flat = (node, out = []) => {
  if (Array.isArray(node)) node.forEach((n) => flat(n, out));
  else if (node && typeof node === "object") {
    if (node["@graph"]) flat(node["@graph"], out);
    else out.push(node);
  }
  return out;
};

const isAbs = (u) => typeof u === "string" && /^https:\/\//.test(u);

for (const f of files) {
  const html = fs.readFileSync(f, "utf8");
  const route = "/" + path.relative(DIST, path.dirname(f)).split(path.sep).join("/");
  if (/http-equiv="refresh"/i.test(html)) continue; // redirecionamento
  const blocks = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].map((m) => m[1]);
  if (!blocks.length) { add("página sem JSON-LD", route); continue; }
  const seen = new Map();
  for (const b of blocks) {
    let data;
    try { data = JSON.parse(b); } catch { add("JSON-LD inválido (não faz parse)", route); continue; }
    for (const n of flat(data)) {
      const t = [].concat(n["@type"] || "sem-tipo").join(",");
      typeCount.set(t, (typeCount.get(t) || 0) + 1);
      seen.set(t, (seen.get(t) || 0) + 1);
      if (t === "Article" || t === "BlogPosting" || t === "NewsArticle") {
        if (!n.headline) add(`${t} sem headline`, route);
        else if (n.headline.length > 110) add(`${t} com headline > 110 caracteres`, route);
        if (!n.image) add(`${t} sem image`, route);
        if (!n.datePublished) add(`${t} sem datePublished`, route);
        if (!n.author || !n.author.name) add(`${t} sem author.name`, route);
        else if (!n.author.url) add(`${t} com autor sem url`, route);
      }
      if (t === "FAQPage") {
        const q = [].concat(n.mainEntity || []);
        if (!q.length) add("FAQPage sem perguntas", route);
        for (const x of q) if (!x.name || !x.acceptedAnswer || !x.acceptedAnswer.text) add("FAQPage com pergunta incompleta", route);
      }
      if (t === "BreadcrumbList") {
        const it = [].concat(n.itemListElement || []);
        it.forEach((x, i) => {
          if (x.position !== i + 1) add("BreadcrumbList com posição fora de ordem", route);
          if (i < it.length - 1 && !isAbs(x.item)) add("BreadcrumbList com item sem URL absoluta", route);
        });
      }
      if (/LocalBusiness|LegalService|Attorney|Organization/.test(t)) {
        if (!n.name) add(`${t} sem name`, route);
        const img = typeof n.image === "string" ? n.image : n.image && n.image.url;
        // SVG é aceito pelo Google; o ícone do site é que é fraco como "imagem do negócio"
        if (img && /favicon/i.test(img)) add(`${t} usa o ícone do site como imagem (fraca)`, route);
        if (n.priceRange) add(`${t} com priceRange`, route);
        if (n.aggregateRating || n.review) add(`${t} com avaliação/nota (proibido p/ advogado e arriscado)`, route);
      }
      if (t === "ProfilePage" && (!n.mainEntity || !n.mainEntity.name)) add("ProfilePage sem mainEntity.name", route);
    }
  }
  for (const [t, c] of seen) if (c > 1 && ["FAQPage", "BreadcrumbList", "Article", "ProfilePage"].includes(t)) add(`${t} repetido na mesma página`, route);
}

console.log(`Páginas lidas: ${files.length}`);
console.log("Tipos encontrados:", [...typeCount].map(([t, c]) => `${t}=${c}`).join("  "));
if (!problems.size) console.log("Nenhum problema.");
for (const [msg, routes] of problems) {
  console.log(`- ${msg}: ${routes.length} página(s) ex.: ${routes.slice(0, 4).join(", ")}`);
}

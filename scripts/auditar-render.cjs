/**
 * Confere o que o Google vê DEPOIS do JavaScript. O HTML pronto (vite-plugin-static-seo) traz canonical,
 * título e robots certos, mas o Helmet de cada página troca essas tags quando o app carrega; foi assim que
 * 6 páginas de liminar passaram a apontar para advogadoja.com sem aparecer no HTML.
 *
 * Abre cada endereço do sitemap no Chrome sem janela, sem contar visita (bloqueia GTM, Google Ads e o painel
 * de visitas do Lovable), e lista: canonical diferente do endereço, mais de um canonical, noindex,
 * redirecionamento feito pelo navegador, título igual ao da home e página sem h1.
 *
 * Uso: node scripts/auditar-render.cjs [base] [limite]
 *   base   padrão https://riccioadvocacia.online (os caminhos vêm de public/sitemap.xml)
 *   limite quantos endereços abrir (padrão: todos)
 * Precisa do Chrome instalado (ou CHROME_PATH) e do puppeteer-core (do projeto ou do cache do npx).
 */
const fs = require("fs");
const path = require("path");
const os = require("os");

const BASE = (process.argv[2] || "https://riccioadvocacia.online").replace(/\/$/, "");
// Domínio que o canonical deve ter (permite testar uma cópia local do site com o canonical de produção).
const SITE = (process.env.SITE || "https://riccioadvocacia.online").replace(/\/$/, "");
const LIMIT = Number(process.argv[3]) || Infinity;
const CONCURRENCY = 4;
const BLOCK = /googletagmanager|google-analytics|googleadservices|doubleclick|facebook|connect\.facebook|\/~flock\.js|\/~api\/analytics|\/__l5e\//i;

function loadPuppeteer() {
  try {
    return require("puppeteer-core");
  } catch {}
  const cache = path.join(process.env.LOCALAPPDATA || path.join(os.homedir(), "AppData", "Local"), "npm-cache", "_npx");
  for (const d of fs.existsSync(cache) ? fs.readdirSync(cache) : []) {
    const p = path.join(cache, d, "node_modules", "puppeteer-core");
    if (fs.existsSync(p)) {
      try {
        return require(p);
      } catch {}
    }
  }
  throw new Error("puppeteer-core não encontrado no projeto nem no cache do npx.");
}

function chromePath() {
  const options = [
    process.env.CHROME_PATH,
    "C:/Program Files/Google/Chrome/Application/chrome.exe",
    "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
    "/usr/bin/google-chrome",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ].filter(Boolean);
  const found = options.find((p) => fs.existsSync(p));
  if (!found) throw new Error("Chrome não encontrado; defina CHROME_PATH.");
  return found;
}

const norm = (u) => {
  try {
    const x = new URL(u);
    return (x.origin + x.pathname).replace(/\/$/, "");
  } catch {
    return String(u);
  }
};

async function main() {
  const sitemap = fs.readFileSync(process.env.SITEMAP || path.join(__dirname, "..", "public", "sitemap.xml"), "utf8");
  const paths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname).slice(0, LIMIT);
  const puppeteer = loadPuppeteer();
  // Um Chrome por trabalhador: aba em segundo plano não roda requestAnimationFrame, e o Helmet só troca
  // canonical e título num quadro de animação; com várias abas no mesmo Chrome a leitura sai errada.
  const launch = () =>
    puppeteer.launch({
      executablePath: chromePath(),
      headless: true,
      args: ["--no-first-run", "--no-default-browser-check", "--disable-renderer-backgrounding", "--disable-background-timer-throttling", "--disable-backgrounding-occluded-windows"],
    });
  const homeTitle = await (async () => {
    const browser = await launch();
    const page = (await browser.pages())[0] || (await browser.newPage());
    await page.setRequestInterception(true);
    page.on("request", (r) => (BLOCK.test(r.url()) ? r.abort() : r.continue()));
    await page.goto(BASE + "/", { waitUntil: "networkidle0", timeout: 45000 }).catch(() => {});
    await new Promise((r) => setTimeout(r, 1500));
    const t = await page.title();
    await browser.close();
    return t;
  })();

  const results = [];
  let next = 0;
  async function worker() {
    const browser = await launch();
    const page = (await browser.pages())[0] || (await browser.newPage());
    await page.setRequestInterception(true);
    page.on("request", (r) => {
      const t = r.resourceType();
      if (BLOCK.test(r.url()) || t === "image" || t === "media" || t === "font") r.abort();
      else r.continue();
    });
    while (next < paths.length) {
      const p = paths[next++];
      const url = BASE + p;
      try {
        await page.goto(url, { waitUntil: "networkidle0", timeout: 45000 });
        const read = () =>
          page.evaluate(() => ({
            href: location.href,
            canon: [...document.querySelectorAll('link[rel="canonical"]')].map((l) => l.href),
            robots: [...document.querySelectorAll('meta[name="robots"]')].map((m) => m.content),
            title: document.title,
            h1: [...document.querySelectorAll("h1")].map((h) => h.textContent.trim()).filter(Boolean),
          }));
        // O HTML pronto fica dentro de #root (main.pre-render) até o React montar a rota; depois vêm a página
        // carregada sob demanda e o Helmet. Ler antes disso mostra as tags do HTML pronto, não as finais.
        await page.waitForFunction(() => !document.querySelector("main.pre-render"), { timeout: 15000 }).catch(() => {});
        await page.waitForNetworkIdle({ idleTime: 500, timeout: 15000 }).catch(() => {});
        await new Promise((r) => setTimeout(r, 1200));
        let info = await read();
        // Página pesada ainda montando: espera mais um pouco antes de acusar.
        if (info.canon.length !== 1 || !info.h1.length) {
          await new Promise((r) => setTimeout(r, 3000));
          info = await read();
        }
        const problems = [];
        if (info.canon.length !== 1) problems.push(`${info.canon.length} canonicals`);
        if (info.canon.length && norm(info.canon[0]) !== norm(SITE + p)) problems.push(`canonical → ${info.canon[0]}`);
        if (info.robots.some((r) => /noindex/i.test(r))) problems.push(`robots ${info.robots.join(" | ")}`);
        if (new URL(info.href).pathname.replace(/\/$/, "") !== p.replace(/\/$/, "")) problems.push(`navegador levou para ${info.href}`);
        if (p !== "/" && info.title === homeTitle) problems.push("título da home");
        if (!info.h1.length) problems.push("sem h1");
        results.push({ path: p, ...info, problems });
      } catch (e) {
        results.push({ path: p, problems: [`erro: ${e.message.split("\n")[0]}`] });
      }
    }
    await browser.close();
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, worker));

  const bad = results.filter((r) => r.problems.length);
  const out = path.join(os.tmpdir(), "auditoria-render.json");
  fs.writeFileSync(out, JSON.stringify(results, null, 2));
  console.log(`Abertas: ${results.length}. Com problema: ${bad.length}. Detalhes: ${out}`);
  for (const r of bad) console.log(`- ${r.path}: ${r.problems.join("; ")}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

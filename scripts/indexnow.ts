/**
 * Avisa Bing, Yandex e outros buscadores do protocolo IndexNow sobre as páginas do site.
 * (O Bing também abastece o ChatGPT Search e o DuckDuckGo.)
 *
 * Só funciona com o site PUBLICADO: o arquivo da chave (public/<chave>.txt) precisa
 * estar no ar em https://riccio-advocacia.lovable.app/<chave>.txt.
 *
 * Uso:
 *   npx tsx scripts/indexnow.ts            -> envia todas as URLs do sitemap
 *   npx tsx scripts/indexnow.ts /guias ... -> envia só os caminhos informados
 */
import * as fs from "fs";
import * as path from "path";

const SITE = "https://riccio-advocacia.lovable.app";
const HOST = new URL(SITE).host;

const keyFile = fs.readdirSync(path.resolve(process.cwd(), "public")).find((f) => /^[0-9a-f]{32}\.txt$/.test(f));
if (!keyFile) throw new Error("Chave IndexNow não encontrada em public/<chave>.txt");
const KEY = keyFile.replace(".txt", "");
const KEY_LOCATION = `${SITE}/${keyFile}`;

async function main() {
  const args = process.argv.slice(2);
  let urls: string[];
  if (args.length) {
    urls = args.map((p) => (p.startsWith("http") ? p : `${SITE}${p.startsWith("/") ? p : `/${p}`}`));
  } else {
    const xml = fs.readFileSync(path.resolve(process.cwd(), "public/sitemap.xml"), "utf8");
    urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  }

  // Confere se a chave está no ar antes de enviar (senão o IndexNow recusa)
  const check = await fetch(KEY_LOCATION).then((r) => (r.ok ? r.text() : "")).catch(() => "");
  if (check.trim() !== KEY) {
    console.error(`A chave ainda não está no ar em ${KEY_LOCATION}. Publique o site e rode de novo.`);
    process.exit(1);
  }

  // O protocolo aceita até 10.000 URLs por envio
  for (let i = 0; i < urls.length; i += 10000) {
    const urlList = urls.slice(i, i + 10000);
    const res = await fetch("https://api.indexnow.org/indexnow", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
    });
    console.log(`IndexNow: ${urlList.length} URLs -> HTTP ${res.status} ${res.statusText}`);
    if (res.status >= 400) console.log(await res.text());
  }
}

main();

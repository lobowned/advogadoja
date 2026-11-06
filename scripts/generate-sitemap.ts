/**
 * Script para gerar sitemap.xml automaticamente
 * Inclui TODAS as páginas dinâmicas do projeto:
 * - Páginas estáticas
 * - Calculadoras
 * - Landing pages de nicho
 * - Landing pages de cidades
 * - Landing pages cidade + nicho
 * - Artigos do blog
 * - FAQs programáticas
 * - Artigos SEO local
 * - Consumer landing pages
 * - Hub pages regionais
 * 
 * Para executar: npx tsx scripts/generate-sitemap.ts
 */

import { programmaticFAQs } from '../src/data/programmatic-faqs';
import { blogArticles } from '../src/data/blog-articles';
import { blogPosts } from '../src/data/blog-posts';
import { brazilianCities, isCityIndexable } from '../src/data/cities';
import { legalNiches } from '../src/data/legal-niches';
import { localSEOArticles, isIndexableLocalSEOArticle } from '../src/data/local-seo-articles';
import { redirectedPaths } from '../src/data/article-redirects';
import * as fs from 'fs';
import * as path from 'path';
import { pathToFileURL } from 'url';

const BASE_URL = 'https://riccio-advocacia.lovable.app';
const TODAY = new Date().toISOString().split('T')[0];
// lastmod só quando a data é real (updatedAt/publishedAt do conteúdo). Sem data conhecida, omitimos a tag
// em vez de mentir "hoje" para o Google. Páginas estáticas: sem lastmod.
const UNKNOWN = '';
function realDate(...cands: (string | undefined | null)[]): string {
  for (const c of cands) {
    if (c && /^\d{4}-\d{2}-\d{2}/.test(c)) return c.slice(0, 10);
  }
  return UNKNOWN;
}


interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

// ============================================
// STATIC PAGES
// ============================================
const staticPages: SitemapURL[] = [
  { loc: '/', lastmod: UNKNOWN, changefreq: 'weekly', priority: 1.0 },
  { loc: '/criminal', lastmod: UNKNOWN, changefreq: 'weekly', priority: 0.95 },
  { loc: '/advogado-trabalhista-online', lastmod: UNKNOWN, changefreq: 'weekly', priority: 0.95 },
  { loc: '/prev', lastmod: UNKNOWN, changefreq: 'weekly', priority: 0.95 },
  { loc: '/prev/aposentadorias', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.85 },
  { loc: '/prev/aposentadoria-por-idade', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.85 },
  { loc: '/prev/auxilio-doenca', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.85 },
  { loc: '/prev/invalidez', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.85 },
  { loc: '/prev/bpc-loas', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.85 },
  { loc: '/prev/salario-maternidade', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.85 },
  { loc: '/prev/sobre', lastmod: UNKNOWN, changefreq: 'yearly', priority: 0.5 },
  { loc: '/prev/contato', lastmod: UNKNOWN, changefreq: 'yearly', priority: 0.5 },
  { loc: '/artigos', lastmod: UNKNOWN, changefreq: 'weekly', priority: 0.8 },
  { loc: '/blog', lastmod: UNKNOWN, changefreq: 'weekly', priority: 0.8 },
  { loc: '/perguntas', lastmod: UNKNOWN, changefreq: 'weekly', priority: 0.7 },
  { loc: '/calculadoras', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.7 },
  { loc: '/privacidade', lastmod: UNKNOWN, changefreq: 'yearly', priority: 0.2 },
  { loc: '/termos-de-uso', lastmod: UNKNOWN, changefreq: 'yearly', priority: 0.2 },
  { loc: '/advogado-bahia', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
];

// Só as cidades onde o escritório atende de fato; o resto fica fora do sitemap.
const LOCAL_CITIES = ['salvador', 'camacari', 'lauro-de-freitas', 'feira-de-santana', 'vitoria-da-conquista', 'ilheus', 'itabuna', 'juazeiro', 'porto-seguro', 'barreiras'];

// ============================================
// CALCULATORS
// ============================================
const calculators: SitemapURL[] = [
  { loc: '/calculadora-trabalhista', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-horas-extras', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-insalubridade', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-seguro-desemprego', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-fgts', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-pensao', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-partilha-bens', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-aposentadoria', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-auxilio-doenca', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-bpc-loas', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-pensao-morte', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-atualizacao-divida', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-aluguel-atrasado', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  // Consumer Calculators
  { loc: '/calculadora-devolucao-dobro', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
];

// ============================================
// CONSUMER PROBLEM LANDING PAGES
// ============================================
const consumerLandingPages: SitemapURL[] = [
  { loc: '/advogado-problemas-voo', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  { loc: '/advogado-negativacao-indevida', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  { loc: '/advogado-plano-saude-cobertura-negada', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  { loc: '/advogado-cobranca-indevida', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  { loc: '/advogado-produto-defeituoso', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  { loc: '/fraude-bancaria', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  { loc: '/advogado-cartao-consignado', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  { loc: '/liminar-cirurgia-negada', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.8 },
  { loc: '/liminar-cirurgia-bariatrica', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.75 },
  { loc: '/liminar-tratamento-cancer', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.75 },
  { loc: '/liminar-cirurgia-ortopedica', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.75 },
  { loc: '/liminar-cirurgia-cardiaca', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.75 },
  { loc: '/liminar-neurocirurgia', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.75 },
  { loc: '/liminar-cirurgia-olhos', lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.75 },
];

// ============================================
// NICHE LANDING PAGES
// ============================================
function generateNicheUrls(): SitemapURL[] {
  return legalNiches.map(niche => ({
    loc: `/advogado-${niche.id === 'penal' ? 'criminal' : niche.id}`,
    lastmod: UNKNOWN,
    changefreq: 'weekly' as const,
    priority: 0.95,
  }));
}

// ============================================
// CITY LANDING PAGES
// ============================================
function generateCityUrls(): SitemapURL[] {
  // Todas as cidades indexáveis (as mesmas que a página marca sem noindex), não só as 10 com página por área
  return brazilianCities.filter(c => isCityIndexable(c.slug)).map(city => ({
    loc: `/advogado/${city.slug}`,
    lastmod: UNKNOWN,
    changefreq: 'weekly' as const,
    priority: 0.85,
  }));
}

// ============================================
// CITY + NICHE LANDING PAGES (Combinações)
// ============================================
function generateCityNicheUrls(): SitemapURL[] {
  // Só as páginas com rota explícita no App.tsx: o padrão /advogado-:nicho-:cidade não casa no React Router v6.
  // Salvador/Camaçari/Lauro ganham também a área de consumidor; as demais cidades cobrem só as 4 áreas principais.
  const coreCities = ['salvador', 'camacari', 'lauro-de-freitas'];
  const extendedCities = [
    'feira-de-santana',
    'vitoria-da-conquista',
    'ilheus',
    'itabuna',
    'juazeiro',
    'porto-seguro',
    'barreiras',
  ];
  const coreNiches = ['criminal', 'previdenciario', 'trabalhista', 'familia'];
  const urls: SitemapURL[] = [];
  for (const n of coreNiches) {
    for (const c of coreCities) {
      urls.push({ loc: `/advogado-${n}-${c}`, lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.95 });
    }
    for (const c of extendedCities) {
      urls.push({ loc: `/advogado-${n}-${c}`, lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.95 });
    }
  }
  // Consumidor existe só nas 3 cidades principais por enquanto.
  for (const c of coreCities) {
    urls.push({ loc: `/advogado-consumidor-${c}`, lastmod: UNKNOWN, changefreq: 'monthly', priority: 0.95 });
  }
  return urls;
}

// ============================================
// BLOG ARTICLES
// ============================================
function generateArticleUrls(): SitemapURL[] {
  // Artigos fundidos viram redirect: nunca entram no sitemap.
  return blogArticles.filter(a => !redirectedPaths.has(`/artigos/${a.nicheId}/${a.slug}`)).map(article => ({
    loc: `/artigos/${article.nicheId}/${article.slug}`,
    lastmod: realDate(article.updatedAt, (article as { publishedAt?: string }).publishedAt),
    changefreq: 'monthly' as const,
    priority: 0.7,
  }));
}

// ============================================
// PROGRAMMATIC FAQs
// ============================================
function generateFAQUrls(): SitemapURL[] {
  return programmaticFAQs.map(faq => ({
    loc: `/perguntas/${faq.slug}`,
    lastmod: UNKNOWN,
    changefreq: 'monthly' as const,
    priority: 0.65,
  }));
}

// ============================================
// LOCAL SEO ARTICLES
// ============================================
function generateLocalSEOArticleUrls(): SitemapURL[] {
  // Fora da Bahia: noindex,follow na página e fora do sitemap.
  return localSEOArticles.filter(isIndexableLocalSEOArticle).map(article => ({
    loc: `/artigos/consumidor/${article.slug}`,
    lastmod: realDate(article.updatedAt, (article as { publishedAt?: string }).publishedAt),
    changefreq: 'monthly' as const,
    priority: 0.8,
  }));
}

// ============================================
// CITY CONSUMER LANDING PAGES
// ============================================
function generateCityConsumerUrls(): SitemapURL[] {
  // Generate consumer-specific city landing pages
  return LOCAL_CITIES.map(city => ({
    loc: `/advogado-consumidor-${city}`,
    lastmod: UNKNOWN,
    changefreq: 'weekly' as const,
    priority: 0.8,
  }));
}

// ============================================
// NEW BLOG POSTS (blog-posts.ts)
// ============================================
function generateBlogPostUrls(): SitemapURL[] {
  return blogPosts.filter(p => !redirectedPaths.has(`/blog/${p.slug}`)).map(post => ({
    loc: `/blog/${post.slug}`,
    lastmod: realDate(post.updatedAt, (post as { publishedAt?: string }).publishedAt),
    changefreq: 'weekly' as const,
    priority: 0.8,
  }));
}

// ============================================
// CATEGORY PAGES
// ============================================
function generateCategoryUrls(): SitemapURL[] {
  const categories = ['trabalhista', 'familia', 'previdenciario', 'civil', 'consumidor', 'penal'];
  const urls: SitemapURL[] = [];
  
  for (const category of categories) {
    urls.push({
      loc: `/artigos/categoria/${category}`,
      lastmod: UNKNOWN,
      changefreq: 'weekly' as const,
      priority: 0.6,
    });
    urls.push({
      loc: `/noticias/${category}`,
      lastmod: UNKNOWN,
      changefreq: 'daily' as const,
      priority: 0.6,
    });
  }
  
  return urls;
}

// ============================================
// XML GENERATION
// ============================================
function generateUrlEntry(url: SitemapURL): string {
  return `  <url>
    <loc>${BASE_URL}${url.loc}</loc>${url.lastmod ? `
    <lastmod>${url.lastmod}</lastmod>` : ''}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
}

function sectionHeader(title: string, count: number): string {
  return `
  <!-- ===== ${title} (${count} URLs) ===== -->`;
}

// ============================================
// GUIAS PILARES (/guia/:slug) — opcional: só entra se src/data/guias.ts existir
// ============================================
async function generateGuiaUrls(): Promise<SitemapURL[]> {
  const guiasPath = path.resolve(process.cwd(), 'src/data/guias.ts');
  if (!fs.existsSync(guiasPath)) return [];
  try {
    const mod = await import(pathToFileURL(guiasPath).href);
    const list: Array<{ slug: string; updatedAt?: string; publishedAt?: string }> =
      mod.guias || mod.default || Object.values(mod).find(Array.isArray) || [];
    return list.filter(g => g && g.slug).map(g => ({
      loc: `/guia/${g.slug}`,
      lastmod: realDate(g.updatedAt, g.publishedAt),
      changefreq: 'monthly' as const,
      priority: 0.9,
    }));
  } catch (e) {
    console.warn('⚠️  src/data/guias.ts existe mas não carregou; guias fora do sitemap.', e);
    return [];
  }
}

function generateSitemap(guiaUrls: SitemapURL[]): string {
  const nicheUrls = generateNicheUrls();
  const cityUrls = generateCityUrls();
  const cityNicheUrls = generateCityNicheUrls();
  const articleUrls = generateArticleUrls();
  const faqUrls = generateFAQUrls();
  const categoryUrls = generateCategoryUrls();
  const blogPostUrls = generateBlogPostUrls();
  const localSEOUrls = generateLocalSEOArticleUrls();
  const cityConsumerUrls = generateCityConsumerUrls();
  
  const sections = [
    { title: 'PÁGINAS ESTÁTICAS', urls: staticPages },
    { title: 'GUIAS PILARES', urls: guiaUrls },
    { title: 'CALCULADORAS JURÍDICAS', urls: calculators },
    { title: 'LANDING PAGES CONSUMIDOR', urls: consumerLandingPages },
    { title: 'LANDING PAGES POR NICHO', urls: nicheUrls },
    { title: 'LANDING PAGES POR CIDADE', urls: cityUrls },
    { title: 'LANDING PAGES CIDADE + NICHO', urls: cityNicheUrls },
    { title: 'ARTIGOS SEO LOCAL', urls: localSEOUrls },
    { title: 'ARTIGOS DO BLOG (LEGACY)', urls: articleUrls },
    { title: 'BLOG POSTS (NOVOS)', urls: blogPostUrls },
    { title: 'PERGUNTAS FREQUENTES (FAQs)', urls: faqUrls },
  ];

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  let totalUrls = 0;
  
  for (const { title, urls } of sections) {
    xml += sectionHeader(title, urls.length);
    xml += '\n' + urls.map(generateUrlEntry).join('\n');
    totalUrls += urls.length;
  }

  xml += `\n</urlset>`;

  // Print statistics
  console.log('\n📊 Estatísticas do Sitemap:');
  console.log('━'.repeat(50));
  for (const { title, urls } of sections) {
    console.log(`  ${title.padEnd(35)} ${urls.length.toString().padStart(4)} URLs`);
  }
  console.log('━'.repeat(50));
  console.log(`  ${'TOTAL'.padEnd(35)} ${totalUrls.toString().padStart(4)} URLs\n`);

  return xml;
}

// ============================================
// EXECUTE
// ============================================
const sitemap = generateSitemap(await generateGuiaUrls());
const outputPath = path.resolve(process.cwd(), 'public/sitemap.xml');

fs.writeFileSync(outputPath, sitemap, 'utf-8');

console.log(`✅ Sitemap gerado com sucesso!`);
console.log(`📁 Arquivo: ${outputPath}`);
console.log(`📅 Data: ${TODAY}`);

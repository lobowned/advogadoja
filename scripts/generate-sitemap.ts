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
 * 
 * Para executar: npx tsx scripts/generate-sitemap.ts
 */

import { programmaticFAQs } from '../src/data/programmatic-faqs';
import { blogArticles } from '../src/data/blog-articles';
import { blogPosts } from '../src/data/blog-posts';
import { brazilianCities } from '../src/data/cities';
import { legalNiches } from '../src/data/legal-niches';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://advogadoja.lovable.app';
const TODAY = new Date().toISOString().split('T')[0];

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
  { loc: '/', lastmod: TODAY, changefreq: 'daily', priority: 1.0 },
  { loc: '/artigos', lastmod: TODAY, changefreq: 'daily', priority: 0.9 },
  { loc: '/blog', lastmod: TODAY, changefreq: 'daily', priority: 0.9 },
  { loc: '/perguntas', lastmod: TODAY, changefreq: 'weekly', priority: 0.85 },
  { loc: '/calculadoras', lastmod: TODAY, changefreq: 'weekly', priority: 0.85 },
  { loc: '/noticias', lastmod: TODAY, changefreq: 'daily', priority: 0.8 },
  { loc: '/casos-de-sucesso', lastmod: TODAY, changefreq: 'weekly', priority: 0.7 },
  { loc: '/sitemap', lastmod: TODAY, changefreq: 'weekly', priority: 0.5 },
  { loc: '/privacidade', lastmod: TODAY, changefreq: 'yearly', priority: 0.3 },
  { loc: '/termos-de-uso', lastmod: TODAY, changefreq: 'yearly', priority: 0.3 },
];

// ============================================
// CALCULATORS
// ============================================
const calculators: SitemapURL[] = [
  { loc: '/calculadora-trabalhista', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-horas-extras', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-insalubridade', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-seguro-desemprego', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-fgts', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-pensao', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-partilha-bens', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-inventario', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-aposentadoria', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-auxilio-doenca', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-bpc-loas', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-pensao-morte', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-danos-morais', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-atualizacao-divida', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-aluguel-atrasado', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-dpvat', lastmod: TODAY, changefreq: 'monthly', priority: 0.75 },
];

// ============================================
// NICHE LANDING PAGES
// ============================================
function generateNicheUrls(): SitemapURL[] {
  return legalNiches.map(niche => ({
    loc: `/advogado-${niche.id}`,
    lastmod: TODAY,
    changefreq: 'weekly' as const,
    priority: 0.95,
  }));
}

// ============================================
// CITY LANDING PAGES
// ============================================
function generateCityUrls(): SitemapURL[] {
  return brazilianCities.map(city => ({
    loc: `/advogado/${city.slug}`,
    lastmod: TODAY,
    changefreq: 'weekly' as const,
    priority: 0.85,
  }));
}

// ============================================
// CITY + NICHE LANDING PAGES (Combinações)
// ============================================
function generateCityNicheUrls(): SitemapURL[] {
  const urls: SitemapURL[] = [];
  
  for (const city of brazilianCities) {
    for (const niche of legalNiches) {
      urls.push({
        loc: `/advogado-${niche.id}-${city.slug}`,
        lastmod: TODAY,
        changefreq: 'weekly' as const,
        priority: 0.75,
      });
    }
  }
  
  return urls;
}

// ============================================
// BLOG ARTICLES
// ============================================
function generateArticleUrls(): SitemapURL[] {
  return blogArticles.map(article => ({
    loc: `/artigos/${article.slug}`,
    lastmod: article.publishedAt || TODAY,
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
    lastmod: TODAY,
    changefreq: 'monthly' as const,
    priority: 0.65,
  }));
}

// ============================================
// NEW BLOG POSTS (blog-posts.ts)
// ============================================
function generateBlogPostUrls(): SitemapURL[] {
  return blogPosts.map(post => ({
    loc: `/blog/${post.slug}`,
    lastmod: post.updatedAt || TODAY,
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
      lastmod: TODAY,
      changefreq: 'weekly' as const,
      priority: 0.6,
    });
    urls.push({
      loc: `/noticias/${category}`,
      lastmod: TODAY,
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
    <loc>${BASE_URL}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
}

function sectionHeader(title: string, count: number): string {
  return `
  <!-- ===== ${title} (${count} URLs) ===== -->`;
}

function generateSitemap(): string {
  const nicheUrls = generateNicheUrls();
  const cityUrls = generateCityUrls();
  const cityNicheUrls = generateCityNicheUrls();
  const articleUrls = generateArticleUrls();
  const faqUrls = generateFAQUrls();
  const categoryUrls = generateCategoryUrls();
  
  const blogPostUrls = generateBlogPostUrls();
  
  const sections = [
    { title: 'PÁGINAS ESTÁTICAS', urls: staticPages },
    { title: 'CALCULADORAS JURÍDICAS', urls: calculators },
    { title: 'LANDING PAGES POR NICHO', urls: nicheUrls },
    { title: 'LANDING PAGES POR CIDADE', urls: cityUrls },
    { title: 'LANDING PAGES CIDADE + NICHO', urls: cityNicheUrls },
    { title: 'ARTIGOS DO BLOG (LEGACY)', urls: articleUrls },
    { title: 'BLOG POSTS (NOVOS)', urls: blogPostUrls },
    { title: 'PERGUNTAS FREQUENTES (FAQs)', urls: faqUrls },
    { title: 'PÁGINAS DE CATEGORIA', urls: categoryUrls },
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
const sitemap = generateSitemap();
const outputPath = path.resolve(__dirname, '../public/sitemap.xml');

fs.writeFileSync(outputPath, sitemap, 'utf-8');

console.log(`✅ Sitemap gerado com sucesso!`);
console.log(`📁 Arquivo: ${outputPath}`);
console.log(`📅 Data: ${TODAY}`);

/**
 * Script para gerar sitemap.xml automaticamente
 * Inclui todas as páginas de FAQ programáticas
 * 
 * Para executar: npx tsx scripts/generate-sitemap.ts
 */

import { programmaticFAQs } from '../src/data/programmatic-faqs';
import { blogArticles } from '../src/data/blog-articles';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = 'https://advogadoonline.com.br';
const TODAY = new Date().toISOString().split('T')[0];

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

// Static pages configuration
const staticPages: SitemapURL[] = [
  // Homepage
  { loc: '/', lastmod: TODAY, changefreq: 'daily', priority: 1.0 },
  
  // Main Navigation
  { loc: '/selecionar-nicho', lastmod: TODAY, changefreq: 'monthly', priority: 0.9 },
  { loc: '/artigos', lastmod: TODAY, changefreq: 'daily', priority: 0.9 },
  { loc: '/noticias', lastmod: TODAY, changefreq: 'daily', priority: 0.85 },
  { loc: '/perguntas-frequentes', lastmod: TODAY, changefreq: 'daily', priority: 0.9 },
  { loc: '/calculadoras', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/casos-de-sucesso', lastmod: TODAY, changefreq: 'monthly', priority: 0.7 },
  
  // Legal Pages
  { loc: '/privacidade', lastmod: TODAY, changefreq: 'yearly', priority: 0.3 },
  { loc: '/termos-de-uso', lastmod: TODAY, changefreq: 'yearly', priority: 0.3 },
  
  // Niche Landing Pages
  { loc: '/advogado-trabalhista', lastmod: TODAY, changefreq: 'weekly', priority: 0.95 },
  { loc: '/advogado-familia', lastmod: TODAY, changefreq: 'weekly', priority: 0.95 },
  { loc: '/advogado-civil', lastmod: TODAY, changefreq: 'weekly', priority: 0.95 },
  { loc: '/advogado-previdenciario', lastmod: TODAY, changefreq: 'weekly', priority: 0.95 },
  { loc: '/advogado-criminal', lastmod: TODAY, changefreq: 'weekly', priority: 0.95 },
  { loc: '/advogado-consumidor', lastmod: TODAY, changefreq: 'weekly', priority: 0.95 },
];

// Calculators
const calculators: SitemapURL[] = [
  { loc: '/calculadora-trabalhista', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-pensao', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-aposentadoria', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-danos-morais', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-atualizacao-divida', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-partilha-bens', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-aluguel-atrasado', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-horas-extras', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-seguro-desemprego', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-fgts', lastmod: TODAY, changefreq: 'monthly', priority: 0.85 },
  { loc: '/calculadora-pensao-morte', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-auxilio-doenca', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-bpc-loas', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-inventario', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-insalubridade', lastmod: TODAY, changefreq: 'monthly', priority: 0.8 },
  { loc: '/calculadora-dpvat', lastmod: TODAY, changefreq: 'monthly', priority: 0.75 },
];

// Category pages for articles and news
const niches = ['trabalhista', 'familia', 'civil', 'previdenciario', 'penal', 'consumidor'];

const categoryPages: SitemapURL[] = [
  // Articles by niche
  ...niches.map(niche => ({
    loc: `/artigos/${niche}`,
    lastmod: TODAY,
    changefreq: 'daily' as const,
    priority: 0.85,
  })),
  // News by niche
  ...niches.map(niche => ({
    loc: `/noticias/${niche}`,
    lastmod: TODAY,
    changefreq: 'daily' as const,
    priority: 0.75,
  })),
];

// Generate FAQ URLs from programmatic FAQs
function generateFAQUrls(): SitemapURL[] {
  return programmaticFAQs.map(faq => ({
    loc: `/perguntas/${faq.slug}`,
    lastmod: TODAY,
    changefreq: 'weekly' as const,
    priority: 0.7,
  }));
}

// Generate article URLs from blog articles
function generateArticleUrls(): SitemapURL[] {
  return blogArticles.map(article => ({
    loc: `/artigos/${article.nicheId}/${article.slug}`,
    lastmod: TODAY,
    changefreq: 'monthly' as const,
    priority: 0.8,
  }));
}

// Generate XML for a single URL entry
function generateUrlEntry(url: SitemapURL): string {
  return `  <url>
    <loc>${BASE_URL}${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
}

// Generate section header comment
function sectionHeader(title: string): string {
  return `
  <!-- ============================================ -->
  <!-- ${title} -->
  <!-- ============================================ -->`;
}

// Main function to generate sitemap
function generateSitemap(): string {
  const faqUrls = generateFAQUrls();
  const articleUrls = generateArticleUrls();
  
  const sections = [
    sectionHeader('HOMEPAGE - Highest Priority'),
    staticPages.filter(p => p.loc === '/').map(generateUrlEntry).join('\n'),
    
    sectionHeader('MAIN NAVIGATION PAGES'),
    staticPages.filter(p => ['/selecionar-nicho', '/artigos', '/noticias', '/perguntas-frequentes', '/calculadoras', '/casos-de-sucesso'].includes(p.loc)).map(generateUrlEntry).join('\n'),
    
    sectionHeader('LEGAL PAGES'),
    staticPages.filter(p => ['/privacidade', '/termos-de-uso'].includes(p.loc)).map(generateUrlEntry).join('\n'),
    
    sectionHeader('NICHE LANDING PAGES - High SEO Priority'),
    staticPages.filter(p => p.loc.startsWith('/advogado-')).map(generateUrlEntry).join('\n'),
    
    sectionHeader('CALCULADORAS JURÍDICAS'),
    calculators.map(generateUrlEntry).join('\n'),
    
    sectionHeader('ARTIGOS E NOTÍCIAS POR NICHO'),
    categoryPages.map(generateUrlEntry).join('\n'),
    
    sectionHeader(`PERGUNTAS FREQUENTES (FAQs) - ${faqUrls.length} páginas`),
    faqUrls.map(generateUrlEntry).join('\n'),
    
    sectionHeader(`ARTIGOS INDIVIDUAIS - ${articleUrls.length} páginas`),
    articleUrls.map(generateUrlEntry).join('\n'),
  ];
  
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sections.join('\n')}
</urlset>`;
}

// Execute and save
const sitemap = generateSitemap();
const outputPath = path.resolve(__dirname, '../public/sitemap.xml');

fs.writeFileSync(outputPath, sitemap, 'utf-8');

console.log(`✅ Sitemap generated successfully!`);
console.log(`📍 Output: ${outputPath}`);
console.log(`📊 Stats:`);
console.log(`   - FAQs: ${programmaticFAQs.length} pages`);
console.log(`   - Articles: ${blogArticles.length} pages`);
console.log(`   - Total URLs: ${sitemap.match(/<url>/g)?.length || 0}`);

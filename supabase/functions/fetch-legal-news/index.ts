import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// RSS Feed sources for Brazilian legal news
const RSS_SOURCES = [
  {
    name: 'conjur',
    url: 'https://www.conjur.com.br/rss.xml',
    displayName: 'Consultor Jurídico'
  },
  {
    name: 'tst',
    url: 'https://www.tst.jus.br/rssfeed?p_p_id=101_INSTANCE_0gVA&p_p_lifecycle=0&p_p_state=normal&p_p_mode=view&p_p_col_id=column-2&p_p_col_count=5',
    displayName: 'TST - Tribunal Superior do Trabalho'
  },
  {
    name: 'stf',
    url: 'https://portal.stf.jus.br/rss/noticias.xml',
    displayName: 'STF - Supremo Tribunal Federal'
  },
  {
    name: 'stj',
    url: 'https://www.stj.jus.br/sites/portalp/Noticias/RSS',
    displayName: 'STJ - Superior Tribunal de Justiça'
  }
];

// Keywords for classifying news by legal niche
const NICHE_KEYWORDS: Record<string, string[]> = {
  trabalhista: [
    'trabalhista', 'trabalhador', 'empregado', 'empregador', 'clt', 'trabalho',
    'demissão', 'demitido', 'rescisão', 'fgts', 'férias', 'salário', 'hora extra',
    'adicional noturno', 'insalubridade', 'periculosidade', 'acidente de trabalho',
    'tst', 'justiça do trabalho', 'trt', 'carteira de trabalho', 'justa causa',
    'aviso prévio', 'verbas rescisórias', 'assédio moral', 'dano moral trabalhista',
    'sindicato', 'greve', 'convenção coletiva', 'acordo coletivo', 'piso salarial'
  ],
  familia: [
    'família', 'familiar', 'divórcio', 'separação', 'casamento', 'união estável',
    'pensão alimentícia', 'alimentos', 'guarda', 'visitação', 'alienação parental',
    'adoção', 'tutela', 'curatela', 'inventário', 'herança', 'testamento',
    'partilha de bens', 'regime de bens', 'comunhão', 'filho', 'paternidade',
    'maternidade', 'dna', 'reconhecimento de paternidade', 'vara de família'
  ],
  civil: [
    'civil', 'contrato', 'indenização', 'dano moral', 'dano material',
    'consumidor', 'cdc', 'procon', 'produto defeituoso', 'serviço inadequado',
    'cobrança indevida', 'negativação', 'spc', 'serasa', 'despejo', 'locação',
    'aluguel', 'imóvel', 'propriedade', 'usucapião', 'posse', 'responsabilidade civil',
    'acidente de trânsito', 'seguro', 'obrigação', 'contratual'
  ],
  previdenciario: [
    'previdenciário', 'previdência', 'inss', 'aposentadoria', 'aposentado',
    'benefício', 'auxílio-doença', 'auxílio doença', 'auxílio-acidente',
    'bpc', 'loas', 'pensão por morte', 'salário-maternidade', 'invalidez',
    'incapacidade', 'perícia médica', 'tempo de contribuição', 'carência',
    'contribuinte', 'segurado', 'revisão de benefício', 'rural', 'especial'
  ],
  penal: [
    'penal', 'criminal', 'crime', 'criminoso', 'réu', 'acusado', 'vítima',
    'prisão', 'preso', 'detido', 'habeas corpus', 'liberdade provisória',
    'fiança', 'condenação', 'absolvição', 'sentença penal', 'júri',
    'homicídio', 'roubo', 'furto', 'estupro', 'tráfico', 'drogas',
    'corrupção', 'lavagem de dinheiro', 'estelionato', 'violência doméstica',
    'maria da penha', 'execução penal', 'regime', 'progressão'
  ]
};

// Parse RSS XML to extract articles
function parseRSSItems(xmlText: string): Array<{
  title: string;
  link: string;
  description: string;
  pubDate: string;
}> {
  const items: Array<{
    title: string;
    link: string;
    description: string;
    pubDate: string;
  }> = [];

  // Simple XML parsing using regex (works for RSS feeds)
  const itemMatches = xmlText.match(/<item[^>]*>[\s\S]*?<\/item>/gi) || [];
  
  for (const itemXml of itemMatches) {
    const titleMatch = itemXml.match(/<title[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i);
    const linkMatch = itemXml.match(/<link[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/link>/i);
    const descMatch = itemXml.match(/<description[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/description>/i);
    const dateMatch = itemXml.match(/<pubDate[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/pubDate>/i);

    if (titleMatch && linkMatch) {
      items.push({
        title: cleanText(titleMatch[1]),
        link: cleanText(linkMatch[1]),
        description: descMatch ? cleanText(descMatch[1]) : '',
        pubDate: dateMatch ? dateMatch[1].trim() : ''
      });
    }
  }

  return items;
}

// Clean HTML and special characters from text
function cleanText(text: string): string {
  return text
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

// Classify article by legal niche based on keywords
function classifyNiche(title: string, description: string): { niche: string; score: number; keywords: string[] } {
  const text = `${title} ${description}`.toLowerCase();
  const scores: Record<string, { count: number; keywords: string[] }> = {};

  for (const [niche, keywords] of Object.entries(NICHE_KEYWORDS)) {
    scores[niche] = { count: 0, keywords: [] };
    for (const keyword of keywords) {
      if (text.includes(keyword.toLowerCase())) {
        scores[niche].count++;
        scores[niche].keywords.push(keyword);
      }
    }
  }

  // Find the niche with highest score
  let bestNiche = 'civil'; // default
  let bestScore = 0;
  let bestKeywords: string[] = [];

  for (const [niche, data] of Object.entries(scores)) {
    if (data.count > bestScore) {
      bestScore = data.count;
      bestNiche = niche;
      bestKeywords = data.keywords;
    }
  }

  return { niche: bestNiche, score: bestScore, keywords: bestKeywords };
}

// Fetch and parse RSS feed
async function fetchRSSFeed(source: typeof RSS_SOURCES[0]): Promise<Array<{
  source: string;
  sourceUrl: string;
  title: string;
  link: string;
  excerpt: string;
  publishedAt: string | null;
  nicheId: string;
  keywords: string[];
  relevanceScore: number;
}>> {
  try {
    console.log(`📡 Fetching RSS from ${source.name}: ${source.url}`);
    
    const response = await fetch(source.url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; LegalNewsBot/1.0)',
        'Accept': 'application/rss+xml, application/xml, text/xml, */*'
      }
    });

    if (!response.ok) {
      console.error(`❌ Failed to fetch ${source.name}: ${response.status}`);
      return [];
    }

    const xmlText = await response.text();
    const items = parseRSSItems(xmlText);
    
    console.log(`📰 Found ${items.length} items from ${source.name}`);

    return items.map(item => {
      const classification = classifyNiche(item.title, item.description);
      let publishedAt: string | null = null;
      
      if (item.pubDate) {
        try {
          publishedAt = new Date(item.pubDate).toISOString();
        } catch {
          publishedAt = null;
        }
      }

      return {
        source: source.name,
        sourceUrl: source.displayName,
        title: item.title,
        link: item.link,
        excerpt: item.description.substring(0, 500),
        publishedAt,
        nicheId: classification.niche,
        keywords: classification.keywords,
        relevanceScore: classification.score
      };
    });
  } catch (error) {
    console.error(`❌ Error fetching ${source.name}:`, error);
    return [];
  }
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('🔄 Starting legal news fetch...');

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch from all RSS sources in parallel
    const allArticlesPromises = RSS_SOURCES.map(source => fetchRSSFeed(source));
    const allArticlesArrays = await Promise.all(allArticlesPromises);
    const allArticles = allArticlesArrays.flat();

    console.log(`📊 Total articles fetched: ${allArticles.length}`);

    // Insert articles, ignoring duplicates (by original_link)
    let insertedCount = 0;
    let skippedCount = 0;

    for (const article of allArticles) {
      const { error } = await supabase
        .from('news_articles')
        .upsert({
          niche_id: article.nicheId,
          source: article.source,
          source_url: article.sourceUrl,
          title: article.title,
          excerpt: article.excerpt,
          original_link: article.link,
          published_at: article.publishedAt,
          keywords: article.keywords,
          relevance_score: article.relevanceScore,
          is_active: true
        }, {
          onConflict: 'original_link',
          ignoreDuplicates: true
        });

      if (error) {
        console.error(`❌ Error inserting article: ${error.message}`);
        skippedCount++;
      } else {
        insertedCount++;
      }
    }

    console.log(`✅ Inserted: ${insertedCount}, Skipped: ${skippedCount}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Legal news fetch completed',
        stats: {
          totalFetched: allArticles.length,
          inserted: insertedCount,
          skipped: skippedCount,
          sources: RSS_SOURCES.map(s => s.name)
        }
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('❌ Error in fetch-legal-news:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});

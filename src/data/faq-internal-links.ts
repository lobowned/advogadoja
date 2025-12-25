// Internal linking helpers for FAQ pages - Maps FAQs to calculators and articles

import { calculatorInfo, CalculatorType } from './calculator-config';
import { blogArticles, BlogArticle } from './blog-articles';
import { ProgrammaticFAQ } from './programmatic-faqs';

// Area to calculator mapping
export const areaCalculatorMap: Record<string, CalculatorType[]> = {
  trabalhista: ['trabalhista', 'horas-extras', 'seguro-desemprego', 'fgts', 'insalubridade'],
  familia: ['pensao', 'partilha-bens', 'inventario'],
  previdenciario: ['aposentadoria', 'pensao-morte', 'auxilio-doenca', 'bpc-loas'],
  civil: ['danos-morais', 'atualizacao-divida', 'aluguel-atrasado', 'dpvat'],
  consumidor: ['danos-morais'],
  penal: [],
  geral: []
};

// Keyword to calculator mapping for more precise matching
const keywordCalculatorMap: Record<string, CalculatorType> = {
  'rescisão': 'trabalhista',
  'rescisao': 'trabalhista',
  'demissão': 'trabalhista',
  'demissao': 'trabalhista',
  'verbas rescisórias': 'trabalhista',
  'hora extra': 'horas-extras',
  'horas extras': 'horas-extras',
  'seguro-desemprego': 'seguro-desemprego',
  'seguro desemprego': 'seguro-desemprego',
  'fgts': 'fgts',
  'insalubridade': 'insalubridade',
  'periculosidade': 'insalubridade',
  'pensão alimentícia': 'pensao',
  'pensao alimenticia': 'pensao',
  'alimentos': 'pensao',
  'partilha': 'partilha-bens',
  'divisão de bens': 'partilha-bens',
  'inventário': 'inventario',
  'inventario': 'inventario',
  'herança': 'inventario',
  'aposentadoria': 'aposentadoria',
  'aposentar': 'aposentadoria',
  'inss': 'aposentadoria',
  'pensão por morte': 'pensao-morte',
  'pensao por morte': 'pensao-morte',
  'auxílio-doença': 'auxilio-doenca',
  'auxilio-doenca': 'auxilio-doenca',
  'auxílio doença': 'auxilio-doenca',
  'bpc': 'bpc-loas',
  'loas': 'bpc-loas',
  'benefício assistencial': 'bpc-loas',
  'danos morais': 'danos-morais',
  'indenização': 'danos-morais',
  'atualização monetária': 'atualizacao-divida',
  'correção monetária': 'atualizacao-divida',
  'dívida': 'atualizacao-divida',
  'aluguel atrasado': 'aluguel-atrasado',
  'aluguel': 'aluguel-atrasado',
  'despejo': 'aluguel-atrasado',
  'dpvat': 'dpvat',
  'acidente de trânsito': 'dpvat',
};

export interface RelatedCalculator {
  type: CalculatorType;
  title: string;
  description: string;
  url: string;
  emoji: string;
}

export interface RelatedArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  nicheId: string;
}

// Get related calculators for a FAQ
export function getRelatedCalculatorsForFAQ(faq: ProgrammaticFAQ): RelatedCalculator[] {
  const calculators = new Set<CalculatorType>();
  
  // Add calculators from area mapping
  const areaCalcs = areaCalculatorMap[faq.area] || [];
  areaCalcs.forEach(calc => calculators.add(calc));
  
  // Check keywords for more specific matches
  const textToCheck = `${faq.question} ${faq.answer} ${faq.keywords.join(' ')}`.toLowerCase();
  
  Object.entries(keywordCalculatorMap).forEach(([keyword, calcType]) => {
    if (textToCheck.includes(keyword.toLowerCase())) {
      calculators.add(calcType);
    }
  });
  
  // Convert to array and get calculator info
  const result: RelatedCalculator[] = [];
  
  calculators.forEach(calcType => {
    if (calcType && calculatorInfo[calcType]) {
      const info = calculatorInfo[calcType];
      result.push({
        type: calcType,
        title: info.title,
        description: info.description,
        url: info.url,
        emoji: info.emoji
      });
    }
  });
  
  // Limit to 3 most relevant
  return result.slice(0, 3);
}

// Get related articles for a FAQ
export function getRelatedArticlesForFAQ(faq: ProgrammaticFAQ): RelatedArticle[] {
  const results: RelatedArticle[] = [];
  const textToCheck = `${faq.question} ${faq.answer} ${faq.keywords.join(' ')}`.toLowerCase();
  
  // First, add articles from the same area
  const sameAreaArticles = blogArticles.filter(article => {
    // Map FAQ area to article nicheId
    const areaToNiche: Record<string, string> = {
      trabalhista: 'trabalhista',
      familia: 'familia',
      previdenciario: 'previdenciario',
      civil: 'civil',
      consumidor: 'consumidor',
      penal: 'penal',
      geral: ''
    };
    return article.nicheId === areaToNiche[faq.area];
  });
  
  // Score articles by keyword matches
  const scoredArticles = sameAreaArticles.map(article => {
    let score = 1; // Base score for same area
    
    // Check keyword matches
    const articleText = `${article.title} ${article.keywords.join(' ')} ${article.excerpt}`.toLowerCase();
    
    faq.keywords.forEach(keyword => {
      if (articleText.includes(keyword.toLowerCase())) {
        score += 2;
      }
    });
    
    // Check title overlap
    const faqWords = faq.question.toLowerCase().split(' ').filter(w => w.length > 3);
    faqWords.forEach(word => {
      if (articleText.includes(word)) {
        score += 1;
      }
    });
    
    return { article, score };
  });
  
  // Sort by score and take top 4
  const topArticles = scoredArticles
    .sort((a, b) => b.score - a.score)
    .slice(0, 4)
    .map(({ article }) => ({
      id: article.id,
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      nicheId: article.nicheId
    }));
  
  return topArticles;
}

// Inline link detection - returns text with calculators highlighted
export function detectInlineCalculatorLinks(text: string): { text: string; calculators: CalculatorType[] } {
  const detectedCalculators: CalculatorType[] = [];
  
  Object.entries(keywordCalculatorMap).forEach(([keyword, calcType]) => {
    if (text.toLowerCase().includes(keyword.toLowerCase())) {
      if (!detectedCalculators.includes(calcType)) {
        detectedCalculators.push(calcType);
      }
    }
  });
  
  return { text, calculators: detectedCalculators };
}

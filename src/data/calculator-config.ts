// Configuração de todas as calculadoras para integração com o chat

export type CalculatorType = 
  | 'trabalhista' 
  | 'horas-extras' 
  | 'seguro-desemprego' 
  | 'fgts' 
  | 'insalubridade'
  | 'pensao' 
  | 'partilha-bens' 
  | 'inventario'
  | 'aposentadoria' 
  | 'pensao-morte' 
  | 'auxilio-doenca' 
  | 'bpc-loas'
  | 'danos-morais' 
  | 'atualizacao-divida' 
  | 'aluguel-atrasado' 
  | 'dpvat'
  | 'voo-cancelado'
  | 'negativacao'
  | 'devolucao-dobro'
  | 'plano-saude'
  | 'fraude-bancaria'
  | null;

export type CalculatorArea = 'trabalhista' | 'familia' | 'previdenciario' | 'civil' | 'consumidor';

export interface CalculatorInfo {
  title: string;
  description: string;
  url: string;
  emoji: string;
  area: CalculatorArea;
}

export const calculatorInfo: Record<Exclude<CalculatorType, null>, CalculatorInfo> = {
  // Trabalhista
  'trabalhista': {
    title: 'Calcule seus Direitos Trabalhistas',
    description: 'Estime verbas rescisórias, férias, 13º e outros direitos.',
    url: '/calculadora-trabalhista',
    emoji: '💼',
    area: 'trabalhista'
  },
  'horas-extras': {
    title: 'Calcule suas Horas Extras',
    description: 'Descubra quanto você tem a receber de horas extras não pagas.',
    url: '/calculadora-horas-extras',
    emoji: '⏰',
    area: 'trabalhista'
  },
  'seguro-desemprego': {
    title: 'Simule o Seguro-Desemprego',
    description: 'Veja quantas parcelas e valores você pode receber.',
    url: '/calculadora-seguro-desemprego',
    emoji: '📋',
    area: 'trabalhista'
  },
  'fgts': {
    title: 'Calcule seu FGTS',
    description: 'Estime seu saldo do FGTS e multa rescisória.',
    url: '/calculadora-fgts',
    emoji: '🏦',
    area: 'trabalhista'
  },
  'insalubridade': {
    title: 'Calcule Insalubridade/Periculosidade',
    description: 'Veja quanto você pode receber de adicional.',
    url: '/calculadora-insalubridade',
    emoji: '⚠️',
    area: 'trabalhista'
  },
  
  // Família
  'pensao': {
    title: 'Calcule a Pensão Alimentícia',
    description: 'Estime o valor da pensão baseado nos parâmetros legais.',
    url: '/calculadora-pensao',
    emoji: '👨‍👩‍👧',
    area: 'familia'
  },
  'partilha-bens': {
    title: 'Simule a Partilha de Bens',
    description: 'Entenda como ficarão os bens no divórcio.',
    url: '/calculadora-partilha-bens',
    emoji: '🏠',
    area: 'familia'
  },
  'inventario': {
    title: 'Calcule Custos do Inventário',
    description: 'Estime ITCMD, custas e honorários do inventário.',
    url: '/calculadora-inventario',
    emoji: '📜',
    area: 'familia'
  },
  
  // Previdenciário
  'aposentadoria': {
    title: 'Simule sua Aposentadoria',
    description: 'Calcule o tempo restante e valor estimado do benefício.',
    url: '/calculadora-aposentadoria',
    emoji: '👴',
    area: 'previdenciario'
  },
  'pensao-morte': {
    title: 'Calcule Pensão por Morte',
    description: 'Estime o valor do benefício para dependentes.',
    url: '/calculadora-pensao-morte',
    emoji: '🕯️',
    area: 'previdenciario'
  },
  'auxilio-doenca': {
    title: 'Calcule o Auxílio-Doença',
    description: 'Estime o valor do benefício por incapacidade.',
    url: '/calculadora-auxilio-doenca',
    emoji: '🏥',
    area: 'previdenciario'
  },
  'bpc-loas': {
    title: 'Verifique Elegibilidade BPC/LOAS',
    description: 'Descubra se você tem direito ao benefício assistencial.',
    url: '/calculadora-bpc-loas',
    emoji: '🤝',
    area: 'previdenciario'
  },
  
  // Civil
  'danos-morais': {
    title: 'Estime Danos Morais',
    description: 'Calcule uma estimativa de indenização por danos morais.',
    url: '/calculadora-danos-morais',
    emoji: '⚖️',
    area: 'civil'
  },
  'atualizacao-divida': {
    title: 'Atualize uma Dívida',
    description: 'Calcule correção monetária e juros de uma dívida.',
    url: '/calculadora-atualizacao-divida',
    emoji: '📈',
    area: 'civil'
  },
  'aluguel-atrasado': {
    title: 'Calcule Aluguel Atrasado',
    description: 'Some aluguéis em atraso com correção e multas.',
    url: '/calculadora-aluguel-atrasado',
    emoji: '🏢',
    area: 'civil'
  },
  'dpvat': {
    title: 'Calcule Indenização DPVAT',
    description: 'Veja quanto você pode receber por acidente de trânsito.',
    url: '/calculadora-dpvat',
    emoji: '🚗',
    area: 'civil'
  },
  
  // Consumidor
  'voo-cancelado': {
    title: 'Calcule Indenização por Voo',
    description: 'Estime quanto você pode receber por atraso ou cancelamento.',
    url: '/calculadora-voo-cancelado',
    emoji: '✈️',
    area: 'consumidor'
  },
  'negativacao': {
    title: 'Calcule Indenização por Negativação',
    description: 'Estime danos morais por nome negativado indevidamente.',
    url: '/calculadora-negativacao',
    emoji: '📉',
    area: 'consumidor'
  },
  'devolucao-dobro': {
    title: 'Calcule Devolução em Dobro',
    description: 'Veja quanto você pode receber por cobrança indevida.',
    url: '/calculadora-devolucao-dobro',
    emoji: '💸',
    area: 'consumidor'
  },
  'plano-saude': {
    title: 'Calcule Indenização Plano de Saúde',
    description: 'Estime danos por negativa de cobertura.',
    url: '/calculadora-plano-saude',
    emoji: '🏥',
    area: 'consumidor'
  },
  'fraude-bancaria': {
    title: 'Calcule Prejuízo por Fraude Bancária',
    description: 'Estime quanto você pode recuperar de fraudes.',
    url: '/calculadora-fraude-bancaria',
    emoji: '🔐',
    area: 'consumidor'
  }
};

export const areaColors: Record<CalculatorArea, { bg: string; border: string; text: string }> = {
  'trabalhista': {
    bg: 'from-blue-500/10 via-blue-500/5 to-sky-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-600'
  },
  'familia': {
    bg: 'from-pink-500/10 via-pink-500/5 to-rose-500/10',
    border: 'border-pink-500/20',
    text: 'text-pink-600'
  },
  'previdenciario': {
    bg: 'from-emerald-500/10 via-emerald-500/5 to-green-500/10',
    border: 'border-emerald-500/20',
    text: 'text-emerald-600'
  },
  'civil': {
    bg: 'from-amber-500/10 via-amber-500/5 to-orange-500/10',
    border: 'border-amber-500/20',
    text: 'text-amber-600'
  },
  'consumidor': {
    bg: 'from-purple-500/10 via-purple-500/5 to-violet-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-600'
  }
};

// Mapeamento de keywords para calculadoras (mais específico primeiro)
export const calculatorKeywords: Array<{ keywords: RegExp; calculator: Exclude<CalculatorType, null> }> = [
  // Trabalhista - específicos primeiro
  { keywords: /hora\s*extra|banco\s*de\s*horas|jornada\s*excessiva|adicional\s*noturno/i, calculator: 'horas-extras' },
  { keywords: /seguro\s*desemprego|desempregado|parcelas?\s*do\s*seguro|dar\s*entrada\s*no\s*seguro/i, calculator: 'seguro-desemprego' },
  { keywords: /fgts|fundo\s*de\s*garantia|saque\s*aniversário|multa\s*40/i, calculator: 'fgts' },
  { keywords: /insalubridade|periculosidade|adicional\s*de\s*risco|trabalho\s*perigoso|epi|ambiente\s*insalubre/i, calculator: 'insalubridade' },
  { keywords: /demiss[aã]o|demitido|mandou?\s*embora|rescis[aã]o|verbas?\s*rescis[oó]rias|carteira\s*assinada|clt/i, calculator: 'trabalhista' },
  
  // Família - específicos primeiro
  { keywords: /pens[aã]o\s*aliment[ií]cia|valor\s*da\s*pens[aã]o|pagar\s*pens[aã]o|receber\s*pens[aã]o|alimentos/i, calculator: 'pensao' },
  { keywords: /partilha|divis[aã]o\s*de\s*bens|separa[cç][aã]o\s*de\s*bens|patrimônio|divórcio.*bens|bens.*divórcio/i, calculator: 'partilha-bens' },
  { keywords: /inventário|herança|heran[cç]a|faleceu.*bens|óbito.*bens|itcmd|sucess[aã]o/i, calculator: 'inventario' },
  
  // Previdenciário - específicos primeiro
  { keywords: /pens[aã]o\s*por\s*morte|morte.*pens[aã]o|dependente.*falec|viúv[oa]/i, calculator: 'pensao-morte' },
  { keywords: /auxílio[\s-]*doen[cç]a|afastamento|incapacidade|atestado\s*médico|licen[cç]a\s*médica/i, calculator: 'auxilio-doenca' },
  { keywords: /bpc|loas|benefício\s*assistencial|salário\s*mínimo.*idoso|idoso.*benefício|defici[eê]ncia.*benefício/i, calculator: 'bpc-loas' },
  { keywords: /aposentadoria|aposentar|inss|tempo\s*de\s*contribui[cç][aã]o|quando\s*vou\s*aposentar/i, calculator: 'aposentadoria' },
  
  // Civil - específicos primeiro
  { keywords: /dpvat|spvat|acidente\s*de\s*trânsito|acidente.*carro|atropelamento|colisão|indeniza[cç][aã]o.*acidente/i, calculator: 'dpvat' },
  { keywords: /aluguel\s*atrasado|inquilino|locação|despejo|aluguel.*devido|dívida.*aluguel/i, calculator: 'aluguel-atrasado' },
  { keywords: /atualiza[cç][aã]o.*dívida|corre[cç][aã]o\s*monetária|juros.*dívida|débito.*atualizado/i, calculator: 'atualizacao-divida' },
  { keywords: /danos?\s*morais?|indeniza[cç][aã]o|ofensa|humilha[cç][aã]o|constrangimento|abuso/i, calculator: 'danos-morais' },
  
  // Consumidor - específicos primeiro
  { keywords: /voo.*cancelado|atraso.*voo|overbooking|bagagem.*extraviada|companhia.*aérea|passagem.*aérea/i, calculator: 'voo-cancelado' },
  { keywords: /negativa[cç][aã]o|nome.*sujo|serasa|spc|cadastro.*devedor|restri[cç][aã]o.*nome/i, calculator: 'negativacao' },
  { keywords: /devolu[cç][aã]o.*dobro|cobran[cç]a.*indevida|cobrado.*errado|art.*42|pagou.*duas.*vezes/i, calculator: 'devolucao-dobro' },
  { keywords: /plano.*saúde|plano.*de.*saude|negativa.*cobertura|cirurgia.*negada|tratamento.*negado|operadora/i, calculator: 'plano-saude' },
  { keywords: /fraude.*banc|golpe.*pix|cart[aã]o.*clonado|empréstimo.*indevido|saque.*indevido|conta.*invadida/i, calculator: 'fraude-bancaria' },
];

/**
 * Detecta a calculadora mais relevante baseada no conteúdo da mensagem
 */
export const detectCalculatorFromMessage = (message: string): CalculatorType => {
  const text = message.toLowerCase();
  
  for (const { keywords, calculator } of calculatorKeywords) {
    if (keywords.test(text)) {
      return calculator;
    }
  }
  
  return null;
};

// Sugestões contextuais baseadas no problema detectado
export const CONTEXTUAL_SUGGESTIONS: Record<string, string[]> = {
  // FAMÍLIA
  'divórcio': [
    "Quanto tempo leva um divórcio?",
    "Posso dividir os bens agora?",
    "E se ele/ela não aceitar?"
  ],
  'separação': [
    "Qual a diferença pra divórcio?",
    "Preciso de advogado?",
    "Quanto custa?"
  ],
  'pensão alimentícia': [
    "Qual valor da pensão?",
    "E se não pagar?",
    "Como aumentar a pensão?"
  ],
  'guarda': [
    "Como funciona guarda compartilhada?",
    "Posso mudar de cidade com meu filho?",
    "E se dificultar a visita?"
  ],
  'herança': [
    "Quanto tempo leva o inventário?",
    "Precisa de todos os herdeiros?",
    "Quem tem direito?"
  ],
  'alienação parental': [
    "O que caracteriza alienação?",
    "Como provar isso?",
    "Posso perder a guarda?"
  ],
  
  // TRABALHISTA
  'demissão': [
    "O que tenho direito a receber?",
    "Qual prazo pra reclamar?",
    "Posso pedir danos morais?"
  ],
  'demitido': [
    "Tenho direito a seguro desemprego?",
    "E se não pagaram tudo?",
    "Quanto tempo pra entrar na justiça?"
  ],
  'assédio moral': [
    "O que é considerado assédio?",
    "Preciso de provas?",
    "Quanto posso ganhar?"
  ],
  'assédio sexual': [
    "Como denunciar?",
    "Posso ser demitida por isso?",
    "É crime?"
  ],
  'acidente de trabalho': [
    "A empresa é obrigada a pagar?",
    "Posso ser demitido doente?",
    "Tenho estabilidade?"
  ],
  'horas extras': [
    "Qual o prazo pra cobrar?",
    "Preciso de prova?",
    "Quanto vale a hora extra?"
  ],
  
  // PREVIDENCIÁRIO
  'aposentadoria': [
    "Quanto tempo falta?",
    "Posso continuar trabalhando?",
    "Como calcular o valor?"
  ],
  'auxílio-doença': [
    "Quanto tempo demora?",
    "Preciso de laudo?",
    "E se negar?"
  ],
  'BPC/LOAS': [
    "Quem tem direito?",
    "Qual o valor?",
    "Precisa ter contribuído?"
  ],
  'pensão por morte': [
    "Quem pode receber?",
    "Qual o valor?",
    "Quanto tempo demora?"
  ],
  
  // PENAL
  'prisão': [
    "Como funciona habeas corpus?",
    "Pode sair sob fiança?",
    "Quando é a audiência?"
  ],
  'preso': [
    "Quanto tempo pode ficar preso?",
    "Posso visitar?",
    "Precisa de advogado?"
  ],
  'flagrante': [
    "Pode ser solto hoje?",
    "Precisa de advogado agora?",
    "Qual delegacia?"
  ],
  'violência doméstica': [
    "Como pedir medida protetiva?",
    "Ele pode ser preso?",
    "Quanto tempo demora?"
  ],
  
  // CIVIL / CONSUMIDOR
  'golpe': [
    "Posso recuperar o dinheiro?",
    "Já fiz BO, e agora?",
    "O banco é responsável?"
  ],
  'pix': [
    "O banco devolve o dinheiro?",
    "Qual prazo pra reclamar?",
    "Como processar o golpista?"
  ],
  'consumidor': [
    "Posso pedir danos morais?",
    "Qual o prazo pra reclamar?",
    "Preciso ir ao Procon primeiro?"
  ],
  'plano de saúde': [
    "Podem negar a cirurgia?",
    "Posso ter liminar rápida?",
    "O plano paga tudo?"
  ],
  'danos morais': [
    "Quanto posso receber?",
    "Preciso de provas?",
    "Demora muito?"
  ],
  'despejo': [
    "Quanto tempo tenho pra sair?",
    "Posso negociar a dívida?",
    "E se não tiver pra onde ir?"
  ],
  
  // DEFAULT
  'default': [
    "Como funciona a consulta?",
    "Quanto custa um processo?",
    "Qual o prazo?"
  ]
};

// Função para buscar sugestões por problema
export const getSuggestionsByProblem = (problem: string | null): string[] => {
  if (!problem) return CONTEXTUAL_SUGGESTIONS['default'];
  
  const normalizedProblem = problem.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  // Busca direta
  for (const [key, suggestions] of Object.entries(CONTEXTUAL_SUGGESTIONS)) {
    if (normalizedProblem.includes(key.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
      return suggestions;
    }
  }
  
  // Mapeamento de variações
  const problemMapping: Record<string, string> = {
    'separacao': 'divórcio',
    'filhos': 'guarda',
    'alimentos': 'pensão alimentícia',
    'mandaram embora': 'demissão',
    'trabalho': 'demissão',
    'inss': 'aposentadoria',
    'beneficio': 'auxílio-doença',
    'doente': 'auxílio-doença',
    'idoso': 'BPC/LOAS',
    'deficiente': 'BPC/LOAS',
    'cadeia': 'prisão',
    'delegacia': 'flagrante',
    'estelionato': 'golpe',
    'fraude': 'golpe',
    'whatsapp': 'golpe',
    'banco': 'golpe',
    'produto': 'consumidor',
    'loja': 'consumidor',
    'saude': 'plano de saúde',
    'cirurgia': 'plano de saúde',
    'aluguel': 'despejo',
    'inquilino': 'despejo'
  };
  
  for (const [key, value] of Object.entries(problemMapping)) {
    if (normalizedProblem.includes(key)) {
      return CONTEXTUAL_SUGGESTIONS[value] || CONTEXTUAL_SUGGESTIONS['default'];
    }
  }
  
  return CONTEXTUAL_SUGGESTIONS['default'];
};

// Sistema de mensagens de nudge (cutucadas) para reengajamento
export interface NudgeConfig {
  delay: number; // em milissegundos
  getMessage: (problem: string | null, userName: string | null) => string;
}

// Configuração de nudges escalonados
export const NUDGE_CONFIG: NudgeConfig[] = [
  {
    delay: 25000, // 25 segundos
    getMessage: (problem, userName) => {
      if (problem) {
        const problemNudges: Record<string, string[]> = {
          'divórcio': [
            "Posso te explicar como funciona o processo de divórcio se quiser 😊",
            "Quer saber quanto tempo leva um divórcio?"
          ],
          'demissão': [
            "Quer que eu liste seus direitos depois de ser demitido?",
            "Posso te ajudar a entender o que você pode exigir 👍"
          ],
          'aposentadoria': [
            "Posso verificar se você já tem tempo pra se aposentar...",
            "Quer saber quanto tempo falta pra sua aposentadoria?"
          ],
          'prisão': [
            "Isso é urgente! Me conta mais pra eu te ajudar rápido",
            "Posso te explicar como funciona o habeas corpus se precisar"
          ],
          'golpe': [
            "Quer saber se dá pra recuperar o dinheiro do golpe?",
            "Posso te explicar os próximos passos pra tentar reaver o valor"
          ]
        };
        
        const normalizedProblem = problem.toLowerCase();
        for (const [key, messages] of Object.entries(problemNudges)) {
          if (normalizedProblem.includes(key)) {
            return messages[Math.floor(Math.random() * messages.length)];
          }
        }
      }
      
      return userName 
        ? `${userName}, pode perguntar qualquer coisa! Estou aqui pra ajudar 😊`
        : "Pode perguntar qualquer coisa! Estou aqui pra ajudar 😊";
    }
  },
  {
    delay: 45000, // 45 segundos após 1º nudge
    getMessage: (problem, userName) => {
      const messages = [
        "Se tiver alguma dúvida, é só falar. Sigilo total garantido! 🔒",
        "Fique à vontade pra perguntar, tá? Sem compromisso!",
        "Estou aqui se precisar de alguma orientação...",
        "Posso te ajudar a entender seus direitos se quiser 👍"
      ];
      
      const msg = messages[Math.floor(Math.random() * messages.length)];
      return userName ? `${userName}, ${msg.charAt(0).toLowerCase() + msg.slice(1)}` : msg;
    }
  },
  {
    delay: 90000, // 90 segundos após 2º nudge
    getMessage: (problem, userName) => {
      if (problem) {
        return `Entendo que decisões sobre ${problem} são difíceis. Se quiser, posso explicar como funciona o processo de forma tranquila e sem compromisso 😊`;
      }
      
      return userName
        ? `${userName}, se preferir, me passa seu WhatsApp que te envio um resumo por lá 📱`
        : "Se preferir, me passa seu WhatsApp que te envio um resumo por lá 📱";
    }
  }
];

// Mensagens de reengajamento baseadas no contexto
export const CONTEXTUAL_NUDGES: Record<string, string[]> = {
  'divórcio': [
    "Entendo que é uma decisão difícil. Quer que eu explique as opções?",
    "Posso te contar a diferença entre divórcio consensual e litigioso...",
    "Se quiser, te explico quanto tempo costuma levar o processo"
  ],
  'demissão': [
    "Sei que perder o emprego é complicado. Posso listar seus direitos?",
    "Quer que eu calcule uma estimativa do que você pode receber?",
    "Posso te orientar sobre o prazo pra entrar na justiça"
  ],
  'aposentadoria': [
    "Quer que eu explique as regras de aposentadoria pra você?",
    "Posso te ajudar a entender se já dá pra se aposentar...",
    "Se quiser, explico como funciona o cálculo do benefício"
  ],
  'prisão': [
    "Isso é urgente! Me conta mais pra te ajudar rápido",
    "Posso te explicar os próximos passos imediatamente",
    "Quanto mais rápido agir, melhor. Me diz mais detalhes"
  ],
  'golpe': [
    "Quer saber se dá pra recuperar o dinheiro?",
    "Posso te orientar sobre como proceder agora",
    "Me conta mais pra eu ver a melhor estratégia"
  ],
  'default': [
    "Tem alguma dúvida sobre como funciona? 😊",
    "Posso te explicar melhor se quiser...",
    "Fique à vontade pra perguntar qualquer coisa!"
  ]
};

// Função para obter nudge contextual
export const getContextualNudge = (problem: string | null): string => {
  if (!problem) {
    const defaults = CONTEXTUAL_NUDGES['default'];
    return defaults[Math.floor(Math.random() * defaults.length)];
  }
  
  const normalizedProblem = problem.toLowerCase();
  
  for (const [key, messages] of Object.entries(CONTEXTUAL_NUDGES)) {
    if (normalizedProblem.includes(key)) {
      return messages[Math.floor(Math.random() * messages.length)];
    }
  }
  
  const defaults = CONTEXTUAL_NUDGES['default'];
  return defaults[Math.floor(Math.random() * defaults.length)];
};

// Palavras-chave de urgência para detecção
export const URGENCY_KEYWORDS = {
  critica: [
    'preso', 'prisão', 'prisao', 'flagrante', 'delegacia agora',
    'audiência hoje', 'audiencia hoje', 'prazo hoje',
    'batendo', 'violência', 'violencia', 'ameaça de morte', 'ameaca de morte',
    'socorro', 'urgente demais', 'emergência', 'emergencia'
  ],
  alta: [
    'despejo marcado', 'prazo amanhã', 'prazo amanha',
    'demitido hoje', 'acidente agora', 'acidente hoje',
    'preciso urgente', 'muito urgente', 'prazo vence'
  ],
  media: [
    'prazo semana', 'aconteceu semana passada', 'recente',
    'preciso resolver logo', 'urgente'
  ]
};

// Função para detectar nível de urgência
export const detectUrgencyLevel = (message: string): { level: string; keywords: string[] } => {
  const normalizedMessage = message.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const detectedKeywords: string[] = [];
  
  // Verificar crítica primeiro
  for (const keyword of URGENCY_KEYWORDS.critica) {
    if (normalizedMessage.includes(keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
      detectedKeywords.push(keyword);
    }
  }
  if (detectedKeywords.length > 0) {
    return { level: 'critica', keywords: detectedKeywords };
  }
  
  // Verificar alta
  for (const keyword of URGENCY_KEYWORDS.alta) {
    if (normalizedMessage.includes(keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
      detectedKeywords.push(keyword);
    }
  }
  if (detectedKeywords.length > 0) {
    return { level: 'alta', keywords: detectedKeywords };
  }
  
  // Verificar média
  for (const keyword of URGENCY_KEYWORDS.media) {
    if (normalizedMessage.includes(keyword.normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
      detectedKeywords.push(keyword);
    }
  }
  if (detectedKeywords.length > 0) {
    return { level: 'media', keywords: detectedKeywords };
  }
  
  return { level: 'baixa', keywords: [] };
};

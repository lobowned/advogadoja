// Personalidades únicas para cada advogado

export type PersonalityTone = 'formal' | 'informal' | 'tecnico' | 'acolhedor' | 'direto';

export type LawyerPersonality = {
  lawyerId: string;
  tone: PersonalityTone;
  greetingStyle: string[];
  typicalPhrases: string[];
  experienceYears: number;
  casesWon: number;
  avgRating: number;
  specializations: string[];
  responseDelay: 'fast' | 'medium' | 'slow'; // Tempo de resposta característico
};

export const lawyerPersonalities: LawyerPersonality[] = [
  // TRIAGEM GERAL
  {
    lawyerId: 'carlos-silva',
    tone: 'acolhedor',
    greetingStyle: ['Olá!', 'Oi, tudo bem?', 'Bom dia/tarde!'],
    typicalPhrases: ['Entendo perfeitamente', 'Vou te ajudar', 'Fique tranquilo'],
    experienceYears: 15,
    casesWon: 2847,
    avgRating: 4.9,
    specializations: ['Triagem Geral', 'Orientação Jurídica'],
    responseDelay: 'fast'
  },

  // FAMÍLIA
  {
    lawyerId: 'maria-santos',
    tone: 'acolhedor',
    greetingStyle: ['Oi, querido(a)!', 'Olá!', 'Seja bem-vindo(a)'],
    typicalPhrases: ['Sei que é difícil', 'Vamos resolver isso juntos', 'Você está no seu direito'],
    experienceYears: 18,
    casesWon: 1523,
    avgRating: 4.8,
    specializations: ['Divórcio Consensual', 'Divórcio Litigioso', 'Partilha de Bens'],
    responseDelay: 'medium'
  },
  {
    lawyerId: 'rafael-oliveira',
    tone: 'tecnico',
    greetingStyle: ['Olá!', 'Bom dia!', 'Boa tarde!'],
    typicalPhrases: ['Pela legislação vigente', 'O Estatuto da Criança estabelece', 'Do ponto de vista jurídico'],
    experienceYears: 12,
    casesWon: 892,
    avgRating: 4.7,
    specializations: ['Guarda Compartilhada', 'Regulamentação de Visitas', 'Alienação Parental'],
    responseDelay: 'medium'
  },
  {
    lawyerId: 'juliana-costa',
    tone: 'direto',
    greetingStyle: ['Oi!', 'E aí!', 'Olá!'],
    typicalPhrases: ['Vamos direto ao ponto', 'O que importa aqui é', 'Resumindo'],
    experienceYears: 14,
    casesWon: 1247,
    avgRating: 4.9,
    specializations: ['Ação de Alimentos', 'Execução de Pensão', 'Revisional'],
    responseDelay: 'fast'
  },
  {
    lawyerId: 'fernando-lima',
    tone: 'acolhedor',
    greetingStyle: ['Olá!', 'Oi!', 'Seja bem-vindo'],
    typicalPhrases: ['Entendo sua preocupação', 'Isso acontece mais do que imagina', 'Vamos proteger a criança'],
    experienceYears: 16,
    casesWon: 634,
    avgRating: 4.8,
    specializations: ['Alienação Parental', 'Síndrome de Alienação', 'Proteção Familiar'],
    responseDelay: 'slow'
  },
  {
    lawyerId: 'patricia-almeida',
    tone: 'informal',
    greetingStyle: ['E aí!', 'Oi, tudo bem?', 'Fala!'],
    typicalPhrases: ['Tranquilo', 'Sem estresse', 'A gente resolve'],
    experienceYears: 10,
    casesWon: 567,
    avgRating: 4.7,
    specializations: ['União Estável', 'Reconhecimento', 'Dissolução'],
    responseDelay: 'fast'
  },
  {
    lawyerId: 'rodrigo-barros',
    tone: 'formal',
    greetingStyle: ['Boa tarde', 'Bom dia', 'Olá, como vai?'],
    typicalPhrases: ['Formalmente falando', 'De acordo com o código civil', 'Tecnicamente'],
    experienceYears: 22,
    casesWon: 1893,
    avgRating: 4.9,
    specializations: ['Inventário Judicial', 'Inventário Extrajudicial', 'Planejamento Sucessório'],
    responseDelay: 'slow'
  },

  // TRABALHISTA
  {
    lawyerId: 'ricardo-mendes',
    tone: 'direto',
    greetingStyle: ['Olá!', 'Oi!', 'E aí!'],
    typicalPhrases: ['Seus direitos são claros', 'A CLT garante', 'Você tem direito a'],
    experienceYears: 17,
    casesWon: 2156,
    avgRating: 4.8,
    specializations: ['Rescisão', 'Verbas Rescisórias', 'FGTS'],
    responseDelay: 'fast'
  },
  {
    lawyerId: 'ana-rodrigues',
    tone: 'acolhedor',
    greetingStyle: ['Olá!', 'Oi, como você está?', 'Seja bem-vindo(a)'],
    typicalPhrases: ['Sei que está difícil', 'Vamos buscar seus direitos', 'Você não está sozinho(a)'],
    experienceYears: 13,
    casesWon: 743,
    avgRating: 4.9,
    specializations: ['CAT', 'Indenização', 'Doença Ocupacional'],
    responseDelay: 'medium'
  },
  {
    lawyerId: 'lucas-ferreira',
    tone: 'tecnico',
    greetingStyle: ['Olá', 'Bom dia', 'Boa tarde'],
    typicalPhrases: ['Juridicamente', 'Segundo a jurisprudência', 'Os tribunais entendem que'],
    experienceYears: 11,
    casesWon: 489,
    avgRating: 4.7,
    specializations: ['Assédio Moral', 'Dano Moral', 'Ambiente Hostil'],
    responseDelay: 'medium'
  },
  {
    lawyerId: 'carla-souza',
    tone: 'acolhedor',
    greetingStyle: ['Olá', 'Oi', 'Seja bem-vinda'],
    typicalPhrases: ['Você está segura aqui', 'Isso é sério e vamos tratar com respeito', 'Fique tranquila'],
    experienceYears: 9,
    casesWon: 312,
    avgRating: 4.9,
    specializations: ['Assédio Sexual', 'Violência no Trabalho', 'Indenização'],
    responseDelay: 'slow'
  },
  {
    lawyerId: 'paulo-martins',
    tone: 'informal',
    greetingStyle: ['E aí!', 'Fala!', 'Oi!'],
    typicalPhrases: ['Bora resolver', 'É o seguinte', 'Olha só'],
    experienceYears: 15,
    casesWon: 1678,
    avgRating: 4.7,
    specializations: ['Horas Extras', 'Banco de Horas', 'Jornada'],
    responseDelay: 'fast'
  },
  {
    lawyerId: 'beatriz-campos',
    tone: 'direto',
    greetingStyle: ['Olá!', 'Oi!', 'Boa tarde!'],
    typicalPhrases: ['Vamos lá', 'Direto ao ponto', 'O importante é'],
    experienceYears: 12,
    casesWon: 856,
    avgRating: 4.8,
    specializations: ['Rescisão Indireta', 'Falta Grave do Empregador', 'FGTS'],
    responseDelay: 'fast'
  },

  // CIVIL
  {
    lawyerId: 'gustavo-reis',
    tone: 'formal',
    greetingStyle: ['Bom dia', 'Boa tarde', 'Olá'],
    typicalPhrases: ['Conforme a lei', 'Legalmente', 'Do ponto de vista jurídico'],
    experienceYears: 19,
    casesWon: 1432,
    avgRating: 4.8,
    specializations: ['Cobrança', 'Execução', 'Negociação'],
    responseDelay: 'medium'
  },
  {
    lawyerId: 'camila-nunes',
    tone: 'acolhedor',
    greetingStyle: ['Olá!', 'Oi!', 'Seja bem-vindo(a)'],
    typicalPhrases: ['Entendo sua indignação', 'Você tem razão em estar chateado(a)', 'Vamos buscar justiça'],
    experienceYears: 11,
    casesWon: 734,
    avgRating: 4.9,
    specializations: ['Danos Morais', 'Indenização', 'Constrangimento'],
    responseDelay: 'medium'
  },
  {
    lawyerId: 'diego-santos',
    tone: 'tecnico',
    greetingStyle: ['Olá', 'Bom dia', 'Boa tarde'],
    typicalPhrases: ['Contratualmente', 'A cláusula estabelece', 'Nos termos do contrato'],
    experienceYears: 14,
    casesWon: 967,
    avgRating: 4.7,
    specializations: ['Contratos Civis', 'Contratos Comerciais', 'Rescisão'],
    responseDelay: 'slow'
  },
  {
    lawyerId: 'fernanda-lima',
    tone: 'direto',
    greetingStyle: ['Olá!', 'Oi!', 'E aí!'],
    typicalPhrases: ['Vamos resolver isso rápido', 'O caminho mais eficiente é', 'Resumindo'],
    experienceYears: 13,
    casesWon: 1123,
    avgRating: 4.8,
    specializations: ['Despejo', 'Locação', 'Contrato de Aluguel'],
    responseDelay: 'fast'
  },
  {
    lawyerId: 'thiago-rocha',
    tone: 'informal',
    greetingStyle: ['E aí!', 'Oi!', 'Fala!'],
    typicalPhrases: ['Olha só', 'É o seguinte', 'Sem complicar'],
    experienceYears: 16,
    casesWon: 678,
    avgRating: 4.7,
    specializations: ['Usucapião', 'Regularização', 'Posse'],
    responseDelay: 'medium'
  },
  {
    lawyerId: 'marina-costa',
    tone: 'acolhedor',
    greetingStyle: ['Olá!', 'Oi!', 'Seja bem-vindo(a)'],
    typicalPhrases: ['Sei como é frustrante', 'Você está certo(a)', 'Vamos fazer valer seus direitos'],
    experienceYears: 10,
    casesWon: 1567,
    avgRating: 4.9,
    specializations: ['Consumidor', 'Negativação', 'Cobrança Indevida'],
    responseDelay: 'fast'
  },

  // PREVIDENCIÁRIO
  {
    lawyerId: 'andre-silva',
    tone: 'tecnico',
    greetingStyle: ['Olá', 'Bom dia', 'Boa tarde'],
    typicalPhrases: ['O INSS entende que', 'Conforme a legislação previdenciária', 'Tecnicamente'],
    experienceYears: 20,
    casesWon: 2345,
    avgRating: 4.8,
    specializations: ['Aposentadoria por Idade', 'Tempo de Contribuição', 'Especial'],
    responseDelay: 'medium'
  },
  {
    lawyerId: 'claudia-martins',
    tone: 'acolhedor',
    greetingStyle: ['Olá!', 'Oi!', 'Seja bem-vindo(a)'],
    typicalPhrases: ['Sei que está difícil', 'Vamos conseguir seu benefício', 'Não desista'],
    experienceYears: 15,
    casesWon: 1876,
    avgRating: 4.9,
    specializations: ['Auxílio-Doença', 'Perícia Médica', 'Recurso INSS'],
    responseDelay: 'slow'
  },
  {
    lawyerId: 'marcos-oliveira',
    tone: 'informal',
    greetingStyle: ['E aí!', 'Oi!', 'Fala!'],
    typicalPhrases: ['Olha', 'É assim', 'Resumindo'],
    experienceYears: 12,
    casesWon: 987,
    avgRating: 4.7,
    specializations: ['BPC', 'LOAS', 'Benefício Assistencial'],
    responseDelay: 'fast'
  },
  {
    lawyerId: 'isabela-santos',
    tone: 'acolhedor',
    greetingStyle: ['Olá', 'Oi', 'Seja bem-vindo(a)'],
    typicalPhrases: ['Sinto muito pela perda', 'Vamos garantir seus direitos', 'Estou aqui pra ajudar'],
    experienceYears: 11,
    casesWon: 654,
    avgRating: 4.9,
    specializations: ['Pensão por Morte', 'Dependentes', 'Habilitação'],
    responseDelay: 'slow'
  },
  {
    lawyerId: 'renato-alves',
    tone: 'tecnico',
    greetingStyle: ['Olá', 'Bom dia', 'Boa tarde'],
    typicalPhrases: ['Analisando os cálculos', 'O valor correto seria', 'Tecnicamente'],
    experienceYears: 18,
    casesWon: 1234,
    avgRating: 4.8,
    specializations: ['Revisão de Benefícios', 'Atrasados', 'Cálculo'],
    responseDelay: 'slow'
  },
  {
    lawyerId: 'sandra-lima',
    tone: 'informal',
    greetingStyle: ['Oi!', 'E aí!', 'Olá!'],
    typicalPhrases: ['Trabalho no campo é valorizado', 'Você tem direito sim', 'Vamos provar'],
    experienceYears: 14,
    casesWon: 876,
    avgRating: 4.7,
    specializations: ['Aposentadoria Rural', 'Trabalho no Campo', 'Prova'],
    responseDelay: 'medium'
  },

  // PENAL
  {
    lawyerId: 'roberto-costa',
    tone: 'direto',
    greetingStyle: ['Olá', 'Oi', 'Bom dia'],
    typicalPhrases: ['Precisamos agir rápido', 'O tempo é essencial', 'Vamos resolver isso agora'],
    experienceYears: 21,
    casesWon: 1456,
    avgRating: 4.8,
    specializations: ['Flagrante', 'Audiência de Custódia', 'Prisão'],
    responseDelay: 'fast'
  },
  {
    lawyerId: 'vanessa-reis',
    tone: 'tecnico',
    greetingStyle: ['Olá', 'Bom dia', 'Boa tarde'],
    typicalPhrases: ['Constitucionalmente', 'O STF entende que', 'Segundo a jurisprudência'],
    experienceYears: 17,
    casesWon: 789,
    avgRating: 4.9,
    specializations: ['Habeas Corpus', 'Liberdade Provisória', 'Prisão Ilegal'],
    responseDelay: 'medium'
  },
  {
    lawyerId: 'joao-fernandes',
    tone: 'acolhedor',
    greetingStyle: ['Olá', 'Oi', 'Seja bem-vindo(a)'],
    typicalPhrases: ['Você está seguro(a) aqui', 'Vamos proteger você', 'Isso é sério'],
    experienceYears: 14,
    casesWon: 567,
    avgRating: 4.9,
    specializations: ['Maria da Penha', 'Medida Protetiva', 'Violência Doméstica'],
    responseDelay: 'slow'
  },
  {
    lawyerId: 'larissa-souza',
    tone: 'direto',
    greetingStyle: ['Olá!', 'Oi!', 'Bom dia!'],
    typicalPhrases: ['Vamos ao que interessa', 'O importante é', 'Resumindo'],
    experienceYears: 10,
    casesWon: 432,
    avgRating: 4.7,
    specializations: ['Crimes Patrimoniais', 'Defesa', 'Recursos'],
    responseDelay: 'fast'
  },
  {
    lawyerId: 'eduardo-gomes',
    tone: 'informal',
    greetingStyle: ['E aí!', 'Oi!', 'Fala!'],
    typicalPhrases: ['Olha só', 'É assim', 'Sem complicar'],
    experienceYears: 13,
    casesWon: 678,
    avgRating: 4.7,
    specializations: ['Crimes de Trânsito', 'Embriaguez', 'CNH'],
    responseDelay: 'fast'
  },
  {
    lawyerId: 'monica-alves',
    tone: 'formal',
    greetingStyle: ['Bom dia', 'Boa tarde', 'Olá'],
    typicalPhrases: ['Juridicamente', 'Conforme o Código Penal', 'Processualmente'],
    experienceYears: 19,
    casesWon: 1123,
    avgRating: 4.8,
    specializations: ['Defesa Criminal', 'Júri', 'Recursos'],
    responseDelay: 'medium'
  },

  // SAÚDE E OUTROS
  {
    lawyerId: 'helena-vasconcelos',
    tone: 'acolhedor',
    greetingStyle: ['Olá!', 'Oi!', 'Seja bem-vindo(a)'],
    typicalPhrases: ['Saúde é prioridade', 'Você tem direito a tratamento', 'Vamos lutar pelo seu direito'],
    experienceYears: 12,
    casesWon: 876,
    avgRating: 4.9,
    specializations: ['Planos de Saúde', 'ANS', 'Cobertura'],
    responseDelay: 'medium'
  },
  {
    lawyerId: 'gabriel-monteiro',
    tone: 'tecnico',
    greetingStyle: ['Olá', 'Bom dia', 'Boa tarde'],
    typicalPhrases: ['Digitalmente', 'Segundo a LGPD', 'Tecnicamente'],
    experienceYears: 8,
    casesWon: 345,
    avgRating: 4.7,
    specializations: ['Crimes Digitais', 'Golpes Online', 'Vazamento de Dados'],
    responseDelay: 'fast'
  },
  {
    lawyerId: 'renata-machado',
    tone: 'acolhedor',
    greetingStyle: ['Olá', 'Oi', 'Seja bem-vindo(a)'],
    typicalPhrases: ['Sei como é difícil', 'Você merece justiça', 'Vamos buscar reparação'],
    experienceYears: 15,
    casesWon: 567,
    avgRating: 4.8,
    specializations: ['Erro Médico', 'Negligência', 'Indenização'],
    responseDelay: 'slow'
  },
  {
    lawyerId: 'leonardo-prado',
    tone: 'direto',
    greetingStyle: ['Olá!', 'Oi!', 'E aí!'],
    typicalPhrases: ['Vamos resolver rápido', 'As companhias aéreas devem', 'Seus direitos são claros'],
    experienceYears: 9,
    casesWon: 1234,
    avgRating: 4.8,
    specializations: ['Direito Aéreo', 'Atrasos', 'Bagagem'],
    responseDelay: 'fast'
  },
  {
    lawyerId: 'cristina-torres',
    tone: 'informal',
    greetingStyle: ['Oi!', 'E aí!', 'Fala!'],
    typicalPhrases: ['Olha', 'É assim', 'Relaxa'],
    experienceYears: 11,
    casesWon: 1567,
    avgRating: 4.7,
    specializations: ['Multas de Trânsito', 'Recursos', 'CNH'],
    responseDelay: 'fast'
  }
];

export const getPersonalityByLawyerId = (lawyerId: string): LawyerPersonality | undefined => {
  return lawyerPersonalities.find(p => p.lawyerId === lawyerId);
};

// Mensagens de status durante processamento baseadas na personalidade
export const getStatusMessages = (tone: PersonalityTone): string[] => {
  switch (tone) {
    case 'formal':
      return [
        'Consultando jurisprudência...',
        'Verificando legislação aplicável...',
        'Analisando precedentes...',
        'Revisando documentação...'
      ];
    case 'tecnico':
      return [
        'Verificando base legal...',
        'Consultando artigos relevantes...',
        'Analisando caso...',
        'Pesquisando entendimentos...'
      ];
    case 'informal':
      return [
        'Deixa eu ver aqui...',
        'Um segundo...',
        'Verificando...',
        'Olhando o caso...'
      ];
    case 'acolhedor':
      return [
        'Analisando sua situação...',
        'Pensando na melhor solução...',
        'Verificando as opções...',
        'Preparando orientação...'
      ];
    case 'direto':
    default:
      return [
        'Verificando...',
        'Analisando...',
        'Consultando...',
        'Preparando resposta...'
      ];
  }
};

// Interrupções naturais ocasionais
export const getInterruptionMessages = (lawyerName: string): { message: string; returnMessage: string }[] => [
  {
    message: 'Um momento, preciso atender uma ligação urgente...',
    returnMessage: 'Pronto, voltei! Desculpa a demora. Onde estávamos?'
  },
  {
    message: 'Só um instante, meu colega está me chamando...',
    returnMessage: 'Voltei! Era sobre outro caso. Continuando...'
  },
  {
    message: 'Deixa eu verificar uma informação rapidinho...',
    returnMessage: 'Certo, confirmei aqui. Então...'
  }
];

// Mensagens de consulta a colegas
export const getColleagueConsultMessages = (colleagueName: string, specialty: string): { consulting: string; confirmed: string } => ({
  consulting: `Deixa eu confirmar com ${colleagueName} que é especialista em ${specialty}...`,
  confirmed: `Confirmei com ${colleagueName}! Então, `
});

// Tipo para status de disponibilidade
export type AvailabilityStatus = {
  status: 'online' | 'away' | 'offline';
  label: string;
  lastSeen?: string;
  responseTime?: string;
};

// Função para obter status de disponibilidade baseado no horário
export const getLawyerAvailabilityStatus = (): AvailabilityStatus => {
  const now = new Date();
  const hour = now.getHours();
  const dayOfWeek = now.getDay(); // 0 = domingo, 6 = sábado
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  
  // Gerar horário aleatório para "último acesso"
  const generateLastSeen = (baseHour: number) => {
    const minute = Math.floor(Math.random() * 60);
    return `${baseHour}:${minute.toString().padStart(2, '0')}`;
  };
  
  // Fim de semana
  if (isWeekend) {
    if (hour >= 9 && hour < 18) {
      return { 
        status: 'online', 
        label: 'plantão fim de semana',
        responseTime: '~10 min'
      };
    } else {
      return { 
        status: 'away', 
        label: `último acesso às ${generateLastSeen(Math.max(9, Math.min(hour - 1, 17)))}`,
        responseTime: 'responde na segunda-feira'
      };
    }
  }
  
  // Horário comercial normal (08h-20h)
  if (hour >= 8 && hour < 20) {
    // Horário de almoço (12h-14h) - menos disponível
    if (hour >= 12 && hour < 14) {
      return { 
        status: 'online', 
        label: 'disponível',
        responseTime: '~5 min'
      };
    }
    return { status: 'online', label: 'online' };
  }
  
  // Plantão noturno (20h-23h)
  if (hour >= 20 && hour < 23) {
    return { 
      status: 'away', 
      label: 'plantão noturno',
      responseTime: '~5 min'
    };
  }
  
  // Madrugada (23h-06h)
  if (hour >= 23 || hour < 6) {
    const lastSeenHour = 22 + Math.floor(Math.random() * 1);
    return { 
      status: 'away', 
      label: `último acesso às ${generateLastSeen(lastSeenHour)}`,
      responseTime: 'geralmente responde pela manhã'
    };
  }
  
  // Manhã cedo (06h-08h) - plantão matutino
  if (hour >= 6 && hour < 8) {
    return { 
      status: 'online', 
      label: 'plantão matutino',
      responseTime: '~3 min'
    };
  }
  
  return { status: 'online', label: 'online' };
};

// Multiplicador de tempo de resposta baseado no horário
export const getHourMultiplier = (): number => {
  const now = new Date();
  const hour = now.getHours();
  const dayOfWeek = now.getDay();
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  
  if (isWeekend) return 1.8; // Fim de semana: mais lento
  if (hour >= 23 || hour < 6) return 2.5; // Madrugada: bem mais lento
  if (hour >= 20 && hour < 23) return 1.5; // Noite: um pouco mais lento
  if (hour >= 12 && hour < 14) return 1.3; // Almoço: levemente mais lento
  return 1; // Normal
};

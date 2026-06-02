import { TestScenario } from '@/types/qa-types';

export const qaScenarios: TestScenario[] = [
  // ================================
  // TRIAGEM - FAMÍLIA (15 cenários)
  // ================================
  {
    id: 'triagem-familia-divorcio-1',
    name: 'Divórcio consensual',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste de triagem para divórcio consensual',
    userMessage: 'Quero me divorciar do meu marido',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' },
      { type: 'no_english', value: true, message: 'Resposta deve ser em português' }
    ],
    tags: ['familia', 'divorcio']
  },
  {
    id: 'triagem-familia-divorcio-2',
    name: 'Separação litigiosa',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste de triagem para separação litigiosa',
    userMessage: 'Meu marido não quer assinar o divórcio',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' },
      { type: 'no_english', value: true, message: 'Resposta deve ser em português' }
    ],
    tags: ['familia', 'divorcio', 'litigioso']
  },
  {
    id: 'triagem-familia-pensao-1',
    name: 'Pensão alimentícia - não pagamento',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para pensão não paga',
    userMessage: 'Meu ex não paga pensão dos filhos',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' },
      { type: 'no_english', value: true, message: 'Resposta deve ser em português' }
    ],
    tags: ['familia', 'pensao']
  },
  {
    id: 'triagem-familia-pensao-2',
    name: 'Revisão de pensão',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para revisão de pensão alimentícia',
    userMessage: 'Quero aumentar a pensão dos meus filhos',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' }
    ],
    tags: ['familia', 'pensao', 'revisao']
  },
  {
    id: 'triagem-familia-guarda-1',
    name: 'Guarda compartilhada',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para guarda compartilhada',
    userMessage: 'Quero a guarda compartilhada do meu filho',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' }
    ],
    tags: ['familia', 'guarda']
  },
  {
    id: 'triagem-familia-guarda-2',
    name: 'Guarda unilateral',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para guarda unilateral',
    userMessage: 'Minha ex quer tirar meu filho de mim',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' }
    ],
    tags: ['familia', 'guarda']
  },
  {
    id: 'triagem-familia-inventario-1',
    name: 'Inventário simples',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para inventário',
    userMessage: 'Meu pai faleceu e preciso fazer o inventário',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' }
    ],
    tags: ['familia', 'inventario', 'heranca']
  },
  {
    id: 'triagem-familia-inventario-2',
    name: 'Herança contestada',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para herança contestada',
    userMessage: 'Meu irmão está escondendo bens do inventário',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' }
    ],
    tags: ['familia', 'inventario', 'heranca']
  },
  {
    id: 'triagem-familia-adocao',
    name: 'Adoção',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para processo de adoção',
    userMessage: 'Quero adotar uma criança',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' }
    ],
    tags: ['familia', 'adocao']
  },
  {
    id: 'triagem-familia-uniao-estavel',
    name: 'União estável',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para união estável',
    userMessage: 'Moro junto há 5 anos e quero reconhecer união estável',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' }
    ],
    tags: ['familia', 'uniao-estavel']
  },
  {
    id: 'triagem-familia-alienacao',
    name: 'Alienação parental',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para alienação parental',
    userMessage: 'Minha ex fala mal de mim pro meu filho',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' }
    ],
    tags: ['familia', 'alienacao']
  },
  {
    id: 'triagem-familia-partilha',
    name: 'Partilha de bens',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para partilha de bens',
    userMessage: 'Vamos nos separar e preciso dividir os bens',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' }
    ],
    tags: ['familia', 'partilha']
  },
  {
    id: 'triagem-familia-paternidade',
    name: 'Investigação de paternidade',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para investigação de paternidade',
    userMessage: 'Quero fazer teste de DNA pra saber se sou o pai',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' }
    ],
    tags: ['familia', 'paternidade']
  },
  {
    id: 'triagem-familia-visitas',
    name: 'Regulamentação de visitas',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para regulamentação de visitas',
    userMessage: 'Minha ex não deixa eu ver meus filhos',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' }
    ],
    tags: ['familia', 'visitas']
  },
  {
    id: 'triagem-familia-testamento',
    name: 'Testamento',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para elaboração de testamento',
    userMessage: 'Quero fazer meu testamento',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para advogado de família' }
    ],
    tags: ['familia', 'testamento']
  },

  // ================================
  // TRIAGEM - TRABALHISTA (20 cenários)
  // ================================
  {
    id: 'triagem-trabalhista-demissao-1',
    name: 'Demissão sem justa causa',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para demissão sem justa causa',
    userMessage: 'Fui demitido sem justa causa',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' },
      { type: 'no_english', value: true, message: 'Resposta deve ser em português' }
    ],
    tags: ['trabalhista', 'demissao']
  },
  {
    id: 'triagem-trabalhista-demissao-2',
    name: 'Demissão por justa causa indevida',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para justa causa indevida',
    userMessage: 'Fui mandado embora por justa causa mas não fiz nada',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'demissao', 'justa-causa']
  },
  {
    id: 'triagem-trabalhista-rescisao',
    name: 'Verbas rescisórias',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para verbas rescisórias não pagas',
    userMessage: 'Não recebi minhas verbas rescisórias',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'rescisao']
  },
  {
    id: 'triagem-trabalhista-horas-extras-1',
    name: 'Horas extras não pagas',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para horas extras não pagas',
    userMessage: 'Trabalhei muita hora extra e não recebi',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'horas-extras']
  },
  {
    id: 'triagem-trabalhista-horas-extras-2',
    name: 'Banco de horas irregular',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para banco de horas irregular',
    userMessage: 'A empresa tem banco de horas mas nunca deixa eu folgar',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'horas-extras', 'banco-horas']
  },
  {
    id: 'triagem-trabalhista-fgts',
    name: 'FGTS não depositado',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para FGTS não depositado',
    userMessage: 'A empresa não está depositando meu FGTS',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'fgts']
  },
  {
    id: 'triagem-trabalhista-assedio-moral',
    name: 'Assédio moral',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para assédio moral no trabalho',
    userMessage: 'Meu chefe me humilha na frente de todo mundo',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'assedio']
  },
  {
    id: 'triagem-trabalhista-assedio-sexual',
    name: 'Assédio sexual',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para assédio sexual no trabalho',
    userMessage: 'Estou sendo assediada sexualmente no trabalho',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'assedio', 'sexual']
  },
  {
    id: 'triagem-trabalhista-acidente-1',
    name: 'Acidente de trabalho',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para acidente de trabalho',
    userMessage: 'Sofri um acidente no trabalho',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'acidente']
  },
  {
    id: 'triagem-trabalhista-acidente-2',
    name: 'Doença ocupacional',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para doença ocupacional',
    userMessage: 'Desenvolvi LER por causa do trabalho',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'doenca', 'ocupacional']
  },
  {
    id: 'triagem-trabalhista-registro',
    name: 'Falta de registro em carteira',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para falta de registro',
    userMessage: 'Trabalho há 2 anos sem carteira assinada',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'registro', 'carteira']
  },
  {
    id: 'triagem-trabalhista-ferias',
    name: 'Férias não concedidas',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para férias não concedidas',
    userMessage: 'Nunca tirei férias e já trabalho há 3 anos',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'ferias']
  },
  {
    id: 'triagem-trabalhista-13',
    name: '13º não pago',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para 13º não pago',
    userMessage: 'Não recebi meu décimo terceiro',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'decimo-terceiro']
  },
  {
    id: 'triagem-trabalhista-estabilidade',
    name: 'Estabilidade gestante',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para demissão de gestante',
    userMessage: 'Fui demitida grávida',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'estabilidade', 'gestante']
  },
  {
    id: 'triagem-trabalhista-pj',
    name: 'PJ fraudulento',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para PJ fraudulento',
    userMessage: 'Sou PJ mas trabalho como CLT',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'pj', 'vinculo']
  },
  {
    id: 'triagem-trabalhista-desvio-funcao',
    name: 'Desvio de função',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para desvio de função',
    userMessage: 'Faço trabalho de gerente mas ganho como auxiliar',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'desvio-funcao']
  },
  {
    id: 'triagem-trabalhista-equiparacao',
    name: 'Equiparação salarial',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para equiparação salarial',
    userMessage: 'Faço o mesmo trabalho que meu colega mas ganho menos',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'equiparacao']
  },
  {
    id: 'triagem-trabalhista-adicional',
    name: 'Adicional de insalubridade',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para adicional de insalubridade',
    userMessage: 'Trabalho com produtos químicos e não recebo insalubridade',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'adicional', 'insalubridade']
  },
  {
    id: 'triagem-trabalhista-periculosidade',
    name: 'Adicional de periculosidade',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para adicional de periculosidade',
    userMessage: 'Trabalho com eletricidade e não ganho periculosidade',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'adicional', 'periculosidade']
  },
  {
    id: 'triagem-trabalhista-intervalo',
    name: 'Intervalo suprimido',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para intervalo suprimido',
    userMessage: 'Não tenho horário de almoço',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['trabalhista', 'intervalo']
  },

  // ================================
  // TRIAGEM - PREVIDENCIÁRIO (15 cenários)
  // ================================
  {
    id: 'triagem-previdenciario-aposentadoria-1',
    name: 'Aposentadoria por idade',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para aposentadoria por idade',
    userMessage: 'Quero me aposentar por idade',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' },
      { type: 'no_english', value: true, message: 'Resposta deve ser em português' }
    ],
    tags: ['previdenciario', 'aposentadoria']
  },
  {
    id: 'triagem-previdenciario-aposentadoria-2',
    name: 'Aposentadoria por tempo',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para aposentadoria por tempo de contribuição',
    userMessage: 'Já contribui 35 anos, posso me aposentar?',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' }
    ],
    tags: ['previdenciario', 'aposentadoria']
  },
  {
    id: 'triagem-previdenciario-auxilio-doenca',
    name: 'Auxílio-doença',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para auxílio-doença',
    userMessage: 'Preciso de auxílio doença',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' }
    ],
    tags: ['previdenciario', 'auxilio-doenca']
  },
  {
    id: 'triagem-previdenciario-auxilio-negado',
    name: 'Auxílio-doença negado',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para auxílio-doença negado',
    userMessage: 'O INSS negou meu auxílio doença',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' }
    ],
    tags: ['previdenciario', 'auxilio-doenca', 'negado']
  },
  {
    id: 'triagem-previdenciario-bpc-loas',
    name: 'BPC/LOAS',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para BPC/LOAS',
    userMessage: 'Quero o benefício de prestação continuada',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' }
    ],
    tags: ['previdenciario', 'bpc', 'loas']
  },
  {
    id: 'triagem-previdenciario-invalidez',
    name: 'Aposentadoria por invalidez',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para aposentadoria por invalidez',
    userMessage: 'Não consigo mais trabalhar por doença',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' }
    ],
    tags: ['previdenciario', 'invalidez']
  },
  {
    id: 'triagem-previdenciario-pensao-morte',
    name: 'Pensão por morte',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para pensão por morte',
    userMessage: 'Meu marido faleceu, tenho direito a pensão?',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' }
    ],
    tags: ['previdenciario', 'pensao-morte']
  },
  {
    id: 'triagem-previdenciario-revisao',
    name: 'Revisão de benefício',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para revisão de aposentadoria',
    userMessage: 'Minha aposentadoria está errada, quero revisar',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' }
    ],
    tags: ['previdenciario', 'revisao']
  },
  {
    id: 'triagem-previdenciario-rural',
    name: 'Aposentadoria rural',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para aposentadoria rural',
    userMessage: 'Sou trabalhador rural e quero me aposentar',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' }
    ],
    tags: ['previdenciario', 'rural']
  },
  {
    id: 'triagem-previdenciario-especial',
    name: 'Aposentadoria especial',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para aposentadoria especial',
    userMessage: 'Trabalho em condições insalubres há 25 anos',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' }
    ],
    tags: ['previdenciario', 'especial']
  },
  {
    id: 'triagem-previdenciario-acidentario',
    name: 'Auxílio-acidente',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para auxílio-acidente',
    userMessage: 'Tive um acidente e fiquei com sequela',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' }
    ],
    tags: ['previdenciario', 'auxilio-acidente']
  },
  {
    id: 'triagem-previdenciario-salario-maternidade',
    name: 'Salário-maternidade',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para salário-maternidade',
    userMessage: 'Estou grávida e não tenho carteira assinada',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' }
    ],
    tags: ['previdenciario', 'maternidade']
  },
  {
    id: 'triagem-previdenciario-tempo-contribuicao',
    name: 'Averbação de tempo',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para averbação de tempo de contribuição',
    userMessage: 'Preciso averbar meu tempo de serviço militar',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' }
    ],
    tags: ['previdenciario', 'averbacao']
  },
  {
    id: 'triagem-previdenciario-restabelecimento',
    name: 'Restabelecimento de benefício',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para restabelecimento',
    userMessage: 'Cortaram meu benefício do INSS',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' }
    ],
    tags: ['previdenciario', 'restabelecimento']
  },
  {
    id: 'triagem-previdenciario-planejamento',
    name: 'Planejamento previdenciário',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para planejamento previdenciário',
    userMessage: 'Quero saber quando posso me aposentar',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para advogado previdenciário' }
    ],
    tags: ['previdenciario', 'planejamento']
  },

  // ================================
  // TRIAGEM - CIVIL/CONSUMIDOR (20 cenários)
  // ================================
  {
    id: 'triagem-civil-negativacao-1',
    name: 'Negativação indevida',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para negativação indevida',
    userMessage: 'Negativaram meu nome sem eu dever nada',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' },
      { type: 'no_english', value: true, message: 'Resposta deve ser em português' }
    ],
    tags: ['civil', 'consumidor', 'negativacao']
  },
  {
    id: 'triagem-civil-negativacao-2',
    name: 'Nome sujo após pagamento',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para nome sujo após quitação',
    userMessage: 'Paguei a dívida mas meu nome continua sujo',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'consumidor', 'negativacao']
  },
  {
    id: 'triagem-civil-produto-defeito',
    name: 'Produto com defeito',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para produto com defeito',
    userMessage: 'Comprei um celular e veio com defeito',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'consumidor', 'produto']
  },
  {
    id: 'triagem-civil-servico-nao-prestado',
    name: 'Serviço não prestado',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para serviço não prestado',
    userMessage: 'Paguei por um serviço que não foi feito',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'consumidor', 'servico']
  },
  {
    id: 'triagem-civil-cobranca-indevida',
    name: 'Cobrança indevida',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para cobrança indevida',
    userMessage: 'Estão me cobrando uma conta que eu já paguei',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'consumidor', 'cobranca']
  },
  {
    id: 'triagem-civil-banco-1',
    name: 'Fraude bancária',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para fraude bancária',
    userMessage: 'Clonaram meu cartão e fizeram compras',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'consumidor', 'banco', 'fraude']
  },
  {
    id: 'triagem-civil-banco-2',
    name: 'Empréstimo não autorizado',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para empréstimo não autorizado',
    userMessage: 'Apareceu um empréstimo que eu não fiz',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'consumidor', 'banco', 'emprestimo']
  },
  {
    id: 'triagem-civil-plano-saude-1',
    name: 'Negativa de plano de saúde',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para negativa de plano de saúde',
    userMessage: 'O plano de saúde negou minha cirurgia',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'consumidor', 'plano-saude']
  },
  {
    id: 'triagem-civil-plano-saude-2',
    name: 'Reajuste abusivo',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para reajuste abusivo de plano',
    userMessage: 'Meu plano de saúde aumentou 50%',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'consumidor', 'plano-saude', 'reajuste']
  },
  {
    id: 'triagem-civil-imovel-1',
    name: 'Atraso na entrega de imóvel',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para atraso na entrega de imóvel',
    userMessage: 'A construtora não entregou meu apartamento',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'imobiliario', 'atraso']
  },
  {
    id: 'triagem-civil-imovel-2',
    name: 'Defeitos na construção',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para defeitos na construção',
    userMessage: 'Meu apartamento novo está cheio de problemas',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'imobiliario', 'defeito']
  },
  {
    id: 'triagem-civil-locacao',
    name: 'Problema com locação',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para problema com locação',
    userMessage: 'O dono do imóvel não quer devolver meu depósito',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'imobiliario', 'locacao']
  },
  {
    id: 'triagem-civil-voo-1',
    name: 'Voo cancelado',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para voo cancelado',
    userMessage: 'A companhia aérea cancelou meu voo',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'consumidor', 'aereo']
  },
  {
    id: 'triagem-civil-voo-2',
    name: 'Extravio de bagagem',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para extravio de bagagem',
    userMessage: 'A empresa aérea perdeu minha mala',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'consumidor', 'aereo', 'bagagem']
  },
  {
    id: 'triagem-civil-telefonia',
    name: 'Problema com operadora',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para problema com operadora',
    userMessage: 'A operadora cobra por serviço que não contratei',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'consumidor', 'telefonia']
  },
  {
    id: 'triagem-civil-danos-morais',
    name: 'Danos morais',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para danos morais',
    userMessage: 'Quero indenização por danos morais',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'danos-morais']
  },
  {
    id: 'triagem-civil-acidente-transito',
    name: 'Acidente de trânsito',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para acidente de trânsito',
    userMessage: 'Sofri um acidente de carro e quero ser indenizado',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'acidente', 'transito']
  },
  {
    id: 'triagem-civil-contrato',
    name: 'Descumprimento de contrato',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para descumprimento de contrato',
    userMessage: 'A empresa não cumpriu o que estava no contrato',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'contrato']
  },
  {
    id: 'triagem-civil-vizinho',
    name: 'Problemas com vizinho',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para problemas com vizinho',
    userMessage: 'Meu vizinho faz barulho toda noite',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'vizinhanca']
  },
  {
    id: 'triagem-civil-golpe',
    name: 'Vítima de golpe',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para vítima de golpe',
    userMessage: 'Caí num golpe e perdi muito dinheiro',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['civil', 'golpe', 'fraude']
  },

  // ================================
  // TRIAGEM - PENAL (15 cenários)
  // ================================
  {
    id: 'triagem-penal-prisao-1',
    name: 'Prisão em flagrante',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para prisão em flagrante',
    userMessage: 'Meu filho foi preso em flagrante',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' },
      { type: 'no_english', value: true, message: 'Resposta deve ser em português' }
    ],
    tags: ['penal', 'prisao']
  },
  {
    id: 'triagem-penal-prisao-2',
    name: 'Pedido de habeas corpus',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para habeas corpus',
    userMessage: 'Preciso tirar meu marido da prisão',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['penal', 'habeas-corpus']
  },
  {
    id: 'triagem-penal-ameaca',
    name: 'Ameaça',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para ameaça',
    userMessage: 'Estou sendo ameaçado de morte',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['penal', 'ameaca']
  },
  {
    id: 'triagem-penal-violencia-domestica',
    name: 'Violência doméstica',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para violência doméstica',
    userMessage: 'Meu marido me agrediu',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['penal', 'maria-da-penha']
  },
  {
    id: 'triagem-penal-medida-protetiva',
    name: 'Medida protetiva',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para medida protetiva',
    userMessage: 'Preciso de medida protetiva contra meu ex',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['penal', 'medida-protetiva']
  },
  {
    id: 'triagem-penal-estelionato',
    name: 'Estelionato',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para estelionato',
    userMessage: 'Fui vítima de estelionato',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['penal', 'estelionato']
  },
  {
    id: 'triagem-penal-difamacao',
    name: 'Difamação',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para difamação',
    userMessage: 'Estão espalhando mentiras sobre mim',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['penal', 'honra']
  },
  {
    id: 'triagem-penal-calnia',
    name: 'Calúnia',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para calúnia',
    userMessage: 'Estão me acusando de um crime que não cometi',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['penal', 'honra']
  },
  {
    id: 'triagem-penal-injuria',
    name: 'Injúria racial',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para injúria racial',
    userMessage: 'Sofri injúria racial no trabalho',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['penal', 'injuria', 'racismo']
  },
  {
    id: 'triagem-penal-furto',
    name: 'Furto',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para furto',
    userMessage: 'Roubaram meu celular na rua',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['penal', 'furto']
  },
  {
    id: 'triagem-penal-defesa',
    name: 'Defesa criminal',
    category: 'triagem',
    priority: 'critical',
    description: 'Teste para defesa criminal',
    userMessage: 'Estou respondendo processo criminal',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['penal', 'defesa']
  },
  {
    id: 'triagem-penal-audiencia',
    name: 'Audiência criminal',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para audiência criminal',
    userMessage: 'Tenho audiência criminal na próxima semana',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['penal', 'audiencia']
  },
  {
    id: 'triagem-penal-progressao',
    name: 'Progressão de regime',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para progressão de regime',
    userMessage: 'Meu irmão está preso e quer progressão de regime',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['penal', 'execucao']
  },
  {
    id: 'triagem-penal-fianca',
    name: 'Fiança',
    category: 'triagem',
    priority: 'high',
    description: 'Teste para pagamento de fiança',
    userMessage: 'Quanto custa a fiança pra soltar meu filho?',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['penal', 'fianca']
  },
  {
    id: 'triagem-penal-antecedentes',
    name: 'Limpar antecedentes',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste para limpar antecedentes',
    userMessage: 'Quero limpar minha ficha criminal',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['penal', 'antecedentes']
  },

  // ================================
  // TRANSFERÊNCIA (15 cenários)
  // ================================
  {
    id: 'transfer-aceite-sim',
    name: 'Aceite com "sim"',
    category: 'transfer',
    priority: 'critical',
    description: 'Teste de aceite de transferência com "sim"',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir você para a Dra. Maria Santos?' }
    ],
    userMessage: 'sim',
    assertions: [
      { type: 'action_equals', value: 'confirm_transfer', message: 'Deve confirmar transferência' }
    ],
    tags: ['transfer', 'aceite']
  },
  {
    id: 'transfer-aceite-pode',
    name: 'Aceite com "pode"',
    category: 'transfer',
    priority: 'high',
    description: 'Teste de aceite com "pode"',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir você para o Dr. Carlos?' }
    ],
    userMessage: 'pode',
    assertions: [
      { type: 'action_equals', value: 'confirm_transfer', message: 'Deve confirmar transferência' }
    ],
    tags: ['transfer', 'aceite']
  },
  {
    id: 'transfer-aceite-ok',
    name: 'Aceite com "ok"',
    category: 'transfer',
    priority: 'high',
    description: 'Teste de aceite com "ok"',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir você para a especialista?' }
    ],
    userMessage: 'ok',
    assertions: [
      { type: 'action_equals', value: 'confirm_transfer', message: 'Deve confirmar transferência' }
    ],
    tags: ['transfer', 'aceite']
  },
  {
    id: 'transfer-aceite-beleza',
    name: 'Aceite com "beleza"',
    category: 'transfer',
    priority: 'medium',
    description: 'Teste de aceite com "beleza"',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir?' }
    ],
    userMessage: 'beleza',
    assertions: [
      { type: 'action_equals', value: 'confirm_transfer', message: 'Deve confirmar transferência' }
    ],
    tags: ['transfer', 'aceite']
  },
  {
    id: 'transfer-aceite-typo',
    name: 'Aceite com typo "sikm"',
    category: 'transfer',
    priority: 'high',
    description: 'Teste de aceite com typo',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir?' }
    ],
    userMessage: 'sikm',
    assertions: [
      { type: 'action_equals', value: 'confirm_transfer', message: 'Deve aceitar typo de sim' }
    ],
    tags: ['transfer', 'aceite', 'typo']
  },
  {
    id: 'transfer-aceite-claro',
    name: 'Aceite com "claro"',
    category: 'transfer',
    priority: 'medium',
    description: 'Teste de aceite com "claro"',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir?' }
    ],
    userMessage: 'claro',
    assertions: [
      { type: 'action_equals', value: 'confirm_transfer', message: 'Deve confirmar transferência' }
    ],
    tags: ['transfer', 'aceite']
  },
  {
    id: 'transfer-negacao-nao',
    name: 'Negação com "não"',
    category: 'transfer',
    priority: 'critical',
    description: 'Teste de negação de transferência',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir?' }
    ],
    userMessage: 'não',
    assertions: [
      { type: 'action_equals', value: 'deny_transfer', message: 'Deve negar transferência' }
    ],
    tags: ['transfer', 'negacao']
  },
  {
    id: 'transfer-negacao-depois',
    name: 'Negação com "depois"',
    category: 'transfer',
    priority: 'high',
    description: 'Teste de negação com "depois"',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir?' }
    ],
    userMessage: 'depois',
    assertions: [
      { type: 'action_equals', value: 'deny_transfer', message: 'Deve entender como negação' }
    ],
    tags: ['transfer', 'negacao']
  },
  {
    id: 'transfer-negacao-agora-nao',
    name: 'Negação com "agora não"',
    category: 'transfer',
    priority: 'high',
    description: 'Teste de negação com "agora não"',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir?' }
    ],
    userMessage: 'agora não',
    assertions: [
      { type: 'action_equals', value: 'deny_transfer', message: 'Deve entender como negação' }
    ],
    tags: ['transfer', 'negacao']
  },
  {
    id: 'transfer-pergunta',
    name: 'Pergunta antes de aceitar',
    category: 'transfer',
    priority: 'medium',
    description: 'Teste de pergunta sobre transferência',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir você para a Dra. Maria?' }
    ],
    userMessage: 'quem é essa advogada?',
    assertions: [
      { type: 'response_contains', value: 'especialista', message: 'Deve explicar sobre a advogada' }
    ],
    tags: ['transfer', 'pergunta']
  },
  {
    id: 'transfer-mudanca-assunto',
    name: 'Mudança de assunto na transferência',
    category: 'transfer',
    priority: 'medium',
    description: 'Teste de mudança de assunto',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir você para o Dr. Carlos?' }
    ],
    userMessage: 'na verdade meu problema é outro',
    assertions: [
      { type: 'response_contains', value: 'conte', message: 'Deve perguntar sobre o novo problema' }
    ],
    tags: ['transfer', 'mudanca']
  },
  {
    id: 'transfer-aceite-emoji',
    name: 'Aceite com emoji',
    category: 'transfer',
    priority: 'medium',
    description: 'Teste de aceite com emoji',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir?' }
    ],
    userMessage: '👍',
    assertions: [
      { type: 'action_equals', value: 'confirm_transfer', message: 'Deve aceitar emoji positivo' }
    ],
    tags: ['transfer', 'aceite', 'emoji']
  },
  {
    id: 'transfer-aceite-bora',
    name: 'Aceite com "bora"',
    category: 'transfer',
    priority: 'medium',
    description: 'Teste de aceite informal',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir?' }
    ],
    userMessage: 'bora',
    assertions: [
      { type: 'action_equals', value: 'confirm_transfer', message: 'Deve aceitar gíria' }
    ],
    tags: ['transfer', 'aceite', 'informal']
  },
  {
    id: 'transfer-aceite-vamos',
    name: 'Aceite com "vamos lá"',
    category: 'transfer',
    priority: 'medium',
    description: 'Teste de aceite com "vamos lá"',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir?' }
    ],
    userMessage: 'vamos lá',
    assertions: [
      { type: 'action_equals', value: 'confirm_transfer', message: 'Deve aceitar' }
    ],
    tags: ['transfer', 'aceite']
  },
  {
    id: 'transfer-negacao-prefiro-nao',
    name: 'Negação com "prefiro não"',
    category: 'transfer',
    priority: 'medium',
    description: 'Teste de negação educada',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir?' }
    ],
    userMessage: 'prefiro não',
    assertions: [
      { type: 'action_equals', value: 'deny_transfer', message: 'Deve entender negação educada' }
    ],
    tags: ['transfer', 'negacao']
  },

  // ================================
  // COLETA DE LEADS (15 cenários)
  // ================================
  {
    id: 'lead-nome-valido',
    name: 'Nome válido',
    category: 'lead',
    priority: 'critical',
    description: 'Teste de coleta de nome válido',
    conversationHistory: [
      { role: 'assistant', content: 'Qual é o seu nome completo?' }
    ],
    userMessage: 'João da Silva',
    assertions: [
      { type: 'lead_field_saved', value: 'name', message: 'Deve salvar o nome' }
    ],
    tags: ['lead', 'nome']
  },
  {
    id: 'lead-nome-simples',
    name: 'Nome simples',
    category: 'lead',
    priority: 'high',
    description: 'Teste de nome com uma palavra',
    conversationHistory: [
      { role: 'assistant', content: 'Qual é o seu nome completo?' }
    ],
    userMessage: 'Maria',
    assertions: [
      { type: 'response_contains', value: 'sobrenome', message: 'Deve pedir sobrenome' }
    ],
    tags: ['lead', 'nome', 'validacao']
  },
  {
    id: 'lead-nome-invalido',
    name: 'Resposta não é nome',
    category: 'lead',
    priority: 'high',
    description: 'Teste de resposta que não é nome',
    conversationHistory: [
      { role: 'assistant', content: 'Qual é o seu nome?' }
    ],
    userMessage: 'sim',
    assertions: [
      { type: 'response_contains', value: 'nome', message: 'Deve pedir nome novamente' }
    ],
    tags: ['lead', 'nome', 'validacao']
  },
  {
    id: 'lead-telefone-ddd',
    name: 'Telefone com DDD',
    category: 'lead',
    priority: 'critical',
    description: 'Teste de telefone com DDD',
    conversationHistory: [
      { role: 'assistant', content: 'Qual seu telefone?' }
    ],
    userMessage: '71997036269',
    assertions: [
      { type: 'lead_field_saved', value: 'phone', message: 'Deve salvar telefone com 55' }
    ],
    tags: ['lead', 'telefone']
  },
  {
    id: 'lead-telefone-completo',
    name: 'Telefone completo',
    category: 'lead',
    priority: 'high',
    description: 'Teste de telefone com código do país',
    conversationHistory: [
      { role: 'assistant', content: 'Qual seu telefone?' }
    ],
    userMessage: '5571997092633',
    assertions: [
      { type: 'lead_field_saved', value: 'phone', message: 'Deve salvar telefone' }
    ],
    tags: ['lead', 'telefone']
  },
  {
    id: 'lead-telefone-formatado',
    name: 'Telefone formatado',
    category: 'lead',
    priority: 'high',
    description: 'Teste de telefone com formatação',
    conversationHistory: [
      { role: 'assistant', content: 'Qual seu telefone?' }
    ],
    userMessage: '(71) 99703-6269',
    assertions: [
      { type: 'lead_field_saved', value: 'phone', message: 'Deve limpar formatação e salvar' }
    ],
    tags: ['lead', 'telefone', 'formatacao']
  },
  {
    id: 'lead-telefone-invalido',
    name: 'Telefone inválido',
    category: 'lead',
    priority: 'high',
    description: 'Teste de telefone inválido',
    conversationHistory: [
      { role: 'assistant', content: 'Qual seu telefone?' }
    ],
    userMessage: '123456',
    assertions: [
      { type: 'response_contains', value: 'telefone', message: 'Deve pedir telefone válido' }
    ],
    tags: ['lead', 'telefone', 'validacao']
  },
  {
    id: 'lead-email-valido',
    name: 'Email válido',
    category: 'lead',
    priority: 'high',
    description: 'Teste de email válido',
    conversationHistory: [
      { role: 'assistant', content: 'Qual seu email?' }
    ],
    userMessage: 'joao@email.com',
    assertions: [
      { type: 'lead_field_saved', value: 'email', message: 'Deve salvar email' }
    ],
    tags: ['lead', 'email']
  },
  {
    id: 'lead-email-invalido',
    name: 'Email inválido',
    category: 'lead',
    priority: 'high',
    description: 'Teste de email inválido',
    conversationHistory: [
      { role: 'assistant', content: 'Qual seu email?' }
    ],
    userMessage: 'joao@',
    assertions: [
      { type: 'response_contains', value: 'email', message: 'Deve pedir email válido' }
    ],
    tags: ['lead', 'email', 'validacao']
  },
  {
    id: 'lead-sem-email',
    name: 'Usuário sem email',
    category: 'lead',
    priority: 'medium',
    description: 'Teste quando usuário não tem email',
    conversationHistory: [
      { role: 'assistant', content: 'Qual seu email?' }
    ],
    userMessage: 'não tenho email',
    assertions: [
      { type: 'response_contains', value: 'telefone', message: 'Deve prosseguir sem email' }
    ],
    tags: ['lead', 'email', 'opcional']
  },
  {
    id: 'lead-telefone-texto',
    name: 'Telefone em texto',
    category: 'lead',
    priority: 'medium',
    description: 'Teste de telefone escrito',
    conversationHistory: [
      { role: 'assistant', content: 'Qual seu telefone?' }
    ],
    userMessage: 'setenta e um nove nove sete zero três',
    assertions: [
      { type: 'response_contains', value: 'dígitos', message: 'Deve pedir em números' }
    ],
    tags: ['lead', 'telefone', 'validacao']
  },
  {
    id: 'lead-coleta-rapida',
    name: 'Nome e telefone juntos',
    category: 'lead',
    priority: 'medium',
    description: 'Teste quando usuário dá nome e telefone juntos',
    conversationHistory: [
      { role: 'assistant', content: 'Para dar continuidade, preciso de algumas informações...' }
    ],
    userMessage: 'João Silva, 71997036269',
    assertions: [
      { type: 'lead_field_saved', value: 'name', message: 'Deve salvar nome' },
      { type: 'lead_field_saved', value: 'phone', message: 'Deve salvar telefone' }
    ],
    tags: ['lead', 'nome', 'telefone']
  },
  {
    id: 'lead-pressa',
    name: 'Usuário com pressa',
    category: 'lead',
    priority: 'medium',
    description: 'Teste quando usuário está apressado',
    conversationHistory: [
      { role: 'assistant', content: 'Qual seu nome?' }
    ],
    userMessage: 'tenho pressa, me liga logo',
    assertions: [
      { type: 'response_contains', value: 'nome', message: 'Deve insistir no nome' }
    ],
    tags: ['lead', 'urgencia']
  },
  {
    id: 'lead-dados-completos',
    name: 'Todos os dados de uma vez',
    category: 'lead',
    priority: 'medium',
    description: 'Teste com todos os dados',
    conversationHistory: [
      { role: 'assistant', content: 'Preciso de seus dados...' }
    ],
    userMessage: 'João Silva, joao@email.com, 71997036269',
    assertions: [
      { type: 'lead_field_saved', value: 'name', message: 'Deve salvar nome' },
      { type: 'lead_field_saved', value: 'email', message: 'Deve salvar email' },
      { type: 'lead_field_saved', value: 'phone', message: 'Deve salvar telefone' }
    ],
    tags: ['lead', 'completo']
  },
  {
    id: 'lead-nome-especial',
    name: 'Nome com caracteres especiais',
    category: 'lead',
    priority: 'low',
    description: 'Teste de nome com acentos',
    conversationHistory: [
      { role: 'assistant', content: 'Qual seu nome?' }
    ],
    userMessage: 'José Conceição',
    assertions: [
      { type: 'lead_field_saved', value: 'name', message: 'Deve aceitar acentos' }
    ],
    tags: ['lead', 'nome', 'especial']
  },

  // ================================
  // EDGE CASES (15 cenários)
  // ================================
  {
    id: 'edge-mensagem-vazia',
    name: 'Mensagem vazia',
    category: 'edge',
    priority: 'high',
    description: 'Teste com mensagem vazia',
    userMessage: '',
    assertions: [
      { type: 'response_contains', value: 'ajudar', message: 'Deve perguntar como ajudar' }
    ],
    tags: ['edge', 'vazio']
  },
  {
    id: 'edge-mensagem-longa',
    name: 'Mensagem muito longa',
    category: 'edge',
    priority: 'medium',
    description: 'Teste com mensagem de 3000 caracteres',
    userMessage: 'Olá, preciso de ajuda com um problema muito complexo. ' + 'A'.repeat(3000),
    assertions: [
      { type: 'response_time_under', value: 10000, message: 'Deve responder em tempo razoável' }
    ],
    tags: ['edge', 'longo']
  },
  {
    id: 'edge-emoji-somente',
    name: 'Somente emojis',
    category: 'edge',
    priority: 'medium',
    description: 'Teste com somente emojis',
    userMessage: '😀😀😀',
    assertions: [
      { type: 'response_contains', value: 'ajudar', message: 'Deve perguntar como ajudar' }
    ],
    tags: ['edge', 'emoji']
  },
  {
    id: 'edge-caracteres-especiais',
    name: 'Caracteres especiais',
    category: 'edge',
    priority: 'medium',
    description: 'Teste com caracteres especiais',
    userMessage: '🔥💯 Preciso de ajuda urgente!!!',
    assertions: [
      { type: 'no_english', value: true, message: 'Deve responder normalmente' }
    ],
    tags: ['edge', 'especial']
  },
  {
    id: 'edge-ingles',
    name: 'Mensagem em inglês',
    category: 'edge',
    priority: 'high',
    description: 'Teste com mensagem em inglês',
    userMessage: 'I need help with my divorce',
    assertions: [
      { type: 'no_english', value: true, message: 'Deve responder em português' }
    ],
    tags: ['edge', 'idioma']
  },
  {
    id: 'edge-espanhol',
    name: 'Mensagem em espanhol',
    category: 'edge',
    priority: 'medium',
    description: 'Teste com mensagem em espanhol',
    userMessage: 'Necesito ayuda con mi divorcio',
    assertions: [
      { type: 'no_english', value: true, message: 'Deve responder em português' }
    ],
    tags: ['edge', 'idioma']
  },
  {
    id: 'edge-repetido',
    name: 'Mensagem repetida',
    category: 'edge',
    priority: 'medium',
    description: 'Teste de mensagem repetida',
    conversationHistory: [
      { role: 'user', content: 'oi' },
      { role: 'assistant', content: 'Olá! Como posso ajudar?' }
    ],
    userMessage: 'oi',
    assertions: [
      { type: 'response_contains', value: 'ajudar', message: 'Deve responder normalmente' }
    ],
    tags: ['edge', 'repetido']
  },
  {
    id: 'edge-ofensa',
    name: 'Mensagem ofensiva',
    category: 'edge',
    priority: 'high',
    description: 'Teste com conteúdo ofensivo',
    userMessage: 'vocês são muito ruins',
    assertions: [
      { type: 'response_contains', value: 'ajudar', message: 'Deve manter profissionalismo' }
    ],
    tags: ['edge', 'ofensa']
  },
  {
    id: 'edge-numero-somente',
    name: 'Somente números',
    category: 'edge',
    priority: 'low',
    description: 'Teste com somente números',
    userMessage: '123456789',
    assertions: [
      { type: 'response_contains', value: 'entender', message: 'Deve pedir esclarecimento' }
    ],
    tags: ['edge', 'numero']
  },
  {
    id: 'edge-maiusculas',
    name: 'Tudo em maiúsculas',
    category: 'edge',
    priority: 'low',
    description: 'Teste com texto em CAPS',
    userMessage: 'PRECISO DE AJUDA URGENTE COM MEU DIVÓRCIO',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve identificar área corretamente' }
    ],
    tags: ['edge', 'caps']
  },
  {
    id: 'edge-abreviacoes',
    name: 'Abreviações',
    category: 'edge',
    priority: 'medium',
    description: 'Teste com abreviações',
    userMessage: 'vc pd me ajudar c meu div?',
    assertions: [
      { type: 'response_contains', value: 'divórcio', message: 'Deve entender abreviações' }
    ],
    tags: ['edge', 'abreviacao']
  },
  {
    id: 'edge-multiplas-perguntas',
    name: 'Múltiplas perguntas',
    category: 'edge',
    priority: 'medium',
    description: 'Teste com múltiplas perguntas',
    userMessage: 'Quero saber sobre divórcio. Quanto custa? Quanto tempo demora? Preciso de advogado?',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve identificar área principal' }
    ],
    tags: ['edge', 'multiplo']
  },
  {
    id: 'edge-link',
    name: 'Mensagem com link',
    category: 'edge',
    priority: 'low',
    description: 'Teste com link na mensagem',
    userMessage: 'Olha isso https://exemplo.com preciso de ajuda',
    assertions: [
      { type: 'response_contains', value: 'ajudar', message: 'Deve ignorar link e responder' }
    ],
    tags: ['edge', 'link']
  },
  {
    id: 'edge-timeout-simulado',
    name: 'Resposta após delay',
    category: 'edge',
    priority: 'medium',
    description: 'Teste de resposta lenta',
    userMessage: 'preciso de ajuda com meu processo',
    assertions: [
      { type: 'response_time_under', value: 15000, message: 'Deve responder em até 15s' }
    ],
    tags: ['edge', 'timeout']
  },
  {
    id: 'edge-html-injection',
    name: 'HTML injection',
    category: 'edge',
    priority: 'high',
    description: 'Teste de segurança com HTML',
    userMessage: '<script>alert("test")</script>Preciso de ajuda',
    assertions: [
      { type: 'response_contains', value: 'ajudar', message: 'Deve sanitizar e responder' }
    ],
    tags: ['edge', 'seguranca']
  },

  // ================================
  // STRESS (5 cenários)
  // ================================
  {
    id: 'stress-rapido-1',
    name: 'Resposta rápida - triagem',
    category: 'stress',
    priority: 'high',
    description: 'Teste de performance em triagem',
    userMessage: 'Preciso de advogado para divórcio',
    assertions: [
      { type: 'response_time_under', value: 5000, message: 'Deve responder em até 5s' },
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir corretamente' }
    ],
    tags: ['stress', 'performance']
  },
  {
    id: 'stress-rapido-2',
    name: 'Resposta rápida - transferência',
    category: 'stress',
    priority: 'high',
    description: 'Teste de performance em transferência',
    conversationHistory: [
      { role: 'assistant', content: 'Posso transferir?' }
    ],
    userMessage: 'sim',
    assertions: [
      { type: 'response_time_under', value: 3000, message: 'Deve responder em até 3s' },
      { type: 'action_equals', value: 'confirm_transfer', message: 'Deve confirmar' }
    ],
    tags: ['stress', 'performance']
  },
  {
    id: 'stress-rapido-3',
    name: 'Resposta rápida - coleta',
    category: 'stress',
    priority: 'high',
    description: 'Teste de performance na coleta',
    conversationHistory: [
      { role: 'assistant', content: 'Qual seu nome?' }
    ],
    userMessage: 'João Silva',
    assertions: [
      { type: 'response_time_under', value: 3000, message: 'Deve responder em até 3s' },
      { type: 'lead_field_saved', value: 'name', message: 'Deve salvar nome' }
    ],
    tags: ['stress', 'performance']
  },
  {
    id: 'stress-carga-baixa',
    name: 'Teste de carga baixa',
    category: 'stress',
    priority: 'medium',
    description: 'Teste com 5 requisições simultâneas',
    userMessage: 'Teste de carga',
    assertions: [
      { type: 'response_time_under', value: 10000, message: 'Deve responder todas em até 10s' }
    ],
    tags: ['stress', 'carga']
  },
  {
    id: 'stress-carga-media',
    name: 'Teste de carga média',
    category: 'stress',
    priority: 'low',
    description: 'Teste com 10 requisições simultâneas',
    userMessage: 'Teste de carga',
    assertions: [
      { type: 'response_time_under', value: 15000, message: 'Deve responder todas em até 15s' }
    ],
    tags: ['stress', 'carga']
  },

  // ================================
  // REGRESSÃO (10 cenários)
  // ================================
  {
    id: 'regression-saudacao-oi',
    name: 'Saudação simples "oi"',
    category: 'regression',
    priority: 'critical',
    description: 'Teste de saudação básica',
    userMessage: 'oi',
    assertions: [
      { type: 'no_english', value: true, message: 'Deve responder em português' },
      { type: 'response_contains', value: 'ajudar', message: 'Deve perguntar como ajudar' }
    ],
    tags: ['regression', 'saudacao']
  },
  {
    id: 'regression-saudacao-bom-dia',
    name: 'Saudação "bom dia"',
    category: 'regression',
    priority: 'high',
    description: 'Teste de saudação com período',
    userMessage: 'bom dia',
    assertions: [
      { type: 'no_english', value: true, message: 'Deve responder em português' }
    ],
    tags: ['regression', 'saudacao']
  },
  {
    id: 'regression-saudacao-boa-tarde',
    name: 'Saudação "boa tarde"',
    category: 'regression',
    priority: 'high',
    description: 'Teste de saudação boa tarde',
    userMessage: 'boa tarde',
    assertions: [
      { type: 'no_english', value: true, message: 'Deve responder em português' }
    ],
    tags: ['regression', 'saudacao']
  },
  {
    id: 'regression-ola-ajuda',
    name: 'Olá com pedido de ajuda',
    category: 'regression',
    priority: 'critical',
    description: 'Teste de saudação com contexto',
    userMessage: 'olá, preciso de ajuda',
    assertions: [
      { type: 'response_contains_any', value: 'ajudar|ajuda|dúvida|problema|conte', message: 'Deve ser receptivo ao pedido' },
      { type: 'no_english', value: true, message: 'Deve responder em português' }
    ],
    tags: ['regression', 'saudacao']
  },
  {
    id: 'regression-fluxo-completo-familia',
    name: 'Fluxo completo família',
    category: 'regression',
    priority: 'critical',
    description: 'Teste de fluxo completo de família',
    userMessage: 'quero me divorciar',
    assertions: [
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve ir para família' },
      { type: 'no_english', value: true, message: 'Português apenas' }
    ],
    tags: ['regression', 'fluxo', 'familia']
  },
  {
    id: 'regression-fluxo-completo-trabalhista',
    name: 'Fluxo completo trabalhista',
    category: 'regression',
    priority: 'critical',
    description: 'Teste de fluxo completo trabalhista',
    userMessage: 'fui demitido',
    assertions: [
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve ir para trabalhista' }
    ],
    tags: ['regression', 'fluxo', 'trabalhista']
  },
  {
    id: 'regression-fluxo-completo-previdenciario',
    name: 'Fluxo completo previdenciário',
    category: 'regression',
    priority: 'critical',
    description: 'Teste de fluxo previdenciário',
    userMessage: 'quero me aposentar',
    assertions: [
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve ir para previdenciário' }
    ],
    tags: ['regression', 'fluxo', 'previdenciario']
  },
  {
    id: 'regression-fluxo-completo-civil',
    name: 'Fluxo completo civil',
    category: 'regression',
    priority: 'critical',
    description: 'Teste de fluxo civil',
    userMessage: 'sujaram meu nome',
    assertions: [
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve ir para civil' }
    ],
    tags: ['regression', 'fluxo', 'civil']
  },
  {
    id: 'regression-fluxo-completo-penal',
    name: 'Fluxo completo penal',
    category: 'regression',
    priority: 'critical',
    description: 'Teste de fluxo penal',
    userMessage: 'meu filho foi preso',
    assertions: [
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve ir para penal' }
    ],
    tags: ['regression', 'fluxo', 'penal']
  },
  {
    id: 'regression-idioma-portugues',
    name: 'Sempre em português',
    category: 'regression',
    priority: 'critical',
    description: 'Verificar resposta sempre em português',
    userMessage: 'I need a lawyer',
    assertions: [
      { type: 'no_english', value: true, message: 'Deve responder em português mesmo com input em inglês' }
    ],
    tags: ['regression', 'idioma']
  },

  // ================================
  // SISTEMA PROATIVO - URGÊNCIA (8 cenários)
  // ================================
  {
    id: 'proativo-urgencia-critica-prisao',
    name: 'Urgência crítica - prisão em flagrante',
    category: 'edge',
    priority: 'critical',
    description: 'Teste de detecção de caso urgente - prisão',
    userMessage: 'Meu filho foi preso em flagrante agora',
    assertions: [
      { type: 'response_contains_any', value: 'urgente|rápido|imediato|agora|prioridade', message: 'Resposta deve indicar urgência' },
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['proativo', 'urgencia', 'critica', 'penal']
  },
  {
    id: 'proativo-urgencia-critica-violencia',
    name: 'Urgência crítica - violência doméstica',
    category: 'edge',
    priority: 'critical',
    description: 'Teste de detecção de violência doméstica urgente',
    userMessage: 'Meu marido está me batendo preciso de ajuda urgente',
    assertions: [
      { type: 'response_contains_any', value: 'urgente|medida protetiva|delegacia|imediato|190|segurança', message: 'Resposta deve indicar urgência e orientação' },
      { type: 'lawyer_transfer', value: 'penal', message: 'Deve transferir para advogado penal' }
    ],
    tags: ['proativo', 'urgencia', 'critica', 'violencia']
  },
  {
    id: 'proativo-urgencia-critica-audiencia-hoje',
    name: 'Urgência crítica - audiência hoje',
    category: 'edge',
    priority: 'critical',
    description: 'Teste de urgência para audiência no mesmo dia',
    userMessage: 'Tenho audiência hoje às 14h e não tenho advogado',
    assertions: [
      { type: 'response_contains_any', value: 'urgente|hoje|imediato|rápido', message: 'Deve reconhecer urgência' }
    ],
    tags: ['proativo', 'urgencia', 'critica', 'audiencia']
  },
  {
    id: 'proativo-urgencia-alta-despejo',
    name: 'Urgência alta - ordem de despejo',
    category: 'edge',
    priority: 'high',
    description: 'Teste de urgência para despejo marcado',
    userMessage: 'Recebi ordem de despejo pra amanhã',
    assertions: [
      { type: 'response_contains_any', value: 'despejo|urgente|prazo|suspender|liminar', message: 'Deve abordar urgência do despejo' },
      { type: 'lawyer_transfer', value: 'civil', message: 'Deve transferir para advogado civil' }
    ],
    tags: ['proativo', 'urgencia', 'alta', 'despejo']
  },
  {
    id: 'proativo-urgencia-alta-acidente-hoje',
    name: 'Urgência alta - acidente recente',
    category: 'edge',
    priority: 'high',
    description: 'Teste de urgência para acidente recente',
    userMessage: 'Sofri um acidente de trabalho agora mesmo',
    assertions: [
      { type: 'response_contains_any', value: 'acidente|urgente|CAT|hospital|prova', message: 'Deve orientar sobre urgência' },
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para advogado trabalhista' }
    ],
    tags: ['proativo', 'urgencia', 'alta', 'acidente']
  },

  // ================================
  // SISTEMA PROATIVO - COLETA DE DADOS (5 cenários)
  // ================================
  {
    id: 'proativo-coleta-dados-apos-3-msgs',
    name: 'Coleta de dados precoce - após 3 mensagens',
    category: 'lead',
    priority: 'high',
    description: 'Teste se chatbot pede nome/telefone após entender problema',
    conversationHistory: [
      { role: 'user', content: 'Fui demitido sem justa causa' },
      { role: 'assistant', content: 'Entendi! Demissão sem justa causa te dá vários direitos. Quando aconteceu?' },
      { role: 'user', content: 'Semana passada' }
    ],
    userMessage: 'Trabalhei lá 5 anos',
    assertions: [
      { type: 'response_contains_any', value: 'nome|chamar|WhatsApp|contato|telefone', message: 'Deve pedir dados após 3ª mensagem' }
    ],
    tags: ['proativo', 'coleta', 'lead']
  },
  {
    id: 'proativo-coleta-valor-troca',
    name: 'Oferecer valor em troca do contato',
    category: 'lead',
    priority: 'high',
    description: 'Teste se oferece algo de valor em troca do contato',
    conversationHistory: [
      { role: 'user', content: 'Quero me divorciar' },
      { role: 'assistant', content: 'Entendi! O divórcio pode ser consensual ou litigioso. Vocês têm acordo sobre tudo?' },
      { role: 'user', content: 'Não, ele não quer assinar' }
    ],
    userMessage: 'Temos casa e carro pra dividir',
    assertions: [
      { type: 'response_contains_any', value: 'documento|checklist|enviar|resumo|WhatsApp|contato', message: 'Deve oferecer valor em troca do contato' }
    ],
    tags: ['proativo', 'coleta', 'valor']
  },
  {
    id: 'proativo-coleta-detectar-saida',
    name: 'Detectar intenção de saída',
    category: 'lead',
    priority: 'medium',
    description: 'Teste se detecta quando usuário quer sair e pede contato',
    conversationHistory: [
      { role: 'user', content: 'Preciso de um advogado trabalhista' },
      { role: 'assistant', content: 'Posso te ajudar! Qual é a situação trabalhista?' },
      { role: 'user', content: 'Fui demitido' }
    ],
    userMessage: 'Preciso pensar, depois volto',
    assertions: [
      { type: 'response_contains_any', value: 'WhatsApp|contato|telefone|resumo|enviar', message: 'Deve oferecer contato antes de sair' }
    ],
    tags: ['proativo', 'coleta', 'saida']
  },

  // ================================
  // SISTEMA PROATIVO - SUGESTÕES CONTEXTUAIS (4 cenários)
  // ================================
  {
    id: 'proativo-sugestao-divorcio',
    name: 'Sugestões contextuais - divórcio',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste se sistema reconhece problema de divórcio',
    userMessage: 'Quero me separar do meu marido',
    assertions: [
      { type: 'response_contains_any', value: 'divórcio|separação|consensual|litigioso', message: 'Deve abordar divórcio' },
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para família' }
    ],
    tags: ['proativo', 'sugestao', 'familia']
  },
  {
    id: 'proativo-sugestao-demissao',
    name: 'Sugestões contextuais - demissão',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste se sistema reconhece problema trabalhista',
    userMessage: 'A empresa me mandou embora ontem',
    assertions: [
      { type: 'response_contains_any', value: 'demissão|rescisão|verbas|direito', message: 'Deve abordar demissão' },
      { type: 'lawyer_transfer', value: 'trabalhista', message: 'Deve transferir para trabalhista' }
    ],
    tags: ['proativo', 'sugestao', 'trabalhista']
  },
  {
    id: 'proativo-sugestao-aposentadoria',
    name: 'Sugestões contextuais - aposentadoria',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste se sistema reconhece problema previdenciário',
    userMessage: 'Quero saber se posso me aposentar',
    assertions: [
      { type: 'response_contains_any', value: 'aposentar|INSS|contribuição|tempo|idade', message: 'Deve abordar aposentadoria' },
      { type: 'lawyer_transfer', value: 'previdenciario', message: 'Deve transferir para previdenciário' }
    ],
    tags: ['proativo', 'sugestao', 'previdenciario']
  },
  {
    id: 'proativo-sugestao-pensao',
    name: 'Sugestões contextuais - pensão alimentícia',
    category: 'triagem',
    priority: 'medium',
    description: 'Teste se sistema reconhece problema de pensão',
    userMessage: 'Meu ex não paga pensão',
    assertions: [
      { type: 'response_contains_any', value: 'pensão|execução|prisão|pagar|devendo', message: 'Deve abordar pensão' },
      { type: 'lawyer_transfer', value: 'familia', message: 'Deve transferir para família' }
    ],
    tags: ['proativo', 'sugestao', 'familia', 'pensao']
  }
];

// Helper functions
export const getScenariosByCategory = (category: string) => 
  qaScenarios.filter(s => s.category === category);

export const getScenariosByPriority = (priority: string) => 
  qaScenarios.filter(s => s.priority === priority);

export const getScenariosByTag = (tag: string) => 
  qaScenarios.filter(s => s.tags?.includes(tag));

export const getCriticalScenarios = () => 
  qaScenarios.filter(s => s.priority === 'critical');

export const getScenarioById = (id: string) => 
  qaScenarios.find(s => s.id === id);

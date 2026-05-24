// Dados mock para notificações de sucesso em tempo real
export interface SuccessCase {
  id: string;
  name: string;
  initials: string;
  city: string;
  state: string;
  area: 'trabalhista' | 'familia' | 'previdenciario' | 'civil' | 'consumidor';
  result: string;
  value?: number;
  timeAgo: string;
  minutesAgo: number; // Para tempo dinâmico
  quote?: string;
}

export const successCases: SuccessCase[] = [
  {
    id: '1',
    name: 'Maria S.',
    initials: 'MS',
    city: 'Salvador',
    state: 'BA',
    area: 'trabalhista',
    result: 'recebeu indenização trabalhista',
    value: 45000,
    timeAgo: '3 minutos',
    minutesAgo: 3,
    quote: 'Nunca imaginei que seria tão rápido!'
  },
  {
    id: '2',
    name: 'João P.',
    initials: 'JP',
    city: 'São Paulo',
    state: 'SP',
    area: 'familia',
    result: 'ganhou ação de pensão alimentícia',
    timeAgo: '8 minutos',
    minutesAgo: 8,
    quote: 'Finalmente consegui meus direitos.'
  },
  {
    id: '3',
    name: 'Ana C.',
    initials: 'AC',
    city: 'Rio de Janeiro',
    state: 'RJ',
    area: 'previdenciario',
    result: 'conseguiu aposentadoria por invalidez',
    timeAgo: '12 minutos',
    minutesAgo: 12,
    quote: 'Muito atencioso o atendimento!'
  },
  {
    id: '4',
    name: 'Carlos M.',
    initials: 'CM',
    city: 'Belo Horizonte',
    state: 'MG',
    area: 'trabalhista',
    result: 'recebeu verbas rescisórias',
    value: 28500,
    timeAgo: '15 minutos',
    minutesAgo: 15
  },
  {
    id: '5',
    name: 'Fernanda L.',
    initials: 'FL',
    city: 'Curitiba',
    state: 'PR',
    area: 'consumidor',
    result: 'ganhou ação contra banco',
    value: 12000,
    timeAgo: '20 minutos',
    minutesAgo: 20,
    quote: 'Resolveram meu problema em dias!'
  },
  {
    id: '6',
    name: 'Roberto A.',
    initials: 'RA',
    city: 'Fortaleza',
    state: 'CE',
    area: 'familia',
    result: 'conseguiu guarda compartilhada',
    timeAgo: '25 minutos',
    minutesAgo: 25
  },
  {
    id: '7',
    name: 'Patricia R.',
    initials: 'PR',
    city: 'Recife',
    state: 'PE',
    area: 'previdenciario',
    result: 'teve benefício do INSS liberado',
    timeAgo: '30 minutos',
    minutesAgo: 30,
    quote: 'Profissionais excelentes!'
  },
  {
    id: '8',
    name: 'Marcos V.',
    initials: 'MV',
    city: 'Porto Alegre',
    state: 'RS',
    area: 'trabalhista',
    result: 'ganhou ação por assédio moral',
    value: 35000,
    timeAgo: '35 minutos',
    minutesAgo: 35
  },
  {
    id: '9',
    name: 'Luciana D.',
    initials: 'LD',
    city: 'Brasília',
    state: 'DF',
    area: 'civil',
    result: 'resolveu disputa de herança',
    timeAgo: '40 minutos',
    minutesAgo: 40,
    quote: 'Processo que parecia impossível!'
  },
  {
    id: '10',
    name: 'Eduardo S.',
    initials: 'ES',
    city: 'Manaus',
    state: 'AM',
    area: 'trabalhista',
    result: 'recebeu horas extras não pagas',
    value: 18700,
    timeAgo: '45 minutos',
    minutesAgo: 45
  },
  {
    id: '11',
    name: 'Camila F.',
    initials: 'CF',
    city: 'Goiânia',
    state: 'GO',
    area: 'consumidor',
    result: 'foi indenizada por nome negativado',
    value: 8500,
    timeAgo: '50 minutos',
    minutesAgo: 50,
    quote: 'Rápido e eficiente!'
  },
  {
    id: '12',
    name: 'Ricardo B.',
    initials: 'RB',
    city: 'Florianópolis',
    state: 'SC',
    area: 'trabalhista',
    result: 'recebeu adicional de insalubridade',
    value: 22000,
    timeAgo: '55 minutos',
    minutesAgo: 55
  },
  {
    id: '13',
    name: 'Juliana M.',
    initials: 'JM',
    city: 'Vitória',
    state: 'ES',
    area: 'familia',
    result: 'conseguiu revisão de pensão',
    timeAgo: '1 hora',
    minutesAgo: 60
  },
  {
    id: '14',
    name: 'Felipe G.',
    initials: 'FG',
    city: 'Natal',
    state: 'RN',
    area: 'previdenciario',
    result: 'teve auxílio-doença aprovado',
    timeAgo: '1 hora',
    minutesAgo: 65
  },
  {
    id: '15',
    name: 'Amanda T.',
    initials: 'AT',
    city: 'João Pessoa',
    state: 'PB',
    area: 'trabalhista',
    result: 'ganhou processo de demissão indevida',
    value: 42000,
    timeAgo: '1 hora',
    minutesAgo: 70,
    quote: 'Advogados muito competentes!'
  },
  {
    id: '16',
    name: 'Bruno H.',
    initials: 'BH',
    city: 'Campinas',
    state: 'SP',
    area: 'civil',
    result: 'resolveu cobrança indevida',
    value: 15000,
    timeAgo: '1 hora',
    minutesAgo: 75
  },
  {
    id: '17',
    name: 'Tatiana O.',
    initials: 'TO',
    city: 'Campo Grande',
    state: 'MS',
    area: 'consumidor',
    result: 'recebeu devolução em dobro',
    value: 6800,
    timeAgo: '2 horas',
    minutesAgo: 90
  },
  {
    id: '18',
    name: 'Diego N.',
    initials: 'DN',
    city: 'Cuiabá',
    state: 'MT',
    area: 'trabalhista',
    result: 'recebeu FGTS não depositado',
    value: 31500,
    timeAgo: '2 horas',
    minutesAgo: 100
  },
  {
    id: '19',
    name: 'Renata K.',
    initials: 'RK',
    city: 'Aracaju',
    state: 'SE',
    area: 'familia',
    result: 'finalizou divórcio litigioso',
    timeAgo: '2 horas',
    minutesAgo: 110,
    quote: 'Processo delicado bem conduzido.'
  },
  {
    id: '20',
    name: 'Gustavo W.',
    initials: 'GW',
    city: 'Maceió',
    state: 'AL',
    area: 'previdenciario',
    result: 'conseguiu BPC/LOAS',
    timeAgo: '3 horas',
    minutesAgo: 150
  }
];

export const areaLabels: Record<SuccessCase['area'], string> = {
  trabalhista: 'Trabalhista',
  familia: 'Família',
  previdenciario: 'Previdenciário',
  civil: 'Civil',
  consumidor: 'Consumidor'
};

export const areaColors: Record<SuccessCase['area'], string> = {
  trabalhista: 'bg-blue-500',
  familia: 'bg-pink-500',
  previdenciario: 'bg-amber-500',
  civil: 'bg-purple-500',
  consumidor: 'bg-green-500'
};

export const avatarColors: Record<SuccessCase['area'], string> = {
  trabalhista: 'bg-blue-100 text-blue-700',
  familia: 'bg-pink-100 text-pink-700',
  previdenciario: 'bg-amber-100 text-amber-700',
  civil: 'bg-purple-100 text-purple-700',
  consumidor: 'bg-green-100 text-green-700'
};

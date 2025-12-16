// Dados mock para notificações de sucesso em tempo real
export interface SuccessCase {
  id: string;
  name: string;
  city: string;
  state: string;
  area: 'trabalhista' | 'familia' | 'previdenciario' | 'civil' | 'consumidor';
  result: string;
  value?: number;
  timeAgo: string;
}

export const successCases: SuccessCase[] = [
  {
    id: '1',
    name: 'Maria S.',
    city: 'Salvador',
    state: 'BA',
    area: 'trabalhista',
    result: 'recebeu indenização trabalhista',
    value: 45000,
    timeAgo: '3 minutos'
  },
  {
    id: '2',
    name: 'João P.',
    city: 'São Paulo',
    state: 'SP',
    area: 'familia',
    result: 'ganhou ação de pensão alimentícia',
    timeAgo: '8 minutos'
  },
  {
    id: '3',
    name: 'Ana C.',
    city: 'Rio de Janeiro',
    state: 'RJ',
    area: 'previdenciario',
    result: 'conseguiu aposentadoria por invalidez',
    timeAgo: '12 minutos'
  },
  {
    id: '4',
    name: 'Carlos M.',
    city: 'Belo Horizonte',
    state: 'MG',
    area: 'trabalhista',
    result: 'recebeu verbas rescisórias',
    value: 28500,
    timeAgo: '15 minutos'
  },
  {
    id: '5',
    name: 'Fernanda L.',
    city: 'Curitiba',
    state: 'PR',
    area: 'consumidor',
    result: 'ganhou ação contra banco',
    value: 12000,
    timeAgo: '20 minutos'
  },
  {
    id: '6',
    name: 'Roberto A.',
    city: 'Fortaleza',
    state: 'CE',
    area: 'familia',
    result: 'conseguiu guarda compartilhada',
    timeAgo: '25 minutos'
  },
  {
    id: '7',
    name: 'Patricia R.',
    city: 'Recife',
    state: 'PE',
    area: 'previdenciario',
    result: 'teve benefício do INSS liberado',
    timeAgo: '30 minutos'
  },
  {
    id: '8',
    name: 'Marcos V.',
    city: 'Porto Alegre',
    state: 'RS',
    area: 'trabalhista',
    result: 'ganhou ação por assédio moral',
    value: 35000,
    timeAgo: '35 minutos'
  },
  {
    id: '9',
    name: 'Luciana D.',
    city: 'Brasília',
    state: 'DF',
    area: 'civil',
    result: 'resolveu disputa de herança',
    timeAgo: '40 minutos'
  },
  {
    id: '10',
    name: 'Eduardo S.',
    city: 'Manaus',
    state: 'AM',
    area: 'trabalhista',
    result: 'recebeu horas extras não pagas',
    value: 18700,
    timeAgo: '45 minutos'
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

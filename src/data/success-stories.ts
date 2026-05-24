// Casos de sucesso detalhados para página dedicada
export interface SuccessStory {
  id: string;
  area: 'trabalhista' | 'familia' | 'previdenciario' | 'civil' | 'consumidor';
  title: string;
  problem: string;
  solution: string;
  result: string;
  value?: number;
  duration: string;
  city: string;
  state: string;
  year: number;
}

export const successStories: SuccessStory[] = [
  {
    id: 'trabalhista-1',
    area: 'trabalhista',
    title: 'Demissão Sem Justa Causa com Verbas Não Pagas',
    problem: 'Cliente trabalhou por 8 anos em empresa e foi demitido sem receber verbas rescisórias completas, incluindo férias vencidas, 13º proporcional e multa do FGTS.',
    solution: 'Ajuizamos reclamação trabalhista com pedido de pagamento de todas as verbas rescisórias, horas extras não pagas e danos morais pela conduta abusiva do empregador.',
    result: 'Acordo homologado em audiência com pagamento integral das verbas e indenização adicional.',
    value: 67500,
    duration: '6 meses',
    city: 'Salvador',
    state: 'BA',
    year: 2024
  },
  {
    id: 'trabalhista-2',
    area: 'trabalhista',
    title: 'Assédio Moral no Ambiente de Trabalho',
    problem: 'Funcionária sofria constrangimentos públicos, críticas excessivas e isolamento por parte da chefia, desenvolvendo quadro de ansiedade e depressão.',
    solution: 'Produção de provas testemunhais e documentais, incluindo laudos médicos e atestados psicológicos, para comprovar o nexo causal entre o assédio e os danos à saúde.',
    result: 'Condenação da empresa ao pagamento de indenização por danos morais e materiais.',
    value: 45000,
    duration: '10 meses',
    city: 'São Paulo',
    state: 'SP',
    year: 2024
  },
  {
    id: 'familia-1',
    area: 'familia',
    title: 'Revisão de Pensão Alimentícia',
    problem: 'Pai pagava pensão calculada com base em salário antigo. Após promoção e aumento significativo de renda, a pensão não foi ajustada.',
    solution: 'Ação de revisão de alimentos com comprovação da mudança de capacidade financeira do alimentante e das necessidades crescentes dos filhos.',
    result: 'Pensão reajustada de 20% para 30% do salário líquido, com retroativo desde a citação.',
    duration: '4 meses',
    city: 'Rio de Janeiro',
    state: 'RJ',
    year: 2024
  },
  {
    id: 'familia-2',
    area: 'familia',
    title: 'Guarda Compartilhada com Alternância de Residência',
    problem: 'Após divórcio litigioso, pai buscava participação mais ativa na vida dos filhos, mas a mãe resistia à divisão equilibrada do tempo.',
    solution: 'Mediação familiar combinada com ação judicial, demonstrando capacidade e disponibilidade do pai para exercer guarda compartilhada.',
    result: 'Acordo de guarda compartilhada com alternância semanal de residência e divisão clara de responsabilidades.',
    duration: '8 meses',
    city: 'Curitiba',
    state: 'PR',
    year: 2023
  },
  {
    id: 'previdenciario-1',
    area: 'previdenciario',
    title: 'Aposentadoria por Invalidez Negada Indevidamente',
    problem: 'Cliente com doença degenerativa teve pedido de aposentadoria por invalidez negado pelo INSS, apesar de laudo médico comprovando incapacidade permanente.',
    solution: 'Ação judicial com perícia médica independente, demonstrando a incapacidade total e permanente para qualquer atividade laborativa.',
    result: 'Concessão do benefício com pagamento de atrasados desde a data do requerimento administrativo.',
    value: 89000,
    duration: '14 meses',
    city: 'Belo Horizonte',
    state: 'MG',
    year: 2024
  },
  {
    id: 'previdenciario-2',
    area: 'previdenciario',
    title: 'Auxílio-Doença Cortado Prematuramente',
    problem: 'Segurado teve auxílio-doença cortado após alta programada do INSS, mas ainda não havia recuperado capacidade de trabalho.',
    solution: 'Ação de restabelecimento de benefício com pedido de tutela antecipada para garantir manutenção do auxílio durante o processo.',
    result: 'Tutela deferida em 15 dias e benefício mantido até completa recuperação.',
    duration: '3 meses',
    city: 'Porto Alegre',
    state: 'RS',
    year: 2024
  },
  {
    id: 'consumidor-1',
    area: 'consumidor',
    title: 'Negativação Indevida por Dívida Prescrita',
    problem: 'Cliente foi negativado por dívida antiga já prescrita, sem qualquer notificação prévia, sofrendo constrangimento ao tentar realizar compra.',
    solution: 'Ação de indenização por danos morais com pedido de retirada imediata do nome dos cadastros de proteção ao crédito.',
    result: 'Nome limpo em 48 horas e indenização por danos morais.',
    value: 8000,
    duration: '2 meses',
    city: 'Fortaleza',
    state: 'CE',
    year: 2024
  },
  {
    id: 'consumidor-2',
    area: 'consumidor',
    title: 'Cobrança Abusiva de Banco',
    problem: 'Banco cobrava tarifas não contratadas e juros acima do limite legal em empréstimo consignado de aposentado.',
    solution: 'Ação revisional de contrato com pedido de restituição em dobro dos valores cobrados indevidamente.',
    result: 'Revisão do contrato, exclusão das tarifas abusivas e devolução dos valores pagos a mais.',
    value: 15600,
    duration: '5 meses',
    city: 'Recife',
    state: 'PE',
    year: 2024
  },
  {
    id: 'civil-1',
    area: 'civil',
    title: 'Disputa de Herança entre Irmãos',
    problem: 'Após falecimento dos pais, um dos herdeiros se recusava a partilhar bens imóveis, ocupando sozinho propriedade rural.',
    solution: 'Ação de inventário e partilha com pedido de arbitramento de aluguel pelo uso exclusivo do imóvel comum.',
    result: 'Partilha igualitária dos bens e pagamento de aluguel retroativo ao herdeiro ocupante.',
    value: 120000,
    duration: '18 meses',
    city: 'Goiânia',
    state: 'GO',
    year: 2023
  },
  {
    id: 'trabalhista-3',
    area: 'trabalhista',
    title: 'Reconhecimento de Vínculo Empregatício',
    problem: 'Trabalhador atuou por 3 anos como "PJ" mas era subordinado e cumpria horário fixo, sem nenhum direito trabalhista.',
    solution: 'Ação trabalhista para reconhecimento de vínculo empregatício e pagamento de todas as verbas do período.',
    result: 'Vínculo reconhecido com pagamento de FGTS, férias, 13º e demais direitos de todo o período.',
    value: 52000,
    duration: '8 meses',
    city: 'Brasília',
    state: 'DF',
    year: 2024
  }
];

export const areaLabels: Record<SuccessStory['area'], string> = {
  trabalhista: 'Direito Trabalhista',
  familia: 'Direito de Família',
  previdenciario: 'Direito Previdenciário',
  civil: 'Direito Civil',
  consumidor: 'Direito do Consumidor'
};

export const areaColors: Record<SuccessStory['area'], { bg: string; text: string; border: string }> = {
  trabalhista: { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-500/30' },
  familia: { bg: 'bg-pink-500/10', text: 'text-pink-600', border: 'border-pink-500/30' },
  previdenciario: { bg: 'bg-amber-500/10', text: 'text-amber-600', border: 'border-amber-500/30' },
  civil: { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-500/30' },
  consumidor: { bg: 'bg-green-500/10', text: 'text-green-600', border: 'border-green-500/30' }
};

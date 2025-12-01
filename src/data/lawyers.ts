export type LawyerSpecialty = 'familia' | 'trabalhista' | 'civil' | 'previdenciario' | 'penal' | 'geral';

export type Lawyer = {
  id: string;
  name: string;
  photo: string;
  oab: string;
  specialty: LawyerSpecialty;
  subSpecialty: string;
  keywords: string[];
  bio: string;
  isVirtual?: boolean;
};

export type DynamicLawyer = {
  id: string;
  name: string;
  photo: string;
  oab: string;
  specialty: string;
  subSpecialty: string;
  bio: string;
  isVirtual: true;
};

export const lawyers: Lawyer[] = [
  // TRIAGEM GERAL
  {
    id: 'carlos-silva',
    name: 'Dr. Carlos Silva',
    photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop',
    oab: 'OAB/SP 123.456',
    specialty: 'geral',
    subSpecialty: 'Triagem Geral',
    keywords: [],
    bio: 'Advogado generalista com 15 anos de experiência em triagem e encaminhamento de casos.'
  },
  
  // DIREITO DE FAMÍLIA (6)
  {
    id: 'maria-santos',
    name: 'Dra. Maria Santos',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
    oab: 'OAB/SP 234.567',
    specialty: 'familia',
    subSpecialty: 'Divórcio e Separação',
    keywords: ['divórcio', 'separação', 'separar', 'casar', 'casamento', 'cônjuge', 'esposa', 'marido', 'matrimônio', 'divorciar', 'ex-marido', 'ex-esposa', 'regime de bens', 'partilha de bens', 'fim do casamento', 'quero me separar', 'quero divorciar'],
    bio: 'Especialista em processos de divórcio consensual e litigioso com mais de 500 casos resolvidos.'
  },
  {
    id: 'rafael-oliveira',
    name: 'Dr. Rafael Oliveira',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    oab: 'OAB/RJ 345.678',
    specialty: 'familia',
    subSpecialty: 'Guarda de Filhos',
    keywords: ['guarda', 'filho', 'filha', 'criança', 'menor', 'visitação', 'convivência', 'guarda compartilhada', 'guarda unilateral', 'direito de visita', 'pai não deixa ver', 'mãe não deixa ver', 'tirar a guarda', 'perder guarda', 'regulamentar visita'],
    bio: 'Especialista em disputas de guarda e regulamentação de visitas, focado no melhor interesse da criança.'
  },
  {
    id: 'juliana-costa',
    name: 'Dra. Juliana Costa',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    oab: 'OAB/MG 456.789',
    specialty: 'familia',
    subSpecialty: 'Pensão Alimentícia',
    keywords: ['pensão alimentícia', 'pensão de alimentos', 'alimentos', 'não paga pensão', 'pensão atrasada', 'aumentar pensão', 'diminuir pensão', 'exoneração de alimentos', 'pai não paga', 'mãe não paga', 'sustento filho', 'obrigação alimentar'],
    bio: 'Especialista em ações de alimentos, revisão e execução de pensão alimentícia.'
  },
  {
    id: 'fernando-lima',
    name: 'Dr. Fernando Lima',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    oab: 'OAB/RS 567.890',
    specialty: 'familia',
    subSpecialty: 'Alienação Parental',
    keywords: ['alienação parental', 'manipulação', 'fala mal', 'afastar do pai', 'afastar da mãe', 'impede visita', 'dificulta convivência', 'síndrome de alienação', 'manipular filho', 'criança contra mim'],
    bio: 'Especialista em casos de alienação parental e proteção do convívio familiar saudável.'
  },
  {
    id: 'patricia-almeida',
    name: 'Dra. Patrícia Almeida',
    photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop',
    oab: 'OAB/BA 678.901',
    specialty: 'familia',
    subSpecialty: 'União Estável',
    keywords: ['união estável', 'companheiro', 'companheira', 'morar junto', 'vivemos juntos', 'relacionamento', 'namorando há anos', 'reconhecer união', 'dissolução de união', 'direitos do companheiro', 'moramos juntos'],
    bio: 'Especialista em reconhecimento e dissolução de união estável, partilha de bens.'
  },
  {
    id: 'rodrigo-barros',
    name: 'Dr. Rodrigo Barros',
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop',
    oab: 'OAB/PR 789.012',
    specialty: 'familia',
    subSpecialty: 'Inventário e Herança',
    keywords: ['herança', 'inventário', 'falecido', 'morreu', 'morte', 'testamento', 'partilha herança', 'herdeiro', 'espólio', 'bens do falecido', 'deixou bens', 'arrolamento', 'divisão de bens', 'direito sucessório'],
    bio: 'Especialista em inventários judiciais e extrajudiciais, planejamento sucessório.'
  },

  // DIREITO TRABALHISTA (6)
  {
    id: 'ricardo-mendes',
    name: 'Dr. Ricardo Mendes',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    oab: 'OAB/SP 890.123',
    specialty: 'trabalhista',
    subSpecialty: 'Demissão Sem Justa Causa',
    keywords: ['demissão', 'demitido', 'demitida', 'mandaram embora', 'dispensado', 'justa causa', 'sem justa causa', 'foi mandado embora', 'perdeu emprego', 'mandaram sair', 'desligamento', 'rescisão contrato trabalho', 'verbas rescisórias'],
    bio: 'Especialista em ações trabalhistas de rescisão indevida e verbas rescisórias.'
  },
  {
    id: 'ana-rodrigues',
    name: 'Dra. Ana Rodrigues',
    photo: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=200&h=200&fit=crop',
    oab: 'OAB/RJ 901.234',
    specialty: 'trabalhista',
    subSpecialty: 'Acidente de Trabalho',
    keywords: ['acidente de trabalho', 'acidentei no trabalho', 'machucado no trabalho', 'lesão trabalho', 'CAT', 'doença ocupacional', 'afastamento inss trabalho', 'doença do trabalho', 'LER', 'DORT', 'me machuquei trabalhando'],
    bio: 'Especialista em indenizações por acidentes de trabalho e doenças ocupacionais.'
  },
  {
    id: 'lucas-ferreira',
    name: 'Dr. Lucas Ferreira',
    photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
    oab: 'OAB/MG 012.345',
    specialty: 'trabalhista',
    subSpecialty: 'Assédio Moral',
    keywords: ['assédio moral', 'humilhação', 'humilhado', 'xingamento', 'ofensa no trabalho', 'perseguição', 'chefe xinga', 'ambiente hostil', 'constrangimento trabalho', 'abuso psicológico', 'chefe me humilha'],
    bio: 'Especialista em ações de dano moral no ambiente de trabalho e assédio moral.'
  },
  {
    id: 'carla-souza',
    name: 'Dra. Carla Souza',
    photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop',
    oab: 'OAB/SC 123.456',
    specialty: 'trabalhista',
    subSpecialty: 'Assédio Sexual',
    keywords: ['assédio sexual', 'cantada', 'investida sexual', 'importunação', 'abuso sexual trabalho', 'proposta indecente', 'toque indesejado', 'chefe assediando', 'constrangimento sexual'],
    bio: 'Especialista em casos de assédio sexual no trabalho com atendimento humanizado e sigiloso.'
  },
  {
    id: 'paulo-martins',
    name: 'Dr. Paulo Martins',
    photo: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop',
    oab: 'OAB/RS 234.567',
    specialty: 'trabalhista',
    subSpecialty: 'Horas Extras',
    keywords: ['hora extra', 'horas extras', 'trabalho além', 'banco de horas', 'adicional noturno', 'não pagam hora extra', 'trabalho demais', 'excesso de jornada', 'intervalo não concedido', 'trabalho mais que 8 horas'],
    bio: 'Especialista em cobrança de horas extras, adicional noturno e intervalos não concedidos.'
  },
  {
    id: 'beatriz-campos',
    name: 'Dra. Beatriz Campos',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
    oab: 'OAB/BA 345.678',
    specialty: 'trabalhista',
    subSpecialty: 'Rescisão Indireta',
    keywords: ['rescisão indireta', 'salário atrasado', 'não pagam salário', 'falta grave do empregador', 'empresa não cumpre', 'descumpre contrato', 'forçando a pedir demissão', 'não deposita fgts'],
    bio: 'Especialista em rescisão indireta do contrato por falta grave do empregador.'
  },

  // DIREITO CIVIL (6)
  {
    id: 'gustavo-reis',
    name: 'Dr. Gustavo Reis',
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop',
    oab: 'OAB/SP 456.789',
    specialty: 'civil',
    subSpecialty: 'Cobranças e Dívidas',
    keywords: ['cobrança', 'dívida', 'devo dinheiro', 'devedor', 'empréstimo', 'cheque', 'promissória', 'título', 'execução', 'credor', 'me cobrando', 'não consigo pagar', 'protesto'],
    bio: 'Especialista em ações de cobrança, execução de títulos e negociação de dívidas.'
  },
  {
    id: 'camila-nunes',
    name: 'Dra. Camila Nunes',
    photo: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=200&h=200&fit=crop',
    oab: 'OAB/RJ 567.890',
    specialty: 'civil',
    subSpecialty: 'Danos Morais',
    keywords: ['dano moral', 'ofensa', 'constrangimento', 'humilhação pública', 'injúria', 'difamação', 'calúnia', 'exposto ridículo', 'passou vergonha', 'ofendido', 'xingaram'],
    bio: 'Especialista em ações de danos morais e materiais, indenizações por abuso de direito.'
  },
  {
    id: 'diego-santos',
    name: 'Dr. Diego Santos',
    photo: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop',
    oab: 'OAB/MG 678.901',
    specialty: 'civil',
    subSpecialty: 'Contratos',
    keywords: ['contrato', 'descumpriu contrato', 'acordo', 'inadimplente', 'quebra de contrato', 'cláusula', 'rescisão contrato', 'não cumpriram o combinado', 'violação contrato'],
    bio: 'Especialista em elaboração, análise e litígios de contratos civis e comerciais.'
  },
  {
    id: 'fernanda-lima',
    name: 'Dra. Fernanda Lima',
    photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
    oab: 'OAB/PR 789.012',
    specialty: 'civil',
    subSpecialty: 'Despejo e Locação',
    keywords: ['despejo', 'aluguel', 'inquilino', 'locação', 'imóvel alugado', 'locador', 'locatário', 'não paga aluguel', 'ação de despejo', 'contrato de aluguel', 'renovação aluguel'],
    bio: 'Especialista em ações de despejo, revisão de aluguel e contratos de locação.'
  },
  {
    id: 'thiago-rocha',
    name: 'Dr. Thiago Rocha',
    photo: 'https://images.unsplash.com/photo-1521119989659-a83eee488004?w=200&h=200&fit=crop',
    oab: 'OAB/SC 890.123',
    specialty: 'civil',
    subSpecialty: 'Imóveis e Usucapião',
    keywords: ['imóvel', 'casa', 'terreno', 'usucapião', 'propriedade', 'posse', 'registro imóvel', 'escritura', 'regularização', 'morando há anos', 'invasão', 'propriedade irregular'],
    bio: 'Especialista em direito imobiliário, usucapião e regularização de imóveis.'
  },
  {
    id: 'marina-costa',
    name: 'Dra. Marina Costa',
    photo: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=200&h=200&fit=crop',
    oab: 'OAB/RS 901.234',
    specialty: 'civil',
    subSpecialty: 'Direito do Consumidor',
    keywords: ['consumidor', 'compra', 'produto', 'defeito', 'serviço', 'loja', 'empresa', 'negativação', 'negativado', 'negativada', 'nome sujo', 'serasa', 'spc', 'boa vista', 'cobrança indevida', 'produto defeituoso', 'serviço ruim', 'procon', 'reembolso', 'estorno', 'golpe', 'fraude', 'não reconheço', 'clonaram cartão', 'banco', 'operadora', 'telefonia', 'vivo', 'claro', 'tim', 'oi', 'cancelar plano', 'cancelamento', 'cobraram errado', 'débito automático'],
    bio: 'Especialista em defesa do consumidor, vícios de produtos e serviços, danos materiais.'
  },

  // DIREITO PREVIDENCIÁRIO (6)
  {
    id: 'andre-silva',
    name: 'Dr. André Silva',
    photo: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&h=200&fit=crop',
    oab: 'OAB/SP 012.345',
    specialty: 'previdenciario',
    subSpecialty: 'Aposentadoria',
    keywords: ['aposentadoria', 'aposentar', 'idade', 'tempo de contribuição', 'tempo de serviço', 'inss aposentadoria', 'quero aposentar', 'já posso aposentar', 'cálculo aposentadoria', 'aposentadoria por idade'],
    bio: 'Especialista em concessão e revisão de aposentadorias por idade, tempo e invalidez.'
  },
  {
    id: 'claudia-martins',
    name: 'Dra. Cláudia Martins',
    photo: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=200&h=200&fit=crop',
    oab: 'OAB/RJ 123.456',
    specialty: 'previdenciario',
    subSpecialty: 'Auxílio-Doença',
    keywords: ['auxílio doença', 'auxílio-doença', 'doente', 'incapaz', 'perícia', 'negado auxílio', 'cortaram auxílio', 'afastado doença', 'não consigo trabalhar', 'laudo médico', 'perícia médica inss'],
    bio: 'Especialista em concessão e restabelecimento de auxílio-doença e auxílio-acidente.'
  },
  {
    id: 'marcos-oliveira',
    name: 'Dr. Marcos Oliveira',
    photo: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop',
    oab: 'OAB/MG 234.567',
    specialty: 'previdenciario',
    subSpecialty: 'BPC/LOAS',
    keywords: ['bpc', 'loas', 'benefício assistencial', 'idoso carente', 'deficiente', 'baixa renda', 'nunca contribuiu', 'não tem aposentadoria', 'salário mínimo', 'benefício deficiente'],
    bio: 'Especialista em concessão de BPC/LOAS para idosos e pessoas com deficiência.'
  },
  {
    id: 'isabela-santos',
    name: 'Dra. Isabela Santos',
    photo: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=200&h=200&fit=crop',
    oab: 'OAB/PR 345.678',
    specialty: 'previdenciario',
    subSpecialty: 'Pensão por Morte',
    keywords: ['pensão por morte', 'pensão morte', 'faleceu', 'dependente', 'viúva', 'viúvo', 'marido morreu', 'esposa morreu', 'pai morreu', 'mãe morreu', 'filho menor', 'pensão falecimento'],
    bio: 'Especialista em concessão de pensão por morte e habilitação de dependentes.'
  },
  {
    id: 'renato-alves',
    name: 'Dr. Renato Alves',
    photo: 'https://images.unsplash.com/photo-1545167622-3a6ac756afa4?w=200&h=200&fit=crop',
    oab: 'OAB/BA 456.789',
    specialty: 'previdenciario',
    subSpecialty: 'Revisão de Benefícios',
    keywords: ['revisão benefício', 'revisar aposentadoria', 'benefício baixo', 'valor errado', 'recalcular', 'buraco negro', 'teto previdenciário', 'revisão da vida toda'],
    bio: 'Especialista em revisões de benefícios previdenciários e recuperação de valores atrasados.'
  },
  {
    id: 'sandra-lima',
    name: 'Dra. Sandra Lima',
    photo: 'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=200&h=200&fit=crop',
    oab: 'OAB/SC 567.890',
    specialty: 'previdenciario',
    subSpecialty: 'Aposentadoria Rural',
    keywords: ['rural', 'trabalhador rural', 'agricultura', 'roça', 'campo', 'lavrador', 'sitiante', 'meeiro', 'boia-fria', 'trabalho no campo', 'aposentadoria rural'],
    bio: 'Especialista em aposentadoria rural e comprovação de atividade no campo.'
  },

  // DIREITO PENAL (6)
  {
    id: 'roberto-costa',
    name: 'Dr. Roberto Costa',
    photo: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=200&h=200&fit=crop',
    oab: 'OAB/SP 678.901',
    specialty: 'penal',
    subSpecialty: 'Flagrante e Prisão',
    keywords: ['preso', 'presa', 'prisão', 'flagrante', 'detido', 'delegacia', 'cadeia', 'audiência custódia', 'algemado', 'apreendido', 'foi preso'],
    bio: 'Especialista em defesa em flagrante, audiências de custódia e liberdade provisória.'
  },
  {
    id: 'vanessa-reis',
    name: 'Dra. Vanessa Reis',
    photo: 'https://images.unsplash.com/photo-1617655223352-5a7254c6200e?w=200&h=200&fit=crop',
    oab: 'OAB/RJ 789.012',
    specialty: 'penal',
    subSpecialty: 'Habeas Corpus',
    keywords: ['habeas corpus', 'soltar', 'liberdade', 'prisão preventiva', 'mandado prisão', 'preso injustamente', 'ilegal', 'relaxamento', 'tirar da cadeia'],
    bio: 'Especialista em Habeas Corpus e recursos em prisões ilegais ou abusivas.'
  },
  {
    id: 'joao-fernandes',
    name: 'Dr. João Fernandes',
    photo: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=200&h=200&fit=crop',
    oab: 'OAB/MG 890.123',
    specialty: 'penal',
    subSpecialty: 'Violência Doméstica',
    keywords: ['violência doméstica', 'maria da penha', 'agressão', 'medida protetiva', 'espancou', 'bateu', 'agrediu', 'ameaça', 'ameaçou matar', 'violência familiar'],
    bio: 'Especialista em casos de violência doméstica e familiar, Lei Maria da Penha.'
  },
  {
    id: 'larissa-souza',
    name: 'Dra. Larissa Souza',
    photo: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?w=200&h=200&fit=crop',
    oab: 'OAB/PR 901.234',
    specialty: 'penal',
    subSpecialty: 'Crimes Patrimoniais',
    keywords: ['roubo', 'furto', 'estelionato', 'apropriação', 'receptação', 'roubaram', 'furtaram', 'golpe', 'caí em golpe', 'perdeu dinheiro', 'me roubaram'],
    bio: 'Especialista em defesa e acusação de crimes contra o patrimônio.'
  },
  {
    id: 'eduardo-gomes',
    name: 'Dr. Eduardo Gomes',
    photo: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=200&h=200&fit=crop',
    oab: 'OAB/BA 012.345',
    specialty: 'penal',
    subSpecialty: 'Crimes de Trânsito',
    keywords: ['trânsito', 'acidente carro', 'acidente moto', 'dirigir embriagado', 'bêbado volante', 'alcoolemia', 'CNH cassada', 'atropelamento', 'bateu carro', 'suspensão CNH'],
    bio: 'Especialista em crimes de trânsito, embriaguez ao volante e suspensão de CNH.'
  },
  {
    id: 'monica-alves',
    name: 'Dra. Mônica Alves',
    photo: 'https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?w=200&h=200&fit=crop',
    oab: 'OAB/RS 123.456',
    specialty: 'penal',
    subSpecialty: 'Defesa Criminal Geral',
    keywords: ['acusado', 'processo criminal', 'denúncia', 'réu', 'crime', 'inquérito', 'processado', 'respondendo processo', 'defesa criminal'],
    bio: 'Especialista em defesa criminal geral em todas as fases processuais.'
  },

  // DIREITO DA SAÚDE E OUTROS (5)
  {
    id: 'helena-vasconcelos',
    name: 'Dra. Helena Vasconcelos',
    photo: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop',
    oab: 'OAB/SP 234.567',
    specialty: 'civil',
    subSpecialty: 'Direito da Saúde',
    keywords: ['plano de saúde', 'plano saúde', 'cirurgia negada', 'medicamento negado', 'carência', 'reajuste abusivo', 'ANS', 'cobertura negada', 'home care', 'UTI negada', 'quimioterapia negada', 'tratamento negado', 'exame negado', 'unimed', 'bradesco saúde', 'sul américa', 'amil', 'hapvida', 'procedimento negado', 'autorização negada'],
    bio: 'Especialista em ações contra planos de saúde, cobertura de tratamentos e procedimentos médicos.'
  },
  {
    id: 'gabriel-monteiro',
    name: 'Dr. Gabriel Monteiro',
    photo: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop',
    oab: 'OAB/RJ 345.678',
    specialty: 'civil',
    subSpecialty: 'Direito Digital e Crimes Cibernéticos',
    keywords: ['golpe pix', 'golpe whatsapp', 'golpe internet', 'golpe banco', 'conta invadida', 'hackeado', 'hackear', 'perfil falso', 'vazamento dados', 'lgpd', 'fotos vazadas', 'nudes vazados', 'extorsão', 'ransomware', 'fake news', 'deepfake', 'stalker', 'perseguição online', 'crimes digitais', 'crimes virtuais', 'fraude digital', 'phishing'],
    bio: 'Especialista em crimes digitais, vazamento de dados, golpes virtuais e proteção de dados pessoais.'
  },
  {
    id: 'renata-machado',
    name: 'Dra. Renata Machado',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
    oab: 'OAB/MG 456.789',
    specialty: 'civil',
    subSpecialty: 'Erro Médico e Responsabilidade Hospitalar',
    keywords: ['erro médico', 'negligência médica', 'negligência hospitalar', 'cirurgia errada', 'diagnóstico errado', 'infecção hospitalar', 'imperícia', 'imprudência', 'parto errado', 'sequela', 'morte hospital', 'morte médico', 'tratamento errado', 'medicamento errado', 'procedimento errado', 'médico errou', 'cirurgia mal feita'],
    bio: 'Especialista em ações de indenização por erro médico, imperícia e negligência hospitalar.'
  },
  {
    id: 'leonardo-prado',
    name: 'Dr. Leonardo Prado',
    photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
    oab: 'OAB/PR 567.890',
    specialty: 'civil',
    subSpecialty: 'Direito Aéreo e do Passageiro',
    keywords: ['voo cancelado', 'voo atrasado', 'overbooking', 'mala extraviada', 'bagagem perdida', 'companhia aérea', 'gol', 'latam', 'azul', 'avianca', 'reembolso passagem', 'conexão perdida', 'atraso aeroporto', 'perdi voo', 'extravio bagagem', 'não embarcaram', 'voo atrasou'],
    bio: 'Especialista em direitos do passageiro aéreo, indenizações por atrasos, cancelamentos e extravios.'
  },
  {
    id: 'cristina-torres',
    name: 'Dra. Cristina Torres',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop',
    oab: 'OAB/BA 678.901',
    specialty: 'civil',
    subSpecialty: 'Direito de Trânsito Administrativo',
    keywords: ['multa trânsito', 'multa de trânsito', 'recurso multa', 'pontos cnh', 'suspensão cnh', 'cassação cnh', 'detran', 'radar', 'blitz', 'autuação', 'auto infração', 'jari', 'cetran', 'velocidade', 'estacionamento', 'rodízio', 'multa injusta', 'pontos carteira'],
    bio: 'Especialista em recursos administrativos de trânsito, defesas de multas e recuperação de CNH.'
  },
];

export const getLawyerById = (id: string): Lawyer | undefined => {
  return lawyers.find(lawyer => lawyer.id === id);
};

export const getLawyersBySpecialty = (specialty: LawyerSpecialty): Lawyer[] => {
  return lawyers.filter(lawyer => lawyer.specialty === specialty);
};

export const detectSpecialtyFromMessage = (message: string): LawyerSpecialty | null => {
  const lowerMessage = message.toLowerCase();
  
  // Verificar cada advogado especializado (exceto o geral)
  for (const lawyer of lawyers) {
    if (lawyer.specialty === 'geral') continue;
    
    for (const keyword of lawyer.keywords) {
      if (lowerMessage.includes(keyword.toLowerCase())) {
        return lawyer.specialty;
      }
    }
  }
  
  return null;
};

export const getRandomLawyerBySpecialty = (specialty: LawyerSpecialty): Lawyer => {
  const specialtyLawyers = getLawyersBySpecialty(specialty);
  const randomIndex = Math.floor(Math.random() * specialtyLawyers.length);
  return specialtyLawyers[randomIndex];
};
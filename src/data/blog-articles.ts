// Auto-generated blog articles based on legal actions
export interface BlogArticle {
  id: string;
  nicheId: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroImage?: string;
  excerpt: string;
  content: {
    intro: string;
    whatIs: string;
    whenYouHaveRight: string[];
    documents: string[];
    deadlines: string;
    faq: { question: string; answer: string }[];
  };
  relatedActions: string[];
  updatedAt: string;
}

export interface NicheInfo {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
  color: string;
}

export const niches: NicheInfo[] = [
  {
    id: 'trabalhista',
    name: 'Direito Trabalhista',
    slug: 'trabalhista',
    description: 'Demissão, horas extras, acidente de trabalho, assédio moral e outros direitos trabalhistas.',
    icon: 'Briefcase',
    color: 'blue',
  },
  {
    id: 'familia',
    name: 'Direito de Família',
    slug: 'familia',
    description: 'Divórcio, pensão alimentícia, guarda de filhos, união estável e questões familiares.',
    icon: 'Users',
    color: 'pink',
  },
  {
    id: 'civil',
    name: 'Direito Civil',
    slug: 'civil',
    description: 'Cobrança de dívidas, danos morais, contratos, despejo e relações civis.',
    icon: 'Scale',
    color: 'amber',
  },
  {
    id: 'previdenciario',
    name: 'Direito Previdenciário',
    slug: 'previdenciario',
    description: 'Aposentadoria, auxílio-doença, BPC/LOAS e benefícios do INSS.',
    icon: 'Shield',
    color: 'green',
  },
  {
    id: 'penal',
    name: 'Direito Penal',
    slug: 'penal',
    description: 'Defesa criminal, habeas corpus, violência doméstica e crimes em geral.',
    icon: 'Gavel',
    color: 'red',
  },
  {
    id: 'consumidor',
    name: 'Direito do Consumidor',
    slug: 'consumidor',
    description: 'Atraso de voos, negativação indevida, planos de saúde e relações de consumo.',
    icon: 'ShoppingBag',
    color: 'purple',
  },
];

export const blogArticles: BlogArticle[] = [
  // TRABALHISTA
  {
    id: 'demissao-sem-justa-causa',
    nicheId: 'trabalhista',
    slug: 'demissao-sem-justa-causa',
    title: 'Demissão sem Justa Causa: Conheça Todos os Seus Direitos',
    metaTitle: 'Demissão sem Justa Causa | Direitos e Verbas Rescisórias 2025',
    metaDescription: 'Saiba todos os seus direitos na demissão sem justa causa: verbas rescisórias, FGTS, multa 40%, seguro-desemprego. Guia completo com advogado trabalhista.',
    keywords: ['demissão sem justa causa', 'verbas rescisórias', 'direitos trabalhistas', 'FGTS', 'seguro desemprego', 'multa 40%'],
    excerpt: 'Entenda quais são todos os seus direitos ao ser demitido sem justa causa, incluindo FGTS, multa de 40%, aviso prévio e seguro-desemprego.',
    content: {
      intro: 'A demissão sem justa causa ocorre quando o empregador decide encerrar o contrato de trabalho sem que o empregado tenha cometido qualquer falta grave. Nesse caso, o trabalhador tem direito a uma série de verbas rescisórias garantidas pela CLT.',
      whatIs: 'A demissão sem justa causa é a modalidade de rescisão contratual em que o empregador decide, por sua própria vontade e sem necessidade de justificativa, encerrar o vínculo empregatício. É diferente da demissão por justa causa, onde há uma falta grave cometida pelo empregado.',
      whenYouHaveRight: [
        'Quando o empregador decide encerrar o contrato sem motivo justificado',
        'Quando não há falta grave cometida pelo empregado',
        'Quando o contrato de trabalho é por prazo indeterminado',
        'Mesmo em contratos de experiência, com regras específicas',
      ],
      documents: [
        'Carteira de Trabalho (CTPS)',
        'Termo de Rescisão do Contrato de Trabalho (TRCT)',
        'Guias de FGTS e seguro-desemprego',
        'Últimos holerites/contracheques',
        'Extrato do FGTS',
        'Comprovante de aviso prévio',
      ],
      deadlines: 'O empregador tem até 10 dias corridos após o término do contrato para pagar todas as verbas rescisórias. Caso não cumpra esse prazo, deverá pagar uma multa equivalente a um salário do empregado.',
      faq: [
        {
          question: 'Quais verbas eu tenho direito a receber?',
          answer: 'Você tem direito a: saldo de salário, aviso prévio (trabalhado ou indenizado), férias vencidas e proporcionais + 1/3, 13º salário proporcional, multa de 40% sobre o FGTS e liberação do FGTS.',
        },
        {
          question: 'Posso receber seguro-desemprego?',
          answer: 'Sim, desde que tenha trabalhado pelo menos 12 meses nos últimos 18 meses (primeira solicitação), 9 meses nos últimos 12 meses (segunda solicitação) ou 6 meses imediatamente anteriores (demais solicitações).',
        },
        {
          question: 'A empresa pode me demitir durante as férias?',
          answer: 'Não. A empresa não pode demitir o empregado durante o período de férias. A demissão só pode ocorrer após o retorno ao trabalho.',
        },
        {
          question: 'E se a empresa não pagar as verbas rescisórias?',
          answer: 'Você pode ingressar com uma reclamação trabalhista para cobrar as verbas devidas, acrescidas de multa por atraso e correção monetária.',
        },
      ],
    },
    relatedActions: ['verbas-rescissorias', 'horas-extras'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'acidente-trabalho',
    nicheId: 'trabalhista',
    slug: 'acidente-trabalho',
    title: 'Acidente de Trabalho: Direitos e Como Proceder',
    metaTitle: 'Acidente de Trabalho | Direitos, CAT e Indenização 2025',
    metaDescription: 'Sofreu acidente de trabalho? Saiba seus direitos: estabilidade, CAT, auxílio-doença acidentário, indenização. Advogado trabalhista especializado.',
    keywords: ['acidente de trabalho', 'CAT', 'estabilidade acidentária', 'auxílio-doença acidentário', 'indenização acidente trabalho', 'doença ocupacional'],
    excerpt: 'Conheça seus direitos após um acidente de trabalho: estabilidade de 12 meses, auxílio-doença acidentário, e como buscar indenização.',
    content: {
      intro: 'O acidente de trabalho é aquele que ocorre durante o exercício das atividades profissionais ou em decorrência delas, causando lesão corporal, perturbação funcional ou morte. A legislação brasileira protege o trabalhador acidentado com diversos direitos.',
      whatIs: 'Considera-se acidente de trabalho aquele que ocorre pelo exercício do trabalho a serviço da empresa, provocando lesão corporal ou perturbação funcional. Também são considerados acidentes de trabalho as doenças ocupacionais e os acidentes de trajeto.',
      whenYouHaveRight: [
        'Acidente durante a jornada de trabalho',
        'Acidente no trajeto entre casa e trabalho',
        'Doenças ocupacionais causadas pelo trabalho',
        'Doenças desencadeadas por condições de trabalho',
        'Acidentes durante intervalos (almoço, café)',
      ],
      documents: [
        'CAT (Comunicação de Acidente de Trabalho)',
        'Laudos médicos e atestados',
        'Exames e relatórios de tratamento',
        'Fotos do local do acidente',
        'Testemunhos de colegas de trabalho',
        'Prontuário médico',
      ],
      deadlines: 'A empresa deve emitir a CAT até o primeiro dia útil após o acidente. Se a empresa não emitir, o próprio trabalhador, sindicato, médico ou familiares podem fazer a comunicação. O prazo para ação judicial é de 5 anos após a ciência do dano.',
      faq: [
        {
          question: 'A empresa não quer emitir a CAT. O que fazer?',
          answer: 'Você mesmo pode emitir a CAT pelo site ou app Meu INSS. Também podem emitir: sindicato, médico, familiar ou o próprio INSS.',
        },
        {
          question: 'Tenho estabilidade após acidente de trabalho?',
          answer: 'Sim, você tem direito a 12 meses de estabilidade no emprego após receber alta do INSS, desde que tenha recebido auxílio-doença acidentário (B91).',
        },
        {
          question: 'Posso pedir indenização da empresa?',
          answer: 'Sim, se a empresa teve culpa no acidente (negligência, imprudência ou imperícia), você pode pedir indenização por danos morais, materiais e estéticos.',
        },
        {
          question: 'Doença ocupacional também dá direito à estabilidade?',
          answer: 'Sim, a doença ocupacional é equiparada ao acidente de trabalho e garante os mesmos direitos, incluindo a estabilidade de 12 meses.',
        },
      ],
    },
    relatedActions: ['demissao-sem-justa-causa', 'assedio-moral'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'horas-extras',
    nicheId: 'trabalhista',
    slug: 'horas-extras',
    title: 'Horas Extras Não Pagas: Como Cobrar Seus Direitos',
    metaTitle: 'Horas Extras Não Pagas | Como Cobrar na Justiça 2025',
    metaDescription: 'Trabalhou horas extras e não recebeu? Saiba como calcular, provar e cobrar na Justiça. Advogado trabalhista explica seus direitos.',
    keywords: ['horas extras', 'hora extra não paga', 'adicional hora extra', 'banco de horas', 'jornada de trabalho', 'reclamação trabalhista'],
    excerpt: 'Entenda como funcionam as horas extras, quanto você deve receber por elas e como cobrar na Justiça caso não tenha sido pago corretamente.',
    content: {
      intro: 'Muitos trabalhadores realizam horas extras sem receber o pagamento correto. A CLT garante que toda hora trabalhada além da jornada normal deve ser paga com adicional mínimo de 50%.',
      whatIs: 'Hora extra é todo o tempo de trabalho que excede a jornada normal do empregado. A jornada padrão é de 8 horas diárias e 44 horas semanais. Tudo que ultrapassar isso deve ser pago como hora extra.',
      whenYouHaveRight: [
        'Quando trabalha além das 8 horas diárias',
        'Quando trabalha além das 44 horas semanais',
        'Quando trabalha em feriados ou domingos sem folga compensatória',
        'Quando não tem intervalo de almoço integral',
        'Quando é obrigado a responder mensagens fora do horário',
      ],
      documents: [
        'Contracheques/holerites',
        'Cartões de ponto',
        'E-mails e mensagens enviados fora do horário',
        'Testemunhos de colegas',
        'Contrato de trabalho',
        'Registros de entrada e saída',
      ],
      deadlines: 'Você pode cobrar horas extras dos últimos 5 anos. O prazo para entrar com a ação é de 2 anos após o término do contrato de trabalho.',
      faq: [
        {
          question: 'Qual o valor da hora extra?',
          answer: 'A hora extra deve ser paga com adicional mínimo de 50% sobre a hora normal. Aos domingos e feriados, o adicional é de 100%.',
        },
        {
          question: 'Banco de horas substitui o pagamento?',
          answer: 'Sim, se houver acordo individual escrito ou convenção coletiva. Mas o banco deve ser compensado em até 6 meses (acordo individual) ou 1 ano (convenção).',
        },
        {
          question: 'Como provar que fiz horas extras?',
          answer: 'Pode-se usar cartão de ponto, testemunhas, e-mails, mensagens de WhatsApp, registros eletrônicos e qualquer outro documento que comprove sua jornada.',
        },
        {
          question: 'Trabalho externo também tem direito?',
          answer: 'Sim, desde que seja possível controlar a jornada. Trabalhadores externos sem controle de jornada (como motoristas em certas condições) podem ter regras diferentes.',
        },
      ],
    },
    relatedActions: ['demissao-sem-justa-causa', 'verbas-rescissorias'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'assedio-moral',
    nicheId: 'trabalhista',
    slug: 'assedio-moral',
    title: 'Assédio Moral no Trabalho: Identificar e Combater',
    metaTitle: 'Assédio Moral no Trabalho | Como Denunciar e Processar 2025',
    metaDescription: 'Está sofrendo assédio moral no trabalho? Saiba identificar, reunir provas e buscar indenização. Advogado trabalhista especializado.',
    keywords: ['assédio moral', 'assédio no trabalho', 'humilhação trabalho', 'danos morais trabalho', 'perseguição no trabalho', 'ambiente hostil'],
    excerpt: 'Aprenda a identificar o assédio moral no trabalho, como reunir provas e quais medidas legais tomar para proteger seus direitos.',
    content: {
      intro: 'O assédio moral no trabalho é uma conduta abusiva e repetitiva que atenta contra a dignidade do trabalhador, causando danos à sua saúde física e psicológica. É importante saber identificar e combater essa prática.',
      whatIs: 'Assédio moral é a exposição repetida do trabalhador a situações humilhantes, vexatórias e constrangedoras durante a jornada de trabalho. Caracteriza-se pela repetição e intencionalidade das condutas.',
      whenYouHaveRight: [
        'Humilhações públicas recorrentes',
        'Isolamento proposital no ambiente de trabalho',
        'Xingamentos e ofensas repetidos',
        'Metas impossíveis de cumprir propositalmente',
        'Retirada de tarefas ou atribuição de tarefas humilhantes',
        'Críticas constantes e injustificadas',
      ],
      documents: [
        'Prints de mensagens e e-mails ofensivos',
        'Gravações de áudio ou vídeo (com cautela legal)',
        'Testemunhos de colegas',
        'Relatórios médicos e psicológicos',
        'Atestados e afastamentos',
        'Registros de reclamações ao RH',
      ],
      deadlines: 'O prazo para ação é de 2 anos após o término do contrato ou 5 anos durante a vigência do contrato. Procure ajuda assim que identificar a conduta.',
      faq: [
        {
          question: 'Posso gravar meu chefe me assediando?',
          answer: 'Sim, desde que você seja participante da conversa. Gravações feitas por terceiros ou em ambiente privado onde você não está presente podem ser consideradas ilegais.',
        },
        {
          question: 'Qual o valor da indenização por assédio moral?',
          answer: 'O valor varia conforme a gravidade, duração do assédio e porte da empresa. Pode variar de alguns milhares a centenas de milhares de reais.',
        },
        {
          question: 'Preciso de testemunhas para provar?',
          answer: 'Testemunhas ajudam muito, mas não são obrigatórias. Mensagens, e-mails, gravações e laudos médicos também servem como prova.',
        },
        {
          question: 'Posso pedir demissão por assédio moral?',
          answer: 'Sim, você pode pedir rescisão indireta (demissão por culpa do empregador), que garante todos os direitos como se fosse demissão sem justa causa.',
        },
      ],
    },
    relatedActions: ['assedio-sexual', 'demissao-sem-justa-causa'],
    updatedAt: '2025-01-01',
  },

  // FAMÍLIA
  {
    id: 'divorcio-consensual',
    nicheId: 'familia',
    slug: 'divorcio-consensual',
    title: 'Divórcio Consensual: Passo a Passo Completo',
    metaTitle: 'Divórcio Consensual | Como Fazer Rápido e Barato 2025',
    metaDescription: 'Quer se divorciar de forma amigável? Saiba como fazer divórcio consensual em cartório ou judicial. Advogado de família explica tudo.',
    keywords: ['divórcio consensual', 'divórcio amigável', 'divórcio em cartório', 'separação consensual', 'como se divorciar', 'documentos divórcio'],
    excerpt: 'Entenda como funciona o divórcio consensual, quando pode ser feito em cartório ou judicialmente, e quais documentos são necessários.',
    content: {
      intro: 'O divórcio consensual é a forma mais rápida e econômica de encerrar um casamento quando ambas as partes concordam com a separação e seus termos. Pode ser feito em cartório ou judicialmente.',
      whatIs: 'Divórcio consensual é aquele em que o casal está de acordo com a separação e com todas as condições: divisão de bens, guarda dos filhos, pensão alimentícia e uso do nome. Não há litígio entre as partes.',
      whenYouHaveRight: [
        'Quando ambos concordam em se divorciar',
        'Quando há acordo sobre divisão de bens',
        'Quando há acordo sobre guarda e pensão (se houver filhos)',
        'Quando não há disputa sobre nenhum aspecto',
      ],
      documents: [
        'Certidão de casamento atualizada (90 dias)',
        'Documentos pessoais (RG, CPF)',
        'Comprovante de residência',
        'Certidão de nascimento dos filhos (se houver)',
        'Documentos dos bens a serem partilhados',
        'Pacto antenupcial (se houver)',
      ],
      deadlines: 'Não há prazo mínimo para pedir o divórcio. O divórcio em cartório pode ser concluído em poucos dias. O judicial pode levar algumas semanas a meses.',
      faq: [
        {
          question: 'Posso fazer divórcio em cartório?',
          answer: 'Sim, desde que não haja filhos menores ou incapazes, e que ambos concordem com todos os termos. É necessária a presença de advogado.',
        },
        {
          question: 'Quanto custa um divórcio consensual?',
          answer: 'O custo varia conforme o estado e a complexidade. Em cartório, o custo gira em torno de R$ 1.500 a R$ 3.000, incluindo honorários advocatícios.',
        },
        {
          question: 'Preciso de advogado para divórcio consensual?',
          answer: 'Sim, mesmo no divórcio em cartório é obrigatória a presença de advogado. O mesmo advogado pode representar ambas as partes.',
        },
        {
          question: 'E se tivermos filhos menores?',
          answer: 'Com filhos menores, o divórcio deve ser feito judicialmente, mesmo sendo consensual. O Ministério Público precisa dar parecer.',
        },
      ],
    },
    relatedActions: ['divorcio-litigioso', 'pensao-alimenticia', 'guarda'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'pensao-alimenticia',
    nicheId: 'familia',
    slug: 'pensao-alimenticia',
    title: 'Pensão Alimentícia: Direitos, Valores e Como Pedir',
    metaTitle: 'Pensão Alimentícia | Valor, Como Pedir e Execução 2025',
    metaDescription: 'Precisa pedir pensão alimentícia para seu filho? Saiba qual o valor correto, como fazer o pedido e o que fazer se não pagarem.',
    keywords: ['pensão alimentícia', 'alimentos', 'pensão para filho', 'quanto de pensão', 'não paga pensão', 'execução de alimentos'],
    excerpt: 'Saiba como funciona a pensão alimentícia, como calcular o valor adequado, como fazer o pedido e o que fazer quando o devedor não paga.',
    content: {
      intro: 'A pensão alimentícia é um direito fundamental das crianças e adolescentes, garantindo recursos para alimentação, moradia, educação, saúde e lazer. Pode ser fixada de comum acordo ou judicialmente.',
      whatIs: 'Alimentos são valores pagos para suprir as necessidades básicas de quem não pode se sustentar. Inclui alimentação, moradia, educação, saúde, vestuário, transporte e lazer. Pode ser paga a filhos, ex-cônjuges e até pais idosos.',
      whenYouHaveRight: [
        'Filhos menores de idade (direito inquestionável)',
        'Filhos maiores que estejam estudando (até certa idade)',
        'Ex-cônjuge que necessite de auxílio temporário',
        'Parentes próximos em situação de necessidade',
      ],
      documents: [
        'Certidão de nascimento do filho',
        'Comprovantes de despesas (escola, saúde, etc.)',
        'Comprovante de renda do guardião',
        'Informações sobre renda do alimentante',
        'Comprovante de residência',
        'Documentos pessoais',
      ],
      deadlines: 'O pedido pode ser feito a qualquer momento. A pensão é devida desde a citação do devedor. Para execução por não pagamento, não há prazo.',
      faq: [
        {
          question: 'Qual o valor da pensão alimentícia?',
          answer: 'Não existe um percentual fixo em lei. O valor é calculado com base na necessidade de quem recebe e na possibilidade de quem paga. Geralmente varia de 20% a 30% do salário.',
        },
        {
          question: 'O que acontece se não pagar a pensão?',
          answer: 'O devedor pode ser executado judicialmente, ter nome negativado, salário penhorado e até ser preso (única dívida que leva à prisão civil no Brasil).',
        },
        {
          question: 'Posso pedir revisão do valor?',
          answer: 'Sim, se houve mudança significativa na situação financeira de qualquer das partes, pode-se pedir aumento, redução ou até exoneração.',
        },
        {
          question: 'Pensão pode ser descontada em folha?',
          answer: 'Sim, o juiz pode determinar o desconto diretamente no salário do alimentante, sendo repassado à conta do alimentado.',
        },
      ],
    },
    relatedActions: ['guarda', 'revisao-pensao', 'divorcio-consensual'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'guarda',
    nicheId: 'familia',
    slug: 'guarda',
    title: 'Guarda de Filhos: Compartilhada, Unilateral e Alternada',
    metaTitle: 'Guarda de Filhos | Compartilhada vs Unilateral 2025',
    metaDescription: 'Entenda os tipos de guarda de filhos: compartilhada, unilateral e alternada. Saiba qual a melhor opção e como fazer o pedido.',
    keywords: ['guarda de filhos', 'guarda compartilhada', 'guarda unilateral', 'guarda alternada', 'direito de visita', 'regulamentação de visitas'],
    excerpt: 'Conheça os diferentes tipos de guarda de filhos, suas vantagens e desvantagens, e como funciona o processo para definir a guarda.',
    content: {
      intro: 'A definição da guarda dos filhos é uma das questões mais importantes em casos de separação. A lei brasileira prioriza a guarda compartilhada, mas cada caso deve ser analisado individualmente.',
      whatIs: 'A guarda é o direito e dever de cuidar, proteger e tomar decisões importantes na vida dos filhos. Pode ser compartilhada (ambos os pais decidem juntos) ou unilateral (apenas um genitor decide).',
      whenYouHaveRight: [
        'Separação ou divórcio do casal',
        'Dissolução de união estável',
        'Quando nunca houve convivência entre os genitores',
        'Necessidade de modificar guarda existente',
        'Situações de risco para a criança',
      ],
      documents: [
        'Certidão de nascimento do filho',
        'Comprovante de residência',
        'Documentos pessoais dos genitores',
        'Comprovantes de renda',
        'Documentos escolares da criança',
        'Relatórios médicos (se relevante)',
      ],
      deadlines: 'O pedido pode ser feito a qualquer momento. Modificações de guarda podem ser solicitadas quando houver mudança nas circunstâncias.',
      faq: [
        {
          question: 'O que é guarda compartilhada?',
          answer: 'É quando ambos os pais têm responsabilidade conjunta nas decisões importantes da vida do filho. A criança pode morar com um deles (residência base) mas ambos decidem juntos.',
        },
        {
          question: 'A mãe sempre tem preferência na guarda?',
          answer: 'Não, a lei não dá preferência a nenhum dos genitores. A decisão é baseada no melhor interesse da criança.',
        },
        {
          question: 'O que é guarda alternada?',
          answer: 'É quando a criança alterna a residência entre as casas dos pais por períodos iguais. Não é comum no Brasil e geralmente não é recomendada.',
        },
        {
          question: 'Posso perder a guarda dos meus filhos?',
          answer: 'Sim, em casos graves como abandono, maus-tratos, abuso ou negligência. A perda da guarda requer processo judicial e provas.',
        },
      ],
    },
    relatedActions: ['pensao-alimenticia', 'regulamentacao-visita', 'alienacao-parental'],
    updatedAt: '2025-01-01',
  },

  // CIVIL
  {
    id: 'danos-morais',
    nicheId: 'civil',
    slug: 'danos-morais',
    title: 'Danos Morais: Quando Você Tem Direito a Indenização',
    metaTitle: 'Danos Morais | Quando Posso Processar? Valores 2025',
    metaDescription: 'Sofreu ofensa, humilhação ou constrangimento? Saiba quando você tem direito a indenização por danos morais e quanto pode receber.',
    keywords: ['danos morais', 'indenização', 'processo por danos morais', 'quanto recebo danos morais', 'ofensa', 'humilhação'],
    excerpt: 'Entenda o que caracteriza dano moral, quando você tem direito a indenização, como calcular o valor e como entrar com a ação.',
    content: {
      intro: 'O dano moral ocorre quando há lesão a direitos da personalidade, como honra, imagem, dignidade, privacidade ou intimidade. A pessoa prejudicada tem direito a uma compensação financeira.',
      whatIs: 'Dano moral é a lesão que atinge a esfera íntima e pessoal do indivíduo, causando dor, sofrimento, angústia, humilhação ou constrangimento. Não envolve prejuízo financeiro direto, mas sim emocional.',
      whenYouHaveRight: [
        'Ofensas e difamação (inclusive nas redes sociais)',
        'Negativação indevida do nome (SPC/Serasa)',
        'Cobranças vexatórias e abusivas',
        'Falha em serviços que cause transtorno grave',
        'Vazamento de dados pessoais',
        'Recusa indevida de atendimento médico',
      ],
      documents: [
        'Prints de publicações ofensivas',
        'Protocolos de reclamação',
        'Cartas de cobrança indevida',
        'Laudos médicos ou psicológicos',
        'Testemunhos',
        'Qualquer prova da situação vivida',
      ],
      deadlines: 'O prazo para entrar com ação de danos morais é de 3 anos a partir do conhecimento do fato danoso (prescrição).',
      faq: [
        {
          question: 'Quanto posso receber de indenização?',
          answer: 'O valor varia muito. Pode ir de alguns milhares a centenas de milhares de reais, dependendo da gravidade, repercussão e condição econômica das partes.',
        },
        {
          question: 'Mero aborrecimento dá dano moral?',
          answer: 'Não. A jurisprudência diferencia mero aborrecimento (situações cotidianas) de dano moral (sofrimento intenso). Nem toda frustração gera indenização.',
        },
        {
          question: 'Posso processar por ofensa no WhatsApp?',
          answer: 'Sim, ofensas em redes sociais e aplicativos de mensagem podem configurar dano moral, especialmente se divulgadas para terceiros.',
        },
        {
          question: 'Preciso de advogado para pedir danos morais?',
          answer: 'Para causas até 20 salários mínimos no Juizado Especial, não é obrigatório. Acima disso ou na Justiça comum, é necessário advogado.',
        },
      ],
    },
    relatedActions: ['danos-materiais', 'cobranca'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'cobranca',
    nicheId: 'civil',
    slug: 'cobranca',
    title: 'Ação de Cobrança: Como Recuperar Seu Dinheiro',
    metaTitle: 'Ação de Cobrança | Como Cobrar Dívida na Justiça 2025',
    metaDescription: 'Alguém te deve dinheiro e não paga? Saiba como fazer ação de cobrança, quais documentos precisa e como recuperar o valor.',
    keywords: ['ação de cobrança', 'cobrar dívida', 'processo de cobrança', 'recuperar dinheiro', 'execução de dívida', 'título executivo'],
    excerpt: 'Aprenda como cobrar uma dívida judicialmente, quais provas são necessárias e como funciona o processo de cobrança.',
    content: {
      intro: 'Quando alguém não paga uma dívida, você tem o direito de cobrar judicialmente. A ação de cobrança permite recuperar o valor devido com juros, correção e custas processuais.',
      whatIs: 'A ação de cobrança é o processo judicial para obrigar o devedor a pagar uma dívida. Pode ser uma ação de conhecimento (prova da dívida) ou execução (quando já há título executivo).',
      whenYouHaveRight: [
        'Empréstimos não pagos',
        'Serviços prestados e não pagos',
        'Produtos vendidos e não quitados',
        'Cheques devolvidos',
        'Notas promissórias não honradas',
        'Aluguéis em atraso',
      ],
      documents: [
        'Contrato ou comprovante da dívida',
        'Recibos de pagamento parcial',
        'Mensagens comprovando a dívida',
        'Cheques devolvidos',
        'Notas promissórias',
        'Dados do devedor (nome, CPF, endereço)',
      ],
      deadlines: 'O prazo para cobrar dívidas varia: cheques (6 meses), notas promissórias (3 anos), contratos em geral (5 anos). A contagem começa do vencimento.',
      faq: [
        {
          question: 'Posso cobrar juros sobre a dívida?',
          answer: 'Sim, juros de mora de 1% ao mês (ou o contratado) mais correção monetária a partir do vencimento.',
        },
        {
          question: 'E se o devedor não tiver bens?',
          answer: 'Mesmo sem bens, a dívida continua existindo. Pode-se penhorar futuramente rendas, salário (até 30%) ou bens que o devedor adquirir.',
        },
        {
          question: 'Quanto tempo demora uma ação de cobrança?',
          answer: 'Depende do tipo de ação e da defesa do devedor. Pode variar de alguns meses a alguns anos.',
        },
        {
          question: 'Posso negativar o devedor no SPC/Serasa?',
          answer: 'Sim, desde que haja prova da dívida vencida. A negativação pode ser feita extrajudicialmente enquanto a ação tramita.',
        },
      ],
    },
    relatedActions: ['danos-morais', 'rescisao-contratual'],
    updatedAt: '2025-01-01',
  },

  // PREVIDENCIÁRIO
  {
    id: 'aposentadoria',
    nicheId: 'previdenciario',
    slug: 'aposentadoria',
    title: 'Aposentadoria: Guia Completo de Requisitos e Tipos',
    metaTitle: 'Aposentadoria INSS | Idade, Tempo, Especial 2025',
    metaDescription: 'Quer se aposentar? Conheça todos os tipos de aposentadoria, requisitos após a reforma, como calcular e como dar entrada no INSS.',
    keywords: ['aposentadoria', 'aposentadoria por idade', 'aposentadoria por tempo', 'aposentadoria especial', 'INSS', 'reforma previdência'],
    excerpt: 'Conheça todos os tipos de aposentadoria disponíveis, os requisitos após a reforma da previdência e como dar entrada no seu pedido.',
    content: {
      intro: 'A aposentadoria é um benefício previdenciário que garante renda ao trabalhador após anos de contribuição. Com a reforma de 2019, as regras mudaram significativamente.',
      whatIs: 'A aposentadoria é o benefício pago pelo INSS ao trabalhador que cumpriu os requisitos de idade e/ou tempo de contribuição. Existem diferentes modalidades com regras específicas.',
      whenYouHaveRight: [
        'Aposentadoria por idade (65 homens / 62 mulheres)',
        'Aposentadoria por tempo de contribuição (regras de transição)',
        'Aposentadoria especial (atividades insalubres)',
        'Aposentadoria por invalidez (incapacidade permanente)',
        'Aposentadoria rural (idade reduzida)',
      ],
      documents: [
        'Carteira de Trabalho (CTPS)',
        'CNIS (extrato de contribuições)',
        'PPP (para aposentadoria especial)',
        'Documentos pessoais (RG, CPF)',
        'Comprovante de residência',
        'Laudos médicos (se invalidez)',
      ],
      deadlines: 'O INSS tem até 30 dias para analisar o pedido (pode ser prorrogado). Se negado, você tem 30 dias para recorrer administrativamente ou 5 anos para ação judicial.',
      faq: [
        {
          question: 'Qual a idade mínima para aposentar?',
          answer: 'Após a reforma: 65 anos (homens) e 62 anos (mulheres), com tempo mínimo de contribuição de 20 e 15 anos, respectivamente.',
        },
        {
          question: 'Posso me aposentar só por tempo de contribuição?',
          answer: 'Quem já contribuía antes da reforma pode usar regras de transição. Para novos segurados, é necessário idade mínima.',
        },
        {
          question: 'O que é aposentadoria especial?',
          answer: 'É a aposentadoria para quem trabalhou em condições prejudiciais à saúde (insalubridade, periculosidade). Exige tempo menor de contribuição.',
        },
        {
          question: 'INSS negou minha aposentadoria. O que fazer?',
          answer: 'Você pode recorrer administrativamente (Junta de Recursos) ou entrar com ação judicial para revisar a decisão.',
        },
      ],
    },
    relatedActions: ['auxilio-doenca', 'revisao-vida-toda'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'auxilio-doenca',
    nicheId: 'previdenciario',
    slug: 'auxilio-doenca',
    title: 'Auxílio-Doença: Como Pedir e Quando Você Tem Direito',
    metaTitle: 'Auxílio-Doença INSS | Como Pedir, Perícia, Recurso 2025',
    metaDescription: 'Está doente e não consegue trabalhar? Saiba como pedir auxílio-doença no INSS, passar na perícia e o que fazer se for negado.',
    keywords: ['auxílio-doença', 'benefício por incapacidade', 'perícia INSS', 'afastamento doença', 'recurso auxílio-doença', 'BPC incapacidade'],
    excerpt: 'Entenda como funciona o auxílio-doença, quais os requisitos, como agendar a perícia e o que fazer se o benefício for negado.',
    content: {
      intro: 'O auxílio-doença (hoje chamado de benefício por incapacidade temporária) é pago ao segurado que fica temporariamente incapaz de trabalhar por mais de 15 dias consecutivos.',
      whatIs: 'É um benefício pago pelo INSS ao trabalhador que fica temporariamente incapacitado de exercer seu trabalho ou atividade habitual por motivo de doença ou acidente.',
      whenYouHaveRight: [
        'Incapacidade temporária para o trabalho habitual',
        'Afastamento por mais de 15 dias consecutivos',
        'Qualidade de segurado ativa (contribuinte)',
        'Carência de 12 contribuições (exceto acidentes)',
      ],
      documents: [
        'Laudos médicos detalhados',
        'Exames recentes',
        'Receitas de medicamentos',
        'Prontuário médico',
        'Atestados de afastamento',
        'Documentos pessoais e CTPS',
      ],
      deadlines: 'Agende a perícia pelo Meu INSS ou 135 assim que passar de 15 dias afastado. O benefício é retroativo à data do agendamento ou DII (data início incapacidade).',
      faq: [
        {
          question: 'Preciso de carência para auxílio-doença?',
          answer: 'Sim, 12 contribuições mensais. Mas em caso de acidente ou doenças graves listadas em lei, não há carência.',
        },
        {
          question: 'E se o INSS negar na perícia?',
          answer: 'Você pode pedir prorrogação/reconsideração, recorrer à Junta de Recursos ou entrar com ação judicial apresentando laudos contrários.',
        },
        {
          question: 'Posso trabalhar recebendo auxílio-doença?',
          answer: 'Não, o benefício é para incapacidade total temporária. Trabalhar pode caracterizar fraude e levar à suspensão.',
        },
        {
          question: 'Qual a diferença de auxílio-doença comum e acidentário?',
          answer: 'O acidentário (B91) é decorrente de acidente de trabalho e garante estabilidade de 12 meses. O comum (B31) não dá estabilidade.',
        },
      ],
    },
    relatedActions: ['aposentadoria', 'bpc-loas'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'bpc-loas',
    nicheId: 'previdenciario',
    slug: 'bpc-loas',
    title: 'BPC/LOAS: Benefício para Idosos e Pessoas com Deficiência',
    metaTitle: 'BPC LOAS | Benefício Assistencial Idoso Deficiente 2025',
    metaDescription: 'Conheça o BPC/LOAS: benefício de um salário mínimo para idosos e pessoas com deficiência de baixa renda. Saiba se você tem direito.',
    keywords: ['BPC', 'LOAS', 'benefício assistencial', 'salário mínimo idoso', 'benefício deficiente', 'baixa renda INSS'],
    excerpt: 'O BPC/LOAS garante um salário mínimo mensal a idosos e pessoas com deficiência em situação de vulnerabilidade. Saiba se você tem direito.',
    content: {
      intro: 'O Benefício de Prestação Continuada (BPC), previsto na Lei Orgânica da Assistência Social (LOAS), garante um salário mínimo mensal a idosos e pessoas com deficiência que comprovem não ter meios de se manter.',
      whatIs: 'É um benefício assistencial (não é aposentadoria) que paga um salário mínimo mensal a quem não pode se sustentar nem ser sustentado pela família. Não exige contribuição ao INSS.',
      whenYouHaveRight: [
        'Idosos com 65 anos ou mais em baixa renda',
        'Pessoas com deficiência de qualquer idade em baixa renda',
        'Renda familiar per capita inferior a 1/4 do salário mínimo',
        'Inscrição no CadÚnico',
      ],
      documents: [
        'Documentos pessoais de todos da família',
        'Comprovantes de renda de todos',
        'Comprovante de residência',
        'Laudos médicos (se deficiência)',
        'Número do CadÚnico/NIS',
        'Receitas e relatórios médicos',
      ],
      deadlines: 'A análise pelo INSS leva em média 45 dias. Se negado, pode-se recorrer ou entrar com ação judicial. O benefício pode ser retroativo.',
      faq: [
        {
          question: 'Preciso ter contribuído ao INSS?',
          answer: 'Não, o BPC é um benefício assistencial que independe de contribuição. Por isso, não dá direito a 13º salário nem deixa pensão para dependentes.',
        },
        {
          question: 'O que conta como renda familiar?',
          answer: 'Conta a renda de todos que moram na mesma casa: salários, benefícios, pensões, aposentadorias. Alguns programas como Bolsa Família não contam.',
        },
        {
          question: 'Deficiência temporária dá direito?',
          answer: 'Não, a deficiência deve ser de longo prazo (2 anos ou mais) ou permanente, com impedimento para participação plena na sociedade.',
        },
        {
          question: 'Se eu trabalhar, perco o BPC?',
          answer: 'Pode perder, mas há regras de transição. Para pessoas com deficiência, o benefício pode ser suspenso e retomado se perder o emprego.',
        },
      ],
    },
    relatedActions: ['auxilio-doenca', 'pensao-morte'],
    updatedAt: '2025-01-01',
  },

  // PENAL
  {
    id: 'defesa-flagrante',
    nicheId: 'penal',
    slug: 'defesa-flagrante',
    title: 'Defesa em Flagrante: O Que Fazer Quando Alguém é Preso',
    metaTitle: 'Preso em Flagrante | Defesa, Audiência de Custódia 2025',
    metaDescription: 'Familiar preso em flagrante? Saiba como funciona a prisão, audiência de custódia e como um advogado criminal pode ajudar.',
    keywords: ['preso em flagrante', 'defesa criminal', 'audiência de custódia', 'advogado criminal', 'liberdade provisória', 'fiança'],
    excerpt: 'Entenda como funciona a prisão em flagrante, os direitos do preso, a audiência de custódia e como buscar a liberdade provisória.',
    content: {
      intro: 'A prisão em flagrante ocorre quando alguém é pego no momento do crime ou logo após. O preso tem direitos garantidos e pode buscar a liberdade provisória, com ou sem fiança.',
      whatIs: 'Flagrante é a prisão feita no momento do crime, logo após ou quando o suspeito é perseguido ou encontrado com objetos do crime. É uma prisão provisória que precisa ser analisada por um juiz em 24 horas.',
      whenYouHaveRight: [
        'Ter advogado em todos os atos',
        'Permanecer em silêncio',
        'Comunicar a prisão a familiares',
        'Audiência de custódia em 24 horas',
        'Relaxamento se a prisão for ilegal',
        'Liberdade provisória em certos casos',
      ],
      documents: [
        'Documentos do preso (se disponível)',
        'Endereço de residência fixa',
        'Comprovante de trabalho',
        'Comprovantes de vínculos familiares',
        'Antecedentes criminais (para estratégia)',
        'Testemunhas de defesa',
      ],
      deadlines: 'O preso deve ser apresentado ao juiz em até 24 horas (audiência de custódia). A decisão sobre manutenção ou liberdade deve ser imediata.',
      faq: [
        {
          question: 'O que é audiência de custódia?',
          answer: 'É a apresentação do preso a um juiz em até 24 horas para verificar a legalidade da prisão e decidir sobre liberdade, fiança ou prisão preventiva.',
        },
        {
          question: 'Posso pagar fiança e sair?',
          answer: 'Depende do crime. Crimes afiançáveis permitem pagamento de fiança fixada pelo delegado ou juiz. Crimes hediondos e outros graves não admitem fiança.',
        },
        {
          question: 'Quais os direitos do preso?',
          answer: 'Direito ao silêncio, a advogado, a informar a família, a não ser torturado, a saber os motivos da prisão e a audiência de custódia.',
        },
        {
          question: 'Se for crime de menor potencial, sai preso?',
          answer: 'Não necessariamente. Para crimes com pena máxima até 4 anos, o delegado pode lavrar Termo Circunstanciado e liberar mediante compromisso de comparecer ao Juizado.',
        },
      ],
    },
    relatedActions: ['habeas-corpus', 'acompanhamento-delegacia'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'habeas-corpus',
    nicheId: 'penal',
    slug: 'habeas-corpus',
    title: 'Habeas Corpus: Quando e Como Pedir a Liberdade',
    metaTitle: 'Habeas Corpus | Como Pedir Liberdade Prisão Ilegal 2025',
    metaDescription: 'Prisão ilegal ou abusiva? Saiba quando cabe habeas corpus, como fazer o pedido e quanto tempo leva para ser julgado.',
    keywords: ['habeas corpus', 'liberdade', 'prisão ilegal', 'prisão preventiva', 'excesso de prazo', 'relaxamento prisão'],
    excerpt: 'O habeas corpus é o remédio constitucional para combater prisões ilegais ou arbitrárias. Saiba quando você pode usar essa medida.',
    content: {
      intro: 'O habeas corpus é um remédio constitucional utilizado para proteger o direito de ir e vir de qualquer pessoa que sofra ou esteja ameaçada de sofrer violência ou coação ilegal.',
      whatIs: 'É uma ação que pode ser impetrada por qualquer pessoa (não precisa ser advogado) em favor de quem está preso ilegalmente ou ameaçado de prisão ilegal. É julgado com prioridade.',
      whenYouHaveRight: [
        'Prisão sem fundamentação adequada',
        'Excesso de prazo da prisão provisória',
        'Prisão quando caberia medida alternativa',
        'Descumprimento de requisitos legais',
        'Ausência de flagrante delito',
        'Quando a conduta não é crime',
      ],
      documents: [
        'Cópia da decisão de prisão',
        'Documentos do processo criminal',
        'Comprovantes de residência e trabalho',
        'Antecedentes do paciente',
        'Documentos que provem a ilegalidade',
        'Qualquer prova relevante',
      ],
      deadlines: 'O habeas corpus deve ser julgado com prioridade. Pedidos liminares são analisados em horas ou dias. O mérito é julgado em dias ou semanas.',
      faq: [
        {
          question: 'Qualquer pessoa pode impetrar habeas corpus?',
          answer: 'Sim, qualquer pessoa pode impetrar em favor do preso, não precisa ser advogado. Pode ser feito até por familiares.',
        },
        {
          question: 'Quanto tempo demora o julgamento?',
          answer: 'É julgado com prioridade. Pedidos liminares (urgentes) podem ser analisados no mesmo dia. O mérito pode levar alguns dias ou semanas.',
        },
        {
          question: 'Se negado, posso recorrer?',
          answer: 'Sim, pode-se impetrar novo habeas corpus em tribunal superior. A ordem é: TJ → STJ → STF.',
        },
        {
          question: 'Habeas corpus preventivo é possível?',
          answer: 'Sim, quando há ameaça concreta e iminente de prisão ilegal, pode-se impetrar habeas corpus preventivo para impedir a prisão.',
        },
      ],
    },
    relatedActions: ['defesa-flagrante', 'acompanhamento-delegacia'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'violencia-domestica',
    nicheId: 'penal',
    slug: 'violencia-domestica',
    title: 'Violência Doméstica: Proteção e Direitos da Vítima',
    metaTitle: 'Violência Doméstica | Medida Protetiva Lei Maria da Penha 2025',
    metaDescription: 'Está sofrendo violência doméstica? Saiba como pedir medida protetiva, onde denunciar e quais seus direitos pela Lei Maria da Penha.',
    keywords: ['violência doméstica', 'Lei Maria da Penha', 'medida protetiva', 'agressão mulher', 'denunciar violência', 'proteção vítima'],
    excerpt: 'Conheça seus direitos contra a violência doméstica, como pedir medida protetiva e onde buscar ajuda pela Lei Maria da Penha.',
    content: {
      intro: 'A Lei Maria da Penha (Lei 11.340/06) protege mulheres em situação de violência doméstica e familiar. A lei prevê medidas de proteção urgentes e punições mais severas aos agressores.',
      whatIs: 'Violência doméstica é qualquer ação ou omissão baseada no gênero que cause morte, lesão, sofrimento físico, sexual ou psicológico à mulher no âmbito doméstico, familiar ou em relação íntima de afeto.',
      whenYouHaveRight: [
        'Violência física (tapas, socos, empurrões)',
        'Violência psicológica (ameaças, humilhações)',
        'Violência sexual (estupro, coerção)',
        'Violência patrimonial (destruição de bens)',
        'Violência moral (calúnia, difamação)',
      ],
      documents: [
        'Boletim de ocorrência',
        'Laudos médicos de lesões',
        'Fotos de agressões',
        'Prints de mensagens ameaçadoras',
        'Testemunhos',
        'Documentos pessoais',
      ],
      deadlines: 'A medida protetiva deve ser decidida pelo juiz em até 48 horas. Pode ser pedida na delegacia, no Ministério Público ou diretamente ao juiz.',
      faq: [
        {
          question: 'O que é medida protetiva?',
          answer: 'São ordens judiciais que obrigam o agressor a manter distância, não ter contato, sair de casa, entre outras. O descumprimento é crime e leva à prisão.',
        },
        {
          question: 'Onde denunciar violência doméstica?',
          answer: 'Delegacia da Mulher, qualquer delegacia, pelo 180 (Central de Atendimento à Mulher), Ministério Público ou diretamente no fórum.',
        },
        {
          question: 'Homens podem ser protegidos pela Lei Maria da Penha?',
          answer: 'A Lei Maria da Penha protege especificamente mulheres. Homens vítimas são protegidos pelo Código Penal comum.',
        },
        {
          question: 'Posso retirar a queixa depois?',
          answer: 'Para crimes de lesão corporal, a ação é pública incondicionada e prossegue mesmo sem sua vontade. Você pode desistir de representar em crimes condicionados, mas isso não é recomendado.',
        },
      ],
    },
    relatedActions: ['defesa-flagrante', 'acompanhamento-delegacia'],
    updatedAt: '2025-01-01',
  },

  // ============ NOVOS ARTIGOS SEO 2025 ============

  // TRABALHISTA - Artigos de Alta Demanda
  {
    id: 'pejotizacao-vinculo',
    nicheId: 'trabalhista',
    slug: 'pejotizacao-vinculo-empregaticio',
    title: 'Pejotização: Quando a Empresa Frauda Seus Direitos Trabalhistas',
    metaTitle: 'Pejotização e Vínculo Empregatício | Fraude Trabalhista 2025',
    metaDescription: 'Trabalha como PJ mas cumpre horário e recebe ordens? Pode ser fraude. Saiba reconhecer a pejotização ilegal e recuperar seus direitos CLT.',
    keywords: ['pejotização fraude', 'vínculo empregatício PJ', 'reconhecimento de vínculo', 'CLT disfarçada', 'trabalho PJ direitos', 'fraude trabalhista MEI', 'pejotização o que é'],
    excerpt: 'Entenda o que é pejotização fraudulenta, como identificar se você é vítima e como buscar o reconhecimento do vínculo empregatício.',
    content: {
      intro: 'A pejotização ocorre quando a empresa obriga o trabalhador a abrir CNPJ (MEI, ME, etc.) para prestar serviços que, na prática, são de empregado CLT. Essa prática cresceu 57% em 2024 e é considerada fraude trabalhista quando há subordinação, pessoalidade e habitualidade.',
      whatIs: 'Pejotização é a contratação de trabalhador como pessoa jurídica (PJ) quando na verdade existe relação de emprego. A empresa faz isso para não pagar direitos trabalhistas como FGTS, férias, 13º e INSS patronal. Se você recebe ordens, cumpre horário fixo e não pode se fazer substituir, provavelmente é empregado disfarçado.',
      whenYouHaveRight: [
        'Quando cumpre horário fixo determinado pela empresa',
        'Quando recebe ordens diretas de superiores',
        'Quando não pode enviar outra pessoa em seu lugar',
        'Quando presta serviços de forma contínua e não eventual',
        'Quando depende economicamente daquele contratante',
        'Quando usa equipamentos e estrutura da empresa',
      ],
      documents: [
        'Contrato de prestação de serviços',
        'Comprovantes de pagamento (notas fiscais)',
        'E-mails e mensagens com ordens e cobranças',
        'Registros de entrada e saída (se houver)',
        'Testemunhos de colegas',
        'Prints de grupos de trabalho no WhatsApp',
      ],
      deadlines: 'O prazo para entrar com ação é de 2 anos após o término do contrato. Você pode pleitear os direitos dos últimos 5 anos de trabalho.',
      faq: [
        {
          question: 'Posso ter meu vínculo reconhecido mesmo tendo emitido notas fiscais?',
          answer: 'Sim! O contrato formal como PJ não impede o reconhecimento do vínculo. O que vale é a realidade do trabalho. Se havia subordinação e habitualidade, a Justiça pode reconhecer o emprego.',
        },
        {
          question: 'Quais direitos recebo se ganhar a ação?',
          answer: 'Todos os direitos de CLT retroativos: registro em carteira, FGTS + multa 40%, férias + 1/3, 13º salário, horas extras, e contribuições previdenciárias corretas.',
        },
        {
          question: 'MEI também pode pedir vínculo?',
          answer: 'Sim. Ser MEI não impede o reconhecimento. Se você foi obrigado a abrir MEI para trabalhar como empregado subordinado, é fraude.',
        },
        {
          question: 'E se eu ainda estiver trabalhando como PJ?',
          answer: 'Você pode entrar com ação durante o contrato. Não precisa esperar terminar. Mas avalie os riscos com um advogado antes.',
        },
      ],
    },
    relatedActions: ['demissao-sem-justa-causa', 'horas-extras', 'verbas-rescissorias'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'adicional-insalubridade',
    nicheId: 'trabalhista',
    slug: 'adicional-insalubridade-periculosidade',
    title: 'Adicional de Insalubridade e Periculosidade: Seus Direitos',
    metaTitle: 'Insalubridade e Periculosidade | Adicional CLT 2025',
    metaDescription: 'Trabalha em ambiente insalubre ou perigoso? Saiba se tem direito ao adicional de 10%, 20%, 30% ou 40%. Guia completo com advogado.',
    keywords: ['adicional insalubridade', 'trabalho insalubre', 'periculosidade CLT', 'adicional 30%', 'laudo insalubridade', 'trabalho perigoso direitos', 'NR-15'],
    excerpt: 'Conheça as diferenças entre insalubridade e periculosidade, quando você tem direito e como calcular o adicional.',
    content: {
      intro: 'Milhares de trabalhadores brasileiros têm direito a adicionais de insalubridade ou periculosidade e não recebem. Esses adicionais são devidos quando o trabalho expõe a pessoa a agentes nocivos à saúde ou a riscos de vida.',
      whatIs: 'Insalubridade é a exposição a agentes físicos, químicos ou biológicos prejudiciais à saúde (ruído, calor, produtos químicos, vírus). Periculosidade é a exposição a risco de vida (eletricidade, explosivos, inflamáveis, segurança). São adicionais diferentes que não se acumulam.',
      whenYouHaveRight: [
        'Exposição a ruído acima dos limites legais',
        'Contato com produtos químicos sem proteção adequada',
        'Trabalho em ambientes muito quentes ou frios',
        'Contato com agentes biológicos (hospitais, laboratórios)',
        'Trabalho com eletricidade de alta tensão',
        'Manuseio de explosivos ou inflamáveis',
        'Atividades de segurança pessoal ou patrimonial',
      ],
      documents: [
        'Carteira de trabalho',
        'Holerites e contracheques',
        'Descrição das atividades realizadas',
        'Fotos do ambiente de trabalho',
        'PPRA e PCMSO da empresa',
        'Testemunhos de colegas',
      ],
      deadlines: 'Prazo de 2 anos após a demissão para entrar com ação, podendo cobrar os últimos 5 anos. Durante o contrato, pode ser pedido a qualquer momento.',
      faq: [
        {
          question: 'Qual o valor do adicional de insalubridade?',
          answer: 'Depende do grau: 10% (mínimo), 20% (médio) ou 40% (máximo) sobre o salário mínimo. Algumas convenções coletivas calculam sobre o salário base.',
        },
        {
          question: 'E o adicional de periculosidade?',
          answer: 'É sempre 30% sobre o salário base (não o mínimo). É maior que insalubridade na maioria dos casos.',
        },
        {
          question: 'Posso receber os dois adicionais?',
          answer: 'Não, a lei permite escolher apenas um. A empresa geralmente paga o de menor valor, mas você pode pedir o mais vantajoso.',
        },
        {
          question: 'Preciso de perícia para provar?',
          answer: 'Sim, o juiz nomeia um perito para avaliar as condições de trabalho. Você pode indicar assistente técnico.',
        },
      ],
    },
    relatedActions: ['acidente-trabalho', 'demissao-sem-justa-causa', 'horas-extras'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'rescisao-indireta',
    nicheId: 'trabalhista',
    slug: 'rescisao-indireta',
    title: 'Rescisão Indireta: Demissão por Culpa do Empregador',
    metaTitle: 'Rescisão Indireta | Demissão por Culpa da Empresa 2025',
    metaDescription: 'Seu patrão comete faltas graves? Saiba como pedir demissão por culpa do empregador e garantir todos os direitos de demissão sem justa causa.',
    keywords: ['rescisão indireta', 'demissão indireta', 'falta grave empregador', 'justa causa empresa', 'artigo 483 CLT', 'demissão por culpa patrão'],
    excerpt: 'Saiba como a rescisão indireta funciona, quais situações dão direito e como garantir todos os benefícios de uma demissão sem justa causa.',
    content: {
      intro: 'A rescisão indireta é a "justa causa do empregador". Quando a empresa comete faltas graves, o empregado pode pedir a rescisão do contrato e receber todos os direitos como se tivesse sido demitido sem justa causa, incluindo FGTS + 40%, aviso prévio e seguro-desemprego.',
      whatIs: 'Prevista no artigo 483 da CLT, a rescisão indireta permite que o empregado encerre o contrato quando o empregador não cumpre suas obrigações. É como uma demissão causada pela empresa, garantindo ao trabalhador todos os direitos.',
      whenYouHaveRight: [
        'Atraso ou não pagamento de salários por mais de 1 mês',
        'Não recolhimento de FGTS',
        'Rebaixamento de função ou salário sem acordo',
        'Exigência de serviços superiores às forças ou ilegais',
        'Tratamento com rigor excessivo',
        'Assédio moral ou sexual comprovados',
        'Exposição a perigo sem condições de segurança',
        'Descumprimento grave do contrato de trabalho',
      ],
      documents: [
        'Carteira de trabalho',
        'Holerites mostrando atrasos',
        'Extrato do FGTS não depositado',
        'Provas de rebaixamento ou assédio',
        'Testemunhos de colegas',
        'Qualquer documento que comprove a falta grave',
      ],
      deadlines: 'A ação deve ser proposta enquanto o contrato ainda está vigente ou logo após a saída. Provas devem ser reunidas antes do pedido.',
      faq: [
        {
          question: 'Preciso continuar trabalhando enquanto espero a decisão?',
          answer: 'Depende da gravidade. Em casos muito graves, você pode deixar o trabalho imediatamente. Em outros, é recomendado continuar até a decisão judicial.',
        },
        {
          question: 'E se a empresa não aceitar?',
          answer: 'Você entra com ação trabalhista. O juiz vai analisar as provas e decidir. Se procedente, você recebe todos os direitos.',
        },
        {
          question: 'Recebo seguro-desemprego na rescisão indireta?',
          answer: 'Sim, se ganhar a ação. A rescisão indireta reconhecida dá direito a seguro-desemprego, FGTS + 40% e aviso prévio.',
        },
        {
          question: 'Quanto tempo leva o processo?',
          answer: 'Em média, de 6 meses a 2 anos, dependendo da vara e da complexidade. Há possibilidade de acordo antes da sentença.',
        },
      ],
    },
    relatedActions: ['assedio-moral', 'demissao-sem-justa-causa', 'horas-extras'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'multa-477-clt',
    nicheId: 'trabalhista',
    slug: 'multa-477-atraso-rescisao',
    title: 'Multa do Artigo 477: Atraso nas Verbas Rescisórias',
    metaTitle: 'Multa 477 CLT | Atraso no Pagamento da Rescisão 2025',
    metaDescription: 'A empresa atrasou o pagamento das verbas rescisórias? Você tem direito à multa de um salário. Saiba como cobrar.',
    keywords: ['multa 477 CLT', 'atraso verbas rescisórias', 'multa rescisão', 'prazo pagamento demissão', 'TRCT atrasado', 'homologação rescisão'],
    excerpt: 'Entenda o prazo legal para pagamento das verbas rescisórias e como cobrar a multa quando a empresa atrasa.',
    content: {
      intro: 'O artigo 477 da CLT determina que as verbas rescisórias devem ser pagas em até 10 dias após o término do contrato. Se a empresa atrasar, deve pagar multa equivalente a um salário do empregado.',
      whatIs: 'A multa do art. 477 é uma penalidade imposta ao empregador que não paga as verbas rescisórias no prazo legal. Funciona como uma compensação ao trabalhador pelos transtornos do atraso e como forma de desestimular a prática.',
      whenYouHaveRight: [
        'Quando o TRCT não é entregue em 10 dias',
        'Quando as verbas rescisórias não são pagas em 10 dias',
        'Quando a empresa paga valor inferior ao devido',
        'Quando há atraso na entrega das guias de FGTS/seguro-desemprego',
        'Quando a homologação não é feita no prazo',
      ],
      documents: [
        'Carteira de trabalho com data de saída',
        'Termo de Rescisão (TRCT)',
        'Comprovante de depósito das verbas',
        'Carta de demissão ou aviso prévio',
        'Extrato bancário mostrando a data do pagamento',
      ],
      deadlines: 'O prazo é de 10 dias corridos a partir do término do contrato, independente de ser demissão, pedido de demissão ou término de contrato por prazo determinado.',
      faq: [
        {
          question: 'Qual o valor da multa do artigo 477?',
          answer: 'O valor é de um salário do empregado. Se você ganhava R$ 3.000, a multa é de R$ 3.000.',
        },
        {
          question: 'Sábados e domingos contam no prazo de 10 dias?',
          answer: 'Sim, o prazo é em dias corridos. Mas se o décimo dia cair em final de semana ou feriado, prorroga para o próximo dia útil.',
        },
        {
          question: 'A multa é automática ou preciso processar?',
          answer: 'Você precisa cobrar. Pode tentar acordo com a empresa ou entrar com reclamação trabalhista.',
        },
        {
          question: 'Atraso de poucos dias já dá direito à multa?',
          answer: 'Sim, qualquer atraso, mesmo de um dia, dá direito à multa integral.',
        },
      ],
    },
    relatedActions: ['demissao-sem-justa-causa', 'verbas-rescissorias', 'horas-extras'],
    updatedAt: '2025-01-01',
  },

  // CONSUMIDOR - Nova Categoria de Alta Demanda
  {
    id: 'atraso-cancelamento-voo',
    nicheId: 'consumidor',
    slug: 'atraso-cancelamento-voo-direitos',
    title: 'Atraso e Cancelamento de Voo: Todos os Seus Direitos',
    metaTitle: 'Atraso de Voo | Cancelamento | Indenização 2025',
    metaDescription: 'Voo atrasou ou foi cancelado? Saiba seus direitos: assistência material, reacomodação e indenização. Até R$ 10.000 sem sair de casa.',
    keywords: ['atraso de voo indenização', 'voo cancelado direitos', 'direitos passageiro', 'ANAC atraso voo', 'indenização companhia aérea', 'no-show passageiro'],
    excerpt: 'Conheça todos os seus direitos quando um voo atrasa, é cancelado ou há overbooking. Saiba quanto você pode receber de indenização.',
    content: {
      intro: 'Problemas com voos são extremamente comuns no Brasil. A ANAC estabelece regras claras de assistência material e reacomodação. Além disso, os Tribunais reconhecem o direito a indenização por danos morais em casos de transtornos significativos.',
      whatIs: 'Os direitos do passageiro aéreo são regulados pela Resolução 400 da ANAC e pelo Código de Defesa do Consumidor. Incluem assistência material (alimentação, comunicação, hospedagem), reacomodação em outro voo ou reembolso integral, além de indenização por danos morais.',
      whenYouHaveRight: [
        'Atraso superior a 1 hora: direito a comunicação',
        'Atraso superior a 2 horas: direito a alimentação',
        'Atraso superior a 4 horas: direito a hospedagem e transporte',
        'Cancelamento de voo sem aviso prévio de 72 horas',
        'Preterição de embarque (overbooking)',
        'Alteração significativa de itinerário',
        'Perda de conexão por culpa da companhia',
      ],
      documents: [
        'Cartão de embarque e passagem aérea',
        'Comprovantes de atraso (fotos do painel)',
        'Recibos de despesas extras (alimentação, taxi)',
        'Protocolo de reclamação à companhia',
        'Prints de comunicados da empresa',
        'Comprovantes de compromissos perdidos',
      ],
      deadlines: 'O prazo para ação no Juizado Especial é de 5 anos. Recomendamos agir o quanto antes, enquanto as provas estão frescas.',
      faq: [
        {
          question: 'Quanto posso receber de indenização?',
          answer: 'Depende do transtorno. Atrasos simples: R$ 3.000 a R$ 5.000. Cancelamentos com perda de compromisso: R$ 5.000 a R$ 10.000. Casos graves: até R$ 15.000 ou mais.',
        },
        {
          question: 'Preciso de advogado para processar a companhia aérea?',
          answer: 'No Juizado Especial (causas até 20 salários mínimos), não é obrigatório. Mas ter advogado aumenta as chances de sucesso.',
        },
        {
          question: 'A companhia ofereceu voucher. Devo aceitar?',
          answer: 'Você tem direito a reembolso em dinheiro, não é obrigado a aceitar voucher. Avalie se o valor cobre seus prejuízos.',
        },
        {
          question: 'Mau tempo isenta a companhia de indenizar?',
          answer: 'Isenta apenas da indenização, não da assistência. E mesmo assim, se você provar transtorno grave, pode haver indenização.',
        },
      ],
    },
    relatedActions: ['overbooking-extravio', 'danos-morais'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'overbooking-extravio',
    nicheId: 'consumidor',
    slug: 'overbooking-extravio-bagagem',
    title: 'Overbooking e Extravio de Bagagem: Como Ser Indenizado',
    metaTitle: 'Overbooking e Bagagem Extraviada | Indenização 2025',
    metaDescription: 'Perderam sua mala ou não deixaram você embarcar por overbooking? Saiba seus direitos e quanto você pode receber de indenização.',
    keywords: ['overbooking direitos', 'bagagem extraviada', 'mala perdida', 'extravio bagagem indenização', 'preterição embarque', 'bagagem danificada'],
    excerpt: 'Entenda o que fazer quando sua bagagem é extraviada ou você é impedido de embarcar por overbooking, e quanto pode receber.',
    content: {
      intro: 'Overbooking (vender mais passagens que assentos) e extravio de bagagem são problemas frequentes. A legislação brasileira protege o passageiro e garante indenizações que podem chegar a milhares de reais.',
      whatIs: 'Overbooking ocorre quando a companhia vende mais passagens do que lugares disponíveis, impedindo passageiros de embarcar. Extravio é quando sua bagagem não chega ao destino junto com você. Ambos geram direito a compensações.',
      whenYouHaveRight: [
        'Impedimento de embarcar por overbooking',
        'Bagagem que não chegou no mesmo voo',
        'Bagagem extraviada definitivamente (após 21 dias)',
        'Bagagem danificada ou violada',
        'Furto de itens dentro da mala',
        'Atraso na devolução da bagagem',
      ],
      documents: [
        'Passagem aérea e cartão de embarque',
        'Comprovante de despacho de bagagem (tag)',
        'Registro de Irregularidade de Bagagem (RIB)',
        'Fotos da mala danificada',
        'Notas fiscais de itens perdidos',
        'Comprovantes de compras emergenciais',
      ],
      deadlines: 'Reclame imediatamente no desembarque. A companhia tem 7 dias (voo nacional) ou 21 dias (internacional) para localizar a mala antes de ser considerada extravio definitivo.',
      faq: [
        {
          question: 'Quanto recebo por overbooking?',
          answer: 'A ANAC exige compensação imediata. Além disso, você pode pedir danos morais de R$ 3.000 a R$ 10.000, dependendo do transtorno.',
        },
        {
          question: 'E se perderem minha mala definitivamente?',
          answer: 'Você tem direito ao valor dos itens (com comprovação) ou um valor fixado em convenção (cerca de 1.131 DES, aproximadamente R$ 8.000). Mais danos morais.',
        },
        {
          question: 'Posso comprar roupas se a mala atrasou?',
          answer: 'Sim, a companhia deve reembolsar gastos essenciais como roupas e itens de higiene. Guarde todas as notas fiscais.',
        },
        {
          question: 'Objetos de valor na mala são indenizados?',
          answer: 'Joias, eletrônicos e dinheiro não devem ir na mala despachada. Mas se forem extraviados, você pode tentar comprovar e pedir ressarcimento.',
        },
      ],
    },
    relatedActions: ['atraso-cancelamento-voo', 'danos-morais'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'negativacao-indevida',
    nicheId: 'consumidor',
    slug: 'negativacao-indevida-spc-serasa',
    title: 'Nome Sujo Indevido: Como Limpar e Ser Indenizado',
    metaTitle: 'Negativação Indevida SPC Serasa | Danos Morais 2025',
    metaDescription: 'Teve o nome negativado indevidamente? Saiba como limpar seu nome e receber indenização por danos morais. Valores de R$ 5.000 a R$ 20.000.',
    keywords: ['nome sujo indevido', 'negativação indevida', 'danos morais SPC', 'limpar nome Serasa', 'cobrança indevida', 'score negativado errado'],
    excerpt: 'Entenda o que fazer quando seu nome é negativado por dívida que você não tem, como limpar e quanto pode receber de indenização.',
    content: {
      intro: 'A negativação indevida do nome é uma das principais causas de ações no Juizado Especial. Quando você é cobrado por dívida inexistente ou já paga e tem o nome incluído no SPC/Serasa, tem direito a indenização por danos morais presumidos.',
      whatIs: 'Negativação indevida é a inclusão do nome do consumidor em cadastros restritivos (SPC, Serasa, Boa Vista) por dívida inexistente, já paga, prescrita ou decorrente de fraude. O dano moral é presumido (in re ipsa), ou seja, não precisa provar sofrimento.',
      whenYouHaveRight: [
        'Cobrança de dívida já paga',
        'Negativação por fraude (cartão clonado, documentos roubados)',
        'Cobrança de produto ou serviço não contratado',
        'Dívida prescrita (mais de 5 anos)',
        'Negativação após acordo de quitação',
        'Manutenção do nome após pagamento',
        'Cobrança de valor incorreto',
      ],
      documents: [
        'Carta de negativação (se recebeu)',
        'Consulta ao SPC/Serasa mostrando a restrição',
        'Comprovante de pagamento da dívida',
        'Boletim de ocorrência (em caso de fraude)',
        'Protocolos de reclamação à empresa',
        'Contrato ou fatura mostrando valores incorretos',
      ],
      deadlines: 'O prazo para ação é de 5 anos. A empresa tem até 5 dias úteis para retirar a negativação após comunicação ou quitação.',
      faq: [
        {
          question: 'Quanto posso receber de indenização?',
          answer: 'Varia de R$ 5.000 a R$ 20.000 na maioria dos casos. Valores maiores em fraudes graves ou quando há consequências sérias (perda de emprego, negativa de crédito importante).',
        },
        {
          question: 'Preciso provar que sofri constrangimento?',
          answer: 'Não. O dano moral por negativação indevida é presumido (in re ipsa). Basta provar que a negativação foi indevida.',
        },
        {
          question: 'E se eu tiver outras dívidas verdadeiras no nome?',
          answer: 'Isso pode reduzir a indenização (Súmula 385 STJ), mas não elimina. Você ainda tem direito, só em valor menor.',
        },
        {
          question: 'Como limpar meu nome rapidamente?',
          answer: 'Você pode pedir liminar na Justiça para exclusão imediata enquanto o processo corre. Também pode reclamar no Procon ou Consumidor.gov.br.',
        },
      ],
    },
    relatedActions: ['danos-morais', 'cobranca'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'plano-saude-negativa',
    nicheId: 'consumidor',
    slug: 'plano-saude-negativa-cobertura',
    title: 'Plano de Saúde Negou Cobertura? Saiba Seus Direitos',
    metaTitle: 'Plano de Saúde Negou | Cirurgia, Exame, Internação 2025',
    metaDescription: 'O plano de saúde negou sua cirurgia, exame ou internação? Saiba como reverter a negativa e obter indenização por danos morais.',
    keywords: ['plano negou cirurgia', 'cobertura plano de saúde', 'ANS', 'negativa plano saúde', 'liminar plano saúde', 'rol ANS', 'carência plano'],
    excerpt: 'Entenda quando a negativa do plano de saúde é abusiva, como conseguir a cobertura na Justiça e se você tem direito a indenização.',
    content: {
      intro: 'As negativas de cobertura por planos de saúde são extremamente comuns e, em muitos casos, ilegais. A ANS estabelece regras mínimas de cobertura, e os Tribunais frequentemente revertem negativas abusivas, além de condenar as operadoras a pagar indenização.',
      whatIs: 'A negativa de cobertura ocorre quando o plano recusa pagar por um procedimento, alegando que não está coberto, há carência, ou outras justificativas. Muitas dessas negativas são consideradas abusivas pela Justiça e pela ANS.',
      whenYouHaveRight: [
        'Negativa de procedimento previsto no rol ANS',
        'Negativa de emergência ou urgência',
        'Negativa de tratamento oncológico',
        'Exigência de carência em urgência',
        'Negativa de home care quando prescrito',
        'Recusa de próteses e órteses vinculadas a cirurgia',
        'Limitação de dias de internação em UTI',
        'Negativa de medicamentos quimioterápicos',
      ],
      documents: [
        'Carteirinha do plano de saúde',
        'Pedido médico do procedimento',
        'Negativa por escrito do plano',
        'Laudos e exames que justifiquem o tratamento',
        'Protocolo de reclamação à ANS',
        'Contrato do plano',
      ],
      deadlines: 'A operadora tem prazos para responder: 21 dias úteis para procedimentos de alta complexidade, 10 para demais cirurgias. Urgências devem ser atendidas imediatamente.',
      faq: [
        {
          question: 'O que fazer quando o plano nega?',
          answer: 'Primeiro, exija a negativa por escrito. Depois, reclame na ANS (NIP). Se não resolver, entre com liminar na Justiça para obrigar o atendimento.',
        },
        {
          question: 'Posso pedir indenização além da cobertura?',
          answer: 'Sim, se a negativa causou agravamento da doença, sofrimento intenso ou situação de risco, você pode pedir danos morais.',
        },
        {
          question: 'O plano pode negar procedimento fora do rol da ANS?',
          answer: 'Pode, mas se o médico justificar que não há alternativa eficaz, a Justiça pode obrigar a cobertura mesmo assim.',
        },
        {
          question: 'Quanto tempo leva para conseguir liminar?',
          answer: 'Liminares urgentes podem sair em 24 a 48 horas. Em casos de risco de vida, no mesmo dia.',
        },
      ],
    },
    relatedActions: ['danos-morais', 'erro-medico'],
    updatedAt: '2025-01-01',
  },

  // PREVIDENCIÁRIO - Artigos Atualizados 2025
  {
    id: 'aposentadoria-2025',
    nicheId: 'previdenciario',
    slug: 'aposentadoria-novas-regras-2025',
    title: 'Novas Regras de Aposentadoria 2025: Guia Completo',
    metaTitle: 'Aposentadoria 2025 | Novas Regras, Idade, Tempo 2025',
    metaDescription: 'Conheça as novas regras de aposentadoria em 2025: idade mínima, tempo de contribuição, regras de transição. Guia atualizado INSS.',
    keywords: ['aposentadoria 2025', 'regras aposentadoria INSS', 'idade aposentadoria 2025', 'tempo contribuição', 'reforma previdência', 'regras transição'],
    excerpt: 'Entenda as regras de aposentadoria válidas em 2025, incluindo as mudanças progressivas de idade e as regras de transição.',
    content: {
      intro: 'Em 2025, as regras de aposentadoria continuam evoluindo conforme a Reforma da Previdência de 2019. A idade mínima para mulheres subiu para 59 anos, e os homens precisam de 65 anos. Conheça todas as opções e regras de transição.',
      whatIs: 'A aposentadoria é o benefício do INSS pago a quem cumpriu os requisitos de idade e/ou tempo de contribuição. Após a Reforma de 2019, existem várias regras, incluindo transições para quem já contribuía antes da mudança.',
      whenYouHaveRight: [
        'Mulheres: 62 anos de idade + 15 anos de contribuição (regra definitiva)',
        'Homens: 65 anos de idade + 20 anos de contribuição',
        'Regra de transição por pontos: soma de idade + tempo',
        'Regra de transição por idade progressiva',
        'Regra do pedágio 50% ou 100%',
        'Aposentadoria especial (atividades insalubres)',
      ],
      documents: [
        'Carteiras de trabalho (todas)',
        'Carnês de contribuição como autônomo',
        'Certidão de Tempo de Contribuição (CTC)',
        'Extrato CNIS do INSS',
        'Documentos de atividade rural (se aplicável)',
        'PPP para aposentadoria especial',
      ],
      deadlines: 'Não há prazo para pedir aposentadoria, mas quanto mais cedo você organizar os documentos e contribuições, melhor. O INSS tem 90 dias para analisar.',
      faq: [
        {
          question: 'Qual a idade mínima em 2025?',
          answer: 'Para a regra geral: mulheres 62 anos, homens 65 anos. Nas regras de transição, pode ser menor dependendo do tempo de contribuição.',
        },
        {
          question: 'Quanto vou receber de aposentadoria?',
          answer: 'O cálculo é: 60% da média de todos os salários + 2% por ano que exceder 15 anos (mulheres) ou 20 anos (homens) de contribuição.',
        },
        {
          question: 'Posso me aposentar antes da idade mínima?',
          answer: 'Só nas regras de transição ou aposentadoria especial (atividade insalubre). A aposentadoria por tempo de contribuição pura acabou.',
        },
        {
          question: 'Como saber qual regra é melhor para mim?',
          answer: 'Depende do seu tempo de contribuição e idade. Um advogado previdenciário pode fazer a simulação de cada regra e identificar a mais vantajosa.',
        },
      ],
    },
    relatedActions: ['auxilio-doenca', 'bpc-loas', 'revisao-beneficio'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'simulacao-aposentadoria',
    nicheId: 'previdenciario',
    slug: 'simular-aposentadoria-meu-inss',
    title: 'Como Simular Sua Aposentadoria no Meu INSS',
    metaTitle: 'Simular Aposentadoria Meu INSS | Passo a Passo 2025',
    metaDescription: 'Aprenda a fazer a simulação de aposentadoria no app Meu INSS. Veja quando pode se aposentar e quanto vai receber. Tutorial completo.',
    keywords: ['simular aposentadoria', 'Meu INSS', 'quando posso aposentar', 'simulação INSS', 'calcular aposentadoria', 'app INSS'],
    excerpt: 'Aprenda passo a passo como usar o Meu INSS para simular sua aposentadoria, verificar tempo de contribuição e planejar o futuro.',
    content: {
      intro: 'O aplicativo Meu INSS permite que você simule sua aposentadoria de forma gratuita e veja em quanto tempo pode se aposentar, qual valor estimado receberá e qual regra é mais vantajosa. Aprenda a usar essa ferramenta essencial.',
      whatIs: 'A simulação de aposentadoria é uma ferramenta do Meu INSS que analisa seu histórico de contribuições e mostra todas as regras de aposentadoria disponíveis, com estimativa de data e valor do benefício.',
      whenYouHaveRight: [
        'Qualquer pessoa pode fazer a simulação',
        'É gratuito e disponível 24 horas',
        'Ajuda a planejar a melhor data para pedir',
        'Identifica contribuições faltantes',
        'Compara diferentes regras de aposentadoria',
      ],
      documents: [
        'CPF (para criar conta Gov.br)',
        'Celular com câmera (para validação facial)',
        'Carteiras de trabalho (para conferir o CNIS)',
        'Carnês de contribuição antigos',
      ],
      deadlines: 'A simulação pode ser feita a qualquer momento. Recomendamos fazer periodicamente para acompanhar sua situação previdenciária.',
      faq: [
        {
          question: 'Como acessar o Meu INSS?',
          answer: 'Baixe o app Meu INSS ou acesse meu.inss.gov.br. Faça login com sua conta Gov.br (nível prata ou ouro). Vá em "Simular Aposentadoria".',
        },
        {
          question: 'A simulação do INSS é confiável?',
          answer: 'É uma estimativa baseada nos dados cadastrados. Pode haver contribuições não computadas. Sempre verifique o CNIS e complemente se necessário.',
        },
        {
          question: 'O resultado da simulação é garantido?',
          answer: 'Não. A simulação é informativa. O valor final pode variar após análise completa do INSS no momento do pedido.',
        },
        {
          question: 'Posso simular para outras pessoas?',
          answer: 'Você só pode simular para você mesmo, com seu CPF. Procuradores legais podem simular com autorização.',
        },
      ],
    },
    relatedActions: ['aposentadoria-2025', 'auxilio-doenca', 'bpc-loas'],
    updatedAt: '2025-01-01',
  },

  // FAMÍLIA - Artigos Atualizados
  {
    id: 'divorcio-litigioso',
    nicheId: 'familia',
    slug: 'divorcio-litigioso',
    title: 'Divórcio Litigioso: Quando Não Há Acordo',
    metaTitle: 'Divórcio Litigioso | Sem Acordo, Briga, Contencioso 2025',
    metaDescription: 'Não consegue acordo com seu cônjuge? Entenda como funciona o divórcio litigioso, quanto tempo leva e como proteger seus direitos.',
    keywords: ['divórcio litigioso', 'divórcio sem acordo', 'divórcio brigando', 'divórcio contencioso', 'partilha litigiosa', 'separação difícil'],
    excerpt: 'Saiba como funciona o divórcio quando não há acordo, os passos do processo, quanto tempo demora e como proteger seus interesses.',
    content: {
      intro: 'Cerca de 33% dos divórcios no Brasil são litigiosos, ou seja, sem acordo entre as partes. Quando o casal não consegue concordar sobre bens, guarda dos filhos ou pensão, é necessário recorrer ao Judiciário para decidir.',
      whatIs: 'O divórcio litigioso é aquele em que há discordância sobre um ou mais aspectos: partilha de bens, guarda dos filhos, pensão alimentícia, direito de visitas ou uso do nome. O juiz decide as questões controversas.',
      whenYouHaveRight: [
        'Quando não há acordo sobre a divisão de bens',
        'Quando há disputa pela guarda dos filhos',
        'Quando não há consenso sobre valor de pensão',
        'Quando um dos cônjuges não quer o divórcio',
        'Quando há acusações de infidelidade ou abandono',
        'Quando há violência doméstica envolvida',
      ],
      documents: [
        'Certidão de casamento atualizada',
        'Documentos dos filhos (certidão de nascimento)',
        'Documentos de todos os bens do casal',
        'Extratos bancários e declaração de IR',
        'Comprovantes de renda de ambos',
        'Provas das acusações (se houver)',
      ],
      deadlines: 'O divórcio litigioso pode levar de 1 a 3 anos em média, podendo ser mais longo se houver muitos bens ou disputas intensas pela guarda.',
      faq: [
        {
          question: 'Meu cônjuge não quer o divórcio. Posso me divorciar assim mesmo?',
          answer: 'Sim! No Brasil, o divórcio é um direito potestativo. Não precisa da concordância do outro. O processo seguirá mesmo sem acordo.',
        },
        {
          question: 'Como são divididos os bens no divórcio litigioso?',
          answer: 'Depende do regime de bens. Na comunhão parcial (mais comum), divide-se meio a meio o que foi adquirido durante o casamento.',
        },
        {
          question: 'E se meu cônjuge esconder bens?',
          answer: 'O advogado pode pedir pesquisa de bens (Sisbajud, Renajud, cartórios). Ocultação de bens é crime e pode gerar perda do direito à meação.',
        },
        {
          question: 'Quanto custa um divórcio litigioso?',
          answer: 'Custos judiciais variam por estado (R$ 500 a R$ 2.000). Honorários advocatícios dependem da complexidade (R$ 3.000 a R$ 20.000 ou mais).',
        },
      ],
    },
    relatedActions: ['divorcio-consensual', 'pensao-alimenticia', 'guarda'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'revisao-pensao-2025',
    nicheId: 'familia',
    slug: 'revisao-pensao-alimenticia-2025',
    title: 'Revisão de Pensão Alimentícia 2025: Como Aumentar ou Diminuir',
    metaTitle: 'Revisão de Pensão Alimentícia | Aumentar ou Diminuir 2025',
    metaDescription: 'Precisa revisar o valor da pensão? Saiba quando pode pedir aumento ou redução. Novo salário mínimo R$ 1.518 em 2025.',
    keywords: ['revisão pensão', 'aumentar pensão', 'diminuir pensão', 'pensão alimentícia 2025', 'revisional alimentos', 'salário mínimo pensão'],
    excerpt: 'Entenda quando e como pedir revisão do valor da pensão alimentícia, seja para aumentar ou diminuir, e o impacto do novo salário mínimo.',
    content: {
      intro: 'Com o novo salário mínimo de R$ 1.518 em 2025, muitas pensões fixadas em percentual do mínimo foram automaticamente reajustadas. Mas além disso, sempre que houver mudança significativa nas necessidades ou possibilidades, é possível pedir revisão judicial.',
      whatIs: 'A ação revisional de alimentos permite alterar o valor da pensão alimentícia quando há mudança nas circunstâncias que justificaram a fixação original. Pode ser para aumentar (se as necessidades cresceram) ou diminuir (se a capacidade de pagar reduziu).',
      whenYouHaveRight: [
        'Aumento das despesas do filho (escola, saúde)',
        'Perda de emprego ou redução de renda do alimentante',
        'Novo emprego ou aumento de renda do alimentante',
        'Nascimento de novo filho do alimentante',
        'Maioridade do filho sem continuidade de estudos',
        'Mudança significativa no padrão de vida',
      ],
      documents: [
        'Sentença ou acordo anterior que fixou a pensão',
        'Comprovantes de despesas atuais do filho',
        'Comprovante de renda atual de ambas as partes',
        'Declaração de Imposto de Renda',
        'Comprovantes de novas despesas ou dívidas',
        'Documentos que comprovem a mudança alegada',
      ],
      deadlines: 'Não há prazo para pedir revisão. Pode ser feita a qualquer momento que houver mudança significativa nas circunstâncias.',
      faq: [
        {
          question: 'Quanto é a pensão mínima em 2025?',
          answer: 'Não existe valor mínimo em lei, mas Tribunais costumam fixar no mínimo 30% do salário mínimo (R$ 455,40) para quem não tem emprego formal.',
        },
        {
          question: 'Perdi o emprego. Posso pedir redução da pensão?',
          answer: 'Sim, a perda de emprego é motivo para pedir redução. Você precisará comprovar que está desempregado e buscando trabalho.',
        },
        {
          question: 'Descobri que meu ex ganha mais. Posso pedir aumento?',
          answer: 'Sim, o aumento da capacidade de pagamento justifica revisão. Você pode pedir pesquisa de renda e patrimônio.',
        },
        {
          question: 'Filho fez 18 anos. A pensão acaba automaticamente?',
          answer: 'Não. Se estiver estudando, a pensão pode continuar até 24 anos ou mais. É preciso ação para exonerar ou continuar pagando.',
        },
      ],
    },
    relatedActions: ['pensao-alimenticia', 'guarda', 'divorcio-litigioso'],
    updatedAt: '2025-01-01',
  },

  // CIVIL E PENAL - Artigos de Alta Demanda
  {
    id: 'juizado-especial',
    nicheId: 'civil',
    slug: 'juizado-especial-pequenas-causas',
    title: 'Juizado Especial (Pequenas Causas): Guia Completo',
    metaTitle: 'Juizado Especial | Pequenas Causas Sem Advogado 2025',
    metaDescription: 'Precisa processar alguém? Saiba como usar o Juizado Especial: causas até 40 salários, sem advogado, rápido e gratuito.',
    keywords: ['pequenas causas', 'juizado especial', 'processo sem advogado', 'JEC', 'causa até 40 salários', 'juizado cível'],
    excerpt: 'Aprenda como funciona o Juizado Especial, quando você pode usar, se precisa de advogado e quanto tempo demora.',
    content: {
      intro: 'O Juizado Especial Cível, conhecido como "pequenas causas", é uma forma rápida e acessível de resolver conflitos de até 40 salários mínimos. Para causas até 20 salários, você não precisa de advogado.',
      whatIs: 'O Juizado Especial é um órgão do Judiciário criado para resolver conflitos de menor complexidade de forma rápida, simples e gratuita. Prioriza a conciliação e não exige advogado para causas menores.',
      whenYouHaveRight: [
        'Causas de até 40 salários mínimos (R$ 60.720 em 2025)',
        'Cobranças de valores devidos',
        'Indenizações por danos morais e materiais',
        'Problemas com produtos e serviços (consumidor)',
        'Acidentes de trânsito de menor gravidade',
        'Cobranças indevidas e negativação',
      ],
      documents: [
        'Documentos pessoais (RG, CPF)',
        'Comprovante de residência',
        'Provas do problema (notas, contratos, fotos)',
        'Dados completos do réu (nome, CPF, endereço)',
        'Orçamentos de reparo (se for o caso)',
        'Protocolos de reclamação',
      ],
      deadlines: 'O prazo para ação varia conforme o tipo (geralmente 5 anos para consumidor, 3 anos para danos). O processo no Juizado costuma durar de 3 a 6 meses.',
      faq: [
        {
          question: 'Preciso de advogado no Juizado Especial?',
          answer: 'Para causas até 20 salários (R$ 30.360), não é obrigatório. Acima disso ou em recursos, o advogado é necessário.',
        },
        {
          question: 'O processo no Juizado é gratuito?',
          answer: 'Sim, não há custas para entrar com ação. Só paga se perder e for condenado em custas (raro).',
        },
        {
          question: 'Empresa pode usar o Juizado?',
          answer: 'Microempresas e MEI podem. Empresas maiores, não. No polo passivo (réu), qualquer empresa pode ser processada.',
        },
        {
          question: 'E se a outra parte não aparecer?',
          answer: 'Se o réu não comparecer à audiência, o juiz pode dar ganho de causa a você por revelia.',
        },
      ],
    },
    relatedActions: ['danos-morais', 'cobranca', 'negativacao-indevida'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'crimes-transito',
    nicheId: 'penal',
    slug: 'crimes-transito-embriaguez-volante',
    title: 'Crimes de Trânsito: Embriaguez, Homicídio e Defesa',
    metaTitle: 'Crimes de Trânsito | Embriaguez ao Volante, Lei Seca 2025',
    metaDescription: 'Foi pego na Lei Seca ou envolvido em acidente grave? Saiba as penas, como se defender e quando pode haver prisão.',
    keywords: ['embriaguez volante', 'crime trânsito', 'Lei Seca', 'bafômetro', 'homicídio culposo trânsito', 'lesão corporal trânsito'],
    excerpt: 'Entenda os principais crimes de trânsito, as penas previstas, quando há prisão e como se defender adequadamente.',
    content: {
      intro: 'Crimes de trânsito são cada vez mais severamente punidos no Brasil. A embriaguez ao volante pode levar à prisão, e acidentes fatais podem resultar em penas de até 12 anos. Conheça seus direitos e como se defender.',
      whatIs: 'Crimes de trânsito são infrações penais previstas no Código de Trânsito Brasileiro (CTB). Diferem das infrações administrativas (multas) por terem consequências criminais: prisão, ficha criminal e suspensão da CNH.',
      whenYouHaveRight: [
        'Defesa em caso de flagrante por embriaguez',
        'Contestar resultado de bafômetro',
        'Negociação de acordos (transação penal)',
        'Defesa em homicídio ou lesão culposa',
        'Suspensão condicional do processo',
        'Substituição de pena por restritivas de direitos',
      ],
      documents: [
        'Boletim de ocorrência',
        'Auto de prisão em flagrante (se houver)',
        'Resultado do teste de alcoolemia',
        'Laudos periciais do veículo e do local',
        'CNH e documento do veículo',
        'Testemunhos e câmeras de segurança',
      ],
      deadlines: 'Se houver prisão em flagrante, a audiência de custódia deve ocorrer em 24 horas. O processo criminal pode levar de 1 a 3 anos.',
      faq: [
        {
          question: 'Posso ser preso por dirigir bêbado?',
          answer: 'Sim, a embriaguez ao volante é crime com pena de 6 meses a 3 anos. Se houver acidente, a pena aumenta significativamente.',
        },
        {
          question: 'Sou obrigado a fazer o teste do bafômetro?',
          answer: 'Não pode ser forçado, mas a recusa pode ser usada contra você e gera multa administrativa. Exame de sangue só com sua autorização ou ordem judicial.',
        },
        {
          question: 'Qual a pena por matar alguém no trânsito?',
          answer: 'Homicídio culposo no trânsito: 2 a 4 anos. Com embriaguez, racha ou fuga: 5 a 8 anos. Recentemente pode chegar a 12 anos em casos graves.',
        },
        {
          question: 'Posso perder a CNH definitivamente?',
          answer: 'A suspensão pode durar de 2 meses a 5 anos. Em reincidência ou crimes graves, pode ser cassada por até 5 anos.',
        },
      ],
    },
    relatedActions: ['defesa-flagrante', 'habeas-corpus', 'acompanhamento-delegacia'],
    updatedAt: '2025-01-01',
  },
];

// Helper function to get articles by niche
export function getArticlesByNiche(nicheId: string): BlogArticle[] {
  return blogArticles.filter(article => article.nicheId === nicheId);
}

// Helper function to get article by slug
export function getArticleBySlug(nicheId: string, slug: string): BlogArticle | undefined {
  return blogArticles.find(article => article.nicheId === nicheId && article.slug === slug);
}

// Helper function to get niche info
export function getNicheInfo(nicheId: string): NicheInfo | undefined {
  return niches.find(niche => niche.id === nicheId);
}

// Helper function to get related articles
export function getRelatedArticles(article: BlogArticle): BlogArticle[] {
  return blogArticles
    .filter(a => a.nicheId === article.nicheId && a.id !== article.id)
    .slice(0, 3);
}
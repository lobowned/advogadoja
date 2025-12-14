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
// Auto-generated blog articles based on legal actions
import { articleExpansions } from "./article-expansions";
import { newArticles2026 } from "./blog-articles-new";
import { consorcioArticles } from "./blog-articles-consorcio";
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
    /** Seções extras (artigos consolidados): título + parágrafos. */
    sections?: { title: string; paragraphs: string[] }[];
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
    metaTitle: 'Demissão sem Justa Causa | Direitos e Verbas Rescisórias',
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
    metaTitle: 'Acidente de Trabalho | Direitos, CAT e Indenização',
    metaDescription: 'Sofreu acidente de trabalho? Saiba seus direitos: estabilidade, CAT, auxílio-doença acidentário, indenização. Fale com um advogado.',
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
    metaTitle: 'Horas Extras Não Pagas | Como Cobrar na Justiça',
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
    metaTitle: 'Assédio Moral no Trabalho | Como Denunciar e Processar',
    metaDescription: 'Está sofrendo assédio moral no trabalho? Saiba identificar, reunir provas e buscar indenização. Fale com um advogado.',
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
          answer: 'O valor depende da gravidade e da duração do assédio, das provas e das condições das partes, e é fixado pelo juiz em cada caso.',
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
  {
    "id": "rescisao-indireta",
    "nicheId": "trabalhista",
    "slug": "rescisao-indireta",
    "title": "Rescisão Indireta: Quando o Empregado Pode “Demitir” a Empresa",
    "metaTitle": "Rescisão Indireta | Art. 483 da CLT e Falta Grave do Empregador",
    "metaDescription": "A empresa atrasa salário, não deposita FGTS ou comete assédio? Entenda a rescisão indireta (art. 483 da CLT), como pedir, as provas e os direitos envolvidos.",
    "keywords": [
      "rescisão indireta",
      "falta grave empregador",
      "justa causa da empresa",
      "art 483 clt",
      "demissão indireta",
      "rescisão por culpa do empregador",
      "FGTS não depositado",
      "atraso de salário"
    ],
    "excerpt": "Entenda quando a falta grave do empregador permite encerrar o contrato com os mesmos direitos da dispensa sem justa causa, e como fazer o pedido com segurança.",
    "content": {
      "intro": "A rescisão indireta é conhecida como a “justa causa do empregador”. Quando a empresa descumpre obrigações graves, como pagar salário, depositar o FGTS ou tratar o empregado com dignidade, o trabalhador pode encerrar o contrato e pedir na Justiça os mesmos direitos de quem é dispensado sem justa causa. É um caminho legítimo, mas exige preparo: se o juiz não reconhecer a falta grave, a saída pode ser tratada como pedido de demissão.",
      "whatIs": "A rescisão indireta está prevista no artigo 483 da CLT. É o término do contrato por culpa do empregador, reconhecido pela Justiça do Trabalho. Se a ação for julgada procedente, o empregado recebe as verbas da dispensa imotivada: saldo de salário, aviso prévio indenizado, férias vencidas e proporcionais com um terço, 13º proporcional, saque do FGTS com multa de 40% e guias para o seguro-desemprego, quando preenchidos os requisitos.",
      "sections": [
        {
          "title": "As hipóteses do artigo 483 da CLT",
          "paragraphs": [
            "A lei lista situações que autorizam a rescisão indireta: exigir serviços superiores às forças do empregado, proibidos por lei, contrários aos bons costumes ou alheios ao contrato; tratar o empregado com rigor excessivo; expô-lo a perigo manifesto de mal considerável; descumprir as obrigações do contrato; praticar ato lesivo à honra e à boa fama do empregado ou de sua família; ofendê-lo fisicamente; e reduzir o trabalho, quando pago por peça ou tarefa, de forma a afetar sensivelmente o salário.",
            "Na prática, os casos mais frequentes são atrasos salariais repetidos, ausência de depósitos de FGTS, assédio moral ou sexual, rebaixamento de função ou salário sem acordo e falta de condições mínimas de segurança. O Tribunal Superior do Trabalho entende que a ausência ou irregularidade reiterada dos depósitos de FGTS é falta grave suficiente, e o atraso salarial contumaz também costuma ser reconhecido."
          ]
        },
        {
          "title": "Continuar trabalhando ou sair?",
          "paragraphs": [
            "O §3º do artigo 483 permite que, nas hipóteses de descumprimento do contrato e de redução do trabalho por peça, o empregado continue trabalhando enquanto aguarda a decisão. Nas demais, o afastamento costuma ser necessário, principalmente quando a permanência expõe o trabalhador a risco, como no assédio.",
            "A escolha tem consequências: quem continua trabalhando segue recebendo salário, mas convive com o ambiente do conflito; quem se afasta deixa de receber e assume o risco de a falta não ser reconhecida. Essa decisão deve ser tomada com orientação jurídica, antes de qualquer comunicação à empresa."
          ]
        },
        {
          "title": "Imediatidade e perdão tácito",
          "paragraphs": [
            "No caso do empregador, a jurisprudência trabalhista tende a flexibilizar a exigência de reação imediata, porque o empregado depende do emprego e muitas vezes tolera a situação para não perder a renda. Ainda assim, é recomendável agir assim que a falta se tornar insustentável e documentar tudo, para evitar o argumento de que a situação foi aceita."
          ]
        },
        {
          "title": "Como funciona o pedido",
          "paragraphs": [
            "O empregado comunica a saída (ou permanece, quando a lei permite) e ajuíza reclamação trabalhista pedindo o reconhecimento da rescisão indireta e o pagamento das verbas. A prova é do trabalhador: extratos do FGTS, holerites com datas de pagamento, mensagens, testemunhas e registros de reclamações internas. Se houver urgência, é possível pedir tutela antecipada, por exemplo para liberação do FGTS. Também é comum haver tentativa de acordo na audiência inicial."
          ]
        },
        {
          "title": "Rescisão indireta, pedido de demissão e acordo: compare",
          "paragraphs": [
            "No pedido de demissão, o empregado recebe saldo de salário, férias vencidas e proporcionais com um terço e 13º proporcional, mas não saca o FGTS, não recebe a multa de 40% nem o seguro-desemprego, e ainda pode ter de cumprir ou indenizar o aviso prévio. No acordo previsto no artigo 484-A da CLT, as partes dividem algumas verbas: metade do aviso prévio indenizado, multa de 20% do FGTS, saque de até 80% do saldo e nenhum seguro-desemprego.",
            "Na rescisão indireta reconhecida, o trabalhador recebe tudo o que receberia numa dispensa sem justa causa. Por isso, quando há falta grave do empregador bem documentada, pedir demissão ou aceitar um acordo pode significar abrir mão de direitos. Antes de assinar qualquer documento de desligamento, vale comparar as três hipóteses com um advogado, considerando as provas disponíveis e o risco de a falta não ser reconhecida."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Atrasos salariais repetidos ou falta de pagamento do salário",
        "FGTS não depositado ou depositado de forma irregular",
        "Assédio moral ou sexual no ambiente de trabalho",
        "Rebaixamento de função ou redução salarial sem acordo",
        "Exigência de serviços superiores às forças, ilegais ou alheios ao contrato",
        "Tratamento com rigor excessivo ou ofensas à honra",
        "Exposição a perigo sem condições de segurança",
        "Descumprimento grave de obrigações do contrato de trabalho"
      ],
      "documents": [
        "Carteira de trabalho e contrato",
        "Holerites e comprovantes que mostrem os atrasos",
        "Extrato do FGTS com a ausência de depósitos",
        "Mensagens, e-mails ou gravações que provem assédio ou ordens abusivas",
        "Atestados médicos relacionados às condições de trabalho",
        "Registros de reclamações ao RH, ouvidoria ou sindicato",
        "Nome e contato de colegas que possam testemunhar"
      ],
      "deadlines": "Não há prazo específico para pedir a rescisão indireta, mas é recomendável agir quando a falta se tornar insustentável, para afastar a tese de perdão tácito. Depois do fim do contrato, o prazo para ajuizar a ação é de 2 anos, podendo ser cobrados os últimos 5 anos de direitos.",
      "faq": [
        {
          "question": "O que é rescisão indireta?",
          "answer": "É o fim do contrato por culpa do empregador, reconhecido pela Justiça do Trabalho com base no art. 483 da CLT. O trabalhador recebe as mesmas verbas da dispensa sem justa causa."
        },
        {
          "question": "Atraso de salário dá rescisão indireta?",
          "answer": "Atrasos repetidos ou a falta de pagamento costumam ser reconhecidos como falta grave. Um atraso isolado e pequeno pode não bastar; o caso concreto é avaliado pelo juiz."
        },
        {
          "question": "FGTS não depositado é motivo suficiente?",
          "answer": "Segundo a jurisprudência do TST, a ausência ou irregularidade reiterada dos depósitos do FGTS é falta grave que autoriza a rescisão indireta."
        },
        {
          "question": "Preciso continuar trabalhando enquanto o processo corre?",
          "answer": "Depende da hipótese. No descumprimento do contrato a lei permite continuar trabalhando; em casos como assédio, o afastamento costuma ser necessário. Avalie com um advogado antes de agir."
        },
        {
          "question": "E se o juiz não reconhecer a rescisão indireta?",
          "answer": "Se o empregado se afastou, a saída tende a ser tratada como pedido de demissão, com perda de aviso prévio indenizado, multa de 40% e seguro-desemprego. Por isso a prova deve ser reunida antes."
        },
        {
          "question": "Recebo seguro-desemprego?",
          "answer": "Sim, se a rescisão indireta for reconhecida e os requisitos do seguro-desemprego estiverem preenchidos."
        },
        {
          "question": "Quanto tempo leva o processo?",
          "answer": "Varia conforme a vara e a complexidade. Pode haver acordo na primeira audiência, e pedidos urgentes podem ser analisados antes da sentença."
        }
      ]
    },
    "relatedActions": [
      "assedio-moral",
      "demissao-sem-justa-causa",
      "verbas-rescisorias"
    ],
    "updatedAt": "2026-11-05"
  },
  {
    id: 'verbas-rescisorias',
    nicheId: 'trabalhista',
    slug: 'verbas-rescisorias-o-que-voce-tem-direito',
    title: 'Verbas Rescisórias: Tudo Que Você Tem Direito na Demissão',
    metaTitle: 'Verbas Rescisórias | Calcular Rescisão Trabalhista',
    metaDescription: 'Saiba exatamente o que você deve receber na demissão: FGTS, multa 40%, férias, 13º. Entenda cada verba e como calcular sua rescisão.',
    keywords: ['verbas rescisórias', 'calcular rescisão', 'o que recebo demissão', 'quanto vou receber', 'rescisão trabalhista', 'acerto trabalhista'],
    excerpt: 'Guia completo sobre todas as verbas que você tem direito ao ser demitido ou pedir demissão. Entenda cada valor e evite ser lesado.',
    content: {
      intro: 'Ao encerrar um contrato de trabalho, o empregado tem direito a receber diversas verbas rescisórias. O valor e os direitos variam conforme o tipo de demissão. Conhecer seus direitos é fundamental para não sair no prejuízo.',
      whatIs: 'Verbas rescisórias são todos os valores que o empregado deve receber quando o contrato de trabalho é encerrado. Incluem salários pendentes, férias, 13º, FGTS e, dependendo do tipo de demissão, multa e aviso prévio.',
      whenYouHaveRight: [
        'Demissão sem justa causa: direito a todas as verbas + multa 40%',
        'Pedido de demissão: sem multa do FGTS e sem seguro-desemprego',
        'Demissão por justa causa: apenas saldo de salário e férias vencidas',
        'Acordo entre as partes (art. 484-A): multa de 20% e saque de 80% do FGTS',
        'Rescisão indireta: mesmos direitos da demissão sem justa causa',
      ],
      documents: [
        'Termo de Rescisão do Contrato de Trabalho (TRCT)',
        'Carteira de Trabalho',
        'Extrato do FGTS',
        'Últimos holerites/contracheques',
        'Guia do seguro-desemprego (se aplicável)',
        'Comprovante de aviso prévio',
      ],
      deadlines: 'A empresa tem até 10 dias corridos para pagar a rescisão. Se atrasar, deve pagar multa equivalente a um salário. O prazo para reclamar na Justiça é de 2 anos após a demissão.',
      faq: [
        {
          question: 'O que são verbas rescisórias?',
          answer: 'São todos os valores devidos ao trabalhador quando o contrato termina: saldo de salário, férias, 13º, FGTS, multa, aviso prévio, entre outros.',
        },
        {
          question: 'Qual a diferença nas verbas por tipo de demissão?',
          answer: 'Na demissão sem justa causa, você recebe tudo + multa 40%. No pedido de demissão, não tem multa nem seguro-desemprego. Na justa causa, recebe só saldo e férias vencidas.',
        },
        {
          question: 'Em quanto tempo a empresa deve pagar?',
          answer: 'Até 10 dias corridos após o término do contrato, independentemente se o aviso foi trabalhado ou indenizado.',
        },
        {
          question: 'O que fazer se a empresa não pagar?',
          answer: 'Você pode ingressar com reclamação trabalhista. Além das verbas devidas, a empresa pagará multa por atraso (art. 477 CLT) e correção monetária.',
        },
        {
          question: 'Como calcular minhas verbas rescisórias?',
          answer: 'Use nossa calculadora trabalhista ou consulte um advogado. Os cálculos envolvem: salário base, tempo de serviço, tipo de demissão e verbas pendentes.',
        },
      ],
    },
    relatedActions: ['demissao-sem-justa-causa', 'horas-extras'],
    updatedAt: '2026-01-12',
  },
  {
    "id": "adicional-noturno",
    "nicheId": "trabalhista",
    "slug": "adicional-noturno-calcular-direitos",
    "title": "Adicional Noturno: Como Calcular e Garantir Seus Direitos",
    "metaTitle": "Adicional Noturno e Trabalho Noturno | Cálculo e Hora Reduzida",
    "metaDescription": "Trabalha à noite? Entenda o adicional noturno de 20%, a hora reduzida de 52min30s, a prorrogação após as 5h, os reflexos e como cobrar valores não pagos.",
    "keywords": [
      "adicional noturno",
      "trabalho noturno",
      "hora noturna reduzida",
      "cálculo adicional noturno",
      "horário noturno",
      "jornada 12x36 noturna",
      "hora extra noturna"
    ],
    "excerpt": "Entenda o horário noturno de cada categoria, a hora reduzida, como calcular o adicional e a hora extra noturna, e como cobrar o que não foi pago.",
    "content": {
      "intro": "O trabalho noturno desgasta mais o corpo e afeta a vida familiar e social. Por isso a lei garante a quem trabalha à noite uma remuneração maior e uma hora de trabalho mais curta. Mesmo assim, erros no pagamento são comuns, principalmente na hora reduzida, na prorrogação após as 5h e nos reflexos em outras verbas.",
      "whatIs": "O artigo 73 da CLT garante ao trabalhador urbano um adicional de pelo menos 20% sobre a hora diurna para o trabalho realizado entre 22h e 5h, e determina que a hora noturna seja computada como 52 minutos e 30 segundos. Na prática, 7 horas de relógio no período noturno correspondem a 8 horas para fins de pagamento. Convenções coletivas podem prever percentuais maiores.",
      "sections": [
        {
          "title": "Horário noturno de cada categoria",
          "paragraphs": [
            "Para o trabalhador urbano, o horário noturno vai das 22h às 5h. No trabalho rural, a Lei 5.889/1973 define horários diferentes: das 21h às 5h na lavoura (agricultura) e das 20h às 4h na pecuária. No meio rural, o adicional é de 25% e não há hora reduzida. Empregados domésticos seguem a regra urbana, conforme a Lei Complementar 150/2015."
          ]
        },
        {
          "title": "Como calcular, passo a passo",
          "paragraphs": [
            "Primeiro, encontre o valor da hora normal: divida o salário mensal pelo divisor da jornada (220 para quem trabalha 44 horas semanais). Depois, acrescente o adicional de 20%. Exemplo ilustrativo: salário de R$ 2.200,00 dividido por 220 resulta em hora de R$ 10,00; com o adicional, a hora noturna vale R$ 12,00.",
            "Em seguida, converta as horas de relógio em horas noturnas. Quem trabalha das 22h às 5h cumpre 7 horas de relógio, que equivalem a 8 horas noturnas (420 minutos divididos por 52,5). No exemplo, seriam 8 horas de R$ 12,00 por noite. Os valores são apenas ilustrativos; o cálculo real depende do salário, da jornada e da norma coletiva."
          ]
        },
        {
          "title": "Prorrogação após as 5h e hora extra noturna",
          "paragraphs": [
            "Quando a jornada é cumprida integralmente no período noturno e se estende após as 5h, as horas seguintes também recebem o adicional noturno (art. 73, §5º, da CLT e Súmula 60, II, do TST). É o caso, por exemplo, de quem trabalha das 22h às 7h: as horas entre 5h e 7h continuam sendo noturnas para fins de pagamento.",
            "A hora extra feita à noite recebe os dois adicionais: o adicional noturno compõe a base de cálculo da hora extra (OJ 97 da SDI-1 do TST). Na jornada 12x36, o TST entende que também é devido o adicional sobre as horas prorrogadas após as 5h (OJ 388 da SDI-1)."
          ]
        },
        {
          "title": "Reflexos e mudança de turno",
          "paragraphs": [
            "O adicional noturno pago com habitualidade integra o salário para todos os efeitos (Súmula 60, I, do TST), refletindo em férias com um terço, 13º, FGTS, aviso prévio e descanso semanal remunerado. Se o empregado for transferido para o turno diurno, perde o direito ao adicional (Súmula 265 do TST), o que não caracteriza redução salarial ilícita. A transferência do dia para a noite, por outro lado, é alteração contratual que em regra depende de concordância do empregado (art. 468 da CLT)."
          ]
        },
        {
          "title": "Erros comuns no pagamento e como conferir o holerite",
          "paragraphs": [
            "Os erros mais frequentes são pagar o adicional apenas sobre as horas de relógio, ignorando a hora reduzida; deixar de pagar o adicional sobre as horas trabalhadas depois das 5h quando a jornada noturna se prorroga; calcular a hora extra noturna sem incluir o adicional na base; e não refletir a média do adicional nas férias, no 13º e no FGTS.",
            "Para conferir, compare os horários do cartão de ponto com as rubricas do holerite. Some os minutos trabalhados entre 22h e 5h, divida por 52,5 para encontrar as horas noturnas e multiplique pelo valor da hora com adicional. Verifique também se a convenção coletiva da sua categoria prevê percentual maior que 20%, o que é comum em alguns setores. Diferenças encontradas podem ser cobradas do empregador e, se não forem pagas, discutidas na Justiça do Trabalho, sempre com base nos registros de jornada e nas normas coletivas aplicáveis."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Trabalho realizado entre 22h e 5h (trabalhador urbano e doméstico)",
        "Trabalho entre 21h e 5h na lavoura ou entre 20h e 4h na pecuária (rural)",
        "Horas trabalhadas após as 5h em prorrogação da jornada noturna",
        "Horas extras realizadas no período noturno",
        "Jornada em escala, plantão ou 12x36 que inclua horário noturno",
        "Adicional pago sem considerar a hora reduzida de 52min30s"
      ],
      "documents": [
        "Cartões de ponto ou registros eletrônicos de entrada e saída",
        "Holerites e contracheques",
        "Escalas de trabalho",
        "Contrato de trabalho",
        "Acordo ou convenção coletiva da categoria",
        "Nome e contato de colegas que possam testemunhar"
      ],
      "deadlines": "Podem ser cobradas as diferenças dos últimos 5 anos anteriores ao ajuizamento. Depois do fim do contrato, o prazo para entrar com a ação é de 2 anos (art. 7º, XXIX, da Constituição).",
      "faq": [
        {
          "question": "Qual o valor do adicional noturno?",
          "answer": "No mínimo 20% sobre a hora diurna para o trabalhador urbano e 25% para o rural. Convenções coletivas podem prever percentuais maiores."
        },
        {
          "question": "Qual o horário considerado noturno?",
          "answer": "Urbano: das 22h às 5h. Rural na lavoura: das 21h às 5h. Rural na pecuária: das 20h às 4h."
        },
        {
          "question": "O que é a hora noturna reduzida?",
          "answer": "No trabalho urbano, cada hora noturna é computada como 52 minutos e 30 segundos. Assim, 7 horas de relógio entre 22h e 5h equivalem a 8 horas para pagamento."
        },
        {
          "question": "E se eu continuar trabalhando depois das 5h?",
          "answer": "Se a jornada foi cumprida no período noturno e se prorrogou, as horas após as 5h também recebem o adicional noturno (Súmula 60, II, do TST)."
        },
        {
          "question": "Hora extra noturna tem adicional duplo?",
          "answer": "Sim. A hora extra feita à noite é calculada sobre a hora já acrescida do adicional noturno, somando os dois adicionais."
        },
        {
          "question": "O adicional noturno reflete nas férias e no 13º?",
          "answer": "Sim, quando pago com habitualidade ele integra o salário e reflete em férias, 13º, FGTS, aviso prévio e DSR."
        },
        {
          "question": "Posso ser obrigado a mudar para o turno da noite?",
          "answer": "Em regra, a transferência para o noturno é alteração contratual que depende de concordância do empregado. Já a volta ao turno diurno pode suprimir o adicional (Súmula 265 do TST)."
        }
      ]
    },
    "relatedActions": [
      "horas-extras",
      "intervalo-intrajornada"
    ],
    "updatedAt": "2026-11-05"
  },
  {
    id: 'ferias-nao-pagas',
    nicheId: 'trabalhista',
    slug: 'ferias-nao-pagas-como-receber',
    title: 'Férias Não Pagas: Como Receber em Dobro',
    metaTitle: 'Férias Não Pagas | Como Receber em Dobro',
    metaDescription: 'Não recebeu férias ou recebeu em atraso? Saiba quando tem direito a receber em dobro. Advogado trabalhista explica como cobrar.',
    keywords: ['férias não pagas', 'férias vencidas', 'férias em dobro', 'período aquisitivo', 'férias atrasadas', 'direito a férias'],
    excerpt: 'Saiba quando você tem direito a receber férias em dobro e como cobrar férias não pagas ou vencidas do seu empregador.',
    content: {
      intro: 'As férias são um direito constitucional do trabalhador. Quando a empresa não concede as férias dentro do prazo legal (os 12 meses seguintes ao período aquisitivo), o empregado tem direito a receber o valor em dobro (art. 137 da CLT).',
      whatIs: 'Férias são o período de 30 dias de descanso remunerado a que todo trabalhador tem direito após 12 meses de trabalho (período aquisitivo). A empresa tem mais 12 meses para conceder as férias (período concessivo).',
      whenYouHaveRight: [
        'Férias não concedidas dentro do período concessivo (dobra)',
        'Férias pagas fora do prazo legal (2 dias antes)',
        'Falta de pagamento do terço constitucional',
        'Parcelamento irregular das férias',
        'Férias "vendidas" forçadamente pela empresa',
        'Na rescisão: férias vencidas e proporcionais',
      ],
      documents: [
        'Carteira de Trabalho (data de admissão)',
        'Recibos de férias anteriores',
        'Holerites mostrando (ou não) pagamento de férias',
        'Comunicação de férias',
        'Comprovante de depósito',
        'Contrato de trabalho',
      ],
      deadlines: 'O pagamento das férias deve ser feito até 2 dias antes do início do descanso. A empresa tem até o final do período concessivo (24 meses após admissão) para conceder as primeiras férias.',
      faq: [
        {
          question: 'Quando as férias devem ser pagas?',
          answer: 'Até 2 dias antes do início das férias (art. 145 da CLT). Se só o pagamento atrasar, o STF decidiu em 2022 (ADPF 501) que não cabe o pagamento em dobro, mas o atraso pode gerar outras consequências, como correção e multa administrativa.',
        },
        {
          question: 'Quando tenho direito a receber em dobro?',
          answer: 'Quando as férias são concedidas fora do período concessivo (após 24 meses de contrato) ou quando são pagas com atraso.',
        },
        {
          question: 'O que são férias proporcionais?',
          answer: 'São as férias calculadas proporcionalmente ao tempo trabalhado quando o contrato termina antes de completar 12 meses do período aquisitivo.',
        },
        {
          question: 'Posso vender todas as minhas férias?',
          answer: 'Não. O abono pecuniário (venda de férias) é limitado a 1/3 do período, ou seja, 10 dias. Você deve descansar pelo menos 20 dias.',
        },
        {
          question: 'E se a empresa não conceder férias por anos?',
          answer: 'Cada período de férias vencido deve ser pago em dobro. Além disso, você pode pedir rescisão indireta por descumprimento do contrato.',
        },
      ],
    },
    relatedActions: ['verbas-rescisorias', 'rescisao-indireta'],
    updatedAt: '2026-01-12',
  },
  {
    "id": "desvio-funcao",
    "nicheId": "trabalhista",
    "slug": "desvio-funcao-acumulo-funcoes",
    "title": "Desvio e Acúmulo de Função: Quando Há Direito a Diferenças Salariais",
    "metaTitle": "Desvio de Função e Acúmulo de Função | Diferenças Salariais",
    "metaDescription": "Faz o trabalho de outro cargo ou acumula funções sem receber a mais? Entenda desvio e acúmulo de função, equiparação salarial, provas e prazos para cobrar.",
    "keywords": [
      "desvio de função",
      "acúmulo de função",
      "diferença salarial",
      "equiparação salarial",
      "reenquadramento",
      "função diferente da carteira",
      "plano de cargos"
    ],
    "excerpt": "Entenda a diferença entre desvio de função, acúmulo de função e equiparação salarial, quando cada um gera direito a diferenças e como provar.",
    "content": {
      "intro": "Muitos trabalhadores são contratados para um cargo e, com o tempo, passam a fazer tarefas de outro, geralmente mais complexo e mais bem pago, sem qualquer reajuste. Outros acumulam a própria função com a de um colega que saiu. Dependendo da situação, isso pode gerar direito a diferenças salariais, mas cada hipótese tem regras próprias.",
      "whatIs": "Desvio de função é exercer, de forma habitual, as atividades de um cargo diferente daquele registrado, sem a alteração contratual e o salário correspondentes. Acúmulo de função é exercer a própria função somada a outra distinta, que não faz parte das atribuições contratadas. Equiparação salarial (art. 461 da CLT) é receber menos que um colega que faz o mesmo trabalho, para o mesmo empregador, no mesmo estabelecimento. São três pedidos diferentes, com requisitos diferentes.",
      "sections": [
        {
          "title": "Desvio de função na prática",
          "paragraphs": [
            "O desvio é mais fácil de demonstrar quando a empresa tem plano de cargos e salários ou descrição formal de funções, porque fica claro qual é o salário do cargo efetivamente exercido. Exemplo: o empregado registrado como auxiliar administrativo que, todos os dias, faz o trabalho de analista. Nesse caso, a jurisprudência costuma reconhecer as diferenças salariais do período, com reflexos.",
            "A Orientação Jurisprudencial 125 da SDI-1 do TST esclarece que o desvio de função não gera direito a novo enquadramento, mas apenas às diferenças salariais. Ou seja, o pedido é de pagamento da diferença, e não de “promoção” forçada. No serviço público, a regra é ainda mais restrita, pois a mudança de cargo exige concurso."
          ]
        },
        {
          "title": "Acúmulo de função: quando gera adicional",
          "paragraphs": [
            "A CLT não prevê um adicional genérico por acúmulo. O parágrafo único do artigo 456 estabelece que, sem cláusula expressa, o empregado se obriga a todo serviço compatível com a sua condição pessoal. Por isso, tarefas acessórias e compatíveis com o cargo, executadas dentro da mesma jornada, normalmente não geram acréscimo.",
            "O adicional costuma ser reconhecido quando a nova atribuição é claramente distinta, mais complexa ou de maior responsabilidade, ou quando há previsão em convenção coletiva ou lei específica da profissão. Algumas categorias, como radialistas (Lei 6.615/1978), têm previsão legal de adicional por acúmulo."
          ]
        },
        {
          "title": "Equiparação salarial",
          "paragraphs": [
            "Para pedir equiparação, é preciso apontar um colega paradigma que exerça função idêntica, com igual produtividade e perfeição técnica, para o mesmo empregador e no mesmo estabelecimento. Após a Lei 13.467/2017, a diferença de tempo de serviço para o mesmo empregador não pode ser superior a quatro anos, e a diferença de tempo na função não pode ser superior a dois anos. Se a empresa tiver quadro de carreira válido, a equiparação não se aplica."
          ]
        },
        {
          "title": "Como provar",
          "paragraphs": [
            "A prova mais forte combina documentos e testemunhas: e-mails com delegação de tarefas, assinaturas em relatórios do cargo superior, organogramas, descrições de cargo, crachás e prints de sistemas que mostrem os acessos. Colegas que acompanharam a rotina podem confirmar o que era feito. Contracheques de quem ocupa o cargo exercido ajudam a calcular a diferença, mas não é necessário obtê-los antes da ação."
          ]
        },
        {
          "title": "Como é calculada a diferença e o que a empresa costuma alegar",
          "paragraphs": [
            "O cálculo parte do salário do cargo efetivamente exercido, conforme plano de cargos, norma coletiva ou salário pago a quem ocupa a função, e subtrai o salário recebido. A diferença mensal, no período comprovado e dentro do limite de 5 anos, gera reflexos em férias com um terço, 13º, FGTS, aviso prévio e horas extras, quando habituais. No acúmulo, quando reconhecido, os tribunais costumam fixar um percentual sobre o salário, definido por norma coletiva ou pelo juiz conforme a extensão das novas tarefas.",
            "As defesas mais comuns das empresas são que as tarefas eram compatíveis com o cargo, que eram eventuais, que se tratava de substituição temporária ou que a empresa não tem plano de cargos. Por isso, a prova da habitualidade e da diferença real entre as atribuições é decisiva. Substituições meramente eventuais, como cobrir um colega por poucos dias, em regra não geram diferenças; já a substituição que não tem caráter meramente eventual, inclusive nas férias do titular, garante ao substituto o mesmo salário do substituído enquanto durar (Súmula 159 do TST)."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Exerce habitualmente as funções de cargo diferente do registrado na carteira",
        "Realiza tarefas de cargo superior sem promoção nem reajuste",
        "Acumula sua função com outra distinta e de maior responsabilidade",
        "Recebe menos que colega que faz o mesmo trabalho, no mesmo estabelecimento",
        "Foi promovido apenas verbalmente, sem registro nem aumento",
        "Substitui de forma permanente um colega de cargo mais bem remunerado"
      ],
      "documents": [
        "Carteira de trabalho com a função registrada",
        "Descrição de cargos ou plano de cargos e salários da empresa",
        "E-mails e mensagens com delegação de tarefas",
        "Relatórios, documentos assinados e registros de sistema",
        "Organograma da empresa",
        "Holerites seus e, se possível, de quem ocupa o cargo exercido",
        "Nome e contato de colegas que possam testemunhar"
      ],
      "deadlines": "Podem ser cobradas as diferenças dos últimos 5 anos anteriores ao ajuizamento da ação. Depois do fim do contrato, o prazo para entrar com a ação é de 2 anos (art. 7º, XXIX, da Constituição).",
      "faq": [
        {
          "question": "Qual a diferença entre desvio e acúmulo de função?",
          "answer": "No desvio, você exerce as tarefas de outro cargo no lugar das suas. No acúmulo, faz as suas e mais as de outra função. Os dois podem gerar diferenças, mas o acúmulo só gera adicional quando a nova tarefa é realmente distinta ou há previsão em norma coletiva ou lei."
        },
        {
          "question": "Desvio de função garante promoção?",
          "answer": "Não. Segundo a OJ 125 da SDI-1 do TST, o desvio gera direito às diferenças salariais do período, e não ao reenquadramento no novo cargo."
        },
        {
          "question": "Quanto posso receber de diferença?",
          "answer": "A diferença entre o seu salário e o do cargo efetivamente exercido, no período comprovado, com reflexos em férias, 13º, FGTS e outras verbas. O valor depende das provas e de cada caso."
        },
        {
          "question": "Preciso de testemunhas?",
          "answer": "Ajudam bastante, mas não são a única prova. E-mails, relatórios, organogramas e registros de sistema também demonstram as tarefas realizadas."
        },
        {
          "question": "A empresa pode me demitir se eu reclamar?",
          "answer": "Não há estabilidade por esse motivo, mas a dispensa comprovadamente retaliatória pode ser considerada discriminatória e gerar indenização."
        }
      ]
    },
    "relatedActions": [
      "horas-extras",
      "demissao-sem-justa-causa"
    ],
    "updatedAt": "2026-11-05"
  },
  {
    "id": "pejotizacao",
    "nicheId": "trabalhista",
    "slug": "pejotizacao-vinculo-empregaticio",
    "title": "Pejotização: Quando o Contrato PJ Esconde um Vínculo de Emprego",
    "metaTitle": "Pejotização e Vínculo Empregatício | Quando o PJ é Fraude",
    "metaDescription": "Trabalha como PJ ou MEI, mas cumpre horário e recebe ordens? Entenda quando a pejotização é fraude, como provar o vínculo e quais direitos podem ser cobrados.",
    "keywords": [
      "pejotização",
      "vínculo empregatício",
      "PJ fraude",
      "MEI CLT",
      "reconhecimento de vínculo",
      "CLT disfarçada",
      "fraude trabalhista",
      "trabalho PJ direitos"
    ],
    "excerpt": "Entenda quando a contratação como PJ ou MEI é legítima, quando é fraude trabalhista e como buscar o reconhecimento do vínculo de emprego com os direitos da CLT.",
    "content": {
      "intro": "A pejotização acontece quando a empresa exige que o trabalhador abra um CNPJ (MEI, ME ou LTDA) para prestar serviços que, na prática, são de empregado. O contrato diz “prestação de serviços”, as notas fiscais saem todo mês, mas o dia a dia é de emprego: chefe, horário, metas, exclusividade. Quando isso acontece, a Justiça do Trabalho olha para a realidade, e não para o papel.",
      "whatIs": "Pejotização é a contratação de uma pessoa física por meio de pessoa jurídica para afastar a aplicação da CLT. Contratar um PJ é lícito quando há autonomia de verdade: o profissional organiza o próprio trabalho, atende vários clientes, assume o risco do negócio e pode se fazer substituir. A contratação é fraudulenta quando estão presentes os requisitos da relação de emprego dos artigos 2º e 3º da CLT, e o artigo 9º da CLT declara nulos os atos praticados para desvirtuar esses direitos. Nesse caso, o que se busca é o reconhecimento do vínculo, com anotação na carteira e pagamento de todas as verbas do período.",
      "sections": [
        {
          "title": "Os quatro requisitos do vínculo de emprego",
          "paragraphs": [
            "A CLT considera empregado quem presta serviço com pessoalidade, não eventualidade, onerosidade e subordinação. Pessoalidade significa que é você quem precisa fazer o trabalho, sem poder mandar outra pessoa no seu lugar. Não eventualidade é a prestação contínua, ligada à rotina da empresa. Onerosidade é o pagamento pelo serviço, ainda que chamado de honorário ou “valor do contrato”. Subordinação é estar sujeito a ordens, controle de horário, metas, cobrança de resultado e punições.",
            "A subordinação é o ponto que costuma decidir o caso. Grupos de WhatsApp com ordens diárias, obrigação de bater ponto ou avisar ausências, necessidade de pedir “férias” ao gestor, uso de crachá, e-mail corporativo e equipamento da empresa, e participação obrigatória em reuniões internas são indícios comuns. A dependência econômica de um único contratante também pesa, embora sozinha não baste."
          ]
        },
        {
          "title": "Quando o contrato PJ é válido",
          "paragraphs": [
            "Nem toda contratação como PJ é fraude. A reforma trabalhista (Lei 13.467/2017) e decisões do Supremo Tribunal Federal reconheceram a licitude de outras formas de divisão do trabalho, como a terceirização (ADPF 324 e Tema 725). O profissional que negocia o próprio preço, define como e quando trabalha, atende outros clientes e não está inserido na hierarquia da empresa tende a ser considerado autônomo.",
            "A discussão sobre contratos de PJ chegou ao STF no Tema 1.389 da repercussão geral, que trata da competência da Justiça do Trabalho, da licitude da contratação de autônomo ou pessoa jurídica e do ônus da prova da fraude. Em 2025, o relator determinou a suspensão nacional dos processos sobre o tema até o julgamento. Por isso, antes de ajuizar a ação, é importante verificar com o advogado o andamento atualizado desse julgamento e como ele afeta o seu caso."
          ]
        },
        {
          "title": "O que pode ser cobrado se o vínculo for reconhecido",
          "paragraphs": [
            "Reconhecido o vínculo, o trabalhador passa a ter direito a tudo o que um empregado teria recebido no período: anotação da carteira, 13º salário, férias com um terço, depósitos de FGTS, recolhimentos previdenciários, horas extras e adicionais, se houver. Se o contrato terminou por iniciativa da empresa, somam-se aviso prévio, multa de 40% do FGTS e liberação das guias de seguro-desemprego, conforme o caso.",
            "O valor exato depende da remuneração, do tempo de serviço, da convenção coletiva da categoria e das provas produzidas. Não existe resultado garantido: o juiz avalia a prova de cada processo. Por isso o trabalho de reunir documentos antes de sair da empresa faz diferença."
          ]
        },
        {
          "title": "Como reunir provas sem se expor",
          "paragraphs": [
            "Guarde cópias do contrato, das notas fiscais e dos comprovantes de pagamento, que mostram a regularidade e o valor fixo. Salve prints de conversas com gestores contendo ordens, cobranças de horário e escalas. Anote nomes de colegas que viveram a mesma situação e possam testemunhar. Evite copiar documentos sigilosos da empresa ou dados de clientes: a prova deve ser sobre a sua relação de trabalho, obtida de forma lícita."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Cumpre horário fixo definido pela empresa ou precisa justificar ausências",
        "Recebe ordens diretas de superiores e tem metas cobradas",
        "Não pode enviar outra pessoa em seu lugar (pessoalidade)",
        "Presta serviço de forma contínua, ligada à rotina da empresa",
        "Recebe valor fixo mensal, como se fosse salário",
        "Trabalha com exclusividade ou depende economicamente de um único contratante",
        "Usa equipamentos, e-mail, crachá e estrutura da empresa",
        "Foi obrigado a abrir MEI ou CNPJ como condição para ser contratado"
      ],
      "documents": [
        "Contrato de prestação de serviços e aditivos",
        "Notas fiscais emitidas e comprovantes de pagamento regulares",
        "E-mails, mensagens e prints de grupos com ordens e cobranças",
        "Escalas, controles de horário ou registros de acesso",
        "Crachá, e-mail corporativo ou outra identificação da empresa",
        "Nome e contato de colegas que possam testemunhar",
        "Extrato do CNIS, para conferir os recolhimentos ao INSS"
      ],
      "deadlines": "O prazo para ajuizar a reclamação trabalhista é de 2 anos contados do fim da prestação de serviços, e podem ser cobradas as verbas dos últimos 5 anos anteriores ao ajuizamento (art. 7º, XXIX, da Constituição). O pedido de reconhecimento do vínculo em si é declaratório e abrange todo o período trabalhado. Como o Tema 1.389 do STF pode influenciar o andamento, convém buscar orientação antes que o prazo de 2 anos se aproxime.",
      "faq": [
        {
          "question": "O que é pejotização?",
          "answer": "É a contratação de um trabalhador como pessoa jurídica para evitar os encargos da CLT. Se há pessoalidade, habitualidade, pagamento e subordinação, o contrato PJ pode ser considerado fraude (art. 9º da CLT)."
        },
        {
          "question": "Posso ter o vínculo reconhecido mesmo tendo emitido notas fiscais?",
          "answer": "Sim. A emissão de notas e a assinatura do contrato PJ não impedem o reconhecimento. A Justiça do Trabalho analisa como o trabalho era prestado na realidade."
        },
        {
          "question": "MEI também pode pedir vínculo?",
          "answer": "Pode. Ser MEI não impede o reconhecimento. Se a abertura do MEI foi exigida para trabalhar como empregado subordinado, a contratação pode ser considerada fraudulenta."
        },
        {
          "question": "Quais direitos recebo se o vínculo for reconhecido?",
          "answer": "Os direitos de qualquer empregado no período: anotação na carteira, FGTS, férias com um terço, 13º, recolhimentos ao INSS, horas extras e, se a empresa encerrou o contrato, aviso prévio, multa de 40% e guias do seguro-desemprego."
        },
        {
          "question": "Posso entrar com ação enquanto ainda trabalho como PJ?",
          "answer": "Pode, não é preciso esperar o fim do contrato. Mas os riscos de continuar na empresa durante o processo devem ser avaliados com um advogado antes."
        },
        {
          "question": "O que é o Tema 1.389 do STF?",
          "answer": "É o recurso em que o Supremo vai definir regras sobre a contratação de autônomos e pessoas jurídicas, incluindo competência e ônus da prova da fraude. Em 2025 houve ordem de suspensão nacional dos processos sobre o assunto; confira a situação atualizada com seu advogado."
        }
      ]
    },
    "relatedActions": [
      "demissao-sem-justa-causa",
      "horas-extras",
      "verbas-rescisorias"
    ],
    "updatedAt": "2026-11-05"
  },

  // FAMÍLIA
  {
    id: 'divorcio-consensual',
    nicheId: 'familia',
    slug: 'divorcio-consensual',
    title: 'Divórcio Consensual: Passo a Passo Completo',
    metaTitle: 'Divórcio Consensual | Como Fazer Rápido e Barato',
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
          answer: 'O custo varia conforme o estado e a complexidade. Em cartório, há emolumentos fixados por tabela estadual, além dos honorários do advogado, que seguem a tabela da OAB.',
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
    metaTitle: 'Pensão Alimentícia | Valor, Como Pedir e Execução',
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
    "id": "guarda-filhos-tipos",
    "nicheId": "familia",
    "slug": "guarda-filhos-compartilhada-unilateral",
    "title": "Guarda de Filhos: Compartilhada, Unilateral e Alternada",
    "metaTitle": "Guarda de Filhos | Compartilhada, Unilateral e Alternada",
    "metaDescription": "Separou e precisa definir a guarda? Entenda a guarda compartilhada, unilateral e alternada, a convivência, a mudança de cidade e como pedir ou revisar a guarda.",
    "keywords": [
      "guarda de filhos",
      "guarda compartilhada",
      "guarda unilateral",
      "guarda alternada",
      "direito de visita",
      "regulamentação de visitas",
      "convivência",
      "modificação de guarda"
    ],
    "excerpt": "Conheça os tipos de guarda, como o juiz decide pelo melhor interesse da criança, como funciona a convivência e quando é possível pedir a mudança da guarda.",
    "content": {
      "intro": "A definição da guarda é uma das decisões mais delicadas de uma separação. A lei brasileira adota a guarda compartilhada como regra, mas a escolha final sempre parte do melhor interesse da criança ou do adolescente. Entender os tipos de guarda e como o Judiciário decide ajuda os pais a construir um acordo realista ou a se preparar para um processo.",
      "whatIs": "Guarda é o conjunto de direitos e deveres dos pais de cuidar, proteger, educar e tomar as decisões importantes da vida dos filhos. Ela está regulada nos artigos 1.583 a 1.590 do Código Civil. A guarda não se confunde com a pensão alimentícia, nem com a residência da criança: mesmo na guarda compartilhada a criança normalmente tem uma casa de referência, e o outro genitor tem convivência ampla. O poder familiar continua com os dois pais em qualquer modalidade.",
      "sections": [
        {
          "title": "Guarda compartilhada: a regra desde 2014",
          "paragraphs": [
            "Com a Lei 13.058/2014, o artigo 1.584, §2º, do Código Civil passou a determinar que, não havendo acordo, o juiz aplique a guarda compartilhada quando ambos os pais estiverem aptos a exercer o poder familiar. Ela só não será aplicada se um dos genitores declarar que não deseja a guarda ou se houver elementos que indiquem risco à criança, como violência doméstica (regra reforçada pela Lei 14.713/2023).",
            "Na guarda compartilhada, decisões sobre escola, saúde, religião, viagens e mudança de cidade são tomadas em conjunto. O tempo de convivência deve ser dividido de forma equilibrada, considerando a rotina da criança, e o juiz fixa a cidade considerada base de moradia. Compartilhar a guarda não elimina a pensão: quem tem mais recursos continua contribuindo na proporção das possibilidades."
          ]
        },
        {
          "title": "Guarda unilateral e guarda alternada",
          "paragraphs": [
            "Na guarda unilateral, apenas um dos pais detém a guarda, e o outro mantém o direito de convivência e o dever de supervisionar os interesses do filho, podendo pedir informações e prestação de contas (art. 1.583, §5º). Ela é aplicada quando um dos pais não quer ou não pode exercer a guarda, ou quando a compartilhada não atende ao melhor interesse da criança.",
            "A guarda alternada, em que a criança muda de casa em períodos iguais e cada genitor decide sozinho enquanto está com ela, não tem previsão expressa no Código Civil e costuma ser vista com cautela pelos tribunais, pela instabilidade que pode gerar na rotina. Não confunda com a compartilhada com convivência equilibrada, que é a regra."
          ]
        },
        {
          "title": "Como o juiz decide",
          "paragraphs": [
            "O juiz analisa a rotina da criança, os vínculos afetivos, a disponibilidade de cada genitor, a escola, a saúde e, conforme a idade e maturidade, a opinião do próprio filho. Em casos de conflito, é comum a realização de estudo psicossocial por equipe técnica. Indícios de alienação parental (Lei 12.318/2010), violência ou negligência são levados em conta. Não existe preferência legal pela mãe ou pelo pai.",
            "A guarda também pode ser atribuída a terceiros, como avós ou tios, quando os pais não tiverem condições, sempre considerando o grau de parentesco e a relação de afinidade e afetividade (art. 1.584, §5º)."
          ]
        },
        {
          "title": "Mudança de cidade e revisão da guarda",
          "paragraphs": [
            "Mudar de cidade com o filho, quando isso altera a convivência, depende de concordância do outro genitor ou de autorização judicial. A mudança unilateral pode levar a pedido de modificação da guarda e, conforme o caso, ser apontada como ato de alienação parental. Viagens ao exterior exigem autorização de ambos os pais ou do juiz.",
            "A guarda pode ser revista a qualquer tempo quando houver mudança relevante das circunstâncias, como alteração de rotina, descumprimento reiterado da convivência ou situação de risco. O pedido é feito na Vara de Família, com provas da nova realidade."
          ]
        },
        {
          "title": "Acordo ou processo judicial",
          "paragraphs": [
            "Quando os pais chegam a um consenso, o acordo de guarda e convivência pode ser homologado pelo juiz, junto com o divórcio ou de forma autônoma, com participação do Ministério Público por envolver interesse de criança. Um bom acordo detalha a residência de referência, os dias de convivência, feriados, férias escolares, aniversários, viagens e a forma de comunicação entre os pais. Quanto mais claro, menor a chance de novos conflitos."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Separação, divórcio ou dissolução de união estável com filhos menores",
        "Pais que nunca viveram juntos e precisam regularizar guarda e convivência",
        "Necessidade de modificar uma guarda já fixada por mudança de circunstâncias",
        "Descumprimento reiterado do regime de convivência",
        "Situações de risco, negligência ou violência contra a criança",
        "Avós e outros parentes, em situações especiais e no melhor interesse da criança"
      ],
      "documents": [
        "Certidão de nascimento dos filhos",
        "Documentos pessoais dos genitores",
        "Comprovante de residência",
        "Comprovantes de renda",
        "Documentos escolares e de saúde da criança",
        "Provas relevantes em caso de conflito (mensagens, relatórios, boletins)",
        "Laudo psicológico ou estudo psicossocial, quando houver"
      ],
      "deadlines": "Não há prazo para pedir a guarda ou a regulamentação da convivência. A revisão pode ser solicitada sempre que houver mudança relevante nas circunstâncias. Em situações de risco, é possível pedir medida de urgência ao juiz.",
      "faq": [
        {
          "question": "A guarda compartilhada é obrigatória?",
          "answer": "É a regra legal desde 2014, mesmo sem acordo, quando os dois pais estão aptos. Não se aplica se um deles declarar que não quer a guarda ou houver elementos de risco, como violência doméstica."
        },
        {
          "question": "Qual a diferença entre guarda compartilhada e alternada?",
          "answer": "Na compartilhada, os pais decidem juntos e a criança tem uma casa de referência, com convivência equilibrada. Na alternada, a criança muda de casa por períodos iguais e cada um decide sozinho no seu período; ela não está prevista no Código Civil e é pouco aplicada."
        },
        {
          "question": "A mãe tem preferência na guarda?",
          "answer": "Não. A lei não dá preferência a nenhum dos genitores. A decisão segue o melhor interesse da criança."
        },
        {
          "question": "Na guarda compartilhada ainda existe pensão?",
          "answer": "Sim. A guarda compartilhada não afasta o dever de sustento. A pensão é fixada conforme as necessidades do filho e as possibilidades de cada genitor."
        },
        {
          "question": "Posso mudar de cidade com meu filho?",
          "answer": "Se a mudança afeta a convivência, é preciso concordância do outro genitor ou autorização judicial. A mudança sem acordo pode levar a pedido de modificação da guarda."
        },
        {
          "question": "Posso perder a guarda?",
          "answer": "Em casos graves, como abandono, maus-tratos ou negligência, a guarda pode ser modificada por decisão judicial, com direito de defesa e produção de provas."
        },
        {
          "question": "Avós podem pedir guarda?",
          "answer": "Sim, em situações especiais, como falecimento ou impossibilidade dos pais, desde que demonstrem que a medida atende ao melhor interesse da criança."
        }
      ]
    },
    "relatedActions": [
      "pensao-alimenticia",
      "divorcio-consensual",
      "guarda-netos-avos"
    ],
    "updatedAt": "2026-11-05"
  },

  // CIVIL
  {
    id: 'danos-morais',
    nicheId: 'civil',
    slug: 'danos-morais',
    title: 'Danos Morais: Quando Você Tem Direito a Indenização',
    metaTitle: 'Danos Morais | Quando Posso Processar? Valores',
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
          answer: 'Não há tabela. O juiz fixa o valor em cada caso, considerando a gravidade, a repercussão e a condição das partes.',
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
    metaTitle: 'Ação de Cobrança | Como Cobrar Dívida na Justiça',
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
          answer: 'Sim. Incidem juros de mora (o que foi contratado ou, na falta, a taxa legal do art. 406 do Código Civil, alterado pela Lei 14.905/2024) e correção monetária desde o vencimento.',
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
    "id": "aposentadoria",
    "nicheId": "previdenciario",
    "slug": "aposentadoria",
    "title": "Aposentadoria pelo INSS: Regras Atuais e Regras de Transição",
    "metaTitle": "Aposentadoria INSS | Idade, Pontos, Pedágio e Regras de Transição",
    "metaDescription": "Entenda as regras de aposentadoria após a Reforma de 2019: idade mínima, regra dos pontos, idade progressiva, pedágios de 50% e 100%, cálculo do valor e como pedir.",
    "keywords": [
      "aposentadoria",
      "regras de transição",
      "aposentadoria por idade",
      "tempo de contribuição",
      "regra dos pontos",
      "pedágio 50%",
      "pedágio 100%",
      "reforma da previdência",
      "cálculo aposentadoria"
    ],
    "excerpt": "Guia das regras de aposentadoria após a Reforma da Previdência: regra definitiva, as cinco transições, como o valor é calculado e como escolher a melhor opção.",
    "content": {
      "intro": "A Reforma da Previdência (Emenda Constitucional 103/2019) mudou as regras de aposentadoria a partir de 13 de novembro de 2019. A aposentadoria apenas por tempo de contribuição, sem idade mínima, deixou de existir para quem começou a contribuir depois disso, mas quem já contribuía ganhou regras de transição. Escolher a regra certa pode mudar a data da aposentadoria e o valor do benefício.",
      "whatIs": "Aposentadoria é o benefício pago pelo INSS ao segurado que cumpre os requisitos de idade, tempo de contribuição e carência. Hoje existem a regra definitiva por idade, as regras de transição para quem já era segurado antes da reforma, a aposentadoria especial para atividades nocivas à saúde, a aposentadoria da pessoa com deficiência, a aposentadoria rural e a aposentadoria por incapacidade permanente. Quem completou todos os requisitos até 13/11/2019 tem direito adquirido às regras antigas.",
      "sections": [
        {
          "title": "Regra definitiva (para quem entrou depois da reforma)",
          "paragraphs": [
            "A regra permanente exige 62 anos de idade para mulheres e 65 para homens. O tempo mínimo de contribuição é de 15 anos para mulheres e de 20 anos para homens que se filiaram após a reforma. Homens já filiados antes de 13/11/2019 que se aposentam pela regra de transição por idade continuam com o mínimo de 15 anos.",
            "Trabalhadores rurais e segurados especiais mantêm idade reduzida: 55 anos para mulheres e 60 para homens, com 15 anos de atividade rural comprovada."
          ]
        },
        {
          "title": "As regras de transição",
          "paragraphs": [
            "Regra dos pontos: soma de idade e tempo de contribuição, com mínimo de 30 anos de contribuição para mulheres e 35 para homens. A pontuação sobe um ponto por ano: em 2026 são 93 pontos para mulheres e 103 para homens, até o limite de 100 e 105 pontos.",
            "Idade mínima progressiva: 30 anos de contribuição (mulher) ou 35 (homem) e uma idade mínima que aumenta seis meses por ano. Em 2026 são 59 anos e meio para mulheres e 64 anos e meio para homens, até chegar a 62 e 65.",
            "Pedágio de 50%: vale para quem, em 13/11/2019, estava a no máximo dois anos de completar 30 (mulher) ou 35 (homem) anos de contribuição. Basta cumprir o tempo que faltava mais metade dele, sem idade mínima, mas o valor sofre a incidência do fator previdenciário.",
            "Pedágio de 100%: exige 57 anos de idade (mulher) ou 60 (homem), 30 ou 35 anos de contribuição e o dobro do tempo que faltava na data da reforma. O valor é de 100% da média salarial, o que pode compensar para quem ganha mais.",
            "Transição por idade: para quem já era segurado, a idade da mulher subiu de 60 para 62 anos até 2023 e a do homem permaneceu em 65, com 15 anos de contribuição."
          ]
        },
        {
          "title": "Como o valor é calculado",
          "paragraphs": [
            "Na maioria das regras, o INSS calcula a média de todos os salários de contribuição desde julho de 1994 e aplica 60% mais 2% por ano de contribuição que exceder 15 anos (mulheres) ou 20 anos (homens). Por exemplo, um homem com 30 anos de contribuição recebe 80% da média. As exceções são o pedágio de 100%, que paga 100% da média, e o pedágio de 50%, que usa o fator previdenciário. O benefício nunca é inferior ao salário mínimo.",
            "Desde a reforma, é possível excluir da média os salários que reduzam o valor, desde que mantido o tempo mínimo exigido, mas o tempo descartado deixa de contar para o acréscimo de 2%. Essa e outras escolhas de cálculo são o motivo pelo qual vale simular todas as regras antes de pedir."
          ]
        },
        {
          "title": "Como pedir e o que fazer se o INSS negar",
          "paragraphs": [
            "O pedido é feito pelo Meu INSS (site ou aplicativo) ou pela central 135. Antes, confira o extrato do CNIS: vínculos faltando, salários errados e períodos especiais não reconhecidos são as causas mais comuns de indeferimento ou de valor menor. A data de entrada do requerimento define o início dos pagamentos, por isso não convém adiar o pedido sem motivo.",
            "Se o pedido for negado, cabe recurso administrativo ao Conselho de Recursos da Previdência Social em 30 dias, ou ação judicial. Causas até 60 salários mínimos tramitam no Juizado Especial Federal."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Regra definitiva: 62 anos (mulher) ou 65 anos (homem) com o tempo mínimo de contribuição",
        "Regra dos pontos: soma de idade e contribuição, com 30 ou 35 anos de contribuição",
        "Idade mínima progressiva com 30 ou 35 anos de contribuição",
        "Pedágio de 50% para quem estava a até 2 anos de completar o tempo em 2019",
        "Pedágio de 100% com 57 anos (mulher) ou 60 anos (homem)",
        "Aposentadoria especial para atividades nocivas à saúde",
        "Aposentadoria rural com idade reduzida",
        "Direito adquirido para quem completou os requisitos até 13/11/2019"
      ],
      "documents": [
        "Documento de identidade e CPF",
        "Extrato do CNIS atualizado",
        "Todas as carteiras de trabalho",
        "Carnês e comprovantes de contribuição como autônomo ou facultativo",
        "Certidão de Tempo de Contribuição, se houve serviço público",
        "PPP e laudos técnicos para períodos especiais",
        "Documentos de atividade rural, se for o caso"
      ],
      "deadlines": "Não há prazo para pedir aposentadoria, e os pagamentos começam na data do requerimento. O INSS deve observar os prazos de análise fixados no acordo homologado pelo STF, que variam conforme o benefício. Se o pedido for negado, o recurso administrativo deve ser apresentado em 30 dias. Na Justiça, as parcelas atrasadas prescrevem em 5 anos.",
      "faq": [
        {
          "question": "Qual a idade mínima para se aposentar hoje?",
          "answer": "Na regra definitiva, 62 anos para mulheres e 65 para homens. Nas regras de transição, a idade pode ser menor, como na idade progressiva (59 anos e meio para mulheres e 64 anos e meio para homens em 2026) ou no pedágio de 50%, que não tem idade mínima."
        },
        {
          "question": "Ainda existe aposentadoria só por tempo de contribuição?",
          "answer": "Para quem se filiou depois da reforma, não. Quem já contribuía antes pode usar as transições; a do pedágio de 50% é a única sem idade mínima, mas com fator previdenciário."
        },
        {
          "question": "O que é a regra dos pontos?",
          "answer": "É a soma da idade com o tempo de contribuição. Em 2026, são exigidos 93 pontos para mulheres e 103 para homens, com mínimo de 30 e 35 anos de contribuição. A exigência sobe um ponto por ano."
        },
        {
          "question": "Quanto vou receber?",
          "answer": "Em regra, 60% da média de todos os salários desde 1994, mais 2% por ano que passar de 15 anos (mulher) ou 20 anos (homem) de contribuição. O pedágio de 100% paga 100% da média."
        },
        {
          "question": "Como saber qual regra é melhor para mim?",
          "answer": "É preciso simular todas as regras com o CNIS corrigido, comparando data e valor. O Meu INSS faz uma simulação básica, e um advogado previdenciário pode conferir períodos que o INSS deixou de considerar."
        },
        {
          "question": "O INSS negou minha aposentadoria. E agora?",
          "answer": "Você pode recorrer ao Conselho de Recursos da Previdência Social em 30 dias ou ajuizar ação. Antes, verifique o motivo da negativa e se faltou algum documento ou período no CNIS."
        }
      ]
    },
    "relatedActions": [
      "simulacao-aposentadoria",
      "aposentadoria-especial",
      "revisao-aposentadoria"
    ],
    "updatedAt": "2026-11-05"
  },
  {
    id: 'auxilio-doenca',
    nicheId: 'previdenciario',
    slug: 'auxilio-doenca',
    title: 'Auxílio-Doença: Como Pedir e Quando Você Tem Direito',
    metaTitle: 'Auxílio-Doença INSS | Como Pedir, Perícia, Recurso',
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
    metaTitle: 'BPC LOAS | Benefício Assistencial Idoso Deficiente',
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
    "id": "prisao-flagrante",
    "nicheId": "penal",
    "slug": "prisao-flagrante-direitos",
    "title": "Prisão em Flagrante: Direitos do Preso e o Que a Família Deve Fazer",
    "metaTitle": "Prisão em Flagrante | Direitos, Audiência de Custódia e Fiança",
    "metaDescription": "Familiar preso em flagrante? Entenda os direitos do preso, a audiência de custódia, a fiança, a liberdade provisória e o que fazer nas primeiras horas.",
    "keywords": [
      "prisão em flagrante",
      "preso em flagrante",
      "audiência de custódia",
      "direitos do preso",
      "liberdade provisória",
      "fiança",
      "relaxamento de prisão",
      "advogado criminal"
    ],
    "excerpt": "Entenda o que é o flagrante, os direitos de quem é preso, como funciona a audiência de custódia e quais são os caminhos para a liberdade.",
    "content": {
      "intro": "A prisão em flagrante costuma pegar a família de surpresa, normalmente à noite ou no fim de semana. As primeiras horas são decisivas: é nelas que se lavra o auto de prisão, se decide sobre fiança na delegacia e se prepara a audiência de custódia. Conhecer os direitos do preso e os passos seguintes ajuda a agir com calma e a evitar erros.",
      "whatIs": "O artigo 302 do Código de Processo Penal considera em flagrante quem está cometendo a infração, quem acaba de cometê-la, quem é perseguido logo após em situação que faça presumir ser o autor, e quem é encontrado logo depois com instrumentos, armas ou objetos que façam presumir a autoria. A prisão em flagrante pode ser feita sem ordem judicial, mas precisa seguir o procedimento legal e é obrigatoriamente analisada por um juiz.",
      "sections": [
        {
          "title": "Direitos de quem é preso",
          "paragraphs": [
            "A Constituição garante ao preso o direito de permanecer em silêncio, de ser informado de seus direitos, de ter a assistência da família e de advogado, e de conhecer a identidade de quem o prendeu (art. 5º, LXII a LXIV). A prisão deve ser comunicada imediatamente ao juiz e à família ou pessoa indicada. O preso também tem direito à integridade física e moral, e o uso de algemas só é admitido nas hipóteses da Súmula Vinculante 11 do STF.",
            "O silêncio não pode ser interpretado em prejuízo da defesa. A orientação mais segura é não dar versão dos fatos antes de conversar reservadamente com um advogado, que tem direito de acesso ao preso e aos autos do flagrante."
          ]
        },
        {
          "title": "Na delegacia: auto de prisão e nota de culpa",
          "paragraphs": [
            "O delegado ouve o condutor, as testemunhas e o preso, e lavra o auto de prisão em flagrante. Em até 24 horas, o auto deve ser encaminhado ao juiz e, se o preso não tiver advogado, à Defensoria Pública, e o preso recebe a nota de culpa com o motivo da prisão (art. 306 do CPP).",
            "Nos crimes com pena máxima de até 4 anos, o próprio delegado pode arbitrar fiança (art. 322). Nas infrações de menor potencial ofensivo, com pena máxima de até 2 anos, em regra é lavrado termo circunstanciado e a pessoa é liberada se se comprometer a comparecer ao Juizado (Lei 9.099/1995)."
          ]
        },
        {
          "title": "Audiência de custódia: as três decisões possíveis",
          "paragraphs": [
            "O artigo 310 do CPP determina que o juiz, em até 24 horas após a prisão, realize audiência de custódia com a presença do preso, do Ministério Público e da defesa. Nela, o juiz deve relaxar a prisão se for ilegal; converter o flagrante em preventiva, apenas se presentes os requisitos do artigo 312 e se as medidas cautelares não bastarem; ou conceder liberdade provisória, com ou sem fiança e com ou sem medidas cautelares, como comparecimento periódico em juízo ou monitoração eletrônica.",
            "A audiência não discute se a pessoa é culpada, mas a legalidade da prisão, eventuais abusos e a necessidade de manter alguém preso. Por isso, documentos que mostrem residência fixa, trabalho e vínculos familiares ajudam a defesa a demonstrar que a liberdade não oferece risco ao processo."
          ]
        },
        {
          "title": "O que a família pode fazer nas primeiras horas",
          "paragraphs": [
            "Descubra em qual delegacia a pessoa está e o número do procedimento. Reúna documento de identidade, comprovante de residência, carteira de trabalho ou declaração do empregador, certidões de nascimento de filhos e receitas ou laudos de saúde, se houver. Procure um advogado criminal ou a Defensoria Pública. Evite conversar sobre os fatos por telefone ou mensagens e não entregue objetos ou valores sem orientação.",
            "Se a prisão for mantida, a defesa pode pedir revogação da preventiva ao juiz e, sendo o caso, impetrar habeas corpus no tribunal. Cada caso é diferente, e não há como garantir o resultado: a decisão depende do crime imputado, dos antecedentes e das provas."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Permanecer em silêncio sem que isso prejudique a defesa",
        "Ter advogado ou defensor desde a prisão, com entrevista reservada",
        "Comunicação imediata da prisão à família e ao juiz",
        "Receber a nota de culpa em até 24 horas",
        "Audiência de custódia em até 24 horas",
        "Relaxamento da prisão se o flagrante for ilegal",
        "Liberdade provisória, com ou sem fiança, quando cabível",
        "Integridade física e moral, sem tortura ou maus-tratos"
      ],
      "documents": [
        "Documento de identidade do preso",
        "Comprovante de residência fixa",
        "Comprovante de trabalho ou declaração do empregador",
        "Certidões de nascimento de filhos e prova de dependentes",
        "Laudos ou receitas, se houver problema de saúde",
        "Certidão de antecedentes",
        "Cópia do auto de prisão em flagrante, obtida pelo advogado"
      ],
      "deadlines": "O auto de prisão deve ser enviado ao juiz em até 24 horas, com entrega da nota de culpa ao preso no mesmo prazo, e a audiência de custódia deve ocorrer em até 24 horas após a prisão (arts. 306 e 310 do CPP). A partir daí, a defesa pode pedir a revogação de eventual preventiva a qualquer tempo.",
      "faq": [
        {
          "question": "Posso ficar em silêncio durante a prisão?",
          "answer": "Sim, é direito constitucional, e o silêncio não pode ser usado contra você. O recomendado é falar sobre os fatos apenas depois de conversar com o advogado."
        },
        {
          "question": "O que é audiência de custódia?",
          "answer": "É a apresentação do preso ao juiz em até 24 horas, com Ministério Público e defesa, para verificar a legalidade da prisão e decidir entre relaxamento, liberdade provisória ou preventiva."
        },
        {
          "question": "Posso pagar fiança e sair?",
          "answer": "Depende do crime. Em crimes com pena máxima de até 4 anos, o delegado pode fixar fiança. Nos demais, quem decide é o juiz. Crimes como racismo, tortura, tráfico, terrorismo e hediondos são inafiançáveis, o que não impede a liberdade provisória sem fiança."
        },
        {
          "question": "Quando a prisão em flagrante é ilegal?",
          "answer": "Quando não há situação de flagrante prevista no art. 302 do CPP, quando o procedimento legal não é respeitado, quando o flagrante é forjado ou provocado, ou quando há abuso na abordagem. Nesses casos, a defesa pede o relaxamento."
        },
        {
          "question": "O que é liberdade provisória?",
          "answer": "É a soltura enquanto o processo tramita, com ou sem fiança, podendo vir acompanhada de medidas cautelares como comparecimento em juízo, proibição de contato ou tornozeleira."
        },
        {
          "question": "Crime de menor potencial ofensivo leva à prisão?",
          "answer": "Em regra não. Para infrações com pena máxima de até 2 anos, lavra-se termo circunstanciado e a pessoa é liberada se assumir o compromisso de comparecer ao Juizado."
        }
      ]
    },
    "relatedActions": [
      "habeas-corpus",
      "acompanhamento-delegacia"
    ],
    "updatedAt": "2026-11-05"
  },
  {
    "id": "habeas-corpus",
    "nicheId": "penal",
    "slug": "habeas-corpus",
    "title": "Habeas Corpus: Quando e Como Pedir a Liberdade",
    "metaTitle": "Habeas Corpus | Quando Cabe e Como Pedir Liberdade",
    "metaDescription": "Prisão ilegal, sem fundamentação ou com excesso de prazo? Entenda quando cabe habeas corpus, preventivo ou liberatório, quem pode impetrar e como é julgado.",
    "keywords": [
      "habeas corpus",
      "pedido de liberdade",
      "prisão ilegal",
      "prisão preventiva",
      "excesso de prazo",
      "habeas corpus preventivo",
      "liminar habeas corpus",
      "soltura"
    ],
    "excerpt": "O habeas corpus é a ação constitucional que protege a liberdade de locomoção. Entenda quando cabe, quem pode impetrar, como é julgado e seus limites.",
    "content": {
      "intro": "O habeas corpus é a garantia constitucional mais conhecida da liberdade. Ele serve para fazer cessar, ou impedir, qualquer prisão ou ameaça de prisão ilegal ou abusiva. Por envolver a liberdade, tem tramitação prioritária e pode ser decidido por liminar. Mas não é um recurso para qualquer insatisfação com o processo: tem hipóteses próprias e limites.",
      "whatIs": "Previsto no artigo 5º, LXVIII, da Constituição e nos artigos 647 a 667 do Código de Processo Penal, o habeas corpus é concedido sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder. Quem impetra é chamado de impetrante, a pessoa beneficiada é o paciente, e a autoridade responsável pela coação é a autoridade coatora. É gratuito e pode ser impetrado por qualquer pessoa, inclusive sem advogado.",
      "sections": [
        {
          "title": "As hipóteses do artigo 648 do CPP",
          "paragraphs": [
            "A lei considera a coação ilegal quando não houver justa causa; quando alguém estiver preso por mais tempo do que a lei determina; quando quem ordenou a coação não tiver competência; quando houver cessado o motivo que autorizou a coação; quando não se admitir fiança nos casos em que a lei a permite; quando o processo for manifestamente nulo; e quando estiver extinta a punibilidade.",
            "Na prática, os casos mais comuns são prisão preventiva sem fundamentação concreta (art. 315 do CPP), prisão quando bastariam medidas cautelares alternativas (art. 319), excesso de prazo na formação da culpa, falta de revisão periódica da preventiva a cada 90 dias (art. 316, parágrafo único) e prisão por fato que não constitui crime."
          ]
        },
        {
          "title": "Preventivo ou liberatório",
          "paragraphs": [
            "O habeas corpus liberatório (ou repressivo) é usado quando a prisão já aconteceu, e busca a soltura. O preventivo é usado quando há ameaça concreta e iminente de prisão ilegal, e o resultado é um salvo-conduto. A ameaça precisa ser real: um temor genérico de ser preso não basta.",
            "Também é possível usar o habeas corpus para trancar inquérito ou ação penal sem justa causa, desde que a ilegalidade seja demonstrada de plano, sem necessidade de produzir provas."
          ]
        },
        {
          "title": "Quem julga e os limites",
          "paragraphs": [
            "A competência depende da autoridade coatora. Contra ato de delegado, o pedido vai ao juiz de primeiro grau; contra ato de juiz, ao Tribunal de Justiça ou ao Tribunal Regional Federal; contra ato desses tribunais, ao Superior Tribunal de Justiça; e, em hipóteses previstas na Constituição, ao Supremo Tribunal Federal. A Súmula 691 do STF, como regra, impede o Supremo de conhecer habeas corpus contra decisão que apenas negou liminar em tribunal superior, salvo flagrante ilegalidade.",
            "O habeas corpus não admite dilação probatória: a prova da ilegalidade deve vir pronta, com cópia da decisão de prisão e dos documentos do processo. Ele também não substitui, em regra, o recurso próprio, embora os tribunais possam conceder a ordem de ofício quando constatam ilegalidade evidente."
          ]
        },
        {
          "title": "O que deve constar no pedido",
          "paragraphs": [
            "O artigo 654 do CPP exige o nome do paciente e de quem exerce a coação, a descrição da ameaça ou da prisão, as razões da ilegalidade e a assinatura do impetrante. Embora qualquer pessoa possa impetrar, o pedido técnico, com cópia integral das decisões e argumentos baseados na jurisprudência atual, aumenta a chance de ser bem compreendido. A defesa deve também avaliar, em paralelo, pedidos ao próprio juiz da causa, como revogação da preventiva ou liberdade provisória, que às vezes são mais rápidos."
          ]
        },
        {
          "title": "Habeas corpus e outros pedidos da defesa",
          "paragraphs": [
            "O habeas corpus convive com outros instrumentos. Ao juiz da causa, a defesa pode pedir o relaxamento da prisão ilegal, a revogação da preventiva quando os motivos desaparecem, a substituição por medidas cautelares e, em situações de saúde ou de responsabilidade por filhos pequenos, a prisão domiciliar (arts. 317 e 318 do CPP). Esses pedidos muitas vezes resolvem a situação mais rápido, e uma eventual negativa abre caminho para o habeas corpus no tribunal.",
            "Também é possível usar o habeas corpus em favor de várias pessoas na mesma situação, o chamado habeas corpus coletivo, já admitido pelo STF, por exemplo, em favor de gestantes e mães de crianças presas preventivamente (HC 143.641). A escolha do instrumento adequado e o momento certo de usá-lo fazem parte da estratégia da defesa."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Prisão preventiva sem fundamentação concreta",
        "Prisão quando medidas cautelares alternativas seriam suficientes",
        "Excesso de prazo na prisão provisória ou na formação da culpa",
        "Prisão sem ordem judicial válida e fora das hipóteses de flagrante",
        "Prisão decretada por autoridade incompetente",
        "Falta de revisão periódica da preventiva",
        "Ameaça concreta de prisão ilegal (habeas corpus preventivo)",
        "Processo manifestamente nulo ou punibilidade extinta"
      ],
      "documents": [
        "Cópia da decisão que decretou ou manteve a prisão",
        "Mandado de prisão, se houver",
        "Cópia do inquérito ou da ação penal",
        "Documentos pessoais do paciente",
        "Comprovantes de residência fixa e de trabalho",
        "Certidão de antecedentes",
        "Documentos que provem a ilegalidade alegada"
      ],
      "deadlines": "Não há prazo para impetrar habeas corpus: ele cabe enquanto durar a ilegalidade ou a ameaça. Por envolver liberdade, tem prioridade de julgamento, e a liminar pode ser analisada rapidamente, inclusive em regime de plantão. O tempo de decisão varia conforme o tribunal.",
      "faq": [
        {
          "question": "Qualquer pessoa pode impetrar habeas corpus?",
          "answer": "Sim. O próprio preso, familiares ou qualquer pessoa podem impetrar, sem advogado e sem custas. A atuação técnica de um advogado, porém, costuma tornar o pedido mais completo."
        },
        {
          "question": "Existe habeas corpus preventivo?",
          "answer": "Sim. Quando há ameaça concreta e iminente de prisão ilegal, é possível pedir um salvo-conduto antes que a prisão aconteça."
        },
        {
          "question": "Quanto tempo demora o julgamento?",
          "answer": "O habeas corpus tem prioridade. A liminar pode ser apreciada em horas ou dias, e o mérito em seguida; o tempo exato depende do tribunal e da complexidade do caso."
        },
        {
          "question": "Se o habeas corpus for negado, o que fazer?",
          "answer": "Contra a decisão de tribunal cabe recurso ordinário ou nova impetração na instância superior (TJ, depois STJ e STF), observando os limites da jurisprudência, como a Súmula 691 do STF."
        },
        {
          "question": "Habeas corpus serve para discutir se sou culpado?",
          "answer": "Em regra não. Ele não admite produção de provas; serve para ilegalidades demonstráveis de plano. A discussão de mérito ocorre no processo e nos recursos próprios."
        },
        {
          "question": "Qual a diferença entre habeas corpus e relaxamento de prisão?",
          "answer": "O relaxamento é pedido ao próprio juiz quando a prisão é ilegal, por exemplo um flagrante irregular. O habeas corpus é dirigido à instância superior à autoridade que mantém a coação."
        }
      ]
    },
    "relatedActions": [
      "prisao-flagrante",
      "acompanhamento-delegacia"
    ],
    "updatedAt": "2026-11-05"
  },
  {
    id: 'violencia-domestica',
    nicheId: 'penal',
    slug: 'violencia-domestica',
    title: 'Violência Doméstica: Proteção e Direitos da Vítima',
    metaTitle: 'Violência Doméstica | Medida Protetiva Lei Maria da Penha',
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
    id: 'adicional-insalubridade',
    nicheId: 'trabalhista',
    slug: 'adicional-insalubridade-periculosidade',
    title: 'Adicional de Insalubridade e Periculosidade: Seus Direitos',
    metaTitle: 'Insalubridade e Periculosidade | Adicional CLT',
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
        'PGR (antigo PPRA) e PCMSO da empresa',
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
    id: 'multa-477-clt',
    nicheId: 'trabalhista',
    slug: 'multa-477-atraso-rescisao',
    title: 'Multa do Artigo 477: Atraso nas Verbas Rescisórias',
    metaTitle: 'Multa 477 CLT | Atraso no Pagamento da Rescisão',
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
        'Quando o pagamento e a entrega dos documentos da rescisão não são feitos no prazo',
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
          answer: 'O valor é de um salário do empregado (art. 477, §8º, da CLT).',
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
    metaTitle: 'Atraso de Voo | Cancelamento | Indenização',
    metaDescription: 'Voo atrasou ou foi cancelado? Saiba seus direitos: assistência material, reacomodação e indenização. Veja o que a ANAC e o CDC garantem.',
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
          answer: 'Não há valor tabelado. Segundo o STJ (REsp 1.796.716) e o art. 251-A do Código Brasileiro de Aeronáutica, o dano moral por atraso ou cancelamento não é presumido: é preciso demonstrar o prejuízo concreto. O valor depende das circunstâncias de cada caso e é fixado pelo juiz; não há valor garantido.',
        },
        {
          question: 'Preciso de advogado para processar a companhia aérea?',
          answer: 'No Juizado Especial (causas até 20 salários mínimos), não é obrigatório. Acima disso, ou em recurso, o advogado é obrigatório.',
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
    "id": "overbooking-extravio",
    "nicheId": "consumidor",
    "slug": "overbooking-extravio-bagagem",
    "title": "Overbooking e Extravio de Bagagem: Direitos do Passageiro",
    "metaTitle": "Overbooking e Bagagem Extraviada | Direitos e Indenização",
    "metaDescription": "Foi impedido de embarcar por overbooking ou teve a mala extraviada? Entenda a Resolução ANAC 400, a compensação, a assistência material, os prazos e a indenização.",
    "keywords": [
      "overbooking",
      "preterição de embarque",
      "bagagem extraviada",
      "mala perdida",
      "extravio bagagem indenização",
      "bagagem danificada",
      "resolução anac 400",
      "convenção de montreal"
    ],
    "excerpt": "Entenda seus direitos na preterição de embarque e no extravio, atraso ou dano da bagagem, os prazos da ANAC e como buscar ressarcimento e indenização.",
    "content": {
      "intro": "Ser impedido de embarcar com passagem confirmada ou chegar ao destino sem a mala são problemas frequentes na aviação. A Resolução 400/2016 da ANAC, o Código Brasileiro de Aeronáutica, o Código de Defesa do Consumidor e, nos voos internacionais, a Convenção de Montreal garantem ao passageiro assistência, alternativas de viagem e ressarcimento. Conhecer os passos certos no aeroporto faz diferença depois.",
      "whatIs": "Overbooking é a venda de mais passagens do que assentos disponíveis. Quando um passageiro com reserva confirmada e apresentação no horário é impedido de embarcar, ocorre a preterição de embarque. Extravio é quando a bagagem despachada não chega ao destino com o passageiro; ela pode ser localizada depois ou ser considerada perdida. Também há danos à mala e violação, com furto de itens.",
      "sections": [
        {
          "title": "Preterição de embarque: o que a companhia deve fazer",
          "paragraphs": [
            "Antes de impedir alguém de embarcar, a companhia deve procurar voluntários que aceitem viajar em outro voo mediante compensação negociada. Se houver preterição, a Resolução ANAC 400/2016 obriga o pagamento imediato de compensação financeira ao passageiro preterido, fixada em Direitos Especiais de Saque (DES): 250 DES em voos domésticos e 500 DES em voos internacionais, valor convertido em reais conforme a cotação do dia. Essa compensação pode ser paga em dinheiro, transferência ou, se o passageiro concordar, em crédito.",
            "Além disso, o passageiro escolhe entre reacomodação no próximo voo, inclusive de outra companhia, reembolso integral, ou execução do serviço por outro meio de transporte. A assistência material é devida enquanto ele aguarda: comunicação a partir de 1 hora, alimentação a partir de 2 horas e hospedagem com traslado a partir de 4 horas, quando houver pernoite."
          ]
        },
        {
          "title": "Bagagem extraviada, atrasada ou danificada",
          "paragraphs": [
            "Ao perceber o problema, registre ainda no aeroporto o Registro de Irregularidade de Bagagem (RIB) ou protesto junto à companhia, e guarde o número. Pela Resolução 400, a companhia tem até 7 dias para localizar e entregar a bagagem em voos domésticos e até 21 dias em voos internacionais. Se a mala não for encontrada nesse prazo, a companhia deve indenizar em até 7 dias.",
            "Enquanto a mala não chega, o passageiro que está fora do seu domicílio deve ser ressarcido de despesas emergenciais, como roupas e itens de higiene; guarde todas as notas fiscais. Para bagagem danificada ou violada, o protesto deve ser feito em até 7 dias do recebimento."
          ]
        },
        {
          "title": "Limites de indenização e danos morais",
          "paragraphs": [
            "Em voos internacionais, a Convenção de Montreal fixa limites de responsabilidade para a bagagem, em DES, e o STF decidiu (Tema 210) que ela prevalece sobre o CDC quanto aos danos materiais. O passageiro pode ampliar esse limite fazendo declaração especial de valor no check-in. Já em relação aos danos morais, o STF entendeu (Tema 1.240) que a convenção não se aplica, valendo a legislação brasileira.",
            "Nos voos domésticos, o artigo 251-A do Código Brasileiro de Aeronáutica, incluído pela Lei 14.034/2020, exige a demonstração do efetivo prejuízo e de sua extensão para que haja indenização por dano extrapatrimonial. Por isso, provas como compromissos perdidos, tempo de espera, ausência de assistência e gastos realizados são essenciais. O valor é fixado pelo juiz conforme o caso, sem garantia de resultado."
          ]
        },
        {
          "title": "Objetos de valor e documentação",
          "paragraphs": [
            "Joias, dinheiro, eletrônicos e documentos devem viajar na bagagem de mão. Se forem despachados e se perderem, o passageiro precisará comprovar a existência e o valor dos itens, o que nem sempre é simples, e poderá esbarrar nos limites de indenização. Fotos da mala e do conteúdo antes da viagem ajudam a demonstrar o prejuízo."
          ]
        },
        {
          "title": "Como reclamar antes de ir à Justiça",
          "paragraphs": [
            "Além do atendimento da companhia, o passageiro pode registrar reclamação no consumidor.gov.br, plataforma acompanhada pela ANAC, e no Procon. Esses registros, com protocolos e respostas, também servem de prova num eventual processo, que pode tramitar no Juizado Especial Cível."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Impedido de embarcar mesmo com reserva confirmada e check-in no prazo",
        "Companhia não pagou a compensação imediata ou não ofereceu alternativas",
        "Falta de assistência material durante a espera",
        "Bagagem que não chegou no mesmo voo",
        "Bagagem não localizada em 7 dias (doméstico) ou 21 dias (internacional)",
        "Bagagem danificada ou violada, com furto de itens",
        "Gastos emergenciais enquanto aguardava a mala",
        "Compromissos perdidos por causa da preterição ou do extravio"
      ],
      "documents": [
        "Passagem, cartão de embarque ou comprovante de check-in",
        "E-mail de confirmação da reserva",
        "Comprovante de despacho da bagagem (etiqueta)",
        "Registro de Irregularidade de Bagagem (RIB) ou protesto",
        "Fotos da mala danificada e do conteúdo",
        "Notas fiscais de itens perdidos e de compras emergenciais",
        "Comprovantes de gastos extras e de compromissos perdidos",
        "Prints da comunicação com a companhia"
      ],
      "deadlines": "Registre o RIB ainda no aeroporto. A companhia tem 7 dias (doméstico) ou 21 dias (internacional) para localizar a mala e, se não localizar, 7 dias para indenizar. Danos à bagagem devem ser protestados em até 7 dias. Para a ação judicial, voos internacionais seguem o prazo de 2 anos da Convenção de Montreal quanto aos danos materiais; voos domésticos seguem em regra o prazo de 5 anos do CDC.",
      "faq": [
        {
          "question": "Quanto recebo por overbooking?",
          "answer": "A Resolução ANAC 400 garante compensação imediata de 250 DES (doméstico) ou 500 DES (internacional), além de reacomodação ou reembolso e assistência material. Danos morais dependem da prova do prejuízo concreto e são fixados pelo juiz."
        },
        {
          "question": "A companhia pode oferecer voucher em vez de dinheiro?",
          "answer": "Pode oferecer, mas o passageiro não é obrigado a aceitar. A compensação e o reembolso podem ser exigidos em dinheiro."
        },
        {
          "question": "Quais assistências são obrigatórias?",
          "answer": "Comunicação a partir de 1 hora de espera, alimentação a partir de 2 horas e hospedagem com traslado a partir de 4 horas, quando houver necessidade de pernoite."
        },
        {
          "question": "E se perderem minha mala definitivamente?",
          "answer": "Você tem direito a ser indenizado pelos itens perdidos, comprovando seu valor. Em voos internacionais incidem os limites da Convenção de Montreal para os danos materiais, salvo declaração especial de valor."
        },
        {
          "question": "Posso comprar roupas se a mala atrasou?",
          "answer": "Sim. Fora do seu domicílio, as despesas emergenciais devem ser ressarcidas. Guarde todas as notas fiscais."
        },
        {
          "question": "Objetos de valor na mala são indenizados?",
          "answer": "Podem ser, mas é preciso comprovar a existência e o valor, e há limites nos voos internacionais. O ideal é levá-los na bagagem de mão."
        }
      ]
    },
    "relatedActions": [
      "atraso-cancelamento-voo",
      "danos-morais"
    ],
    "updatedAt": "2026-11-05"
  },
  {
    "id": "negativacao-indevida",
    "nicheId": "consumidor",
    "slug": "negativacao-indevida-spc-serasa",
    "title": "Negativação Indevida no SPC e Serasa: Como Limpar o Nome e Buscar Indenização",
    "metaTitle": "Negativação Indevida SPC Serasa | Limpar Nome e Danos Morais",
    "metaDescription": "Nome sujo por dívida que você não tem ou já pagou? Entenda a negativação indevida, a Súmula 385 do STJ, os prazos de baixa e como pedir exclusão e indenização.",
    "keywords": [
      "negativação indevida",
      "nome sujo indevido",
      "SPC Serasa",
      "limpar nome",
      "danos morais negativação",
      "dívida já paga",
      "Súmula 385 STJ",
      "fraude no CPF"
    ],
    "excerpt": "Entenda quando a inclusão no SPC, Serasa ou Boa Vista é indevida, o que dizem as súmulas do STJ, os prazos para retirada e como agir para limpar o nome.",
    "content": {
      "intro": "Ter o nome incluído no SPC, na Serasa ou na Boa Vista por uma dívida que você não reconhece, já pagou ou que nasceu de fraude é uma situação comum e traz consequências reais: crédito negado, compras recusadas, constrangimento. O Código de Defesa do Consumidor e a jurisprudência do Superior Tribunal de Justiça dão ferramentas para retirar a restrição e, em muitos casos, buscar indenização.",
      "whatIs": "Negativação indevida é a inclusão do nome do consumidor em cadastro de inadimplentes sem dívida válida que a justifique, ou em desacordo com as regras do artigo 43 do CDC. Isso ocorre quando a dívida é inexistente, já foi paga, foi contratada por terceiro com os seus dados, é cobrada em valor errado ou continua registrada depois do prazo legal. Na maioria desses casos, o STJ entende que o dano moral é presumido (in re ipsa), ou seja, decorre da própria inscrição indevida.",
      "sections": [
        {
          "title": "O que diz a lei e o STJ",
          "paragraphs": [
            "O artigo 43 do CDC exige que o consumidor seja comunicado por escrito antes da abertura do registro (§2º), que os dados sejam verdadeiros, e que as informações negativas não fiquem registradas por mais de 5 anos (§1º), nem depois de consumada a prescrição da cobrança (§5º). Se houver erro, o consumidor pode exigir a correção imediata (§3º).",
            "Algumas súmulas do STJ são decisivas. A Súmula 359 diz que cabe ao órgão mantenedor do cadastro notificar o devedor antes da inscrição, e a Súmula 404 dispensa o aviso de recebimento nessa carta. A Súmula 548 fixa que, quitada a dívida, o credor deve pedir a exclusão do registro em até 5 dias úteis a partir do pagamento. A Súmula 323 limita a permanência do registro a 5 anos."
          ]
        },
        {
          "title": "A Súmula 385 e quem já tem outras restrições",
          "paragraphs": [
            "Pela Súmula 385 do STJ, quem já possui inscrição legítima preexistente não tem direito a indenização por dano moral em razão de nova anotação irregular, ressalvado o direito ao cancelamento. Em outras palavras: se o seu nome já estava negativado por uma dívida verdadeira, a nova restrição indevida deve ser excluída, mas a indenização, em regra, não é devida.",
            "Por isso, antes de qualquer ação, é importante consultar o relatório completo dos três birôs e verificar se as outras anotações também são indevidas ou estão sendo questionadas. Essa análise muda a estratégia e evita pedidos sem chance de êxito."
          ]
        },
        {
          "title": "Fraude com seus dados",
          "paragraphs": [
            "Quando a dívida foi contratada por terceiro com documentos falsos ou dados vazados, a responsabilidade da empresa é objetiva. A Súmula 479 do STJ estabelece que as instituições financeiras respondem objetivamente pelos danos causados por fraudes praticadas por terceiros em operações bancárias, por se tratar de risco do negócio. Registre boletim de ocorrência, conteste a dívida por escrito e guarde os protocolos."
          ]
        },
        {
          "title": "Passo a passo para agir",
          "paragraphs": [
            "Primeiro, emita o relatório gratuito nos sites da Serasa, do SPC e da Boa Vista e identifique credor, valor e data. Segundo, conteste a cobrança junto à empresa por canal que gere protocolo e, se possível, também pelo consumidor.gov.br ou pelo Procon. Terceiro, guarde comprovantes de pagamento, contratos e mensagens.",
            "Se a restrição não for retirada, a ação judicial pode pedir a declaração de inexistência do débito, a exclusão do nome por tutela de urgência e indenização por danos morais. Causas de até 40 salários mínimos podem ir ao Juizado Especial Cível, sem custas em primeiro grau, sendo obrigatória a assistência de advogado acima de 20 salários mínimos. O valor de eventual indenização é fixado pelo juiz conforme as circunstâncias e não há resultado garantido."
          ]
        },
        {
          "title": "Cadastro positivo e score",
          "paragraphs": [
            "A exclusão da restrição não apaga imediatamente o histórico de pontuação de crédito. O score é calculado por cada birô com base em vários fatores e pode levar algum tempo para refletir a retirada. O consumidor pode consultar seus dados no Cadastro Positivo (Lei 12.414/2011) e pedir a correção de informações erradas."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Dívida que você nunca contraiu, inclusive por fraude com seus dados",
        "Dívida já paga e não baixada em até 5 dias úteis",
        "Negativação após acordo de quitação ou renegociação cumprida",
        "Cobrança de valor errado ou em duplicidade",
        "Registro mantido por mais de 5 anos ou após a prescrição da cobrança",
        "Negativação sem a comunicação prévia exigida pelo art. 43, §2º, do CDC",
        "Cobrança de produto ou serviço não contratado"
      ],
      "documents": [
        "Relatório da Serasa, do SPC e da Boa Vista mostrando a restrição",
        "Carta de comunicação da negativação, se recebida",
        "Comprovantes de pagamento ou do acordo",
        "Boletim de ocorrência, em caso de fraude",
        "Protocolos de reclamação à empresa, ao Procon ou ao consumidor.gov.br",
        "Contrato, faturas e mensagens trocadas com a empresa",
        "Documentos pessoais"
      ],
      "deadlines": "Quitada a dívida, o credor tem 5 dias úteis para pedir a exclusão do registro (Súmula 548 do STJ). Nenhuma informação negativa pode permanecer por mais de 5 anos. Para a ação de indenização em relação de consumo, aplica-se em regra o prazo de 5 anos do art. 27 do CDC; fora do CDC, o prazo pode ser de 3 anos. Como há divergências, é melhor agir assim que descobrir a restrição.",
      "faq": [
        {
          "question": "Preciso provar que sofri constrangimento?",
          "answer": "Em regra, não. Para o STJ, o dano moral pela inscrição indevida é presumido. Basta provar que a negativação foi irregular."
        },
        {
          "question": "E se eu já tiver outras dívidas verdadeiras no nome?",
          "answer": "Pela Súmula 385 do STJ, quem tem inscrição legítima anterior não recebe dano moral pela nova anotação irregular, mas mantém o direito de exigir o cancelamento dela."
        },
        {
          "question": "Preciso provar que não devo?",
          "answer": "Não é possível provar um fato negativo. Cabe à empresa demonstrar que a dívida existe e foi contratada por você, com contrato, gravação ou documentos válidos."
        },
        {
          "question": "Quanto tempo a empresa tem para tirar meu nome depois que eu pago?",
          "answer": "Cinco dias úteis a partir do pagamento, conforme a Súmula 548 do STJ."
        },
        {
          "question": "Dívida antiga pode ficar no meu nome?",
          "answer": "Não por mais de 5 anos, nem depois de prescrita a cobrança (art. 43, §§1º e 5º, do CDC). Passado esse prazo, a anotação deve ser retirada."
        },
        {
          "question": "Como limpar meu nome rapidamente?",
          "answer": "Reclame com a empresa e no consumidor.gov.br. Se não resolver, a ação judicial pode incluir pedido de tutela de urgência para exclusão do nome enquanto o processo tramita."
        },
        {
          "question": "Quanto posso receber de indenização?",
          "answer": "Não há valor tabelado nem garantido. O juiz fixa conforme as circunstâncias: tempo da restrição, prejuízos comprovados, conduta da empresa e existência de outras anotações."
        }
      ]
    },
    "relatedActions": [
      "danos-morais",
      "cobranca-indevida-dobro",
      "cartao-clonado-banco"
    ],
    "updatedAt": "2026-11-05"
  },
  {
    "id": "plano-saude-negativa",
    "nicheId": "consumidor",
    "slug": "plano-saude-negativa-cobertura",
    "title": "Plano de Saúde Negou Cobertura ou Cirurgia? Direitos e Como Pedir Liminar",
    "metaTitle": "Plano de Saúde Negou Cirurgia ou Exame | Direitos e Liminar",
    "metaDescription": "O plano negou cirurgia, exame, internação ou tratamento? Entenda o rol da ANS após a Lei 14.454/2022, carência, prazos de autorização e como pedir liminar na urgência.",
    "keywords": [
      "plano de saúde negou cirurgia",
      "negativa de cobertura",
      "liminar plano de saúde",
      "rol da ANS",
      "tutela de urgência",
      "carência plano de saúde",
      "doença preexistente",
      "home care"
    ],
    "excerpt": "Guia completo para quem teve cirurgia, exame ou tratamento negado: quando a negativa é abusiva, prazos da ANS, carência, rol, liminar e danos morais.",
    "content": {
      "intro": "Receber a negativa do plano de saúde para uma cirurgia, exame ou tratamento indicado pelo médico é uma das situações mais angustiantes que um consumidor pode viver. Muitas dessas negativas são consideradas abusivas pela ANS e pelos tribunais, e há caminhos rápidos para tentar reverter a recusa, inclusive com pedido de liminar quando há urgência. O resultado, porém, depende do contrato, da indicação médica e das provas de cada caso.",
      "whatIs": "Negativa de cobertura é a recusa da operadora em autorizar ou custear procedimento, exame, internação, medicamento ou material. As justificativas mais comuns são “fora do rol da ANS”, carência, doença preexistente, tratamento experimental ou off-label, rede credenciada indisponível e limitação de dias de internação. Os contratos de plano de saúde são regidos pela Lei 9.656/1998 e pelo Código de Defesa do Consumidor (Súmula 608 do STJ), salvo os de autogestão.",
      "sections": [
        {
          "title": "O rol da ANS depois da Lei 14.454/2022",
          "paragraphs": [
            "O rol de procedimentos da ANS é a lista de coberturas mínimas obrigatórias. Em 2022, depois de o STJ entender que o rol era, em regra, taxativo, a Lei 14.454/2022 alterou a Lei 9.656/1998 para prever que o rol é referência básica e que tratamentos fora dele devem ser cobertos quando houver comprovação de eficácia à luz das ciências da saúde baseada em evidências, ou recomendação da Conitec ou de órgão de avaliação de tecnologias em saúde de renome internacional.",
            "Em 2025, ao julgar a ADI 7.265, o STF manteve a lei, mas estabeleceu critérios técnicos para a cobertura fora do rol, como prescrição pelo médico assistente, ausência de alternativa terapêutica no rol, comprovação científica de eficácia e segurança e registro na Anvisa. Na prática, um relatório médico bem fundamentado, explicando por que o tratamento é necessário e por que as alternativas do rol não servem, é a peça central do pedido."
          ]
        },
        {
          "title": "Carência, urgência e doença preexistente",
          "paragraphs": [
            "A Lei 9.656/1998 limita a carência para urgência e emergência a 24 horas (art. 12, V, c), e a Súmula 597 do STJ considera abusiva a cláusula que imponha carência maior nesses casos. Para partos a termo, o limite é de 300 dias, e para os demais procedimentos, 180 dias.",
            "Para doenças preexistentes declaradas, a operadora pode aplicar cobertura parcial temporária de até 24 meses para procedimentos de alta complexidade ligados à doença. A Súmula 609 do STJ estabelece que a recusa por doença preexistente é ilícita se a operadora não exigiu exames prévios à contratação ou não provou a má-fé do consumidor."
          ]
        },
        {
          "title": "Prazos máximos de autorização",
          "paragraphs": [
            "A ANS fixa prazos máximos para garantia de atendimento: 7 dias úteis para consultas básicas, 3 dias úteis para exames laboratoriais, 10 dias úteis para os demais exames e terapias, 21 dias úteis para procedimentos de alta complexidade e para cirurgias e internações eletivas, e atendimento imediato para urgência e emergência. Ultrapassado o prazo sem solução, o consumidor pode registrar reclamação na ANS pela Notificação de Intermediação Preliminar (NIP)."
          ]
        },
        {
          "title": "A liminar (tutela de urgência)",
          "paragraphs": [
            "Quando a demora pode agravar a saúde ou colocar a vida em risco, a ação judicial pode trazer pedido de tutela de urgência (art. 300 do CPC), que obriga a operadora a autorizar o procedimento antes do julgamento final. É preciso demonstrar a probabilidade do direito, com prescrição médica e negativa injustificada, e o perigo de dano, com relatório que explique a urgência. Nos casos mais graves, o pedido pode ser apresentado no plantão judiciário.",
            "O tempo de análise depende de cada juízo e do caso concreto; não há prazo garantido. Se a liminar for concedida e descumprida, o juiz pode fixar multa diária e outras medidas para assegurar o cumprimento. A operadora pode recorrer, mas deve cumprir a decisão enquanto ela estiver em vigor. Planos individuais só podem ser rescindidos por fraude ou inadimplência superior a 60 dias, com notificação (art. 13 da Lei 9.656/1998)."
          ]
        },
        {
          "title": "Reembolso e danos morais",
          "paragraphs": [
            "Se o paciente precisou pagar o procedimento por conta própria diante de negativa indevida ou falta de rede, pode pedir reembolso, guardando notas, recibos e a negativa. A recusa indevida de cobertura em situação de urgência costuma ser reconhecida pelo STJ como causa de dano moral, por agravar a aflição de quem já está doente. O valor é fixado pelo juiz conforme as circunstâncias."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Negativa de procedimento previsto no rol da ANS",
        "Negativa de tratamento fora do rol com indicação médica fundamentada e evidência científica",
        "Negativa em urgência ou emergência, ou carência acima de 24 horas nesses casos",
        "Negativa de tratamento oncológico, quimioterapia ou medicamento durante internação",
        "Recusa de próteses e órteses ligadas ao ato cirúrgico",
        "Limitação de dias de internação, inclusive em UTI (Súmula 302 do STJ)",
        "Negativa por doença preexistente sem exame prévio ou prova de má-fé",
        "Demora acima dos prazos máximos de autorização da ANS"
      ],
      "documents": [
        "Carteirinha e contrato do plano de saúde",
        "Pedido e relatório médico detalhado, com CID, justificativa e urgência",
        "Exames e laudos que comprovem a necessidade",
        "Negativa por escrito da operadora (pode ser exigida por lei)",
        "Protocolos de atendimento e reclamação na ANS",
        "Comprovantes de pagamento das mensalidades",
        "Orçamentos ou notas fiscais, se houve pagamento particular"
      ],
      "deadlines": "A operadora deve responder dentro dos prazos máximos da ANS (até 21 dias úteis para cirurgias eletivas e alta complexidade; imediato na urgência). A negativa deve ser informada por escrito quando o consumidor pedir, em até 24 horas. Não há prazo para ajuizar a ação de cobertura enquanto houver necessidade; pedidos de reembolso e indenização devem ser feitos o quanto antes para evitar discussões de prescrição.",
      "faq": [
        {
          "question": "O que fazer quando o plano nega?",
          "answer": "Peça a negativa por escrito com o motivo, reúna o relatório médico e registre reclamação na ANS. Se houver urgência, procure um advogado para avaliar o pedido de liminar."
        },
        {
          "question": "O plano pode negar procedimento fora do rol da ANS?",
          "answer": "Pode, em alguns casos. Pela Lei 14.454/2022 e pelos critérios fixados pelo STF na ADI 7.265, a cobertura fora do rol depende de prescrição médica, ausência de alternativa no rol, evidência científica de eficácia e segurança e registro na Anvisa."
        },
        {
          "question": "Quanto tempo demora para sair a liminar?",
          "answer": "Não há prazo fixo. Pedidos urgentes costumam ser analisados com prioridade, e em situações de risco de vida podem ser levados ao plantão judiciário. O tempo depende do juízo e do caso."
        },
        {
          "question": "O plano pode exigir carência numa emergência?",
          "answer": "Não acima de 24 horas. A Súmula 597 do STJ considera abusiva cláusula que imponha carência maior em urgência e emergência."
        },
        {
          "question": "Posso fazer o procedimento particular e cobrar depois?",
          "answer": "Em situações de urgência ou negativa indevida, é possível pedir reembolso. Guarde notas, recibos, relatório médico e a negativa da operadora."
        },
        {
          "question": "O plano pode cancelar meu contrato porque entrei na Justiça?",
          "answer": "Não. Planos individuais só podem ser rescindidos por fraude ou inadimplência acima de 60 dias, com notificação prévia. Retaliação pode gerar nova discussão judicial."
        },
        {
          "question": "Quanto custa entrar com ação contra o plano?",
          "answer": "Causas de até 40 salários mínimos podem tramitar no Juizado Especial Cível, sem custas em primeiro grau. Casos complexos, que exijam perícia, costumam ir à Justiça comum."
        },
        {
          "question": "Tenho direito a danos morais?",
          "answer": "Pode haver, especialmente quando a negativa indevida ocorre em urgência ou agrava o sofrimento do paciente. Não há valor garantido: o juiz avalia cada caso."
        }
      ]
    },
    "relatedActions": [
      "danos-morais",
      "erro-medico"
    ],
    "updatedAt": "2026-11-05"
  },

  // PREVIDENCIÁRIO - Artigos Atualizados 2025
  {
    id: 'simulacao-aposentadoria',
    nicheId: 'previdenciario',
    slug: 'simular-aposentadoria-meu-inss',
    title: 'Como Simular Sua Aposentadoria no Meu INSS',
    metaTitle: 'Simular Aposentadoria Meu INSS | Passo a Passo',
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
    metaTitle: 'Divórcio Litigioso | Sem Acordo, Briga, Contencioso',
    metaDescription: 'Não consegue acordo com seu cônjuge? Entenda como funciona o divórcio litigioso, quanto tempo leva e como proteger seus direitos.',
    keywords: ['divórcio litigioso', 'divórcio sem acordo', 'divórcio brigando', 'divórcio contencioso', 'partilha litigiosa', 'separação difícil'],
    excerpt: 'Saiba como funciona o divórcio quando não há acordo, os passos do processo, quanto tempo demora e como proteger seus interesses.',
    content: {
      intro: 'O divórcio litigioso é o caminho quando não há acordo entre as partes. Quando o casal não consegue concordar sobre bens, guarda dos filhos ou pensão, é necessário recorrer ao Judiciário para decidir.',
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
          answer: 'Custas judiciais variam por estado e por valor da causa, e quem não pode pagar pode pedir gratuidade. Honorários advocatícios seguem a tabela da OAB e a complexidade do caso.',
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
    metaTitle: 'Revisão de Pensão Alimentícia | Aumentar ou Diminuir',
    metaDescription: 'Precisa revisar o valor da pensão? Saiba quando pode pedir aumento ou redução. Veja quando a mudança de renda justifica.',
    keywords: ['revisão pensão', 'aumentar pensão', 'diminuir pensão', 'pensão alimentícia 2025', 'revisional alimentos', 'salário mínimo pensão'],
    excerpt: 'Entenda quando e como pedir revisão do valor da pensão alimentícia, seja para aumentar ou diminuir, e o impacto do novo salário mínimo.',
    content: {
      intro: 'Pensões fixadas em percentual do salário mínimo são reajustadas automaticamente sempre que o mínimo muda. Mas além disso, sempre que houver mudança significativa nas necessidades ou possibilidades, é possível pedir revisão judicial.',
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
          answer: 'Não existe valor mínimo em lei, mas o valor é fixado pelo binômio necessidade e possibilidade (art. 1.694 do Código Civil), e para quem não tem emprego formal costuma ser calculado sobre o salário mínimo vigente.',
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
    metaTitle: 'Juizado Especial | Pequenas Causas Sem Advogado',
    metaDescription: 'Precisa processar alguém? Saiba como usar o Juizado Especial: causas até 40 salários mínimos, sem advogado até 20 e sem custas no 1º grau.',
    keywords: ['pequenas causas', 'juizado especial', 'processo sem advogado', 'JEC', 'causa até 40 salários', 'juizado cível'],
    excerpt: 'Aprenda como funciona o Juizado Especial, quando você pode usar, se precisa de advogado e quanto tempo demora.',
    content: {
      intro: 'O Juizado Especial Cível, conhecido como "pequenas causas", é uma forma rápida e acessível de resolver conflitos de até 40 salários mínimos. Para causas até 20 salários, você não precisa de advogado.',
      whatIs: 'O Juizado Especial é um órgão do Judiciário criado para resolver conflitos de menor complexidade de forma rápida, simples e gratuita. Prioriza a conciliação e não exige advogado para causas menores.',
      whenYouHaveRight: [
        'Causas de até 40 salários mínimos (calculado pelo salário mínimo vigente)',
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
          answer: 'Para causas até 20 salários mínimos (valor vigente), não é obrigatório. Acima disso ou em recursos, o advogado é necessário.',
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
    metaTitle: 'Crimes de Trânsito | Embriaguez ao Volante, Lei Seca',
    metaDescription: 'Foi pego na Lei Seca ou envolvido em acidente grave? Saiba as penas, como se defender e quando pode haver prisão.',
    keywords: ['embriaguez volante', 'crime trânsito', 'Lei Seca', 'bafômetro', 'homicídio culposo trânsito', 'lesão corporal trânsito'],
    excerpt: 'Entenda os principais crimes de trânsito, as penas previstas, quando há prisão e como se defender adequadamente.',
    content: {
      intro: 'Crimes de trânsito são cada vez mais severamente punidos no Brasil. A embriaguez ao volante pode levar à prisão, e o homicídio no trânsito com embriaguez tem pena de 5 a 8 anos de reclusão. Conheça seus direitos e como se defender.',
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
          answer: 'Homicídio culposo no trânsito: 2 a 4 anos de detenção (art. 302 do CTB), com aumento em algumas situações, como omissão de socorro. Sob influência de álcool ou outra substância: 5 a 8 anos de reclusão (art. 302, §3º).',
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
  // NOVOS ARTIGOS - TRABALHISTA
  {
    id: 'intervalo-intrajornada',
    nicheId: 'trabalhista',
    slug: 'intervalo-intrajornada-almoco',
    title: 'Intervalo Intrajornada: Seus Direitos ao Horário de Almoço',
    metaTitle: 'Intervalo Intrajornada | Horário Almoço Não Concedido',
    metaDescription: 'Não tem intervalo de almoço completo? Saiba que você tem direito a receber hora extra. Entenda a CLT e como cobrar.',
    keywords: ['intervalo intrajornada', 'horário almoço', 'intervalo trabalho', 'descanso não concedido', 'hora extra intervalo', 'CLT intervalo'],
    excerpt: 'Saiba quais são seus direitos em relação ao intervalo de almoço e o que fazer quando a empresa não concede o tempo mínimo.',
    content: {
      intro: 'O intervalo intrajornada, conhecido como horário de almoço, é um direito garantido pela CLT. Quando não concedido ou reduzido indevidamente, a empresa deve pagar como hora extra.',
      whatIs: 'O intervalo intrajornada é o período de descanso dentro da jornada de trabalho. Para jornadas acima de 6 horas, o mínimo é 1 hora. Para jornadas entre 4 e 6 horas, é de 15 minutos.',
      whenYouHaveRight: [
        'Quando o intervalo é inferior ao mínimo legal',
        'Quando é obrigado a trabalhar durante o almoço',
        'Quando precisa ficar disponível no intervalo',
        'Quando o intervalo é "suprimido" pela empresa',
        'Quando há pressão para reduzir o tempo de descanso',
      ],
      documents: [
        'Registros de ponto',
        'Testemunhos de colegas',
        'E-mails durante horário de almoço',
        'Mensagens de trabalho no intervalo',
        'Contrato de trabalho',
        'Acordo ou convenção coletiva',
      ],
      deadlines: 'Você pode cobrar os últimos 5 anos de intervalos não concedidos. Prazo de 2 anos após sair da empresa para entrar com ação.',
      faq: [
        {
          question: 'Quanto devo receber por intervalo não concedido?',
          answer: 'Após a Reforma Trabalhista, você recebe apenas o tempo suprimido como hora extra (ex: se teve 30min ao invés de 1h, recebe 30min extras).',
        },
        {
          question: 'A empresa pode reduzir meu intervalo para 30 minutos?',
          answer: 'Só com autorização do Ministério do Trabalho ou previsão em convenção coletiva, e desde que tenha refeitório na empresa.',
        },
        {
          question: 'E se eu almoçar rápido por vontade própria?',
          answer: 'Se for por escolha sua e não por imposição da empresa, não há direito. Mas a empresa deve disponibilizar o tempo integral.',
        },
        {
          question: 'Vale para home office também?',
          answer: 'Sim, no teletrabalho também deve haver intervalo. Se você trabalha durante o almoço, pode cobrar.',
        },
      ],
    },
    relatedActions: ['horas-extras', 'demissao-sem-justa-causa'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'estabilidade-provisoria',
    nicheId: 'trabalhista',
    slug: 'estabilidade-provisoria-emprego',
    title: 'Estabilidade no Emprego: Gestante, CIPA, Acidente e Mais',
    metaTitle: 'Estabilidade Provisória | Gestante, CIPA, Acidentado',
    metaDescription: 'Saiba quem tem estabilidade no emprego: gestante, membro CIPA, acidentado, pré-aposentadoria. Não pode ser demitido!',
    keywords: ['estabilidade emprego', 'estabilidade gestante', 'estabilidade CIPA', 'estabilidade acidente trabalho', 'demissão ilegal', 'reintegração'],
    excerpt: 'Conheça todas as situações que garantem estabilidade provisória no emprego e o que fazer se for demitido irregularmente.',
    content: {
      intro: 'A estabilidade provisória protege o trabalhador contra demissão sem justa causa em determinadas situações. Se você for demitido durante o período de estabilidade, pode pedir reintegração ou indenização.',
      whatIs: 'Estabilidade provisória é a garantia temporária de emprego que impede a demissão sem justa causa durante determinado período. Quem tem estabilidade só pode ser demitido por falta grave.',
      whenYouHaveRight: [
        'Gestante: da confirmação até 5 meses após o parto',
        'Acidente de trabalho: 12 meses após alta do INSS',
        'Membro da CIPA: durante mandato + 1 ano',
        'Dirigente sindical: durante mandato + 1 ano',
        'Pré-aposentadoria: conforme convenção coletiva',
        'Retorno de serviço militar: 30 dias',
      ],
      documents: [
        'Carteira de trabalho',
        'Comprovante de gestação (exames)',
        'CAT e documentos do INSS (acidente)',
        'Ata de eleição CIPA',
        'Convenção coletiva da categoria',
        'Carta de demissão',
      ],
      deadlines: 'Para gestante, a estabilidade vai até 5 meses após o parto. Acidentado tem 12 meses após alta. CIPA durante mandato + 1 ano.',
      faq: [
        {
          question: 'Fui demitida grávida. O que fazer?',
          answer: 'Você pode pedir reintegração ao emprego ou indenização correspondente ao período de estabilidade. Procure advogado urgente.',
        },
        {
          question: 'A estabilidade vale mesmo em contrato de experiência?',
          answer: 'Sim! A gestante tem estabilidade mesmo em contrato de experiência, que não pode ser encerrado normalmente.',
        },
        {
          question: 'Acidente de trajeto dá estabilidade?',
          answer: 'Sim, o acidente de trajeto (casa-trabalho) é equiparado ao acidente de trabalho e garante 12 meses de estabilidade.',
        },
        {
          question: 'Posso abrir mão da estabilidade?',
          answer: 'A gestante pode negociar acordo, mas deve ter assistência sindical ou do Ministério Público para validade.',
        },
      ],
    },
    relatedActions: ['demissao-sem-justa-causa', 'acidente-trabalho'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'home-office-teletrabalho',
    nicheId: 'trabalhista',
    slug: 'home-office-teletrabalho-direitos',
    title: 'Home Office e Teletrabalho: Direitos e Deveres em 2025',
    metaTitle: 'Home Office | Teletrabalho Direitos CLT',
    metaDescription: 'Trabalha de casa? Conheça seus direitos no home office: equipamentos, jornada, horas extras, ajuda de custo e mais.',
    keywords: ['home office', 'teletrabalho', 'trabalho remoto', 'CLT home office', 'direitos teletrabalho', 'equipamentos home office'],
    excerpt: 'Entenda seus direitos no home office: quem deve fornecer equipamentos, controle de jornada, horas extras e ajuda de custo.',
    content: {
      intro: 'O teletrabalho cresceu muito no Brasil e a legislação foi atualizada. Conheça seus direitos e deveres ao trabalhar de casa, incluindo questões sobre equipamentos, jornada e custos.',
      whatIs: 'Teletrabalho ou home office é a prestação de serviços fora das dependências da empresa, utilizando tecnologias de informação e comunicação. Pode ser integral ou híbrido.',
      whenYouHaveRight: [
        'Quando há previsão no contrato de trabalho',
        'Quando a empresa fornece equipamentos ou ajuda de custo',
        'Quando há controle de jornada (mesmo remoto)',
        'Quando trabalha além do horário estabelecido',
        'Quando sofre acidente em casa durante o trabalho',
      ],
      documents: [
        'Contrato de trabalho ou aditivo',
        'Políticas internas de teletrabalho',
        'Registro de equipamentos fornecidos',
        'E-mails e mensagens fora do horário',
        'Controle de ponto remoto',
        'Recibos de gastos (internet, energia)',
      ],
      deadlines: 'A empresa deve comunicar com 15 dias de antecedência sobre retorno ao presencial. Demais prazos seguem regras da CLT.',
      faq: [
        {
          question: 'A empresa deve fornecer computador e internet?',
          answer: 'Sim, os equipamentos e infraestrutura devem ser fornecidos pela empresa ou ressarcidos. Isso deve estar no contrato.',
        },
        {
          question: 'Tenho direito a horas extras no home office?',
          answer: 'Depende do controle de jornada. Se há controle (ponto eletrônico, horário fixo), você tem direito a horas extras.',
        },
        {
          question: 'A empresa pode exigir câmera ligada o dia todo?',
          answer: 'Isso pode ser considerado abusivo e invasão de privacidade. O controle deve ser por resultados, não por vigilância constante.',
        },
        {
          question: 'Acidente em casa durante trabalho conta?',
          answer: 'Sim, acidentes durante a jornada de teletrabalho são considerados acidentes de trabalho.',
        },
      ],
    },
    relatedActions: ['horas-extras', 'assedio-moral'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'justa-causa',
    nicheId: 'trabalhista',
    slug: 'demissao-justa-causa',
    title: 'Demissão por Justa Causa: Quando é Válida e Como Reverter',
    metaTitle: 'Demissão por Justa Causa | Quando é Válida e Como Reverter',
    metaDescription: 'Foi demitido por justa causa? Saiba quando é válida, quais os motivos legais e como reverter na Justiça. Advogado explica.',
    keywords: ['justa causa', 'demissão por justa causa', 'reversão justa causa', 'falta grave', 'artigo 482 CLT', 'direitos justa causa'],
    excerpt: 'Entenda quando a demissão por justa causa é válida, quais seus direitos e como contestar se foi injusta.',
    content: {
      intro: 'A demissão por justa causa é a penalidade máxima ao trabalhador, que perde quase todos os direitos rescisórios. Porém, só é válida quando há falta grave comprovada. Muitas empresas aplicam de forma abusiva.',
      whatIs: 'Justa causa é a rescisão do contrato de trabalho por falta grave do empregado, prevista no artigo 482 da CLT. É a forma de demissão que mais prejudica o trabalhador.',
      whenYouHaveRight: [
        'Improbidade (roubo, fraude)',
        'Insubordinação ou indisciplina grave',
        'Abandono de emprego (30+ dias sem justificativa)',
        'Embriaguez habitual ou em serviço',
        'Violação de segredo da empresa',
        'Ato de concorrência desleal',
      ],
      documents: [
        'Carta de demissão por justa causa',
        'Advertências e suspensões anteriores',
        'Provas da defesa (e-mails, testemunhos)',
        'Carteira de trabalho',
        'Regulamento interno da empresa',
        'Qualquer documento que comprove sua versão',
      ],
      deadlines: 'A justa causa deve ser aplicada imediatamente após conhecimento da falta. Prazo de 2 anos após demissão para contestar judicialmente.',
      faq: [
        {
          question: 'Quais direitos perco na justa causa?',
          answer: 'Você perde: aviso prévio, multa 40% FGTS, saque do FGTS e seguro-desemprego. Só recebe saldo de salário e férias vencidas.',
        },
        {
          question: 'A empresa precisa provar a justa causa?',
          answer: 'Sim, o ônus da prova é da empresa. Ela precisa comprovar a falta grave para que a justa causa seja mantida.',
        },
        {
          question: 'Posso reverter a justa causa na Justiça?',
          answer: 'Sim, se a justa causa for injusta ou desproporcional, o juiz pode converter em demissão sem justa causa, com todos os direitos.',
        },
        {
          question: 'Fui demitido por justa causa sem aviso. É válido?',
          answer: 'A justa causa não exige aviso prévio. O que importa é se a falta grave realmente existiu e foi comprovada.',
        },
      ],
    },
    relatedActions: ['demissao-sem-justa-causa', 'assedio-moral'],
    updatedAt: '2025-01-01',
  },

  // NOVOS ARTIGOS - FAMÍLIA
  {
    id: 'uniao-estavel',
    nicheId: 'familia',
    slug: 'uniao-estavel-direitos',
    title: 'União Estável: Direitos, Reconhecimento e Dissolução',
    metaTitle: 'União Estável | Direitos, Como Formalizar e Dissolver',
    metaDescription: 'Vive em união estável? Conheça seus direitos: bens, herança, pensão. Saiba como formalizar e dissolver. Advogado de família.',
    keywords: ['união estável', 'direitos união estável', 'formalizar união estável', 'dissolução união estável', 'bens união estável', 'herança união estável'],
    excerpt: 'Entenda o que é união estável, quais são seus direitos, como formalizar e como proceder na dissolução.',
    content: {
      intro: 'A união estável é reconhecida pela Constituição como entidade familiar, com direitos semelhantes ao casamento. Conheça como formalizar, proteger seus direitos e dissolver quando necessário.',
      whatIs: 'União estável é a convivência pública, contínua e duradoura entre duas pessoas, com o objetivo de constituir família. Não exige tempo mínimo ou coabitação obrigatória.',
      whenYouHaveRight: [
        'Convivência pública e notória',
        'Relacionamento contínuo e duradouro',
        'Objetivo de constituir família',
        'Ausência de impedimentos para casar',
        'Independe de tempo mínimo',
      ],
      documents: [
        'Declaração de união estável (cartório)',
        'Comprovantes de convivência (contas, contratos)',
        'Fotos e registros do relacionamento',
        'Documentos dos bens adquiridos',
        'Certidão de nascimento dos filhos (se houver)',
        'Documentos pessoais de ambos',
      ],
      deadlines: 'Não há prazo para reconhecimento. Dissolução consensual pode ser feita em cartório; havendo filhos menores, isso é possível quando guarda, convivência e alimentos já tiverem sido resolvidos na Justiça (Resolução CNJ 571/2024).',
      faq: [
        {
          question: 'Precisa morar junto para ser união estável?',
          answer: 'Não necessariamente. O STF reconhece união estável mesmo sem coabitação, se houver convivência pública e objetivo de família.',
        },
        {
          question: 'União estável dá direito a herança?',
          answer: 'Sim, o companheiro tem direitos sucessórios semelhantes ao cônjuge, participando da herança dos bens.',
        },
        {
          question: 'Como formalizar a união estável?',
          answer: 'Pode ser feita por escritura pública em cartório ou por contrato particular. Recomenda-se a escritura para maior segurança.',
        },
        {
          question: 'Qual o regime de bens na união estável?',
          answer: 'O padrão é comunhão parcial de bens (bens adquiridos na união). Pode-se escolher outro regime por contrato.',
        },
      ],
    },
    relatedActions: ['divorcio-consensual', 'pensao-alimenticia'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'reconhecimento-paternidade',
    nicheId: 'familia',
    slug: 'reconhecimento-paternidade',
    title: 'Reconhecimento de Paternidade: Voluntário e Judicial',
    metaTitle: 'Reconhecimento de Paternidade | DNA e Direitos',
    metaDescription: 'Precisa reconhecer ou provar paternidade? Saiba como fazer: DNA, registro, pensão alimentícia. Advogado de família explica.',
    keywords: ['reconhecimento paternidade', 'teste DNA', 'investigação paternidade', 'registro pai', 'paternidade biológica', 'paternidade socioafetiva'],
    excerpt: 'Saiba como funciona o reconhecimento de paternidade, seja voluntário ou por ação judicial com exame de DNA.',
    content: {
      intro: 'O reconhecimento de paternidade é direito fundamental de toda pessoa. Pode ser feito voluntariamente ou por meio de ação judicial com exame de DNA. Conheça os procedimentos e direitos envolvidos.',
      whatIs: 'Reconhecimento de paternidade é o ato pelo qual alguém é declarado pai de uma pessoa. Pode ser biológico (comprovado por DNA) ou socioafetivo (baseado em vínculos de afeto).',
      whenYouHaveRight: [
        'Filhos que desejam conhecer o pai biológico',
        'Mães que buscam pensão alimentícia',
        'Pais que querem reconhecer filhos',
        'Registro tardio de paternidade',
        'Investigação de paternidade após falecimento',
      ],
      documents: [
        'Certidão de nascimento do filho',
        'Documentos do possível pai',
        'Provas de relacionamento (fotos, mensagens)',
        'Resultado de exame de DNA (se já realizado)',
        'Documentos da mãe',
        'Comprovante de residência',
      ],
      deadlines: 'O direito de investigar paternidade é imprescritível. Pode ser exercido a qualquer momento da vida.',
      faq: [
        {
          question: 'O exame de DNA é obrigatório?',
          answer: 'O suposto pai não pode ser forçado, mas a recusa gera presunção de paternidade conforme entendimento dos tribunais.',
        },
        {
          question: 'Posso fazer reconhecimento voluntário em cartório?',
          answer: 'Sim, o pai pode reconhecer o filho diretamente em cartório, mesmo sem presença da mãe (mas ela será notificada).',
        },
        {
          question: 'Reconhecimento dá direito a pensão retroativa?',
          answer: 'Sim, pode-se pedir alimentos desde a citação do processo. Em alguns casos, desde a concepção.',
        },
        {
          question: 'Pai registral pode ser trocado pelo biológico?',
          answer: 'Depende do caso. Se o registro foi feito de boa-fé e há vínculo socioafetivo, a troca pode ser negada.',
        },
      ],
    },
    relatedActions: ['pensao-alimenticia', 'guarda'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'inventario-heranca',
    nicheId: 'familia',
    slug: 'inventario-heranca',
    title: 'Inventário e Herança: Como Funciona a Sucessão de Bens',
    metaTitle: 'Inventário e Herança | Como Dividir Bens',
    metaDescription: 'Perdeu familiar e precisa fazer inventário? Saiba como funciona: prazos, custos, documentos e partilha de bens. Advogado explica.',
    keywords: ['inventário', 'herança', 'partilha de bens', 'sucessão', 'herdeiros', 'inventário extrajudicial', 'inventário judicial'],
    excerpt: 'Entenda como funciona o inventário, quem são os herdeiros, prazos, custos e como é feita a divisão dos bens.',
    content: {
      intro: 'O inventário é o procedimento legal para apurar e dividir os bens deixados por alguém que faleceu. Pode ser feito em cartório ou judicialmente, dependendo da situação.',
      whatIs: 'Inventário é o processo de levantar todos os bens, direitos e dívidas do falecido para fazer a partilha entre os herdeiros. É obrigatório para transferir a propriedade dos bens.',
      whenYouHaveRight: [
        'Cônjuge ou companheiro sobrevivente',
        'Filhos e descendentes',
        'Pais e ascendentes (na falta de descendentes)',
        'Irmãos e colaterais (na falta dos anteriores)',
        'Herdeiros testamentários',
      ],
      documents: [
        'Certidão de óbito',
        'Documentos dos herdeiros',
        'Certidão de casamento (se houver)',
        'Escrituras e documentos dos imóveis',
        'Extratos bancários e investimentos',
        'Documentos de veículos',
      ],
      deadlines: 'O inventário deve ser aberto em até 60 dias do óbito. Após isso, há multa sobre o ITCMD. Conclusão pode levar de meses a anos.',
      faq: [
        {
          question: 'Posso fazer inventário em cartório?',
          answer: 'Sim, quando há consenso entre os herdeiros. Desde a Resolução CNJ 571/2024, o inventário em cartório também pode ser feito em alguns casos com herdeiro menor ou com testamento, desde que cumpridas as condições da norma. Costuma ser mais rápido que o judicial.',
        },
        {
          question: 'Quanto custa um inventário?',
          answer: 'Os custos incluem o ITCMD (imposto estadual, com alíquota definida pela lei de cada estado), as custas do cartório ou do processo e os honorários advocatícios, combinados em contrato conforme a tabela da OAB.',
        },
        {
          question: 'O que acontece se não fizer inventário?',
          answer: 'Os herdeiros não podem vender ou transferir os bens. Além disso, há multa progressiva sobre o ITCMD pelo atraso.',
        },
        {
          question: 'Dívidas do falecido passam para os herdeiros?',
          answer: 'Só até o limite da herança. Os herdeiros não respondem com seus bens pessoais pelas dívidas do falecido.',
        },
      ],
    },
    relatedActions: ['testamento', 'divorcio-litigioso'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'testamento',
    nicheId: 'familia',
    slug: 'testamento-tipos-validade',
    title: 'Testamento: Tipos, Validade e Como Fazer',
    metaTitle: 'Testamento | Tipos, Como Fazer e Validade',
    metaDescription: 'Quer fazer testamento? Conheça os tipos, regras de validade e como proteger seus bens e herdeiros. Advogado explica.',
    keywords: ['testamento', 'tipos testamento', 'como fazer testamento', 'testamento público', 'testamento particular', 'herança testamento'],
    excerpt: 'Conheça os tipos de testamento, quando é válido, como fazer e quais são seus limites legais.',
    content: {
      intro: 'O testamento permite que você decida como será a distribuição dos seus bens após sua morte. Conheça os tipos, regras e limitações legais.',
      whatIs: 'Testamento é o documento pelo qual uma pessoa dispõe de seus bens e manifesta suas vontades para depois de sua morte. No Brasil, só pode dispor livremente de 50% dos bens.',
      whenYouHaveRight: [
        'Qualquer pessoa maior e capaz pode fazer',
        'Proteger determinados herdeiros',
        'Beneficiar pessoas fora da família',
        'Deixar bens para instituições',
        'Fazer reconhecimentos e declarações',
      ],
      documents: [
        'Documentos pessoais do testador',
        'Lista de bens e valores estimados',
        'Dados dos beneficiários',
        'Testemunhas (para testamento público)',
        'Documentos de identificação das testemunhas',
      ],
      deadlines: 'Testamento pode ser feito e alterado a qualquer momento em vida. Após falecimento, prazo de 5 anos para contestar.',
      faq: [
        {
          question: 'Posso deixar tudo para uma pessoa só?',
          answer: 'Não. A lei reserva 50% dos bens (legítima) para herdeiros necessários (filhos, cônjuge, pais). Você dispõe dos outros 50%.',
        },
        {
          question: 'Quais os tipos de testamento?',
          answer: 'Público (feito em cartório), cerrado (escrito e lacrado), particular (escrito e assinado com testemunhas) e especiais (marítimo, aeronáutico, militar).',
        },
        {
          question: 'O testamento pode ser contestado?',
          answer: 'Sim, se houver vícios (coação, incapacidade mental) ou se desrespeitar a legítima dos herdeiros necessários.',
        },
        {
          question: 'Posso deserdar um filho?',
          answer: 'Só por motivos graves previstos em lei (atentado contra a vida, injúria grave, etc.) e deve ser expressamente declarado.',
        },
      ],
    },
    relatedActions: ['inventario-heranca', 'divorcio-consensual'],
    updatedAt: '2025-01-01',
  },

  // NOVOS ARTIGOS - CIVIL
  {
    id: 'despejo-falta-pagamento',
    nicheId: 'civil',
    slug: 'despejo-falta-pagamento',
    title: 'Ação de Despejo por Falta de Pagamento: Guia para Proprietários',
    metaTitle: 'Despejo por Falta de Pagamento | Guia Proprietários',
    metaDescription: 'Inquilino não paga aluguel? Saiba como fazer despejo: procedimento, prazos, liminar e como receber valores atrasados.',
    keywords: ['despejo', 'falta pagamento', 'inquilino inadimplente', 'ação despejo', 'aluguel atrasado', 'ordem despejo'],
    excerpt: 'Guia completo para proprietários sobre como mover ação de despejo por falta de pagamento de aluguel.',
    content: {
      intro: 'Quando o inquilino deixa de pagar o aluguel, o proprietário pode mover ação de despejo. Conheça o procedimento, prazos e como recuperar os valores devidos.',
      whatIs: 'Ação de despejo é o processo judicial para retomar o imóvel alugado quando o inquilino descumpre o contrato, especialmente por falta de pagamento.',
      whenYouHaveRight: [
        'Atraso no pagamento do aluguel',
        'Não pagamento de encargos (IPTU, condomínio)',
        'Descumprimento de outras obrigações contratuais',
        'Uso indevido do imóvel',
        'Necessidade de reparos urgentes',
      ],
      documents: [
        'Contrato de locação',
        'Comprovantes de atraso (cobranças, notificações)',
        'Recibos dos aluguéis pagos',
        'Documentos do imóvel (matrícula)',
        'Documentos do proprietário',
        'Notificação extrajudicial (se houver)',
      ],
      deadlines: 'O inquilino tem 15 dias para pagar ou contestar após citação. Liminar de despejo pode ser concedida em 15 dias. Processo completo: 4-12 meses.',
      faq: [
        {
          question: 'Posso despejar sem ir à Justiça?',
          answer: 'Não. O despejo só pode ser feito por ordem judicial. Cortar água, luz ou trocar fechaduras é crime.',
        },
        {
          question: 'O inquilino pode pagar e evitar o despejo?',
          answer: 'Sim, pode purgar a mora (pagar tudo devido) em até 15 dias da citação. Mas só pode fazer isso uma vez a cada 24 meses.',
        },
        {
          question: 'Consigo liminar para despejo rápido?',
          answer: 'Sim. Na falta de pagamento, a Lei do Inquilinato permite liminar para desocupação em 15 dias quando o contrato está sem nenhuma garantia (art. 59, §1º, IX, da Lei 8.245/91), mediante caução de três aluguéis.',
        },
        {
          question: 'Posso cobrar aluguel durante o processo?',
          answer: 'Sim, pode cumular pedido de cobrança com despejo. Os aluguéis continuam devidos até a desocupação.',
        },
      ],
    },
    relatedActions: ['cobranca', 'danos-morais'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'usucapiao',
    nicheId: 'civil',
    slug: 'usucapiao-aquisicao-imovel',
    title: 'Usucapião: Como Adquirir Imóvel por Tempo de Posse',
    metaTitle: 'Usucapião | Como Adquirir Imóvel pela Posse',
    metaDescription: 'Mora há anos em imóvel sem registro? Conheça o usucapião: requisitos, tipos, prazos e como regularizar sua propriedade.',
    keywords: ['usucapião', 'aquisição imóvel', 'posse prolongada', 'regularização imóvel', 'usucapião urbano', 'usucapião rural'],
    excerpt: 'Entenda como funciona o usucapião, os diferentes tipos e como adquirir a propriedade de um imóvel pelo tempo de posse.',
    content: {
      intro: 'O usucapião é uma forma legal de adquirir a propriedade de um imóvel através da posse prolongada. Se você mora há anos em um imóvel sem registro, pode ter direito à propriedade.',
      whatIs: 'Usucapião é a aquisição da propriedade pelo exercício da posse por determinado período, de forma mansa, pacífica e ininterrupta, como se dono fosse.',
      whenYouHaveRight: [
        'Posse mansa e pacífica (sem contestação)',
        'Posse contínua pelo prazo legal',
        'Comportar-se como dono (animus domini)',
        'Não haver oposição do proprietário',
        'Imóvel passível de usucapião (não público)',
      ],
      documents: [
        'Comprovantes de posse (contas, reformas)',
        'Fotos antigas do imóvel',
        'Declarações de vizinhos',
        'Contrato de compra (se houver)',
        'IPTU em seu nome',
        'Cadastro na prefeitura',
      ],
      deadlines: 'Prazos variam: 5 anos (especial urbano), 10 anos (ordinário), 15 anos (extraordinário). Processo: 1 a 3 anos.',
      faq: [
        {
          question: 'Quais os tipos de usucapião?',
          answer: 'Extraordinário (15 anos), ordinário (10 anos com justo título), especial urbano (5 anos, até 250m²), especial rural (5 anos, até 50 hectares).',
        },
        {
          question: 'Posso fazer usucapião em cartório?',
          answer: 'Sim, o usucapião extrajudicial é possível se não houver oposição. É feito em cartório de registro de imóveis.',
        },
        {
          question: 'Imóvel financiado pode sofrer usucapião?',
          answer: 'Depende. Imóvel de financiamento do Sistema Financeiro da Habitação ligado a recursos públicos costuma ser tratado pelos tribunais como insuscetível de usucapião, e a alienação fiduciária ao banco também cria obstáculo. Cada caso precisa ser analisado com os documentos do imóvel.',
        },
        {
          question: 'Preciso pagar pelo imóvel no usucapião?',
          answer: 'Não paga pelo imóvel em si, mas há custos de processo (judicial ou cartório), impostos e honorários.',
        },
      ],
    },
    relatedActions: ['regularizacao-imovel', 'cobranca'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'erro-medico',
    nicheId: 'civil',
    slug: 'erro-medico-indenizacao',
    title: 'Erro Médico: Como Buscar Indenização',
    metaTitle: 'Erro Médico | Indenização por Negligência Médica',
    metaDescription: 'Sofreu erro médico ou negligência? Saiba como provar, quais indenizações pode receber e como processar hospital ou médico.',
    keywords: ['erro médico', 'negligência médica', 'imperícia médica', 'indenização médica', 'processo contra médico', 'danos médicos'],
    excerpt: 'Saiba como identificar erro médico, reunir provas e buscar indenização por danos causados por negligência ou imperícia.',
    content: {
      intro: 'O erro médico pode causar danos graves à saúde e à vida. Quando há negligência, imperícia ou imprudência, o paciente tem direito à indenização.',
      whatIs: 'Erro médico é a conduta profissional inadequada que causa dano ao paciente. Pode ser por negligência (descuido), imperícia (falta de habilidade) ou imprudência (precipitação).',
      whenYouHaveRight: [
        'Diagnóstico errado que causou dano',
        'Cirurgia que causou sequelas evitáveis',
        'Tratamento inadequado',
        'Falta de informação sobre riscos',
        'Infecção hospitalar por negligência',
        'Abandono de paciente',
      ],
      documents: [
        'Prontuário médico completo',
        'Exames e laudos',
        'Receitas e prescrições',
        'Fotos das lesões ou sequelas',
        'Notas fiscais de tratamentos',
        'Declarações de testemunhas',
      ],
      deadlines: 'Prazo de 5 anos para ação contra profissional liberal ou hospital. Contra plano de saúde (relação de consumo), também 5 anos.',
      faq: [
        {
          question: 'Como provar erro médico?',
          answer: 'Através de perícia médica que compare a conduta realizada com a esperada. Prontuário médico é prova essencial.',
        },
        {
          question: 'Posso processar médico e hospital juntos?',
          answer: 'Sim, ambos podem ser responsabilizados. O hospital responde pelos atos de seus profissionais.',
        },
        {
          question: 'Qual o valor da indenização por erro médico?',
          answer: 'Não há tabela: podem ser pedidos danos morais, materiais (despesas, lucros cessantes) e estéticos. O valor depende das circunstâncias de cada caso e é fixado pelo juiz; não há valor garantido.',
        },
        {
          question: 'Resultado ruim é sempre erro médico?',
          answer: 'Não. Medicina não é ciência exata. Erro médico exige prova de conduta inadequada, não apenas resultado indesejado.',
        },
      ],
    },
    relatedActions: ['danos-morais', 'cobranca'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'acidente-transito',
    nicheId: 'civil',
    slug: 'acidente-transito-indenizacao',
    title: 'Acidente de Trânsito: Como Buscar Indenização',
    metaTitle: 'Acidente de Trânsito | Indenização e Direitos',
    metaDescription: 'Sofreu acidente de trânsito? Saiba como buscar indenização: danos materiais, morais, lucros cessantes e seguros.',
    keywords: ['acidente trânsito', 'indenização acidente', 'seguro obrigatório', 'danos materiais', 'seguro acidente', 'colisão veículos'],
    excerpt: 'Guia completo sobre direitos após acidente de trânsito: indenizações, seguros e como proceder.',
    content: {
      intro: 'Acidentes de trânsito podem gerar diversos direitos: seguro do veículo, seguro obrigatório quando vigente e indenização do causador por danos materiais e morais. Saiba como proceder.',
      whatIs: 'Indenização por acidente de trânsito é a compensação financeira pelos danos sofridos, que pode incluir reparo do veículo, despesas médicas, lucros cessantes e danos morais.',
      whenYouHaveRight: [
        'Colisão causada por terceiro',
        'Atropelamento',
        'Danos ao veículo',
        'Lesões corporais',
        'Morte de familiar em acidente',
        'Perda de capacidade laborativa',
      ],
      documents: [
        'Boletim de ocorrência',
        'Fotos do acidente e danos',
        'Orçamentos de reparo',
        'Laudos médicos',
        'Comprovantes de despesas',
        'Dados do causador e testemunhas',
      ],
      deadlines: 'Prazo de 3 anos para ação de indenização contra o causador (art. 206, §3º, V, do Código Civil).',
      faq: [
        {
          question: 'Ainda existe o seguro obrigatório (antigo DPVAT)?',
          answer: 'O DPVAT e a Seguradora Líder foram extintos e as regras do seguro obrigatório mudaram nos últimos anos. Antes de pedir, confira a situação vigente na data do acidente; acidentes antigos seguem a regra da época.',
        },
        {
          question: 'Posso cobrar indenização mesmo tendo culpa parcial?',
          answer: 'Sim, se o outro também teve culpa, pode cobrar proporcionalmente. É a chamada culpa concorrente.',
        },
        {
          question: 'O que são lucros cessantes?',
          answer: 'É o que você deixou de ganhar por causa do acidente (dias parados, perda de cliente, etc.). Deve ser comprovado.',
        },
        {
          question: 'Posso processar se o outro fugiu?',
          answer: 'Pode tentar identificá-lo pela placa. Se não conseguir, o seguro próprio pode cobrir, conforme a apólice. Registre boletim de ocorrência.',
        },
      ],
    },
    relatedActions: ['danos-morais', 'cobranca'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'contratos-distrato',
    nicheId: 'civil',
    slug: 'contratos-distrato-rescisao',
    title: 'Contratos e Distrato: Direitos na Rescisão Contratual',
    metaTitle: 'Distrato Contratual | Rescisão de Contratos',
    metaDescription: 'Quer rescindir contrato? Conheça seus direitos: distrato, multa, devolução de valores. Advogado explica como sair de contratos.',
    keywords: ['distrato', 'rescisão contrato', 'quebra contrato', 'multa contratual', 'cancelamento contrato', 'direito contratos'],
    excerpt: 'Entenda seus direitos ao rescindir contratos: quando pode sair, multas aplicáveis e como negociar o distrato.',
    content: {
      intro: 'O distrato é o desfazimento do contrato por acordo entre as partes ou por descumprimento. Conheça quando você pode sair de um contrato e quais são as consequências.',
      whatIs: 'Distrato é a extinção do contrato, que pode ocorrer por acordo mútuo, por descumprimento de uma das partes, ou por cláusula resolutória prevista no próprio contrato.',
      whenYouHaveRight: [
        'Quando a outra parte descumpre o contrato',
        'Por acordo mútuo entre as partes',
        'Por onerosidade excessiva (mudança drástica)',
        'Por vício ou defeito no objeto',
        'Por caso fortuito ou força maior',
        'Por cláusula de arrependimento',
      ],
      documents: [
        'Contrato original',
        'Comunicações entre as partes',
        'Comprovantes de pagamento',
        'Provas do descumprimento (se houver)',
        'Notificação de rescisão',
        'Termo de distrato (se já houver)',
      ],
      deadlines: 'Prazo para pedir rescisão por vício: 30 dias (móveis) ou 1 ano (imóveis) da descoberta. Demais casos: 10 anos.',
      faq: [
        {
          question: 'Posso sair de qualquer contrato pagando multa?',
          answer: 'Depende do tipo de contrato. Alguns têm cláusula de arrependimento, outros não. A multa deve ser proporcional.',
        },
        {
          question: 'A multa contratual pode ser reduzida?',
          answer: 'Sim. O juiz deve reduzir a multa quando ela for manifestamente excessiva ou quando parte da obrigação já tiver sido cumprida (art. 413 do Código Civil). Não há um percentual fixo: depende do contrato e do caso.',
        },
        {
          question: 'E se a empresa que descumpriu o contrato?',
          answer: 'Você pode pedir a rescisão e ainda cobrar perdas e danos, sem pagar qualquer multa.',
        },
        {
          question: 'Contrato verbal pode ser rescindido?',
          answer: 'Sim, contratos verbais têm a mesma validade. O desafio é provar os termos acordados.',
        },
      ],
    },
    relatedActions: ['danos-morais', 'cobranca'],
    updatedAt: '2025-01-01',
  },

  // NOVOS ARTIGOS - PREVIDENCIÁRIO
  {
    "id": "aposentadoria-invalidez",
    "nicheId": "previdenciario",
    "slug": "aposentadoria-por-invalidez-incapacidade-permanente",
    "title": "Aposentadoria por Invalidez: Direitos na Incapacidade Permanente",
    "metaTitle": "Aposentadoria por Invalidez | Incapacidade Permanente INSS",
    "metaDescription": "Não consegue mais trabalhar por doença ou acidente? Entenda os requisitos da aposentadoria por incapacidade permanente, a perícia, o valor, o adicional de 25% e a revisão.",
    "keywords": [
      "aposentadoria por invalidez",
      "incapacidade permanente",
      "perícia INSS",
      "adicional de 25%",
      "grande invalidez",
      "carência",
      "auxílio-doença",
      "B32 INSS"
    ],
    "excerpt": "Guia sobre a aposentadoria por incapacidade permanente: quem tem direito, carência, perícia, cálculo do valor, adicional de 25% e perícias de revisão.",
    "content": {
      "intro": "A aposentadoria por invalidez, chamada desde a Reforma da Previdência de aposentadoria por incapacidade permanente, protege quem não consegue mais trabalhar por causa de doença ou acidente e não pode ser reabilitado para outra atividade. É um benefício que depende fortemente da prova médica e da perícia do INSS, por isso a preparação faz diferença.",
      "whatIs": "Prevista nos artigos 42 a 47 da Lei 8.213/1991, é o benefício pago ao segurado considerado incapaz de forma total e permanente para o trabalho e insuscetível de reabilitação para atividade que lhe garanta o sustento. Diferente do auxílio por incapacidade temporária (antigo auxílio-doença), aqui a incapacidade é considerada definitiva. Muitas vezes o segurado recebe primeiro o auxílio temporário, que depois é convertido em aposentadoria.",
      "sections": [
        {
          "title": "Requisitos",
          "paragraphs": [
            "São três: qualidade de segurado na data do início da incapacidade, carência de 12 contribuições mensais e incapacidade total e permanente comprovada em perícia. A carência é dispensada quando a incapacidade decorre de acidente de qualquer natureza, doença profissional ou do trabalho, ou das doenças graves listadas em lei e em portaria ministerial, como neoplasia maligna, cardiopatia grave, doença de Parkinson, esclerose múltipla e HIV/aids (art. 26, II, e art. 151 da Lei 8.213/1991).",
            "A doença que já existia antes da filiação ao INSS não dá direito ao benefício, salvo quando a incapacidade resulta do agravamento ou da progressão dessa doença depois da filiação (art. 42, §2º)."
          ]
        },
        {
          "title": "Incapacidade total e permanente na prática",
          "paragraphs": [
            "A análise não é apenas médica. Idade, escolaridade, profissão e condições sociais também pesam: a Súmula 47 da TNU orienta que, reconhecida a incapacidade parcial, o juiz analise as condições pessoais e sociais do segurado para decidir sobre a aposentadoria. Um trabalhador braçal de 58 anos com pouca escolaridade e uma lesão grave na coluna, por exemplo, pode ter dificuldade real de reabilitação.",
            "Na perícia, leve laudos atualizados com CID, descrição das limitações, tratamentos realizados e prognóstico, além de exames e receitas. Relatórios que expliquem por que a pessoa não consegue exercer a sua atividade são mais úteis do que atestados genéricos."
          ]
        },
        {
          "title": "Valor do benefício e adicional de 25%",
          "paragraphs": [
            "Após a reforma, o valor corresponde a 60% da média de todos os salários de contribuição, mais 2% por ano que exceder 15 anos (mulheres) ou 20 anos (homens) de contribuição. Quando a incapacidade decorre de acidente do trabalho, doença profissional ou doença do trabalho, o valor é de 100% da média. O benefício não pode ser inferior ao salário mínimo.",
            "Quem precisa da assistência permanente de outra pessoa para as atividades do dia a dia tem direito a um acréscimo de 25% (art. 45), mesmo que o total ultrapasse o teto do INSS. O adicional cessa com a morte do aposentado e não passa para a pensão. O STF decidiu (Tema 1.095) que ele não se estende a outras espécies de aposentadoria."
          ]
        },
        {
          "title": "Revisões e retorno ao trabalho",
          "paragraphs": [
            "O aposentado por incapacidade pode ser convocado para perícias de revisão (art. 101). Ficam dispensados, em regra, os que têm mais de 60 anos, os que têm mais de 55 anos e recebem benefício por incapacidade há mais de 15 anos, e as pessoas com HIV/aids, ressalvadas situações previstas em lei. Se a perícia constatar recuperação, a cessação é gradual em certos casos, conforme o artigo 47.",
            "O retorno voluntário ao trabalho leva ao cancelamento automático do benefício a partir da volta (art. 46). Antes de aceitar qualquer atividade remunerada, converse com um advogado."
          ]
        },
        {
          "title": "Se o INSS negar",
          "paragraphs": [
            "A negativa geralmente se baseia na conclusão pericial de que não há incapacidade, de que ela é apenas parcial ou temporária, ou de que começou antes da filiação. É possível recorrer administrativamente ou ajuizar ação, na qual um perito nomeado pelo juiz fará nova avaliação. Causas de até 60 salários mínimos tramitam no Juizado Especial Federal. Se a incapacidade decorre de acidente do trabalho, a competência é da Justiça Estadual. Em qualquer caso, laudos atualizados e coerentes entre si são a base do pedido."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Incapacidade total para o trabalho, comprovada em perícia",
        "Incapacidade de caráter permanente",
        "Impossibilidade de reabilitação para outra atividade",
        "Carência de 12 contribuições, dispensada em acidentes e doenças graves previstas em lei",
        "Qualidade de segurado na data do início da incapacidade",
        "Doença posterior à filiação ou agravada depois dela",
        "Necessidade de ajuda permanente de terceiros (adicional de 25%)"
      ],
      "documents": [
        "Laudos médicos detalhados e atualizados, com CID e prognóstico",
        "Exames comprobatórios (ressonância, tomografia etc.)",
        "Receitas de medicamentos de uso contínuo",
        "Histórico de tratamentos, cirurgias e internações",
        "Carteira de trabalho, CNIS e carnês, se contribuinte individual",
        "CAT, quando a incapacidade decorre de acidente do trabalho",
        "Documentos do INSS, se já recebe auxílio por incapacidade"
      ],
      "deadlines": "O pedido pode ser feito a qualquer momento. Se negado, o recurso administrativo deve ser apresentado em 30 dias, ou pode ser ajuizada ação. As parcelas em atraso prescrevem em 5 anos. Após a concessão, o benefício pode ser revisto em perícias periódicas, salvo nas hipóteses de dispensa previstas em lei.",
      "faq": [
        {
          "question": "Qual a diferença entre auxílio-doença e aposentadoria por invalidez?",
          "answer": "O auxílio por incapacidade temporária é pago enquanto há expectativa de recuperação. A aposentadoria por incapacidade permanente é concedida quando a incapacidade é total, definitiva e sem possibilidade de reabilitação."
        },
        {
          "question": "Qual o valor da aposentadoria por invalidez?",
          "answer": "Em regra, 60% da média salarial mais 2% por ano acima de 15 anos (mulher) ou 20 anos (homem) de contribuição. Se a causa for acidente do trabalho ou doença ocupacional, 100% da média."
        },
        {
          "question": "Preciso ter 12 contribuições?",
          "answer": "Em regra sim, mas a carência é dispensada em acidentes de qualquer natureza, doenças ocupacionais e doenças graves listadas em lei, como câncer, cardiopatia grave e Parkinson."
        },
        {
          "question": "O que é o adicional de 25%?",
          "answer": "É um acréscimo para quem precisa da assistência permanente de outra pessoa. Vale apenas para a aposentadoria por incapacidade permanente e não passa para a pensão por morte."
        },
        {
          "question": "A aposentadoria por invalidez pode ser cessada?",
          "answer": "Sim, se a perícia de revisão constatar recuperação ou se o aposentado voltar a trabalhar voluntariamente. Há dispensa de revisão para maiores de 60 anos e em outras hipóteses legais."
        },
        {
          "question": "Posso trabalhar recebendo aposentadoria por invalidez?",
          "answer": "Não. O retorno voluntário à atividade leva ao cancelamento automático do benefício (art. 46 da Lei 8.213/1991)."
        }
      ]
    },
    "relatedActions": [
      "auxilio-doenca",
      "bpc-loas",
      "inss-negou-beneficio"
    ],
    "updatedAt": "2026-11-05"
  },
  {
    "id": "pensao-morte",
    "nicheId": "previdenciario",
    "slug": "pensao-por-morte",
    "title": "Pensão por Morte: Quem Tem Direito, Valor e Duração",
    "metaTitle": "Pensão por Morte INSS | Dependentes, Valor e Duração",
    "metaDescription": "Perdeu um familiar segurado do INSS? Entenda quem tem direito à pensão por morte, como é calculado o valor, quanto tempo dura, prazos e a acumulação com aposentadoria.",
    "keywords": [
      "pensão por morte",
      "dependentes INSS",
      "pensão viúva",
      "quanto recebe pensão",
      "duração pensão por morte",
      "união estável pensão",
      "acumular pensão e aposentadoria"
    ],
    "excerpt": "Entenda as classes de dependentes, o cálculo da pensão após a reforma, a tabela de duração para cônjuges, os prazos para pedir e as regras de acumulação.",
    "content": {
      "intro": "A pensão por morte garante renda à família de quem contribuía ao INSS ou já recebia benefício. As regras mudaram em 2015 e de novo com a Reforma da Previdência de 2019, especialmente quanto ao valor, à duração para cônjuges e à acumulação com outros benefícios. Conhecer esses pontos evita surpresas e perda de valores retroativos.",
      "whatIs": "Prevista nos artigos 74 a 79 da Lei 8.213/1991, a pensão por morte é paga mensalmente aos dependentes do segurado falecido. Não exige carência, mas o falecido precisava ter qualidade de segurado na data do óbito, ou já ter direito adquirido a alguma aposentadoria. Também é devida quando o segurado estava em período de graça, isto é, sem contribuir, mas ainda coberto pelo INSS.",
      "sections": [
        {
          "title": "Quem são os dependentes",
          "paragraphs": [
            "O artigo 16 da Lei 8.213/1991 divide os dependentes em três classes. Na primeira estão cônjuge, companheiro ou companheira, inclusive em união homoafetiva, e filhos menores de 21 anos ou inválidos, ou com deficiência intelectual, mental ou grave. Para essa classe, a dependência econômica é presumida. Enteado e menor tutelado se equiparam a filho, se comprovada a dependência.",
            "Na segunda classe estão os pais e, na terceira, os irmãos menores de 21 anos ou inválidos ou com deficiência. Essas classes precisam comprovar dependência econômica e só recebem se não houver dependente de classe anterior. O ex-cônjuge que recebia pensão alimentícia concorre em igualdade com o novo cônjuge ou companheiro."
          ]
        },
        {
          "title": "Como o valor é calculado",
          "paragraphs": [
            "Para óbitos após a reforma, a pensão corresponde a uma cota familiar de 50% do valor da aposentadoria que o segurado recebia, ou daquela a que teria direito se fosse aposentado por incapacidade permanente, mais 10% por dependente, até 100%. Exemplo: viúva sozinha recebe 60%; viúva com um filho, 70%; com dois filhos, 80%. Quando um dependente perde a qualidade, sua cota não é redistribuída.",
            "Se houver dependente inválido ou com deficiência intelectual, mental ou grave, a pensão é de 100% até o limite do teto do INSS. O valor total nunca é inferior ao salário mínimo quando a pensão é a única fonte de renda formal do dependente."
          ]
        },
        {
          "title": "Por quanto tempo a pensão é paga",
          "paragraphs": [
            "Para filhos e irmãos, a pensão dura até os 21 anos, salvo invalidez ou deficiência. Para cônjuge ou companheiro, se o falecido tinha menos de 18 contribuições ou o casamento ou união estável tinha menos de 2 anos, a pensão dura apenas 4 meses, exceto quando o óbito decorre de acidente ou doença do trabalho.",
            "Cumpridos esses requisitos, a duração depende da idade do cônjuge na data do óbito, conforme tabela atualizada por portaria: menos de 22 anos, 3 anos; de 22 a 27 anos, 6 anos; de 28 a 30 anos, 10 anos; de 31 a 41 anos, 15 anos; de 42 a 44 anos, 20 anos; a partir de 45 anos, vitalícia."
          ]
        },
        {
          "title": "Acumulação com aposentadoria e outros benefícios",
          "paragraphs": [
            "É permitido acumular pensão por morte com aposentadoria própria, mas desde a reforma o beneficiário recebe integralmente o benefício mais vantajoso e apenas uma parte do outro, calculada por faixas: 100% até um salário mínimo, 60% do que exceder um até dois salários mínimos, 40% entre dois e três, 20% entre três e quatro e 10% do que passar de quatro salários mínimos (art. 24 da EC 103/2019).",
            "Não é permitido receber mais de uma pensão deixada por cônjuge ou companheiro no mesmo regime, ressalvado o direito de optar pela mais vantajosa. Quem tinha direito adquirido antes da reforma mantém as regras anteriores."
          ]
        },
        {
          "title": "Como pedir",
          "paragraphs": [
            "O requerimento é feito pelo Meu INSS ou pela central 135, com a certidão de óbito e os documentos dos dependentes. Se o falecido não tinha vínculos ou contribuições em dia, vale verificar se estava em período de graça ou se tinha direito adquirido a alguma aposentadoria, situações que garantem a pensão mesmo sem contribuições recentes."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Cônjuge ou companheiro(a), inclusive em união homoafetiva",
        "Filhos menores de 21 anos",
        "Filhos inválidos ou com deficiência intelectual, mental ou grave, sem limite de idade",
        "Ex-cônjuge que recebia pensão alimentícia do falecido",
        "Pais, se comprovada a dependência econômica e não houver dependentes da 1ª classe",
        "Irmãos menores de 21 anos ou inválidos, se dependentes e sem dependentes das classes anteriores",
        "Falecido com qualidade de segurado, em período de graça ou com direito adquirido a aposentadoria"
      ],
      "documents": [
        "Certidão de óbito do segurado",
        "Documentos pessoais do falecido e dos dependentes",
        "Certidão de casamento ou provas da união estável (conta conjunta, endereço comum, declaração de IR, filhos)",
        "Certidão de nascimento dos filhos",
        "Carteira de trabalho, CNIS ou carnês do falecido",
        "Prova de dependência econômica, no caso de pais e irmãos",
        "Decisão ou acordo de alimentos, no caso de ex-cônjuge"
      ],
      "deadlines": "Para receber desde a data do óbito, o pedido deve ser feito em até 90 dias; para filhos menores de 16 anos, o prazo é de 180 dias. Depois disso, a pensão é paga a partir da data do requerimento (art. 74 da Lei 8.213/1991). Não há prazo final para pedir o benefício, mas as parcelas atrasadas prescrevem em 5 anos.",
      "faq": [
        {
          "question": "Quem tem direito à pensão por morte?",
          "answer": "Em primeiro lugar, cônjuge, companheiro e filhos menores de 21 anos ou inválidos/com deficiência. Pais e irmãos só recebem se não houver dependentes da primeira classe e se comprovarem dependência econômica."
        },
        {
          "question": "Qual o valor da pensão por morte?",
          "answer": "Em regra, 50% da aposentadoria do falecido (ou da que ele teria por incapacidade permanente) mais 10% por dependente, até 100%. Com dependente inválido ou com deficiência grave, 100%."
        },
        {
          "question": "Por quanto tempo recebo a pensão?",
          "answer": "Depende da idade do cônjuge, do tempo de união e das contribuições. Pode durar 4 meses, de 3 a 20 anos, ou ser vitalícia a partir dos 45 anos na data do óbito. Filhos recebem até os 21 anos, salvo invalidez ou deficiência."
        },
        {
          "question": "Companheiro em união estável tem direito?",
          "answer": "Sim. É preciso comprovar a união com documentos, e o INSS exige início de prova material produzida em período não superior a 24 meses antes do óbito."
        },
        {
          "question": "Ex-cônjuge tem direito à pensão?",
          "answer": "Sim, se recebia pensão alimentícia do falecido. Nesse caso, divide a pensão em igualdade com o cônjuge ou companheiro atual."
        },
        {
          "question": "Posso acumular pensão com aposentadoria?",
          "answer": "Sim, mas desde a reforma você recebe 100% do benefício maior e uma parte do menor, calculada por faixas de salário mínimo."
        }
      ]
    },
    "relatedActions": [
      "aposentadoria",
      "auxilio-doenca",
      "bpc-loas"
    ],
    "updatedAt": "2026-11-05"
  },
  {
    id: 'salario-maternidade',
    nicheId: 'previdenciario',
    slug: 'salario-maternidade',
    title: 'Salário-Maternidade: Quem Tem Direito e Como Pedir',
    metaTitle: 'Salário-Maternidade | Licença Maternidade INSS',
    metaDescription: 'Vai ter filho? Conheça o salário-maternidade: quem tem direito, valor, duração e como solicitar. Vale para CLT, MEI e desempregada.',
    keywords: ['salário maternidade', 'licença maternidade', 'benefício gestante', 'INSS maternidade', 'auxílio maternidade', 'licença adoção'],
    excerpt: 'Guia completo sobre salário-maternidade: requisitos, valor, duração e como solicitar para CLT, autônoma ou desempregada.',
    content: {
      intro: 'O salário-maternidade é o benefício pago à segurada durante o afastamento por nascimento de filho, adoção ou aborto. Trabalhadoras CLT, autônomas e até desempregadas podem ter direito.',
      whatIs: 'Salário-maternidade é o benefício previdenciário pago à pessoa que se afasta do trabalho por motivo de nascimento de filho, adoção, guarda judicial ou aborto não criminoso.',
      whenYouHaveRight: [
        'Nascimento de filho',
        'Adoção de criança',
        'Guarda judicial para adoção',
        'Aborto não criminoso',
        'Natimorto',
      ],
      documents: [
        'Certidão de nascimento ou termo de guarda',
        'Atestado médico (aborto)',
        'Documentos pessoais',
        'Carteira de trabalho (se CLT)',
        'Carnês de contribuição (se autônoma)',
        'Comprovante de contribuições',
      ],
      deadlines: 'Duração: 120 dias (parto), 120 dias (adoção), 14 dias (aborto). Pedido até 5 anos após o fato gerador.',
      faq: [
        {
          question: 'Qual o valor do salário-maternidade?',
          answer: 'Para CLT: salário integral. Para autônomas: média das últimas 12 contribuições. Mínimo: salário mínimo.',
        },
        {
          question: 'Desempregada tem direito?',
          answer: 'Sim, se estiver no período de graça (mantendo qualidade de segurada) e tiver carência de 10 meses.',
        },
        {
          question: 'Pai tem direito ao salário-maternidade?',
          answer: 'Sim, em caso de morte da mãe, adoção por homem solo, ou em casais homoafetivos masculinos.',
        },
        {
          question: 'MEI tem direito?',
          answer: 'Sim, com carência de 10 contribuições. Valor: um salário mínimo.',
        },
      ],
    },
    relatedActions: ['auxilio-doenca', 'aposentadoria'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'revisao-aposentadoria',
    nicheId: 'previdenciario',
    slug: 'revisao-aposentadoria',
    title: 'Revisão de Aposentadoria: Quando Vale a Pena Revisar',
    metaTitle: 'Revisão de Aposentadoria | Aumentar Benefício INSS',
    metaDescription: 'Aposentadoria está baixa? Conheça as revisões ainda possíveis (erros no CNIS, tempo especial, teto) e saiba se vale a pena revisar.',
    keywords: ['revisão aposentadoria', 'revisão INSS', 'aumentar aposentadoria', 'revisão vida toda', 'revisão teto', 'buraco negro INSS'],
    excerpt: 'Conheça as principais teses de revisão de aposentadoria e descubra se você pode aumentar seu benefício do INSS.',
    content: {
      intro: 'Muitas aposentadorias foram calculadas com erros ou podem ser recalculadas por teses jurídicas. Conheça as principais revisões e veja se você tem direito.',
      whatIs: 'Revisão de aposentadoria é o pedido para recalcular o valor do benefício, seja por erro do INSS, inclusão de novos períodos, ou aplicação de teses jurídicas favoráveis.',
      whenYouHaveRight: [
        'Erro no cálculo do INSS',
        'Contribuições não computadas',
        'Aplicação de teses ainda válidas (ex.: revisão do teto); a Vida Toda foi afastada pelo STF em 2024',
        'Inclusão de período especial não reconhecido',
        'Atualização de salários antigos',
      ],
      documents: [
        'Carta de concessão do benefício',
        'CNIS (extrato previdenciário)',
        'Carteira de trabalho completa',
        'Carnês de contribuição antigos',
        'Holerites antigos (se tiver)',
        'Cálculo atual do benefício',
      ],
      deadlines: 'Prazo de 10 anos para pedir revisão, contados do primeiro pagamento. Algumas teses têm prazos específicos.',
      faq: [
        {
          question: 'O que é a revisão da vida toda?',
          answer: 'Era a tese de incluir os salários anteriores a julho/1994 no cálculo. Em 2024, no julgamento das ADIs 2110 e 2111, o STF afastou essa revisão.',
        },
        {
          question: 'Vale a pena revisar minha aposentadoria?',
          answer: 'Depende. É preciso fazer simulação. Nem toda revisão aumenta o benefício, algumas podem até diminuir.',
        },
        {
          question: 'Posso perder benefício ao pedir revisão?',
          answer: 'Na revisão judicial pedida pelo segurado, o juiz não pode piorar o benefício por conta própria. Mas o INSS pode corrigir erros em revisão administrativa, inclusive para menos, então é preciso analisar o cálculo antes de pedir.',
        },
        {
          question: 'Quanto custa uma análise de revisão?',
          answer: 'Os honorários são combinados em contrato escrito e seguem a tabela da OAB; em ações previdenciárias é comum parte deles ser vinculada ao resultado.',
        },
      ],
    },
    relatedActions: ['aposentadoria', 'auxilio-doenca'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'aposentadoria-rural',
    nicheId: 'previdenciario',
    slug: 'aposentadoria-rural',
    title: 'Aposentadoria Rural: Regras Especiais para Trabalhadores do Campo',
    metaTitle: 'Aposentadoria Rural | Idade e Regras Especiais',
    metaDescription: 'Trabalhou na roça? Conheça a aposentadoria rural: idade reduzida (55/60 anos), documentos aceitos e como provar atividade rural.',
    keywords: ['aposentadoria rural', 'trabalhador rural', 'agricultor INSS', 'segurado especial', 'aposentadoria agricultor', 'prova rural'],
    excerpt: 'Entenda as regras especiais da aposentadoria rural: idade reduzida, documentos aceitos e como comprovar trabalho no campo.',
    content: {
      intro: 'A aposentadoria rural tem regras mais favoráveis: idade reduzida (55 para mulheres, 60 para homens) e não exige contribuições mensais. Saiba como comprovar e solicitar.',
      whatIs: 'Aposentadoria rural é o benefício para trabalhadores do campo (agricultores, pescadores, garimpeiros) que exercem atividade em regime de economia familiar ou como empregados rurais.',
      whenYouHaveRight: [
        'Trabalho rural por 15 anos',
        'Idade de 55 anos (mulher) ou 60 anos (homem)',
        'Segurado especial (economia familiar)',
        'Empregado rural com carteira assinada',
        'Contribuinte individual rural',
      ],
      documents: [
        'Certidão de casamento com profissão rural',
        'Contratos de arrendamento ou parceria',
        'Notas de produtor rural',
        'Declaração do sindicato rural',
        'Carteira de trabalho (empregado rural)',
        'INCRA, ITR, cadastro de imóvel rural',
      ],
      deadlines: 'Benefício pode ser pedido a partir da idade mínima. Não há prazo para requerer.',
      faq: [
        {
          question: 'Preciso ter contribuído para o INSS?',
          answer: 'Segurado especial não precisa. Basta comprovar 15 anos de trabalho rural. Empregado rural precisa ter contribuições.',
        },
        {
          question: 'Posso misturar tempo rural e urbano?',
          answer: 'Sim, é possível somar períodos rurais e urbanos, mas as regras de cálculo podem variar.',
        },
        {
          question: 'Qual o valor da aposentadoria rural?',
          answer: 'Para segurado especial: um salário mínimo. Para quem contribuiu acima do mínimo: conforme contribuições.',
        },
        {
          question: 'Como provar trabalho rural antigo?',
          answer: 'Através de início de prova material (documentos) complementada por testemunhas. Não vale só testemunha.',
        },
      ],
    },
    relatedActions: ['aposentadoria', 'bpc-loas'],
    updatedAt: '2025-01-01',
  },

  // NOVOS ARTIGOS - CONSUMIDOR
  {
    "id": "direito-arrependimento-7-dias",
    "nicheId": "consumidor",
    "slug": "direito-arrependimento-compras-online-7-dias",
    "title": "Direito de Arrependimento: Como Devolver Compras Online em 7 Dias",
    "metaTitle": "Direito de Arrependimento | Devolver Compra Online em 7 Dias",
    "metaDescription": "Comprou pela internet e se arrependeu? Entenda o art. 49 do CDC, como contar os 7 dias, quem paga o frete, prazos de estorno, marketplaces e exceções.",
    "keywords": [
      "direito de arrependimento",
      "7 dias para devolver",
      "compra online arrependimento",
      "art 49 cdc",
      "devolver produto internet",
      "cancelar compra online",
      "estorno cartão",
      "marketplace"
    ],
    "excerpt": "Entenda como funciona o direito de arrependimento nas compras pela internet, telefone ou WhatsApp, como contar o prazo, o reembolso integral e as situações especiais.",
    "content": {
      "intro": "Comprar pela internet é prático, mas o produto pode chegar diferente do que parecia na tela ou simplesmente não agradar. Para equilibrar essa relação, o Código de Defesa do Consumidor garante o direito de arrependimento: em compras feitas fora da loja física, o consumidor pode desistir em até 7 dias, sem justificar, e receber de volta tudo o que pagou.",
      "whatIs": "O artigo 49 do CDC permite ao consumidor desistir do contrato no prazo de 7 dias, contados da assinatura ou do recebimento do produto ou serviço, sempre que a contratação ocorrer fora do estabelecimento comercial, especialmente por telefone ou a domicílio. A regra vale para sites, aplicativos, redes sociais, WhatsApp, catálogos e vendas porta a porta. Exercido o arrependimento, os valores pagos, a qualquer título, devem ser devolvidos de imediato e corrigidos.",
      "sections": [
        {
          "title": "Como contar os 7 dias",
          "paragraphs": [
            "O prazo é contado em dias corridos, incluindo sábados, domingos e feriados, a partir do recebimento do produto (ou da contratação, no caso de serviços). Se o produto chegou numa sexta-feira, o prazo termina na sexta seguinte. O que importa é comunicar a desistência dentro do prazo; a devolução física pode ocorrer logo depois, conforme a logística combinada.",
            "Faça a comunicação por um canal que deixe registro: formulário do site, e-mail ou chat com protocolo. Guarde prints com data e hora. Se a loja não responder, registre reclamação no consumidor.gov.br ou no Procon."
          ]
        },
        {
          "title": "O que diz o Decreto do comércio eletrônico",
          "paragraphs": [
            "O Decreto 7.962/2013 regulamenta o CDC no comércio eletrônico. Ele obriga o fornecedor a informar de forma clara e ostensiva os meios para o exercício do arrependimento, permite que o consumidor desista pela mesma ferramenta usada na compra e determina que o arrependimento implica a rescisão dos contratos acessórios, sem ônus. O fornecedor deve comunicar imediatamente a administradora do cartão para que a transação não seja lançada na fatura ou seja estornada, e enviar ao consumidor a confirmação do recebimento da desistência."
          ]
        },
        {
          "title": "Uso do produto e frete",
          "paragraphs": [
            "Você pode abrir a embalagem e examinar o produto, assim como faria na loja física: experimentar a roupa, ligar o aparelho, conferir as funções. O que se recomenda evitar é o uso prolongado que gere desgaste, porque a loja pode discutir eventual dano. A exigência de embalagem lacrada, por si só, não pode impedir o exercício do direito.",
            "O frete de envio e o de devolução são custos do fornecedor. Não pode haver multa, “taxa de arrependimento” ou retenção de valores. Se a loja oferecer crédito ou vale-compras, o consumidor pode recusar e exigir o dinheiro de volta."
          ]
        },
        {
          "title": "Marketplaces e situações especiais",
          "paragraphs": [
            "Em marketplaces, a plataforma e o vendedor integram a cadeia de fornecimento e, segundo o CDC, podem responder solidariamente pelos problemas da compra. Na prática, abra o pedido de devolução pela própria plataforma, que costuma ter fluxo próprio, e guarde o número do atendimento.",
            "Passagens aéreas seguem regra específica da ANAC (Resolução 400/2016): o passageiro pode desistir sem custo em até 24 horas do recebimento do comprovante, desde que a compra tenha sido feita com pelo menos 7 dias de antecedência do voo. Há discussões sobre produtos personalizados, perecíveis e conteúdos digitais já baixados; nesses casos, vale analisar o caso concreto. Compras feitas dentro da loja física não têm direito de arrependimento, salvo política da própria loja, mas produtos com defeito seguem as regras de garantia do CDC."
          ]
        },
        {
          "title": "Arrependimento não se confunde com defeito",
          "paragraphs": [
            "O direito de arrependimento existe mesmo que o produto esteja perfeito: basta a compra ter sido feita fora da loja física. Já o produto com defeito é regido por outras regras do CDC, que valem para qualquer compra, inclusive em loja física. Para vícios aparentes, o consumidor tem 30 dias para reclamar no caso de produtos não duráveis e 90 dias para produtos duráveis (art. 26). O fornecedor tem até 30 dias para resolver; se não resolver, o consumidor escolhe entre a troca do produto, a devolução do dinheiro ou o abatimento do preço (art. 18).",
            "Na prática, se o produto chegou com defeito dentro dos 7 dias, o consumidor pode escolher o caminho mais simples, que normalmente é o arrependimento, porque dispensa discussão técnica sobre o vício. Se o prazo de 7 dias já passou, ainda restam as garantias legais e eventual garantia contratual oferecida pelo fabricante, que se soma à legal."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Compras pela internet, em sites, aplicativos ou redes sociais",
        "Compras por telefone ou WhatsApp",
        "Compras por catálogo ou revista",
        "Compras em domicílio (porta a porta)",
        "Serviços contratados a distância",
        "Compras em marketplaces, com responsabilidade da plataforma e do vendedor"
      ],
      "documents": [
        "Comprovante de compra (pedido, e-mail de confirmação ou nota fiscal)",
        "Comprovante de entrega com a data de recebimento",
        "Prints ou protocolo do pedido de cancelamento",
        "Comprovante de postagem ou de coleta da devolução",
        "Fatura do cartão ou extrato com a cobrança",
        "Fotos do produto, se houver problema"
      ],
      "deadlines": "O consumidor tem 7 dias corridos, contados do recebimento do produto ou da contratação, para comunicar a desistência (art. 49 do CDC). O reembolso deve ser imediato, com estorno solicitado pela loja à administradora do cartão. Passagens aéreas têm regra própria de 24 horas.",
      "faq": [
        {
          "question": "Preciso justificar o arrependimento?",
          "answer": "Não. É um direito do consumidor nas compras fora da loja física. Basta comunicar a desistência dentro dos 7 dias."
        },
        {
          "question": "Os 7 dias são corridos ou úteis?",
          "answer": "Corridos, contados do recebimento do produto. Se chegou numa sexta, o prazo vai até a sexta seguinte."
        },
        {
          "question": "Quem paga o frete da devolução?",
          "answer": "O fornecedor. O arrependimento não pode gerar custos ao consumidor, nem multa ou taxa."
        },
        {
          "question": "O produto precisa estar lacrado?",
          "answer": "Não. Você pode abrir e examinar o produto como faria numa loja. Evite apenas o uso que cause desgaste."
        },
        {
          "question": "A loja pode me obrigar a aceitar vale-compras?",
          "answer": "Não. O CDC garante a devolução dos valores pagos, corrigidos. O crédito na loja só vale se você aceitar."
        },
        {
          "question": "Vale para compras em marketplace?",
          "answer": "Sim. A plataforma e o vendedor fazem parte da cadeia de fornecimento e podem ser responsabilizados pelo cumprimento do direito."
        },
        {
          "question": "Funciona para passagens aéreas?",
          "answer": "Há regra própria da ANAC: desistência sem custo em até 24 horas da compra, se feita com 7 dias ou mais de antecedência do voo."
        }
      ]
    },
    "relatedActions": [
      "produto-defeito",
      "cobranca-indevida-dobro"
    ],
    "updatedAt": "2026-11-05"
  },
  {
    "id": "cobranca-indevida-dobro",
    "nicheId": "consumidor",
    "slug": "cobranca-indevida-restituicao-dobro",
    "title": "Cobrança Indevida: Quando Cabe a Devolução em Dobro (Art. 42 do CDC)",
    "metaTitle": "Cobrança Indevida e Devolução em Dobro | Art. 42 do CDC",
    "metaDescription": "Pagou valor que não devia? Entenda quando o art. 42 do CDC garante a devolução em dobro, o que mudou com o STJ em 2021, o engano justificável e como pedir.",
    "keywords": [
      "cobrança indevida",
      "devolução em dobro",
      "restituição em dobro",
      "art 42 cdc",
      "repetição de indébito",
      "tarifa indevida",
      "cobrança após cancelamento",
      "engano justificável"
    ],
    "excerpt": "Entenda a repetição do indébito em dobro, os requisitos do art. 42 do CDC, o entendimento atual do STJ, o engano justificável e como recuperar o valor.",
    "content": {
      "intro": "Cobranças por serviço não contratado, valores acima do combinado, parcelas lançadas em duplicidade e tarifas que nunca foram autorizadas estão entre as reclamações mais comuns dos consumidores. Quando o consumidor paga uma cobrança indevida, o Código de Defesa do Consumidor prevê, em regra, a devolução do valor em dobro, e não apenas do que foi pago a mais.",
      "whatIs": "O parágrafo único do artigo 42 do CDC estabelece que o consumidor cobrado em quantia indevida tem direito à repetição do indébito por valor igual ao dobro do que pagou em excesso, acrescido de correção monetária e juros, salvo hipótese de engano justificável. É a chamada repetição do indébito em dobro. Ela tem caráter também pedagógico: desestimular cobranças descuidadas ou abusivas.",
      "sections": [
        {
          "title": "Os três requisitos",
          "paragraphs": [
            "Para a devolução em dobro, é preciso que tenha havido cobrança de quantia indevida, que o consumidor tenha efetivamente pago esse valor, e que não se trate de engano justificável por parte do fornecedor. Sem pagamento, não há o que devolver: nesse caso, o consumidor pode pedir a declaração de inexistência do débito, a suspensão da cobrança e, se houver dano, indenização.",
            "O artigo 42 se aplica às cobranças em relações de consumo. Para cobranças judiciais de dívida já paga, existe regra própria no artigo 940 do Código Civil, que também prevê pagamento em dobro, mas exige outros requisitos."
          ]
        },
        {
          "title": "O que mudou com o STJ em 2021",
          "paragraphs": [
            "Por muito tempo, os tribunais exigiram a prova de má-fé do fornecedor para conceder o dobro. Em 2020, no julgamento do EAREsp 676.608, a Corte Especial do STJ fixou a tese de que a restituição em dobro independe da natureza do elemento volitivo do fornecedor, sendo cabível quando a cobrança indevida representar conduta contrária à boa-fé objetiva. Na prática, não é mais necessário provar que a empresa agiu de propósito.",
            "O STJ modulou os efeitos dessa decisão: para indébitos não decorrentes de prestação de serviço público, o novo entendimento vale para cobranças realizadas após a publicação do acórdão, em 30 de março de 2021. Cobranças anteriores seguem o entendimento antigo, o que pode exigir demonstração de má-fé."
          ]
        },
        {
          "title": "O que é engano justificável",
          "paragraphs": [
            "O fornecedor pode afastar o dobro se provar que o erro era justificável, por exemplo um equívoco pontual, logo corrigido, decorrente de informação incorreta fornecida pelo próprio consumidor. O ônus dessa prova é da empresa. Falhas sistêmicas, cobranças repetidas após reclamação e lançamentos de serviços nunca contratados dificilmente são vistos como engano justificável."
          ]
        },
        {
          "title": "Como pedir a devolução",
          "paragraphs": [
            "Reúna faturas, extratos e comprovantes que mostrem o valor cobrado e pago. Reclame primeiro à empresa por canal com protocolo, pedindo o estorno em dobro, e registre a reclamação no consumidor.gov.br ou no Procon. No caso de bancos, a reclamação também pode ser registrada no Banco Central.",
            "Se não houver solução, a ação pode ser proposta no Juizado Especial Cível, para causas de até 40 salários mínimos. Danos morais podem ser pedidos quando a cobrança causou transtornos relevantes, como negativação indevida ou desconto em verba alimentar, mas o simples erro de cobrança nem sempre gera indenização. Cada caso é avaliado pelo juiz."
          ]
        },
        {
          "title": "Exemplos práticos",
          "paragraphs": [
            "Um consumidor cancela o plano de internet com protocolo, mas continua recebendo faturas por três meses e as paga em débito automático. Comprovado o cancelamento e o pagamento, ele pode pedir a devolução em dobro das três mensalidades, com correção e juros. Outro exemplo é a cobrança de seguro ou serviço adicional embutido na fatura do cartão sem contratação: pago o valor, cabe pedir o estorno em dobro.",
            "Já quando a empresa cobra um valor indevido, mas o consumidor percebe antes de pagar e contesta, o caminho é pedir o cancelamento da cobrança. Se houver negativação ou ameaça de corte de serviço essencial por causa dessa dívida inexistente, a situação pode justificar pedido de urgência e indenização. A análise das provas é sempre individual."
          ]
        }
      ],
      "whenYouHaveRight": [
        "Cobrança de serviço ou produto não contratado",
        "Valor maior que o combinado em contrato",
        "Cobrança em duplicidade na fatura",
        "Cobrança após o cancelamento do serviço",
        "Tarifas bancárias não previstas ou não autorizadas",
        "Débito automático ou desconto em folha não autorizado",
        "Multa indevida ou parcela já quitada cobrada novamente",
        "Cobrança de produto não entregue"
      ],
      "documents": [
        "Comprovante de pagamento da cobrança indevida",
        "Faturas, boletos ou extratos com os valores errados",
        "Contrato com os valores corretos ou prova do cancelamento",
        "Protocolos de atendimento e reclamações",
        "Prints de e-mails, chats e mensagens",
        "Reclamações no Procon, consumidor.gov.br ou Banco Central"
      ],
      "deadlines": "Não há um prazo único: dependendo da natureza da relação, os tribunais aplicam prazos diferentes para a repetição do indébito. Para tarifas de serviços como água e esgoto, a Súmula 412 do STJ aplica o prazo geral de 10 anos do Código Civil; em outros casos, a discussão envolve prazos menores. Como a regra varia, o mais seguro é agir assim que identificar a cobrança.",
      "faq": [
        {
          "question": "Quando tenho direito à devolução em dobro?",
          "answer": "Quando você foi cobrado em valor indevido, pagou, e o erro não foi um engano justificável do fornecedor (art. 42, parágrafo único, do CDC)."
        },
        {
          "question": "Preciso provar a má-fé da empresa?",
          "answer": "Para cobranças posteriores a 30/03/2021, não. O STJ entendeu que basta a cobrança indevida contrária à boa-fé objetiva. Para cobranças anteriores, pode ser exigida a prova de má-fé."
        },
        {
          "question": "E se eu não paguei a cobrança indevida?",
          "answer": "Não há devolução em dobro sem pagamento. Você pode pedir a declaração de inexistência do débito, o cancelamento da cobrança e, se houver dano, indenização."
        },
        {
          "question": "A devolução em dobro é automática?",
          "answer": "Não. É preciso pedir à empresa e, se ela recusar, ajuizar ação. Muitas empresas oferecem apenas o valor simples."
        },
        {
          "question": "Banco cobrou tarifa indevida. O que fazer?",
          "answer": "Peça o estorno ao banco com protocolo, registre reclamação no Banco Central e, se necessário, entre com ação pedindo a devolução em dobro."
        },
        {
          "question": "Posso pedir danos morais também?",
          "answer": "Pode, se a cobrança causou transtornos relevantes, como negativação indevida ou desconto em verba alimentar. O mero erro de cobrança nem sempre gera indenização."
        },
        {
          "question": "Os juros e a correção entram no cálculo?",
          "answer": "Sim. O art. 42 do CDC determina que o valor pago em excesso seja devolvido em dobro, acrescido de correção monetária e juros legais. A correção conta desde cada pagamento indevido, e os juros, em regra, desde a citação ou desde o pagamento, conforme a natureza da relação definida pelo juiz."
        }
      ]
    },
    "relatedActions": [
      "negativacao-indevida",
      "tarifas-bancarias",
      "danos-morais"
    ],
    "updatedAt": "2026-11-05"
  },
  {
    id: 'produto-defeito',
    nicheId: 'consumidor',
    slug: 'produto-defeito-troca-reembolso',
    title: 'Produto com Defeito: Troca, Reparo ou Reembolso',
    metaTitle: 'Produto com Defeito | Troca e Reembolso CDC',
    metaDescription: 'Comprou produto com defeito? Conheça seus direitos: prazo para reclamar, opções de troca, reparo ou reembolso. CDC explica.',
    keywords: ['produto defeito', 'troca produto', 'garantia consumidor', 'vício produto', 'reembolso defeito', 'CDC garantia'],
    excerpt: 'Saiba o que fazer quando compra produto com defeito: prazos, direito a troca, reparo ou reembolso.',
    content: {
      intro: 'Produto com defeito é uma das reclamações mais comuns. O CDC estabelece prazos e opções para o consumidor: troca, reparo ou devolução do dinheiro.',
      whatIs: 'Vício do produto é quando ele não funciona adequadamente ou não atende às expectativas razoáveis do consumidor. Pode ser de qualidade (defeito) ou quantidade (falta).',
      whenYouHaveRight: [
        'Produto não funciona corretamente',
        'Produto diferente do anunciado',
        'Produto com quantidade inferior',
        'Defeito aparece após uso normal',
        'Problema na instalação (se feita pelo fornecedor)',
      ],
      documents: [
        'Nota fiscal ou cupom',
        'Fotos e vídeos do defeito',
        'Protocolos de reclamação',
        'Laudos técnicos (se houver)',
        'Comunicações com a loja/fabricante',
        'Orçamento de reparo (se aplicável)',
      ],
      deadlines: '30 dias para reclamar de produtos não duráveis. 90 dias para duráveis. Prazo conta da entrega ou descoberta do defeito oculto.',
      faq: [
        {
          question: 'A loja pode me mandar para a assistência?',
          answer: 'Sim, mas se o reparo demorar mais de 30 dias, você pode exigir troca, restituição ou abatimento do preço.',
        },
        {
          question: 'Posso trocar por outro modelo ou marca?',
          answer: 'Se não houver o mesmo produto, sim. A troca pode ser por outro similar ou restituição do valor.',
        },
        {
          question: 'Produto usado tem garantia?',
          answer: 'O CDC não exclui produtos usados. A garantia pode ser menor, mas deve ser informada claramente.',
        },
        {
          question: 'E se o defeito aparecer após a garantia?',
          answer: 'Defeitos ocultos podem ser reclamados mesmo após a garantia, se aparecerem em prazo razoável de vida útil do produto.',
        },
      ],
    },
    relatedActions: ['danos-morais', 'cobranca'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'tarifas-bancarias',
    nicheId: 'consumidor',
    slug: 'tarifas-bancarias-abusivas',
    title: 'Tarifas Bancárias Abusivas: Como Identificar e Cobrar',
    metaTitle: 'Tarifas Bancárias Abusivas | Como Reclamar',
    metaDescription: 'Banco cobra tarifas indevidas? Saiba quais são ilegais, como identificar e pedir restituição. Direitos do cliente bancário.',
    keywords: ['tarifas bancárias', 'cobrança abusiva banco', 'tarifa indevida', 'banco restituição', 'serviços bancários', 'taxas abusivas'],
    excerpt: 'Aprenda a identificar tarifas bancárias abusivas e como pedir a restituição dos valores pagos indevidamente.',
    content: {
      intro: 'Bancos frequentemente cobram tarifas indevidas ou abusivas. Conheça seus direitos, quais cobranças são ilegais e como pedir seu dinheiro de volta.',
      whatIs: 'Tarifas bancárias abusivas são cobranças não previstas em contrato, serviços não solicitados, ou valores acima do permitido pela regulamentação do Banco Central.',
      whenYouHaveRight: [
        'Tarifa de serviço não contratado',
        'Cobrança de serviços essenciais gratuitos',
        'Taxa de manutenção de conta-salário',
        'Seguros não solicitados',
        'Capitalização e títulos de capitalização forçados',
        'Tarifas em operações digitais',
      ],
      documents: [
        'Extratos bancários',
        'Contrato de abertura de conta',
        'Comprovantes das cobranças',
        'Protocolos de reclamação ao banco',
        'Reclamações ao Banco Central',
        'Histórico de tarifas',
      ],
      deadlines: 'Prazo de 5 anos para pedir restituição. Pode pedir valores dos últimos 5 anos.',
      faq: [
        {
          question: 'Quais serviços bancários são gratuitos?',
          answer: 'Conta-salário, fornecimento de cartão de débito, 4 saques/mês, 2 extratos/mês, transferências por internet, entre outros.',
        },
        {
          question: 'Posso recusar seguro oferecido pelo banco?',
          answer: 'Sim. Seguros são opcionais e a venda casada é proibida. Pode cancelar e pedir restituição do que pagou.',
        },
        {
          question: 'O que fazer se o banco não devolver?',
          answer: 'Reclame no Banco Central (BC) e entre com ação judicial pedindo restituição em dobro.',
        },
        {
          question: 'Consigo recuperar tarifas de anos anteriores?',
          answer: 'Sim, pode pedir restituição dos últimos 5 anos, com correção monetária e juros.',
        },
      ],
    },
    relatedActions: ['cobranca-indevida', 'danos-morais'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'telefonia-internet',
    nicheId: 'consumidor',
    slug: 'telefonia-internet-problemas',
    title: 'Problemas com Telefonia e Internet: Seus Direitos',
    metaTitle: 'Telefonia e Internet | Reclamar de Operadora',
    metaDescription: 'Problemas com operadora de celular ou internet? Conheça seus direitos: cobrança, velocidade, cancelamento e como reclamar.',
    keywords: ['telefonia', 'internet', 'operadora celular', 'Anatel reclamação', 'velocidade internet', 'cancelamento plano'],
    excerpt: 'Guia completo sobre direitos do consumidor em serviços de telefonia e internet: cobranças, qualidade e cancelamento.',
    content: {
      intro: 'Operadoras de telefonia e internet estão entre as empresas mais reclamadas. Conheça seus direitos sobre cobrança, qualidade do serviço e cancelamento.',
      whatIs: 'Os serviços de telecomunicação são regulados pela Anatel e pelo CDC. O consumidor tem direitos específicos quanto à qualidade, cobrança e cancelamento.',
      whenYouHaveRight: [
        'Internet abaixo da velocidade contratada',
        'Cobrança de serviços não solicitados',
        'Dificuldade para cancelar plano',
        'Mudança de plano sem autorização',
        'Falta de sinal ou serviço',
        'Fidelização abusiva',
      ],
      documents: [
        'Contrato ou termo de adesão',
        'Faturas com cobranças indevidas',
        'Prints de teste de velocidade',
        'Protocolos de atendimento',
        'Gravações de ligações (se tiver)',
        'Reclamações anteriores',
      ],
      deadlines: 'Operadora tem 5 dias para resolver reclamação. Prazo de 5 anos para ações de cobrança/dano.',
      faq: [
        {
          question: 'A internet está mais lenta que o contratado. O que fazer?',
          answer: 'A operadora deve entregar no mínimo 80% da velocidade contratada. Faça testes, reclame e peça desconto ou rescisão.',
        },
        {
          question: 'Posso cancelar plano antes da fidelidade?',
          answer: 'Pode, mas pagará multa proporcional ao tempo restante. Se a operadora descumpriu o contrato, não há multa.',
        },
        {
          question: 'Operadora mudou meu plano sem autorização. E agora?',
          answer: 'É prática abusiva. Exija retorno ao plano anterior, restituição de diferenças e, se cabível, danos morais.',
        },
        {
          question: 'Como reclamar na Anatel?',
          answer: 'Pelo app Anatel Consumidor, site consumidor.gov.br ou telefone 1331. Primeiro reclame na operadora.',
        },
      ],
    },
    relatedActions: ['cobranca-indevida', 'danos-morais'],
    updatedAt: '2025-01-01',
  },

  // NOVOS ARTIGOS - PENAL
  {
    id: 'crimes-honra',
    nicheId: 'penal',
    slug: 'calunia-difamacao-injuria',
    title: 'Calúnia, Difamação e Injúria: Crimes Contra a Honra',
    metaTitle: 'Calúnia Difamação Injúria | Crimes Honra',
    metaDescription: 'Foi ofendido ou acusado injustamente? Conheça os crimes contra a honra: diferenças, penas e como processar criminalmente.',
    keywords: ['calúnia', 'difamação', 'injúria', 'crimes honra', 'ofensa', 'fake news', 'processo criminal'],
    excerpt: 'Entenda a diferença entre calúnia, difamação e injúria, as penas previstas e como buscar responsabilização criminal.',
    content: {
      intro: 'Calúnia, difamação e injúria são crimes contra a honra previstos no Código Penal. Cada um tem características específicas e penas diferentes. Saiba identificar e como agir.',
      whatIs: 'Crimes contra a honra são condutas que atingem a reputação, dignidade ou decoro de uma pessoa. Calúnia imputa crime falso, difamação atinge a reputação, injúria ofende a dignidade.',
      whenYouHaveRight: [
        'Ser acusado falsamente de crime (calúnia)',
        'Ter fatos ofensivos divulgados (difamação)',
        'Ser xingado ou ofendido (injúria)',
        'Ofensas em redes sociais',
        'Notícias falsas sobre você',
        'Ofensas no trabalho ou família',
      ],
      documents: [
        'Prints das ofensas (com data/hora)',
        'Gravações de áudio ou vídeo',
        'Testemunhos de quem presenciou',
        'URL das publicações online',
        'Boletim de ocorrência',
        'Laudo pericial de mídia (se necessário)',
      ],
      deadlines: 'Queixa-crime deve ser oferecida em 6 meses do conhecimento do autor. Prescrição: 3-4 anos dependendo do crime.',
      faq: [
        {
          question: 'Qual a diferença entre calúnia, difamação e injúria?',
          answer: 'Calúnia: acusar de crime que não cometeu. Difamação: contar fato ofensivo (mesmo verdadeiro). Injúria: xingar, ofender dignidade.',
        },
        {
          question: 'Quais são as penas?',
          answer: 'Calúnia: 6 meses a 2 anos. Difamação: 3 meses a 1 ano. Injúria: 1 a 6 meses. Aumentam se for internet ou contra certas pessoas.',
        },
        {
          question: 'Ofensa na internet é mais grave?',
          answer: 'Sim, a pena é triplicada quando o crime é cometido em redes sociais ou meios que facilitem a divulgação.',
        },
        {
          question: 'Preciso de advogado para processar?',
          answer: 'Sim, crimes contra a honra exigem queixa-crime oferecida por advogado. É ação penal privada.',
        },
      ],
    },
    relatedActions: ['danos-morais', 'defesa-criminal'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'estelionato-golpes',
    nicheId: 'penal',
    slug: 'estelionato-golpes-fraudes',
    title: 'Estelionato e Golpes: Como se Defender e Denunciar',
    metaTitle: 'Estelionato e Golpes | Como Denunciar Fraude',
    metaDescription: 'Caiu em golpe ou fraude? Saiba o que fazer: como denunciar, recuperar dinheiro e processar criminalmente. Pix, internet, WhatsApp.',
    keywords: ['estelionato', 'golpe', 'fraude', 'golpe pix', 'golpe whatsapp', 'como denunciar golpe', 'recuperar dinheiro golpe'],
    excerpt: 'Guia completo sobre estelionato e golpes: como identificar, denunciar e buscar recuperação do dinheiro.',
    content: {
      intro: 'Golpes e fraudes estão cada vez mais sofisticados. Conheça os tipos mais comuns, como se proteger, denunciar e tentar recuperar seu dinheiro.',
      whatIs: 'Estelionato é o crime de obter vantagem ilícita em prejuízo de alguém, induzindo ou mantendo a vítima em erro. Inclui golpes de Pix, sites falsos, pirâmides e outros.',
      whenYouHaveRight: [
        'Golpe do Pix (transferência sob engano)',
        'Compra em site falso',
        'Golpe do WhatsApp (pedido de dinheiro)',
        'Pirâmide financeira',
        'Falso sequestro',
        'Golpe do empréstimo',
      ],
      documents: [
        'Comprovantes de transferência',
        'Prints de conversas',
        'E-mails e mensagens recebidas',
        'Dados do golpista (conta, telefone)',
        'Boletim de ocorrência',
        'Extratos bancários',
      ],
      deadlines: 'Denuncie imediatamente à polícia e ao banco. Quanto antes, maior chance de bloquear valores. Prazo penal: até 16 anos.',
      faq: [
        {
          question: 'Como recuperar dinheiro de golpe do Pix?',
          answer: 'Acione o MED (Mecanismo Especial de Devolução) do banco em até 80 dias. Quanto mais rápido, maior a chance.',
        },
        {
          question: 'Qual a pena para estelionato?',
          answer: 'De 1 a 5 anos de prisão. Aumenta para 4 a 8 anos se for pela internet. Pode chegar a 16 anos se envolver idoso.',
        },
        {
          question: 'Posso processar o banco se cair em golpe?',
          answer: 'Depende. Se houver falha de segurança do banco, pode haver responsabilidade. Cada caso é analisado individualmente.',
        },
        {
          question: 'Site vendeu produto falso. É estelionato?',
          answer: 'Sim, vender produto sabendo que não vai entregar ou entregar falsificado é estelionato.',
        },
      ],
    },
    relatedActions: ['danos-morais', 'defesa-criminal'],
    updatedAt: '2025-01-01',
  },

  // NOVOS ARTIGOS CAUDA LONGA - SEO EXPANSION
  {
    id: 'empresa-faliu-nao-pagou',
    nicheId: 'trabalhista',
    slug: 'empresa-faliu-nao-pagou-o-que-fazer',
    title: 'Empresa Faliu e Não Pagou: O Que Fazer Para Receber Seus Direitos',
    metaTitle: 'Empresa Faliu e Não Pagou | Como Receber Direitos',
    metaDescription: 'Sua empresa faliu e não pagou seus direitos trabalhistas? Saiba como receber verbas rescisórias, FGTS e seguro-desemprego mesmo com a falência.',
    keywords: ['empresa faliu não pagou trabalhador', 'falência empresa direitos trabalhistas', 'recuperação judicial trabalhador', 'receber direitos empresa falida', 'crédito trabalhista falência'],
    excerpt: 'Descubra como receber seus direitos trabalhistas quando a empresa faliu ou está em recuperação judicial.',
    content: {
      intro: 'Quando uma empresa faliu e não pagou os funcionários, muitos trabalhadores acreditam que perderam seus direitos. Mas a lei brasileira protege o crédito trabalhista, que tem prioridade sobre outros credores na falência. Saiba exatamente o que fazer para receber o que é seu.',
      whatIs: 'A falência é o processo judicial que declara a insolvência de uma empresa, ou seja, quando ela não consegue mais pagar suas dívidas. Já a recuperação judicial é uma tentativa de reorganização antes da falência. Em ambos os casos, os direitos trabalhistas são protegidos pela lei.',
      whenYouHaveRight: [
        'Quando a empresa encerrou atividades sem pagar as verbas rescisórias',
        'Quando a empresa entrou em recuperação judicial',
        'Quando a empresa foi decretada falida judicialmente',
        'Quando há salários, férias ou 13º atrasados',
        'Quando o FGTS não foi depositado corretamente',
        'Quando a empresa "sumiu" e fechou as portas',
      ],
      documents: [
        'Carteira de Trabalho (CTPS) física ou digital',
        'Contracheques e comprovantes de pagamento',
        'Contrato de trabalho',
        'Extrato do FGTS',
        'Termo de rescisão (se houver)',
        'E-mails e comunicações da empresa',
        'Comprovante de endereço para rescisão',
      ],
      deadlines: 'Você tem 2 anos após o término do contrato para ajuizar ação trabalhista. Na falência, os créditos trabalhistas até 150 salários mínimos têm prioridade absoluta sobre outros credores.',
      faq: [
        {
          question: 'A empresa faliu. Perdi meus direitos?',
          answer: 'Não! Os créditos trabalhistas têm prioridade na falência. Você deve habilitar seu crédito no processo falimentar ou ajuizar ação trabalhista.',
        },
        {
          question: 'Como receber o FGTS se a empresa faliu?',
          answer: 'Você pode sacar o FGTS depositado diretamente na Caixa. Para valores não depositados, deve incluir na ação trabalhista ou habilitação de crédito.',
        },
        {
          question: 'Posso receber seguro-desemprego com a empresa falida?',
          answer: 'Sim, desde que a rescisão seja formalizada. Se a empresa não deu baixa, procure o sindicato ou Ministério do Trabalho para regularizar.',
        },
        {
          question: 'O que é habilitação de crédito na falência?',
          answer: 'É o pedido formal para incluir sua dívida trabalhista no processo de falência, garantindo prioridade no recebimento quando houver recursos.',
        },
      ],
    },
    relatedActions: ['demissao-sem-justa-causa', 'verbas-rescissorias'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'aposentadoria-especial-motorista',
    nicheId: 'previdenciario',
    slug: 'aposentadoria-especial-motorista-onibus',
    title: 'Aposentadoria Especial do Motorista de Ônibus: Guia Completo',
    metaTitle: 'Aposentadoria Especial Motorista de Ônibus | INSS',
    metaDescription: 'Motorista de ônibus tem direito a aposentadoria especial? Saiba os requisitos, tempo de contribuição e como solicitar no INSS em 2025.',
    keywords: ['aposentadoria especial motorista ônibus INSS', 'motorista aposentadoria especial', 'aposentadoria motorista ônibus 2025', 'PPP motorista ônibus', 'tempo contribuição motorista'],
    excerpt: 'Descubra se você como motorista de ônibus tem direito à aposentadoria especial e como conseguir esse benefício no INSS.',
    content: {
      intro: 'Motoristas de ônibus podem ter direito à aposentadoria especial com 25 anos de contribuição, sem idade mínima (para quem completou antes da Reforma). Essa aposentadoria reconhece a exposição a agentes nocivos como vibração, ruído e estresse do trânsito.',
      whatIs: 'A aposentadoria especial é um benefício previdenciário concedido a trabalhadores expostos a agentes nocivos à saúde. Para motoristas de ônibus, considera-se a exposição a vibração de corpo inteiro, ruído excessivo e condições estressantes de trabalho urbano.',
      whenYouHaveRight: [
        'Motoristas de ônibus urbano com exposição a vibração',
        'Motoristas de ônibus rodoviário em longas jornadas',
        'Cobradores de ônibus (mesma exposição)',
        'Motoristas de transporte escolar',
        'Quem trabalhou antes e depois da Reforma da Previdência',
        'Motoristas com PPP comprovando exposição',
      ],
      documents: [
        'Carteira de Trabalho completa',
        'PPP (Perfil Profissiográfico Previdenciário)',
        'LTCAT (Laudo Técnico de Condições Ambientais)',
        'CNIS atualizado',
        'Declaração da empresa sobre atividade',
        'Laudos médicos (se houver problemas de saúde)',
      ],
      deadlines: 'Direito adquirido: quem completou 25 anos de exposição até 13/11/2019 pode se aposentar sem idade mínima. Após a Reforma: exige 25 anos + 60 anos de idade ou 86 pontos.',
      faq: [
        {
          question: 'Motorista de ônibus tem direito a aposentadoria especial?',
          answer: 'Sim, desde que comprove exposição a agentes nocivos (vibração, ruído) através do PPP e LTCAT fornecidos pela empresa.',
        },
        {
          question: 'Preciso ter 25 anos como motorista?',
          answer: 'São 25 anos de exposição a agentes nocivos. Podem ser somados períodos em diferentes empresas, desde que todos comprovem a exposição.',
        },
        {
          question: 'O INSS costuma negar esse benefício?',
          answer: 'Infelizmente sim. Muitos casos precisam de ação judicial para reconhecimento, especialmente se o PPP não está correto.',
        },
        {
          question: 'Posso continuar trabalhando após a aposentadoria especial?',
          answer: 'Se continuar na mesma atividade nociva, a aposentadoria será suspensa. Pode trabalhar em outras funções não nocivas.',
        },
      ],
    },
    relatedActions: ['aposentadoria', 'auxilio-doenca'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'guarda-netos-avos',
    nicheId: 'familia',
    slug: 'avos-podem-pedir-guarda-netos',
    title: 'Avós Podem Pedir a Guarda dos Netos? Saiba Quando e Como',
    metaTitle: 'Avós Podem Ter Guarda dos Netos | Direito Família',
    metaDescription: 'Avós podem pedir a guarda dos netos? Descubra em quais situações é possível, requisitos e como fazer o pedido na Justiça.',
    keywords: ['guarda netos avós direito', 'avós podem ter guarda', 'guarda avós', 'netos morando com avós', 'transferir guarda para avós'],
    excerpt: 'Entenda quando e como avós podem pedir a guarda dos netos, quais os requisitos e o que a Justiça considera.',
    content: {
      intro: 'Sim, avós podem pedir e obter a guarda dos netos em diversas situações. A Justiça brasileira prioriza o melhor interesse da criança, e quando os pais não podem ou não devem exercer a guarda, os avós são frequentemente a melhor opção.',
      whatIs: 'A guarda é a responsabilidade legal de cuidar, educar e proteger uma criança ou adolescente. Normalmente fica com os pais, mas pode ser transferida para avós quando há motivos que justifiquem.',
      whenYouHaveRight: [
        'Falecimento de um ou ambos os pais',
        'Pais com problemas de dependência química',
        'Abandono ou negligência dos pais',
        'Pais com problemas de saúde mental',
        'Pais presos ou em situação de risco',
        'Criança já mora com os avós há tempo considerável',
        'Acordo entre os pais e avós',
      ],
      documents: [
        'Documentos pessoais dos avós',
        'Certidão de nascimento do neto',
        'Comprovante de residência',
        'Comprovante de renda dos avós',
        'Provas da situação dos pais (se for litigiosa)',
        'Relatórios escolares e médicos da criança',
        'Declarações de testemunhas',
      ],
      deadlines: 'Não há prazo para pedir a guarda. Em casos urgentes (risco à criança), pode-se pedir guarda provisória com liminar. O processo completo pode levar de 6 meses a 2 anos.',
      faq: [
        {
          question: 'Os pais precisam concordar com a guarda para os avós?',
          answer: 'Não necessariamente. Se os pais são negligentes ou há risco para a criança, a guarda pode ser concedida mesmo contra a vontade deles.',
        },
        {
          question: 'Guarda para avós cancela pensão alimentícia dos pais?',
          answer: 'Não. Os pais continuam obrigados a pagar pensão, mesmo com a guarda nos avós. Os avós podem inclusive cobrar pensão dos pais.',
        },
        {
          question: 'Posso pedir a guarda se o neto já mora comigo?',
          answer: 'Sim, e isso fortalece seu pedido. A Justiça tende a manter a criança onde ela já está estabilizada e bem cuidada.',
        },
        {
          question: 'Guarda é a mesma coisa que adoção?',
          answer: 'Não. Na guarda, os pais mantêm o poder familiar (podem visitar, têm obrigações). Na adoção, o vínculo com pais biológicos é extinto.',
        },
      ],
    },
    relatedActions: ['guarda', 'pensao-alimenticia'],
    updatedAt: '2025-01-01',
  },
  {
    id: 'processar-vizinho-barulho',
    nicheId: 'civil',
    slug: 'processar-vizinho-barulho-danos-morais',
    title: 'Vizinho Barulhento: Como Processar por Danos Morais',
    metaTitle: 'Processar Vizinho por Barulho | Danos Morais',
    metaDescription: 'Vizinho faz muito barulho? Saiba como processar por danos morais, reunir provas e conseguir indenização. Guia completo com advogado.',
    keywords: ['processar vizinho barulho danos morais', 'vizinho barulhento processo', 'indenização barulho vizinho', 'perturbação sossego', 'lei do silêncio'],
    excerpt: 'Aprenda como processar um vizinho barulhento, quais provas reunir e como conseguir indenização por danos morais.',
    content: {
      intro: 'O barulho excessivo de vizinhos não é apenas incômodo: é violação do seu direito ao sossego. Quando conversas e notificações não resolvem, a Justiça pode obrigar o vizinho a parar e ainda condená-lo a pagar indenização por danos morais.',
      whatIs: 'A perturbação do sossego é uma infração que pode ter consequências civis (indenização), administrativas (multa do condomínio/prefeitura) e até penais (contravenção penal). O vizinho que perturba sistematicamente pode ser responsabilizado.',
      whenYouHaveRight: [
        'Barulho frequente fora dos horários permitidos',
        'Festas constantes com som alto',
        'Obras fora do horário regulamentar',
        'Animais de estimação barulhentos sem controle',
        'Discussões e brigas frequentes',
        'Som automotivo ou de estabelecimento comercial',
        'Qualquer ruído que impeça seu descanso regular',
      ],
      documents: [
        'Registros de datas e horários do barulho',
        'Gravações de áudio ou vídeo',
        'Boletins de ocorrência',
        'Notificações do condomínio',
        'Testemunhos de outros vizinhos',
        'Laudos médicos (se houve problemas de saúde)',
        'Histórico de reclamações ao síndico/prefeitura',
      ],
      deadlines: 'O prazo para pedir indenização por danos morais é de 3 anos. Para ação de obrigação de não fazer (cessar o barulho), não há prazo enquanto a perturbação continuar.',
      faq: [
        {
          question: 'Qual horário é considerado "lei do silêncio"?',
          answer: 'Varia por cidade, mas geralmente das 22h às 7h em dias úteis e até 9h em fins de semana. Verifique a lei municipal e o regulamento do condomínio.',
        },
        {
          question: 'Posso processar mesmo sem boletim de ocorrência?',
          answer: 'Sim, mas o BO fortalece suas provas. Gravações, testemunhos e notificações do condomínio também são válidos.',
        },
        {
          question: 'Quanto posso receber de indenização?',
          answer: 'Varia conforme a gravidade, frequência e duração. Não há valor tabelado; o valor depende das circunstâncias de cada caso e é fixado pelo juiz; não há valor garantido.',
        },
        {
          question: 'Posso resolver sem processo judicial?',
          answer: 'Sim. Tente conversa amigável, reclamação ao síndico, mediação de conflitos ou reclamação na prefeitura antes de processar.',
        },
      ],
    },
    relatedActions: ['danos-morais', 'acao-cobranca'],
    updatedAt: '2025-01-01',
  },

  // ====================================
  // CONSUMIDOR - NOVOS ARTIGOS 2026
  // ====================================
  {
    id: 'golpe-pix-recuperar',
    nicheId: 'consumidor',
    slug: 'golpe-pix-como-recuperar-dinheiro',
    title: 'Golpe do PIX: Como Recuperar o Dinheiro em 2025',
    metaTitle: 'Golpe do PIX | Como Recuperar Dinheiro | MED',
    metaDescription: 'Caiu no golpe do PIX? Saiba como usar o MED (Mecanismo Especial de Devolução) para recuperar seu dinheiro. Entenda o passo a passo.',
    keywords: ['golpe pix', 'recuperar pix', 'fraude pix', 'MED pix', 'mecanismo especial devolução', 'golpe whatsapp pix', 'banco devolver pix'],
    excerpt: 'Saiba como acionar o MED (Mecanismo Especial de Devolução) e recuperar seu dinheiro após cair em golpe do PIX. Guia completo com prazos e documentos.',
    content: {
      intro: 'O golpe do PIX se tornou uma das fraudes mais comuns no Brasil. A boa notícia é que existe o MED (Mecanismo Especial de Devolução) que pode ajudar a recuperar seu dinheiro.',
      whatIs: 'O MED é um mecanismo criado pelo Banco Central em 2021 que permite bloquear e devolver valores transferidos via PIX em casos de fraude. Quando você registra a reclamação, o banco do recebedor bloqueia o valor e inicia uma análise.',
      whenYouHaveRight: [
        'Transferência feita sob coação ou ameaça',
        'Golpe do falso funcionário de banco',
        'Golpe do WhatsApp clonado',
        'Falso boleto ou QR Code',
        'Invasão de conta bancária',
        'Golpe do falso leilão ou site de compras',
        'Sequestro relâmpago com PIX',
      ],
      documents: [
        'Boletim de ocorrência',
        'Prints de conversas com o golpista',
        'Comprovantes das transferências',
        'Dados do recebedor (chave PIX)',
        'Extrato bancário',
        'Protocolo de reclamação no banco',
      ],
      deadlines: 'Você tem até 80 dias após a transferência para acionar o MED. Quanto antes registrar, maiores as chances de o dinheiro ainda estar na conta do golpista. O banco tem 7 dias para analisar e até 96 horas para bloquear os valores.',
      faq: [
        {
          question: 'O que é o MED do PIX?',
          answer: 'MED significa Mecanismo Especial de Devolução. É um sistema do Banco Central que permite recuperar dinheiro enviado via PIX em casos de fraude ou falha operacional.',
        },
        {
          question: 'Qual o prazo para acionar o MED?',
          answer: 'Você tem até 80 dias após a transferência para solicitar o MED. Porém, quanto mais rápido agir, maiores as chances de recuperar o valor.',
        },
        {
          question: 'O banco é obrigado a devolver o dinheiro?',
          answer: 'Se ficar comprovada a fraude, sim. Se o golpista já sacou o dinheiro, o banco pode ser responsabilizado se houve falha na segurança ou demora no bloqueio.',
        },
        {
          question: 'E se o banco negar a devolução?',
          answer: 'Você pode recorrer ao Banco Central, Procon e Justiça. Muitos casos são resolvidos favoravelmente ao consumidor, com devolução do valor mais danos morais.',
        },
        {
          question: 'Posso processar o banco pelo golpe do PIX?',
          answer: 'Sim. Se o banco não tomou as medidas de segurança adequadas ou demorou para bloquear a conta fraudulenta, pode ser responsabilizado por danos materiais e morais.',
        },
      ],
    },
    relatedActions: ['fraude-bancaria', 'danos-morais'],
    updatedAt: '2026-01-11',
  },
  {
    id: 'cartao-clonado-banco',
    nicheId: 'consumidor',
    slug: 'cartao-clonado-responsabilidade-banco',
    title: 'Cartão Clonado: Quem é Responsável e Como Recuperar',
    metaTitle: 'Cartão Clonado | Responsabilidade do Banco',
    metaDescription: 'Teve o cartão clonado? Saiba por que o banco é responsável e como recuperar seu dinheiro. Entenda seus direitos.',
    keywords: ['cartão clonado', 'fraude cartão crédito', 'banco responsável fraude', 'compra não reconhecida', 'clonagem cartão', 'estorno cartão'],
    excerpt: 'Entenda por que o banco é responsável pela clonagem do seu cartão e como recuperar os valores das compras não reconhecidas.',
    content: {
      intro: 'A clonagem de cartão é uma das fraudes mais comuns no Brasil. O que muita gente não sabe é que o banco é responsável por essas transações fraudulentas, mesmo que você não tenha "culpa" pela clonagem.',
      whatIs: 'A clonagem ocorre quando criminosos copiam os dados do seu cartão para fazer compras indevidas. Pode acontecer em maquininhas adulteradas, sites falsos, ou por vazamento de dados.',
      whenYouHaveRight: [
        'Compras que você não reconhece na fatura',
        'Transações em locais que você nunca esteve',
        'Compras online em sites que você não acessou',
        'Saques que você não realizou',
        'Compras após perda ou roubo do cartão',
        'Valores alterados de compras legítimas',
      ],
      documents: [
        'Fatura com as transações contestadas',
        'Boletim de ocorrência',
        'Protocolo de contestação no banco',
        'Prints de localização no horário da fraude',
        'Comprovantes de viagem (se estava em outro lugar)',
        'E-mails de notificação das transações',
      ],
      deadlines: 'Conteste as transações assim que identificar. O banco tem 7 a 10 dias úteis para responder. Se negar, você pode recorrer ao Procon, Banco Central ou Justiça.',
      faq: [
        {
          question: 'O banco é obrigado a devolver o dinheiro?',
          answer: 'Sim. O STJ já consolidou que o banco responde objetivamente por fraudes, pois a segurança do sistema de cartões é responsabilidade da instituição financeira.',
        },
        {
          question: 'E se eu tiver informado minha senha?',
          answer: 'Se você foi vítima de golpe (phishing, falso funcionário), ainda assim pode ter direito ao estorno. A análise é caso a caso, mas muitos consumidores conseguem.',
        },
        {
          question: 'O banco pode alegar que foi culpa minha?',
          answer: 'O banco precisa provar que você agiu com má-fé ou negligência grave. Sem essa prova, a responsabilidade é do banco.',
        },
        {
          question: 'Posso pedir danos morais pelo cartão clonado?',
          answer: 'Se a fraude causou transtornos além do financeiro (nome negativado, constrangimento, problemas com crédito), você pode pedir danos morais.',
        },
        {
          question: 'Quanto tempo tenho para contestar?',
          answer: 'Conteste assim que identificar. Não há prazo legal rígido para contestação ao banco, mas para processar judicialmente o prazo é de 5 anos.',
        },
      ],
    },
    relatedActions: ['fraude-bancaria', 'danos-morais'],
    updatedAt: '2026-01-11',
  },

  // ============ NOVOS ARTIGOS PREVIDENCIÁRIO - FASE 7 ============
  {
    id: 'revisao-vida-toda',
    nicheId: 'previdenciario',
    slug: 'revisao-da-vida-toda-como-aumentar-aposentadoria',
    title: 'Revisão da Vida Toda: o Que Decidiu o STF e Alternativas',
    metaTitle: 'Revisão da Vida Toda: o Que o STF Decidiu e Alternativas',
    metaDescription: 'Entenda por que o STF afastou a Revisão da Vida Toda em 2024, o que acontece com quem já recebeu e quais revisões ainda podem caber no INSS.',
    keywords: ['revisão da vida toda', 'STF vida toda', 'ADI 2110', 'revisão INSS', 'recalcular benefício', 'revisão aposentadoria'],
    excerpt: 'A Revisão da Vida Toda foi afastada pelo STF em 2024. Veja o que mudou, a situação de quem já tinha ação e quais revisões continuam possíveis.',
    content: {
      intro: 'A Revisão da Vida Toda era a tese que buscava incluir no cálculo da aposentadoria as contribuições anteriores a julho de 1994. Em março de 2024, ao julgar as ADIs 2110 e 2111, o STF declarou constitucional a regra de transição da Lei 9.876/1999, o que, na prática, afastou essa revisão. Este texto explica o que mudou e o que ainda pode ser analisado no seu benefício.',
      whatIs: 'A tese pedia que o segurado pudesse escolher a regra definitiva do art. 29 da Lei 8.213/1991 (todas as contribuições da vida) quando ela fosse mais vantajosa do que a regra de transição do art. 3º da Lei 9.876/1999 (contribuições a partir de julho/1994). O STF chegou a acolher a tese no Tema 1.102 em 2022, mas o julgamento das ADIs 2110 e 2111 em 2024 firmou que a regra de transição é obrigatória. Com isso, novas ações com esse fundamento tendem a ser julgadas improcedentes. O STF também modulou os efeitos para que, em regra, valores já recebidos por decisão judicial até a data do julgamento não precisem ser devolvidos; a situação de cada processo em andamento deve ser conferida nos próprios autos.',
      whenYouHaveRight: [
        'Quem já tinha ação da Vida Toda deve verificar nos autos como a decisão do STF foi aplicada ao seu caso',
        'Quem recebeu valores por decisão judicial deve conferir a modulação de efeitos antes de qualquer devolução',
        'Erro no CNIS (vínculo, salário ou período faltando) pode justificar outra revisão',
        'Tempo especial, rural ou de aluno-aprendiz não reconhecido pode aumentar o benefício',
        'Atividades concomitantes calculadas de forma errada podem gerar diferenças',
        'Revisões dependem do prazo decadencial de 10 anos do art. 103 da Lei 8.213/1991',
      ],
      documents: [
        'Carta de concessão e memória de cálculo do benefício',
        'CNIS completo (extrato de contribuições)',
        'Carteiras de trabalho e carnês antigos',
        'PPP e laudos, se houve atividade especial',
        'Cópia do processo judicial, se já existe ação',
        'Documentos pessoais',
      ],
      deadlines: 'O prazo para pedir revisão do ato de concessão é de 10 anos, contado do dia primeiro do mês seguinte ao do primeiro pagamento (art. 103 da Lei 8.213/1991). Diferenças anteriores a 5 anos do pedido ficam prescritas.',
      faq: [
        {
          question: 'Ainda dá para entrar com a Revisão da Vida Toda?',
          answer: 'Depois do julgamento das ADIs 2110 e 2111 pelo STF em 2024, a tese foi afastada. Uma ação nova com esse único fundamento tende a ser improcedente.',
        },
        {
          question: 'Eu já recebi valores da Vida Toda. Vou ter que devolver?',
          answer: 'O STF modulou os efeitos da decisão para proteger, em regra, valores recebidos de boa-fé por decisão judicial até o julgamento. Cada processo precisa ser conferido nos autos para saber como isso foi aplicado.',
        },
        {
          question: 'Que outras revisões ainda existem?',
          answer: 'Correção de erros no CNIS, inclusão de tempo especial ou rural, ajuste de atividades concomitantes e revisão de cálculo com base em documentos novos são exemplos. Tudo depende da análise do benefício e do prazo decadencial.',
        },
        {
          question: 'Quanto tempo tenho para pedir uma revisão?',
          answer: 'Em regra, 10 anos contados a partir do mês seguinte ao primeiro pagamento do benefício.',
        },
        {
          question: 'Onde encontro mais informações sobre benefícios do INSS?',
          answer: 'No guia de direito previdenciário do site você encontra os principais benefícios do INSS explicados passo a passo.',
        },
      ],
    },
    relatedActions: ['aposentadoria-2025', 'inss-negou-beneficio'],
    updatedAt: '2026-01-12',
  },
  {
    id: 'aposentadoria-especial',
    nicheId: 'previdenciario',
    slug: 'aposentadoria-especial-atividades-insalubres',
    title: 'Aposentadoria Especial: Guia para Trabalhadores de Atividades Insalubres',
    metaTitle: 'Aposentadoria Especial | Insalubridade INSS',
    metaDescription: 'Trabalhou em atividade insalubre ou perigosa? Saiba como conseguir aposentadoria especial: requisitos, PPP, LTCAT e como converter tempo.',
    keywords: ['aposentadoria especial', 'insalubridade INSS', 'PPP aposentadoria', 'LTCAT', 'tempo especial', 'atividade insalubre'],
    excerpt: 'Conheça a aposentadoria especial para quem trabalhou exposto a agentes nocivos e como converter o tempo especial para antecipar sua aposentadoria.',
    content: {
      intro: 'A aposentadoria especial é destinada a trabalhadores que exerceram atividades expostos a agentes nocivos à saúde. Com ela, é possível aposentar com menos tempo de contribuição.',
      whatIs: 'A aposentadoria especial é um benefício concedido a quem trabalhou em condições prejudiciais à saúde ou à integridade física. Exige 15, 20 ou 25 anos de trabalho especial, dependendo do grau de nocividade.',
      whenYouHaveRight: [
        'Trabalhou exposto a agentes químicos (óleos, solventes, metais)',
        'Trabalhou exposto a agentes físicos (ruído, calor, vibração)',
        'Trabalhou exposto a agentes biológicos (vírus, bactérias)',
        'Trabalhou em mineração subterrânea (15 anos)',
        'Trabalhou com amianto ou chumbo (20 anos)',
        'Demais atividades insalubres (25 anos)',
      ],
      documents: [
        'PPP (Perfil Profissiográfico Previdenciário)',
        'LTCAT (Laudo Técnico das Condições Ambientais)',
        'Carteiras de trabalho',
        'CNIS (extrato de contribuições)',
        'Formulários SB-40, DISES BE 5235, DSS-8030 (antigos)',
        'Laudos de insalubridade da empresa',
      ],
      deadlines: 'Não há prazo para pedir. Porém, após a Reforma de 2019, é necessária idade mínima (55, 58 ou 60 anos) além do tempo especial. Regras de transição podem beneficiar quem já contribuía.',
      faq: [
        {
          question: 'O que é aposentadoria especial?',
          answer: 'É um benefício para quem trabalhou exposto a agentes nocivos. Permite aposentar com 15, 20 ou 25 anos de trabalho especial, sem idade mínima (regra antiga) ou com idade menor (regra nova).',
        },
        {
          question: 'Quais profissões dão direito?',
          answer: 'Não existe lista fechada de profissões. O que vale é a exposição comprovada a agentes nocivos. Exemplos comuns: enfermeiros, eletricistas, soldadores, mineradores, químicos, frentistas.',
        },
        {
          question: 'Posso converter tempo especial em comum?',
          answer: 'Sim, o tempo especial pode ser convertido em tempo comum com multiplicador (1,4 para homens, 1,2 para mulheres). Isso acelera a aposentadoria comum.',
        },
        {
          question: 'O que é PPP e como conseguir?',
          answer: 'O PPP é o documento que comprova a exposição a agentes nocivos. Deve ser fornecido pela empresa (ou ex-empresa). Você tem direito a exigir mesmo após sair.',
        },
        {
          question: 'Quanto tempo preciso para aposentar?',
          answer: '15 anos para atividades de risco alto (mineração), 20 anos para risco médio (amianto), ou 25 anos para as demais atividades insalubres.',
        },
      ],
    },
    relatedActions: ['aposentadoria-2025', 'auxilio-doenca'],
    updatedAt: '2026-01-12',
  },
  {
    id: 'inss-negou-beneficio',
    nicheId: 'previdenciario',
    slug: 'inss-negou-beneficio-o-que-fazer',
    title: 'INSS Negou Seu Benefício? Veja Como Recorrer',
    metaTitle: 'INSS Negou Benefício | Como Recorrer e Processar',
    metaDescription: 'O INSS indeferiu seu pedido de aposentadoria, auxílio ou BPC? Saiba como recorrer administrativamente ou entrar com ação judicial.',
    keywords: ['INSS negou', 'recurso INSS', 'ação judicial INSS', 'benefício indeferido', 'JEF previdenciário', 'CRPS'],
    excerpt: 'Descubra o que fazer quando o INSS nega seu pedido de benefício: recurso administrativo, ação judicial e como aumentar suas chances.',
    content: {
      intro: 'Ter um benefício negado pelo INSS é mais comum do que parece. Muitos pedidos são indeferidos por falta de documentos, erro de análise ou interpretação restritiva. A boa notícia é que você pode recorrer.',
      whatIs: 'Quando o INSS nega seu pedido, você recebe uma carta com o motivo do indeferimento. A partir daí, pode recorrer administrativamente (dentro do próprio INSS) ou buscar a Justiça para garantir seu direito.',
      whenYouHaveRight: [
        'Aposentadoria negada por falta de tempo',
        'Auxílio-doença negado na perícia',
        'BPC/LOAS negado por renda familiar',
        'Pensão por morte negada por falta de documentos',
        'Aposentadoria especial negada por falta de PPP',
        'Qualquer benefício indeferido que você acredita ter direito',
      ],
      documents: [
        'Carta de indeferimento do INSS',
        'Todos os documentos do pedido original',
        'Novos documentos que comprovem seu direito',
        'Laudos médicos atualizados (para benefícios por incapacidade)',
        'Comprovantes de contribuição não computados',
        'CNIS atualizado',
      ],
      deadlines: 'Recurso administrativo: 30 dias da ciência da decisão. Ação judicial: não tem prazo fixo, mas quanto antes melhor. O benefício pode ser pago retroativamente.',
      faq: [
        {
          question: 'O que fazer se o INSS negar meu pedido?',
          answer: 'Você tem duas opções: recorrer administrativamente à Junta de Recursos (30 dias) ou entrar com ação judicial no JEF. Muitos advogados recomendam ir direto à Justiça.',
        },
        {
          question: 'Qual o prazo para recorrer?',
          answer: 'O prazo para recurso administrativo é de 30 dias. Para ação judicial, tecnicamente não há prazo, mas os valores atrasados só são pagos a partir de determinado momento.',
        },
        {
          question: 'Posso ir direto para a Justiça?',
          answer: 'Sim. Não é obrigatório esgotar a via administrativa antes de processar o INSS. Muitos casos são revertidos na Justiça Federal.',
        },
        {
          question: 'Quanto custa um processo contra o INSS?',
          answer: 'Ações de até 60 salários mínimos vão ao JEF, sem custas e sem necessidade de advogado (embora seja recomendado). Acima disso, há custas e precisa de advogado.',
        },
        {
          question: 'Quanto tempo demora para ganhar na Justiça?',
          answer: 'No JEF, a média é de 1 a 2 anos. Pode ser mais rápido se houver tutela antecipada (decisão provisória para começar a receber enquanto o processo tramita).',
        },
      ],
    },
    relatedActions: ['auxilio-doenca', 'aposentadoria-2025', 'bpc-loas'],
    updatedAt: '2026-01-12',
  },
];

// Adiciona os artigos novos (2026-11) ao acervo antes de aplicar expansions
blogArticles.push(...newArticles2026);
// Cluster de consórcio (2026-11-06), a partir das buscas reais do Search Console
blogArticles.push(...consorcioArticles);

// Helper function to get articles by niche
// Junta as expansões (src/data/article-expansions) aos artigos curtos
for (const a of blogArticles) {
  const x = articleExpansions[`${a.nicheId}/${a.slug}`];
  if (!x) continue;
  a.content.sections = [...(a.content.sections ?? []), ...x.sections];
  if (x.faq) a.content.faq = [...a.content.faq, ...x.faq];
  if (x.updatedAt) a.updatedAt = x.updatedAt;
}

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
import type { ArticleExpansion } from "./types";

const U = "2026-11-05";

const expansions: Record<string, ArticleExpansion> = {
  "penal/violencia-domestica": {
    sections: [
      {
        title: "Passo a passo para pedir ajuda com segurança",
        paragraphs: [
          "Em situação de perigo imediato, ligue 190 e chame a Polícia Militar. Fora da emergência, procure a Delegacia Especializada de Atendimento à Mulher (DEAM) ou qualquer delegacia. O registro também pode ser feito na Defensoria Pública ou no Ministério Público.",
          "Na delegacia, você pode pedir medidas protetivas na hora. O pedido é encaminhado ao juiz, que deve decidir em até 48 horas. Desde 2023, a lei deixa claro que a medida protetiva pode ser concedida mesmo sem boletim de ocorrência, sem inquérito e independentemente do tipo de crime (art. 19, §§4º e 5º, da Lei 11.340/2006).",
          "Quando o município não é sede de comarca, o delegado e, na falta dele, o policial podem afastar o agressor do lar de imediato, comunicando o juiz em até 24 horas (art. 12-C da lei). Se houver lesão, faça o exame de corpo de delito o quanto antes.",
        ],
      },
      {
        title: "Quais medidas protetivas podem ser pedidas",
        paragraphs: [
          "Contra o agressor: afastamento da casa, proibição de se aproximar e de manter contato com a vítima, familiares e testemunhas, suspensão da posse ou do porte de armas, restrição de visitas aos filhos menores e pagamento de alimentos provisórios (art. 22 da lei).",
          "Em favor da vítima: encaminhamento a programas de proteção, retorno ao lar após o afastamento do agressor, matrícula dos filhos em escola mais próxima e auxílio-aluguel por até 6 meses, conforme a situação (art. 23). Também há medidas para proteger bens, como a restituição de objetos tomados pelo agressor (art. 24).",
        ],
      },
      {
        title: "Crimes que a lei passou a prever nos últimos anos",
        paragraphs: [
          "A violência psicológica contra a mulher virou crime próprio em 2021 (art. 147-B do Código Penal). Ela inclui ameaçar, humilhar, controlar, isolar ou manipular de forma que cause dano emocional.",
          "A perseguição, conhecida como stalking, também é crime (art. 147-A do Código Penal). Ela ocorre quando alguém persegue de forma reiterada, por qualquer meio, inclusive internet, ameaçando a integridade da vítima ou restringindo sua liberdade.",
          "Descumprir medida protetiva é crime (art. 24-A da Lei 11.340/2006), e a pena foi aumentada pelo pacote antifeminicídio de 2024 (Lei 14.994/2024). O descumprimento também pode levar à prisão preventiva.",
        ],
      },
      {
        title: "Regras do processo que você deve conhecer",
        paragraphs: [
          "Nos casos de violência doméstica contra a mulher, não se aplica a Lei dos Juizados Especiais (art. 41 da Lei 11.340/2006). Isso significa que não há transação penal nem suspensão condicional do processo (Súmula 536 do STJ). A lesão corporal é de ação pública incondicionada: o processo segue mesmo que a vítima não queira (Súmula 542 do STJ).",
          "Nos crimes que dependem de representação, a vítima só pode renunciar perante o juiz, em audiência marcada para isso e antes do recebimento da denúncia (art. 16 da lei). A lei proíbe pena de cesta básica ou de pagamento isolado de multa (art. 17).",
        ],
      },
      {
        title: "Se você foi acusado: o que não fazer",
        paragraphs: [
          "Quem recebe uma medida protetiva deve cumpri-la à risca, mesmo que discorde dela e mesmo que a vítima faça contato. Procurar a vítima para conversar, pedir para retirar a queixa ou mandar recados por terceiros pode configurar descumprimento e coação.",
          "O caminho correto é procurar um advogado, que pode pedir a revisão da medida ao juiz e apresentar a sua versão no processo, com as provas cabíveis. Todo acusado tem direito à ampla defesa.",
        ],
      },
    ],
    faq: [
      {
        question: "Posso pedir medida protetiva sem fazer boletim de ocorrência?",
        answer: "Sim. Desde a Lei 14.550/2023, a medida protetiva pode ser concedida independentemente de boletim de ocorrência ou de inquérito. O pedido pode ser feito na delegacia, na Defensoria, no Ministério Público ou ao juiz.",
      },
      {
        question: "Quanto tempo dura a medida protetiva?",
        answer: "A lei diz que a medida vale enquanto houver risco à integridade da mulher ou de seus dependentes (art. 19, §6º). O juiz pode revisá-la a qualquer momento.",
      },
      {
        question: "A Lei Maria da Penha vale para namoro e ex-companheiro?",
        answer: "Sim. A lei protege a mulher em qualquer relação íntima de afeto, atual ou passada, mesmo sem morar junto (art. 5º, III).",
      },
      {
        question: "O que fazer se o agressor descumprir a medida protetiva?",
        answer: "Ligue 190 e registre o descumprimento. Guarde prints, áudios e nomes de testemunhas. Descumprir medida protetiva é crime e pode levar à prisão do agressor.",
      },
    ],
    updatedAt: U,
  },

  "penal/crimes-transito-embriaguez-volante": {
    sections: [
      {
        title: "Infração administrativa e crime: a diferença",
        paragraphs: [
          "Dirigir sob influência de álcool é infração administrativa em qualquer quantidade (art. 165 do CTB). A consequência é multa elevada, suspensão do direito de dirigir por 12 meses e recolhimento da CNH. A recusa ao bafômetro tem as mesmas penalidades administrativas (art. 165-A), e o STF considerou essa regra constitucional.",
          "O crime do art. 306 do CTB ocorre quando a capacidade de dirigir está alterada pelo álcool ou outra substância. Ele pode ser provado por concentração de 0,3 miligrama ou mais por litro de ar no bafômetro, por 6 decigramas ou mais por litro de sangue, ou por sinais de alteração da capacidade psicomotora. Vídeo, testemunhas e exame clínico também servem como prova.",
        ],
      },
      {
        title: "Penas dos principais crimes de trânsito",
        paragraphs: [
          "Embriaguez ao volante (art. 306): detenção de 6 meses a 3 anos, multa e suspensão ou proibição de obter a habilitação. Lesão corporal culposa (art. 303): detenção de 6 meses a 2 anos. Se o motorista estava sob efeito de álcool e a lesão foi grave ou gravíssima, a pena passa a reclusão de 2 a 5 anos (art. 303, §2º).",
          "Homicídio culposo (art. 302): detenção de 2 a 4 anos. Se o motorista estava sob efeito de álcool ou outra substância, a pena é de reclusão de 5 a 8 anos (art. 302, §3º). Em casos muito graves, a acusação pode sustentar dolo eventual, o que leva o caso ao Tribunal do Júri. Essa discussão depende muito das provas.",
        ],
      },
      {
        title: "O que fazer se você se envolver em acidente",
        paragraphs: [
          "Pare e preste socorro à vítima ou chame o socorro. O art. 301 do CTB garante que, ao motorista que presta pronto e integral socorro, não se impõe prisão em flagrante nem se exige fiança. Fugir do local é crime próprio (art. 305) e piora muito a situação.",
          "Não discuta nem dê declarações longas no calor do momento. Você tem direito de ficar em silêncio e de falar com um advogado. Se houver prisão, a audiência de custódia deve ocorrer em até 24 horas, e um advogado pode pedir liberdade provisória.",
        ],
      },
      {
        title: "Benefícios processuais que podem ser discutidos",
        paragraphs: [
          "No crime de embriaguez ao volante sem vítimas, a pena mínima permite, em tese, o acordo de não persecução penal (art. 28-A do CPP) ou a suspensão condicional do processo, desde que o acusado preencha os requisitos, como não ser reincidente.",
          "Na lesão corporal culposa simples, cabem os institutos dos Juizados Especiais, salvo quando o motorista estava embriagado, participava de racha ou dirigia mais de 50 km/h acima do limite (art. 291, §1º, do CTB). Cada benefício depende do caso concreto e da análise do Ministério Público.",
        ],
      },
      {
        title: "Erros comuns e quando chamar um advogado",
        paragraphs: [
          "Erros frequentes: emprestar o carro a quem bebeu, o que também é crime (art. 310 do CTB); dirigir com a CNH suspensa, que é crime próprio (art. 307); e assinar documentos sem ler. Outro erro é achar que a recusa ao bafômetro impede o processo criminal, já que outras provas podem ser usadas.",
          "Chame um advogado logo após o flagrante, antes do depoimento formal, e quando receber intimação da delegacia ou do fórum. A defesa pode verificar se o equipamento estava aferido, se os procedimentos foram respeitados e quais acordos são possíveis.",
        ],
      },
    ],
    faq: [
      {
        question: "Posso pagar fiança na delegacia por embriaguez ao volante?",
        answer: "Em regra, sim. Como a pena máxima do art. 306 não passa de 4 anos, o próprio delegado pode arbitrar fiança (art. 322 do CPP). O valor depende da situação econômica do preso.",
      },
      {
        question: "Quem se recusa a fazer o bafômetro pode ser processado criminalmente?",
        answer: "Sim, se houver outras provas da alteração da capacidade, como sinais visíveis registrados pelo agente, vídeo ou testemunhas. A recusa, sozinha, gera as penalidades administrativas.",
      },
      {
        question: "Dirigir sem habilitação é crime?",
        answer: "É crime quando gera perigo de dano (art. 309 do CTB). Sem perigo concreto, é infração administrativa.",
      },
      {
        question: "Quanto tempo depois do acidente posso ser processado?",
        answer: "Depende da pena do crime, que define o prazo de prescrição. Por isso, mesmo sem intimação imediata, é prudente guardar documentos e buscar orientação.",
      },
    ],
    updatedAt: U,
  },

  "penal/calunia-difamacao-injuria": {
    sections: [
      {
        title: "Exemplos práticos de cada crime",
        paragraphs: [
          "Calúnia: postar que um vizinho “roubou a moto do condomínio”, sabendo que isso é falso. Há imputação de um fato definido como crime. Difamação: espalhar no grupo da empresa que uma colega “chega bêbada ao trabalho”. É um fato ofensivo à reputação, mesmo que não seja crime. Injúria: chamar alguém de “ladrão”, “burro” ou outros xingamentos, sem narrar um fato concreto.",
          "A injúria que usa elementos de raça, cor, etnia ou procedência nacional passou a ser tratada como crime de racismo (art. 2º-A da Lei 7.716/1989, incluído pela Lei 14.532/2023). Ela tem pena bem maior e é de ação penal pública incondicionada. Já a injúria por religião, idade ou deficiência segue no art. 140, §3º, do Código Penal.",
        ],
      },
      {
        title: "Passo a passo para quem foi ofendido",
        paragraphs: [
          "Preserve as provas antes que sejam apagadas. Faça prints com data, hora e endereço da página, e grave a tela navegando até a publicação. Para dar mais força à prova, é possível fazer uma ata notarial em cartório, que registra oficialmente o conteúdo.",
          "Identifique o autor. Se o perfil for falso, um advogado pode pedir à Justiça que a plataforma forneça os registros de acesso (art. 22 do Marco Civil da Internet). Depois, avalie com o advogado se cabe queixa-crime, ação de indenização por dano moral ou ambas.",
          "Lembre-se do prazo: na maioria dos casos, a queixa-crime deve ser apresentada em 6 meses a partir do dia em que você soube quem é o autor. Passado esse prazo, perde-se o direito de processar criminalmente.",
        ],
      },
      {
        title: "Retratação, pedido de explicações e exceção da verdade",
        paragraphs: [
          "Na calúnia e na difamação, se o ofensor se retratar de forma completa antes da sentença, fica isento de pena (art. 143 do Código Penal). Se a ofensa foi feita em meios de comunicação, a retratação pode ser feita pelos mesmos meios, se a vítima quiser.",
          "Quando a frase é ambígua, a vítima pode pedir explicações em juízo antes de processar (art. 144). Na calúnia, o acusado pode, em regra, provar que o fato é verdadeiro, o que se chama exceção da verdade (art. 138, §3º).",
        ],
      },
      {
        title: "Como funciona o processo",
        paragraphs: [
          "Em regra, os crimes contra a honra são de ação penal privada: quem processa é a vítima, por meio de advogado, com a queixa-crime. Quando a ofensa é contra servidor público por causa das funções, a vítima pode escolher entre a queixa ou a representação ao Ministério Público (Súmula 714 do STF).",
          "Antes de o juiz receber a queixa, há uma audiência de conciliação (art. 520 do CPP). Como as penas são baixas, muitos casos correm no Juizado Especial Criminal, onde podem ser propostos acordos. O processo criminal não impede a ação de indenização no juízo cível.",
        ],
      },
      {
        title: "Se você está sendo acusado",
        paragraphs: [
          "Críticas, opiniões e relatos verdadeiros feitos sem intenção de ofender podem não configurar crime. A lei também exclui ofensas feitas em juízo pela parte ou pelo advogado, na discussão da causa, e a crítica literária, artística ou científica (art. 142).",
          "Não apague publicações nem envie mensagens à vítima sem orientação. Um advogado pode avaliar se houve crime, se a queixa foi feita no prazo e se cabe retratação ou acordo.",
        ],
      },
    ],
    faq: [
      {
        question: "Posso processar alguém por ofensa em grupo de WhatsApp?",
        answer: "Sim. Ofensas em grupos podem configurar difamação ou injúria. Guarde prints com o número de quem enviou e os nomes de participantes que viram a mensagem.",
      },
      {
        question: "Quanto tempo tenho para processar por calúnia, difamação ou injúria?",
        answer: "Na ação penal privada, o prazo é de 6 meses contados do dia em que você soube quem é o autor da ofensa (art. 103 do Código Penal). Para indenização no cível, o prazo é diferente e maior.",
      },
      {
        question: "Falar a verdade sobre alguém pode ser crime?",
        answer: "Pode ser difamação, se o fato verdadeiro for divulgado para ofender a reputação. Na calúnia, provar que a acusação é verdadeira, em regra, afasta o crime.",
      },
      {
        question: "Injúria racial prescreve?",
        answer: "O STF entendeu que a injúria racial é espécie de racismo e, por isso, é imprescritível. Desde 2023 ela está prevista na Lei 7.716/1989.",
      },
    ],
    updatedAt: U,
  },

  "penal/estelionato-golpes-fraudes": {
    sections: [
      {
        title: "O que fazer nas primeiras horas depois do golpe",
        paragraphs: [
          "Ligue imediatamente para o seu banco pelos canais oficiais e conte o que aconteceu. No caso de Pix, peça expressamente a abertura do MED, o Mecanismo Especial de Devolução. Quanto mais rápido, maior a chance de o dinheiro ainda estar na conta de destino e ser bloqueado.",
          "Registre o boletim de ocorrência, que pode ser feito pela delegacia virtual. Junte comprovantes, prints das conversas, o número de telefone, o perfil usado pelo golpista e os dados da conta que recebeu o dinheiro. Troque senhas e ative a verificação em duas etapas no WhatsApp e no e-mail.",
        ],
      },
      {
        title: "Fraude eletrônica e outras formas agravadas",
        paragraphs: [
          "A Lei 14.155/2021 criou a fraude eletrônica (art. 171, §2º-A, do Código Penal). Ela ocorre quando a vítima ou outra pessoa é enganada por redes sociais, contatos telefônicos, e-mails falsos ou meios parecidos e fornece as informações usadas no golpe; desde a Lei 15.397/2026, a lei também cita a clonagem de aparelho e o uso de aplicativos. A pena é de reclusão de 4 a 8 anos, maior que a do estelionato comum, que é de 1 a 5 anos.",
          "A pena aumenta se o golpe for contra idoso ou pessoa vulnerável (art. 171, §4º) e se o servidor usado estiver fora do país (§2º-B). Pirâmides financeiras podem configurar também crime contra a economia popular (art. 2º, IX, da Lei 1.521/1951).",
        ],
      },
      {
        title: "Representação e local da investigação",
        paragraphs: [
          "De 2019 até 3 de maio de 2026, o estelionato comum dependia de representação da vítima, ou seja, da manifestação de que ela queria ver o autor processado (antigo § 5º do art. 171 do Código Penal). A Lei 15.397/2026 revogou essa exigência: para golpes a partir de 4 de maio de 2026, a polícia e o Ministério Público agem mesmo sem a manifestação da vítima.",
          "Para fatos anteriores, a defesa pode sustentar que a exigência continua valendo, porque a mudança piora a situação do acusado; nesses casos, a vítima que quer o processo deve representar em até 6 meses depois de saber quem é o autor, o que na prática se faz no boletim de ocorrência ou na delegacia. Quando o golpe envolve transferência, depósito ou cheque sem fundos, a investigação corre no local do domicílio da vítima (art. 70, §4º, do CPP), o que facilita o acompanhamento.",
        ],
      },
      {
        title: "Golpes comuns e como identificar",
        paragraphs: [
          "Golpe do falso parente: alguém com foto de um familiar pede dinheiro com urgência por um número novo. Golpe da falsa central do banco: o golpista liga dizendo que há uma compra suspeita e pede para você fazer transferências “de segurança”. Golpe do falso advogado: uma pessoa se apresenta como seu advogado e pede pagamento para liberar um valor de processo.",
          "Em todos eles, a regra é a mesma: desconfie da urgência, confirme por outro canal e nunca faça transferências para “proteger” o dinheiro. Banco não pede senha nem transferência por telefone. Seu advogado verdadeiro pode ser confirmado pelo número oficial do escritório.",
        ],
      },
      {
        title: "Recuperar o dinheiro e responsabilidade do banco",
        paragraphs: [
          "Além do MED, é possível entrar com ação cível contra quem recebeu o dinheiro e, em certos casos, contra o banco. A Súmula 479 do STJ diz que os bancos respondem por fraudes praticadas por terceiros quando o problema faz parte do risco da atividade bancária, como falhas de segurança ou movimentações muito fora do perfil do cliente.",
          "Já quando a própria vítima fez a transferência por engano, sem falha do banco, a responsabilidade é discutida caso a caso. Um advogado pode analisar o histórico de movimentações e verificar se houve falha que justifique o pedido.",
        ],
      },
      {
        title: "Se você foi acusado ou emprestou sua conta",
        paragraphs: [
          "Muitas pessoas emprestam ou “alugam” a conta bancária a terceiros sem saber que ela será usada para receber dinheiro de golpes. Essas contas são chamadas de “contas laranja”, e o titular pode ser investigado. Desde 4 de maio de 2026, ceder a conta, de graça ou por dinheiro, para que nela passem recursos de crime ou destinados a financiar crime é estelionato, com a mesma pena (art. 171, § 2º, VII, incluído pela Lei 15.397/2026). Se você recebeu uma intimação por isso, não ignore e não preste depoimento sem orientação.",
          "Um advogado pode demonstrar a sua real participação nos fatos e avaliar se cabe acordo de não persecução penal ou outra solução prevista em lei.",
        ],
      },
    ],
    faq: [
      {
        question: "Caí em golpe do Pix. O banco é obrigado a devolver?",
        answer: "Não automaticamente. O banco deve analisar o pedido pelo MED e pode ser responsabilizado se houver falha na segurança. Cada caso depende das circunstâncias.",
      },
      {
        question: "Preciso de advogado para registrar boletim de ocorrência de golpe?",
        answer: "Não. O boletim pode ser feito pela própria vítima, inclusive pela internet. O advogado ajuda depois, para acompanhar a investigação e buscar a recuperação do valor.",
      },
      {
        question: "Quanto tempo tenho para denunciar um estelionato?",
        answer: "Para golpes a partir de 4 de maio de 2026, o processo não depende mais de representação da vítima (a Lei 15.397/2026 revogou essa exigência). Para fatos anteriores, a representação deve ser feita em até 6 meses do dia em que a vítima souber quem é o autor. Em qualquer caso, o ideal é registrar imediatamente, para aumentar a chance de bloqueio do dinheiro.",
      },
      {
        question: "O que fazer se clonaram meu WhatsApp?",
        answer: "Avise seus contatos por outros meios, peça o bloqueio da conta pelo suporte do aplicativo, registre boletim de ocorrência e ative a verificação em duas etapas assim que recuperar o acesso.",
      },
    ],
    updatedAt: "2026-11-08",
  },
};

export default expansions;

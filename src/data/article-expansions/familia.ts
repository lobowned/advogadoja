import type { ArticleExpansion } from "./types";

const U = "2026-11-05";

const expansions: Record<string, ArticleExpansion> = {
  "familia/divorcio-consensual": {
    updatedAt: "2026-11-07",
    sections: [
      {
        title: "Base legal: o que permite o divórcio direto",
        paragraphs: [
          "Desde a Emenda Constitucional 66/2010, que alterou o art. 226, § 6º, da Constituição, não é mais preciso estar separado há algum tempo nem explicar o motivo para se divorciar. Basta a vontade de pelo menos um dos cônjuges. No divórcio consensual, os dois concordam com o fim do casamento e com as condições.",
          "O divórcio em cartório foi criado pela Lei 11.441/2007 e hoje está no art. 733 do Código de Processo Civil, regulamentado pela Resolução 35/2007 do CNJ. Em 2024, a Resolução 571 do CNJ passou a admitir o divórcio extrajudicial mesmo havendo filhos menores ou incapazes, desde que as questões de guarda, convivência e alimentos já tenham sido resolvidas na Justiça. Na falta dessa definição prévia, o caminho continua sendo o judicial.",
        ],
      },
      {
        title: "Passo a passo no cartório",
        paragraphs: [
          "O casal escolhe um advogado (pode ser o mesmo para os dois) e define os termos: partilha dos bens, eventual pensão entre os cônjuges e se algum deles volta a usar o nome de solteiro. O advogado redige a minuta e envia ao tabelionato de notas escolhido, que pode ser de qualquer cidade.",
          "O cartório confere os documentos, calcula os emolumentos pela tabela estadual e marca a assinatura da escritura. Também é possível fazer o ato por videoconferência, pela plataforma e-Notariado, com certificado digital. Depois de assinada, a escritura é levada ao cartório de registro civil onde o casamento foi registrado, para averbação. Se houver imóveis, a escritura também deve ser registrada no cartório de imóveis.",
        ],
      },
      {
        title: "Partilha de bens e impostos",
        paragraphs: [
          "A divisão dos bens depende do regime de casamento. Na comunhão parcial, o padrão no Brasil, dividem-se os bens comprados durante o casamento; heranças e doações recebidas por um só, em regra, não entram. Na comunhão universal, quase tudo se comunica. Na separação de bens, cada um fica com o que é seu.",
          "Se a divisão não for igualitária, a parte que um recebe a mais pode ser tributada: se não houver pagamento, pode incidir ITCMD, como doação; se houver compensação em dinheiro, pode incidir ITBI no caso de imóveis. É possível também se divorciar primeiro e fazer a partilha depois (art. 1.581 do Código Civil), o que ajuda quando os bens ainda não estão regularizados.",
        ],
      },
      {
        title: "Divórcio consensual judicial",
        paragraphs: [
          "Quando há filhos menores sem guarda e alimentos definidos, ou quando o casal prefere, o pedido é feito na Vara de Família, com petição assinada pelos dois e pelo advogado. O acordo deve tratar de guarda (a compartilhada é a regra do art. 1.584, § 2º, do Código Civil), convivência, pensão e partilha. O Ministério Público se manifesta e o juiz homologa.",
          "Exemplo típico: casal com um filho de 6 anos que concorda em guarda compartilhada, com residência na casa da mãe, convivência em fins de semana alternados e pensão em percentual do salário do pai. Com o acordo bem redigido, a homologação tende a ser rápida.",
        ],
      },
      {
        title: "Erros comuns e quando procurar um advogado",
        paragraphs: [
          "Erros frequentes: deixar a partilha para depois e esquecer de regularizar o imóvel; fazer acordo de pensão sem prever reajuste ou despesas extras como material escolar e plano de saúde; e não decidir sobre dívidas do casal, como financiamentos. Acordos vagos costumam gerar novos processos.",
          "Como o advogado é obrigatório, a escolha deve considerar quem vai explicar com clareza os efeitos de cada cláusula. Quando há empresa, imóveis financiados ou bens em outros estados, a análise prévia evita surpresas.",
        ],
      },
    ],
    faq: [
      {
        question: "Quanto tempo demora um divórcio em cartório?",
        answer: "Com documentos em ordem, a escritura costuma ser assinada em poucos dias ou semanas, conforme a agenda do cartório. Depois, ainda é preciso averbar no registro civil.",
      },
      {
        question: "Dá para fazer divórcio online?",
        answer: "Sim. Pelo e-Notariado, a escritura pode ser assinada por videoconferência, com certificado digital emitido gratuitamente pelo próprio cartório.",
      },
      {
        question: "Posso me divorciar sem dividir os bens?",
        answer: "Sim. O divórcio pode ser feito sem partilha (art. 1.581 do Código Civil), e a divisão é resolvida depois, em cartório ou na Justiça.",
      },
      {
        question: "Com filho menor dá para fazer divórcio em cartório?",
        answer: "Desde a Resolução 571/2024 do CNJ, é possível se a guarda, a convivência e os alimentos já tiverem sido definidos judicialmente. Caso contrário, o divórcio deve ser judicial.",
      },
    ],
  },

  "familia/pensao-alimenticia": {
    updatedAt: U,
    sections: [
      {
        title: "Base legal: necessidade, possibilidade e proporcionalidade",
        paragraphs: [
          "Os alimentos estão nos arts. 1.694 a 1.710 do Código Civil. O valor deve atender às necessidades de quem recebe e às possibilidades de quem paga (art. 1.694, § 1º). Os dois pais contribuem na proporção dos seus recursos (art. 1.703). O pai ou a mãe que mora com a criança também contribui, com cuidados diários e gastos da casa.",
          "O processo de alimentos segue a Lei 5.478/1968, que permite ao juiz fixar alimentos provisórios logo no início (art. 4º), antes mesmo da defesa do outro lado. Na gravidez, a Lei 11.804/2008 permite pedir alimentos gravídicos ao suposto pai, para despesas da gestação, que se convertem em pensão para a criança após o nascimento.",
        ],
      },
      {
        title: "Passo a passo para pedir a pensão",
        paragraphs: [
          "Se houver acordo, os pais podem formalizá-lo e levá-lo à homologação judicial, inclusive por meio de centros de conciliação (CEJUSC) ou da Defensoria Pública. Sem acordo, é preciso ajuizar ação de alimentos na Vara de Família do domicílio da criança.",
          "Reúna a certidão de nascimento, comprovantes de gastos (escola, plano de saúde, remédios, alimentação, transporte, moradia) e o que souber sobre a renda do outro genitor: onde trabalha, se tem empresa, carro, padrão de vida nas redes sociais. Se ele for empregado, peça que a pensão seja descontada em folha e que incida sobre 13º e férias, conforme a fixação.",
          "Uma planilha simples de despesas mensais da criança ajuda o juiz a entender a necessidade. Exemplo típico: mãe que comprova gasto mensal com escola, transporte e alimentação e demonstra que o pai trabalha com carteira assinada; o juiz pode fixar percentual do salário já nos alimentos provisórios.",
        ],
      },
      {
        title: "Quando o devedor não paga: execução e prisão",
        paragraphs: [
          "O cumprimento da sentença de alimentos está nos arts. 528 a 533 do CPC. Pelo rito da prisão, cobram-se as três últimas parcelas vencidas antes do pedido e as que vencerem durante o processo (Súmula 309 do STJ). Se não pagar, provar que pagou ou justificar a impossibilidade, o devedor pode ter prisão civil decretada de 1 a 3 meses, em regime fechado, separado dos presos comuns.",
          "Parcelas mais antigas são cobradas pelo rito da penhora: bloqueio de contas, penhora de bens, desconto em folha de até 50% dos ganhos líquidos somando a pensão corrente (art. 529, § 3º), protesto do título e inclusão em cadastros de inadimplentes. A prisão não extingue a dívida.",
        ],
      },
      {
        title: "Avós, maioridade e prazos",
        paragraphs: [
          "Se o pai ou a mãe não puder pagar, os avós podem ser chamados a complementar a pensão, de forma subsidiária: é preciso demonstrar que os pais não têm condições (Súmula 596 do STJ). A maioridade não encerra a pensão automaticamente: o cancelamento depende de decisão judicial, com direito de o filho se manifestar (Súmula 358 do STJ). Filhos que estudam costumam continuar recebendo até concluir a formação.",
          "As parcelas vencidas prescrevem em 2 anos (art. 206, § 2º, do Código Civil), mas esse prazo não corre enquanto o filho for menor de idade e estiver sob o poder familiar (art. 197, II). Ainda assim, deixar a dívida acumular dificulta a cobrança pelo rito da prisão.",
        ],
      },
      {
        title: "Erros comuns e quando procurar um advogado",
        paragraphs: [
          "Erros comuns: fazer acordo apenas verbal; aceitar pagamentos sem comprovante; pagar diretamente em compras e presentes no lugar da pensão fixada, o que pode não ser aceito como pagamento; e deixar de cobrar por meses. Quem paga deve sempre depositar na conta indicada e guardar os comprovantes.",
          "A orientação jurídica é importante quando o devedor é autônomo ou esconde renda, quando há dívida acumulada ou quando se discute o envolvimento dos avós.",
        ],
      },
    ],
    faq: [
      {
        question: "Pensão alimentícia é 30% do salário?",
        answer: "Não existe percentual fixo em lei. O juiz define o valor pelo binômio necessidade e possibilidade, considerando a realidade de cada família.",
      },
      {
        question: "Quantos meses de atraso na pensão dão prisão?",
        answer: "Pelo entendimento da Súmula 309 do STJ, a prisão pode ser pedida pelas três últimas parcelas vencidas antes do pedido e pelas que vencerem durante o processo. Basta uma parcela em atraso para iniciar a cobrança.",
      },
      {
        question: "Pai desempregado tem que pagar pensão?",
        answer: "Sim. O desemprego não extingue a obrigação, mas pode justificar pedido de revisão do valor. Sem revisão, o valor fixado continua valendo.",
      },
      {
        question: "Grávida pode pedir pensão?",
        answer: "Sim. A Lei 11.804/2008 permite pedir alimentos gravídicos ao suposto pai, com base em indícios de paternidade, para custear despesas da gestação.",
      },
    ],
  },

  "familia/divorcio-litigioso": {
    updatedAt: U,
    sections: [
      {
        title: "Como funciona o processo na Vara de Família",
        paragraphs: [
          "O divórcio litigioso segue as regras das ações de família do CPC (arts. 693 a 699). Depois da petição inicial, o juiz pode decidir pedidos urgentes, como alimentos provisórios, guarda provisória e afastamento do lar. Em seguida, o réu é citado para uma audiência de mediação e conciliação (art. 695), e o mandado de citação não traz cópia da petição, justamente para estimular o acordo.",
          "Se não houver acordo, abre-se prazo para contestação e o processo segue com provas: documentos, testemunhas, estudo psicossocial (em disputas de guarda) e pesquisa de bens. Ao final, o juiz decide tudo o que ficou controvertido.",
        ],
      },
      {
        title: "O divórcio pode sair antes do fim da briga",
        paragraphs: [
          "Como o divórcio é um direito que não depende da concordância do outro, muitos juízes decretam o divórcio logo no início ou no meio do processo, por julgamento antecipado parcial do mérito (art. 356 do CPC) ou tutela de evidência, deixando a discussão de bens, guarda e pensão para depois. Assim, a pessoa já pode mudar o estado civil e seguir a vida.",
          "Isso evita que um dos cônjuges use a demora como forma de pressão. A discussão sobre os bens, porém, continua até ser resolvida.",
        ],
      },
      {
        title: "Proteção do patrimônio e da família durante o processo",
        paragraphs: [
          "Se houver risco de um dos cônjuges vender ou esconder bens, é possível pedir medidas como arrolamento de bens, bloqueio de matrícula de imóveis e de veículos e pesquisa nos sistemas judiciais (Sisbajud, Renajud, Infojud). Guardar cópias de extratos, declarações de imposto de renda e documentos de bens antes de sair de casa ajuda muito.",
          "Em situações de violência doméstica, as medidas protetivas da Lei 11.340/2006 (Lei Maria da Penha) podem ser pedidas na delegacia ou diretamente ao juiz, com afastamento do agressor e proibição de contato. A mulher em situação de violência tem prioridade de tramitação no processo de divórcio.",
        ],
      },
      {
        title: "Guarda dos filhos no divórcio litigioso",
        paragraphs: [
          "Mesmo sem acordo entre os pais, a guarda compartilhada é a regra (art. 1.584, § 2º, do Código Civil), salvo se um deles declarar que não quer a guarda ou houver elementos de risco, como violência doméstica. Compartilhar a guarda não significa dividir o tempo meio a meio; significa decidir em conjunto sobre a vida da criança.",
          "Exemplo típico: pais que não conversam, mas ambos são presentes. O juiz pode fixar guarda compartilhada com residência com um deles e calendário detalhado de convivência, feriados e férias. Atos de alienação parental, como impedir contato ou desqualificar o outro genitor, são combatidos pela Lei 12.318/2010.",
        ],
      },
      {
        title: "Erros comuns e quando procurar um advogado",
        paragraphs: [
          "Erros frequentes: sair de casa levando documentos do outro ou trancando contas conjuntas de forma abrupta; expor a briga nas redes sociais; usar os filhos como intermediários; e fazer acordos informais por mensagem sem homologação. Tudo isso pode ser usado no processo.",
          "Como o litígio envolve estratégia, provas e prazos, a assistência de advogado é obrigatória e deve começar antes da saída de casa, sempre que possível, para planejar a proteção dos bens e dos filhos. Quem não pode pagar pode procurar a Defensoria Pública.",
        ],
      },
    ],
    faq: [
      {
        question: "Quanto tempo leva um divórcio litigioso?",
        answer: "Varia conforme a vara, a quantidade de bens e as provas necessárias. O divórcio em si pode ser decretado cedo; a partilha e a guarda costumam demorar mais.",
      },
      {
        question: "Preciso provar traição para me divorciar?",
        answer: "Não. Desde a EC 66/2010, o divórcio não depende de motivo nem de culpa. A traição, em regra, não altera a divisão dos bens.",
      },
      {
        question: "Quem sai de casa perde direito aos bens?",
        answer: "Não. Sair de casa não faz perder a meação. Há uma regra específica de usucapião familiar (art. 1.240-A do Código Civil) para casos de abandono do lar por dois anos, por isso é importante formalizar a separação.",
      },
      {
        question: "Dá para pedir pensão durante o divórcio?",
        answer: "Sim. Alimentos provisórios para os filhos, e em alguns casos para o cônjuge, podem ser pedidos logo no início do processo.",
      },
    ],
  },

  "familia/revisao-pensao-alimenticia-2025": {
    updatedAt: U,
    sections: [
      {
        title: "Base legal da revisão",
        paragraphs: [
          "O art. 1.699 do Código Civil permite pedir a revisão quando houver mudança na situação financeira de quem paga ou na necessidade de quem recebe. O art. 15 da Lei 5.478/1968 também estabelece que a decisão sobre alimentos pode ser revista a qualquer tempo, diante da modificação da situação dos interessados.",
          "A mudança precisa ser real e posterior à fixação. Não basta discordar do valor; é preciso mostrar o que mudou desde o acordo ou a sentença anterior.",
        ],
      },
      {
        title: "Passo a passo para pedir revisão",
        paragraphs: [
          "Se as partes concordam com o novo valor, podem assinar acordo e pedir a homologação na Vara de Família ou no CEJUSC. Sem acordo, ajuíza-se ação revisional de alimentos, normalmente no domicílio de quem recebe a pensão.",
          "Junte a decisão anterior, comprovantes de renda atual e documentos da mudança: carta de demissão, carteira de trabalho, extratos, laudos médicos, boletos de escola, comprovante de novo filho. O juiz pode fixar valor provisório no início, se houver prova suficiente.",
          "Os efeitos da revisão retroagem à data da citação (art. 13, § 2º, da Lei 5.478/1968). Quanto antes o pedido for feito, mais cedo o novo valor passa a valer.",
        ],
      },
      {
        title: "Exemplos típicos de aumento e de redução",
        paragraphs: [
          "Aumento: a criança começou a precisar de tratamento contínuo com fonoaudiologia e o plano não cobre; ou o pai, que recebia salário modesto quando a pensão foi fixada, abriu empresa e passou a ter padrão de vida bem maior. Redução: o pai perdeu o emprego formal e passou a fazer bicos; ou teve outro filho e a renda não acompanhou.",
          "Ter outro filho não reduz a pensão automaticamente. O juiz avalia se a capacidade de pagamento realmente diminuiu. Da mesma forma, um aumento pontual de renda pode não justificar revisão se não for estável.",
        ],
      },
      {
        title: "O que não fazer enquanto a revisão não sai",
        paragraphs: [
          "Quem paga não deve reduzir o valor por conta própria. Até a decisão, continua devendo o valor antigo, e a diferença pode ser cobrada, inclusive com risco de prisão. Também não é possível parar de pagar porque o filho fez 18 anos: o fim da obrigação depende de decisão judicial (Súmula 358 do STJ), em ação de exoneração.",
          "Quem recebe deve guardar todos os comprovantes de gastos. Em ação revisional para aumento, a prova das novas despesas é o que sustenta o pedido.",
        ],
      },
      {
        title: "Quando procurar um advogado",
        paragraphs: [
          "Vale procurar orientação quando a mudança de renda é difícil de provar (trabalho informal, empresa, renda variável), quando há dívida acumulada junto com o pedido de redução ou quando se discute exoneração por maioridade. A estratégia de prova faz diferença no resultado.",
        ],
      },
    ],
    faq: [
      {
        question: "Posso diminuir a pensão por conta própria se perdi o emprego?",
        answer: "Não. É preciso pedir revisão na Justiça ou fazer acordo homologado. Até lá, o valor fixado continua devido.",
      },
      {
        question: "A revisão de pensão vale a partir de quando?",
        answer: "O novo valor retroage à data da citação na ação revisional (art. 13, § 2º, da Lei 5.478/1968).",
      },
      {
        question: "Ter outro filho reduz a pensão?",
        answer: "Não automaticamente. O nascimento de outro filho pode justificar revisão se comprovar que a capacidade de pagamento diminuiu.",
      },
      {
        question: "Pensão em salário mínimo aumenta sozinha?",
        answer: "Sim. Se foi fixada em percentual do salário mínimo, acompanha o reajuste do salário mínimo vigente sem necessidade de novo processo.",
      },
    ],
  },

  "familia/uniao-estavel-direitos": {
    updatedAt: U,
    sections: [
      {
        title: "Base legal da união estável",
        paragraphs: [
          "A união estável está prevista no art. 226, § 3º, da Constituição e nos arts. 1.723 a 1.727 do Código Civil. É a convivência pública, contínua e duradoura, com objetivo de constituir família. Pessoas casadas, mas separadas de fato, podem viver em união estável (art. 1.723, § 1º).",
          "Salvo contrato escrito, aplica-se o regime da comunhão parcial (art. 1.725): os bens adquiridos de forma onerosa durante a união pertencem aos dois. A união pode ser convertida em casamento pelo pedido no cartório de registro civil (art. 1.726).",
        ],
      },
      {
        title: "Herança e pensão por morte",
        paragraphs: [
          "O STF, no Tema 809 (RE 878.694), declarou inconstitucional o art. 1.790 do Código Civil, que dava ao companheiro menos direitos que ao cônjuge na herança. Hoje, aplica-se ao companheiro a mesma regra do cônjuge do art. 1.829. Ele também tem direito real de habitação sobre o imóvel em que o casal morava.",
          "No INSS, o companheiro é dependente para pensão por morte, mas precisa comprovar a união com início de prova material produzida em até 24 meses antes do óbito (art. 16, § 5º, da Lei 8.213/1991). Contas no mesmo endereço, conta bancária conjunta, plano de saúde como dependente e declaração de imposto de renda são provas úteis. A escritura de união estável facilita muito.",
        ],
      },
      {
        title: "Passo a passo para formalizar",
        paragraphs: [
          "No tabelionato de notas, o casal faz uma escritura pública declaratória de união estável, informando a data de início, o regime de bens e, se quiser, regras sobre o patrimônio. É possível escolher separação total ou outro regime, mas a escolha, em regra, vale para o futuro.",
          "Depois, a escritura pode ser registrada no Livro E do cartório de registro civil, o que dá publicidade perante terceiros e facilita a prova em bancos, no INSS e em planos de saúde. Também é possível fazer o termo declaratório diretamente no registro civil. Pessoas com mais de 70 anos estão sujeitas à separação obrigatória de bens (art. 1.641, II), mas o STF, no Tema 1236, admitiu afastar essa regra por escritura pública.",
        ],
      },
      {
        title: "Dissolução e reconhecimento depois do fim ou da morte",
        paragraphs: [
          "A dissolução consensual pode ser feita em cartório, com advogado, quando os requisitos do art. 733 do CPC estiverem presentes. Havendo conflito, é preciso ação de reconhecimento e dissolução de união estável na Vara de Família, com pedido de partilha, guarda e alimentos, se for o caso.",
          "Quando o companheiro falece sem que a união estivesse formalizada, o sobrevivente pode pedir o reconhecimento da união estável post mortem contra os herdeiros. Exemplo típico: casal que viveu junto por 12 anos sem papel; com fotos, testemunhas, contas e documentos de endereço, a companheira pede o reconhecimento para participar do inventário e receber a pensão do INSS.",
        ],
      },
      {
        title: "Erros comuns e quando procurar um advogado",
        paragraphs: [
          "Erros comuns: comprar imóvel só no nome de um, achando que o outro não terá direito; não registrar a data de início na escritura; confundir namoro qualificado com união estável; e deixar para provar a união só depois do falecimento. Contrato de namoro pode ajudar a esclarecer a intenção, mas não prevalece se a realidade for de família.",
          "Um advogado é recomendado para redigir contratos com regime diferente, para dissoluções com bens e para ações de reconhecimento post mortem.",
        ],
      },
    ],
    faq: [
      {
        question: "Quanto tempo de namoro vira união estável?",
        answer: "A lei não fixa tempo mínimo. O que define é a convivência pública, contínua e duradoura com objetivo de constituir família.",
      },
      {
        question: "Companheiro tem os mesmos direitos de herança que o cônjuge?",
        answer: "Sim. Desde o Tema 809 do STF, aplica-se ao companheiro a mesma regra sucessória do cônjuge prevista no art. 1.829 do Código Civil.",
      },
      {
        question: "Como provar união estável para pensão do INSS?",
        answer: "É preciso início de prova material produzida em até 24 meses antes do óbito, como contas no mesmo endereço, escritura de união estável, conta conjunta ou dependência em plano de saúde.",
      },
      {
        question: "Escritura de união estável custa quanto?",
        answer: "O valor segue a tabela de emolumentos do estado onde fica o cartório. Consulte o tabelionato de notas da sua cidade.",
      },
    ],
  },

  "familia/reconhecimento-paternidade": {
    updatedAt: U,
    sections: [
      {
        title: "Reconhecimento voluntário no cartório",
        paragraphs: [
          "O pai pode reconhecer o filho a qualquer momento, no próprio registro de nascimento, por escritura, por testamento ou por declaração perante o juiz (art. 1.609 do Código Civil e Lei 8.560/1992). Pelo Provimento 16/2012 do CNJ, o reconhecimento espontâneo pode ser feito em qualquer cartório de registro civil do país, que encaminha ao cartório onde está o registro.",
          "Se o filho for maior de idade, é preciso o consentimento dele. Se for menor, a mãe é ouvida. O pai biológico não precisa de exame de DNA para reconhecer voluntariamente, mas o ato é irrevogável.",
        ],
      },
      {
        title: "Investigação de paternidade na Justiça",
        paragraphs: [
          "Quando o suposto pai não reconhece, cabe ação de investigação de paternidade, normalmente cumulada com pedido de alimentos. A ação é imprescritível (Súmula 149 do STF). A prova central é o exame de DNA, que pode ser feito gratuitamente para quem tem gratuidade da justiça.",
          "A recusa do suposto pai em fazer o exame gera presunção de paternidade, a ser avaliada com as demais provas (art. 2º-A da Lei 8.560/1992 e Súmula 301 do STJ). Se o suposto pai já faleceu, o exame pode ser feito com parentes, como avós e irmãos paternos, e a recusa desses parentes também gera presunção (art. 2º-A, § 2º, incluído pela Lei 14.138/2021).",
          "Quando o registro de nascimento não tem o nome do pai, o oficial do cartório pode enviar ao juiz o nome indicado pela mãe, para averiguação oficiosa (art. 2º da Lei 8.560/1992). O Ministério Público também pode propor a ação.",
        ],
      },
      {
        title: "Paternidade socioafetiva e multiparentalidade",
        paragraphs: [
          "O vínculo construído pelo afeto e pela convivência também pode gerar paternidade. O reconhecimento socioafetivo pode ser feito em cartório para pessoas acima de 12 anos, com consentimento, conforme as normas do CNJ, ou na Justiça. O STF, no Tema 622, admitiu que a paternidade socioafetiva e a biológica coexistam, com todos os efeitos jurídicos.",
          "Exemplo típico: padrasto que cria a enteada desde os 2 anos e é visto por todos como pai. Ela pode ter os dois pais no registro, com direitos de nome, alimentos e herança em relação a ambos.",
        ],
      },
      {
        title: "Efeitos: nome, pensão e herança",
        paragraphs: [
          "Reconhecida a paternidade, o filho passa a ter direito ao sobrenome do pai, a alimentos e à herança, em igualdade com os demais filhos (art. 227, § 6º, da Constituição). Os alimentos são devidos desde a citação (Súmula 277 do STJ). Se o pai já faleceu e o inventário foi concluído, cabe petição de herança, que, diferente da investigação, tem prazo.",
        ],
      },
      {
        title: "Erros comuns e quando procurar um advogado",
        paragraphs: [
          "Erros comuns: fazer exame de DNA particular sem cadeia de custódia e esperar que valha como prova definitiva; reconhecer filho por pressão sem certeza, já que o ato é irrevogável salvo erro ou falsidade; e deixar para pedir a herança muitos anos depois. A orientação de um advogado é útil em casos com pai falecido, com pai registral diferente do biológico e quando se pede pensão junto.",
        ],
      },
    ],
    faq: [
      {
        question: "Como fazer DNA de graça pela Justiça?",
        answer: "Na ação de investigação de paternidade, quem tem gratuidade da justiça pode fazer o exame sem custo. A Defensoria Pública também orienta e, em alguns locais, promove mutirões de reconhecimento.",
      },
      {
        question: "O suposto pai é obrigado a fazer DNA?",
        answer: "Ninguém é levado à força, mas a recusa gera presunção de paternidade, avaliada com as demais provas (Súmula 301 do STJ e art. 2º-A da Lei 8.560/1992).",
      },
      {
        question: "Dá para fazer investigação de paternidade se o pai já morreu?",
        answer: "Sim. O exame pode ser feito com parentes do falecido, e a ação é proposta contra os herdeiros. A recusa dos parentes também gera presunção.",
      },
      {
        question: "Pode ter dois pais na certidão?",
        answer: "Sim. O STF, no Tema 622, admitiu a multiparentalidade, com pai socioafetivo e pai biológico registrados ao mesmo tempo.",
      },
    ],
  },

  "familia/inventario-heranca": {
    updatedAt: U,
    sections: [
      {
        title: "Quem herda e em que ordem",
        paragraphs: [
          "A ordem da herança está no art. 1.829 do Código Civil: primeiro os descendentes (filhos, e na falta deles, netos), em concorrência com o cônjuge ou companheiro conforme o regime de bens; depois os ascendentes (pais, avós), em concorrência com o cônjuge; depois o cônjuge sozinho; e, por fim, os colaterais até o quarto grau (irmãos, sobrinhos, tios, primos).",
          "É importante separar meação de herança. Na comunhão parcial, por exemplo, o cônjuge já é dono de metade dos bens comprados durante o casamento; essa metade não é herança. A herança é a outra metade, dividida entre os herdeiros conforme a lei.",
        ],
      },
      {
        title: "Inventário em cartório: passo a passo",
        paragraphs: [
          "O inventário extrajudicial está no art. 610 do CPC e na Lei 11.441/2007, com regras da Resolução 35/2007 do CNJ. Em 2024, a Resolução 571 do CNJ passou a admitir, sob certas condições, o inventário em cartório mesmo com herdeiro menor ou incapaz e mesmo havendo testamento, desde que haja consenso e sejam observadas as exigências, como a manifestação do Ministério Público em determinadas hipóteses.",
          "O caminho prático é: reunir certidão de óbito, documentos dos herdeiros, certidões dos bens e certidões negativas; o advogado elabora a minuta da partilha; os herdeiros nomeiam um inventariante; o ITCMD é calculado e pago na Secretaria da Fazenda do estado; e o tabelião lavra a escritura, que serve para registrar imóveis, transferir veículos e sacar valores.",
        ],
      },
      {
        title: "Inventário judicial e alvará",
        paragraphs: [
          "Quando há briga entre herdeiros ou não estão presentes os requisitos do cartório, o inventário é judicial. Se todos concordam, usa-se o arrolamento sumário (art. 659 do CPC), mais simples. O CPC prevê abertura em até 2 meses do óbito e conclusão em 12 meses (art. 611), mas na prática o prazo depende do caso. O atraso na abertura pode gerar multa sobre o ITCMD conforme a lei de cada estado.",
          "Para valores pequenos deixados pelo falecido, como saldo de FGTS, PIS-PASEP, restituição de imposto de renda e pequenas contas, pode bastar um alvará judicial, sem inventário completo, conforme a Lei 6.858/1980. Os dependentes habilitados no INSS têm preferência para esses valores.",
        ],
      },
      {
        title: "Exemplos típicos e erros comuns",
        paragraphs: [
          "Exemplo típico: pai falece deixando uma casa e um carro, viúva casada em comunhão parcial e três filhos maiores, todos de acordo. O caso pode ser resolvido em cartório. Outro exemplo: irmãos que moram em estados diferentes e um deles ocupa o imóvel sozinho sem pagar nada aos demais; aqui o inventário judicial, com pedido de aluguel ou venda, costuma ser necessário.",
          "Erros comuns: vender bens antes do inventário por contrato de gaveta; esquecer bens descobertos depois (que exigem sobrepartilha); deixar o imóvel sem regularizar por décadas, o que acumula inventários de várias gerações; e não verificar dívidas do falecido, que são pagas com a herança, até o limite dela (art. 1.792 do Código Civil).",
        ],
      },
      {
        title: "Quando procurar um advogado",
        paragraphs: [
          "O advogado é obrigatório no inventário, tanto no cartório quanto na Justiça. A orientação desde o início ajuda a escolher o caminho mais adequado, planejar o pagamento do ITCMD, regularizar imóveis antes da partilha e evitar conflitos entre herdeiros.",
        ],
      },
    ],
    faq: [
      {
        question: "Qual o prazo para abrir inventário?",
        answer: "O CPC prevê 2 meses a partir do óbito (art. 611). O atraso pode gerar multa sobre o ITCMD, conforme a lei do estado onde estão os bens ou onde corre o inventário.",
      },
      {
        question: "Pode fazer inventário em cartório com herdeiro menor?",
        answer: "Desde a Resolução 571/2024 do CNJ, é possível em determinadas condições, com consenso entre os herdeiros e observância das exigências da norma. Cada caso deve ser analisado.",
      },
      {
        question: "Como sacar dinheiro do banco de quem faleceu?",
        answer: "Valores maiores dependem de inventário. Saldos menores, FGTS e PIS podem ser liberados por alvará judicial (Lei 6.858/1980), com preferência dos dependentes habilitados no INSS.",
      },
      {
        question: "O que é sobrepartilha?",
        answer: "É a partilha de bens descobertos ou esquecidos depois do inventário concluído. Pode ser feita em cartório ou na Justiça.",
      },
    ],
  },

  "familia/testamento-tipos-validade": {
    updatedAt: U,
    sections: [
      {
        title: "Quem pode fazer e o que pode constar",
        paragraphs: [
          "Pode testar quem tem pelo menos 16 anos e está em pleno discernimento no momento do ato (art. 1.860 do Código Civil). O testamento pode tratar de bens, mas também de reconhecimento de filho, nomeação de tutor para filhos menores, perdão a herdeiro indigno e outras disposições.",
          "Quem tem herdeiros necessários (descendentes, ascendentes e cônjuge) só pode dispor livremente da metade dos bens; a outra metade é a legítima (arts. 1.845 e 1.846). Cláusulas de inalienabilidade, impenhorabilidade e incomunicabilidade sobre a legítima exigem justa causa declarada no testamento (art. 1.848).",
        ],
      },
      {
        title: "Formalidades de cada tipo",
        paragraphs: [
          "Testamento público (art. 1.864): feito pelo tabelião, a partir das declarações do testador, lido em voz alta na presença de duas testemunhas e assinado por todos. É o mais seguro, porque fica arquivado em cartório e é difícil de extraviar ou contestar quanto à forma.",
          "Testamento cerrado (art. 1.868): escrito pelo testador ou por alguém a pedido dele, entregue fechado ao tabelião na presença de duas testemunhas, que aprova e lacra. O conteúdo fica sigiloso. Se o lacre for rompido, pode ser considerado revogado.",
          "Testamento particular (art. 1.876): escrito pelo próprio testador, à mão ou digitado, lido e assinado na presença de três testemunhas. Depois da morte, precisa ser confirmado em juízo, com as testemunhas. Em circunstâncias excepcionais declaradas no documento, pode valer sem testemunhas, a critério do juiz (art. 1.879).",
        ],
      },
      {
        title: "Passo a passo do testamento público",
        paragraphs: [
          "Faça uma lista dos bens e dos beneficiários, com dados completos. Converse com um advogado para verificar se a vontade respeita a legítima e se as cláusulas são válidas. Agende no tabelionato de notas, leve documentos pessoais, dados dos beneficiários e duas testemunhas que não sejam beneficiárias nem parentes próximos delas.",
          "Em casos de idade avançada ou doença, é recomendável levar laudo médico recente atestando a capacidade, para reduzir o risco de questionamento futuro. Depois da morte, os herdeiros pedem a abertura e o cumprimento do testamento em juízo (arts. 735 a 737 do CPC) antes ou junto com o inventário.",
        ],
      },
      {
        title: "Revogação, prazos e codicilo",
        paragraphs: [
          "O testamento pode ser revogado ou alterado a qualquer momento por outro testamento (art. 1.969). O prazo para impugnar a validade do testamento é de 5 anos, contado do seu registro (art. 1.859). Os herdeiros necessários prejudicados podem pedir a redução das disposições que ultrapassarem a parte disponível.",
          "Para disposições pequenas, como objetos pessoais de pouco valor, esmolas e orientações sobre o enterro, existe o codicilo (art. 1.881), um documento escrito, datado e assinado, mais simples que o testamento.",
        ],
      },
      {
        title: "Erros comuns e quando procurar um advogado",
        paragraphs: [
          "Erros frequentes: testamento particular com menos de três testemunhas; testemunhas que são beneficiárias; dispor de bem que não é só seu, como a meação do cônjuge; deixar tudo a uma pessoa havendo filhos; e não atualizar o testamento depois de casamento, divórcio ou nascimento de filhos.",
          "Exemplo típico: viúvo com dois filhos que quer deixar um apartamento à neta que cuida dele. Ele pode usar a parte disponível, mas precisa calcular se o imóvel cabe nessa parte. Uma orientação prévia evita disputas.",
        ],
      },
    ],
    faq: [
      {
        question: "Testamento feito à mão vale?",
        answer: "Sim, como testamento particular, se for lido e assinado na presença de três testemunhas, que também assinam (art. 1.876 do Código Civil). Depois da morte, ele precisa ser confirmado em juízo.",
      },
      {
        question: "Quantas testemunhas precisa um testamento?",
        answer: "Duas no testamento público e no cerrado; três no testamento particular.",
      },
      {
        question: "Testamento substitui o inventário?",
        answer: "Não. O testamento orienta a divisão, mas os bens só são transferidos depois do inventário, com o cumprimento do testamento.",
      },
      {
        question: "Qual o prazo para contestar um testamento?",
        answer: "O prazo para impugnar a validade é de 5 anos, contado do registro do testamento (art. 1.859 do Código Civil).",
      },
    ],
  },

  "familia/avos-podem-pedir-guarda-netos": {
    updatedAt: U,
    sections: [
      {
        title: "Base legal: família extensa e melhor interesse da criança",
        paragraphs: [
          "O Estatuto da Criança e do Adolescente (Lei 8.069/1990) dá preferência à família extensa, formada por parentes próximos com quem a criança tem vínculo de afinidade e afetividade, como avós e tios (art. 25, parágrafo único). A guarda está regulada nos arts. 33 a 35 do ECA e obriga quem a detém a prestar assistência material, moral e educacional.",
          "O Código Civil também prevê que, se o juiz verificar que o filho não deve permanecer com o pai ou a mãe, deferirá a guarda a quem revele compatibilidade com a natureza da medida, considerando o grau de parentesco e a relação de afeto (art. 1.584, § 5º). Em todos os casos, a decisão segue o melhor interesse da criança.",
        ],
      },
      {
        title: "Passo a passo do pedido de guarda",
        paragraphs: [
          "Se os pais concordam, avós e pais podem assinar um acordo e pedir a homologação ao juiz, com manifestação do Ministério Público. Sem acordo, os avós ajuízam ação de guarda, com pedido de guarda provisória quando houver urgência. A competência costuma ser da Vara de Família; em situações de risco ou violação de direitos, da Vara da Infância e Juventude.",
          "O juiz normalmente determina estudo psicossocial, com visitas de assistente social e psicólogo à casa dos avós e, se possível, à dos pais. A criança pode ser ouvida, conforme a idade e a maturidade. Relatórios da escola, do posto de saúde e de testemunhas que acompanham a rotina ajudam a demonstrar quem cuida de fato.",
        ],
      },
      {
        title: "Guarda, tutela e adoção: qual é a diferença",
        paragraphs: [
          "A guarda regulariza a convivência e a responsabilidade pelos cuidados, mas não retira o poder familiar dos pais, que continuam com o dever de sustento e, em regra, com o direito de convivência. A tutela é cabível quando os pais faleceram, foram declarados ausentes ou perderam o poder familiar; os avós estão entre os primeiros chamados a ser tutores (art. 1.731 do Código Civil).",
          "Já a adoção por avós é proibida pelo ECA (art. 42, § 1º), porque confundiria os vínculos de parentesco. Por isso, o caminho para os avós é a guarda ou a tutela.",
        ],
      },
      {
        title: "Exemplos típicos e erros comuns",
        paragraphs: [
          "Exemplo típico: mãe com dependência química deixa o bebê com a avó materna e desaparece por meses; o pai não tem contato. A avó pede guarda provisória para poder matricular a criança, incluí-la em plano de saúde e decidir sobre tratamentos. Outro caso comum: pais que vão trabalhar em outro estado e deixam o filho com os avós, que precisam de documento para representar a criança.",
          "Erros comuns: pedir guarda apenas para incluir o neto como dependente no INSS ou no plano de saúde, sem que haja situação real que justifique, o que costuma ser negado; demorar para regularizar, ficando sem poder assinar documentos da criança; e impedir a convivência com os pais sem decisão judicial. Os avós que não têm a guarda também têm direito de convivência com os netos (art. 1.589, parágrafo único, do Código Civil).",
        ],
      },
      {
        title: "Quando procurar um advogado",
        paragraphs: [
          "A orientação é importante quando há risco à criança e é preciso pedido urgente, quando os pais discordam, quando há disputa entre avós paternos e maternos ou quando a situação pode evoluir para tutela. Quem não pode pagar pode procurar a Defensoria Pública.",
        ],
      },
    ],
    faq: [
      {
        question: "Avó pode pedir guarda do neto sem o pai ou a mãe concordar?",
        answer: "Sim. Se houver motivo que mostre que a guarda com os avós atende melhor ao interesse da criança, o juiz pode concedê-la mesmo sem a concordância dos pais, após ouvir as partes e o Ministério Público.",
      },
      {
        question: "Avós podem adotar o neto?",
        answer: "Não. O ECA proíbe a adoção por ascendentes (art. 42, § 1º). Os caminhos possíveis são a guarda ou a tutela.",
      },
      {
        question: "Quanto tempo demora a guarda para avós?",
        answer: "Depende da vara e da necessidade de estudo psicossocial. Em situações urgentes, é possível pedir guarda provisória logo no início do processo.",
      },
      {
        question: "Avós têm direito de visitar os netos?",
        answer: "Sim. O art. 1.589, parágrafo único, do Código Civil garante aos avós o direito de convivência com os netos, que pode ser fixado pelo juiz.",
      },
    ],
  },
};

export default expansions;

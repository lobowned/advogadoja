import type { ArticleExpansion } from "./types";

const expansions: Record<string, ArticleExpansion> = {
  "civil/danos-morais": {
    sections: [
      {
        title: "O que a lei diz sobre dano moral",
        paragraphs: [
          "A Constituição Federal garante a indenização por dano moral quando são violadas a honra, a imagem, a intimidade e a vida privada (art. 5º, incisos V e X). No Código Civil, quem causa dano a outra pessoa, por ação ou omissão, comete ato ilícito (art. 186) e fica obrigado a repará-lo (art. 927).",
          "O dano moral pode ser pedido junto com o dano material decorrente do mesmo fato (Súmula 37 do STJ). Empresas também podem sofrer dano moral, especialmente quando sua reputação é atingida (Súmula 227 do STJ).",
        ],
      },
      {
        title: "Passo a passo antes do processo",
        paragraphs: [
          "Reúna as provas enquanto elas existem: prints com data e endereço da página, gravações, e-mails, protocolos e nomes de testemunhas. Em ofensas pela internet, é recomendável preservar o conteúdo por meio de ata notarial em cartório ou ferramentas de registro, porque publicações podem ser apagadas.",
          "Quando o dano vem de uma relação de consumo, como uma cobrança vexatória ou uma negativação indevida, tente primeiro resolver com a empresa e registre reclamação no Procon ou no consumidor.gov.br. Isso mostra boa-fé e cria provas.",
          "Persistindo o problema, a ação pode ser proposta no Juizado Especial Cível em causas de até 40 salários mínimos. Até 20 salários mínimos, não é obrigatório advogado (Lei 9.099/95, art. 9º). Acima disso, ou em casos complexos, o caminho é a Justiça comum, com advogado.",
        ],
      },
      {
        title: "Dano moral ou mero aborrecimento?",
        paragraphs: [
          "Os tribunais diferenciam o transtorno comum do dia a dia, que não gera indenização, da situação que efetivamente atinge a dignidade da pessoa. Uma fila demorada ou um produto entregue com pequeno atraso, em regra, não bastam. Já a exposição pública humilhante, a inscrição indevida em cadastro de inadimplentes ou a divulgação de dados íntimos costumam ser levadas mais a sério.",
          "Atenção à Súmula 385 do STJ: quem já tinha uma negativação legítima anterior não recebe indenização por dano moral pela nova inscrição indevida, embora tenha direito ao cancelamento dela.",
        ],
      },
      {
        title: "Como o valor é definido",
        paragraphs: [
          "Não existe tabela. O juiz considera a gravidade da ofensa, a repercussão, a duração do problema, a conduta de quem causou o dano depois do ocorrido e a situação das partes. Por isso, é impossível prever com segurança o valor de uma indenização antes do julgamento, e desconfie de quem promete números.",
          "O que está ao seu alcance é a qualidade da prova: quanto mais bem documentado o fato e suas consequências, mais elementos o juiz terá para avaliar o caso.",
        ],
      },
      {
        title: "Prazos e erros comuns",
        paragraphs: [
          "Nas relações civis em geral, o prazo para pedir reparação é de três anos (art. 206, § 3º, V, do Código Civil). Quando o dano decorre de relação de consumo, aplica-se em regra o prazo de cinco anos do art. 27 do CDC.",
          "Entre os erros mais comuns estão responder à ofensa com outra ofensa, o que pode enfraquecer o pedido, apagar mensagens, esperar demais para agir e pedir indenização por situações que os tribunais consideram aborrecimento cotidiano.",
        ],
      },
    ],
    faq: [
      {
        question: "Qual o prazo para entrar com ação de danos morais?",
        answer: "Em regra, três anos nas relações civis (art. 206, § 3º, V, do Código Civil) e cinco anos nas relações de consumo (art. 27 do CDC). O prazo conta, em geral, da data em que a pessoa soube do dano e de quem o causou.",
      },
      {
        question: "Print de conversa serve como prova de dano moral?",
        answer: "Sim, prints são aceitos, mas podem ser contestados. Para ofensas graves na internet, a ata notarial feita em cartório dá mais segurança à prova.",
      },
      {
        question: "Nome sujo indevidamente dá danos morais?",
        answer: "A negativação indevida costuma gerar dano moral, salvo quando já existia outra negativação legítima anterior (Súmula 385 do STJ).",
      },
      {
        question: "Posso pedir dano moral e material no mesmo processo?",
        answer: "Sim. A Súmula 37 do STJ permite cumular os dois pedidos quando decorrem do mesmo fato.",
      },
    ],
    updatedAt: "2026-11-05",
  },

  "civil/cobranca": {
    sections: [
      {
        title: "Passo a passo antes de ir à Justiça",
        paragraphs: [
          "O primeiro passo é organizar a prova da dívida: contrato, mensagens em que o devedor reconhece o valor, comprovantes de transferência, notas, cheques ou promissórias. Em seguida, envie uma notificação extrajudicial por escrito, que pode ser por carta com aviso de recebimento, e-mail ou mensagem, informando o valor, a origem e um prazo para pagamento.",
          "A notificação abre espaço para um acordo e serve para comprovar que o devedor foi chamado a pagar. Se houver proposta de parcelamento, registre por escrito, com valores, datas e o que acontece em caso de atraso.",
        ],
      },
      {
        title: "Qual ação escolher: cobrança, monitória ou execução",
        paragraphs: [
          "Quando você tem um título executivo, como cheque dentro do prazo, nota promissória ou contrato assinado pelo devedor e por duas testemunhas, é possível ir direto à execução, em que o devedor é chamado a pagar sob pena de penhora de bens.",
          "Quando há prova escrita da dívida sem força de título executivo, como um cheque prescrito ou mensagens em que o devedor reconhece o débito, cabe a ação monitória (art. 700 do CPC), que costuma ser mais rápida do que a cobrança comum. Sem prova escrita, a via é a ação de cobrança, com produção de provas como testemunhas.",
          "Dívidas de até 40 salários mínimos podem ser cobradas no Juizado Especial Cível; até 20 salários mínimos, sem advogado (Lei 9.099/95, art. 9º). Quem cobra no Juizado precisa ser pessoa física, microempresa ou empresa de pequeno porte, entre outros previstos no art. 8º da lei.",
        ],
      },
      {
        title: "Prazos de prescrição mais comuns",
        paragraphs: [
          "Dívidas líquidas constantes de documento, como contratos e confissões de dívida, prescrevem em cinco anos (art. 206, § 5º, I, do Código Civil). Aluguéis prescrevem em três anos (art. 206, § 3º, I). Quando não há prazo específico, aplica-se o prazo geral de dez anos (art. 205).",
          "O cheque tem prazo curto para execução, contado do fim do prazo de apresentação. Passado esse prazo, ainda é possível cobrar pela ação monitória em cinco anos a partir do dia seguinte à data de emissão (Súmula 503 do STJ).",
        ],
      },
      {
        title: "Erros comuns de quem cobra",
        paragraphs: [
          "Expor o devedor publicamente, em grupos ou redes sociais, pode virar processo contra quem cobra. Cobranças com ameaças ou constrangimento também são proibidas. A cobrança deve ser firme, mas respeitosa.",
          "Outros erros são emprestar dinheiro sem nenhum registro, aceitar pagamentos parciais sem dar recibo que indique o saldo e deixar o prazo de prescrição correr enquanto se espera uma promessa de pagamento.",
        ],
      },
      {
        title: "Quando procurar advogado",
        paragraphs: [
          "O advogado é recomendável quando a dívida supera 20 salários mínimos, quando há dúvida sobre qual ação usar, quando o devedor tem bens que precisam ser localizados ou quando a prescrição está próxima. Em execuções, a busca de bens e contas por meio dos sistemas do Judiciário exige conhecimento técnico.",
        ],
      },
    ],
    faq: [
      {
        question: "Como cobrar dívida de quem não assinou nada?",
        answer: "Mensagens, áudios e comprovantes de transferência podem provar a dívida. Com prova escrita, cabe a ação monitória; sem ela, a ação de cobrança comum, com testemunhas.",
      },
      {
        question: "Cheque prescrito ainda pode ser cobrado?",
        answer: "Sim. Mesmo após perder a força de execução, o cheque pode ser cobrado por ação monitória em até cinco anos contados do dia seguinte à data de emissão (Súmula 503 do STJ).",
      },
      {
        question: "Posso cobrar dívida no Juizado sem advogado?",
        answer: "Sim, se a dívida for de até 20 salários mínimos. Entre 20 e 40 salários mínimos, também cabe no Juizado, mas com advogado.",
      },
      {
        question: "Mandar mensagem cobrando no grupo da família é permitido?",
        answer: "Não é recomendável. Expor o devedor pode gerar pedido de indenização contra quem cobra. Prefira notificação direta e por escrito.",
      },
    ],
    updatedAt: "2026-11-05",
  },

  "civil/juizado-especial-pequenas-causas": {
    sections: [
      {
        title: "Passo a passo para entrar com a ação",
        paragraphs: [
          "Reúna documentos pessoais, comprovante de residência, as provas do problema e os dados completos da outra parte, como nome, CPF ou CNPJ e endereço. Sem o endereço correto do réu, o processo não anda.",
          "Em seguida, procure o setor de atendimento do Juizado da sua comarca ou, onde houver, o sistema de atendimento eletrônico do tribunal. Lá é feito o pedido inicial, que pode ser escrito ou oral, reduzido a termo por um servidor (Lei 9.099/95, art. 14). Explique o que aconteceu e diga claramente o que você quer: devolução de valor, conserto, cancelamento de cobrança, indenização.",
          "Depois, você será intimado para a audiência de conciliação. Se não houver acordo, segue-se a audiência de instrução e julgamento, onde são ouvidas as partes e as testemunhas, até três para cada lado (art. 34).",
        ],
      },
      {
        title: "O que não pode ser levado ao Juizado",
        paragraphs: [
          "A própria Lei 9.099/95 exclui algumas matérias, como causas de natureza alimentar, falimentar, fiscal, de interesse da Fazenda Pública, de acidente de trabalho, de resíduos e relativas ao estado e à capacidade das pessoas (art. 3º, § 2º). Ações contra a União, estados e municípios seguem regras de Juizados próprios.",
          "Também não cabem no Juizado Cível causas que exigem perícia complexa. Nesses casos, o processo pode ser extinto sem julgamento do mérito, e o caminho é a Justiça comum.",
        ],
      },
      {
        title: "Cuidados importantes durante o processo",
        paragraphs: [
          "Comparecer às audiências é obrigatório. Se o autor faltar, o processo é extinto (art. 51, I) e ele pode ser condenado a pagar as custas. Se o réu faltar, presumem-se verdadeiros os fatos alegados pelo autor (art. 20), mas o juiz continua analisando as provas.",
          "Leve todos os documentos originais e cópias, além das testemunhas, que podem comparecer independentemente de intimação ou ser intimadas mediante pedido feito com antecedência.",
        ],
      },
      {
        title: "Custas e recurso",
        paragraphs: [
          "No primeiro grau não há pagamento de custas, taxas ou despesas (art. 54). Quem quiser recorrer da sentença, por meio do recurso inominado, precisa estar acompanhado de advogado (art. 41, § 2º) e, em regra, pagar o preparo, salvo se tiver gratuidade de justiça. O prazo do recurso é de dez dias.",
          "Na fase de recurso, quem perde pode ser condenado a pagar honorários do advogado da outra parte, o que não acontece no primeiro grau, salvo má-fé.",
        ],
      },
      {
        title: "Erros comuns",
        paragraphs: [
          "Os erros mais frequentes são indicar endereço errado do réu, não levar provas à audiência, pedir valor acima de 20 salários mínimos sem advogado e aceitar acordos sem entender as condições, como prazos de pagamento e multa por atraso. Um acordo homologado tem força de sentença e não pode ser rediscutido depois.",
          "Também é importante saber que, ao optar pelo Juizado, a pessoa renuncia ao valor que exceder 40 salários mínimos (art. 3º, § 3º).",
        ],
      },
    ],
    faq: [
      {
        question: "Qual o valor máximo do Juizado Especial Cível?",
        answer: "Até 40 salários mínimos. Até 20 salários mínimos, a pessoa pode entrar sem advogado (Lei 9.099/95, arts. 3º e 9º).",
      },
      {
        question: "O que acontece se eu faltar à audiência do Juizado?",
        answer: "Se o autor faltar, o processo é extinto e ele pode ter de pagar custas (art. 51, I). Se houver motivo justo, comunique o Juizado o quanto antes.",
      },
      {
        question: "Posso recorrer sem advogado no Juizado?",
        answer: "Não. O recurso contra a sentença exige advogado (art. 41, § 2º, da Lei 9.099/95).",
      },
      {
        question: "Posso entrar no Juizado pela internet?",
        answer: "Muitos tribunais oferecem atendimento eletrônico para o Juizado. Consulte o site do tribunal do seu estado ou procure o atendimento presencial da comarca.",
      },
    ],
    updatedAt: "2026-11-05",
  },

  "civil/despejo-falta-pagamento": {
    sections: [
      {
        title: "Passo a passo para o proprietário",
        paragraphs: [
          "Antes da ação, organize o contrato de locação, os comprovantes dos aluguéis pagos e um demonstrativo dos valores em atraso, com aluguéis e encargos como condomínio e IPTU, quando forem responsabilidade do inquilino. Uma notificação por escrito ao inquilino e ao fiador, se houver, ajuda a tentar um acordo e documenta a tentativa.",
          "Não havendo pagamento, a ação de despejo por falta de pagamento é regida pela Lei do Inquilinato (Lei 8.245/91). É possível pedir na mesma ação a rescisão do contrato e a cobrança dos aluguéis e encargos atrasados (art. 62, I), incluindo o fiador.",
          "A ação de despejo exige advogado e é proposta na Justiça comum, em regra no foro do local do imóvel, salvo previsão diferente no contrato.",
        ],
      },
      {
        title: "Purgação da mora: a chance de o inquilino pagar",
        paragraphs: [
          "Citado, o inquilino pode evitar a rescisão pagando todo o débito atualizado no prazo de 15 dias, incluindo aluguéis, encargos, multas, juros, custas e honorários (art. 62, II). Esse direito não pode ser usado se o inquilino já tiver feito a mesma coisa nos 24 meses anteriores à propositura da ação (art. 62, parágrafo único).",
          "Se o pagamento for feito corretamente, a ação de despejo perde o objeto. Se houver depósito insuficiente, o proprietário pode apontar a diferença.",
        ],
      },
      {
        title: "Liminar de desocupação",
        paragraphs: [
          "A lei prevê hipóteses de liminar para desocupação em 15 dias, sem ouvir o inquilino, mediante caução equivalente a três meses de aluguel (art. 59, § 1º). Na falta de pagamento, essa possibilidade está ligada à situação das garantias do contrato. Como as regras são específicas, a análise do contrato por um advogado antes da ação é o que indica se o pedido de liminar é viável.",
        ],
      },
      {
        title: "O que o proprietário não pode fazer",
        paragraphs: [
          "Trocar fechaduras, retirar móveis, cortar água ou energia e ameaçar o inquilino são condutas proibidas e podem gerar responsabilidade civil e até criminal. A retomada do imóvel só acontece por ordem judicial, cumprida por oficial de justiça.",
          "Também não é recomendável aceitar pagamentos parciais sem recibo detalhado, porque isso pode gerar discussão sobre o valor da dívida.",
        ],
      },
      {
        title: "Prazos e erros comuns",
        paragraphs: [
          "A pretensão de cobrar aluguéis prescreve em três anos (art. 206, § 3º, I, do Código Civil). Esperar muito tempo para agir faz a dívida crescer e pode tornar a cobrança mais difícil, especialmente se o inquilino não tiver bens.",
          "Erros comuns de proprietários são alugar sem contrato escrito, não exigir garantia, não manter recibos e não atualizar o endereço do fiador. Para o inquilino, o erro mais comum é ignorar a citação e perder o prazo para pagar ou se defender.",
        ],
      },
    ],
    faq: [
      {
        question: "Quantos meses de atraso para entrar com despejo?",
        answer: "A lei não exige um número mínimo de meses. O atraso de um aluguel já permite a ação de despejo por falta de pagamento, embora na prática muitos proprietários tentem antes um acordo.",
      },
      {
        question: "O inquilino pode pagar a dívida e continuar no imóvel?",
        answer: "Sim, pela purgação da mora, pagando todo o débito atualizado em 15 dias após a citação, desde que não tenha usado esse direito nos 24 meses anteriores (art. 62 da Lei 8.245/91).",
      },
      {
        question: "Posso cobrar o fiador na ação de despejo?",
        answer: "Sim. A cobrança dos aluguéis e encargos pode ser feita na mesma ação, incluindo o fiador, desde que ele seja citado.",
      },
      {
        question: "Quanto tempo tenho para cobrar aluguel atrasado?",
        answer: "Três anos, conforme o art. 206, § 3º, I, do Código Civil.",
      },
    ],
    updatedAt: "2026-11-05",
  },

  "civil/usucapiao-aquisicao-imovel": {
    sections: [
      {
        title: "Os tipos de usucapião no Código Civil",
        paragraphs: [
          "O usucapião extraordinário exige 15 anos de posse, sem necessidade de justo título ou boa-fé, prazo que cai para 10 anos se o possuidor morar no imóvel ou nele tiver feito obras ou serviços produtivos (art. 1.238). O ordinário exige 10 anos com justo título e boa-fé, podendo cair para 5 anos em situações específicas (art. 1.242).",
          "O usucapião especial urbano exige 5 anos de posse de área urbana de até 250 metros quadrados, usada como moradia, por quem não seja dono de outro imóvel (art. 1.240). O especial rural exige 5 anos em área de até 50 hectares, tornada produtiva pelo trabalho da família (art. 1.239). Há ainda o usucapião familiar, de 2 anos, para quem permaneceu no imóvel do casal após o abandono do lar pelo outro cônjuge ou companheiro (art. 1.240-A).",
          "Imóveis públicos não podem ser adquiridos por usucapião (Constituição Federal, art. 183, § 3º, e art. 191, parágrafo único).",
        ],
      },
      {
        title: "Passo a passo: cartório ou Justiça",
        paragraphs: [
          "O usucapião extrajudicial é feito no cartório de registro de imóveis da situação do imóvel (Lei 6.015/73, art. 216-A). É obrigatória a presença de advogado e são necessários, entre outros documentos, a ata notarial lavrada em tabelionato atestando o tempo de posse, a planta e o memorial descritivo assinados por profissional habilitado e certidões negativas.",
          "Se houver discordância de algum confrontante ou do proprietário registrado, ou se faltar documentação, o caminho é a ação judicial de usucapião, na qual podem ser ouvidas testemunhas e feita perícia.",
        ],
      },
      {
        title: "Usucapião em cartório: documentos e etapas",
        paragraphs: [
          "O pedido é apresentado ao cartório de registro de imóveis da comarca do imóvel, por advogado, com: ata notarial lavrada por tabelião atestando o tempo de posse do requerente e de quem possuía antes; planta e memorial descritivo assinados por profissional habilitado, com ART, e pelos titulares de direitos na matrícula do imóvel e dos imóveis vizinhos; certidões negativas dos distribuidores da comarca do imóvel e do domicílio do requerente; e o justo título ou outros documentos da posse, como IPTU e taxas pagas (art. 216-A da Lei 6.015/1973).",
          "Quem não assinou a planta é notificado para se manifestar em 15 dias, e o silêncio é interpretado como concordância; se a pessoa não for encontrada, a notificação é feita por edital. A União, o Estado e o Município também são avisados e têm 15 dias para se manifestar, e o cartório publica edital para terceiros, com mais 15 dias. Em apartamento de condomínio, basta notificar o síndico. Sem pendências e com os documentos em ordem, o cartório registra a aquisição.",
          "Se alguém impugnar o pedido com fundamento, o cartório envia o caso ao juiz da comarca, e o requerente adapta o pedido ao processo judicial; impugnação sem fundamento não é admitida. Se o cartório rejeitar o pedido por falta de documentos, isso não impede a ação de usucapião na Justiça.",
        ],
      },
      {
        title: "Como provar a posse",
        paragraphs: [
          "As provas mais úteis são contas de água, luz e telefone em seu nome ao longo dos anos, carnês de IPTU, notas fiscais de material de construção, fotos antigas, correspondências, contrato de compra e venda ou cessão de direitos e declarações de vizinhos que conhecem a sua ocupação.",
          "O que se precisa demonstrar é que a posse foi contínua, sem oposição e com comportamento de dono. Ser inquilino, caseiro ou ocupar o imóvel por favor do proprietário, em regra, não gera usucapião, porque falta essa intenção de dono.",
        ],
      },
      {
        title: "Situações típicas e erros comuns",
        paragraphs: [
          "Um caso frequente é o de quem comprou um imóvel por contrato de gaveta há muitos anos e nunca conseguiu escriturar, porque o vendedor faleceu ou desapareceu. Outro é o de famílias que ocupam um terreno há décadas, construíram a casa e pagam IPTU, mas nunca tiveram registro.",
          "Os erros mais comuns são começar o processo sem planta e memorial descritivo corretos, não saber quem são os confrontantes, confundir posse com mera permissão de uso e somar períodos de posse sem documentação que comprove a transferência entre possuidores.",
        ],
      },
      {
        title: "Quando procurar advogado",
        paragraphs: [
          "No usucapião extrajudicial, o advogado é obrigatório por lei. Na via judicial também. Além disso, a escolha da modalidade certa, a organização das provas e a análise da matrícula do imóvel definem se o pedido tem condições de seguir.",
        ],
      },
    ],
    faq: [
      {
        question: "Quantos anos de posse para usucapião?",
        answer: "Depende da modalidade: 15 anos no extraordinário (ou 10, se for moradia), 10 no ordinário (ou 5 em casos específicos), 5 no especial urbano e rural e 2 no familiar.",
      },
      {
        question: "Usucapião em cartório precisa de advogado?",
        answer: "Sim. O art. 216-A da Lei 6.015/73 exige que o requerente esteja representado por advogado.",
      },
      {
        question: "Contrato de gaveta serve para usucapião?",
        answer: "Pode servir como prova do início da posse e, em alguns casos, como justo título no usucapião ordinário. Ele deve ser somado a outras provas da posse ao longo dos anos.",
      },
      {
        question: "Terreno da prefeitura pode ser usucapido?",
        answer: "Não. A Constituição proíbe o usucapião de imóveis públicos. Nesses casos, existem outros instrumentos de regularização fundiária.",
      },
      {
        question: "O que acontece se o vizinho não assinar a planta?",
        answer: "Ele é notificado pelo cartório para se manifestar em 15 dias; se ficar em silêncio, a lei entende que concordou (art. 216-A, § 2º, da Lei 6.015/1973). Se não for encontrado, a notificação é feita por edital, com o mesmo efeito. Só uma impugnação com fundamento leva o caso à Justiça.",
      },
      {
        question: "Quanto tempo demora o usucapião em cartório?",
        answer: "Não há prazo fixo. As notificações, a manifestação da União, do Estado e do Município e o edital têm 15 dias cada, mas o tempo total depende da documentação estar completa e de o cartório pedir diligências.",
      },
      {
        question: "Se o cartório negar, ainda posso entrar na Justiça?",
        answer: "Sim. A rejeição do pedido extrajudicial não impede a ação de usucapião (art. 216-A, § 9º). E, se houver impugnação justificada, o próprio cartório envia o caso ao juiz da comarca.",
      },
      {
        question: "Apartamento pode ser usucapido em cartório?",
        answer: "Pode. Quando o imóvel é unidade de condomínio, dispensa-se o consentimento dos vizinhos de matrícula e basta notificar o síndico (art. 216-A, § 11). Os demais requisitos, como tempo de posse e ata notarial, continuam valendo.",
      },
    ],
    updatedAt: "2026-11-07",
  },

  "civil/erro-medico-indenizacao": {
    sections: [
      {
        title: "Médico e hospital respondem de forma diferente",
        paragraphs: [
          "A relação entre paciente e médico ou hospital é, em regra, de consumo. O Código de Defesa do Consumidor estabelece que a responsabilidade do profissional liberal depende da prova de culpa (art. 14, § 4º), ou seja, é preciso demonstrar negligência, imprudência ou imperícia.",
          "Já o hospital e a clínica respondem pelos serviços que prestam, como estrutura, enfermagem, equipamentos e controle de infecção, independentemente de culpa (art. 14, caput). Quando o dano decorre de ato do médico vinculado ao hospital, a análise costuma envolver também a culpa do profissional.",
          "Em regra, o médico assume obrigação de meio, ou seja, de empregar os cuidados adequados, e não de garantir a cura. Em cirurgias plásticas estéticas, os tribunais costumam entender que existe obrigação de resultado.",
        ],
      },
      {
        title: "Passo a passo: o primeiro documento é o prontuário",
        paragraphs: [
          "O paciente, ou sua família em caso de falecimento, tem direito a obter cópia integral do prontuário médico. Faça o pedido por escrito ao hospital ou à clínica e guarde o protocolo. O prontuário reúne evolução, prescrições, exames e anotações da equipe e é a base de qualquer análise.",
          "Em seguida, reúna exames anteriores e posteriores, receitas, notas fiscais de tratamentos, fotos das lesões e a lista de pessoas que acompanharam o atendimento. Uma segunda opinião médica, por escrito, ajuda a entender se houve desvio da conduta esperada.",
          "Paralelamente, é possível apresentar denúncia ao Conselho Regional de Medicina, que apura a conduta ética do profissional. Esse procedimento é independente da ação de indenização.",
        ],
      },
      {
        title: "A perícia decide o processo",
        paragraphs: [
          "Na ação judicial, em regra, o juiz nomeia um perito médico para avaliar se a conduta seguiu o que a ciência recomenda. Por isso, essas ações costumam tramitar na Justiça comum, já que perícias complexas não são compatíveis com o Juizado Especial.",
          "As partes podem indicar assistentes técnicos e apresentar quesitos, que são as perguntas a serem respondidas pelo perito. A qualidade dessas perguntas faz muita diferença no resultado da perícia.",
        ],
      },
      {
        title: "Erros comuns",
        paragraphs: [
          "Os erros mais comuns são esperar anos para pedir o prontuário, confundir resultado ruim com erro médico, não guardar as receitas e notas e expor o médico em redes sociais antes de qualquer apuração, o que pode gerar processo contra o próprio paciente.",
        ],
      },
      {
        title: "Prazos e quando procurar advogado",
        paragraphs: [
          "Quando se aplica o CDC, o prazo para pedir reparação é de cinco anos, contados do conhecimento do dano e de sua autoria (art. 27). Em situações fora da relação de consumo, pode incidir o prazo de três anos do Código Civil (art. 206, § 3º, V). Contra hospitais públicos, as regras de prazo são diferentes.",
          "Pela complexidade da prova técnica, é recomendável a orientação de um advogado desde o início, inclusive para formular corretamente o pedido do prontuário e avaliar a viabilidade do caso.",
        ],
      },
    ],
    faq: [
      {
        question: "O hospital pode negar o prontuário ao paciente?",
        answer: "Não. O paciente tem direito de acesso ao seu prontuário. Familiares também podem obtê-lo em caso de falecimento, conforme as normas do Conselho Federal de Medicina. Faça o pedido por escrito.",
      },
      {
        question: "Qual o prazo para processar por erro médico?",
        answer: "Em regra, cinco anos a partir do conhecimento do dano quando se aplica o CDC (art. 27). Em outras situações, o prazo pode ser diferente, como em atendimentos pela rede pública.",
      },
      {
        question: "Posso denunciar o médico no CRM e também processar?",
        answer: "Sim. A denúncia ao Conselho Regional de Medicina apura a ética profissional e é independente da ação de indenização.",
      },
      {
        question: "Cirurgia plástica que não ficou como esperado é erro médico?",
        answer: "Nas cirurgias estéticas, os tribunais costumam entender que o médico assume obrigação de resultado. Ainda assim, cada caso depende da perícia e das informações dadas ao paciente antes da cirurgia.",
      },
    ],
    updatedAt: "2026-11-05",
  },

  "civil/acidente-transito-indenizacao": {
    sections: [
      {
        title: "O que fazer no local do acidente",
        paragraphs: [
          "Se houver feridos, a prioridade é acionar o socorro. Depois, sinalize a via e, se possível, fotografe a posição dos veículos, as placas, os danos, a sinalização e o local antes de retirar os carros. Anote nome, CPF, telefone, placa e seguradora do outro motorista, além do contato de testemunhas.",
          "Registre o boletim de ocorrência, que em muitos estados pode ser feito pela internet nos acidentes sem vítima. Imagens de câmeras de comércios e prédios próximos costumam ser apagadas em poucos dias, então peça a gravação o quanto antes.",
        ],
      },
      {
        title: "Passo a passo para buscar a reparação",
        paragraphs: [
          "Faça pelo menos três orçamentos em oficinas diferentes e guarde as notas de despesas médicas, remédios, transporte e dias de trabalho perdidos. Se o outro motorista tiver seguro, é possível acionar a seguradora dele. Se você tiver seguro próprio, pode usá-lo e a seguradora depois cobra do causador.",
          "Não havendo acordo, a ação de indenização pode ser proposta no Juizado Especial Cível em causas de até 40 salários mínimos; até 20 salários mínimos, sem advogado (Lei 9.099/95, art. 9º). Casos com lesões graves, que exigem perícia médica complexa, costumam seguir para a Justiça comum.",
        ],
      },
      {
        title: "Quem é o culpado",
        paragraphs: [
          "A responsabilidade segue a regra geral do Código Civil: quem causa dano por culpa deve repará-lo (arts. 186 e 927). O Código de Trânsito também ajuda a definir a culpa, por exemplo ao exigir que o condutor mantenha distância de segurança do veículo da frente (art. 29, II). Por isso, na colisão traseira, os tribunais costumam presumir a culpa de quem bateu atrás, presunção que pode ser afastada por prova em contrário.",
          "O dono do veículo também pode responder pelos danos causados por quem dirigia o carro com sua autorização. Quando ambos tiveram culpa, a indenização pode ser dividida proporcionalmente (art. 945 do Código Civil).",
        ],
      },
      {
        title: "Seguro obrigatório",
        paragraphs: [
          "O seguro obrigatório para vítimas de trânsito passou por mudanças legais nos últimos anos, e as regras sobre quem paga e como pedir variam conforme a data do acidente. Antes de fazer o pedido, confirme a situação atual nos canais oficiais. Quando houver pagamento do seguro obrigatório, esse valor é deduzido da indenização fixada na Justiça (Súmula 246 do STJ).",
        ],
      },
      {
        title: "Prazos e erros comuns",
        paragraphs: [
          "O prazo para pedir indenização ao causador do acidente é de três anos (art. 206, § 3º, V, do Código Civil). Se o acidente envolver transporte de passageiros, como ônibus ou aplicativo, pode haver relação de consumo, com prazo de cinco anos (art. 27 do CDC).",
          "Os erros mais comuns são assinar papel assumindo culpa no local, mandar consertar o carro antes de documentar os danos, fazer acordo verbal sem nada por escrito e deixar de buscar atendimento médico logo após o acidente, o que dificulta provar que a lesão veio dele.",
        ],
      },
    ],
    faq: [
      {
        question: "Bateram no meu carro e o motorista não quer pagar. O que fazer?",
        answer: "Reúna boletim de ocorrência, fotos, orçamentos e testemunhas e envie uma notificação. Sem acordo, é possível entrar no Juizado Especial Cível, sem advogado até 20 salários mínimos.",
      },
      {
        question: "Quem bate atrás sempre tem culpa?",
        answer: "Existe uma presunção de culpa de quem bate na traseira, porque o condutor deve manter distância segura. Essa presunção pode ser afastada com provas, como uma manobra brusca e indevida do veículo da frente.",
      },
      {
        question: "Qual o prazo para processar depois de acidente de trânsito?",
        answer: "Em regra, três anos contra o causador (art. 206, § 3º, V, do Código Civil). Se houver relação de consumo, como no transporte de passageiros, o prazo pode ser de cinco anos.",
      },
      {
        question: "Posso cobrar os dias que fiquei sem trabalhar?",
        answer: "Sim. São os lucros cessantes, que precisam ser comprovados, por exemplo com recibos, declarações ou registros de ganhos anteriores.",
      },
    ],
    updatedAt: "2026-11-05",
  },

  "civil/contratos-distrato-rescisao": {
    sections: [
      {
        title: "Distrato, resilição e resolução: qual é o seu caso",
        paragraphs: [
          "O distrato é o acordo entre as partes para encerrar o contrato e deve seguir a mesma forma exigida para o contrato (art. 472 do Código Civil). A resilição unilateral é a saída de uma das partes quando a lei ou o contrato permitem, feita por notificação à outra parte (art. 473).",
          "A resolução ocorre quando uma das partes descumpre o contrato. Nesse caso, a parte prejudicada pode pedir o fim do contrato ou exigir seu cumprimento, e em ambos os casos pode cobrar perdas e danos (art. 475). Há ainda a resolução por onerosidade excessiva, quando fatos extraordinários e imprevisíveis tornam a obrigação excessivamente pesada para um dos lados (art. 478).",
        ],
      },
      {
        title: "Passo a passo para sair de um contrato",
        paragraphs: [
          "Leia o contrato procurando as cláusulas de prazo, rescisão, multa, aviso prévio e foro. Em seguida, envie notificação por escrito à outra parte, explicando o motivo e o que você propõe, e guarde o comprovante de envio e recebimento.",
          "Se houver acordo, formalize o distrato por escrito, com valores a devolver, prazos, quitação recíproca e o destino de bens ou chaves. Se não houver, e o contrato for de consumo, é possível reclamar no Procon ou no consumidor.gov.br. Persistindo o impasse, cabe ação judicial, no Juizado Especial para causas de até 40 salários mínimos ou na Justiça comum.",
        ],
      },
      {
        title: "A multa pode ser reduzida",
        paragraphs: [
          "O juiz deve reduzir a cláusula penal de forma equitativa quando a obrigação tiver sido cumprida em parte ou quando o valor da multa for manifestamente excessivo, considerando a natureza e a finalidade do negócio (art. 413 do Código Civil). Não há um percentual fixo que valha para todos os contratos.",
          "Nos contratos de consumo, é nula a cláusula que prevê a perda total das prestações pagas em caso de desistência em compras a prestação (art. 53 do CDC). Nas compras feitas fora do estabelecimento, o consumidor tem ainda sete dias para desistir sem multa (art. 49 do CDC).",
        ],
      },
      {
        title: "Distrato de imóvel na planta",
        paragraphs: [
          "Na compra de imóvel na planta, a Lei 13.786/2018 estabeleceu regras próprias para o distrato, incluindo limites para a retenção de valores pela incorporadora, que variam conforme o empreendimento esteja ou não sob o regime de patrimônio de afetação. Se o atraso na entrega for da construtora, a situação é diferente e o comprador pode pedir a resolução com devolução integral.",
        ],
      },
      {
        title: "Erros comuns e prazos",
        paragraphs: [
          "Os erros mais comuns são parar de pagar sem notificar, assinar distrato com quitação geral sem conferir os valores, abandonar o serviço ou o imóvel sem formalizar e confiar em acordos apenas verbais.",
          "O prazo para pedir reparação civil decorrente de descumprimento contratual é discutido nos tribunais, e diferentes prazos do Código Civil podem incidir conforme o tipo de pedido. Para cobrar dívida líquida prevista em contrato escrito, aplica-se em regra o prazo de cinco anos (art. 206, § 5º, I). Por isso, não deixe para agir no fim.",
        ],
      },
    ],
    faq: [
      {
        question: "Qual a diferença entre distrato e rescisão?",
        answer: "Distrato é o fim do contrato por acordo entre as partes. Rescisão é um termo usado de forma ampla para o fim do contrato, inclusive por descumprimento ou por vontade de uma das partes.",
      },
      {
        question: "A empresa pode ficar com tudo o que paguei se eu desistir?",
        answer: "Em contratos de consumo com pagamento a prestação, a cláusula de perda total das parcelas é nula (art. 53 do CDC). Pode haver retenção de parte dos valores, conforme o caso.",
      },
      {
        question: "Multa de rescisão abusiva pode ser revista?",
        answer: "Sim. O art. 413 do Código Civil determina a redução equitativa da multa quando ela for manifestamente excessiva ou quando o contrato tiver sido cumprido em parte.",
      },
      {
        question: "Preciso notificar antes de sair do contrato?",
        answer: "Na maioria dos casos, sim. A notificação por escrito documenta sua decisão e o prazo de aviso prévio, quando previsto.",
      },
    ],
    updatedAt: "2026-11-05",
  },

  "civil/processar-vizinho-barulho-danos-morais": {
    sections: [
      {
        title: "O que a lei garante",
        paragraphs: [
          "O Código Civil dá ao morador o direito de fazer cessar as interferências prejudiciais à segurança, ao sossego e à saúde provocadas pela utilização de propriedade vizinha (art. 1.277). Em condomínio, é dever de cada condômino não usar sua unidade de forma prejudicial ao sossego dos demais (art. 1.336, IV), sob pena de multa.",
          "Na esfera penal, a perturbação do trabalho ou do sossego alheios com gritaria, algazarra, instrumentos sonoros ou barulho de animais é contravenção penal (art. 42 da Lei de Contravenções Penais).",
        ],
      },
      {
        title: "Passo a passo antes do processo",
        paragraphs: [
          "Comece com uma conversa educada, de preferência em um momento sem barulho. Se não resolver, envie uma notificação por escrito, relatando os dias e horários do problema. Em condomínio, registre a reclamação no livro de ocorrências ou no canal oficial e peça providências ao síndico, que pode advertir e multar conforme a convenção.",
          "Persistindo o barulho, chame a polícia no momento da perturbação e registre boletim de ocorrência. Algumas cidades também contam com órgão de fiscalização de ruído que faz medições. A mediação de conflitos, oferecida por tribunais e centros de conciliação, é outra alternativa.",
        ],
      },
      {
        title: "Como montar as provas",
        paragraphs: [
          "Mantenha um diário com data, horário de início e fim e tipo de barulho. Grave áudios e vídeos com indicação de data e hora, de dentro do seu imóvel, para mostrar como o som chega até você. Aplicativos de medição de decibéis podem ser úteis como apoio, embora não substituam uma medição técnica.",
          "Reúna também as advertências e multas aplicadas pelo condomínio, os boletins de ocorrência, a declaração de outros vizinhos incomodados e, se houver, atestados médicos que relacionem problemas de sono ou saúde ao barulho.",
        ],
      },
      {
        title: "A ação judicial",
        paragraphs: [
          "Na Justiça, é possível pedir que o vizinho seja obrigado a parar com o barulho, sob pena de multa por descumprimento, e também indenização por dano moral quando a perturbação for frequente e afetar de fato o descanso e a saúde. Barulho eventual, como uma festa isolada, normalmente não basta.",
          "Causas de até 40 salários mínimos podem ser levadas ao Juizado Especial Cível; até 20 salários mínimos, sem advogado (Lei 9.099/95, art. 9º). O pedido de indenização prescreve em três anos (art. 206, § 3º, V, do Código Civil), enquanto o pedido para fazer cessar o barulho pode ser feito enquanto a perturbação continuar.",
        ],
      },
      {
        title: "Erros comuns",
        paragraphs: [
          "Revidar com mais barulho, bater na porta em tom de ameaça, expor o vizinho em grupos do prédio ou redes sociais e gravar imagens do interior da casa dele são erros que podem transformar a vítima em ré. Mantenha as provas focadas no som que chega ao seu imóvel e as comunicações sempre respeitosas e por escrito.",
        ],
      },
    ],
    faq: [
      {
        question: "Posso chamar a polícia por barulho de vizinho?",
        answer: "Sim. A perturbação do sossego é contravenção penal (art. 42 da Lei de Contravenções Penais). Registre também o boletim de ocorrência, que serve como prova.",
      },
      {
        question: "O síndico é obrigado a agir contra o vizinho barulhento?",
        answer: "O síndico deve fazer cumprir a convenção e o regimento interno, o que inclui advertências e multas previstas. Registre sua reclamação pelo canal oficial do condomínio.",
      },
      {
        question: "Barulho de obra durante o dia dá processo?",
        answer: "Obras dentro dos horários permitidos pela lei municipal e pelo regulamento do condomínio, em regra, são toleradas. O problema surge quando há excesso, fora de horário ou por tempo muito prolongado.",
      },
      {
        question: "Gravação de áudio do barulho vale como prova?",
        answer: "Sim, especialmente quando feita de dentro do seu imóvel e com indicação de data e horário. Ela fica mais forte quando acompanhada de outras provas, como reclamações ao condomínio e testemunhas.",
      },
    ],
    updatedAt: "2026-11-05",
  },
};

export default expansions;

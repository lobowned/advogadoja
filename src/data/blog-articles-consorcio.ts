/**
 * Cluster de artigos sobre CONSÓRCIO (desistência, cancelamento, devolução, quitação).
 * Criado em 2026-11-06 a partir de dados reais do Search Console
 * (~350 impressões em 3 meses sem artigo correspondente).
 *
 * Base conferida em 06/11/2026:
 * - Lei 11.795/2008: art. 13 (transferência da cota), art. 22, § 2º (excluído concorre
 *   aos sorteios para restituição), art. 24, § 1º (rendimentos do crédito), art. 30
 *   (cálculo da restituição), art. 31, I (crédito não usado em espécie, aviso em 60 dias).
 * - STJ, Tema 312 (REsp 1.119.300/RS, 2ª Seção, 2010): restituição em até 30 dias do prazo
 *   contratual de encerramento do plano.
 * - STJ: cláusula penal só com prova de prejuízo ao grupo (CDC, art. 53, § 2º).
 * - Súmula 538/STJ: taxa de administração livre, mesmo acima de 10%.
 * - CDC, art. 49 (arrependimento em 7 dias fora do estabelecimento).
 * - Lei 9.514/1997, art. 25, §§ 1º, 1º-A e 2º (termo de quitação em 30 dias; multa 0,5% ao mês).
 * Sem prazo prescricional fixo (tema com divergência) e sem estimativa de duração de processo.
 */
import type { BlogArticle } from "./blog-articles";

const UPDATED = "2026-11-06";

export const consorcioArticles: BlogArticle[] = [
  {
    id: "consorcio-desistencia-pilar",
    nicheId: "consumidor",
    slug: "desistencia-consorcio-como-receber-dinheiro-de-volta",
    title: "Desistência de consórcio: como receber seu dinheiro de volta",
    metaTitle: "Desistência de consórcio: como receber de volta | Riccio",
    metaDescription:
      "Desistiu ou foi excluído do consórcio? Veja o que dizem a Lei 11.795/2008 e o STJ: quando o dinheiro volta, como é calculado e o que pode ser descontado.",
    keywords: [
      "desistência de consórcio",
      "desisti do consórcio",
      "desistir do consórcio",
      "consórcio desistência",
      "devolução consórcio",
      "consórcio dinheiro de volta",
      "consorciado excluído",
      "restituição consórcio",
    ],
    excerpt:
      "Quem desiste do consórcio ou é excluído não perde o que pagou ao fundo comum. A devolução tem regras de prazo e de cálculo que a lei e o STJ já definiram. Veja como funciona e o que exigir da administradora.",
    content: {
      intro:
        "O consórcio é um sistema em que um grupo de pessoas paga parcelas mensais para formar um fundo comum. A cada mês, uma ou mais delas são contempladas, por sorteio ou por lance, com uma carta de crédito para comprar o bem. Quem desiste do grupo, ou é excluído por deixar de pagar, não perde o que pagou ao fundo comum. A Lei 11.795/2008 garante a restituição, com regras próprias de prazo e de cálculo, e o STJ consolidou o entendimento sobre quando ela deve acontecer.",
      whatIs:
        "Desistência é o pedido do consorciado para sair do grupo antes de ser contemplado. Exclusão é o desligamento feito pela administradora por falta de pagamento, nas condições do contrato. Nos dois casos, a lei trata a pessoa como consorciado excluído, com direito à restituição do que pagou ao fundo comum (art. 30 da Lei 11.795/2008). A taxa de administração e o seguro, pagos junto com as parcelas, remuneram serviços já prestados e não fazem parte do fundo comum, por isso não voltam.",
      whenYouHaveRight: [
        "Você pediu para sair do grupo antes de ser contemplado.",
        "Você foi excluído do grupo por atraso nas parcelas.",
        "O prazo previsto no contrato para o encerramento do grupo já passou e o dinheiro não foi devolvido.",
        "A administradora descontou multa sem demonstrar prejuízo ao grupo.",
        "O valor oferecido não segue o cálculo previsto no art. 30 da Lei 11.795/2008.",
      ],
      documents: [
        "Contrato de adesão ao consórcio e regulamento do grupo",
        "Comprovantes de pagamento de todas as parcelas",
        "Pedido de desistência ou comunicado de exclusão",
        "Protocolos, e-mails e mensagens trocados com a administradora",
        "Extrato da cota, disponível no aplicativo ou no site",
        "Documento de identidade e CPF",
      ],
      deadlines:
        "Pela Lei 11.795/2008, o consorciado excluído continua concorrendo aos sorteios mensais para receber a restituição (art. 22, § 2º). Se não for sorteado, o STJ fixou que a devolução deve ocorrer em até 30 dias a contar do prazo previsto no contrato para o encerramento do grupo (Tema 312, REsp 1.119.300/RS). Também existe prazo para cobrar na Justiça. Como os tribunais discutem qual prazo se aplica, o mais seguro é agir assim que o grupo encerrar e o dinheiro não cair.",
      faq: [
        {
          question: "Quem desiste do consórcio perde o dinheiro?",
          answer:
            "Não. O que foi pago ao fundo comum volta. Não voltam a taxa de administração e o seguro, que remuneram serviços já prestados. Multa prevista em contrato só pode ser descontada se a administradora provar que a sua saída causou prejuízo ao grupo.",
        },
        {
          question: "Quando a administradora tem que devolver?",
          answer:
            "Há dois caminhos. O consorciado excluído concorre aos sorteios mensais e, se for sorteado, recebe naquele momento. Se não for sorteado, recebe em até 30 dias a contar do prazo previsto no contrato para o fim do grupo, como decidiu o STJ no Tema 312.",
        },
        {
          question: "Dá para receber antes do fim do grupo?",
          answer:
            "Sim, se o seu nome for sorteado entre os excluídos, o que a própria lei prevê (art. 22, § 2º, da Lei 11.795/2008). Fora isso, só por acordo com a administradora. A regra é que não há devolução imediata.",
        },
        {
          question: "Como é calculado o valor devolvido?",
          answer:
            "Não é apenas a soma do que você pagou. A lei manda aplicar o percentual que você quitou sobre o valor do bem vigente na data da assembleia de contemplação, mais os rendimentos da aplicação dos recursos (art. 30 da Lei 11.795/2008). Se o preço do bem subiu, o valor a devolver acompanha.",
        },
        {
          question: "A administradora pode cobrar multa por desistência?",
          answer:
            "Só se o contrato previr e se ela provar que a saída causou prejuízo efetivo ao grupo. Esse é o entendimento do STJ com base no art. 53, § 2º, do Código de Defesa do Consumidor. Multa descontada sem essa prova pode ser contestada.",
        },
        {
          question: "A taxa de administração volta?",
          answer:
            "Não. Ela remunera a administradora pelo período em que você participou do grupo. O STJ entende que as administradoras podem fixar essa taxa livremente, mesmo acima de 10% (Súmula 538). O que pode ser discutido é a cobrança de valores que o contrato não prevê.",
        },
        {
          question: "Parei de pagar: preciso fazer alguma coisa?",
          answer:
            "Sim. Formalize a saída por escrito, com número de protocolo. Isso registra a data e evita que juros e cobranças continuem correndo sobre parcelas que você não pretende pagar.",
        },
        {
          question: "Existe nova lei do consórcio que obriga a devolver na hora?",
          answer:
            "Até novembro de 2026 não foi publicada lei com essa regra. A base continua sendo a Lei 11.795/2008 e o entendimento do STJ. Desconfie de quem promete resgate imediato cobrando taxa adiantada.",
        },
        {
          question: "Preciso de advogado para pedir a devolução?",
          answer:
            "Para pedir à administradora, não. Para cobrar quando ela atrasa, desconta multa sem prova de prejuízo ou calcula errado, é recomendável. No Juizado Especial Cível, em causas de até 20 salários mínimos, a pessoa pode entrar sem advogado.",
        },
      ],
      sections: [
        {
          title: "Como o consórcio funciona e por que o dinheiro é seu",
          paragraphs: [
            "No consórcio, a administradora reúne um grupo de pessoas interessadas no mesmo tipo de bem, como carro, moto, imóvel ou serviço. Cada participante paga parcelas mensais, que formam um fundo comum. Nas assembleias, uma ou mais pessoas são contempladas por sorteio ou lance e recebem a carta de crédito. O grupo termina no prazo previsto no contrato.",
            "A administradora não é dona do fundo comum: ela o administra e é remunerada pela taxa de administração. Por isso, quem sai do grupo deixa de concorrer ao bem, mas não perde o que depositou no fundo. É daí que vem o direito à restituição.",
          ],
        },
        {
          title: "Passo a passo para pedir a restituição",
          paragraphs: [
            "Primeiro, formalize a desistência pelo canal oficial da administradora, como aplicativo, site ou e-mail, e guarde o número de protocolo. Peça a confirmação por escrito com a data da saída e o extrato da sua cota.",
            "Depois, localize no contrato o prazo de duração do grupo. É a partir dele que se conta o prazo de até 30 dias para a devolução, caso você não seja sorteado antes. Enquanto isso, acompanhe as assembleias: o seu nome continua concorrendo aos sorteios para restituição.",
            "Se o prazo passar e o dinheiro não cair, envie uma notificação por escrito pedindo o pagamento e a planilha do cálculo. Sem resposta, o caminho é a ação judicial, em geral no Juizado Especial Cível.",
          ],
        },
        {
          title: "O que pode e o que não pode ser descontado",
          paragraphs: [
            "Não voltam a taxa de administração e o seguro, porque remuneram serviços já prestados. O fundo de reserva só pode ser usado nas finalidades previstas no contrato, e o destino de eventuais sobras no encerramento segue o contrato e as normas do Banco Central.",
            "A multa contratual, também chamada de cláusula penal, só pode ser descontada se a administradora provar prejuízo efetivo ao grupo. Descontos sem previsão no contrato, ou sem demonstração na planilha, não são devidos.",
          ],
        },
        {
          title: "Como conferir se o cálculo está certo",
          paragraphs: [
            "O art. 30 da Lei 11.795/2008 manda calcular a restituição pelo percentual do plano que você amortizou, aplicado sobre o valor do bem vigente na data da assembleia, mais os rendimentos da aplicação financeira dos recursos do grupo.",
            "Na prática: se você pagou o equivalente a um quarto do plano, tem direito, em regra, a um quarto do valor atualizado do bem, com os rendimentos, menos o que a lei e o contrato permitem descontar. Se a administradora oferecer apenas a soma nominal das parcelas, sem atualização, vale pedir a revisão da conta.",
          ],
        },
        {
          title: "Erros comuns de quem quer o dinheiro de volta",
          paragraphs: [
            "O primeiro erro é parar de pagar sem formalizar a saída: as cobranças continuam até a exclusão e podem gerar encargos. O segundo é aceitar acordo verbal, sem valor e data por escrito.",
            "O terceiro é não guardar comprovantes e protocolos. O quarto, e mais caro, é cair em anúncio de resgate rápido que cobra taxa adiantada: administradora séria e escritório de advocacia idôneo não pedem dinheiro antecipado para liberar o que já é seu, nem senha do aplicativo.",
          ],
        },
        {
          title: "Quando procurar advogado",
          paragraphs: [
            "Procure orientação quando o prazo de encerramento do grupo já passou e a restituição não veio; quando a administradora descontou multa sem provar prejuízo; quando o valor oferecido não acompanha o preço atualizado do bem; e quando os pedidos ficam sem resposta.",
            "A análise do contrato e do extrato costuma mostrar rapidamente se o cálculo está certo. Em muitos casos, uma notificação bem fundamentada resolve sem processo.",
          ],
        },
      ],
    },
    relatedActions: [
      "parei-de-pagar-consorcio-e-agora",
      "cancelamento-consorcio-como-fazer",
      "terminei-de-pagar-consorcio-e-agora",
    ],
    updatedAt: UPDATED,
  },

  {
    id: "consorcio-parei-de-pagar",
    nicheId: "consumidor",
    slug: "parei-de-pagar-consorcio-e-agora",
    title: "Parei de pagar o consórcio: e agora?",
    metaTitle: "Parei de pagar o consórcio: e agora? | Riccio",
    metaDescription:
      "Parou de pagar o consórcio? Veja o que acontece com a sua cota, por que formalizar a saída evita custo extra e como receber de volta o que pagou.",
    keywords: [
      "parei de pagar o consórcio",
      "parei de pagar consórcio",
      "cancelei meu consórcio e agora",
      "exclusão do consórcio",
      "não quero mais pagar consórcio",
      "transferir cota de consórcio",
    ],
    excerpt:
      "Parar de pagar não faz o dinheiro sumir, mas pode sair mais caro do que pedir a saída por escrito. Veja o que acontece com a cota e quais são os caminhos.",
    content: {
      intro:
        "Deixar de pagar o consórcio sem avisar coloca o consorciado em atraso. O contrato define a partir de quantas parcelas atrasadas a administradora pode excluir a pessoa do grupo. A exclusão não apaga o que foi pago ao fundo comum, mas também não devolve o dinheiro na hora: a restituição segue as mesmas regras da desistência. Enquanto a saída não é formalizada, as parcelas vencidas continuam gerando cobrança.",
      whatIs:
        "Exclusão por inadimplência é o desligamento do consorciado que deixou de pagar, nas condições previstas no contrato. A partir dela, a pessoa deixa de concorrer ao bem, mas passa a concorrer aos sorteios de restituição (art. 22, § 2º, da Lei 11.795/2008). O valor pago ao fundo comum é devolvido conforme o art. 30 da mesma lei.",
      whenYouHaveRight: [
        "Você parou de pagar e foi excluído do grupo.",
        "Você parou de pagar e quer formalizar a saída.",
        "Você quer passar a cota para outra pessoa em vez de sair.",
        "Você foi excluído e a administradora aplicou descontos que não constam do contrato.",
      ],
      documents: [
        "Contrato de adesão e regulamento do grupo",
        "Comprovantes das parcelas pagas",
        "Comunicado de exclusão ou boletos em atraso",
        "Pedido de saída por escrito, se já tiver feito",
        "Documento de identidade e CPF",
      ],
      deadlines:
        "A restituição ao excluído acontece por sorteio, durante o grupo, ou em até 30 dias a contar do prazo previsto no contrato para o encerramento do grupo (Tema 312 do STJ). Quanto antes a saída for formalizada, antes param as cobranças sobre parcelas futuras.",
      faq: [
        {
          question: "Se eu parar de pagar, perco o dinheiro?",
          answer:
            "Não. O que foi pago ao fundo comum é devolvido, por sorteio de excluídos ou no prazo do encerramento do grupo. O que se perde é a chance de receber o bem, além da taxa de administração e do seguro já pagos.",
        },
        {
          question: "A administradora pode me cobrar as parcelas atrasadas?",
          answer:
            "Enquanto o contrato está ativo, as parcelas vencidas podem ser cobradas com os encargos previstos. Por isso vale formalizar a saída logo: depois da exclusão, não há parcelas futuras a pagar.",
        },
        {
          question: "Meu nome pode ir para o SPC ou Serasa?",
          answer:
            "Parcela vencida e não paga pode ser registrada em cadastro de inadimplentes, com aviso prévio, como em qualquer dívida de consumo. Se o seu nome continuar negativado sem dívida exigível depois da exclusão, peça explicação por escrito e conteste.",
        },
        {
          question: "Qual a diferença entre parar de pagar e pedir a saída?",
          answer:
            "Pedir a saída por escrito registra a data e interrompe a formação de novas dívidas. Parar de pagar sem avisar mantém o contrato ativo até a exclusão, com cobrança e encargos sobre as parcelas que vencem nesse meio-tempo.",
        },
        {
          question: "Posso transferir o consórcio para outra pessoa?",
          answer:
            "Sim, com prévia anuência da administradora (art. 13 da Lei 11.795/2008). É a cessão da cota. Pode haver taxa e análise de cadastro de quem vai assumir.",
        },
        {
          question: "A administradora pode descontar multa?",
          answer:
            "Só se o contrato previr e se ela provar que a saída causou prejuízo efetivo ao grupo, conforme o STJ e o art. 53, § 2º, do CDC.",
        },
        {
          question: "Vale a pena procurar advogado?",
          answer:
            "Vale quando a administradora não responde, desconta multa sem prova de prejuízo, apresenta conta que você não consegue conferir ou não paga no prazo do encerramento do grupo.",
        },
      ],
      sections: [
        {
          title: "O que acontece depois que você para de pagar",
          paragraphs: [
            "Cada parcela vencida passa a ter os encargos de atraso previstos no contrato, e a administradora começa a cobrar. O acesso a lances e sorteios do bem também costuma ser suspenso para quem está em atraso.",
            "Atingido o número de parcelas em atraso que o contrato prevê, a administradora pode excluir o consorciado. A partir daí, ele deixa de concorrer ao bem e passa a concorrer aos sorteios de restituição.",
          ],
        },
        {
          title: "Três caminhos para sair com menos prejuízo",
          paragraphs: [
            "O primeiro é a saída formal: um pedido por escrito, com protocolo, que registra a data e evita novas dívidas. O segundo é transferir a cota para outra pessoa, com anuência da administradora, o que pode recuperar o valor mais cedo, conforme o que for negociado com quem assume.",
            "O terceiro, se houver abuso, é contestar a conta: multa sem prova de prejuízo ao grupo e descontos sem previsão no contrato podem ser revistos.",
          ],
        },
        {
          title: "Como estimar quanto você tem a receber",
          paragraphs: [
            "Veja no extrato o percentual do plano que você já amortizou. A restituição é calculada aplicando esse percentual sobre o valor atualizado do bem, mais os rendimentos, menos o que a lei e o contrato permitem descontar (art. 30 da Lei 11.795/2008).",
            "A administradora deve apresentar essa conta de forma clara. Se ela não fechar, peça a planilha detalhada por escrito.",
          ],
        },
        {
          title: "Quando procurar advogado",
          paragraphs: [
            "Procure orientação quando o pedido de saída fica sem resposta, quando a planilha traz descontos sem explicação, quando há multa sem prova de prejuízo ou quando o prazo de encerramento do grupo passa sem pagamento.",
            "Nesses casos, uma notificação bem fundamentada costuma destravar o pagamento. Se não destravar, o Juizado Especial Cível é o caminho mais comum.",
          ],
        },
      ],
    },
    relatedActions: [
      "desistencia-consorcio-como-receber-dinheiro-de-volta",
      "cancelamento-consorcio-como-fazer",
    ],
    updatedAt: UPDATED,
  },

  {
    id: "consorcio-cancelamento",
    nicheId: "consumidor",
    slug: "cancelamento-consorcio-como-fazer",
    title: "Cancelamento de consórcio: como fazer o pedido",
    metaTitle: "Cancelamento de consórcio: como fazer o pedido | Riccio",
    metaDescription:
      "Veja como pedir o cancelamento do consórcio, quando cabe o arrependimento em 7 dias, o que exigir por escrito e quando o dinheiro volta.",
    keywords: [
      "cancelamento de consórcio",
      "cancelamento consórcio como fazer",
      "como cancelar um consórcio",
      "posso cancelar um consórcio",
      "se eu cancelar meu consórcio recebo o dinheiro de volta",
      "arrependimento consórcio 7 dias",
    ],
    excerpt:
      "Cancelar o consórcio é direito do consorciado antes da contemplação. Feito do jeito certo, o pedido protege o valor a receber e evita cobranças desnecessárias.",
    content: {
      intro:
        "O consorciado pode pedir o cancelamento do consórcio antes de ser contemplado. A Lei 11.795/2008 e o Código de Defesa do Consumidor garantem a saída e a restituição do que foi pago ao fundo comum, com os descontos permitidos. Para que o pedido produza efeito sem discussão, ele precisa ser feito por escrito e com comprovante.",
      whatIs:
        "Cancelamento, ou desistência, é o encerramento do contrato por iniciativa do consorciado. É diferente da exclusão, feita pela administradora por falta de pagamento, e da transferência, em que a cota passa para outra pessoa. Para a devolução do dinheiro, cancelamento e exclusão seguem a mesma regra.",
      whenYouHaveRight: [
        "Você ainda não foi contemplado e quer sair do grupo.",
        "Você contratou fora da loja ou da agência (telefone, internet, visita em casa) há menos de 7 dias.",
        "Você encontrou cobrança ou cláusula que não foi informada na contratação.",
        "Você não consegue mais pagar as parcelas.",
      ],
      documents: [
        "Contrato de adesão e regulamento do grupo",
        "Comprovantes de pagamento",
        "Pedido de cancelamento por escrito, com protocolo",
        "E-mails e mensagens trocados com a administradora",
        "Documento de identidade e CPF",
      ],
      deadlines:
        "O pedido pode ser feito a qualquer momento antes da contemplação. O direito de arrependimento, para contratação fora do estabelecimento, é de 7 dias a contar da assinatura (art. 49 do CDC). Fora desse caso, a restituição acontece por sorteio de excluídos ou em até 30 dias do prazo de encerramento do grupo (Tema 312 do STJ).",
      faq: [
        {
          question: "Se eu cancelar meu consórcio, recebo o dinheiro de volta?",
          answer:
            "Sim. O que foi pago ao fundo comum volta, calculado sobre o valor atualizado do bem, mais rendimentos (art. 30 da Lei 11.795/2008). Não voltam a taxa de administração e o seguro. A devolução acontece por sorteio de excluídos ou no prazo do encerramento do grupo.",
        },
        {
          question: "Posso cancelar um consórcio a qualquer momento?",
          answer:
            "Sim, enquanto não foi contemplado. Depois da contemplação, o caminho depende do contrato e de negociação com a administradora, porque já existe crédito liberado ou bem comprado.",
        },
        {
          question: "Cancelamento é a mesma coisa que desistência?",
          answer:
            "Na prática, sim. Os dois termos descrevem a saída do grupo por vontade do consorciado, com os mesmos efeitos sobre a devolução.",
        },
        {
          question: "Existe direito de arrependimento no consórcio?",
          answer:
            "Sim, quando a contratação foi feita fora do estabelecimento, como por telefone, internet ou visita de vendedor. Nesse caso, há 7 dias a contar da assinatura para desistir, com devolução de tudo o que foi pago, atualizado (art. 49 do CDC). Na contratação feita na loja ou agência, esse direito não se aplica.",
        },
        {
          question: "Como faço o pedido de cancelamento?",
          answer:
            "Use o canal oficial da administradora e faça o pedido por escrito, informando o número do grupo e da cota. Guarde o protocolo e peça a confirmação com a data da saída e o extrato da cota.",
        },
        {
          question: "A administradora pode se recusar a cancelar?",
          answer:
            "Não pode impedir a saída. O que ela pode é seguir as regras de restituição da lei e aplicar apenas os descontos que o contrato prevê e que a Justiça admite.",
        },
        {
          question: "Preciso de advogado para cancelar?",
          answer:
            "Para o pedido, não. Para contestar multa, descontos ou atraso na devolução, é recomendável. No Juizado Especial Cível, em causas de até 20 salários mínimos, a pessoa pode entrar sem advogado.",
        },
      ],
      sections: [
        {
          title: "Passo a passo do cancelamento",
          paragraphs: [
            "Primeiro, confira no contrato ou no aplicativo qual é o canal oficial para pedidos. Depois, faça o pedido por escrito: informe nome, CPF, número do grupo e da cota, e diga com clareza que deseja cancelar a participação a partir daquela data.",
            "Guarde o número de protocolo e peça a confirmação com três informações: a data da saída, o extrato da cota e a forma como a restituição será feita. Se a resposta não vier, repita o pedido por outro canal e guarde tudo.",
          ],
        },
        {
          title: "O arrependimento em 7 dias",
          paragraphs: [
            "Quando a venda acontece fora da loja ou da agência, o Código de Defesa do Consumidor dá 7 dias para desistir sem justificativa. Vale para contratação por telefone, internet, aplicativo ou visita de vendedor.",
            "Dentro desse prazo, a devolução deve ser de tudo o que foi pago, atualizado, sem os descontos da desistência comum. Basta enviar o pedido por escrito dentro dos 7 dias e guardar o comprovante.",
          ],
        },
        {
          title: "O que conferir na planilha de restituição",
          paragraphs: [
            "A planilha deve mostrar o percentual do plano que você amortizou, o valor do bem usado no cálculo, os rendimentos e cada desconto aplicado, com a cláusula do contrato que o autoriza.",
            "Se aparecer multa, pergunte qual foi o prejuízo do grupo. Sem prova desse prejuízo, o STJ não admite o desconto.",
          ],
        },
        {
          title: "Quando a Justiça costuma corrigir a conta",
          paragraphs: [
            "Os tribunais costumam intervir quando há multa sem prova de prejuízo, quando o valor devolvido não acompanha o preço atualizado do bem, quando há descontos sem previsão no contrato e quando a devolução atrasa depois do prazo de encerramento do grupo.",
            "Em muitos casos, a notificação extrajudicial bem fundamentada já leva a administradora a corrigir o cálculo.",
          ],
        },
      ],
    },
    relatedActions: [
      "desistencia-consorcio-como-receber-dinheiro-de-volta",
      "parei-de-pagar-consorcio-e-agora",
    ],
    updatedAt: UPDATED,
  },

  {
    id: "consorcio-nova-lei-2026",
    nicheId: "consumidor",
    slug: "nova-lei-consorcio-devolucao-2026",
    title: "Nova lei do consórcio em 2026: o que mudou na devolução?",
    metaTitle: "Nova lei do consórcio em 2026: o que mudou? | Riccio",
    metaDescription:
      "Existe nova lei do consórcio em 2026? Veja o que está em vigor sobre devolução a quem desiste, o que é boato e como evitar golpes de resgate rápido.",
    keywords: [
      "nova lei do consórcio",
      "nova lei do consórcio devolução do dinheiro 2026",
      "lei do consórcio 2026",
      "consórcio nova lei devolução",
      "golpe resgate consórcio",
    ],
    excerpt:
      "Circulam mensagens sobre uma nova lei que obrigaria a devolução imediata do consórcio. Veja o que de fato está em vigor e como não cair em golpe.",
    content: {
      intro:
        "De tempos em tempos circulam mensagens sobre uma nova lei que obrigaria a administradora a devolver o dinheiro do consórcio na hora. Até novembro de 2026, não foi publicada lei com essa regra. A devolução continua regida pela Lei 11.795/2008 e pelo entendimento do STJ. Saber o que está valendo evita duas perdas: esperar uma mudança que não veio e pagar a golpistas que prometem resgate rápido.",
      whatIs:
        "A Lei 11.795/2008 é a lei dos consórcios. Ela define como o grupo funciona, como são as contemplações e como o consorciado excluído recebe o que pagou. O excluído concorre aos sorteios de restituição (art. 22, § 2º) e, se não for sorteado, recebe em até 30 dias a contar do prazo previsto no contrato para o encerramento do grupo, conforme o Tema 312 do STJ. O Banco Central regula e fiscaliza as administradoras.",
      whenYouHaveRight: [
        "Você desistiu ou foi excluído e quer saber quando recebe.",
        "Você recebeu mensagem prometendo resgate rápido com base em nova lei.",
        "O prazo de encerramento do seu grupo passou e o dinheiro não veio.",
        "A administradora descontou valores que você não entende.",
      ],
      documents: [
        "Contrato de adesão e regulamento do grupo",
        "Comprovantes de pagamento",
        "Comunicados da administradora",
        "Prints das mensagens ou anúncios que prometem resgate",
      ],
      deadlines:
        "A regra em vigor é a devolução por sorteio de excluídos ou em até 30 dias a contar do prazo contratual de encerramento do grupo. Esperar uma lei nova não altera esse prazo.",
      faq: [
        {
          question: "Existe nova lei do consórcio em 2026?",
          answer:
            "Até novembro de 2026, não foi publicada lei que obrigue a devolução imediata a quem desiste. Propostas e ideias legislativas surgem de tempos em tempos, mas só valem depois de aprovadas, sancionadas e publicadas no Diário Oficial.",
        },
        {
          question: "Então por que tanta gente fala em nova lei?",
          answer:
            "Em parte, por confusão com decisões judiciais antigas, divulgadas como se fossem novidade. Em parte, por anúncios de empresas que cobram para fazer o resgate. Toda promessa de devolução imediata mediante pagamento adiantado merece desconfiança.",
        },
        {
          question: "O STJ obriga a devolver antes do fim do grupo?",
          answer:
            "Não. O STJ fixou que a restituição ao desistente não é imediata e ocorre em até 30 dias a contar do prazo contratual de encerramento do plano (Tema 312). Antes disso, só por sorteio de excluídos ou por acordo.",
        },
        {
          question: "Recebi proposta de resgate rápido do consórcio. É golpe?",
          answer:
            "Os sinais de golpe são cobrança de taxa antecipada, pedido de senha do aplicativo, contato por número desconhecido usando o nome da administradora e pressa para fechar. Confirme a situação da sua cota pelo canal oficial da administradora antes de qualquer pagamento.",
        },
        {
          question: "Vale a pena esperar uma lei nova para sair?",
          answer:
            "Não. Quem quer sair deve formalizar a desistência agora, pelo canal oficial. Esperar só acumula parcelas ou atrasos.",
        },
        {
          question: "Como confirmar se uma lei foi aprovada?",
          answer:
            "Consulte o portal da legislação federal do Planalto ou os sites da Câmara e do Senado. Lei aprovada tem número e data de publicação no Diário Oficial da União.",
        },
      ],
      sections: [
        {
          title: "O que está valendo hoje",
          paragraphs: [
            "Quem sai do grupo concorre aos sorteios de restituição. Se não for sorteado, recebe em até 30 dias a contar do prazo de encerramento previsto no contrato. O valor é calculado pelo percentual amortizado sobre o valor atualizado do bem, mais rendimentos (art. 30 da Lei 11.795/2008).",
            "Não voltam a taxa de administração e o seguro. A multa contratual só pode ser descontada com prova de prejuízo ao grupo.",
          ],
        },
        {
          title: "Como reconhecer o golpe do resgate de consórcio",
          paragraphs: [
            "O golpe costuma começar com uma mensagem dizendo que uma nova lei liberou o dinheiro e que basta pagar uma taxa para receber. Os golpistas usam logotipo parecido com o da administradora, pedem documentos e, às vezes, a senha do aplicativo.",
            "Nenhuma administradora séria cobra para devolver o que já é devido, e nenhum escritório de advocacia idôneo pede senha de aplicativo. Na dúvida, fale com a administradora pelos canais oficiais ou procure um advogado inscrito na OAB.",
          ],
        },
        {
          title: "O que fazer de verdade para sair",
          paragraphs: [
            "Formalize a desistência por escrito, com protocolo, e guarde o extrato da cota. Acompanhe as assembleias, porque o seu nome concorre aos sorteios de restituição.",
            "Se quiser recuperar o valor mais cedo, a alternativa legal é transferir a cota para outra pessoa, com anuência da administradora (art. 13 da Lei 11.795/2008). Se o prazo de encerramento passar sem pagamento, notifique e, se preciso, procure a Justiça.",
          ],
        },
      ],
    },
    relatedActions: [
      "desistencia-consorcio-como-receber-dinheiro-de-volta",
      "cancelamento-consorcio-como-fazer",
    ],
    updatedAt: UPDATED,
  },

  {
    id: "consorcio-terminei-de-pagar",
    nicheId: "consumidor",
    slug: "terminei-de-pagar-consorcio-e-agora",
    title: "Terminei de pagar o consórcio: e agora?",
    metaTitle: "Terminei de pagar o consórcio: e agora? | Riccio",
    metaDescription:
      "Quitou o consórcio? Veja como pedir o termo de quitação e a baixa da garantia, o que acontece se você não foi contemplado e quando o crédito vira dinheiro.",
    keywords: [
      "terminei de pagar o consórcio e agora",
      "quitar consórcio",
      "quitação de consórcio",
      "baixa do gravame consórcio",
      "termo de quitação consórcio imóvel",
      "consórcio não contemplado no final",
    ],
    excerpt:
      "Pagar a última parcela encerra uma etapa, mas ainda há passos importantes. Veja o que fazer se você já está com o bem, se ainda não foi contemplado ou se saiu do grupo antes.",
    content: {
      intro:
        "Pagar a última parcela do consórcio encerra uma etapa, mas o que vem depois depende da sua situação. Se você já foi contemplado e está com o bem, falta cancelar a garantia que ficou em favor da administradora. Se ainda não foi contemplado, a contemplação vem até a última assembleia, e o crédito que não for usado fica disponível em dinheiro. Se você saiu do grupo antes, valem as regras de restituição.",
      whatIs:
        "Quitar o consórcio é pagar todas as parcelas previstas no contrato. Quando o consorciado é contemplado e compra o bem com a carta de crédito, o bem costuma ficar alienado fiduciariamente à administradora, como garantia das parcelas que faltavam. Com a quitação, essa garantia deve ser cancelada: no carro, com a baixa do gravame; no imóvel, com o termo de quitação levado ao Cartório de Registro de Imóveis.",
      whenYouHaveRight: [
        "Você quitou o consórcio e o bem continua com restrição em nome da administradora.",
        "Você quitou o consórcio do imóvel e não recebeu o termo de quitação.",
        "Você pagou tudo e ainda não foi contemplado.",
        "Você foi contemplado no fim do grupo e não usou o crédito.",
      ],
      documents: [
        "Contrato de adesão e regulamento do grupo",
        "Comprovante de pagamento da última parcela",
        "Extrato da cota mostrando a quitação",
        "Documento do veículo ou matrícula do imóvel",
        "Protocolos de pedidos feitos à administradora",
      ],
      deadlines:
        "No consórcio de imóvel com alienação fiduciária, a administradora tem 30 dias, contados da quitação, para entregar o termo de quitação; se atrasar, paga multa de 0,5% ao mês, ou fração, sobre o valor do contrato (art. 25, §§ 1º e 1º-A, da Lei 9.514/1997). No encerramento do grupo, a administradora deve avisar, em até 60 dias após a última assembleia, que o crédito não utilizado está disponível em dinheiro (art. 31, I, da Lei 11.795/2008).",
      faq: [
        {
          question: "Terminei de pagar e não fui contemplado. Perdi?",
          answer:
            "Não. O grupo é formado para que os participantes em dia sejam contemplados até a última assembleia. Se o crédito não for usado até o encerramento, ele fica disponível em dinheiro, e a administradora deve avisar em até 60 dias após a última assembleia (art. 31, I, da Lei 11.795/2008).",
        },
        {
          question: "O crédito que não usei rende alguma coisa?",
          answer:
            "Sim. O crédito recebe os rendimentos líquidos da aplicação financeira, proporcionais ao período entre a sua disponibilização e o uso (art. 24, § 1º, da Lei 11.795/2008).",
        },
        {
          question: "Quitei o consórcio do carro. Como tiro a restrição?",
          answer:
            "Peça à administradora a baixa do gravame, que é a anotação da alienação fiduciária no registro do veículo. Depois, confira no Detran do seu estado se a restrição saiu. Se a baixa não for feita, notifique a administradora por escrito.",
        },
        {
          question: "Quitei o consórcio do imóvel. Quando recebo o termo de quitação?",
          answer:
            "Em até 30 dias, contados da quitação. Se atrasar, a administradora paga multa de 0,5% ao mês, ou fração, sobre o valor do contrato (art. 25, §§ 1º e 1º-A, da Lei 9.514/1997). Com o termo em mãos, o Cartório de Registro de Imóveis cancela o registro da alienação fiduciária.",
        },
        {
          question: "Posso quitar o consórcio antes do prazo?",
          answer:
            "Em geral, sim, nas condições do contrato. Peça à administradora a simulação por escrito, com o valor e o efeito da antecipação sobre as parcelas restantes.",
        },
        {
          question: "E se eu tiver saído do grupo antes do fim?",
          answer:
            "Aí valem as regras da restituição: você concorre aos sorteios de excluídos e, se não for sorteado, recebe em até 30 dias a contar do prazo de encerramento do grupo previsto no contrato (Tema 312 do STJ).",
        },
        {
          question: "Preciso de advogado?",
          answer:
            "Para os passos normais, não. Se a administradora não entrega o termo de quitação, não dá baixa no gravame ou não paga o crédito em dinheiro no encerramento, uma notificação e, se necessário, uma ação resolvem.",
        },
      ],
      sections: [
        {
          title: "Se você já foi contemplado e está com o bem",
          paragraphs: [
            "Com a última parcela paga, peça à administradora a declaração de quitação. No caso do carro ou da moto, peça também a baixa do gravame e confira no Detran se a restrição foi retirada antes de vender ou transferir o veículo.",
            "No caso do imóvel, a lei dá 30 dias para a entrega do termo de quitação, com multa por atraso. Com o termo, leve ao Cartório de Registro de Imóveis da matrícula para cancelar o registro da alienação fiduciária. Só então o imóvel fica livre da garantia.",
          ],
        },
        {
          title: "Se você terminou de pagar e ainda não foi contemplado",
          paragraphs: [
            "No consórcio, o grupo é montado para que os participantes em dia sejam contemplados até a última assembleia. Acompanhe as assembleias pelo aplicativo ou pelo site.",
            "Se o crédito for liberado no fim e você não quiser ou não conseguir usá-lo até o encerramento, ele fica disponível em dinheiro, com rendimentos. A administradora deve comunicar essa disponibilidade em até 60 dias depois da última assembleia.",
          ],
        },
        {
          title: "Se você saiu do grupo antes do fim",
          paragraphs: [
            "Quem desistiu ou foi excluído concorre aos sorteios de restituição e, se não for sorteado, recebe em até 30 dias a contar do prazo de encerramento previsto no contrato. O valor segue o cálculo do art. 30 da Lei 11.795/2008.",
            "Se o prazo passar e o dinheiro não cair, notifique a administradora por escrito e peça a planilha do cálculo.",
          ],
        },
        {
          title: "Quando procurar advogado",
          paragraphs: [
            "Procure orientação quando o termo de quitação ou a baixa do gravame não saem, quando o crédito não é pago em dinheiro no encerramento do grupo, ou quando a restituição atrasa ou vem com descontos sem explicação.",
            "A maioria desses problemas se resolve com notificação bem fundamentada. Quando não resolve, a ação judicial é o caminho.",
          ],
        },
      ],
    },
    relatedActions: [
      "desistencia-consorcio-como-receber-dinheiro-de-volta",
      "cancelamento-consorcio-como-fazer",
    ],
    updatedAt: UPDATED,
  },
];

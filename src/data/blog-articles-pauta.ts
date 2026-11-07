/**
 * Artigos da pauta de 07/11/2026 (_planos/SEO-PAUTA.md): temas com busca real no Google
 * e sem página parecida no site. Cada artigo foi escrito com a lei conferida no texto
 * oficial (Planalto) e sem valor de indenização, chance de êxito ou honorário.
 */
import type { BlogArticle } from "./blog-articles";

export const pautaArticles: BlogArticle[] = [
  // ============================================================
  // 1. APOSENTADORIA EM 2026: REGRAS DE TRANSIÇÃO
  // Conferido em 07/11/2026: EC 103/2019, arts. 3º, 15 a 20 e 26 (planalto.gov.br);
  // piso e teto do INSS 2026 em src/data/valores-vigentes.ts.
  // ============================================================
  {
    id: "aposentadoria-2026-regras",
    nicheId: "previdenciario",
    slug: "aposentadoria-2026-regras",
    title: "Aposentadoria em 2026: Regras de Transição, Idade Mínima e Pontos",
    metaTitle: "Aposentadoria 2026: Regras, Idade e Pontos do INSS",
    metaDescription:
      "Regras da aposentadoria do INSS em 2026: 93 pontos (mulher) e 103 (homem), idade mínima de 59,5 e 64,5 anos, pedágios, regra por idade e cálculo do valor.",
    keywords: [
      "aposentadoria 2026",
      "aposentadoria 2026 regras",
      "regras de transição 2026",
      "pontos aposentadoria 2026",
      "idade mínima aposentadoria 2026",
      "aposentadoria 2026 mulher",
      "valor aposentadoria 2026",
    ],
    excerpt:
      "Em 2026 valem as regras da Reforma da Previdência: 93 pontos para a mulher e 103 para o homem, idade mínima de 59 anos e 6 meses ou 64 anos e 6 meses, pedágios de 50% e 100% e a aposentadoria por idade aos 62 e 65 anos.",
    content: {
      intro:
        "Em resumo: em 2026 a aposentadoria do INSS continua seguindo a Reforma da Previdência (Emenda Constitucional 103, em vigor desde 13/11/2019). Quem já contribuía antes da reforma pode usar uma das regras de transição: 93 pontos para a mulher e 103 para o homem, idade mínima de 59 anos e 6 meses (mulher) ou 64 anos e 6 meses (homem) com 30 ou 35 anos de contribuição, os pedágios de 50% e de 100% ou a aposentadoria por idade aos 62 e 65 anos. Quem começou a contribuir depois da reforma segue a regra permanente. O que muda a cada 1º de janeiro são os pontos e a idade mínima das regras de transição; por isso a regra que era a melhor no ano passado pode não ser a melhor agora.",
      whatIs:
        "Regra de transição é o caminho que a Reforma da Previdência criou para quem já era filiado ao INSS em 13/11/2019 não cair de uma vez nas exigências novas. São cinco caminhos diferentes, com requisitos e cálculos próprios, e a mesma pessoa pode cumprir mais de um. A regra permanente vale para quem se filiou depois dessa data: idade mínima de 62 anos (mulher) ou 65 anos (homem), com 15 anos de contribuição para a mulher e 20 para o homem. Quem completou todos os requisitos das regras antigas até 13/11/2019 tem direito adquirido e pode se aposentar por elas a qualquer tempo (art. 3º da Emenda 103).",
      whenYouHaveRight: [
        "Regra dos pontos (art. 15): 30 anos de contribuição (mulher) ou 35 (homem) e, em 2026, 93 pontos (mulher) ou 103 pontos (homem), somando idade e tempo de contribuição",
        "Idade mínima progressiva (art. 16): 30 ou 35 anos de contribuição e, em 2026, 59 anos e 6 meses (mulher) ou 64 anos e 6 meses (homem)",
        "Pedágio de 50% (art. 17): só para quem tinha mais de 28 anos (mulher) ou 33 anos (homem) de contribuição em 13/11/2019; cumpre metade do tempo que faltava, sem idade mínima",
        "Pedágio de 100% (art. 20): 57 anos (mulher) ou 60 anos (homem), 30 ou 35 anos de contribuição e o dobro do tempo que faltava em 13/11/2019",
        "Aposentadoria por idade de quem já contribuía antes da reforma (art. 18): 62 anos (mulher) ou 65 anos (homem) e 15 anos de contribuição",
        "Regra permanente (art. 19), para quem começou depois da reforma: 62 anos e 15 anos de contribuição (mulher) ou 65 anos e 20 anos de contribuição (homem)",
        "Direito adquirido: requisitos completos até 13/11/2019 garantem as regras antigas",
      ],
      documents: [
        "Extrato do CNIS (Cadastro Nacional de Informações Sociais), baixado no Meu INSS",
        "Carteiras de trabalho, inclusive as antigas, com todas as anotações",
        "Carnês ou guias de recolhimento (GPS) de quem pagou como autônomo ou facultativo",
        "PPP (Perfil Profissiográfico Previdenciário) e laudos de quem trabalhou exposto a agentes nocivos",
        "Certidão de tempo de contribuição de período em regime próprio (serviço público)",
        "Documentos de atividade rural, se houver período no campo",
        "Contracheques e documentos que provem salários quando o CNIS estiver errado ou incompleto",
        "Documento de identidade com CPF e comprovante de residência",
      ],
      deadlines:
        "Não há prazo para pedir a aposentadoria: o direito não se perde com o tempo, mas o pagamento só começa a contar do pedido (ou da saída do emprego, se o pedido for feito em até 90 dias). Se o INSS negar, o recurso administrativo à Junta de Recursos tem prazo de 30 dias da ciência da decisão. Depois de concedida, a revisão do cálculo pode ser pedida em até 10 anos (art. 103 da Lei 8.213/1991).",
      faq: [
        {
          question: "Quais são as regras da aposentadoria em 2026?",
          answer:
            "Continuam as da Emenda Constitucional 103/2019. Para quem já contribuía antes de 13/11/2019 há cinco regras de transição: pontos (93 para a mulher e 103 para o homem em 2026), idade mínima progressiva (59 anos e 6 meses ou 64 anos e 6 meses), pedágio de 50%, pedágio de 100% e aposentadoria por idade (62 ou 65 anos, com 15 anos de contribuição). Para quem começou depois, vale a regra permanente.",
        },
        {
          question: "Com quantos anos a mulher se aposenta em 2026?",
          answer:
            "Depende da regra. Pela aposentadoria por idade, aos 62 anos, com 15 anos de contribuição. Pela idade mínima progressiva, aos 59 anos e 6 meses, desde que tenha 30 anos de contribuição. Pela regra dos pontos não há idade mínima: basta somar 93 pontos entre idade e contribuição, com pelo menos 30 anos de contribuição. Pelo pedágio de 50%, também não há idade mínima.",
        },
        {
          question: "Quantos pontos preciso em 2026?",
          answer:
            "93 pontos se for mulher e 103 se for homem, além de 30 ou 35 anos de contribuição. A pontuação sobe 1 ponto por ano até chegar a 100 para a mulher (em 2033) e 105 para o homem (em 2028). Idade e tempo de contribuição são contados em dias, então meses quebrados também entram na soma.",
        },
        {
          question: "Como é calculado o valor da aposentadoria?",
          answer:
            "Pela média de todos os salários de contribuição desde julho de 1994. Na maioria das regras, o benefício é 60% dessa média mais 2% por ano de contribuição acima de 15 anos (mulher) ou 20 anos (homem). No pedágio de 100% o valor é 100% da média; no pedágio de 50% a média é multiplicada pelo fator previdenciário. Em 2026 nenhum benefício fica abaixo de R$ 1.621,00 nem acima de R$ 8.475,55.",
        },
        {
          question: "Comecei a contribuir depois de 2019. Qual regra vale para mim?",
          answer:
            "A regra permanente (art. 19 da Emenda 103): 62 anos de idade e 15 anos de contribuição para a mulher; 65 anos de idade e 20 anos de contribuição para o homem. As regras de transição são só para quem já era filiado ao INSS em 13/11/2019.",
        },
        {
          question: "Vale a pena esperar mais um ano para se aposentar?",
          answer:
            "Às vezes sim. Cada ano a mais de contribuição soma 2% no cálculo da maioria das regras, e a troca de regra pode mudar bastante o valor. Em compensação, são meses sem receber. A conta certa compara as regras em que você já se encaixa com as que alcançaria esperando, a partir do seu CNIS. O Meu INSS tem um simulador que ajuda a começar essa comparação.",
        },
        {
          question: "O INSS escolhe a regra mais vantajosa para mim?",
          answer:
            "O INSS deve analisar o direito ao melhor benefício, e o STF reconheceu esse direito no Tema 334. Na prática, erros acontecem: períodos que não aparecem no CNIS, tempo especial não reconhecido e salários faltando mudam a regra e o valor. Por isso vale conferir o CNIS antes de pedir.",
        },
        {
          question: "E se o INSS negar a aposentadoria?",
          answer:
            "Dá para recorrer à Junta de Recursos em 30 dias ou entrar com ação na Justiça Federal. Na Bahia, causas de até 60 salários mínimos vão ao Juizado Especial Federal. Antes de recorrer, leia o motivo da negativa na carta do INSS: muitas vezes falta um documento que resolve o problema.",
        },
      ],
      sections: [
        {
          title: "Regra dos pontos: idade mais tempo de contribuição",
          paragraphs: [
            "É a regra mais procurada por quem começou a trabalhar cedo. Exige 30 anos de contribuição para a mulher e 35 para o homem e uma pontuação mínima, que é a soma da idade com o tempo de contribuição. Em 2026, são 93 pontos para a mulher e 103 para o homem. Exemplo: uma mulher com 61 anos e 32 anos de contribuição soma 93 pontos e cumpre a regra.",
            "A pontuação sobe 1 ponto a cada 1º de janeiro, até 100 pontos para a mulher e 105 para o homem. Como a conta é feita em dias, quem está perto da pontuação pode alcançá-la no meio do ano. O valor segue o cálculo geral: 60% da média mais 2% por ano acima de 15 anos de contribuição (mulher) ou 20 anos (homem).",
          ],
        },
        {
          title: "Idade mínima progressiva",
          paragraphs: [
            "Exige 30 anos de contribuição (mulher) ou 35 (homem) e uma idade mínima que sobe 6 meses por ano. Em 2026, são 59 anos e 6 meses para a mulher e 64 anos e 6 meses para o homem. A idade do homem chega a 65 anos em 2027; a da mulher, a 62 anos em 2031.",
            "Costuma interessar a quem tem bastante tempo de contribuição, mas ainda não alcançou a pontuação. O cálculo do valor é o mesmo da regra dos pontos.",
          ],
        },
        {
          title: "Pedágio de 50% e pedágio de 100%",
          paragraphs: [
            "O pedágio de 50% só vale para quem, em 13/11/2019, já tinha mais de 28 anos de contribuição (mulher) ou 33 anos (homem). A pessoa cumpre o tempo que faltava mais a metade dele, sem idade mínima. Exemplo: um homem que tinha 34 anos de contribuição precisava de mais 1 ano; com o pedágio, contribui 1 ano e 6 meses. O valor é a média multiplicada pelo fator previdenciário, que costuma reduzir o benefício de quem se aposenta mais jovem.",
            "O pedágio de 100% exige idade mínima de 57 anos (mulher) ou 60 anos (homem), 30 ou 35 anos de contribuição e o dobro do tempo que faltava em 13/11/2019. Em troca, o valor é 100% da média, sem o redutor dos 60%. Para quem já tem a idade, pode ser a regra que paga mais.",
          ],
        },
        {
          title: "Aposentadoria por idade",
          paragraphs: [
            "Para quem já contribuía antes da reforma, a aposentadoria por idade exige 65 anos para o homem e 62 anos para a mulher (a idade dela subiu de 60 para 62 entre 2020 e 2023), com 15 anos de contribuição para ambos. Para quem começou a contribuir depois de 13/11/2019, o homem precisa de 20 anos de contribuição.",
            "O valor é 60% da média mais 2% por ano que passar de 15 anos de contribuição (mulher) ou 20 anos (homem), nunca abaixo do salário mínimo. Professores, pessoas com deficiência, trabalhadores rurais e quem trabalhou exposto a agentes nocivos têm regras próprias, que não estão neste resumo.",
          ],
        },
        {
          title: "Como pedir e o que conferir antes",
          paragraphs: [
            "O pedido é feito pelo Meu INSS (aplicativo ou site gov.br) ou pelo telefone 135. Antes de pedir, baixe o extrato do CNIS e compare com a carteira de trabalho: vínculos sem data de saída, salários faltando e períodos especiais não marcados são os erros mais comuns e mudam o valor e até a regra aplicável. Corrigir o CNIS antes evita uma aposentadoria menor do que a devida.",
            "Também é possível retirar da média os salários que diminuem o benefício, desde que se mantenha o tempo mínimo exigido (art. 26, § 6º, da Emenda 103). Essa conta, junto com a comparação entre as regras, é o que define o melhor momento para pedir.",
          ],
        },
      ],
    },
    relatedActions: ["aposentadoria", "idade", "pensao-morte"],
    updatedAt: "2026-11-07",
  },
];

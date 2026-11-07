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

  // ============================================================
  // 3. AUXÍLIO-ACIDENTE
  // Conferido em 07/11/2026: Lei 8.213/1991, arts. 18 § 1º, 26 I, 86 e 103 (texto em vigor,
  // planalto.gov.br); serviço "Solicitar Auxílio-Acidente no INSS" (gov.br, atualizado em 20/08/2026).
  // ============================================================
  {
    id: "auxilio-acidente",
    nicheId: "previdenciario",
    slug: "auxilio-acidente",
    title: "Auxílio-Acidente do INSS: Quem Tem Direito, Valor e Como Pedir",
    metaTitle: "Auxílio-Acidente: Quem Tem Direito, Valor e Como Pedir",
    metaDescription:
      "Auxílio-acidente do INSS: quem tem direito, valor (50% do salário de benefício), como pedir pelo Meu INSS e por que dá para continuar trabalhando.",
    keywords: [
      "auxílio-acidente",
      "auxílio acidente como funciona",
      "auxílio acidente quem tem direito",
      "auxílio acidente valor",
      "auxílio acidente inss",
      "sequela de acidente inss",
    ],
    excerpt:
      "O auxílio-acidente é uma indenização mensal do INSS para quem ficou com sequela permanente de um acidente que reduz a capacidade de trabalho. Paga 50% do salário de benefício, não exige carência e pode ser recebido junto com o salário.",
    content: {
      intro:
        "Em resumo: o auxílio-acidente é uma indenização mensal paga pelo INSS a quem, depois de um acidente de qualquer natureza (no trabalho, no trânsito, em casa), ficou com sequela permanente que reduz a capacidade para o trabalho que fazia. O valor é 50% do salário de benefício, não exige tempo mínimo de contribuição e pode ser recebido junto com o salário: a pessoa continua trabalhando. Têm direito o empregado com carteira, o empregado doméstico, o trabalhador avulso e o segurado especial (rural). O benefício termina quando a pessoa se aposenta. O pedido é feito pelo Meu INSS e passa por perícia médica.",
      whatIs:
        "Diferente do auxílio por incapacidade temporária (o antigo auxílio-doença), que substitui o salário enquanto a pessoa não pode trabalhar, o auxílio-acidente não substitui renda: é uma indenização pela perda parcial e permanente da capacidade para o trabalho (art. 86 da Lei 8.213/1991). Por isso pode ser menor que o salário mínimo e é pago junto com o salário. Em geral começa no dia seguinte ao fim do auxílio por incapacidade temporária que a pessoa recebeu por causa do acidente.",
      whenYouHaveRight: [
        "Ter sofrido acidente de qualquer natureza: no trabalho, no trajeto, no trânsito, em casa ou no lazer",
        "Ficar com sequela permanente, depois da consolidação das lesões, que reduza a capacidade para o trabalho que fazia (art. 86 da Lei 8.213/1991)",
        "Ser empregado com carteira, empregado doméstico, trabalhador avulso ou segurado especial na data do acidente (art. 18, § 1º)",
        "Estar vinculado ao INSS (qualidade de segurado) na data do acidente; não se exige carência (art. 26, I)",
        "Não estar aposentado: o auxílio-acidente não se acumula com aposentadoria (art. 86, § 2º)",
        "Perda auditiva só dá direito se ligada ao trabalho e se reduzir, de forma comprovada, a capacidade para a atividade habitual (art. 86, § 4º)",
      ],
      documents: [
        "Documento de identidade com CPF",
        "Laudos, exames e relatórios médicos que descrevam a sequela e a limitação para o trabalho, com o CID",
        "Registro do acidente: CAT (Comunicação de Acidente de Trabalho), boletim de ocorrência ou ficha de atendimento hospitalar",
        "Carta de concessão e de encerramento do auxílio por incapacidade temporária, se houve",
        "Carteira de trabalho e documentos que mostrem a atividade que a pessoa exercia",
        "Para trabalhador rural: documentos da atividade no campo",
      ],
      deadlines:
        "Não há prazo para pedir, mas as parcelas atrasadas só podem ser cobradas dos últimos 5 anos (art. 103, parágrafo único, da Lei 8.213/1991). Se o INSS negar, o recurso administrativo tem prazo de 30 dias. A ação judicial de acidente do trabalho corre na Justiça Estadual; a de acidente de outra natureza, na Justiça Federal.",
      faq: [
        {
          question: "Quem tem direito ao auxílio-acidente?",
          answer:
            "O empregado com carteira, o empregado doméstico, o trabalhador avulso e o segurado especial (trabalhador rural em regime familiar) que, depois de um acidente de qualquer natureza, ficaram com sequela permanente que reduz a capacidade para o trabalho que faziam (arts. 18, § 1º, e 86 da Lei 8.213/1991). Não se exige tempo mínimo de contribuição.",
        },
        {
          question: "Qual o valor do auxílio-acidente?",
          answer:
            "50% do salário de benefício (art. 86, § 1º), que é calculado pela média dos salários de contribuição. Como é uma indenização e não substitui o salário, o auxílio-acidente pode ficar abaixo do salário mínimo.",
        },
        {
          question: "Quem recebe auxílio-acidente pode trabalhar?",
          answer:
            "Sim. O benefício é pago independentemente de salário ou outra renda (art. 86, §§ 2º e 3º). A pessoa pode continuar no mesmo emprego, mudar de emprego e até receber outros benefícios do INSS, exceto aposentadoria.",
        },
        {
          question: "Auxílio-acidente é para sempre?",
          answer:
            "É pago até a véspera de qualquer aposentadoria ou até a morte (art. 86, § 1º). Voltar a trabalhar não encerra o benefício. Só quem teve a lesão e a aposentadoria antes de 11/11/1997 pode receber os dois juntos (Súmula 507 do STJ).",
        },
        {
          question: "Autônomo ou MEI tem direito ao auxílio-acidente?",
          answer:
            "Não. A lei limita o benefício ao empregado, ao empregado doméstico (incluído em 2015 pela Lei Complementar 150), ao trabalhador avulso e ao segurado especial (art. 18, § 1º). Contribuinte individual, inclusive o MEI, e o segurado facultativo ficam de fora.",
        },
        {
          question: "Preciso ter recebido auxílio-doença antes?",
          answer:
            "Não é obrigatório, mas é o caminho mais comum: pela lei, o auxílio-acidente começa no dia seguinte ao fim do auxílio por incapacidade temporária (art. 86, § 2º). Quem não recebeu pode pedir diretamente pelo Meu INSS e passar pela perícia.",
        },
        {
          question: "Como pedir o auxílio-acidente?",
          answer:
            "Pelo Meu INSS (site ou aplicativo), no serviço Auxílio-Acidente, com a conta gov.br. O pedido começa todo pela internet e, durante a análise, o INSS pode chamar para perícia médica. Também é possível pedir pelo telefone 135.",
        },
        {
          question: "O INSS negou. E agora?",
          answer:
            "Dá para recorrer à Junta de Recursos em 30 dias ou entrar na Justiça. Se o acidente foi de trabalho, a ação contra o INSS é na Justiça Estadual (Súmula 15 do STJ); se foi de outra natureza, na Justiça Federal. Nos dois casos, o juiz costuma nomear um perito para examinar a sequela.",
        },
        {
          question: "Acidente de trabalho também dá direito a indenização da empresa?",
          answer:
            "Pode dar, mas é outra coisa. O auxílio-acidente vem do INSS e não depende de culpa de ninguém. A indenização contra o empregador depende de dolo ou culpa da empresa (art. 7º, XXVIII, da Constituição) e é pedida na Justiça do Trabalho.",
        },
      ],
      sections: [
        {
          title: "O que conta como acidente e como sequela",
          paragraphs: [
            "Desde 1995 a lei fala em acidente de qualquer natureza: vale o acidente de trabalho, o de trajeto, o de trânsito, a queda em casa ou o acidente no futebol do fim de semana. O que importa é o resultado: depois que as lesões se consolidam, isto é, quando o tratamento já não muda o quadro, sobra uma sequela permanente que reduz a capacidade para o trabalho que a pessoa fazia.",
            "Não precisa ser incapacidade total. Exemplos comuns são a perda parcial de movimento ou de força de um membro, a amputação de um dedo e a redução da visão. O que se avalia é se o trabalho habitual passou a exigir mais esforço ou ficou limitado. Quem decide é a perícia médica do INSS, por isso os laudos precisam descrever a limitação, e não só o diagnóstico.",
          ],
        },
        {
          title: "Valor, início e fim do benefício",
          paragraphs: [
            "O valor é 50% do salário de benefício, que hoje é a média dos salários de contribuição desde julho de 1994. Como o auxílio-acidente não substitui o salário, ele pode ficar abaixo do salário mínimo e é pago junto com a remuneração de quem continua trabalhando.",
            "Pela lei, começa no dia seguinte ao fim do auxílio por incapacidade temporária ligado ao acidente e vai até a véspera da aposentadoria ou até a morte do segurado. Não se acumula com aposentadoria, mas se acumula com salário, com seguro-desemprego e com outros benefícios, como pensão por morte.",
          ],
        },
        {
          title: "Quem fica de fora",
          paragraphs: [
            "O contribuinte individual (autônomo, MEI, sócio que paga o próprio INSS) e o segurado facultativo não recebem auxílio-acidente, mesmo que contribuam em dia. A regra está no art. 18, § 1º, da Lei 8.213/1991. Para eles, a proteção em caso de acidente é o auxílio por incapacidade temporária, enquanto não puderem trabalhar, e a aposentadoria por incapacidade permanente, se for o caso.",
            "Na perda auditiva, a lei é mais exigente: além de provar a ligação com o trabalho, é preciso demonstrar que a perda reduziu a capacidade para a atividade que a pessoa exercia (art. 86, § 4º).",
          ],
        },
        {
          title: "Como pedir e como se preparar para a perícia",
          paragraphs: [
            "O pedido é feito pelo Meu INSS, no serviço Auxílio-Acidente, ou pelo telefone 135. Antes, reúna os documentos do acidente (CAT, boletim de ocorrência ou atendimento médico) e laudos atualizados. O laudo mais útil é o que explica, em palavras simples, o que a pessoa deixou de conseguir fazer no trabalho: carregar peso, ficar de pé, usar a mão, enxergar de longe.",
            "Na perícia, leve exames de imagem, receitas e relatórios de fisioterapia. Conte como era o trabalho antes do acidente e como é agora. Se a empresa mudou a função por causa da sequela, peça um documento que registre isso: é uma prova forte de redução da capacidade.",
          ],
        },
        {
          title: "Se o INSS negar",
          paragraphs: [
            "A carta de indeferimento explica o motivo. Se faltou documento, um novo pedido bem instruído pode resolver. Se o problema foi a conclusão da perícia, cabe recurso à Junta de Recursos em 30 dias ou ação judicial, em que o juiz nomeia um perito de sua confiança.",
            "Na Bahia, a ação de acidente do trabalho contra o INSS corre na Justiça Estadual; a de acidente de outra natureza, na Justiça Federal, que tem Juizado Especial Federal em Salvador e nas subseções do interior. As parcelas atrasadas podem ser cobradas dos últimos 5 anos.",
          ],
        },
      ],
    },
    relatedActions: ["auxilio-doenca", "aposentadoria"],
    updatedAt: "2026-11-07",
  },

  // ============================================================
  // 4. CONTA DE LUZ DA COELBA ALTA
  // Conferido em 07/11/2026: Resolução Normativa ANEEL 1.000/2021 (www2.aneel.gov.br/cedoc/
  // ren20211000.html), arts. 252 a 255, 323, 357, 408 e 421 e anexo sobre suspensão; canais
  // da Neoenergia Coelba em neoenergia.com/web/bahia/sua-casa/canais-de-atendimento.
  // ============================================================
  {
    id: "conta-de-luz-coelba-alta",
    nicheId: "consumidor",
    slug: "conta-de-luz-coelba-alta",
    title: "Conta de Luz da Coelba Alta ou com Erro: Como Contestar",
    metaTitle: "Conta de Luz da Coelba Alta: Como Contestar e Pedir Revisão",
    metaDescription:
      "Conta da Coelba alta? Como reclamar, prazos de resposta, verificação do medidor, devolução em dobro e quando a luz não pode ser cortada.",
    keywords: [
      "conta de luz coelba alta",
      "conta de luz coelba",
      "contestar conta de luz",
      "neoenergia coelba reclamação",
      "conta de luz alta o que fazer",
      "devolução em dobro conta de luz",
    ],
    excerpt:
      "Se a conta da Neoenergia Coelba veio muito acima do normal, reclame primeiro na distribuidora: ela tem 5 dias úteis para resolver (10 se precisar de visita). Veja como pedir a verificação do medidor, quando a devolução é em dobro e as regras para o corte.",
    content: {
      intro:
        "Em resumo: se a conta da Neoenergia Coelba veio muito acima do normal, compare a leitura impressa na fatura com o número do medidor e reclame na própria Coelba (telefone 116, WhatsApp (71) 3370-6350, aplicativo ou site), anotando o protocolo. A distribuidora tem até 5 dias úteis para resolver a reclamação, ou 10 dias úteis se precisar de visita técnica (art. 408 da Resolução ANEEL 1.000/2021). Se não resolver, recorra à Ouvidoria da Coelba (0800 071 7676) e depois à ANEEL, ao Procon ou ao Juizado Especial. O que foi cobrado a mais deve ser devolvido em dobro, com correção, salvo nas exceções da norma.",
      whatIs:
        "Conta alta pode ter várias causas: leitura errada ou estimada, defeito no medidor, consumo de outro imóvel lançado na sua unidade, acúmulo de leituras que não foram feitas, bandeira tarifária mais cara ou aumento real de consumo, como um aparelho com defeito ou uma fuga de corrente. As regras de faturamento, reclamação, inspeção do medidor e devolução estão na Resolução Normativa ANEEL 1.000/2021, e o Código de Defesa do Consumidor também vale para a relação com a distribuidora (art. 42, parágrafo único, sobre cobrança indevida).",
      whenYouHaveRight: [
        "Solução da reclamação em até 5 dias úteis, ou 10 dias úteis quando for preciso visita técnica, contados do protocolo (art. 408 da Resolução ANEEL 1.000/2021)",
        "Resposta da Ouvidoria em até 10 dias úteis, com a informação de que você pode levar o caso à ANEEL (art. 421)",
        "Devolução em dobro do que pagou a mais, corrigida pelo IPCA e com juros de 1% ao mês, salvo se a distribuidora provar que o erro foi seu ou de terceiro, nas condições da norma (art. 323)",
        "Inspeção do medidor e, se discordar do resultado, verificação pelo INMETRO pedida em até 15 dias do relatório (arts. 252 e 253)",
        "Troca do medidor com defeito em até 30 dias e conta refeita pelos critérios da ANEEL, como a média dos últimos 12 meses de medição normal (arts. 252 e 255)",
        "Aviso escrito de corte com pelo menos 15 dias de antecedência quando a conta está atrasada; corte só em dia útil, das 8h às 18h, nunca na sexta-feira ou na véspera de feriado",
        "Nenhum corte por conta vencida há mais de 90 dias, salvo impedimento justificado (art. 357)",
      ],
      documents: [
        "Faturas dos últimos 12 meses, para mostrar o consumo normal",
        "Foto do medidor com a leitura e a data",
        "Número da unidade consumidora, que aparece na fatura",
        "Protocolos dos atendimentos na Coelba e na Ouvidoria",
        "Comprovantes de pagamento das contas contestadas",
        "Termo de Ocorrência e Inspeção (TOI) e relatório, se houve inspeção ou troca de medidor",
      ],
      deadlines:
        "A Coelba tem 5 dias úteis para resolver a reclamação, ou 10 dias úteis se precisar de visita técnica. A Ouvidoria responde em até 10 dias úteis. Depois do relatório da inspeção do medidor, você tem 15 dias para pedir a verificação pelo INMETRO. Para a Justiça também há prazos: quanto antes a reclamação for feita, mais fácil provar o erro e recuperar o valor.",
      faq: [
        {
          question: "O que fazer quando a conta da Coelba vem muito alta?",
          answer:
            "Primeiro, confira a leitura impressa na fatura com o número do medidor e compare o consumo com os meses anteriores. Depois, reclame na Coelba pelo 116, pelo WhatsApp (71) 3370-6350, pelo aplicativo ou pelo site, peça a revisão da fatura e anote o protocolo. Se a resposta não resolver, vá à Ouvidoria (0800 071 7676) e, depois, à ANEEL, ao Procon ou ao Juizado Especial.",
        },
        {
          question: "Quanto tempo a Coelba tem para responder a reclamação?",
          answer:
            "Até 5 dias úteis, se não precisar de visita técnica, ou até 10 dias úteis, se precisar, contados do protocolo (art. 408 da Resolução ANEEL 1.000/2021). Se o prazo vencer ou você discordar da resposta, a Ouvidoria tem até 10 dias úteis para responder (art. 421).",
        },
        {
          question: "Tenho direito à devolução em dobro?",
          answer:
            "Em regra, sim. A resolução da ANEEL manda devolver em dobro o que foi faturado a mais, com correção pelo IPCA e juros de 1% ao mês, independentemente de culpa da distribuidora (art. 323). A devolução é simples só se a distribuidora provar que o erro foi causado por você ou, em condições específicas, por terceiro. O Código de Defesa do Consumidor tem regra parecida (art. 42, parágrafo único).",
        },
        {
          question: "Como pedir a verificação do medidor?",
          answer:
            "Peça à Coelba a inspeção do medidor. Ela deve entregar o Termo de Ocorrência e Inspeção e um relatório com o resultado. Se discordar, você tem 15 dias para pedir a verificação pelo INMETRO ou órgão delegado (art. 253). Você só paga a inspeção e a verificação se elas mostrarem que o medidor funciona bem (art. 254).",
        },
        {
          question: "A Coelba pode cobrar consumo de meses anteriores?",
          answer:
            "Se faturou a menos por erro dela, pode cobrar a diferença limitada aos últimos 3 ciclos de faturamento e deve parcelar em número de parcelas igual ao dobro do período do erro, se você quiser (art. 323, I e § 1º). Casos de irregularidade no medidor seguem outro procedimento, com regras próprias de apuração e defesa.",
        },
        {
          question: "A Coelba pode cortar a luz enquanto eu contesto a conta?",
          answer:
            "O corte por falta de pagamento exige aviso escrito com pelo menos 15 dias de antecedência e só pode ser feito em dia útil, das 8h às 18h, nunca na sexta-feira ou na véspera de feriado; e não pode acontecer por conta vencida há mais de 90 dias. Para não correr risco, pague as contas seguintes em dia e, se possível, a contestada também, pedindo a devolução do que for indevido. Corte irregular pode ser levado ao Juizado com pedido urgente de religação.",
        },
        {
          question: "Conta mais cara por bandeira tarifária é erro?",
          answer:
            "Não. As bandeiras (verde, amarela e vermelha) mudam o valor do kWh conforme o custo de geração de energia no mês, e a cor aparece na fatura. Se o consumo em kWh está normal e só o valor subiu, a causa provável é a bandeira ou o reajuste da tarifa.",
        },
        {
          question: "Onde reclamar se a Coelba não resolver?",
          answer:
            "Na Ouvidoria da Neoenergia Coelba (0800 071 7676, de segunda a sexta, das 8h às 18h, ou pelo portal da Ouvidoria), na ANEEL, no Procon da Bahia ou no consumidor.gov.br. Se nada resolver, o Juizado Especial Cível atende causas de até 20 salários mínimos sem advogado e de até 40 salários mínimos com advogado.",
        },
      ],
      sections: [
        {
          title: "Por que a conta pode ter vindo alta",
          paragraphs: [
            "Antes de reclamar, olhe a fatura com calma. Ela mostra a leitura anterior, a leitura atual, o número de dias do período e o consumo em kWh. Compare a leitura atual com o número que aparece no seu medidor: se o medidor marca menos do que a fatura, há erro de leitura. Veja também se a conta diz que o consumo foi estimado ou calculado pela média, o que acontece quando o leiturista não consegue ler o medidor.",
            "Compare o consumo com os últimos 12 meses. Um salto grande sem mudança na casa (mais gente, ar-condicionado novo, chuveiro elétrico mais usado) indica problema. Se o consumo em kWh está normal e só o valor subiu, a causa provável é a bandeira tarifária ou o reajuste anual. Aparelho com defeito e fuga de corrente também aumentam o consumo: um eletricista pode testar desligando o disjuntor geral e observando se o medidor continua girando.",
          ],
        },
        {
          title: "Como reclamar na Coelba",
          paragraphs: [
            "Os canais da Neoenergia Coelba são o telefone 116 (24 horas), o WhatsApp (71) 3370-6350 (24 horas), o aplicativo e a área do cliente no site. Peça a revisão da fatura, explique o motivo (leitura errada, consumo fora do padrão, conta de outro imóvel) e envie a foto do medidor. Anote o número do protocolo e a data.",
            "Pela Resolução ANEEL 1.000/2021, a reclamação deve ser resolvida em até 5 dias úteis, ou em até 10 dias úteis se houver visita técnica, contados do protocolo. Se a Coelba precisar de visita, deve avisar no registro da reclamação ou dentro dos 5 primeiros dias úteis.",
          ],
        },
        {
          title: "Inspeção e verificação do medidor",
          paragraphs: [
            "Se a suspeita é o medidor, peça a inspeção. A distribuidora emite o Termo de Ocorrência e Inspeção (TOI), envia um relatório com as variações encontradas e, se houver defeito, troca o equipamento em até 30 dias e refaz a conta. A correção segue a ordem prevista na norma: fator de correção apurado em laboratório, média dos últimos 12 meses de medição normal ou o consumo depois da troca.",
            "Se você discordar do relatório, tem 15 dias para pedir que o medidor seja verificado pelo INMETRO ou órgão delegado; os lacres não podem ser rompidos antes disso. Quem paga a inspeção e a verificação é o consumidor apenas quando ele as pediu e o medidor funcionava bem; nos demais casos, é a distribuidora (podendo cobrar só o frete pelos Correios).",
          ],
        },
        {
          title: "Devolução em dobro e cobrança de diferenças",
          paragraphs: [
            "Quando a distribuidora fatura a mais, deve devolver o valor até o segundo ciclo de faturamento depois de constatar o erro, em dobro, corrigido pelo IPCA e com juros de 1% ao mês (art. 323 da Resolução ANEEL 1.000/2021). A devolução é simples apenas se a distribuidora provar que o erro foi causado pelo consumidor ou, em condições específicas, por terceiro.",
            "O inverso também tem limite: se a distribuidora cobrou a menos por erro dela, só pode buscar a diferença dos últimos 3 ciclos, e deve oferecer parcelamento em número de parcelas igual ao dobro do período do erro. Casos de irregularidade no medidor seguem outro procedimento, com direito de defesa.",
          ],
        },
        {
          title: "Quando a luz não pode ser cortada",
          paragraphs: [
            "O corte por falta de pagamento precisa de aviso escrito e específico, entregue com comprovação ou impresso em destaque na fatura, com pelo menos 15 dias de antecedência. A suspensão só pode ser feita das 8h às 18h, em dia útil, e é proibida às sextas-feiras e nas vésperas de feriado.",
            "Passados 90 dias do vencimento da fatura não paga, a distribuidora não pode mais cortar por causa dela, salvo se provar que foi impedida por ordem judicial ou outro motivo justificável (art. 357). Pagar as contas seguintes em dia, enquanto a reclamação corre, reduz o risco de corte.",
          ],
        },
        {
          title: "Se a Coelba não resolver",
          paragraphs: [
            "O próximo passo é a Ouvidoria da Neoenergia Coelba (0800 071 7676, de segunda a sexta, das 8h às 18h, ou portal da Ouvidoria), que responde em até 10 dias úteis. Persistindo a discordância, o caso pode ir à ANEEL, ao Procon da Bahia ou ao consumidor.gov.br. Guarde todos os protocolos: eles mostram que você tentou resolver.",
            "Se nada funcionar, o Juizado Especial Cível julga causas de até 40 salários mínimos; até 20 salários mínimos não é obrigatório ter advogado. Na ação é possível pedir a revisão da conta, a devolução do que foi pago a mais e, em caso de corte indevido, a religação com urgência. Para conta de água alta da Embasa, o caminho é parecido: reclamação com protocolo, ouvidoria, Procon e Juizado.",
          ],
        },
      ],
    },
    relatedActions: ["cobranca-indevida"],
    updatedAt: "2026-11-07",
  },
];

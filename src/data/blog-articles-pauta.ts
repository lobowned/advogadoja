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
    title: "Conta de Luz da Coelba Alta, com Erro ou Corte de Energia: Como Contestar",
    metaTitle: "Conta da Coelba Alta ou Corte de Energia: Como Contestar",
    metaDescription:
      "Conta da Coelba alta ou ameaça de corte de energia? Como reclamar, prazos de resposta, verificação do medidor, devolução em dobro e regras do corte.",
    keywords: [
      "conta de luz coelba alta",
      "conta de luz coelba",
      "coelba corte de energia",
      "prazo para corte de energia coelba",
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
    updatedAt: "2026-11-08",
  },

  // ============================================================
  // 5. INQUÉRITO POLICIAL
  // Conferido em 07/11/2026 no Planalto (texto em vigor): CPP arts. 4º a 6º, 10, 14, 17, 20, 28
  // e 28-A; Lei 8.906/1994, art. 7º, XIV, XXI e §§ 10 e 11; Constituição, art. 5º, LXIII.
  // ============================================================
  {
    id: "inquerito-policial",
    nicheId: "penal",
    slug: "inquerito-policial",
    title: "Inquérito Policial: O Que É, Prazos e Direitos de Quem É Investigado",
    metaTitle: "Inquérito Policial: O Que É, Prazos e Direitos do Investigado",
    metaDescription:
      "Inquérito policial: como começa, prazos de 10 e 30 dias, direito ao silêncio, acesso do advogado, arquivamento e acordo de não persecução penal.",
    keywords: [
      "inquérito policial",
      "inquérito policial o que é",
      "prazo do inquérito policial",
      "intimado para depor na delegacia",
      "consulta inquérito policial",
      "arquivamento do inquérito",
      "acordo de não persecução penal",
    ],
    excerpt:
      "O inquérito policial é a investigação feita pela polícia antes de existir processo. Veja como começa, quanto tempo dura, quais são os direitos de quem é investigado e como ele termina.",
    content: {
      intro:
        "Em resumo: o inquérito policial é a investigação feita pela polícia (em regra, a Polícia Civil do estado) para apurar um possível crime antes de existir processo. Começa por boletim de ocorrência, prisão em flagrante, pedido do Ministério Público ou do juiz, ou por iniciativa do delegado. Deve terminar em 10 dias se o investigado estiver preso e em 30 dias se estiver solto, prazo que o juiz pode estender quando o caso é difícil. Quem é investigado tem direito de ficar calado, de ter advogado no depoimento e de o advogado examinar os autos. No fim, o delegado faz um relatório e o Ministério Público decide se acusa, se propõe acordo ou se arquiva.",
      whatIs:
        "É um procedimento conduzido pelo delegado de polícia para reunir provas sobre um fato que pode ser crime e sobre quem o praticou: depoimentos, perícias, documentos, imagens. Ainda não é processo e ninguém é condenado nele: o inquérito serve para o Ministério Público decidir se há elementos para acusar (arts. 4º e seguintes do Código de Processo Penal). Ser chamado à delegacia não significa ser acusado; a pessoa pode ser ouvida como testemunha, como vítima ou como investigada.",
      whenYouHaveRight: [
        "Ficar calado e não produzir prova contra si mesmo (art. 5º, LXIII, da Constituição)",
        "Ser acompanhado por advogado no depoimento ou interrogatório, sob pena de nulidade absoluta (art. 7º, XXI, da Lei 8.906/1994)",
        "Ter os autos examinados pelo advogado, que pode copiar peças, mesmo sem procuração; com procuração, se houver sigilo (art. 7º, XIV e § 10, e Súmula Vinculante 14)",
        "Pedir diligências ao delegado, como ouvir uma testemunha ou fazer uma perícia (art. 14 do Código de Processo Penal)",
        "Não ser levado à força para ser interrogado (STF, ADPFs 395 e 444)",
        "Ter indiciamento fundamentado pelo delegado, com análise técnico-jurídica do fato (art. 2º, § 6º, da Lei 12.830/2013)",
      ],
      documents: [
        "A intimação recebida, com data, hora e endereço da delegacia",
        "Documento de identidade com CPF",
        "Documentos que ajudem a explicar o fato: mensagens, recibos, contratos, fotos e vídeos",
        "Nome e contato de testemunhas",
        "Boletim de ocorrência, se você registrou algum sobre o mesmo fato",
        "Contato do advogado, para ir ao depoimento acompanhado",
      ],
      deadlines:
        "O inquérito deve terminar em 10 dias se o investigado estiver preso, contados da prisão, e em 30 dias se estiver solto (art. 10 do Código de Processo Penal). Com investigado solto e fato de difícil apuração, o juiz pode devolver os autos à polícia para novas diligências, no prazo que marcar (art. 10, § 3º). Quando o inquérito é arquivado, a vítima é comunicada e pode pedir revisão em 30 dias (art. 28, § 1º).",
      faq: [
        {
          question: "O que é inquérito policial?",
          answer:
            "É a investigação feita pela polícia, sob o comando do delegado, para apurar se um crime aconteceu e quem o cometeu. Não é processo e não condena ninguém: serve para o Ministério Público decidir se acusa, se propõe acordo ou se pede o arquivamento.",
        },
        {
          question: "Fui intimado para depor na delegacia. O que fazer?",
          answer:
            "Veja na intimação se você foi chamado como testemunha, vítima ou investigado. Testemunha tem o dever de comparecer e de dizer a verdade. Investigado tem o direito de ficar calado e de ir com advogado, que pode examinar os autos antes do depoimento. Antes de entregar documentos ou dar sua versão, converse com o advogado.",
        },
        {
          question: "Quanto tempo dura um inquérito policial?",
          answer:
            "A lei fixa 10 dias para investigado preso e 30 dias para investigado solto (art. 10 do CPP). Com investigado solto, o prazo costuma ser estendido pelo juiz quando ainda há diligências a fazer, e há inquéritos que levam meses ou anos.",
        },
        {
          question: "Como consultar um inquérito policial?",
          answer:
            "Pelo advogado: ele pode examinar os autos na delegacia ou no sistema eletrônico, mesmo sem procuração, e copiar peças; se o inquérito tiver sigilo, precisa de procuração (art. 7º, XIV e § 10, da Lei 8.906/1994). Diligências em andamento e ainda não documentadas podem ter o acesso limitado (§ 11).",
        },
        {
          question: "Ser indiciado é o mesmo que ser condenado?",
          answer:
            "Não. O indiciamento é o ato fundamentado em que o delegado aponta quem, na visão dele, é o provável autor do fato. Quem decide se haverá acusação é o Ministério Público, e só o juiz, depois de um processo com direito de defesa, pode condenar.",
        },
        {
          question: "O delegado pode arquivar o inquérito?",
          answer:
            "Não (art. 17 do CPP). O arquivamento é decidido pelo Ministério Público, que comunica a vítima, o investigado e a polícia, com controle da própria instituição e do Judiciário nos termos fixados pelo STF (ADI 6.298). A vítima pode pedir revisão em 30 dias.",
        },
        {
          question: "O que é o acordo de não persecução penal?",
          answer:
            "É um acordo que o Ministério Público pode propor, em vez de denunciar, quando o crime não teve violência ou grave ameaça e a pena mínima é inferior a 4 anos, desde que o investigado confesse formalmente (art. 28-A do CPP). Ele cumpre condições, como reparar o dano ou prestar serviços à comunidade, e, cumpridas, a punibilidade é extinta. Não cabe, entre outros casos, para reincidente nem em violência doméstica ou contra a mulher.",
        },
        {
          question: "Preciso de advogado no inquérito?",
          answer:
            "A lei não obriga, mas o investigado tem direito a ser assistido, e o interrogatório feito com o advogado impedido de participar é nulo. O acompanhamento desde o início ajuda a pedir diligências, a preparar o depoimento e a avaliar um eventual acordo. Quem não pode pagar pode procurar a Defensoria Pública.",
        },
        {
          question: "A vítima pode acompanhar o inquérito?",
          answer:
            "Sim. A vítima pode pedir diligências ao delegado (art. 14 do CPP), ser assistida por advogado e é comunicada se o Ministério Público arquivar o caso, podendo pedir revisão em 30 dias (art. 28, § 1º).",
        },
      ],
      sections: [
        {
          title: "Como o inquérito começa",
          paragraphs: [
            "Nos crimes de ação pública, o inquérito começa por iniciativa do delegado, por requisição do juiz ou do Ministério Público ou a pedido da vítima (art. 5º do Código de Processo Penal). Na prática, o caminho mais comum é o boletim de ocorrência ou a prisão em flagrante. Nos crimes em que a lei exige representação da vítima, como, em regra, a ameaça, a investigação só começa se ela manifestar essa vontade.",
            "Crimes de menor potencial ofensivo, com pena máxima de até 2 anos, normalmente não geram inquérito: a polícia faz um termo circunstanciado e o caso vai direto ao Juizado Especial Criminal.",
          ],
        },
        {
          title: "O que acontece durante a investigação",
          paragraphs: [
            "O delegado ouve a vítima, as testemunhas e o investigado, pede perícias, colhe documentos e imagens e pode representar ao juiz por medidas como busca e apreensão, quebra de sigilo bancário ou telefônico e prisão preventiva. Essas medidas dependem de ordem judicial: a polícia não pode, por conta própria, entrar numa casa fora do flagrante nem acessar dados protegidos.",
            "O inquérito tem o sigilo necessário para a investigação funcionar (art. 20), mas esse sigilo não vale contra o advogado do investigado quanto às provas já documentadas (Súmula Vinculante 14).",
          ],
        },
        {
          title: "Os direitos de quem é investigado",
          paragraphs: [
            "O investigado pode ficar calado, e o silêncio não pode ser usado contra ele. Pode ser acompanhado por advogado no interrogatório, e impedir essa assistência torna o ato nulo. O advogado pode examinar os autos, copiar peças, apresentar razões e quesitos e pedir diligências. Desde 2018, por decisão do STF, o investigado não pode ser levado à força para ser interrogado.",
            "Esses direitos valem desde o primeiro contato com a polícia. Por isso, quem recebe intimação como investigado deve procurar um advogado antes do depoimento, e não depois.",
          ],
        },
        {
          title: "Como o inquérito termina",
          paragraphs: [
            "Concluída a investigação, o delegado faz um relatório e envia os autos ao Judiciário e ao Ministério Público (art. 10, § 1º). O Ministério Público pode oferecer denúncia, que abre o processo; propor acordo de não persecução penal, quando cabível; pedir mais diligências; ou arquivar o caso, comunicando a vítima, o investigado e a polícia.",
            "O delegado não pode arquivar o inquérito por conta própria. Arquivado o caso, ele pode ser reaberto se surgirem provas novas.",
          ],
        },
        {
          title: "Inquérito na Bahia",
          paragraphs: [
            "Na Bahia, a maior parte dos inquéritos é conduzida pela Polícia Civil, nas delegacias territoriais e especializadas; crimes federais ficam com a Polícia Federal. Concluído, o inquérito segue para a comarca do Tribunal de Justiça da Bahia onde o fato aconteceu, ou para a Justiça Federal, conforme o caso.",
            "Quem é investigado e não tem condições de pagar advogado pode procurar a Defensoria Pública. A vítima também pode ter advogado para acompanhar a investigação e pedir diligências.",
          ],
        },
      ],
    },
    relatedActions: ["prisao-flagrante", "habeas-corpus"],
    updatedAt: "2026-11-07",
  },

  // ============================================================
  // 7. LESÃO CORPORAL
  // Conferido em 07/11/2026 no Planalto (texto em vigor, sem trechos revogados): Código Penal
  // art. 129 (com as Leis 14.994/2024, 15.159/2025, 15.358/2026 e 15.455/2026); CPP arts. 25,
  // 38, 158 e 168. Lei 9.099/1995 art. 88 e Súmula 542 do STJ.
  // ============================================================
  {
    id: "lesao-corporal",
    nicheId: "penal",
    slug: "lesao-corporal",
    title: "Lesão Corporal: Leve, Grave e Gravíssima, Penas e Como Funciona o Processo",
    metaTitle: "Lesão Corporal: Leve, Grave, Gravíssima e Penas (Art. 129)",
    metaDescription:
      "Lesão corporal (art. 129 do CP): leve, grave e gravíssima, penas atualizadas, violência doméstica, exame de corpo de delito e prazo de representação.",
    keywords: [
      "lesão corporal",
      "lesão corporal leve",
      "lesão corporal grave",
      "lesão corporal gravíssima",
      "lesão corporal dolosa",
      "art 129 código penal",
      "lesão corporal pena",
    ],
    excerpt:
      "O crime de lesão corporal (art. 129 do Código Penal) vai da lesão leve, com detenção de 3 meses a 1 ano, à gravíssima, com reclusão de 2 a 8 anos. Veja as diferenças, as regras de violência doméstica e como corre o processo.",
    content: {
      intro:
        "Em resumo: lesão corporal é ofender a integridade física ou a saúde de alguém (art. 129 do Código Penal). A lesão leve tem pena de detenção de 3 meses a 1 ano e, em regra, só vira processo se a vítima representar em até 6 meses. A grave, como afastamento das atividades por mais de 30 dias ou perigo de vida, tem pena de reclusão de 1 a 5 anos; a gravíssima, como deformidade permanente ou perda de um sentido, de 2 a 8 anos; e a seguida de morte, de 4 a 12 anos. Na violência doméstica e na lesão contra a mulher por razões de gênero, a pena é de reclusão de 2 a 5 anos. O exame de corpo de delito é a prova central.",
      whatIs:
        "É o crime de quem machuca outra pessoa ou prejudica a saúde dela, de propósito (lesão dolosa) ou por descuido (lesão culposa). A classificação depende do resultado: leve, grave, gravíssima ou seguida de morte. Quem descreve a lesão e suas consequências é o laudo do exame de corpo de delito, feito pelo Instituto Médico Legal, indispensável quando há vestígios (art. 158 do Código de Processo Penal).",
      whenYouHaveRight: [
        "A vítima pode registrar boletim de ocorrência e fazer o exame de corpo de delito, que tem prioridade em violência doméstica contra a mulher e contra criança, adolescente, idoso ou pessoa com deficiência (art. 158 do CPP)",
        "Na lesão leve e na culposa, a vítima decide se quer o processo e tem 6 meses, contados de quando soube quem é o autor, para representar (art. 88 da Lei 9.099/1995 e art. 38 do CPP)",
        "Na violência doméstica contra a mulher, o processo segue mesmo sem representação (Súmula 542 do STJ), e a vítima pode pedir medidas protetivas (Lei 11.340/2006)",
        "A vítima pode pedir reparação dos danos, como despesas médicas, dias sem trabalhar e dano moral",
        "O acusado tem direito de ficar calado, de ter advogado e de pedir exame complementar quando discordar da classificação da lesão (art. 168 do CPP)",
        "Na lesão leve fora da violência doméstica, cabem acordo com a vítima e transação penal no Juizado Especial Criminal (Lei 9.099/1995)",
      ],
      documents: [
        "Boletim de ocorrência",
        "Laudo do exame de corpo de delito",
        "Relatórios médicos, receitas, exames e atestados de afastamento",
        "Fotos das lesões, com data",
        "Nome e contato de testemunhas e vídeos de câmeras, se houver",
        "Comprovantes de despesas e dos dias sem trabalhar",
      ],
      deadlines:
        "Na lesão leve e na culposa, a vítima tem 6 meses, contados de quando soube quem é o autor, para representar; depois disso perde o direito (art. 38 do CPP). Para classificar a lesão como grave por afastamento de mais de 30 dias, o exame complementar deve ser feito logo que se passarem 30 dias do fato (art. 168, § 2º, do CPP). Na lesão grave, na gravíssima e na lesão contra a mulher em violência doméstica, não há prazo de representação: o processo não depende da vontade da vítima.",
      faq: [
        {
          question: "Qual a diferença entre lesão leve, grave e gravíssima?",
          answer:
            "Leve é a que não se encaixa nas outras. Grave é a que causa afastamento das ocupações habituais por mais de 30 dias, perigo de vida, debilidade permanente de membro, sentido ou função, ou aceleração de parto (art. 129, § 1º). Gravíssima é a que causa incapacidade permanente para o trabalho, doença incurável, perda ou inutilização de membro, sentido ou função, deformidade permanente ou aborto (§ 2º).",
        },
        {
          question: "Qual a pena de lesão corporal?",
          answer:
            "Leve: detenção de 3 meses a 1 ano. Grave: reclusão de 1 a 5 anos. Gravíssima: reclusão de 2 a 8 anos. Seguida de morte: reclusão de 4 a 12 anos. Culposa: detenção de 2 meses a 1 ano. Em violência doméstica (§ 9º) e contra a mulher por razões de gênero (§ 13): reclusão de 2 a 5 anos. Há aumentos de pena em situações específicas previstas no art. 129.",
        },
        {
          question: "Lesão corporal leve dá cadeia?",
          answer:
            "A pena máxima é de 1 ano de detenção, então a lesão leve, fora da violência doméstica, é crime de menor potencial ofensivo e vai ao Juizado Especial Criminal, onde cabem acordo com a vítima e transação penal. Na violência doméstica contra a mulher essas medidas não se aplicam (art. 41 da Lei 11.340/2006) e a pena é maior.",
        },
        {
          question: "A vítima pode desistir do processo?",
          answer:
            "Na lesão leve e na culposa fora da violência doméstica, a vítima pode retirar a representação até o Ministério Público oferecer a denúncia (art. 25 do CPP). Na lesão contra a mulher em violência doméstica, o processo é público incondicionado e não depende da vontade dela (Súmula 542 do STJ).",
        },
        {
          question: "O que é o exame de corpo de delito e como fazer?",
          answer:
            "É a perícia que descreve as lesões e suas consequências, feita pelo Instituto Médico Legal (na Bahia, ligado ao Departamento de Polícia Técnica). A delegacia encaminha a vítima depois do boletim de ocorrência. Quanto antes for feito, melhor, porque as marcas desaparecem; se faltar o exame, outras provas, como relatórios médicos e testemunhas, podem ajudar.",
        },
        {
          question: "Lesão corporal no trânsito é crime?",
          answer:
            "Quando é culposa e acontece na direção de veículo, segue o Código de Trânsito (art. 303), com pena de detenção e suspensão ou proibição de dirigir. A lesão causada de propósito com o carro continua sendo o crime do art. 129 do Código Penal.",
        },
        {
          question: "Numa briga em que os dois se machucaram, os dois respondem?",
          answer:
            "Podem responder, cada um como autor da lesão que causou. Se as lesões forem recíprocas e não graves, o juiz pode trocar a detenção por multa (art. 129, § 5º). E quem apenas se defendeu de uma agressão injusta, usando os meios necessários com moderação, age em legítima defesa e não comete crime (art. 25 do Código Penal).",
        },
        {
          question: "A vítima pode pedir indenização?",
          answer:
            "Sim. O juiz criminal pode fixar um valor mínimo de reparação na sentença, e a vítima pode cobrar na Justiça cível as despesas de tratamento, os dias sem trabalhar e o dano moral. Guarde comprovantes de gastos e atestados.",
        },
      ],
      sections: [
        {
          title: "Lesão corporal leve",
          paragraphs: [
            "É a forma mais comum: hematomas, arranhões, cortes e escoriações que não deixam as consequências mais sérias previstas nos parágrafos do art. 129. A pena é de detenção de 3 meses a 1 ano. Fora da violência doméstica, é crime de menor potencial ofensivo: a polícia faz um termo circunstanciado, e o caso vai ao Juizado Especial Criminal.",
            "Ali a vítima decide se quer seguir: precisa representar em até 6 meses depois de saber quem é o autor. Há uma audiência de conciliação, em que se pode fazer acordo de reparação dos danos; não havendo acordo, o Ministério Público pode propor transação penal, como prestação de serviços ou pagamento de valor a entidade social, sem reconhecimento de culpa.",
          ],
        },
        {
          title: "Lesão grave e gravíssima",
          paragraphs: [
            "A lesão é grave quando causa afastamento das ocupações habituais por mais de 30 dias, perigo de vida, debilidade permanente de membro, sentido ou função ou aceleração do parto; a pena é de reclusão de 1 a 5 anos. É gravíssima quando causa incapacidade permanente para o trabalho, doença incurável, perda ou inutilização de membro, sentido ou função, deformidade permanente ou aborto; a pena é de reclusão de 2 a 8 anos.",
            "Para provar o afastamento de mais de 30 dias, faz-se um exame complementar logo depois desse prazo; se ele faltar, testemunhas podem suprir (art. 168 do CPP). Nesses casos o processo não depende de representação da vítima. A lei também aumenta a pena quando a vítima é policial ou outro agente público no exercício da função, ou quando a lesão acontece dentro de escola (art. 129, § 12, de 2025).",
          ],
        },
        {
          title: "Lesão seguida de morte e lesão culposa",
          paragraphs: [
            "Quando a agressão causa a morte sem que o autor quisesse esse resultado ou assumisse o risco de produzi-lo, o crime é de lesão corporal seguida de morte, com reclusão de 4 a 12 anos. Se havia intenção de matar, o caso é de homicídio.",
            "A lesão culposa, causada por descuido, imprudência ou imperícia, tem pena de detenção de 2 meses a 1 ano e também depende de representação. Na direção de veículo, aplica-se o Código de Trânsito (art. 303).",
          ],
        },
        {
          title: "Violência doméstica e lesão contra a mulher",
          paragraphs: [
            "Se a lesão é praticada contra ascendente, descendente, irmão, cônjuge, companheiro ou pessoa com quem o autor conviva ou tenha convivido, ou aproveitando relações domésticas, de coabitação ou de hospitalidade, a pena é de reclusão de 2 a 5 anos (§ 9º). A mesma pena vale para a lesão contra a mulher por razões da condição do sexo feminino (§ 13). Nos casos graves, gravíssimos ou com morte nesse contexto, a pena aumenta em um terço (§ 10).",
            "Na violência doméstica contra a mulher, não se aplicam o Juizado Especial Criminal, o acordo nem a transação penal (art. 41 da Lei 11.340/2006), e o processo não depende de representação. A vítima pode pedir medidas protetivas na delegacia, que as encaminha ao juiz.",
          ],
        },
        {
          title: "O que fazer se você foi vítima",
          paragraphs: [
            "Procure atendimento médico e registre boletim de ocorrência; a delegacia encaminha ao exame de corpo de delito. Fotografe as lesões com data, guarde receitas, atestados e comprovantes de gastos e anote nomes de testemunhas. Se for o caso de lesão leve fora da violência doméstica, diga na delegacia que quer representar contra o autor, ou faça isso depois, dentro de 6 meses.",
            "A reparação dos danos pode ser pedida no próprio processo criminal e em ação cível. Quem não pode pagar advogado pode procurar a Defensoria Pública; em violência doméstica, a vítima também tem atendimento especializado.",
          ],
        },
        {
          title: "Se você foi acusado",
          paragraphs: [
            "Não discuta o caso com a vítima nem com testemunhas e não apague mensagens. Você tem direito de ficar calado e de ser acompanhado por advogado no depoimento. O advogado avalia o laudo, pode pedir exame complementar quando a classificação estiver errada e verifica se houve legítima defesa ou lesões recíprocas.",
            "Na lesão leve fora da violência doméstica, o acordo com a vítima e a transação penal podem encerrar o caso sem processo. Em violência doméstica, o cumprimento de eventuais medidas protetivas é obrigatório: descumpri-las é crime próprio.",
          ],
        },
      ],
    },
    relatedActions: ["violencia-domestica", "prisao-flagrante"],
    updatedAt: "2026-11-07",
  },

  // ============================================================
  // 8. CRIME DE AMEAÇA
  // Conferido em 07/11/2026 no Planalto (texto em vigor): Código Penal arts. 147 (com a Lei
  // 14.994/2024), 147-A e 147-B; Lei 11.340/2006 arts. 16, 19 §§ 4º a 6º, 24-A e 41; CPP art. 38.
  // ============================================================
  {
    id: "crime-de-ameaca",
    nicheId: "penal",
    slug: "crime-de-ameaca",
    title: "Crime de Ameaça: Pena, Representação e Medida Protetiva",
    metaTitle: "Crime de Ameaça (Art. 147): Pena, Representação e Proteção",
    metaDescription:
      "Crime de ameaça (art. 147 do Código Penal): pena, quando depende de representação, ameaça contra a mulher, ameaça por WhatsApp, provas e medida protetiva.",
    keywords: [
      "crime de ameaça",
      "ameaça pena",
      "crime de ameaça artigo 147",
      "ameaça ação penal condicionada",
      "ameaça contra mulher",
      "ameaça pelo whatsapp",
      "medida protetiva",
    ],
    excerpt:
      "Ameaçar alguém de mal injusto e grave é crime (art. 147 do Código Penal), com pena de detenção de 1 a 6 meses ou multa. Contra a mulher, por razões de gênero, a pena dobra e o processo não depende de representação.",
    content: {
      intro:
        "Em resumo: ameaçar alguém, por palavra, mensagem, gesto ou qualquer outro meio, de causar mal injusto e grave é crime (art. 147 do Código Penal), com pena de detenção de 1 a 6 meses ou multa. Em regra, o caso só vira processo se a vítima representar, em até 6 meses depois de saber quem é o autor. Desde 2024, quando a ameaça é contra a mulher por razões da condição do sexo feminino, a pena é aplicada em dobro e o processo não depende de representação. Em violência doméstica, a vítima pode pedir medida protetiva de urgência mesmo sem boletim de ocorrência.",
      whatIs:
        "Ameaça é prometer a alguém um mal injusto e grave, capaz de causar medo real: matar, agredir, destruir bens, expor a intimidade. Pode ser feita pessoalmente, por telefone, por mensagem de WhatsApp, em rede social, por carta ou com gestos. Não é preciso que o autor cumpra a promessa: o crime está em intimidar. Uma discussão acalorada, sem promessa séria de mal, nem sempre configura o crime; o contexto é que define.",
      whenYouHaveRight: [
        "Registrar boletim de ocorrência na delegacia; em violência contra a mulher, também nas delegacias especializadas de atendimento à mulher",
        "Representar contra o autor em até 6 meses depois de saber quem ele é (art. 147, § 2º, do Código Penal e art. 38 do CPP)",
        "Na ameaça contra a mulher por razões de gênero, ver o caso seguir mesmo sem representação, com pena em dobro (art. 147, §§ 1º e 2º)",
        "Pedir medidas protetivas de urgência em violência doméstica, mesmo sem boletim de ocorrência ou inquérito (art. 19, § 5º, da Lei 11.340/2006)",
        "Em violência doméstica, a renúncia à representação nos crimes que dependem dela só vale perante o juiz, em audiência própria, antes do recebimento da denúncia (art. 16 da Lei 11.340/2006)",
        "Se a ameaça se repete e vira perseguição, o caso pode ser o crime de perseguição (art. 147-A), com pena maior",
      ],
      documents: [
        "Prints das mensagens, com data, hora e o número ou perfil de quem enviou",
        "Áudios, vídeos e e-mails originais, sem apagar do celular",
        "Ata notarial das mensagens, feita em cartório de notas, quando o caso é sério",
        "Nome e contato de testemunhas",
        "Boletim de ocorrência e protocolo",
        "Registros de ameaças anteriores, se houver",
      ],
      deadlines:
        "Em regra, a vítima tem 6 meses, contados de quando soube quem é o autor, para representar (art. 38 do CPP); depois disso perde o direito. Na ameaça contra a mulher por razões de gênero não há esse prazo, porque o processo não depende de representação. Medidas protetivas de urgência podem ser pedidas enquanto houver risco e valem enquanto ele persistir (art. 19, § 6º, da Lei 11.340/2006).",
      faq: [
        {
          question: "Qual a pena para o crime de ameaça?",
          answer:
            "Detenção de 1 a 6 meses ou multa (art. 147 do Código Penal). Se a ameaça é contra a mulher por razões da condição do sexo feminino, a pena é aplicada em dobro (§ 1º, incluído pela Lei 14.994/2024).",
        },
        {
          question: "Ameaça pelo WhatsApp é crime?",
          answer:
            "Sim. A lei fala em ameaça por palavra, escrito, gesto ou qualquer outro meio simbólico, o que inclui mensagens, áudios e publicações em rede social. Guarde as mensagens originais, faça prints com data e número e, se o caso for sério, registre o conteúdo em ata notarial no cartório.",
        },
        {
          question: "O crime de ameaça precisa de representação?",
          answer:
            "Em regra, sim: o processo só começa se a vítima representar, em até 6 meses depois de saber quem é o autor (art. 147, § 2º). A exceção é a ameaça contra a mulher por razões de gênero, em que o processo segue mesmo sem a vontade dela.",
        },
        {
          question: "A vítima pode retirar a queixa?",
          answer:
            "Na ameaça comum, a vítima pode retirar a representação até o Ministério Público oferecer a denúncia (art. 25 do CPP). Na ameaça contra a mulher por razões de gênero, o processo não depende dela. Nos outros crimes que dependem de representação em violência doméstica, a renúncia só vale perante o juiz, em audiência própria (art. 16 da Lei 11.340/2006).",
        },
        {
          question: "Ameaça dá prisão?",
          answer:
            "A pena é baixa e, fora da violência doméstica, o caso vai ao Juizado Especial Criminal, onde cabem acordo com a vítima e transação penal. Em violência doméstica contra a mulher, o Juizado não se aplica (art. 41 da Lei 11.340/2006), e descumprir medida protetiva é crime próprio (art. 24-A), que pode levar à prisão.",
        },
        {
          question: "Como pedir medida protetiva?",
          answer:
            "Na delegacia, na Defensoria Pública, no Ministério Público ou diretamente ao juiz. Em violência doméstica, as medidas são concedidas a partir do relato da vítima, independentemente de boletim de ocorrência, inquérito ou processo, e valem enquanto houver risco (art. 19, §§ 4º a 6º, da Lei 11.340/2006). Podem incluir afastamento do lar e proibição de contato e de aproximação.",
        },
        {
          question: "Ameaça e perseguição são a mesma coisa?",
          answer:
            "Não. A perseguição (art. 147-A) é seguir alguém de forma reiterada, por qualquer meio, ameaçando sua integridade, restringindo sua locomoção ou invadindo sua privacidade, com pena de reclusão de 6 meses a 2 anos e multa. Contra a mulher há ainda o crime de violência psicológica (art. 147-B), com a mesma pena.",
        },
        {
          question: "Fui acusado de ameaça. O que fazer?",
          answer:
            "Não procure a vítima, não apague mensagens e não responda provocações. Você tem direito de ficar calado e de ser acompanhado por advogado no depoimento. O contexto das mensagens importa, e fora da violência doméstica o acordo e a transação penal podem encerrar o caso. Se houver medida protetiva, cumpra rigorosamente: descumpri-la é crime.",
        },
      ],
      sections: [
        {
          title: "O que é ameaça e o que não é",
          paragraphs: [
            "O crime exige promessa de mal injusto e grave, feita de forma séria o bastante para intimidar: \"vou te matar\", \"vou quebrar seu carro\", \"vou espalhar suas fotos\". O mal precisa ser injusto: avisar que vai cobrar uma dívida na Justiça ou que vai registrar boletim de ocorrência não é ameaça, porque é um direito.",
            "Não é preciso que o autor tenha intenção de cumprir nem que cumpra; basta a intimidação. Por outro lado, frases ditas no calor de uma briga, sem seriedade, podem não configurar o crime. O juiz avalia o contexto, o histórico entre as pessoas e o efeito na vítima.",
          ],
        },
        {
          title: "Pena, representação e Juizado",
          paragraphs: [
            "A pena é de detenção de 1 a 6 meses ou multa. Em regra, o processo depende de representação da vítima, que tem 6 meses, contados de quando soube quem é o autor, para manifestar que quer o processo. Fora da violência doméstica, é crime de menor potencial ofensivo: a polícia faz um termo circunstanciado e o caso vai ao Juizado Especial Criminal.",
            "No Juizado há uma audiência de conciliação, em que se pode fazer acordo; sem acordo, o Ministério Público pode propor transação penal. Se nada disso resolver, segue o processo.",
          ],
        },
        {
          title: "Ameaça contra a mulher e violência doméstica",
          paragraphs: [
            "Desde a Lei 14.994/2024, a ameaça contra a mulher por razões da condição do sexo feminino tem pena aplicada em dobro, e o processo não depende de representação (art. 147, §§ 1º e 2º). Em violência doméstica e familiar contra a mulher, não se aplicam o Juizado Especial Criminal, o acordo nem a transação penal (art. 41 da Lei 11.340/2006).",
            "A vítima pode pedir medidas protetivas de urgência, que o juiz concede a partir do relato dela, sem depender de boletim de ocorrência, inquérito ou processo, e que valem enquanto houver risco. Descumprir a medida é crime próprio (art. 24-A). Na Bahia, além das delegacias comuns, há delegacias especializadas de atendimento à mulher em Salvador e em várias cidades do interior.",
          ],
        },
        {
          title: "Como provar a ameaça",
          paragraphs: [
            "Mensagens e áudios são as provas mais comuns. Não apague nada do celular, faça prints que mostrem data, hora e o número ou perfil de quem enviou, e guarde os arquivos originais. Em casos sérios, a ata notarial, feita em cartório de notas, registra o conteúdo com fé pública e evita discussões sobre montagem.",
            "Testemunhas, gravações de câmeras e o histórico de ameaças anteriores também ajudam. Não responda com outra ameaça: além de enfraquecer o seu relato, pode transformar você em autor de crime.",
          ],
        },
        {
          title: "Perseguição e violência psicológica",
          paragraphs: [
            "Quando a conduta se repete, com mensagens insistentes, vigilância, aparições no trabalho ou em casa, o caso pode ser o crime de perseguição (art. 147-A), com pena de reclusão de 6 meses a 2 anos e multa, aumentada de metade contra criança, adolescente, idoso ou mulher por razões de gênero, ou com arma.",
            "Contra a mulher, causar dano emocional por meio de ameaça, humilhação, manipulação, isolamento, chantagem ou controle de suas decisões é o crime de violência psicológica (art. 147-B), com a mesma pena, se a conduta não for crime mais grave.",
          ],
        },
      ],
    },
    relatedActions: ["violencia-domestica"],
    updatedAt: "2026-11-07",
  },

  // ============================================================
  // 10. PERÍCIA DO INSS
  // Conferido em 07/11/2026: serviço "Solicitar Auxílio por Incapacidade Temporária" no gov.br
  // (atualizado em 26/10/2026); Lei 8.213/1991, arts. 59, 60 §§ 3º, 8º e 9º e 101 (texto em vigor
  // no Planalto, com a Lei 15.157/2025). Revisto em 08/11/2026: análise só por documentos limitada a
  // 30 dias pela Lei 15.265/2025 (art. 60, §§ 11-F a 11-I), ampliada por ato do Executivo para até
  // 90 dias no novo Atestmed (notícia do Ministério da Previdência de 22/04/2026, atualizada em 26/10/2026).
  // ============================================================
  {
    id: "pericia-inss",
    nicheId: "previdenciario",
    slug: "pericia-inss",
    title: "Perícia do INSS: Como Funciona, o Que Levar e o Que Fazer se Negarem",
    metaTitle: "Perícia do INSS: Como Funciona, o Que Levar e Se Negarem",
    metaDescription:
      "Perícia do INSS: como pedir, o que o atestado precisa ter, análise só por documentos (atestados de até 90 dias), o que levar, prorrogação e se negarem.",
    keywords: [
      "perícia inss",
      "perícia inss como funciona",
      "o que levar na perícia do inss",
      "perícia inss negada",
      "atestmed",
      "prorrogação auxílio doença",
      "perícia médica inss",
    ],
    excerpt:
      "A perícia médica decide se a pessoa está incapaz para o trabalho. Veja como pedir pelo Meu INSS, o que o atestado precisa ter, quando o INSS decide só com documentos, o que levar e o que fazer se o benefício for negado.",
    content: {
      intro:
        "Em resumo: a perícia médica do INSS avalia se a doença ou lesão deixa a pessoa incapaz para o trabalho ou para a atividade habitual. O pedido é feito todo pela internet, no Meu INSS (\"Benefício por incapacidade\" e depois \"Pedir novo benefício\"), ou pelo telefone 135. O atestado ou laudo precisa ter nome completo, data, período de repouso estimado, assinatura do profissional com registro no conselho e a doença ou o CID; em afastamentos de até 180 dias, o INSS pode decidir só com esse documento ou chamar para perícia. O empregado recebe da empresa os primeiros 15 dias. Se o benefício for negado, dá para recorrer em 30 dias, fazer novo pedido com novos documentos ou ir ao Juizado Especial Federal.",
      whatIs:
        "É o exame feito por um perito médico federal para verificar se existe incapacidade e por quanto tempo. Ela é exigida no auxílio por incapacidade temporária (o antigo auxílio-doença), na aposentadoria por incapacidade permanente e no auxílio-acidente; no BPC/LOAS da pessoa com deficiência há avaliação médica e social. A perícia não avalia só o diagnóstico: avalia o que a doença impede você de fazer no seu trabalho.",
      whenYouHaveRight: [
        "Incapacidade para o trabalho ou para a atividade habitual por mais de 15 dias consecutivos (art. 59 da Lei 8.213/1991)",
        "Carência de 12 contribuições, em regra; não se exige em acidente de qualquer natureza nem em doenças graves previstas em lei, como câncer e cardiopatia grave",
        "Doença que já existia antes de começar a contribuir só dá direito se a incapacidade vier do agravamento ou da progressão dela (art. 59, § 1º)",
        "Empregado: os primeiros 15 dias de afastamento são pagos pela empresa (art. 60, § 3º)",
        "Pedir prorrogação pelo Meu INSS se continuar incapaz quando o benefício estiver perto de acabar (art. 60, § 9º)",
        "Recorrer da decisão em 30 dias ou ir à Justiça, onde o juiz nomeia um perito",
      ],
      documents: [
        "Documento de identidade com foto (RG, CIN, CNH ou carteira de trabalho) e CPF",
        "Atestado ou laudo legível, sem rasuras, com nome completo, data, período de repouso estimado, assinatura e registro do profissional (CRM, CRO ou RMS) e a doença ou o CID",
        "Exames, receitas e relatórios de tratamento, como fisioterapia, internações e cirurgias",
        "Carteira de trabalho ou documentos que mostrem qual é o seu trabalho",
        "Comunicação de Acidente de Trabalho (CAT), se a doença ou lesão for ligada ao trabalho",
        "Procuração ou termo de representação, se outra pessoa fizer o pedido",
      ],
      deadlines:
        "Segundo o gov.br, a análise do pedido leva até 45 dias. Se o benefício for concedido sem data de término, ele acaba em 120 dias, salvo pedido de prorrogação (art. 60, § 9º, da Lei 8.213/1991). Contra a decisão, o recurso à Junta de Recursos tem prazo de 30 dias.",
      faq: [
        {
          question: "Como funciona a perícia do INSS?",
          answer:
            "Você pede o benefício no Meu INSS e envia o atestado ou laudo. Quando o atestado recomenda afastamento de até 90 dias (limite do novo Atestmed, em vigor desde março de 2026), o INSS pode conceder só com a análise do documento; se ele não bastar, você é chamado para a perícia, em que um perito médico federal examina você e os documentos e decide se há incapacidade e por quanto tempo. O resultado aparece no Meu INSS, em \"Consultar pedidos\".",
        },
        {
          question: "O que levar na perícia do INSS?",
          answer:
            "Documento com foto, CPF, laudos e atestados atualizados, exames, receitas e relatórios de tratamento, e algo que mostre qual é o seu trabalho, como a carteira de trabalho. Leve os originais organizados por data e explique com exemplos o que a doença impede você de fazer no trabalho.",
        },
        {
          question: "O INSS pode conceder o benefício sem perícia presencial?",
          answer:
            "Sim, no auxílio por incapacidade temporária. Quando o atestado recomenda afastamento de até 90 dias, o INSS pode decidir só com o atestado ou laudo enviado pelo Meu INSS; antes de março de 2026 esse limite era de 60 dias, e a lei permite ao governo mudá-lo (art. 60, §§ 11-F e 11-I, da Lei 8.213/1991). Por isso o documento precisa estar completo e legível: nome, data de emissão, período estimado de repouso, assinatura e carimbo com registro do profissional e a doença ou o CID.",
        },
        {
          question: "Quanto tempo demora o resultado?",
          answer:
            "O gov.br estima até 45 dias para a análise do pedido. O andamento e o resultado aparecem no Meu INSS, em \"Consultar pedidos\". Se demorar muito além disso, vale procurar orientação para cobrar uma decisão.",
        },
        {
          question: "A perícia negou o benefício. O que fazer?",
          answer:
            "Leia o motivo na decisão do Meu INSS. Se faltou documento ou o atestado estava incompleto, um novo pedido bem instruído pode resolver. Se o perito concluiu que não há incapacidade, cabe recurso à Junta de Recursos em 30 dias ou ação no Juizado Especial Federal, em que um perito nomeado pelo juiz faz um novo exame.",
        },
        {
          question: "Como pedir a prorrogação do benefício?",
          answer:
            "Pelo Meu INSS, antes da data de cessação, se você continuar sem condições de trabalhar. A lei prevê que, sem data de término fixada, o benefício acaba em 120 dias, salvo pedido de prorrogação (art. 60, § 9º, da Lei 8.213/1991). Junte atestado novo que explique por que o afastamento precisa continuar.",
        },
        {
          question: "Aposentado por incapacidade precisa fazer perícia de novo?",
          answer:
            "Pode ser chamado para revisões periódicas (art. 101 da Lei 8.213/1991). Quem não voltou a trabalhar fica isento dessa revisão depois dos 60 anos, ou depois dos 55 anos se já tiverem passado 15 anos da concessão do benefício, com as exceções previstas na lei.",
        },
        {
          question: "Doença que eu já tinha antes de contribuir dá direito?",
          answer:
            "Só se a incapacidade vier do agravamento ou da progressão dessa doença depois que você passou a contribuir (art. 59, § 1º, da Lei 8.213/1991). Relatórios médicos que mostrem quando a doença piorou são a prova mais importante nesse caso.",
        },
      ],
      sections: [
        {
          title: "Como pedir e como funciona a análise",
          paragraphs: [
            "No Meu INSS (site ou aplicativo), entre com a conta gov.br, procure \"Benefício por incapacidade\" e escolha \"Pedir novo benefício\". O pedido começa todo pela internet; o telefone 135 atende de segunda a sábado, das 7h às 22h, e agenda atendimento presencial quando necessário. Empregados com carteira recebem os primeiros 15 dias de afastamento da empresa; o INSS paga a partir do 16º dia.",
            "Quando o atestado recomenda afastamento de até 90 dias, o INSS pode conceder o benefício só com a análise do atestado ou laudo enviado (novo Atestmed, desde março de 2026). Se o documento não for suficiente, ou se o caso exigir, a pessoa é chamada para a perícia presencial, que também define se a incapacidade é temporária ou permanente.",
          ],
        },
        {
          title: "Como se preparar para a perícia",
          paragraphs: [
            "Leve os laudos mais recentes e completos que tiver, com a descrição do que você não consegue fazer: ficar de pé por muito tempo, carregar peso, digitar, dirigir, concentrar-se. Exames de imagem, receitas e relatórios de fisioterapia ou de internação mostram que o tratamento existe e continua.",
            "Explique ao perito qual é o seu trabalho e como a doença atrapalha cada tarefa. Seja objetivo e não exagere: o perito compara o relato com o exame e com os documentos. Chegue com antecedência e leve documento com foto.",
          ],
        },
        {
          title: "O que o perito avalia",
          paragraphs: [
            "O perito não decide se a doença existe, e sim se ela impede o trabalho ou a atividade habitual e por quanto tempo. Duas pessoas com o mesmo diagnóstico podem ter resultados diferentes, porque o que pesa é a limitação concreta em relação à atividade de cada uma.",
            "Se concluir pela incapacidade, o perito fixa uma data estimada para o fim do benefício. Se considerar a incapacidade permanente para qualquer trabalho, pode indicar a aposentadoria por incapacidade permanente; se houver condições de exercer outra atividade, pode encaminhar à reabilitação profissional.",
          ],
        },
        {
          title: "Depois do resultado",
          paragraphs: [
            "A decisão aparece no Meu INSS. Se o benefício for concedido, confira a data de cessação: se você ainda não puder trabalhar perto dessa data, peça a prorrogação pelo Meu INSS com atestado atualizado. Quem recebe benefício por incapacidade pode ser chamado para novos exames e deve seguir o tratamento e a reabilitação oferecidos (art. 101 da Lei 8.213/1991).",
            "Ao voltar ao trabalho, o empregado afastado por acidente de trabalho tem garantia de emprego por 12 meses depois do fim do auxílio (art. 118 da Lei 8.213/1991).",
          ],
        },
        {
          title: "Se o benefício for negado",
          paragraphs: [
            "Primeiro, leia o motivo. Atestado sem período de repouso, sem CID ou sem assinatura legível é causa frequente de negativa por documento, e um novo pedido com o atestado completo resolve. Se o perito concluiu que não há incapacidade, há dois caminhos: recurso à Junta de Recursos, em 30 dias, ou ação na Justiça.",
            "Na Bahia, ações contra o INSS de até 60 salários mínimos vão ao Juizado Especial Federal, com unidades em Salvador e nas subseções do interior; se a incapacidade vier de acidente de trabalho, a ação é na Justiça Estadual. No processo, o juiz nomeia um perito próprio, e os laudos do seu médico assistente ajudam a orientar o exame.",
          ],
        },
      ],
    },
    relatedActions: ["auxilio-doenca", "aposentadoria"],
    updatedAt: "2026-11-08",
  },

  // ============================================================
  // RESERVA 1. BOLETIM DE OCORRÊNCIA ONLINE NA BAHIA
  // Conferido em 07/11/2026: link oficial no site da SSP-BA (ba.gov.br/ssp) para a Delegacia
  // Virtual do Ministério da Justiça; orientações da Bahia em
  // delegaciavirtual.sinesp.gov.br/portal/comunicacaofato/ba/orientacoes. CPP art. 38; CP art. 340.
  // ============================================================
  {
    id: "boletim-de-ocorrencia-online-bahia",
    nicheId: "penal",
    slug: "boletim-de-ocorrencia-online-bahia",
    title: "Boletim de Ocorrência Online na Bahia: Como Registrar na Delegacia Virtual",
    metaTitle: "B.O. Online na Bahia: Como Registrar na Delegacia Virtual",
    metaDescription:
      "Boletim de ocorrência online na Bahia: como registrar na Delegacia Virtual com gov.br, o que não pode ser feito pela internet e como acompanhar.",
    keywords: [
      "boletim de ocorrência online bahia",
      "boletim de ocorrência online salvador",
      "delegacia virtual bahia",
      "fazer bo online bahia",
      "registrar ocorrência online",
    ],
    excerpt:
      "Na Bahia, o boletim de ocorrência pode ser feito pela internet na Delegacia Virtual do Ministério da Justiça, com a conta gov.br. Veja o passo a passo, o que não pode ser registrado online e como acompanhar.",
    content: {
      intro:
        "Em resumo: na Bahia, o boletim de ocorrência pode ser registrado pela internet na Delegacia Virtual do Ministério da Justiça (delegaciavirtual.sinesp.gov.br), escolhendo o estado da Bahia e entrando com a conta gov.br; o próprio site da Secretaria da Segurança Pública da Bahia aponta para ela. A comunicação é analisada pela Polícia Civil da Bahia e, se aprovada, a cópia chega por e-mail. Não dá para registrar online quando quem comunica ou o suspeito é menor de idade, quando houve arrombamento ou subtração de veículo, ou quando o caso envolve arma, munição, explosivos, medicamentos ou produtos químicos: nesses casos, vá a uma delegacia. Em emergência, ligue 190.",
      whatIs:
        "O boletim de ocorrência é o registro oficial, na Polícia Civil, de um fato que pode ser crime ou que precisa ficar documentado. Ele serve para iniciar uma investigação e como prova perante bancos, seguradoras, empresas e na Justiça. Comunicar à polícia um crime que não aconteceu é crime (art. 340 do Código Penal), então o relato deve ser fiel aos fatos.",
      whenYouHaveRight: [
        "Registrar online fatos ocorridos na Bahia, sendo maior de idade e com conta gov.br",
        "O registro online não vale se o suspeito for menor de idade, se houve arrombamento, subtração de veículo ou envolvimento de arma, munição, explosivos, medicamentos ou produtos químicos",
        "Receber a cópia por e-mail quando a Polícia Civil aprovar a comunicação e acompanhar pelo menu Acompanhar Ocorrência",
        "Registrar presencialmente em qualquer delegacia, inclusive nos casos que não podem ser feitos online",
        "Em emergência ou crime em andamento, ligar 190; em violência contra a mulher, procurar a delegacia especializada ou ligar 180",
      ],
      documents: [
        "Conta gov.br",
        "Documento de identidade e CPF",
        "Data, hora e local do fato",
        "Descrição do que aconteceu, em ordem",
        "Dados de quem praticou o fato, se souber: nome, telefone, perfil, placa",
        "Provas: prints, comprovantes de transferência, notas fiscais, números de série e fotos",
      ],
      deadlines:
        "Registre o quanto antes: provas se perdem com o tempo e, nos crimes que dependem de representação da vítima, há prazo de 6 meses contados de quando se soube quem é o autor (art. 38 do Código de Processo Penal). Em golpe com Pix ou transferência, avise o banco imediatamente, pelos canais oficiais, além de registrar a ocorrência.",
      faq: [
        {
          question: "Como fazer boletim de ocorrência online na Bahia?",
          answer:
            "Acesse a Delegacia Virtual do Ministério da Justiça (delegaciavirtual.sinesp.gov.br), escolha Bahia, leia as orientações, confirme que está ciente e entre com a conta gov.br. Depois, escolha o tipo de fato, descreva o que aconteceu, anexe as informações e envie. A Polícia Civil da Bahia analisa a comunicação e, se aprovar, envia a cópia por e-mail.",
        },
        {
          question: "O que não pode ser registrado pela internet?",
          answer:
            "Segundo as orientações da Delegacia Virtual para a Bahia: casos em que quem comunica ou o suspeito é menor de idade; crimes com arrombamento (cadeado, tranca, porta ou janela rompidos); subtração de veículo; e ocorrências com arma de fogo, munição, explosivos, medicamentos ou produtos químicos. Nesses casos, registre pessoalmente em uma delegacia.",
        },
        {
          question: "Precisa de conta gov.br?",
          answer:
            "Sim. O login gov.br é exigido para comunicar a ocorrência e para acompanhar o andamento. Se ainda não tiver conta, crie pelo site ou aplicativo gov.br antes de começar.",
        },
        {
          question: "Como acompanhar e pegar a cópia do B.O.?",
          answer:
            "Se a comunicação for aprovada, a cópia é enviada para o e-mail informado. Também é possível consultar pelo menu Acompanhar Ocorrência, no site da Delegacia Virtual, com o mesmo login gov.br.",
        },
        {
          question: "B.O. online tem o mesmo valor do feito na delegacia?",
          answer:
            "Depois de analisado e aprovado pela Polícia Civil, ele é o registro oficial da ocorrência e serve para os mesmos fins: investigação, banco, seguradora e processos. A polícia pode chamar você para complementar as informações.",
        },
        {
          question: "Fazer B.O. falso é crime?",
          answer:
            "Sim. Comunicar à autoridade um crime ou contravenção que você sabe que não aconteceu é o crime do art. 340 do Código Penal. A própria Delegacia Virtual registra o endereço de internet de quem faz a comunicação.",
        },
        {
          question: "Fui vítima de golpe. O que fazer além do B.O.?",
          answer:
            "Avise o banco imediatamente pelos canais oficiais e peça o bloqueio e a devolução pelos mecanismos do Pix, guarde prints das conversas, comprovantes e o perfil ou número do golpista, e registre a ocorrência. Se o banco negar a devolução, reclame no consumidor.gov.br e avalie com um advogado se há responsabilidade da instituição.",
        },
      ],
      sections: [
        {
          title: "Passo a passo na Delegacia Virtual",
          paragraphs: [
            "Entre em delegaciavirtual.sinesp.gov.br, selecione o estado da Bahia e leia as orientações. Clique em \"Estou ciente e desejo prosseguir\" e faça login com a conta gov.br. Escolha o tipo de fato entre as opções que o sistema mostra e preencha os dados: quando e onde aconteceu, o que aconteceu, quem são os envolvidos e o que foi levado ou danificado.",
            "Revise antes de enviar. A comunicação é analisada pela Polícia Civil da Bahia; se aprovada, a cópia chega por e-mail e fica disponível no menu Acompanhar Ocorrência. Se faltar alguma informação, a polícia pode entrar em contato.",
          ],
        },
        {
          title: "Quando é preciso ir à delegacia",
          paragraphs: [
            "As orientações oficiais excluem do registro online os casos em que quem comunica ou o suspeito é menor de idade, os crimes com arrombamento, a subtração de veículo e as ocorrências com arma de fogo, munição, explosivos, medicamentos ou produtos químicos. Nesses casos, procure pessoalmente uma delegacia da Polícia Civil.",
            "Em emergência ou crime em andamento, ligue 190. Em violência doméstica ou contra a mulher, procure uma delegacia especializada de atendimento à mulher ou ligue 180; nesses casos, a vítima pode pedir medidas protetivas de urgência.",
          ],
        },
        {
          title: "Como escrever um bom relato",
          paragraphs: [
            "Conte em ordem: o que aconteceu primeiro, depois e por último, com datas e horários. Prefira fatos a opiniões e inclua tudo o que identifica quem praticou o fato: nome, apelido, telefone, perfil de rede social, placa do carro, chave Pix usada no golpe.",
            "Liste os bens com marca, modelo e número de série quando tiver, e guarde as notas fiscais. Um relato claro facilita a investigação e evita que você precise voltar à delegacia para complementar.",
          ],
        },
        {
          title: "Para que serve o B.O. depois",
          paragraphs: [
            "Com o boletim, a polícia pode investigar, e a vítima comprova o fato perante banco, seguradora, operadora de celular e empresa onde trabalha. Em golpes bancários, ele acompanha o pedido de devolução ao banco e uma eventual reclamação ou ação.",
            "Nos crimes que dependem de representação, como, em regra, a ameaça e a lesão corporal leve, registrar a ocorrência e dizer que quer o processo dentro de 6 meses é o que permite que o caso siga.",
          ],
        },
      ],
    },
    relatedActions: ["estelionato"],
    updatedAt: "2026-11-07",
  },

  // ============================================================
  // RESERVA 2. RECLAMAÇÃO NO PROCON DA BAHIA E NO CONSUMIDOR.GOV.BR
  // Conferido em 07/11/2026: página do Procon-BA no site da SJDH (ba.gov.br/justica/iniciativas/
  // atendimento-procon, com o formulário on-line); consumidor.gov.br ("Sobre o serviço" e
  // "Conheça"); CDC arts. 26, 27, 42 e 55 a 56; Lei 9.099/1995 arts. 3º e 9º.
  // ============================================================
  {
    id: "reclamacao-procon-bahia-consumidor-gov",
    nicheId: "consumidor",
    slug: "reclamacao-procon-bahia-consumidor-gov",
    title: "Reclamação no Procon da Bahia e no Consumidor.gov.br: Como Fazer",
    metaTitle: "Reclamação no Procon-BA e no consumidor.gov.br: Como Fazer",
    metaDescription:
      "Como reclamar no Procon da Bahia (formulário on-line ou posto) e no consumidor.gov.br: prazos de resposta, documentos e quando levar o caso ao Juizado.",
    keywords: [
      "procon bahia reclamação online",
      "procon bahia",
      "procon ba reclamação",
      "consumidor.gov.br",
      "como reclamar no procon",
      "reclamação contra empresa",
    ],
    excerpt:
      "Na Bahia, a reclamação de consumo pode ser feita no Procon-BA, pelo formulário on-line ou nos postos, ou no consumidor.gov.br, em que a empresa cadastrada tem até 10 dias para responder. Veja o passo a passo, os documentos e quando ir ao Juizado.",
    content: {
      intro:
        "Em resumo: na Bahia, a reclamação no Procon pode ser feita pelo formulário de atendimento on-line do Procon-BA (atendimentoprocon.sjdhds.ba.gov.br), indicado no site da Secretaria de Justiça e Direitos Humanos, ou presencialmente nos postos do Procon. Outra opção é o consumidor.gov.br, do Ministério da Justiça: se a empresa for cadastrada, ela tem até 10 dias para responder, e você tem até 20 dias para avaliar a resposta. Antes, tente resolver com a empresa e guarde o protocolo. Se nada resolver, o Juizado Especial Cível julga causas de até 40 salários mínimos, e até 20 não precisa de advogado.",
      whatIs:
        "O Procon-BA (Superintendência de Proteção e Defesa do Consumidor) é o órgão estadual, ligado à Secretaria de Justiça e Direitos Humanos, que orienta consumidores, registra reclamações individuais, chama as empresas para tentar um acordo e pode aplicar sanções administrativas, como multa (arts. 55 a 56 do Código de Defesa do Consumidor). O consumidor.gov.br é um serviço público e gratuito do Ministério da Justiça em que o consumidor fala direto com as empresas que aderiram a ele. Nenhum dos dois condena a empresa a indenizar: isso é papel da Justiça, ou de um acordo.",
      whenYouHaveRight: [
        "Reclamar de produto com defeito, serviço mal prestado, cobrança indevida, propaganda enganosa, cláusula abusiva e outros problemas de consumo (Código de Defesa do Consumidor)",
        "Registrar a reclamação no Procon-BA pelo formulário on-line ou em um posto, e acompanhar o andamento do processo",
        "No consumidor.gov.br: resposta da empresa cadastrada em até 10 dias e até 20 dias para você avaliar se foi resolvido",
        "Receber em dobro o que pagou por cobrança indevida, salvo engano justificável da empresa (art. 42, parágrafo único, do CDC)",
        "Ir ao Juizado Especial Cível se não houver solução, sem precisar passar antes pelo Procon",
      ],
      documents: [
        "Documento de identidade e CPF",
        "Nota fiscal, contrato, pedido ou comprovante da compra",
        "Faturas, extratos ou cobranças contestadas",
        "Protocolos de atendimento da empresa, com data",
        "Prints de conversas, e-mails e anúncios",
        "Fotos ou laudo do defeito, se for produto",
      ],
      deadlines:
        "Para reclamar de defeito aparente, o prazo é de 30 dias para produto ou serviço não durável e 90 dias para durável (art. 26 do CDC); a reclamação feita à empresa, comprovada, impede que o prazo corra até a resposta negativa. Para pedir indenização por dano causado por defeito do produto ou do serviço, o prazo é de 5 anos (art. 27). No consumidor.gov.br, a empresa tem até 10 dias para responder e você, até 20 dias para avaliar.",
      faq: [
        {
          question: "Como fazer reclamação no Procon da Bahia?",
          answer:
            "Pelo formulário de atendimento on-line do Procon-BA (atendimentoprocon.sjdhds.ba.gov.br), indicado no site da Secretaria de Justiça e Direitos Humanos (ba.gov.br/justica), ou presencialmente em um posto do Procon. Descreva o problema, o que você já tentou com a empresa e o que quer (troca, conserto, cancelamento, devolução), e anexe nota fiscal, protocolos e prints.",
        },
        {
          question: "Procon ou consumidor.gov.br: qual escolher?",
          answer:
            "Se a empresa estiver cadastrada no consumidor.gov.br, ele costuma ser o caminho mais direto: a empresa tem até 10 dias para responder. O Procon atende reclamações contra qualquer fornecedor, pode chamar a empresa para uma audiência e aplicar multa. Comece por um deles e use o outro se não resolver.",
        },
        {
          question: "O Procon pode obrigar a empresa a me indenizar?",
          answer:
            "Não. O Procon orienta, intermedeia acordos e pode multar a empresa, mas não condena a pagar indenização. Para isso, é preciso um acordo ou uma ação na Justiça, normalmente no Juizado Especial Cível.",
        },
        {
          question: "Como funciona o consumidor.gov.br?",
          answer:
            "Você entra com a conta gov.br, confere se a empresa está cadastrada, registra a reclamação e aguarda: a empresa tem até 10 dias para analisar e responder. Depois, você tem até 20 dias para comentar e informar se a reclamação foi resolvida ou não. O serviço é gratuito e acompanhado pela Secretaria Nacional do Consumidor.",
        },
        {
          question: "Preciso de advogado no Juizado Especial?",
          answer:
            "Nas causas de até 20 salários mínimos, não é obrigatório; entre 20 e 40 salários mínimos, sim (art. 9º da Lei 9.099/1995). Mesmo nas causas menores, o advogado ajuda a pedir o que é cabível e a organizar as provas.",
        },
        {
          question: "Tem prazo para reclamar?",
          answer:
            "Sim. Defeito aparente: 30 dias para produto ou serviço não durável e 90 dias para durável, contados da entrega ou do fim do serviço (art. 26 do CDC). Dano causado por defeito: 5 anos para pedir indenização (art. 27). Reclamar com a empresa, de forma comprovada, impede que o prazo do art. 26 corra até a resposta.",
        },
      ],
      sections: [
        {
          title: "Antes de reclamar: fale com a empresa",
          paragraphs: [
            "Procure o SAC, o chat ou a ouvidoria da empresa, explique o problema e anote o número de protocolo, a data e o nome do atendente. Guarde prints, e-mails e gravações. Esse registro mostra que você tentou resolver e, no caso de defeito, impede que o prazo para reclamar corra até a empresa responder (art. 26, § 2º, do CDC).",
            "Seja claro sobre o que quer: troca do produto, conserto, abatimento do preço, cancelamento ou devolução do dinheiro. Isso facilita o acordo e orienta o Procon ou o juiz depois.",
          ],
        },
        {
          title: "Procon-BA: formulário on-line ou posto",
          paragraphs: [
            "O Procon-BA atende pelo formulário de atendimento on-line, indicado na página do Procon no site da Secretaria de Justiça e Direitos Humanos, e nos postos de atendimento, cuja lista também está no site. Pelo atendimento on-line é possível pedir orientação, registrar reclamação individual e acompanhar o andamento do processo.",
            "Depois do registro, o Procon notifica a empresa e pode marcar audiência de conciliação. Se houver infração ao Código de Defesa do Consumidor, a empresa pode ser multada. Guarde o número da reclamação para acompanhar.",
          ],
        },
        {
          title: "Consumidor.gov.br: passo a passo",
          paragraphs: [
            "Entre em consumidor.gov.br com a conta gov.br e confira se a empresa está na lista de participantes; só participam empresas que aderiram formalmente ao serviço. Registre a reclamação com os dados da compra, o relato do problema e o pedido, e anexe os documentos.",
            "A empresa tem até 10 dias para responder. Depois, você tem até 20 dias para avaliar a resposta, dizendo se a reclamação foi resolvida e qual o seu nível de satisfação. Se não resolver, a reclamação e a resposta servem como prova no Procon ou na Justiça.",
          ],
        },
        {
          title: "Se não resolver: Juizado Especial Cível",
          paragraphs: [
            "O Juizado Especial Cível julga causas de até 40 salários mínimos; até 20, o consumidor pode ir sem advogado (Lei 9.099/1995). Não é preciso ter reclamado antes no Procon ou no consumidor.gov.br, mas esses registros ajudam a provar que a empresa foi procurada e não resolveu.",
            "Na ação é possível pedir o cumprimento do que a empresa deve (troca, conserto, cancelamento), a devolução de valores, em dobro quando houver cobrança indevida paga, e indenização por danos. Na Bahia, há Juizados em Salvador e nas comarcas do interior, com processo eletrônico.",
          ],
        },
        {
          title: "Casos com órgão próprio",
          paragraphs: [
            "Alguns setores têm agências que também recebem reclamações: bancos, no Banco Central (Meu BC); energia elétrica, na ANEEL, depois da ouvidoria da distribuidora; telefonia e internet, na Anatel; planos de saúde, na ANS; voos, na ANAC. Elas podem pressionar a empresa e registrar a infração.",
            "Para conta de luz alta da Coelba, há um passo a passo próprio, com os prazos da ANEEL, em outro artigo deste site.",
          ],
        },
      ],
    },
    relatedActions: ["cobranca-indevida"],
    updatedAt: "2026-11-07",
  },
];

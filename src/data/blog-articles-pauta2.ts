/**
 * Artigos da pauta 2 de 08/11/2026 (_planos/SEO-PAUTA.md): temas com busca real no Google
 * e sem página parecida no site. Cada artigo foi escrito com a lei conferida no texto
 * oficial (Planalto) e sem valor de indenização, chance de êxito ou honorário.
 */
import type { BlogArticle } from "./blog-articles";

export const pauta2Articles: BlogArticle[] = [
  // ============================================================
  // 11. FURTO
  // Conferido em 08/11/2026 no Planalto (texto em vigor): Código Penal arts. 2º, 16, 33, 44,
  // 155 (com a Lei 15.397, de 30/04/2026, DOU de 04/05/2026, em vigor na publicação), 156,
  // 181 a 183; CPP arts. 28-A, 310 (com a Lei 15.358/2026), 313 e 322; Lei 9.099/1995 art. 89.
  // ============================================================
  {
    id: "furto",
    nicheId: "penal",
    slug: "furto",
    title: "Furto: Pena em 2026, Furto Qualificado, Furto de Celular e Diferença para Roubo",
    metaTitle: "Furto (Art. 155): Pena em 2026, Qualificado e de Celular",
    metaDescription:
      "Furto (art. 155 do Código Penal) com as penas de 2026: simples, qualificado, de celular, privilegiado, diferença para roubo, fiança, acordo e o que fazer.",
    keywords: [
      "furto",
      "furto pena",
      "furto qualificado",
      "furto de celular pena",
      "diferença entre furto e roubo",
      "furto privilegiado",
      "artigo 155 código penal",
      "furto 2026",
    ],
    excerpt:
      "Furto é pegar coisa alheia sem violência nem ameaça. Desde 4 de maio de 2026 a pena do furto simples é de 1 a 6 anos de reclusão, e furtar celular, computador ou tablet passou a ter pena de 4 a 10 anos.",
    content: {
      intro:
        "Em resumo: furto é pegar, para si ou para outra pessoa, uma coisa que não é sua, sem violência nem ameaça (art. 155 do Código Penal). Com a Lei 15.397/2026, em vigor desde 4 de maio de 2026, a pena do furto simples passou a ser de reclusão de 1 a 6 anos e multa, aumentada de metade se o furto acontece durante o repouso noturno, e o furto de celular, computador ou tablet passou a ter pena de 4 a 10 anos. Para fatos anteriores a essa data valem as penas antigas, porque a lei penal mais grave não volta no tempo. Se houve violência ou grave ameaça, o crime é roubo, com pena bem maior.",
      whatIs:
        "Furto é a subtração de coisa alheia móvel, para si ou para outra pessoa, sem violência ou grave ameaça contra a vítima. Coisa móvel é tudo o que pode ser levado de um lugar para outro: dinheiro, celular, bicicleta, mercadoria, gado. A lei também trata como coisa móvel a energia elétrica e qualquer outra energia com valor econômico, o que inclui a ligação clandestina de luz, o chamado gato (art. 155, § 3º). O crime existe mesmo que a vítima só perceba depois, como no furto de carteira dentro do ônibus.",
      whenYouHaveRight: [
        "Vítima: registrar boletim de ocorrência, inclusive pela internet nos casos permitidos, e pedir à operadora o bloqueio do celular e do chip",
        "Investigado: ficar em silêncio e ser acompanhado por advogado no depoimento na delegacia",
        "Preso em flagrante: ser apresentado ao juiz em até 24 horas, na audiência de custódia, feita por videoconferência (art. 310 do CPP)",
        "Furto privilegiado: se a pessoa é primária e a coisa é de pequeno valor, o juiz pode trocar a reclusão por detenção, reduzir a pena de um a dois terços ou aplicar só multa (art. 155, § 2º)",
        "Arrependimento posterior: devolver a coisa ou reparar o prejuízo, por vontade própria, até o recebimento da denúncia, reduz a pena de um a dois terços (art. 16 do Código Penal)",
        "Acordo de não persecução penal no furto simples e no qualificado do § 4º, que têm pena mínima menor que 4 anos e não envolvem violência (art. 28-A do CPP)",
        "Furto contra cônjuge, durante o casamento, ou contra pai, mãe, filho, avô ou neto: isenção de pena, salvo se a vítima tem 60 anos ou mais (arts. 181 e 183 do Código Penal)",
      ],
      documents: [
        "Boletim de ocorrência e número do protocolo",
        "Nota fiscal, caixa ou número IMEI do celular furtado",
        "Imagens de câmeras, prints e nomes de testemunhas",
        "Para quem é investigado: documentos pessoais, comprovantes de residência e de trabalho",
        "Comprovantes de devolução da coisa ou de reparação do prejuízo, se houver",
      ],
      deadlines:
        "O furto comum é crime de ação pública incondicionada: a polícia e o Ministério Público agem mesmo sem pedido da vítima, então não há prazo de representação. As exceções dependem de representação da vítima, em 6 meses: o furto de coisa comum, entre condôminos, herdeiros ou sócios (art. 156), e o furto contra cônjuge separado, irmão, ou tio e sobrinho que moram juntos (art. 182). Quem é preso em flagrante deve ser levado ao juiz em até 24 horas.",
      faq: [
        {
          question: "Qual a pena de furto em 2026?",
          answer:
            "Furto simples: reclusão de 1 a 6 anos e multa, desde 4 de maio de 2026 (Lei 15.397/2026). Durante o repouso noturno, a pena aumenta de metade. Furto qualificado (rompimento de obstáculo, abuso de confiança, fraude, escalada, destreza, chave falsa, duas ou mais pessoas): 2 a 8 anos. Furto de celular ou computador, de veículo levado para outro estado ou para o exterior, de animal, de arma de fogo e furto por fraude eletrônica: 4 a 10 anos. Para fatos anteriores a 4 de maio de 2026 valem as penas antigas; no furto simples, 1 a 4 anos.",
        },
        {
          question: "Qual a diferença entre furto e roubo?",
          answer:
            "No furto não há violência nem ameaça contra a vítima; no roubo, sim. Empurrar, agredir, ameaçar com arma ou faca, ou dopar a vítima para levar o bem é roubo (art. 157), com pena de 6 a 10 anos. Também é roubo quando a violência ou a ameaça vem logo depois de pegar a coisa, para fugir ou ficar com ela.",
        },
        {
          question: "Furto de celular dá prisão?",
          answer:
            "A pena do furto de celular, computador ou tablet passou a ser de 4 a 10 anos (art. 155, § 6º, II). Quem é preso em flagrante passa pela audiência de custódia, em que o juiz decide se a pessoa responde em liberdade, com ou sem medidas cautelares, ou se fica presa. Como a pena máxima passa de 4 anos, a fiança não pode mais ser concedida pelo delegado, só pelo juiz (art. 322 do CPP).",
        },
        {
          question: "O que é furto qualificado?",
          answer:
            "É o furto cometido com rompimento ou destruição de obstáculo, com abuso de confiança, fraude, escalada ou destreza, com chave falsa, por duas ou mais pessoas ou contra bens que afetem serviços públicos ou essenciais. A pena é de 2 a 8 anos (art. 155, § 4º). Há ainda formas com pena de 4 a 10 anos, como o furto com explosivo, o furto por fraude eletrônica, o de veículo levado para outro estado e o de celular ou computador.",
        },
        {
          question: "Furto de pequeno valor é crime?",
          answer:
            "É, mas há dois caminhos de alívio. Se a pessoa é primária e a coisa é de pequeno valor (os tribunais costumam usar como referência um salário mínimo na data do fato), o juiz pode reduzir a pena ou aplicar só multa (§ 2º). Em casos de valor ínfimo, sem violência e com pouca reprovação, os tribunais podem reconhecer o princípio da insignificância e absolver; a reincidência costuma afastar essa saída.",
        },
        {
          question: "Devolvi o que peguei. Ainda respondo?",
          answer:
            "Responde, porque o crime já aconteceu, mas a devolução voluntária ou a reparação do prejuízo antes do recebimento da denúncia reduz a pena de um a dois terços (art. 16 do Código Penal). A reparação também é uma das condições do acordo de não persecução penal.",
        },
        {
          question: "O delegado pode soltar com fiança no furto?",
          answer:
            "No furto simples, não mais. O delegado só concede fiança quando a pena máxima não passa de 4 anos, e a do furto simples passou a 6 em maio de 2026. A fiança passou a ser pedida ao juiz, que decide em 48 horas (art. 322 do CPP). Na prática, a situação de quem foi preso é decidida na audiência de custódia.",
        },
        {
          question: "Furto dentro da família é crime?",
          answer:
            "É, mas a lei isenta de pena quem furta do cônjuge, durante o casamento, ou de pai, mãe, filho, avô ou neto (art. 181). Contra cônjuge separado, irmão, ou tio e sobrinho que moram juntos, o processo depende de representação da vítima (art. 182). Essas regras não valem se a vítima tem 60 anos ou mais, se houve violência ou para quem não é da família e participou (art. 183).",
        },
        {
          question: "Quem é acusado de furto pode fazer acordo?",
          answer:
            "No furto simples e no qualificado do § 4º, sim: o acordo de não persecução penal cabe em crimes sem violência com pena mínima menor que 4 anos, desde que a pessoa confesse e cumpra condições como reparar o dano (art. 28-A do CPP). No furto simples sem aumentos, a pena mínima de 1 ano também permite a suspensão condicional do processo (art. 89 da Lei 9.099/1995). Nas formas com pena mínima de 4 anos, como o furto de celular, o acordo não cabe.",
        },
      ],
      sections: [
        {
          title: "Furto simples e as penas de 2026",
          paragraphs: [
            "O furto simples é pegar coisa alheia móvel sem violência ou ameaça. Desde 4 de maio de 2026, data em que a Lei 15.397/2026 foi publicada e entrou em vigor, a pena é de reclusão de 1 a 6 anos e multa. Se o furto acontece durante o repouso noturno, a pena aumenta de metade (art. 155, § 1º).",
            "A lei penal mais grave não alcança fatos anteriores: a Constituição só permite que a lei penal volte no tempo para beneficiar o réu (art. 5º, XL), e o Código Penal manda aplicar a lei posterior mais favorável aos fatos anteriores (art. 2º). Por isso, para furtos cometidos até 3 de maio de 2026, a pena do furto simples continua de 1 a 4 anos, e o aumento do repouso noturno continua de um terço.",
          ],
        },
        {
          title: "Furto qualificado e as formas mais graves",
          paragraphs: [
            "O furto qualificado do § 4º, com pena de 2 a 8 anos, é o cometido com destruição ou rompimento de obstáculo (arrombar porta, quebrar vidro de carro), com abuso de confiança (a empregada ou o funcionário que se aproveita da confiança do patrão), mediante fraude, escalada ou destreza (o batedor de carteira), com chave falsa, por duas ou mais pessoas ou contra bens que comprometam o funcionamento de órgãos públicos ou de serviços essenciais.",
            "As formas com pena de 4 a 10 anos são o furto com explosivo (§ 4º-A, que também é crime hediondo), o furto mediante fraude por meio eletrônico ou informático, como a invasão de conta bancária (§ 4º-B, com aumento se a vítima é idosa ou vulnerável), o furto de veículo levado para outro estado ou para o exterior (§ 5º), o furto de animal de produção ou doméstico e o de celular, computador ou tablet (§ 6º), e o furto de explosivos ou de arma de fogo (§ 7º). O furto de fios, cabos e equipamentos de energia, telefonia, dados ou ferrovias tem pena de 2 a 8 anos (§ 8º), e há regras próprias para combustíveis e para integrantes de organização criminosa.",
          ],
        },
        {
          title: "Furto privilegiado e insignificância",
          paragraphs: [
            "Se a pessoa é primária e a coisa furtada é de pequeno valor, o juiz pode trocar a reclusão por detenção, reduzir a pena de um a dois terços ou aplicar somente multa (art. 155, § 2º). O Superior Tribunal de Justiça admite esse benefício até no furto qualificado, quando a qualificadora é objetiva, como o rompimento de obstáculo (Súmula 511).",
            "O princípio da insignificância não está escrito na lei; é criação dos tribunais para casos de lesão ínfima, sem periculosidade e com reduzida reprovação, como o furto de itens de valor irrisório. Quando reconhecido, leva à absolvição. Reincidência, furto qualificado e valor que não é desprezível para a vítima costumam afastar a tese.",
          ],
        },
        {
          title: "O que muda no processo com as penas novas",
          paragraphs: [
            "Como a pena máxima do furto simples passou de 4 para 6 anos, o delegado deixou de poder conceder fiança nesse crime; o pedido vai ao juiz, que decide em 48 horas (art. 322 do CPP). A prisão preventiva passou a ser admitida em tese, porque o Código de Processo Penal a permite em crimes dolosos com pena máxima acima de 4 anos (art. 313, I), mas continua exigindo motivo concreto, como risco à ordem pública ou à investigação (art. 312).",
            "Seguem possíveis o acordo de não persecução penal no furto simples e no qualificado do § 4º, a suspensão condicional do processo no furto simples sem aumentos e, em caso de condenação de até 4 anos, a troca da prisão por penas alternativas, como prestação de serviços à comunidade, para quem não é reincidente em crime doloso (art. 44 do Código Penal). Com pena de até 4 anos e sem reincidência, o regime inicial pode ser o aberto (art. 33, § 2º).",
          ],
        },
        {
          title: "Se você foi vítima",
          paragraphs: [
            "Registre o boletim de ocorrência; na Bahia, muitos casos podem ser registrados pela internet, na Delegacia Virtual, mas furto com arrombamento e subtração de veículo exigem ida à delegacia. No furto de celular, peça à operadora o bloqueio do chip e do aparelho pelo IMEI, troque as senhas de e-mail e de redes sociais e avise o banco para bloquear aplicativos e cartões.",
            "Guarde nota fiscal, caixa, prints e o nome de testemunhas, e peça logo as imagens de câmeras próximas, que costumam ser apagadas em poucos dias. Se o objeto for encontrado, a devolução é feita pela delegacia ou pelo juiz, mediante comprovação de que ele é seu.",
          ],
        },
        {
          title: "Se você foi acusado",
          paragraphs: [
            "Não preste depoimento sem orientação: você tem direito de ficar calado e de ter advogado na delegacia. Não procure a vítima nem testemunhas. Reúna comprovantes de onde estava, de trabalho e de residência, que pesam na audiência de custódia e em um eventual pedido de liberdade.",
            "O enquadramento correto faz diferença: furto simples ou qualificado, valor da coisa, data do fato (antes ou depois de 4 de maio de 2026) e a forma como foi feito o reconhecimento. O Código de Processo Penal exige que a vítima primeiro descreva o suspeito e depois o aponte ao lado de pessoas parecidas (art. 226), e o STJ não aceita condenação baseada só em reconhecimento feito sem essas cautelas.",
          ],
        },
      ],
    },
    relatedActions: ["crimes-patrimoniais", "defesa-flagrante"],
    updatedAt: "2026-11-08",
  },

  // ============================================================
  // 12. ROUBO
  // Conferido em 08/11/2026 no Planalto (texto em vigor): Código Penal arts. 2º, 33 e 157 (com a
  // Lei 15.397/2026, em vigor em 04/05/2026, e a Lei 15.358/2026); Lei 8.072/1990 art. 1º, II;
  // CPP arts. 28-A, 226, 310 (com a Lei 15.358/2026), 322 e 323.
  // ============================================================
  {
    id: "roubo",
    nicheId: "penal",
    slug: "roubo",
    title: "Roubo: Pena em 2026, Causas de Aumento, Latrocínio e Como Funciona o Processo",
    metaTitle: "Roubo (Art. 157): Pena em 2026, Aumentos e Latrocínio",
    metaDescription:
      "Roubo (art. 157 do Código Penal) com as penas de 2026: 6 a 10 anos, aumentos por arma, celular e duas ou mais pessoas, latrocínio, crime hediondo e defesa.",
    keywords: [
      "roubo",
      "roubo pena",
      "roubo majorado",
      "artigo 157 código penal",
      "latrocínio pena",
      "roubo de celular pena",
      "roubo com arma de fogo",
      "roubo 2026",
    ],
    excerpt:
      "Roubo é tirar algo de alguém com violência ou grave ameaça. Desde 4 de maio de 2026 a pena é de 6 a 10 anos de reclusão, com aumentos por arma, por duas ou mais pessoas e pelo roubo de celular; o latrocínio vai de 24 a 30 anos.",
    content: {
      intro:
        "Em resumo: roubo é subtrair coisa alheia com violência ou grave ameaça, ou depois de deixar a vítima sem condição de resistir (art. 157 do Código Penal). Com a Lei 15.397/2026, em vigor desde 4 de maio de 2026, a pena básica subiu para 6 a 10 anos de reclusão e multa, o roubo de celular, computador ou tablet ganhou causa de aumento e o latrocínio, roubo com morte, passou a ter pena de 24 a 30 anos. Roubo com arma de fogo, com a vítima mantida em poder do autor ou com lesão grave ou morte é crime hediondo. Fatos anteriores a 4 de maio de 2026 seguem as penas antigas.",
      whatIs:
        "Roubo é o furto com violência ou ameaça: em vez de pegar escondido, o autor ameaça, agride ou dopa a vítima para levar o bem. A ameaça pode ser feita com arma, faca, simulacro ou só com palavras e gestos, desde que intimide de verdade. Também é roubo quando a violência ou a ameaça vem logo depois de pegar a coisa, para garantir a fuga ou ficar com ela (§ 1º). Para o Superior Tribunal de Justiça, o roubo se consuma quando o bem sai do poder da vítima, mesmo que por pouco tempo e mesmo que o autor seja pego logo depois (Súmula 582).",
      whenYouHaveRight: [
        "Vítima: registrar boletim de ocorrência, fazer exame de corpo de delito se houve agressão e pedir o bloqueio do celular e do chip",
        "Vítima: descrever o suspeito antes de qualquer reconhecimento e fazer o reconhecimento ao lado de pessoas parecidas, como manda o art. 226 do CPP",
        "Investigado: ficar em silêncio e ter advogado no depoimento e no reconhecimento",
        "Preso em flagrante: ser apresentado ao juiz em até 24 horas, na audiência de custódia, feita por videoconferência (art. 310 do CPP)",
        "Acusado: contestar reconhecimento feito sem as cautelas do art. 226 do CPP, que, segundo o STJ, não basta para condenar",
        "Condenado: progressão de regime, com regras mais rígidas quando o roubo é crime hediondo",
      ],
      documents: [
        "Boletim de ocorrência e número do protocolo",
        "Laudo do exame de corpo de delito, se houve lesão",
        "IMEI, nota fiscal e dados do aparelho levado",
        "Imagens de câmeras de segurança e nomes de testemunhas",
        "Para quem é acusado: documentos pessoais, comprovantes de residência e de trabalho e provas de onde estava no horário",
      ],
      deadlines:
        "O roubo é crime de ação pública incondicionada: o Ministério Público age sem depender da vítima, e não há prazo de representação. Quem é preso em flagrante deve ser apresentado ao juiz em até 24 horas, na audiência de custódia. Câmeras de comércios e de condomínios costumam guardar as imagens por poucos dias, por isso quem precisa delas, vítima ou acusado, deve pedir logo, por escrito.",
      faq: [
        {
          question: "Qual a pena de roubo em 2026?",
          answer:
            "Reclusão de 6 a 10 anos e multa, desde 4 de maio de 2026. A pena aumenta de um terço até a metade com arma branca, duas ou mais pessoas, vítima mantida em poder do autor, roubo de celular ou computador e outras situações do § 2º; aumenta de dois terços com arma de fogo; e dobra com arma de fogo de uso restrito ou proibido. Para fatos anteriores, a pena básica é de 4 a 10 anos.",
        },
        {
          question: "O roubo de celular ficou mais grave?",
          answer:
            "Sim. Desde 4 de maio de 2026, roubar celular, computador, notebook ou tablet aumenta a pena de um terço até a metade (art. 157, § 2º, IX). Somado à nova pena básica, o roubo de celular sem outros aumentos parte de 8 anos de reclusão.",
        },
        {
          question: "Roubo com arma de brinquedo é roubo?",
          answer:
            "É, porque a arma falsa intimida a vítima e configura a grave ameaça. O que muda é o aumento: o de dois terços vale para arma de fogo; com simulacro, ele não se aplica.",
        },
        {
          question: "O que é latrocínio e qual a pena?",
          answer:
            "É o roubo em que a violência causa morte. Desde 4 de maio de 2026, a pena é de 24 a 30 anos de reclusão e multa (antes, 20 a 30). Se a violência causa lesão corporal grave, a pena é de 7 a 18 anos. Os dois são crimes hediondos, e o latrocínio é julgado por juiz, não pelo tribunal do júri (Súmula 603 do STF).",
        },
        {
          question: "Todo roubo é crime hediondo?",
          answer:
            "Não. É hediondo o roubo com restrição da liberdade da vítima, com emprego de arma de fogo, inclusive de uso restrito ou proibido, e com resultado lesão grave ou morte (Lei 8.072/1990, art. 1º, II). Crime hediondo não admite fiança (art. 323 do CPP) e tem regras mais rígidas na execução da pena.",
        },
        {
          question: "Quem é preso por roubo sai na audiência de custódia?",
          answer:
            "Depende do caso. O juiz avalia se há motivo concreto para a prisão preventiva, como risco à ordem pública ou à investigação, ou se bastam medidas como comparecer em juízo e não sair da cidade. A fiança, quando cabe, só o juiz pode conceder, porque a pena máxima passa de 4 anos; no roubo hediondo, não cabe fiança.",
        },
        {
          question: "Cabe acordo no roubo?",
          answer:
            "O acordo de não persecução penal não cabe, porque exige crime sem violência ou grave ameaça (art. 28-A do CPP), e os tribunais não aplicam o princípio da insignificância ao roubo. A defesa trabalha com a prova: reconhecimento, imagens, testemunhas, local e hora, e com o enquadramento correto do crime e dos aumentos.",
        },
        {
          question: "Em que regime começa a pena de roubo?",
          answer:
            "Com pena acima de 4 e até 8 anos, a pessoa não reincidente pode começar no semiaberto; acima de 8 anos, começa no fechado (art. 33, § 2º, do Código Penal). Como a pena mínima do roubo passou a 6 anos, o regime aberto só é possível quando uma causa de diminuição, como a tentativa, leva a pena a 4 anos ou menos.",
        },
      ],
      sections: [
        {
          title: "Roubo, furto e extorsão: as diferenças",
          paragraphs: [
            "O que separa o roubo do furto é a violência ou a grave ameaça contra a pessoa. Pegar o celular esquecido na mesa é furto; levar o mesmo celular depois de ameaçar o dono é roubo. Dopar a vítima ou deixá-la sem condição de resistir também é roubo.",
            "Quando a vítima é obrigada a fazer algo, como transferir dinheiro por Pix ou sacar no caixa eletrônico, o crime pode ser extorsão (art. 158 do Código Penal), que tem regras próprias. A diferença importa porque muda a pena e a forma de defesa.",
          ],
        },
        {
          title: "As causas de aumento",
          paragraphs: [
            "A pena aumenta de um terço até a metade quando há concurso de duas ou mais pessoas, quando a vítima transporta valores e o autor sabe disso, quando o veículo é levado para outro estado ou para o exterior, quando a vítima fica em poder do autor com a liberdade restringida, quando há arma branca, quando são levados explosivos, fios e cabos de energia ou telefonia, arma de fogo ou combustíveis e, desde maio de 2026, quando o roubo é de celular, computador ou tablet (art. 157, § 2º).",
            "Com arma de fogo, ou com destruição de obstáculo por explosivo, a pena aumenta de dois terços (§ 2º-A). Se a arma de fogo é de uso restrito ou proibido, a pena básica é aplicada em dobro (§ 2º-B). Roubo contra bens que comprometam serviços públicos essenciais tem pena de 6 a 12 anos (§ 1º-A), e há pena em triplo quando o autor integra organização criminosa ultraviolenta ou milícia (§ 4º).",
          ],
        },
        {
          title: "Lesão grave e latrocínio",
          paragraphs: [
            "Se a violência do roubo causa lesão corporal grave, a pena é de reclusão de 7 a 18 anos e multa. Se causa morte, é o latrocínio, com pena de 24 a 30 anos e multa desde 4 de maio de 2026 (§ 3º). Antes dessa data, a pena do latrocínio era de 20 a 30 anos, e é ela que vale para os fatos anteriores.",
            "O latrocínio é crime contra o patrimônio, por isso é julgado por juiz criminal, e não pelo tribunal do júri (Súmula 603 do STF). Para o Supremo Tribunal Federal, há latrocínio quando a morte acontece, mesmo que o autor não consiga levar os bens (Súmula 610).",
          ],
        },
        {
          title: "Crime hediondo e o que muda",
          paragraphs: [
            "A Lei 8.072/1990 lista como hediondo o roubo com restrição da liberdade da vítima, com emprego de arma de fogo, inclusive de uso restrito ou proibido, e com resultado lesão grave ou morte. Nesses casos não cabe fiança (art. 323, II, do CPP), e a progressão de regime e outros benefícios da execução seguem regras mais rígidas.",
            "O roubo simples, sem esses elementos, não é hediondo, mesmo com a pena nova. Por isso a denúncia precisa descrever e provar cada aumento, e a defesa confere se ele foi bem aplicado: a arma foi apreendida ou periciada? A restrição de liberdade durou o suficiente para caracterizar o aumento? Havia mesmo duas pessoas?",
          ],
        },
        {
          title: "Reconhecimento do suspeito",
          paragraphs: [
            "Boa parte das acusações de roubo se apoia no reconhecimento feito pela vítima. O Código de Processo Penal manda que a vítima primeiro descreva a pessoa e depois a aponte entre pessoas parecidas, com registro em auto detalhado (art. 226).",
            "O Superior Tribunal de Justiça firmou que o reconhecimento feito sem essas cautelas, por exemplo só por foto enviada por WhatsApp ou com o suspeito sozinho, não serve, sozinho, para condenar. Por isso a vítima deve descrever o autor no boletim de ocorrência com o máximo de detalhes, e a defesa deve conferir como o reconhecimento foi feito.",
          ],
        },
        {
          title: "Se você foi vítima ou foi acusado",
          paragraphs: [
            "Vítima: procure a delegacia, faça exame de corpo de delito se foi agredida, peça o bloqueio do celular e do chip, troque senhas e avise o banco. Anote tudo o que lembrar do autor e do lugar, e indique câmeras próximas.",
            "Acusado: não preste depoimento sem advogado, não fale com a vítima e reúna provas de onde estava. Fatos anteriores a 4 de maio de 2026 seguem as penas antigas, e cada aumento precisa de prova própria. Na audiência de custódia, residência fixa, trabalho e ausência de antecedentes pesam a favor da liberdade.",
          ],
        },
      ],
    },
    relatedActions: ["crimes-patrimoniais", "defesa-flagrante"],
    updatedAt: "2026-11-08",
  },

  // ============================================================
  // 15. RECEPTAÇÃO
  // Conferido em 08/11/2026 no Planalto (texto em vigor): Código Penal art. 180 (pena do caput
  // pela Lei 15.397/2026, em vigor em 04/05/2026; § 5º revogado pela Lei 15.358, de 24/03/2026,
  // DOU de 25/03/2026; §§ 6º a 8º) e art. 180-A; CPP arts. 28-A, 313 e 322; Lei 9.099/1995 art. 89.
  // ============================================================
  {
    id: "receptacao",
    nicheId: "penal",
    slug: "receptacao",
    title: "Receptação: O Que É, Pena em 2026, Receptação Culposa e Como se Defender",
    metaTitle: "Receptação (Art. 180): Pena em 2026, Culposa e Qualificada",
    metaDescription:
      "Receptação (art. 180 do Código Penal) com as penas de 2026: dolosa, culposa e qualificada, compra de celular ou moto de origem duvidosa e como se defender.",
    keywords: [
      "receptação",
      "receptação pena",
      "receptação culposa",
      "receptação qualificada",
      "artigo 180 código penal",
      "comprei celular roubado",
      "receptação 2026",
    ],
    excerpt:
      "Receptação é comprar, receber ou esconder coisa que se sabe ser produto de crime. Desde 4 de maio de 2026 a pena é de 2 a 6 anos de reclusão; quem compra sem saber, mas devia desconfiar pelo preço ou pela origem, responde por receptação culposa.",
    content: {
      intro:
        "Em resumo: receptação é adquirir, receber, transportar, conduzir ou esconder, em proveito próprio ou de outra pessoa, coisa que se sabe ser produto de crime, ou convencer alguém de boa-fé a fazer isso (art. 180 do Código Penal). Com a Lei 15.397/2026, a pena passou a ser de reclusão de 2 a 6 anos e multa para fatos a partir de 4 de maio de 2026. Quem compra algo que, pelo preço muito baixo, pela natureza do bem ou por quem vende, deveria presumir ser de origem criminosa responde por receptação culposa, com pena bem menor. Desde 25 de março de 2026 o juiz não pode mais deixar de aplicar a pena na receptação culposa, porque a Lei 15.358/2026 revogou essa possibilidade.",
      whatIs:
        "Receptação é o crime de quem fica com o produto de um crime cometido por outra pessoa: o celular roubado, a moto furtada, a carga desviada, o cabo de cobre arrancado da rede. O autor do furto ou do roubo responde pelo seu crime; quem compra, guarda, transporta ou revende responde por receptação, mesmo que o autor do crime anterior nunca seja descoberto (art. 180, § 4º). O que separa a receptação dolosa da culposa é o conhecimento: na dolosa a pessoa sabe que a coisa é de crime; na culposa ela não sabe, mas as circunstâncias deveriam ter feito desconfiar.",
      whenYouHaveRight: [
        "Ficar em silêncio e ser acompanhado por advogado no depoimento",
        "Apresentar nota fiscal, recibo, conversas com o vendedor e testemunhas que mostrem a compra de boa-fé",
        "Acordo de não persecução penal na receptação simples e na qualificada, que têm pena mínima menor que 4 anos e não envolvem violência (art. 28-A do CPP)",
        "Na receptação culposa, crime de menor potencial ofensivo, Juizado Especial Criminal, com transação penal e suspensão condicional do processo",
        "Para fatos anteriores a 25 de março de 2026, pedir a aplicação do § 5º do art. 180, já revogado, que permitia ao juiz deixar de aplicar a pena ao réu primário na receptação culposa",
      ],
      documents: [
        "Nota fiscal, recibo ou contrato da compra",
        "Conversas com o vendedor, anúncio e comprovante de pagamento",
        "Documento do veículo e consultas feitas antes da compra, quando for carro ou moto",
        "Nomes de testemunhas da negociação",
        "Boletim de ocorrência, se você mesmo comunicou a desconfiança à polícia",
      ],
      deadlines:
        "A receptação é crime de ação pública incondicionada: não depende de pedido da vítima do crime anterior. Quem descobre que comprou algo de origem criminosa deve procurar orientação logo e não revender nem se desfazer do bem, porque isso pode agravar a situação. Quem é preso em flagrante deve ser apresentado ao juiz em até 24 horas.",
      faq: [
        {
          question: "Qual a pena de receptação em 2026?",
          answer:
            "Receptação simples: reclusão de 2 a 6 anos e multa, para fatos a partir de 4 de maio de 2026 (antes, 1 a 4 anos). Receptação qualificada, praticada no comércio ou na indústria: 3 a 8 anos. Receptação culposa: detenção de 1 mês a 1 ano, ou multa, ou as duas. A pena da simples é aplicada em dobro se o bem é público ou de concessionária de serviço público, e também em fios, cabos e equipamentos de energia, telefonia ou dados.",
        },
        {
          question: "Comprei um celular roubado sem saber. Cometi crime?",
          answer:
            "Se você realmente não sabia e não havia motivo para desconfiar, não há crime. Se o preço era muito abaixo do mercado, o vendedor não tinha nota ou o aparelho veio sem caixa e sem explicação, pode ser receptação culposa (art. 180, § 3º). Guarde a conversa, o comprovante e os dados do vendedor e procure orientação antes de prestar depoimento.",
        },
        {
          question: "O que é receptação culposa?",
          answer:
            "É comprar ou receber coisa que, pela natureza, pela diferença entre o valor e o preço ou pela condição de quem oferece, deveria ser presumida de origem criminosa. A pena é de detenção de 1 mês a 1 ano, ou multa, ou ambas, e o caso vai ao Juizado Especial Criminal, onde cabe transação penal.",
        },
        {
          question: "O juiz ainda pode perdoar a receptação culposa?",
          answer:
            "Para fatos a partir de 25 de março de 2026, não: a Lei 15.358/2026 revogou o § 5º do art. 180, que permitia ao juiz deixar de aplicar a pena ao réu primário na receptação culposa e reduzir a pena na dolosa nos moldes do furto privilegiado. Para fatos anteriores, como a revogação piora a situação do réu, a regra antiga ainda pode ser aplicada.",
        },
        {
          question: "O que é receptação qualificada?",
          answer:
            "É a praticada no exercício de atividade comercial ou industrial, como desmanches, lojas de peças e revendas de celulares, com coisa que o comerciante deve saber ser produto de crime. A pena é de 3 a 8 anos. O comércio irregular ou clandestino, inclusive o feito em casa, conta como atividade comercial (§ 2º).",
        },
        {
          question: "Se o ladrão não for encontrado, existe receptação?",
          answer:
            "Sim. A receptação é punida ainda que o autor do crime anterior seja desconhecido ou não possa ser punido (art. 180, § 4º). Basta provar que a coisa veio de um crime e que quem a recebeu sabia, ou devia presumir, essa origem.",
        },
        {
          question: "Cabe acordo na receptação?",
          answer:
            "Na receptação simples e na qualificada cabe o acordo de não persecução penal, porque não há violência e a pena mínima é menor que 4 anos (art. 28-A do CPP), desde que haja confissão e os demais requisitos. Na culposa, cabem a transação penal e a suspensão condicional do processo. Quem é preso em flagrante por receptação simples não consegue mais fiança na delegacia, porque a pena máxima passou de 4 anos; o pedido vai ao juiz.",
        },
        {
          question: "Como evitar comprar produto de crime?",
          answer:
            "Peça nota fiscal ou documento de origem, desconfie de preço muito abaixo do mercado, de vendedor sem identificação e de aparelho sem caixa ou bloqueado. Em veículos, confira documento, chassi e motor e faça as consultas do Detran antes de pagar. Prefira pagar por transferência identificada, que deixa registro de quem recebeu.",
        },
      ],
      sections: [
        {
          title: "Receptação dolosa, culposa e qualificada",
          paragraphs: [
            "Na receptação dolosa (caput do art. 180), a pessoa sabe que a coisa é produto de crime e mesmo assim compra, recebe, transporta, conduz ou esconde, ou convence alguém de boa-fé a fazer isso. É a forma mais comum nos processos de celulares e motos.",
            "Na qualificada (§ 1º), o comerciante ou industrial adquire, guarda, desmonta, monta, vende ou usa, na sua atividade, coisa que deve saber ser de crime. A lei equipara à atividade comercial o comércio irregular ou clandestino, inclusive o feito dentro de casa (§ 2º). Na culposa (§ 3º), a pessoa não sabe, mas deveria desconfiar pela natureza do bem, pela desproporção entre valor e preço ou pela condição de quem oferece.",
          ],
        },
        {
          title: "As penas depois das leis de 2026",
          paragraphs: [
            "Duas leis de 2026 mudaram a receptação. A Lei 15.358/2026, em vigor desde 25 de março de 2026, revogou o § 5º do art. 180, que permitia ao juiz deixar de aplicar a pena ao réu primário na receptação culposa e aplicar à dolosa a redução do furto privilegiado, e criou aumento de dois terços quando o autor integra organização criminosa ultraviolenta ou milícia. A Lei 15.397/2026, em vigor desde 4 de maio de 2026, elevou a pena da receptação simples para 2 a 6 anos.",
            "Como a lei penal mais grave não volta no tempo, cada regra vale a partir da sua data: para fatos anteriores, a pena da receptação simples continua de 1 a 4 anos, e o antigo § 5º ainda pode ser aplicado aos fatos de antes de 25 de março de 2026. A pena da simples dobra quando a coisa pertence a órgão público, autarquia, empresa pública ou concessionária de serviço público (§ 6º) e quando são fios, cabos ou equipamentos de energia, telefonia ou dados ou cargas de ferrovias e metrôs (§ 7º).",
          ],
        },
        {
          title: "Receptação de animal",
          paragraphs: [
            "Comprar, receber, transportar, guardar ou vender, para produção ou comércio, animal de produção, como boi, porco ou galinha, inteiro ou abatido, ou animal doméstico, sabendo ou devendo saber que é produto de crime, é a receptação de animal (art. 180-A), com pena de reclusão de 3 a 8 anos e multa desde 4 de maio de 2026.",
            "É crime comum no interior, ligado ao furto de gado. Quem compra animais deve exigir a documentação de trânsito e a origem do rebanho, e desconfiar de venda fora dos canais habituais.",
          ],
        },
        {
          title: "Celulares, motos e peças: os casos mais comuns",
          paragraphs: [
            "Muitos processos começam com a polícia encontrando um celular, uma moto ou peças com registro de furto ou roubo. A primeira pergunta será de onde veio o bem. Quem comprou de boa-fé deve ter como mostrar: anúncio, conversa, comprovante de pagamento, recibo, nome e contato do vendedor e testemunhas da negociação.",
            "Preço muito abaixo do mercado, venda na rua sem nota, aparelho sem caixa ou com conta de outra pessoa e moto sem documento são exatamente as circunstâncias que a lei usa para presumir a origem criminosa. Nesses casos, a discussão costuma ser entre a receptação dolosa e a culposa, que têm penas muito diferentes.",
          ],
        },
        {
          title: "Como funciona a defesa",
          paragraphs: [
            "O ponto central é o conhecimento: a acusação precisa mostrar que a pessoa sabia, ou que devia presumir, a origem criminosa. A defesa reúne a prova da compra, a coerência da explicação e o histórico da pessoa, e confere se o bem é mesmo produto de crime e se foi corretamente identificado.",
            "Na receptação simples e na qualificada, o acordo de não persecução penal pode encerrar o caso sem processo, mediante confissão e condições como prestação de serviços. Na culposa, o Juizado Especial Criminal oferece transação penal. Em caso de condenação de até 4 anos, sem violência e sem reincidência em crime doloso, a prisão pode ser trocada por penas alternativas (art. 44 do Código Penal).",
          ],
        },
      ],
    },
    relatedActions: ["crimes-patrimoniais"],
    updatedAt: "2026-11-08",
  },
];

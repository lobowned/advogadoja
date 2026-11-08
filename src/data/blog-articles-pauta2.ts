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

  // ============================================================
  // 17. SAÍDA TEMPORÁRIA (SAIDINHA)
  // Conferido em 08/11/2026 no Planalto: Lei 7.210/1984 (LEP) arts. 112 (com as Leis 14.843/2024,
  // 15.358/2026 e 15.402/2026), 120 a 125 e 146-B; Lei 14.843, de 11/04/2024, e as partes
  // promulgadas após a derrubada do veto (DOU de 13/06/2024). STJ, HC 932.864/SC (Sexta Turma,
  // 2024, Informativo 827); STF, Tema 1.381 da repercussão geral (sem tese localizada em 08/11/2026).
  // ============================================================
  {
    id: "saida-temporaria-saidinha",
    nicheId: "penal",
    slug: "saida-temporaria-saidinha",
    title: "Saída Temporária (Saidinha): Quem Ainda Tem Direito Depois da Lei de 2024",
    metaTitle: "Saidinha (Saída Temporária): Quem Tem Direito em 2026",
    metaDescription:
      "Saída temporária depois da Lei 14.843/2024: só para estudo, requisitos de 1/6 ou 1/4 da pena, quem não tem direito, crimes anteriores e o que decidiu o STJ.",
    keywords: [
      "saidinha",
      "saída temporária",
      "saidinha presos",
      "lei da saidinha",
      "saída temporária requisitos",
      "lei 14.843/2024",
      "saidinha acabou",
    ],
    excerpt:
      "Desde a Lei 14.843/2024, a saída temporária do preso no semiaberto vale só para estudar. Quem cumpre pena por crime hediondo ou com violência ou grave ameaça não tem direito, mas o STJ decidiu que a restrição não alcança crimes anteriores à lei.",
    content: {
      intro:
        "Em resumo: a saída temporária, a chamada saidinha, é a autorização para o preso do regime semiaberto deixar o presídio sem vigilância direta. Desde a Lei 14.843/2024, ela só existe para frequentar curso profissionalizante, supletivo, ensino médio ou superior; acabaram as saídas para visitar a família e para atividades de convívio social. Quem cumpre pena por crime hediondo ou cometido com violência ou grave ameaça não tem direito à saída nem ao trabalho externo sem vigilância. O Superior Tribunal de Justiça decidiu que essas restrições não valem para crimes cometidos antes da lei, e o tema também está no Supremo Tribunal Federal.",
      whatIs:
        "A saída temporária está nos arts. 122 a 125 da Lei de Execução Penal (Lei 7.210/1984). É um benefício do regime semiaberto: o preso sai sem escolta, pode ser fiscalizado por tornozeleira eletrônica se o juiz determinar, e volta no horário fixado. Não se confunde com a permissão de saída (art. 120), que é feita com escolta, vale também no regime fechado e serve para falecimento ou doença grave de familiar próximo e para tratamento médico.",
      whenYouHaveRight: [
        "Estar no regime semiaberto",
        "Ter comportamento adequado, atestado pela direção do presídio (art. 123, I)",
        "Ter cumprido 1/6 da pena, se primário, ou 1/4, se reincidente (art. 123, II); para o STJ, conta o tempo cumprido no regime fechado (Súmula 40)",
        "Estar matriculado em curso profissionalizante, supletivo, ensino médio ou superior na comarca do juízo da execução; a saída dura o tempo necessário às atividades do curso (art. 122, § 3º)",
        "Não cumprir pena por crime hediondo ou com violência ou grave ameaça contra pessoa (art. 122, § 2º), salvo se o crime for anterior à lei, segundo o STJ",
        "Em qualquer regime, permissão de saída com escolta para falecimento ou doença grave de cônjuge, companheira, pais, filhos ou irmãos e para tratamento médico, concedida pelo diretor do presídio (art. 120)",
      ],
      documents: [
        "Atestado de conduta carcerária",
        "Cálculo de pena atualizado do processo de execução",
        "Comprovante de matrícula e de frequência no curso",
        "Comprovante do endereço onde o preso ficará, se o juiz pedir",
        "Cópia das decisões anteriores da execução",
      ],
      deadlines:
        "Não há prazo para pedir: o pedido é feito ao juiz da execução quando os requisitos estão cumpridos, e ele decide em ato motivado, depois de ouvir o Ministério Público e a administração do presídio (art. 123). O benefício é revogado automaticamente se o preso cometer crime doloso, for punido por falta grave, descumprir as condições ou tiver baixo aproveitamento no curso (art. 125).",
      faq: [
        {
          question: "A saidinha acabou?",
          answer:
            "Acabaram as saídas para visitar a família, inclusive nas datas comemorativas, e para atividades de convívio social. Continua a saída para estudar, para quem está no semiaberto e cumpre os requisitos (Lei 14.843/2024).",
        },
        {
          question: "Quem não tem direito à saída temporária?",
          answer:
            "Quem está no regime fechado e quem cumpre pena por crime hediondo ou cometido com violência ou grave ameaça contra pessoa, como roubo, homicídio, estupro e crimes com violência doméstica (art. 122, § 2º, da Lei de Execução Penal). A mesma regra impede o trabalho externo sem vigilância direta.",
        },
        {
          question: "Quem cometeu o crime antes de 2024 ainda pode ter saidinha?",
          answer:
            "Para o Superior Tribunal de Justiça, sim: as restrições da Lei 14.843/2024 são mais graves e não alcançam crimes cometidos antes dela (HC 932.864, Sexta Turma, 2024). O que importa é a data do crime. O Supremo Tribunal Federal reconheceu repercussão geral sobre o assunto (Tema 1.381); antes de pedir, confira se já há tese fixada.",
        },
        {
          question: "Quanto da pena é preciso cumprir?",
          answer:
            "1/6 da pena, se o preso for primário, ou 1/4, se for reincidente, além de comportamento adequado e compatibilidade com os objetivos da pena (art. 123). Para o STJ, o tempo cumprido no regime fechado conta para esse cálculo (Súmula 40).",
        },
        {
          question: "Quantos dias dura a saída temporária?",
          answer:
            "Na saída para estudo, o tempo necessário às atividades do curso (art. 122, § 3º). A regra antiga de até 7 dias, renovável 4 vezes por ano, estava no art. 124, revogado em 2024.",
        },
        {
          question: "O preso usa tornozeleira na saída temporária?",
          answer:
            "Pode usar, se o juiz da execução determinar. A falta de vigilância direta não impede a monitoração eletrônica (art. 122, § 1º, e art. 146-B da Lei de Execução Penal).",
        },
        {
          question: "O que faz o preso perder a saída temporária?",
          answer:
            "Cometer crime doloso, ser punido por falta grave, descumprir as condições da autorização ou ter baixo aproveitamento no curso. Para recuperar o direito, é preciso absolvição, cancelamento da punição ou demonstração de merecimento (art. 125).",
        },
        {
          question: "Saída temporária e permissão de saída são a mesma coisa?",
          answer:
            "Não. A permissão de saída é feita com escolta, vale para presos do fechado, do semiaberto e provisórios, e serve para falecimento ou doença grave de cônjuge, companheira, pais, filhos ou irmãos e para tratamento médico. Quem concede é o diretor do presídio, pelo tempo necessário (arts. 120 e 121). Ela não foi alterada em 2024.",
        },
      ],
      sections: [
        {
          title: "O que mudou com a Lei 14.843/2024",
          paragraphs: [
            "A Lei 14.843/2024, chamada Lei Sargento PM Dias, foi sancionada em 11 de abril de 2024 com duas mudanças imediatas: proibiu a saída temporária e o trabalho externo sem vigilância para condenados por crime hediondo ou com violência ou grave ameaça, e passou a exigir exame criminológico para a progressão de regime. O fim das saídas para visitar a família e para atividades de convívio social havia sido vetado, mas o Congresso derrubou o veto, e essa parte foi publicada em 13 de junho de 2024.",
            "Com isso, das três hipóteses originais do art. 122 sobrou só a frequência a curso. Também foi revogado o art. 124, que fixava saídas de até 7 dias, renováveis 4 vezes por ano, e o intervalo de 45 dias entre elas.",
          ],
        },
        {
          title: "Quem ainda pode sair para estudar",
          paragraphs: [
            "Pode pedir a saída o preso do regime semiaberto, com comportamento adequado, que já cumpriu 1/6 da pena, se primário, ou 1/4, se reincidente, matriculado em curso supletivo profissionalizante, de ensino médio ou superior na comarca do juízo da execução. O tempo de saída é o necessário para as aulas e atividades.",
            "Fica de fora quem cumpre pena por crime hediondo ou cometido com violência ou grave ameaça contra pessoa. O juiz pode impor tornozeleira e outras condições, e o benefício cai automaticamente em caso de novo crime doloso, falta grave, descumprimento ou baixo aproveitamento no curso.",
          ],
        },
        {
          title: "Crimes anteriores à lei",
          paragraphs: [
            "A Constituição só permite que a lei penal volte no tempo para beneficiar o réu (art. 5º, XL). Com base nisso, o Superior Tribunal de Justiça decidiu que as restrições da Lei 14.843/2024 têm natureza material e mais grave e, por isso, não se aplicam a quem cometeu o crime antes dela (HC 932.864, Sexta Turma, 2024). O mesmo raciocínio foi aplicado pelo STJ ao exame criminológico obrigatório: para crimes anteriores, o exame só pode ser exigido por decisão fundamentada do juiz (Súmula 439).",
            "O Supremo Tribunal Federal reconheceu repercussão geral sobre a aplicação da lei a crimes anteriores (Tema 1.381). Como a decisão do STF vale para todos os processos, quem tem pedido em andamento deve conferir se o tema já foi julgado e qual tese foi fixada.",
          ],
        },
        {
          title: "Progressão de regime também ficou mais rígida",
          paragraphs: [
            "Para crimes cometidos a partir de 11 de abril de 2024, a progressão de regime depende de boa conduta e do resultado do exame criminológico (art. 112, § 1º). Em 2026, os percentuais de pena para progredir também mudaram: nos crimes hediondos, a Lei 15.358/2026 elevou o mínimo para 70% da pena no caso do primário, 75% quando há morte e 80% ou 85% para reincidentes em hediondo, valendo para crimes a partir de 25 de março de 2026.",
            "Para os demais crimes, a Lei 15.402/2026 reorganizou a regra: 1/6 da pena como base; 25% para o primário e 30% para o reincidente em crime com violência ou grave ameaça; e 20% para o reincidente nos demais crimes. O cálculo correto depende da data de cada crime e do histórico do preso.",
          ],
        },
        {
          title: "Como pedir e como a defesa atua",
          paragraphs: [
            "O pedido é feito ao juiz da Vara de Execuções Penais, no processo de execução, com o atestado de conduta, o cálculo de pena e a comprovação da matrícula. O juiz ouve o Ministério Público e a administração do presídio e decide de forma motivada. Se negar, cabe agravo em execução.",
            "Nos casos de crime anterior à lei, a defesa sustenta a irretroatividade com base na Constituição e nas decisões do STJ. Também vale conferir o cálculo de pena, as remições por trabalho e estudo e a data-base, que mudam o momento em que cada benefício pode ser pedido.",
          ],
        },
      ],
    },
    relatedActions: ["habeas-corpus"],
    updatedAt: "2026-11-08",
  },

  // ============================================================
  // 13. REGULAMENTAÇÃO DE VISITAS
  // Conferido em 08/11/2026 no Planalto: Código Civil arts. 1.583 a 1.590 (com as Leis 13.058/2014
  // e 14.713/2023); CPC arts. 693, 694 e 699-A; Lei 12.318/2010 arts. 2º, 4º e 6º (com a Lei
  // 14.340/2022); Lei 11.340/2006 art. 22, IV.
  // ============================================================
  {
    id: "regulamentacao-de-visitas",
    nicheId: "familia",
    slug: "regulamentacao-de-visitas",
    title: "Regulamentação de Visitas: Como Funciona, Como Pedir e o Que Fazer se Descumprirem",
    metaTitle: "Regulamentação de Visitas: Como Pedir e se Descumprirem",
    metaDescription:
      "Regulamentação de visitas dos filhos: acordo ou ação na Justiça, como montar a convivência, avós, descumprimento, alienação parental e violência doméstica.",
    keywords: [
      "regulamentação de visitas",
      "regulamentação de visitas como funciona",
      "direito de visita",
      "convivência familiar",
      "visita dos avós",
      "descumprimento de visitas",
      "pai não deixa ver o filho",
    ],
    excerpt:
      "O pai ou a mãe que não mora com o filho tem direito de visitá-lo e tê-lo em sua companhia, conforme o acordo ou o que o juiz fixar (art. 1.589 do Código Civil). Veja como pedir, como montar a convivência e o que fazer se o outro descumprir.",
    content: {
      intro:
        "Em resumo: o pai ou a mãe que não está com a guarda tem direito de visitar o filho e tê-lo em sua companhia, segundo o que combinar com o outro ou o que o juiz fixar, e de fiscalizar sua manutenção e educação (art. 1.589 do Código Civil). Os avós também podem ter visitas fixadas. O caminho mais rápido é um acordo escrito levado ao juiz, que passa a valer como decisão; sem acordo, a regulamentação é pedida em ação de família, com tentativa de mediação. Impedir a convivência sem motivo pode configurar alienação parental. Na guarda compartilhada, a lei manda dividir o tempo com os filhos de forma equilibrada.",
      whatIs:
        "Regulamentação de visitas é a definição de quando e como o filho fica com o pai ou a mãe com quem não mora: dias da semana, fins de semana, férias escolares, feriados, aniversários, Dia das Mães e Dia dos Pais, quem busca e quem leva, contato por telefone e vídeo. Ela existe na guarda unilateral e na compartilhada; na compartilhada, o tempo de convívio deve ser dividido de forma equilibrada, conforme as condições de fato e o interesse dos filhos (art. 1.583, § 2º). A convivência é um direito do filho, e não depende do pagamento de pensão.",
      whenYouHaveRight: [
        "Pai ou mãe que não mora com o filho: visitar, ter o filho em sua companhia e fiscalizar sua manutenção e educação (art. 1.589 do Código Civil)",
        "Avós: pedir a fixação de visitas, que o juiz decide pelo interesse da criança ou do adolescente (art. 1.589, parágrafo único)",
        "Na guarda compartilhada: tempo de convivência dividido de forma equilibrada (art. 1.583, § 2º)",
        "Qualquer dos pais: pedir informações sobre o filho à escola, ao posto de saúde e a qualquer estabelecimento, que é obrigado a responder (art. 1.584, § 6º)",
        "Se o outro dificulta a convivência: pedir ao juiz que amplie o convívio, aplique multa, determine acompanhamento psicológico ou altere a guarda (art. 6º da Lei 12.318/2010)",
        "Mesmo quando há suspeita a ser apurada: garantia mínima de visitação assistida no fórum ou em entidade conveniada, salvo risco iminente à criança (art. 4º, parágrafo único, da Lei 12.318/2010)",
      ],
      documents: [
        "Certidão de nascimento do filho",
        "Documentos pessoais e comprovante de residência",
        "Acordo ou decisão anterior sobre guarda e pensão, se houver",
        "Mensagens e registros das visitas negadas ou descumpridas",
        "Informações da rotina da criança: escola, horários e atividades",
      ],
      deadlines:
        "Não há prazo para pedir a regulamentação: ela pode ser pedida a qualquer tempo e revista quando a rotina do filho ou dos pais mudar. Quando há urgência, como o corte total do contato, o juiz pode fixar visitas provisórias no início do processo; a decisão sobre guarda, mesmo provisória, deve ser tomada de preferência depois de ouvir os dois (art. 1.585). Nas ações de guarda, antes da mediação, o juiz pergunta se há risco de violência doméstica e dá 5 dias para apresentar provas (art. 699-A do CPC).",
      faq: [
        {
          question: "Como funciona a regulamentação de visitas?",
          answer:
            "Os pais definem, por acordo ou por decisão do juiz, os dias e horários de convivência. A lei não traz tabela: é comum combinar fins de semana alternados, um ou dois dias na semana, metade das férias escolares e alternância de feriados e datas especiais, mas o calendário depende da idade e da rotina da criança, da distância entre as casas e do trabalho dos pais.",
        },
        {
          question: "Precisa de advogado para regulamentar visitas?",
          answer:
            "Os pais podem chegar a um acordo com ajuda de advogado, da Defensoria Pública ou dos centros de conciliação do tribunal (Cejusc) e pedir a homologação ao juiz, para que ele vire decisão que pode ser cobrada. Sem acordo, a ação de regulamentação exige advogado ou Defensoria.",
        },
        {
          question: "Os avós podem pedir visitas aos netos?",
          answer:
            "Podem. O direito de visita se estende aos avós, a critério do juiz e de acordo com o interesse da criança ou do adolescente (art. 1.589, parágrafo único, do Código Civil). É o caminho quando os pais impedem o contato sem motivo.",
        },
        {
          question: "Quem não paga pensão perde o direito de visita?",
          answer:
            "Não. Pensão e convivência são independentes: a pensão atrasada se cobra na Justiça, mas não autoriza impedir as visitas, porque o convívio é direito do filho. Do mesmo modo, quem não visita continua obrigado a pagar a pensão.",
        },
        {
          question: "O que fazer se o outro não deixa ver o filho?",
          answer:
            "Registre as tentativas (mensagens, testemunhas), não force a entrada e peça ao juiz o cumprimento do acordo ou da decisão, com multa e, se preciso, outras medidas. Se o impedimento for repetido, pode configurar alienação parental, e o juiz pode ampliar a convivência, aplicar multa, determinar acompanhamento psicológico, alterar a guarda e até inverter a obrigação de levar e buscar a criança (Lei 12.318/2010, art. 6º).",
        },
        {
          question: "E se quem descumpre é quem deveria visitar?",
          answer:
            "O descumprimento sem motivo de cláusula de guarda pode reduzir as prerrogativas de quem descumpre (art. 1.584, § 4º, do Código Civil). Ninguém é obrigado à força a conviver, mas o descumprimento reiterado pode ser levado ao juiz e pesar na revisão da guarda e da convivência.",
        },
        {
          question: "As visitas podem ser suspensas?",
          answer:
            "Em situação de risco à criança, sim. Em violência doméstica, o juiz pode restringir ou suspender as visitas aos filhos menores como medida protetiva, ouvida a equipe multidisciplinar (art. 22, IV, da Lei 11.340/2006). Fora disso, a regra é preservar o convívio, se necessário com visitas assistidas no fórum ou em entidades conveniadas.",
        },
        {
          question: "Com que idade o filho escolhe se quer ir?",
          answer:
            "A lei não fixa idade. A opinião da criança e do adolescente é ouvida e pesa mais conforme a maturidade, mas quem decide é o juiz, pelo interesse do filho, muitas vezes com apoio de psicólogos e assistentes sociais do tribunal.",
        },
      ],
      sections: [
        {
          title: "Visita ou convivência: o que a lei diz",
          paragraphs: [
            "O Código Civil garante ao pai ou à mãe que não tem a guarda o direito de visitar o filho, tê-lo em sua companhia e fiscalizar sua manutenção e educação (art. 1.589). Na guarda compartilhada, que é a regra quando os dois estão aptos e não há risco de violência doméstica, o tempo de convívio deve ser dividido de forma equilibrada, e a cidade-base de moradia é a que melhor atende aos interesses dos filhos (arts. 1.583 e 1.584).",
            "Mesmo na guarda unilateral, quem não está com a criança tem o dever de supervisionar seus interesses e pode pedir informações e prestação de contas sobre saúde e educação (art. 1.583, § 5º). Escolas, hospitais e outros estabelecimentos são obrigados a informar qualquer dos pais, sob pena de multa diária (art. 1.584, § 6º).",
          ],
        },
        {
          title: "Como montar o calendário",
          paragraphs: [
            "Um bom acordo responde a perguntas práticas: quais dias da semana, como ficam os fins de semana, como dividir as férias de julho e de dezembro, Natal e Ano-Novo, aniversários, Dia das Mães e Dia dos Pais, quem busca e quem leva, horários de ligação ou videochamada e regras para viagens.",
            "Quanto mais detalhado, menos briga depois. Para bebês e crianças pequenas, costuma-se começar com períodos mais curtos e frequentes, ampliados com o tempo. Se os pais moram em cidades diferentes, as férias e os feriados prolongados ganham peso, e o custo do deslocamento também pode ser combinado.",
          ],
        },
        {
          title: "Acordo ou ação na Justiça",
          paragraphs: [
            "Com acordo, os pais podem levá-lo ao juiz para homologação, por advogado, pela Defensoria Pública ou pelo Cejusc. Sem acordo, a regulamentação é pedida em ação de família, que começa com a tentativa de solução consensual, com apoio de mediadores e de profissionais de outras áreas (arts. 693 e 694 do CPC).",
            "Nas ações de guarda, antes da audiência de mediação, o juiz pergunta às partes e ao Ministério Público se há risco de violência doméstica ou familiar e dá 5 dias para provas ou indícios (art. 699-A do CPC). Havendo esse risco, a guarda compartilhada não é aplicada (art. 1.584, § 2º, do Código Civil).",
          ],
        },
        {
          title: "Quando o outro descumpre",
          paragraphs: [
            "Se a decisão ou o acordo homologado não é cumprido, é possível pedir ao juiz o cumprimento, com multa e outras medidas para garantir a convivência. Guarde mensagens, registre as datas e evite discussões na porta da casa, principalmente na frente da criança.",
            "Dificultar o contato, omitir informações escolares e médicas, apresentar denúncia falsa ou mudar para longe sem justificativa para afastar o filho do outro são exemplos de alienação parental (art. 2º da Lei 12.318/2010). Reconhecida a prática, o juiz pode advertir, ampliar a convivência do genitor prejudicado, aplicar multa, determinar acompanhamento psicológico, alterar a guarda e fixar cautelarmente o domicílio da criança (art. 6º).",
          ],
        },
        {
          title: "Violência doméstica e visitas",
          paragraphs: [
            "A proteção da criança vem antes do calendário. Em violência doméstica contra a mulher, o juiz pode restringir ou suspender as visitas aos filhos menores como medida protetiva de urgência, ouvida a equipe multidisciplinar (art. 22, IV, da Lei 11.340/2006).",
            "Quando há acusação a ser apurada, a lei procura não cortar o vínculo de uma vez: garante visitação assistida mínima, no fórum ou em entidades conveniadas, salvo risco iminente à integridade da criança atestado por profissional (art. 4º, parágrafo único, da Lei 12.318/2010).",
          ],
        },
      ],
    },
    relatedActions: ["regulamentacao-visita", "alienacao-parental", "guarda"],
    updatedAt: "2026-11-08",
  },

  // ============================================================
  // 14. REGIME DE BENS
  // Conferido em 08/11/2026 no Planalto: Código Civil arts. 1.240-A, 1.639 a 1.641, 1.647, 1.657
  // a 1.668, 1.672, 1.687, 1.688, 1.725, 1.829 e 1.830 (sem alterações de 2025 ou 2026 no texto
  // compilado). STF, Tema 1.236 (ARE 1.309.642, 2024), e Súmula 377.
  // ============================================================
  {
    id: "regime-de-bens",
    nicheId: "familia",
    slug: "regime-de-bens",
    title: "Regime de Bens no Casamento e na União Estável: Tipos, Escolha, Divórcio e Herança",
    metaTitle: "Regime de Bens: Comunhão Parcial, Universal e Separação",
    metaDescription:
      "Regime de bens no casamento e na união estável: comunhão parcial, universal, separação e participação final, maiores de 70 anos, mudança de regime e herança.",
    keywords: [
      "regime de bens",
      "regime de bens casamento",
      "comunhão parcial de bens",
      "comunhão universal de bens",
      "separação total de bens",
      "regime de bens união estável",
      "pacto antenupcial",
      "separação obrigatória 70 anos",
    ],
    excerpt:
      "Sem pacto antenupcial, o casamento e a união estável seguem a comunhão parcial: divide-se o que foi comprado durante a união, e ficam de fora os bens anteriores, as heranças e as doações. Veja os outros regimes, a regra dos maiores de 70 anos e como mudar o regime.",
    content: {
      intro:
        "Em resumo: o regime de bens define o que é de cada um e o que é dos dois no casamento e na união estável. Se o casal não escolher nada, vale a comunhão parcial: entra na divisão o que foi adquirido de forma onerosa durante a união, e ficam de fora os bens de antes, as heranças e as doações (arts. 1.640 e 1.658 a 1.660 do Código Civil). Para escolher outro regime é preciso pacto antenupcial em escritura pública ou, na união estável, contrato escrito. Para quem se casa com mais de 70 anos, a lei impõe a separação de bens, mas o STF decidiu em 2024 que o casal pode afastá-la por escritura pública. O regime pode ser mudado depois do casamento, com autorização judicial.",
      whatIs:
        "Regime de bens é o conjunto de regras sobre o patrimônio do casal: quem é dono do quê, quem administra, o que precisa da assinatura do outro e como fica a divisão no divórcio ou na morte. O Código Civil prevê a comunhão parcial, a comunhão universal, a participação final nos aquestos e a separação de bens, que pode ser convencional, escolhida pelo casal, ou obrigatória, imposta pela lei em certos casos. O regime começa a valer na data do casamento (art. 1.639, § 1º).",
      whenYouHaveRight: [
        "Escolher o regime antes do casamento, por pacto antenupcial em escritura pública; a comunhão parcial basta ser indicada no processo de habilitação (art. 1.640, parágrafo único)",
        "Na união estável, escolher o regime por contrato escrito; sem contrato, vale a comunhão parcial (art. 1.725)",
        "Mudar o regime depois de casado, com pedido motivado dos dois ao juiz, sem prejudicar terceiros (art. 1.639, § 2º)",
        "Maiores de 70 anos: afastar a separação obrigatória por escritura pública (STF, Tema 1.236, 2024)",
        "Exigir a assinatura do cônjuge para vender ou hipotecar imóvel, prestar fiança ou aval, salvo na separação absoluta (art. 1.647)",
        "No divórcio ou na dissolução da união estável, receber a meação dos bens comuns conforme o regime",
      ],
      documents: [
        "Certidão de casamento atualizada, que informa o regime",
        "Pacto antenupcial registrado ou contrato de união estável, se houver",
        "Matrículas dos imóveis e documentos dos veículos",
        "Extratos de contas, investimentos e FGTS na data da separação",
        "Comprovantes de herança ou doação recebida, para excluir da divisão",
        "Contratos de financiamento e de dívidas do casal",
      ],
      deadlines:
        "O pacto antenupcial só tem efeito perante terceiros depois de registrado no Registro de Imóveis do domicílio do casal (art. 1.657). A partilha pode ser feita depois do divórcio, mas o ideal é não deixar para depois: o tempo dificulta a prova, trava vendas e financiamentos e, se um dos dois abandona o lar, quem fica no imóvel urbano de até 250 m² pode adquirir a parte do outro após 2 anos de posse exclusiva, se não tiver outro imóvel (usucapião familiar, art. 1.240-A).",
      faq: [
        {
          question: "Qual é o regime de bens se o casal não escolher nenhum?",
          answer:
            "A comunhão parcial de bens, tanto no casamento (art. 1.640 do Código Civil) quanto na união estável sem contrato escrito (art. 1.725).",
        },
        {
          question: "O que entra na divisão na comunhão parcial?",
          answer:
            "Entram os bens adquiridos de forma onerosa durante a união, mesmo em nome de um só, os ganhos eventuais, como prêmios, as benfeitorias em bens particulares e os frutos, como aluguéis, recebidos no período (art. 1.660). Ficam de fora os bens de antes, os recebidos por herança ou doação e os comprados com o dinheiro deles, as dívidas anteriores, os bens de uso pessoal e os instrumentos de profissão (art. 1.659).",
        },
        {
          question: "O salário entra na divisão?",
          answer:
            "O direito ao salário de cada um não se divide (art. 1.659, VI), mas o que foi comprado ou poupado com ele durante a união entra na comunhão. O STJ também considera comunicáveis os depósitos de FGTS feitos durante o casamento.",
        },
        {
          question: "Herança entra na divisão do divórcio?",
          answer:
            "Na comunhão parcial, não: o que um recebe por herança ou doação é só dele, assim como o que comprar com esse dinheiro (art. 1.659, I e II). Na comunhão universal, a herança entra, salvo se veio com cláusula de incomunicabilidade (art. 1.668, I).",
        },
        {
          question: "Quem tem mais de 70 anos pode escolher o regime?",
          answer:
            "A lei impõe a separação obrigatória para quem se casa com mais de 70 anos (art. 1.641, II), mas o STF decidiu em 2024 que o casal pode afastar essa regra por escritura pública, no casamento e na união estável (Tema 1.236). Para quem já se casou sob a separação obrigatória, o caminho é o pedido de mudança de regime ao juiz, e o resultado depende de como o tribunal aplica a decisão do STF.",
        },
        {
          question: "Na separação obrigatória, nada se divide?",
          answer:
            "Pela Súmula 377 do STF, os bens adquiridos durante o casamento sob a separação obrigatória podem ser divididos; o STJ exige que quem pede prove que contribuiu para a compra. Na separação convencional, escolhida em pacto, cada um fica com o que está em seu nome.",
        },
        {
          question: "Casado em separação total de bens herda?",
          answer:
            "Herda. Na separação convencional não há meação, mas o cônjuge é herdeiro e, segundo o STJ, concorre com os filhos na herança. Já na separação obrigatória e na comunhão universal o cônjuge não concorre com os descendentes, e na comunhão parcial só concorre se o falecido deixou bens particulares (art. 1.829, I).",
        },
        {
          question: "Dá para mudar o regime de bens depois de casado?",
          answer:
            "Dá, com pedido motivado dos dois cônjuges ao juiz, que verifica as razões e protege os direitos de credores e outros terceiros (art. 1.639, § 2º). Na união estável, a mudança é feita por novo contrato escrito, e o STJ não admite que ele produza efeitos para trás.",
        },
        {
          question: "Precisa da assinatura do cônjuge para vender um imóvel?",
          answer:
            "Sim, salvo no regime da separação absoluta. Sem autorização do outro, nenhum dos cônjuges pode vender ou hipotecar imóvel, discutir esses bens na Justiça, prestar fiança ou aval ou doar bens comuns (art. 1.647).",
        },
      ],
      sections: [
        {
          title: "Comunhão parcial: o regime da maioria",
          paragraphs: [
            "Na comunhão parcial, cada um mantém como seus os bens que tinha antes, os que recebe por herança ou doação e os que compra com esse dinheiro. O que o casal adquire de forma onerosa durante a união é dos dois, ainda que esteja em nome de um só (arts. 1.658 a 1.660). Num imóvel financiado antes do casamento e pago durante a união, por exemplo, as parcelas pagas no período tendem a ser divididas.",
            "As dívidas contraídas para atender às despesas da família e à administração dos bens comuns são suportadas pelos bens do casal (art. 1.664). Já as dívidas anteriores ao casamento e as que vêm de ato ilícito ficam com quem as fez, salvo se revertidas em proveito do casal (art. 1.659, III e IV).",
          ],
        },
        {
          title: "Comunhão universal",
          paragraphs: [
            "Na comunhão universal, comunicam-se todos os bens presentes e futuros e também as dívidas, inclusive os bens que cada um tinha antes do casamento (art. 1.667). Ficam de fora, entre outros, os bens recebidos com cláusula de incomunicabilidade, as dívidas anteriores que não reverteram em proveito comum e os bens de uso pessoal (art. 1.668).",
            "Esse regime exige pacto antenupcial por escritura pública. Foi o regime padrão até 1977, por isso é comum em casamentos antigos, o que pesa em divórcios e inventários de casais mais velhos.",
          ],
        },
        {
          title: "Separação de bens: convencional e obrigatória",
          paragraphs: [
            "Na separação convencional, escolhida em pacto antenupcial, cada um administra e pode vender livremente os próprios bens, e os dois contribuem para as despesas do casal na proporção dos seus rendimentos, salvo outra regra no pacto (arts. 1.687 e 1.688). Na separação obrigatória, a lei impõe o regime a quem se casa sem observar as causas suspensivas, a quem depende de autorização judicial para casar e a quem tem mais de 70 anos (art. 1.641).",
            "Na separação obrigatória, a Súmula 377 do STF permite dividir os bens adquiridos durante o casamento, e o STJ exige prova do esforço comum. Para maiores de 70 anos, o STF decidiu em 2024 que a separação obrigatória pode ser afastada por manifestação expressa do casal em escritura pública (Tema 1.236).",
          ],
        },
        {
          title: "Participação final nos aquestos",
          paragraphs: [
            "Pouco usado, esse regime funciona como separação durante o casamento e como comunhão no fim: cada um tem patrimônio próprio, mas, na dissolução, tem direito à metade dos bens adquiridos pelo casal de forma onerosa durante a união (art. 1.672). Exige pacto antenupcial e uma apuração contábil cuidadosa no divórcio.",
          ],
        },
        {
          title: "União estável",
          paragraphs: [
            "Na união estável, vale a comunhão parcial, salvo contrato escrito entre os companheiros (art. 1.725). O contrato pode escolher outro regime e pode ser feito por escritura pública ou instrumento particular; a mudança posterior vale para o futuro.",
            "Para a herança, o STF equiparou o companheiro ao cônjuge ao declarar inconstitucional a regra antiga que dava menos direitos ao companheiro. Por isso, união estável sem prova organizada costuma gerar disputas no inventário: guardar documentos que mostrem o início da convivência evita problemas.",
          ],
        },
        {
          title: "Herança: o regime também conta",
          paragraphs: [
            "Na morte de um dos cônjuges, primeiro se separa a meação, a metade dos bens comuns que já pertence ao viúvo ou à viúva conforme o regime; depois vem a herança. O cônjuge concorre com os filhos na herança, salvo se era casado na comunhão universal ou na separação obrigatória, ou na comunhão parcial sem bens particulares do falecido (art. 1.829, I). Sem descendentes, concorre com os pais do falecido e, sem eles, herda tudo.",
            "O direito à herança depende de o casal não estar separado judicialmente nem separado de fato há mais de 2 anos na data da morte, salvo prova de que a convivência se tornou impossível sem culpa do sobrevivente (art. 1.830).",
          ],
        },
      ],
    },
    relatedActions: ["divorcio-litigioso", "uniao-estavel", "divorcio-consensual"],
    updatedAt: "2026-11-08",
  },

  // ============================================================
  // 16. APOSENTADORIA DA PESSOA COM DEFICIÊNCIA
  // Conferido em 08/11/2026: LC 142/2013 (texto no Planalto), EC 103/2019 art. 22, e a página do
  // serviço "Solicitar Aposentadoria da Pessoa com Deficiência por Tempo de Contribuição" no
  // gov.br (última modificação em 12/08/2026).
  // ============================================================
  {
    id: "aposentadoria-pessoa-com-deficiencia",
    nicheId: "previdenciario",
    slug: "aposentadoria-pessoa-com-deficiencia",
    title: "Aposentadoria da Pessoa com Deficiência: Tempo, Idade, Valor e Como Pedir",
    metaTitle: "Aposentadoria da Pessoa com Deficiência: Regras e Valor",
    metaDescription:
      "Aposentadoria da pessoa com deficiência (LC 142/2013): tempo de 20 a 33 anos conforme o grau, por idade aos 55 ou 60 anos, valor, perícia e como pedir no Meu INSS.",
    keywords: [
      "aposentadoria pessoa com deficiência",
      "aposentadoria pcd",
      "aposentadoria da pessoa com deficiência por idade",
      "aposentadoria da pessoa com deficiência por tempo de contribuição",
      "lc 142",
      "deficiência leve moderada grave aposentadoria",
    ],
    excerpt:
      "A pessoa com deficiência se aposenta com menos tempo de contribuição: de 20 a 33 anos, conforme o grau, ou por idade aos 60 (homem) e 55 (mulher) com 15 anos de contribuição. A reforma de 2019 manteve essas regras e o cálculo próprio.",
    content: {
      intro:
        "Em resumo: a Lei Complementar 142/2013 garante ao segurado do INSS com deficiência uma aposentadoria com menos tempo de contribuição, conforme o grau: deficiência grave, 25 anos (homem) ou 20 (mulher); moderada, 29 ou 24; leve, 33 ou 28. Há também a aposentadoria por idade, aos 60 anos (homem) ou 55 (mulher), com 15 anos de contribuição na condição de pessoa com deficiência. A reforma da Previdência manteve essas regras, inclusive o cálculo (art. 22 da EC 103/2019). O grau é definido pela perícia médica e pela avaliação social do INSS, e o pedido é feito pelo Meu INSS.",
      whatIs:
        "Para essa aposentadoria, pessoa com deficiência é quem tem impedimento de longo prazo de natureza física, mental, intelectual ou sensorial que, diante das barreiras do dia a dia, pode dificultar a participação plena na sociedade em igualdade de condições (art. 2º da LC 142/2013). Não basta ter uma doença ou um laudo: a avaliação é médica e funcional, e olha como a pessoa vive e trabalha. Não se confunde com o BPC/LOAS, que é benefício assistencial sem contribuição, nem com a aposentadoria por incapacidade, que é para quem não pode mais trabalhar.",
      whenYouHaveRight: [
        "Deficiência grave: 25 anos de contribuição (homem) ou 20 (mulher), sem idade mínima (art. 3º, I, da LC 142/2013)",
        "Deficiência moderada: 29 anos (homem) ou 24 (mulher) (art. 3º, II)",
        "Deficiência leve: 33 anos (homem) ou 28 (mulher) (art. 3º, III)",
        "Por idade: 60 anos (homem) ou 55 (mulher), com 15 anos de contribuição e deficiência comprovada no mesmo período, qualquer que seja o grau (art. 3º, IV)",
        "Quem ficou com deficiência depois de começar a contribuir, ou mudou de grau, tem o tempo ajustado proporcionalmente (art. 7º)",
        "Receber outra aposentadoria do INSS, se ela for mais vantajosa (art. 9º, V)",
      ],
      documents: [
        "Documento de identificação com foto e CPF",
        "Laudos, exames e relatórios médicos que mostrem a deficiência e desde quando ela existe",
        "Carteira de trabalho, carnês e extrato do CNIS",
        "Documentos que mostrem as barreiras no trabalho e na rotina (adaptações, recursos de acessibilidade, declarações)",
        "Procuração no modelo do INSS ou pública, se outra pessoa fizer o pedido",
      ],
      deadlines:
        "Não há prazo para pedir: o direito existe quando os requisitos são cumpridos. Pelo gov.br, a análise leva em média 45 dias corridos, e durante ela o segurado pode ser chamado para perícia médica e avaliação social. Se o pedido for negado, o recurso administrativo é de 30 dias da ciência da decisão, e também é possível ir à Justiça.",
      faq: [
        {
          question: "Quem tem direito à aposentadoria da pessoa com deficiência?",
          answer:
            "O segurado do INSS que, na data do pedido, é pessoa com deficiência e tem o tempo de contribuição exigido para o seu grau (grave, moderado ou leve), ou que atingiu 60 anos (homem) ou 55 (mulher) com 15 anos de contribuição na condição de pessoa com deficiência (art. 3º da LC 142/2013).",
        },
        {
          question: "Precisa de idade mínima?",
          answer:
            "Na aposentadoria por tempo de contribuição da pessoa com deficiência, não: basta o tempo exigido para o grau. A reforma de 2019, que criou idade mínima para as aposentadorias comuns, manteve as regras da LC 142/2013 para a pessoa com deficiência (art. 22 da EC 103/2019).",
        },
        {
          question: "Qual é o valor da aposentadoria da pessoa com deficiência?",
          answer:
            "Na aposentadoria por tempo, 100% do salário de benefício; na por idade, 70% mais 1% por grupo de 12 contribuições, até 100% (art. 8º da LC 142/2013). O fator previdenciário só é aplicado se aumentar o valor (art. 9º, I). O valor nunca fica abaixo do salário mínimo.",
        },
        {
          question: "Como o INSS define se a deficiência é leve, moderada ou grave?",
          answer:
            "Por perícia própria, com avaliação médica e funcional feita pelo perito médico e pelo serviço social do INSS (arts. 4º e 5º da LC 142/2013). A avaliação considera as limitações e as barreiras que a pessoa enfrenta no trabalho, em casa e na vida social, não só o diagnóstico.",
        },
        {
          question: "Quem ficou com deficiência depois de anos de trabalho tem direito?",
          answer:
            "Tem, com o tempo ajustado: os anos trabalhados sem deficiência e com deficiência são convertidos proporcionalmente, conforme o grau (art. 7º da LC 142/2013). A data de início da deficiência é fixada pela perícia, por isso laudos antigos e prontuários fazem diferença.",
        },
        {
          question: "Dá para somar com tempo de atividade especial?",
          answer:
            "No mesmo período, não: a redução por deficiência não se acumula com a redução por atividade insalubre ou perigosa (art. 10 da LC 142/2013). Períodos diferentes podem ser analisados separadamente, e o INSS deve conceder a aposentadoria mais vantajosa (art. 9º, V).",
        },
        {
          question: "Qual a diferença para o BPC/LOAS?",
          answer:
            "O BPC é benefício assistencial de um salário mínimo para pessoa com deficiência ou idosa de baixa renda, sem exigir contribuição, e não gera 13º nem pensão por morte. A aposentadoria da pessoa com deficiência exige contribuição, segue as regras de cálculo da LC 142/2013, tem 13º e pode gerar pensão para os dependentes.",
        },
        {
          question: "Como pedir?",
          answer:
            "Pelo Meu INSS (site ou aplicativo), em Do que você precisa?, digitando Aposentadoria da pessoa com deficiência por tempo ou por idade, ou pelo telefone 135. Durante a análise, o segurado pode ser chamado para perícia médica e avaliação social, e podem ser pedidos documentos sobre a data de início da deficiência e o tempo de contribuição.",
        },
      ],
      sections: [
        {
          title: "Os requisitos por grau de deficiência",
          paragraphs: [
            "A LC 142/2013 reduz o tempo de contribuição conforme o grau da deficiência: grave, 25 anos para o homem e 20 para a mulher; moderada, 29 e 24; leve, 33 e 28. Não há idade mínima nessa modalidade. A carência, número mínimo de contribuições mensais, é a mesma das demais aposentadorias, de 180 contribuições, e a página do serviço no gov.br informa que é preciso ter ao menos 180 meses de trabalho na condição de pessoa com deficiência.",
            "Na aposentadoria por idade, o grau não importa: bastam 60 anos (homem) ou 55 (mulher), 15 anos de contribuição e a deficiência comprovada durante esse mesmo período. Para quem passou a ter deficiência depois de começar a contribuir, ou teve o grau alterado, os anos são convertidos proporcionalmente (art. 7º).",
          ],
        },
        {
          title: "A reforma de 2019 manteve as regras",
          paragraphs: [
            "A Emenda Constitucional 103/2019 criou idade mínima e mudou o cálculo das aposentadorias comuns, mas determinou que a aposentadoria da pessoa com deficiência continue a ser concedida na forma da LC 142/2013, inclusive quanto aos critérios de cálculo, até que nova lei trate do assunto (art. 22).",
            "Por isso, na modalidade por tempo, o valor é de 100% do salário de benefício, e na modalidade por idade, de 70% mais 1% por grupo de 12 contribuições, até 100% (art. 8º). Para quem tem tempo em outra modalidade, o INSS deve comparar e conceder a mais vantajosa (art. 9º, V).",
          ],
        },
        {
          title: "Como funciona a avaliação",
          paragraphs: [
            "O grau é definido por perícia do INSS, com avaliação médica e funcional (arts. 4º e 5º). Na prática, o perito médico e o assistente social entrevistam o segurado e analisam como as limitações e as barreiras afetam o trabalho, a casa e a vida social. A primeira avaliação fixa também a data provável de início da deficiência, que define quanto tempo conta como tempo com deficiência (art. 6º, § 1º).",
            "Para períodos anteriores à LC 142/2013, a lei não aceita prova só por testemunhas (art. 6º, § 2º). Laudos antigos, prontuários, exames, receitas, adaptações no posto de trabalho e registros de contratação como pessoa com deficiência são as provas que mais ajudam.",
          ],
        },
        {
          title: "Como pedir e o que fazer se negarem",
          paragraphs: [
            "O pedido é feito pelo Meu INSS, no site ou no aplicativo, ou pelo telefone 135. Antes, confira o CNIS: vínculos e contribuições que faltam devem ser corrigidos com carteira de trabalho, holerites e carnês. Reúna os documentos médicos em ordem cronológica, para mostrar desde quando existe a deficiência.",
            "Se o INSS negar ou fixar um grau menor que o real, cabe recurso administrativo em 30 dias, ou ação na Justiça Federal, onde a deficiência e o grau são examinados por perito judicial. Quem já tem tempo para outra aposentadoria pode comparar as opções antes de decidir.",
          ],
        },
      ],
    },
    relatedActions: ["aposentadoria", "bpc-loas"],
    updatedAt: "2026-11-08",
  },

  // ============================================================
  // 19. QUALIDADE DE SEGURADO E CARÊNCIA
  // Conferido em 08/11/2026 no Planalto: Lei 8.213/1991 arts. 15, 24 a 27-A e 151 (texto
  // compilado); Lei 10.666/2003 art. 3º. STF, ADIs 2.110 e 2.111 (2024), sobre a carência do
  // salário-maternidade da contribuinte individual e da facultativa.
  // ============================================================
  {
    id: "qualidade-de-segurado-carencia",
    nicheId: "previdenciario",
    slug: "qualidade-de-segurado-carencia",
    title: "Qualidade de Segurado e Carência no INSS: Período de Graça, Prazos e Como Não Perder o Direito",
    metaTitle: "Qualidade de Segurado e Carência no INSS: Guia Simples",
    metaDescription:
      "Qualidade de segurado e carência no INSS: período de graça de 12, 24 ou 36 meses, carência de cada benefício, doenças que dispensam carência e como recuperar.",
    keywords: [
      "qualidade de segurado",
      "carência inss",
      "período de graça inss",
      "perda da qualidade de segurado",
      "qualidade de segurado inss",
      "carência auxílio-doença",
      "quantos meses de carência",
    ],
    excerpt:
      "Qualidade de segurado é estar protegido pelo INSS; carência é o número mínimo de contribuições de cada benefício. Quem para de contribuir mantém a proteção por 12 meses, que podem chegar a 36, e alguns benefícios não exigem carência.",
    content: {
      intro:
        "Em resumo: para receber quase todo benefício do INSS é preciso ter qualidade de segurado, ou seja, estar coberto pela Previdência na data do fato (doença, parto, prisão, morte), e cumprir a carência, que é o número mínimo de contribuições mensais exigido para cada benefício. Quem para de contribuir não perde a proteção na hora: há o período de graça, em regra de 12 meses, que pode chegar a 24 para quem tem mais de 120 contribuições e a 36 para o desempregado (art. 15 da Lei 8.213/1991). A carência é de 12 contribuições no auxílio por incapacidade e na aposentadoria por invalidez, 24 no auxílio-reclusão e 180 nas aposentadorias; pensão por morte e auxílio-acidente não exigem carência (arts. 25 e 26).",
      whatIs:
        "Qualidade de segurado é a condição de quem está coberto pelo INSS: quem trabalha com carteira assinada, quem contribui como autônomo, MEI ou facultativo e quem está recebendo benefício. Carência é outra coisa: é o número mínimo de contribuições mensais que a lei exige para cada benefício (art. 24). Os dois requisitos são analisados juntos, e é possível ter um sem o outro: alguém pode ter muitos anos de contribuição e ter perdido a qualidade de segurado, ou estar coberto sem ter ainda a carência suficiente.",
      whenYouHaveRight: [
        "Manter a qualidade de segurado sem contribuir, sem limite de prazo, enquanto recebe benefício, exceto o auxílio-acidente (art. 15, I)",
        "Período de graça de 12 meses depois da última contribuição para quem deixou de trabalhar ou está suspenso ou licenciado sem salário (art. 15, II)",
        "Mais 12 meses, até 24, para quem tem mais de 120 contribuições sem perda da qualidade de segurado (art. 15, § 1º)",
        "Mais 12 meses para o desempregado, o que pode chegar a 36 meses (art. 15, § 2º); a Justiça aceita provar o desemprego por outros meios além do registro no órgão do Ministério do Trabalho",
        "Contribuinte facultativo: 6 meses depois da última contribuição (art. 15, VI)",
        "Benefícios sem carência: pensão por morte, salário-família, auxílio-acidente e auxílio por incapacidade ou aposentadoria por invalidez decorrentes de acidente de qualquer natureza, doença do trabalho ou doença grave da lista legal (art. 26)",
      ],
      documents: [
        "Extrato do CNIS, no Meu INSS",
        "Carteira de trabalho e contracheques",
        "Guias de recolhimento pagas (GPS) ou DAS do MEI",
        "Comprovantes de seguro-desemprego ou de cadastro no Sine, para estender o período de graça",
        "Laudos médicos com a data de início da doença, nos pedidos por incapacidade",
      ],
      deadlines:
        "A qualidade de segurado se perde no dia seguinte ao vencimento da contribuição do mês posterior ao fim do período de graça (art. 15, § 4º). Exemplo: quem saiu do emprego em março de 2025, sem os acréscimos, mantém a qualidade até março de 2026 e a perde em 16 de maio de 2026, dia seguinte ao vencimento da contribuição de abril. Contribuições de autônomo, facultativo e segurado especial pagas com atraso não contam para a carência (art. 27, II).",
      faq: [
        {
          question: "O que é qualidade de segurado?",
          answer:
            "É estar coberto pelo INSS. Tem qualidade de segurado quem contribui (empregado, doméstico, autônomo, MEI, facultativo), quem recebe benefício e quem está no período de graça, que é o prazo em que a proteção continua mesmo sem contribuição. Durante esse prazo, o segurado conserva todos os seus direitos (art. 15, § 3º).",
        },
        {
          question: "Quanto tempo continuo segurado depois que paro de contribuir?",
          answer:
            "Em regra, 12 meses. São 24 meses para quem tem mais de 120 contribuições sem ter perdido a qualidade, e há mais 12 meses para quem comprova desemprego, o que pode chegar a 36. O facultativo tem 6 meses, o preso tem 12 meses depois da soltura e quem recebe benefício, exceto o auxílio-acidente, mantém a qualidade enquanto receber (art. 15).",
        },
        {
          question: "O que é carência e quantas contribuições preciso?",
          answer:
            "É o número mínimo de contribuições mensais para cada benefício: 12 para o auxílio por incapacidade temporária (auxílio-doença) e a aposentadoria por invalidez, 24 para o auxílio-reclusão e 180 para as aposentadorias por idade, por tempo e especial (art. 25). Pensão por morte, salário-família e auxílio-acidente não exigem carência (art. 26).",
        },
        {
          question: "Perdi a qualidade de segurado. E agora?",
          answer:
            "Volte a contribuir: a proteção recomeça com a nova filiação. Para auxílio por incapacidade, aposentadoria por invalidez, salário-maternidade e auxílio-reclusão, é preciso cumprir, a partir da volta, metade da carência exigida, como 6 contribuições no auxílio por incapacidade (art. 27-A). Nas aposentadorias, as contribuições antigas continuam valendo: a perda da qualidade não é considerada na aposentadoria por tempo e especial, nem na por idade para quem já tem a carência (art. 3º da Lei 10.666/2003).",
        },
        {
          question: "Doença grave dispensa carência?",
          answer:
            "Sim, no auxílio por incapacidade e na aposentadoria por invalidez, se a doença começou depois da filiação ao INSS. A lei cita tuberculose ativa, hanseníase, alienação mental, esclerose múltipla, hepatopatia grave, câncer, cegueira, paralisia irreversível e incapacitante, cardiopatia grave, Parkinson, espondiloartrose anquilosante, nefropatia grave, doença de Paget avançada, aids e contaminação por radiação (arts. 26, II, e 151). Acidente de qualquer natureza e doença do trabalho também dispensam carência.",
        },
        {
          question: "Contribuição paga em atraso conta para a carência?",
          answer:
            "Para o autônomo (contribuinte individual), o facultativo e o segurado especial, a carência conta a partir da primeira contribuição paga em dia; as pagas com atraso de meses anteriores não entram na carência (art. 27, II). Para o empregado e o doméstico, conta desde a filiação, porque o recolhimento é obrigação do empregador (art. 27, I).",
        },
        {
          question: "Autônoma precisa de carência para o salário-maternidade?",
          answer:
            "A lei previa 10 contribuições para a contribuinte individual e a facultativa (art. 25, III), mas o STF considerou inconstitucional essa exigência ao julgar as ADIs 2.110 e 2.111, em 2024. Ela precisa ter qualidade de segurada na data do parto, da adoção ou do afastamento.",
        },
        {
          question: "Como sei se ainda tenho qualidade de segurado?",
          answer:
            "Consulte o extrato do CNIS no Meu INSS e veja a data da última contribuição. A partir dela, conte o período de graça que se aplica ao seu caso e confira se há mais de 120 contribuições sem interrupção longa e se você tem prova de desemprego. Vínculos sem data de saída ou contribuições com pendência devem ser corrigidos antes do pedido.",
        },
      ],
      sections: [
        {
          title: "Qualidade de segurado e período de graça",
          paragraphs: [
            "Quem contribui está coberto pelo INSS. Quando as contribuições param, a proteção continua por um tempo, o período de graça: 12 meses para quem deixou de trabalhar ou está suspenso ou licenciado sem salário; 24 meses se já pagou mais de 120 contribuições sem perder a qualidade de segurado; e mais 12 meses se comprovar desemprego (art. 15). Quem recebe benefício, exceto o auxílio-acidente, mantém a qualidade sem limite de prazo.",
            "O facultativo, como a dona de casa ou o estudante que contribui por conta própria, tem 6 meses. O preso mantém a qualidade até 12 meses depois de ser solto, e quem presta serviço militar, até 3 meses depois do licenciamento. Durante o período de graça, a pessoa conserva todos os direitos perante a Previdência (art. 15, § 3º).",
          ],
        },
        {
          title: "Como contar o fim do período de graça",
          paragraphs: [
            "A perda não acontece no último dia do período de graça. A lei dá um prazo extra: a qualidade de segurado só se perde no dia seguinte ao vencimento da contribuição do mês posterior ao fim desse período (art. 15, § 4º). Como a contribuição do autônomo vence no dia 15 do mês seguinte, a conta costuma terminar no dia 16.",
            "Exemplo: quem saiu do emprego em março de 2025, sem direito aos acréscimos, tem período de graça até março de 2026. A contribuição de abril de 2026 venceria em 15 de maio de 2026, uma sexta-feira, e a qualidade de segurado se perde em 16 de maio de 2026. Quando o dia 15 cai em fim de semana ou feriado, o vencimento passa para o dia útil seguinte, e a conta muda junto. Uma doença que comece antes dessa data ainda é coberta, se houver carência ou se ela for dispensada.",
          ],
        },
        {
          title: "Carência de cada benefício",
          paragraphs: [
            "A carência é contada em contribuições mensais (art. 24): 12 para o auxílio por incapacidade temporária e a aposentadoria por invalidez; 180 para as aposentadorias por idade, por tempo e especial; 24 para o auxílio-reclusão; e 10 para o salário-maternidade da contribuinte individual, da facultativa e da segurada especial, regra que o STF derrubou em 2024 para a contribuinte individual e a facultativa (art. 25).",
            "Não exigem carência a pensão por morte, o salário-família, o auxílio-acidente, o salário-maternidade da empregada, da doméstica e da avulsa, e o auxílio por incapacidade ou a aposentadoria por invalidez quando vêm de acidente de qualquer natureza, de doença profissional ou do trabalho ou de doença grave da lista legal (art. 26).",
          ],
        },
        {
          title: "Perdi a qualidade de segurado: como recuperar",
          paragraphs: [
            "Basta voltar a contribuir para recuperar a proteção. Para auxílio por incapacidade, aposentadoria por invalidez, salário-maternidade e auxílio-reclusão, a lei exige, a partir da nova filiação, metade da carência do benefício: 6 contribuições para o auxílio por incapacidade e 12 para o auxílio-reclusão (art. 27-A). Para o autônomo, conta a partir do primeiro pagamento feito em dia.",
            "Nas aposentadorias, o tempo antigo não se perde. A perda da qualidade de segurado não é considerada na aposentadoria por tempo de contribuição e na especial, e na aposentadoria por idade também não, desde que a pessoa já tenha a carência exigida (art. 3º da Lei 10.666/2003).",
          ],
        },
        {
          title: "Antes de pedir: confira o CNIS",
          paragraphs: [
            "Quase toda negativa por falta de qualidade de segurado ou de carência começa com dados errados no CNIS: vínculo sem data de saída, salário faltando, contribuição de MEI paga com atraso, recolhimento abaixo do mínimo. Confira o extrato no Meu INSS e corrija as pendências com carteira de trabalho, holerites e guias pagas.",
            "Nos pedidos por incapacidade, a data de início da doença fixada pela perícia decide se havia qualidade de segurado e carência naquele momento. Laudos e exames antigos, com data, ajudam a mostrar que a doença começou quando a pessoa ainda estava coberta.",
          ],
        },
      ],
    },
    relatedActions: ["auxilio-doenca", "aposentadoria", "pensao-morte"],
    updatedAt: "2026-11-08",
  },

  // ============================================================
  // 18. ATESTADO MÉDICO NO TRABALHO
  // Conferido em 08/11/2026: Lei 605/1949 art. 6º; CLT art. 473 (com as Leis 14.457/2022, 15.156/2025
  // e 15.377/2026); Lei 8.213/1991 art. 60 (com a Lei 15.265/2025); Decreto 3.048/1999 art. 75;
  // Lei 5.081/1966 art. 6º, III; Resolução CFM 2.381/2024 (DOU de 02/07/2024), arts. 2º, 4º e 5º,
  // que revogou a Resolução CFM 1.658/2002; notícia do Ministério da Previdência sobre o novo
  // Atestmed (22/04/2026, atualizada em 26/10/2026).
  // ============================================================
  {
    id: "atestado-medico-trabalho",
    nicheId: "trabalhista",
    slug: "atestado-medico-trabalho",
    title: "Atestado Médico no Trabalho: O Que a Empresa Pode Exigir, CID, Prazos e Quando o INSS Paga",
    metaTitle: "Atestado Médico no Trabalho: Regras, CID e 15 Dias",
    metaDescription:
      "Atestado médico no trabalho: o que deve conter, se a empresa pode exigir CID, declaração de comparecimento, acompanhamento de filho e quando o INSS paga.",
    keywords: [
      "atestado médico trabalho",
      "empresa pode recusar atestado",
      "atestado com cid",
      "declaração de comparecimento",
      "atestado de acompanhamento",
      "atestado de dentista",
      "atestado mais de 15 dias",
    ],
    excerpt:
      "A falta por doença comprovada por atestado é justificada e não pode ser descontada. A empresa paga os primeiros 15 dias; a partir do 16º, o INSS. Veja o que o atestado deve conter, quando a empresa pode recusar e o que vale para acompanhar filho.",
    content: {
      intro:
        "Em resumo: a falta por doença comprovada por atestado é justificada e não pode ser descontada do salário nem do descanso semanal (art. 6º da Lei 605/1949). Só médicos e dentistas, dentro da sua área, podem dar atestado de afastamento do trabalho (Resolução CFM 2.381/2024 e Lei 5.081/1966). A empresa paga os primeiros 15 dias de afastamento; a partir do 16º, quem paga é o INSS, como auxílio por incapacidade temporária (art. 60 da Lei 8.213/1991). O diagnóstico (CID) só vai no atestado se o paciente pedir: a empresa não pode exigir. Declaração de comparecimento e acompanhamento de familiares só abonam a falta nos casos da lei, como levar filho de até 6 anos ao médico uma vez por ano, ou se a empresa ou a convenção coletiva aceitarem.",
      whatIs:
        "Atestado médico de afastamento é o documento em que o médico registra o atendimento e quantos dias o paciente precisa ficar longe do trabalho para se recuperar. Pelas regras do Conselho Federal de Medicina, todo documento médico deve trazer, no mínimo, nome e CRM do médico, nome e CPF do paciente, data de emissão, assinatura (qualificada, se for digital, ou assinatura e carimbo, se for em papel) e contato e endereço do médico (Resolução CFM 2.381/2024, arts. 2º e 4º). É diferente da declaração de comparecimento, que só confirma que a pessoa esteve no atendimento, e do atestado de acompanhamento, dado a quem acompanha um paciente.",
      whenYouHaveRight: [
        "Ter a falta por doença justificada, sem desconto do salário nem do descanso semanal remunerado, com atestado (art. 6º, § 1º, f, da Lei 605/1949)",
        "Receber da empresa o salário dos primeiros 15 dias de afastamento e, a partir do 16º, o benefício do INSS (art. 60 da Lei 8.213/1991)",
        "Não ser obrigado a revelar o diagnóstico: o CID só entra no atestado a pedido do paciente, por dever legal ou justa causa (Resolução CFM 2.381/2024, art. 5º, § 3º)",
        "Usar atestado de dentista para justificar falta ao emprego (art. 6º, III, da Lei 5.081/1966)",
        "Faltar sem desconto para acompanhar a esposa ou companheira grávida em até 6 consultas ou exames e para levar filho de até 6 anos ao médico 1 vez por ano (art. 473, X e XI, da CLT)",
        "Faltar até 3 dias a cada 12 meses para exames preventivos de câncer (art. 473, XII, da CLT); desde 2026, a empresa deve informar esse direito (§ 3º)",
      ],
      documents: [
        "Atestado com nome e CRM do médico (ou CRO do dentista), data, dias de afastamento e assinatura",
        "Comprovante da entrega à empresa: protocolo, e-mail ou mensagem",
        "Para o INSS, a partir do 16º dia: atestado ou laudo com a doença ou o CID e o período estimado de repouso",
        "Exames e receitas que mostrem o tratamento",
        "Convenção coletiva da categoria, que pode trazer regras sobre prazo de entrega e acompanhamento de familiares",
      ],
      deadlines:
        "A lei não fixa prazo para entregar o atestado: valem o regulamento da empresa e a convenção coletiva, por isso entregue o quanto antes e guarde comprovante. Afastamentos pelo mesmo motivo dentro de 60 dias se somam para a conta dos 15 dias pagos pela empresa (Decreto 3.048/1999, art. 75, §§ 3º a 5º). Passados 15 dias, peça o benefício pelo Meu INSS; se o pedido for feito com mais de 30 dias de afastamento, o benefício é pago a partir da data do pedido (art. 60, § 1º, da Lei 8.213/1991).",
      faq: [
        {
          question: "A empresa é obrigada a aceitar atestado médico?",
          answer:
            "Em regra, sim: a doença comprovada é motivo legal de falta justificada (art. 6º da Lei 605/1949). A lei traz uma ordem de preferência entre médicos (do INSS, do Sesi ou Sesc, da empresa, do serviço público de saúde e, na falta deles, de escolha do empregado), e a empresa com serviço médico próprio ou conveniado pode examinar o empregado e é quem abona os primeiros 15 dias (art. 60, § 4º, da Lei 8.213/1991). A recusa precisa de motivo concreto, como atestado incompleto, ilegível ou com indício de falsidade.",
        },
        {
          question: "A empresa pode exigir CID no atestado?",
          answer:
            "Não pode obrigar. Pelas regras do Conselho Federal de Medicina, o médico só coloca o diagnóstico, em código ou por extenso, a pedido do paciente, com a concordância escrita no atestado, por dever legal ou por justa causa (Resolução CFM 2.381/2024, art. 5º, §§ 3º e 4º). Dados de saúde são dados sensíveis pela Lei Geral de Proteção de Dados. Para o INSS, porém, o atestado precisa informar a doença ou o CID.",
        },
        {
          question: "Declaração de comparecimento abona a falta?",
          answer:
            "Só se a empresa aceitar ou a convenção coletiva previr. A declaração, emitida pela clínica ou pelo médico sem recomendação de afastamento, confirma que você esteve no atendimento; o CFM diz que ela pode justificar a falta com a anuência do empregador (Resolução CFM 2.381/2024, art. 4º, III). A Lei 605/1949 também permite à empresa abonar ausências a seu critério.",
        },
        {
          question: "Atestado para acompanhar filho ou familiar vale?",
          answer:
            "A lei garante 1 dia por ano para levar filho de até 6 anos ao médico e o tempo necessário para acompanhar a esposa ou companheira grávida em até 6 consultas ou exames (art. 473, X e XI, da CLT). Fora disso, o atestado de acompanhamento abona a falta se a empresa aceitar ou se a convenção coletiva da categoria garantir.",
        },
        {
          question: "Atestado de dentista vale para faltar ao trabalho?",
          answer:
            "Vale. A lei permite ao cirurgião-dentista atestar estados de saúde da sua área, inclusive para justificar faltas ao emprego (art. 6º, III, da Lei 5.081/1966), e o CFM reconhece o atestado odontológico para afastamento. Para o INSS, o atestado pode ter assinatura com CRM, CRO ou RMS.",
        },
        {
          question: "Atestado de mais de 15 dias: quem paga?",
          answer:
            "A empresa paga os primeiros 15 dias; a partir do 16º, o INSS paga o auxílio por incapacidade temporária, pedido pelo Meu INSS (art. 60 da Lei 8.213/1991). Desde março de 2026, atestados que recomendam até 90 dias podem ser analisados só por documentos, sem perícia presencial, no novo Atestmed.",
        },
        {
          question: "Atestados seguidos da mesma doença se somam?",
          answer:
            "Sim. Se o empregado volta a se afastar pelo mesmo motivo dentro de 60 dias, os dias se somam para a conta dos 15 que a empresa paga, e o INSS passa a pagar a partir do dia seguinte ao 15º. Se o novo afastamento vem dentro de 60 dias do fim de um benefício do INSS, o benefício anterior é prorrogado, sem novos 15 dias pagos pela empresa (Decreto 3.048/1999, art. 75).",
        },
        {
          question: "Posso ser demitido estando de atestado?",
          answer:
            "Durante o auxílio por incapacidade do INSS, o contrato fica suspenso e, segundo o TST, a dispensa sem justa causa só produz efeitos depois da alta. A dispensa de quem tem doença grave que cause estigma ou preconceito é presumida discriminatória (Súmula 443 do TST), e o acidente de trabalho com afastamento de mais de 15 dias e auxílio do INSS dá estabilidade de 12 meses depois da alta (art. 118 da Lei 8.213/1991). Demissão logo após atestado, ligada à doença, pode ser questionada na Justiça.",
        },
        {
          question: "Atestado falso dá justa causa?",
          answer:
            "Pode dar: apresentar atestado falso é falta grave por improbidade (art. 482, a, da CLT) e também é crime de uso de documento falso. O médico que detecta indício de falsidade deve comunicar ao Conselho Regional de Medicina (Resolução CFM 2.381/2024, art. 7º).",
        },
      ],
      sections: [
        {
          title: "O que a lei garante",
          paragraphs: [
            "A Lei 605/1949 trata a doença comprovada como motivo justificado de falta, o que impede o desconto do dia e do descanso semanal remunerado (art. 6º, § 1º, f). A mesma lei lista outros motivos justificados, como as faltas da CLT e as ausências que a empresa aceitar a seu critério.",
            "A CLT (art. 473) garante faltas sem desconto em situações específicas: até 2 dias por falecimento de familiar próximo, 3 dias por casamento, 5 dias por nascimento, adoção ou guarda compartilhada, 1 dia por ano para doação de sangue, até 6 consultas ou exames para acompanhar a esposa ou companheira grávida, 1 dia por ano para levar filho de até 6 anos ao médico e até 3 dias por ano para exames preventivos de câncer, entre outras.",
          ],
        },
        {
          title: "O que o atestado precisa ter",
          paragraphs: [
            "Pela Resolução CFM 2.381/2024, só médicos e dentistas, estes na sua área, podem emitir atestado para afastamento do trabalho. O documento deve ter nome e CRM do médico, nome e CPF do paciente, data de emissão, a quantidade de dias de afastamento, assinatura e contato e endereço do médico. O atestado digital vale, com assinatura eletrônica qualificada.",
            "O diagnóstico não é obrigatório para a empresa: o médico só o escreve, em CID ou por extenso, a pedido do paciente, com a concordância expressa no próprio atestado, por dever legal ou justa causa. Para o INSS, ao contrário, o atestado ou laudo precisa informar a doença ou o CID e o período estimado de repouso, além de estar legível e sem rasuras.",
          ],
        },
        {
          title: "Quando a empresa pode recusar",
          paragraphs: [
            "A Lei 605/1949 prevê uma ordem de preferência para o atestado: médico da Previdência, do Sesi ou Sesc, da empresa ou por ela indicado, de órgão público de saúde e, na falta deles, médico escolhido pelo empregado (art. 6º, § 2º). A empresa com serviço médico próprio ou conveniado é quem faz o exame e abona os primeiros 15 dias (art. 60, § 4º, da Lei 8.213/1991).",
            "Recusar um atestado regular, sem motivo, para descontar o dia ou punir o empregado é abusivo e pode ser cobrado na Justiça do Trabalho. Já o atestado incompleto, ilegível, rasurado ou com indício de falsidade pode ser questionado, e o empregado pode ser encaminhado ao médico da empresa.",
          ],
        },
        {
          title: "Declaração de comparecimento e acompanhamento",
          paragraphs: [
            "A declaração de comparecimento é emitida pela clínica ou pelo médico sem recomendação de afastamento; ela prova que você esteve no atendimento e, pelo CFM, serve de justificativa se o empregador concordar. O atestado de acompanhamento confirma a presença de quem acompanha um paciente, com a data e a quantidade de dias.",
            "Fora dos casos garantidos pela CLT, como o filho de até 6 anos e a esposa ou companheira grávida, a aceitação desses documentos depende da empresa ou da convenção coletiva. Vale ler a convenção da sua categoria: muitas trazem regras mais favoráveis para acompanhar filhos, pais idosos ou pessoas com deficiência.",
          ],
        },
        {
          title: "Mais de 15 dias: o INSS entra",
          paragraphs: [
            "A partir do 16º dia de afastamento, o empregado deve pedir o auxílio por incapacidade temporária no Meu INSS. Desde março de 2026, com o novo Atestmed, atestados que recomendam até 90 dias podem ser analisados só pelos documentos; acima disso, ou se o documento não bastar, há perícia. Se o pedido for feito com mais de 30 dias de afastamento, o benefício é pago a partir da data do pedido.",
            "Se a doença ou o acidente tem relação com o trabalho, a empresa deve emitir a Comunicação de Acidente de Trabalho (CAT), e o benefício acidentário garante estabilidade de 12 meses depois da alta (art. 118 da Lei 8.213/1991). Durante o benefício do INSS, o contrato fica suspenso.",
          ],
        },
      ],
    },
    relatedActions: ["acidente-trabalho", "demissao-sem-justa-causa"],
    updatedAt: "2026-11-08",
  },

  // ============================================================
  // 20. PRISÃO PREVENTIVA (reserva da pauta 2)
  // Conferido em 08/11/2026 no Planalto: CPP arts. 282, 310 (com as Leis 15.272/2025 e 15.358/2026),
  // 311 a 316, 318 a 319; Lei 15.272, de 26/11/2025 (DOU de 27/11/2025); Lei 7.960/1989 arts. 1º e 2º;
  // Código Penal art. 42 (detração). STF, ADIs 6.581 e 6.582, sobre a revisão a cada 90 dias.
  // ============================================================
  {
    id: "prisao-preventiva",
    nicheId: "penal",
    slug: "prisao-preventiva",
    title: "Prisão Preventiva: Quando Cabe, Quanto Tempo Dura, Revisão a Cada 90 Dias e Como Revogar",
    metaTitle: "Prisão Preventiva: Quando Cabe, Prazo e Como Revogar",
    metaDescription:
      "Prisão preventiva: requisitos dos arts. 312 e 313 do CPP, critérios da Lei 15.272/2025, revisão a cada 90 dias, prisão domiciliar, cautelares e como pedir a revogação.",
    keywords: [
      "prisão preventiva",
      "prisão preventiva quanto tempo dura",
      "prisão preventiva requisitos",
      "revogação da prisão preventiva",
      "prisão preventiva 90 dias",
      "diferença entre prisão preventiva e temporária",
      "prisão domiciliar",
    ],
    excerpt:
      "A prisão preventiva é a prisão antes da condenação, decretada pelo juiz quando há prova do crime, indício de autoria e perigo concreto na liberdade da pessoa. Não tem prazo fixo, mas precisa ser revista a cada 90 dias e só cabe se medidas mais leves não bastarem.",
    content: {
      intro:
        "Em resumo: a prisão preventiva é a prisão antes da condenação, que o juiz decreta a pedido do Ministério Público, do querelante, do assistente ou da polícia, quando há prova do crime, indício suficiente de autoria e perigo concreto gerado pela liberdade da pessoa (arts. 311 e 312 do CPP). Em regra, só cabe em crime doloso com pena máxima acima de 4 anos, para reincidente ou em violência doméstica (art. 313). Não tem prazo fixo, mas o juiz precisa revisá-la a cada 90 dias (art. 316). Desde a Lei 15.272/2025, a lei proíbe expressamente a preventiva baseada só na gravidade abstrata do crime e lista os critérios de periculosidade que o juiz deve examinar. Ela só é decretada quando medidas mais leves, como monitoração eletrônica, não bastam (art. 282, § 6º).",
      whatIs:
        "Prisão preventiva é uma medida cautelar: não é pena, não pressupõe culpa e serve para proteger a investigação, o processo ou a sociedade de um risco concreto. Pode ser decretada em qualquer fase da investigação ou do processo (art. 311) e pode nascer da conversão da prisão em flagrante na audiência de custódia (art. 310). É diferente da prisão temporária, que só existe na investigação, para crimes de uma lista, por 5 dias prorrogáveis por mais 5 (Lei 7.960/1989), ou 30 mais 30 nos crimes hediondos.",
      whenYouHaveRight: [
        "Decisão motivada, com fatos novos ou contemporâneos que justifiquem a prisão; a decisão genérica ou que só repete a lei não vale (arts. 312, § 2º, e 315 do CPP)",
        "Não ter a prisão decretada só pela gravidade abstrata do crime (art. 312, § 4º, incluído pela Lei 15.272/2025)",
        "Preferência por medidas cautelares diversas da prisão, como comparecimento em juízo, proibição de contato, recolhimento noturno e monitoração eletrônica (arts. 282, § 6º, e 319)",
        "Revisão da necessidade da prisão a cada 90 dias (art. 316, parágrafo único)",
        "Prisão domiciliar no lugar da preventiva para gestante, mãe ou responsável por criança de até 12 anos ou pessoa com deficiência, maior de 80 anos e pessoa extremamente debilitada, nas condições dos arts. 318 e 318-A",
        "Ter o tempo da prisão preventiva descontado da pena, se houver condenação (detração, art. 42 do Código Penal)",
      ],
      documents: [
        "Comprovante de residência fixa",
        "Carteira de trabalho, contrato ou declaração do empregador",
        "Certidões de nascimento de filhos que dependem do preso",
        "Laudos médicos, se houver doença grave",
        "Certidões de antecedentes criminais",
        "Cópia da decisão que decretou a prisão e dos autos",
      ],
      deadlines:
        "A prisão em flagrante deve ser analisada pelo juiz em até 24 horas, na audiência de custódia, por videoconferência (art. 310). Depois de decretada a preventiva, o juiz deve revisar a necessidade da prisão a cada 90 dias, em decisão fundamentada (art. 316, parágrafo único). O pedido de revogação pode ser feito a qualquer tempo, e o habeas corpus não tem prazo: cabe sempre que a prisão for ilegal ou se prolongar demais.",
      faq: [
        {
          question: "Quanto tempo dura a prisão preventiva?",
          answer:
            "A lei não fixa prazo máximo. A prisão dura enquanto existirem os motivos que a justificaram, mas o juiz tem de revisá-la a cada 90 dias, em decisão fundamentada (art. 316, parágrafo único, do CPP). Para o STF, a falta dessa revisão não solta o preso automaticamente, mas obriga o juiz a reavaliar a prisão. Demora excessiva do processo pode ser levada ao tribunal por habeas corpus.",
        },
        {
          question: "Quais são os requisitos da prisão preventiva?",
          answer:
            "Prova da existência do crime, indício suficiente de autoria e perigo gerado pela liberdade da pessoa, para garantir a ordem pública ou econômica, a instrução do processo ou a aplicação da lei penal (art. 312). Em regra, o crime deve ser doloso com pena máxima acima de 4 anos, ou a pessoa ser reincidente em crime doloso, ou o caso envolver violência doméstica para garantir medidas protetivas (art. 313).",
        },
        {
          question: "O que mudou com a Lei 15.272/2025?",
          answer:
            "A lei, em vigor desde 27 de novembro de 2025, passou a listar o que o juiz deve considerar para avaliar a periculosidade (modo de agir, uso reiterado de violência, participação em organização criminosa, drogas e armas apreendidas e risco de reiteração) e proibiu a preventiva baseada só na gravidade abstrata do crime (art. 312, §§ 3º e 4º). Também listou circunstâncias que recomendam converter o flagrante em preventiva, como reiteração, violência, fuga e soltura anterior em audiência de custódia (art. 310, § 5º).",
        },
        {
          question: "O juiz pode decretar a preventiva por conta própria?",
          answer:
            "Não. Desde o Pacote Anticrime, a preventiva depende de pedido do Ministério Público, do querelante ou do assistente, ou de representação da autoridade policial (art. 311), e o STF e o STJ aplicam essa regra também à conversão do flagrante em preventiva. O juiz pode, porém, revogar a prisão por conta própria (art. 316).",
        },
        {
          question: "Como pedir a revogação da prisão preventiva?",
          answer:
            "Com pedido ao juiz do caso mostrando que os motivos deixaram de existir ou nunca existiram de forma concreta, e que medidas mais leves bastam: residência fixa, trabalho, filhos dependentes, ausência de antecedentes, fim da instrução. Se o juiz negar ou a decisão for genérica, cabe habeas corpus ao tribunal.",
        },
        {
          question: "Quem pode ir para a prisão domiciliar?",
          answer:
            "O juiz pode substituir a preventiva pela domiciliar para maior de 80 anos, pessoa extremamente debilitada por doença grave, quem é imprescindível aos cuidados de criança de até 6 anos ou pessoa com deficiência, gestante, mulher com filho de até 12 anos e homem que seja o único responsável por filho dessa idade (art. 318). Para a gestante e a mãe ou responsável por criança ou pessoa com deficiência, a substituição é obrigatória se o crime não teve violência ou grave ameaça e não foi contra o próprio filho ou dependente (art. 318-A).",
        },
        {
          question: "Qual a diferença entre prisão preventiva e temporária?",
          answer:
            "A temporária só existe durante o inquérito, para crimes de uma lista da Lei 7.960/1989, e tem prazo de 5 dias prorrogáveis por mais 5, ou 30 mais 30 nos crimes hediondos. A preventiva pode ocorrer na investigação ou no processo, para crimes que cabem no art. 313 do CPP, sem prazo fixo, com revisão a cada 90 dias.",
        },
        {
          question: "O tempo de preventiva conta na pena?",
          answer:
            "Conta. Se houver condenação, o tempo de prisão provisória é descontado da pena (detração, art. 42 do Código Penal), o que também conta para a progressão de regime.",
        },
      ],
      sections: [
        {
          title: "Quando a prisão preventiva cabe",
          paragraphs: [
            "O juiz pode decretar a preventiva quando há prova da existência do crime, indício suficiente de autoria e perigo gerado pela liberdade da pessoa, para garantir a ordem pública ou econômica, a instrução criminal ou a aplicação da lei penal (art. 312). A decisão precisa apontar fatos concretos, novos ou contemporâneos; não vale repetir a lei, usar conceitos vagos ou motivos que serviriam para qualquer caso (art. 315).",
            "Em regra, só cabe em crime doloso com pena máxima acima de 4 anos, para quem é reincidente em crime doloso ou em violência doméstica, para garantir medidas protetivas, além de hipóteses específicas, como crimes de organização criminosa ultraviolenta e crimes sexuais contra criança ou adolescente (art. 313). Nunca cabe para antecipar a pena nem como consequência automática da investigação ou da denúncia (art. 313, § 2º), e não cabe se as provas indicam legítima defesa, estado de necessidade ou cumprimento de dever legal (art. 314).",
          ],
        },
        {
          title: "O que mudou em 2025",
          paragraphs: [
            "A Lei 15.272/2025 incluiu no CPP os critérios que o juiz deve considerar ao avaliar a periculosidade: o modo de agir, inclusive o uso reiterado de violência ou grave ameaça e a premeditação; a participação em organização criminosa; a natureza, a quantidade e a variedade de drogas, armas ou munições apreendidas; e o risco de reiteração, inclusive por outros inquéritos e processos (art. 312, § 3º). Ao mesmo tempo, proibiu a preventiva com base em alegações de gravidade abstrata do crime (§ 4º).",
            "Na audiência de custódia, a lei passou a apontar circunstâncias que recomendam converter o flagrante em preventiva, como reiteração, violência ou grave ameaça, soltura anterior em audiência de custódia, crime cometido durante outro inquérito ou processo, fuga ou risco às provas (art. 310, § 5º), e exige que o juiz examine esses pontos na decisão (§ 6º). Em crimes violentos, sexuais, hediondos ou ligados a organização criminosa armada, o Ministério Público ou a polícia deve pedir a coleta de material genético do preso (art. 310-A).",
          ],
        },
        {
          title: "Medidas cautelares no lugar da prisão",
          paragraphs: [
            "A prisão é a última opção: só cabe quando não for possível substituí-la por outra medida, e o juiz precisa explicar por que as alternativas não bastam (art. 282, § 6º). As medidas do art. 319 incluem comparecimento periódico em juízo, proibição de frequentar lugares, proibição de contato com determinada pessoa, proibição de sair da comarca, recolhimento domiciliar à noite e nas folgas, suspensão de função pública, fiança e monitoração eletrônica.",
            "Descumprir uma medida cautelar pode levar à substituição por outra mais rígida ou, em último caso, à preventiva (arts. 282, § 4º, e 312, § 1º). Por isso, quem é solto com condições deve cumpri-las à risca e guardar comprovantes de comparecimento.",
          ],
        },
        {
          title: "Revisão a cada 90 dias e excesso de prazo",
          paragraphs: [
            "Decretada a preventiva, o juiz deve revisar a necessidade da prisão a cada 90 dias, de ofício, em decisão fundamentada (art. 316, parágrafo único). O STF decidiu que, se a revisão não acontecer no prazo, a soltura não é automática, mas o juiz deve ser provocado a reavaliar a prisão.",
            "A lei não fixa prazo máximo para a preventiva, mas o processo de réu preso deve andar com prioridade. Atrasos que não se devem à defesa podem caracterizar constrangimento ilegal por excesso de prazo, que se combate com habeas corpus.",
          ],
        },
        {
          title: "Como a defesa atua",
          paragraphs: [
            "Na audiência de custódia e no pedido de revogação, pesam documentos de residência, trabalho, filhos dependentes, saúde e antecedentes. A defesa mostra por que medidas mais leves são suficientes e se a decisão se apoiou em fatos concretos ou só na gravidade do crime, o que a Lei 15.272/2025 proibiu.",
            "Se o juiz mantiver a prisão sem fundamento concreto, cabe habeas corpus ao Tribunal de Justiça e, depois, aos tribunais superiores. A família pode ajudar reunindo os documentos e acompanhando as datas de revisão.",
          ],
        },
      ],
    },
    relatedActions: ["habeas-corpus", "defesa-flagrante"],
    updatedAt: "2026-11-08",
  },

  // ============================================================
  // 21. EMPREGADA DOMÉSTICA (reserva da pauta 2)
  // Conferido em 08/11/2026 no Planalto: Lei Complementar 150/2015 arts. 1º a 4º, 10, 12 a 14,
  // 17 a 19, 21 a 24, 26 a 30-A (Capítulo I-A incluído pela Lei 15.455/2026), 34 e 43.
  // ============================================================
  {
    id: "empregada-domestica-direitos",
    nicheId: "trabalhista",
    slug: "empregada-domestica-direitos",
    title: "Empregada Doméstica: Direitos, Deveres, FGTS, Férias e o Que Muda na Demissão",
    metaTitle: "Empregada Doméstica: Direitos, FGTS, Férias e Demissão",
    metaDescription:
      "Direitos da empregada doméstica (LC 150/2015): doméstica ou diarista, jornada, horas extras, férias, FGTS, aviso prévio, seguro-desemprego e justa causa.",
    keywords: [
      "empregada doméstica direitos",
      "direitos da empregada doméstica",
      "empregada doméstica direitos e deveres",
      "diarista ou doméstica",
      "fgts empregada doméstica",
      "seguro-desemprego doméstica",
      "lei complementar 150",
    ],
    excerpt:
      "Quem trabalha numa casa de família mais de 2 dias por semana é empregada doméstica e tem carteira assinada, jornada de 8 horas, horas extras, férias de 30 dias, 13º, FGTS e seguro-desemprego (Lei Complementar 150/2015). Até 2 dias por semana, é diarista.",
    content: {
      intro:
        "Em resumo: é empregada doméstica quem presta serviço contínuo, pessoal e pago a uma pessoa ou família, no âmbito da casa, sem finalidade de lucro, por mais de 2 dias por semana (art. 1º da Lei Complementar 150/2015). Até 2 dias por semana, é diarista, sem vínculo de emprego. A doméstica tem carteira assinada, jornada de até 8 horas por dia e 44 por semana, horas extras com pelo menos 50%, registro de horário obrigatório, férias de 30 dias com 1/3, 13º, FGTS, depósito mensal de 3,2% para a indenização na demissão, aviso prévio proporcional e seguro-desemprego de um salário mínimo por até 3 meses. É proibido contratar menor de 18 anos para trabalho doméstico.",
      whatIs:
        "A Lei Complementar 150/2015 regula o trabalho de quem cuida da casa e da família: faxina, cozinha, cuidado de crianças, idosos ou pessoas com deficiência, e também motorista, caseiro e jardineiro da residência, desde que o serviço seja para a família, sem fins lucrativos. O empregador recolhe tudo numa guia única, o Simples Doméstico, pelo eSocial: INSS do empregado e do empregador, seguro contra acidentes, FGTS de 8% e os 3,2% da indenização (art. 34). Se a casa usa o trabalho num negócio, como pensão ou restaurante, a relação deixa de ser doméstica e segue a CLT comum.",
      whenYouHaveRight: [
        "Carteira assinada e registro de horário por meio manual, mecânico ou eletrônico (art. 12)",
        "Jornada de até 8 horas por dia e 44 por semana, com hora extra de pelo menos 50% (art. 2º); compensação só por acordo escrito, com as primeiras 40 horas extras do mês pagas (art. 2º, §§ 4º e 5º)",
        "Intervalo de 1 a 2 horas para refeição, que pode cair para 30 minutos por acordo escrito (art. 13)",
        "Adicional noturno de pelo menos 20% entre 22h e 5h, com hora noturna de 52 minutos e 30 segundos (art. 14)",
        "Férias de 30 dias com 1/3, que o empregador pode dividir em até 2 períodos, um de pelo menos 14 dias (art. 17)",
        "13º salário, descanso semanal, feriados e vale-transporte, que pode ser pago em dinheiro mediante recibo (art. 19)",
        "FGTS de 8% e depósito mensal de 3,2% para a indenização na demissão sem justa causa (arts. 21, 22 e 34)",
        "Aviso prévio de 30 dias, mais 3 por ano de serviço, até 90 (art. 23)",
        "Seguro-desemprego de 1 salário mínimo por até 3 meses, se dispensada sem justa causa com 15 meses de trabalho doméstico nos últimos 24 (arts. 26 e 28)",
        "Não sofrer desconto por alimentação, vestuário, higiene ou moradia no local de trabalho (art. 18)",
      ],
      documents: [
        "Carteira de trabalho, física ou digital, com o registro",
        "Recibos de salário, de férias e de 13º",
        "Registro de horário (folha de ponto ou aplicativo)",
        "Extrato do FGTS no aplicativo e guias do eSocial",
        "Mensagens com o empregador sobre horários, folgas e pagamentos",
        "Termo de rescisão, se houve demissão",
      ],
      deadlines:
        "O seguro-desemprego da doméstica deve ser pedido de 7 a 90 dias depois da dispensa (art. 29). Para cobrar direitos na Justiça do Trabalho, o prazo é de 2 anos depois do fim do contrato, alcançando os últimos 5 anos (art. 43). As férias devem ser concedidas nos 12 meses seguintes a cada período aquisitivo, e o abono de 1/3 das férias deve ser pedido até 30 dias antes do fim do período aquisitivo (art. 17).",
      faq: [
        {
          question: "Qual a diferença entre diarista e empregada doméstica?",
          answer:
            "O número de dias. Quem trabalha para a mesma família mais de 2 dias por semana, de forma contínua, é empregada doméstica e tem todos os direitos da Lei Complementar 150/2015 (art. 1º). Quem trabalha até 2 dias por semana é diarista, sem vínculo de emprego, e recebe pelo dia trabalhado.",
        },
        {
          question: "Empregada doméstica tem direito a FGTS?",
          answer:
            "Tem. O empregador deposita 8% do salário de FGTS e mais 3,2% por mês numa conta separada, que garante a indenização na demissão sem justa causa (arts. 21, 22 e 34). Se a doméstica pede demissão ou é demitida por justa causa, os 3,2% voltam para o empregador; na culpa recíproca, dividem-se ao meio.",
        },
        {
          question: "Doméstica tem direito a hora extra?",
          answer:
            "Tem, com pelo menos 50% sobre a hora normal, e o registro de horário é obrigatório (arts. 2º e 12). Por acordo escrito, pode haver compensação, mas as primeiras 40 horas extras do mês são pagas; o restante deve ser compensado em até 1 ano, e o saldo é pago na rescisão (art. 2º, §§ 4º a 6º).",
        },
        {
          question: "A doméstica pode trabalhar 12 por 36?",
          answer:
            "Pode, por acordo escrito, com intervalos concedidos ou indenizados. Nessa escala, o salário já inclui o descanso semanal e os feriados (art. 10).",
        },
        {
          question: "O patrão pode descontar comida e moradia do salário?",
          answer:
            "Não. É proibido descontar alimentação, vestuário, higiene ou moradia no local de trabalho, e também despesas de viagem para acompanhar a família (art. 18). Podem ser descontados adiantamentos e, por acordo escrito, plano de saúde, seguro ou previdência privada, até 20% do salário.",
        },
        {
          question: "Empregada doméstica tem direito a seguro-desemprego?",
          answer:
            "Tem, se for dispensada sem justa causa e tiver ao menos 15 meses de trabalho doméstico registrado nos últimos 24 meses. São até 3 parcelas de um salário mínimo, pedidas de 7 a 90 dias depois da dispensa (arts. 26, 28 e 29).",
        },
        {
          question: "Como fica a rescisão da doméstica?",
          answer:
            "Na demissão sem justa causa: saldo de salário, aviso prévio proporcional, 13º e férias proporcionais com 1/3, férias vencidas, saque do FGTS com os 3,2% acumulados e guias do seguro-desemprego. No pedido de demissão, a doméstica não saca o FGTS nem recebe os 3,2%, e deve cumprir ou indenizar o aviso prévio (art. 23, § 4º).",
        },
        {
          question: "O que é justa causa para doméstica?",
          answer:
            "A lei lista, entre outras, maus-tratos a idoso, criança, enfermo ou pessoa com deficiência sob seus cuidados, improbidade, desídia, embriaguez habitual ou em serviço, insubordinação e abandono de emprego por 30 dias (art. 27). A doméstica também pode romper o contrato por culpa do empregador, por exemplo se for tratada com rigor excessivo ou de forma degradante, se ele não cumprir o contrato ou se praticar violência doméstica contra mulheres (art. 27, parágrafo único).",
        },
      ],
      sections: [
        {
          title: "Quem é empregada doméstica",
          paragraphs: [
            "A lei exige cinco elementos: trabalho contínuo, por mais de 2 dias por semana; subordinação, com ordens do empregador; pagamento; pessoalidade, ou seja, a própria trabalhadora presta o serviço; e finalidade não lucrativa, para a pessoa ou a família, no âmbito da casa (art. 1º da LC 150/2015). É proibido contratar menor de 18 anos para trabalho doméstico.",
            "Também é possível o contrato por prazo determinado: o de experiência e o feito para necessidades transitórias da família ou para substituir doméstica afastada, com limite de 2 anos (art. 4º). Há ainda o regime de tempo parcial, de até 25 horas semanais, com salário e férias proporcionais (art. 3º).",
          ],
        },
        {
          title: "Jornada, intervalos e trabalho noturno",
          paragraphs: [
            "A jornada é de até 8 horas por dia e 44 por semana, e o registro de horário é obrigatório. A hora extra vale pelo menos 50% a mais, e a compensação depende de acordo escrito: as primeiras 40 horas extras do mês são pagas e o saldo deve ser compensado em até 1 ano (art. 2º). Por acordo escrito também se admite a escala de 12 por 36 (art. 10).",
            "O intervalo para refeição é de 1 a 2 horas, podendo ser reduzido a 30 minutos por acordo escrito; quem mora no emprego pode ter o intervalo dividido em dois períodos de pelo menos 1 hora (art. 13). O trabalho entre 22h e 5h tem adicional de pelo menos 20%, e a hora noturna dura 52 minutos e 30 segundos (art. 14).",
          ],
        },
        {
          title: "Férias, 13º e descontos",
          paragraphs: [
            "A doméstica tem 30 dias de férias com 1/3 a cada 12 meses, concedidas nos 12 meses seguintes; o empregador pode dividi-las em até 2 períodos, um de pelo menos 14 dias, e a doméstica pode vender 1/3, pedindo até 30 dias antes do fim do período aquisitivo (art. 17). Também tem 13º salário, descanso semanal, feriados e vale-transporte.",
            "A lei proíbe descontar alimentação, vestuário, higiene e moradia no local de trabalho, e a moradia oferecida não dá direito de posse ao imóvel (art. 18). Descontos só são permitidos para adiantamentos e, por acordo escrito, para plano de saúde, seguro ou previdência privada, até 20% do salário.",
          ],
        },
        {
          title: "FGTS, demissão e seguro-desemprego",
          paragraphs: [
            "Todo mês, pelo Simples Doméstico, o empregador recolhe 8% de FGTS e mais 3,2% numa conta separada, que substitui a multa de 40% da CLT (arts. 22 e 34). Na demissão sem justa causa, a doméstica saca o FGTS e os 3,2%; no pedido de demissão, na justa causa, no fim do contrato por prazo e na aposentadoria, os 3,2% voltam ao empregador.",
            "O aviso prévio é de 30 dias mais 3 por ano de serviço, até 90 dias; se a dispensa partir do empregador, a doméstica trabalha 2 horas a menos por dia ou falta 7 dias corridos, sem desconto (arts. 23 e 24). Dispensada sem justa causa, ela tem direito a até 3 parcelas de seguro-desemprego de um salário mínimo, se tiver 15 meses de trabalho doméstico nos últimos 24 (arts. 26 e 28).",
          ],
        },
        {
          title: "Trabalho análogo à escravidão",
          paragraphs: [
            "Desde 2026, a lei prevê medidas de proteção urgentes quando se constata que uma empregada doméstica foi reduzida a condição análoga à de escravo: inclusão no CadÚnico e em programas sociais e acolhimento imediato, quando necessário; se a vítima for mulher, aplicam-se também as medidas protetivas da Lei Maria da Penha (art. 30-A, incluído pela Lei 15.455/2026).",
            "Jornadas exaustivas, retenção de documentos, falta de salário, proibição de sair da casa e trabalho em troca de moradia e comida são sinais de alerta. A denúncia pode ser feita ao Ministério Público do Trabalho, à polícia ou pelo Disque 100.",
          ],
        },
      ],
    },
    relatedActions: ["verbas-rescissorias", "demissao-sem-justa-causa"],
    updatedAt: "2026-11-08",
  },
];

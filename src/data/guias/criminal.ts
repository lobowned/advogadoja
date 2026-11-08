import type { Guia } from "./tipos";

export const guiaCriminal: Guia = {
  slug: "criminal",
  area: "Direito Criminal",
  chatArea: "penal",
  title: "Guia de Direito Criminal: prisão, custódia e defesa",
  metaDescription:
    "Guia de defesa criminal: direitos na prisão em flagrante, audiência de custódia, fiança, preventiva, habeas corpus, inquérito, processo e acordos penais.",
  h1: "Guia completo de Direito Criminal e defesa",
  intro:
    "Quando alguém é preso, intimado para depor ou descobre que responde a um inquérito, a família quase sempre não sabe por onde começar. Este guia explica, em ordem, o que acontece desde a abordagem policial até a sentença: os direitos de quem é preso, a audiência de custódia, fiança, prisão preventiva e medidas cautelares, o habeas corpus, o inquérito policial, as fases do processo, os acordos previstos em lei e os recursos. A base é a Constituição Federal (art. 5º), o Código de Processo Penal (CPP), o Código Penal (CP), a Lei 9.099/1995 e a Lei de Execução Penal. O guia orienta; a estratégia de defesa depende dos autos de cada caso.",
  secoes: [
    {
      h2: "Direitos de quem é preso ou abordado",
      paragrafos: [
        "A Constituição garante ao preso o direito de permanecer calado e de ter assistência da família e de advogado (art. 5º, LXIII). O silêncio não pode ser interpretado em prejuízo da defesa (art. 186, parágrafo único, do CPP). A prisão e o local onde a pessoa se encontra devem ser comunicados imediatamente ao juiz e à família ou à pessoa por ela indicada (art. 5º, LXII, da Constituição).",
        "O preso tem direito à identificação dos responsáveis pela prisão e pelo interrogatório (art. 5º, LXIV) e ao respeito à integridade física e moral (art. 5º, XLIX). Ninguém é obrigado a produzir prova contra si mesmo, o que inclui não ser forçado a confessar, a fornecer senha de celular ou a participar de reconstituição.",
        "Em regra, ninguém deve falar sobre os fatos sem antes conversar com um advogado. Declarações dadas sob nervosismo, na delegacia, costumam ser usadas depois no processo. Ficar em silêncio e pedir para falar com o advogado é um direito, não uma confissão.",
      ],
    },
    {
      h2: "Prisão em flagrante: o que acontece nas primeiras horas",
      paragrafos: [
        "O art. 302 do CPP define flagrante como a situação de quem está cometendo o crime, acaba de cometê-lo, é perseguido logo após ou é encontrado logo depois com objetos que façam presumir a autoria. Fora dessas hipóteses, a prisão só pode ocorrer por ordem escrita e fundamentada de juiz (art. 5º, LXI, da Constituição).",
        "Na delegacia é lavrado o auto de prisão em flagrante. Em até 24 horas após a prisão, o auto deve ser encaminhado ao juiz, e a cópia integral deve ser enviada à Defensoria Pública se o preso não informar advogado; no mesmo prazo, o preso recebe a nota de culpa, que indica o motivo da prisão (art. 306, §§ 1º e 2º, do CPP).",
        "Nas infrações cuja pena máxima não ultrapassa quatro anos, o próprio delegado pode arbitrar fiança (art. 322 do CPP). Nos demais casos, a fiança só pode ser decidida pelo juiz. Crimes como racismo, tortura, tráfico de drogas, terrorismo e crimes hediondos são inafiançáveis (art. 323 do CPP e art. 5º, XLII e XLIII, da Constituição), o que não impede a liberdade provisória sem fiança quando ausentes os motivos da preventiva.",
      ],
    },
    {
      h2: "Audiência de custódia",
      paragrafos: [
        "Toda pessoa presa em flagrante deve ser apresentada a um juiz em até 24 horas na audiência de custódia, com a presença do Ministério Público e do advogado ou defensor (art. 310 do CPP); desde a Lei 15.358/2026, essa audiência é feita por videoconferência em tempo real. O juiz não julga se a pessoa é culpada; ele decide sobre a prisão.",
        "Nessa audiência há três caminhos: relaxar a prisão, se ela foi ilegal; converter o flagrante em prisão preventiva, se presentes os requisitos legais e se outras medidas não forem suficientes; ou conceder liberdade provisória, com ou sem fiança, podendo impor medidas cautelares. O juiz também verifica se houve maus-tratos ou tortura no momento da prisão.",
        "Para essa audiência, ajuda muito levar documentos que mostrem os vínculos do preso: comprovante de residência, carteira de trabalho ou declaração do empregador, certidões de nascimento de filhos menores que dependam dele, laudos de doença e comprovantes de estudo. Esses documentos demonstram que a pessoa tem endereço fixo e não oferece risco ao processo.",
      ],
    },
    {
      h2: "Prisão preventiva e medidas cautelares",
      paragrafos: [
        "A prisão preventiva pode ser decretada para garantia da ordem pública ou da ordem econômica, por conveniência da instrução criminal ou para assegurar a aplicação da lei penal, quando houver prova da existência do crime, indício suficiente de autoria e perigo gerado pelo estado de liberdade do investigado (art. 312 do CPP). Ela só é admitida, em regra, nos crimes dolosos com pena máxima superior a quatro anos, em caso de reincidência em crime doloso ou para garantir medidas protetivas de violência doméstica (art. 313).",
        "A decisão que decreta a preventiva deve ser motivada em fatos novos ou contemporâneos, e não basta repetir a gravidade abstrata do crime (art. 312, § 2º, e art. 315 do CPP). Desde a Lei 13.964/2019, o juiz não pode decretar a preventiva de ofício, e a necessidade da prisão deve ser revisada a cada 90 dias (art. 316, parágrafo único). A Lei 15.272/2025 passou a proibir expressamente a preventiva baseada só na gravidade abstrata do crime e listou os critérios de periculosidade que o juiz deve examinar (art. 312, §§ 3º e 4º).",
        "Antes da prisão, o juiz deve considerar as medidas cautelares diversas do art. 319 do CPP, como comparecimento periódico em juízo, proibição de frequentar certos lugares, proibição de contato com determinadas pessoas, recolhimento domiciliar noturno, suspensão do exercício de função pública e monitoração eletrônica. A prisão é a última opção (art. 282, § 6º).",
        "A prisão preventiva pode ser substituída pela domiciliar em situações como pessoa maior de 80 anos, extremamente debilitada por doença grave, gestante ou mulher com filho de até 12 anos, e homem que seja o único responsável pelos cuidados de filho até 12 anos (art. 318 do CPP).",
      ],
    },
    {
      h2: "Habeas corpus",
      paragrafos: [
        "O habeas corpus é a ação constitucional cabível sempre que alguém sofrer ou estiver ameaçado de sofrer violência ou coação em sua liberdade de locomoção por ilegalidade ou abuso de poder (art. 5º, LXVIII, da Constituição). Pode ser preventivo, para evitar uma prisão ilegal iminente, ou liberatório, para soltar quem já está preso.",
        "O art. 648 do CPP lista hipóteses de coação ilegal: falta de justa causa, prisão por tempo além do previsto em lei, ausência de competência de quem ordenou a prisão, cessação do motivo que autorizou a coação, negativa de fiança nos casos em que a lei a admite, nulidade manifesta do processo e extinção da punibilidade. O habeas corpus também é usado para trancar inquéritos e ações penais sem justa causa.",
        "O pedido é dirigido ao tribunal competente para julgar a autoridade que praticou a coação. Em casos urgentes, é possível pedir liminar, analisada pelo relator antes do julgamento do colegiado.",
      ],
    },
    {
      h2: "Inquérito policial: direitos de quem é investigado",
      paragrafos: [
        "O inquérito é a fase de investigação conduzida pela polícia. Nele ainda não há acusação formal, e o investigado tem direitos. O advogado pode examinar os autos do inquérito, mesmo sem procuração em certos casos, e copiar peças, ainda que o procedimento esteja concluído ou em andamento (art. 7º, XIV, da Lei 8.906/1994, o Estatuto da Advocacia). A Súmula Vinculante 14 do STF garante ao defensor acesso aos elementos de prova já documentados.",
        "Quem recebe intimação para depor deve verificar se foi chamado como testemunha ou como investigado, porque os direitos e os riscos são diferentes. O investigado pode permanecer em silêncio e tem direito de ser acompanhado por advogado no depoimento, que pode apresentar quesitos e requerer diligências.",
        "Ao final, o delegado elabora relatório e envia o inquérito ao Ministério Público, que pode oferecer denúncia, pedir novas diligências, propor acordo ou promover o arquivamento.",
      ],
    },
    {
      h2: "Acordos previstos em lei",
      paragrafos: [
        "O acordo de não persecução penal (ANPP), previsto no art. 28-A do CPP, pode ser proposto pelo Ministério Público quando o crime não envolve violência ou grave ameaça, tem pena mínima inferior a quatro anos e o investigado confessa formal e circunstanciadamente. As condições incluem reparação do dano, prestação de serviços à comunidade e pagamento de prestação pecuniária. Cumprido o acordo, extingue-se a punibilidade, sem gerar antecedentes. Não cabe em crimes de violência doméstica e em algumas outras situações previstas no § 2º.",
        "Nas infrações de menor potencial ofensivo, que são as contravenções e os crimes com pena máxima de até dois anos (art. 61 da Lei 9.099/1995), é possível a transação penal (art. 76), com aplicação imediata de pena restritiva de direitos ou multa, sem reconhecimento de culpa e sem gerar reincidência.",
        "Nos crimes com pena mínima igual ou inferior a um ano, pode haver suspensão condicional do processo por dois a quatro anos, mediante condições, desde que o acusado não esteja sendo processado nem tenha sido condenado por outro crime (art. 89 da Lei 9.099/1995). Ao final do período, se cumpridas as condições, a punibilidade é extinta.",
        "A decisão de aceitar ou não um acordo deve ser tomada com orientação técnica, comparando a força das provas, as consequências do acordo e a chance de absolvição.",
      ],
    },
    {
      h2: "O processo criminal passo a passo",
      paragrafos: [
        "Recebida a denúncia, o acusado é citado e tem dez dias para apresentar resposta à acusação, em que pode alegar tudo o que interessa à defesa, juntar documentos e indicar testemunhas (art. 396 e art. 396-A do CPP). Se não apresentar, o juiz nomeia defensor. Nessa fase o juiz pode absolver sumariamente o acusado em hipóteses como atipicidade do fato ou extinção da punibilidade (art. 397).",
        "Na audiência de instrução e julgamento são ouvidos a vítima, as testemunhas de acusação e de defesa, peritos se houver, e, por último, o acusado é interrogado (art. 400 do CPP). Ser interrogado por último permite ao acusado responder a tudo o que foi produzido contra ele. Depois vêm as alegações finais e a sentença.",
        "Ninguém será considerado culpado até o trânsito em julgado de sentença penal condenatória (art. 5º, LVII, da Constituição). A acusação é que deve provar a culpa; havendo dúvida razoável, o juiz deve absolver (art. 386, VII, do CPP).",
        "Nos crimes dolosos contra a vida, como homicídio, o julgamento é feito pelo Tribunal do Júri (art. 5º, XXXVIII, da Constituição), com procedimento próprio em duas fases.",
      ],
    },
    {
      h2: "Recursos e revisão criminal",
      paragrafos: [
        "Contra a sentença cabe apelação, no prazo de cinco dias (art. 593 do CPP), com prazo posterior para apresentar as razões. Outros recursos incluem o recurso em sentido estrito, para decisões específicas listadas no art. 581, os embargos de declaração e, nos tribunais superiores, os recursos especial e extraordinário. Prazos penais são curtos e contínuos, e perder um prazo pode ser irreversível.",
        "Depois do trânsito em julgado, a revisão criminal pode ser proposta a qualquer tempo em favor do condenado, por exemplo quando a condenação contrariar a lei ou a evidência dos autos, se fundar em prova falsa ou surgirem novas provas de inocência (art. 621 e art. 622 do CPP).",
      ],
    },
    {
      h2: "Prescrição e execução da pena",
      paragrafos: [
        "A prescrição é a perda do poder do Estado de punir pelo decurso do tempo. Os prazos variam conforme a pena máxima prevista para o crime (art. 109 do CP) e, depois da condenação, conforme a pena aplicada (art. 110). São reduzidos pela metade quando o acusado tinha menos de 21 anos na data do fato ou mais de 70 na data da sentença (art. 115). O cálculo exige atenção às causas que interrompem e suspendem o prazo (arts. 116 e 117).",
        "Após a condenação, a pena é cumprida conforme a Lei de Execução Penal (Lei 7.210/1984). A progressão de regime depende do cumprimento de frações da pena que variam conforme o tipo de crime, o emprego de violência e a reincidência, nos termos do art. 112 da LEP, além de bom comportamento e, para crimes a partir de 11 de abril de 2024, do exame criminológico. Esses percentuais mudaram em 2026 (nos hediondos, 70% a 85% da pena para crimes a partir de 25 de março de 2026), e cada condenado segue a regra da data do seu crime. Trabalho e estudo permitem remição de parte da pena (art. 126). Também são analisados na execução benefícios como livramento condicional, indulto, comutação e a saída temporária, que desde 2024 só existe para estudo no regime semiaberto.",
      ],
    },
    {
      h2: "O que a família pode fazer agora",
      paragrafos: [
        "Anote o nome completo do preso, a delegacia ou unidade onde está, o horário da prisão e o motivo informado. Separe documentos pessoais, comprovante de residência, comprovante de trabalho, certidões de nascimento dos filhos e documentos médicos. Esses papéis são usados na audiência de custódia e nos pedidos de liberdade.",
        "Não converse sobre os fatos por telefone ou mensagem com o preso, nem publique nada em redes sociais. Evite também procurar vítimas ou testemunhas, o que pode ser interpretado como tentativa de interferir no processo e justificar uma prisão. Deixe a comunicação sobre o caso para o advogado.",
      ],
    },
  ],
  faq: [
    {
      q: "Meu familiar foi preso. O que acontece nas próximas 24 horas?",
      a: "Lavra-se o auto de prisão em flagrante, a prisão é comunicada ao juiz e à família, o preso recebe a nota de culpa e deve ser apresentado ao juiz na audiência de custódia em até 24 horas (arts. 306 e 310 do CPP).",
    },
    {
      q: "Quem decide se a pessoa vai ficar presa?",
      a: "O juiz, na audiência de custódia. Ele pode relaxar a prisão ilegal, conceder liberdade provisória com ou sem fiança e medidas cautelares, ou converter o flagrante em preventiva se presentes os requisitos do art. 312 do CPP.",
    },
    {
      q: "O delegado pode dar fiança?",
      a: "Sim, nas infrações com pena máxima de até quatro anos (art. 322 do CPP). Nos demais casos, a fiança só pode ser fixada pelo juiz. O valor é definido conforme a gravidade do crime e as condições econômicas do preso.",
    },
    {
      q: "Sou obrigado a responder às perguntas na delegacia?",
      a: "Não. O direito ao silêncio é garantido pela Constituição (art. 5º, LXIII), e o silêncio não pode prejudicar a defesa (art. 186, parágrafo único, do CPP). É recomendável falar só depois de conversar com um advogado.",
    },
    {
      q: "Fui intimado para depor. Preciso ir com advogado?",
      a: "Não é obrigatório, mas é recomendável, principalmente se você for investigado. O advogado pode acessar os autos do inquérito (Súmula Vinculante 14 do STF), acompanhar o depoimento e orientar sobre o direito ao silêncio.",
    },
    {
      q: "Quando cabe habeas corpus?",
      a: "Sempre que houver prisão ou ameaça de prisão ilegal ou abusiva (art. 5º, LXVIII, da Constituição), como falta de justa causa, excesso de prazo, decisão sem fundamentação ou negativa de fiança nos casos em que a lei permite (art. 648 do CPP).",
    },
    {
      q: "O que é acordo de não persecução penal?",
      a: "Acordo proposto pelo Ministério Público em crimes sem violência ou grave ameaça e com pena mínima inferior a quatro anos, mediante confissão e condições como reparação do dano (art. 28-A do CPP). Cumprido, encerra o caso sem condenação.",
    },
    {
      q: "Quanto tempo a polícia pode manter alguém preso sem ver o juiz?",
      a: "A apresentação ao juiz deve ocorrer em até 24 horas após a prisão, na audiência de custódia (art. 310 do CPP). A demora injustificada pode tornar a prisão ilegal.",
    },
    {
      q: "Mãe com filho pequeno pode cumprir prisão em casa?",
      a: "A lei permite substituir a prisão preventiva por domiciliar para gestante e para mulher com filho de até 12 anos, entre outras hipóteses (art. 318 do CPP). O pedido é analisado pelo juiz conforme o caso.",
    },
    {
      q: "Qual o prazo para recorrer de uma condenação?",
      a: "A apelação deve ser interposta em cinco dias a partir da intimação da sentença (art. 593 do CPP). Os prazos penais são curtos, por isso a defesa deve ser procurada logo que a sentença sair.",
    },
    {
      q: "Crime prescreve?",
      a: "A maioria sim. O prazo depende da pena máxima prevista (art. 109 do CP) ou da pena aplicada na sentença, e é reduzido pela metade para quem tinha menos de 21 anos no fato ou mais de 70 na sentença (art. 115). Racismo e ação de grupos armados contra a ordem constitucional são imprescritíveis.",
    },
  ],
  artigosRelacionados: [
    "/artigos/penal/prisao-flagrante-direitos",
    "/artigos/penal/inquerito-policial",
    "/artigos/penal/habeas-corpus",
    "/artigos/penal/violencia-domestica",
    "/artigos/penal/estelionato-golpes-fraudes",
    "/artigos/penal/furto",
    "/artigos/penal/roubo",
    "/artigos/penal/receptacao",
    "/artigos/penal/saida-temporaria-saidinha",
    "/artigos/penal/prisao-preventiva",
    "/artigos/penal/calunia-difamacao-injuria",
    "/artigos/penal/crimes-transito-embriaguez-volante",
  ],
  paginasLocais: [
    { href: "/advogado-criminal-salvador", label: "Advogado criminalista em Salvador" },
    { href: "/advogado-criminal-camacari", label: "Advogado criminalista em Camaçari" },
    { href: "/advogado-criminal", label: "Direito Criminal — área de atuação" },
  ],
  whatsappText: "Olá! Li o guia de Direito Criminal e preciso de orientação urgente.",
  atualizadoEm: "2026-11-08",
};

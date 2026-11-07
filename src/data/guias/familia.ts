import type { Guia } from "./tipos";

export const guiaFamilia: Guia = {
  slug: "familia",
  area: "Direito de Família",
  chatArea: "familia",
  title: "Guia de Direito de Família: divórcio, pensão e guarda",
  metaDescription:
    "Guia completo de Direito de Família: divórcio em cartório ou na Justiça, partilha, pensão alimentícia, guarda, união estável, paternidade e inventário.",
  h1: "Guia completo de Direito de Família",
  intro:
    "Questões de família mexem com a vida inteira: filhos, casa, dinheiro e relações que continuam depois do processo. Este guia explica como funciona o divórcio e a dissolução de união estável, como os bens são divididos, como se fixa e se cobra a pensão alimentícia, o que muda entre guarda compartilhada e unilateral, como se reconhece a paternidade e como é feito o inventário quando alguém da família falece. As referências são ao Código Civil (CC), ao Código de Processo Civil (CPC) e às leis especiais. Cada família tem detalhes próprios, e o guia serve para você chegar à conversa com o advogado sabendo o que perguntar.",
  secoes: [
    {
      h2: "Divórcio: não depende de culpa nem de prazo",
      paragrafos: [
        "Desde a Emenda Constitucional 66/2010, que alterou o art. 226, § 6º, da Constituição, o casamento pode ser dissolvido pelo divórcio a qualquer tempo, sem necessidade de separação prévia, de prazo mínimo de casamento ou de discussão sobre quem foi culpado pelo fim da relação. Basta a vontade de um dos cônjuges; o outro não pode impedir o divórcio, apenas discutir as questões ligadas a ele, como bens, alimentos e guarda.",
        "O divórcio consensual, quando há acordo sobre tudo, pode ser feito em cartório de notas, por escritura pública, com a presença obrigatória de advogado (art. 733 do CPC). Em regra, a via extrajudicial exige que não haja filhos menores ou incapazes, ou que as questões relativas a eles já tenham sido resolvidas no Judiciário, e que não haja gestação em curso. A escritura não depende de homologação judicial e serve para averbação no registro civil e transferência de bens.",
        "Quando não há acordo, o divórcio é litigioso e tramita na Vara de Família. O juiz pode decretar o divórcio logo no início, como medida que não depende de prova, e o processo segue apenas para resolver partilha, alimentos e guarda. Mesmo no litígio, a audiência de conciliação e a mediação são etapas importantes (art. 694 do CPC).",
      ],
    },
    {
      h2: "Partilha de bens: o regime define o que se divide",
      paragrafos: [
        "Se o casal não fez pacto antenupcial, vale o regime da comunhão parcial de bens (art. 1.640 do CC). Nele se comunicam, em regra, os bens adquiridos onerosamente durante o casamento, ainda que registrados em nome de um só (art. 1.658 e art. 1.660). Ficam fora da partilha os bens que cada um já tinha antes de casar e os recebidos por doação ou herança, assim como os sub-rogados em seu lugar (art. 1.659).",
        "Na comunhão universal, comunicam-se praticamente todos os bens presentes e futuros, com as exceções do art. 1.668. Na separação convencional, cada um mantém o seu patrimônio. Na separação obrigatória, imposta por lei em certas situações, como no casamento de pessoa maior de 70 anos (art. 1.641, II), os tribunais admitem a comunicação dos bens adquiridos durante a união quando provado o esforço comum, e o Supremo Tribunal Federal admitiu o afastamento dessa regra por escritura pública.",
        "Dívidas contraídas em benefício da família também entram na conta. Financiamentos de imóvel e veículo, por exemplo, costumam ser divididos considerando as parcelas pagas durante o casamento. Quando um dos cônjuges esconde patrimônio, é possível pedir pesquisas de bens e quebra de sigilo no processo.",
      ],
    },
    {
      h2: "União estável: direitos equivalentes, prova diferente",
      paragrafos: [
        "A união estável é a convivência pública, contínua e duradoura, estabelecida com o objetivo de constituir família (art. 1.723 do CC). Não há prazo mínimo fixado em lei e não é obrigatório morar na mesma casa, embora isso ajude na prova. O Supremo Tribunal Federal reconheceu a união estável entre pessoas do mesmo sexo com os mesmos efeitos.",
        "Salvo contrato escrito em contrário, aplica-se à união estável o regime da comunhão parcial de bens (art. 1.725 do CC). Ou seja, os bens adquiridos onerosamente durante a convivência são divididos meio a meio na dissolução. O casal pode formalizar a união por escritura pública em cartório, inclusive escolhendo outro regime de bens.",
        "Quando a união não foi formalizada e um dos dois nega sua existência ou sua duração, é preciso entrar com ação de reconhecimento e dissolução de união estável. A prova é feita com comprovantes de endereço em comum, contas conjuntas, fotos, viagens, dependência em plano de saúde, testemunhas e certidão de nascimento de filhos.",
      ],
    },
    {
      h2: "Pensão alimentícia: como o valor é definido",
      paragrafos: [
        "Os alimentos são fixados na proporção das necessidades de quem recebe e dos recursos de quem paga (art. 1.694, § 1º, do CC). Não existe um percentual fixo na lei; o valor é definido caso a caso, levando em conta despesas como escola, saúde, alimentação, moradia e lazer da criança, e a renda e o padrão de vida do alimentante. Os dois pais têm o dever de sustento, cada um na medida das suas possibilidades.",
        "A ação de alimentos segue a Lei 5.478/1968, que permite ao juiz fixar alimentos provisórios logo no início do processo. Para o empregado com carteira assinada, é comum que a pensão seja descontada diretamente em folha. Para autônomos, o juiz pode fixar o valor com base em sinais exteriores de riqueza, como carro, viagens e gastos aparentes em redes sociais.",
        "A gestante também pode pedir alimentos ao suposto pai durante a gravidez, os chamados alimentos gravídicos, bastando indícios da paternidade (Lei 11.804/2008). Depois do nascimento, eles se convertem em pensão alimentícia para a criança, até eventual revisão.",
        "A obrigação de pagar pensão ao filho não termina automaticamente aos 18 anos. O cancelamento depende de decisão judicial, com oportunidade de o filho se manifestar (Súmula 358 do STJ), e a pensão pode continuar enquanto ele estiver estudando e não tiver condições de se sustentar.",
      ],
    },
    {
      h2: "Revisão e cobrança da pensão",
      paragrafos: [
        "Se a situação financeira de quem paga ou as necessidades de quem recebe mudarem, qualquer das partes pode pedir a revisão do valor, para aumentar, reduzir ou exonerar (art. 1.699 do CC). A mudança precisa ser demonstrada, como perda de emprego, nascimento de outro filho, doença ou aumento relevante das despesas da criança. Enquanto não houver nova decisão, vale o valor fixado.",
        "Quando a pensão está atrasada, o cumprimento de sentença pode seguir dois caminhos. Pelo rito da prisão, cobram-se as até três prestações anteriores ao pedido e as que vencerem no curso do processo (art. 528, § 7º, do CPC, e Súmula 309 do STJ); se o devedor não pagar nem justificar a impossibilidade, pode ser preso em regime fechado de um a três meses (art. 528, § 3º). Pelo rito da penhora, cobram-se as parcelas mais antigas, com bloqueio de contas, veículos e outros bens.",
        "O juiz também pode determinar o protesto da decisão e a inclusão do nome do devedor em cadastros de inadimplentes. A prisão não quita a dívida; os valores continuam devidos.",
      ],
    },
    {
      h2: "Guarda dos filhos e convivência",
      paragrafos: [
        "A guarda compartilhada é a regra no Brasil. Quando os dois genitores estão aptos e não há acordo, o juiz deve aplicá-la, salvo se um deles declarar que não deseja a guarda (art. 1.584, § 2º, do CC, na redação da Lei 13.058/2014). Compartilhar a guarda significa dividir as decisões importantes sobre a vida da criança, como escola, saúde e religião; não significa necessariamente que a criança passe metade do tempo em cada casa.",
        "Na guarda compartilhada, define-se uma residência de referência, e o tempo de convivência deve ser dividido de forma equilibrada, sempre considerando o interesse da criança. Quem paga pensão continua pagando, porque a guarda compartilhada não elimina o dever de sustento.",
        "A guarda unilateral é atribuída a um só dos genitores quando o outro não deseja ou não reúne condições, ou em situações de risco. Nessa hipótese, o outro tem direito à convivência e o dever de supervisionar os interesses dos filhos (art. 1.583, § 5º). Avós e outros parentes também podem pedir guarda ou regulamentação de convivência quando isso atender ao melhor interesse da criança.",
        "Atos que dificultam o contato da criança com o outro genitor, como desqualificá-lo constantemente, impedir visitas sem motivo ou mudar de cidade sem avisar para afastar a criança, podem caracterizar alienação parental (Lei 12.318/2010), com medidas que vão de advertência a alteração da guarda.",
      ],
    },
    {
      h2: "Reconhecimento de paternidade",
      paragrafos: [
        "O filho pode, a qualquer tempo, pedir o reconhecimento da paternidade; a ação de investigação de paternidade é imprescritível. A prova principal é o exame de DNA. Se o suposto pai se recusa a fazer o exame, essa recusa gera presunção relativa de paternidade (Súmula 301 do STJ e art. 2º-A da Lei 8.560/1992), avaliada junto com as demais provas.",
        "O reconhecimento voluntário pode ser feito diretamente no cartório de registro civil, sem processo, quando o pai concorda. Reconhecida a paternidade, o filho passa a ter todos os direitos, inclusive alimentos e herança. Também é possível o reconhecimento da paternidade ou maternidade socioafetiva, baseada no vínculo construído na convivência.",
      ],
    },
    {
      h2: "Inventário e herança",
      paragrafos: [
        "Quando uma pessoa falece deixando bens, é preciso fazer o inventário para transferi-los aos herdeiros. O CPC determina que o inventário seja aberto em até dois meses do falecimento (art. 611). O descumprimento desse prazo não impede o inventário, mas pode gerar multa sobre o imposto estadual de transmissão (ITCMD), conforme a lei de cada estado.",
        "Se todos os herdeiros forem capazes e estiverem de acordo, o inventário pode ser feito em cartório, por escritura pública, com advogado (art. 610, § 1º, do CPC). Havendo testamento, herdeiro incapaz ou divergência, o caminho é o inventário judicial, com ressalvas admitidas pelas normas do Conselho Nacional de Justiça em situações específicas.",
        "A ordem de vocação hereditária está no art. 1.829 do CC: primeiro descendentes em concorrência com o cônjuge, conforme o regime de bens; depois ascendentes em concorrência com o cônjuge; depois o cônjuge sozinho; por fim os colaterais até o quarto grau. Os herdeiros necessários, que são descendentes, ascendentes e cônjuge, têm direito a metade da herança, a chamada legítima (art. 1.845 e art. 1.846); a outra metade pode ser disposta em testamento.",
        "Os herdeiros não respondem por dívidas do falecido além das forças da herança (art. 1.792). Ou seja, as dívidas são pagas com os bens deixados, e o herdeiro não precisa usar patrimônio próprio para quitá-las.",
      ],
    },
    {
      h2: "Violência doméstica e medidas protetivas",
      paragrafos: [
        "A Lei Maria da Penha (Lei 11.340/2006) protege a mulher em situação de violência doméstica e familiar, que pode ser física, psicológica, sexual, patrimonial ou moral. As medidas protetivas de urgência, como afastamento do agressor do lar e proibição de contato e aproximação, podem ser pedidas na delegacia, ao Ministério Público, à Defensoria ou diretamente ao juiz.",
        "Em situação de risco imediato, ligue 190. A Central de Atendimento à Mulher, pelo 180, orienta sobre a rede de apoio. Questões de família ligadas à violência, como guarda, alimentos e afastamento do lar, podem ser tratadas com prioridade.",
      ],
    },
    {
      h2: "Testamento e planejamento sucessório",
      paragrafos: [
        "Quem tem herdeiros necessários pode dispor livremente de metade do patrimônio por testamento; a outra metade é reservada a eles (art. 1.789 do CC). Quem não tem descendentes, ascendentes nem cônjuge pode dispor de todos os bens. O testamento pode ser público, lavrado em cartório de notas na presença de duas testemunhas (art. 1.864), cerrado ou particular, cada um com formalidades próprias que, se descumpridas, podem levar à nulidade.",
        "O testamento também serve para reconhecer filho, nomear tutor para filhos menores, deixar bens específicos a determinadas pessoas e estabelecer cláusulas de incomunicabilidade ou impenhorabilidade, estas sobre a legítima apenas com justa causa declarada (art. 1.848). Pode ser revogado ou alterado a qualquer tempo pelo testador.",
        "Outros instrumentos de planejamento, como a doação em vida com reserva de usufruto, devem respeitar a legítima. A doação a um filho, em regra, é considerada adiantamento da herança e precisa ser trazida à colação no inventário (art. 544 e art. 2.002 do CC), salvo dispensa expressa dentro da parte disponível.",
      ],
    },
    {
      h2: "Documentos para separar",
      paragrafos: [
        "Certidão de casamento ou provas da união estável, certidões de nascimento dos filhos, documentos dos bens (matrículas de imóveis, documentos de veículos, extratos bancários e de investimentos), comprovantes de renda dos dois, comprovantes das despesas dos filhos (escola, plano de saúde, remédios, atividades) e, em caso de pensão atrasada, a decisão que fixou os alimentos e o histórico do que foi pago.",
        "Para inventário: certidão de óbito, documentos do falecido e dos herdeiros, certidões dos bens, extratos de contas e eventual testamento. Uma planilha simples com os bens e as dívidas conhecidas economiza tempo na primeira conversa.",
      ],
    },
  ],
  faq: [
    {
      q: "Posso me divorciar se meu marido ou minha esposa não quiser?",
      a: "Sim. O divórcio é um direito que não depende da concordância do outro (art. 226, § 6º, da Constituição). Sem acordo, o pedido é feito na Justiça, e o outro só pode discutir partilha, alimentos e guarda.",
    },
    {
      q: "Dá para fazer divórcio em cartório?",
      a: "Sim, quando há acordo sobre tudo, com advogado presente, por escritura pública (art. 733 do CPC). Em regra exige-se que não haja filhos menores ou incapazes, ou que as questões deles já estejam resolvidas judicialmente.",
    },
    {
      q: "Qual é o valor da pensão alimentícia?",
      a: "Não há percentual fixo na lei. O juiz considera as necessidades de quem recebe e as possibilidades de quem paga (art. 1.694, § 1º, do CC), analisando despesas e renda concretas de cada caso.",
    },
    {
      q: "Quantos meses de pensão atrasada dão prisão?",
      a: "O rito da prisão abrange as até três prestações anteriores ao pedido e as que vencerem durante o processo (art. 528, § 7º, do CPC e Súmula 309 do STJ). Parcelas mais antigas são cobradas por penhora de bens.",
    },
    {
      q: "A pensão acaba quando o filho faz 18 anos?",
      a: "Não automaticamente. O cancelamento depende de decisão judicial com direito de defesa do filho (Súmula 358 do STJ), e a pensão pode continuar se ele estiver estudando e sem condições de se sustentar.",
    },
    {
      q: "Na guarda compartilhada, ainda se paga pensão?",
      a: "Sim. A guarda compartilhada divide as decisões sobre a vida da criança, mas não elimina o dever de sustento. O valor considera as despesas e o tempo que a criança passa com cada genitor.",
    },
    {
      q: "Posso mudar de cidade com meu filho sem autorização do outro genitor?",
      a: "Na guarda compartilhada, a mudança que afeta a convivência deve ser combinada ou autorizada pelo juiz. Mudar para afastar a criança do outro genitor sem justificativa pode caracterizar alienação parental (Lei 12.318/2010). Viagem ao exterior de menor exige autorização do outro ou judicial.",
    },
    {
      q: "Quem mora junto tem os mesmos direitos de quem é casado?",
      a: "A união estável gera direitos semelhantes, inclusive partilha pelo regime da comunhão parcial, salvo contrato escrito em contrário (art. 1.725 do CC), alimentos e herança. A diferença é que, sem escritura, a união precisa ser provada.",
    },
    {
      q: "O bem que herdei entra na partilha do divórcio?",
      a: "Na comunhão parcial, não. Bens recebidos por herança ou doação, e os comprados com o valor deles, ficam fora da partilha (art. 1.659, I, do CC).",
    },
    {
      q: "O suposto pai se recusa a fazer DNA. E agora?",
      a: "A recusa gera presunção relativa de paternidade (Súmula 301 do STJ e art. 2º-A da Lei 8.560/1992), que o juiz avalia junto com as outras provas, como mensagens, fotos e testemunhas.",
    },
    {
      q: "Qual o prazo para abrir o inventário?",
      a: "O CPC fixa dois meses a contar do falecimento (art. 611). Passado o prazo o inventário ainda pode ser aberto, mas pode haver multa sobre o ITCMD, conforme a lei estadual.",
    },
    {
      q: "Herdeiro tem que pagar as dívidas do falecido?",
      a: "Só até o limite do que herdou. As dívidas são pagas com os bens da herança, e o herdeiro não responde com seu patrimônio pessoal além disso (art. 1.792 do CC).",
    },
  ],
  artigosRelacionados: [
    "/artigos/familia/divorcio-consensual",
    "/artigos/familia/divorcio-litigioso",
    "/artigos/familia/pensao-alimenticia",
    "/artigos/familia/execucao-alimentos-prisao-penhora",
    "/artigos/familia/revisao-pensao-alimenticia-2025",
    "/artigos/familia/guarda-filhos-compartilhada-unilateral",
    "/artigos/familia/uniao-estavel-direitos",
    "/artigos/familia/reconhecimento-paternidade",
    "/artigos/familia/inventario-heranca",
    "/artigos/familia/testamento-tipos-validade",
    "/artigos/familia/avos-podem-pedir-guarda-netos",
    "/artigos/penal/violencia-domestica",
  ],
  paginasLocais: [
    { href: "/advogado-familia-salvador", label: "Advogado de família em Salvador" },
    { href: "/advogado-familia-camacari", label: "Advogado de família em Camaçari" },
    { href: "/advogado-familia", label: "Direito de Família — área de atuação" },
  ],
  whatsappText: "Olá! Li o guia de Direito de Família e quero conversar sobre meu caso.",
  atualizadoEm: "2026-11-04",
};

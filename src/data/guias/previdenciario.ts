import type { Guia } from "./tipos";

export const guiaPrevidenciario: Guia = {
  slug: "previdenciario",
  area: "Direito Previdenciário",
  chatArea: "previdenciario",
  title: "Guia do INSS: aposentadoria, auxílio, BPC e pensão",
  metaDescription:
    "Guia completo do INSS: qualidade de segurado, carência, aposentadorias, auxílio por incapacidade, BPC/LOAS, pensão por morte, benefício negado e prazos.",
  h1: "Guia completo de direitos no INSS",
  intro:
    "Pedir um benefício ao INSS envolve regras técnicas que mudaram bastante com a Reforma da Previdência (Emenda Constitucional 103/2019). Este guia explica, sem juridiquês, os conceitos que decidem quase todo pedido, como qualidade de segurado e carência, e mostra os principais benefícios: aposentadorias, auxílio por incapacidade, auxílio-acidente, pensão por morte, salário-maternidade e o BPC/LOAS. Também explica o que fazer quando o INSS nega, quais prazos observar e quais documentos reunir. A base legal é a Lei 8.213/1991, a Lei 8.742/1993 e a própria Constituição. Valores como salário mínimo e teto do INSS mudam todo ano, por isso o guia fala sempre em valor vigente.",
  secoes: [
    {
      h2: "Três conceitos que decidem o seu pedido",
      paragrafos: [
        "Qualidade de segurado é o vínculo com a Previdência. Quem contribui, como empregado, contribuinte individual, MEI ou facultativo, está protegido. Ao parar de contribuir, a proteção não acaba no dia seguinte: o art. 15 da Lei 8.213/1991 prevê o período de graça, em regra de 12 meses, que pode ser estendido por mais 12 meses para quem já tem mais de 120 contribuições sem perda da qualidade e por mais 12 meses para o desempregado que comprove essa situação.",
        "Carência é o número mínimo de contribuições mensais exigido para alguns benefícios. Pelo art. 25 da Lei 8.213/1991, o auxílio por incapacidade temporária e a aposentadoria por incapacidade permanente exigem, em regra, 12 contribuições; a aposentadoria por idade exige 180. Há dispensa de carência em acidentes de qualquer natureza e em doenças graves listadas na legislação (art. 26, II, e art. 151).",
        "Tempo de contribuição é o total de períodos reconhecidos, que serve para calcular a aposentadoria. Períodos trabalhados com carteira que não aparecem no CNIS, tempo de serviço militar, tempo rural e tempo especial podem ser incluídos mediante prova. Conferir o extrato do CNIS no aplicativo ou site Meu INSS é o primeiro passo antes de qualquer pedido.",
      ],
    },
    {
      h2: "Aposentadoria depois da Reforma da Previdência",
      paragrafos: [
        "Para quem começou a contribuir depois de 13 de novembro de 2019, a aposentadoria programada no regime geral exige idade mínima de 65 anos para homens e 62 para mulheres, com tempo mínimo de contribuição de 20 anos para homens e 15 para mulheres (art. 19 da EC 103/2019). Para quem já contribuía antes da reforma, existem regras de transição, como a de pontos, a de idade mínima progressiva, os pedágios de 50% e de 100% e a regra de transição da aposentadoria por idade.",
        "Cada regra de transição leva a um valor diferente e a uma data diferente. Por isso, a escolha da regra deve ser feita com simulação, comparando quando cada uma é alcançada e qual renda gera. O próprio Meu INSS oferece um simulador, mas ele usa apenas os dados do CNIS; períodos não cadastrados e tempo especial precisam ser analisados à parte.",
        "Quem completou todos os requisitos de alguma regra antiga até a data da reforma tem direito adquirido a se aposentar por ela, mesmo que faça o pedido depois. Esse é um ponto que costuma passar despercebido e merece verificação.",
      ],
    },
    {
      h2: "Aposentadoria especial e aposentadoria rural",
      paragrafos: [
        "A aposentadoria especial é destinada a quem trabalhou exposto a agentes nocivos à saúde, como ruído acima dos limites, agentes químicos, biológicos e eletricidade em determinados períodos. A comprovação é feita principalmente pelo Perfil Profissiográfico Previdenciário (PPP) e pelo laudo técnico (LTCAT) fornecidos pela empresa. Após a reforma, passou a existir também idade mínima, e o tempo especial anterior a 13/11/2019 pode, em regra, ser convertido em tempo comum com acréscimo.",
        "O trabalhador rural em regime de economia familiar, o chamado segurado especial, pode se aposentar por idade aos 60 anos (homem) e 55 anos (mulher), comprovando 15 anos de atividade rural, ainda que de forma descontínua (art. 48, §§ 1º e 2º, da Lei 8.213/1991). A prova é feita com documentos que indiquem a atividade, como declaração de sindicato, notas de venda da produção, registros em cadastros rurais, certidões em que conste a profissão de lavrador, complementados por testemunhas.",
      ],
    },
    {
      h2: "Auxílio por incapacidade temporária (antigo auxílio-doença)",
      paragrafos: [
        "O auxílio por incapacidade temporária é devido ao segurado que fica incapaz para o trabalho ou para a atividade habitual por mais de 15 dias consecutivos (art. 59 da Lei 8.213/1991). Para o empregado, os primeiros 15 dias são pagos pela empresa; a partir do 16º dia, pelo INSS. Exige qualidade de segurado e, em regra, 12 contribuições de carência, salvo nas hipóteses de dispensa.",
        "O que decide o benefício é a incapacidade, e não apenas a doença. Uma pessoa pode ter diagnóstico grave e ainda assim ser considerada capaz para a sua atividade, ou ter um problema aparentemente simples que a impede de exercer a profissão. Laudos médicos detalhados, que descrevam as limitações funcionais, o tratamento e a previsão de recuperação, pesam mais do que atestados genéricos.",
        "Se a doença ou lesão já existia antes de a pessoa se filiar ao INSS, o benefício pode ser negado, salvo se a incapacidade decorreu de agravamento posterior (art. 59, § 1º). Quando o auxílio é cessado, é possível pedir prorrogação dentro do prazo indicado pelo INSS ou fazer novo requerimento, além de recorrer.",
      ],
    },
    {
      h2: "Aposentadoria por incapacidade permanente e auxílio-acidente",
      paragrafos: [
        "A aposentadoria por incapacidade permanente, antiga aposentadoria por invalidez, é concedida quando a perícia conclui que o segurado está incapaz e não pode ser reabilitado para outra atividade que lhe garanta a subsistência (art. 42 da Lei 8.213/1991). O benefício pode ser revisto em perícias periódicas, observadas as exceções legais. Quem precisa da assistência permanente de outra pessoa pode ter acréscimo de 25% (art. 45).",
        "O auxílio-acidente tem natureza indenizatória e é pago ao segurado que, após consolidação das lesões de um acidente de qualquer natureza, fica com sequela que reduz a capacidade para o trabalho que habitualmente exercia (art. 86). Corresponde a 50% do salário de benefício e pode ser recebido junto com o salário, porque a pessoa continua trabalhando. Nem todas as categorias têm direito; contribuintes individuais, por exemplo, ficam de fora pela lei atual.",
        "Quando a incapacidade decorre de acidente de trabalho ou doença ocupacional, a ação contra o INSS tramita na Justiça Estadual (art. 109, I, da Constituição). Nos demais casos, é competência da Justiça Federal.",
      ],
    },
    {
      h2: "BPC/LOAS: o benefício assistencial",
      paragrafos: [
        "O Benefício de Prestação Continuada, previsto no art. 203, V, da Constituição e no art. 20 da Lei 8.742/1993 (LOAS), garante um salário mínimo mensal à pessoa idosa com 65 anos ou mais e à pessoa com deficiência que comprovem não ter meios de prover a própria manutenção nem de tê-la provida pela família. Não exige contribuição ao INSS.",
        "O critério legal de renda é de renda familiar por pessoa igual ou inferior a um quarto do salário mínimo vigente. O Supremo Tribunal Federal, porém, já reconheceu que esse critério isolado não basta, e a condição de miserabilidade pode ser demonstrada por outros elementos, como gastos com medicamentos, alimentação especial e moradia. A avaliação da deficiência considera impedimentos de longo prazo e as barreiras que eles causam, por meio de avaliação médica e social.",
        "O BPC não paga 13º e não gera pensão por morte. A inscrição atualizada no CadÚnico é requisito para o pedido e para a manutenção do benefício, então mantenha o cadastro em dia sempre que a composição ou a renda da família mudar.",
      ],
    },
    {
      h2: "Pensão por morte",
      paragrafos: [
        "A pensão por morte é paga aos dependentes do segurado que faleceu (art. 74 da Lei 8.213/1991). Os dependentes estão divididos em classes no art. 16: primeiro, cônjuge, companheiro ou companheira e filhos menores de 21 anos ou inválidos ou com deficiência; depois, os pais; por último, os irmãos nas mesmas condições dos filhos. A existência de dependente de uma classe exclui as seguintes. Cônjuge, companheiro e filhos têm dependência econômica presumida; os demais precisam prová-la.",
        "O prazo do pedido importa. Feito em até 90 dias após o óbito, o benefício é pago desde a data da morte; para filhos menores de 16 anos, o prazo é de 180 dias. Depois disso, é pago a partir da data do requerimento. Para cônjuge ou companheiro, a duração da pensão varia conforme a idade do beneficiário, o tempo de união e o número de contribuições do falecido, podendo ser temporária ou vitalícia, nos termos do art. 77, § 2º.",
        "Quem vivia em união estável sem papel pode ter direito, desde que prove a união. A lei exige início de prova material contemporânea aos fatos, produzida em período não superior a 24 meses anteriores ao óbito (art. 16, § 5º), como conta conjunta, comprovante de mesmo endereço, plano de saúde ou seguro com o outro como dependente e certidão de nascimento de filho em comum.",
      ],
    },
    {
      h2: "Salário-maternidade",
      paragrafos: [
        "O salário-maternidade é devido à segurada por 120 dias em caso de parto, inclusive de natimorto, e também em caso de adoção ou guarda judicial para fins de adoção (art. 71 e art. 71-A da Lei 8.213/1991). Em caso de aborto não criminoso comprovado por atestado médico, o benefício é de duas semanas.",
        "Para a empregada, a empregada doméstica e a trabalhadora avulsa, a lei nunca exigiu carência. Para a contribuinte individual e a facultativa, a lei previa 10 contribuições, mas o Supremo Tribunal Federal, no julgamento das ADIs 2110 e 2111, considerou inconstitucional essa exigência; o essencial é ter qualidade de segurada na data do parto. A desempregada que ainda está no período de graça mantém o direito. A trabalhadora rural segurada especial deve comprovar atividade rural nos meses anteriores ao parto.",
        "O pedido pode ser feito pelo Meu INSS. A ação para cobrar salário-maternidade não pago observa o prazo de cinco anos para as parcelas, contado de cada uma, o que torna importante não deixar o tempo passar.",
      ],
    },
    {
      h2: "O INSS negou: recurso administrativo ou ação judicial",
      paragrafos: [
        "Quando o INSS indefere um pedido, a carta de indeferimento indica o motivo. O primeiro passo é ler esse motivo com atenção, porque ele mostra o que faltou: qualidade de segurado, carência, prova da incapacidade, prova de união estável, documentos rurais. O segurado pode apresentar recurso ao Conselho de Recursos da Previdência Social no prazo de 30 dias contados da ciência da decisão.",
        "Outra via é a ação judicial. Na Justiça Federal, as causas de até 60 salários mínimos tramitam no Juizado Especial Federal (art. 3º da Lei 10.259/2001), em que há perícia médica ou social nomeada pelo juiz. O pedido administrativo prévio, em regra, é necessário antes da ação, conforme decidido pelo Supremo Tribunal Federal. O recurso administrativo e a ação podem ser estratégias alternativas, e a escolha depende do motivo da negativa e da prova disponível.",
        "Para a revisão de benefício já concedido, o art. 103 da Lei 8.213/1991 fixa prazo de decadência de dez anos, contado do primeiro pagamento. As parcelas atrasadas prescrevem em cinco anos.",
      ],
    },
    {
      h2: "Como se preparar para a perícia médica",
      paragrafos: [
        "Leve documento com foto, laudos, exames, receitas e relatórios recentes, organizados por data, além de comprovantes de afastamento e da função exercida. Prefira relatórios médicos que tragam o código da doença, a descrição das limitações concretas e a relação dessas limitações com a sua atividade de trabalho.",
        "Na perícia, descreva com precisão a sua rotina de trabalho e o que deixou de conseguir fazer. Não exagere nem minimize; contradições entre o relato e os documentos costumam prejudicar a avaliação. Se a perícia for desfavorável, o laudo pode ser solicitado e serve de base para o recurso ou para a ação.",
      ],
    },
    {
      h2: "Contribuinte individual, MEI e facultativo: cuidados com as contribuições",
      paragrafos: [
        "Quem trabalha por conta própria precisa recolher a própria contribuição por meio da guia da Previdência ou, no caso do MEI, pelo documento de arrecadação mensal do Simples Nacional. Contribuições pagas com atraso podem não contar para carência se a pessoa já tinha perdido a qualidade de segurada, e a primeira contribuição em dia é que marca o início da proteção (art. 27, II, da Lei 8.213/1991). Por isso, regularizar meses em atraso só depois de adoecer costuma não resolver o problema.",
        "Os planos de contribuição reduzida, como o simplificado de 11% e o de baixa renda de 5% para o facultativo de família inscrita no CadÚnico, dão direito à maior parte dos benefícios, mas não contam para a aposentadoria por tempo de contribuição nas regras que ainda a preveem, salvo complementação. O MEI contribui sobre o salário mínimo; quem tem renda maior e quer benefício maior precisa avaliar contribuições complementares.",
        "Antes de pedir qualquer benefício, confira no CNIS se as contribuições aparecem como válidas, sem indicadores de pendência. Recolhimentos com código errado, valores abaixo do mínimo ou vínculos sem data de saída são problemas comuns que podem ser corrigidos com pedido de acerto de dados no próprio INSS.",
      ],
    },
    {
      h2: "Documentos para separar",
      paragrafos: [
        "Documento de identidade e CPF, carteiras de trabalho antigas e atuais, carnês e guias de contribuição, extrato do CNIS, PPP e laudos das empresas em caso de atividade especial, laudos e exames médicos, certidões de casamento, nascimento e óbito, comprovantes de residência, inscrição no CadÚnico e, para o rural, todo documento que mencione a atividade no campo.",
        "Guarde também todas as cartas e comunicações do INSS e o número de protocolo de cada pedido. O histórico completo dos requerimentos ajuda a demonstrar desde quando o direito existia.",
      ],
    },
  ],
  faq: [
    {
      q: "Quanto tempo depois de parar de contribuir eu ainda tenho direito ao INSS?",
      a: "Em regra 12 meses, o chamado período de graça (art. 15 da Lei 8.213/1991). Ele pode ser ampliado em mais 12 meses para quem tem mais de 120 contribuições sem perda da qualidade e mais 12 meses para quem comprova desemprego.",
    },
    {
      q: "Qual a idade mínima para se aposentar hoje?",
      a: "Na regra permanente da Reforma, 65 anos para homens e 62 para mulheres, com 20 e 15 anos de contribuição, respectivamente. Quem já contribuía antes de 13/11/2019 pode usar regras de transição, e o trabalhador rural tem regra própria de 60 e 55 anos.",
    },
    {
      q: "O INSS negou meu auxílio-doença. O que eu faço?",
      a: "Leia o motivo na carta de indeferimento. É possível recorrer ao Conselho de Recursos da Previdência Social em 30 dias, fazer novo pedido com laudos melhores ou entrar com ação na Justiça Federal, onde o juiz nomeia um perito.",
    },
    {
      q: "Quem tem direito ao BPC/LOAS?",
      a: "A pessoa com 65 anos ou mais ou com deficiência de longo prazo que esteja em situação de vulnerabilidade econômica (art. 20 da Lei 8.742/1993). Não precisa ter contribuído ao INSS, mas precisa estar inscrita no CadÚnico.",
    },
    {
      q: "Quem recebe BPC pode trabalhar?",
      a: "O BPC pressupõe falta de renda suficiente. Para a pessoa com deficiência, a lei prevê a suspensão do benefício quando ela passa a exercer atividade remunerada, com possibilidade de retomada se o trabalho cessar, e o auxílio-inclusão em certas condições. Cada situação deve ser avaliada antes de aceitar o emprego.",
    },
    {
      q: "Tenho direito à pensão por morte se vivia em união estável sem papel?",
      a: "Sim, desde que prove a união estável. A lei exige início de prova material dos 24 meses anteriores ao óbito, como contas no mesmo endereço, conta conjunta ou dependência em plano de saúde, que pode ser complementada por testemunhas.",
    },
    {
      q: "Qual o prazo para pedir pensão por morte?",
      a: "Pedindo em até 90 dias do óbito, o pagamento retroage à data da morte; para filhos menores de 16 anos, o prazo é de 180 dias. Depois disso, o benefício continua possível, mas é pago a partir do pedido.",
    },
    {
      q: "Desempregada tem direito a salário-maternidade?",
      a: "Sim, se ainda estiver no período de graça, ou seja, mantendo a qualidade de segurada. O pedido, nesse caso, é feito diretamente ao INSS pelo Meu INSS.",
    },
    {
      q: "Doença grave dispensa carência?",
      a: "Sim, para o auxílio por incapacidade e a aposentadoria por incapacidade permanente, nas doenças listadas pela legislação (art. 26, II, e art. 151 da Lei 8.213/1991), desde que a pessoa tenha qualidade de segurado quando a incapacidade surgiu.",
    },
    {
      q: "Até quando posso pedir revisão da aposentadoria?",
      a: "O prazo de decadência é de dez anos contados do primeiro pagamento (art. 103 da Lei 8.213/1991). As diferenças atrasadas que podem ser cobradas são, em regra, as dos últimos cinco anos.",
    },
    {
      q: "Ação contra o INSS é na Justiça Federal ou Estadual?",
      a: "Em regra, na Justiça Federal; até 60 salários mínimos, no Juizado Especial Federal. Quando o benefício decorre de acidente de trabalho, a competência é da Justiça Estadual (art. 109, I, da Constituição).",
    },
  ],
  artigosRelacionados: [
    "/artigos/previdenciario/aposentadoria",
    "/artigos/previdenciario/tempo-de-contribuicao-regras-transicao",
    "/artigos/previdenciario/simular-aposentadoria-meu-inss",
    "/artigos/previdenciario/auxilio-doenca",
    "/artigos/previdenciario/aposentadoria-por-invalidez-incapacidade-permanente",
    "/artigos/previdenciario/bpc-loas",
    "/artigos/previdenciario/pensao-por-morte-quem-tem-direito",
    "/artigos/previdenciario/salario-maternidade",
    "/artigos/previdenciario/aposentadoria-rural",
    "/artigos/previdenciario/aposentadoria-especial-atividades-insalubres",
    "/artigos/previdenciario/inss-negou-beneficio-o-que-fazer",
    "/artigos/previdenciario/revisao-aposentadoria",
  ],
  paginasLocais: [
    { href: "/advogado-previdenciario-salvador", label: "Advogado previdenciário em Salvador" },
    { href: "/advogado-previdenciario-camacari", label: "Advogado previdenciário em Camaçari" },
    { href: "/advogado-previdenciario", label: "Direito Previdenciário — área de atuação" },
  ],
  whatsappText: "Olá! Li o guia do INSS e quero analisar meu benefício.",
  atualizadoEm: "2026-11-04",
};

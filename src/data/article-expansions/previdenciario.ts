import type { ArticleExpansion } from "./types";

const U = "2026-11-05";

const expansions: Record<string, ArticleExpansion> = {
  "previdenciario/auxilio-doenca": {
    updatedAt: U,
    sections: [
      {
        title: "O que diz a lei sobre o benefício por incapacidade temporária",
        paragraphs: [
          "O antigo auxílio-doença está nos artigos 59 a 63 da Lei 8.213/1991. Depois da Reforma da Previdência (EC 103/2019), o nome oficial passou a ser auxílio por incapacidade temporária, mas as regras básicas continuam: é preciso estar incapaz para o trabalho ou para a atividade habitual por mais de 15 dias seguidos, ter qualidade de segurado e, em regra, cumprir a carência de 12 contribuições mensais (art. 25, I).",
          "A carência é dispensada em caso de acidente de qualquer natureza, doença profissional ou do trabalho e nas doenças graves listadas em norma do Ministério da Saúde e da Previdência, como tuberculose ativa, câncer (neoplasia maligna), cardiopatia grave, doença de Parkinson, esclerose múltipla, entre outras (art. 26, II, e art. 151 da Lei 8.213/1991).",
          "Para o empregado com carteira assinada, os primeiros 15 dias de afastamento são pagos pela empresa. O INSS paga a partir do 16º dia. Se o pedido for feito mais de 30 dias depois do afastamento, o benefício passa a contar da data do requerimento, e não do 16º dia (art. 60, § 1º). Por isso, demorar para pedir faz perder dinheiro.",
        ],
      },
      {
        title: "Passo a passo para pedir pelo Meu INSS",
        paragraphs: [
          "Entre no site ou aplicativo Meu INSS com a conta Gov.br. Na busca, digite benefício por incapacidade e escolha a opção de pedido. O sistema pergunta se você quer enviar os documentos médicos para análise documental (o chamado Atestmed) ou agendar perícia presencial.",
          "Na análise documental, você anexa atestado ou laudo legível, com nome completo, data, CID ou descrição da doença, tempo estimado de afastamento, assinatura e número do conselho do médico. Se o documento estiver incompleto, o pedido costuma ser negado ou convertido em perícia. Na perícia presencial, leve todos os originais e chegue com antecedência.",
          "Depois do pedido, acompanhe pela opção Consultar pedidos. O resultado aparece ali, com a data de cessação do benefício (DCB). Se você continuar incapaz quando a data estiver perto, faça o pedido de prorrogação nos 15 dias finais antes da cessação, também pelo Meu INSS ou pelo telefone 135.",
        ],
      },
      {
        title: "Como preparar o laudo médico para a perícia",
        paragraphs: [
          "O perito do INSS não avalia só a doença; avalia se a doença impede o seu trabalho específico. Por isso, o laudo deve explicar a relação entre o problema de saúde e a função que você exerce. Um exemplo típico: um pedreiro com hérnia de disco tem limitação diferente de um atendente de telemarketing com o mesmo diagnóstico.",
          "Peça ao seu médico que descreva sintomas, limitações (não pode carregar peso, não pode ficar em pé por muito tempo, não pode dirigir), tratamento em curso, medicamentos e prazo previsto de recuperação. Exames de imagem, receitas e relatórios de fisioterapia ou psicoterapia reforçam o quadro. Em doenças psiquiátricas, relatórios de acompanhamento contínuo têm muito peso.",
        ],
      },
      {
        title: "Quanto se recebe e o que muda no acidente de trabalho",
        paragraphs: [
          "O valor corresponde a 91% do salário de benefício, que é a média dos salários de contribuição. Pela regra do art. 29, § 10, da Lei 8.213/1991, o benefício não pode ultrapassar a média dos últimos 12 salários de contribuição. Nunca será menor que o salário mínimo vigente nem maior que o teto vigente do INSS.",
          "Quando a incapacidade decorre de acidente de trabalho ou doença ocupacional, o benefício é acidentário (espécie B91). Nesse caso, o empregado tem estabilidade de 12 meses após o retorno (art. 118 da Lei 8.213/1991) e a empresa deve continuar depositando o FGTS durante o afastamento. Se o INSS concedeu como comum (B31) algo que tem relação com o trabalho, é possível pedir a conversão, com a CAT e provas do nexo.",
        ],
      },
      {
        title: "Erros comuns que levam à negativa",
        paragraphs: [
          "Os motivos mais frequentes de indeferimento são: atestado sem prazo de afastamento ou sem CID; pedido feito por quem já perdeu a qualidade de segurado por ficar muito tempo sem contribuir (o período de graça do art. 15 varia de 12 a 36 meses conforme o caso); doença que começou antes da filiação ao INSS; e falta à perícia sem justificativa.",
          "Outro erro é voltar a trabalhar sem alta e continuar recebendo. Isso pode gerar cobrança dos valores. Se você se sentir melhor antes da data prevista, comunique o INSS. Se o benefício foi cortado e você ainda não consegue trabalhar, não espere: junte novos laudos e peça novo benefício, recurso ou ação judicial.",
        ],
      },
      {
        title: "Quando procurar um advogado",
        paragraphs: [
          "Vale buscar orientação quando o INSS nega mesmo com laudos claros, quando há dúvida sobre a qualidade de segurado, quando o benefício deveria ser acidentário ou quando a incapacidade parece ser permanente, caso em que pode caber aposentadoria por incapacidade permanente. Na Justiça Federal, a perícia é feita por médico nomeado pelo juiz, diferente do perito do INSS, e o segurado pode apresentar quesitos e laudos de seu médico assistente.",
        ],
      },
    ],
    faq: [
      {
        question: "Quantos dias o INSS demora para responder o pedido de auxílio-doença?",
        answer: "Não há prazo fixo garantido. A análise documental costuma ser mais rápida que a perícia presencial, que depende da agenda da agência. Acompanhe pelo Meu INSS, em Consultar pedidos.",
      },
      {
        question: "Posso pedir auxílio-doença sem perícia?",
        answer: "Sim. O Meu INSS permite enviar atestado ou laudo para análise documental. Se o documento for considerado insuficiente, o INSS pode negar ou exigir perícia presencial.",
      },
      {
        question: "O que fazer quando o auxílio-doença acaba e eu ainda estou doente?",
        answer: "Peça a prorrogação nos 15 dias anteriores à data de cessação. Se perdeu esse prazo, faça novo requerimento com laudos atualizados. Se o INSS negar, cabe recurso ou ação judicial.",
      },
      {
        question: "Desempregado tem direito a auxílio-doença?",
        answer: "Sim, se ainda estiver no período de graça, ou seja, mantendo a qualidade de segurado após a última contribuição, e cumprir a carência, quando exigida.",
      },
    ],
  },

  "previdenciario/bpc-loas": {
    updatedAt: U,
    sections: [
      {
        title: "Base legal do BPC e como a renda é calculada",
        paragraphs: [
          "O BPC está no art. 203, V, da Constituição e no art. 20 da Lei 8.742/1993 (LOAS). O critério de renda é ter renda familiar por pessoa igual ou inferior a 1/4 do salário mínimo vigente (art. 20, § 3º). Para o cálculo, considera-se família o requerente, o cônjuge ou companheiro, os pais (ou madrasta e padrasto), os irmãos solteiros, os filhos e enteados solteiros e os menores tutelados, desde que morem na mesma casa (art. 20, § 1º).",
          "A lei também exclui do cálculo o BPC ou benefício previdenciário de até um salário mínimo recebido por outro idoso com 65 anos ou mais ou por pessoa com deficiência da mesma família (art. 20, § 14). Exemplo típico: um casal de idosos em que o marido recebe aposentadoria de um salário mínimo; esse valor não impede que a esposa receba o BPC.",
          "Mesmo quando a renda passa um pouco do limite, a lei admite que a situação de vulnerabilidade seja demonstrada por outros elementos, como gastos com remédios, fraldas, consultas e alimentação especial não fornecidos pelo SUS (art. 20, § 11). Esse ponto costuma ser decisivo em ações judiciais.",
        ],
      },
      {
        title: "Passo a passo: CadÚnico e pedido no Meu INSS",
        paragraphs: [
          "O primeiro passo é fazer ou atualizar a inscrição no Cadastro Único no CRAS do seu município. Todos os moradores da casa devem estar no cadastro, com renda informada corretamente. Diferenças entre o CadÚnico e o que for dito ao INSS são uma das principais causas de negativa.",
          "Com o CadÚnico em dia, entre no Meu INSS, procure por Benefício Assistencial à Pessoa Idosa ou Benefício Assistencial à Pessoa com Deficiência e preencha a declaração de composição do grupo familiar. Anexe documentos de todos os moradores e, no caso de deficiência, laudos e exames. Também é possível pedir pelo telefone 135.",
          "No BPC para pessoa com deficiência, o INSS faz a avaliação biopsicossocial, composta por perícia médica e avaliação social. A avaliação social analisa barreiras do dia a dia: acesso a transporte, escola, trabalho, moradia. Por isso, além do laudo, ajudam relatórios escolares, de terapias e de assistentes sociais.",
        ],
      },
      {
        title: "Deficiência, autismo e doenças de longo prazo",
        paragraphs: [
          "Para o BPC, pessoa com deficiência é quem tem impedimento de longo prazo, ou seja, que produz efeitos por pelo menos 2 anos (art. 20, § 2º e § 10, da LOAS). Não é preciso estar totalmente incapaz para qualquer atividade; o que se avalia é se o impedimento, somado às barreiras sociais, dificulta a participação na sociedade em igualdade de condições.",
          "Crianças com transtorno do espectro autista, deficiência intelectual, paralisia cerebral, síndromes genéticas e adultos com sequelas graves de AVC ou doenças degenerativas estão entre os casos frequentes. Em crianças, avalia-se o impacto da condição no desenvolvimento e na rotina da família, já que não se fala em trabalho.",
        ],
      },
      {
        title: "Direitos e deveres de quem recebe o BPC",
        paragraphs: [
          "O BPC não paga 13º e não gera pensão por morte para a família, porque é assistencial. Também não pode ser acumulado com aposentadoria ou pensão, salvo exceções como assistência médica e pensão especial indenizatória.",
          "O benefício deve ser revisto a cada 2 anos (art. 21 da LOAS) e o CadÚnico precisa ser mantido atualizado. Mudanças na composição da família ou na renda precisam ser informadas. A pessoa com deficiência que passa a trabalhar com carteira pode ter o BPC suspenso e, conforme o caso, receber o auxílio-inclusão (art. 26-A da LOAS); se perder o emprego, pode pedir a retomada do BPC.",
        ],
      },
      {
        title: "Erros comuns e quando procurar um advogado",
        paragraphs: [
          "Erros frequentes: CadÚnico desatualizado ou com pessoa que já não mora na casa; informar renda informal estimada para cima; laudos que só citam o CID sem descrever limitações; e desistir após a primeira negativa. Em caso de indeferimento, a família pode recorrer em 30 dias ou ir à Justiça Federal, onde há perícia médica e estudo social feitos por profissionais nomeados pelo juiz.",
          "A orientação de um advogado é útil quando a renda está próxima do limite, quando a negativa se baseou na avaliação social ou médica e quando há valores atrasados a recuperar desde a data do requerimento.",
        ],
      },
    ],
    faq: [
      {
        question: "Quem recebe Bolsa Família pode receber BPC?",
        answer: "Sim. O valor do Bolsa Família não entra no cálculo da renda para o BPC. É importante manter o CadÚnico atualizado, porque ele é usado nos dois programas.",
      },
      {
        question: "Aposentadoria do marido conta na renda para o BPC do idoso?",
        answer: "Se o marido tem 65 anos ou mais, ou é pessoa com deficiência, e recebe benefício de até um salário mínimo, esse valor é excluído do cálculo (art. 20, § 14, da LOAS).",
      },
      {
        question: "BPC autismo: precisa de laudo de qual médico?",
        answer: "Laudos de neurologista, psiquiatra ou neuropediatra são os mais comuns, junto com relatórios de terapias (fonoaudiologia, terapia ocupacional, psicologia) e da escola. O importante é descrever as limitações no dia a dia.",
      },
      {
        question: "Quanto tempo demora o BPC?",
        answer: "Não há prazo garantido. Depende da fila do INSS e da agenda da avaliação biopsicossocial. Se o pedido ficar parado por muito tempo, há medidas administrativas e judiciais para cobrar a análise.",
      },
    ],
  },

  "previdenciario/simular-aposentadoria-meu-inss": {
    updatedAt: U,
    sections: [
      {
        title: "Passo a passo detalhado no aplicativo",
        paragraphs: [
          "Acesse o Meu INSS com sua conta Gov.br. Na tela inicial, procure Simular Aposentadoria. O sistema lê automaticamente o seu CNIS (Cadastro Nacional de Informações Sociais) e mostra, para cada regra, se você já cumpriu os requisitos ou quanto falta. Leia com calma cada cartão: ele indica tempo de contribuição considerado, idade, pontos e a data provável.",
          "Antes de confiar no resultado, baixe o extrato do CNIS em Extrato de Contribuição (CNIS) e compare com suas carteiras de trabalho, carnês e contracheques. Procure vínculos sem data de saída, períodos faltando, salários zerados e indicadores de pendência ao lado das linhas, que mostram que o INSS ainda não aceitou aquele dado.",
          "Se houver erro, use o serviço Atualizar vínculos e remunerações ou o pedido de acerto de CNIS, anexando documentos. Corrigir o cadastro antes de pedir a aposentadoria evita negativa e cálculo menor.",
        ],
      },
      {
        title: "Entendendo as regras que aparecem na simulação",
        paragraphs: [
          "A EC 103/2019 criou a regra permanente e regras de transição para quem já contribuía até 13/11/2019. Na regra permanente, a idade mínima é 62 anos para mulher e 65 para homem, com 15 anos de contribuição para mulher e 15 ou 20 anos para homem, conforme a data de filiação.",
          "As transições mais comuns são: regra de pontos (idade mais tempo de contribuição, com pontuação que sobe a cada ano); idade mínima progressiva; pedágio de 50% para quem estava perto de se aposentar em 2019; pedágio de 100%, com idade mínima de 57 anos para mulher e 60 para homem; e a transição da aposentadoria por idade (arts. 15 a 20 da EC 103/2019). A simulação mostra todas, mas não diz qual paga mais.",
        ],
      },
      {
        title: "Por que a simulação pode estar errada",
        paragraphs: [
          "A ferramenta só enxerga o que está no CNIS. Ela não considera, por conta própria, tempo especial (insalubridade e periculosidade), tempo rural sem contribuição, tempo de serviço militar, de aluno-aprendiz ou de regime próprio de servidor que ainda não foi averbado. Esses períodos podem antecipar a aposentadoria em anos.",
          "Um exemplo típico: um trabalhador que passou 10 anos exposto a ruído em uma fábrica aparece na simulação como faltando três anos, mas, convertido o tempo especial anterior a 13/11/2019, já poderia ter se aposentado. Outro caso comum é a mulher que trabalhou na roça com a família na adolescência e não sabe que esse período pode ser reconhecido.",
        ],
      },
      {
        title: "Valor estimado: como é calculado",
        paragraphs: [
          "Pela regra geral da EC 103/2019, o benefício corresponde a 60% da média de todos os salários de contribuição desde julho de 1994, mais 2% por ano que passar de 15 anos de contribuição (mulheres) ou de 20 anos (homens). Algumas transições, como o pedágio de 100%, têm cálculo próprio. O valor fica sempre entre o salário mínimo vigente e o teto vigente.",
          "Por isso, às vezes vale a pena esperar alguns meses: cada ano a mais de contribuição soma 2% e pode alcançar uma regra mais vantajosa. Em outros casos, esperar não muda nada e só faz perder parcelas. Essa comparação é o que se chama de planejamento previdenciário.",
        ],
      },
      {
        title: "Quando procurar um advogado",
        paragraphs: [
          "Vale fazer uma análise profissional quando há tempo especial, rural, de servidor público ou no exterior; quando o CNIS tem muitas pendências; ou quando a diferença entre as regras é grande. O advogado pode calcular cada cenário com base nos documentos, e não só no que o INSS registrou, e indicar a data mais adequada para o pedido.",
        ],
      },
    ],
    faq: [
      {
        question: "Simulação do Meu INSS mostra o valor da aposentadoria?",
        answer: "Mostra uma estimativa, calculada só com os salários do CNIS. Se houver salários faltando ou tempo especial não reconhecido, o valor real pode ser diferente.",
      },
      {
        question: "O que significa pendência no CNIS?",
        answer: "São indicadores de que o INSS ainda não validou aquela informação, como vínculo sem data de saída ou contribuição abaixo do mínimo. Esses períodos podem ser desconsiderados até serem corrigidos com documentos.",
      },
      {
        question: "Posso pedir a aposentadoria direto pela simulação?",
        answer: "Quando algum requisito está cumprido, o aplicativo oferece a opção de fazer o pedido. Antes de confirmar, confira o CNIS e se a regra escolhida é a mais vantajosa.",
      },
    ],
  },

  "previdenciario/salario-maternidade": {
    updatedAt: U,
    sections: [
      {
        title: "Carência depois do julgamento do STF",
        paragraphs: [
          "A Lei 8.213/1991 (art. 25, III) exigia 10 contribuições mensais da contribuinte individual (autônoma), da facultativa e da segurada especial. Em 2024, ao julgar as ADIs 2110 e 2111, o STF considerou inconstitucional exigir carência da contribuinte individual e da facultativa, igualando-as à empregada, que nunca precisou de carência.",
          "Na prática, a autônoma, a MEI e a facultativa (por exemplo, dona de casa que contribui) precisam ter qualidade de segurada na data do parto, mas não precisam mais comprovar 10 meses de contribuição. Pedidos negados por falta de carência depois dessa decisão podem ser revistos. Para a segurada especial (trabalhadora rural em economia familiar), segue a necessidade de comprovar atividade rural nos 10 meses anteriores ao parto (art. 39, parágrafo único).",
        ],
      },
      {
        title: "Passo a passo para pedir no Meu INSS",
        paragraphs: [
          "A empregada com carteira assinada, em regra, recebe o salário-maternidade pela própria empresa, que depois compensa com o INSS (art. 72, § 1º, da Lei 8.213/1991). Basta entregar ao RH o atestado médico ou a certidão de nascimento. Empregada doméstica, MEI, autônoma, facultativa, desempregada e trabalhadora rural pedem diretamente ao INSS.",
          "No Meu INSS, procure Salário-maternidade urbano ou Salário-maternidade rural. Informe a data do parto ou da adoção, anexe a certidão de nascimento (ou termo de guarda para adoção) e documentos pessoais. A rural deve anexar a autodeclaração de segurada especial e documentos da atividade no campo. Também é possível pedir pelo telefone 135.",
          "O benefício pode começar até 28 dias antes do parto, com atestado médico, ou a partir do nascimento. A duração é de 120 dias, e no caso de aborto não criminoso, de duas semanas.",
        ],
      },
      {
        title: "Desempregada: como saber se ainda tem direito",
        paragraphs: [
          "Quem saiu do emprego mantém a qualidade de segurada por um período chamado de graça (art. 15 da Lei 8.213/1991): em regra 12 meses após a última contribuição, podendo chegar a 24 meses para quem tem mais de 120 contribuições sem interrupção que faça perder a qualidade, e mais 12 meses se houver comprovação de desemprego involuntário. Se o parto acontecer dentro desse período, há direito ao benefício, pago pelo INSS.",
          "Exemplo típico: mulher demitida em março, que teve o bebê em dezembro do mesmo ano. Ela ainda está no período de graça e pode pedir. Se a dispensa ocorreu durante a gravidez, também pode haver direitos trabalhistas pela estabilidade da gestante, que são uma questão separada.",
        ],
      },
      {
        title: "Erros comuns que fazem perder o benefício",
        paragraphs: [
          "Os erros mais frequentes são: achar que desempregada não tem direito; deixar o prazo passar; contribuir como MEI ou facultativa com pagamentos em atraso feitos depois do parto, que podem não ser aceitos; e, na zona rural, apresentar apenas declaração de testemunhas sem nenhum documento em nome da segurada ou da família.",
          "O prazo para cobrar o benefício é de 5 anos a partir do parto (prescrição prevista no art. 103, parágrafo único, da Lei 8.213/1991). Depois disso, as parcelas se perdem. Por isso, mesmo quem teve filho há alguns anos deve verificar se ainda dá tempo.",
        ],
      },
      {
        title: "Quando procurar um advogado",
        paragraphs: [
          "Vale buscar orientação quando o pedido foi negado por falta de carência ou de qualidade de segurada, quando a prova rural é difícil, quando o INSS não reconheceu contribuições ou quando o pai ou a pessoa adotante precisa pedir o benefício. Também é útil para verificar se um indeferimento antigo pode ser revisto à luz da decisão do STF.",
        ],
      },
    ],
    faq: [
      {
        question: "Autônoma ainda precisa de 10 contribuições para o salário-maternidade?",
        answer: "Depois do julgamento das ADIs 2110 e 2111 pelo STF, em 2024, a exigência de carência para contribuinte individual e facultativa foi considerada inconstitucional. Ela precisa ter qualidade de segurada na data do fato gerador.",
      },
      {
        question: "Quem está desempregada recebe salário-maternidade de quanto?",
        answer: "O valor é calculado com base nas últimas contribuições, observado o mínimo de um salário mínimo vigente. Quem contribuía sobre o mínimo recebe o mínimo.",
      },
      {
        question: "Até quando posso pedir o salário-maternidade?",
        answer: "O pedido pode ser feito em até 5 anos depois do parto ou da adoção. Passado esse prazo, as parcelas prescrevem.",
      },
      {
        question: "Mãe de primeira viagem que nunca trabalhou tem direito?",
        answer: "Só se tiver qualidade de segurada, por exemplo, contribuindo como facultativa antes do parto, ou se for trabalhadora rural em economia familiar que comprove a atividade.",
      },
    ],
  },

  "previdenciario/revisao-aposentadoria": {
    updatedAt: U,
    sections: [
      {
        title: "Prazos: decadência e prescrição",
        paragraphs: [
          "O art. 103 da Lei 8.213/1991 fixa o prazo de 10 anos para pedir a revisão do ato de concessão, contado do primeiro dia do mês seguinte ao do recebimento da primeira prestação. Depois desse prazo, a revisão do cálculo inicial, em regra, não é mais possível. Além disso, só se recebem as diferenças dos últimos 5 anos antes do pedido (art. 103, parágrafo único).",
          "Por isso, quem se aposentou há 8 ou 9 anos deve agir com rapidez. Um pedido administrativo de revisão ou uma ação ajuizada dentro do prazo preserva o direito.",
        ],
      },
      {
        title: "Revisões que continuam possíveis",
        paragraphs: [
          "Correção do CNIS: vínculos, salários ou períodos que não entraram no cálculo, como um emprego antigo sem registro eletrônico ou salários informados a menor pela empresa. Basta provar com carteira de trabalho, contracheques, termo de rescisão ou sentença trabalhista.",
          "Tempo especial ou rural não reconhecido: períodos de exposição a agentes nocivos ou trabalho rural podem aumentar o tempo de contribuição e, consequentemente, o valor. Atividades concomitantes: quem teve dois empregos ao mesmo tempo depois de 1999 pode ter tido os salários calculados de forma errada; o STJ, no Tema 1070, firmou que os salários de contribuição devem ser somados.",
          "Revisão do teto: aposentadorias antigas limitadas ao teto podem ter diferenças pelos novos tetos das Emendas 20/1998 e 41/2003, conforme decidido pelo STF no RE 564.354. Há ainda a reafirmação da DER, que permite considerar contribuições posteriores ao pedido para alcançar uma regra melhor (Tema 995 do STJ).",
        ],
      },
      {
        title: "Passo a passo para pedir revisão no INSS",
        paragraphs: [
          "No Meu INSS, procure Revisão e escolha o benefício. Explique o que está errado e anexe os documentos que comprovam. Também é possível pedir a cópia do processo administrativo de concessão, que traz a memória de cálculo e mostra quais períodos e salários foram usados.",
          "Se o INSS negar ou demorar, a revisão pode ser pedida na Justiça Federal. Nos Juizados Especiais Federais, causas de até 60 salários mínimos tramitam sem custas no primeiro grau.",
        ],
      },
      {
        title: "Cuidado: nem toda revisão aumenta o benefício",
        paragraphs: [
          "Antes de qualquer pedido, é preciso calcular. Incluir um período pode mudar a regra aplicada e, em situações específicas, reduzir a média. Na revisão administrativa, o INSS pode identificar erros a favor dele. Um exemplo típico é o aposentado que pede a inclusão de um vínculo antigo com salários baixos e descobre que a média cairia.",
          "Também é importante não confundir revisão com desaposentação, que o STF afastou (Tema 503), nem com a Revisão da Vida Toda, afastada em 2024 no julgamento das ADIs 2110 e 2111.",
        ],
      },
      {
        title: "Quando procurar um advogado",
        paragraphs: [
          "Vale procurar orientação ao receber a carta de concessão com valor inesperado, quando o CNIS tem lacunas, quando houve trabalho especial, rural ou concomitante e, principalmente, quando o prazo de 10 anos está perto do fim. O cálculo prévio mostra se a revisão compensa.",
        ],
      },
    ],
    faq: [
      {
        question: "Como saber se minha aposentadoria foi calculada errado?",
        answer: "Compare a carta de concessão e a memória de cálculo com o CNIS e suas carteiras de trabalho. Períodos e salários que faltam ou tempo especial não reconhecido são sinais de possível erro.",
      },
      {
        question: "Aposentado há mais de 10 anos pode pedir revisão?",
        answer: "Em regra, não para rever o cálculo inicial, por causa da decadência do art. 103 da Lei 8.213/1991. Algumas situações específicas têm tratamento próprio e precisam ser analisadas caso a caso.",
      },
      {
        question: "A revisão do teto ainda existe?",
        answer: "Sim, para benefícios antigos que foram limitados ao teto e não tiveram a readequação aos novos tetos das Emendas 20/1998 e 41/2003. É preciso verificar a carta de concessão.",
      },
      {
        question: "Quanto tempo leva uma revisão de aposentadoria?",
        answer: "Depende da via. O pedido administrativo segue a fila do INSS. Na Justiça, o tempo varia conforme a vara e a necessidade de perícia ou cálculo.",
      },
    ],
  },

  "previdenciario/aposentadoria-rural": {
    updatedAt: U,
    sections: [
      {
        title: "Base legal e quem é segurado especial",
        paragraphs: [
          "A aposentadoria por idade rural está no art. 48, § 1º, da Lei 8.213/1991, e foi mantida pela EC 103/2019 com 55 anos para mulher e 60 para homem. O segurado especial é definido no art. 11, VII: produtor, parceiro, meeiro, arrendatário, pescador artesanal e assemelhados que trabalham individualmente ou em regime de economia familiar, sem empregados permanentes, além do cônjuge e dos filhos maiores de 16 anos que trabalham com a família.",
          "É preciso comprovar 180 meses (15 anos) de atividade rural, mesmo que de forma descontínua, no período imediatamente anterior ao pedido ou ao cumprimento da idade (art. 48, § 2º, e art. 143).",
        ],
      },
      {
        title: "Como provar o trabalho rural",
        paragraphs: [
          "A lei exige início de prova material, ou seja, algum documento, e não aceita prova só com testemunhas (Súmula 149 do STJ). Mas não é preciso ter documento de cada ano: a Súmula 577 do STJ admite reconhecer tempo anterior ao documento mais antigo, desde que confirmado por testemunhas firmes.",
          "Servem como prova: certidões de casamento ou de nascimento dos filhos com profissão de lavrador; ficha de sindicato rural; notas de venda de produção; documentos do imóvel (ITR, CCIR, escritura); contratos de parceria ou comodato; cadastro em programas como Garantia-Safra ou PRONAF; ficha de matrícula escolar dos filhos em escola rural; prontuário do posto de saúde informando zona rural; registro de pescador (RGP), entre outros. Documentos em nome do marido ou dos pais podem ser usados por quem trabalhava junto na família.",
        ],
      },
      {
        title: "Passo a passo para pedir no Meu INSS",
        paragraphs: [
          "No Meu INSS, escolha Aposentadoria por Idade Rural. O sistema pede a autodeclaração do segurado especial (art. 38-B da Lei 8.213/1991), um formulário em que você descreve onde, como e com quem trabalhou em cada período. Preencha com cuidado, com nomes de propriedades, municípios e culturas. Informações contraditórias costumam levar à negativa.",
          "Anexe todos os documentos rurais em ordem cronológica. O INSS confronta a autodeclaração com bases públicas. Se houver dúvida, pode marcar entrevista rural ou justificação administrativa com testemunhas. Em caso de negativa, cabe recurso ou ação judicial, em que as testemunhas são ouvidas pelo juiz.",
        ],
      },
      {
        title: "Aposentadoria híbrida: campo e cidade",
        paragraphs: [
          "Quem trabalhou parte da vida no campo e parte na cidade pode somar os dois tempos na chamada aposentadoria híbrida (art. 48, § 3º). Nesse caso, a idade é a da regra urbana. O STJ, no Tema 1007, admitiu contar o tempo rural antigo, mesmo sem contribuição e mesmo que não seja o último trabalho.",
          "Exemplo típico: uma mulher que trabalhou na roça com os pais dos 12 aos 25 anos e depois foi empregada doméstica na capital por 8 anos. Separados, os períodos não bastariam; somados, podem permitir a aposentadoria.",
        ],
      },
      {
        title: "Erros comuns e quando procurar um advogado",
        paragraphs: [
          "Erros comuns: ter vínculo urbano longo no período de carência e não explicar; ter imóvel grande ou empregados permanentes, o que pode descaracterizar o regime de economia familiar; apresentar documentos todos produzidos perto do pedido; e testemunhas que não conhecem de fato a rotina de trabalho.",
          "Um advogado ajuda a organizar a prova, escolher as testemunhas, avaliar se é melhor pedir a aposentadoria rural pura ou a híbrida e recorrer quando o INSS negar.",
        ],
      },
    ],
    faq: [
      {
        question: "Quais documentos o INSS aceita para aposentadoria rural?",
        answer: "Certidões com profissão de lavrador, documentos da terra, notas de produtor, ficha do sindicato, cadastros em programas rurais, entre outros. O rol do art. 106 da Lei 8.213/1991 é exemplificativo.",
      },
      {
        question: "Só testemunha serve para provar trabalho rural?",
        answer: "Não. É preciso pelo menos um início de prova documental (Súmula 149 do STJ). As testemunhas complementam e podem estender o período provado.",
      },
      {
        question: "Quem mora na cidade e trabalha na roça pode se aposentar como rural?",
        answer: "Sim. O que importa é a atividade rural, e não o endereço. Morar na cidade próxima e trabalhar diariamente no campo não impede o direito.",
      },
      {
        question: "O que é aposentadoria híbrida?",
        answer: "É a aposentadoria por idade que soma tempo rural e urbano (art. 48, § 3º, da Lei 8.213/1991), com a idade da regra urbana.",
      },
    ],
  },

  "previdenciario/aposentadoria-especial-motorista-onibus": {
    updatedAt: U,
    sections: [
      {
        title: "Antes e depois de 28/04/1995: o que muda na prova",
        paragraphs: [
          "Até 28/04/1995, a atividade de motorista de ônibus e de caminhão podia ser reconhecida como especial apenas pela categoria profissional, com base nos decretos da época (Decreto 53.831/1964 e Decreto 83.080/1979). Bastava provar a função, por carteira de trabalho ou registro de empregado.",
          "A partir de 29/04/1995 (Lei 9.032/1995), passou a ser necessário comprovar a exposição efetiva a agente nocivo, de forma habitual e permanente. Para motoristas de ônibus, os agentes mais discutidos são ruído e vibração de corpo inteiro. Por isso, o PPP e o laudo técnico (LTCAT) se tornaram centrais.",
        ],
      },
      {
        title: "Ruído e vibração: limites e provas",
        paragraphs: [
          "Os limites de ruído mudaram com o tempo: acima de 80 dB até 05/03/1997; acima de 90 dB de 06/03/1997 a 18/11/2003; e acima de 85 dB a partir de 19/11/2003. Em ônibus com motor dianteiro, os níveis podem superar esses limites, o que precisa estar medido no laudo.",
          "A vibração de corpo inteiro é medida por normas técnicas próprias. Há decisões judiciais reconhecendo a especialidade do motorista de ônibus por vibração quando o laudo demonstra exposição acima do limite, mas o tema é discutido e depende da prova. Quando o PPP da empresa é omisso, é possível pedir laudo por similaridade ou perícia judicial.",
        ],
      },
      {
        title: "Regras depois da Reforma da Previdência",
        paragraphs: [
          "Quem completou 25 anos de atividade especial até 13/11/2019 tem direito adquirido às regras antigas, sem idade mínima e com cálculo mais favorável. Para quem não completou, a EC 103/2019 criou uma transição por pontos: 25 anos de atividade especial e soma de idade com tempo de contribuição igual a 86 pontos (art. 21). Na regra permanente, a idade mínima é de 60 anos para a atividade de 25 anos (art. 19, § 1º).",
          "Outra mudança importante: o tempo especial trabalhado depois de 13/11/2019 não pode mais ser convertido em tempo comum (art. 25, § 2º, da EC 103/2019). Já o tempo especial anterior continua podendo ser convertido, com multiplicador de 1,4 para homens e 1,2 para mulheres, e pode antecipar uma aposentadoria comum.",
        ],
      },
      {
        title: "Passo a passo para pedir",
        paragraphs: [
          "Peça o PPP de cada empresa em que trabalhou como motorista ou cobrador. A empresa é obrigada a fornecer. Confira se o documento traz o nome do responsável técnico pelos registros ambientais, os agentes nocivos e os níveis medidos. Se a empresa fechou, procure laudos de empresas do mesmo ramo, ações trabalhistas antigas ou o sindicato.",
          "No Meu INSS, escolha Aposentadoria Especial ou Aposentadoria por Tempo de Contribuição, conforme o caso, e anexe todos os PPPs, laudos e carteiras de trabalho. Se o INSS não reconhecer os períodos, cabe recurso administrativo ou ação na Justiça Federal, onde pode ser feita perícia técnica.",
        ],
      },
      {
        title: "Erros comuns e quando procurar um advogado",
        paragraphs: [
          "Erros frequentes: aceitar PPP com campos em branco ou com ruído medido abaixo do limite sem questionar; esquecer períodos anteriores a 1995 que dariam direito por categoria; e pedir a aposentadoria especial quando seria mais vantajoso converter o tempo e pedir outra regra. Lembre que, pelo Tema 709 do STF, quem recebe aposentadoria especial não pode continuar trabalhando em atividade especial.",
          "A análise de um advogado é recomendada quando os PPPs são incompletos, quando a empresa fechou e quando é preciso comparar cenários de cálculo.",
        ],
      },
    ],
    faq: [
      {
        question: "Motorista de ônibus que trabalhou antes de 1995 tem tempo especial?",
        answer: "Sim. Até 28/04/1995, a atividade de motorista de ônibus era enquadrada como especial pela categoria profissional, bastando provar a função.",
      },
      {
        question: "A empresa de ônibus fechou. Como consigo o PPP?",
        answer: "É possível usar laudos de empresas similares, documentos de ações trabalhistas, informações do sindicato ou pedir perícia na Justiça. Cada situação deve ser analisada.",
      },
      {
        question: "Cobrador de ônibus tem direito à aposentadoria especial?",
        answer: "Até 28/04/1995, o cobrador também tinha enquadramento por categoria. Depois disso, depende da prova de exposição a agentes nocivos no PPP ou em laudo.",
      },
    ],
  },

  "previdenciario/revisao-da-vida-toda-como-aumentar-aposentadoria": {
    updatedAt: U,
    sections: [
      {
        title: "Linha do tempo: como a tese surgiu e por que caiu",
        paragraphs: [
          "Em 1999, a Lei 9.876 mudou o cálculo das aposentadorias. Para quem já era filiado, criou uma regra de transição (art. 3º) que considerava apenas os salários a partir de julho de 1994, início do Plano Real. Quem tinha salários altos antes de 1994 e baixos depois saía prejudicado.",
          "A tese da Vida Toda pedia o direito de escolher a regra definitiva, com todos os salários. Em 2019, o STJ acolheu a tese (Tema 999) e, em 2022, o STF também, no Tema 1102. Porém, em março de 2024, ao julgar as ADIs 2110 e 2111, que discutiam a Lei 9.876/1999, o STF declarou constitucional a regra de transição e afirmou que ela é obrigatória, e não opcional. Com isso, a tese perdeu a base jurídica.",
          "É importante ser honesto: hoje não existe caminho seguro para conseguir a Revisão da Vida Toda. Qualquer oferta que prometa esse resultado deve ser vista com desconfiança.",
        ],
      },
      {
        title: "Quem já tinha ação: o que fazer agora",
        paragraphs: [
          "Quem ajuizou ação antes do julgamento deve pedir ao seu advogado ou consultar os autos para saber em que fase está o processo e como a decisão do STF foi aplicada. Muitos processos foram julgados improcedentes ou ficaram aguardando a definição dos efeitos.",
          "Sobre valores já recebidos, o STF fixou parâmetros para proteger, em regra, quem recebeu de boa-fé por decisão judicial, e tratou também da questão dos honorários de sucumbência. Os detalhes da modulação precisam ser conferidos caso a caso, nos autos, antes de qualquer conclusão sobre devolução.",
        ],
      },
      {
        title: "Alternativas reais para aumentar a aposentadoria",
        paragraphs: [
          "Erros no CNIS: vínculos não registrados, salários informados a menor pela empresa ou períodos esquecidos. Exemplo típico: aposentado que teve um emprego por cinco anos nos anos 2000 que não aparece no cadastro. Corrigido, a média e o tempo mudam.",
          "Tempo especial ou rural não reconhecido: quem trabalhou exposto a ruído, calor, produtos químicos ou agentes biológicos, ou trabalhou na roça com a família, pode ter direito a tempo que o INSS não contou. Atividades concomitantes: para quem teve dois vínculos ao mesmo tempo, o STJ, no Tema 1070, decidiu que os salários devem ser somados. Revisão do teto, para benefícios antigos limitados ao teto (RE 564.354 do STF), e salários reconhecidos em reclamação trabalhista também podem gerar diferenças.",
        ],
      },
      {
        title: "Passo a passo para verificar se ainda cabe alguma revisão",
        paragraphs: [
          "Primeiro, confira a data do primeiro pagamento do benefício: o prazo de 10 anos do art. 103 da Lei 8.213/1991 é decisivo. Depois, baixe no Meu INSS a carta de concessão, a memória de cálculo e o extrato do CNIS. Se possível, peça também a cópia do processo administrativo.",
          "Com esses documentos, compare cada vínculo e salário com suas carteiras e contracheques. Se encontrar divergências ou tempo especial ou rural não reconhecido, a revisão pode ser pedida no próprio Meu INSS, em Revisão, ou na Justiça Federal.",
        ],
      },
      {
        title: "Cuidados e quando procurar um advogado",
        paragraphs: [
          "Desconfie de contatos por telefone ou redes sociais oferecendo a Vida Toda ou pedindo pagamento adiantado com promessa de valores. Antes de assinar qualquer contrato, peça a análise por escrito e verifique o registro do advogado na OAB.",
          "Uma análise profissional é útil para quem tem ação da Vida Toda em andamento, para entender os efeitos da decisão do STF, e para quem quer verificar se outra revisão cabe dentro do prazo.",
        ],
      },
    ],
    faq: [
      {
        question: "A Revisão da Vida Toda acabou?",
        answer: "Na prática, sim. Em 2024, no julgamento das ADIs 2110 e 2111, o STF declarou constitucional e obrigatória a regra de transição da Lei 9.876/1999, o que afastou a tese.",
      },
      {
        question: "Meu processo da Vida Toda ainda está andando. Vou perder?",
        answer: "A tendência é que a tese não seja acolhida. É preciso verificar a situação específica nos autos com seu advogado, inclusive sobre valores recebidos e honorários.",
      },
      {
        question: "Existe outra revisão parecida com a Vida Toda?",
        answer: "Não com o mesmo fundamento. As alternativas são revisões por erro no CNIS, tempo especial ou rural, atividades concomitantes e revisão do teto, sempre dentro do prazo de 10 anos.",
      },
      {
        question: "Recebi ligação oferecendo a Revisão da Vida Toda. É golpe?",
        answer: "Ofertas desse tipo, com promessa de valores ou pedido de pagamento antecipado, merecem muita cautela. Confira o registro do profissional na OAB e não envie documentos ou dinheiro sem saber com quem está falando.",
      },
    ],
  },

  "previdenciario/aposentadoria-especial-atividades-insalubres": {
    updatedAt: U,
    sections: [
      {
        title: "Requisitos depois da EC 103/2019",
        paragraphs: [
          "A aposentadoria especial está nos arts. 57 e 58 da Lei 8.213/1991. Para quem completou o tempo especial até 13/11/2019, valem as regras antigas: 15, 20 ou 25 anos de atividade especial, sem idade mínima. Para os demais, a EC 103/2019 criou uma transição por pontos (art. 21): 66 pontos para 15 anos, 76 para 20 anos e 86 para 25 anos, somando idade e tempo de contribuição.",
          "Na regra permanente (art. 19, § 1º), exige-se idade mínima de 55, 58 ou 60 anos, conforme a atividade seja de 15, 20 ou 25 anos. O cálculo segue a regra geral de 60% da média com acréscimo de 2% por ano acima do tempo mínimo previsto, com regra própria para atividades de 15 anos.",
        ],
      },
      {
        title: "Habitualidade, permanência e EPI",
        paragraphs: [
          "Não basta trabalhar em local insalubre de vez em quando. A exposição precisa ser habitual e permanente, ou seja, parte da rotina normal de trabalho. Exemplo típico: um técnico de enfermagem que atende pacientes em UTI todos os dias tem exposição habitual a agentes biológicos; um funcionário administrativo do mesmo hospital, em regra, não.",
          "Sobre o equipamento de proteção (EPI), o STF, no Tema 555, decidiu que, se o EPI for realmente eficaz para neutralizar o agente, não há direito à aposentadoria especial; mas, no caso do ruído, a informação de EPI eficaz no PPP não afasta o tempo especial. Para outros agentes, a eficácia do EPI pode ser contestada com provas.",
        ],
      },
      {
        title: "Como conseguir e conferir o PPP",
        paragraphs: [
          "O PPP deve ser fornecido pela empresa, inclusive na rescisão, e hoje é emitido em meio eletrônico. Confira: período, função, descrição das atividades, agentes nocivos com intensidade ou concentração, técnica de medição, uso de EPI e nome do responsável técnico pelos registros ambientais em cada período.",
          "Se o PPP estiver errado ou incompleto, peça a correção por escrito à empresa. Se a empresa se negar ou tiver fechado, é possível usar laudos (LTCAT, PPRA, PGR), prova emprestada de outros processos, laudos de empresas similares ou pedir perícia judicial. Para períodos antigos, valem os formulários da época (SB-40, DSS-8030 e outros).",
        ],
      },
      {
        title: "Conversão de tempo especial e outros erros comuns",
        paragraphs: [
          "O tempo especial trabalhado até 13/11/2019 pode ser convertido em tempo comum (multiplicador de 1,4 para homens e 1,2 para mulheres, em atividade de 25 anos). Depois dessa data, a conversão é proibida (art. 25, § 2º, da EC 103/2019). Muitas pessoas não sabem disso e se aposentam mais tarde do que poderiam.",
          "Outros erros: pedir só a aposentadoria especial quando a conversão para uma regra de transição seria mais vantajosa; ignorar que, pelo Tema 709 do STF, quem recebe aposentadoria especial não pode continuar em atividade especial; e aceitar PPP genérico sem medições.",
        ],
      },
      {
        title: "Passo a passo e quando procurar um advogado",
        paragraphs: [
          "Reúna PPPs de todas as empresas, carteiras de trabalho e CNIS. No Meu INSS, peça Aposentadoria Especial ou a aposentadoria por tempo de contribuição pela regra de transição adequada, anexando tudo. Acompanhe exigências, que têm prazo para cumprimento.",
          "Um advogado é recomendado quando há PPPs incompletos, empresas fechadas, períodos antigos ou necessidade de comparar cenários de cálculo entre aposentadoria especial e comum com conversão.",
        ],
      },
    ],
    faq: [
      {
        question: "Quem usou EPI perde a aposentadoria especial?",
        answer: "Depende do agente. No ruído, o STF (Tema 555) decidiu que a declaração de EPI eficaz não afasta o tempo especial. Para outros agentes, o EPI realmente eficaz pode afastar, mas a eficácia pode ser discutida.",
      },
      {
        question: "Posso continuar trabalhando depois da aposentadoria especial?",
        answer: "Pode trabalhar, mas não em atividade especial. O STF, no Tema 709, decidiu que o benefício é suspenso se o aposentado continuar ou voltar a trabalhar exposto a agentes nocivos.",
      },
      {
        question: "Ainda posso converter tempo especial em comum?",
        answer: "Sim, para o tempo trabalhado até 13/11/2019. O período especial posterior à Reforma não pode mais ser convertido.",
      },
      {
        question: "Enfermeiro tem direito à aposentadoria especial?",
        answer: "Pode ter, se comprovar exposição habitual e permanente a agentes biológicos, normalmente pelo PPP. Cada caso depende do local e da rotina de trabalho.",
      },
    ],
  },

  "previdenciario/inss-negou-beneficio-o-que-fazer": {
    updatedAt: U,
    sections: [
      {
        title: "Primeiro passo: entender o motivo da negativa",
        paragraphs: [
          "No Meu INSS, em Consultar pedidos, abra o pedido e baixe a carta de indeferimento. Ela traz o motivo: falta de qualidade de segurado, falta de carência, parecer contrário da perícia, renda acima do limite, falta de documentos, não cumprimento de exigência, entre outros. Cada motivo pede uma estratégia diferente.",
          "Peça também a cópia integral do processo administrativo. Ela mostra quais documentos o INSS considerou, o laudo da perícia e os cálculos. É comum descobrir que um documento enviado não foi analisado ou que um período foi descartado por detalhe formal.",
        ],
      },
      {
        title: "Recurso administrativo, novo pedido ou ação judicial",
        paragraphs: [
          "O recurso ao Conselho de Recursos da Previdência Social (CRPS) deve ser apresentado em 30 dias da ciência da decisão, pelo próprio Meu INSS, na opção Recorrer. Ele é gratuito e permite juntar novos documentos. A desvantagem é o tempo de julgamento, que pode ser longo.",
          "Quando faltou apenas um documento, às vezes é mais rápido fazer um novo pedido completo. Já a ação judicial na Justiça Federal pode ser proposta sem esgotar o recurso administrativo, mas, como regra, exige que tenha havido o pedido no INSS antes (STF, RE 631.240, Tema 350). Nos Juizados Especiais Federais, causas de até 60 salários mínimos (Lei 10.259/2001) não pagam custas no primeiro grau.",
        ],
      },
      {
        title: "Estratégias por tipo de benefício",
        paragraphs: [
          "Benefício por incapacidade: junte laudos atualizados que descrevam limitações para a sua função. Na Justiça, um perito nomeado pelo juiz faz nova avaliação. BPC: revise o CadÚnico e reúna prova de gastos com saúde e da situação de vulnerabilidade; na Justiça, há estudo social. Aposentadoria: confira o CNIS, inclua tempo especial, rural ou vínculos não computados e verifique se a reafirmação da DER (Tema 995 do STJ) permite alcançar os requisitos.",
          "Pensão por morte: geralmente o problema é a prova da união estável ou da dependência. A Lei 8.213/1991 exige início de prova material produzida em até 24 meses antes do óbito (art. 16, § 5º). Contas, correspondências e documentos com o mesmo endereço ajudam.",
        ],
      },
      {
        title: "Prazos que você precisa conhecer",
        paragraphs: [
          "Recurso administrativo: 30 dias. Parcelas atrasadas: só se recebem as dos últimos 5 anos antes da ação. Revisão de benefício concedido: 10 anos (art. 103 da Lei 8.213/1991). Em benefícios por incapacidade, laudos antigos perdem força rapidamente, então quanto antes, melhor.",
          "Se o seu pedido está parado há meses sem resposta, também é possível cobrar a análise, inclusive judicialmente, conforme o caso.",
        ],
      },
      {
        title: "Erros comuns e quando procurar um advogado",
        paragraphs: [
          "Erros comuns: repetir o mesmo pedido, com os mesmos documentos, esperando outro resultado; perder o prazo de exigência; não ir à perícia; e entrar na Justiça sem os documentos que o INSS pediu, o que pode prejudicar o processo. Exemplo típico: segurada que teve aposentadoria negada por falta de 8 meses e não sabia que um vínculo de adolescência, registrado na carteira, nunca entrou no CNIS.",
          "Procurar um advogado é recomendável quando o motivo da negativa é técnico (qualidade de segurado, tempo especial, prova rural, união estável), quando há valores atrasados relevantes ou quando é preciso escolher entre recurso e ação.",
        ],
      },
    ],
    faq: [
      {
        question: "Quanto tempo tenho para recorrer da decisão do INSS?",
        answer: "O recurso administrativo deve ser feito em 30 dias a partir da ciência da decisão, pelo Meu INSS. A ação judicial não tem esse prazo, mas as parcelas mais antigas que 5 anos prescrevem.",
      },
      {
        question: "Vale mais a pena recorrer no INSS ou entrar na Justiça?",
        answer: "Depende do motivo da negativa e das provas. Erros simples podem ser resolvidos com novo pedido ou recurso. Discussões médicas ou de prova costumam ser mais bem analisadas na Justiça, com perícia independente.",
      },
      {
        question: "Preciso pagar custas para processar o INSS?",
        answer: "Nos Juizados Especiais Federais, não há custas no primeiro grau. Quem não pode pagar também pode pedir gratuidade da justiça.",
      },
      {
        question: "Como ver o motivo do indeferimento no Meu INSS?",
        answer: "Entre em Consultar pedidos, selecione o pedido e abra os detalhes ou a carta de decisão. Ali aparece o motivo e a opção de recorrer.",
      },
    ],
  },
};

export default expansions;

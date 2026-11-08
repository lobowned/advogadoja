import type { ArticleExpansion } from "./types";

const U = "2026-11-05";

const expansions: Record<string, ArticleExpansion> = {
  "trabalhista/demissao-sem-justa-causa": {
    sections: [
      {
        title: "Passo a passo nos primeiros dias depois da demissão",
        paragraphs: [
          "Assim que receber o aviso, peça uma cópia por escrito, com a data e a forma do aviso prévio: trabalhado ou indenizado. Essa data define quando começa a contar o prazo de 10 dias para o pagamento da rescisão.",
          "Em seguida, baixe o extrato do FGTS pelo aplicativo oficial e confira se todos os meses foram depositados. Falhas nos depósitos são comuns e muitas vezes só aparecem nesse momento. Guarde também os últimos holerites, porque eles mostram horas extras, adicionais e comissões que entram no cálculo.",
          "Quando receber o Termo de Rescisão (TRCT), leia com calma antes de assinar. Assinar o termo não impede você de discutir depois valores que ficaram de fora. A Súmula 330 do TST limita a quitação às parcelas e aos valores que estão escritos no documento.",
        ],
      },
      {
        title: "Aviso prévio: o que muita gente não sabe",
        paragraphs: [
          "O aviso prévio não é sempre de 30 dias. Pela Lei 12.506/2011, quem tem mais de um ano na empresa ganha mais 3 dias por ano completo de serviço, até o limite de 90 dias. Quem trabalhou dez anos, por exemplo, tem direito a um aviso bem maior que o mínimo.",
          "Se o aviso for trabalhado, a lei permite escolher entre sair 2 horas mais cedo todos os dias ou faltar 7 dias corridos no fim do aviso, sem desconto no salário (art. 488 da CLT). Essa folga existe para você procurar outro emprego.",
          "Quando o aviso é indenizado, o tempo dele conta como tempo de serviço. Isso muda a data de saída na carteira e pode aumentar o 13º e as férias proporcionais. Vale conferir se a empresa fez essa projeção.",
        ],
      },
      {
        title: "Situações comuns que mudam o resultado",
        paragraphs: [
          "Quem aderiu ao saque-aniversário do FGTS não consegue sacar o saldo da conta ao ser demitido. Nesse caso, recebe apenas a multa de 40%. O saldo continua bloqueado conforme as regras dessa modalidade. Muitos trabalhadores só descobrem isso na hora da demissão.",
          "Outra situação frequente é a demissão logo depois de o empregado revelar uma doença grave. A Súmula 443 do TST presume discriminatória a dispensa de quem tem doença que cause estigma ou preconceito. Nesses casos, a empresa precisa provar que teve outro motivo. A Lei 9.029/1995 permite pedir reintegração ou indenização.",
          "Também é comum a pessoa ser demitida enquanto tinha alguma estabilidade, como gestação ou retorno de acidente de trabalho. Aí a demissão sem justa causa pode ser anulada. Se você estava em uma dessas situações, procure orientação antes de assinar qualquer acordo.",
        ],
      },
      {
        title: "Erros que fazem o trabalhador perder dinheiro",
        paragraphs: [
          "O primeiro erro é não conferir a base de cálculo. Horas extras habituais, adicional noturno, insalubridade e comissões devem refletir nas férias, no 13º, no aviso prévio e no FGTS. Quando a empresa calcula só sobre o salário-base, a rescisão sai menor.",
          "O segundo erro é aceitar pedir demissão ou fazer um acordo quando, na verdade, a empresa queria demitir. Essas modalidades pagam menos e podem tirar o seguro-desemprego. O terceiro é deixar o prazo de 2 anos passar. Depois disso, o direito de cobrar se perde.",
        ],
      },
      {
        title: "Quando procurar um advogado trabalhista",
        paragraphs: [
          "Vale buscar orientação quando a rescisão não for paga em 10 dias, quando o FGTS tiver meses faltando, quando você fazia horas extras sem receber ou quando havia alguma estabilidade. Também é recomendável quando a empresa propõe um acordo e você não entende o que está abrindo mão.",
          "Leve a carteira de trabalho, o TRCT, o extrato do FGTS e os holerites. Com esses documentos é possível conferir o cálculo e avaliar se há algo a cobrar. Cada caso depende das provas e da situação concreta.",
        ],
      },
    ],
    faq: [
      {
        question: "Posso trabalhar em outro lugar durante o aviso prévio?",
        answer: "Sim. Se você conseguir outro emprego durante o aviso trabalhado, pode pedir dispensa do restante. Pela Súmula 276 do TST, a empresa só fica livre de pagar os dias restantes se você comprovar o novo emprego.",
      },
      {
        question: "Quanto tempo a empresa tem para liberar as guias do seguro-desemprego?",
        answer: "O mesmo prazo de 10 dias corridos da rescisão. A entrega dos documentos e o pagamento das verbas devem acontecer nesse período (art. 477, §6º, da CLT).",
      },
      {
        question: "Fiz saque-aniversário. Recebo a multa de 40% se for demitido?",
        answer: "Sim. A multa de 40% é paga normalmente. O que fica bloqueado é o saque do saldo da conta do FGTS, conforme as regras do saque-aniversário.",
      },
      {
        question: "A empresa pode me demitir logo depois de eu voltar de licença médica?",
        answer: "Depende. Se o afastamento foi por acidente ou doença do trabalho com auxílio acidentário, há estabilidade de 12 meses. Se a demissão foi motivada por doença grave, pode ser discriminatória. Cada caso precisa ser analisado.",
      },
    ],
    updatedAt: U,
  },

  "trabalhista/acidente-trabalho": {
    sections: [
      {
        title: "O que fazer logo depois do acidente",
        paragraphs: [
          "Primeiro, cuide da saúde. Procure atendimento médico e diga ao profissional que a lesão aconteceu no trabalho ou no trajeto. Isso precisa constar no prontuário e no atestado.",
          "Depois, avise a empresa por escrito, por e-mail ou mensagem, e peça a emissão da CAT. Se ela se recusar, você mesmo pode registrar pelo Meu INSS. Tire fotos do local, anote o nome de quem viu e guarde cópias de todos os exames.",
          "Os primeiros 15 dias de afastamento são pagos pela empresa. A partir do 16º dia, o pagamento passa a ser do INSS. Na perícia, leve todos os documentos médicos e a CAT, para que o benefício seja concedido como acidentário (espécie B91), e não como comum (B31).",
        ],
      },
      {
        title: "Por que o tipo de benefício faz tanta diferença",
        paragraphs: [
          "O benefício acidentário garante estabilidade de 12 meses após a alta (art. 118 da Lei 8.213/1991). Além disso, durante o afastamento por acidente, a empresa continua obrigada a depositar o FGTS. No benefício comum, esses direitos não existem.",
          "Se o INSS concedeu o benefício comum, mas a doença ou lesão tem ligação com o trabalho, é possível pedir a conversão. A Súmula 378 do TST também admite a estabilidade quando a doença ocupacional só é descoberta depois da demissão, desde que fique provado o nexo com o trabalho.",
        ],
      },
      {
        title: "Exemplos típicos de doença ocupacional",
        paragraphs: [
          "Tendinite e LER em quem faz movimentos repetitivos, como digitadores, operadores de caixa e trabalhadores de linha de produção. Problemas de coluna em quem carrega peso. Perda auditiva em ambientes com muito ruído. Doenças de pele ou respiratórias por contato com produtos químicos.",
          "Também entram aqui transtornos mentais ligados ao trabalho, como depressão e esgotamento profissional, quando causados por pressão excessiva, metas abusivas ou assédio. Nesses casos, laudos de psiquiatra ou psicólogo e a descrição da rotina de trabalho são provas importantes.",
        ],
      },
      {
        title: "Indenização: como ela é avaliada",
        paragraphs: [
          "A indenização pode ter três partes. O dano material cobre gastos com tratamento e a perda da capacidade de trabalhar, que pode virar uma pensão mensal (art. 950 do Código Civil). O dano moral compensa a dor e o sofrimento. O dano estético cobre cicatrizes, amputações e deformidades.",
          "Em regra, é preciso mostrar que a empresa teve culpa, por exemplo, por não fornecer equipamento de proteção ou treinamento. Mas em atividades de risco, o STF admitiu a responsabilidade da empresa mesmo sem culpa (Tema 932). Não há valor fixo: o juiz considera a gravidade da lesão, as consequências e as circunstâncias do caso.",
        ],
      },
      {
        title: "Erros comuns e quando buscar ajuda",
        paragraphs: [
          "Erros frequentes: não registrar a CAT, aceitar o benefício comum sem questionar, voltar ao trabalho sem condições por medo de perder o emprego e assinar documentos de demissão durante a estabilidade.",
          "Procure um advogado quando a empresa negar a CAT, quando o INSS não reconhecer o nexo com o trabalho, quando houver sequela permanente ou quando você for demitido nos 12 meses após a alta. Quanto antes os documentos forem organizados, mais fácil fica demonstrar o que aconteceu.",
        ],
      },
    ],
    faq: [
      {
        question: "Quanto tempo tenho para pedir indenização por acidente de trabalho?",
        answer: "Durante o contrato, podem ser cobrados os últimos 5 anos. Depois da saída, o prazo é de 2 anos. Em doenças ocupacionais, a contagem costuma partir de quando você teve ciência clara da incapacidade.",
      },
      {
        question: "Posso ser demitido depois de voltar do afastamento por acidente?",
        answer: "Não sem justa causa durante os 12 meses seguintes à alta, se você recebeu o benefício acidentário. Se for demitido nesse período, pode pedir reintegração ou indenização.",
      },
      {
        question: "Acidente no caminho para o trabalho dá direito a indenização da empresa?",
        answer: "Para o INSS, o acidente de trajeto continua equiparado ao acidente de trabalho. Já a indenização paga pela empresa depende de culpa dela, o que raramente ocorre no trajeto, salvo, por exemplo, em transporte fornecido pela própria empresa.",
      },
      {
        question: "O que fazer se o INSS deu benefício comum em vez de acidentário?",
        answer: "Você pode pedir a revisão no INSS ou discutir o nexo com o trabalho na Justiça, com laudos e a CAT. A conversão garante estabilidade e depósitos de FGTS no afastamento.",
      },
    ],
    updatedAt: U,
  },

  "trabalhista/horas-extras": {
    sections: [
      {
        title: "Como estimar suas horas extras",
        paragraphs: [
          "Comece pelo valor da sua hora normal. Para quem trabalha 44 horas por semana, divida o salário mensal por 220. Para 40 horas semanais, o divisor costuma ser 200. Com a Emenda Constitucional 141/2026, o limite semanal cai para 42 horas a partir de 16/12/2026 e para 40 horas a partir de 16/12/2027, sem redução de salário, o que diminui o divisor e aumenta o valor da hora. Depois, acrescente o adicional: no mínimo 50% sobre a hora normal, ou o percentual maior previsto na convenção coletiva da sua categoria.",
          "Em seguida, some quantas horas você trabalhou além do combinado em cada mês. Multiplique pelo valor da hora extra. Esse é o valor principal. Sobre ele ainda entram os reflexos: descanso semanal remunerado, férias com um terço, 13º salário, aviso prévio e FGTS, quando as horas extras eram habituais.",
          "Esse cálculo é só uma estimativa. O valor real depende dos registros de ponto, da convenção coletiva e de verbas que integram o salário, como adicional noturno e insalubridade.",
        ],
      },
      {
        title: "Situações reais que geram horas extras",
        paragraphs: [
          "Bater o ponto e continuar trabalhando é uma das mais comuns. Outra é chegar antes do horário para abrir a loja, trocar de uniforme ou participar de reunião. A CLT tolera até 5 minutos na entrada e 5 na saída, com limite de 10 minutos por dia (art. 58, §1º). Passou disso, todo o tempo conta.",
          "Também é frequente o trabalhador ser registrado como gerente apenas no nome, sem poder real de mando e sem a gratificação de função de pelo menos 40%. Nesse caso, a exceção do art. 62 da CLT pode não valer, e as horas extras são devidas.",
          "Responder mensagens e e-mails de trabalho fora do horário, de forma frequente e por exigência da empresa, pode ser considerado tempo à disposição. A prova é feita com prints, horários de envio e testemunhas.",
        ],
      },
      {
        title: "Cartão de ponto: quando ele não vale",
        paragraphs: [
          "Empresas que são obrigadas a controlar a jornada e não apresentam os cartões de ponto no processo correm o risco de ver presumida como verdadeira a jornada informada pelo trabalhador (Súmula 338 do TST). Essa presunção pode ser afastada por outras provas.",
          "Cartões com horários sempre iguais, todos os dias, como entrada às 8h00 e saída às 17h00 em todos os registros, são chamados de “ponto britânico”. A mesma Súmula 338 considera esse registro inválido como prova, e cabe à empresa provar a jornada real.",
        ],
      },
      {
        title: "Banco de horas: como conferir se está certo",
        paragraphs: [
          "Depois da Reforma Trabalhista, o banco de horas pode ser feito por acordo individual escrito, com compensação em até 6 meses, ou por norma coletiva, com prazo de até 1 ano (art. 59, §§2º e 5º, da CLT). A compensação dentro do mesmo mês pode ser feita até por acordo tácito.",
          "Peça o extrato do seu banco de horas. Se as horas não forem compensadas no prazo, ou se o contrato terminar com saldo positivo, essas horas devem ser pagas como extras, com adicional. Banco de horas sem registro claro ou sem acordo válido pode ser questionado.",
        ],
      },
      {
        title: "Erros comuns e quando procurar um advogado",
        paragraphs: [
          "Muitos trabalhadores não guardam provas e esperam anos para reclamar. Como só podem ser cobrados os últimos 5 anos, cada mês de espera é um mês perdido. Outro erro é não anotar os horários reais em algum lugar, como uma agenda ou mensagens enviadas a si mesmo.",
          "Procure orientação se você trabalha além do horário com frequência, se o ponto não reflete a jornada real, se é chamado de gerente sem ter poderes de gestão ou se o banco de horas nunca é zerado. Um advogado pode analisar as provas e estimar o que pode ser cobrado.",
        ],
      },
    ],
    faq: [
      {
        question: "Quantas horas extras posso fazer por dia?",
        answer: "Em regra, no máximo 2 horas extras por dia (art. 59 da CLT). Acima disso, só em situações excepcionais, como força maior ou serviço inadiável, conforme a lei.",
      },
      {
        question: "Posso cobrar horas extras se assinava o ponto com horário errado?",
        answer: "Sim. Testemunhas, mensagens, e-mails e registros de sistema podem mostrar que a jornada real era maior do que a registrada.",
      },
      {
        question: "Cargo de confiança tem direito a hora extra?",
        answer: "Quem exerce gestão de verdade e recebe gratificação de pelo menos 40% sobre o salário fica fora do controle de jornada (art. 62, II, da CLT). Se o cargo é só no nome, as horas extras podem ser cobradas.",
      },
      {
        question: "Hora extra entra no cálculo das férias e do 13º?",
        answer: "Sim, quando é habitual. A média das horas extras reflete em férias com um terço, 13º, descanso semanal remunerado, aviso prévio e FGTS.",
      },
    ],
    updatedAt: "2026-11-08",
  },

  "trabalhista/assedio-moral": {
    sections: [
      {
        title: "O que é e o que não é assédio moral",
        paragraphs: [
          "Nem todo conflito no trabalho é assédio. Uma cobrança de meta feita com respeito, uma advertência fundamentada ou uma discussão isolada, em regra, não configuram assédio moral. O que caracteriza o assédio é a repetição, a intenção de humilhar ou excluir e o dano à dignidade da pessoa.",
          "Existe também o assédio organizacional. Ele acontece quando a própria forma de gestão da empresa humilha os empregados, como rankings públicos de “piores vendedores”, castigos por não bater meta ou ameaças coletivas de demissão. Nesses casos, a responsabilidade é da empresa, mesmo que não haja um único chefe agressor.",
        ],
      },
      {
        title: "Como reunir provas de forma segura",
        paragraphs: [
          "Faça um diário com datas, horários, o que foi dito e quem estava presente. Anotações feitas na época dos fatos ajudam a dar consistência ao seu relato. Salve prints de mensagens com a data visível e encaminhe e-mails importantes para um endereço pessoal, desde que não contenham dados sigilosos da empresa.",
          "A gravação de conversa da qual você participa é aceita como prova (o STF reconheceu essa licitude no Tema 237). Evite gravar conversas de outras pessoas sem estar presente. Registre também reclamações formais ao RH, à ouvidoria ou ao canal de denúncias, porque isso mostra que a empresa sabia.",
          "Se o assédio afetou sua saúde, procure médico ou psicólogo e relate a origem do problema. Laudos que relacionam o adoecimento ao trabalho reforçam o pedido de indenização e podem gerar direitos de doença ocupacional.",
        ],
      },
      {
        title: "O dever da empresa de prevenir",
        paragraphs: [
          "Desde a Lei 14.457/2022, empresas com CIPA devem adotar medidas de prevenção e combate ao assédio sexual e a outras formas de violência no trabalho. Isso inclui regras de conduta, canal de denúncias e treinamentos periódicos.",
          "Quando a empresa não tem canal de denúncia, ignora as reclamações ou protege o agressor, essa omissão pode pesar na avaliação da responsabilidade dela. Por isso é importante registrar que você comunicou os fatos.",
        ],
      },
      {
        title: "Caminhos possíveis para o trabalhador",
        paragraphs: [
          "O trabalhador pode continuar no emprego e pedir indenização, pedir a rescisão indireta (art. 483 da CLT) ou, se já saiu, cobrar a indenização em até 2 anos. A escolha depende da gravidade, da saúde da pessoa e das provas disponíveis.",
          "Também é possível denunciar ao Ministério Público do Trabalho, especialmente quando várias pessoas sofrem o mesmo tratamento. A denúncia não substitui a ação individual, mas pode levar a empresa a mudar a prática.",
          "O valor da indenização não é tabelado. O juiz considera a gravidade, a duração, as consequências para a saúde e a capacidade econômica da empresa. O STF entendeu que os parâmetros do art. 223-G da CLT servem de orientação, e não de teto rígido.",
        ],
      },
      {
        title: "Erros comuns e quando procurar ajuda",
        paragraphs: [
          "Os erros mais comuns são pedir demissão por impulso, apagar conversas, confrontar o agressor de forma que possa ser usada contra você e esperar o adoecimento piorar. Pedir demissão faz perder verbas que a rescisão indireta garantiria.",
          "Busque um advogado antes de tomar qualquer decisão sobre sair da empresa. Com as provas organizadas, é possível avaliar o melhor caminho e o risco de cada opção.",
        ],
      },
    ],
    faq: [
      {
        question: "Cobrança de metas é assédio moral?",
        answer: "Não, por si só. A cobrança vira assédio quando é feita com humilhação, ameaças, exposição pública ou metas impossíveis usadas para punir.",
      },
      {
        question: "Posso processar a empresa ainda trabalhando nela?",
        answer: "Sim. A lei não proíbe. Mas é preciso avaliar o risco de convivência e de retaliação. Uma dispensa retaliatória pode gerar nova indenização.",
      },
      {
        question: "O que fazer se o RH não fizer nada com a minha denúncia?",
        answer: "Guarde o registro da denúncia e da falta de resposta. Isso mostra a omissão da empresa. Você pode procurar o sindicato, o Ministério Público do Trabalho ou um advogado.",
      },
      {
        question: "Assédio moral pode causar afastamento pelo INSS?",
        answer: "Sim. Se o assédio causar doença, como depressão ou ansiedade, e houver relação com o trabalho, o afastamento pode ser reconhecido como acidentário, com estabilidade de 12 meses após a alta.",
      },
    ],
    updatedAt: U,
  },

  "trabalhista/verbas-rescisorias-o-que-voce-tem-direito": {
    sections: [
      {
        title: "Como estimar cada verba, sem valores fixos",
        paragraphs: [
          "Saldo de salário: divida o salário por 30 e multiplique pelos dias trabalhados no mês da saída. 13º proporcional: divida o salário por 12 e multiplique pelos meses trabalhados no ano. O mês em que você trabalhou 15 dias ou mais conta como mês inteiro.",
          "Férias proporcionais seguem a mesma lógica dos doze avos, contadas a partir da data de aniversário do contrato, e recebem o acréscimo de um terço. Férias vencidas e não gozadas são pagas integralmente, também com um terço.",
          "Aviso prévio indenizado: 30 dias mais 3 dias por ano completo de serviço, até 90 dias (Lei 12.506/2011). Multa do FGTS: 40% sobre todos os depósitos feitos durante o contrato, incluindo os que você já sacou, com correção. A empresa também deve depositar o FGTS do mês da rescisão e do aviso.",
        ],
      },
      {
        title: "Contrato de experiência e prazo determinado",
        paragraphs: [
          "No contrato de experiência que termina na data prevista, não há aviso prévio nem multa de 40%. O trabalhador recebe saldo de salário, 13º e férias proporcionais com um terço e pode sacar o FGTS.",
          "Se a empresa encerrar o contrato antes do fim, sem justa causa, deve pagar metade da remuneração que seria devida até o término (art. 479 da CLT), além da multa de 40% do FGTS. Se houver cláusula de rescisão antecipada no contrato, aplicam-se as regras do aviso prévio. Se é o empregado que sai antes, pode ter de indenizar a empresa pelos prejuízos, dentro do limite do art. 480.",
        ],
      },
      {
        title: "Descontos que a empresa pode e não pode fazer",
        paragraphs: [
          "Quem pede demissão e não cumpre o aviso prévio pode ter descontado o valor correspondente (art. 487, §2º, da CLT). Adiantamentos salariais e empréstimos consignados também podem ser descontados, dentro dos limites legais.",
          "Já descontos de prejuízos causados ao patrimônio da empresa só são permitidos se houver dolo do empregado, ou culpa com previsão expressa no contrato (art. 462, §1º, da CLT). Descontos genéricos, sem explicação no TRCT, devem ser questionados. O total das compensações na rescisão não pode passar de uma remuneração mensal (art. 477, §5º).",
        ],
      },
      {
        title: "O que conferir no TRCT antes de assinar",
        paragraphs: [
          "Confira a data de admissão, a data de saída com a projeção do aviso, o motivo da rescisão e o salário usado como base. Veja se as médias de horas extras, comissões e adicionais entraram nas férias, no 13º e no aviso.",
          "Depois, confira o extrato do FGTS para ver se a multa foi depositada e se não faltam meses. A homologação no sindicato deixou de ser obrigatória com a Reforma de 2017. Por isso, a conferência fica com você. Se algo estiver errado, você pode assinar e anotar a ressalva, ou buscar orientação antes.",
        ],
      },
      {
        title: "Quando procurar um advogado",
        paragraphs: [
          "Procure orientação se a rescisão atrasou, se os valores parecem baixos, se houve descontos que você não entende ou se a empresa mudou o motivo da saída. Também vale consultar antes de aceitar um acordo do art. 484-A, que reduz parte das verbas.",
          "Leve o TRCT, os holerites dos últimos meses, o extrato do FGTS e a carteira de trabalho. Com isso é possível refazer o cálculo e ver se há diferenças a cobrar.",
        ],
      },
    ],
    faq: [
      {
        question: "Pedi demissão. Tenho direito a 13º e férias proporcionais?",
        answer: "Sim. Quem pede demissão recebe saldo de salário, 13º proporcional e férias vencidas e proporcionais com um terço. Não recebe multa de 40%, saque do FGTS nem seguro-desemprego.",
      },
      {
        question: "A multa de 40% é calculada sobre o FGTS que eu já saquei?",
        answer: "Sim. A multa é calculada sobre todos os depósitos feitos durante o contrato, com correção, mesmo que parte do saldo já tenha sido sacada.",
      },
      {
        question: "Posso assinar o TRCT e reclamar depois?",
        answer: "Sim. A assinatura dá quitação apenas dos valores escritos no termo (Súmula 330 do TST). Diferenças e verbas que ficaram de fora podem ser cobradas em até 2 anos.",
      },
      {
        question: "Quanto recebo se a empresa encerrar meu contrato de experiência antes do fim?",
        answer: "Além das verbas proporcionais e da multa de 40% do FGTS, a empresa deve pagar metade do que você receberia até o fim do contrato (art. 479 da CLT), salvo se houver cláusula de rescisão antecipada.",
      },
    ],
    updatedAt: U,
  },

  "trabalhista/ferias-nao-pagas-como-receber": {
    sections: [
      {
        title: "Atualização importante sobre o pagamento em dobro",
        paragraphs: [
          "Por muitos anos, a Súmula 450 do TST mandava pagar as férias em dobro quando o pagamento atrasava, mesmo que o descanso fosse concedido na época certa. Em 2022, o STF julgou a ADPF 501 e declarou essa súmula inconstitucional.",
          "Na prática, hoje a dobra garantida pela lei é a do art. 137 da CLT: quando as férias são concedidas depois do fim do período concessivo. O simples atraso no pagamento, com o descanso dentro do prazo, não gera mais a dobra automática. O atraso ainda pode ser cobrado, com correção, e pode ser discutido conforme o caso concreto.",
        ],
      },
      {
        title: "Como estimar o valor das suas férias",
        paragraphs: [
          "O valor das férias é a remuneração do mês mais um terço. Se você recebe horas extras, comissões ou adicionais com frequência, a média dessas verbas entra no cálculo. É comum a empresa pagar só sobre o salário-base, o que reduz o valor.",
          "Para férias vencidas e não concedidas no prazo, o valor é pago em dobro, incluindo o terço. Para férias proporcionais, divida por 12 e multiplique pelos meses trabalhados no período aquisitivo. A fração de 15 dias ou mais conta como mês inteiro.",
        ],
      },
      {
        title: "Regras de divisão e data de início",
        paragraphs: [
          "Desde a Reforma de 2017, as férias podem ser divididas em até três períodos, com a concordância do empregado. Um deles deve ter pelo menos 14 dias corridos, e os outros, pelo menos 5 dias cada (art. 134, §1º, da CLT).",
          "As férias não podem começar nos 2 dias que antecedem feriado ou dia de descanso semanal remunerado (art. 134, §3º). A empresa também deve avisar por escrito com pelo menos 30 dias de antecedência. Se essas regras não forem cumpridas, guarde a comunicação recebida.",
        ],
      },
      {
        title: "Faltas e afastamentos que reduzem ou tiram as férias",
        paragraphs: [
          "Faltas injustificadas no período aquisitivo reduzem os dias de férias, conforme a tabela do art. 130 da CLT. Faltas justificadas por atestado médico, por exemplo, não reduzem.",
          "Alguns afastamentos longos fazem perder o direito àquele período, como receber benefício do INSS por mais de 6 meses, mesmo que descontínuos, dentro do período aquisitivo (art. 133 da CLT). Nesses casos, um novo período começa a contar quando você volta.",
        ],
      },
      {
        title: "Venda de férias e erros comuns",
        paragraphs: [
          "Vender 10 dias de férias é um direito do empregado, e não uma decisão da empresa. O pedido deve ser feito até 15 dias antes de terminar o período aquisitivo (art. 143 da CLT). Se a empresa obriga todos a venderem, essa prática pode ser questionada.",
          "Outros erros comuns: registrar férias no papel enquanto o empregado continua trabalhando, pagar sem o terço e não incluir médias de horas extras. Se você passou por isso, guarde recibos de férias, holerites e mensagens que mostrem que estava trabalhando no período.",
        ],
      },
    ],
    faq: [
      {
        question: "A empresa pode me obrigar a tirar férias em um mês que eu não quero?",
        answer: "Sim. A lei dá ao empregador o direito de marcar a data das férias, desde que dentro do período concessivo e com aviso por escrito de pelo menos 30 dias. A divisão em períodos é que depende da sua concordância.",
      },
      {
        question: "Fui demitido por justa causa. Recebo férias?",
        answer: "Você recebe as férias vencidas com um terço. As férias proporcionais não são devidas na justa causa, segundo a Súmula 171 do TST.",
      },
      {
        question: "Trabalhei durante as férias registradas. Posso cobrar?",
        answer: "Sim. Se ficar provado que você trabalhou no período, as férias podem ser consideradas não concedidas e pagas novamente, além dos dias trabalhados. Testemunhas e mensagens ajudam a provar.",
      },
      {
        question: "Quanto tempo tenho para cobrar férias não pagas?",
        answer: "Durante o contrato, contam-se 5 anos a partir do fim do período concessivo de cada férias. Depois da saída, o prazo para entrar com ação é de 2 anos.",
      },
    ],
    updatedAt: "2026-11-08",
  },

  "trabalhista/adicional-insalubridade-periculosidade": {
    sections: [
      {
        title: "Como estimar o valor de cada adicional",
        paragraphs: [
          "A insalubridade é calculada, em regra, sobre o salário mínimo vigente: 10% no grau mínimo, 20% no médio e 40% no máximo (art. 192 da CLT). Algumas convenções coletivas preveem base maior, como o salário-base. Confira a norma da sua categoria.",
          "A periculosidade é de 30% sobre o salário-base, sem somar gratificações, prêmios ou participação nos lucros (art. 193, §1º, da CLT). Como incide sobre o salário, e não sobre o mínimo, costuma ser mais vantajosa para quem ganha acima do piso.",
          "Os dois adicionais, quando pagos de forma habitual, refletem em férias com um terço, 13º, aviso prévio, FGTS e horas extras.",
        ],
      },
      {
        title: "Atividades que costumam gerar o adicional",
        paragraphs: [
          "Insalubridade: profissionais de saúde em contato com pacientes ou material infectado, trabalhadores de limpeza de banheiros de uso coletivo e de grande circulação, quem lida com lixo urbano, pintores expostos a solventes e quem trabalha com ruído acima dos limites das normas técnicas.",
          "Periculosidade: eletricistas, frentistas e quem trabalha em áreas com inflamáveis, vigilantes de segurança patrimonial ou pessoal e trabalhadores que usam motocicleta no serviço, como motoboys (art. 193, §4º, da CLT, incluído pela Lei 12.997/2014). A caracterização final depende da perícia.",
        ],
      },
      {
        title: "EPI, exposição eventual e perícia",
        paragraphs: [
          "O fornecimento de equipamento de proteção pode afastar a insalubridade, mas só se ele realmente neutralizar o agente nocivo. Entregar o EPI não basta: a empresa deve fiscalizar o uso e trocar o equipamento quando necessário (Súmulas 80 e 289 do TST).",
          "Na periculosidade, o contato eventual, fortuito ou por tempo muito reduzido não gera o adicional, mas o contato intermitente, que faz parte da rotina, gera (Súmula 364 do TST). Na Justiça, a perícia técnica é obrigatória para apurar insalubridade e periculosidade (art. 195 da CLT).",
        ],
      },
      {
        title: "Documentos da empresa que ajudam no caso",
        paragraphs: [
          "O antigo PPRA foi substituído pelo PGR, o Programa de Gerenciamento de Riscos, previsto na NR-1. O PGR, o PCMSO, o LTCAT e o PPP descrevem os riscos do ambiente e a exposição do trabalhador. Você pode pedir o seu PPP à empresa, especialmente ao sair.",
          "Esses documentos também são importantes para o INSS. A exposição a agentes nocivos pode contar como tempo especial para a aposentadoria. Por isso, vale guardar cópias e conferir se as informações estão corretas.",
        ],
      },
      {
        title: "Gestantes, erros comuns e quando procurar ajuda",
        paragraphs: [
          "A gestante e a lactante devem ser afastadas de atividades insalubres. O STF, na ADI 5938, derrubou a regra da Reforma que exigia atestado médico para o afastamento em graus médio e mínimo.",
          "Erros comuns: achar que receber um adicional impede pedir outro de valor maior, não guardar fotos e descrição das tarefas, e não cobrar os reflexos. Procure um advogado se você trabalha exposto a riscos e não recebe nada, se recebe em grau menor do que o real ou se a empresa cortou o adicional sem mudar o ambiente.",
        ],
      },
    ],
    faq: [
      {
        question: "Motoboy tem direito a periculosidade?",
        answer: "Sim. A lei inclui as atividades com uso de motocicleta como perigosas (art. 193, §4º, da CLT). O adicional é de 30% sobre o salário-base, salvo situações específicas analisadas caso a caso.",
      },
      {
        question: "A empresa pode cortar o adicional de insalubridade?",
        answer: "Pode, se o risco for eliminado ou neutralizado de verdade, por exemplo, com mudança no ambiente ou EPI eficaz. Se nada mudou, o corte pode ser questionado.",
      },
      {
        question: "Trabalho na limpeza. Tenho direito à insalubridade?",
        answer: "Depende do local. A limpeza de banheiros de uso público ou coletivo de grande circulação e a coleta de lixo desses locais dão direito ao grau máximo, segundo a Súmula 448 do TST. Limpeza de escritório comum, em regra, não.",
      },
      {
        question: "Quanto tempo leva para sair a perícia?",
        answer: "Varia conforme a vara e a agenda do perito. Pode levar alguns meses. Durante a perícia, você pode acompanhar a visita e indicar um assistente técnico.",
      },
    ],
    updatedAt: U,
  },

  "trabalhista/multa-477-atraso-rescisao": {
    sections: [
      {
        title: "Como contar o prazo de 10 dias",
        paragraphs: [
          "O prazo começa a contar no dia seguinte ao término do contrato. Se o aviso foi trabalhado, o término é o último dia do aviso. Se foi indenizado, o término é o dia em que você foi dispensado de trabalhar.",
          "Desde a Reforma de 2017, o prazo de 10 dias vale para todas as formas de rescisão. Nesse período, a empresa precisa pagar as verbas e entregar os documentos que comprovam a comunicação do fim do contrato aos órgãos competentes (art. 477, §6º, da CLT).",
          "Anote a data em que o dinheiro caiu na sua conta. É ela que importa, e não a data impressa no TRCT. Um print do extrato bancário é a melhor prova.",
        ],
      },
      {
        title: "Quando a multa pode não ser aplicada",
        paragraphs: [
          "A lei afasta a multa quando o próprio trabalhador deu causa ao atraso (art. 477, §8º, da CLT), por exemplo, se não informou a conta para depósito ou não compareceu quando foi chamado. Por isso, responda às comunicações da empresa e guarde as mensagens.",
          "Na falência, a massa falida não paga a multa do art. 477 nem a do art. 467 (Súmula 388 do TST). Essa exceção não vale para empresas em recuperação judicial, que continuam sujeitas às multas.",
        ],
      },
      {
        title: "Multa do art. 477 e multa do art. 467: não confunda",
        paragraphs: [
          "A multa do art. 477 é pelo atraso no pagamento da rescisão. Já a multa do art. 467 acontece dentro do processo: se a empresa não pagar, na primeira audiência, as verbas rescisórias que não contesta, deve pagar essas verbas com acréscimo de 50%.",
          "As duas podem ser cobradas juntas na mesma ação. Mesmo quando o vínculo de emprego só é reconhecido pela Justiça, a multa do art. 477 pode ser devida (Súmula 462 do TST).",
        ],
      },
      {
        title: "Passo a passo para cobrar",
        paragraphs: [
          "Primeiro, envie uma mensagem ou e-mail à empresa cobrando o pagamento e guarde o registro. Muitas vezes o problema é resolvido assim. Se não houver resposta, procure o sindicato da categoria ou um advogado.",
          "Na reclamação trabalhista, a multa é pedida junto com as verbas atrasadas e outras diferenças, como FGTS não depositado. Por isso, antes de entrar com a ação, vale conferir toda a rescisão, e não só o atraso.",
        ],
      },
    ],
    faq: [
      {
        question: "A empresa pagou no prazo, mas pagou menos. Tenho direito à multa?",
        answer: "Depende. Os tribunais costumam analisar se houve pagamento parcial de boa-fé ou se a diferença foi grande e sem justificativa. A diferença em si pode ser cobrada de qualquer forma.",
      },
      {
        question: "A multa do art. 477 é calculada sobre o salário-base?",
        answer: "A lei fala em valor equivalente ao salário do empregado. A definição exata da base, como inclusão de adicionais fixos, pode variar conforme o caso e a jurisprudência aplicada.",
      },
      {
        question: "Empresa em recuperação judicial paga multa por atraso?",
        answer: "Sim. A Súmula 388 do TST só isenta a massa falida. Empresas em recuperação judicial continuam sujeitas às multas dos arts. 467 e 477 da CLT.",
      },
      {
        question: "Quanto tempo tenho para cobrar a multa?",
        answer: "O prazo é de 2 anos contados do fim do contrato, junto com as demais verbas trabalhistas.",
      },
    ],
    updatedAt: U,
  },

  "trabalhista/intervalo-intrajornada-almoco": {
    sections: [
      {
        title: "Como estimar o valor do intervalo não concedido",
        paragraphs: [
          "Depois da Reforma de 2017, a empresa paga apenas os minutos que faltaram do intervalo, com acréscimo de 50% sobre a hora normal (art. 71, §4º, da CLT). Se você tinha direito a 1 hora e teve 20 minutos, recebe 40 minutos com o adicional.",
          "Multiplique os minutos suprimidos pelo número de dias em que isso aconteceu e pelo valor da hora com adicional. Pela lei atual, esse valor tem natureza indenizatória. Por isso, em regra, não reflete em férias, 13º e FGTS.",
          "Para períodos anteriores a novembro de 2017, os tribunais aplicavam a regra antiga, que mandava pagar a hora inteira, com reflexos. Contratos longos podem ter as duas regras em períodos diferentes.",
        ],
      },
      {
        title: "Quando o intervalo pode ser reduzido",
        paragraphs: [
          "A redução do intervalo de 1 hora é possível em duas situações. A primeira é por convenção ou acordo coletivo, com mínimo de 30 minutos para jornadas acima de 6 horas (art. 611-A, III, da CLT). A segunda é por ato do Ministério do Trabalho, quando a empresa tem refeitório adequado e os empregados não fazem horas extras (art. 71, §3º).",
          "Acordo individual, assinado só entre você e a empresa, não basta para reduzir o intervalo. Se a redução não tiver uma dessas bases, os minutos que faltaram podem ser cobrados.",
        ],
      },
      {
        title: "Situações comuns que viram intervalo suprimido",
        paragraphs: [
          "Almoçar no posto de trabalho atendendo clientes ou telefone. Ficar no intervalo com o rádio ou celular da empresa, obrigado a responder. Ter o intervalo pré-assinalado no ponto, mas na prática voltar ao trabalho em poucos minutos.",
          "Também é comum em quem trabalha sozinho no turno, como vigilantes e caixas de pequenos comércios, que não podem sair do posto. Nesses casos, testemunhas e mensagens enviadas no horário do almoço são provas importantes.",
        ],
      },
      {
        title: "Intervalo entre jornadas e escala 12x36",
        paragraphs: [
          "Além do almoço, a lei garante 11 horas de descanso entre o fim de um dia de trabalho e o início do outro (art. 66 da CLT). Se você sai às 23h e volta às 7h, teve só 8 horas de descanso. As horas que faltaram podem ser cobradas.",
          "Na escala 12x36, a lei permite que os intervalos para alimentação sejam concedidos ou indenizados (art. 59-A da CLT). Se não houve intervalo, ele deve ser pago. Confira o que diz a norma coletiva da sua categoria.",
        ],
      },
      {
        title: "Quando procurar um advogado",
        paragraphs: [
          "Busque orientação se o intervalo é reduzido todos os dias, se o ponto registra um intervalo que não existiu ou se você fica à disposição durante o almoço. Como só podem ser cobrados os últimos 5 anos, esperar demais significa perder meses de direitos.",
        ],
      },
    ],
    faq: [
      {
        question: "Posso trocar meu horário de almoço por sair mais cedo?",
        answer: "Não por acordo individual. O intervalo é uma norma de saúde. A redução só vale nas hipóteses da lei, como norma coletiva com mínimo de 30 minutos.",
      },
      {
        question: "Quem trabalha 6 horas tem direito a 1 hora de almoço?",
        answer: "Não. Para jornadas acima de 4 e até 6 horas, o intervalo é de 15 minutos. Se a jornada passa de 6 horas com frequência, por horas extras, o intervalo de 1 hora passa a ser exigível.",
      },
      {
        question: "O intervalo de almoço conta como hora trabalhada?",
        answer: "Não. O intervalo não é computado na jornada (art. 71, §2º, da CLT). Mas, se você ficou trabalhando nele, o tempo suprimido deve ser pago.",
      },
      {
        question: "A empresa pode me obrigar a ficar no local durante o almoço?",
        answer: "Pode exigir que você permaneça no local, mas não pode exigir que trabalhe ou fique de prontidão. Se houver obrigação de atender, o intervalo pode ser considerado suprimido.",
      },
    ],
    updatedAt: U,
  },

  "trabalhista/estabilidade-provisoria-emprego": {
    sections: [
      {
        title: "Gestante: pontos que geram mais dúvida",
        paragraphs: [
          "A estabilidade existe mesmo que a empresa não soubesse da gravidez no momento da demissão (Súmula 244, I, do TST). O que importa é a data da concepção. Se a gravidez começou antes do fim do contrato, inclusive durante o aviso prévio indenizado, a estabilidade é garantida (art. 391-A da CLT).",
          "A mesma proteção vale para quem adota ou obtém a guarda judicial para fins de adoção (art. 391-A, parágrafo único). Se a empregada for demitida sem saber que estava grávida, deve comunicar a empresa assim que souber e guardar o exame com a data.",
        ],
      },
      {
        title: "CIPA e dirigente sindical: quem está protegido",
        paragraphs: [
          "Na CIPA, a estabilidade vale para os representantes eleitos pelos empregados, desde o registro da candidatura até 1 ano depois do fim do mandato. O suplente também tem a garantia (Súmula 339 do TST). Os indicados pela empresa não têm.",
          "O dirigente sindical tem estabilidade desde o registro da candidatura até 1 ano depois do fim do mandato, salvo falta grave apurada (art. 543, §3º, da CLT). A empresa deve ser comunicada da candidatura, normalmente pelo sindicato.",
        ],
      },
      {
        title: "Pré-aposentadoria e outras garantias de norma coletiva",
        paragraphs: [
          "Não há lei geral que garanta estabilidade a quem está perto de se aposentar. Essa proteção, quando existe, vem da convenção ou do acordo coletivo da categoria, que define o tempo e as condições, como avisar a empresa por escrito.",
          "Por isso, se você está a poucos anos da aposentadoria, leia a norma coletiva da sua categoria ou peça ao sindicato. Muitas vezes é preciso comunicar formalmente a empresa para a garantia valer.",
        ],
      },
      {
        title: "Reintegração ou indenização: como funciona",
        paragraphs: [
          "Se a demissão ocorreu durante a estabilidade, o pedido principal é a reintegração, com pagamento dos salários do período em que ficou afastado. Em casos urgentes, é possível pedir a reintegração em decisão liminar.",
          "Quando o período de estabilidade já terminou, ou quando a volta ao trabalho não é aconselhável, o juiz pode converter a reintegração em indenização dos salários e demais direitos do período (Súmula 396 do TST). Entrar com a ação depois do fim da estabilidade, mas dentro do prazo de 2 anos, não impede a indenização (OJ 399 da SDI-1 do TST).",
        ],
      },
      {
        title: "Erros comuns e quando procurar ajuda",
        paragraphs: [
          "Erros frequentes: assinar pedido de demissão sem entender que perde a estabilidade, aceitar acordo informal abaixo do que é devido e demorar a comunicar a gravidez ou a doença. Pedido de demissão de empregado estável só vale com assistência do sindicato ou, na falta dele, perante a autoridade do Ministério do Trabalho ou a Justiça do Trabalho (art. 500 da CLT).",
          "Procure um advogado logo após a demissão. Quanto mais cedo, maior a chance de pedir a volta ao emprego, e não apenas a indenização.",
        ],
      },
    ],
    faq: [
      {
        question: "Descobri a gravidez depois de ser demitida. Ainda tenho estabilidade?",
        answer: "Sim, se a concepção aconteceu antes do fim do contrato, contando o aviso prévio. Comunique a empresa e guarde o exame que mostra a idade gestacional.",
      },
      {
        question: "Quem tem estabilidade pode ser demitido por justa causa?",
        answer: "Sim. A estabilidade protege contra a demissão sem justa causa. Se houver falta grave comprovada, a justa causa pode ser aplicada. No caso do dirigente sindical, a lei exige inquérito judicial.",
      },
      {
        question: "Estabilidade vale em contrato de experiência?",
        answer: "Para a gestante, a Súmula 244, III, do TST garante a estabilidade mesmo no contrato por prazo determinado. Para o acidentado, a Súmula 378, III, também. Há exceções, como o trabalho temporário da Lei 6.019/1974.",
      },
      {
        question: "Quanto tempo tenho para pedir a reintegração?",
        answer: "O prazo é de 2 anos após a demissão. Mas, se você quer voltar ao emprego, o ideal é agir logo, porque depois do fim da estabilidade sobra, em regra, apenas a indenização.",
      },
      {
        question: "A empresa precisava saber da gravidez para eu ter estabilidade?",
        answer: "Não. O STF decidiu que basta a gravidez ser anterior à dispensa sem justa causa (Tema 497), e o TST diz o mesmo (Súmula 244, I). Por isso, mesmo quem descobre a gravidez depois da demissão tem direito, se a concepção aconteceu antes do fim do contrato, contando o aviso prévio (art. 391-A da CLT).",
      },
      {
        question: "Se a mãe falecer, a estabilidade passa para alguém?",
        answer: "Sim. Se a mãe morrer, a garantia de emprego até 5 meses após o parto fica assegurada a quem tiver a guarda do filho (Lei Complementar 146/2014).",
      },
    ],
    updatedAt: "2026-11-08",
  },

  "trabalhista/home-office-teletrabalho-direitos": {
    sections: [
      {
        title: "O que a lei diz depois de 2022",
        paragraphs: [
          "A Lei 14.442/2022 mudou as regras do teletrabalho na CLT (arts. 75-A a 75-F). Ela separa dois tipos: o teletrabalho por jornada, em que há horário controlado, e o teletrabalho por produção ou tarefa, em que o empregado é cobrado por entregas.",
          "Só o teletrabalho por produção ou tarefa fica fora do controle de jornada (art. 62, III, da CLT). Quem trabalha em home office com horário controlado tem direito a horas extras como qualquer empregado. Ir à empresa de vez em quando, mesmo com frequência, não descaracteriza o teletrabalho.",
        ],
      },
      {
        title: "Equipamentos e despesas: como funciona de verdade",
        paragraphs: [
          "A lei não obriga, de forma automática, a empresa a pagar internet e energia. O art. 75-D da CLT diz que a responsabilidade pelos equipamentos e o reembolso de despesas devem estar previstos em contrato escrito. O que a empresa fornecer ou reembolsar não integra o salário.",
          "Se o contrato for omisso e você arcou com custos que eram da atividade da empresa, é possível discutir o ressarcimento, já que o risco do negócio é do empregador (art. 2º da CLT). Guarde notas e comprovantes e verifique se a convenção coletiva da sua categoria prevê ajuda de custo.",
        ],
      },
      {
        title: "Mudança entre home office e presencial",
        paragraphs: [
          "Passar do presencial para o teletrabalho depende de acordo entre as partes, registrado em aditivo. Já a volta ao presencial pode ser determinada pela empresa, com prazo de transição de pelo menos 15 dias (art. 75-C da CLT).",
          "Se você se mudou para outra cidade por vontade própria, a empresa não é obrigada a pagar as despesas da volta ao presencial, salvo se houver acordo diferente (art. 75-C, §3º). Pais com filhos de até 4 anos e pessoas com deficiência têm prioridade nas vagas de teletrabalho (art. 75-F).",
        ],
      },
      {
        title: "Direito de desconexão e privacidade",
        paragraphs: [
          "O uso de aplicativos e ferramentas fora do horário não é, por si só, tempo à disposição, salvo se houver previsão em acordo (art. 75-B, §5º, da CLT). Mas, quando a empresa exige respostas imediatas à noite ou nos fins de semana, de forma habitual, isso pode gerar horas extras ou sobreaviso.",
          "O controle da empresa deve respeitar a intimidade. Monitoramento excessivo, como câmera ligada o dia inteiro ou acesso a dados pessoais do computador, pode violar a Lei Geral de Proteção de Dados e a dignidade do trabalhador.",
        ],
      },
      {
        title: "Saúde, acidentes e quando procurar ajuda",
        paragraphs: [
          "A empresa deve orientar o empregado sobre as precauções para evitar doenças e acidentes (art. 75-E da CLT). Problemas de coluna, tendinite e esgotamento ligados ao trabalho remoto podem ser reconhecidos como doença ocupacional.",
          "Procure orientação se você faz horas extras sem receber, se paga do próprio bolso equipamentos que a empresa deveria fornecer, se recebeu ordem de volta ao presencial sem prazo ou se sofre controle invasivo. O primeiro passo é ler seu contrato e o aditivo de teletrabalho.",
        ],
      },
    ],
    faq: [
      {
        question: "A empresa pode me chamar de volta para o escritório?",
        answer: "Sim. A volta ao presencial pode ser determinada pelo empregador, desde que com prazo de transição de pelo menos 15 dias e registro em aditivo contratual (art. 75-C, §2º, da CLT).",
      },
      {
        question: "Tenho direito a vale-alimentação e vale-transporte no home office?",
        answer: "O vale-transporte é para deslocamento casa-trabalho, então, em regra, não é devido nos dias de teletrabalho. Vale-alimentação depende da política da empresa e da convenção coletiva.",
      },
      {
        question: "Qual lei vale se eu trabalho remoto de outra cidade?",
        answer: "Aplicam-se a legislação e as normas coletivas da base territorial do estabelecimento ao qual você está vinculado, salvo acordo diferente (art. 75-B, §7º, da CLT).",
      },
      {
        question: "Responder mensagem fora do horário dá hora extra?",
        answer: "Pode dar, quando a empresa exige resposta de forma habitual e você fica à disposição. Mensagens ocasionais, sem cobrança, em regra não geram.",
      },
    ],
    updatedAt: U,
  },

  "trabalhista/demissao-justa-causa": {
    sections: [
      {
        title: "Os requisitos que a empresa precisa cumprir",
        paragraphs: [
          "Não basta a falta estar na lista do art. 482 da CLT. A Justiça do Trabalho analisa se a falta foi grave, se a punição foi aplicada logo depois de a empresa saber do fato, se foi proporcional e se o mesmo fato não já tinha sido punido antes com advertência ou suspensão.",
          "Também se verifica se a empresa tratou casos iguais da mesma forma. Punir só um empregado por algo que outros também faziam pode indicar perseguição ou discriminação. E a empresa precisa provar a falta: a dúvida favorece o trabalhador.",
        ],
      },
      {
        title: "Motivos que geram mais discussão",
        paragraphs: [
          "Abandono de emprego: a jurisprudência costuma exigir ausência injustificada por mais de 30 dias e a intenção de não voltar. Quando o trabalhador estava afastado pelo INSS, o prazo conta a partir do fim do benefício (Súmula 32 do TST).",
          "Embriaguez habitual: o TST tem tratado o alcoolismo crônico como doença, e não como falta disciplinar. Nesses casos, o caminho esperado é o encaminhamento para tratamento. Desídia, que é a negligência no trabalho, em regra exige faltas repetidas e punições anteriores. Desde 2017, a perda da habilitação exigida para a profissão por conduta dolosa também é motivo de justa causa (art. 482, “m”).",
        ],
      },
      {
        title: "O que você recebe na justa causa",
        paragraphs: [
          "O empregado recebe o saldo de salário e as férias vencidas com um terço. Não recebe aviso prévio, 13º proporcional, férias proporcionais (Súmula 171 do TST), multa de 40% do FGTS nem seguro-desemprego.",
          "O FGTS depositado não é perdido. Ele fica na conta e pode ser sacado em outras situações previstas em lei, como aposentadoria ou compra da casa própria. Se a justa causa for revertida, o saque é liberado com a multa.",
        ],
      },
      {
        title: "Passo a passo para contestar",
        paragraphs: [
          "Peça a carta com o motivo da justa causa por escrito. Não assine documentos que confessem a falta se você não concorda. Se for obrigado a assinar para receber, escreva que assina apenas como ciente e que discorda.",
          "Reúna sua versão: mensagens, testemunhas, atestados e o histórico de bom comportamento, como elogios e ausência de punições. Depois, procure um advogado. Na ação, é possível pedir a conversão em dispensa sem justa causa e, se a acusação foi ofensiva e sem prova, indenização por dano moral.",
        ],
      },
      {
        title: "Erros comuns de quem recebe a justa causa",
        paragraphs: [
          "O primeiro é achar que nada pode ser feito. O segundo é assinar confissões ou acordos sob pressão. O terceiro é perder o prazo de 2 anos. Acusações de furto ou fraude sem prova, por exemplo, costumam ser analisadas com rigor pela Justiça.",
        ],
      },
    ],
    faq: [
      {
        question: "Recebo 13º se for demitido por justa causa?",
        answer: "O 13º proporcional do ano da demissão não é devido na justa causa. Se houver 13º de anos anteriores não pago, ele deve ser pago.",
      },
      {
        question: "A empresa pode dar justa causa por faltas sem advertir antes?",
        answer: "Para faltas leves e repetidas, como atrasos, a Justiça costuma exigir punições graduais antes. Faltas muito graves, como agressão ou furto comprovado, podem justificar a justa causa imediata.",
      },
      {
        question: "Quanto tempo a empresa tem para aplicar a justa causa?",
        answer: "A lei não fixa um número de dias. A punição deve ser aplicada logo após a empresa tomar conhecimento da falta ou concluir a apuração. Demora sem justificativa pode ser vista como perdão.",
      },
      {
        question: "Posso ser demitido por justa causa por post nas redes sociais?",
        answer: "Pode, se o conteúdo for grave, como ofensas à empresa ou a colegas ou divulgação de segredo da empresa. Cada caso é avaliado conforme a gravidade e a proporcionalidade.",
      },
    ],
    updatedAt: U,
  },

  "trabalhista/empresa-faliu-nao-pagou-o-que-fazer": {
    sections: [
      {
        title: "Primeiro passo: descobrir a situação real da empresa",
        paragraphs: [
          "Empresa que fechou as portas não é, necessariamente, empresa falida. A falência só existe quando decretada por um juiz. Consulte o CNPJ na Receita Federal e pesquise o nome da empresa nos sites dos tribunais de justiça para saber se há processo de falência ou de recuperação judicial.",
          "Essa informação muda o caminho. Se não há falência, a cobrança é feita diretamente na Justiça do Trabalho, inclusive contra sócios e outras empresas do mesmo grupo. Se há falência ou recuperação, o processo trabalhista define o valor e depois ele é habilitado no processo da empresa.",
        ],
      },
      {
        title: "Ordem de pagamento na falência",
        paragraphs: [
          "Na falência, os créditos trabalhistas têm preferência até o limite de 150 salários mínimos por trabalhador (art. 83, I, da Lei 11.101/2005). O que passar desse limite entra junto com os credores comuns.",
          "Os salários dos 3 meses anteriores à falência, até o limite de 5 salários mínimos por trabalhador, devem ser pagos assim que houver dinheiro em caixa (art. 151 da mesma lei). Na falência, não incidem as multas dos arts. 467 e 477 da CLT (Súmula 388 do TST).",
        ],
      },
      {
        title: "Recuperação judicial: o que muda para o trabalhador",
        paragraphs: [
          "Na recuperação judicial, a empresa continua funcionando e apresenta um plano de pagamento. Pela lei, o plano não pode prever prazo maior que 1 ano para pagar os créditos trabalhistas, com possibilidade de extensão em condições específicas (art. 54 da Lei 11.101/2005).",
          "A ação trabalhista continua na Justiça do Trabalho até o valor ser definido. Depois, o crédito é incluído na lista de credores. Fique atento aos editais e à assembleia de credores, porque o plano aprovado pode mudar a forma de pagamento.",
        ],
      },
      {
        title: "Quem mais pode ser cobrado",
        paragraphs: [
          "Se você trabalhava como terceirizado, a empresa tomadora do serviço responde de forma subsidiária pelas verbas do período em que se beneficiou do seu trabalho (Súmula 331 do TST e art. 5º-A, §5º, da Lei 6.019/1974).",
          "Empresas do mesmo grupo econômico respondem juntas (art. 2º, §2º, da CLT). Os sócios podem ser chamados a pagar quando os bens da empresa não bastam, por meio da desconsideração da personalidade jurídica. O sócio que saiu responde pelas dívidas do período em que era sócio, se a ação for proposta em até 2 anos da saída dele (art. 10-A da CLT).",
        ],
      },
      {
        title: "Passo a passo prático e quando procurar ajuda",
        paragraphs: [
          "Reúna a carteira de trabalho, holerites, extrato do FGTS e qualquer comunicação da empresa. Tente sacar o FGTS depositado: a extinção da empresa permite o saque. Se a empresa não deu baixa na carteira, a Justiça do Trabalho pode reconhecer o fim do contrato e determinar a liberação das guias.",
          "Não espere a falência terminar para agir. O prazo de 2 anos para a ação trabalhista continua correndo. Um advogado pode ajuizar a ação, pedir o bloqueio de bens e habilitar o crédito no momento certo.",
        ],
      },
    ],
    faq: [
      {
        question: "Quanto tempo demora para receber de uma empresa falida?",
        answer: "Não há prazo certo. Depende da venda dos bens da massa falida e do número de credores. Pode levar anos. Por isso, vale também buscar outros responsáveis, como tomadores de serviço e empresas do grupo.",
      },
      {
        question: "Posso cobrar dos sócios da empresa que fechou?",
        answer: "Sim, quando a empresa não tem bens suficientes. A Justiça do Trabalho pode desconsiderar a personalidade jurídica e atingir o patrimônio dos sócios, seguindo o procedimento previsto em lei.",
      },
      {
        question: "A empresa sumiu e não deu baixa na carteira. O que fazer?",
        answer: "Você pode entrar com reclamação trabalhista para reconhecer o fim do contrato, liberar o FGTS e as guias do seguro-desemprego e cobrar as verbas. A Justiça pode tentar localizar a empresa e os sócios.",
      },
      {
        question: "Preciso de advogado para habilitar crédito na falência?",
        answer: "A habilitação é um procedimento técnico, com prazos e documentos próprios. Em regra, o valor é definido primeiro na Justiça do Trabalho, e a orientação de um advogado evita perder prazos.",
      },
    ],
    updatedAt: U,
  },
};

export default expansions;

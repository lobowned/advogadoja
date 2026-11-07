// Conteúdo próprio (não-template) das páginas locais prioritárias.
// Só fatos verificáveis: nada de endereço, telefone, juiz, estatística ou resultado inventado.
// Chave: `${nicheSlug}-${citySlug}` — os mesmos slugs de CityNicheLanding/legalAreas e cities.ts.
// A lista de chaves mora em local-page-keys.ts (o App usa só ela, sem carregar este conteúdo).
import {
  LOCAL_PAGE_KEYS,
  LOCAL_PAGE_ROUTES,
  LOCAL_CITY_NAMES,
  LOCAL_NICHE_NAMES,
  splitLocalKey,
  type LocalPageKey,
} from "./local-page-keys";

export { LOCAL_PAGE_KEYS, LOCAL_PAGE_ROUTES, LOCAL_CITY_NAMES, LOCAL_NICHE_NAMES, splitLocalKey };
export type { LocalPageKey };

export interface LocalPageContent {
  title: string;
  metaDescription: string;
  h1: string;
  intro: string;
  sections: { h2: string; body: string }[];
  faq: { q: string; a: string }[];
  areaLink: { href: string; label: string };
  whatsappText: string;
}

export const localPages: Record<LocalPageKey, LocalPageContent> = {
  "criminal-salvador": {
    title: "Advogado Criminalista em Salvador (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado criminalista em Salvador: prisão em flagrante, audiência de custódia, habeas corpus e defesa em processo criminal na Justiça Estadual e Federal. OAB/BA 46.638.",
    h1: "Advogado criminalista em Salvador",
    intro:
      "Quando alguém da família é preso em Salvador, as primeiras horas decidem muito. A defesa precisa estar presente na audiência de custódia, conhecer o auto de prisão e saber em qual justiça o caso vai tramitar.",
    sections: [
      {
        h2: "Prisão em flagrante e audiência de custódia",
        body:
          "Depois do flagrante, o preso deve ser apresentado a um juiz em até 24 horas na audiência de custódia (art. 310 do CPP). É ali que se discute relaxamento da prisão ilegal, liberdade provisória com ou sem fiança e medidas cautelares no lugar da preventiva. Chegar a essa audiência com advogado constituído, documentos de residência e trabalho do preso faz diferença concreta.",
      },
      {
        h2: "Justiça Estadual ou Justiça Federal",
        body:
          "A maior parte dos crimes em Salvador é julgada pelas varas criminais do Tribunal de Justiça da Bahia (TJBA). Crimes contra a União, como moeda falsa, contrabando, fraude contra o INSS ou tráfico internacional, vão para a Justiça Federal – Seção Judiciária da Bahia, com recurso ao TRF da 1ª Região. Saber onde o processo corre muda prazos, sistema eletrônico e estratégia.",
      },
      {
        h2: "Habeas corpus e recursos",
        body:
          "Prisão preventiva sem fundamentação concreta, excesso de prazo e constrangimento ilegal podem ser levados ao TJBA por habeas corpus e, se necessário, ao STJ. A defesa também acompanha o inquérito na delegacia, o oferecimento da denúncia pelo Ministério Público e a instrução até a sentença.",
      },
      {
        h2: "Como funciona o atendimento",
        body:
          "O primeiro contato é pelo WhatsApp do escritório. Com o nome completo do preso, a delegacia ou unidade onde está e, se houver, o número do processo, o Dr. Gilberto Riccio (OAB/BA 46.638) consulta os autos e orienta a família sobre o próximo passo.",
      },
    ],
    faq: [
      {
        q: "Quanto tempo depois da prisão acontece a audiência de custódia?",
        a: "A regra é até 24 horas após a prisão em flagrante, conforme o art. 310 do Código de Processo Penal e a Resolução 213/2015 do CNJ.",
      },
      {
        q: "A família pode contratar o advogado mesmo sem falar com o preso?",
        a: "Sim. A família pode procurar o advogado, que se apresenta ao preso e formaliza a procuração. O contato inicial pode ser feito por WhatsApp.",
      },
      {
        q: "Fiança pode ser paga na delegacia?",
        a: "Para crimes com pena máxima de até 4 anos, o próprio delegado pode arbitrar fiança (art. 322 do CPP). Nos demais casos, só o juiz decide.",
      },
      {
        q: "Meu caso é na Justiça Federal. O atendimento é o mesmo?",
        a: "Sim. O escritório atua tanto nas varas criminais do TJBA quanto na Justiça Federal na Bahia, ambas com processo eletrônico.",
      },
    ],
    areaLink: { href: "/criminal", label: "Defesa criminal: como o escritório atua" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado criminalista em Salvador.",
  },

  "criminal-camacari": {
    title: "Advogado Criminalista em Camaçari (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado criminalista em Camaçari: prisão em flagrante, audiência de custódia, habeas corpus e defesa em processo na comarca de Camaçari. OAB/BA 46.638.",
    h1: "Advogado criminalista em Camaçari",
    intro:
      "Prisões em Camaçari, inclusive na orla de Arembepe, Jauá e Monte Gordo, seguem para a comarca de Camaçari do TJBA. A família precisa de orientação rápida sobre custódia, fiança e o que acontece depois.",
    sections: [
      {
        h2: "O processo corre no Fórum de Camaçari",
        body:
          "Crimes de competência estadual ocorridos no município são processados pelas varas criminais da comarca de Camaçari, no Fórum de Camaçari. Recursos e habeas corpus contra decisões dessas varas vão ao Tribunal de Justiça da Bahia, em Salvador.",
      },
      {
        h2: "Primeiras 24 horas após o flagrante",
        body:
          "O preso deve passar por audiência de custódia em até 24 horas (art. 310 do CPP). Nela o juiz avalia se a prisão foi legal e se cabe liberdade provisória ou medida cautelar, como comparecimento periódico ou monitoramento eletrônico. Comprovante de residência e de trabalho do preso ajudam a mostrar vínculo com a cidade.",
      },
      {
        h2: "Crimes federais",
        body:
          "Se o fato envolve bens ou serviços da União, como fraude contra o INSS ou a Caixa, o processo vai para a Justiça Federal – Seção Judiciária da Bahia, e não para o fórum local.",
      },
      {
        h2: "Atendimento",
        body:
          "O contato é pelo WhatsApp. Envie o nome completo do preso e onde ele está; o Dr. Gilberto Riccio (OAB/BA 46.638) verifica a situação e orienta a família sobre o próximo passo.",
      },
    ],
    faq: [
      {
        q: "Quem é preso em Camaçari responde em Salvador?",
        a: "Não, em regra. Crimes estaduais cometidos em Camaçari são julgados na comarca de Camaçari. Salvador entra no caminho em recursos ao TJBA ou em crimes federais.",
      },
      {
        q: "O que é preciso para pedir liberdade provisória?",
        a: "Ausência dos requisitos da prisão preventiva (art. 312 do CPP). Documentos que mostrem residência fixa, trabalho e família reforçam o pedido.",
      },
      {
        q: "Dá para impetrar habeas corpus a qualquer hora?",
        a: "Sim. O habeas corpus não tem prazo e pode ser impetrado sempre que houver prisão ou ameaça de prisão ilegal.",
      },
      {
        q: "Vocês atendem a família por WhatsApp?",
        a: "Sim. O primeiro contato e o envio de documentos podem ser feitos pelo WhatsApp do escritório.",
      },
    ],
    areaLink: { href: "/criminal", label: "Defesa criminal: como o escritório atua" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado criminalista em Camaçari.",
  },

  "previdenciario-salvador": {
    title: "Advogado Previdenciário (INSS) em Salvador | Riccio Advocacia",
    metaDescription:
      "Advogado de INSS em Salvador: aposentadoria, BPC/LOAS, auxílio por incapacidade e pensão por morte. Pedido administrativo e ação na Justiça Federal da Bahia.",
    h1: "Advogado previdenciário (INSS) em Salvador",
    intro:
      "Benefício negado, perícia que não reconheceu a doença, aposentadoria calculada a menor: em Salvador, a briga com o INSS passa primeiro pelo Meu INSS e, se não resolver, pela Justiça Federal – Seção Judiciária da Bahia.",
    sections: [
      {
        h2: "Primeiro o pedido administrativo",
        body:
          "Na maioria dos casos é preciso ter pedido o benefício ao INSS antes de ir à Justiça. O requerimento é feito pelo Meu INSS ou pela central 135. Um pedido bem instruído, com laudos, CNIS conferido e documentos de tempo rural ou especial, já evita boa parte dos indeferimentos.",
      },
      {
        h2: "Ação na Justiça Federal em Salvador",
        body:
          "Negado o benefício, a ação contra o INSS é proposta na Justiça Federal – Seção Judiciária da Bahia. Causas de até 60 salários mínimos vão ao Juizado Especial Federal, mais rápido e sem custas no primeiro grau. Recursos seguem para as Turmas Recursais e, nas ações comuns, ao TRF da 1ª Região.",
      },
      {
        h2: "Benefícios mais procurados",
        body:
          "Aposentadoria por idade e por tempo de contribuição com regras de transição da Reforma de 2019, aposentadoria especial, BPC/LOAS para idoso ou pessoa com deficiência de baixa renda, auxílio por incapacidade temporária, aposentadoria por incapacidade permanente e pensão por morte.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp a carta de indeferimento e o CNIS (ambos baixados no Meu INSS). O Dr. Gilberto Riccio (OAB/BA 46.638) analisa se cabe recurso administrativo, novo pedido ou ação judicial.",
      },
    ],
    faq: [
      {
        q: "Preciso ir a uma agência do INSS em Salvador?",
        a: "Nem sempre. Pedido, acompanhamento e recurso podem ser feitos pelo Meu INSS. A agência é necessária para perícia médica, avaliação social do BPC e alguns atendimentos presenciais agendados.",
      },
      {
        q: "Qual o prazo para recorrer de benefício negado?",
        a: "O recurso ao Conselho de Recursos da Previdência Social deve ser apresentado em até 30 dias da ciência da decisão. Mesmo perdido esse prazo, ainda pode caber ação judicial.",
      },
      {
        q: "Ação no Juizado Especial Federal tem custo?",
        a: "Não há custas no primeiro grau do Juizado Especial Federal. Os honorários do advogado são combinados com o cliente, em geral sobre o resultado.",
      },
      {
        q: "O INSS paga os atrasados?",
        a: "Se a Justiça reconhecer o direito, o INSS paga as parcelas desde a data do requerimento, respeitada a prescrição de 5 anos, por RPV ou precatório conforme o valor.",
      },
    ],
    areaLink: { href: "/prev", label: "Direito previdenciário: benefícios e calculadoras" },
    whatsappText: "Olá, Dr. Gilberto. Tive um problema com o INSS e moro em Salvador.",
  },

  "previdenciario-camacari": {
    title: "Advogado Previdenciário (INSS) em Camaçari | Riccio Advocacia",
    metaDescription:
      "Advogado de INSS em Camaçari: aposentadoria especial do polo industrial, BPC/LOAS, auxílio por incapacidade e pensão por morte. Orientação pelo WhatsApp.",
    h1: "Advogado previdenciário (INSS) em Camaçari",
    intro:
      "Quem trabalhou no polo industrial de Camaçari muitas vezes tem direito a contar tempo especial, e o INSS costuma negar. A cidade também tem agência própria do INSS, onde acontecem perícias e avaliações do BPC.",
    sections: [
      {
        h2: "Aposentadoria especial e tempo especial do polo",
        body:
          "Exposição habitual a agentes químicos, ruído acima do limite ou periculosidade pode garantir aposentadoria especial ou a conversão de tempo especial em comum (para períodos até 13/11/2019). A prova é o PPP (Perfil Profissiográfico Previdenciário) e o LTCAT emitidos pela empresa. PPP incompleto ou errado é uma das causas mais comuns de indeferimento.",
      },
      {
        h2: "Agência do INSS em Camaçari",
        body:
          "O pedido é feito pelo Meu INSS ou pela central 135, mas a perícia médica e a avaliação social do BPC podem ser agendadas na agência do INSS em Camaçari. Levar laudos recentes, receitas e exames organizados por data ajuda o perito a entender o quadro.",
      },
      {
        h2: "Quando ir à Justiça",
        body:
          "Negado o benefício, a ação contra o INSS é de competência da Justiça Federal na Bahia. Causas de até 60 salários mínimos tramitam no Juizado Especial Federal, sem custas no primeiro grau.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp a carta do INSS, o CNIS e, se for tempo especial, o PPP. O Dr. Gilberto Riccio (OAB/BA 46.638) avalia o caso e indica o caminho.",
      },
    ],
    faq: [
      {
        q: "A empresa não quer me dar o PPP. O que fazer?",
        a: "A empresa é obrigada a fornecer o PPP ao trabalhador no desligamento. A recusa pode ser cobrada judicialmente, e a falta do documento pode ser suprida por outras provas, como perícia técnica.",
      },
      {
        q: "Ainda dá para converter tempo especial em comum?",
        a: "Sim, para períodos trabalhados até 13/11/2019, data da Reforma da Previdência. Depois disso a conversão não é mais permitida.",
      },
      {
        q: "Como funciona o BPC/LOAS?",
        a: "É um benefício de um salário mínimo para idoso a partir de 65 anos ou pessoa com deficiência, com renda familiar baixa e inscrição atualizada no CadÚnico. Não exige contribuição ao INSS.",
      },
      {
        q: "Perdi o prazo do recurso no INSS. Acabou?",
        a: "Não necessariamente. É possível fazer novo pedido ou ir direto à Justiça Federal, observada a prescrição de 5 anos das parcelas.",
      },
    ],
    areaLink: { href: "/prev", label: "Direito previdenciário: benefícios e calculadoras" },
    whatsappText: "Olá, Dr. Gilberto. Tive um problema com o INSS e moro em Camaçari.",
  },

  "trabalhista-salvador": {
    title: "Advogado Trabalhista em Salvador (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado trabalhista em Salvador: rescisão, horas extras, justa causa, vínculo e acidente de trabalho. Ações nas Varas do Trabalho do TRT da 5ª Região.",
    h1: "Advogado trabalhista em Salvador",
    intro:
      "Ações trabalhistas de quem trabalhou em Salvador são julgadas pelas Varas do Trabalho da capital, que integram o Tribunal Regional do Trabalho da 5ª Região (TRT5), com sede em Salvador.",
    sections: [
      {
        h2: "Prazo: 2 anos para entrar, 5 anos de direitos",
        body:
          "A ação deve ser proposta em até 2 anos depois do fim do contrato, e alcança os direitos dos últimos 5 anos contados do ajuizamento (art. 7º, XXIX, da Constituição). Cada mês de demora pode significar um mês de direitos perdido.",
      },
      {
        h2: "Casos frequentes na capital",
        body:
          "Comércio, serviços, call center, condomínios, saúde e terceirizadas concentram pedidos de horas extras, intervalo não concedido, desvio de função, vínculo sem carteira assinada, verbas rescisórias não pagas e reversão de justa causa.",
      },
      {
        h2: "Como é o processo no TRT5",
        body:
          "O processo é todo eletrônico (PJe). Há tentativa de conciliação na audiência, depois instrução com testemunhas e sentença. Recursos vão ao próprio TRT5, em Salvador, e excepcionalmente ao TST.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp carteira de trabalho, contracheques, termo de rescisão e prints de conversas com a empresa. O Dr. Gilberto Riccio (OAB/BA 46.638) avalia o que pode ser cobrado.",
      },
    ],
    faq: [
      {
        q: "Preciso ir pessoalmente às Varas do Trabalho?",
        a: "O processo é eletrônico. Audiências podem ser presenciais ou telepresenciais, conforme a vara designar.",
      },
      {
        q: "Conversas de WhatsApp servem de prova?",
        a: "Sim. Mensagens com o chefe ou o RH são aceitas como prova, de preferência com o arquivo original preservado.",
      },
      {
        q: "Fui demitido por justa causa. Dá para reverter?",
        a: "Sim, quando a empresa não prova a falta grave ou não aplica a punição de forma imediata e proporcional. Revertida, a justa causa vira dispensa sem justa causa com todas as verbas.",
      },
      {
        q: "Quanto custa?",
        a: "Os honorários são combinados com o cliente, em geral sobre o valor obtido ao final. Quem não pode pagar custas pode pedir justiça gratuita.",
      },
    ],
    areaLink: { href: "/advogado-trabalhista-online", label: "Advogado trabalhista online: como funciona" },
    whatsappText: "Olá, Dr. Gilberto. Tenho uma questão trabalhista em Salvador.",
  },

  "trabalhista-camacari": {
    title: "Advogado Trabalhista em Camaçari (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado trabalhista em Camaçari: polo industrial, insalubridade, periculosidade, turnos de revezamento e terceirizadas. Ações na Vara do Trabalho de Camaçari (TRT5).",
    h1: "Advogado trabalhista em Camaçari",
    intro:
      "O Polo Industrial de Camaçari reúne indústrias químicas, petroquímicas e muitas prestadoras de serviço. Isso gera demandas trabalhistas bem específicas.",
    sections: [
      {
        h2: "Vara do Trabalho de Camaçari",
        body:
          "Quem trabalhou no município ajuíza a ação na Justiça do Trabalho em Camaçari, que pertence ao TRT da 5ª Região. Recursos são julgados pelo TRT5 em Salvador. O processo é eletrônico (PJe).",
      },
      {
        h2: "Insalubridade e periculosidade no polo",
        body:
          "Contato com agentes químicos, inflamáveis e ruído pode garantir adicional de insalubridade (10%, 20% ou 40% do salário mínimo) ou de periculosidade (30% do salário-base). O direito é apurado por perícia técnica no processo, e os mesmos fatos servem depois para o tempo especial no INSS.",
      },
      {
        h2: "Turnos de revezamento e terceirizadas",
        body:
          "Quem trabalha em turnos ininterruptos de revezamento tem jornada de 6 horas, salvo negociação coletiva (art. 7º, XIV, da Constituição). Empregados de terceirizadas que prestavam serviço dentro de uma indústria do polo podem incluir a tomadora no processo, que responde de forma subsidiária.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp carteira, contracheques, termo de rescisão, PPP e escalas de turno. O Dr. Gilberto Riccio (OAB/BA 46.638) avalia o caso.",
      },
    ],
    faq: [
      {
        q: "Trabalhei por terceirizada no polo. Posso processar a indústria também?",
        a: "Sim. A empresa tomadora do serviço responde de forma subsidiária pelas verbas não pagas pela terceirizada (Súmula 331 do TST e Lei 6.019/1974).",
      },
      {
        q: "Posso receber insalubridade e periculosidade juntas?",
        a: "Pelo entendimento atual do TST, não: o trabalhador escolhe o adicional mais vantajoso.",
      },
      {
        q: "Qual o prazo para entrar com a ação?",
        a: "Até 2 anos após o fim do contrato, cobrando os últimos 5 anos.",
      },
      {
        q: "O PPP da empresa ajuda na ação trabalhista?",
        a: "Sim. O PPP registra os agentes nocivos e é usado tanto no processo trabalhista quanto no pedido de aposentadoria especial.",
      },
    ],
    areaLink: { href: "/advogado-trabalhista-online", label: "Advogado trabalhista online: como funciona" },
    whatsappText: "Olá, Dr. Gilberto. Tenho uma questão trabalhista em Camaçari.",
  },

  "familia-salvador": {
    title: "Advogado de Família em Salvador (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado de família em Salvador: divórcio judicial e em cartório, pensão alimentícia, guarda, união estável e inventário. Atendimento pelo WhatsApp. OAB/BA 46.638.",
    h1: "Advogado de família em Salvador",
    intro:
      "Divórcio, pensão e guarda em Salvador podem correr nas Varas de Família da comarca, no TJBA, ou, em alguns casos, ser resolvidos direto em cartório.",
    sections: [
      {
        h2: "Divórcio em cartório ou na Justiça",
        body:
          "Quando há acordo e todos estão assistidos por advogado, o divórcio pode ser feito por escritura pública em cartório de notas (Lei 11.441/2007), em geral bem mais rápido. Com litígio, filhos com questões não resolvidas ou bens em disputa, o caminho é a Vara de Família.",
      },
      {
        h2: "Pensão alimentícia",
        body:
          "A pensão é fixada pelo binômio necessidade de quem recebe e possibilidade de quem paga. Atraso pode ser cobrado com pedido de prisão civil das 3 últimas parcelas (art. 528 do CPC) ou com penhora de bens e salário.",
      },
      {
        h2: "Guarda e convivência",
        body:
          "A guarda compartilhada é a regra legal (art. 1.584 do Código Civil), mesmo quando os pais não se entendem. O que se discute é a residência da criança e o calendário de convivência, sempre pelo melhor interesse do filho.",
      },
      {
        h2: "Atendimento",
        body:
          "Conte o caso pelo WhatsApp, com certidão de casamento ou de nascimento dos filhos. O Dr. Gilberto Riccio (OAB/BA 46.638) orienta qual o caminho mais rápido e seguro.",
      },
    ],
    faq: [
      {
        q: "Posso fazer divórcio em cartório tendo filho menor?",
        a: "Pode, desde que a guarda, as visitas e a pensão do filho já tenham sido definidas por decisão judicial (Resolução CNJ 35/2007, com a redação de 2024, que vale em todo o país). Se ainda não foram, o divórcio consensual é feito na Vara de Família, resolvendo tudo de uma vez.",
      },
      {
        q: "Qual o valor da pensão alimentícia?",
        a: "Não existe percentual fixo em lei. O juiz considera a necessidade do filho e a renda de quem paga; 30% é apenas um número usado com frequência, não uma regra.",
      },
      {
        q: "O pai parou de pagar. Pode ser preso?",
        a: "Sim. Pela dívida das 3 últimas parcelas e das que vencerem no processo, cabe prisão civil de 1 a 3 meses em regime fechado (art. 528 do CPC).",
      },
      {
        q: "União estável dá os mesmos direitos do casamento?",
        a: "Na partilha, em regra vale a comunhão parcial de bens, como no casamento. A união pode ser reconhecida em cartório ou judicialmente.",
      },
    ],
    areaLink: { href: "/advogado-familia", label: "Direito de família: divórcio, pensão e guarda" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado de família em Salvador.",
  },

  "familia-camacari": {
    title: "Advogado de Família em Camaçari (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado de família em Camaçari: divórcio, pensão alimentícia, guarda e união estável na comarca de Camaçari. Atendimento pelo WhatsApp. OAB/BA 46.638.",
    h1: "Advogado de família em Camaçari",
    intro:
      "Quem mora em Camaçari, incluindo a sede, Abrantes, Arembepe e Monte Gordo, resolve divórcio, pensão e guarda na comarca de Camaçari, no Fórum de Camaçari, ou em cartório quando há acordo.",
    sections: [
      {
        h2: "Onde o processo corre",
        body:
          "Em ações de alimentos, o processo pode ser proposto no domicílio de quem pede a pensão (art. 53, II, do CPC). Então a mãe que mora em Camaçari pode cobrar pensão aqui, mesmo que o pai more em Salvador ou em outro estado.",
      },
      {
        h2: "Pensão de quem trabalha no polo industrial",
        body:
          "Quando quem paga tem carteira assinada, é comum pedir que a pensão seja descontada direto na folha pela empresa. Isso reduz atrasos e dá segurança a quem recebe. Valores de PLR e 13º também podem ser discutidos no acordo ou na sentença.",
      },
      {
        h2: "Divórcio, guarda e união estável",
        body:
          "Com acordo, o divórcio pode ser feito em cartório por escritura (Lei 11.441/2007). Sem acordo, vai para a Justiça. A guarda compartilhada é a regra legal, e a união estável pode ser reconhecida e dissolvida com partilha dos bens adquiridos durante a convivência.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp um resumo do caso e as certidões. O Dr. Gilberto Riccio (OAB/BA 46.638) orienta o caminho e os documentos necessários.",
      },
    ],
    faq: [
      {
        q: "Moro em Camaçari e o pai do meu filho em Salvador. Onde peço pensão?",
        a: "Pode ser em Camaçari: a lei permite ajuizar a ação de alimentos no domicílio de quem pede a pensão.",
      },
      {
        q: "A pensão pode ser descontada no salário?",
        a: "Sim. Se quem paga tem emprego formal, o juiz pode determinar desconto direto em folha.",
      },
      {
        q: "Quanto tempo leva um divórcio consensual?",
        a: "Em cartório, com documentos em ordem, costuma ser bem mais rápido do que na Justiça. O prazo exato depende do cartório e da documentação.",
      },
      {
        q: "Preciso de advogado para o divórcio em cartório?",
        a: "Sim. A escritura de divórcio exige a assistência de advogado ou defensor público.",
      },
    ],
    areaLink: { href: "/advogado-familia", label: "Direito de família: divórcio, pensão e guarda" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado de família em Camaçari.",
  },

  // ───────────────────────── Lauro de Freitas ─────────────────────────

  "criminal-lauro-de-freitas": {
    title: "Advogado Criminalista em Lauro de Freitas (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado criminalista em Lauro de Freitas: flagrante, audiência de custódia, habeas corpus e defesa na comarca de Lauro de Freitas (TJBA). OAB/BA 46.638.",
    h1: "Advogado criminalista em Lauro de Freitas",
    intro:
      "Lauro de Freitas faz divisa com Salvador, e muita família não sabe se o parente preso vai responder lá ou aqui. A resposta depende de onde o fato aconteceu, e é por ela que a defesa começa.",
    sections: [
      {
        h2: "Onde o processo vai correr",
        body:
          "A competência criminal é definida pelo lugar em que o crime se consumou (art. 70 do CPP). Fato ocorrido em Lauro de Freitas, em bairros como Itinga, Portão, Centro ou Vilas do Atlântico, é processado na comarca de Lauro de Freitas do TJBA, mesmo que a pessoa more em Salvador. Fato do outro lado da divisa vai para Salvador. Errar isso atrasa o pedido de liberdade.",
      },
      {
        h2: "Depois da prisão: custódia e liberdade provisória",
        body:
          "O preso em flagrante deve ser levado a um juiz em até 24 horas (art. 310 do CPP). Nessa audiência a defesa pode pedir o relaxamento de prisão ilegal, a liberdade provisória ou a troca da preventiva por medidas cautelares do art. 319 do CPP. Ter em mãos comprovante de endereço e de trabalho do preso ajuda.",
      },
      {
        h2: "Recursos e crimes federais",
        body:
          "Habeas corpus e apelações contra decisões da comarca vão ao Tribunal de Justiça da Bahia, em Salvador. Se o fato atinge interesse da União, como fraude contra o INSS, contra a Caixa ou contrabando, o caso sai da Justiça Estadual e vai para a Justiça Federal – Seção Judiciária da Bahia.",
      },
      {
        h2: "Atendimento",
        body:
          "Mande pelo WhatsApp o nome completo do preso, onde ele está e o número do processo, se já houver. O Dr. Gilberto Riccio (OAB/BA 46.638) consulta a situação e orienta a família sobre o próximo passo.",
      },
    ],
    faq: [
      {
        q: "Meu parente mora em Salvador, mas foi preso em Lauro de Freitas. Onde ele responde?",
        a: "Em regra, no lugar do fato. Se o crime aconteceu em Lauro de Freitas, o processo corre na comarca de Lauro de Freitas.",
      },
      {
        q: "Quanto tempo depois da prisão é a audiência de custódia?",
        a: "Até 24 horas depois da prisão em flagrante, pelo art. 310 do CPP e pela Resolução 213/2015 do CNJ.",
      },
      {
        q: "A família pode contratar o advogado antes de falar com o preso?",
        a: "Pode. O advogado se apresenta ao preso e formaliza a procuração. O primeiro contato pode ser pelo WhatsApp.",
      },
      {
        q: "Qual o prazo para entrar com habeas corpus?",
        a: "Não há prazo. O habeas corpus cabe sempre que houver prisão ou ameaça de prisão ilegal.",
      },
    ],
    areaLink: { href: "/criminal", label: "Defesa criminal: como o escritório atua" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado criminalista em Lauro de Freitas.",
  },

  "previdenciario-lauro-de-freitas": {
    title: "Advogado Previdenciário (INSS) em Lauro de Freitas | Riccio Advocacia",
    metaDescription:
      "Advogado de INSS em Lauro de Freitas: aposentadoria, BPC/LOAS, auxílio por incapacidade, pensão por morte e revisão. Pedido no Meu INSS e ação na Justiça Federal.",
    h1: "Advogado previdenciário (INSS) em Lauro de Freitas",
    intro:
      "Ação contra o INSS não corre no fórum de Lauro de Freitas: é da Justiça Federal. Quem mora no município precisa entender esse caminho antes de desistir de um benefício negado.",
    sections: [
      {
        h2: "Benefício negado não é o fim",
        body:
          "O indeferimento do INSS pode ser contestado por recurso administrativo ao Conselho de Recursos da Previdência Social ou por ação judicial. Muitas negativas acontecem por falta de documento: vínculo que não aparece no CNIS, laudo médico sem descrição da limitação para o trabalho, tempo especial sem PPP. Corrigir isso costuma ser o primeiro passo.",
      },
      {
        h2: "Justiça Federal e Juizado Especial Federal",
        body:
          "Benefícios do INSS são discutidos na Justiça Federal – Seção Judiciária da Bahia. Causas de até 60 salários mínimos vão ao Juizado Especial Federal, sem custas no primeiro grau. O processo é eletrônico, e a perícia médica judicial é feita por perito nomeado pelo juiz, não pelo INSS.",
      },
      {
        h2: "Revisão e pensão por morte",
        body:
          "Além de pedidos novos, há revisões de aposentadoria já concedida, que em regra precisam ser pedidas em até 10 anos (art. 103 da Lei 8.213/1991), e pensão por morte, cuja duração depende da idade do dependente e do tempo de união ou casamento.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp a carta de indeferimento, o CNIS, laudos e exames. O Dr. Gilberto Riccio (OAB/BA 46.638) analisa se cabe recurso, novo pedido ou ação.",
      },
    ],
    faq: [
      {
        q: "Preciso ir a Salvador para o processo contra o INSS?",
        a: "O processo é eletrônico. A presença pode ser exigida em perícia ou audiência, no local que o juízo designar.",
      },
      {
        q: "Recurso administrativo ou ação judicial: qual escolher?",
        a: "Depende do motivo da negativa e da prova disponível. Em alguns casos o recurso resolve; em outros, a ação é o caminho mais direto.",
      },
      {
        q: "Tenho direito a atrasados?",
        a: "Se o benefício for concedido na Justiça, em regra os valores são devidos desde a data do pedido ao INSS, respeitada a prescrição de 5 anos.",
      },
      {
        q: "Quanto custa?",
        a: "Os honorários são combinados com o cliente, em geral sobre os atrasados recebidos ao final.",
      },
    ],
    areaLink: { href: "/prev", label: "Direito previdenciário: benefícios e calculadoras" },
    whatsappText: "Olá, Dr. Gilberto. Tenho um problema com o INSS e moro em Lauro de Freitas.",
  },

  "trabalhista-lauro-de-freitas": {
    title: "Advogado Trabalhista em Lauro de Freitas (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado trabalhista em Lauro de Freitas: rescisão, horas extras, vínculo sem carteira, justa causa e acidente de trabalho. Ações na Justiça do Trabalho (TRT5).",
    h1: "Advogado trabalhista em Lauro de Freitas",
    intro:
      "Muita gente mora em Lauro de Freitas e trabalha em Salvador, ou o contrário. Para a Justiça do Trabalho, o que conta, em regra, é onde o serviço foi prestado, não onde o trabalhador mora.",
    sections: [
      {
        h2: "Qual cidade é a competente",
        body:
          "A ação trabalhista é proposta, em regra, no local onde o empregado prestou serviço (art. 651 da CLT). Quem trabalhou em Lauro de Freitas ajuíza na Justiça do Trabalho com jurisdição sobre o município; quem trabalhou em Salvador, nas Varas do Trabalho da capital. As duas pertencem ao TRT da 5ª Região, e os recursos são julgados pelo TRT5 em Salvador.",
      },
      {
        h2: "Demandas comuns no município",
        body:
          "Comércio, condomínios residenciais, hotelaria e serviços ligados ao aeroporto e à orla concentram pedidos de horas extras, trabalho em domingos e feriados, vínculo sem carteira assinada, acúmulo de função e verbas rescisórias não pagas. Empregada doméstica também tem direito a FGTS, horas extras e férias desde a LC 150/2015.",
      },
      {
        h2: "Prazos que não podem passar",
        body:
          "São 2 anos depois do fim do contrato para entrar com a ação, cobrando os direitos dos últimos 5 anos (art. 7º, XXIX, da Constituição). Depois desse prazo, o direito se perde mesmo que a dívida seja evidente.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp carteira de trabalho, contracheques, termo de rescisão e conversas com a empresa. O Dr. Gilberto Riccio (OAB/BA 46.638) avalia o que pode ser cobrado.",
      },
    ],
    faq: [
      {
        q: "Moro em Lauro de Freitas e trabalhava em Salvador. Onde entro com a ação?",
        a: "Em regra, em Salvador, onde o serviço foi prestado. Há exceções, como para quem trabalhava viajando.",
      },
      {
        q: "Trabalhei sem carteira assinada. Posso cobrar?",
        a: "Sim. Provando a relação de emprego, com testemunhas, mensagens ou comprovantes de pagamento, a Justiça reconhece o vínculo e as verbas.",
      },
      {
        q: "Doméstica tem direito a hora extra?",
        a: "Sim. Desde a Lei Complementar 150/2015, a jornada da doméstica é de 8 horas diárias e 44 semanais, com horas extras e FGTS.",
      },
      {
        q: "Quanto custa?",
        a: "Os honorários são combinados com o cliente, em geral sobre o valor obtido ao final. Quem não pode pagar custas pode pedir justiça gratuita.",
      },
    ],
    areaLink: { href: "/advogado-trabalhista-online", label: "Advogado trabalhista online: como funciona" },
    whatsappText: "Olá, Dr. Gilberto. Tenho uma questão trabalhista em Lauro de Freitas.",
  },

  "familia-lauro-de-freitas": {
    title: "Advogado de Família em Lauro de Freitas (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado de família em Lauro de Freitas: divórcio judicial ou em cartório, pensão alimentícia, guarda, união estável e partilha. Atendimento pelo WhatsApp. OAB/BA 46.638.",
    h1: "Advogado de família em Lauro de Freitas",
    intro:
      "Em Lauro de Freitas, divórcio, pensão e guarda correm na comarca local do TJBA ou, havendo acordo, o divórcio pode ser feito em cartório; com filhos menores, desde que guarda, visitas e pensão já tenham sido definidas na Justiça.",
    sections: [
      {
        h2: "Partilha do imóvel financiado",
        body:
          "Muitos casais de Lauro de Freitas compraram apartamento ou casa financiada em condomínio. Na separação, o que se divide em regra é o que foi pago durante o casamento ou a união estável, e não o valor total do imóvel. A dívida restante com o banco também precisa entrar no acordo ou na sentença, para que ninguém fique pagando sozinho.",
      },
      {
        h2: "Pensão e guarda quando os pais moram em cidades vizinhas",
        body:
          "É comum um dos pais morar em Lauro de Freitas e o outro em Salvador ou Camaçari. A ação de alimentos pode ser proposta no domicílio de quem pede a pensão (art. 53, II, do CPC). A guarda compartilhada continua sendo a regra mesmo com cidades diferentes, com a fixação de uma residência base para a criança.",
      },
      {
        h2: "Divórcio em cartório ou na Justiça",
        body:
          "Com acordo sobre tudo, o divórcio pode ser feito por escritura pública (Lei 11.441/2007), com advogado. Sem acordo, ou quando há questões de filhos que precisam do juiz, a ação vai para a Vara de Família da comarca.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp um resumo do caso, a certidão de casamento ou de nascimento dos filhos e os documentos dos bens. O Dr. Gilberto Riccio (OAB/BA 46.638) orienta o caminho.",
      },
    ],
    faq: [
      {
        q: "O imóvel financiado está só no nome de um. O outro tem direito?",
        a: "Em regra sim, na comunhão parcial ou na união estável, quanto às parcelas pagas durante a convivência, mesmo que o contrato esteja em um só nome.",
      },
      {
        q: "Posso pedir pensão em Lauro de Freitas se o pai mora em Salvador?",
        a: "Sim. A ação de alimentos pode correr no domicílio de quem pede a pensão.",
      },
      {
        q: "Dá para fazer divórcio em cartório com filho menor?",
        a: "Depende. As questões de guarda e pensão do filho menor precisam passar pelo juiz; com elas já resolvidas judicialmente, alguns cartórios aceitam a escritura do divórcio. Cada caso precisa ser conferido.",
      },
      {
        q: "Preciso de advogado no divórcio em cartório?",
        a: "Sim. A escritura exige assistência de advogado ou defensor público.",
      },
    ],
    areaLink: { href: "/advogado-familia", label: "Direito de família: divórcio, pensão e guarda" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado de família em Lauro de Freitas.",
  },

  // ───────────────────────── Consumidor ─────────────────────────

  "consumidor-salvador": {
    title: "Advogado do Consumidor em Salvador (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado do consumidor em Salvador: cobrança indevida, nome negativado, fraude bancária, plano de saúde, voo cancelado e conta de luz. Juizado ou Justiça comum.",
    h1: "Advogado do consumidor em Salvador",
    intro:
      "Desconto que você não autorizou, nome no Serasa por dívida que não existe, plano de saúde que negou cirurgia. Em Salvador, esses casos podem ir ao Procon, ao Juizado Especial ou à vara cível, e a escolha muda o resultado.",
    sections: [
      {
        h2: "Procon, consumidor.gov.br ou Justiça",
        body:
          "A reclamação no Procon-BA ou no consumidor.gov.br resolve parte dos casos sem processo e ainda gera prova de que a empresa foi avisada. Quando há dano moral, negativação indevida ou valor alto em jogo, a ação judicial costuma ser necessária. O Código de Defesa do Consumidor permite que ela seja proposta no domicílio do consumidor (art. 101, I).",
      },
      {
        h2: "Juizado Especial Cível ou vara cível",
        body:
          "Causas de até 40 salários mínimos podem ir aos Juizados Especiais Cíveis de Salvador, sem custas no primeiro grau (Lei 9.099/1995). Casos que exigem perícia complexa, como erro médico ou defeito técnico grave, vão para as Varas de Relações de Consumo ou cíveis da comarca, no TJBA.",
      },
      {
        h2: "Casos mais comuns",
        body:
          "Empréstimo consignado ou cartão de crédito não contratado, descontos em conta e em benefício do INSS, golpe do Pix com falha de segurança do banco, negativação indevida, negativa de cobertura de plano de saúde, cobranças abusivas de energia (Neoenergia Coelba) e água (Embasa), voo cancelado ou atrasado e bagagem extraviada.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp prints, faturas, extratos, protocolos de atendimento e a consulta do Serasa ou SPC. O Dr. Gilberto Riccio (OAB/BA 46.638) avalia o caso e indica o caminho.",
      },
    ],
    faq: [
      {
        q: "Cobraram um valor que eu não devia. Recebo de volta em dobro?",
        a: "Se você pagou cobrança indevida, o CDC prevê devolução em dobro, salvo engano justificável da empresa (art. 42, parágrafo único).",
      },
      {
        q: "Preciso de advogado no Juizado?",
        a: "Em causas de até 20 salários mínimos não é obrigatório. Acima disso, até 40 salários mínimos, é obrigatório. Mesmo nas menores, o advogado ajuda a pedir o que a lei garante e a produzir a prova certa.",
      },
      {
        q: "Qual o prazo para reclamar?",
        a: "Defeito aparente: 30 dias para produto ou serviço não durável e 90 dias para durável (art. 26 do CDC). Dano causado por produto ou serviço: 5 anos (art. 27). Outros casos têm prazos próprios.",
      },
      {
        q: "Guardar protocolo de atendimento ajuda?",
        a: "Muito. O número do protocolo, a data e o nome do atendente mostram que você tentou resolver e a empresa não resolveu.",
      },
    ],
    areaLink: { href: "/advogado-consumidor", label: "Direito do consumidor: como o escritório atua" },
    whatsappText: "Olá, Dr. Gilberto. Tenho um problema de consumidor em Salvador.",
  },

  "consumidor-camacari": {
    title: "Advogado do Consumidor em Camaçari (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado do consumidor em Camaçari: consignado não contratado, cobrança indevida, negativação, plano de saúde e imóvel na planta. Ação na comarca de Camaçari.",
    h1: "Advogado do consumidor em Camaçari",
    intro:
      "Quem mora em Camaçari não precisa processar a empresa em Salvador nem em São Paulo. O Código de Defesa do Consumidor garante que a ação seja proposta aqui, na comarca de Camaçari.",
    sections: [
      {
        h2: "Processar a empresa na sua cidade",
        body:
          "Bancos, operadoras e lojas virtuais costumam ter sede em outro estado, mas o consumidor pode ajuizar no próprio domicílio (art. 101, I, do CDC). Causas de até 40 salários mínimos vão ao Juizado Especial Cível da comarca de Camaçari; as demais, às varas cíveis do Fórum de Camaçari.",
      },
      {
        h2: "Desconto em salário e em benefício",
        body:
          "Com muitos trabalhadores do polo industrial e aposentados, são frequentes os empréstimos consignados e cartões de crédito consignado (RMC) que a pessoa diz nunca ter contratado. Sem prova de contratação válida, é possível pedir o cancelamento, a devolução dos descontos, inclusive em dobro quando cabível, e indenização.",
      },
      {
        h2: "Imóvel na planta e condomínio",
        body:
          "A expansão de loteamentos e condomínios em Camaçari e na orla trouxe disputas sobre atraso na entrega de imóvel, cobrança de taxas não previstas e distrato. A Lei 13.786/2018 regula a desistência e a multa por atraso nesses contratos.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp extratos, contrato, protocolos e prints. O Dr. Gilberto Riccio (OAB/BA 46.638) avalia o caso e orienta sobre Procon, Juizado ou ação comum.",
      },
    ],
    faq: [
      {
        q: "O banco tem sede em São Paulo. Tenho que processar lá?",
        a: "Não. O consumidor pode propor a ação no próprio domicílio, em Camaçari.",
      },
      {
        q: "Apareceu um consignado no meu contracheque que não contratei. O que fazer?",
        a: "Guarde o contracheque ou o extrato do INSS, peça ao banco a cópia do contrato e procure orientação. Sem contratação válida, é possível cancelar e pedir a devolução.",
      },
      {
        q: "A construtora atrasou a entrega. Tenho direito a quê?",
        a: "Passado o prazo de tolerância de 180 dias, a Lei 13.786/2018 prevê resolução do contrato com devolução ou indenização pelo atraso, conforme o caso.",
      },
      {
        q: "Preciso de advogado no Juizado?",
        a: "Até 20 salários mínimos não é obrigatório; entre 20 e 40, é.",
      },
    ],
    areaLink: { href: "/advogado-consumidor", label: "Direito do consumidor: como o escritório atua" },
    whatsappText: "Olá, Dr. Gilberto. Tenho um problema de consumidor em Camaçari.",
  },

  "consumidor-lauro-de-freitas": {
    title: "Advogado do Consumidor em Lauro de Freitas (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado do consumidor em Lauro de Freitas: voo cancelado, bagagem extraviada, construtora, plano de saúde, fraude bancária e negativação indevida. OAB/BA 46.638.",
    h1: "Advogado do consumidor em Lauro de Freitas",
    intro:
      "Lauro de Freitas fica colada ao aeroporto de Salvador e cresceu com condomínios novos. Não por acaso, problemas com companhia aérea e construtora estão entre as queixas mais comuns de quem mora aqui.",
    sections: [
      {
        h2: "Voo cancelado, atraso e bagagem",
        body:
          "Em voo nacional, a Resolução 400/2016 da ANAC obriga a companhia a oferecer assistência material conforme o tempo de espera e opções de reacomodação ou reembolso. Se houver dano além do transtorno comum, como perda de compromisso importante ou bagagem extraviada, cabe ação de indenização. Guarde cartão de embarque, recibos e os registros feitos no balcão.",
      },
      {
        h2: "Construtora e condomínio",
        body:
          "Atraso na entrega das chaves, vícios na construção, como infiltração e rachaduras, e cobranças indevidas no distrato são discutidos com base no CDC e na Lei 13.786/2018. Defeitos de construção devem ser registrados com fotos e notificação à construtora assim que aparecem.",
      },
      {
        h2: "Onde a ação corre",
        body:
          "O consumidor pode processar no próprio domicílio (art. 101, I, do CDC). Quem mora em Lauro de Freitas ajuíza na comarca local do TJBA: no Juizado Especial Cível, para causas de até 40 salários mínimos, ou na vara cível, quando o caso exige perícia ou o valor é maior.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp contrato, comprovantes, fotos e protocolos. O Dr. Gilberto Riccio (OAB/BA 46.638) avalia o caso e indica o caminho.",
      },
    ],
    faq: [
      {
        q: "Meu voo foi cancelado. A companhia tem que me indenizar?",
        a: "Ela tem que prestar assistência e oferecer reacomodação ou reembolso. A indenização por dano moral depende de prova do prejuízo concreto, conforme a Lei 14.034/2020 alterou o Código Brasileiro de Aeronáutica.",
      },
      {
        q: "Apareceu infiltração no apartamento novo. Ainda dá tempo?",
        a: "Vícios aparentes devem ser reclamados em 90 dias; defeitos ocultos, a partir de quando aparecem. Problemas de solidez e segurança da obra têm garantia de 5 anos (art. 618 do Código Civil). Quanto antes notificar, melhor.",
      },
      {
        q: "Fui vítima de golpe e o banco não devolve. Tenho direito?",
        a: "O banco responde por falhas na segurança dos seus serviços (Súmula 479 do STJ). Cada caso depende de como o golpe ocorreu.",
      },
      {
        q: "Preciso de advogado no Juizado?",
        a: "Até 20 salários mínimos não é obrigatório; entre 20 e 40, é.",
      },
    ],
    areaLink: { href: "/advogado-consumidor", label: "Direito do consumidor: como o escritório atua" },
    whatsappText: "Olá, Dr. Gilberto. Tenho um problema de consumidor em Lauro de Freitas.",
  },

  // ───────────────────────── Feira de Santana ─────────────────────────

  "criminal-feira-de-santana": {
    title: "Advogado Criminalista em Feira de Santana (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado criminalista em Feira de Santana: flagrante em rodovia, audiência de custódia, habeas corpus e defesa na comarca de Feira de Santana. OAB/BA 46.638.",
    h1: "Advogado criminalista em Feira de Santana",
    intro:
      "Feira de Santana é entroncamento rodoviário do Nordeste, cortada pelas BR-101, BR-116 e BR-324. Boa parte dos flagrantes na cidade sai de abordagens em rodovia, transporte interestadual de carga e receptação. A família precisa agir rápido nas primeiras horas, antes da audiência de custódia.",
    sections: [
      {
        h2: "Comarca de Feira de Santana",
        body:
          "Crimes estaduais ocorridos no município são processados nas varas criminais da comarca de Feira de Santana, uma das maiores do interior da Bahia. Recursos, apelações e habeas corpus sobem ao Tribunal de Justiça da Bahia, em Salvador.",
      },
      {
        h2: "Flagrante em rodovia e Justiça Federal",
        body:
          "Abordagem da Polícia Rodoviária Federal com apreensão de arma, droga vinda de outro estado, contrabando ou moeda falsa pode levar o caso para a Justiça Federal – Subseção Judiciária de Feira de Santana. Nesses casos, a defesa muda de sistema (do PJe estadual para o PJe federal) e a prisão passa a ser revista por juiz federal. Saber onde o processo vai correr é o primeiro passo.",
      },
      {
        h2: "Audiência de custódia e liberdade provisória",
        body:
          "O preso em flagrante é apresentado a um juiz em até 24 horas (art. 310 do CPP e Resolução 213/2015 do CNJ). A defesa pode pedir relaxamento da prisão ilegal, liberdade provisória com ou sem fiança e medidas cautelares no lugar da preventiva (art. 319 do CPP). Comprovante de residência em Feira de Santana ou região e contracheque ajudam a mostrar vínculo com a comarca.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp o nome completo do preso, onde ele está e, se já houver, o número do processo ou do auto. O Dr. Gilberto Riccio (OAB/BA 46.638) consulta a situação e orienta a família.",
      },
    ],
    faq: [
      {
        q: "Fui parado pela PRF na BR-324. Meu caso é federal?",
        a: "Depende. Porte residual de droga, lesão em acidente de trânsito e receptação, em regra, ficam na Justiça Estadual. Contrabando, moeda falsa, droga vinda do exterior e crime que atinge interesse da União vão para a Justiça Federal – Subseção de Feira de Santana.",
      },
      {
        q: "Quanto tempo depois da prisão acontece a audiência de custódia?",
        a: "Até 24 horas após a prisão em flagrante, pelo art. 310 do CPP e pela Resolução 213/2015 do CNJ.",
      },
      {
        q: "A família pode contratar advogado antes de ver o preso?",
        a: "Pode. O advogado se apresenta na delegacia ou na unidade prisional, formaliza a procuração com o preso e passa a acompanhar o caso.",
      },
      {
        q: "Fiança pode ser paga ainda na delegacia?",
        a: "Para crimes com pena máxima de até 4 anos, o delegado pode arbitrar fiança (art. 322 do CPP). Nos demais, a fiança depende do juiz, em regra decidida na audiência de custódia.",
      },
    ],
    areaLink: { href: "/criminal", label: "Defesa criminal: como o escritório atua" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado criminalista em Feira de Santana.",
  },

  "previdenciario-feira-de-santana": {
    title: "Advogado Previdenciário (INSS) em Feira de Santana | Riccio Advocacia",
    metaDescription:
      "Advogado de INSS em Feira de Santana: aposentadoria, BPC/LOAS, auxílio por incapacidade e pensão por morte. Pedido no Meu INSS e ação na Subseção Federal de Feira de Santana.",
    h1: "Advogado previdenciário (INSS) em Feira de Santana",
    intro:
      "Benefício negado, perícia que não reconheceu a doença, aposentadoria calculada a menor. Em Feira de Santana, o caminho passa pelo Meu INSS e, se o INSS insistir no não, pela Justiça Federal – Subseção Judiciária de Feira de Santana, sem precisar ir até Salvador.",
    sections: [
      {
        h2: "Trabalhador do comércio e do transporte",
        body:
          "A economia da cidade gira em torno do comércio, dos serviços e do transporte rodoviário. Motorista profissional, operador do Centro Industrial do Subaé e vendedor do comércio costumam ter CNIS com vínculos quebrados, lacunas e contribuições que o INSS não reconhece. Conferir o CNIS no Meu INSS e corrigir essas falhas, com carteira de trabalho, holerites e vínculo com transportadora, é o primeiro passo antes de pedir qualquer benefício.",
      },
      {
        h2: "Aposentadoria e BPC em Feira",
        body:
          "A regra depende da data de entrada no sistema e da Reforma de 2019: aposentadoria por idade, por tempo de contribuição com pedágio, aposentadoria especial, aposentadoria da pessoa com deficiência (LC 142/2013) e BPC/LOAS para idoso a partir de 65 anos ou pessoa com deficiência de baixa renda. O BPC passa também por avaliação social, feita em agência do INSS, e exige CadÚnico atualizado.",
      },
      {
        h2: "Ação na Subseção Federal de Feira de Santana",
        body:
          "Negado o benefício, a ação é proposta na Justiça Federal – Subseção Judiciária de Feira de Santana, da Seção Judiciária da Bahia. Causas de até 60 salários mínimos tramitam no Juizado Especial Federal, sem custas no primeiro grau. Recursos vão à Turma Recursal e, nas ações comuns, ao TRF da 1ª Região.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp a carta de indeferimento, o CNIS (ambos baixados no Meu INSS) e laudos. O Dr. Gilberto Riccio (OAB/BA 46.638) avalia se cabe recurso administrativo, novo pedido ou ação.",
      },
    ],
    faq: [
      {
        q: "Preciso ir até Salvador para processar o INSS?",
        a: "Não. Quem mora em Feira de Santana ou cidades da região ajuíza na Subseção Federal de Feira de Santana. O processo é eletrônico.",
      },
      {
        q: "Minha carteira tem muitas anotações soltas. O INSS vai aceitar?",
        a: "A carteira de trabalho é início de prova material. Com os holerites, PPP, FGTS e declarações da empresa, dá para reconstruir o tempo que o INSS não registrou.",
      },
      {
        q: "Qual o prazo para recorrer do indeferimento?",
        a: "30 dias para recurso administrativo ao Conselho de Recursos da Previdência Social. Mesmo perdido esse prazo, ainda cabe nova via ou ação judicial.",
      },
      {
        q: "O INSS paga atrasados?",
        a: "Se a Justiça reconhecer o direito, os valores são devidos desde a data do requerimento administrativo, respeitada a prescrição de 5 anos, por RPV ou precatório.",
      },
    ],
    areaLink: { href: "/prev", label: "Direito previdenciário: benefícios e calculadoras" },
    whatsappText: "Olá, Dr. Gilberto. Tive um problema com o INSS e moro em Feira de Santana.",
  },

  "trabalhista-feira-de-santana": {
    title: "Advogado Trabalhista em Feira de Santana (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado trabalhista em Feira de Santana: comércio, transporte rodoviário, motoristas, horas extras e vínculo. Ações na Justiça do Trabalho de Feira de Santana (TRT5).",
    h1: "Advogado trabalhista em Feira de Santana",
    intro:
      "Feira de Santana vive do comércio, da logística e do transporte rodoviário. As ações trabalhistas mais comuns na cidade refletem isso: motorista com horas extras não pagas, vendedor sem carteira assinada, operador do Centro Industrial do Subaé com adicionais negados.",
    sections: [
      {
        h2: "Vara do Trabalho de Feira de Santana",
        body:
          "Quem trabalhou na cidade ajuíza a ação na Justiça do Trabalho em Feira de Santana, que integra o TRT da 5ª Região. Recursos são julgados pelo TRT5, em Salvador. Todo o trâmite é eletrônico, pelo PJe.",
      },
      {
        h2: "Motorista profissional e transporte",
        body:
          "A Lei 13.103/2015 regula a jornada do motorista profissional empregado: controle de jornada, tempo de espera, horas extras e intervalos. Quem roda em transporte urbano, interestadual de passageiros ou de carga a partir de Feira pode cobrar horas extras sonegadas, descanso semanal remunerado dobrado quando trabalhado em domingo sem folga compensatória e reflexos em férias, 13º e FGTS.",
      },
      {
        h2: "Comércio e Centro Industrial do Subaé",
        body:
          "No comércio, pedidos frequentes são de horas extras em jornada de abertura e fechamento, trabalho em feriados e acúmulo de função. Em indústrias do Centro Industrial do Subaé, aparecem insalubridade, periculosidade, turnos de revezamento com jornada de 6 horas (art. 7º, XIV, da Constituição) e vínculo com empresa terceirizada, caso em que a tomadora do serviço responde subsidiariamente (Súmula 331 do TST).",
      },
      {
        h2: "Atendimento e prazos",
        body:
          "A ação deve ser proposta em até 2 anos depois do fim do contrato, alcançando os direitos dos últimos 5 anos (art. 7º, XXIX, da Constituição). Envie pelo WhatsApp carteira, contracheques, termo de rescisão, cartões de ponto e conversas com a empresa.",
      },
    ],
    faq: [
      {
        q: "Trabalhei por terceirizada dentro de uma loja grande. Posso processar a loja?",
        a: "Sim. A empresa que tomou o serviço responde de forma subsidiária pelas verbas não pagas pela terceirizada (Súmula 331 do TST e Lei 6.019/1974).",
      },
      {
        q: "Motorista tem direito a hora extra?",
        a: "Sim. A Lei 13.103/2015 prevê jornada controlada, tempo de espera remunerado de forma específica e horas extras conforme a jornada efetiva.",
      },
      {
        q: "Conversas de WhatsApp com o chefe valem como prova?",
        a: "Sim. Guarde o arquivo original. Tira dúvida sobre jornada, acerto de função e cobrança informal.",
      },
      {
        q: "Qual o prazo para entrar com a ação?",
        a: "Até 2 anos após o fim do contrato, cobrando os últimos 5 anos.",
      },
    ],
    areaLink: { href: "/advogado-trabalhista-online", label: "Advogado trabalhista online: como funciona" },
    whatsappText: "Olá, Dr. Gilberto. Tenho uma questão trabalhista em Feira de Santana.",
  },

  "familia-feira-de-santana": {
    title: "Advogado de Família em Feira de Santana (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado de família em Feira de Santana: divórcio em cartório ou na Justiça, pensão alimentícia, guarda, união estável e inventário. Comarca de Feira de Santana.",
    h1: "Advogado de família em Feira de Santana",
    intro:
      "Divórcio, pensão e guarda em Feira de Santana correm nas Varas de Família da comarca ou, havendo acordo, em cartório de notas. Cada caminho tem um prazo e uma documentação diferente.",
    sections: [
      {
        h2: "Divórcio em cartório ou na Justiça",
        body:
          "Com acordo sobre todos os pontos e todos assistidos por advogado, o divórcio pode ser feito por escritura pública em cartório de notas (Lei 11.441/2007). Sem acordo, ou com filhos cuja guarda e pensão ainda precisam ser decididas, o caminho é a Vara de Família de Feira de Santana.",
      },
      {
        h2: "Pensão de quem trabalha no comércio ou em transportadora",
        body:
          "Quem paga a pensão tem CTPS assinada em muitas das famílias atendidas na cidade. Aí costuma ser mais seguro pedir desconto direto na folha, feito pela empresa. PLR, 13º e horas extras também entram na base, se assim for definido no acordo ou pelo juiz. Em caso de atraso, cabe prisão civil das 3 últimas parcelas (art. 528 do CPC) ou penhora de bens e salário.",
      },
      {
        h2: "Guarda, convivência e mudança de cidade",
        body:
          "A guarda compartilhada é a regra (art. 1.584 do Código Civil), mesmo quando os pais não se entendem. O que se decide é a residência da criança e o calendário de convivência, pelo melhor interesse do filho. Quando um dos pais quer mudar com o filho para outra cidade, isso precisa ser autorizado pelo juiz ou acertado no acordo.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp um resumo do caso, a certidão de casamento ou de nascimento dos filhos e o que houver de bens. O Dr. Gilberto Riccio (OAB/BA 46.638) orienta o caminho mais rápido.",
      },
    ],
    faq: [
      {
        q: "Posso fazer divórcio em cartório tendo filho menor?",
        a: "Depende. As questões de guarda e pensão do filho menor precisam de solução judicial prévia. Com elas resolvidas, alguns cartórios aceitam a escritura. O advogado verifica o seu caso.",
      },
      {
        q: "Qual o valor da pensão alimentícia?",
        a: "Não há percentual fixo em lei. O juiz considera a necessidade do filho e a renda de quem paga. 30% é um número usado com frequência, não uma regra.",
      },
      {
        q: "O pai parou de pagar a pensão. Pode ser preso?",
        a: "Sim. Pela dívida das 3 últimas parcelas e das que vencerem no processo, cabe prisão civil de 1 a 3 meses em regime fechado (art. 528 do CPC).",
      },
      {
        q: "Preciso de advogado para o divórcio em cartório?",
        a: "Sim. A escritura exige assistência de advogado ou defensor público.",
      },
    ],
    areaLink: { href: "/advogado-familia", label: "Direito de família: divórcio, pensão e guarda" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado de família em Feira de Santana.",
  },

  // ───────────────────────── Vitória da Conquista ─────────────────────────

  "criminal-vitoria-da-conquista": {
    title: "Advogado Criminalista em Vitória da Conquista (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado criminalista em Vitória da Conquista: flagrante, audiência de custódia, habeas corpus e defesa na comarca de Vitória da Conquista (TJBA). OAB/BA 46.638.",
    h1: "Advogado criminalista em Vitória da Conquista",
    intro:
      "Vitória da Conquista é o principal centro do sudoeste baiano, polo regional de saúde e de ensino superior. Quando alguém é preso aqui, a família costuma vir de cidades vizinhas e precisa de uma orientação clara sobre a comarca, o fórum e as primeiras horas.",
    sections: [
      {
        h2: "Comarca de Vitória da Conquista",
        body:
          "Crimes estaduais ocorridos no município são processados nas varas criminais da comarca de Vitória da Conquista, uma das maiores do interior do estado. Recursos, apelações e habeas corpus seguem para o Tribunal de Justiça da Bahia, em Salvador.",
      },
      {
        h2: "Prisão em flagrante nas primeiras 24 horas",
        body:
          "O preso é apresentado a um juiz em até 24 horas na audiência de custódia (art. 310 do CPP). A defesa pode pedir o relaxamento da prisão ilegal, a liberdade provisória com ou sem fiança e medidas cautelares no lugar da preventiva (art. 319 do CPP). Comprovante de residência em Conquista ou região, matrícula em universidade e carteira de trabalho ajudam a mostrar vínculo.",
      },
      {
        h2: "Justiça Federal – Subseção de Vitória da Conquista",
        body:
          "Quando o fato atinge interesse da União – fraude contra o INSS ou a Caixa, contrabando, crime ambiental em unidade de conservação federal, falsificação de documento federal – o caso vai para a Justiça Federal – Subseção Judiciária de Vitória da Conquista, da Seção Judiciária da Bahia, e não para o fórum estadual.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp o nome completo do preso, onde ele está e, se já houver, o número do processo ou do auto. O Dr. Gilberto Riccio (OAB/BA 46.638) consulta a situação e orienta a família.",
      },
    ],
    faq: [
      {
        q: "Meu familiar foi preso em cidade da região e virou processo em Conquista. Isso é normal?",
        a: "Pode acontecer. A competência criminal é do lugar da consumação do crime (art. 70 do CPP). Cidades menores da região podem estar subordinadas a Conquista para determinados atos, mas o processo costuma correr na comarca do local do fato.",
      },
      {
        q: "A família pode contratar advogado antes de falar com o preso?",
        a: "Pode. O advogado se apresenta na unidade prisional, formaliza a procuração com o preso e passa a acompanhar o caso.",
      },
      {
        q: "Habeas corpus tem prazo?",
        a: "Não. O habeas corpus cabe a qualquer tempo, sempre que houver prisão ilegal ou ameaça concreta à liberdade.",
      },
      {
        q: "Fiança pode ser paga na delegacia?",
        a: "Para crimes com pena máxima de até 4 anos, o delegado pode arbitrar fiança (art. 322 do CPP). Nos demais casos, só o juiz.",
      },
    ],
    areaLink: { href: "/criminal", label: "Defesa criminal: como o escritório atua" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado criminalista em Vitória da Conquista.",
  },

  "previdenciario-vitoria-da-conquista": {
    title: "Advogado Previdenciário (INSS) em Vitória da Conquista | Riccio Advocacia",
    metaDescription:
      "Advogado de INSS em Vitória da Conquista: aposentadoria especial da saúde, BPC/LOAS, auxílio por incapacidade e pensão por morte. Subseção Federal local.",
    h1: "Advogado previdenciário (INSS) em Vitória da Conquista",
    intro:
      "Vitória da Conquista é polo regional de saúde e de ensino superior. Muitos trabalhadores aqui têm tempo especial que o INSS costuma não reconhecer de primeira: enfermagem, técnicos de laboratório, professores universitários, motoristas.",
    sections: [
      {
        h2: "Tempo especial em hospital e laboratório",
        body:
          "Enfermeiros, técnicos de enfermagem, farmacêuticos de hospital e trabalhadores de laboratórios podem ter contato com agentes biológicos. Com PPP (Perfil Profissiográfico Previdenciário) emitido pelo empregador descrevendo a exposição, é possível pedir aposentadoria especial ou converter o tempo especial em comum para períodos até 13/11/2019. PPP incompleto ou sem metodologia é uma das causas mais comuns de indeferimento.",
      },
      {
        h2: "Professor e segurado especial da zona rural",
        body:
          "Professor com tempo de magistério tem regra própria de aposentadoria (art. 201, §8º, da Constituição). Trabalhador rural das cidades da região em volta de Conquista, se segurado especial, se aposenta por idade sem exigência de contribuição formal, bastando comprovar a atividade rural pelo tempo exigido (Lei 8.213/1991, art. 48).",
      },
      {
        h2: "Ação na Subseção Federal de Vitória da Conquista",
        body:
          "Negado o benefício, a ação vai para a Justiça Federal – Subseção Judiciária de Vitória da Conquista. Causas de até 60 salários mínimos são do Juizado Especial Federal, sem custas no primeiro grau. Recursos vão à Turma Recursal e, nas ações comuns, ao TRF da 1ª Região.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp a carta de indeferimento, o CNIS, laudos e, se houver, o PPP. O Dr. Gilberto Riccio (OAB/BA 46.638) analisa se cabe recurso, novo pedido ou ação judicial.",
      },
    ],
    faq: [
      {
        q: "Enfermeiro tem aposentadoria especial?",
        a: "Pode ter, quando há exposição habitual a agentes biológicos, comprovada por PPP e LTCAT. Cada caso depende da função e do setor onde o trabalho era feito.",
      },
      {
        q: "O hospital se recusa a entregar o PPP. O que fazer?",
        a: "A empresa é obrigada a fornecer o PPP no desligamento. A recusa pode ser cobrada judicialmente, e a prova pode ser suprida por perícia e por documentos de segurança do trabalho.",
      },
      {
        q: "Trabalho na roça sem contribuir. Posso me aposentar?",
        a: "Sim, como segurado especial, se comprovar a atividade rural pelo tempo exigido, com documentos como notas de produtor, contrato de arrendamento, filiação a sindicato rural e testemunhas.",
      },
      {
        q: "Qual o prazo para pedir revisão de aposentadoria?",
        a: "10 anos contados do mês seguinte ao primeiro pagamento (art. 103 da Lei 8.213/1991).",
      },
    ],
    areaLink: { href: "/prev", label: "Direito previdenciário: benefícios e calculadoras" },
    whatsappText: "Olá, Dr. Gilberto. Tenho um problema com o INSS e moro em Vitória da Conquista.",
  },

  "trabalhista-vitoria-da-conquista": {
    title: "Advogado Trabalhista em Vitória da Conquista (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado trabalhista em Vitória da Conquista: hospitais, universidades, insalubridade, jornada de enfermagem e professor. Vara do Trabalho de Vitória da Conquista (TRT5).",
    h1: "Advogado trabalhista em Vitória da Conquista",
    intro:
      "Hospitais privados, universidades, clínicas e indústrias emprestam à cidade um perfil de trabalhador bem específico. Enfermagem com jornada de 12×36 não paga direito, professor com acúmulo de função e técnico de laboratório sem adicional estão entre os pedidos mais frequentes na Vara do Trabalho local.",
    sections: [
      {
        h2: "Vara do Trabalho de Vitória da Conquista",
        body:
          "Quem trabalhou no município ajuíza na Justiça do Trabalho em Vitória da Conquista, que integra o TRT da 5ª Região. Recursos são julgados pelo TRT5, em Salvador. O processo é eletrônico, pelo PJe.",
      },
      {
        h2: "Enfermagem: jornada e insalubridade",
        body:
          "A Lei 7.498/1986 e os regulamentos do COFEN disciplinam o exercício da enfermagem; as 30 horas da Lei 13.819/2019 foram vetadas, então a jornada segue a regra geral e as convenções coletivas. Escala 12×36, muito usada em hospital, precisa de previsão em acordo ou convenção (art. 59-A da CLT). Contato habitual com agentes biológicos pode gerar adicional de insalubridade de 20% do salário mínimo, apurado por perícia.",
      },
      {
        h2: "Professor e técnico administrativo em universidade",
        body:
          "Professor tem regras próprias (arts. 317 a 324 da CLT): hora-aula, reajuste anual, repouso sobre horas-aula. Em instituições privadas de ensino superior, pedidos comuns são de descumprimento da convenção coletiva, horas-atividade, reajustes e direitos de desligamento. Técnico administrativo, celetista, segue as regras gerais da CLT e tem direito a adicionais, horas extras e verbas rescisórias corretas.",
      },
      {
        h2: "Atendimento e prazos",
        body:
          "A ação deve ser proposta em até 2 anos depois do fim do contrato, alcançando os direitos dos últimos 5 anos (art. 7º, XXIX, da Constituição). Envie pelo WhatsApp carteira, contracheques, escalas, convenção coletiva aplicável e termo de rescisão.",
      },
    ],
    faq: [
      {
        q: "Enfermeiro tem adicional de insalubridade garantido?",
        a: "Não automático. O direito depende de laudo pericial que reconheça a exposição habitual a agentes biológicos em determinada função e setor.",
      },
      {
        q: "Escala 12×36 pode ser imposta pela empresa?",
        a: "Não. A escala precisa de previsão em acordo ou convenção coletiva (art. 59-A da CLT) ou de acordo escrito, conforme o caso.",
      },
      {
        q: "Professor universitário tem direito a reajuste anual?",
        a: "Sim, nos termos da convenção coletiva da categoria. Reajustes aplicados sobre salário-base impactam a hora-aula.",
      },
      {
        q: "Qual o prazo para entrar com a ação?",
        a: "Até 2 anos após o fim do contrato, cobrando os últimos 5 anos.",
      },
    ],
    areaLink: { href: "/advogado-trabalhista-online", label: "Advogado trabalhista online: como funciona" },
    whatsappText: "Olá, Dr. Gilberto. Tenho uma questão trabalhista em Vitória da Conquista.",
  },

  "familia-vitoria-da-conquista": {
    title: "Advogado de Família em Vitória da Conquista (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado de família em Vitória da Conquista: divórcio, pensão alimentícia, guarda, união estável e partilha. Varas de Família da comarca de Vitória da Conquista (TJBA).",
    h1: "Advogado de família em Vitória da Conquista",
    intro:
      "A cidade concentra universidades, hospitais e um fluxo grande de estudantes e profissionais que vêm de outras partes do sudoeste. Isso gera um desenho específico de causas de família: pensão para filho estudante universitário, união estável de quem veio estudar, guarda com cidades de origem diferentes.",
    sections: [
      {
        h2: "Varas de Família da comarca",
        body:
          "Sem acordo, divórcio, pensão e guarda correm nas Varas de Família da comarca de Vitória da Conquista. Com acordo e assistência de advogado, o divórcio pode ser feito por escritura em cartório de notas (Lei 11.441/2007).",
      },
      {
        h2: "Pensão para filho universitário",
        body:
          "A obrigação de prestar alimentos continua enquanto o filho estudante não tem condição de se manter, em regra até terminar graduação, respeitado o limite de idade e as circunstâncias do caso. O STJ vem admitindo a continuidade além dos 18 anos quando há necessidade comprovada e possibilidade de quem paga.",
      },
      {
        h2: "Guarda quando um pai mora em outra cidade",
        body:
          "A guarda compartilhada é a regra (art. 1.584 do Código Civil) mesmo quando os pais moram em cidades diferentes. O que se define é a residência base da criança e o calendário de convivência, pelo melhor interesse do filho. Mudança de cidade com o filho precisa de autorização do outro genitor ou do juiz.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp um resumo do caso, a certidão de casamento ou de nascimento dos filhos e o que houver de bens. O Dr. Gilberto Riccio (OAB/BA 46.638) orienta o caminho mais rápido.",
      },
    ],
    faq: [
      {
        q: "Filho fez 18 anos. A pensão acaba automaticamente?",
        a: "Não. A pensão continua enquanto houver necessidade e possibilidade, especialmente se o filho ainda estuda. O fim da obrigação precisa ser requerido ao juiz, com contraditório.",
      },
      {
        q: "Posso pedir pensão em Conquista se o pai mora em outra cidade?",
        a: "Pode. A ação de alimentos corre, em regra, no domicílio de quem pede a pensão (art. 53, II, do CPC).",
      },
      {
        q: "União estável sem documento pode ser reconhecida?",
        a: "Pode. A união é reconhecida por prova da convivência pública, contínua e duradoura com objetivo de constituir família (art. 1.723 do Código Civil), em cartório ou judicialmente.",
      },
      {
        q: "Preciso de advogado para o divórcio em cartório?",
        a: "Sim. A escritura exige assistência de advogado ou defensor público.",
      },
    ],
    areaLink: { href: "/advogado-familia", label: "Direito de família: divórcio, pensão e guarda" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado de família em Vitória da Conquista.",
  },

  // ───────────────────────── Ilhéus ─────────────────────────

  "criminal-ilheus": {
    title: "Advogado Criminalista em Ilhéus (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado criminalista em Ilhéus: flagrante, audiência de custódia, habeas corpus e defesa na comarca de Ilhéus (TJBA). OAB/BA 46.638.",
    h1: "Advogado criminalista em Ilhéus",
    intro:
      "Ilhéus reúne porto, aeroporto e uma orla extensa. Isso gera um perfil próprio de ocorrências: flagrantes em alta temporada, delitos ligados à orla, crimes de trânsito na BR-101 e, de vez em quando, casos de competência federal ligados a mercadoria do porto.",
    sections: [
      {
        h2: "Comarca de Ilhéus",
        body:
          "Crimes estaduais ocorridos no município são processados nas varas criminais da comarca de Ilhéus. Ilhéus e Itabuna são comarcas distintas, cada uma com seu fórum, mesmo sendo cidades próximas. Recursos, apelações e habeas corpus sobem ao TJBA, em Salvador.",
      },
      {
        h2: "Audiência de custódia e liberdade provisória",
        body:
          "O preso em flagrante é apresentado a um juiz em até 24 horas (art. 310 do CPP). Nessa audiência a defesa discute relaxamento da prisão ilegal, liberdade provisória com ou sem fiança e medidas cautelares no lugar da preventiva (art. 319 do CPP). Comprovante de residência em Ilhéus ou região e trabalho reforçam o vínculo com a comarca.",
      },
      {
        h2: "Quando o caso vira federal",
        body:
          "Mercadoria vinda por via marítima com indício de contrabando, tráfico internacional, crime ambiental em unidade de conservação federal ou fraude contra a União vão para a Justiça Federal – Subseção Judiciária de Ilhéus, da Seção Judiciária da Bahia. Isso muda a delegacia, o sistema de processo e os pedidos de liberdade.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp o nome completo do preso, onde ele está e, se já houver, o número do processo ou do auto. O Dr. Gilberto Riccio (OAB/BA 46.638) consulta a situação e orienta a família.",
      },
    ],
    faq: [
      {
        q: "Meu familiar foi preso em Itabuna. Responde em Ilhéus?",
        a: "Não. São comarcas distintas. Crimes ocorridos em Itabuna são processados na comarca de Itabuna.",
      },
      {
        q: "Qual o prazo para habeas corpus?",
        a: "Não há prazo. Cabe a qualquer tempo, sempre que houver prisão ou ameaça concreta de prisão ilegal.",
      },
      {
        q: "Delegado pode arbitrar fiança?",
        a: "Pode, para crimes com pena máxima de até 4 anos (art. 322 do CPP). Nos demais casos, só o juiz.",
      },
      {
        q: "A família pode contratar advogado antes de falar com o preso?",
        a: "Pode. O advogado se apresenta ao preso e formaliza a procuração. O primeiro contato pode ser pelo WhatsApp.",
      },
    ],
    areaLink: { href: "/criminal", label: "Defesa criminal: como o escritório atua" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado criminalista em Ilhéus.",
  },

  "previdenciario-ilheus": {
    title: "Advogado Previdenciário (INSS) em Ilhéus | Riccio Advocacia",
    metaDescription:
      "Advogado de INSS em Ilhéus: aposentadoria rural do cacau, BPC/LOAS, pescador artesanal e pensão por morte. Subseção Federal de Ilhéus.",
    h1: "Advogado previdenciário (INSS) em Ilhéus",
    intro:
      "A economia de Ilhéus mistura cacau, turismo, pesca artesanal e serviço público municipal. Isso dá ao INSS da região um recorte bem particular, com muitos pedidos ligados a trabalhador rural, segurado especial e doença ocupacional em hotelaria.",
    sections: [
      {
        h2: "Trabalhador rural do cacau e segurado especial",
        body:
          "Quem trabalhou na lavoura cacaueira em regime de economia familiar, sem carteira, pode se aposentar por idade como segurado especial (art. 48, §1º, da Lei 8.213/1991), sem contribuição formal, comprovando a atividade rural pelo tempo exigido. Serve como prova notas de produtor, contratos de parceria, declaração do sindicato rural, registros do INCRA e testemunhas. Vassoura-de-bruxa, meeiros e empreiteiros do cacau têm histórico complexo e vale reconstruir com cuidado.",
      },
      {
        h2: "Pescador artesanal",
        body:
          "O pescador artesanal pode ser segurado especial, com direito a aposentadoria por idade (60 anos homem, 55 mulher), auxílio por incapacidade temporária, salário-maternidade e seguro-defeso. O registro no RGP (Registro Geral da Pesca) e a declaração de colônia de pescadores são provas importantes, mas não as únicas.",
      },
      {
        h2: "Ação na Subseção Federal de Ilhéus",
        body:
          "Negado o benefício, a ação vai para a Justiça Federal – Subseção Judiciária de Ilhéus, da Seção Judiciária da Bahia. Causas de até 60 salários mínimos tramitam no Juizado Especial Federal, sem custas no primeiro grau. Recursos vão à Turma Recursal e, nas ações comuns, ao TRF da 1ª Região.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp a carta do INSS, o CNIS e os documentos que mostram a atividade rural ou pesqueira. O Dr. Gilberto Riccio (OAB/BA 46.638) avalia o caso.",
      },
    ],
    faq: [
      {
        q: "Trabalhei a vida toda na roça do cacau sem assinar carteira. Posso aposentar?",
        a: "Pode, como segurado especial, por idade, comprovando a atividade rural pelo tempo exigido com documentos e testemunhas.",
      },
      {
        q: "Pescador artesanal recebe seguro-defeso?",
        a: "Pode receber, quando há período de defeso definido para a espécie, atividade exclusiva na pesca artesanal e cumprimento dos requisitos do RGP.",
      },
      {
        q: "O INSS exige o PPP de hotel. A empresa pode se recusar?",
        a: "Não. A empresa é obrigada a fornecer o PPP ao trabalhador no desligamento. A recusa pode ser cobrada judicialmente.",
      },
      {
        q: "Qual o prazo para recurso administrativo?",
        a: "30 dias para recurso ao Conselho de Recursos da Previdência Social. Mesmo passado esse prazo, ainda cabe novo pedido ou ação judicial.",
      },
    ],
    areaLink: { href: "/prev", label: "Direito previdenciário: benefícios e calculadoras" },
    whatsappText: "Olá, Dr. Gilberto. Tenho um problema com o INSS e moro em Ilhéus.",
  },

  "trabalhista-ilheus": {
    title: "Advogado Trabalhista em Ilhéus (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado trabalhista em Ilhéus: lavoura do cacau, hotelaria, pesca, trabalhador rural e servidor celetista. Vara do Trabalho de Ilhéus (TRT5).",
    h1: "Advogado trabalhista em Ilhéus",
    intro:
      "Em Ilhéus convivem a lavoura do cacau, o turismo e o serviço público municipal. Cada um desses mundos puxa um tipo de ação trabalhista diferente: rurícola com direitos sonegados, camareira sem adicionais, trabalhador sazonal da alta temporada.",
    sections: [
      {
        h2: "Vara do Trabalho de Ilhéus",
        body:
          "Quem trabalhou no município ajuíza na Justiça do Trabalho em Ilhéus, que integra o TRT da 5ª Região. Recursos vão ao TRT5, em Salvador. O processo é eletrônico, pelo PJe.",
      },
      {
        h2: "Trabalhador rural do cacau",
        body:
          "A Lei 5.889/1973 regula o trabalho rural. Quem trabalha na colheita e no pós-colheita do cacau tem direito a carteira assinada, 13º, férias com 1/3, FGTS e, provada a exposição a agentes químicos ou biológicos, adicional de insalubridade. Empreiteiros, meeiros e diaristas da roça costumam ser contratados fora da CLT, e isso pode ser revertido na Justiça se ficar demonstrada a relação de emprego (arts. 2º e 3º da CLT).",
      },
      {
        h2: "Hotelaria, pesca e serviços municipais celetistas",
        body:
          "Na hotelaria e no turismo, pedidos frequentes são de horas extras, descanso semanal remunerado dobrado, trabalho em feriados e gorjeta integrada ao salário, conforme a Lei 13.419/2017. Pescador embarcado tem regime próprio pela Lei 11.959/2009. Empregado celetista de autarquia ou fundação municipal também tem contrato regido pela CLT e ação na Justiça do Trabalho.",
      },
      {
        h2: "Atendimento e prazos",
        body:
          "A ação deve ser proposta em até 2 anos depois do fim do contrato, alcançando os direitos dos últimos 5 anos (art. 7º, XXIX, da Constituição). Envie pelo WhatsApp carteira, holerites, termo de rescisão e conversas com o empregador.",
      },
    ],
    faq: [
      {
        q: "Trabalhei na roça sem carteira. Posso cobrar?",
        a: "Sim, provando a relação de emprego pelo CPC trabalhista: testemunhas, conversas, pagamentos. A Justiça reconhece o vínculo e as verbas.",
      },
      {
        q: "Gorjeta é salário?",
        a: "A Lei 13.419/2017 trata a gorjeta como receita do empregado, com rateio e integração ao salário conforme critérios da convenção coletiva.",
      },
      {
        q: "Trabalho sazonal no verão dá direitos integrais?",
        a: "Sim. Contrato por prazo determinado tem férias proporcionais, 13º proporcional, FGTS e demais direitos, observadas as regras do tipo de contrato.",
      },
      {
        q: "Qual o prazo para entrar com a ação?",
        a: "Até 2 anos após o fim do contrato, cobrando os últimos 5 anos.",
      },
    ],
    areaLink: { href: "/advogado-trabalhista-online", label: "Advogado trabalhista online: como funciona" },
    whatsappText: "Olá, Dr. Gilberto. Tenho uma questão trabalhista em Ilhéus.",
  },

  "familia-ilheus": {
    title: "Advogado de Família em Ilhéus (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado de família em Ilhéus: inventário com terras do cacau, divórcio, pensão, guarda e união estável. Varas de Família da comarca de Ilhéus (TJBA).",
    h1: "Advogado de família em Ilhéus",
    intro:
      "Em Ilhéus, muita família herda imóvel rural do cacau, pousada na orla ou casa antiga no centro. Isso traz ao direito de família um tempero próprio: inventário com terras, partilha com imóveis rurais e partilha de imóvel usado no turismo.",
    sections: [
      {
        h2: "Inventário com imóveis rurais",
        body:
          "Imóvel rural no inventário tem particularidades: precisa de CCIR em dia, ITR quitado e, para registro, do georreferenciamento quando exigido pelo INCRA. Terras recebidas de herança em roça de cacau costumam estar com cadastro desatualizado, e isso trava a partilha e a venda. Resolver primeiro a documentação acelera o processo.",
      },
      {
        h2: "Divórcio e partilha de pousada ou casa de temporada",
        body:
          "Imóvel usado no turismo pode ser bem particular, bem comum ou bem da sociedade de fato entre companheiros, dependendo da data de aquisição e do regime. Rendimentos de aluguel de temporada entram, em regra, como fruto comum enquanto não há partilha, e precisam ser prestados contas no processo.",
      },
      {
        h2: "Pensão, guarda e união estável",
        body:
          "A guarda compartilhada é a regra (art. 1.584 do Código Civil). A pensão é fixada pelo binômio necessidade e possibilidade. A união estável é reconhecida por prova da convivência pública, contínua e duradoura com objetivo de constituir família (art. 1.723 do Código Civil), e pode ser pedida em vida ou após a morte do companheiro para fins sucessórios e previdenciários.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp as certidões de casamento ou de nascimento, matrículas de imóveis e documentos do ITR ou CCIR. O Dr. Gilberto Riccio (OAB/BA 46.638) orienta o caminho.",
      },
    ],
    faq: [
      {
        q: "A terra do cacau está no nome do pai falecido. Dá para vender antes de fazer o inventário?",
        a: "Não. A venda só é feita depois de aberto o inventário e com autorização judicial, salvo nos casos de alvará. O comprador exige matrícula atualizada em nome do herdeiro.",
      },
      {
        q: "Posso fazer divórcio em cartório tendo pousada em nome dos dois?",
        a: "Pode, havendo acordo sobre a partilha e sem filhos menores ou incapazes com questões pendentes. A escritura também faz a partilha.",
      },
      {
        q: "Aluguel de temporada entra na partilha?",
        a: "Os rendimentos recebidos até a partilha, em regra, são fruto comum e devem ser prestados contas no processo.",
      },
      {
        q: "Preciso de advogado para união estável em cartório?",
        a: "Sim. A escritura exige assistência de advogado ou defensor público.",
      },
    ],
    areaLink: { href: "/advogado-familia", label: "Direito de família: divórcio, pensão e guarda" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado de família em Ilhéus.",
  },

  // ───────────────────────── Itabuna ─────────────────────────

  "criminal-itabuna": {
    title: "Advogado Criminalista em Itabuna (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado criminalista em Itabuna: flagrante, audiência de custódia, habeas corpus e defesa na comarca de Itabuna (TJBA). OAB/BA 46.638.",
    h1: "Advogado criminalista em Itabuna",
    intro:
      "Itabuna é centro regional do sul da Bahia, colada a Ilhéus mas em comarca própria. A família que mora na região precisa saber onde o processo vai correr e qual a delegacia certa para buscar informação nas primeiras horas.",
    sections: [
      {
        h2: "Comarca de Itabuna",
        body:
          "Crimes estaduais ocorridos em Itabuna são processados nas varas criminais da comarca de Itabuna, distinta da comarca de Ilhéus. Recursos, apelações e habeas corpus seguem para o TJBA, em Salvador. Errar a comarca atrasa pedido de liberdade e transferência.",
      },
      {
        h2: "Primeiras 24 horas: custódia e medidas cautelares",
        body:
          "A audiência de custódia acontece em até 24 horas após a prisão em flagrante (art. 310 do CPP e Resolução 213/2015 do CNJ). A defesa pode pedir relaxamento da prisão ilegal, liberdade provisória com ou sem fiança e medidas cautelares no lugar da preventiva (art. 319 do CPP). Comprovante de residência em Itabuna ou região e trabalho fortalecem o vínculo com a comarca.",
      },
      {
        h2: "Quando o caso é federal",
        body:
          "Fatos que atingem interesse da União – contrabando, tráfico vindo do exterior, fraude contra o INSS, crime ambiental em unidade de conservação federal – vão para a Justiça Federal – Subseção Judiciária de Itabuna, da Seção Judiciária da Bahia. Isso muda sistema, delegacia e o juiz competente para os pedidos de liberdade.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp o nome completo do preso, onde ele está e, se já houver, o número do processo ou do auto. O Dr. Gilberto Riccio (OAB/BA 46.638) consulta a situação e orienta a família.",
      },
    ],
    faq: [
      {
        q: "Itabuna e Ilhéus respondem no mesmo fórum?",
        a: "Não. São comarcas distintas, cada uma com seu fórum. Crimes ocorridos em Itabuna correm na comarca de Itabuna.",
      },
      {
        q: "A família pode contratar advogado antes de ver o preso?",
        a: "Pode. O advogado se apresenta à delegacia ou à unidade prisional, formaliza a procuração com o preso e passa a acompanhar o caso.",
      },
      {
        q: "Qual o prazo para habeas corpus?",
        a: "Não há prazo. Cabe sempre que houver prisão ou ameaça de prisão ilegal.",
      },
      {
        q: "Fiança pode ser paga na delegacia?",
        a: "Para crimes com pena máxima de até 4 anos, o delegado pode arbitrar fiança (art. 322 do CPP). Nos demais casos, só o juiz.",
      },
    ],
    areaLink: { href: "/criminal", label: "Defesa criminal: como o escritório atua" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado criminalista em Itabuna.",
  },

  "previdenciario-itabuna": {
    title: "Advogado Previdenciário (INSS) em Itabuna | Riccio Advocacia",
    metaDescription:
      "Advogado de INSS em Itabuna: aposentadoria rural do cacau, BPC/LOAS, auxílio por incapacidade e pensão por morte. Subseção Federal de Itabuna.",
    h1: "Advogado previdenciário (INSS) em Itabuna",
    intro:
      "Itabuna atende a uma região que viveu em torno do cacau e hoje mistura comércio, saúde e serviços. Isso gera muitas ações no INSS envolvendo trabalhador rural, segurado especial e doenças ocupacionais de quem passou décadas na roça.",
    sections: [
      {
        h2: "Aposentadoria rural e segurado especial",
        body:
          "O trabalhador rural em regime de economia familiar pode se aposentar por idade como segurado especial (art. 48 da Lei 8.213/1991), sem contribuição formal, comprovando a atividade pelo tempo exigido com notas de produtor, contratos de parceria, declaração do sindicato rural, registros do INCRA e testemunhas. Tempo de empreiteira do cacau, meação e diária na colheita pode e deve ser aproveitado.",
      },
      {
        h2: "Incapacidade e BPC",
        body:
          "Auxílio por incapacidade temporária, aposentadoria por incapacidade permanente, auxílio-acidente e BPC/LOAS dependem de perícia médica. Laudos com descrição clara da limitação para o trabalho habitual, com CID, tratamento feito e sequelas, costumam ser decisivos. BPC exige também avaliação social e CadÚnico atualizado.",
      },
      {
        h2: "Ação na Subseção Federal de Itabuna",
        body:
          "Negado o benefício, a ação vai para a Justiça Federal – Subseção Judiciária de Itabuna, da Seção Judiciária da Bahia. Causas de até 60 salários mínimos tramitam no Juizado Especial Federal, sem custas no primeiro grau. Recursos vão à Turma Recursal e, nas ações comuns, ao TRF da 1ª Região.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp a carta do INSS, o CNIS e os documentos que mostram a atividade rural ou a incapacidade. O Dr. Gilberto Riccio (OAB/BA 46.638) avalia o caso.",
      },
    ],
    faq: [
      {
        q: "Meio ano por ano eu trabalhava na roça. Serve para aposentadoria rural?",
        a: "Pode servir, dependendo de como se prove o período efetivo de atividade rural de economia familiar. Cada caso é analisado em conjunto com os documentos e testemunhas.",
      },
      {
        q: "Perito do INSS disse que posso trabalhar. Discordo. E agora?",
        a: "Cabe recurso administrativo e, se persistir a negativa, ação judicial com nova perícia feita por perito nomeado pelo juiz.",
      },
      {
        q: "BPC exige CadÚnico?",
        a: "Sim. Para o BPC o CadÚnico precisa estar atualizado e preencher o critério de renda familiar previsto em lei.",
      },
      {
        q: "O INSS paga atrasados?",
        a: "Se a Justiça reconhecer o direito, os valores são devidos desde a data do requerimento administrativo, respeitada a prescrição de 5 anos, por RPV ou precatório conforme o valor.",
      },
    ],
    areaLink: { href: "/prev", label: "Direito previdenciário: benefícios e calculadoras" },
    whatsappText: "Olá, Dr. Gilberto. Tenho um problema com o INSS e moro em Itabuna.",
  },

  "trabalhista-itabuna": {
    title: "Advogado Trabalhista em Itabuna (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado trabalhista em Itabuna: comércio regional, saúde, trabalhador rural e doméstica. Vara do Trabalho de Itabuna (TRT5). OAB/BA 46.638.",
    h1: "Advogado trabalhista em Itabuna",
    intro:
      "Itabuna atende comércio, hospitais, rede de saúde regional e ainda muita gente que veio da roça do cacau. Os pedidos trabalhistas trazem essa mistura: vendedor com horas extras, técnico de enfermagem com jornada desorganizada, doméstica sem direitos pagos.",
    sections: [
      {
        h2: "Vara do Trabalho de Itabuna",
        body:
          "Quem trabalhou no município ajuíza na Justiça do Trabalho em Itabuna, que integra o TRT da 5ª Região. Recursos vão ao TRT5, em Salvador. O processo é eletrônico, pelo PJe.",
      },
      {
        h2: "Comércio e saúde",
        body:
          "No comércio, aparecem com frequência horas extras em jornada de abertura e fechamento, trabalho em feriados, acúmulo de função e vínculo sem carteira assinada. Em hospitais e clínicas da região, escala 12×36 precisa de previsão em acordo ou convenção coletiva (art. 59-A da CLT), e o contato habitual com agentes biológicos pode gerar adicional de insalubridade, apurado por perícia.",
      },
      {
        h2: "Doméstica e trabalhador rural",
        body:
          "Desde a Lei Complementar 150/2015, a doméstica tem jornada de 8 horas diárias e 44 semanais, horas extras, FGTS, férias com 1/3 e 13º. O trabalhador rural, pela Lei 5.889/1973, tem direito a carteira assinada, FGTS, adicionais e verbas rescisórias corretas. Diarista e trabalhador por tarefa precisam ter a relação analisada caso a caso para saber se há vínculo.",
      },
      {
        h2: "Atendimento e prazos",
        body:
          "A ação deve ser proposta em até 2 anos depois do fim do contrato, alcançando os direitos dos últimos 5 anos (art. 7º, XXIX, da Constituição). Envie pelo WhatsApp carteira, contracheques, termo de rescisão e conversas com o empregador.",
      },
    ],
    faq: [
      {
        q: "Trabalhei como diarista. Tenho carteira assinada?",
        a: "Depende. Para configurar vínculo doméstico pela LC 150/2015 é preciso trabalhar mais de 2 dias por semana para a mesma família. Abaixo disso, em regra, é trabalhador autônomo.",
      },
      {
        q: "Enfermeiro em hospital pode ser pago sempre pela escala?",
        a: "A escala 12×36 só vale com acordo ou convenção coletiva, ou nos termos previstos em lei. Fora disso, as horas excedentes são horas extras.",
      },
      {
        q: "Trabalhador rural tem FGTS?",
        a: "Sim. Desde a Constituição de 1988, todos os empregados urbanos e rurais têm FGTS.",
      },
      {
        q: "Qual o prazo para entrar com a ação?",
        a: "Até 2 anos após o fim do contrato, cobrando os últimos 5 anos.",
      },
    ],
    areaLink: { href: "/advogado-trabalhista-online", label: "Advogado trabalhista online: como funciona" },
    whatsappText: "Olá, Dr. Gilberto. Tenho uma questão trabalhista em Itabuna.",
  },

  "familia-itabuna": {
    title: "Advogado de Família em Itabuna (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado de família em Itabuna: divórcio, pensão alimentícia, guarda, união estável e inventário. Varas de Família da comarca de Itabuna (TJBA).",
    h1: "Advogado de família em Itabuna",
    intro:
      "Em Itabuna, divórcio, pensão e guarda correm nas Varas de Família da comarca do TJBA, ou, havendo acordo, em cartório. Com a cidade sendo centro regional, muitos casais vivem entre Itabuna e cidades vizinhas, e isso aparece na discussão de guarda e visitas.",
    sections: [
      {
        h2: "Varas de Família da comarca",
        body:
          "Sem acordo, as ações correm nas Varas de Família da comarca de Itabuna. Com acordo e assistência de advogado, o divórcio pode ser feito por escritura em cartório de notas (Lei 11.441/2007).",
      },
      {
        h2: "Pensão de quem trabalha no comércio",
        body:
          "Quem paga pensão em geral tem renda mista: carteira assinada em comércio ou saúde e serviços avulsos. A base para a pensão considera a renda total provada, e não apenas o salário formal. Em caso de atraso, cabe prisão civil das 3 últimas parcelas (art. 528 do CPC) ou penhora de bens e salário.",
      },
      {
        h2: "Guarda compartilhada e distância entre as cidades",
        body:
          "A guarda compartilhada é a regra (art. 1.584 do Código Civil), mesmo com os pais em cidades diferentes. Define-se a residência base da criança e o calendário de convivência, com atenção à distância, escola e trabalho dos pais. Mudança de cidade com o filho precisa de autorização do outro genitor ou do juiz.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp a certidão de casamento ou nascimento dos filhos e um resumo do caso. O Dr. Gilberto Riccio (OAB/BA 46.638) orienta o caminho.",
      },
    ],
    faq: [
      {
        q: "O pai do meu filho mora em outra cidade da região. Onde peço pensão?",
        a: "Pode ser no seu domicílio: a ação de alimentos corre, em regra, no domicílio de quem pede a pensão (art. 53, II, do CPC).",
      },
      {
        q: "Quem paga faz bico e não declara. Isso entra na base?",
        a: "Pode entrar. O juiz pode considerar a renda real provada, incluindo atividades autônomas, com base em padrão de vida, contas bancárias e testemunhas.",
      },
      {
        q: "Guarda compartilhada significa dividir o tempo igual?",
        a: "Não necessariamente. Significa que os dois pais participam das decisões sobre o filho. O tempo de convivência é definido pelo juiz ou acordado pelas partes.",
      },
      {
        q: "Preciso de advogado para o divórcio em cartório?",
        a: "Sim. A escritura exige assistência de advogado ou defensor público.",
      },
    ],
    areaLink: { href: "/advogado-familia", label: "Direito de família: divórcio, pensão e guarda" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado de família em Itabuna.",
  },

  // ───────────────────────── Juazeiro ─────────────────────────

  "criminal-juazeiro": {
    title: "Advogado Criminalista em Juazeiro (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado criminalista em Juazeiro: flagrante, audiência de custódia, habeas corpus e defesa na comarca de Juazeiro (TJBA). OAB/BA 46.638.",
    h1: "Advogado criminalista em Juazeiro",
    intro:
      "Juazeiro fica na divisa com Petrolina/PE, no Vale do São Francisco. A geografia afeta a defesa criminal: quem é preso na ponte, no rio ou em uma das BRs que cortam a cidade pode acabar em jurisdições diferentes conforme o local exato do fato.",
    sections: [
      {
        h2: "Comarca de Juazeiro ou de Petrolina",
        body:
          "A competência criminal é do lugar da consumação do crime (art. 70 do CPP). Fato ocorrido do lado baiano, incluindo bairros da sede e a travessia a partir de Juazeiro, é processado na comarca de Juazeiro, no TJBA. Do lado pernambucano, a competência é do TJPE. Nos casos em que isso é discutido, a definição rápida evita atraso em pedido de liberdade.",
      },
      {
        h2: "Justiça Federal – Subseção de Juazeiro",
        body:
          "Juazeiro conta com Subseção Judiciária da Justiça Federal. Vão para lá crimes contra a União, como contrabando e descaminho, tráfico com indício de internacionalização, falsificação de documento federal, moeda falsa e crime ambiental em unidade de conservação federal. Isso muda delegacia, sistema de processo e juiz competente.",
      },
      {
        h2: "Audiência de custódia e liberdade provisória",
        body:
          "O preso em flagrante é apresentado a um juiz em até 24 horas (art. 310 do CPP e Resolução 213/2015 do CNJ). A defesa pode pedir o relaxamento da prisão ilegal, a liberdade provisória com ou sem fiança e medidas cautelares no lugar da preventiva (art. 319 do CPP). Comprovante de residência em Juazeiro ou região e de trabalho reforçam o vínculo.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp o nome completo do preso, onde ele está e, se já houver, o número do processo ou do auto. O Dr. Gilberto Riccio (OAB/BA 46.638) consulta a situação e orienta a família.",
      },
    ],
    faq: [
      {
        q: "Meu familiar foi preso na ponte. Responde onde?",
        a: "Depende de qual lado o fato aconteceu. Do lado baiano, comarca de Juazeiro. Do lado pernambucano, comarca de Petrolina. Em caso de dúvida real sobre o local, a questão é decidida no processo.",
      },
      {
        q: "Meu caso é federal?",
        a: "Pode ser, nas hipóteses de crime contra a União, tráfico com indício de transnacionalidade e descaminho, por exemplo. Nessas, o caso vai para a Subseção Federal de Juazeiro.",
      },
      {
        q: "A família pode contratar advogado antes de falar com o preso?",
        a: "Pode. O advogado se apresenta ao preso, formaliza a procuração e passa a acompanhar o caso.",
      },
      {
        q: "Habeas corpus tem prazo?",
        a: "Não. Cabe sempre que houver prisão ou ameaça de prisão ilegal.",
      },
    ],
    areaLink: { href: "/criminal", label: "Defesa criminal: como o escritório atua" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado criminalista em Juazeiro.",
  },

  "previdenciario-juazeiro": {
    title: "Advogado Previdenciário (INSS) em Juazeiro | Riccio Advocacia",
    metaDescription:
      "Advogado de INSS em Juazeiro (BA): aposentadoria rural da fruticultura, segurado especial, BPC/LOAS e salário-maternidade. Subseção Federal de Juazeiro.",
    h1: "Advogado previdenciário (INSS) em Juazeiro",
    intro:
      "Juazeiro é polo da fruticultura irrigada do Vale do São Francisco. Trabalhador rural, segurado especial, bóia-fria e diarista de fazenda são o grosso dos pedidos no INSS por aqui – e dá para resolver sem precisar ir a Salvador, porque a cidade tem Subseção da Justiça Federal.",
    sections: [
      {
        h2: "Aposentadoria rural e segurado especial",
        body:
          "O trabalhador rural em regime de economia familiar pode se aposentar por idade como segurado especial (art. 48 da Lei 8.213/1991), sem contribuição formal, comprovando a atividade rural pelo tempo exigido. Serve como prova a nota de produtor, o contrato de arrendamento ou parceria, a declaração do sindicato rural, o cadastro no INCRA e as testemunhas. Diarista, bóia-fria e meeiro da fruticultura entram nessa lógica se a prova mostrar atividade rural habitual.",
      },
      {
        h2: "Salário-maternidade da trabalhadora rural",
        body:
          "A trabalhadora rural segurada especial tem direito a salário-maternidade, mesmo sem contribuição formal, bastando comprovar a atividade rural no período de carência (10 meses). A negativa por falta de prova material ainda é comum e costuma ser revertida na Justiça com os documentos certos e testemunhas.",
      },
      {
        h2: "Ação na Subseção Federal de Juazeiro",
        body:
          "Negado o benefício, a ação é proposta na Justiça Federal – Subseção Judiciária de Juazeiro, da Seção Judiciária da Bahia. Causas de até 60 salários mínimos tramitam no Juizado Especial Federal, sem custas no primeiro grau. Recursos vão à Turma Recursal e, nas ações comuns, ao TRF da 1ª Região.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp a carta do INSS, o CNIS e os documentos que mostram a atividade rural. O Dr. Gilberto Riccio (OAB/BA 46.638) avalia o caso.",
      },
    ],
    faq: [
      {
        q: "Trabalhei a vida na fruticultura por diária. Posso aposentar?",
        a: "Pode, como segurado especial, se comprovar a atividade rural pelo tempo exigido com documentos, caderneta de trabalho, declaração do sindicato rural e testemunhas.",
      },
      {
        q: "Gestante que trabalha na roça tem direito a salário-maternidade?",
        a: "Tem, como segurada especial, cumprido o período de carência de 10 meses de atividade rural, provada por documentos e testemunhas.",
      },
      {
        q: "Preciso ir a Salvador para processar o INSS?",
        a: "Não. Juazeiro tem Subseção da Justiça Federal. A ação corre aqui, e o processo é eletrônico.",
      },
      {
        q: "Qual o prazo para recurso administrativo?",
        a: "30 dias para o Conselho de Recursos da Previdência Social. Mesmo passado esse prazo, ainda cabe novo pedido ou ação judicial.",
      },
    ],
    areaLink: { href: "/prev", label: "Direito previdenciário: benefícios e calculadoras" },
    whatsappText: "Olá, Dr. Gilberto. Tenho um problema com o INSS e moro em Juazeiro.",
  },

  "trabalhista-juazeiro": {
    title: "Advogado Trabalhista em Juazeiro (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado trabalhista em Juazeiro: fruticultura irrigada, contrato de safra, insalubridade por agrotóxicos e vínculo. Vara do Trabalho de Juazeiro (TRT5).",
    h1: "Advogado trabalhista em Juazeiro",
    intro:
      "Juazeiro vive da fruticultura irrigada. Isso dá à Justiça do Trabalho da cidade um perfil muito próprio: contrato de safra, trabalhador rural com agrotóxico sem EPI, cooperativa de mão de obra, hora de trajeto em transporte da fazenda.",
    sections: [
      {
        h2: "Vara do Trabalho de Juazeiro",
        body:
          "Quem trabalhou no município ou nas cidades da região sob sua jurisdição ajuíza na Vara do Trabalho em Juazeiro, que integra o TRT da 5ª Região. Recursos vão ao TRT5, em Salvador. O processo é eletrônico, pelo PJe.",
      },
      {
        h2: "Trabalhador rural, contrato de safra e insalubridade",
        body:
          "A Lei 5.889/1973 rege o trabalho rural. Trabalhador de uva, manga, melão, cebola e outras culturas irrigadas tem direito a carteira assinada, 13º, férias com 1/3, FGTS e, provada a exposição a agrotóxicos ou calor, adicional de insalubridade na forma da NR-15 e NR-31. O contrato de safra (Lei 5.889/1973 e art. 14 da Lei 5.889) é por prazo determinado, mas garante todos os direitos proporcionais, inclusive FGTS.",
      },
      {
        h2: "Cooperativa de mão de obra e vínculo",
        body:
          "Trabalhador contratado como cooperado pode, na prática, ser empregado, se houver pessoalidade, não eventualidade, onerosidade e subordinação (arts. 2º e 3º da CLT). A Súmula 331 do TST e a Lei 6.019/1974 também permitem alcançar a tomadora do serviço quando a cooperativa ou a prestadora não paga, de forma subsidiária.",
      },
      {
        h2: "Atendimento e prazos",
        body:
          "A ação deve ser proposta em até 2 anos depois do fim do contrato, alcançando os direitos dos últimos 5 anos (art. 7º, XXIX, da Constituição). Envie pelo WhatsApp carteira, contracheques, termo de rescisão, cadastro de EPI e conversas com a fazenda.",
      },
    ],
    faq: [
      {
        q: "Trabalhei por safra sem carteira. Posso cobrar?",
        a: "Pode. A relação de emprego se prova com testemunhas, cadastros, lista de ponto da fazenda e pagamentos. Reconhecido o vínculo, todos os direitos são devidos.",
      },
      {
        q: "Contato com agrotóxico dá adicional?",
        a: "Pode dar adicional de insalubridade, a depender da substância e do uso correto de EPI, apurado por perícia (NR-15 e NR-31).",
      },
      {
        q: "O ônibus da fazenda contava como hora trabalhada?",
        a: "Até a Reforma de 2017, muitas horas de percurso contavam como jornada (Súmula 90 do TST). Depois da Reforma, o tempo de percurso, em regra, não é mais jornada, salvo em determinadas situações. Cada contrato precisa ser analisado pela data.",
      },
      {
        q: "Qual o prazo para entrar com a ação?",
        a: "Até 2 anos após o fim do contrato, cobrando os últimos 5 anos.",
      },
    ],
    areaLink: { href: "/advogado-trabalhista-online", label: "Advogado trabalhista online: como funciona" },
    whatsappText: "Olá, Dr. Gilberto. Tenho uma questão trabalhista em Juazeiro.",
  },

  "familia-juazeiro": {
    title: "Advogado de Família em Juazeiro (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado de família em Juazeiro: divórcio, pensão, guarda, união estável e casais na divisa com Petrolina (PE). Varas de Família da comarca de Juazeiro (TJBA).",
    h1: "Advogado de família em Juazeiro",
    intro:
      "Muita família de Juazeiro mora e trabalha dos dois lados da ponte, entre Bahia e Pernambuco. Isso traz ao direito de família uma pergunta recorrente: em qual estado entrar com a ação, e qual juiz vai decidir.",
    sections: [
      {
        h2: "Varas de Família da comarca",
        body:
          "Sem acordo, divórcio, pensão e guarda correm nas Varas de Família da comarca de Juazeiro, no TJBA. Com acordo e assistência de advogado, o divórcio pode ser feito por escritura em cartório de notas (Lei 11.441/2007).",
      },
      {
        h2: "Casais entre Juazeiro (BA) e Petrolina (PE)",
        body:
          "A ação de alimentos corre, em regra, no domicílio de quem pede a pensão (art. 53, II, do CPC). Então, se a mãe e o filho moram em Juazeiro e o pai em Petrolina, a ação pode ser proposta aqui. Divórcio, sem acordo, segue o domicílio do réu (art. 46 do CPC) ou o último domicílio do casal, com regras próprias conforme o caso. Reconhecimento e dissolução de união estável seguem as mesmas regras.",
      },
      {
        h2: "Partilha, guarda e trabalhador da fruticultura",
        body:
          "Em comunhão parcial ou união estável, a regra é partilhar o que foi adquirido durante a convivência. Quem trabalha na fruticultura tem renda sazonal: isso deve ser considerado na fixação da pensão, com base na renda média do ano e nas verbas de safra. A guarda compartilhada é a regra (art. 1.584 do Código Civil), mesmo com os pais em cidades e estados diferentes.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp a certidão de casamento ou nascimento dos filhos e um resumo do caso. O Dr. Gilberto Riccio (OAB/BA 46.638) orienta o caminho mais rápido.",
      },
    ],
    faq: [
      {
        q: "Moro em Juazeiro e o pai do meu filho em Petrolina. Em qual estado peço pensão?",
        a: "Em regra, no seu domicílio, em Juazeiro, no TJBA. A ação de alimentos corre no domicílio de quem pede a pensão.",
      },
      {
        q: "Pensão pode ser descontada direto no salário?",
        a: "Sim. Se quem paga tem emprego formal, o juiz pode determinar desconto direto em folha, inclusive sobre verbas de safra e 13º.",
      },
      {
        q: "Guarda compartilhada funciona com as cidades em estados diferentes?",
        a: "Pode funcionar. Define-se a residência base da criança e o calendário de convivência. O juiz considera escola, saúde e trabalho dos pais.",
      },
      {
        q: "Preciso de advogado para o divórcio em cartório?",
        a: "Sim. A escritura exige assistência de advogado ou defensor público.",
      },
    ],
    areaLink: { href: "/advogado-familia", label: "Direito de família: divórcio, pensão e guarda" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado de família em Juazeiro.",
  },

  // ───────────────────────── Porto Seguro ─────────────────────────

  "criminal-porto-seguro": {
    title: "Advogado Criminalista em Porto Seguro (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado criminalista em Porto Seguro: flagrante em alta temporada, audiência de custódia, habeas corpus e defesa na comarca de Porto Seguro (TJBA).",
    h1: "Advogado criminalista em Porto Seguro",
    intro:
      "Em Porto Seguro, Arraial d'Ajuda e Trancoso, a alta temporada muda o volume e o perfil das ocorrências. Flagrantes em festa, brigas em bar, trânsito com embriaguez e furto em pousada aparecem bem mais no período de festas e no verão.",
    sections: [
      {
        h2: "Comarca de Porto Seguro",
        body:
          "Crimes estaduais ocorridos no município são processados nas varas criminais da comarca de Porto Seguro, no TJBA. Recursos e habeas corpus seguem para o TJBA, em Salvador. Arraial d'Ajuda, Trancoso e Caraíva fazem parte do município de Porto Seguro, mas a competência final é definida pelo lugar do fato.",
      },
      {
        h2: "Flagrante em alta temporada",
        body:
          "Mesmo em período de festa, a audiência de custódia acontece em até 24 horas após a prisão em flagrante (art. 310 do CPP). A defesa pode pedir relaxamento da prisão ilegal, liberdade provisória com ou sem fiança e medidas cautelares no lugar da preventiva (art. 319 do CPP). Comprovante de residência, matrícula em hotel para turista ou vínculo com empregador em caso de temporada ajuda a demonstrar vínculo com a comarca.",
      },
      {
        h2: "Casos de competência federal",
        body:
          "Fatos que atingem interesse da União – contrabando, tráfico com indício de internacionalização, crimes em terras indígenas (Resolução 46/2014 do CJF e jurisprudência), crime ambiental em unidade de conservação federal, falsificação de documento federal – vão para a Justiça Federal – Subseção Judiciária de Eunápolis, da Seção Judiciária da Bahia.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp o nome completo do preso, onde ele está e, se já houver, o número do processo ou do auto. O Dr. Gilberto Riccio (OAB/BA 46.638) consulta a situação e orienta a família.",
      },
    ],
    faq: [
      {
        q: "O turista preso em festa responde no estado de origem?",
        a: "Não. A competência é do lugar do fato (art. 70 do CPP). Crime ocorrido em Porto Seguro é processado na comarca de Porto Seguro.",
      },
      {
        q: "Pode haver fiança na delegacia?",
        a: "Para crimes com pena máxima de até 4 anos, o delegado pode arbitrar fiança (art. 322 do CPP). Nos demais casos, o pedido é feito ao juiz.",
      },
      {
        q: "A família pode contratar advogado antes de falar com o preso?",
        a: "Pode. O advogado se apresenta à unidade prisional, formaliza a procuração com o preso e passa a acompanhar o caso.",
      },
      {
        q: "Qual o prazo para habeas corpus?",
        a: "Não há prazo. Cabe sempre que houver prisão ou ameaça de prisão ilegal.",
      },
    ],
    areaLink: { href: "/criminal", label: "Defesa criminal: como o escritório atua" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado criminalista em Porto Seguro.",
  },

  "previdenciario-porto-seguro": {
    title: "Advogado Previdenciário (INSS) em Porto Seguro | Riccio Advocacia",
    metaDescription:
      "Advogado de INSS em Porto Seguro: trabalhador da hotelaria, pescador artesanal, BPC/LOAS e aposentadoria. Pedido no Meu INSS e ação na Justiça Federal.",
    h1: "Advogado previdenciário (INSS) em Porto Seguro",
    intro:
      "Hotelaria, restaurantes, barcos de turismo e pesca artesanal. Em Porto Seguro, Arraial d'Ajuda, Trancoso e Caraíva, esse é o perfil da maioria dos segurados do INSS, e por isso os pedidos aqui têm uma cara diferente do interior.",
    sections: [
      {
        h2: "Trabalhador da hotelaria e CNIS com lacunas",
        body:
          "Camareira, garçom, cozinheiro, recepcionista e marinheiro de barco turístico costumam ter CNIS com muitos vínculos curtos e lacunas de contribuição por conta do trabalho sazonal. Conferir o CNIS no Meu INSS e corrigir falhas com carteira, holerites, FGTS e PPP é o primeiro passo antes de pedir aposentadoria por idade, por tempo de contribuição ou da pessoa com deficiência (LC 142/2013).",
      },
      {
        h2: "Pescador artesanal como segurado especial",
        body:
          "O pescador artesanal pode ser segurado especial, com direito a aposentadoria por idade (60 anos homem, 55 mulher), auxílio por incapacidade temporária, salário-maternidade e seguro-defeso. Registro no RGP e declaração de colônia de pescadores são provas importantes, mas não as únicas.",
      },
      {
        h2: "BPC/LOAS e ação na Justiça Federal",
        body:
          "O BPC é um salário mínimo para idoso a partir de 65 anos ou pessoa com deficiência de baixa renda, com CadÚnico atualizado e avaliação social. Negado o benefício, a ação vai para a Justiça Federal – Subseção Judiciária de Eunápolis, da Seção Judiciária da Bahia, que atende Porto Seguro e cidades da região. Causas de até 60 salários mínimos tramitam no Juizado Especial Federal, sem custas no primeiro grau.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp a carta do INSS, o CNIS, laudos e, se houver, PPP ou registro de pesca. O Dr. Gilberto Riccio (OAB/BA 46.638) avalia o caso e indica o caminho.",
      },
    ],
    faq: [
      {
        q: "Trabalhei meses de verão com carteira e meses de inverno sem. Dá para reconhecer o inverno?",
        a: "Pode dar, se houver prova de que o trabalho continuou sob subordinação. Reconhecido o vínculo, as contribuições do período entram no cálculo.",
      },
      {
        q: "Pescador recebe seguro-defeso?",
        a: "Pode, quando há período de defeso definido para a espécie, atividade exclusiva na pesca artesanal e cumprimento dos requisitos do RGP.",
      },
      {
        q: "O BPC exige CadÚnico?",
        a: "Sim. O CadÚnico deve estar atualizado, e a renda familiar precisa atender ao critério legal.",
      },
      {
        q: "Qual o prazo para ação judicial?",
        a: "Para benefício negado, não há prazo rígido para ajuizar depois da decisão administrativa, mas a prescrição de 5 anos atinge as parcelas vencidas.",
      },
    ],
    areaLink: { href: "/prev", label: "Direito previdenciário: benefícios e calculadoras" },
    whatsappText: "Olá, Dr. Gilberto. Tenho um problema com o INSS e moro em Porto Seguro.",
  },

  "trabalhista-porto-seguro": {
    title: "Advogado Trabalhista em Porto Seguro (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado trabalhista em Porto Seguro: hotelaria, restaurantes, turismo sazonal, gorjetas e trabalhador de temporada. Vara do Trabalho de Porto Seguro (TRT5).",
    h1: "Advogado trabalhista em Porto Seguro",
    intro:
      "Na alta temporada, a cidade contrata em massa; fora dela, muita gente é dispensada ou fica sem carteira. Hotelaria, bar, restaurante e barco de turismo concentram os pedidos trabalhistas no distrito, em Porto Seguro, Arraial d'Ajuda, Trancoso e Caraíva.",
    sections: [
      {
        h2: "Vara do Trabalho de Porto Seguro",
        body:
          "Quem trabalhou no município ajuíza na Justiça do Trabalho em Porto Seguro, que integra o TRT da 5ª Região. Recursos vão ao TRT5, em Salvador. O processo é eletrônico, pelo PJe.",
      },
      {
        h2: "Gorjeta, 12×36 e trabalho em feriado",
        body:
          "A Lei 13.419/2017 trata a gorjeta como receita do empregado, com rateio e integração ao salário conforme critérios da convenção coletiva. A escala 12×36, usada em muitos hotéis, precisa de previsão em acordo ou convenção (art. 59-A da CLT). Trabalho em domingo e feriado, sem folga compensatória, gera descanso semanal remunerado em dobro.",
      },
      {
        h2: "Contrato de temporada e vínculo sem carteira",
        body:
          "Contrato por prazo determinado para serviço de temporada é válido quando previsto em lei (art. 443 da CLT e Lei 6.019/1974) e garante proporcionalmente 13º, férias com 1/3 e FGTS. Quem trabalhou em bar, hotel ou pousada sem carteira pode cobrar o vínculo, com testemunhas, mensagens e comprovantes de pagamento (arts. 2º e 3º da CLT).",
      },
      {
        h2: "Atendimento e prazos",
        body:
          "A ação deve ser proposta em até 2 anos depois do fim do contrato, alcançando os direitos dos últimos 5 anos (art. 7º, XXIX, da Constituição). Envie pelo WhatsApp carteira, holerites, termo de rescisão, escalas e conversas com o empregador.",
      },
    ],
    faq: [
      {
        q: "Gorjeta é só do garçom?",
        a: "Não. O rateio e o repasse seguem a convenção coletiva da categoria, e o valor integra o salário para 13º, férias e FGTS.",
      },
      {
        q: "Trabalhei só na temporada. Tenho FGTS?",
        a: "Sim. Contrato por prazo determinado tem FGTS, 13º proporcional e férias proporcionais com 1/3.",
      },
      {
        q: "A pousada me dispensou e não assinou carteira. Posso cobrar?",
        a: "Pode. Provando a relação de emprego, com testemunhas, Pix de pagamento ou escalas, a Justiça reconhece o vínculo e as verbas.",
      },
      {
        q: "Qual o prazo para entrar com a ação?",
        a: "Até 2 anos após o fim do contrato, cobrando os últimos 5 anos.",
      },
    ],
    areaLink: { href: "/advogado-trabalhista-online", label: "Advogado trabalhista online: como funciona" },
    whatsappText: "Olá, Dr. Gilberto. Tenho uma questão trabalhista em Porto Seguro.",
  },

  "familia-porto-seguro": {
    title: "Advogado de Família em Porto Seguro (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado de família em Porto Seguro: divórcio, pensão, guarda, união estável e partilha de pousada ou casa de temporada. Comarca de Porto Seguro (TJBA).",
    h1: "Advogado de família em Porto Seguro",
    intro:
      "Casais que tocam juntos pousada, restaurante ou barco de turismo em Porto Seguro, Arraial d'Ajuda, Trancoso e Caraíva têm, na separação, uma disputa típica: dividir não só o imóvel, mas o próprio negócio e sua clientela.",
    sections: [
      {
        h2: "Varas de Família da comarca",
        body:
          "Sem acordo, divórcio, pensão e guarda correm nas Varas de Família da comarca de Porto Seguro, no TJBA. Com acordo e assistência de advogado, o divórcio pode ser feito por escritura em cartório de notas (Lei 11.441/2007).",
      },
      {
        h2: "Pousada, restaurante e negócio do casal",
        body:
          "Quando o casal toca junto um negócio, há dois patrimônios: o imóvel e o estabelecimento (art. 1.142 do Código Civil), com clientela, equipamentos, estoque e contratos. A partilha precisa considerar os dois, com avaliação específica, para que ninguém saia só com a casa ou só com a marca.",
      },
      {
        h2: "Pensão, guarda e turismo sazonal",
        body:
          "Quem paga pensão em cidade de turismo tem renda sazonal: a base para fixar valor considera a média do ano, não só o mês pior. A guarda compartilhada é a regra (art. 1.584 do Código Civil). União estável, muito usada no estado, é reconhecida por prova da convivência pública, contínua e duradoura (art. 1.723 do Código Civil).",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp a certidão de casamento ou nascimento dos filhos, matrícula do imóvel e documento do negócio, se houver. O Dr. Gilberto Riccio (OAB/BA 46.638) orienta o caminho.",
      },
    ],
    faq: [
      {
        q: "A pousada entra na partilha?",
        a: "Em regra sim, se adquirida durante a união ou o casamento em regime que inclua comunhão. O negócio em si, com clientela e estoque, também precisa ser avaliado.",
      },
      {
        q: "A renda da temporada conta para pensão?",
        a: "Conta. O juiz considera a renda média do ano, não apenas o mês mais fraco.",
      },
      {
        q: "União estável sem documento é reconhecida?",
        a: "Pode ser, com prova da convivência pública, contínua e duradoura com objetivo de constituir família, em cartório ou judicialmente.",
      },
      {
        q: "Preciso de advogado para o divórcio em cartório?",
        a: "Sim. A escritura exige assistência de advogado ou defensor público.",
      },
    ],
    areaLink: { href: "/advogado-familia", label: "Direito de família: divórcio, pensão e guarda" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado de família em Porto Seguro.",
  },

  // ───────────────────────── Barreiras ─────────────────────────

  "criminal-barreiras": {
    title: "Advogado Criminalista em Barreiras (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado criminalista em Barreiras: flagrante, audiência de custódia, habeas corpus e defesa na comarca de Barreiras e na Subseção Federal de Barreiras.",
    h1: "Advogado criminalista em Barreiras",
    intro:
      "Barreiras é polo do agronegócio no oeste da Bahia, na região MATOPIBA. Isso aparece na pauta criminal: discussões ambientais, armas em fazenda, acidentes de trânsito em rodovia que corta plantações e, de vez em quando, operações federais em áreas de fronteira agrícola.",
    sections: [
      {
        h2: "Comarca de Barreiras",
        body:
          "Crimes estaduais ocorridos no município e em cidades sob a jurisdição da comarca são processados nas varas criminais de Barreiras. Recursos, apelações e habeas corpus seguem para o TJBA, em Salvador.",
      },
      {
        h2: "Justiça Federal – Subseção de Barreiras",
        body:
          "Barreiras conta com Subseção Judiciária da Justiça Federal. Vão para lá fatos com interesse da União: crime ambiental em unidade de conservação federal, desmatamento em terra da União, descaminho, contrabando, falsificação de documento federal e fraude contra a Caixa ou contra o INSS. Isso muda delegacia, sistema e juiz competente, e costuma mudar também o pedido de liberdade.",
      },
      {
        h2: "Audiência de custódia e liberdade provisória",
        body:
          "O preso em flagrante é apresentado a um juiz em até 24 horas (art. 310 do CPP e Resolução 213/2015 do CNJ). A defesa pode pedir relaxamento da prisão ilegal, liberdade provisória com ou sem fiança e medidas cautelares no lugar da preventiva (art. 319 do CPP). Vínculo com fazenda, residência em Barreiras ou região e trabalho reforçam o pedido.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp o nome completo do preso, onde ele está e, se já houver, o número do processo ou do auto. O Dr. Gilberto Riccio (OAB/BA 46.638) consulta a situação e orienta a família.",
      },
    ],
    faq: [
      {
        q: "Operação federal na fazenda. Resposta é na Justiça Federal?",
        a: "Em regra, se há crime contra bem ou interesse da União – ambiental federal, contrabando, falsificação federal – a resposta vai para a Subseção Federal de Barreiras.",
      },
      {
        q: "A família pode contratar advogado antes de falar com o preso?",
        a: "Pode. O advogado se apresenta ao preso e formaliza a procuração. O primeiro contato pode ser pelo WhatsApp.",
      },
      {
        q: "Habeas corpus tem prazo?",
        a: "Não. Cabe sempre que houver prisão ou ameaça de prisão ilegal.",
      },
      {
        q: "Fiança pode ser paga na delegacia?",
        a: "Para crimes com pena máxima de até 4 anos, o delegado pode arbitrar fiança (art. 322 do CPP). Nos demais casos, só o juiz.",
      },
    ],
    areaLink: { href: "/criminal", label: "Defesa criminal: como o escritório atua" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado criminalista em Barreiras.",
  },

  "previdenciario-barreiras": {
    title: "Advogado Previdenciário (INSS) em Barreiras | Riccio Advocacia",
    metaDescription:
      "Advogado de INSS em Barreiras: aposentadoria rural do agronegócio, tempo especial por agrotóxicos, BPC/LOAS e benefício negado. Subseção Federal de Barreiras.",
    h1: "Advogado previdenciário (INSS) em Barreiras",
    intro:
      "Barreiras é a capital baiana do agronegócio. Trabalhador rural safrista, operador de máquina, aplicador de agrotóxico e empregado de frigorífico aparecem muito nas ações previdenciárias da região – e dá para resolver aqui mesmo, pela Subseção Federal.",
    sections: [
      {
        h2: "Tempo especial no agronegócio",
        body:
          "Trabalhador que aplica agrotóxico, opera máquina com ruído acima do limite ou atua em frigorífico pode ter tempo especial, provado pelo PPP e pelo LTCAT da empresa. O direito pode gerar aposentadoria especial ou converter tempo especial em comum para períodos até 13/11/2019. PPP incompleto ou com metodologia falha é motivo comum de indeferimento, e costuma ser corrigido no processo.",
      },
      {
        h2: "Aposentadoria rural e segurado especial",
        body:
          "O trabalhador rural em regime de economia familiar pode se aposentar por idade como segurado especial (art. 48 da Lei 8.213/1991), sem contribuição formal, comprovando a atividade pelo tempo exigido com notas de produtor, contratos de parceria, declaração do sindicato rural, cadastro no INCRA e testemunhas. Safrista costuma ter CTPS com vários vínculos curtos; vale juntar FGTS, holerites e cadastros para fechar o tempo.",
      },
      {
        h2: "Ação na Subseção Federal de Barreiras",
        body:
          "Negado o benefício, a ação vai para a Justiça Federal – Subseção Judiciária de Barreiras, da Seção Judiciária da Bahia. Causas de até 60 salários mínimos tramitam no Juizado Especial Federal, sem custas no primeiro grau. Recursos vão à Turma Recursal e, nas ações comuns, ao TRF da 1ª Região.",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp a carta do INSS, o CNIS, laudos e, se houver, PPP e LTCAT. O Dr. Gilberto Riccio (OAB/BA 46.638) avalia o caso.",
      },
    ],
    faq: [
      {
        q: "Trabalhei como aplicador de agrotóxico. Tenho tempo especial?",
        a: "Pode ter, provada a exposição habitual e permanente a agrotóxicos pelo PPP e, quando necessário, por perícia técnica. NR-15 e literatura previdenciária tratam dessas substâncias como agentes químicos.",
      },
      {
        q: "A fazenda fechou e não me deu o PPP. O que fazer?",
        a: "A obrigação persiste. A falta do PPP pode ser suprida por outras provas, como laudo pericial, FGTS, documentos de segurança do trabalho e testemunhas.",
      },
      {
        q: "Safrista tem FGTS?",
        a: "Sim. Trabalhador rural safrista, com contrato por prazo determinado da Lei 5.889/1973, tem FGTS depositado proporcionalmente ao tempo trabalhado.",
      },
      {
        q: "Preciso ir a Salvador para processar o INSS?",
        a: "Não. Barreiras tem Subseção da Justiça Federal; o processo corre aqui, de forma eletrônica.",
      },
    ],
    areaLink: { href: "/prev", label: "Direito previdenciário: benefícios e calculadoras" },
    whatsappText: "Olá, Dr. Gilberto. Tenho um problema com o INSS e moro em Barreiras.",
  },

  "trabalhista-barreiras": {
    title: "Advogado Trabalhista em Barreiras (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado trabalhista em Barreiras: safra de grãos e algodão, contrato de safra, insalubricidade por agrotóxicos e acidente agrícola. Vara do Trabalho de Barreiras (TRT5).",
    h1: "Advogado trabalhista em Barreiras",
    intro:
      "A safra de soja, algodão e milho dita o calendário trabalhista em Barreiras. Contrato de safra, trabalho com agrotóxico, operação de colheitadeira e empresa de prestação de serviços são o pano de fundo da maioria das ações aqui.",
    sections: [
      {
        h2: "Vara do Trabalho de Barreiras",
        body:
          "Quem trabalhou no município ajuíza na Justiça do Trabalho em Barreiras, que integra o TRT da 5ª Região. Recursos vão ao TRT5, em Salvador. O processo é eletrônico, pelo PJe.",
      },
      {
        h2: "Contrato de safra e trabalhador rural",
        body:
          "O contrato de safra é por prazo determinado (Lei 5.889/1973 e art. 14 da mesma lei), e garante FGTS, 13º proporcional, férias proporcionais com 1/3 e verbas rescisórias próprias. Trabalhador rural em contato habitual com agrotóxico pode ter adicional de insalubridade (NR-15 e NR-31), apurado por perícia; o uso de EPI pelo empregador é discutido caso a caso.",
      },
      {
        h2: "Acidente agrícola e responsabilidade da fazenda",
        body:
          "Acidente em colheitadeira, pulverizador, transporte ou armazém de grãos pode gerar indenização por danos materiais, morais e estéticos, inclusive quando a empresa não entregou EPI ou não treinou o trabalhador. A culpa presumida da empresa em atividades de risco já foi reconhecida pelo STF (art. 927, parágrafo único, do Código Civil).",
      },
      {
        h2: "Atendimento e prazos",
        body:
          "A ação deve ser proposta em até 2 anos depois do fim do contrato, alcançando os direitos dos últimos 5 anos (art. 7º, XXIX, da Constituição). Envie pelo WhatsApp carteira, holerites, termo de rescisão, cadastro de EPI e documentos do acidente.",
      },
    ],
    faq: [
      {
        q: "Trabalhei por safra sem carteira. Posso cobrar?",
        a: "Pode. A relação de emprego se prova com testemunhas, cadastro na fazenda, cartões de ponto e pagamentos. Reconhecido o vínculo, todos os direitos são devidos.",
      },
      {
        q: "Contato com agrotóxico garante adicional?",
        a: "Pode garantir adicional de insalubridade, apurado por perícia, conforme NR-15 e NR-31, e com análise sobre o uso adequado de EPI.",
      },
      {
        q: "Sofri acidente na fazenda. Além do INSS, posso processar a empresa?",
        a: "Sim. A ação contra o empregador por acidente de trabalho corre na Justiça do Trabalho (Súmula Vinculante 22 do STF) e é independente do benefício do INSS.",
      },
      {
        q: "Qual o prazo para entrar com a ação?",
        a: "Até 2 anos após o fim do contrato, cobrando os últimos 5 anos.",
      },
    ],
    areaLink: { href: "/advogado-trabalhista-online", label: "Advogado trabalhista online: como funciona" },
    whatsappText: "Olá, Dr. Gilberto. Tenho uma questão trabalhista em Barreiras.",
  },

  "familia-barreiras": {
    title: "Advogado de Família em Barreiras (BA) | Riccio Advocacia",
    metaDescription:
      "Advogado de família em Barreiras: inventário com fazendas, divórcio, pensão, guarda e união estável no oeste da Bahia. Varas de Família da comarca de Barreiras.",
    h1: "Advogado de família em Barreiras",
    intro:
      "Família do agronegócio em Barreiras herda terra. Isso coloca o inventário e a partilha no centro das discussões de direito de família na região, muitas vezes com fazendas em áreas de fronteira agrícola e documentação antiga.",
    sections: [
      {
        h2: "Varas de Família da comarca",
        body:
          "Sem acordo, divórcio, pensão e guarda correm nas Varas de Família da comarca de Barreiras, no TJBA. Com acordo e assistência de advogado, o divórcio pode ser feito por escritura em cartório de notas (Lei 11.441/2007).",
      },
      {
        h2: "Inventário com fazenda e silo",
        body:
          "Fazenda no inventário tem particularidades: precisa de CCIR em dia, ITR quitado e, quando a área exigir, georreferenciamento registrado no CNIR e no cartório. Silo, equipamento, maquinário agrícola e estoque de grãos são bens próprios, com avaliação separada. Terras recebidas em partilhas antigas, com cadastro desatualizado, costumam travar a venda; vale resolver a documentação em paralelo ao inventário.",
      },
      {
        h2: "Pensão, guarda e trabalhador do campo",
        body:
          "Para quem trabalha em fazenda ou em empresa de prestação de serviço agrícola, a pensão considera a renda média do ano, inclusive safra e PLR. A guarda compartilhada é a regra (art. 1.584 do Código Civil), mesmo com residência da criança na cidade e trabalho do pai na zona rural. União estável, muito presente na região, é reconhecida por prova da convivência pública, contínua e duradoura (art. 1.723 do Código Civil).",
      },
      {
        h2: "Atendimento",
        body:
          "Envie pelo WhatsApp as certidões, matrículas das fazendas, ITR, CCIR e um resumo do caso. O Dr. Gilberto Riccio (OAB/BA 46.638) orienta o caminho.",
      },
    ],
    faq: [
      {
        q: "A fazenda está no nome do pai falecido. Dá para vender antes do inventário?",
        a: "Em regra, não. A venda só acontece depois de aberto o inventário e com autorização judicial, salvo nos casos de alvará. O comprador exige matrícula atualizada em nome dos herdeiros.",
      },
      {
        q: "Silo e máquinas entram na partilha?",
        a: "Entram. São bens com avaliação separada do imóvel rural e podem ser partilhados em espécie ou com reposição de valores.",
      },
      {
        q: "Pensão para filho de trabalhador de safra tem base variável?",
        a: "Pode. O juiz considera a renda média do ano, incluindo verbas de safra e PLR, para que o valor da pensão seja real.",
      },
      {
        q: "Preciso de advogado para o divórcio em cartório?",
        a: "Sim. A escritura exige assistência de advogado ou defensor público.",
      },
    ],
    areaLink: { href: "/advogado-familia", label: "Direito de família: divórcio, pensão e guarda" },
    whatsappText: "Olá, Dr. Gilberto. Preciso de um advogado de família em Barreiras.",
  },
};

export const getLocalPage = (nicheSlug: string, citySlug: string): LocalPageContent | undefined =>
  (localPages as Record<string, LocalPageContent>)[`${nicheSlug}-${citySlug}`];

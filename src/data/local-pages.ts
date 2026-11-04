// Conteúdo próprio (não-template) das páginas locais prioritárias.
// Só fatos verificáveis: nada de endereço, telefone, juiz, estatística ou resultado inventado.
// Chave: `${nicheSlug}-${citySlug}` — os mesmos slugs de CityNicheLanding/legalAreas e cities.ts.

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

export const localPages: Record<string, LocalPageContent> = {
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
        a: "Depende do cartório e do estado: questões de guarda e pensão de filhos menores precisam de solução judicial prévia. O advogado verifica se o seu caso permite a via extrajudicial.",
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
      "Em Lauro de Freitas, divórcio, pensão e guarda correm na comarca local do TJBA ou, havendo acordo e sem filhos menores ou incapazes, podem ser resolvidos em cartório.",
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
};

export const LOCAL_PAGE_KEYS = Object.keys(localPages);

/** Cidades e áreas com página local. A cidade pode ter hífen (lauro-de-freitas), a área não. */
export const LOCAL_CITY_NAMES: Record<string, string> = {
  salvador: "Salvador",
  camacari: "Camaçari",
  "lauro-de-freitas": "Lauro de Freitas",
};

export const LOCAL_NICHE_NAMES: Record<string, string> = {
  criminal: "Criminal",
  previdenciario: "Previdenciário",
  trabalhista: "Trabalhista",
  familia: "Família",
  consumidor: "Consumidor",
};

/** Separa a chave só no PRIMEIRO hífen: "familia-lauro-de-freitas" → familia / lauro-de-freitas. */
export const splitLocalKey = (key: string) => {
  const i = key.indexOf("-");
  return { nicheSlug: key.slice(0, i), citySlug: key.slice(i + 1) };
};

export const LOCAL_PAGE_ROUTES = LOCAL_PAGE_KEYS.map((key) => ({ key, ...splitLocalKey(key) }));

export const getLocalPage = (nicheSlug: string, citySlug: string) =>
  localPages[`${nicheSlug}-${citySlug}`];

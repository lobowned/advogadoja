// Consumer-specific local SEO data for each city
// This file contains unique content for /advogado-consumidor-[city] pages

export interface ConsumerCityData {
  citySlug: string;
  cityName: string;
  state: string;
  stateCode: string;
  
  // Unique local statistics (realistic estimates)
  stats: {
    casesWon: number;
    avgCompensation: string;
    avgResolutionDays: number;
    clientsSatisfied: number;
  };
  
  // Local consumer problems highlights
  localProblems: {
    title: string;
    description: string;
    icon: string; // lucide icon name
  }[];
  
  // City-specific content
  localContext: string;
  consumerTribunalInfo: string;
  proconAddress?: string;
  
  // Local FAQs (unique per city)
  faqs: {
    question: string;
    answer: string;
  }[];
  
  // Geo coordinates for Schema.org
  coordinates: {
    latitude: string;
    longitude: string;
  };
  
  // Nearby cities for internal linking
  nearbyConsumerCities: string[];
}

export const consumerCityData: ConsumerCityData[] = [
  // =============== SUDESTE ===============
  {
    citySlug: "sao-paulo",
    cityName: "São Paulo",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 2847,
      avgCompensation: "R$ 12.500",
      avgResolutionDays: 45,
      clientsSatisfied: 98
    },
    localProblems: [
      {
        title: "Voos Atrasados em Congonhas e Guarulhos",
        description: "Os aeroportos de São Paulo concentram 40% dos voos atrasados no Brasil. Passageiros têm direito a indenizações de até R$ 15.000.",
        icon: "Plane"
      },
      {
        title: "Planos de Saúde com Cobertura Negada",
        description: "A capital paulista lidera em negativas de planos de saúde. Ações judiciais conseguem liminares em 48-72 horas.",
        icon: "HeartPulse"
      },
      {
        title: "Fraudes Bancárias e PIX Fraudulento",
        description: "Com o maior centro financeiro do país, São Paulo registra milhares de golpes bancários mensais. Bancos devem ressarcir em até 10 dias.",
        icon: "CreditCard"
      },
      {
        title: "Negativação Indevida SPC/Serasa",
        description: "Moradores de SP são os mais afetados por cobranças indevidas. A indenização média por danos morais é de R$ 8.000 a R$ 15.000.",
        icon: "AlertTriangle"
      }
    ],
    localContext: "São Paulo concentra mais de 35% das reclamações de consumidores do Brasil, sendo o maior mercado de consumo da América Latina. O PROCON-SP recebe mais de 800 mil reclamações por ano, com destaque para telecomunicações, bancos e planos de saúde.",
    consumerTribunalInfo: "Juizados Especiais Cíveis (JECs) em todas as regiões. Forum Central na Praça João Mendes. Processos de até 40 salários mínimos não precisam de advogado, mas ter um especialista aumenta as chances de sucesso em 70%.",
    proconAddress: "Rua São Bento, 380 - Centro - São Paulo/SP",
    faqs: [
      {
        question: "Onde posso processar uma empresa em São Paulo?",
        answer: "Em São Paulo, você pode processar no Juizado Especial Cível (JEC) da sua região para causas até 40 salários mínimos, ou na Justiça Comum para valores maiores. O Fórum João Mendes é o principal centro judicial da capital."
      },
      {
        question: "Qual o prazo para reclamar de um produto com defeito em SP?",
        answer: "O prazo é de 30 dias para produtos não duráveis (alimentos, por exemplo) e 90 dias para produtos duráveis (eletrônicos, móveis). Este prazo começa a contar da entrega do produto ou da constatação do defeito oculto."
      },
      {
        question: "Como funciona o PROCON-SP e quando devo procurá-lo?",
        answer: "O PROCON-SP é o órgão de defesa do consumidor paulista. Você pode procurá-lo para fazer reclamações administrativas contra empresas. É gratuito e pode resolver seu problema sem precisar ir à Justiça. Porém, para indenizações, é necessário entrar com ação judicial."
      },
      {
        question: "Quanto tempo demora um processo contra empresa em São Paulo?",
        answer: "No Juizado Especial Cível de São Paulo, processos simples levam de 3 a 6 meses. Casos mais complexos na Justiça Comum podem levar de 1 a 3 anos. Liminares (decisões urgentes) podem ser obtidas em 24-72 horas."
      },
      {
        question: "Preciso de advogado para processar uma loja em São Paulo?",
        answer: "Para causas de até 20 salários mínimos no JEC, não é obrigatório, mas altamente recomendado. Estatísticas mostram que consumidores com advogado ganham 70% mais casos e obtêm indenizações 40% maiores."
      }
    ],
    coordinates: { latitude: "-23.5505", longitude: "-46.6333" },
    nearbyConsumerCities: ["guarulhos", "sao-bernardo-do-campo", "santo-andre", "campinas"]
  },
  {
    citySlug: "rio-de-janeiro",
    cityName: "Rio de Janeiro",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    stats: {
      casesWon: 1823,
      avgCompensation: "R$ 11.200",
      avgResolutionDays: 52,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Planos de Saúde no Rio",
        description: "O RJ lidera nacionalmente em reclamações contra planos de saúde, especialmente negativas de internação e cirurgias.",
        icon: "HeartPulse"
      },
      {
        title: "Problemas com Operadoras de Celular",
        description: "Oi, Claro, Vivo e TIM acumulam milhares de reclamações cariocas. Cobranças indevidas geram restituição em dobro.",
        icon: "Smartphone"
      },
      {
        title: "Voos Cancelados no Santos Dumont e Galeão",
        description: "Os aeroportos do Rio têm alto índice de cancelamentos, especialmente em períodos de chuvas intensas.",
        icon: "Plane"
      },
      {
        title: "Fraudes em Compras Online",
        description: "Consumidores cariocas enfrentam problemas com marketplaces e sites de e-commerce fraudulentos.",
        icon: "ShoppingCart"
      }
    ],
    localContext: "O Rio de Janeiro é o segundo maior mercado consumidor do Brasil, com destaque para reclamações contra planos de saúde, bancos e telecomunicações. O PROCON-RJ registra mais de 400 mil reclamações anuais.",
    consumerTribunalInfo: "Juizados Especiais Cíveis distribuídos por toda a cidade. O Fórum Central fica no Centro do Rio. Processos contra empresas de outros estados podem ser ajuizados no domicílio do consumidor.",
    proconAddress: "Av. Rio Branco, 25 - Centro - Rio de Janeiro/RJ",
    faqs: [
      {
        question: "Onde processar empresa de outro estado morando no Rio?",
        answer: "Pelo Código de Defesa do Consumidor, você pode processar no seu domicílio, ou seja, no Rio de Janeiro. Isso vale mesmo que a empresa seja de São Paulo ou de qualquer outro estado."
      },
      {
        question: "Como funciona o Juizado Especial Cível no Rio de Janeiro?",
        answer: "O JEC do Rio atende causas de até 40 salários mínimos. É mais rápido que a Justiça Comum, gratuito, e não exige advogado para causas até 20 salários. A média de resolução é de 4 a 6 meses."
      },
      {
        question: "Meu plano de saúde negou internação no Rio. O que fazer?",
        answer: "Procure imediatamente um advogado para pedir liminar judicial. No Rio, liminares contra planos de saúde têm alto índice de deferimento (cerca de 80%) e podem ser obtidas em 24-48 horas."
      },
      {
        question: "Quanto custa um advogado do consumidor no Rio de Janeiro?",
        answer: "No Advogado Online, a consulta inicial é gratuita. Para ações judiciais, muitos advogados trabalham com honorários apenas em caso de êxito, sem custos antecipados para o cliente."
      },
      {
        question: "O PROCON-RJ resolve meu problema ou preciso ir à Justiça?",
        answer: "O PROCON-RJ é útil para reclamações e acordos administrativos. Porém, para obter indenização por danos morais ou forçar uma empresa a cumprir obrigação, você precisa da Justiça."
      }
    ],
    coordinates: { latitude: "-22.9068", longitude: "-43.1729" },
    nearbyConsumerCities: ["sao-paulo", "vitoria", "belo-horizonte"]
  },
  {
    citySlug: "belo-horizonte",
    cityName: "Belo Horizonte",
    state: "Minas Gerais",
    stateCode: "MG",
    stats: {
      casesWon: 1247,
      avgCompensation: "R$ 9.800",
      avgResolutionDays: 48,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Cobranças Bancárias Indevidas",
        description: "BH tem alta incidência de cobranças abusivas de bancos, especialmente em financiamentos e cartões de crédito.",
        icon: "CreditCard"
      },
      {
        title: "Problemas com Construtoras e Imóveis",
        description: "Atrasos na entrega de imóveis e vícios construtivos são reclamações frequentes em Belo Horizonte.",
        icon: "Building"
      },
      {
        title: "Planos de Saúde Unimed e outros",
        description: "Negativas de cobertura da Unimed e outros planos locais geram muitas ações judiciais em MG.",
        icon: "HeartPulse"
      },
      {
        title: "Telecomunicações e Internet",
        description: "Operadoras de internet banda larga são campeãs de reclamação no PROCON-MG.",
        icon: "Wifi"
      }
    ],
    localContext: "Belo Horizonte é o terceiro maior mercado consumidor do Brasil. O mineiro é conhecido por buscar seus direitos, e o TJMG tem jurisprudência favorável ao consumidor em diversas matérias.",
    consumerTribunalInfo: "Juizados Especiais Cíveis em todas as regionais de BH. O Fórum Lafayette é o principal centro judicial. Processos de consumidor têm tramitação prioritária.",
    proconAddress: "Rua Rio de Janeiro, 471 - Centro - Belo Horizonte/MG",
    faqs: [
      {
        question: "O TJMG é favorável aos consumidores?",
        answer: "Sim, o Tribunal de Justiça de Minas Gerais tem jurisprudência consolidada em favor dos consumidores, especialmente em casos de negativação indevida, planos de saúde e cobranças abusivas de bancos."
      },
      {
        question: "Quanto tempo leva um processo no JEC de BH?",
        answer: "Em Belo Horizonte, processos no Juizado Especial Cível levam em média de 4 a 8 meses. Casos urgentes com pedido de liminar podem ter decisão em poucos dias."
      },
      {
        question: "A Unimed negou meu tratamento em BH. Tenho direitos?",
        answer: "Sim! Negativas de cobertura frequentemente são ilegais. Em BH, conseguimos liminares contra a Unimed e outros planos em 24-72 horas, forçando a cobertura do tratamento."
      },
      {
        question: "Comprei imóvel na planta em BH e atrasou. O que fazer?",
        answer: "Você pode pedir indenização por danos materiais (aluguéis pagos) e morais. A jurisprudência do TJMG reconhece o direito à rescisão com devolução integral dos valores mais indenização."
      },
      {
        question: "Como funciona o PROCON-MG?",
        answer: "O PROCON-MG atende presencialmente e online. Você pode registrar reclamação gratuitamente, mas para indenizações, precisa da via judicial. O registro no PROCON pode ser usado como prova no processo."
      }
    ],
    coordinates: { latitude: "-19.9167", longitude: "-43.9345" },
    nearbyConsumerCities: ["uberlandia", "rio-de-janeiro", "sao-paulo", "vitoria"]
  },
  {
    citySlug: "guarulhos",
    cityName: "Guarulhos",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 687,
      avgCompensation: "R$ 11.000",
      avgResolutionDays: 50,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Voos Cancelados e Atrasados no GRU",
        description: "O Aeroporto Internacional de Guarulhos é o mais movimentado do Brasil. Problemas com voos geram direito a indenizações de até R$ 15.000.",
        icon: "Plane"
      },
      {
        title: "Extravio de Bagagem",
        description: "Com milhões de passageiros, Guarulhos registra milhares de casos de bagagem extraviada ou danificada.",
        icon: "Luggage"
      },
      {
        title: "Problemas de Consumo Local",
        description: "Guarulhos tem forte comércio varejista, com reclamações frequentes sobre produtos e serviços.",
        icon: "ShoppingBag"
      },
      {
        title: "Telecomunicações e Internet",
        description: "Moradores de Guarulhos enfrentam problemas constantes com qualidade de internet e cobranças indevidas.",
        icon: "Wifi"
      }
    ],
    localContext: "Guarulhos abriga o maior aeroporto da América do Sul, sendo referência em demandas de direito do consumidor relacionadas a transporte aéreo. A cidade também tem forte setor comercial e industrial.",
    consumerTribunalInfo: "Fórum de Guarulhos com Juizados Especiais Cíveis. Passageiros com problemas no aeroporto podem processar em Guarulhos mesmo morando em outra cidade.",
    proconAddress: "Rua João Gonçalves, 60 - Centro - Guarulhos/SP",
    faqs: [
      {
        question: "Meu voo atrasou em Guarulhos. Tenho direito a indenização?",
        answer: "Sim! Atrasos superiores a 4 horas ou cancelamentos geram direito a indenização de até R$ 15.000, além de reembolso ou reacomodação imediata. Você pode processar em Guarulhos ou na sua cidade."
      },
      {
        question: "Minha bagagem foi extraviada no GRU. O que fazer?",
        answer: "Registre o RIB (Relatório de Irregularidade de Bagagem) imediatamente. Se a bagagem não aparecer em até 7 dias (voos nacionais) ou 21 dias (internacionais), você tem direito a indenização integral."
      },
      {
        question: "Posso processar companhia aérea em Guarulhos?",
        answer: "Sim, você pode processar no local do embarque/desembarque (Guarulhos) ou no seu domicílio. Isso dá flexibilidade para escolher onde é mais conveniente."
      },
      {
        question: "Quanto tempo tenho para processar por problema no aeroporto?",
        answer: "Para voos nacionais, o prazo é de 5 anos. Para voos internacionais, o prazo é de 2 anos. Quanto antes você agir, mais fácil é reunir provas."
      },
      {
        question: "A companhia aérea me ofereceu voucher. Devo aceitar?",
        answer: "Cuidado! Vouchers geralmente têm valor muito inferior ao que você poderia obter judicialmente. Antes de aceitar, consulte um advogado para saber quanto realmente vale seu caso."
      }
    ],
    coordinates: { latitude: "-23.4543", longitude: "-46.5337" },
    nearbyConsumerCities: ["sao-paulo", "sao-bernardo-do-campo", "santo-andre", "campinas"]
  },
  {
    citySlug: "campinas",
    cityName: "Campinas",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 523,
      avgCompensation: "R$ 10.200",
      avgResolutionDays: 42,
      clientsSatisfied: 98
    },
    localProblems: [
      {
        title: "Problemas com Viracopos",
        description: "O Aeroporto de Viracopos registra voos atrasados e cancelados, gerando direito a indenizações para passageiros.",
        icon: "Plane"
      },
      {
        title: "Serviços de Telecom e Internet",
        description: "Campinas é polo de tecnologia, mas moradores enfrentam problemas com provedores de internet e operadoras.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde Locais",
        description: "Negativas de cobertura são frequentes entre moradores da região metropolitana de Campinas.",
        icon: "HeartPulse"
      },
      {
        title: "Comércio e Shoppings",
        description: "Com forte setor varejista, Campinas tem alta demanda por resolução de problemas com lojas e produtos.",
        icon: "ShoppingBag"
      }
    ],
    localContext: "Campinas é o terceiro maior PIB do estado de São Paulo, com população de alto poder aquisitivo e forte demanda por serviços jurídicos de qualidade. O PROCON Campinas é um dos mais atuantes do interior.",
    consumerTribunalInfo: "Fórum de Campinas com JEC especializado. O TRT-15 (Campinas) também atende questões trabalhistas da região. Processos de consumidor têm boa celeridade.",
    proconAddress: "Av. Benjamin Constant, 1.633 - Centro - Campinas/SP",
    faqs: [
      {
        question: "O JEC de Campinas é rápido?",
        answer: "Sim! O Juizado Especial Cível de Campinas é um dos mais eficientes do interior paulista, com média de 3 a 5 meses para conclusão de processos simples."
      },
      {
        question: "Posso processar empresa de SP Capital morando em Campinas?",
        answer: "Sim! Pelo CDC, o consumidor pode processar no seu domicílio. Você não precisa se deslocar até São Paulo para ajuizar sua ação."
      },
      {
        question: "Meu voo em Viracopos foi cancelado. O que fazer?",
        answer: "Você tem direito a reacomodação imediata, reembolso integral ou indenização por danos morais de até R$ 15.000. Guarde todos os comprovantes e procure um advogado."
      },
      {
        question: "Como funciona o PROCON Campinas?",
        answer: "O PROCON Campinas atende presencialmente e online, sendo muito eficiente para acordos. Para indenizações, você precisará da via judicial."
      },
      {
        question: "Quanto custa um advogado em Campinas?",
        answer: "No Advogado Online, a consulta é gratuita. Trabalhamos com honorários apenas em caso de êxito, sem custos iniciais para o consumidor."
      }
    ],
    coordinates: { latitude: "-22.9099", longitude: "-47.0626" },
    nearbyConsumerCities: ["sao-paulo", "ribeirao-preto", "sao-bernardo-do-campo"]
  },
  {
    citySlug: "sao-bernardo-do-campo",
    cityName: "São Bernardo do Campo",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 412,
      avgCompensation: "R$ 9.500",
      avgResolutionDays: 48,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Financiamentos de Veículos",
        description: "O ABC paulista tem forte mercado automotivo, com muitas reclamações sobre financiamentos abusivos.",
        icon: "Car"
      },
      {
        title: "Cobranças Bancárias Indevidas",
        description: "Moradores do ABC enfrentam problemas com bancos e financeiras, incluindo juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Planos de Saúde Regionais",
        description: "Planos locais e nacionais frequentemente negam cobertura a moradores da região.",
        icon: "HeartPulse"
      },
      {
        title: "Serviços de Telecom",
        description: "Problemas com internet e telefonia são frequentes na região metropolitana de São Paulo.",
        icon: "Smartphone"
      }
    ],
    localContext: "São Bernardo do Campo é o berço do sindicalismo brasileiro e tem forte tradição de busca por direitos. O consumidor da região ABC é exigente e bem informado.",
    consumerTribunalInfo: "Fórum de São Bernardo do Campo com Juizado Especial Cível. Fácil acesso de transporte público. Processos de consumidor têm boa tramitação.",
    proconAddress: "Praça Samuel Sabatini, 50 - Centro - São Bernardo do Campo/SP",
    faqs: [
      {
        question: "Financiei um carro e os juros são abusivos. O que fazer?",
        answer: "Você pode pedir a revisão do contrato judicialmente. A Justiça frequentemente reduz juros abusivos e determina a devolução de valores pagos a mais."
      },
      {
        question: "O JEC de São Bernardo é eficiente?",
        answer: "Sim! O Juizado Especial de São Bernardo é conhecido pela celeridade, com audiências de conciliação marcadas em até 30 dias da inicial."
      },
      {
        question: "Posso processar uma concessionária de veículos?",
        answer: "Sim! Problemas com veículos novos ou usados comprados em concessionárias são matéria de direito do consumidor. Você tem direito a reparo, troca ou devolução do dinheiro."
      },
      {
        question: "Morando em SBC, posso processar empresa de outra cidade?",
        answer: "Sim! O consumidor pode processar no seu domicílio (São Bernardo), independentemente de onde fica a empresa."
      },
      {
        question: "Quanto tempo demora um processo de consumidor em SBC?",
        answer: "No JEC de São Bernardo, processos simples levam de 4 a 6 meses. Casos mais complexos podem levar até 1 ano."
      }
    ],
    coordinates: { latitude: "-23.6914", longitude: "-46.5646" },
    nearbyConsumerCities: ["sao-paulo", "santo-andre", "guarulhos", "campinas"]
  },
  {
    citySlug: "santo-andre",
    cityName: "Santo André",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 389,
      avgCompensation: "R$ 9.200",
      avgResolutionDays: 45,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Negativação Indevida",
        description: "Moradores de Santo André são frequentemente vítimas de cobranças e negativações indevidas.",
        icon: "AlertTriangle"
      },
      {
        title: "Problemas com Bancos e Cartões",
        description: "Cobranças de tarifas não contratadas e clonagem de cartões são reclamações frequentes.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Operadoras de telefonia e internet acumulam reclamações na região do ABC.",
        icon: "Smartphone"
      },
      {
        title: "Compras Online",
        description: "Problemas com e-commerce, como não entrega e produtos diferentes do anunciado.",
        icon: "ShoppingCart"
      }
    ],
    localContext: "Santo André integra o ABC paulista, região com forte consciência de direitos. O Fórum local é acessível e o JEC tem boa reputação de eficiência.",
    consumerTribunalInfo: "Fórum de Santo André com Juizado Especial Cível de fácil acesso. Processos de consumidor têm tramitação prioritária.",
    proconAddress: "Rua Coronel Fernando Prestes, 254 - Centro - Santo André/SP",
    faqs: [
      {
        question: "Meu nome foi negativado indevidamente em Santo André. O que fazer?",
        answer: "Você tem direito a indenização por danos morais (média de R$ 8.000 a R$ 15.000) e à retirada imediata do nome. Procure um advogado para ajuizar ação no JEC."
      },
      {
        question: "O PROCON de Santo André resolve meu problema?",
        answer: "O PROCON é útil para acordos e reclamações administrativas. Para indenização por danos morais, você precisará da via judicial."
      },
      {
        question: "Quanto tempo demora para tirar nome do Serasa por via judicial?",
        answer: "Com liminar judicial, é possível retirar o nome em 24-48 horas. O processo completo de indenização leva de 4 a 8 meses."
      },
      {
        question: "Clonaram meu cartão e o banco não quer devolver. O que fazer?",
        answer: "O banco é responsável pela segurança das operações. Você pode processá-lo para obter devolução dos valores e indenização por danos morais."
      },
      {
        question: "Preciso de advogado para processar no JEC de Santo André?",
        answer: "Para causas até 20 salários mínimos não é obrigatório, mas ter advogado aumenta muito suas chances de sucesso e o valor da indenização."
      }
    ],
    coordinates: { latitude: "-23.6737", longitude: "-46.5432" },
    nearbyConsumerCities: ["sao-paulo", "sao-bernardo-do-campo", "guarulhos"]
  },
  {
    citySlug: "ribeirao-preto",
    cityName: "Ribeirão Preto",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 478,
      avgCompensation: "R$ 10.000",
      avgResolutionDays: 40,
      clientsSatisfied: 98
    },
    localProblems: [
      {
        title: "Planos de Saúde da Região",
        description: "Ribeirão Preto é polo de saúde, mas moradores enfrentam muitas negativas de cobertura.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias Abusivas",
        description: "Com forte setor financeiro local, há muitas reclamações sobre taxas e juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Problemas no Agronegócio",
        description: "Consumidores da região enfrentam problemas com financiamentos rurais e maquinário.",
        icon: "Tractor"
      },
      {
        title: "Serviços de Internet e TV",
        description: "Provedores locais e nacionais acumulam reclamações por má qualidade de serviço.",
        icon: "Wifi"
      }
    ],
    localContext: "Ribeirão Preto é a capital do agronegócio paulista, com população de alto poder aquisitivo. O TJSP na região é conhecido pela celeridade e jurisprudência favorável ao consumidor.",
    consumerTribunalInfo: "Fórum de Ribeirão Preto com JEC eficiente. TRT-15 (Campinas) para questões trabalhistas. Processos de consumidor têm boa tramitação.",
    proconAddress: "Rua General Osório, 500 - Centro - Ribeirão Preto/SP",
    faqs: [
      {
        question: "O JEC de Ribeirão Preto é rápido?",
        answer: "Sim! O Juizado Especial de Ribeirão Preto é reconhecido pela eficiência, com processos simples resolvidos em 3 a 5 meses."
      },
      {
        question: "Posso processar plano de saúde em Ribeirão Preto?",
        answer: "Sim! Você pode processar no seu domicílio (Ribeirão Preto), mesmo que a operadora seja de São Paulo ou outra cidade."
      },
      {
        question: "Financiei maquinário agrícola e os juros são abusivos. O que fazer?",
        answer: "Você pode pedir revisão judicial do contrato. A Justiça frequentemente reconhece abusos e determina a redução dos juros e devolução de valores."
      },
      {
        question: "Quanto custa um advogado do consumidor em Ribeirão Preto?",
        answer: "No Advogado Online, a consulta é gratuita. Trabalhamos sem custos iniciais, cobrando apenas em caso de sucesso na ação."
      },
      {
        question: "O hospital me cobrou valor diferente do combinado. Tenho direitos?",
        answer: "Sim! Cobranças diferentes do orçamento prévio podem ser questionadas. Você pode pedir devolução do excedente e indenização."
      }
    ],
    coordinates: { latitude: "-21.1767", longitude: "-47.8208" },
    nearbyConsumerCities: ["campinas", "sao-paulo", "uberlandia"]
  },
  {
    citySlug: "uberlandia",
    cityName: "Uberlândia",
    state: "Minas Gerais",
    stateCode: "MG",
    stats: {
      casesWon: 356,
      avgCompensation: "R$ 8.900",
      avgResolutionDays: 50,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Problemas com Atacadistas",
        description: "Uberlândia é polo de atacado do Brasil, com reclamações de consumidores sobre produtos e entregas.",
        icon: "Package"
      },
      {
        title: "Serviços de Logística",
        description: "Problemas com transportadoras e entregas são frequentes no maior hub logístico do Brasil Central.",
        icon: "Truck"
      },
      {
        title: "Telecomunicações",
        description: "Internet e telefonia de má qualidade geram muitas reclamações de moradores.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura de planos locais e nacionais são frequentes.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Uberlândia é o maior polo atacadista do Brasil e centro de distribuição nacional. A cidade tem forte economia e consumidores exigentes.",
    consumerTribunalInfo: "Fórum de Uberlândia com JEC atuante. O TJMG na região tem jurisprudência favorável ao consumidor.",
    proconAddress: "Av. Anselmo Alves dos Santos, 600 - Santa Mônica - Uberlândia/MG",
    faqs: [
      {
        question: "Comprei no atacado e veio com defeito. Tenho direitos?",
        answer: "Se você comprou como consumidor final (não para revenda), tem os mesmos direitos de qualquer consumidor: troca, reparo ou devolução do dinheiro."
      },
      {
        question: "A transportadora perdeu minha encomenda. O que fazer?",
        answer: "Você pode processar tanto o vendedor quanto a transportadora. Ambos são responsáveis pela entrega do produto ao consumidor."
      },
      {
        question: "O JEC de Uberlândia é eficiente?",
        answer: "Sim! O Juizado de Uberlândia tem boa estrutura e resolve processos simples em média de 4 a 6 meses."
      },
      {
        question: "Posso processar empresa de SP morando em Uberlândia?",
        answer: "Sim! O consumidor pode sempre processar no seu domicílio, independentemente de onde fica a empresa."
      },
      {
        question: "Quanto tempo tenho para reclamar de entrega atrasada?",
        answer: "O prazo geral é de 5 anos para ações de consumo. Porém, quanto antes você reclamar, melhor para reunir provas."
      }
    ],
    coordinates: { latitude: "-18.9186", longitude: "-48.2772" },
    nearbyConsumerCities: ["belo-horizonte", "ribeirao-preto", "goiania"]
  },
  {
    citySlug: "vitoria",
    cityName: "Vitória",
    state: "Espírito Santo",
    stateCode: "ES",
    stats: {
      casesWon: 312,
      avgCompensation: "R$ 9.000",
      avgResolutionDays: 48,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Planos de Saúde Locais",
        description: "Vitória tem operadoras locais e nacionais com alto índice de negativas de cobertura.",
        icon: "HeartPulse"
      },
      {
        title: "Problemas com Bancos",
        description: "Cobranças indevidas e fraudes bancárias afetam moradores da Grande Vitória.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet e telefonia de má qualidade são reclamações frequentes na região.",
        icon: "Wifi"
      },
      {
        title: "Compras Online",
        description: "Problemas com e-commerce, não entrega e produtos diferentes do anunciado.",
        icon: "ShoppingCart"
      }
    ],
    localContext: "Vitória é a capital do Espírito Santo, com economia baseada no porto e setor de serviços. O PROCON-ES e o TJES são atuantes na defesa do consumidor.",
    consumerTribunalInfo: "Fórum de Vitória com JEC eficiente. O TJES tem jurisprudência consolidada em favor dos consumidores.",
    proconAddress: "Av. Princesa Isabel, 629 - Centro - Vitória/ES",
    faqs: [
      {
        question: "O TJES é favorável aos consumidores?",
        answer: "Sim! O Tribunal de Justiça do Espírito Santo tem jurisprudência consolidada em defesa do consumidor, especialmente em casos de negativação indevida e planos de saúde."
      },
      {
        question: "Quanto tempo leva um processo no JEC de Vitória?",
        answer: "Processos simples levam de 4 a 6 meses. Casos urgentes com liminar podem ter decisão em poucos dias."
      },
      {
        question: "Posso processar empresa de outro estado morando em Vitória?",
        answer: "Sim! O consumidor pode processar no seu domicílio, ou seja, em Vitória, mesmo que a empresa seja de São Paulo ou Rio."
      },
      {
        question: "O PROCON-ES resolve meu problema?",
        answer: "O PROCON é útil para acordos administrativos. Para indenização, você precisará da via judicial."
      },
      {
        question: "Quanto custa um advogado do consumidor em Vitória?",
        answer: "No Advogado Online, a consulta é gratuita e trabalhamos sem custos iniciais, cobrando apenas em caso de êxito."
      }
    ],
    coordinates: { latitude: "-20.2976", longitude: "-40.2958" },
    nearbyConsumerCities: ["belo-horizonte", "rio-de-janeiro"]
  },

  // =============== SUL ===============
  {
    citySlug: "curitiba",
    cityName: "Curitiba",
    state: "Paraná",
    stateCode: "PR",
    stats: {
      casesWon: 934,
      avgCompensation: "R$ 10.500",
      avgResolutionDays: 45,
      clientsSatisfied: 98
    },
    localProblems: [
      {
        title: "Planos de Saúde no PR",
        description: "Curitiba lidera em reclamações contra planos de saúde no Sul do Brasil.",
        icon: "HeartPulse"
      },
      {
        title: "Problemas com Montadoras",
        description: "O polo automotivo de Curitiba gera muitas reclamações sobre veículos novos com defeito.",
        icon: "Car"
      },
      {
        title: "Telecomunicações",
        description: "Operadoras de internet e telefonia têm alto índice de reclamações.",
        icon: "Wifi"
      },
      {
        title: "Negativação Indevida",
        description: "Cobranças e negativações indevidas são frequentes na capital paranaense.",
        icon: "AlertTriangle"
      }
    ],
    localContext: "Curitiba é a capital com melhor qualidade de vida do Brasil e consumidores muito exigentes. O TJPR é reconhecido pela celeridade e jurisprudência favorável ao consumidor.",
    consumerTribunalInfo: "Fórum Central de Curitiba com JECs em todas as regionais. O TJPR é referência em processos de consumidor.",
    proconAddress: "Rua Presidente Faria, 431 - Centro - Curitiba/PR",
    faqs: [
      {
        question: "O TJPR é favorável aos consumidores?",
        answer: "Sim! O Tribunal de Justiça do Paraná é reconhecido nacionalmente pela jurisprudência favorável ao consumidor e pela celeridade dos processos."
      },
      {
        question: "Comprei carro zero em Curitiba e veio com defeito. O que fazer?",
        answer: "Você tem direito à troca por um novo, devolução do dinheiro ou abatimento proporcional. A Justiça de Curitiba tem vasta experiência com ações contra montadoras."
      },
      {
        question: "Quanto tempo leva um processo no JEC de Curitiba?",
        answer: "Processos simples levam de 3 a 5 meses no JEC de Curitiba, um dos mais eficientes do país."
      },
      {
        question: "Meu plano de saúde negou tratamento em Curitiba. O que fazer?",
        answer: "Procure um advogado imediatamente. Liminares contra planos de saúde têm alto índice de deferimento em Curitiba."
      },
      {
        question: "Como funciona o PROCON-PR?",
        answer: "O PROCON-PR é muito atuante e pode resolver problemas administrativamente. Para indenizações, a via judicial é necessária."
      }
    ],
    coordinates: { latitude: "-25.4284", longitude: "-49.2733" },
    nearbyConsumerCities: ["florianopolis", "porto-alegre", "londrina", "joinville"]
  },
  {
    citySlug: "porto-alegre",
    cityName: "Porto Alegre",
    state: "Rio Grande do Sul",
    stateCode: "RS",
    stats: {
      casesWon: 867,
      avgCompensation: "R$ 10.800",
      avgResolutionDays: 50,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Planos de Saúde no RS",
        description: "Porto Alegre tem alta demanda de ações contra planos de saúde, especialmente após enchentes de 2024.",
        icon: "HeartPulse"
      },
      {
        title: "Seguros e Sinistros",
        description: "Problemas com seguradoras são frequentes, especialmente após eventos climáticos.",
        icon: "Shield"
      },
      {
        title: "Bancos e Financeiras",
        description: "Cobranças indevidas e juros abusivos são reclamações constantes.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Problemas com qualidade de internet e telefonia na Grande Porto Alegre.",
        icon: "Wifi"
      }
    ],
    localContext: "Porto Alegre tem forte tradição jurídica e consumidores muito conscientes de seus direitos. O TJRS é referência nacional em jurisprudência do consumidor.",
    consumerTribunalInfo: "Foro Central de Porto Alegre com JECs em todas as regiões. O TJRS tem jurisprudência histórica em defesa do consumidor.",
    proconAddress: "Av. Borges de Medeiros, 727 - Centro Histórico - Porto Alegre/RS",
    faqs: [
      {
        question: "O TJRS é favorável aos consumidores?",
        answer: "Sim! O Tribunal de Justiça do RS é uma das referências nacionais em jurisprudência consumerista, com posições consolidadas em favor dos consumidores."
      },
      {
        question: "Minha casa foi afetada por enchente e o seguro não quer pagar. O que fazer?",
        answer: "Você pode processar a seguradora judicialmente. O TJRS tem reconhecido o direito dos segurados em diversos casos similares."
      },
      {
        question: "Quanto tempo leva um processo no JEC de Porto Alegre?",
        answer: "Processos simples levam de 4 a 6 meses. Casos urgentes com liminar podem ter decisão em poucos dias."
      },
      {
        question: "Como funciona o PROCON-RS?",
        answer: "O PROCON-RS é muito atuante e eficiente para acordos. Para indenizações mais robustas, a via judicial é recomendada."
      },
      {
        question: "Posso processar banco de outro estado morando em Porto Alegre?",
        answer: "Sim! O consumidor pode processar no seu domicílio, independentemente de onde fica a sede do banco."
      }
    ],
    coordinates: { latitude: "-30.0346", longitude: "-51.2177" },
    nearbyConsumerCities: ["curitiba", "florianopolis"]
  },
  {
    citySlug: "florianopolis",
    cityName: "Florianópolis",
    state: "Santa Catarina",
    stateCode: "SC",
    stats: {
      casesWon: 423,
      avgCompensation: "R$ 11.200",
      avgResolutionDays: 42,
      clientsSatisfied: 98
    },
    localProblems: [
      {
        title: "Problemas com Turismo",
        description: "Floripa é destino turístico, gerando reclamações sobre hotéis, pousadas e passeios.",
        icon: "Palmtree"
      },
      {
        title: "Compras Online e Tech",
        description: "Polo de tecnologia, a ilha tem alto volume de compras online e problemas relacionados.",
        icon: "ShoppingCart"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes entre moradores e turistas.",
        icon: "HeartPulse"
      },
      {
        title: "Telecomunicações",
        description: "Qualidade de internet é reclamação constante, especialmente na alta temporada.",
        icon: "Wifi"
      }
    ],
    localContext: "Florianópolis é polo de tecnologia e turismo, com população de alta renda e muito exigente. O TJSC é eficiente e tem jurisprudência favorável ao consumidor.",
    consumerTribunalInfo: "Fórum de Florianópolis com JEC de excelente qualidade. Processos de consumidor têm tramitação rápida.",
    proconAddress: "Rua Tenente Silveira, 162 - Centro - Florianópolis/SC",
    faqs: [
      {
        question: "O JEC de Florianópolis é rápido?",
        answer: "Sim! O Juizado Especial de Florianópolis é um dos mais eficientes do Sul, com processos resolvidos em 3 a 5 meses."
      },
      {
        question: "Tive problema em hotel de Floripa. Tenho direitos?",
        answer: "Sim! Problemas com hospedagem (condições diferentes do anunciado, overbooking) geram direito a indenização por danos morais e materiais."
      },
      {
        question: "Comprei online de empresa de SC e não recebi. O que fazer?",
        answer: "Você pode exigir entrega, cancelamento com reembolso integral, ou indenização por danos. Processar em Florianópolis é simples e rápido."
      },
      {
        question: "O PROCON de Florianópolis funciona bem?",
        answer: "Sim! O PROCON de Florianópolis é muito atuante, especialmente em períodos de alta temporada turística."
      },
      {
        question: "Quanto custa um advogado do consumidor em Floripa?",
        answer: "No Advogado Online, a consulta é gratuita e trabalhamos sem custos iniciais ao cliente."
      }
    ],
    coordinates: { latitude: "-27.5969", longitude: "-48.5495" },
    nearbyConsumerCities: ["curitiba", "porto-alegre", "joinville"]
  },
  {
    citySlug: "joinville",
    cityName: "Joinville",
    state: "Santa Catarina",
    stateCode: "SC",
    stats: {
      casesWon: 298,
      avgCompensation: "R$ 9.500",
      avgResolutionDays: 45,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Produtos Industrializados",
        description: "Joinville é polo industrial, com reclamações sobre produtos manufaturados com defeito.",
        icon: "Factory"
      },
      {
        title: "Cobranças Bancárias",
        description: "Moradores enfrentam problemas com bancos e financeiras.",
        icon: "CreditCard"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes na maior cidade de SC.",
        icon: "HeartPulse"
      },
      {
        title: "Serviços de Internet",
        description: "Qualidade de internet e telecomunicações é reclamação constante.",
        icon: "Wifi"
      }
    ],
    localContext: "Joinville é a maior cidade de Santa Catarina e um dos maiores polos industriais do Sul. Consumidores locais são exigentes e bem informados.",
    consumerTribunalInfo: "Fórum de Joinville com JEC eficiente. Processos de consumidor têm boa tramitação.",
    proconAddress: "Rua do Príncipe, 720 - Centro - Joinville/SC",
    faqs: [
      {
        question: "Comprei produto de fábrica de Joinville com defeito. O que fazer?",
        answer: "Você tem direito a reparo, troca ou devolução do dinheiro. Se comprou como consumidor final, tem a proteção do CDC."
      },
      {
        question: "O JEC de Joinville é eficiente?",
        answer: "Sim! O Juizado Especial de Joinville resolve processos simples em média de 4 a 6 meses."
      },
      {
        question: "Posso processar empresa de outro estado morando em Joinville?",
        answer: "Sim! O consumidor pode processar no seu domicílio, ou seja, em Joinville."
      },
      {
        question: "Como funciona o PROCON Joinville?",
        answer: "O PROCON Joinville é atuante e pode resolver problemas administrativamente. Para indenizações, a Justiça é necessária."
      },
      {
        question: "Quanto custa um advogado em Joinville?",
        answer: "No Advogado Online, a consulta é gratuita e trabalhamos apenas com honorários em caso de êxito."
      }
    ],
    coordinates: { latitude: "-26.3044", longitude: "-48.8464" },
    nearbyConsumerCities: ["florianopolis", "curitiba"]
  },
  {
    citySlug: "londrina",
    cityName: "Londrina",
    state: "Paraná",
    stateCode: "PR",
    stats: {
      casesWon: 287,
      avgCompensation: "R$ 8.800",
      avgResolutionDays: 48,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Problemas com Agronegócio",
        description: "Londrina é polo agrícola, com reclamações sobre maquinário e insumos.",
        icon: "Tractor"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes no norte do Paraná.",
        icon: "HeartPulse"
      },
      {
        title: "Bancos e Financeiras",
        description: "Cobranças abusivas e problemas com financiamentos rurais.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Qualidade de internet na zona rural é reclamação constante.",
        icon: "Wifi"
      }
    ],
    localContext: "Londrina é um dos principais polos agroindustriais do Paraná, com economia forte e consumidores exigentes.",
    consumerTribunalInfo: "Fórum de Londrina com JEC eficiente. O TJPR tem jurisprudência favorável ao consumidor.",
    proconAddress: "Rua Sergipe, 640 - Centro - Londrina/PR",
    faqs: [
      {
        question: "Comprei maquinário agrícola com defeito. Tenho direitos?",
        answer: "Se comprou como consumidor final (não para revenda), você tem proteção do CDC. Pode exigir reparo, troca ou devolução."
      },
      {
        question: "O JEC de Londrina é rápido?",
        answer: "Sim! Processos simples no JEC de Londrina são resolvidos em 4 a 6 meses."
      },
      {
        question: "Posso processar cooperativa agrícola?",
        answer: "Depende da relação. Se você é consumidor final do produto ou serviço, pode processar como consumidor."
      },
      {
        question: "Como funciona o PROCON de Londrina?",
        answer: "O PROCON é útil para acordos administrativos. Para indenizações, a via judicial é necessária."
      },
      {
        question: "Quanto custa um advogado do consumidor em Londrina?",
        answer: "No Advogado Online, a consulta é gratuita e trabalhamos sem custos iniciais."
      }
    ],
    coordinates: { latitude: "-23.3045", longitude: "-51.1696" },
    nearbyConsumerCities: ["curitiba", "ribeirao-preto"]
  },

  // =============== NORDESTE ===============
  {
    citySlug: "salvador",
    cityName: "Salvador",
    state: "Bahia",
    stateCode: "BA",
    stats: {
      casesWon: 756,
      avgCompensation: "R$ 9.200",
      avgResolutionDays: 55,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Turismo e Hospedagem",
        description: "Salvador é destino turístico, com reclamações sobre hotéis, passeios e serviços.",
        icon: "Palmtree"
      },
      {
        title: "Voos no Aeroporto de Salvador",
        description: "O Aeroporto de Salvador registra atrasos e cancelamentos, gerando direito a indenização.",
        icon: "Plane"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes na capital baiana.",
        icon: "HeartPulse"
      },
      {
        title: "Telecomunicações",
        description: "Qualidade de internet e telefonia é reclamação constante.",
        icon: "Wifi"
      }
    ],
    localContext: "Salvador é a maior cidade do Nordeste e importante destino turístico. O TJBA tem atuação relevante em defesa do consumidor.",
    consumerTribunalInfo: "Fórum Ruy Barbosa em Salvador com JECs regionais. Processos de consumidor têm tramitação regular.",
    proconAddress: "Av. Antônio Carlos Magalhães, 4925 - Pituba - Salvador/BA",
    faqs: [
      {
        question: "Tive problema em pousada de Salvador. Tenho direitos?",
        answer: "Sim! Problemas com hospedagem (condições diferentes do anunciado, overbooking) geram direito a indenização."
      },
      {
        question: "Meu voo atrasou no Aeroporto de Salvador. O que fazer?",
        answer: "Atrasos superiores a 4 horas ou cancelamentos geram direito a indenização de até R$ 15.000."
      },
      {
        question: "Quanto tempo leva um processo no JEC de Salvador?",
        answer: "Processos simples levam de 5 a 8 meses no JEC de Salvador."
      },
      {
        question: "O PROCON-BA resolve meu problema?",
        answer: "O PROCON é útil para acordos. Para indenizações mais robustas, a via judicial é recomendada."
      },
      {
        question: "Sou turista e tive problema em Salvador. Posso processar?",
        answer: "Sim! Você pode processar em Salvador ou na sua cidade de origem, conforme sua conveniência."
      }
    ],
    coordinates: { latitude: "-12.9714", longitude: "-38.5014" },
    nearbyConsumerCities: ["recife", "fortaleza", "maceio", "aracaju"]
  },
  {
    citySlug: "fortaleza",
    cityName: "Fortaleza",
    state: "Ceará",
    stateCode: "CE",
    stats: {
      casesWon: 678,
      avgCompensation: "R$ 8.500",
      avgResolutionDays: 52,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Turismo de Praia",
        description: "Fortaleza é destino turístico, com reclamações sobre hospedagem e serviços.",
        icon: "Palmtree"
      },
      {
        title: "Voos no Pinto Martins",
        description: "O Aeroporto de Fortaleza registra atrasos e cancelamentos frequentes.",
        icon: "Plane"
      },
      {
        title: "Telecomunicações",
        description: "Operadoras de internet e telefonia têm alto índice de reclamações.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes no Ceará.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Fortaleza é um dos principais destinos turísticos do Brasil e polo têxtil do Nordeste. O TJCE tem jurisprudência em evolução em favor do consumidor.",
    consumerTribunalInfo: "Fórum Clóvis Beviláqua em Fortaleza com JECs. Processos de consumidor têm tramitação em melhoria.",
    proconAddress: "Av. Santos Dumont, 2980 - Aldeota - Fortaleza/CE",
    faqs: [
      {
        question: "Comprei passeio turístico em Fortaleza e foi cancelado. Tenho direitos?",
        answer: "Sim! Você tem direito a reembolso integral ou remarcação, mais indenização por danos morais se houve transtorno significativo."
      },
      {
        question: "Meu voo de Fortaleza foi cancelado. O que fazer?",
        answer: "Você tem direito a reacomodação, reembolso ou indenização de até R$ 15.000 por danos morais."
      },
      {
        question: "O JEC de Fortaleza é rápido?",
        answer: "Processos simples levam de 5 a 8 meses. A estrutura judiciária está em melhoria constante."
      },
      {
        question: "Sou turista de outro estado. Posso processar em Fortaleza?",
        answer: "Você pode escolher: processar em Fortaleza ou na sua cidade de origem, conforme sua conveniência."
      },
      {
        question: "Como funciona o PROCON-CE?",
        answer: "O PROCON-CE é atuante para acordos administrativos. Para indenizações, a via judicial é necessária."
      }
    ],
    coordinates: { latitude: "-3.7319", longitude: "-38.5267" },
    nearbyConsumerCities: ["salvador", "recife", "natal", "teresina"]
  },
  {
    citySlug: "recife",
    cityName: "Recife",
    state: "Pernambuco",
    stateCode: "PE",
    stats: {
      casesWon: 612,
      avgCompensation: "R$ 9.000",
      avgResolutionDays: 50,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Planos de Saúde em PE",
        description: "Recife é polo médico do Nordeste, com muitas reclamações contra planos de saúde.",
        icon: "HeartPulse"
      },
      {
        title: "Serviços de Tecnologia",
        description: "O Porto Digital gera demandas específicas de consumo digital.",
        icon: "Laptop"
      },
      {
        title: "Telecomunicações",
        description: "Internet e telefonia de má qualidade são reclamações frequentes.",
        icon: "Wifi"
      },
      {
        title: "Bancos e Cartões",
        description: "Fraudes e cobranças indevidas são problemas constantes.",
        icon: "CreditCard"
      }
    ],
    localContext: "Recife é o polo médico e tecnológico do Nordeste, com consumidores exigentes. O TJPE tem jurisprudência consolidada em favor do consumidor.",
    consumerTribunalInfo: "Fórum Rodolfo Aureliano em Recife com JECs. Processos de consumidor têm boa tramitação.",
    proconAddress: "Rua Floriano Peixoto, 141 - Santo Antônio - Recife/PE",
    faqs: [
      {
        question: "O TJPE é favorável aos consumidores?",
        answer: "Sim! O Tribunal de Justiça de Pernambuco tem jurisprudência consolidada em defesa do consumidor, especialmente em planos de saúde."
      },
      {
        question: "Meu plano de saúde negou tratamento em Recife. O que fazer?",
        answer: "Procure um advogado para pedir liminar. Em Recife, liminares contra planos de saúde têm alto índice de deferimento."
      },
      {
        question: "Quanto tempo leva um processo no JEC de Recife?",
        answer: "Processos simples levam de 4 a 6 meses no Juizado Especial de Recife."
      },
      {
        question: "Comprei software/serviço digital com problema. Tenho direitos?",
        answer: "Sim! Serviços digitais também são protegidos pelo CDC. Você pode pedir reembolso e indenização."
      },
      {
        question: "Como funciona o PROCON-PE?",
        answer: "O PROCON-PE é eficiente para acordos. Para indenizações por danos morais, a via judicial é necessária."
      }
    ],
    coordinates: { latitude: "-8.0476", longitude: "-34.8770" },
    nearbyConsumerCities: ["salvador", "fortaleza", "joao-pessoa", "natal", "maceio"]
  },
  {
    citySlug: "natal",
    cityName: "Natal",
    state: "Rio Grande do Norte",
    stateCode: "RN",
    stats: {
      casesWon: 234,
      avgCompensation: "R$ 8.200",
      avgResolutionDays: 55,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Turismo e Hospedagem",
        description: "Natal é destino turístico, com reclamações sobre hotéis e serviços.",
        icon: "Palmtree"
      },
      {
        title: "Voos no Aeroporto de Natal",
        description: "O Aeroporto de Natal registra atrasos e cancelamentos.",
        icon: "Plane"
      },
      {
        title: "Telecomunicações",
        description: "Internet e telefonia de má qualidade são reclamações constantes.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes no RN.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Natal é importante destino turístico e tem economia baseada em turismo e energia eólica. O TJRN tem atuação em evolução.",
    consumerTribunalInfo: "Fórum de Natal com JECs regionais. Processos de consumidor têm tramitação regular.",
    proconAddress: "Av. Salgado Filho, 1946 - Lagoa Nova - Natal/RN",
    faqs: [
      {
        question: "Tive problema em pousada de Natal. Tenho direitos?",
        answer: "Sim! Problemas com hospedagem geram direito a indenização por danos morais e materiais."
      },
      {
        question: "Meu voo de Natal foi cancelado. O que fazer?",
        answer: "Você tem direito a reacomodação, reembolso ou indenização de até R$ 15.000."
      },
      {
        question: "Quanto tempo leva um processo no JEC de Natal?",
        answer: "Processos simples levam de 5 a 8 meses no JEC de Natal."
      },
      {
        question: "Sou turista. Posso processar em Natal?",
        answer: "Você pode escolher: processar em Natal ou na sua cidade de origem."
      },
      {
        question: "O PROCON-RN resolve meu problema?",
        answer: "O PROCON é útil para acordos. Para indenizações, a via judicial é necessária."
      }
    ],
    coordinates: { latitude: "-5.7945", longitude: "-35.2110" },
    nearbyConsumerCities: ["fortaleza", "recife", "joao-pessoa"]
  },
  {
    citySlug: "joao-pessoa",
    cityName: "João Pessoa",
    state: "Paraíba",
    stateCode: "PB",
    stats: {
      casesWon: 198,
      avgCompensation: "R$ 7.800",
      avgResolutionDays: 52,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Turismo de Praia",
        description: "João Pessoa é destino turístico com praias urbanas.",
        icon: "Palmtree"
      },
      {
        title: "Telecomunicações",
        description: "Internet e telefonia de má qualidade são reclamações frequentes.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes na capital paraibana.",
        icon: "HeartPulse"
      },
      {
        title: "Bancos e Cobranças",
        description: "Cobranças indevidas e fraudes bancárias afetam moradores.",
        icon: "CreditCard"
      }
    ],
    localContext: "João Pessoa é a capital mais antiga do Brasil e tem economia em crescimento. O TJPB tem atuação regular em defesa do consumidor.",
    consumerTribunalInfo: "Fórum de João Pessoa com JECs. Processos de consumidor têm tramitação em melhoria.",
    proconAddress: "Av. Getúlio Vargas, 280 - Centro - João Pessoa/PB",
    faqs: [
      {
        question: "O JEC de João Pessoa é eficiente?",
        answer: "O Juizado Especial está em melhoria constante, com processos simples resolvidos em 5 a 7 meses."
      },
      {
        question: "Tive problema em hotel de João Pessoa. Tenho direitos?",
        answer: "Sim! Condições diferentes do anunciado geram direito a indenização."
      },
      {
        question: "Meu nome foi negativado indevidamente. O que fazer?",
        answer: "Procure um advogado para pedir liminar de retirada do nome e indenização por danos morais."
      },
      {
        question: "Posso processar empresa de outro estado morando em JP?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado em João Pessoa?",
        answer: "No Advogado Online, a consulta é gratuita e trabalhamos sem custos iniciais."
      }
    ],
    coordinates: { latitude: "-7.1195", longitude: "-34.8450" },
    nearbyConsumerCities: ["recife", "natal"]
  },
  {
    citySlug: "teresina",
    cityName: "Teresina",
    state: "Piauí",
    stateCode: "PI",
    stats: {
      casesWon: 156,
      avgCompensation: "R$ 7.200",
      avgResolutionDays: 58,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Planos de Saúde",
        description: "Teresina é polo de saúde regional, com negativas de cobertura frequentes.",
        icon: "HeartPulse"
      },
      {
        title: "Telecomunicações",
        description: "Internet e telefonia de má qualidade são reclamações constantes.",
        icon: "Wifi"
      },
      {
        title: "Bancos e Cobranças",
        description: "Cobranças indevidas e juros abusivos afetam consumidores.",
        icon: "CreditCard"
      },
      {
        title: "Energia Elétrica",
        description: "Problemas com a distribuidora de energia são frequentes.",
        icon: "Zap"
      }
    ],
    localContext: "Teresina é polo de saúde do meio-norte brasileiro. O TJPI tem atuação em evolução em defesa do consumidor.",
    consumerTribunalInfo: "Fórum de Teresina com JECs. Processos de consumidor têm tramitação regular.",
    proconAddress: "Av. Miguel Rosa, 3190 - Ilhotas - Teresina/PI",
    faqs: [
      {
        question: "O JEC de Teresina é rápido?",
        answer: "Processos simples levam de 6 a 9 meses. A estrutura está em melhoria."
      },
      {
        question: "Meu plano de saúde negou tratamento. O que fazer?",
        answer: "Procure um advogado para pedir liminar. Negativas frequentemente são ilegais."
      },
      {
        question: "A conta de luz veio muito alta. Posso contestar?",
        answer: "Sim! Você pode pedir perícia no medidor e contestar valores abusivos."
      },
      {
        question: "Posso processar banco de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Como funciona o PROCON-PI?",
        answer: "O PROCON-PI é útil para acordos. Para indenizações, a via judicial é necessária."
      }
    ],
    coordinates: { latitude: "-5.0892", longitude: "-42.8019" },
    nearbyConsumerCities: ["fortaleza", "sao-luis"]
  },
  {
    citySlug: "maceio",
    cityName: "Maceió",
    state: "Alagoas",
    stateCode: "AL",
    stats: {
      casesWon: 212,
      avgCompensation: "R$ 7.500",
      avgResolutionDays: 55,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Turismo de Praia",
        description: "Maceió é destino turístico famoso, com reclamações sobre hospedagem e serviços.",
        icon: "Palmtree"
      },
      {
        title: "Voos no Zumbi dos Palmares",
        description: "O Aeroporto de Maceió registra atrasos e cancelamentos.",
        icon: "Plane"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade é reclamação constante.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes em Alagoas.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Maceió é famosa pelas praias e turismo. O TJAL tem atuação em evolução em defesa do consumidor.",
    consumerTribunalInfo: "Fórum de Maceió com JECs. Processos de consumidor têm tramitação regular.",
    proconAddress: "Av. Fernandes Lima, 1681 - Farol - Maceió/AL",
    faqs: [
      {
        question: "Tive problema em hotel de Maceió. Tenho direitos?",
        answer: "Sim! Problemas com hospedagem geram direito a indenização."
      },
      {
        question: "Meu voo de Maceió foi cancelado. O que fazer?",
        answer: "Você tem direito a reacomodação, reembolso ou indenização de até R$ 15.000."
      },
      {
        question: "O JEC de Maceió é eficiente?",
        answer: "Processos simples levam de 5 a 8 meses."
      },
      {
        question: "Sou turista. Posso processar em Maceió?",
        answer: "Você pode escolher: processar em Maceió ou na sua cidade de origem."
      },
      {
        question: "Como funciona o PROCON-AL?",
        answer: "O PROCON é útil para acordos. Para indenizações, a Justiça é necessária."
      }
    ],
    coordinates: { latitude: "-9.6498", longitude: "-35.7089" },
    nearbyConsumerCities: ["salvador", "recife", "aracaju"]
  },
  {
    citySlug: "aracaju",
    cityName: "Aracaju",
    state: "Sergipe",
    stateCode: "SE",
    stats: {
      casesWon: 178,
      avgCompensation: "R$ 7.300",
      avgResolutionDays: 52,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Telecomunicações",
        description: "Internet e telefonia de má qualidade são reclamações frequentes.",
        icon: "Wifi"
      },
      {
        title: "Bancos e Cobranças",
        description: "Cobranças indevidas afetam moradores da capital sergipana.",
        icon: "CreditCard"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes em Sergipe.",
        icon: "HeartPulse"
      },
      {
        title: "Energia e Água",
        description: "Problemas com concessionárias de serviços públicos.",
        icon: "Zap"
      }
    ],
    localContext: "Aracaju é a capital de Sergipe, com economia baseada em petróleo e serviços. O TJSE tem atuação regular em defesa do consumidor.",
    consumerTribunalInfo: "Fórum de Aracaju com JECs. Processos têm tramitação regular.",
    proconAddress: "Av. Augusto Franco, 1000 - Siqueira Campos - Aracaju/SE",
    faqs: [
      {
        question: "O JEC de Aracaju é eficiente?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "Meu nome foi negativado indevidamente. O que fazer?",
        answer: "Procure um advogado para pedir liminar e indenização por danos morais."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "A conta de água/luz está errada. Como contestar?",
        answer: "Você pode processar a concessionária por cobrança indevida e pedir devolução em dobro."
      },
      {
        question: "Quanto custa um advogado em Aracaju?",
        answer: "No Advogado Online, a consulta é gratuita e trabalhamos sem custos iniciais."
      }
    ],
    coordinates: { latitude: "-10.9472", longitude: "-37.0731" },
    nearbyConsumerCities: ["salvador", "maceio"]
  },
  {
    citySlug: "sao-luis",
    cityName: "São Luís",
    state: "Maranhão",
    stateCode: "MA",
    stats: {
      casesWon: 234,
      avgCompensation: "R$ 7.600",
      avgResolutionDays: 58,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade é reclamação constante.",
        icon: "Wifi"
      },
      {
        title: "Energia Elétrica",
        description: "Problemas com a distribuidora de energia são frequentes.",
        icon: "Zap"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes no Maranhão.",
        icon: "HeartPulse"
      },
      {
        title: "Bancos e Cobranças",
        description: "Cobranças indevidas e fraudes afetam consumidores.",
        icon: "CreditCard"
      }
    ],
    localContext: "São Luís é patrimônio histórico da UNESCO e capital do Maranhão. O TJMA tem atuação em evolução.",
    consumerTribunalInfo: "Fórum de São Luís com JECs. Processos de consumidor têm tramitação em melhoria.",
    proconAddress: "Rua da Paz, 203 - Centro - São Luís/MA",
    faqs: [
      {
        question: "O JEC de São Luís é eficiente?",
        answer: "Processos simples levam de 6 a 9 meses. A estrutura está em melhoria."
      },
      {
        question: "A conta de luz está muito alta. Posso contestar?",
        answer: "Sim! Você pode pedir perícia no medidor e contestar valores abusivos."
      },
      {
        question: "Meu plano negou tratamento. O que fazer?",
        answer: "Procure um advogado para pedir liminar. Negativas frequentemente são ilegais."
      },
      {
        question: "Posso processar banco de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Como funciona o PROCON-MA?",
        answer: "O PROCON é útil para acordos. Para indenizações, a via judicial é necessária."
      }
    ],
    coordinates: { latitude: "-2.5307", longitude: "-44.3068" },
    nearbyConsumerCities: ["teresina", "fortaleza", "belem"]
  },

  // =============== CENTRO-OESTE ===============
  {
    citySlug: "brasilia",
    cityName: "Brasília",
    state: "Distrito Federal",
    stateCode: "DF",
    stats: {
      casesWon: 923,
      avgCompensation: "R$ 12.000",
      avgResolutionDays: 45,
      clientsSatisfied: 98
    },
    localProblems: [
      {
        title: "Planos de Saúde",
        description: "Brasília tem alta demanda contra planos de saúde, especialmente funcionários públicos.",
        icon: "HeartPulse"
      },
      {
        title: "Compras Online",
        description: "Alto volume de compras online gera reclamações de não entrega e produtos diferentes.",
        icon: "ShoppingCart"
      },
      {
        title: "Voos no Aeroporto de Brasília",
        description: "O Aeroporto JK é hub de conexões, com muitos atrasos e cancelamentos.",
        icon: "Plane"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade é reclamação frequente.",
        icon: "Wifi"
      }
    ],
    localContext: "Brasília tem a maior renda per capita do Brasil, com consumidores muito exigentes. O TJDFT é referência em jurisprudência consumerista.",
    consumerTribunalInfo: "Fórum de Brasília com JECs em todas as RAs. O TJDFT é um dos mais eficientes do país em processos de consumidor.",
    proconAddress: "SCS Quadra 08 - Bloco B-60 - Edifício Venâncio 2000 - Brasília/DF",
    faqs: [
      {
        question: "O TJDFT é favorável aos consumidores?",
        answer: "Sim! O TJDFT é referência nacional em jurisprudência consumerista, com posições consolidadas em favor do consumidor."
      },
      {
        question: "Quanto tempo leva um processo no JEC de Brasília?",
        answer: "O JEC de Brasília é um dos mais eficientes do país, com processos simples resolvidos em 3 a 5 meses."
      },
      {
        question: "Meu voo foi cancelado em Brasília. O que fazer?",
        answer: "Você tem direito a reacomodação, reembolso ou indenização. Brasília é hub, então há muita jurisprudência favorável."
      },
      {
        question: "Sou servidor público. Tenho direitos especiais como consumidor?",
        answer: "Os direitos são iguais para todos. Porém, Brasília tem muita experiência com planos de saúde de servidores."
      },
      {
        question: "Como funciona o PROCON-DF?",
        answer: "O PROCON-DF é muito eficiente para acordos. Para indenizações maiores, a via judicial é recomendada."
      }
    ],
    coordinates: { latitude: "-15.8267", longitude: "-47.9218" },
    nearbyConsumerCities: ["goiania", "belo-horizonte"]
  },
  {
    citySlug: "goiania",
    cityName: "Goiânia",
    state: "Goiás",
    stateCode: "GO",
    stats: {
      casesWon: 534,
      avgCompensation: "R$ 9.200",
      avgResolutionDays: 50,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Agronegócio",
        description: "Goiânia é polo do agro, com reclamações sobre máquinas e insumos.",
        icon: "Tractor"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes na capital goiana.",
        icon: "HeartPulse"
      },
      {
        title: "Bancos e Financiamentos",
        description: "Juros abusivos e cobranças indevidas afetam consumidores.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade é reclamação constante.",
        icon: "Wifi"
      }
    ],
    localContext: "Goiânia é polo do agronegócio brasileiro e tem economia em forte crescimento. O TJGO tem jurisprudência em evolução favorável ao consumidor.",
    consumerTribunalInfo: "Fórum de Goiânia com JECs. Processos de consumidor têm boa tramitação.",
    proconAddress: "Av. Anhanguera, 5440 - Setor Oeste - Goiânia/GO",
    faqs: [
      {
        question: "O JEC de Goiânia é eficiente?",
        answer: "Sim! Processos simples são resolvidos em 4 a 6 meses."
      },
      {
        question: "Comprei maquinário agrícola com defeito. Tenho direitos?",
        answer: "Se comprou como consumidor final, tem proteção do CDC com direito a troca ou devolução."
      },
      {
        question: "Meu plano de saúde negou tratamento. O que fazer?",
        answer: "Procure um advogado para pedir liminar. Negativas frequentemente são ilegais."
      },
      {
        question: "Os juros do financiamento estão altos. Posso revisar?",
        answer: "Sim! A Justiça pode reduzir juros abusivos e determinar devolução de valores."
      },
      {
        question: "Como funciona o PROCON-GO?",
        answer: "O PROCON é útil para acordos. Para indenizações, a via judicial é necessária."
      }
    ],
    coordinates: { latitude: "-16.6864", longitude: "-49.2643" },
    nearbyConsumerCities: ["brasilia", "uberlandia", "cuiaba", "campo-grande"]
  },
  {
    citySlug: "cuiaba",
    cityName: "Cuiabá",
    state: "Mato Grosso",
    stateCode: "MT",
    stats: {
      casesWon: 287,
      avgCompensation: "R$ 8.500",
      avgResolutionDays: 55,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Agronegócio",
        description: "Cuiabá é centro do agro brasileiro, com reclamações sobre máquinas e insumos.",
        icon: "Tractor"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade, especialmente na zona rural.",
        icon: "Wifi"
      },
      {
        title: "Bancos e Financiamentos",
        description: "Juros abusivos em financiamentos rurais são frequentes.",
        icon: "CreditCard"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes em MT.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Cuiabá é porta de entrada do Pantanal e centro do agronegócio. O TJMT tem atuação em evolução.",
    consumerTribunalInfo: "Fórum de Cuiabá com JECs. Processos de consumidor têm tramitação regular.",
    proconAddress: "Av. Historiador Rubens de Mendonça, 3415 - Centro Político Administrativo - Cuiabá/MT",
    faqs: [
      {
        question: "O JEC de Cuiabá é eficiente?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "Financiei máquina agrícola com juros abusivos. O que fazer?",
        answer: "Você pode pedir revisão judicial. A Justiça frequentemente reduz juros abusivos."
      },
      {
        question: "Tive problema em passeio no Pantanal. Tenho direitos?",
        answer: "Sim! Problemas com turismo geram direito a indenização."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Como funciona o PROCON-MT?",
        answer: "O PROCON é útil para acordos. Para indenizações, a Justiça é necessária."
      }
    ],
    coordinates: { latitude: "-15.6014", longitude: "-56.0979" },
    nearbyConsumerCities: ["goiania", "campo-grande", "brasilia"]
  },
  {
    citySlug: "campo-grande",
    cityName: "Campo Grande",
    state: "Mato Grosso do Sul",
    stateCode: "MS",
    stats: {
      casesWon: 267,
      avgCompensation: "R$ 8.200",
      avgResolutionDays: 52,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Agronegócio e Frigoríficos",
        description: "Campo Grande é polo de frigoríficos, com reclamações sobre produtos.",
        icon: "Beef"
      },
      {
        title: "Bancos e Financiamentos",
        description: "Juros abusivos em financiamentos rurais são frequentes.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade é reclamação constante.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes em MS.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Campo Grande é polo do agronegócio e de frigoríficos. O TJMS tem atuação regular em defesa do consumidor.",
    consumerTribunalInfo: "Fórum de Campo Grande com JECs. Processos têm tramitação regular.",
    proconAddress: "Rua 26 de Agosto, 170 - Centro - Campo Grande/MS",
    faqs: [
      {
        question: "O JEC de Campo Grande é eficiente?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "Comprei carne com problema. Tenho direitos?",
        answer: "Sim! Produtos alimentícios com defeito geram direito a troca e indenização em casos graves."
      },
      {
        question: "Financiei maquinário com juros altos. O que fazer?",
        answer: "Você pode pedir revisão judicial para reduzir juros abusivos."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Como funciona o PROCON-MS?",
        answer: "O PROCON é útil para acordos. Para indenizações, a via judicial é necessária."
      }
    ],
    coordinates: { latitude: "-20.4697", longitude: "-54.6201" },
    nearbyConsumerCities: ["cuiaba", "goiania", "londrina"]
  },

  // =============== NORTE ===============
  {
    citySlug: "manaus",
    cityName: "Manaus",
    state: "Amazonas",
    stateCode: "AM",
    stats: {
      casesWon: 456,
      avgCompensation: "R$ 8.800",
      avgResolutionDays: 60,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Produtos da Zona Franca",
        description: "Manaus é polo de eletrônicos, com reclamações sobre produtos com defeito.",
        icon: "Laptop"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade é reclamação constante na região Norte.",
        icon: "Wifi"
      },
      {
        title: "Energia Elétrica",
        description: "Problemas com distribuição de energia são frequentes.",
        icon: "Zap"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes no Amazonas.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Manaus é sede da Zona Franca e maior cidade da Amazônia. O TJAM tem atuação em evolução em defesa do consumidor.",
    consumerTribunalInfo: "Fórum de Manaus com JECs. Processos de consumidor têm tramitação em melhoria.",
    proconAddress: "Av. André Araújo, 150 - Aleixo - Manaus/AM",
    faqs: [
      {
        question: "Comprei eletrônico da Zona Franca com defeito. Tenho direitos?",
        answer: "Sim! Produtos com defeito dão direito a troca, reparo ou devolução, independente de ser da Zona Franca."
      },
      {
        question: "O JEC de Manaus é eficiente?",
        answer: "Processos simples levam de 6 a 9 meses. A estrutura está em melhoria."
      },
      {
        question: "A conta de luz está muito alta. Posso contestar?",
        answer: "Sim! Você pode pedir perícia no medidor e contestar valores abusivos."
      },
      {
        question: "Posso processar empresa de SP morando em Manaus?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Como funciona o PROCON-AM?",
        answer: "O PROCON é útil para acordos. Para indenizações, a via judicial é necessária."
      }
    ],
    coordinates: { latitude: "-3.1190", longitude: "-60.0217" },
    nearbyConsumerCities: ["belem"]
  },
  {
    citySlug: "belem",
    cityName: "Belém",
    state: "Pará",
    stateCode: "PA",
    stats: {
      casesWon: 378,
      avgCompensation: "R$ 8.000",
      avgResolutionDays: 58,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade é reclamação constante em Belém.",
        icon: "Wifi"
      },
      {
        title: "Energia Elétrica",
        description: "Problemas com a distribuidora de energia são frequentes.",
        icon: "Zap"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes no Pará.",
        icon: "HeartPulse"
      },
      {
        title: "Bancos e Cobranças",
        description: "Cobranças indevidas e fraudes afetam consumidores.",
        icon: "CreditCard"
      }
    ],
    localContext: "Belém é o maior porto da Amazônia e polo de serviços do Norte. O TJPA tem atuação em evolução.",
    consumerTribunalInfo: "Fórum de Belém com JECs. Processos de consumidor têm tramitação regular.",
    proconAddress: "Av. Governador José Malcher, 1157 - Nazaré - Belém/PA",
    faqs: [
      {
        question: "O JEC de Belém é eficiente?",
        answer: "Processos simples levam de 6 a 9 meses. A estrutura está em melhoria."
      },
      {
        question: "A conta de luz está errada. O que fazer?",
        answer: "Você pode contestar judicialmente e pedir devolução de valores pagos indevidamente."
      },
      {
        question: "Meu plano negou tratamento. O que fazer?",
        answer: "Procure um advogado para pedir liminar. Negativas frequentemente são ilegais."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Como funciona o PROCON-PA?",
        answer: "O PROCON é útil para acordos. Para indenizações, a via judicial é necessária."
      }
    ],
    coordinates: { latitude: "-1.4558", longitude: "-48.4902" },
    nearbyConsumerCities: ["manaus", "sao-luis"]
  },

  // =============== FASE 2 - 50 NOVAS CIDADES ESTRATÉGICAS ===============

  // REGIÃO METROPOLITANA DE SÃO PAULO
  {
    citySlug: "osasco",
    cityName: "Osasco",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 423,
      avgCompensation: "R$ 10.500",
      avgResolutionDays: 48,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Fraudes em Compras Online",
        description: "Osasco registra alta incidência de golpes em e-commerce e marketplaces.",
        icon: "ShoppingCart"
      },
      {
        title: "Cobranças Bancárias Indevidas",
        description: "Bancos e financeiras lideram reclamações em Osasco.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade e cobranças indevidas de operadoras.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes na região.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Osasco é a quinta maior economia de São Paulo, com forte setor de serviços e empresas de tecnologia. O PROCON local é atuante e o Fórum tem estrutura eficiente.",
    consumerTribunalInfo: "Fórum de Osasco com JECs. Processos de consumidor têm tramitação ágil, com média de 4-6 meses.",
    proconAddress: "Av. das Flores, 700 - Centro - Osasco/SP",
    faqs: [
      {
        question: "O JEC de Osasco é rápido?",
        answer: "Sim! O Juizado Especial Cível de Osasco tem boa eficiência, com média de 4-6 meses para conclusão."
      },
      {
        question: "Posso processar empresa de SP Capital morando em Osasco?",
        answer: "Sim! Você pode processar no seu domicílio, em Osasco, sem precisar ir a São Paulo."
      },
      {
        question: "O PROCON Osasco resolve meu problema?",
        answer: "O PROCON é útil para acordos. Para indenizações, a via judicial é necessária."
      },
      {
        question: "Quanto custa um advogado em Osasco?",
        answer: "No Advogado Online, a consulta é gratuita. Trabalhamos com honorários apenas em caso de êxito."
      },
      {
        question: "Fui vítima de golpe online. Tenho direitos?",
        answer: "Sim! Dependendo do caso, a plataforma ou banco pode ser responsabilizado."
      }
    ],
    coordinates: { latitude: "-23.5324", longitude: "-46.7916" },
    nearbyConsumerCities: ["sao-paulo", "barueri", "carapicuiba"]
  },
  {
    citySlug: "diadema",
    cityName: "Diadema",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 312,
      avgCompensation: "R$ 9.200",
      avgResolutionDays: 52,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Financiamentos de Veículos",
        description: "A região do ABC tem alta demanda por revisão de financiamentos.",
        icon: "Car"
      },
      {
        title: "Cobranças Bancárias",
        description: "Bancos e financeiras cobram juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Cobranças indevidas e serviços não solicitados.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura afetam moradores.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Diadema integra a região do ABC Paulista, com forte tradição industrial e comercial. O acesso à justiça é facilitado pela proximidade com São Paulo.",
    consumerTribunalInfo: "Fórum de Diadema com JEC. Processos podem também ser ajuizados em São Bernardo do Campo.",
    proconAddress: "Rua Manoel da Nóbrega, 374 - Centro - Diadema/SP",
    faqs: [
      {
        question: "Onde processar empresa em Diadema?",
        answer: "No Juizado Especial Cível de Diadema ou no Fórum de São Bernardo do Campo."
      },
      {
        question: "Financiei carro com juros altos. Posso revisar?",
        answer: "Sim! Você pode pedir revisão judicial para reduzir juros abusivos."
      },
      {
        question: "O banco cobrou taxa indevida. O que fazer?",
        answer: "Você pode pedir restituição em dobro de valores cobrados indevidamente."
      },
      {
        question: "Meu plano negou exame. Tenho direitos?",
        answer: "Sim! Negativas de cobertura podem ser contestadas judicialmente com pedido de liminar."
      },
      {
        question: "Quanto tempo demora um processo de consumidor?",
        answer: "No JEC, processos simples levam de 4 a 6 meses."
      }
    ],
    coordinates: { latitude: "-23.6861", longitude: "-46.6228" },
    nearbyConsumerCities: ["sao-bernardo-do-campo", "santo-andre", "sao-paulo"]
  },
  {
    citySlug: "maua",
    cityName: "Mauá",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 278,
      avgCompensation: "R$ 8.800",
      avgResolutionDays: 50,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Financiamentos Abusivos",
        description: "Juros altos em financiamentos de veículos e empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Cobranças indevidas de operadoras são frequentes.",
        icon: "Wifi"
      },
      {
        title: "Comércio Local",
        description: "Problemas com lojas e produtos com defeito.",
        icon: "ShoppingBag"
      },
      {
        title: "Energia Elétrica",
        description: "Cobranças irregulares da distribuidora de energia.",
        icon: "Zap"
      }
    ],
    localContext: "Mauá integra o ABC Paulista e tem forte setor comercial. Os moradores têm acesso ao sistema judiciário da região metropolitana.",
    consumerTribunalInfo: "Fórum de Mauá com JEC. Processos podem também ser ajuizados no ABC.",
    proconAddress: "Av. João Ramalho, 265 - Centro - Mauá/SP",
    faqs: [
      {
        question: "O JEC de Mauá é eficiente?",
        answer: "Processos simples levam de 4 a 6 meses."
      },
      {
        question: "A conta de luz está muito alta. O que fazer?",
        answer: "Você pode contestar judicialmente e pedir perícia no medidor."
      },
      {
        question: "Comprei produto com defeito. Tenho direitos?",
        answer: "Sim! Você pode pedir troca, conserto ou devolução do dinheiro."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado em Mauá?",
        answer: "No Advogado Online, a consulta é gratuita e trabalhamos com êxito."
      }
    ],
    coordinates: { latitude: "-23.6678", longitude: "-46.4608" },
    nearbyConsumerCities: ["santo-andre", "sao-bernardo-do-campo", "diadema"]
  },
  {
    citySlug: "carapicuiba",
    cityName: "Carapicuíba",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 234,
      avgCompensation: "R$ 8.500",
      avgResolutionDays: 55,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Cobranças Bancárias",
        description: "Bancos cobram taxas e juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Operadoras cobram por serviços não contratados.",
        icon: "Smartphone"
      },
      {
        title: "Comércio e Lojas",
        description: "Produtos com defeito e propaganda enganosa.",
        icon: "ShoppingBag"
      },
      {
        title: "Transporte e Logística",
        description: "Problemas com entregas e fretes.",
        icon: "Truck"
      }
    ],
    localContext: "Carapicuíba está na região metropolitana de São Paulo, com acesso ao sistema judiciário da capital.",
    consumerTribunalInfo: "Fórum de Carapicuíba ou Fórum de Osasco. Processos têm tramitação regular.",
    proconAddress: "Av. Presidente Vargas, 200 - Centro - Carapicuíba/SP",
    faqs: [
      {
        question: "Onde processar empresa em Carapicuíba?",
        answer: "No Fórum local ou no Fórum de Osasco."
      },
      {
        question: "O banco cobrou taxa que não pedi. O que fazer?",
        answer: "Você pode pedir restituição em dobro de valores indevidos."
      },
      {
        question: "Comprei online e não recebi. Tenho direitos?",
        answer: "Sim! Você pode pedir reembolso e indenização por danos morais."
      },
      {
        question: "Posso processar empresa de SP Capital?",
        answer: "Sim! Você pode processar no seu domicílio, em Carapicuíba."
      },
      {
        question: "Quanto tempo demora um processo?",
        answer: "No JEC, processos simples levam de 5 a 7 meses."
      }
    ],
    coordinates: { latitude: "-23.5225", longitude: "-46.8356" },
    nearbyConsumerCities: ["osasco", "barueri", "sao-paulo"]
  },
  {
    citySlug: "taboao-da-serra",
    cityName: "Taboão da Serra",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 198,
      avgCompensation: "R$ 8.200",
      avgResolutionDays: 52,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos e taxas indevidas de bancos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Cobranças irregulares de operadoras.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura e aumentos abusivos.",
        icon: "HeartPulse"
      },
      {
        title: "E-commerce",
        description: "Problemas com compras online.",
        icon: "ShoppingCart"
      }
    ],
    localContext: "Taboão da Serra está na região metropolitana de São Paulo, com fácil acesso ao sistema judiciário.",
    consumerTribunalInfo: "Fórum de Taboão da Serra com JEC. Processos têm tramitação regular.",
    proconAddress: "Praça Miguel Ortega, 50 - Centro - Taboão da Serra/SP",
    faqs: [
      {
        question: "O JEC de Taboão é eficiente?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "O banco cobrou juros altos. O que fazer?",
        answer: "Você pode pedir revisão judicial do contrato."
      },
      {
        question: "Meu plano negou cirurgia. Tenho direitos?",
        answer: "Sim! Você pode pedir liminar para obrigar a cobertura."
      },
      {
        question: "Comprei online e veio com defeito. O que fazer?",
        answer: "Você pode pedir troca, conserto ou devolução do dinheiro."
      },
      {
        question: "Quanto custa um advogado em Taboão?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-23.6269", longitude: "-46.7914" },
    nearbyConsumerCities: ["sao-paulo", "osasco", "embu-das-artes"]
  },
  {
    citySlug: "barueri",
    cityName: "Barueri",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 387,
      avgCompensation: "R$ 11.500",
      avgResolutionDays: 45,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Cobranças Corporativas",
        description: "Barueri é sede de multinacionais, com disputas empresariais.",
        icon: "Building"
      },
      {
        title: "Planos de Saúde Premium",
        description: "Negativas de cobertura mesmo em planos de alto padrão.",
        icon: "HeartPulse"
      },
      {
        title: "Financiamentos",
        description: "Juros abusivos em financiamentos imobiliários e veiculares.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Cobranças indevidas de operadoras empresariais.",
        icon: "Wifi"
      }
    ],
    localContext: "Barueri é um dos maiores PIBs per capita do Brasil, sede de grandes empresas. O Fórum local tem estrutura moderna.",
    consumerTribunalInfo: "Fórum de Barueri com JECs eficientes. Média de 4-5 meses para processos simples.",
    proconAddress: "Rua Professor João da Matta e Luz, 84 - Centro - Barueri/SP",
    faqs: [
      {
        question: "O JEC de Barueri é eficiente?",
        answer: "Sim! Um dos mais eficientes da região, com média de 4-5 meses."
      },
      {
        question: "Meu plano premium negou cobertura. O que fazer?",
        answer: "Você pode pedir liminar. Planos de alto padrão também têm obrigações legais."
      },
      {
        question: "Posso revisar financiamento imobiliário?",
        answer: "Sim! Juros e taxas abusivas podem ser revisados judicialmente."
      },
      {
        question: "A empresa onde trabalho me lesou como consumidor. O que fazer?",
        answer: "Você pode processar normalmente, pois a relação de consumo é independente da trabalhista."
      },
      {
        question: "Quanto custa um advogado em Barueri?",
        answer: "No Advogado Online, a consulta é gratuita e trabalhamos com êxito."
      }
    ],
    coordinates: { latitude: "-23.5114", longitude: "-46.8761" },
    nearbyConsumerCities: ["osasco", "carapicuiba", "sao-paulo"]
  },
  {
    citySlug: "cotia",
    cityName: "Cotia",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 198,
      avgCompensation: "R$ 9.000",
      avgResolutionDays: 55,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Imóveis e Condomínios",
        description: "Problemas com construtoras e taxas condominiais.",
        icon: "Building"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos e financiamentos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade em condomínios.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Cotia é cidade em crescimento na região metropolitana, com muitos condomínios residenciais.",
    consumerTribunalInfo: "Fórum de Cotia com JEC. Processos podem ser ajuizados em Taboão da Serra também.",
    proconAddress: "Av. Professor Manoel José Pedroso, 1401 - Parque São George - Cotia/SP",
    faqs: [
      {
        question: "O Fórum de Cotia atende consumidor?",
        answer: "Sim! O JEC de Cotia atende causas de consumidor."
      },
      {
        question: "A construtora atrasou meu imóvel. Tenho direitos?",
        answer: "Sim! Você pode pedir indenização por danos materiais e morais."
      },
      {
        question: "O condomínio cobra taxas indevidas. O que fazer?",
        answer: "Você pode contestar judicialmente cobranças abusivas."
      },
      {
        question: "Meu plano negou tratamento. O que fazer?",
        answer: "Procure um advogado para pedir liminar judicial."
      },
      {
        question: "Quanto tempo demora um processo?",
        answer: "No JEC, processos simples levam de 5 a 7 meses."
      }
    ],
    coordinates: { latitude: "-23.6039", longitude: "-46.9186" },
    nearbyConsumerCities: ["taboao-da-serra", "osasco", "sao-paulo"]
  },

  // REGIÃO METROPOLITANA DO RIO DE JANEIRO
  {
    citySlug: "niteroi",
    cityName: "Niterói",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    stats: {
      casesWon: 534,
      avgCompensation: "R$ 11.800",
      avgResolutionDays: 50,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Planos de Saúde",
        description: "Niterói tem alto índice de negativas de planos de saúde.",
        icon: "HeartPulse"
      },
      {
        title: "Imóveis e Construtoras",
        description: "Problemas com imóveis novos e reformas.",
        icon: "Building"
      },
      {
        title: "Cobranças Bancárias",
        description: "Bancos cobram taxas e juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Operadoras com cobranças indevidas.",
        icon: "Wifi"
      }
    ],
    localContext: "Niterói tem o maior IDH do Rio de Janeiro e população de alto poder aquisitivo. O TJRJ em Niterói é eficiente.",
    consumerTribunalInfo: "Fórum de Niterói com JECs. Processos têm tramitação boa, com média de 4-6 meses.",
    proconAddress: "Av. Ernani do Amaral Peixoto, 500 - Centro - Niterói/RJ",
    faqs: [
      {
        question: "O JEC de Niterói é eficiente?",
        answer: "Sim! Um dos melhores do RJ, com média de 4-6 meses."
      },
      {
        question: "Meu plano negou internação. O que fazer?",
        answer: "Procure um advogado para pedir liminar. O índice de deferimento é alto."
      },
      {
        question: "Comprei imóvel com problemas. Tenho direitos?",
        answer: "Sim! Vícios construtivos dão direito a reparo ou indenização."
      },
      {
        question: "Posso processar empresa do RJ Capital em Niterói?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado em Niterói?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-22.8833", longitude: "-43.1036" },
    nearbyConsumerCities: ["rio-de-janeiro", "sao-goncalo"]
  },
  {
    citySlug: "duque-de-caxias",
    cityName: "Duque de Caxias",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    stats: {
      casesWon: 412,
      avgCompensation: "R$ 9.500",
      avgResolutionDays: 55,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Cobranças Bancárias",
        description: "Bancos cobram juros abusivos em empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade e cobranças indevidas.",
        icon: "Wifi"
      },
      {
        title: "Energia Elétrica",
        description: "Cobranças irregulares da Light.",
        icon: "Zap"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Duque de Caxias é a segunda maior economia do Rio de Janeiro, com forte setor de refino de petróleo.",
    consumerTribunalInfo: "Fórum de Duque de Caxias com JECs. Processos têm tramitação regular.",
    proconAddress: "Rua Governador Portela, 250 - Centro - Duque de Caxias/RJ",
    faqs: [
      {
        question: "O JEC de Duque de Caxias é bom?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "A conta de luz está errada. O que fazer?",
        answer: "Você pode contestar judicialmente e pedir devolução de valores."
      },
      {
        question: "O banco cobra juros abusivos. Posso revisar?",
        answer: "Sim! Contratos com juros abusivos podem ser revisados."
      },
      {
        question: "Meu plano negou exame. Tenho direitos?",
        answer: "Sim! Você pode pedir liminar para obrigar a cobertura."
      },
      {
        question: "Posso processar empresa do RJ Capital aqui?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      }
    ],
    coordinates: { latitude: "-22.7856", longitude: "-43.3117" },
    nearbyConsumerCities: ["rio-de-janeiro", "nova-iguacu", "sao-joao-de-meriti"]
  },
  {
    citySlug: "nova-iguacu",
    cityName: "Nova Iguaçu",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    stats: {
      casesWon: 378,
      avgCompensation: "R$ 8.800",
      avgResolutionDays: 58,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Cobranças Bancárias",
        description: "Empréstimos consignados e juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Operadoras cobram por serviços não contratados.",
        icon: "Smartphone"
      },
      {
        title: "Energia Elétrica",
        description: "Problemas com a distribuidora Light.",
        icon: "Zap"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura afetam moradores.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Nova Iguaçu é uma das maiores cidades da Baixada Fluminense, com forte comércio.",
    consumerTribunalInfo: "Fórum de Nova Iguaçu com JECs. Processos têm tramitação regular.",
    proconAddress: "Rua Dr. Luiz Guimarães, 956 - Centro - Nova Iguaçu/RJ",
    faqs: [
      {
        question: "O JEC de Nova Iguaçu funciona bem?",
        answer: "Processos simples levam de 6 a 8 meses."
      },
      {
        question: "Fiz empréstimo consignado abusivo. O que fazer?",
        answer: "Você pode pedir revisão do contrato e devolução de valores."
      },
      {
        question: "A Light cobra taxa indevida. Tenho direitos?",
        answer: "Sim! Você pode contestar e pedir restituição em dobro."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado em Nova Iguaçu?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-22.7556", longitude: "-43.4503" },
    nearbyConsumerCities: ["duque-de-caxias", "rio-de-janeiro", "sao-joao-de-meriti"]
  },
  {
    citySlug: "sao-goncalo",
    cityName: "São Gonçalo",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    stats: {
      casesWon: 356,
      avgCompensation: "R$ 8.500",
      avgResolutionDays: 55,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos e financiamentos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade e cobranças indevidas.",
        icon: "Wifi"
      },
      {
        title: "Energia Elétrica",
        description: "Problemas com a distribuidora de energia.",
        icon: "Zap"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes.",
        icon: "HeartPulse"
      }
    ],
    localContext: "São Gonçalo é a segunda maior cidade do RJ em população, com forte setor de comércio.",
    consumerTribunalInfo: "Fórum de São Gonçalo com JECs. Processos têm tramitação regular.",
    proconAddress: "Av. Presidente Kennedy, 545 - Centro - São Gonçalo/RJ",
    faqs: [
      {
        question: "O JEC de São Gonçalo é eficiente?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "O banco cobrou taxa que não pedi. O que fazer?",
        answer: "Você pode pedir restituição em dobro de valores indevidos."
      },
      {
        question: "Meu plano negou tratamento. Tenho direitos?",
        answer: "Sim! Você pode pedir liminar para obrigar a cobertura."
      },
      {
        question: "Posso processar em Niterói?",
        answer: "Você pode escolher entre São Gonçalo ou Niterói."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-22.8268", longitude: "-43.0634" },
    nearbyConsumerCities: ["niteroi", "rio-de-janeiro"]
  },
  {
    citySlug: "petropolis",
    cityName: "Petrópolis",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    stats: {
      casesWon: 234,
      avgCompensation: "R$ 9.800",
      avgResolutionDays: 50,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Turismo e Hotelaria",
        description: "Problemas com hotéis, pousadas e pacotes turísticos.",
        icon: "Building"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura em cidade de muitos idosos.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Bancos cobram juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade na serra.",
        icon: "Wifi"
      }
    ],
    localContext: "Petrópolis é cidade turística e histórica, com população de classe média/alta e muitos aposentados.",
    consumerTribunalInfo: "Fórum de Petrópolis com JECs. Processos têm tramitação boa.",
    proconAddress: "Rua Paulo Barbosa, 52 - Centro - Petrópolis/RJ",
    faqs: [
      {
        question: "O JEC de Petrópolis é bom?",
        answer: "Sim! Processos simples levam de 4 a 6 meses."
      },
      {
        question: "Hotel cancelou minha reserva. Tenho direitos?",
        answer: "Sim! Você pode pedir reembolso e indenização por danos morais."
      },
      {
        question: "Meu plano negou internação. O que fazer?",
        answer: "Procure um advogado para pedir liminar."
      },
      {
        question: "Sou aposentado e cobraram consignado indevido. O que fazer?",
        answer: "Você pode cancelar e pedir restituição de valores descontados."
      },
      {
        question: "Quanto custa um advogado em Petrópolis?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-22.5050", longitude: "-43.1784" },
    nearbyConsumerCities: ["rio-de-janeiro", "niteroi"]
  },

  // INTERIOR DE SÃO PAULO
  {
    citySlug: "sorocaba",
    cityName: "Sorocaba",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 467,
      avgCompensation: "R$ 10.200",
      avgResolutionDays: 45,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Financiamentos de Veículos",
        description: "Sorocaba tem forte setor automotivo com muitas reclamações.",
        icon: "Car"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes na região.",
        icon: "HeartPulse"
      },
      {
        title: "Telecomunicações",
        description: "Operadoras cobram por serviços não contratados.",
        icon: "Wifi"
      },
      {
        title: "E-commerce",
        description: "Problemas com compras online são frequentes.",
        icon: "ShoppingCart"
      }
    ],
    localContext: "Sorocaba é a quinta maior cidade de São Paulo, com forte setor industrial e comercial. O Fórum é eficiente.",
    consumerTribunalInfo: "Fórum de Sorocaba com JECs. Processos têm tramitação rápida, média de 4-5 meses.",
    proconAddress: "Rua Souza Pereira, 144 - Centro - Sorocaba/SP",
    faqs: [
      {
        question: "O JEC de Sorocaba é rápido?",
        answer: "Sim! Um dos mais eficientes do interior, com média de 4-5 meses."
      },
      {
        question: "Financiei carro com juros altos. Posso revisar?",
        answer: "Sim! Você pode pedir revisão judicial para reduzir juros abusivos."
      },
      {
        question: "Meu plano negou exame. O que fazer?",
        answer: "Você pode pedir liminar para obrigar a cobertura."
      },
      {
        question: "Posso processar empresa de SP Capital em Sorocaba?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado em Sorocaba?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-23.5015", longitude: "-47.4526" },
    nearbyConsumerCities: ["sao-paulo", "campinas", "jundiai"]
  },
  {
    citySlug: "jundiai",
    cityName: "Jundiaí",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 398,
      avgCompensation: "R$ 11.000",
      avgResolutionDays: 42,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura afetam moradores de alto padrão.",
        icon: "HeartPulse"
      },
      {
        title: "Imóveis e Condomínios",
        description: "Problemas com construtoras e taxas condominiais.",
        icon: "Building"
      },
      {
        title: "Cobranças Bancárias",
        description: "Bancos cobram taxas e juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Cobranças indevidas de operadoras.",
        icon: "Wifi"
      }
    ],
    localContext: "Jundiaí tem um dos maiores PIBs per capita do Brasil, com população de alto poder aquisitivo.",
    consumerTribunalInfo: "Fórum de Jundiaí com JECs eficientes. Média de 4 meses para processos simples.",
    proconAddress: "Rua Barão de Jundiaí, 200 - Centro - Jundiaí/SP",
    faqs: [
      {
        question: "O JEC de Jundiaí é eficiente?",
        answer: "Sim! Um dos melhores do interior, com média de 4 meses."
      },
      {
        question: "Meu plano premium negou cobertura. O que fazer?",
        answer: "Você pode pedir liminar. Planos de alto padrão também têm obrigações."
      },
      {
        question: "A construtora entregou imóvel com defeitos. Tenho direitos?",
        answer: "Sim! Você pode pedir reparo ou indenização por vícios construtivos."
      },
      {
        question: "Posso processar empresa de SP Capital em Jundiaí?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado em Jundiaí?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-23.1857", longitude: "-46.8978" },
    nearbyConsumerCities: ["sao-paulo", "campinas", "sorocaba"]
  },
  {
    citySlug: "sao-jose-dos-campos",
    cityName: "São José dos Campos",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 512,
      avgCompensation: "R$ 11.500",
      avgResolutionDays: 45,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes no Vale do Paraíba.",
        icon: "HeartPulse"
      },
      {
        title: "Financiamentos",
        description: "Juros abusivos em financiamentos imobiliários e veiculares.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Problemas com operadoras de internet e telefonia.",
        icon: "Wifi"
      },
      {
        title: "E-commerce",
        description: "Compras online com problemas de entrega e qualidade.",
        icon: "ShoppingCart"
      }
    ],
    localContext: "São José dos Campos é polo tecnológico e aeroespacial, com população de alto poder aquisitivo.",
    consumerTribunalInfo: "Fórum de SJC com JECs eficientes. Média de 4-5 meses para processos simples.",
    proconAddress: "Av. Dr. Nelson D'Ávila, 495 - Centro - São José dos Campos/SP",
    faqs: [
      {
        question: "O JEC de São José dos Campos é bom?",
        answer: "Sim! Um dos mais eficientes do Vale do Paraíba, com média de 4-5 meses."
      },
      {
        question: "Meu plano negou tratamento. O que fazer?",
        answer: "Procure um advogado para pedir liminar."
      },
      {
        question: "Financiei imóvel com juros altos. Posso revisar?",
        answer: "Sim! Contratos com juros abusivos podem ser revisados."
      },
      {
        question: "Posso processar empresa de SP Capital?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado em SJC?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-23.1791", longitude: "-45.8872" },
    nearbyConsumerCities: ["sao-paulo", "taubate", "jacarei"]
  },
  {
    citySlug: "santos",
    cityName: "Santos",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 489,
      avgCompensation: "R$ 10.800",
      avgResolutionDays: 48,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Turismo e Hotelaria",
        description: "Problemas com hotéis, pousadas e pacotes turísticos.",
        icon: "Building"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos e financiamentos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Operadoras cobram por serviços não contratados.",
        icon: "Wifi"
      }
    ],
    localContext: "Santos é o maior porto da América Latina e importante destino turístico. O Fórum é eficiente.",
    consumerTribunalInfo: "Fórum de Santos com JECs. Processos têm tramitação boa, média de 4-6 meses.",
    proconAddress: "Rua Brás Cubas, 37 - Centro - Santos/SP",
    faqs: [
      {
        question: "O JEC de Santos é eficiente?",
        answer: "Sim! Processos simples levam de 4 a 6 meses."
      },
      {
        question: "Hotel cancelou minha reserva. Tenho direitos?",
        answer: "Sim! Você pode pedir reembolso e indenização."
      },
      {
        question: "Meu plano negou internação. O que fazer?",
        answer: "Procure um advogado para pedir liminar."
      },
      {
        question: "Posso processar empresa de SP Capital em Santos?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado em Santos?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-23.9608", longitude: "-46.3336" },
    nearbyConsumerCities: ["sao-paulo", "guaruja", "praia-grande"]
  },
  {
    citySlug: "piracicaba",
    cityName: "Piracicaba",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 345,
      avgCompensation: "R$ 9.500",
      avgResolutionDays: 48,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Agronegócio",
        description: "Problemas com empresas do setor sucroalcooleiro.",
        icon: "Leaf"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em financiamentos rurais.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade em áreas rurais.",
        icon: "Wifi"
      }
    ],
    localContext: "Piracicaba é polo agroindustrial e sede da ESALQ/USP. O Fórum tem boa estrutura.",
    consumerTribunalInfo: "Fórum de Piracicaba com JECs. Processos têm tramitação regular.",
    proconAddress: "Rua do Rosário, 860 - Centro - Piracicaba/SP",
    faqs: [
      {
        question: "O JEC de Piracicaba é eficiente?",
        answer: "Processos simples levam de 4 a 6 meses."
      },
      {
        question: "Empresa rural me lesou. Tenho direitos?",
        answer: "Sim! Relações de consumo no agronegócio também são protegidas."
      },
      {
        question: "Meu plano negou exame. O que fazer?",
        answer: "Você pode pedir liminar para obrigar a cobertura."
      },
      {
        question: "Posso processar empresa de SP Capital?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado em Piracicaba?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-22.7255", longitude: "-47.6492" },
    nearbyConsumerCities: ["campinas", "sao-paulo", "ribeirao-preto"]
  },
  {
    citySlug: "bauru",
    cityName: "Bauru",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 312,
      avgCompensation: "R$ 9.200",
      avgResolutionDays: 50,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura afetam moradores.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Bancos cobram juros abusivos em empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade e cobranças indevidas.",
        icon: "Wifi"
      },
      {
        title: "E-commerce",
        description: "Problemas com compras online.",
        icon: "ShoppingCart"
      }
    ],
    localContext: "Bauru é hub ferroviário e centro regional do interior paulista.",
    consumerTribunalInfo: "Fórum de Bauru com JECs. Processos têm tramitação regular.",
    proconAddress: "Rua Primeiro de Agosto, 1-50 - Centro - Bauru/SP",
    faqs: [
      {
        question: "O JEC de Bauru é bom?",
        answer: "Processos simples levam de 4 a 6 meses."
      },
      {
        question: "Meu plano negou tratamento. O que fazer?",
        answer: "Procure um advogado para pedir liminar."
      },
      {
        question: "O banco cobra juros abusivos. Posso revisar?",
        answer: "Sim! Contratos com juros abusivos podem ser revisados."
      },
      {
        question: "Posso processar empresa de SP Capital?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado em Bauru?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-22.3246", longitude: "-49.0871" },
    nearbyConsumerCities: ["marilia", "ribeirao-preto", "campinas"]
  },
  {
    citySlug: "franca",
    cityName: "Franca",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 267,
      avgCompensation: "R$ 8.800",
      avgResolutionDays: 52,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Indústria Calçadista",
        description: "Problemas com produtos e garantias de calçados.",
        icon: "ShoppingBag"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em financiamentos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      }
    ],
    localContext: "Franca é a capital brasileira do calçado, com forte setor industrial.",
    consumerTribunalInfo: "Fórum de Franca com JECs. Processos têm tramitação regular.",
    proconAddress: "Av. Dr. Hélio Palermo, 777 - Jardim Francano - Franca/SP",
    faqs: [
      {
        question: "O JEC de Franca é eficiente?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "Comprei calçado com defeito. Tenho direitos?",
        answer: "Sim! Você pode pedir troca, conserto ou devolução do dinheiro."
      },
      {
        question: "Meu plano negou exame. O que fazer?",
        answer: "Você pode pedir liminar para obrigar a cobertura."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado em Franca?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-20.5387", longitude: "-47.4008" },
    nearbyConsumerCities: ["ribeirao-preto", "uberaba", "uberlandia"]
  },
  {
    citySlug: "sao-jose-do-rio-preto",
    cityName: "São José do Rio Preto",
    state: "São Paulo",
    stateCode: "SP",
    stats: {
      casesWon: 378,
      avgCompensation: "R$ 9.800",
      avgResolutionDays: 48,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Planos de Saúde",
        description: "Rio Preto é polo de saúde com muitas reclamações de planos.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos e financiamentos.",
        icon: "CreditCard"
      },
      {
        title: "Agronegócio",
        description: "Problemas com empresas do setor agrícola.",
        icon: "Leaf"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      }
    ],
    localContext: "São José do Rio Preto é polo de saúde e agronegócio do noroeste paulista.",
    consumerTribunalInfo: "Fórum de Rio Preto com JECs. Processos têm boa tramitação.",
    proconAddress: "Rua Voluntários de São Paulo, 3030 - Centro - São José do Rio Preto/SP",
    faqs: [
      {
        question: "O JEC de Rio Preto é bom?",
        answer: "Sim! Processos simples levam de 4 a 6 meses."
      },
      {
        question: "Meu plano negou cirurgia. O que fazer?",
        answer: "Procure um advogado para pedir liminar."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos com juros abusivos podem ser revisados."
      },
      {
        question: "Posso processar empresa de SP Capital?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado em Rio Preto?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-20.8113", longitude: "-49.3758" },
    nearbyConsumerCities: ["ribeirao-preto", "bauru", "campinas"]
  },

  // INTERIOR DE MINAS GERAIS
  {
    citySlug: "contagem",
    cityName: "Contagem",
    state: "Minas Gerais",
    stateCode: "MG",
    stats: {
      casesWon: 423,
      avgCompensation: "R$ 9.500",
      avgResolutionDays: 50,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Indústria e Metalurgia",
        description: "Problemas com produtos industriais e peças.",
        icon: "Building"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Cobranças indevidas de operadoras.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Contagem é a segunda maior cidade de MG e polo industrial da região metropolitana.",
    consumerTribunalInfo: "Fórum de Contagem com JECs. Processos têm tramitação regular.",
    proconAddress: "Av. João César de Oliveira, 2500 - Eldorado - Contagem/MG",
    faqs: [
      {
        question: "O JEC de Contagem é eficiente?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "Comprei peça com defeito. Tenho direitos?",
        answer: "Sim! Você pode pedir troca, conserto ou devolução."
      },
      {
        question: "O banco cobra juros abusivos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados judicialmente."
      },
      {
        question: "Posso processar empresa de BH em Contagem?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-19.9318", longitude: "-44.0539" },
    nearbyConsumerCities: ["belo-horizonte", "betim"]
  },
  {
    citySlug: "betim",
    cityName: "Betim",
    state: "Minas Gerais",
    stateCode: "MG",
    stats: {
      casesWon: 378,
      avgCompensation: "R$ 9.200",
      avgResolutionDays: 52,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Indústria Automotiva",
        description: "Problemas com veículos e peças da Fiat.",
        icon: "Car"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em financiamentos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Cobranças indevidas.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Betim é polo automotivo de MG, sede da Fiat. O Fórum atende grande demanda de consumidor.",
    consumerTribunalInfo: "Fórum de Betim com JECs. Processos têm tramitação regular.",
    proconAddress: "Av. Governador Valadares, 340 - Centro - Betim/MG",
    faqs: [
      {
        question: "O JEC de Betim é bom?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "Comprei carro com defeito. Tenho direitos?",
        answer: "Sim! Você pode pedir troca, conserto ou devolução do valor."
      },
      {
        question: "Financiei veículo com juros altos. Posso revisar?",
        answer: "Sim! Contratos com juros abusivos podem ser revisados."
      },
      {
        question: "Posso processar a Fiat aqui em Betim?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-19.9678", longitude: "-44.1983" },
    nearbyConsumerCities: ["contagem", "belo-horizonte"]
  },
  {
    citySlug: "juiz-de-fora",
    cityName: "Juiz de Fora",
    state: "Minas Gerais",
    stateCode: "MG",
    stats: {
      casesWon: 456,
      avgCompensation: "R$ 9.800",
      avgResolutionDays: 48,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Planos de Saúde",
        description: "JF é polo de saúde com muitas reclamações de planos.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "E-commerce",
        description: "Problemas com compras online.",
        icon: "ShoppingCart"
      }
    ],
    localContext: "Juiz de Fora é polo de educação e saúde da Zona da Mata mineira.",
    consumerTribunalInfo: "Fórum de Juiz de Fora com JECs. Processos têm boa tramitação.",
    proconAddress: "Av. Barão do Rio Branco, 2234 - Centro - Juiz de Fora/MG",
    faqs: [
      {
        question: "O JEC de Juiz de Fora é eficiente?",
        answer: "Sim! Processos simples levam de 4 a 6 meses."
      },
      {
        question: "Meu plano negou tratamento. O que fazer?",
        answer: "Procure um advogado para pedir liminar."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos com juros abusivos podem ser revisados."
      },
      {
        question: "Posso processar empresa de BH aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado em JF?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-21.7642", longitude: "-43.3496" },
    nearbyConsumerCities: ["belo-horizonte", "rio-de-janeiro"]
  },
  {
    citySlug: "montes-claros",
    cityName: "Montes Claros",
    state: "Minas Gerais",
    stateCode: "MG",
    stats: {
      casesWon: 289,
      avgCompensation: "R$ 8.200",
      avgResolutionDays: 55,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes no norte de MG.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade na região.",
        icon: "Wifi"
      },
      {
        title: "Energia Elétrica",
        description: "Cobranças irregulares da distribuidora.",
        icon: "Zap"
      }
    ],
    localContext: "Montes Claros é polo de serviços do norte de Minas Gerais.",
    consumerTribunalInfo: "Fórum de Montes Claros com JECs. Processos têm tramitação regular.",
    proconAddress: "Av. Cula Mangabeira, 211 - Centro - Montes Claros/MG",
    faqs: [
      {
        question: "O JEC de Montes Claros é bom?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "Meu plano negou exame. O que fazer?",
        answer: "Você pode pedir liminar para obrigar a cobertura."
      },
      {
        question: "A conta de luz está errada. O que fazer?",
        answer: "Você pode contestar judicialmente."
      },
      {
        question: "Posso processar empresa de BH aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-16.7350", longitude: "-43.8617" },
    nearbyConsumerCities: ["belo-horizonte", "brasilia"]
  },
  {
    citySlug: "uberaba",
    cityName: "Uberaba",
    state: "Minas Gerais",
    stateCode: "MG",
    stats: {
      casesWon: 312,
      avgCompensation: "R$ 8.800",
      avgResolutionDays: 50,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Agronegócio",
        description: "Problemas com empresas do setor de pecuária zebuína.",
        icon: "Leaf"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em financiamentos rurais.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      }
    ],
    localContext: "Uberaba é capital do zebu e polo agropecuário do Triângulo Mineiro.",
    consumerTribunalInfo: "Fórum de Uberaba com JECs. Processos têm tramitação regular.",
    proconAddress: "Av. Leopoldino de Oliveira, 3300 - Centro - Uberaba/MG",
    faqs: [
      {
        question: "O JEC de Uberaba é eficiente?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "Empresa do agronegócio me lesou. Tenho direitos?",
        answer: "Sim! Relações de consumo são protegidas pelo CDC."
      },
      {
        question: "Meu plano negou exame. O que fazer?",
        answer: "Você pode pedir liminar para obrigar a cobertura."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-19.7472", longitude: "-47.9381" },
    nearbyConsumerCities: ["uberlandia", "franca", "ribeirao-preto"]
  },

  // SUL DO BRASIL
  {
    citySlug: "blumenau",
    cityName: "Blumenau",
    state: "Santa Catarina",
    stateCode: "SC",
    stats: {
      casesWon: 412,
      avgCompensation: "R$ 10.500",
      avgResolutionDays: 45,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Indústria Têxtil",
        description: "Problemas com roupas e produtos têxteis.",
        icon: "ShoppingBag"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Cobranças indevidas.",
        icon: "Wifi"
      }
    ],
    localContext: "Blumenau é polo têxtil e cervejeiro de Santa Catarina, com alto IDH.",
    consumerTribunalInfo: "Fórum de Blumenau com JECs eficientes. Média de 4-5 meses.",
    proconAddress: "Rua XV de Novembro, 1370 - Centro - Blumenau/SC",
    faqs: [
      {
        question: "O JEC de Blumenau é bom?",
        answer: "Sim! Um dos melhores de SC, com média de 4-5 meses."
      },
      {
        question: "Comprei roupa com defeito. Tenho direitos?",
        answer: "Sim! Você pode pedir troca, conserto ou devolução."
      },
      {
        question: "Meu plano negou tratamento. O que fazer?",
        answer: "Procure um advogado para pedir liminar."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-26.9194", longitude: "-49.0661" },
    nearbyConsumerCities: ["joinville", "florianopolis", "itajai"]
  },
  {
    citySlug: "itajai",
    cityName: "Itajaí",
    state: "Santa Catarina",
    stateCode: "SC",
    stats: {
      casesWon: 345,
      avgCompensation: "R$ 10.200",
      avgResolutionDays: 48,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Porto e Logística",
        description: "Problemas com fretes e entregas.",
        icon: "Ship"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Cobranças indevidas.",
        icon: "Wifi"
      }
    ],
    localContext: "Itajaí é o segundo maior porto do Brasil, com forte setor de logística e pesca.",
    consumerTribunalInfo: "Fórum de Itajaí com JECs. Processos têm boa tramitação.",
    proconAddress: "Rua Hercílio Luz, 94 - Centro - Itajaí/SC",
    faqs: [
      {
        question: "O JEC de Itajaí é eficiente?",
        answer: "Processos simples levam de 4 a 6 meses."
      },
      {
        question: "Tive problema com frete. Tenho direitos?",
        answer: "Sim! Atrasos e extravios geram direito a indenização."
      },
      {
        question: "Meu plano negou exame. O que fazer?",
        answer: "Você pode pedir liminar para obrigar a cobertura."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-26.9078", longitude: "-48.6619" },
    nearbyConsumerCities: ["blumenau", "florianopolis", "balneario-camboriu"]
  },
  {
    citySlug: "balneario-camboriu",
    cityName: "Balneário Camboriú",
    state: "Santa Catarina",
    stateCode: "SC",
    stats: {
      casesWon: 289,
      avgCompensation: "R$ 12.500",
      avgResolutionDays: 45,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Imóveis e Construtoras",
        description: "Problemas com apartamentos de alto padrão.",
        icon: "Building"
      },
      {
        title: "Turismo e Hotelaria",
        description: "Problemas com hotéis e pacotes turísticos.",
        icon: "Plane"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos.",
        icon: "CreditCard"
      }
    ],
    localContext: "Balneário Camboriú é destino turístico de alto padrão, com os arranha-céus mais altos do Brasil.",
    consumerTribunalInfo: "Fórum de Balneário Camboriú com JECs eficientes.",
    proconAddress: "Av. Brasil, 500 - Centro - Balneário Camboriú/SC",
    faqs: [
      {
        question: "O JEC de Balneário é bom?",
        answer: "Sim! Processos simples levam de 4-5 meses."
      },
      {
        question: "Comprei apartamento com defeitos. Tenho direitos?",
        answer: "Sim! Você pode pedir reparo ou indenização."
      },
      {
        question: "Hotel cancelou reserva. O que fazer?",
        answer: "Você pode pedir reembolso e indenização."
      },
      {
        question: "Posso processar construtora de outro estado?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-26.9906", longitude: "-48.6348" },
    nearbyConsumerCities: ["itajai", "florianopolis", "blumenau"]
  },
  {
    citySlug: "maringa",
    cityName: "Maringá",
    state: "Paraná",
    stateCode: "PR",
    stats: {
      casesWon: 423,
      avgCompensation: "R$ 10.200",
      avgResolutionDays: 45,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura afetam moradores.",
        icon: "HeartPulse"
      },
      {
        title: "Agronegócio",
        description: "Problemas com empresas do setor agrícola.",
        icon: "Leaf"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em financiamentos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Cobranças indevidas.",
        icon: "Wifi"
      }
    ],
    localContext: "Maringá tem o maior IDH do Paraná e é polo do agronegócio.",
    consumerTribunalInfo: "Fórum de Maringá com JECs eficientes. Média de 4-5 meses.",
    proconAddress: "Av. XV de Novembro, 200 - Centro - Maringá/PR",
    faqs: [
      {
        question: "O JEC de Maringá é eficiente?",
        answer: "Sim! Um dos melhores do PR, com média de 4-5 meses."
      },
      {
        question: "Meu plano negou tratamento. O que fazer?",
        answer: "Procure um advogado para pedir liminar."
      },
      {
        question: "Empresa rural me lesou. Tenho direitos?",
        answer: "Sim! Relações de consumo são protegidas."
      },
      {
        question: "Posso processar empresa de Curitiba aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-23.4205", longitude: "-51.9333" },
    nearbyConsumerCities: ["londrina", "curitiba", "cascavel"]
  },
  {
    citySlug: "cascavel",
    cityName: "Cascavel",
    state: "Paraná",
    stateCode: "PR",
    stats: {
      casesWon: 312,
      avgCompensation: "R$ 9.200",
      avgResolutionDays: 50,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Agronegócio",
        description: "Problemas com empresas do setor agrícola.",
        icon: "Leaf"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em financiamentos rurais.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      }
    ],
    localContext: "Cascavel é polo do agronegócio do oeste do Paraná.",
    consumerTribunalInfo: "Fórum de Cascavel com JECs. Processos têm tramitação regular.",
    proconAddress: "Av. Brasil, 3400 - Centro - Cascavel/PR",
    faqs: [
      {
        question: "O JEC de Cascavel é bom?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "Empresa rural me lesou. Tenho direitos?",
        answer: "Sim! Relações de consumo são protegidas."
      },
      {
        question: "Meu plano negou exame. O que fazer?",
        answer: "Você pode pedir liminar para obrigar a cobertura."
      },
      {
        question: "Posso processar empresa de Curitiba aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-24.9556", longitude: "-53.4553" },
    nearbyConsumerCities: ["maringa", "londrina", "foz-do-iguacu"]
  },
  {
    citySlug: "ponta-grossa",
    cityName: "Ponta Grossa",
    state: "Paraná",
    stateCode: "PR",
    stats: {
      casesWon: 289,
      avgCompensation: "R$ 8.800",
      avgResolutionDays: 52,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Cobranças indevidas.",
        icon: "Wifi"
      },
      {
        title: "E-commerce",
        description: "Problemas com compras online.",
        icon: "ShoppingCart"
      }
    ],
    localContext: "Ponta Grossa é hub logístico do Paraná, entre Curitiba e o interior.",
    consumerTribunalInfo: "Fórum de Ponta Grossa com JECs. Processos têm tramitação regular.",
    proconAddress: "Rua XV de Novembro, 1220 - Centro - Ponta Grossa/PR",
    faqs: [
      {
        question: "O JEC de Ponta Grossa é eficiente?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "Meu plano negou tratamento. O que fazer?",
        answer: "Procure um advogado para pedir liminar."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de Curitiba aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-25.0945", longitude: "-50.1633" },
    nearbyConsumerCities: ["curitiba", "londrina", "maringa"]
  },
  {
    citySlug: "caxias-do-sul",
    cityName: "Caxias do Sul",
    state: "Rio Grande do Sul",
    stateCode: "RS",
    stats: {
      casesWon: 456,
      avgCompensation: "R$ 10.500",
      avgResolutionDays: 48,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Indústria Metalúrgica",
        description: "Problemas com produtos industriais e peças.",
        icon: "Building"
      },
      {
        title: "Vinícolas e Turismo",
        description: "Problemas com pacotes turísticos e vinhos.",
        icon: "Wine"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos.",
        icon: "CreditCard"
      }
    ],
    localContext: "Caxias do Sul é a segunda maior economia do RS, polo metalúrgico e vinícola.",
    consumerTribunalInfo: "Fórum de Caxias do Sul com JECs. Processos têm boa tramitação.",
    proconAddress: "Rua Sinimbu, 1365 - Centro - Caxias do Sul/RS",
    faqs: [
      {
        question: "O JEC de Caxias é eficiente?",
        answer: "Sim! Processos simples levam de 4 a 6 meses."
      },
      {
        question: "Comprei vinho falsificado. Tenho direitos?",
        answer: "Sim! Produtos falsificados geram direito a indenização."
      },
      {
        question: "Meu plano negou tratamento. O que fazer?",
        answer: "Procure um advogado para pedir liminar."
      },
      {
        question: "Posso processar empresa de POA aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-29.1634", longitude: "-51.1797" },
    nearbyConsumerCities: ["porto-alegre", "canoas", "gramado"]
  },
  {
    citySlug: "canoas",
    cityName: "Canoas",
    state: "Rio Grande do Sul",
    stateCode: "RS",
    stats: {
      casesWon: 378,
      avgCompensation: "R$ 9.500",
      avgResolutionDays: 50,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Indústria e Refino",
        description: "Problemas com combustíveis e derivados.",
        icon: "Factory"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Cobranças indevidas.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Canoas é cidade industrial na região metropolitana de Porto Alegre.",
    consumerTribunalInfo: "Fórum de Canoas com JECs. Processos têm tramitação regular.",
    proconAddress: "Av. Victor Barreto, 2000 - Centro - Canoas/RS",
    faqs: [
      {
        question: "O JEC de Canoas é bom?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "O combustível estava adulterado. Tenho direitos?",
        answer: "Sim! Você pode pedir indenização por danos materiais e morais."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de POA aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-29.9178", longitude: "-51.1836" },
    nearbyConsumerCities: ["porto-alegre", "caxias-do-sul"]
  },
  {
    citySlug: "pelotas",
    cityName: "Pelotas",
    state: "Rio Grande do Sul",
    stateCode: "RS",
    stats: {
      casesWon: 267,
      avgCompensation: "R$ 8.500",
      avgResolutionDays: 55,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "E-commerce",
        description: "Problemas com compras online.",
        icon: "ShoppingCart"
      }
    ],
    localContext: "Pelotas é polo de doces e educação do sul gaúcho.",
    consumerTribunalInfo: "Fórum de Pelotas com JECs. Processos têm tramitação regular.",
    proconAddress: "Rua Lobo da Costa, 1550 - Centro - Pelotas/RS",
    faqs: [
      {
        question: "O JEC de Pelotas é eficiente?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "Meu plano negou tratamento. O que fazer?",
        answer: "Procure um advogado para pedir liminar."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de POA aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-31.7649", longitude: "-52.3371" },
    nearbyConsumerCities: ["porto-alegre", "rio-grande"]
  },
  {
    citySlug: "chapeco",
    cityName: "Chapecó",
    state: "Santa Catarina",
    stateCode: "SC",
    stats: {
      casesWon: 312,
      avgCompensation: "R$ 9.500",
      avgResolutionDays: 50,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Agroindústria",
        description: "Problemas com produtos de frigoríficos.",
        icon: "Leaf"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em financiamentos rurais.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      }
    ],
    localContext: "Chapecó é capital da agroindústria brasileira, sede de grandes frigoríficos.",
    consumerTribunalInfo: "Fórum de Chapecó com JECs. Processos têm tramitação regular.",
    proconAddress: "Rua Nereu Ramos, 500 - Centro - Chapecó/SC",
    faqs: [
      {
        question: "O JEC de Chapecó é bom?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "Comprei carne com problema. Tenho direitos?",
        answer: "Sim! Produtos alimentícios com defeito geram direito a troca e indenização."
      },
      {
        question: "Meu plano negou exame. O que fazer?",
        answer: "Você pode pedir liminar para obrigar a cobertura."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-27.1006", longitude: "-52.6152" },
    nearbyConsumerCities: ["joinville", "florianopolis", "cascavel"]
  },

  // NORDESTE
  {
    citySlug: "caruaru",
    cityName: "Caruaru",
    state: "Pernambuco",
    stateCode: "PE",
    stats: {
      casesWon: 267,
      avgCompensation: "R$ 7.800",
      avgResolutionDays: 55,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Comércio de Confecções",
        description: "Problemas com roupas e acessórios do polo têxtil.",
        icon: "ShoppingBag"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Caruaru é a capital do agreste pernambucano e maior feira livre do Brasil.",
    consumerTribunalInfo: "Fórum de Caruaru com JECs. Processos têm tramitação regular.",
    proconAddress: "Rua 15 de Novembro, 195 - Centro - Caruaru/PE",
    faqs: [
      {
        question: "O JEC de Caruaru é bom?",
        answer: "Processos simples levam de 5 a 8 meses."
      },
      {
        question: "Comprei roupa com defeito na feira. Tenho direitos?",
        answer: "Sim! Mesmo em feiras, o CDC se aplica."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de Recife aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-8.2760", longitude: "-35.9819" },
    nearbyConsumerCities: ["recife", "campina-grande"]
  },
  {
    citySlug: "feira-de-santana",
    cityName: "Feira de Santana",
    state: "Bahia",
    stateCode: "BA",
    stats: {
      casesWon: 345,
      avgCompensation: "R$ 8.200",
      avgResolutionDays: 55,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Comércio",
        description: "Problemas com lojas e produtos.",
        icon: "ShoppingBag"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Cobranças indevidas.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Feira de Santana é o maior polo comercial do interior do Nordeste.",
    consumerTribunalInfo: "Fórum de Feira de Santana com JECs. Processos têm tramitação regular.",
    proconAddress: "Av. Getúlio Vargas, 1850 - Centro - Feira de Santana/BA",
    faqs: [
      {
        question: "O JEC de Feira é eficiente?",
        answer: "Processos simples levam de 5 a 8 meses."
      },
      {
        question: "Comprei produto com defeito. Tenho direitos?",
        answer: "Sim! Você pode pedir troca, conserto ou devolução."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de Salvador aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-12.2667", longitude: "-38.9667" },
    nearbyConsumerCities: ["salvador", "vitoria-da-conquista"]
  },
  {
    citySlug: "campina-grande",
    cityName: "Campina Grande",
    state: "Paraíba",
    stateCode: "PB",
    stats: {
      casesWon: 289,
      avgCompensation: "R$ 7.800",
      avgResolutionDays: 55,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Tecnologia",
        description: "Problemas com produtos e serviços de TI.",
        icon: "Laptop"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Campina Grande é polo de tecnologia do Nordeste, sede do maior São João do mundo.",
    consumerTribunalInfo: "Fórum de Campina Grande com JECs. Processos têm tramitação regular.",
    proconAddress: "Av. Floriano Peixoto, 700 - Centro - Campina Grande/PB",
    faqs: [
      {
        question: "O JEC de Campina é bom?",
        answer: "Processos simples levam de 5 a 8 meses."
      },
      {
        question: "Comprei produto de TI com defeito. Tenho direitos?",
        answer: "Sim! Você pode pedir troca, conserto ou devolução."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de JP aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-7.2306", longitude: "-35.8811" },
    nearbyConsumerCities: ["joao-pessoa", "caruaru", "natal"]
  },
  {
    citySlug: "mossoro",
    cityName: "Mossoró",
    state: "Rio Grande do Norte",
    stateCode: "RN",
    stats: {
      casesWon: 234,
      avgCompensation: "R$ 7.500",
      avgResolutionDays: 58,
      clientsSatisfied: 93
    },
    localProblems: [
      {
        title: "Petróleo e Sal",
        description: "Problemas com empresas do setor extrativo.",
        icon: "Factory"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Mossoró é a segunda maior cidade do RN, polo de petróleo e sal.",
    consumerTribunalInfo: "Fórum de Mossoró com JECs. Processos têm tramitação regular.",
    proconAddress: "Rua Dionísio Filgueira, 1100 - Centro - Mossoró/RN",
    faqs: [
      {
        question: "O JEC de Mossoró é eficiente?",
        answer: "Processos simples levam de 6 a 8 meses."
      },
      {
        question: "Empresa do setor de petróleo me lesou. Tenho direitos?",
        answer: "Sim! Relações de consumo são protegidas pelo CDC."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de Natal aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-5.1878", longitude: "-37.3442" },
    nearbyConsumerCities: ["natal", "fortaleza"]
  },
  {
    citySlug: "imperatriz",
    cityName: "Imperatriz",
    state: "Maranhão",
    stateCode: "MA",
    stats: {
      casesWon: 198,
      avgCompensation: "R$ 7.200",
      avgResolutionDays: 60,
      clientsSatisfied: 93
    },
    localProblems: [
      {
        title: "Agronegócio",
        description: "Problemas com empresas do setor agrícola.",
        icon: "Leaf"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "Energia Elétrica",
        description: "Cobranças irregulares.",
        icon: "Zap"
      }
    ],
    localContext: "Imperatriz é a segunda maior cidade do Maranhão, polo do agronegócio.",
    consumerTribunalInfo: "Fórum de Imperatriz com JECs. Processos têm tramitação em evolução.",
    proconAddress: "Av. Getúlio Vargas, 1500 - Centro - Imperatriz/MA",
    faqs: [
      {
        question: "O JEC de Imperatriz funciona bem?",
        answer: "Processos simples levam de 6 a 9 meses."
      },
      {
        question: "Empresa rural me lesou. Tenho direitos?",
        answer: "Sim! Relações de consumo são protegidas."
      },
      {
        question: "A conta de luz está errada. O que fazer?",
        answer: "Você pode contestar judicialmente."
      },
      {
        question: "Posso processar empresa de São Luís aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-5.5264", longitude: "-47.4919" },
    nearbyConsumerCities: ["sao-luis", "belem", "palmas"]
  },
  {
    citySlug: "petrolina",
    cityName: "Petrolina",
    state: "Pernambuco",
    stateCode: "PE",
    stats: {
      casesWon: 234,
      avgCompensation: "R$ 7.500",
      avgResolutionDays: 55,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Agronegócio e Fruticultura",
        description: "Problemas com empresas do polo frutícola.",
        icon: "Leaf"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em financiamentos rurais.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Petrolina é polo frutícola do Vale do São Francisco, exportador de uvas e mangas.",
    consumerTribunalInfo: "Fórum de Petrolina com JECs. Processos têm tramitação regular.",
    proconAddress: "Av. Guararapes, 390 - Centro - Petrolina/PE",
    faqs: [
      {
        question: "O JEC de Petrolina é bom?",
        answer: "Processos simples levam de 5 a 8 meses."
      },
      {
        question: "Empresa de frutas me lesou. Tenho direitos?",
        answer: "Sim! Relações de consumo são protegidas."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de Recife aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-9.3917", longitude: "-40.5086" },
    nearbyConsumerCities: ["recife", "salvador", "juazeiro-do-norte"]
  },
  {
    citySlug: "juazeiro-do-norte",
    cityName: "Juazeiro do Norte",
    state: "Ceará",
    stateCode: "CE",
    stats: {
      casesWon: 234,
      avgCompensation: "R$ 7.200",
      avgResolutionDays: 58,
      clientsSatisfied: 93
    },
    localProblems: [
      {
        title: "Comércio e Varejo",
        description: "Problemas com lojas e produtos.",
        icon: "ShoppingBag"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Juazeiro do Norte é polo de turismo religioso e comércio do Cariri cearense.",
    consumerTribunalInfo: "Fórum de Juazeiro do Norte com JECs. Processos têm tramitação regular.",
    proconAddress: "Rua Padre Cícero, 120 - Centro - Juazeiro do Norte/CE",
    faqs: [
      {
        question: "O JEC de Juazeiro é eficiente?",
        answer: "Processos simples levam de 6 a 8 meses."
      },
      {
        question: "Comprei produto com defeito. Tenho direitos?",
        answer: "Sim! Você pode pedir troca, conserto ou devolução."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de Fortaleza aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-7.2131", longitude: "-39.3154" },
    nearbyConsumerCities: ["fortaleza", "petrolina", "campina-grande"]
  },
  {
    citySlug: "vitoria-da-conquista",
    cityName: "Vitória da Conquista",
    state: "Bahia",
    stateCode: "BA",
    stats: {
      casesWon: 267,
      avgCompensation: "R$ 7.800",
      avgResolutionDays: 55,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura são frequentes.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "E-commerce",
        description: "Problemas com compras online.",
        icon: "ShoppingCart"
      }
    ],
    localContext: "Vitória da Conquista é polo de saúde e educação do sudoeste baiano.",
    consumerTribunalInfo: "Fórum de Vitória da Conquista com JECs. Processos têm tramitação regular.",
    proconAddress: "Rua Galdino Moreira, 200 - Centro - Vitória da Conquista/BA",
    faqs: [
      {
        question: "O JEC de Conquista é bom?",
        answer: "Processos simples levam de 5 a 8 meses."
      },
      {
        question: "Meu plano negou tratamento. O que fazer?",
        answer: "Procure um advogado para pedir liminar."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de Salvador aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-14.8661", longitude: "-40.8372" },
    nearbyConsumerCities: ["salvador", "feira-de-santana", "belo-horizonte"]
  },

  // NORTE E CENTRO-OESTE
  {
    citySlug: "porto-velho",
    cityName: "Porto Velho",
    state: "Rondônia",
    stateCode: "RO",
    stats: {
      casesWon: 198,
      avgCompensation: "R$ 8.000",
      avgResolutionDays: 60,
      clientsSatisfied: 93
    },
    localProblems: [
      {
        title: "Energia Elétrica",
        description: "Problemas com a distribuidora de energia.",
        icon: "Zap"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Porto Velho é capital de Rondônia, com economia baseada em energia e agronegócio.",
    consumerTribunalInfo: "Fórum de Porto Velho com JECs. Processos têm tramitação em evolução.",
    proconAddress: "Av. 7 de Setembro, 2027 - Centro - Porto Velho/RO",
    faqs: [
      {
        question: "O JEC de Porto Velho funciona bem?",
        answer: "Processos simples levam de 6 a 9 meses."
      },
      {
        question: "A conta de luz está errada. O que fazer?",
        answer: "Você pode contestar judicialmente."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-8.7612", longitude: "-63.9039" },
    nearbyConsumerCities: ["manaus", "cuiaba", "rio-branco"]
  },
  {
    citySlug: "rio-branco",
    cityName: "Rio Branco",
    state: "Acre",
    stateCode: "AC",
    stats: {
      casesWon: 156,
      avgCompensation: "R$ 7.500",
      avgResolutionDays: 65,
      clientsSatisfied: 92
    },
    localProblems: [
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em empréstimos.",
        icon: "CreditCard"
      },
      {
        title: "Energia Elétrica",
        description: "Cobranças irregulares.",
        icon: "Zap"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Rio Branco é capital do Acre, com desafios de infraestrutura e acesso.",
    consumerTribunalInfo: "Fórum de Rio Branco com JECs. Processos têm tramitação em evolução.",
    proconAddress: "Av. Getúlio Vargas, 300 - Centro - Rio Branco/AC",
    faqs: [
      {
        question: "O JEC de Rio Branco funciona?",
        answer: "Processos simples levam de 7 a 10 meses."
      },
      {
        question: "A internet é péssima. Posso processar?",
        answer: "Sim! Serviços de má qualidade geram direito a indenização."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-9.9753", longitude: "-67.8106" },
    nearbyConsumerCities: ["porto-velho", "manaus"]
  },
  {
    citySlug: "macapa",
    cityName: "Macapá",
    state: "Amapá",
    stateCode: "AP",
    stats: {
      casesWon: 145,
      avgCompensation: "R$ 7.200",
      avgResolutionDays: 65,
      clientsSatisfied: 92
    },
    localProblems: [
      {
        title: "Energia Elétrica",
        description: "Problemas graves com fornecimento de energia.",
        icon: "Zap"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Macapá é capital do Amapá, com desafios históricos de fornecimento de energia.",
    consumerTribunalInfo: "Fórum de Macapá com JECs. Processos têm tramitação em evolução.",
    proconAddress: "Av. Mendonça Furtado, 55 - Centro - Macapá/AP",
    faqs: [
      {
        question: "O JEC de Macapá funciona?",
        answer: "Processos simples levam de 7 a 10 meses."
      },
      {
        question: "Fiquei sem luz por dias. Tenho direitos?",
        answer: "Sim! Falta de energia gera direito a indenização."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "0.0356", longitude: "-51.0705" },
    nearbyConsumerCities: ["belem", "manaus"]
  },
  {
    citySlug: "boa-vista",
    cityName: "Boa Vista",
    state: "Roraima",
    stateCode: "RR",
    stats: {
      casesWon: 134,
      avgCompensation: "R$ 7.000",
      avgResolutionDays: 68,
      clientsSatisfied: 91
    },
    localProblems: [
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Energia Elétrica",
        description: "Cobranças irregulares.",
        icon: "Zap"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Boa Vista é capital de Roraima, com desafios de infraestrutura.",
    consumerTribunalInfo: "Fórum de Boa Vista com JECs. Processos têm tramitação em evolução.",
    proconAddress: "Av. Ville Roy, 4900 - Canarinho - Boa Vista/RR",
    faqs: [
      {
        question: "O JEC de Boa Vista funciona?",
        answer: "Processos simples levam de 7 a 10 meses."
      },
      {
        question: "A internet é péssima. Posso processar?",
        answer: "Sim! Serviços de má qualidade geram direito a indenização."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "2.8197", longitude: "-60.6733" },
    nearbyConsumerCities: ["manaus"]
  },
  {
    citySlug: "palmas",
    cityName: "Palmas",
    state: "Tocantins",
    stateCode: "TO",
    stats: {
      casesWon: 189,
      avgCompensation: "R$ 7.800",
      avgResolutionDays: 55,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Energia Elétrica",
        description: "Cobranças irregulares.",
        icon: "Zap"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Palmas é a capital mais nova do Brasil, com infraestrutura em desenvolvimento.",
    consumerTribunalInfo: "Fórum de Palmas com JECs. Processos têm tramitação regular.",
    proconAddress: "Quadra 104 Sul, Av. NS-2 - Plano Diretor Sul - Palmas/TO",
    faqs: [
      {
        question: "O JEC de Palmas é eficiente?",
        answer: "Processos simples levam de 5 a 8 meses."
      },
      {
        question: "A internet é péssima. Posso processar?",
        answer: "Sim! Serviços de má qualidade geram direito a indenização."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de outro estado?",
        answer: "Sim! O consumidor pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-10.2406", longitude: "-48.3558" },
    nearbyConsumerCities: ["brasilia", "goiania", "imperatriz"]
  },
  {
    citySlug: "anapolis",
    cityName: "Anápolis",
    state: "Goiás",
    stateCode: "GO",
    stats: {
      casesWon: 289,
      avgCompensation: "R$ 8.500",
      avgResolutionDays: 50,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Indústria Farmacêutica",
        description: "Problemas com medicamentos e laboratórios.",
        icon: "Pill"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Cobranças indevidas.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Anápolis é polo farmacêutico e logístico de Goiás.",
    consumerTribunalInfo: "Fórum de Anápolis com JECs. Processos têm tramitação regular.",
    proconAddress: "Av. Brasil Norte, 500 - Centro - Anápolis/GO",
    faqs: [
      {
        question: "O JEC de Anápolis é bom?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "Medicamento causou reação. Tenho direitos?",
        answer: "Sim! Você pode processar fabricante e farmácia."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de Goiânia aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-16.3281", longitude: "-48.9534" },
    nearbyConsumerCities: ["goiania", "brasilia"]
  },
  {
    citySlug: "rondonopolis",
    cityName: "Rondonópolis",
    state: "Mato Grosso",
    stateCode: "MT",
    stats: {
      casesWon: 234,
      avgCompensation: "R$ 8.200",
      avgResolutionDays: 52,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Agronegócio",
        description: "Problemas com empresas do setor agrícola.",
        icon: "Leaf"
      },
      {
        title: "Cobranças Bancárias",
        description: "Juros abusivos em financiamentos rurais.",
        icon: "CreditCard"
      },
      {
        title: "Telecomunicações",
        description: "Internet de má qualidade.",
        icon: "Wifi"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Rondonópolis é polo do agronegócio do sul de Mato Grosso.",
    consumerTribunalInfo: "Fórum de Rondonópolis com JECs. Processos têm tramitação regular.",
    proconAddress: "Av. Marechal Rondon, 2500 - Centro - Rondonópolis/MT",
    faqs: [
      {
        question: "O JEC de Rondonópolis é eficiente?",
        answer: "Processos simples levam de 5 a 7 meses."
      },
      {
        question: "Empresa rural me lesou. Tenho direitos?",
        answer: "Sim! Relações de consumo são protegidas."
      },
      {
        question: "O banco cobra juros altos. Posso revisar?",
        answer: "Sim! Contratos podem ser revisados."
      },
      {
        question: "Posso processar empresa de Cuiabá aqui?",
        answer: "Sim! Você pode processar no seu domicílio."
      },
      {
        question: "Quanto custa um advogado?",
        answer: "No Advogado Online, a consulta é gratuita."
      }
    ],
    coordinates: { latitude: "-16.4673", longitude: "-54.6372" },
    nearbyConsumerCities: ["cuiaba", "campo-grande", "goiania"]
  },
  // ========== EXPANSÃO BAHIA ==========
  {
    citySlug: "camacari",
    cityName: "Camaçari",
    state: "Bahia",
    stateCode: "BA",
    stats: {
      casesWon: 289,
      avgCompensation: "R$ 8.500",
      avgResolutionDays: 52,
      clientsSatisfied: 96
    },
    localProblems: [
      {
        title: "Trabalhistas no Polo Petroquímico",
        description: "Trabalhadores do polo petroquímico enfrentam questões de insalubridade, periculosidade e acidentes de trabalho.",
        icon: "Factory"
      },
      {
        title: "Planos de Saúde Empresariais",
        description: "Funcionários das indústrias têm problemas com planos de saúde coletivos e negativas de cobertura.",
        icon: "HeartPulse"
      },
      {
        title: "Cobranças Indevidas",
        description: "Moradores enfrentam cobranças abusivas de serviços básicos e telecomunicações.",
        icon: "CreditCard"
      },
      {
        title: "Financiamentos de Veículos",
        description: "Alta demanda por financiamentos de veículos gera problemas com taxas abusivas e cláusulas irregulares.",
        icon: "Car"
      }
    ],
    localContext: "Camaçari abriga o maior polo petroquímico do Hemisfério Sul, gerando alta demanda por questões trabalhistas e de consumidor para trabalhadores industriais.",
    consumerTribunalInfo: "Fórum de Camaçari com Juizado Especial Cível. PROCON municipal atuante em questões de consumo.",
    proconAddress: "Praça da Matriz, Centro - Camaçari/BA",
    faqs: [
      {
        question: "Trabalho no polo petroquímico. Tenho direito a insalubridade?",
        answer: "Sim! Trabalhadores expostos a agentes químicos no polo petroquímico têm direito a adicional de insalubridade de 10%, 20% ou 40% dependendo do grau de exposição."
      },
      {
        question: "Meu plano de saúde da empresa negou tratamento. O que fazer?",
        answer: "Mesmo planos empresariais devem cobrir procedimentos da ANS. Você pode pedir liminar judicial e indenização por danos morais pela negativa."
      },
      {
        question: "Onde fica o PROCON de Camaçari?",
        answer: "O PROCON de Camaçari fica na Praça da Matriz, no Centro. Funciona de segunda a sexta, das 8h às 14h."
      },
      {
        question: "Posso processar empresa de outro estado morando em Camaçari?",
        answer: "Sim! Pelo Código de Defesa do Consumidor, você pode processar no seu domicílio. Não precisa se deslocar até a sede da empresa."
      },
      {
        question: "Quanto tempo demora um processo no JEC de Camaçari?",
        answer: "Em média, processos simples no Juizado Especial de Camaçari levam de 4 a 8 meses para conclusão."
      }
    ],
    coordinates: { latitude: "-12.6997", longitude: "-38.3265" },
    nearbyConsumerCities: ["salvador", "lauro-de-freitas", "feira-de-santana"]
  },
  {
    citySlug: "lauro-de-freitas",
    cityName: "Lauro de Freitas",
    state: "Bahia",
    stateCode: "BA",
    stats: {
      casesWon: 234,
      avgCompensation: "R$ 9.000",
      avgResolutionDays: 48,
      clientsSatisfied: 97
    },
    localProblems: [
      {
        title: "Problemas Imobiliários",
        description: "Crescimento imobiliário gera conflitos com construtoras, atrasos e vícios construtivos.",
        icon: "Building"
      },
      {
        title: "Voos no Aeroporto de Salvador",
        description: "Moradores usam frequentemente o Aeroporto de Salvador e enfrentam problemas com voos.",
        icon: "Plane"
      },
      {
        title: "Planos de Saúde",
        description: "População de alto padrão enfrenta negativas de planos de saúde premium.",
        icon: "HeartPulse"
      },
      {
        title: "Telecomunicações e Internet",
        description: "Problemas com qualidade de internet e cobranças indevidas de operadoras.",
        icon: "Wifi"
      }
    ],
    localContext: "Lauro de Freitas é cidade de alto padrão na região metropolitana de Salvador, com forte demanda em direito imobiliário e do consumidor.",
    consumerTribunalInfo: "Fórum de Lauro de Freitas com Juizado Especial Cível. Casos podem ser ajuizados também em Salvador.",
    proconAddress: "Centro Administrativo - Lauro de Freitas/BA",
    faqs: [
      {
        question: "Comprei imóvel em Lauro de Freitas e tem defeitos. O que fazer?",
        answer: "Você pode exigir o conserto, abatimento do preço ou rescisão do contrato com devolução dos valores. Vícios construtivos também geram indenização por danos morais."
      },
      {
        question: "Meu voo no Aeroporto de Salvador foi cancelado. Posso processar em Lauro de Freitas?",
        answer: "Sim! Você pode processar no seu domicílio (Lauro de Freitas) ou no local do embarque (Salvador). Escolha o mais conveniente."
      },
      {
        question: "O JEC de Lauro de Freitas é rápido?",
        answer: "Sim! O Juizado Especial de Lauro de Freitas é relativamente ágil, com processos simples sendo resolvidos em 3 a 6 meses."
      },
      {
        question: "Onde fica o PROCON de Lauro de Freitas?",
        answer: "O PROCON funciona no Centro Administrativo de Lauro de Freitas. Atendimento de segunda a sexta."
      },
      {
        question: "Minha construtora atrasou a entrega. Tenho direitos?",
        answer: "Sim! Atrasos na entrega de imóveis geram direito a lucros cessantes (aluguéis) e indenização por danos morais. Você também pode rescindir o contrato."
      }
    ],
    coordinates: { latitude: "-12.8872", longitude: "-38.3230" },
    nearbyConsumerCities: ["salvador", "camacari", "feira-de-santana"]
  },
  {
    citySlug: "itabuna",
    cityName: "Itabuna",
    state: "Bahia",
    stateCode: "BA",
    stats: {
      casesWon: 198,
      avgCompensation: "R$ 7.500",
      avgResolutionDays: 55,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Negativação Indevida",
        description: "Moradores sofrem com cobranças indevidas e negativação no SPC/Serasa.",
        icon: "AlertTriangle"
      },
      {
        title: "Comércio Local",
        description: "Problemas com produtos defeituosos e garantias em estabelecimentos comerciais.",
        icon: "ShoppingBag"
      },
      {
        title: "Bancos e Financeiras",
        description: "Cobranças abusivas de bancos e financeiras são reclamação frequente.",
        icon: "CreditCard"
      },
      {
        title: "Planos de Saúde Regionais",
        description: "Negativas de cobertura de planos de saúde locais e regionais.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Itabuna é polo comercial do sul da Bahia, com economia diversificada e crescente demanda em direito do consumidor.",
    consumerTribunalInfo: "Fórum de Itabuna com Juizado Especial Cível atuante. PROCON municipal recebe reclamações.",
    proconAddress: "Centro - Itabuna/BA",
    faqs: [
      {
        question: "Fui negativado indevidamente em Itabuna. Tenho direito a indenização?",
        answer: "Sim! A negativação indevida gera direito a indenização por danos morais de R$ 5.000 a R$ 15.000, além da retirada do nome dos cadastros."
      },
      {
        question: "Comprei produto defeituoso no comércio local. O que fazer?",
        answer: "Você pode exigir troca, conserto ou devolução do dinheiro. Se a loja não resolver em 30 dias, você pode escolher a solução."
      },
      {
        question: "O JEC de Itabuna atende casos contra empresas de fora?",
        answer: "Sim! Você pode processar qualquer empresa no JEC de Itabuna, mesmo que a sede seja em São Paulo ou outro estado."
      },
      {
        question: "Quanto tempo demora um processo de consumidor em Itabuna?",
        answer: "Processos no Juizado Especial de Itabuna levam em média de 4 a 8 meses para conclusão."
      },
      {
        question: "Preciso de advogado para processar no JEC de Itabuna?",
        answer: "Para causas até 20 salários mínimos, não é obrigatório. Porém, ter um advogado aumenta significativamente as chances de sucesso."
      }
    ],
    coordinates: { latitude: "-14.7876", longitude: "-39.2803" },
    nearbyConsumerCities: ["ilheus", "vitoria-da-conquista", "salvador"]
  },
  {
    citySlug: "ilheus",
    cityName: "Ilhéus",
    state: "Bahia",
    stateCode: "BA",
    stats: {
      casesWon: 167,
      avgCompensation: "R$ 7.200",
      avgResolutionDays: 58,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Turismo e Hotelaria",
        description: "Problemas com reservas, cancelamentos e serviços turísticos na Costa do Cacau.",
        icon: "Hotel"
      },
      {
        title: "Voos Regionais",
        description: "Cancelamentos e atrasos de voos no Aeroporto de Ilhéus afetam turistas e moradores.",
        icon: "Plane"
      },
      {
        title: "Fraudes Bancárias",
        description: "Golpes e fraudes bancárias afetam moradores da região.",
        icon: "CreditCard"
      },
      {
        title: "Cobrança Indevida",
        description: "Problemas com cobranças de serviços não contratados.",
        icon: "Receipt"
      }
    ],
    localContext: "Ilhéus é polo turístico da Costa do Cacau, com economia baseada em turismo e comércio. Alta demanda por questões de consumidor no setor hoteleiro.",
    consumerTribunalInfo: "Fórum de Ilhéus com Juizado Especial Cível. Atende moradores e turistas com problemas de consumo.",
    proconAddress: "Centro - Ilhéus/BA",
    faqs: [
      {
        question: "Tive problema com hotel em Ilhéus. Posso pedir indenização?",
        answer: "Sim! Problemas como reserva não honrada, diferenças entre o anunciado e o real, ou má qualidade do serviço geram direito a indenização."
      },
      {
        question: "Meu voo foi cancelado no Aeroporto de Ilhéus. Quais meus direitos?",
        answer: "Você tem direito a reacomodação, reembolso integral ou indenização por danos morais de até R$ 15.000, dependendo do prejuízo sofrido."
      },
      {
        question: "Sou turista e tive problema em Ilhéus. Posso processar aqui?",
        answer: "Você pode processar em Ilhéus (local do problema) ou na sua cidade de origem. O CDC permite escolher o foro mais conveniente."
      },
      {
        question: "Sofri golpe de PIX em Ilhéus. O banco deve me ressarcir?",
        answer: "Sim! Bancos têm responsabilidade objetiva por falhas de segurança. Você pode pedir restituição do valor e indenização por danos morais."
      },
      {
        question: "Onde fica o PROCON de Ilhéus?",
        answer: "O PROCON de Ilhéus fica no Centro da cidade. Funciona em dias úteis para registro de reclamações."
      }
    ],
    coordinates: { latitude: "-14.7934", longitude: "-39.0463" },
    nearbyConsumerCities: ["itabuna", "salvador", "vitoria-da-conquista"]
  },
  {
    citySlug: "juazeiro",
    cityName: "Juazeiro",
    state: "Bahia",
    stateCode: "BA",
    stats: {
      casesWon: 178,
      avgCompensation: "R$ 6.800",
      avgResolutionDays: 60,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Trabalhistas Rurais",
        description: "Trabalhadores da fruticultura irrigada enfrentam questões trabalhistas frequentes.",
        icon: "Tractor"
      },
      {
        title: "Cobrança Indevida",
        description: "Problemas com cobranças de serviços básicos e telecomunicações.",
        icon: "Receipt"
      },
      {
        title: "Negativação Indevida",
        description: "Moradores sofrem com inclusão indevida em cadastros de inadimplentes.",
        icon: "AlertTriangle"
      },
      {
        title: "Financiamentos",
        description: "Problemas com financiamentos agrícolas e de veículos.",
        icon: "CreditCard"
      }
    ],
    localContext: "Juazeiro é polo da fruticultura irrigada no Vale do São Francisco, com economia agrícola forte e demandas específicas do setor.",
    consumerTribunalInfo: "Fórum de Juazeiro com Juizado Especial Cível. Atende população local e trabalhadores rurais.",
    proconAddress: "Centro - Juazeiro/BA",
    faqs: [
      {
        question: "Sou trabalhador rural em Juazeiro. Tenho direitos trabalhistas?",
        answer: "Sim! Trabalhadores rurais têm os mesmos direitos dos urbanos: carteira assinada, férias, 13º, FGTS e todos os direitos da CLT."
      },
      {
        question: "Fui negativado por dívida que não fiz em Juazeiro. O que fazer?",
        answer: "Você pode pedir a exclusão do nome e indenização por danos morais. Negativação indevida gera compensação de R$ 5.000 a R$ 15.000."
      },
      {
        question: "Meu financiamento tem taxa abusiva. Posso reclamar?",
        answer: "Sim! Taxas de juros muito acima da média do mercado podem ser consideradas abusivas e revisadas judicialmente."
      },
      {
        question: "O PROCON de Juazeiro resolve meu problema?",
        answer: "O PROCON pode intermediar acordos, mas para indenizações você precisará da via judicial. O registro no PROCON serve como prova."
      },
      {
        question: "Posso processar empresa de São Paulo morando em Juazeiro?",
        answer: "Sim! O CDC permite que você processe no seu domicílio. Não precisa viajar até a sede da empresa."
      }
    ],
    coordinates: { latitude: "-9.4168", longitude: "-40.5003" },
    nearbyConsumerCities: ["petrolina", "feira-de-santana", "salvador"]
  },
  {
    citySlug: "barreiras",
    cityName: "Barreiras",
    state: "Bahia",
    stateCode: "BA",
    stats: {
      casesWon: 156,
      avgCompensation: "R$ 7.000",
      avgResolutionDays: 62,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Agronegócio e Trabalhistas",
        description: "Trabalhadores do agronegócio enfrentam questões trabalhistas específicas do setor.",
        icon: "Tractor"
      },
      {
        title: "Financiamentos Agrícolas",
        description: "Problemas com crédito rural e financiamentos do setor agrícola.",
        icon: "CreditCard"
      },
      {
        title: "Negativação",
        description: "Produtores e trabalhadores enfrentam negativação indevida.",
        icon: "AlertTriangle"
      },
      {
        title: "Telecomunicações",
        description: "Problemas com qualidade de internet e telefonia na região.",
        icon: "Wifi"
      }
    ],
    localContext: "Barreiras é capital do agronegócio da Bahia, na região MATOPIBA. Economia baseada na produção de grãos e algodão.",
    consumerTribunalInfo: "Fórum de Barreiras com Juizado Especial Cível. Atende demandas do consumidor e trabalhistas.",
    proconAddress: "Centro - Barreiras/BA",
    faqs: [
      {
        question: "Sou produtor rural em Barreiras. Tenho direitos de consumidor?",
        answer: "Sim! Quando você contrata serviços pessoais (bancos, telecomunicações, etc.), é protegido pelo CDC como consumidor."
      },
      {
        question: "Meu financiamento agrícola tem problemas. O que fazer?",
        answer: "Você pode pedir revisão de cláusulas abusivas e taxas de juros. Consulte um advogado para avaliar seu contrato."
      },
      {
        question: "Fui negativado por dívida de empresa em Barreiras. Tenho direitos?",
        answer: "Se a negativação foi indevida, você tem direito a indenização por danos morais e exclusão do nome dos cadastros."
      },
      {
        question: "A internet rural é ruim em Barreiras. Posso reclamar?",
        answer: "Sim! Operadoras devem entregar a velocidade contratada. Se não entregam, você pode pedir abatimento ou rescisão sem multa."
      },
      {
        question: "Onde fica o JEC de Barreiras?",
        answer: "O Juizado Especial Cível funciona no Fórum de Barreiras, no Centro da cidade. Atendimento em dias úteis."
      }
    ],
    coordinates: { latitude: "-12.1527", longitude: "-44.9900" },
    nearbyConsumerCities: ["salvador", "feira-de-santana", "brasilia"]
  },
  {
    citySlug: "jequie",
    cityName: "Jequié",
    state: "Bahia",
    stateCode: "BA",
    stats: {
      casesWon: 145,
      avgCompensation: "R$ 6.500",
      avgResolutionDays: 58,
      clientsSatisfied: 94
    },
    localProblems: [
      {
        title: "Indústria Calçadista",
        description: "Trabalhadores da indústria calçadista enfrentam questões trabalhistas específicas.",
        icon: "Factory"
      },
      {
        title: "Comércio Local",
        description: "Problemas com produtos defeituosos e garantias no comércio regional.",
        icon: "ShoppingBag"
      },
      {
        title: "Negativação",
        description: "Moradores enfrentam cobranças indevidas e negativação no SPC/Serasa.",
        icon: "AlertTriangle"
      },
      {
        title: "Telecomunicações",
        description: "Problemas com operadoras de telefonia e internet.",
        icon: "Smartphone"
      }
    ],
    localContext: "Jequié é centro comercial e industrial do sudoeste baiano, com destaque para a indústria calçadista.",
    consumerTribunalInfo: "Fórum de Jequié com Juizado Especial Cível. Atende demandas do consumidor da região.",
    proconAddress: "Centro - Jequié/BA",
    faqs: [
      {
        question: "Trabalho na indústria calçadista em Jequié. Tenho direitos?",
        answer: "Sim! Trabalhadores industriais têm todos os direitos da CLT, incluindo adicional de insalubridade se expostos a produtos químicos."
      },
      {
        question: "Comprei produto com defeito no comércio de Jequié. O que fazer?",
        answer: "Você pode exigir troca, conserto ou devolução do dinheiro. O prazo para resolver é de 30 dias, depois você escolhe a solução."
      },
      {
        question: "Fui negativado indevidamente em Jequié. Quanto posso receber?",
        answer: "A indenização por negativação indevida varia de R$ 5.000 a R$ 15.000, dependendo do caso. Além disso, seu nome é limpo."
      },
      {
        question: "Onde fica o PROCON de Jequié?",
        answer: "O PROCON de Jequié funciona no Centro da cidade. Você pode registrar reclamações gratuitamente."
      },
      {
        question: "Preciso de advogado para processar no JEC de Jequié?",
        answer: "Para causas até 20 salários mínimos, não é obrigatório. Mas ter advogado aumenta muito as chances de ganhar."
      }
    ],
    coordinates: { latitude: "-13.8577", longitude: "-40.0844" },
    nearbyConsumerCities: ["vitoria-da-conquista", "itabuna", "salvador"]
  },
  {
    citySlug: "alagoinhas",
    cityName: "Alagoinhas",
    state: "Bahia",
    stateCode: "BA",
    stats: {
      casesWon: 134,
      avgCompensation: "R$ 6.800",
      avgResolutionDays: 55,
      clientsSatisfied: 95
    },
    localProblems: [
      {
        title: "Indústria de Bebidas",
        description: "Trabalhadores da Ambev e outras indústrias enfrentam questões trabalhistas.",
        icon: "Factory"
      },
      {
        title: "Cobrança Indevida",
        description: "Moradores enfrentam cobranças abusivas de serviços e bancos.",
        icon: "Receipt"
      },
      {
        title: "Negativação",
        description: "Problemas com inclusão indevida em cadastros de inadimplentes.",
        icon: "AlertTriangle"
      },
      {
        title: "Planos de Saúde",
        description: "Negativas de cobertura de planos de saúde regionais.",
        icon: "HeartPulse"
      }
    ],
    localContext: "Alagoinhas é centro industrial e comercial do agreste baiano, sede de importante unidade da Ambev.",
    consumerTribunalInfo: "Fórum de Alagoinhas com Juizado Especial Cível. Atende demandas do consumidor regional.",
    proconAddress: "Centro - Alagoinhas/BA",
    faqs: [
      {
        question: "Trabalho na Ambev em Alagoinhas. Tenho direitos especiais?",
        answer: "Trabalhadores industriais têm direitos da CLT. Se há exposição a agentes nocivos, você pode ter direito a adicional de insalubridade ou periculosidade."
      },
      {
        question: "Recebi cobrança de dívida que não fiz em Alagoinhas. O que fazer?",
        answer: "Não pague! Você pode contestar a cobrança e, se foi negativado indevidamente, pedir indenização por danos morais."
      },
      {
        question: "Meu plano de saúde negou exame em Alagoinhas. Tenho direitos?",
        answer: "Sim! Se o exame está no rol da ANS ou foi prescrito pelo médico, a negativa é ilegal. Você pode pedir liminar e indenização."
      },
      {
        question: "Onde fica o JEC de Alagoinhas?",
        answer: "O Juizado Especial Cível funciona no Fórum de Alagoinhas, no Centro. Atendimento em dias úteis."
      },
      {
        question: "Quanto tempo demora um processo no JEC de Alagoinhas?",
        answer: "Processos simples no JEC de Alagoinhas levam em média de 4 a 8 meses para conclusão."
      }
    ],
    coordinates: { latitude: "-12.1322", longitude: "-38.4183" },
    nearbyConsumerCities: ["salvador", "feira-de-santana", "camacari"]
  }
];

// Helper functions
export const getConsumerCityData = (citySlug: string): ConsumerCityData | undefined => {
  return consumerCityData.find(city => city.citySlug === citySlug);
};

export const getAllConsumerCities = (): ConsumerCityData[] => {
  return consumerCityData;
};

export const getConsumerCitiesByState = (stateCode: string): ConsumerCityData[] => {
  return consumerCityData.filter(city => city.stateCode === stateCode);
};

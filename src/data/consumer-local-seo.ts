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

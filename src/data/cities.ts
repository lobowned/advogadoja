export interface CityData {
  slug: string;
  name: string;
  state: string;
  stateCode: string;
  population: string;
  region: string;
  highlights: string[];
  courtInfo: string;
  localContext: string;
}

export const brazilianCities: CityData[] = [
  {
    slug: "sao-paulo",
    name: "São Paulo",
    state: "São Paulo",
    stateCode: "SP",
    population: "12 milhões",
    region: "Sudeste",
    highlights: [
      "Maior centro financeiro da América Latina",
      "Alto volume de processos trabalhistas",
      "Principais tribunais do país"
    ],
    courtInfo: "TRT-2 (Tribunal Regional do Trabalho da 2ª Região) e TJSP (Tribunal de Justiça de São Paulo)",
    localContext: "São Paulo concentra grande parte dos processos trabalhistas do Brasil, com demandas frequentes relacionadas a horas extras, rescisões e assédio moral."
  },
  {
    slug: "rio-de-janeiro",
    name: "Rio de Janeiro",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    population: "6,7 milhões",
    region: "Sudeste",
    highlights: [
      "Segunda maior cidade do Brasil",
      "Grande demanda em direito de família",
      "Forte presença do setor de serviços"
    ],
    courtInfo: "TRT-1 (Tribunal Regional do Trabalho da 1ª Região) e TJRJ (Tribunal de Justiça do Rio de Janeiro)",
    localContext: "O Rio de Janeiro possui alta demanda em processos de família, especialmente divórcios e pensões, além de questões trabalhistas no setor de turismo e serviços."
  },
  {
    slug: "belo-horizonte",
    name: "Belo Horizonte",
    state: "Minas Gerais",
    stateCode: "MG",
    population: "2,5 milhões",
    region: "Sudeste",
    highlights: [
      "Capital mineira",
      "Forte setor industrial e de mineração",
      "Crescente demanda previdenciária"
    ],
    courtInfo: "TRT-3 (Tribunal Regional do Trabalho da 3ª Região) e TJMG (Tribunal de Justiça de Minas Gerais)",
    localContext: "Belo Horizonte tem demanda significativa em direito trabalhista relacionado à mineração e indústria, além de questões previdenciárias."
  },
  {
    slug: "brasilia",
    name: "Brasília",
    state: "Distrito Federal",
    stateCode: "DF",
    population: "3 milhões",
    region: "Centro-Oeste",
    highlights: [
      "Capital federal do Brasil",
      "Sede dos tribunais superiores",
      "Alto funcionalismo público"
    ],
    courtInfo: "TRT-10 (Tribunal Regional do Trabalho da 10ª Região), STF, STJ e TST",
    localContext: "Brasília concentra servidores públicos com demandas específicas em direito administrativo e previdenciário do funcionalismo."
  },
  {
    slug: "salvador",
    name: "Salvador",
    state: "Bahia",
    stateCode: "BA",
    population: "2,9 milhões",
    region: "Nordeste",
    highlights: [
      "Capital baiana",
      "Forte setor de turismo e serviços",
      "Crescente demanda trabalhista"
    ],
    courtInfo: "TRT-5 (Tribunal Regional do Trabalho da 5ª Região) e TJBA (Tribunal de Justiça da Bahia)",
    localContext: "Salvador apresenta alta demanda em questões trabalhistas no setor de turismo e comércio, além de direito de família."
  },
  {
    slug: "fortaleza",
    name: "Fortaleza",
    state: "Ceará",
    stateCode: "CE",
    population: "2,7 milhões",
    region: "Nordeste",
    highlights: [
      "Capital cearense",
      "Polo têxtil e de confecções",
      "Setor de turismo em expansão"
    ],
    courtInfo: "TRT-7 (Tribunal Regional do Trabalho da 7ª Região) e TJCE (Tribunal de Justiça do Ceará)",
    localContext: "Fortaleza tem forte demanda trabalhista no setor têxtil e de confecções, além do turismo."
  },
  {
    slug: "curitiba",
    name: "Curitiba",
    state: "Paraná",
    stateCode: "PR",
    population: "1,9 milhões",
    region: "Sul",
    highlights: [
      "Capital paranaense",
      "Polo industrial automotivo",
      "Alta qualidade de vida"
    ],
    courtInfo: "TRT-9 (Tribunal Regional do Trabalho da 9ª Região) e TJPR (Tribunal de Justiça do Paraná)",
    localContext: "Curitiba concentra demandas trabalhistas do setor automotivo e industrial, com processos frequentes sobre turnos e insalubridade."
  },
  {
    slug: "recife",
    name: "Recife",
    state: "Pernambuco",
    stateCode: "PE",
    population: "1,6 milhões",
    region: "Nordeste",
    highlights: [
      "Capital pernambucana",
      "Porto Digital e tecnologia",
      "Polo médico regional"
    ],
    courtInfo: "TRT-6 (Tribunal Regional do Trabalho da 6ª Região) e TJPE (Tribunal de Justiça de Pernambuco)",
    localContext: "Recife apresenta demandas diversificadas, desde o setor de tecnologia até questões trabalhistas tradicionais no comércio."
  },
  {
    slug: "porto-alegre",
    name: "Porto Alegre",
    state: "Rio Grande do Sul",
    stateCode: "RS",
    population: "1,5 milhões",
    region: "Sul",
    highlights: [
      "Capital gaúcha",
      "Forte tradição jurídica",
      "Setor calçadista e industrial"
    ],
    courtInfo: "TRT-4 (Tribunal Regional do Trabalho da 4ª Região) e TJRS (Tribunal de Justiça do Rio Grande do Sul)",
    localContext: "Porto Alegre tem tradição em direito trabalhista, com forte atuação sindical e demandas no setor industrial e de serviços."
  },
  {
    slug: "manaus",
    name: "Manaus",
    state: "Amazonas",
    stateCode: "AM",
    population: "2,2 milhões",
    region: "Norte",
    highlights: [
      "Capital amazonense",
      "Zona Franca de Manaus",
      "Polo industrial eletrônico"
    ],
    courtInfo: "TRT-11 (Tribunal Regional do Trabalho da 11ª Região) e TJAM (Tribunal de Justiça do Amazonas)",
    localContext: "Manaus concentra demandas trabalhistas da Zona Franca, especialmente no setor eletrônico e de montadoras."
  },
  {
    slug: "goiania",
    name: "Goiânia",
    state: "Goiás",
    stateCode: "GO",
    population: "1,5 milhões",
    region: "Centro-Oeste",
    highlights: [
      "Capital goiana",
      "Agronegócio em expansão",
      "Setor de serviços crescente"
    ],
    courtInfo: "TRT-18 (Tribunal Regional do Trabalho da 18ª Região) e TJGO (Tribunal de Justiça de Goiás)",
    localContext: "Goiânia apresenta demandas relacionadas ao agronegócio e setor de serviços, com crescimento em questões previdenciárias rurais."
  },
  {
    slug: "campinas",
    name: "Campinas",
    state: "São Paulo",
    stateCode: "SP",
    population: "1,2 milhões",
    region: "Sudeste",
    highlights: [
      "Polo tecnológico e universitário",
      "Forte setor farmacêutico",
      "Hub de inovação"
    ],
    courtInfo: "TRT-15 (Tribunal Regional do Trabalho da 15ª Região - Campinas) e TJSP",
    localContext: "Campinas tem demandas trabalhistas nos setores de tecnologia, farmacêutico e de serviços qualificados."
  },
  {
    slug: "sao-luis",
    name: "São Luís",
    state: "Maranhão",
    stateCode: "MA",
    population: "1,1 milhões",
    region: "Nordeste",
    highlights: [
      "Capital maranhense",
      "Patrimônio histórico UNESCO",
      "Porto e logística"
    ],
    courtInfo: "TRT-16 (Tribunal Regional do Trabalho da 16ª Região) e TJMA (Tribunal de Justiça do Maranhão)",
    localContext: "São Luís apresenta demandas no setor portuário e de serviços, além de questões previdenciárias."
  },
  {
    slug: "natal",
    name: "Natal",
    state: "Rio Grande do Norte",
    stateCode: "RN",
    population: "890 mil",
    region: "Nordeste",
    highlights: [
      "Capital potiguar",
      "Turismo e hotelaria",
      "Setor de energia eólica"
    ],
    courtInfo: "TRT-21 (Tribunal Regional do Trabalho da 21ª Região) e TJRN (Tribunal de Justiça do Rio Grande do Norte)",
    localContext: "Natal tem demandas no setor de turismo e hotelaria, além do crescente setor de energia renovável."
  },
  {
    slug: "florianopolis",
    name: "Florianópolis",
    state: "Santa Catarina",
    stateCode: "SC",
    population: "508 mil",
    region: "Sul",
    highlights: [
      "Capital catarinense",
      "Polo de tecnologia e startups",
      "Alta qualidade de vida"
    ],
    courtInfo: "TRT-12 (Tribunal Regional do Trabalho da 12ª Região) e TJSC (Tribunal de Justiça de Santa Catarina)",
    localContext: "Florianópolis concentra demandas do setor de tecnologia, turismo e funcionalismo público."
  },
  {
    slug: "vitoria",
    name: "Vitória",
    state: "Espírito Santo",
    stateCode: "ES",
    population: "365 mil",
    region: "Sudeste",
    highlights: [
      "Capital capixaba",
      "Porto de grande movimento",
      "Setor de mineração e siderurgia"
    ],
    courtInfo: "TRT-17 (Tribunal Regional do Trabalho da 17ª Região) e TJES (Tribunal de Justiça do Espírito Santo)",
    localContext: "Vitória tem demandas trabalhistas no setor portuário, mineração e siderurgia."
  },
  {
    slug: "joao-pessoa",
    name: "João Pessoa",
    state: "Paraíba",
    stateCode: "PB",
    population: "817 mil",
    region: "Nordeste",
    highlights: [
      "Capital paraibana",
      "Turismo em crescimento",
      "Setor de serviços"
    ],
    courtInfo: "TRT-13 (Tribunal Regional do Trabalho da 13ª Região) e TJPB (Tribunal de Justiça da Paraíba)",
    localContext: "João Pessoa apresenta demandas no setor de turismo, comércio e serviços públicos."
  },
  {
    slug: "teresina",
    name: "Teresina",
    state: "Piauí",
    stateCode: "PI",
    population: "868 mil",
    region: "Nordeste",
    highlights: [
      "Capital piauiense",
      "Polo de saúde regional",
      "Comércio em expansão"
    ],
    courtInfo: "TRT-22 (Tribunal Regional do Trabalho da 22ª Região) e TJPI (Tribunal de Justiça do Piauí)",
    localContext: "Teresina tem demandas no setor de saúde e comércio, com crescentes questões previdenciárias."
  },
  {
    slug: "aracaju",
    name: "Aracaju",
    state: "Sergipe",
    stateCode: "SE",
    population: "664 mil",
    region: "Nordeste",
    highlights: [
      "Capital sergipana",
      "Setor petroquímico",
      "Turismo regional"
    ],
    courtInfo: "TRT-20 (Tribunal Regional do Trabalho da 20ª Região) e TJSE (Tribunal de Justiça de Sergipe)",
    localContext: "Aracaju apresenta demandas no setor petroquímico e de serviços."
  },
  {
    slug: "maceio",
    name: "Maceió",
    state: "Alagoas",
    stateCode: "AL",
    population: "1 milhão",
    region: "Nordeste",
    highlights: [
      "Capital alagoana",
      "Turismo de praias",
      "Setor sucroalcooleiro"
    ],
    courtInfo: "TRT-19 (Tribunal Regional do Trabalho da 19ª Região) e TJAL (Tribunal de Justiça de Alagoas)",
    localContext: "Maceió tem demandas no setor de turismo e sucroalcooleiro, com questões trabalhistas rurais."
  },

  // NOVAS CIDADES - EXPANSÃO SEO
  {
    slug: "belem",
    name: "Belém",
    state: "Pará",
    stateCode: "PA",
    population: "1,5 milhões",
    region: "Norte",
    highlights: [
      "Capital do Pará",
      "Maior porto da Amazônia",
      "Polo de serviços da região Norte"
    ],
    courtInfo: "TRT-8 (Tribunal Regional do Trabalho da 8ª Região) e TJPA (Tribunal de Justiça do Pará)",
    localContext: "Belém é o principal polo econômico da Amazônia, com demandas trabalhistas nos setores portuário, de serviços e comércio, além de questões previdenciárias de trabalhadores rurais e ribeirinhos."
  },
  {
    slug: "campo-grande",
    name: "Campo Grande",
    state: "Mato Grosso do Sul",
    stateCode: "MS",
    population: "906 mil",
    region: "Centro-Oeste",
    highlights: [
      "Capital do Mato Grosso do Sul",
      "Forte agronegócio",
      "Polo de frigoríficos e agroindústria"
    ],
    courtInfo: "TRT-24 (Tribunal Regional do Trabalho da 24ª Região) e TJMS (Tribunal de Justiça do Mato Grosso do Sul)",
    localContext: "Campo Grande concentra demandas trabalhistas do agronegócio e frigoríficos, com questões frequentes sobre jornada, insalubridade e acidentes de trabalho no setor rural."
  },
  {
    slug: "cuiaba",
    name: "Cuiabá",
    state: "Mato Grosso",
    stateCode: "MT",
    population: "618 mil",
    region: "Centro-Oeste",
    highlights: [
      "Capital do Mato Grosso",
      "Centro do agronegócio brasileiro",
      "Porta de entrada para o Pantanal"
    ],
    courtInfo: "TRT-23 (Tribunal Regional do Trabalho da 23ª Região) e TJMT (Tribunal de Justiça do Mato Grosso)",
    localContext: "Cuiabá é polo do agronegócio brasileiro, com demandas trabalhistas no setor rural, transporte de cargas e agroindústria."
  },
  {
    slug: "sao-bernardo-do-campo",
    name: "São Bernardo do Campo",
    state: "São Paulo",
    stateCode: "SP",
    population: "844 mil",
    region: "Sudeste",
    highlights: [
      "Polo automotivo do Brasil",
      "Berço do sindicalismo",
      "Forte setor industrial"
    ],
    courtInfo: "TRT-2 (Tribunal Regional do Trabalho da 2ª Região) e TJSP",
    localContext: "São Bernardo do Campo é o coração da indústria automotiva brasileira, com alta demanda em processos trabalhistas relacionados a montadoras, metalúrgicas e setor de autopeças."
  },
  {
    slug: "guarulhos",
    name: "Guarulhos",
    state: "São Paulo",
    stateCode: "SP",
    population: "1,4 milhões",
    region: "Sudeste",
    highlights: [
      "Maior aeroporto da América do Sul",
      "Polo logístico e de transporte",
      "Forte setor industrial"
    ],
    courtInfo: "TRT-2 (Tribunal Regional do Trabalho da 2ª Região) e TJSP",
    localContext: "Guarulhos concentra demandas trabalhistas nos setores de logística, transporte aéreo e indústria, com processos frequentes sobre turnos, horas extras e condições de trabalho."
  },
  {
    slug: "santo-andre",
    name: "Santo André",
    state: "São Paulo",
    stateCode: "SP",
    population: "721 mil",
    region: "Sudeste",
    highlights: [
      "Parte do ABC Paulista",
      "Tradicional polo industrial",
      "Setor de comércio e serviços"
    ],
    courtInfo: "TRT-2 (Tribunal Regional do Trabalho da 2ª Região) e TJSP",
    localContext: "Santo André faz parte do ABC Paulista, com tradição industrial e alta demanda em processos trabalhistas do setor metalúrgico e de serviços."
  },
  {
    slug: "ribeirao-preto",
    name: "Ribeirão Preto",
    state: "São Paulo",
    stateCode: "SP",
    population: "711 mil",
    region: "Sudeste",
    highlights: [
      "Capital do agronegócio paulista",
      "Polo de saúde e educação",
      "Forte setor de biotecnologia"
    ],
    courtInfo: "TRT-15 (Tribunal Regional do Trabalho da 15ª Região - Campinas) e TJSP",
    localContext: "Ribeirão Preto é referência em agronegócio e saúde, com demandas trabalhistas nos setores sucroalcooleiro, hospitalar e de serviços qualificados."
  },
  {
    slug: "uberlandia",
    name: "Uberlândia",
    state: "Minas Gerais",
    stateCode: "MG",
    population: "699 mil",
    region: "Sudeste",
    highlights: [
      "Polo logístico do Brasil Central",
      "Forte agronegócio",
      "Centro de distribuição nacional"
    ],
    courtInfo: "TRT-3 (Tribunal Regional do Trabalho da 3ª Região) e TJMG",
    localContext: "Uberlândia é um dos maiores centros de distribuição do país, com demandas trabalhistas nos setores de logística, transporte e atacado."
  },
  {
    slug: "joinville",
    name: "Joinville",
    state: "Santa Catarina",
    stateCode: "SC",
    population: "597 mil",
    region: "Sul",
    highlights: [
      "Maior cidade de Santa Catarina",
      "Polo industrial diversificado",
      "Setor metalúrgico e de tecnologia"
    ],
    courtInfo: "TRT-12 (Tribunal Regional do Trabalho da 12ª Região) e TJSC",
    localContext: "Joinville é o maior polo industrial de Santa Catarina, com demandas trabalhistas nos setores metalúrgico, de tecnologia e de manufatura."
  },
  {
    slug: "londrina",
    name: "Londrina",
    state: "Paraná",
    stateCode: "PR",
    population: "580 mil",
    region: "Sul",
    highlights: [
      "Polo do agronegócio paranaense",
      "Centro universitário",
      "Forte setor de comércio"
    ],
    courtInfo: "TRT-9 (Tribunal Regional do Trabalho da 9ª Região) e TJPR",
    localContext: "Londrina é polo agroindustrial do Paraná, com demandas trabalhistas nos setores de café, soja, cooperativas agrícolas e comércio."
  }
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return brazilianCities.find(city => city.slug === slug);
};

export const getCitiesByRegion = (region: string): CityData[] => {
  return brazilianCities.filter(city => city.region === region);
};

export const getCitiesByState = (stateCode: string): CityData[] => {
  return brazilianCities.filter(city => city.stateCode === stateCode);
};

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
  },

  // =============== FASE 2 - 50 NOVAS CIDADES ESTRATÉGICAS ===============

  // REGIÃO METROPOLITANA DE SÃO PAULO
  {
    slug: "osasco",
    name: "Osasco",
    state: "São Paulo",
    stateCode: "SP",
    population: "700 mil",
    region: "Sudeste",
    highlights: [
      "5ª maior economia de SP",
      "Polo de serviços e tecnologia",
      "Forte setor financeiro"
    ],
    courtInfo: "TRT-2 e TJSP",
    localContext: "Osasco é uma das maiores economias de São Paulo, com forte setor de serviços e empresas de tecnologia."
  },
  {
    slug: "diadema",
    name: "Diadema",
    state: "São Paulo",
    stateCode: "SP",
    population: "420 mil",
    region: "Sudeste",
    highlights: [
      "Região do ABC Paulista",
      "Polo industrial",
      "Forte setor de plásticos e cosméticos"
    ],
    courtInfo: "TRT-2 e TJSP",
    localContext: "Diadema integra a região do ABC Paulista, com forte tradição industrial."
  },
  {
    slug: "maua",
    name: "Mauá",
    state: "São Paulo",
    stateCode: "SP",
    population: "480 mil",
    region: "Sudeste",
    highlights: [
      "Região do ABC Paulista",
      "Polo petroquímico",
      "Forte setor industrial"
    ],
    courtInfo: "TRT-2 e TJSP",
    localContext: "Mauá integra o ABC Paulista e tem forte setor comercial e industrial."
  },
  {
    slug: "carapicuiba",
    name: "Carapicuíba",
    state: "São Paulo",
    stateCode: "SP",
    population: "400 mil",
    region: "Sudeste",
    highlights: [
      "Região metropolitana de SP",
      "Cidade dormitório",
      "Forte comércio local"
    ],
    courtInfo: "TRT-2 e TJSP",
    localContext: "Carapicuíba está na região metropolitana de São Paulo."
  },
  {
    slug: "taboao-da-serra",
    name: "Taboão da Serra",
    state: "São Paulo",
    stateCode: "SP",
    population: "290 mil",
    region: "Sudeste",
    highlights: [
      "Região metropolitana de SP",
      "Forte setor de comércio",
      "Polo de serviços"
    ],
    courtInfo: "TRT-2 e TJSP",
    localContext: "Taboão da Serra está na região metropolitana de São Paulo."
  },
  {
    slug: "barueri",
    name: "Barueri",
    state: "São Paulo",
    stateCode: "SP",
    population: "280 mil",
    region: "Sudeste",
    highlights: [
      "Sede de multinacionais",
      "Alto PIB per capita",
      "Polo de tecnologia"
    ],
    courtInfo: "TRT-2 e TJSP",
    localContext: "Barueri é um dos maiores PIBs per capita do Brasil, sede de grandes empresas."
  },
  {
    slug: "cotia",
    name: "Cotia",
    state: "São Paulo",
    stateCode: "SP",
    population: "250 mil",
    region: "Sudeste",
    highlights: [
      "Região metropolitana de SP",
      "Muitos condomínios residenciais",
      "Crescimento acelerado"
    ],
    courtInfo: "TRT-2 e TJSP",
    localContext: "Cotia é cidade em crescimento na região metropolitana, com muitos condomínios residenciais."
  },

  // REGIÃO METROPOLITANA DO RIO DE JANEIRO
  {
    slug: "niteroi",
    name: "Niterói",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    population: "515 mil",
    region: "Sudeste",
    highlights: [
      "Maior IDH do RJ",
      "Alto poder aquisitivo",
      "Polo de cultura e turismo"
    ],
    courtInfo: "TRT-1 e TJRJ",
    localContext: "Niterói tem o maior IDH do Rio de Janeiro e população de alto poder aquisitivo."
  },
  {
    slug: "duque-de-caxias",
    name: "Duque de Caxias",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    population: "920 mil",
    region: "Sudeste",
    highlights: [
      "2ª maior economia do RJ",
      "Polo de refino de petróleo",
      "Forte setor industrial"
    ],
    courtInfo: "TRT-1 e TJRJ",
    localContext: "Duque de Caxias é a segunda maior economia do Rio de Janeiro."
  },
  {
    slug: "nova-iguacu",
    name: "Nova Iguaçu",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    population: "820 mil",
    region: "Sudeste",
    highlights: [
      "Baixada Fluminense",
      "Forte comércio",
      "Grande população"
    ],
    courtInfo: "TRT-1 e TJRJ",
    localContext: "Nova Iguaçu é uma das maiores cidades da Baixada Fluminense."
  },
  {
    slug: "sao-goncalo",
    name: "São Gonçalo",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    population: "1,1 milhão",
    region: "Sudeste",
    highlights: [
      "2ª maior população do RJ",
      "Forte comércio",
      "Acesso a Niterói"
    ],
    courtInfo: "TRT-1 e TJRJ",
    localContext: "São Gonçalo é a segunda maior cidade do RJ em população."
  },
  {
    slug: "petropolis",
    name: "Petrópolis",
    state: "Rio de Janeiro",
    stateCode: "RJ",
    population: "307 mil",
    region: "Sudeste",
    highlights: [
      "Cidade imperial",
      "Turismo e cultura",
      "Muitos aposentados"
    ],
    courtInfo: "TRT-1 e TJRJ",
    localContext: "Petrópolis é cidade turística e histórica, com população de classe média/alta."
  },

  // INTERIOR DE SÃO PAULO
  {
    slug: "sorocaba",
    name: "Sorocaba",
    state: "São Paulo",
    stateCode: "SP",
    population: "700 mil",
    region: "Sudeste",
    highlights: [
      "5ª maior cidade de SP",
      "Polo industrial",
      "Forte setor automotivo"
    ],
    courtInfo: "TRT-15 e TJSP",
    localContext: "Sorocaba é a quinta maior cidade de São Paulo, com forte setor industrial."
  },
  {
    slug: "jundiai",
    name: "Jundiaí",
    state: "São Paulo",
    stateCode: "SP",
    population: "420 mil",
    region: "Sudeste",
    highlights: [
      "Alto PIB per capita",
      "Polo de logística",
      "Alta qualidade de vida"
    ],
    courtInfo: "TRT-15 e TJSP",
    localContext: "Jundiaí tem um dos maiores PIBs per capita do Brasil."
  },
  {
    slug: "sao-jose-dos-campos",
    name: "São José dos Campos",
    state: "São Paulo",
    stateCode: "SP",
    population: "730 mil",
    region: "Sudeste",
    highlights: [
      "Polo tecnológico e aeroespacial",
      "Sede do ITA e INPE",
      "Alta qualidade de vida"
    ],
    courtInfo: "TRT-15 e TJSP",
    localContext: "São José dos Campos é polo tecnológico e aeroespacial."
  },
  {
    slug: "santos",
    name: "Santos",
    state: "São Paulo",
    stateCode: "SP",
    population: "435 mil",
    region: "Sudeste",
    highlights: [
      "Maior porto da América Latina",
      "Turismo e praias",
      "Forte setor portuário"
    ],
    courtInfo: "TRT-2 e TJSP",
    localContext: "Santos é o maior porto da América Latina e importante destino turístico."
  },
  {
    slug: "piracicaba",
    name: "Piracicaba",
    state: "São Paulo",
    stateCode: "SP",
    population: "410 mil",
    region: "Sudeste",
    highlights: [
      "Polo agroindustrial",
      "Sede da ESALQ/USP",
      "Setor sucroalcooleiro"
    ],
    courtInfo: "TRT-15 e TJSP",
    localContext: "Piracicaba é polo agroindustrial e sede da ESALQ/USP."
  },
  {
    slug: "bauru",
    name: "Bauru",
    state: "São Paulo",
    stateCode: "SP",
    population: "380 mil",
    region: "Sudeste",
    highlights: [
      "Hub ferroviário",
      "Centro regional",
      "Forte setor de serviços"
    ],
    courtInfo: "TRT-15 e TJSP",
    localContext: "Bauru é hub ferroviário e centro regional do interior paulista."
  },
  {
    slug: "franca",
    name: "Franca",
    state: "São Paulo",
    stateCode: "SP",
    population: "355 mil",
    region: "Sudeste",
    highlights: [
      "Capital do calçado",
      "Polo de couro",
      "Forte exportação"
    ],
    courtInfo: "TRT-15 e TJSP",
    localContext: "Franca é a capital brasileira do calçado, com forte setor industrial."
  },
  {
    slug: "sao-jose-do-rio-preto",
    name: "São José do Rio Preto",
    state: "São Paulo",
    stateCode: "SP",
    population: "465 mil",
    region: "Sudeste",
    highlights: [
      "Polo de saúde",
      "Hub do noroeste",
      "Forte agronegócio"
    ],
    courtInfo: "TRT-15 e TJSP",
    localContext: "São José do Rio Preto é polo de saúde e agronegócio."
  },

  // INTERIOR DE MINAS GERAIS
  {
    slug: "contagem",
    name: "Contagem",
    state: "Minas Gerais",
    stateCode: "MG",
    population: "670 mil",
    region: "Sudeste",
    highlights: [
      "2ª maior cidade de MG",
      "Polo industrial",
      "Região metropolitana de BH"
    ],
    courtInfo: "TRT-3 e TJMG",
    localContext: "Contagem é a segunda maior cidade de MG e polo industrial."
  },
  {
    slug: "betim",
    name: "Betim",
    state: "Minas Gerais",
    stateCode: "MG",
    population: "440 mil",
    region: "Sudeste",
    highlights: [
      "Sede da Fiat",
      "Polo automotivo",
      "Forte setor industrial"
    ],
    courtInfo: "TRT-3 e TJMG",
    localContext: "Betim é polo automotivo de MG, sede da Fiat."
  },
  {
    slug: "juiz-de-fora",
    name: "Juiz de Fora",
    state: "Minas Gerais",
    stateCode: "MG",
    population: "575 mil",
    region: "Sudeste",
    highlights: [
      "Polo de educação e saúde",
      "Hub da Zona da Mata",
      "Forte setor de serviços"
    ],
    courtInfo: "TRT-3 e TJMG",
    localContext: "Juiz de Fora é polo de educação e saúde da Zona da Mata mineira."
  },
  {
    slug: "montes-claros",
    name: "Montes Claros",
    state: "Minas Gerais",
    stateCode: "MG",
    population: "415 mil",
    region: "Sudeste",
    highlights: [
      "Polo do norte de MG",
      "Centro de saúde regional",
      "Forte comércio"
    ],
    courtInfo: "TRT-3 e TJMG",
    localContext: "Montes Claros é polo de serviços do norte de Minas Gerais."
  },
  {
    slug: "uberaba",
    name: "Uberaba",
    state: "Minas Gerais",
    stateCode: "MG",
    population: "340 mil",
    region: "Sudeste",
    highlights: [
      "Capital do zebu",
      "Polo agropecuário",
      "Forte setor de pecuária"
    ],
    courtInfo: "TRT-3 e TJMG",
    localContext: "Uberaba é capital do zebu e polo agropecuário do Triângulo Mineiro."
  },

  // SUL DO BRASIL
  {
    slug: "blumenau",
    name: "Blumenau",
    state: "Santa Catarina",
    stateCode: "SC",
    population: "365 mil",
    region: "Sul",
    highlights: [
      "Polo têxtil",
      "Oktoberfest",
      "Alto IDH"
    ],
    courtInfo: "TRT-12 e TJSC",
    localContext: "Blumenau é polo têxtil e cervejeiro de Santa Catarina, com alto IDH."
  },
  {
    slug: "itajai",
    name: "Itajaí",
    state: "Santa Catarina",
    stateCode: "SC",
    population: "220 mil",
    region: "Sul",
    highlights: [
      "2º maior porto do Brasil",
      "Polo de logística",
      "Forte setor pesqueiro"
    ],
    courtInfo: "TRT-12 e TJSC",
    localContext: "Itajaí é o segundo maior porto do Brasil, com forte setor de logística."
  },
  {
    slug: "balneario-camboriu",
    name: "Balneário Camboriú",
    state: "Santa Catarina",
    stateCode: "SC",
    population: "150 mil",
    region: "Sul",
    highlights: [
      "Destino turístico premium",
      "Arranha-céus mais altos do Brasil",
      "Alto poder aquisitivo"
    ],
    courtInfo: "TRT-12 e TJSC",
    localContext: "Balneário Camboriú é destino turístico de alto padrão."
  },
  {
    slug: "maringa",
    name: "Maringá",
    state: "Paraná",
    stateCode: "PR",
    population: "430 mil",
    region: "Sul",
    highlights: [
      "Maior IDH do Paraná",
      "Polo do agronegócio",
      "Alta qualidade de vida"
    ],
    courtInfo: "TRT-9 e TJPR",
    localContext: "Maringá tem o maior IDH do Paraná e é polo do agronegócio."
  },
  {
    slug: "cascavel",
    name: "Cascavel",
    state: "Paraná",
    stateCode: "PR",
    population: "330 mil",
    region: "Sul",
    highlights: [
      "Polo do agronegócio",
      "Oeste do Paraná",
      "Centro de cooperativas"
    ],
    courtInfo: "TRT-9 e TJPR",
    localContext: "Cascavel é polo do agronegócio do oeste do Paraná."
  },
  {
    slug: "ponta-grossa",
    name: "Ponta Grossa",
    state: "Paraná",
    stateCode: "PR",
    population: "360 mil",
    region: "Sul",
    highlights: [
      "Hub logístico",
      "Polo de papel e celulose",
      "Centro universitário"
    ],
    courtInfo: "TRT-9 e TJPR",
    localContext: "Ponta Grossa é hub logístico do Paraná."
  },
  {
    slug: "caxias-do-sul",
    name: "Caxias do Sul",
    state: "Rio Grande do Sul",
    stateCode: "RS",
    population: "520 mil",
    region: "Sul",
    highlights: [
      "2ª maior economia do RS",
      "Polo metalúrgico",
      "Região vinícola"
    ],
    courtInfo: "TRT-4 e TJRS",
    localContext: "Caxias do Sul é a segunda maior economia do RS, polo metalúrgico e vinícola."
  },
  {
    slug: "canoas",
    name: "Canoas",
    state: "Rio Grande do Sul",
    stateCode: "RS",
    population: "350 mil",
    region: "Sul",
    highlights: [
      "Região metropolitana de POA",
      "Polo industrial",
      "Sede de refinaria"
    ],
    courtInfo: "TRT-4 e TJRS",
    localContext: "Canoas é cidade industrial na região metropolitana de Porto Alegre."
  },
  {
    slug: "pelotas",
    name: "Pelotas",
    state: "Rio Grande do Sul",
    stateCode: "RS",
    population: "345 mil",
    region: "Sul",
    highlights: [
      "Polo de doces",
      "Centro universitário",
      "Sul do RS"
    ],
    courtInfo: "TRT-4 e TJRS",
    localContext: "Pelotas é polo de doces e educação do sul gaúcho."
  },
  {
    slug: "chapeco",
    name: "Chapecó",
    state: "Santa Catarina",
    stateCode: "SC",
    population: "225 mil",
    region: "Sul",
    highlights: [
      "Capital da agroindústria",
      "Sede de frigoríficos",
      "Oeste de SC"
    ],
    courtInfo: "TRT-12 e TJSC",
    localContext: "Chapecó é capital da agroindústria brasileira, sede de grandes frigoríficos."
  },

  // NORDESTE
  {
    slug: "caruaru",
    name: "Caruaru",
    state: "Pernambuco",
    stateCode: "PE",
    population: "370 mil",
    region: "Nordeste",
    highlights: [
      "Capital do agreste",
      "Maior feira livre do Brasil",
      "Polo têxtil"
    ],
    courtInfo: "TRT-6 e TJPE",
    localContext: "Caruaru é a capital do agreste pernambucano e maior feira livre do Brasil."
  },
  {
    slug: "feira-de-santana",
    name: "Feira de Santana",
    state: "Bahia",
    stateCode: "BA",
    population: "620 mil",
    region: "Nordeste",
    highlights: [
      "2ª maior cidade da Bahia",
      "Polo comercial",
      "Hub de transportes"
    ],
    courtInfo: "TRT-5 e TJBA",
    localContext: "Feira de Santana é o maior polo comercial do interior do Nordeste."
  },
  {
    slug: "campina-grande",
    name: "Campina Grande",
    state: "Paraíba",
    stateCode: "PB",
    population: "410 mil",
    region: "Nordeste",
    highlights: [
      "Polo de tecnologia",
      "Maior São João do mundo",
      "Centro universitário"
    ],
    courtInfo: "TRT-13 e TJPB",
    localContext: "Campina Grande é polo de tecnologia do Nordeste."
  },
  {
    slug: "mossoro",
    name: "Mossoró",
    state: "Rio Grande do Norte",
    stateCode: "RN",
    population: "300 mil",
    region: "Nordeste",
    highlights: [
      "2ª maior cidade do RN",
      "Polo de petróleo e sal",
      "Centro regional"
    ],
    courtInfo: "TRT-21 e TJRN",
    localContext: "Mossoró é a segunda maior cidade do RN, polo de petróleo e sal."
  },
  {
    slug: "imperatriz",
    name: "Imperatriz",
    state: "Maranhão",
    stateCode: "MA",
    population: "260 mil",
    region: "Nordeste",
    highlights: [
      "2ª maior cidade do MA",
      "Polo do agronegócio",
      "Tocantins legal"
    ],
    courtInfo: "TRT-16 e TJMA",
    localContext: "Imperatriz é a segunda maior cidade do Maranhão, polo do agronegócio."
  },
  {
    slug: "petrolina",
    name: "Petrolina",
    state: "Pernambuco",
    stateCode: "PE",
    population: "360 mil",
    region: "Nordeste",
    highlights: [
      "Vale do São Francisco",
      "Polo frutícola",
      "Exportação de frutas"
    ],
    courtInfo: "TRT-6 e TJPE",
    localContext: "Petrolina é polo frutícola do Vale do São Francisco."
  },
  {
    slug: "juazeiro-do-norte",
    name: "Juazeiro do Norte",
    state: "Ceará",
    stateCode: "CE",
    population: "275 mil",
    region: "Nordeste",
    highlights: [
      "Turismo religioso",
      "Padre Cícero",
      "Polo do Cariri"
    ],
    courtInfo: "TRT-7 e TJCE",
    localContext: "Juazeiro do Norte é polo de turismo religioso do Cariri cearense."
  },
  {
    slug: "vitoria-da-conquista",
    name: "Vitória da Conquista",
    state: "Bahia",
    stateCode: "BA",
    population: "340 mil",
    region: "Nordeste",
    highlights: [
      "Polo de saúde",
      "Centro universitário",
      "Sudoeste baiano"
    ],
    courtInfo: "TRT-5 e TJBA",
    localContext: "Vitória da Conquista é polo de saúde e educação do sudoeste baiano."
  },

  // NORTE E CENTRO-OESTE
  {
    slug: "porto-velho",
    name: "Porto Velho",
    state: "Rondônia",
    stateCode: "RO",
    population: "540 mil",
    region: "Norte",
    highlights: [
      "Capital de Rondônia",
      "Polo de energia",
      "Agronegócio em expansão"
    ],
    courtInfo: "TRT-14 e TJRO",
    localContext: "Porto Velho é capital de Rondônia, com economia baseada em energia e agronegócio."
  },
  {
    slug: "rio-branco",
    name: "Rio Branco",
    state: "Acre",
    stateCode: "AC",
    population: "415 mil",
    region: "Norte",
    highlights: [
      "Capital do Acre",
      "Fronteira amazônica",
      "Setor extrativista"
    ],
    courtInfo: "TRT-14 e TJAC",
    localContext: "Rio Branco é capital do Acre, com desafios de infraestrutura e acesso."
  },
  {
    slug: "macapa",
    name: "Macapá",
    state: "Amapá",
    stateCode: "AP",
    population: "520 mil",
    region: "Norte",
    highlights: [
      "Capital do Amapá",
      "Linha do Equador",
      "Fronteira com Guiana Francesa"
    ],
    courtInfo: "TRT-8 e TJAP",
    localContext: "Macapá é capital do Amapá, com desafios históricos de fornecimento de energia."
  },
  {
    slug: "boa-vista",
    name: "Boa Vista",
    state: "Roraima",
    stateCode: "RR",
    population: "420 mil",
    region: "Norte",
    highlights: [
      "Capital de Roraima",
      "Fronteira com Venezuela",
      "Polo de comércio fronteiriço"
    ],
    courtInfo: "TRT-11 e TJRR",
    localContext: "Boa Vista é capital de Roraima, com desafios de infraestrutura."
  },
  {
    slug: "palmas",
    name: "Palmas",
    state: "Tocantins",
    stateCode: "TO",
    population: "310 mil",
    region: "Norte",
    highlights: [
      "Capital mais nova do Brasil",
      "Planejamento urbano",
      "Polo de agronegócio"
    ],
    courtInfo: "TRT-10 e TJTO",
    localContext: "Palmas é a capital mais nova do Brasil, com infraestrutura em desenvolvimento."
  },
  {
    slug: "anapolis",
    name: "Anápolis",
    state: "Goiás",
    stateCode: "GO",
    population: "390 mil",
    region: "Centro-Oeste",
    highlights: [
      "Polo farmacêutico",
      "Centro logístico",
      "Base aérea"
    ],
    courtInfo: "TRT-18 e TJGO",
    localContext: "Anápolis é polo farmacêutico e logístico de Goiás."
  },
  {
    slug: "rondonopolis",
    name: "Rondonópolis",
    state: "Mato Grosso",
    stateCode: "MT",
    population: "240 mil",
    region: "Centro-Oeste",
    highlights: [
      "Polo do agronegócio",
      "Sul de Mato Grosso",
      "Centro de distribuição"
    ],
    courtInfo: "TRT-23 e TJMT",
    localContext: "Rondonópolis é polo do agronegócio do sul de Mato Grosso."
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

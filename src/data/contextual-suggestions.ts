// Sugestões contextuais baseadas no problema detectado
export const CONTEXTUAL_SUGGESTIONS: Record<string, string[]> = {
  // FAMÍLIA
  'divórcio': [
    "Quanto tempo leva um divórcio?",
    "Posso dividir os bens agora?",
    "E se ele/ela não aceitar?"
  ],
  'separação': [
    "Qual a diferença pra divórcio?",
    "Preciso de advogado?",
    "Quanto custa?"
  ],
  'pensão alimentícia': [
    "Qual valor da pensão?",
    "E se não pagar?",
    "Como aumentar a pensão?"
  ],
  'guarda': [
    "Como funciona guarda compartilhada?",
    "Posso mudar de cidade com meu filho?",
    "E se dificultar a visita?"
  ],
  'herança': [
    "Quanto tempo leva o inventário?",
    "Precisa de todos os herdeiros?",
    "Quem tem direito?"
  ],
  'alienação parental': [
    "O que caracteriza alienação?",
    "Como provar isso?",
    "Posso perder a guarda?"
  ],
  
  // TRABALHISTA
  'demissão': [
    "O que tenho direito a receber?",
    "Qual prazo pra reclamar?",
    "Posso pedir danos morais?"
  ],
  'demitido': [
    "Tenho direito a seguro desemprego?",
    "E se não pagaram tudo?",
    "Quanto tempo pra entrar na justiça?"
  ],
  'assédio moral': [
    "O que é considerado assédio?",
    "Preciso de provas?",
    "Quanto posso ganhar?"
  ],
  'assédio sexual': [
    "Como denunciar?",
    "Posso ser demitida por isso?",
    "É crime?"
  ],
  'acidente de trabalho': [
    "A empresa é obrigada a pagar?",
    "Posso ser demitido doente?",
    "Tenho estabilidade?"
  ],
  'horas extras': [
    "Qual o prazo pra cobrar?",
    "Preciso de prova?",
    "Quanto vale a hora extra?"
  ],
  
  // PREVIDENCIÁRIO
  'aposentadoria': [
    "Quanto tempo falta?",
    "Posso continuar trabalhando?",
    "Como calcular o valor?"
  ],
  'auxílio-doença': [
    "Quanto tempo demora?",
    "Preciso de laudo?",
    "E se negar?"
  ],
  'BPC/LOAS': [
    "Quem tem direito?",
    "Qual o valor?",
    "Precisa ter contribuído?"
  ],
  'pensão por morte': [
    "Quem pode receber?",
    "Qual o valor?",
    "Quanto tempo demora?"
  ],
  
  // PENAL
  'prisão': [
    "Como funciona habeas corpus?",
    "Pode sair sob fiança?",
    "Quando é a audiência?"
  ],
  'preso': [
    "Quanto tempo pode ficar preso?",
    "Posso visitar?",
    "Precisa de advogado?"
  ],
  'flagrante': [
    "Pode ser solto hoje?",
    "Precisa de advogado agora?",
    "Qual delegacia?"
  ],
  'violência doméstica': [
    "Como pedir medida protetiva?",
    "Ele pode ser preso?",
    "Quanto tempo demora?"
  ],
  
  // CIVIL / CONSUMIDOR
  'golpe': [
    "Posso recuperar o dinheiro?",
    "Já fiz BO, e agora?",
    "O banco é responsável?"
  ],
  'pix': [
    "O banco devolve o dinheiro?",
    "Qual prazo pra reclamar?",
    "Como processar o golpista?"
  ],
  'consumidor': [
    "Posso pedir danos morais?",
    "Qual o prazo pra reclamar?",
    "Preciso ir ao Procon primeiro?"
  ],
  'plano de saúde': [
    "Podem negar a cirurgia?",
    "Posso ter liminar rápida?",
    "O plano paga tudo?"
  ],
  'danos morais': [
    "Quanto posso receber?",
    "Preciso de provas?",
    "Demora muito?"
  ],
  'despejo': [
    "Quanto tempo tenho pra sair?",
    "Posso negociar a dívida?",
    "E se não tiver pra onde ir?"
  ],
  
  // CONSUMIDOR - COMPRAS ONLINE
  'compra online': [
    "Posso devolver em 7 dias?",
    "E se não entregar?",
    "Como pedir reembolso?"
  ],
  'e-commerce': [
    "O site sumiu, e agora?",
    "Produto veio errado, o que fazer?",
    "Posso cancelar a compra?"
  ],
  'marketplace': [
    "Mercado Livre é responsável?",
    "Amazon responde pelo vendedor?",
    "Como recuperar meu dinheiro?"
  ],
  'arrependimento': [
    "Qual prazo pra desistir?",
    "Preciso pagar frete?",
    "E se não devolverem o dinheiro?"
  ],
  
  // CONSUMIDOR - GARANTIA
  'garantia': [
    "Qual prazo da garantia?",
    "Assistência não resolve, o que fazer?",
    "Posso pedir dinheiro de volta?"
  ],
  'defeito': [
    "Produto veio com defeito, o que fazer?",
    "Qual prazo pra reclamar?",
    "Posso trocar ou só consertar?"
  ],
  'vício': [
    "Qual diferença de defeito?",
    "Tenho direito a troca?",
    "E se passar o prazo?"
  ],
  'recall': [
    "Sou obrigado a levar?",
    "E se causar acidente?",
    "A empresa paga tudo?"
  ],
  
  // CONSUMIDOR - CONTRATOS ABUSIVOS
  'contrato abusivo': [
    "Posso cancelar o contrato?",
    "Cláusula é válida?",
    "Como anular contrato?"
  ],
  'multa abusiva': [
    "Qual multa máxima permitida?",
    "Posso contestar a multa?",
    "Como reduzir o valor?"
  ],
  'fidelidade': [
    "Sou obrigado a cumprir?",
    "Posso cancelar antes?",
    "Qual multa por quebra?"
  ],
  'cláusula abusiva': [
    "Como identificar cláusula abusiva?",
    "Posso anular só essa parte?",
    "Preciso de advogado?"
  ],
  
  // CONSUMIDOR - TELECOMUNICAÇÕES
  'telefonia': [
    "Podem cobrar serviço não contratado?",
    "Como cancelar o plano?",
    "Posso pedir danos morais?"
  ],
  'internet': [
    "Velocidade menor que contratei, o que fazer?",
    "Podem cortar sem aviso?",
    "Como trocar de operadora?"
  ],
  'tv a cabo': [
    "Posso cancelar quando quiser?",
    "Cobraram canal que não pedi?",
    "Como reclamar na Anatel?"
  ],
  'operadora': [
    "Vivo/Claro/Tim me cobrou errado?",
    "Posso processar a operadora?",
    "Como fazer portabilidade?"
  ],
  'celular': [
    "Chip bloqueado indevidamente?",
    "Como reclamar de cobrança?",
    "Posso pedir portabilidade?"
  ],
  
  // CONSUMIDOR - FINANCEIRO
  'banco': [
    "Cobrança indevida, o que fazer?",
    "Banco pode negar empréstimo?",
    "Como contestar taxas?"
  ],
  'cartão de crédito': [
    "Não reconheço essa compra?",
    "Como contestar cobrança?",
    "Banco é responsável por fraude?"
  ],
  'empréstimo': [
    "Juros estão abusivos?",
    "Posso renegociar a dívida?",
    "Como calcular os juros?"
  ],
  'negativação': [
    "Fui negativado indevidamente?",
    "Qual prazo pra tirar o nome?",
    "Posso pedir indenização?"
  ],
  'nome sujo': [
    "Quanto tempo fica negativado?",
    "Como limpar meu nome?",
    "Posso processar a empresa?"
  ],
  'serasa': [
    "Como tirar meu nome do Serasa?",
    "Negativação indevida dá danos morais?",
    "Qual prazo máximo?"
  ],
  'spc': [
    "Qual diferença pro Serasa?",
    "Como contestar dívida?",
    "Empresa pode negativar sem avisar?"
  ],
  'consignado': [
    "Descontaram mais que o permitido?",
    "Não autorizei o empréstimo?",
    "Como cancelar consignado?"
  ],
  
  // CONSUMIDOR - SAÚDE
  'hospital': [
    "Cobraram valor absurdo?",
    "Plano não cobre o tratamento?",
    "Houve erro médico?"
  ],
  'medicamento': [
    "Plano é obrigado a cobrir?",
    "Remédio causou reação, o que fazer?",
    "Posso processar o laboratório?"
  ],
  'cirurgia': [
    "Plano pode negar cirurgia?",
    "Como conseguir liminar?",
    "Erro na cirurgia, tenho direito?"
  ],
  'erro médico': [
    "Como provar erro médico?",
    "Qual indenização?",
    "Quanto tempo tenho pra processar?"
  ],
  'convênio': [
    "Podem negar atendimento?",
    "Como mudar de plano?",
    "Reajuste está abusivo?"
  ],
  'reajuste': [
    "Aumento do plano é abusivo?",
    "Posso contestar o reajuste?",
    "Qual percentual máximo?"
  ],
  
  // CONSUMIDOR - AVIAÇÃO
  'voo cancelado': [
    "Quais meus direitos?",
    "A empresa paga hotel?",
    "Posso pedir indenização?"
  ],
  'atraso de voo': [
    "Quanto tempo pra ter direitos?",
    "Alimentação é obrigatória?",
    "Posso desistir da viagem?"
  ],
  'bagagem': [
    "Mala extraviada, o que fazer?",
    "Qual valor da indenização?",
    "Bagagem danificada, tenho direito?"
  ],
  'overbooking': [
    "Podem me tirar do voo?",
    "Qual indenização por overbooking?",
    "Empresa é obrigada a reacomodar?"
  ],
  'milhas': [
    "Milhas podem expirar?",
    "Como resgatar milhas?",
    "Empresa cancelou minhas milhas?"
  ],
  'passagem': [
    "Posso cancelar passagem?",
    "Taxa de remarcação é abusiva?",
    "Como pedir reembolso?"
  ],
  
  // CONSUMIDOR - IMOBILIÁRIO
  'construtora': [
    "Obra atrasou, tenho direito?",
    "Posso desistir da compra?",
    "Como pedir indenização?"
  ],
  'imóvel': [
    "Apartamento veio com defeito?",
    "Como reclamar da construtora?",
    "Qual prazo de garantia?"
  ],
  'atraso de obra': [
    "Qual indenização por atraso?",
    "Posso pedir rescisão?",
    "Construtora paga aluguel?"
  ],
  
  // CONSUMIDOR - VEÍCULOS
  'carro': [
    "Comprei carro com defeito?",
    "Concessionária é responsável?",
    "Posso devolver o veículo?"
  ],
  'concessionária': [
    "Não fizeram o recall?",
    "Garantia não cobre o defeito?",
    "Posso processar a montadora?"
  ],
  'veículo': [
    "Carro veio com problema oculto?",
    "Qual prazo pra reclamar?",
    "Como pedir dinheiro de volta?"
  ],
  
  // DEFAULT
  'default': [
    "Como funciona a consulta?",
    "Quanto custa um processo?",
    "Qual o prazo?"
  ]
};

// Função para buscar sugestões por problema
export const getSuggestionsByProblem = (problem: string | null): string[] => {
  if (!problem) return CONTEXTUAL_SUGGESTIONS['default'];
  
  const normalizedProblem = problem.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  // Busca direta
  for (const [key, suggestions] of Object.entries(CONTEXTUAL_SUGGESTIONS)) {
    if (normalizedProblem.includes(key.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, ''))) {
      return suggestions;
    }
  }
  
  // Mapeamento de variações
  const problemMapping: Record<string, string> = {
    // Família
    'separacao': 'divórcio',
    'filhos': 'guarda',
    'alimentos': 'pensão alimentícia',
    
    // Trabalhista
    'mandaram embora': 'demissão',
    'trabalho': 'demissão',
    
    // Previdenciário
    'inss': 'aposentadoria',
    'beneficio': 'auxílio-doença',
    'doente': 'auxílio-doença',
    'idoso': 'BPC/LOAS',
    'deficiente': 'BPC/LOAS',
    
    // Penal
    'cadeia': 'prisão',
    'delegacia': 'flagrante',
    
    // Golpes/Fraudes
    'estelionato': 'golpe',
    'fraude': 'golpe',
    'whatsapp': 'golpe',
    
    // Consumidor - Geral
    'produto': 'consumidor',
    'loja': 'consumidor',
    'reclamacao': 'consumidor',
    'procon': 'consumidor',
    
    // Consumidor - Compras Online
    'shopee': 'marketplace',
    'mercado livre': 'marketplace',
    'amazon': 'marketplace',
    'aliexpress': 'compra online',
    'shein': 'compra online',
    'magalu': 'compra online',
    'casas bahia': 'compra online',
    'americanas': 'compra online',
    'ifood': 'compra online',
    'rappi': 'compra online',
    'uber': 'compra online',
    'devolucao': 'arrependimento',
    'reembolso': 'arrependimento',
    
    // Consumidor - Garantia
    'assistencia tecnica': 'garantia',
    'produto quebrou': 'defeito',
    'nao funciona': 'defeito',
    'estragou': 'defeito',
    'produto com problema': 'vício',
    
    // Consumidor - Contratos
    'contrato': 'contrato abusivo',
    'multa': 'multa abusiva',
    'fidelizacao': 'fidelidade',
    'clausula': 'cláusula abusiva',
    'termo': 'cláusula abusiva',
    
    // Consumidor - Telecomunicações
    'vivo': 'operadora',
    'claro': 'operadora',
    'tim': 'operadora',
    'oi': 'operadora',
    'net': 'tv a cabo',
    'sky': 'tv a cabo',
    'wifi': 'internet',
    'fibra': 'internet',
    'banda larga': 'internet',
    'sinal': 'celular',
    'linha': 'telefonia',
    'telefone': 'telefonia',
    'anatel': 'telefonia',
    
    // Consumidor - Financeiro
    'itau': 'banco',
    'bradesco': 'banco',
    'santander': 'banco',
    'caixa': 'banco',
    'bb': 'banco',
    'nubank': 'banco',
    'inter': 'banco',
    'c6': 'banco',
    'credito': 'cartão de crédito',
    'debito': 'banco',
    'cobranca': 'banco',
    'financiamento': 'empréstimo',
    'juros': 'empréstimo',
    'divida': 'negativação',
    'negativado': 'negativação',
    'nome limpo': 'nome sujo',
    'score': 'serasa',
    'boa vista': 'spc',
    'desconto indevido': 'consignado',
    'desconto folha': 'consignado',
    
    // Consumidor - Saúde
    'saude': 'plano de saúde',
    'unimed': 'convênio',
    'amil': 'convênio',
    'sulamerica': 'convênio',
    'bradesco saude': 'convênio',
    'hapvida': 'convênio',
    'notre dame': 'convênio',
    'tratamento': 'plano de saúde',
    'internacao': 'hospital',
    'exame': 'plano de saúde',
    'medico': 'erro médico',
    'remedio': 'medicamento',
    'aumento plano': 'reajuste',
    
    // Consumidor - Aviação
    'aviao': 'voo cancelado',
    'aeroporto': 'atraso de voo',
    'latam': 'voo cancelado',
    'gol': 'voo cancelado',
    'azul': 'voo cancelado',
    'mala': 'bagagem',
    'extravio': 'bagagem',
    'viagem': 'passagem',
    'smiles': 'milhas',
    'tudo azul': 'milhas',
    'latam pass': 'milhas',
    
    // Consumidor - Imobiliário
    'mrv': 'construtora',
    'cyrela': 'construtora',
    'tenda': 'construtora',
    'minha casa minha vida': 'construtora',
    'apartamento': 'imóvel',
    'entrega': 'atraso de obra',
    
    // Consumidor - Veículos
    'toyota': 'concessionária',
    'volkswagen': 'concessionária',
    'fiat': 'concessionária',
    'chevrolet': 'concessionária',
    'honda': 'concessionária',
    'hyundai': 'concessionária',
    'moto': 'veículo',
    'automovel': 'carro',
    
    // Moradia
    'aluguel': 'despejo',
    'inquilino': 'despejo'
  };
  
  for (const [key, value] of Object.entries(problemMapping)) {
    if (normalizedProblem.includes(key)) {
      return CONTEXTUAL_SUGGESTIONS[value] || CONTEXTUAL_SUGGESTIONS['default'];
    }
  }
  
  return CONTEXTUAL_SUGGESTIONS['default'];
};

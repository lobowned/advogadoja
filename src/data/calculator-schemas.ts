// Centralized JSON-LD Schema configuration for all calculator pages

export interface CalculatorSchemaData {
  id: string;
  name: string;
  description: string;
  url: string;
  category: 'trabalhista' | 'familia' | 'previdenciario' | 'civil';
  features: string[];
  faqs: Array<{ question: string; answer: string }>;
}

const BASE_URL = "https://advogadoja.lovable.app";

export const calculatorSchemas: Record<string, CalculatorSchemaData> = {
  trabalhista: {
    id: "trabalhista",
    name: "Calculadora de Rescisão Trabalhista",
    description: "Calcule grátis suas verbas rescisórias: aviso prévio, FGTS com multa 40%, 13º salário, férias proporcionais. Descubra quanto você tem a receber na demissão.",
    url: `${BASE_URL}/calculadora-trabalhista`,
    category: "trabalhista",
    features: ["Aviso Prévio", "FGTS + Multa 40%", "13º Proporcional", "Férias + 1/3", "Multas CLT"],
    faqs: [
      { question: "O que é aviso prévio?", answer: "O aviso prévio é um direito do trabalhador que é comunicado da demissão. Ele pode ser trabalhado ou indenizado. O mínimo são 30 dias, acrescidos de 3 dias por ano trabalhado na empresa, até o máximo de 90 dias." },
      { question: "Como funciona a multa de 40% do FGTS?", answer: "Quando o empregador demite sem justa causa, ele deve pagar uma multa de 40% sobre o saldo total do FGTS do trabalhador. Esse valor é depositado na conta vinculada do FGTS." },
      { question: "Quando tenho direito ao 13º salário proporcional?", answer: "Você tem direito ao 13º salário proporcional sempre que for demitido, independentemente do tipo de demissão (exceto justa causa). O cálculo considera os meses trabalhados no ano, sendo que 15 dias ou mais no mês conta como mês completo." }
    ]
  },
  "horas-extras": {
    id: "horas-extras",
    name: "Calculadora de Horas Extras",
    description: "Calcule horas extras não pagas com adicional de 50%, 100% em feriados e domingos, adicional noturno e todos os reflexos trabalhistas.",
    url: `${BASE_URL}/calculadora-horas-extras`,
    category: "trabalhista",
    features: ["Adicional 50%", "Feriados 100%", "Reflexos CLT", "Adicional Noturno"],
    faqs: [
      { question: "Qual o adicional de horas extras?", answer: "As horas extras comuns têm adicional de no mínimo 50% sobre a hora normal. Já as horas extras em domingos e feriados devem ter adicional de 100% (dobro do valor)." },
      { question: "O que são reflexos das horas extras?", answer: "Os reflexos são os valores que as horas extras habituais geram em outras verbas como 13º salário, férias + 1/3, FGTS e aviso prévio. Se você faz horas extras com frequência, tem direito a esses reflexos." },
      { question: "Como funciona o adicional noturno?", answer: "O trabalho noturno (entre 22h e 5h) tem adicional mínimo de 20% sobre a hora diurna. Além disso, a hora noturna é reduzida (52 minutos e 30 segundos conta como 1 hora)." }
    ]
  },
  "seguro-desemprego": {
    id: "seguro-desemprego",
    name: "Calculadora de Seguro-Desemprego",
    description: "Calcule o valor e quantidade de parcelas do seguro-desemprego. Tabela atualizada 2024 com todos os requisitos.",
    url: `${BASE_URL}/calculadora-seguro-desemprego`,
    category: "trabalhista",
    features: ["Valor da Parcela", "Número de Parcelas", "Faixas 2024", "Requisitos"],
    faqs: [
      { question: "Quantas parcelas de seguro-desemprego posso receber?", answer: "O número de parcelas varia conforme seu histórico: na 1ª solicitação, de 4 a 5 parcelas (mínimo 12 meses trabalhados); na 2ª, de 3 a 5 parcelas (mínimo 9 meses); a partir da 3ª, de 3 a 5 parcelas (mínimo 6 meses)." },
      { question: "Qual o valor máximo do seguro-desemprego em 2024?", answer: "Em 2024, o valor máximo do seguro-desemprego é de R$ 2.313,74 por parcela. O valor mínimo é de 1 salário mínimo (R$ 1.412,00)." },
      { question: "Quem tem direito ao seguro-desemprego?", answer: "Tem direito quem foi demitido sem justa causa, trabalhou com carteira assinada pelo período mínimo exigido, não tem renda própria suficiente para sua manutenção e não está recebendo outro benefício previdenciário (exceto pensão por morte)." }
    ]
  },
  fgts: {
    id: "fgts",
    name: "Calculadora de FGTS",
    description: "Simule seu saldo de FGTS, multa rescisória de 40% e compare saque-aniversário vs saque-rescisão.",
    url: `${BASE_URL}/calculadora-fgts`,
    category: "trabalhista",
    features: ["Saldo FGTS", "Multa 40%", "Saque-Aniversário", "Saque-Rescisão"],
    faqs: [
      { question: "O que é o saque-aniversário do FGTS?", answer: "O saque-aniversário permite sacar uma parte do FGTS todo ano, no mês do seu aniversário. Porém, ao aderir, você perde o direito ao saque total em caso de demissão sem justa causa, recebendo apenas a multa de 40%." },
      { question: "Quanto recebo de FGTS na demissão?", answer: "Na demissão sem justa causa, você tem direito ao saldo total do FGTS mais uma multa de 40% sobre esse saldo. O empregador deposita 8% do seu salário mensalmente na conta do FGTS." },
      { question: "Posso sacar o FGTS a qualquer momento?", answer: "O FGTS pode ser sacado em situações específicas: demissão sem justa causa, aposentadoria, compra de imóvel, doenças graves, ou pelo saque-aniversário (se aderir)." }
    ]
  },
  insalubridade: {
    id: "insalubridade",
    name: "Calculadora de Insalubridade e Periculosidade",
    description: "Calcule o adicional de insalubridade (10%, 20% ou 40%) ou periculosidade (30%) e todos os reflexos trabalhistas.",
    url: `${BASE_URL}/calculadora-insalubridade`,
    category: "trabalhista",
    features: ["Insalubridade", "Periculosidade", "Reflexos", "FGTS"],
    faqs: [
      { question: "Qual o valor do adicional de insalubridade?", answer: "O adicional de insalubridade é calculado sobre o salário mínimo e varia conforme o grau: mínimo (10%), médio (20%) ou máximo (40%)." },
      { question: "O que é adicional de periculosidade?", answer: "O adicional de periculosidade é de 30% sobre o salário base e é devido a trabalhadores expostos a riscos como inflamáveis, explosivos, energia elétrica, segurança pessoal ou patrimonial e motocicleta." },
      { question: "Posso acumular insalubridade e periculosidade?", answer: "Não. A CLT não permite acumular os dois adicionais. O trabalhador deve optar pelo mais vantajoso financeiramente." }
    ]
  },
  pensao: {
    id: "pensao",
    name: "Calculadora de Pensão Alimentícia",
    description: "Calcule o valor estimado da pensão alimentícia baseado na renda do alimentante e necessidades dos dependentes.",
    url: `${BASE_URL}/calculadora-pensao`,
    category: "familia",
    features: ["Percentual sobre Renda", "Custos Especiais", "Múltiplos Filhos", "Valor Anual"],
    faqs: [
      { question: "Qual o percentual da pensão alimentícia?", answer: "Não existe percentual fixo na lei. O mais comum é 30% da renda líquida para um filho, podendo variar de 15% a 33% dependendo das necessidades do filho e possibilidades do alimentante." },
      { question: "Pensão alimentícia incide sobre 13º e férias?", answer: "Sim. A pensão alimentícia incide sobre todas as verbas salariais, incluindo 13º salário, férias, horas extras habituais e comissões." },
      { question: "Até quando se paga pensão alimentícia?", answer: "Geralmente até os 18 anos, podendo se estender até 24 anos se o filho estiver cursando ensino superior. Em casos especiais (deficiência), pode ser por tempo indeterminado." }
    ]
  },
  "partilha-bens": {
    id: "partilha-bens",
    name: "Calculadora de Partilha de Bens",
    description: "Estime a divisão de bens no divórcio conforme seu regime de casamento: comunhão parcial, universal ou separação total.",
    url: `${BASE_URL}/calculadora-partilha-bens`,
    category: "familia",
    features: ["Comunhão Parcial", "Comunhão Universal", "Separação Total", "Dívidas"],
    faqs: [
      { question: "Como funciona a partilha na comunhão parcial?", answer: "Na comunhão parcial, dividem-se apenas os bens adquiridos durante o casamento (aquestos). Bens recebidos por herança ou doação são particulares e não entram na partilha." },
      { question: "O que é comunhão universal de bens?", answer: "Na comunhão universal, todos os bens são comuns e devem ser divididos, inclusive os adquiridos antes do casamento e os recebidos por herança ou doação." },
      { question: "Dívidas também são divididas no divórcio?", answer: "Sim. As dívidas contraídas durante o casamento em benefício da família são de responsabilidade de ambos e devem ser consideradas na partilha." }
    ]
  },
  inventario: {
    id: "inventario",
    name: "Calculadora de Inventário",
    description: "Calcule ITCMD por estado, custas cartoriais e honorários advocatícios do inventário judicial ou extrajudicial.",
    url: `${BASE_URL}/calculadora-inventario`,
    category: "familia",
    features: ["ITCMD por UF", "Custas", "Honorários", "Tipo Inventário"],
    faqs: [
      { question: "Qual a diferença entre inventário judicial e extrajudicial?", answer: "O inventário extrajudicial é feito em cartório, é mais rápido e barato, mas exige que todos os herdeiros sejam maiores, capazes e estejam de acordo. O judicial é obrigatório quando há menores, incapazes ou conflito entre herdeiros." },
      { question: "O que é ITCMD e quanto custa?", answer: "ITCMD é o imposto estadual sobre herança. A alíquota varia por estado, de 2% a 8% sobre o valor dos bens. Alguns estados têm alíquotas progressivas." },
      { question: "Qual o prazo para abrir inventário?", answer: "O inventário deve ser aberto em até 60 dias após o falecimento. Após esse prazo, pode haver multa sobre o ITCMD, que varia conforme o estado." }
    ]
  },
  aposentadoria: {
    id: "aposentadoria",
    name: "Calculadora de Aposentadoria INSS",
    description: "Verifique se você pode se aposentar e estime o valor do benefício. Regras atualizadas pós-reforma da previdência 2019.",
    url: `${BASE_URL}/calculadora-aposentadoria`,
    category: "previdenciario",
    features: ["Idade Mínima", "Tempo Contribuição", "Valor Benefício", "Regras Pós-Reforma"],
    faqs: [
      { question: "Qual a idade mínima para aposentar?", answer: "Após a reforma de 2019, a idade mínima é 65 anos para homens e 62 anos para mulheres, com tempo mínimo de contribuição de 20 anos (homens) ou 15 anos (mulheres)." },
      { question: "Como é calculado o valor da aposentadoria?", answer: "O valor é 60% da média de todos os salários de contribuição desde julho/1994, mais 2% para cada ano que exceder 20 anos de contribuição (homens) ou 15 anos (mulheres)." },
      { question: "Existe aposentadoria por tempo de contribuição?", answer: "A aposentadoria exclusivamente por tempo de contribuição foi extinta pela reforma. Agora é necessário cumprir também a idade mínima, exceto para quem tem direito às regras de transição." }
    ]
  },
  "pensao-morte": {
    id: "pensao-morte",
    name: "Calculadora de Pensão por Morte",
    description: "Estime o valor da pensão por morte do INSS para cônjuges, filhos e outros dependentes.",
    url: `${BASE_URL}/calculadora-pensao-morte`,
    category: "previdenciario",
    features: ["Valor Benefício", "Cota Dependentes", "Duração", "Pós-Reforma"],
    faqs: [
      { question: "Quem tem direito à pensão por morte?", answer: "Têm direito os dependentes do segurado falecido: cônjuge/companheiro, filhos menores de 21 anos (ou inválidos/deficientes de qualquer idade), e pais (se comprovada dependência econômica)." },
      { question: "Qual o valor da pensão por morte?", answer: "O valor é 50% da aposentadoria que o falecido recebia ou teria direito, mais 10% por dependente, até o máximo de 100%. O valor mínimo é 1 salário mínimo." },
      { question: "Por quanto tempo recebo pensão por morte?", answer: "Para cônjuge, a duração varia conforme a idade e tempo de casamento/união. Para filhos, até 21 anos (ou enquanto durar a invalidez/deficiência)." }
    ]
  },
  "auxilio-doenca": {
    id: "auxilio-doenca",
    name: "Calculadora de Auxílio-Doença",
    description: "Calcule o valor do auxílio por incapacidade temporária (auxílio-doença) comum ou acidentário do INSS.",
    url: `${BASE_URL}/calculadora-auxilio-doenca`,
    category: "previdenciario",
    features: ["Valor 91%", "Carência", "Comum", "Acidentário"],
    faqs: [
      { question: "Qual o valor do auxílio-doença?", answer: "O valor é 91% do salário de benefício, que é calculado sobre a média de todos os seus salários de contribuição. O valor mínimo é 1 salário mínimo." },
      { question: "Qual a diferença entre auxílio-doença comum e acidentário?", answer: "O auxílio-doença comum (B31) é para doenças não relacionadas ao trabalho. O acidentário (B91) é para doenças ou acidentes relacionados ao trabalho e garante estabilidade de 12 meses após alta." },
      { question: "Preciso cumprir carência para auxílio-doença?", answer: "Sim, são necessárias 12 contribuições mensais. Porém, acidentes de qualquer natureza e doenças graves especificadas em lei dispensam carência." }
    ]
  },
  "bpc-loas": {
    id: "bpc-loas",
    name: "Calculadora BPC/LOAS",
    description: "Verifique se você ou seu familiar tem direito ao Benefício de Prestação Continuada (BPC/LOAS) de 1 salário mínimo.",
    url: `${BASE_URL}/calculadora-bpc-loas`,
    category: "previdenciario",
    features: ["Renda Per Capita", "Idoso 65+", "Deficiência", "Documentos"],
    faqs: [
      { question: "Quem tem direito ao BPC/LOAS?", answer: "Têm direito idosos com 65 anos ou mais e pessoas com deficiência de qualquer idade, desde que a renda familiar per capita seja inferior a 1/4 do salário mínimo." },
      { question: "Qual o valor do BPC/LOAS?", answer: "O valor é sempre 1 salário mínimo por mês. Em 2024, isso equivale a R$ 1.412,00." },
      { question: "Preciso ter contribuído ao INSS para receber BPC?", answer: "Não. O BPC é um benefício assistencial e não exige contribuição prévia ao INSS. É pago pela Assistência Social, não pela Previdência." }
    ]
  },
  "danos-morais": {
    id: "danos-morais",
    name: "Calculadora de Danos Morais",
    description: "Estime o valor da indenização por danos morais baseado em jurisprudência dos tribunais brasileiros.",
    url: `${BASE_URL}/calculadora-danos-morais`,
    category: "civil",
    features: ["Negativação Indevida", "Ofensa à Honra", "Discriminação", "Acidentes"],
    faqs: [
      { question: "Quanto vale uma indenização por danos morais?", answer: "O valor varia muito conforme o caso. Negativação indevida costuma gerar de R$ 3.000 a R$ 15.000. Ofensas graves ou discriminação podem chegar a R$ 50.000 ou mais. Acidentes com sequelas podem superar R$ 100.000." },
      { question: "Como comprovar danos morais?", answer: "Você pode comprovar com documentos (print de mensagens, carta de cobrança indevida), testemunhas, laudos médicos (para abalo psicológico) e qualquer prova do fato e suas consequências." },
      { question: "Qual o prazo para entrar com ação de danos morais?", answer: "O prazo prescricional é geralmente de 3 anos a partir do conhecimento do dano. Para relações de consumo, são 5 anos." }
    ]
  },
  "atualizacao-divida": {
    id: "atualizacao-divida",
    name: "Calculadora de Atualização de Dívida",
    description: "Atualize dívidas com correção monetária (INPC, IPCA, IGP-M, SELIC), juros de mora e multa contratual.",
    url: `${BASE_URL}/calculadora-atualizacao-divida`,
    category: "civil",
    features: ["INPC/IPCA", "IGP-M/SELIC", "Juros 1% a.m.", "Multa 2%"],
    faqs: [
      { question: "Qual índice usar para corrigir uma dívida?", answer: "Depende do tipo de dívida. Dívidas judiciais geralmente usam INPC. Aluguéis costumam usar IGP-M. Dívidas bancárias podem usar Taxa SELIC. Contratos podem estipular índice específico." },
      { question: "Qual o limite de juros de mora?", answer: "Para pessoas físicas e relações civis, o limite legal é 1% ao mês. Já instituições financeiras podem cobrar juros maiores conforme regulamentação do Banco Central." },
      { question: "A multa pode ser maior que 2%?", answer: "Em relações de consumo, a multa é limitada a 2%. Em contratos civis entre pessoas ou empresas, pode ser estipulado percentual maior, desde que não seja abusivo." }
    ]
  },
  "aluguel-atrasado": {
    id: "aluguel-atrasado",
    name: "Calculadora de Aluguel Atrasado",
    description: "Calcule o débito total do inquilino incluindo aluguéis atrasados, multa, juros, IPTU, condomínio e correção monetária.",
    url: `${BASE_URL}/calculadora-aluguel-atrasado`,
    category: "civil",
    features: ["Aluguéis", "Multa 10%", "IPTU/Condomínio", "Correção IGP-M"],
    faqs: [
      { question: "Qual a multa por atraso no aluguel?", answer: "A multa por atraso é geralmente 10% sobre o valor do aluguel, conforme estipulado no contrato. Alguns contratos podem prever percentual menor." },
      { question: "O proprietário pode cobrar juros sobre aluguel atrasado?", answer: "Sim. Além da multa, pode ser cobrado juros de mora de até 1% ao mês, pro rata die (proporcional aos dias de atraso), conforme o contrato." },
      { question: "Posso ser despejado por falta de pagamento?", answer: "Sim. O proprietário pode entrar com ação de despejo por falta de pagamento. O inquilino tem 15 dias para pagar o débito e evitar o despejo (purgar a mora), mas essa opção só pode ser usada uma vez a cada 24 meses." }
    ]
  },
  dpvat: {
    id: "dpvat",
    name: "Calculadora DPVAT/SPVAT",
    description: "Calcule a indenização do seguro DPVAT/SPVAT por acidente de trânsito: morte, invalidez permanente ou despesas médicas.",
    url: `${BASE_URL}/calculadora-dpvat`,
    category: "civil",
    features: ["Morte R$ 13.500", "Invalidez até R$ 13.500", "Despesas Médicas até R$ 2.700", "Documentos"],
    faqs: [
      { question: "Quem tem direito ao DPVAT?", answer: "Todas as vítimas de acidentes de trânsito têm direito ao DPVAT, independentemente de culpa. Isso inclui motoristas, passageiros, pedestres, ciclistas e motociclistas." },
      { question: "Quais os valores do DPVAT?", answer: "Os valores são: R$ 13.500 por morte; até R$ 13.500 por invalidez permanente (conforme grau); até R$ 2.700 para reembolso de despesas médicas." },
      { question: "Qual o prazo para pedir o DPVAT?", answer: "O prazo é de 3 anos a partir da data do acidente. Para invalidez, conta-se da data da ciência da invalidez. A Seguradora Líder tem 30 dias para pagar após apresentação dos documentos." }
    ]
  }
};

// Generate WebApplication JSON-LD schema
export function getWebApplicationSchema(calculatorId: string) {
  const data = calculatorSchemas[calculatorId];
  if (!data) return null;

  return {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": data.name,
    "description": data.description,
    "url": data.url,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web Browser",
    "browserRequirements": "Requires JavaScript",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BRL"
    },
    "featureList": data.features,
    "provider": {
      "@type": "Organization",
      "name": "Advogado Já",
      "url": BASE_URL
    }
  };
}

// Generate FAQPage JSON-LD schema
export function getFAQPageSchema(calculatorId: string) {
  const data = calculatorSchemas[calculatorId];
  if (!data || !data.faqs.length) return null;

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": data.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Generate combined schemas for a calculator page
export function getCalculatorSchemas(calculatorId: string) {
  const webApp = getWebApplicationSchema(calculatorId);
  const faq = getFAQPageSchema(calculatorId);
  
  if (!webApp) return null;
  
  return {
    webApplication: webApp,
    faqPage: faq
  };
}

// Generate ItemList schema for the main calculators page
export function getCalculatorListSchema() {
  const items = Object.values(calculatorSchemas).map((calc, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": calc.name,
    "url": calc.url
  }));

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Calculadoras Jurídicas Gratuitas",
    "description": "Lista completa de calculadoras jurídicas gratuitas para cálculos trabalhistas, previdenciários, familiares e cíveis.",
    "numberOfItems": items.length,
    "itemListElement": items
  };
}

// Generate BreadcrumbList schema
export function getBreadcrumbSchema(calculatorId: string) {
  const data = calculatorSchemas[calculatorId];
  if (!data) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Início",
        "item": BASE_URL
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Calculadoras",
        "item": `${BASE_URL}/calculadoras`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": data.name,
        "item": data.url
      }
    ]
  };
}

// Programmatic FAQs for SEO - Each question becomes its own indexable page

export interface ProgrammaticFAQ {
  id: string;
  slug: string;
  question: string;
  answer: string;
  area: 'trabalhista' | 'familia' | 'previdenciario' | 'civil' | 'consumidor' | 'penal' | 'geral';
  keywords: string[];
  relatedQuestions?: string[]; // IDs of related FAQs
  metaDescription?: string;
}

export const areaLabels: Record<string, string> = {
  trabalhista: 'Direito Trabalhista',
  familia: 'Direito de Família',
  previdenciario: 'Direito Previdenciário',
  civil: 'Direito Civil',
  consumidor: 'Direito do Consumidor',
  penal: 'Direito Penal',
  geral: 'Dúvidas Gerais'
};

export const areaColors: Record<string, string> = {
  trabalhista: 'bg-blue-500',
  familia: 'bg-pink-500',
  previdenciario: 'bg-green-500',
  civil: 'bg-purple-500',
  consumidor: 'bg-orange-500',
  penal: 'bg-red-500',
  geral: 'bg-gray-500'
};

export const programmaticFAQs: ProgrammaticFAQ[] = [
  // TRABALHISTA
  {
    id: 'trab-1',
    slug: 'quanto-tempo-para-entrar-com-processo-trabalhista',
    question: 'Quanto tempo tenho para entrar com processo trabalhista?',
    answer: `Você tem até **2 anos** após o fim do contrato de trabalho para ajuizar uma reclamação trabalhista. Este é o chamado prazo prescricional.

Quanto aos direitos que podem ser cobrados, a lei permite reivindicar verbas dos **últimos 5 anos** trabalhados, contados da data de ajuizamento da ação.

**Exemplo prático:** Se você foi demitido em janeiro de 2024, pode entrar com ação até janeiro de 2026. Se ajuizar em janeiro de 2025, poderá cobrar direitos desde janeiro de 2020.

**Importante:** Alguns casos têm prazos especiais, como acidentes de trabalho. Por isso, é essencial consultar um advogado o quanto antes.`,
    area: 'trabalhista',
    keywords: ['prazo processo trabalhista', 'prescrição trabalhista', 'tempo para processar empresa', 'prazo reclamação trabalhista'],
    relatedQuestions: ['trab-2', 'trab-3', 'trab-4'],
    metaDescription: 'Saiba o prazo para entrar com processo trabalhista: 2 anos após o fim do contrato, podendo cobrar os últimos 5 anos de direitos. Consulte um advogado.'
  },
  {
    id: 'trab-2',
    slug: 'o-que-sao-verbas-rescisorias',
    question: 'O que são verbas rescisórias e quais tenho direito?',
    answer: `Verbas rescisórias são os valores devidos ao trabalhador quando o contrato de trabalho termina. Os direitos variam conforme o tipo de demissão:

**Demissão sem justa causa:**
- Saldo de salário (dias trabalhados no mês)
- Aviso prévio (trabalhado ou indenizado)
- Férias vencidas e proporcionais + 1/3
- 13º salário proporcional
- Multa de 40% sobre o FGTS
- Liberação do FGTS
- Guias para seguro-desemprego

**Pedido de demissão:**
- Saldo de salário
- Férias vencidas e proporcionais + 1/3
- 13º salário proporcional
- Aviso prévio (pode ser descontado se não cumprido)

**Demissão por justa causa:**
- Apenas saldo de salário e férias vencidas + 1/3`,
    area: 'trabalhista',
    keywords: ['verbas rescisórias', 'direitos demissão', 'rescisão trabalhista', 'o que receber na demissão'],
    relatedQuestions: ['trab-1', 'trab-5', 'trab-6'],
    metaDescription: 'Entenda o que são verbas rescisórias e quais você tem direito: saldo de salário, aviso prévio, férias, 13º, FGTS e seguro-desemprego.'
  },
  {
    id: 'trab-3',
    slug: 'posso-processar-empresa-ainda-trabalhando',
    question: 'Posso processar a empresa mesmo ainda trabalhando nela?',
    answer: `**Sim, é legalmente possível** processar a empresa enquanto ainda trabalha nela. A lei não proíbe isso.

No entanto, é importante considerar:

**Riscos:**
- Possível retaliação (embora ilegal)
- Ambiente de trabalho pode ficar tenso
- Dificuldade de coletar provas enquanto trabalha

**Quando vale a pena:**
- Situações urgentes (assédio, condições insalubres)
- Quando há provas documentadas
- Se pretende sair em breve

**Alternativas:**
- Aguardar a saída para ajuizar
- Buscar acordo extrajudicial
- Denunciar ao Ministério do Trabalho

**Recomendação:** Consulte um advogado trabalhista para avaliar a melhor estratégia para seu caso específico.`,
    area: 'trabalhista',
    keywords: ['processar empresa trabalhando', 'ação trabalhista empregado', 'processo contra empregador'],
    relatedQuestions: ['trab-1', 'trab-4'],
    metaDescription: 'Descubra se você pode processar a empresa enquanto ainda trabalha nela. Entenda os riscos, vantagens e quando vale a pena.'
  },
  {
    id: 'trab-4',
    slug: 'empresa-nao-pagou-horas-extras',
    question: 'O que fazer se a empresa não pagou horas extras?',
    answer: `Se a empresa não pagou suas horas extras, você pode cobrar judicialmente. Veja como:

**Passo a passo:**
1. **Reúna provas:** registros de ponto, e-mails com horários, mensagens, testemunhas
2. **Calcule o valor:** horas extras têm acréscimo de 50% (dias úteis) ou 100% (domingos/feriados)
3. **Tente acordo:** converse com RH ou faça denúncia no Ministério do Trabalho
4. **Ação judicial:** se não resolver, procure um advogado trabalhista

**Acréscimos legais:**
- Dias úteis: +50% sobre o valor da hora normal
- Domingos e feriados: +100%
- Horas noturnas (22h às 5h): +20% adicional

**Prazo:** Você pode cobrar horas extras dos últimos 5 anos.

**Dica:** Mantenha um registro pessoal dos horários trabalhados, mesmo que informal.`,
    area: 'trabalhista',
    keywords: ['horas extras não pagas', 'cobrar horas extras', 'direito horas extras', 'empresa não paga hora extra'],
    relatedQuestions: ['trab-1', 'trab-2', 'trab-5'],
    metaDescription: 'Saiba o que fazer se a empresa não pagou suas horas extras: como reunir provas, calcular valores e cobrar judicialmente.'
  },
  {
    id: 'trab-5',
    slug: 'como-calcular-rescisao-trabalhista',
    question: 'Como calcular minha rescisão trabalhista?',
    answer: `O cálculo da rescisão trabalhista depende do tipo de demissão. Veja os principais componentes:

**Fórmulas básicas:**

**Saldo de salário:** Salário ÷ 30 × dias trabalhados no mês

**Férias proporcionais:** Salário ÷ 12 × meses trabalhados no ano + 1/3

**13º proporcional:** Salário ÷ 12 × meses trabalhados no ano

**Aviso prévio:** Salário + 3 dias por ano trabalhado (máximo 90 dias)

**Multa FGTS (40%):** Total depositado no FGTS × 0,40

**Exemplo para salário de R$ 3.000:**
- 6 meses no ano, demissão sem justa causa
- Férias proporcionais: R$ 3.000 ÷ 12 × 6 = R$ 1.500 + R$ 500 (1/3) = R$ 2.000
- 13º proporcional: R$ 3.000 ÷ 12 × 6 = R$ 1.500

**Use nossa calculadora:** Acesse a calculadora trabalhista para um cálculo preciso.`,
    area: 'trabalhista',
    keywords: ['calcular rescisão', 'cálculo rescisão trabalhista', 'quanto vou receber demissão', 'simulador rescisão'],
    relatedQuestions: ['trab-2', 'trab-4', 'trab-6'],
    metaDescription: 'Aprenda a calcular sua rescisão trabalhista: saldo de salário, férias, 13º, aviso prévio e multa do FGTS. Fórmulas e exemplo prático.'
  },
  {
    id: 'trab-6',
    slug: 'seguro-desemprego-quem-tem-direito',
    question: 'Quem tem direito ao seguro-desemprego?',
    answer: `O seguro-desemprego é um benefício para quem foi demitido sem justa causa. Veja os requisitos:

**Requisitos:**
1. Ter sido dispensado sem justa causa
2. Estar desempregado ao solicitar
3. Não ter renda própria suficiente
4. Não estar recebendo benefício previdenciário (exceto pensão por morte)
5. Ter trabalhado o tempo mínimo exigido

**Tempo mínimo de trabalho:**
- 1ª solicitação: 12 meses nos últimos 18 meses
- 2ª solicitação: 9 meses nos últimos 12 meses
- 3ª solicitação em diante: 6 meses antes da demissão

**Número de parcelas:**
- 6-11 meses: 3 parcelas
- 12-23 meses: 4 parcelas
- 24+ meses: 5 parcelas

**Prazo para solicitar:** 7 a 120 dias após a demissão

**Onde solicitar:** App Carteira de Trabalho Digital, site Gov.br ou agências do SINE.`,
    area: 'trabalhista',
    keywords: ['seguro desemprego requisitos', 'quem tem direito seguro desemprego', 'como pedir seguro desemprego'],
    relatedQuestions: ['trab-2', 'trab-5'],
    metaDescription: 'Descubra quem tem direito ao seguro-desemprego: requisitos, tempo mínimo de trabalho, número de parcelas e como solicitar.'
  },

  // FAMÍLIA
  {
    id: 'fam-1',
    slug: 'como-funciona-guarda-compartilhada',
    question: 'Como funciona a guarda compartilhada?',
    answer: `A guarda compartilhada é o regime em que **ambos os pais** participam ativamente das decisões sobre a vida dos filhos.

**Principais características:**
- Os dois pais decidem juntos sobre educação, saúde e lazer
- A residência pode ser em uma casa (com visitas) ou alternada
- As responsabilidades são divididas igualmente
- É o regime preferencial pela lei brasileira

**Diferença para guarda unilateral:**
- Unilateral: um dos pais toma as decisões principais
- Compartilhada: decisões conjuntas, independente de onde a criança mora

**Quando não é recomendada:**
- Casos de violência doméstica
- Alienação parental grave
- Impossibilidade de diálogo entre os pais

**Importante:** A guarda compartilhada não significa divisão igual de tempo, mas sim de responsabilidades.`,
    area: 'familia',
    keywords: ['guarda compartilhada', 'como funciona guarda compartilhada', 'guarda de filhos', 'direito dos pais'],
    relatedQuestions: ['fam-2', 'fam-3', 'fam-4'],
    metaDescription: 'Entenda como funciona a guarda compartilhada: responsabilidades divididas entre os pais, residência e tomada de decisões conjuntas.'
  },
  {
    id: 'fam-2',
    slug: 'como-calcular-pensao-alimenticia',
    question: 'Como é calculada a pensão alimentícia?',
    answer: `A pensão alimentícia é calculada com base no **trinômio**: necessidade de quem recebe, possibilidade de quem paga e proporcionalidade.

**Não há fórmula fixa, mas parâmetros comuns:**
- 20% a 33% da renda líquida para 1 filho
- Pode chegar a 50% para múltiplos dependentes

**O que é considerado:**
- **Necessidades:** alimentação, moradia, educação, saúde, lazer
- **Possibilidade:** renda total, despesas essenciais, outros dependentes
- **Proporcionalidade:** padrão de vida da família antes da separação

**Cálculo inclui:**
- Salário fixo + comissões + bonificações
- Participação nos lucros
- Valores in natura (plano de saúde, escola, etc.)

**Revisão:** Pode ser solicitada quando há mudança significativa na situação de qualquer parte.

**Dica:** Use nossa calculadora de pensão alimentícia para ter uma estimativa.`,
    area: 'familia',
    keywords: ['calcular pensão alimentícia', 'quanto pagar pensão', 'pensão alimentícia porcentagem', 'valor pensão filhos'],
    relatedQuestions: ['fam-1', 'fam-3', 'fam-5'],
    metaDescription: 'Saiba como calcular a pensão alimentícia: porcentagens comuns, o que é considerado e quando pode ser revisada. Use nossa calculadora.'
  },
  {
    id: 'fam-3',
    slug: 'quanto-tempo-demora-divorcio',
    question: 'Quanto tempo demora um processo de divórcio?',
    answer: `O tempo do divórcio varia muito conforme o tipo:

**Divórcio Consensual:**
- **Em cartório:** 1 a 5 dias úteis (sem filhos menores ou incapazes)
- **Judicial consensual:** 1 a 3 meses
- Requer acordo sobre bens, pensão e guarda

**Divórcio Litigioso:**
- **Prazo médio:** 6 meses a 2 anos
- **Casos complexos:** pode ultrapassar 3 anos
- Depende de disputas sobre bens, guarda e pensão

**Fatores que aceleram:**
- Acordo prévio sobre divisão de bens
- Consenso sobre guarda e pensão
- Documentação organizada
- Advogados experientes

**Fatores que atrasam:**
- Briga pela guarda dos filhos
- Patrimônio complexo para dividir
- Falta de acordo sobre pensão
- Comarca com muitos processos

**Dica:** O divórcio pode ser feito a qualquer momento, não há mais prazo de separação prévia.`,
    area: 'familia',
    keywords: ['tempo divórcio', 'quanto tempo demora divórcio', 'divórcio rápido', 'prazo divórcio'],
    relatedQuestions: ['fam-1', 'fam-2', 'fam-4'],
    metaDescription: 'Descubra quanto tempo demora um divórcio: consensual em cartório (dias), judicial (meses) ou litigioso (até anos). Veja os fatores.'
  },
  {
    id: 'fam-4',
    slug: 'posso-pedir-revisao-pensao-alimenticia',
    question: 'Posso pedir revisão de pensão alimentícia?',
    answer: `**Sim**, a pensão alimentícia pode ser revisada sempre que houver mudança significativa nas circunstâncias.

**Motivos para aumentar:**
- Aumento das necessidades do filho (escola, saúde, idade)
- Melhora na condição financeira de quem paga
- Inflação não corrigida ao longo dos anos

**Motivos para diminuir:**
- Perda de emprego ou redução de renda
- Nascimento de outros filhos
- Doença que afete capacidade de trabalho
- Maioridade do filho (pode cessar ou continuar se estudante)

**Como solicitar:**
1. Tente acordo amigável primeiro
2. Se não houver acordo, entre com ação de revisão de alimentos
3. Apresente provas da mudança de circunstâncias

**Importante:** A pensão antiga continua valendo até decisão judicial. Não pare de pagar por conta própria.

**Prazo:** Não há prazo específico, pode ser solicitada a qualquer momento.`,
    area: 'familia',
    keywords: ['revisão pensão alimentícia', 'aumentar pensão', 'diminuir pensão', 'modificar pensão'],
    relatedQuestions: ['fam-2', 'fam-3', 'fam-5'],
    metaDescription: 'Saiba como pedir revisão de pensão alimentícia: motivos para aumentar ou diminuir, como solicitar e o que considerar.'
  },
  {
    id: 'fam-5',
    slug: 'o-que-e-alienacao-parental',
    question: 'O que é alienação parental e como provar?',
    answer: `Alienação parental é quando um dos pais (ou familiar) manipula a criança para rejeitar o outro genitor.

**Exemplos de alienação:**
- Falar mal do outro pai na frente da criança
- Dificultar visitas ou contato telefônico
- Criar falsas memórias de abandono ou abuso
- Fazer a criança se sentir culpada por gostar do outro pai

**Como provar:**
- Mensagens e áudios com falas depreciativas
- Testemunhos de familiares e amigos
- Relatório escolar sobre mudanças de comportamento
- Laudos psicológicos
- Registros de visitas impedidas

**Consequências legais:**
- Advertência
- Multa
- Inversão da guarda
- Suspensão da autoridade parental

**O que fazer:**
1. Documente tudo (print de mensagens, registros)
2. Busque orientação psicológica para a criança
3. Procure um advogado de família
4. Considere ação judicial com pedido de estudo psicossocial`,
    area: 'familia',
    keywords: ['alienação parental', 'como provar alienação parental', 'pai alienador', 'lei alienação parental'],
    relatedQuestions: ['fam-1', 'fam-3', 'fam-4'],
    metaDescription: 'Entenda o que é alienação parental, como identificar, provar e quais as consequências legais. Saiba como proteger seus filhos.'
  },

  // PREVIDENCIÁRIO
  {
    id: 'prev-1',
    slug: 'quanto-tempo-demora-aposentadoria-inss',
    question: 'Quanto tempo demora para sair a aposentadoria do INSS?',
    answer: `O prazo para aposentadoria varia conforme a via escolhida:

**Via administrativa (INSS):**
- Prazo legal: 45 dias para análise
- Prazo real: 2 a 6 meses em média
- Pode chegar a 12 meses em casos complexos

**Via judicial:**
- Prazo médio: 1 a 3 anos
- Necessário quando INSS nega indevidamente
- Inclui correção monetária e juros

**Fatores que aceleram:**
- Documentação completa e organizada
- Histórico previdenciário sem inconsistências
- Pedido simples (aposentadoria por idade, por exemplo)
- Uso do Meu INSS para acompanhamento

**Fatores que atrasam:**
- Falta de documentos
- Períodos sem contribuição ou informais
- Necessidade de perícia médica
- Erros no CNIS (cadastro do INSS)

**Dica:** Faça o pedido com auxílio de especialista para evitar indeferimentos e atrasos.`,
    area: 'previdenciario',
    keywords: ['tempo aposentadoria INSS', 'demora aposentadoria', 'prazo aposentadoria', 'quanto tempo INSS'],
    relatedQuestions: ['prev-2', 'prev-3', 'prev-4'],
    metaDescription: 'Saiba quanto tempo demora para sair a aposentadoria do INSS: prazo legal de 45 dias, prazo real de 2-6 meses e via judicial de 1-3 anos.'
  },
  {
    id: 'prev-2',
    slug: 'inss-negou-beneficio-o-que-fazer',
    question: 'O INSS negou meu benefício. O que fazer?',
    answer: `Se o INSS negou seu benefício, você tem opções para reverter a decisão:

**Opção 1 - Recurso administrativo:**
- Prazo: 30 dias após a negativa
- Gratuito e sem advogado
- Julgado pelo CRPS (Conselho de Recursos)
- Prazo de decisão: 30 a 90 dias

**Opção 2 - Ação judicial:**
- Sem prazo limite (mas quanto antes, melhor)
- Pode pular o recurso administrativo
- Maior chance de sucesso com advogado
- Permite correção e juros retroativos

**Passo a passo:**
1. Leia atentamente o motivo da negativa
2. Reúna documentos que comprovem seu direito
3. Avalie se vale recurso ou ação judicial
4. Procure advogado previdenciário

**Motivos comuns de negativa:**
- Tempo de contribuição insuficiente
- Documentação incompleta
- Perícia médica desfavorável
- Erros no CNIS

**Importante:** Não desista! Muitos benefícios negados são concedidos após recurso ou ação.`,
    area: 'previdenciario',
    keywords: ['INSS negou benefício', 'recurso INSS', 'benefício negado', 'o que fazer INSS negou'],
    relatedQuestions: ['prev-1', 'prev-3', 'prev-5'],
    metaDescription: 'Saiba o que fazer quando o INSS nega seu benefício: recurso administrativo, ação judicial e passo a passo para reverter a decisão.'
  },
  {
    id: 'prev-3',
    slug: 'posso-trabalhar-recebendo-aposentadoria',
    question: 'Posso trabalhar recebendo aposentadoria?',
    answer: `Depende do tipo de benefício que você recebe:

**Pode trabalhar:**
- ✅ Aposentadoria por idade
- ✅ Aposentadoria por tempo de contribuição
- ✅ Aposentadoria especial (com restrições)

**Não pode trabalhar:**
- ❌ Aposentadoria por invalidez (se demonstrar capacidade)
- ❌ Auxílio-doença
- ❌ BPC/LOAS (tem regras específicas de renda)

**Aposentadoria especial:**
- Pode trabalhar em atividade NÃO especial
- Se voltar à atividade especial, perde o benefício

**Consequências de trabalhar:**
- Continua contribuindo para o INSS
- Pode ter direito a abono anual
- Não dá direito a nova aposentadoria (desaposentação foi extinta)

**Aposentadoria por invalidez:**
- Se trabalhar, pode perder o benefício
- INSS pode entender como recuperação da capacidade
- Avalie com cuidado antes de retornar

**Dica:** Consulte um advogado antes de retornar ao trabalho se recebe invalidez.`,
    area: 'previdenciario',
    keywords: ['trabalhar aposentado', 'aposentado pode trabalhar', 'aposentadoria e trabalho', 'continuar trabalhando aposentado'],
    relatedQuestions: ['prev-1', 'prev-4', 'prev-5'],
    metaDescription: 'Descubra se você pode trabalhar recebendo aposentadoria: depende do tipo de benefício. Veja as regras para cada situação.'
  },
  {
    id: 'prev-4',
    slug: 'como-comprovar-tempo-trabalho-rural',
    question: 'Como comprovar tempo de trabalho rural?',
    answer: `Comprovar trabalho rural pode ser desafiador, mas existem várias formas aceitas:

**Documentos aceitos:**
- Certidão de casamento com profissão "lavrador/agricultora"
- Contratos de arrendamento ou parceria
- Notas fiscais de venda de produtos agrícolas
- Declaração de sindicato rural
- Bloco de notas de produtor rural
- Certidão de imóvel rural
- Histórico escolar de zona rural
- Comprovantes de financiamento rural (Pronaf)

**Testemunhas:**
- Vizinhos, ex-patrões, compradores de produtos
- Devem conhecer o trabalho realizado
- Pelo menos 3 testemunhas é ideal

**Início de prova material:**
- O INSS exige ao menos UM documento
- Testemunhas sozinhas não bastam
- Documento pode ser de familiar (pai, cônjuge)

**Período de carência:**
- Trabalhador rural pode se aposentar por idade com 15 anos de atividade rural
- Homem: 60 anos / Mulher: 55 anos

**Dica:** Quanto mais documentos diversos, maior a chance de aprovação.`,
    area: 'previdenciario',
    keywords: ['comprovar trabalho rural', 'aposentadoria rural', 'documentos trabalho rural', 'tempo rural INSS'],
    relatedQuestions: ['prev-1', 'prev-2', 'prev-3'],
    metaDescription: 'Saiba como comprovar tempo de trabalho rural para aposentadoria: documentos aceitos, testemunhas e dicas para aprovação no INSS.'
  },
  {
    id: 'prev-5',
    slug: 'o-que-e-bpc-loas-quem-tem-direito',
    question: 'O que é BPC/LOAS e quem tem direito?',
    answer: `O BPC (Benefício de Prestação Continuada) é garantido pela LOAS (Lei Orgânica da Assistência Social).

**O que é:**
- Benefício de 1 salário mínimo
- Não é aposentadoria (não deixa pensão)
- Não paga 13º salário
- Revisado a cada 2 anos

**Quem tem direito:**
1. **Idosos** com 65 anos ou mais
2. **Pessoas com deficiência** de qualquer idade

**Requisitos:**
- Renda familiar per capita até 1/4 do salário mínimo
- Não receber outro benefício previdenciário
- Estar inscrito no CadÚnico

**Cálculo da renda:**
- Soma-se a renda de todos que moram na casa
- Divide-se pelo número de pessoas
- Algumas rendas são desconsideradas (ex: BPC de outro membro)

**Deficiência:**
- Deve impedir participação plena na sociedade
- Avaliada por perícia médica e social
- Inclui deficiências física, mental, intelectual e sensorial

**Como solicitar:** Pelo Meu INSS ou agência, após inscrição no CadÚnico.`,
    area: 'previdenciario',
    keywords: ['BPC LOAS', 'benefício assistencial', 'BPC idoso', 'BPC deficiente', 'quem tem direito BPC'],
    relatedQuestions: ['prev-2', 'prev-3', 'prev-4'],
    metaDescription: 'Entenda o que é BPC/LOAS: benefício de 1 salário mínimo para idosos 65+ e pessoas com deficiência. Veja requisitos e como solicitar.'
  },

  // CIVIL
  {
    id: 'civil-1',
    slug: 'como-funciona-processo-inventario',
    question: 'Como funciona um processo de inventário?',
    answer: `O inventário é o procedimento para transferir bens de pessoa falecida aos herdeiros.

**Tipos de inventário:**

**Extrajudicial (em cartório):**
- Requisitos: todos maiores, capazes e de acordo
- Prazo: 30 a 60 dias
- Custo: taxa de cartório + ITCMD
- Precisa de advogado

**Judicial:**
- Obrigatório se há menores, incapazes ou conflito
- Prazo: 6 meses a 2 anos
- Pode ser consensual ou litigioso

**Etapas do inventário:**
1. Nomeação de inventariante
2. Levantamento de bens e dívidas
3. Citação de herdeiros e credores
4. Pagamento de dívidas e ITCMD
5. Partilha dos bens
6. Registro da partilha

**Custos principais:**
- ITCMD: 4% a 8% do valor dos bens (varia por estado)
- Custas judiciais ou cartorário
- Honorários advocatícios

**Prazo para abrir:** 60 dias após o óbito (há multa por atraso).`,
    area: 'civil',
    keywords: ['inventário', 'como funciona inventário', 'herança', 'partilha de bens', 'inventário extrajudicial'],
    relatedQuestions: ['civil-2', 'civil-3', 'civil-4'],
    metaDescription: 'Saiba como funciona o inventário: tipos (judicial e extrajudicial), etapas, custos e prazos para transferir bens aos herdeiros.'
  },
  {
    id: 'civil-2',
    slug: 'prazo-para-abrir-inventario',
    question: 'Qual o prazo para abrir inventário?',
    answer: `O prazo legal para abrir inventário é de **60 dias** após o falecimento.

**Consequências do atraso:**
- Multa sobre o ITCMD (imposto de herança)
- A multa varia de 10% a 20% conforme o estado
- Alguns estados têm multa progressiva

**Exemplos de multa por estado:**
- São Paulo: 10% após 60 dias, 20% após 180 dias
- Rio de Janeiro: 10% após 60 dias
- Minas Gerais: 10% após 60 dias

**Quando o prazo pode ser estendido:**
- Inventário judicial pode ter prazos maiores definidos pelo juiz
- Justificativa válida (bens no exterior, muitos herdeiros)

**Dicas para não atrasar:**
- Reúna documentos do falecido o quanto antes
- Certidão de óbito é o primeiro documento necessário
- Levante lista de bens e dívidas
- Consulte advogado para definir se será judicial ou extrajudicial

**Importante:** Enquanto não houver inventário, os bens ficam "congelados" e não podem ser vendidos regularmente.`,
    area: 'civil',
    keywords: ['prazo inventário', 'multa inventário atrasado', 'quando abrir inventário', 'inventário tardio'],
    relatedQuestions: ['civil-1', 'civil-3', 'civil-4'],
    metaDescription: 'Saiba o prazo de 60 dias para abrir inventário e as multas por atraso. Veja valores de multa por estado e como evitar.'
  },
  {
    id: 'civil-3',
    slug: 'resolver-disputas-sem-ir-justica',
    question: 'É possível resolver disputas sem ir à Justiça?',
    answer: `**Sim!** Existem métodos alternativos de resolução de conflitos, muitas vezes mais rápidos e baratos.

**Principais alternativas:**

**1. Mediação:**
- Mediador facilita o diálogo entre as partes
- As partes constroem a solução juntas
- Ideal para: família, vizinhos, relações continuadas
- Pode ser judicial ou privada

**2. Conciliação:**
- Conciliador sugere soluções
- Partes decidem se aceitam
- Mais diretiva que a mediação
- Comum em JECs e audiências iniciais

**3. Arbitragem:**
- Árbitro decide o conflito (como juiz)
- Decisão é vinculante e definitiva
- Mais usada em contratos empresariais
- Mais rápida que processo judicial

**Vantagens:**
- Rapidez: semanas vs. anos
- Menor custo em muitos casos
- Sigilo (vs. processo público)
- Preserva relacionamentos
- Maior controle sobre o resultado

**Onde buscar:**
- Câmaras de mediação e arbitragem
- CEJUSCs (Centros Judiciários de Solução de Conflitos)
- Plataformas online de mediação`,
    area: 'civil',
    keywords: ['resolver conflito sem justiça', 'mediação', 'conciliação', 'arbitragem', 'solução de conflitos'],
    relatedQuestions: ['civil-1', 'civil-4'],
    metaDescription: 'Conheça formas de resolver disputas sem ir à Justiça: mediação, conciliação e arbitragem. Mais rápido, barato e eficiente.'
  },
  {
    id: 'civil-4',
    slug: 'como-fazer-testamento',
    question: 'Como fazer um testamento válido?',
    answer: `O testamento é o documento que define como seus bens serão distribuídos após sua morte.

**Tipos de testamento:**

**1. Público:**
- Feito em cartório com tabelião
- Mais seguro e difícil de contestar
- Fica arquivado no cartório
- Custo: R$ 300 a R$ 800

**2. Cerrado:**
- Escrito pelo testador ou terceiro
- Entregue lacrado ao tabelião
- Só é aberto após a morte

**3. Particular:**
- Escrito à mão pelo testador
- Precisa de 3 testemunhas
- Mais fácil de contestar
- Gratuito, mas arriscado

**Regras importantes:**
- Só pode dispor de 50% dos bens (metade é dos herdeiros necessários)
- Herdeiros necessários: filhos, cônjuge, pais
- Pode ser alterado ou revogado a qualquer momento
- Testador deve estar em plena capacidade mental

**O que pode incluir:**
- Distribuição de bens
- Nomeação de tutor para filhos menores
- Reconhecimento de filho
- Doações a instituições

**Dica:** Mesmo com testamento, haverá inventário. O testamento orienta a partilha.`,
    area: 'civil',
    keywords: ['testamento', 'como fazer testamento', 'testamento público', 'herança testamento'],
    relatedQuestions: ['civil-1', 'civil-2', 'civil-3'],
    metaDescription: 'Aprenda como fazer um testamento válido: tipos (público, cerrado, particular), regras, custos e o que pode incluir.'
  },

  // CONSUMIDOR
  {
    id: 'cons-1',
    slug: 'nome-negativado-indevidamente-indenizacao',
    question: 'Posso ser indenizado por nome negativado indevidamente?',
    answer: `**Sim!** A negativação indevida gera direito a indenização por dano moral.

**O que é negativação indevida:**
- Dívida que você não fez (fraude)
- Dívida já paga mas não baixada
- Valor cobrado maior que o devido
- Dívida prescrita incluída no cadastro

**Valores de indenização:**
- Casos simples: R$ 3.000 a R$ 10.000
- Casos graves: R$ 10.000 a R$ 30.000
- Situações excepcionais: valores maiores
- Depende do caso concreto

**Como provar:**
- Extrato do SPC/Serasa mostrando a negativação
- Comprovantes de pagamento (se dívida paga)
- Boletim de ocorrência (se fraude)
- Protocolo de reclamação à empresa

**Passo a passo:**
1. Tire extrato atualizado do SPC/Serasa
2. Reúna provas da irregularidade
3. Notifique a empresa responsável
4. Se não resolver, entre com ação judicial
5. Pode ser no JEC (até 40 salários mínimos)

**Importante:** Se você tem outras dívidas legítimas negativadas, pode não haver dano moral (súmula 385 STJ).`,
    area: 'consumidor',
    keywords: ['negativação indevida', 'nome sujo indenização', 'SPC Serasa indevido', 'dano moral negativação'],
    relatedQuestions: ['cons-2', 'cons-3', 'cons-4'],
    metaDescription: 'Saiba se você pode ser indenizado por nome negativado indevidamente: valores, provas necessárias e passo a passo para ação.'
  },
  {
    id: 'cons-2',
    slug: 'prazo-reclamar-defeito-produto',
    question: 'Qual o prazo para reclamar de defeito em produto?',
    answer: `Os prazos para reclamar de defeitos variam conforme o tipo de produto e defeito:

**Produtos não duráveis (alimentos, cosméticos):**
- Prazo: **30 dias**
- Conta da entrega ou término do serviço

**Produtos duráveis (eletrônicos, móveis, veículos):**
- Prazo: **90 dias**
- Conta da entrega ou término do serviço

**Vício oculto (defeito que aparece depois):**
- O prazo começa quando o defeito é **descoberto**
- Limite: vida útil do produto
- Exemplo: motor de carro que falha após 1 ano

**O que você pode exigir:**
1. Troca do produto
2. Devolução do valor pago
3. Abatimento proporcional do preço
4. Conserto (fornecedor tem 30 dias)

**Se o fornecedor não resolver em 30 dias:**
- Você escolhe entre as opções acima
- Não precisa aceitar mais prazo

**Dica:** Sempre guarde nota fiscal e registre reclamação por escrito (e-mail, SAC com protocolo, Procon).`,
    area: 'consumidor',
    keywords: ['prazo defeito produto', 'garantia produto', 'reclamar produto defeituoso', 'vício oculto'],
    relatedQuestions: ['cons-1', 'cons-3', 'cons-4'],
    metaDescription: 'Conheça os prazos para reclamar de defeito: 30 dias (não duráveis), 90 dias (duráveis) e regras para vício oculto.'
  },
  {
    id: 'cons-3',
    slug: 'direito-arrependimento-compra-online',
    question: 'Tenho direito de arrependimento em compra online?',
    answer: `**Sim!** O direito de arrependimento é garantido pelo Código de Defesa do Consumidor.

**Regras do direito de arrependimento:**
- Prazo: **7 dias** corridos
- Conta do recebimento do produto ou assinatura do contrato
- Não precisa justificar o motivo
- Vale para compras: online, telefone, catálogo, porta em porta

**O que você tem direito:**
- Devolução integral do valor pago
- Frete de devolução pago pelo vendedor
- Estorno em até 30 dias

**NÃO se aplica a:**
- Compras em loja física
- Produtos personalizados
- Produtos perecíveis já abertos
- Downloads de conteúdo digital já acessado

**Como exercer:**
1. Entre em contato com a loja em até 7 dias
2. Solicite a devolução por escrito (guarde protocolo)
3. Envie o produto na embalagem original
4. Aguarde o estorno

**Se a loja recusar:**
- Registre no Procon
- Reclame no Consumidor.gov.br
- Pode entrar com ação no JEC

**Dica:** Documente tudo com prints e protocolos.`,
    area: 'consumidor',
    keywords: ['direito arrependimento', 'devolução compra online', '7 dias arrependimento', 'cancelar compra internet'],
    relatedQuestions: ['cons-1', 'cons-2', 'cons-4'],
    metaDescription: 'Entenda o direito de arrependimento em compras online: 7 dias para desistir sem justificativa e receber reembolso total.'
  },
  {
    id: 'cons-4',
    slug: 'empresa-pode-cobrar-taxa-cancelamento',
    question: 'A empresa pode cobrar taxa de cancelamento?',
    answer: `Depende da situação. Veja quando a taxa é ou não permitida:

**Taxa de cancelamento é PROIBIDA:**
- Compras online com até 7 dias (direito de arrependimento)
- Serviço não prestado ou produto não entregue
- Descumprimento do contrato pela empresa
- Cobrança abusiva (maior que o prejuízo real)

**Taxa de cancelamento pode ser cobrada:**
- Contratos de fidelidade (academias, planos)
- Após o prazo de 7 dias em compras à distância
- Quando há custos reais para a empresa
- Passagens aéreas (com limites legais)

**Limites para taxa de cancelamento:**
- Deve ser proporcional ao prejuízo
- Não pode ser valor fixo sem relação com custos
- Contrato deve prever claramente a taxa
- Multa máxima geralmente aceita: 10% a 30%

**Passagens aéreas (regras específicas):**
- Até 7 dias da compra E mais de 7 dias do voo: reembolso total
- Fora disso: pode haver taxa, limitada ao valor da passagem

**O que fazer se discordar:**
- Questione por escrito
- Reclame no Procon ou Consumidor.gov.br
- Ação no JEC para valores abusivos`,
    area: 'consumidor',
    keywords: ['taxa cancelamento', 'multa cancelamento', 'cancelar contrato', 'multa abusiva'],
    relatedQuestions: ['cons-1', 'cons-2', 'cons-3'],
    metaDescription: 'Saiba quando a empresa pode ou não cobrar taxa de cancelamento: regras, limites e o que fazer se a cobrança for abusiva.'
  },
  {
    id: 'cons-5',
    slug: 'meu-voo-foi-cancelado-direitos',
    question: 'Meu voo foi cancelado. Quais são meus direitos?',
    answer: `O cancelamento de voo gera direitos importantes para o passageiro conforme regulamento da ANAC:

**Direitos imediatos (a partir do cancelamento):**
- **Comunicação:** acesso a telefone e internet
- **Alimentação:** voucher ou refeição (a partir de 1h de espera)
- **Acomodação:** hotel + transporte (se pernoite necessário)

**Opções que a companhia deve oferecer:**
1. **Reacomodação:** em voo da mesma ou outra companhia
2. **Reembolso integral:** em até 7 dias
3. **Execução por outro meio:** ônibus, por exemplo

**Indenização por danos morais:**
- Cancelamento sem aviso prévio de 72h: cabe indenização
- Valores comuns: R$ 3.000 a R$ 15.000
- Perda de compromisso importante: valores maiores

**Como proceder:**
1. Exija o cumprimento dos direitos no aeroporto
2. Guarde todos os comprovantes (cartão de embarque, recibos)
3. Registre reclamação na ANAC
4. Procure advogado para indenização

**Prazo para reclamar:** 5 anos para voos nacionais, 2 anos para internacionais.`,
    area: 'consumidor',
    keywords: ['voo cancelado', 'cancelamento voo', 'direitos passageiro', 'indenização aérea', 'ANAC'],
    relatedQuestions: ['cons-6', 'cons-4', 'cons-1'],
    metaDescription: 'Saiba seus direitos quando o voo é cancelado: reacomodação, reembolso, assistência material e indenização por danos morais.'
  },
  {
    id: 'cons-6',
    slug: 'bagagem-extraviada-indenizacao',
    question: 'Minha bagagem foi extraviada. Tenho direito a indenização?',
    answer: `Sim, o extravio de bagagem gera direitos ao passageiro. Veja o que fazer:

**No aeroporto (imediatamente):**
1. Vá ao balcão da companhia aérea
2. Preencha o RIB (Registro de Irregularidade de Bagagem)
3. Anote o número do protocolo

**Prazos para localização:**
- **Voos nacionais:** até 7 dias
- **Voos internacionais:** até 21 dias

**Seus direitos imediatos:**
- Reembolso para compras de itens essenciais
- Roupas, higiene pessoal, medicamentos
- Guarde todas as notas fiscais

**Se a bagagem não for localizada:**
- Indenização pelo valor declarado ou limite da convenção
- Comprovação do conteúdo (fotos, notas)
- Danos morais se houve prejuízo significativo

**Valores de indenização:**
- Nacional: até 1.131 DES (~R$ 7.500)
- Internacional (Convenção de Montreal): até 1.288 DES (~R$ 8.500)
- Danos morais: R$ 3.000 a R$ 20.000

**Prazo para reclamar:** 7 dias para avaria, 21 dias para atraso, 2 anos para ação judicial.`,
    area: 'consumidor',
    keywords: ['bagagem extraviada', 'mala perdida', 'extravio bagagem', 'indenização bagagem', 'companhia aérea'],
    relatedQuestions: ['cons-5', 'cons-4', 'cons-1'],
    metaDescription: 'Saiba o que fazer quando sua bagagem é extraviada: prazos, direitos, indenização e como proceder para recuperar ou ser ressarcido.'
  },
  {
    id: 'cons-7',
    slug: 'operadora-cobranca-servico-nao-contratado',
    question: 'A operadora está me cobrando por serviço que não contratei. O que fazer?',
    answer: `A cobrança por serviço não contratado é prática abusiva. Veja como resolver:

**Passo 1 - Conteste na operadora:**
- Ligue para o SAC e anote o protocolo
- Conteste por e-mail (para ter prova escrita)
- Prazo para resposta: 5 dias úteis

**Passo 2 - Reclame na ANATEL:**
- Telefone: 1331 (gratuito)
- Site: anatel.gov.br
- App Anatel Consumidor
- Prazo para resposta: 5 dias

**Passo 3 - Registre no Consumidor.gov.br:**
- Site governamental gratuito
- Alta taxa de resolução
- Prazo: 10 dias para resposta

**Seus direitos:**
- **Devolução em dobro** do valor pago indevidamente
- Cancelamento imediato do serviço
- Indenização por danos morais se houve negativação

**Se não resolver:**
- Procon da sua cidade
- Juizado Especial Cível (até 20 salários mínimos sem advogado)
- Ação com advogado para casos maiores

**Dica:** Sempre guarde faturas, protocolos e prints de conversas.`,
    area: 'consumidor',
    keywords: ['cobrança indevida', 'operadora cobrança', 'serviço não contratado', 'ANATEL reclamação'],
    relatedQuestions: ['cons-8', 'cons-1', 'cons-2'],
    metaDescription: 'Saiba o que fazer quando a operadora cobra por serviço não contratado: passo a passo para contestar e receber de volta em dobro.'
  },
  {
    id: 'cons-8',
    slug: 'internet-velocidade-abaixo-contratado',
    question: 'Minha internet está abaixo da velocidade contratada. Posso reclamar?',
    answer: `Sim, a operadora deve entregar a velocidade contratada. Veja as regras:

**Velocidades mínimas garantidas (ANATEL):**
- **Velocidade instantânea:** mínimo 80% do contratado
- **Média mensal:** mínimo 80% do contratado
- **Upload:** mesmas regras

**Como medir:**
1. Acesse: brasilbandalarga.com.br (medidor oficial ANATEL)
2. Faça pelo menos 10 medições em horários diferentes
3. Salve os relatórios como prova

**Se estiver abaixo do mínimo:**
1. Reclame na operadora com protocolo
2. Prazo para normalizar: 48 horas
3. Se não resolver: ANATEL (1331)

**Seus direitos:**
- Desconto proporcional na fatura
- Cancelamento sem multa
- Migração para plano compatível
- Indenização se houve prejuízo

**Dicas importantes:**
- Teste por cabo, não por Wi-Fi (mais preciso)
- Verifique se não há problema no seu roteador
- Documente tudo com prints e datas

**Prazo para reclamação:** Não há prazo específico, reclame assim que identificar.`,
    area: 'consumidor',
    keywords: ['internet lenta', 'velocidade internet', 'operadora internet', 'banda larga'],
    relatedQuestions: ['cons-7', 'cons-1', 'cons-4'],
    metaDescription: 'Saiba o que fazer quando a internet está abaixo da velocidade contratada: como medir, reclamar e seus direitos.'
  },
  {
    id: 'cons-9',
    slug: 'contrato-fidelidade-multa-cancelamento',
    question: 'Posso cancelar contrato de fidelidade antes do prazo?',
    answer: `Sim, você pode cancelar a qualquer momento. A questão é se haverá multa:

**Quando NÃO pode haver multa:**
- Serviço diferente do contratado
- Problemas recorrentes não resolvidos
- Aumento de preço acima da inflação
- Mudança para local sem cobertura
- Falecimento do titular

**Quando a multa é permitida:**
- Cancelamento por conveniência do consumidor
- Dentro do prazo de fidelidade
- Desde que proporcional ao tempo restante

**Cálculo da multa:**
- Deve ser proporcional aos meses restantes
- Exemplo: 12 meses de fidelidade, cancela no 6º mês = multa de 50% do valor original
- Não pode ser valor fixo desproporcional

**Limites para a multa:**
- Geralmente aceita: 10% a 40% do valor restante
- Multa maior pode ser considerada abusiva
- Pode ser contestada no Procon ou Justiça

**Como cancelar:**
1. Notifique por escrito (e-mail com confirmação)
2. Questione o valor da multa se parecer abusivo
3. Reclame na ANATEL/Procon se necessário

**Dica:** Academias, planos de telefonia e TV são os casos mais comuns.`,
    area: 'consumidor',
    keywords: ['fidelidade', 'multa cancelamento', 'cancelar contrato', 'contrato abusivo'],
    relatedQuestions: ['cons-4', 'cons-7', 'cons-1'],
    metaDescription: 'Saiba se pode cancelar contrato de fidelidade antes do prazo: quando há multa, como calcular e quando contestar valores abusivos.'
  },
  {
    id: 'cons-10',
    slug: 'juros-abusivos-emprestimo-banco',
    question: 'Como saber se os juros do meu empréstimo são abusivos?',
    answer: `Os juros podem ser considerados abusivos quando estão muito acima da média de mercado. Veja como identificar:

**Sinais de juros abusivos:**
- Taxa muito superior à média do Banco Central
- CET (Custo Efetivo Total) não informado
- Taxas ocultas no contrato
- Cobranças não autorizadas embutidas

**Como verificar:**
1. Consulte a taxa média no site do Banco Central
2. Compare com a taxa do seu contrato
3. Verifique o CET (inclui todos os custos)

**Taxas médias (consulte o BC para valores atuais):**
- Consignado INSS: ~1,8% a 2,5% ao mês
- Pessoal: ~3% a 7% ao mês
- Cheque especial: limite de 8% ao mês
- Cartão de crédito rotativo: ~10% a 15% ao mês

**O que fazer se for abusivo:**
1. Tente renegociar com o banco
2. Reclame no Banco Central (Registrato)
3. Registre no Consumidor.gov.br
4. Ação judicial para revisão de contrato

**Revisão judicial pode:**
- Reduzir juros ao patamar médio de mercado
- Devolver valores pagos a mais
- Recalcular todo o contrato

**Prazo:** Pode revisar contratos dos últimos 10 anos.`,
    area: 'consumidor',
    keywords: ['juros abusivos', 'empréstimo juros', 'taxa abusiva', 'revisão contrato banco'],
    relatedQuestions: ['cons-11', 'cons-1', 'cons-2'],
    metaDescription: 'Saiba como identificar juros abusivos em empréstimos: sinais, como verificar e o que fazer para revisar o contrato.'
  },
  {
    id: 'cons-11',
    slug: 'garantia-produto-prazo-legal',
    question: 'Qual é o prazo de garantia legal de um produto?',
    answer: `A garantia legal é determinada pelo Código de Defesa do Consumidor e não pode ser afastada:

**Prazos de garantia LEGAL:**
- **Produtos não duráveis:** 30 dias (alimentos, cosméticos)
- **Produtos duráveis:** 90 dias (eletrônicos, móveis, roupas)

**Início da contagem:**
- A partir da entrega do produto
- Em vícios ocultos: a partir da descoberta do defeito

**Garantia contratual (fabricante):**
- É ADICIONAL à garantia legal
- Exemplo: garantia de 1 ano = 90 dias legais + 9 meses contratuais
- As duas se somam, não se substituem

**O que está coberto:**
- Defeitos de fabricação
- Problemas não causados pelo consumidor
- Vícios que tornem o produto impróprio para uso

**Prazos para a loja/fabricante resolver:**
- 30 dias para reparar o defeito
- Se não resolver, você pode exigir:
  - Troca por produto novo
  - Devolução do valor pago
  - Abatimento proporcional do preço

**Dica:** Guarde sempre a nota fiscal e registre reclamações por escrito.`,
    area: 'consumidor',
    keywords: ['garantia legal', 'prazo garantia', 'defeito produto', 'CDC garantia'],
    relatedQuestions: ['cons-12', 'cons-4', 'cons-1'],
    metaDescription: 'Entenda o prazo de garantia legal de produtos: 30 dias para não duráveis, 90 dias para duráveis, e como a garantia contratual se soma.'
  },
  {
    id: 'cons-12',
    slug: 'compra-online-produto-nao-chegou',
    question: 'Comprei online e o produto não chegou. O que fazer?',
    answer: `O não recebimento de produto comprado online é uma das reclamações mais comuns. Veja como resolver:

**Passo a passo:**

**1. Contate o vendedor:**
- E-mail ou chat (guarde prints)
- Estabeleça prazo de 7 a 15 dias para resolver
- Anote número de protocolo

**2. Se não resolver:**
- Reclame no Reclame Aqui
- Registre no Consumidor.gov.br
- Acione o Procon da sua cidade

**3. Marketplace também responde:**
- Mercado Livre, Amazon, Shopee: são responsáveis solidários
- Reclame na plataforma E no vendedor

**Seus direitos:**
- **Reembolso integral:** incluindo frete
- **Novo envio:** às custas do vendedor
- **Danos morais:** se houve prejuízo significativo

**Se pagou no cartão de crédito:**
- Conteste a compra na operadora (chargeback)
- Prazo: geralmente 60-90 dias da compra
- Pode ser feito pelo app do cartão

**No Juizado Especial Cível:**
- Até 20 salários mínimos sem advogado
- Até 40 salários mínimos com advogado
- Prazo: cerca de 2-4 meses para audiência

**Prazo para reclamar:** 5 anos a partir da entrega prevista.`,
    area: 'consumidor',
    keywords: ['compra online', 'produto não chegou', 'não recebi produto', 'e-commerce fraude'],
    relatedQuestions: ['cons-3', 'cons-11', 'cons-1'],
    metaDescription: 'Saiba o que fazer quando o produto comprado online não chega: passo a passo para reclamar, pedir reembolso e acionar a Justiça.'
  },
  {
    id: 'cons-13',
    slug: 'plano-saude-negou-cirurgia',
    question: 'O plano de saúde negou minha cirurgia ou tratamento. O que fazer?',
    answer: `A negativa de procedimentos pelo plano de saúde é uma prática comum, mas frequentemente ilegal. Veja como agir:

**Quando a negativa é ILEGAL:**
- Procedimento está no rol da ANS
- Urgência ou emergência (cobertura obrigatória)
- Continuidade de tratamento já iniciado
- Alegação de doença preexistente após 2 anos de contrato

**Passo a passo para resolver:**

**1. Exija negativa por escrito:**
- O plano deve justificar a negativa
- Prazo para fornecer: 48 horas

**2. Reclame na ANS:**
- Telefone: 0800 701 9656
- Site: ans.gov.br
- App ANS
- Prazo de resposta: 5 a 10 dias

**3. Liminar judicial:**
- Para casos urgentes: 24 a 48 horas
- Não precisa esperar resposta do plano
- Procure advogado ou Defensoria Pública

**Indenização por danos morais:**
- Negativa indevida gera dano moral
- Valores: R$ 5.000 a R$ 30.000
- Casos graves (risco de vida): valores maiores

**Documentos importantes:**
- Relatório médico detalhado
- Pedido médico do procedimento
- Negativa por escrito do plano
- Contrato do plano de saúde

**Prazo:** Não há prazo para reclamar, mas aja rápido em casos urgentes.`,
    area: 'consumidor',
    keywords: ['plano saúde negou', 'negativa plano saúde', 'cirurgia negada', 'ANS reclamação'],
    relatedQuestions: ['cons-14', 'cons-1', 'cons-2'],
    metaDescription: 'Saiba o que fazer quando o plano de saúde nega cirurgia ou tratamento: como reclamar, conseguir liminar e buscar indenização.'
  },
  {
    id: 'cons-14',
    slug: 'reajuste-abusivo-plano-saude',
    question: 'O reajuste do meu plano de saúde foi muito alto. Posso contestar?',
    answer: `Sim, reajustes abusivos podem e devem ser contestados. Veja as regras:

**Tipos de reajuste:**

**1. Reajuste anual (inflação médica):**
- Planos individuais: limitado pela ANS
- Planos coletivos: negociado (pode ser maior)
- Deve ser comunicado com 30 dias de antecedência

**2. Reajuste por faixa etária:**
- Permitido em faixas específicas (ex: 0-18, 19-23, etc.)
- Última faixa: 59+ anos
- Diferença máxima: 6x entre primeira e última faixa
- Proibido após 60 anos para contratos antigos

**Quando o reajuste é ABUSIVO:**
- Acima do índice autorizado pela ANS (individuais)
- Sem justificativa técnica (coletivos)
- Reajuste por idade após os 60 anos
- Sem comunicação prévia de 30 dias

**Como contestar:**
1. Questione por escrito na operadora
2. Reclame na ANS (0800 701 9656)
3. Procon ou Consumidor.gov.br
4. Ação judicial para revisar

**Na Justiça:**
- Liminar para suspender reajuste
- Revisão dos aumentos dos últimos 3-5 anos
- Devolução de valores pagos a mais
- Danos morais em casos extremos

**Dica:** Compare seu reajuste com o índice ANS do ano (divulgado em maio).`,
    area: 'consumidor',
    keywords: ['reajuste plano saúde', 'aumento plano saúde', 'plano saúde caro', 'reajuste abusivo'],
    relatedQuestions: ['cons-13', 'cons-1', 'cons-2'],
    metaDescription: 'Saiba como contestar reajuste abusivo do plano de saúde: regras, limites legais e como agir na ANS ou Justiça.'
  },

  // PENAL
  {
    id: 'penal-1',
    slug: 'fui-chamado-delegacia-preciso-advogado',
    question: 'Fui chamado na delegacia. Preciso de advogado?',
    answer: `**Sim, é altamente recomendado.** Veja por quê:

**Seus direitos na delegacia:**
- Permanecer em silêncio
- Não produzir provas contra si mesmo
- Ser acompanhado por advogado
- Saber do que está sendo acusado
- Comunicar familiar sobre sua presença

**Por que levar advogado:**
- Garante que seus direitos sejam respeitados
- Orienta sobre o que falar ou não falar
- Evita que você assine algo prejudicial
- Acompanha a lavratura do boletim de ocorrência
- Pode requerer providências imediatas

**Quando é especialmente importante:**
- Se você é suspeito ou indiciado
- Em casos de flagrante
- Quando não entende a situação
- Se está sendo pressionado

**Se não puder pagar advogado:**
- Você tem direito à Defensoria Pública
- Pode solicitar que a delegacia acione a Defensoria
- É gratuito e é seu direito constitucional

**Importante:** Nunca minta na delegacia (crime de falso testemunho), mas você pode ficar em silêncio.`,
    area: 'penal',
    keywords: ['chamado delegacia', 'advogado delegacia', 'direitos delegacia', 'depoimento policial'],
    relatedQuestions: ['penal-2', 'penal-3', 'penal-4'],
    metaDescription: 'Saiba se você precisa de advogado ao ser chamado na delegacia: seus direitos, quando é importante e como acessar a Defensoria Pública.'
  },
  {
    id: 'penal-2',
    slug: 'o-que-e-habeas-corpus',
    question: 'O que é habeas corpus e quando posso pedir?',
    answer: `O habeas corpus é um remédio constitucional para proteger a liberdade de ir e vir.

**Quando cabe habeas corpus:**
- Prisão ilegal ou abusiva
- Ameaça de prisão sem fundamento legal
- Prisão por tempo além do permitido
- Falta de fundamentação na decisão de prisão
- Excesso de prazo na prisão preventiva

**Tipos de habeas corpus:**
- **Preventivo:** quando há ameaça de prisão
- **Liberatório:** quando já está preso ilegalmente
- **Trancativo:** para trancar ação penal indevida

**Quem pode impetrar:**
- O próprio preso
- Familiares
- Advogado
- Qualquer pessoa (até cidadão comum)
- Ministério Público
- Defensoria Pública

**Onde pedir:**
- Juiz de primeira instância (contra ato de delegado)
- Tribunal de Justiça (contra ato de juiz)
- STJ ou STF (contra atos de tribunais)

**Prazo:** Não há prazo, pode ser pedido a qualquer momento.

**Custo:** Gratuito, não precisa de advogado (mas é recomendado).`,
    area: 'penal',
    keywords: ['habeas corpus', 'quando cabe habeas corpus', 'prisão ilegal', 'liberdade habeas corpus'],
    relatedQuestions: ['penal-1', 'penal-3', 'penal-4'],
    metaDescription: 'Entenda o que é habeas corpus, quando pode ser pedido, quem pode impetrar e como funciona para proteger a liberdade.'
  },
  {
    id: 'penal-3',
    slug: 'quanto-tempo-ficha-fica-limpa',
    question: 'Quanto tempo leva para a ficha ficar limpa?',
    answer: `O tempo para "limpar a ficha" depende do tipo de registro:

**Inquérito arquivado:**
- Não gera antecedentes
- Pode ser mencionado em certidão de "nada consta"
- Após 5 anos, não aparece mais

**Processo sem condenação:**
- Absolvição: não gera antecedentes
- Processo em andamento: aparece até sentença final

**Condenação criminal:**
- Durante cumprimento da pena: consta como antecedente
- Após cumprimento: aguardar reabilitação

**Reabilitação criminal:**
- Prazo: 2 anos após cumprimento total da pena
- Exige bom comportamento
- Precisa de pedido ao juiz
- Limpa os registros públicos

**Termo circunstanciado (JECrim):**
- Transação penal: não gera antecedentes
- Suspensão condicional: não gera antecedentes
- Após 5 anos: registros são desconsiderados

**Certidão de antecedentes:**
- Crimes: aparecem durante o processo e cumprimento
- Após reabilitação: certidão fica limpa

**Dica:** A prescrição também pode beneficiar, variando de 3 a 20 anos conforme a pena.`,
    area: 'penal',
    keywords: ['limpar ficha criminal', 'antecedentes criminais', 'reabilitação criminal', 'certidão nada consta'],
    relatedQuestions: ['penal-1', 'penal-2', 'penal-4'],
    metaDescription: 'Saiba quanto tempo leva para limpar a ficha criminal: reabilitação, prescrição e quando os antecedentes deixam de aparecer.'
  },
  {
    id: 'penal-4',
    slug: 'qual-diferenca-flagrante-preventiva',
    question: 'Qual a diferença entre prisão em flagrante e preventiva?',
    answer: `São tipos diferentes de prisão, com regras e fundamentos distintos:

**Prisão em flagrante:**
- **Quando:** durante ou logo após o crime
- **Quem decreta:** qualquer pessoa pode efetuar
- **Duração:** até 24 horas para análise do juiz
- **Conversão:** pode virar preventiva, medidas cautelares ou liberdade

**Situações de flagrante:**
- Cometendo o crime
- Acabou de cometer
- Perseguido logo após
- Encontrado com objetos/armas do crime

**Prisão preventiva:**
- **Quando:** a qualquer momento da investigação ou processo
- **Quem decreta:** somente juiz
- **Duração:** não tem prazo fixo (mas há limites)
- **Requisitos:** garantir ordem pública, conveniência da instrução, assegurar aplicação da lei

**Para decretar preventiva, é preciso:**
- Prova da existência do crime
- Indícios suficientes de autoria
- Periculosidade ou risco de fuga
- Crimes com pena superior a 4 anos (regra geral)

**Direitos em ambas:**
- Comunicação imediata ao juiz
- Comunicação à família
- Assistência de advogado
- Audiência de custódia em 24h`,
    area: 'penal',
    keywords: ['prisão flagrante', 'prisão preventiva', 'diferença flagrante preventiva', 'tipos de prisão'],
    relatedQuestions: ['penal-1', 'penal-2', 'penal-3'],
    metaDescription: 'Entenda a diferença entre prisão em flagrante e preventiva: quando ocorrem, quem decreta, duração e seus direitos.'
  },

  // GERAL
  {
    id: 'geral-1',
    slug: 'como-funciona-atendimento-advogado-ja',
    question: 'Como funciona o atendimento do Advogado Já?',
    answer: `O atendimento online com advogado é 100% legal e cada vez mais comum.

**Como funciona:**
1. **Primeiro contato:** você descreve seu problema pelo chat ou formulário
2. **Análise inicial:** advogado avalia se pode ajudar
3. **Consulta:** por videochamada, telefone ou chat
4. **Documentos:** enviados por e-mail ou WhatsApp
5. **Acompanhamento:** tudo digital, com atualizações frequentes

**Vantagens:**
- Atendimento de qualquer lugar do Brasil
- Horários mais flexíveis
- Economia de tempo e deslocamento
- Documentação organizada digitalmente
- Comunicação mais ágil

**O que pode ser feito online:**
- Consultas e orientações
- Elaboração de contratos e petições
- Acompanhamento de processos
- Recursos e defesas
- Acordos e negociações

**Segurança:**
- Advogados regularmente inscritos na OAB
- Sigilo profissional garantido
- Documentos protegidos por criptografia
- Pagamentos seguros

**É válido judicialmente?**
Sim! O processo judicial brasileiro é digital. Petições, audiências e até julgamentos podem ser online.`,
    area: 'geral',
    keywords: ['advogado online', 'atendimento jurídico online', 'consulta advogado internet', 'advogado digital'],
    relatedQuestions: ['geral-2', 'geral-3', 'geral-4'],
    metaDescription: 'Saiba como funciona o atendimento com advogado online: etapas, vantagens, segurança e o que pode ser resolvido pela internet.'
  },
  {
    id: 'geral-2',
    slug: 'quanto-custa-contratar-advogado',
    question: 'Quanto custa contratar um advogado?',
    answer: `Os honorários advocatícios variam muito conforme o tipo de serviço e complexidade.

**Tipos de cobrança:**

**1. Honorários fixos:**
- Valor fechado para o serviço completo
- Comum em: divórcios, contratos, consultoria
- Exemplo: divórcio consensual R$ 2.000 a R$ 5.000

**2. Honorários por hora:**
- Cobrado por hora de trabalho
- Comum em: consultoria empresarial
- Média: R$ 200 a R$ 800/hora

**3. Honorários de êxito:**
- Porcentagem sobre o valor ganho
- Comum em: trabalhista, indenizações
- Geralmente: 20% a 30% do valor obtido

**4. Honorários mistos:**
- Entrada fixa + porcentagem do êxito
- Equilibra risco entre cliente e advogado

**Referência de valores:**
- Consulta simples: R$ 150 a R$ 500
- Ação trabalhista: 20-30% do valor ganho
- Inventário: 6% a 10% do patrimônio
- Defesa criminal: R$ 5.000 a R$ 50.000+

**Opções para quem não pode pagar:**
- Defensoria Pública (gratuita)
- Núcleos de prática jurídica (faculdades)
- Advogados dativos (nomeados pelo juiz)

**Dica:** Sempre peça proposta por escrito antes de contratar.`,
    area: 'geral',
    keywords: ['preço advogado', 'honorários advocatícios', 'quanto custa processo', 'valor advogado'],
    relatedQuestions: ['geral-1', 'geral-3', 'geral-4'],
    metaDescription: 'Descubra quanto custa contratar um advogado: tipos de honorários, valores de referência e opções gratuitas disponíveis.'
  },
  {
    id: 'geral-3',
    slug: 'quanto-tempo-demora-processo-judicial',
    question: 'Quanto tempo demora um processo judicial?',
    answer: `O tempo varia muito conforme o tipo de processo e justiça:

**Juizados Especiais (JEC/JECrim):**
- Prazo médio: 3 a 12 meses
- Limite de valor: 40 salários mínimos
- Mais rápido e sem custas

**Justiça Comum (Estadual):**
- 1ª instância: 1 a 3 anos
- Recurso (2ª instância): +1 a 2 anos
- Tribunais superiores: +2 a 5 anos

**Justiça do Trabalho:**
- 1ª instância: 6 meses a 2 anos
- Recursos: +1 a 3 anos
- Geralmente mais rápida que a cível

**Justiça Federal:**
- Similar à estadual
- Processos contra INSS: 1 a 3 anos

**Fatores que aceleram:**
- Processo digital
- Acordo entre as partes
- Advogado experiente
- Documentação completa
- Acompanhamento ativo

**Fatores que atrasam:**
- Muitos recursos
- Perícias complexas
- Comarca congestionada
- Citações por edital

**Dica:** Muitos conflitos podem ser resolvidos em mediação ou conciliação, muito mais rápido que processo judicial.`,
    area: 'geral',
    keywords: ['tempo processo judicial', 'demora justiça', 'quanto tempo ação judicial', 'prazo processo'],
    relatedQuestions: ['geral-1', 'geral-2', 'geral-4'],
    metaDescription: 'Saiba quanto tempo demora um processo judicial: JEC (3-12 meses), justiça comum (1-5 anos) e dicas para acelerar.'
  },
  {
    id: 'geral-4',
    slug: 'o-que-e-justica-gratuita',
    question: 'O que é justiça gratuita e quem tem direito?',
    answer: `A justiça gratuita (gratuidade de justiça) isenta quem não pode pagar as custas do processo.

**O que é isento:**
- Custas processuais
- Taxas judiciárias
- Honorários de perito
- Honorários do advogado da outra parte (se perder)
- Custas de recursos

**Quem tem direito:**
- Pessoa física com renda até 3 salários mínimos
- Quem comprove insuficiência de recursos
- Beneficiários de programas sociais
- Não precisa ser "miserável"

**Como solicitar:**
- Declaração de hipossuficiência (afirmando que não pode pagar)
- Pode ser feita pelo próprio advogado na petição inicial
- Juiz pode pedir comprovação (holerites, IR)

**Justiça gratuita NÃO inclui:**
- Honorários do seu próprio advogado
- Custas de cartório extrajudicial
- Multas por litigância de má-fé

**Defensoria Pública:**
- Além de custas, oferece advogado gratuito
- Para quem tem renda até 3 salários mínimos
- Atendimento completo e gratuito

**Importante:** Mentir sobre a situação financeira pode gerar multa e crime.`,
    area: 'geral',
    keywords: ['justiça gratuita', 'processo gratuito', 'quem tem direito justiça gratuita', 'custas judiciais gratuitas'],
    relatedQuestions: ['geral-1', 'geral-2', 'geral-3'],
    metaDescription: 'Entenda o que é justiça gratuita, quem tem direito, o que é isento e como solicitar a gratuidade nas custas do processo.'
  },

  // NOVAS FAQS - EXPANSÃO SEO
  // TRABALHISTA (4 novas)
  {
    id: 'trab-7',
    slug: 'demitido-periodo-experiencia-direitos',
    question: 'Fui demitido no período de experiência. Tenho direitos?',
    answer: `**Sim**, você tem direitos mesmo sendo demitido no período de experiência. Veja:

**Se a empresa demitiu antes do prazo:**
- Saldo de salário (dias trabalhados)
- Férias proporcionais + 1/3
- 13º proporcional
- FGTS depositado (sem multa de 40%)
- **Indenização** de 50% dos dias restantes do contrato

**Se você pediu demissão:**
- Saldo de salário
- Férias proporcionais + 1/3
- 13º proporcional
- Pode ter que indenizar a empresa (metade do que falta)

**Duração do período de experiência:**
- Máximo de 90 dias
- Pode ser dividido em dois períodos

**Importante:** No término normal do contrato de experiência, não há multa de 40% do FGTS nem seguro-desemprego.`,
    area: 'trabalhista',
    keywords: ['demissão período experiência', 'contrato experiência direitos', 'demitido experiência', 'verbas rescisórias experiência'],
    relatedQuestions: ['trab-2', 'trab-5'],
    metaDescription: 'Fui demitido no período de experiência, tenho direitos? Sim! Saiba quais verbas você deve receber e quando tem direito a indenização.'
  },
  {
    id: 'trab-8',
    slug: 'empresa-pode-descontar-vale-refeicao-salario',
    question: 'A empresa pode descontar vale-refeição do salário?',
    answer: `**Sim, mas com limites.** O desconto do vale-refeição (VR) é legal, mas deve respeitar regras:

**Regras do PAT (Programa de Alimentação do Trabalhador):**
- Desconto máximo de **20%** do valor do benefício
- Exemplo: VR de R$ 500 = desconto máximo de R$ 100

**O que NÃO pode:**
- Descontar mais que 20% do valor do benefício
- Descontar valor superior ao fornecido
- Usar VR para compensar outros débitos
- Descontar VR de período de férias ou afastamento

**Verifique:**
- Convenção coletiva pode ter regras diferentes
- Acordo individual deve ser por escrito
- Algumas empresas oferecem VR sem desconto

**Se o desconto for abusivo:**
Você pode reclamar ao sindicato ou ajuizar ação trabalhista para restituição.`,
    area: 'trabalhista',
    keywords: ['desconto vale refeição', 'empresa descontar VR', 'vale refeição desconto salário', 'PAT desconto'],
    relatedQuestions: ['trab-4', 'trab-5'],
    metaDescription: 'A empresa pode descontar vale-refeição do salário? Sim, mas com limite de 20%. Entenda as regras e o que é abusivo.'
  },
  {
    id: 'trab-9',
    slug: 'quanto-tempo-sacar-fgts-apos-demissao',
    question: 'Quanto tempo tenho para sacar o FGTS após demissão?',
    answer: `Após a demissão sem justa causa, você pode sacar o FGTS **imediatamente** após a empresa fazer a comunicação à Caixa.

**Prazo da empresa:**
- A empresa tem **10 dias** para fazer a rescisão e comunicar à Caixa
- Após isso, o saque é liberado automaticamente

**Onde sacar:**
- Aplicativo FGTS (transferência para conta)
- Agências da Caixa
- Casas lotéricas (valores até R$ 3.000)
- Correspondentes Caixa Aqui

**Documentos necessários:**
- Documento de identidade
- Carteira de Trabalho
- Termo de rescisão (TRCT)
- Número do PIS/PASEP

**Prazo para saque:**
- Não há prazo limite para sacar
- O dinheiro continua rendendo na conta FGTS
- Recomenda-se sacar em até 5 anos para evitar problemas

**E a multa de 40%?**
A multa de 40% é depositada junto com o saque rescisório.`,
    area: 'trabalhista',
    keywords: ['prazo sacar FGTS demissão', 'saque FGTS rescisão', 'quando posso sacar FGTS', 'FGTS após demissão'],
    relatedQuestions: ['trab-2', 'trab-6'],
    metaDescription: 'Quanto tempo tenho para sacar o FGTS após demissão? O saque é liberado em até 10 dias após a rescisão. Veja como sacar.'
  },
  {
    id: 'trab-10',
    slug: 'posso-recusar-fazer-hora-extra',
    question: 'Posso me recusar a fazer hora extra?',
    answer: `**Depende da situação.** Veja quando você pode e quando não pode recusar:

**Você PODE recusar quando:**
- Não há previsão em contrato ou convenção coletiva
- Ultrapassa 2 horas extras diárias
- Prejudica sua saúde ou segurança
- Você tem compromisso inadiável comprovado
- Está em tratamento médico

**Você NÃO pode recusar quando:**
- Há necessidade imperiosa (força maior)
- Está previsto em contrato ou convenção
- É serviço inadiável que causará prejuízo manifesto
- Há acordo de compensação (banco de horas)

**Limites legais:**
- Máximo de 2 horas extras por dia
- Total máximo de 10 horas diárias
- Pode haver exceções em convenção coletiva

**Se for obrigado ilegalmente:**
- Faça por escrito sua recusa
- Guarde provas
- Pode caracterizar rescisão indireta
- Procure o sindicato ou advogado`,
    area: 'trabalhista',
    keywords: ['recusar hora extra', 'obrigado fazer hora extra', 'pode negar hora extra', 'hora extra obrigatória'],
    relatedQuestions: ['trab-4', 'trab-1'],
    metaDescription: 'Posso me recusar a fazer hora extra? Depende: veja quando é seu direito recusar e quando a empresa pode exigir.'
  },

  // FAMÍLIA (4 novas)
  {
    id: 'fam-6',
    slug: 'pai-nao-paga-pensao-pode-perder-guarda',
    question: 'Pai que não paga pensão pode perder a guarda?',
    answer: `**Não diretamente.** A falta de pagamento de pensão não causa automaticamente a perda da guarda, mas pode influenciar:

**Consequências do não pagamento:**
- Prisão civil (até 3 meses)
- Negativação do nome (SPC/Serasa)
- Penhora de bens e salário
- Suspensão da CNH
- Bloqueio de passaporte

**Quando pode perder a guarda:**
- Abandono afetivo comprovado
- Negligência com o filho
- Maus-tratos ou abuso
- Incapacidade de cuidar adequadamente
- Alienação parental grave

**A pensão e a guarda são questões separadas:**
- Um pai pode não pagar pensão e ter guarda compartilhada
- A cobrança é feita por ação de execução de alimentos
- A modificação de guarda é outra ação específica

**O que fazer:**
Se o pai não paga, entre com execução de alimentos para cobrar, inclusive com prisão.`,
    area: 'familia',
    keywords: ['pai não paga pensão perde guarda', 'não pagou pensão consequência', 'perda guarda pensão', 'inadimplente pensão'],
    relatedQuestions: ['fam-2', 'fam-4'],
    metaDescription: 'Pai que não paga pensão pode perder a guarda dos filhos? Não automaticamente, mas veja as consequências e quando pode acontecer.'
  },
  {
    id: 'fam-7',
    slug: 'mudar-nome-filho-sem-autorizacao-pai',
    question: 'Posso mudar o nome do filho sem autorização do pai?',
    answer: `**Em regra, não.** Mudança de nome de menor requer consentimento de ambos os pais. Mas há exceções:

**Quando precisa de autorização:**
- Qualquer alteração no nome (primeiro nome ou sobrenome)
- Adição de sobrenome do padrasto/madrasta
- Troca de ordem dos nomes

**Quando NÃO precisa (exceções):**
- Pai destituído do poder familiar
- Pai desconhecido (sem registro)
- Autorização judicial substitui o consentimento
- Pai em local incerto e não sabido

**Casos comuns de pedido judicial:**
- Erro evidente no registro
- Nome que expõe a criança a ridículo
- Proteção (violência doméstica)
- Adoção

**Como fazer:**
1. Tente acordo com o outro genitor
2. Se recusar, entre com ação judicial
3. Prove o melhor interesse da criança
4. Aguarde decisão do juiz

**Importante:** O interesse da criança é sempre prioridade nas decisões.`,
    area: 'familia',
    keywords: ['mudar nome filho', 'alteração nome menor', 'trocar sobrenome filho', 'nome filho sem autorização pai'],
    relatedQuestions: ['fam-1', 'fam-5'],
    metaDescription: 'Posso mudar o nome do filho sem autorização do pai? Em regra não, mas veja as exceções e como fazer judicialmente.'
  },
  {
    id: 'fam-8',
    slug: 'uniao-estavel-tempo-direito-heranca',
    question: 'União estável de quanto tempo dá direito a herança?',
    answer: `**Não existe tempo mínimo obrigatório.** A união estável é reconhecida pela convivência pública, contínua e duradoura com objetivo de constituir família.

**Requisitos para união estável:**
- Convivência pública (não escondida)
- Continuidade (não relacionamento esporádico)
- Durabilidade (certo tempo, sem prazo fixo)
- Objetivo de constituir família
- Sem impedimentos (não ser casado, parentesco)

**Direito à herança:**
- Companheiro(a) é herdeiro necessário
- Concorre com filhos do falecido
- Se não houver descendentes/ascendentes, herda tudo
- Direito real de habitação no imóvel da família

**Como provar união estável:**
- Contrato de união estável (recomendado)
- Contas conjuntas
- Dependência em plano de saúde
- Fotos, viagens, redes sociais
- Testemunhas

**Importante:**
Mesmo 1 ano pode caracterizar união estável se preenchidos os requisitos. Não há mágica de 2 ou 5 anos.`,
    area: 'familia',
    keywords: ['união estável herança', 'tempo união estável', 'herança companheiro', 'direito herança união estável'],
    relatedQuestions: ['fam-3', 'fam-4'],
    metaDescription: 'União estável de quanto tempo dá direito a herança? Não há prazo mínimo fixo. Entenda os requisitos e como garantir seus direitos.'
  },
  {
    id: 'fam-9',
    slug: 'como-funciona-inventario-extrajudicial',
    question: 'Como funciona o inventário extrajudicial?',
    answer: `O inventário extrajudicial é feito em **cartório**, de forma mais rápida e simples que o judicial.

**Requisitos obrigatórios:**
- Todos os herdeiros maiores e capazes
- Acordo total sobre a partilha
- Ausência de testamento (ou testamento já cumprido)
- Assistência de advogado
- Certidões negativas de débitos

**Vantagens:**
- Muito mais rápido (dias a semanas)
- Geralmente mais barato
- Menos burocrático
- Partes escolhem quando fazer

**Documentos necessários:**
- Certidão de óbito
- Documentos dos herdeiros
- Documentos dos bens (imóveis, veículos, contas)
- Certidões negativas de tributos
- Procuração para advogado

**Custos:**
- Emolumentos do cartório (tabela estadual)
- ITCMD (imposto sobre herança - varia por estado)
- Honorários advocatícios

**Prazo:**
Recomenda-se iniciar em até 60 dias do óbito para evitar multa no ITCMD, embora não haja prazo obrigatório.`,
    area: 'familia',
    keywords: ['inventário extrajudicial', 'inventário cartório', 'como fazer inventário', 'herança extrajudicial'],
    relatedQuestions: ['fam-3', 'fam-8'],
    metaDescription: 'Como funciona o inventário extrajudicial? Feito em cartório, é mais rápido e barato. Veja requisitos, documentos e custos.'
  },

  // PREVIDENCIÁRIO (4 novas)
  {
    id: 'prev-6',
    slug: 'mei-tem-direito-aposentadoria',
    question: 'Quem paga MEI tem direito a aposentadoria?',
    answer: `**Sim!** O MEI (Microempreendedor Individual) que paga o DAS em dia tem direito a benefícios do INSS.

**Benefícios inclusos no MEI:**
- Aposentadoria por idade
- Auxílio-doença
- Salário-maternidade
- Pensão por morte (para dependentes)
- Auxílio-reclusão (para dependentes)

**Aposentadoria por idade (MEI):**
- Homem: 65 anos + 180 meses de contribuição
- Mulher: 62 anos + 180 meses de contribuição
- Valor: 1 salário mínimo

**Quer aposentar com valor maior?**
O MEI pode complementar a contribuição (mais 15% sobre o salário mínimo) para:
- Aposentadoria por tempo de contribuição
- Valor acima do mínimo
- Usar o tempo para outras aposentadorias

**Importante:**
- O MEI contribui com 5% do salário mínimo
- Essa contribuição não conta para tempo de contribuição
- Mantenha o DAS em dia para garantir qualidade de segurado`,
    area: 'previdenciario',
    keywords: ['MEI aposentadoria', 'microempreendedor aposentadoria', 'MEI INSS benefícios', 'DAS MEI direitos'],
    relatedQuestions: ['prev-1', 'prev-3'],
    metaDescription: 'Quem paga MEI tem direito a aposentadoria? Sim! Entenda quais benefícios o MEI tem direito e como conseguir valor maior.'
  },
  {
    id: 'prev-7',
    slug: 'pode-receber-dois-beneficios-inss',
    question: 'Posso receber dois benefícios do INSS ao mesmo tempo?',
    answer: `**Depende de quais benefícios.** Alguns podem ser acumulados, outros não.

**PODE acumular:**
- Aposentadoria + Pensão por morte (com limitações após Reforma)
- Pensões por morte de diferentes regimes
- Auxílio-acidente + Aposentadoria (se o auxílio é anterior a 1997)
- Aposentadoria + Salário-família

**NÃO pode acumular:**
- Duas aposentadorias do mesmo regime (INSS)
- Auxílio-doença + Aposentadoria
- Duas pensões por morte do INSS
- Seguro-desemprego + Qualquer benefício previdenciário
- BPC/LOAS + Aposentadoria

**Regras de acumulação após Reforma (2019):**
- Recebe 100% do benefício maior
- + percentual do menor (60% a 100%, dependendo do valor)

**Exemplo prático:**
- Aposentadoria de R$ 2.000 (100% = R$ 2.000)
- Pensão de R$ 1.500 (60% = R$ 900)
- Total: R$ 2.900

**Dica:** Consulte um advogado previdenciário para calcular o melhor cenário.`,
    area: 'previdenciario',
    keywords: ['acumular benefícios INSS', 'dois benefícios INSS', 'aposentadoria e pensão', 'acumulação benefícios'],
    relatedQuestions: ['prev-1', 'prev-5'],
    metaDescription: 'Posso receber dois benefícios do INSS ao mesmo tempo? Depende: veja o que pode e o que não pode acumular.'
  },
  {
    id: 'prev-8',
    slug: 'como-comprovar-tempo-trabalho-rural',
    question: 'Como comprovar tempo de trabalho rural?',
    answer: `Comprovar trabalho rural é essencial para aposentadoria rural ou para somar tempo de contribuição.

**Documentos aceitos (início de prova material):**
- Certidão de nascimento com profissão rural dos pais
- Histórico escolar de escola rural
- Certificado de reservista com profissão rural
- Título de eleitor com profissão rural
- Notas fiscais de venda de produção
- Fichas de sindicato rural
- Declaração de Aptidão ao PRONAF (DAP)
- Contratos de arrendamento ou parceria

**Testemunhas:**
- Necessárias para complementar os documentos
- Devem conhecer seu trabalho rural
- Vizinhos, compradores, sindicalistas

**Períodos que contam:**
- Trabalho como segurado especial (sem contribuição)
- Trabalho como empregado rural (com contribuição)
- Trabalho em regime de economia familiar
- A partir dos 12/14 anos (jurisprudência variada)

**Dica importante:**
O INSS costuma negar, mas a Justiça frequentemente reconhece. Guarde tudo que comprove vínculo com área rural.`,
    area: 'previdenciario',
    keywords: ['comprovar trabalho rural', 'prova atividade rural', 'aposentadoria rural documentos', 'tempo rural INSS'],
    relatedQuestions: ['prev-1', 'prev-2'],
    metaDescription: 'Como comprovar tempo de trabalho rural para aposentadoria? Veja os documentos aceitos e como reunir provas.'
  },
  {
    id: 'prev-9',
    slug: 'auxilio-doenca-pode-virar-aposentadoria-invalidez',
    question: 'Auxílio-doença pode virar aposentadoria por invalidez?',
    answer: `**Sim.** Se a incapacidade que gerou o auxílio-doença se tornar permanente, o benefício pode ser convertido.

**Quando ocorre a conversão:**
- Quando a perícia constata incapacidade total e permanente
- Quando tratamentos não surtiram efeito
- Quando a reabilitação profissional é impossível

**Como funciona:**
1. Durante o auxílio-doença, INSS faz perícias periódicas
2. Se a incapacidade for considerada definitiva, converte automaticamente
3. Você também pode pedir a conversão

**Diferenças entre os benefícios:**
| Auxílio-doença | Aposentadoria por invalidez |
|----------------|----------------------------|
| Incapacidade temporária | Incapacidade permanente |
| 91% da média | 100% da média (com regras) |
| Perícias frequentes | Perícia a cada 2 anos |
| Pode trabalhar ao recuperar | Em regra, não pode trabalhar |

**Valor:**
- Auxílio-doença: 91% do salário de benefício
- Aposentadoria por invalidez: 60% + 2% por ano acima de 20 anos

**Importante:**
Se você recebe auxílio-doença há muito tempo e sua doença é permanente, peça a conversão.`,
    area: 'previdenciario',
    keywords: ['auxílio-doença aposentadoria invalidez', 'converter auxílio aposentadoria', 'incapacidade permanente INSS'],
    relatedQuestions: ['prev-2', 'prev-4'],
    metaDescription: 'Auxílio-doença pode virar aposentadoria por invalidez? Sim, quando a incapacidade se torna permanente. Veja como funciona.'
  },

  // CONSUMIDOR (4 novas)
  {
    id: 'cons-6',
    slug: 'loja-pode-negar-troca-sem-nota-fiscal',
    question: 'A loja pode negar troca sem nota fiscal?',
    answer: `**Depende do motivo da troca.** Veja as regras:

**Troca por DEFEITO (direito garantido):**
- Loja NÃO pode exigir nota fiscal como única prova
- Pode usar: extrato de cartão, testemunhas, etiquetas
- Prazo: 30 dias (não duráveis) ou 90 dias (duráveis)

**Troca por ARREPENDIMENTO (7 dias - compras online):**
- Direito garantido para compras fora da loja
- Não precisa justificar
- Reembolso total incluindo frete

**Troca por TAMANHO/COR (cortesia da loja):**
- NÃO é direito do consumidor
- Loja pode exigir nota e recusar sem ela
- Verifique política de troca antes de comprar

**O que fazer sem nota:**
1. Use extrato bancário ou de cartão
2. Busque segunda via com a loja
3. Apresente embalagem com código de barras
4. Use registro no CPF (algumas lojas)

**Lembre-se:**
A nota fiscal é do interesse do consumidor. Sempre peça e guarde!`,
    area: 'consumidor',
    keywords: ['troca sem nota fiscal', 'loja negar troca', 'direito troca produto', 'nota fiscal troca'],
    relatedQuestions: ['cons-1', 'cons-3'],
    metaDescription: 'A loja pode negar troca sem nota fiscal? Depende: para defeito, não pode exigir. Para cortesia (tamanho), pode. Entenda.'
  },
  {
    id: 'cons-7',
    slug: 'cobranca-indevida-devolucao-em-dobro',
    question: 'Cobrança indevida dá direito a devolução em dobro?',
    answer: `**Sim, em regra.** O Código de Defesa do Consumidor prevê a repetição do indébito em dobro.

**Requisitos para devolução em dobro:**
- Cobrança indevida (valor que você não deve)
- Pagamento do valor indevido
- Ausência de engano justificável do fornecedor

**Quando é em dobro:**
- Valor cobrado a mais: devolve o excesso em dobro
- Cobrança por serviço não contratado: devolve tudo em dobro
- Taxa indevida: devolve em dobro

**Quando NÃO é em dobro:**
- Quando há "engano justificável" (erro de sistema, por ex.)
- Quando você não chegou a pagar
- Cobrança judicial (pode ser simples)

**Como cobrar:**
1. Primeiro, tente resolver com a empresa
2. Se recusar, reclame no Procon
3. Se não resolver, ação judicial (JEC até 40 SM)

**Valores atualizados:**
A devolução inclui correção monetária e juros desde o pagamento indevido.

**Dica:** Guarde comprovantes de pagamento e da cobrança indevida.`,
    area: 'consumidor',
    keywords: ['cobrança indevida em dobro', 'devolução em dobro', 'repetição indébito', 'cobrou a mais'],
    relatedQuestions: ['cons-1', 'cons-3'],
    metaDescription: 'Cobrança indevida dá direito a devolução em dobro? Sim, na maioria dos casos. Veja os requisitos e como cobrar.'
  },
  {
    id: 'cons-8',
    slug: 'processar-banco-emprestimo-nao-autorizado',
    question: 'Como processar banco por empréstimo não autorizado?',
    answer: `Empréstimo que você não contratou é **fraude** e você tem direitos:

**Passos imediatos:**
1. Conteste formalmente no banco (por escrito/protocolo)
2. Registre boletim de ocorrência
3. Reclame no Banco Central (Registrato)
4. Reclame no Procon
5. Anote todos os protocolos

**Seus direitos:**
- Cancelamento do empréstimo
- Devolução de valores descontados (em dobro)
- Exclusão de negativações
- Indenização por danos morais

**Provas necessárias:**
- Extratos mostrando descontos
- Contrato (solicite cópia ao banco)
- Protocolos de reclamação
- BO
- Comprovante de salário/aposentadoria

**Valores de indenização:**
- Danos morais: R$ 5.000 a R$ 20.000 (varia)
- Danos materiais: valores descontados em dobro
- Custas e honorários advocatícios

**Prazo:**
5 anos para pedir indenização. Mas quanto antes agir, melhor para suas provas.

**Dica:** Aposentados são vítimas frequentes. Desconfie de empréstimos que você não pediu.`,
    area: 'consumidor',
    keywords: ['empréstimo não autorizado', 'processar banco fraude', 'empréstimo consignado fraude', 'empréstimo que não fiz'],
    relatedQuestions: ['cons-1', 'cons-7'],
    metaDescription: 'Como processar banco por empréstimo não autorizado? Veja os passos, direitos e como conseguir indenização por fraude.'
  },
  {
    id: 'cons-9',
    slug: 'plano-saude-pode-ter-carencia-emergencia',
    question: 'Plano de saúde pode ter carência para emergência?',
    answer: `**Não.** A lei proíbe carência para urgência e emergência. Prazo máximo de 24 horas.

**O que diz a lei (Lei 9.656/98):**
- Emergência: risco imediato de vida ou lesões irreparáveis
- Urgência: complicações na gestação e acidentes pessoais
- Carência máxima: 24 horas após contratação

**O plano deve cobrir:**
- Atendimento de emergência (PS, UTI se necessário)
- Até 12 horas de observação
- Após 12h: pode pedir transferência para hospital público

**Carências normais (não emergência):**
- Consultas e exames simples: até 30 dias
- Internações e cirurgias: até 180 dias
- Parto: até 300 dias
- Doenças preexistentes: até 24 meses

**Se o plano negar emergência:**
1. Documente tudo (prints, protocolos)
2. Vá ao hospital (público se necessário)
3. Reclame na ANS
4. Processe para reembolso + danos morais

**Importante:**
A negativa de atendimento emergencial pode configurar crime e gera direito a indenização expressiva.`,
    area: 'consumidor',
    keywords: ['plano saúde carência emergência', 'urgência plano saúde', 'carência atendimento emergencial', 'plano saúde negar emergência'],
    relatedQuestions: ['cons-2', 'cons-3'],
    metaDescription: 'Plano de saúde pode ter carência para emergência? Não! A carência máxima é 24 horas. Veja seus direitos.'
  },

  // CIVIL (4 novas)
  {
    id: 'civ-6',
    slug: 'imovel-alugado-defeito-quem-paga-conserto',
    question: 'Imóvel alugado com defeito: quem paga o conserto?',
    answer: `**Depende do tipo de reparo.** A Lei do Inquilinato divide as responsabilidades:

**Locador (proprietário) paga:**
- Reparos estruturais (telhado, vigas, fundação)
- Problemas anteriores à locação
- Vícios ocultos (que você não viu ao alugar)
- Desgaste natural (pintura externa, infiltrações antigas)
- Instalações elétricas e hidráulicas antigas

**Locatário (inquilino) paga:**
- Manutenção do dia a dia
- Pequenos reparos (torneiras, tomadas, fechaduras)
- Danos causados por mau uso
- Pintura interna ao entregar o imóvel
- Desentupimento por uso

**Regra prática:**
- Problema estrutural/oculto = proprietário
- Desgaste de uso/manutenção = inquilino

**O que fazer se o proprietário não pagar:**
1. Notifique por escrito com prazo
2. Se não resolver, você pode fazer e descontar do aluguel
3. Guarde orçamentos e notas fiscais
4. Em último caso, rescinda o contrato

**Dica:** Faça laudo de vistoria detalhado na entrada. Fotografe tudo!`,
    area: 'civil',
    keywords: ['conserto imóvel alugado', 'quem paga reparo aluguel', 'defeito casa alugada', 'responsabilidade inquilino proprietário'],
    relatedQuestions: ['civ-1', 'civ-2'],
    metaDescription: 'Imóvel alugado com defeito: quem paga o conserto? Depende do tipo de reparo. Veja as responsabilidades de inquilino e proprietário.'
  },
  {
    id: 'civ-7',
    slug: 'fiador-pode-sair-contrato-aluguel',
    question: 'O fiador pode sair do contrato de aluguel?',
    answer: `**Sim, mas com condições.** O fiador pode se desobrigar em algumas situações:

**Quando o contrato é por prazo determinado:**
- Fiador responde até o fim do prazo
- Se renovar/prorrogar, pode se exonerar
- Deve notificar por escrito

**Quando o contrato é por prazo indeterminado:**
- Pode pedir exoneração a qualquer momento
- Continua responsável por 120 dias após notificação
- Prazo para inquilino arranjar novo fiador

**Como sair da fiança:**
1. Notifique o locador por escrito (com AR ou cartório)
2. Guarde comprovante da notificação
3. Após 120 dias, está livre de novas dívidas

**Você NÃO se livra de:**
- Dívidas já existentes até a notificação
- Período de 120 dias após notificação

**Dicas para futuros fiadores:**
- Limite o prazo da fiança no contrato
- Preveja exoneração em caso de renovação
- Considere seguro-fiança como alternativa

**Importante:** Nunca seja fiador sem ler o contrato inteiro!`,
    area: 'civil',
    keywords: ['fiador sair contrato', 'exoneração fiança', 'fiador aluguel sair', 'deixar de ser fiador'],
    relatedQuestions: ['civ-1', 'civ-6'],
    metaDescription: 'O fiador pode sair do contrato de aluguel? Sim, com notificação e 120 dias de espera. Veja como funciona a exoneração.'
  },
  {
    id: 'civ-8',
    slug: 'como-cobrar-divida-pessoa-nao-paga',
    question: 'Como cobrar dívida de pessoa que não paga?',
    answer: `Existem várias formas de cobrar uma dívida, da mais simples à judicial:

**1. Cobrança amigável:**
- Contato direto (ligação, mensagem, carta)
- Renegociação (parcelamento, desconto)
- Mediação (acordo com terceiro neutro)

**2. Protesto em cartório:**
- Negativação do nome do devedor
- Pressiona o pagamento
- Custo baixo

**3. Cobrança judicial:**
- **Ação monitória:** para dívidas com documentos (contrato, cheque, nota)
- **Ação de cobrança:** para dívidas sem documento formal
- **Execução de título:** se você tem título executivo

**Documentos importantes:**
- Contratos ou acordos
- Comprovantes de transferência (PIX, depósitos)
- Mensagens reconhecendo a dívida
- Notas promissórias ou cheques
- E-mails e WhatsApp

**Prazos:**
- Cheque: 6 meses para executar
- Contrato: 5 anos
- Dívida sem documento: 10 anos

**Valores baixos (até 40 SM):**
Use o Juizado Especial (sem advogado até 20 SM).`,
    area: 'civil',
    keywords: ['cobrar dívida', 'pessoa não paga', 'como cobrar devedor', 'ação cobrança dívida'],
    relatedQuestions: ['civ-1', 'civ-5'],
    metaDescription: 'Como cobrar dívida de pessoa que não paga? Veja opções: cobrança amigável, protesto, ação judicial. Passo a passo completo.'
  },
  {
    id: 'civ-9',
    slug: 'posso-processar-promessa-nao-cumprida',
    question: 'Posso processar por promessa não cumprida?',
    answer: `**Depende.** Nem toda promessa é juridicamente exigível. Veja a diferença:

**Promessas que você PODE cobrar:**
- Contrato assinado (escrito)
- Acordo verbal com testemunhas
- Promessa de compra e venda
- Compromissos em e-mail ou mensagem
- Propostas comerciais aceitas

**Promessas que você NÃO pode cobrar:**
- Promessas de namoro/afetivas (em geral)
- Meras intenções sem compromisso
- Brincadeiras ou exageros óbvios
- Propaganda genérica (sem oferta específica)

**Requisitos para cobrar:**
1. Promessa clara e específica
2. Você confiou e agiu baseado nela
3. Sofreu prejuízo pelo descumprimento
4. Pode provar (documentos, testemunhas)

**Tipos de pedido:**
- Cumprimento forçado da promessa
- Indenização por perdas e danos
- Danos morais (se houver)

**Exemplos cobráveis:**
- "Vou te vender o carro por R$ 50 mil" → descumpriu → danos
- Empresa prometeu promoção em contrato → pode cobrar

**Prazo:** Geralmente 3 a 10 anos, dependendo do tipo de obrigação.`,
    area: 'civil',
    keywords: ['processar promessa', 'promessa não cumprida', 'descumpriu promessa', 'acordo verbal'],
    relatedQuestions: ['civ-1', 'civ-8'],
    metaDescription: 'Posso processar por promessa não cumprida? Depende da promessa. Veja quando você pode cobrar judicialmente.'
  },

  // CONSUMIDOR - Novas FAQs SEO
  {
    id: 'cons-15',
    slug: 'quanto-ganho-indenizacao-voo-cancelado',
    question: 'Quanto posso ganhar de indenização por voo cancelado?',
    answer: `A indenização por voo cancelado varia conforme o tipo de dano e as circunstâncias:

**Danos morais (jurisprudência):**
- Cancelamento com realocação em até 4h: R$ 3.000 a R$ 5.000
- Cancelamento com atraso de 4h a 8h: R$ 5.000 a R$ 8.000
- Cancelamento com atraso acima de 8h: R$ 8.000 a R$ 15.000
- Perda de compromisso importante: até R$ 20.000

**Danos materiais (reembolso):**
- Hospedagem e alimentação não fornecidas
- Transporte alternativo que você pagou
- Perda de diárias de hotel no destino
- Passeios/eventos perdidos

**O que influencia o valor:**
- Tempo de atraso/espera
- Assistência material fornecida
- Motivo do cancelamento
- Prejuízos comprovados

**Seus direitos imediatos (ANAC):**
- 1h de atraso: comunicação (telefone, internet)
- 2h de atraso: alimentação (voucher)
- 4h+ de atraso: hospedagem e transporte
- Opção de reembolso ou reacomodação

**Prazo para processar:** 5 anos.`,
    area: 'consumidor',
    keywords: ['indenização voo cancelado', 'quanto ganho voo cancelado', 'valor indenização aérea', 'danos morais voo'],
    relatedQuestions: ['cons-1', 'cons-3'],
    metaDescription: 'Quanto posso ganhar de indenização por voo cancelado? Valores variam de R$ 3.000 a R$ 20.000. Veja os critérios.'
  },
  {
    id: 'cons-16',
    slug: 'meu-nome-foi-negativado-sem-dever',
    question: 'Meu nome foi negativado mas não devo. O que fazer?',
    answer: `Negativação indevida é ilegal e gera direito a indenização. Veja o que fazer:

**Passos imediatos:**
1. Consulte o motivo no SPC/Serasa (gratuito)
2. Conteste diretamente na empresa que negativou
3. Guarde todos os protocolos
4. Reúna provas de que não deve

**Provas importantes:**
- Comprovantes de pagamento
- Contratos ou falta deles
- Protocolos de reclamação
- Prints da negativação

**Seus direitos:**
- Exclusão imediata do cadastro
- Indenização por danos morais: R$ 5.000 a R$ 20.000
- Devolução em dobro se pagou algo indevido

**Onde reclamar:**
1. Procon
2. Consumidor.gov.br
3. Reclame Aqui (pressão)
4. Juizado Especial (até 40 salários mínimos)

**Prazo para limpar o nome:**
- A empresa tem 5 dias úteis para corrigir após contestação

**Dica:** Se a empresa não resolver em 5 dias, entre com ação judicial imediatamente.`,
    area: 'consumidor',
    keywords: ['nome negativado sem dever', 'negativação indevida', 'SPC Serasa indevido', 'limpar nome'],
    relatedQuestions: ['cons-1', 'cons-7'],
    metaDescription: 'Meu nome foi negativado mas não devo. O que fazer? Veja os passos para limpar seu nome e conseguir indenização.'
  },
  {
    id: 'cons-17',
    slug: 'prazo-direito-arrependimento-7-dias',
    question: 'Como funciona o direito de arrependimento de 7 dias?',
    answer: `O direito de arrependimento permite desistir de compras feitas fora do estabelecimento comercial.

**Quando se aplica (7 dias):**
- Compras pela internet
- Compras por telefone
- Compras por catálogo
- Vendas em domicílio
- Compras por WhatsApp

**Quando NÃO se aplica:**
- Compras em loja física
- Produtos personalizados/sob medida
- Passagens aéreas (regra própria)
- Serviços já iniciados com autorização

**Como exercer o direito:**
1. Comunique a loja em até 7 dias (da entrega)
2. Não precisa justificar
3. Devolva o produto (loja paga o frete)
4. Receba reembolso total

**O que você recebe de volta:**
- Valor integral do produto
- Frete de ida e volta
- Sem taxas ou descontos

**Prazo de reembolso:**
- Imediato para cartão (estorno)
- Até 30 dias para boleto/PIX

**Dica:** Comunique por escrito (e-mail, WhatsApp) e guarde prints.`,
    area: 'consumidor',
    keywords: ['direito arrependimento 7 dias', 'devolução compra online', 'desistir compra internet', 'trocar compra online'],
    relatedQuestions: ['cons-1', 'cons-6'],
    metaDescription: 'Como funciona o direito de arrependimento de 7 dias? Veja quando se aplica e como devolver compras online.'
  },
  {
    id: 'cons-18',
    slug: 'golpe-pix-banco-devolve-dinheiro',
    question: 'Caí no golpe do PIX. O banco devolve o dinheiro?',
    answer: `Depende do tipo de golpe e da responsabilidade do banco. Veja as possibilidades:

**Quando o banco DEVE devolver:**
- Falha de segurança do aplicativo
- Transação não autorizada (celular roubado)
- Sistema fora do ar facilitou golpe
- Conta do golpista no mesmo banco

**Quando é mais difícil:**
- Você passou os dados voluntariamente
- Golpe de engenharia social (se passou por parente)
- Transferência feita de livre vontade

**MED (Mecanismo Especial de Devolução):**
- Funciona para golpes/fraudes
- Prazos: até 80 dias para análise
- Bloqueia valores na conta do golpista
- Solicite imediatamente ao banco

**Passos para tentar reaver:**
1. Faça BO imediatamente
2. Acione o MED no seu banco (em até 80 dias)
3. Reclame no Banco Central
4. Se negar, processe o banco

**Argumentos jurídicos:**
- Responsabilidade objetiva dos bancos
- Falha na segurança
- Dever de monitorar transações atípicas

**Prazo para processar:** 5 anos.`,
    area: 'consumidor',
    keywords: ['golpe PIX', 'banco devolver PIX', 'caí no golpe', 'fraude PIX banco'],
    relatedQuestions: ['cons-8', 'cons-7'],
    metaDescription: 'Caí no golpe do PIX. O banco devolve o dinheiro? Depende. Veja quando o banco é obrigado a devolver e como agir.'
  },
  {
    id: 'cons-19',
    slug: 'bagagem-extraviada-quanto-receber',
    question: 'Bagagem extraviada: quanto posso receber de indenização?',
    answer: `Extravio de bagagem gera direito a indenização. Veja os valores e regras:

**Indenização por danos materiais:**
- Voos nacionais: até 1.131 DES (~R$ 7.000)
- Voos internacionais: até 1.288 DES (~R$ 8.000)
- DES = Direitos Especiais de Saque (moeda do FMI)

**Indenização por danos morais:**
- Extravio temporário: R$ 3.000 a R$ 6.000
- Extravio definitivo: R$ 6.000 a R$ 15.000
- Com perdas importantes (casamento, trabalho): até R$ 20.000

**O que a empresa deve fornecer imediatamente:**
- Assistência material (itens de primeira necessidade)
- Reembolso de compras emergenciais
- Informações sobre localização

**Prazos importantes:**
- 7 dias para achar (voos nacionais)
- 21 dias para achar (voos internacionais)
- Após isso: considerado extravio definitivo

**Como aumentar a indenização:**
- Declare valor da bagagem no check-in
- Guarde notas de compras emergenciais
- Documente todos os itens perdidos

**Prazo para processar:** 2 anos (Convenção de Montreal).`,
    area: 'consumidor',
    keywords: ['bagagem extraviada indenização', 'mala perdida avião', 'extravio bagagem valor', 'companhia aérea perdeu mala'],
    relatedQuestions: ['cons-15', 'cons-1'],
    metaDescription: 'Bagagem extraviada: quanto posso receber de indenização? Veja valores para danos materiais e morais.'
  },
  {
    id: 'cons-20',
    slug: 'overbooking-direitos-passageiro',
    question: 'Sofri overbooking. Quais são meus direitos?',
    answer: `Overbooking (vender mais assentos que o avião comporta) é prática ilegal. Veja seus direitos:

**O que a empresa DEVE oferecer:**
1. Reacomodação no próximo voo (mesmo ou outra empresa)
2. Reembolso integral + transporte até origem
3. Execução por outro meio (carro, ônibus)

**Assistência material obrigatória:**
- 1h: comunicação (internet, telefone)
- 2h: alimentação (voucher)
- 4h+: hospedagem e transporte

**Indenização por danos morais:**
- Overbooking simples: R$ 5.000 a R$ 8.000
- Com perda de compromisso: R$ 8.000 a R$ 15.000
- Tratamento desrespeitoso: até R$ 20.000

**Compensação voluntária (tentativa da empresa):**
- Upgrade, milhas, vouchers
- Você NÃO é obrigado a aceitar
- Aceitar não elimina direito a indenização judicial

**O que fazer:**
1. Não assine termo de acordo sem ler
2. Guarde todos os comprovantes
3. Anote horários e nomes de atendentes
4. Reclame na ANAC e processe

**Prazo:** 5 anos para pedir indenização.`,
    area: 'consumidor',
    keywords: ['overbooking direitos', 'voo lotado sem lugar', 'passageiro preterido', 'indenização overbooking'],
    relatedQuestions: ['cons-15', 'cons-19'],
    metaDescription: 'Sofri overbooking. Quais são meus direitos? Reacomodação, reembolso e indenização de R$ 5 mil a R$ 20 mil.'
  },
  {
    id: 'cons-21',
    slug: 'produto-defeituoso-prazo-troca',
    question: 'Comprei produto defeituoso. Qual o prazo para trocar?',
    answer: `O CDC garante prazos para reclamar de produtos com defeito:

**Prazos de reclamação:**
- Produtos não duráveis (alimentos, cosméticos): 30 dias
- Produtos duráveis (eletrônicos, móveis): 90 dias
- Conta a partir da entrega do produto

**Vício oculto (defeito que aparece depois):**
- Prazo começa quando você descobre o defeito
- Limite: vida útil razoável do produto
- Ex: geladeira pode ter vício oculto por anos

**O que você pode exigir:**
1. **Primeiro:** conserto em até 30 dias
2. **Se não consertar:** escolha entre:
   - Troca por produto novo
   - Devolução do dinheiro (atualizado)
   - Abatimento proporcional do preço

**Quando pode exigir troca imediata:**
- Produto essencial (geladeira, fogão)
- Problema compromete características
- Diminui valor do produto

**Garantia legal x contratual:**
- Legal: 30/90 dias (obrigatória)
- Contratual: adicional da loja/fabricante
- Somam-se os prazos

**Dica:** Reclame por escrito e guarde o protocolo.`,
    area: 'consumidor',
    keywords: ['produto defeituoso troca', 'prazo trocar produto', 'garantia produto defeito', 'devolver produto defeito'],
    relatedQuestions: ['cons-6', 'cons-1'],
    metaDescription: 'Comprei produto defeituoso. Qual o prazo para trocar? 30 dias para não duráveis, 90 dias para duráveis.'
  },
  {
    id: 'cons-22',
    slug: 'plano-saude-prazo-carencia-urgencia',
    question: 'Plano de saúde pode exigir carência para urgência?',
    answer: `**Não.** A carência máxima para urgência e emergência é de 24 horas.

**O que diz a lei (Lei 9.656/98):**
- Emergência: risco imediato de vida
- Urgência: acidentes e complicações na gravidez
- Carência máxima: 24 horas após contratação

**Cobertura obrigatória em urgência:**
- Atendimento de pronto-socorro
- Exames diagnósticos necessários
- Até 12 horas de observação
- UTI se necessário

**Carências normais (não urgência):**
- Consultas e exames: até 30 dias
- Internações: até 180 dias
- Partos: até 300 dias
- Doenças preexistentes: até 24 meses

**Se o plano negar emergência:**
1. Vá ao hospital (público se precisar)
2. Documente a negativa
3. Reclame na ANS
4. Processe: reembolso + danos morais (R$ 10.000 a R$ 30.000)

**Importante:**
Negar atendimento de emergência pode configurar crime e gera indenização alta.`,
    area: 'consumidor',
    keywords: ['plano saúde carência urgência', 'emergência plano saúde', 'negar atendimento emergência', 'carência 24 horas'],
    relatedQuestions: ['cons-9', 'cons-1'],
    metaDescription: 'Plano de saúde pode exigir carência para urgência? Não! A carência máxima é 24 horas. Veja seus direitos.'
  },
  {
    id: 'cons-23',
    slug: 'cobranca-divida-prescrita-prazo',
    question: 'Podem cobrar dívida prescrita? Qual o prazo?',
    answer: `Tecnicamente podem cobrar, mas você não é obrigado a pagar. Veja os detalhes:

**Prazos de prescrição de dívidas:**
- Cartão de crédito: 5 anos
- Cheque: 6 meses (execução) ou 5 anos (cobrança)
- Boleto bancário: 5 anos
- Financiamento: 5 anos
- Dívida com contrato: 5 anos

**O que acontece após a prescrição:**
- A dívida não deixa de existir
- Você pode pagar se quiser
- Credor pode cobrar amigavelmente
- Mas NÃO pode processar para executar

**Negativação de dívida prescrita:**
- SPC/Serasa: máximo 5 anos de registro
- Após isso: não podem mais negativar
- Se negativarem: indenização!

**Cuidado com "armadilhas":**
- Pagar qualquer valor reinicia o prazo
- Reconhecer a dívida por escrito reinicia
- Parcelar reinicia a contagem

**O que fazer:**
- Consulte se a dívida está prescrita
- Não pague sem analisar
- Se cobrarem judicialmente, alegue prescrição

**Dica:** Dívida prescrita negativada = danos morais.`,
    area: 'consumidor',
    keywords: ['dívida prescrita', 'prazo prescrição dívida', 'cobrar dívida antiga', 'dívida caduca'],
    relatedQuestions: ['cons-7', 'cons-16'],
    metaDescription: 'Podem cobrar dívida prescrita? Qual o prazo? Entenda quando a dívida prescreve e seus direitos.'
  },
  {
    id: 'cons-24',
    slug: 'cartao-clonado-quem-paga',
    question: 'Meu cartão foi clonado. Quem paga as compras?',
    answer: `Em regra, o banco/operadora paga. A responsabilidade é objetiva.

**Quando o banco deve pagar:**
- Compras que você não fez
- Transações em locais que você nunca foi
- Compras online sem sua autorização
- Uso após bloqueio do cartão

**O que fazer imediatamente:**
1. Bloqueie o cartão no app
2. Conteste as compras (ligue e anote protocolo)
3. Faça boletim de ocorrência
4. Solicite estorno por escrito

**Prazo para contestar:**
- Quanto antes, melhor
- Cartão de crédito: até o vencimento da fatura
- Cartão de débito: imediatamente

**Se o banco negar o estorno:**
- Reclame no Procon
- Reclame no Banco Central
- Processe no Juizado Especial

**Danos morais:**
- Se cobrarem mesmo após contestação: R$ 3.000 a R$ 8.000
- Se negativarem seu nome: R$ 5.000 a R$ 15.000

**Prevenção:**
- Use cartão virtual para compras online
- Ative notificações de compras
- Não empreste o cartão`,
    area: 'consumidor',
    keywords: ['cartão clonado', 'fraude cartão de crédito', 'compra não autorizada', 'banco clonagem cartão'],
    relatedQuestions: ['cons-18', 'cons-8'],
    metaDescription: 'Meu cartão foi clonado. Quem paga as compras? O banco! Veja como contestar e pedir estorno.'
  },
  {
    id: 'cons-25',
    slug: 'atraso-entrega-produto-comprado-online',
    question: 'Produto comprado online atrasou. Posso cancelar?',
    answer: `**Sim.** O atraso na entrega é descumprimento contratual e você pode cancelar.

**Seus direitos em caso de atraso:**
1. Exigir a entrega imediata
2. Aceitar produto equivalente
3. Cancelar e receber reembolso total
4. Pedir indenização por danos

**Como cancelar:**
- Comunique a loja por escrito (e-mail, chat)
- Exija reembolso integral
- Prazo de reembolso: imediato (cartão) ou até 30 dias

**Quando cabe indenização:**
- Produto era presente (frustração)
- Você perdeu evento importante
- Teve prejuízos comprovados
- Valores: R$ 1.000 a R$ 5.000

**O que fazer:**
1. Print da data de entrega prometida
2. Acompanhe o rastreamento
3. Reclame por escrito após o prazo
4. Cancele se não entregar em 24-48h

**Entregas atrasadas recorrentes:**
- Procon
- Consumidor.gov.br
- Juizado Especial (valores maiores)

**Dica:** Não aceite "prazo estendido" se precisava do produto.`,
    area: 'consumidor',
    keywords: ['produto atrasou entrega', 'cancelar compra atraso', 'loja não entregou', 'atraso entrega online'],
    relatedQuestions: ['cons-17', 'cons-21'],
    metaDescription: 'Produto comprado online atrasou. Posso cancelar? Sim! Veja como exigir reembolso ou indenização.'
  },
  {
    id: 'cons-26',
    slug: 'servico-nao-contratado-cobrado-fatura',
    question: 'Estão cobrando serviço que não contratei na fatura',
    answer: `Cobrança de serviço não contratado é prática abusiva. Veja como agir:

**Passos imediatos:**
1. Conteste o valor na operadora (anote protocolo)
2. Exija cancelamento do serviço
3. Peça estorno dos valores cobrados
4. Documente tudo por escrito

**Seus direitos:**
- Cancelamento imediato do serviço
- Devolução em dobro dos valores pagos
- Danos morais se houve transtorno

**Valores de indenização:**
- Devolução em dobro: obrigatória
- Danos morais: R$ 2.000 a R$ 5.000
- Negativação indevida: R$ 5.000 a R$ 15.000

**Onde reclamar:**
1. Anatel (telefonia)
2. Procon
3. Consumidor.gov.br
4. Juizado Especial

**Exemplos comuns:**
- Seguro de cartão não contratado
- Pacotes de dados extras
- TV por assinatura com canais extras
- Serviços de localização/segurança

**Prazo de resposta:**
- Operadora: 5 dias úteis
- Se não resolver: ação judicial

**Dica:** Sempre leia faturas com atenção e conteste rápido.`,
    area: 'consumidor',
    keywords: ['cobrança serviço não contratado', 'fatura cobrança indevida', 'cancelar serviço não pedido', 'venda casada'],
    relatedQuestions: ['cons-7', 'cons-1'],
    metaDescription: 'Estão cobrando serviço que não contratei na fatura. O que fazer? Veja como cancelar e pedir devolução em dobro.'
  },
  {
    id: 'cons-27',
    slug: 'recall-carro-nao-fiz-posso-processar',
    question: 'Não fiz o recall do carro e tive problema. Posso processar?',
    answer: `**Sim, em muitos casos.** A responsabilidade da montadora não desaparece por falta de recall.

**Quando a montadora responde:**
- Defeito de fabricação (mesmo sem recall feito)
- Recall não foi comunicado adequadamente
- Problema em peça não coberta pelo recall
- Vícios ocultos de projeto

**Quando você pode ter dificuldade:**
- Recall foi amplamente divulgado e você ignorou
- Problema específico da peça do recall
- Manutenção irregular do veículo

**Jurisprudência favorável:**
- Comunicação por carta nem sempre é suficiente
- Montadora deve provar que você sabia do recall
- Responsabilidade solidária (concessionária + montadora)

**O que você pode pedir:**
- Conserto gratuito
- Indenização por lucros cessantes (táxi, uber)
- Danos morais se houve acidente/risco
- Danos materiais comprovados

**Provas importantes:**
- Documentação do veículo
- Laudos técnicos
- Fotos e vídeos do problema
- Comprovante de revisões

**Prazo:** 5 anos para acidente ou vício oculto.`,
    area: 'consumidor',
    keywords: ['recall carro', 'não fiz recall', 'processar montadora', 'defeito fabricação carro'],
    relatedQuestions: ['cons-21', 'cons-1'],
    metaDescription: 'Não fiz o recall do carro e tive problema. Posso processar? Sim, a montadora pode responder. Veja quando.'
  },
  {
    id: 'cons-28',
    slug: 'voo-atrasado-mais-4-horas-direitos',
    question: 'Voo atrasou mais de 4 horas. Quais meus direitos?',
    answer: `Atraso de voo acima de 4 horas gera direitos importantes. Veja:

**Assistência material obrigatória:**
- A partir de 1h: comunicação (internet, telefone)
- A partir de 2h: alimentação (voucher)
- A partir de 4h: hospedagem + transporte

**Opções após 4h de atraso:**
1. Reacomodação em outro voo (mesma ou outra empresa)
2. Reembolso integral (se não quiser mais viajar)
3. Remarcar para data de sua preferência

**Indenização por danos morais:**
- Atraso de 4h a 8h: R$ 3.000 a R$ 6.000
- Atraso acima de 8h: R$ 6.000 a R$ 12.000
- Perda de compromisso: até R$ 15.000
- Pernoite no aeroporto: valor maior

**O que fazer:**
1. Procure o balcão da empresa
2. Exija a assistência material
3. Guarde cartões de embarque
4. Fotografe painéis de horário
5. Anote protocolos e nomes

**Importante:**
- Motivo meteorológico NÃO exime de assistência
- Motivo de "manutenção" é responsabilidade da empresa
- Problemas operacionais: indenização devida

**Prazo para processar:** 5 anos.`,
    area: 'consumidor',
    keywords: ['voo atrasado 4 horas', 'atraso voo direitos', 'indenização atraso voo', 'ANAC atraso voo'],
    relatedQuestions: ['cons-15', 'cons-20'],
    metaDescription: 'Voo atrasou mais de 4 horas. Quais meus direitos? Hospedagem, alimentação e indenização. Veja valores.'
  },
  {
    id: 'cons-29',
    slug: 'nome-sujo-quanto-tempo-limpar',
    question: 'Quanto tempo leva para limpar meu nome após pagar?',
    answer: `Após o pagamento, o prazo máximo para limpar o nome é de **5 dias úteis**.

**Prazos legais:**
- Credor tem 5 dias úteis para comunicar quitação
- SPC/Serasa tem 24 horas após comunicação
- Total máximo: cerca de 7 dias úteis

**Se não limpar no prazo:**
- Você tem direito a indenização
- Danos morais: R$ 3.000 a R$ 8.000
- Pode pedir no Juizado Especial

**O que fazer após pagar:**
1. Peça comprovante de quitação
2. Aguarde 5 dias úteis
3. Consulte SPC/Serasa (gratuito)
4. Se continuar sujo, reclame por escrito
5. Não resolvendo, processe

**Como consultar:**
- SPC: consumidorpositivo.com.br
- Serasa: serasa.com.br (grátis com cadastro)
- Boa Vista: consumidorpositivo.com.br

**Dicas importantes:**
- Pague sempre com comprovante
- Guarde o comprovante por 5 anos
- Verifique todas as empresas de proteção ao crédito

**Importante:** O prazo de 5 anos de negativação conta da data da dívida, não do pagamento.`,
    area: 'consumidor',
    keywords: ['limpar nome após pagar', 'prazo limpar nome', 'tirar nome SPC Serasa', 'quitação dívida nome sujo'],
    relatedQuestions: ['cons-16', 'cons-23'],
    metaDescription: 'Quanto tempo leva para limpar meu nome após pagar? Até 5 dias úteis. Veja o que fazer se não limpar.'
  },

  // ============================================
  // FAQS ESPECÍFICAS DA BAHIA (40 perguntas)
  // ============================================

  // SALVADOR (12 FAQs)
  {
    id: 'bahia-1',
    slug: 'como-processar-empresa-salvador',
    question: 'Como processar uma empresa em Salvador?',
    answer: `Para processar uma empresa em Salvador, você pode utilizar o **Juizado Especial Cível** para causas de até 40 salários mínimos.

**Passo a passo:**
1. Reúna documentos (notas fiscais, contratos, conversas)
2. Tente resolver com a empresa primeiro
3. Registre reclamação no PROCON-BA se necessário
4. Procure o Juizado Especial ou advogado

**Onde processar em Salvador:**
- **Juizado Especial Cível** - Fórum Ruy Barbosa (Centro)
- **Juizado do Consumidor** - Av. ACM, Iguatemi
- **PROCON-BA** - Av. Centenário, 2992, Chame-Chame

**Custos:**
- Juizado Especial: gratuito até 20 salários mínimos
- Justiça Comum: custas processuais (pode pedir gratuidade)

**Prazo para processar:**
- Consumidor: 5 anos
- Trabalhista: 2 anos após saída

**Dica:** Causas até 20 salários mínimos dispensam advogado no Juizado Especial.`,
    area: 'consumidor',
    keywords: ['processar empresa salvador', 'juizado especial salvador', 'ação judicial salvador bahia', 'fórum salvador'],
    relatedQuestions: ['bahia-2', 'bahia-3', 'bahia-5'],
    metaDescription: 'Saiba como processar uma empresa em Salvador. Juizado Especial, PROCON-BA, documentos necessários e custos. Guia completo.'
  },
  {
    id: 'bahia-2',
    slug: 'procon-salvador-endereco-telefone',
    question: 'Qual o endereço e telefone do PROCON Salvador?',
    answer: `O **PROCON-BA** (Programa de Proteção e Defesa do Consumidor da Bahia) atende consumidores de Salvador e todo o estado.

**Endereço do PROCON-BA:**
- **Av. Centenário, 2992** - Chame-Chame
- Salvador - BA, CEP 40155-150

**Contatos:**
- **Telefone:** 0800 071 2552 (ligação gratuita)
- **WhatsApp:** (71) 3116-8587
- **E-mail:** procon@sjdhds.ba.gov.br
- **Site:** www.procon.ba.gov.br

**Horário de funcionamento:**
- Segunda a sexta: 8h às 17h
- Atendimento presencial: mediante agendamento

**Documentos para atendimento:**
1. RG e CPF
2. Comprovante de residência
3. Documentos do caso (notas, contratos, prints)
4. Protocolo de reclamação à empresa

**Como agendar:**
- Pelo site: www.procon.ba.gov.br
- Pelo 0800 071 2552

**Importante:** Antes de ir ao PROCON, tente resolver diretamente com a empresa e guarde todos os protocolos.`,
    area: 'consumidor',
    keywords: ['procon salvador', 'procon bahia telefone', 'procon-ba endereço', 'reclamar procon salvador'],
    relatedQuestions: ['bahia-1', 'bahia-3', 'cons-1'],
    metaDescription: 'Endereço e telefone do PROCON Salvador (PROCON-BA): Av. Centenário, 2992. Telefone 0800 071 2552. Horários e como agendar.'
  },
  {
    id: 'bahia-3',
    slug: 'juizado-especial-salvador-onde-fica',
    question: 'Onde fica o Juizado Especial de Salvador?',
    answer: `Salvador possui diversos **Juizados Especiais** distribuídos pela cidade para facilitar o acesso à justiça.

**Principais Juizados Especiais de Salvador:**

**1. Fórum Ruy Barbosa (Centro)**
- Praça D. Pedro II, s/n - Campo Grande
- Juizados Especiais Cíveis

**2. Juizado Especial do Consumidor**
- Av. ACM, Shopping Iguatemi
- Especializado em relações de consumo

**3. Fórum Regional de Cajazeiras**
- Rua Tomás Gonzaga, s/n - Cajazeiras X
- Atende região de Cajazeiras

**4. Fórum Regional do Subúrbio**
- Rua Cônego Pereira, s/n - Plataforma
- Atende subúrbio ferroviário

**Como entrar com ação:**
1. Compareça ao Juizado com documentos
2. Preencha formulário de reclamação
3. Audiência de conciliação em 15-30 dias
4. Se não houver acordo, segue para sentença

**Documentos necessários:**
- RG, CPF e comprovante de residência
- Provas do caso (notas, fotos, prints)
- Dados do réu (CNPJ/CPF, endereço)

**Custos:** Gratuito até 20 salários mínimos.`,
    area: 'geral',
    keywords: ['juizado especial salvador', 'onde fica juizado salvador', 'fórum salvador', 'juizado consumidor salvador'],
    relatedQuestions: ['bahia-1', 'bahia-2', 'bahia-5'],
    metaDescription: 'Endereços dos Juizados Especiais de Salvador: Fórum Ruy Barbosa, Juizado do Consumidor no Iguatemi, regionais de Cajazeiras e Subúrbio.'
  },
  {
    id: 'bahia-4',
    slug: 'vara-trabalho-salvador-endereco',
    question: 'Onde fica a Vara do Trabalho de Salvador?',
    answer: `O **TRT da 5ª Região** (Tribunal Regional do Trabalho da Bahia) tem sede em Salvador e diversas Varas do Trabalho na cidade.

**Sede do TRT5 (Tribunal):**
- **Rua Bela Vista do Cabral, 121** - Nazaré
- Salvador - BA, CEP 40055-010
- Tel: (71) 3319-6000
- Site: www.trt5.jus.br

**Fórum Ministro Milton Moreira Lima:**
- **Rua Miguel Calmon, 285** - Comércio
- Salvador - BA
- Várias Varas do Trabalho

**Como ajuizar reclamação trabalhista:**
1. Contrate advogado ou procure o Sindicato
2. Reúna documentos (CTPS, holerites, rescisão)
3. Ajuize a ação no sistema PJe
4. Audiência inicial em 30-60 dias

**Prazos importantes:**
- 2 anos após demissão para ajuizar
- Pode cobrar últimos 5 anos de direitos

**Atendimento da Justiça Gratuita:**
- Para quem comprova renda até 2 salários mínimos
- Defensoria Pública: (71) 3103-6400

**Dica:** Muitos escritórios trabalham com honorários apenas em caso de vitória.`,
    area: 'trabalhista',
    keywords: ['vara trabalho salvador', 'trt5 endereço', 'justiça trabalho bahia', 'processar empresa trabalhista salvador'],
    relatedQuestions: ['trab-1', 'trab-2', 'bahia-8'],
    metaDescription: 'Endereço da Vara do Trabalho de Salvador: TRT5 na Rua Bela Vista do Cabral, 121 - Nazaré. Saiba como ajuizar ação trabalhista.'
  },
  {
    id: 'bahia-5',
    slug: 'tjba-demora-processo-consumidor',
    question: 'Quanto tempo demora um processo de consumidor no TJBA?',
    answer: `O tempo de duração de um processo de consumidor no **TJBA (Tribunal de Justiça da Bahia)** varia conforme o tipo de procedimento.

**Prazos médios no TJBA:**

**Juizado Especial Cível:**
- Audiência de conciliação: 15-45 dias
- Sentença: 3-6 meses
- Recurso (se houver): mais 6-12 meses
- **Total:** 6-12 meses

**Justiça Comum:**
- Citação do réu: 1-3 meses
- Audiência: 6-12 meses
- Sentença: 12-24 meses
- **Total:** 1-2 anos (pode chegar a 3-4 com recursos)

**Fatores que aceleram:**
- Escolher Juizado Especial
- Documentação completa
- Acordo na audiência
- Acompanhamento constante

**Fatores que atrasam:**
- Empresa não encontrada
- Necessidade de perícia
- Recursos protelatórios

**Consulta processual:**
- Site: www.tjba.jus.br
- Consulta por número ou nome das partes

**Dica:** O Juizado Especial é muito mais rápido. Para causas até 40 salários mínimos, sempre prefira o Juizado.`,
    area: 'consumidor',
    keywords: ['demora processo tjba', 'tempo processo consumidor bahia', 'prazo juizado especial salvador', 'consultar processo tjba'],
    relatedQuestions: ['bahia-1', 'bahia-3', 'cons-1'],
    metaDescription: 'Quanto tempo demora processo de consumidor no TJBA? Juizado Especial: 6-12 meses. Justiça Comum: 1-2 anos. Veja como acelerar.'
  },
  {
    id: 'bahia-6',
    slug: 'inss-salvador-agendar-pericia',
    question: 'Como agendar perícia do INSS em Salvador?',
    answer: `Para agendar perícia médica do INSS em Salvador, você pode usar o **Meu INSS** (app ou site) ou ligar no **135**.

**Como agendar pelo Meu INSS:**
1. Baixe o app "Meu INSS" ou acesse meu.inss.gov.br
2. Faça login com Gov.br
3. Clique em "Agendar Perícia"
4. Escolha data, horário e agência
5. Anote o número do protocolo

**Agências do INSS em Salvador:**
- **Agência Centro** - Av. Estados Unidos, 397
- **Agência Pituba** - Av. ACM, 640
- **Agência Cajazeiras** - Rua Tomás Gonzaga, s/n
- **Agência Periperi** - Rua Thomaz Gonzaga, s/n

**Documentos para perícia:**
- RG, CPF
- Carteira de trabalho (se tiver)
- Atestados e laudos médicos
- Exames recentes
- Receitas de medicamentos

**Telefone:** 135 (ligação gratuita)
- Horário: 7h às 22h (segunda a sábado)

**Dicas importantes:**
- Chegue 30 minutos antes
- Leve todos os laudos e exames originais
- Descreva suas limitações com clareza
- Se negado, você pode recorrer ou entrar com ação judicial`,
    area: 'previdenciario',
    keywords: ['agendar perícia inss salvador', 'inss salvador agência', 'meu inss bahia', 'perícia médica salvador'],
    relatedQuestions: ['prev-1', 'prev-3', 'bahia-20'],
    metaDescription: 'Como agendar perícia do INSS em Salvador: pelo Meu INSS ou 135. Agências em Salvador, documentos necessários e dicas para a perícia.'
  },
  {
    id: 'bahia-7',
    slug: 'defensoria-publica-salvador',
    question: 'Como conseguir advogado gratuito em Salvador?',
    answer: `A **Defensoria Pública da Bahia** oferece assistência jurídica gratuita para quem não pode pagar advogado em Salvador.

**Quem tem direito:**
- Renda familiar até 3 salários mínimos
- Pessoas em situação de vulnerabilidade
- Idosos, mulheres vítimas de violência

**Como conseguir atendimento:**

**1. Defensoria Pública da Bahia:**
- **Endereço:** Av. Luiz Viana Filho, 2490 - CAB
- **Telefone:** (71) 3103-6400
- **Site:** www.defensoria.ba.def.br

**2. Núcleos de Prática Jurídica (faculdades):**
- UFBA, UNEB, UNIFACS e outras
- Atendimento gratuito supervisionado

**3. OAB-BA (Comissão de Assistência):**
- Pode indicar advogados dativos
- Tel: (71) 3329-9000

**Documentos para atendimento:**
- RG e CPF
- Comprovante de residência
- Comprovante de renda
- Documentos do caso

**Áreas atendidas:**
- Família (divórcio, pensão, guarda)
- Trabalhista (via sindicatos)
- Consumidor
- Criminal
- Previdenciário

**Importante:** O atendimento é por ordem de chegada ou agendamento. Chegue cedo.`,
    area: 'geral',
    keywords: ['advogado gratuito salvador', 'defensoria pública bahia', 'assistência jurídica gratuita salvador', 'advogado de graça bahia'],
    relatedQuestions: ['bahia-1', 'bahia-4', 'geral-5'],
    metaDescription: 'Como conseguir advogado gratuito em Salvador: Defensoria Pública da Bahia no CAB, tel (71) 3103-6400. Requisitos e documentos.'
  },
  {
    id: 'bahia-8',
    slug: 'divorcio-cartorio-salvador',
    question: 'Quanto custa um divórcio em cartório em Salvador?',
    answer: `O **divórcio extrajudicial** (em cartório) é a forma mais rápida e econômica quando o casal concorda com tudo e não tem filhos menores.

**Requisitos para divórcio em cartório:**
- Consenso entre as partes
- Sem filhos menores ou incapazes
- Acordo sobre bens e pensão
- Presença de advogado (obrigatório)

**Custos em Salvador (2024):**
- **Escritura pública:** R$ 300 a R$ 600
- **Honorários advocatícios:** R$ 1.500 a R$ 4.000
- **Total estimado:** R$ 2.000 a R$ 5.000

**Cartórios que fazem divórcio:**
- Qualquer Tabelionato de Notas de Salvador
- Exemplos: 1º ao 10º Tabelionato de Notas

**Documentos necessários:**
- Certidão de casamento atualizada (90 dias)
- RG e CPF dos cônjuges
- Pacto antenupcial (se houver)
- Escritura de bens (se houver partilha)

**Prazo:** O divórcio sai no mesmo dia ou em até 3 dias úteis.

**Alternativa gratuita:**
- Defensoria Pública (para quem comprova baixa renda)
- Juizado de Família (se tiver filhos)

**Importante:** Se houver filhos menores, o divórcio deve ser feito na Justiça.`,
    area: 'familia',
    keywords: ['divórcio cartório salvador', 'quanto custa divórcio bahia', 'divórcio extrajudicial salvador', 'separação consensual salvador'],
    relatedQuestions: ['fam-1', 'fam-3', 'bahia-7'],
    metaDescription: 'Quanto custa divórcio em cartório em Salvador? De R$ 2.000 a R$ 5.000 (escritura + advogado). Requisitos e documentos necessários.'
  },
  {
    id: 'bahia-9',
    slug: 'voo-cancelado-aeroporto-salvador',
    question: 'Voo cancelado no Aeroporto de Salvador: o que fazer?',
    answer: `Se seu voo foi cancelado no **Aeroporto de Salvador (SSA)**, você tem direitos garantidos pela ANAC e pelo Código de Defesa do Consumidor.

**Seus direitos imediatos:**
- **Informação:** Comunicação clara sobre o motivo
- **Reacomodação:** Em outro voo (da mesma ou outra empresa)
- **Reembolso integral:** Se preferir não viajar
- **Assistência material:** Conforme tempo de espera

**Assistência material obrigatória:**
- A partir de 1h: comunicação (internet, telefone)
- A partir de 2h: alimentação
- A partir de 4h: hospedagem e transporte

**O que fazer no aeroporto:**
1. Procure o balcão da empresa
2. Exija assistência por escrito
3. Fotografe os painéis de voo
4. Guarde cartões de embarque
5. Anote nomes e protocolos

**Indenização por danos morais:**
- Cancelamento: R$ 3.000 a R$ 10.000
- Com perda de compromisso: R$ 5.000 a R$ 15.000

**Como processar:**
- PROCON-BA: 0800 071 2552
- Juizado Especial do Aeroporto (se disponível)
- Justiça: até 5 anos para ajuizar

**Contatos úteis:**
- **Infraero SSA:** (71) 3204-1010
- **ANAC:** 163`,
    area: 'consumidor',
    keywords: ['voo cancelado salvador', 'aeroporto salvador cancelamento', 'direitos voo cancelado ssa', 'indenização voo bahia'],
    relatedQuestions: ['cons-15', 'cons-28', 'bahia-1'],
    metaDescription: 'Voo cancelado no Aeroporto de Salvador? Saiba seus direitos: reacomodação, reembolso, assistência e indenização de R$ 3.000 a R$ 10.000.'
  },
  {
    id: 'bahia-10',
    slug: 'plano-saude-negou-cirurgia-salvador',
    question: 'Plano de saúde negou cirurgia em Salvador. O que fazer?',
    answer: `Se o plano de saúde negou sua cirurgia em Salvador, você pode conseguir uma **liminar judicial** em poucos dias para obrigar a cobertura.

**Passos para resolver:**

**1. Exija a negativa por escrito:**
- A operadora é obrigada a fornecer
- Deve conter o motivo da negativa
- Prazo: 24 horas

**2. Reclame na ANS:**
- Site: www.ans.gov.br
- Telefone: 0800 701 9656
- Prazo de resposta: 5 dias úteis

**3. PROCON-BA:**
- 0800 071 2552
- Pode multar a operadora

**4. Ação judicial com pedido de liminar:**
- Juizado Especial ou Justiça Comum
- Liminar sai em 24-72 horas em casos urgentes

**Negativas mais comuns (e ilegais):**
- "Procedimento não coberto" (se está no rol ANS)
- "Carência não cumprida" (urgência dispensa)
- "Hospital não credenciado" (em emergência)

**Indenização:**
- Danos morais: R$ 5.000 a R$ 30.000
- Danos materiais: reembolso total

**Hospitais referência em Salvador:**
- Hospital das Clínicas (UFBA)
- Hospital Geral Roberto Santos
- Hospital Santo Antônio (Obras Sociais)

**Importante:** Cirurgias de urgência devem ser cobertas mesmo em carência.`,
    area: 'consumidor',
    keywords: ['plano saúde negou cirurgia salvador', 'liminar plano saúde bahia', 'ação contra plano saúde salvador', 'ans bahia'],
    relatedQuestions: ['cons-12', 'cons-13', 'bahia-2'],
    metaDescription: 'Plano de saúde negou cirurgia em Salvador? Saiba como conseguir liminar em 24-72h. ANS, PROCON-BA e ação judicial.'
  },
  {
    id: 'bahia-11',
    slug: 'golpe-pix-salvador-como-recuperar',
    question: 'Caí em golpe do Pix em Salvador. Como recuperar o dinheiro?',
    answer: `Se você foi vítima de **golpe do Pix** em Salvador, é possível recuperar o dinheiro através do MED (Mecanismo Especial de Devolução) ou ação judicial.

**Passos imediatos:**

**1. Bloqueio de emergência (até 30 min):**
- Ligue para seu banco imediatamente
- Peça o bloqueio via MED
- Anote protocolo

**2. Registre Boletim de Ocorrência:**
- Delegacia Online: www.delegaciavirtual.ba.gov.br
- Presencial: qualquer delegacia de Salvador
- Especializadas: DRCC (Crimes Cibernéticos)

**3. Reclame no banco:**
- Canal de atendimento do banco
- Cite o MED (prazo de 24h para bloqueio)
- Exija protocolo

**4. PROCON-BA:**
- 0800 071 2552
- Responsabilidade do banco pode ser reconhecida

**5. Ação judicial:**
- Banco pode ser responsabilizado
- Indenização: valor + danos morais

**Mecanismo Especial de Devolução (MED):**
- Prazo para solicitar: 80 dias
- Banco analisa em até 7 dias
- Devolução se houver saldo na conta do golpista

**Golpes mais comuns:**
- Falso funcionário de banco
- QR Code adulterado
- Perfil falso no WhatsApp
- "Pix errado" (estorno)

**Delegacia de Crimes Cibernéticos (Salvador):**
- DRCC: Av. ACM, próximo ao Iguatemi
- Tel: (71) 3117-6109`,
    area: 'consumidor',
    keywords: ['golpe pix salvador', 'recuperar dinheiro pix bahia', 'fraude pix salvador', 'delegacia crimes cibernéticos bahia'],
    relatedQuestions: ['cons-24', 'cons-25', 'bahia-2'],
    metaDescription: 'Caiu em golpe do Pix em Salvador? Saiba como recuperar: MED no banco, BO na Delegacia Virtual BA e ação judicial. Passo a passo completo.'
  },
  {
    id: 'bahia-12',
    slug: 'nome-negativado-indevidamente-salvador',
    question: 'Nome negativado indevidamente em Salvador. Quanto posso ganhar?',
    answer: `A negativação indevida do nome gera direito a **indenização por danos morais**. No TJBA, os valores variam conforme o caso.

**Valores de indenização no TJBA (2024):**
- Casos simples: R$ 3.000 a R$ 5.000
- Casos intermediários: R$ 5.000 a R$ 10.000
- Casos graves: R$ 10.000 a R$ 15.000
- Casos com reincidência: R$ 15.000 a R$ 25.000

**Fatores que aumentam a indenização:**
- Negativação por dívida já paga
- Múltiplas negativações indevidas
- Tempo longo de negativação
- Constrangimento comprovado (perda de crédito, emprego)
- Empresa reincidente

**Como processar em Salvador:**

**1. Reúna provas:**
- Print da negativação (Serasa/SPC)
- Comprovante de pagamento (se já pagou)
- Contrato que prove inexistência da dívida

**2. Onde processar:**
- Juizado Especial Cível (até 40 salários)
- Justiça Comum (acima de 40 salários)

**3. Prazos:**
- Prescrição: 3 anos para ajuizar
- Empresa tem 5 dias para baixar após quitação

**PROCON-BA pode ajudar:**
- Fazer notificação à empresa
- Aplicar multa administrativa
- Tel: 0800 071 2552

**Dica:** Não aceite acordos muito baixos. Consulte um advogado para avaliar seu caso.`,
    area: 'consumidor',
    keywords: ['nome negativado salvador', 'indenização serasa salvador', 'negativação indevida bahia', 'danos morais spc bahia'],
    relatedQuestions: ['cons-16', 'cons-23', 'bahia-2'],
    metaDescription: 'Nome negativado indevidamente em Salvador? Indenização de R$ 5.000 a R$ 15.000 no TJBA. Saiba como processar e quanto ganhar.'
  },

  // FEIRA DE SANTANA (6 FAQs)
  {
    id: 'bahia-13',
    slug: 'procon-feira-de-santana-endereco',
    question: 'Onde fica o PROCON de Feira de Santana?',
    answer: `O **PROCON de Feira de Santana** atende consumidores da cidade e região.

**Endereço do PROCON Feira de Santana:**
- **Av. Senhor dos Passos, 1225** - Centro
- Feira de Santana - BA, CEP 44002-024

**Contatos:**
- **Telefone:** (75) 3602-1500
- **WhatsApp:** (75) 98181-1500
- **E-mail:** procon@feiradesantana.ba.gov.br

**Horário de funcionamento:**
- Segunda a sexta: 8h às 14h

**Documentos necessários:**
- RG e CPF
- Comprovante de residência
- Nota fiscal ou contrato
- Protocolos de atendimento com a empresa

**Tipos de atendimento:**
- Reclamações de consumo
- Orientação sobre direitos
- Audiências de conciliação

**Alternativas:**
- PROCON-BA (atende todo o estado): 0800 071 2552
- Juizado Especial Cível de Feira de Santana

**Dica:** Antes de ir, tente resolver com a empresa e anote todos os protocolos.`,
    area: 'consumidor',
    keywords: ['procon feira de santana', 'procon feira santana telefone', 'defesa consumidor feira', 'reclamar procon feira'],
    relatedQuestions: ['bahia-14', 'bahia-17', 'bahia-2'],
    metaDescription: 'PROCON Feira de Santana: Av. Senhor dos Passos, 1225 - Centro. Telefone (75) 3602-1500. Horário, documentos e como reclamar.'
  },
  {
    id: 'bahia-14',
    slug: 'juizado-especial-feira-de-santana',
    question: 'Como processar no Juizado Especial de Feira de Santana?',
    answer: `O **Juizado Especial Cível de Feira de Santana** julga causas de até 40 salários mínimos de forma rápida e simplificada.

**Endereço do Juizado Especial:**
- **Fórum Desembargador Filinto Bastos**
- Av. Maria Quitéria, s/n - Kalilândia
- Feira de Santana - BA

**Como entrar com ação:**
1. Compareça ao Juizado com documentos
2. Faça a reclamação no setor de atendimento
3. Aguarde audiência de conciliação (15-30 dias)
4. Se não houver acordo, aguarde sentença

**Documentos necessários:**
- RG e CPF
- Comprovante de residência
- Provas do caso (notas, fotos, prints)
- Dados do réu (nome/CNPJ, endereço)

**Custos:**
- Até 20 salários mínimos: gratuito e sem advogado
- De 20 a 40 salários: custas proporcionais, advogado obrigatório

**Prazo médio:**
- Audiência: 15-30 dias
- Sentença: 2-4 meses

**Tipos de causas:**
- Consumidor (produtos, serviços)
- Cobranças indevidas
- Acidentes de trânsito
- Indenizações em geral

**Horário de atendimento:** Segunda a sexta, 8h às 14h`,
    area: 'geral',
    keywords: ['juizado especial feira santana', 'processar feira de santana', 'fórum feira santana', 'pequenas causas feira'],
    relatedQuestions: ['bahia-13', 'bahia-15', 'bahia-3'],
    metaDescription: 'Como processar no Juizado Especial de Feira de Santana: Fórum Desembargador Filinto Bastos. Documentos, custos e prazos.'
  },
  {
    id: 'bahia-15',
    slug: 'vara-trabalho-feira-de-santana',
    question: 'Onde fica a Vara do Trabalho de Feira de Santana?',
    answer: `A **Vara do Trabalho de Feira de Santana** pertence ao TRT da 5ª Região e julga ações trabalhistas da cidade e região.

**Endereço:**
- **Rua Marechal Deodoro, 339** - Centro
- Feira de Santana - BA, CEP 44001-525
- Tel: (75) 3602-4700

**Jurisdição:**
- Feira de Santana
- Conceição do Jacuípe
- São Gonçalo dos Campos
- Santa Bárbara
- Outras cidades da região

**Como ajuizar ação trabalhista:**
1. Contrate advogado ou procure sindicato
2. Reúna documentos (CTPS, holerites, etc.)
3. Ação é distribuída eletronicamente
4. Audiência inicial em 30-60 dias

**Documentos importantes:**
- CTPS (física ou digital)
- Contracheques
- Termo de rescisão
- Contrato de trabalho
- Provas (e-mails, mensagens, testemunhas)

**Prazos:**
- 2 anos após demissão para ajuizar
- Pode cobrar últimos 5 anos

**Justiça Gratuita:**
- Para quem ganha até 2 salários mínimos
- Ou comprova insuficiência de recursos

**Sindicatos em Feira de Santana:**
- Podem ajudar com orientação e advogados`,
    area: 'trabalhista',
    keywords: ['vara trabalho feira santana', 'trt feira de santana', 'processo trabalhista feira', 'justiça trabalho feira'],
    relatedQuestions: ['bahia-16', 'bahia-4', 'trab-1'],
    metaDescription: 'Vara do Trabalho de Feira de Santana: Rua Marechal Deodoro, 339 - Centro. Como ajuizar ação trabalhista e documentos necessários.'
  },
  {
    id: 'bahia-16',
    slug: 'direitos-trabalhadores-feira-santana',
    question: 'Quais os direitos dos trabalhadores em Feira de Santana?',
    answer: `Os trabalhadores de Feira de Santana têm os mesmos direitos garantidos pela **CLT** e pela Constituição Federal, além de convenções coletivas específicas da região.

**Direitos básicos de todo trabalhador:**
- Carteira assinada desde o 1º dia
- Salário mínimo (nacional ou estadual)
- 13º salário
- Férias + 1/3
- FGTS (8% do salário)
- Hora extra (50% ou 100%)
- Descanso semanal remunerado
- Vale-transporte

**Direitos específicos por categoria:**
- Piso salarial (conforme convenção coletiva)
- Adicional de insalubridade (10%, 20% ou 40%)
- Adicional de periculosidade (30%)
- Adicional noturno (20%)

**Principais setores em Feira de Santana:**
- Comércio (Sindicato dos Comerciários)
- Indústria (FIEB)
- Construção civil
- Serviços

**Se seus direitos forem violados:**

1. **Sindicato da categoria:**
- Orientação e defesa

2. **Ministério do Trabalho:**
- Denúncia online: denuncia.sit.trabalho.gov.br

3. **Justiça do Trabalho:**
- Vara do Trabalho de Feira de Santana

**Prazo para reclamar:** 2 anos após sair do emprego.`,
    area: 'trabalhista',
    keywords: ['direitos trabalhadores feira santana', 'clt feira de santana', 'sindicato feira santana', 'trabalhador feira de santana'],
    relatedQuestions: ['bahia-15', 'trab-2', 'trab-6'],
    metaDescription: 'Direitos dos trabalhadores em Feira de Santana: CLT, convenções coletivas, sindicatos e como reclamar na Justiça do Trabalho.'
  },
  {
    id: 'bahia-17',
    slug: 'produto-defeituoso-feira-santana',
    question: 'Comprei produto com defeito em Feira de Santana. O que fazer?',
    answer: `Se você comprou um **produto com defeito** em Feira de Santana, o Código de Defesa do Consumidor garante seus direitos.

**Prazos para reclamar:**
- Produtos não duráveis: 30 dias
- Produtos duráveis: 90 dias
- Vícios ocultos: prazo conta da descoberta

**Seus direitos (Art. 18 do CDC):**
1. **Troca do produto**
2. **Devolução do dinheiro** (+ correção)
3. **Abatimento proporcional** do preço
4. **Reparo** (prazo máximo: 30 dias)

**Passo a passo:**

**1. Reclame na loja:**
- Leve o produto e a nota fiscal
- Peça protocolo por escrito

**2. Se não resolver em 30 dias:**
- Exija troca, devolução ou abatimento
- É escolha SUA, não da loja

**3. PROCON Feira de Santana:**
- Av. Senhor dos Passos, 1225
- Tel: (75) 3602-1500

**4. Juizado Especial:**
- Fórum de Feira de Santana
- Gratuito até 20 salários mínimos

**Documentos importantes:**
- Nota fiscal
- Prints de conversas
- Fotos/vídeos do defeito
- Protocolos de atendimento

**Indenização:**
- Danos materiais: valor do produto
- Danos morais: se houver transtorno grave`,
    area: 'consumidor',
    keywords: ['produto defeituoso feira santana', 'trocar produto feira', 'defeito garantia feira santana', 'reclamar loja feira'],
    relatedQuestions: ['bahia-13', 'cons-8', 'cons-9'],
    metaDescription: 'Produto com defeito em Feira de Santana? Direito a troca, devolução ou reparo em 30 dias. PROCON, Juizado e seus direitos.'
  },
  {
    id: 'bahia-18',
    slug: 'cobranca-indevida-feira-santana',
    question: 'Recebi cobrança indevida em Feira de Santana. Tenho direito a devolução em dobro?',
    answer: `Sim! O Código de Defesa do Consumidor garante **devolução em dobro** de valores pagos indevidamente.

**O que diz a lei (Art. 42, parágrafo único):**
> "O consumidor cobrado em quantia indevida tem direito à repetição do indébito, por valor igual ao dobro do que pagou em excesso."

**Quando tenho direito:**
- Pagou valor maior que o devido
- Cobrança por serviço não contratado
- Cobrança duplicada
- Taxa ou tarifa ilegal

**Como conseguir a devolução em dobro:**

**1. Contate a empresa:**
- Peça estorno em dobro
- Anote protocolo

**2. PROCON Feira de Santana:**
- Av. Senhor dos Passos, 1225
- Tel: (75) 3602-1500

**3. Juizado Especial:**
- Ação de repetição de indébito
- Pode pedir devolução em dobro + danos morais

**Valores no TJBA:**
- Devolução em dobro: valor pago x 2
- Danos morais: R$ 2.000 a R$ 5.000 (se houver transtorno)

**Prazo para reclamar:** 5 anos

**Exceção:** A empresa não devolve em dobro se provar que foi erro justificável.

**Documentos necessários:**
- Comprovante de pagamento
- Fatura/boleto original
- Protocolo de reclamação`,
    area: 'consumidor',
    keywords: ['cobrança indevida feira santana', 'devolução dobro bahia', 'cobrança duplicada feira', 'restituição dobro feira'],
    relatedQuestions: ['bahia-13', 'cons-18', 'cons-19'],
    metaDescription: 'Cobrança indevida em Feira de Santana? Direito a devolução em dobro do valor pago. Como reclamar no PROCON e Juizado.'
  },

  // VITÓRIA DA CONQUISTA (5 FAQs)
  {
    id: 'bahia-19',
    slug: 'procon-vitoria-da-conquista',
    question: 'Onde fica o PROCON de Vitória da Conquista?',
    answer: `O **PROCON de Vitória da Conquista** é o órgão de defesa do consumidor da cidade.

**Endereço:**
- **Praça Tancredo Neves, s/n** - Centro
- Vitória da Conquista - BA, CEP 45000-000

**Contatos:**
- **Telefone:** (77) 3424-8500
- Ramais: PROCON

**Horário de funcionamento:**
- Segunda a sexta: 8h às 14h

**Serviços oferecidos:**
- Registro de reclamações
- Audiências de conciliação
- Orientação ao consumidor
- Fiscalização de estabelecimentos

**Documentos para atendimento:**
- RG e CPF
- Comprovante de residência
- Nota fiscal/contrato
- Protocolos de atendimento à empresa

**Alternativas:**
- **PROCON-BA (estadual):** 0800 071 2552
- **Juizado Especial Cível:** Fórum de Vitória da Conquista
- **consumidor.gov.br:** reclamação online

**Dica:** Antes de ir ao PROCON, tente resolver diretamente com a empresa. Se não resolver em até 5 dias úteis, procure o órgão com todos os protocolos em mãos.`,
    area: 'consumidor',
    keywords: ['procon vitória conquista', 'procon conquista telefone', 'defesa consumidor conquista', 'reclamar procon conquista'],
    relatedQuestions: ['bahia-21', 'bahia-22', 'bahia-2'],
    metaDescription: 'PROCON Vitória da Conquista: Praça Tancredo Neves - Centro. Telefone (77) 3424-8500. Horário, documentos e serviços.'
  },
  {
    id: 'bahia-20',
    slug: 'inss-vitoria-conquista-aposentadoria',
    question: 'Como dar entrada na aposentadoria em Vitória da Conquista?',
    answer: `Para dar entrada na **aposentadoria em Vitória da Conquista**, você pode usar o Meu INSS ou ir presencialmente à agência.

**Agência do INSS em Vitória da Conquista:**
- **Av. Lauro de Freitas, 330** - Recreio
- CEP: 45020-380
- Tel: 135

**Como solicitar aposentadoria:**

**1. Pelo Meu INSS (mais rápido):**
- Acesse meu.inss.gov.br ou baixe o app
- Faça login com Gov.br
- Clique em "Pedir Aposentadoria"
- Preencha os dados e anexe documentos
- Acompanhe pelo app

**2. Pelo telefone 135:**
- Ligação gratuita
- Horário: 7h às 22h
- Agende atendimento presencial se necessário

**Documentos necessários:**
- RG e CPF
- Carteira de trabalho (todas)
- Carnês de contribuição (se autônomo)
- Certidão de nascimento/casamento
- Comprovante de residência

**Tipos de aposentadoria:**
- Por idade: 65 anos (homem) / 62 anos (mulher)
- Por tempo de contribuição (regra de transição)
- Por invalidez
- Especial (atividade insalubre)

**Prazo de análise:** 45 dias (pode variar)

**Importante:** Procure um advogado previdenciário se tiver tempo especial ou rural não reconhecido.`,
    area: 'previdenciario',
    keywords: ['aposentadoria vitória conquista', 'inss conquista endereço', 'dar entrada aposentadoria bahia', 'agência inss conquista'],
    relatedQuestions: ['prev-1', 'prev-2', 'bahia-6'],
    metaDescription: 'Como dar entrada na aposentadoria em Vitória da Conquista: agência INSS, Meu INSS, 135. Documentos e tipos de aposentadoria.'
  },
  {
    id: 'bahia-21',
    slug: 'plano-saude-negou-exame-vitoria-conquista',
    question: 'Plano de saúde negou exame em Vitória da Conquista. O que fazer?',
    answer: `Se o plano de saúde negou um exame em Vitória da Conquista, você tem opções para reverter a decisão.

**Passo a passo:**

**1. Exija a negativa por escrito:**
- A operadora deve fornecer em 24h
- Deve conter o motivo da negativa
- Guarde como prova

**2. Verifique se o exame está no Rol da ANS:**
- Site: www.ans.gov.br/rol
- Se estiver, a negativa é abusiva

**3. Reclame na ANS:**
- 0800 701 9656
- A ANS pode determinar a cobertura
- Prazo de resposta: 5 dias

**4. PROCON Vitória da Conquista:**
- Praça Tancredo Neves - Centro
- Tel: (77) 3424-8500

**5. Ação judicial:**
- Juizado Especial de Vitória da Conquista
- Pode pedir liminar de urgência

**Situações comuns de negativa ilegal:**
- "Exame não coberto" (se está no rol ANS)
- "Médico não credenciado" (pode usar reembolso)
- "Limite de exames" (ilegal para exames necessários)

**Indenização:**
- Danos materiais: reembolso integral
- Danos morais: R$ 3.000 a R$ 15.000

**Importante:** Exames de urgência devem ser cobertos mesmo em carência.`,
    area: 'consumidor',
    keywords: ['plano saúde negou vitória conquista', 'exame negado plano conquista', 'ação plano saúde bahia', 'ans vitória conquista'],
    relatedQuestions: ['bahia-19', 'cons-12', 'bahia-10'],
    metaDescription: 'Plano de saúde negou exame em Vitória da Conquista? Reclame na ANS, PROCON ou entre com ação judicial. Seus direitos.'
  },
  {
    id: 'bahia-22',
    slug: 'juizado-especial-vitoria-conquista',
    question: 'Como processar no Juizado Especial de Vitória da Conquista?',
    answer: `O **Juizado Especial de Vitória da Conquista** julga causas cíveis de até 40 salários mínimos.

**Endereço do Fórum:**
- **Fórum Clériston Andrade**
- Av. Olívia Flores, s/n - Candeias
- Vitória da Conquista - BA

**Como entrar com ação:**
1. Compareça ao Juizado com documentos
2. Preencha formulário de reclamação
3. Aguarde audiência de conciliação
4. Se não houver acordo, sentença em 30-60 dias

**Causas que podem ser ajuizadas:**
- Consumidor (compras, serviços)
- Cobrança de dívidas
- Acidentes de trânsito
- Indenizações em geral

**Documentos necessários:**
- RG, CPF
- Comprovante de residência
- Provas (notas, fotos, prints)
- Dados do réu

**Custos:**
- Até 20 salários mínimos: gratuito
- De 20 a 40 salários: custas reduzidas

**Advogado:**
- Até 20 salários: dispensado
- Acima: obrigatório

**Prazo médio do processo:**
- Audiência: 15-30 dias
- Sentença: 2-4 meses

**Dica:** Leve todas as provas organizadas e seja objetivo ao explicar o caso.`,
    area: 'geral',
    keywords: ['juizado especial vitória conquista', 'processar conquista', 'fórum vitória conquista', 'pequenas causas conquista'],
    relatedQuestions: ['bahia-19', 'bahia-3', 'bahia-14'],
    metaDescription: 'Juizado Especial de Vitória da Conquista: Fórum Clériston Andrade. Como processar, documentos, custos e prazos.'
  },
  {
    id: 'bahia-23',
    slug: 'advogado-previdenciario-vitoria-conquista',
    question: 'Preciso de advogado previdenciário em Vitória da Conquista?',
    answer: `Em muitos casos, **sim**, um advogado previdenciário pode fazer grande diferença em Vitória da Conquista.

**Quando você PRECISA de advogado:**
- Benefício negado pelo INSS
- Auxílio-doença indeferido
- Aposentadoria por invalidez negada
- Tempo rural ou especial não reconhecido
- Revisão de benefício

**Quando pode fazer sozinho:**
- Primeiro requerimento simples
- Documentação completa e clara
- Casos sem controvérsia

**Vantagens do advogado previdenciário:**
- Conhece as regras e estratégias
- Identifica tempo "escondido"
- Calcula melhor data de entrada
- Recorre administrativamente
- Ajuiza ação judicial se necessário

**Onde encontrar advogado:**
- OAB-BA (Subseção Vitória da Conquista)
- Indicação de amigos/família
- Sites especializados

**Defensoria Pública:**
- Para quem não pode pagar
- Atende questões previdenciárias
- Tel: (77) 3424-8300

**Custo médio:**
- Honorários: 20% a 30% do que conseguir
- Muitos só cobram em caso de vitória

**INSS em Vitória da Conquista:**
- Av. Lauro de Freitas, 330 - Recreio
- Telefone: 135`,
    area: 'previdenciario',
    keywords: ['advogado previdenciário vitória conquista', 'advogado inss conquista', 'aposentadoria vitória conquista', 'benefício negado conquista'],
    relatedQuestions: ['bahia-20', 'prev-3', 'bahia-7'],
    metaDescription: 'Precisa de advogado previdenciário em Vitória da Conquista? Quando contratar, onde encontrar e custos. INSS e Defensoria.'
  },

  // CAMAÇARI (4 FAQs)
  {
    id: 'bahia-24',
    slug: 'procon-camacari-bahia',
    question: 'Onde fica o PROCON de Camaçari?',
    answer: `O **PROCON de Camaçari** atende os consumidores do município.

**Endereço:**
- **Rua Francisco Drumond, s/n** - Centro
- Camaçari - BA, CEP 42800-000
- (Prédio da Prefeitura ou anexo)

**Contato:**
- **Telefone:** (71) 3621-2100 (Prefeitura - ramal PROCON)

**Horário de funcionamento:**
- Segunda a sexta: 8h às 14h

**Serviços:**
- Reclamações contra empresas
- Orientação ao consumidor
- Audiências de conciliação
- Fiscalização

**Alternativas:**
- **PROCON-BA (estadual):** 0800 071 2552
- Atendimento pelo consumidor.gov.br

**Documentos para atendimento:**
- RG e CPF
- Comprovante de residência
- Nota fiscal ou contrato
- Protocolos de reclamação

**Dica:** Como Camaçari faz parte da região metropolitana de Salvador, você também pode usar o PROCON-BA estadual para reclamações.`,
    area: 'consumidor',
    keywords: ['procon camaçari', 'procon camacari telefone', 'defesa consumidor camaçari', 'reclamar procon camacari'],
    relatedQuestions: ['bahia-25', 'bahia-27', 'bahia-2'],
    metaDescription: 'PROCON Camaçari: Rua Francisco Drumond - Centro. Telefone, horário e serviços de defesa do consumidor.'
  },
  {
    id: 'bahia-25',
    slug: 'direitos-trabalhadores-polo-petroquimico',
    question: 'Quais os direitos dos trabalhadores do Polo Petroquímico de Camaçari?',
    answer: `Os trabalhadores do **Polo Petroquímico de Camaçari** têm direitos especiais devido às condições de trabalho.

**Direitos específicos do setor:**

**1. Adicional de Periculosidade (30%):**
- Contato com inflamáveis
- Trabalho com explosivos
- Eletricidade de alta tensão
- Calculado sobre o salário base

**2. Adicional de Insalubridade:**
- Grau mínimo: 10%
- Grau médio: 20%
- Grau máximo: 40%
- Exposição a agentes nocivos (químicos, ruído)

**3. Adicional Noturno (20%):**
- Trabalho entre 22h e 5h
- Hora noturna: 52 min 30 seg

**4. Aposentadoria Especial:**
- 15, 20 ou 25 anos de trabalho especial
- Direito a se aposentar mais cedo
- PPP é obrigatório

**Documentos importantes:**
- PPP (Perfil Profissiográfico Previdenciário)
- LTCAT (Laudo Técnico)
- Contracheques

**Se seus direitos forem violados:**
- Sindicato dos Químicos da Bahia
- Vara do Trabalho de Camaçari
- Ministério do Trabalho: 158

**Sindicato dos Químicos:**
- Representa trabalhadores do polo
- Convenção coletiva anual
- Assessoria jurídica`,
    area: 'trabalhista',
    keywords: ['trabalhadores polo petroquímico camaçari', 'direitos químicos bahia', 'periculosidade camaçari', 'insalubridade polo petroquímico'],
    relatedQuestions: ['bahia-26', 'trab-7', 'trab-9'],
    metaDescription: 'Direitos dos trabalhadores do Polo Petroquímico de Camaçari: periculosidade 30%, insalubridade, adicional noturno e aposentadoria especial.'
  },
  {
    id: 'bahia-26',
    slug: 'acidente-trabalho-camacari',
    question: 'Sofri acidente de trabalho em Camaçari. Quais meus direitos?',
    answer: `Se você sofreu **acidente de trabalho em Camaçari**, tem direitos garantidos por lei.

**Direitos após acidente de trabalho:**

**1. Estabilidade de 12 meses:**
- Após alta do INSS
- Não pode ser demitido nesse período
- Mesmo que tenha contrato temporário

**2. Auxílio-doença acidentário (B91):**
- A partir do 16º dia de afastamento
- 91% do salário de benefício
- Empresa paga os primeiros 15 dias

**3. Indenização (se houver culpa da empresa):**
- Danos materiais: despesas médicas, lucros cessantes
- Danos morais: R$ 10.000 a R$ 100.000+
- Danos estéticos: se houver sequelas

**4. FGTS continua sendo depositado:**
- Durante todo o afastamento

**O que fazer após o acidente:**

**1. Comunicar a empresa imediatamente**
**2. Exigir emissão da CAT:**
- Comunicação de Acidente de Trabalho
- Se a empresa recusar, você pode emitir
- Sindicato ou médico também podem

**3. Guardar documentos:**
- Atestados e laudos
- Fotos do local/lesão
- Nomes de testemunhas

**4. Procurar o INSS:**
- Agendar perícia pelo 135 ou Meu INSS

**Vara do Trabalho de Camaçari:**
- Ações trabalhistas por acidente
- Pode pedir pensão vitalícia se houver incapacidade`,
    area: 'trabalhista',
    keywords: ['acidente trabalho camaçari', 'cat camaçari', 'indenização acidente bahia', 'estabilidade acidente trabalho'],
    relatedQuestions: ['bahia-25', 'trab-11', 'prev-3'],
    metaDescription: 'Acidente de trabalho em Camaçari? Direito a estabilidade 12 meses, auxílio-doença, indenização. CAT e como buscar seus direitos.'
  },
  {
    id: 'bahia-27',
    slug: 'juizado-especial-camacari',
    question: 'Como processar empresa no Juizado Especial de Camaçari?',
    answer: `O **Juizado Especial de Camaçari** julga causas cíveis de até 40 salários mínimos.

**Endereço do Fórum de Camaçari:**
- **Av. Jorge Amado, s/n** - Centro
- Camaçari - BA

**Como ajuizar ação:**
1. Vá ao Juizado com documentos
2. Preencha o formulário de reclamação
3. Audiência de conciliação: 15-30 dias
4. Sentença se não houver acordo

**Tipos de causas:**
- Problemas de consumo
- Cobranças indevidas
- Acidentes de trânsito
- Indenizações até 40 salários

**Documentos:**
- RG, CPF, comprovante de residência
- Provas do caso
- Dados do réu (CNPJ, endereço)

**Custos:**
- Até 20 salários mínimos: gratuito
- Sem advogado até 20 salários

**Prazo médio:**
- Audiência: 15-30 dias
- Sentença: 2-4 meses

**Alternativa:**
- Juizado Especial de Salvador (se preferir)
- consumidor.gov.br (online)

**Dica:** Organize todas as provas cronologicamente e seja objetivo na audiência.`,
    area: 'consumidor',
    keywords: ['juizado especial camaçari', 'processar empresa camaçari', 'fórum camaçari', 'pequenas causas camacari'],
    relatedQuestions: ['bahia-24', 'bahia-3', 'bahia-14'],
    metaDescription: 'Juizado Especial de Camaçari: como processar, documentos, custos. Av. Jorge Amado - Centro. Causas até 40 salários mínimos.'
  },

  // ITABUNA (3 FAQs)
  {
    id: 'bahia-28',
    slug: 'procon-itabuna-bahia',
    question: 'Onde fica o PROCON de Itabuna?',
    answer: `O **PROCON de Itabuna** é o órgão de defesa do consumidor da cidade.

**Endereço:**
- **Av. Cinquentenário, s/n** - Centro
- Itabuna - BA, CEP 45600-000
- (Junto à Prefeitura Municipal)

**Contato:**
- **Telefone:** (73) 3212-7600 (Prefeitura - ramal PROCON)

**Horário:**
- Segunda a sexta: 8h às 14h

**Serviços:**
- Reclamações de consumo
- Audiências de conciliação
- Orientação jurídica
- Fiscalização

**Documentos:**
- RG e CPF
- Comprovante de residência
- Nota fiscal/contrato
- Protocolos anteriores

**Alternativas:**
- **PROCON-BA:** 0800 071 2552
- **consumidor.gov.br:** reclamação online
- **Juizado Especial de Itabuna**

**Dica:** Itabuna é polo regional do sul da Bahia. O PROCON atende também consumidores de cidades vizinhas como Ilhéus, Buerarema e Ibicaraí.`,
    area: 'consumidor',
    keywords: ['procon itabuna', 'procon itabuna telefone', 'defesa consumidor itabuna', 'reclamar procon itabuna'],
    relatedQuestions: ['bahia-29', 'bahia-30', 'bahia-2'],
    metaDescription: 'PROCON Itabuna: Av. Cinquentenário - Centro. Telefone, horário e como fazer reclamação de consumidor.'
  },
  {
    id: 'bahia-29',
    slug: 'nome-negativado-itabuna-bahia',
    question: 'Nome negativado indevidamente em Itabuna. O que fazer?',
    answer: `Se seu nome foi **negativado indevidamente em Itabuna**, você tem direito a indenização por danos morais.

**Passo a passo:**

**1. Reúna provas:**
- Print da consulta Serasa/SPC
- Comprovante de que não deve (ou já pagou)
- Histórico de negativações

**2. Notifique a empresa:**
- Por escrito (e-mail com AR ou protocolo)
- Dê prazo de 5 dias para resolver

**3. PROCON Itabuna:**
- Av. Cinquentenário - Centro
- Tel: (73) 3212-7600

**4. Juizado Especial de Itabuna:**
- Ação de indenização
- Gratuito até 20 salários mínimos

**Valores de indenização no TJBA:**
- Primeira negativação indevida: R$ 3.000 a R$ 8.000
- Reincidência: R$ 8.000 a R$ 15.000
- Longa duração: até R$ 20.000

**Documentos para ação:**
- RG, CPF
- Comprovante de residência
- Print da negativação
- Prova de que não deve

**Prazo para processar:** 3 anos

**Dica:** Não aceite acordos muito baixos. A média no TJBA está entre R$ 5.000 e R$ 10.000.`,
    area: 'consumidor',
    keywords: ['nome negativado itabuna', 'negativação indevida itabuna', 'serasa spc itabuna', 'danos morais itabuna'],
    relatedQuestions: ['bahia-28', 'bahia-12', 'cons-16'],
    metaDescription: 'Nome negativado indevidamente em Itabuna? Indenização de R$ 5.000 a R$ 15.000. Como processar no PROCON e Juizado.'
  },
  {
    id: 'bahia-30',
    slug: 'juizado-especial-itabuna',
    question: 'Como processar no Juizado Especial de Itabuna?',
    answer: `O **Juizado Especial de Itabuna** é a forma mais rápida de resolver disputas de até 40 salários mínimos.

**Endereço:**
- **Fórum Epaminondas Berbert de Castro**
- Av. Juracy Magalhães Jr., s/n
- Itabuna - BA

**Como ajuizar:**
1. Compareça ao fórum com documentos
2. Preencha formulário no balcão
3. Receba data de audiência
4. Participe da conciliação

**Documentos:**
- RG e CPF
- Comprovante de residência
- Provas do caso
- Dados do réu

**Custos:**
- Até 20 salários: gratuito e sem advogado
- De 20 a 40 salários: custas + advogado

**Tipos de ação:**
- Consumidor
- Cobranças
- Indenizações
- Acidentes de trânsito

**Prazos:**
- Audiência: 15-30 dias
- Sentença: 2-4 meses

**Jurisdição:**
- Itabuna
- Cidades da comarca (Buerarema, etc.)

**Dica:** Leve cópias de todos os documentos e originais para conferência.`,
    area: 'geral',
    keywords: ['juizado especial itabuna', 'fórum itabuna', 'processar itabuna', 'pequenas causas itabuna'],
    relatedQuestions: ['bahia-28', 'bahia-29', 'bahia-3'],
    metaDescription: 'Juizado Especial de Itabuna: Fórum Epaminondas Berbert. Como processar, documentos e custos. Gratuito até 20 salários.'
  },

  // ILHÉUS (3 FAQs)
  {
    id: 'bahia-31',
    slug: 'procon-ilheus-bahia',
    question: 'Onde fica o PROCON de Ilhéus?',
    answer: `O **PROCON de Ilhéus** atende consumidores da cidade e região.

**Endereço:**
- **Av. Soares Lopes, s/n** - Centro
- Ilhéus - BA, CEP 45653-000
- (Prédio da Prefeitura)

**Contato:**
- **Telefone:** (73) 3234-1600 (Prefeitura - solicitar PROCON)

**Horário:**
- Segunda a sexta: 8h às 14h

**Serviços:**
- Reclamações contra empresas
- Conciliação consumidor x fornecedor
- Orientação sobre direitos
- Fiscalização de estabelecimentos

**Documentos:**
- RG, CPF
- Comprovante de residência
- Nota fiscal ou contrato
- Protocolos de atendimento

**Alternativas:**
- **PROCON-BA:** 0800 071 2552
- **consumidor.gov.br**
- **Juizado Especial de Ilhéus**

**Ilhéus - Cidade turística:**
- Problemas com hotéis e pousadas
- Passeios e agências de turismo
- Restaurantes e serviços turísticos

**Dica:** Turistas também podem reclamar no PROCON da cidade onde ocorreu o problema.`,
    area: 'consumidor',
    keywords: ['procon ilhéus', 'procon ilheus telefone', 'defesa consumidor ilhéus', 'reclamar procon ilheus'],
    relatedQuestions: ['bahia-32', 'bahia-33', 'bahia-2'],
    metaDescription: 'PROCON Ilhéus: Av. Soares Lopes - Centro. Telefone e horário. Reclamações de consumo incluindo serviços turísticos.'
  },
  {
    id: 'bahia-32',
    slug: 'direitos-trabalhadores-turismo-ilheus',
    question: 'Quais os direitos dos trabalhadores de turismo em Ilhéus?',
    answer: `Os trabalhadores do **setor de turismo em Ilhéus** têm direitos específicos garantidos pela CLT e convenções coletivas.

**Direitos dos trabalhadores de hotéis e pousadas:**
- Carteira assinada
- Piso salarial da categoria
- Adicional noturno (20%)
- Hora extra (50% ou 100%)
- Gorjetas integram o salário

**Gorjetas:**
- Fazem parte da remuneração
- Devem ser rateadas conforme convenção
- FGTS e 13º calculam sobre gorjetas

**Direitos em bares e restaurantes:**
- 10% do garçom: facultativo ao cliente
- Taxa de serviço: deve ser repassada
- Intervalo obrigatório

**Adicional noturno:**
- Trabalho entre 22h e 5h
- 20% a mais na hora
- Hora noturna: 52 min 30 seg

**Se seus direitos forem violados:**

**1. Sindicato da categoria:**
- SINTRAHIR (Sindicato dos Trabalhadores em Hotéis)
- SINDHOBARES

**2. Ministério do Trabalho:**
- Denúncia: 158

**3. Justiça do Trabalho:**
- Vara do Trabalho de Ilhéus
- Prazo: 2 anos após sair

**Importante:** Trabalhador temporário de alta temporada também tem direitos!`,
    area: 'trabalhista',
    keywords: ['trabalhadores turismo ilhéus', 'direitos garçom ilhéus', 'hotel ilhéus trabalhista', 'gorjeta ilhéus'],
    relatedQuestions: ['bahia-31', 'trab-2', 'trab-6'],
    metaDescription: 'Direitos dos trabalhadores de turismo em Ilhéus: hotéis, restaurantes, gorjetas, adicional noturno. Como reclamar.'
  },
  {
    id: 'bahia-33',
    slug: 'fraude-bancaria-ilheus',
    question: 'Fui vítima de fraude bancária em Ilhéus. Como processar?',
    answer: `Se você sofreu **fraude bancária em Ilhéus**, o banco pode ser responsabilizado judicialmente.

**Passos imediatos:**

**1. Contate o banco:**
- Ligue imediatamente
- Bloqueie cartões e acessos
- Anote protocolo

**2. Registre Boletim de Ocorrência:**
- Delegacia de Ilhéus
- Ou online: www.delegaciavirtual.ba.gov.br

**3. Reclame formalmente:**
- SAC do banco
- Ouvidoria (se SAC não resolver)
- Banco Central: bcb.gov.br

**4. PROCON Ilhéus:**
- Av. Soares Lopes - Centro
- Pode aplicar multa ao banco

**5. Ação judicial:**
- Juizado Especial de Ilhéus
- Até 40 salários mínimos

**Responsabilidade do banco:**
- Súmula 479 STJ: banco responde por fraudes
- Risco do negócio é do banco
- Não precisa provar culpa

**Indenização:**
- Danos materiais: valor integral
- Danos morais: R$ 3.000 a R$ 15.000
- Devolução em dobro se cobrado indevidamente

**Golpes mais comuns:**
- Clonagem de cartão
- Falso funcionário
- Phishing (links falsos)
- Golpe do Pix

**Prazo para processar:** 5 anos`,
    area: 'consumidor',
    keywords: ['fraude bancária ilhéus', 'golpe banco ilhéus', 'processar banco ilhéus', 'clonagem cartão bahia'],
    relatedQuestions: ['bahia-31', 'bahia-11', 'cons-24'],
    metaDescription: 'Fraude bancária em Ilhéus? Banco deve indenizar danos materiais e morais. Como processar no Juizado e PROCON.'
  },

  // JUAZEIRO (3 FAQs)
  {
    id: 'bahia-34',
    slug: 'procon-juazeiro-bahia',
    question: 'Onde fica o PROCON de Juazeiro?',
    answer: `O **PROCON de Juazeiro** atende os consumidores da cidade e região do Vale do São Francisco.

**Endereço:**
- **Praça da Bandeira, s/n** - Centro
- Juazeiro - BA, CEP 48900-000
- (Prédio da Prefeitura)

**Contato:**
- **Telefone:** (74) 3613-3200 (Prefeitura - ramal PROCON)

**Horário:**
- Segunda a sexta: 8h às 14h

**Serviços:**
- Atendimento ao consumidor
- Audiências de conciliação
- Fiscalização
- Orientação jurídica

**Documentos:**
- RG e CPF
- Comprovante de residência
- Nota fiscal/contrato
- Protocolos anteriores

**Alternativas:**
- **PROCON-BA:** 0800 071 2552
- **consumidor.gov.br**
- **Juizado Especial de Juazeiro**

**Região atendida:**
- Juazeiro
- Casa Nova
- Curaçá
- Sobradinho (pode usar PROCON-BA)

**Dica:** Juazeiro faz divisa com Petrolina-PE. Se o problema for com empresa de Petrolina, pode reclamar no PROCON de lá também.`,
    area: 'consumidor',
    keywords: ['procon juazeiro bahia', 'procon juazeiro telefone', 'defesa consumidor juazeiro', 'reclamar procon juazeiro'],
    relatedQuestions: ['bahia-35', 'bahia-36', 'bahia-2'],
    metaDescription: 'PROCON Juazeiro-BA: Praça da Bandeira - Centro. Telefone e horário. Defesa do consumidor no Vale do São Francisco.'
  },
  {
    id: 'bahia-35',
    slug: 'inss-juazeiro-bahia',
    question: 'Onde fica a agência do INSS em Juazeiro-BA?',
    answer: `A **Agência do INSS em Juazeiro** atende a cidade e municípios da região.

**Endereço:**
- **Av. Adolfo Viana, s/n** - Centro
- Juazeiro - BA, CEP 48903-000

**Telefone:** 135 (ligação gratuita)
- Horário: 7h às 22h (segunda a sábado)

**Serviços disponíveis:**
- Aposentadoria (idade, tempo, especial)
- Auxílio-doença
- Pensão por morte
- Salário-maternidade
- BPC/LOAS
- Perícia médica

**Como agendar:**
1. **Meu INSS** (app ou site)
2. **Telefone 135**
3. Presencial (apenas urgências)

**Documentos básicos:**
- RG e CPF
- Carteira de trabalho
- Comprovante de residência
- Documentos específicos do benefício

**Municípios atendidos:**
- Juazeiro
- Casa Nova
- Curaçá
- Remanso
- Sobradinho

**Perícia médica:**
- Agendar pelo Meu INSS ou 135
- Levar todos os exames e laudos

**Dica:** A maioria dos serviços pode ser feita online pelo Meu INSS, sem precisar ir à agência.`,
    area: 'previdenciario',
    keywords: ['inss juazeiro bahia', 'agência inss juazeiro', 'previdência juazeiro', 'aposentadoria juazeiro'],
    relatedQuestions: ['bahia-34', 'bahia-6', 'prev-1'],
    metaDescription: 'Agência INSS Juazeiro-BA: Av. Adolfo Viana - Centro. Telefone 135. Serviços, documentos e como agendar.'
  },
  {
    id: 'bahia-36',
    slug: 'cobranca-indevida-juazeiro-bahia',
    question: 'Recebi cobrança indevida em Juazeiro. O que fazer?',
    answer: `Se você recebeu **cobrança indevida em Juazeiro**, tem direito à devolução em dobro do valor pago.

**O que diz o CDC (Art. 42):**
- Valor pago indevidamente: devolução em dobro
- Correção monetária incluída
- Exceção: erro justificável

**Passo a passo:**

**1. Conteste com a empresa:**
- Por escrito (e-mail, carta)
- Peça estorno ou devolução em dobro
- Anote protocolo

**2. PROCON Juazeiro:**
- Praça da Bandeira - Centro
- Tel: (74) 3613-3200

**3. consumidor.gov.br:**
- Reclamação online
- Empresas têm 10 dias para responder

**4. Juizado Especial:**
- Fórum de Juazeiro
- Gratuito até 20 salários mínimos

**Tipos comuns de cobrança indevida:**
- Serviço não contratado
- Cobrança duplicada
- Taxa não informada
- Valor acima do contratado
- Dívida já paga

**Indenização:**
- Devolução em dobro do valor pago
- Danos morais: R$ 2.000 a R$ 5.000 (se houver constrangimento)

**Prazo:** 5 anos para reclamar

**Documentos:**
- Comprovante de pagamento
- Fatura/boleto com cobrança indevida
- Contrato original`,
    area: 'consumidor',
    keywords: ['cobrança indevida juazeiro', 'devolução dobro juazeiro', 'restituição juazeiro bahia', 'cobrança errada juazeiro'],
    relatedQuestions: ['bahia-34', 'bahia-18', 'cons-18'],
    metaDescription: 'Cobrança indevida em Juazeiro-BA? Direito a devolução em dobro. Como reclamar no PROCON e Juizado Especial.'
  },

  // LAURO DE FREITAS (2 FAQs)
  {
    id: 'bahia-37',
    slug: 'procon-lauro-de-freitas',
    question: 'Onde fica o PROCON de Lauro de Freitas?',
    answer: `O **PROCON de Lauro de Freitas** atende consumidores do município, que faz parte da região metropolitana de Salvador.

**Endereço:**
- **Centro Administrativo Municipal**
- Av. Santos Dumont, s/n - Centro
- Lauro de Freitas - BA

**Contato:**
- **Telefone:** (71) 3288-8000 (Prefeitura - solicitar PROCON)

**Horário:**
- Segunda a sexta: 8h às 14h

**Alternativa principal:**
Como Lauro de Freitas é pequeno, muitos moradores preferem usar o **PROCON-BA (estadual)**:
- **Telefone:** 0800 071 2552
- **Endereço em Salvador:** Av. Centenário, 2992

**Serviços:**
- Reclamações de consumo
- Audiências de conciliação
- Orientação

**Documentos:**
- RG, CPF
- Comprovante de residência
- Nota fiscal/contrato
- Protocolos de atendimento

**Juizado Especial:**
- Fórum de Lauro de Freitas
- Ou Juizados de Salvador

**Dica:** Para problemas com grandes empresas (operadoras, bancos), use o consumidor.gov.br, que é mais rápido.`,
    area: 'consumidor',
    keywords: ['procon lauro de freitas', 'procon lauro freitas telefone', 'defesa consumidor lauro', 'reclamar procon lauro'],
    relatedQuestions: ['bahia-38', 'bahia-2', 'bahia-24'],
    metaDescription: 'PROCON Lauro de Freitas: Centro Administrativo. Telefone e alternativa PROCON-BA. Como fazer reclamação.'
  },
  {
    id: 'bahia-38',
    slug: 'produto-defeituoso-lauro-freitas',
    question: 'Comprei produto com defeito em Lauro de Freitas. Onde reclamar?',
    answer: `Se você comprou **produto com defeito em Lauro de Freitas**, tem direitos garantidos pelo CDC.

**Seus direitos (Art. 18 CDC):**
- Troca do produto
- Devolução do dinheiro
- Abatimento proporcional
- Reparo em até 30 dias

**Onde reclamar:**

**1. Na própria loja:**
- Leve produto + nota fiscal
- Exija protocolo por escrito
- Prazo para resolver: 30 dias

**2. PROCON Lauro de Freitas:**
- Centro Administrativo Municipal
- Tel: (71) 3288-8000

**3. PROCON-BA (mais estruturado):**
- 0800 071 2552
- Av. Centenário, 2992 - Salvador

**4. consumidor.gov.br:**
- Reclamação online
- Resposta em até 10 dias

**5. Juizado Especial:**
- Fórum de Lauro de Freitas
- Ou Salvador (Iguatemi)

**Prazos para reclamar:**
- Produtos não duráveis: 30 dias
- Produtos duráveis: 90 dias
- Defeito oculto: prazo conta da descoberta

**Documentos:**
- Nota fiscal
- Produto (se possível)
- Fotos/vídeos do defeito
- Protocolos anteriores

**Indenização:**
- Danos materiais: valor do produto
- Danos morais: se houver transtorno grave`,
    area: 'consumidor',
    keywords: ['produto defeituoso lauro freitas', 'trocar produto lauro', 'garantia lauro de freitas', 'reclamar loja lauro'],
    relatedQuestions: ['bahia-37', 'bahia-17', 'cons-8'],
    metaDescription: 'Produto com defeito em Lauro de Freitas? Troca ou devolução em 30 dias. PROCON, Juizado e seus direitos.'
  },

  // BARREIRAS (1 FAQ)
  {
    id: 'bahia-39',
    slug: 'procon-barreiras-bahia',
    question: 'Onde fica o PROCON de Barreiras?',
    answer: `O **PROCON de Barreiras** atende consumidores da cidade, polo do agronegócio no oeste baiano.

**Endereço:**
- **Av. Clériston Andrade, s/n** - Centro
- Barreiras - BA, CEP 47800-000
- (Prédio da Prefeitura ou Casa do Cidadão)

**Contato:**
- **Telefone:** (77) 3613-1000 (Prefeitura - ramal PROCON)

**Horário:**
- Segunda a sexta: 8h às 14h

**Serviços:**
- Atendimento ao consumidor
- Audiências de conciliação
- Fiscalização de preços
- Orientação

**Documentos:**
- RG e CPF
- Comprovante de residência
- Nota fiscal/contrato
- Protocolos com a empresa

**Alternativas:**
- **PROCON-BA:** 0800 071 2552
- **consumidor.gov.br:** online
- **Juizado Especial de Barreiras**

**Região atendida:**
- Barreiras
- Luís Eduardo Magalhães
- São Desidério
- Baianópolis

**Dica:** Barreiras é cidade-polo. O PROCON recebe demandas de toda a região MATOPIBA.`,
    area: 'consumidor',
    keywords: ['procon barreiras bahia', 'procon barreiras telefone', 'defesa consumidor barreiras', 'reclamar procon barreiras'],
    relatedQuestions: ['bahia-2', 'bahia-34', 'cons-1'],
    metaDescription: 'PROCON Barreiras-BA: Av. Clériston Andrade - Centro. Telefone e serviços. Defesa do consumidor no oeste baiano.'
  },

  // JEQUIÉ (1 FAQ)
  {
    id: 'bahia-40',
    slug: 'procon-jequie-bahia',
    question: 'Onde fica o PROCON de Jequié?',
    answer: `O **PROCON de Jequié** é o órgão de defesa do consumidor da cidade.

**Endereço:**
- **Praça Rui Barbosa, s/n** - Centro
- Jequié - BA, CEP 45200-000
- (Prédio da Prefeitura)

**Contato:**
- **Telefone:** (73) 3525-1000 (Prefeitura - solicitar PROCON)

**Horário:**
- Segunda a sexta: 8h às 14h

**Serviços oferecidos:**
- Registro de reclamações
- Audiências de conciliação
- Orientação ao consumidor
- Fiscalização de estabelecimentos

**Documentos para atendimento:**
- RG e CPF
- Comprovante de residência
- Nota fiscal ou contrato
- Protocolos de atendimento

**Alternativas:**
- **PROCON-BA:** 0800 071 2552
- **consumidor.gov.br**
- **Juizado Especial de Jequié**

**Municípios próximos:**
- Jaguaquara
- Ipiaú
- Itagi
- Aiquara

**Dica:** Antes de ir ao PROCON, tente resolver diretamente com a empresa por telefone ou e-mail, guardando todos os protocolos.`,
    area: 'consumidor',
    keywords: ['procon jequié', 'procon jequie telefone', 'defesa consumidor jequié', 'reclamar procon jequie'],
    relatedQuestions: ['bahia-2', 'bahia-28', 'cons-1'],
    metaDescription: 'PROCON Jequié-BA: Praça Rui Barbosa - Centro. Telefone e horário. Como fazer reclamação de consumidor.'
  }
];

// Helper functions
export function getFAQBySlug(slug: string): ProgrammaticFAQ | undefined {
  return programmaticFAQs.find(faq => faq.slug === slug);
}

export function getFAQsByArea(area: string): ProgrammaticFAQ[] {
  return programmaticFAQs.filter(faq => faq.area === area);
}

export function getRelatedFAQs(faqId: string): ProgrammaticFAQ[] {
  const faq = programmaticFAQs.find(f => f.id === faqId);
  if (!faq?.relatedQuestions) return [];
  return programmaticFAQs.filter(f => faq.relatedQuestions?.includes(f.id));
}

export function getAllFAQSlugs(): string[] {
  return programmaticFAQs.map(faq => faq.slug);
}

export function searchFAQs(query: string): ProgrammaticFAQ[] {
  const normalizedQuery = query.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  return programmaticFAQs.filter(faq => {
    const normalizedQuestion = faq.question.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    const normalizedKeywords = faq.keywords.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    return normalizedQuestion.includes(normalizedQuery) || normalizedKeywords.includes(normalizedQuery);
  });
}

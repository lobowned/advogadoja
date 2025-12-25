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
    slug: 'como-funciona-atendimento-advogado-online',
    question: 'Como funciona o atendimento com advogado online?',
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

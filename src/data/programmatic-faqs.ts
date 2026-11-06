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

/** Primeira publicação das perguntas (criação deste arquivo no git) e última revisão completa do texto. */
export const FAQS_PUBLICADAS_EM = "2025-12-25";
export const FAQS_REVISADAS_EM = "2026-11-06";

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

**Férias proporcionais:** Salário ÷ 12 × meses trabalhados no período aquisitivo + 1/3 (a fração de 15 dias ou mais conta como mês inteiro)

**13º proporcional:** Salário ÷ 12 × meses trabalhados no ano (também conta como mês a fração de 15 dias ou mais)

**Aviso prévio:** 30 dias + 3 dias por ano completo de serviço na mesma empresa, até o máximo de 90 dias (Lei 12.506/2011). Quando indenizado, esse período também conta para férias e 13º

**Multa FGTS (40%):** Total depositado no FGTS durante o contrato, com correção × 0,40

**Exemplo para salário de R$ 3.000:**
- 6 meses no ano, demissão sem justa causa
- Férias proporcionais: R$ 3.000 ÷ 12 × 6 = R$ 1.500 + R$ 500 (1/3) = R$ 2.000
- 13º proporcional: R$ 3.000 ÷ 12 × 6 = R$ 1.500

**Prazo para pagar:** A empresa tem 10 dias, contados do fim do contrato, para pagar as verbas rescisórias e entregar os documentos da rescisão (CLT, art. 477, §6º). O atraso gera multa equivalente a um salário do empregado (art. 477, §8º).

**Use nossa calculadora:** Acesse a calculadora trabalhista para uma estimativa. O valor exato depende dos documentos do contrato (contracheques, extrato do FGTS e convenção coletiva).`,
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
4. Não estar recebendo benefício previdenciário (exceto pensão por morte e auxílio-acidente)
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
    answer: `A pensão alimentícia é fixada com base no **trinômio**: necessidade de quem recebe, possibilidade de quem paga e proporcionalidade (Código Civil, art. 1.694, §1º).

**Não existe percentual fixo em lei:**
- Nenhuma lei diz que a pensão é de 30% ou de qualquer outro número
- O juiz analisa cada caso com base nas provas de gastos e de renda
- Percentuais que circulam na internet são exemplos de casos concretos, não regra

**O que é considerado:**
- **Necessidades:** alimentação, moradia, educação, saúde, lazer
- **Possibilidade:** renda total, despesas essenciais, outros dependentes
- **Proporcionalidade:** os dois pais contribuem na medida dos seus recursos (Código Civil, art. 1.703)

**Como o valor costuma ser definido:**
- Percentual sobre a renda, com desconto em folha, quando quem paga tem emprego formal
- Valor fixo ou em salários mínimos, quando a renda é informal
- Pagamento direto de despesas (escola, plano de saúde), quando houver acordo

**Cálculo pode incluir:**
- Salário fixo + comissões + bonificações habituais
- Participação nos lucros e bônus, conforme o que ficar decidido no acordo ou na sentença
- Valores in natura (plano de saúde, escola, etc.)

**Documentos que ajudam:**
- Comprovantes de gastos da criança (escola, saúde, alimentação)
- Provas da renda e do padrão de vida de quem paga (contracheques, extratos, bens, redes sociais)

**Revisão:** Pode ser solicitada quando há mudança significativa na situação de qualquer parte (Código Civil, art. 1.699).

**Dica:** Use nossa calculadora de pensão alimentícia apenas como estimativa. O valor final é sempre o do acordo homologado ou o fixado pelo juiz.`,
    area: 'familia',
    keywords: ['calcular pensão alimentícia', 'quanto pagar pensão', 'pensão alimentícia porcentagem', 'valor pensão filhos'],
    relatedQuestions: ['fam-1', 'fam-3', 'fam-5'],
    metaDescription: 'Saiba como é calculada a pensão alimentícia: não há percentual fixo em lei. Veja o que o juiz considera, como o valor é definido e quando pode ser revisado.'
  },
  {
    id: 'fam-3',
    slug: 'quanto-tempo-demora-divorcio',
    question: 'Quanto tempo demora um processo de divórcio?',
    answer: `Não existe um prazo fixo: o tempo do divórcio depende do caminho escolhido, do acordo entre o casal e da pauta de cada cartório ou vara.

**Divórcio consensual em cartório (extrajudicial):**
- Feito por escritura pública no Tabelionato de Notas, sempre com advogado ou defensor público (CPC, art. 733)
- A escritura pode ser lavrada assim que os documentos estiverem completos e o casal assinar
- Desde a Resolução CNJ 571/2024, também é possível com filhos menores ou incapazes, desde que guarda, convivência e pensão deles já tenham sido resolvidas na Justiça

**Divórcio consensual na Justiça:**
- Usado quando as questões dos filhos menores ainda não foram resolvidas ou quando o casal prefere a via judicial
- O acordo (bens, guarda, convivência e pensão) é levado ao juiz para homologação, com participação do Ministério Público quando há filhos menores

**Divórcio litigioso:**
- Quando não há acordo sobre bens, guarda ou pensão
- O divórcio é um direito que não depende da concordância do outro (Constituição, art. 226, §6º); por isso, o juiz pode decretá-lo antes de terminar a discussão sobre bens e filhos (CPC, art. 356)
- A duração varia muito conforme as provas, as perícias e os recursos

**Fatores que aceleram:**
- Acordo prévio sobre divisão de bens
- Consenso sobre guarda e pensão
- Documentação organizada (certidão de casamento atualizada, documentos dos bens)
- Escolher o cartório quando a lei permite

**Fatores que atrasam:**
- Briga pela guarda dos filhos
- Patrimônio complexo para dividir
- Falta de acordo sobre pensão
- Dificuldade para localizar o outro cônjuge
- Comarca com muitos processos

**Dica:** O divórcio pode ser feito a qualquer momento: não há mais prazo de separação prévia (Emenda Constitucional 66/2010).`,
    area: 'familia',
    keywords: ['tempo divórcio', 'quanto tempo demora divórcio', 'divórcio rápido', 'prazo divórcio'],
    relatedQuestions: ['fam-1', 'fam-2', 'fam-4'],
    metaDescription: 'Quanto tempo demora um divórcio? Não há prazo fixo. Veja como funcionam o divórcio em cartório (inclusive com filhos menores), o judicial e o litigioso.'
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
    answer: `Alienação parental é quando um dos pais (ou avós, ou quem tenha a criança sob sua guarda) interfere na formação psicológica da criança para que ela rejeite o outro genitor ou prejudique o vínculo com ele (Lei 12.318/2010, art. 2º).

**Exemplos de alienação:**
- Falar mal do outro pai na frente da criança
- Dificultar visitas ou contato telefônico
- Criar falsas memórias de abandono ou abuso
- Fazer a criança se sentir culpada por gostar do outro pai
- Mudar de cidade sem justificativa para afastar a criança do outro genitor

**Como provar:**
- Mensagens e áudios com falas depreciativas
- Testemunhos de familiares e amigos
- Relatório escolar sobre mudanças de comportamento
- Laudos psicológicos e estudo psicossocial determinado pelo juiz
- Registros de visitas impedidas

**Consequências legais (Lei 12.318/2010, art. 6º):**
- Advertência ao alienador
- Ampliação da convivência com o genitor prejudicado
- Multa
- Acompanhamento psicológico ou biopsicossocial
- Mudança da guarda para compartilhada ou sua inversão
- Fixação cautelar do domicílio da criança

**Mudança na lei:** A suspensão da autoridade parental deixou de constar nessa lista com a Lei 14.340/2022. Medidas mais graves sobre o poder familiar continuam possíveis, mas pelas regras próprias do Código Civil e do Estatuto da Criança e do Adolescente.

**Durante o processo:** A lei garante, no mínimo, visitação assistida entre a criança e o genitor, salvo se houver risco iminente à integridade dela, atestado por profissional (Lei 12.318/2010, art. 4º, parágrafo único).

**O que fazer:**
1. Documente tudo (print de mensagens, registros)
2. Busque orientação psicológica para a criança
3. Procure um advogado de família ou a Defensoria Pública
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
    answer: `Não existe um prazo único: depende do tipo de benefício, da documentação e da fila de análise do INSS. O que a lei e as normas fixam é o seguinte:

**Via administrativa (INSS):**
- A Lei 8.213/1991 (art. 41-A, §5º) prevê o primeiro pagamento em até 45 dias depois de entregue toda a documentação necessária
- Em 2021, o STF homologou acordo entre o INSS e o Ministério Público Federal que fixou prazos máximos de análise, de 30 a 90 dias conforme o benefício (RE 1.171.152, Tema 1.066); pelo acordo, o prazo fica suspenso enquanto o segurado não cumpre uma exigência
- Acompanhe o pedido e responda às exigências pelo Meu INSS

**Se o INSS demorar demais:**
- Reclame pelo Meu INSS ou pela Central 135 e guarde o número do protocolo
- A demora excessiva pode ser levada à Justiça (por exemplo, mandado de segurança para obrigar a análise)

**Via judicial:**
- Necessária quando o INSS nega indevidamente
- O tempo varia conforme a vara, a necessidade de perícia e os recursos; não há prazo garantido
- Em caso de vitória, os atrasados são pagos com correção monetária e juros

**Fatores que aceleram:**
- Documentação completa e organizada
- Histórico previdenciário sem inconsistências
- Pedido simples (aposentadoria por idade, por exemplo)
- Uso do Meu INSS para acompanhamento e resposta rápida às exigências

**Fatores que atrasam:**
- Falta de documentos
- Períodos sem contribuição ou informais
- Necessidade de perícia médica
- Erros no CNIS (cadastro do INSS)

**Dica:** Antes de pedir, confira o seu CNIS (extrato de contribuições) no Meu INSS e corrija vínculos e salários que estiverem faltando. Em caso de dúvida, peça orientação a um advogado que atue em Direito Previdenciário ou à Defensoria Pública da União.`,
    area: 'previdenciario',
    keywords: ['tempo aposentadoria INSS', 'demora aposentadoria', 'prazo aposentadoria', 'quanto tempo INSS'],
    relatedQuestions: ['prev-2', 'prev-3', 'prev-4'],
    metaDescription: 'Quanto tempo demora a aposentadoria do INSS? Veja o que a lei prevê (45 dias para o primeiro pagamento), os prazos de análise e o que fazer se houver demora.'
  },
  {
    id: 'prev-2',
    slug: 'inss-negou-beneficio-o-que-fazer',
    question: 'O INSS negou meu benefício. O que fazer?',
    answer: `Se o INSS negou seu benefício, você tem opções para reverter a decisão:

**Opção 1 - Recurso administrativo:**
- Prazo: 30 dias contados da ciência da decisão (Decreto 3.048/1999, art. 305, §1º)
- Gratuito, feito pelo Meu INSS ou pela Central 135, sem obrigação de advogado
- Julgado pelo CRPS (Conselho de Recursos da Previdência Social)
- Não há prazo curto garantido para o julgamento; acompanhe pelo Meu INSS

**Opção 2 - Ação judicial:**
- Não é preciso esgotar o recurso administrativo: basta ter feito o pedido ao INSS (STF, RE 631.240)
- Causas de até 60 salários mínimos vão ao Juizado Especial Federal, onde não é obrigatório advogado no 1º grau (Lei 10.259/2001)
- Quem não pode pagar advogado pode procurar a Defensoria Pública da União (dpu.def.br)
- Os atrasados são pagos com correção e juros

**Prazo para agir:** O direito ao benefício em si não se perde com o tempo, mas as parcelas atrasadas há mais de 5 anos prescrevem (Lei 8.213/1991, art. 103, parágrafo único). Por isso, não deixe para depois.

**Passo a passo:**
1. Leia atentamente o motivo da negativa (na carta de indeferimento, no Meu INSS)
2. Reúna documentos que comprovem seu direito
3. Avalie se vale recurso ou ação judicial
4. Procure orientação de um advogado previdenciário ou da Defensoria

**Motivos comuns de negativa:**
- Tempo de contribuição insuficiente
- Documentação incompleta
- Perícia médica desfavorável
- Erros no CNIS

**Importante:** Não desista! Muitos benefícios negados são concedidos após recurso ou ação, quando a prova é completada.`,
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
- ✅ Aposentadoria especial, desde que fora de atividade com exposição a agentes nocivos

**Não pode trabalhar (ou perde o benefício se voltar):**
- ❌ Aposentadoria por incapacidade permanente (antiga invalidez): a volta voluntária ao trabalho leva ao cancelamento (Lei 8.213/1991, art. 46)
- ❌ Auxílio por incapacidade temporária (auxílio-doença): quem volta a trabalhar pode ter o benefício cancelado (art. 60, §6º)
- ❌ BPC/LOAS da pessoa com deficiência: o benefício é suspenso quando ela passa a trabalhar, podendo haver direito ao auxílio-inclusão (Lei 8.742/1993, arts. 21-A e 26-A)

**Aposentadoria especial:**
- Pode trabalhar em atividade NÃO especial
- Se continuar ou voltar à atividade especial, o benefício é cessado (STF, Tema 709)

**Consequências de trabalhar aposentado:**
- Continua contribuindo para o INSS
- Por essa nova atividade, a lei só garante salário-família e reabilitação profissional (Lei 8.213/1991, art. 18, §2º)
- Não dá direito a nova aposentadoria nem a recalcular a atual: o STF decidiu que não existe "desaposentação" ou "reaposentação" sem lei (Tema 503)

**Aposentadoria por incapacidade:**
- Se trabalhar, pode perder o benefício
- O INSS pode entender como recuperação da capacidade
- Avalie com cuidado antes de retornar

**Dica:** Consulte um advogado antes de retornar ao trabalho se recebe benefício por incapacidade ou BPC.`,
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

**Documentos aceitos (início de prova material):**
- Certidão de casamento ou de nascimento com profissão "lavrador/agricultor"
- Contratos de arrendamento, parceria ou comodato rural
- Notas fiscais de venda de produtos agrícolas
- Bloco de notas de produtor rural
- Documentos do imóvel rural (ITR, CCIR, escritura)
- Histórico escolar de zona rural
- Comprovantes de financiamento rural (Pronaf)
- DAP ou CAF (Cadastro Nacional da Agricultura Familiar, que substituiu a DAP)
- Ficha de filiação a sindicato rural, como indício, junto com outros documentos

**Mudança importante:**
Desde a Lei 13.846/2019, a declaração do sindicato deixou de ser documento suficiente por si só. O segurado especial preenche uma autodeclaração, que o INSS confere com bases oficiais (como o CNIS) e com os documentos apresentados.

**Testemunhas:**
- Vizinhos, ex-patrões, compradores de produtos
- Devem conhecer o trabalho realizado
- Servem para completar os documentos (no processo judicial, são ouvidas em audiência)

**Início de prova material:**
- O INSS e a Justiça exigem ao menos um documento da época
- Testemunhas sozinhas não bastam (Súmula 149 do STJ)
- Documento pode ser de familiar (pai, cônjuge), no regime de economia familiar
- O tempo anterior ao documento mais antigo pode ser reconhecido se houver prova testemunhal convincente (Súmula 577 do STJ)

**Aposentadoria rural por idade:**
- 15 anos (180 meses) de atividade rural, mesmo que descontínua, no período imediatamente anterior ao pedido
- Homem: 60 anos / Mulher: 55 anos

**Dica:** Quanto mais documentos diversos, de anos diferentes, maior a chance de aprovação.`,
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
    answer: `O inventário é o procedimento para levantar os bens e as dívidas de quem faleceu e transferir o patrimônio aos herdeiros.

**Tipos de inventário:**

**Extrajudicial (em cartório):**
- Feito por escritura pública em Tabelionato de Notas, sempre com advogado ou defensor público (CPC, art. 610, §2º)
- Todos os herdeiros precisam estar de acordo
- Desde a Resolução CNJ 571/2024, é possível mesmo com herdeiro menor ou incapaz, se a parte dele for paga em fração ideal de cada bem e houver manifestação favorável do Ministério Público
- Custo: emolumentos do cartório (tabela oficial do estado) + imposto de herança + honorários

**Judicial:**
- Necessário quando há conflito entre herdeiros ou quando não se cumprem os requisitos do cartório
- Pode ser consensual (arrolamento) ou litigioso
- O tempo varia muito conforme o número de herdeiros, os bens e as disputas

**Etapas do inventário:**
1. Nomeação de inventariante
2. Levantamento de bens e dívidas
3. Citação de herdeiros e credores (no judicial)
4. Pagamento de dívidas e do imposto de herança (ITCMD; na Bahia, chamado de ITD)
5. Partilha dos bens
6. Registro da partilha (imóveis no Registro de Imóveis, veículos no Detran)

**Custos principais:**
- Imposto de herança: alíquota definida por lei de cada estado, com teto de 8% fixado pelo Senado (Resolução 9/1992)
- Custas judiciais ou emolumentos de cartório
- Honorários advocatícios, combinados por escrito e observando a tabela da OAB do estado

**Prazo para abrir:** 2 meses (60 dias) a contar do óbito, pelo CPC (art. 611). O atraso pode gerar multa no imposto, conforme a lei de cada estado.`,
    area: 'civil',
    keywords: ['inventário', 'como funciona inventário', 'herança', 'partilha de bens', 'inventário extrajudicial'],
    relatedQuestions: ['civil-2', 'civil-3', 'civil-4'],
    metaDescription: 'Saiba como funciona o inventário: tipos (judicial e extrajudicial), etapas, custos e prazos para transferir bens aos herdeiros.'
  },
  {
    id: 'civil-2',
    slug: 'prazo-para-abrir-inventario',
    question: 'Qual o prazo para abrir inventário?',
    answer: `O prazo legal para abrir inventário é de **2 meses (60 dias)** a contar do falecimento, e ele deve terminar nos 12 meses seguintes (CPC, art. 611). O juiz pode prorrogar esses prazos.

**Consequências do atraso:**
- Multa sobre o imposto de herança (ITCMD; na Bahia, chamado de ITD)
- O percentual e a forma de cobrança dependem da lei de cada estado
- Alguns estados têm multa progressiva

**Exemplo:**
- São Paulo (Lei estadual 10.705/2000): multa de 10% do imposto se o inventário não for aberto em 60 dias; 20% se o atraso passar de 180 dias
- Nos demais estados, consulte a Secretaria da Fazenda; na Bahia, a SEFAZ-BA

**Quando o prazo pode ser estendido:**
- O juiz pode prorrogar os prazos, de ofício ou a pedido (CPC, art. 611)
- Justificativa válida (bens no exterior, muitos herdeiros, documentos difíceis de obter)

**Dicas para não atrasar:**
- Reúna documentos do falecido o quanto antes
- Certidão de óbito é o primeiro documento necessário
- Levante lista de bens e dívidas
- Consulte advogado para definir se será judicial ou extrajudicial

**Importante:** Enquanto não houver partilha, nenhum herdeiro pode vender sozinho um bem específico da herança sem autorização do juiz (Código Civil, art. 1.793, §3º). O que pode ser negociado é a cessão de direitos hereditários, por escritura pública.`,
    area: 'civil',
    keywords: ['prazo inventário', 'multa inventário atrasado', 'quando abrir inventário', 'inventário tardio'],
    relatedQuestions: ['civil-1', 'civil-3', 'civil-4'],
    metaDescription: 'Saiba o prazo de 2 meses (60 dias) para abrir inventário (CPC, art. 611), as multas por atraso no imposto de herança e como evitar problemas.'
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
    answer: `O testamento é o documento que define como seus bens serão distribuídos após sua morte, dentro dos limites da lei.

**Tipos de testamento:**

**1. Público:**
- Feito em cartório, pelo tabelião, e lido na presença de 2 testemunhas (Código Civil, art. 1.864)
- Mais seguro e difícil de contestar
- Fica arquivado no cartório
- Custo: emolumentos fixados pela tabela oficial do estado (consulte o cartório)

**2. Cerrado:**
- Escrito pelo testador ou por outra pessoa a seu pedido
- Entregue lacrado ao tabelião, na presença de 2 testemunhas (art. 1.868)
- Só é aberto após a morte, pelo juiz

**3. Particular:**
- Escrito pelo próprio testador, à mão ou digitado
- Lido e assinado na presença de pelo menos 3 testemunhas, que também assinam (art. 1.876)
- Mais fácil de contestar
- Sem custo de cartório, mas arriscado

**Regras importantes:**
- Havendo herdeiros necessários, só pode dispor de 50% dos bens; a outra metade (a legítima) é deles (arts. 1.789 e 1.846)
- Herdeiros necessários: descendentes (filhos, netos), ascendentes (pais, avós) e cônjuge (art. 1.845)
- Pode ser alterado ou revogado a qualquer momento
- O testador deve estar em plena capacidade mental e ter 16 anos ou mais (art. 1.860)

**O que pode incluir:**
- Distribuição de bens
- Nomeação de tutor para filhos menores
- Reconhecimento de filho
- Doações a instituições

**Dica:** Mesmo com testamento, haverá inventário. O testamento orienta a partilha e precisa ser aberto e mandado cumprir pela Justiça.`,
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
    answer: `**Sim, em regra.** A negativação indevida costuma gerar direito a indenização por dano moral. Para o STJ, nesses casos o dano é presumido (não é preciso provar o sofrimento), salvo exceções.

**O que é negativação indevida:**
- Dívida que você não fez (fraude)
- Dívida já paga mas não baixada
- Valor cobrado maior que o devido
- Dívida prescrita ou registrada por mais de 5 anos
- Inclusão sem aviso prévio por escrito (Súmula 359 do STJ)

**Quanto vale a indenização:**
- Não existe tabela nem valor garantido
- O juiz fixa o valor caso a caso, considerando o tempo da negativação, o prejuízo comprovado (crédito negado, constrangimento) e a conduta da empresa
- Também é possível pedir o cancelamento da dívida e a devolução de valores pagos indevidamente

**Como provar:**
- Extrato do SPC/Serasa/Boa Vista mostrando a negativação
- Comprovantes de pagamento (se dívida paga)
- Boletim de ocorrência (se fraude)
- Protocolo de reclamação à empresa

**Passo a passo:**
1. Tire extrato atualizado do SPC/Serasa
2. Reúna provas da irregularidade
3. Notifique a empresa responsável e peça a exclusão
4. Se não resolver, registre no Procon ou no consumidor.gov.br
5. Ação judicial: no Juizado Especial Cível (até 40 salários mínimos, sem custas no 1º grau; até 20, sem advogado)

**Importante:** Se você já tinha outras dívidas legítimas negativadas antes, não cabe dano moral, apenas o cancelamento da anotação indevida (Súmula 385 do STJ).`,
    area: 'consumidor',
    keywords: ['negativação indevida', 'nome sujo indenização', 'SPC Serasa indevido', 'dano moral negativação'],
    relatedQuestions: ['cons-2', 'cons-3', 'cons-4'],
    metaDescription: 'Nome negativado indevidamente dá indenização? Em regra, sim, mas sem valor tabelado. Veja o que é negativação indevida, provas e passo a passo para agir.'
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
    answer: `**Sim!** O direito de arrependimento é garantido pelo Código de Defesa do Consumidor (art. 49).

**Regras do direito de arrependimento:**
- Prazo: **7 dias** corridos
- Conta do recebimento do produto ou da assinatura do contrato
- Não precisa justificar o motivo
- Vale para compras fora da loja física: online, telefone, catálogo, porta em porta

**O que você tem direito:**
- Devolução imediata de tudo o que pagou, com correção monetária (art. 49, parágrafo único)
- Frete de envio e de devolução por conta do vendedor
- No cartão de crédito, o vendedor deve avisar a administradora na hora, para não lançar a compra ou fazer o estorno (Decreto 7.962/2013, art. 5º, §3º)

**Situações com regra própria ou discutidas:**
- Compras em loja física: não há direito de arrependimento por lei (a troca depende da política da loja, salvo defeito)
- Produtos personalizados, perecíveis já abertos e conteúdo digital já baixado: há discussão na Justiça, e cada caso é analisado
- Passagens aéreas: regra da ANAC, com desistência sem custo em até 24 horas do comprovante, para compras feitas com 7 dias ou mais de antecedência do voo

**Como exercer:**
1. Entre em contato com a loja em até 7 dias
2. Solicite a devolução por escrito (guarde protocolo)
3. A loja deve confirmar imediatamente o recebimento do seu pedido (Decreto 7.962/2013, art. 5º, §4º)
4. Devolva o produto conforme a orientação da loja e acompanhe o reembolso

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
- Compras fora da loja dentro de 7 dias (direito de arrependimento, CDC, art. 49)
- Serviço não prestado ou produto não entregue
- Descumprimento do contrato pela empresa
- Cobrança que coloque o consumidor em desvantagem exagerada (CDC, art. 51, IV)

**Taxa de cancelamento pode ser cobrada:**
- Contratos com fidelidade, quando o consumidor recebeu um benefício em troca (desconto, aparelho)
- Após o prazo de 7 dias em compras à distância, se o contrato prever
- Quando há custos reais para a empresa
- Passagens aéreas, dentro dos limites da ANAC

**Limites para taxa de cancelamento:**
- Deve ser proporcional ao prejuízo real ou ao benefício recebido e ao tempo que falta
- Não pode ser valor fixo sem relação com custos
- O contrato deve prever claramente a taxa, com destaque (CDC, art. 54, §4º)
- A lei não fixa um percentual máximo único: o abuso é analisado caso a caso pelo Procon ou pelo juiz

**Passagens aéreas (Resolução ANAC 400/2016):**
- Desistência sem custo em até 24 horas do recebimento do comprovante, se a compra foi feita com 7 dias ou mais de antecedência do voo (art. 11)
- Fora disso, pode haver multa prevista no contrato, que não pode ultrapassar o valor dos serviços de transporte aéreo (art. 9º)
- As tarifas aeroportuárias (taxa de embarque) não entram no cálculo da multa e devem ser devolvidas no reembolso (arts. 9º e 29)

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
    answer: `O cancelamento de voo gera direitos importantes para o passageiro, conforme a Resolução ANAC 400/2016 e o Código de Defesa do Consumidor:

**Assistência material (conforme o tempo de espera — art. 27):**
- **Mais de 1 hora:** facilidades de comunicação (internet, telefone)
- **Mais de 2 horas:** alimentação (refeição ou voucher)
- **Mais de 4 horas:** hospedagem, se houver pernoite, e transporte de ida e volta

**Opções que a companhia deve oferecer (a escolha é sua — art. 21):**
1. **Reacomodação:** no primeiro voo disponível, próprio ou de outra empresa, ou em data e horário de sua conveniência
2. **Reembolso integral:** em até 7 dias da solicitação (art. 29)
3. **Execução por outro meio:** ônibus, por exemplo

**Aviso prévio de mudanças:**
- Alterações programadas devem ser informadas com pelo menos 72 horas de antecedência (art. 12)
- Se o aviso vier depois disso, você pode escolher entre reacomodação e reembolso integral

**Indenização por danos morais:**
- Não é automática: o STJ entende que, em atraso e cancelamento de voo, o dano moral precisa ser demonstrado no caso concreto
- Contam a duração da espera, a falta de assistência, a perda de compromisso e o tratamento recebido
- Não existe valor tabelado; quem fixa é o juiz

**Como proceder:**
1. Exija o cumprimento dos direitos no aeroporto
2. Peça por escrito o motivo do cancelamento (art. 20, §2º)
3. Guarde todos os comprovantes (cartão de embarque, recibos)
4. Reclame na plataforma Anac Passageiro (gov.br/anac) e, se não resolver, procure o Procon ou um advogado

**Prazo para entrar na Justiça:** Voos nacionais, 5 anos (CDC, art. 27). Voos internacionais: 2 anos para danos materiais (Convenção de Montreal, conforme o STF) e 5 anos para danos morais (STF, Tema 1.240).`,
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
2. Faça o protesto (registro do extravio), como o RIB (Registro de Irregularidade de Bagagem): a ANAC exige que ele seja feito de imediato (Resolução 400/2016, art. 32, §1º)
3. Anote o número do protocolo

**Prazos para a companhia devolver a mala (art. 32, §2º):**
- **Voos nacionais:** até 7 dias
- **Voos internacionais:** até 21 dias
- **Se não localizar nesses prazos:** a empresa deve indenizar em até 7 dias (art. 32, §3º)

**Seus direitos imediatos:**
- Ressarcimento de despesas com itens essenciais, se você estiver fora do seu domicílio (art. 33)
- Roupas, higiene pessoal, medicamentos
- Guarde todas as notas fiscais: o ressarcimento deve ser feito em até 7 dias da entrega dos comprovantes

**Se a bagagem não for localizada:**
- Indenização pelo valor do conteúdo, dentro dos limites aplicáveis
- Em voos internacionais, a Convenção de Montreal limita a indenização material por passageiro, em DES (moeda de referência do FMI), com valor revisado periodicamente; a declaração especial de valor no check-in aumenta esse limite
- Comprovação do conteúdo (fotos, notas)
- Danos morais podem ser pedidos se houve prejuízo significativo; não há valor tabelado

**Avaria ou violação da mala:**
- Faça o protesto em até 7 dias do recebimento (art. 32, §4º)
- A empresa deve reparar, substituir ou indenizar em até 7 dias do protesto (art. 32, §5º)

**Prazo para a ação judicial:** Voos nacionais, 5 anos (CDC). Voos internacionais: 2 anos para danos materiais (Convenção de Montreal) e 5 anos para danos morais (STF, Tema 1.240).`,
    area: 'consumidor',
    keywords: ['bagagem extraviada', 'mala perdida', 'extravio bagagem', 'indenização bagagem', 'companhia aérea'],
    relatedQuestions: ['cons-5', 'cons-4', 'cons-1'],
    metaDescription: 'Saiba o que fazer quando sua bagagem é extraviada: prazos, direitos, indenização e como proceder para recuperar ou ser ressarcido.'
  },
  {
    id: 'cons-7',
    slug: 'operadora-cobranca-servico-nao-contratado',
    question: 'A operadora está me cobrando por serviço que não contratei. O que fazer?',
    answer: `A cobrança por serviço não contratado é prática abusiva (CDC, art. 39, III). Veja como resolver:

**Passo 1 - Conteste na operadora:**
- Ligue para o SAC e anote o número do protocolo
- Conteste também por escrito (e-mail, chat ou app), para ter prova
- Peça o cancelamento do serviço e a devolução do que foi cobrado

**Passo 2 - Reclame na ANATEL:**
- Telefone: 1331 (gratuito, dias úteis, das 8h às 20h)
- Site: Anatel Consumidor (apps.anatel.gov.br/AnatelConsumidor)
- É preciso informar o protocolo da operadora
- A operadora tem 10 dias corridos para responder pela Anatel

**Passo 3 - Registre no Consumidor.gov.br:**
- Site governamental gratuito
- A empresa participante tem até 10 dias para responder

**Seus direitos:**
- **Devolução em dobro** do valor pago indevidamente (CDC, art. 42, parágrafo único)
- Cancelamento imediato do serviço
- Indenização por danos morais, conforme o caso (por exemplo, se houve negativação indevida)

**Se não resolver:**
- Procon da sua cidade ou Procon-BA
- Juizado Especial Cível (sem custas no 1º grau até 40 salários mínimos; até 20, sem advogado)
- Ação com advogado para casos maiores

**Prazo:** Para pedir de volta valores de serviços de telefonia não contratados, o STJ fixou o prazo de 10 anos (EAREsp 738.991). Mesmo assim, reclame logo.

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
    answer: `Sim. A operadora deve entregar o serviço como foi ofertado e contratado: a oferta obriga a empresa (CDC, arts. 30 e 35), e serviço prestado abaixo do prometido é vício de qualidade (art. 20).

**Sobre os "percentuais mínimos":**
- Regras antigas da Anatel falavam em percentuais mínimos de velocidade instantânea e média
- Essas regras foram substituídas pelo Regulamento de Qualidade (RQUAL, Resolução Anatel 717/2019) e pelo novo Regulamento de Direitos do Consumidor (Resolução Anatel 765/2023)
- Por isso, desconfie de percentuais repetidos na internet e guie-se pelo que consta na oferta e no seu contrato

**Como medir:**
1. Use o Brasil Banda Larga (brasilbandalarga.com.br), mantido pela entidade criada para cumprir o regulamento de qualidade da Anatel; os resultados são enviados à Anatel
2. Faça várias medições, em dias e horários diferentes
3. Teste por cabo, com outros aparelhos desligados
4. Salve os relatórios e prints como prova

**Se a velocidade estiver abaixo do contratado:**
1. Reclame na operadora e anote o protocolo
2. Se não resolver: Anatel (1331 ou Anatel Consumidor), informando o protocolo
3. Procon ou consumidor.gov.br

**Seus direitos (CDC, art. 20):**
- Correção do serviço
- Abatimento proporcional do preço
- Rescisão do contrato com devolução do que pagou a mais; a multa de fidelidade não se justifica quando quem descumpriu foi a operadora
- Indenização se houve prejuízo comprovado

**Dicas importantes:**
- Verifique se não há problema no seu roteador ou na rede Wi-Fi
- Documente tudo com prints e datas
- Guarde a oferta (print do anúncio ou do contrato) com a velocidade prometida

**Prazo para reclamação:** Reclame assim que identificar o problema; quanto antes, mais fácil provar.`,
    area: 'consumidor',
    keywords: ['internet lenta', 'velocidade internet', 'operadora internet', 'banda larga'],
    relatedQuestions: ['cons-7', 'cons-1', 'cons-4'],
    metaDescription: 'Internet abaixo da velocidade contratada? Veja como medir com o Brasil Banda Larga, reclamar na operadora e na Anatel (1331) e quais são seus direitos pelo CDC.'
  },
  {
    id: 'cons-9',
    slug: 'contrato-fidelidade-multa-cancelamento',
    question: 'Posso cancelar contrato de fidelidade antes do prazo?',
    answer: `Sim, você pode cancelar a qualquer momento. A questão é se haverá multa:

**Quando NÃO pode haver multa:**
- Serviço diferente do contratado ou com falhas
- Problemas recorrentes não resolvidos
- Descumprimento do contrato pela empresa (por exemplo, aumento fora do que foi combinado)
- Mudança para local sem cobertura da empresa (situação analisada caso a caso)
- Falecimento do titular

**Quando a multa é permitida:**
- Cancelamento por conveniência do consumidor
- Dentro do prazo de fidelidade
- Desde que você tenha recebido um benefício em troca da fidelidade (desconto, aparelho)

**Cálculo da multa:**
- Deve ser proporcional ao benefício recebido e ao tempo que falta para acabar a fidelidade
- Exemplo: fidelidade de 12 meses, cancelamento no 6º mês = no máximo metade da multa cheia prevista
- Não pode ser valor fixo desproporcional

**Limites para a multa:**
- A lei não fixa um percentual único: o que vale é a proporcionalidade
- Multa desproporcional pode ser considerada abusiva (CDC, art. 51, IV)
- Pode ser contestada no Procon ou na Justiça

**Como cancelar:**
1. Peça o cancelamento por escrito (e-mail ou app, com confirmação) e anote o protocolo
2. Peça o cálculo detalhado da multa
3. Questione o valor se parecer abusivo
4. Reclame na ANATEL (1331) ou no Procon se necessário

**Dica:** Academias, planos de telefonia e TV são os casos mais comuns. Guarde o protocolo do pedido de cancelamento: cobranças feitas depois dele podem ser contestadas.`,
    area: 'consumidor',
    keywords: ['fidelidade', 'multa cancelamento', 'cancelar contrato', 'contrato abusivo'],
    relatedQuestions: ['cons-4', 'cons-7', 'cons-1'],
    metaDescription: 'Saiba se pode cancelar contrato de fidelidade antes do prazo: quando há multa, como calcular e quando contestar valores abusivos.'
  },
  {
    id: 'cons-10',
    slug: 'juros-abusivos-emprestimo-banco',
    question: 'Como saber se os juros do meu empréstimo são abusivos?',
    answer: `Os juros podem ser considerados abusivos quando estão muito acima da média de mercado para aquele tipo de operação, segundo o entendimento do STJ. Veja como identificar:

**Sinais de juros abusivos:**
- Taxa muito superior à média divulgada pelo Banco Central para a mesma modalidade e época
- CET (Custo Efetivo Total) não informado
- Taxas ocultas no contrato
- Seguros e tarifas embutidos sem você ter escolhido (venda casada)

**Como verificar:**
1. Consulte as taxas médias de juros por modalidade no site do Banco Central (bcb.gov.br)
2. Compare com a taxa do seu contrato, na mesma época da contratação
3. Verifique o CET (inclui todos os custos)

**Limites fixados por norma:**
- Cheque especial: juros limitados a 8% ao mês (Resolução CMN 4.765/2019)
- Cartão de crédito (rotativo e parcelamento da fatura): juros e encargos não podem ultrapassar o valor original da dívida (Lei 14.690/2023)
- Consignado do INSS: tem teto de juros definido pelo Conselho Nacional de Previdência Social (o valor muda; confira o atual em gov.br)

**O que fazer se for abusivo:**
1. Tente renegociar com o banco (você pode quitar antes, com redução proporcional dos juros, CDC, art. 52, §2º)
2. Reclame no Banco Central (site bcb.gov.br, "Meu BC", reclamação contra bancos)
3. Registre no Consumidor.gov.br
4. Ação judicial para revisão de contrato

**Dica:** No Registrato, sistema do Banco Central com acesso pela conta gov.br, você vê todos os empréstimos e financiamentos em seu nome.

**Revisão judicial pode:**
- Reduzir juros ao patamar médio de mercado
- Devolver valores pagos a mais
- Recalcular todo o contrato

**Prazo:** Em regra, o STJ aplica o prazo de 10 anos (Código Civil, art. 205) para pedidos ligados ao contrato bancário; o caso concreto deve ser analisado.`,
    area: 'consumidor',
    keywords: ['juros abusivos', 'empréstimo juros', 'taxa abusiva', 'revisão contrato banco'],
    relatedQuestions: ['cons-11', 'cons-1', 'cons-2'],
    metaDescription: 'Saiba como identificar juros abusivos em empréstimos: sinais, como verificar e o que fazer para revisar o contrato.'
  },
  {
    id: 'cons-11',
    slug: 'garantia-produto-prazo-legal',
    question: 'Qual é o prazo de garantia legal de um produto?',
    answer: `A garantia legal é determinada pelo Código de Defesa do Consumidor (art. 26) e não pode ser afastada:

**Prazos de garantia LEGAL:**
- **Produtos não duráveis:** 30 dias (alimentos, cosméticos)
- **Produtos duráveis:** 90 dias (eletrônicos, móveis, roupas)

**Início da contagem:**
- Defeito aparente: a partir da entrega do produto
- Vício oculto: a partir do momento em que o defeito aparece (art. 26, §3º)

**Garantia contratual (fabricante ou loja):**
- É ADICIONAL à garantia legal (CDC, art. 50)
- Segundo o entendimento do STJ, os prazos se somam: os 30 ou 90 dias da garantia legal começam a contar depois que termina a garantia contratual
- Exemplo: garantia de 1 ano do fabricante + 90 dias da garantia legal
- O termo de garantia deve ser entregue preenchido, explicando o que cobre e como acionar (art. 50, parágrafo único)

**O que está coberto:**
- Defeitos de fabricação
- Problemas não causados pelo consumidor
- Vícios que tornem o produto impróprio para uso ou diminuam seu valor

**Prazos para a loja/fabricante resolver:**
- 30 dias para reparar o defeito (art. 18, §1º)
- Se não resolver, você pode exigir:
  - Troca por produto novo
  - Devolução do valor pago
  - Abatimento proporcional do preço
- Produto essencial ou defeito que compromete o produto: pode exigir a solução imediata (art. 18, §3º)

**Dica:** Guarde sempre a nota fiscal e registre reclamações por escrito. A reclamação comprovada feita ao fornecedor suspende o prazo até a resposta negativa (art. 26, §2º, I).`,
    area: 'consumidor',
    keywords: ['garantia legal', 'prazo garantia', 'defeito produto', 'CDC garantia'],
    relatedQuestions: ['cons-12', 'cons-4', 'cons-1'],
    metaDescription: 'Entenda o prazo de garantia legal: 30 dias para não duráveis e 90 dias para duráveis, e como ela se soma à garantia do fabricante, segundo o STJ.'
  },
  {
    id: 'cons-12',
    slug: 'compra-online-produto-nao-chegou',
    question: 'Comprei online e o produto não chegou. O que fazer?',
    answer: `O não recebimento de produto comprado online é uma das reclamações mais comuns. Veja como resolver:

**Passo a passo:**

**1. Contate o vendedor:**
- E-mail, chat ou app (guarde prints)
- Exija a entrega, um produto equivalente ou o cancelamento com devolução do dinheiro: a escolha é sua (CDC, art. 35)
- Anote número de protocolo

**2. Se não resolver:**
- Registre no Consumidor.gov.br
- Acione o Procon da sua cidade ou o Procon-BA
- O Reclame Aqui pode ajudar, mas não é órgão oficial

**3. Marketplace também pode responder:**
- Plataformas que participam da venda podem responder junto com o vendedor, conforme o caso (cadeia de fornecimento, CDC, art. 7º, parágrafo único)
- Reclame na plataforma E no vendedor

**Seus direitos:**
- **Reembolso integral:** incluindo frete, com correção
- **Novo envio:** às custas do vendedor
- **Danos morais:** apenas se houve prejuízo significativo, analisado caso a caso

**Se pagou no cartão de crédito:**
- Conteste a compra com o banco emissor do cartão (contestação ou chargeback)
- O prazo depende das regras do cartão; faça o quanto antes
- Pode ser feito pelo app do cartão

**No Juizado Especial Cível:**
- Até 20 salários mínimos: sem advogado
- De 20 a 40 salários mínimos: com advogado
- Sem custas no 1º grau em causas de até 40 salários mínimos (Lei 9.099/1995, art. 54)
- A data da audiência depende da pauta de cada unidade

**Prazo para reclamar:** Não deixe para depois. Guarde a data da compra e a da entrega prometida; os prazos variam conforme o pedido (cancelamento, devolução ou indenização).`,
    area: 'consumidor',
    keywords: ['compra online', 'produto não chegou', 'não recebi produto', 'e-commerce fraude'],
    relatedQuestions: ['cons-3', 'cons-11', 'cons-1'],
    metaDescription: 'Saiba o que fazer quando o produto comprado online não chega: passo a passo para reclamar, pedir reembolso e acionar a Justiça.'
  },
  {
    id: 'cons-13',
    slug: 'plano-saude-negou-cirurgia',
    question: 'O plano de saúde negou minha cirurgia ou tratamento. O que fazer?',
    answer: `A negativa de procedimentos pelo plano de saúde é comum e, muitas vezes, ilegal. Veja como agir:

**Quando a negativa é ILEGAL:**
- Procedimento está no rol da ANS e foi indicado pelo médico
- Urgência ou emergência (cobertura obrigatória depois de 24 horas de contrato)
- Continuidade de tratamento já iniciado
- Alegação de doença preexistente depois de 24 meses de contrato (Lei 9.656/1998, art. 11)
- Fora do rol, quando preenchidos os 5 requisitos fixados pelo STF em setembro de 2025 (ADI 7.265): prescrição do médico ou dentista assistente; ausência de negativa expressa da ANS ou de análise pendente para inclusão no rol; falta de alternativa adequada no rol; comprovação científica de eficácia e segurança; e registro na Anvisa

**Passo a passo para resolver:**

**1. Exija a resposta e a negativa por escrito:**
- Pela RN ANS 623/2024 (em vigor desde 1º/07/2025), urgência e emergência exigem resposta imediata
- Nos demais casos, a resposta deve vir em até 5 dias úteis, ou em até 10 dias úteis em alguns procedimentos eletivos, como os de alta complexidade e as internações eletivas, sem passar dos prazos máximos de atendimento da ANS
- Se negar, a operadora deve entregar a negativa por escrito, com o motivo em linguagem clara, e informar como pedir reanálise

**2. Reclame na ANS:**
- Disque ANS: 0800 701 9656
- Site: gov.br/ans (formulário eletrônico)
- A reclamação abre uma NIP: em questões de cobertura, a operadora tem até 5 dias úteis para resolver

**3. Pedido urgente na Justiça:**
- Em casos urgentes, é possível pedir tutela de urgência (liminar)
- O tempo de análise depende de cada juízo e de cada caso
- Procure advogado ou Defensoria Pública

**Indenização por danos morais:**
- A negativa indevida pode gerar indenização, conforme as circunstâncias
- Não existe valor tabelado; quem fixa é o juiz

**Documentos importantes:**
- Relatório médico detalhado (com CID e urgência)
- Pedido médico do procedimento
- Negativa por escrito do plano
- Contrato e carteirinha do plano de saúde

**Prazo:** Aja rápido em casos urgentes; nos demais, procure orientação sem demora.`,
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

**1. Reajuste anual (variação de custos):**
- Planos individuais e familiares: limitado ao índice máximo autorizado pela ANS a cada ano
- Planos coletivos (empresariais e por adesão): negociado entre operadora e contratante, sem teto da ANS, mas deve ser justificado e informado com clareza
- Só pode ser aplicado uma vez a cada 12 meses, no aniversário do contrato

**2. Reajuste por faixa etária:**
- Contratos a partir de 2004 (RN ANS 63/2003): 10 faixas, a última aos 59 anos ou mais
- O valor da última faixa não pode ser mais de 6 vezes o da primeira
- Depois dos 59 anos, não há novo reajuste por idade nesses contratos
- O Estatuto da Pessoa Idosa proíbe cobrar valores diferentes da pessoa idosa em razão da idade (Lei 10.741/2003, art. 15, §3º)

**Quando o reajuste é ABUSIVO:**
- Acima do índice autorizado pela ANS (planos individuais)
- Sem justificativa ou com percentual desarrazoado (planos coletivos)
- Por faixa etária sem previsão no contrato, fora das normas da ANS ou com percentual desarrazoado (STJ, Tema 952)
- Reajuste por idade aplicado a quem já tem 60 anos ou mais, em desacordo com o Estatuto da Pessoa Idosa

**Como contestar:**
1. Questione por escrito na operadora e peça a memória de cálculo
2. Reclame na ANS (0800 701 9656)
3. Procon ou Consumidor.gov.br
4. Ação judicial para revisar

**Na Justiça:**
- Pedido de liminar para suspender o reajuste, conforme o caso
- Devolução do que foi pago a mais nos últimos 3 anos (STJ, Tema 610)
- Danos morais apenas em casos excepcionais

**Dica:** Compare seu reajuste com o índice que a ANS divulga todos os anos para planos individuais (gov.br/ans).`,
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
- Permanecer em silêncio, sem que isso seja usado contra você (Constituição, art. 5º, LXIII)
- Não produzir provas contra si mesmo
- Ser acompanhado por advogado
- Saber do que está sendo acusado
- Comunicar familiar sobre sua presença

**Por que levar advogado:**
- Garante que seus direitos sejam respeitados
- Orienta sobre o que falar ou não falar
- Evita que você assine algo prejudicial
- Pode acompanhar o depoimento do investigado, apresentar razões e fazer requerimentos (Lei 8.906/1994, art. 7º, XXI)
- Pode requerer providências imediatas

**Quando é especialmente importante:**
- Se você é suspeito ou indiciado
- Em casos de flagrante
- Quando não entende a situação
- Se está sendo pressionado

**Se não puder pagar advogado:**
- Você tem direito à Defensoria Pública, gratuitamente
- Pode pedir que a delegacia comunique a Defensoria
- Na Bahia: Disque Defensoria 129 (defensoria.ba.def.br)

**Importante:** Você pode ficar em silêncio, mas não minta. Se você for ouvido como testemunha, mentir é crime de falso testemunho (Código Penal, art. 342). Como investigado, acusar falsamente outra pessoa pode configurar denunciação caluniosa (art. 339).`,
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
- Não é condenação e não gera antecedentes criminais
- Se for citado indevidamente em alguma certidão, você pode pedir a correção ao órgão que a emitiu

**Processo sem condenação:**
- Absolvição ou extinção do processo: não gera antecedentes
- Processo em andamento: pode aparecer em certidões do distribuidor até o fim

**Condenação criminal:**
- Durante o cumprimento da pena: consta como antecedente
- Depois de cumprida ou extinta a pena, a condenação não deve constar de certidões e atestados comuns, salvo para instruir novo processo criminal ou nos casos previstos em lei (Lei de Execução Penal, art. 202)
- Para efeito de reincidência, a condenação deixa de contar depois de 5 anos do cumprimento ou da extinção da pena (Código Penal, art. 64, I)

**Reabilitação criminal:**
- Pode ser pedida 2 anos depois do dia em que a pena foi extinta ou terminou de ser cumprida (Código Penal, art. 94)
- Exige domicílio no país, bom comportamento e reparação do dano (ou prova de que não foi possível reparar)
- Precisa de pedido ao juiz
- Garante sigilo sobre o processo e a condenação (art. 93)

**Termo circunstanciado (JECrim):**
- Transação penal: não gera antecedentes nem reincidência; fica registrada apenas para impedir novo benefício em 5 anos (Lei 9.099/1995, art. 76, §§4º e 6º)
- Suspensão condicional do processo: cumprido o período de prova, o juiz declara extinta a punibilidade (art. 89, §5º)

**Certidão de antecedentes:**
- Existem certidões da Justiça Estadual, da Justiça Federal e atestados dos órgãos de identificação; cada uma mostra informações diferentes
- Depois de cumprida a pena, a certidão comum não deve mostrar a condenação (art. 202 da LEP)

**Dica:** A prescrição também pode beneficiar, variando de 3 a 20 anos conforme a pena (Código Penal, art. 109).`,
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
    question: 'Como funciona o atendimento do Riccio Advocacia?',
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
    answer: `Os honorários de advogado não têm preço único: dependem do tipo de serviço, da complexidade, do tempo de trabalho e do valor envolvido. Pela ética da advocacia, eles são combinados de forma clara, de preferência em contrato escrito.

**Como os honorários são definidos:**
- Contrato de honorários por escrito, com o valor ou o percentual combinado e a forma de pagamento
- O advogado deve observar os valores mínimos da Tabela de Honorários da OAB do estado onde o serviço é prestado (Código de Ética e Disciplina da OAB, art. 48, §6º)
- O valor considera a complexidade, o tempo e o trabalho exigidos, o valor da causa e a condição do cliente (Código de Ética, art. 49)

**Tipos de cobrança:**

**1. Honorários fixos:**
- Valor fechado para o serviço
- Comum em: divórcios, contratos, consultoria

**2. Honorários por hora ou por ato:**
- Cobrados por hora de trabalho ou por etapa (consulta, parecer, audiência)
- Comum em: consultoria

**3. Honorários sobre o resultado:**
- Percentual sobre o proveito obtido, combinado no contrato
- Pela ética da OAB, somados aos honorários pagos pela parte contrária, não podem ser maiores que a vantagem que o cliente recebe (Código de Ética, art. 50)

**4. Honorários mistos:**
- Parte fixa + parte sobre o resultado

**Honorários de sucumbência são outra coisa:**
- São pagos pela parte que perde o processo e fixados pelo juiz (CPC, art. 85; CLT, art. 791-A)
- Pertencem ao advogado (Lei 8.906/1994, art. 23) e não substituem o contrato com o cliente

**Como conferir antes de contratar:**
- A Tabela de Honorários da OAB da Bahia é pública e pode ser consultada no site da seccional
- Peça a proposta por escrito antes de contratar
- Confira se o advogado está regularmente inscrito no Cadastro Nacional dos Advogados (cna.oab.org.br)

**Opções para quem não pode pagar:**
- Defensoria Pública (gratuita); na Bahia, Disque Defensoria 129
- Núcleos de prática jurídica de faculdades
- Juizados Especiais Cíveis: até 20 salários mínimos, sem necessidade de advogado

**Dica:** Desconfie de quem promete resultado ou valor garantido. Nenhum advogado pode garantir o resultado de um processo.`,
    area: 'geral',
    keywords: ['preço advogado', 'honorários advocatícios', 'quanto custa processo', 'valor advogado'],
    relatedQuestions: ['geral-1', 'geral-3', 'geral-4'],
    metaDescription: 'Quanto custa contratar um advogado? Entenda como os honorários são definidos (contrato escrito e tabela da OAB), os tipos de cobrança e as opções gratuitas.'
  },
  {
    id: 'geral-3',
    slug: 'quanto-tempo-demora-processo-judicial',
    question: 'Quanto tempo demora um processo judicial?',
    answer: `O tempo varia muito conforme o tipo de processo, a justiça competente, a necessidade de perícias e os recursos. Não existe prazo garantido: nenhum advogado pode prometer a data da sentença.

**Onde encontrar dados oficiais:**
- O Conselho Nacional de Justiça (CNJ) publica todos os anos o relatório Justiça em Números, com o tempo médio dos processos em cada tribunal (cnj.jus.br)
- O andamento do seu processo pode ser acompanhado pelo número, no site do tribunal

**Prazos que a lei fixa (Juizados Especiais Cíveis):**
- A sessão de conciliação deve ser marcada em até 15 dias do registro do pedido (Lei 9.099/1995, art. 16), mas a data real depende da pauta de cada unidade
- Sem acordo, a audiência de instrução ocorre em seguida ou em até 15 dias (art. 27)
- Recurso contra a sentença: 10 dias (art. 42)
- Limite de valor: 40 salários mínimos, sem custas no 1º grau

**Justiça Comum (Estadual):**
- Rito mais completo, com mais etapas e recursos
- Recursos para o Tribunal de Justiça e, em alguns casos, para os tribunais superiores (STJ e STF)

**Justiça do Trabalho:**
- Audiência com tentativa de acordo
- Recursos para o TRT e, em alguns casos, para o TST

**Justiça Federal (inclui processos contra o INSS):**
- Causas de até 60 salários mínimos vão ao Juizado Especial Federal (Lei 10.259/2001)

**Fatores que aceleram:**
- Processo digital
- Acordo entre as partes
- Pedido bem documentado desde o início
- Endereço correto da outra parte (facilita a citação)
- Acompanhamento ativo e resposta rápida às intimações

**Fatores que atrasam:**
- Muitos recursos
- Perícias complexas
- Comarca congestionada
- Citações por edital

**Dica:** Muitos conflitos podem ser resolvidos em mediação ou conciliação, inclusive nos CEJUSCs dos tribunais, o que costuma ser mais rápido que esperar a sentença.`,
    area: 'geral',
    keywords: ['tempo processo judicial', 'demora justiça', 'quanto tempo ação judicial', 'prazo processo'],
    relatedQuestions: ['geral-1', 'geral-2', 'geral-4'],
    metaDescription: 'Quanto tempo demora um processo judicial? Não há prazo garantido. Veja os prazos que a lei fixa, onde ver dados oficiais (CNJ) e o que acelera ou atrasa.'
  },
  {
    id: 'geral-4',
    slug: 'o-que-e-justica-gratuita',
    question: 'O que é justiça gratuita e quem tem direito?',
    answer: `A justiça gratuita (gratuidade da justiça) dispensa quem não tem recursos de pagar as despesas do processo (CPC, arts. 98 a 102).

**O que fica coberto:**
- Custas processuais e taxas judiciárias
- Honorários de perito
- Custas de recursos
- Despesas com exames necessários, como DNA
- Emolumentos de cartório, quando o ato é necessário para cumprir decisão do processo (art. 98, §1º, IX)

**Honorários do advogado da outra parte (se perder):**
O beneficiário pode ser condenado, mas a cobrança fica suspensa por 5 anos e só acontece se a outra parte provar que a situação financeira melhorou (CPC, art. 98, §3º).

**Quem tem direito:**
- Pessoa física ou jurídica sem recursos suficientes para pagar as despesas do processo
- A lei não fixa um limite de renda: o juiz analisa o caso
- A declaração da pessoa física de que não pode pagar presume-se verdadeira, mas o juiz pode pedir provas antes de negar (CPC, art. 99, §§2º e 3º)
- Ter advogado particular não impede o benefício (art. 99, §4º)
- Na Justiça do Trabalho, a CLT prevê o benefício para quem recebe salário de até 40% do teto do INSS ou comprova insuficiência de recursos (art. 790, §§3º e 4º)

**Como solicitar:**
- Pedido na petição inicial, na contestação ou em outro momento do processo (CPC, art. 99)
- Declaração de hipossuficiência (afirmando que não pode pagar)
- O juiz pode pedir comprovação (holerites, extratos, declaração de IR)

**Justiça gratuita NÃO inclui:**
- Honorários do seu próprio advogado
- Multas processuais, como por litigância de má-fé (art. 98, §4º)

**Defensoria Pública:**
- Além da isenção de custas, oferece defensor público gratuito
- Atende quem não pode pagar advogado sem prejuízo do sustento, conforme os critérios de cada Defensoria
- Na Bahia: Disque Defensoria 129 (defensoria.ba.def.br)

**Importante:** Mentir sobre a situação financeira pode levar à revogação do benefício e a multa de até 10 vezes o valor das despesas (CPC, art. 100, parágrafo único).`,
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

**Se a empresa demitiu antes do prazo, sem justa causa:**
- Saldo de salário (dias trabalhados)
- Férias proporcionais + 1/3
- 13º proporcional
- Saque do FGTS depositado
- Multa de 40% do FGTS: a rescisão antecipada do contrato a prazo, sem justa causa, é equiparada à dispensa sem justa causa (Decreto 99.684/1990, art. 14)
- **Indenização** de metade da remuneração que você receberia até o fim do contrato (CLT, art. 479)

**Se você pediu demissão antes do prazo:**
- Saldo de salário
- Férias proporcionais + 1/3
- 13º proporcional
- Pode ter que indenizar a empresa pelos prejuízos, limitado ao que ela pagaria na situação inversa (CLT, art. 480)

**Cláusula de rescisão antecipada:**
Se o contrato tiver cláusula que permite encerrar antes do prazo, aplicam-se as regras de aviso prévio da demissão comum, no lugar da indenização do art. 479 (CLT, art. 481).

**Duração do período de experiência:**
- Máximo de 90 dias (CLT, art. 445, parágrafo único)
- Pode ser prorrogado uma única vez, dentro desse limite (art. 451)

**Importante:** No término normal do contrato de experiência, não há multa de 40% do FGTS nem seguro-desemprego, mas você pode sacar o FGTS depositado.`,
    area: 'trabalhista',
    keywords: ['demissão período experiência', 'contrato experiência direitos', 'demitido experiência', 'verbas rescisórias experiência'],
    relatedQuestions: ['trab-2', 'trab-5'],
    metaDescription: 'Fui demitido no período de experiência, tenho direitos? Sim! Saiba quais verbas você deve receber e quando tem direito a indenização.'
  },
  {
    id: 'trab-8',
    slug: 'empresa-pode-descontar-vale-refeicao-salario',
    question: 'A empresa pode descontar vale-refeição do salário?',
    answer: `**Sim, mas com limites.** O desconto do vale-refeição (VR) ou do vale-alimentação é permitido quando previsto, mas deve respeitar regras:

**Se a empresa participa do PAT (Programa de Alimentação do Trabalhador):**
- A participação (desconto) do trabalhador fica limitada a **20%** do custo direto da refeição (Decreto 9.580/2018, art. 645, §2º, com a redação do Decreto 10.854/2021)
- Exemplo: benefício que custa R$ 500 à empresa = desconto máximo de R$ 100
- O benefício do PAT não tem natureza salarial

**Se a empresa não participa do PAT:**
- Valem o contrato e a convenção ou o acordo coletivo da categoria
- O desconto precisa estar previsto e autorizado (CLT, art. 462)

**O que NÃO pode:**
- Descontar mais que o limite aplicável
- Descontar valor superior ao fornecido
- Usar VR para compensar outros débitos
- Pagar o auxílio-alimentação em dinheiro, se ele for tratado como verba não salarial (CLT, art. 457, §2º)

**Verifique:**
- A convenção coletiva pode ter regras diferentes (e mais favoráveis)
- Acordo individual deve ser por escrito
- Algumas empresas oferecem VR sem desconto

**Se o desconto for abusivo:**
Você pode reclamar ao sindicato, denunciar ao Ministério do Trabalho (denuncia.sit.trabalho.gov.br ou Alô Trabalho 158) ou ajuizar ação trabalhista para restituição.`,
    area: 'trabalhista',
    keywords: ['desconto vale refeição', 'empresa descontar VR', 'vale refeição desconto salário', 'PAT desconto'],
    relatedQuestions: ['trab-4', 'trab-5'],
    metaDescription: 'A empresa pode descontar vale-refeição do salário? Sim, com limites: no PAT, até 20% do custo do benefício. Entenda as regras e o que é abusivo.'
  },
  {
    id: 'trab-9',
    slug: 'quanto-tempo-sacar-fgts-apos-demissao',
    question: 'Quanto tempo tenho para sacar o FGTS após demissão?',
    answer: `Após a demissão sem justa causa, você pode sacar o FGTS assim que a empresa fizer a comunicação da rescisão à Caixa.

**Prazo da empresa:**
- A empresa tem **10 dias**, contados do fim do contrato, para pagar a rescisão e entregar os documentos (CLT, art. 477, §6º)
- Feita a comunicação, o saque é liberado

**Onde sacar:**
- Aplicativo FGTS (transferência para conta)
- Agências da Caixa
- Casas lotéricas, até o limite de valor definido pela Caixa (confira no app FGTS)
- Correspondentes Caixa Aqui

**Documentos necessários:**
- Documento de identidade
- Carteira de Trabalho
- Termo de rescisão (TRCT)
- Número do PIS/PASEP

**Prazo para saque:**
- Não há prazo limite para sacar
- O dinheiro continua na conta do FGTS, com a remuneração legal, até você sacar
- Acompanhe o saldo e os depósitos pelo aplicativo FGTS

**E a multa de 40%?**
A empresa deposita a multa de 40% na conta do FGTS, e ela é liberada junto com o saque rescisório. Confira no aplicativo se o depósito foi feito; se não foi, você pode denunciar ao Ministério do Trabalho (Alô Trabalho 158) ou cobrar na Justiça do Trabalho, em até 2 anos da saída.`,
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
    answer: `**Não existe tempo mínimo obrigatório.** A união estável é reconhecida pela convivência pública, contínua e duradoura, com objetivo de constituir família (Código Civil, art. 1.723).

**Requisitos para união estável:**
- Convivência pública (não escondida)
- Continuidade (não relacionamento esporádico)
- Durabilidade (certo tempo, sem prazo fixo)
- Objetivo de constituir família
- Ausência de impedimentos para casar (como parentesco próximo); quem é casado, mas está separado de fato, pode ter união estável (art. 1.723, §1º)

**Direito à herança:**
- Desde 2017, o companheiro tem os mesmos direitos sucessórios do cônjuge (STF, Temas 498 e 809, que mandaram aplicar o art. 1.829 do Código Civil)
- Concorre com os filhos do falecido, conforme o regime de bens
- Se não houver descendentes nem ascendentes, herda tudo
- Direito real de habitação no imóvel da família
- Se o companheiro também é herdeiro necessário (com direito à legítima) ainda é tema discutido nos tribunais

**Como provar união estável:**
- Contrato ou escritura de união estável (recomendado)
- Contas conjuntas
- Dependência em plano de saúde ou no INSS
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
    answer: `O inventário extrajudicial é feito em **cartório** (Tabelionato de Notas), por escritura pública, de forma mais simples que o judicial.

**Requisitos obrigatórios:**
- Acordo total entre os herdeiros sobre a partilha
- Assistência de advogado ou defensor público (CPC, art. 610, §2º)
- Recolhimento do imposto de herança antes da escritura (Resolução CNJ 35/2007, art. 15); na Bahia, o imposto se chama ITD
- Certidões negativas de débitos

**Mudanças de 2024 (Resolução CNJ 571/2024):**
- Herdeiro menor ou incapaz não impede mais o cartório, desde que a parte dele seja paga em fração ideal de cada bem e o Ministério Público se manifeste a favor
- Havendo testamento, o inventário em cartório também é possível, depois que o testamento passar pelo procedimento judicial de abertura e cumprimento e o juiz autorizar

**Vantagens:**
- Mais rápido, porque não depende da pauta de uma vara
- Geralmente mais barato
- Menos burocrático
- Os herdeiros escolhem o cartório, em qualquer cidade (Resolução CNJ 35/2007, art. 1º)

**Documentos necessários:**
- Certidão de óbito
- Documentos dos herdeiros (RG, CPF, certidões de nascimento ou casamento)
- Documentos dos bens (imóveis, veículos, contas)
- Certidões negativas de tributos
- Procuração para advogado, se for o caso

**Custos:**
- Emolumentos do cartório (tabela oficial do estado)
- Imposto de herança (alíquota de cada estado)
- Honorários advocatícios, contratados por escrito e observando a tabela da OAB

**Prazo:**
O CPC (art. 611) manda abrir o inventário em até 2 meses do óbito. O atraso pode gerar multa no imposto, conforme a lei de cada estado.`,
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
    answer: `**Sim!** O MEI (Microempreendedor Individual) que paga o DAS em dia é segurado do INSS e tem direito a benefícios.

**Benefícios inclusos no MEI:**
- Aposentadoria por idade
- Auxílio por incapacidade temporária (auxílio-doença) e aposentadoria por incapacidade permanente
- Salário-maternidade
- Pensão por morte (para dependentes)
- Auxílio-reclusão (para dependentes)

**Aposentadoria por idade (MEI):**
- Mulher: 62 anos + 15 anos de contribuição
- Homem que já contribuía até 13/11/2019: 65 anos + 15 anos de contribuição
- Homem que começou a contribuir depois de 13/11/2019: 65 anos + 20 anos de contribuição (Emenda Constitucional 103/2019)
- Carência mínima: 180 contribuições mensais
- Valor: 1 salário mínimo

**Quer usar o tempo de MEI para outras aposentadorias?**
O MEI contribui com 5% do salário mínimo. Para que esse período conte como tempo de contribuição (regras de transição da aposentadoria por tempo) ou para levá-lo a outro regime, é preciso complementar com mais 15% sobre o salário mínimo, com juros quando houver atraso (Lei 8.212/1991, art. 21, §3º).

**Importante:**
- A complementação não aumenta o valor do benefício acima do mínimo, porque a base continua sendo o salário mínimo
- Para receber mais, é preciso contribuir sobre valor maior, em outra categoria de segurado; avalie com um profissional antes
- Mantenha o DAS em dia para garantir a qualidade de segurado`,
    area: 'previdenciario',
    keywords: ['MEI aposentadoria', 'microempreendedor aposentadoria', 'MEI INSS benefícios', 'DAS MEI direitos'],
    relatedQuestions: ['prev-1', 'prev-3'],
    metaDescription: 'Quem paga MEI tem direito a aposentadoria? Sim! Entenda quais benefícios o MEI tem direito e como conseguir valor maior.'
  },
  {
    id: 'prev-7',
    slug: 'pode-receber-dois-beneficios-inss',
    question: 'Posso receber dois benefícios do INSS ao mesmo tempo?',
    answer: `**Depende de quais benefícios.** Alguns podem ser acumulados, outros não (Lei 8.213/1991, art. 124).

**PODE acumular:**
- Aposentadoria + Pensão por morte (com redução após a Reforma de 2019)
- Pensões por morte de regimes diferentes (INSS + regime de servidor), com redução
- Pensões deixadas por pessoas diferentes, quando só uma delas é de cônjuge ou companheiro (por exemplo, pensão pela morte do pai e pela do marido)
- Auxílio-acidente + Aposentadoria, somente se a lesão e a aposentadoria forem anteriores a 11/11/1997 (Súmula 507 do STJ)
- Aposentadoria + Salário-família

**NÃO pode acumular:**
- Duas aposentadorias do INSS
- Auxílio-doença + Aposentadoria
- Mais de uma pensão deixada por cônjuge ou companheiro no INSS (pode escolher a mais vantajosa)
- Seguro-desemprego + benefício previdenciário, exceto pensão por morte e auxílio-acidente (art. 124, parágrafo único)
- BPC/LOAS + Aposentadoria ou outro benefício previdenciário

**Regra de redução da Reforma (EC 103/2019, art. 24):**
Vale quando a pensão deixada por cônjuge ou companheiro é acumulada com aposentadoria ou com pensão de outro regime:
- Recebe 100% do benefício mais vantajoso
- Do outro, recebe por faixas: o valor até 1 salário mínimo inteiro; 60% do que passar de 1 até 2 salários mínimos; 40% de 2 a 3; 20% de 3 a 4; e 10% acima de 4

**Exemplo prático (em salários mínimos):**
- Aposentadoria de 3 salários mínimos: recebe 100%
- Pensão de 2 salários mínimos: recebe 1 salário mínimo inteiro + 60% do segundo = 1,6 salário mínimo
- Total: 4,6 salários mínimos

**Dica:** Consulte um advogado previdenciário para calcular o melhor cenário e conferir se a redução foi aplicada corretamente.`,
    area: 'previdenciario',
    keywords: ['acumular benefícios INSS', 'dois benefícios INSS', 'aposentadoria e pensão', 'acumulação benefícios'],
    relatedQuestions: ['prev-1', 'prev-5'],
    metaDescription: 'Posso receber dois benefícios do INSS ao mesmo tempo? Depende: veja o que pode e o que não pode acumular.'
  },
  {
    id: 'prev-9',
    slug: 'auxilio-doenca-pode-virar-aposentadoria-invalidez',
    question: 'Auxílio-doença pode virar aposentadoria por invalidez?',
    answer: `**Sim.** Se a incapacidade que gerou o auxílio-doença (hoje chamado de auxílio por incapacidade temporária) se tornar permanente, o benefício pode ser convertido em aposentadoria por incapacidade permanente (antiga aposentadoria por invalidez).

**Quando ocorre a conversão:**
- Quando a perícia constata incapacidade total e permanente
- Quando os tratamentos não surtiram efeito
- Quando a reabilitação profissional é impossível

**Como funciona:**
1. Durante o auxílio-doença, o INSS faz perícias periódicas
2. Se a incapacidade for considerada definitiva, o INSS converte o benefício
3. Você também pode pedir a conversão (e, se negada, recorrer ou ir à Justiça)

**Diferenças entre os benefícios:**
| Auxílio-doença | Aposentadoria por incapacidade permanente |
|----------------|----------------------------|
| Incapacidade temporária | Incapacidade permanente |
| 91% do salário de benefício | 60% da média + 2% por ano extra (regra geral) |
| Perícias frequentes | Pode ser chamado para revisão |
| Cessa com a recuperação | Cancelada se voltar a trabalhar |

**Valor:**
- Auxílio-doença: 91% do salário de benefício (Lei 8.213/1991, art. 61)
- Aposentadoria por incapacidade permanente: 60% da média + 2% por ano de contribuição acima de 20 anos (homens) ou de 15 anos (mulheres) (EC 103/2019, art. 26)
- Se a incapacidade decorre de acidente de trabalho, doença profissional ou do trabalho: 100% da média

**Revisões periódicas:**
- O aposentado por incapacidade pode ser chamado para nova perícia
- Quem tem 60 anos ou mais, em regra, fica dispensado dessas revisões (Lei 8.213/1991, art. 101, §1º)

**Importante:**
Se você recebe auxílio-doença há muito tempo e sua doença é permanente, peça a conversão com laudos atualizados.`,
    area: 'previdenciario',
    keywords: ['auxílio-doença aposentadoria invalidez', 'converter auxílio aposentadoria', 'incapacidade permanente INSS'],
    relatedQuestions: ['prev-2', 'prev-4'],
    metaDescription: 'Auxílio-doença pode virar aposentadoria por invalidez? Sim, quando a incapacidade se torna permanente. Veja como funciona.'
  },

  // CONSUMIDOR (4 novas)
  {
    id: 'cons-30',
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
    id: 'cons-31',
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
- Quando a empresa prova "engano justificável" (para o STJ, não é preciso provar má-fé do fornecedor para ter o dobro, EAREsp 676.608)
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
    id: 'cons-32',
    slug: 'processar-banco-emprestimo-nao-autorizado',
    question: 'Como processar banco por empréstimo não autorizado?',
    answer: `Empréstimo que você não contratou é **fraude** e você tem direitos:

**Passos imediatos:**
1. Conteste formalmente no banco (por escrito, com protocolo) e peça cópia do contrato
2. Registre boletim de ocorrência (na Bahia, também pela Delegacia Virtual)
3. Consulte o Registrato do Banco Central (acesso pela conta gov.br) para ver todos os empréstimos em seu nome
4. Reclame no Banco Central (bcb.gov.br, "Meu BC", reclamação contra bancos) e no Procon
5. Se o desconto for no benefício do INSS, informe também pelo Meu INSS ou pela Central 135
6. Anote todos os protocolos

**Seus direitos:**
- Cancelamento do empréstimo
- Devolução dos valores descontados (em dobro, quando cabível, CDC, art. 42, parágrafo único)
- Exclusão de negativações
- Indenização por danos morais, conforme o caso

**Provas necessárias:**
- Extratos mostrando os descontos
- Contrato (solicite cópia ao banco)
- Protocolos de reclamação
- BO
- Comprovante de salário/aposentadoria

**Indenização:**
- O banco responde pelas fraudes praticadas por terceiros em operações bancárias (Súmula 479 do STJ)
- Danos materiais: devolução dos valores descontados
- Danos morais: não há valor tabelado; o juiz decide conforme o caso

**Prazo:**
5 anos para pedir indenização (CDC, art. 27). Mas quanto antes agir, melhor para suas provas.

**Dica:** Aposentados são vítimas frequentes. Desconfie de ligações oferecendo "empréstimo liberado" ou pedindo dados e códigos.`,
    area: 'consumidor',
    keywords: ['empréstimo não autorizado', 'processar banco fraude', 'empréstimo consignado fraude', 'empréstimo que não fiz'],
    relatedQuestions: ['cons-1', 'cons-7'],
    metaDescription: 'Como processar banco por empréstimo não autorizado? Veja os passos, direitos e como conseguir indenização por fraude.'
  },
  {
    id: 'cons-33',
    slug: 'plano-saude-pode-ter-carencia-emergencia',
    question: 'Plano de saúde pode ter carência para emergência?',
    answer: `**Não.** A lei limita a carência para urgência e emergência a no máximo 24 horas a partir da contratação (Lei 9.656/1998, art. 12, V, "c").

**O que diz a lei (Lei 9.656/98, art. 35-C):**
- Emergência: risco imediato de vida ou de lesões irreparáveis, declarado pelo médico
- Urgência: casos resultantes de acidentes pessoais ou de complicações na gestação
- Carência máxima: 24 horas após a contratação

**O plano deve cobrir:**
- Atendimento de emergência (pronto-socorro, exames, UTI se necessário)
- O STJ considera abusiva a carência acima de 24 horas para urgência e emergência (Súmula 597)
- Durante a carência de internação, uma norma da saúde suplementar (Resolução Consu 13/1998) limita esse atendimento a 12 horas, com remoção para o SUS depois disso; em situações de risco, procure orientação jurídica se a operadora limitar o atendimento

**Carências máximas permitidas (art. 12, V):**
- Urgência e emergência: 24 horas
- Parto a termo: 300 dias
- Demais casos (consultas, exames, internações, cirurgias): até 180 dias
- Doenças e lesões preexistentes declaradas: cobertura parcial temporária por até 24 meses

**Se o plano negar emergência:**
1. Documente tudo (prints, protocolos, nome do atendente)
2. Vá ao hospital (público se necessário; SAMU 192)
3. Reclame na ANS (0800 701 9656)
4. Procure a Justiça para garantir o atendimento e o reembolso

**Importante:**
Exigir cheque-caução, nota promissória ou qualquer garantia como condição para atendimento emergencial é crime (Código Penal, art. 135-A). A negativa indevida também pode gerar indenização, conforme o caso.`,
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
    answer: `**Depende do tipo de reparo.** A Lei do Inquilinato (Lei 8.245/1991, arts. 22 e 23) divide as responsabilidades:

**Locador (proprietário) paga:**
- Reparos estruturais (telhado, vigas, fundação)
- Problemas anteriores à locação (art. 22, IV)
- Vícios ocultos (que você não viu ao alugar)
- Desgaste natural (pintura externa, infiltrações antigas)
- Instalações elétricas e hidráulicas antigas

**Locatário (inquilino) paga:**
- Manutenção do dia a dia
- Pequenos reparos (torneiras, tomadas, fechaduras)
- Danos causados por mau uso, por você, familiares ou visitantes (art. 23, V)
- Devolver o imóvel como recebeu, inclusive a pintura, conforme a vistoria de entrada, ressalvado o desgaste normal (art. 23, III)
- Desentupimento por uso

**Regra prática:**
- Problema estrutural/oculto = proprietário
- Desgaste de uso/manutenção = inquilino

**Reparos urgentes:**
- O inquilino deve permitir os reparos urgentes que cabem ao proprietário
- Se durarem mais de 10 dias, há direito a abatimento proporcional do aluguel; se passarem de 30 dias, o inquilino pode encerrar o contrato (art. 26)

**O que fazer se o proprietário não pagar:**
1. Notifique por escrito, com prazo
2. Guarde orçamentos, fotos e notas fiscais
3. Reparos necessários feitos por você são, em regra, indenizáveis e permitem reter o imóvel até o reembolso, salvo cláusula em contrário no contrato (art. 35)
4. Não desconte do aluguel por conta própria sem acordo escrito: o atraso pode gerar ação de despejo
5. Se o problema impedir o uso do imóvel, é possível pedir na Justiça o conserto, o abatimento ou o fim do contrato

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
- Mediação (acordo com terceiro neutro), inclusive nos CEJUSCs dos tribunais

**2. Protesto em cartório:**
- O título protestado fica registrado e o nome do devedor pode ir aos cadastros de inadimplentes
- Pressiona o pagamento
- Custo baixo, conforme a tabela do cartório

**3. Cobrança judicial:**
- **Ação monitória:** para dívidas provadas por escrito sem força de título executivo (contrato sem testemunhas, cheque prescrito, mensagens)
- **Ação de cobrança:** para dívidas sem documento formal
- **Execução de título:** se você tem título executivo (cheque no prazo, nota promissória, contrato assinado por duas testemunhas)

**Documentos importantes:**
- Contratos ou acordos
- Comprovantes de transferência (PIX, depósitos)
- Mensagens reconhecendo a dívida
- Notas promissórias ou cheques
- E-mails e WhatsApp

**Prazos (prescrição):**
- Cheque: 6 meses para executar, contados do fim do prazo de apresentação (30 dias na mesma praça, 60 em outra) (Lei 7.357/1985, arts. 33 e 59); depois disso, ainda cabe ação monitória em até 5 anos da emissão (Súmula 503 do STJ)
- Dívida provada em contrato ou documento: 5 anos (Código Civil, art. 206, §5º, I)
- Casos sem prazo específico: 10 anos (art. 205)

**Valores baixos (até 40 SM):**
Use o Juizado Especial: sem custas no 1º grau e sem advogado até 20 salários mínimos.`,
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
    answer: `Não existe tabela de indenização para voo cancelado. O valor depende das provas e das circunstâncias de cada caso, e quem decide é o juiz. Desconfie de quem promete um valor certo.

**Danos morais:**
- Não são automáticos: o STJ entende que, em atraso e cancelamento de voo, o dano moral precisa ser demonstrado (não é presumido)
- A Lei 14.034/2020 incluiu no Código Brasileiro de Aeronáutica a exigência de provar o prejuízo extrapatrimonial (art. 251-A)
- Pesam: tempo de espera, falta de assistência, pernoite no aeroporto, perda de compromisso importante e o tratamento recebido

**Danos materiais (reembolso):**
- Hospedagem e alimentação não fornecidas
- Transporte alternativo que você pagou
- Perda de diárias de hotel no destino
- Passeios/eventos perdidos

**O que influencia o resultado:**
- Tempo de atraso/espera
- Assistência material fornecida ou não
- Motivo do cancelamento
- Prejuízos comprovados com documentos

**Seus direitos imediatos (Resolução ANAC 400/2016, art. 27):**
- Mais de 1h de espera: comunicação (telefone, internet)
- Mais de 2h: alimentação (refeição ou voucher)
- Mais de 4h: hospedagem, se houver pernoite, e transporte
- À sua escolha: reembolso integral, reacomodação ou outro meio de transporte (art. 21)

**Prazo para processar:** Voos nacionais, 5 anos (CDC, art. 27). Voos internacionais: 2 anos para danos materiais (Convenção de Montreal) e 5 anos para danos morais (STF, Tema 1.240).`,
    area: 'consumidor',
    keywords: ['indenização voo cancelado', 'quanto ganho voo cancelado', 'valor indenização aérea', 'danos morais voo'],
    relatedQuestions: ['cons-1', 'cons-3'],
    metaDescription: 'Quanto posso ganhar de indenização por voo cancelado? Não há valor tabelado. Veja o que o juiz considera, os danos materiais e seus direitos pela ANAC.'
  },
  {
    id: 'cons-16',
    slug: 'meu-nome-foi-negativado-sem-dever',
    question: 'Meu nome foi negativado mas não devo. O que fazer?',
    answer: `Negativação indevida é ilegal e pode gerar direito a indenização. Veja o que fazer:

**Passos imediatos:**
1. Consulte gratuitamente o motivo no Serasa (serasa.com.br), no SPC Brasil (spcbrasil.org.br) e na Boa Vista (consumidorpositivo.com.br)
2. Conteste diretamente na empresa que negativou
3. Guarde todos os protocolos
4. Reúna provas de que não deve

**Provas importantes:**
- Comprovantes de pagamento
- Contratos ou a falta deles
- Protocolos de reclamação
- Prints da negativação
- Boletim de ocorrência, se foi fraude

**Seus direitos:**
- Correção imediata do cadastro (CDC, art. 43, §3º)
- Indenização por danos morais, que o STJ costuma considerar presumida na negativação indevida (salvo se já havia outra negativação legítima, Súmula 385)
- Não existe valor tabelado de indenização: o juiz decide caso a caso
- Devolução em dobro, se você pagou algo indevido

**Onde reclamar:**
1. Procon
2. Consumidor.gov.br
3. Reclame Aqui (não é órgão oficial)
4. Juizado Especial (até 40 salários mínimos, sem custas no 1º grau)

**Prazos para limpar o nome:**
- Se você contestou um dado errado, o órgão de cadastro tem 5 dias úteis para comunicar a correção a quem recebeu a informação (CDC, art. 43, §3º)
- Se você pagou a dívida, o credor tem 5 dias úteis para pedir a baixa (Súmula 548 do STJ)

**Dica:** Se a empresa não resolver, procure o Procon ou o Juizado Especial com as provas reunidas.`,
    area: 'consumidor',
    keywords: ['nome negativado sem dever', 'negativação indevida', 'SPC Serasa indevido', 'limpar nome'],
    relatedQuestions: ['cons-1', 'cons-7'],
    metaDescription: 'Meu nome foi negativado mas não devo. O que fazer? Veja os passos para limpar seu nome e conseguir indenização.'
  },
  {
    id: 'cons-17',
    slug: 'prazo-direito-arrependimento-7-dias',
    question: 'Como funciona o direito de arrependimento de 7 dias?',
    answer: `O direito de arrependimento (CDC, art. 49) permite desistir de compras feitas fora do estabelecimento comercial.

**Quando se aplica (7 dias):**
- Compras pela internet
- Compras por telefone
- Compras por catálogo
- Vendas em domicílio
- Compras por WhatsApp e redes sociais

**Quando NÃO se aplica ou tem regra própria:**
- Compras em loja física (a troca depende da política da loja, salvo defeito)
- Passagens aéreas: regra da ANAC, com desistência sem custo em até 24 horas do comprovante, para compras feitas com 7 dias ou mais de antecedência do voo
- Produtos personalizados e serviços já prestados: há discussão, e cada caso é analisado

**Como exercer o direito:**
1. Comunique a loja em até 7 dias (do recebimento do produto ou da contratação)
2. Não precisa justificar
3. Devolva o produto conforme a orientação da loja (o frete é por conta dela)
4. Receba o reembolso total

**O que você recebe de volta:**
- Valor integral do produto
- Frete de ida e volta
- Sem taxas ou descontos, com correção monetária

**Prazo de reembolso:**
- A lei manda devolver imediatamente (CDC, art. 49, parágrafo único)
- No cartão, o vendedor deve comunicar a administradora na hora, para cancelar o lançamento ou estornar (Decreto 7.962/2013, art. 5º, §3º)
- Em boleto ou Pix, a devolução também deve ser imediata; se demorar, reclame no Procon

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

**Quando o banco pode ter de devolver:**
- Falha de segurança do aplicativo ou do sistema
- Transação não autorizada (celular roubado, conta invadida)
- Movimentações muito fora do seu perfil, que o banco deveria ter barrado
- O banco responde objetivamente pelas fraudes praticadas por terceiros em operações bancárias (Súmula 479 do STJ)

**Quando é mais difícil:**
- Você passou senhas ou códigos voluntariamente
- Golpe de engenharia social (falso parente, falso vendedor)
- Transferência feita de livre vontade, sem falha do banco

**MED (Mecanismo Especial de Devolução do Pix):**
- Criado pelo Banco Central para casos de golpe, fraude e crime com Pix
- O pedido deve ser feito ao seu banco em até 80 dias da transação, mas quanto antes, maior a chance de haver saldo para bloquear
- O banco de quem recebeu bloqueia o que houver na conta e devolve se a fraude for confirmada
- Na versão mais nova do MED, adotada em 2026, o rastreio pode alcançar outras contas para onde o dinheiro foi enviado
- Não há garantia de devolução: depende da análise e do saldo encontrado

**Passos para tentar reaver:**
1. Avise o banco imediatamente e peça o MED (pelo app ou SAC; anote o protocolo)
2. Faça BO (na Bahia, também pela Delegacia Virtual)
3. Reclame no Banco Central (bcb.gov.br, "Meu BC") e no Procon
4. Se o banco negar e houver falha dele, procure a Justiça

**Argumentos jurídicos:**
- Responsabilidade objetiva dos bancos (Súmula 479 do STJ)
- Falha na segurança
- Dever de monitorar transações atípicas

**Prazo para processar:** 5 anos (CDC, art. 27).`,
    area: 'consumidor',
    keywords: ['golpe PIX', 'banco devolver PIX', 'caí no golpe', 'fraude PIX banco'],
    relatedQuestions: ['cons-8', 'cons-7'],
    metaDescription: 'Caí no golpe do PIX. O banco devolve o dinheiro? Depende. Veja quando o banco é obrigado a devolver e como agir.'
  },
  {
    id: 'cons-19',
    slug: 'bagagem-extraviada-quanto-receber',
    question: 'Bagagem extraviada: quanto posso receber de indenização?',
    answer: `O extravio de bagagem gera direito a indenização, mas não existe tabela de valores para danos morais. Veja as regras:

**Indenização por danos materiais:**
- Corresponde ao valor do que foi perdido, com base nas provas (notas, fotos, declarações)
- Em voos internacionais, a Convenção de Montreal fixa um limite por passageiro, em DES (Direitos Especiais de Saque, moeda de referência do FMI), revisado periodicamente
- A declaração especial de valor no check-in permite aumentar o limite (Resolução ANAC 400/2016, art. 17)
- Despesas emergenciais fora do seu domicílio devem ser ressarcidas em até 7 dias da apresentação dos comprovantes (art. 33)

**Indenização por danos morais:**
- Depende do caso: tempo sem a mala, o que havia nela, o motivo da viagem (casamento, trabalho), o atendimento recebido
- O valor é fixado pelo juiz; não há valor garantido
- Em voos internacionais, o STF decidiu que os limites da Convenção de Montreal não se aplicam ao dano moral (Tema 1.240)

**O que a empresa deve fornecer imediatamente:**
- Registro do protesto (extravio)
- Reembolso de compras emergenciais
- Informações sobre a localização

**Prazos importantes (Resolução ANAC 400/2016, art. 32):**
- Até 7 dias para devolver a mala (voos nacionais)
- Até 21 dias para devolver a mala (voos internacionais)
- Não localizada nesses prazos: indenização em até 7 dias
- Avaria ou violação: protesto em até 7 dias do recebimento

**Como fortalecer seu pedido:**
- Declare o valor da bagagem no check-in, se levar itens valiosos
- Guarde notas de compras emergenciais
- Documente todos os itens perdidos (fotos, notas fiscais)

**Prazo para processar:** Voos nacionais, 5 anos (CDC). Voos internacionais: 2 anos para danos materiais (Convenção de Montreal) e 5 anos para danos morais (STF, Tema 1.240).`,
    area: 'consumidor',
    keywords: ['bagagem extraviada indenização', 'mala perdida avião', 'extravio bagagem valor', 'companhia aérea perdeu mala'],
    relatedQuestions: ['cons-15', 'cons-1'],
    metaDescription: 'Bagagem extraviada: quanto posso receber? Veja como funcionam os danos materiais (limites e declaração de valor), os danos morais e os prazos da ANAC.'
  },
  {
    id: 'cons-20',
    slug: 'overbooking-direitos-passageiro',
    question: 'Sofri overbooking. Quais são meus direitos?',
    answer: `Overbooking (vender mais assentos que o avião comporta) é tratado pela ANAC como **preterição de passageiro**: quando a empresa impede o embarque de quem se apresentou a tempo, ela tem obrigações imediatas (Resolução ANAC 400/2016, arts. 22 a 24).

**Antes de impedir embarques:**
- A empresa deve procurar voluntários, com compensação negociada (art. 23)
- Se você for voluntário e aceitar a compensação, isso não é considerado preterição; leia o termo antes de assinar

**Se você for preterido, a empresa DEVE:**
1. Pagar compensação financeira imediata: 250 DES em voo doméstico ou 500 DES em voo internacional (art. 24); DES é a moeda de referência do FMI, convertida em reais
2. Oferecer, à sua escolha, reacomodação, reembolso integral ou outra modalidade de transporte (art. 21)
3. Prestar assistência material conforme a espera

**Assistência material obrigatória (art. 27):**
- Mais de 1h: comunicação (internet, telefone)
- Mais de 2h: alimentação (voucher ou refeição)
- Mais de 4h: hospedagem, se houver pernoite, e transporte

**Indenização por danos morais:**
- A compensação da ANAC não impede, em tese, pedir indenização na Justiça por danos comprovados; o juiz pode levar em conta o que já foi pago
- O valor depende do caso (perda de compromisso, pernoite, tratamento) e é fixado pelo juiz

**O que fazer:**
1. Não assine termo de acordo sem ler
2. Peça por escrito o motivo da preterição (art. 20, §2º)
3. Guarde todos os comprovantes
4. Anote horários e nomes de atendentes
5. Reclame na plataforma Anac Passageiro (gov.br/anac) e, se não resolver, procure o Procon ou a Justiça

**Prazo:** 5 anos em voos nacionais (CDC); em voos internacionais, 2 anos para danos materiais e 5 anos para danos morais (STF, Tema 1.240).`,
    area: 'consumidor',
    keywords: ['overbooking direitos', 'voo lotado sem lugar', 'passageiro preterido', 'indenização overbooking'],
    relatedQuestions: ['cons-15', 'cons-19'],
    metaDescription: 'Sofri overbooking. Quais são meus direitos? Compensação imediata de 250 DES (doméstico) ou 500 DES (internacional), reacomodação ou reembolso e assistência.'
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
    answer: `**Não.** A carência para urgência e emergência é de, no máximo, 24 horas a partir da contratação (Lei 9.656/1998, art. 12, V, "c"). Cláusula com prazo maior é abusiva (Súmula 597 do STJ).

**O que diz a lei (Lei 9.656/98, art. 35-C):**
- Emergência: risco imediato de vida ou de lesões irreparáveis, declarado pelo médico assistente
- Urgência: acidentes pessoais e complicações na gravidez
- Carência máxima: 24 horas após a contratação

**Cobertura em urgência e emergência:**
- Atendimento de pronto-socorro
- Exames diagnósticos necessários
- Durante a carência de internação, uma norma da saúde suplementar (Consu 13/1998) limita o atendimento a 12 horas, com remoção para o SUS se for preciso internar
- Fora da carência, cobertura completa conforme o tipo de plano

**Carências máximas permitidas (art. 12, V):**
- Urgência e emergência: 24 horas
- Parto a termo: 300 dias
- Demais casos (consultas, exames, internações): até 180 dias
- Doenças preexistentes declaradas: cobertura parcial temporária por até 24 meses

**Resposta do plano (RN ANS 623/2024):**
Em urgência e emergência, a operadora deve responder de imediato ao pedido de cobertura.

**Se o plano negar emergência:**
1. Vá ao hospital (público se precisar; SAMU 192)
2. Documente a negativa (peça por escrito)
3. Reclame na ANS (0800 701 9656)
4. Procure a Justiça para garantir o atendimento e o reembolso; a negativa indevida pode gerar indenização, conforme o caso

**Importante:**
Exigir cheque-caução ou outra garantia como condição para atendimento emergencial é crime (Código Penal, art. 135-A).`,
    area: 'consumidor',
    keywords: ['plano saúde carência urgência', 'emergência plano saúde', 'negar atendimento emergência', 'carência 24 horas'],
    relatedQuestions: ['cons-9', 'cons-1'],
    metaDescription: 'Plano de saúde pode exigir carência para urgência? Não! A carência máxima é 24 horas. Veja seus direitos.'
  },
  {
    id: 'cons-23',
    slug: 'cobranca-divida-prescrita-prazo',
    question: 'Podem cobrar dívida prescrita? Qual o prazo?',
    answer: `Depois da prescrição, a dívida não pode mais ser cobrada na Justiça, e o STJ já decidiu que também não pode ser cobrada por telefonemas, mensagens ou e-mails (Terceira Turma, REsp 2.088.100, 2023). Veja os detalhes:

**Prazos de prescrição mais comuns:**
- Dívidas com contrato ou documento (cartão de crédito, empréstimo, financiamento, boleto): em regra, 5 anos (Código Civil, art. 206, §5º, I)
- Cheque: 6 meses para executar depois do prazo de apresentação; ação monitória em até 5 anos da emissão (Súmula 503 do STJ)
- Casos sem prazo específico: 10 anos (art. 205)

**O que acontece após a prescrição:**
- A dívida não deixa de existir, mas não pode mais ser exigida
- Você pode pagar se quiser; o que for pago voluntariamente não é devolvido (Código Civil, art. 882)
- O credor não pode processar para cobrar
- Pela decisão da Terceira Turma do STJ (2023), também não cabe cobrança extrajudicial

**Negativação:**
- O nome só pode ficar nos cadastros por até 5 anos (CDC, art. 43, §1º), contados do dia seguinte ao vencimento da dívida
- Prescrita a cobrança, a informação não pode mais ser fornecida pelos cadastros (art. 43, §5º)
- Se o nome continuar negativado, você pode pedir a exclusão e, conforme o caso, indenização

**Cuidado com "armadilhas":**
- Antes de a prescrição se completar, reconhecer a dívida por escrito, parcelar ou fazer acordo interrompe o prazo, que recomeça (Código Civil, art. 202, VI)
- Depois de prescrita, pagar ou reconhecer a dívida pode ser entendido como renúncia à prescrição (art. 191)

**O que fazer:**
- Confira a data de vencimento e se a dívida está prescrita
- Não pague sem analisar
- Se cobrarem judicialmente, a prescrição deve ser alegada (e o juiz pode reconhecê-la)

**Dica:** Guarde prints das cobranças de dívida prescrita: elas podem ser contestadas no Procon ou na Justiça.`,
    area: 'consumidor',
    keywords: ['dívida prescrita', 'prazo prescrição dívida', 'cobrar dívida antiga', 'dívida caduca'],
    relatedQuestions: ['cons-7', 'cons-16'],
    metaDescription: 'Podem cobrar dívida prescrita? Qual o prazo? Entenda quando a dívida prescreve e seus direitos.'
  },
  {
    id: 'cons-24',
    slug: 'cartao-clonado-quem-paga',
    question: 'Meu cartão foi clonado. Quem paga as compras?',
    answer: `Em regra, o titular não paga pelas compras feitas por fraudadores: o banco e a administradora respondem objetivamente pelas fraudes de terceiros (Súmula 479 do STJ), salvo se provarem culpa exclusiva do cliente.

**Quando o banco deve arcar:**
- Compras que você não fez
- Transações em locais onde você nunca esteve
- Compras online sem sua autorização
- Uso depois do bloqueio do cartão

**O que fazer imediatamente:**
1. Bloqueie o cartão no app
2. Conteste as compras (pelo app ou SAC, anotando o protocolo)
3. Faça boletim de ocorrência (na Bahia, também pela Delegacia Virtual)
4. Solicite o estorno por escrito

**Prazo para contestar:**
- Quanto antes, melhor
- As regras de contestação variam conforme o banco e a bandeira; não espere a fatura vencer
- Cartão de débito: avise imediatamente

**Se o banco negar o estorno:**
- Reclame no Procon
- Reclame no Banco Central (bcb.gov.br, "Meu BC")
- Procure o Juizado Especial (sem custas no 1º grau até 40 salários mínimos)

**Danos morais:**
- Podem ser devidos se o banco cobrou mesmo após a contestação, negativou seu nome ou causou transtorno sério
- Não há valor tabelado; o juiz decide conforme o caso

**Prevenção:**
- Use cartão virtual para compras online
- Ative notificações de compras
- Não empreste o cartão nem informe senhas ou códigos por telefone`,
    area: 'consumidor',
    keywords: ['cartão clonado', 'fraude cartão de crédito', 'compra não autorizada', 'banco clonagem cartão'],
    relatedQuestions: ['cons-18', 'cons-8'],
    metaDescription: 'Meu cartão foi clonado. Quem paga as compras? Em regra, o banco (Súmula 479 do STJ). Veja como contestar, pedir estorno e onde reclamar.'
  },
  {
    id: 'cons-25',
    slug: 'atraso-entrega-produto-comprado-online',
    question: 'Produto comprado online atrasou. Posso cancelar?',
    answer: `**Sim.** O atraso na entrega é descumprimento da oferta e do contrato, e você pode cancelar (CDC, art. 35).

**Seus direitos em caso de atraso (a escolha é sua):**
1. Exigir a entrega, nos termos da oferta
2. Aceitar produto equivalente
3. Cancelar e receber de volta o que pagou, com correção
4. Pedir indenização por perdas e danos, se houver

**Como cancelar:**
- Comunique a loja por escrito (e-mail, chat, app)
- Exija o reembolso integral, incluindo o frete
- O reembolso deve ser feito sem demora; no cartão, peça o estorno à loja e acompanhe com a administradora

**Quando cabe indenização:**
- O produto era presente para uma data específica
- Você perdeu evento ou compromisso importante
- Teve prejuízos comprovados
- Não há valor tabelado: depende das provas

**O que fazer:**
1. Faça print da data de entrega prometida
2. Acompanhe o rastreamento
3. Reclame por escrito assim que o prazo vencer
4. Se a loja não der uma solução, cancele e peça o dinheiro de volta

**Entregas atrasadas recorrentes:**
- Procon
- Consumidor.gov.br
- Juizado Especial (sem custas no 1º grau até 40 salários mínimos)

**Dica:** Não aceite "prazo estendido" se precisava do produto: a escolha entre esperar ou cancelar é sua.`,
    area: 'consumidor',
    keywords: ['produto atrasou entrega', 'cancelar compra atraso', 'loja não entregou', 'atraso entrega online'],
    relatedQuestions: ['cons-17', 'cons-21'],
    metaDescription: 'Produto comprado online atrasou. Posso cancelar? Sim! Veja como exigir reembolso ou indenização.'
  },
  {
    id: 'cons-26',
    slug: 'servico-nao-contratado-cobrado-fatura',
    question: 'Estão cobrando serviço que não contratei na fatura',
    answer: `Cobrança de serviço não contratado é prática abusiva (CDC, art. 39, III). Veja como agir:

**Passos imediatos:**
1. Conteste o valor na empresa (anote o protocolo)
2. Exija o cancelamento do serviço
3. Peça o estorno dos valores cobrados
4. Documente tudo por escrito

**Seus direitos:**
- Cancelamento imediato do serviço
- Devolução em dobro do que pagou indevidamente (CDC, art. 42, parágrafo único)
- Danos morais, conforme o caso (por exemplo, se houve negativação indevida)

**Sobre valores:**
- A devolução em dobro é calculada sobre o que você efetivamente pagou, com correção
- Danos morais não têm valor tabelado; dependem das provas e são fixados pelo juiz
- Se você ainda não pagou, peça a fatura corrigida

**Onde reclamar:**
1. Anatel (telefonia, internet e TV): 1331 ou Anatel Consumidor; a operadora tem 10 dias corridos para responder
2. Procon
3. Consumidor.gov.br (a empresa tem até 10 dias)
4. Juizado Especial

**Exemplos comuns:**
- Seguro de cartão não contratado
- Pacotes de dados extras
- TV por assinatura com canais extras
- Serviços de localização/segurança

**Prazo para pedir de volta:** Em serviços de telefonia, o STJ fixou 10 anos (EAREsp 738.991); em outros casos, o prazo depende do contrato. Reclame logo.

**Dica:** Sempre leia as faturas com atenção e conteste rápido.`,
    area: 'consumidor',
    keywords: ['cobrança serviço não contratado', 'fatura cobrança indevida', 'cancelar serviço não pedido', 'venda casada'],
    relatedQuestions: ['cons-7', 'cons-1'],
    metaDescription: 'Estão cobrando serviço que não contratei na fatura. O que fazer? Veja como cancelar e pedir devolução em dobro.'
  },
  {
    id: 'cons-27',
    slug: 'recall-carro-nao-fiz-posso-processar',
    question: 'Não fiz o recall do carro e tive problema. Posso processar?',
    answer: `**Sim, em muitos casos.** A responsabilidade da montadora por defeito de fabricação não desaparece por falta de recall (CDC, arts. 10 e 12).

**Quando a montadora responde:**
- Defeito de fabricação (mesmo sem recall feito)
- Recall não foi comunicado adequadamente
- Problema em peça não coberta pelo recall
- Vícios ocultos de projeto

**Quando você pode ter dificuldade:**
- O recall foi amplamente divulgado e comunicado a você, e você não levou o carro
- O problema é exatamente o defeito que o recall corrigiria (a empresa pode alegar culpa do consumidor)
- Manutenção irregular do veículo

**O que diz a lei:**
- O fabricante que descobre o risco depois de vender deve comunicar as autoridades e os consumidores, inclusive por anúncios (CDC, art. 10, §1º)
- Fabricante e concessionária podem responder, conforme o caso
- Cada caso é analisado com as provas da comunicação do recall

**O que você pode pedir:**
- Conserto gratuito
- Indenização por lucros cessantes (táxi, aplicativo)
- Danos morais se houve acidente/risco
- Danos materiais comprovados

**Provas importantes:**
- Documentação do veículo
- Laudos técnicos
- Fotos e vídeos do problema
- Comprovante de revisões
- Consulta de recall pelo chassi, no site do fabricante

**Prazos:**
- Acidente causado pelo defeito (fato do produto): 5 anos para pedir indenização, contados do conhecimento do dano e de quem o causou (CDC, art. 27)
- Defeito que só impede ou prejudica o uso, sem acidente (vício oculto): 90 dias para reclamar, contados de quando o defeito aparece (CDC, art. 26, II e §3º)`,
    area: 'consumidor',
    keywords: ['recall carro', 'não fiz recall', 'processar montadora', 'defeito fabricação carro'],
    relatedQuestions: ['cons-21', 'cons-1'],
    metaDescription: 'Não fiz o recall do carro e tive problema. Posso processar? Sim, a montadora pode responder. Veja quando.'
  },
  {
    id: 'cons-28',
    slug: 'voo-atrasado-mais-4-horas-direitos',
    question: 'Voo atrasou mais de 4 horas. Quais meus direitos?',
    answer: `Atraso de voo acima de 4 horas gera direitos importantes pela Resolução ANAC 400/2016. Veja:

**Assistência material obrigatória (art. 27):**
- Mais de 1h: comunicação (internet, telefone)
- Mais de 2h: alimentação (refeição ou voucher)
- Mais de 4h: hospedagem, se houver pernoite, e transporte de ida e volta (quem mora na cidade pode receber só o transporte)

**Opções após 4h de atraso (art. 21):**
1. Reacomodação em outro voo (mesma ou outra empresa), na primeira oportunidade
2. Reembolso integral (se não quiser mais viajar), em até 7 dias da solicitação
3. Remarcação para data e horário de sua conveniência, sem custo

**Indenização por danos morais:**
- Não é automática: o STJ exige a demonstração do dano em atraso de voo
- Pesam a duração do atraso, a falta de assistência, o pernoite no aeroporto e a perda de compromissos
- Não existe valor tabelado; quem fixa é o juiz

**O que fazer:**
1. Procure o balcão da empresa
2. Exija a assistência material
3. Peça por escrito o motivo do atraso (art. 20, §2º)
4. Guarde cartões de embarque e recibos
5. Fotografe os painéis de horário
6. Anote protocolos e nomes

**Importante:**
- Motivo meteorológico NÃO dispensa a assistência material
- Problemas de manutenção e operacionais são, em regra, risco da própria empresa
- A empresa deve informar a nova previsão de partida a cada 30 minutos (art. 20, §1º)

**Prazo para processar:** Voos nacionais, 5 anos (CDC). Voos internacionais: 2 anos para danos materiais e 5 anos para danos morais (STF, Tema 1.240).`,
    area: 'consumidor',
    keywords: ['voo atrasado 4 horas', 'atraso voo direitos', 'indenização atraso voo', 'ANAC atraso voo'],
    relatedQuestions: ['cons-15', 'cons-20'],
    metaDescription: 'Voo atrasou mais de 4 horas? Veja seus direitos pela Resolução ANAC 400: assistência material, reacomodação ou reembolso e quando cabe indenização.'
  },
  {
    id: 'cons-29',
    slug: 'nome-sujo-quanto-tempo-limpar',
    question: 'Quanto tempo leva para limpar meu nome após pagar?',
    answer: `Depois que você paga, o **credor** tem até **5 dias úteis** para pedir a retirada do seu nome do cadastro de inadimplentes (Súmula 548 do STJ).

**Como funciona o prazo:**
- Os 5 dias úteis contam a partir do pagamento integral e efetivo (quando o dinheiro chega ao credor)
- A obrigação de pedir a baixa é do credor, não sua
- A lei não fixa um prazo próprio para o birô (Serasa, SPC, Boa Vista) processar a baixa; se o nome continuar negativado depois disso, reclame

**Se não limpar no prazo:**
- A manutenção indevida pode gerar direito a indenização, conforme o caso
- Não existe valor tabelado; o juiz decide com base nas provas
- Você pode pedir no Juizado Especial (sem custas no 1º grau até 40 salários mínimos)

**O que fazer após pagar:**
1. Peça e guarde o comprovante de quitação
2. Aguarde 5 dias úteis
3. Consulte Serasa, SPC e Boa Vista (gratuito)
4. Se continuar negativado, reclame por escrito ao credor e guarde o protocolo
5. Não resolvendo, Procon ou Juizado Especial

**Como consultar:**
- Serasa: serasa.com.br
- SPC Brasil: spcbrasil.org.br
- Boa Vista: consumidorpositivo.com.br

**Dicas importantes:**
- Pague sempre com comprovante
- Guarde o comprovante por pelo menos 5 anos
- Verifique todas as empresas de proteção ao crédito

**Importante:** O prazo máximo de 5 anos de negativação (CDC, art. 43, §1º) conta do dia seguinte ao vencimento da dívida, e não da data do pagamento.`,
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
    answer: `Para processar uma empresa em Salvador, o caminho mais usado é o **Juizado Especial Cível**, para causas de até 40 salários mínimos. Antes, vale tentar resolver com a empresa e com os órgãos de defesa do consumidor.

**Passo a passo:**
1. Reúna documentos (notas fiscais, contratos, conversas, protocolos)
2. Tente resolver com a empresa e anote o protocolo
3. Registre reclamação no Procon-BA, na Codecon (Prefeitura) ou no consumidor.gov.br
4. Se não resolver, procure o Juizado Especial ou um advogado

**Onde processar em Salvador:**
- **Juizados Especiais Cíveis e do Consumidor:** Fórum Ministro Adhemar Raymundo da Silva (Central dos Juizados), Rua Padre Casimiro Quiroga, Loteamento Rio das Pedras, Imbuí, CEP 41720-400
- **Agendamento para entrar sem advogado:** site dos Juizados do TJBA (tjba.jus.br/juizadosespeciais, opção Agendamento de Queixas)
- **Causas maiores ou mais complexas:** Varas Cíveis e de Relações de Consumo, com advogado

**Reclamação administrativa:**
- **Procon-BA:** sede na Rua Carlos Gomes, 746, Centro, e postos nos SACs (lista oficial em ba.gov.br/justica)
- **Codecon Salvador:** codecon.salvador.ba.gov.br
- **Consumidor.gov.br:** pela internet; a empresa participante tem até 10 dias para responder

**Custos:**
- **Juizado Especial:** sem custas no 1º grau em causas de até 40 salários mínimos (Lei 9.099/1995, art. 54)
- **Advogado no Juizado:** dispensado até 20 salários mínimos; de 20 a 40, obrigatório (art. 9º)
- **Justiça Comum:** custas processuais (quem não pode pagar pode pedir gratuidade da justiça)

**Prazos para agir:**
- Defeito em produto ou serviço: 30 dias (não duráveis) ou 90 dias (duráveis) para reclamar (CDC, art. 26)
- Indenização por dano causado por produto ou serviço: 5 anos (CDC, art. 27)
- Trabalhista: 2 anos após a saída do emprego

**Dica:** No Juizado, se você faltar à audiência sem justificativa, o processo é extinto (Lei 9.099/1995, art. 51, I). Guarde a data e leve todas as provas.`,
    area: 'consumidor',
    keywords: ['processar empresa salvador', 'juizado especial salvador', 'ação judicial salvador bahia', 'fórum salvador'],
    relatedQuestions: ['bahia-2', 'bahia-3', 'bahia-5'],
    metaDescription: 'Como processar uma empresa em Salvador: Juizados Especiais na Central dos Juizados (Imbuí), Procon-BA, Codecon, custos e prazos. Guia passo a passo.'
  },
  {
    id: 'bahia-2',
    slug: 'procon-salvador-endereco-telefone',
    question: 'Qual o endereço e telefone do PROCON Salvador?',
    answer: `Em Salvador, quem atende o consumidor em nome do Governo do Estado é o **Procon-BA**, órgão ligado à Secretaria de Justiça e Direitos Humanos. O atendimento presencial é feito na sede (Procon Central) e em postos dentro dos SACs. A Prefeitura também tem o seu órgão de defesa do consumidor, a Codecon.

**Procon Central (sede do Procon-BA):**
- **Endereço:** Rua Carlos Gomes, 746, Centro, Salvador
- **Horário:** segunda a sexta, das 7h às 12h por ordem de chegada e das 13h às 15h30 com agendamento

**Postos do Procon-BA nos SACs de Salvador:**
- **SAC Barra:** Av. Centenário, 2992, térreo, Chame-Chame, CEP 40149-900 (segunda a sexta, 9h às 16h30; sábado, 9h às 12h30)
- **SAC Salvador Shopping:** Av. Tancredo Neves, 2915, Caminho das Árvores, estacionamento G2
- **SAC Comércio:** Av. da França, s/n, 1º andar
- **Outros postos:** SAC Bela Vista, Cajazeiras, Liberdade, Pituaçu (estação de metrô), Periperi, Uruguai e Terminal Rodoviário

**Como agendar o atendimento:**
- **Internet:** portal ba.gov.br, serviço de registro de atendimento do Procon
- **Telefone:** 0800 071 5353 (agendamento dos SACs)
- **WhatsApp:** (71) 4020-5353

**Codecon (Prefeitura de Salvador):**
- **Site:** codecon.salvador.ba.gov.br (denúncia, agendamento e aplicativo)
- **Central da Prefeitura:** 156

**Documentos para atendimento:**
1. RG e CPF
2. Comprovante de residência
3. Documentos do caso (notas, contratos, prints)
4. Protocolo de reclamação à empresa

**Reclamação pela internet:** No consumidor.gov.br, plataforma federal acompanhada pelos Procons, a empresa participante tem até 10 dias para responder.

**Importante:** Endereços e horários mudam com frequência. Antes de sair de casa, confira a lista oficial e atualizada dos postos em ba.gov.br/justica (Postos de Atendimento do Procon-BA). Os dados acima foram conferidos nas páginas oficiais em novembro de 2026.`,
    area: 'consumidor',
    keywords: ['procon salvador', 'procon bahia telefone', 'procon-ba endereço', 'reclamar procon salvador'],
    relatedQuestions: ['bahia-1', 'bahia-3', 'cons-1'],
    metaDescription: 'Procon-BA em Salvador: sede na Rua Carlos Gomes, 746 (Centro) e postos nos SACs. Agendamento pelo ba.gov.br, 0800 071 5353 ou WhatsApp (71) 4020-5353.'
  },
  {
    id: 'bahia-3',
    slug: 'juizado-especial-salvador-onde-fica',
    question: 'Onde fica o Juizado Especial de Salvador?',
    answer: `Em Salvador, os **Juizados Especiais Cíveis e do Consumidor** do TJBA funcionam todos no mesmo prédio: a Central dos Juizados, no Imbuí. É o que consta na lista oficial do TJBA conferida em novembro de 2026.

**Fórum Ministro Adhemar Raymundo da Silva (Central dos Juizados):**
- **Endereço:** Rua Padre Casimiro Quiroga, Loteamento Rio das Pedras, Quadra 01, Lotes 1 a 10, Imbuí, CEP 41720-400
- **Unidades:** Varas do Sistema dos Juizados Especiais de Causas Comuns, do Consumidor, de Trânsito, da Fazenda Pública e duas varas criminais
- **Telefones:** cada vara tem o seu número, listado no site dos Juizados do TJBA

**Fórum Ruy Barbosa (Praça Campo da Pólvora):**
- **Juizados criminais:** 1ª e 2ª Varas do Sistema dos Juizados Especiais Criminais (térreo, sala 14)
- **Atenção:** os Juizados Cíveis e do Consumidor não ficam no Fórum Ruy Barbosa

**Como entrar com ação sem advogado:**
1. Agende o atendimento pelo site dos Juizados (tjba.jus.br/juizadosespeciais, opção Agendamento de Queixas)
2. Leve os documentos e explique o caso; o pedido oral é reduzido a termo pela secretaria (Lei 9.099/1995, art. 14, §3º)
3. A lei manda marcar a sessão de conciliação em até 15 dias do registro (art. 16), mas a data real depende da pauta da unidade
4. Se não houver acordo, o processo segue para instrução e sentença

**Documentos necessários:**
- RG, CPF e comprovante de residência
- Provas do caso (notas, fotos, prints, protocolos)
- Dados do réu (nome ou razão social, CNPJ/CPF, endereço)

**Custos:**
- **1º grau:** sem custas em causas de até 40 salários mínimos (art. 54)
- **Advogado:** dispensado até 20 salários mínimos; de 20 a 40, obrigatório (art. 9º)
- **Recurso:** exige advogado e pagamento do preparo, salvo gratuidade da justiça (arts. 41, §2º, e 54, parágrafo único)

**Importante:** Confira o endereço e o telefone da vara em tjba.jus.br/juizadosespeciais (Endereços e telefones, Capital) antes de ir, porque as unidades podem mudar.`,
    area: 'geral',
    keywords: ['juizado especial salvador', 'onde fica juizado salvador', 'fórum salvador', 'juizado consumidor salvador'],
    relatedQuestions: ['bahia-1', 'bahia-2', 'bahia-5'],
    metaDescription: 'Juizados Especiais Cíveis e do Consumidor de Salvador: Central dos Juizados, Rua Padre Casimiro Quiroga, Imbuí. Como entrar sem advogado, custos e documentos.'
  },
  {
    id: 'bahia-4',
    slug: 'vara-trabalho-salvador-endereco',
    question: 'Onde fica a Vara do Trabalho de Salvador?',
    answer: `A Justiça do Trabalho na Bahia é o **TRT da 5ª Região (TRT5)**. Em Salvador, o tribunal inaugurou em novembro de 2025 a nova sede, o Fórum Trabalhista 2 de Julho.

**Sede do TRT5 em Salvador:**
- **Endereço:** Fórum 2 de Julho, Rua Ivonne Silveira, bairro de Narandiba (região da Avenida Paralela)
- **Site:** trt5.jus.br
- **Antes de ir:** confira no site do TRT5 o endereço e o horário da sua Vara, porque as unidades da capital mudaram de endereço

**Como ajuizar reclamação trabalhista:**
1. Procure advogado ou o sindicato da sua categoria
2. Reúna documentos (CTPS, contracheques, termo de rescisão, extrato do FGTS, mensagens)
3. A ação é proposta pelo PJe (sistema eletrônico), com pedidos certos e valores indicados (CLT, art. 840, §1º)
4. A data da audiência depende da pauta da Vara

**Prazos importantes:**
- 2 anos após a saída do emprego para ajuizar
- Pode cobrar direitos dos últimos 5 anos, contados da data da ação (Constituição, art. 7º, XXIX)

**Justiça gratuita na Justiça do Trabalho:**
- Para quem recebe salário de até 40% do teto dos benefícios do INSS (CLT, art. 790, §3º)
- Ou para quem comprovar que não pode pagar as custas (art. 790, §4º)

**Assistência gratuita:**
- O sindicato da categoria presta assistência jurídica ao trabalhador (Lei 5.584/1970, art. 14)
- Núcleos de prática jurídica de faculdades
- O trabalhador pode reclamar sem advogado nas Varas e no TRT, mas não em recursos ao TST, ação rescisória e mandado de segurança (CLT, art. 791; Súmula 425 do TST)

**Dica:** Honorários de advogado são combinados por escrito e devem respeitar a tabela da OAB da Bahia. Desconfie de promessas de resultado ou de valores garantidos.`,
    area: 'trabalhista',
    keywords: ['vara trabalho salvador', 'trt5 endereço', 'justiça trabalho bahia', 'processar empresa trabalhista salvador'],
    relatedQuestions: ['trab-1', 'trab-2', 'bahia-8'],
    metaDescription: 'Justiça do Trabalho em Salvador (TRT5): sede no Fórum 2 de Julho, Rua Ivonne Silveira, Narandiba. Prazos, justiça gratuita e como ajuizar a ação.'
  },
  {
    id: 'bahia-5',
    slug: 'tjba-demora-processo-consumidor',
    question: 'Quanto tempo demora um processo de consumidor no TJBA?',
    answer: `Não existe prazo garantido para um processo de consumidor no **TJBA (Tribunal de Justiça da Bahia)**: o tempo depende da unidade, da pauta, da necessidade de perícia e dos recursos. O que a lei fixa são alguns prazos do procedimento.

**Juizado Especial Cível (até 40 salários mínimos):**
- A sessão de conciliação deve ser marcada em até 15 dias do registro do pedido (Lei 9.099/1995, art. 16), mas, na prática, a data depende da pauta da unidade
- Sem acordo, a audiência de instrução ocorre em seguida ou em até 15 dias (art. 27)
- Recurso contra a sentença: 10 dias (art. 42), julgado pela Turma Recursal
- Se a empresa não comparecer, os fatos alegados podem ser considerados verdadeiros (art. 20)

**Justiça Comum (Varas de Relações de Consumo e Varas Cíveis):**
- Etapas: citação da empresa, contestação, réplica, eventual perícia e audiência, sentença
- Prazo para a contestação: em regra, 15 dias úteis (CPC, art. 335)
- Apelação: 15 dias úteis (CPC, art. 1.003, §5º)

**Onde ver dados oficiais de tempo:**
- O CNJ publica todos os anos o relatório Justiça em Números, com o tempo médio dos processos por tribunal (cnj.jus.br)

**Fatores que aceleram:**
- Escolher o Juizado Especial quando o caso permite
- Documentação completa desde o início
- Endereço correto da empresa (facilita a citação)
- Acordo na audiência
- Acompanhamento constante

**Fatores que atrasam:**
- Empresa não encontrada no endereço
- Necessidade de perícia
- Recursos

**Consulta processual:**
- Site: tjba.jus.br (consulta pelo número do processo)
- No PJe, o processo eletrônico pode ser acompanhado pelo advogado ou pela parte cadastrada

**Dica:** Para causas de até 40 salários mínimos e sem necessidade de perícia complexa, o Juizado Especial costuma ser o caminho mais simples. Acima disso, ou com perícia complexa, o caso vai para a Justiça Comum.`,
    area: 'consumidor',
    keywords: ['demora processo tjba', 'tempo processo consumidor bahia', 'prazo juizado especial salvador', 'consultar processo tjba'],
    relatedQuestions: ['bahia-1', 'bahia-3', 'cons-1'],
    metaDescription: 'Quanto tempo demora um processo de consumidor no TJBA? Veja os prazos que a lei fixa no Juizado e na Justiça Comum, onde ver dados oficiais e o que acelera.'
  },
  {
    id: 'bahia-6',
    slug: 'inss-salvador-agendar-pericia',
    question: 'Como agendar perícia do INSS em Salvador?',
    answer: `Para agendar perícia médica do INSS em Salvador, use o **Meu INSS** (aplicativo ou site meu.inss.gov.br) ou ligue para a **Central 135**.

**Como agendar pelo Meu INSS:**
1. Baixe o app "Meu INSS" ou acesse meu.inss.gov.br
2. Faça login com a conta gov.br
3. Escolha o serviço de benefício por incapacidade (auxílio-doença) e siga as etapas
4. Escolha data, horário e agência, quando houver perícia presencial
5. Anote o número do protocolo

**Agências do INSS em Salvador:**
- A lista de agências e endereços aparece no próprio Meu INSS durante o agendamento e também pode ser informada pela Central 135
- Confirme sempre o endereço indicado no seu comprovante de agendamento
- Em alguns casos, o pedido de auxílio-doença pode ser analisado pelos documentos médicos enviados pelo Meu INSS, sem perícia presencial

**Central 135:**
- Segunda a sábado, das 7h às 22h (horário de Brasília)
- Ligação gratuita de telefone fixo, orelhão e celular

**Documentos para perícia:**
- Documento oficial com foto e CPF
- Carteira de trabalho e outros comprovantes de vínculo (se tiver)
- Atestados e laudos médicos recentes, com CID e descrição das limitações
- Exames e receitas de medicamentos

**Dicas importantes:**
- Chegue com antecedência ao local indicado
- Leve todos os laudos e exames originais
- Descreva suas limitações com clareza e sem exageros
- Se o benefício for negado, você pode recorrer em 30 dias ou entrar com ação judicial (Juizado Especial Federal, até 60 salários mínimos)
- Quem não pode pagar advogado pode procurar a Defensoria Pública da União (dpu.def.br)`,
    area: 'previdenciario',
    keywords: ['agendar perícia inss salvador', 'inss salvador agência', 'meu inss bahia', 'perícia médica salvador'],
    relatedQuestions: ['prev-1', 'prev-3', 'bahia-20'],
    metaDescription: 'Como agendar perícia do INSS em Salvador: pelo Meu INSS ou Central 135 (seg. a sáb., 7h às 22h). Documentos para a perícia e o que fazer se o benefício for negado.'
  },
  {
    id: 'bahia-7',
    slug: 'defensoria-publica-salvador',
    question: 'Como conseguir advogado gratuito em Salvador?',
    answer: `A **Defensoria Pública do Estado da Bahia (DPE-BA)** presta assistência jurídica gratuita a quem não pode pagar advogado sem prejuízo do próprio sustento.

**Quem pode ser atendido:**
- Pessoas e famílias sem condições de pagar advogado
- A Defensoria avalia a renda e o patrimônio de toda a família (por isso pede comprovantes)
- Mulheres em situação de violência doméstica têm acesso garantido à Defensoria (Lei Maria da Penha, art. 28)

**Contatos da Defensoria Pública da Bahia:**
- **Disque Defensoria:** 129
- **Sede:** Av. Ulysses Guimarães, 3386, Centro Administrativo da Bahia (CAB), Salvador, CEP 41745-007
- **Telefones da sede:** (71) 3117-9049 / (71) 3117-9160
- **Horário:** segunda a quinta, das 8h às 17h; sexta, das 8h às 14h
- **Site:** defensoria.ba.def.br (agendamento de atendimento e lista de unidades)

**Unidades de família em Salvador (Jardim Baiano):**
- **Casa da Defensoria das Famílias I:** Rua Arquimedes Gonçalves, 188, Jardim Baiano
- **Casa da Defensoria das Famílias II:** Rua Boulevard América, 14, Jardim Baiano
- **Telefones:** (71) 3103-3675 / (71) 3116-6794

**Outras opções gratuitas:**
- Núcleos de Prática Jurídica de faculdades de Direito
- Juizados Especiais Cíveis: até 20 salários mínimos, sem advogado
- Causas contra o INSS e outros órgãos federais: Defensoria Pública da União (dpu.def.br)
- Causas trabalhistas: sindicato da categoria

**Documentos para atendimento (lista da DPE-BA):**
- RG original
- Comprovante de residência
- Comprovante de renda próprio e de todos os membros da família
- Comprovante de patrimônio
- Declaração de hipossuficiência
- Documentos do caso

**Áreas atendidas:**
- Família (divórcio, pensão, guarda)
- Consumidor
- Cível
- Criminal

**Importante:** Agende pelo site ou pelo 129 antes de ir. Endereços e telefones de todas as unidades estão em defensoria.ba.def.br (Atendimento, Telefones úteis). Dados conferidos no site oficial em novembro de 2026.`,
    area: 'geral',
    keywords: ['advogado gratuito salvador', 'defensoria pública bahia', 'assistência jurídica gratuita salvador', 'advogado de graça bahia'],
    relatedQuestions: ['bahia-1', 'bahia-4', 'geral-5'],
    metaDescription: 'Advogado gratuito em Salvador: Defensoria Pública da Bahia, Disque 129, sede na Av. Ulysses Guimarães, 3386 (CAB). Quem pode ser atendido e documentos.'
  },
  {
    id: 'bahia-8',
    slug: 'divorcio-cartorio-salvador',
    question: 'Quanto custa um divórcio em cartório em Salvador?',
    answer: `O **divórcio extrajudicial** (em cartório) é o caminho mais simples quando o casal está de acordo com tudo. Ele é feito por escritura pública em um Tabelionato de Notas, sempre com advogado.

**Requisitos para divórcio em cartório:**
- Consenso entre as partes sobre o divórcio, a partilha de bens e a pensão entre os cônjuges (se houver)
- Presença de advogado, que pode ser o mesmo para o casal, ou de defensor público (CPC, art. 733, §2º)
- Filhos menores ou incapazes: desde a Resolução CNJ 571/2024, o divórcio é possível em cartório, desde que guarda, convivência e pensão deles já tenham sido resolvidas na Justiça

**Quanto custa:**
- **Escritura:** os emolumentos do cartório seguem a tabela oficial do Estado da Bahia, atualizada todos os anos; o valor pode variar conforme haja ou não partilha de bens
- **Imposto:** se a partilha for desigual, pode haver imposto sobre a diferença (ITD estadual, ou ITBI municipal se houver compensação em dinheiro)
- **Honorários advocatícios:** combinados por escrito com o advogado, observando a tabela da OAB da Bahia
- **Gratuidade:** quem declarar que não pode pagar os emolumentos tem direito à escritura gratuita, mesmo com advogado particular (Resolução CNJ 35/2007)

**Onde fazer:**
- Em qualquer Tabelionato de Notas, à sua escolha, sem regra de domicílio (Resolução CNJ 35/2007, art. 1º)
- Também é possível fazer a escritura por videoconferência, pela plataforma e-Notariado dos cartórios

**Documentos necessários:**
- Certidão de casamento atualizada (emitida há no máximo 90 dias)
- RG e CPF dos cônjuges
- Pacto antenupcial (se houver)
- Documentos dos bens a partilhar (escrituras, documentos de veículos)
- Certidão de nascimento dos filhos e a decisão judicial sobre eles, se houver filhos menores

**Prazo:** Não há prazo legal para o cartório; a escritura pode ser lavrada assim que a documentação estiver completa e as partes assinarem.

**Alternativa gratuita:**
- Defensoria Pública da Bahia (Disque 129), para quem não pode pagar advogado
- Vara de Família, quando não houver acordo ou quando as questões dos filhos ainda não tiverem sido resolvidas

**Importante:** Se ainda não houver decisão judicial sobre guarda, convivência e pensão dos filhos menores, essas questões (e o divórcio) devem ser levadas à Justiça.`,
    area: 'familia',
    keywords: ['divórcio cartório salvador', 'quanto custa divórcio bahia', 'divórcio extrajudicial salvador', 'separação consensual salvador'],
    relatedQuestions: ['fam-1', 'fam-3', 'bahia-7'],
    metaDescription: 'Divórcio em cartório em Salvador: requisitos, documentos, quando é possível com filhos menores (Res. CNJ 571/2024) e como funcionam emolumentos e gratuidade.'
  },
  {
    id: 'bahia-9',
    slug: 'voo-cancelado-aeroporto-salvador',
    question: 'Voo cancelado no Aeroporto de Salvador: o que fazer?',
    answer: `Se seu voo foi cancelado no **Aeroporto de Salvador (SSA)**, você tem direitos garantidos pela Resolução ANAC 400/2016 e pelo Código de Defesa do Consumidor.

**Seus direitos imediatos:**
- **Informação:** a empresa deve informar o cancelamento imediatamente e, se você pedir, dar o motivo por escrito (art. 20)
- **Escolha sua (art. 21):** reacomodação em outro voo (da mesma ou de outra empresa), reembolso integral ou viagem por outro meio de transporte
- **Reembolso:** em até 7 dias da solicitação (art. 29)
- **Assistência material:** conforme o tempo de espera

**Assistência material obrigatória (art. 27):**
- Mais de 1h: comunicação (internet, telefone)
- Mais de 2h: alimentação
- Mais de 4h: hospedagem, se houver pernoite, e transporte; quem mora em Salvador pode receber só o transporte de ida e volta para casa

**O que fazer no aeroporto:**
1. Procure o balcão da companhia aérea
2. Peça por escrito o motivo do cancelamento
3. Fotografe os painéis de voo
4. Guarde cartões de embarque e recibos de gastos
5. Anote nomes e protocolos

**Indenização por danos morais:**
- Não é automática: em cancelamento e atraso de voo, o STJ exige que o dano seja demonstrado
- Pesam o tempo de espera, a falta de assistência, o pernoite e a perda de compromissos
- Não existe valor tabelado; quem fixa é o juiz

**Onde reclamar:**
- **ANAC:** plataforma Anac Passageiro (gov.br/anac); a empresa tem até 10 dias corridos para responder; dúvidas pelo telefone 163
- **Procon-BA:** sede na Rua Carlos Gomes, 746, Centro, e postos nos SACs (lista em ba.gov.br/justica); agendamento pelo 0800 071 5353
- **Justiça:** Juizados Especiais Cíveis de Salvador, na Central dos Juizados (Imbuí), para causas de até 40 salários mínimos

**Prazo para ação:** Voos nacionais, 5 anos (CDC). Voos internacionais: 2 anos para danos materiais (Convenção de Montreal) e 5 anos para danos morais (STF, Tema 1.240).

**Sobre o aeroporto:** O Aeroporto de Salvador foi concedido à iniciativa privada em 2017 e é administrado por concessionária do grupo VINCI Airports, e não mais pela Infraero, segundo a ANAC. As obrigações de assistência e reembolso são da companhia aérea.`,
    area: 'consumidor',
    keywords: ['voo cancelado salvador', 'aeroporto salvador cancelamento', 'direitos voo cancelado ssa', 'indenização voo bahia'],
    relatedQuestions: ['cons-15', 'cons-28', 'bahia-1'],
    metaDescription: 'Voo cancelado no Aeroporto de Salvador (SSA)? Seus direitos pela Resolução ANAC 400: reacomodação, reembolso em 7 dias, assistência material e onde reclamar.'
  },
  {
    id: 'bahia-10',
    slug: 'plano-saude-negou-cirurgia-salvador',
    question: 'Plano de saúde negou cirurgia em Salvador. O que fazer?',
    answer: `Se o plano de saúde negou sua cirurgia em Salvador, você pode exigir a resposta por escrito, reclamar na ANS e, em casos urgentes, pedir à Justiça uma decisão de urgência (liminar). O tempo de análise depende de cada juízo e de cada caso.

**Passos para resolver:**

**1. Exija a resposta e a negativa por escrito:**
- Pela RN ANS 623/2024 (em vigor desde 1º/07/2025), urgência e emergência exigem resposta imediata
- Nos demais casos, a operadora tem até 5 dias úteis para responder, ou até 10 dias úteis em alguns procedimentos eletivos, como os de alta complexidade e as internações eletivas
- A negativa deve ser entregue por escrito, com o motivo em linguagem clara e a forma de pedir reanálise

**2. Reclame na ANS:**
- Disque ANS: 0800 701 9656
- Site: gov.br/ans
- A reclamação abre uma NIP; em questões de cobertura, a operadora tem até 5 dias úteis para resolver

**3. Procon-BA:**
- Sede na Rua Carlos Gomes, 746, Centro, e postos nos SACs (lista em ba.gov.br/justica)
- Agendamento: 0800 071 5353 ou WhatsApp (71) 4020-5353

**4. Ação judicial com pedido de liminar:**
- Juizado Especial (até 40 salários mínimos, sem perícia complexa) ou Vara de Relações de Consumo
- Em urgência, é possível pedir tutela de urgência; fora do expediente, o pedido vai ao plantão judiciário do TJBA, pelo PJe
- Quem não pode pagar advogado pode procurar a Defensoria Pública da Bahia (Disque 129)

**Negativas mais comuns (e muitas vezes ilegais):**
- "Procedimento não coberto" (se está no rol da ANS)
- "Fora do rol": a cobertura pode ser obrigatória se cumpridos os 5 requisitos fixados pelo STF em 2025 (ADI 7.265)
- "Carência não cumprida" (urgência e emergência têm carência máxima de 24 horas)
- "Doença preexistente" depois de 24 meses de contrato

**Indenização:**
- A negativa indevida pode gerar indenização por danos morais, conforme o caso
- Não existe valor tabelado; quem fixa é o juiz
- Danos materiais: reembolso do que você pagou

**Atendimento de emergência pelo SUS:**
- SAMU: 192
- A rede pública atende emergências independentemente de plano de saúde

**Importante:** Cirurgias de urgência e emergência devem ser cobertas depois de 24 horas da contratação do plano, mesmo que outras carências não tenham terminado.`,
    area: 'consumidor',
    keywords: ['plano saúde negou cirurgia salvador', 'liminar plano saúde bahia', 'ação contra plano saúde salvador', 'ans bahia'],
    relatedQuestions: ['cons-12', 'cons-13', 'bahia-2'],
    metaDescription: 'Plano de saúde negou cirurgia em Salvador? Prazos de resposta da RN ANS 623/2024, reclamação na ANS (0800 701 9656), Procon-BA e pedido de liminar.'
  },
  {
    id: 'bahia-11',
    slug: 'golpe-pix-salvador-como-recuperar',
    question: 'Caí em golpe do Pix em Salvador. Como recuperar o dinheiro?',
    answer: `Se você foi vítima de **golpe do Pix** em Salvador, aja rápido: o caminho é pedir a devolução pelo MED (Mecanismo Especial de Devolução do Banco Central), registrar ocorrência e, se o banco falhou, buscar a Justiça.

**Passos imediatos:**

**1. Avise o seu banco na hora:**
- Pelo app (opção de contestar ou relatar golpe) ou pelo SAC
- Peça a abertura do MED e anote o protocolo
- O pedido pode ser feito em até 80 dias da transação, mas quanto antes, maior a chance de encontrar saldo para bloquear

**2. Registre Boletim de Ocorrência:**
- Online: Delegacia Virtual, pelo link oficial no site da Polícia Civil da Bahia (ba.gov.br/policiacivil), com conta gov.br
- Presencial: em qualquer delegacia de Salvador
- A Polícia Civil da Bahia tem unidades especializadas em crimes cibernéticos e fraudes; informe-se no site oficial

**3. Reclame formalmente:**
- SAC e Ouvidoria do banco
- Banco Central: bcb.gov.br, "Meu BC", reclamação contra bancos
- Procon-BA: sede na Rua Carlos Gomes, 746, Centro; agendamento pelo 0800 071 5353

**4. Ação judicial:**
- O banco pode ser responsabilizado quando há falha de segurança (Súmula 479 do STJ)
- Pedido de devolução do valor e, conforme o caso, de danos morais
- Juizado Especial Cível de Salvador (Central dos Juizados, Imbuí), para causas de até 40 salários mínimos

**Como funciona o MED:**
- O banco de quem recebeu bloqueia o valor que houver na conta
- Confirmada a fraude, o dinheiro é devolvido, total ou parcialmente
- Na versão mais nova do MED, adotada em 2026, o rastreio pode alcançar outras contas para onde o dinheiro foi enviado
- Não há garantia de devolução: depende da análise e do saldo encontrado

**Golpes mais comuns:**
- Falso funcionário de banco
- QR Code adulterado
- Perfil falso no WhatsApp
- "Pix errado" (pedido de devolução falso)
- Falso advogado ou falsa intimação

**Atenção:** Desconfie de quem promete recuperar o dinheiro mediante pagamento antecipado: é outro golpe comum.`,
    area: 'consumidor',
    keywords: ['golpe pix salvador', 'recuperar dinheiro pix bahia', 'fraude pix salvador', 'delegacia crimes cibernéticos bahia'],
    relatedQuestions: ['cons-24', 'cons-25', 'bahia-2'],
    metaDescription: 'Caiu em golpe do Pix em Salvador? Peça o MED ao banco (até 80 dias), registre BO na Delegacia Virtual e reclame no Banco Central e no Procon-BA. Passo a passo.'
  },
  {
    id: 'bahia-12',
    slug: 'nome-negativado-indevidamente-salvador',
    question: 'Nome negativado indevidamente em Salvador. Quanto posso ganhar?',
    answer: `A negativação indevida do nome pode gerar direito a **indenização por danos morais**. Mas não existe tabela de valores: o juiz decide caso a caso, e ninguém pode garantir quanto você vai receber.

**Como o valor é definido:**
- O STJ entende que, em regra, o dano moral da negativação indevida é presumido (não é preciso provar o sofrimento)
- O valor é fixado pelo juiz, considerando o caso concreto
- Se já havia outra negativação legítima antes, não cabe dano moral, só o cancelamento da anotação indevida (Súmula 385 do STJ)

**Fatores que costumam pesar:**
- Negativação por dívida já paga
- Múltiplas negativações indevidas
- Tempo longo de negativação
- Prejuízo comprovado (crédito negado, perda de negócio ou de emprego)
- Falta de aviso prévio por escrito antes da inclusão (Súmula 359 do STJ)

**Como processar em Salvador:**

**1. Reúna provas:**
- Consulta do CPF no Serasa, SPC e Boa Vista
- Comprovante de pagamento (se já pagou)
- Contrato ou prova de que a dívida não existe
- Boletim de ocorrência, se foi fraude

**2. Onde processar:**
- Juizado Especial Cível (até 40 salários mínimos, sem custas no 1º grau): Central dos Juizados, Rua Padre Casimiro Quiroga, Imbuí
- Justiça Comum (acima de 40 salários mínimos), com advogado

**3. Prazos:**
- Para pedir indenização, o prazo pode ser de 3 ou de 5 anos, conforme o caso (Código Civil, art. 206, §3º, V, ou CDC, art. 27); não espere
- Depois do pagamento, o credor tem 5 dias úteis para pedir a baixa (Súmula 548 do STJ)

**Procon-BA pode ajudar:**
- Registrar a reclamação e notificar a empresa
- Aplicar sanções administrativas
- Sede na Rua Carlos Gomes, 746, Centro, e postos nos SACs; agendamento: 0800 071 5353

**Dica:** Antes de aceitar qualquer acordo, confira se ele inclui a retirada do seu nome dos cadastros e guarde tudo por escrito. Em caso de dúvida, consulte um advogado ou a Defensoria Pública (Disque 129).`,
    area: 'consumidor',
    keywords: ['nome negativado salvador', 'indenização serasa salvador', 'negativação indevida bahia', 'danos morais spc bahia'],
    relatedQuestions: ['cons-16', 'cons-23', 'bahia-2'],
    metaDescription: 'Nome negativado indevidamente em Salvador? Como funciona a indenização (sem valor tabelado), provas, prazos e onde processar: Juizado no Imbuí e Procon-BA.'
  },

  // FEIRA DE SANTANA (6 FAQs)
  {
    id: 'bahia-13',
    slug: 'procon-feira-de-santana-endereco',
    question: 'Onde fica o PROCON de Feira de Santana?',
    answer: `Em Feira de Santana, o consumidor pode procurar o **Procon municipal**, ligado à Prefeitura, e usar a reclamação online do consumidor.gov.br.

**Procon de Feira de Santana (Prefeitura):**
- Não conseguimos confirmar em fonte oficial atualizada o endereço, o telefone e o horário do Procon municipal
- Endereço e telefones atualizados: site da Prefeitura, feiradesantana.ba.gov.br (página do PROCON, em Órgãos e Secretarias)
- Ligue ou consulte o site antes de ir, para não perder a viagem

**Procon-BA (estadual):**
- A lista oficial de postos do Procon-BA, conferida em novembro de 2026, não tem posto em Feira de Santana
- Lista atualizada: ba.gov.br/justica (Postos de Atendimento)

**Reclamação pela internet:**
- Consumidor.gov.br: a empresa participante tem até 10 dias para responder

**Documentos necessários:**
- RG e CPF
- Comprovante de residência
- Nota fiscal ou contrato
- Protocolos de atendimento com a empresa
- Prints de conversas e fotos do problema

**Tipos de atendimento de um Procon:**
- Reclamações de consumo
- Orientação sobre direitos
- Audiências de conciliação com a empresa

**Se não resolver, vá à Justiça:**
- **Juizados Especiais de Feira de Santana:** Av. Presidente Dutra, s/n, Santa Mônica, CEP 44050-054, telefone (75) 3615-1900 (dados do TJBA)
- **Defensoria Pública em Feira de Santana:** Av. Maria Quitéria, 1.235, Centro, (75) 3614-6963 / 3614-8355 (dados da DPE-BA)

**Dica:** Antes de ir, tente resolver com a empresa e anote todos os protocolos. Leve cópias dos documentos.`,
    area: 'consumidor',
    keywords: ['procon feira de santana', 'procon feira santana telefone', 'defesa consumidor feira', 'reclamar procon feira'],
    relatedQuestions: ['bahia-14', 'bahia-17', 'bahia-2'],
    metaDescription: 'Procon em Feira de Santana: onde conferir o endereço oficial, reclamação online, Juizados na Av. Presidente Dutra (75) 3615-1900 e Defensoria Pública.'
  },
  {
    id: 'bahia-14',
    slug: 'juizado-especial-feira-de-santana',
    question: 'Como processar no Juizado Especial de Feira de Santana?',
    answer: `O **Sistema dos Juizados Especiais de Feira de Santana** julga causas cíveis de até 40 salários mínimos, de forma mais simples que a Justiça Comum.

**Endereço dos Juizados (dados do TJBA):**
- **Local:** Av. Presidente Dutra, s/n, bairro Santa Mônica, Feira de Santana, CEP 44050-054
- **Telefone:** (75) 3615-1900
- **Unidades:** 1ª a 5ª Varas do Sistema dos Juizados Especiais
- **Lista atualizada:** tjba.jus.br/juizadosespeciais (Endereços e telefones, Interior)

**Como entrar com ação:**
1. Agende o atendimento pelo site dos Juizados do TJBA (opção Agendamento de Queixas) ou procure a unidade
2. Leve os documentos; o pedido pode ser feito oralmente e é reduzido a termo pela secretaria (Lei 9.099/1995, art. 14, §3º)
3. A lei manda marcar a sessão de conciliação em até 15 dias do registro (art. 16), mas a data real depende da pauta
4. Se não houver acordo, o processo segue para instrução e sentença

**Documentos necessários:**
- RG e CPF
- Comprovante de residência
- Provas do caso (notas, fotos, prints, protocolos)
- Dados do réu (nome ou razão social, CNPJ/CPF, endereço)

**Custos:**
- **1º grau:** sem custas em causas de até 40 salários mínimos (Lei 9.099/1995, art. 54)
- **Advogado:** dispensado até 20 salários mínimos; de 20 a 40, obrigatório (art. 9º)
- **Recurso:** exige advogado e preparo, salvo gratuidade da justiça

**Regras importantes:**
- Faltar à audiência sem justificativa extingue o processo (art. 51, I)
- Ao escolher o Juizado, você renuncia ao valor que passar de 40 salários mínimos (art. 3º, §3º)
- Recurso: 10 dias a partir da sentença (art. 42)

**Tipos de causas:**
- Consumidor (produtos, serviços)
- Cobranças indevidas
- Acidentes de trânsito
- Indenizações em geral

**Sem condições de pagar advogado:** Defensoria Pública em Feira de Santana, Av. Maria Quitéria, 1.235, Centro, (75) 3614-6963 / 3614-8355.`,
    area: 'geral',
    keywords: ['juizado especial feira santana', 'processar feira de santana', 'fórum feira santana', 'pequenas causas feira'],
    relatedQuestions: ['bahia-13', 'bahia-15', 'bahia-3'],
    metaDescription: 'Juizados Especiais de Feira de Santana: Av. Presidente Dutra, s/n, Santa Mônica, (75) 3615-1900. Como entrar com ação, custos (sem custas no 1º grau) e documentos.'
  },
  {
    id: 'bahia-15',
    slug: 'vara-trabalho-feira-de-santana',
    question: 'Onde fica a Vara do Trabalho de Feira de Santana?',
    answer: `As **Varas do Trabalho de Feira de Santana** pertencem ao TRT da 5ª Região (TRT5) e julgam as ações trabalhistas da cidade e de municípios da região.

**Endereço e contatos:**
- Não conseguimos confirmar em fonte oficial atualizada o endereço e o telefone das Varas do Trabalho de Feira de Santana
- Endereço, telefone e lista de municípios atendidos: site oficial do TRT5, trt5.jus.br
- As ações são propostas pelo sistema eletrônico PJe

**Como ajuizar ação trabalhista:**
1. Procure advogado ou o sindicato da sua categoria
2. Reúna documentos (CTPS, contracheques, termo de rescisão, extrato do FGTS)
3. A ação é distribuída eletronicamente, com pedidos certos e valores indicados (CLT, art. 840, §1º)
4. A data da audiência depende da pauta da Vara

**Documentos importantes:**
- CTPS (física ou digital)
- Contracheques
- Termo de rescisão
- Contrato de trabalho
- Provas (e-mails, mensagens, testemunhas)

**Prazos:**
- 2 anos após a saída do emprego para ajuizar
- Pode cobrar direitos dos últimos 5 anos, contados da data da ação

**Justiça gratuita:**
- Para quem recebe salário de até 40% do teto dos benefícios do INSS (CLT, art. 790, §3º)
- Ou para quem comprovar insuficiência de recursos (art. 790, §4º)

**Assistência gratuita:**
- Sindicato da categoria (Lei 5.584/1970, art. 14)
- Núcleos de prática jurídica de faculdades
- Na Justiça do Trabalho, o trabalhador pode reclamar sem advogado nas Varas e no TRT (CLT, art. 791), com os limites da Súmula 425 do TST

**Denúncia de irregularidades (Ministério do Trabalho):** Pela internet, em denuncia.sit.trabalho.gov.br, ou pelo telefone Alô Trabalho 158.`,
    area: 'trabalhista',
    keywords: ['vara trabalho feira santana', 'trt feira de santana', 'processo trabalhista feira', 'justiça trabalho feira'],
    relatedQuestions: ['bahia-16', 'bahia-4', 'trab-1'],
    metaDescription: 'Vara do Trabalho de Feira de Santana: onde conferir o endereço oficial (TRT5), prazos, justiça gratuita, documentos e assistência gratuita pelo sindicato.'
  },
  {
    id: 'bahia-16',
    slug: 'direitos-trabalhadores-feira-santana',
    question: 'Quais os direitos dos trabalhadores em Feira de Santana?',
    answer: `Os trabalhadores de Feira de Santana têm os mesmos direitos garantidos pela **CLT** e pela Constituição Federal, além dos previstos nas convenções coletivas de cada categoria.

**Direitos básicos de todo trabalhador com carteira:**
- Carteira assinada desde o 1º dia
- Salário mínimo nacional ou o piso da categoria, se for maior
- 13º salário
- Férias + 1/3
- FGTS (8% do salário, depositado pela empresa)
- Hora extra (no mínimo 50%; em dobro em domingos e feriados não compensados)
- Descanso semanal remunerado
- Vale-transporte (desconto de até 6% do salário básico)

**Direitos específicos por categoria e condição de trabalho:**
- Piso salarial (conforme convenção coletiva)
- Adicional de insalubridade (10%, 20% ou 40%, conforme o grau)
- Adicional de periculosidade (30% sobre o salário, sem gratificações e prêmios)
- Adicional noturno (20%, das 22h às 5h, no trabalho urbano)

**Principais setores em Feira de Santana:**
- Comércio e serviços
- Indústria
- Construção civil
- Logística e transporte

**Onde encontrar a convenção coletiva:**
- No sindicato dos trabalhadores da sua categoria
- No sistema Mediador, do Ministério do Trabalho, onde as convenções são registradas

**Se seus direitos forem violados:**

1. **Sindicato da categoria:**
- Orientação e assistência jurídica

2. **Ministério do Trabalho:**
- Denúncia online: denuncia.sit.trabalho.gov.br
- Alô Trabalho: 158

3. **Justiça do Trabalho:**
- Varas do Trabalho de Feira de Santana (endereço atualizado em trt5.jus.br)

**Prazo para reclamar:** 2 anos após sair do emprego, cobrando os últimos 5 anos.`,
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

**Prazos para reclamar (CDC, art. 26):**
- Produtos não duráveis: 30 dias
- Produtos duráveis: 90 dias
- Defeito aparente: conta da entrega; vício oculto: conta de quando o defeito aparece

**Seus direitos (Art. 18 do CDC):**
1. **Reparo** pelo fornecedor em até 30 dias
2. Se não consertar no prazo: **troca do produto**, **devolução do dinheiro** (com correção) ou **abatimento proporcional** do preço; a escolha é sua
3. Produto essencial ou defeito grave: pode exigir a solução imediata (art. 18, §3º)

**Passo a passo:**

**1. Reclame na loja ou no fabricante:**
- Leve o produto e a nota fiscal
- Peça protocolo por escrito (a reclamação comprovada suspende o prazo, art. 26, §2º, I)

**2. Se não resolver em 30 dias:**
- Exija troca, devolução ou abatimento
- É escolha SUA, não da loja

**3. Procon:**
- Procon de Feira de Santana (Prefeitura): endereço e telefone atualizados em feiradesantana.ba.gov.br
- Consumidor.gov.br: a empresa participante tem até 10 dias para responder

**4. Juizado Especial:**
- Sistema dos Juizados Especiais de Feira de Santana: Av. Presidente Dutra, s/n, Santa Mônica, (75) 3615-1900
- Sem custas no 1º grau em causas de até 40 salários mínimos; até 20, sem advogado

**Documentos importantes:**
- Nota fiscal
- Prints de conversas
- Fotos/vídeos do defeito
- Protocolos de atendimento

**Indenização:**
- Danos materiais: valor do produto e prejuízos comprovados
- Danos morais: apenas se houver transtorno grave, analisado caso a caso`,
    area: 'consumidor',
    keywords: ['produto defeituoso feira santana', 'trocar produto feira', 'defeito garantia feira santana', 'reclamar loja feira'],
    relatedQuestions: ['bahia-13', 'cons-8', 'cons-9'],
    metaDescription: 'Produto com defeito em Feira de Santana? Direito a troca, devolução ou reparo em 30 dias. PROCON, Juizado e seus direitos.'
  },
  {
    id: 'bahia-18',
    slug: 'cobranca-indevida-feira-santana',
    question: 'Recebi cobrança indevida em Feira de Santana. Tenho direito a devolução em dobro?',
    answer: `Sim! O Código de Defesa do Consumidor garante **devolução em dobro** do que você pagou indevidamente, salvo engano justificável da empresa.

**O que diz a lei (Art. 42, parágrafo único, do CDC):**
> "O consumidor cobrado em quantia indevida tem direito à repetição do indébito, por valor igual ao dobro do que pagou em excesso, acrescido de correção monetária e juros legais, salvo hipótese de engano justificável."

**Quando tenho direito:**
- Pagou valor maior que o devido
- Cobrança por serviço não contratado
- Cobrança duplicada
- Taxa ou tarifa ilegal
- Segundo o STJ, não é preciso provar má-fé: basta a cobrança contrariar a boa-fé (EAREsp 676.608)

**Como conseguir a devolução em dobro:**

**1. Contate a empresa:**
- Peça o estorno em dobro por escrito
- Anote o protocolo

**2. Procon:**
- Procon de Feira de Santana (Prefeitura): endereço e telefone atualizados em feiradesantana.ba.gov.br
- Consumidor.gov.br: resposta da empresa em até 10 dias

**3. Juizado Especial:**
- Juizados Especiais de Feira de Santana: Av. Presidente Dutra, s/n, Santa Mônica, (75) 3615-1900
- Ação de repetição de indébito, com pedido de danos morais quando houver

**Sobre valores:**
- Devolução em dobro: o dobro do que foi pago a mais, com correção e juros
- Danos morais: só em casos de transtorno relevante; não há valor tabelado

**Prazo para reclamar:** Para valores de serviços de telefonia não contratados, o STJ fixou 10 anos (EAREsp 738.991); em água e esgoto, também 10 anos (Súmula 412). Em outros casos, o prazo depende da situação: não deixe para depois.

**Exceção:** A empresa não devolve em dobro se provar que foi engano justificável.

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
    answer: `Em Vitória da Conquista, o consumidor pode procurar o **Procon municipal** (ligado à Prefeitura) ou o **posto do Procon-BA** no SAC da cidade.

**Posto do Procon-BA em Vitória da Conquista (dados oficiais do Procon-BA):**
- **Local:** Posto SAC Vitória da Conquista, Av. Olívia Flores, 2500, Boulevard Shopping Candeias, CEP 45028-906
- **Horário:** segunda a sexta, das 9h às 18h
- **Agendamento:** portal ba.gov.br, 0800 071 5353 ou WhatsApp (71) 4020-5353

**Procon municipal de Vitória da Conquista:**
- A Prefeitura mantém Procon próprio, que faz fiscalizações e audiências de conciliação
- Não conseguimos confirmar em fonte oficial o endereço e o telefone direto do Procon municipal
- Endereço e telefones atualizados: site da Prefeitura, pmvc.ba.gov.br (notícias e Ouvidoria)
- Central telefônica da Prefeitura: (77) 3424-8500

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
- **Consumidor.gov.br:** reclamação online; a empresa tem até 10 dias para responder
- **Juizados Especiais de Vitória da Conquista:** Fórum João Mangabeira, Praça Estevão Santos, 5º andar, Centro, CEP 45020-070 (dados do TJBA)
- **Defensoria Pública:** Rua Rio Doce, 2294, Loteamento Itamaraty, Candeias, (77) 3229-2050

**Dica:** Antes de ir ao Procon, tente resolver diretamente com a empresa. Se não resolver em até 5 dias úteis, procure o órgão com todos os protocolos em mãos.`,
    area: 'consumidor',
    keywords: ['procon vitória conquista', 'procon conquista telefone', 'defesa consumidor conquista', 'reclamar procon conquista'],
    relatedQuestions: ['bahia-21', 'bahia-22', 'bahia-2'],
    metaDescription: 'Procon em Vitória da Conquista: posto do Procon-BA no Boulevard Shopping Candeias (Av. Olívia Flores, 2500), seg. a sex., 9h às 18h. Procon municipal e alternativas.'
  },
  {
    id: 'bahia-20',
    slug: 'inss-vitoria-conquista-aposentadoria',
    question: 'Como dar entrada na aposentadoria em Vitória da Conquista?',
    answer: `Para dar entrada na **aposentadoria em Vitória da Conquista**, o caminho mais prático é o Meu INSS; o atendimento presencial, quando necessário, é agendado.

**Agência do INSS em Vitória da Conquista:**
- O endereço e o horário da agência são informados pelo Meu INSS e pela Central 135 no momento do agendamento
- Confira sempre o endereço que aparece no seu comprovante de agendamento

**Como solicitar aposentadoria:**

**1. Pelo Meu INSS (mais rápido):**
- Acesse meu.inss.gov.br ou baixe o app
- Faça login com a conta gov.br
- Escolha o tipo de aposentadoria em "Novo pedido"
- Preencha os dados e anexe documentos
- Acompanhe o pedido e responda às exigências pelo app

**2. Pela Central 135:**
- Ligação gratuita de fixo, orelhão e celular
- Segunda a sábado, das 7h às 22h (horário de Brasília)
- Pode agendar atendimento presencial, se necessário

**Documentos necessários:**
- Documento oficial com foto e CPF
- Carteiras de trabalho (todas)
- Carnês ou comprovantes de contribuição (se autônomo)
- Certidão de nascimento ou casamento
- Comprovante de residência
- Documentos de atividade rural ou especial, se for o caso (como o PPP)

**Tipos de aposentadoria (regras atuais):**
- Por idade: mulher, 62 anos; homem, 65 anos; com 15 anos de contribuição (homens que começaram a contribuir depois de 13/11/2019 precisam de 20 anos)
- Rural por idade: mulher, 55 anos; homem, 60 anos; com 15 anos de atividade rural
- Por tempo de contribuição: somente pelas regras de transição da Reforma de 2019
- Por incapacidade permanente
- Especial (atividade com exposição a agentes nocivos)

**Prazo de análise:** A lei prevê o primeiro pagamento em até 45 dias após a entrega da documentação completa (Lei 8.213/1991, art. 41-A, §5º); na prática, o prazo pode variar.

**Importante:** Procure um advogado previdenciário se tiver tempo especial ou rural não reconhecido. Para causas contra o INSS, a Defensoria Pública da União atende quem não pode pagar (dpu.def.br).`,
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

**1. Exija a resposta e a negativa por escrito:**
- Pela RN ANS 623/2024, urgência e emergência exigem resposta imediata
- Nos demais casos, a resposta deve vir em até 5 dias úteis (ou até 10 dias úteis em alguns procedimentos eletivos, como os de alta complexidade)
- A negativa deve ser entregue por escrito, com o motivo em linguagem clara
- Guarde como prova

**2. Verifique se o exame está no Rol da ANS:**
- Consulte o Rol de Procedimentos no site da ANS (gov.br/ans)
- Se estiver no rol e houver pedido médico, a negativa é, em regra, abusiva
- Fora do rol, a cobertura pode ser obrigatória se cumpridos os 5 requisitos fixados pelo STF em 2025 (ADI 7.265)

**3. Reclame na ANS:**
- Disque ANS: 0800 701 9656
- A reclamação abre uma NIP; em questões de cobertura, a operadora tem até 5 dias úteis para resolver

**4. Procon:**
- Posto do Procon-BA no SAC Vitória da Conquista: Av. Olívia Flores, 2500, Boulevard Shopping Candeias (segunda a sexta, 9h às 18h)
- Agendamento: 0800 071 5353 ou WhatsApp (71) 4020-5353

**5. Ação judicial:**
- Juizados Especiais de Vitória da Conquista: Fórum João Mangabeira, Praça Estevão Santos, 5º andar, Centro
- Em urgência, é possível pedir tutela de urgência; o tempo de análise depende de cada juízo e de cada caso

**Situações comuns de negativa ilegal:**
- "Exame não coberto" (se está no rol ANS)
- "Médico não credenciado": segundo o entendimento da ANS, o fato de o pedido ter sido feito por médico de fora da rede não basta, por si só, para negar a cobertura na rede do plano
- "Limite de exames" por ano, quando o médico indica a necessidade

**Indenização:**
- Danos materiais: reembolso do que você pagou
- Danos morais: possíveis, conforme o caso; não há valor tabelado

**Importante:** Exames de urgência e emergência devem ser cobertos depois de 24 horas da contratação, mesmo durante outras carências.`,
    area: 'consumidor',
    keywords: ['plano saúde negou vitória conquista', 'exame negado plano conquista', 'ação plano saúde bahia', 'ans vitória conquista'],
    relatedQuestions: ['bahia-19', 'cons-12', 'bahia-10'],
    metaDescription: 'Plano de saúde negou exame em Vitória da Conquista? Reclame na ANS, PROCON ou entre com ação judicial. Seus direitos.'
  },
  {
    id: 'bahia-22',
    slug: 'juizado-especial-vitoria-conquista',
    question: 'Como processar no Juizado Especial de Vitória da Conquista?',
    answer: `O **Sistema dos Juizados Especiais de Vitória da Conquista** julga causas cíveis de até 40 salários mínimos.

**Endereço (dados do TJBA):**
- **Local:** Fórum João Mangabeira, Praça Estevão Santos, 5º andar, Centro, Vitória da Conquista, CEP 45020-070
- **Unidades:** 1ª, 2ª e 3ª Varas do Sistema dos Juizados Especiais
- **Telefones:** (77) 3425-8956 / 3425-8963 / 3425-8906 (1ª Vara); (77) 3425-8936 / 3425-8948 (2ª Vara); (77) 3425-8936 (3ª Vara)
- **Lista atualizada:** tjba.jus.br/juizadosespeciais (Endereços e telefones, Interior)

**Como entrar com ação:**
1. Agende o atendimento pelo site dos Juizados (Agendamento de Queixas) ou procure a unidade
2. Leve os documentos; o pedido oral é reduzido a termo pela secretaria
3. Compareça à sessão de conciliação (a lei prevê a marcação em até 15 dias do registro, art. 16 da Lei 9.099/1995, mas a data depende da pauta)
4. Sem acordo, o processo segue para instrução e sentença

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
- **1º grau:** sem custas em causas de até 40 salários mínimos (art. 54)
- **Recurso:** exige preparo, salvo gratuidade da justiça

**Advogado:**
- Até 20 salários mínimos: dispensado
- De 20 a 40 salários mínimos: obrigatório
- No recurso: sempre obrigatório (art. 41, §2º)

**Sem condições de pagar advogado:** Defensoria Pública em Vitória da Conquista, Rua Rio Doce, 2294, Loteamento Itamaraty, Candeias, (77) 3229-2050.

**Dica:** Leve todas as provas organizadas e seja objetivo ao explicar o caso. Faltar à audiência sem justificativa extingue o processo (art. 51, I).`,
    area: 'geral',
    keywords: ['juizado especial vitória conquista', 'processar conquista', 'fórum vitória conquista', 'pequenas causas conquista'],
    relatedQuestions: ['bahia-19', 'bahia-3', 'bahia-14'],
    metaDescription: 'Juizados Especiais de Vitória da Conquista: Fórum João Mangabeira, Praça Estevão Santos, 5º andar, Centro. Como processar, documentos e custos.'
  },
  {
    id: 'bahia-23',
    slug: 'advogado-previdenciario-vitoria-conquista',
    question: 'Preciso de advogado previdenciário em Vitória da Conquista?',
    answer: `Em muitos casos, **sim**: um advogado que atua em Direito Previdenciário pode fazer diferença, principalmente quando o INSS nega o pedido ou não reconhece períodos de trabalho.

**Quando é recomendável ter advogado:**
- Benefício negado pelo INSS
- Auxílio-doença indeferido ou cortado
- Aposentadoria por incapacidade negada
- Tempo rural ou especial não reconhecido
- Revisão de benefício

**Quando pode fazer sozinho:**
- Primeiro requerimento simples, pelo Meu INSS
- Documentação completa e clara
- Casos sem controvérsia

**O que o advogado faz:**
- Analisa o CNIS e os documentos para identificar períodos não computados
- Calcula a melhor regra e a melhor data para pedir
- Recorre administrativamente
- Ajuíza ação judicial, se necessário

**Como escolher:**
- Confira a inscrição do advogado no Cadastro Nacional dos Advogados (cna.oab.org.br)
- Peça a proposta de honorários por escrito antes de contratar

**Honorários:**
- São combinados por escrito, caso a caso, e devem respeitar a tabela da OAB da Bahia
- Desconfie de quem promete resultado ou valor garantido

**Atendimento gratuito:**
- Causas contra o INSS são da Justiça Federal; quem não pode pagar advogado pode procurar a Defensoria Pública da União (dpu.def.br)
- No Juizado Especial Federal (até 60 salários mínimos), a ação pode ser proposta sem advogado no 1º grau
- Ações de acidente de trabalho contra o INSS são julgadas pela Justiça Estadual; nesse caso, a Defensoria Pública da Bahia pode atender. Em Vitória da Conquista: Rua Rio Doce, 2294, Loteamento Itamaraty, Candeias, (77) 3229-2050

**INSS em Vitória da Conquista:**
- Agendamento e endereço da agência: Meu INSS ou Central 135 (segunda a sábado, das 7h às 22h)`,
    area: 'previdenciario',
    keywords: ['advogado previdenciário vitória conquista', 'advogado inss conquista', 'aposentadoria vitória conquista', 'benefício negado conquista'],
    relatedQuestions: ['bahia-20', 'prev-3', 'bahia-7'],
    metaDescription: 'Precisa de advogado previdenciário em Vitória da Conquista? Quando vale a pena, como escolher, honorários por escrito e opções gratuitas (DPU e DPE-BA).'
  },

  // CAMAÇARI (4 FAQs)
  {
    id: 'bahia-24',
    slug: 'procon-camacari-bahia',
    question: 'Onde fica o PROCON de Camaçari?',
    answer: `Em Camaçari, o atendimento presencial do **Procon-BA** (estadual) é feito em postos dentro dos SACs. Confira os dados da lista oficial do Procon-BA, conferida em novembro de 2026:

**Posto SAC Camaçari:**
- **Local:** Rodovia BA-535, s/n, Shopping Boulevard Camaçari
- **Horário:** segunda a sexta, das 9h às 11h por ordem de chegada e das 12h às 15h com agendamento; sábado, das 9h às 11h40

**Posto SAC Shopping Busca Vida (Abrantes):**
- **Local:** Estrada do Coco, km 10, distrito de Abrantes, Camaçari, CEP 42840-000
- **Horário:** segunda a sexta, das 9h às 18h

**Como agendar:**
- **Internet:** portal ba.gov.br, serviço de registro de atendimento do Procon
- **Telefone:** 0800 071 5353 (agendamento dos SACs)
- **WhatsApp:** (71) 4020-5353

**Procon municipal:**
- Não conseguimos confirmar em fonte oficial atualizada endereço e telefone próprios de um Procon da Prefeitura de Camaçari
- Informações da Prefeitura: camacari.ba.gov.br

**Serviços:**
- Reclamações contra empresas
- Orientação ao consumidor
- Audiências de conciliação
- Fiscalização

**Documentos para atendimento:**
- RG e CPF
- Comprovante de residência
- Nota fiscal ou contrato
- Protocolos de reclamação

**Outras opções:**
- **Consumidor.gov.br:** reclamação online; a empresa tem até 10 dias para responder
- **Juizados Especiais de Camaçari:** Centro Administrativo, anexo do Fórum Clemente Mariani, subsolo, (71) 3621-8740 / 3621-8711 (dados do TJBA)
- **Defensoria Pública em Camaçari:** Rua Monte Gordo, 63, Bela Vista, (71) 3622-6478 / 3627-4561

**Dica:** Endereços e horários mudam. Antes de sair, confira a lista de postos em ba.gov.br/justica (Postos de Atendimento do Procon-BA).`,
    area: 'consumidor',
    keywords: ['procon camaçari', 'procon camacari telefone', 'defesa consumidor camaçari', 'reclamar procon camacari'],
    relatedQuestions: ['bahia-25', 'bahia-27', 'bahia-2'],
    metaDescription: 'Procon em Camaçari: postos do Procon-BA no Shopping Boulevard Camaçari (BA-535) e no Shopping Busca Vida (Abrantes). Horários, agendamento e alternativas.'
  },
  {
    id: 'bahia-25',
    slug: 'direitos-trabalhadores-polo-petroquimico',
    question: 'Quais os direitos dos trabalhadores do Polo Petroquímico de Camaçari?',
    answer: `Os trabalhadores do **Polo Industrial de Camaçari** (petroquímico e químico) têm os direitos da CLT e, conforme a atividade, adicionais e regras especiais pela exposição a riscos.

**Direitos específicos do setor:**

**1. Adicional de Periculosidade (30%):**
- Exposição permanente a inflamáveis, explosivos ou energia elétrica, nas condições da norma do Ministério do Trabalho (NR-16)
- Calculado sobre o salário, sem gratificações, prêmios ou participação nos lucros (CLT, art. 193, §1º)

**2. Adicional de Insalubridade:**
- Grau mínimo: 10%
- Grau médio: 20%
- Grau máximo: 40%
- Exposição a agentes nocivos acima dos limites (químicos, ruído), conforme a NR-15 e a perícia
- Periculosidade e insalubridade não se somam: o trabalhador escolhe o adicional mais vantajoso (CLT, art. 193, §2º)

**3. Adicional Noturno (20%):**
- Trabalho entre 22h e 5h
- Hora noturna: 52 min 30 seg
- Turnos ininterruptos de revezamento têm jornada de 6 horas, salvo negociação coletiva (Constituição, art. 7º, XIV)

**4. Aposentadoria Especial:**
- 15, 20 ou 25 anos de atividade com exposição efetiva a agentes nocivos
- Para quem começou a contribuir depois de 13/11/2019, há também idade mínima (55, 58 ou 60 anos); para os demais, há regra de transição por pontos (EC 103/2019)
- O PPP (Perfil Profissiográfico Previdenciário) é o principal documento de prova

**Documentos importantes:**
- PPP (Perfil Profissiográfico Previdenciário)
- LTCAT (Laudo Técnico das Condições Ambientais do Trabalho)
- Contracheques
- Exames ocupacionais (ASO)

**Se seus direitos forem violados:**
- Sindicato da categoria (químicos, petroleiros, metalúrgicos, conforme a empresa)
- Varas do Trabalho de Camaçari (endereço atualizado em trt5.jus.br)
- Ministério do Trabalho: Alô Trabalho 158 ou denuncia.sit.trabalho.gov.br

**Sindicatos:**
- Representam os trabalhadores nas negociações coletivas
- A convenção ou o acordo coletivo pode garantir direitos além da lei
- Oferecem orientação e assistência jurídica`,
    area: 'trabalhista',
    keywords: ['trabalhadores polo petroquímico camaçari', 'direitos químicos bahia', 'periculosidade camaçari', 'insalubridade polo petroquímico'],
    relatedQuestions: ['bahia-26', 'trab-7', 'trab-9'],
    metaDescription: 'Direitos dos trabalhadores do Polo Petroquímico de Camaçari: periculosidade 30%, insalubridade, adicional noturno e aposentadoria especial.'
  },
  {
    id: 'bahia-26',
    slug: 'acidente-trabalho-camacari',
    question: 'Sofri acidente de trabalho em Camaçari. Quais meus direitos?',
    answer: `Se você sofreu **acidente de trabalho em Camaçari**, tem direitos garantidos pela lei trabalhista e previdenciária.

**Direitos após acidente de trabalho:**

**1. Estabilidade de 12 meses:**
- Depois do fim do auxílio-doença acidentário, você não pode ser dispensado sem justa causa por 12 meses (Lei 8.213/1991, art. 118)
- Exige afastamento por mais de 15 dias com auxílio-doença acidentário, ou doença do trabalho descoberta depois da dispensa (Súmula 378 do TST)
- Vale também para contrato por prazo determinado, como o de experiência (Súmula 378, III)

**2. Auxílio-doença acidentário (B91):**
- A partir do 16º dia de afastamento
- 91% do salário de benefício
- A empresa paga os primeiros 15 dias

**3. Indenização (quando houver culpa da empresa ou atividade de risco):**
- Danos materiais: despesas médicas, lucros cessantes e pensão, se houver redução da capacidade de trabalho (Código Civil, art. 950)
- Danos morais e estéticos: conforme a gravidade e as sequelas; não há valor tabelado

**4. FGTS continua sendo depositado:**
- Durante todo o afastamento por acidente de trabalho (Lei 8.036/1990, art. 15, §5º)

**5. Auxílio-acidente:**
- Se ficar sequela que reduza a capacidade para o trabalho habitual, pode haver direito ao auxílio-acidente, pago pelo INSS mesmo depois da volta ao trabalho (Lei 8.213/1991, art. 86)

**O que fazer após o acidente:**

**1. Comunicar a empresa imediatamente**
**2. Exigir emissão da CAT:**
- Comunicação de Acidente de Trabalho, que a empresa deve emitir até o 1º dia útil seguinte ao acidente (Lei 8.213/1991, art. 22)
- Se a empresa recusar, você, seus dependentes, o sindicato, o médico ou uma autoridade pública podem emitir (art. 22, §2º)

**3. Guardar documentos:**
- Atestados e laudos
- Fotos do local/lesão
- Nomes de testemunhas

**4. Procurar o INSS:**
- Agendar perícia pelo 135 ou pelo Meu INSS

**Onde buscar seus direitos:**
- Indenização contra a empresa: Varas do Trabalho de Camaçari (endereço atualizado em trt5.jus.br)
- Benefícios acidentários contra o INSS: Justiça Estadual (Comarca de Camaçari)
- Pensão mensal pode ser pedida se houver incapacidade permanente`,
    area: 'trabalhista',
    keywords: ['acidente trabalho camaçari', 'cat camaçari', 'indenização acidente bahia', 'estabilidade acidente trabalho'],
    relatedQuestions: ['bahia-25', 'trab-11', 'prev-3'],
    metaDescription: 'Acidente de trabalho em Camaçari? Direito a estabilidade 12 meses, auxílio-doença, indenização. CAT e como buscar seus direitos.'
  },
  {
    id: 'bahia-27',
    slug: 'juizado-especial-camacari',
    question: 'Como processar empresa no Juizado Especial de Camaçari?',
    answer: `O **Sistema dos Juizados Especiais de Camaçari** julga causas cíveis de até 40 salários mínimos.

**Endereço (dados do TJBA):**
- **Local:** Centro Administrativo, anexo do Fórum Clemente Mariani, subsolo, Camaçari, CEP 42800-000
- **1ª Vara do Sistema dos Juizados:** (71) 3621-8740
- **2ª Vara do Sistema dos Juizados:** (71) 3621-8711 / 3621-8712
- **Lista atualizada:** tjba.jus.br/juizadosespeciais (Endereços e telefones, Interior)

**Como ajuizar ação:**
1. Agende o atendimento pelo site dos Juizados (Agendamento de Queixas) ou vá à unidade com documentos
2. O pedido pode ser feito oralmente e é reduzido a termo
3. A sessão de conciliação deve ser marcada em até 15 dias do registro (Lei 9.099/1995, art. 16), mas a data real depende da pauta
4. Sem acordo, o processo segue para instrução e sentença

**Tipos de causas:**
- Problemas de consumo
- Cobranças indevidas
- Acidentes de trânsito
- Indenizações até 40 salários mínimos

**Documentos:**
- RG, CPF, comprovante de residência
- Provas do caso
- Dados do réu (CNPJ, endereço)

**Custos:**
- **1º grau:** sem custas em causas de até 40 salários mínimos (art. 54)
- **Advogado:** dispensado até 20 salários mínimos; de 20 a 40, obrigatório (art. 9º)
- **Recurso:** exige advogado e preparo, salvo gratuidade da justiça

**Onde processar:**
- Em regra, no Juizado do seu domicílio (se você mora em Camaçari), no do domicílio ou estabelecimento da empresa, ou no do local do fato (Lei 9.099/1995, art. 4º)
- Não é possível escolher outra cidade sem relação com o caso

**Alternativas:**
- Consumidor.gov.br (online; a empresa tem até 10 dias para responder)
- Procon-BA: postos no Shopping Boulevard Camaçari e no Shopping Busca Vida (Abrantes)
- Defensoria Pública em Camaçari: Rua Monte Gordo, 63, Bela Vista, (71) 3622-6478

**Dica:** Organize todas as provas em ordem cronológica e seja objetivo na audiência.`,
    area: 'consumidor',
    keywords: ['juizado especial camaçari', 'processar empresa camaçari', 'fórum camaçari', 'pequenas causas camacari'],
    relatedQuestions: ['bahia-24', 'bahia-3', 'bahia-14'],
    metaDescription: 'Juizados Especiais de Camaçari: Centro Administrativo, anexo do Fórum Clemente Mariani, (71) 3621-8740. Como processar, custos e documentos.'
  },

  // ITABUNA (3 FAQs)
  {
    id: 'bahia-28',
    slug: 'procon-itabuna-bahia',
    question: 'Onde fica o PROCON de Itabuna?',
    answer: `Em Itabuna, o consumidor pode procurar o **Procon municipal**, ligado à Prefeitura, e usar os canais online de reclamação.

**Procon de Itabuna (Prefeitura):**
- Não conseguimos confirmar em fonte oficial atualizada o endereço, o telefone e o horário do Procon de Itabuna
- Endereço e telefones atualizados: site da Prefeitura, itabuna.ba.gov.br, ou a Ouvidoria municipal
- Sede da Prefeitura (dados do site oficial): Av. Princesa Isabel, 678, São Caetano, (73) 3214-6300, segunda a sexta, das 8h às 14h

**Procon-BA:**
- A lista oficial de postos do Procon-BA, conferida em novembro de 2026, não tem posto em Itabuna
- Lista atualizada: ba.gov.br/justica (Postos de Atendimento)

**Serviços de um Procon:**
- Reclamações de consumo
- Audiências de conciliação
- Orientação ao consumidor
- Fiscalização

**Documentos:**
- RG e CPF
- Comprovante de residência
- Nota fiscal/contrato
- Protocolos anteriores

**Alternativas:**
- **Consumidor.gov.br:** reclamação online; a empresa tem até 10 dias para responder
- **Juizados Especiais de Itabuna:** Av. Fernando Gomes, 442, Nossa Senhora das Graças, Fórum Módulo 2, 2º andar, CEP 45601-572, (73) 3214-0960 (dados do TJBA)
- **Defensoria Pública em Itabuna:** Av. Nações Unidas, 732, Centro, (73) 3214-5997

**Dica:** Quem mora em cidades vizinhas pode reclamar no consumidor.gov.br e procurar o Juizado da comarca onde mora.`,
    area: 'consumidor',
    keywords: ['procon itabuna', 'procon itabuna telefone', 'defesa consumidor itabuna', 'reclamar procon itabuna'],
    relatedQuestions: ['bahia-29', 'bahia-30', 'bahia-2'],
    metaDescription: 'Procon em Itabuna: onde conferir o endereço oficial (Prefeitura), reclamação online, Juizados na Av. Fernando Gomes, 442, e Defensoria Pública.'
  },
  {
    id: 'bahia-29',
    slug: 'nome-negativado-itabuna-bahia',
    question: 'Nome negativado indevidamente em Itabuna. O que fazer?',
    answer: `Se seu nome foi **negativado indevidamente em Itabuna**, você pode pedir a exclusão e, conforme o caso, indenização por danos morais.

**Passo a passo:**

**1. Reúna provas:**
- Consulta do CPF no Serasa, SPC e Boa Vista
- Comprovante de que não deve (ou de que já pagou)
- Histórico de negativações (se havia outras legítimas antes, não cabe dano moral, Súmula 385 do STJ)

**2. Notifique a empresa:**
- Por escrito (carta com aviso de recebimento, e-mail ou protocolo do SAC)
- Se você pagou, o credor tem 5 dias úteis para pedir a baixa (Súmula 548 do STJ)

**3. Reclame:**
- Procon de Itabuna (Prefeitura): endereço atualizado em itabuna.ba.gov.br
- Consumidor.gov.br: a empresa tem até 10 dias para responder

**4. Juizado Especial de Itabuna:**
- Av. Fernando Gomes, 442, Nossa Senhora das Graças, Fórum Módulo 2, 2º andar (dados do TJBA)
- Sem custas no 1º grau em causas de até 40 salários mínimos; até 20, sem advogado

**Sobre a indenização:**
- Não existe tabela de valores no TJBA nem em qualquer tribunal
- O STJ entende que, em regra, o dano moral da negativação indevida é presumido
- O juiz fixa o valor conforme o tempo da negativação, o prejuízo comprovado e a conduta da empresa

**Documentos para ação:**
- RG, CPF
- Comprovante de residência
- Print da negativação
- Prova de que não deve

**Prazo para processar:** Pode ser de 3 ou de 5 anos, conforme o caso (Código Civil, art. 206, §3º, V, ou CDC, art. 27). Não espere.

**Dica:** Antes de aceitar qualquer acordo, confira se ele inclui a retirada do seu nome dos cadastros. Sem condições de pagar advogado? Defensoria Pública em Itabuna: Av. Nações Unidas, 732, Centro, (73) 3214-5997.`,
    area: 'consumidor',
    keywords: ['nome negativado itabuna', 'negativação indevida itabuna', 'serasa spc itabuna', 'danos morais itabuna'],
    relatedQuestions: ['bahia-28', 'bahia-12', 'cons-16'],
    metaDescription: 'Nome negativado indevidamente em Itabuna? Passo a passo, como funciona a indenização (sem valor tabelado), prazos e o Juizado na Av. Fernando Gomes.'
  },
  {
    id: 'bahia-30',
    slug: 'juizado-especial-itabuna',
    question: 'Como processar no Juizado Especial de Itabuna?',
    answer: `O **Sistema dos Juizados Especiais de Itabuna** é o caminho mais simples para causas cíveis de até 40 salários mínimos.

**Endereço (dados do TJBA):**
- **Local:** Av. Fernando Gomes, 442, Nossa Senhora das Graças, Fórum Módulo 2, 2º andar, Itabuna, CEP 45601-572
- **1ª Vara do Sistema dos Juizados:** (73) 3214-0960
- **2ª Vara:** (73) 3214-0969
- **3ª Vara:** (73) 3214-0966
- **Lista atualizada:** tjba.jus.br/juizadosespeciais (Endereços e telefones, Interior)

**Como ajuizar:**
1. Agende pelo site dos Juizados (Agendamento de Queixas) ou procure a unidade com documentos
2. O pedido é registrado e reduzido a termo
3. Receba a data da sessão de conciliação
4. Participe da conciliação; sem acordo, o processo segue para instrução e sentença

**Documentos:**
- RG e CPF
- Comprovante de residência
- Provas do caso
- Dados do réu

**Custos:**
- **1º grau:** sem custas em causas de até 40 salários mínimos (Lei 9.099/1995, art. 54)
- **Advogado:** dispensado até 20 salários mínimos; de 20 a 40, obrigatório (art. 9º)
- **Recurso:** exige advogado e preparo, salvo gratuidade da justiça

**Tipos de ação:**
- Consumidor
- Cobranças
- Indenizações
- Acidentes de trânsito

**Prazos que a lei fixa:**
- Sessão de conciliação: até 15 dias do registro (art. 16), conforme a pauta da unidade
- Recurso: 10 dias após a sentença (art. 42)

**Jurisdição:**
- Atende a comarca de Itabuna
- Moradores de outras cidades devem verificar a que comarca pertencem, no site do TJBA

**Dica:** Leve cópias de todos os documentos e os originais para conferência.`,
    area: 'geral',
    keywords: ['juizado especial itabuna', 'fórum itabuna', 'processar itabuna', 'pequenas causas itabuna'],
    relatedQuestions: ['bahia-28', 'bahia-29', 'bahia-3'],
    metaDescription: 'Juizados Especiais de Itabuna: Av. Fernando Gomes, 442, Fórum Módulo 2, (73) 3214-0960. Como processar, documentos e custos (sem custas no 1º grau).'
  },

  // ILHÉUS (3 FAQs)
  {
    id: 'bahia-31',
    slug: 'procon-ilheus-bahia',
    question: 'Onde fica o PROCON de Ilhéus?',
    answer: `Em Ilhéus, o consumidor pode procurar o **Procon municipal**, ligado à Prefeitura, e usar os canais online de reclamação.

**Procon de Ilhéus (Prefeitura):**
- Não conseguimos confirmar em fonte oficial atualizada o endereço, o telefone e o horário do Procon de Ilhéus
- Endereço e telefones atualizados: site da Prefeitura, ilheus.ba.gov.br

**Procon-BA:**
- A lista oficial de postos do Procon-BA, conferida em novembro de 2026, não tem posto em Ilhéus
- Lista atualizada: ba.gov.br/justica (Postos de Atendimento)

**Serviços de um Procon:**
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
- **Consumidor.gov.br:** reclamação online; a empresa tem até 10 dias para responder
- **Juizados Especiais de Ilhéus:** Av. Osvaldo Cruz, anexo do Fórum Epaminondas Berbert de Castro, 3º andar, Cidade Nova, CEP 45660-000, (73) 3234-3453 (dados do TJBA)
- **Defensoria Pública em Ilhéus:** Rua Rotary, 255, Condomínio Empresarial 255 Office, Cidade Nova, (73) 3234-4600

**Ilhéus - Cidade turística:**
- Problemas com hotéis e pousadas
- Passeios e agências de turismo
- Restaurantes e serviços turísticos

**Dica:** Turistas podem reclamar no Procon da cidade onde ocorreu o problema ou, ao voltar, processar no Juizado da cidade onde moram (CDC, art. 101, I).`,
    area: 'consumidor',
    keywords: ['procon ilhéus', 'procon ilheus telefone', 'defesa consumidor ilhéus', 'reclamar procon ilheus'],
    relatedQuestions: ['bahia-32', 'bahia-33', 'bahia-2'],
    metaDescription: 'Procon em Ilhéus: onde conferir o endereço oficial (Prefeitura), reclamação online, Juizados na Av. Osvaldo Cruz (Cidade Nova) e Defensoria Pública.'
  },
  {
    id: 'bahia-32',
    slug: 'direitos-trabalhadores-turismo-ilheus',
    question: 'Quais os direitos dos trabalhadores de turismo em Ilhéus?',
    answer: `Os trabalhadores do **setor de turismo em Ilhéus** têm os direitos da CLT e os previstos nas convenções coletivas da categoria.

**Direitos dos trabalhadores de hotéis e pousadas:**
- Carteira assinada
- Piso salarial da categoria (convenção coletiva)
- Adicional noturno (20%)
- Hora extra (no mínimo 50%)
- Gorjetas integram a remuneração

**Gorjetas (Lei 13.419/2017 e CLT, art. 457):**
- Fazem parte da remuneração, mas não do salário
- Devem ser rateadas conforme a convenção ou o acordo coletivo
- Entram no cálculo de FGTS, 13º, férias e INSS
- Não servem de base para aviso prévio, adicional noturno, horas extras e descanso semanal remunerado (Súmula 354 do TST)
- A empresa pode reter parte para custear os encargos, nos percentuais da lei, e deve anotar os valores na carteira e no contracheque

**Direitos em bares e restaurantes:**
- Os 10% do garçom são facultativos para o cliente
- A taxa de serviço cobrada deve ser repassada aos empregados
- Intervalo para descanso e alimentação obrigatório

**Adicional noturno:**
- Trabalho entre 22h e 5h
- 20% a mais na hora
- Hora noturna: 52 min 30 seg

**Temporada:**
- Contrato temporário ou por prazo determinado também tem direitos (salário, 13º e férias proporcionais, FGTS)
- Trabalhar sem carteira não tira os direitos: o vínculo pode ser reconhecido na Justiça

**Se seus direitos forem violados:**

**1. Sindicato da categoria:**
- Sindicato dos trabalhadores em hotéis, bares e restaurantes da região

**2. Ministério do Trabalho:**
- Alô Trabalho: 158
- Denúncia online: denuncia.sit.trabalho.gov.br

**3. Justiça do Trabalho:**
- Varas do Trabalho de Ilhéus (endereço atualizado em trt5.jus.br)
- Prazo: 2 anos após sair, cobrando os últimos 5 anos

**Importante:** Trabalhador de alta temporada também tem direitos!`,
    area: 'trabalhista',
    keywords: ['trabalhadores turismo ilhéus', 'direitos garçom ilhéus', 'hotel ilhéus trabalhista', 'gorjeta ilhéus'],
    relatedQuestions: ['bahia-31', 'trab-2', 'trab-6'],
    metaDescription: 'Direitos dos trabalhadores de turismo em Ilhéus: hotéis, restaurantes, gorjetas, adicional noturno. Como reclamar.'
  },
  {
    id: 'bahia-33',
    slug: 'fraude-bancaria-ilheus',
    question: 'Fui vítima de fraude bancária em Ilhéus. Como processar?',
    answer: `Se você sofreu **fraude bancária em Ilhéus**, o banco pode ser responsabilizado quando há falha na segurança dos seus serviços.

**Passos imediatos:**

**1. Contate o banco:**
- Ligue ou use o app imediatamente
- Bloqueie cartões e acessos
- Se foi Pix, peça o MED (Mecanismo Especial de Devolução), em até 80 dias, mas quanto antes melhor
- Anote o protocolo

**2. Registre Boletim de Ocorrência:**
- Em delegacia de Polícia Civil de Ilhéus
- Ou online, pela Delegacia Virtual (link oficial no site da Polícia Civil da Bahia, ba.gov.br/policiacivil)

**3. Reclame formalmente:**
- SAC do banco
- Ouvidoria (se o SAC não resolver)
- Banco Central: bcb.gov.br ("Meu BC", reclamação contra bancos)

**4. Procon:**
- Procon de Ilhéus (Prefeitura): endereço atualizado em ilheus.ba.gov.br
- Consumidor.gov.br: a empresa tem até 10 dias para responder

**5. Ação judicial:**
- Juizados Especiais de Ilhéus: Av. Osvaldo Cruz, anexo do Fórum Epaminondas Berbert de Castro, 3º andar, Cidade Nova
- Causas de até 40 salários mínimos, sem custas no 1º grau

**Responsabilidade do banco:**
- Súmula 479 do STJ: o banco responde objetivamente pelas fraudes praticadas por terceiros em operações bancárias
- O risco do negócio é do banco
- Não é preciso provar culpa; o banco pode se defender provando culpa exclusiva do cliente

**Indenização:**
- Danos materiais: devolução do valor
- Danos morais: possíveis conforme o caso; não há valor tabelado
- Devolução em dobro, se houve cobrança indevida paga

**Golpes mais comuns:**
- Clonagem de cartão
- Falso funcionário
- Phishing (links falsos)
- Golpe do Pix

**Prazo para processar:** 5 anos (CDC, art. 27).`,
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
    answer: `Em Juazeiro, o atendimento presencial do **Procon-BA** (estadual) é feito no posto do SAC, segundo a lista oficial conferida em novembro de 2026.

**Posto do Procon-BA em Juazeiro (dados oficiais do Procon-BA):**
- **Local:** Posto SAC Juazeiro, Juá Garden Shopping, Rodovia Lomanto Júnior, s/n, km 6, bairro João Paulo II, CEP 48909-901
- **Horário:** segunda a sexta, das 8h às 17h
- **Agendamento:** portal ba.gov.br, 0800 071 5353 ou WhatsApp (71) 4020-5353

**Procon municipal:**
- Não conseguimos confirmar em fonte oficial atualizada o endereço e o telefone de um Procon da Prefeitura de Juazeiro
- Informações da Prefeitura: juazeiro.ba.gov.br

**Serviços:**
- Atendimento ao consumidor
- Audiências de conciliação
- Fiscalização
- Orientação

**Documentos:**
- RG e CPF
- Comprovante de residência
- Nota fiscal/contrato
- Protocolos anteriores

**Alternativas:**
- **Consumidor.gov.br:** reclamação online; a empresa tem até 10 dias para responder
- **Juizados Especiais de Juazeiro:** Travessa José Guerra de Santana, s/n, Alagadiço, CEP 48904-350, (74) 3614-7100 (dados do TJBA)
- **Defensoria Pública em Juazeiro:** Rua do Paraíso, 306, Santo Antônio, (74) 3162-1079

**Dica:** Juazeiro faz divisa com Petrolina (PE). Se a empresa for de Petrolina, você ainda pode processar no Juizado de Juazeiro, onde mora (CDC, art. 101, I).`,
    area: 'consumidor',
    keywords: ['procon juazeiro bahia', 'procon juazeiro telefone', 'defesa consumidor juazeiro', 'reclamar procon juazeiro'],
    relatedQuestions: ['bahia-35', 'bahia-36', 'bahia-2'],
    metaDescription: 'Procon em Juazeiro-BA: posto do Procon-BA no Juá Garden Shopping (Rodovia Lomanto Júnior, km 6), seg. a sex., 8h às 17h. Agendamento, Juizados e Defensoria.'
  },
  {
    id: 'bahia-35',
    slug: 'inss-juazeiro-bahia',
    question: 'Onde fica a agência do INSS em Juazeiro-BA?',
    answer: `O **INSS** atende Juazeiro e região pela agência local, com atendimento presencial agendado, e pelos canais remotos.

**Agência do INSS em Juazeiro:**
- Não conseguimos confirmar em fonte oficial o endereço da agência para publicar aqui
- O endereço é informado pelo Meu INSS e pela Central 135 no momento do agendamento; confira sempre o seu comprovante

**Central 135:**
- Segunda a sábado, das 7h às 22h (horário de Brasília)
- Ligação gratuita de fixo, orelhão e celular

**Serviços disponíveis:**
- Aposentadoria (idade, tempo, especial)
- Auxílio por incapacidade temporária (auxílio-doença)
- Pensão por morte
- Salário-maternidade
- BPC/LOAS
- Perícia médica

**Como agendar:**
1. **Meu INSS** (app ou meu.inss.gov.br, com login gov.br)
2. **Central 135**
3. Atendimento presencial, em regra, com agendamento, na agência indicada

**Documentos básicos:**
- Documento oficial com foto e CPF
- Carteira de trabalho
- Comprovante de residência
- Documentos específicos do benefício (laudos, certidões, PPP, documentos rurais)

**Perícia médica:**
- Agendar pelo Meu INSS ou 135
- Levar todos os exames e laudos

**Se o benefício for negado:**
- Recurso em até 30 dias, pelo Meu INSS
- Ação na Justiça Federal (Juizado Especial Federal, até 60 salários mínimos)
- Quem não pode pagar advogado: Defensoria Pública da União (dpu.def.br)

**Dica:** A maioria dos serviços pode ser feita online pelo Meu INSS, sem precisar ir à agência.`,
    area: 'previdenciario',
    keywords: ['inss juazeiro bahia', 'agência inss juazeiro', 'previdência juazeiro', 'aposentadoria juazeiro'],
    relatedQuestions: ['bahia-34', 'bahia-6', 'prev-1'],
    metaDescription: 'INSS em Juazeiro-BA: como agendar pelo Meu INSS ou Central 135 (seg. a sáb., 7h às 22h), serviços, documentos e o que fazer se o benefício for negado.'
  },
  {
    id: 'bahia-36',
    slug: 'cobranca-indevida-juazeiro-bahia',
    question: 'Recebi cobrança indevida em Juazeiro. O que fazer?',
    answer: `Se você recebeu **cobrança indevida em Juazeiro** e pagou, tem direito à devolução em dobro do valor pago a mais, salvo engano justificável da empresa.

**O que diz o CDC (Art. 42, parágrafo único):**
- Valor pago indevidamente: devolução em dobro
- Com correção monetária e juros legais
- Exceção: engano justificável
- Para o STJ, não é preciso provar má-fé da empresa (EAREsp 676.608)

**Passo a passo:**

**1. Conteste com a empresa:**
- Por escrito (e-mail, carta, chat)
- Peça estorno ou devolução em dobro
- Anote o protocolo

**2. Procon:**
- Posto do Procon-BA no SAC Juazeiro: Juá Garden Shopping, Rodovia Lomanto Júnior, km 6 (segunda a sexta, 8h às 17h)
- Agendamento: 0800 071 5353 ou WhatsApp (71) 4020-5353

**3. Consumidor.gov.br:**
- Reclamação online
- Empresas têm até 10 dias para responder

**4. Juizado Especial:**
- Juizados Especiais de Juazeiro: Travessa José Guerra de Santana, s/n, Alagadiço (dados do TJBA)
- Sem custas no 1º grau em causas de até 40 salários mínimos; até 20, sem advogado

**Tipos comuns de cobrança indevida:**
- Serviço não contratado
- Cobrança duplicada
- Taxa não informada
- Valor acima do contratado
- Dívida já paga

**Indenização:**
- Devolução em dobro do valor pago a mais
- Danos morais: só quando houver constrangimento ou transtorno relevante; não há valor tabelado

**Prazo:** Em serviços de telefonia e de água e esgoto, o STJ fixou 10 anos para pedir de volta o que foi pago indevidamente (EAREsp 738.991 e Súmula 412). Em outros casos, o prazo depende da situação: não deixe para depois.

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
    answer: `Lauro de Freitas, na Região Metropolitana de Salvador, tem **Procon municipal** e também um **posto do Procon-BA** (estadual). Dados conferidos nos sites oficiais em novembro de 2026:

**Procon Municipal de Lauro de Freitas (Prefeitura):**
- **Endereço:** Shopping Passeio Norte, Estrada do Coco, 4487, subsolo, CEP 42700-130
- **Telefone:** (71) 3288-8919
- **Horário:** segunda a sexta, das 8h às 14h
- **Site:** laurodefreitas.ba.gov.br (página Procon Municipal, com formulário Fale com o Procon)

**Posto do Procon-BA em Lauro de Freitas:**
- **Local:** Posto SAC Lauro de Freitas, Parque Shopping Bahia, Rua Maria Isabel dos Santos, s/n, Centro, CEP 42702-440
- **Horário:** segunda a sexta, das 9h às 16h50; sábado, das 9h às 11h40
- **Agendamento:** portal ba.gov.br, 0800 071 5353 ou WhatsApp (71) 4020-5353

**Serviços:**
- Reclamações de consumo
- Audiências de conciliação
- Orientação

**Documentos:**
- RG, CPF
- Comprovante de residência
- Nota fiscal/contrato
- Protocolos de atendimento

**Juizados Especiais de Lauro de Freitas (dados do TJBA):**
- Fórum Des. João Mendes da Silva, Rua da Saúde, 90 (1ª Vara) e 52 (2ª Vara), Centro, CEP 42703-630
- 1ª Vara: (71) 3283-1911; 2ª Vara: (71) 3283-1905

**Defensoria Pública em Lauro de Freitas:**
- Rua Mucugê, 87, Edifício Norte Garden, Centro, (71) 3288-8729

**Dica:** Para problemas com grandes empresas (operadoras, bancos), o consumidor.gov.br também é uma boa opção: a empresa tem até 10 dias para responder.`,
    area: 'consumidor',
    keywords: ['procon lauro de freitas', 'procon lauro freitas telefone', 'defesa consumidor lauro', 'reclamar procon lauro'],
    relatedQuestions: ['bahia-38', 'bahia-2', 'bahia-24'],
    metaDescription: 'Procon em Lauro de Freitas: Procon Municipal no Shopping Passeio Norte (Estrada do Coco, 4487), (71) 3288-8919, e posto do Procon-BA no Parque Shopping Bahia.'
  },
  {
    id: 'bahia-38',
    slug: 'produto-defeituoso-lauro-freitas',
    question: 'Comprei produto com defeito em Lauro de Freitas. Onde reclamar?',
    answer: `Se você comprou **produto com defeito em Lauro de Freitas**, tem direitos garantidos pelo CDC.

**Seus direitos (Art. 18 CDC):**
- Reparo em até 30 dias
- Se não consertar no prazo: troca do produto, devolução do dinheiro ou abatimento proporcional; a escolha é sua
- Produto essencial ou defeito grave: solução imediata (art. 18, §3º)

**Onde reclamar:**

**1. Na própria loja ou no fabricante:**
- Leve produto + nota fiscal
- Exija protocolo por escrito
- Prazo para resolver: 30 dias

**2. Procon Municipal de Lauro de Freitas:**
- Shopping Passeio Norte, Estrada do Coco, 4487, subsolo
- Tel: (71) 3288-8919 (segunda a sexta, das 8h às 14h)

**3. Procon-BA (posto no SAC Lauro de Freitas):**
- Parque Shopping Bahia, Rua Maria Isabel dos Santos, s/n, Centro
- Agendamento: 0800 071 5353 ou WhatsApp (71) 4020-5353

**4. Consumidor.gov.br:**
- Reclamação online
- Resposta em até 10 dias

**5. Juizado Especial:**
- Juizados Especiais de Lauro de Freitas: Fórum Des. João Mendes da Silva, Rua da Saúde, Centro (dados do TJBA)
- Sem custas no 1º grau em causas de até 40 salários mínimos

**Prazos para reclamar (CDC, art. 26):**
- Produtos não duráveis: 30 dias
- Produtos duráveis: 90 dias
- Defeito oculto: o prazo conta de quando o defeito aparece

**Documentos:**
- Nota fiscal
- Produto (se possível)
- Fotos/vídeos do defeito
- Protocolos anteriores

**Indenização:**
- Danos materiais: valor do produto e prejuízos comprovados
- Danos morais: apenas se houver transtorno grave, analisado caso a caso`,
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
    answer: `O **Procon Municipal de Barreiras** atende os consumidores da cidade, polo do agronegócio no oeste baiano. Dados conferidos no site oficial da Prefeitura em novembro de 2026:

**Procon Municipal de Barreiras:**
- **Endereço:** Travessa 15 de Novembro, 42, Centro Histórico, Barreiras, CEP 47800-103 (ao lado do Mercado Cultural Caparrosa)
- **Telefone:** 0800 000 5915, ramal 7576
- **E-mail:** procon@barreiras.ba.gov.br
- **Horário:** segunda a sexta, das 8h às 14h
- **Site:** barreiras.ba.gov.br/procon

**Serviços:**
- Atendimento ao consumidor
- Audiências de conciliação
- Fiscalização de preços e de estabelecimentos
- Orientação

**Documentos:**
- RG e CPF
- Comprovante de residência
- Nota fiscal/contrato
- Protocolos com a empresa

**Alternativas:**
- **Consumidor.gov.br:** reclamação online; a empresa tem até 10 dias para responder
- **Juizados Especiais de Barreiras:** Av. Benedita Silveira, 201, Centro, (77) 3611-8706 / 3611-3785 (dados do TJBA)
- **Defensoria Pública em Barreiras:** Rua 26 de Maio, 568, Centro, (77) 3612-8720 ou WhatsApp (77) 3611-5580

**Cidades vizinhas:**
- Moradores de Luís Eduardo Magalhães, São Desidério e outras cidades devem procurar primeiro os órgãos da própria cidade ou comarca, ou usar o consumidor.gov.br

**Dica:** Antes de ir, tente resolver com a empresa e anote todos os protocolos.`,
    area: 'consumidor',
    keywords: ['procon barreiras bahia', 'procon barreiras telefone', 'defesa consumidor barreiras', 'reclamar procon barreiras'],
    relatedQuestions: ['bahia-2', 'bahia-34', 'cons-1'],
    metaDescription: 'Procon de Barreiras: Travessa 15 de Novembro, 42, Centro Histórico, 0800 000 5915 (ramal 7576), seg. a sex., 8h às 14h. Juizados e Defensoria em Barreiras.'
  },

  // JEQUIÉ (1 FAQ)
  {
    id: 'bahia-40',
    slug: 'procon-jequie-bahia',
    question: 'Onde fica o PROCON de Jequié?',
    answer: `Em Jequié, o atendimento presencial do **Procon-BA** (estadual) é feito no posto do SAC da cidade, segundo a lista oficial conferida em novembro de 2026.

**Posto do Procon-BA em Jequié:**
- **Local:** Posto SAC Jequié, Av. Otávio Mangabeira, s/n, bairro Mandacaru, CEP 45210-002
- **Horário:** segunda a sexta, das 7h às 15h
- **Agendamento:** portal ba.gov.br, 0800 071 5353 ou WhatsApp (71) 4020-5353

**Procon municipal:**
- Não conseguimos confirmar em fonte oficial atualizada o endereço e o telefone de um Procon da Prefeitura de Jequié
- Informações da Prefeitura: jequie.ba.gov.br; central da Prefeitura: 0800 808 0118

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
- **Consumidor.gov.br:** reclamação online; a empresa tem até 10 dias para responder
- **Juizados Especiais de Jequié:** Fórum Bertino Passos, Praça Duque de Caxias, s/n, Jequiezinho, CEP 45206-902, (73) 3527-8360 (dados do TJBA)
- **Defensoria Pública em Jequié:** Rua Manoel Vitorino, 510, Campo do América, (73) 3527-8811

**Municípios próximos:**
- Jaguaquara e Ipiaú também têm posto do Procon-BA no SAC (lista oficial em ba.gov.br/justica)

**Dica:** Antes de ir ao Procon, tente resolver diretamente com a empresa por telefone ou e-mail, guardando todos os protocolos.`,
    area: 'consumidor',
    keywords: ['procon jequié', 'procon jequie telefone', 'defesa consumidor jequié', 'reclamar procon jequie'],
    relatedQuestions: ['bahia-2', 'bahia-28', 'cons-1'],
    metaDescription: 'Procon em Jequié: posto do Procon-BA no SAC (Av. Otávio Mangabeira, s/n, Mandacaru), seg. a sex., 7h às 15h. Agendamento, Juizados e Defensoria em Jequié.'
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

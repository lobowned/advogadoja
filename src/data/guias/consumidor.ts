import type { Guia } from "./tipos";

export const guiaConsumidor: Guia = {
  slug: "consumidor",
  area: "Direito do Consumidor",
  chatArea: "civil",
  title: "Guia do Direito do Consumidor: cobrança, banco e plano",
  metaDescription:
    "Guia completo do consumidor: produto com defeito, cobrança indevida, nome sujo, golpes e bancos, plano de saúde, voos, arrependimento e como reclamar.",
  h1: "Guia completo de direitos do consumidor",
  intro:
    "O Código de Defesa do Consumidor (Lei 8.078/1990, o CDC) protege quem compra produtos e contrata serviços, de uma geladeira a um plano de saúde, de uma passagem aérea a uma conta bancária. Este guia explica os direitos básicos, o que fazer com produto ou serviço com defeito, como agir diante de cobrança indevida e negativação do nome, a responsabilidade dos bancos por golpes, as regras de plano de saúde e de voos, o direito de arrependimento e os caminhos para reclamar, do Procon ao Juizado Especial. Os prazos citados são os do próprio CDC e da legislação especial.",
  secoes: [
    {
      h2: "Quem é consumidor e quais são os direitos básicos",
      paragrafos: [
        "Consumidor é toda pessoa física ou jurídica que adquire ou utiliza produto ou serviço como destinatária final (art. 2º do CDC). Fornecedor é quem produz, monta, importa, distribui, comercializa ou presta serviços no mercado (art. 3º). Bancos, seguradoras, operadoras de telefonia, companhias aéreas, lojas virtuais e planos de saúde estão sujeitos ao CDC; para os bancos, isso está consolidado na Súmula 297 do STJ, e para os planos de saúde, na Súmula 608 do STJ, com exceção das entidades de autogestão.",
        "O art. 6º do CDC lista os direitos básicos, entre eles a informação clara sobre produtos e serviços, a proteção contra publicidade enganosa e práticas abusivas, a revisão de cláusulas que se tornem excessivamente onerosas e a efetiva reparação de danos materiais e morais. O inciso VIII permite que o juiz inverta o ônus da prova a favor do consumidor quando a alegação for verossímil ou ele for hipossuficiente, o que significa que a empresa passa a ter de provar que agiu corretamente.",
        "A responsabilidade do fornecedor é, em regra, objetiva: ele responde pelos danos causados independentemente de culpa (arts. 12 e 14 do CDC). Basta ao consumidor demonstrar o defeito, o dano e a relação entre eles. A empresa só se livra se provar que o defeito não existe ou que a culpa foi exclusiva do consumidor ou de terceiro.",
      ],
    },
    {
      h2: "Produto com defeito: troca, conserto ou dinheiro de volta",
      paragrafos: [
        "Quando o produto apresenta vício que o torna impróprio ou diminui seu valor, o fornecedor tem até 30 dias para resolver o problema (art. 18, § 1º, do CDC). Se não resolver nesse prazo, o consumidor escolhe entre a substituição por outro produto em perfeitas condições, a devolução imediata do valor pago, corrigido, ou o abatimento proporcional do preço. Para produtos essenciais, a escolha pode ser imediata (art. 18, § 3º).",
        "A loja e o fabricante respondem juntos pelo vício do produto; o consumidor pode reclamar com qualquer um deles. A loja não pode simplesmente mandar o cliente procurar a assistência técnica e encerrar a conversa.",
        "Os prazos para reclamar de vícios aparentes são de 30 dias para produtos e serviços não duráveis e de 90 dias para os duráveis, contados da entrega ou do fim do serviço (art. 26). No vício oculto, o prazo começa quando o defeito aparece. A reclamação formal ao fornecedor, comprovada, suspende esse prazo até a resposta negativa. Guarde protocolo, e-mail ou conversa.",
        "Se o defeito causa um acidente, como um aparelho que explode ou um alimento contaminado, trata-se de fato do produto, com prazo de cinco anos para pedir indenização, contado do conhecimento do dano e de sua autoria (art. 27).",
      ],
    },
    {
      h2: "Direito de arrependimento nas compras online",
      paragrafos: [
        "Nas compras feitas fora do estabelecimento comercial, como pela internet, por telefone ou em domicílio, o consumidor pode desistir em até sete dias contados da assinatura do contrato ou do recebimento do produto, sem precisar justificar (art. 49 do CDC). Os valores pagos, inclusive o frete, devem ser devolvidos de imediato e corrigidos.",
        "O pedido de desistência deve ser feito por um meio que deixe registro, como e-mail, chat da loja ou formulário no site. Se a compra foi no cartão de crédito, comunique também a administradora para que o lançamento seja estornado.",
      ],
    },
    {
      h2: "Cobrança indevida e devolução em dobro",
      paragrafos: [
        "O consumidor cobrado em quantia indevida tem direito à repetição do indébito, ou seja, à devolução, por valor igual ao dobro do que pagou em excesso, com correção monetária e juros, salvo engano justificável (art. 42, parágrafo único, do CDC). O Superior Tribunal de Justiça firmou o entendimento de que a devolução em dobro não depende de prova de má-fé, bastando que a cobrança contrarie a boa-fé objetiva.",
        "São exemplos frequentes tarifas bancárias não contratadas, seguros e títulos de capitalização embutidos sem autorização, serviços de telefonia não solicitados, cobranças após cancelamento e descontos indevidos em benefícios do INSS. Na cobrança de dívidas, o consumidor também não pode ser exposto ao ridículo nem submetido a constrangimento ou ameaça (art. 42, caput).",
        "A venda casada, em que o fornecedor condiciona o produto ou serviço à compra de outro, é prática abusiva proibida pelo art. 39, I, do CDC. Envio de produto ou serviço sem solicitação equivale a amostra grátis, sem obrigação de pagamento (art. 39, parágrafo único).",
      ],
    },
    {
      h2: "Nome sujo: negativação indevida no SPC e Serasa",
      paragrafos: [
        "Antes de incluir o nome do consumidor em cadastro de inadimplentes, o órgão mantenedor deve comunicá-lo por escrito (art. 43, § 2º, do CDC). O consumidor tem direito de acessar as informações a seu respeito e de exigir a correção de dados incorretos (art. 43, § 3º). Informações negativas não podem permanecer por mais de cinco anos (art. 43, § 1º).",
        "Quando a negativação é indevida, porque a dívida não existe, já foi paga ou decorre de fraude com documentos do consumidor, os tribunais costumam reconhecer o dano moral sem necessidade de prova do prejuízo, por ser presumido. A exceção está na Súmula 385 do STJ: se o consumidor já tinha outra anotação legítima no cadastro, não cabe indenização por dano moral, embora continue possível pedir o cancelamento da anotação indevida.",
        "Depois de paga a dívida, o credor deve providenciar a exclusão do registro, e o STJ fixou o prazo de cinco dias úteis contados do pagamento (Súmula 548). Consulte o seu CPF nos sites dos birôs de crédito e no Registrato do Banco Central para saber quem está negativando seu nome.",
      ],
    },
    {
      h2: "Bancos, golpes e cartão clonado",
      paragrafos: [
        "As instituições financeiras respondem objetivamente pelos danos causados por fraudes e delitos praticados por terceiros no âmbito de suas operações (Súmula 479 do STJ). Isso alcança, por exemplo, empréstimos contratados por fraudadores em nome do cliente, cartões clonados e transações fora do perfil que o sistema de segurança do banco deveria ter barrado.",
        "Em golpes em que o próprio cliente é induzido a fazer uma transferência ou um Pix, a análise é mais detalhada: verifica-se se o banco falhou em seus mecanismos de segurança, se a operação era atípica para aquele cliente e se a instituição agiu rápido após a comunicação. O Mecanismo Especial de Devolução do Pix (MED), regulamentado pelo Banco Central, permite pedir o bloqueio e a devolução dos valores; o pedido deve ser feito ao banco o quanto antes, juntamente com o boletim de ocorrência.",
        "Para quem está com o orçamento comprometido por dívidas de consumo, a Lei 14.181/2021, chamada Lei do Superendividamento, alterou o CDC para prever a repactuação das dívidas com preservação do mínimo existencial, por meio de audiência conciliatória com todos os credores (art. 104-A do CDC).",
      ],
    },
    {
      h2: "Plano de saúde: negativa de cobertura e reajustes",
      paragrafos: [
        "Os planos de saúde são regidos pela Lei 9.656/1998 e pelo CDC. A negativa de cobertura deve ser informada por escrito, de forma clara e fundamentada, sempre que o beneficiário solicitar. Com a Lei 14.454/2022, o rol de procedimentos da ANS passou a ser referência básica, e tratamentos fora dele podem ser cobertos quando há comprovação de eficácia ou recomendação de órgãos técnicos, nos termos do art. 10, § 13, da Lei 9.656/1998.",
        "Nos casos de urgência e emergência, o prazo de carência máximo é de 24 horas (art. 12, V, c, da Lei 9.656/1998). Quando a negativa coloca em risco a saúde do paciente, como em cirurgias, internações, tratamentos oncológicos e terapias para pessoas com deficiência, é possível pedir à Justiça uma decisão liminar, que pode ser analisada em poucos dias ou horas, conforme a urgência demonstrada no relatório médico.",
        "Reajustes também podem ser questionados. Nos planos individuais, o índice anual é limitado ao autorizado pela ANS. Nos planos coletivos e nos reajustes por faixa etária, a abusividade é analisada caso a caso, observadas as regras da agência e o entendimento do STJ.",
        "Antes de ir à Justiça, registre reclamação na própria operadora e na ANS, pelo canal de atendimento da agência. O protocolo dessas reclamações reforça a prova da negativa.",
      ],
    },
    {
      h2: "Voo atrasado, cancelado e bagagem extraviada",
      paragrafos: [
        "A Resolução 400/2016 da ANAC obriga a companhia aérea a prestar assistência material em atrasos, cancelamentos e preterição de embarque: facilidades de comunicação a partir de uma hora de espera, alimentação a partir de duas horas e hospedagem, quando necessário pernoite, com traslado, a partir de quatro horas. Em atrasos superiores a quatro horas e em cancelamentos, o passageiro pode escolher entre reacomodação, reembolso integral ou execução do serviço por outra modalidade.",
        "A indenização por dano moral em atrasos e cancelamentos não é automática. O art. 251-A do Código Brasileiro de Aeronáutica, incluído pela Lei 14.034/2020, exige a demonstração do prejuízo efetivo e de sua extensão. Perda de compromisso importante, de conexão, de diária de hotel ou de evento, pernoite no aeroporto sem assistência e longas esperas sem informação são exemplos de situações que costumam ser consideradas.",
        "No extravio de bagagem em voo doméstico, a companhia tem até sete dias para restituir a mala (art. 32 da Resolução 400/2016). Faça o Registro de Irregularidade de Bagagem ainda no aeroporto e guarde notas fiscais das compras emergenciais de roupas e itens de higiene. Em voos internacionais, aplicam-se também as regras das Convenções de Varsóvia e Montreal para danos materiais.",
      ],
    },
    {
      h2: "Serviços de telefonia, internet e energia",
      paragrafos: [
        "Os serviços públicos essenciais prestados por concessionárias devem ser adequados, eficientes, seguros e, quanto aos essenciais, contínuos (art. 22 do CDC). Cobranças por serviços não contratados, falhas repetidas de sinal e dificuldade de cancelamento podem gerar devolução de valores e, conforme o caso, indenização.",
        "O cancelamento de serviços de telecomunicações deve ser aceito pelo mesmo canal usado na contratação, inclusive pela internet, conforme as normas da Anatel. Anote sempre o número do protocolo e a data de cada atendimento.",
      ],
    },
    {
      h2: "Onde e como reclamar",
      paragrafos: [
        "O primeiro passo é registrar a reclamação no próprio fornecedor, de forma documentada. Se não houver solução, o consumidor pode recorrer ao Procon do seu município, à plataforma pública consumidor.gov.br, às agências reguladoras (ANS, ANAC, Anatel, Aneel, Banco Central) e, por fim, ao Judiciário. As reclamações registradas servem como prova da tentativa de solução.",
        "O Juizado Especial Cível julga causas de até 40 salários mínimos (art. 3º, I, da Lei 9.099/1995). Até 20 salários mínimos, a assistência de advogado é facultativa (art. 9º); acima disso, obrigatória. No primeiro grau do Juizado não há custas. O consumidor pode propor a ação no foro do seu próprio domicílio (art. 101, I, do CDC).",
        "Mesmo quando a assistência é facultativa, a orientação de um advogado ajuda a definir os pedidos certos, quantificar os danos materiais, reunir as provas e evitar que um acordo abaixo do devido seja aceito na audiência de conciliação.",
      ],
    },
    {
      h2: "Contratos, cláusulas abusivas e publicidade enganosa",
      paragrafos: [
        "São nulas de pleno direito as cláusulas que coloquem o consumidor em desvantagem exagerada, que impossibilitem ou atenuem a responsabilidade do fornecedor por vícios, que transfiram responsabilidades a terceiros ou que estabeleçam obrigações incompatíveis com a boa-fé (art. 51 do CDC). A nulidade de uma cláusula, em regra, não invalida o contrato inteiro. Nos contratos de adesão, as cláusulas que limitam direitos devem ser redigidas com destaque, para fácil compreensão (art. 54, § 4º).",
        "O contrato deve ser interpretado da maneira mais favorável ao consumidor (art. 47), e ele não fica obrigado a cumprir cláusulas das quais não teve oportunidade de conhecer previamente ou que foram redigidas de modo a dificultar a compreensão (art. 46).",
        "Toda informação ou publicidade suficientemente precisa obriga o fornecedor (art. 30). Se ele se recusar a cumprir a oferta, o consumidor pode exigir o cumprimento forçado, aceitar produto equivalente ou rescindir o contrato com restituição do valor e perdas e danos (art. 35). A publicidade enganosa ou abusiva é proibida (art. 37), e erro de preço muito evidente pode ser avaliado de forma diferente pelos tribunais, conforme as circunstâncias.",
      ],
    },
    {
      h2: "Provas que fazem diferença",
      paragrafos: [
        "Notas fiscais, contratos, prints do anúncio e da oferta, faturas e extratos, números de protocolo com data e nome do atendente, e-mails e conversas, fotos e vídeos do produto com defeito, laudos da assistência técnica, relatórios médicos e negativas por escrito do plano de saúde, cartões de embarque e comprovantes de gastos extras em viagens.",
        "Faça prints com data e hora visíveis e salve os arquivos em mais de um lugar. A oferta veiculada obriga o fornecedor e integra o contrato (art. 30 do CDC), por isso guardar o anúncio original é especialmente importante.",
      ],
    },
  ],
  faq: [
    {
      q: "Comprei pela internet e me arrependi. Posso devolver?",
      a: "Sim. Em compras fora da loja física, você tem sete dias, contados do recebimento do produto ou da contratação, para desistir sem justificar e receber de volta tudo o que pagou, inclusive o frete (art. 49 do CDC).",
    },
    {
      q: "A loja é obrigada a trocar produto com defeito?",
      a: "O fornecedor tem 30 dias para consertar. Se não resolver, você escolhe entre a troca, a devolução do dinheiro corrigido ou o abatimento do preço (art. 18, § 1º, do CDC). Loja e fabricante respondem juntos.",
    },
    {
      q: "Fui cobrado indevidamente. Tenho direito a receber em dobro?",
      a: "Se você pagou a cobrança indevida, tem direito à devolução em dobro do que pagou a mais, com correção e juros, salvo engano justificável (art. 42, parágrafo único, do CDC). O STJ entende que não é preciso provar má-fé da empresa.",
    },
    {
      q: "Meu nome foi negativado sem eu dever. Cabe indenização?",
      a: "Em regra, sim; a negativação indevida costuma gerar dano moral presumido. A exceção é quando já existia outra anotação legítima no seu CPF (Súmula 385 do STJ). Em qualquer caso, é possível pedir a exclusão da anotação.",
    },
    {
      q: "Em quanto tempo o nome sai do Serasa depois que eu pago?",
      a: "O credor deve pedir a retirada em até cinco dias úteis após o pagamento (Súmula 548 do STJ). Se o registro continuar, a manutenção indevida pode gerar indenização.",
    },
    {
      q: "Caí em um golpe do Pix. O banco tem que devolver?",
      a: "Depende do caso. Peça imediatamente ao banco a abertura do Mecanismo Especial de Devolução (MED) e registre boletim de ocorrência. Se houver falha de segurança do banco, como operação fora do seu perfil sem bloqueio, ele pode ser responsabilizado (Súmula 479 do STJ).",
    },
    {
      q: "O plano de saúde negou minha cirurgia. O que fazer?",
      a: "Peça a negativa por escrito, reúna o relatório médico detalhando a urgência e registre reclamação na ANS. Havendo risco à saúde, é possível pedir liminar na Justiça para obrigar a cobertura.",
    },
    {
      q: "Voo atrasado dá direito a indenização?",
      a: "Você tem direito à assistência material da Resolução ANAC 400/2016 conforme o tempo de espera. A indenização por dano moral exige demonstrar o prejuízo concreto (art. 251-A do Código Brasileiro de Aeronáutica), como perda de compromisso ou pernoite sem assistência.",
    },
    {
      q: "Preciso de advogado para entrar no Juizado Especial?",
      a: "Até 20 salários mínimos a assistência é facultativa; de 20 a 40 salários mínimos, é obrigatória (art. 9º da Lei 9.099/1995). Ainda assim, a orientação técnica ajuda a definir pedidos e provas.",
    },
    {
      q: "Qual o prazo para reclamar de um produto com defeito?",
      a: "30 dias para produtos não duráveis e 90 dias para duráveis, contados da entrega; no vício oculto, contados de quando o defeito aparece (art. 26 do CDC). Para indenização por acidente causado pelo produto, o prazo é de cinco anos (art. 27).",
    },
  ],
  artigosRelacionados: [
    "/artigos/consumidor/produto-defeito-troca-reembolso",
    "/artigos/consumidor/direito-arrependimento-compras-online-7-dias",
    "/artigos/consumidor/cobranca-indevida-restituicao-dobro",
    "/artigos/consumidor/negativacao-indevida-spc-serasa",
    "/artigos/consumidor/tarifas-bancarias-abusivas",
    "/artigos/consumidor/golpe-pix-como-recuperar-dinheiro",
    "/artigos/consumidor/cartao-clonado-responsabilidade-banco",
    "/artigos/consumidor/plano-saude-negativa-cobertura",
    "/artigos/consumidor/liminar-plano-saude-48-horas",
    "/artigos/consumidor/atraso-cancelamento-voo-direitos",
    "/artigos/consumidor/overbooking-extravio-bagagem",
    "/artigos/consumidor/telefonia-internet-problemas",
  ],
  paginasLocais: [
    { href: "/advogado-consumidor", label: "Direito do Consumidor — área de atuação" },
    { href: "/advogado/salvador", label: "Advogado em Salvador" },
    { href: "/advogado/camacari", label: "Advogado em Camaçari" },
    { href: "/advogado/lauro-de-freitas", label: "Advogado em Lauro de Freitas" },
    { href: "/advogado-negativacao-indevida", label: "Negativação indevida" },
    { href: "/advogado-plano-saude-cobertura-negada", label: "Plano de saúde negou cobertura" },
    { href: "/advogado-voo-cancelado-atrasado", label: "Voo cancelado ou atrasado" },
  ],
  whatsappText: "Olá! Li o guia do consumidor e quero analisar meu problema.",
  atualizadoEm: "2026-11-04",
};

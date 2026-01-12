export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  category: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  readingTime: number;
  featuredImage?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "multa-transito-indevida",
    slug: "como-recorrer-multa-transito-indevida",
    title: "Como Recorrer de Multa de Trânsito Indevida: Guia Completo",
    metaTitle: "Como Recorrer de Multa de Trânsito Indevida: Guia Completo 2024",
    metaDescription: "Guia completo sobre como recorrer de multas de trânsito indevidas. Conheça seus direitos e aumente suas chances de sucesso.",
    keywords: ["multa de trânsito indevida", "recurso multa", "JARI", "DETRAN", "defesa prévia", "cancelar multa"],
    category: "Trânsito",
    excerpt: "Recebeu uma multa que considera injusta? Saiba como recorrer corretamente e aumentar suas chances de cancelamento.",
    author: "Equipe Advogado Já",
    publishedAt: "2024-01-10",
    updatedAt: "2024-01-10",
    readingTime: 12,
    content: `
      <p class="text-lg text-muted-foreground mb-8">Receber uma multa de trânsito é sempre desagradável, mas quando ela é <strong>indevida</strong>, a frustração é ainda maior. A boa notícia é que você tem direito de recorrer e, seguindo os passos corretos, pode conseguir o cancelamento da infração. Neste guia completo, vamos explicar tudo o que você precisa saber para defender seus direitos.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">O Que É uma Multa de Trânsito Indevida</h2>
      
      <p class="mb-4">Uma multa de trânsito é considerada <strong>indevida</strong> quando aplicada de forma irregular, seja por erro do agente de trânsito, falha no equipamento eletrônico, ou qualquer situação que não corresponda à realidade dos fatos.</p>
      
      <p class="mb-4">Exemplos comuns de multas indevidas incluem:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Radar com aferição vencida ou irregular</li>
        <li>Erro na identificação da placa do veículo</li>
        <li>Sinalização ausente, danificada ou confusa</li>
        <li>Condutor não identificável em imagem de radar</li>
        <li>Descrição incorreta da infração no auto</li>
        <li>Multa aplicada em local onde você não estava</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Principais Motivos para Recorrer</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Erro na Identificação do Veículo</h3>
      <p class="mb-4">Placas clonadas, erros de digitação ou falhas no sistema OCR (reconhecimento de caracteres) podem resultar em multas para veículos que sequer estavam no local. Se você conseguir provar que seu veículo não poderia estar naquele lugar (estava em oficina, em outra cidade, etc.), o recurso tem grandes chances de sucesso.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Equipamento Sem Aferição Válida</h3>
      <p class="mb-4">Todo equipamento de fiscalização eletrônica (radar, lombada, etc.) precisa ter certificação do INMETRO com aferição válida. Você pode solicitar informações sobre a aferição do equipamento via Lei de Acesso à Informação. Se estiver vencida, a multa é nula.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Sinalização Inadequada</h3>
      <p class="mb-4">A sinalização de trânsito precisa ser clara, visível e estar em conformidade com as normas do CONTRAN. Fotos que comprovem sinalização danificada, oculta por vegetação ou inexistente são provas valiosas para seu recurso.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Erro na Descrição da Infração</h3>
      <p class="mb-4">O auto de infração deve conter informações precisas sobre o local, data, hora e natureza da infração. Erros grosseiros, como datas impossíveis ou endereços inexistentes, podem invalidar a multa.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Prazos para Recurso</h2>
      
      <p class="mb-4">Respeitar os prazos é fundamental. Veja as etapas e seus respectivos prazos:</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">1. Defesa Prévia</h3>
      <p class="mb-4">Você tem <strong>até a data indicada na Notificação de Autuação</strong> para apresentar defesa prévia. Este é o primeiro recurso, apresentado antes do julgamento da infração. O prazo costuma ser de 15 dias a partir do recebimento da notificação.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">2. Recurso à JARI</h3>
      <p class="mb-4">Se a defesa prévia for indeferida, você pode recorrer à <strong>Junta Administrativa de Recursos de Infrações (JARI)</strong>. O prazo é de <strong>30 dias</strong> a partir da notificação de penalidade (quando você recebe o boleto da multa).</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">3. Recurso ao CETRAN/CONTRAN</h3>
      <p class="mb-4">Se a JARI também negar seu recurso, ainda é possível recorrer ao <strong>CETRAN</strong> (Conselho Estadual de Trânsito) ou <strong>CONTRAN</strong> (Conselho Nacional de Trânsito), dependendo do órgão autuador. O prazo é de <strong>30 dias</strong> após a notificação da decisão da JARI.</p>

      <div class="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p class="font-semibold text-primary mb-2">⚠️ Atenção aos Prazos!</p>
        <p class="text-foreground">Perder o prazo significa perder o direito de recorrer naquela instância. Marque as datas no calendário assim que receber qualquer notificação.</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Documentos Necessários</h2>
      
      <p class="mb-4">Para montar um recurso sólido, você precisará de:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Cópia da CNH</strong> do condutor (frente e verso)</li>
        <li><strong>Cópia do CRLV</strong> do veículo</li>
        <li><strong>Notificação de Autuação</strong> ou <strong>Notificação de Penalidade</strong></li>
        <li><strong>Fotos do local</strong> (sinalização, condições da via)</li>
        <li><strong>Provas documentais</strong> (comprovantes de viagem, nota fiscal de oficina, etc.)</li>
        <li><strong>Relatório de aferição</strong> do equipamento (solicitar via LAI)</li>
        <li><strong>Testemunhos</strong> (se houver)</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Modelo de Recurso Passo a Passo</h2>
      
      <p class="mb-4">Seu recurso deve seguir uma estrutura clara e objetiva:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-4">
        <li>
          <strong>Identificação:</strong> Seus dados pessoais, dados do veículo e número do auto de infração
        </li>
        <li>
          <strong>Endereçamento:</strong> Ao órgão competente (DETRAN, JARI, etc.)
        </li>
        <li>
          <strong>Dos Fatos:</strong> Narração objetiva do que aconteceu
        </li>
        <li>
          <strong>Do Direito:</strong> Fundamentação legal (artigos do CTB, resoluções do CONTRAN)
        </li>
        <li>
          <strong>Das Provas:</strong> Lista e descrição das provas anexadas
        </li>
        <li>
          <strong>Do Pedido:</strong> Solicitação clara de cancelamento da multa
        </li>
        <li>
          <strong>Data, local e assinatura</strong>
        </li>
      </ol>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Dicas para Aumentar Suas Chances</h2>
      
      <p class="mb-4">Algumas estratégias podem fortalecer significativamente seu recurso:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-3">
        <li><strong>Fotografe tudo:</strong> Vá ao local e registre as condições de sinalização, visibilidade e qualquer irregularidade</li>
        <li><strong>Solicite as imagens:</strong> Você tem direito às fotos/vídeos do radar. Se não forem fornecidas, use isso como argumento</li>
        <li><strong>Peça o certificado de aferição:</strong> Se estiver vencido ou irregular, a multa pode ser anulada</li>
        <li><strong>Seja objetivo:</strong> Evite textos longos e emotivos. Foque nos fatos e na lei</li>
        <li><strong>Não invente argumentos:</strong> Mentiras podem configurar crime de falsidade ideológica</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Quando Procurar um Advogado</h2>
      
      <p class="mb-4">Embora você possa recorrer sozinho, algumas situações exigem apoio jurídico especializado:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Multas graves com suspensão da CNH</li>
        <li>Acúmulo de pontos próximo ao limite (20 pontos)</li>
        <li>Infrações que podem resultar em cassação</li>
        <li>Multas de alto valor que comprometem seu orçamento</li>
        <li>Casos complexos com múltiplas infrações</li>
        <li>Recursos já negados em primeira instância</li>
      </ul>
      
      <p class="mb-4">Um advogado especializado conhece os detalhes técnicos e jurídicos que podem fazer a diferença no resultado do seu recurso.</p>

      <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-10 text-center">
        <h3 class="text-2xl font-bold text-foreground mb-3">Precisa de Ajuda com Sua Multa?</h3>
        <p class="text-muted-foreground mb-6">Nossa equipe de advogados especializados pode analisar seu caso gratuitamente e orientar sobre as melhores chances de recurso.</p>
        <a href="/" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Falar com Advogado Agora
        </a>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Perguntas Frequentes</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Posso recorrer de qualquer multa?</h3>
          <p class="text-muted-foreground">Sim, todo cidadão tem o direito constitucional de defesa. Porém, multas sem irregularidades dificilmente serão canceladas.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Preciso pagar a multa enquanto recorro?</h3>
          <p class="text-muted-foreground">Não. Enquanto o recurso está em análise, a multa fica suspensa. Porém, os pontos podem ser computados após o julgamento final.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Quanto tempo demora o julgamento?</h3>
          <p class="text-muted-foreground">Varia conforme o órgão, mas costuma levar de 30 a 120 dias em cada instância.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Se eu perder, posso entrar na Justiça?</h3>
          <p class="text-muted-foreground">Sim, após esgotar as vias administrativas, você pode questionar a multa judicialmente.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Conclusão</h2>
      
      <p class="mb-4">Recorrer de uma multa de trânsito indevida é um direito seu. Com organização, documentação adequada e conhecimento dos prazos, você aumenta significativamente suas chances de sucesso. Não deixe de exercer seu direito de defesa.</p>
      
      <p class="mb-4">Se precisar de orientação especializada, nossa equipe está pronta para ajudar. Entre em contato e saiba como podemos auxiliar no seu caso.</p>
    `
  },
  {
    id: "direitos-consumidor-online",
    slug: "direitos-consumidor-compras-online",
    title: "Direitos do Consumidor em Compras Online: Evite Fraudes e Problemas",
    metaTitle: "Direitos do Consumidor em Compras Online: Guia Completo 2024",
    metaDescription: "Proteja-se ao comprar online. Conheça seus direitos como consumidor e evite fraudes e problemas com entregas e produtos.",
    keywords: ["direitos consumidor online", "compras pela internet", "direito de arrependimento", "e-commerce", "fraude online", "devolução produto"],
    category: "Consumidor",
    excerpt: "Conheça todos os seus direitos ao fazer compras pela internet e saiba como se proteger de fraudes e problemas.",
    author: "Equipe Advogado Já",
    publishedAt: "2024-01-12",
    updatedAt: "2024-01-12",
    readingTime: 14,
    content: `
      <p class="text-lg text-muted-foreground mb-8">O comércio eletrônico brasileiro cresce a cada ano, mas junto com as oportunidades surgem também os problemas: <strong>produtos não entregues, itens diferentes do anunciado, dificuldade de troca e fraudes</strong>. Neste guia, você vai conhecer todos os seus direitos e aprender a se proteger nas compras online.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">O Código de Defesa do Consumidor e o E-commerce</h2>
      
      <p class="mb-4">O <strong>Código de Defesa do Consumidor (CDC)</strong>, Lei nº 8.078/90, aplica-se integralmente às compras online. Além disso, o <strong>Decreto nº 7.962/2013</strong> estabelece regras específicas para o comércio eletrônico no Brasil.</p>
      
      <p class="mb-4">Isso significa que você tem os mesmos direitos básicos das compras em lojas físicas, <strong>mais alguns direitos adicionais</strong> exclusivos das compras feitas fora do estabelecimento comercial.</p>
      
      <p class="mb-4">Os sites de e-commerce são obrigados a:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Informar claramente CNPJ, razão social e endereço físico</li>
        <li>Disponibilizar atendimento ao consumidor</li>
        <li>Apresentar informações completas sobre produtos e serviços</li>
        <li>Informar prazo e condições de entrega</li>
        <li>Manter registro das comunicações com o consumidor</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Direito de Arrependimento: Os Famosos 7 Dias</h2>
      
      <p class="mb-4">Este é um dos direitos mais importantes nas compras online. O <strong>artigo 49 do CDC</strong> garante que você pode desistir da compra em até <strong>7 dias corridos</strong> após o recebimento do produto, sem precisar dar nenhuma justificativa.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Como Funciona na Prática</h3>
      <p class="mb-4">O prazo de 7 dias começa a contar a partir do <strong>recebimento do produto</strong> (não da compra). Durante esse período, você pode:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Solicitar o cancelamento da compra</li>
        <li>Devolver o produto, mesmo que já tenha aberto a embalagem</li>
        <li>Receber o reembolso integral, incluindo o frete</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">O Que a Loja Não Pode Fazer</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Cobrar taxa de devolução ou restocking fee</li>
        <li>Exigir que o produto esteja lacrado/na embalagem original</li>
        <li>Oferecer apenas crédito na loja (você tem direito ao dinheiro de volta)</li>
        <li>Dificultar o exercício do direito com burocracia excessiva</li>
      </ul>

      <div class="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p class="font-semibold text-primary mb-2">💡 Dica Importante</p>
        <p class="text-foreground">Sempre formalize sua desistência por escrito (e-mail, chat com protocolo, ou carta registrada). Guarde os comprovantes de envio e comunicação.</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Problemas com Entrega</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Produto Não Entregue</h3>
      <p class="mb-4">Se o produto não foi entregue no prazo prometido, você tem direito a:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Exigir a entrega imediata</strong> do produto</li>
        <li><strong>Cancelar a compra</strong> e receber reembolso integral</li>
        <li><strong>Aceitar produto equivalente</strong> (se concordar)</li>
        <li><strong>Indenização por danos morais</strong> em casos de grande transtorno</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Entrega com Atraso</h3>
      <p class="mb-4">O atraso injustificado configura descumprimento contratual. Dependendo do prejuízo causado (perda de evento, presente não entregue a tempo), você pode pleitear indenização.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Produto Danificado na Entrega</h3>
      <p class="mb-4">Se o produto chegou danificado:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Fotografe o produto e a embalagem imediatamente</li>
        <li>Entre em contato com a loja em até 24 horas</li>
        <li>Você pode recusar o recebimento anotando o motivo</li>
        <li>A loja deve providenciar a troca ou reembolso sem custos</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Produto com Defeito ou Diferente do Anunciado</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Vício Aparente vs Vício Oculto</h3>
      <p class="mb-4"><strong>Vício aparente</strong> é aquele que você identifica logo ao receber (cor diferente, tamanho errado, peça faltando). O prazo para reclamar é de <strong>30 dias</strong> para produtos não duráveis e <strong>90 dias</strong> para produtos duráveis.</p>
      
      <p class="mb-4"><strong>Vício oculto</strong> é aquele que aparece com o uso (defeito de fabricação que surge após semanas). Nesse caso, o prazo começa a contar a partir do momento em que você descobriu o problema.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Seus Direitos em Caso de Defeito</h3>
      <p class="mb-4">Segundo o artigo 18 do CDC, você pode escolher entre:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Substituição</strong> por outro produto igual em perfeitas condições</li>
        <li><strong>Restituição</strong> do valor pago, com correção monetária</li>
        <li><strong>Abatimento proporcional</strong> do preço</li>
      </ul>
      
      <p class="mb-4">A loja tem 30 dias para resolver o problema. Se não resolver, você escolhe uma das opções acima.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Propaganda Enganosa</h3>
      <p class="mb-4">Se o produto é diferente do anunciado (fotos, descrição, características), isso configura <strong>propaganda enganosa</strong>, prática proibida pelo CDC. Você tem direito a:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Cancelar a compra com reembolso integral</li>
        <li>Exigir o cumprimento da oferta exatamente como anunciada</li>
        <li>Indenização por eventuais danos causados</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Segurança de Dados nas Compras Online</h2>
      
      <p class="mb-4">Com a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>, os sites de e-commerce têm obrigações específicas sobre seus dados pessoais:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Só podem coletar dados necessários para a compra</li>
        <li>Devem informar como seus dados serão usados</li>
        <li>Você pode pedir a exclusão dos seus dados a qualquer momento</li>
        <li>Em caso de vazamento, a empresa deve notificá-lo</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Fraudes em Cartão de Crédito</h3>
      <p class="mb-4">Se você foi vítima de fraude e teve compras feitas sem sua autorização:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Conteste a cobrança imediatamente com a operadora do cartão</li>
        <li>Registre Boletim de Ocorrência</li>
        <li>Você não é obrigado a pagar por compras que não fez</li>
        <li>A responsabilidade é da loja e/ou operadora, não sua</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Como Reclamar de Forma Efetiva</h2>
      
      <p class="mb-4">Se a loja não resolver seu problema amigavelmente, você tem várias opções:</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">1. Procon</h3>
      <p class="mb-4">O Procon do seu estado ou município pode intermediar conflitos de consumo. A reclamação pode ser feita presencialmente ou online em muitas cidades.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">2. Consumidor.gov.br</h3>
      <p class="mb-4">Plataforma oficial do governo para resolução de conflitos. A maioria das grandes empresas participa e costuma resolver rapidamente para manter bons índices.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">3. Reclame Aqui</h3>
      <p class="mb-4">Embora não seja um órgão oficial, muitas empresas monitoram o site e respondem às reclamações para proteger sua reputação.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">4. Ação Judicial</h3>
      <p class="mb-4">Para causas de até 20 salários mínimos, você pode ir ao <strong>Juizado Especial Cível (JEC)</strong> sem advogado. Acima desse valor, recomenda-se assistência jurídica.</p>

      <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-10 text-center">
        <h3 class="text-2xl font-bold text-foreground mb-3">Teve Problemas com Compra Online?</h3>
        <p class="text-muted-foreground mb-6">Nossa equipe de advogados especializados em direito do consumidor pode analisar seu caso e orientar sobre os próximos passos.</p>
        <a href="/" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Consultar Advogado Grátis
        </a>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Quando É Necessário um Advogado</h2>
      
      <p class="mb-4">Procure orientação jurídica especializada quando:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>O valor envolvido é alto (acima de R$ 10.000)</li>
        <li>Você sofreu danos morais significativos</li>
        <li>A empresa se recusa a negociar</li>
        <li>Há indícios de fraude organizada</li>
        <li>Você precisa de liminar urgente</li>
        <li>A questão envolve empresa estrangeira</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Dicas de Prevenção</h2>
      
      <p class="mb-4">Para evitar problemas, siga estas recomendações:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-3">
        <li><strong>Pesquise a reputação da loja</strong> no Reclame Aqui e Procon antes de comprar</li>
        <li><strong>Verifique o cadeado de segurança</strong> (HTTPS) no site</li>
        <li><strong>Desconfie de preços muito abaixo</strong> do mercado</li>
        <li><strong>Prefira pagamento via cartão</strong> (mais fácil de contestar)</li>
        <li><strong>Salve prints</strong> do anúncio, preço e condições</li>
        <li><strong>Guarde todos os comprovantes</strong> e comunicações</li>
        <li><strong>Leia a política de trocas</strong> antes de finalizar</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Conclusão</h2>
      
      <p class="mb-4">Comprar online é conveniente, mas exige atenção. Conhecer seus direitos é a melhor forma de se proteger e garantir que problemas sejam resolvidos rapidamente. Não hesite em buscar ajuda quando necessário – o Código de Defesa do Consumidor está do seu lado.</p>
      
      <p class="mb-4">Se você está enfrentando problemas com uma compra online e precisa de orientação jurídica, nossa equipe está pronta para ajudar. Entre em contato para uma consulta gratuita.</p>
    `
  },
  {
    id: "superendividamento-dividas",
    slug: "superendividamento-negociar-dividas",
    title: "Superendividamento: Como Negociar Dívidas e Sair do Vermelho",
    metaTitle: "Superendividamento: Como Negociar Dívidas e Sair do Vermelho | Guia 2024",
    metaDescription: "Guia para quem está superendividado. Aprenda a negociar suas dívidas e reorganize sua vida financeira com apoio jurídico.",
    keywords: ["superendividamento", "negociar dívidas", "lei do superendividamento", "dívidas", "nome sujo", "renegociação"],
    category: "Financeiro",
    excerpt: "Está afogado em dívidas? Conheça a Lei do Superendividamento e saiba como negociar para recuperar sua saúde financeira.",
    author: "Equipe Advogado Já",
    publishedAt: "2024-01-14",
    updatedAt: "2024-01-14",
    readingTime: 13,
    content: `
      <p class="text-lg text-muted-foreground mb-8">Estar endividado é uma situação difícil, mas quando as dívidas comprometem sua capacidade de pagar contas básicas como alimentação, moradia e saúde, você pode estar em situação de <strong>superendividamento</strong>. A boa notícia é que existe uma lei específica para ajudar pessoas nessa situação. Neste guia, você vai entender seus direitos e como sair do vermelho.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">O Que É Superendividamento</h2>
      
      <p class="mb-4">Segundo a <strong>Lei nº 14.181/2021</strong>, superendividamento é a impossibilidade manifesta do consumidor pessoa física, de boa-fé, de pagar a totalidade de suas dívidas de consumo sem comprometer seu <strong>mínimo existencial</strong>.</p>
      
      <p class="mb-4">Em termos práticos, você está superendividado quando:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Suas dívidas consomem a maior parte da sua renda</li>
        <li>Você não consegue pagar contas básicas (luz, água, alimentação)</li>
        <li>Precisa fazer novas dívidas para pagar as antigas</li>
        <li>Está com o nome negativado em vários órgãos</li>
        <li>Recebe cobranças constantes e sofre com estresse financeiro</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Diferença Entre Endividamento e Superendividamento</h3>
      <p class="mb-4"><strong>Endividamento</strong> é ter dívidas, o que é normal na vida financeira de qualquer pessoa. <strong>Superendividamento</strong> é quando essas dívidas saem do controle e você não consegue mais gerenciá-las, comprometendo sua sobrevivência digna.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">A Nova Lei do Superendividamento</h2>
      
      <p class="mb-4">A Lei 14.181/2021 alterou o Código de Defesa do Consumidor e trouxe importantes proteções para consumidores endividados. Ela criou mecanismos de prevenção e tratamento do superendividamento.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Quem Pode se Beneficiar</h3>
      <p class="mb-4">Para usar os benefícios da lei, você precisa:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Ser pessoa física (não vale para empresas)</li>
        <li>Ter agido de boa-fé (não ter se endividado intencionalmente)</li>
        <li>Não ter causado o endividamento por fraude ou má-fé</li>
        <li>Estar impossibilitado de pagar as dívidas sem comprometer o mínimo existencial</li>
      </ul>
      
      <p class="mb-4"><strong>Não se aplica</strong> a dívidas com o fisco (impostos), pensão alimentícia, financiamento imobiliário com garantia real, ou dívidas oriundas de fraude.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Direitos Garantidos pela Lei</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Mínimo existencial:</strong> Preservação de recursos para sobrevivência digna</li>
        <li><strong>Audiência de conciliação:</strong> Reunir todos os credores para negociar</li>
        <li><strong>Plano de pagamento:</strong> Prazo de até 5 anos para quitar as dívidas</li>
        <li><strong>Proteção contra assédio:</strong> Proibição de cobranças abusivas</li>
        <li><strong>Revisão de contratos:</strong> Possibilidade de rever cláusulas abusivas</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">O Que É Mínimo Existencial</h3>
      <p class="mb-4">É o valor necessário para garantir sua sobrevivência e de sua família com dignidade. Inclui:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Alimentação</li>
        <li>Moradia</li>
        <li>Saúde</li>
        <li>Educação</li>
        <li>Transporte</li>
        <li>Despesas básicas do lar</li>
      </ul>
      
      <p class="mb-4">As parcelas do plano de pagamento não podem comprometer esse mínimo. Na prática, costuma-se considerar algo em torno de <strong>25% a 35% da renda</strong> para pagamento das dívidas.</p>

      <div class="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p class="font-semibold text-primary mb-2">📌 Importante</p>
        <p class="text-foreground">A lei do superendividamento não perdoa dívidas, mas cria condições para que você possa pagá-las de forma organizada, sem comprometer sua dignidade.</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Etapas para Sair do Superendividamento</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">1. Mapeamento das Dívidas</h3>
      <p class="mb-4">O primeiro passo é saber exatamente o que você deve. Liste todas as dívidas com:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Nome do credor (banco, loja, financeira)</li>
        <li>Valor original da dívida</li>
        <li>Valor atual (com juros e correção)</li>
        <li>Taxa de juros aplicada</li>
        <li>Parcelas em atraso</li>
      </ul>
      
      <p class="mb-4">Você pode consultar suas dívidas no site do <strong>Banco Central (Registrato)</strong> e nos órgãos de proteção ao crédito (SPC, Serasa).</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">2. Análise do Orçamento</h3>
      <p class="mb-4">Faça um levantamento completo de suas receitas e despesas mensais:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Receitas:</strong> salário, benefícios, aluguéis, pensões</li>
        <li><strong>Despesas fixas:</strong> aluguel, condomínio, luz, água, internet</li>
        <li><strong>Despesas variáveis:</strong> alimentação, transporte, lazer</li>
        <li><strong>Dívidas:</strong> parcelas, juros, encargos</li>
      </ul>
      
      <p class="mb-4">Isso vai mostrar quanto você pode comprometer mensalmente para pagar dívidas sem prejudicar seu sustento.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">3. Priorização de Pagamentos</h3>
      <p class="mb-4">Nem todas as dívidas são iguais. Priorize:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Essenciais:</strong> aluguel, luz, água (evitam corte de serviços)</li>
        <li><strong>Garantidas:</strong> financiamentos com bem em garantia (evitam perda do bem)</li>
        <li><strong>Mais caras:</strong> cartão de crédito e cheque especial (juros altíssimos)</li>
        <li><strong>Outras:</strong> empréstimos pessoais, consignados, etc.</li>
      </ol>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Como Funciona a Negociação de Dívidas</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Negociação Direta com Credores</h3>
      <p class="mb-4">Você pode entrar em contato diretamente com cada credor e tentar negociar:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Desconto no valor total (especialmente em dívidas antigas)</li>
        <li>Parcelamento em mais vezes</li>
        <li>Redução de juros e encargos</li>
        <li>Carência para começar a pagar</li>
      </ul>
      
      <p class="mb-4"><strong>Dica:</strong> Os credores costumam oferecer melhores condições no final do ano (mutirões de negociação) e para pagamentos à vista.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Mutirões de Negociação</h3>
      <p class="mb-4">Procon, Defensoria Pública e Tribunais de Justiça frequentemente organizam mutirões para negociação de dívidas. Neles, você pode encontrar todos os credores em um só lugar e obter condições especiais.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Audiência de Conciliação (Via Judicial)</h3>
      <p class="mb-4">Com a nova lei, você pode solicitar uma <strong>audiência de conciliação</strong> no Poder Judiciário ou em órgãos de defesa do consumidor. Nessa audiência:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Todos os credores são convocados</li>
        <li>Você apresenta sua situação financeira</li>
        <li>É elaborado um plano de pagamento único</li>
        <li>O plano respeita seu mínimo existencial</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Plano de Pagamento Judicial</h2>
      
      <p class="mb-4">Se não houver acordo na conciliação, você pode pedir ao juiz que imponha um <strong>plano de pagamento judicial</strong>:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Prazo máximo de <strong>5 anos</strong> para pagamento</li>
        <li>Prestações compatíveis com sua renda</li>
        <li>Preservação do mínimo existencial</li>
        <li>Revisão de cláusulas abusivas nos contratos</li>
        <li>Suspensão de cobranças durante a vigência do plano</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Proteções Legais do Consumidor</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Assédio de Cobrança</h3>
      <p class="mb-4">A lei proíbe práticas abusivas de cobrança, como:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Ligações excessivas (várias vezes ao dia)</li>
        <li>Ligações em horários impróprios (antes das 8h ou após as 20h)</li>
        <li>Ameaças ou constrangimentos</li>
        <li>Exposição a terceiros (ligar no trabalho, vizinhos)</li>
        <li>Mensagens ofensivas ou humilhantes</li>
      </ul>
      
      <p class="mb-4">Se você está sofrendo assédio de cobrança, pode denunciar ao Procon e buscar indenização por danos morais.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Nome Negativado</h3>
      <p class="mb-4">A negativação deve ser comunicada previamente (você tem direito de saber antes de ser negativado). Após quitar a dívida, seu nome deve ser limpo em até <strong>5 dias úteis</strong>.</p>

      <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-10 text-center">
        <h3 class="text-2xl font-bold text-foreground mb-3">Está Superendividado?</h3>
        <p class="text-muted-foreground mb-6">Nossos advogados especializados podem analisar sua situação, identificar cláusulas abusivas em seus contratos e ajudar na negociação das suas dívidas.</p>
        <a href="/" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Consulta Gratuita
        </a>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">O Papel do Advogado no Superendividamento</h2>
      
      <p class="mb-4">Um advogado especializado pode ajudar em várias frentes:</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Análise de Cláusulas Abusivas</h3>
      <p class="mb-4">Muitos contratos de crédito contêm cláusulas abusivas que podem ser anuladas, como:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Juros acima do permitido</li>
        <li>Capitalização indevida</li>
        <li>Taxas não informadas</li>
        <li>Venda casada de seguros</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Representação em Audiências</h3>
      <p class="mb-4">O advogado pode representá-lo nas audiências de conciliação e negociação, garantindo que seus direitos sejam respeitados e que você não aceite acordos desfavoráveis.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Revisão de Contratos</h3>
      <p class="mb-4">É possível pedir judicialmente a revisão de contratos com cláusulas abusivas, reduzindo significativamente o valor das dívidas.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Perguntas Frequentes</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A lei perdoa minhas dívidas?</h3>
          <p class="text-muted-foreground">Não. A lei cria mecanismos para que você pague suas dívidas de forma organizada, mas não há perdão ou anistia.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Posso perder meus bens?</h3>
          <p class="text-muted-foreground">Bens de família (onde você mora) são protegidos. Outros bens podem ser penhorados dependendo do tipo de dívida.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Quanto tempo leva o processo?</h3>
          <p class="text-muted-foreground">A audiência de conciliação pode ser marcada em semanas. O plano de pagamento pode durar até 5 anos.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Preciso de advogado?</h3>
          <p class="text-muted-foreground">Não é obrigatório para a conciliação, mas é altamente recomendado para garantir seus direitos e identificar abusos.</p>
        </div>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Conclusão</h2>
      
      <p class="mb-4">O superendividamento é uma situação difícil, mas não é sem saída. Com a Lei 14.181/2021, você tem ferramentas legais para reorganizar suas finanças e voltar a ter uma vida digna. O mais importante é agir – quanto mais tempo você esperar, mais os juros crescem e mais difícil fica a situação.</p>
      
      <p class="mb-4">Se você está nessa situação, não tenha vergonha de buscar ajuda. Muitos brasileiros passam pelo mesmo problema. Entre em contato conosco para uma análise gratuita da sua situação e orientação sobre os melhores caminhos para sair do vermelho.</p>
    `
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getAllPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

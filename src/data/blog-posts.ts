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
  },
  {
    id: "cobranca-indevida-mensalidade-escolar",
    slug: "cobranca-indevida-mensalidade-escolar",
    title: "Cobrança Indevida em Mensalidades Escolares: O Que Fazer Quando a Escola Cobra Além do Devido",
    metaTitle: "Mensalidade Escolar Indevida: Como Reclamar e Ter Reembolso 2026",
    metaDescription: "Descubra como identificar cobranças indevidas em mensalidades escolares, seus direitos pelo CDC e como obter reembolso. Guia completo com passo a passo.",
    keywords: ["mensalidade escolar indevida", "cobrança ilegal escola", "taxa abusiva escola", "reembolso mensalidade", "direito consumidor escola", "matrícula taxa ilegal", "reajuste abusivo escola"],
    category: "Consumidor",
    excerpt: "Sua escola está cobrando taxas que você considera abusivas? Conheça seus direitos e saiba como identificar cobranças indevidas em mensalidades escolares.",
    author: "Equipe Advogado Já",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    readingTime: 12,
    content: `
      <p class="text-lg text-muted-foreground mb-8">A educação dos filhos é uma prioridade para qualquer família brasileira, mas infelizmente muitas escolas particulares <strong>cobram taxas abusivas ou indevidas</strong> que vão além do permitido por lei. Se você está enfrentando esse problema, saiba que o <strong>Código de Defesa do Consumidor</strong> e leis específicas protegem seu direito a uma cobrança justa e transparente.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">O Que São Cobranças Indevidas em Escolas</h2>
      
      <p class="mb-4">Cobranças indevidas são valores exigidos pelas instituições de ensino que <strong>não têm respaldo legal</strong> ou que são praticadas de forma abusiva. A Lei nº 9.870/1999 regulamenta as mensalidades escolares e estabelece regras claras sobre o que pode ou não ser cobrado.</p>
      
      <p class="mb-4">Exemplos comuns de cobranças indevidas incluem:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Taxa de matrícula</strong> superior ao valor da mensalidade</li>
        <li><strong>Material didático obrigatório</strong> sem opção de compra externa</li>
        <li><strong>Reajustes acima da inflação</strong> sem justificativa</li>
        <li><strong>Multas abusivas</strong> por atraso no pagamento</li>
        <li><strong>Taxas para eventos obrigatórios</strong> como festas e passeios</li>
        <li><strong>Cobrança de apostilas</strong> em duplicidade com mensalidade</li>
        <li><strong>Taxa de rematrícula</strong> antecipada ou condicionada</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">O Que Diz a Lei</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Lei nº 9.870/1999 - Lei das Mensalidades Escolares</h3>
      <p class="mb-4">Esta lei é a principal norma que regula as mensalidades escolares no Brasil. Entre seus pontos principais:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>A <strong>taxa de matrícula não pode exceder o valor da mensalidade</strong></li>
        <li>É vedada a <strong>suspensão de provas</strong> por inadimplência</li>
        <li>A escola deve apresentar <strong>planilha de custos</strong> detalhada</li>
        <li>Reajustes devem ter <strong>divulgação prévia de 45 dias</strong></li>
        <li>É proibido <strong>reter documentos</strong> por falta de pagamento</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Código de Defesa do Consumidor</h3>
      <p class="mb-4">O CDC se aplica integralmente às relações entre escolas e famílias. Destacam-se:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Art. 39:</strong> Veda práticas abusivas como venda casada</li>
        <li><strong>Art. 42:</strong> Proíbe cobranças vexatórias ou constrangedoras</li>
        <li><strong>Art. 51:</strong> Considera nulas cláusulas contratuais abusivas</li>
        <li><strong>Art. 52:</strong> Exige informação clara sobre todos os custos</li>
      </ul>

      <div class="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p class="font-semibold text-primary mb-2">⚠️ Atenção!</p>
        <p class="text-foreground">A escola <strong>não pode impedir</strong> que seu filho faça provas ou receba documentos (histórico, declarações, certificado) por motivo de inadimplência. Esta prática é ilegal e pode gerar indenização por danos morais.</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Cobranças Que Você Pode Questionar</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">1. Venda Casada de Material Didático</h3>
      <p class="mb-4">A escola não pode <strong>obrigar a compra de material didático exclusivamente em seu estabelecimento</strong>. Você tem o direito de adquirir livros e materiais onde preferir. Forçar a compra na escola configura venda casada, prática proibida pelo art. 39 do CDC.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">2. Taxa de Matrícula Acima da Mensalidade</h3>
      <p class="mb-4">A Lei 9.870/1999 é clara: a matrícula não pode custar mais que a mensalidade. Se a escola cobra R$ 2.000 de matrícula e a mensalidade é R$ 1.500, a cobrança é ilegal.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">3. Reajustes Sem Transparência</h3>
      <p class="mb-4">A escola deve apresentar <strong>planilha detalhada</strong> justificando o reajuste e divulgá-lo com antecedência mínima de 45 dias. Reajustes acima da inflação precisam de justificativa clara (novos investimentos, ampliação de serviços, etc.).</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">4. Taxas de Atividades Obrigatórias</h3>
      <p class="mb-4">Se a escola inclui atividades como passeios, viagens ou eventos no currículo escolar, <strong>não pode cobrar à parte</strong> por eles. Essas atividades devem estar incluídas na mensalidade.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Como Proceder: Passo a Passo</h2>
      
      <ol class="list-decimal pl-6 mb-6 space-y-4">
        <li>
          <strong>Documente tudo:</strong> Guarde todos os boletos, recibos, contratos e comunicados da escola. Print conversas e e-mails.
        </li>
        <li>
          <strong>Analise o contrato:</strong> Verifique se as cobranças estão previstas no contrato e se as cláusulas são legais.
        </li>
        <li>
          <strong>Notifique a escola:</strong> Envie uma reclamação formal por escrito (e-mail com comprovante de leitura ou carta registrada).
        </li>
        <li>
          <strong>Procure o PROCON:</strong> Se a escola não resolver, registre reclamação no PROCON de sua cidade.
        </li>
        <li>
          <strong>Busque apoio jurídico:</strong> Em casos mais complexos ou de valores altos, consulte um advogado especializado.
        </li>
      </ol>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Documentos Necessários para Reclamação</h2>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Contrato de prestação de serviços educacionais</li>
        <li>Boletos e comprovantes de pagamento</li>
        <li>Comunicados da escola sobre reajustes ou taxas</li>
        <li>E-mails e mensagens trocadas com a instituição</li>
        <li>Planilha de custos (se fornecida)</li>
        <li>Comprovante de matrícula e documentos do aluno</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Perguntas Frequentes</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A escola pode negar rematrícula por dívida do ano anterior?</h3>
          <p class="text-muted-foreground">Sim, a escola pode recusar a rematrícula se houver débitos pendentes. No entanto, não pode reter documentos ou impedir a transferência para outra instituição.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Posso pedir reembolso de taxas pagas indevidamente?</h3>
          <p class="text-muted-foreground">Sim. Se você pagou uma taxa indevida, tem direito ao reembolso. Em alguns casos, pode pleitear a devolução em dobro, conforme o art. 42 do CDC.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A escola pode aumentar a mensalidade no meio do ano?</h3>
          <p class="text-muted-foreground">Em regra, não. O reajuste deve ser anual e informado antes da rematrícula. Aumentos no meio do ano só são permitidos se previstos contratualmente e com justificativa.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Meu filho pode ser impedido de fazer provas por atraso na mensalidade?</h3>
          <p class="text-muted-foreground">Não! Essa prática é expressamente proibida pela Lei 9.870/1999 e pode gerar ação judicial por danos morais.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A escola pode cobrar taxa de apostila se já está inclusa na mensalidade?</h3>
          <p class="text-muted-foreground">Não. Cobrar duas vezes pelo mesmo serviço configura enriquecimento ilícito e você pode exigir a devolução.</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-10 text-center">
        <h3 class="text-2xl font-bold text-foreground mb-3">Está Enfrentando Cobranças Abusivas da Escola?</h3>
        <p class="text-muted-foreground mb-6">Nossa equipe de advogados especializados em Direito do Consumidor pode analisar seu caso gratuitamente e orientar sobre como recuperar valores pagos indevidamente.</p>
        <a href="/" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Falar com Advogado Agora
        </a>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Conclusão</h2>
      
      <p class="mb-4">A educação é um direito fundamental, mas isso não significa que as escolas podem cobrar o que quiserem. Como consumidor, você tem ferramentas legais para combater abusos e exigir transparência nas cobranças. Não aceite taxas indevidas – questione, documente e busque seus direitos.</p>
      
      <p class="mb-4">Se você está enfrentando problemas com cobranças escolares, não hesite em buscar orientação jurídica. A análise do contrato e das cobranças por um profissional pode revelar irregularidades que você nem imaginava.</p>
    `
  },
  {
    id: "plano-saude-negou-cirurgia-liminar",
    slug: "plano-saude-negou-cirurgia-liminar",
    title: "Planos de Saúde e Negativas de Cirurgias: Como Obter uma Liminar para Garantir Seu Direito",
    metaTitle: "Plano de Saúde Negou Cirurgia? Saiba Como Conseguir Liminar 2026",
    metaDescription: "Seu plano de saúde negou uma cirurgia necessária? Aprenda como obter uma liminar judicial para garantir seu tratamento. Guia completo com prazos e documentos.",
    keywords: ["plano saúde negou cirurgia", "liminar plano de saúde", "negativa cirurgia", "tutela urgência saúde", "mandado liminar plano", "cobertura negada cirurgia", "ANS cobertura obrigatória"],
    category: "Consumidor",
    excerpt: "Seu plano de saúde negou autorização para uma cirurgia urgente? Saiba como a Justiça pode garantir seu direito ao tratamento através de uma liminar.",
    author: "Equipe Advogado Já",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    readingTime: 14,
    content: `
      <p class="text-lg text-muted-foreground mb-8">Poucas situações são tão angustiantes quanto ter uma <strong>cirurgia negada pelo plano de saúde</strong> quando você mais precisa. A boa notícia é que, na maioria dos casos, essas negativas são <strong>ilegais</strong> e podem ser revertidas rapidamente pela Justiça através de uma <strong>liminar</strong>. Neste guia, explicamos passo a passo como garantir seu direito ao tratamento.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Por Que Planos de Saúde Negam Cirurgias</h2>
      
      <p class="mb-4">As operadoras de planos de saúde frequentemente utilizam justificativas padrão para negar procedimentos. As mais comuns são:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>"Procedimento não coberto pelo rol da ANS"</strong></li>
        <li><strong>"Falta de autorização prévia"</strong></li>
        <li><strong>"Carência não cumprida"</strong></li>
        <li><strong>"Tratamento experimental ou off-label"</strong></li>
        <li><strong>"Rede credenciada indisponível"</strong></li>
        <li><strong>"Doença preexistente"</strong></li>
      </ul>
      
      <p class="mb-4">Porém, a jurisprudência brasileira tem entendido que <strong>a maioria dessas justificativas é abusiva</strong>, especialmente quando há prescrição médica atestando a necessidade do procedimento.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">O Que Diz a Lei</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Lei 9.656/1998 - Lei dos Planos de Saúde</h3>
      <p class="mb-4">Esta lei estabelece as regras básicas para operação de planos de saúde no Brasil e determina coberturas mínimas obrigatórias.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Rol de Procedimentos da ANS</h3>
      <p class="mb-4">A ANS (Agência Nacional de Saúde Suplementar) define uma lista mínima de procedimentos que <strong>todo plano é obrigado a cobrir</strong>. Importante: desde a Lei 14.454/2022, o rol da ANS passou a ser exemplificativo, não taxativo, ou seja, procedimentos fora do rol podem ser exigidos.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Código de Defesa do Consumidor</h3>
      <p class="mb-4">O CDC se aplica integralmente aos planos de saúde. Negativas injustificadas configuram prática abusiva (art. 39) e podem gerar indenização por danos morais e materiais.</p>

      <div class="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p class="font-semibold text-primary mb-2">🏥 Decisão Importante do STJ</p>
        <p class="text-foreground">O Superior Tribunal de Justiça tem jurisprudência consolidada de que <strong>a negativa de cobertura de cirurgia prescrita pelo médico é abusiva</strong>, especialmente em casos de urgência ou emergência.</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">O Que É uma Liminar (Tutela de Urgência)</h2>
      
      <p class="mb-4">A <strong>liminar</strong>, tecnicamente chamada de <strong>tutela de urgência</strong>, é uma decisão judicial rápida que obriga o plano de saúde a autorizar o procedimento <strong>antes mesmo do término do processo</strong>.</p>
      
      <p class="mb-4">Para obter uma liminar, você precisa demonstrar:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Probabilidade do direito:</strong> Mostrar que você tem razão (prescrição médica + negativa injustificada)</li>
        <li><strong>Perigo de dano:</strong> Demonstrar que a demora pode causar agravamento da doença ou risco à vida</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Quanto Tempo Demora?</h3>
      <p class="mb-4">Em casos urgentes, o juiz pode conceder a liminar <strong>em questão de horas</strong>. Há plantões judiciais 24 horas para casos de vida ou morte. Em situações menos urgentes, a decisão costuma sair em <strong>24 a 72 horas</strong>.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Passo a Passo para Obter a Liminar</h2>
      
      <ol class="list-decimal pl-6 mb-6 space-y-4">
        <li>
          <strong>Obtenha a negativa por escrito:</strong> Solicite ao plano a negativa formal, com o motivo da recusa. Se não fornecerem, protocole reclamação na ANS.
        </li>
        <li>
          <strong>Reúna a documentação médica:</strong> Laudo detalhado do médico explicando a necessidade e urgência do procedimento.
        </li>
        <li>
          <strong>Procure um advogado:</strong> Em casos urgentes, busque um advogado especializado em Direito da Saúde ou defensorias públicas.
        </li>
        <li>
          <strong>Ajuize a ação:</strong> O advogado entrará com ação judicial solicitando tutela de urgência.
        </li>
        <li>
          <strong>Aguarde a decisão:</strong> Em casos de extrema urgência, é possível obter liminar no mesmo dia.
        </li>
      </ol>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Documentos Necessários</h2>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Carteirinha do plano de saúde</strong></li>
        <li><strong>Contrato do plano</strong> (se disponível)</li>
        <li><strong>Negativa formal</strong> do plano de saúde</li>
        <li><strong>Prescrição médica detalhada</strong> com CID e justificativa</li>
        <li><strong>Laudos e exames</strong> que comprovem a necessidade</li>
        <li><strong>Relatório médico</strong> explicando a urgência</li>
        <li><strong>Comprovantes de pagamento</strong> das mensalidades</li>
        <li><strong>Documentos pessoais</strong> (RG, CPF, comprovante de residência)</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Casos de Urgência e Emergência</h2>
      
      <p class="mb-4">Em situações de <strong>urgência ou emergência</strong>, a lei é ainda mais favorável ao paciente:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>A carência <strong>não pode ser exigida</strong></li>
        <li>Atendimento é <strong>obrigatório</strong> nas primeiras 12 horas</li>
        <li>Se não houver rede credenciada disponível, o plano deve <strong>reembolsar atendimento particular</strong></li>
        <li>Plantões judiciais funcionam <strong>24 horas</strong> para esses casos</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Perguntas Frequentes</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">O plano negou alegando que não está no rol da ANS. Posso recorrer?</h3>
          <p class="text-muted-foreground">Sim! Desde 2022, o rol da ANS é exemplificativo. Se há prescrição médica e comprovação de eficácia, o procedimento deve ser coberto mesmo que não conste no rol.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Quanto custa entrar com ação contra o plano?</h3>
          <p class="text-muted-foreground">Se o valor do procedimento for até 60 salários mínimos, você pode utilizar o Juizado Especial Cível, sem custos iniciais. Também há a opção da Defensoria Pública para quem não pode pagar advogado.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Se eu conseguir a liminar, o plano pode cancelar meu contrato?</h3>
          <p class="text-muted-foreground">Não. A rescisão do contrato em retaliação por ação judicial é ilegal e pode gerar indenização adicional.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Posso pedir indenização por danos morais?</h3>
          <p class="text-muted-foreground">Sim, especialmente se a negativa causou agravamento da doença, sofrimento intenso ou se houve tratamento desrespeitoso por parte da operadora.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">E se o plano descumprir a liminar?</h3>
          <p class="text-muted-foreground">O plano pode ser multado em valores diários (multa astreinte), e seus representantes podem até responder criminalmente por desobediência.</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-10 text-center">
        <h3 class="text-2xl font-bold text-foreground mb-3">Plano de Saúde Negou Sua Cirurgia?</h3>
        <p class="text-muted-foreground mb-6">Nossa equipe de advogados especializados pode analisar seu caso gratuitamente e orientar sobre como obter uma liminar rapidamente.</p>
        <a href="/" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Falar com Advogado Agora
        </a>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Conclusão</h2>
      
      <p class="mb-4">Ter uma cirurgia negada pelo plano de saúde é uma situação angustiante, mas você não precisa aceitar. A Justiça brasileira tem sido consistente em reverter negativas abusivas, e as liminares podem ser obtidas em questão de horas em casos urgentes.</p>
      
      <p class="mb-4">Se você está passando por essa situação, não perca tempo. Reúna sua documentação, busque orientação jurídica e lute pelo seu direito à saúde. A lei está do seu lado.</p>
    `
  },
  {
    id: "produto-defeito-troca-devolucao",
    slug: "produto-defeito-troca-devolucao",
    title: "Produtos com Defeito e o Direito à Troca ou Devolução: Como Proceder Legalmente",
    metaTitle: "Produto com Defeito: Seus Direitos de Troca pelo CDC 2026",
    metaDescription: "Comprou produto com defeito? Conheça seus direitos de troca, devolução e reembolso pelo Código de Defesa do Consumidor. Guia completo com prazos.",
    keywords: ["produto com defeito", "direito troca produto", "devolução produto defeituoso", "CDC troca", "garantia produto", "prazo reclamação defeito", "reembolso produto"],
    category: "Consumidor",
    excerpt: "Comprou um produto e ele veio com defeito? Saiba exatamente quais são seus direitos e como proceder para garantir a troca, conserto ou devolução do dinheiro.",
    author: "Equipe Advogado Já",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    readingTime: 11,
    content: `
      <p class="text-lg text-muted-foreground mb-8">Comprar um produto e descobrir que ele está com defeito é uma situação frustrante e muito comum. Felizmente, o <strong>Código de Defesa do Consumidor (CDC)</strong> garante direitos claros para essas situações. Neste guia, explicamos tudo o que você precisa saber para resolver seu problema de forma rápida e eficiente.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Vício do Produto: O Que É e Quais os Tipos</h2>
      
      <p class="mb-4">O CDC diferencia dois tipos de problemas em produtos:</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Vício Aparente</h3>
      <p class="mb-4">É o defeito que você consegue identificar <strong>facilmente</strong> assim que recebe o produto. Exemplos: riscos, amassados, cor diferente do anunciado, peças faltando.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Vício Oculto</h3>
      <p class="mb-4">É o defeito que <strong>só aparece com o uso</strong>. Exemplos: defeito de fabricação que surge após semanas, problema elétrico que se manifesta depois, peça que quebra antes do tempo.</p>
      
      <p class="mb-4">Esta distinção é importante porque afeta os <strong>prazos para reclamação</strong>.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Prazos para Reclamar</h2>
      
      <ul class="list-disc pl-6 mb-6 space-y-3">
        <li><strong>Produtos não duráveis</strong> (alimentos, cosméticos): 30 dias</li>
        <li><strong>Produtos duráveis</strong> (eletrodomésticos, móveis, eletrônicos): 90 dias</li>
      </ul>
      
      <p class="mb-4">Para <strong>vício aparente</strong>, o prazo conta a partir da <strong>entrega do produto</strong>.</p>
      <p class="mb-4">Para <strong>vício oculto</strong>, o prazo conta a partir do <strong>momento em que o defeito é descoberto</strong>.</p>

      <div class="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p class="font-semibold text-primary mb-2">💡 Dica Importante</p>
        <p class="text-foreground">Guarde sempre a nota fiscal e a embalagem do produto. Esses itens não são obrigatórios para reclamar, mas facilitam muito o processo.</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Seus Direitos: As 3 Opções do Consumidor</h2>
      
      <p class="mb-4">Quando você reclama de um produto com defeito, o fornecedor tem <strong>30 dias para resolver o problema</strong>. Se não resolver nesse prazo, você pode escolher entre:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-3">
        <li><strong>Substituição por produto novo</strong> igual ou similar</li>
        <li><strong>Restituição do valor pago</strong>, com correção monetária</li>
        <li><strong>Abatimento proporcional do preço</strong></li>
      </ol>
      
      <p class="mb-4">A <strong>escolha é sua</strong>, não do fornecedor. Não aceite que a loja imponha uma solução que não lhe interessa.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Quando Você Pode Exigir Solução Imediata</h2>
      
      <p class="mb-4">Há situações em que você <strong>não precisa esperar os 30 dias</strong> e pode exigir troca ou reembolso imediatamente:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Quando a <strong>substituição de peças compromete a qualidade</strong> do produto</li>
        <li>Quando o defeito <strong>diminui substancialmente o valor</strong> do bem</li>
        <li>Quando se trata de <strong>produto essencial</strong> (ex: geladeira, fogão)</li>
        <li>Quando é <strong>impossível</strong> o reparo</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Garantia Legal vs Garantia Contratual</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Garantia Legal</h3>
      <p class="mb-4">É a garantia <strong>prevista em lei</strong> (30 ou 90 dias). Não precisa de contrato, certificado ou qualquer documento. Todo produto tem essa garantia automaticamente.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Garantia Contratual</h3>
      <p class="mb-4">É a garantia <strong>oferecida pelo fabricante ou loja</strong>, geralmente de 1 ano ou mais. Ela <strong>soma-se</strong> à garantia legal. Se a loja oferece 1 ano de garantia, você tem 1 ano + 90 dias (para produtos duráveis).</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Como Proceder: Passo a Passo</h2>
      
      <ol class="list-decimal pl-6 mb-6 space-y-4">
        <li>
          <strong>Documente o problema:</strong> Fotografe e filme o defeito. Guarde todas as evidências.
        </li>
        <li>
          <strong>Entre em contato com a loja/fabricante:</strong> Faça a reclamação por escrito (e-mail, chat com protocolo). Anote datas e números de protocolo.
        </li>
        <li>
          <strong>Aguarde os 30 dias:</strong> A empresa tem esse prazo para resolver, exceto em produtos essenciais.
        </li>
        <li>
          <strong>Exerça seu direito:</strong> Após o prazo, escolha entre troca, devolução ou abatimento.
        </li>
        <li>
          <strong>Se a empresa recusar:</strong> Procure o PROCON ou Juizado Especial Cível.
        </li>
      </ol>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">O Que a Loja Não Pode Fazer</h2>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Exigir embalagem original</strong> para aceitar a troca (não é obrigatória)</li>
        <li><strong>Cobrar frete</strong> pela devolução de produto com defeito</li>
        <li><strong>Oferecer apenas crédito</strong> quando você quer dinheiro de volta</li>
        <li><strong>Demorar mais de 30 dias</strong> para resolver (em regra)</li>
        <li><strong>Enviar para assistência técnica</strong> repetidamente sem resolver</li>
        <li><strong>Recusar responsabilidade</strong> alegando culpa do fabricante</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Perguntas Frequentes</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Perdi a nota fiscal. Perdi meus direitos?</h3>
          <p class="text-muted-foreground">Não. A nota fiscal facilita, mas você pode provar a compra com extrato de cartão, e-mail de confirmação, ou outros documentos.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A loja quer consertar, mas eu quero trocar. Posso exigir?</h3>
          <p class="text-muted-foreground">Nos primeiros 30 dias, a loja tem o direito de tentar o conserto. Após esse prazo sem solução, a escolha é sua.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Comprei pela internet. O prazo é diferente?</h3>
          <p class="text-muted-foreground">Para defeitos, os prazos são os mesmos. Mas em compras online você tem o adicional do arrependimento (7 dias sem justificativa).</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A garantia já venceu, mas o produto durou pouco. Tenho direito?</h3>
          <p class="text-muted-foreground">Depende. Se a vida útil esperada do produto é muito maior que o tempo que durou, pode haver vício oculto. Consulte um advogado.</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-10 text-center">
        <h3 class="text-2xl font-bold text-foreground mb-3">Problema com Produto Defeituoso?</h3>
        <p class="text-muted-foreground mb-6">Nossa equipe de advogados especializados pode analisar seu caso gratuitamente e orientar sobre como garantir seus direitos.</p>
        <a href="/" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Falar com Advogado Agora
        </a>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Conclusão</h2>
      
      <p class="mb-4">O CDC é uma ferramenta poderosa para proteger você contra produtos defeituosos. Conhecer seus direitos é o primeiro passo para não ser lesado. Lembre-se: documente tudo, respeite os prazos e não aceite menos do que a lei lhe garante.</p>
      
      <p class="mb-4">Se a empresa se recusar a resolver seu problema, não hesite em buscar o PROCON ou orientação jurídica. A Justiça tem sido favorável aos consumidores na grande maioria dos casos.</p>
    `
  },
  {
    id: "acoes-bancos-tarifas-abusivas",
    slug: "acoes-bancos-tarifas-abusivas",
    title: "Ações Contra Bancos: Contestando Tarifas e Encargos Abusivos no Seu Financiamento",
    metaTitle: "Tarifas Bancárias Abusivas: Como Contestar e Reaver Seu Dinheiro 2026",
    metaDescription: "Descubra como identificar tarifas e juros abusivos em financiamentos bancários e como entrar com ação para reaver valores pagos indevidamente.",
    keywords: ["tarifas bancárias abusivas", "juros abusivos banco", "ação contra banco", "encargos indevidos", "revisional bancário", "financiamento abusivo", "cobrança indevida banco"],
    category: "Consumidor",
    excerpt: "Seu financiamento tem tarifas que você nem conhece? Saiba como identificar cobranças abusivas e o que fazer para contestá-las judicialmente.",
    author: "Equipe Advogado Já",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    readingTime: 13,
    content: `
      <p class="text-lg text-muted-foreground mb-8">Você já analisou detalhadamente as tarifas do seu financiamento bancário? Muitos brasileiros pagam <strong>encargos abusivos sem saber</strong>, seja em financiamentos de veículos, empréstimos pessoais ou outros contratos bancários. Neste guia, explicamos como identificar essas cobranças e como agir para recuperar valores pagos indevidamente.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Tarifas Bancárias: O Que Pode e O Que Não Pode Ser Cobrado</h2>
      
      <p class="mb-4">O Banco Central e a legislação brasileira estabelecem regras claras sobre o que os bancos podem cobrar. Conheça as principais tarifas e sua legalidade:</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Tarifas Geralmente Consideradas Abusivas</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Tarifa de Abertura de Crédito (TAC)</strong> - Em regra, ilegal desde 2008</li>
        <li><strong>Tarifa de Emissão de Carnê (TEC)</strong> - Geralmente abusiva</li>
        <li><strong>Tarifa de Liquidação Antecipada</strong> - Proibida desde 2007</li>
        <li><strong>Ressarcimento de Serviços Prestados</strong> - Na maioria dos casos, abusiva</li>
        <li><strong>Tarifa de Gravame Eletrônico</strong> - Discutível, depende do caso</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Tarifas Permitidas (Quando Informadas e Comprovadas)</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Tarifa de Cadastro</strong> - Permitida, desde que cobrada uma única vez</li>
        <li><strong>IOF</strong> - Imposto federal, legalmente devido</li>
        <li><strong>Seguros</strong> - Permitidos SE opcional e com clara autorização</li>
        <li><strong>Tarifa de Avaliação do Bem</strong> - Permitida em financiamentos com garantia</li>
      </ul>

      <div class="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p class="font-semibold text-primary mb-2">⚠️ Atenção: Venda Casada</p>
        <p class="text-foreground">Muitos bancos condicionam a aprovação do financiamento à contratação de <strong>seguros, consórcios ou cartões de crédito</strong>. Esta prática é <strong>venda casada</strong>, proibida pelo art. 39 do CDC.</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Juros Abusivos: Como Identificar</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Taxa de Juros Acima da Média de Mercado</h3>
      <p class="mb-4">O Banco Central divulga mensalmente as taxas médias praticadas. Se a sua taxa é <strong>muito superior à média</strong>, há indícios de abusividade. A jurisprudência considera abusiva a taxa 1,5 a 2 vezes maior que a média.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Capitalização de Juros</h3>
      <p class="mb-4">A cobrança de "juros sobre juros" (capitalização) é permitida em alguns casos, mas deve estar <strong>expressamente prevista no contrato</strong> e a diferença entre taxas mensal e anual deve ser proporcional.</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Comissão de Permanência</h3>
      <p class="mb-4">Em caso de atraso, o banco pode cobrar comissão de permanência OU juros de mora + multa, <strong>nunca os dois cumulativamente</strong>. Isso é frequentemente violado.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Ação Revisional de Contrato Bancário</h2>
      
      <p class="mb-4">A <strong>ação revisional</strong> é o instrumento jurídico para questionar cláusulas abusivas em contratos bancários. Com ela, você pode:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Eliminar tarifas indevidas do contrato</li>
        <li>Reduzir juros abusivos à média de mercado</li>
        <li>Recalcular o saldo devedor</li>
        <li>Recuperar valores pagos a mais (em dinheiro ou compensação)</li>
        <li>Evitar busca e apreensão do veículo (em financiamentos)</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Como Proceder: Passo a Passo</h2>
      
      <ol class="list-decimal pl-6 mb-6 space-y-4">
        <li>
          <strong>Reúna toda documentação:</strong> Contrato, carnê, boletos pagos, demonstrativos de pagamento.
        </li>
        <li>
          <strong>Solicite o CET:</strong> O Custo Efetivo Total mostra todas as tarifas embutidas.
        </li>
        <li>
          <strong>Consulte um especialista:</strong> Um advogado ou contador pode fazer a análise técnica do contrato.
        </li>
        <li>
          <strong>Tente negociação extrajudicial:</strong> Alguns bancos preferem renegociar a ir para a Justiça.
        </li>
        <li>
          <strong>Ajuize a ação revisional:</strong> Se a negociação falhar, é hora de ir ao Judiciário.
        </li>
      </ol>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Documentos Necessários</h2>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Contrato de financiamento/empréstimo</li>
        <li>Carnê de pagamento ou demonstrativo de parcelas</li>
        <li>Comprovantes de pagamento realizados</li>
        <li>Extrato da evolução da dívida</li>
        <li>Tabela de amortização (se disponível)</li>
        <li>Documentos pessoais e comprovante de renda</li>
        <li>Documento do veículo (em caso de financiamento)</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Perguntas Frequentes</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Posso entrar com ação mesmo estando com parcelas em atraso?</h3>
          <p class="text-muted-foreground">Sim! Aliás, muitas ações revisionais são ajuizadas justamente para evitar a inadimplência ou a busca e apreensão do bem.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A ação revisional suspende a cobrança?</h3>
          <p class="text-muted-foreground">Não automaticamente. Para isso, é necessário requerer tutela de urgência, e o juiz pode condicionar a manutenção do contrato ao depósito de um valor incontroverso.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Quanto posso recuperar?</h3>
          <p class="text-muted-foreground">Depende do contrato. Em alguns casos, a economia pode chegar a 30-40% do valor total do financiamento. Uma análise técnica é essencial.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Já quitei o financiamento. Ainda posso questionar?</h3>
          <p class="text-muted-foreground">Sim, desde que dentro do prazo prescricional de 5 anos. Você pode pedir a devolução de valores pagos indevidamente.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">O banco pode colocar meu nome no SPC/SERASA durante a ação?</h3>
          <p class="text-muted-foreground">Depende. Se houver depósito judicial do valor incontroverso, o juiz pode determinar que o banco se abstenha de negativar.</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-10 text-center">
        <h3 class="text-2xl font-bold text-foreground mb-3">Suspeita de Cobranças Abusivas no Seu Financiamento?</h3>
        <p class="text-muted-foreground mb-6">Nossa equipe de advogados pode analisar seu contrato gratuitamente e identificar irregularidades que podem estar custando caro para você.</p>
        <a href="/" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Falar com Advogado Agora
        </a>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Conclusão</h2>
      
      <p class="mb-4">Muitos consumidores pagam tarifas e juros abusivos sem questionar, simplesmente porque desconhecem seus direitos. Se você tem um financiamento bancário, vale a pena analisar o contrato com atenção ou buscar um profissional para fazer essa análise.</p>
      
      <p class="mb-4">A ação revisional bancária pode representar uma economia significativa e, em muitos casos, é a diferença entre manter ou perder um bem financiado. Não deixe de buscar seus direitos.</p>
    `
  },
  {
    id: "garantias-compras-online-produto-errado",
    slug: "garantias-compras-online-produto-errado",
    title: "Direito do Consumidor em Compras Online: Garantias Quando o Produto Não Chega ou Vem Errado",
    metaTitle: "Compra Online Não Chegou ou Veio Errado? Seus Direitos 2026",
    metaDescription: "Produto comprado online não chegou, veio errado ou danificado? Conheça seus direitos pelo CDC e como resolver o problema rapidamente.",
    keywords: ["compra online não chegou", "produto errado internet", "direito consumidor online", "e-commerce problema", "arrependimento compra", "devolução compra online", "reembolso loja virtual"],
    category: "Consumidor",
    excerpt: "Comprou pela internet e o produto não chegou ou veio errado? Descubra seus direitos e como agir para resolver o problema rapidamente.",
    author: "Equipe Advogado Já",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    readingTime: 10,
    content: `
      <p class="text-lg text-muted-foreground mb-8">O comércio eletrônico facilita nossa vida, mas problemas acontecem: <strong>produtos que não chegam, itens errados, mercadorias danificadas</strong>. A boa notícia é que você tem direitos bem definidos pelo <strong>Código de Defesa do Consumidor</strong> e pelo Decreto do E-commerce. Neste guia, explicamos como resolver cada situação.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Produto Não Entregue: O Que Fazer</h2>
      
      <p class="mb-4">Quando o produto não chega no prazo prometido, você tem direito a:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Exigir a entrega imediata</strong> do produto</li>
        <li><strong>Aceitar outro produto equivalente</strong> (se for de seu interesse)</li>
        <li><strong>Cancelar a compra e receber reembolso integral</strong></li>
        <li><strong>Pleitear indenização</strong> por eventuais danos causados pelo atraso</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Passo a Passo</h3>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Verifique o status do pedido e o código de rastreamento</li>
        <li>Entre em contato com a loja por escrito (e-mail, chat com protocolo)</li>
        <li>Dê um prazo adicional razoável (3-5 dias úteis)</li>
        <li>Se não resolver, solicite formalmente o cancelamento e reembolso</li>
        <li>Persistindo o problema, procure o PROCON ou ajuíze ação</li>
      </ol>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Produto Veio Errado ou Diferente do Anunciado</h2>
      
      <p class="mb-4">Quando você recebe um produto diferente do que comprou, configura-se <strong>descumprimento contratual</strong>. Seus direitos:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Troca pelo produto correto</strong> (sem custos)</li>
        <li><strong>Cancelamento com reembolso total</strong> (incluindo frete)</li>
        <li><strong>Indenização</strong> se houver danos (ex: presente não entregue a tempo)</li>
      </ul>

      <div class="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p class="font-semibold text-primary mb-2">📦 Importante ao Receber</p>
        <p class="text-foreground">Sempre confira o produto no ato da entrega, se possível. Se notar diferenças ou danos, <strong>anote no recibo do entregador</strong> e fotografe tudo imediatamente.</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Produto Chegou Danificado</h2>
      
      <p class="mb-4">Se o produto chegou com avarias:</p>
      
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li><strong>Fotografe</strong> o produto e a embalagem imediatamente</li>
        <li>Se possível, <strong>recuse o recebimento</strong> anotando o motivo</li>
        <li>Entre em contato com a loja em até <strong>24 horas</strong></li>
        <li>Exija <strong>troca ou reembolso</strong> sem custos</li>
      </ol>
      
      <p class="mb-4">A responsabilidade pelo transporte é da loja, não sua. Mesmo que o dano tenha ocorrido durante o frete, quem deve resolver o problema é o vendedor.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">O Famoso Direito de Arrependimento (7 Dias)</h2>
      
      <p class="mb-4">Em compras online, você tem o direito de <strong>desistir da compra em até 7 dias corridos</strong> após o recebimento, sem precisar dar qualquer justificativa (art. 49 do CDC).</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Como Funciona</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>O prazo de 7 dias conta do <strong>recebimento do produto</strong></li>
        <li>Você <strong>não precisa justificar</strong> a desistência</li>
        <li>A loja deve reembolsar <strong>100% do valor</strong>, incluindo frete</li>
        <li>A devolução do produto deve ser às custas da <strong>loja</strong></li>
        <li>Você <strong>pode ter usado o produto</strong> para testar</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Obrigações das Lojas Online</h2>
      
      <p class="mb-4">O Decreto nº 7.962/2013 obriga as lojas virtuais a:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Informar CNPJ, endereço físico e contato</li>
        <li>Disponibilizar <strong>SAC adequado</strong></li>
        <li>Confirmar recebimento do pedido imediatamente</li>
        <li>Informar prazo de entrega antes da compra</li>
        <li>Oferecer <strong>meio fácil</strong> para exercer o arrependimento</li>
        <li>Manter registro de todas as comunicações por 5 anos</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Perguntas Frequentes</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A loja quer me dar crédito, mas eu quero dinheiro. Posso exigir?</h3>
          <p class="text-muted-foreground">Sim! Você tem direito ao reembolso em dinheiro. A loja não pode impor crédito na loja como única opção.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Comprei no marketplace (Mercado Livre, Amazon). Quem é responsável?</h3>
          <p class="text-muted-foreground">Tanto o vendedor quanto a plataforma podem ser responsabilizados. Você pode reclamar para qualquer um dos dois.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Comprei de vendedor pessoa física. Tenho os mesmos direitos?</h3>
          <p class="text-muted-foreground">Depende. Se o vendedor comercializa regularmente, aplica-se o CDC. Em vendas esporádicas entre particulares, não há relação de consumo.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A loja faliu. Como recebo meu dinheiro?</h3>
          <p class="text-muted-foreground">Se pagou com cartão de crédito, conteste a compra junto à operadora. Se pagou via Pix/boleto, terá que habilitar o crédito no processo de falência.</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-10 text-center">
        <h3 class="text-2xl font-bold text-foreground mb-3">Problema com Compra Online?</h3>
        <p class="text-muted-foreground mb-6">Nossa equipe de advogados especializados pode analisar seu caso gratuitamente e orientar sobre como resolver rapidamente.</p>
        <a href="/" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Falar com Advogado Agora
        </a>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Conclusão</h2>
      
      <p class="mb-4">Comprar pela internet é prático e seguro, desde que você conheça seus direitos. Problemas como atraso, produto errado ou danificado são cobertos pelo CDC e devem ser resolvidos pelo vendedor sem custos para você.</p>
      
      <p class="mb-4">Se a loja não resolver, não hesite em procurar o PROCON ou orientação jurídica. A Justiça tem sido muito favorável aos consumidores em casos de problemas com e-commerce.</p>
    `
  },
  {
    id: "problemas-telecomunicacoes-cobranca-indevida",
    slug: "problemas-telecomunicacoes-cobranca-indevida",
    title: "Reclamações em Serviços de Telecomunicações: Como Proceder com Falhas e Cobranças Indevidas",
    metaTitle: "Problemas com Internet, TV ou Telefone? Seus Direitos 2026",
    metaDescription: "Falhas constantes na internet ou cobranças indevidas de operadora? Conheça seus direitos e como reclamar formalmente para resolver o problema.",
    keywords: ["problema operadora internet", "cobrança indevida telefone", "ANATEL reclamação", "falha serviço telecomunicação", "cancelar operadora", "desconto falha internet", "direito consumidor telecom"],
    category: "Consumidor",
    excerpt: "Internet instável, cobranças indevidas, dificuldade para cancelar? Saiba como resolver problemas com operadoras de telefonia, internet e TV.",
    author: "Equipe Advogado Já",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    readingTime: 11,
    content: `
      <p class="text-lg text-muted-foreground mb-8">Problemas com operadoras de telefonia, internet e TV estão entre as <strong>reclamações mais frequentes</strong> dos consumidores brasileiros. Cobranças indevidas, serviço de baixa qualidade e dificuldade para cancelar são queixas constantes. Neste guia, explicamos seus direitos e como resolver cada situação.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Principais Problemas com Operadoras</h2>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Internet lenta ou instável</strong> (abaixo do contratado)</li>
        <li><strong>Cobranças indevidas</strong> ou não reconhecidas</li>
        <li><strong>Serviços não solicitados</strong> incluídos na fatura</li>
        <li><strong>Dificuldade para cancelar</strong> o contrato</li>
        <li><strong>Fidelização abusiva</strong></li>
        <li><strong>Propaganda enganosa</strong> sobre velocidade ou cobertura</li>
        <li><strong>Atendimento deficiente</strong></li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">O Que Diz a Lei</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Regulamentos da ANATEL</h3>
      <p class="mb-4">A ANATEL (Agência Nacional de Telecomunicações) estabelece regras que as operadoras devem seguir:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>A velocidade média de internet deve ser no mínimo <strong>80% do contratado</strong></li>
        <li>A velocidade instantânea mínima é de <strong>40% do contratado</strong></li>
        <li>O cancelamento deve ser realizado <strong>imediatamente</strong> quando solicitado</li>
        <li>A fidelização tem prazo máximo de <strong>12 meses</strong></li>
        <li>A operadora tem <strong>5 dias</strong> para responder reclamações</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Código de Defesa do Consumidor</h3>
      <p class="mb-4">O CDC também se aplica aos serviços de telecomunicações, garantindo:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Direito à informação clara sobre preços e condições</li>
        <li>Proteção contra práticas abusivas</li>
        <li>Direito ao desconto proporcional por falhas</li>
        <li>Indenização por danos causados</li>
      </ul>

      <div class="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p class="font-semibold text-primary mb-2">📱 Dica: Meça Sua Velocidade</p>
        <p class="text-foreground">Use a ferramenta oficial da ANATEL (<strong>Brasil Banda Larga</strong>) para medir sua velocidade de internet. Os resultados servem como prova em reclamações.</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Seus Direitos em Cada Situação</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Internet Abaixo do Contratado</h3>
      <p class="mb-4">Se a velocidade está constantemente abaixo dos limites mínimos (80% média, 40% instantânea), você pode:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Exigir reparo imediato</li>
        <li>Solicitar desconto proporcional na fatura</li>
        <li>Cancelar sem multa por descumprimento contratual</li>
        <li>Pedir indenização se houve prejuízos (ex: trabalho home office)</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Cobranças Indevidas</h3>
      <p class="mb-4">Ao identificar cobrança indevida:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Conteste imediatamente junto à operadora</li>
        <li>Guarde protocolos de atendimento</li>
        <li>Exija devolução em dobro (art. 42, CDC)</li>
        <li>Se negativado, há direito a danos morais</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Cancelamento</h3>
      <p class="mb-4">A operadora é obrigada a processar o cancelamento imediatamente. Não pode:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Exigir que você vá a uma loja física</li>
        <li>Transferir para vários atendentes</li>
        <li>Cobrar taxas de cancelamento (exceto multa de fidelidade válida)</li>
        <li>Continuar cobrando após o pedido</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Como Reclamar: Passo a Passo</h2>
      
      <ol class="list-decimal pl-6 mb-6 space-y-4">
        <li>
          <strong>Contate a operadora:</strong> Use o SAC e anote o protocolo. Dê prazo de 5 dias úteis para resposta.
        </li>
        <li>
          <strong>Registre na ANATEL:</strong> Se não resolver, abra reclamação em anatel.gov.br ou pelo app Anatel Consumidor.
        </li>
        <li>
          <strong>Procure o PROCON:</strong> Para questões de consumo em geral.
        </li>
        <li>
          <strong>Consumidor.gov.br:</strong> Plataforma oficial de reclamações com alto índice de resolução.
        </li>
        <li>
          <strong>Ação judicial:</strong> Se nada resolver, o Juizado Especial é uma opção sem custos.
        </li>
      </ol>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Documentos e Provas Importantes</h2>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Contrato e termos de adesão</li>
        <li>Faturas dos últimos meses</li>
        <li>Protocolos de atendimento</li>
        <li>Print screens de testes de velocidade</li>
        <li>Gravações de ligações (se permitido)</li>
        <li>E-mails e mensagens trocadas</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Perguntas Frequentes</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A operadora pode me cobrar multa se eu cancelar por falha no serviço?</h3>
          <p class="text-muted-foreground">Não! Se o cancelamento é motivado por descumprimento contratual da operadora (serviço ruim, cobranças indevidas), você está livre da multa de fidelização.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A operadora incluiu serviço que não pedi. O que fazer?</h3>
          <p class="text-muted-foreground">Exija o cancelamento imediato e a devolução em dobro dos valores cobrados. Esta prática é abusiva.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Quanto tempo a operadora tem para responder minha reclamação?</h3>
          <p class="text-muted-foreground">Na ANATEL, a operadora tem 5 dias úteis. No consumidor.gov.br, até 10 dias.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A internet fica lenta só à noite. Posso reclamar?</h3>
          <p class="text-muted-foreground">Sim! Faça testes em diferentes horários e registre. Se a média ficar abaixo de 80%, há descumprimento contratual.</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-10 text-center">
        <h3 class="text-2xl font-bold text-foreground mb-3">Problemas com Sua Operadora?</h3>
        <p class="text-muted-foreground mb-6">Nossa equipe pode analisar seu caso gratuitamente e orientar sobre como resolver e buscar indenização.</p>
        <a href="/" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Falar com Advogado Agora
        </a>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Conclusão</h2>
      
      <p class="mb-4">Problemas com telecomunicações são frustrantes, mas você tem canais eficazes para resolvê-los. A ANATEL tem poder de multar operadoras e obrigá-las a resolver problemas. Use os canais oficiais e, se necessário, busque a Justiça.</p>
      
      <p class="mb-4">Não aceite serviço de baixa qualidade ou cobranças indevidas. Documente tudo e exerça seus direitos.</p>
    `
  },
  {
    id: "recall-veiculos-indenizacao-consumidor",
    slug: "recall-veiculos-indenizacao-consumidor",
    title: "Ações Coletivas por Recall de Veículos: Como os Consumidores Podem Buscar Indenização",
    metaTitle: "Recall de Veículo: Seus Direitos e Como Pedir Indenização 2026",
    metaDescription: "Seu carro foi convocado para recall? Conheça seus direitos, como funciona o processo e quando você pode pedir indenização por danos.",
    keywords: ["recall veículo", "indenização recall carro", "ação coletiva automóvel", "defeito fabricação carro", "direito consumidor recall", "montadora recall", "reembolso recall"],
    category: "Consumidor",
    excerpt: "Seu veículo foi convocado para recall? Entenda seus direitos, obrigações da montadora e quando você pode buscar indenização por danos.",
    author: "Equipe Advogado Já",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    readingTime: 12,
    content: `
      <p class="text-lg text-muted-foreground mb-8">O <strong>recall</strong> é um chamamento do fabricante para corrigir defeitos que podem colocar em risco a segurança dos consumidores. Embora seja uma medida de proteção, muitos proprietários não sabem que podem ter direito a <strong>indenização</strong> quando sofrem prejuízos relacionados a esses defeitos. Neste guia, explicamos tudo sobre seus direitos.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">O Que É o Recall</h2>
      
      <p class="mb-4">O recall é a convocação feita pelo fabricante quando descobre um <strong>defeito de fabricação</strong> que pode comprometer a segurança do produto. No caso de veículos, pode envolver problemas com:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Airbags defeituosos</li>
        <li>Freios com falhas</li>
        <li>Vazamentos de combustível</li>
        <li>Problemas elétricos com risco de incêndio</li>
        <li>Falhas na direção</li>
        <li>Cintos de segurança com defeito</li>
        <li>Software com bugs críticos</li>
      </ul>
      
      <p class="mb-4">O recall é <strong>obrigatório</strong> quando o defeito pode afetar a segurança, e a montadora deve comunicar todos os proprietários e o PROCON.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Suas Obrigações e Direitos</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">O Que o Fabricante Deve Fazer</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Comunicar</strong> todos os proprietários por carta registrada</li>
        <li><strong>Publicar anúncios</strong> em jornais de grande circulação</li>
        <li><strong>Realizar o reparo gratuitamente</strong></li>
        <li><strong>Fornecer carro reserva</strong> se o reparo demorar mais de 24 horas</li>
        <li><strong>Cobrir custos de deslocamento</strong> até a concessionária, se necessário</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">O Que Você Pode Exigir</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Reparo imediato e gratuito</li>
        <li>Veículo reserva durante o reparo</li>
        <li>Reembolso de despesas relacionadas (táxi, guincho se não atendeu ao recall)</li>
        <li>Indenização por danos causados pelo defeito</li>
        <li>Em casos extremos, substituição do veículo</li>
      </ul>

      <div class="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p class="font-semibold text-primary mb-2">⚠️ Atenção!</p>
        <p class="text-foreground">Ignorar o recall pode trazer consequências: além do risco de acidente, você pode perder a garantia do veículo e ter dificuldades em receber indenização se ocorrer um sinistro.</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Quando Você Pode Pedir Indenização</h2>
      
      <p class="mb-4">Além do reparo gratuito, você pode buscar indenização quando:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-3">
        <li><strong>Sofreu acidente</strong> causado pelo defeito antes do recall</li>
        <li><strong>Teve prejuízos materiais</strong> (veículo ficou parado, perdeu compromisso)</li>
        <li><strong>Passou por constrangimento</strong> ou transtorno significativo</li>
        <li><strong>O veículo desvalorizou</strong> por causa do problema</li>
        <li><strong>A montadora demorou</strong> para fazer o reparo ou disponibilizar peças</li>
        <li><strong>Foi negativado</strong> por deixar de pagar parcelas durante problema</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Ações Coletivas: O Que São e Como Funcionam</h2>
      
      <p class="mb-4">As <strong>ações coletivas</strong> são processos judiciais que representam os interesses de um grupo de consumidores afetados pelo mesmo problema. São vantajosas porque:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Você não precisa entrar com ação individual</li>
        <li>Os custos são diluídos entre todos os beneficiados</li>
        <li>A decisão vale para todos os afetados</li>
        <li>Tem mais força para pressionar grandes empresas</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Como Participar</h3>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Verifique se existe ação coletiva sobre o recall do seu veículo</li>
        <li>Acompanhe notícias e sites do PROCON e associações de consumidores</li>
        <li>Guarde toda documentação do seu caso</li>
        <li>Quando houver decisão favorável, habilite-se para receber sua parte</li>
      </ol>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Como Verificar Se Seu Veículo Tem Recall</h2>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Site do PROCON:</strong> Consulta por marca e modelo</li>
        <li><strong>Site do fabricante:</strong> Geralmente há área de consulta por chassi</li>
        <li><strong>App do Detran:</strong> Alguns estados mostram pendências de recall</li>
        <li><strong>Senatran:</strong> Portal do Departamento Nacional de Trânsito</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Perguntas Frequentes</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">O recall tem prazo para ser feito?</h3>
          <p class="text-muted-foreground">A obrigação do fabricante é permanente. Mas você deve atender ao chamado assim que possível para não correr riscos.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Comprei o carro usado e não fui avisado do recall. E agora?</h3>
          <p class="text-muted-foreground">Você pode cobrar do vendedor (se for empresa) ou ir direto à montadora. O direito ao reparo gratuito continua válido.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A concessionária diz que não tem peças. O que fazer?</h3>
          <p class="text-muted-foreground">A montadora é obrigada a disponibilizar peças. Se houver demora, exija carro reserva e, se sofrer prejuízos, documente para pedir indenização.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Posso recusar o recall?</h3>
          <p class="text-muted-foreground">Você pode, mas assumirá os riscos. Se ocorrer acidente, pode haver dificuldade em responsabilizar a montadora.</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-10 text-center">
        <h3 class="text-2xl font-bold text-foreground mb-3">Teve Prejuízos com Recall?</h3>
        <p class="text-muted-foreground mb-6">Nossa equipe pode analisar seu caso gratuitamente e verificar se você tem direito a indenização.</p>
        <a href="/" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Falar com Advogado Agora
        </a>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Conclusão</h2>
      
      <p class="mb-4">O recall é uma medida de segurança importante que protege você e sua família. Atenda sempre ao chamado do fabricante e guarde toda a documentação. Se você sofreu prejuízos relacionados ao defeito ou ao processo de reparo, saiba que pode buscar indenização.</p>
      
      <p class="mb-4">Em casos de recalls massivos, as ações coletivas são uma forma eficiente de garantir seus direitos sem precisar enfrentar sozinho grandes montadoras.</p>
    `
  },
  {
    id: "problemas-pacotes-viagem-cancelamento",
    slug: "problemas-pacotes-viagem-cancelamento",
    title: "Problemas com Pacotes de Viagens e Turismo: Direitos do Consumidor Diante de Cancelamentos",
    metaTitle: "Viagem Cancelada ou Alterada? Seus Direitos pelo CDC 2026",
    metaDescription: "Agência cancelou sua viagem ou fez mudanças sem avisar? Conheça seus direitos de reembolso, remarcação e indenização por danos.",
    keywords: ["viagem cancelada", "pacote turismo problema", "agência cancelou viagem", "reembolso viagem", "direito consumidor turismo", "CVC problema", "decolar reclamação"],
    category: "Consumidor",
    excerpt: "Sua viagem foi cancelada ou alterada sem aviso? Saiba quais são seus direitos e como buscar reembolso ou indenização.",
    author: "Equipe Advogado Já",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    readingTime: 11,
    content: `
      <p class="text-lg text-muted-foreground mb-8">Planejar uma viagem é motivo de alegria, mas quando surgem problemas como <strong>cancelamentos, mudanças de hotel ou itinerário</strong>, a frustração é enorme. Neste guia, explicamos seus direitos como consumidor de serviços turísticos e como agir em cada situação.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Principais Problemas com Pacotes de Viagem</h2>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Cancelamento do pacote</strong> pela agência</li>
        <li><strong>Mudança de hotel</strong> para categoria inferior</li>
        <li><strong>Alteração de datas ou itinerário</strong> sem consulta</li>
        <li><strong>Overbooking</strong> em hotéis ou voos</li>
        <li><strong>Serviços não prestados</strong> conforme contratado</li>
        <li><strong>Empresa faliu</strong> antes da viagem</li>
        <li><strong>Propaganda enganosa</strong> sobre o destino ou serviços</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">O Que Diz a Lei</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Código de Defesa do Consumidor</h3>
      <p class="mb-4">O CDC se aplica integralmente aos serviços de turismo. Destaques:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Art. 20:</strong> Serviço prestado em desconformidade gera direito a reexecução, abatimento ou reembolso</li>
        <li><strong>Art. 35:</strong> Oferta não cumprida permite exigir cumprimento, aceitar equivalente ou rescindir com reembolso</li>
        <li><strong>Art. 37:</strong> Propaganda enganosa é proibida e gera indenização</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Lei do Turismo (Lei 11.771/2008)</h3>
      <p class="mb-4">Estabelece regras específicas para agências de viagens e operadoras de turismo.</p>

      <div class="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p class="font-semibold text-primary mb-2">✈️ Importante</p>
        <p class="text-foreground">A agência de viagens é <strong>solidariamente responsável</strong> pelos serviços que vende, mesmo que prestados por terceiros (hotéis, companhias aéreas). Você pode reclamar diretamente com ela.</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Seus Direitos em Cada Situação</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Cancelamento pela Agência</h3>
      <p class="mb-4">Se a agência cancelar sua viagem, você pode escolher:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Reembolso integral</strong> de todos os valores pagos</li>
        <li><strong>Remarcação</strong> para outra data sem custos</li>
        <li><strong>Pacote equivalente</strong> de mesma qualidade</li>
        <li><strong>Indenização por danos</strong> (materiais e morais)</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Mudança de Hotel ou Serviços</h3>
      <p class="mb-4">Alterações unilaterais sem sua concordância configuram descumprimento contratual:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Hotel de categoria inferior: direito a <strong>upgrade ou reembolso da diferença</strong></li>
        <li>Passeios cancelados: <strong>reembolso proporcional</strong></li>
        <li>Guia não incluído: <strong>desconto ou disponibilização de guia</strong></li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Propaganda Enganosa</h3>
      <p class="mb-4">Se o destino ou serviços não corresponderem ao anunciado:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Direito a <strong>compensação ou upgrade</strong></li>
        <li>Possibilidade de <strong>cancelar o restante da viagem</strong></li>
        <li><strong>Indenização por danos morais</strong> (viagem arruinada)</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Como Proceder: Passo a Passo</h2>
      
      <ol class="list-decimal pl-6 mb-6 space-y-4">
        <li>
          <strong>Documente tudo:</strong> Fotos, vídeos, e-mails, contrato, vouchers, recibos.
        </li>
        <li>
          <strong>Reclame no local:</strong> Se o problema ocorrer durante a viagem, registre reclamação formal com a agência/hotel.
        </li>
        <li>
          <strong>Contate a agência por escrito:</strong> E-mail ou carta com protocolo, expondo o problema e suas exigências.
        </li>
        <li>
          <strong>Use o consumidor.gov.br:</strong> Plataforma oficial com bom índice de resolução.
        </li>
        <li>
          <strong>PROCON:</strong> Para mediação e eventual multa à empresa.
        </li>
        <li>
          <strong>Ação judicial:</strong> Juizado Especial para valores até 20 salários mínimos.
        </li>
      </ol>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Documentos Importantes</h2>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Contrato do pacote de viagem</li>
        <li>Comprovantes de pagamento</li>
        <li>Vouchers de hotel e passeios</li>
        <li>E-mails e comunicações com a agência</li>
        <li>Fotos e vídeos do local (se diferente do anunciado)</li>
        <li>Notas fiscais de gastos extras</li>
        <li>Bilhetes aéreos</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Perguntas Frequentes</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Posso desistir da viagem? Qual a multa?</h3>
          <p class="text-muted-foreground">Você pode desistir, mas geralmente há multas previstas em contrato. Quanto mais próximo da viagem, maior a multa. Analise seu contrato.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A agência faliu. Perdi meu dinheiro?</h3>
          <p class="text-muted-foreground">Tente recuperar via operadora de cartão de crédito (contestação de compra). Também é possível habilitar-se na falência, mas a recuperação é incerta.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">O hotel estava em obras e estragou minha viagem. Tenho direito a indenização?</h3>
          <p class="text-muted-foreground">Sim! Se a informação foi omitida, você pode pleitear indenização por danos morais pelo transtorno causado.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Comprei passagem e hotel separados. A agência é responsável?</h3>
          <p class="text-muted-foreground">Cada fornecedor responde pelo seu serviço. Se comprou tudo separado, terá que reclamar individualmente.</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-10 text-center">
        <h3 class="text-2xl font-bold text-foreground mb-3">Problemas com Sua Viagem?</h3>
        <p class="text-muted-foreground mb-6">Nossa equipe pode analisar seu caso gratuitamente e orientar sobre como buscar reembolso ou indenização.</p>
        <a href="/" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Falar com Advogado Agora
        </a>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Conclusão</h2>
      
      <p class="mb-4">Viagens são momentos especiais que não devem ser arruinados por falhas de prestadores de serviço. O CDC oferece proteção robusta ao turista consumidor, e você não precisa aceitar alterações ou cancelamentos sem compensação adequada.</p>
      
      <p class="mb-4">Documente tudo, exija seus direitos e, se necessário, busque a Justiça. A jurisprudência brasileira tem sido muito favorável aos consumidores em casos de turismo.</p>
    `
  },
  {
    id: "responsabilidade-marketplace-compra-problema",
    slug: "responsabilidade-marketplace-compra-problema",
    title: "Responsabilidade de Marketplaces: O Que Fazer Quando a Compra Mediada por um Intermediário Dá Errado",
    metaTitle: "Problema em Compra no Marketplace? Quem É Responsável 2026",
    metaDescription: "Comprou no Mercado Livre, Amazon ou Shopee e deu problema? Descubra quem é responsável e como resolver quando a compra mediada dá errado.",
    keywords: ["marketplace responsabilidade", "Mercado Livre problema", "Amazon reclamação", "Shopee devolução", "compra intermediário", "vendedor marketplace", "plataforma responsável"],
    category: "Consumidor",
    excerpt: "Comprou em marketplace e teve problema? Entenda a responsabilidade da plataforma e do vendedor, e saiba como resolver.",
    author: "Equipe Advogado Já",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    readingTime: 10,
    content: `
      <p class="text-lg text-muted-foreground mb-8">Marketplaces como <strong>Mercado Livre, Amazon, Shopee, Magazine Luiza e Americanas</strong> revolucionaram as compras online, mas também trouxeram dúvidas: quando algo dá errado, quem é responsável – a plataforma ou o vendedor? Neste guia, esclarecemos essa questão e mostramos como resolver problemas.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">O Que É um Marketplace</h2>
      
      <p class="mb-4">Marketplace é uma plataforma que conecta <strong>compradores e vendedores</strong>. A plataforma não é dona dos produtos, mas facilita a transação, geralmente oferecendo:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Sistema de pagamento seguro</li>
        <li>Intermediação de conflitos</li>
        <li>Avaliações e reputação de vendedores</li>
        <li>Logística (em alguns casos)</li>
        <li>Garantias adicionais (programas de proteção)</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Quem É Responsável: Marketplace ou Vendedor?</h2>
      
      <p class="mb-4">A jurisprudência brasileira tem evoluído nesse tema. A tendência atual é:</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Responsabilidade Solidária</h3>
      <p class="mb-4">Em muitos casos, <strong>tanto o marketplace quanto o vendedor podem ser responsabilizados</strong>. Isso significa que você pode processar qualquer um dos dois (ou ambos). Os tribunais consideram que:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>O marketplace lucra com a intermediação</li>
        <li>O consumidor confia na marca da plataforma</li>
        <li>A plataforma tem poder de fiscalizar vendedores</li>
        <li>Há uma cadeia de fornecimento integrada</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Quando o Marketplace Pode Ser Responsabilizado</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Quando integra a cadeia de fornecimento (processa pagamentos, faz logística)</li>
        <li>Quando o vendedor some e não é possível contato</li>
        <li>Quando falhou em fiscalizar vendedores problemáticos</li>
        <li>Quando promete garantias próprias (ex: "Compra Garantida")</li>
      </ul>

      <div class="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p class="font-semibold text-primary mb-2">⚖️ Entendimento do STJ</p>
        <p class="text-foreground">O Superior Tribunal de Justiça tem decidido pela <strong>responsabilidade dos marketplaces</strong> quando há participação ativa na cadeia de consumo, especialmente com programas de proteção ao consumidor.</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Problemas Comuns e Como Resolver</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Produto Não Entregue</h3>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Verifique o status de rastreamento</li>
        <li>Entre em contato com o vendedor pela plataforma</li>
        <li>Abra disputa/reclamação no marketplace</li>
        <li>Use a garantia de compra (se houver)</li>
        <li>Conteste no cartão de crédito (se aplicável)</li>
      </ol>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Produto Diferente ou Com Defeito</h3>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Fotografe e documente o problema</li>
        <li>Solicite devolução pelo sistema do marketplace</li>
        <li>Aguarde etiqueta de postagem (sem custo)</li>
        <li>Exija reembolso total após devolução</li>
      </ol>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Vendedor Não Responde</h3>
      <ol class="list-decimal pl-6 mb-6 space-y-2">
        <li>Escale para a mediação do marketplace</li>
        <li>Acione a garantia de compra</li>
        <li>Registre reclamação no consumidor.gov.br contra a plataforma</li>
        <li>Procure o PROCON</li>
      </ol>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Programas de Proteção ao Comprador</h2>
      
      <p class="mb-4">A maioria dos marketplaces oferece programas de proteção. Conheça os principais:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Mercado Livre:</strong> Compra Garantida</li>
        <li><strong>Amazon:</strong> Garantia de A a Z</li>
        <li><strong>Shopee:</strong> Garantia Shopee</li>
        <li><strong>Magazine Luiza:</strong> Proteção de Compra</li>
        <li><strong>Americanas:</strong> Compra Segura</li>
      </ul>
      
      <p class="mb-4">Esses programas geralmente cobrem:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Produto não entregue</li>
        <li>Produto significativamente diferente</li>
        <li>Vendedor que não responde</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Perguntas Frequentes</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Posso processar o Mercado Livre por problema com vendedor?</h3>
          <p class="text-muted-foreground">Sim, em muitos casos. A jurisprudência tem reconhecido a responsabilidade solidária, especialmente quando você usou o Mercado Pago e o Mercado Envios.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">O vendedor sumiu e o marketplace não resolve. O que fazer?</h3>
          <p class="text-muted-foreground">Reclame formalmente no consumidor.gov.br contra o marketplace e considere ação judicial. O PROCON também pode ajudar.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Comprei de vendedor com nota alta e tive problema. A plataforma não verifica?</h3>
          <p class="text-muted-foreground">A reputação não é garantia. Se tiver problema, a plataforma pode ser co-responsável por ter dado credibilidade ao vendedor.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Posso estornar no cartão mesmo usando a plataforma?</h3>
          <p class="text-muted-foreground">Sim, você pode contestar a compra junto à administradora do cartão. É um direito seu mesmo em compras via marketplace.</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-10 text-center">
        <h3 class="text-2xl font-bold text-foreground mb-3">Problema com Compra em Marketplace?</h3>
        <p class="text-muted-foreground mb-6">Nossa equipe pode analisar seu caso gratuitamente e orientar sobre como responsabilizar plataforma e vendedor.</p>
        <a href="/" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Falar com Advogado Agora
        </a>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Conclusão</h2>
      
      <p class="mb-4">Os marketplaces facilitam as compras, mas também devem assumir responsabilidade quando algo dá errado. A jurisprudência brasileira caminha para reconhecer a responsabilidade solidária dessas plataformas, o que fortalece os direitos do consumidor.</p>
      
      <p class="mb-4">Se você teve problema em compra via marketplace, não desista. Use os canais de reclamação, acione a garantia da plataforma e, se necessário, busque seus direitos na Justiça.</p>
    `
  },
  {
    id: "consorcio-desistencia-direitos-consumidor",
    slug: "consorcio-desistencia-direitos-consumidor",
    title: "Contratos de Consórcio e Desistência: Quais São os Direitos do Consumidor ao Sair de um Grupo",
    metaTitle: "Como Sair do Consórcio: Seus Direitos de Desistência 2026",
    metaDescription: "Quer desistir do consórcio? Conheça seus direitos de cancelamento, como receber seu dinheiro de volta e os prazos envolvidos.",
    keywords: ["sair consórcio", "desistir consórcio", "cancelar consórcio", "devolução consórcio", "consórcio direitos", "consórcio contemplado", "consórcio cancelamento"],
    category: "Consumidor",
    excerpt: "Quer desistir do consórcio? Entenda seus direitos de cancelamento, quanto você pode receber de volta e quais os prazos.",
    author: "Equipe Advogado Já",
    publishedAt: "2026-01-15",
    updatedAt: "2026-01-15",
    readingTime: 11,
    content: `
      <p class="text-lg text-muted-foreground mb-8">O consórcio é uma forma popular de aquisição de bens no Brasil, mas imprevistos acontecem e você pode precisar <strong>desistir do grupo</strong>. Neste guia, explicamos seus direitos de cancelamento, como funciona a devolução de valores e os cuidados necessários.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Como Funciona o Consórcio</h2>
      
      <p class="mb-4">O consórcio é uma modalidade de <strong>compra programada</strong> onde um grupo de pessoas paga parcelas mensais e, por sorteio ou lance, alguns são contemplados para receber o crédito. Características principais:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Não há cobrança de juros (apenas taxa de administração)</li>
        <li>Contemplação por sorteio mensal</li>
        <li>Possibilidade de dar lances para antecipar</li>
        <li>Regulamentação pelo Banco Central</li>
        <li>Contratos de longo prazo (geralmente 60-80 meses)</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Formas de Desistência</h2>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">1. Desistência Voluntária (Cancelamento)</h3>
      <p class="mb-4">Quando você decide não continuar no grupo por qualquer motivo:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Você pode solicitar o cancelamento a qualquer momento</li>
        <li>O reembolso é feito ao final do grupo, descontadas taxas</li>
        <li>Alternativamente, pode ser feito por sorteio mensal entre desistentes</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">2. Exclusão por Inadimplência</h3>
      <p class="mb-4">Quando a administradora exclui você por falta de pagamento:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Após 3 parcelas em atraso, pode haver exclusão</li>
        <li>Direito ao reembolso permanece</li>
        <li>Mesmas regras de devolução da desistência voluntária</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">3. Transferência da Cota</h3>
      <p class="mb-4">Uma alternativa ao cancelamento é vender sua cota para outra pessoa:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Precisa de aprovação da administradora</li>
        <li>Você pode recuperar parte ou todo o valor pago</li>
        <li>É mais vantajoso que o cancelamento em muitos casos</li>
      </ul>

      <div class="bg-primary/10 border-l-4 border-primary p-6 my-8 rounded-r-lg">
        <p class="font-semibold text-primary mb-2">📊 Lei 11.795/2008</p>
        <p class="text-foreground">Esta lei regula os consórcios no Brasil e garante seus direitos de desistência e restituição de valores.</p>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Quanto Você Recebe de Volta</h2>
      
      <p class="mb-4">Ao desistir, você tem direito ao reembolso das <strong>parcelas pagas</strong>, mas alguns descontos são legais:</p>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Descontos Permitidos</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Taxa de administração:</strong> Proporcional ao tempo de participação</li>
        <li><strong>Multa contratual:</strong> Geralmente limitada a 10-20% do fundo comum</li>
        <li><strong>Seguro:</strong> Se contratado, não é devolvido</li>
        <li><strong>Fundo de reserva:</strong> Pode ser devolvido no encerramento do grupo</li>
      </ul>
      
      <h3 class="text-xl font-semibold text-foreground mt-6 mb-3">Descontos Abusivos (Ilegais)</h3>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Retenção total dos valores pagos</li>
        <li>Multas superiores ao permitido em contrato</li>
        <li>Taxas não previstas ou não explicadas</li>
        <li>Correção monetária negativa (inversa)</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Prazo para Receber o Dinheiro</h2>
      
      <p class="mb-4">Esta é uma das maiores reclamações dos consumidores. A regra geral é:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Regra:</strong> Devolução no encerramento do grupo (pode demorar anos)</li>
        <li><strong>Alternativa:</strong> Sorteio mensal entre os desistentes (se previsto em contrato)</li>
        <li><strong>Exceção:</strong> Ação judicial pode antecipar a devolução</li>
      </ul>
      
      <p class="mb-4">A jurisprudência tem evoluído para considerar abusiva a demora excessiva, e alguns tribunais determinam devolução em <strong>30 a 60 dias</strong> após a desistência.</p>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">E Se Eu Já Fui Contemplado?</h2>
      
      <p class="mb-4">Se você foi contemplado e usou o crédito:</p>
      
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Não pode simplesmente desistir</li>
        <li>Deve continuar pagando as parcelas até quitar o bem</li>
        <li>Inadimplência pode resultar em busca e apreensão do bem</li>
        <li>Pode negociar a transferência do bem e da dívida</li>
      </ul>
      
      <p class="mb-4">Se foi contemplado mas <strong>ainda não usou o crédito</strong>:</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li>Pode renunciar à contemplação</li>
        <li>Volta à condição de cotista não contemplado</li>
        <li>Pode então desistir normalmente</li>
      </ul>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Como Proceder para Desistir</h2>
      
      <ol class="list-decimal pl-6 mb-6 space-y-4">
        <li>
          <strong>Leia seu contrato:</strong> Verifique as cláusulas de desistência e multas.
        </li>
        <li>
          <strong>Solicite formalmente:</strong> Envie carta ou e-mail à administradora pedindo o cancelamento.
        </li>
        <li>
          <strong>Peça demonstrativo:</strong> Solicite o cálculo de quanto você receberá de volta.
        </li>
        <li>
          <strong>Verifique se os descontos são legais:</strong> Compare com o contrato e a lei.
        </li>
        <li>
          <strong>Negocie:</strong> Se possível, tente transferir a cota em vez de cancelar.
        </li>
        <li>
          <strong>Busque a Justiça se necessário:</strong> Se houver abuso ou demora excessiva.
        </li>
      </ol>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Perguntas Frequentes</h2>
      
      <div class="space-y-6 mb-8">
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Posso desistir a qualquer momento?</h3>
          <p class="text-muted-foreground">Sim, você pode solicitar a desistência quando quiser. O que muda são as condições de devolução.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">A administradora pode reter tudo que paguei?</h3>
          <p class="text-muted-foreground">Não! Isso é considerado abusivo. Você tem direito ao reembolso, descontadas apenas as taxas legais e proporcionais.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Preciso esperar o grupo acabar para receber?</h3>
          <p class="text-muted-foreground">Em regra, sim. Mas a Justiça tem antecipado esse prazo em casos de demora excessiva.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">É melhor vender a cota ou cancelar?</h3>
          <p class="text-muted-foreground">Geralmente é mais vantajoso vender, pois você pode recuperar mais dinheiro e não precisa esperar o fim do grupo.</p>
        </div>
        
        <div>
          <h3 class="text-lg font-semibold text-foreground mb-2">Fui contemplado há pouco tempo. Posso desistir?</h3>
          <p class="text-muted-foreground">Se não usou o crédito, pode renunciar à contemplação e depois desistir. Se já usou, terá que continuar pagando.</p>
        </div>
      </div>

      <div class="bg-gradient-to-r from-primary/20 to-secondary/20 p-8 rounded-xl my-10 text-center">
        <h3 class="text-2xl font-bold text-foreground mb-3">Quer Sair do Consórcio?</h3>
        <p class="text-muted-foreground mb-6">Nossa equipe pode analisar seu contrato gratuitamente e orientar sobre a melhor forma de desistir e recuperar seu dinheiro.</p>
        <a href="/" class="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
          Falar com Advogado Agora
        </a>
      </div>

      <h2 class="text-2xl font-bold text-foreground mt-10 mb-4">Conclusão</h2>
      
      <p class="mb-4">Desistir de um consórcio é um direito seu, mas é importante conhecer as regras para não ser surpreendido. A devolução de valores é garantida por lei, mas os prazos e descontos variam. Analise seu contrato e, se necessário, busque orientação jurídica.</p>
      
      <p class="mb-4">Se a administradora estiver retendo valores indevidamente ou demorando excessivamente para devolver, não hesite em buscar a Justiça. A jurisprudência tem sido favorável aos consumidores em muitos casos.</p>
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

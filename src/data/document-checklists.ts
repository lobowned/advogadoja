export interface DocumentItem {
  doc: string;
  tip: string;
}

export interface DocumentChecklist {
  title: string;
  obrigatorios: DocumentItem[];
  recomendados: DocumentItem[];
  prazoMedio?: string;
  prazoLimite?: string;
}

export const DOCUMENT_CHECKLISTS: Record<string, DocumentChecklist> = {
  'divórcio': {
    title: 'Documentos para Divórcio',
    obrigatorios: [
      { doc: 'Certidão de casamento (atualizada)', tip: 'Tirar no cartório onde casou' },
      { doc: 'RG e CPF de ambos', tip: 'Cópias legíveis' },
      { doc: 'Comprovante de residência', tip: 'Últimos 3 meses' }
    ],
    recomendados: [
      { doc: 'Declaração de bens', tip: 'Lista completa com valores' },
      { doc: 'Certidão de nascimento dos filhos', tip: 'Se houver menores' },
      { doc: 'Comprovantes de renda', tip: 'Holerites ou declaração' }
    ],
    prazoMedio: '3-6 meses (consensual) ou 1-2 anos (litigioso)'
  },
  
  'guarda': {
    title: 'Documentos para Guarda de Filhos',
    obrigatorios: [
      { doc: 'Certidão de nascimento da criança', tip: 'Atualizada' },
      { doc: 'RG e CPF dos pais', tip: 'Cópias legíveis' },
      { doc: 'Comprovante de residência', tip: 'Últimos 3 meses' }
    ],
    recomendados: [
      { doc: 'Comprovantes de renda', tip: 'Para definir pensão' },
      { doc: 'Matrícula escolar', tip: 'Se criança estuda' },
      { doc: 'Relatório médico/psicológico', tip: 'Se houver acompanhamento' }
    ],
    prazoMedio: '6 meses a 1 ano'
  },

  'pensão alimentícia': {
    title: 'Documentos para Pensão Alimentícia',
    obrigatorios: [
      { doc: 'Certidão de nascimento', tip: 'Da criança/dependente' },
      { doc: 'Comprovante de despesas', tip: 'Escola, saúde, alimentação' },
      { doc: 'RG e CPF', tip: 'De quem vai receber' }
    ],
    recomendados: [
      { doc: 'Comprovantes de renda do alimentante', tip: 'Holerites, IR' },
      { doc: 'Planilha de gastos mensais', tip: 'Detalhada' },
      { doc: 'Comprovante de residência', tip: 'Atual' }
    ],
    prazoMedio: '2-4 meses (judicial)'
  },
  
  'demissão': {
    title: 'Documentos para Reclamação Trabalhista',
    obrigatorios: [
      { doc: 'Carteira de trabalho', tip: 'Física ou digital (app)' },
      { doc: 'Termo de rescisão (TRCT)', tip: 'Documento rosa' },
      { doc: 'Últimos holerites', tip: 'Pelo menos 6 meses' }
    ],
    recomendados: [
      { doc: 'Extrato FGTS', tip: 'Baixar no app Caixa' },
      { doc: 'Contrato de trabalho', tip: 'Se tiver' },
      { doc: 'Provas de irregularidades', tip: 'Prints, emails, testemunhas' }
    ],
    prazoLimite: '2 anos após a demissão'
  },

  'acidente de trabalho': {
    title: 'Documentos para Acidente de Trabalho',
    obrigatorios: [
      { doc: 'CAT (Comunicação de Acidente)', tip: 'Emitida pela empresa' },
      { doc: 'Atestados médicos', tip: 'Todos que tiver' },
      { doc: 'Carteira de trabalho', tip: 'Física ou digital' }
    ],
    recomendados: [
      { doc: 'Fotos do local/lesão', tip: 'Se tiver' },
      { doc: 'Boletim de ocorrência', tip: 'Se fez na polícia' },
      { doc: 'Nome de testemunhas', tip: 'Colegas de trabalho' }
    ],
    prazoLimite: '2 anos após o acidente'
  },

  'assédio moral': {
    title: 'Documentos para Assédio Moral',
    obrigatorios: [
      { doc: 'Contrato de trabalho', tip: 'Ou CTPS' },
      { doc: 'Provas do assédio', tip: 'Prints, gravações, emails' }
    ],
    recomendados: [
      { doc: 'Atestados médicos', tip: 'Se teve afastamento' },
      { doc: 'Nome de testemunhas', tip: 'Colegas que presenciaram' },
      { doc: 'Diário de ocorrências', tip: 'Datas e descrições' }
    ],
    prazoLimite: '2 anos'
  },
  
  'aposentadoria': {
    title: 'Documentos para Aposentadoria',
    obrigatorios: [
      { doc: 'RG e CPF', tip: 'Documentos atualizados' },
      { doc: 'Carteira de trabalho', tip: 'Todas que tiver' },
      { doc: 'CNIS (extrato do INSS)', tip: 'Baixar no Meu INSS' }
    ],
    recomendados: [
      { doc: 'Carnês de contribuição', tip: 'Se foi autônomo' },
      { doc: 'Certidão de tempo militar', tip: 'Se serviu' },
      { doc: 'PPP (Perfil Profissiográfico)', tip: 'Para aposentadoria especial' }
    ],
    prazoMedio: '45-90 dias (sem pendências)'
  },

  'auxílio-doença': {
    title: 'Documentos para Auxílio-Doença',
    obrigatorios: [
      { doc: 'Laudos médicos recentes', tip: 'Últimos 3 meses' },
      { doc: 'Exames médicos', tip: 'Que comprovem a doença' },
      { doc: 'CNIS (extrato do INSS)', tip: 'Baixar no Meu INSS' }
    ],
    recomendados: [
      { doc: 'Carteira de trabalho', tip: 'Se empregado' },
      { doc: 'Carnês GPS', tip: 'Se autônomo' },
      { doc: 'Receitas de medicamentos', tip: 'Tratamentos em curso' }
    ],
    prazoMedio: '30-45 dias'
  },

  'BPC/LOAS': {
    title: 'Documentos para BPC/LOAS',
    obrigatorios: [
      { doc: 'RG e CPF do beneficiário', tip: 'E do grupo familiar' },
      { doc: 'Comprovante de renda familiar', tip: 'Todos da casa' },
      { doc: 'Laudos médicos', tip: 'Se for por deficiência' }
    ],
    recomendados: [
      { doc: 'Comprovante de residência', tip: 'Atualizado' },
      { doc: 'Cadastro Único (CadÚnico)', tip: 'Atualizado no CRAS' },
      { doc: 'Certidão de nascimento/casamento', tip: 'Do beneficiário' }
    ],
    prazoMedio: '45-90 dias'
  },

  'prisão': {
    title: 'Documentos para Defesa Criminal',
    obrigatorios: [
      { doc: 'RG e CPF do preso', tip: 'Se tiver acesso' },
      { doc: 'Boletim de ocorrência', tip: 'Número do BO' },
      { doc: 'Auto de prisão em flagrante', tip: 'Se foi flagrante' }
    ],
    recomendados: [
      { doc: 'Comprovante de residência', tip: 'Para pedir liberdade' },
      { doc: 'Carteira de trabalho', tip: 'Comprova vínculo' },
      { doc: 'Certidão de antecedentes', tip: 'Se for primário' }
    ],
    prazoLimite: 'Habeas corpus pode ser feito a qualquer momento'
  },

  'golpes online': {
    title: 'Documentos para Golpe Digital',
    obrigatorios: [
      { doc: 'Prints das conversas', tip: 'WhatsApp, email, etc.' },
      { doc: 'Comprovantes de pagamento', tip: 'PIX, transferências' },
      { doc: 'Boletim de ocorrência', tip: 'Registrar na delegacia' }
    ],
    recomendados: [
      { doc: 'Dados do golpista', tip: 'CPF, conta bancária, etc.' },
      { doc: 'Extrato bancário', tip: 'Mostrando os débitos' },
      { doc: 'Protocolo do banco', tip: 'Se já comunicou' }
    ],
    prazoLimite: 'Quanto antes, maiores chances de recuperação'
  },

  'consumidor': {
    title: 'Documentos para Direito do Consumidor',
    obrigatorios: [
      { doc: 'Nota fiscal/comprovante de compra', tip: 'Do produto/serviço' },
      { doc: 'Prints das reclamações', tip: 'Se já tentou resolver' },
      { doc: 'Protocolo de atendimento', tip: 'Do SAC da empresa' }
    ],
    recomendados: [
      { doc: 'Fotos do problema', tip: 'Produto com defeito' },
      { doc: 'Laudo técnico', tip: 'Se for defeito complexo' },
      { doc: 'Reclamação no Procon', tip: 'Se já registrou' }
    ],
    prazoLimite: '30 dias (defeito aparente) ou 90 dias (vício oculto)'
  },

  'plano de saúde': {
    title: 'Documentos para Plano de Saúde',
    obrigatorios: [
      { doc: 'Contrato do plano', tip: 'Ou carteirinha' },
      { doc: 'Pedido médico', tip: 'Da cirurgia/procedimento' },
      { doc: 'Negativa do plano', tip: 'Por escrito' }
    ],
    recomendados: [
      { doc: 'Laudos médicos', tip: 'Que justificam a necessidade' },
      { doc: 'Protocolo de solicitação', tip: 'Do pedido negado' },
      { doc: 'Orçamento particular', tip: 'Se tiver que pagar do bolso' }
    ],
    prazoMedio: 'Liminar pode sair em 24-48h'
  }
};

// Função para buscar checklist por problema detectado
export const getChecklistByProblem = (problem: string | null): DocumentChecklist | null => {
  if (!problem) return null;
  
  const normalizedProblem = problem.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  // Mapeamento de variações para chave do checklist
  const problemMapping: Record<string, string> = {
    'divorcio': 'divórcio',
    'separacao': 'divórcio',
    'guarda': 'guarda',
    'filho': 'guarda',
    'filhos': 'guarda',
    'pensao': 'pensão alimentícia',
    'alimentos': 'pensão alimentícia',
    'demissao': 'demissão',
    'demitido': 'demissão',
    'mandaram embora': 'demissão',
    'acidente': 'acidente de trabalho',
    'acidente trabalho': 'acidente de trabalho',
    'assedio': 'assédio moral',
    'assedio moral': 'assédio moral',
    'aposentadoria': 'aposentadoria',
    'aposentar': 'aposentadoria',
    'inss': 'aposentadoria',
    'auxilio': 'auxílio-doença',
    'auxilio doenca': 'auxílio-doença',
    'doente': 'auxílio-doença',
    'bpc': 'BPC/LOAS',
    'loas': 'BPC/LOAS',
    'deficiente': 'BPC/LOAS',
    'idoso': 'BPC/LOAS',
    'prisao': 'prisão',
    'preso': 'prisão',
    'flagrante': 'prisão',
    'delegacia': 'prisão',
    'golpe': 'golpes online',
    'pix': 'golpes online',
    'estelionato': 'golpes online',
    'fraude': 'golpes online',
    'consumidor': 'consumidor',
    'produto': 'consumidor',
    'loja': 'consumidor',
    'plano': 'plano de saúde',
    'saude': 'plano de saúde',
    'cirurgia': 'plano de saúde',
    'hospital': 'plano de saúde'
  };
  
  for (const [key, value] of Object.entries(problemMapping)) {
    if (normalizedProblem.includes(key)) {
      return DOCUMENT_CHECKLISTS[value] || null;
    }
  }
  
  return null;
};

import { useState, useCallback } from 'react';

export interface TriageOption {
  label: string;
  value: string;
  icon: string;
}

export interface TriageStep {
  id: string;
  question: string;
  options: TriageOption[];
}

export interface TriageData {
  area: string | null;
  subCategory: string | null;
  urgency: string | null;
  previousAttempt: string | null;
  estimatedRights: string | null;
}

const areaStep: TriageStep = {
  id: 'area',
  question: 'Qual área do seu problema?',
  options: [
    { label: 'Trabalhista', value: 'trabalhista', icon: 'Briefcase' },
    { label: 'Família e Divórcio', value: 'familia', icon: 'Users' },
    { label: 'INSS/Aposentadoria', value: 'previdenciario', icon: 'Heart' },
    { label: 'Civil (Contratos/Danos)', value: 'civil', icon: 'Scale' },
    { label: 'Criminal/Penal', value: 'penal', icon: 'Shield' },
    { label: 'Outra Área', value: 'outro', icon: 'HelpCircle' }
  ]
};

const subCategoriesByArea: Record<string, TriageOption[]> = {
  trabalhista: [
    { label: 'Fui demitido', value: 'demissao', icon: 'UserMinus' },
    { label: 'Horas extras não pagas', value: 'horas-extras', icon: 'Clock' },
    { label: 'Acidente de trabalho', value: 'acidente', icon: 'AlertTriangle' },
    { label: 'Assédio no trabalho', value: 'assedio', icon: 'AlertOctagon' },
    { label: 'Outro problema trabalhista', value: 'outro-trabalhista', icon: 'Briefcase' }
  ],
  familia: [
    { label: 'Divórcio/Separação', value: 'divorcio', icon: 'HeartCrack' },
    { label: 'Guarda de filhos', value: 'guarda', icon: 'Baby' },
    { label: 'Pensão alimentícia', value: 'pensao', icon: 'Wallet' },
    { label: 'União estável', value: 'uniao-estavel', icon: 'Heart' },
    { label: 'Outro problema familiar', value: 'outro-familia', icon: 'Users' }
  ],
  previdenciario: [
    { label: 'Aposentadoria', value: 'aposentadoria', icon: 'Award' },
    { label: 'Auxílio-doença', value: 'auxilio-doenca', icon: 'Stethoscope' },
    { label: 'BPC/LOAS', value: 'bpc-loas', icon: 'HandHeart' },
    { label: 'Revisão de benefício', value: 'revisao', icon: 'RefreshCw' },
    { label: 'Pensão por morte', value: 'pensao-morte', icon: 'Heart' }
  ],
  civil: [
    { label: 'Danos morais', value: 'danos-morais', icon: 'Frown' },
    { label: 'Cobrança de dívida', value: 'cobranca', icon: 'Receipt' },
    { label: 'Problemas com contrato', value: 'contrato', icon: 'FileText' },
    { label: 'Despejo/Aluguel', value: 'despejo', icon: 'Home' },
    { label: 'Outro problema civil', value: 'outro-civil', icon: 'Scale' }
  ],
  penal: [
    { label: 'Prisão/Flagrante', value: 'prisao', icon: 'Lock' },
    { label: 'Violência doméstica', value: 'violencia-domestica', icon: 'ShieldAlert' },
    { label: 'Furto/Roubo', value: 'crimes-patrimoniais', icon: 'AlertCircle' },
    { label: 'Acompanhamento delegacia', value: 'delegacia', icon: 'Building2' },
    { label: 'Outro problema criminal', value: 'outro-penal', icon: 'Shield' }
  ],
  outro: [
    { label: 'Problema com empresa', value: 'consumidor', icon: 'ShoppingBag' },
    { label: 'Questão imobiliária', value: 'imobiliario', icon: 'Building' },
    { label: 'Assessoria empresarial', value: 'empresarial', icon: 'Landmark' },
    { label: 'Não sei classificar', value: 'indefinido', icon: 'HelpCircle' }
  ]
};

const urgencyStep: TriageStep = {
  id: 'urgency',
  question: 'Há quanto tempo você tem esse problema?',
  options: [
    { label: 'Menos de 1 mês', value: 'urgente', icon: 'AlertTriangle' },
    { label: '1 a 6 meses', value: 'medio', icon: 'Clock' },
    { label: 'Mais de 6 meses', value: 'longo', icon: 'Calendar' }
  ]
};

const previousAttemptStep: TriageStep = {
  id: 'previousAttempt',
  question: 'Já tentou resolver de outra forma?',
  options: [
    { label: 'Não, é meu primeiro contato', value: 'primeiro', icon: 'MessageSquare' },
    { label: 'Sim, mas não consegui', value: 'tentou', icon: 'RefreshCw' }
  ]
};

const estimates: Record<string, Record<string, { min: number; max: number }>> = {
  demissao: { urgente: { min: 5000, max: 50000 }, medio: { min: 4000, max: 40000 }, longo: { min: 3000, max: 30000 } },
  'horas-extras': { urgente: { min: 3000, max: 30000 }, medio: { min: 2000, max: 25000 }, longo: { min: 1500, max: 20000 } },
  acidente: { urgente: { min: 10000, max: 150000 }, medio: { min: 8000, max: 120000 }, longo: { min: 5000, max: 100000 } },
  assedio: { urgente: { min: 10000, max: 100000 }, medio: { min: 8000, max: 80000 }, longo: { min: 5000, max: 60000 } },
  'outro-trabalhista': { urgente: { min: 3000, max: 30000 }, medio: { min: 2000, max: 20000 }, longo: { min: 1500, max: 15000 } },
  divorcio: { urgente: { min: 2000, max: 20000 }, medio: { min: 1500, max: 15000 }, longo: { min: 1000, max: 10000 } },
  guarda: { urgente: { min: 3000, max: 25000 }, medio: { min: 2000, max: 20000 }, longo: { min: 1500, max: 15000 } },
  pensao: { urgente: { min: 5000, max: 50000 }, medio: { min: 3000, max: 40000 }, longo: { min: 2000, max: 30000 } },
  'uniao-estavel': { urgente: { min: 2000, max: 30000 }, medio: { min: 1500, max: 25000 }, longo: { min: 1000, max: 20000 } },
  'outro-familia': { urgente: { min: 1500, max: 15000 }, medio: { min: 1000, max: 10000 }, longo: { min: 800, max: 8000 } },
  aposentadoria: { urgente: { min: 10000, max: 150000 }, medio: { min: 8000, max: 120000 }, longo: { min: 5000, max: 100000 } },
  'auxilio-doenca': { urgente: { min: 5000, max: 50000 }, medio: { min: 4000, max: 40000 }, longo: { min: 3000, max: 30000 } },
  'bpc-loas': { urgente: { min: 10000, max: 80000 }, medio: { min: 8000, max: 60000 }, longo: { min: 5000, max: 50000 } },
  revisao: { urgente: { min: 15000, max: 200000 }, medio: { min: 10000, max: 150000 }, longo: { min: 8000, max: 100000 } },
  'pensao-morte': { urgente: { min: 10000, max: 100000 }, medio: { min: 8000, max: 80000 }, longo: { min: 5000, max: 60000 } },
  'danos-morais': { urgente: { min: 5000, max: 50000 }, medio: { min: 3000, max: 40000 }, longo: { min: 2000, max: 30000 } },
  cobranca: { urgente: { min: 2000, max: 30000 }, medio: { min: 1500, max: 25000 }, longo: { min: 1000, max: 20000 } },
  contrato: { urgente: { min: 3000, max: 40000 }, medio: { min: 2000, max: 30000 }, longo: { min: 1500, max: 25000 } },
  despejo: { urgente: { min: 2000, max: 20000 }, medio: { min: 1500, max: 15000 }, longo: { min: 1000, max: 10000 } },
  'outro-civil': { urgente: { min: 2000, max: 20000 }, medio: { min: 1500, max: 15000 }, longo: { min: 1000, max: 10000 } },
  prisao: { urgente: { min: 5000, max: 50000 }, medio: { min: 4000, max: 40000 }, longo: { min: 3000, max: 30000 } },
  'violencia-domestica': { urgente: { min: 3000, max: 30000 }, medio: { min: 2000, max: 25000 }, longo: { min: 1500, max: 20000 } },
  'crimes-patrimoniais': { urgente: { min: 4000, max: 40000 }, medio: { min: 3000, max: 30000 }, longo: { min: 2000, max: 25000 } },
  delegacia: { urgente: { min: 2000, max: 15000 }, medio: { min: 1500, max: 12000 }, longo: { min: 1000, max: 10000 } },
  'outro-penal': { urgente: { min: 3000, max: 30000 }, medio: { min: 2000, max: 25000 }, longo: { min: 1500, max: 20000 } },
  consumidor: { urgente: { min: 2000, max: 20000 }, medio: { min: 1500, max: 15000 }, longo: { min: 1000, max: 10000 } },
  imobiliario: { urgente: { min: 5000, max: 100000 }, medio: { min: 3000, max: 80000 }, longo: { min: 2000, max: 60000 } },
  empresarial: { urgente: { min: 5000, max: 100000 }, medio: { min: 3000, max: 80000 }, longo: { min: 2000, max: 60000 } },
  indefinido: { urgente: { min: 2000, max: 20000 }, medio: { min: 1500, max: 15000 }, longo: { min: 1000, max: 10000 } }
};

const areaLabels: Record<string, string> = {
  trabalhista: 'Direito Trabalhista',
  familia: 'Direito de Família',
  previdenciario: 'Direito Previdenciário',
  civil: 'Direito Civil',
  penal: 'Direito Penal',
  outro: 'Assessoria Jurídica'
};

const subCategoryLabels: Record<string, string> = {
  demissao: 'Rescisão Trabalhista',
  'horas-extras': 'Verbas Trabalhistas',
  acidente: 'Acidente de Trabalho',
  assedio: 'Assédio no Trabalho',
  'outro-trabalhista': 'Direito Trabalhista',
  divorcio: 'Divórcio',
  guarda: 'Guarda de Filhos',
  pensao: 'Pensão Alimentícia',
  'uniao-estavel': 'União Estável',
  'outro-familia': 'Direito de Família',
  aposentadoria: 'Aposentadoria',
  'auxilio-doenca': 'Auxílio-Doença',
  'bpc-loas': 'BPC/LOAS',
  revisao: 'Revisão de Benefício',
  'pensao-morte': 'Pensão por Morte',
  'danos-morais': 'Danos Morais',
  cobranca: 'Cobrança',
  contrato: 'Contratos',
  despejo: 'Direito Imobiliário',
  'outro-civil': 'Direito Civil',
  prisao: 'Defesa Criminal',
  'violencia-domestica': 'Violência Doméstica',
  'crimes-patrimoniais': 'Crimes Patrimoniais',
  delegacia: 'Acompanhamento Policial',
  'outro-penal': 'Direito Penal',
  consumidor: 'Direito do Consumidor',
  imobiliario: 'Direito Imobiliário',
  empresarial: 'Direito Empresarial',
  indefinido: 'Assessoria Jurídica'
};

// Step order: area (0), subCategory (1), urgency (2), previousAttempt (3)
const STEP_IDS = ['area', 'subCategory', 'urgency', 'previousAttempt'] as const;
const TOTAL_STEPS = 4;

export const useTriageFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [triageData, setTriageData] = useState<TriageData>({
    area: null,
    subCategory: null,
    urgency: null,
    previousAttempt: null,
    estimatedRights: null
  });
  const [isComplete, setIsComplete] = useState(false);

  const getCurrentStepData = useCallback((): TriageStep | null => {
    const stepId = STEP_IDS[currentStep];
    
    switch (stepId) {
      case 'area':
        return areaStep;
      case 'subCategory':
        if (triageData.area && subCategoriesByArea[triageData.area]) {
          return {
            id: 'subCategory',
            question: 'Qual o problema específico?',
            options: subCategoriesByArea[triageData.area]
          };
        }
        return null;
      case 'urgency':
        return urgencyStep;
      case 'previousAttempt':
        return previousAttemptStep;
      default:
        return null;
    }
  }, [currentStep, triageData.area]);

  const submitStep = useCallback((value: string) => {
    const stepId = STEP_IDS[currentStep];
    if (!stepId) return;

    const newTriageData = {
      ...triageData,
      [stepId]: value
    };
    
    setTriageData(newTriageData);

    // Check if this is the last step
    if (stepId === 'previousAttempt') {
      // Calculate estimate
      const subCat = newTriageData.subCategory || 'indefinido';
      const urg = newTriageData.urgency || 'medio';
      const estimate = estimates[subCat]?.[urg] || estimates.indefinido.medio;
      const estimatedValue = `R$ ${estimate.min.toLocaleString('pt-BR')} a R$ ${estimate.max.toLocaleString('pt-BR')}`;
      
      setTriageData(prev => ({
        ...prev,
        previousAttempt: value,
        estimatedRights: estimatedValue
      }));
      
      setIsComplete(true);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  }, [currentStep, triageData]);

  const getEstimatedRights = useCallback(() => {
    const { subCategory, urgency } = triageData;
    const subCat = subCategory || 'indefinido';
    const urg = urgency || 'medio';
    
    const estimate = estimates[subCat]?.[urg] || estimates.indefinido.medio;
    return `R$ ${estimate.min.toLocaleString('pt-BR')} a R$ ${estimate.max.toLocaleString('pt-BR')}`;
  }, [triageData]);

  const getAreaLabel = useCallback(() => {
    if (triageData.subCategory) {
      return subCategoryLabels[triageData.subCategory] || areaLabels[triageData.area || 'outro'];
    }
    return triageData.area ? areaLabels[triageData.area] : null;
  }, [triageData]);

  const reset = useCallback(() => {
    setCurrentStep(0);
    setTriageData({
      area: null,
      subCategory: null,
      urgency: null,
      previousAttempt: null,
      estimatedRights: null
    });
    setIsComplete(false);
  }, []);

  return {
    currentStep,
    totalSteps: TOTAL_STEPS,
    triageData,
    isComplete,
    getCurrentStepData,
    submitStep,
    getEstimatedRights,
    getAreaLabel,
    reset
  };
};

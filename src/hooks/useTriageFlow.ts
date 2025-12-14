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
  urgency: string | null;
  previousAttempt: string | null;
  estimatedRights: string | null;
}

const triageSteps: TriageStep[] = [
  {
    id: 'area',
    question: 'Qual sua situação?',
    options: [
      { label: 'Problemas no Trabalho', value: 'trabalhista', icon: 'Briefcase' },
      { label: 'Questões Familiares', value: 'familia', icon: 'Users' },
      { label: 'Aposentadoria/INSS', value: 'previdenciario', icon: 'Shield' },
      { label: 'Outro Problema', value: 'outro', icon: 'HelpCircle' }
    ]
  },
  {
    id: 'urgency',
    question: 'Há quanto tempo você tem esse problema?',
    options: [
      { label: 'Menos de 1 mês', value: 'urgente', icon: 'AlertTriangle' },
      { label: '1 a 6 meses', value: 'medio', icon: 'Clock' },
      { label: 'Mais de 6 meses', value: 'longo', icon: 'Calendar' }
    ]
  },
  {
    id: 'previousAttempt',
    question: 'Já tentou resolver de outra forma?',
    options: [
      { label: 'Não, é meu primeiro contato', value: 'primeiro', icon: 'MessageSquare' },
      { label: 'Sim, mas não consegui', value: 'tentou', icon: 'RefreshCw' }
    ]
  }
];

const estimates: Record<string, Record<string, { min: number; max: number }>> = {
  trabalhista: {
    urgente: { min: 5000, max: 50000 },
    medio: { min: 3000, max: 30000 },
    longo: { min: 2000, max: 20000 }
  },
  familia: {
    urgente: { min: 1000, max: 15000 },
    medio: { min: 800, max: 10000 },
    longo: { min: 500, max: 8000 }
  },
  previdenciario: {
    urgente: { min: 10000, max: 100000 },
    medio: { min: 8000, max: 80000 },
    longo: { min: 5000, max: 50000 }
  },
  outro: {
    urgente: { min: 2000, max: 20000 },
    medio: { min: 1500, max: 15000 },
    longo: { min: 1000, max: 10000 }
  }
};

const areaLabels: Record<string, string> = {
  trabalhista: 'Direito Trabalhista',
  familia: 'Direito de Família',
  previdenciario: 'Direito Previdenciário',
  outro: 'Assessoria Jurídica'
};

export const useTriageFlow = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [triageData, setTriageData] = useState<TriageData>({
    area: null,
    urgency: null,
    previousAttempt: null,
    estimatedRights: null
  });
  const [isComplete, setIsComplete] = useState(false);

  const getCurrentStepData = useCallback(() => {
    return triageSteps[currentStep] || null;
  }, [currentStep]);

  const submitStep = useCallback((value: string) => {
    const stepId = triageSteps[currentStep]?.id;
    if (!stepId) return;

    setTriageData(prev => ({
      ...prev,
      [stepId]: value
    }));

    if (currentStep < triageSteps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      // Calcular estimativa quando terminar
      const area = currentStep === 0 ? value : triageData.area;
      const urgency = currentStep === 1 ? value : triageData.urgency;
      
      if (area && urgency) {
        const estimate = estimates[area]?.[urgency] || estimates.outro.medio;
        const estimatedValue = `R$ ${estimate.min.toLocaleString('pt-BR')} a R$ ${estimate.max.toLocaleString('pt-BR')}`;
        setTriageData(prev => ({
          ...prev,
          previousAttempt: value,
          estimatedRights: estimatedValue
        }));
      }
      
      setIsComplete(true);
    }
  }, [currentStep, triageData]);

  const getEstimatedRights = useCallback(() => {
    const { area, urgency } = triageData;
    if (!area || !urgency) return null;
    
    const estimate = estimates[area]?.[urgency] || estimates.outro.medio;
    return `R$ ${estimate.min.toLocaleString('pt-BR')} a R$ ${estimate.max.toLocaleString('pt-BR')}`;
  }, [triageData]);

  const getAreaLabel = useCallback(() => {
    return triageData.area ? areaLabels[triageData.area] : null;
  }, [triageData.area]);

  const reset = useCallback(() => {
    setCurrentStep(0);
    setTriageData({
      area: null,
      urgency: null,
      previousAttempt: null,
      estimatedRights: null
    });
    setIsComplete(false);
  }, []);

  const totalSteps = triageSteps.length;

  return {
    currentStep,
    totalSteps,
    triageData,
    isComplete,
    getCurrentStepData,
    submitStep,
    getEstimatedRights,
    getAreaLabel,
    reset
  };
};

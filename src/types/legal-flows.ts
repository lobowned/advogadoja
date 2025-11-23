import { LucideIcon } from "lucide-react";

export interface Question {
  id: string;
  type: 'text' | 'textarea' | 'date' | 'select' | 'radio' | 'number' | 'file' | 'email' | 'tel';
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  validation?: {
    pattern?: RegExp;
    type?: 'email' | 'tel' | 'cpf' | 'number';
    min?: number;
    max?: number;
    message?: string;
  };
  conditionalDisplay?: {
    dependsOn: string;
    value: string | string[];
  };
  hint?: string;
}

export interface LegalAction {
  id: string;
  nicheId: string;
  name: string;
  description: string;
  questions: Question[];
  commonCase?: boolean;
}

export interface LegalNiche {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  actions: LegalAction[];
}

export interface CaseAnswers {
  [questionId: string]: string | string[] | File[];
}

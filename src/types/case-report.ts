export interface FileInfo {
  name: string;
  size: number;
  type: string;
  url?: string;
}

export interface PreliminaryAnalysis {
  complexity: 'Baixa' | 'Média' | 'Alta';
  risks: string[];
  opportunities: string[];
  existingEvidences: string[];
  missingEvidences: string[];
  nextSteps: string[];
}

export interface PersonalData {
  nome: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  email: string;
  endereco: {
    cidade: string;
    estado: string;
  };
}

export interface CaseReport {
  protocolId: string;
  timestamp: Date;
  nicho: string;
  tipoAcao: string;
  respostasEspecificas: Record<string, any>;
  dadosPessoais: PersonalData;
  comoEncontrou: string;
  urgencia: string;
  preferenciaContato: string;
  documentos: FileInfo[];
  analisePreiliminar: PreliminaryAnalysis;
}

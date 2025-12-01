-- Criar tabela de casos
CREATE TABLE public.cases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  protocol_id TEXT UNIQUE NOT NULL,
  niche_id TEXT NOT NULL,
  action_id TEXT NOT NULL,
  status TEXT DEFAULT 'novo' CHECK (status IN ('novo', 'em_analise', 'em_andamento', 'concluido', 'arquivado')),
  urgency TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.cases ENABLE ROW LEVEL SECURITY;

-- Política: Casos são visíveis por todos (para MVP sem autenticação de usuários finais)
CREATE POLICY "Cases are viewable by everyone"
ON public.cases
FOR SELECT
USING (true);

-- Política: Qualquer um pode inserir casos (formulário público)
CREATE POLICY "Anyone can insert cases"
ON public.cases
FOR INSERT
WITH CHECK (true);

-- Criar tabela de respostas
CREATE TABLE public.case_answers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID REFERENCES public.cases(id) ON DELETE CASCADE NOT NULL,
  question_id TEXT NOT NULL,
  question_label TEXT NOT NULL,
  answer_value TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.case_answers ENABLE ROW LEVEL SECURITY;

-- Política: Respostas são visíveis por todos
CREATE POLICY "Case answers are viewable by everyone"
ON public.case_answers
FOR SELECT
USING (true);

-- Política: Qualquer um pode inserir respostas
CREATE POLICY "Anyone can insert case answers"
ON public.case_answers
FOR INSERT
WITH CHECK (true);

-- Criar tabela de documentos
CREATE TABLE public.case_documents (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID REFERENCES public.cases(id) ON DELETE CASCADE NOT NULL,
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER,
  file_type TEXT,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.case_documents ENABLE ROW LEVEL SECURITY;

-- Política: Documentos são visíveis por todos
CREATE POLICY "Case documents are viewable by everyone"
ON public.case_documents
FOR SELECT
USING (true);

-- Política: Qualquer um pode inserir documentos
CREATE POLICY "Anyone can insert case documents"
ON public.case_documents
FOR INSERT
WITH CHECK (true);

-- Criar tabela de análise preliminar
CREATE TABLE public.case_analysis (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  case_id UUID REFERENCES public.cases(id) ON DELETE CASCADE NOT NULL,
  complexity TEXT CHECK (complexity IN ('baixa', 'media', 'alta')),
  risks JSONB DEFAULT '[]'::jsonb,
  opportunities JSONB DEFAULT '[]'::jsonb,
  existing_evidences JSONB DEFAULT '[]'::jsonb,
  missing_evidences JSONB DEFAULT '[]'::jsonb,
  next_steps JSONB DEFAULT '[]'::jsonb,
  generated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE public.case_analysis ENABLE ROW LEVEL SECURITY;

-- Política: Análises são visíveis por todos
CREATE POLICY "Case analysis are viewable by everyone"
ON public.case_analysis
FOR SELECT
USING (true);

-- Política: Qualquer um pode inserir análises
CREATE POLICY "Anyone can insert case analysis"
ON public.case_analysis
FOR INSERT
WITH CHECK (true);

-- Criar função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER SET search_path = public;

-- Criar trigger para atualizar updated_at
CREATE TRIGGER update_cases_updated_at
BEFORE UPDATE ON public.cases
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Criar bucket de storage para documentos de casos
INSERT INTO storage.buckets (id, name, public)
VALUES ('case-documents', 'case-documents', false);

-- Políticas de storage: qualquer um pode fazer upload
CREATE POLICY "Anyone can upload case documents"
ON storage.objects
FOR INSERT
WITH CHECK (bucket_id = 'case-documents');

-- Políticas de storage: qualquer um pode visualizar
CREATE POLICY "Anyone can view case documents"
ON storage.objects
FOR SELECT
USING (bucket_id = 'case-documents');

-- Criar índices para melhor performance
CREATE INDEX idx_cases_protocol_id ON public.cases(protocol_id);
CREATE INDEX idx_cases_status ON public.cases(status);
CREATE INDEX idx_cases_created_at ON public.cases(created_at DESC);
CREATE INDEX idx_case_answers_case_id ON public.case_answers(case_id);
CREATE INDEX idx_case_documents_case_id ON public.case_documents(case_id);
CREATE INDEX idx_case_analysis_case_id ON public.case_analysis(case_id);
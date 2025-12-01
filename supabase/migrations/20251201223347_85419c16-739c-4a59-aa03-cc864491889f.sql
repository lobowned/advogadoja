-- Adicionar coluna para advogados dinâmicos
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS dynamic_lawyer JSONB DEFAULT NULL;
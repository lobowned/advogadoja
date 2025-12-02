-- Adicionar colunas para controle de follow-up
ALTER TABLE leads ADD COLUMN IF NOT EXISTS followup_sent_at timestamp with time zone;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS followup_count integer DEFAULT 0;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS last_activity_at timestamp with time zone DEFAULT now();

-- Criar índice para otimizar busca de leads inativos
CREATE INDEX IF NOT EXISTS idx_leads_last_activity ON leads(last_activity_at DESC) WHERE status IN ('new', 'in_progress');

-- Criar trigger para atualizar last_activity_at automaticamente
CREATE OR REPLACE FUNCTION update_lead_activity()
RETURNS TRIGGER AS $$
BEGIN
  IF (TG_OP = 'UPDATE' AND NEW.message_count > OLD.message_count) THEN
    NEW.last_activity_at = now();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_lead_activity
BEFORE UPDATE ON leads
FOR EACH ROW
EXECUTE FUNCTION update_lead_activity();
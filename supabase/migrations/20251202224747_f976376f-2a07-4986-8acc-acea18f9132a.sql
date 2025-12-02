-- Adicionar campos para sistema de proatividade, urgência e analytics
ALTER TABLE leads ADD COLUMN IF NOT EXISTS urgency_level TEXT DEFAULT 'baixa';
ALTER TABLE leads ADD COLUMN IF NOT EXISTS urgency_keywords TEXT[];
ALTER TABLE leads ADD COLUMN IF NOT EXISTS nudge_count INTEGER DEFAULT 0;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS last_nudge_at TIMESTAMPTZ;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS documents_mentioned TEXT[];
ALTER TABLE leads ADD COLUMN IF NOT EXISTS quick_replies_used TEXT[];
ALTER TABLE leads ADD COLUMN IF NOT EXISTS time_to_first_response_ms INTEGER;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS time_to_name_collected_ms INTEGER;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS time_to_phone_collected_ms INTEGER;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS structured_summary JSONB;
ALTER TABLE leads ADD COLUMN IF NOT EXISTS conversion_score DECIMAL(3,2);
ALTER TABLE leads ADD COLUMN IF NOT EXISTS session_start_at TIMESTAMPTZ DEFAULT now();

-- Índices para queries de analytics
CREATE INDEX IF NOT EXISTS idx_leads_urgency ON leads(urgency_level);
CREATE INDEX IF NOT EXISTS idx_leads_conversion ON leads(status) WHERE phone IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_leads_nudge ON leads(nudge_count, last_nudge_at);
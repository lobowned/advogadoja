-- Adicionar novos campos na tabela leads para coleta de informações do caso
ALTER TABLE public.leads
ADD COLUMN IF NOT EXISTS case_summary TEXT,
ADD COLUMN IF NOT EXISTS case_details JSONB DEFAULT '{}'::jsonb,
ADD COLUMN IF NOT EXISTS conversation_history JSONB DEFAULT '[]'::jsonb,
ADD COLUMN IF NOT EXISTS notification_sent BOOLEAN DEFAULT false,
ADD COLUMN IF NOT EXISTS notification_sent_at TIMESTAMP WITH TIME ZONE;

-- Criar índice para otimizar consultas de notificações não enviadas
CREATE INDEX IF NOT EXISTS idx_leads_notification_sent ON public.leads(notification_sent) WHERE notification_sent = false;
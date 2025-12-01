-- Habilitar REPLICA IDENTITY para capturar dados completos na tabela leads
ALTER TABLE leads REPLICA IDENTITY FULL;

-- Adicionar tabela leads à publicação realtime do Supabase
ALTER PUBLICATION supabase_realtime ADD TABLE leads;
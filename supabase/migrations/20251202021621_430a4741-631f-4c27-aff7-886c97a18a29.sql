-- Corrigir search_path da função update_lead_activity
CREATE OR REPLACE FUNCTION update_lead_activity()
RETURNS TRIGGER AS $$
BEGIN
  IF (TG_OP = 'UPDATE' AND NEW.message_count > OLD.message_count) THEN
    NEW.last_activity_at = now();
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql 
SET search_path = public;
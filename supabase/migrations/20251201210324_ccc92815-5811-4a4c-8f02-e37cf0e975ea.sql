-- Add pending_transfer_lawyer column to store pending transfer state
ALTER TABLE leads ADD COLUMN IF NOT EXISTS pending_transfer_lawyer TEXT;
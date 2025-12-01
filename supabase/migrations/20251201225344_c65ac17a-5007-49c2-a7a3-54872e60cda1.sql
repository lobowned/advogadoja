-- Add detected_problem column to leads table
ALTER TABLE public.leads ADD COLUMN IF NOT EXISTS detected_problem TEXT;
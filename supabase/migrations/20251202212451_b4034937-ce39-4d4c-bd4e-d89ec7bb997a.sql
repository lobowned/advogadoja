-- Create enum for test status
CREATE TYPE qa_test_status AS ENUM ('pending', 'running', 'passed', 'failed', 'error', 'timeout', 'skipped');

-- Create enum for run status
CREATE TYPE qa_run_status AS ENUM ('pending', 'running', 'completed', 'failed', 'cancelled');

-- Create enum for anomaly severity
CREATE TYPE qa_severity AS ENUM ('low', 'medium', 'high', 'critical');

-- Create enum for test category
CREATE TYPE qa_category AS ENUM ('triagem', 'transfer', 'lead', 'edge', 'stress', 'regression');

-- Execuções de teste
CREATE TABLE qa_test_runs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  run_name TEXT,
  run_type TEXT DEFAULT 'manual', -- 'manual', 'scheduled', 'stress', 'regression'
  status qa_run_status DEFAULT 'pending',
  total_tests INTEGER DEFAULT 0,
  passed INTEGER DEFAULT 0,
  failed INTEGER DEFAULT 0,
  skipped INTEGER DEFAULT 0,
  started_at TIMESTAMPTZ DEFAULT now(),
  completed_at TIMESTAMPTZ,
  duration_ms INTEGER,
  config JSONB DEFAULT '{}',
  summary JSONB DEFAULT '{}'
);

-- Resultados individuais
CREATE TABLE qa_test_results (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  run_id UUID REFERENCES qa_test_runs(id) ON DELETE CASCADE,
  scenario_id TEXT NOT NULL,
  scenario_name TEXT,
  category qa_category,
  status qa_test_status DEFAULT 'pending',
  input TEXT,
  expected_output JSONB,
  actual_output JSONB,
  response_time_ms INTEGER,
  assertions JSONB DEFAULT '[]',
  logs JSONB DEFAULT '[]',
  error_message TEXT,
  stack_trace TEXT,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Anomalias detectadas
CREATE TABLE qa_anomalies (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  type TEXT NOT NULL, -- 'response_time', 'error_rate', 'wrong_transfer', 'language', 'loop'
  severity qa_severity DEFAULT 'medium',
  description TEXT,
  context JSONB DEFAULT '{}',
  lead_id UUID REFERENCES leads(id),
  session_id TEXT,
  detected_at TIMESTAMPTZ DEFAULT now(),
  resolved_at TIMESTAMPTZ,
  resolution_notes TEXT
);

-- Métricas históricas
CREATE TABLE qa_metrics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  metric_name TEXT NOT NULL,
  metric_value NUMERIC,
  dimensions JSONB DEFAULT '{}',
  recorded_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE qa_test_runs ENABLE ROW LEVEL SECURITY;
ALTER TABLE qa_test_results ENABLE ROW LEVEL SECURITY;
ALTER TABLE qa_anomalies ENABLE ROW LEVEL SECURITY;
ALTER TABLE qa_metrics ENABLE ROW LEVEL SECURITY;

-- RLS Policies - Allow all access for admin use
CREATE POLICY "Allow all access to qa_test_runs" ON qa_test_runs FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to qa_test_results" ON qa_test_results FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to qa_anomalies" ON qa_anomalies FOR ALL USING (true) WITH CHECK (true);
CREATE POLICY "Allow all access to qa_metrics" ON qa_metrics FOR ALL USING (true) WITH CHECK (true);

-- Enable realtime for monitoring
ALTER PUBLICATION supabase_realtime ADD TABLE qa_test_runs;
ALTER PUBLICATION supabase_realtime ADD TABLE qa_test_results;
ALTER PUBLICATION supabase_realtime ADD TABLE qa_anomalies;
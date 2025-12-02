export type QATestStatus = 'pending' | 'running' | 'passed' | 'failed' | 'error' | 'timeout' | 'skipped';
export type QARunStatus = 'pending' | 'running' | 'completed' | 'failed' | 'cancelled';
export type QASeverity = 'low' | 'medium' | 'high' | 'critical';
export type QACategory = 'triagem' | 'transfer' | 'lead' | 'edge' | 'stress' | 'regression';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}

export interface TestAssertion {
  type: 'response_contains' | 'response_contains_any' | 'action_equals' | 'lawyer_transfer' | 'lawyer_transfer_any' | 'lead_field_saved' | 'response_time_under' | 'no_english';
  value: string | number | boolean;
  message: string;
  passed?: boolean;
}

export interface TestScenario {
  id: string;
  name: string;
  category: QACategory;
  priority: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  initialLawyer?: string;
  conversationHistory?: Message[];
  userMessage: string;
  assertions: TestAssertion[];
  tags?: string[];
}

export interface QATestRun {
  id: string;
  run_name: string | null;
  run_type: string;
  status: QARunStatus;
  total_tests: number;
  passed: number;
  failed: number;
  skipped: number;
  started_at: string;
  completed_at: string | null;
  duration_ms: number | null;
  config: Record<string, unknown>;
  summary: Record<string, unknown>;
}

export interface QATestResult {
  id: string;
  run_id: string | null;
  scenario_id: string;
  scenario_name: string | null;
  category: QACategory | null;
  status: QATestStatus;
  input: string | null;
  expected_output: Record<string, unknown> | null;
  actual_output: Record<string, unknown> | null;
  response_time_ms: number | null;
  assertions: TestAssertion[];
  logs: string[];
  error_message: string | null;
  stack_trace: string | null;
  created_at: string;
}

export interface QAAnomaly {
  id: string;
  type: string;
  severity: QASeverity;
  description: string | null;
  context: Record<string, unknown>;
  lead_id: string | null;
  session_id: string | null;
  detected_at: string;
  resolved_at: string | null;
  resolution_notes: string | null;
}

export interface QAMetric {
  id: string;
  metric_name: string;
  metric_value: number | null;
  dimensions: Record<string, unknown>;
  recorded_at: string;
}

export interface QADashboardStats {
  totalRuns: number;
  totalTests: number;
  passRate: number;
  avgResponseTime: number;
  anomaliesCount: number;
  lastRunAt: string | null;
}

export interface ReplayResult {
  originalMessage: Message;
  replayedMessage: Message;
  matched: boolean;
  differences: string[];
}

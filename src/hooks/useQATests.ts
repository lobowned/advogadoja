import { useState, useCallback, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { 
  QATestRun, 
  QATestResult, 
  QAAnomaly, 
  TestScenario, 
  QADashboardStats,
  QATestStatus,
  QARunStatus,
  TestAssertion
} from '@/types/qa-types';
import { qaScenarios } from '@/data/qa-scenarios';
import { lawyers } from '@/data/lawyers';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export const useQATests = () => {
  const [currentRun, setCurrentRun] = useState<QATestRun | null>(null);
  const [results, setResults] = useState<QATestResult[]>([]);
  const [anomalies, setAnomalies] = useState<QAAnomaly[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState({ current: 0, total: 0 });
  const [stats, setStats] = useState<QADashboardStats>({
    totalRuns: 0,
    totalTests: 0,
    passRate: 0,
    avgResponseTime: 0,
    anomaliesCount: 0,
    lastRunAt: null
  });

  // Fetch dashboard stats
  const fetchStats = useCallback(async () => {
    try {
      const [runsRes, resultsRes, anomaliesRes] = await Promise.all([
        supabase.from('qa_test_runs').select('*', { count: 'exact' }),
        supabase.from('qa_test_results').select('status, response_time_ms'),
        supabase.from('qa_anomalies').select('*', { count: 'exact' }).is('resolved_at', null)
      ]);

      const totalRuns = runsRes.count || 0;
      const allResults = resultsRes.data || [];
      const passedTests = allResults.filter(r => r.status === 'passed').length;
      const totalTests = allResults.length;
      const avgResponseTime = allResults.length > 0 
        ? allResults.reduce((acc, r) => acc + (r.response_time_ms || 0), 0) / allResults.length 
        : 0;

      const lastRun = runsRes.data?.sort((a, b) => 
        new Date(b.started_at).getTime() - new Date(a.started_at).getTime()
      )[0];

      setStats({
        totalRuns,
        totalTests,
        passRate: totalTests > 0 ? (passedTests / totalTests) * 100 : 0,
        avgResponseTime: Math.round(avgResponseTime),
        anomaliesCount: anomaliesRes.count || 0,
        lastRunAt: lastRun?.started_at || null
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  }, []);

  // Fetch recent anomalies
  const fetchAnomalies = useCallback(async () => {
    try {
      const { data, error } = await supabase
        .from('qa_anomalies')
        .select('*')
        .order('detected_at', { ascending: false })
        .limit(50);

      if (error) throw error;
      
      setAnomalies((data || []).map(a => ({
        ...a,
        severity: a.severity as QAAnomaly['severity'],
        context: a.context as Record<string, unknown>
      })));
    } catch (error) {
      console.error('Error fetching anomalies:', error);
    }
  }, []);

  // Create a new test run
  const createTestRun = async (runName: string, runType: string, totalTests: number): Promise<string> => {
    const { data, error } = await supabase
      .from('qa_test_runs')
      .insert({
        run_name: runName,
        run_type: runType,
        status: 'running' as QARunStatus,
        total_tests: totalTests,
        started_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error) throw error;
    
    setCurrentRun({
      ...data,
      status: data.status as QARunStatus,
      config: data.config as Record<string, unknown>,
      summary: data.summary as Record<string, unknown>
    });
    
    return data.id;
  };

  // Execute a single test scenario
  const executeScenario = async (scenario: TestScenario, runId: string): Promise<QATestResult> => {
    const startTime = Date.now();
    const sessionId = `test_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    let status: QATestStatus = 'running';
    let actualOutput: Record<string, unknown> = {};
    let errorMessage: string | null = null;
    const logs: string[] = [];
    const assertions: TestAssertion[] = [...scenario.assertions];

    try {
      logs.push(`[${new Date().toISOString()}] Iniciando teste: ${scenario.name}`);
      logs.push(`[${new Date().toISOString()}] Input: ${scenario.userMessage}`);

      // Call the lawyer-chat edge function
      const response = await fetch(`${SUPABASE_URL}/functions/v1/lawyer-chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`
        },
        body: JSON.stringify({
          message: scenario.userMessage,
          sessionId,
          conversationHistory: scenario.conversationHistory || [],
          currentLawyer: scenario.initialLawyer || null,
          isTestMode: true
        })
      });

      const responseTime = Date.now() - startTime;
      logs.push(`[${new Date().toISOString()}] Tempo de resposta: ${responseTime}ms`);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();
      actualOutput = data;
      logs.push(`[${new Date().toISOString()}] Resposta recebida`);

      // Run assertions
      let allPassed = true;
      for (const assertion of assertions) {
        let passed = false;

        switch (assertion.type) {
          case 'response_contains':
            passed = data.message?.toLowerCase().includes(String(assertion.value).toLowerCase());
            break;
          case 'action_equals':
            passed = data.action === assertion.value;
            break;
          case 'lawyer_transfer':
            // Look up lawyer by targetLawyerId and check specialty
            const targetLawyer = lawyers.find(l => l.id === data.targetLawyerId);
            passed = (data.action === 'suggest_transfer' || data.action === 'confirm_transfer') &&
                     targetLawyer?.specialty?.toLowerCase().includes(String(assertion.value).toLowerCase());
            break;
          case 'lead_field_saved':
            passed = data.leadData && data.leadData[assertion.value as string];
            break;
          case 'response_time_under':
            passed = responseTime < Number(assertion.value);
            break;
          case 'no_english':
            // Check if response contains common English words
            const englishWords = ['the', 'and', 'you', 'your', 'can', 'help', 'with', 'what', 'how', 'please'];
            const responseWords = (data.message || '').toLowerCase().split(/\s+/);
            const englishCount = responseWords.filter((w: string) => englishWords.includes(w)).length;
            passed = englishCount < 3; // Allow up to 2 common English words
            break;
        }

        assertion.passed = passed;
        logs.push(`[${new Date().toISOString()}] Assertion "${assertion.message}": ${passed ? '✓' : '✗'}`);
        
        if (!passed) allPassed = false;
      }

      status = allPassed ? 'passed' : 'failed';

      // Detect anomalies
      if (responseTime > 5000) {
        await reportAnomaly('response_time', 'medium', `Resposta lenta: ${responseTime}ms`, {
          scenario_id: scenario.id,
          response_time: responseTime
        }, sessionId);
      }

      // Check for English response
      const englishWords = ['the', 'and', 'you', 'your', 'can', 'help', 'with', 'what', 'how', 'please', 'hello', 'hi'];
      const responseWords = (data.message || '').toLowerCase().split(/\s+/);
      const englishCount = responseWords.filter((w: string) => englishWords.includes(w)).length;
      if (englishCount >= 5) {
        await reportAnomaly('language', 'critical', 'Resposta em inglês detectada', {
          scenario_id: scenario.id,
          message: data.message?.substring(0, 200)
        }, sessionId);
      }

    } catch (error) {
      status = 'error';
      errorMessage = error instanceof Error ? error.message : 'Unknown error';
      logs.push(`[${new Date().toISOString()}] ERRO: ${errorMessage}`);
    }

    const responseTime = Date.now() - startTime;

    // Save result to database
    const result: Omit<QATestResult, 'id' | 'created_at'> = {
      run_id: runId,
      scenario_id: scenario.id,
      scenario_name: scenario.name,
      category: scenario.category,
      status,
      input: scenario.userMessage,
      expected_output: { assertions: scenario.assertions },
      actual_output: actualOutput,
      response_time_ms: responseTime,
      assertions,
      logs,
      error_message: errorMessage,
      stack_trace: null
    };

    const { data: savedResult, error: saveError } = await supabase
      .from('qa_test_results')
      .insert([{
        run_id: runId,
        scenario_id: scenario.id,
        scenario_name: scenario.name,
        category: scenario.category,
        status,
        input: scenario.userMessage,
        expected_output: JSON.parse(JSON.stringify({ assertions: scenario.assertions })),
        actual_output: JSON.parse(JSON.stringify(actualOutput)),
        response_time_ms: responseTime,
        assertions: JSON.parse(JSON.stringify(assertions)),
        logs: JSON.parse(JSON.stringify(logs)),
        error_message: errorMessage,
        stack_trace: null
      }])
      .select()
      .single();

    if (saveError) {
      console.error('Error saving result:', saveError);
    }

    return {
      ...result,
      id: savedResult?.id || crypto.randomUUID(),
      created_at: new Date().toISOString()
    } as QATestResult;
  };

  // Report an anomaly
  const reportAnomaly = async (
    type: string,
    severity: QAAnomaly['severity'],
    description: string,
    context: Record<string, unknown>,
    sessionId?: string,
    leadId?: string
  ) => {
    try {
      await supabase.from('qa_anomalies').insert([{
        type,
        severity,
        description,
        context: JSON.parse(JSON.stringify(context)),
        session_id: sessionId,
        lead_id: leadId
      }]);
    } catch (error) {
      console.error('Error reporting anomaly:', error);
    }
  };

  // Run all scenarios
  const runAllScenarios = async (scenarios: TestScenario[] = qaScenarios) => {
    if (isRunning) return;

    setIsRunning(true);
    setProgress({ current: 0, total: scenarios.length });
    setResults([]);

    try {
      const runId = await createTestRun(
        `Test Run ${new Date().toLocaleString('pt-BR')}`,
        'manual',
        scenarios.length
      );

      let passed = 0;
      let failed = 0;
      const newResults: QATestResult[] = [];

      for (let i = 0; i < scenarios.length; i++) {
        const scenario = scenarios[i];
        setProgress({ current: i + 1, total: scenarios.length });

        const result = await executeScenario(scenario, runId);
        newResults.push(result);
        setResults([...newResults]);

        if (result.status === 'passed') {
          passed++;
        } else {
          failed++;
        }

        // Small delay between tests to avoid rate limiting
        await new Promise(resolve => setTimeout(resolve, 500));
      }

      // Update run with final stats
      const duration = Date.now() - new Date(currentRun?.started_at || Date.now()).getTime();
      await supabase
        .from('qa_test_runs')
        .update({
          status: 'completed' as QARunStatus,
          passed,
          failed,
          completed_at: new Date().toISOString(),
          duration_ms: duration,
          summary: {
            pass_rate: (passed / scenarios.length) * 100,
            categories: getCategoryBreakdown(newResults)
          }
        })
        .eq('id', runId);

      await fetchStats();

    } catch (error) {
      console.error('Error running tests:', error);
    } finally {
      setIsRunning(false);
    }
  };

  // Run scenarios by category
  const runByCategory = async (category: string) => {
    const filteredScenarios = qaScenarios.filter(s => s.category === category);
    await runAllScenarios(filteredScenarios);
  };

  // Run only critical scenarios
  const runCriticalScenarios = async () => {
    const criticalScenarios = qaScenarios.filter(s => s.priority === 'critical');
    await runAllScenarios(criticalScenarios);
  };

  // Get category breakdown
  const getCategoryBreakdown = (results: QATestResult[]) => {
    const categories = ['triagem', 'transfer', 'lead', 'edge', 'stress', 'regression'];
    const breakdown: Record<string, { passed: number; failed: number; total: number }> = {};

    for (const category of categories) {
      const categoryResults = results.filter(r => r.category === category);
      breakdown[category] = {
        passed: categoryResults.filter(r => r.status === 'passed').length,
        failed: categoryResults.filter(r => r.status !== 'passed').length,
        total: categoryResults.length
      };
    }

    return breakdown;
  };

  // Stop running tests
  const stopTests = () => {
    setIsRunning(false);
  };

  // Resolve an anomaly
  const resolveAnomaly = async (anomalyId: string, notes: string) => {
    try {
      await supabase
        .from('qa_anomalies')
        .update({
          resolved_at: new Date().toISOString(),
          resolution_notes: notes
        })
        .eq('id', anomalyId);

      await fetchAnomalies();
    } catch (error) {
      console.error('Error resolving anomaly:', error);
    }
  };

  // Fetch recent test runs
  const fetchRecentRuns = async (): Promise<QATestRun[]> => {
    try {
      const { data, error } = await supabase
        .from('qa_test_runs')
        .select('*')
        .order('started_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      
      return (data || []).map(run => ({
        ...run,
        status: run.status as QARunStatus,
        config: run.config as Record<string, unknown>,
        summary: run.summary as Record<string, unknown>
      }));
    } catch (error) {
      console.error('Error fetching runs:', error);
      return [];
    }
  };

  // Fetch results for a specific run
  const fetchRunResults = async (runId: string): Promise<QATestResult[]> => {
    try {
      const { data, error } = await supabase
        .from('qa_test_results')
        .select('*')
        .eq('run_id', runId)
        .order('created_at', { ascending: true });

      if (error) throw error;
      
      return (data || []).map(result => ({
        ...result,
        status: result.status as QATestStatus,
        category: result.category as QATestResult['category'],
        expected_output: result.expected_output as Record<string, unknown>,
        actual_output: result.actual_output as Record<string, unknown>,
        assertions: (result.assertions || []) as unknown as TestAssertion[],
        logs: result.logs as string[]
      }));
    } catch (error) {
      console.error('Error fetching results:', error);
      return [];
    }
  };

  // Real-time subscription for anomalies
  useEffect(() => {
    fetchStats();
    fetchAnomalies();

    const channel = supabase
      .channel('qa-anomalies')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'qa_anomalies'
        },
        (payload) => {
          setAnomalies(prev => [{
            ...payload.new as QAAnomaly,
            severity: (payload.new as QAAnomaly).severity,
            context: (payload.new as QAAnomaly).context
          }, ...prev]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchStats, fetchAnomalies]);

  return {
    // State
    currentRun,
    results,
    anomalies,
    isRunning,
    progress,
    stats,
    scenarios: qaScenarios,

    // Actions
    runAllScenarios,
    runByCategory,
    runCriticalScenarios,
    stopTests,
    executeScenario,
    reportAnomaly,
    resolveAnomaly,
    fetchStats,
    fetchAnomalies,
    fetchRecentRuns,
    fetchRunResults,
    getCategoryBreakdown
  };
};

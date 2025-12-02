import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseKey);

interface TestScenario {
  id: string;
  name: string;
  category: string;
  userMessage: string;
  conversationHistory?: Array<{ role: string; content: string }>;
  initialLawyer?: string;
  assertions: Array<{
    type: string;
    value: string | number | boolean;
    message: string;
  }>;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { action, payload } = await req.json();
    console.log(`[QA-Hub] Action: ${action}`);

    switch (action) {
      case 'run-test': {
        // Execute a single test scenario
        const { scenario, runId } = payload as { scenario: TestScenario; runId: string };
        const result = await executeTest(scenario, runId);
        return new Response(JSON.stringify(result), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      case 'run-suite': {
        // Execute multiple scenarios
        const { scenarios, runName } = payload as { scenarios: TestScenario[]; runName: string };
        
        // Create test run
        const { data: run, error: runError } = await supabase
          .from('qa_test_runs')
          .insert({
            run_name: runName,
            run_type: 'suite',
            status: 'running',
            total_tests: scenarios.length
          })
          .select()
          .single();

        if (runError) throw runError;

        // Execute tests in sequence
        const results = [];
        let passed = 0;
        let failed = 0;

        for (const scenario of scenarios) {
          const result = await executeTest(scenario, run.id);
          results.push(result);
          if (result.status === 'passed') passed++;
          else failed++;
        }

        // Update run status
        await supabase
          .from('qa_test_runs')
          .update({
            status: 'completed',
            passed,
            failed,
            completed_at: new Date().toISOString(),
            summary: { results: results.map(r => ({ id: r.scenario_id, status: r.status })) }
          })
          .eq('id', run.id);

        return new Response(JSON.stringify({ runId: run.id, results }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      case 'replay-conversation': {
        // Replay a real conversation
        const { leadId } = payload as { leadId: string };
        
        const { data: lead, error: leadError } = await supabase
          .from('leads')
          .select('*')
          .eq('id', leadId)
          .single();

        if (leadError) throw leadError;

        const conversationHistory = lead.conversation_history || [];
        const replayResults = [];

        for (let i = 0; i < conversationHistory.length; i++) {
          const msg = conversationHistory[i];
          if (msg.role === 'user') {
            const previousHistory = conversationHistory.slice(0, i);
            
            // Call lawyer-chat with the same message
            const response = await fetch(`${supabaseUrl}/functions/v1/lawyer-chat`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${supabaseKey}`
              },
              body: JSON.stringify({
                message: msg.content,
                sessionId: `replay_${leadId}_${Date.now()}`,
                conversationHistory: previousHistory,
                isTestMode: true
              })
            });

            const replayedResponse = await response.json();
            const originalResponse = conversationHistory[i + 1];

            replayResults.push({
              userMessage: msg.content,
              originalResponse: originalResponse?.content,
              replayedResponse: replayedResponse.message,
              matched: compareResponses(originalResponse?.content, replayedResponse.message)
            });
          }
        }

        return new Response(JSON.stringify({ leadId, replayResults }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      case 'stress-test': {
        // Run concurrent tests
        const { concurrency, duration, scenarios } = payload as { 
          concurrency: number; 
          duration: number; // seconds
          scenarios: TestScenario[];
        };

        const { data: run, error: runError } = await supabase
          .from('qa_test_runs')
          .insert({
            run_name: `Stress Test - ${concurrency} concurrent`,
            run_type: 'stress',
            status: 'running',
            config: { concurrency, duration }
          })
          .select()
          .single();

        if (runError) throw runError;

        const startTime = Date.now();
        const endTime = startTime + (duration * 1000);
        const results: Array<{ responseTime: number; status: string }> = [];

        while (Date.now() < endTime) {
          const batch = Array(concurrency).fill(null).map(async () => {
            const scenario = scenarios[Math.floor(Math.random() * scenarios.length)];
            const testStart = Date.now();
            
            try {
              const response = await fetch(`${supabaseUrl}/functions/v1/lawyer-chat`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${supabaseKey}`
                },
                body: JSON.stringify({
                  message: scenario.userMessage,
                  sessionId: `stress_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
                  isTestMode: true
                })
              });

              return {
                responseTime: Date.now() - testStart,
                status: response.ok ? 'success' : 'error'
              };
            } catch {
              return {
                responseTime: Date.now() - testStart,
                status: 'error'
              };
            }
          });

          const batchResults = await Promise.all(batch);
          results.push(...batchResults);

          // Small delay between batches
          await new Promise(resolve => setTimeout(resolve, 100));
        }

        // Calculate metrics
        const totalRequests = results.length;
        const successfulRequests = results.filter(r => r.status === 'success').length;
        const avgResponseTime = results.reduce((acc, r) => acc + r.responseTime, 0) / totalRequests;
        const sortedTimes = results.map(r => r.responseTime).sort((a, b) => a - b);
        const p50 = sortedTimes[Math.floor(totalRequests * 0.5)];
        const p95 = sortedTimes[Math.floor(totalRequests * 0.95)];
        const p99 = sortedTimes[Math.floor(totalRequests * 0.99)];

        // Update run
        await supabase
          .from('qa_test_runs')
          .update({
            status: 'completed',
            completed_at: new Date().toISOString(),
            total_tests: totalRequests,
            passed: successfulRequests,
            failed: totalRequests - successfulRequests,
            summary: {
              avgResponseTime,
              p50,
              p95,
              p99,
              throughput: totalRequests / duration,
              errorRate: ((totalRequests - successfulRequests) / totalRequests) * 100
            }
          })
          .eq('id', run.id);

        // Record metrics
        await supabase.from('qa_metrics').insert([
          { metric_name: 'stress_avg_response_time', metric_value: avgResponseTime, dimensions: { run_id: run.id } },
          { metric_name: 'stress_p95', metric_value: p95, dimensions: { run_id: run.id } },
          { metric_name: 'stress_throughput', metric_value: totalRequests / duration, dimensions: { run_id: run.id } }
        ]);

        return new Response(JSON.stringify({
          runId: run.id,
          metrics: { avgResponseTime, p50, p95, p99, throughput: totalRequests / duration, errorRate: ((totalRequests - successfulRequests) / totalRequests) * 100 }
        }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      case 'get-metrics': {
        // Get aggregated metrics
        const { period } = payload as { period: 'hour' | 'day' | 'week' };
        
        const periodMap = {
          hour: '1 hour',
          day: '24 hours',
          week: '7 days'
        };

        const { data: metrics, error } = await supabase
          .from('qa_metrics')
          .select('*')
          .gte('recorded_at', new Date(Date.now() - getPeriodMs(period)).toISOString())
          .order('recorded_at', { ascending: true });

        if (error) throw error;

        return new Response(JSON.stringify({ metrics }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      case 'report-anomaly': {
        // Report a new anomaly
        const { type, severity, description, context, sessionId, leadId } = payload;
        
        const { data, error } = await supabase
          .from('qa_anomalies')
          .insert({
            type,
            severity,
            description,
            context,
            session_id: sessionId,
            lead_id: leadId
          })
          .select()
          .single();

        if (error) throw error;

        return new Response(JSON.stringify({ anomaly: data }), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      default:
        return new Response(JSON.stringify({ error: 'Unknown action' }), {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
    }
  } catch (error) {
    console.error('[QA-Hub] Error:', error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' }
    });
  }
});

async function executeTest(scenario: TestScenario, runId: string) {
  const startTime = Date.now();
  const sessionId = `test_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  let status = 'running';
  let actualOutput: Record<string, unknown> = {};
  let errorMessage: string | null = null;
  const logs: string[] = [];

  try {
    logs.push(`[${new Date().toISOString()}] Starting test: ${scenario.name}`);

    const response = await fetch(`${supabaseUrl}/functions/v1/lawyer-chat`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseKey}`
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
    logs.push(`[${new Date().toISOString()}] Response time: ${responseTime}ms`);

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();
    actualOutput = data;

    // Validate assertions
    let allPassed = true;
    const assertions = scenario.assertions.map(assertion => {
      let passed = false;

      switch (assertion.type) {
        case 'response_contains':
          passed = data.message?.toLowerCase().includes(String(assertion.value).toLowerCase());
          break;
        case 'action_equals':
          passed = data.action === assertion.value;
          break;
        case 'lawyer_transfer':
          passed = data.suggestedLawyer?.specialty?.toLowerCase().includes(String(assertion.value).toLowerCase());
          break;
        case 'response_time_under':
          passed = responseTime < Number(assertion.value);
          break;
        case 'no_english':
          const englishWords = ['the', 'and', 'you', 'your', 'can', 'help'];
          const words = (data.message || '').toLowerCase().split(/\s+/);
          const englishCount = words.filter((w: string) => englishWords.includes(w)).length;
          passed = englishCount < 3;
          break;
      }

      if (!passed) allPassed = false;
      return { ...assertion, passed };
    });

    status = allPassed ? 'passed' : 'failed';

    // Save result
    await supabase.from('qa_test_results').insert({
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
      error_message: errorMessage
    });

    return {
      scenario_id: scenario.id,
      status,
      responseTime,
      assertions,
      actualOutput
    };

  } catch (error) {
    status = 'error';
    errorMessage = error instanceof Error ? error.message : 'Unknown error';
    logs.push(`[${new Date().toISOString()}] ERROR: ${errorMessage}`);

    await supabase.from('qa_test_results').insert({
      run_id: runId,
      scenario_id: scenario.id,
      scenario_name: scenario.name,
      category: scenario.category,
      status,
      input: scenario.userMessage,
      error_message: errorMessage,
      logs
    });

    return {
      scenario_id: scenario.id,
      status: 'error',
      errorMessage,
      logs
    };
  }
}

function compareResponses(original: string | undefined, replayed: string | undefined): boolean {
  if (!original || !replayed) return false;
  
  // Normalize strings for comparison
  const normalize = (s: string) => s.toLowerCase().replace(/[^\w\s]/g, '').trim();
  const orig = normalize(original);
  const rep = normalize(replayed);
  
  // Check for similarity (at least 70% matching words)
  const origWords = new Set(orig.split(/\s+/));
  const repWords = rep.split(/\s+/);
  const matchCount = repWords.filter(w => origWords.has(w)).length;
  
  return matchCount / repWords.length >= 0.7;
}

function getPeriodMs(period: string): number {
  switch (period) {
    case 'hour': return 60 * 60 * 1000;
    case 'day': return 24 * 60 * 60 * 1000;
    case 'week': return 7 * 24 * 60 * 60 * 1000;
    default: return 24 * 60 * 60 * 1000;
  }
}

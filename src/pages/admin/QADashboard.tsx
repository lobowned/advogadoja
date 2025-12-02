import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  TestTube2, 
  Activity, 
  AlertTriangle, 
  PlayCircle,
  ArrowLeft,
  RefreshCw
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useQATests } from '@/hooks/useQATests';
import { QAStatsCards } from '@/components/qa/QAStatsCards';
import { TestSuiteRunner } from '@/components/qa/TestSuiteRunner';
import { AnomalyDetector } from '@/components/qa/AnomalyDetector';
import { RealTimeMonitor } from '@/components/qa/RealTimeMonitor';
import { ConversationReplay } from '@/components/qa/ConversationReplay';

const QADashboard = () => {
  const {
    stats,
    results,
    anomalies,
    isRunning,
    progress,
    runAllScenarios,
    runByCategory,
    runCriticalScenarios,
    stopTests,
    resolveAnomaly,
    fetchStats
  } = useQATests();

  const [activeTab, setActiveTab] = useState('tests');

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/admin">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  <TestTube2 className="h-6 w-6 text-primary" />
                  Sistema de QA Enterprise
                </h1>
                <p className="text-sm text-muted-foreground">
                  Testes automatizados, monitoramento e detecção de anomalias
                </p>
              </div>
            </div>
            <Button variant="outline" size="sm" onClick={fetchStats}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Atualizar
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Stats Cards */}
        <QAStatsCards stats={stats} />

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 lg:w-auto lg:inline-grid">
            <TabsTrigger value="tests" className="flex items-center gap-2">
              <TestTube2 className="h-4 w-4" />
              <span className="hidden sm:inline">Testes</span>
            </TabsTrigger>
            <TabsTrigger value="monitor" className="flex items-center gap-2">
              <Activity className="h-4 w-4" />
              <span className="hidden sm:inline">Monitor</span>
            </TabsTrigger>
            <TabsTrigger value="anomalies" className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4" />
              <span className="hidden sm:inline">Anomalias</span>
              {anomalies.filter(a => !a.resolved_at).length > 0 && (
                <span className="bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
                  {anomalies.filter(a => !a.resolved_at).length}
                </span>
              )}
            </TabsTrigger>
            <TabsTrigger value="replay" className="flex items-center gap-2">
              <PlayCircle className="h-4 w-4" />
              <span className="hidden sm:inline">Replay</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tests" className="space-y-4">
            <TestSuiteRunner
              isRunning={isRunning}
              progress={progress}
              results={results}
              onRunAll={() => runAllScenarios()}
              onRunCategory={runByCategory}
              onRunCritical={runCriticalScenarios}
              onStop={stopTests}
            />
          </TabsContent>

          <TabsContent value="monitor">
            <RealTimeMonitor />
          </TabsContent>

          <TabsContent value="anomalies">
            <AnomalyDetector 
              anomalies={anomalies}
              onResolve={resolveAnomaly}
            />
          </TabsContent>

          <TabsContent value="replay">
            <ConversationReplay />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default QADashboard;

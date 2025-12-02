import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  Play, 
  Square, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  AlertTriangle,
  Filter,
  Zap
} from 'lucide-react';
import { QATestResult, QACategory } from '@/types/qa-types';
import { cn } from '@/lib/utils';

interface TestSuiteRunnerProps {
  isRunning: boolean;
  progress: { current: number; total: number };
  results: QATestResult[];
  onRunAll: () => void;
  onRunCategory: (category: string) => void;
  onRunCritical: () => void;
  onStop: () => void;
}

const categories: { id: QACategory; label: string; icon: string }[] = [
  { id: 'triagem', label: 'Triagem', icon: '🎯' },
  { id: 'transfer', label: 'Transferência', icon: '🔄' },
  { id: 'lead', label: 'Coleta de Leads', icon: '📝' },
  { id: 'edge', label: 'Edge Cases', icon: '⚡' },
  { id: 'stress', label: 'Stress', icon: '🔥' },
  { id: 'regression', label: 'Regressão', icon: '🔁' }
];

export const TestSuiteRunner = ({
  isRunning,
  progress,
  results,
  onRunAll,
  onRunCategory,
  onRunCritical,
  onStop
}: TestSuiteRunnerProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    categories.map(c => c.id)
  );
  const [showOnlyFailed, setShowOnlyFailed] = useState(false);

  const passedCount = results.filter(r => r.status === 'passed').length;
  const failedCount = results.filter(r => r.status === 'failed' || r.status === 'error').length;
  const progressPercent = progress.total > 0 ? (progress.current / progress.total) * 100 : 0;

  const filteredResults = results.filter(r => {
    if (showOnlyFailed && r.status === 'passed') return false;
    if (selectedCategories.length > 0 && r.category && !selectedCategories.includes(r.category)) return false;
    return true;
  });

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(c => c !== categoryId)
        : [...prev, categoryId]
    );
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'passed':
        return <CheckCircle2 className="h-4 w-4 text-green-500" />;
      case 'failed':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-orange-500" />;
      case 'running':
        return <Clock className="h-4 w-4 text-blue-500 animate-spin" />;
      default:
        return <Clock className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, string> = {
      passed: 'bg-green-500/10 text-green-500 border-green-500/20',
      failed: 'bg-red-500/10 text-red-500 border-red-500/20',
      error: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
      running: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      pending: 'bg-muted text-muted-foreground'
    };
    return variants[status] || variants.pending;
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Play className="h-5 w-5" />
            Suite de Testes
          </span>
          <div className="flex items-center gap-2">
            {isRunning ? (
              <Button variant="destructive" size="sm" onClick={onStop}>
                <Square className="h-4 w-4 mr-2" />
                Parar
              </Button>
            ) : (
              <>
                <Button variant="outline" size="sm" onClick={onRunCritical}>
                  <Zap className="h-4 w-4 mr-2" />
                  Críticos
                </Button>
                <Button size="sm" onClick={onRunAll}>
                  <Play className="h-4 w-4 mr-2" />
                  Executar Todos
                </Button>
              </>
            )}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Progress */}
        {isRunning && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Progresso</span>
              <span>{progress.current}/{progress.total} ({Math.round(progressPercent)}%)</span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </div>
        )}

        {/* Stats */}
        {results.length > 0 && (
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-muted/50 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold">{results.length}</div>
              <div className="text-xs text-muted-foreground">Total</div>
            </div>
            <div className="bg-green-500/10 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-green-500">{passedCount}</div>
              <div className="text-xs text-green-500/70">Passou</div>
            </div>
            <div className="bg-red-500/10 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-red-500">{failedCount}</div>
              <div className="text-xs text-red-500/70">Falhou</div>
            </div>
            <div className="bg-primary/10 rounded-lg p-3 text-center">
              <div className="text-2xl font-bold text-primary">
                {results.length > 0 ? Math.round((passedCount / results.length) * 100) : 0}%
              </div>
              <div className="text-xs text-primary/70">Taxa</div>
            </div>
          </div>
        )}

        {/* Category Filters */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Filter className="h-4 w-4" />
            Filtros
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant={selectedCategories.includes(cat.id) ? "secondary" : "outline"}
                size="sm"
                onClick={() => toggleCategory(cat.id)}
                className="text-xs"
              >
                {cat.icon} {cat.label}
              </Button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Checkbox 
              id="show-failed" 
              checked={showOnlyFailed}
              onCheckedChange={(checked) => setShowOnlyFailed(checked as boolean)}
            />
            <label htmlFor="show-failed" className="text-sm text-muted-foreground cursor-pointer">
              Mostrar apenas falhas
            </label>
          </div>
        </div>

        {/* Category Run Buttons */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <Button
              key={cat.id}
              variant="ghost"
              size="sm"
              onClick={() => onRunCategory(cat.id)}
              disabled={isRunning}
              className="text-xs"
            >
              <Play className="h-3 w-3 mr-1" />
              {cat.label}
            </Button>
          ))}
        </div>

        {/* Results List */}
        <ScrollArea className="h-[400px] border rounded-lg">
          <div className="p-2 space-y-1">
            {filteredResults.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                {results.length === 0 
                  ? 'Nenhum teste executado ainda' 
                  : 'Nenhum resultado com os filtros atuais'}
              </div>
            ) : (
              filteredResults.map((result, index) => (
                <div
                  key={result.id || index}
                  className={cn(
                    "flex items-center justify-between p-2 rounded-lg border transition-colors",
                    result.status === 'passed' && "border-green-500/20 bg-green-500/5",
                    result.status === 'failed' && "border-red-500/20 bg-red-500/5",
                    result.status === 'error' && "border-orange-500/20 bg-orange-500/5"
                  )}
                >
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    {getStatusIcon(result.status)}
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">
                        {result.scenario_name || result.scenario_id}
                      </div>
                      <div className="text-xs text-muted-foreground truncate">
                        {result.input?.substring(0, 50)}...
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {result.response_time_ms && (
                      <span className="text-xs text-muted-foreground">
                        {result.response_time_ms}ms
                      </span>
                    )}
                    <Badge variant="outline" className={cn("text-xs", getStatusBadge(result.status))}>
                      {result.status}
                    </Badge>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

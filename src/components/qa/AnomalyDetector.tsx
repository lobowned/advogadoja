import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Globe, 
  Repeat, 
  UserX,
  Search,
  X
} from 'lucide-react';
import { QAAnomaly } from '@/types/qa-types';
import { cn } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';

interface AnomalyDetectorProps {
  anomalies: QAAnomaly[];
  onResolve: (id: string, notes: string) => void;
}

const anomalyTypes: Record<string, { label: string; icon: React.ReactNode }> = {
  response_time: { label: 'Tempo de Resposta', icon: <Clock className="h-4 w-4" /> },
  language: { label: 'Idioma', icon: <Globe className="h-4 w-4" /> },
  wrong_transfer: { label: 'Transferência Errada', icon: <UserX className="h-4 w-4" /> },
  loop: { label: 'Loop Detectado', icon: <Repeat className="h-4 w-4" /> },
  error_rate: { label: 'Taxa de Erro', icon: <AlertTriangle className="h-4 w-4" /> }
};

const severityColors: Record<string, string> = {
  low: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
  medium: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
  high: 'bg-orange-500/10 text-orange-500 border-orange-500/20',
  critical: 'bg-red-500/10 text-red-500 border-red-500/20'
};

export const AnomalyDetector = ({ anomalies, onResolve }: AnomalyDetectorProps) => {
  const [search, setSearch] = useState('');
  const [selectedAnomaly, setSelectedAnomaly] = useState<QAAnomaly | null>(null);
  const [resolutionNotes, setResolutionNotes] = useState('');
  const [showResolved, setShowResolved] = useState(false);

  const filteredAnomalies = anomalies.filter(a => {
    if (!showResolved && a.resolved_at) return false;
    if (search) {
      const searchLower = search.toLowerCase();
      return (
        a.description?.toLowerCase().includes(searchLower) ||
        a.type.toLowerCase().includes(searchLower) ||
        a.session_id?.toLowerCase().includes(searchLower)
      );
    }
    return true;
  });

  const unresolvedCount = anomalies.filter(a => !a.resolved_at).length;
  const criticalCount = anomalies.filter(a => !a.resolved_at && a.severity === 'critical').length;

  const handleResolve = () => {
    if (selectedAnomaly) {
      onResolve(selectedAnomaly.id, resolutionNotes);
      setSelectedAnomaly(null);
      setResolutionNotes('');
    }
  };

  return (
    <>
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Detector de Anomalias
              {unresolvedCount > 0 && (
                <Badge variant="destructive" className="ml-2">
                  {unresolvedCount} ativas
                </Badge>
              )}
            </span>
            {criticalCount > 0 && (
              <Badge className="bg-red-500">
                {criticalCount} críticas
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Stats */}
          <div className="grid grid-cols-4 gap-2">
            {Object.entries(
              anomalies.reduce((acc, a) => {
                acc[a.severity] = (acc[a.severity] || 0) + 1;
                return acc;
              }, {} as Record<string, number>)
            ).map(([severity, count]) => (
              <div 
                key={severity} 
                className={cn("rounded-lg p-3 text-center border", severityColors[severity])}
              >
                <div className="text-xl font-bold">{count}</div>
                <div className="text-xs capitalize">{severity}</div>
              </div>
            ))}
          </div>

          {/* Search */}
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar anomalias..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>
            <Button
              variant={showResolved ? "secondary" : "outline"}
              size="sm"
              onClick={() => setShowResolved(!showResolved)}
            >
              {showResolved ? 'Ocultar Resolvidas' : 'Mostrar Resolvidas'}
            </Button>
          </div>

          {/* Anomalies List */}
          <ScrollArea className="h-[400px] border rounded-lg">
            <div className="p-2 space-y-2">
              {filteredAnomalies.length === 0 ? (
                <div className="text-center text-muted-foreground py-8">
                  {anomalies.length === 0 
                    ? 'Nenhuma anomalia detectada' 
                    : 'Nenhuma anomalia com os filtros atuais'}
                </div>
              ) : (
                filteredAnomalies.map((anomaly) => (
                  <div
                    key={anomaly.id}
                    className={cn(
                      "p-3 rounded-lg border transition-colors cursor-pointer hover:bg-muted/50",
                      anomaly.resolved_at && "opacity-60"
                    )}
                    onClick={() => !anomaly.resolved_at && setSelectedAnomaly(anomaly)}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2">
                        {anomalyTypes[anomaly.type]?.icon || <AlertTriangle className="h-4 w-4" />}
                        <div>
                          <div className="font-medium text-sm">
                            {anomalyTypes[anomaly.type]?.label || anomaly.type}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(anomaly.detected_at).toLocaleString('pt-BR')}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {anomaly.resolved_at ? (
                          <Badge variant="outline" className="bg-green-500/10 text-green-500">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Resolvida
                          </Badge>
                        ) : (
                          <Badge variant="outline" className={severityColors[anomaly.severity]}>
                            {anomaly.severity}
                          </Badge>
                        )}
                      </div>
                    </div>
                    
                    {anomaly.description && (
                      <p className="text-sm text-muted-foreground mt-2">
                        {anomaly.description}
                      </p>
                    )}

                    {anomaly.session_id && (
                      <div className="text-xs text-muted-foreground mt-1">
                        Sessão: {anomaly.session_id.substring(0, 20)}...
                      </div>
                    )}

                    {anomaly.resolution_notes && (
                      <div className="mt-2 p-2 bg-muted/50 rounded text-xs">
                        <strong>Resolução:</strong> {anomaly.resolution_notes}
                      </div>
                    )}
                  </div>
                ))
              )}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>

      {/* Resolution Dialog */}
      <Dialog open={!!selectedAnomaly} onOpenChange={() => setSelectedAnomaly(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Resolver Anomalia</DialogTitle>
            <DialogDescription>
              {selectedAnomaly?.description}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div>
              <strong className="text-sm">Tipo:</strong>{' '}
              {anomalyTypes[selectedAnomaly?.type || '']?.label || selectedAnomaly?.type}
            </div>
            <div>
              <strong className="text-sm">Severidade:</strong>{' '}
              <Badge variant="outline" className={severityColors[selectedAnomaly?.severity || 'medium']}>
                {selectedAnomaly?.severity}
              </Badge>
            </div>
            {selectedAnomaly?.context && Object.keys(selectedAnomaly.context).length > 0 && (
              <div>
                <strong className="text-sm">Contexto:</strong>
                <pre className="text-xs bg-muted p-2 rounded mt-1 overflow-auto">
                  {JSON.stringify(selectedAnomaly.context, null, 2)}
                </pre>
              </div>
            )}
            <div>
              <label className="text-sm font-medium">Notas de Resolução</label>
              <Textarea
                value={resolutionNotes}
                onChange={(e) => setResolutionNotes(e.target.value)}
                placeholder="Descreva como a anomalia foi resolvida..."
                className="mt-1"
              />
            </div>
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedAnomaly(null)}>
              Cancelar
            </Button>
            <Button onClick={handleResolve}>
              <CheckCircle className="h-4 w-4 mr-2" />
              Marcar como Resolvida
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Activity, 
  MessageSquare, 
  Clock, 
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  User
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';

interface ActiveSession {
  id: string;
  session_id: string;
  name: string | null;
  assigned_lawyer: string | null;
  message_count: number;
  last_activity_at: string;
  status: string | null;
  specialty: string | null;
}

interface SystemMetrics {
  activeConversations: number;
  messagesLastHour: number;
  avgResponseTime: number;
  errorRate: number;
}

export const RealTimeMonitor = () => {
  const [activeSessions, setActiveSessions] = useState<ActiveSession[]>([]);
  const [metrics, setMetrics] = useState<SystemMetrics>({
    activeConversations: 0,
    messagesLastHour: 0,
    avgResponseTime: 0,
    errorRate: 0
  });
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // Fetch active sessions
    const fetchActiveSessions = async () => {
      const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000).toISOString();
      
      const { data, error } = await supabase
        .from('leads')
        .select('id, session_id, name, assigned_lawyer, message_count, last_activity_at, status, specialty')
        .gte('last_activity_at', oneHourAgo)
        .order('last_activity_at', { ascending: false })
        .limit(20);

      if (error) {
        console.error('Error fetching sessions:', error);
        return;
      }

      setActiveSessions(data || []);
      setMetrics(prev => ({
        ...prev,
        activeConversations: data?.length || 0,
        messagesLastHour: data?.reduce((acc, s) => acc + (s.message_count || 0), 0) || 0
      }));
    };

    fetchActiveSessions();

    // Real-time subscription
    const channel = supabase
      .channel('real-time-monitor')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'leads'
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setActiveSessions(prev => [{
              id: payload.new.id,
              session_id: payload.new.session_id,
              name: payload.new.name,
              assigned_lawyer: payload.new.assigned_lawyer,
              message_count: payload.new.message_count,
              last_activity_at: payload.new.last_activity_at,
              status: payload.new.status,
              specialty: payload.new.specialty
            }, ...prev].slice(0, 20));
          } else if (payload.eventType === 'UPDATE') {
            setActiveSessions(prev => 
              prev.map(s => s.id === payload.new.id ? {
                ...s,
                name: payload.new.name,
                assigned_lawyer: payload.new.assigned_lawyer,
                message_count: payload.new.message_count,
                last_activity_at: payload.new.last_activity_at,
                status: payload.new.status,
                specialty: payload.new.specialty
              } : s)
            );
          }
        }
      )
      .subscribe((status) => {
        setIsConnected(status === 'SUBSCRIBED');
      });

    // Refresh every 30 seconds
    const interval = setInterval(fetchActiveSessions, 30000);

    return () => {
      supabase.removeChannel(channel);
      clearInterval(interval);
    };
  }, []);

  const getTimeSince = (timestamp: string) => {
    const seconds = Math.floor((Date.now() - new Date(timestamp).getTime()) / 1000);
    if (seconds < 60) return `${seconds}s`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
    return `${Math.floor(seconds / 3600)}h`;
  };

  const getStatusColor = (status: string | null) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500';
      case 'in_progress':
        return 'bg-yellow-500';
      case 'completed':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between">
          <span className="flex items-center gap-2">
            <Activity className="h-5 w-5" />
            Monitor em Tempo Real
          </span>
          <Badge variant={isConnected ? "default" : "destructive"} className="text-xs">
            {isConnected ? (
              <>
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                Conectado
              </>
            ) : (
              <>
                <AlertCircle className="h-3 w-3 mr-1" />
                Desconectado
              </>
            )}
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Metrics */}
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold">
              <MessageSquare className="h-5 w-5 text-primary" />
              {metrics.activeConversations}
            </div>
            <div className="text-xs text-muted-foreground">Ativas</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold">
              <TrendingUp className="h-5 w-5 text-green-500" />
              {metrics.messagesLastHour}
            </div>
            <div className="text-xs text-muted-foreground">Msgs/hora</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold">
              <Clock className="h-5 w-5 text-blue-500" />
              {metrics.avgResponseTime || '-'}
            </div>
            <div className="text-xs text-muted-foreground">Avg (ms)</div>
          </div>
          <div className="bg-muted/50 rounded-lg p-3 text-center">
            <div className="flex items-center justify-center gap-1 text-2xl font-bold">
              <AlertCircle className="h-5 w-5 text-red-500" />
              {metrics.errorRate.toFixed(1)}%
            </div>
            <div className="text-xs text-muted-foreground">Erros</div>
          </div>
        </div>

        {/* Active Sessions */}
        <ScrollArea className="h-[350px] border rounded-lg">
          <div className="p-2 space-y-2">
            {activeSessions.length === 0 ? (
              <div className="text-center text-muted-foreground py-8">
                Nenhuma conversa ativa no momento
              </div>
            ) : (
              activeSessions.map((session) => (
                <div
                  key={session.id}
                  className="p-3 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className={cn("w-2 h-2 rounded-full", getStatusColor(session.status))} />
                      <div>
                        <div className="flex items-center gap-2">
                          <User className="h-3 w-3 text-muted-foreground" />
                          <span className="font-medium text-sm">
                            {session.name || 'Anônimo'}
                          </span>
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {session.session_id?.substring(0, 15)}...
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-xs">
                        <MessageSquare className="h-3 w-3" />
                        {session.message_count || 0} msgs
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {getTimeSince(session.last_activity_at)} atrás
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-2">
                    {session.assigned_lawyer && (
                      <Badge variant="outline" className="text-xs">
                        {session.assigned_lawyer}
                      </Badge>
                    )}
                    {session.specialty && (
                      <Badge variant="secondary" className="text-xs">
                        {session.specialty}
                      </Badge>
                    )}
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

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  Phone, 
  MessageSquare, 
  AlertTriangle,
  Clock,
  Target,
  Zap
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ConversionStats {
  totalLeads: number;
  leadsWithName: number;
  leadsWithPhone: number;
  leadsContacted: number;
  avgMessageCount: number;
  urgentCases: number;
  avgTimeToContact: number | null;
  conversionRate: number;
  nameCollectionRate: number;
  phoneCollectionRate: number;
}

export const ConversionAnalytics = () => {
  const [stats, setStats] = useState<ConversionStats | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [recentActivity, setRecentActivity] = useState<any[]>([]);

  const fetchStats = async () => {
    try {
      // Buscar estatísticas agregadas
      const { data: leads, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      const totalLeads = leads?.length || 0;
      const leadsWithName = leads?.filter(l => l.name).length || 0;
      const leadsWithPhone = leads?.filter(l => l.phone).length || 0;
      const leadsContacted = leads?.filter(l => l.status === 'contacted').length || 0;
      const urgentCases = leads?.filter(l => {
        const lead = l as any;
        return lead.urgency_level === 'critica' || lead.urgency_level === 'alta';
      }).length || 0;
      
      const messageCounts = leads?.map(l => l.message_count || 0) || [];
      const avgMessageCount = messageCounts.length > 0 
        ? messageCounts.reduce((a, b) => a + b, 0) / messageCounts.length 
        : 0;

      // Calcular tempo médio até contato (para leads com telefone)
      const leadsWithContactTime = leads?.filter(l => {
        const lead = l as any;
        return l.phone && lead.time_to_phone_collected_ms;
      }) || [];
      const avgTimeToContact = leadsWithContactTime.length > 0
        ? leadsWithContactTime.reduce((a, b) => a + ((b as any).time_to_phone_collected_ms || 0), 0) / leadsWithContactTime.length / 1000 / 60
        : null;

      setStats({
        totalLeads,
        leadsWithName,
        leadsWithPhone,
        leadsContacted,
        avgMessageCount,
        urgentCases,
        avgTimeToContact,
        conversionRate: totalLeads > 0 ? (leadsContacted / totalLeads) * 100 : 0,
        nameCollectionRate: totalLeads > 0 ? (leadsWithName / totalLeads) * 100 : 0,
        phoneCollectionRate: totalLeads > 0 ? (leadsWithPhone / totalLeads) * 100 : 0
      });

      // Atividade recente (últimos 5)
      setRecentActivity(leads?.slice(0, 5) || []);
    } catch (error) {
      console.error('Error fetching conversion stats:', error);
    }
  };

  useEffect(() => {
    fetchStats();

    // Realtime subscription
    const channel = supabase
      .channel('conversion_analytics')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'leads' },
        () => {
          console.log('📊 Lead updated, refreshing stats...');
          fetchStats();
        }
      )
      .subscribe((status) => {
        setIsConnected(status === 'SUBSCRIBED');
      });

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  if (!stats) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map(i => (
          <Card key={i} className="animate-pulse">
            <CardContent className="pt-6">
              <div className="h-8 bg-muted rounded mb-2" />
              <div className="h-4 bg-muted rounded w-1/2" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Status de conexão */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Analytics em Tempo Real</h3>
        <Badge variant={isConnected ? "default" : "secondary"} className="gap-1">
          <div className={cn(
            "w-2 h-2 rounded-full",
            isConnected ? "bg-green-500 animate-pulse" : "bg-gray-400"
          )} />
          {isConnected ? "Ao vivo" : "Conectando..."}
        </Badge>
      </div>

      {/* Grid de métricas principais */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard
          title="Total de Leads"
          value={stats.totalLeads}
          icon={Users}
          color="blue"
        />
        <StatCard
          title="Taxa de Nome"
          value={`${stats.nameCollectionRate.toFixed(1)}%`}
          subtitle={`${stats.leadsWithName} leads`}
          icon={Target}
          color="green"
          trend={stats.nameCollectionRate > 15 ? 'up' : 'down'}
        />
        <StatCard
          title="Taxa de Telefone"
          value={`${stats.phoneCollectionRate.toFixed(1)}%`}
          subtitle={`${stats.leadsWithPhone} leads`}
          icon={Phone}
          color="purple"
          trend={stats.phoneCollectionRate > 10 ? 'up' : 'down'}
        />
        <StatCard
          title="Taxa Conversão"
          value={`${stats.conversionRate.toFixed(1)}%`}
          subtitle={`${stats.leadsContacted} contatos`}
          icon={Zap}
          color="yellow"
          trend={stats.conversionRate > 15 ? 'up' : 'down'}
        />
      </div>

      {/* Métricas secundárias */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <StatCard
          title="Média de Mensagens"
          value={stats.avgMessageCount.toFixed(1)}
          icon={MessageSquare}
          color="indigo"
          small
        />
        <StatCard
          title="Casos Urgentes"
          value={stats.urgentCases}
          icon={AlertTriangle}
          color="red"
          small
          highlight={stats.urgentCases > 0}
        />
        <StatCard
          title="Tempo até Contato"
          value={stats.avgTimeToContact ? `${stats.avgTimeToContact.toFixed(0)}min` : 'N/A'}
          icon={Clock}
          color="orange"
          small
        />
      </div>

      {/* Atividade recente */}
      {recentActivity.length > 0 && (
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Atividade Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {recentActivity.map((lead) => (
                <div 
                  key={lead.id} 
                  className="flex items-center justify-between text-sm py-2 border-b last:border-0"
                >
                  <div className="flex items-center gap-2">
                    <div className={cn(
                      "w-2 h-2 rounded-full",
                      lead.phone ? "bg-green-500" : 
                      lead.name ? "bg-yellow-500" : "bg-gray-300"
                    )} />
                    <span className="font-medium">{lead.name || 'Anônimo'}</span>
                    {lead.detected_problem && (
                      <Badge variant="outline" className="text-xs">
                        {lead.detected_problem}
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-xs">
                    <span>{lead.message_count || 0} msgs</span>
                  {(lead as any).urgency_level && (lead as any).urgency_level !== 'baixa' && (
                      <Badge 
                        variant={(lead as any).urgency_level === 'critica' ? 'destructive' : 'secondary'}
                        className="text-[10px]"
                      >
                        {(lead as any).urgency_level}
                      </Badge>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: React.ElementType;
  color: 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'orange' | 'indigo';
  trend?: 'up' | 'down';
  small?: boolean;
  highlight?: boolean;
}

const colorClasses = {
  blue: 'text-blue-600 bg-blue-100',
  green: 'text-green-600 bg-green-100',
  purple: 'text-purple-600 bg-purple-100',
  yellow: 'text-yellow-600 bg-yellow-100',
  red: 'text-red-600 bg-red-100',
  orange: 'text-orange-600 bg-orange-100',
  indigo: 'text-indigo-600 bg-indigo-100'
};

const StatCard = ({ title, value, subtitle, icon: Icon, color, trend, small, highlight }: StatCardProps) => {
  return (
    <Card className={cn(
      small && "py-0",
      highlight && "border-red-300 bg-red-50"
    )}>
      <CardContent className={cn("pt-4", small && "py-3")}>
        <div className="flex items-center justify-between">
          <div className={cn("p-2 rounded-lg", colorClasses[color])}>
            <Icon className={cn("w-4 h-4", small && "w-3.5 h-3.5")} />
          </div>
          {trend && (
            trend === 'up' ? (
              <TrendingUp className="w-4 h-4 text-green-500" />
            ) : (
              <TrendingDown className="w-4 h-4 text-red-500" />
            )
          )}
        </div>
        <div className="mt-3">
          <p className={cn(
            "font-bold",
            small ? "text-xl" : "text-2xl"
          )}>{value}</p>
          <p className={cn(
            "text-muted-foreground",
            small ? "text-[10px]" : "text-xs"
          )}>{title}</p>
          {subtitle && (
            <p className="text-[10px] text-muted-foreground">{subtitle}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ConversionAnalytics;

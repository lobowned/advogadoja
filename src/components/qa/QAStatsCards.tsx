import { Card, CardContent } from '@/components/ui/card';
import { 
  TestTube2, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  TrendingUp,
  Calendar
} from 'lucide-react';
import { QADashboardStats } from '@/types/qa-types';

interface QAStatsCardsProps {
  stats: QADashboardStats;
}

export const QAStatsCards = ({ stats }: QAStatsCardsProps) => {
  const cards = [
    {
      title: 'Total de Execuções',
      value: stats.totalRuns,
      icon: TestTube2,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Testes Executados',
      value: stats.totalTests,
      icon: CheckCircle2,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10'
    },
    {
      title: 'Taxa de Sucesso',
      value: `${stats.passRate.toFixed(1)}%`,
      icon: TrendingUp,
      color: stats.passRate >= 90 ? 'text-green-500' : stats.passRate >= 70 ? 'text-yellow-500' : 'text-red-500',
      bgColor: stats.passRate >= 90 ? 'bg-green-500/10' : stats.passRate >= 70 ? 'bg-yellow-500/10' : 'bg-red-500/10'
    },
    {
      title: 'Tempo Médio',
      value: `${stats.avgResponseTime}ms`,
      icon: Clock,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Anomalias Ativas',
      value: stats.anomaliesCount,
      icon: AlertTriangle,
      color: stats.anomaliesCount > 0 ? 'text-red-500' : 'text-green-500',
      bgColor: stats.anomaliesCount > 0 ? 'bg-red-500/10' : 'bg-green-500/10'
    },
    {
      title: 'Última Execução',
      value: stats.lastRunAt 
        ? new Date(stats.lastRunAt).toLocaleDateString('pt-BR', { 
            day: '2-digit', 
            month: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
          })
        : 'Nunca',
      icon: Calendar,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {cards.map((card, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className={`p-2 rounded-lg ${card.bgColor}`}>
                <card.icon className={`h-5 w-5 ${card.color}`} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{card.title}</p>
                <p className={`text-lg font-bold ${card.color}`}>{card.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

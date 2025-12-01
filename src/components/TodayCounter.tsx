import { useAttendance } from '@/contexts/AttendanceContext';
import { TrendingUp } from 'lucide-react';

const TodayCounter = () => {
  const { todayCount, totalCount, isLoading } = useAttendance();
  
  if (isLoading) {
    return (
      <span>
        <span className="font-semibold">+5.000</span> atendimentos
      </span>
    );
  }
  
  return (
    <div className="flex items-center gap-2 sm:gap-4">
      {/* Contador de hoje com animação */}
      {todayCount > 0 && (
        <>
          <div className="flex items-center gap-1.5 bg-green-500/20 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full">
            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
            <span className="font-semibold animate-pulse">{todayCount}</span>
            <span className="hidden sm:inline">hoje</span>
            <span className="sm:hidden">hj</span>
          </div>
          <span>•</span>
        </>
      )}
      
      {/* Total histórico */}
      <span>
        <span className="font-semibold">+{totalCount.toLocaleString('pt-BR')}</span> atendimentos
      </span>
    </div>
  );
};

export default TodayCounter;

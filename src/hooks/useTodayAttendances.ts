import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useTodayAttendances = () => {
  const [todayCount, setTodayCount] = useState(0);
  const [totalCount, setTotalCount] = useState(5000); // Base histórica
  const [isLoading, setIsLoading] = useState(true);

  // Buscar contagem inicial
  useEffect(() => {
    const fetchCounts = async () => {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // Contar leads de hoje
      const { count: todayLeads } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true })
        .gte('created_at', today.toISOString());
      
      // Contar total de leads
      const { count: totalLeads } = await supabase
        .from('leads')
        .select('*', { count: 'exact', head: true });
      
      setTodayCount(todayLeads || 0);
      setTotalCount(5000 + (totalLeads || 0)); // Base + reais
      setIsLoading(false);
    };
    
    fetchCounts();
  }, []);

  // Subscription em tempo real
  useEffect(() => {
    const channel = supabase
      .channel('attendance-counter')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'leads'
        },
        (payload) => {
          // Verificar se é de hoje
          const createdAt = new Date(payload.new.created_at);
          const today = new Date();
          if (createdAt.toDateString() === today.toDateString()) {
            setTodayCount(prev => prev + 1);
          }
          setTotalCount(prev => prev + 1);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { todayCount, totalCount, isLoading };
};

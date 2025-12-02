import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export interface Lead {
  id: string;
  created_at: string;
  name: string | null;
  phone: string | null;
  email: string | null;
  detected_problem: string | null;
  assigned_lawyer: string | null;
  specialty: string | null;
  status: string | null;
  message_count: number | null;
  conversation_history: any;
  case_summary: string | null;
  rating: number | null;
}

export interface LeadFilters {
  status?: string;
  lawyer?: string;
  specialty?: string;
  dateFrom?: string;
  dateTo?: string;
  search?: string;
}

export interface LeadStats {
  total: number;
  today: number;
  pending: number;
  withContact: number;
  conversionRate: number;
}

export const useLeads = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [stats, setStats] = useState<LeadStats>({
    total: 0,
    today: 0,
    pending: 0,
    withContact: 0,
    conversionRate: 0,
  });
  const [isLoading, setIsLoading] = useState(true);

  const fetchLeads = async (filters?: LeadFilters) => {
    setIsLoading(true);
    try {
      let query = supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (filters?.status && filters.status !== 'all') {
        query = query.eq('status', filters.status);
      }

      if (filters?.lawyer) {
        query = query.eq('assigned_lawyer', filters.lawyer);
      }

      if (filters?.specialty) {
        query = query.ilike('specialty', `%${filters.specialty}%`);
      }

      if (filters?.dateFrom) {
        query = query.gte('created_at', filters.dateFrom);
      }

      if (filters?.dateTo) {
        query = query.lte('created_at', filters.dateTo);
      }

      if (filters?.search) {
        query = query.or(`name.ilike.%${filters.search}%,phone.ilike.%${filters.search}%,email.ilike.%${filters.search}%`);
      }

      const { data, error } = await query;

      if (error) throw error;

      setLeads(data || []);
      calculateStats(data || []);
    } catch (error) {
      console.error('Error fetching leads:', error);
      toast({
        title: 'Erro ao carregar leads',
        description: 'Tente novamente mais tarde',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const calculateStats = (leadsData: Lead[]) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const total = leadsData.length;
    const todayCount = leadsData.filter(
      (lead) => new Date(lead.created_at) >= today
    ).length;
    const pending = leadsData.filter(
      (lead) => lead.status === 'new' || lead.status === 'in_progress'
    ).length;
    const withContact = leadsData.filter(
      (lead) => lead.phone || lead.email
    ).length;
    const conversionRate = total > 0 ? (withContact / total) * 100 : 0;

    setStats({
      total,
      today: todayCount,
      pending,
      withContact,
      conversionRate,
    });
  };

  const updateLeadStatus = async (id: string, status: string) => {
    try {
      const { error } = await supabase
        .from('leads')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      toast({
        title: 'Status atualizado',
        description: 'O status do lead foi alterado com sucesso',
      });

      fetchLeads();
    } catch (error) {
      console.error('Error updating lead status:', error);
      toast({
        title: 'Erro ao atualizar status',
        description: 'Tente novamente mais tarde',
        variant: 'destructive',
      });
    }
  };

  const exportLeadsToCsv = (leadsToExport: Lead[]) => {
    const headers = [
      'Data',
      'Nome',
      'Telefone',
      'Email',
      'Problema',
      'Advogado',
      'Especialidade',
      'Status',
      'Mensagens',
    ];

    const rows = leadsToExport.map((lead) => [
      new Date(lead.created_at).toLocaleDateString('pt-BR'),
      lead.name || 'Não informado',
      lead.phone || '-',
      lead.email || '-',
      lead.detected_problem || '-',
      lead.assigned_lawyer || '-',
      lead.specialty || '-',
      lead.status || 'new',
      lead.message_count || 0,
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: 'Exportação concluída',
      description: `${leadsToExport.length} leads exportados com sucesso`,
    });
  };

  useEffect(() => {
    fetchLeads();

    const channel = supabase
      .channel('leads-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'leads',
        },
        () => {
          fetchLeads();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return {
    leads,
    stats,
    isLoading,
    fetchLeads,
    updateLeadStatus,
    exportLeadsToCsv,
  };
};

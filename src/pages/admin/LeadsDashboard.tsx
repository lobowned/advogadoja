import { Button } from '@/components/ui/button';
import { Download, RefreshCw } from 'lucide-react';
import { LeadStats } from '@/components/admin/LeadStats';
import { LeadsTable } from '@/components/admin/LeadsTable';
import { LeadFilters } from '@/components/admin/LeadFilters';
import { FollowupTester } from '@/components/admin/FollowupTester';
import { ConversionAnalytics } from '@/components/admin/ConversionAnalytics';
import { useLeads, LeadFilters as LeadFiltersType } from '@/hooks/useLeads';

const LeadsDashboard = () => {
  const { leads, stats, isLoading, fetchLeads, updateLeadStatus, exportLeadsToCsv } = useLeads();

  const handleFilterChange = (filters: LeadFiltersType) => {
    fetchLeads(filters);
  };

  const handleExport = () => {
    exportLeadsToCsv(leads);
  };

  const handleRefresh = () => {
    fetchLeads();
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard de Leads</h1>
            <p className="text-muted-foreground">
              Gerencie e acompanhe todos os leads do sistema
            </p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" onClick={handleRefresh}>
              <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
            </Button>
            <Button onClick={handleExport}>
              <Download className="mr-2 h-4 w-4" />
              Exportar CSV
            </Button>
          </div>
        </div>

        <LeadStats stats={stats} />

        <ConversionAnalytics />

        <FollowupTester />

        <div className="space-y-4">
          <LeadFilters onFilterChange={handleFilterChange} />
          <LeadsTable leads={leads} onUpdateStatus={updateLeadStatus} />
        </div>
      </div>
    </div>
  );
};

export default LeadsDashboard;

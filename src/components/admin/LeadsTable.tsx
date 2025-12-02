import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, Phone, Mail } from 'lucide-react';
import { Lead } from '@/hooks/useLeads';
import { LeadDetailSheet } from './LeadDetailSheet';

interface LeadsTableProps {
  leads: Lead[];
  onUpdateStatus: (id: string, status: string) => void;
}

const getStatusBadge = (status: string | null) => {
  switch (status) {
    case 'new':
      return <Badge variant="default">Novo</Badge>;
    case 'in_progress':
      return <Badge className="bg-yellow-100 text-yellow-800">Em atendimento</Badge>;
    case 'converted':
      return <Badge className="bg-green-100 text-green-800">Convertido</Badge>;
    case 'archived':
      return <Badge variant="secondary">Arquivado</Badge>;
    default:
      return <Badge variant="outline">Indefinido</Badge>;
  }
};

export const LeadsTable = ({ leads, onUpdateStatus }: LeadsTableProps) => {
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const openLeadDetail = (lead: Lead) => {
    setSelectedLead(lead);
    setSheetOpen(true);
  };

  if (leads.length === 0) {
    return (
      <div className="flex h-[400px] items-center justify-center text-muted-foreground">
        Nenhum lead encontrado
      </div>
    );
  }

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Cliente</TableHead>
              <TableHead>Contato</TableHead>
              <TableHead>Problema</TableHead>
              <TableHead>Advogado</TableHead>
              <TableHead>Especialidade</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-center">Msgs</TableHead>
              <TableHead className="text-right">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads.map((lead) => (
              <TableRow key={lead.id}>
                <TableCell className="whitespace-nowrap">
                  {new Date(lead.created_at).toLocaleDateString('pt-BR')}
                  <br />
                  <span className="text-xs text-muted-foreground">
                    {new Date(lead.created_at).toLocaleTimeString('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </TableCell>
                <TableCell className="font-medium">
                  {lead.name || (
                    <span className="text-muted-foreground">Não informado</span>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    {lead.phone && (
                      <div className="flex items-center gap-1 text-sm">
                        <Phone className="h-3 w-3" />
                        {lead.phone}
                      </div>
                    )}
                    {lead.email && (
                      <div className="flex items-center gap-1 text-sm">
                        <Mail className="h-3 w-3" />
                        {lead.email}
                      </div>
                    )}
                    {!lead.phone && !lead.email && (
                      <span className="text-muted-foreground">-</span>
                    )}
                  </div>
                </TableCell>
                <TableCell className="max-w-[200px]">
                  <div className="truncate" title={lead.detected_problem || ''}>
                    {lead.detected_problem || '-'}
                  </div>
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {lead.assigned_lawyer || '-'}
                </TableCell>
                <TableCell className="whitespace-nowrap">
                  {lead.specialty || '-'}
                </TableCell>
                <TableCell>{getStatusBadge(lead.status)}</TableCell>
                <TableCell className="text-center">
                  {lead.message_count || 0}
                </TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => openLeadDetail(lead)}
                  >
                    <Eye className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <LeadDetailSheet
        lead={selectedLead}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
        onUpdateStatus={onUpdateStatus}
      />
    </>
  );
};

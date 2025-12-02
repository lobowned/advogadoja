import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  User,
  Phone,
  Mail,
  Scale,
  UserCheck,
  MessageSquare,
  Star,
  ExternalLink,
  Archive,
  CheckCircle,
} from 'lucide-react';
import { Lead } from '@/hooks/useLeads';
import { ConversationViewer } from './ConversationViewer';

interface LeadDetailSheetProps {
  lead: Lead | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
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

export const LeadDetailSheet = ({
  lead,
  open,
  onOpenChange,
  onUpdateStatus,
}: LeadDetailSheetProps) => {
  if (!lead) return null;

  const openWhatsApp = () => {
    if (lead.phone) {
      const cleanPhone = lead.phone.replace(/\D/g, '');
      window.open(`https://wa.me/55${cleanPhone}`, '_blank');
    }
  };

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="w-full sm:max-w-xl overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            Lead #{lead.id.slice(0, 8)}
            {getStatusBadge(lead.status)}
          </SheetTitle>
          <SheetDescription>
            Criado em {new Date(lead.created_at).toLocaleDateString('pt-BR')} às{' '}
            {new Date(lead.created_at).toLocaleTimeString('pt-BR', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm">
              <User className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Nome:</span>
              <span>{lead.name || 'Não informado'}</span>
            </div>

            {lead.phone && (
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">WhatsApp:</span>
                <span>{lead.phone}</span>
                <Button size="sm" variant="ghost" onClick={openWhatsApp}>
                  <ExternalLink className="h-3 w-3" />
                </Button>
              </div>
            )}

            {lead.email && (
              <div className="flex items-center gap-2 text-sm">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Email:</span>
                <span className="break-all">{lead.email}</span>
              </div>
            )}

            {lead.rating && (
              <div className="flex items-center gap-2 text-sm">
                <Star className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Avaliação:</span>
                <span>{lead.rating}/5</span>
              </div>
            )}
          </div>

          <Separator />

          <div className="space-y-3">
            {lead.detected_problem && (
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <Scale className="h-4 w-4 text-muted-foreground" />
                  Problema:
                </div>
                <p className="text-sm pl-6">{lead.detected_problem}</p>
              </div>
            )}

            {lead.assigned_lawyer && (
              <div className="flex items-center gap-2 text-sm">
                <UserCheck className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Advogado:</span>
                <span>{lead.assigned_lawyer}</span>
              </div>
            )}

            {lead.specialty && (
              <div className="flex items-center gap-2 text-sm">
                <Scale className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Especialidade:</span>
                <span>{lead.specialty}</span>
              </div>
            )}

            <div className="flex items-center gap-2 text-sm">
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
              <span className="font-medium">Mensagens:</span>
              <span>{lead.message_count || 0}</span>
            </div>
          </div>

          {lead.case_summary && (
            <>
              <Separator />
              <div className="space-y-2">
                <h3 className="text-sm font-medium">Resumo do Caso:</h3>
                <p className="text-sm text-muted-foreground">{lead.case_summary}</p>
              </div>
            </>
          )}

          <Separator />

          <div className="space-y-2">
            <h3 className="text-sm font-medium">Histórico da Conversa:</h3>
            <ConversationViewer
              conversationHistory={lead.conversation_history || []}
            />
          </div>

          <Separator />

          <div className="flex flex-wrap gap-2">
            {lead.phone && (
              <Button onClick={openWhatsApp} className="flex-1">
                <Phone className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            )}

            {lead.status !== 'in_progress' && (
              <Button
                variant="outline"
                onClick={() => onUpdateStatus(lead.id, 'in_progress')}
                className="flex-1"
              >
                <CheckCircle className="h-4 w-4 mr-2" />
                Marcar Atendido
              </Button>
            )}

            {lead.status !== 'archived' && (
              <Button
                variant="outline"
                onClick={() => onUpdateStatus(lead.id, 'archived')}
                className="flex-1"
              >
                <Archive className="h-4 w-4 mr-2" />
                Arquivar
              </Button>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

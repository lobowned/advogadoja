import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { 
  PlayCircle, 
  Search, 
  CheckCircle2, 
  XCircle,
  MessageSquare,
  ArrowRight,
  Loader2
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';

interface Lead {
  id: string;
  name: string | null;
  session_id: string | null;
  message_count: number | null;
  created_at: string;
  conversation_history: Array<{ role: string; content: string }>;
  specialty: string | null;
}

interface ReplayResult {
  userMessage: string;
  originalResponse: string;
  replayedResponse: string;
  matched: boolean;
}

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;

export const ConversationReplay = () => {
  const [search, setSearch] = useState('');
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [replayResults, setReplayResults] = useState<ReplayResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isReplaying, setIsReplaying] = useState(false);

  const searchLeads = async () => {
    if (!search.trim()) return;
    
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('id, name, session_id, message_count, created_at, conversation_history, specialty')
        .or(`name.ilike.%${search}%,session_id.ilike.%${search}%`)
        .order('created_at', { ascending: false })
        .limit(20);

      if (error) throw error;
      
      setLeads((data || []).map(lead => ({
        ...lead,
        conversation_history: (lead.conversation_history as Array<{ role: string; content: string }>) || []
      })));
    } catch (error) {
      console.error('Error searching leads:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const replayConversation = async (lead: Lead) => {
    setSelectedLead(lead);
    setIsReplaying(true);
    setReplayResults([]);

    try {
      const history = lead.conversation_history || [];
      const results: ReplayResult[] = [];

      for (let i = 0; i < history.length; i++) {
        const msg = history[i];
        if (msg.role === 'user') {
          const previousHistory = history.slice(0, i);
          
          // Call the lawyer-chat function
          const response = await fetch(`${SUPABASE_URL}/functions/v1/lawyer-chat`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`
            },
            body: JSON.stringify({
              message: msg.content,
              sessionId: `replay_${lead.id}_${Date.now()}`,
              conversationHistory: previousHistory,
              isTestMode: true
            })
          });

          const data = await response.json();
          const originalResponse = history[i + 1]?.content || '';
          const replayedResponse = data.message || '';

          results.push({
            userMessage: msg.content,
            originalResponse,
            replayedResponse,
            matched: compareResponses(originalResponse, replayedResponse)
          });
        }
      }

      setReplayResults(results);
    } catch (error) {
      console.error('Error replaying conversation:', error);
    } finally {
      setIsReplaying(false);
    }
  };

  const compareResponses = (original: string, replayed: string): boolean => {
    if (!original || !replayed) return false;
    
    const normalize = (s: string) => s.toLowerCase().replace(/[^\w\s]/g, '').trim();
    const origWords = new Set(normalize(original).split(/\s+/));
    const repWords = normalize(replayed).split(/\s+/);
    const matchCount = repWords.filter(w => origWords.has(w)).length;
    
    return matchCount / repWords.length >= 0.5;
  };

  const matchedCount = replayResults.filter(r => r.matched).length;
  const totalCount = replayResults.length;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2">
          <PlayCircle className="h-5 w-5" />
          Replay de Conversas
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Search */}
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome ou sessão..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && searchLeads()}
              className="pl-9"
            />
          </div>
          <Button onClick={searchLeads} disabled={isLoading}>
            {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Buscar'}
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Leads List */}
          <div className="space-y-2">
            <h4 className="text-sm font-medium">Conversas Encontradas</h4>
            <ScrollArea className="h-[400px] border rounded-lg">
              <div className="p-2 space-y-2">
                {leads.length === 0 ? (
                  <div className="text-center text-muted-foreground py-8 text-sm">
                    Busque por conversas para replay
                  </div>
                ) : (
                  leads.map((lead) => (
                    <div
                      key={lead.id}
                      className={cn(
                        "p-3 rounded-lg border cursor-pointer transition-colors",
                        selectedLead?.id === lead.id 
                          ? "border-primary bg-primary/5" 
                          : "hover:bg-muted/50"
                      )}
                      onClick={() => setSelectedLead(lead)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium text-sm">{lead.name || 'Anônimo'}</div>
                          <div className="text-xs text-muted-foreground">
                            {new Date(lead.created_at).toLocaleDateString('pt-BR')}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="text-xs">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            {lead.message_count || 0}
                          </Badge>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={(e) => {
                              e.stopPropagation();
                              replayConversation(lead);
                            }}
                            disabled={isReplaying}
                          >
                            {isReplaying && selectedLead?.id === lead.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <PlayCircle className="h-4 w-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                      {lead.specialty && (
                        <Badge variant="outline" className="mt-2 text-xs">
                          {lead.specialty}
                        </Badge>
                      )}
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </div>

          {/* Replay Results */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-medium">Resultado do Replay</h4>
              {replayResults.length > 0 && (
                <Badge variant={matchedCount === totalCount ? "default" : "destructive"}>
                  {matchedCount}/{totalCount} compatíveis
                </Badge>
              )}
            </div>
            <ScrollArea className="h-[400px] border rounded-lg">
              <div className="p-2 space-y-3">
                {replayResults.length === 0 ? (
                  <div className="text-center text-muted-foreground py-8 text-sm">
                    {isReplaying ? (
                      <div className="flex flex-col items-center gap-2">
                        <Loader2 className="h-6 w-6 animate-spin" />
                        Executando replay...
                      </div>
                    ) : (
                      'Selecione uma conversa e clique em replay'
                    )}
                  </div>
                ) : (
                  replayResults.map((result, index) => (
                    <div key={index} className="space-y-2 pb-3 border-b last:border-0">
                      {/* User Message */}
                      <div className="flex justify-end">
                        <div className="bg-primary text-primary-foreground rounded-lg px-3 py-2 max-w-[80%]">
                          <p className="text-xs">{result.userMessage}</p>
                        </div>
                      </div>

                      {/* Responses Comparison */}
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-muted/50 rounded-lg p-2">
                          <div className="text-xs font-medium mb-1 text-muted-foreground">
                            Original
                          </div>
                          <p className="text-xs">{result.originalResponse.substring(0, 150)}...</p>
                        </div>
                        <div className={cn(
                          "rounded-lg p-2",
                          result.matched ? "bg-green-500/10" : "bg-red-500/10"
                        )}>
                          <div className="flex items-center gap-1 text-xs font-medium mb-1">
                            {result.matched ? (
                              <CheckCircle2 className="h-3 w-3 text-green-500" />
                            ) : (
                              <XCircle className="h-3 w-3 text-red-500" />
                            )}
                            Replay
                          </div>
                          <p className="text-xs">{result.replayedResponse.substring(0, 150)}...</p>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </ScrollArea>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

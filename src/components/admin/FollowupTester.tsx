import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2, Send, CheckCircle, XCircle } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from '@/hooks/use-toast';

export const FollowupTester = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<any>(null);

  const testFollowup = async () => {
    setIsLoading(true);
    setResult(null);

    try {
      const { data, error } = await supabase.functions.invoke('send-followup', {
        body: { manual_trigger: true },
      });

      if (error) throw error;

      setResult(data);
      
      toast({
        title: 'Teste concluído',
        description: `${data.successful || 0} follow-ups enviados com sucesso`,
      });
    } catch (error) {
      console.error('Erro ao testar follow-up:', error);
      setResult({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Erro desconhecido' 
      });
      
      toast({
        title: 'Erro no teste',
        description: 'Não foi possível executar o teste de follow-up',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Testar Sistema de Follow-up</CardTitle>
        <CardDescription>
          Execute manualmente o processo de follow-up para testar o sistema.
          Leads inativos há mais de 2 horas receberão uma mensagem de reengajamento.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button 
          onClick={testFollowup} 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Executando...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Executar Follow-up Agora
            </>
          )}
        </Button>

        {result && (
          <Alert variant={result.success ? 'default' : 'destructive'}>
            <div className="flex items-start gap-2">
              {result.success ? (
                <CheckCircle className="h-4 w-4 mt-0.5" />
              ) : (
                <XCircle className="h-4 w-4 mt-0.5" />
              )}
              <div className="flex-1">
                <AlertDescription>
                  {result.success ? (
                    <div className="space-y-2">
                      <p className="font-medium">{result.message}</p>
                      <div className="text-sm space-y-1">
                        <p>• Leads processados: {result.processed || 0}</p>
                        <p>• Enviados com sucesso: {result.successful || 0}</p>
                        <p>• Falhas: {result.failed || 0}</p>
                      </div>
                    </div>
                  ) : (
                    <p>{result.error || 'Erro ao executar follow-up'}</p>
                  )}
                </AlertDescription>
              </div>
            </div>
          </Alert>
        )}

        <div className="text-sm text-muted-foreground space-y-2">
          <p className="font-medium">ℹ️ Como funciona:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Busca leads sem atividade há mais de 2 horas</li>
            <li>Máximo de 3 follow-ups por lead</li>
            <li>Mensagens personalizadas por tentativa</li>
            <li>Execução automática a cada 2 horas via cron job</li>
            <li>Atualiza contador de follow-ups no banco</li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

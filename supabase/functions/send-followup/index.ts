import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.86.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface Lead {
  id: string;
  name: string | null;
  phone: string | null;
  detected_problem: string | null;
  assigned_lawyer: string | null;
  followup_count: number;
  last_activity_at: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('🔄 Iniciando processo de follow-up automático...');

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Buscar leads sem resposta há mais de 2 horas
    const twoHoursAgo = new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString();
    
    const { data: inactiveLeads, error: fetchError } = await supabase
      .from('leads')
      .select('*')
      .in('status', ['new', 'in_progress'])
      .lt('last_activity_at', twoHoursAgo)
      .is('followup_sent_at', null)
      .lt('followup_count', 3) // Máximo 3 follow-ups
      .not('phone', 'is', null);

    if (fetchError) {
      console.error('❌ Erro ao buscar leads:', fetchError);
      throw fetchError;
    }

    console.log(`📊 Encontrados ${inactiveLeads?.length || 0} leads para follow-up`);

    if (!inactiveLeads || inactiveLeads.length === 0) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Nenhum lead necessita follow-up no momento',
          processed: 0 
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Processar cada lead
    const results = await Promise.all(
      inactiveLeads.map(async (lead: Lead) => {
        try {
          console.log(`📱 Processando lead ${lead.id} - ${lead.name || 'Sem nome'}`);

          // Preparar mensagem personalizada
          const name = lead.name || 'olá';
          const problem = lead.detected_problem 
            ? `sobre ${lead.detected_problem.toLowerCase()}` 
            : 'sobre seu caso';
          
          let message = '';
          
          if (lead.followup_count === 0) {
            message = `Oi ${name}! Tudo bem? Estamos aguardando seu retorno ${problem}. Posso ajudar com mais alguma informação? 😊`;
          } else if (lead.followup_count === 1) {
            message = `Olá ${name}! Notei que ainda não conseguimos finalizar sua consulta ${problem}. Há algo em que posso esclarecer? Estou aqui para ajudar! 📋`;
          } else {
            message = `${name}, esta é minha última tentativa de contato ${problem}. Se precisar de ajuda jurídica, estarei à disposição. Um abraço! 👋`;
          }

          // Enviar WhatsApp
          const { error: whatsappError } = await supabase.functions.invoke(
            'send-whatsapp-notification',
            {
              body: {
                phone: lead.phone,
                message: message,
              },
            }
          );

          if (whatsappError) {
            console.error(`❌ Erro ao enviar WhatsApp para ${lead.phone}:`, whatsappError);
            return { 
              leadId: lead.id, 
              success: false, 
              error: whatsappError.message 
            };
          }

          // Atualizar lead
          const { error: updateError } = await supabase
            .from('leads')
            .update({
              followup_sent_at: new Date().toISOString(),
              followup_count: lead.followup_count + 1,
              updated_at: new Date().toISOString(),
            })
            .eq('id', lead.id);

          if (updateError) {
            console.error(`❌ Erro ao atualizar lead ${lead.id}:`, updateError);
            return { 
              leadId: lead.id, 
              success: false, 
              error: updateError.message 
            };
          }

          console.log(`✅ Follow-up enviado com sucesso para ${lead.name || lead.phone}`);
          
          return { 
            leadId: lead.id, 
            success: true,
            phone: lead.phone,
            followupCount: lead.followup_count + 1
          };

        } catch (error) {
          console.error(`❌ Erro ao processar lead ${lead.id}:`, error);
          const errorMessage = error instanceof Error ? error.message : String(error);
          return { 
            leadId: lead.id, 
            success: false, 
            error: errorMessage 
          };
        }
      })
    );

    const successCount = results.filter(r => r.success).length;
    const failureCount = results.filter(r => !r.success).length;

    console.log(`✅ Follow-ups enviados: ${successCount}`);
    console.log(`❌ Follow-ups falharam: ${failureCount}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Processo de follow-up concluído',
        processed: results.length,
        successful: successCount,
        failed: failureCount,
        results: results,
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('❌ Erro geral no processo de follow-up:', error);
    const errorMessage = error instanceof Error ? error.message : String(error);
    const errorStack = error instanceof Error ? error.stack : undefined;
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: errorMessage,
        details: errorStack
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});

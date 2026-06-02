import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface LeadData {
  name: string;
  phone: string;
  email?: string;
  specialty?: string;
  assigned_lawyer?: string;
  case_summary?: string;
  case_details?: any;
  message_count?: number;
  created_at?: string;
  rating?: number;
  detected_problem?: string;
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { leadData, isEndConversation } = await req.json() as { leadData: LeadData; isEndConversation?: boolean };
    
    console.log("=== WhatsApp Notification Request ===");
    console.log("Lead Data:", JSON.stringify(leadData, null, 2));
    console.log("Is End Conversation:", isEndConversation);
    
    const ZAPI_INSTANCE_ID = Deno.env.get("ZAPI_INSTANCE_ID");
    const ZAPI_TOKEN = Deno.env.get("ZAPI_TOKEN");
    const ZAPI_CLIENT_TOKEN = Deno.env.get("ZAPI_CLIENT_TOKEN");
    
    console.log("Z-API Configuration:", {
      instanceId: ZAPI_INSTANCE_ID ? `${ZAPI_INSTANCE_ID.substring(0, 5)}...` : 'NOT SET',
      token: ZAPI_TOKEN ? 'SET' : 'NOT SET',
      clientToken: ZAPI_CLIENT_TOKEN ? 'SET' : 'NOT SET'
    });
    
    if (!ZAPI_INSTANCE_ID || !ZAPI_TOKEN || !ZAPI_CLIENT_TOKEN) {
      throw new Error("Z-API credentials not configured (missing instance, token or client-token)");
    }

    // Formatar a mensagem
    const message = formatWhatsAppMessage(leadData, isEndConversation || false);
    console.log("Formatted message length:", message.length);
    
    // Enviar via Z-API
    const zapiUrl = `https://api.z-api.io/instances/${ZAPI_INSTANCE_ID}/token/${ZAPI_TOKEN}/send-text`;
    
    console.log("Sending to Z-API URL:", zapiUrl.replace(ZAPI_TOKEN || '', 'TOKEN_HIDDEN'));
    console.log("Target WhatsApp:", "5571997092633");
    
    const response = await fetch(zapiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Token': ZAPI_CLIENT_TOKEN,
      },
      body: JSON.stringify({
        phone: "5571997092633",
        message: message
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("=== Z-API Error ===");
      console.error("Status:", response.status);
      console.error("Response:", errorText);
      throw new Error(`Z-API error: ${response.status}`);
    }

    const result = await response.json();
    console.log("=== WhatsApp notification sent successfully ===");
    console.log("Z-API Response:", JSON.stringify(result, null, 2));

    return new Response(
      JSON.stringify({ success: true, result }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error("Error sending WhatsApp notification:", error);
    return new Response(
      JSON.stringify({ 
        error: error instanceof Error ? error.message : "Unknown error" 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});

function formatWhatsAppMessage(lead: LeadData, isEndConversation: boolean = false): string {
  const timestamp = lead.created_at 
    ? new Date(lead.created_at).toLocaleString('pt-BR', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    : new Date().toLocaleString('pt-BR', { 
        day: '2-digit', 
        month: '2-digit', 
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });

  // Mapear specialty para nome legível - MAPEAMENTO COMPLETO
  const specialtyNames: Record<string, string> = {
    'familia': 'Direito de Família',
    'FAMILIA': 'Direito de Família',
    'trabalhista': 'Direito Trabalhista',
    'TRABALHISTA': 'Direito Trabalhista',
    'civil': 'Direito Civil',
    'CIVIL': 'Direito Civil',
    'transito': 'Direito de Trânsito Administrativo',
    'TRANSITO': 'Direito de Trânsito Administrativo',
    'TRÂNSITO': 'Direito de Trânsito Administrativo',
    'previdenciario': 'Direito Previdenciário',
    'PREVIDENCIARIO': 'Direito Previdenciário',
    'PREVIDENCIÁRIO': 'Direito Previdenciário',
    'penal': 'Direito Penal',
    'PENAL': 'Direito Penal',
    'consumidor': 'Direito do Consumidor',
    'CONSUMIDOR': 'Direito do Consumidor',
    'empresarial': 'Direito Empresarial',
    'EMPRESARIAL': 'Direito Empresarial',
    'imobiliario': 'Direito Imobiliário',
    'IMOBILIARIO': 'Direito Imobiliário',
    'IMOBILIÁRIO': 'Direito Imobiliário',
    'tributario': 'Direito Tributário',
    'TRIBUTARIO': 'Direito Tributário',
    'TRIBUTÁRIO': 'Direito Tributário'
  };

  const specialtyName = lead.specialty 
    ? (specialtyNames[lead.specialty] || lead.specialty)
    : 'Não identificada';

  let message = isEndConversation 
    ? `🏁 *CONVERSA FINALIZADA*\n`
    : `🔔 *NOVO LEAD - ${specialtyName}*\n`;
  message += `━━━━━━━━━━━━━━━━━━━\n\n`;
  
  // DADOS DO CLIENTE (destaque para identificação)
  message += `👤 *Cliente:* ${lead.name || 'Não informado'}\n`;
  message += `📱 *WhatsApp:* ${lead.phone || 'Não informado'}\n`;
  if (lead.email) {
    message += `📧 *Email:* ${lead.email}\n`;
  }
  message += `\n`;
  
  // Problema detectado em DESTAQUE
  if (lead.detected_problem) {
    message += `⚖️ *Problema Detectado:* ${lead.detected_problem}\n\n`;
  }
  
  // Advogado responsável
  if (lead.assigned_lawyer) {
    message += `👨‍⚖️ *Advogado(a):* ${lead.assigned_lawyer}\n\n`;
  }
  
  if (isEndConversation && lead.case_summary) {
    message += `📋 *RESUMO COMPLETO DO CASO:*\n`;
    message += `${lead.case_summary}\n\n`;
  } else if (lead.case_summary) {
    message += `📝 *RESUMO DO CASO:*\n`;
    message += `${lead.case_summary}\n\n`;
  }
  
  if (lead.case_details && Object.keys(lead.case_details).length > 0) {
    message += `📊 *Detalhes:*\n`;
    
    if (lead.case_details.evidencias) {
      message += `• ${lead.case_details.evidencias}\n`;
    }
    if (lead.case_details.historico) {
      message += `• ${lead.case_details.historico}\n`;
    }
    if (lead.case_details.fatos) {
      message += `• Fatos: ${lead.case_details.fatos}\n`;
    }
    if (lead.case_details.data) {
      message += `• Data: ${lead.case_details.data}\n`;
    }
    if (lead.case_details.partes) {
      message += `• Partes: ${lead.case_details.partes}\n`;
    }
    if (lead.case_details.valor) {
      message += `• Valor: ${lead.case_details.valor}\n`;
    }
    if (lead.case_details.documentos) {
      message += `• Documentos: ${lead.case_details.documentos}\n`;
    }
    message += `\n`;
  }
  
  if (lead.rating) {
    const stars = '⭐'.repeat(lead.rating);
    message += `${stars} *Avaliação do cliente:* ${lead.rating}/5\n\n`;
  }
  
  message += `🕐 *Recebido:* ${timestamp}\n`;
  if (lead.message_count) {
    message += `💬 *Mensagens trocadas:* ${lead.message_count}`;
  }

  return message;
}

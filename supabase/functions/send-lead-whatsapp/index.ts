import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface LeadData {
  id: string;
  name: string | null;
  phone: string | null;
  detected_problem: string | null;
  assigned_lawyer: string | null;
  case_summary: string | null;
}

interface RequestBody {
  leadData: LeadData;
  lawyerName?: string;
}

// Mapeamento de advogados para nomes amigáveis
const LAWYER_NAMES: { [key: string]: string } = {
  'carlos-silva': 'Dr. Carlos Silva',
  'maria-santos': 'Dra. Maria Santos',
  'rafael-oliveira': 'Dr. Rafael Oliveira',
  'juliana-costa': 'Dra. Juliana Costa',
  'fernando-lima': 'Dr. Fernando Lima',
  'patricia-almeida': 'Dra. Patrícia Almeida',
  'rodrigo-barros': 'Dr. Rodrigo Barros',
  'ricardo-mendes': 'Dr. Ricardo Mendes',
  'ana-rodrigues': 'Dra. Ana Rodrigues',
  'lucas-ferreira': 'Dr. Lucas Ferreira',
  'carla-souza': 'Dra. Carla Souza',
  'paulo-martins': 'Dr. Paulo Martins',
  'beatriz-campos': 'Dra. Beatriz Campos',
  'gustavo-reis': 'Dr. Gustavo Reis',
  'camila-nunes': 'Dra. Camila Nunes',
  'diego-santos': 'Dr. Diego Santos',
  'fernanda-lima': 'Dra. Fernanda Lima',
  'thiago-rocha': 'Dr. Thiago Rocha',
  'marina-costa': 'Dra. Marina Costa',
  'helena-vasconcelos': 'Dra. Helena Vasconcelos',
  'gabriel-monteiro': 'Dr. Gabriel Monteiro',
  'renata-machado': 'Dra. Renata Machado',
  'leonardo-prado': 'Dr. Leonardo Prado',
  'cristina-torres': 'Dra. Cristina Torres',
  'andre-silva': 'Dr. André Silva',
  'claudia-martins': 'Dra. Cláudia Martins',
  'marcos-oliveira': 'Dr. Marcos Oliveira',
  'isabela-santos': 'Dra. Isabela Santos',
  'renato-alves': 'Dr. Renato Alves',
  'sandra-lima': 'Dra. Sandra Lima',
  'roberto-costa': 'Dr. Roberto Costa',
  'vanessa-reis': 'Dra. Vanessa Reis',
  'joao-fernandes': 'Dr. João Fernandes',
  'larissa-souza': 'Dra. Larissa Souza',
  'eduardo-gomes': 'Dr. Eduardo Gomes',
  'monica-alves': 'Dra. Mônica Alves'
};

// Mensagens personalizadas por área de problema
function getContextualMessage(problem: string | null): string {
  const problemLower = problem?.toLowerCase() || '';
  
  if (problemLower.includes('trabalh') || problemLower.includes('demissão') || problemLower.includes('rescisão')) {
    return 'Vi que você está com uma questão trabalhista. Vamos analisar seus direitos e garantir que você receba tudo que tem direito!';
  }
  if (problemLower.includes('famíli') || problemLower.includes('divórcio') || problemLower.includes('pensão') || problemLower.includes('guarda')) {
    return 'Entendi sua situação familiar. Vamos resolver isso com todo cuidado e atenção que você merece.';
  }
  if (problemLower.includes('consum') || problemLower.includes('empresa') || problemLower.includes('indeniza')) {
    return 'Vamos resolver esse problema com a empresa e garantir seus direitos como consumidor!';
  }
  if (problemLower.includes('previd') || problemLower.includes('inss') || problemLower.includes('aposentadoria') || problemLower.includes('benefício')) {
    return 'Vou te ajudar a garantir seu benefício junto ao INSS. Muita gente perde direitos por não saber como funciona!';
  }
  if (problemLower.includes('penal') || problemLower.includes('crime') || problemLower.includes('prisão') || problemLower.includes('acusação')) {
    return 'Entendi a situação. Vou analisar seu caso com toda urgência e cuidado que ele merece.';
  }
  
  return 'Já estou analisando seu caso com atenção. Logo entrarei em contato com as melhores orientações!';
}

// Formatar número de telefone para Z-API
function formatPhoneNumber(phone: string | null): string | null {
  if (!phone) return null;
  
  // Remover caracteres não numéricos
  let cleaned = phone.replace(/\D/g, '');
  
  // Adicionar código do país se não tiver
  if (!cleaned.startsWith('55')) {
    cleaned = '55' + cleaned;
  }
  
  return cleaned;
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { leadData, lawyerName: providedLawyerName }: RequestBody = await req.json();
    
    console.log("=== Send Lead WhatsApp Request ===");
    console.log("Lead:", leadData.name, "Phone:", leadData.phone);
    console.log("Problem:", leadData.detected_problem);
    console.log("Lawyer:", leadData.assigned_lawyer);

    // Validar dados obrigatórios
    if (!leadData.phone || !leadData.name) {
      console.error("Missing required data: name or phone");
      return new Response(
        JSON.stringify({ error: 'Missing required data: name or phone' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Formatar número do lead
    const formattedPhone = formatPhoneNumber(leadData.phone);
    if (!formattedPhone) {
      console.error("Invalid phone number");
      return new Response(
        JSON.stringify({ error: 'Invalid phone number' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Obter credenciais Z-API
    const ZAPI_INSTANCE_ID = Deno.env.get('ZAPI_INSTANCE_ID');
    const ZAPI_TOKEN = Deno.env.get('ZAPI_TOKEN');
    const ZAPI_CLIENT_TOKEN = Deno.env.get('ZAPI_CLIENT_TOKEN');

    if (!ZAPI_INSTANCE_ID || !ZAPI_TOKEN || !ZAPI_CLIENT_TOKEN) {
      console.error("Missing Z-API credentials");
      return new Response(
        JSON.stringify({ error: 'Missing Z-API credentials' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Determinar nome do advogado
    const lawyerDisplayName = providedLawyerName || 
      LAWYER_NAMES[leadData.assigned_lawyer || ''] || 
      'nossa equipe jurídica';

    // Gerar mensagem contextual
    const contextualMessage = getContextualMessage(leadData.detected_problem);

    // Montar mensagem de boas-vindas para o lead
    const welcomeMessage = `Olá, ${leadData.name}! 👋

Aqui é da equipe do *Advogado Já*.

${contextualMessage}

${lawyerDisplayName} já está analisando seu caso e entrará em contato em breve!

📋 *Próximos passos:*
• Analisar seu caso detalhadamente
• Identificar a melhor estratégia jurídica
• Entrar em contato para orientações

💬 Enquanto isso, guarde esta conversa! Qualquer dúvida, pode mandar mensagem aqui.

_Atenciosamente, Equipe Advogado Já_`;

    console.log("Message length:", welcomeMessage.length);
    console.log("Sending to:", formattedPhone);

    // Enviar via Z-API
    const zapiUrl = `https://api.z-api.io/instances/${ZAPI_INSTANCE_ID}/token/${ZAPI_TOKEN}/send-text`;
    
    const zapiResponse = await fetch(zapiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Client-Token': ZAPI_CLIENT_TOKEN
      },
      body: JSON.stringify({
        phone: formattedPhone,
        message: welcomeMessage
      })
    });

    const responseText = await zapiResponse.text();
    console.log("Z-API Response Status:", zapiResponse.status);
    console.log("Z-API Response:", responseText);

    if (!zapiResponse.ok) {
      console.error("=== Z-API Error ===");
      console.error("Status:", zapiResponse.status);
      console.error("Response:", responseText);
      throw new Error(`Z-API error: ${zapiResponse.status} - ${responseText}`);
    }

    console.log("✅ Lead WhatsApp message sent successfully!");

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'WhatsApp message sent to lead',
        phone: formattedPhone 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error("Error sending lead WhatsApp:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

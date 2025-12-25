import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const nicheColors: Record<string, { primary: string; secondary: string; name: string }> = {
  trabalhista: { primary: "#3B82F6", secondary: "#1E40AF", name: "Direito Trabalhista" },
  familia: { primary: "#EC4899", secondary: "#BE185D", name: "Direito de Família" },
  civil: { primary: "#F59E0B", secondary: "#D97706", name: "Direito Civil" },
  previdenciario: { primary: "#10B981", secondary: "#047857", name: "Direito Previdenciário" },
  penal: { primary: "#EF4444", secondary: "#B91C1C", name: "Direito Penal" },
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { title, excerpt, nicheId, url } = await req.json();

    if (!title) {
      return new Response(
        JSON.stringify({ error: 'Título é obrigatório' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      console.error('LOVABLE_API_KEY not configured');
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const colors = nicheColors[nicheId] || nicheColors.civil;
    const shortTitle = title.length > 80 ? title.substring(0, 77) + "..." : title;
    const shortExcerpt = excerpt && excerpt.length > 120 ? excerpt.substring(0, 117) + "..." : excerpt;

    const prompt = `Create a professional Instagram post image (1080x1080 square format) for a Brazilian law firm article.

DESIGN REQUIREMENTS:
- Modern, clean, professional design
- Primary color: ${colors.primary} (use as accent/highlight color)
- Secondary color: ${colors.secondary} (use for gradients or secondary elements)
- Dark background (deep navy or charcoal) with light text for readability
- Include a subtle justice scale or gavel icon/silhouette
- Legal/professional aesthetic

TEXT TO INCLUDE:
- Main headline: "${shortTitle}"
- Category badge: "${colors.name}"
${shortExcerpt ? `- Brief description: "${shortExcerpt}"` : ''}
- Brand: "Advogado Online" (small, bottom corner)

STYLE:
- Bold, readable typography
- The title should be the main focus
- Use the primary color (${colors.primary}) for highlights and accents
- Professional gradient effects
- Clean hierarchy with the headline as the focal point
- Make it eye-catching for social media scrolling

The image should look like a professional legal services social media post that would attract attention on Instagram.`;

    console.log('Generating Instagram image for:', title);
    console.log('Using niche:', nicheId, 'with colors:', colors);

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash-image-preview',
        messages: [
          { role: 'user', content: prompt }
        ],
        modalities: ['image', 'text']
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Lovable AI error:', response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Limite de requisições excedido. Tente novamente em alguns minutos.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'Créditos insuficientes. Entre em contato com o suporte.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      
      return new Response(
        JSON.stringify({ error: 'Erro ao gerar imagem. Tente novamente.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    console.log('AI response received');

    const imageUrl = data.choices?.[0]?.message?.images?.[0]?.image_url?.url;

    if (!imageUrl) {
      console.error('No image in response:', JSON.stringify(data, null, 2));
      return new Response(
        JSON.stringify({ error: 'Nenhuma imagem gerada. Tente novamente.' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Image generated successfully');

    return new Response(
      JSON.stringify({ 
        image: imageUrl,
        message: 'Imagem gerada com sucesso!'
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Error in generate-instagram-image:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Erro desconhecido' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

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

    const prompt = `Create a professional Instagram post image (1080x1080 square format).

CRITICAL TEXT REQUIREMENT - THIS IS MANDATORY:
You MUST include the following headline text clearly visible and perfectly readable in the image:
"${shortTitle}"

TEXT SPECIFICATIONS:
- The headline text MUST be LARGE (at least 60pt equivalent font size)
- Use BOLD white or cream colored text for maximum contrast
- Position the headline text in the CENTER of the image
- Text must be 100% legible and spelled EXACTLY as provided above
- The text is in Portuguese - do NOT translate, modify, or abbreviate it
- Add a subtle dark overlay or shadow behind text to ensure readability
- Break the text into multiple lines if needed for better composition

DESIGN REQUIREMENTS:
- Background: Dark gradient (navy blue to charcoal/black)
- Accent color: ${colors.primary} for decorative elements and highlights
- Include a subtle justice scale or gavel icon as a watermark (30% opacity, background)
- Small "${colors.name}" category badge at the top of the image
${shortExcerpt ? `- Optional subtle excerpt below headline: "${shortExcerpt}"` : ''}
- "Advogado Online" brand text at the bottom corner (small, subtle)
- Modern, professional, clean legal aesthetic

PRIORITY ORDER:
1. HEADLINE TEXT - This is the MOST IMPORTANT element and must dominate the image
2. Category badge - Secondary importance
3. Background design - Supports the text, never competes with it
4. Brand text - Subtle presence

The headline text must be instantly readable at a glance. Make it the clear focal point of the entire image.`;

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

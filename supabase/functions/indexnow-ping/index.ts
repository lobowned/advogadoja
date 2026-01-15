import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const INDEXNOW_KEY = "7f8e9a2b3c4d5e6f";
const SITE_HOST = "advogadoja.lovable.app";
const KEY_LOCATION = `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`;

interface IndexNowRequest {
  urls: string[];
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { urls }: IndexNowRequest = await req.json();

    if (!urls || !Array.isArray(urls) || urls.length === 0) {
      return new Response(
        JSON.stringify({ error: "urls array is required" }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Normalize URLs to full format
    const fullUrls = urls.map(url => {
      if (url.startsWith('http')) return url;
      return `https://${SITE_HOST}${url.startsWith('/') ? url : '/' + url}`;
    });

    console.log(`Submitting ${fullUrls.length} URLs to IndexNow:`, fullUrls);

    // IndexNow API endpoints (Bing hosts the main API, others use it)
    const indexNowEndpoints = [
      'https://api.indexnow.org/indexnow',
      'https://www.bing.com/indexnow',
      'https://yandex.com/indexnow',
    ];

    const results = await Promise.allSettled(
      indexNowEndpoints.map(async (endpoint) => {
        const payload = {
          host: SITE_HOST,
          key: INDEXNOW_KEY,
          keyLocation: KEY_LOCATION,
          urlList: fullUrls,
        };

        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(payload),
        });

        return {
          endpoint,
          status: response.status,
          ok: response.ok,
          message: response.ok ? 'Submitted successfully' : await response.text(),
        };
      })
    );

    // Also ping Google and Bing sitemaps
    const sitemapUrl = `https://${SITE_HOST}/sitemap.xml`;
    const sitemapPings = await Promise.allSettled([
      fetch(`https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`),
      fetch(`https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`),
    ]);

    const response = {
      success: true,
      submittedUrls: fullUrls.length,
      indexNowResults: results.map((r, i) => {
        if (r.status === 'fulfilled') return r.value;
        return { endpoint: indexNowEndpoints[i], error: r.reason?.message };
      }),
      sitemapPings: {
        google: sitemapPings[0].status === 'fulfilled' ? 'pinged' : 'failed',
        bing: sitemapPings[1].status === 'fulfilled' ? 'pinged' : 'failed',
      },
      timestamp: new Date().toISOString(),
    };

    console.log('IndexNow submission results:', response);

    return new Response(
      JSON.stringify(response),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('IndexNow error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});

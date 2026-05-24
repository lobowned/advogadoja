import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface NewsArticle {
  id: string;
  niche_id: string;
  source: string;
  source_url: string;
  title: string;
  excerpt: string | null;
  content: string | null;
  original_link: string;
  image_url: string | null;
  published_at: string | null;
  fetched_at: string;
  keywords: string[] | null;
  is_active: boolean;
  relevance_score: number;
  created_at: string;
}

interface UseNewsOptions {
  nicheId?: string;
  limit?: number;
  source?: string;
}

export const useNews = (options: UseNewsOptions = {}) => {
  const { nicheId, limit = 20, source } = options;

  return useQuery({
    queryKey: ['news', nicheId, limit, source],
    queryFn: async () => {
      let query = supabase
        .from('news_articles')
        .select('*')
        .eq('is_active', true)
        .order('published_at', { ascending: false, nullsFirst: false })
        .limit(limit);

      if (nicheId) {
        query = query.eq('niche_id', nicheId);
      }

      if (source) {
        query = query.eq('source', source);
      }

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching news:', error);
        throw error;
      }

      return data as NewsArticle[];
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useRecentNews = (limit = 5) => {
  return useQuery({
    queryKey: ['recent-news', limit],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .eq('is_active', true)
        .order('published_at', { ascending: false, nullsFirst: false })
        .limit(limit);

      if (error) {
        console.error('Error fetching recent news:', error);
        throw error;
      }

      return data as NewsArticle[];
    },
    staleTime: 5 * 60 * 1000,
  });
};

export const useNewsByNiche = () => {
  return useQuery({
    queryKey: ['news-by-niche'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('news_articles')
        .select('*')
        .eq('is_active', true)
        .order('published_at', { ascending: false, nullsFirst: false })
        .limit(50);

      if (error) {
        console.error('Error fetching news by niche:', error);
        throw error;
      }

      // Group by niche
      const grouped: Record<string, NewsArticle[]> = {};
      for (const article of data as NewsArticle[]) {
        if (!grouped[article.niche_id]) {
          grouped[article.niche_id] = [];
        }
        if (grouped[article.niche_id].length < 5) {
          grouped[article.niche_id].push(article);
        }
      }

      return grouped;
    },
    staleTime: 5 * 60 * 1000,
  });
};

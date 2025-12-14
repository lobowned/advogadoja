-- Create news_articles table for legal news
CREATE TABLE public.news_articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  niche_id TEXT NOT NULL,
  source TEXT NOT NULL,
  source_url TEXT NOT NULL,
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  original_link TEXT NOT NULL UNIQUE,
  image_url TEXT,
  published_at TIMESTAMP WITH TIME ZONE,
  fetched_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  keywords TEXT[],
  is_active BOOLEAN DEFAULT true,
  relevance_score INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.news_articles ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access
CREATE POLICY "News articles are viewable by everyone"
ON public.news_articles
FOR SELECT
USING (true);

-- Create policy for insert (for edge function with service role)
CREATE POLICY "Service role can insert news"
ON public.news_articles
FOR INSERT
WITH CHECK (true);

-- Create policy for update
CREATE POLICY "Service role can update news"
ON public.news_articles
FOR UPDATE
USING (true);

-- Create indexes for performance
CREATE INDEX idx_news_niche ON public.news_articles(niche_id);
CREATE INDEX idx_news_published ON public.news_articles(published_at DESC);
CREATE INDEX idx_news_active ON public.news_articles(is_active);
CREATE INDEX idx_news_source ON public.news_articles(source);

-- Enable realtime for news updates
ALTER PUBLICATION supabase_realtime ADD TABLE public.news_articles;
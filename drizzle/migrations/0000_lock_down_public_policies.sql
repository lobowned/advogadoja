DROP POLICY IF EXISTS "Allow all access to qa_test_runs" ON public.qa_test_runs;
DROP POLICY IF EXISTS "Allow all access to qa_test_results" ON public.qa_test_results;
DROP POLICY IF EXISTS "Allow all access to qa_anomalies" ON public.qa_anomalies;
DROP POLICY IF EXISTS "Allow all access to qa_metrics" ON public.qa_metrics;

DROP POLICY IF EXISTS "Service role can insert news" ON public.news_articles;
DROP POLICY IF EXISTS "Service role can update news" ON public.news_articles;
DROP POLICY IF EXISTS "News articles are viewable by everyone" ON public.news_articles;
CREATE POLICY "Active news are public" ON public.news_articles FOR SELECT TO anon, authenticated USING (is_active = true);

DROP POLICY IF EXISTS "Anyone can update leads" ON public.leads;
DROP POLICY IF EXISTS "Leads are viewable by everyone" ON public.leads;
DROP POLICY IF EXISTS "Anyone can insert leads" ON public.leads;
CREATE POLICY "Visitors can sign up to newsletter" ON public.leads FOR INSERT TO anon, authenticated
WITH CHECK (status = 'newsletter' AND email IS NOT NULL AND length(email) <= 255
  AND assigned_lawyer IS NULL AND coalesce(message_count,0) = 0 AND notification_sent IS NOT TRUE);

DROP POLICY IF EXISTS "Cases are viewable by everyone" ON public.cases;
DROP POLICY IF EXISTS "Anyone can insert cases" ON public.cases;
CREATE POLICY "Visitors can submit new cases" ON public.cases FOR INSERT TO anon, authenticated
WITH CHECK (status = 'novo' AND length(protocol_id) <= 64);

DROP POLICY IF EXISTS "Case answers are viewable by everyone" ON public.case_answers;
DROP POLICY IF EXISTS "Anyone can insert case answers" ON public.case_answers;
CREATE POLICY "Answers only for recent cases" ON public.case_answers FOR INSERT TO anon, authenticated
WITH CHECK (EXISTS (SELECT 1 FROM public.cases c WHERE c.id = case_id AND c.created_at > now() - interval '1 hour'));

DROP POLICY IF EXISTS "Case documents are viewable by everyone" ON public.case_documents;
DROP POLICY IF EXISTS "Anyone can insert case documents" ON public.case_documents;
CREATE POLICY "Documents only for recent cases" ON public.case_documents FOR INSERT TO anon, authenticated
WITH CHECK (EXISTS (SELECT 1 FROM public.cases c WHERE c.id = case_id AND c.created_at > now() - interval '1 hour'));

DROP POLICY IF EXISTS "Case analysis are viewable by everyone" ON public.case_analysis;
DROP POLICY IF EXISTS "Anyone can insert case analysis" ON public.case_analysis;
CREATE POLICY "Analysis only for recent cases" ON public.case_analysis FOR INSERT TO anon, authenticated
WITH CHECK (EXISTS (SELECT 1 FROM public.cases c WHERE c.id = case_id AND c.created_at > now() - interval '1 hour'));

DROP POLICY IF EXISTS "Anyone can view case documents" ON storage.objects;
DROP POLICY IF EXISTS "Anyone can upload case documents" ON storage.objects;
CREATE POLICY "Upload files only into a recent case folder" ON storage.objects FOR INSERT TO anon, authenticated
WITH CHECK (bucket_id = 'case-documents' AND EXISTS (
  SELECT 1 FROM public.cases c WHERE c.protocol_id = (storage.foldername(name))[1] AND c.created_at > now() - interval '1 hour'));
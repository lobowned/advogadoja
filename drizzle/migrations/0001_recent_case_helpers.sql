CREATE OR REPLACE FUNCTION public.is_recent_case(_case_id uuid) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.cases WHERE id = _case_id AND created_at > now() - interval '1 hour') $$;
CREATE OR REPLACE FUNCTION public.is_recent_protocol(_protocol text) RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.cases WHERE protocol_id = _protocol AND created_at > now() - interval '1 hour') $$;

DROP POLICY "Answers only for recent cases" ON public.case_answers;
CREATE POLICY "Answers only for recent cases" ON public.case_answers FOR INSERT TO anon, authenticated WITH CHECK (public.is_recent_case(case_id));
DROP POLICY "Documents only for recent cases" ON public.case_documents;
CREATE POLICY "Documents only for recent cases" ON public.case_documents FOR INSERT TO anon, authenticated WITH CHECK (public.is_recent_case(case_id));
DROP POLICY "Analysis only for recent cases" ON public.case_analysis;
CREATE POLICY "Analysis only for recent cases" ON public.case_analysis FOR INSERT TO anon, authenticated WITH CHECK (public.is_recent_case(case_id));
DROP POLICY "Upload files only into a recent case folder" ON storage.objects;
CREATE POLICY "Upload files only into a recent case folder" ON storage.objects FOR INSERT TO anon, authenticated
WITH CHECK (bucket_id = 'case-documents' AND public.is_recent_protocol((storage.foldername(name))[1]));
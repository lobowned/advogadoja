import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { LawyerPresenceProvider } from "@/contexts/LawyerPresenceContext";

// Só a página inicial e a 404 vão no pacote principal; as demais carregam quando abertas
// (src/routes/pages.ts, com preload antes do primeiro render em main.tsx).
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { LOCAL_PAGE_ROUTES } from "./data/local-page-keys";
import { articleRedirects } from "./data/article-redirects";
import { routeRedirects } from "./data/route-redirects";
import {
  PrevHome,
  PrevAposentadorias,
  PrevAposentadoriaIdade,
  PrevAuxilioDoenca,
  PrevInvalidez,
  PrevBpcLoas,
  PrevSalarioMaternidade,
  PrevSobre,
  PrevContato,
  GuiaPage,
  GuiasIndex,
  RiccioAdvocacia,
  PrivacyPolicy,
  TermsOfUse,
  DynamicQuestionnaire,
  Completed,
  FAQIndex,
  FAQQuestion,
  NicheLanding,
  CityLanding,
  CityNicheLanding,
  Blog,
  BlogPost,
  BlogIndex,
  BlogArticle,
  SelectNiche,
  SelectAction,
  News,
  Sitemap,
  Conversao,
  CityConsumerLanding,
  LocalSEOArticle,
  AdvogadoBahia,
  TrabalhistaLanding,
  CriminalLanding,
  Calculadoras,
  CalculadoraTrabalhista,
  CalculadoraPensao,
  CalculadoraAposentadoria,
  CalculadoraHorasExtras,
  CalculadoraSeguroDesemprego,
  CalculadoraFGTS,
  CalculadoraInsalubridade,
  CalculadoraPartilhaBens,
  CalculadoraPensaoMorte,
  CalculadoraAuxilioDoenca,
  CalculadoraBPCLOAS,
  CalculadoraAtualizacaoDivida,
  CalculadoraAluguelAtrasado,
  CalculadoraDevolucaoEmDobro,
  NegativacaoIndevidaLanding,
  PlanoSaudeNegouLanding,
  FraudeBancariaLanding,
  CobrancaIndevidaLanding,
  ProdutoDefeitousoLanding,
  LiminarCirurgiaNegadaLanding,
  LiminarBariatricaLanding,
  LiminarOncologicaLanding,
  LiminarOrtopedicaLanding,
  LiminarCardiologicaLanding,
  LiminarNeurologicaLanding,
  LiminarOftalmologicaLanding,
  ProblemasVooLanding,
  CartaoConsignadoLanding,
  LeadsDashboard,
  QADashboard,
} from "./routes/pages";

// Components
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { FloatingChatWidget, INLINE_CHAT_ROUTES } from "./components/FloatingChatWidget";

const queryClient = new QueryClient();

/**
 * Esconde o FloatingWhatsApp original quando o usuário está
 * em rotas /prev (a área /prev tem o próprio WhatsApp flutuante
 * com paleta dourada e mensagens contextualizadas).
 */
const ConditionalFloatingWhatsApp = () => {
  const location = useLocation();
  if (
    location.pathname.startsWith("/prev") ||
    location.pathname.startsWith("/riccioadvocacia")
  )
    return null;
  // Uma bolinha só por página: onde o chat flutuante aparece, o WhatsApp flutuante some.
  if (!INLINE_CHAT_ROUTES.some((r) => r.test(location.pathname))) return null;
  return <FloatingWhatsApp />;
};

// Animated Routes component that uses useLocation for AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  // Fallback só aparece se a página não foi pré-carregada (preloadRoute em main.tsx)
  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/selecionar-nicho" element={<SelectNiche />} />
        <Route path="/selecionar-acao/:nicheId" element={<SelectAction />} />
        <Route
          path="/questionario/:nicheId/:actionId"
          element={<DynamicQuestionnaire />}
        />
        <Route path="/concluido" element={<Completed />} />

        {/* Blog - New */}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />

        {/* Local SEO Articles - Consumer + City */}
        <Route
          path="/artigos/consumidor/:localSlug"
          element={<LocalSEOArticle />}
        />

        {/* Artigos fundidos (canibalização) → slug final */}
        {articleRedirects.map((r) => (
          <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
        ))}

        {/* Endereços antigos (calculadoras aposentadas, outros estados, FAQ antiga): lista em data/route-redirects.ts,
            que o gerador de HTML estático também usa */}
        {routeRedirects.map((r) => (
          <Route key={r.from} path={r.from} element={<Navigate to={r.to} replace />} />
        ))}

        {/* Blog/Artigos - Legacy */}
        <Route path="/artigos" element={<Blog />} />
        <Route path="/artigos/:nicheId" element={<Blog />} />
        <Route path="/artigos/:nicheId/:slug" element={<BlogPost />} />

        {/* FAQ (a antiga /perguntas-frequentes redireciona via route-redirects.ts) */}
        <Route path="/perguntas" element={<FAQIndex />} />
        <Route path="/perguntas/:slug" element={<FAQQuestion />} />

        {/* Legal Pages */}
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
        <Route path="/sitemap" element={<Sitemap />} />

        {/* Regional Hub Pages */}
        <Route path="/advogado-bahia" element={<AdvogadoBahia />} />

        {/* News */}
        <Route path="/noticias" element={<News />} />
        <Route path="/noticias/:nicheId" element={<News />} />

        {/* Calculadoras */}
        <Route path="/calculadoras" element={<Calculadoras />} />
        <Route
          path="/calculadora-trabalhista"
          element={<CalculadoraTrabalhista />}
        />
        <Route path="/calculadora-pensao" element={<CalculadoraPensao />} />
        <Route
          path="/calculadora-aposentadoria"
          element={<CalculadoraAposentadoria />}
        />
        <Route
          path="/calculadora-atualizacao-divida"
          element={<CalculadoraAtualizacaoDivida />}
        />
        <Route
          path="/calculadora-partilha-bens"
          element={<CalculadoraPartilhaBens />}
        />
        <Route
          path="/calculadora-aluguel-atrasado"
          element={<CalculadoraAluguelAtrasado />}
        />
        <Route
          path="/calculadora-horas-extras"
          element={<CalculadoraHorasExtras />}
        />
        <Route
          path="/calculadora-seguro-desemprego"
          element={<CalculadoraSeguroDesemprego />}
        />
        <Route path="/calculadora-fgts" element={<CalculadoraFGTS />} />
        <Route
          path="/calculadora-pensao-morte"
          element={<CalculadoraPensaoMorte />}
        />
        <Route
          path="/calculadora-auxilio-doenca"
          element={<CalculadoraAuxilioDoenca />}
        />
        <Route path="/calculadora-bpc-loas" element={<CalculadoraBPCLOAS />} />
        <Route
          path="/calculadora-insalubridade"
          element={<CalculadoraInsalubridade />}
        />
        {/* Consumer Calculators */}
        <Route
          path="/calculadora-devolucao-dobro"
          element={<CalculadoraDevolucaoEmDobro />}
        />

        {/* Consumer Problem Landing Pages - SEO URLs */}
        <Route
          path="/advogado-negativacao-indevida"
          element={<NegativacaoIndevidaLanding />}
        />
        <Route
          path="/advogado-plano-saude-cobertura-negada"
          element={<PlanoSaudeNegouLanding />}
        />
        <Route
          path="/advogado-cobranca-indevida"
          element={<CobrancaIndevidaLanding />}
        />
        <Route
          path="/advogado-produto-defeituoso"
          element={<ProdutoDefeitousoLanding />}
        />

        {/* Consumer Problem Landing Pages - Legacy URLs (abrem a página direto: podem ser destino de anúncio) */}
        <Route
          path="/negativacao-indevida"
          element={<NegativacaoIndevidaLanding />}
        />
        <Route path="/plano-saude-negou" element={<PlanoSaudeNegouLanding />} />
        <Route path="/fraude-bancaria" element={<FraudeBancariaLanding />} />
        <Route
          path="/cobranca-indevida"
          element={<CobrancaIndevidaLanding />}
        />

        {/* Liminar Cirurgia - SEO */}
        <Route
          path="/liminar-cirurgia-negada"
          element={<LiminarCirurgiaNegadaLanding />}
        />
        <Route
          path="/liminar-cirurgia-bariatrica"
          element={<LiminarBariatricaLanding />}
        />
        <Route
          path="/liminar-tratamento-cancer"
          element={<LiminarOncologicaLanding />}
        />
        <Route
          path="/liminar-cirurgia-ortopedica"
          element={<LiminarOrtopedicaLanding />}
        />
        <Route
          path="/liminar-cirurgia-cardiaca"
          element={<LiminarCardiologicaLanding />}
        />
        <Route
          path="/liminar-neurocirurgia"
          element={<LiminarNeurologicaLanding />}
        />
        <Route
          path="/liminar-cirurgia-olhos"
          element={<LiminarOftalmologicaLanding />}
        />

        {/* Cartão Consignado Landing Page */}
        <Route
          path="/advogado-cartao-consignado"
          element={<CartaoConsignadoLanding />}
        />

        {/* Trabalhista Landing Page */}
        <Route
          path="/advogado-trabalhista-online"
          element={<TrabalhistaLanding />}
        />

        {/* Criminal Landing Page (Riccio Advocacia - institutional) */}
        <Route path="/criminal" element={<CriminalLanding />} />

        {/* Problemas com Voo - Nova Landing Completa */}
        <Route
          path="/advogado-problemas-voo"
          element={<ProblemasVooLanding />}
        />

        {/* Niche Landing Pages */}
        <Route path="/advogado-consumidor" element={<NicheLanding />} />
        <Route path="/advogado-trabalhista" element={<NicheLanding />} />
        <Route path="/advogado-familia" element={<NicheLanding />} />
        <Route path="/advogado-civil" element={<NicheLanding />} />
        <Route path="/advogado-previdenciario" element={<NicheLanding />} />
        <Route path="/advogado-criminal" element={<NicheLanding />} />

        {/* City Consumer Landing Pages - Ultra Local SEO (BEFORE generic city+niche) */}
        <Route
          path="/advogado-consumidor-:citySlug"
          element={<CityConsumerLanding />}
        />

        {/* City Landing Pages - Local SEO */}
        <Route path="/advogado/:citySlug" element={<CityLanding />} />

        {/* Páginas locais prioritárias (Salvador/Camaçari) — rotas explícitas:
            o React Router v6 não interpreta params parciais como "advogado-:nicheSlug-:citySlug" */}
        {LOCAL_PAGE_ROUTES.map(({ key, nicheSlug, citySlug }) => (
          <Route
            key={key}
            path={`/advogado-${key}`}
            element={<CityNicheLanding nicheSlug={nicheSlug} citySlug={citySlug} />}
          />
        ))}

        {/* City + Niche Landing Pages - Ultra Local SEO */}
        <Route
          path="/advogado-:nicheSlug-:citySlug"
          element={<CityNicheLanding />}
        />

        {/* Conversion Tracking */}
        <Route path="/conversao" element={<Conversao />} />

        {/* Landing Riccio Advocacia (nova, independente) */}
        <Route
          path="/riccioadvocacia"
          element={
            <Suspense fallback={<div className="min-h-screen bg-[#0b0b0d]" />}>
              <RiccioAdvocacia />
            </Suspense>
          }
        />

        {/* Admin */}
        <Route path="/admin" element={<LeadsDashboard />} />
        <Route path="/admin/leads" element={<LeadsDashboard />} />
        <Route path="/admin/qa" element={<QADashboard />} />

        {/* Área /prev - Advogado Previdenciário */}
        <Route
          path="/prev/*"
          element={
            <Suspense fallback={<div />}>
              <Routes>
                <Route index element={<PrevHome />} />
                <Route path="aposentadorias" element={<PrevAposentadorias />} />
                <Route
                  path="aposentadoria-por-idade"
                  element={<PrevAposentadoriaIdade />}
                />
                <Route path="auxilio-doenca" element={<PrevAuxilioDoenca />} />
                <Route path="invalidez" element={<PrevInvalidez />} />
                <Route
                  path="aposentadoria-por-invalidez"
                  element={<PrevInvalidez />}
                />
                <Route path="bpc-loas" element={<PrevBpcLoas />} />
                <Route
                  path="salario-maternidade"
                  element={<PrevSalarioMaternidade />}
                />
                <Route path="sobre" element={<PrevSobre />} />
                <Route path="contato" element={<PrevContato />} />
              </Routes>
            </Suspense>
          }
        />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="/guias" element={<GuiasIndex />} />
        <Route path="/guia/:slug" element={<GuiaPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
    </Suspense>
  );
};

const App = () => (
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LazyMotion features={domAnimation}>
          <TooltipProvider>
            <LawyerPresenceProvider>
              <Toaster />
              <Sonner />
              <BrowserRouter
                future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
              >
                <AnimatedRoutes />
                <ConditionalFloatingWhatsApp />
                <FloatingChatWidget />
              </BrowserRouter>
            </LawyerPresenceProvider>
          </TooltipProvider>
        </LazyMotion>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);

export default App;

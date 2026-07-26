import React, { Suspense, lazy } from "react";
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

// ===== Lazy load das páginas da área /prev =====
// Mantemos o bundle do site original inalterado: as páginas /prev só
// carregam quando o usuário entra em alguma URL /prev/*.
const PrevHome = lazy(() => import("./pages/prev/PrevHome"));
const PrevAposentadorias = lazy(
  () => import("./pages/prev/PrevAposentadorias"),
);
const PrevAposentadoriaIdade = lazy(
  () => import("./pages/prev/PrevAposentadoriaIdade"),
);
const PrevAuxilioDoenca = lazy(() => import("./pages/prev/PrevAuxilioDoenca"));
const PrevInvalidez = lazy(() => import("./pages/prev/PrevInvalidez"));
const PrevBpcLoas = lazy(() => import("./pages/prev/PrevBpcLoas"));
const PrevSalarioMaternidade = lazy(
  () => import("./pages/prev/PrevSalarioMaternidade"),
);
const PrevSobre = lazy(() => import("./pages/prev/PrevSobre"));
const PrevContato = lazy(() => import("./pages/prev/PrevContato"));

// Landing independente da Riccio Advocacia (preto & ouro, mobile-first) — lazy pra não pesar o bundle.
const RiccioAdvocacia = lazy(() => import("./pages/RiccioAdvocacia"));

// Pages
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Questionnaire from "./pages/Questionnaire";
import DynamicQuestionnaire from "./pages/DynamicQuestionnaire";
import Completed from "./pages/Completed";
import NotFound from "./pages/NotFound";
import FAQ from "./pages/FAQ";
import FAQIndex from "./pages/FAQIndex";
import FAQQuestion from "./pages/FAQQuestion";
import NicheLanding from "./pages/NicheLanding";
import CityLanding from "./pages/CityLanding";
import CityNicheLanding from "./pages/CityNicheLanding";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import BlogIndex from "./pages/BlogIndex";
import BlogArticle from "./pages/BlogArticle";
import SelectNiche from "./pages/SelectNiche";
import SelectAction from "./pages/SelectAction";
import News from "./pages/News";
import CasosSucesso from "./pages/CasosSucesso";
import Sitemap from "./pages/Sitemap";
import Conversao from "./pages/Conversao";

// Calculadoras
import Calculadoras from "./pages/Calculadoras";
import CalculadoraTrabalhista from "./pages/CalculadoraTrabalhista";
import CalculadoraPensao from "./pages/CalculadoraPensao";
import CalculadoraAposentadoria from "./pages/CalculadoraAposentadoria";
import CalculadoraHorasExtras from "./pages/CalculadoraHorasExtras";
import CalculadoraSeguroDesemprego from "./pages/CalculadoraSeguroDesemprego";
import CalculadoraFGTS from "./pages/CalculadoraFGTS";
import CalculadoraInsalubridade from "./pages/CalculadoraInsalubridade";
import CalculadoraPartilhaBens from "./pages/CalculadoraPartilhaBens";
import CalculadoraInventario from "./pages/CalculadoraInventario";
import CalculadoraPensaoMorte from "./pages/CalculadoraPensaoMorte";
import CalculadoraAuxilioDoenca from "./pages/CalculadoraAuxilioDoenca";
import CalculadoraBPCLOAS from "./pages/CalculadoraBPCLOAS";
import CalculadoraDanosMorais from "./pages/CalculadoraDanosMorais";
import CalculadoraAtualizacaoDivida from "./pages/CalculadoraAtualizacaoDivida";
import CalculadoraAluguelAtrasado from "./pages/CalculadoraAluguelAtrasado";
import CalculadoraDPVAT from "./pages/CalculadoraDPVAT";
import CalculadoraVooCancelado from "./pages/CalculadoraVooCancelado";
import CalculadoraNegativacao from "./pages/CalculadoraNegativacao";
import CalculadoraDevolucaoEmDobro from "./pages/CalculadoraDevolucaoEmDobro";
import CalculadoraPlanoSaude from "./pages/CalculadoraPlanoSaude";
import CalculadoraFraudeBancaria from "./pages/CalculadoraFraudeBancaria";

// Consumer Landing Pages
import VooCanceladoLanding from "./pages/consumer/VooCanceladoLanding";
import NegativacaoIndevidaLanding from "./pages/consumer/NegativacaoIndevidaLanding";
import PlanoSaudeNegouLanding from "./pages/consumer/PlanoSaudeNegouLanding";
import FraudeBancariaLanding from "./pages/consumer/FraudeBancariaLanding";
import CobrancaIndevidaLanding from "./pages/consumer/CobrancaIndevidaLanding";
import ProdutoDefeitousoLanding from "./pages/consumer/ProdutoDefeitousoLanding";
import LiminarCirurgiaNegadaLanding from "./pages/consumer/LiminarCirurgiaNegadaLanding";
import LiminarBariatricaLanding from "./pages/consumer/LiminarBariatricaLanding";
import LiminarOncologicaLanding from "./pages/consumer/LiminarOncologicaLanding";
import LiminarOrtopedicaLanding from "./pages/consumer/LiminarOrtopedicaLanding";
import LiminarCardiologicaLanding from "./pages/consumer/LiminarCardiologicaLanding";
import LiminarNeurologicaLanding from "./pages/consumer/LiminarNeurologicaLanding";
import LiminarOftalmologicaLanding from "./pages/consumer/LiminarOftalmologicaLanding";
import ProblemasVooLanding from "./pages/consumer/ProblemasVooLanding";
import CartaoConsignadoLanding from "./pages/consumer/CartaoConsignadoLanding";

// Calculadora Liminar Cirurgia
import CalculadoraLiminarCirurgia from "./pages/CalculadoraLiminarCirurgia";

// Admin
import LeadsDashboard from "./pages/admin/LeadsDashboard";
import QADashboard from "./pages/admin/QADashboard";

// City Consumer Landing (Ultra Local SEO)
import CityConsumerLanding from "./pages/CityConsumerLanding";

// Local SEO Articles
import LocalSEOArticle from "./pages/LocalSEOArticle";

// Regional Hub Pages
import AdvogadoBahia from "./pages/AdvogadoBahia";
import AdvogadoSaoPaulo from "./pages/AdvogadoSaoPaulo";
import AdvogadoRioDeJaneiro from "./pages/AdvogadoRioDeJaneiro";
import AdvogadoMinasGerais from "./pages/AdvogadoMinasGerais";

// Trabalhista Landing
import TrabalhistaLanding from "./pages/trabalhista/TrabalhistaLanding";

// Criminal Landing (Riccio Advocacia - institutional)
import CriminalLanding from "./pages/criminal/CriminalLanding";

// Components
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";
import { DynamicSocialProof } from "./components/social/DynamicSocialProof";
import { ExitIntentModal } from "./components/social/ExitIntentModal";

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
  return <FloatingWhatsApp />;
};

// Animated Routes component that uses useLocation for AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
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

        {/* Blog/Artigos - Legacy */}
        <Route path="/artigos" element={<Blog />} />
        <Route path="/artigos/:nicheId" element={<Blog />} />
        <Route path="/artigos/:nicheId/:slug" element={<BlogPost />} />

        {/* FAQ */}
        <Route path="/perguntas-frequentes" element={<FAQ />} />
        <Route path="/perguntas" element={<FAQIndex />} />
        <Route path="/perguntas/:slug" element={<FAQQuestion />} />

        {/* Legal Pages */}
        <Route path="/privacidade" element={<PrivacyPolicy />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
        <Route path="/sitemap" element={<Sitemap />} />

        {/* Success Stories */}
        <Route path="/casos-de-sucesso" element={<CasosSucesso />} />

        {/* Regional Hub Pages */}
        <Route path="/advogado-bahia" element={<AdvogadoBahia />} />
        <Route path="/advogado-sao-paulo" element={<AdvogadoSaoPaulo />} />
        <Route
          path="/advogado-rio-de-janeiro"
          element={<AdvogadoRioDeJaneiro />}
        />
        <Route
          path="/advogado-minas-gerais"
          element={<AdvogadoMinasGerais />}
        />

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
          path="/calculadora-danos-morais"
          element={<CalculadoraDanosMorais />}
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
          path="/calculadora-inventario"
          element={<CalculadoraInventario />}
        />
        <Route
          path="/calculadora-insalubridade"
          element={<CalculadoraInsalubridade />}
        />
        <Route path="/calculadora-dpvat" element={<CalculadoraDPVAT />} />
        {/* Consumer Calculators */}
        <Route
          path="/calculadora-voo-cancelado"
          element={<CalculadoraVooCancelado />}
        />
        <Route
          path="/calculadora-negativacao"
          element={<CalculadoraNegativacao />}
        />
        <Route
          path="/calculadora-devolucao-dobro"
          element={<CalculadoraDevolucaoEmDobro />}
        />
        <Route
          path="/calculadora-plano-saude"
          element={<CalculadoraPlanoSaude />}
        />
        <Route
          path="/calculadora-fraude-bancaria"
          element={<CalculadoraFraudeBancaria />}
        />
        <Route
          path="/calculadora-liminar-cirurgia"
          element={<CalculadoraLiminarCirurgia />}
        />

        {/* Consumer Problem Landing Pages - SEO URLs */}
        <Route
          path="/advogado-voo-cancelado-atrasado"
          element={<Navigate to="/advogado-problemas-voo" replace />}
        />
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

        {/* Consumer Problem Landing Pages - Legacy URLs */}
        <Route
          path="/voo-cancelado"
          element={<Navigate to="/advogado-problemas-voo" replace />}
        />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <LazyMotion features={domAnimation}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter
              future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
            >
              <AnimatedRoutes />
              <ConditionalFloatingWhatsApp />
              <DynamicSocialProof />
              <ExitIntentModal />
            </BrowserRouter>
          </TooltipProvider>
        </LazyMotion>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);

export default App;

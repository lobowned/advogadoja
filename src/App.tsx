import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LazyMotion, domAnimation, AnimatePresence } from "framer-motion";
import { LawyerPresenceProvider } from "@/contexts/LawyerPresenceContext";
import { AttendanceProvider } from "@/contexts/AttendanceContext";
import Index from "./pages/Index";
import SelectNiche from "./pages/SelectNiche";
import Calculadoras from "./pages/Calculadoras";
import CalculadoraTrabalhista from "./pages/CalculadoraTrabalhista";
import CalculadoraPensao from "./pages/CalculadoraPensao";
import CalculadoraAposentadoria from "./pages/CalculadoraAposentadoria";
import CalculadoraDanosMorais from "./pages/CalculadoraDanosMorais";
import CalculadoraAtualizacaoDivida from "./pages/CalculadoraAtualizacaoDivida";
import CalculadoraPartilhaBens from "./pages/CalculadoraPartilhaBens";
import CalculadoraAluguelAtrasado from "./pages/CalculadoraAluguelAtrasado";
import CalculadoraHorasExtras from "./pages/CalculadoraHorasExtras";
import CalculadoraSeguroDesemprego from "./pages/CalculadoraSeguroDesemprego";
import CalculadoraFGTS from "./pages/CalculadoraFGTS";
import CalculadoraPensaoMorte from "./pages/CalculadoraPensaoMorte";
import CalculadoraAuxilioDoenca from "./pages/CalculadoraAuxilioDoenca";
import CalculadoraBPCLOAS from "./pages/CalculadoraBPCLOAS";
import CalculadoraInventario from "./pages/CalculadoraInventario";
import CalculadoraInsalubridade from "./pages/CalculadoraInsalubridade";
import CalculadoraDPVAT from "./pages/CalculadoraDPVAT";
import SelectAction from "./pages/SelectAction";
import DynamicQuestionnaire from "./pages/DynamicQuestionnaire";
import Completed from "./pages/Completed";
import NotFound from "./pages/NotFound";
import LeadsDashboard from "./pages/admin/LeadsDashboard";
import QADashboard from "./pages/admin/QADashboard";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import FAQIndex from "./pages/FAQIndex";
import FAQQuestion from "./pages/FAQQuestion";
import NicheLanding from "./pages/NicheLanding";
import News from "./pages/News";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import CasosSucesso from "./pages/CasosSucesso";
import Sitemap from "./pages/Sitemap";
import CityLanding from "./pages/CityLanding";
import CityNicheLanding from "./pages/CityNicheLanding";
import Conversao from "./pages/Conversao";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

// Animated Routes component that uses useLocation for AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/selecionar-nicho" element={<SelectNiche />} />
        <Route path="/selecionar-acao/:nicheId" element={<SelectAction />} />
        <Route path="/questionario/:nicheId/:actionId" element={<DynamicQuestionnaire />} />
        <Route path="/concluido" element={<Completed />} />
        {/* Blog/Artigos */}
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
        {/* News */}
        <Route path="/noticias" element={<News />} />
        <Route path="/noticias/:nicheId" element={<News />} />
        {/* Calculadoras */}
        <Route path="/calculadoras" element={<Calculadoras />} />
        <Route path="/calculadora-trabalhista" element={<CalculadoraTrabalhista />} />
        <Route path="/calculadora-pensao" element={<CalculadoraPensao />} />
        <Route path="/calculadora-aposentadoria" element={<CalculadoraAposentadoria />} />
        <Route path="/calculadora-danos-morais" element={<CalculadoraDanosMorais />} />
        <Route path="/calculadora-atualizacao-divida" element={<CalculadoraAtualizacaoDivida />} />
        <Route path="/calculadora-partilha-bens" element={<CalculadoraPartilhaBens />} />
        <Route path="/calculadora-aluguel-atrasado" element={<CalculadoraAluguelAtrasado />} />
        <Route path="/calculadora-horas-extras" element={<CalculadoraHorasExtras />} />
        <Route path="/calculadora-seguro-desemprego" element={<CalculadoraSeguroDesemprego />} />
        <Route path="/calculadora-fgts" element={<CalculadoraFGTS />} />
        <Route path="/calculadora-pensao-morte" element={<CalculadoraPensaoMorte />} />
        <Route path="/calculadora-auxilio-doenca" element={<CalculadoraAuxilioDoenca />} />
        <Route path="/calculadora-bpc-loas" element={<CalculadoraBPCLOAS />} />
        <Route path="/calculadora-inventario" element={<CalculadoraInventario />} />
        <Route path="/calculadora-insalubridade" element={<CalculadoraInsalubridade />} />
        <Route path="/calculadora-dpvat" element={<CalculadoraDPVAT />} />
        {/* Niche Landing Pages */}
        <Route path="/advogado-consumidor" element={<NicheLanding />} />
        <Route path="/advogado-trabalhista" element={<NicheLanding />} />
        <Route path="/advogado-familia" element={<NicheLanding />} />
        <Route path="/advogado-civil" element={<NicheLanding />} />
        <Route path="/advogado-previdenciario" element={<NicheLanding />} />
        <Route path="/advogado-criminal" element={<NicheLanding />} />
        {/* City Landing Pages - Local SEO */}
        <Route path="/advogado/:citySlug" element={<CityLanding />} />
        {/* City + Niche Landing Pages - Ultra Local SEO */}
        <Route path="/advogado-:nicheSlug-:citySlug" element={<CityNicheLanding />} />
        {/* Conversion Tracking */}
        <Route path="/conversao" element={<Conversao />} />
        {/* Admin */}
        <Route path="/admin" element={<LeadsDashboard />} />
        <Route path="/admin/leads" element={<LeadsDashboard />} />
        <Route path="/admin/qa" element={<QADashboard />} />
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
        <LazyMotion features={domAnimation} strict>
          <TooltipProvider>
            <LawyerPresenceProvider>
              <AttendanceProvider>
                <Toaster />
                <Sonner />
                <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
                  <AnimatedRoutes />
                  <FloatingWhatsApp />
                </BrowserRouter>
              </AttendanceProvider>
            </LawyerPresenceProvider>
          </TooltipProvider>
        </LazyMotion>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);

export default App;

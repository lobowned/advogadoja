import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { LawyerPresenceProvider } from "@/contexts/LawyerPresenceContext";
import { AttendanceProvider } from "@/contexts/AttendanceContext";
import Index from "./pages/Index";
import SelectNiche from "./pages/SelectNiche";
import SelectAction from "./pages/SelectAction";
import DynamicQuestionnaire from "./pages/DynamicQuestionnaire";
import Completed from "./pages/Completed";
import NotFound from "./pages/NotFound";
import LeadsDashboard from "./pages/admin/LeadsDashboard";
import QADashboard from "./pages/admin/QADashboard";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import FAQ from "./pages/FAQ";
import NicheLanding from "./pages/NicheLanding";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LawyerPresenceProvider>
          <AttendanceProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
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
                {/* Niche Landing Pages */}
                <Route path="/advogado-trabalhista" element={<NicheLanding />} />
                <Route path="/advogado-familia" element={<NicheLanding />} />
                <Route path="/advogado-civil" element={<NicheLanding />} />
                <Route path="/advogado-previdenciario" element={<NicheLanding />} />
                <Route path="/advogado-criminal" element={<NicheLanding />} />
                {/* Admin */}
                <Route path="/admin" element={<LeadsDashboard />} />
                <Route path="/admin/leads" element={<LeadsDashboard />} />
                <Route path="/admin/qa" element={<QADashboard />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </AttendanceProvider>
        </LawyerPresenceProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

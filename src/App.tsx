import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LawyerPresenceProvider } from "@/contexts/LawyerPresenceContext";
import Index from "./pages/Index";
import SelectNiche from "./pages/SelectNiche";
import SelectAction from "./pages/SelectAction";
import DynamicQuestionnaire from "./pages/DynamicQuestionnaire";
import Completed from "./pages/Completed";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LawyerPresenceProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/selecionar-nicho" element={<SelectNiche />} />
            <Route path="/selecionar-acao/:nicheId" element={<SelectAction />} />
            <Route path="/questionario/:nicheId/:actionId" element={<DynamicQuestionnaire />} />
            <Route path="/concluido" element={<Completed />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LawyerPresenceProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

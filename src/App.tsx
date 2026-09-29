import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Index from "./pages/Index";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MobileQuotePrompt from "@/components/MobileQuotePrompt";

const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const MarketLandingPage = lazy(() => import("./pages/MarketLandingPage"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Suspense fallback={<div className="h-screen w-full bg-[#121212]" />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/free-quote" element={<LandingPage />} />
            <Route path="/cyprus" element={<MarketLandingPage market="cyprus" />} />
            <Route path="/uk" element={<MarketLandingPage market="uk" />} />
          </Routes>
          <MobileQuotePrompt />
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

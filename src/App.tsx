import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Index from "./pages/Index";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Lazy loading για να μην φορτώνει το portfolio αν ο χρήστης μείνει στην αρχική
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));

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
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

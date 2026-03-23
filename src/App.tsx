import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Δημιουργία του Query Client για τη διαχείριση των δεδομένων
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Ειδοποιήσεις συστήματος (Pop-ups) */}
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        <Routes>
          {/* Η κύρια σελίδα που περιλαμβάνει Hero, Portfolio, Case Studies, Contact κλπ. */}
          <Route path="/" element={<Index />} />
          
          {/* Catch-all διαδρομή για σελίδες που δεν υπάρχουν (404) */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

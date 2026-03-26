import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Δημιουργία του Query Client για τη διαχείριση των δεδομένων και cache
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Notifications / Pop-ups */}
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        <Routes>
          {/* Η κύρια διαδρομή που οδηγεί στο Index.tsx. 
            Εκεί μέσα έχουμε βάλει το Hero, Portfolio, Testimonials και Contact.
          */}
          <Route path="/" element={<Index />} />
          
          {/* Catch-all διαδρομή για 404 Error σελίδες */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

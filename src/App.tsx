import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Αρχικοποίηση του QueryClient για τη διαχείριση δεδομένων
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Εξαρτήματα για τα αναδυόμενα μηνύματα (Notifications) */}
      <Toaster />
      <Sonner />
      
      <BrowserRouter>
        <Routes>
          {/* Η κεντρική σελίδα (Home) */}
          <Route path="/" element={<Index />} />
          
          {/* Σελίδα 404 - αν ο χρήστης γράψει λάθος URL */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

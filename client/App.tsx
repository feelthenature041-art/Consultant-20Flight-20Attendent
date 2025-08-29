import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "@/components/layout/Layout";
import Placeholder from "@/pages/Placeholder";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/mentors" element={<Placeholder title="Mentors Directory" description="Filters, search, and mentor cards are coming next." />} />
            <Route path="/how-it-works" element={<Placeholder title="How It Works" />} />
            <Route path="/pricing" element={<Placeholder title="Pricing" />} />
            <Route path="/about" element={<Placeholder title="About Guided" />} />
            <Route path="/contact" element={<Placeholder title="Contact / Book" />} />
            <Route path="/terms" element={<Placeholder title="Terms" />} />
            <Route path="/privacy" element={<Placeholder title="Privacy" />} />
            <Route path="/refunds" element={<Placeholder title="Refunds" />} />
            {/* CATCH-ALL */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);

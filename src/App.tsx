import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { TooltipProvider } from "@/components/ui/tooltip";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ScrollToTop from "@/components/ScrollToTop";
import HomePage from "./pages/HomePage";
import DiscountCodesPage from "./pages/DiscountCodesPage";
import HowToUsePage from "./pages/HowToUsePage";
import TipsGuidePage from "./pages/TipsGuidePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <ScrollToTop />
          <SiteHeader />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/discount-codes" element={<DiscountCodesPage />} />
              <Route path="/how-to-use" element={<HowToUsePage />} />
              <Route path="/tips-guide" element={<TipsGuidePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <SiteFooter />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;

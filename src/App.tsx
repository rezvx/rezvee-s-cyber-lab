import { useEffect, Suspense, lazy } from "react";
import Navigation from "@/components/Navigation";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";

// Lazy pages (code splitting)
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Skills = lazy(() => import("./pages/Skills"));
const Projects = lazy(() => import("./pages/Projects"));
const Reports = lazy(() => import("./pages/Reports"));
const Resume = lazy(() => import("./pages/Resume"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

// Lazy MotionShell (loads framer-motion only when ready)
const MotionShell = lazy(() => import("./components/MotionShell"));

const queryClient = new QueryClient();

function RedirectHandler() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get("redirect");
    if (redirect && location.search.includes("redirect=")) {
      navigate(redirect, { replace: true });
    }
  }, [navigate, location.search]);

  return null;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}

function RouteFallback() {
  return (
    <div className="pt-24 px-6">
      <div className="animate-pulse h-6 w-48 rounded mb-4 bg-muted" />
      <div className="animate-pulse h-4 w-full max-w-xl rounded bg-muted" />
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        <BrowserRouter>
          <ScrollToTop />
          <RedirectHandler />

          {/* Static nav */}
          <Navigation />

          {/* Route code-splitting */}
          <Suspense fallback={<RouteFallback />}>
            {/* Animation shell loads lazily (framer-motion split) */}
            <Suspense fallback={<div className="pt-16" />}>
              <MotionShell>
                <AppRoutes />
              </MotionShell>
            </Suspense>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
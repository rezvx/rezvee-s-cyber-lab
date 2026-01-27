import { useEffect, Suspense, lazy, useCallback } from "react";
import { ArrowRight, Github, Download, Shield } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const HeroTerminal = lazy(() => import("@/components/HeroTerminal"));

/**
 * Schedules work after the initial paint without blocking rendering.
 * Uses requestIdleCallback when available, otherwise falls back to setTimeout.
 */
function useIdlePrefetch(prefetchFn: () => void, delayMs = 1200) {
  const run = useCallback(() => {
    if (typeof window === "undefined") return;

    if ("requestIdleCallback" in window) {
      const id = (window as any).requestIdleCallback(prefetchFn);
      return () => (window as any).cancelIdleCallback?.(id);
    }

    const id = window.setTimeout(prefetchFn, delayMs) as number;
    return () => window.clearTimeout(id);
  }, [prefetchFn, delayMs]);

  useEffect(() => {
    const cancel = run();
    return () => cancel?.();
  }, [run]);
}

export default function Index() {
  // Prefetch likely next pages after initial render (optional)
  useIdlePrefetch(() => {
    // Use your actual page modules (relative to this file)
    import("./Projects");
    import("./Resume");
  });

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 grid-pattern opacity-50" aria-hidden="true" />

        {/* Gradient orbs */}
        <div
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyber-green/10 rounded-full blur-3xl animate-pulse-slow"
          aria-hidden="true"
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur border border-border mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" aria-hidden="true" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            {/* Heading */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            >
              <span className="text-foreground">Hi, I&apos;m </span>
              <span className="text-gradient">Rezvee Parvez</span>
            </h1>

            {/* Title */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="p-2 rounded-lg bg-primary/10" aria-hidden="true">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Network &amp; Application Security Practitioner
              </h2>
            </div>

            {/* Tagline */}
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in"
              style={{ animationDelay: "0.3s" }}
            >
              Hands-on experience designing, securing, and testing network and web application environments in
              controlled lab setups. Skilled in vulnerability assessment, security misconfiguration analysis, and
              defensive network design with a strong focus on practical, real-world methodologies.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="cyber" size="lg" asChild>
                <Link to="/projects" aria-label="View my projects">
                  View Projects
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>

              <Button variant="cyber-outline" size="lg" asChild>
                <Link to="/resume" aria-label="Download my resume">
                  <Download className="h-5 w-5" aria-hidden="true" />
                  Download Resume
                </Link>
              </Button>

              <Button variant="outline" size="lg" asChild>
                <a
                  href="https://github.com/rezvx"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open my GitHub profile"
                >
                  <Github className="h-5 w-5" aria-hidden="true" />
                  GitHub Profile
                </a>
              </Button>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 max-w-md animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">5+</div>
                <div className="text-sm text-muted-foreground">Lab Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">10+</div>
                <div className="text-sm text-muted-foreground">Skills</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-sm text-muted-foreground">Reports</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative terminal (lazy) */}
        <Suspense fallback={null}>
          <HeroTerminal />
        </Suspense>
      </section>

      {/* Skills preview */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {["TCP/IP", "Nmap", "Burp Suite", "Wireshark", "Kali Linux", "OWASP", "AppSec", "VLAN"].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 rounded-full bg-secondary/50 border border-border text-muted-foreground hover:border-primary/50 hover:text-primary transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
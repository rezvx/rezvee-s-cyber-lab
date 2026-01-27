import { useEffect, useMemo, useState, Suspense, lazy } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";

const MobileMenuOverlay = lazy(() => import("./MobileMenuOverlay"));

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Reports", path: "/reports" },
  { name: "Resume", path: "/resume" },
  { name: "Contact", path: "/contact" },
] as const;

// Preload route chunks on intent (hover / focus)
const preloadMap: Partial<Record<(typeof navItems)[number]["path"], () => Promise<unknown>>> = {
  "/projects": () => import("@/pages/Projects"),
  "/reports": () => import("@/pages/Reports"),
  "/resume": () => import("@/pages/Resume"),
};

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock background scroll when menu is open
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen]);

  // Close on ESC
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  // Portal target
  const portalTarget = useMemo(() => (typeof window === "undefined" ? null : document.body), []);

  const onPreload = (path: (typeof navItems)[number]["path"]) => preloadMap[path]?.();

  return (
    <>
      {/* Header Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center group" aria-label="Go to Home">
              <img
                src={logo}
                alt="rezV.me - Network & Cybersecurity Professional"
                className="h-8 w-auto object-contain transition-opacity group-hover:opacity-80"
                width={128}
                height={32}
                loading="eager"
                decoding="async"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const active = location.pathname === item.path;

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onMouseEnter={() => onPreload(item.path)}
                    onFocus={() => onPreload(item.path)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      active
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay via portal (lazy-loaded framer-motion) */}
      {portalTarget
        ? createPortal(
            <Suspense fallback={null}>
              <MobileMenuOverlay
                id="mobile-menu"
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                navItems={navItems as unknown as { name: string; path: string }[]}
                activePath={location.pathname}
                logoSrc={logo}
                onPreload={onPreload}
              />
            </Suspense>,
            portalTarget
          )
        : null}
    </>
  );
}
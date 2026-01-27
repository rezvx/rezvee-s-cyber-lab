import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";

type NavItem = { name: string; path: string };

type Props = {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  activePath: string;
  logoSrc: string;
  onPreload?: (path: string) => void; // ✅ added
};

export default function MobileMenuOverlay({
  id,
  isOpen,
  onClose,
  navItems,
  activePath,
  logoSrc,
  onPreload,
}: Props) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          id={id}
          className="fixed inset-0 z-[9999] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Overlay */}
          <motion.button
            type="button"
            aria-label="Close menu"
            className="absolute inset-0 w-full h-full bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Panel */}
          <motion.div
            className="relative w-full h-full bg-background"
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -12, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <div className="px-4 pt-5">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  className="flex items-center group"
                  onClick={onClose}
                  aria-label="Go to Home"
                >
                  <img
                    src={logoSrc}
                    alt="rezV.me - Network & Cybersecurity Professional"
                    className="h-8 w-auto object-contain transition-opacity group-hover:opacity-80"
                    width={128}
                    height={32}
                    loading="eager"
                    decoding="async"
                  />
                </Link>

                <Button variant="ghost" size="icon" aria-label="Close menu" onClick={onClose}>
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="mt-5 h-px bg-border/70" />

              <nav className="mt-8 flex flex-col gap-2">
                {navItems.map((item, idx) => {
                  const active = activePath === item.path;

                  return (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.03 * idx, duration: 0.18, ease: "easeOut" }}
                    >
                      <Link
                        to={item.path}
                        onClick={onClose}
                        onMouseEnter={() => onPreload?.(item.path)} // ✅ added
                        onFocus={() => onPreload?.(item.path)} // ✅ added
                        className={`block rounded-xl px-4 py-4 text-base font-medium transition-colors ${
                          active
                            ? "bg-primary/12 text-primary"
                            : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                        }`}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
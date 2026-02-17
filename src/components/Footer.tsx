import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/footer.svg";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-border bg-card/40 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12 md:py-14">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 items-start">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-5">
              <Link to="/" className="inline-flex items-center group">
                <img
                  src={logo}
                  alt="rezV.me - Network & Cybersecurity Professional"
                  className="h-20 sm:h-24 md:h-24 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
                  loading="eager"
                />
              </Link>

              <div className="space-y-2">
                <h4 className="text-base md:text-lg font-semibold text-foreground">
                  Security Engineer | Network & AppSec
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed max-w-md">
                  Passionate about lab-driven learning and practical security. Focused on
                  building secure systems and producing clear documentation that reflects
                  real-world methodology and results.
                </p>

                {/* CTA: Contact */}
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/90 transition-colors"
                  >
                    
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>

            <nav className="flex flex-col gap-2">
              {[
                { label: "Projects", to: "/projects" },
                { label: "Reports", to: "/reports" },
                { label: "Resume", to: "/resume" },
                { label: "About Me", to: "/about" },
                
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>

            <div className="flex items-center gap-3">
              <a
                href="https://github.com/rezvx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="relative z-10 pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/70 border border-border/60 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                <Github aria-hidden="true" />
              </a>

              <a
                href="https://linkedin.com/in/rezvx"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="relative z-10 pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/70 border border-border/60 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                <Linkedin aria-hidden="true" />
              </a>

              {/* Mail icon routes to Contact page */}
              <Link
                to="/contact"
                aria-label="Contact"
                title="Contact"
                className="relative z-10 pointer-events-auto inline-flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/70 border border-border/60 hover:border-primary/40 hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                <Mail aria-hidden="true" />
              </Link>
            </div>

            {/* Small helper text */}
            <p className="mt-4 text-xs text-muted-foreground max-w-xs">
              Feel free to reach out for collaborations, questions, or just to say hi!
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-muted-foreground">
            © {year} Rezvee Parvez. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with security in mind 🔒
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

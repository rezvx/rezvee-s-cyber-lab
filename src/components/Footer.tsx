import { Shield, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-lg">
                <span className="text-gradient">Rezvee</span>
                <span className="text-foreground">.sec</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Cybersecurity & Network Engineer with hands-on experience in lab-based 
              network setups and web application security testing.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Projects
              </Link>
              <Link to="/reports" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Reports
              </Link>
              <Link to="/resume" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Resume
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/rezveeparvez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/rezveeparvez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:rezvee@example.com"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Rezvee Parvez. All rights reserved.
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

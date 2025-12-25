import {  Github, Linkedin, Mail } from "lucide-react";
import logo from "@/assets/footer.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
             <Link to="/" className="flex items-center group">
  <img 
    src={logo} 
    alt="rezV.me - Network & Cybersecurity Professional" 
    className="h-32 transition-opacity group-hover:opacity-80"
  />
</Link>
            <p className="text-muted-foreground text-sm max-w-md">
              Practical experience in network engineering and web application security,
focused on vulnerability assessment, secure configurations, and risk mitigation
within lab-based environments.
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
                href="https://github.com/rezvx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/rezvx"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary hover:bg-primary/20 hover:text-primary transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:rezveeparvez@gmail.com"
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

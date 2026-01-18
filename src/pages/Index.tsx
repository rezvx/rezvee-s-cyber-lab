import { ArrowRight, Github, Download, Shield, Terminal, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background Grid */}
        <div className="absolute inset-0 grid-pattern opacity-50" />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-cyber-green/10 rounded-full blur-3xl animate-pulse-slow" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 backdrop-blur border border-border mb-8 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <span className="text-foreground">Hi, I'm </span>
              <span className="text-gradient">Rezvee Parvez</span>
            </h1>

            {/* Title */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="p-2 rounded-lg bg-primary/10">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Network Analyst & Cybersecurity Enthusiast
              </h2>
            </div>

            {/* Tagline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              Hands-on experience designing, securing, and testing network and web application
environments through controlled lab setups. Skilled in vulnerability assessment,
security misconfiguration analysis, and defensive network design.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button variant="cyber" size="lg" asChild>
                <Link to="/projects">
                  View Projects
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="cyber-outline" size="lg" asChild>
                <Link to="/resume">
                  <Download className="h-5 w-5" />
                  Download Resume
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="https://github.com/rezvx" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  GitHub Profile
                </a>
              </Button>
            </div>

            {/* Quick Stats */}
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

        {/* Decorative Terminal */}
        <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 w-96 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <div className="cyber-card rounded-xl overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-secondary border-b border-border">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-cyber-orange/60" />
              <div className="w-3 h-3 rounded-full bg-cyber-green/60" />
              <span className="ml-2 text-xs text-muted-foreground font-mono">terminal</span>
            </div>
            <div className="p-4 font-mono text-sm space-y-2">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">$ whoami</span>
              </div>
              <div className="text-foreground pl-6">rezvee_parvez</div>
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">$ cat skills.txt</span>
              </div>
              <div className="text-cyber-green pl-6">
                [+] Network Security<br />
                [+] VAPT Testing<br />
                [+] OWASP Top 10<br />
                [+] Infrastructure
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-4 w-4 text-cyber-green animate-pulse" />
                <span className="text-cyber-green">Secure connection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Preview */}
      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {["TCP/IP", "Nmap", "Burp Suite", "Wireshark", "Kali Linux", "OWASP", "Firewall", "VLAN"].map((skill) => (
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
};

export default Index;

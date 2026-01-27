import { Terminal, Lock } from "lucide-react";

export default function HeroTerminal() {
  return (
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
  );
}
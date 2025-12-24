import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    title: "Enterprise Network Security Lab",
    environment: "Virtual Lab (GNS3/VMware)",
    objectives: "Design and implement a secure enterprise network with VLANs, firewalls, and intrusion detection systems.",
    methodology: [
      "Configured multi-layer switch with VLAN segmentation",
      "Implemented pfSense firewall with custom rules",
      "Deployed Snort IDS for traffic monitoring",
      "Conducted network penetration testing",
    ],
    tools: ["GNS3", "VMware", "pfSense", "Snort", "Nmap"],
    githubUrl: "#",
    reportUrl: "#",
  },
  {
    title: "Web Application VAPT Assessment",
    environment: "OWASP WebGoat/DVWA",
    objectives: "Identify and document vulnerabilities in web applications following OWASP testing methodology.",
    methodology: [
      "Performed reconnaissance and enumeration",
      "Tested for OWASP Top 10 vulnerabilities",
      "Exploited SQL injection and XSS flaws",
      "Created detailed remediation report",
    ],
    tools: ["Burp Suite", "OWASP ZAP", "SQLMap", "Nikto"],
    githubUrl: "#",
    reportUrl: "#",
  },
  {
    title: "Network Traffic Analysis Project",
    environment: "Virtual Lab Environment",
    objectives: "Capture and analyze network traffic to identify security anomalies and potential threats.",
    methodology: [
      "Set up packet capture infrastructure",
      "Analyzed protocols and traffic patterns",
      "Identified suspicious network activities",
      "Documented findings with evidence",
    ],
    tools: ["Wireshark", "tcpdump", "NetworkMiner", "Zeek"],
    githubUrl: "#",
  },
  {
    title: "Windows Server Hardening",
    environment: "Windows Server 2019 VM",
    objectives: "Implement security best practices and hardening measures on Windows Server infrastructure.",
    methodology: [
      "Applied CIS benchmark configurations",
      "Configured Group Policy security settings",
      "Implemented Active Directory security",
      "Performed vulnerability scanning",
    ],
    tools: ["Windows Server", "Nessus", "PowerShell", "GPO"],
    githubUrl: "#",
    reportUrl: "#",
  },
  {
    title: "Firewall Rule Optimization",
    environment: "pfSense/OPNsense Lab",
    objectives: "Design and optimize firewall rulesets for improved security and network performance.",
    methodology: [
      "Audited existing firewall rules",
      "Implemented least-privilege access policies",
      "Configured VPN tunnels for secure access",
      "Tested rules against attack simulations",
    ],
    tools: ["pfSense", "OPNsense", "Nmap", "hping3"],
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Lab Projects"
            title="Security"
            highlight="Projects"
            description="Hands-on cybersecurity projects conducted in controlled lab environments"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 max-w-2xl mx-auto text-center">
            <p className="text-sm text-muted-foreground bg-secondary/50 rounded-lg px-6 py-4 border border-border">
              <span className="text-primary font-medium">Note:</span> All projects were conducted in 
              controlled lab environments with proper authorization. No real-world systems were 
              tested without explicit permission.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;

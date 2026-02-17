import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ProjectCard from "@/components/ProjectCard";
import { Helmet } from "react-helmet-async";

const projects = [
  {
    category: "Cisco Packet Tracer",
    title: "Enterprise Network Design",
    environment: "Enterprise Network Design (VLAN + Inter-VLAN Routing",
    objectives: "Designed a multi-VLAN enterprise LAN with trunking and router-on-a-stick inter-VLAN routing. Validated segmentation, gateway reachability, and end-to-end connectivity.",
    methodology: [
      "Created VLANs and assigned access ports",
      "Configured 802.1Q trunking between switches and router",
      "Implemented inter-VLAN routing (sub-interfaces)",
      "Validated connectivity and documented fixes",
    ],
    tools: ["Cisco Packet Tracer", "VLAN", "802.1Q", "Inter-VLAN Routing"],
    githubUrl: "https://github.com/rezvx/enterprise-vlan-intervlan-routing",
    reportUrl: "/reports/enterprise-network-design.pdf",
  },
  {
    title: "Secure WAN Connectivity (OSPF + ACL)",
    environment: "Cisco Packet Tracer",
    objectives: "Built a multi-site WAN using OSPF and enforced traffic control using ACLs. Verified routing convergence and secure reachability across LAN-A/LAN-B/LAN-C.",
    methodology: [
       "Configured OSPF (multi-area / ABR design)",
      "Verified routes and neighbor adjacency",
      "Applied ACLs to allow/deny specific inter-site traffic",
      "Captured before/after testing and results",
    ],
    tools: ["Cisco Packet Tracer", "OSPF", "ACL", "Routing"],
    githubUrl: "https://github.com/rezvx/secure-wan-connectivity",
    reportUrl: "/reports/secure-wan-connectivity.pdf",
  },
  {
    title: "Network Troubleshooting & Performance Validation",
    environment: "Cisco Packet Tracer",
    objectives: "Simulated real-world network faults (down interfaces, wrong trunks, IP issues) and followed a structured troubleshooting workflow to restore connectivity.",
    methodology: [
      "Diagnosed faults using show commands and ICMP tests",
      "Identified root causes (trunk/sub-interface/ACL/IP)",
      "Applied fixes and validated end-to-end reachability",
      "Documented problem → solution mapping",
    ],
    tools: ["Cisco Packet Tracer", "ICMP", "ARP", "Troubleshooting"],
    githubUrl: "https://github.com/rezvx/Network-Troubleshooting-Performance-Lab",
    reportUrl: "/reports/network-troubleshooting-analysis.pdf",
  },
  {
    title: "Web Application VAPT (OWASP Top 10) — DVWA",
    environment: "Kali + DVWA",
    objectives: "Conducted a structured VAPT on DVWA using OWASP methodology. Documented findings with evidence, risk impact, and remediation guidance.",
    methodology: [
      "Recon and enumeration of attack surface",
      "Tested OWASP Top 10 categories",
      "Performed manual validation (e.g., XSS, SQLi)",
      "Wrote a report with severity mapping and fixes",
    ],
    tools: ["Kali Linux", "Burp Suite", "DVWA", "OWASP"],
    githubUrl: "https://github.com/rezvx/DVWA-Stored-XSS-VAPT",
    reportUrl: "/reports/dvwa-vapt-report.pdf",
  },
  {
    title: "Local AI Server Testing (Ollama + Open WebUI)",
    environment: "Docker + WSL",
    objectives: "Deployed and tested a local AI stack for running LLMs in a home lab environment. Verified model serving, UI access, and stability for daily usage.",
    methodology: [
     "Deployed Ollama + Open WebUI (Docker Compose)",
      "Pulled and tested multiple local LLMs",
      "Validated performance and resource usage",
      "Documented setup, usage, and troubleshooting",
    ],
    tools: ["Docker", "Ollama", "Open WebUI", "Linux/Windows"],
    githubUrl: "https://github.com/rezvx/local-ai-assistant",

  },
  {
     title: "Portfolio Website",
  objectives:
    "Built and customized my cybersecurity portfolio site to showcase labs, reports, and skills.",
  environment: "Vite + React + GitHub Pages",
    methodology: [
    "Customized UI components and navigation (React + Tailwind/shadcn)",
    "Designed and integrated branding assets (logo, footer, favicon set)",
    "Configured SEO metadata (title, description, OpenGraph)",
    "Deployed using GitHub Pages (gh-pages) with custom domain (rezv.me)",
    "Maintained local dev → build → deploy workflow",
  ],
   tools: ["Vite", "React", "Tailwind", "shadcn/ui", "Cloudflare Pages",],
  githubUrl: "https://github.com/rezvx/rezvee-s-cyber-lab",
  liveUrl: "https://rezv.me",
  },
];

const Projects = () => {
  return (
    <Layout>

      <Helmet>
      <title>Projects | Rezvee Parvez</title>
      <meta
        name="description"
        content="Explore hands-on cybersecurity projects by Rezvee Parvez, including network design, vulnerability assessment, and AI server testing. Each project includes detailed documentation and reports."
      />
      <meta
        name="keywords"
        content="Rezvee Parvez, cybersecurity, network security, ethical hacking, OWASP, VLAN, OSPF, penetration testing"
      />
      <meta property="og:title" content="Projects | Rezvee Parvez" />
      <meta
        property="og:description"
        content="Network & Cybersecurity Professional dedicated to ethical security practices."
      />
      <meta property="og:type" content="website" />
    </Helmet>
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

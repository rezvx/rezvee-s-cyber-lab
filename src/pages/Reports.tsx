import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ReportCard from "@/components/ReportCard";

const reports = [
  {
    title: "Enterprise Network Security Assessment",
    type: "Executive Summary",
    summary: "Comprehensive security assessment of a simulated enterprise network environment, identifying critical vulnerabilities in network segmentation and firewall configurations.",
    date: "December 2024",
    pdfUrl: "#",
  },
  {
    title: "OWASP Top 10 Vulnerability Analysis",
    type: "Technical Write-up",
    summary: "Detailed technical documentation of web application security testing, covering SQL injection, XSS, and authentication bypass vulnerabilities discovered in lab environment.",
    date: "November 2024",
    pdfUrl: "#",
  },
  {
    title: "Network Infrastructure Risk Assessment",
    type: "Risk Assessment",
    summary: "Risk-based analysis of network infrastructure vulnerabilities, including threat modeling, impact analysis, and prioritized remediation recommendations.",
    date: "October 2024",
    pdfUrl: "#",
  },
  {
    title: "Windows Server Hardening Guide",
    type: "Technical Guide",
    summary: "Step-by-step hardening guide for Windows Server environments based on CIS benchmarks, including Group Policy configurations and security best practices.",
    date: "September 2024",
    pdfUrl: "#",
  },
  {
    title: "Incident Response Playbook",
    type: "Documentation",
    summary: "Comprehensive incident response procedures for common security incidents including malware infections, data breaches, and network intrusions.",
    date: "August 2024",
    pdfUrl: "#",
  },
  {
    title: "Firewall Configuration Audit Report",
    type: "Audit Report",
    summary: "Security audit of firewall rules and configurations, identifying overly permissive rules and recommending optimizations for improved security posture.",
    date: "July 2024",
    pdfUrl: "#",
  },
];

const Reports = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Documentation"
            title="Security"
            highlight="Reports"
            description="Executive summaries, technical write-ups, and risk assessments from lab projects"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {reports.map((report) => (
              <ReportCard key={report.title} {...report} />
            ))}
          </div>

          {/* Report Types Legend */}
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            {["Executive Summary", "Technical Write-up", "Risk Assessment", "Audit Report"].map((type) => (
              <span
                key={type}
                className="px-4 py-2 text-sm rounded-full bg-secondary border border-border text-muted-foreground"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Reports;

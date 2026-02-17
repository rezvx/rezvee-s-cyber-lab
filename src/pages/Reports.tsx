import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import ReportCard from "@/components/ReportCard";
import { Helmet } from "react-helmet-async";

const reports = [
  {
    title: "Enterprise Network Security Assessment",
    type: "Executive Summary",
    summary: "Comprehensive security assessment of a simulated enterprise network environment, identifying critical vulnerabilities in network segmentation and firewall configurations.",
    date: "December 2025",
    pdfUrl: "/reports/enterprise-network-design.pdf",
  },
  {
    title: "OWASP Top 10 Vulnerability Analysis",
    type: "Technical Write-up",
    summary: "Detailed technical documentation of web application security testing, covering SQL injection, XSS, and authentication bypass vulnerabilities discovered in lab environment.",
    date: "December 2025",
    pdfUrl: "/reports/dvwa-vapt-report.pdf",
  },
  {
    title: "Secure WAN Connectivity",
    type: "Risk Assessment",
    summary: "Risk-based analysis of network infrastructure vulnerabilities, including threat modeling, impact analysis, and prioritized remediation recommendations.",
    date: "December 2025",
    pdfUrl: "/reports/secure-wan-connectivity.pdf",
  },
  {
    title: "Network Troubleshooting & Performance Analysis",
    type: "Technical Guide",
    summary: "Step-by-step optimizing guide for troubleshooting common network issues such as latency, packet loss, and misconfigurations in a lab setting.",
    date: "August 2025",
    pdfUrl: "/reports/network-troubleshooting-analysis.pdf",
  },
  {
    title: "bWapp Vulnerability Analysis",
    type: "Documentation",
    summary: "In-depth analysis of vulnerabilities found in the bWapp web application, including exploitation techniques and mitigation strategies.",
    date: "December 2025",
    pdfUrl: "/reports/bwapp-vapt-report.pdf",
  },
  {
    title: "Over The Wire : Bandit",
    type: "Linux Fundamentals",
    summary: "This project involved progressing through multiple levels by discovering hidden files, handling permissions, decoding data, and understanding basic security concepts. The lab strengthened my familiarity with Linux fundamentals, shell commands, and problem-solving under constrained environments.",
    date: "July 2025",
    pdfUrl: "/reports/bandit.pdf",
  },
];

const Reports = () => {
  return (
    <Layout>

 <Helmet>
      <title>Reports | Rezvee Parvez</title>
      <meta
        name="description"
        content="Explore detailed technical reports and documentation from Rezvee Parvez's cybersecurity lab projects."
      />
      <meta
        name="keywords"
        content="cybersecurity reports, technical documentation, vulnerability analysis, risk assessment, network security, web application security"
      />
      <meta property="og:title" content="Reports | Rezvee Parvez" />
      <meta
        property="og:description"
        content="Network & cybersecurity professional dedicated to ethical security practices and lab-based learning."
      />
      <meta property="og:type" content="website" />
    </Helmet>

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

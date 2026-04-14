import { useState } from "react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import PageHelmet from "@/components/PageHelmet";
import { X, ShieldCheck, BookOpen, ExternalLink, Clock, Eye } from "lucide-react";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  category: string;
  icon: React.ElementType;
  description: string;
  skills: string[];
  logoUrl: string;
  credentialUrl: string;
  certificateUrl?: string;
  inProgress?: boolean;
}

const certifications: Certification[] = [
  {
    title: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    date: "21 November, 2025",
    category: "Networking",
    icon: ShieldCheck,
    description: "Comprehensive certification covering network fundamentals, IP connectivity, security fundamentals, and automation.",
    skills: ["Networking", "IP Routing", "VLANs", "OSPF", "Network Security"],
    logoUrl: "/logos/cisco.jpg",
    credentialUrl: "https://cp.certmetrics.com/cisco/en/public/verify/credential/ffa3fd6c458743d6b4f5f8fbfd72b800",
    certificateUrl: "/certificates/ccna.pdf",
  },
  {
    title: "Pre-Security",
    issuer: "TryHackMe",
    date: "28 February, 2026",
    category: "Networking & Security",
    icon: ShieldCheck,
    description: "Completed the Pre-Security learning path covering networking fundamentals, web fundamentals, and core cybersecurity concepts.",
    skills: ["Networking", "HTTP/S", "DNS", "Linux", "Web Security"],
    logoUrl: "/logos/tryhackme.svg",
    credentialUrl: "https://tryhackme.com/certificate/THM-25OO8L1NGV",
    certificateUrl: "/certificates/thm-pre-security.pdf",
  },
  {
    title: "Cybersecurity Career Starter Certification (CCSC)",
    issuer: "Hack & Fix",
    date: "29 December, 2025",
    category: "Newbie Cybersecurity",
    icon: BookOpen,
    description: "Entry-level certification focused on foundational cybersecurity skills, including threat analysis, vulnerability assessment, and basic penetration testing techniques.",
    skills: ["Threat Analysis", "Vulnerability Assessment", "Penetration Testing", "Cybersecurity Fundamentals"],
    logoUrl: "/logos/hack&fix.jpg",
    credentialUrl: "#",
    certificateUrl: "/certificates/ccsc.pdf",
  },
  {
    title: "TryHackMe — Cybersecurity 101",
    issuer: "TryHackMe",
    date: "13 April, 2026",
    category: "Cybersecurity",
    icon: BookOpen,
    description: "Hands-on labs covering Nmap, Metasploit, hash cracking, privilege escalation, and post-exploitation techniques.",
    skills: ["Nmap", "Metasploit", "John the Ripper", "Meterpreter"],
    logoUrl: "/logos/tryhackme.svg",
    credentialUrl: "https://tryhackme.com/certificate/THM-Y4MOAUZVGD",
    certificateUrl: "/certificates/thm-cybersecurity-101.pdf",
  },
  {
    title: "Jr. Pentester",
    issuer: "TryHackMe",
    date: "In Progress",
    category: "Cybersecurity",
    icon: BookOpen,
    description: "Comprehensive pentesting path covering reconnaissance, exploitation, post-exploitation, and reporting.",
    skills: ["Reconnaissance", "Exploitation", "Post-Exploitation", "Reporting"],
    logoUrl: "/logos/tryhackme.svg",
    credentialUrl: "#",
    inProgress: true,
  },
  {
    title: "TryHackMe — SOC Level 1",
    issuer: "TryHackMe",
    date: "In Progress",
    category: "Cybersecurity",
    icon: BookOpen,
    description: "Introduction to Security Operations Center (SOC) concepts and practices.",
    skills: ["SIEM", "Log Analysis", "Incident Response", "Threat Hunting"],
    logoUrl: "/logos/tryhackme.svg",
    credentialUrl: "#",
    inProgress: true,
  },
];

function CertModal({ cert, onClose }: { cert: Certification; onClose: () => void }) {
  // Fix: Move isPDF inside the component so it's accessible during render
  const isPDF = cert.certificateUrl?.toLowerCase().endsWith(".pdf");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={onClose}>
      <div className="bg-card rounded-xl w-full max-w-4xl overflow-hidden shadow-2xl border border-border" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center p-4 border-b bg-muted/30">
          <p className="font-semibold text-lg">{cert.title}</p>
          <button onClick={onClose} className="p-1 hover:bg-secondary rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>
        <div className="p-2 flex justify-center bg-black/5">
          {/* Using isPDF to decide how to render the file */}
          {isPDF ? (
            <iframe 
              src={`${cert.certificateUrl}#toolbar=0`} 
              className="w-full h-[70vh] rounded-md border-0" 
              title={cert.title}
            />
          ) : (
            <img src={cert.certificateUrl} className="max-h-[70vh] object-contain" alt={cert.title} />
          )}
        </div>
        <div className="p-4 flex justify-end gap-3 bg-muted/10 border-t">
          {cert.credentialUrl !== "#" && (
            <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="text-sm font-medium px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-all">
              Verify Credential
            </a>
          )}
          {cert.certificateUrl && (
            <a href={cert.certificateUrl} download className="text-sm font-medium px-4 py-2 bg-primary text-primary-foreground hover:opacity-90 rounded-md transition-all">
              Download PDF
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

function CertCard({ cert, onView }: { cert: Certification; onView: () => void }) {
  const Icon = cert.icon;
  return (
    <div className="group border border-border bg-card hover:border-primary/50 p-5 rounded-xl flex flex-col gap-4 transition-all duration-300 shadow-sm hover:shadow-md">
      <div className="flex justify-between items-start">
        <div className="p-2 bg-secondary/50 rounded-lg">
          <img src={cert.logoUrl} className="h-8 w-auto grayscale group-hover:grayscale-0 transition-all" alt={cert.issuer} />
        </div>
        {cert.inProgress ? (
          <span className="text-yellow-500 text-[10px] uppercase tracking-wider font-bold flex items-center gap-1.5 bg-yellow-500/10 px-2 py-1 rounded-full">
            <Clock size={12} /> In Progress
          </span>
        ) : (
          <span className="text-muted-foreground text-xs font-medium">{cert.date}</span>
        )}
      </div>

      <div>
        <div className="flex items-center gap-2 text-primary mb-1">
          <Icon size={14} />
          <span className="text-[11px] font-bold uppercase tracking-widest">{cert.category}</span>
        </div>
        <h3 className="font-bold text-lg leading-tight mb-2">{cert.title}</h3>
  <p className="text-sm text-muted-foreground line-clamp-3">{cert.description}</p>
</div>

      <div className="flex flex-wrap gap-1.5">
        {cert.skills.map((s) => (
          <span key={s} className="text-[12px] font-medium bg-secondary text-secondary-foreground border border-border px-2 py-0.5 rounded">
            {s}
          </span>
        ))}
      </div>

      <div className="flex gap-2 mt-auto pt-4">
        {cert.certificateUrl && !cert.inProgress && (
          <button 
            onClick={onView} 
            className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold py-2.5 border border-cyan-400 text-cyan-400 bg-transparent rounded-lg hover:bg-cyan-950/20 transition-all"
          >
            <Eye size={16} /> View
          </button>
        )}

        {cert.credentialUrl !== "#" && (
          <a 
            href={cert.credentialUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold py-2.5 bg-transparent text-slate-200 border border-white/15 rounded-lg hover:bg-white/5 transition-all"
          >
            <ExternalLink size={16} /> Verify
          </a>
        )}
      </div>
    </div>
  );
}

export default function Certifications() {
  const [activeCert, setActiveCert] = useState<Certification | null>(null);

  return (
    <Layout>

      <PageHelmet
          title="Certifications | Rezvee Parvez"
          canonical="https://rezv.me/certifications"
          description="Explore my cybersecurity certifications, including CCNA and TryHackMe achievements, demonstrating validated skills in network security and ethical hacking."
          keywords="Rezvee Parvez, cybersecurity certifications, network security certifications, ethical hacking certifications, CCNA, TryHackMe, Hack & Fix"
          ogTitle="Certifications | Rezvee Parvez"
          ogDescription="Showcasing my cybersecurity certifications, including CCNA and TryHackMe achievements, validating my skills in network security and ethical hacking."
          ogType="website"
        />
        
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Credentials"
            title="My"
            highlight="Certifications"
            description="Professional achievements and validated technical skills"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
            {certifications.map((cert) => (
              <CertCard
                key={cert.title}
                cert={cert}
                onView={() => setActiveCert(cert)}
              />
            ))}
          </div>
        </div>
      </section>

      {activeCert && (
        <CertModal cert={activeCert} onClose={() => setActiveCert(null)} />
      )}
    </Layout>
  );
}
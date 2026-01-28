import { Network, Shield, Wrench, Monitor, FileText, Brain } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import SkillCard from "@/components/SkillCard";

const skillCategories = [
  {
    icon: Network,
    title: "Networking",
    skills: [
      "TCP/IP",
      "VLAN Configuration",
      "Routing Protocols",
      "Subnetting",
      "DHCP",
      "Network Troubleshooting",
      "Packet Analysis",
    ],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    skills: [
      "VAPT",
      "OWASP Top 10",
      "Security Auditing",
      "Penetration Testing",
      "Risk Assessment",
      "Sniffing",
      "DDoS",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Technologies",
    skills: [
      "Nmap",
      "Burp Suite",
      "Wireshark",
      "Metasploit",
      "OWASP ZAP",
      "Nikto",
      "SQLMap",
      "Hydra",
      "John the Ripper",
    ],
  },
  {
    icon: Monitor,
    title: "Operating Systems",
    skills: [
      "Kali Linux",
      "Ubuntu Server",
      "Windows Server",
      "Parrot OS",
      "CentOS",
      "Red Hat Enterprise Linux",
    ],
  },
  {
    icon: FileText,
    title: "Reporting & Documentation",
    skills: [
      "Technical Writing",
      "Executive Summaries",
      "Risk Reports",
      "Vulnerability Documentation",
      "Markdown",
      "VAPT Report",
    ],
  },
  {
    icon: Brain,
    title: "Self-Learning & AI",
    skills: [
      "AI Fundamentals",
      "Prompt Engineering",
      "LLM Exploration",
      "Local AI Labs",
      "Model Evaluation",
      "Automation with AI",
      "AI-Assisted Research",
      "Continuous Learning",
    ],
  },
] as const;

const Skills = () => {
  const coreCompetencies = [
    { name: "Network Security", level: 70 },
    { name: "Vulnerability Assessment", level: 80 },
    { name: "Security Tools", level: 75 },
    { name: "Technical Documentation", level: 90 },
    { name: "AI-Driven Productivity", level: 65 }, // optional
  ] as const;

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Technical Skills"
            title="My"
            highlight="Expertise"
            description="Comprehensive skill set in networking, cybersecurity, AI learning, and technical documentation"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {skillCategories.map((category) => (
              <SkillCard
                key={category.title}
                icon={category.icon}
                title={category.title}
                skills={[...category.skills]}
              />
            ))}
          </div>

          {/* Proficiency Levels */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h1 className="text-xl font-semibold text-center text-foreground mb-8">
              Core Competencies
            </h1>

            <div className="space-y-4">
              {coreCompetencies.map((skill) => (
                <div key={skill.name} className="cyber-card rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-foreground">
                      {skill.name}
                    </span>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>

                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-cyber-green rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Skills;

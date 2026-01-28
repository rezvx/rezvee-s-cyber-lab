import { Shield, Target, BookOpen, Award, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { motion, useReducedMotion } from "framer-motion";

const About = () => {
  const prefersReducedMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    visible: { opacity: 1, y: 0 },
  };

  const cardHover = prefersReducedMotion
    ? {}
    : { y: -4 };

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-12">
          <SectionHeader
            badge="About Me"
            title="Network & Cybersecurity"
            highlight="Professional"
            description="Dedicated to ethical security practices, lab-based learning, and clear technical documentation"
          />

          {/* Top grid: summary + values */}
          <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 items-start max-w-6xl mx-auto">
            {/* LEFT: Summary / Focus */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: prefersReducedMotion ? 0.12 : 0.22, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="space-y-3">
                <h1 className="text-xl md:text-2xl font-semibold text-foreground">
                  Hi, I’m <span className="text-primary">Rezvee Parvez</span>
                </h1>

                <p className="text-muted-foreground leading-relaxed max-w-prose">
                  I’m a network and cybersecurity professional focused on secure network design,
                  vulnerability assessment, and practical lab-based learning. I document projects
                  clearly to demonstrate methodology, findings, and outcomes.
                </p>
              </div>

              {/* Focus Areas */}
              <div className="cyber-card rounded-xl p-6">
                <h2 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
                  Focus Areas
                </h2>

                <ul className="space-y-3 text-sm text-muted-foreground">
                  {[
                    "Network segmentation and routing labs (VLANs, OSPF, ACLs)",
                    "Web application security testing aligned with OWASP practices",
                    "Security tooling and Linux fundamentals for analysis and testing",
                    "Reporting and documentation (clear, structured, recruiter-friendly)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights (replace the odd 100% tile) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-sm font-semibold text-foreground mb-1">
                    Lab-Driven Approach
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Hands-on practice in controlled environments with repeatable workflows.
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <div className="text-sm font-semibold text-foreground mb-1">
                    Ethical Mindset
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Responsible testing, clear scope, and security-first documentation.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* RIGHT: Values Cards */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: prefersReducedMotion ? 0.12 : 0.22, ease: "easeOut", delay: prefersReducedMotion ? 0 : 0.05 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {[
                {
                  icon: Shield,
                  title: "Ethical Hacking",
                  desc: "All testing performed in controlled lab environments with proper authorization.",
                  bg: "bg-primary/10",
                  iconColor: "text-primary",
                },
                {
                  icon: Target,
                  title: "Goal-Oriented",
                  desc: "Focused on identifying issues, validating impact, and proposing actionable fixes.",
                  bg: "bg-cyber-green/10",
                  iconColor: "text-cyber-green",
                },
                {
                  icon: BookOpen,
                  title: "Continuous Learning",
                  desc: "Constantly improving through labs, research, and structured practice.",
                  bg: "bg-cyber-orange/10",
                  iconColor: "text-cyber-orange",
                },
                {
                  icon: Award,
                  title: "Quality Reports",
                  desc: "Clear documentation with methodology, evidence, and remediation guidance.",
                  bg: "bg-primary/10",
                  iconColor: "text-primary",
                },
              ].map((card) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    className="cyber-card rounded-xl p-6"
                    whileHover={cardHover}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    <div className={`p-3 rounded-lg ${card.bg} w-fit mb-4`}>
                      <Icon className={`h-6 w-6 ${card.iconColor}`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {card.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Journey / Narrative section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: prefersReducedMotion ? 0.12 : 0.22, ease: "easeOut" }}
            className="max-w-6xl mx-auto"
          >
            <div className="cyber-card rounded-xl p-6 md:p-8">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                My Journey
              </h3>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  My journey in cybersecurity began with curiosity about how systems communicate
                  and how misconfigurations or weaknesses can be discovered and mitigated. I
                  developed practical skills through structured labs, self-study, and repeatable
                  testing workflows.
                </p>

                <p>
                  I approach every project with an{" "}
                  <span className="text-foreground font-medium">ethical mindset</span>, ensuring
                  that testing stays within scope and is conducted responsibly. My goal is to
                  contribute to stronger security postures while continuously improving my
                  technical depth and documentation quality.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

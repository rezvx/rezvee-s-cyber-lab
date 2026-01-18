import { Shield, Target, BookOpen, Award } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const About = () => {
  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="About Me"
            title="Network & Cybersecurity"
            highlight="Professional"
            description="Dedicated to ethical security practices and continuous learning"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Bio Content */}
            <div className="space-y-6">
              <div className="cyber-card rounded-xl p-6">
                <p className="text-lg text-foreground leading-relaxed">
                  I'm <span className="text-primary font-semibold">Rezvee Parvez</span>, a Network and Cybersecurity professional with hands-on experience from lab-based and simulated environments. My interests include network engineering, web application security, and vulnerability analysis. I focus on building secure network architectures and understanding real attack techniques in order to implement effective defenses. I am continuously developing my skills through practical labs, documentation, and security research.
                </p>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                My journey in cybersecurity began with a fascination for understanding how systems 
                communicate and how to protect them from threats. I've developed practical skills 
                in network configuration, vulnerability assessment, and security testing through 
                dedicated lab work and self-study.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                I approach every project with an <span className="text-foreground font-medium">ethical mindset</span>, 
                ensuring that all security testing is conducted responsibly within controlled 
                environments. My goal is to contribute to organizations' security posture while 
                continuously expanding my knowledge in this ever-evolving field.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="text-2xl font-bold text-gradient mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Lab-Based Learning</div>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 border border-border">
                  <div className="text-2xl font-bold text-gradient mb-1">Ethical</div>
                  <div className="text-sm text-muted-foreground">Security Approach</div>
                </div>
              </div>
            </div>

            {/* Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="cyber-card rounded-xl p-6">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Ethical Hacking</h3>
                <p className="text-sm text-muted-foreground">
                  All testing conducted in controlled lab environments with proper authorization.
                </p>
              </div>

              <div className="cyber-card rounded-xl p-6">
                <div className="p-3 rounded-lg bg-cyber-green/10 w-fit mb-4">
                  <Target className="h-6 w-6 text-cyber-green" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Goal-Oriented</h3>
                <p className="text-sm text-muted-foreground">
                  Focused on identifying vulnerabilities and providing actionable solutions.
                </p>
              </div>

              <div className="cyber-card rounded-xl p-6">
                <div className="p-3 rounded-lg bg-cyber-orange/10 w-fit mb-4">
                  <BookOpen className="h-6 w-6 text-cyber-orange" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Continuous Learning</h3>
                <p className="text-sm text-muted-foreground">
                  Staying updated with the latest security trends and methodologies.
                </p>
              </div>

              <div className="cyber-card rounded-xl p-6">
                <div className="p-3 rounded-lg bg-primary/10 w-fit mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Quality Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Delivering comprehensive documentation for all security assessments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

import { Download, FileText, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { Helmet } from "react-helmet-async";

const Resume = () => {
  return (
    <Layout>

 <Helmet>
      <title>Resume | Rezvee Parvez</title>
      <meta
        name="description"
        content="Download and view the professional resume of Rezvee Parvez, a network and cybersecurity professional."
      />
      <meta
        name="keywords"
        content="Rezvee Parvez, cybersecurity, network security, ethical hacking, OWASP, VLAN, OSPF, penetration testing"
      />
      <meta property="og:title" content="Resume | Rezvee Parvez" />
      <meta
        property="og:description"
        content="Network & cybersecurity professional dedicated to ethical security practices and lab-based learning."
      />
      <meta property="og:type" content="website" />
    </Helmet>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Resume"
            title="Download My"
            highlight="Resume"
            description="View and download my professional resume"
          />

          <div className="max-w-2xl mx-auto">
            {/* Resume Preview Card */}
            <div className="cyber-card rounded-xl p-8 text-center">
              <div className="p-6 rounded-xl bg-secondary/50 border border-border mb-8">
                <FileText className="h-24 w-24 text-primary mx-auto mb-4" />
                <h1 className="text-xl font-semibold text-foreground mb-2">
                  Rezvee Parvez - Resume
                </h1>
                <p className="text-sm text-muted-foreground">
                  Network & Cybersecurity Professional
                </p>
              </div>

              <div className="space-y-4">
                <Button variant="cyber" size="lg" className="w-full" asChild>
                  <a href="/Rezvee_Parvez_Resume.pdf" download="Rezvee_Parvez_Resume.pdf">
                    <Download className="h-5 w-5" aria-hidden="true" />
                    Download Resume (PDF)
                  </a>
                </Button>

                <Button variant="cyber-outline" size="lg" className="w-full" asChild>
                  <a href="/Rezvee_Parvez_Resume.pdf" target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" aria-hidden="true" />
                    View Online
                  </a>
                </Button>
              </div>
            </div>

            {/* Resume Highlights */}
            <div className="mt-12 grid gap-6">
              <h3 className="text-xl font-semibold text-center text-foreground">
                Resume Highlights
              </h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="cyber-card rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Education</h4>
                  <p className="text-sm text-muted-foreground">
                    Bachelor's in Computer Science
                  </p>
                </div>

                <div className="cyber-card rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Certifications</h4>
                  <p className="text-sm text-muted-foreground">
                    CCNA, CCSC
                  </p>
                </div>

                <div className="cyber-card rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Experience</h4>
                  <p className="text-sm text-muted-foreground">
                    5+ Lab-based security projects
                  </p>
                </div>

                <div className="cyber-card rounded-lg p-4">
                  <h4 className="font-medium text-foreground mb-2">Focus Areas</h4>
                  <p className="text-sm text-muted-foreground">
                    Network Security, VAPT, Security Documentation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Resume;

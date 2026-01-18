import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlggjago"; 

const Contact = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "", // honeypot
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check (bots fill this)
    if (formData.company) return;

    try {
      setIsSending(true);

      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          company: formData.company, // keep honeypot field
        }),
      });

      if (!res.ok) throw new Error("Form submit failed");

      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        company: "",
      });
    } catch {
      toast({
        title: "Message Failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Layout>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeader
            badge="Get In Touch"
            title="Contact"
            highlight="Me"
            description="Feel free to reach out for opportunities or collaborations"
          />

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">
                Let's Connect
              </h3>
              <p className="text-muted-foreground">
                I'm always open to discussing new opportunities, security projects,
                or conversations about cybersecurity.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:rezvx@proton.me"
                  className="cyber-card rounded-lg p-4 flex items-center gap-4"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-foreground">rezvx@proton.me</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/rezvx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-card rounded-lg p-4 flex items-center gap-4"
                >
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <div className="text-foreground">linkedin.com/in/rezvx</div>
                  </div>
                </a>

                <a
                  href="https://github.com/rezvx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-card rounded-lg p-4 flex items-center gap-4"
                >
                  <Github className="h-5 w-5 text-primary" />
                  <div>
                    <div className="text-sm text-muted-foreground">GitHub</div>
                    <div className="text-foreground">github.com/rezvx</div>
                  </div>
                </a>

                <div className="cyber-card rounded-lg p-4 flex items-center gap-4">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="text-foreground">
                      Available for Remote Work
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="cyber-card rounded-xl p-6">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                />

                <Button
                  type="submit"
                  variant="cyber"
                  size="lg"
                  className="w-full"
                  disabled={isSending}
                >
                  <Send className="h-5 w-5" />
                  {isSending ? "Sending..." : "Send Message"}
                </Button>
              </form>

              <p className="mt-4 text-xs text-muted-foreground">
                Submit your message and I'll get back to you as soon as possible. -Thank you!
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

import { useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
                or just having a conversation about cybersecurity.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:rezvee@example.com"
                  className="cyber-card rounded-lg p-4 flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Email</div>
                    <div className="text-foreground">rezvee@example.com</div>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/rezveeparvez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-card rounded-lg p-4 flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <div className="text-foreground">linkedin.com/in/rezveeparvez</div>
                  </div>
                </a>

                <a
                  href="https://github.com/rezveeparvez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-card rounded-lg p-4 flex items-center gap-4 group"
                >
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">GitHub</div>
                    <div className="text-foreground">github.com/rezveeparvez</div>
                  </div>
                </a>

                <div className="cyber-card rounded-lg p-4 flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-secondary">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="text-foreground">Available for Remote Work</div>
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
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-secondary border-border focus:border-primary"
                    />
                  </div>
                </div>
                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>
                <Button type="submit" variant="cyber" size="lg" className="w-full">
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

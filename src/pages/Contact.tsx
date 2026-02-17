import { useMemo, useState } from "react";
import { Mail, Linkedin, Github, Send, MapPin, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { motion, useReducedMotion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mlggjago";

const Contact = () => {
  const { toast } = useToast();
  const prefersReducedMotion = useReducedMotion();

  const email = "hello@rezv.me";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    company: "", // honeypot
  });

  const [isSending, setIsSending] = useState(false);
  const [copied, setCopied] = useState(false);

  const fadeUp = useMemo(
    () => ({
      hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
      visible: { opacity: 1, y: 0 },
    }),
    [prefersReducedMotion]
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      toast({ title: "Copied", description: "Email address copied to clipboard." });
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      toast({
        title: "Copy Failed",
        description: "Unable to copy email. Please copy it manually.",
        variant: "destructive",
      });
    }
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
          company: formData.company,
        }),
      });

      if (!res.ok) throw new Error("Form submit failed");

      toast({
        title: "Message Sent",
        description: "Thank you for reaching out. I’ll get back to you soon.",
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

       <Helmet>
      <title>Contact | Rezvee Parvez</title>
      <link rel="canonical" href="https://rezv.me/contact" />
      <meta
        name="description"
        content="Get in touch with Rezvee Parvez for security projects, networking roles, AppSec Projects"
      />
      <meta
        name="keywords"
        content="contact, Rezvee Parvez, cybersecurity, AppSec, networking, security collaboration"
      />
      <meta property="og:title" content="Contact | Rezvee Parvez" />
      <meta
        property="og:description"
        content="Open to discussing security projects, networking roles, and lab collaborations."
      />
      <meta property="og:type" content="website" />
    </Helmet>

      <section className="py-20">
        <div className="container mx-auto px-4 space-y-12">
          <SectionHeader
            badge="Get In Touch"
            title="Contact"
            highlight="Me"
            description="Feel free to reach out for opportunities, collaborations, or security discussions"
          />

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
            {/* Contact Info */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: prefersReducedMotion ? 0.12 : 0.22, ease: "easeOut" }}
              className="space-y-6"
            >
              <div className="space-y-2">
                <h1 className="text-xl font-semibold text-foreground">Let’s Connect</h1>
                <p className="text-muted-foreground leading-relaxed">
                  I’m open to discussing security projects, networking roles, AppSec work, and
                  hands-on lab collaborations.
                </p>
              </div>

              <div className="space-y-3">
                {/* Email card */}
                <div className="cyber-card rounded-xl p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-4">
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center gap-3 min-w-0"
                      aria-label="Email"
                    >
                      <div className="h-11 w-11 rounded-xl bg-primary/10 border border-border/60 flex items-center justify-center">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>

                      <div className="min-w-0">
                        <div className="text-sm text-muted-foreground">Email</div>
                        <div className="text-foreground truncate">{email}</div>
                      </div>
                    </a>

                    <Button
                      type="button"
                      variant="secondary"
                      size="icon"
                      onClick={copyEmail}
                      aria-label="Copy Email"
                      className="h-11 w-11 rounded-xl"
                    >
                      {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
                    </Button>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/rezvx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-card rounded-xl p-4 sm:p-5 flex items-center gap-3"
                  aria-label="LinkedIn"
                >
                  <div className="h-11 w-11 rounded-xl bg-primary/10 border border-border/60 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground">LinkedIn</div>
                    <div className="text-foreground truncate">linkedin.com/in/rezvx</div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/rezvx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-card rounded-xl p-4 sm:p-5 flex items-center gap-3"
                  aria-label="GitHub"
                >
                  <div className="h-11 w-11 rounded-xl bg-primary/10 border border-border/60 flex items-center justify-center">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-muted-foreground">GitHub</div>
                    <div className="text-foreground truncate">github.com/rezvx</div>
                  </div>
                </a>

                {/* Location */}
                <div className="cyber-card rounded-xl p-4 sm:p-5 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-secondary/60 border border-border/60 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Location</div>
                    <div className="text-foreground">Available for Remote Work</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: prefersReducedMotion ? 0.12 : 0.22,
                ease: "easeOut",
                delay: prefersReducedMotion ? 0 : 0.04,
              }}
              className="cyber-card rounded-xl p-6 sm:p-7"
            >
              <h2 className="text-xl font-semibold text-foreground mb-6">
                Send a Message
              </h2>

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
                    autoComplete="name"
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
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
                  rows={6}
                />

                <Button
                  type="submit"
                  variant="cyber"
                  size="lg"
                  className="w-full"
                  disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <span className="inline-flex items-center gap-2">
                        <span className="h-4 w-4 rounded-full border-2 border-primary/40 border-t-primary animate-spin" />
                        Sending...
                      </span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
                <b>Submit your message and I'll get back to you as soon as possible. Thank you!</b>
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const res = await fetch("http://localhost:3001/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message")
        })
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to send");

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon."
      });

      form.reset();
    } catch (err) {
      console.error("Form error:", err);
      toast({
        title: "Something went wrong",
        description: (err as Error).message || "Please try again later.",
        variant: "destructive"
      });
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bitaniya.getu@bison.howard.edu",
      href: "mailto:bitaniya.getu@bison.howard.edu"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Washington, D.C.",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Bitaniyagetu", label: "GitHub" },
    { icon: Linkedin, href: "http://www.linkedin.com/in/bitaniyagetu", label: "LinkedIn" }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-card/50 backdrop-blur-sm border-border/50 animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name</label>
                    <Input name="name" required placeholder="Your name" className="bg-background/50 border-border/50 focus:border-primary" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email</label>
                    <Input name="email" type="email" required placeholder="your.email@example.com" className="bg-background/50 border-border/50 focus:border-primary" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input name="subject" required placeholder="What's this about?" className="bg-background/50 border-border/50 focus:border-primary" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea name="message" required placeholder="Tell me about your project or just say hello!" className="min-h-32 bg-background/50 border-border/50 focus:border-primary resize-none" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full bg-gradient-primary hover:shadow-glow-primary transition-all duration-300">
                  {isSubmitting ? (
                    <>Sending...</>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Whether you have a project in mind, want to collaborate, or just want to connect, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={info.label} className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-300 animate-slide-in" style={{ animationDelay: `${0.3 + index * 0.1}s` }}>
                  <div className="w-10 h-10 p-2 bg-gradient-primary rounded-lg">
                    <info.icon className="w-full h-full text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    <a href={info.href} className="font-medium hover:text-primary transition-colors duration-300">
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button key={social.label} variant="outline" size="lg" className="p-3 border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300 animate-slide-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }} asChild>
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

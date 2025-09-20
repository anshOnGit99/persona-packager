import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Heart, Code } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: personalInfo.social.github,
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: personalInfo.social.linkedin,
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: personalInfo.social.email,
      label: "Email"
    }
  ];

  return (
    <footer className="border-t border-border/50 bg-gradient-to-r from-background via-muted/20 to-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-muted-foreground max-w-sm leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
              <Badge variant="outline" className="text-xs border-success/30 text-success bg-success/10">
                {personalInfo.availability}
              </Badge>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {personalInfo.navigation.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm story-link animate-fade-in"
                  style={{ animationDelay: `${150 + index * 50}ms` }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <h3 className="font-semibold text-foreground">Connect</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">{personalInfo.email}</p>
              <p className="text-sm text-muted-foreground">{personalInfo.phone}</p>
              <p className="text-sm text-muted-foreground">{personalInfo.location}</p>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted/50 hover:bg-gradient-to-r hover:from-primary/20 hover:to-accent/20 text-muted-foreground hover:text-primary transition-all duration-300 hover-scale animate-fade-in"
                  style={{ animationDelay: `${300 + index * 50}ms` }}
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 animate-fade-in" style={{ animationDelay: '400ms' }}>
            <p className="text-sm text-muted-foreground">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <span>using React & TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
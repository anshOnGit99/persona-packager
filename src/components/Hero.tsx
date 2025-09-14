import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail, MapPin, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden hero-gradient">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm font-medium">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse mr-2"></div>
            Available for new opportunities
          </Badge>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Ansh Ahuja
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground mb-6">
            Software Developer
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Passionate Software Developer with <strong>3+ years</strong> at TCS Innovation Labs, 
            specializing in building responsive, high-performance web applications with 
            <strong> Angular, React, and TypeScript</strong>.
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Bengaluru, India
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              +91-8979314326
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              anshahuja3199@gmail.com
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="group">
              <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline" className="group">
              <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </div>

          {/* Tech Stack Preview */}
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto">
            <p className="text-sm font-medium text-muted-foreground mb-4">Tech Stack</p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                "Angular", "React", "TypeScript", "Node.js", "Python", 
                "PostgreSQL", "Azure", "Git", "REST APIs"
              ].map((tech) => (
                <Badge key={tech} variant="secondary" className="hover:bg-primary/10 transition-colors">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
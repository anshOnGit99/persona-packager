import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 hero-gradient"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl float animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-20 w-16 h-16 bg-tertiary/20 rounded-full blur-xl float" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status Badge */}
          <div className="slide-in-up opacity-0 animate-fade-in">
            <Badge 
              variant="outline" 
              className="mb-6 px-4 py-2 text-sm bg-background/80 backdrop-blur border-primary/30 hover:border-primary/50 transition-all duration-300 text-foreground"
            >
              <div className="w-2 h-2 bg-success rounded-full animate-pulse mr-2"></div>
              {personalInfo.availability}
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-4 mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-tertiary bg-clip-text text-transparent slide-in-up opacity-0 animate-fade-in stagger-1">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-muted-foreground slide-in-up opacity-0 animate-fade-in stagger-2">
              {personalInfo.title}
            </h2>
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed slide-in-up opacity-0 animate-fade-in stagger-3">
            {personalInfo.tagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 slide-in-up opacity-0 animate-fade-in stagger-4">
            <Button 
              size="lg" 
              className="group px-8 py-6 text-lg btn-magnetic hover:shadow-glow"
              asChild
            >
              <a href="#contact" className="flex items-center gap-2">
                <Mail className="w-5 h-5 group-hover:animate-bounce-gentle" />
                Get In Touch
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group px-8 py-6 text-lg hover:bg-primary/10 border-primary/30 hover:border-primary/50 btn-magnetic"
              asChild
            >
              <a href="/resume.pdf" download className="flex items-center gap-2">
                <Download className="w-5 h-5 group-hover:animate-bounce-gentle" />
                Download CV
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-16 slide-in-up opacity-0 animate-fade-in stagger-5">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-background/30 backdrop-blur border border-border/20 text-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-background/30 backdrop-blur border border-border/20 text-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href={personalInfo.social.email}
              className="p-4 rounded-full bg-background/30 backdrop-blur border border-border/20 text-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-110 hover:shadow-glow"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <a 
              href="#about" 
              className="p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
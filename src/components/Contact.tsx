import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";  
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { emailjsConfig } from "@/lib/emailjs-config";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send, 
  Download,
  MessageCircle,
  Clock,
  CheckCircle,
  MessageSquare
} from "lucide-react";
import { personalInfo } from "@/data/portfolio-data";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: personalInfo.email,
        },
        emailjsConfig.publicKey
      );

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Message Failed to Send",
        description: "Please try again or contact me directly via WhatsApp.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppContact = () => {
    const message = `Hi ${personalInfo.name}! I'm interested in discussing a project with you.`;
    const whatsappUrl = `https://wa.me/${personalInfo.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personalInfo.email,
      href: personalInfo.social.email,
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/[^+\d]/g, '')}`,
      description: "Let's have a conversation"
    },
    {
      icon: MapPin,
      label: "Location",
      value: personalInfo.location,
      href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
      description: "Available for remote work"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@anshahuja",
      href: personalInfo.social.github,
      description: "Check out my repositories"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      value: personalInfo.name,
      href: personalInfo.social.linkedin,
      description: "Let's connect professionally"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, 
            or just having a chat about technology and development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-glow border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in hover-scale">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white">
                  <MessageCircle className="w-4 h-4" />
                </div>
                Send Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: '100ms' }}>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-primary/50"
                    />
                  </div>
                  <div className="space-y-2 animate-fade-in" style={{ animationDelay: '150ms' }}>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email" 
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      required
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-primary/50"
                    />
                  </div>
                </div>
                
                <div className="space-y-2 animate-fade-in" style={{ animationDelay: '200ms' }}>
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-primary/50"
                  />
                </div>
                
                <div className="space-y-2 animate-fade-in" style={{ animationDelay: '250ms' }}>
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or just say hello!"
                    rows={5}
                    required
                    className="transition-all duration-300 focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-primary/50 resize-none"
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 transition-all duration-500 shadow-lg hover:shadow-glow animate-fade-in disabled:opacity-50"
                    style={{ animationDelay: '300ms' }}
                    size="lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  
                  <Button 
                    type="button"
                    onClick={handleWhatsAppContact}
                    variant="outline"
                    className="bg-success/10 hover:bg-success hover:text-white border-success/30 hover:border-success transition-all duration-500 animate-fade-in"
                    style={{ animationDelay: '350ms' }}
                    size="lg"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="shadow-glow border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in hover-scale" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle>Contact Details</CardTitle>
                <CardDescription>
                  Here are the best ways to reach me directly.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a 
                    key={info.label}
                    href={info.href}
                    target={info.label === "Location" ? "_blank" : undefined}
                    rel={info.label === "Location" ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300 group animate-fade-in"
                    style={{ animationDelay: `${200 + index * 50}ms` }}
                  >
                    <div className="p-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-lg group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <info.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{info.label}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{info.value}</p>
                      <p className="text-xs text-muted-foreground">{info.description}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="shadow-glow border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in hover-scale" style={{ animationDelay: '200ms' }}>
              <CardHeader>
                <CardTitle>Social Media</CardTitle>
                <CardDescription>
                  Connect with me on these platforms.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 transition-all duration-300 group animate-fade-in"
                    style={{ animationDelay: `${300 + index * 50}ms` }}
                  >
                    <div className="p-2 bg-gradient-to-r from-primary/20 to-accent/20 text-primary rounded-lg group-hover:from-primary/30 group-hover:to-accent/30 transition-all duration-300">
                      <social.icon className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{social.label}</h3>
                      <p className="text-sm text-muted-foreground mb-1">{social.value}</p>
                      <p className="text-xs text-muted-foreground">{social.description}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Availability */}
            <Card className="shadow-glow border-success/30 bg-card/50 backdrop-blur-sm animate-fade-in hover-scale" style={{ animationDelay: '300ms' }}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 rounded-lg bg-success/20 text-success">
                    <Clock className="w-4 h-4" />
                  </div>
                  Availability
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
                    <Badge variant="outline" className="border-success/30 text-success bg-success/10">
                      {personalInfo.availability}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  I'm currently open to new opportunities and interesting projects. 
                  Feel free to reach out if you'd like to work together!
                </p>
                
                <Button variant="outline" className="w-full hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-500" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
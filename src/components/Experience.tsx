import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building, Calendar, MapPin, ExternalLink } from "lucide-react";
import { experience } from "@/data/portfolio-data";

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 slide-in-up">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <Building className="w-4 h-4 mr-2" />
              Experience
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              My Journey
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-tertiary"></div>
            
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <div key={exp.id} className="slide-in-up stagger-1 relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg pulse-glow"></div>
                  
                  <Card className="ml-16 card-hover glass">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-bold text-primary">{exp.position}</h3>
                          <h4 className="text-xl font-semibold text-foreground">{exp.company}</h4>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <Badge variant="secondary">{exp.type}</Badge>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                        {exp.description}
                      </p>
                      
                      {/* Highlights */}
                      <div className="mb-6">
                        <h5 className="font-semibold mb-3 text-foreground">Key Achievements:</h5>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* Technologies */}
                      <div>
                        <h5 className="font-semibold mb-3 text-foreground">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <Badge 
                              key={idx} 
                              variant="outline" 
                              className="bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 slide-in-up">
            <Card className="glass p-8 max-w-2xl mx-auto">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Ready for New Challenges</h3>
                <p className="text-muted-foreground">
                  I'm always open to discussing new opportunities and exciting projects. 
                  Let's connect and see how we can work together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <Badge variant="outline" className="px-4 py-2">
                    <div className="w-2 h-2 bg-success rounded-full animate-pulse mr-2"></div>
                    Available for opportunities
                  </Badge>
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors"
                  >
                    <span>Get in touch</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
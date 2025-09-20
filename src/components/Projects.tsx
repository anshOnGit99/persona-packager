import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Globe, Smartphone, Code, LucideIcon } from "lucide-react";
import { projects } from "@/data/portfolio-data";

const Projects = () => {
  const getStatusColor = (status: string): string => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'bg-success/20 text-success border-success/30';
      case 'in progress':
        return 'bg-info/20 text-info border-info/30';
      case 'planned':
        return 'bg-warning/20 text-warning border-warning/30';
      default:
        return 'bg-muted/50 text-muted-foreground border-border';
    }
  };

  const getCategoryIcon = (category: string): LucideIcon => {
    switch (category.toLowerCase()) {
      case 'full-stack':
        return Globe;
      case 'frontend':
        return Code;
      case 'mobile':
        return Smartphone;
      default:
        return Code;
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development,
            mobile applications, and modern web technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(project.category);
            
            return (
              <Card 
                key={project.id} 
                className="group hover:shadow-glow transition-all duration-500 hover:-translate-y-2 border-border/50 bg-card/50 backdrop-blur-sm animate-fade-in hover-scale"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                        <CategoryIcon className="w-4 h-4" />
                      </div>
                      <Badge variant="outline" className={getStatusColor(project.status)}>
                        {project.status}
                      </Badge>
                    </div>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Key Features:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {project.features.slice(0, 3).map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 animate-fade-in" style={{ animationDelay: `${(index * 100) + (featureIndex * 50)}ms` }}>
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs bg-muted/50 hover:bg-primary/20 transition-colors animate-fade-in" 
                          style={{ animationDelay: `${(index * 100) + (techIndex * 30)}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="text-xs bg-accent/20 text-accent">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex gap-2 pt-4">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-300" 
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 hover:bg-accent hover:text-accent-foreground transition-all duration-300" 
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        <div className="text-center animate-fade-in" style={{ animationDelay: '600ms' }}>
          <Button 
            variant="outline" 
            size="lg" 
            className="hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white transition-all duration-500 hover-scale" 
            asChild
          >
            <a href="https://github.com/anshahuja" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
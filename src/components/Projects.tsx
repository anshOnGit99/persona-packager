import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, TrendingUp, Search, BarChart3 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Crypto Currency Tracker",
      description: "Angular-based web application offering real-time cryptocurrency data, including prices, market cap, and trading volumes. Features interactive charts, robust search functionality, and sorting options for comprehensive market analysis.",
      image: "/api/placeholder/600/400",
      technologies: ["Angular", "TypeScript", "Chart.js", "REST APIs", "RxJS", "CSS3"],
      features: [
        "Real-time cryptocurrency price tracking",
        "Interactive charts with Chart.js visualization",
        "Advanced search and filtering capabilities", 
        "Market cap and volume analysis",
        "Responsive design for all devices",
        "Historical data visualization"
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Application",
      status: "Completed"
    },
    {
      title: "Data Pipeline Canvas",
      description: "Interactive drag-and-drop canvas application for visually designing and configuring data processing pipelines. Built at TCS Innovation Labs to streamline data transformation workflows.",
      image: "/api/placeholder/600/400", 
      technologies: ["Angular", "TypeScript", "D3.js", "NgRx", "HTML5 Canvas", "SASS"],
      features: [
        "Drag-and-drop pipeline builder",
        "Visual data flow representation",
        "Dynamic property editing interface",
        "Conditional rendering logic",
        "Algorithm-ready dataset preparation",
        "Flexible component sequencing"
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Enterprise Tool",
      status: "In Production"
    },
    {
      title: "Portfolio Website",
      description: "Modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and optimized performance.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
      features: [
        "Responsive design with mobile-first approach",
        "Smooth scrolling and animations",
        "Contact form with validation",
        "SEO optimized structure",
        "Fast loading performance",
        "Modern UI/UX design"
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Personal Project",
      status: "Active"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "bg-success text-white";
      case "In Production": return "bg-primary text-white";
      case "Active": return "bg-accent text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Application": return TrendingUp;
      case "Enterprise Tool": return BarChart3;
      case "Personal Project": return Search;
      default: return TrendingUp;
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Projects</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Featured 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}Work
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions and technical excellence across various domains
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-500 group">
                <div className={`grid ${index % 2 === 0 ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0`}>
                  {/* Project Image */}
                  <div className={`relative overflow-hidden bg-muted/50 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-video lg:aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <div className="text-center p-8">
                        <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-full flex items-center justify-center">
                          {(() => {
                            const Icon = getCategoryIcon(project.category);
                            return <Icon className="w-8 h-8 text-primary" />;
                          })()}
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-sm text-muted-foreground">{project.category}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Project Content */}
                  <div className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <CardHeader className="px-0 pt-0">
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getStatusColor(project.status)}>
                          {project.status}
                        </Badge>
                        <Badge variant="outline">
                          {project.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-2xl mb-3">{project.title}</CardTitle>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </CardHeader>

                    <CardContent className="px-0 pb-0 space-y-6">
                      {/* Key Features */}
                      <div>
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Key Features</h4>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button className="flex-1 group" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                            View Live
                          </a>
                        </Button>
                        <Button variant="outline" className="flex-1 group" asChild>
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16">
            <div className="glass rounded-2xl p-8 max-w-md mx-auto">
              <h3 className="text-xl font-semibold mb-4">Interested in More?</h3>
              <p className="text-muted-foreground mb-6">
                Check out my GitHub for additional projects and contributions.
              </p>
              <Button variant="outline" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  View All Projects
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
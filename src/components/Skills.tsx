import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Globe, Settings, Award } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "TypeScript", level: 95 },
        { name: "JavaScript (ES6+)", level: 90 },
        { name: "Python", level: 85 },
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "SQL", level: 80 }
      ],
      color: "primary"
    },
    {
      icon: Globe,
      title: "Frameworks & Libraries",
      skills: [
        { name: "Angular (2+)", level: 95 },
        { name: "React.js", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "Express.js", level: 75 },
        { name: "NgRx", level: 90 },
        { name: "RxJS", level: 85 },
        { name: "Bootstrap", level: 90 },
        { name: "Tailwind CSS", level: 85 }
      ],
      color: "accent"
    },
    {
      icon: Database,
      title: "Databases & Tools",
      skills: [
        { name: "PostgreSQL", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Git", level: 90 },
        { name: "VS Code", level: 95 },
        { name: "Postman", level: 85 },
        { name: "Azure", level: 80 }
      ],
      color: "success"
    },
    {
      icon: Settings,
      title: "Web Technologies",
      skills: [
        { name: "REST APIs", level: 90 },
        { name: "Async Programming", level: 85 },
        { name: "SASS/SCSS", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "Performance Optimization", level: 80 },
        { name: "Testing (Jasmine/Karma)", level: 75 }
      ],
      color: "warning"
    }
  ];

  const getProgressColor = (color: string) => {
    switch (color) {
      case "primary": return "bg-primary";
      case "accent": return "bg-accent";
      case "success": return "bg-success";
      case "warning": return "bg-warning";
      default: return "bg-primary";
    }
  };

  const getIconColor = (color: string) => {
    switch (color) {
      case "primary": return "text-primary";
      case "accent": return "text-accent";
      case "success": return "text-success";
      case "warning": return "text-warning";
      default: return "text-primary";
    }
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Skills</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technical 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}Expertise
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive skill set spanning modern web development technologies and best practices
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-${category.color}/10 flex items-center justify-center`}>
                      <category.icon className={`w-5 h-5 ${getIconColor(category.color)}`} />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-sm">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                          <div 
                            className={`h-full ${getProgressColor(category.color)} rounded-full transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold">Additional Expertise</h3>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {[
                  "Agile/Scrum", "Code Reviews", "Performance Optimization", "Cross-platform Development",
                  "API Integration", "State Management", "Unit Testing", "CI/CD", "Docker", "Microservices",
                  "Design Patterns", "Clean Code", "Documentation", "Team Leadership"
                ].map((skill) => (
                  <Badge key={skill} variant="outline" className="hover:bg-primary/10 transition-colors">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
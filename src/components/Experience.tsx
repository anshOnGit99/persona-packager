import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experience = {
    company: "Tata Consultancy Services",
    position: "Developer",
    location: "Bengaluru | Onsite",
    duration: "07/2022 - Present",
    description: "Software Developer at TCS Innovation Labs, specializing in full-stack web development and data processing solutions.",
    achievements: [
      {
        title: "Full-Stack Web Development",
        description: "Designed and developed 3+ responsive web applications using Angular, HTML5, CSS3, and TypeScript. Integrated RESTful APIs for seamless backend communication and utilized Angular Material and Bootstrap for consistent UI/UX design."
      },
      {
        title: "State Management & Performance Optimization", 
        description: "Implemented NgRx and RxJS for state management, reducing page load times by 30% through lazy loading and code splitting techniques."
      },
      {
        title: "Cross-Functional Collaboration",
        description: "Partnered with backend developers, designers, and product managers to deliver user-centric solutions. Developed custom Angular directives, components, and services to enhance application functionality and maintainability."
      },
      {
        title: "Quality Assurance & Testing",
        description: "Conducted code reviews, performed unit testing using Jasmine and Karma, and participated in Agile sprint meetings to ensure high-quality software delivery."
      },
      {
        title: "Data Pipeline Canvas Development",
        description: "Built an interactive drag-and-drop canvas application for visually designing and configuring data processing pipelines. Integrated diverse filters and pre-processing components with flexible sequencing to transform raw inputs into algorithm-ready datasets."
      }
    ],
    technologies: [
      "Angular", "TypeScript", "HTML5", "CSS3", "JavaScript",
      "NgRx", "RxJS", "REST APIs", "Angular Material", "Bootstrap",
      "Jasmine", "Karma", "Git", "Agile"
    ]
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Experience</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Professional 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}Journey
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions and driving digital transformation
            </p>
          </div>

          {/* Experience Card */}
          <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold">{experience.position}</h3>
                  <div className="flex items-center gap-2 text-primary font-semibold mt-1">
                    <Building className="w-4 h-4" />
                    {experience.company}
                  </div>
                </div>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {experience.duration}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {experience.location}
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mt-4">{experience.description}</p>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Key Achievements */}
              <div>
                <h4 className="font-semibold mb-4 text-lg">Key Achievements</h4>
                <div className="space-y-4">
                  {experience.achievements.map((achievement, index) => (
                    <div key={index} className="border-l-2 border-accent/30 pl-4">
                      <h5 className="font-semibold text-foreground mb-2">{achievement.title}</h5>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="font-semibold mb-4 text-lg">Technologies & Tools</h4>
                <div className="flex flex-wrap gap-2">
                  {experience.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="hover:bg-primary/10 transition-colors">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Timeline Indicator */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              Currently Working
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
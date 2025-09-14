import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, GraduationCap, MapPin, Calendar } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: "3+ Years Experience",
      description: "At TCS Innovation Labs"
    },
    {
      icon: GraduationCap,
      title: "B.Tech Mechanical",
      description: "SRM Institute - 8.49 CGPA"
    },
    {
      icon: MapPin,
      title: "Based in Bengaluru",
      description: "Open to remote work"
    }
  ];

  const certifications = [
    {
      name: "Microsoft AZ-104",
      title: "Azure Administrator Associate",
      year: "2024"
    },
    {
      name: "Microsoft AZ-900",
      title: "Azure Fundamentals",
      year: "2022-24"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">About Me</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate About Building 
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {" "}Digital Solutions
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforming ideas into scalable, user-focused applications with modern web technologies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Story */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  With over 3 years at <strong>TCS Innovation Labs</strong>, I specialize in designing 
                  and developing responsive, high-performance web applications. My expertise lies in 
                  <strong> Angular, TypeScript, and modern JavaScript frameworks</strong>, where I've 
                  successfully delivered multiple production applications.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">What I Do</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I create <strong>interactive drag-and-drop interfaces</strong>, architect complex 
                  data processing pipelines, and build scalable web applications. My approach focuses on 
                  <strong> performance optimization, clean code, and exceptional user experiences</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Beyond Code</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I believe in continuous learning and staying updated with the latest technologies. 
                  I enjoy collaborating with cross-functional teams and contributing to open-source projects.
                </p>
              </div>
            </div>

            {/* Right Column - Highlights & Certifications */}
            <div className="space-y-8">
              {/* Highlights */}
              <div className="grid gap-4">
                {highlights.map((item, index) => (
                  <Card key={index} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-accent" />
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-semibold text-sm">{cert.name}</h4>
                            <p className="text-sm text-muted-foreground">{cert.title}</p>
                          </div>
                          <Badge variant="outline" className="text-xs">
                            <Calendar className="w-3 h-3 mr-1" />
                            {cert.year}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
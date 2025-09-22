import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { User, MapPin, Calendar, Award, Target, Heart } from "lucide-react";
import { personalInfo, achievements } from "@/data/portfolio-data";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <Badge variant="outline" className="mb-4 px-4 py-2">
              <User className="w-4 h-4 mr-2" />
              About Me
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Get to know me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Info */}
            <div className="animate-slide-in-left" style={{ animationDelay: '200ms' }}>
              <Card className="card-hover glass">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <Heart className="w-6 h-6 text-accent" />
                    My Story
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {personalInfo.bio}
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{personalInfo.location}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Target className="w-5 h-5 text-primary" />
                      <span>Software Development & Innovation</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Calendar className="w-5 h-5 text-primary" />
                      <span>Available for new opportunities</span>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-border/50">
                    <p className="text-sm text-muted-foreground italic">
                      "Code is poetry, and I'm passionate about writing beautiful, functional verses that solve real-world problems."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements & Stats */}
            <div className="animate-slide-in-right" style={{ animationDelay: '400ms' }}>
              <div className="space-y-6">
                <Card className="card-hover glass">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                      <Award className="w-6 h-6 text-accent" />
                      Achievements
                    </h3>
                    <div className="space-y-4">
                      {achievements.map((achievement, index) => (
                        <div 
                          key={index} 
                          className="p-4 rounded-lg bg-background/50 border border-border/30 hover:border-primary/30 transition-all duration-300"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="font-semibold text-primary">{achievement.title}</h4>
                            <Badge variant="secondary" className="text-xs">
                              {achievement.date}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {achievement.organization}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {achievement.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="card-hover glass">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold mb-6">Quick Stats</h3>
                    <div className="grid grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">1+</div>
                        <div className="text-sm text-muted-foreground">Years Experience</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-accent mb-2">10+</div>
                        <div className="text-sm text-muted-foreground">Projects Built</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-tertiary mb-2">15+</div>
                        <div className="text-sm text-muted-foreground">Technologies</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">100%</div>
                        <div className="text-sm text-muted-foreground">Commitment</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
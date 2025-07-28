import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Code2, Users } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Howard University Student",
      description: "Pursuing Bachelor's in Computer Science with Software Development concentration",
      highlight: "3.86 GPA"
    },
    {
      icon: Code2,
      title: "Student Technician",
      description: "Technical support for Windows and macOS systems with 90%+ first-call resolution",
      highlight: "95% Satisfaction"
    },
    {
      icon: Award,
      title: "Scholarship Recipient",
      description: "Howard Scholarship Award and Presidential Dean's List Award recipient",
      highlight: "Multiple Awards"
    },
    {
      icon: Users,
      title: "Leadership Roles",
      description: "Vice President of NSBE and ASA, active in multiple tech organizations",
      highlight: "VP of 2 Orgs"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a dedicated Computer Science student at Howard University with a passion for software development 
            and creating impactful solutions. Currently maintaining a 3.86 GPA and actively involved in tech 
            communities while gaining hands-on experience through various projects and leadership roles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal info */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently pursuing my Bachelor's in Computer Science at Howard University with a 
                concentration in Software Development. Previously studied at Marist University and 
                gained practical experience as a Student Technician providing technical support.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">What Drives Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about software engineering, database management, and creating efficient 
                solutions. Through coursework in algorithms, data structures, and system analysis, 
                combined with hands-on projects, I strive to build scalable and maintainable applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Badge variant="outline" className="px-4 py-2 border-primary/30">Problem Solver</Badge>
              <Badge variant="outline" className="px-4 py-2 border-cyber/30">Team Player</Badge>
              <Badge variant="outline" className="px-4 py-2 border-neon/30">Continuous Learner</Badge>
              <Badge variant="outline" className="px-4 py-2 border-primary/30">Innovation Focused</Badge>
            </div>
          </div>

          {/* Right side - Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={achievement.title}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow-primary animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 mx-auto p-3 bg-gradient-primary rounded-lg">
                    <achievement.icon className="w-full h-full text-primary-foreground" />
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                    <Badge 
                      variant="secondary" 
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {achievement.highlight}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
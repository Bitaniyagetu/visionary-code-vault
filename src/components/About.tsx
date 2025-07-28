import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Code2, Users } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Computer Science Student",
      description: "Pursuing Bachelor's in Computer Science with focus on AI and Software Engineering",
      highlight: "Dean's List"
    },
    {
      icon: Code2,
      title: "Full-Stack Developer",
      description: "2+ years of experience building web applications with modern technologies",
      highlight: "10+ Projects"
    },
    {
      icon: Award,
      title: "Hackathon Winner",
      description: "Won multiple hackathons including TechCrunch Disrupt and Local Code Challenge",
      highlight: "3x Winner"
    },
    {
      icon: Users,
      title: "Team Leader",
      description: "Led development teams in various group projects and open-source contributions",
      highlight: "5+ Teams"
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
            I'm a passionate Computer Science student with a love for creating innovative solutions 
            that make a real impact. My journey in tech started with curiosity about how things work, 
            and has evolved into a deep commitment to building the future through code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Personal info */}
          <div className="space-y-6 animate-fade-in">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started programming at age 16 with Python, quickly fell in love with the endless 
                possibilities of code. Currently pursuing my degree while working on real-world 
                projects that challenge me to grow and learn new technologies.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground">What Drives Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                I believe technology should be accessible, efficient, and impactful. Whether it's 
                building user-friendly interfaces, optimizing backend systems, or exploring AI 
                applications, I'm always looking for ways to create meaningful solutions.
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
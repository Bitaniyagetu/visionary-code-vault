import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Code, Database, Globe, Smartphone, Brain, Settings } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 85 },
        { name: "C++", level: 80 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "JavaScript", level: 80 }
      ]
    },
    {
      title: "Database & Data",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Database Management", level: 80 },
        { name: "Data Structures", level: 85 },
        { name: "Algorithm Design", level: 80 }
      ]
    },
    {
      title: "Development Tools",
      icon: Settings,
      skills: [
        { name: "Visual Studio Code", level: 90 },
        { name: "Git", level: 85 },
        { name: "PyCharm", level: 80 },
        { name: "Eclipse", level: 75 }
      ]
    },
    {
      title: "Operating Systems",
      icon: Smartphone,
      skills: [
        { name: "Windows", level: 90 },
        { name: "macOS", level: 85 },
        { name: "Linux", level: 80 },
        { name: "Terminal", level: 85 }
      ]
    },
    {
      title: "Specialized Skills",
      icon: Brain,
      skills: [
        { name: "API Integration", level: 85 },
        { name: "Software Engineering", level: 80 },
        { name: "System Analysis", level: 75 },
        { name: "Network Troubleshooting", level: 80 }
      ]
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains of computer science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow-primary animate-fade-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 p-3 bg-gradient-primary rounded-lg">
                  <category.icon className="w-full h-full text-primary-foreground" />
                </div>
                <CardTitle className="text-lg">{category.title}</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill.name} 
                    className="space-y-2 animate-slide-in"
                    style={{ animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s` }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
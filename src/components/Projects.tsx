import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Time Tails",
      description: "iOS app using Pomodoro technique to guide study sessions and track study times. Built with Swift and Xcode for enhanced productivity.",
      technologies: ["Swift", "Xcode", "iOS", "Core Data", "Timer Management"],
      image: "photo-1494256997604-768d1f608cac",
      github: "https://github.com/Bitaniyagetu",
      demo: "#"
    },
    {
      title: "Feru Bar & Restaurant Website",
      description: "Complete restaurant website with modern design, interactive features, and responsive layout built with vanilla web technologies.",
      technologies: ["HTML", "CSS", "JavaScript", "Node.js"],
      image: "photo-1517248135467-4c7edcad34c4",
      github: "https://github.com/Bitaniyagetu",
      demo: "#"
    },
    {
      title: "Real-Time Weather App",
      description: "Java-based application that integrates weather APIs to fetch real-time data for 100,000+ cities, reducing response time by 40% through optimized API calls.",
      technologies: ["Java", "API Integration", "OOP Design"],
      image: "photo-1504608524841-42fe6f032b4b",
      github: "https://github.com/Bitaniyagetu",
      demo: "#"
    },
    {
      title: "Contact Management System",
      description: "Relational database system using MySQL and Python to efficiently store, retrieve, and manage 1,000+ user contacts with CRUD operations.",
      technologies: ["Python", "MySQL", "Database Design", "CRUD Operations"],
      image: "photo-1460925895917-afdab827c52f",
      github: "https://github.com/Bitaniyagetu",
      demo: "#"
    },
    {
      title: "Text-Based Games",
      description: "Interactive Python games featuring logic-driven gameplay, user input validation, and state management for scalability and ease of modification.",
      technologies: ["Python", "Game Logic", "State Management"],
      image: "photo-1493711662062-fa541adb3fc8",
      github: "https://github.com/Bitaniyagetu",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in various technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="aspect-video bg-gradient-secondary rounded-t-lg overflow-hidden">
                <img 
                  src={`https://images.unsplash.com/${project.image}?w=600&h=400&fit=crop&crop=entropy`}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-secondary/50 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-cyber/30 hover:border-cyber hover:bg-cyber/10 transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Task Manager",
      description: "A smart task management app that uses machine learning to prioritize tasks and predict completion times.",
      technologies: ["React", "TypeScript", "Python", "TensorFlow", "PostgreSQL"],
      image: "photo-1461749280684-dccba630e2f6",
      github: "#",
      demo: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Full-stack chat application with real-time messaging, file sharing, and video calls.",
      technologies: ["Node.js", "Socket.io", "React", "MongoDB", "WebRTC"],
      image: "photo-1487058792275-0ad4aaf24ca7",
      github: "#",
      demo: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Modern e-commerce platform with payment integration, inventory management, and analytics dashboard.",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL", "Tailwind"],
      image: "photo-1498050108023-c5249f4df085",
      github: "#",
      demo: "#"
    },
    {
      title: "Data Visualization Dashboard",
      description: "Interactive dashboard for visualizing complex datasets with custom charts and real-time updates.",
      technologies: ["D3.js", "React", "Express", "MySQL", "Chart.js"],
      image: "photo-1518770660439-4636190af475",
      github: "#",
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
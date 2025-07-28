import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-float" />
        <div className="absolute top-40 right-32 w-3 h-3 bg-cyber rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-neon rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <Badge variant="outline" className="mb-6 px-4 py-2 text-primary border-primary/30">
            Computer Science Student
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">Hello, I'm </span>
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Bitaniya Getu
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Computer Science Student at Howard University passionate about software development 
            and creating innovative solutions that make a real impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="px-8 py-6 text-lg bg-gradient-primary hover:shadow-glow-primary transition-all duration-300"
              onClick={scrollToProjects}
            >
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            
            <div className="flex gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                className="p-3 border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300"
                onClick={() => window.open('https://github.com/Bitaniyagetu', '_blank')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="p-3 border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300"
                onClick={() => window.open('http://www.linkedin.com/in/bitaniyagetu', '_blank')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="p-3 border-primary/30 hover:border-primary hover:shadow-glow-primary transition-all duration-300"
                onClick={() => window.open('mailto:bitaniya.getu@bison.howard.edu', '_blank')}
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Tech stack showcase */}
          <div className="flex flex-wrap gap-3 justify-center">
            {['Java', 'Python', 'C++', 'JavaScript', 'HTML', 'CSS', 'MySQL'].map((tech, index) => (
              <Badge 
                key={tech} 
                variant="secondary" 
                className="px-4 py-2 bg-secondary/50 hover:bg-secondary transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};

export default Hero;
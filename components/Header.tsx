import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-4">
          <h1 className="text-xl font-semibold">BA Portfolio</h1>
          <div className="hidden md:block text-sm text-muted-foreground">
            MIS Student • Banking Academy
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('about')}
            className="text-sm"
          >
            Giới thiệu
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('skills')}
            className="text-sm"
          >
            Kỹ năng
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('projects')}
            className="text-sm"
          >
            Dự án
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('education')}
            className="text-sm"
          >
            Học vấn
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => scrollToSection('contact')}
            className="text-sm"
          >
            Liên hệ
          </Button>
        </nav>

        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Github className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Linkedin className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
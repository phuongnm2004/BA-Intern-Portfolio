import { Separator } from "./ui/separator";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 bg-background border-t">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h4 className="font-semibold mb-1">Nguyễn Văn An</h4>
              <p className="text-sm text-muted-foreground">
                Business Analyst Intern Candidate
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <a 
                href="mailto:nguyenvanan@email.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/nguyenvanan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/in/nguyenvanan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <Separator className="my-6" />
          
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              © {currentYear} Nguyễn Văn An. Made with 
              <Heart className="h-4 w-4 text-red-500" />
              for my dream internship.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
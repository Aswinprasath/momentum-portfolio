import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made By <Heart size={14} className="text-red-500 animate-pulse" />
            |
            {/* Profile Icon*/}
            <img 
              src = "/profile.jpg"
              alt = "Aswin"
              className="w-4 h-4 rounded-full border border-primary object-cover" /> © {currentYear}
          </p>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Aswinprasath"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/link-aswinprasath/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

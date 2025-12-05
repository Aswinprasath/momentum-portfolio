import { useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, tags, image, liveUrl, githubUrl, delay = 0 }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        'group relative bg-card rounded-xl border border-border overflow-hidden',
        'transition-all duration-500 ease-out',
        'animate-slide-up opacity-0',
        'hover:border-primary/50 hover:shadow-glow'
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail with Animation Effect */}
      <div className="relative h-52 overflow-hidden">
        <div
          className={cn(
            'absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out',
            'group-hover:scale-110'
          )}
          style={{ backgroundImage: `url(${image})` }}
        />
        
        {/* Animated Overlay */}
        <div
          className={cn(
            'absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent',
            'transition-opacity duration-300',
            isHovered ? 'opacity-90' : 'opacity-60'
          )}
        />

        {/* Play Animation Indicator */}
        {/*<div
          className={cn(
            'absolute inset-0 flex items-center justify-center',
            'transition-all duration-300',
            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          )}
        >
          <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center animate-pulse-slow">
            <Play size={24} className="text-primary-foreground ml-1" />
          </div>
        </div> */}

        {/* Shimmer Effect */}
        <div
          className={cn(
            'absolute inset-0 opacity-0 transition-opacity duration-300',
            isHovered && 'opacity-100'
          )}
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            animation: isHovered ? 'shimmer 1.5s infinite' : 'none',
            backgroundSize: '200% 100%',
          }}
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium rounded-md bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-primary hover:underline transition-all"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          {githubUrl && (
            <a
              href={"https://github.com/Aswinprasath"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-all"
            >
              <Github size={14} />
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

const AnimatedCard = ({ children, className, delay = 0, hover = true }: AnimatedCardProps) => {
  return (
    <div
      className={cn(
        'bg-card rounded-xl border border-border p-6',
        'transition-all duration-500 ease-out',
        'animate-slide-up opacity-0',
        hover && 'hover-lift card-shine',
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;

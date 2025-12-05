import { cn } from '@/lib/utils';

interface SkillBadgeProps {
  name: string;
  className?: string;
}

const SkillBadge = ({ name, className }: SkillBadgeProps) => {
  return (
    <span
      className={cn(
        'inline-flex items-center px-4 py-2 rounded-full text-sm font-medium',
        'bg-secondary text-secondary-foreground',
        'border border-border',
        'transition-all duration-300',
        'hover:bg-primary hover:text-primary-foreground hover:border-primary',
        'hover:scale-105 hover:shadow-glow',
        'cursor-default',
        className
      )}
    >
      {name}
    </span>
  );
};

export default SkillBadge;

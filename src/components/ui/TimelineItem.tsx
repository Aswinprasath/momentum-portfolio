import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  date: string;
  description: string;
  icon?: ReactNode;
  delay?: number;
}

const TimelineItem = ({ title, subtitle, date, description, icon, delay = 0 }: TimelineItemProps) => {
  return (
    <div
      className={cn(
        'relative pl-8 pb-8 last:pb-0',
        'animate-slide-up opacity-0'
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {/* Line */}
      <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border last:hidden" />
      
      {/* Dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
        {icon || <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
      </div>

      {/* Content */}
      <div className="bg-card rounded-xl border border-border p-5 hover-lift card-shine">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10">
            {date}
          </span>
        </div>
        <p className="text-muted-foreground font-medium mb-2">{subtitle}</p>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default TimelineItem;

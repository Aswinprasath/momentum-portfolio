import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: 'left' | 'center';
}

const SectionHeader = ({ title, subtitle, className, align = 'center' }: SectionHeaderProps) => {
  return (
    <div className={cn(
      'mb-12',
      align === 'center' ? 'text-center' : 'text-left',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;

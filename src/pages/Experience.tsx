import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import { experiences } from '@/data/portfolioData';
import { Briefcase, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Experience = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Experience"
            subtitle="My professional journey and work experience"
          />

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <Link
                key={exp.id}
                to={`/experience/${exp.id}`}
                className={cn(
                  'relative pl-8 pb-8 last:pb-0 block group',
                  'animate-slide-up opacity-0'
                )}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Line */}
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border last:hidden" />
                
                {/* Dot */}
                <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                  <Briefcase size={12} />
                </div>

                {/* Content */}
                <div className="bg-card rounded-xl border border-border p-5 hover-lift card-shine group-hover:border-primary/50 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{exp.title}</h3>
                    <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10">
                      {exp.date}
                    </span>
                  </div>
                  <p className="text-muted-foreground font-medium mb-2">{exp.subtitle}</p>
                  <p className="text-muted-foreground text-sm mb-3">{exp.description}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                    View Details <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;
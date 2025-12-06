import { Link } from 'react-router-dom';
import { ArrowRight, Palette, Code, BarChart3, Wrench } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';

const skillCategories = [
  {
    icon: Palette,
    title: 'Design & Prototyping',
    skills: ['Figma', 'Canva', 'UI/UX Design', 'Adobe Express'],
    color: 'text-pink-500',
  },
  {
    icon: Code,
    title: 'Development',
    skills: ['Python', 'C/C++ Programming', 'VS Code', 'Git & GitHub'],
    color: 'text-blue-500',
  },
  {
    icon: BarChart3,
    title: 'Data & Analytics - Learing!',
    skills: ['Power BI', 'Data Visualization', 'MS Excel'],
    color: 'text-green-500',
  },
  {
    icon: Wrench,
    title: 'Productivity Tools - Learing!',
    skills: ['MS Office', 'WordPress', 'AI Tools'],
    color: 'text-orange-500',
  },
];

const SkillsPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Skills & Expertise"
          subtitle="A snapshot of my technical skills and tools I work with"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <AnimatedCard key={category.title} delay={index * 100}>
                <div className={`mb-4 ${category.color}`}>
                  <Icon size={32} />
                </div>
                <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            to="/about#skills"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all duration-300"
          >
            View All Skills
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SkillsPreview;

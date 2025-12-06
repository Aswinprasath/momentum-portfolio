import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';

const featuredProjects = [
  {
    title: 'Travel App UI/UX',
    description: 'A comprehensive travel application design featuring intuitive navigation, booking flows, and immersive destination exploration with modern UI patterns.',
    tags: ['Figma', 'UI/UX', 'Mobile App', 'Prototyping'],
    image: 'https://tinyurl.com/thumpnailtravelapp',
    liveUrl: 'https://www.figma.com/proto/0ZKBztEF52EWwkrJ5aDgof/FirstAppTravel?page-id=0%3A1&node-id=235-3870&p=f&viewport=-2240%2C-567%2C0.5&t=OlL0lb6qxbiqRwQ2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=237%3A4191',
    githubUrl: '#',
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'Data visualization dashboard for e-commerce analytics with real-time metrics, sales tracking, and customer insights using modern chart libraries.',
    tags: ['Power BI', 'Data Viz', 'Analytics'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    liveUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio website showcasing projects, skills, and professional journey with smooth animations and responsive design.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Featured Projects"
          subtitle="A selection of my recent work and side projects"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.title} {...project} delay={index * 100} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
          >
            View All Projects
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

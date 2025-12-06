import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import { projects } from '@/data/portfolioData';
import ProjectCard from '@/components/ui/ProjectCard';

const Projects = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="My Projects"
            subtitle="A collection of my work showcasing UI/UX design, data visualization, and development projects"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Link key={project.id} to={`/projects/${project.id}`}>
                <ProjectCard {...project} delay={index * 100} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
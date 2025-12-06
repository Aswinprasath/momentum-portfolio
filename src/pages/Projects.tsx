import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import ProjectCard from '@/components/ui/ProjectCard';

const projects = [
  {
    title: 'Travel App UI/UX',
    description: 'A comprehensive travel application design featuring intuitive navigation, seamless booking flows, and immersive destination exploration. Built with modern UI patterns focusing on user experience and accessibility.',
    tags: ['Figma', 'UI/UX', 'Prototyping', 'Mobile App'],
    image: 'https://tinyurl.com/thumpnailtravelapp',
    liveUrl: 'https://www.figma.com/proto/0ZKBztEF52EWwkrJ5aDgof/FirstAppTravel?page-id=0%3A1&node-id=235-3870&p=f&viewport=-2240%2C-567%2C0.5&t=OlL0lb6qxbiqRwQ2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=237%3A4191',
    githubUrl: '#',
  },
  {
    title: 'E-Commerce Dashboard',
    description: 'Data visualization dashboard for e-commerce analytics featuring real-time metrics, sales tracking, customer insights, and inventory management with interactive charts and filters.',
    tags: ['Power BI', 'Data Viz', 'Analytics', 'Dashboard'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    liveUrl: '#',
  },
  {
    title: 'Personal Portfolio',
    description: 'Modern portfolio website showcasing projects, skills, and professional journey with smooth animations, responsive design, and dark/light mode support.',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'Productivity application for managing tasks and projects with features like drag-and-drop, priority levels, due dates, and team collaboration capabilities.',
    tags: ['Figma', 'UI/UX', 'Web App'],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    liveUrl: '#',
  },
  {
    title: 'Weather Dashboard',
    description: 'Clean and intuitive weather application design showing current conditions, forecasts, and weather alerts with beautiful visual representations.',
    tags: ['Figma', 'UI Design', 'Mobile'],
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    liveUrl: '#',
  },
  {
    title: 'Learning Platform UI',
    description: 'E-learning platform interface design featuring course catalogs, progress tracking, video lessons, and interactive quizzes with gamification elements.',
    tags: ['Figma', 'UI/UX', 'Education'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
  },
];

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
              <ProjectCard key={project.title} {...project} delay={index * 100} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;

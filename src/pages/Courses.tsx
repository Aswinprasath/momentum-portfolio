import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { BookOpen, Clock, Award } from 'lucide-react';

const courses = [
  {
    title: 'UI/UX Design Fundamentals',
    platform: 'Coursera',
    duration: '40 hours',
    status: 'Completed',
    description: 'Comprehensive course covering design principles, user research, wireframing, prototyping, and usability testing.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
  },
  {
    title: 'Python for Everybody',
    platform: 'Coursera',
    duration: '60 hours',
    status: 'In Progress',
    description: 'Learning Python programming from basics to advanced concepts including data structures, web scraping, and databases.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
  },
  {
    title: 'Data Visualization with Power BI',
    platform: 'LinkedIn Learning',
    duration: '25 hours',
    status: 'Completed',
    description: 'Creating interactive dashboards and reports using Microsoft Power BI for business intelligence and analytics.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
  },
  {
    title: 'Git & GitHub Masterclass',
    platform: 'Udemy',
    duration: '15 hours',
    status: 'Completed',
    description: 'Version control fundamentals, branching strategies, collaboration workflows, and GitHub features.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop',
  },
  {
    title: 'Figma UI/UX Design Essentials',
    platform: 'Udemy',
    duration: '30 hours',
    status: 'Completed',
    description: 'Mastering Figma for creating stunning user interfaces, design systems, and interactive prototypes.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=250&fit=crop',
  },
  {
    title: 'C Programming Bootcamp',
    platform: 'University Course',
    duration: '45 hours',
    status: 'Completed',
    description: 'Fundamentals of C programming including data types, control structures, functions, pointers, and file handling.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
  },
];

const Courses = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Courses & Learning"
            subtitle="My continuous learning journey through online courses and certifications"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course, index) => (
              <AnimatedCard key={course.title} delay={index * 100} className="overflow-hidden p-0">
                {/* Course Image */}
                <div className="relative h-40 overflow-hidden group">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                  <span
                    className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
                      course.status === 'Completed'
                        ? 'bg-green-500/20 text-green-500'
                        : 'bg-yellow-500/20 text-yellow-500'
                    }`}
                  >
                    {course.status}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <BookOpen size={14} />
                      {course.platform}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {course.duration}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {course.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;

import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { courses } from '@/data/portfolioData';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';

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
              <Link key={course.id} to={`/courses/${course.id}`}>
                <AnimatedCard delay={index * 100} className="overflow-hidden p-0 h-full group">
                  {/* Course Image */}
                  <div className="relative h-40 overflow-hidden">
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
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">{course.title}</h3>
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
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {course.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm text-primary font-medium">
                      View Details <ArrowRight size={14} />
                    </span>
                  </div>
                </AnimatedCard>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Courses;
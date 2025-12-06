import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getCourseById } from '@/data/portfolioData';
import { ArrowLeft, BookOpen, Clock, Award, ExternalLink, CheckCircle } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const course = getCourseById(id || '');

  if (!course) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-primary hover:underline">
            ← Back to Courses
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Courses
          </Link>

          {/* Hero Section */}
          <div className="relative rounded-2xl overflow-hidden mb-12 animate-fade-in">
            <div className="aspect-video max-h-[400px] w-full">
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  course.status === 'Completed'
                    ? 'bg-green-500/20 text-green-500'
                    : 'bg-yellow-500/20 text-yellow-500'
                }`}
              >
                {course.status}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{course.title}</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedCard delay={100}>
                <h2 className="text-2xl font-semibold mb-4">About This Course</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {course.fullDescription}
                </p>
              </AnimatedCard>

              <AnimatedCard delay={200}>
                <h2 className="text-2xl font-semibold mb-4">Topics Covered</h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {course.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle size={16} className="text-primary" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedCard delay={300}>
                <h3 className="text-lg font-semibold mb-4">Course Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Platform</p>
                      <p className="font-medium">{course.platform}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Clock size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Duration</p>
                      <p className="font-medium">{course.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Award size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Status</p>
                      <p className="font-medium">{course.status}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              {course.certificateUrl && (
                <AnimatedCard delay={400}>
                  <a
                    href={course.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity w-full"
                  >
                    <ExternalLink size={18} />
                    View Certificate
                  </a>
                </AnimatedCard>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetail;
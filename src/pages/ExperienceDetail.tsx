import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getExperienceById } from '@/data/portfolioData';
import { ArrowLeft, Briefcase, CheckCircle, Award, Wrench } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';

const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const experience = getExperienceById(id || '');

  if (!experience) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Experience Not Found</h1>
          <Link to="/experience" className="text-primary hover:underline">
            ← Back to Experience
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
            to="/experience"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Experience
          </Link>

          {/* Header */}
          <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-4 rounded-xl bg-primary/10 text-primary">
                <Briefcase size={32} />
              </div>
              <div>
                <span className="text-sm text-primary font-medium px-3 py-1 rounded-full bg-primary/10 mb-2 inline-block">
                  {experience.date}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{experience.title}</h1>
                <p className="text-xl text-muted-foreground">{experience.subtitle}</p>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Overview */}
            <AnimatedCard delay={100}>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {experience.fullDescription}
              </p>
            </AnimatedCard>

            {/* Responsibilities */}
            <AnimatedCard delay={200}>
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="text-primary" size={24} />
                <h2 className="text-2xl font-semibold">Key Responsibilities</h2>
              </div>
              <ul className="space-y-3">
                {experience.responsibilities.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedCard>

            {/* Achievements */}
            <AnimatedCard delay={300}>
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-yellow-500" size={24} />
                <h2 className="text-2xl font-semibold">Key Achievements</h2>
              </div>
              <ul className="space-y-3">
                {experience.achievements.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </AnimatedCard>

            {/* Skills Used */}
            <AnimatedCard delay={400}>
              <div className="flex items-center gap-3 mb-4">
                <Wrench className="text-primary" size={24} />
                <h2 className="text-2xl font-semibold">Skills & Tools</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExperienceDetail;
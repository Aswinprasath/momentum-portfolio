import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import TimelineItem from '@/components/ui/TimelineItem';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'UI/UX Design Intern',
    subtitle: 'Tech Startup (Remote)',
    date: '2024 - Present',
    description: 'Creating user interfaces and improving user experience for web and mobile applications. Collaborating with development teams to implement designs using Figma and conducting user research.',
  },
  {
    title: 'Freelance Graphic Designer',
    subtitle: 'Self-Employed',
    date: '2023 - Present',
    description: 'Designing social media graphics, marketing materials, and brand identities for small businesses using Canva and Figma. Building client relationships and delivering projects on tight deadlines.',
  },
  {
    title: 'IT Student Assistant',
    subtitle: 'University IT Department',
    date: '2023 - 2024',
    description: 'Assisted students and faculty with technical issues, maintained computer labs, and helped with software installations. Gained hands-on experience with troubleshooting and customer service.',
  },
  {
    title: 'Web Development Volunteer',
    subtitle: 'Non-Profit Organization',
    date: '2022 - 2023',
    description: 'Built and maintained WordPress websites for local non-profit organizations. Implemented responsive designs and trained staff on content management.',
  },
];

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
              <TimelineItem
                key={exp.title}
                {...exp}
                icon={<Briefcase size={12} />}
                delay={index * 150}
              />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Experience;

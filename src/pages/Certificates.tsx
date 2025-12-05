import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const certificates = [
  {
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google via Coursera',
    date: 'December 2024',
    credentialId: 'ABC123XYZ',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&h=250&fit=crop',
    verifyUrl: '#',
  },
  {
    title: 'Python for Data Science',
    issuer: 'IBM via Coursera',
    date: 'October 2024',
    credentialId: 'DEF456UVW',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
    verifyUrl: '#',
  },
  {
    title: 'Microsoft Power BI Data Analyst',
    issuer: 'Microsoft',
    date: 'September 2024',
    credentialId: 'GHI789RST',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    verifyUrl: '#',
  },
  {
    title: 'Figma UI Design Certificate',
    issuer: 'Figma',
    date: 'August 2024',
    credentialId: 'JKL012MNO',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=250&fit=crop',
    verifyUrl: '#',
  },
  {
    title: 'Git & GitHub Certification',
    issuer: 'GitHub',
    date: 'July 2024',
    credentialId: 'PQR345STU',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop',
    verifyUrl: '#',
  },
  {
    title: 'Web Development Fundamentals',
    issuer: 'freeCodeCamp',
    date: 'June 2024',
    credentialId: 'VWX678YZA',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    verifyUrl: '#',
  },
];

const Certificates = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Certificates"
            subtitle="Professional certifications and achievements validating my skills"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <AnimatedCard key={cert.title} delay={index * 100} className="overflow-hidden p-0 group">
                {/* Certificate Image */}
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <Award className="text-primary" size={32} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">{cert.issuer}</p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Calendar size={14} />
                      {cert.date}
                    </span>
                    <a
                      href={cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-primary hover:underline"
                    >
                      Verify
                      <ExternalLink size={14} />
                    </a>
                  </div>
                  
                  <p className="text-xs text-muted-foreground mt-2">
                    ID: {cert.credentialId}
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

export default Certificates;

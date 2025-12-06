import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { certificates } from '@/data/portfolioData';
import { Award, Calendar, ArrowRight } from 'lucide-react';

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
              <Link key={cert.id} to={`/certificates/${cert.id}`}>
                <AnimatedCard delay={index * 100} className="overflow-hidden p-0 h-full group">
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
                    
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Calendar size={14} />
                        {cert.date}
                      </span>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-3">
                      ID: {cert.credentialId}
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

export default Certificates;
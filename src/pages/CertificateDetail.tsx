import { useParams, Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { getCertificateById } from '@/data/portfolioData';
import { ArrowLeft, Award, Calendar, ExternalLink, Hash } from 'lucide-react';
import AnimatedCard from '@/components/ui/AnimatedCard';

const CertificateDetail = () => {
  const { id } = useParams<{ id: string }>();
  const certificate = getCertificateById(id || '');

  if (!certificate) {
    return (
      <Layout>
        <div className="py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Certificate Not Found</h1>
          <Link to="/certificates" className="text-primary hover:underline">
            ← Back to Certificates
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
            to="/certificates"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft size={18} />
            Back to Certificates
          </Link>

          {/* Hero Section */}
          <div className="relative rounded-2xl overflow-hidden mb-12 animate-fade-in">
            <div className="aspect-video max-h-[400px] w-full">
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-primary" size={32} />
                <span className="text-primary font-medium">{certificate.issuer}</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{certificate.title}</h1>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <AnimatedCard delay={100}>
                <h2 className="text-2xl font-semibold mb-4">About This Certificate</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {certificate.description}
                </p>
              </AnimatedCard>

              <AnimatedCard delay={200}>
                <h2 className="text-2xl font-semibold mb-4">Skills Validated</h2>
                <div className="flex flex-wrap gap-2">
                  {certificate.skills.map((skill) => (
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

            {/* Sidebar */}
            <div className="space-y-6">
              <AnimatedCard delay={300}>
                <h3 className="text-lg font-semibold mb-4">Certificate Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Award size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Issuer</p>
                      <p className="font-medium">{certificate.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Calendar size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Issue Date</p>
                      <p className="font-medium">{certificate.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Hash size={18} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Credential ID</p>
                      <p className="font-medium text-sm">{certificate.credentialId}</p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={400}>
                <a
                  href={certificate.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity w-full"
                >
                  <ExternalLink size={18} />
                  Verify Certificate
                </a>
              </AnimatedCard>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CertificateDetail;
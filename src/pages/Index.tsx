import Layout from '@/components/layout/Layout';
import HeroSection from '@/components/home/HeroSection';
import SkillsPreview from '@/components/home/SkillsPreview';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import CTASection from '@/components/home/CTASection';

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <SkillsPreview />
      <FeaturedProjects />
      <CTASection />
    </Layout>
  );
};

export default Index;

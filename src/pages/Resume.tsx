import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import AnimatedCard from '@/components/ui/AnimatedCard';
import SkillBadge from '@/components/ui/SkillBadge';
import { Download, Mail, Phone, MapPin, Linkedin, Github, Briefcase, GraduationCap, Code, Award } from 'lucide-react';

const Resume = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Resume"
            subtitle="My professional summary and qualifications"
          />

          {/* Download Button */}
          <div className="flex justify-center mb-12">
            <a
              href="#"
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              <Download size={18} />
              Download PDF Resume
            </a>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Header */}
            <AnimatedCard delay={0}>
              <div className="text-center mb-6">
                <h2 className="text-3xl font-bold mb-2">Tech Enthusiast</h2>
                <p className="text-lg text-primary font-medium mb-4">UI/UX Designer & IT Student</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Mail size={14} />
                  contact@example.com
                </span>
                <span className="flex items-center gap-1">
                  <Phone size={14} />
                  +1 234 567 890
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  Your City, Country
                </span>
                <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Linkedin size={14} />
                  LinkedIn
                </a>
                <a href="#" className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Github size={14} />
                  GitHub
                </a>
              </div>
            </AnimatedCard>

            {/* Summary */}
            <AnimatedCard delay={100}>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Code size={18} />
                </div>
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Motivated and curious tech enthusiast currently pursuing IT studies with growing expertise in 
                UI/UX design, software tools, data visualization, and programming. Passionate about leveraging 
                technology to solve real-world problems. Known for being a fast learner, highly adaptable, 
                and committed to delivering meaningful, high-quality results.
              </p>
            </AnimatedCard>

            {/* Experience */}
            <AnimatedCard delay={200}>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Briefcase size={18} />
                </div>
                Experience
              </h3>
              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <h4 className="font-medium">UI/UX Design Intern</h4>
                    <span className="text-sm text-primary">2024 - Present</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Tech Startup (Remote)</p>
                  <p className="text-sm text-muted-foreground">
                    Creating user interfaces and improving UX for web and mobile applications. 
                    Collaborating with development teams using Figma.
                  </p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <h4 className="font-medium">Freelance Graphic Designer</h4>
                    <span className="text-sm text-muted-foreground">2023 - Present</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Self-Employed</p>
                  <p className="text-sm text-muted-foreground">
                    Designing social media graphics and marketing materials for small businesses.
                  </p>
                </div>
              </div>
            </AnimatedCard>

            {/* Education */}
            <AnimatedCard delay={300}>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <GraduationCap size={18} />
                </div>
                Education
              </h3>
              <div className="border-l-2 border-primary pl-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                  <h4 className="font-medium">Bachelor's in Information Technology</h4>
                  <span className="text-sm text-primary">2022 - Present</span>
                </div>
                <p className="text-sm text-muted-foreground">University Name</p>
              </div>
            </AnimatedCard>

            {/* Skills */}
            <AnimatedCard delay={400}>
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Award size={18} />
                </div>
                Skills
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2 text-muted-foreground">Design & Prototyping</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Canva', 'UI/UX Design', 'Wireframing', 'Prototyping'].map(skill => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2 text-muted-foreground">Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'C Programming', 'VS Code', 'Git', 'GitHub', 'WordPress'].map(skill => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2 text-muted-foreground">Data & Productivity</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Power BI', 'MS Excel', 'MS Office', 'Data Visualization', 'AI Tools'].map(skill => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Resume;

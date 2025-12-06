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
              href="https://tinyurl.com/5dse48wz"
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
                <p className="text-lg text-primary font-medium mb-4">Python Programmer | UI/UX Designer | IT Student</p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Mail size={14} />
                  gowthamginju9524@gmail.com
                </span>
                <span className="flex items-center gap-1">
                  <Phone size={14} />
                  +91 93612 18343
                </span>
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  Tamilnadu, India
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
                Python Program, UI/UX design, software tools, data visualization, and some programming. Passionate about leveraging 
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
                    <h4 className="font-medium">UI/UX Designer (Self-Employed)</h4>
                    <span className="text-sm text-primary">Lastly, Oct 2025 - Nov 2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">30-Day UI/UX Design Course</p>
                  <p className="text-sm text-muted-foreground">
                    Completed an intensive 30-day UI/UX design course, focusing on modern design principles, wireframing, prototyping, and creative tools.
                  </p>
                </div>
                <div className="border-l-2 border-border pl-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <h4 className="font-medium">Python Programmer (Self-Employed)</h4>
                    <span className="text-sm text-muted-foreground">2025</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Python Programming Course (YouTube Learning)</p>
                  <p className="text-sm text-muted-foreground">
                    Designing social media graphics, marketing materials, and brand identities for small businesses.
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
                  <h4 className="font-medium">Bachelor's in Artificial Intelligence and Data Science</h4>
                  <span className="text-sm text-primary">2025 - Present</span>
                </div>
                <p className="text-sm text-muted-foreground">Karpagam University - Karpagam Academy of Higher Education</p>
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
                    {['Figma', 'Canva', 'Adobe Express', 'UI/UX Design', 'Prototyping', 'Wireframing'].map(skill => (
                      <SkillBadge key={skill} name={skill} />
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium mb-2 text-muted-foreground">Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {['Python Programming', 'C Programming', 'C++ Programming', 'VS Code', 'Git', 'GitHub'].map(skill => (
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

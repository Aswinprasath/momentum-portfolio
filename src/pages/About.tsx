import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SectionHeader from '@/components/ui/SectionHeader';
import SkillBadge from '@/components/ui/SkillBadge';
import AnimatedCard from '@/components/ui/AnimatedCard';
import { User, Target, BookOpen, Rocket } from 'lucide-react';

const tools = {
  'Design & Prototyping': ['Figma', 'Canva', 'UI/UX Design', 'Wireframing', 'Prototyping'],
  'Development Tools': ['VS Code', 'Git', 'GitHub','DevC++','TurboC++', 'WordPress'],
  'Data & Productivity': ['Power BI', 'MS Excel', 'MS Word', 'MS PowerPoint', 'AI Tools'],
};

const skills = [
  'Python Programming',
  'C/C++ Programming',
  'UI/UX Design',
  'Wireframing & User Flows',
  'Data Visualization',
  'Problem-Solving',
  'Team Collaboration',
  'Continuous Learning',
];

const learning = [
  'Advanced UI/UX methods',
  'Python for automation & data',
  'C++ & Java Programming',
  'Power BI dashboards',
  'Improved Git/GitHub workflows',
];

const About = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation for skills section
    if (location.hash === '#skills') {
      setTimeout(() => {
        const skillsSection = document.getElementById('skills-section');
        if (skillsSection) {
          skillsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="About Me"
            subtitle="Get to know more about my journey, skills, and aspirations"
          />

          {/* Introduction */}
          <div className="max-w-4xl mx-auto mb-16">
            <AnimatedCard delay={0}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Who I Am</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm a motivated and curious tech enthusiast currently pursuing my studies in IT, 
                    with growing expertise in Python programming, UI/UX design, Frontend, backend and software tools. 
                    I'm passionate about leveraging technology to solve real-world problems and continuously 
                    improving my skills through hands-on learning.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    I am known for being a fast learner, highly adaptable, and committed to delivering meaningful, 
                    high-quality results. I enjoy working on creative projects, building user-friendly interfaces, 
                    and exploring tools that enhance productivity and innovation.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>

          {/* Tools & Technologies */}
          <div id="skills-section" className="mb-16 scroll-mt-24">
            <h3 className="text-2xl font-bold text-center mb-8">
              🛠 Tools & Technologies
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(tools).map(([category, items], index) => (
                <AnimatedCard key={category} delay={index * 100}>
                  <h4 className="text-lg font-semibold mb-4 text-primary">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((tool) => (
                      <SkillBadge key={tool} name={tool} />
                    ))}
                  </div>
                </AnimatedCard>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8">
              💡 Skills
            </h3>
            <AnimatedCard delay={0}>
              <div className="flex flex-wrap justify-center gap-3">
                {skills.map((skill) => (
                  <SkillBadge key={skill} name={skill} />
                ))}
              </div>
            </AnimatedCard>
          </div>

          {/* Currently Learning */}
          <div className="mb-16">
            <AnimatedCard delay={100}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-green-500/10 text-green-500">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">🌱 Currently Learning</h3>
                  <ul className="space-y-2">
                    {learning.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </AnimatedCard>
          </div>

          {/* Career Goal */}
          <div className="max-w-4xl mx-auto">
            <AnimatedCard delay={200}>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary">
                  <Rocket size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">🚀 Career Goal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To grow as an IT professional by contributing to impactful projects, 
                    enhancing user experiences, and becoming proficient in modern technologies. 
                    I am eager to collaborate, learn, and take on challenges that help me advance 
                    in the tech industry.
                  </p>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

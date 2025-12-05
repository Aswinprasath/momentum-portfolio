import { Link } from 'react-router-dom';
import { ArrowRight, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="relative bg-gradient-card rounded-2xl border border-border p-8 md:p-12 overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              I'm always open to discussing new projects, creative ideas, 
              or opportunities to be part of your vision.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
              >
                <Mail size={18} />
                Get In Touch
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium border border-border transition-all duration-300 hover:bg-secondary/80"
              >
                Learn More About Me
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

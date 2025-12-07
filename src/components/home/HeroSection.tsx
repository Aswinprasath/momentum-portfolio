import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="relative inline-block mb-8 mt-8 animate-fade-in">
            {/* Decorative rotating border */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-primary/50 to-primary animate-spin-slow"
              style={{
                padding: '4px',
                animationDuration: '8s',
              }}
            >
              <div className="w-full h-full rounded-full bg-background" />
            </div>
            {/* Curly decorative frame */}
            <div
              className="absolute -inset-3 rounded-full border-2 border-dashed border-primary/30 animate-spin-slow"
              style={{
                animationDuration: '20s',
                animationDirection: 'reverse',
              }}
            />
            <div
              className="absolute -inset-6 rounded-full border border-dotted border-primary/20 animate-spin-slow"
              style={{
                animationDuration: '30s',
              }}
            />
            {/* Glowing effect */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse-slow" />
            {/* Image container */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full p-1 bg-gradient-to-br from-primary via-primary/60 to-primary/30">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-card to-secondary flex items-center justify-center overflow-hidden border-4 border-background shadow-2xl">
                <img
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                  src="/lovable-uploads/a08e67bf-a0b8-42dd-9af2-ef3686e3bbef.jpg"
                />
              </div>
            </div>
            {/* Corner decorations */}
            <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary animate-bounce-subtle" />
            <div
              className="absolute -bottom-2 -left-2 w-3 h-3 rounded-full bg-primary/70 animate-bounce-subtle"
              style={{
                animationDelay: '0.5s',
              }}
            />
          </div>

          {/* Status Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in"
            style={{
              animationDelay: '100ms',
            }}
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for opportunities
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up"
            style={{
              animationDelay: '200ms',
              animationFillMode: 'forwards',
            }}
          >
            Hi, I'm a <span className="text-gradient">Tech-focused </span>
            <br />
            Python coder and UI/UX designer in progress
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-up opacity-0"
            style={{
              animationDelay: '200ms',
              animationFillMode: 'forwards',
            }}
          >
            Motivated and curious IT student passionate about leveraging technology to solve real-world problems,
            skilled in Python and UI/UX design to create impactful digital solutions.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up opacity-0"
            style={{
              animationDelay: '300ms',
              animationFillMode: 'forwards',
            }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-primary text-primary-foreground font-medium transition-all duration-300 hover:scale-105 hover:shadow-glow"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-secondary text-secondary-foreground font-medium border border-border transition-all duration-300 hover:bg-secondary/80 hover:scale-105"
            >
              <Download size={18} />
              Download Resume
            </Link>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-4 animate-slide-up opacity-0"
            style={{
              animationDelay: '400ms',
              animationFillMode: 'forwards',
            }}
          >
            <a
              href="https://github.com/Aswinprasath"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/link-aswinprasath/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:gowthamginju9524@gmail.com"
              target="_blank"
              className="p-3 rounded-xl bg-card border border-border hover:border-primary hover:text-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 z-50"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Positioned lower with proper spacing */}
      <div className="absolute bottom-12 left-[49.05%] -translate-x-1/2 animate-bounce-subtle z-20 mt-8">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/60 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/60 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

// Centralized portfolio data for projects, experiences, courses, and certificates

export interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  technologies: string[];
  duration: string;
  role: string;
}

export interface Experience {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  fullDescription: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
}

export interface Course {
  id: string;
  title: string;
  platform: string;
  duration: string;
  status: 'Completed' | 'In Progress';
  description: string;
  fullDescription: string;
  image: string;
  topics: string[];
  certificateUrl?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  verifyUrl: string;
  description: string;
  skills: string[];
}

export const projects: Project[] = [
  {
    id: 'travel-app',
    title: 'Travel App UI/UX',
    description: 'Designed a complete 47-screen travel application in Figma, including full prototyping, component systems, and error states.',
    fullDescription: 'Designed a complete 47-screen travel application in Figma, including full prototyping, component systems, and error states. This app is not built for real use — it is created purely to showcase my UI/UX skills.Used plugins like Iconify, LottieFiles Animate, and Animate Text. Gained experience in wireframing, prototyping, alignment, accessibility, flow thinking, and end-to-end UI/UX design. AI was used only for content references, not for the design itself.',
    tags: ['Figma', 'UI/UX', 'Prototyping', 'Mobile App'],
    image: 'https://tinyurl.com/thumpnailtravelapp',
    liveUrl: 'https://www.figma.com/proto/0ZKBztEF52EWwkrJ5aDgof/FirstAppTravel?page-id=0%3A1&node-id=235-3870&p=f&viewport=-2240%2C-567%2C0.5&t=OlL0lb6qxbiqRwQ2-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=237%3A4191',
    githubUrl: '#',
    features: ['Destination Discovery', 'Explore events', 'Popular spots', 'Book rooms effortlessly', 'Travel options with guided steps', 'Online Mode'],
    technologies: ['Figma', 'Auto Layout', 'Components', 'Prototyping', 'Interactive Animations'],
    duration: '3 Days ONLY',
    role: 'UI/UX Designer',
  },
  {
    id: 'Whatsapp Pages',
    title: 'Whatsapp Pages',
    description: 'This project is a WhatsApp-inspired clone showcasing a series of 7 interactive pages that replicate the core flow from login to chat.',
    fullDescription: 'This project is a WhatsApp-inspired clone showcasing a series of 7 interactive pages that replicate the core flow from login to chat. While not a full-featured application, it highlights my ability to design and implement engaging user interfaces with attention to detail.',
    tags: ['Power BI', 'Data Viz', 'Analytics', 'Dashboard'],
    image: 'https://tinyurl.com/mu2fzvwd',
    liveUrl: 'https://www.figma.com/proto/tP00bjiyLzP6u3pxBKOvnP/Untitled?page-id=0%3A1&node-id=2-414&p=f&viewport=205%2C240%2C0.21&t=kkeKwDC2ExEBZkZV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A2',
    features: ['Multi-page flow', 'Smooth animations', 'Error/placeholder handling', 'UI/UX focus', 'Learning showcase', 'Simple loading styles'],
    technologies: ['Figma', 'Auto Layout', 'Prototyping', 'Animations', 'Loading'],
    duration: '1.5 Hours',
    role: 'UI/UX Designer',
  },
  {
    id: 'portfolio-website',
    title: 'Personal Portfolio',
    description: 'Modern portfolio website showcasing projects, skills, and professional journey with smooth animations, responsive design, and dark/light mode support.',
    fullDescription: 'A modern, responsive portfolio website built to showcase my professional work, skills, and journey. Features smooth animations, dark/light mode toggle, and an intuitive user experience. The site is optimized for performance and accessibility, ensuring a great experience for all visitors.',
    tags: ['React', 'Tailwind CSS', 'TypeScript'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    liveUrl: '#',
    githubUrl: '#',
    features: ['Dark/Light Mode', 'Smooth Animations', 'Responsive Design', 'SEO Optimized', 'Fast Loading', 'Contact Form'],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'React Router'],
    duration: '2 weeks',
    role: 'Full Stack Developer',
  },
  {
    id: 'Poster Design',
    title: 'Poster Design',
    description: 'This project is a creative poster design crafted for a music festival showcase. It demonstrates my ability to combine visual aesthetics, layout principles, and essential poster elements into a professional design.',
    fullDescription: 'This project is a creative poster design crafted for a music festival showcase. It demonstrates my ability to combine visual aesthetics, layout principles, and essential poster elements into a professional design. The poster was created to highlight my poster designing skills and to show how I can structure a visually appealing and informative event advertisement.',
    tags: ['Adobe Express', 'Poster Design', 'UI/UX'],
    image: 'https://tinyurl.com/355wfs47',
    liveUrl: 'https://new.express.adobe.com/id/urn:aaid:sc:AP:6a79c854-fe2f-47f3-89ba-d2b5bf23a574?invite=true&accept=true%3Fpreload%3Dsharesheet&promoid=Z2G1FQKR&mv=other',
    features: ['Event-focused design', 'Essential poster elements', 'Visual hierarchy', 'Creative graphics', 'Professional composition', 'Showcase purpose'],
    technologies: ['Abode Express', 'Typography tools', 'Color palette generators', 'Related Elements'],
    duration: '1 Hour',
    role: 'UI/UX|Poster Designer',
  },
  {
    id: 'WordPress Poster Design ',
    title: 'WordPress Templated Poster',
    description: 'This project is a LinkedIn background cover image of mine designed using Figma. It demonstrates my ability to create professional, visually appealing graphics that enhance personal branding on social platforms.',
    fullDescription: 'This project is a LinkedIn background cover image of mine designed using Figma. It demonstrates my ability to create professional, visually appealing graphics that enhance personal branding on social platforms. The cover image was crafted as a single image type, focusing on clarity, balance, and modern design principles.',
    tags: ['Figma', 'Background Cover', 'Design'],
    image: 'https://tinyurl.com/3h79uf69',
    liveUrl: 'https://www.figma.com/design/rFG67DcPYWBAzWnSyPktq5/Untitled?node-id=0-1&t=6dL0XSfs3iAPzN7B-1',
    features: ['Professional branding', 'Clean layout', 'Visual appeal', 'Figma-based design', 'Optimized dimensions', 'Portfolio showcase'],
    technologies: ['Figma', 'Vector editing tools', 'Typography styling', 'Color palette tools'],
    duration: '30 Mins',
    role: 'UI|Poster Designer',
  },
  {
    id: 'Insta Trial Page',
    title: 'Insta Single Page Design',
    description: 'This project is a single-page design of Instagram’s home screen, created as a first trial in UI/UX design.',
    fullDescription: 'This project is a single-page design of Instagram’s home screen, created as a first trial in UI/UX design. It was built in Figma to test my ability to replicate a familiar interface and explore the fundamentals of layout, structure, and visual hierarchy. Unlike a prototype, this project is more like a static poster or wireframe, focusing on the look and feel of the Instagram home feed.',
    tags: ['Figma', 'UI', 'Wireframe'],
    image: 'https://tinyurl.com/yfkuvu82',
    liveUrl: 'https://www.figma.com/design/U4Dqwqxew3VQIlEabwRvU3/Untitled?node-id=0-1&t=aS2QdG8AyvYcxkUK-1',
    githubUrl: '#',
    features: ['Single-page design', 'Wireframe-style approach', 'UI practice', 'Familiar app inspiration', 'Learning milestone', 'Clean visual structure'],
    technologies: ['Figma', 'Basic vector tools', 'Typography styling', 'Color palette selection'],
    duration: '45 Mins',
    role: 'UI/UX Designer',
  },
];

export const experiences: Experience[] = [
  {
    id: 'uiux-intern',
    title: 'UI/UX Designer (Self-Employed)',
    subtitle: '30-Day UI/UX Design Course',
    date: 'Oct 2025 - Nov 2025',
    description: 'Completed an intensive 30-day UI/UX design course, focusing on modern design principles, wireframing, prototyping, and creative tools.',
    fullDescription: 'Completed an intensive 30-day UI/UX design course, focusing on modern design principles, wireframing, prototyping, and creative tools. This project-based learning helped me build confidence in designing user interfaces and understanding user experience fundamentals.',
    responsibilities: [
      'Practiced creating wireframes and mockups for apps and websites',
      'Designed posters, social media assets, and UI screens using Figma and Adobe Express',
      'Explored responsive layouts and visual hierarchy for better usability',
      'Experimented with tools like WordPress and AI-powered design tools for creative workflows',
      
    ],
    achievements: [
      'Successfully designed multiple portfolio projects (WhatsApp clone, Instagram UI trial, posters)',
      'Learned to apply design thinking and problem-solving to real-world UI challenges',
      'Built confidence in using industry-standard tools like Figma and Adobe Express',
    ],
    skills: ['Figma', 'UI/UX Design', 'Adobe Express', 'WordPress', 'AI Tools for design', 'Wireframing & Prototyping'],
  },
  {
    id: 'Python Programmer',
    title: 'Python Programmer (Self-Employed)',
    subtitle: 'Python Programming Course (YouTube Learning)',
    date: '2025',
    description: 'Designing social media graphics, marketing materials, and brand identities for small businesses.',
    fullDescription: 'Completed a structured Python programming course through YouTube tutorials, focusing on the fundamentals of programming, problem-solving, and building small projects. This was my first step into coding and software development.',
    responsibilities: [
      'Practiced writing Python scripts for basic tasks and problem-solving',
      'Learned about data types, loops, functions, and error handling',
      'Explored entry-level projects to apply programming concepts',
      'Developed logical thinking and debugging skills through hands-on exercises',
      
    ],
    achievements: [
      'Gained confidence in Python syntax and programming logic',
      'Built small trial projects to test knowledge (calculators, simple automation scripts)',
      'Reached an intermediate level of understanding in Python programming',
    ],
    skills: ['Python (Entry to Intermediate Level)', 'Problem-Solving', 'Debugging', 'Programming Logic', 'Basic Automation'],
  },
  /*
  {
    id: 'it-assistant',
    title: 'IT Student Assistant',
    subtitle: 'University IT Department',
    date: '2023 - 2024',
    description: 'Assisted students and faculty with technical issues and maintained computer labs.',
    fullDescription: 'Served as an IT Student Assistant at the university IT department, providing technical support to students and faculty. This role developed my troubleshooting skills, customer service abilities, and understanding of IT infrastructure management.',
    responsibilities: [
      'Provide technical support to students and faculty',
      'Maintain and troubleshoot computer lab equipment',
      'Assist with software installations and updates',
      'Document technical issues and solutions',
      'Train users on new software and systems',
    ],
    achievements: [
      'Resolved 500+ support tickets with 95% satisfaction rate',
      'Created user guides that reduced common support requests by 30%',
      'Led lab setup for 3 major university events',
    ],
    skills: ['Technical Support', 'Troubleshooting', 'Customer Service', 'Documentation', 'Training'],
  },
  {
    id: 'web-volunteer',
    title: 'Web Development Volunteer',
    subtitle: 'Non-Profit Organization',
    date: '2022 - 2023',
    description: 'Built and maintained WordPress websites for local non-profit organizations.',
    fullDescription: 'Volunteered my web development skills to help local non-profit organizations establish their online presence. Built responsive WordPress websites and trained staff on content management, making a meaningful impact in the community.',
    responsibilities: [
      'Build and maintain WordPress websites',
      'Implement responsive design for all devices',
      'Train staff on content management',
      'Optimize websites for performance and SEO',
      'Provide ongoing technical support',
    ],
    achievements: [
      'Built websites for 5 local non-profits',
      'Increased online donations by 40% through improved UX',
      'Trained 15+ staff members on WordPress',
    ],
    skills: ['WordPress', 'HTML/CSS', 'Responsive Design', 'SEO', 'Training'],
  },*/
];

export const courses: Course[] = [
  {
    id: 'uiux-fundamentals',
    title: 'UI/UX Design',
    platform: 'NoviTech R&D Pvt.Ltd (Online)',
    duration: '30-Days',
    status: 'Completed',
    description: 'Completed an intensive 30-day online course focused on UI/UX design principles, creative workflows, and modern tools.',
    fullDescription: 'Completed an intensive 30-day online course focused on UI/UX design principles, creative workflows, and modern tools. Learned how a professional designer approaches projects, from wireframing to polished designs.',
    image: 'https://img.freepik.com/premium-vector/gradient-ui-ux-design-illustration_23-2151514787.jpg?semt=ais_hybrid',
    topics: ['Figma','Prototyping', 'Wireframing', 'Adobe Express', 'Canva', 'WordPress', 'Design principles', 'Graphics creation', 'Poster Creation', 'Web design tools', 'AI tools', 'Miro', 'Balsamiq', 'Supporting design utilities'],
    certificateUrl: 'https://bit.ly/certificationbynovitech',
  },
  {
    id: 'python-everybody',
    title: 'Python Programming – Full Course',
    platform: 'Error Makes Clever (YouTube Channel)',
    duration: '10 Hours',
    status: 'Completed',
    description: 'Completed a structured Python programming course covering fundamentals and intermediate concepts.',
    fullDescription: 'Completed a structured Python programming course covering fundamentals and intermediate concepts. Focused on building a strong foundation in coding and problem-solving.',
    image: 'https://i.ytimg.com/vi/m0LdKZ-prto/maxresdefault.jpg',
    topics: ['Python Basics', 'Data types', 'Loops', 'Functions', 'Error handling', 'Intermediate concepts', 'Small example projects'],
  },
  {
    id: 'Git & GitHub',
    title: 'Git & GitHub Essentials',
    platform: 'Error Makes Clever (YouTube Channel)',
    duration: '1.5 Hours',
    status: 'Completed',
    description: 'Learned the essentials of version control and collaboration using Git and GitHub.',
    fullDescription: 'Learned the essentials of version control and collaboration using Git and GitHub. Practiced commands and workflows for managing code repositories.',
    image: 'https://fireship.io/courses/git/img/featured.png',
    topics: ['Git basics', 'GitHub usage', 'Push/pull and commit', 'Branching', 'Repository management', 'Integration with VS Code', 'Direct GitHub operations'],
    /*certificateUrl: '#',*/
  },
  {
    id: 'C & C++ Programming',
    title: 'C & C++ Programming (Ongoing College Course)',
    platform: 'College Curriculum',
    duration: '1 Year',
    status: 'Learning',
    description: 'Currently learning C and C++ programming through college coursework.',
    fullDescription: 'Currently learning C and C++ programming through college coursework. Built a foundation in structured programming and object-oriented concepts.',
    image: 'https://klic.mkcl.org/user/pages/images/courses/KLiC-C-CPP-Programming-2024.jpg',
    topics: ['C basics', 'C++ basics', 'Intermediate concepts', 'Syntax & functions', 'Data structures', 'Problem-solving'],
   /*certificateUrl: '#',*/
  },
  {
    id: 'Power BI Workshop',
    title: 'Power BI Workshop – Interactive Dashboard Creation',
    platform: 'Office Master',
    duration: '3 hours',
    status: 'Completed',
    description: 'Attended a workshop focused on creating interactive dashboards using Power BI.',
    fullDescription: 'Attended a workshop focused on creating interactive dashboards using Power BI. Learned how to visualize data effectively and build professional reports.',
    image: 'https://user-images.githubusercontent.com/80893000/252129146-6d0d4c22-1be8-43fc-844f-e4474f5c48c2.jpg',
    topics: ['Power BI basics', 'Data import', 'Dashboard creation', 'Interactive visuals', 'Report publishing', 'Data storytelling'],
    certificateUrl: 'https://certx.in/certificate/36a28147-6eed-47a5-8342-e5f926ebba61735470',
  },
 /* {
    id: 'c-programming',
    title: 'C Programming Bootcamp',
    platform: 'University Course',
    duration: '45 hours',
    status: 'Completed',
    description: 'Fundamentals of C programming including data types, control structures, functions, pointers, and file handling.',
    fullDescription: 'A rigorous bootcamp covering C programming fundamentals. The course provided a strong foundation in programming concepts, memory management, and low-level programming that has enhanced my understanding of how software works.',
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=250&fit=crop',
    topics: ['Data Types', 'Control Structures', 'Functions', 'Pointers', 'File Handling', 'Memory Management'],
    certificateUrl: '#',
  },*/
];

export const certificates: Certificate[] = [
  {
    id: 'UI UX Design',
    title: 'UI/UX Design Certificate',
    issuer: 'ISO approved - NoviTech R&D Pvt Ltd',
    date: 'Nov 2025',
    credentialId: 'NT_B14UIUXT18',
    image: 'https://bit.ly/certificationbynovitech',
    /*verifyUrl: '#',*/
    description: 'Successfully completed a 30-day online UI/UX Design course conducted by NoviTech R&D Pvt. Ltd. The course provided hands-on training in modern design principles, creative workflows, and professional tools used by UI/UX designers.',
    skills: ['User Interface Design', 'User Experience Design', 'Figma', 'Prototyping', 'Design Thinking', 'Adobe Express', 'Graphic Design', 'Poster Design', 'Miro (Tool)', 'Poster Design Using Canva'],
  },
  {
    id: 'Power BI Workshop',
    title: 'Power BI Workshop',
    issuer: 'Office Master',
    date: 'Oct 2025',
    credentialId: '42',
    image: 'https://tinyurl.com/4cc8bdrb',
    verifyUrl: 'https://certx.in/certificate/36a28147-6eed-47a5-8342-e5f926ebba61735470',
    description: 'Successfully completed an online workshop on Power BI conducted by Office Master. The workshop focused on building interactive dashboards and professional data visualizations. I learned how to import datasets, create dynamic reports, and design dashboards that communicate insights effectively.',
    skills: ['Power BI', 'Importing Datafiles', 'Interactive dashboards', 'Data Visualization', 'Sharing features for professional use'],
  },
  {
    id: 'Freedom with AI',
    title: 'Freedom with AI Masterclass',
    issuer: 'ISO verified - Freedom With AI',
    date: 'Oct 2025',
    /*credentialId: 'GHI789RST',*/
    image: 'https://tinyurl.com/4mcufc9z',
    /*verifyUrl: '#',*/
    description: 'Successfully completed the Freedom with AI Masterclass, an online program designed to explore the practical applications of artificial intelligence tools in creative and professional workflows. The masterclass focused on how AI can be leveraged to improve productivity, enhance design processes, and unlock new opportunities for innovation.',
    skills: ['Generative AI Tools', 'Basic Prompting', 'Explored AI-driven design', 'AI-powered workflows', 'Content creation', 'Automation techniques'],
  },
  {
    id: 'Resume Creation Secrets',
    title: 'Resume Creation Secrets from Draft to Dream Job - Skill Camp',
    issuer: 'ISO verified - NoviTech R&D Pvt Ltd',
    date: 'Nov 2025',
    credentialId: 'NT_MSB22',
    image: 'https://tinyurl.com/5e86nrd5',
    /*verifyUrl: '#',*/
    description: 'Successfully completed the Resume Creation Secrets from Draft to Dream Job course offered by Skill Camp. This certification focused on building professional resumes that stand out to recruiters and employers. The course provided practical strategies for structuring resumes, highlighting achievements, and tailoring applications to specific job roles.',
    skills: ['Resume Writing', 'Choosing Great Template', 'ATS - Approved Creation', 'Techniques for formatting, layout, and keyword optimization', 'Align resumes with industry standards'],
  },
  {
    id: 'Graphic design',
    title: 'Graphic design: pop your Linkedin with 3D effect using Canva',
    issuer: 'Coursera',
    date: 'Oct 2025',
    credentialId: 'BATOAK9SXOYZ',
    image: 'https://tinyurl.com/4d9ejvnb',
    verifyUrl: 'https://www.coursera.org/account/accomplishments/records/BATOAK9SXOYZ',
    description: 'Successfully completed the Graphic Design: Pop Your LinkedIn with 3D Effect using Canva certification course. This program focused on enhancing LinkedIn profiles through creative 3D-style cover designs, showcasing how to use Canva’s advanced features to build eye-catching professional graphics.',
    skills: ['Canva Design','Poster Design', 'Linkdin Bg Cover creation', 'Visual effects', 'Professional design aesthetics', 'Visually appealing graphics'],
  },
  {
    id: 'Web Technologies Webinar',
    title: 'Readliness through Web Technologies Webinar',
    issuer: 'Study Comrade Private Limited',
    date: 'Oct 2025',
    credentialId: 'SCW11603',
    image: 'https://tinyurl.com/2cn5ydkn',
    /*verifyUrl: '#',*/
    description: 'Successfully completed the Readiness through Web Technologies Webinar, which focused on preparing learners with essential knowledge of modern web technologies and their applications. The program emphasized how web tools and frameworks can be leveraged to build responsive, efficient, and future-ready digital solutions.',
    skills: ['Fundamentals of web technologies', 'Practical applications of web tool', 'Readiness in adapting', 'Evolving web standards', 'Design and development workflows'],
  },
];

// Helper functions to get items by ID
export const getProjectById = (id: string) => projects.find(p => p.id === id);
export const getExperienceById = (id: string) => experiences.find(e => e.id === id);
export const getCourseById = (id: string) => courses.find(c => c.id === id);
export const getCertificateById = (id: string) => certificates.find(c => c.id === id);

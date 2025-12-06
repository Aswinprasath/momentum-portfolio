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
    title: 'UI/UX Design Intern',
    subtitle: 'Tech Startup (Remote)',
    date: '2024 - Present',
    description: 'Creating user interfaces and improving user experience for web and mobile applications.',
    fullDescription: 'Working as a UI/UX Design Intern at a fast-paced tech startup, where I collaborate with cross-functional teams to create intuitive and visually appealing user interfaces. This role has provided invaluable hands-on experience in the full design lifecycle, from research to implementation.',
    responsibilities: [
      'Design user interfaces for web and mobile applications',
      'Conduct user research and usability testing',
      'Create wireframes, prototypes, and high-fidelity mockups',
      'Collaborate with developers to ensure design implementation',
      'Maintain and update design system components',
    ],
    achievements: [
      'Improved app onboarding completion rate by 35%',
      'Redesigned checkout flow reducing cart abandonment by 20%',
      'Created a comprehensive component library with 50+ reusable elements',
    ],
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems', 'Collaboration'],
  },
  {
    id: 'freelance-designer',
    title: 'Freelance Graphic Designer',
    subtitle: 'Self-Employed',
    date: '2023 - Present',
    description: 'Designing social media graphics, marketing materials, and brand identities for small businesses.',
    fullDescription: 'As a freelance graphic designer, I work with small businesses to create compelling visual content that strengthens their brand presence. This experience has taught me client management, project scoping, and delivering quality work under tight deadlines.',
    responsibilities: [
      'Create social media graphics and marketing materials',
      'Design brand identities and logo systems',
      'Develop visual content strategies for clients',
      'Manage client relationships and expectations',
      'Deliver projects on time and within budget',
    ],
    achievements: [
      'Successfully completed 25+ client projects',
      'Maintained a 5-star rating across all platforms',
      'Built long-term relationships with 10+ recurring clients',
    ],
    skills: ['Canva', 'Figma', 'Brand Design', 'Client Management', 'Time Management'],
  },
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
  },
];

export const courses: Course[] = [
  {
    id: 'uiux-fundamentals',
    title: 'UI/UX Design Fundamentals',
    platform: 'Coursera',
    duration: '40 hours',
    status: 'Completed',
    description: 'Comprehensive course covering design principles, user research, wireframing, prototyping, and usability testing.',
    fullDescription: 'A comprehensive introduction to UI/UX design principles and practices. This course covered the entire design process from user research to final prototyping, providing hands-on experience with industry-standard tools and methodologies.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
    topics: ['Design Principles', 'User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Thinking'],
    certificateUrl: '#',
  },
  {
    id: 'python-everybody',
    title: 'Python for Everybody',
    platform: 'Coursera',
    duration: '60 hours',
    status: 'In Progress',
    description: 'Learning Python programming from basics to advanced concepts including data structures, web scraping, and databases.',
    fullDescription: 'An in-depth Python programming course covering everything from basic syntax to advanced concepts. The course includes practical projects involving data structures, web scraping, database integration, and automation scripts.',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
    topics: ['Python Basics', 'Data Structures', 'Web Scraping', 'Databases', 'APIs', 'Automation'],
  },
  {
    id: 'powerbi-viz',
    title: 'Data Visualization with Power BI',
    platform: 'LinkedIn Learning',
    duration: '25 hours',
    status: 'Completed',
    description: 'Creating interactive dashboards and reports using Microsoft Power BI for business intelligence and analytics.',
    fullDescription: 'A practical course on creating compelling data visualizations using Microsoft Power BI. Learned to build interactive dashboards, create custom reports, and leverage DAX for advanced calculations to derive actionable business insights.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    topics: ['Power BI Desktop', 'Data Modeling', 'DAX', 'Interactive Dashboards', 'Custom Visuals', 'Report Publishing'],
    certificateUrl: '#',
  },
  {
    id: 'git-github',
    title: 'Git & GitHub Masterclass',
    platform: 'Udemy',
    duration: '15 hours',
    status: 'Completed',
    description: 'Version control fundamentals, branching strategies, collaboration workflows, and GitHub features.',
    fullDescription: 'A comprehensive masterclass on Git version control and GitHub collaboration. Covered branching strategies, merge conflict resolution, pull requests, GitHub Actions, and team collaboration best practices.',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop',
    topics: ['Git Basics', 'Branching', 'Merging', 'Pull Requests', 'GitHub Actions', 'Collaboration'],
    certificateUrl: '#',
  },
  {
    id: 'figma-essentials',
    title: 'Figma UI/UX Design Essentials',
    platform: 'Udemy',
    duration: '30 hours',
    status: 'Completed',
    description: 'Mastering Figma for creating stunning user interfaces, design systems, and interactive prototypes.',
    fullDescription: 'An essential course for mastering Figma, the industry-leading design tool. Covered everything from basic interface design to advanced prototyping, component libraries, and design system creation.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=250&fit=crop',
    topics: ['Figma Interface', 'Components', 'Auto Layout', 'Prototyping', 'Design Systems', 'Collaboration'],
    certificateUrl: '#',
  },
  {
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
  },
];

export const certificates: Certificate[] = [
  {
    id: 'google-ux',
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google via Coursera',
    date: 'December 2024',
    credentialId: 'ABC123XYZ',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=400&h=250&fit=crop',
    verifyUrl: '#',
    description: 'A comprehensive professional certificate program covering the full UX design process, from research and ideation to prototyping and testing. This certification validates expertise in user-centered design principles and industry-standard tools.',
    skills: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Thinking', 'Figma'],
  },
  {
    id: 'python-data-science',
    title: 'Python for Data Science',
    issuer: 'IBM via Coursera',
    date: 'October 2024',
    credentialId: 'DEF456UVW',
    image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
    verifyUrl: '#',
    description: 'An IBM-certified program focused on Python programming for data science applications. Covered data manipulation, analysis, visualization, and machine learning fundamentals using Python libraries.',
    skills: ['Python', 'Pandas', 'NumPy', 'Data Visualization', 'Machine Learning', 'Jupyter'],
  },
  {
    id: 'powerbi-analyst',
    title: 'Microsoft Power BI Data Analyst',
    issuer: 'Microsoft',
    date: 'September 2024',
    credentialId: 'GHI789RST',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
    verifyUrl: '#',
    description: 'Microsoft official certification for Power BI data analysis. Demonstrates proficiency in connecting to data sources, transforming data, creating reports and dashboards, and deploying enterprise BI solutions.',
    skills: ['Power BI', 'DAX', 'Data Modeling', 'Report Design', 'Dashboard Creation', 'Data Analysis'],
  },
  {
    id: 'figma-ui',
    title: 'Figma UI Design Certificate',
    issuer: 'Figma',
    date: 'August 2024',
    credentialId: 'JKL012MNO',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=400&h=250&fit=crop',
    verifyUrl: '#',
    description: 'Official Figma certification demonstrating advanced proficiency in UI design, component systems, prototyping, and collaborative design workflows.',
    skills: ['Figma', 'UI Design', 'Components', 'Prototyping', 'Design Systems', 'Collaboration'],
  },
  {
    id: 'github-cert',
    title: 'Git & GitHub Certification',
    issuer: 'GitHub',
    date: 'July 2024',
    credentialId: 'PQR345STU',
    image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop',
    verifyUrl: '#',
    description: 'GitHub official certification validating expertise in version control, collaborative development workflows, and GitHub platform features including Actions and security best practices.',
    skills: ['Git', 'GitHub', 'Version Control', 'Collaboration', 'CI/CD', 'Code Review'],
  },
  {
    id: 'web-fundamentals',
    title: 'Web Development Fundamentals',
    issuer: 'freeCodeCamp',
    date: 'June 2024',
    credentialId: 'VWX678YZA',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
    verifyUrl: '#',
    description: 'A comprehensive certification covering HTML, CSS, JavaScript, and responsive web design. Completed through hands-on projects demonstrating practical web development skills.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design', 'Web Accessibility', 'Bootstrap'],
  },
];

// Helper functions to get items by ID
export const getProjectById = (id: string) => projects.find(p => p.id === id);
export const getExperienceById = (id: string) => experiences.find(e => e.id === id);
export const getCourseById = (id: string) => courses.find(c => c.id === id);
export const getCertificateById = (id: string) => certificates.find(c => c.id === id);

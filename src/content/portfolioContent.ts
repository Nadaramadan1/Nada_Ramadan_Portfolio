/**
 * Centralized Portfolio Content Configuration
 * Nada Shams Eldin — AI Engineer
 *
 * All personal details, hero copy, about narrative, experience timeline,
 * projects showcase, navigation items, and call-to-action configurations
 * are stored here for straightforward editing and global synchronization.
 */

import yummyImg from '../assets/projects/yummy-recipe.jpg';
import budgetingImg from '../assets/projects/budgeting-app.jpg';
import studyPlannerImg from '../assets/projects/study-planner.jpg';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface FocusArea {
  label: string;
  tag: string;
}

export interface AboutContent {
  heading: string;
  leadParagraph: string;
}

export interface ExperienceLink {
  label: string;
  url: string;
  type?: 'github' | 'external' | 'credential';
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  startDate: string;
  endDate: string;
  isCurrent?: boolean;
  duration?: string;
  context?: string;
  description?: string;
  responsibilities?: string[];
  topicsTaught?: string[];
  projects?: string[];
  technologies?: string[];
  highlights?: string[];
  links?: ExperienceLink[];
}

export interface ExperienceContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: ExperienceItem[];
}

export interface SkillCategory {
  id: string;
  index: string;
  label: string;
  description?: string;
  skills: string[];
}

export interface SkillsContent {
  eyebrow: string;
  heading: string;
  intro: string;
  categories: SkillCategory[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription?: string;
  technologies: string[];
  image?: string | null;
  additionalImages?: string[];
  features?: string[];
  contribution?: string;
  status?: string;
  githubUrl?: string | null;
  liveUrl?: string | null;
  colabUrl?: string | null;
  caseStudyUrl?: string | null;
}

export interface ProjectsContent {
  eyebrow: string;
  heading: string;
  description: string;
  items: ProjectItem[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  details?: string[];
  technologies?: string[];
}

export interface ServicesContent {
  eyebrow: string;
  heading: string;
  intro: string;
  services: ServiceItem[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer?: string;
  date?: string;
  credentialId?: string;
  description?: string;
  credentialUrl?: string | null;
  certificateImage?: string | null;
  skills?: string[];
  status?: string;
}

export interface CertificationsContent {
  eyebrow: string;
  heading: string;
  intro: string;
  items: CertificationItem[];
}

export interface ResumeContent {
  eyebrow: string;
  heading: string;
  intro: string;
  fileUrl?: string | null;
  fileName?: string;
  lastUpdated?: string;
  highlights?: string[];
}

export interface ContactLink {
  id: string;
  label: string;
  value: string;
  href?: string | null;
  type?: 'email' | 'phone' | 'external' | 'social';
}

export interface ContactContent {
  eyebrow: string;
  heading: string;
  intro: string;
  links: ContactLink[];
}

export interface PortfolioContent {
  personal: {
    name: string;
    title: string;
    statusText: string;
    statusAvailable: boolean;
    location: string;
  };
  navigation: NavItem[];
  hero: {
    namePrefix: string;
    nameHighlight: string;
    role: string;
    description: string;
    primaryCta: {
      label: string;
      href: string;
    };
    secondaryCta: {
      label: string;
      href: string;
      downloadFileName?: string;
    };
    contactLink: {
      label: string;
      href: string;
    };
  };
  about: AboutContent;
  experience: ExperienceContent;
  projects: ProjectsContent;
  skills: SkillsContent;
  services: ServicesContent;
  certifications: CertificationsContent;
  resume: ResumeContent;
  contact: ContactContent;
}

export const portfolioContent: PortfolioContent = {
  personal: {
    name: 'Nada Shams Eldin',
    title: 'AI Engineer',
    statusText: 'Available for technical roles & AI projects',
    statusAvailable: true,
    location: 'Remote / Hybrid',
  },
  navigation: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'certifications', label: 'Certifications', href: '#certifications' },
    { id: 'resume', label: 'Resume', href: '#resume' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
  hero: {
    namePrefix: 'Nada',
    nameHighlight: 'Shams Eldin',
    role: 'AI Engineer',
    description:
      'Building practical machine learning and deep learning solutions, with hands-on experience across AI and web development.',
    primaryCta: {
      label: 'View Projects',
      href: '#projects',
    },
    secondaryCta: {
      label: 'Download Resume',
      href: '#resume',
      downloadFileName: 'Nada_Shams_Eldin_Resume.pdf',
    },
    contactLink: {
      label: 'Get in Touch',
      href: '#contact',
    },
  },
  about: {
    heading: 'I’m Nada Shams Eldin, a Computer Science student at Cairo University and an AI Engineer focused on machine learning and deep learning.',
    leadParagraph:
      'My experience combines hands-on AI project work, machine learning instruction, and web development. I enjoy building practical solutions where models and software come together, and I’m continuously deepening my skills through projects, training, and real-world experience.',
  },
  experience: {
    eyebrow: '02 // Professional Experience',
    heading: 'Engineering Roles & Practical Track Record',
    description:
      'A chronological overview of training programs, instructional roles, and applied technical internships.',
    items: [
      {
        id: 'depi',
        organization: 'DEPI',
        role: 'Machine Learning Track',
        startDate: 'July 21, 2026',
        endDate: 'Present',
        isCurrent: true,
        duration: '6-Month Program',
        context: 'Intensive specialized program focusing on advanced machine learning engineering.',
        description:
          'Enrolled in an intensive 6-month specialized Machine Learning track, focusing on algorithmic foundations, data engineering workflows, and predictive model deployment.',
        responsibilities: [
          'Mastering advanced machine learning and deep learning methodologies.',
          'Building pipeline implementations for data ingestion, cleaning, and model evaluation.',
          'Collaborating with peers on technical milestone reviews and engineering deliverables.',
        ],
        technologies: ['Machine Learning', 'Deep Learning', 'Python', 'Model Evaluation'],
        highlights: [
          'Active participant in technical tracks and engineering labs.',
          'Ongoing 6-month specialized program.',
        ],
      },
      {
        id: 'star-union',
        organization: 'Star Union',
        role: 'AI Instructor',
        startDate: 'November 2025',
        endDate: 'September 2026',
        duration: 'Season Completed',
        context: 'Instructional leadership teaching core machine learning curricula.',
        description:
          'Served as an AI Instructor, teaching fundamental and intermediate Machine Learning curriculum modules. Guided students through algorithmic theory, code implementations, and practical hands-on labs.',
        responsibilities: [
          'Delivered structured lectures and hands-on laboratory sessions on machine learning fundamentals.',
          'Guided students through model development, regression, classification, and validation exercises.',
          'Provided technical mentorship, code reviews, and debugging assistance for student projects.',
        ],
        topicsTaught: [
          'Machine Learning Fundamentals',
          'Supervised & Unsupervised Learning',
          'Data Analysis & Model Validation',
        ],
        technologies: ['Machine Learning', 'Data Science', 'Python', 'Pedagogy'],
        highlights: [
          'Successfully concluded curriculum delivery for the 2025–2026 instructional season.',
        ],
      },
      {
        id: 'elevvo-pathways',
        organization: 'Elevvo Pathways',
        role: 'Machine Learning Intern',
        startDate: 'Completed Season',
        endDate: '1-Month Internship',
        duration: '1 Month',
        context: 'Hands-on practical development across machine learning and deep learning projects.',
        description:
          'Completed an intensive 1-month practical internship developing machine learning and deep learning project implementations. Focused on data experimentation, architecture exploration, and project documentation.',
        responsibilities: [
          'Executed machine learning and deep learning project deliverables under technical direction.',
          'Conducted exploratory data analysis, feature preprocessing, and baseline comparisons.',
          'Maintained version-controlled repositories and technical project summaries.',
        ],
        projects: [
          'Applied Machine Learning & Deep Learning Project Implementations',
        ],
        technologies: ['Machine Learning', 'Deep Learning', 'Python', 'Git'],
        highlights: [
          'Completed intensive project deliverables within the 1-month program timeline.',
        ],
        links: [
          {
            label: 'GitHub Repository',
            url: 'https://github.com/NadaShamsEldin',
            type: 'github',
          },
        ],
      },
    ],
  },
  projects: {
    eyebrow: '03 // Selected Projects',
    heading: 'Engineered Systems & Applied Case Studies',
    description:
      'Curated showcase of web development platforms, machine learning implementations, and applied AI systems.',
    items: [
      {
        id: 'yummy-recipe-website',
        title: 'Yummy Recipe Website',
        category: 'Web Development',
        shortDescription:
          'Web development recipe application featuring dynamic Ajax interactions, secure user authentication, and relational data management built with Django and SQLite.',
        fullDescription:
          'Full-stack recipe website architecture implementing relational database models, dynamic asynchronous front-end updates, and user session management.',
        technologies: [
          'Django',
          'SQLite',
          'Ajax',
          'Authentication',
          'HTML',
          'CSS',
          'JavaScript',
        ],
        image: yummyImg,
        additionalImages: [],
        features: [
          'User authentication and personalized session management',
          'Asynchronous search and filtering powered by Ajax',
          'Relational database architecture configured with SQLite and Django ORM',
        ],
        contribution:
          'End-to-end full-stack development, Django backend models, database schema, and interactive client-side scripting.',
        status: 'Completed',
        githubUrl: 'https://github.com/NadaShamsEldin',
        liveUrl: null,
        colabUrl: null,
        caseStudyUrl: null,
      },
      {
        id: 'personal-budgeting-app',
        title: 'Personal Budgeting App',
        category: 'Web Application',
        shortDescription:
          'Web application designed for personal financial management, budgeting workflows, and categorized expense tracking.',
        fullDescription:
          'Intuitive financial application built to organize user budgets, calculate spending summaries, and present structured financial records.',
        technologies: ['Web Application', 'Frontend Architecture'],
        image: budgetingImg,
        additionalImages: [],
        features: [
          'Structured expense input and budget allocation',
          'Category-based financial record grouping',
          'Clean, responsive user interface designed for daily financial monitoring',
        ],
        contribution:
          'Architecture and implementation of the budgeting interface and application logic.',
        status: 'Completed',
        githubUrl: 'https://github.com/NadaShamsEldin',
        liveUrl: null,
        colabUrl: null,
        caseStudyUrl: null,
      },
      {
        id: 'adaptive-ai-study-planner',
        title: 'Adaptive AI Study Planner',
        category: 'AI Web Application',
        shortDescription:
          'AI-oriented web application leveraging FastAPI to provide adaptive study planning workflows and structured schedule management.',
        fullDescription:
          'Applied intelligent scheduling system that integrates a high-performance FastAPI service layer with dynamic study plan generation logic.',
        technologies: ['FastAPI', 'AI Architecture', 'Python', 'Web Integration'],
        image: studyPlannerImg,
        additionalImages: [],
        features: [
          'High-performance asynchronous backend powered by FastAPI',
          'Adaptive study schedule generation architecture',
          'Modular service endpoints for task management and timing',
        ],
        contribution:
          'Backend service design using FastAPI and integration of the study planning workflows.',
        status: 'Active Architecture',
        githubUrl: 'https://github.com/NadaShamsEldin',
        liveUrl: null,
        colabUrl: null,
        caseStudyUrl: null,
      },
    ],
  },
  skills: {
    eyebrow: '04 // Technical Capabilities',
    heading: 'Capability Map',
    intro:
      'A structured view of the programming languages, AI/ML methodologies, web technologies, and engineering tools applied across projects and professional work.',
    categories: [
      {
        id: 'programming',
        index: '01',
        label: 'Programming',
        description: 'Core languages used for algorithm implementation, system logic, and application development.',
        skills: ['Python', 'C++'],
      },
      {
        id: 'ai-ml',
        index: '02',
        label: 'AI & Machine Learning',
        description: 'Disciplines applied to model development, training pipelines, and intelligent system design.',
        skills: ['Machine Learning', 'Deep Learning'],
      },
      {
        id: 'web-development',
        index: '03',
        label: 'Web Development',
        description: 'Technologies used to build front-end interfaces, back-end services, and full-stack web applications.',
        skills: ['HTML', 'CSS', 'JavaScript', 'Django'],
      },
      {
        id: 'computer-science',
        index: '04',
        label: 'Computer Science',
        description: 'Foundational engineering principles underpinning software architecture and design decisions.',
        skills: ['Object-Oriented Programming', 'Data Structures', 'Software Engineering'],
      },
      {
        id: 'tools',
        index: '05',
        label: 'Tools & Platforms',
        description: 'Version control, collaboration, and automation tools used throughout the development lifecycle.',
        skills: ['Git', 'GitHub', 'n8n'],
      },
    ],
  },
  services: {
    eyebrow: '05 // Services',
    heading: 'What I can build',
    intro:
      'Practical development services for web projects and applied AI work. Available for freelance collaboration, short-term contracts, and project-based engagements.',
    services: [
      {
        id: 'web-development',
        number: '01',
        title: 'Web Development',
        shortDescription:
          'Responsive, structured websites and web applications built for clarity and function. From layout to backend integration, delivering complete implementations rather than isolated pieces.',
        details: [
          'Responsive layouts that work across desktop, tablet, and mobile',
          'Server-side application development with Django and SQLite',
          'Dynamic, interactive behavior using JavaScript',
          'Clean HTML and CSS structure built for readability and maintenance',
        ],
        technologies: ['HTML', 'CSS', 'JavaScript', 'Django'],
      },
      {
        id: 'frontend-development',
        number: '02',
        title: 'Frontend Development',
        shortDescription:
          'Structured, responsive frontend interfaces built from designs, references, or briefs. Focused on clean code, consistent layout, and browser compatibility.',
        details: [
          'Pixel-precise implementation from provided designs or wireframes',
          'Mobile-first, responsive HTML and CSS layouts',
          'Interactive elements and smooth user interface behavior',
          'Accessible, semantic markup',
        ],
        technologies: ['HTML', 'CSS', 'JavaScript'],
      },
      {
        id: 'django-development',
        number: '03',
        title: 'Django Development',
        shortDescription:
          'Backend web application development using Django. Building reliable data models, authentication flows, and server-rendered application logic.',
        details: [
          'Django application architecture and model design',
          'User authentication and session management',
          'Admin interface configuration and database management',
          'Integration of frontend views with Django templates and APIs',
        ],
        technologies: ['Django'],
      },
      {
        id: 'ai-ml-solutions',
        number: '04',
        title: 'AI & Machine Learning',
        shortDescription:
          'Machine learning and deep learning project development for experimentation, prototyping, and applied AI implementations.',
        details: [
          'Machine learning model development and evaluation',
          'Deep learning project implementation and experimentation',
          'Data preprocessing and feature engineering pipelines',
          'AI-powered application prototypes and proof-of-concept builds',
        ],
        technologies: ['Python', 'Machine Learning', 'Deep Learning'],
      },
    ],
  },
  certifications: {
    eyebrow: '06 // Certifications',
    heading: 'Credentials & Learning',
    intro:
      'Professional certificates and credentials from completed programs, internships, and technical training.',
    items: [
      {
        id: 'elevvo-internship-certificate',
        title: '[Add certificate title]', // Update with exact certificate title from Elevvo Pathways
        issuer: 'Elevvo Pathways',
        date: '[Add date]', // Update with issue date
        credentialId: undefined,
        description:
          'Certificate of completion awarded upon finishing the machine learning and deep learning internship program at Elevvo Pathways.',
        credentialUrl: null, // Update with verification URL when available
        certificateImage: null, // Place certificate image in src/assets/certifications/elevvo-internship.jpg
        skills: ['Machine Learning', 'Deep Learning', 'Python'],
        status: 'Completed',
      },
      {
        id: 'aws-certificate',
        title: '[Add AWS certificate title]', // Update with exact AWS course/certification name
        issuer: 'Amazon Web Services (AWS)',
        date: '[Add date]', // Update with issue date
        credentialId: undefined, // Update with credential ID
        description: undefined, // Update with description once exact certificate title is known
        credentialUrl: null, // Update with AWS verification URL when available
        certificateImage: null, // Place certificate image in src/assets/certifications/aws-certificate.jpg
        skills: [],
        status: 'Completed',
      },
    ],
  },
  resume: {
    eyebrow: '07 // Resume',
    heading: 'Curriculum Vitae',
    intro:
      'A full summary of professional experience, applied project work, technical skills, and educational background. Available as a downloadable PDF document.',
    fileUrl: null, // Place the PDF at src/assets/resume/Nada-Shams-Eldin-Resume.pdf and update this path
    fileName: 'Nada-Shams-Eldin-Resume.pdf',
    lastUpdated: undefined, // Update with document date once the PDF is ready, e.g. 'September 2026'
    highlights: [
      'AI Engineering background with hands-on machine learning and deep learning project work',
      'Instructional experience as an AI educator covering ML fundamentals and supervised learning',
      'Full-stack web development projects using Django, JavaScript, HTML, and CSS',
      'Applied AI project implementations including adaptive planning and recommendation systems',
    ],
  },
  contact: {
    eyebrow: '08 // Contact',
    heading: 'Start a conversation',
    intro:
      'Available for freelance opportunities, AI engineering roles, and technical collaborations. Reach out via email or connect through the platforms below.',
    links: [
      {
        id: 'email',
        label: 'Email',
        value: '[Add email address]',
        href: null, // e.g. 'mailto:name@example.com'
        type: 'email',
      },
      {
        id: 'phone',
        label: 'Phone',
        value: '[Add phone number]',
        href: null, // e.g. 'tel:+1234567890'
        type: 'phone',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        value: 'linkedin.com/in/[username]',
        href: null,
        type: 'social',
      },
      {
        id: 'github',
        label: 'GitHub',
        value: 'github.com/[username]',
        href: null,
        type: 'social',
      },
      {
        id: 'google',
        label: 'Google',
        value: 'Google Profile',
        href: null,
        type: 'external',
      },
      {
        id: 'mostaql',
        label: 'Mostaql',
        value: 'Freelance Profile',
        href: null,
        type: 'external',
      },
      {
        id: 'khamsat',
        label: 'Khamsat',
        value: 'Freelance Profile',
        href: null,
        type: 'external',
      },
      {
        id: 'nafezly',
        label: 'Nafezly',
        value: 'Freelance Profile',
        href: null,
        type: 'external',
      },
    ],
  },
};

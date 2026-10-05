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
  label: string;
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
  issuer: string;
  credentialUrl: string;
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
  fileUrl?: string | null;
  fileName?: string;
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
    };
  };
  about: AboutContent;
  services: ServicesContent;
  projects: ProjectsContent;
  experience: ExperienceContent;
  skills: SkillsContent;
  certifications: CertificationsContent;
  resume: ResumeContent;
  contact: ContactContent;
}

export const portfolioContent: PortfolioContent = {
  personal: {
    name: 'Nada Shams Eldin',
    title: 'AI Engineer & Web Developer',
    statusText: 'Available for freelance projects',
    statusAvailable: true,
    location: 'Remote',
  },
  navigation: [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'experience', label: 'Experience', href: '#experience' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'certifications', label: 'Certifications', href: '#certifications' },
    { id: 'resume', label: 'Resume', href: '#resume' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ],
  hero: {
    namePrefix: 'Nada',
    nameHighlight: 'Shams Eldin',
    role: 'AI Engineer & Web Developer',
    description: 'Building practical AI solutions and polished web experiences.',
    primaryCta: {
      label: 'View Projects',
      href: '#projects',
    },
    secondaryCta: {
      label: 'Hire Me',
      href: '#contact',
    },
  },
  about: {
    heading: 'About',
    leadParagraph:
      'AI Engineer and Web Developer focused on building practical digital products, from responsive websites and dashboards to machine learning solutions. I combine technical problem-solving with a focus on clean design, usability, and functional results.',
  },
  services: {
    eyebrow: 'Services',
    heading: 'Services',
    intro: 'Client-focused web development and data dashboard solutions.',
    services: [
      {
        id: 'landing-page-development',
        number: '01',
        title: 'Landing Page Development',
        shortDescription:
          'Responsive landing pages for businesses, products, and personal brands.',
      },
      {
        id: 'figma-to-website',
        number: '02',
        title: 'Figma to Website',
        shortDescription:
          'Turning Figma designs into responsive, functional web pages.',
      },
      {
        id: 'portfolio-website-development',
        number: '03',
        title: 'Portfolio Website Development',
        shortDescription:
          'Professional portfolio websites tailored to showcase your work and experience.',
      },
      {
        id: 'power-bi-dashboard-development',
        number: '04',
        title: 'Power BI Dashboard Development',
        shortDescription:
          'Interactive dashboards that organize data into clear, useful insights.',
      },
    ],
  },
  projects: {
    eyebrow: 'Projects',
    heading: 'Projects',
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
  skills: {
    eyebrow: 'Skills',
    heading: 'Skills',
    intro: 'Technical skills and technologies across programming, AI/ML, web development, computer science, and tools.',
    categories: [
      {
        id: 'programming',
        label: 'Programming',
        skills: ['Python', 'C++'],
      },
      {
        id: 'ai-ml',
        label: 'AI & Machine Learning',
        skills: ['Machine Learning', 'Deep Learning'],
      },
      {
        id: 'web-development',
        label: 'Web Development',
        skills: ['HTML', 'CSS', 'JavaScript', 'Django'],
      },
      {
        id: 'computer-science',
        label: 'Computer Science',
        skills: ['Object-Oriented Programming', 'Data Structures', 'Software Engineering'],
      },
      {
        id: 'tools',
        label: 'Tools',
        skills: ['Git', 'GitHub', 'n8n'],
      },
    ],
  },
  certifications: {
    eyebrow: 'Certifications',
    heading: 'Certifications',
    intro: 'Verified professional certifications and credentials.',
    items: [
      {
        id: 'udacity-generative-ai-aws',
        title: 'Introducing Generative AI with AWS',
        issuer: 'Udacity',
        credentialUrl:
          'https://www.udacity.com/certificate/e/a79868bc-4234-11f0-a4d4-b7dce7cd6c44',
      },
      {
        id: 'aws-educate-ml-foundations',
        title: 'AWS Educate Machine Learning Foundations',
        issuer: 'AWS Educate',
        credentialUrl:
          'https://www.credly.com/badges/66ff8bd7-2eab-457e-9d80-c8a33cd0867c/linked_in_profile',
      },
    ],
  },
  resume: {
    eyebrow: 'Resume',
    heading: 'Resume',
    fileUrl: null,
    fileName: 'Nada-Shams-Eldin-Resume.pdf',
  },
  contact: {
    eyebrow: 'Contact',
    heading: "Let's Work Together",
    intro: "Have a project in mind? Let's talk.",
    links: [
      {
        id: 'email',
        label: 'Email',
        value: '[Add email address]',
        href: null,
        type: 'email',
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
        value: 'github.com/NadaShamsEldin',
        href: 'https://github.com/NadaShamsEldin',
        type: 'social',
      },
    ],
  },
};


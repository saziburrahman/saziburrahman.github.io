// ============================================
// PORTFOLIO DATA — MD SAZIBUR RAHMAN
// Software Engineer (Frontend & MERN Stack Specialist)
// ============================================

export interface SocialLink {
  label: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "mail";
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  tech: string[];
  year: string;
  category: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  caseStudy: {
    problem: string;
    solution: string;
    role: string;
    challenges: string;
    results: string;
  };
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export interface Service {
  number: string;
  title: string;
  description: string;
  icon: "code" | "palette" | "box" | "layers";
}

export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  canonicalUrl: string;
}

export interface PersonalInfo {
  name: string;
  initials: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  website: string;
  heroLabel: string;
  heroHeadline: string;
  heroSubtext: string;
  aboutHeadline: string;
  aboutText: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  grade: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  social: SocialLink[];
  stats: Stat[];
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
  services: Service[];
  seo: SEOData;
}

// ---------- Data ----------

const portfolioData: PortfolioData = {
  // =====================
  // PERSONAL INFO
  // =====================
  personal: {
    name: "MD Sazibur Rahman",
    initials: "SR",
    role: "Software Engineer (Frontend)",
    location: "Dhaka, Bangladesh",
    email: "rahmansazib72@gmail.com",
    phone: "+8801750475361",
    website: "https://github.com/rahmansazib",
    heroLabel: "SOFTWARE ENGINEER • FRONTEND & MERN STACK",
    heroHeadline: "Building scalable, performant web applications.",
    heroSubtext:
      "Frontend Software Engineer specializing in React, Next.js, TypeScript, Zustand/Redux, and MERN full-stack development. Experienced in high-traffic applications, SSR performance, and RTL support.",
    aboutHeadline: "Engineering high-impact web applications with precision.",
    aboutText: [
      "I'm an enthusiastic Software Engineer with a strong background in full-stack development using the MERN stack. Currently focused on frontend engineering with hands-on expertise in building scalable applications, performance optimization, and global state management.",
      "Proficient with modern web tools including Next.js, React, TypeScript, Tailwind CSS, Zustand, Redux, Docker, and REST APIs. Passionate about building seamless user interfaces with multi-language/RTL support, SSR speed enhancements, and secure RBAC practices.",
    ],
  },

  // =====================
  // SOCIAL LINKS
  // =====================
  social: [
    { label: "GitHub", url: "https://github.com/rahmansazib", icon: "github" },
    { label: "LinkedIn", url: "https://linkedin.com/in/rahmansazib", icon: "linkedin" },
    { label: "Email", url: "mailto:rahmansazib72@gmail.com", icon: "mail" },
  ],

  // =====================
  // STATS
  // =====================
  stats: [
    { value: 3, suffix: "+", label: "Years Experience" },
    { value: 15, suffix: "+", label: "Projects Delivered" },
    { value: 12, suffix: "+", label: "Core Technologies" },
    { value: 100, suffix: "%", label: "Code Quality & Performance" },
  ],

  // =====================
  // SKILLS
  // =====================
  skills: [
    {
      category: "Frontend Engineering",
      description: "Building responsive, modern user interfaces and client applications.",
      skills: [
        { name: "React.js" },
        { name: "Next.js" },
        { name: "TypeScript" },
        { name: "JavaScript (ES6+)" },
        { name: "Tailwind CSS" },
        { name: "Zustand" },
        { name: "Redux" },
        { name: "HTML5 / CSS3" },
        { name: "Ant Design" },
        { name: "Material UI" },
        { name: "Framer Motion" },
        { name: "Formik" },
      ],
    },
    {
      category: "Backend & Database",
      description: "Server-side API architecture and database management.",
      skills: [
        { name: "Node.js" },
        { name: "Express.js" },
        { name: "RESTful APIs" },
        { name: "JWT Auth" },
        { name: "Joi Validation" },
        { name: "MongoDB" },
        { name: "MySQL" },
      ],
    },
    {
      category: "DevOps & Tools",
      description: "Ecosystem powering deployment, version control, and testing.",
      skills: [
        { name: "Git" },
        { name: "GitHub" },
        { name: "Bitbucket" },
        { name: "Docker" },
        { name: "Swagger" },
        { name: "Postman" },
        { name: "Vercel" },
      ],
    },
    {
      category: "Core Specializations",
      description: "Advanced engineering practices for production apps.",
      skills: [
        { name: "Performance Optimization" },
        { name: "SSR (Server-Side Rendering)" },
        { name: "RTL (Arabic) Support" },
        { name: "RBAC Security" },
        { name: "Payment Gateway Integration" },
        { name: "Lazy Loading" },
      ],
    },
  ],

  // =====================
  // PROJECTS
  // =====================
  projects: [
    {
      id: "siavy-travel",
      number: "01",
      title: "Siavy Travel & Tour Platform",
      subtitle: "Saudi Arabia Tour Guide Platform",
      description: "A modern web-based travel and tour guide platform for Saudi Arabia featuring location-based services and full RTL (Arabic) support.",
      longDescription:
        "Siavy helps travelers in Saudi Arabia explore destinations, book tour guides, and receive location-based real-time travel information. Built with a focus on responsive UI, high performance, and full right-to-left (RTL) Arabic language support.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Ant Design", "Zustand", "REST API"],
      year: "2025",
      category: "Travel & Location Services",
      image: "",
      liveUrl: "#",
      githubUrl: "https://github.com/rahmansazib",
      featured: true,
      caseStudy: {
        problem: "Travelers in Saudi Arabia needed a responsive, location-aware tour booking platform with seamless Arabic RTL language support.",
        solution: "Engineered a high-performance Next.js application integrated with dynamic location services, Ant Design components, and Zustand state management.",
        role: "Software Engineer (Frontend) — UI architecture, Zustand state handling, and full RTL layout implementation.",
        challenges: "Managing state for dynamic tour filters while maintaining 60fps animations and flawless RTL-to-LTR language switching.",
        results: "Successfully launched with 100% Arabic RTL compliance, location-based tour booking features, and responsive performance across mobile and desktop.",
      },
    },
    {
      id: "qcoom-ecommerce",
      number: "02",
      title: "Qcoom E-Commerce Platform",
      subtitle: "High-Traffic E-Commerce System",
      description: "A large-scale Bangladeshi e-commerce platform offering electronics, fashion, and household items with secure payment gateways.",
      longDescription:
        "Qcoom is a major Bangladeshi e-commerce platform serving thousands of daily active users. Key engineering tasks included SSR for search speed, role-based security access, and banking payment integration.",
      tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Payment Gateway"],
      year: "2024 — 2025",
      category: "E-Commerce Platform",
      image: "",
      liveUrl: "#",
      githubUrl: "https://github.com/rahmansazib",
      featured: true,
      caseStudy: {
        problem: "Serving thousands of active users required fast page loads, top SEO rankings, and secure transaction flows.",
        solution: "Implemented Next.js Server-Side Rendering (SSR), lazy loading for images and routes, Role-Based Access Control (RBAC), and bank payment gateway integrations.",
        role: "Software Engineer (Frontend) — SSR page speed optimization, payment gateway setup, and RBAC security.",
        challenges: "Reducing load latency for high-traffic product listings while securing checkout transactions.",
        results: "Improved SEO speed scores substantially and established seamless payment gateway integrations for thousands of customers.",
      },
    },
    {
      id: "farmer-support",
      number: "03",
      title: "Farmer Agricultural Support Platform",
      subtitle: "Agri-Tech & Financial Aid Portal",
      description: "A web platform empowering farmers with agricultural advice, financial loan tracking, and community support features.",
      longDescription:
        "Farmer is a web platform built to connect farmers with agricultural advice, financial loan requests, and support communities through real-time query management.",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Zustand", "REST API"],
      year: "2024",
      category: "Agri-Tech & Community",
      image: "",
      liveUrl: "#",
      githubUrl: "https://github.com/rahmansazib",
      featured: true,
      caseStudy: {
        problem: "Farmers lacked an easy digital system to request agricultural support, financial aid, and query resolution.",
        solution: "Developed an accessible Next.js web application with Zustand state management for processing user queries, loan requests, and support resources.",
        role: "Frontend Developer — API integration, form flow architecture, and lightweight responsive UI.",
        challenges: "Designing an ultra-lightweight, accessible web interface optimized for rural users with variable mobile network connectivity.",
        results: "Delivered an intuitive platform for farmers to track financial loan requests and get real-time agricultural support.",
      },
    },
  ],

  // =====================
  // WORK EXPERIENCE
  // =====================
  experience: [
    {
      period: "10/2025 — Present",
      role: "Software Engineer (Frontend)",
      company: "EWN BD",
      description:
        "Software Development & IT Solutions Company. Developing responsive web applications using React, Next.js, and Tailwind CSS.",
      highlights: [
        "Developed responsive UIs using React and Next.js styled with Tailwind CSS for modern mobile-first design",
        "Managed global state efficiently with Zustand for fast, predictable client state handling",
        "Integrated REST APIs for dynamic tour and travel data handling",
        "Ensured RTL (Arabic) support and optimized application performance for diverse device viewports",
      ],
    },
    {
      period: "06/2024 — 09/2025",
      role: "Software Engineer (Frontend)",
      company: "Qcoom LTD",
      description:
        "A leading e-commerce platform in Bangladesh serving thousands of active shoppers.",
      highlights: [
        "Contributed to a high-traffic e-commerce platform serving thousands of daily active users",
        "Integrated secure payment gateways for seamless banking transactions",
        "Collaborated with backend teams to optimize RESTful API endpoints",
        "Implemented Role-Based Access Control (RBAC) for enhanced security",
        "Improved SEO page speed scores using Server-Side Rendering (SSR) and lazy loading",
      ],
    },
    {
      period: "08/2023 — 02/2024",
      role: "Junior Software Engineer",
      company: "Aurora IT-21",
      description:
        "Software development company focused on full-stack web engineering.",
      highlights: [
        "Designed and developed full-stack MERN applications with a focus on performance",
        "Built RESTful APIs for seamless frontend-backend communication",
        "Optimized database queries, reducing response times by 30%",
        "Implemented authentication with JWT, ensuring secure access control",
      ],
    },
  ],

  // =====================
  // EDUCATION
  // =====================
  education: [
    {
      degree: "Bachelor of Computer Science & Engineering (B.Sc CSE)",
      institution: "IUBAT — International University of Business Agriculture and Technology",
      period: "05/2018 — 08/2022",
      grade: "CGPA: 3.54 / 4.0",
    },
    {
      degree: "Diploma in Computer Technology",
      institution: "Kushtia Polytechnic Institute, Bangladesh",
      period: "01/2014 — 01/2018",
      grade: "CGPA: 2.85 / 4.0",
    },
  ],

  // =====================
  // SERVICES OFFERED
  // =====================
  services: [
    {
      number: "01",
      title: "Frontend Engineering",
      description:
        "Building scalable, high-performance web applications using React.js, Next.js, TypeScript, and Tailwind CSS. Responsive, accessible, and fast.",
      icon: "code",
    },
    {
      number: "02",
      title: "MERN Stack Development",
      description:
        "Full-stack development combining MongoDB, Express.js, React.js, and Node.js with REST API integration and JWT security.",
      icon: "layers",
    },
    {
      number: "03",
      title: "Performance & SEO Optimization",
      description:
        "Speeding up web applications via Server-Side Rendering (SSR), lazy loading, bundle size optimization, and search engine SEO enhancements.",
      icon: "box",
    },
    {
      number: "04",
      title: "RTL & Multi-language Support",
      description:
        "Implementing seamless multi-language interfaces, including complex Right-to-Left (RTL) Arabic layout engineering and internationalization.",
      icon: "palette",
    },
  ],

  // =====================
  // SEO METADATA
  // =====================
  seo: {
    title: "MD Sazibur Rahman — Software Engineer | Frontend & MERN Developer",
    description:
      "Official Portfolio of MD Sazibur Rahman, Software Engineer (Frontend) specializing in React, Next.js, TypeScript, MERN Stack, and web performance optimization in Dhaka, Bangladesh.",
    keywords:
      "MD Sazibur Rahman, Sazibur Rahman, Software Engineer, Frontend Engineer, React Developer, Next.js Developer, MERN Stack Developer, Web Developer Dhaka, Bangladesh Developer, Tailwind CSS, TypeScript Engineer",
    ogImage: "/favicon.svg",
    canonicalUrl: "https://github.com/rahmansazib",
  },
};

export default portfolioData;

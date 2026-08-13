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
    { value: 8, suffix: "+", label: "Projects Delivered" },
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
      id: "siavy-customer",
      number: "01",
      title: "Siavy Customer Platform",
      subtitle: "Saudi Arabia Travel Booking App",
      description: "A modern web-based travel and tour booking platform for customers in Saudi Arabia featuring Google Maps integration, location-based services, and full RTL (Arabic) support.",
      longDescription:
        "Siavy Customer helps travelers in Saudi Arabia explore destinations, book tour guides, and receive location-based real-time travel information. Built with Next.js 15, React 19, and Google Maps API for a seamless location-aware experience with full right-to-left (RTL) Arabic language support via Next Intl.",
      tech: ["Tailwind CSS", "Next.js 15", "React 19", "React Query", "Zustand", "Next Intl", "Framer Motion", "Google Maps API", "Axios", "TypeScript"],
      year: "2025",
      category: "Travel & Location Services",
      image: "/projects/siavy-customer.png",
      liveUrl: "#",
      githubUrl: "https://github.com/rahmansazib",
      featured: true,
      caseStudy: {
        problem: "Travelers in Saudi Arabia needed a responsive, location-aware tour booking platform with seamless Arabic RTL language support and interactive maps.",
        solution: "Engineered a high-performance Next.js 15 application with React 19, Google Maps API for location services, Zustand for state management, and Next Intl for full internationalization.",
        role: "Software Engineer (Frontend) — UI architecture, Zustand state handling, Google Maps integration, and full RTL layout implementation.",
        challenges: "Managing state for dynamic tour filters while maintaining 60fps Framer Motion animations and flawless RTL-to-LTR language switching via Next Intl.",
        results: "Successfully launched with 100% Arabic RTL compliance, interactive Google Maps tour booking, and responsive performance across mobile and desktop.",
      },
    },
    {
      id: "siavy-tourguide",
      number: "02",
      title: "Siavy Tour Guide Portal",
      subtitle: "Tour Guide Management Dashboard",
      description: "A dedicated portal for tour guides in Saudi Arabia to manage bookings, track schedules, create rich content with Tiptap Editor, and communicate with travelers.",
      longDescription:
        "The Siavy Tour Guide Portal empowers local tour guides to manage their availability, accept or decline booking requests, track earnings, and create rich content using Tiptap Editor. Built with React 19 and Vite for blazing-fast performance, with i18next for full multi-language support.",
      tech: ["Tailwind CSS", "React 19", "Vite", "React Query", "Zustand", "Tiptap Editor", "Formik", "Yup", "React Router", "i18next", "Axios", "Day.js"],
      year: "2025",
      category: "Travel & Location Services",
      image: "/projects/siavy-tourguide.png",
      liveUrl: "#",
      githubUrl: "https://github.com/rahmansazib",
      featured: true,
      caseStudy: {
        problem: "Tour guides needed a streamlined dashboard to manage bookings, schedules, and create rich tour descriptions without switching between multiple tools.",
        solution: "Built a Vite-powered React 19 dashboard with Tiptap rich text editor, Formik/Yup form validation, and i18next for multi-language support.",
        role: "Software Engineer (Frontend) — Dashboard architecture, Tiptap Editor integration, form validation with Formik/Yup, and responsive RTL layout.",
        challenges: "Implementing rich text content creation with Tiptap, complex form validation with Formik/Yup, and seamless i18next language switching.",
        results: "Enabled tour guides to manage all bookings and create rich content from a single dashboard, reducing response time to travelers by 60%.",
      },
    },
    {
      id: "qcoom-ecommerce",
      number: "03",
      title: "Qcoom E-Commerce Platform",
      subtitle: "High-Traffic E-Commerce System",
      description: "E-Commerce platform used by millions of users worldwide, mainly in Bangladesh, offering electronics, fashion, and household items with secure payment gateways.",
      longDescription:
        "Qcoom is a major e-commerce platform serving millions of users worldwide, primarily in Bangladesh. Built with Next.js and React Query for optimized data fetching, Ant Design for polished UI components, Redux for complex state management, and JWT for secure authentication.",
      tech: ["Tailwind CSS", "Ant Design", "Next.js", "React Query", "React Slick", "JWT", "TypeScript", "Redux"],
      year: "2024 — 2025",
      category: "E-Commerce Platform",
      image: "/projects/qcoom.png",
      liveUrl: "#",
      githubUrl: "https://github.com/rahmansazib",
      featured: true,
      caseStudy: {
        problem: "Serving millions of active users required fast page loads, top SEO rankings, and secure transaction flows with JWT authentication.",
        solution: "Implemented Next.js SSR with React Query for optimized data fetching, Ant Design UI components, React Slick carousels, and Redux for complex state management.",
        role: "Software Engineer (Frontend) — SSR page speed optimization, React Query integration, and JWT-based security.",
        challenges: "Reducing load latency for high-traffic product listings with React Query caching while securing checkout transactions with JWT.",
        results: "Improved SEO speed scores substantially and established seamless payment gateway integrations for millions of customers.",
      },
    },
    {
      id: "qdmin-qcoom",
      number: "04",
      title: "Qcoom Admin Dashboard",
      subtitle: "E-Commerce Admin Management Panel",
      description: "Admin panel for Qcoom e-commerce that manages all actions including order management, analytics, user management, ACL permissions, and inventory control.",
      longDescription:
        "The Qcoom Admin Dashboard manages all actions for the Qcoom e-commerce platform including real-time order tracking, product inventory, user role management with ACL, sales analytics via Chart.js, and vendor management. Built with React, Ant Design, and Redux.",
      tech: ["Tailwind CSS", "Ant Design", "React.js", "React Query", "ACL", "Chart.js", "JWT", "TypeScript", "Redux"],
      year: "2024 — 2025",
      category: "Admin Dashboard",
      image: "/projects/qdmin-qcoom.png",
      liveUrl: "#",
      githubUrl: "https://github.com/rahmansazib",
      featured: true,
      caseStudy: {
        problem: "Managing millions of products, orders, and users required a powerful admin interface with ACL-based access controls and real-time analytics.",
        solution: "Developed a feature-rich admin dashboard with Ant Design, React Query for data fetching, Chart.js analytics, ACL permissions, and JWT authentication.",
        role: "Software Engineer (Frontend) — Admin panel architecture, ACL permission system, Chart.js analytics, and data table optimization.",
        challenges: "Handling large datasets with complex filtering, ACL-based role permissions, and real-time Chart.js analytics while maintaining responsive performance.",
        results: "Streamlined admin operations, reducing order processing time by 40% and enabling data-driven decisions through real-time Chart.js analytics.",
      },
    },
    {
      id: "qfood-admin",
      number: "05",
      title: "QFood Admin Panel",
      subtitle: "Food Delivery Management System",
      description: "Food delivery system admin panel where manages all orders, activities, analytics and more with ACL-based access control and Chart.js analytics.",
      longDescription:
        "QFood Admin Panel is a food delivery system admin panel that manages all orders, activities, analytics and more. Built with React, Ant Design, and Redux for state management, it features ACL-based access control, Chart.js analytics dashboards, JWT authentication, and React Query for optimized data fetching.",
      tech: ["Tailwind CSS", "Ant Design", "React.js", "React Query", "ACL", "Chart.js", "JWT", "TypeScript", "Redux"],
      year: "2024",
      category: "Admin Dashboard",
      image: "/projects/qfood-admin.png",
      liveUrl: "#",
      githubUrl: "https://github.com/rahmansazib",
      featured: true,
      caseStudy: {
        problem: "Food delivery operations needed a centralized admin system to manage all orders, activities, analytics, and delivery partners efficiently with role-based access.",
        solution: "Built an intuitive admin panel with Ant Design, React Query for data fetching, Chart.js analytics dashboards, ACL permissions, and JWT authentication with Redux state management.",
        role: "Software Engineer (Frontend) — Admin panel development, ACL permission system, Chart.js analytics, and Redux state architecture.",
        challenges: "Implementing real-time order status updates, ACL-based role permissions, and comprehensive Chart.js analytics while maintaining responsive performance.",
        results: "Enabled efficient management of all food delivery operations with real-time analytics and ACL-based access control, reducing operational overhead by 35%.",
      },
    },
    {
      id: "ewn-bd",
      number: "06",
      title: "EWN BD Corporate Website",
      subtitle: "Software Company Portfolio & Services",
      description: "A premium corporate website for EWN BD, a software development and IT solutions company, showcasing services, team, and project portfolio with multi-language support.",
      longDescription:
        "EWN BD is a corporate website built with Next.js 16 and React 19 for a software development company. Features an elegant design, service showcases, team profiles, client testimonials, and a project portfolio with Next Intl internationalization. Optimized with ESLint for code quality.",
      tech: ["Tailwind CSS", "Next.js 16", "React 19", "Next Intl", "ESLint"],
      year: "2025",
      category: "Corporate & Portfolio",
      image: "/projects/ewn-bd.png",
      liveUrl: "#",
      githubUrl: "https://github.com/rahmansazib",
      featured: false,
      caseStudy: {
        problem: "The company needed a professional, multi-language online presence to showcase their services, team expertise, and project portfolio to global clients.",
        solution: "Built a premium Next.js 16 corporate website with React 19, Next Intl for internationalization, and strict ESLint code quality standards.",
        role: "Software Engineer (Frontend) — Full website development, Next Intl multi-language setup, and ESLint configuration.",
        challenges: "Creating a visually stunning yet performance-optimized website with multi-language support via Next Intl and maintaining code quality with ESLint.",
        results: "Delivered a high-converting corporate website with 95+ Lighthouse scores, multi-language support, and a 40% increase in client inquiry rate.",
      },
    },
    {
      id: "my-limo-support-chat",
      number: "07",
      title: "LIMO Customer Support Chat",
      subtitle: "Real-Time Customer Support System",
      description: "A real-time support chat application for a limo ride-sharing platform with E2E testing via Playwright, enabling instant communication between customers and support agents.",
      longDescription:
        "LIMO Customer Support Chat is a real-time messaging application built for a ride-sharing platform using React 18 and Vite. Features instant message delivery, message history, file attachments, form validation with Formik/Yup, and comprehensive E2E testing with Playwright.",
      tech: ["Tailwind CSS", "React 18", "Vite", "React Query", "Formik", "Yup", "React Router", "Axios", "Playwright", "React Cookie", "Day.js"],
      year: "2025",
      category: "Communication & Support",
      image: "/projects/my-limo-support-chat.png",
      liveUrl: "#",
      githubUrl: "https://github.com/rahmansazib",
      featured: false,
      caseStudy: {
        problem: "Ride-sharing customers needed instant, reliable support for booking issues, complaints, and real-time trip assistance with guaranteed quality.",
        solution: "Built a Vite-powered React 18 chat application with React Query data fetching, Formik/Yup validation, React Cookie session management, and Playwright E2E testing.",
        role: "Software Engineer (Frontend) — Chat UI architecture, Formik/Yup form validation, Playwright E2E test coverage, and React Cookie session handling.",
        challenges: "Ensuring message delivery reliability, implementing comprehensive Playwright E2E tests, and managing session state with React Cookie across concurrent chats.",
        results: "Reduced average customer support response time by 70% with real-time chat capabilities and 95%+ E2E test coverage via Playwright.",
      },
    },
    {
      id: "nosyndicate",
      number: "08",
      title: "NoSyndicate Platform",
      subtitle: "Online Product Bidding System",
      description: "An online product bidding system where customers can buy products by bidding, featuring real-time bid updates, secure JWT authentication, and React Hook Form validation.",
      longDescription:
        "NoSyndicate is an online product bidding system where customers can buy products by placing bids. Built with Next.js and TypeScript, it features real-time bid tracking, secure JWT authentication, React Hook Form for seamless bid submission, and React Query for optimized data fetching.",
      tech: ["Tailwind CSS", "Next.js", "React Query", "React Hook Form", "JWT", "TypeScript"],
      year: "2024",
      category: "E-Commerce Platform",
      image: "/projects/nosyndicate.png",
      liveUrl: "#",
      githubUrl: "https://github.com/rahmansazib",
      featured: false,
      caseStudy: {
        problem: "Buyers needed a transparent, real-time bidding platform to purchase products competitively with secure authentication and seamless bid submission.",
        solution: "Developed a Next.js bidding platform with React Query for real-time bid updates, React Hook Form for bid submission, and JWT for secure user authentication.",
        role: "Software Engineer (Frontend) — Bidding UI architecture, React Hook Form integration, JWT auth flow, and real-time bid state management.",
        challenges: "Implementing real-time bid updates with React Query, preventing bid conflicts, and ensuring secure JWT-based authentication for all transactions.",
        results: "Launched a fully functional bidding platform with real-time bid tracking, secure JWT auth, and a smooth bidding experience via React Hook Form.",
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

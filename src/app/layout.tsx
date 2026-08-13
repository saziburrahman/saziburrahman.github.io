import type { Metadata, Viewport } from "next";
import "@/styles/index.css";
import portfolioData from "@/data/portfolio";

export const viewport: Viewport = {
  themeColor: "#0b0f19",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const SITE_URL = "https://saziburrahman.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${portfolioData.personal.name} — Frontend & MERN Stack Software Engineer`,
    template: `%s | ${portfolioData.personal.name}`,
  },
  description:
    "Hire MD Sazibur Rahman — Senior Frontend & MERN Stack Software Engineer with 3+ years of experience building scalable, high-performance web applications using React, Next.js, TypeScript, Zustand, Node.js, and Tailwind CSS.",
  keywords: [
    "MD Sazibur Rahman",
    "Hire Frontend Engineer",
    "Hire React Developer",
    "Hire Next.js Developer",
    "MERN Stack Developer",
    "TypeScript Software Engineer",
    "Frontend Engineering Consultant",
    "React.js Specialist",
    "Next.js 15 App Router Expert",
    "Tailwind CSS Expert",
    "Dhaka Bangladesh Software Engineer",
    "Full Stack Web Developer",
    "Remote Frontend Developer",
  ],
  authors: [{ name: portfolioData.personal.name, url: SITE_URL }],
  creator: portfolioData.personal.name,
  publisher: portfolioData.personal.name,
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${portfolioData.personal.name} — Senior Frontend & MERN Specialist`,
    description:
      "Specializing in React 19, Next.js 15, TypeScript, Zustand/Redux, and MERN full-stack engineering. View projects, experience, and contact for hiring.",
    url: SITE_URL,
    siteName: `${portfolioData.personal.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/projects/EWN.png",
        width: 1200,
        height: 630,
        alt: `${portfolioData.personal.name} — Senior Frontend Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} — Frontend Software Engineer`,
    description:
      "Specializing in React, Next.js, TypeScript, and MERN full-stack development. Available for high-impact engineering roles and client projects.",
    creator: "@sazibur",
    images: ["/projects/EWN.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: SITE_URL,
  },
};

// Rich Schema.org JSON-LD for Google Search & Knowledge Graph Ranking
const jsonLdPerson = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: portfolioData.personal.name,
  givenName: "MD Sazibur",
  familyName: "Rahman",
  jobTitle: "Senior Frontend & MERN Stack Software Engineer",
  description:
    "Frontend Software Engineer specializing in React.js, Next.js, TypeScript, Zustand/Redux, Node.js, and MERN full-stack web application development.",
  url: SITE_URL,
  image: `${SITE_URL}/projects/EWN.png`,
  email: `mailto:${portfolioData.personal.email}`,
  sameAs: portfolioData.social.map((s) => s.url),
  address: {
    "@type": "PostalAddress",
    addressLocality: "Uttara",
    addressRegion: "Dhaka",
    addressCountry: "Bangladesh",
  },
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript (ES6+)",
    "Tailwind CSS",
    "Zustand",
    "Redux Toolkit",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MERN Stack",
    "Server-Side Rendering (SSR)",
    "Search Engine Optimization (SEO)",
    "Web Performance Optimization",
    "Right-to-Left (RTL) Layouts",
  ],
  worksFor: {
    "@type": "Organization",
    name: portfolioData.experience[0]?.company || "Software Engineering",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Armed Police Battalion High School and College",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Uttara, Dhaka",
      addressCountry: "Bangladesh",
    },
  },
};

const jsonLdWebSite = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: `${portfolioData.personal.name} Portfolio`,
  description:
    "Official portfolio website of MD Sazibur Rahman — Frontend Software Engineer specializing in React, Next.js, TypeScript, and MERN stack.",
  publisher: {
    "@id": `${SITE_URL}/#person`,
  },
  inLanguage: "en-US",
};

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE_URL}/#service`,
  name: `${portfolioData.personal.name} — Web Development & Engineering Services`,
  url: SITE_URL,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "Bangladesh",
  },
  provider: {
    "@id": `${SITE_URL}/#person`,
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Engineering Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Frontend Software Engineering",
          description: "Building responsive, fast, and accessible web applications using React.js, Next.js, and TypeScript.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MERN Stack Application Development",
          description: "Full-stack web application development with MongoDB, Express.js, React.js, and Node.js.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Performance & SEO Optimization",
          description: "Optimizing Web Vitals, SSR/SSG rendering, Lighthouse scores, and search engine visibility.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        {/* Google Schema.org JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdPerson) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }}
        />
      </head>
      <body className="antialiased bg-[#0b0f19] text-[#f8fafc] font-sans selection:bg-indigo-600 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

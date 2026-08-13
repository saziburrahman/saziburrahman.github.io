import type { Metadata } from "next";
import "@/styles/index.css";
import portfolioData from "@/data/portfolio";

export const metadata: Metadata = {
  metadataBase: new URL("https://sazibur-rahman.dev"),
  title: {
    default: `${portfolioData.personal.name} — ${portfolioData.personal.role}`,
    template: `%s | ${portfolioData.personal.name}`,
  },
  description:
    "Frontend & MERN Stack Software Engineer with 3+ years of experience building scalable, high-performance web applications using React, Next.js, TypeScript, and Zustand.",
  keywords: [
    "MD Sazibur Rahman",
    "Frontend Software Engineer",
    "MERN Stack Developer",
    "React Engineer",
    "Next.js Developer",
    "TypeScript Engineer",
    "Portfolio",
    "Dhaka Bangladesh Developer",
    "Web Application Developer",
  ],
  authors: [{ name: portfolioData.personal.name }],
  creator: portfolioData.personal.name,
  publisher: portfolioData.personal.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: `${portfolioData.personal.name} — Software Engineer | Frontend & MERN Specialist`,
    description:
      "Frontend Software Engineer specializing in React, Next.js, TypeScript, Zustand/Redux, and MERN full-stack development.",
    url: "https://sazibur-rahman.dev",
    siteName: `${portfolioData.personal.name} Portfolio`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/projects/EWN.png",
        width: 1200,
        height: 630,
        alt: `${portfolioData.personal.name} — Software Engineer Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${portfolioData.personal.name} — Software Engineer`,
    description:
      "Frontend Software Engineer specializing in React, Next.js, TypeScript, Zustand/Redux, and MERN full-stack development.",
    creator: "@sazibur",
    images: ["/projects/EWN.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
  alternates: {
    canonical: "https://sazibur-rahman.dev",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: portfolioData.personal.name,
  jobTitle: portfolioData.personal.role,
  description:
    "Frontend & MERN Stack Software Engineer specializing in React, Next.js, TypeScript, Zustand, and full-stack web applications.",
  url: "https://sazibur-rahman.dev",
  sameAs: portfolioData.social.map((s) => s.url),
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Zustand",
    "Redux",
    "Node.js",
    "Express.js",
    "MongoDB",
    "MERN Stack",
    "Frontend Engineering",
  ],
  worksFor: {
    "@type": "Organization",
    name: portfolioData.experience[0]?.company || "Software Engineering",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Armed Police Battalion High School and College",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#0b0f19] text-[#f8fafc] font-sans selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}

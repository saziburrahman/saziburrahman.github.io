<div align="center">

# 🚀 MD Sazibur Rahman — Software Engineer Portfolio

**Frontend & MERN Stack Software Engineer Portfolio Website**

[![Next.js](https://img.shields.io/badge/Next.js-16.3.0-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-R185-black?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Oxlint](https://img.shields.io/badge/Linter-Oxlint-FF6B6B?style=for-the-badge)](https://oxc.rs/)
[![SEO Optimized](https://img.shields.io/badge/SEO-100%25_Optimized-success?style=for-the-badge&logo=google&logoColor=white)](#-technical-seo--search-engine-optimization-guide)

[🌐 Live Demo](https://saziburrahman.github.io) • [💼 LinkedIn](https://www.linkedin.com/in/saziburrahman/) • [🐙 GitHub](https://github.com/saziburrahman) • [✉️ Contact Email](mailto:rahmansazib72@gmail.com)

---

</div>

## 📖 Overview

This is a modern, high-performance **3D Software Engineer Portfolio** built for **MD Sazibur Rahman**, a Frontend & MERN Stack Software Engineer based in Dhaka, Bangladesh.

Engineered with **Next.js 16 (App Router)**, **React 19**, **Three.js / React Three Fiber (R3F)**, **Framer Motion**, and **Tailwind CSS v4**, this portfolio delivers a sleek, futuristic 3D aesthetic coupled with zero-compromise page performance and **Enterprise-Grade Technical SEO**.

---

## Key Features & Technical Highlights

- 🎨 **Interactive 3D WebGL Hero Canvas**: Custom animated particle mesh and floating torus geometry built with `@react-three/fiber` and `@react-three/drei` with interactive mouse-tracking parallax.
- ⚡ **Next.js 16 & React 19 Engine**: Fully static export (`output: 'export'`) for sub-second page loads, zero runtime server latency, and deployment compatibility with GitHub Pages, Vercel, or Netlify.
- 🎯 **Interactive Engineering Case Studies**: Detailed modal breakdowns covering project problems, architectural solutions, engineering roles, technical challenges, and measurable results.
- 🛠️ **Comprehensive Skills & Services Showcase**: Structured display of Frontend, MERN Stack, Form Editors, DevOps, Testing (Playwright), and Core Specializations (RTL Arabic Support, SSR Optimization, RBAC Security).
- 📱 **Mobile-First & App-Like UX**: Modern dark glassmorphism design system featuring an app-like floating bottom navigation bar for mobile viewports, touch-optimized interactions, and smooth scroll navigation.
- ♿ **Accessibility (a11y) & Usability**: Full keyboard navigation support, screen-reader ARIA labels, semantic HTML5 elements, and an accessible "Skip to Main Content" link.

---

## 🔍 Technical SEO & Search Engine Optimization Guide

This project is built from the ground up to achieve top rankings on Google, Bing, and AI search engines (Perplexity, SearchGPT, Gemini).

### 🛡️ 1. Google Schema.org JSON-LD Structured Data

Implemented directly in `src/app/layout.tsx` to earn rich search snippets, Google Knowledge Graph cards, and professional service listings:

- **`Person` Schema**: Defines author details, location (Dhaka, Bangladesh), job title, skills (`knowsAbout`), education, and verified social media links (`sameAs`).
- **`WebSite` Schema**: Establishes site publisher context and domain ownership.
- **`ProfessionalService` Schema**: Highlights offered services (Frontend Engineering, MERN Development, Performance & SEO Optimization).
- **`ProfilePage` Schema**: Signals to Google Search that this is the canonical developer portfolio profile.
- **`ItemList` & `SoftwareApplication` Schema**: Exposes engineering project case studies as structured entities.

### 🌐 2. Dynamic Sitemap & Metadata Routes

- **Automated XML Sitemap**: Generated via `src/app/sitemap.ts` at `https://saziburrahman.github.io/sitemap.xml` with priority scores and modification frequencies for every section.
- **Robots.txt Rules**: Configured via `src/app/robots.ts` at `https://saziburrahman.github.io/robots.txt` allowing indexing for all major search engines (Googlebot, Bingbot).

### 📱 3. Open Graph (OG) & Twitter Card Metadata

- Complete Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`) for rich visual previews when sharing links on LinkedIn, Twitter, Slack, and WhatsApp.
- Summary large image Twitter card metadata (`twitter:card`, `twitter:creator`).

### 🏷️ 4. SEO Checklist for Deployment & Custom Domain Setup

When deploying this portfolio to your custom domain or GitHub Pages, complete the following steps to maximize search ranking:

1. **Update Site Domain**:
   - Change `SITE_URL` in `src/app/layout.tsx`, `src/app/robots.ts`, `src/app/sitemap.ts`, and `src/data/portfolio.ts` to your custom domain (e.g. `https://yourname.com`).
2. **Submit Sitemap to Search Engines**:
   - Log into **[Google Search Console](https://search.google.com/search-console)**, add your domain property, and submit your sitemap URL (`https://yourdomain.com/sitemap.xml`).
   - Log into **[Bing Webmaster Tools](https://www.bing.com/webmasters)** and import your Google Search Console settings or submit `sitemap.xml`.
3. **Verify Social Profiles**:
   - Ensure all social URLs in `src/data/portfolio.ts` point to your active GitHub, LinkedIn, and Twitter profiles so Google links your Knowledge Graph card to your identity.
4. **Audit Web Vitals with Lighthouse**:
   - Run a Google Chrome Lighthouse audit in Incognito mode to confirm 100/100 scores in **Performance**, **Accessibility**, **Best Practices**, and **SEO**.

---

## 🛠️ Tech Stack & Dependencies

| Category       | Technology         | Description                                             |
| :------------- | :----------------- | :------------------------------------------------------ |
| **Framework**  | Next.js 16.3.0     | App Router, Turbopack, Static HTML Export               |
| **UI Library** | React 19.0         | Concurrent rendering & modern hooks                     |
| **3D Engine**  | Three.js & R3F     | `@react-three/fiber` & `@react-three/drei` WebGL canvas |
| **Styling**    | Tailwind CSS v4.3  | Utility-first styling with custom CSS design tokens     |
| **Animations** | Framer Motion 13.1 | Micro-interactions, modal transitions & scroll triggers |
| **Icons**      | Lucide React       | Clean, scalable vector icons                            |
| **Language**   | TypeScript 6.0     | Strict type safety across portfolio data and components |
| **Linter**     | Oxlint 1.75        | Ultra-fast Rust-based JavaScript/TypeScript linter      |

---

## 📂 Project Architecture

```
portfolio/
├── public/                  # Static assets (favicons, PDFs, project screenshots, manifest)
│   ├── projects/            # Project showcase images
│   ├── favicon.svg          # Portfolio SVG icon
│   ├── manifest.json        # PWA Web Application Manifest
│   └── SaziburRahman.pdf    # Downloadable Resume PDF
├── src/
│   ├── app/                 # Next.js 16 App Router
│   │   ├── layout.tsx       # Root layout with metadata, fonts & JSON-LD schemas
│   │   ├── page.tsx         # Main portfolio page entry point
│   │   ├── robots.ts        # Dynamic robots.txt metadata route
│   │   └── sitemap.ts       # Dynamic sitemap.xml metadata route
│   ├── components/          # Modular UI Components
│   │   ├── 3d/              # React Three Fiber WebGL canvas & particle background
│   │   ├── about/           # About Me section & stats counter
│   │   ├── contact/         # Interactive contact section & copy-to-clipboard buttons
│   │   ├── education/       # Education timeline & degree cards
│   │   ├── experience/      # Work experience timeline & highlights
│   │   ├── hero/            # Hero section with headline, CTA buttons & R3F canvas
│   │   ├── layout/          # Top navigation, mobile bottom bar & footer
│   │   ├── projects/        # Project grid & detailed case study modal
│   │   ├── services/        # Services offered matrix
│   │   └── skills/          # Categorized technical skills section
│   ├── data/                # Centralized portfolio data
│   │   └── portfolio.ts     # Personal info, experience, projects, skills & SEO data
│   ├── styles/              # Global CSS & Tailwind configuration
│   │   └── index.css        # Core design tokens, scrollbars, and keyframes
│   └── types/               # TypeScript interfaces
├── next.config.mjs          # Next.js configuration (static export, image optimization)
├── package.json             # NPM dependencies & scripts
├── tsconfig.json            # TypeScript configuration
└── README.md                # Project documentation
```

---

## 🚦 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: `v18.17.0` or higher (Recommended: `v20.x` or `v22.x`)
- **npm**: `v9.x` or higher

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/saziburrahman/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Run the local development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application with Hot Module Replacement (HMR).

---

## 📜 Available NPM Scripts

| Script          | Command      | Purpose                                                        |
| :-------------- | :----------- | :------------------------------------------------------------- |
| `npm run dev`   | `next dev`   | Launches the local development server with Turbopack           |
| `npm run build` | `next build` | Compiles the production build & generates static HTML (`out/`) |
| `npm run start` | `next start` | Starts a production Node server (if static export is disabled) |
| `npm run lint`  | `oxlint`     | Runs Oxlint linter for rapid static code analysis              |

---

## ✏️ Customizing Portfolio Content

All content displayed on the website is managed centrally in **`src/data/portfolio.ts`**.

To update the portfolio for your own credentials:

1. Open `src/data/portfolio.ts`.
2. Edit the fields in `personal`, `social`, `stats`, `skills`, `projects`, `experience`, `education`, `services`, and `seo`.
3. Re-run `npm run build` to output the updated site.

---

## 🚀 Deployment

### Option 1: Deploy to Vercel (Recommended)

1. Push your repository to GitHub / GitLab / Bitbucket.
2. Import the project in [Vercel](https://vercel.com).
3. Vercel will automatically detect Next.js and build the application.

### Option 2: Deploy to GitHub Pages

1. Ensure `output: 'export'` is set in `next.config.mjs`.
2. Run `npm run build` to generate the static files in the `out/` folder.
3. Push the contents of the `out/` directory to your `gh-pages` branch.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more details.

---

<div align="center">

Designed & Engineered with ❤️ by **[MD Sazibur Rahman](https://github.com/saziburrahman)**

</div>

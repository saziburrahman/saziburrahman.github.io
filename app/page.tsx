import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import ContactSection from '@/components/home/contact-section';
import WhatIDo from '@/components/home/what-i-do';
import CTASection from '@/components/home/CTASection';
import SkillsSection from '@/components/home/SkillsSection';
import PortfolioSection from '@/components/home/PortfolioSection';
import ExperienceSection from '@/components/home/ExperienceSection';
import WorkProcess from '@/components/home/WorkProcess';
import AboutSection from '@/components/home/AboutSection';
import HeroSection from '@/components/home/HeroSection';

export default function Home() {
	return (
		<div className='body-container flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black'>
			<Header />

			<main className='flex-1 bg-white dark:bg-black'>
				<div className='min-h-[calc(100vh-4rem)] w-full bg-gradient-to-l from-purple-400/20 to-white dark:from-purple-400/20 dark:to-black mx-auto'>
					{/* HERO SECTION  */}
					<HeroSection />

					{/* ABOUT SECTION  */}
					<AboutSection />
				</div>

				{/* WORK PROCESS  */}
				<WorkProcess />
			</main>

			{/* EXPERIENCE SECTION */}
			<ExperienceSection />

			{/* PORTFOLIO */}
			<PortfolioSection />

			{/*SKILLS*/}
			<SkillsSection />

			{/* CTA */}
			<CTASection />

			{/* WHAT I DO SECTION */}
			<WhatIDo />

			{/* CONTACT SECTION */}
			<ContactSection />

			<Footer />
		</div>
	);
}

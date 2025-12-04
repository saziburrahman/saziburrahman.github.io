export default function ExperienceSection() {
	return (
		<section id='experience' className='py-20 bg-white dark:bg-zinc-900'>
			<div className='container mx-auto max-w-5xl px-6'>
				<div className='flex flex-col items-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white'>
						Work Experience
					</h2>
					<div className='w-20 h-1 bg-purple-600 mt-4 rounded-full'></div>
				</div>

				<div className='relative border-l border-zinc-200 dark:border-zinc-800 ml-3 md:ml-6 space-y-12'>
					{/* Job 1 */}
					<div className='relative pl-8 md:pl-12'>
						<div className='absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-purple-600 ring-4 ring-white dark:ring-zinc-900'></div>
						<div className='bg-zinc-50 dark:bg-zinc-950 rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800'>
							<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4'>
								<h3 className='text-xl font-bold text-zinc-900 dark:text-white'>
									Frontend Software Engineer
								</h3>
								<span className='text-sm px-3 py-1 rounded-full bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 font-medium mt-2 sm:mt-0 w-fit'>
									Oct 2025 – Present
								</span>
							</div>
							<p className='text-zinc-600 dark:text-zinc-400 font-medium mb-4'>
								EWN-BD Software Company • Dhaka
							</p>
							<ul className='list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 text-sm md:text-base'>
								<li>
									Working on modern frontend applications using React.js, Next.js, and TypeScript.
								</li>
								<li>Building pixel-perfect UI with Tailwind CSS, Ant Design & Material UI.</li>
								<li>Improving performance, reusable components, and frontend architecture.</li>
							</ul>
						</div>
					</div>

					{/* Job 2 */}
					<div className='relative pl-8 md:pl-12'>
						<div className='absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600 ring-4 ring-white dark:ring-zinc-900'></div>
						<div className='bg-zinc-50 dark:bg-zinc-950 rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800'>
							<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4'>
								<h3 className='text-xl font-bold text-zinc-900 dark:text-white'>
									Software Engineer
								</h3>
								<span className='text-sm px-3 py-1 rounded-full bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 font-medium mt-2 sm:mt-0 w-fit'>
									Jun 2024 – Sep 2025
								</span>
							</div>
							<p className='text-zinc-600 dark:text-zinc-400 font-medium mb-4'>Qcoom LTD • Dhaka</p>
							<ul className='list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 text-sm md:text-base'>
								<li>
									Contributed to a high-traffic e-commerce platform serving thousands of users.
								</li>
								<li>Integrated secure payment gateways and improved SEO with SSR.</li>
								<li>Implemented RBAC (Role-Based Access Control) for enhanced security.</li>
							</ul>
						</div>
					</div>

					{/* Job 3 */}
					<div className='relative pl-8 md:pl-12'>
						<div className='absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600 ring-4 ring-white dark:ring-zinc-900'></div>
						<div className='bg-zinc-50 dark:bg-zinc-950 rounded-xl p-6 md:p-8 border border-zinc-200 dark:border-zinc-800'>
							<div className='flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4'>
								<h3 className='text-xl font-bold text-zinc-900 dark:text-white'>
									Junior Software Engineer
								</h3>
								<span className='text-sm px-3 py-1 rounded-full bg-zinc-200 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 font-medium mt-2 sm:mt-0 w-fit'>
									Aug 2023 – Feb 2024
								</span>
							</div>
							<p className='text-zinc-600 dark:text-zinc-400 font-medium mb-4'>
								Aurora IT-21 • Dhaka
							</p>
							<ul className='list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400 text-sm md:text-base'>
								<li>Developed full-stack MERN applications focused on high performance.</li>
								<li>Built RESTful APIs ensuring smooth frontend-backend communication.</li>
								<li>Optimized database queries improving response times by 30%.</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

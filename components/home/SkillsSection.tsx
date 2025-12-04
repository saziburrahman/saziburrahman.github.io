export default function SkillsSection() {
	const skills = [
		{
			title: 'Frontend',
			skills: [
				'React.js',
				'Next.js',
				'TypeScript',
				'Tailwind CSS',
				'Tanstack Query',
				'Redux',
				'Zustand',
			],
		},
		{
			title: 'Backend',
			skills: ['Node.js', 'Express.js', 'REST API', 'JWT Auth', 'Joi Validation'],
		},
		{ title: 'Database', skills: ['MongoDB', 'MySQL', 'Mongoose', 'Prisma'] },
		{
			title: 'Tools & DevOps',
			skills: ['Git & GitHub', 'Docker', 'AWS (Basic)', 'Postman', 'Figma'],
		},
		{
			title: 'Soft Skills',
			skills: ['Problem Solving', 'Team Leadership', 'Agile/Scrum', 'Communication'],
		},
		{
			title: 'Languages',
			skills: ['JavaScript (ES6+)', 'TypeScript', 'English (Advanced)', 'Bengali (Native)'],
		},
	];
	return (
		<section id='skills' className='py-20 bg-white dark:bg-zinc-900'>
			<div className='container mx-auto max-w-5xl px-6'>
				<div className='text-center mb-16'>
					<div className='flex flex-col items-center'>
						<h2 className='text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white'>
							Technical Skills
						</h2>
						<div className='w-20 h-1 bg-purple-600 mt-4 rounded-full'></div>
					</div>
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
					{skills.map((category, idx) => (
						<div
							key={idx}
							className='bg-zinc-50 dark:bg-zinc-950 p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 hover:border-purple-500 dark:hover:border-purple-500 transition-colors'>
							<h3 className='text-lg font-bold text-zinc-900 dark:text-white mb-4 border-b border-zinc-200 dark:border-zinc-800 pb-2'>
								{category.title}
							</h3>
							<div className='flex flex-wrap gap-1'>
								{category.skills.map((skill, sIdx) => (
									<span
										key={sIdx}
										className='px-3 py-1 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-md text-sm text-zinc-600 dark:text-zinc-300'>
										{skill}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

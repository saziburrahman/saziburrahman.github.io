import Image from 'next/image';

export default function PortfolioSection() {
	const projects = [
		{
			title: 'Farmer Support Platform',
			description:
				'A web-based platform helping farmers get agricultural advice, financial aid, and community support features.',
			image: '/placeholder.jpg',
		},
		{
			title: 'TCB Digital Management',
			description:
				'A government-focused platform showing digital management of essential commodity distribution.',
			image: '/placeholder.jpg',
		},
		{
			title: 'Qcoom E-commerce',
			description:
				'A large-scale Bangladeshi e-commerce site with secure checkout, delivery tracking, and advanced UI.',
			image: '/placeholder.jpg',
		},
		{
			title: 'RESTful API Development',
			description:
				'Backend APIs using Node.js, Express.js, JWT authentication, and optimized database queries.',
			image: '/placeholder.jpg',
		},
	];
	return (
		<div
			id='portfolio'
			className='min-h-[60vh] bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200 dark:border-zinc-800'>
			<div className='max-w-5xl mx-auto p-6'>
				<div className='text-center mb-16'>
					<div className='flex flex-col items-center'>
						<h2 className='text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white'>
							My Portfolio
						</h2>
						<div className='w-20 h-1 bg-purple-600 mt-4 rounded-full'></div>
					</div>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{projects.map((project, index) => (
						<div
							key={index}
							className='bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow'>
							<div className='flex flex-col items-center gap-3 mb-3'>
								<div className='relative w-64 h-64'>
									<Image
										src={project.image}
										alt='img'
										fill
										className='rounded-lg border object-cover'
									/>
								</div>
								<h3 className='text-xl font-bold text-gray-900 dark:text-white'>{project.title}</h3>
								<p className='text-gray-600 dark:text-gray-400 text-sm'>{project.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

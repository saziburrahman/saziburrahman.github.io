import Image from 'next/image';

export default function HeroSection() {
	return (
		<div className='body-section flex flex-col lg:flex-row items-center justify-between pt-32'>
			<div className='p-5'>
				<h1 className='text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white leading-tight'>
					Hello, I’m <br />
					<span className='text-zinc-900 dark:text-white'>MD Sazibur Rahman</span>
				</h1>

				<p className='mt-4 text-zinc-600 dark:text-zinc-300 max-w-lg'>
					I’m a Software Engineer specializing in MERN stack and frontend engineering. I build
					scalable applications, optimize performance, and work with modern tools like Docker, AWS,
					and TypeScript to deliver high-quality solutions.
				</p>

				<button className='mt-6 px-6 py-3 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 transition'>
					Say Hello!
				</button>

				<div className='grid grid-cols-3 gap-2 mt-10 text-center overflow-hidden'>
					<div className='px-6 py-4 bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-xl '>
						<p className='text-2xl font-bold text-zinc-900 dark:text-white'>2+ Y.</p>
						<p className='text-sm text-zinc-500'>Experience</p>
					</div>
					<div className='px-6 py-4 bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-xl'>
						<p className='text-2xl font-bold text-zinc-900 dark:text-white'>15+</p>
						<p className='text-sm text-zinc-500'>Projects Completed</p>
					</div>
					<div className='px-6 py-4 bg-white/60 dark:bg-white/10 backdrop-blur-lg rounded-xl'>
						<p className='text-2xl font-bold text-zinc-900 dark:text-white'>Many</p>
						<p className='text-sm text-zinc-500'>Happy Clients</p>
					</div>
				</div>
			</div>

			<div className='relative group'>
				<div className='absolute inset-0 bg-gradient-to-tr from-purple-600 to-blue-600 rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-3 transition duration-300'></div>
				<div className='relative rounded-[2rem] overflow-hidden shadow-2xl bg-white dark:bg-zinc-800 w-[320px] h-[400px] md:w-[380px] md:h-[480px] border-4 border-white dark:border-zinc-800'>
					<Image
						src='/sazibur_rahman_image.jpg'
						alt='Profile'
						fill
						className='object-cover'
						priority
					/>
				</div>
			</div>
		</div>
	);
}

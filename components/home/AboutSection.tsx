import Image from 'next/image';

export default function AboutSection() {
	return (
		<div
			id='about'
			className='flex flex-col md:flex-row items-center gap-10 p-20 max-w-5xl mx-auto rounded-2xl border border-gray-400 shadow bg-white mt-32 z-10 relative'>
			<div className='relative'>
				<div className='relative w-72 h-80 rounded-xl shadow overflow-hidden'>
					<Image src='/md_sazibur_rahman_profile.jpg' alt='Profile' fill className='object-cover' />
				</div>

				<div className='absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-xl px-6 py-3 flex gap-4'>
					<a
						href='https://github.com/saziburrahman'
						className='text-pink-500 text-xl hover:scale-110 transition'>
						Git
					</a>
					<a
						href='https://www.linkedin.com/in/sr0fficial/'
						className='text-blue-600 text-xl hover:scale-110 transition'>
						In
					</a>
				</div>
			</div>

			<div className='flex-1'>
				<h1 className='text-3xl font-bold text-gray-900 leading-snug'>
					Software Engineer & MERN Stack Developer
				</h1>

				<p className='text-gray-600 mt-4'>
					Enthusiastic Software Engineer with strong experience in MERN stack development, API
					integration, performance optimization, and secure authentication. Worked on e-commerce,
					government, and agriculture-based platforms.
				</p>

				<p className='text-gray-600 mt-3'>
					Experienced in Next.js, React.js, TypeScript, Node.js, MongoDB, MySQL, Docker, Redux,
					Zustand, Ant Design, Material UI, and Tailwind CSS.
				</p>

				<div className='mt-6 flex items-center gap-4'>
					<button className='px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition'>
						My Project
					</button>

					<a
						href='/MdSaziburRahmanResume.pdf'
						download
						className='px-6 py-3 border border-purple-400 text-purple-600 rounded-lg hover:bg-purple-50 transition'>
						Download CV
					</a>
				</div>
			</div>
		</div>
	);
}

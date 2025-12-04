export default function Footer() {
	return (
		<footer className='bg-gray-900 py-5'>
			<div className='max-w-7xl mx-auto px-4'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-6'>
					<div className='flex items-center'>
						<a aria-current='page' className='flex items-center justify-center' href='/'>
							<span className='h-8 w-8 text-center text-white font-bold bg-purple-600 border rounded-full'>
								S
							</span>
							<span className='ml-2 text-lg font-bold text-white'>Sazib</span>
						</a>
					</div>
					<nav className='flex gap-6 flex-wrap justify-center'>
						<a className='text-sm text-gray-400 hover:text-white' href='#'>
							About
						</a>
						<a className='text-sm text-gray-400 hover:text-white' href='#'>
							Features
						</a>
						<a className='text-sm text-gray-400 hover:text-white' href='#'>
							Pricing
						</a>
						<a className='text-sm text-gray-400 hover:text-white' href='#'>
							Contact
						</a>
						<a className='text-sm text-gray-400 hover:text-white' href='#'>
							Privacy
						</a>
					</nav>

					<p className='text-sm text-gray-400'>
						&copy; {new Date().getFullYear()}. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}

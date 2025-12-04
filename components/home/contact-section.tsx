import IconMail from '@/app/assets/icons/IconMail';
import IconMapPin from '@/app/assets/icons/IconMapPin';
import IconPhone from '@/app/assets/icons/IconPhone';

export default function ContactSection() {
	return (
		<section id='contact' className='py-20 bg-gray-50'>
			<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='bg-white shadow-2xl rounded-xl overflow-hidden'>
					<div className='grid grid-cols-1 lg:grid-cols-2'>
						<div className='p-8 sm:p-12 lg:p-16 flex flex-col'>
							<h2 className='mt-2 text-3xl font-semibold'>Let&apos;s discuss your project</h2>
							<p className='mt-4 text-base opacity-90'>
								I'm open to new opportunities, collaborations, and exciting project ideas. Reach out
								anytime!
							</p>

							<div className='mt-10 space-y-6'>
								<div className='flex items-center space-x-4'>
									<IconMapPin className='flex-shrink-0 w-6 h-6 text-indigo-300' />
									<div>
										<span className='text-sm font-medium opacity-70'>Address:</span>
										<p className='text-lg font-medium'>Sector 10, Uttara, Dhaka, Bangladesh</p>
									</div>
								</div>

								<div className='flex items-center space-x-4'>
									<IconMail className='flex-shrink-0 w-6 h-6 text-indigo-300' />
									<div className='flex flex-col'>
										<span className='text-sm font-medium opacity-70'>Email:</span>
										<a href='mailto:rahmansazib72@gmail.com' className='text-lg font-medium'>
											rahmansazib72@gmail.com
										</a>
									</div>
								</div>

								<div className='flex items-center space-x-4'>
									<IconPhone className='flex-shrink-0 w-6 h-6 text-indigo-300' />
									<div className='flex flex-col'>
										<span className='text-sm font-medium opacity-70'>Call me now:</span>
										<a href='tel:+8801750475361' className='text-lg font-semibold'>
											+8801750475361
										</a>
									</div>
								</div>
							</div>
						</div>

						{/* Contact Form */}
						<div className=''>
							<div className='p-8 sm:p-12 lg:p-16'>
								<h3 className='text-2xl font-semibold text-gray-900 mb-8'>
									Let&apos;s get in touch
								</h3>

								<form action='#' className='space-y-8'>
									<div className='relative z-0 w-full group'>
										<input
											id='name'
											name='name'
											type='text'
											placeholder=' '
											className='block py-2.5 w-full text-sm text-gray-900 bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 peer border-gray-300 focus:border-indigo-600'
										/>
										<label
											htmlFor='name'
											className='absolute bg-white text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-indigo-600'>
											Name <span className='text-red-500'>*</span>
										</label>
									</div>

									<div className='relative z-0 w-full group'>
										<input
											id='email'
											name='email'
											type='email'
											placeholder=' '
											className='block py-2.5 w-full text-sm text-gray-900 bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 peer border-gray-300 focus:border-indigo-600'
										/>
										<label
											htmlFor='email'
											className='absolute bg-white text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-indigo-600'>
											Email <span className='text-red-500'>*</span>
										</label>
									</div>

									<div className='relative z-0 w-full group'>
										<input
											id='location'
											name='location'
											type='text'
											placeholder=' '
											className='block py-2.5 w-full text-sm text-gray-900 bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 peer border-gray-300 focus:border-indigo-600'
										/>
										<label
											htmlFor='location'
											className='absolute bg-white text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-indigo-600'>
											Location
										</label>
									</div>

									<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
										<div className='relative z-0 w-full group'>
											<input
												id='budget'
												name='budget'
												type='text'
												placeholder=' '
												className='block py-2.5 w-full text-sm text-gray-900 bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 peer border-gray-300 focus:border-indigo-600'
											/>
											<label
												htmlFor='budget'
												className='absolute bg-white text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-indigo-600'>
												Budget
											</label>
										</div>

										<div className='relative z-0 w-full group'>
											<input
												id='subject'
												name='subject'
												type='text'
												placeholder=' '
												className='block py-2.5 w-full text-sm text-gray-900 bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 peer border-gray-300 focus:border-indigo-600'
											/>
											<label
												htmlFor='subject'
												className='absolute bg-white text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-indigo-600'>
												Subject
											</label>
										</div>
									</div>

									<div className='relative z-0 w-full group'>
										<textarea
											name='message'
											id='message'
											placeholder=' '
											className='block w-full text-sm text-gray-900 bg-transparent border-b-2 appearance-none focus:outline-none focus:ring-0 peer border-gray-300 focus:border-indigo-600 resize-none'></textarea>
										<label
											htmlFor='message'
											className='absolute bg-white text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-indigo-600'>
											Message
										</label>
									</div>

									<button
										type='submit'
										className='w-full sm:w-auto px-8 py-3 text-sm font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300 ease-in-out'>
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

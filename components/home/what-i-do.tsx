import React from 'react';

export default function WhatIDo() {
	return (
		<div className='bg-gray-50 py-16'>
			<div className='max-w-5xl mx-auto px-6'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
					<div className='flex flex-col justify-center'>
						<p className='text-2xl font-semibold text-gray-800'>What I do?</p>
						<span className='text-4xl font-extrabold text-purple-600'>MERN Stack Developer</span>
						<p className='mt-4 text-lg text-gray-600'>
							I build modern full-stack web applications using MongoDB, Express.js, React.js, and
							Node.js. I create scalable backends, high-performance frontends, and secure API
							systems.
						</p>
						<button className='w-1/3 mt-6 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition duration-300'>
							Say Hello!
						</button>
					</div>

					<div className='space-y-6'>
						<div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
							<h3 className='text-2xl font-semibold text-gray-800'>Web Development</h3>
							<p className='mt-2 text-gray-600'>
								I build responsive, secure, and high-performance web applications using React.js,
								Next.js, and TypeScript.
							</p>
						</div>

						<div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
							<h3 className='text-2xl font-semibold text-gray-800'>Backend Development</h3>
							<p className='mt-2 text-gray-600'>
								I develop scalable APIs using Node.js, Express.js, JWT authentication, and MongoDB
								database systems.
							</p>
						</div>

						<div className='bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
							<h3 className='text-2xl font-semibold text-gray-800'>Frontend Development</h3>
							<p className='mt-2 text-gray-600'>
								I create modern UIs with React.js, Tailwind CSS, Framer Motion, Redux, and Zustand
								for smooth user experiences.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

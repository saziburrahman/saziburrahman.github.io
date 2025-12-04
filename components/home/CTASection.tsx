import React from 'react';

export default function CTASection() {
	return (
		<div className='p-5 bg-gray-500 dark:bg-zinc-900 bg-opacity-80'>
			<div className='max-w-5xl mx-auto px-6 text-center text-white'>
				<h2 className='text-4xl font-bold'>Do you have a project idea?</h2>
				<h2 className='text-4xl font-bold mt-1'>Let&apos;s discuss!</h2>
				<p className='text-sm text-gray-300 mt-2'>
					Feel free to share any idea — I’d love to help you build it.
				</p>
				<button className='bg-purple-600 text-white px-5 py-2 rounded-md mt-4'>
					Let&apos;s Work Together
				</button>
			</div>
		</div>
	);
}

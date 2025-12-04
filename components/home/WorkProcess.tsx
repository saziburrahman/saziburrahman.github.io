import IconAnalysis from '@/app/assets/icons/IconAnalysis';
import IconDesign from '@/app/assets/icons/IconDesign';
import IconLaunch from '@/app/assets/icons/IconLaunch';
import IconResearch from '@/app/assets/icons/IconResearch';

export default function WorkProcess() {
	const workProcess = [
		{
			step: '01',
			title: 'Research',
			description:
				'Understanding project requirements and analyzing user needs to create effective development strategies.',
			icon: <IconResearch />,
			color: 'bg-blue-500',
			lightColor: 'bg-blue-100 text-blue-600',
		},
		{
			step: '02',
			title: 'Analyze',
			description:
				'Reviewing technical needs, optimizing workflows, and preparing scalable architecture for applications.',
			icon: <IconAnalysis />,
			color: 'bg-purple-500',
			lightColor: 'bg-purple-100 text-purple-600',
		},
		{
			step: '03',
			title: 'Design',
			description:
				'Creating modern UI/UX layouts and clean component structures for seamless user experiences.',
			icon: <IconDesign />,
			color: 'bg-pink-500',
			lightColor: 'bg-pink-100 text-pink-600',
		},
		{
			step: '04',
			title: 'Launch',
			description:
				'Deploying high-performance applications with best security practices and ongoing improvements.',
			icon: <IconLaunch />,
			color: 'bg-emerald-500',
			lightColor: 'bg-emerald-100 text-emerald-600',
		},
	];
	return (
		<div className='min-h-[60vh] bg-zinc-50 dark:bg-zinc-950 -mt-40 relative z-0 pt-60 pb-20'>
			<div className='container mx-auto max-w-6xl px-6'>
				<div className='text-center mb-16 max-w-2xl mx-auto'>
					<div className='flex flex-col items-center mb-4'>
						<h2 className='text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white'>
							Work Process
						</h2>
						<div className='w-20 h-1 bg-purple-600 mt-4 rounded-full'></div>
					</div>
					<p className='text-zinc-600 dark:text-zinc-400'>
						A structured workflow ensuring high-quality development from initial concept to final
						deployment.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					{workProcess.map((process, index) => (
						<div
							key={index}
							className='group bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300'>
							<div
								className={`w-14 h-14 ${process.lightColor} dark:bg-zinc-800 dark:text-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition`}>
								<div className='w-7 h-7'>{process.icon}</div>
							</div>
							<div className='text-xs font-bold text-zinc-400 mb-2 tracking-widest'>
								STEP {process.step}
							</div>
							<h3 className='text-xl font-bold text-zinc-900 dark:text-white mb-3'>
								{process.title}
							</h3>
							<p className='text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed'>
								{process.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	metadataBase: new URL('https://saziburrahman.github.io/'),

	title: {
		default: 'Sazibur Rahman – Software Engineer (MERN | Frontend)',
		template: '%s | Sazibur Rahman',
	},

	description:
		'Portfolio of MD Sazibur Rahman — Frontend Software Engineer specializing in MERN stack, React, Next.js, TypeScript, and scalable web development.',

	keywords: [
		'Sazibur Rahman',
		'MD Sazibur Rahman',
		'Software Engineer Bangladesh',
		'Frontend Developer',
		'MERN Stack Developer',
		'Next.js Developer',
		'React Developer',
		'Portfolio',
	],

	authors: [{ name: 'MD Sazibur Rahman' }],
	creator: 'MD Sazibur Rahman',
	publisher: 'MD Sazibur Rahman',

	icons: {
		icon: '/favicon.ico',
	},

	openGraph: {
		title: 'MD Sazibur Rahman – Frontend Software Engineer',
		description:
			'Frontend Software Engineer specializing in MERN stack, Next.js, React, TypeScript and high-performance web applications.',
		url: 'https://saziburrahman.github.io/',
		siteName: 'Sazibur Rahman Portfolio',
		images: [
			{
				url: '/sazibur_rahman_image.jpg',
				width: 1200,
				height: 630,
				alt: 'MD Sazibur Rahman Portfolio',
			},
		],
		type: 'website',
		locale: 'en_US',
	},

	twitter: {
		card: 'summary_large_image',
		title: 'MD Sazibur Rahman – Frontend Software Engineer',
		description:
			'Portfolio of MD Sazibur Rahman — Frontend/MERN Stack Engineer specialized in React, Next.js, TypeScript.',
		images: ['/sazibur_rahman_image.jpg'],
		creator: '@rahmansazib',
	},

	alternates: {
		canonical: 'https://saziburrahman.github.io/',
	},

	themeColor: '#ffffff',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<meta charSet='UTF-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</head>

			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}

"use client";
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
	return (
		<div className="min-h-screen bg-black">
			<nav className="w-full flex items-center justify-between px-8 md:px-32 py-4 bg-black/80 border-b border-[#232323] sticky top-0 z-50">
				<div className="flex items-center gap-2">
					<span className="bg-[#232323] rounded-lg px-2 py-1 flex items-center text-white font-semibold text-lg ml-8">
						<Link href="/" className="focus:outline-none">afiaava</Link>
					</span>
				</div>
				<div className="flex items-center gap-4">
					<Link href="/#about" className="text-white/80 hover:text-white px-3 py-1 rounded transition font-medium">about</Link>
					<Link href="/projects" className="text-white/80 hover:text-white px-3 py-1 rounded transition font-medium">projects</Link>
					<Link href="/#awards" className="text-white/80 hover:text-white px-3 py-1 rounded transition font-medium">awards</Link>
					<Link href="/#thoughts" className="text-white/80 hover:text-white px-3 py-1 rounded transition font-medium">blog</Link>
					<a
						href="https://github.com/Afia-Ava"
						target="_blank"
						rel="noopener noreferrer"
						className="ml-2 p-2 rounded-lg border border-[#232323] bg-[#18181b] hover:bg-[#232323] transition"
						aria-label="GitHub"
					>
						<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-white">
							<path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
						</svg>
					</a>
				</div>
			</nav>
			<main className="flex flex-col items-center justify-center px-4 md:px-0 pt-24">
				<h1 className="text-center text-3xl md:text-5xl font-bold tracking-tight text-white mb-2 leading-tight" style={{ fontFamily: 'Inter, var(--font-geist-sans), Arial, sans-serif' }}>
					my involvements
				</h1>
				<p className="text-center text-base md:text-lg text-[#bdbdbd] mb-10" style={{ fontFamily: 'Inter, var(--font-geist-sans), Arial, sans-serif' }}>
					a collection of things I&apos;ve been creating
				</p>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mx-auto">
								<ProjectCard
									logo="/asset/visionly.png"
									title="visionly"
									description="a vision board to keep you on track to meet your goals"
									ctaLabel="explore"
									ctaLink="https://afia-ava.github.io/visionly/"
								/>
								<ProjectCard
									logo="/asset/outloud.png"
									title="outloud"
									description="document your journey while building things"
									ctaLabel="explore"
									ctaLink="#"
								/>
								<ProjectCard
									logo="/asset/flashback.png"
									title="flashback"
									description="make shared image folder maps with friends worldwide"
									ctaLabel="explore"
									ctaLink="#"
								/>
				</div>
			</main>
		</div>
	);


type ProjectCardProps = {
	logo: string;
	title: string;
	description: string;
	ctaLabel: string;
	ctaLink: string;
};

function ProjectCard({ logo, title, description, ctaLabel, ctaLink }: ProjectCardProps) {
	return (
		<div className="bg-[#18181b] border border-[#232323] rounded-2xl shadow-lg p-6 flex flex-col items-start min-h-[320px] relative">
			<div className="flex flex-col items-center gap-2 mb-4 w-full">
				<div className="w-64 h-40 md:w-80 md:h-52 bg-[#232323] rounded-xl flex items-center justify-center overflow-hidden">
					<Image 
						src={logo} 
						alt={title + ' logo'} 
						width={320} 
						height={208} 
						className={`${title === 'visionly' || title === 'outloud' ? 'object-cover' : 'object-contain'} w-full h-full`} 
					/>
				</div>
				<span className="text-white text-lg font-bold mt-4 text-center w-full block" style={{ fontFamily: 'Inter, var(--font-geist-sans), Arial, sans-serif' }}>{title}</span>
			</div>
			<div className="text-[#bdbdbd] text-sm mb-4" style={{ fontFamily: 'Inter, var(--font-geist-sans), Arial, sans-serif' }}>{description}</div>
			<a href={ctaLink} target="_blank" rel="noopener noreferrer" className="w-full mt-auto px-4 py-2 rounded bg-[#232323] text-[#bdbdbd] text-center font-medium text-sm hover:bg-[#232323]/80 transition" style={{ fontFamily: 'Inter, var(--font-geist-sans), Arial, sans-serif' }}>{ctaLabel}</a>
		</div>
	);
}

}

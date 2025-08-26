"use client";
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      <nav className="w-full flex items-center justify-between px-8 md:px-32 py-4 bg-black/80 border-b border-[#232323] sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="bg-[#232323] rounded-lg px-2 py-1 flex items-center text-white font-semibold text-lg ml-8">
            <Link href="/" className="focus:outline-none">afiaava</Link>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/about" className="text-white/80 hover:text-white px-3 py-1 rounded transition font-medium">about</Link>
          <Link href="/projects" className="text-white/80 hover:text-white px-3 py-1 rounded transition font-medium">projects</Link>
          <Link href="/awards" className="text-white/80 hover:text-white px-3 py-1 rounded transition font-medium">awards</Link>
          <Link href="/blogs" className="text-white/80 hover:text-white px-3 py-1 rounded transition font-medium">blog</Link>
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
          about me
        </h1>
        <p className="text-center text-base md:text-lg text-[#bdbdbd] mb-10" style={{ fontFamily: 'Inter, var(--font-geist-sans), Arial, sans-serif' }}>
          welcome to my world
        </p>
        <div className="max-w-2xl mx-auto text-[#ededed] text-base md:text-lg leading-relaxed text-left" style={{ fontFamily: 'Inter, var(--font-geist-sans), Arial, sans-serif', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: '1.7' }}>
          <p style={{ fontFamily: 'Inter, var(--font-geist-sans), Arial, sans-serif', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: '1.7' }}>Hi, I’m Afia. I’m 17 and I love building things. From small coding experiments at home to projects that reach real people, I’ve spent a lot of time figuring out how ideas turn into something useful. Along the way, I’ve failed a lot but those failures have taught me more than any success ever could.</p>
          <p style={{ fontFamily: 'Inter, var(--font-geist-sans), Arial, sans-serif', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: '1.7' }}>I was born in Bangladesh and now live in the United States, which has shaped the way I see the world and approach problems. I’m curious about technology, engineering, and how people interact with the things we create. I enjoy exploring ideas, trying them out, and learning from what works, and what doesn’t.</p>
        </div>
      </main>
    </div>
  );
}

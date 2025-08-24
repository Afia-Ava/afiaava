"use client";
import Link from 'next/link';

export default function Blogs() {
  return (
  <div className="min-h-screen bg-black">
      <nav className="w-full flex items-center justify-between px-8 md:px-32 py-4 bg-black/80 border-b border-[#232323] sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="bg-[#232323] rounded-lg px-2 py-1 flex items-center text-white font-semibold text-lg ml-8">
            <a href="/" className="focus:outline-none">afiaava</a>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/" className="text-white/80 hover:text-white px-3 py-1 rounded transition font-medium">about</a>
          <a href="/projects" className="text-white/80 hover:text-white px-3 py-1 rounded transition font-medium">projects</a>
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
  <main className="flex flex-col min-h-screen bg-black px-0 pt-0">
        <section className="mb-24 pt-24">
          <h2 className="text-3xl font-bold text-[#eaf7e2] mb-6 text-center">my thoughts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
            <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-6 flex flex-col items-center min-h-[180px] max-w-xs mx-auto">
              <div className="text-[#eaf7e2] text-lg font-semibold mb-2 text-center">how i mistakenly ended up in tech</div>
              <p className="text-[#eaf7e2] text-base text-center mb-4">I didn&apos;t grow up thinking I&apos;d be in tech.</p>
              <a href="/articles/how-i-ended-up-in-tech" className="text-[#b6e3a7] hover:underline font-medium">read more</a>
            </div>
            <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-6 flex flex-col items-center min-h-[180px] max-w-xs mx-auto">
              <div className="text-[#eaf7e2] text-lg font-semibold mb-2 text-center">human experience</div>
              <p className="text-[#eaf7e2] text-base text-center mb-4">&quot;human experience&quot; isn&apos;t about<br />perfect designs or impressive builds.</p>
              <a href="/articles/human-experience" className="text-[#b6e3a7] hover:underline font-medium">read more</a>
            </div>
            <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-6 flex flex-col items-center min-h-[180px] max-w-xs mx-auto">
              <div className="text-[#eaf7e2] text-lg font-semibold mb-2 text-center">the homes we make online</div>
              <p className="text-[#eaf7e2] text-base text-center mb-4">the internet wasn&apos;t just connection.<br />it was belonging.</p>
              <a href="/articles/homes-we-make-online" className="text-[#b6e3a7] hover:underline font-medium">read more</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

'use client';
import Link from 'next/link';

export default function ArticleHumanExperience() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
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
      <main className="flex flex-col items-center justify-center px-4 md:px-0 pt-24 flex-1">
        <div className="max-w-2xl mx-auto text-[#ededed] text-base md:text-lg leading-relaxed text-left" style={{ fontFamily: 'Inter, var(--font-geist-sans), Arial, sans-serif', fontWeight: 400, letterSpacing: '-0.02em', lineHeight: '1.7' }}>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-4">
            human experience
          </h1>
          <p className="mb-4 text-lg">
            &quot;Human experience&quot; isn&apos;t about perfect designs or
            impressive builds.
          </p>
          <p className="mb-4 text-lg">
            It’s not about clean lines, smooth animations, or the cleverness of
            your code. It’s not the part that wins awards, goes viral, or makes
            your portfolio look stacked. It’s the part no one really notices
            unless they feel it. The subtle stuff, the moments where something
            clicks, not because it was impressive, but because it was honest.
          </p>
          <p className="mb-4 text-lg">
            I used to think that to be respected in tech — or design, or anything
            really — I had to be perfect. I had to build something sleek,
            groundbreaking, technically beautiful. But the things that actually
            moved people? They were never perfect.
            <br />
            They were personal. They were vulnerable. They were made with the
            intention to understand, not just to impress.
          </p>
          <p className="mb-4 text-lg">
            When someone uses a product and feels a little more capable, a little
            less alone, a little more seen — that’s the win.
            <br />
            Not the cleanest UI. Not the smartest backend logic. But that quiet
            moment of connection. I think we forget sometimes that everything we
            build — the websites, the apps, the tools — are just attempts at
            translating human needs.
            <br />
            We’re trying to reach people. To help. To comfort. To give power. To
            make space.
          </p>
          <p className="mb-4 text-lg">
            That’s what “human experience” really is. Not something you decorate
            your landing page with. Not something you add at the end. It’s the
            core. And if it’s missing, nothing else matters.
          </p>
          <p className="mb-4 text-lg">
            So now, when I make things, I start there. Not with, “How can I
            impress people?”
            <br />
            But with:
            <br />
            “How do I make someone feel understood?”
            <br />
            “What would I have needed, back then?”
            <br />
            “What would make this more human?”
          </p>
          <Link href="/" className="text-[#b6e3a7] hover:underline font-medium">
          </Link>
        </div>
      <div className="h-24 md:h-32" />
    </main>
    <footer className="w-full bg-black py-10 flex flex-col items-center border-t border-[#232323]">
      <div className="flex flex-row gap-8 mb-4 text-[#ededed] text-lg font-medium">
        <Link href="/about" className="hover:underline font-normal">about</Link>
        <a href="/projects" className="hover:underline font-normal">projects</a>
        <Link href="/awards" className="hover:underline font-normal">awards</Link>
        <Link href="/blogs" className="hover:underline font-normal">blog</Link>
      </div>
      <div className="flex flex-row gap-4 mb-4">
        <a href="https://x.com/aafia_ava" target="_blank" rel="noopener noreferrer" className="bg-[#18181b] rounded-xl p-3 text-[#ededed] hover:bg-[#232323] transition" aria-label="X">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.53 3H21L13.47 10.62L22.25 21H15.97L10.77 14.67L4.97 21H1L9.03 12.82L0.75 3H7.18L12 8.73L17.53 3ZM16.32 19H18.13L7.75 5.08H5.81L16.32 19Z"/></svg>
        </a>
        <a href="https://www.instagram.com/afia.ava/" target="_blank" rel="noopener noreferrer" className="bg-[#18181b] rounded-xl p-3 text-[#ededed] hover:bg-[#232323] transition">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/afia-khanom-ava/" target="_blank" rel="noopener noreferrer" className="bg-[#18181b] rounded-xl p-3 text-[#ededed] hover:bg-[#232323] transition">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.07-.93-2-2-2s-2 .93-2 2v4.5h-3v-9h3v1.22c.41-.63 1.36-1.22 2.25-1.22 1.93 0 3.5 1.57 3.5 3.5v5.5z"/></svg>
        </a>
        <a href="https://github.com/Afia-Ava" target="_blank" rel="noopener noreferrer" className="bg-[#18181b] rounded-xl p-3 text-[#ededed] hover:bg-[#232323] transition">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .267.18.577.688.48C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
        </a>
        <a href="https://www.youtube.com/@afia_ava" target="_blank" rel="noopener noreferrer" className="bg-[#18181b] rounded-xl p-3 text-[#ededed] hover:bg-[#232323] transition">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M21.8 8.001a2.75 2.75 0 0 0-1.94-1.94C18.07 6 12 6 12 6s-6.07 0-7.86.061a2.75 2.75 0 0 0-1.94 1.94C2 9.79 2 12 2 12s0 2.21.061 3.999a2.75 2.75 0 0 0 1.94 1.94C5.93 18 12 18 12 18s6.07 0 7.86-.061a2.75 2.75 0 0 0 1.94-1.94C22 14.21 22 12 22 12s0-2.21-.2-3.999zM10 15.5v-7l6 3.5-6 3.5z"/></svg>
        </a>
      </div>
      <div className="text-[#bdbdbd] text-sm mb-2">© 2025 afia ava. all rights reserved.</div>
    </footer>
  </div>
  );
}

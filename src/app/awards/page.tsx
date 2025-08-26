"use client";
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Awards() {
  const [showNav, setShowNav] = useState(true);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setShowNav(scrollY < 200);
      setShowScrollTop(scrollY > 300);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
  <div className="min-h-screen bg-black px-0 pt-0">
      <nav className="w-full flex items-center justify-between px-8 md:px-32 py-4 bg-black/80 border-b border-[#232323] sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <span className="bg-[#232323] rounded-lg px-2 py-1 flex items-center text-white font-semibold text-lg ml-8">
            <a href="/" className="focus:outline-none">afiaava</a>
          </span>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/about" className="text-white/80 hover:text-white px-3 py-1 rounded transition font-medium">about</Link>
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
      {/* Caption Section - styled like projects page */}
      <div className="w-full flex flex-col items-center justify-center pt-24 pb-4">
        <h1 className="text-center text-3xl md:text-5xl font-bold tracking-tight text-white mb-2 leading-tight" style={{ fontFamily: 'Inter, var(--font-geist-sans), Arial, sans-serif' }}>
          awards & press
        </h1>
        <p className="text-center text-base md:text-lg text-[#eaf7e2] mb-10" style={{ fontFamily: 'Inter, var(--font-geist-sans), Arial, sans-serif' }}>
          some recognitions along the way
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto max-w-7xl">
        {/* Award/Press Box 1 */}
        <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
          <div className="w-72 h-44 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
            <Image src="/asset/technovation.png" alt="Technovation North America Regional Honoree" width={288} height={176} className="w-full h-full object-cover m-0 p-0" style={{ display: 'block' }} />
          </div>
          <div className="text-[#eaf7e2] text-base text-center">
            <strong>technovation north america<br />regional honoree</strong>
            <p className="mt-2">created READelivery app for a non profit<br />delivering free-books to low income families</p>
          </div>
        </div>
        {/* Award/Press Box 2 */}
        <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
          <div className="w-72 h-44 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
            <Image src="/asset/ncwit.jpeg" alt="NCWIT National Honorable Mention & Ohio Winner" width={288} height={176} className="w-full h-full object-cover m-0 p-0" style={{ display: 'block' }} />
          </div>
          <div className="text-[#eaf7e2] text-base text-center">
            <strong>ncwit national honorable<br />mention & ohio winner</strong>
            <p className="mt-2">a distinction highlighting my<br />commitment to advancing technology</p>
          </div>
        </div>
        {/* Award/Press Box 3 */}
        <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
          <div className="w-72 h-44 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
            <Image src="/asset/msp.jpg" alt="moonshot pirates global finalist" width={288} height={176} className="w-full h-full object-cover m-0 p-0" style={{ display: 'block' }} />
          </div>
          <div className="text-[#eaf7e2] text-base text-center">
            <strong>moonshot pirates global finalist</strong>
            <p className="mt-2">a competition to tackle pressing global<br />issues through innovative thinking</p>
          </div>
        </div>
        {/* Award/Press Box 4 */}
        <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
          <div className="w-72 h-44 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
            <Image src="/asset/conrad.png" alt="Conrad Challenge" width={288} height={176} className="w-full h-full object-cover m-0 p-0" style={{ display: 'block' }} />
          </div>
          <div className="text-[#eaf7e2] text-base text-center">
            <strong>conrad innovator</strong>
            <p className="mt-2">distinction for a standout<br />innovation stage proposal</p>
          </div>
        </div>
        {/* Award/Press Box 5 */}
        <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
          <div className="w-72 h-44 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
            <Image src="/asset/swissgirls.png" alt="featured on swiss venture girls" width={288} height={176} className="w-full h-full object-cover m-0 p-0" style={{ display: 'block' }} />
          </div>
          <div className="text-[#eaf7e2] text-base text-center">
            <strong>featured on swiss venture girls</strong>
            <p className="mt-2">interviewed about our<br />greenably initiative</p>
          </div>
        </div>
        {/* Award/Press Box 6 */}
        <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
          <div className="w-72 h-44 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
            <Image src="/asset/env-expo.png" alt="env-expo award" width={288} height={176} className="w-full h-full object-cover m-0 p-0" style={{ display: 'block' }} />
          </div>
          <div className="text-[#eaf7e2] text-base text-center">
            <strong>champion at bangladesh<br />national environment expo</strong>
            <p className="mt-2">represented greenably team</p>
          </div>
        </div>
        {/* Award/Press Box 7 */}
        <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
          <div className="w-72 h-44 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
            <Image src="/asset/nyas.png" alt="nyas award" width={288} height={176} className="w-full h-full object-cover m-0 p-0" style={{ display: 'block' }} />
          </div>
          <div className="text-[#eaf7e2] text-base text-center">
            <strong>member at new york<br />academy of sciences</strong>
            <p className="mt-2">worked on a space habitation project</p>
          </div>
        </div>
        {/* Award/Press Box 8 */}
        <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
          <div className="w-72 h-44 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
            <Image src="/asset/cso.png" alt="cso award" width={288} height={176} className="w-full h-full object-cover m-0 p-0" style={{ display: 'block' }} />
          </div>
          <div className="text-[#eaf7e2] text-base text-center">
            <strong>semi finalist at intl<br />climate science olympiad</strong>
            <p className="mt-2">proposed innovative solutions to climate crisis</p>
          </div>
        </div>
        {/* Award/Press Box 9 */}
        <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
          <div className="w-72 h-44 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
            <Image src="/asset/codeinplace.png" alt="codeinplace award" width={288} height={176} className="w-full h-full object-cover m-0 p-0" style={{ display: 'block' }} />
          </div>
          <div className="text-[#eaf7e2] text-base text-center">
            <strong>stanford code in place</strong>
            <p className="mt-2">attended 2024 & 2025 cohort</p>
          </div>
        </div>
      </div>
    </div>
  );
}

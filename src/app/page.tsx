'use client';
import { useEffect, useState } from 'react';
export default function Home() {
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
    <main className="flex items-start justify-center min-h-screen bg-black px-4 pt-12">
      <div className="flex flex-row w-full max-w-7xl gap-8 md:gap-20 items-start md:items-stretch">
        <section className="flex-1 flex flex-col justify-center py-12 md:py-0 md:ml-4 lg:ml-8">
          <div className="mb-8 md:mb-0">
            <h1 className="text-left text-6xl md:text-7xl mb-6 font-bold tracking-wide text-[#eaf7e2] font-[var(--font-cinzel)] drop-shadow-lg">
              afia ava
            </h1>
            <p className="text-yellow-50 text-left text-lg max-w-md mb-8 font-[var(--font-garamond)] whitespace-pre-line">
              hi, i&apos;m afia.
              <br />i build things that i feel matter.
              <span style={{ display: 'block', height: '0.75em' }}></span>
              i grew up between countries and cultures,
              <br />
              always trying to figure out who i wanted to be.
              <br />
              <span style={{ display: 'block', height: '0.75em' }}></span>
              tech gave me the power to bring ideas to life.
              <br />
              engineering taught me how to solve problems.
              <br />
              design showed me how to make people feel.
              <span style={{ display: 'block', height: '0.75em' }}></span>
              i love a lot of things, and right now, i’m on an exploration
              sprint. i’m still learning and shaping
              <br />
              a future that feels deeply me.
              <br />
              <br />
              i don’t know exactly where this path leads.
              <br />
              but i’m all in. to make things that feel human.
            </p>
          </div>
          <section id="things" className="mb-24 pt-24">
            <h2 className="text-3xl font-bold text-[#eaf7e2] mb-6">
              things i make
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
              {/* Project 1 */}
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
                <div className="w-64 h-40 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src="/asset/visionly.png"
                    alt="Visionly Project"
                    className="w-full h-full object-cover m-0 p-0"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="text-[#eaf7e2] text-base text-center">
                  <strong>Visionly</strong>
                  <p className="mt-2">
                    a visual board app for people
                    <br />
                    who dream in pictures.
                  </p>
                </div>
              </div>
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
                <div className="w-64 h-40 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src="/asset/outloud.png"
                    alt="Outloud"
                    className="w-full h-full object-cover m-0 p-0"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="text-[#eaf7e2] text-base text-center">
                  <strong>Outloud</strong>
                  <p className="mt-2">
                    share what you're learning.
                    <br />
                    find clarity through writing.
                  </p>
                </div>
              </div>
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
                <div className="w-64 h-40 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src="/asset/flashback.png"
                    alt="Flashback"
                    className="w-full h-full object-cover m-0 p-0"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="text-[#eaf7e2] text-base text-center">
                  <strong>Flashback</strong>
                  <p className="mt-2">
                    a letter to the places
                    <br />
                    that changed us.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section id="awards" className="mb-24 pt-24">
            <h2 className="text-3xl font-bold text-[#eaf7e2] mb-6">
              awards & press
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
              {/* Award/Press Box 1 */}
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
                <div className="w-64 h-40 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src="/asset/technovation.png"
                    alt="Technovation North America Regional Honoree"
                    className="w-full h-full object-cover m-0 p-0"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="text-[#eaf7e2] text-base text-center">
                  <strong>
                    technovation north america
                    <br />
                    regional honoree
                  </strong>
                  <p className="mt-2">
                    created READelivery app for a non profit
                    <br />
                    delivering free-books to low income families
                  </p>
                </div>
              </div>
              {/* Award/Press Box 2 */}
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
                <div className="w-64 h-40 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src="/asset/ncwit.jpeg"
                    alt="NCWIT National Honorable Mention & Ohio Winner"
                    className="w-full h-full object-cover m-0 p-0"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="text-[#eaf7e2] text-base text-center">
                  <strong>
                    ncwit national honorable
                    <br />
                    mention & ohio winner
                  </strong>
                  <p className="mt-2">
                    a distinction highlighting my
                    <br />
                    commitment to advancing technology
                  </p>
                </div>
              </div>
              {/* Award/Press Box 3 */}
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
                <div className="w-64 h-40 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src="/asset/msp.jpg"
                    alt="moonshot pirates global finalist"
                    className="w-full h-full object-cover m-0 p-0"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="text-[#eaf7e2] text-base text-center">
                  <strong>moonshot pirates global finalist</strong>
                  <p className="mt-2">
                    a competition to tackle pressing global
                    <br />
                    issues through innovative thinking
                  </p>
                </div>
              </div>
              {/* Award/Press Box 4 */}
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
                <div className="w-64 h-40 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src="/asset/conrad.png"
                    alt="Conrad Challenge"
                    className="w-full h-full object-cover m-0 p-0"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="text-[#eaf7e2] text-base text-center">
                  <strong>conrad innovator</strong>
                  <p className="mt-2">
                    distinction for a standout
                    <br />
                    innovation stage proposal
                  </p>
                </div>
              </div>
              {/* Award/Press Box 5 */}
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
                <div className="w-64 h-40 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src="/asset/swissgirls.png"
                    alt="featured on swiss venture girls"
                    className="w-full h-full object-cover m-0 p-0"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="text-[#eaf7e2] text-base text-center">
                  <strong>featured on swiss venture girls</strong>
                  <p className="mt-2">
                    interviewed about our
                    <br />
                    greenably initiative
                  </p>
                </div>
              </div>
              {/* Award/Press Box 6 */}
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
                <div className="w-64 h-40 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src="/asset/env-expo.png"
                    alt="env-expo award"
                    className="w-full h-full object-cover m-0 p-0"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="text-[#eaf7e2] text-base text-center">
                  <strong>
                    champion at bangladesh
                    <br />
                    national environment expo
                  </strong>
                  <p className="mt-2">represented greenably team</p>
                </div>
              </div>
              {/* Award/Press Box 7 */}
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
                <div className="w-64 h-40 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src="/asset/nyas.png"
                    alt="nyas award"
                    className="w-full h-full object-cover m-0 p-0"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="text-[#eaf7e2] text-base text-center">
                  <strong>
                    member at new york
                    <br />
                    academy of sciences
                  </strong>
                  <p className="mt-2">worked on a space habitation project</p>
                </div>
              </div>
              {/* Award/Press Box 8 */}
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
                <div className="w-64 h-40 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src="/asset/cso.png"
                    alt="cso award"
                    className="w-full h-full object-cover m-0 p-0"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="text-[#eaf7e2] text-base text-center">
                  <strong>
                    semi finalist at intl
                    <br />
                    climate science olympiad
                  </strong>
                  <p className="mt-2">
                    proposed innovative solutions to climate crisis
                  </p>
                </div>
              </div>
              {/* Award/Press Box 9 */}
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-4 flex flex-col items-center">
                <div className="w-64 h-40 bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center mb-4">
                  <img
                    src="/asset/codeinplace.png"
                    alt="codeinplace award"
                    className="w-full h-full object-cover m-0 p-0"
                    style={{ display: 'block' }}
                  />
                </div>
                <div className="text-[#eaf7e2] text-base text-center">
                  <strong>stanford code in place</strong>
                  <p className="mt-2">attended 2024 & 2025 cohort</p>
                </div>
              </div>
            </div>
          </section>
          <section id="thoughts" className="mb-24 pt-24">
            <h2 className="text-3xl font-bold text-[#eaf7e2] mb-6">
              my thoughts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8">
              {/* Writing Box 1 */}
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-6 flex flex-col items-center min-h-[180px]">
                <div className="text-[#eaf7e2] text-lg font-semibold mb-2 text-center">
                  how i mistakenly ended up in tech
                </div>
                <p className="text-[#eaf7e2] text-base text-center mb-4">
                  I didn’t grow up thinking I’d be in tech.
                </p>
                <a
                  href="#"
                  className="text-[#b6e3a7] hover:underline font-medium"
                >
                  read more
                </a>
              </div>
              {/* Writing Box 2 */}
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-6 flex flex-col items-center min-h-[180px]">
                <div className="text-[#eaf7e2] text-lg font-semibold mb-2 text-center">
                  human experience
                </div>
                <p className="text-[#eaf7e2] text-base text-center mb-4">
                  “human experience” isn’t about
                  <br />
                  perfect designs or impressive builds.
                </p>
                <a
                  href="#"
                  className="text-[#b6e3a7] hover:underline font-medium"
                >
                  read more
                </a>
              </div>
              {/* Writing Box 3 */}
              <div className="bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-xl p-6 flex flex-col items-center min-h-[180px]">
                <div className="text-[#eaf7e2] text-lg font-semibold mb-2 text-center">
                  the homes we make online
                </div>
                <p className="text-[#eaf7e2] text-base text-center mb-4">
                  the internet wasn’t just connection.
                  <br />
                  it was belonging.
                </p>
                <a
                  href="#"
                  className="text-[#b6e3a7] hover:underline font-medium"
                >
                  read more
                </a>
              </div>
            </div>
          </section>
          <section id="about" className="mb-24 pt-24">
            <h2 className="text-3xl font-bold text-[#eaf7e2] mb-6">
              more about me
            </h2>
            <ul className="list-disc list-inside text-[#eaf7e2] text-lg space-y-2 mt-4">
              <li>i'm 17, a senior in high school</li>
              <li>i'm from bangladesh and based in the us</li>
              <li>i love tech, engineering, design</li>
              <li>i like when things give out the human feeling</li>
            </ul>
          </section>
          <section id="contact" className="mb-24 pt-24">
            <h2 className="text-3xl font-bold text-[#eaf7e2] mb-6">
              contact me
            </h2>
            <div className="flex flex-col items-start gap-4 mt-6">
              <a
                href="https://www.linkedin.com/in/afia-khanom-ava"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0a66c2] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#084b8a] transition"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com/aafia_ava"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1da1f2] text-white px-6 py-2 rounded-lg font-semibold shadow hover:bg-[#0d8ddb] transition"
              >
                Twitter
              </a>
              <div className="flex items-center gap-2">
                <span className="bg-[#eaf7e2] text-black px-6 py-2 rounded-lg font-semibold shadow select-all">
                  afiakhanomava@gmail.com
                </span>
              </div>
            </div>
          </section>
        </section>
        {showNav && (
          <div className="hidden md:flex flex-row items-end gap-10 pr-4 pt-24 sticky top-24 h-fit">
            <div
              className="relative mr-16"
              style={{ width: '220px', height: '360px' }}
            >
              <div
                className="absolute left-[40px] top-[-32px] w-52 h-52 bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-2xl flex items-center justify-center overflow-hidden z-20"
                style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.7)' }}
              >
                <img
                  src="/asset/photo1.jpg"
                  alt="Your Photo 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div
                className="absolute left-[-144px] top-32 w-52 h-52 bg-black/80 border-2 border-[#eaf7e2] rounded-xl shadow-2xl flex items-center justify-center overflow-hidden z-10"
                style={{ boxShadow: '0 8px 32px 0 rgba(0,0,0,0.7)' }}
              >
                <img
                  src="/asset/photo2.jpg"
                  alt="Your Photo 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <nav className="flex flex-col items-end gap-6 ml-8">
              <a
                href="#things"
                className="text-[#eaf7e2] hover:text-[#d6e7d0] font-semibold text-lg transition"
              >
                things i make
              </a>
              <a
                href="#awards"
                className="text-[#eaf7e2] hover:text-[#d6e7d0] font-semibold text-lg transition"
              >
                awards & press
              </a>
              <a
                href="#thoughts"
                className="text-[#eaf7e2] hover:text-[#d6e7d0] font-semibold text-lg transition"
              >
                my thoughts
              </a>
              <a
                href="#about"
                className="text-[#eaf7e2] hover:text-[#d6e7d0] font-semibold text-lg transition"
              >
                more about me
              </a>
              <a
                href="#contact"
                className="text-[#eaf7e2] hover:text-[#d6e7d0] font-semibold text-lg transition"
              >
                contact me
              </a>
            </nav>
          </div>
        )}
        {showScrollTop && (
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-8 right-8 z-50 bg-[#eaf7e2] text-black px-5 py-3 rounded-full shadow-lg font-bold text-lg hover:bg-[#d6e7d0] transition"
            aria-label="Scroll to top"
          >
            ↑ Top
          </button>
        )}
      </div>
    </main>
  );
}

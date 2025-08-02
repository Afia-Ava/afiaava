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
            </div>
          </section>
          <section id="thoughts" className="mb-24 pt-24">
            <h2 className="text-3xl font-bold text-[#eaf7e2] mb-6">
              my thoughts
            </h2>
          </section>
          <section id="about" className="mb-24 pt-24">
            <h2 className="text-3xl font-bold text-[#eaf7e2] mb-6">
              more about me
            </h2>
          </section>
          <section id="contact" className="mb-24 pt-24">
            <h2 className="text-3xl font-bold text-[#eaf7e2] mb-6">
              contact me
            </h2>
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

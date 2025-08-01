export default function Home() {
  return (
    <main className="flex items-start justify-center min-h-screen bg-black px-4 pt-12">
      <div className="flex flex-col md:flex-row w-full max-w-7xl gap-8 md:gap-20 items-center md:items-stretch">
        {}
        <section className="flex-1 flex flex-col justify-center md:justify-center py-12 md:py-0 md:ml-16 lg:ml-24">
          <div className="mb-8 md:mb-0">
            <h1 className="text-left text-6xl md:text-7xl mb-6 font-bold tracking-wide text-yellow-400 font-[var(--font-cinzel)] drop-shadow-lg">
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
        </section>
      </div>
    </main>
  );
}

'use client';
import Link from 'next/link';

export default function ArticleHowEndedUpInTech() {
  return (
    <main className="min-h-screen bg-black text-[#eaf7e2] pt-16 pb-32">
      <div className="max-w-3xl ml-20 mr-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-4">
          How I Mistakenly Ended Up in Tech
        </h1>
        <p className="mb-4 text-lg">
          I didn&apos;t grow up thinking I&apos;d be in tech.
          <br />
          In fact, tech wasn’t even on my radar.
        </p>
        <p className="mb-4 text-lg">
          Growing up, I wasn&apos;t the kid tearing apart computers or writing
          code in middle school. I was just curious. I liked solving problems,
          making things, and figuring out how stuff worked — but I didn&apos;t
          have a name for that. I didn&apos;t know “engineering” or “computer
          science” were things real people did. Especially not people like me.
        </p>
        <p className="mb-4 text-lg">
          I still remember the first time I opened up a drag-and-drop game maker
          when I was maybe 12. I didn&apos;t even know it was “coding.” I was
          just trying to build a game like the ones I played. I got obsessed —
          not with the code, but with the feeling of bringing something to life.
          It never occurred to me that this counted as tech. I just liked making
          stuff.
        </p>
        <p className="mb-4 text-lg">
          For years, I kept stumbling into tech without realizing it. I joined a
          robotics team because a friend asked. I built a website for a school
          project because I wanted it to look better. I learned Python during
          lockdown out of boredom. None of it felt “technical” at the time — it
          just felt like creating, like learning how to make the ideas in my
          head real.
        </p>
        <p className="mb-4 text-lg">
          But eventually, I started noticing a pattern. All the things I loved
          doing — solving problems, building tools, improving systems — were
          somehow... tech. It wasn&apos;t until people around me started calling
          me “technical” that I even saw it. I still hesitate using that word to
          describe myself. Sometimes I feel like I just took a wrong turn, and
          now I&apos;m deep in this world of startups, code, and software,
          trying to figure it out as I go.
        </p>
        <p className="mb-4 text-lg">And honestly? I like it here.</p>
        <p className="mb-4 text-lg">
          Tech became the language I used to express my ideas. It gave me
          superpowers. It helped me go from “I wish this existed” to “I built
          this.” I didn&apos;t plan to end up here, but looking back, it makes
          sense. I may not have grown up dreaming of a tech career, but I grew
          up dreaming of impact. And tech just happened to be the path that let
          me chase that — faster, louder, and with more reach than I ever
          imagined.
        </p>
        <p className="mb-4 text-lg">
          So no, I didn&apos;t set out to be in tech. But I kept following my
          curiosity. I kept building. And somehow, I ended up exactly where I
          was meant to be.
        </p>
        <Link href="/" className="text-[#b6e3a7] hover:underline font-medium">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}

'use client';
import Link from 'next/link';

export default function ArticleHomesWeMakeOnline() {
  return (
    <main className="min-h-screen bg-black text-[#eaf7e2] pt-16 pb-32">
      <div className="max-w-3xl ml-20 mr-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 mt-4">
          The Homes We Make Online
        </h1>
        <p className="mb-4 text-lg">
          The internet wasn&apos;t just connection.
          <br />
          It was belonging.
        </p>
        <p className="mb-4 text-lg">
          Before I even knew what I was looking for, I found pieces of myself
          online.
          <br />
          In random forums. In weird YouTube rabbit holes. In late-night
          conversations with people I’d never meet in person.
        </p>
        <p className="mb-4 text-lg">
          It’s easy now to talk about the internet like it’s just noise. Or
          content. Or algorithms. But back then — and even now, in quieter
          corners — it felt like something else.
          <br />A place. A feeling. A home you could carry with you.
        </p>
        <p className="mb-4 text-lg">
          Some of us didn’t grow up with people around who got it. We were the
          odd ones. The curious ones. The ones thinking about things no one
          around us was talking about. So we went online. Not to escape — but to
          find.
          <br />
          To find people who asked the same questions. Who built weird projects
          just for fun. Who cared deeply about things the world didn’t seem to
          notice.
        </p>
        <p className="mb-4 text-lg">
          And that changed everything.
          <br />
          Because once you feel that kind of recognition — that “you too?”
          feeling — it’s hard to unfeel it.
          <br />
          You realize you’re not weird for wanting more. You’re not alone for
          dreaming bigger. You’re just early.
        </p>
        <p className="mb-4 text-lg">
          Over time, we stopped just joining spaces. We started making them. A
          Discord server. A Notion doc turned community. A random side project
          that grew into something real.
          <br />
          We started creating the rooms we wished we had — for people like us.
          And those became homes, too. Not flashy. Not perfect. But real.
        </p>
        <p className="mb-4 text-lg">
          That’s the internet I fell in love with. Not the one chasing
          attention, but the one quietly building belonging.
          <br />
          The one that reminded me — and keeps reminding me — that it’s okay to
          be figuring it out.
          <br />
          That somewhere, someone’s building their own little world too.
        </p>
        <p className="mb-4 text-lg">
          And maybe, if we’re lucky, our worlds overlap. And we get to build
          something together.
        </p>
        <Link href="/" className="text-[#b6e3a7] hover:underline font-medium">
          ← Back to home
        </Link>
      </div>
    </main>
  );
}

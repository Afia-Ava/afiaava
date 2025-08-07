'use client';
import Link from 'next/link';

export default function ArticleHumanExperience() {
  return (
    <main className="min-h-screen bg-black text-[#eaf7e2] pt-16 pb-32">
      <div className="max-w-3xl ml-20 mr-auto">
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
          ← Back to home
        </Link>
      </div>
    </main>
  );
}

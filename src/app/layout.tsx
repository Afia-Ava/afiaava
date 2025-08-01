import type { Metadata } from 'next';
import { Cinzel, EB_Garamond } from 'next/font/google';
import './globals.css';

const cinzel = Cinzel({
  subsets: ['latin'],
  variable: '--font-cinzel',
  weight: ['700'],
});

const garamond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-garamond',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Afia Ava | Portfolio',
  description:
    'Portfolio of a tech, engineering, sustainability, and film enthusiast. Cinematic, modern, and elegant.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${garamond.variable} antialiased bg-black text-white min-h-screen`}
        style={{
          background: 'linear-gradient(120deg, #181818 0%, #232526 100%)',
        }}
      >
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

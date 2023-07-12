import { ReactNode } from 'react';

import './globals.css';
import { Lora, Oswald } from 'next/font/google';
import Hero from '@/components/Hero';
import { Copyright } from '@/components/Copyright';
import { Header } from '@/components/header/Header';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-lora',
});
const oswald = Oswald({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-oswald',
});

export const metadata = {
  title: 'remember',
  description:
    'Uma linha do tempo pessoal construída React, Next.js, TailwindCSS e Typescript',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${lora.variable} ${oswald.variable} bg-slate-100 font-serif text-gray-600`}
      >
        <main className="grid min-h-screen grid-cols-2">
          {/* Left */}
          <div className="relative flex flex-1 flex-col items-start justify-between overflow-hidden border-r border-slate-950/10 bg-white px-12 py-12 xl:px-28">
            {/* Blur */}
            {/* <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" /> */}

            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2  bg-stripes" />

            <Header />

            <Hero />

            <Copyright />
          </div>

          {/* Right */}
          <div className="flex max-h-screen flex-col overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

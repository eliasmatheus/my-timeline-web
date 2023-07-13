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
          {/* Sessão de Landing */}
          <div className="relative flex w-full max-w-3xl flex-1 justify-end justify-self-end overflow-hidden border-r border-slate-950/10 bg-white px-12 py-12 shadow-landing xl:px-20">
            <div className="relative flex w-full  flex-1 flex-col items-start justify-between">
              <Header />

              <Hero />

              <Copyright />
            </div>

            {/* Stripes */}
            <div className="absolute bottom-0 right-2 top-0 w-2  bg-stripes" />
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

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { IWithChildren } from '@src/types';

import '@styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'A.V. Petrov CV',
  description: 'Middle+/Senior fullstack',
};

export default function RootLayout({ children }: IWithChildren) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

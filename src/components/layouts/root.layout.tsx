import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Head from 'next/head';

import { IWithChildren } from '~src/types';

import '~styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'A.V. Petrov CV',
  description: 'Middle+/Senior fullstack',
};

export const RootLayout = ({ children }: IWithChildren) => {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <body className={inter.className}>
        <div className="root-layout">
          {children}
        </div>
      </body>
    </html>
  );
}

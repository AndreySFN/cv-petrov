import { Inter } from 'next/font/google';
import Head from 'next/head';

import { IWithChildren } from '~src/types';

import '~styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const RootLayout = ({ children }: IWithChildren) => {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <div className="root-layout">
          {children}
        </div>
      </body>
    </html>
  );
}

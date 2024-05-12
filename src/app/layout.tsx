import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { IWithChildren } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "A.V. Petrov CV",
  description: "Middle+/Senior fullstack",
};

export default function RootLayout({ children }: IWithChildren) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/favicon.png" sizes="any" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

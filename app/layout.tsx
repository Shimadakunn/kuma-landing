import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

import { Toaster } from "@/components/ui/toaster"

const font = localFont({ src: '../public/fonts/space.ttf' });

export const metadata: Metadata = {
  title: "Kuma",
  description: "Your all-in-one crosschain app.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <meta property="og:image" content="https://emerald-rear-parakeet-3.mypinata.cloud/ipfs/QmTKmmYwF99T1u31X78ejg9MnD4cQ1fLBfwXELMcZeQiug" />
        <meta property="og:title" content="Kuma" />
        <meta property="og:description" content="Your all-in-one crosschain app." />
        <meta property="og:url" content="https://emerald-rear-parakeet-3.mypinata.cloud/ipfs/QmTKmmYwF99T1u31X78ejg9MnD4cQ1fLBfwXELMcZeQiug" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        {children}
        <Toaster />
      </body>
    </html>
  );
}

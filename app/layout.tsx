import type { Metadata } from "next";
import localFont from 'next/font/local';
import "./globals.css";

import { Toaster } from "@/components/ui/toaster"

const font = localFont({ src: '../public/fonts/space.ttf' });

export const metadata: Metadata = {
  title: "Kuma",
  description: "Make blockchain transactions easier and more secure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

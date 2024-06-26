import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thao Gemini",
  description: "Welcome to Thao Gemini",
  openGraph: {
    title: 'Thao Gemini',
    description: '',
    images: [`https://duongthao.vercel.app/og.svg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {children}
        </body>
    </html>
  );
}

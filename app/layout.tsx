import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dry Cleaners of Chobham | Professional Dry Cleaning in Surrey",
  description: "Trusted dry cleaning, laundry, and alterations in Chobham, Woking, Surrey. Expert care for your finest clothes since day one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${inter.variable} antialiased font-body`}
      >
        <nav className="bg-[#1B3A5C] border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <Link href="/" className="text-xl font-heading font-bold text-white">
                Dry Cleaners of Chobham
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="text-white hover:text-[#4FC3F7] transition-colors">
                  Home
                </Link>
                <Link href="/services" className="text-white hover:text-[#4FC3F7] transition-colors">
                  Services
                </Link>
                <Link href="/about" className="text-white hover:text-[#4FC3F7] transition-colors">
                  About
                </Link>
                <Link href="/contact" className="text-white hover:text-[#4FC3F7] transition-colors">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}

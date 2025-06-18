import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fashism - Discover Your Style",
  description: "Welcome to Fashism - Your destination for fashion and style",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="text-2xl font-bold tracking-widest">Fashism</Link>
            </div>
          </div>
        </nav>
        <div className="pt-16">
          {children}
        </div>
        <footer className="bg-gray-900 text-white py-8 mt-12">
          <div className="container mx-auto px-4 text-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Fashism. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}

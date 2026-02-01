import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import MobileMenu from "./components/MobileMenu";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Investify | Connect Startups with Investors",
  description: "Investify is a platform connecting innovative startups with potential investors. Find investment opportunities or showcase your startup.",
  keywords: "startups, investors, venture capital, angel investors, startup funding, investment platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <nav className="bg-white shadow-lg relative z-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="text-2xl font-bold text-indigo-600">Investify</Link>
              </div>
              {/* Desktop Menu */}
              <div className="hidden md:flex space-x-8 items-center">
                <Link href="/" className="text-gray-700 hover:text-indigo-600">Home</Link>
                <Link href="/startups" className="text-gray-700 hover:text-indigo-600">Startups</Link>
                <Link href="/investors" className="text-gray-700 hover:text-indigo-600">Investors</Link>
                <Link href="/about" className="text-gray-700 hover:text-indigo-600">About</Link>
                <Link href="/contact" className="text-gray-700 hover:text-indigo-600">Contact</Link>
                <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
                  <Link href="/login" className="text-gray-700 hover:text-indigo-600">Login</Link>
                  <Link href="/signup" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">Sign Up</Link>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="flex items-center md:hidden">
                <MobileMenu />
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-4">About Investify</h3>
                <p className="text-gray-600 text-sm">Connecting innovative startups with visionary investors to build the future together.</p>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/startups" className="text-gray-600 hover:text-indigo-600">Find Startups</Link></li>
                  <li><Link href="/investors" className="text-gray-600 hover:text-indigo-600">Find Investors</Link></li>
                  <li><Link href="/about" className="text-gray-600 hover:text-indigo-600">About Us</Link></li>
                  <li><Link href="/contact" className="text-gray-600 hover:text-indigo-600">Contact</Link></li>
                </ul>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-4">Resources</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/blog" className="text-gray-600 hover:text-indigo-600">Blog</Link></li>
                  <li><Link href="/faq" className="text-gray-600 hover:text-indigo-600">FAQ</Link></li>
                  <li><Link href="/terms" className="text-gray-600 hover:text-indigo-600">Terms of Service</Link></li>
                  <li><Link href="/privacy" className="text-gray-600 hover:text-indigo-600">Privacy Policy</Link></li>
                </ul>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
                <div className="flex justify-center sm:justify-start space-x-4 mb-4">
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                    </svg>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-indigo-600">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
                <p className="text-sm text-gray-600">Stay updated with our newsletter</p>
                <form className="mt-2 max-w-xs mx-auto sm:mx-0">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                </form>
              </div>
            </div>
            <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
              © 2025 Investify. All rights reserved.
            </div>
          </div>
        </footer>
        </Providers>
      </body>
    </html>
  );
}

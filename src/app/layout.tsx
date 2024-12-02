import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Cursor from "../components/custom_cursor";
import Link from 'next/link';
import ThemeToggle from "@/components/theme_toggle";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "nicknack",
  description: "my website :3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Cursor />
        <header className="bg-darker text-accent pt-2">
          <div className="container mx-auto flex items-center p-2">
            <h1 className="text-6xl font-light text-center flex-grow">PROJECTS</h1>
            <div className="flex items-center absolute right-6 group">
              <span className="opacity-0 transition-opacity duration-300 mr-2 group-hover:opacity-100">
                a light switch :)
              </span>
              <ThemeToggle />
            </div>
          </div>
          <nav className="bg-dark">
            <ul className="flex justify-center space-x-4">
              <li>
                <Link href="/" className="block text-main_text py-4 px-6 transition duration-300 ease-in-out hover:text-accent hover:bg-darker">HOME</Link>
              </li>
              <li>
                <Link href="/endless" className="block text-main_text py-4 px-6 transition duration-300 ease-in-out hover:text-accent hover:bg-darker">ENDLESS SCROLL</Link>
              </li>
              <li>
                <Link href="/chat" className="block text-main_text py-4 px-6 transition duration-300 ease-in-out hover:text-accent hover:bg-darker">COMING SOON</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow text-center mx-auto my-8">
          {children}
        </main>

        <footer className="bg-dark text-main_text py-4">
          <div className="container mx-auto text-center">
            © 2024 Nikita Shadrin
          </div>
        </footer>
      </body>
    </html>
  );
}
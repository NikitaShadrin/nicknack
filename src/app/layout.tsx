import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Cursor from "../components/custom_cursor";
import Link from 'next/link';
import ThemeToggle from "@/components/theme_toggle";

const SometypeMono = localFont({
  src: "./fonts/SometypeMono.ttf",
  variable: "--font-sometype-mono",
  weight: "100 900",
});
const StickNoBills = localFont({
  src: "./fonts/StickNoBills.ttf",
  variable: "--font-stick-no-bills",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "NickNack",
  description: "my website!!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${SometypeMono.variable} ${StickNoBills.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="hidden md:block">
          <Cursor />
        </div>
        <header className="bg-darker text-accent pt-2">
          <div className="container mx-auto flex items-center p-2">
            <h2 className="text-6xl text-center flex-grow">NICKNACK</h2>
            <div className="flex items-center absolute right-6 group">
              <span className="opacity-0 transition-opacity duration-300 mr-2 md:group-hover:opacity-100">
                a light switch :)
              </span>
              <ThemeToggle />
            </div>
          </div>
          <nav className="bg-dark">
            <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 px-2 py-3 md:py-0">
              <li>
                <Link href="/" className="block text-main_text py-4 px-6 transition duration-300 ease-in-out hover:text-accent hover:bg-darker">HOME</Link>
              </li>
              <li>
                <Link href="/projects" className="block text-main_text py-4 px-6 transition duration-300 ease-in-out hover:text-accent hover:bg-darker">PROJECTS</Link>
              </li>
              <li className="group relative">
              <span className="block text-main_text py-4 px-6 transition duration-300 ease-in-out hover:text-accent hover:bg-darker">
                MINIS
              </span>
                <div className="absolute bg-dark right-0 md:left-0 top-full min-w-max z-10 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none group-hover:pointer-events-auto">
                  <Link 
                    href="/endless" 
                    className="block text-main_text py-2 px-6 transition duration-300 ease-in-out hover:text-accent whitespace-nowrap">ENDLESS SCROLL</Link>
                  <div className="h-px bg-accent mx-4"></div>
                  <Link 
                    href="/todo" 
                    className="block text-main_text py-2 px-6 transition duration-300 ease-in-out hover:text-accent whitespace-nowrap">TODO</Link>
                </div>
              </li>
              <li>
                <Link href="/updates" className="block text-main_text py-4 px-6 transition duration-300 ease-in-out hover:text-accent hover:bg-darker">UPDATES</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main className="flex-grow text-center mx-auto my-8">
          {children}
        </main>

        <footer className="bg-dark text-main_text py-4">
          <div className="container mx-auto text-center">
            © 2025 Nikita Shadrin
          </div>
        </footer>
      </body>
    </html>
  );
}
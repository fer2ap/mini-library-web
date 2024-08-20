import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Mini Library</title>
      </head>
      <body className="flex flex-row w-64 h-screen bg-gray-800 text-gray-800">
        <div className="w-64 bg-gray-200 p-4 shadow-md h-screen fixed">
          <Link href="/"><h2 className="text-center text-xl font-semibold mb-4">My Mini Library</h2></Link>
          <ul>
            <li className="mb-2">
              <Link href="/users" className="block px-4 py-2 rounded hover:bg-gray-300">
                Create New User
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/books" className="block px-4 py-2 rounded hover:bg-gray-300">
                Insert New Book
              </Link>
            </li>
            <li className="mb-2">
              <Link href="/library" className="block px-4 py-2 rounded hover:bg-gray-300">
                List My Books
              </Link>
            </li>
          </ul>
        </div>
        <main className="bg-gray-200 p-4 h-screen w-screen">
          {children}
        </main>
      </body>
    </html >
  );
}

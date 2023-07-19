import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sanity Next.js Portfolio Site",
  description: "A personal portfolio site built with Sanity and Next.js",
  openGraph: {
    images:
      "https://gitlab.com/victoreke/sanity/-/raw/6459488ed1797eddda6cd2bf9aa4b811587e7118/public/og.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} dark:bg-zinc-900 bg-white dark:text-white text-zinc-700`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

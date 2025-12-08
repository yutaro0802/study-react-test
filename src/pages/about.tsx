import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "../components/Footer"
import { Header } from "../components/Header";
import { Headline } from "../components/Headline";
import { MainPage } from "../components/MainPage";
import { useCallback } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const foo = 1

  const handleClick = useCallback((e) => {
          console.log(e.target.href);
          e.preventDefault();
          alert(foo)
        }, []);
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <Head>
        <title>about</title>
      </Head>
      <butto href="/about" onClick={handleClick}>ぼたん</butto>
      <Header />
      <Headline title="About Page" page="about" />
      <MainPage page="about" />
      <Footer />
    </div>
  );
}

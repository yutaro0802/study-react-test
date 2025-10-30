import Head from "next/head"
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "../components/Footer"
import { Headline } from "../components/Headline"
import { MainPage } from "@/components/MainPage";
import { Header } from "@/components/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <Head>
        <title>
          index
        </title>
      </Head>
      <Header />
      <Headline  title="About Page" page="about"/>
      <MainPage page="about"/>
      <Footer />
    </div>
  );
}

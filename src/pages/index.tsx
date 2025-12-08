import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Headline } from "../components/Headline";
import { MainPage } from "../components/MainPage";
import { useEffect, useState } from "react";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [foo, setFoo] = useState(1);

  const handleClick = (e) => {
    setFoo(foo => foo + 1);
    setFoo(foo => foo + 1);
  };

  useEffect(() => {
    console.log("マウント時");
    document.body.style.backgroundColor = "lightblue";

    return () => {
      console.log("アンマウント時");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <Head>
        <title>index</title>
      </Head>
      <h1>{foo}</h1>
      <button onClick={handleClick}>ぼたん</button>
      <Header />
      <Headline title="Index Page" page="index" />
      <MainPage page="index" />
      <Footer />
    </div>
  );

  //TODO: atodenaosu
}

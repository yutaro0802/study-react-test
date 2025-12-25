import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Headline } from "../components/Headline";
import { MainPage } from "../components/MainPage";
import React, { useCallback, useEffect, useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(true);

  const handleClick = useCallback(() => {
    if (count < 10) {
      setCount((count) => count + 1);
    }
  }, []);

  const handleDisplay = () => {
    setIsShow((isShow) => !isShow);
  };

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 5) {
      alert("5文字以内にしてください");
      return;
    }
    setText(e.target.value.trim());
  }, []);

  useEffect(() => {
    // console.log("foo")
    document.body.style.backgroundColor = "lightblue";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <Head>
        <title>about</title>
      </Head>
      {isShow ? <h1>{count}</h1> : null}
      <button onClick={handleClick}>ぼたん</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <Header />
      <Headline title="About Page" page="about" />
      <MainPage page="about" />
      <Footer />
    </div>
  );
}

import Head from "next/head";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Headline } from "../components/Headline";
import { MainPage } from "../components/MainPage";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type aboutProps = ({
  doubleCount : number;
  isShow: boolean;
  handleClick: () => void;
  handleDisplay: () => void;
  text: string;
  array: string[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleAdd: () => void;
})

const About =(props: aboutProps) => {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <Head>
        <title>about</title>
      </Head>

      {props.isShow ? <h1>{props.doubleCount}</h1> : null}
      <button onClick={props.handleClick}>ぼたん</button>
      <button onClick={props.handleDisplay}>{props.isShow ? "非表示" : "表示"}</button> 、

      <input type="text" value={props.text} onChange={props.handleChange} />
      <button onClick={props.handleAdd}>追加</button>
      <ul>
        {props.array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
      <Header />
      <Headline title="About Page" page="about" />
      <MainPage/>
      <Footer />
    </div>
  );
}
export default About;

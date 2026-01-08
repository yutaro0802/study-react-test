import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { useCounter } from "@/src/hooks/useCounter";
import { useInputArray } from "@/src/hooks/useInputArray";
import { useBgLightBlue } from "@/src/hooks/useBgLightBlue";



export default function App({ Component, pageProps }: AppProps) {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgLightBlue();

  return (
    <>
      <Component {...pageProps} {...counter} {...inputArray}/>
    </>
  );
}

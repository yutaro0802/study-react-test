import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { useCounter } from "@/src/hooks/useCounter";
import { useInputArray } from "@/src/hooks/useInputArray";
import { useBgColor } from "@/src/hooks/useBgColor";



const App = ({ Component, pageProps }: AppProps) => {
  const counter = useCounter();
  const inputArray = useInputArray();
  useBgColor();

  return (
    <>
      <Component {...pageProps} {...counter} {...inputArray}/>
    </>
  );
}
export default App;

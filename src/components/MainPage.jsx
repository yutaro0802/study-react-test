import Image from "next/image";
import { Links } from "./Links";
import { useCallback, useState } from "react";

const ITEMS = [
  {
    key: "1",
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    description: "Deploy now",
    className:
      "rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto",
    imgClassName: "dark:invert",
    src: "/vercel.svg",
    alt: "Vercel logomark",
    width: 20,
    height: 20,
  },

  {
    key: "2",
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    description: "Read our docs",
    className:
      "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]",
  },

  {
    key: "3",
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    description: "Read our docs",
    className:
      "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]",
  },

  {
    key: "4",
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app",
    description: "Read our docs",
    className:
      "rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]",
    imgClassName: "dark:invert",
    src: "/vercel.svg",
    alt: "Vercel logomark",
    width: 20,
    height: 20,
  },
];

export const MainPage = (props) => {
  const [items, setItems] = useState(ITEMS);
  const handleReduce = useCallback(() => {
    setItems((prevItems) => {
      return prevItems.slice(0, prevItems.length - 1);
    });
  }, []);

  return (
    <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <Image
        className="dark:invert"
        src="/next.svg"
        alt="Next.js logo"
        width={180}
        height={38}
        priority
      />
      <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
        <li className="mb-2 tracking-[-.01em]">
          アイテムの数は{items.length}個です
          <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded"></code>
          <button onClick={handleReduce}>減らす</button>
        </li>
        <li className="tracking-[-.01em]">
          Save and see your changes instantly.
        </li>
      </ol>
      <Links items={items} handleReduce={handleReduce} />
    </main>
  );
};

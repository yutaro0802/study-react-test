import Image from "next/image";

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



export function Links() {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row">
      {ITEMS.map((item, index) => {
        return (
          <a
            key={index}
            className={item.className}
            href={item.href}
            // target="_blank"
            // rel="noopener noreferrer"
          >
            <Image
              className={item.imgClassName}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
            />
            {item.description}
          </a>
        );
      })}
    </div>
  );
}

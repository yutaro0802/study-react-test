import Link from "next/link";

const NAV_ITEMS = [
  {href: "/", label: "index"},
  {href: "/about", label: "About"},
]

export const Header = () => {
  return (
    <header className="row-start-1 flex gap-[24px] flex-wrap items-center justify-center">
      {NAV_ITEMS.map((item) => {
        return (
          <Link key={item.href} href={item.href} >
            {item.label}
          </Link>
        )
      })}
    </header>
  );
}

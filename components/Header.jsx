import Link from "next/link";

export function Header() {
  return (
    <header className="row-start-1 flex gap-[24px] flex-wrap items-center justify-center">
      <Link href="/">Index</Link>
      <Link href="/about">About</Link>
    </header>
  );
}

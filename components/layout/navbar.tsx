import Link from "next/link";
import Container from "./container";
import Button from "../ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-lg font-bold tracking-tight md:text-xl"
          >
            Gulf Digital Solutions
          </Link>

          <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </nav>

          <div className="hidden md:block">
            <Button className="px-5 py-2 text-sm">
              Get Started
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}
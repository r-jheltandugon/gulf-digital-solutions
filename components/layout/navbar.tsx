"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import Container from "./container";
import Button from "../ui/button";

import ThemeToggle from "../ui/theme-toggle";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
          
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

          <ThemeToggle />
        </div>

        {isOpen && (
          <div className="border-t py-6 md:hidden">
            <nav className="flex flex-col gap-4 text-sm font-medium">
              <Link href="/">Home</Link>
              <Link href="/services">Services</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>

              <Button className="mt-4 w-full">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
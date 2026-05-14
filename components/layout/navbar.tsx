"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import Container from "./container";
import Button from "../ui/button";
import ThemeToggle from "../ui/theme-toggle";

const navLinks = [
  { href: "/", label: "Home" },

  {
    label: "Services",
    href: "/services",
    children: [
      { href: "/services/website-design", label: "Website Design" },
      { href: "/services/website-advertising-uae", label: "Web Advertising UAE" },
      { href: "/services/website-advertising-abu-dhabi", label: "Web Advertising Abu Dhabi" },
      { href: "/services/website-advertising-dubai", label: "Web Advertising Dubai" },
      { href: "/services/seo-optimization", label: "SEO Optimization" },
      { href: "/services/mobile-optimization", label: "Mobile Optimization" },
      { href: "/services/whatsapp-integration", label: "WhatsApp Integration" },
      { href: "/services/maintenance", label: "Website Maintenance" },
    ],
  },

  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">

          {/* LEFT: LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Gulf Digital Solutions"
              width={38}
              height={38}
              className="rounded-full"
              priority
            />

            <span className="text-base font-bold tracking-tight md:text-lg">
              Gulf Digital Solutions
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => {
              const isActive =
                link.href === pathname ||
                (link.href !== "/" && pathname.startsWith(link.href));

              // NORMAL LINK
              if (!link.children) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition hover:text-blue-600 ${
                      isActive
                        ? "text-blue-600"
                        : "text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              }

              // SERVICES GROUP (simple version for now)
              return (
                <div key={link.href} className="relative group">
                  <Link
                    href={link.href}
                    className={`transition hover:text-blue-600 ${
                      isActive
                        ? "text-blue-600"
                        : "text-slate-700 dark:text-slate-200"
                    }`}
                  >
                    {link.label}
                  </Link>

                  {/* HOVER BRIDGE AREA (fixes disappearing issue) */}
                  <div className="absolute left-0 top-full z-50 mt-2 hidden min-w-[220px] rounded-xl border bg-white p-2 shadow-xl group-hover:block dark:border-slate-800 dark:bg-slate-900 before:absolute before:-top-2 before:left-0 before:h-2 before:w-full" />

                  {/* DROPDOWN */}
                  <div className="absolute left-0 top-full z-50 mt-2 hidden min-w-[220px] rounded-xl border bg-white p-2 shadow-xl group-hover:block dark:border-slate-800 dark:bg-slate-900">
                    {link.children?.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-blue-600 dark:text-slate-200 dark:hover:bg-slate-800"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Link href="/contact" className="hidden md:block">
              <Button className="px-5 py-2 text-sm">
                Get Started
              </Button>
            </Link>

            {/* MOBILE BUTTON */}
            <button
              className="md:hidden rounded-lg p-2 hover:bg-slate-100 dark:hover:bg-slate-900"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden border-t py-6 animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive =
                  link.href === pathname ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                return (
                  <div key={link.label}>
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`py-2 transition ${
                        isActive
                          ? "text-blue-600"
                          : "text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      {link.label}
                    </Link>

                    {/* MOBILE CHILD LINKS */}
                    {link.children && (
                      <div className="ml-4 mt-2 flex flex-col gap-2 border-l pl-4">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="text-sm text-slate-500 hover:text-blue-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}

              <Link href="/contact" onClick={() => setIsOpen(false)}>
                <Button className="mt-4 w-full">Get Started</Button>
              </Link>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
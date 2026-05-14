import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t">
      <Container>
        <div className="grid gap-10 py-14 md:grid-cols-4">

          {/* BRAND */}
          <div>
            <h2 className="text-lg font-semibold">
              Gulf Digital Solutions
            </h2>

            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              Helping businesses in UAE grow through modern websites, SEO, and web advertising strategies that generate real customers.
            </p>

            {/* SOCIAL */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/share/1D9TegYWE6/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full border p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <FaFacebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/gulf.digitalsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full border p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Services
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><Link href="/services/website-design">Website Design</Link></li>
              <li><Link href="/services/seo-optimization">SEO Optimization</Link></li>
              <li><Link href="/services/website-advertising">Web Advertising UAE</Link></li>
              <li><Link href="/services/mobile-optimization">Mobile Optimization</Link></li>
              <li><Link href="/services/whatsapp-integration">WhatsApp Integration</Link></li>
              <li><Link href="/services/maintenance">Website Maintenance</Link></li>
            </ul>
          </div>

          {/* UAE LOCATIONS */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              UAE Locations
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li>
                <Link href="/services/website-advertising-abu-dhabi">
                  Abu Dhabi Web Advertising
                </Link>
              </li>
              <li>
                <Link href="/services/website-advertising-dubai">
                  Dubai Web Advertising
                </Link>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
              Company
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t py-6 text-center text-sm text-slate-500">
          © 2026 Gulf Digital Solutions. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
import { FaFacebook, FaInstagram } from "react-icons/fa";
import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          
          {/* Left Side */}
          <div>
            <h2 className="text-lg font-semibold">
              Gulf Digital Solutions
            </h2>

            <p className="text-sm text-slate-500">
              Helping local businesses grow online.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1D9TegYWE6/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="
                rounded-full border p-2
                transition hover:bg-slate-100
                dark:hover:bg-slate-800
              "
            >
              <FaFacebook size={18} />
            </a>

            <a
              href="https://www.instagram.com/gulf.digitalsolutions/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="
                rounded-full border p-2
                transition hover:bg-slate-100
                dark:hover:bg-slate-800
              "
            >
              <FaInstagram size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            © 2026 Gulf Digital Solutions. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
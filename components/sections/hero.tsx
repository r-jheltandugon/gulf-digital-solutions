"use client";

import { motion } from "framer-motion";
import Container from "../layout/container";
import Button from "../ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-28 md:py-40">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-medium text-blue-600"
          >
            Modern Digital Solutions For Local Businesses
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl"
          >
            Grow Your Business Online With A Strong Digital Presence
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300"
          >
            We help local businesses attract more customers,
            improve credibility, and generate more inquiries
            through high-performance websites and digital
            solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button>Get Free Consultation</Button>

            <Button className="bg-slate-900 hover:bg-slate-800">
              WhatsApp Us
            </Button>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
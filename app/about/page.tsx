import {
  AboutHero,
  Mission,
  AboutCTA,
} from "@/components/sections/about";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export default function AboutPage() {
  return (
    <>
    <Navbar />
    <AboutHero />
    <Mission />
    <AboutCTA />
    <Footer />
    </>
);
}
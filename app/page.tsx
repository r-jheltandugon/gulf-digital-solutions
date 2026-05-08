import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <section className="flex h-[80vh] items-center justify-center">
          <h1 className="text-5xl font-bold">
            Gulf Digital Solutions
          </h1>
        </section>
      </main>

      <Footer />
    </>
  );
}
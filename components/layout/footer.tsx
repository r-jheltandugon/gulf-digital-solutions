import Container from "./container";

export default function Footer() {
  return (
    <footer className="border-t py-10">
      <Container>
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-semibold">
              Gulf Digital Solutions
            </h2>

            <p className="text-sm text-slate-500">
              Helping local businesses grow online.
            </p>
          </div>

          <p className="text-sm text-slate-500">
            © 2026 Gulf Digital Solutions. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
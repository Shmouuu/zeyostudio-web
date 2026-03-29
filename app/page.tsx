import { MeshGradient } from "@/components/mesh-gradient";

export default function Home() {
  return (
    <>
      <MeshGradient />
      <div className="flex min-h-screen flex-col">
        <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
          <h1 className="mb-8 text-4xl font-bold uppercase tracking-[0.15em] text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            ZEYO STUDIO
          </h1>
          <a
            href="mailto:samuel@zeyostudio.com"
            className="rounded-full border border-foreground/20 px-8 py-3 text-lg tracking-wide text-foreground/80 transition-all duration-300 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-foreground/5 hover:text-foreground"
          >
            Contact us
          </a>
        </main>
        <footer className="pb-8 text-center text-sm tracking-widest text-foreground/40">
          Paris 2026
        </footer>
      </div>
    </>
  );
}

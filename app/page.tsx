export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-black">
      <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
        <h1 className="mb-8 text-4xl tracking-[0.15em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="font-extrabold">ZEYO</span>{" "}
          <span className="font-normal">STUDIO</span>
        </h1>
        <a
          href="mailto:samuel@zeyostudio.com"
          className="rounded-full border border-white/10 px-5 py-2 font-serif text-sm tracking-wide text-white/70 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:text-white"
        >
          Contact us
        </a>
      </main>
      <footer className="pb-8 text-center text-sm tracking-widest text-white/40">
        Paris 2026
      </footer>
    </div>
  );
}

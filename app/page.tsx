export default function Home() {
  return (
    <div className="fixed inset-0 flex flex-col bg-black">
      <header className="pt-8 text-center">
        <a
          href="mailto:samuel@zeyostudio.com"
          className="font-serif text-sm tracking-wide text-white/60 transition-all duration-300 hover:text-white"
        >
          Contact us
        </a>
      </header>
      <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl tracking-[0.15em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="font-extrabold">ZEYO</span>{" "}
          <span className="font-extralight">STUDIO</span>
        </h1>
      </main>
      <footer className="pb-8 text-center font-serif text-sm tracking-widest text-white/40">
        Paris, 2026
      </footer>
    </div>
  );
}

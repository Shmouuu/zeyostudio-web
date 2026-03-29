export default function Home() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-black">
      <main className="flex flex-1 flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl tracking-[0.15em] text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <span className="font-extrabold">ZEYO</span>{" "}
          <span className="font-extralight">STUDIO</span>
        </h1>
        <a
          href="mailto:samuel@zeyostudio.com"
          className="mt-8 font-serif text-base tracking-wide text-white/60 transition-all duration-300 hover:text-white"
        >
          Contact us
        </a>
      </main>
      <footer className="pb-8 text-center font-serif text-sm tracking-widest text-white/40">
        Paris, 2026
      </footer>
    </div>
  );
}

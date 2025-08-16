export default function Hero() {
  return (
    <section className="relative">
      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[0.9]">
            MACBOOK
          </h1>
          <div className="mt-3 inline-flex items-center border border-white/60 rounded-2xl px-5 py-2">
            <span className="text-3xl md:text-5xl font-extrabold tracking-tight">PRO</span>
          </div>

          <p className="mt-6 text-zinc-300 max-w-xl">
            Desempenho de estúdio. Portabilidade de todos os dias.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#comprar" className="btn rounded-xl bg-green-500 hover:bg-green-600 text-black border-none px-8 py-3">
              COMPRAR AGORA
            </a>
            <div className="w-full h-0 md:hidden" />
            <a href="#info" className="px-4 py-2 rounded-full border border-white/20">Informações</a>
            <a href="#frete" className="px-4 py-2 rounded-full border border-white/20">Custo de Frete</a>
            <a href="#duvidas" className="px-4 py-2 rounded-full border border-white/20">Dúvidas</a>
            <a href="#precos" className="px-4 py-2 rounded-full border border-white/20">Preços</a>
          </div>
        </div>

        {/* Imagem herói (estática) */}
        <div className="relative">
          <img
            src="/m4-hero.png" /* use m4-hero-transparent.png se preferir */
            alt="MacBook Pro"
            className="w-full h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
          />
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Hero() {
  return (
    <header className="relative bg-black text-white">
      {/* Topbar */}
      <div className="mx-auto w-full max-w-7xl px-6 pt-6 flex items-center justify-between">
        {/* logo */}
        <img src="/logovenucepreto.png" alt="logo" className="h-8 w-auto" />

        {/* menu */}
        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#infos" className="opacity-80 hover:opacity-100">Informações</a>
          <a href="#frete" className="opacity-80 hover:opacity-100">Custo de Frete</a>
          <a href="#duvidas" className="opacity-80 hover:opacity-100">Dúvidas</a>
          <a href="#precos" className="opacity-80 hover:opacity-100">Preços</a>
        </nav>

        {/* CTA topo */}
        <a
          href="https://wa.me/55"
          className="hidden sm:inline-flex rounded-full px-5 py-2 bg-green-500/90 hover:bg-green-500 text-black font-semibold"
        >
          Chamar no WhatsApp
        </a>
      </div>

      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center min-h-[calc(100vh-80px)]">
        {/* Texto esquerdo */}
        <div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            MACBOOK
            <span className="block mt-1">
              <span className="inline-block border-2 border-white rounded-2xl px-4 py-1 text-3xl md:text-4xl font-black tracking-tight">
                PRO
              </span>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base md:text-lg opacity-90">
            Desempenho de estúdio. Portabilidade de todos os dias.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#mac-3d"
              className="rounded-xl bg-green-500 px-6 py-3 text-black font-bold hover:bg-green-400"
            >
              COMPRAR AGORA
            </a>

            <div className="flex flex-wrap gap-3 text-sm">
              <a href="#infos" className="rounded-full border border-white/25 px-4 py-2">Informações</a>
              <a href="#frete" className="rounded-full border border-white/25 px-4 py-2">Custo de Frete</a>
              <a href="#duvidas" className="rounded-full border border-white/25 px-4 py-2">Dúvidas</a>
              <a href="#precos" className="rounded-full border border-white/25 px-4 py-2">Preços</a>
            </div>
          </div>
        </div>

        {/* Imagem direita (hero estático) */}
        <div className="relative">
          <img
            src="/m4-hero.png"   /* use um dos arquivos que você já tem no /public */
            alt="MacBook"
            className="w-full max-w-[720px] mx-auto"
            draggable="false"
          />
        </div>
      </section>
    </header>
  );
}

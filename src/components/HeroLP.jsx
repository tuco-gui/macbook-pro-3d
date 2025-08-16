import React from "react";

export default function HeroLP() {
  return (
    <section
      id="hero"
      className="relative z-10 mx-auto mt-20 max-w-7xl grid grid-cols-1 gap-12 px-6 py-16 md:mt-28 md:grid-cols-2"
    >
      {/* Texto */}
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          <span className="block">MACBOOK</span>
        </h1>

        <div className="mt-4 inline-flex items-center">
          <span className="rounded-xl border border-white px-4 py-2 text-2xl font-extrabold">
            PRO
          </span>
        </div>

        <p className="mt-6 max-w-xl text-white/80">
          Desempenho de estúdio. Portabilidade de todos os dias.
        </p>

        <a
          href="#comprar"
          className="mt-8 inline-flex w-fit items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-bold text-black hover:bg-emerald-400 transition"
        >
          COMPRAR AGORA
        </a>
      </div>

      {/* Imagem estática à direita */}
      <div className="relative flex items-center justify-center">
        {/* se o arquivo estiver no /public, use o caminho abaixo */}
        <img
          src="/m4-hero.png"
          alt="MacBook Pro"
          className="w-[640px] max-w-full rounded-2xl shadow-[0_0_80px_rgba(255,255,255,0.06)]"
          draggable="false"
        />
      </div>
    </section>
  );
}

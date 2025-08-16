import React from "react";
import MacContainer from "./components/MacContainer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white" id="top">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="shrink-0">
            <img src="/logovenuccpreto.png" alt="logo" className="h-7 w-auto" />
          </a>

          <ul className="hidden gap-8 md:flex text-sm font-semibold text-white/90">
            <li><a href="#info" className="hover:text-white">Informações</a></li>
            <li><a href="#frete" className="hover:text-white">Custo de Frete</a></li>
            <li><a href="#duvidas" className="hover:text-white">Dúvidas</a></li>
            <li><a href="#precos" className="hover:text-white">Preços</a></li>
          </ul>

          <a
            href="#contato"
            className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold hover:border-white/60 hover:bg-white/5 transition"
          >
            contato
          </a>
        </nav>
      </header>

      {/* HERO (a tal “primeira sessão” com título + botão + imagem) */}
      <section
        id="hero"
        className="relative z-10 mx-auto mt-20 max-w-7xl grid grid-cols-1 gap-12 px-6 py-16 md:mt-28 md:grid-cols-2"
      >
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

        <div className="relative flex items-center justify-center">
          <img
            src="/m4-hero.png"
            alt="MacBook Pro"
            className="w-[640px] max-w-full rounded-2xl"
            draggable="false"
          />
        </div>
      </section>

      {/* SESSÃO 3D – fica ABAIXO do hero e não cobre o topo */}
      <section id="mac-3d" className="relative isolate z-0 w-full">
        {/* altura controlada pra não virar tela cheia por cima */}
        <div className="relative z-0 h-[90vh] w-full">
          <MacContainer />
        </div>
      </section>
    </div>
  );
}

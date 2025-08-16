import React from "react";

export default function NavbarLP() {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <a href="#top" className="shrink-0">
          {/* se o arquivo estiver no /public, esse caminho funciona */}
          <img
            src="/logovenuccpreto.png"
            alt="logo"
            className="h-7 w-auto object-contain"
          />
        </a>

        {/* LINKS */}
        <ul className="hidden gap-8 md:flex text-sm font-semibold text-white/90">
          <li><a href="#info" className="hover:text-white">Informações</a></li>
          <li><a href="#frete" className="hover:text-white">Custo de Frete</a></li>
          <li><a href="#duvidas" className="hover:text-white">Dúvidas</a></li>
          <li><a href="#precos" className="hover:text-white">Preços</a></li>
        </ul>

        {/* CONTATO */}
        <a
          href="#contato"
          className="rounded-full border border-white/30 px-4 py-2 text-sm font-semibold hover:border-white/60 hover:bg-white/5 transition"
        >
          contato
        </a>
      </nav>
    </header>
  );
}

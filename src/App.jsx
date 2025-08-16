import React from "react";

// novo menu e novo hero
import NavbarLP from "./components/NavbarLP";
import HeroLP from "./components/HeroLP";

// NÃO MEXE NO 3D – usa o que você já tem
import MacContainer from "./components/MacContainer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <NavbarLP />

      {/* PRIMEIRA SESSÃO (hero) */}
      <HeroLP />

      {/* SESSÃO 3D (inalterada) */}
      <section id="mac-3d" className="w-full">
        <MacContainer />
      </section>
    </div>
  );
}

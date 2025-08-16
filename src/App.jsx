import React, { Suspense, lazy } from "react";
import NavbarLP from "./components/NavbarLP";
import HeroLP from "./components/HeroLP";

// Carrega o 3D só depois, sem travar o resto
const MacContainer = lazy(() => import("./components/MacContainer"));

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white" id="top">
      <NavbarLP />
      <HeroLP />

      {/* SESSÃO 3D – fica abaixo do hero */}
      <section id="mac-3d" className="relative z-0 w-full">
        <Suspense fallback={null}>
          <MacContainer />
        </Suspense>
      </section>
    </div>
  );
}


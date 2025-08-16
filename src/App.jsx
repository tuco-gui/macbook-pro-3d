import React from "react";
import "./assets/css/style.css";
import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "./components/MacContainer";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* PRIMEIRA SESSÃO — LP */}
      <Hero />

      {/* SEGUNDA SESSÃO — 3D (mantido do seu projeto) */}
      <section id="mac-3d" className="relative h-[100vh]">
        <Canvas camera={{ fov: 20, position: [0, -10, 180] }} className="absolute inset-0">
          <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr" />
          {/* NÃO alterei o 3D: continua com ScrollControls + MacContainer */}
          <ScrollControls pages={3}>
            <MacContainer />
          </ScrollControls>
        </Canvas>
      </section>

      {/* Seções extras… */}
      <section id="infos" className="px-6 py-24 max-w-7xl mx-auto opacity-80">
        <h2 className="text-2xl font-bold mb-4">Informações</h2>
        <p>Lorem ipsum dolor sit amet…</p>
      </section>
      <section id="frete" className="px-6 py-24 max-w-7xl mx-auto opacity-80">
        <h2 className="text-2xl font-bold mb-4">Custo de Frete</h2>
        <p>Lorem ipsum dolor sit amet…</p>
      </section>
      <section id="duvidas" className="px-6 py-24 max-w-7xl mx-auto opacity-80">
        <h2 className="text-2xl font-bold mb-4">Dúvidas</h2>
        <p>Lorem ipsum dolor sit amet…</p>
      </section>
      <section id="precos" className="px-6 py-24 max-w-7xl mx-auto opacity-80">
        <h2 className="text-2xl font-bold mb-4">Preços</h2>
        <p>Lorem ipsum dolor sit amet…</p>
      </section>
    </div>
  );
}


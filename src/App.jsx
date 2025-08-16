import React from "react";
import "./assets/css/style.css";
import { Canvas } from "@react-three/fiber";
import { Environment, ScrollControls } from "@react-three/drei";
import MacContainer from "./components/MacContainer";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white font-mono">
      {/* ===== Seção 1 — HERO simples (texto/cta) ===== */}
      <section id="hero" className="py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="masked text-5xl md:text-7xl tracking-tighter font-semibold mb-3">
            macbook pro.
          </h1>
          <h5 className="font-extrabold text-base md:text-lg mb-3">Oh so pro !</h5>
          <p className="mx-auto w-full md:w-2/3 text-white/80">
            Explore o MacBook Pro em 3D e escolha o tamanho ideal.
          </p>
          <div className="mt-6">
            <a
              href="#viewer-3d"
              className="inline-block rounded-xl border border-white/20 px-5 py-3 hover:bg-white/10 transition"
            >
              Ver em 3D
            </a>
          </div>
        </div>
      </section>

      {/* ===== Seção 2 — 3D original do projeto ===== */}
      <section id="viewer-3d" className="py-10 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">Veja em 3D</h2>
            <p className="mt-2 text-white/70">Gire, aproxime e veja de todos os ângulos.</p>
          </div>

          <div className="mt-6 rounded-3xl overflow-hidden border border-white/10 bg-black">
            <div className="w-full" style={{ height: "min(70vh, 780px)" }}>
              <Canvas camera={{ fov: 20, position: [0, -10, 180] }}>
                {/* EXATAMENTE como no projeto original */}
                <Environment
                  files={[
                    "https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr",
                  ]}
                />
                <ScrollControls pages={3}>
                  <MacContainer />
                </ScrollControls>
              </Canvas>
            </div>
          </div>

          <p className="mt-4 text-center text-white/60 text-sm">
            MacBook Pro — Space Black
          </p>
        </div>
      </section>

      {/* ===== Depois daqui eu acrescento suas outras seções (Modelos, FAQ etc.) ===== */}
    </div>
  );
}

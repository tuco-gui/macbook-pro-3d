import React from 'react';
import './assets/css/style.css';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls } from '@react-three/drei';
import MacContainer from './components/MacContainer';

const App = () => {
  return (
    <div className="w-full min-h-screen font-mono bg-black text-white">
      {/* ===== Nav original (desktop) ===== */}
      <nav className="hidden md:flex sticky top-0 z-20 gap-8 sm:gap-6 md:gap-10 lg:gap-12 py-5 sm:py-6 md:py-7 justify-center bg-black/70 backdrop-blur border-b border-white/10">
        {['store', 'mac', 'ipad', 'iphone', 'watch', 'vision', 'airPods', 'accessories', 'support'].map((elem, key) => (
          <a key={key} href="#" className="text-white font-bold text-sm sm:text-base md:text-lg capitalize">
            {elem}
          </a>
        ))}
      </nav>

      {/* ===== Drawer mobile (mantido) ===== */}
      <div className="md:hidden sticky top-0 z-20 bg-black/70 backdrop-blur border-b border-white/10">
        <div className="p-3">
          <label htmlFor="menu-drawer" className="btn btn-circle btn-ghost text-white text-2xl">☰</label>
        </div>
      </div>
      <input type="checkbox" id="menu-drawer" className="drawer-toggle hidden" />
      <div className="drawer-side">
        <label htmlFor="menu-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-64 bg-gray-900 text-white min-h-full">
          {['store', 'mac', 'ipad', 'iphone', 'watch', 'vision', 'airPods', 'accessories', 'support'].map((elem, key) => (
            <li key={key} className="py-2">
              <a href="#" className="text-white font-bold text-lg capitalize">{elem}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* ===== Seção 1 — HERO simples ===== */}
      <section id="hero" className="relative py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-4 text-center">
          <h1 className="masked text-5xl sm:text-6xl md:text-7xl tracking-tighter font-semibold mb-3">
            macbook pro.
          </h1>
          <h5 className="font-extrabold text-sm sm:text-base md:text-lg mb-3">Oh so pro !</h5>
          <p className="mx-auto w-full sm:w-2/3 text-white/80">
            Escolha seu modelo e fale com um especialista.
          </p>
          <div className="mt-6">
            <a href="#viewer-3d" className="btn btn-primary bg-white/10 border border-white/20 hover:bg-white/20">
              Ver em 3D
            </a>
          </div>
        </div>
      </section>

      {/* ===== Seção 2 — 3D do projeto original ===== */}
      <section id="viewer-3d" className="py-10 sm:py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-bold">Veja em 3D</h2>
            <p className="mt-2 text-white/70">Gire, aproxime e veja de todos os ângulos.</p>
          </div>

          <div className="mt-6 rounded-3xl overflow-hidden border border-white/10 bg-black">
            <div className="w-full" style={{ height: 'min(70vh, 780px)' }}>
              <Canvas camera={{ fov: 20, position: [0, -10, 180] }}>
                {/* Mesmo HDR remoto do original */}
                <Environment files={[
                  'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr',
                ]} />
                {/* Mantemos o ScrollControls porque o MacContainer usa useScroll */}
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

      {/* ===== AQUI depois vamos inserindo suas demais seções (Modelos, FAQ etc.) ===== */}
      {/* Próximo passo: eu adiciono “Modelos disponíveis” exatamente como na sua LP. */}
    </div>
  );
};

export default App;


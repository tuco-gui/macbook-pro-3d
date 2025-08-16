import React, { useMemo } from 'react';
import './assets/css/style.css';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls, PresentationControls } from '@react-three/drei';
import MacContainer from './components/MacContainer';

const App = () => {
  // Modo embed opcional (?embed=1) — renderiza só o viewer (útil pra iframe na sua LP estática)
  const isEmbed = useMemo(() => {
    try {
      return new URLSearchParams(window.location.search).get('embed') === '1';
    } catch {
      return false;
    }
  }, []);

  const Viewer = () => (
    <div className={`${isEmbed ? '' : 'mt-6 rounded-3xl overflow-hidden border border-white/10 bg-black'} w-full`}>
      <div
        className="w-full"
        style={{ height: isEmbed ? '100vh' : 'min(70vh, 780px)' }}
      >
        <Canvas
          camera={{ fov: 20, position: [0, -10, 180] }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 1.75]}
        >
          {/* HDR remoto (não precisa .hdr no projeto) */}
          <Environment files={[
            'https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr',
          ]} />

          {/* Mantém a animação da tampa via scroll */}
          <ScrollControls pages={3} damping={4}>
            {/* Novo: controle de rotação do MODELO com o mouse (estilo Apple) */}
            <PresentationControls
              global={false}            // gira o modelo, não a câmera
              cursor={true}
              speed={1.2}
              rotation={[0, 0, 0]}
              polar={[-Math.PI / 6, Math.PI / 6]}        // limita tilt vertical
              azimuth={[-Math.PI / 4, Math.PI / 4]}      // limita giro lateral
              config={{ mass: 2, tension: 400 }}
              snap={{ mass: 2, tension: 400 }}
            >
              <MacContainer />
            </PresentationControls>
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );

  if (isEmbed) {
    document.body.style.background = 'transparent';
    return <Viewer />;
  }

  return (
    <div className="relative w-full min-h-screen font-mono bg-black text-white">
      {/* Nav desktop (do seu projeto) */}
      <nav className="hidden md:flex absolute gap-8 sm:gap-6 md:gap-10 lg:gap-12 top-0 left-1/2 -translate-x-1/2 py-5 sm:py-8 md:py-10 text-center">
        {['store', 'mac', 'ipad', 'iphone', 'watch', 'vision', 'airPods', 'accessories', 'support'].map((elem, key) => (
          <a key={key} href="#" className="text-white font-bold text-sm sm:text-base md:text-lg capitalize">
            {elem}
          </a>
        ))}
      </nav>

      {/* Drawer mobile (mantido) */}
      <div className="md:hidden absolute top-5 left-5">
        <label htmlFor="menu-drawer" className="btn btn-circle btn-ghost text-white text-2xl">☰</label>
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

      {/* Headline */}
      <div className="absolute flex flex-col items-center top-32 sm:top-36 md:top-40 left-1/2 -translate-x-1/2 text-white text-center w-11/12 sm:w-3/4 pointer-events-none">
        <h3 className="masked text-5xl sm:text-6xl md:text-7xl tracking-tighter font-semibold mb-2">macbook pro.</h3>
        <h5 className="font-extrabold text-sm sm:text-base md:text-lg mb-3">Oh so pro !</h5>
        <p className="w-full sm:w-3/4">Gire, aproxime e veja de todos os ângulos.</p>
      </div>

      {/* Seção 3D */}
      <section id="viewer-3d" className="pt-28 sm:pt-32 md:pt-40 pb-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-2">
            <h2 className="text-3xl md:text-4xl font-bold">Veja em 3D</h2>
            <p className="mt-2 text-white/70">Gire, aproxime e veja de todos os ângulos.</p>
          </div>

          <Viewer />

          <p className="mt-4 text-center text-white/60 text-sm">MacBook Pro — Space Black</p>
        </div>
      </section>
    </div>
  );
};

export default App;

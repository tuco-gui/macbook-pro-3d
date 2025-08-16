import React, { Suspense } from 'react';
import './assets/css/style.css';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import MacContainer from './components/MacContainer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* Mantemos só a HERO; o seu menu de cima é da LP fora do React */}
      <section className="max-w-7xl mx-auto min-h-screen flex items-center gap-8 px-6 md:px-8 overflow-hidden">
        {/* Coluna esquerda: título, badge e CTA */}
        <div className="w-full md:w-[48%]">
          <h1 className="text-[54px] leading-[1] md:text-[84px] font-extrabold tracking-tight">
            MACBOOK
          </h1>

          <div className="inline-flex items-center gap-3 mt-5">
            <span className="px-5 py-2 rounded-xl border border-white/20 bg-transparent text-2xl font-bold">
              PRO
            </span>
          </div>

          <p className="mt-6 text-white/80 max-w-xl">
            Desempenho de estúdio. Portabilidade de todos os dias.
          </p>

          <a
            href="#comprar"
            className="inline-flex mt-8 px-6 py-3 rounded-xl bg-[#22c55e] text-black font-semibold"
          >
            COMPRAR AGORA
          </a>
        </div>

        {/* Coluna direita: Canvas do 3D */}
        <div className="hidden md:block w-[52%]">
          <div className="relative w-full aspect-[16/10]">
            <Canvas
              dpr={[1, 2]}
              camera={{ fov: 35, position: [0, 0, 4.2] }}
            >
              <color attach="background" args={['#000']} />
              <Suspense fallback={null}>
                <Environment
                  files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
                />
                {/* Controles com o mouse: gira horizontalmente, sem zoom/pan */}
                <OrbitControls
                  makeDefault
                  enableZoom={false}
                  enablePan={false}
                  minPolarAngle={Math.PI / 2.3}
                  maxPolarAngle={Math.PI / 2.3}
                />
                <MacContainer />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </section>
    </div>
  );
}



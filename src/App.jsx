import React, { Suspense } from 'react';
import './assets/css/style.css';
import { Canvas } from '@react-three/fiber';
import { Environment, ScrollControls, Html, Preload } from '@react-three/drei';
import MacContainer from './components/MacContainer';

const MENU = ['Informações', 'Custo de Frete', 'Dúvidas', 'Preços'];

export default function App() {
  return (
    <div className="relative w-full h-screen bg-black font-mono">
      {/* NAV ÚNICO */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
        <img src="/logovenuccepreto.png" alt="logo" className="h-7 w-auto select-none pointer-events-none" />
        <ul className="hidden md:flex items-center gap-10 text-white font-semibold">
          {MENU.map((item) => (
            <li key={item}><a href="#" className="hover:opacity-80 transition-opacity">{item}</a></li>
          ))}
        </ul>
        <a href="#contato" className="rounded-full bg-emerald-500 text-black font-bold px-5 py-2 hover:brightness-95 transition">
          contato
        </a>
      </nav>

      {/* 3D */}
      <Canvas
        gl={{ antialias: true, alpha: true }}
        camera={{ fov: 20, position: [0, -10, 180] }}
        className="!bg-transparent absolute inset-0"
      >
        <Suspense fallback={
          <Html center>
            <div style={{ padding: '10px 16px', borderRadius: 9999, background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(6px)', color: '#fff', fontWeight: 700 }}>
              carregando 3D…
            </div>
          </Html>
        }>
          {/* Preset local, zero dependência externa */}
          <Environment preset="studio" />
          <ScrollControls pages={3}>
            <MacContainer />
          </ScrollControls>
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}

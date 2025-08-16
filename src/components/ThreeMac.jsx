import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import MacContainer from './MacContainer';

export default function ThreeMac() {
  return (
    <section id="modelo3d" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-zinc-900/40 border border-white/5 overflow-hidden">
          <div className="h-[70vh] md:h-[80vh] relative">
            <Canvas camera={{ fov: 25, position: [0, 1.5, 6] }}>
              {/* Ambiente HDR externo — mantém o realismo sem precisar de arquivo local */}
              <Environment
                files="https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr"
              />
              <MacContainer />
              <OrbitControls
                enablePan={false}
                enableZoom={false}
                maxPolarAngle={Math.PI * 0.52}
                minPolarAngle={Math.PI * 0.25}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}

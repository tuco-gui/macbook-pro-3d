import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import MacContainer from './MacContainer';

export default function MacBook3DSection() {
  return (
    <section id="sec-3d" className="relative h-screen w-full">
      <Canvas camera={{ fov: 20, position: [0, -10, 180] }}>
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']} />
        <OrbitControls enablePan={false} enableZoom={false} />
        <MacContainer />
      </Canvas>
    </section>
  );
}

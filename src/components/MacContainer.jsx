import { useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useMemo, useRef } from "react";

export default function MacContainer() {
  const { scene } = useGLTF("/mac.glb");
  const tex = useTexture("/m4-hero.png"); // use /red.jpg se preferir

  // mapeia meshes 1x
  const meshes = useMemo(() => {
    const m = {};
    scene.traverse((e) => (m[e.name] = e));
    return m;
  }, [scene]);

  // aplica materiais uma vez
  if (meshes.matte?.material) {
    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;
    meshes.matte.material.needsUpdate = true;
  }

  // garante tela “fechada” num ângulo natural e sem animação de scroll
  if (meshes.screen) {
    meshes.screen.rotation.x = THREE.MathUtils.degToRad(175);
  }

  const group = useRef();

  // leve “idle” para dar vida (bem sutil)
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.05;
  });

  return (
    <group ref={group} position={[0, -0.8, 0]} scale={[1.1, 1.1, 1.1]}>
      <primitive object={scene} />
    </group>
  );
}
useGLTF.preload("/mac.glb");

import { useGLTF, useTexture } from '@react-three/drei';
import { useMemo } from 'react';
import * as THREE from 'three';

export default function MacContainer() {
  // IMPORTANTe: como está em /public, use caminho absoluto
  const model = useGLTF('/mac.glb');
  const tex = useTexture('/red.jpg');

  // Ajuste de materiais/nomes com segurança (sem quebrar se o nome mudar)
  useMemo(() => {
    const meshes = {};
    model.scene.traverse((obj) => (meshes[obj.name] = obj));

    // Tela: manter virada para frente
    if (meshes.screen) {
      meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    }

    // Acabamento (matte) com textura
    if (meshes.matte && meshes.matte.material) {
      const m = meshes.matte.material;
      m.map = tex;
      m.emissiveIntensity = 0;
      m.metalness = 0;
      m.roughness = 1;
      m.needsUpdate = true;
    }
  }, [model, tex]);

  // Escala/posição pensadas para a câmera em [0,0,4.2]
  return (
    <group position={[0, -0.35, 0]} scale={[1.15, 1.15, 1.15]}>
      <primitive object={model.scene} />
    </group>
  );
}

// Pré-carregar para evitar piscadas
useGLTF.preload('/mac.glb');

import { useGLTF, useTexture, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useMemo, useRef } from 'react';

THREE.ColorManagement.enabled = true;

export default function MacContainer() {
  // Se seus arquivos estiverem em /public, trocar para '/mac.glb' e '/m4-hero.png'.
  const model = useGLTF('./mac.glb');
  const screenTex = useTexture('./m4-hero.png');
  screenTex.flipY = false;

  const group = useRef();
  const scroll = useScroll();

  // encontra as partes certas do modelo por nome
  const { screenMesh, lidMesh, baseMesh } = useMemo(() => {
    let screenMesh, lidMesh, baseMesh;
    model.scene.traverse((o) => {
      if (!o.isMesh) return;
      const n = o.name.toLowerCase();
      if (!screenMesh && (n.includes('screen') || n.includes('display'))) screenMesh = o;
      if (!lidMesh && (n.includes('lid') || n.includes('top') || n.includes('back') || n.includes('matte'))) lidMesh = o;
      if (!baseMesh && (n.includes('base') || n.includes('bottom'))) baseMesh = o;
      o.castShadow = o.receiveShadow = true;
    });
    return { screenMesh, lidMesh, baseMesh };
  }, [model]);

  useEffect(() => {
    // material "aceso" na tela
    if (screenMesh) {
      screenMesh.material = new THREE.MeshBasicMaterial({
        map: screenTex,
        toneMapped: false,
      });
    }
    // acabamento do corpo
    [lidMesh, baseMesh].forEach((m) => {
      if (m?.material) {
        m.material.metalness = 0.4;
        m.material.roughness = 0.8;
        m.material.emissiveIntensity = 0;
      }
    });
  }, [screenMesh, lidMesh, baseMesh, screenTex]);

  useFrame(() => {
    // abre a tampa com o scroll (de 180º fechado até ~25º)
    const openDeg = THREE.MathUtils.lerp(180, 25, Math.min(scroll.offset * 1.2, 1));
    if (screenMesh?.parent) {
      screenMesh.parent.rotation.x = THREE.MathUtils.degToRad(openDeg);
    }
  });

  return (
    <group ref={group} position={[0, -10, 20]} scale={[1, 1, 1]}>
      <primitive object={model.scene} />
    </group>
  );
}

useGLTF.preload('./mac.glb');

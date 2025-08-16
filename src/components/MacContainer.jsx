import { useGLTF, useTexture, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useEffect, useMemo, useRef, useState } from 'react';

THREE.ColorManagement.enabled = true;

export default function MacContainer() {
  // Lendo do /public
  const model = useGLTF('/mac.glb');
  const lidTex = useTexture('/red.jpg');      // tampo com “logo”
  const screenTex = useTexture('/m4-hero.png'); // imagem da tela
  screenTex.flipY = false;

  const group = useRef();
  const scroll = useScroll();

  // Achar as partes por nome (robusto p/ variações)
  const { screen, matte } = useMemo(() => {
    let screen, matte;
    model.scene.traverse((o) => {
      if (!o.isMesh) return;
      const n = o.name.toLowerCase();
      if (!screen && (n.includes('screen') || n.includes('display'))) screen = o;
      if (!matte && (n.includes('matte') || n.includes('lid') || n.includes('back') || n.includes('top'))) matte = o;
      o.castShadow = o.receiveShadow = true;
    });
    return { screen, matte };
  }, [model]);

  // aplica materiais exatamente como no projeto original
  useEffect(() => {
    if (matte?.material) {
      matte.material.map = lidTex;
      matte.material.emissiveIntensity = 0;
      matte.material.metalness = 0;
      matte.material.roughness = 1;
      matte.material.needsUpdate = true;
    }
    if (screen) {
      screen.material = new THREE.MeshBasicMaterial({ map: screenTex, toneMapped: false });
      // posição inicial: fechado (igual ao original)
      screen.rotation.x = THREE.MathUtils.degToRad(180);
    }
  }, [matte, screen, lidTex, screenTex]);

  // animação de abrir com o scroll (igual ao original)
  useFrame(() => {
    if (screen) {
      screen.rotation.x = THREE.MathUtils.degToRad(180 - scroll.offset * 90);
    }
  });

  // responsivo (igual ao que você tinha)
  const [modelScale, setModelScale] = useState(1);
  useEffect(() => {
    const updateScale = () => setModelScale(window.innerWidth < 768 ? 0.7 : 1);
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <group ref={group} position={[0, -10, 20]} scale={[modelScale, modelScale, modelScale]}>
      <primitive object={model.scene} />
    </group>
  );
}

useGLTF.preload('/mac.glb');

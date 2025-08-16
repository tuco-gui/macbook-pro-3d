import { useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useMemo } from "react";

const MacContainer = () => {
  // IMPORTANTe: o .glb precisa estar em /public/mac.glb
  const model = useGLTF("/mac.glb");
  const data = useScroll();

  // Indexa os meshes por nome sem alterar materiais do GLB
  const meshes = useMemo(() => {
    const map = {};
    model.scene.traverse((o) => {
      if (o.isMesh) map[o.name] = o;
    });
    return map;
  }, [model]);

  // Ajustes leves: deixar o logo metálico e a tela levemente emissiva
  useEffect(() => {
    Object.values(meshes).forEach((m) => {
      const n = m.name?.toLowerCase?.() || "";
      // Deixa qualquer malha com "logo" brilhante/metálica
      if (n.includes("logo")) {
        const mat = m.material;
        if (mat && "metalness" in mat) {
          mat.metalness = 1;
          mat.roughness = 0.15;
          mat.envMapIntensity = 1.25;
        }
      }
      // Tela um pouco emissiva (sem trocar textura/material original)
      if (n.includes("screen") || n.includes("display")) {
        const mat = m.material;
        if (mat && "emissive" in mat) {
          mat.emissive = new THREE.Color(0xffffff);
          mat.emissiveIntensity = 0.35;
        }
      }
    });
  }, [meshes]);

  // Abertura/fechamento da tela pelo scroll (como já era)
  useFrame(() => {
    const screen =
      meshes.screen ||
      meshes.Screen ||
      meshes.display ||
      meshes.Display;

    if (screen) {
      screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
    }
  });

  // Mantém posição/escala que você já usava
  return (
    <group position={[0, -10, 20]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;

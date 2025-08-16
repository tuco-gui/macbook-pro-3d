import { useGLTF, useTexture, useThree } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";

const clamp = (v, min, max) => Math.min(max, Math.max(min, v));

const MacContainer = () => {
  // Carrega modelo e textura (como no seu projeto)
  const model = useGLTF("./mac.glb");
  const tex = useTexture("./red.jpg");

  // Indexa as partes que precisamos animar
  const meshes = useRef({});
  useEffect(() => {
    const m = {};
    model.scene.traverse((e) => (m[e.name] = e));
    meshes.current = m;

    // Ajustes de material (mantidos)
    if (m.matte?.material) {
      m.matte.material.map = tex;
      m.matte.material.emissiveIntensity = 0;
      m.matte.material.metalness = 0;
      m.matte.material.roughness = 1;
    }
  }, [model, tex]);

  // ===== Controle de abertura da tampa (0 = fechado | 1 = aberto)
  const open = useRef(0);         // valor alvo
  const smooth = useRef(0);       // valor suavizado para a animação
  const { gl } = useThree();

  // Roda do mouse controla a abertura (sem scroll da página)
  useEffect(() => {
    const el = gl.domElement;

    const onWheel = (e) => {
      e.preventDefault(); // evita a barra de rolagem da página
      // deltaY > 0 = rolar para baixo => abrir um pouco
      open.current = clamp(open.current - e.deltaY * 0.0015, 0, 1);
    };

    // Arrasto vertical também controla a abertura
    let startY = 0;
    let startOpen = 0;
    const onPointerDown = (e) => {
      startY = e.clientY;
      startOpen = open.current;
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    };
    const onPointerMove = (e) => {
      const dy = e.clientY - startY; // arrastar para cima abre
      open.current = clamp(startOpen - dy * 0.003, 0, 1);
    };
    const onPointerUp = () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("pointerdown", onPointerDown);

    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, [gl]);

  // Suaviza e aplica a rotação da tela
  useFrame(() => {
    // easing
    smooth.current = THREE.MathUtils.lerp(smooth.current, open.current, 0.12);

    const m = meshes.current;
    if (m.screen) {
      // 180° (fechado) até 90° (aberto) — ajuste fino se preferir
      const deg = 180 - smooth.current * 90;
      m.screen.rotation.x = THREE.MathUtils.degToRad(deg);
    }
  });

  // Responsividade do modelo
  const [modelScale, setModelScale] = useState(1);
  useEffect(() => {
    const updateScale = () => setModelScale(window.innerWidth < 768 ? 0.7 : 1);
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <group position={[0, -10, 20]} scale={[modelScale, modelScale, modelScale]}>
      <primitive object={model.scene} />
    </group>
  );
};

export default MacContainer;

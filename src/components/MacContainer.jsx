import { useGLTF, useTexture, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect, useMemo, useState } from "react";

const SCREEN_IMAGE_PATH = "/m4-hero.png";        // imagem que aparece na tela
const BODY_TEXTURE_PATH  = "/red.jpg";           // textura do alumínio (a que você já tinha)
const APPLE_LOGO_PATH    = "/logovenucepreto.png"; // se o nome do seu arquivo for outro, mude aqui

export default function MacContainer() {
  // carrega o modelo
  const { scene } = useGLTF("/mac.glb");

  // carrega texturas
  const screenTex = useTexture(SCREEN_IMAGE_PATH);
  const bodyTex   = useTexture(BODY_TEXTURE_PATH);
  const logoTex   = useTexture(APPLE_LOGO_PATH);

  // ajustes de textura
  screenTex.flipY = false; // para não ficar invertida na tela
  logoTex && (logoTex.flipY = false);

  // mapeia meshes por nome
  const meshes = useMemo(() => {
    const map = {};
    scene.traverse((o) => { if (o.isMesh) map[o.name] = o; });
    return map;
  }, [scene]);

  // tenta encontrar por fallback se os nomes não forem exatamente iguais
  const screenMesh =
    meshes.screen ||
    Object.values(meshes).find((m) => /screen|display|lcd/i.test(m.name));

  const bodyMesh =
    meshes.matte ||
    Object.values(meshes).find((m) => /matte|body|lid|top/i.test(m.name));

  const appleMesh =
    meshes.apple ||
    meshes.logo ||
    Object.values(meshes).find((m) => /apple|logo/i.test(m.name));

  // aplica materiais/tex assim que o modelo existir
  useEffect(() => {
    // corpo/lid
    if (bodyMesh) {
      bodyMesh.material.map = bodyTex;
      bodyMesh.material.metalness = 0;
      bodyMesh.material.roughness = 1;
      bodyMesh.material.emissiveIntensity = 0;
      bodyMesh.material.needsUpdate = true;
    }

    // tela “acesa”
    if (screenMesh) {
      screenMesh.material = new THREE.MeshBasicMaterial({
        map: screenTex,
        toneMapped: false, // deixa brilhante, sem ficar “lavado”
      });
      screenMesh.material.needsUpdate = true;
      // mantém o eixo correto (modelo veio com 180° fechado)
      if (screenMesh.rotation.x === 0) {
        screenMesh.rotation.x = THREE.MathUtils.degToRad(180);
      }
    }

    // logo da Apple (se o modelo tiver um mesh do logo)
    if (appleMesh) {
      // se houver textura de logo, usa; senão deixa branco
      if (logoTex) {
        appleMesh.material = new THREE.MeshBasicMaterial({
          map: logoTex,
          transparent: true,
          toneMapped: false,
        });
      } else {
        appleMesh.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
      }
      appleMesh.renderOrder = 10;
      appleMesh.material.needsUpdate = true;
    }
  }, [bodyMesh, screenMesh, appleMesh, bodyTex, screenTex, logoTex]);

  // abre/fecha com o scroll (0 = fechado | 1 = ~90° aberto)
  const data = useScroll();
  useFrame(() => {
    if (screenMesh) {
      const base = 180;      // fechado
      const open = 90;       // abertura alvo
      const angle = base - data.offset * (base - open);
      screenMesh.rotation.x = THREE.MathUtils.degToRad(angle);
    }
  });

  // escala responsiva igual você tinha
  const [modelScale, setModelScale] = useState(1);
  useEffect(() => {
    const update = () => setModelScale(window.innerWidth < 768 ? 0.7 : 1);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <group position={[0, -10, 20]} scale={[modelScale, modelScale, modelScale]}>
      <primitive object={scene} />
    </group>
  );
}

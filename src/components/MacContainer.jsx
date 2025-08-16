// src/components/MacContainer.jsx
import * as THREE from 'three'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'

export default function MacContainer() {
  // IMPORTANTE: depois de renomear o arquivo no /public
  const { scene: raw } = useGLTF('/mac.glb') // ou '/mac.glb?v=2'
  const wallpaper = useTexture('/m4-hero.png')   // confirme que este arquivo está em /public

  // clona a cena e os materiais para não herdar alterações antigas do cache
  const scene = useMemo(() => {
    const clone = raw.clone(true)
    clone.traverse((o) => {
      if (o.isMesh && o.material) o.material = o.material.clone()
    })

    // tela emissiva
    const screen =
      clone.getObjectByName('screen') || clone.getObjectByName('Screen')
    if (screen && wallpaper) {
      wallpaper.flipY = false
      const mat = new THREE.MeshBasicMaterial({
        map: wallpaper,
        toneMapped: false,
      })
      screen.material = mat
      screen.rotation.x = THREE.MathUtils.degToRad(180) // começa fechado
    }
    return clone
  }, [raw, wallpaper])

  // anima a abertura da tampa
  const target = useRef(THREE.MathUtils.degToRad(110))
  useFrame((_, dt) => {
    const screen =
      scene.getObjectByName('screen') || scene.getObjectByName('Screen')
    if (screen) {
      screen.rotation.x = THREE.MathUtils.lerp(
        screen.rotation.x,
        target.current,
        1 - Math.pow(0.001, dt)
      )
    }
  })

  // responsivo
  const [s, setS] = useState(1)
  useEffect(() => {
    const update = () => setS(window.innerWidth < 768 ? 0.7 : 1)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <group position={[0, -10, 20]} scale={[s, s, s]}>
      <primitive object={scene} />
    </group>
  )
}

// opcional: pré-carrega
useGLTF.preload('/mac_v2.glb') // ou '/mac.glb?v=2'

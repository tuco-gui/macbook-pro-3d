// src/components/MacContainer.jsx
import * as THREE from 'three'
import React, { useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useTexture } from '@react-three/drei'

const MacContainer = () => {
  // carrega o GLB que está em /public
  const model = useGLTF('/mac.glb')

  // opcional: papel de parede da tela (se não existir, ignora)
  const screenTex = useTexture('/m4-hero.png', undefined, (err) => {
    // se não achar a imagem, segue sem textura
    console.warn('Wallpaper da tela não encontrado (ok ignorar):', err?.message)
  })

  // prepara materiais e estado inicial (tela fechada)
  useEffect(() => {
    if (!model?.scene) return

    // encontra as partes pelo nome que vem no GLB
    const screen = model.scene.getObjectByName('screen')
    const matte = model.scene.getObjectByName('matte')

    // estado inicial: tampa fechada
    if (screen) {
      screen.rotation.x = THREE.MathUtils.degToRad(180)

      // aplica wallpaper na tela (se existir); NÃO mexe no corpo (logo da Apple)
      if (screen.material && screenTex) {
        screen.material.map = screenTex
        screen.material.needsUpdate = true
      }
    }

    // ajustes suaves no material do corpo, sem trocar o map (mantém logo da Apple)
    if (matte && matte.material) {
      matte.material.emissiveIntensity = 0
      matte.material.metalness = 0
      matte.material.roughness = 1
    }
  }, [model, screenTex])

  // anima abertura automática da tela (sem scroll)
  const targetAngle = useRef(THREE.MathUtils.degToRad(110)) // ~110° aberto
  useFrame((_, delta) => {
    const screen = model.scene?.getObjectByName('screen')
    if (!screen) return
    const cur = screen.rotation.x
    const next = THREE.MathUtils.lerp(cur, targetAngle.current, 1 - Math.pow(0.001, delta))
    screen.rotation.x = next
  })

  // responsivo
  const [scale, setScale] = useState(1)
  useEffect(() => {
    const update = () => setScale(window.innerWidth < 768 ? 0.7 : 1)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return (
    <group position={[0, -10, 20]} scale={[scale, scale, scale]}>
      <primitive object={model.scene} />
    </group>
  )
}

export default MacContainer

// opcional: pré-carrega para evitar “pop”
useGLTF.preload('/mac.glb')

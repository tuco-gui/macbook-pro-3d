import { useScroll, useGLTF, useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three';
import { useState, useEffect } from "react";

const MacContainer = () => {
    let model = useGLTF("./mac.glb");
    let tex = useTexture('./red.jpg');
    
    let meshes = {};
    model.scene.traverse((elem) => {
        meshes[elem.name] = elem;
    });

    meshes.screen.rotation.x = THREE.MathUtils.degToRad(180);
    meshes.matte.material.map = tex;
    meshes.matte.material.emissiveIntensity = 0;
    meshes.matte.material.metalness = 0;
    meshes.matte.material.roughness = 1;

    let data = useScroll();

    useFrame(() => {
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90)
    });

    const [modelScale, setModelScale] = useState(1);

    useEffect(() => {
        const updateScale = () => {
            if (window.innerWidth < 768) {
                setModelScale(0.7);
            } else {
                setModelScale(1); 
            }
        };

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

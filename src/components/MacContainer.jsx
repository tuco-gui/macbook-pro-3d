import { useScroll, useGLTF, useTexture } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useState } from "react";
import * as THREE from 'three';

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
    const { viewport } = useThree();
    const [scaleFactor, setScaleFactor] = useState(1);

    useEffect(() => {
        if (viewport.width < 6) {
            setScaleFactor(0.5);
        } else if (viewport.width < 10) {
            setScaleFactor(0.8);
        } else {
            setScaleFactor(1);
        }
    }, [viewport.width]);

    useFrame(() => {
        meshes.screen.rotation.x = THREE.MathUtils.degToRad(180 - data.offset * 90);
    });

    return (
        <group position={[0, -10, 20]} scale={[scaleFactor, scaleFactor, scaleFactor]}>
            <primitive object={model.scene} />
        </group>
    );
};

export default MacContainer;

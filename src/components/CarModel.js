import React, { useRef } from 'react';
import * as THREE from 'three';
import { useGLTF, Center } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const CarModel = () => {
  const { scene } = useGLTF('/models/car/scene.gltf');
  const groupRef = useRef();
  
  const clonedScene = React.useMemo(() => {
    const clone = scene.clone();
    clone.traverse((obj) => {
      if (obj instanceof THREE.Mesh) {
        // Frustum culling fix
        obj.frustumCulled = false;
        obj.castShadow = true;
        obj.receiveShadow = true;

        // Apply Chalo Orange to body parts or paint materials
        const name = obj.name.toLowerCase();
        const matName = obj.material.name?.toLowerCase() || '';
        
        if (name.includes('body') || name.includes('paint') || matName.includes('body') || matName.includes('paint')) {
          obj.material = obj.material.clone();
          obj.material.color.set('#e77e22');
          obj.material.roughness = 0.2;
          obj.material.metalness = 0.9;
        }
      }
    });
    return clone;
  }, [scene]);

  // HOVER INTERACTION: Smoothly tilt car towards pointer
  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Horizontal rotation based on mouse
    const targetY = state.pointer.x * 0.5;
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetY + Math.PI / 1.5, 0.05);

    // Vertical tilt based on mouse
    const targetX = -state.pointer.y * 0.2;
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetX, 0.05);
  });

  return (
    <group ref={groupRef}>
      <Center top>
        <primitive 
          object={clonedScene} 
          scale={0.0015} 
        />
      </Center>
    </group>
  );
};

// Pre-loading the car model for performance
useGLTF.preload('/models/car/scene.gltf');

export default CarModel;

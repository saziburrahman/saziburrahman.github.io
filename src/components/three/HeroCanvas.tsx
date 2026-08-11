import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { lerp } from "@/lib/utils";
import type { Mesh, Points } from "three";

function HeroGeometry() {
  const meshRef = useRef<Mesh>(null);
  const wireRef = useRef<Mesh>(null);
  const mouse = useMousePosition();
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  useFrame((_, delta) => {
    if (!meshRef.current || reducedMotion) return;

    // Smooth mouse follow
    meshRef.current.rotation.x = lerp(
      meshRef.current.rotation.x,
      mouse.normalizedY * 0.3,
      delta * 0.8
    );
    meshRef.current.rotation.y = lerp(
      meshRef.current.rotation.y,
      mouse.normalizedX * 0.3,
      delta * 0.8
    );

    // Auto rotation
    meshRef.current.rotation.z += delta * 0.05;

    // Sync wireframe
    if (wireRef.current) {
      wireRef.current.rotation.copy(meshRef.current.rotation);
    }
  });

  const detail = isMobile ? 3 : 4;

  return (
    <Float
      speed={reducedMotion ? 0 : 1.5}
      rotationIntensity={reducedMotion ? 0 : 0.3}
      floatIntensity={reducedMotion ? 0 : 0.8}
    >
      <group position={[isMobile ? 0 : 2.2, 0, 0]} scale={isMobile ? 1.3 : 1.7}>
        {/* Main distorted mesh - vibrant electric purple/indigo */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, detail]} />
          <MeshDistortMaterial
            color="#7c3aed"
            roughness={0.2}
            metalness={0.7}
            distort={isMobile || reducedMotion ? 0 : 0.35}
            speed={reducedMotion ? 0 : 2}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Wireframe overlay - electric cyan */}
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[1.02, detail]} />
          <meshBasicMaterial
            color="#38bdf8"
            wireframe
            transparent
            opacity={0.4}
          />
        </mesh>
      </group>
    </Float>
  );
}

function FloatingParticles() {
  const pointsRef = useRef<Points>(null);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const count = isMobile ? 60 : 160;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current || reducedMotion) return;
    pointsRef.current.rotation.y += delta * 0.02;
    pointsRef.current.rotation.x += delta * 0.01;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.025}
        color="#a78bfa"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 4]} intensity={3} color="#8b5cf6" />
      <pointLight position={[-4, -2, 3]} intensity={2} color="#38bdf8" />
      <pointLight position={[0, 5, -3]} intensity={1} color="#ec4899" />
    </>
  );
}

export function HeroCanvas() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      }}
      style={{ background: "transparent" }}
    >
      <SceneLighting />
      <HeroGeometry />
      <FloatingParticles />
    </Canvas>
  );
}

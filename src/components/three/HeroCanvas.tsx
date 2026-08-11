import { useRef, useMemo, useState, useEffect } from "react";
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
      mouse.normalizedY * 0.25,
      delta * 0.8
    );
    meshRef.current.rotation.y = lerp(
      meshRef.current.rotation.y,
      mouse.normalizedX * 0.25,
      delta * 0.8
    );

    // Auto rotation
    meshRef.current.rotation.z += delta * 0.04;

    // Sync wireframe
    if (wireRef.current) {
      wireRef.current.rotation.copy(meshRef.current.rotation);
    }
  });

  const detail = isMobile ? 2 : 3;

  return (
    <Float
      speed={reducedMotion ? 0 : 1.2}
      rotationIntensity={reducedMotion ? 0 : 0.25}
      floatIntensity={reducedMotion ? 0 : 0.6}
    >
      <group position={[isMobile ? 0 : 2.2, 0, 0]} scale={isMobile ? 1.2 : 1.6}>
        {/* Main distorted mesh */}
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[1, detail]} />
          <MeshDistortMaterial
            color="#7c3aed"
            roughness={0.25}
            metalness={0.65}
            distort={isMobile || reducedMotion ? 0 : 0.3}
            speed={reducedMotion ? 0 : 1.8}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Wireframe overlay */}
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[1.02, detail]} />
          <meshBasicMaterial
            color="#38bdf8"
            wireframe
            transparent
            opacity={0.35}
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
  const count = isMobile ? 40 : 100;

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
    pointsRef.current.rotation.y += delta * 0.015;
    pointsRef.current.rotation.x += delta * 0.008;
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
        size={0.02}
        color="#a78bfa"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function SceneLighting() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 3, 4]} intensity={2.5} color="#8b5cf6" />
      <pointLight position={[-4, -2, 3]} intensity={1.8} color="#38bdf8" />
    </>
  );
}

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "100px 0px 100px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {isInView && (
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          dpr={[1, 1.25]}
          gl={{
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
        >
          <SceneLighting />
          <HeroGeometry />
          <FloatingParticles />
        </Canvas>
      )}
    </div>
  );
}

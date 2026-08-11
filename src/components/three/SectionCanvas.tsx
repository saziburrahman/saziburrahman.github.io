import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { useIsMobile } from "@/hooks/useMediaQuery";
import { lerp } from "@/lib/utils";
import type { Mesh, Points, Group } from "three";

interface SectionCanvasProps {
  variant?: "experience" | "education" | "skills" | "contact";
}

function FloatingShape({ variant }: { variant: "experience" | "education" | "skills" | "contact" }) {
  const groupRef = useRef<Group>(null);
  const mesh1Ref = useRef<Mesh>(null);
  const mesh2Ref = useRef<Mesh>(null);
  const mouse = useMousePosition();
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  useFrame((_, delta) => {
    if (!groupRef.current || reducedMotion) return;

    // Smooth mouse tilt parallax
    groupRef.current.rotation.x = lerp(
      groupRef.current.rotation.x,
      mouse.normalizedY * 0.12,
      delta * 0.4
    );
    groupRef.current.rotation.y = lerp(
      groupRef.current.rotation.y,
      mouse.normalizedX * 0.12,
      delta * 0.4
    );

    if (mesh1Ref.current) {
      mesh1Ref.current.rotation.x += delta * 0.08;
      mesh1Ref.current.rotation.y += delta * 0.1;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.y -= delta * 0.09;
      mesh2Ref.current.rotation.z += delta * 0.06;
    }
  });

  return (
    <group ref={groupRef}>
      <Float
        speed={reducedMotion ? 0 : 1}
        rotationIntensity={reducedMotion ? 0 : 0.3}
        floatIntensity={reducedMotion ? 0 : 0.5}
      >
        {variant === "experience" && (
          <>
            {/* Floating Torus Knot for Experience */}
            <mesh ref={mesh1Ref} position={[isMobile ? 0 : 3.2, 0, -1]} scale={isMobile ? 0.8 : 1.2}>
              <torusKnotGeometry args={[1, 0.25, 64, 12]} />
              <meshBasicMaterial
                color="#4f46e5"
                wireframe
                transparent
                opacity={0.15}
              />
            </mesh>
            <mesh ref={mesh2Ref} position={[isMobile ? 0 : -3.4, 0.5, -2]} scale={isMobile ? 0.6 : 1.0}>
              <octahedronGeometry args={[1.2, 1]} />
              <meshBasicMaterial
                color="#0284c7"
                wireframe
                transparent
                opacity={0.12}
              />
            </mesh>
          </>
        )}

        {variant === "education" && (
          <>
            {/* Floating Dodecahedron & Torus for Education */}
            <mesh ref={mesh1Ref} position={[isMobile ? 0 : -3.2, 0.2, -1]} scale={isMobile ? 0.7 : 1.1}>
              <dodecahedronGeometry args={[1.2, 1]} />
              <meshBasicMaterial
                color="#6366f1"
                wireframe
                transparent
                opacity={0.18}
              />
            </mesh>
            <mesh ref={mesh2Ref} position={[isMobile ? 0 : 3.5, -0.3, -2]} scale={isMobile ? 0.6 : 1.0}>
              <torusGeometry args={[1.3, 0.25, 12, 32]} />
              <meshBasicMaterial
                color="#0284c7"
                wireframe
                transparent
                opacity={0.15}
              />
            </mesh>
          </>
        )}

        {(variant === "skills" || variant === "contact") && (
          <mesh ref={mesh1Ref} position={[isMobile ? 0 : 3, 0, -1.5]} scale={isMobile ? 0.7 : 1.1}>
            <icosahedronGeometry args={[1.2, 1]} />
            <meshBasicMaterial
              color="#4f46e5"
              wireframe
              transparent
              opacity={0.15}
            />
          </mesh>
        )}
      </Float>
    </group>
  );
}

function SectionParticles() {
  const pointsRef = useRef<Points>(null);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const count = isMobile ? 30 : 60;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current || reducedMotion) return;
    pointsRef.current.rotation.y += delta * 0.01;
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
        size={0.018}
        color="#6366f1"
        transparent
        opacity={0.25}
        sizeAttenuation
      />
    </points>
  );
}

export function SectionCanvas({ variant = "experience" }: SectionCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: "150px 0px 150px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-80">
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
          <ambientLight intensity={0.9} />
          <pointLight position={[4, 4, 4]} intensity={1.5} color="#6366f1" />
          <pointLight position={[-4, -4, 2]} intensity={1} color="#0284c7" />
          <FloatingShape variant={variant} />
          <SectionParticles />
        </Canvas>
      )}
    </div>
  );
}

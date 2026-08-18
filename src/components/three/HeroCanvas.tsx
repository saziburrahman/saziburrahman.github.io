"use client";

import { useIsMobile } from "@/hooks/useMediaQuery";
import { useMousePosition } from "@/hooks/useMousePosition";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { lerp } from "@/lib/utils";
import { Float, Html } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import type { Group, Points } from "three";

// 3D Large Holographic Code Terminal Scene
function DevScene() {
  const groupRef = useRef<Group>(null);
  const mouse = useMousePosition();
  const reducedMotion = useReducedMotion();
  const isMobile = useIsMobile();

  useFrame((_, delta) => {
    if (!groupRef.current || reducedMotion) return;

    // Smooth Parallax mouse tilt
    groupRef.current.rotation.x = lerp(
      groupRef.current.rotation.x,
      mouse.normalizedY * 0.12,
      delta * 1.2,
    );
    groupRef.current.rotation.y = lerp(
      groupRef.current.rotation.y,
      mouse.normalizedX * 0.18,
      delta * 1.2,
    );
  });

  return (
    <Float
      speed={reducedMotion ? 0 : 1.4}
      rotationIntensity={reducedMotion ? 0 : 0.12}
      floatIntensity={reducedMotion ? 0 : 0.35}
    >
      <group
        ref={groupRef}
        position={isMobile ? [0, 0.3, -1.8] : [2.5, 0, 0]}
        scale={isMobile ? 0.58 : 0.95}
      >
        {/* ================= 3D PROMINENT CODE TERMINAL ================= */}
        <group position={[0, 0, 0]} rotation={[0.05, -0.12, 0.02]}>
          {/* Glass Outer Chassis */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[4.8, 3.2, 0.08]} />
            <meshStandardMaterial
              color="#0b1120"
              roughness={0.15}
              metalness={0.85}
              transparent
              opacity={0.94}
            />
          </mesh>

          {/* Glowing Border Bezel */}
          <mesh position={[0, 0, -0.01]}>
            <boxGeometry args={[4.86, 3.26, 0.06]} />
            <meshBasicMaterial color="#6366f1" transparent opacity={0.7} />
          </mesh>

          {/* High-Contrast Crisp Code Editor Overlay */}
          <Html
            transform
            position={[0, 0, 0.05]}
            scale={0.17}
            className="pointer-events-none select-none"
          >
            <div className="w-[1000px] h-[670px] rounded-2xl bg-[#080d1a]/98 border border-white/20 shadow-2xl p-7 flex flex-col font-mono text-sm overflow-hidden">
              {/* Window Bar / Tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-3.5 h-3.5 rounded-full bg-rose-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-amber-500" />
                  <div className="w-3.5 h-3.5 rounded-full bg-emerald-500" />
                  <span className="ml-4 px-3.5 py-1.5 rounded-lg bg-indigo-950/90 text-indigo-300 border border-indigo-500/40 text-xs font-sans font-bold flex items-center gap-2 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                    ⚡ App.tsx — Production IDE
                  </span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-300 font-sans">
                  <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Available for Hire
                  </span>
                  <span className="font-semibold text-slate-400">Frontend</span>
                </div>
              </div>

              {/* Large, Sharp Code Snippet */}
              <div className="space-y-3 text-[15px] leading-relaxed flex-1 overflow-hidden font-mono font-medium">
                <div className="flex gap-5">
                  <span className="text-slate-600 select-none font-bold">
                    01
                  </span>
                  <span>
                    <span className="text-purple-400 font-bold">import</span>{" "}
                    <span className="text-sky-300 font-semibold">
                      {"{ React, useState }"}
                    </span>{" "}
                    <span className="text-purple-400 font-bold">from</span>{" "}
                    <span className="text-emerald-300 font-semibold">
                      'react'
                    </span>
                    ;
                  </span>
                </div>
                <div className="flex gap-5">
                  <span className="text-slate-600 select-none font-bold">
                    02
                  </span>
                  <span>
                    <span className="text-purple-400 font-bold">import</span>{" "}
                    <span className="text-sky-300 font-semibold">
                      {"{ NextJS, Tailwind }"}
                    </span>{" "}
                    <span className="text-purple-400 font-bold">from</span>{" "}
                    <span className="text-emerald-300 font-semibold">
                      '@stack/core'
                    </span>
                    ;
                  </span>
                </div>
                <div className="flex gap-5">
                  <span className="text-slate-600 select-none font-bold">
                    03
                  </span>
                  <span className="text-slate-400 italic">
                    // Senior Frontend & MERN Stack Engineering
                  </span>
                </div>
                <div className="flex gap-5">
                  <span className="text-slate-600 select-none font-bold">
                    04
                  </span>
                  <span>
                    <span className="text-blue-400 font-bold">const</span>{" "}
                    <span className="text-yellow-300 font-bold text-base">
                      Developer
                    </span>{" "}
                    = () {"=>"}{" "}
                    <span className="text-indigo-300 font-bold">{"{"}</span>
                  </span>
                </div>
                <div className="flex gap-5">
                  <span className="text-slate-600 select-none font-bold">
                    05
                  </span>
                  <span className="pl-5">
                    <span className="text-blue-400 font-bold">const</span>{" "}
                    <span className="text-sky-300 font-bold">engineer</span> ={" "}
                    <span className="text-indigo-300 font-bold">{"{"}</span>
                  </span>
                </div>
                <div className="flex gap-5">
                  <span className="text-slate-600 select-none font-bold">
                    06
                  </span>
                  <span className="pl-10 text-sky-200">
                    name:{" "}
                    <span className="text-emerald-300 font-bold">
                      'MD Sazibur Rahman'
                    </span>
                    ,
                  </span>
                </div>
                <div className="flex gap-5">
                  <span className="text-slate-600 select-none font-bold">
                    07
                  </span>
                  <span className="pl-10 text-sky-200">
                    role:{" "}
                    <span className="text-emerald-300 font-bold">
                      'Frontend Lead & MERN Specialist'
                    </span>
                    ,
                  </span>
                </div>
                <div className="flex gap-5">
                  <span className="text-slate-600 select-none font-bold">
                    08
                  </span>
                  <span className="pl-10 text-sky-200">
                    stack: [
                    <span className="text-amber-300 font-semibold">
                      'React'
                    </span>
                    ,{" "}
                    <span className="text-amber-300 font-semibold">
                      'Next.js'
                    </span>
                    ,{" "}
                    <span className="text-amber-300 font-semibold">
                      'TypeScript'
                    </span>
                    ,{" "}
                    <span className="text-amber-300 font-semibold">
                      'Zustand'
                    </span>
                    ],
                  </span>
                </div>
                <div className="flex gap-5">
                  <span className="text-slate-600 select-none font-bold">
                    09
                  </span>
                  <span className="pl-10 text-sky-200">
                    experience:{" "}
                    <span className="text-purple-300 font-bold">
                      '3+ Years Delivering Production Apps'
                    </span>
                    ,
                  </span>
                </div>
                <div className="flex gap-5">
                  <span className="text-slate-600 select-none font-bold">
                    10
                  </span>
                  <span className="pl-5">
                    <span className="text-indigo-300 font-bold">{"}"}</span>;
                  </span>
                </div>
                <div className="flex gap-5">
                  <span className="text-slate-600 select-none font-bold">
                    11
                  </span>
                  <span className="pl-5">
                    <span className="text-purple-400 font-bold">return</span> (
                    <span className="text-sky-400 font-extrabold text-base">
                      {"<ScalablePerformantWebApps />"}
                    </span>
                    );
                  </span>
                </div>
                <div className="flex gap-5">
                  <span className="text-slate-600 select-none font-bold">
                    12
                  </span>
                  <span>
                    <span className="text-indigo-300 font-bold">{"}"}</span>;
                  </span>
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-3.5 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-sans">
                <span className="flex items-center gap-2 text-slate-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping" />
                  <span className="font-mono">
                    DevServer Active — Ready to Collaborate
                  </span>
                </span>
                <span className="text-indigo-400 font-bold bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/30">
                  Build Status: 100% Passed
                </span>
              </div>
            </div>
          </Html>
        </group>

        {/* ================= FLOATING 3D TECH ELEMENTS AROUND TERMINAL ================= */}
        {/* Floating Bracket Tag </ > (Top Left) */}
        <Float speed={2.2} rotationIntensity={0.4} floatIntensity={0.8}>
          <group position={[-2.4, 1.2, 0.4]} scale={0.4}>
            <mesh>
              <octahedronGeometry args={[0.45, 0]} />
              <meshStandardMaterial
                color="#a78bfa"
                wireframe
                emissive="#7c3aed"
                emissiveIntensity={0.6}
              />
            </mesh>
          </group>
        </Float>

        {/* Floating Tech Cube (Bottom Right) */}
        <Float speed={2.5} rotationIntensity={0.5} floatIntensity={0.6}>
          <group position={[2.4, -1.2, 0.4]} scale={0.38}>
            <mesh rotation={[0.4, 0.4, 0]}>
              <boxGeometry args={[0.7, 0.7, 0.7]} />
              <meshStandardMaterial
                color="#38bdf8"
                metalness={0.85}
                roughness={0.15}
              />
            </mesh>
          </group>
        </Float>

        {/* Floating Wireframe Core (Bottom Center) */}
        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.7}>
          <group position={[-0.2, -1.6, 0.5]} scale={0.32}>
            <mesh>
              <icosahedronGeometry args={[0.55, 0]} />
              <meshStandardMaterial color="#f472b6" wireframe />
            </mesh>
          </group>
        </Float>
      </group>
    </Float>
  );
}

function FloatingParticles() {
  const pointsRef = useRef<Points>(null);
  const isMobile = useIsMobile();
  const reducedMotion = useReducedMotion();
  const count = isMobile ? 40 : 90;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return pos;
  }, [count]);

  useFrame((_, delta) => {
    if (!pointsRef.current || reducedMotion) return;
    pointsRef.current.rotation.y += delta * 0.01;
    pointsRef.current.rotation.x += delta * 0.005;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
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
      <ambientLight intensity={0.9} />
      <pointLight position={[5, 5, 5]} intensity={3.5} color="#8b5cf6" />
      <pointLight position={[-5, -4, 4]} intensity={2.8} color="#38bdf8" />
      <directionalLight position={[0, 6, 6]} intensity={1.6} color="#ffffff" />
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
      { rootMargin: "100px 0px 100px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full">
      {isInView && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 1.25]}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
        >
          <SceneLighting />
          <DevScene />
          <FloatingParticles />
        </Canvas>
      )}
    </div>
  );
}

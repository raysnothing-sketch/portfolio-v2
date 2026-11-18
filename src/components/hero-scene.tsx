"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/** PRNG déterministe : mêmes positions à chaque rendu (règle de pureté React). */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function Dust({ count = 800 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const paused = useReducedMotion();

  const positions = useMemo(() => {
    const random = mulberry32(0x5eed);
    const array = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const radius = 2.4 + random() * 6.2;
      const theta = random() * Math.PI * 2;
      array[i * 3] = Math.cos(theta) * radius;
      array[i * 3 + 1] = (random() - 0.5) * 7.5;
      array[i * 3 + 2] = Math.sin(theta) * radius;
    }
    return array;
  }, [count]);

  useFrame((_, delta) => {
    if (!ref.current || paused) return;
    ref.current.rotation.y += delta * 0.018;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#9fe8ff"
        size={0.026}
        sizeAttenuation
        transparent
        opacity={0.7}
        depthWrite={false}
      />
    </points>
  );
}

function Knot() {
  const ref = useRef<THREE.Mesh>(null);
  const paused = useReducedMotion();

  useFrame((state, delta) => {
    if (!ref.current || paused) return;
    ref.current.rotation.y += delta * 0.14;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.22;
  });

  return (
    <group position={[0, 0.1, 0]}>
      <mesh ref={ref}>
        <torusKnotGeometry args={[0.98, 0.3, 200, 26, 2, 3]} />
        <meshBasicMaterial color="#8b6dff" wireframe transparent opacity={0.38} />
      </mesh>

      <mesh>
        <torusKnotGeometry args={[0.98, 0.3, 120, 16, 2, 3]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.12} />
      </mesh>

      <mesh scale={0.55}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#0b1020" transparent opacity={0.9} />
      </mesh>

      <mesh scale={3.6}>
        <sphereGeometry args={[1, 24, 24]} />
        <meshBasicMaterial color="#5b3dff" transparent opacity={0.05} depthWrite={false} />
      </mesh>
    </group>
  );
}

function Rig({ children }: { children: React.ReactNode }) {
  const group = useRef<THREE.Group>(null);
  const paused = useReducedMotion();

  useFrame((state) => {
    if (!group.current || paused) return;
    const { x, y } = state.pointer;
    group.current.rotation.y += (x * 0.28 - group.current.rotation.y) * 0.045;
    group.current.rotation.x += (-y * 0.18 - group.current.rotation.x) * 0.045;
  });

  return <group ref={group}>{children}</group>;
}

export function HeroScene() {
  const host = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);

  // Coupe la boucle de rendu quand la scène sort du viewport : le GPU respire.
  useEffect(() => {
    const node = host.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { rootMargin: "120px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={host} className="absolute inset-0" aria-hidden="true">
      <Canvas
        frameloop={visible ? "always" : "never"}
        dpr={[1, 1.75]}
        camera={{ position: [0, 0.4, 6.4], fov: 42 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Rig>
          <Knot />
          <Dust />
        </Rig>
        <gridHelper args={[34, 34, "#1d2540", "#0d1222"]} position={[0, -2.35, 0]} />
      </Canvas>
    </div>
  );
}

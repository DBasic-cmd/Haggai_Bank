import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

function Particles({ scrollY, theme }) {
  const ref = useRef();

  const count = 5000;

  const positions = React.useMemo(() => {
    const pos = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const r = 3.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }

    return pos;
  }, []);

  const color = React.useMemo(() => {
    return theme === "dark" ? "#ff4d6d" : "#111111";
  }, [theme]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (ref.current) {
      ref.current.rotation.y = t * 0.15;
      ref.current.rotation.x = Math.sin(t * 0.1) * 0.2;

      const scale = 1 + scrollY * 0.0005;
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color={color}
        size={0.014}          // 🔥 slightly bigger = better visibility
        sizeAttenuation
        depthWrite={false}
        opacity={0.9}         // 🔥 avoid full opacity (prevents blending loss)
      />
    </Points>
  );
}

export default function Sphere3D({ theme }) {
  const [scrollY, setScrollY] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5] }}
        gl={{ alpha: true, antialias: true }}
      >
        {/* 🔥 CRITICAL FIX: depth fog makes sphere always visible */}
        <fog attach="fog" args={["#05070d", 5, 12]} />

        {/* 🔥 stronger base visibility */}
        <ambientLight intensity={0.8} />

        <Particles scrollY={scrollY} theme={theme} />
      </Canvas>
    </div>
  );
}
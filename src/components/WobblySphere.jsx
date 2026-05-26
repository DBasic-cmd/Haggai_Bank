import React, { useEffect, useRef } from "react";

const WobblySphere = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const centerX = width / 2;
    const centerY = height / 2;

    const particles = [];
    const total = 600;

    let scrollY = 0;

    // Create dot sphere
    for (let i = 0; i < total; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      particles.push({
        theta,
        phi,
        radius: 180 + Math.random() * 40,
        baseX: 0,
        baseY: 0,
        baseZ: 0,
      });
    }

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // subtle fade background
      ctx.fillStyle = "rgba(255,255,255,0.02)";
      ctx.fillRect(0, 0, width, height);

      const time = Date.now() * 0.0005;

      particles.forEach((p, i) => {
        // wobble deformation (noise-like motion)
        const wobble =
          Math.sin(time + p.theta * 2) * 20 +
          Math.cos(time + p.phi * 2) * 20;

        const radius = p.radius + wobble + scrollY * 0.02;

        const x =
          centerX +
          radius * Math.sin(p.phi) * Math.cos(p.theta + time * 0.2);

        const y =
          centerY +
          radius * Math.cos(p.phi) +
          Math.sin(time + i) * 10;

        // gradient left → right mapping
        const gradientFactor = x / width;

        const r = 220 * (1 - gradientFactor) + 30 * gradientFactor;
        const g = 30;
        const b = 60 * gradientFactor;

        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},0.8)`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default WobblySphere;
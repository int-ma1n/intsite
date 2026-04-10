"use client";
import { useEffect, useRef } from "react";

interface Props {
  speedFactor?: number;
  backgroundColor?: string;
  starColor?: [number, number, number];
  starCount?: number;
}

export default function Starfield(props: Readonly<Props>) {
  const {
    speedFactor = 0.05,
    backgroundColor = "black",
    starColor = [255, 255, 255],
    starCount = 5000,
  } = props;

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext("2d");
    if (!c) return;

    let w = window.innerWidth;
    let h = window.innerHeight;
    let rafId: number;

    canvas.width = w;
    canvas.height = h;

    const starX = new Float32Array(starCount);
    const starY = new Float32Array(starCount);
    const starZ = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      starX[i] = Math.random() * 1600 - 800;
      starY[i] = Math.random() * 900 - 450;
      starZ[i] = Math.random() * 1000;
    }

    const colorStr = `rgb(${starColor[0]},${starColor[1]},${starColor[2]})`;

    const handleResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w;
      canvas.height = h;
    };

    window.addEventListener("resize", handleResize);

    let prevTime = 0;

    const tick = (time: number) => {
      const elapsed = prevTime === 0 ? 0 : time - prevTime;
      prevTime = time;

      const distance = elapsed * speedFactor;

      c.fillStyle = backgroundColor;
      c.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;

      c.fillStyle = colorStr;

      for (let i = 0; i < starCount; i++) {
        starZ[i] -= distance;
        if (starZ[i] <= 1) starZ[i] += 1000;

        const z = starZ[i];
        const x = cx + starX[i] / (z * 0.001);
        const y = cy + starY[i] / (z * 0.001);

        if (x < 0 || x >= w || y < 0 || y >= h) continue;

        const d = z / 1000;
        const b = 1 - d * d;

        c.globalAlpha = b;
        c.fillRect(x, y, 1, 1);
      }

      c.globalAlpha = 1;

      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
    };
  }, [starColor, backgroundColor, speedFactor, starCount]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        padding: 0,
        margin: 0,
        position: "fixed",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 10,
        opacity: 1,
        pointerEvents: "none",
        mixBlendMode: "screen",
      }}
    />
  );
}

import { useMemo } from "react";

interface Star {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function Starfield({ count = 150 }: { count?: number }) {
  const stars = useMemo<Star[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: (i * 137.5) % 100,
      y: (i * 73.1) % 100,
      size: (i % 5) * 0.5 + 0.5,
      duration: (i % 4) + 2,
      delay: i % 6,
      opacity: (i % 6) * 0.1 + 0.2,
    }));
  }, [count]);

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            opacity: star.opacity,
            animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
          }}
        />
      ))}
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: "600px",
          height: "400px",
          top: "10%",
          left: "-5%",
          background:
            "radial-gradient(ellipse, oklch(0.45 0.15 305 / 0.12) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: "500px",
          height: "350px",
          top: "40%",
          right: "-5%",
          background:
            "radial-gradient(ellipse, oklch(0.8 0.12 196 / 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{
          width: "400px",
          height: "300px",
          bottom: "10%",
          left: "30%",
          background:
            "radial-gradient(ellipse, oklch(0.12 0.04 264 / 0.3) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}

export function CosmicSphere() {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: "380px", height: "380px" }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(ellipse at center, oklch(0.8 0.12 196 / 0.08) 0%, transparent 70%)",
          animation: "spherePulse 4s ease infinite",
        }}
      />
      <div
        className="absolute"
        style={{
          width: "340px",
          height: "340px",
          borderRadius: "50%",
          border: "1px solid oklch(0.8 0.12 196 / 0.5)",
          boxShadow: "0 0 8px oklch(0.8 0.12 196 / 0.4)",
          animation: "orbitRing 12s linear infinite",
        }}
      />
      <div
        className="absolute"
        style={{
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "1px solid oklch(0.77 0.12 80 / 0.4)",
          boxShadow: "0 0 6px oklch(0.77 0.12 80 / 0.3)",
          animation: "orbitRing2 18s linear infinite",
        }}
      />
      <div
        className="absolute"
        style={{
          width: "260px",
          height: "260px",
          borderRadius: "50%",
          border: "1px solid oklch(0.45 0.15 305 / 0.5)",
          animation: "orbitRing 7s linear infinite reverse",
        }}
      />
      <div
        style={{
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 30% 30%, oklch(0.25 0.06 220) 0%, oklch(0.1 0.03 264) 40%, oklch(0.068 0.018 264) 100%)",
          boxShadow:
            "0 0 60px oklch(0.8 0.12 196 / 0.4), 0 0 120px oklch(0.8 0.12 196 / 0.2), 0 0 200px oklch(0.45 0.15 305 / 0.15), inset 0 0 60px oklch(0.068 0.018 264 / 0.8)",
          border: "1px solid oklch(0.8 0.12 196 / 0.3)",
          animation: "spherePulse 4s ease infinite, float 8s ease infinite",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            backgroundImage:
              "linear-gradient(oklch(0.8 0.12 196 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(0.8 0.12 196 / 0.06) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            background:
              "radial-gradient(circle at 60% 40%, oklch(0.45 0.15 305 / 0.3) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(to right, transparent, oklch(0.8 0.12 196 / 0.4), transparent)",
            transform: "translateY(-50%)",
          }}
        />
      </div>
    </div>
  );
}

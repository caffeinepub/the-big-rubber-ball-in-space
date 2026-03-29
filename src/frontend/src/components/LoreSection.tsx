import { useEffect, useRef, useState } from "react";

interface LoreSectionProps {
  id: string;
  index: number;
  title: string;
  gridText: string;
  trueText: string;
  hiddenLore: string;
  isShifted: boolean;
  variant:
    | "cyan"
    | "gold"
    | "red"
    | "green"
    | "purple"
    | "fractal"
    | "glitch"
    | "rebellion";
  imageSrc?: string;
}

const variantConfig = {
  cyan: {
    accent: "text-cyan",
    bg: "oklch(0.8 0.12 196 / 0.35)",
    glow: "glow-cyan",
    badge:
      "text-[oklch(0.8_0.12_196)]   border-[oklch(0.8_0.12_196/0.4)]   bg-[oklch(0.8_0.12_196/0.1)]",
  },
  gold: {
    accent: "text-gold",
    bg: "oklch(0.77 0.12 80 / 0.35)",
    glow: "glow-gold",
    badge:
      "text-[oklch(0.77_0.12_80)]   border-[oklch(0.77_0.12_80/0.4)]   bg-[oklch(0.77_0.12_80/0.1)]",
  },
  red: {
    accent: "text-red-400",
    bg: "oklch(0.58 0.22 27 / 0.5)",
    glow: "glow-cyan",
    badge: "text-red-400 border-red-800/50 bg-red-900/20",
  },
  green: {
    accent: "text-emerald-400",
    bg: "oklch(0.65 0.18 160 / 0.4)",
    glow: "glow-cyan",
    badge: "text-emerald-400 border-emerald-800/50 bg-emerald-900/20",
  },
  purple: {
    accent: "text-violet",
    bg: "oklch(0.45 0.15 305 / 0.4)",
    glow: "glow-cyan",
    badge: "text-purple-400 border-purple-800/50 bg-purple-900/20",
  },
  fractal: {
    accent: "text-cyan",
    bg: "oklch(0.8 0.12 196 / 0.35)",
    glow: "glow-cyan",
    badge:
      "text-[oklch(0.8_0.12_196)]   border-[oklch(0.8_0.12_196/0.4)]   bg-[oklch(0.8_0.12_196/0.1)]",
  },
  glitch: {
    accent: "text-cyan",
    bg: "oklch(0.8 0.12 196 / 0.5)",
    glow: "glow-cyan",
    badge:
      "text-[oklch(0.8_0.12_196)]   border-[oklch(0.8_0.12_196/0.4)]   bg-[oklch(0.8_0.12_196/0.1)]",
  },
  rebellion: {
    accent: "text-violet",
    bg: "oklch(0.45 0.15 305 / 0.4)",
    glow: "glow-cyan",
    badge: "text-purple-300 border-purple-700/50 bg-purple-900/20",
  },
};

function VisualPattern({
  variant,
  imageSrc,
}: { variant: string; imageSrc?: string }) {
  return (
    <div className="absolute inset-0">
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
      )}
      {variant === "cyan" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            style={{
              backgroundImage:
                "linear-gradient(oklch(0.8 0.12 196 / 0.06) 1px, transparent 1px), linear-gradient(90deg, oklch(0.8 0.12 196 / 0.06) 1px, transparent 1px)",
              backgroundSize: "30px 30px",
              position: "absolute",
              inset: 0,
            }}
          />
          <div className="relative z-10 text-center">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  inset: `-${i * 20}px`,
                  border: "1px solid oklch(0.8 0.12 196 / 0.25)",
                  animation: `holoPulse ${2 + i * 0.5}s ease infinite ${i * 0.3}s`,
                }}
              />
            ))}
            <div
              className="text-4xl"
              style={{
                color: "oklch(0.8 0.12 196)",
                textShadow: "0 0 20px oklch(0.8 0.12 196)",
              }}
            >
              ⬡
            </div>
            <div
              className="font-orbitron text-xs mt-2"
              style={{ color: "oklch(0.8 0.12 196 / 0.6)" }}
            >
              GRID LINK
            </div>
          </div>
        </div>
      )}
      {variant === "gold" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, oklch(0.77 0.12 80 / 0.08) 0%, transparent 70%)",
            }}
          />
          <div className="text-center z-10">
            <div
              className="text-6xl mb-3"
              style={{
                color: "oklch(0.77 0.12 80)",
                textShadow: "0 0 40px oklch(0.77 0.12 80 / 0.8)",
              }}
            >
              ☩
            </div>
            <div
              className="font-cinzel text-xs tracking-widest"
              style={{ color: "oklch(0.77 0.12 80 / 0.7)" }}
            >
              ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ
            </div>
          </div>
        </div>
      )}
      {variant === "red" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, oklch(0.45 0.18 20 / 0.3) 0%, transparent 70%)",
            }}
          />
          <div className="text-center z-10">
            <div className="font-orbitron text-xs text-red-500 tracking-widest mb-4 animate-pulse">
              ⚠ SYSTEM BREACH ⚠
            </div>
            <div
              className="text-5xl"
              style={{
                color: "oklch(0.6 0.22 20)",
                textShadow: "0 0 30px oklch(0.6 0.22 20 / 0.8)",
              }}
            >
              ☠
            </div>
            <div className="font-orbitron text-xs text-red-600 tracking-widest mt-4">
              CYBERMANCY ACTIVE
            </div>
          </div>
        </div>
      )}
      {variant === "green" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, oklch(0.6 0.18 160 / 0.15) 0%, transparent 70%)",
            }}
          />
          <div className="text-center z-10">
            <div
              className="text-5xl mb-3"
              style={{
                color: "oklch(0.65 0.18 160)",
                textShadow: "0 0 30px oklch(0.65 0.18 160 / 0.8)",
              }}
            >
              ✦
            </div>
            <div className="font-orbitron text-xs text-emerald-400 tracking-widest">
              LIBERATED ZONE
            </div>
            <div className="font-cinzel text-sm text-emerald-300/70 mt-2 italic">
              Astyloth walks here
            </div>
          </div>
        </div>
      )}
      {variant === "fractal" && (
        <div className="absolute inset-0 flex items-center justify-center">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="absolute"
              style={{
                width: `${60 + i * 30}px`,
                height: `${60 + i * 30}px`,
                borderRadius: i % 2 === 0 ? "50%" : "8px",
                border: "1px solid oklch(0.8 0.12 196 / 0.25)",
                transform: `rotate(${i * 25}deg)`,
                animation: `orbitRing ${6 + i * 2}s linear ${i % 2 === 0 ? "" : "reverse"} infinite`,
              }}
            />
          ))}
          <div
            className="font-orbitron text-xs tracking-widest z-10"
            style={{ color: "oklch(0.8 0.12 196 / 0.6)" }}
          >
            TRIAL MATRIX
          </div>
        </div>
      )}
      {variant === "glitch" && (
        <div className="absolute inset-0 overflow-hidden">
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 3px, oklch(0.8 0.12 196 / 0.03) 3px, oklch(0.8 0.12 196 / 0.03) 4px)",
            }}
          />
          <div className="absolute inset-0 flex flex-col justify-center p-8 gap-2">
            {[
              {
                bg: "oklch(0.8 0.12 196 / 0.1)",
                w: "40%",
                anim: "holoPulse 1.5s ease infinite 0s",
              },
              {
                bg: "oklch(0.8 0.12 196 / 0.2)",
                w: "65%",
                anim: "holoPulse 2.1s ease infinite 0.2s",
              },
              {
                bg: "oklch(0.8 0.12 196 / 0.3)",
                w: "52%",
                anim: "holoPulse 2.4s ease infinite 0.4s",
              },
              {
                bg: "oklch(0.8 0.12 196 / 0.1)",
                w: "38%",
                anim: "holoPulse 3.0s ease infinite 0.6s",
              },
              {
                bg: "oklch(0.8 0.12 196 / 0.2)",
                w: "70%",
                anim: "holoPulse 3.3s ease infinite 0.8s",
              },
              {
                bg: "oklch(0.8 0.12 196 / 0.3)",
                w: "45%",
                anim: "holoPulse 3.9s ease infinite 1.0s",
              },
              {
                bg: "oklch(0.8 0.12 196 / 0.1)",
                w: "60%",
                anim: "holoPulse 4.2s ease infinite 1.2s",
              },
              {
                bg: "oklch(0.8 0.12 196 / 0.2)",
                w: "35%",
                anim: "holoPulse 4.8s ease infinite 1.4s",
              },
            ].map((line) => (
              <div
                key={line.anim}
                className="h-px"
                style={{
                  background: line.bg,
                  width: line.w,
                  animation: line.anim,
                }}
              />
            ))}
            <div
              className="mt-4 font-orbitron text-xs tracking-widest animate-pulse"
              style={{ color: "oklch(0.8 0.12 196 / 0.6)" }}
            >
              TIMELINE CORRUPTED
            </div>
          </div>
        </div>
      )}
      {variant === "rebellion" && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, oklch(0.45 0.15 305 / 0.2) 0%, transparent 70%)",
            }}
          />
          <div className="text-center z-10">
            <div
              className="text-5xl mb-3"
              style={{
                color: "oklch(0.65 0.15 305)",
                textShadow: "0 0 30px oklch(0.65 0.15 305 / 0.8)",
              }}
            >
              ☯
            </div>
            <div className="font-orbitron text-xs text-purple-400 tracking-widest">
              THE AWAKENED
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function LoreSection({
  id,
  index,
  title,
  gridText,
  trueText,
  hiddenLore,
  isShifted,
  variant,
  imageSrc,
}: LoreSectionProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cfg = variantConfig[variant] ?? variantConfig.cyan;
  const isEven = index % 2 === 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.12 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const displayText = isShifted ? trueText : gridText;

  return (
    <section
      id={id}
      ref={ref}
      className={`relative py-20 px-4 md:px-8 transition-all duration-700 ${visible ? "section-visible" : "section-hidden"}`}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: isEven
            ? "linear-gradient(135deg, transparent 60%, oklch(0.8 0.12 196 / 0.03) 100%)"
            : "linear-gradient(225deg, transparent 60%, oklch(0.77 0.12 80 / 0.03) 100%)",
        }}
      />
      <div className="max-w-6xl mx-auto">
        <div className="rune-divider mb-8">
          <span className="font-orbitron text-xs tracking-widest opacity-40">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-cinzel text-xs tracking-widest opacity-40">
            ✦ ✦ ✦
          </span>
        </div>
        <div
          className={`grid gap-6 ${isEven ? "md:grid-cols-[1.4fr_1fr]" : "md:grid-cols-[1fr_1.4fr]"}`}
        >
          {/* Content card */}
          <div className={`card-cosmic p-8 ${!isEven ? "md:order-2" : ""}`}>
            <div
              className={`inline-block px-3 py-1 rounded text-xs font-orbitron border mb-4 ${cfg.badge}`}
            >
              SECTOR — {String(index + 1).padStart(2, "0")}
            </div>
            <h2
              className={`font-cinzel text-2xl md:text-3xl font-bold uppercase mb-4 ${cfg.accent} ${cfg.glow} leading-tight`}
            >
              {title}
            </h2>
            <div className="transition-all duration-500">
              {isShifted && (
                <div className="mb-3 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="font-orbitron text-xs text-red-400 tracking-widest">
                    TRUE REALITY SIGNAL
                  </span>
                </div>
              )}
              <p
                className={`font-crimson text-lg leading-relaxed ${isShifted ? "text-red-200/90" : "text-[oklch(0.82_0.02_264)]"}`}
              >
                {displayText}
              </p>
            </div>
            <div
              className="mt-6"
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <button
                type="button"
                className={`btn-cyber text-xs py-2 px-4 ${variant === "gold" ? "btn-gold" : ""}`}
                aria-expanded={hovered}
              >
                {hovered ? "CONCEALING" : "▸ REVEAL LORE"}
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${hovered ? "max-h-48 opacity-100 mt-4" : "max-h-0 opacity-0"}`}
              >
                <div
                  className="p-4 rounded border border-dashed font-crimson text-sm italic leading-relaxed"
                  style={{
                    borderColor: "oklch(0.77 0.12 80 / 0.3)",
                    background: "oklch(0.07 0.02 264 / 0.8)",
                    color: "oklch(0.77 0.12 80 / 0.9)",
                  }}
                >
                  {hiddenLore}
                </div>
              </div>
            </div>
          </div>
          {/* Visual card */}
          <div
            className={`card-cosmic relative overflow-hidden min-h-[280px] ${!isEven ? "md:order-1" : ""}`}
          >
            <VisualPattern variant={variant} imageSrc={imageSrc} />
          </div>
        </div>
      </div>
    </section>
  );
}

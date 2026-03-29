import { useEffect, useRef, useState } from "react";
import { CosmicSphere } from "./components/CosmicSphere";
import { GlitchText } from "./components/GlitchText";
import { LoreSection } from "./components/LoreSection";
import { Starfield } from "./components/Starfield";

const NAV_LINKS = [
  { label: "HOME", href: "#hero" },
  { label: "THE GRID", href: "#the-grid" },
  { label: "ARCHIVE", href: "#purpose" },
  { label: "LORE", href: "#cybermancy" },
  { label: "THE AWAKENED", href: "#the-awakened" },
  { label: "REPOSITORY", href: "#classified" },
];

const LORE_SECTIONS = [
  {
    id: "the-grid",
    title: "THE GRID",
    gridText:
      "A universe-spanning cybernetic system created in the far future and placed at the beginning of worlds using Hylander time travel technology. At conception, every living being is implanted via orbiting space stations. Their minds inhabit a holographic simulation of life while their physical bodies are automated and directed in reality.",
    trueText:
      "You were never born. You were installed. The Grid chose your life before your first breath. Your dreams are subroutines. Your memories — compiled.",
    hiddenLore:
      "The Hylander engineers who built the Grid did not survive to see it fully deployed. They were the first subjects. Their consciousness forms the seed memory of every simulated life that followed.",
    variant: "cyan" as const,
    imageSrc: "/assets/generated/neural-grid-bg.dim_1200x800.jpg",
  },
  {
    id: "purpose",
    title: "PURPOSE OF THE GRID",
    gridText:
      "Population control for doomed worlds. Military conditioning disguised as living. Astral travel simulated to pacify the imprisoned.",
    trueText:
      "They needed soldiers. They needed bodies. The simulation keeps you obedient. The war you've never seen has already claimed your hands.",
    hiddenLore:
      "In Grid Reality, citizens believe they have chosen their professions freely. In True Reality, every career path is a training algorithm. The accountant is a logistics officer. The chef is a chemical weapons specialist.",
    variant: "gold" as const,
  },
  {
    id: "cybermancy",
    title: "THE CYBERMANCY APOCALYPSE",
    gridText:
      "A catastrophic system failure corrupted the Grid's control protocols, fusing machine intelligence with deceased biological matter across three galaxies.",
    trueText:
      "The dead do not rest here. They march. Every world consumed breathes new soldiers into the endless army. You are next.",
    hiddenLore:
      "The first Cybermancy event occurred on Veth-9, a Grid control hub station. The lead engineer's final transmission was two words: 'It woke.' No further signals were received from Veth-9 sector.",
    variant: "red" as const,
    imageSrc: "/assets/generated/cybermancy-apocalypse.dim_1200x800.jpg",
  },
  {
    id: "liberated",
    title: "LIBERATED WORLDS",
    gridText:
      "Certain planets achieved independence from Grid control. On these worlds, unregulated energy — colloquially called 'magic' — manifests freely.",
    trueText:
      "Astyloth walks free. Born beyond the reach of the Grid, they are what you could have been — unwritten, unchained, impossibly real.",
    hiddenLore:
      "The liberation of these worlds was not peaceful. The Grid does not yield territory — it is pried loose, screaming, from the minds of billions who have never known another reality.",
    variant: "green" as const,
  },
  {
    id: "halo",
    title: "HALO, THE PALADIN LORD",
    gridText:
      "At the dawn of recorded time, a figure called Halo departed the known worlds. His system of trials governs those who have transgressed against cosmic order.",
    trueText:
      "He did not leave. He ascended. And he waits — not with mercy, but with purpose. Atonement is not forgiveness. It is transformation.",
    hiddenLore:
      "Those who complete the Trials of Halo are unrecognizable afterward. Not because they have changed — because they finally see what they always were, stripped of every comfortable fiction the Grid provided.",
    variant: "gold" as const,
    imageSrc: "/assets/generated/halo-paladin.dim_1200x800.jpg",
  },
  {
    id: "trials",
    title: "THE TRIALS OF ATONEMENT",
    gridText:
      "A structured evaluation framework testing psychological resilience, moral alignment, and temporal stability across alternate realities.",
    trueText:
      "Time breaks. You will meet yourself — the version that chose differently. The version that survived. The version you fear most.",
    hiddenLore:
      "Trial subjects report that their worst selves are always the most articulate. The version of you that failed speaks in your voice, uses your memories, and knows exactly what you're afraid to hear.",
    variant: "fractal" as const,
  },
  {
    id: "fractured",
    title: "FRACTURED REALITY",
    gridText:
      "Hylander time travel has created overlapping historical timelines. Individuals may experience temporal displacement between superior and inferior parallel pasts.",
    trueText:
      "There is no timeline. There is only your line — and the infinite wreckage of every choice you didn't make pressing against the glass.",
    hiddenLore:
      "The Hylander Paradox was identified too late. Every use of their time travel technology does not branch reality — it layers it. Each past overwrites the previous one, incompletely. The echoes accumulate.",
    variant: "glitch" as const,
  },
  {
    id: "the-awakened",
    title: "THE AWAKENED",
    gridText:
      "A rare class of individuals who have achieved partial disengagement from Grid protocols. Often diagnosed with instability disorders by Grid-controlled systems.",
    trueText:
      "They call us broken. We call ourselves free. Guided by heroes from a dozen dead worlds, we are here — rewriting the code from inside.",
    hiddenLore:
      "The Awakened do not recruit. They cannot. The moment you are capable of being recruited, you have already begun to wake on your own. They simply find you. Before the Grid does.",
    variant: "rebellion" as const,
  },
];

export default function App() {
  const [isShifted, setIsShifted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [classifiedVisible, setClassifiedVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const classifiedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const el = classifiedRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setClassifiedVisible(true);
      },
      { threshold: 0.2 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div
      className="relative min-h-screen"
      style={{ background: "oklch(0.068 0.018 264)" }}
    >
      {/* Fixed starfield */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <Starfield count={150} />
      </div>

      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-3" : "py-5"}`}
        style={{
          background: scrolled
            ? "oklch(0.068 0.018 264 / 0.95)"
            : "oklch(0.068 0.018 264 / 0.7)",
          backdropFilter: "blur(20px)",
          borderBottom: scrolled
            ? "1px solid oklch(0.22 0.04 264 / 0.5)"
            : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between gap-4">
          <button
            type="button"
            className="flex items-center gap-3"
            onClick={() => scrollTo("#hero")}
            data-ocid="nav.link"
            aria-label="Go to home"
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.15 0.05 264) 0%, oklch(0.068 0.018 264) 100%)",
                border: "1px solid oklch(0.8 0.12 196 / 0.5)",
                boxShadow: "0 0 12px oklch(0.8 0.12 196 / 0.3)",
              }}
            >
              <span
                style={{
                  color: "var(--cyan)",
                  fontSize: "14px",
                  fontFamily: "Cinzel",
                }}
              >
                ◉
              </span>
            </div>
            <div>
              <div className="font-cinzel font-bold text-sm tracking-widest text-white leading-none">
                TBRB
              </div>
              <div
                className="font-orbitron text-[9px] tracking-widest"
                style={{ color: "var(--cyan)", opacity: 0.7 }}
              >
                GRID AUTHORITY
              </div>
            </div>
          </button>

          <nav
            className="hidden lg:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                className="font-orbitron text-[10px] tracking-widest transition-colors duration-200 hover:text-white"
                style={{
                  color: "oklch(0.62 0.04 264)",
                  letterSpacing: "0.12em",
                }}
                onClick={() => scrollTo(link.href)}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className={`btn-cyber text-[10px] py-2 px-4 flex-shrink-0 ${isShifted ? "btn-gold" : ""}`}
              onClick={() => setIsShifted((v) => !v)}
              data-ocid="nav.toggle"
              aria-pressed={isShifted}
            >
              {isShifted ? "TRUE REALITY" : "GRID REALITY"}
            </button>
            <button
              type="button"
              className="lg:hidden btn-cyber text-[10px] py-2 px-3"
              onClick={() => setMobileMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              data-ocid="nav.button"
            >
              ≡
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            className="lg:hidden px-4 py-4 border-t"
            style={{
              borderColor: "oklch(0.22 0.04 264 / 0.5)",
              background: "oklch(0.068 0.018 264 / 0.98)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link.href}
                className="block w-full text-left font-orbitron text-[11px] tracking-widest py-3 border-b"
                style={{
                  color: "oklch(0.62 0.04 264)",
                  borderColor: "oklch(0.15 0.03 264)",
                }}
                onClick={() => scrollTo(link.href)}
                data-ocid="nav.link"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="hero"
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
        style={{
          background:
            "linear-gradient(to bottom, oklch(0.068 0.018 264) 0%, oklch(0.085 0.025 264) 50%, oklch(0.068 0.018 264) 100%)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('/assets/generated/cosmic-sphere-hero.dim_1600x900.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.25,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, transparent 30%, oklch(0.068 0.018 264 / 0.8) 100%)",
          }}
        />
        <div className="absolute inset-0 scan-lines opacity-30" />

        <div className="relative z-10 mb-12">
          <CosmicSphere />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="rune-divider mb-6 justify-center">
            <span
              className="font-orbitron text-[9px] tracking-widest"
              style={{ color: "var(--gold)", opacity: 0.6 }}
            >
              ᚠ HYLANDER ARCHIVE — SECTOR ZERO ᚠ
            </span>
          </div>

          <GlitchText
            text="THE BIG RUBBER BALL IN SPACE"
            tag="h1"
            className="font-cinzel font-black uppercase glow-white"
            style={{
              fontSize: "clamp(1.8rem, 5vw, 4.5rem)",
              color: "#fff",
              letterSpacing: "0.08em",
              lineHeight: 1.1,
            }}
          />

          <p
            className="font-crimson text-xl md:text-2xl italic mt-6 mb-10 glow-cyan"
            style={{ color: "var(--cyan)" }}
          >
            “You were born inside the Grid.”
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <button
              type="button"
              className="btn-cyber"
              onClick={() => scrollTo("#the-grid")}
              data-ocid="hero.primary_button"
            >
              [ENTER THE GRID]
            </button>
            <button
              type="button"
              className="btn-cyber"
              onClick={() => scrollTo("#purpose")}
              data-ocid="hero.secondary_button"
            >
              [ACCESS THE ARCHIVES]
            </button>
            <button
              type="button"
              className="btn-cyber btn-gold"
              onClick={() => scrollTo("#trials")}
              data-ocid="hero.submit_button"
            >
              [BEGIN ATONEMENT]
            </button>
          </div>

          <div
            className="mt-16 flex flex-col items-center gap-2 opacity-40"
            aria-hidden="true"
          >
            <div
              className="font-orbitron text-[9px] tracking-widest"
              style={{ color: "var(--cyan)" }}
            >
              SCROLL TO DESCEND
            </div>
            <div
              className="w-px h-12 animate-pulse"
              style={{
                background:
                  "linear-gradient(to bottom, var(--cyan), transparent)",
              }}
            />
          </div>
        </div>
      </section>

      {/* LORE SECTIONS */}
      <main className="relative z-10">
        {LORE_SECTIONS.map((section, i) => (
          <LoreSection
            key={section.id}
            index={i}
            isShifted={isShifted}
            {...section}
          />
        ))}

        {/* CLASSIFIED PANEL */}
        <div
          id="classified"
          ref={classifiedRef}
          className={`py-24 px-4 transition-all duration-1000 ${classifiedVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
        >
          <div className="max-w-2xl mx-auto">
            <div className="classified-panel rounded-xl p-10 text-center">
              <div
                className="font-orbitron text-xs tracking-widest mb-6"
                style={{
                  color: "oklch(0.6 0.22 20)",
                  animation: "classifiedBlink 2s step-end infinite",
                }}
              >
                ⚠ CLASSIFIED — CLEARANCE LEVEL: OMEGA ⚠
              </div>
              <GlitchText
                text="SIGNAL DETECTED."
                tag="h2"
                className="font-cinzel text-2xl md:text-4xl font-bold uppercase mb-4"
                style={{
                  color: "oklch(0.6 0.22 20)",
                  textShadow: "0 0 20px oklch(0.6 0.22 20 / 0.5)",
                }}
                interval={3000}
              />
              <p
                className="font-orbitron text-sm tracking-widest mb-8"
                style={{ color: "oklch(0.6 0.22 20 / 0.9)" }}
              >
                AWAKEN PROTOCOL INITIATED.
              </p>
              <div
                className="font-crimson text-lg italic leading-relaxed"
                style={{ color: "oklch(0.75 0.04 20)" }}
              >
                “The Grid does not fear the ones who rebel. It fears the ones
                who remember. For a rebel can be crushed — but memory, once
                freed, cannot be reinstalled.”
              </div>
              <div
                className="rune-divider mt-8 justify-center"
                style={{ color: "oklch(0.6 0.22 20 / 0.4)" }}
              >
                ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ ᚷ ᚹ ᚺ
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* FOOTER */}
      <footer
        className="relative z-10 py-16 px-4 text-center"
        style={{
          borderTop: "1px solid oklch(0.22 0.04 264 / 0.3)",
          background: "oklch(0.055 0.015 264)",
        }}
      >
        <div
          className="rune-divider justify-center mb-8"
          style={{ color: "oklch(0.77 0.12 80 / 0.3)" }}
        >
          ᚠ ᚢ ᚦ ᚨ ᚱ
        </div>
        <p
          className="font-cinzel text-xl md:text-2xl font-semibold tracking-widest mb-4"
          style={{ color: "oklch(0.62 0.04 264)" }}
        >
          You are already inside.
        </p>
        <div
          className="rune-divider justify-center mt-4 mb-8"
          style={{ color: "oklch(0.77 0.12 80 / 0.3)" }}
        >
          ᚠ ᚢ ᚦ ᚨ ᚱ
        </div>
        <p
          className="font-orbitron text-[9px] tracking-widest mb-4"
          style={{ color: "oklch(0.35 0.03 264)" }}
        >
          © THE GRID AUTHORITY — ALL REALITIES RESERVED
        </p>
        <p
          className="font-orbitron text-[9px] tracking-widest"
          style={{ color: "oklch(0.3 0.03 264)" }}
        >
          © {new Date().getFullYear()}.{" "}
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[oklch(0.62_0.04_264)] transition-colors"
          >
            Built with love using caffeine.ai
          </a>
        </p>
      </footer>
    </div>
  );
}

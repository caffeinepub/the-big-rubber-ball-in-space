import { useEffect, useState } from "react";
import type { ElementType } from "react";

interface GlitchTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  tag?: ElementType;
  interval?: number;
}

export function GlitchText({
  text,
  className = "",
  style,
  tag: Tag = "span",
  interval = 8000,
}: GlitchTextProps) {
  const [glitching, setGlitching] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const trigger = () => {
      setGlitching(true);
      timeout = setTimeout(() => {
        setGlitching(false);
        timeout = setTimeout(trigger, interval + Math.random() * 3000);
      }, 600);
    };
    timeout = setTimeout(trigger, interval);
    return () => clearTimeout(timeout);
  }, [interval]);

  return (
    <Tag
      className={`${glitching ? "glitch-text" : ""} ${className}`}
      data-text={text}
      style={style}
    >
      {text}
    </Tag>
  );
}

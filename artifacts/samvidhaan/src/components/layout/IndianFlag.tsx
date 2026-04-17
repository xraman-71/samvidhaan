import React from "react";

export function IndianFlag({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const id = React.useId();
  const dims =
    size === "sm"
      ? { w: "w-7", h: "h-4", pole: "h-4" }
      : { w: "w-9", h: "h-5", pole: "h-5" };

  return (
    <span className={["inline-flex items-center gap-1.5", className ?? ""].join(" ")}>
      <span className={["w-[2px] rounded-full bg-foreground/25", dims.pole].join(" ")} />
      <span className={["rounded-sm border border-foreground/15 shadow-sm overflow-hidden", dims.w, dims.h].join(" ")}>
        <svg
          role="img"
          aria-label="Indian flag"
          viewBox="0 0 90 50"
          className="h-full w-full block"
          preserveAspectRatio="none"
        >
          <defs>
            <filter id={`${id}-wave`} x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.015 0.12"
                numOctaves="2"
                seed="2"
                result="noise"
              >
                <animate
                  attributeName="baseFrequency"
                  dur="2.8s"
                  values="0.015 0.10; 0.020 0.14; 0.015 0.10"
                  repeatCount="indefinite"
                />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" xChannelSelector="R" yChannelSelector="G">
                <animate attributeName="scale" dur="2.8s" values="6;10;6" repeatCount="indefinite" />
              </feDisplacementMap>
            </filter>
            <linearGradient id={`${id}-shine`} x1="0" y1="0" x2="1" y2="0">
              <stop offset="0" stopColor="rgba(0,0,0,0.18)" />
              <stop offset="0.20" stopColor="rgba(255,255,255,0.10)" />
              <stop offset="0.55" stopColor="rgba(255,255,255,0.00)" />
              <stop offset="1" stopColor="rgba(0,0,0,0.06)" />
            </linearGradient>
          </defs>

          <g filter={`url(#${id}-wave)`}>
            <rect x="0" y="0" width="90" height="16.6667" fill="#FF9933" />
            <rect x="0" y="16.6667" width="90" height="16.6667" fill="#FFFFFF" />
            <rect x="0" y="33.3334" width="90" height="16.6666" fill="#138808" />

            <g transform="translate(45 25)">
              <circle r="7.2" fill="none" stroke="#1A3B8A" strokeWidth="1.4" opacity="0.85" />
              <circle r="0.9" fill="#1A3B8A" opacity="0.85" />
            </g>

            <rect x="0" y="0" width="90" height="50" fill={`url(#${id}-shine)`} opacity="0.9" />
            <rect x="0" y="0" width="10" height="50" fill="rgba(0,0,0,0.06)" />
          </g>
        </svg>
      </span>
    </span>
  );
}


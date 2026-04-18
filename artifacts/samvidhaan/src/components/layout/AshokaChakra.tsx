import React from "react";

export const AshokaChakra = React.memo(({ className = "w-6 h-6", ...props }: React.SVGProps<SVGSVGElement>) => {
  const spokes = Array.from({ length: 24 });
  
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="6" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {spokes.map((_, i) => {
          const angle = (i * 360) / 24;
          return (
            <line
              key={i}
              x1="50"
              y1="50"
              x2="50"
              y2="5"
              transform={`rotate(${angle} 50 50)`}
            />
          );
        })}
      </g>
    </svg>
  );
});

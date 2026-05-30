import React from 'react';

export const TopRightDoodles: React.FC = () => {
  return (
    <svg
      className="doodle-svg doodle-top-right"
      viewBox="0 0 350 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Atom */}
      <g transform="translate(240, 60)">
        <ellipse cx="0" cy="0" rx="35" ry="12" stroke="white" strokeWidth="1.5" transform="rotate(30)" />
        <ellipse cx="0" cy="0" rx="35" ry="12" stroke="white" strokeWidth="1.5" transform="rotate(-30)" />
        <ellipse cx="0" cy="0" rx="35" ry="12" stroke="white" strokeWidth="1.5" transform="rotate(90)" />
        <circle cx="0" cy="0" r="4" fill="white" />
        <circle cx="28" cy="16" r="2" fill="white" />
        <circle cx="-28" cy="-16" r="2" fill="white" />
        <circle cx="0" cy="-35" r="2" fill="white" />
      </g>

      {/* Book */}
      <g transform="translate(160, 40) rotate(-15)">
        <path
          d="M 0 20 Q 20 10 40 20 Q 60 10 80 20 L 80 0 Q 60 -10 40 0 Q 20 -10 0 0 Z"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <path d="M 40 0 L 40 20" stroke="white" strokeWidth="1.5" />
        <path d="M 10 7 Q 20 2 30 7" stroke="white" strokeWidth="1" />
        <path d="M 10 12 Q 20 7 30 12" stroke="white" strokeWidth="1" />
        <path d="M 50 7 Q 60 2 70 7" stroke="white" strokeWidth="1" />
        <path d="M 50 12 Q 60 7 70 12" stroke="white" strokeWidth="1" />
      </g>

      {/* Lightbulb */}
      <g transform="translate(60, 140) rotate(15)">
        <path
          d="M 20 40 C 20 50 35 55 35 65 L 45 65 C 45 55 60 50 60 40 C 60 25 20 25 20 40 Z"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        <path d="M 35 65 L 45 65 M 37 69 L 43 69 M 39 73 L 41 73" stroke="white" strokeWidth="1.5" />
        <path d="M 35 40 L 40 30 L 45 40" stroke="white" strokeWidth="1.2" />
        {/* Glow lines */}
        <line x1="15" y1="25" x2="5" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="40" y1="15" x2="40" y2="3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="65" y1="25" x2="75" y2="15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="70" y1="45" x2="82" y2="45" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="10" y1="45" x2="2" y2="45" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Math 1 2 3 */}
      <g transform="translate(180, 130)" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none">
        {/* "1" */}
        <path d="M 0 5 L 5 0 L 5 18 M 2 18 L 8 18" />
        {/* "2" */}
        <path d="M 20 4 C 20 0, 28 0, 28 5 C 28 10, 20 14, 20 18 L 30 18" transform="translate(5, 0)" />
        {/* "3" */}
        <path d="M 40 1 C 45 1, 48 4, 45 8 C 48 11, 45 18, 40 18 M 40 8 L 44 8" transform="translate(10, 0)" />
      </g>

      {/* Math symbols: + and = */}
      <g transform="translate(140, 180)" stroke="white" strokeWidth="1.5" strokeLinecap="round">
        {/* Plus */}
        <line x1="10" y1="5" x2="10" y2="15" />
        <line x1="5" y1="10" x2="15" y2="10" />
        {/* Plus */}
        <line x1="40" y1="5" x2="40" y2="15" transform="translate(10, 15)" />
        <line x1="35" y1="10" x2="45" y2="10" transform="translate(10, 15)" />
      </g>

      {/* Beaker / Flask */}
      <g transform="translate(260, 160) rotate(-10)">
        <path
          d="M 25 10 L 35 10 M 28 10 L 28 25 L 12 55 C 10 60 15 65 22 65 L 48 65 C 55 65 60 60 58 55 L 42 25 L 42 10"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Liquid level */}
        <path d="M 16 50 Q 35 48 54 50" stroke="white" strokeWidth="1" strokeDasharray="2,2" />
        {/* Bubbles */}
        <circle cx="30" cy="40" r="1.5" fill="white" />
        <circle cx="36" cy="30" r="2" fill="white" />
        <circle cx="25" cy="48" r="1" fill="white" />
      </g>

      {/* Ruler and Pencil */}
      <g transform="translate(240, 250) rotate(45)">
        {/* Ruler */}
        <rect x="0" y="0" width="80" height="20" rx="2" stroke="white" strokeWidth="1.5" fill="none" />
        <line x1="10" y1="0" x2="10" y2="6" stroke="white" strokeWidth="1" />
        <line x1="20" y1="0" x2="20" y2="10" stroke="white" strokeWidth="1" />
        <line x1="30" y1="0" x2="30" y2="6" stroke="white" strokeWidth="1" />
        <line x1="40" y1="0" x2="40" y2="10" stroke="white" strokeWidth="1" />
        <line x1="50" y1="0" x2="50" y2="6" stroke="white" strokeWidth="1" />
        <line x1="60" y1="0" x2="60" y2="10" stroke="white" strokeWidth="1" />
        <line x1="70" y1="0" x2="70" y2="6" stroke="white" strokeWidth="1" />

        {/* Pencil intersecting */}
        <g transform="translate(10, 25) rotate(-35)">
          <path d="M 0 0 L 50 0 L 50 8 L 0 8 Z" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M 50 0 L 58 4 L 50 8" stroke="white" strokeWidth="1.5" fill="none" />
          <path d="M 55 2.5 L 58 4 L 55 5.5" fill="white" />
          <path d="M 8 0 L 8 8" stroke="white" strokeWidth="1" />
        </g>
      </g>

      {/* Magnifying Glass */}
      <g transform="translate(300, 100) rotate(15)">
        <circle cx="15" cy="15" r="12" stroke="white" strokeWidth="1.5" fill="none" />
        <line x1="24" y1="24" x2="38" y2="38" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 8 10 A 6 6 0 0 1 15 5" stroke="white" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export const BottomLeftDoodles: React.FC = () => {
  return (
    <svg
      className="doodle-svg doodle-bottom-left"
      viewBox="0 0 400 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* School Bus */}
      <g transform="translate(30, 240)">
        <path
          d="M 5 25 L 15 25 L 15 10 L 85 10 L 85 45 L 5 45 Z"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Wheels */}
        <circle cx="25" cy="45" r="9" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="25" cy="45" r="3" fill="white" />
        <circle cx="70" cy="45" r="9" stroke="white" strokeWidth="1.5" fill="none" />
        <circle cx="70" cy="45" r="3" fill="white" />
        {/* Windows */}
        <rect x="22" y="15" width="12" height="10" stroke="white" strokeWidth="1.2" fill="none" />
        <rect x="40" y="15" width="12" height="10" stroke="white" strokeWidth="1.2" fill="none" />
        <rect x="58" y="15" width="12" height="10" stroke="white" strokeWidth="1.2" fill="none" />
        {/* Details */}
        <line x1="5" y1="35" x2="15" y2="35" stroke="white" strokeWidth="1.2" />
        <rect x="80" y="25" width="5" height="5" stroke="white" strokeWidth="1" />
      </g>

      {/* Graduation Cap (Mortarboard) */}
      <g transform="translate(45, 140) rotate(-10)">
        {/* Diamond top */}
        <path d="M 35 0 L 70 12 L 35 24 L 0 12 Z" stroke="white" strokeWidth="1.5" fill="none" />
        {/* Base cap */}
        <path d="M 18 18 L 18 28 C 18 36, 52 36, 52 28 L 52 18" stroke="white" strokeWidth="1.5" fill="none" />
        {/* Tassel */}
        <path d="M 35 12 L 10 20 L 8 32" stroke="white" strokeWidth="1.2" fill="none" />
        <rect x="6" y="32" width="4" height="6" fill="white" />
      </g>

      {/* Laptop */}
      <g transform="translate(100, 180)">
        {/* Screen */}
        <rect x="10" y="5" width="50" height="32" rx="2" stroke="white" strokeWidth="1.5" fill="none" />
        {/* Keyboard base */}
        <path d="M 5 37 L 65 37 L 70 45 L 0 45 Z" stroke="white" strokeWidth="1.5" fill="none" />
        {/* Laptop trackpad line */}
        <line x1="30" y1="41" x2="40" y2="41" stroke="white" strokeWidth="1.2" />
        {/* Camera */}
        <circle cx="35" cy="9" r="1" fill="white" />
      </g>

      {/* Flask / Chemistry */}
      <g transform="translate(180, 230) rotate(15)">
        <circle cx="25" cy="35" r="22" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M 20 15 L 20 5 L 30 5 L 30 15" stroke="white" strokeWidth="1.5" fill="none" />
        <line x1="17" y1="5" x2="33" y2="5" stroke="white" strokeWidth="1.5" />
        {/* Liquid */}
        <path d="M 6 38 C 12 36, 18 42, 25 38 C 32 34, 38 40, 44 38 C 46 45, 41 53, 25 53 C 9 53, 4 45, 6 38 Z" stroke="white" strokeWidth="1" strokeDasharray="1,1" />
        <circle cx="20" cy="28" r="2" fill="white" />
        <circle cx="28" cy="25" r="1.5" fill="white" />
      </g>

      {/* Clock */}
      <g transform="translate(10, 50) rotate(-5)">
        <circle cx="30" cy="30" r="25" stroke="white" strokeWidth="1.5" fill="none" />
        {/* Ticks */}
        <line x1="30" y1="8" x2="30" y2="12" stroke="white" strokeWidth="1.2" />
        <line x1="30" y1="52" x2="30" y2="48" stroke="white" strokeWidth="1.2" />
        <line x1="8" y1="30" x2="12" y2="30" stroke="white" strokeWidth="1.2" />
        <line x1="52" y1="30" x2="48" y2="30" stroke="white" strokeWidth="1.2" />
        {/* Hands */}
        <line x1="30" y1="30" x2="30" y2="18" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="30" y1="30" x2="42" y2="30" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="30" cy="30" r="2" fill="white" />
      </g>

      {/* Trophy */}
      <g transform="translate(240, 270) rotate(-10)">
        <path
          d="M 10 10 L 40 10 L 40 28 C 40 38, 10 38, 10 28 Z"
          stroke="white"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Handles */}
        <path d="M 10 16 C 2 16, 2 26, 10 26" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M 40 16 C 48 16, 48 26, 40 26" stroke="white" strokeWidth="1.5" fill="none" />
        {/* Stem and Base */}
        <path d="M 25 35 L 25 45 M 15 45 L 35 45" stroke="white" strokeWidth="1.5" />
        {/* Star in center */}
        <path
          d="M 25 16 L 27 20 L 31 20 L 28 23 L 29 27 L 25 25 L 21 27 L 22 23 L 19 20 L 23 20 Z"
          fill="white"
        />
      </g>

      {/* Music Note */}
      <g transform="translate(130, 90) rotate(15)">
        <ellipse cx="10" cy="22" rx="5" ry="4" fill="white" />
        <line x1="15" y1="22" x2="15" y2="5" stroke="white" strokeWidth="1.5" />
        <ellipse cx="28" cy="18" rx="5" ry="4" fill="white" />
        <line x1="33" y1="18" x2="33" y2="1" stroke="white" strokeWidth="1.5" />
        <path d="M 15 5 L 33 1 M 15 9 L 33 5" stroke="white" strokeWidth="1.5" fill="none" />
      </g>

      {/* Books Stack */}
      <g transform="translate(300, 230) rotate(-5)">
        {/* Bottom book */}
        <rect x="10" y="30" width="70" height="12" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
        <line x1="70" y1="30" x2="70" y2="42" stroke="white" strokeWidth="1" />
        {/* Middle book */}
        <rect x="15" y="19" width="62" height="12" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
        <line x1="68" y1="19" x2="68" y2="31" stroke="white" strokeWidth="1" />
        {/* Top book */}
        <rect x="8" y="8" width="72" height="12" rx="1" stroke="white" strokeWidth="1.5" fill="none" />
        <line x1="72" y1="8" x2="72" y2="20" stroke="white" strokeWidth="1" />
        {/* Spine lines */}
        <line x1="20" y1="11" x2="35" y2="11" stroke="white" strokeWidth="1" />
        <line x1="25" y1="22" x2="40" y2="22" stroke="white" strokeWidth="1" />
        <line x1="22" y1="33" x2="37" y2="33" stroke="white" strokeWidth="1" />
      </g>
    </svg>
  );
};

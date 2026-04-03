"use client";

import React from 'react';

interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

export function WaveDivider({ className = '', flip = false }: WaveDividerProps) {
  return (
    <div className={`w-full ${className}`} style={{ transform: flip ? 'scaleY(-1)' : 'none' }}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className="w-full h-12 md:h-16"
        style={{ display: 'block' }}
      >
        <path
          d="M0,0 C150,80 350,80 600,50 C850,20 1050,80 1200,0 L1200,120 L0,120 Z"
          fill="var(--bg2)"
          opacity="0.5"
        />
        <path
          d="M0,20 C200,100 400,60 600,70 C800,80 1000,40 1200,100 L1200,120 L0,120 Z"
          fill="var(--bg2)"
          opacity="0.3"
        />
      </svg>
    </div>
  );
}

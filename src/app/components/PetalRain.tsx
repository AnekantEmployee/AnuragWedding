"use client";

import React from 'react';

export function PetalRain() {
  const petals = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 10,
    size: 8 + Math.random() * 8,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {petals.map((petal) => (
        <svg
          key={petal.id}
          className="absolute animate-petalFall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
          }}
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 2C10.5 4 9 6 9 9C9 11 10 12 12 12C14 12 15 11 15 9C15 6 13.5 4 12 2Z"
            fill="var(--rose)"
            opacity="0.6"
          />
          <path
            d="M12 12C10 12 9 13 9 15C9 18 10.5 20 12 22C13.5 20 15 18 15 15C15 13 14 12 12 12Z"
            fill="var(--rose)"
            opacity="0.4"
          />
          <path
            d="M12 12C12 10 11 9 9 9C6 9 4 10.5 2 12C4 13.5 6 15 9 15C11 15 12 14 12 12Z"
            fill="var(--gold)"
            opacity="0.5"
          />
          <path
            d="M12 12C12 14 13 15 15 15C18 15 20 13.5 22 12C20 10.5 18 9 15 9C13 9 12 10 12 12Z"
            fill="var(--gold)"
            opacity="0.5"
          />
        </svg>
      ))}
    </div>
  );
}

"use client";

import React from "react";

export function PetalRain() {
  const petals = Array.from({ length: 14 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 16 + Math.random() * 10,
    size: 7 + Math.random() * 7,
    color: i % 2 === 0 ? "#a8c5b5" : "#f5efb8",
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
            opacity: 0.55,
          }}
          viewBox="0 0 24 24"
        >
          <ellipse cx="12" cy="12" rx="5" ry="9" fill={petal.color} />
        </svg>
      ))}
    </div>
  );
}

"use client";

import React from "react";

interface WaveDividerProps {
  className?: string;
  flip?: boolean;
}

export function WaveDivider({ className = "" }: WaveDividerProps) {
  return (
    <div className={`w-full px-8 ${className}`}>
      <div className="sage-divider max-w-4xl mx-auto" />
    </div>
  );
}

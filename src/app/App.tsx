"use client";

import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { PetalRain } from './components/PetalRain';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Couple } from './components/Couple';
import { Events } from './components/Events';
import { Venue } from './components/Venue';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
import { WaveDivider } from './components/WaveDivider';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen relative overflow-x-hidden">
        {/* Petal Rain Background */}
        <PetalRain />

        {/* Main Content */}
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <WaveDivider />
          <Couple />
          <WaveDivider flip />
          <Events />
          <WaveDivider />
          <Venue />
          <WaveDivider flip />
          <Gallery />
          <WaveDivider />
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
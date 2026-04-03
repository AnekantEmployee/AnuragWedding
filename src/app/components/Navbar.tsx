"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Navbar() {
  const { theme, lang, toggleTheme, toggleLang, t } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[var(--bg)]/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Monogram */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl italic text-gradient font-bold"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            A & S
          </motion.div>

          {/* Controls */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            {/* Language Toggle */}
            <button
              onClick={toggleLang}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 card-glass hover:scale-105"
              style={{
                fontFamily: lang === 'hi' ? "'Noto Sans Devanagari', sans-serif" : "'Jost', sans-serif"
              }}
            >
              {lang === 'en' ? 'EN | हि' : 'EN | हि'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full card-glass hover:scale-105 transition-all duration-300"
              aria-label={t('Toggle theme', 'थीम बदलें')}
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" style={{ color: 'var(--gold)' }} />
              ) : (
                <Sun className="w-5 h-5" style={{ color: 'var(--gold)' }} />
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

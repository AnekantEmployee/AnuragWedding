"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Footer() {
  const { t } = useTheme();

  return (
    <footer className="py-16 px-4 relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Names */}
        <h3
          className="text-5xl md:text-6xl font-bold italic text-gradient mb-4"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Anurag & Shweta
        </h3>

        {/* Date */}
        <p
          className="text-2xl mb-6 tracking-wider"
          style={{ color: 'var(--gold)', fontFamily: "'Cormorant Garamond', serif" }}
        >
          {t('19 · April · 2026', '१९ · अप्रैल · २०२६')}
        </p>

        {/* Quote */}
        <p
          className="text-xl md:text-2xl italic mb-8 opacity-80"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          {t('"Two souls, one destiny"', '"दो आत्माएँ, एक नियति"')}
        </p>

        {/* Divider */}
        <div className="w-32 h-px mx-auto mb-6" style={{ background: 'var(--border)' }} />

        {/* Venue Credit */}
        <p className="text-sm opacity-60 mb-3">
          {t('Venue:', 'स्थान:')}
          {' '}
          <a
            href="https://www.dastoorgarden.com/garden"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 transition-opacity underline"
            style={{ color: 'var(--rose)' }}
          >
            Dastoor Garden, Indore
          </a>
        </p>

        {/* Made with love */}
        <p className="text-sm opacity-60 flex items-center justify-center gap-2">
          {t('Made with love', 'प्यार से बनाया गया')}
          <Heart className="w-4 h-4 fill-current" style={{ color: 'var(--rose)' }} />
        </p>

        {/* Ornament */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8"
        >
          <svg
            width="60"
            height="30"
            viewBox="0 0 60 30"
            fill="none"
            className="mx-auto"
          >
            <path
              d="M30 5 L35 10 Q37.5 12.5 40 10 L45 5 M30 5 L25 10 Q22.5 12.5 20 10 L15 5"
              stroke="var(--gold)"
              strokeWidth="1.5"
              fill="none"
              opacity="0.5"
            />
            <circle cx="30" cy="7.5" r="2.5" fill="var(--rose)" opacity="0.6" />
          </svg>
        </motion.div>
      </motion.div>
    </footer>
  );
}
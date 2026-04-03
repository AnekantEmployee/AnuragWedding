"use client";

import React from 'react';
import { motion } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

export function Couple() {
  const { t, theme } = useTheme();

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t('The Couple', 'युगल')}
          </h2>
          <p className="text-lg opacity-70">
            {t('Two hearts united in love', 'प्यार में एक हुए दो दिल')}
          </p>
        </motion.div>

        {/* Couple Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Groom */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-glass overflow-hidden group"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* TODO: replace with real photo */}
              <img
                src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=600&q=80"
                alt="Anurag"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t opacity-60"
                style={{ 
                  background: theme === 'dark' 
                    ? 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' 
                    : 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' 
                }}
              />
            </div>
            <div className="p-6 text-center">
              <h3
                className="text-4xl font-bold text-gradient mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Anurag
              </h3>
              <p className="text-lg opacity-70">{t('The Groom', 'दूल्हा')}</p>
            </div>
          </motion.div>

          {/* Bride */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-glass overflow-hidden group"
          >
            <div className="relative aspect-[3/4] overflow-hidden">
              {/* TODO: replace with real photo */}
              <img
                src="https://images.unsplash.com/photo-1595156596223-c5c9c49a84c0?w=600&q=80"
                alt="Shweta"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t opacity-60"
                style={{ 
                  background: theme === 'dark' 
                    ? 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' 
                    : 'linear-gradient(to top, rgba(0,0,0,0.4), transparent)' 
                }}
              />
            </div>
            <div className="p-6 text-center">
              <h3
                className="text-4xl font-bold text-gradient mb-2"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
              >
                Shweta
              </h3>
              <p className="text-lg opacity-70">{t('The Bride', 'दुल्हन')}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

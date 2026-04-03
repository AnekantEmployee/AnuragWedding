"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Camera, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export function Gallery() {
  const { t } = useTheme();

  return (
    <section id="gallery" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t('Gallery', 'गैलरी')}
          </h2>
          <p className="text-lg opacity-70">
            {t('Moments to cherish forever', 'यादों को संजोएं')}
          </p>
        </motion.div>

        {/* Photos Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-glass p-12 md:p-16 text-center"
        >
          {/* Camera Icon */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, var(--rose), var(--gold))',
              }}
            >
              <Camera className="w-10 h-10 text-white" />
            </div>
          </motion.div>

          {/* Title */}
          <h3
            className="text-3xl md:text-4xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t('Photos Coming Soon', 'तस्वीरें जल्द आएंगी')}
          </h3>

          {/* Description */}
          <p className="text-lg opacity-70 mb-8 max-w-2xl mx-auto">
            {t(
              'Our wedding photos will be available here soon. Check back after the celebration!',
              'हमारी शादी की तस्वीरें जल्द ही यहाँ उपलब्ध होंगी। समारोह के बाद वापस देखें!'
            )}
          </p>

          {/* View Photos Button - Drive Link */}
          <a
            href="YOUR_GOOGLE_DRIVE_LINK_HERE" // TODO: Replace with actual Google Drive link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{
              background: 'linear-gradient(135deg, var(--rose), var(--gold))',
            }}
          >
            <ExternalLink className="w-6 h-6" />
            {t('View Photos', 'तस्वीरें देखें')}
          </a>

          {/* Note */}
          <p className="text-sm opacity-50 mt-6 italic">
            {t(
              '* Link will be active after the wedding',
              '* लिंक शादी के बाद सक्रिय होगा'
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import React from "react";
import { motion } from "motion/react";
import { Camera, ExternalLink } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function Gallery() {
  const { t } = useTheme();

  return (
    <section id="gallery" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-4 section-title"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t("Our Moments", "हमारे पल")}
          </h2>
          <div className="sage-divider w-24 mx-auto mb-4" />
          <p style={{ color: "#6a8a78" }}>
            {t("The best is yet to come", "अभी और भी बाकी है")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="card-glass p-12 md:p-16 text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center mb-8"
          >
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ background: "#a8c5b5" }}
            >
              <Camera className="w-10 h-10" style={{ color: "#fafaee" }} />
            </div>
          </motion.div>

          <h3
            className="text-3xl md:text-4xl font-bold mb-4 section-title"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t("Watch This Space", "तस्वीरें आने वाली हैं")}
          </h3>

          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#6a8a78" }}>
            {t(
              "All the candid moments, big laughs and happy tears — dropping here right after the wedding.",
              "वो सारे खास पल, हँसी और आँसू — शादी के बाद यहाँ मिलेंगे।"
            )}
          </p>

          <a
            href="YOUR_GOOGLE_DRIVE_LINK_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-medium transition-colors duration-200"
            style={{ background: "#a8c5b5", color: "#fafaee" }}
            onMouseEnter={e => (e.currentTarget.style.background = "#8aad9d")}
            onMouseLeave={e => (e.currentTarget.style.background = "#a8c5b5")}
          >
            <ExternalLink className="w-5 h-5" />
            {t("Open Album", "एल्बम खोलें")}
          </a>

          <p className="text-sm mt-6 italic" style={{ color: "#6a8a78", opacity: 0.7 }}>
            {t("* Goes live after 19 April", "* 19 अप्रैल के बाद लाइव होगा")}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

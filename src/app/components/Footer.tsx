"use client";

import React from "react";
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function Footer() {
  const { t } = useTheme();

  return (
    <footer className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h3
          className="text-5xl md:text-6xl font-bold italic mb-4 section-title"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          Anurag & Shweta
        </h3>

        <p
          className="text-2xl mb-6 tracking-wider"
          style={{ color: "#6a8a78", fontFamily: "'Cormorant Garamond', serif" }}
        >
          {t("19 · April · 2026", "19 · अप्रैल · 2026")}
        </p>

        <p
          className="text-xl md:text-2xl italic mb-8"
          style={{ color: "#6a8a78", fontFamily: "'Cormorant Garamond', serif" }}
        >
          {t('"And so the adventure begins."', '"और अब एक नया सफर शुरू होता है।"')}
        </p>

        <div className="sage-divider w-32 mx-auto mb-6" />

        <p className="text-sm mb-3" style={{ color: "#6a8a78" }}>
          {t("Venue:", "स्थान:")}{" "}
          <a
            href="https://maps.app.goo.gl/cq28nmGoaeTPfH1SA"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:opacity-80 transition-opacity"
            style={{ color: "#4a6358" }}
          >
            Dastoor Marriage Garden, Indore
          </a>
        </p>

        <p className="text-sm flex items-center justify-center gap-2" style={{ color: "#6a8a78" }}>
          {t("Built with love, for love", "प्यार के लिए, प्यार से")}
          <Heart className="w-4 h-4 fill-current" style={{ color: "#a8c5b5" }} />
        </p>
      </motion.div>
    </footer>
  );
}

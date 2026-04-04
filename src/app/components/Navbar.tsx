"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function Navbar() {
  const { theme, lang, toggleTheme, toggleLang, t } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isDark = theme === "dark";

  const navBg = isDark ? "rgba(15,26,20,0.92)" : "rgba(250,250,238,0.92)";
  const borderColor = isDark ? "#3a5a48" : "#a8c5b5";
  const textColor = isDark ? "#f5efb8" : "#4a6358";
  const btnBg = isDark ? "#1e2e20" : "#ddeedd";
  const gold = isDark ? "#f5efb8" : "#a8c5b5";

  // Small decorative divider between logo and center ornament
  const OrnamentDivider = () => (
    <svg
      width="120"
      height="20"
      viewBox="0 0 120 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0"
        y1="10"
        x2="44"
        y2="10"
        stroke={borderColor}
        strokeWidth="0.8"
        opacity="0.7"
      />
      <circle cx="52" cy="10" r="2" fill={borderColor} opacity="0.6" />
      {/* Tiny vesica/eye */}
      <path
        d="M58 10 Q60 6.5 62 10 Q60 13.5 58 10Z"
        stroke={borderColor}
        strokeWidth="0.8"
        fill="none"
        opacity="0.8"
      />
      <circle cx="68" cy="10" r="2" fill={borderColor} opacity="0.6" />
      <line
        x1="76"
        y1="10"
        x2="120"
        y2="10"
        stroke={borderColor}
        strokeWidth="0.8"
        opacity="0.7"
      />
    </svg>
  );

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? navBg : "transparent",
        borderBottom: scrolled ? `1px solid ${borderColor}` : "none",
        backdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          {/* ── Logo ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span
              className="text-xl italic font-bold tracking-wide"
              style={{
                color: textColor,
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: "0.08em",
              }}
            >
              A &amp; S
            </span>
          </motion.div>

          {/* ── Centre ornament (hidden on small screens) ── */}
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="hidden md:flex flex-col items-center"
          >
            <OrnamentDivider />
          </motion.div>

          {/* ── Right controls ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-2"
          >
            {/* Language toggle */}
            <button
              onClick={toggleLang}
              className="transition-all duration-200 hover:opacity-80"
              style={{
                background: btnBg,
                color: textColor,
                border: `1px solid ${borderColor}`,
                borderRadius: "9999px",
                padding: "0.35rem 1rem",
                fontSize: "0.78rem",
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                letterSpacing: "0.08em",
              }}
            >
              EN | हि
            </button>

            {/* Subtle divider */}
            <div
              style={{
                width: "1px",
                height: "20px",
                background: borderColor,
                opacity: 0.4,
              }}
            />

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center transition-all duration-200 hover:opacity-80"
              style={{
                background: btnBg,
                border: `1px solid ${borderColor}`,
                borderRadius: "9999px",
                width: "36px",
                height: "36px",
              }}
              aria-label={t("Toggle theme", "थीम बदलें")}
            >
              {isDark ? (
                <Sun className="w-4 h-4" style={{ color: "#f5efb8" }} />
              ) : (
                <Moon className="w-4 h-4" style={{ color: "#4a6358" }} />
              )}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom ornamental border line — only when scrolled */}
      {scrolled && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center pointer-events-none">
          <svg
            width="200"
            height="6"
            viewBox="0 0 200 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ opacity: 0.5 }}
          >
            <circle cx="100" cy="3" r="2.5" fill={borderColor} />
            <circle cx="90" cy="3" r="1.5" fill={borderColor} opacity="0.5" />
            <circle cx="110" cy="3" r="1.5" fill={borderColor} opacity="0.5" />
          </svg>
        </div>
      )}
    </motion.nav>
  );
}

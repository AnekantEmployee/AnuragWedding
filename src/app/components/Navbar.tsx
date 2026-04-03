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

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
      style={scrolled ? { background: "rgba(250,250,238,0.88)", borderBottom: "1px solid #a8c5b5" } : {}}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-2xl italic font-bold"
            style={{ color: "#4a6358", fontFamily: "'Cormorant Garamond', serif" }}
          >
            A & S
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={toggleLang}
              className="px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200"
              style={{
                background: "#ddeedd",
                color: "#4a6358",
                border: "1px solid #a8c5b5",
                fontFamily: lang === "hi" ? "'Noto Sans Devanagari', sans-serif" : "'Jost', sans-serif",
              }}
            >
              EN | हि
            </button>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors duration-200"
              style={{ background: "#ddeedd", border: "1px solid #a8c5b5" }}
              aria-label={t("Toggle theme", "थीम बदलें")}
            >
              {theme === "light" ? (
                <Moon className="w-5 h-5" style={{ color: "#4a6358" }} />
              ) : (
                <Sun className="w-5 h-5" style={{ color: "#f5efb8" }} />
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}

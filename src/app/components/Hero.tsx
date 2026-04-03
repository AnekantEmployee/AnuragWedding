"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export function Hero() {
  const { t, theme } = useTheme();
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-04-19T10:00:00+05:30").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        setCountdown({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
          ),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80"
          alt="Wedding background"
          className="w-full h-full object-cover"
        />
        {/* Overlay with gradient - darker in light mode for better text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              theme === "dark"
                ? "linear-gradient(135deg, rgba(139, 69, 69, 0.75), rgba(184, 134, 11, 0.75))"
                : "linear-gradient(135deg, rgba(20, 20, 30, 0.65), rgba(40, 30, 25, 0.65))",
          }}
        />
      </div>

      {/* Decorative Floral Watermark Behind Names */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <svg
          width="800"
          height="800"
          viewBox="0 0 200 200"
          className="opacity-[0.04] dark:opacity-[0.06]"
          style={{ color: "var(--rose)" }}
        >
          {/* Mandala pattern */}
          <g transform="translate(100, 100)">
            {[...Array(8)].map((_, i) => (
              <g key={i} transform={`rotate(${i * 45})`}>
                <ellipse cx="0" cy="-40" rx="15" ry="30" fill="currentColor" />
                <ellipse cx="0" cy="-60" rx="8" ry="15" fill="currentColor" />
              </g>
            ))}
            <circle cx="0" cy="0" r="20" fill="currentColor" />
            <circle cx="0" cy="0" r="10" fill="var(--bg)" />
          </g>
        </svg>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center px-4 max-w-5xl mx-auto relative z-10"
      >
        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl mb-8 opacity-80"
          style={{ fontFamily: "'Jost', sans-serif" }}
        >
          {t("With the blessings of our families", "प्रभु की असीम अनुकम्पा से")}
        </motion.p>

        {/* Names */}
        <motion.div variants={item} className="mb-6">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold italic text-gradient leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Anurag
          </h1>
        </motion.div>

        {/* Weds */}
        <motion.div variants={item} className="my-8">
          <p
            className="text-3xl md:text-4xl font-medium"
            style={{
              color: "var(--gold)",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {t("weds", "संग")}
          </p>
        </motion.div>

        <motion.div variants={item} className="mb-12">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold italic text-gradient leading-tight"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Shweta
          </h1>
        </motion.div>

        {/* Date */}
        <motion.p
          variants={item}
          className="text-2xl md:text-3xl mb-12 tracking-widest"
          style={{
            color: "var(--gold)",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          {t("19 · April · 2026", "19 · अप्रैल · 2026")}
        </motion.p>

        {/* Countdown */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: countdown.days, label: t("Days", "दिन") },
            { value: countdown.hours, label: t("Hours", "घंटे") },
            { value: countdown.minutes, label: t("Minutes", "मिनट") },
            { value: countdown.seconds, label: t("Seconds", "सेकंड") },
          ].map((unit, index) => (
            <div key={index} className="relative card-glass p-6 overflow-hidden group">
              {/* Decorative corner accents */}
              <span className="absolute top-2 left-2 w-3 h-3 border-t border-l opacity-40" style={{ borderColor: 'var(--gold)' }} />
              <span className="absolute top-2 right-2 w-3 h-3 border-t border-r opacity-40" style={{ borderColor: 'var(--gold)' }} />
              <span className="absolute bottom-2 left-2 w-3 h-3 border-b border-l opacity-40" style={{ borderColor: 'var(--gold)' }} />
              <span className="absolute bottom-2 right-2 w-3 h-3 border-b border-r opacity-40" style={{ borderColor: 'var(--gold)' }} />
              {/* Glow bg */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: 'radial-gradient(ellipse at center, rgba(184,134,11,0.12) 0%, transparent 70%)' }}
              />
              <div
                className="text-5xl md:text-6xl font-light text-gradient tabular-nums"
                style={{ fontFamily: "'Jost', sans-serif", letterSpacing: '0.08em' }}
              >
                {String(unit.value).padStart(2, '0')}
              </div>
              {/* Divider */}
              <div className="w-8 h-px mx-auto my-2 opacity-40" style={{ background: 'var(--gold)' }} />
              <div
                className="text-xs uppercase tracking-[0.2em] opacity-70"
                style={{ fontFamily: "'Jost', sans-serif", color: 'var(--gold)' }}
              >
                {unit.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
      >
        <a
          href="#events"
          className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
        >
          <span className="text-sm">{t("Scroll", "स्क्रॉल")}</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </motion.div>
    </section>
  );
}

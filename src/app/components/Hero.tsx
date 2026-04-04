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
    const update = () => {
      const distance = targetDate - Date.now();
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
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const isDark = theme === "dark";

  // Flat semi-transparent overlay — sage for light, deep forest for dark
  const overlayColor = isDark ? "rgba(15,26,20,0.78)" : "rgba(74,99,88,0.52)";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1920&q=80"
          alt="Wedding background"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: overlayColor }}
        />
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
          className="text-lg md:text-xl mb-8"
          style={{ color: "#ddeedd", fontFamily: "'Jost', sans-serif" }}
        >
          {t("With the blessings of our families", "प्रभु की असीम अनुकम्पा से")}
        </motion.p>

        {/* Name */}
        <motion.div variants={item} className="mb-2">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold italic leading-tight"
            style={{
              color: "#fafaee",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Anurag
          </h1>
        </motion.div>

        {/* Weds */}
        <motion.div variants={item}>
          <p
            className="text-3xl md:text-4xl font-medium"
            style={{
              color: "#ddeedd",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {t("weds", "संग")}
          </p>
        </motion.div>

        {/* Name */}
        <motion.div variants={item} className="mb-4">
          <h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold italic leading-tight"
            style={{
              color: "#fafaee",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            Shweta
          </h1>
        </motion.div>

        {/* Date */}
        <motion.p
          variants={item}
          className="text-2xl md:text-3xl mb-8 tracking-widest"
          style={{
            color: "#ddeedd",
            fontFamily: "'Cormorant Garamond', serif",
          }}
        >
          {t("19 · April · 2026", "19 · अप्रैल · 2026")}
        </motion.p>

        {/* Countdown */}
        <motion.div
          variants={item}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
        >
          {[
            { value: countdown.days, label: t("Days", "दिन") },
            { value: countdown.hours, label: t("Hours", "घंटे") },
            { value: countdown.minutes, label: t("Minutes", "मिनट") },
            { value: countdown.seconds, label: t("Seconds", "सेकंड") },
          ].map((unit, i) => (
            <div
              key={i}
              className="p-5 rounded-2xl"
              style={{
                background: "rgba(221,238,221,0.18)",
                border: "1px solid rgba(221,238,221,0.35)",
              }}
            >
              <div
                className="text-5xl md:text-6xl font-light tabular-nums"
                style={{
                  color: "#fafaee",
                  fontFamily: "'Jost', sans-serif",
                  letterSpacing: "0.06em",
                }}
              >
                {String(unit.value).padStart(2, "0")}
              </div>
              <div
                className="w-6 h-px mx-auto my-2"
                style={{ background: "rgba(221,238,221,0.5)" }}
              />
              <div
                className="text-xs uppercase tracking-[0.2em]"
                style={{ color: "#ddeedd", fontFamily: "'Jost', sans-serif" }}
              >
                {unit.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        style={{ color: "#ddeedd" }}
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

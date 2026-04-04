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

  // ── Palette: directly from CSS variables ──
  const bg = isDark ? "#0f1a14" : "#fafaee";
  const bg2 = isDark ? "#172212" : "#ddeedd";
  const textMain = isDark ? "#fafaee" : "#4a6358";
  const gold = isDark ? "#f5efb8" : "#a8c5b5"; // --gold
  const border = isDark ? "#3a5a48" : "#a8c5b5"; // --border

  // Mandala tile in the site's sage/gold stroke
  const strokeHex = isDark ? "%23f5efb8" : "%234a6358";
  const mandalaTile = `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='${strokeHex}' stroke-width='0.6' opacity='0.1'%3E%3Ccircle cx='60' cy='60' r='50'/%3E%3Ccircle cx='60' cy='60' r='38'/%3E%3Ccircle cx='60' cy='60' r='24'/%3E%3Ccircle cx='60' cy='60' r='10'/%3E%3Cline x1='10' y1='60' x2='110' y2='60'/%3E%3Cline x1='60' y1='10' x2='60' y2='110'/%3E%3Cline x1='24' y1='24' x2='96' y2='96'/%3E%3Cline x1='96' y1='24' x2='24' y2='96'/%3E%3Cline x1='10' y1='38' x2='110' y2='82'/%3E%3Cline x1='10' y1='82' x2='110' y2='38'/%3E%3Cline x1='38' y1='10' x2='82' y2='110'/%3E%3Cline x1='82' y1='10' x2='38' y2='110'/%3E%3Cpolygon points='60,14 68,50 104,50 76,72 86,108 60,86 34,108 44,72 16,50 52,50'/%3E%3C/g%3E%3C/svg%3E")`;

  // Background: site's own bg with a gentle radial centre lift
  const bgGradient = isDark
    ? "radial-gradient(ellipse at 55% 40%, #1e2e20 0%, #172212 40%, #0f1a14 100%)"
    : "radial-gradient(ellipse at 55% 40%, #eef5e8 0%, #fafaee 50%, #f0f4e8 100%)";

  // Eye / vesica divider — same as in the screenshot
  const Divider = () => (
    <svg
      width="260"
      height="28"
      viewBox="0 0 260 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ margin: "0 auto", display: "block" }}
    >
      <line x1="0" y1="14" x2="95" y2="14" stroke={border} strokeWidth="0.8" />
      <circle cx="108" cy="14" r="2.5" fill={border} opacity="0.7" />
      <path
        d="M118 14 Q130 6 142 14 Q130 22 118 14Z"
        stroke={border}
        strokeWidth="1"
        fill="none"
      />
      <circle cx="130" cy="14" r="3" fill={border} opacity="0.5" />
      <circle cx="152" cy="14" r="2.5" fill={border} opacity="0.7" />
      <line
        x1="165"
        y1="14"
        x2="260"
        y2="14"
        stroke={border}
        strokeWidth="0.8"
      />
    </svg>
  );

  // Corner leaf ornament — matches screenshot corners
  const CornerLeaf = ({ flip = false }: { flip?: boolean }) => (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? "scaleX(-1)" : undefined, opacity: 0.5 }}
    >
      <path
        d="M10 10 Q10 62 62 62"
        stroke={gold}
        strokeWidth="1.2"
        fill="none"
      />
      <path
        d="M10 10 Q62 10 62 62"
        stroke={gold}
        strokeWidth="1.2"
        fill="none"
      />
      <line x1="62" y1="62" x2="74" y2="74" stroke={gold} strokeWidth="1" />
      <path
        d="M10 10 Q36 36 62 62"
        stroke={gold}
        strokeWidth="0.6"
        strokeDasharray="3 3"
        opacity="0.5"
      />
      <circle cx="10" cy="10" r="3.5" fill={gold} opacity="0.8" />
    </svg>
  );

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Background ── */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0" style={{ background: bgGradient }} />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: mandalaTile,
            backgroundSize: "120px 120px",
          }}
        />
        {/* Fade into next section's bg2 colour */}
        <div
          className="absolute inset-x-0 bottom-0 h-40"
          style={{ background: `linear-gradient(to top, ${bg2}, transparent)` }}
        />
      </div>

      {/* ── Corner ornaments ── */}
      <div className="absolute top-16 left-6 z-10 pointer-events-none">
        <CornerLeaf />
      </div>
      <div className="absolute top-16 right-6 z-10 pointer-events-none">
        <CornerLeaf flip />
      </div>

      {/* ── Main content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="text-center px-4 max-w-5xl mx-auto relative z-10 py-10"
      >
        {/* ॥ शुभ विवाह ॥ */}
        <motion.div variants={item} className="mb-1">
          <span
            style={{
              color: textMain,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              letterSpacing: "0.14em",
              opacity: 0.85,
            }}
          >
            {t("॥ Shubh Vivah ॥", "॥ शुभ विवाह ॥")}
          </span>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={item}
          className="text-base md:text-lg mb-4"
          style={{
            color: textMain,
            fontFamily: "'Jost', sans-serif",
            letterSpacing: "0.05em",
            opacity: 0.65,
          }}
        >
          {t("With the blessings of our families", "प्रभु की असीम अनुकम्पा से")}
        </motion.p>

        <motion.div variants={item} className="mb-2">
          <Divider />
        </motion.div>

        {/* Groom */}
        <motion.div variants={item} className="">
          <h1
            className="font-bold italic leading-none"
            style={{
              color: textMain,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(4rem, 12vw, 8rem)",
            }}
          >
            Anurag
          </h1>
        </motion.div>

        {/* weds */}
        <motion.div variants={item} className="my-1">
          <p
            className="italic"
            style={{
              color: textMain,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              opacity: 0.7,
              letterSpacing: "0.1em",
            }}
          >
            {t("weds", "संग")}
          </p>
        </motion.div>

        {/* Bride */}
        <motion.div variants={item} className="mb-2">
          <h1
            className="font-bold italic leading-none"
            style={{
              color: textMain,
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(4rem, 12vw, 8rem)",
            }}
          >
            Shweta
          </h1>
        </motion.div>

        <motion.div variants={item} className="mb-4">
          <Divider />
        </motion.div>

        {/* Date */}
        <motion.p
          variants={item}
          className="mb-10"
          style={{
            color: textMain,
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            letterSpacing: "0.2em",
            opacity: 0.75,
          }}
        >
          {t("19 · April · 2026", "19 · अप्रैल · 2026")}
        </motion.p>

        {/* Countdown — uses card-glass style from your CSS */}
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
            <div key={i} className="p-5 rounded-2xl card-glass">
              <div
                className="text-5xl md:text-6xl font-light tabular-nums"
                style={{
                  color: textMain,
                  fontFamily: "'Cormorant Garamond', serif",
                  letterSpacing: "0.06em",
                }}
              >
                {String(unit.value).padStart(2, "0")}
              </div>
              <div
                className="w-8 h-px mx-auto my-2"
                style={{ background: border, opacity: 0.5 }}
              />
              <div
                className="text-xs uppercase tracking-[0.2em]"
                style={{
                  color: textMain,
                  fontFamily: "'Jost', sans-serif",
                  opacity: 0.65,
                }}
              >
                {unit.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* ── Scroll ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
        style={{ color: textMain }}
      >
        <a
          href="#events"
          className="flex flex-col items-center gap-2 opacity-50 hover:opacity-100 transition-opacity"
        >
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "0.8rem",
              letterSpacing: "0.15em",
            }}
          >
            {t("Scroll", "स्क्रॉल")}
          </span>
          <ChevronDown className="w-5 h-5" />
        </a>
      </motion.div>
    </section>
  );
}

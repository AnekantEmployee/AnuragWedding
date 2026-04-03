"use client";

import React from "react";
import { motion } from "motion/react";
import { useTheme } from "../contexts/ThemeContext";
import groomImg from "../images/groom.jpg";
import brideImg from "../images/bride.jpg";

export function Couple() {
  const { t } = useTheme();

  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold mb-4 section-title"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t("Anurag & Shweta", "अनुराग & स्वेता")}
          </h2>
          <div className="sage-divider w-24 mx-auto mb-4" />
          <p className="text-lg" style={{ color: "#6a8a78" }}>
            {t("Beginning forever, together", "एक नई शुरुआत, साथ-साथ")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { img: groomImg, name: "Anurag", role: t("Groom", "दूल्हा"), delay: 0 },
            { img: brideImg, name: "Shweta", role: t("Bride", "दुल्हन"),  delay: 0.15 },
          ].map((person) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: person.delay }}
              className="card-glass overflow-hidden group"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-center">
                <h3
                  className="text-4xl font-bold mb-1 section-title"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  {person.name}
                </h3>
                <p style={{ color: "#6a8a78" }}>{person.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

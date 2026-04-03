"use client";

import React from "react";
import { motion } from "motion/react";
import { MapPin, ExternalLink } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import gardenBg from "../images/garden_3d_-ujvxw.jpg";

export function Venue() {
  const { t } = useTheme();

  return (
    <section id="venue" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
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
            {t("Find Us", "पता")}
          </h2>
          <div className="sage-divider w-24 mx-auto mb-4" />
          <p style={{ color: "#6a8a78" }}>
            {t("Come, celebrate with us", "आइए, साथ जश्न मनाएं")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass overflow-hidden"
        >
          {/* Banner */}
          <div className="relative h-[200px] w-full overflow-hidden">
            <img
              src={gardenBg}
              alt="Dastoor Marriage Garden, Indore"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "rgba(74,99,88,0.55)" }} />
            <div className="absolute inset-0 flex items-center justify-center px-4">
              <h3
                className="text-3xl md:text-5xl font-bold italic text-center"
                style={{ color: "#fafaee", fontFamily: "'Cormorant Garamond', serif" }}
              >
                Dastoor Marriage Garden, Indore
              </h3>
            </div>
          </div>

          {/* Map */}
          <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
            <iframe
              src="https://maps.google.com/maps?q=Dastoor+Garden+Indore&z=15&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "saturate(0.7) hue-rotate(60deg)" }}
              loading="lazy"
              title={t("Dastoor Garden Location", "दास्तूर गार्डन का स्थान")}
            />
          </div>

          {/* Info */}
          <div className="p-6 md:p-8">
            <div className="flex items-start gap-3 mb-6">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: "#a8c5b5" }} />
              <div>
                <h3
                  className="text-3xl font-bold mb-1 section-title"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Dastoor Marriage Garden
                </h3>
                <p style={{ color: "#6a8a78" }}>
                  {t("Indore, Madhya Pradesh", "इंदौर, मध्य प्रदेश")}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://maps.app.goo.gl/cq28nmGoaeTPfH1SA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 rounded-full text-center font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                style={{ background: "#a8c5b5", color: "#fafaee" }}
                onMouseEnter={e => (e.currentTarget.style.background = "#8aad9d")}
                onMouseLeave={e => (e.currentTarget.style.background = "#a8c5b5")}
              >
                <MapPin className="w-4 h-4" />
                {t("Take Me There", "रास्ता दिखाओ")}
              </a>
              <a
                href="https://www.dastoorgarden.com/garden"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 rounded-full text-center font-medium flex items-center justify-center gap-2 transition-colors duration-200"
                style={{ background: "#f5efb8", color: "#4a6358", border: "1px solid #a8c5b5" }}
              >
                <ExternalLink className="w-4 h-4" />
                {t("Explore Venue", "गार्डन देखें")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

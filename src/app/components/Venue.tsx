"use client";

import React from 'react';
import { motion } from 'motion/react';
import { MapPin, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import gardenBg from '../images/garden_3d_-ujvxw.jpg';

export function Venue() {
  const { t, theme } = useTheme();

  return (
    <section id="venue" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
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
            {t("Find Us", "पता")}
          </h2>
          <p className="text-lg opacity-70">
            {t("Come, celebrate with us", "आइए, साथ जश्न मनाएं")}
          </p>
        </motion.div>

        {/* Venue Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="card-glass overflow-hidden"
        >
          {/* Venue Banner Image */}
          <div className="relative h-[200px] w-full overflow-hidden">
            <img
              src={gardenBg}
              alt="Dastoor Marriage Garden, Indore"
              className="w-full h-full object-cover"
            />
            {/* Dark overlay */}
            <div
              className="absolute inset-0"
              style={{ background: "rgba(0,0,0,0.45)" }}
            />
            {/* Venue name overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <h3
                className="text-5xl md:text-6xl font-bold italic text-white drop-shadow-lg"
                style={{ fontFamily: "'Cormorant Garamond', serif" }}
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
              style={{
                border: 0,
                filter: "saturate(0.8) hue-rotate(320deg)",
              }}
              loading="lazy"
              title={t("Dastoor Garden Location", "दास्तूर गार्डन का स्थान")}
            />
          </div>

          {/* Venue Info */}
          <div className="p-6 md:p-8">
            {/* Venue Name with Icon */}
            <div className="flex items-start gap-3 mb-6">
              <MapPin
                className="w-6 h-6 flex-shrink-0 mt-1"
                style={{ color: "var(--rose)" }}
              />
              <div>
                <h3
                  className="text-3xl font-bold text-gradient mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Dastoor Marriage Garden
                </h3>
                <p className="text-lg opacity-80">
                  {t("Indore, Madhya Pradesh", "इंदौर, मध्य प्रदेश")}
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://maps.app.goo.gl/cq28nmGoaeTPfH1SA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 rounded-full text-center font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
                style={{
                  background:
                    "linear-gradient(135deg, var(--rose), var(--gold))",
                }}
              >
                <MapPin className="w-5 h-5" />
                {t("Take Me There", "रास्ता दिखाओ")}
              </a>

              <a
                href="https://www.dastoorgarden.com/garden"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-6 py-3 rounded-full text-center font-medium transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 card-glass"
              >
                <ExternalLink className="w-5 h-5" />
                {t("Explore Venue", "गार्डन देखें")}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
"use client";

import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Landmark, Sparkles, Flower2, Flame, PartyPopper } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import img2 from '../images/Image (2).jpg';
import img3 from '../images/Image (3).jpg';
import img4 from '../images/Image (4).jpg';
import img5 from '../images/Image (5).jpg';
import img6 from '../images/Image (6).jpg';
import img7 from '../images/Image (7).jpg';

const events = [
  {
    name: { en: "Mehndi", hi: "मेहंदी" },
    date: { en: "17 April, Thursday", hi: "१७ अप्रैल, गुरुवार" },
    time: { en: "Evening", hi: "शाम" },
    icon: Leaf,
    color: "#b5c99a",
    desc: {
      en: "Where hands bloom with henna art",
      hi: "जहाँ हाथों पर मेहंदी खिलती है",
    },
    image: img2,
  },
  {
    name: { en: "Devdarshan & Arga", hi: "देवदर्शन & अरगा" },
    date: { en: "18 April, Friday", hi: "१८ अप्रैल, शुक्रवार" },
    time: { en: "Evening", hi: "शाम" },
    icon: Landmark,
    color: "#c97b84",
    desc: {
      en: "Seeking divine blessings on this sacred Jain darshan day",
      hi: "इस पवित्र जैन दर्शन दिवस पर दिव्य आशीर्वाद की प्राप्ति",
    },
    image: img7,
  },
  {
    name: { en: "Ring Ceremony", hi: "अंगूठी समारोह" },
    date: { en: "19 April, Sunday", hi: "१९ अप्रैल, रविवार" },
    time: { en: "10:00 AM - 12:00 PM", hi: "१०:०० - १२:०० पूर्वाह्न" },
    icon: Sparkles,
    color: "#c9a96e",
    desc: { en: "Two hearts, one promise", hi: "दो दिल, एक वादा" },
    image: img3,
  },
  {
    name: { en: "Haldi", hi: "हल्दी" },
    date: { en: "19 April, Sunday", hi: "१९ अप्रैल, रविवार" },
    time: { en: "1:00 PM - 3:00 PM", hi: "१:०० - ३:०० अपराह्न" },
    icon: Flower2,
    color: "#e8b84b",
    desc: {
      en: "Golden blessings & joyful smiles",
      hi: "सुनहरा आशीर्वाद और खुशी",
    },
    image: img6,
  },
  {
    name: { en: "Bhavar", hi: "भाँवर" },
    date: { en: "19 April, Sunday", hi: "१९ अप्रैल, रविवार" },
    time: { en: "3:30 PM - 6:00 PM", hi: "३:३० - ६:०० अपराह्न" },
    icon: Flame,
    color: "#e07860",
    desc: {
      en: "Seven circles around sacred fire",
      hi: "पवित्र अग्नि के सात फेरे",
    },
    image: img4,
  },
  {
    name: { en: "Reception", hi: "स्वागत समारोह" },
    date: { en: "19 April, Sunday", hi: "१९ अप्रैल, रविवार" },
    time: { en: "7:00 PM - 11:00 PM", hi: "७:०० - ११:०० रात" },
    icon: PartyPopper,
    color: "#9b8ecf",
    desc: { en: "Celebrate love with us", hi: "हमारे साथ प्यार का जश्न मनाएं" },
    image: img5,
  },
];

export function Events() {
  const { t, theme } = useTheme();

  return (
    <section id="events" className="py-20 px-4 relative">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=40)',
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: theme === 'dark' ? 0.05 : 0.08,
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-bold text-gradient mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {t('Wedding Events', 'विवाह समारोह')}
          </h2>
          <p className="text-lg opacity-70">
            {t('Join us in celebrating our special moments', 'हमारे विशेष पलों में शामिल हों')}
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line - hidden on mobile */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--rose)] via-[var(--gold)] to-[var(--rose)] opacity-30" />

          {/* Events */}
          <div className="space-y-12 md:space-y-16">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                  <div className="card-glass overflow-hidden hover:scale-105 transition-transform duration-300">
                    {/* Event Image - Rectangular */}
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <img
                        src={event.image}
                        alt={t(event.name.en, event.name.hi)}
                        className="w-full h-full object-cover" style={{ objectPosition: '50% 20%' }}
                      />
                      {/* Overlay gradient */}
                      <div 
                        className="absolute inset-0"
                        style={{
                          background: `linear-gradient(to bottom, transparent 0%, ${event.color}15 100%)`,
                        }}
                      />
                    </div>
                    
                    {/* Card Content */}
                    <div className="p-6 md:p-8">
                      {/* Icon */}
                      <div
                        className={`mb-4 ${
                          index % 2 === 0 ? 'md:float-right md:ml-4' : 'md:float-left md:mr-4'
                        }`}
                      >
                        <event.icon 
                          className="w-10 h-10" 
                          style={{ color: event.color }}
                        />
                      </div>

                      {/* Event Name */}
                      <h3
                        className="text-3xl font-bold mb-3"
                        style={{
                          color: event.color,
                          fontFamily: "'Cormorant Garamond', serif",
                        }}
                      >
                        {t(event.name.en, event.name.hi)}
                      </h3>

                      {/* Date */}
                      <p className="text-lg mb-2 opacity-80">
                        {t(event.date.en, event.date.hi)}
                      </p>

                      {/* Time Pill */}
                      <div
                        className={`inline-block px-4 py-1.5 rounded-full text-sm mb-4 ${
                          index % 2 === 0 ? 'md:float-right' : 'md:float-left'
                        }`}
                        style={{
                          backgroundColor: `${event.color}20`,
                          color: event.color,
                          border: `1px solid ${event.color}40`,
                        }}
                      >
                        {t(event.time.en, event.time.hi)}
                      </div>

                      {/* Description */}
                      <p className="clear-both text-base opacity-70 italic pt-2">
                        {t(event.desc.en, event.desc.hi)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                  <div
                    className="w-6 h-6 rounded-full border-4 shadow-lg"
                    style={{
                      backgroundColor: event.color,
                      borderColor: 'var(--bg)',
                    }}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
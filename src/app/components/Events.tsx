"use client";
import { motion } from "motion/react";
import { Leaf, Landmark, Sparkles, Flower2, Flame, PartyPopper } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";
import img2 from "../images/Image (2).jpg";
import img3 from "../images/Image (3).jpg";
import img4 from "../images/Image (4).jpg";
import img5 from "../images/Image (5).jpg";
import img6 from "../images/Image (6).jpg";
import img7 from "../images/Image (7).jpg";

const events = [
  {
    name: { en: "Mehndi",              hi: "मेहंदी"           },
    date: { en: "17 April, Thursday",  hi: "17 अप्रैल, गुरुवार" },
    time: { en: "Evening",             hi: "शाम"              },
    icon: Leaf,
    desc: { en: "An evening of colour, music & intricate artistry", hi: "रंग, संगीत और कला की एक शाम" },
    image: img2,
  },
  {
    name: { en: "Devdarshan & Arga",   hi: "देवदर्शन & अरगा"  },
    date: { en: "18 April, Friday",    hi: "18 अप्रैल, शुक्रवार" },
    time: { en: "Evening",             hi: "शाम"              },
    icon: Landmark,
    desc: { en: "Blessings sought before the journey begins", hi: "सफर शुरू होने से पहले आशीर्वाद" },
    image: img7,
  },
  {
    name: { en: "Ring Ceremony",       hi: "अंगूठी समारोह"    },
    date: { en: "19 April, Sunday",    hi: "19 अप्रैल, रविवार" },
    time: { en: "10:00 AM – 12:00 PM", hi: "10:00 AM – 12:00 PM" },
    icon: Sparkles,
    desc: { en: "Rings exchanged, forever sealed", hi: "अंगूठियाँ बदलीं, रिश्ता पक्का" },
    image: img3,
  },
  {
    name: { en: "Haldi",               hi: "हल्दी"            },
    date: { en: "19 April, Sunday",    hi: "19 अप्रैल, रविवार" },
    time: { en: "1:00 PM – 3:00 PM",   hi: "1:00 PM – 3:00 PM" },
    icon: Flower2,
    desc: { en: "Turmeric, laughter & a little bit of chaos", hi: "हल्दी, हँसी और थोड़ी शरारत" },
    image: img6,
  },
  {
    name: { en: "Bhavar",              hi: "भाँवर"            },
    date: { en: "19 April, Sunday",    hi: "19 अप्रैल, रविवार" },
    time: { en: "3:30 PM – 6:00 PM",   hi: "3:30 PM – 6:00 PM" },
    icon: Flame,
    desc: { en: "Seven pheras. A lifetime of vows.", hi: "सात फेरे। एक उम्र के वादे।" },
    image: img4,
  },
  {
    name: { en: "Reception",           hi: "स्वागत समारोह"    },
    date: { en: "19 April, Sunday",    hi: "19 अप्रैल, रविवार" },
    time: { en: "7:00 PM – 11:00 PM",  hi: "7:00 PM – 11:00 PM" },
    icon: PartyPopper,
    desc: { en: "The night we dance it all in", hi: "वो रात जब सब नाचेंगे" },
    image: img5,
  },
];

export function Events() {
  const { t } = useTheme();

  return (
    <section id="events" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
            {t("Celebrations", "उत्सव")}
          </h2>
          <div className="sage-divider w-24 mx-auto mb-4" />
          <p style={{ color: "#6a8a78" }}>
            {t("Every ritual, every memory — save the dates", "हर रस्म, हर पल — तारीखें याद रखें")}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px"
            style={{ background: "#a8c5b5", opacity: 0.5 }}
          />

          <div className="space-y-12 md:space-y-16">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                  <div className="card-glass overflow-hidden">
                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                      <img
                        src={event.image}
                        alt={t(event.name.en, event.name.hi)}
                        className="w-full h-full object-cover"
                        style={{ objectPosition: "50% 20%" }}
                      />
                    </div>
                    <div className="p-6 md:p-8">
                      <div className={`mb-3 ${index % 2 === 0 ? "md:float-right md:ml-4" : "md:float-left md:mr-4"}`}>
                        <event.icon className="w-8 h-8" style={{ color: "#a8c5b5" }} />
                      </div>
                      <h3
                        className="text-3xl font-bold mb-2 section-title"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {t(event.name.en, event.name.hi)}
                      </h3>
                      <p className="text-base mb-3" style={{ color: "#6a8a78" }}>
                        {t(event.date.en, event.date.hi)}
                      </p>
                      <span
                        className={`inline-block pill mb-3 ${index % 2 === 0 ? "md:float-right" : "md:float-left"}`}
                      >
                        {t(event.time.en, event.time.hi)}
                      </span>
                      <p className="clear-both text-sm italic" style={{ color: "#6a8a78" }}>
                        {t(event.desc.en, event.desc.hi)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ background: "#a8c5b5", border: "3px solid #fafaee" }}
                  />
                </div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

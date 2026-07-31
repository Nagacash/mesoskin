"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";
import { GLAMOUR_ACADEMY } from "@/lib/constants";
import { GraduationCap, ExternalLink } from "lucide-react";

const highlights = [
  "Einzelmodule & Masterclasses (z. B. Lippen, PDO-Fäden, Infusionen)",
  "1:1 Mentoring in Ihrer eigenen Praxis",
  "Geleitet von erfahrenen Expertinnen — inkl. Annette Fascher-Wendlandt (ästhetische Leitung)",
];

const GlamourAcademySection = ({ className = "" }) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <section
      className={`py-24 xl:py-28 bg-accent-100 relative overflow-hidden ${className}`}
      aria-labelledby="glamour-academy-heading"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center xl:text-left xl:max-w-none xl:flex xl:items-center xl:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <div className="inline-flex items-center gap-2 text-accent uppercase tracking-[0.2em] text-xs font-semibold mb-4">
              <GraduationCap size={18} aria-hidden />
              <span>Fortbildung</span>
            </div>
            <h2
              id="glamour-academy-heading"
              className="h2 mb-4 text-primary"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              {GLAMOUR_ACADEMY.name}
            </h2>
            <p className="text-lg text-primary/80 font-light leading-relaxed mb-6">
              {GLAMOUR_ACADEMY.headline}. {GLAMOUR_ACADEMY.description}
            </p>
            <ul className="space-y-3 text-left text-primary/80 font-light mb-10 max-w-2xl mx-auto xl:mx-0">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={GLAMOUR_ACADEMY.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-primary uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-accent-100"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              Zur Glamour Akademie
              <ExternalLink size={16} aria-hidden />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="hidden xl:flex flex-shrink-0 w-72 h-72 rounded-3xl border border-accent/30 bg-white/60 backdrop-blur-sm shadow-lg items-center justify-center p-8 text-center"
          >
            <p className="font-primary text-2xl text-primary leading-snug">
              The Perfect Skin
              <sup className="text-sm">®</sup>
            </p>
            <p className="mt-3 text-sm text-primary/60 uppercase tracking-widest">
              Hamburg Beauty
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GlamourAcademySection;

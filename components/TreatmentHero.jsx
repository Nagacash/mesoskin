"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
import { CursorContext } from "./CursorContext";

const TreatmentHero = ({ 
  title, 
  subtitle, 
  imageSrc, 
  imageAlt,
  height = "h-[70vh] min-h-[600px]",
  overlayOpacity = "bg-black/30",
  priority = true 
}) => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <section className={`relative ${height} flex items-center justify-center overflow-hidden`}>
      <div className="absolute inset-0 z-0">
        <Image
          src={imageSrc}
          alt={imageAlt || title}
          fill
          className="object-cover object-center opacity-90"
          priority={priority}
        />
        <div className={`absolute inset-0 ${overlayOpacity} backdrop-blur-[2px]`}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-white"></div>
      </div>

      <div className="container mx-auto relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1
            className="text-5xl md:text-7xl font-primary text-white mb-6 tracking-wide drop-shadow-lg"
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 font-light tracking-wider max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default TreatmentHero;


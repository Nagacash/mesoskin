"use client";

import { CursorContext } from "@/components/CursorContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "./Button";

const HeroSection = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.5, duration: 1 } }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/home/meso10.jpg"
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-secondary/90"></div>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 1, duration: 1, ease: "easeOut" },
            }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="inline-block bg-white/10 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full mb-8 shadow-lg"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <span className="text-white/90 uppercase tracking-[0.2em] text-sm font-medium">
                Natürliche Schönheit & Gesundheit
              </span>
            </div>

            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-primary text-white mb-8 leading-tight"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              <span className="block">Beginnt</span>
              <span className="block font-light italic">Hier</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed font-light"
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
            >
              Treten Sie ein in eine Oase der Ruhe und Regeneration. Wo wissenschaftliche Expertise auf die heilende Kraft der Natur trifft.
            </motion.p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                onClick={handleContactClick}
                variant="primary"
                size="default"
                className="shadow-[0_0_20px_rgba(212,140,112,0.5)]"
                ariaLabel="Termin buchen"
              >
                Termin buchen
              </Button>

              <Button
                onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
                variant="secondary"
                size="default"
                ariaLabel="Mehr erfahren"
              >
                Mehr erfahren
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white/30 flex justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-white rounded-full"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;

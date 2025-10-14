"use client";

import { CursorContext } from "@/components/CursorContext";
import { motion } from "framer-motion";
import { useContext } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
  const router = useRouter();

  const handleContactClick = () => {
    router.push("/contact");
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2 } }}
      className="min-h-screen flex items-center overflow-x-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center h-full">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 2, duration: 1, ease: "easeInOut" },
            }}
            className="w-full text-center xl:text-left xl:w-[500px] pt-[150px]"
          >
            <motion.h1
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="h1 mb-8"
            >
              <span className="font-bold">Natürliche Schönheit</span> <br /> beginnt hier
            </motion.h1>
            <motion.p
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="lead max-w-xl mx-auto text-primary"
            >
              Maßgeschneiderte Hautpflegelösungen für einen gesunden Teint, die
              individuelle Pflege für strahlende Haut bieten.
            </motion.p>
            <div className="flex flex-col xl:flex-row items-center gap-8 max-w-max mx-auto">
              <motion.button
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                className="btn btn-lg"
                onClick={handleContactClick}
              >
                Termin buchen
              </motion.button>
            </div>
          </motion.div>
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.5, duration: 0.8, ease: "easeInOut" }}
              onMouseEnter={mouseEnterHandler}
              onMouseLeave={mouseLeaveHandler}
              className="hidden xl:flex justify-end"
            >
              <Image
                src="/assets/home/skin-care-woman.png"
                width={400}
                height={300}
                alt="Skin Care Woman"
                className="border-4 border-primary rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;

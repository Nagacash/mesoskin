"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";

const DripSpaInfusionenPage = () => {
  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen pb-12 xl:pt-32"
    >
      {/* Hero Section */}
      <section className="bg-accent-100 py-16 mt-32 mb-12">
        <div className="container mx-auto text-center">
          <motion.h1
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            className="h1 mb-4 text-primary"
          >
            Drip-Spa-Infusionen
          </motion.h1>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <p className="text-lg text-gray-700">Content for Drip-Spa-Infusionen will go here.</p>
      </div>
    </motion.div>
  );
};

export default DripSpaInfusionenPage;

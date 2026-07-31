"use client";

import { motion } from "framer-motion";
import TreatmentHero from "@/components/TreatmentHero";

const NoToxPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen overflow-x-hidden"
    >
      <TreatmentHero
        title="NoTox"
        subtitle="Sanfte, natürliche Gesichtsverjüngung — individuell abgestimmt auf Ihre Bedürfnisse."
        imageSrc="/assets/treatments/notox-hero.webp"
        imageAlt="NoTox Behandlung bei Mesoskin Hamburg"
        overlayOpacity="bg-black/25"
      />

      <div className="container mx-auto px-4 py-24">
        <p className="text-lg text-gray-700 max-w-3xl">
          Content for NoTox will go here.
        </p>
      </div>
    </motion.div>
  );
};

export default NoToxPage;

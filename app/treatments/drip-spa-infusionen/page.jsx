"use client";

import { motion } from "framer-motion";
import TreatmentHero from "@/components/TreatmentHero";

const DripSpaInfusionenPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.8 } }}
      className="min-h-screen overflow-x-hidden"
    >
      <TreatmentHero
        title="Drip-Spa-Infusionen"
        subtitle="Vitale Nährstoffe und Vitamine direkt über Infusionstherapie — für Energie und Wohlbefinden."
        imageSrc="/assets/treatments/drip-spa-infusionen-hero.webp"
        imageAlt="Drip Spa Infusionen bei Mesoskin Hamburg"
        overlayOpacity="bg-black/30"
      />

      <div className="container mx-auto px-4 py-24">
        <p className="text-lg text-gray-700 max-w-3xl">
          Content for Drip-Spa-Infusionen will go here.
        </p>
      </div>
    </motion.div>
  );
};

export default DripSpaInfusionenPage;
